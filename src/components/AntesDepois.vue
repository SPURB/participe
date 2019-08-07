<template>
	<div class="AntesDepois" :class="{ print: toPrint }" :style="{ maxWidth: dados.largura + 'px' }">
		<span v-if="dados.errata" class="errata" :id-erro="dados.idErro"></span>
		<nav class="actions" @click="depois = !depois">
			<div class="indicador">
				<span v-if="!depois">Antes</span>
				<span v-if="depois">Depois</span>
			</div>
			<button ref="botaoTroca">
				<i class="icon-seta_direita icon" v-if="!depois" title="Avançar"><span>seta_direita</span></i>
				<i class="icon-seta_esquerda icon" v-if="depois" title="Voltar"><span>seta_esquerda</span></i>
			</button>
		</nav>
		<div class="imgWrap" :style="{ height: dados.altura + 'px' }"  @click="depois = !depois">
			<img :src="dados.imgAntes" alt="Antes">
			<img :src="dados.imgDepois" alt="Depois" :class="{ hidden: !depois }">
		</div>
		<p class="fonte" v-if="dados.fonte">{{ dados.fonte }}</p>
		<div class="picto" v-if="dados.pictogramas">
			<h1>{{ dados.caption }}</h1>
			<ul>
				<li v-for="(index, pictograma) in dados.pictogramas">
					<img :src="pictograma.url" :alt="pictograma.legenda" :title="pictograma.legenda">
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: 'AntesDepois',
	data () {
		return {
			depois: false
		}
	},
	computed: {
		toPrint () { return this.$store.state.toPrint }
	},
	props: [
		'dados'
	],
	mounted () {},
	methods: {
		toggleImgDepois () {
			this.depois = !this.depois
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../errata';

.fonte{
	padding: 0 0.5rem;
	font-size: x-small;
	color: $cinza-1;
}

.AntesDepois {
	font-family: $grotesca;
	box-sizing: border-box;
	margin: 2rem auto;
	position: relative;
	z-index: 2;
	border-radius: 2px;
	overflow: hidden;
	background-color: $cinza-3;
	& > span.errata {
		position: absolute;
		z-index: 5;
		&::after {
			top: 4px;
			left: 4px;
			width: 1rem;
		}
	}
	& > nav {
		position: absolute;
		top: 4px;
		left: 4px;
		padding: 4px 5px;
		z-index: 4;
		background-color: rgba(255, 255, 255, .64);
		border-radius: 4px;
		&, & > * { cursor: pointer; }
		& > * {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			vertical-align: middle;
			font-size: 0.75rem;
			line-height: 1rem;
			padding: 4px;
			border-radius: 2px;
			color: #FFF;
		}
		div.indicador {
			padding: 4px 6px;
			text-transform: uppercase;
			background-color: $sombra-1;
			user-select: none;
			-ms-user-select: none;
			-moz-user-select: none;
			-webkit-user-select: none;
		}
		button {
			background-color: $vermelho;
			border: none;
			margin-left: 4px;
			transition: all ease-in-out .1s;
			&:hover { background-color: $vermelho-escuro; }
			&:active { background-color: $sombra-1; }
			&, & > * { cursor: pointer; }
		}
	}
	div.imgWrap {
		position: relative;
		max-width: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		cursor: pointer;
		img {
			position: absolute;
			z-index: 3;
			opacity: 1;
			transition: opacity ease-in .2s;
			&.hidden {
				opacity: 0;
			}
		}
		transition: opacity 0.35s ease;
		&:hover{
			opacity: 0.85;
		}
	}
	div.picto {
		padding: 1rem;
		background-color: $cinza-3;
		h1 {
			margin: 0 0 1rem;
			font-size: 1.2rem;
			line-height: 1.2;
			text-align: center;
		}
		ul {
			margin: 0;
			text-align: center;
			padding: 0.5rem;
			list-style-type: none;
			max-width: 100%;
			overflow-x: auto;
			li {
				display: inline-block;
				vertical-align: bottom;
				margin: 0 1rem;
			}
		}
	}
	@media screen and (max-width: 600px) {
		margin: 0 1rem;
		& > nav {
			position: relative;
			top: 0;
			left: 0;
			background-color: $preto;
			border-radius: 0;
			text-align: right;
			button {
				margin-left: 0;
			}
			div.indicador {
				background-color: transparent;
			}
		}
		div.imgWrap {
			height: 50vh !important;
			img {
				height: 50vh;
			}
		}
		div.picto {
			h1 {
				font-size: 1rem;
			}
			ul {
				display: flex;
				flex-flow: row nowrap;
				align-items: flex-end;
				justify-content: flex-start;
				border: 1px solid $sombra-4;
				border-radius: 2px;
				padding: 0.5rem 1rem;
				li {
					margin: 0 0.5rem;
					position: relative;
					&:last-child::after {
						display: inline-block;
						content: '';
						width: 1rem;
						border: 1px solid transparent;
						position: absolute;
					}
				}
			}
		}
	}
};
</style>
