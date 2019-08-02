<template>
	<div class="cabecalho" :class="{ negativo: isConsulta }">
		<header>
			<i class="icon icon-menu" @click="abreMenu"><span>menu</span></i>
			<h1><router-link to='/' tag='a'><span>participe</span>.gestaourbanaSP</router-link></h1>
			<a href="http://www.capital.sp.gov.br/" title="Prefeitura de São Paulo">
				<picture>
					<source	type='image/webp' :srcset="logos('arquivos/img/PMSP_horizontal', 'webp')">
					<img :src="logos('arquivos/img/PMSP_horizontal', 'png')" alt="Prefeitura de São Paulo">
				</picture>
			</a>
		</header>
	</div>
</template>

<script>
export default {
	name: 'Cabecalho',
	computed: {
		basePath () { return this.$store.getters.basePath },
		isConsulta ()	{ if (this.$route.meta.id) { return true } 			else { return false } },
		imageType ()	{ if (this.$route.meta.id) { return 'mono_neg' } 	else { return 'cor_pos' } }
	},
	methods: {
		abreMenu () {
			this.$store.state.menuToggle = true
			this.$store.state.luzApaga = true
			document.body.style.overflow = document.body.style.overflow === '' ? 'hidden' : ''
		},
		logos (baseName, extension) {
			return process.env.VUE_APP_ASSETS_BASE_URL + baseName + '_' + this.imageType + '.' + extension
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

h1 {
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
		span {
			font-weight: 800;
			color: $vermelho;
		};
		&:hover { text-decoration: none; };
	};
};

i.icon.icon-menu {
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
	& > a {
		position: absolute;
		right: 2rem;
		height: 100%;
		&:hover, &:active { background: unset; }
		picture img {
			border: none;
			height: 40px;
			width: 117px;
			margin: 10px 0;
		};
	};
};

.negativo {
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
		a picture img {
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
		a picture img { display: none; };
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
		a picture img {
			height: 32px;
			width: 93px;
			margin: 14px 0;
		};
	};
};

@media print {
	.cabecalho {
		display: none;
	}
}
</style>
