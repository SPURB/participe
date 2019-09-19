<template>
	<div class="Mapa" ref="mapa">
		<div id="mapDiv" @mousedown="getMouseDown($event)" v-on:click="displayFeatureInfo($event)"></div>
		<!-- <ul class="legenda">
			<template v-for="(layer, index) in mapaAttrs.layers">
				<li :key="index">
					<div :style="{
						backgroundColor:layer.fill_color,
						borderColor: layer.stroke_color,
						borderWidth: layer.stroke_width + 'px',
						// borderStyle: layer.stroke_dash.length > 1 ? 'dashed none none' : ''
						height: layer.fill_color ? '' : '0'
				}"></div>
				<a
					:href="layer.path"
					:download="layer.title + '.kml'"
				>{{ layer.title }}</a></li>
			</template>
		</ul> -->
		<div id="info"></div>
		<input type="text" name="id_desfile" v-model="id">
		<button v-on:click="carregarTrajeto(id)">Focar</button>
	</div>
</template>

<script>
import { Map, View } 	from 'ol'
import TileLayer 		from 'ol/layer/Tile'
import VectorLayer 		from 'ol/layer/Vector'
import KML 				from 'ol/format/KML'
import VectorSource 	from 'ol/source/Vector'
import OSM				from 'ol/source/OSM'
import { Draw, Modify, Snap } from 'ol/interaction.js'
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style.js'
import axios from 'axios'

const apiconfig = {
	base: process.env.VUE_APP_API_URL + '/participe-restrito'
}

// import {defaults as defaultControls, Attribution } from 'ol/control.js';
// import ScaleLine 		from 'ol/control/ScaleLine';

// import { chavesExternas } from '../../apiconfig.json'

export default {
	name: 'MapaCarnaval',
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
					stroke_dash: Array,
					title: String
				}
			]
		},
		'styleFromKML': false
	},
	data () {
		return {
			map: {},
			allFeatures: [],
			id: '',
			contatos: [],
			desfiles: []
		}
	},
	computed: {
		mapLayers () {
			let styleFromKML = this.styleFromKML
			let retLayers = [
				new TileLayer({
					source: new OSM()
				})
			]
			this.mapaAttrs.layers.map(function (index) {
				let kmlLayer = new VectorLayer({
					style: new Style({
						stroke: new Stroke({
							// color: index.stroke_color,
							color: 'rgba(0, 0, 0, 0)',
							width: index.stroke_width,
							lineDash: index.stroke_dash
						}),
						fill: new Fill({
							color: index.fill_color
						})
					}),
					source: new VectorSource({
						url: index.path,
						format: new KML({
							extractStyles: styleFromKML,
							extractAttributes: true
						})
					})
				})
				retLayers.push(kmlLayer)
			})
			return retLayers
		},
		mapView () {
			return new View({
				center: this.mapaAttrs.center,
				zoom: this.mapaAttrs.zoom,
				layers: this.mapaAttrs.layers
			})
		}
	},
	mounted () {
		this.createMap(),
		this.removeFeatures()
		axios
			.get(apiconfig.base + '/desfile')
			.then(response => (this.desfiles = response))
		axios
			.get(apiconfig.base + '/contato')
			.then(response => (this.contatos = response))
	},
	methods: {
		createMap () {
			this.map = new Map({
				target: 'mapDiv',
				layers: this.mapLayers,
				// layers: [
				// 	new TileLayer({
				// 		source: new OSM()
				// 	})
				// ],
				view: this.mapView
			})
			// map.getView().fit(vectorLayerInformacoes.getSource().getExtent(), mapInformacoes.getSize())
		},
		// map.on('click', function(evt) {
		// 	displayFeatureInfo(evt.pixel);
		// });
		getMouseDown (evt) {
			console.log(evt)
		},
		displayFeatureInfo (evt) {
			let pixel = [evt.offsetX, evt.offsetY]
			var features = []
			this.map.forEachFeatureAtPixel(pixel, function (feature) {
				features.push(feature)
			})
			// console.log(this.map);
			if (features.length > 0) {
				var info = []
				var i, ii
				for (i = 0, ii = features.length; i < ii; ++i) {
					info.push(features[i].get('name'))
					console.log(features[i])
				}
				document.getElementById('info').innerHTML = info.join('; ') || '(unknown)'
				// this.map.getTarget().style.cursor = 'pointer';
			} else {
				document.getElementById('info').innerHTML = '&nbsp;'
				// this.map.getTarget().style.cursor = '';
			}
		},
		carregarTrajeto (idBloco) {
			let app = this
			this.filtraFeatures(idBloco)
			for (var i = 0; i < app.desfiles.data.length; i++) {
				if(app.desfiles.data[i].id === idBloco) {
					console.log(app.desfiles.data[i])
					app.$parent.desfile = app.desfiles.data[i]
				}
			}
			// for (var i = this.mapLayers[1].getSource().getFeatures().length - 1; i >= 0; i--) {
			// 	// console.log(this.mapLayers[1].getSource().getFeatures()[i].values_)
			// 	if (this.mapLayers[1].getSource().getFeatures()[i].values_.ID === idBloco) {
			// 		console.log('Encontrado!')
			// 	}
			// }
		},
		filtraFeatures (idFeature) {
			let app = this
			var feats = app.allFeatures

			// Remove todas as features
			let mapFeatures = app.mapLayers[1].getSource().getFeatures()
			if (mapFeatures.length > 0) {
				for (var i = 0; i < mapFeatures.length; i++) {
					app.mapLayers[1].getSource().removeFeature(mapFeatures[i])
				}
			}

			// Adiciona a feature selecionada
			for (var f in feats) {
				if (parseInt(feats[f].values_.ID) === parseInt(idFeature)) {
					this.mapLayers[1].getSource().addFeature(feats[f])
				}
			}
			if (app.mapLayers[1].getSource().getFeatures().length === 0) {
				return
			}
			window.setTimeout(function () {
				app.map.getView().fit(app.map.getLayers().array_[1].getSource().getExtent(), { duration: 10 })
			}, 100)
		},
		// Remove features que não serão exibidas
		removeFeatures () {
			let app = this
			window.setTimeout(function () {
				app.allFeatures = app.mapLayers[1].getSource().getFeatures()
				app.filtraFeatures('9999')
				app.map.getLayers().array_[1].style_.stroke_.color_ = 'rgba(0, 0, 0, 1)'
				app.map.getView().setZoom(app.map.getView().getZoom() + 0.000001) // Atualiza mapa
			}, 1000)
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
	margin: 1rem auto 2rem auto;
	border: 1px solid #BDBDBD;
	border-radius: 2px;
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
