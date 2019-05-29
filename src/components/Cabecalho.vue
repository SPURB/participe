<template>
	<div class="Cabecalho" :class="{ negativo: isConsulta }">
		<header>
			<i class="icon icon-menu" @click="abreMenu"><span>menu</span></i>
			<h1><a href="/"><span>participe</span>.gestaourbanaSP</a></h1>
			<a href="http://www.capital.sp.gov.br/" title="Prefeitura de São Paulo"><img :src="logoSrc('cor')"></a>
		</header>
	</div>
</template>

<script>
export default {
	name: 'Cabecalho',
	computed: {
		basePath () { return this.$store.getters.basePath },
		isConsulta () {
			if (this.$route.meta.id) {
				return true
			} else {
				return false
			}
		}
	},
	methods: {
		abreMenu () {
			this.$store.state.menuToggle = true
			this.$store.state.luzApaga = true
			document.body.style.overflow = document.body.style.overflow === '' ? 'hidden' : ''
		},
		logoSrc () {
			var arch
			switch (this.isConsulta) {
			case false: arch = 'arquivos/img/PMSP_horizontal_cor_pos.png'; break
			case true: arch = 'arquivos/img/PMSP_horizontal_mono_neg.png'; break
			}
			return this.basePath + arch
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';
div.Cabecalho {
	position: absolute;
	width: 100%;
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
		height: 60px;
		max-height: 120px;
		background: $cinza-3;
		box-shadow: 0 4px 8px $sombra-3;
		position: relative;
		z-index: 3;
		i {
			color: $cinza-2;
			transition: color .1s;
			width: 0;
			&:hover {
				color: $preto;
				cursor: pointer;
			};
		};
		h1 {
			margin: 0;
			padding: 0;
			font-size: 24px;
			font-weight: 400;
			a {
				color: $cinza-2;
				width: 100%;
				padding: 0;
				border-bottom: none;
				&:hover, &:active { background: unset; }
				span { color: $vermelho; font-weight: 800; };
				&:hover { text-decoration: none; };
			};
		};
		a {
			line-height: 100%;
			width: auto;
			margin: 0;
			@supports (display: flex) {
				width: 0;
			}
			text-align: right;
			border-bottom: none;
			text-align: right;
			display: inline-flex;
			justify-content: flex-end;
			padding: 0 !important;
			&:hover, &:active { background: unset; }
			img {
				max-height: 40px;
				min-height: 32px;
			};
		};
	};
	&.negativo {
		header {
			box-shadow: none;
			background-color: transparent;
			i {
				color: #FFF;
				&:hover { color: rgba(255, 255, 255, .4); }
			}
			h1 * {
				color: #FFF;transition: all ease-in-out .1s;
				&:hover { opacity: .4; }
			}
			a img {
				transition: all ease-in-out .1s;
				&:hover { opacity: .4; }
			}
		}
	}
	@media screen and (max-width: 420px) {
		header a img { display: none; };
	};
	@media screen and (max-width: 600px) {
		header { padding: 0 1rem; };
	};
	@media screen and (max-width: 800px) {
		header {
			h1 a { font-size: 16px; vertical-align: 4px; };
			a img { margin-left: 0; max-height: 32px; };
		};
	};
	@media print {
		display: none;
	}
}
</style>
