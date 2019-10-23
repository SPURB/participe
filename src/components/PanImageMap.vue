<template>
	<!-- v-observe-visibility="{ callback: (isVisible, entry) => visibilityChanged(isVisible, entry, dados.url), once: true }" -->
	<div class="PanImageMap">
		<main :style="setGrid(0)">
			<template v-if="zoom == 0">
				<div class="slice" style="setGrid(1, 'zoomout.jpg')"></div>
			</template>
			<template v-if="zoom == 1">
				<div class="slice" v-for="slice in imgArr" :style="setGrid(1, slice.src)" v-observe-visibility="{ callback: (isVisible, entry) => visibilityChanged(isVisible, entry, slice.src), once: true }">
				</div>
			</template>
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
			imgArr: [],
			zoom: 1
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
		sliceRatio () { return (this.$props.data.sliceH / this.$props.data.sliceW) * 100 }
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
			for (var i = 1; i <= this.totalSlices; i++) {
				let thisPath = base + '/__' + i.toString().padStart(2, '0') + '.jpg'
				this.imgArr.push({ src: thisPath })
			}
		},
		setGrid (level, path) {
			let declare = ''
			if (level == 0) {
				this.zoom == 1 ? () => {
					declare = `gridTemplateColumns: repeat(${this.$props.data.cols}, 1fr); gridTemplateRows: repeat(${this.$props.data.rows}, 1fr)`
				} : () => {
					declare = `gridTemplateColumns: 1fr; gridTemplateRows: 1fr)`
				}
			} else if (level == 1) {
				this.zoom == 1 ? () => {
					declare = `backgroundImage: url('${path}'); paddingTop: ${this.sliceRatio}%; width: ${this.data.sliceW}px`
				} : () => {
					declare = `backgroundImage: url('${this.$store.getters.basePath}arquivos/${this.$route.path.slice(1,this.$route.path.length)}/${this.$props.data.dir}/${path}')`
				}
			}
			return declare
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
	max-width: 80vw;
	max-height: 80vh;
	overflow: auto;
	margin: 0 auto;
	main {
		display: grid;
		grid-gap: 0;
		.slice {
			background-size: contain;
		}
	}
}

</style>
