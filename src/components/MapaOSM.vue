<template>
	<div class="Mapa" ref="mapa">
		<div id="map"></div>
	</div>
</template>

<script>
// import ol 				from 'ol'
import { Map, View } 	from 'ol'
import TileLayer 		from 'ol/layer/Tile'
// import VectorLayer 		from 'ol/layer/Vector'
// import Style 			from 'ol/style/Style'
// import Stroke 			from 'ol/style/Stroke'
// import Fill 			from 'ol/style/Fill'
import KML 				from 'ol/format/KML'
// import VectorSource 	from 'ol/source/Vector'
import OSM from 'ol/source/OSM'
// import {defaults as defaultControls, Attribution } from 'ol/control.js';
// import ScaleLine 		from 'ol/control/ScaleLine';

// import { chavesExternas } from '../../apiconfig.json'

export default {
	name: 'MapaOSM',
	props: {
		'mapaAttrs': {
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
		mapView () {
			return new View({
				center: this.mapaAttrs.center,
				zoom: this.mapaAttrs.zoom,
				layers: this.mapaAttrs.layers
			})
		}
	},
	mounted () {
		this.createMap()
	},
	methods: {
		createMap () {
			const map = new Map({
				target: 'map',
				// layers: this.mapLayers,
				layers: [
					new TileLayer({
						source: new OSM()
					})
				],
				view: this.mapView
				// view: new View({
				// 	center: [ -5191000, -2698002 ],
				// 	zoom: 12
				// })
			})
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
	max-width: 700px;
	// width: 512px;
	// height: 256px;
	margin: 4rem auto 2rem auto;
	// border: 1px solid #BDBDBD;
	// border-radius: 2px;
	// overflow: hidden;
	// z-index: 1;

	// #map:active {
		// cursor: move;
	// };

	ul.legenda {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		max-width: 700px;
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
