<template>
	<div class="Cabecalho">
		<header>
			<i class="material-icons" @click="menuToggle = true">menu</i>
			<h1><a href=""><span>participe</span>.gestaourbanaSP</a></h1>
			<a href="http://www.capital.sp.gov.br/" title="Prefeitura de São Paulo"><img src="../../src/assets/img/PMSP_cor_transparente.png"></a>
		</header>
	</div>
</template>

<script>
	export default {
		name: 'Cabecalho',
	};
</script>

<style lang="scss" scoped>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
		height: 60px;
		max-height: 120px;
		box-shadow: 0 2px 2px rgba(0, 0, 0, .12);
		background: #F8F8F8;
		i {
			color: #BDBDBD; transition: color .1s;
			&:hover { color: #333; cursor: pointer; };
		};
		h1 {
			margin: 0;
			padding: 0;
			font-size: 24px;
			font-weight: 400;
			a {
				color: #BDBDBD;
				span {
					color: #EB5757;
					font-weight: 800;
				};
				&:hover { text-decoration: none; };
			};
		};
		a {
			line-height: 100%;
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
			h1 a {
				font-size: 16px;
				vertical-align: 4px;
			};
			a img {
				margin-left: 0;
				max-height: 32px;
			};
		};
	};
</style>