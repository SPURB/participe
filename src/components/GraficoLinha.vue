<template>
	<div class="GraficoLinha">
		<svg ref="grafArea">
			<line v-for="y in arr" x1="0" x2="700" :y1="y" :y2="y" stroke="#333" stroke-width="0.2"/>
			<circle v-for="y in arr" :cy="y" :cx="(arr.indexOf(y) / (arr.length - 1)) * 700" r="10" fill="#333"/>
			<text v-for="y in arr" :x="((arr.indexOf(y) / (arr.length - 1)) * 700) - 10" :y="y - 16">{{y}}</text>
			<polyline :points="polylineRender(arr)" />
		</svg>
	</div>
</template>
<script>
export default {
	name: 'GraficoLinha',
	data () {
		return {
			arr: [200, 150, 50, 100, 0]
		}
	},
	computed: {},
	methods: {
		polylineRender(arr) {
			let points = ''
			for (let i = 0; arr.indexOf(arr[i]) < arr.length; i++) {
				// points =+ ((arr.indexOf(arr[i]) / (arr.length - 1)) * 700).toString() + ' ' +
				// arr[i].toString + ', '
				// console.log(i)
			}
			console.log(points)
		}
	},
	mounted () {
		let grafArea = this.$refs.grafArea
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

div.GraficoLinha {
	text-align: center;
	svg {
		max-width: 700px;
		width: 100vw;
		height: 500px;
		padding: 0 2rem;
		overflow: visible;
	}
}
</style>
