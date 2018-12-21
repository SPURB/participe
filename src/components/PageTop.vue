<template>
	<div class="PageTop" :style="style">
		<div>
			<h1><slot name="titulo"></slot></h1>
			<slot name="subtitulo"></slot>
			<div v-show="esta_consulta.nContribuicoes">
				<i class="icon-comentario icon"><span>chat</span></i> {{ esta_consulta.nContribuicoes }} contribuições
			</div>
			<div v-show="esta_consulta.ativo" id="statusConsulta" :class="consultaState(esta_consulta.ativo)"></div>
		</div>
		<div class="setaBaixo" @click="setaBaixo"><i class="icon-expandir icon"><span>keyboard_arrow_down</span></i></div>
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
		}
	},
	computed: {
		style () {
			return 'background-image: url(' + this.$store.getters.basePath + this.background_image_src + '); background-color: #ed8934;'
		},
		rota () { return this.$route.name }
	},
	methods: {
		setaBaixo () {
			window.scrollTo({ top: Math.round(window.innerHeight), behavior: 'smooth' })
		},
		consultaState (par) {
			if (par === 1 || par === '1') {
				return 'aberta'
			} else {
				return 'fechada'
			}
		},
		scrollToallComments () {
			let appRef = this.$refs.allComments
			window.scrollBy({
				top: appRef.getBoundingClientRect().y - 30,
				left: 0,
				behavior: 'smooth'
			})
		}
	}
}
</script>
<style lang="scss">
@import '../variables';

	div.PageTop {
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
		z-index: 2;

		& > div:first-child {
			padding: 1.2rem;
			background: #FFF;
			outline: 8px solid $sombra-3;
			-moz-outline-radius: 2px;

			& > div {
				margin: 0 0 16px 0;
				text-align: center;
				font-size: small;
				color: $cinza-1;
				font-weight: 400;

				&:last-child { margin-bottom: 0; };

				i {
					font-size: initial;
					vertical-align: middle;
				};
			};

			div#statusConsulta {
				text-transform: uppercase;
				color: #fff;
				white-space: nowrap;
			}
			div#statusConsulta::after{
				display: inline-block;
				padding: 4px 8px;
				border-radius: 2px;
				border: 2px solid rgba(255, 255, 255, .24);
			}
			div#statusConsulta.aberta::after{
				content: "Em consulta";
				background-color: $verde;
			}
			div#statusConsulta.fechada::after{
				content: "Consulta Encerrada";
				background-color: $sombra-1;
				opacity: .5;
			}
			& > h1 {
				font-size: calc(16px + 8vmin);
				line-height: calc(6vmin + 32px);
				margin: 1rem;
				text-align: center;
			};
		};

		#app div.VidaSegura>div.PageTop>div:first-child>h1 {
		    font-size: 4.5em;
		    line-height: 1em;
		}

		.setaBaixo {
			position: absolute;
			bottom: 0;
			left: 0;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			width: 100%;
			height: 15vh;
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0), $sombra-1);
			transform: translateY(0);
			transition: all .4s;

			i {
				font-size: calc(24px + 4vmin);
				line-height: .8;
				color: #FFF;
				text-shadow: 0 2px 2px $sombra-3;
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
</style>
