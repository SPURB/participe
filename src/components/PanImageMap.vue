<template>
	<!-- v-observe-visibility="{ callback: (isVisible, entry) => visibilityChanged(isVisible, entry, dados.url), once: true }" -->
	<div class="PanImageMap">
		<nav>
			<input type="range" min="0" max="1" value="0" @change="changeZoom($event)">
		</nav>
		<main :style="containerStyle()" ref="container" @drag="method($event)">
			<div class="slice" v-for="slice in zoom[activezoom]" :style="cellStyle(slice.src)" v-observe-visibility="{ callback: (isVisible, entry) => visibilityChanged(isVisible, entry, slice.src), once: true }">
			</div>
		</main>
	</div>
</template>

<script>
import { fallbacks } from '@/mixins/fallbacks'

export default {
	name: 'PanImageMap',
	mixins: [ fallbacks ],
	data () {
		return {
			isVisible: false,
			zoom: [],
			activezoom: 0
		}
	},
	props: {
		data: {
			dir: String,
			cols: Number,
			rows: Number,
			sliceW: Number,
			sliceH: Number
		}
	},
	computed: {
		totalSlices () { return this.$props.data.cols * this.$props.data.rows },
		sliceRatio () { return (this.$props.data.sliceH / this.$props.data.sliceW) * 100 },
		imageRatio () {
			let w = this.$props.data.cols * this.$props.data.sliceW
			let h = this.$props.data.rows * this.$props.data.sliceH
			return h / w * 100
		}
	},
	created () {
		this.getImages()
	},
	updated () {
	},
	methods: {
		visibilityChanged (isVisible, entry, src) {
			this.isVisible = isVisible
			if (isVisible) this.src = src
		},
		getImages () {
			let base = this.$store.getters.basePath + 'arquivos/' + this.$route.path.slice(1,this.$route.path.length) + '/' + this.$props.data.dir
			// definindo a array zoom[0]
			let imageAlone = [ { src: base + '/zoomout.jpg' } ]
			this.zoom.push(imageAlone)
			// definindo a array zoom[1]
			let slices = []
			for (var i = 1; i <= this.totalSlices; i++) {
				let thisPath = base + '/__' + i.toString().padStart(2, '0') + '.jpg'
				slices.push({ src: thisPath })
			}
			this.zoom.push(slices)
		},
		containerStyle () {
			if (this.activezoom == 0) return `gridTemplateColumns: 1fr; gridTemplateRows: 1fr; }`
			else if (this.activezoom == 1) return `gridTemplateColumns: repeat(${this.$props.data.cols}, 1fr); gridTemplateRows: repeat(${this.$props.data.rows}, 1fr)`
		},
		cellStyle (path) {
			if (this.activezoom == 0) {
				return `backgroundImage: url('${path}'); paddingTop: ${this.imageRatio}%;`
			} else if (this.activezoom == 1) {
				return `backgroundImage: url('${path}'); paddingTop: ${this.sliceRatio}%; width: ${this.data.sliceW}px`;
			}
		},
		changeZoom (e) {
			this.activezoom = e.target.value
		},
		method (e) {
			console.log(e)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

*::selection, *::-moz-selection {
	background: $vermelho;
	color: #FFF;
}

.PanImageMap {
	width: 80vw;
	height: 80vh;
	margin: 0 auto;
	position: relative;
	nav {
		position: absolute;
		bottom: -3rem;
		left: 50%;
		transform: translateX(-50%);
	}
	main {
		display: grid;
		grid-gap: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		.slice {
			background-size: cover;
		}
	}
}

</style>
