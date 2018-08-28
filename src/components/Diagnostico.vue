<template>
	<div class="Diagnostico">
		<div class="limiteSp">
			<img src="../../static/img/limiteSp.png" alt="Localização do perímetro do PIU Arco Pinheiros no município de São Paulo.">
			<div class="limitePerimetro"></div>
		</div>
		<div class="menu">
			<ul>
				<li>População</li>
				<li>Usos do solo</li>
				<li>Trabalho</li>
				<li>Mobilidade</li>
				<li>Áreas verdes</li>
			</ul>			
			<div class="legenda">
				<ul>
					<li>Legenda-placeholder1</li>
					<li>Legenda-placeholder2</li>
					<li>Legenda-placeholder3</li>
					<li>Legenda-placeholder4</li>
					<li>Legenda-placeholder5</li>
				</ul>
			</div>
		</div>
		<div class="main">
			<div class="limiteSp_mob">
				<img src="../../static/img/limiteSp.png" alt="Localização do perímetro do PIU Arco Pinheiros no município de São Paulo.">
				<div class="limitePerimetro"></div>
			</div>
			<img src="../../static/img/base-temp.png"> <!--tirar, usar mapas de bg, aqui fica a base-->
		</div>
		<div class="dados">
			<div id="dados_populacao">
				<div
			</div>
		</div>
		<div class="legenda_mob">
			<ul>
				<li>Legenda-placeholder1</li>
				<li>Legenda-placeholder2</li>
				<li>Legenda-placeholder3</li>
				<li>Legenda-placeholder4</li>
				<li>Legenda-placeholder5</li>
			</ul>
		</div>
		<div class="texto">
			<p>
				Consequat reprehenderit aute sint dolor reprehenderit magna pariatur proident amet sint sint sint consequat excepteur sit do labore ut sit cillum consequat. Consequat reprehenderit aute sint dolor reprehenderit magna pariatur proident amet sint sint sint consequat excepteur sit do labore ut sit cillum consequat. Consequat reprehenderit aute sint dolor reprehenderit magna pariatur proident amet sint sint sint consequat excepteur sit do labore ut sit cillum consequat.
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Diagnostico',
}
</script>

<style lang="scss" scoped>
div.Diagnostico {
	max-width: 992px;
	background: #F5F5F5;
	padding: 2rem;
	box-sizing: content-box;
	border-radius: 2px;
	margin: 2rem auto;
	display: grid;
	grid-template-columns: 1fr minmax(0, 730px);
	grid-column-gap: 1rem;
	grid-template-rows: repeat(2, minmax(0, 100%)) 1fr;
	grid-row-gap: 1rem;

	div.limiteSp {
		grid-column: 1/2;
		grid-row: 1/2;
		order: 1;
		position: relative;

		img {
			max-width: 100%;
			box-sizing: border-box;
			border: 1px solid #BDBDBD;
			background: #FFF;
			padding: 0;
		}

		div.limitePerimetro {
			position: absolute;
			top: 41.5%;
			left: 20.5%;
			right: 62.2%;
			bottom: 41%;
			border: 1px solid #333;
		}
	}

	div.menu {
		grid-column: 1/2;
		grid-row: 2/4;
		order: 3;

		& > ul {
			margin: 0;
			padding: 0;
			list-style: none;

			li {
				color: #FFF;
				background: #333;
				padding: 8px 12px;
				margin-bottom: 8px;
				border-radius: 2px;
				font-weight: bolder;
				font-size: larger;
				cursor: pointer;
				min-height: 2.4rem;
				line-height: 120%;
				&:last-child { margin-bottom: 0; };

				&:hover { background: #EB5757; };
			}
		}

		div.legenda {
			margin: 1rem 0 0 0;
			background: #FFF;
			padding: 1rem;
			border: 1px solid #BDBDBD;

			ul {
				margin: 0;
				padding: 0;

				li { list-style: none; margin: 0; }
			}
		}
	}

	div.main {
		grid-column: 2/3;
		grid-row: 1/3;
		order: 2;

		img {
			max-width: 100%;
			height: 100%;
		}

		div.limiteSp_mob { display: none; }
	}

	div.legenda_mob { display: none; }

	div.dados {
		grid-column: 2/3;
		grid-row: 1/3;
		z-index: 1;
		border: 1px solid red;
	}

	div.texto {
		grid-column: 2/3;
		grid-row: 3/4;
		order: 4;

		p {
			margin: 0;
		}
	}

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		grid-template-rows: unset;
		position: relative;
		box-sizing: border-box;
		max-width: 100%;

		div.limiteSp {
			display: none;
		}

		div.menu {
			grid-row: unset;
			order: 1;

			div.legenda { display: none; }
		}

		div.main {
			grid-column: 1/2;
			grid-row: unset;
			order: 2;
			position: relative;

			div.limiteSp_mob {
				display: block;
				position: absolute;
				top: 4px;
				right: 4px;
				max-width: 80px;

				img {
					max-width: 100%;
					box-sizing: border-box;
					border: 1px solid #BDBDBD;
					background: #FFF;
					position: relative;
				}

				div.limitePerimetro {
					position: absolute;
					top: 37.5%;
					left: 20.5%;
					right: 62.2%;
					bottom: 45%;
					border: 1px solid #333;
				}
			}
		}

		div.legenda_mob {
			display: block;
			order: 3;
			margin: 0;
			background: #FFF;
			padding: 1rem;
			border: 1px solid #BDBDBD;

			ul {
				list-style: none;
				margin: 0;
				padding: 0;
			}
		}

		div.dados {
			grid-column: 1/2;
			grid-row: unset;
			order: 4;
		}

		div.legenda {
			grid-row: unset;
			order: 3;
		}

		div.texto {
			grid-row: unset;
			grid-column: 1/2;
			order: 5;
		}
	}
}
</style>