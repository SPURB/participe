<template>
	<div class="Imagem">
		<figure :class="dados.tipo">
			<div class="imgWrap">
				<img :src="dados.url" :alt="dados.caption" :title="dados.titulo">
				<a :href="dados.url" target="_blank"><i class="icon-acessar_url icon"></i></a>
			</div>
			<figcaption v-if="dados.caption">
				{{ dados.caption }}
				<span class="captionFonte" v-if="dados.fonte"> (Fonte: {{ dados.fonte }})</span>
			</figcaption>
			<div class="legenda">
				<h1 v-if="dados.titulo">{{ dados.titulo }}</h1>
				<ul>
					<li v-for="(item, index) in dados.legenda" :key=index>
						<div :style="{ backgroundColor: item.fundo, outlineColor: item.borda, outlineWidth: item.espessura + 'px' }" :class="{ linha: item.linha, pontilhado: item.pontilhado }"><img v-if="item.simbolo" :src="item.simbolo"><span v-if="item.char">{{ item.char }}</span></div> {{ item.descricao }}
					</li>
				</ul>
			</div>
			<div class="extra">
				<slot name="extra"></slot>
			</div>
			<div class="fonte" v-if="dados.fonte">Fonte: <span>{{ dados.fonte }}</span></div>
		</figure>
	</div>
</template>

<script>
export default {
	name: 'Imagem',
	props: {
		dados: {
			type: Object,
			tipo: {
				type: String,
				required: true
			},
			titulo: String,
			url: String,
			caption: String,
			legenda: {
				type: Array,
				item: {
					type: Object,
					simbolo: String,
					char: String,
					linha: Boolean,
					fundo: String,
					descricao: String
				}
			},
			fonte: String,
			externo: String
		}
	},
	methods: {
		montaLink () {
			if (this.$props.dados.externo && this.$props.dados.externo !== '' && this.$props.dados.externo !== ' ') {
				let app = this
				this.$el.classList.add('link')
				this.$el.firstElementChild.addEventListener('click', function (event) {
					if (event.target.nodeName !== 'I') {
						window.location.href = app.$store.getters.basePath + app.$props.dados.externo
					}
				})
			} else {
				return false
			}
		}
	},
	mounted () {
		this.montaLink()
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

*::selection, *::-moz-selection {
	background: $vermelho;
	color: #FFF;
}

div.Imagem {
	figure {
		margin: 4rem auto;
		padding: 0 2rem;
		max-width: 700px;
		@media screen and (max-width: 600px) { margin: 2rem 1rem; }
		* {
			font-family: $grotesca;
			font-size: small;
			color: $preto;
		}
		div.imgWrap {
			position: relative;
			text-align: center;
			img {
				width: 100%;
			}
			a {
				position: absolute;
				top: 16px;
				right: 12px;
				background: $sombra-3;
				padding: 4px;
				border-radius: 2px;
				font-size: x-small;
				opacity: 0;
				transition: all ease-in-out .2s;
				i { color: #FFF; cursor: pointer; }
				&:hover, &:active {
					text-decoration: none;
					background-color: $sombra-2;
				}
				@media screen and (max-width: 600px) {
					opacity: 1;
				}
				display: none;
			}
			&:hover a { opacity: 1; };
		}
		div.legenda, div.fonte { display: none; }
	}
	figure.mapa {
		max-width: 992px;
		border: 1px solid $cinza-2;
		border-radius: 2px;
		overflow: hidden;
		background-color: #FFF;
		padding: 0;
		div.imgWrap {
			a { display: inline-block; }
		}
		figcaption { display: none; }
		div.legenda, div.fonte { display: block; }
		div.legenda {
			padding: 2rem;
			h1 {
				font-size: initial;
				text-align: center;
				margin: 0 0 1rem 0;
			}
			ul {
				list-style-type: none;
				margin: 0;
				padding: 0;
				text-align: center;
				li {
					display: inline-block;
					margin: 4px;
					padding: 8px;
					border: 1px solid $sombra-4;
					border-radius: 2px;
					div {
						display: inline-flex;
						align-items: center;
						justify-content: center;
						min-width: 16px;
						height: 16px;
						overflow: hidden;
						vertical-align: middle;
						margin-right: 4px;
						outline-style: solid;
						outline-color: transparent;
						outline-offset: -2px;
						span {
							font-weight: bold;
						}
						&.linha {
							max-height: 2px;
						}
						&.pontilhado {
							outline-style: dashed;
						}
					}
				}
			}
		}
		div.extra {
			text-align: center;
			& > * {
				margin: 0 2rem 2rem;
			}
		}
		@media screen and (max-width: 600px) {
			div.legenda {
				padding: 1rem;
				ul {
					text-align: left;
					max-height: 160px;
					overflow: auto;
					li {
						display: flex;
						align-items: center;
						border: 0;
						padding: 0 16px 0 0;
						margin: 0 0 12px 0;
						div { margin-right: 8px; }
					}
				}
			}
			div.extra > * { margin: 0 1rem 1rem; }
		}
		div.fonte {
			margin: 0 0 1rem 0;
			padding: 0 1rem;
			font-size: x-small;
			color: $cinza-1;
			span {
				font-weight: bold;
				color: inherit;
				font-size: inherit;
			}
		}
	}
	figure.w992 {
		padding: 0;
		max-width: 992px;
		div.imgWrap a { display: inline-block; }
		figcaption {
			padding: 0 0 4px;
			color: $cinza-1;
			border-bottom: 1px solid $cinza-3;
		}
	}
	figure.destaque {
		position: relative;
		max-width: unset;
		padding: 0;
		background-color: $preto;
		height: 100vh;
		min-width: 100%;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		div.imgWrap img {
			width: initial;
			max-height: 80vh;
			box-shadow: 0 8px 8px $sombra-2;
			background-color: $cinza-3;
		}
		div.legenda { display: none; }
		figcaption, div.fonte {
			display: block;
			position: absolute;
			bottom: 40px;
			background-color: $sombra-3;
			color: #FFF;
			padding: 4px 8px;
			border-radius: 2px;
			span { color: inherit; }
		}
		figcaption {
			left: 80px;
			font-weight: bold;
			span.captionFonte { display: none; }
		}
		div.fonte {
			right: 80px;
			font-size: x-small;
			span { font-size: inherit; }
		}
		@media screen and (max-width: 600px) {
			margin: 1rem 0;
			padding: 1rem;
			align-items: flex-start;
			div.imgWrap {
				img {
					width: 100%;
					margin-bottom: 1rem;
				}
				a { display: inline-block; }
			}
			figcaption, div.fonte {
				display: block;
				position: unset;
				left: unset;
				right: unset;
				bottom: unset;
				padding: 0;
				background-color: unset;
			}
		}
	}
	figure.hero {
		position: relative;
		margin: 2rem 0;
		padding: 0;
		width: 100%;
		max-height: 100vh;
		overflow: hidden;
		background-color: #FFF;
		max-width: 100%;
		div.imgWrap {
			img {
				max-width: 100%;
				height: 100vh;
				width: auto;
				@supports (object-fit: cover) {
					width: 100%;
					object-fit: cover;
				}
			}
		}
		figcaption {
			position: absolute;
			bottom: 20px;
			right: 20px;
			left: 20px;
			background-color: $sombra-1;
			color: #FFF;
			padding: 8px 12px;
			border-radius: 2px;
			font-size: small;
			span.captionFonte {
				display: inline-block;
				color: inherit;
				font-size: inherit;
				opacity: .4;
			}
		}
		div.legenda { display: none; }
		div.fonte { display: none; }
		@media screen and (max-width: 600px) {
			background-color: $preto;
			div.imgWrap {
				img { object-fit: contain; }
				a {
					display: inline-block;
				}
			}
			figcaption {
				bottom: 12px;
				left: 12px;
				right: 12px;
			}
		}
	}
	figure.coluna {
		padding: 0 2rem;
		@media screen and (max-width: 600px) { padding: 0; }
		max-width: 700px;
		div.imgWrap {
			img { width: 100%; }
			a { display: inline-block; }
		}
		figcaption {
			margin: 0;
			padding: 4px 0 8px 0;
			color: $cinza-1;
			border-bottom: 1px solid $sombra-4;
			span.captionFonte {
				display: inline-block;
				font-size: inherit;
				color: $cinza-2;
			}
		}
		div.legenda { display: none; }
		div.fonte { display: none; }
	}
	figure.default {
		width: 700px;
		width: -webkit-min-content;
		width: -moz-min-content;
		width: min-content;
		max-width: 100%;
		div.imgWrap img {
			width: auto;
			max-width: calc(700px - 4rem);
		}
		figcaption {
			margin: 0;
			padding: 4px 0 8px 0;
			color: $cinza-1;
			border-bottom: 1px solid $sombra-4;
			span.captionFonte {
				display: inline-block;
				font-size: inherit;
				color: $cinza-2;
			}
		}
		@media screen and (max-width: 600px) {
			padding: 0;
			width: initial;
			max-width: calc(100% - 2rem);
			div.imgWrap img { width: 100%; max-width: unset; }
		}
	}
	@media print {
		figure {
			padding: 0 20mm;
			max-width: unset;
			page-break-inside: avoid;
			break-inside: avoid-page;
			&, & > * {
				color-adjust: exact;
				-webkit-color-adjust: exact;
			}
			div.imgWrap {
				img {
					width: -moz-min-content;
					width: min-content;
				}
				a {
					display: none !important;
				}
			}
		}
		figure.destaque, figure.hero {
			background-color: #FFF;
			max-height: -moz-min-content !important;
			max-height: min-content !important;
			width: -moz-fit-content;
			width: fit-content;
			min-width: unset;
			max-width: 100%;
			display: block;
			padding: 40px !important;
			text-align: center;
			border: 2px solid $cinza-2;
			margin: 4rem auto;
			div.imgWrap {
				min-width: -moz-fit-content;
				min-width: fit-content;
				max-width: 100%;
				img {
					box-shadow: none;
					background-color: inherit;
					object-fit: none;
					height: -moz-min-content;
					height: min-content;
				}
			}
			figcaption, div.fonte {
				position: relative;
				margin-top: 12px;
				padding: 0;
				left: 0;
				right: 0;
				bottom: unset;
				width: 100%;
				background-color: transparent;
				color: $preto;
			}
		}
		figure.mapa {
			div.imgWrap {
				min-width: -moz-fit-content;
				min-width: fit-content;
				max-width: 100%;
				img {
					max-width: 100%;
					max-height: 5mm;
				}
			}
			div.legenda {
				ul {
					display: block;
					columns: 2;
					column-gap: 2rem;
					text-align: left;
					li {
						display: block;
						font-size: small;
						margin: 0 0 4px 0;
						page-break-inside: avoid;
						break-inside: avoid;
						div {
							vertical-align: text-bottom;
							color-adjust: exact;
							-webkit-color-adjust: exact;
						}
					}
				}
			}
		}
	}
	&.link div { cursor: pointer; }
}
</style>
