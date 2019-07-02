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
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		text-align: center;
		@supports (display: flex) {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
		padding: 0 2rem;
		width: 100%;
		height: 60px;
		max-height: 120px;
		overflow: hidden;
		background: $cinza-3;
		box-shadow: 0 4px 8px $sombra-3;
		z-index: 3;
		& > i {
			display: inline-block;
			float: left;
			color: $cinza-2;
			transition: color .1s;
			&::before {
				line-height: 60px;
			}
			&:hover {
				color: $preto;
				cursor: pointer;
			};
		};
		& > h1 {
			display: inline-block;
			margin: 0 auto;
			padding: 0;
			& > a {
				font-size: 24px;
				font-weight: 400;
				color: $cinza-2;
				line-height: 60px;
				width: 100%;
				padding: 0;
				border-bottom: none;
				&:hover, &:active { background: unset; }
				span { color: $vermelho; font-weight: 800; };
				&:hover { text-decoration: none; };
			};
		};
		& > a {
			position: absolute;
			right: 2rem;
			height: 100%;
			&:hover, &:active { background: unset; }
			img {
				border: none;
				height: 40px;
				width: 117px;
				margin: 10px 0;
			};
		};
	};
	&.negativo {
		header {
			position: absolute;
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
	@media screen and (max-width: 359px) {
		header {
			h1 {
				position: relative;
				top: unset;
				left: unset;
			}
			a img { display: none; };
		}
	};
	@media screen and (max-width: 600px) {
		header {
			padding: 0 1rem;
			h1 {
				position: absolute;
				top: -2px;
				left: 3.25rem;
			}
			a {
				right: 1rem;
			}
		}
	};
	@media screen and (max-width: 800px) {
		header {
			h1 a {
				font-size: 16px;
			};
			a img {
				height: 32px;
				width: 93px;
				margin: 14px 0;
			};
		};
	};
	@media print {
		display: none;
	}
}
</style>
