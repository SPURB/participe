<template>
	<div class="PageTop">
		<div class="bg"><img :src="bgImg" :alt="backgroundAlt"></div>
		<aside>
			<template v-if="esta_consulta">
				<div class="statusConsulta" :class="consultaState(parseInt(esta_consulta.ativo))">
					<span></span>
				</div>
				<div class="contribuicoes">
					<i class="icon-comentario icon"><span>chat</span></i> {{ esta_consulta.nContribuicoes }} <span v-if="esta_consulta.nContribuicoes < 2">contribuição</span><span v-else>contribuições</span>
				</div>
				<div class="periodo">
					<i class="icon-data icon"><span>período</span></i> {{ datas(esta_consulta.dataCadastro) }}–{{ datas(esta_consulta.dataFinal) }}
				</div>
				<div class="devolutiva" v-if="esta_consulta.urlDevolutiva">
					<a :href="esta_consulta.urlDevolutiva" target="_blank">
					<i class="icon-responder icon pointer">Ver devolutiva </i></a>
				</div>

				<div class="publicacao">
					Publicado em {{ datas(esta_consulta.dataCadastro)}}
				</div>
			</template>
		</aside>
		<main>
			<h1><slot name="titulo"></slot></h1>
			<h2><slot name="subtitulo"></slot></h2>
		</main>
		<ul class="share" :class="{ social: esta_consulta.social }">
			<li @click="imprime" class="print">
				<i class="icon-imprimir icon"><span>imprimir</span></i>
			</li>
			<template v-if="esta_consulta.ativo">
				<li class="share__icon" @click="socialMediaRedirect('whatsapp')">
					<a :href="socialMediaRedirect('whatsapp')">
						<i class="icon-whatsapp icon"></i>
					</a>
				</li>
				<li>
					<a :href="socialMediaRedirect('twitter')">
						<i class="icon-twitter icon"></i>
					</a>
				</li>
				<li>
					<a :href="socialMediaRedirect('facebook')">
						<i class="icon-facebook icon"></i>
					</a>
				</li>
			</template>
		</ul>
	</div>
</template>
<script>

export default {
	name: 'PageTop',
	props: {
		background_image_src: {
			required: true,
			type: String
		},
		esta_consulta: {
			required: true,
			type: Object
		}
	},
	computed: {
		basePath () { return this.$store.getters.basePath },
		bgImg () { return this.$store.getters.basePath + this.background_image_src },
		backgroundAlt () { return this.esta_consulta.nomePublico ? this.esta_consulta.nomePublico : this.$route.name }
	},
	methods: {
		socialMediaRedirect (net) {
			const consulta = this.esta_consulta
			const text = encodeURIComponent((`"${consulta.nomePublico}" está em consulta pública. Acesse e contribua!`).toString())
			const url = encodeURIComponent((this.basePath + consulta.urlConsulta).toString())

			const share = {
				'whatsapp': `https://api.whatsapp.com/send?text=${text}%20${url}`,
				'twitter': `https://twitter.com/intent/tweet?text=${text}%20${url}`,
				'facebook': `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`
			}

			return share[net] ? share[net] : ''
		},
		consultaState (par) {
			if (par === 1) {
				return 'aberta'
			}
			return 'fechada'
		},
		datas (dataString) {
			if (dataString) {
				return dataString.replace(/-/g, '/')
			}
			return ''
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

.PageTop {
	position: relative;
	padding: 12rem 2rem 4rem 2rem;
	margin-bottom: 4rem;
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
		background-color: $cinza-3;
		user-select: none;
		-ms-user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		img {
			width: 100%;
			min-height: 100%;
			object-fit: cover;
			object-position: center center;
			-o-object-fit: cover;
			-o-object-position: center center;
			transform: scale(1.1);
			filter: blur(8px);
			-webkit-filter: blur(8px);
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
		padding: 0 12px;
		margin: 0;
		height: 40px;
		position: absolute;
		bottom: -20px;
		left: 2rem;
		list-style-type: none;
		box-sizing: border-box;
		border-radius: 20px;
		background-color: #FFF;
		transform: translateX(-4px);
		box-shadow: 0px 0px 8px $sombra-3;
		&, * { transition: all ease-in .2s; }
		li {
			a { text-decoration: none; }
			&.print {
				background-color:#fff;
				.icon {
					color: $preto;
				}
			}
			user-select: none;
			-moz-user-select: none;
			background-color: $preto;
			i, img {
				color: #FFF;
				cursor: pointer;
			}
			display: inline-block;
			line-height: 0;
			margin: 0 12px 0 0;
			padding: 0;
			&:last-child { margin-right: 0; }
			&:last-child:not(.print) { margin-right: 4px; }
		}
		&:hover {
			box-shadow: 0px 0px 16px $sombra-2;
			li:not(.print) {
				background-color: $cinza-1;
				&:hover {
					background-color: $preto;
				}
			}
			.print {
				i { color: $cinza-1 }
				&:hover {
					i { color: $preto; }
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
			left: 1rem;
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

	@media print {
		color: $preto;
		display: block;
		padding: 0 2cm;
		div.bg { display: none; }
		aside {
			width: 100%;
			max-width: unset;
			div:not(:last-child) {
				display: inline-block;
				margin-right: 16px;
			}
			div.statusConsulta::after {
				color-adjust: exact;
				-webkit-print-color-adjust: exact;
			}
		}
		main {
			margin-left: 0;
			width: 100%;
			h1, h2 {
				max-width: 100%;
				padding: 0;
			}
			h1 {
				margin: 0 0 16px 0;
				text-shadow: none;
				font-size: 36pt;
			}
			h2 { font-size: 12pt; }
		}
		ul.share { display: none; }
	}
	.pointer {
		cursor: pointer;
	}
};
</style>
