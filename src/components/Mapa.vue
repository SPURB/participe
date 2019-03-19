<template>
	<div class="Mapa" ref="mapa">
		<div id="map"></div>
		<ul class="legenda">
			<template v-for="(index, layer) in mapa_attrs.layers">
				<li :key="index">
					<div :style="{
						backgroundColor:layer.fill_color,
						borderColor: layer.stroke_color,
						borderWidth: layer.stroke_width + 'px',
				}"></div>
				<a
					:href="layer.path"
					:download="layer.title + '.kml'"
				>{{ layer.title }}</a></li>
			</template>
		</ul>
	</div>
</template>

<script>
import { Map, View } 	from 'ol'
import TileLayer 		from 'ol/layer/Tile'
import VectorLayer 		from 'ol/layer/Vector'
import Style 			from 'ol/style/Style'
import Stroke 			from 'ol/style/Stroke'
import Fill 			from 'ol/style/Fill'
import KML 				from 'ol/format/KML'
import BingMaps 		from 'ol/source/BingMaps'
import VectorSource 	from 'ol/source/Vector'
// import {defaults as defaultControls, Attribution } from 'ol/control.js';
// import ScaleLine 		from 'ol/control/ScaleLine';

// import { chavesExternas } from '../../apiconfig.json'

export default{
	name: 'Mapa',
	props: {
		'mapa_attrs': {
			center: [
				{ // centróide do kml (eixo y)
					type: Number,
					required: true
				},
				{ // centróide do kml (eixo y)
					type: Number,
					required: true
				}
			],
			zoom: {
				type: Number,
				default: 10
			},
			layers: [
				{
					fill_color: String,
					path: String,
					stroke_color: String,
					stroke_width: Number,
					title: String
				}
			]
		}
	},
	computed: {
		mapLayers () {
			let output_layers = [
				new TileLayer({
					source: new BingMaps({
						imagerySet: 'AerialWithLabels',
						culture: 'pt-BR',
						key: process.env.VUE_APP_BING_MAPS_KEY
					})
				})
			]
			this.mapa_attrs.layers.map(function (index) {
				let kml_layer = new VectorLayer({
					style: new Style({
						stroke: new Stroke({
							color: index.stroke_color,
							width: index.stroke_width
						}),
						fill: new Fill({
							color: index.fill_color
						})
					}),
					source: new VectorSource({
						url: index.path,
						format: new KML({
							extractStyles: false
						})
					})
				})
				output_layers.push(kml_layer)
			})
			return output_layers
		},
		mapView () {
			return new View({
				center: this.mapa_attrs.center,
				zoom: this.mapa_attrs.zoom
			})
		}
	},
	mounted () {
		this.createMap()
	},
	methods: {
		createMap () {
			let map = new Map({
				layers: this.mapLayers,
				target: 'map',
				view: this.mapView
				// controls: defaultControls({
				// 	attributionOptions: {
				// 		collapsible: true,
				// 		collapsed: true
				// 		label:'some Label'
				// 	}
				// })
				// .extend([
				// 	new ScaleLine(),
				// ])
			})
			if (this.$refs.mapa.clientHeight < 500) {
				this.mapView.setZoom(12)
			} else {
				this.mapView.setMinZoom(this.mapa_attrs.zoom)
			}
		}
	}
}
</script>
<style type="text/css">
#map .ol-overlaycontainer-stopevent {
	display: none;
}
</style>

<style lang="scss" scoped>
@import "../../node_modules/ol/ol.css";

div.Mapa {
	max-width: 992px;
	margin: 4rem auto 2rem auto;
	border: 1px solid #BDBDBD;
	border-radius: 2px;
	overflow: hidden;
	z-index: 1;

	#map:active {
		cursor: move;
	};

	ul.legenda {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		max-width: 992px;
		padding: 1rem;
		margin: 0;
		font-family: inherit;

		li {
			display: inline-flex;
			align-items: center;
			font-size: small;
			margin: 0 2rem 0 0;

			div {
				border-style: solid;
				border-width: 1px;
				height: 1.2rem;
				min-width: 1.2rem;
				margin-right: .4rem;
				line-height: calc(1.2rem - 2px);
				text-align: center;

				&.linha {
					max-height: 0px;
					overflow: hidden;
					border-width: 1px;
				};
			};

			a {
				color: inherit;

				&:hover {
					opacity: .4;
					text-decoration: none;
				};
			};

			&:last-child {
				margin-right: 0;
			};
		};

		@media screen and (max-width: 600px) {
			li {
				display: block;
				width: 100%;
				margin: 0 0 1rem 0;
				padding: 0;
				text-align: left;

				div {
					display: inline-block;
					vertical-align: middle;
				};
			};
		};
	};

	@media print {
		display: none;
	}
};

</style>
