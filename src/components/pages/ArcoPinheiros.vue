<template>
	<div class="ArcoPinheiros" ref="conteudoConsulta">
		<div class="top"></div>

		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
		</section>

		<section>
			<h2 class="titulo" indent="1">Motivação</h2>
		</section>

		<section>
			<h2 class="titulo" indent="1">Diagnóstico</h2>
			<Diagnostico></Diagnostico>
		</section>

		<section>
			<h2 class="titulo" indent="1">Programa de Interesse Público</h2>
		</section>

		<section>
			<h3 class="titulo" indent="2">Diretrizes e viabilidade da transformação</h3>
		</section>

		<section>
			<h3 class="titulo" indent="2">Impacto esperado da intervenção</h3>
		</section>

		<section>
			<h3 class="titulo" indent="2">Modelo de gestão democrática</h3>
		</section>

		<section>
			<h2 class="titulo" indent="1">Ficha técnica</h2>
		</section>
	</div>
</template>

<script>
import Diagnostico from '@/components/Diagnostico'
import Indice from '@/components/Indice';
import Comments from '@/components/Comments';
import CommentsLoader from '@/components/CommentsLoader';
import Galeria from '@/components/Galeria';
import Mapa from '@/components/Mapa';
import Minuta from '@/components/Minuta';
import Apoio from '@/components/Apoio'

export default {
	name: 'ArcoPinheiros',
	data() {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			gallery_attrs: {},
			mapa_attrs: {},
			consultas: false,
			estaConsulta: false
		}
	},
	computed: { commentsLoaded() { return this.$store.state.commentsLoaded } },
	components: {
		Diagnostico,
		Indice,
		Comments,
		CommentsLoader,
		Galeria,
		Mapa,
		Minuta,
		Apoio
	},
	created() {
		this.$store.dispatch("fetchConsultas", { self: this });
		this.consultas = this.$store.state.consultas;
	},
	mounted() {
		this.listaTitulos();
	},
	updated() {
		this.alteraIndice();
	},
	methods: {
		scrollToallComments(){
			let appRef = this.$refs.allComments;
			window.scrollBy({
				top: appRef.getBoundingClientRect().y - 30,
				left: 0,
				behavior: 'smooth'
			});
		},
		filterConsultas(){
			this.consultas = this.$store.state.consultas;
			this.estaConsulta = this.consultas.filter(esta => esta.id == this.$route.meta.id )[0];
		},
		consultaState(){ return (this.estaConsulta.ativo == '1' ? "aberta" : "fechada") },
		listaTitulos() {
			let app = this;
			let titulosBruto = Array.from(this.$refs.conteudoConsulta.getElementsByClassName('titulo'));
			console.log(titulosBruto)
			let titulos = [];
			let id = 0;
			titulosBruto.map(function(index) {

				let titulo = {
					id: id,
					nome: index.innerText,
					indent: index.attributes.indent.value,
					offsetObj: index,
					ativo: false
				};

				id++;
				titulos.push(titulo);
			});
			this.titulosLimpo = titulos;
		},
		setaBaixo() {
			window.scrollTo({ top: Math.round(window.innerHeight), behavior: 'smooth'})
		},
		alteraIndice() {
			let app = this;
			let sectionCollection = Array.from(this.$el.getElementsByTagName('section'));		
			window.addEventListener('scroll', function() {
				sectionCollection.map(function(index, i) {
					if (window.scrollY >= index.offsetTop - (window.innerHeight)/2 && window.scrollY < (index.offsetTop + index.offsetHeight) - (window.innerHeight)/4) {
						app.titulosLimpo[i].ativo = true
					} else { app.titulosLimpo[i].ativo = false };
				});
			}, {
				capture: true,
				passive: true
			});
		},
	},
};
</script>

<style lang="scss" scoped>
*::selection, *::-moz-selection {
	background: #EB5757;
	color: #FFF;
}

div.ArcoPinheiros {
	font-size: 20px;
	padding-bottom: 4rem;
	z-index: 0;

	div.top {
		/*visibility: hidden;*/
		padding: 2rem;
		margin: 0 0 2rem 0;
		overflow: hidden;
		background-position: center center;
		background-size: cover;
		width: 100%;
		height: calc(100vh - 60px);
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		z-index: 1;
		
		& > div:first-child {
			padding: 1.2rem;
			background: #FFF;
			outline: 8px solid rgba(0, 0, 0, .24);
			-moz-outline-radius: 2px;

			& > div {
				margin: 0 0 8px 0;
				text-align: center;
				font-size: small;
				color: #777;
				font-weight: 400;
				
				&:last-child { margin-bottom: 0; };

				i {
					font-size: initial;
					vertical-align: middle;
				};
			};

			div#statusConsulta {
				font-size: 10px;
				text-transform: uppercase;
				color: #fff;
				font-weight: 500;
				border-radius: 2px;
				white-space: nowrap;
				margin: 0 .5rem;
			}
			div#statusConsulta::after{
				padding:.35rem .5rem;
			}
			div#statusConsulta.aberta::after{
				content: "Em consulta";
				background-color: #008015;
			}
			div#statusConsulta.fechada::after{
				content: "Consulta Encerrada";
				background-color: #EB5757;
			}
			& > h1 {
				font-size: calc(16px + 8vmin);
				line-height: calc(6vmin + 32px);
				margin: 1rem;
				text-align: center;
			};
		};

		.setaBaixo {
			position: absolute;
			bottom: 0;
			left: 0;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			width: 100%;
			height: 25vh;
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
			transform: translateY(0);
			transition: all .4s;

			i {
				font-size: calc(24px + 16vmin);
				line-height: .8;
				color: #FFF;
				text-shadow: 0 2px 2px rgba(0, 0, 0, .24);
				transition: all .1s;
			};

			&:hover {
				cursor: pointer;
				transform: translateY(32px);

				i {
					transform: translateY(-24px);
					cursor: pointer;
				};
			};
		};
	};

	h2, h3, h4, h5, h6, p, ul, ol {
		margin: 0 auto 1rem auto;
		padding: 0 2rem;
		max-width: 700px;
	};

	h4, h5, h6 { color: #777; font-weight: 400; };

	p ~ h1, p ~ h2, p ~ h3 { margin-top: 4rem; };
	p ~ h4, p ~ h5, p ~ h6 { margin-top: 2rem; };

	h4 + p, h5 + p, h6 + p { margin-top: -1rem; };

	sup {
		vertical-align: 4px;
		margin: 0 0 0 2px;
		font-weight: normal;
		opacity: .8;

		a { color: inherit; };
	};


	p, ol, ul { font-family: 'Georgia', serif; };

	ol, ul {
		list-style-type: square;

		li {
			margin: 0 0 1rem 2rem;
			padding-left: 8px;
		};
	};

	figure {
		text-align: center;
		margin: 2rem auto;
		max-width: 992px;
		background: #FFF;

		&.borda {
			padding-bottom: .4rem;
			border: 1px solid #BDBDBD;
			border-radius: 2px;
			overflow: hidden;
		};

		figcaption {
			padding-bottom: .4rem;
			margin: 0 auto;
			max-width: calc(700px - 4rem);
			font-size: small;
			font-weight: 300;
			text-align: left;
			color: #777;
			border-bottom: 1px solid #F5F5F5;
		};

		img {
			width: 100%;
			max-width: 992px;
		};

		&.coluna {
			padding: 2rem;
			margin: 0 auto;
			max-width: 700px;
			text-align: center;

			img { max-width: 700px; };
		};

		&.hero {
			position: relative;

			figcaption {
				position: absolute;
				bottom: 1.6rem;
				right: 1rem;
				background: #FFF;
				border-radius: 2px;
				padding: 2px 8px;
				max-width: 400px;
				font-size: x-small;
			};

			img { min-width: 100%; max-width: unset; };
		};
	};

	@media (max-width: 992px) {
		figure:not(.coluna) figcaption {
			padding-left: 2rem;
			padding-right: 2rem;
		};
	};

	h6 {
		margin: 0;
		max-width: 100%;
		color: #333;
		font-size: smaller;
		font-weight: 700;
	};

	figure ul.legenda {
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

	div.tableWrap {			
		overflow-x: auto;
		background: #F5F5F5;
		max-width: 700px;
		margin: 1rem auto 2rem auto;
		padding: 2rem;
		border-radius: 2px;

		table {
			min-width: 100%;
			font-size: smaller;
			border-collapse: collapse;
			table-layout: fixed;
		};

		caption {
			font-weight: 700;
			margin-bottom: 2rem;
		};

		thead th, thead tr td {
			font-size: smaller;
			font-weight: 700;
		};

		td, th {
			padding: 4px 8px;
			word-wrap: break-word;
			border: 1px solid #BDBDBD;
			background: #FFF;
		};

		tbody tr:nth-child(odd) { background: #FFF; };

		.center { text-align: center; };

		div.notas {
			h6 {
				margin: 0;
				padding: .8rem 0 .6rem 0;
				font-weight: bold;
				text-transform: uppercase;
			};

			ol {
				list-style-type: lower-alpha;
				margin: 0;
				padding: 0;
				font-size: small;
				font-family: inherit;
				columns: 160px;
				column-gap: 2rem;

				li {
					margin: 0 0 1.2rem 1rem;
					line-height: 1.2rem;
					break-inside: avoid;
					page-break-inside: avoid;
				};

				li:last-child { margin-bottom: 0; };
			};
		};

		&.intervencoes {

			table {
				font-size: initial;
				margin: .4rem 0 .8rem 0;
				&:last-child { margin-bottom: 0; };
				tr td span.bold { font-weight: bold; };
			};

			div.intervencoesTitulo {
				text-align: center;
				font-size: smaller;
				font-weight: 700;
				margin-bottom: -1.2rem;
			};

			.col1, .col2 { width: 20%; font-size: smaller; };

			span.cod { color: #BDBDBD; };

			span.interv {
				display: inline-block;
				line-height: 1rem;
				width: 1rem;
				font-size: x-small;
				text-align: center;
				background: #BDBDBD;
				border-radius: 100%;
				color: #333;
				margin: 0 0 0 4px;
			};

			div.eixo {
				font-size: initial;
				color: #BDBDBD;
				margin: 3.2rem 0 .4rem 0;

				span.tema {
					font-size: larger;
					color: #333;
					display: block;
					font-weight: bold;	
				};
			};

			div.diretriz {
				font-size: smaller;
				color: #BDBDBD;
				display: block;
				margin: 0;

				span { color: #333; };
				span.dir2 { font-weight: bolder; color: #333; display: block; };
			};

			div.legenda {
				margin: 1rem 0;
				font-size: small;

				h6 {
					margin: 0;
					padding: .8rem 0 .6rem 0;
					font-weight: bold;
					text-transform: uppercase;
					font-size: smaller;
				};

				span.interv { margin: 0 4px 0 0; };
			};
		};
	};

	ul.pdfBox {
		display: block;
		list-style-type: none;
		margin: 2rem auto;
		padding: 2rem;
		background: #F5F5F5;
		border-radius: 2px;
		font-family: inherit;

		li {
			margin: 2rem 0;
			padding: 0;
			border-radius: 2px;
			border: 1px solid #BDBDBD;
			background: #FFF;
			box-shadow: 0 2px 2px rgba(0, 0, 0, .12);
			transition: all .1s;

			a {
				display: flex;					
				flex-direction: row;
				align-items: center;
				padding: 1rem;
				color: inherit;

				i { 
					margin-right: 1rem; 
					align-self:center
				};

				div {
					width: 100%;
				};

				span {
					display: block;
					font-size: .75em;
					margin-left: 1rem;
					white-space: nowrap;
					color: #BDBDBD;
				};

				&:hover { text-decoration: none; };
			};

			&:hover { border-color: #EB5757; box-shadow: 0 4px 4px rgba(0, 0, 0, .12); };

			&:first-child { margin-top: 0; };
			&:last-child { margin-bottom: 0; };
		};
	};

	a[target=_blank]::after {
		content: 'open_in_new';
		font-family: 'Material Icons';
		display: inline-block;
		font-size: initial;
		line-height: initial;
		vertical-align: -2px;
		margin-left: 4px;
	};

	.ai2html {
		margin: 4rem 0;
	};

	div.commentCtx {
		position: absolute;
		transform: scale(0);
		max-width: 2.4rem;
		max-height: 2.4rem;
		width: 100%;
		height: 100%;
		text-align: center;
		background: #333;
		color: #FFF;
		border-radius: 100%;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .24);
		transition: all .1s;

		a { color: inherit;
			i { line-height: 2.4rem; };
		};

		&:hover {
			box-shadow: 0 8px 8px rgba(0, 0, 0, .24);
			transform: scale(1.2) !important;
			cursor: pointer;
			a i { cursor: pointer; };
		};
	};

	@media (max-width: 600px) {
		div.Anhembi2 {
			font-size: 16px;

			div.titulo {
				& > div h1 { font-size: 40px; };
			};
		};
	};

	@media print {

		@page {
			size: A4 portrait;
			margin: 30mm 30mm 30mm 30mm;
		}

		.Cabecalho { display: none; };
		.Rodape { display: none; };
		.Indice { display: none; };
		.Apoio { display: none; };
		.Comments { display: none; };

		div.Anhembi2 {
			div.top {
				background: none !important;
				display: block;
				height: min-content;
				margin: 0;
				padding: 0;

				& > div:first-child {
					margin: 0;
					padding: 0;
					outline: none;

					h1, div { text-align: left; };

					h1 { font-size: 32pt; margin: 0; };

					div { font-size: 12pt; };

					div#statusConsulta { display: none; };
				};

				& > .setaBaixo { display: none; };
			};

			font-size: 11pt;

			h1, h2, h3 {
				break-after: avoid-page;
				page-break-after: avoid;
				padding: 0;
				margin: 3rem 0 1rem 0;
			};

			p, ol, ul, figure, div.Minuta blockquote.minuta, div.tableWrap, .Commentsloader {
				padding: 0;
				margin: 0 0 1rem 0;
				max-width: unset;
				width: 100%;
			};

			p { padding-right: 40mm; };

			figure, .tableWrap, .Galeria {
				break-inside: avoid-page;
				page-break-inside: avoid;
			};

			ul.pdfBox { display: none; };
		};

		.ai2html {
			break-inside: avoid-page;
			page-break-inside: avoid;
			max-height: 100%;
		};
	}	
}
</style>