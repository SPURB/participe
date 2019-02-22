<template>
	<div class="PageTop">
		<div class="bg"><img :src="bgImg"></div>
		<aside>
			<div class="statusConsulta" :class="consultaState(esta_consulta.ativo)" v-if="esta_consulta.ativo">
				<span></span>
			</div>
			<div class="contribuicoes" v-if="esta_consulta.nContribuicoes">
				<i class="icon-comentario icon"><span>chat</span></i> {{ esta_consulta.nContribuicoes }} contribuições
			</div>
			<div class="periodo">
				<i class="icon-data icon"><span>período</span></i> {{ data(esta_consulta.dataCadastro) }}–{{ data(esta_consulta.dataFinal) }}
			</div>
			<div class="publicacao">
				Publicado em {{ data(esta_consulta.dataCadastro)}}
			</div>
		</aside>
		<main>
			<h1><slot name="titulo"></slot></h1>
			<h2><slot name="subtitulo"></slot></h2>
		</main>
		<ul class="share" :class="{ social: !esta_consulta.social }"> <!-- mudar para esta_consulta.social true -->
			<li @click="imprime"><i class="icon-imprimir icon"><span>imprimir</span></i></li>
			<li><img :src="imgsrc('share_whatsapp.svg')" alt=""></li>
			<li><img :src="imgsrc('share_twitter.svg')" alt=""></li>
			<li><img :src="imgsrc('share_facebook.svg')" alt=""></li>
		</ul>
	</div>
</template>
<script>
export default{
	name: 'PageTop',
	props: {
		background_image_src: {
			required: true,
			type: String
		},
		esta_consulta: {
			required: true,
			type: Object
		},
		social: {
			required: false,
			type: Object
		}
	},
	computed: {
		basePath () { return this.$store.getters.basePath },
		bgImg () { return this.$store.getters.basePath + this.background_image_src },
		rota () { return this.$route.name }
	},
	methods: {
		consultaState (par) {
			if (par === 1 || par === '1') { return 'aberta' }
			else { return 'fechada' }
		},
		scrollToallComments () {
			let appRef = this.$refs.allComments
			window.scrollBy({
				top: appRef.getBoundingClientRect().y - 30,
				left: 0,
				behavior: 'smooth'
			})
		},
		data (full) {
			let dd = full.substring(8,10)
			let mm = full.substring(5,7)
			let aa = full.substring(0,4)
			return dd + '/' + mm + '/' + aa
		},
		imgsrc (name) { return this.basePath + 'arquivos/img/' + name },
		imprime () { this.$store.dispatch('imprime') }
	}
}
</script>
<style lang="scss">
@import '../variables';

*::selection, *::-moz-selection {
	background: $vermelho;
	color: #FFF;
}

div.PageTop {
	position: relative;
	padding: 12rem 2rem 4rem 2rem;
	color: #FFF;
	z-index: 2;
	display: flex;
	flex-flow: row wrap;
	div.bg {
		position: absolute;
		overflow: hidden;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		object-fit: cover;
		object-position: center center;
		user-select: none;
		-moz-user-select: none;
		img {
			min-width: 100%;
			min-height: 100%;
			transform: scale(1.1);
			filter: blur(16px);
		}
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: $sombra-2;
			box-shadow: inset 0 -8px 8px $sombra-4;
		}
	}
	aside {
		max-width: 200px;
		width: 100%;
		vertical-align: top;
		margin-right: 2rem;
		font-size: small;
		div {
			margin-bottom: 1rem;
		}
		div.statusConsulta {
			text-transform: uppercase;
			color: #fff;
			white-space: nowrap;
			font-size: smaller;
			&::after{
				display: inline-block;
				padding: 4px 8px;
				border-radius: 2px;
				border: 2px solid rgba(255, 255, 255, .12);
			}
			&.aberta::after{
				content: "Em consulta";
				background-color: $verde;
			}
			&.fechada::after{
				content: "Consulta Encerrada";
				background-color: $sombra-1;
				opacity: .5;
			}
		}
		div.publicacao { opacity: .4; }
	}
	main {
		width: calc(100% - 400px - 4rem);

		padding: 0;
		h1 {
			margin: -12px auto 1rem auto;
			font-size: 52px;
			line-height: 1.2;
			max-width: 700px;
			padding: 0 2rem;
			text-shadow: 0 0 4px $sombra-2;
		}
		h2 {
			font-size: large;
			font-weight: normal;
			margin: 0 auto;
			line-height: 1.6;
			max-width: 700px;
			opacity: .8;
			padding: 0 2rem;
		}
		@media screen and (max-width: 1200px) {
			width: calc(100% - 200px - 4rem);
			h1, h2 { padding: 0; }
		}
	}
	ul.share {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		padding: 0 12px 0 8px;
		margin: 0;
		height: 40px;
		position: absolute;
		bottom: -20px;
		list-style-type: none;
		box-sizing: border-box;
		border-radius: 20px;
		background-color: #FFF;
		transform: translateX(-4px);
		box-shadow: 0px 0px 8px $sombra-3;
		&, * { transition: all ease-in .2s; }
		li {
			user-select: none;
			-moz-user-select: none;
			i, img {
				color: $preto;
				cursor: pointer;
			}
			display: inline-block;
			margin: 0 8px;
			line-height: 0;
			padding: 0;
			&::first-child { margin-left: 0; }
			&::last-child { margin-right: 0; }
		}
		&:hover {
			box-shadow: 0px 0px 16px $sombra-2;
			li {
				i, img { opacity: .4; }
				&:hover {
					i, img { opacity: 1; }
				}
			}
		}
	}
	@media screen and (max-width: 800px) {
		flex-flow: column;
		padding-top: 8rem;
		@media (max-width: 600px) {
			padding: 8rem 1rem 4rem 1rem;
		}
		aside {
			max-width: 100%;
			margin-bottom: 2rem;
			display: flex;
			flex-flow: row wrap;
			& > div {
				display: inline-block;
				width: 50%;
				font-size: smaller;
				text-transform: uppercase;
				margin-bottom: 4px;
				&.statusConsulta { order: 1; }
				&.contribuicoes { order: 2; }
				&.periodo { order: 4; }
				&.publicacao { order: 3; }
				&.statusConsulta::after {
					font-size: .5rem;
					padding: 2px 4px;
				}
			}
		}
		main {
			width: 100%;
			h1 {
				font-size: 2.5rem;
				padding: 0;
			}
			h2 {				
				font-size: 1rem;
				@media screen and (max-width: 600px) { font-size: 12px; }
				padding: 0;
			}
		}
		ul.share {
			padding: 0;
			background-color: transparent;
			box-shadow: none;
			// transform: translateX(-12px);
			li:first-child { display: none; }
			li {
				background-color: #FFF;
				padding: 12px;
				border-radius: 100%;
				box-shadow: 0px 0px 8px $sombra-3;
				cursor: pointer;
				margin: 0 .8rem 0 0;
			}
			&:hover { box-shadow: none; }
		}
	}
	@media print {}

	// @media print {
	// 	background: none !important;
	// 	height: unset;
	// 	width: 100%;
	// 	max-width: 210mm;
	// 	align-items: flex-start;
	// 	padding: 0 20mm;
	// 	margin: 0;
	// 	& > div:first-child {
	// 		outline: none;
	// 		max-width: unset;
	// 		width: 100%;
	// 		padding: 0;
	// 		background: transparent;
	// 		#statusConsulta { display: none; }
	// 		h1 {
	// 			width: 100%;
	// 			text-align: left;
	// 			margin: 0;
	// 			font-size: 36pt;
	// 			padding: 0;
	// 			div {
	// 				width: 100%;
	// 			}
	// 		}
	// 		& > div {
	// 			text-align: left;
	// 			font-size: 10pt;
	// 			display: inline-block;
	// 			margin: 0;
	// 			&::after { content: ' | '; }
	// 			&:last-child::after { content: ''; }
	// 			i, a { display: none; }
	// 		}
	// 	}
	// 	.setaBaixo { display: none; }
	// }
};
</style>
