<template>
	<div class="PageTop" :style="style">
		<div v-show="esta_consulta.nomePublico">
			<h1>{{ esta_consulta.nomePublico }}</h1>
			<slot name="subtitulo"></slot>
			<div>
				<!-- <a href="#contribuicoes" @click="scrollToallComments"><i class="material-icons">chat</i> {{ esta_consulta.nContribuicoes }} contribuições</a> -->
				<i class="material-icons">chat</i> {{ esta_consulta.nContribuicoes }} contribuições
			</div>
			<div id="statusConsulta" :class="consultaState(esta_consulta.ativo)"></div>
		</div>
		<div class="setaBaixo" @click="setaBaixo"><i class="material-icons">keyboard_arrow_down</i></div>
	</div>
</template>
<script>
export default{
	name:"PageTop",
	props:{ 
		background_image_src:{
			required: true,
			type: String
		},
		esta_consulta: {
			required: true,
			type: Object
		}
	},
	computed:{
		style() {
			return "background-image: url(" + this.$store.getters.basePath + this.background_image_src + "); background-color: #ed8934;"
		}
	},
	methods: {		
		setaBaixo() {
			window.scrollTo({ top: Math.round(window.innerHeight), behavior: 'smooth'})
		},
		consultaState(par) {
			if (par == 1) {
				return 'aberta'
			} else {
				return 'fechada'
			}
		},
		scrollToallComments(){
			let appRef = this.$refs.allComments;
			window.scrollBy({
				top: appRef.getBoundingClientRect().y - 30,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}
</script>
<style lang="scss">
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
			outline: 8px solid rgba(0, 0, 0, .24);
			-moz-outline-radius: 2px;

			& > div {
				margin: 0 0 16px 0;
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
				background-color: #008015;
			}
			div#statusConsulta.fechada::after{
				content: "Consulta Encerrada";
				background-color: rgba(0, 0, 0, .8);
				opacity: .5;
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
	
</style>