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
			<div id="dadosPopulacao">
				<div>
					<h6>População</h6>
					<span>46.600</span> habitantes<sup>1</sup>
					<div>Aproximadamente <span>0,4%</span> da população do Município de São Paulo</div>
				</div>
				<div>
					<h6>Área</h6>
					<span>1.467</span> ha
					<div>Aproximadamente <span>1%</span> do território do Município de São Paulo </div>
				</div>
				<div>
					<h6>Densidade populacional</h6>
					<span>32</span> habitantes/ha<sup>1</sup>
				</div>
				<ol class="fonte">
					<li>Estimativa a partir de dados do MDC/IBGE 2010</li>
				</ol>
			</div>
			<!-- <div id="dadosTrabalho">
				<div>
					<div>Total de empregos formais no setor do comércio, serviços, indústria de transformação e construção civil</div>
					<div>90.100</div>
					empregos formais<sup>1</sup>
				</div>
				<div>
					<div>Relação emprego/habitante</div>
					<div>1,9</div>
					empregos/habitante<sup>1</sup>
				</div>
				<ol class="fonte">
					<li>Estimativa a partir de dados do INFOCIDADE/RAIS 2014 e dados do IBGE 2010</li>
				</ol>
			</div> -->
			<!-- <div id="dadosMobilidade">
				<div class="esq">
					<div>
						<h6>
							<i class="material-icons">call_made</i>
							Viagens geradas no perímetro do Arco Pinheiros com destino fora de seus limites
						</h6>
						<div><span>50 mil</span> viagens diárias<sup>1</sup></div>
					</div>
					<div>
						<h6>
							<i class="material-icons">call_received</i>
							Viagens atraídas ao perímetro do ACP com origem em outros pontos da RMSP
						</h6>
						<div><span>185 mil</span> viagens diárias<sup>1</sup></div>
					</div>
				</div>
				<div class="pizza">
					<div>Motivos que mais atraem viagens ao perímetro do ACP</div>
					<div>
						<svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="160px" height="160px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
							 <path fill="#777777" d="M49.896,49.887L28.831,95.107c12.987,6.05,26.49,6.398,39.771,1.026L49.896,49.887z"/>
							 <path fill="#BDBDBD" d="M49.896,49.887L11.693,81.969c4.962,5.907,10.145,9.881,17.138,13.139L49.896,49.887z"/>
							 <path fill="#F5F5F5" d="M49.896,49.887L0.129,46.427c-0.917,13.192,3.06,25.414,11.564,35.542L49.896,49.887z"/>
							 <path fill="#333333" d="M49.896,49.887L49.876,0C23.426,0.01,1.963,20.041,0.129,46.427L49.896,49.887z"/>
							 <path fill="#EB5757" d="M49.896,49.887l18.707,46.247c25.541-10.332,37.872-39.412,27.54-64.953 C88.29,11.769,70.814-0.009,49.876,0L49.896,49.887z"/>
							 <text x="77" y="50">44%</text>
							 <text x="14" y="26">24%</text>
							 <text x="40" y="95">12%</text>
							 <text x="19" y="85">7%</text>
							 <text x="4" y="63">13%</text>
						</svg>
					</div>
					<ul>
						<li motivo="servicos">Trabalho (serviços)</li>
						<li motivo="educacao">Educação</li>
						<li motivo="comercio">Trabalho (comércio)</li>
						<li motivo="industria">Trabalho (indústria)</li>
						<li motivo="outros">Outros</li>
					</ul>
				</div>
				<ol class="fonte">
					<li>Estimativa a partir de dados da Pesquisa Origem-Destino 2007 Metrô</li>
				</ol>
			</div> -->
			<!-- <div id="dadosAreasVerdes">
				<div>
					<div>Relação áreas verdes/população</div>
					<div>53</div>
					<div>m²/habitante<sup>1</sup></div>
				</div>
				<ol class="fonte">
					<li>Estimativa a partir de dados do MDC</li>
				</ol>
			</div> -->
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
		}

		div.limiteSp_mob { display: none; }
	}

	div.legenda_mob { display: none; }

	div.dados {
		grid-column: 2/3;
		grid-row: 1/3;
		z-index: 1;
		position: relative;
		overflow: hidden;
		/*border: 1px solid #BDBDBD;*/

		& > div {
			position: relative;		
			max-height: 100%;
			height: 100%;
			max-height: 100%;
		}

		div#dadosPopulacao {
			border: 1px solid transparent;

			& > div {
				background: rgba(255, 255, 255, .8);
				margin: 8px 0 0 8px;
				padding: 8px 12px;
				width: 160px;
				text-align: center;
				border-radius: 2px;
				line-height: 100%;
				& > span { font-size: x-large; color: #EB5757; font-weight: 700; }

				h6 {
					font-size: x-small;
					margin: 0;
					color: #777;
					text-transform: uppercase;
					line-height: 160%;
					margin-bottom: 12px;
				}

				div:last-child {
					font-size: small;
					text-align: left;
					line-height: 160%;
					margin-top: 12px;
					& > span { font-weight: 700; background: #EB5757; color: #FFF; padding: 0 2px; border-radius: 2px; }
				}
			}
		}

		div#dadosTrabalho {
			display: flex;
			flex-flow: column nowrap;
			align-items: end;
			& > div {
				width: 200px;
				margin-top: 8px;
				margin-right: 8px;
				background: rgba(255, 255, 255, .8);
				border-radius: 0 0 2px 2px;
				font-size: small;
				padding-bottom: 8px;
				text-align: center;

				div:nth-child(1) {
					background: #333;
					color: #FFF;
					font-size: x-small;
					text-transform: uppercase;
					line-height: 120%;
					padding: 4px 8px;
					text-align: left;
				}

				div:nth-child(2) {
					font-size: x-large;
					font-weight: 700;
					line-height: 100%;
					margin: 8px 0 0 0;
				}
			}
		}

		div#dadosMobilidade {
			padding: 8px;

			div.esq {
				display: inline-flex;
				flex-direction: column;
				justify-content: space-between;
				height: 100%;

				& > div {
					background: rgba(255, 255, 255, .8);
					width: 160px;
					border-radius: 2px;

					h6 {
						background: #777;
						font-size: x-small;
						text-transform: uppercase;
						color: #FFF;
						margin: 0;
						padding: 8px 12px;
						display: flex;
						border-radius: 2px 2px 0 0;

						i {
							font-size: x-large;
							padding-right: 12px;
							align-self: center;
							color: #333;
						}
					}

					div {
						text-align: center;
						font-size: small;
						padding: 16px 12px 12px 12px;

						span {							
							font-size: xx-large;
							display: block;
							font-weight: 700;
							line-height: 80%;
						}
					}
				}
			}

			& > div.pizza {
				position: absolute;
				background: rgba(255, 255, 255, .8);
				right: 8px;
				top: 8px;
				max-width: min-content;
				border-radius: 2px;

				& > div:first-child {
					background: #777;
					color: #FFF;
					font-size: x-small;
					font-weight: bold;
					text-transform: uppercase;
					padding: 8px 12px;
					border-radius: 2px 2px 0 0;
				}

				& > div:nth-child(2) {
					padding: 12px;
					line-height: 100%;

					svg {
						path {
							/*stroke: rgba(255, 255, 255, .8);*/
							stroke-width: 0.8;
						}
						text {
							fill: #FFF;
							text-shadow: 1px 1px 2px rgba(0, 0, 0, .72);
							font-size: x-small;
						}
					}
				}

				& > ul {
					margin: 0;
					padding: 0 12px 8px 12px;
					list-style: none;
					font-size: small;

					li::before {
						display: inline-block;
						content: '';
						width: .8rem;
						height: .8rem;
						margin-right: 8px;
						vertical-align: -1px;
						box-shadow: 1px 1px 2px rgba(0, 0, 0, .64);
					};

					li[motivo=servicos]::before { background: #EB5757; }
					li[motivo=educacao]::before { background: #333; }
					li[motivo=comercio]::before { background: #777; }
					li[motivo=industria]::before { background: #BDBDBD; }
					li[motivo=outros]::before { background: #F5F5F5; }
				}
			}
		}

		div#dadosAreasVerdes {
			padding: 8px;
			& > div {
				background: rgba(100, 130, 55, .8);
				display: flex;
				flex-flow: column;
				justify-content: space-around;
				width: 160px;
				height: 160px;
				border-radius: 100%;
				text-align: center;
				padding: 20px;
				color: #FFF;
				border: 4px solid rgba(0, 0, 0, .48);

				& > div:nth-child(1), & > div:nth-child(3) { font-size: small; }
				& > div:nth-child(2) { font-size: xx-large; line-height: 100%; font-weight: 700; text-shadow: 2px 2px rgba(0, 0, 0, .48); }
			}
		}

		ol.fonte {
			position: absolute;
			margin: 0;
			padding: 2px 8px 2px 16px;
			bottom: 8px;
			right: 8px;
			width: max-content;
			max-width: 100%;
			font-size: x-small;
			background: #FFF;
			border-radius: 2px;
		}

		sup {
			font-size: x-small;
		}
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

			div#dadosPopulacao {
				& > div {
					width: 100%;
					margin: 8px 0;

					&:first-child { margin-top: 0; }
					&:last-child { margin-bottom: 0; }
				}
			}

			div#dadosTrabalho {
				flex-flow: row wrap;
				justify-content: space-between;
				align-items: flex-start;
				& > div { width: calc(50% - 4px); margin: 0;}
			}

			div#dadosMobilidade {
				padding: 0;
				width: 100%;
				div.esq {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					height: min-content;
					& > div { width: calc(50% - 8px); }
				}
				div.pizza {
					position: relative;
					right: 0;
					min-width: 100%;
					div:nth-child(2) { display: inline-block; width: 50%; text-align: center; }
					ul { display: inline-block; vertical-align: 30px; width: 49%; }
				}
			}

			div#dadosAreasVerdes {
				display: flex;
				align-items: center;
				flex-flow: column;
				padding: 16px 12px 8px 12px;
				background: #BDBDBD;
				border-radius: 2px;
			}

			ol.fonte {
				position: relative;
				margin-top: calc(1rem + 8px);
				left: 0;
			}
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