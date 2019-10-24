<template>
	<div class="Indice">
		<ul ref="lista">
			<li
				v-for="(titulo, index) in titulos" :key="index"
				:class="{ ativo: titulo.ativo }"
				:style="{ paddingLeft: titulo.indent + 'rem'}"
				@click="rolar(titulo.offsetObj)">{{ titulo.nome }}</li>
		</ul>
		<button @click="rolar()"><i class="icon-seta_cima icon"><span>arrow_upward</span></i></button>
	</div>
</template>

<script>
export default {
	name: 'Indice',
	props: {
		titulos: {
			type: Array,
			required: true
		}
	},
	mounted () {
		let app = this
		if (app.$refs.lista) {
			if (window.matchMedia('(min-width: 1200px)').matches) {
				window.addEventListener('scroll', function () {
					if (app.$refs.lista === undefined || app.$refs.lista.style === undefined) { return }
					if (window.scrollY > window.innerHeight / 2) {
						app.$refs.lista.style.opacity = '1'
					} else if (window.scrollY < window.innerHeight / 2) {
						app.$refs.lista.style.opacity = '0.12'
					}
				})
			} else {
				app.$refs.lista.style.opacity = '1'
			}
		}
	},
	methods: {
		rolar (obj) {
			if (obj) {
				window.scrollBy({
					top: obj.getBoundingClientRect().y - 30,
					left: 0,
					behavior: 'smooth'
				})
			} else {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				})
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

div.Indice {
	z-index: 0;

	ul {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		padding: 0;
		margin: 0;
		list-style-type: none;
		opacity: 0.12;
		transition: opacity ease-in .2s;

		li {
			display: block;
			margin: 0 0 4px 0;
			padding-left: calc(2rem - 8px);
			color: $preto;
			max-width: 200px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			transition: opacity .1s, max-width ease-in-out .5s, border-left-color ease-in-out .5s, font-weight .1s;
			border-left: 8px solid transparent;
			font-family: $grotesca;
			font-size: small;

			&:active, &.ativo {
				border-left-color: $preto;
				font-weight: 700;
			};

			&:hover {
				opacity: .4;
				text-decoration: none;
				cursor: pointer;
				max-width: 1000px;
			};

			&.sub {
				padding-left: calc(2.8rem - 8px);
			};
		};
	};

	button {
		position: fixed;
		padding: 0;
		bottom: 2rem;
		right: 2rem;
		background: #FFF;
		border-radius: 100%;
		border: 1px solid $cinza-2;
		box-shadow: 0 4px 4px $sombra-4;
		transition: all .1s;
		display: block;
		font-family: inherit;
		z-index: 1;
		width: 42px;
		height: 42px;
		&:active {
			background: $vermelho;
			color: #FFF;
			border-color: $vermelho;
		};

		&:hover {
			cursor: pointer;

			&::before { opacity: 1; };
		};

		i {
			line-height: 40px;
			font-size: 22px;
			height: 50px;
			width: 42px;
		};

		&::before {
			content: 'Voltar ao topo';
			position: absolute;
			margin: 4px 0 0 -108px;
			line-height: 32px;
			padding: 0 8px;
			border-radius: 10px;
			opacity: 0;
			transition: all ease-in .1s;
			font-size: 14px;
			color: $preto;
		};

		@media screen and (max-width: 1200px) {
			&::before { display: none; };
		};
	};

	@media screen and (max-width: 1200px) {
		ul {
			display: block;
			position: relative;
			height: auto;
			top: 0;
			margin: 4rem 0 2rem 0;
			padding: 0 2rem;
			font-size: initial;
			line-height: 1.1;
			max-width: unset;

			li {
				display: inline-block;
				padding: 4px 6px !important;
				margin: 0 6px 4px 0;
				background: $vermelho;
				border: 1px solid $vermelho;
				border-left-width: 0;
				border-radius: 2px;
				color: #FFF;
				max-width: 100%;
				font-size: small;

				&:hover {
					max-width: 100%;
				};
			};

			&::before {
				content: 'Índice';
				font-size: small;
				display: inline-block;
				padding: 4px 6px !important;
				vertical-align: top;
				margin: 0 6px 4px 0;
				border: 1px solid $vermelho;
				border-radius: 2px;
				color: $vermelho;
				max-width: 100%;
			};
		};
	};

	@media screen and (max-width: 600px) {
		ul { padding: 0 1rem; }
	}

	@media print {
		display: none;
	}
};
</style>
