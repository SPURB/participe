<template>
	<span></span>
	<!-- <div class="GraficoLinha">
		<svg ref="grafArea">
			<line v-for="y in arr" x1="0" x2="700" :y1="y" :y2="y" stroke="#333" stroke-width="0.2"/>
			<line v-for="step in max(arr, 10)" x1="0" x2="700" :y1="step" :y2="step" stroke="#333" stroke-width="0.2"/>
			<circle v-for="point in arr" :cy="point.y" :cx="(arr.indexOf(point) / (arr.length - 1)) * 700" r="2" fill="#333"/>
			<text v-for="point in arr" :x="((arr.indexOf(point) / (arr.length - 1)) * 700) - 10" :y="point.y - 12">{{ point.y }}</text>
			<text v-for="point in arr" :x="((arr.indexOf(point) / (arr.length - 1)) * 700) - 10" :y="point.y - 28" style="font-size: x-small;">{{ point.x }}</text>
			<text v-for="y in max(arr, 10)" x="0" :y="y + 16">{{ y }}</text>
			<polyline :points="polylineRender(arr)" fill="none" stroke="#333" />
		</svg>
	</div> -->
</template>
<script>
export default {
	name: 'GraficoLinha',
	data () {
		return {
			// arr: [ { "y": 480, "x": 2001}, { "y": 165, "x": 2002}, { "y": 147, "x": 2003}, { "y": 168, "x": 2004}, { "y": 22, "x": 2005}, { "y": 135, "x": 2006}, { "y": 33, "x": 2007}, { "y": 34, "x": 2008}, { "y": 0, "x": 2009}]
		}
	},
	computed: {},
	methods: {
		polylineRender (array) {
			let points = ''
			let point = ''
			let ys = []
			array.map(point => {
				ys.push(point.y)
			})
			for (let i = 0; i < ys.length; i++) {
				point = ((i / (ys.length - 1)) * 700) + ',' + ys[i] + ' '
				points = points + point
			}
			return points
		},
		max (array, nSteps) {
			let ys = []
			array.map(point => {
				ys.push(point.y)
			})
			let step = (Math.max(...ys) - Math.min(...ys)) / nSteps
			let lineYs = []
			for (let i = 0; i <= Math.max(...ys); i = i + step) {
				lineYs.push(i)
			}
			return lineYs
		}
	},
	mounted () {
		// let grafArea = this.$refs.grafArea
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
