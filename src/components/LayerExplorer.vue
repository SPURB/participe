<template>
	<div class="LayerExplorer">
		<aside>
			<ul class="legendaBase">
				<li v-for="legenda in data.base.legendas">
					<img :src="legenda.path" alt="">
					<span>{{ legenda.descricao }}</span>
				</li>
			</ul>
			<template v-if="data.tipo == 'multi'">
				<ul class="layers" ref="layerList">
					<li v-for="layer in data.layers">
						<div class="item" @click="colexp($event, layer, data.layers)">
							<h3 class="layertitle">
								{{ layer.titulo }}
								<i class="icon-expandir icon"><span>expandir</span></i>
							</h3>
							<label class="switcher">
								<input type="checkbox" @click="toggleLayerVis(data.cssBaseId, data.layers, layer)">
								<span class="slider"></span>
							</label>
						</div>
						<div class="layerCont">
							<h4>{{ layer.tituloLegendas }}</h4>
							<ul class="legendaLayer">
								<li v-for="legenda in layer.legendas">
									<img :src="legenda.path" alt="">
									<span>{{ legenda.descricao }}</span>
								</li>
							</ul>
							<ul class="textos">
								<li v-for="p in peers(layer.textos)">
									<h4 class="key">{{p[0]}}</h4>
									<p>{{p[1]}}</p>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</template>
			<template v-if="data.tipo == 'sequencial'">
				<nav>
					<button @click="prev(data.layers)" :disabled="state == 0"><i class="icon-seta_esquerda icon" clickable="false"><span>seta_esquerda</span></i></button>
					<div class="marker"><b>{{ state + 1 }}</b> de {{ data.layers.length }}</div>
					<button @click="next(data.layers)" :disabled="state == data.layers.length - 1"><i class="icon-seta_direita icon"><span>seta_direita</span></i></button>
				</nav>
				<ul class="steps">
					<li v-for="(layer, index) in data.layers" :id="cssId(data.cssBaseId, data.layers, layer)" :class="{ visible: state == index }">
						<div class="layerCont">
							<h4>{{ layer.tituloLegendas }}</h4>
							<ul class="legendaLayer">
								<li v-for="legenda in layer.legendas">
									<img :src="legenda.path" alt="">
									<span>{{ legenda.descricao }}</span>
								</li>
							</ul>
							<h3>{{layer.titulo}}</h3>
							<ul class="textos">
								<li v-for="p in peers(layer.textos)">
									<h4 class="key">{{p[0]}}</h4>
									<p>{{p[1]}}</p>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</template>
		</aside>
		<main>
			<div class="cont" ref="layerStack">
				<img v-if="data.tipo == 'multi'" :src="data.base.path" class="base">
				<img v-for="(layer, index) in data.layers" class="layer" :class="{ visible: data.tipo == 'sequencial' && data.layers.indexOf(layer) === state }" :src="src(layer.path)" alt="">
			</div>
		</main>
	</div>
</template>
<script>
export default {
	name: 'LayerExplorer',
	data () {
		return {
			state: 0
		}
	},
	props: [ 'data' ],
	computed: {
		toPrint () { return this.$store.state.toPrint },
		basePath () { return this.$store.getters.basePath }
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
			let stack = this.$refs.layerStack
			let position = arr.indexOf(elem) + 1
			stack.children[position].classList.toggle('visible')
		},
		colexp (event, elem, arr) {
			if (event.target.nodeName != 'LABEL') {
				let position = arr.indexOf(elem)
				let layerList = this.$refs.layerList
				layerList.children[position].classList.toggle('visible')
			} else { return false }
		},
		next (layers) {
			if (this.state < (layers.length - 1)) {
				this.state += 1
			} else {
				return false
			}
		},
		prev () {
			if (this.state > 0) {
				this.state -= 1
			} else {
				return false
			}
		},
		peers (data) {
			if (Object.entries) {
				return Object.entries(data)
			} else {
				Object.entries = function(data) {
					var ownProps = Object.keys(data),
						i = ownProps.length,
						resArray = new Array(i);
					while (i--)
						resArray[i] = [ownProps[i], obj[ownProps[i]]];
					return resArray
				}
			}
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
	max-width: 1600px;
	margin: 4rem auto;
	background-color: #FFF;
	border: 1px solid $sombra-4;
	border-radius: 2px;
	box-shadow: 0 4px 4px $sombra-4;
	display: flex;
	flex-flow: row nowrap;
	overflow: hidden;
	aside {
		min-width: 320px;
		max-width: 30%;
		padding: 0;
		overflow-y: scroll;
		overflow-x: hidden;
		ul.legendaBase {
			list-style-type: none;
			padding: 1rem;
			margin: 0;
			border-bottom: 1px solid $sombra-4;
			li {
				display: inline-block;
				&:not(:last-child) {  margin: 0 1rem 0.25rem 0; }
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
		ul:not(.legendaBase) {
			& > li {
				.layerCont {
					& > h4 {
						margin: 0;
						padding: 1rem 1rem 0;
						font-size: 1rem;
						border-top: 1px solid $sombra-4;
					}
					.legendaLayer {
						list-style-type: none;
						margin: 0 0 1rem;
						padding: 0;
						& >	li {
							display: inline-block;
							&:not(:last-child) { margin: 0 1rem 0.25rem 0; }
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
					.textos {
						list-style: none;
						padding: 0 0 1rem;
						margin: 0;
						& > li {
							font-family: $serifada;
							white-space: pre-line;
							.key {
								font-family: $grotesca;
								margin: 1rem 0 0;
							}
							p {
								margin: 0;
								hyphens: auto;
								&:first-letter { text-transform: uppercase; }
							}
						}
					}
				}
			}
		}
		ul.layers {
			list-style: none;
			padding: 0;
			margin: 0;
			& > li {
				max-height: 3rem;
				overflow: hidden;
				background-color: #FFF;
				transition: none;
				&:nth-child(2n) {
					background-color: $cinza-3;
				}
				.item {
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
					align-items: center;
					height: 3rem;
					padding: 0 1rem;
					cursor: pointer;
					& > h3 {
						margin: 0;
						padding: 0;
						max-width: calc(100% - 3rem);
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						.icon {
							display: inline-block;
							vertical-align: 4px;
							cursor: pointer;
						}
					}
					.switcher {
						position: relative;
						display: inline-block;
						width: 2rem;
						height: 1rem;
						input {
							opacity: 0;
							width: 0;
							height: 0;
							&:checked + .slider::before {
								background-color: $vermelho;
								-webkit-transform: translateX(1rem);
								-ms-transform: translateX(1rem);
								transform: translateX(1rem);
							}
						}
						.slider {
							position: absolute;
							cursor: pointer;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							background-color: $cinza-2;
							border-radius: 0.5rem;
							transition: all ease-in-out .8s;
							&::before {
								position: absolute;
								content: "";
								height: 1.5rem;
								width: 1.5rem;
								left: -0.25rem;
								bottom: -0.25rem;
								border-radius: 100%;
								background-color: $cinza-1;
								transition: all ease-in .2s;
							}
						}
					}
				}
				&.visible {
					max-height: 1000vh;
					transition: max-height ease-in .4s;
					.item .icon {
						color: $cinza-2;
						transform: rotate(0.5turn);
					}
				}
				.layerCont {
					padding: 0 1rem;
					& > h4 {
						border-top: none;
						padding: 0;
					}
				}
			}
		}
		nav {
			padding: 1rem;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: $cinza-3;
			.marker {
				color: $cinza-1;
				b { color: $preto; }
			}
			button {
				background-color: $preto;
				border: none;
				padding: 0.5rem;
				border-radius: 2rem;
				color: #FFF;
				cursor: pointer;
				& > .icon { cursor: pointer; }
				&:active {
					background-color: $cinza-1;
				}
				&:disabled {
					background-color: $cinza-2;
					cursor: default;
					& .icon { cursor: default; }
				}
			}
		}
		ul.steps {
			list-style-type: none;
			margin: 0;
			padding: 0;
			& > li {
				display: none;
				.layerCont {
					.legendaLayer { padding: 0 1rem; }
					& > h3 {
						margin: 2rem 0 1rem;
						padding: 0 1rem;
						font-size: 1.5rem;
					}
					.textos { padding: 0 1rem 0.75rem; }
				}
				&.visible {
					display: block;
				}
			}
		}
	}
	main {
		position: relative;
		background-color: $preto;
		max-width: 1200px;
		min-width: 70%;
		max-height: 80vh;
		.cont {
			width: 100%;
			height: 100%;
			img {
				background-color: #FFF;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translateX(-50%) translateY(-50%);
				max-width: calc(100% - 2rem);
				max-height: calc(100% - 2rem);
				opacity: 0;
				&:first-child {
					box-shadow: 0 4px 4px $sombra-1;
					opacity: 1;
				}
				&.visible { opacity: 1; }
			}
		}
	}
	@media (max-width: 900px) {
		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-end;
		width: calc(100vw - 4rem);
		height: 90vh;
		max-width: unset;
		aside {
			min-width: unset;
			max-width: 100%;
			width: 100%;
			flex: 1;
			ul.legendaBase {
				overflow-x: auto;
				overflow-y: hidden;
				white-space: pre;
				width: auto;
				font-size: 0.75rem;
				& > li img { vertical-align: -4px; }
				& > li:last-child { margin-right: 1rem; }
			}
			ul:not(.legendaBase) > li {
				.layerCont {
					.legendaLayer {
						overflow-x: auto;
						overflow-y: hidden;
						white-space: pre;
						width: auto;
						padding: 0.75rem 1rem;
						margin: 0 1rem 1rem;
						font-size: 0.75rem;
						border: 1px solid $sombra-4;
						border-radius: 4px;
						background-color: #FFF;
						& > li img { vertical-align: -4px; }
						& > li:last-child { margin-right: 1rem; }
					}
				}
			}
			ul.layers > li {
				.layerCont {
					padding: 0;
					& > h4 { padding: 0 1rem; }
					.textos {
						padding: 0 1rem 2rem;
					}
				}
			}
		}
		main {
			flex: 1;
			.cont {
				img {
					max-width: 100%;
					max-height: 100%;
					&.base { box-shadow: none; }
				}
			}
		}
	}
	@media (max-width: 600px) {
		width: calc(100vw - 2rem);
		aside {
			flex: 2;
			nav {
				font-size: 0.75rem;
				padding: 0.5rem 1rem;
				button {
					.icon::before {
						font-size: 1rem;
					}
				}
			}
			ul.layers {
				& > li {
					.item {
						h3 {
							font-size: 1rem;
						}
					}
					.layerCont {
					}
				}
			}
			ul.steps {
				& > li {
					.layerCont {
						h4 {
							font-size: 0.75rem;
							text-transform: uppercase;
						}
					}
				}
			}
		}
	}
}
</style>
