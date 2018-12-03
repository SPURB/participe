<template>
	<div class="Cabecalho">
		<header>
<!-- 			<i class="material-icons" @click="abreMenu">menu</i> -->
			<i class="icon icon-menu" @click="abreMenu"><span>menu</span></i>
			<h1><a href=""><span>participe</span>.gestaourbanaSP</a></h1>
			<a href="http://www.capital.sp.gov.br/" title="Prefeitura de São Paulo"><img :src="logoPrefeitura"></a>
		</header>
	</div>
</template>

<script>
export default {
	name: 'Cabecalho',
	computed: {
		logoPrefeitura () { return this.$store.getters.basePath + 'arquivos/img/PMSP_cor_transparente.png' }
	},
	methods: {
		abreMenu () {
			this.$store.state.menuToggle = true
			this.$store.state.luzApaga = true
		}
	}
}
</script>

<style lang="scss" scoped>

div.Cabecalho {
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
		height: 60px;
		max-height: 120px;
		background: #F5F5F5;
		box-shadow: 0 4px 8px rgba(0, 0, 0, .24);
		position: relative;
		z-index: 3;

		i {
			color: #BDBDBD;
			transition: color .1s;
			width: 100%;

			&:hover {
				color: #333;
				cursor: pointer;
			};
		};

		h1 {
			margin: 0;
			padding: 0;
			font-size: 24px;
			font-weight: 400;

			a {
				color: #BDBDBD;
				width: 100%;

				span { color: #EB5757; font-weight: 800; };

				&:hover { text-decoration: none; };
			};
		};

		a {
			line-height: 100%;
			width: 100%;
			text-align: right;

			img {
				max-height: 40px;
				min-height: 32px;
			};
		};
	};

	@media (max-width: 420px) {

		header a img { display: none; };
	};

	@media (max-width: 800px) {

		header {
			h1 a { font-size: 16px; vertical-align: 4px; };

			a img { margin-left: 0; max-height: 32px; };
		};
	};
}
</style>
