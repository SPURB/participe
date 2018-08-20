<template>
	<div class="Mapa">
		<div id="map"></div>
		<ul class="legenda">
			<template v-for="layer in mapa_attrs.layers">
				<li>
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
export default{
	name:'Mapa',
	data(){
		return {
		}
	},
	computed:{
		mapLayers(){
			let output_layers = [
				new ol.layer.Tile({
					source: new ol.source.BingMaps({
						imagerySet: 'AerialWithLabels', 
						culture: 'pt-BR',
						key: 'efIeX8pQ5PTC2IcEjuVT~s7zLBU5z6I20qWhPhkAy3w~AlgB9eABTaOsOC8LVDJEQhyb4ik0B0mWBpIfDgrVwNYVqgfnxOsXFN3_8XKZlP1d'
					})
				})
			]
			this.mapa_attrs.layers.map(function(index) {
				let kml_layer = new ol.layer.Vector({
					style: new ol.style.Style({
						stroke: new ol.style.Stroke({
							color: index.stroke_color,
							width: index.stroke_width
						}),
						fill: new ol.style.Fill({
							color: index.fill_color,
						})
					}),
					source: new ol.source.Vector({
						url: index.path,
						format: new ol.format.KML({
							extractStyles: false,
						})
					})
				})
				output_layers.push(kml_layer)
			})
			return output_layers
		},
		mapView(){
			return new ol.View({
				center: this.mapa_attrs.center,
				zoom: this.mapa_attrs.zoom
			})
		}
	},
	props:[ 'mapa_attrs' ], 
	mounted(){
		let app = this
		this.createMap()
		this.mapView.setMinZoom(this.mapa_attrs.zoom)
	},
	methods:{
		createMap(){
			new ol.Map({
				layers: this.mapLayers,
				target: 'map',
				view: this.mapView,
				controls: ol.control.defaults({
					attributionOptions: {
						collapsible: true
					}
					}).extend([
						new ol.control.ScaleLine()
					])
			})
		},
	}
}	
</script>
<style lang="scss" scoped>
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
		padding: 1rem 2rem 0 1rem;
		margin-bottom: 0;
		margin-top: 0;
		font-family: inherit;
		
		li {
			display: inline-flex;
			align-items: center;
			font-size: small;
			margin: 0;
			padding: 0 0 .8rem 0;
			margin-right: 2rem;

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

		@media (max-width: 600px) {
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
};

</style>