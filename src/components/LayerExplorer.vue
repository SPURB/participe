<template>
	<div class="LayerExplorer">
		<aside>
			<ul class="legendaBase">
				<li v-for="legenda in data.base.legendas">
					<img :src="legenda.path" alt=""> <!--mudar src para src() -->
					<span>{{ legenda.descricao }}</span>
				</li>
			</ul>
			<ul class="layers">
				<li v-for="layer in data.layers">
					<span class="layertitle">{{ layer.titulo }}</span>
					<i class="icon-expandir icon" @click="colexp($event)"><span>expandir</span></i>
					<button @click="toggleLayerVis(data.cssBaseId, data.layers, layer)">Liga/desliga</button>
					<div class="layerCont">
						<ul class="legendaLayer">
							<li v-for="legenda in layer.legendas">
								<img :src="legenda.path" alt=""> <!--mudar src para src() -->
								{{ legenda.descricao }}
							</li>
						</ul>
						<ul class="textos">
							<li v-for="p in Object.entries(layer.textos)">
								<span class="key">{{p[0]}}</span> {{p[1]}}
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</aside>
		<main>
			<div class="cont" :style="{ marginBottom: (data.mapH/data.mapW * 100) + '%' }">
				<img :src="data.base.path" class="base">
				<div v-for="layer in data.layers" :id="cssId(data.cssBaseId, data.layers, layer)" class="layer" :style="{ backgroundImage: 'url(' + src(layer.path) + ')', paddingTop: (data.mapH/data.mapW * 100) + '%' }"></div>
			</div>
		</main>
	</div>
</template>
<script>
export default {
	name: 'LayerExplorer',
	data () {
		return {
			loading: true,
			zindex: 0
		}
	},
	props: [ 'data' ],
	computed: {
		toPrint () { return this.$store.state.toPrint },
		basePath () { return this.$store.getters.basePath },
	},
	mounted () {},
	methods: {
		src (path) {
			return this.basePath + path
		},
		cssId (base, arr, elem) {
			return `${base}_${arr.indexOf(elem).toString()}`
		},
		toggleLayerVis (base, arr, elem) {
			let id = this.cssId(base, arr, elem)
			document.getElementById(id).classList.toggle('visible')
		},
		colexp (event) {
			event.target.parentNode.classList.toggle('visible')
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

* { box-sizing: border-box; }

.LayerExplorer {
	position: relative;
	height: 80vh;
	width: calc(100vw - 8rem);
	margin: 4rem auto;
	background-color: #FFF;
	border: 1px solid $sombra-4;
	border-radius: 2px;
	box-shadow: 0 4px 4px $sombra-4;
	display: grid;
	grid-template-columns: 1fr 2fr;
	overflow: hidden;
	aside {
		min-width: 320px;
		padding: 0 1rem;
		overflow-y: scroll;
		overflow-x: hidden;
		ul.legendaBase {
			list-style: none;
			padding: 1rem 0;
			margin: 0;
			border-bottom: 1px solid $sombra-4;
			li {
				display: inline-block;
				&:not(:last-child) { margin-right: 1rem; }
				img {
					margin-right: 0.25rem;
					vertical-align: -2px;
				}
				span {
					line-height: 1rem;
					color: $cinza-1;
				}
			}
		}
		ul.layers {
			list-style: none;
			padding: 0;
			margin: 0;
			& > li {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				grid-template-rows: 100% 1fr;
				overflow: hidden;
				.layertitle {
					display: inline-block;
					padding: 1rem 0;
					grid-row: 1/2;
					grid-column: 1/2;
				}
				& > i.icon {
					display: inline-block;
					color: blue;
					grid-row: 1/2;
					grid-column: 2/3;
				}
				& > button {
					float: right;
					margin: 1rem 0;
					grid-row: 1/2;
					grid-column: 3/4;
				}
				.layerCont {
					max-height: 0;
					overflow: hidden;
					grid-row: 2/3;
					grid-column: 1/4;
					ul.legendaLayer {
						list-style: none;
						padding: 0;
						margin: 0;
						& > li {}
					}
					ul.textos {
						list-style: none;
						padding: 0;
						margin: 0;
						& > li {
							font-family: $serifada;
							.key {
								font-family: $grotesca;
								font-weight: bold;
							}
						}
					}
				}
				&.visible {
					& > i.icon {
						transform: rotate(180deg);
						color: red;
					}
					.layerCont {
						max-height: 1000vh;
					}
				}
			}
		}
	}
	main {
		position: relative;
		display: flex;
		align-items: center;
		background-color: $preto;
		.cont {
			img {
				position: absolute;
				width: 100%;
				transform: scale(.99);
				box-shadow: 0 4px 4px $sombra-1;
			}
			div.layer {
				position: absolute;
				width: 100%;
				transform: scale(.99);
				background-size: 0;
				&.visible {
					background-size: cover;
				}
			}
		}
	}
	@media (max-width: 1200px) {
		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-end;
		width: calc(100vw - 4rem);
		aside {
			width: 100%;
			min-width: 100%;
			max-width: 100%;
		}
		main {
			width: 100%;
			.cont {
				img, div.layer {
					transform: scale(1);
				}
			}
		}
	}
	@media (max-width: 600px) {
		width: calc(100vw - 2rem);
	}
}
</style>
