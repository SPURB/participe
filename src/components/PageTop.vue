<template>
	<div class="PageTop" :style="style">
		<div>
			<div v-show="esta_consulta.ativo" id="statusConsulta" :class="consultaState(esta_consulta.ativo)"></div>
			<h1><slot name="titulo"></slot></h1>
			<slot name="subtitulo"></slot>
			<div v-show="esta_consulta.nContribuicoes">
				<i class="icon-comentario icon"><span>chat</span></i> {{ esta_consulta.nContribuicoes }} contribuições
			</div>
			<div v-if="social">
				Compartilhar
				<a :href="social.whatsapp">
					<svg width="20px" height="20px" enable-background="new 630.121 523.43 20 20" version="1.1" viewBox="630.121 523.43 20 20" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
						<path fill="#777" d="m640.15 527.93c-3.041 0-5.514 2.473-5.515 5.513 0 1.042 0.291 2.056 0.843 2.934l0.131 0.208-0.557 2.034 2.086-0.547 0.202 0.119c0.846 0.503 1.816 0.769 2.806 0.769h2e-3c3.038 0 5.512-2.473 5.513-5.513 1e-3 -1.473-0.572-2.858-1.613-3.9s-2.425-1.616-3.898-1.617zm3.243 7.884c-0.139 0.387-0.801 0.74-1.119 0.788-0.285 0.042-0.646 0.06-1.044-0.066-0.24-0.076-0.549-0.178-0.944-0.349-1.663-0.718-2.749-2.392-2.832-2.503-0.083-0.11-0.677-0.898-0.677-1.714 0-0.815 0.428-1.216 0.58-1.382s0.332-0.208 0.442-0.208c0.111 0 0.221 1e-3 0.318 6e-3 0.102 5e-3 0.238-0.039 0.373 0.285 0.138 0.332 0.469 1.147 0.511 1.23s0.069 0.18 0.014 0.29c-0.055 0.111-0.083 0.18-0.166 0.277s-0.174 0.216-0.249 0.29c-0.083 0.083-0.169 0.172-0.073 0.338s0.429 0.708 0.922 1.148c0.633 0.564 1.167 0.739 1.333 0.822s0.263 0.069 0.358-0.041c0.098-0.111 0.415-0.484 0.525-0.65s0.221-0.139 0.373-0.083c0.151 0.056 0.967 0.456 1.132 0.539 0.166 0.083 0.276 0.125 0.318 0.194 0.043 0.069 0.043 0.401-0.095 0.789z"/>
						<path fill="#777" d="m630.12 523.43v20h20v-20h-20zm10.031 16.654h-3e-3c-1.11 0-2.201-0.278-3.169-0.807l-3.516 0.922 0.941-3.437c-0.581-1.006-0.886-2.147-0.885-3.316 1e-3 -3.657 2.977-6.632 6.633-6.632 1.774 0 3.439 0.691 4.691 1.945 1.253 1.253 1.942 2.92 1.941 4.692-2e-3 3.658-2.978 6.633-6.633 6.633z"/>
					</svg>
				</a>
				<a :href="social.facebook">
					<svg width="20px" height="20px" enable-background="new 1977.069 727.069 20 20" version="1.1" viewBox="1977.069 727.069 20 20" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
						<path d="m1996 727.07h-17.789c-0.61 0-1.105 0.495-1.105 1.105v17.79c0 0.611 0.495 1.105 1.105 1.105h9.579v-7.719h-2.614v-3.042h2.6v-2.221c0-2.586 1.576-3.993 3.881-3.993 0.783 2e-3 1.565 0.047 2.344 0.133v2.698h-1.593c-1.252 0-1.495 0.593-1.495 1.467v1.93h3l-0.39 3.028h-2.61v7.719h5.087c0.61 0 1.105-0.495 1.105-1.105v-17.79c0-0.61-0.495-1.105-1.105-1.105z" fill="#777"/>
					</svg>
				</a>
				<a :href="social.twitter">
					<svg width="20px" height="20px" enable-background="new 1990 740 20 20" version="1.1" viewBox="1990 740 20 20" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
						<path d="m2010 760h-20v-20h20v20zm-12.32-4.92c4.714 0 7.294-3.91 7.294-7.295 0-0.11 0-0.22-5e-3 -0.33 0.5-0.36 0.936-0.815 1.28-1.33-0.46 0.205-0.955 0.34-1.475 0.405 0.529-0.315 0.935-0.82 1.13-1.42-0.495 0.295-1.045 0.505-1.63 0.62-0.471-0.5-1.136-0.81-1.87-0.81-1.415 0-2.565 1.15-2.565 2.565 0 0.2 0.025 0.395 0.065 0.585-2.13-0.105-4.021-1.13-5.285-2.68-0.22 0.38-0.345 0.82-0.345 1.29 0 0.89 0.455 1.675 1.14 2.135-0.42-0.015-0.815-0.13-1.16-0.32v0.035c0 1.24 0.885 2.279 2.055 2.515-0.215 0.061-0.44 0.09-0.675 0.09-0.165 0-0.325-0.015-0.479-0.045 0.325 1.021 1.275 1.76 2.395 1.78-0.88 0.689-1.985 1.1-3.185 1.1-0.205 0-0.41-0.01-0.61-0.035 1.13 0.721 2.48 1.145 3.925 1.145" fill="#777"/>
					</svg>
				</a>
			</div>
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
		},
		social: {
			required: false,
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

*::selection, *::-moz-selection {
	background: $vermelho;
	color: #FFF;
}

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
			max-width: 52vw;
			@media (max-width: 600px) {
				max-width: unset;
			}
			background: #FFF;
			outline: 8px solid $sombra-3;
			-moz-outline-radius: 2px;
			outline-radius: 2px;

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

				a {
					&:hover { border-bottom: none; opacity: .8; transition: all ease-in-out .12s; }
					svg {
						vertical-align: top;
						margin: 0 4px;
					}
				}
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
				font-size: calc(16px + 4vmin);
				line-height: 120%;
				margin: 1rem;
				text-align: center;
				max-width: unset;
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
			height: 12vh;
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
