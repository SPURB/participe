<template>
	<div class="LayerExplorer">
		<main>
			<button class="prev" @click="prev(data.layers)" :disabled="state == 0" v-if="data.tipo == 'sequencial'">
				<i class="icon-seta_esquerda icon"><span>seta_esquerda</span></i>
			</button>
			<div v-if="!isIE" class="cont" ref="layerStack">
				<div class="layer" v-if="data.tipo === 'multi'" v-observe-visibility="{ callback: visibilityChanged, once: true }" :style="{ paddingTop: (data.mapH / data.mapW) * 100 + '%', width: '100%', height: '0' }" :data-image-path="data.base.path"></div>
				<div
					class="layer" 
					v-for="(layer, index) in data.layers"
					:class="{ visible: data.tipo == 'sequencial' && data.layers.indexOf(layer) === state }"
					v-observe-visibility="{
						callback: visibilityChanged,
						once: true
					}"
					:style="{ paddingTop: (data.mapH / data.mapW) * 100 + '%', width: '100%', height: '0' }"
					:data-image-path="layer.path"
					:key="index"></div>
			</div>
			<div v-if="isIE" class="cont" ref="layerStack">
				<img v-if="data.tipo == 'multi'" :src="src(data.base.path)" class="base">
				<img v-for="layer in data.layers" class="layer" :class="{ visible: data.tipo == 'sequencial' && data.layers.indexOf(layer) === state }" :src="src(layer.path)" alt="">
			</div>
			<button class="next" @click="next(data.layers)" :disabled="state == data.layers.length - 1" v-if="data.tipo == 'sequencial'">
				<i class="icon-seta_direita icon"><span>seta_direita</span></i>
			</button>
		</main>
		<aside>
			<ul class="legendaBase">
				<li v-for="legenda in data.base.legendas">
					<img :src="src(legenda.path)" alt="">
					<span>{{ legenda.descricao }}</span>
				</li>
			</ul>
			<template v-if="data.tipo == 'multi'">
				<ul class="layers" ref="layerList">
					<li v-for="layer in data.layers">
						<div class="item" @click="colexp($event, layer, data.layers)">
							<label class="switcher">
								<input type="checkbox" @click="toggleLayerVis(data.cssBaseId, data.layers, layer)">
								<span class="slider"></span>
							</label>
							<h3 class="layertitle">
								{{ layer.titulo }}
								<i class="icon-expandir icon"><span>expandir</span></i>
							</h3>
						</div>
						<div class="layerCont">
							<ul v-for="group in layer.legendas" class="legendaLayer">
								<template v-for="(legenda, index) in group">
									<li v-if="index == 0 && legenda.titulo" class="titLeg">
										<h4>{{ legenda.titulo }}</h4>
									</li>
									<li v-else="">
										<img v-if="legenda.path" :src="src(legenda.path)" alt="">
										<span v-if="legenda.char" class="char">{{ legenda.char }}</span>
										<span>{{ legenda.descricao }}</span>
									</li>
								</template>
							</ul>
							<ul class="textos">
								<li v-for="p in peers(layer.textos)">
									<h4 class="key" v-if="p[0].length > 2">{{p[0]}}</h4>
									<p>{{p[1]}}</p>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</template>
			<template v-if="data.tipo == 'sequencial'">
				<ul class="steps">
					<li v-for="(layer, index) in data.layers" :id="cssId(data.cssBaseId, data.layers, layer)" :class="{ visible: state == index }" :key="index">
						<div class="layerCont">
							<h3>{{layer.titulo}}</h3>
							<ul v-for="group in layer.legendas" class="legendaLayer">
								<template v-for="(legenda, index) in group">
									<li v-if="index == 0 && legenda.titulo" class="titLeg">
										<h4>{{ legenda.titulo }}</h4>
									</li>
									<li v-else="">
										<img v-if="legenda.path" :src="src(legenda.path)" alt="">
										<span v-if="legenda.char" class="char">{{ legenda.char }}</span>
										<span>{{ legenda.descricao }}</span>
									</li>
								</template>
							</ul>
							<ul class="textos">
								<li v-for="p in peers(layer.textos)">
									<h4 class="key" v-if="p[0].length > 2">{{p[0]}}</h4>
									<p>{{p[1]}}</p>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<nav>
					<button @click="prev(data.layers)" :disabled="state == 0"><i class="icon-seta_esquerda icon" clickable="false"><span>seta_esquerda</span></i></button>
					<div class="marker"><b>{{ state + 1 }}</b> de {{ data.layers.length }}</div>
					<button @click="next(data.layers)" :disabled="state == data.layers.length - 1"><i class="icon-seta_direita icon"><span>seta_direita</span></i></button>
				</nav>
			</template>
		</aside>
	</div>
</template>
<script>
import { fallbacks } from '@/mixins/fallbacks'

export default {
	name: 'LayerExplorer',
	mixins: [ fallbacks ],
	data () {
		return {
			state: 0
		}
	},
	props: {
		'data': {
			cssBaseId: String,
			tipo: String,
			mapW: Number,
			mapH: Number,
			base: {
				path: String,
				legendas: [
					{
						path: String,
						descricao: String
					}
				]
			},
			layers: [
				{
					titulo: String,
					path: String,
					legendas: [
						{
							path: String,
							descricao: String
						}
					],
					textos: Object
				}
			]
		}
	},
	computed: {
		toPrint () { return this.$store.state.toPrint },
		basePath () { return this.$store.getters.basePath }
	},
	methods: {
		src (path) {
			let short = path.slice(0, path.indexOf('.'))
			let ext = path.slice(path.indexOf('.'), path.length)
			return this.basePath + short + ext
		},
		cssId (base, arr, elem) {
			return `${base}_${arr.indexOf(elem).toString()}`
		},
		toggleLayerVis (base, arr, elem) {
			let stack = this.$refs.layerStack
			let position = arr.indexOf(elem) + 1
			stack.children[position].classList.toggle('visible')
		},
		colexp (event, elem, arr) {
			if (event.target.nodeName !== 'LABEL') {
				let position = arr.indexOf(elem)
				let layerList = this.$refs.layerList
				layerList.children[position].classList.toggle('visible')
			} else { return false }
		},
		next (layers) {
			this.state < (layers.length - 1) ? this.state++ : false
		},
		prev () {
			this.state > 0 ? this.state-- : false
		},
		peers (data) {
			if (Object.entries) {
				return Object.entries(data)
			} else {
				const ownProps = Object.keys(data)
				let i = ownProps.length
				let resArray = new Array(i)
				while (i--) {
					resArray[i] = [ownProps[i], data[ownProps[i]]]
				}
				return resArray
			}
		},
		visibilityChanged (isVisible, entry) {
			this.isVisible = isVisible
			let path = this.src(entry.target.getAttribute('data-image-path'))
			if (isVisible) {
				entry.target.style.backgroundImage = 'url("' + path + '")'
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
	display: flex;
	flex-flow: row nowrap;
	z-index: 2;
	aside {
		display: flex;
		flex-direction: column;
		min-width: 320px;
		max-width: 30%;
		padding: 0;
		overflow: hidden;
		background-color: #FFF;
		border: 1px solid $sombra-4;
		border-radius: 2px;
		box-shadow: 0 4px 4px $sombra-4;
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
						margin: 0.25rem 0 1rem;
						padding: 0;
						& >	li {
							display: inline-flex;
							align-items: flex-start;
							vertical-align: top;
							&:not(:last-child) { margin: 0 1rem 0.75rem 0; }
							img {
								width: 1rem;
								height: 1rem;
								margin-right: 0.25rem;
								position: relative;
								background-color: #FFF;
							}
							.char {
								width: 1rem;
								height: 1rem;
								text-align: center;
								border: 1px solid $sombra-4;
								color: $preto;
								font-weight: bold;
								margin-right: 0.25rem;
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
							&:not(:last-child) { margin-bottom: 1rem; }
							.key {
								font-family: $grotesca;
								margin: 1rem 0 0;
							}
							p {
								font-size: 1rem;
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
			overflow-y: auto;
			flex: 100%;
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
					padding: 0 1rem 0 0;
					cursor: pointer;
					& > h3 {
						width: 100%;
						margin: 0;
						padding: 0 0 0 0.75rem;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						.icon {
							display: inline-block;
							vertical-align: middle;
							cursor: pointer;
						}
					}
					.switcher {
						position: relative;
						display: inline-block;
						width: 3.5rem;
						height: 100%;
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
							top: 1rem;
							left: 1rem;
							right: 0;
							bottom: 1rem;
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
				.layerCont {
					padding: 0 1rem;
					max-height: 0;
					overflow: hidden;
					.legendaLayer {
						margin: 1rem 0;
						& > li.titLeg {
							display: block;
							margin: 0;
							h4 { margin: 0 0 0.25rem; }
						}
					}
					& > h4 {
						border-top: none;
						padding: 0;
					}
				}
				&.visible {
					max-height: 1000vh;
					transition: max-height ease-in .4s;
					.layerCont {
						max-height: 1000vh;
					}
					.item .icon {
						color: $cinza-2;
						transform: rotate(0.5turn);
					}
				}
			}
		}
		nav {
			button { display: none; }
			background-color: $cinza-3;
			padding: 0.5rem 1rem;
			font-size: 0.75rem;
			text-align: center;
			box-shadow: 0 -4px 8px $sombra-4;
			.marker {
				color: $sombra-3;
				b { color: $sombra-1; }
			}
		}
		ul.steps {
			list-style-type: none;
			margin: 0;
			padding: 0;
			flex: 1;
			overflow-y: auto;
			& > li {
				display: none;
				.layerCont {
					.legendaLayer {
						margin: 1rem 0;
						padding: 0 1rem;
						li.titLeg {
							margin: 0 0 0.5rem;
							display: block;
							h4 {
								margin: 0;
							}
						}
					}
					& > h3 {
						margin: 0 0 1rem;
						padding: 1rem 1rem 0;
						font-size: 2rem;
						@media (max-width: 600px) { font-size: 1.5rem; }
						line-height: 1.2;
					}
					.textos { padding: 0 1rem 2rem; }
				}
				&.visible {
					display: block;
				}
			}
		}
	}
	main {
		position: relative;
		max-width: 1200px;
		min-width: 70%;
		max-height: 80vh;
		.cont {
			width: 100%;
			height: 100%;
			.layer, .base {
				background-color: transparent;
				background-size: cover;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translateX(-50%) translateY(-50%);
				max-width: calc(100% - 2rem);
				max-height: calc(100% - 2rem);
				opacity: 0;
				transition: opacity ease-in .05s;
				&:first-child {
					background-color: $cinza-2;
					box-shadow: 0 8px 8px $sombra-3;
					opacity: 1;
				}
				&.visible {
					opacity: 1;
				}
			}
		}
		& > button {
			position: absolute;
			z-index: 1;
			background-color: $sombra-1;
			border-radius: 20rem;
			border: none;
			color: #FFF;
			font-size: 1.5rem;
			line-height: 2rem;
			padding: 0.75rem;
			opacity: 0;
			transition: all ease-in .1s;
			&, & > * { cursor: pointer; }
			&:active {
				transition: none;
				background-color: $sombra-3;
			}
			&:disabled {
				cursor: default;
				& .icon { cursor: default; }
			}
			&.prev {
				top: 50%;
				left: 0;
				transform: translateX(-1rem) translateY(-50%);
			}
			&.next {
				bottom: 50%;
				right: 0;
				transform: translateX(1rem) translateY(50%);
				transition-delay: .05s;
			}
		}
		&:hover > button {
			opacity: 1;
			&:disabled {
				opacity: 0;
			}
			&.prev {
				transform: translateX(2rem) translateY(-50%);
				transition-delay: .1s;
			}
			&.next {
				transform: translateX(-2rem) translateY(50%);
			}
		}
	}
	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: calc(100vw - 4rem);
		height: 90vh;
		max-width: unset;
		aside {
			min-width: unset;
			max-width: 100%;
			width: 100%;
			border-top: 1px solid $sombra-4;
			flex: 1;
			border-radius: 0 0 2px 2px;
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
						margin: 1rem;
						font-size: 0.75rem;
						border: 1px solid $sombra-4;
						border-radius: 4px;
						background-color: #FFF;
						&:first-child { margin-top: 0; }
						& > li.titLeg {
							display: inline-block;
							line-height: 1rem;
							margin: 0 1rem 0;
						}
						& > li:not(:last-child) { margin: 0 1rem 0 0; }
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
			nav {
				width: 100%;
				padding: 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: $preto;
				border-radius: 0 0 2px 2px;
				overflow: hidden;
				box-shadow: 0 -8px 16px $sombra-4;
				.marker {
					color: $cinza-1;
					b { color: #FFF; }
				}
				button {
					display: inline-block;
					background-color: rgba(255, 255, 255, .05);
					border: none;
					padding: 0.5rem;
					color: #FFF;
					cursor: pointer;
					font-size: 3rem;
					& > .icon {
						cursor: pointer;
					}
					&:active {
						background-color: $cinza-1;
					}
					&:disabled {
						color: rgba(255, 255, 255, .1);
						cursor: default;
						& .icon { cursor: default; }
					}
				}
			}
		}
		main {
			flex: 1;
			background-color: $cinza-3;
			border-radius: 2px 2px 0 0;
			overflow: hidden;
			border-top: 1px solid $sombra-4;
			border-right: 1px solid $sombra-4;
			border-bottom: none;
			border-left: 1px solid $sombra-4;
			.cont {
				.layer:first-child, .base { box-shadow: none; }
				img {
					max-width: 100%;
					max-height: 100%;
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
				button {
					font-size: 2rem;
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
		}
	}
}
</style>
