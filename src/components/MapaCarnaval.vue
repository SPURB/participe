<template>
	<div class="Mapa" ref="mapa">
		<div id="mapDiv" @mousedown="getMouseDown($event)" v-on:click="displayFeatureInfo($event)"></div>
		
		<div id="info"></div>
		<!-- <input type="text" name="id_desfile" v-model="id">
		<button v-on:click="carregarTrajeto(id)">Focar</button> -->
	</div>
</template>

<script>
import { Map, View } 	from 'ol'
import TileLayer 		from 'ol/layer/Tile'
import VectorLayer 		from 'ol/layer/Vector'
import KML 				from 'ol/format/KML'
import VectorSource 	from 'ol/source/Vector'
import OSM				from 'ol/source/OSM'
import Feature			from 'ol/Feature.js';
import Point			from 'ol/geom/Point.js';
import { Draw, Modify, Snap } from 'ol/interaction.js'
import { Circle as CircleStyle, Fill, Icon, Stroke, Style } from 'ol/style.js'
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
			desfiles: [],
			feature_atual: {}
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
		let app = this		
		let parametrosContato = app.$route.query.key ? '/?id=' + app.$route.query.id + '&key=' + app.$route.query.key : '/'
		
		this.createMap()
		this.removeFeatures()
		
		axios
			.get(apiconfig.base + '/desfile')
			.then(function(response) {
				app.desfiles = response
				// Após resposta, dá alguns milissegundos para o processamento do mapa e carrega o trajeto e suas informações
				window.setTimeout(function () {
					app.carregarTrajeto(app.$route.query.bloco)
				}, 1000)
			})
		axios
			.get(apiconfig.base + '/contato' + parametrosContato)
			.then(function(response){
				app.contatos = response
				// Carrega dados do contato no formulário
				if(app.contatos.data.length === 1) {
					app.$parent.contato = app.contatos.data[0]
				}
				else {
					console.warn("Contato não obtido. Possível erro na chave.")
				}
			})
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

			if (features.length > 0) {
				var info = []
				var i, ii
				for (i = 0, ii = features.length; i < ii; ++i) {
					info.push(features[i].get('name'))
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
					app.$parent.desfile = app.desfiles.data[i]
					app.$parent.desfile.trajeto_coords = JSON.stringify(app.feature_atual.values_.geometry.flatCoordinates)
				}
			}

			// Denota ponto de concentração e ponto de dispersão
			let aIconURL = this.$store.getters.basePath + 'arquivos/carnaval-2020/a_spot.png'
			let bIconURL = this.$store.getters.basePath + 'arquivos/carnaval-2020/b_spot.png'

			let aCoords = [app.feature_atual.values_.geometry.flatCoordinates[0], app.feature_atual.values_.geometry.flatCoordinates[1]]
			let bCoords = [app.feature_atual.values_.geometry.flatCoordinates[app.feature_atual.values_.geometry.flatCoordinates.length - 3], app.feature_atual.values_.geometry.flatCoordinates[app.feature_atual.values_.geometry.flatCoordinates.length - 2]]
			
			let featureA = new Feature({
				geometry: new Point(aCoords),
				name: 'Ponto de Concentração'
			});

			let featureB = new Feature({
				geometry: new Point(bCoords),
				name: 'Ponto de Dispersão'
			});

			var iconStyleA = new Style({
				image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
					anchor: [0.5, 1],
					anchorXUnits: 'fraction',
					anchorYUnits: 'fraction',
					src: aIconURL,
					scale: 1
				}))
			});
			var iconStyleB = new Style({
				image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
					anchor: [0.5, 1],
					anchorXUnits: 'fraction',
					anchorYUnits: 'fraction',
					src: bIconURL,
					scale: 1
				}))
			});
			
			featureA.setStyle(iconStyleA)
			featureB.setStyle(iconStyleB)
			
			app.mapLayers[1].getSource().addFeatures([featureB, featureA])
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
					app.feature_atual = feats[f]
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
