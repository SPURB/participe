<template>
	<div class="Diagnostico">
		<div class="limiteSp">
			<img src="../../static/img/limiteSp.png" alt="Localização do perímetro do PIU Arco Pinheiros no município de São Paulo.">
			<div class="limitePerimetro"></div>
		</div>
		<div class="menu">
			<ul>
				<li @click="alteraSecao('populacao', $event)" :class="{ ativo: !escPopulacao }">População</li>
				<li @click="alteraSecao('usosdosolo', $event)":class="{ ativo: !escUsos }">Usos do solo</li>
				<li @click="alteraSecao('trabalho', $event)":class="{ ativo: !escTrabalho }">Trabalho</li>
				<li @click="alteraSecao('mobilidade', $event)":class="{ ativo: !escMobilidade }">Mobilidade</li>
				<li @click="alteraSecao('areasverdes', $event)":class="{ ativo: !escAreasVerdes }">Áreas verdes</li>
			</ul>			
			<div class="legenda">				
				<ul>
					<li><span style="border: 2px solid #211915"></span>Perímetro do Arco Pinheiros</li>
					<li><span style="background: url('')"></span>Ferrovia</li>
					<li><span style="background: #84b1bd"></span>Hidrografia</li>
					<li><span style="height: 1px; border: 1px solid #4c4c4c"></span>Via Estrutural de Nível 1</li>
				</ul>
				<ul v-show="escPopulacao == false">
					<li class="titulo">Densidade demográfica (hab/ha)</li>
					<li><span style="background: #fffbea"></span>Até 50</li>
					<li><span style="background: #ffebba"></span>25–50</li>
					<li><span style="background: #ffde95"></span>50–100</li>
					<li><span style="background: #ffd170"></span>100–150</li>
					<li><span style="background: #ffc34a"></span>150–200</li>
					<li><span style="background: #ffb625"></span>200–300</li>
					<li><span style="background: #ff9000"></span>Acima de 300</li>
				</ul>
				<ul v-show="escAreasVerdes == false">
					<li class="titulo">Áreas verdes existentes</li>
					<li><span style="background: #3d5d38"></span>Reserva de Mata Atlântica</li>
					<li><span style="background: #6e813f"></span>Áreas verdes tombadas e outras</li>
					<li><span style="background: #8ca350"></span>Parques</li>
					<li><span style="background: #ccdda3"></span>Praças e canteiros</li>
				</ul>
			</div>
		</div>
		<div class="main">
			<img src="../../static/img/diagnostico_mapas/base.png">
			<div id="mapas" ref="mapas"></div>
			<div class="limiteSp_mob">
				<img src="../../static/img/limiteSp.png" alt="Localização do perímetro do PIU Arco Pinheiros no município de São Paulo.">
				<div class="limitePerimetro"></div>
			</div>
		</div>
		<div class="dados">
			<div id="dados_populacao" :class="{ escondido: escPopulacao }">
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
			<div id="dados_trabalho" :class="{ escondido: escTrabalho }">
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
			</div>
			<div id="dados_mobilidade"  :class="{ escondido: escMobilidade }">
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
			</div>
			<div id="dados_areasverdes"  :class="{ escondido: escAreasVerdes }">
				<div>
					<div>Relação áreas verdes/população</div>
					<div>53</div>
					<div>m²/habitante<sup>1</sup></div>
				</div>
				<ol class="fonte">
					<li>Estimativa a partir de dados do MDC</li>
				</ol>
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
	data() {
		return {
			escPopulacao: true,
			escUsos: true,
			escTrabalho: true,
			escMobilidade: true,
			escAreasVerdes: true
		}
	},
	methods: {
		alteraSecao(secao, evento) {
			let path = ''
			switch (secao) {
				case 'populacao':
					this.escPopulacao = false
					this.escUsos = true
					this.escTrabalho = true
					this.escMobilidade = true
					this.escAreasVerdes = true
					path = 'densidade'
					break;
				case 'usosdosolo':
					this.escPopulacao = true
					this.escUsos = false
					this.escTrabalho = true
					this.escMobilidade = true
					this.escAreasVerdes = true
					path = 'usosdosolo'
					break;
				case 'trabalho':
					this.escPopulacao = true
					this.escUsos = true
					this.escTrabalho = false
					this.escMobilidade = true
					this.escAreasVerdes = true
					path = 'usosdosolo'
					break;
				case 'mobilidade':
					this.escPopulacao = true
					this.escUsos = true
					this.escTrabalho = true
					this.escMobilidade = false
					this.escAreasVerdes = true
					path = 'usosdosolo'
					break;
				case 'areasverdes':
					this.escPopulacao = true
					this.escUsos = true
					this.escTrabalho = true
					this.escMobilidade = true
					this.escAreasVerdes = false
					path = secao
					break;
			}
			let caminho = 'url(../../static/img/diagnostico_mapas/' + path + '.png)'
			this.$refs.mapas.style.backgroundImage = caminho
		}
	},
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
				box-shadow: inset 0 8px 4px rgba(255, 255, 255, .12);
				transition: all ease-in-out .1s;
				&:last-child { margin-bottom: 0; };

				&:hover, &.ativo { background: #EB5757; };
			}
		}

		div.legenda {
			margin: 1rem 0 0 0;
			background: #FFF;
			padding: 1rem;
			border: 1px solid #BDBDBD;
			font-size: small;

			ul {
				margin: 0;
				padding: 0;

				li {
					list-style: none;
					margin: 0;
					display: flex;
					align-items: center;
					margin: 0 0 8px 0;
					&:last-child { margin-bottom: 0; };

					span {
						height: 16px;
						width: 16px;
						margin: 0 8px 0 0;
					}

					&.titulo {
						font-weight: 700;
					}
				}

				&:first-child {
					border-bottom: 1px solid #BDBDBD;
					padding: 0 0 12px 0;
					margin: 0 0 12px 0;
				}
			}
		}
	}

	div.main {
		grid-column: 2/3;
		grid-row: 1/3;
		order: 2;
		position: relative;

		img {
			width: 100%;
			height: 100%;
		}

		div#mapas {
			background-clip: border-box;
			background-origin: border-box;
			background-size: 100% 100%;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
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

		& > div {
			position: absolute;
			top: 0;
			left: 0;
			max-height: 100%;
			height: 100%;
			width: 100%;

			& > img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: -1;
			}

			& > div, & > ol.fonte {
				transition: all ease-in .2s;
			}

			& > ol.fonte { transition-delay: .1s; }
		}

		div#dados_populacao {
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

			& > div:nth-child(2) { transition-delay: .1s; }
			& > div:nth-child(3) { transition-delay: .2s; }

			&.escondido {
				& > div {
					transform: translateX(-150%);
				}
				ol.fonte {
					transform: translateY(150%);
				}
			}
		}

		div#dados_trabalho {
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

			& > div:nth-child(2) { transition-delay: .1s; }

			&.escondido {
				& > div {
					transform: translateX(150%);
				}
				ol.fonte {
					transform: translateY(150%);
				}
			}
		}

		div#dados_mobilidade {
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
				transition-delay: .1s;

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

			&.escondido {
				div.esq {
					transform: translateX(-150%);
				}
				div.pizza {
					transform: translateX(150%);
				}
				ol.fonte {
					transform: translateY(150%);
				}
			}
		}

		div#dados_areasverdes {
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

			&.escondido {
				& > div {
					transform: translateX(-150%);
				}
				ol.fonte {
					transform: translateY(150%);
				}
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

			& > div {
				position: relative;
				height: unset;
				&.escondido {
					* {
						transform: none !important;
						display: none !important;
					}
				}
			}

			div#dados_populacao {
				& > div {
					width: 100%;
					margin: 8px 0;

					&:first-child { margin-top: 0; }
					&:last-child { margin-bottom: 0; }
				}
			}

			div#dados_trabalho {
				flex-flow: row wrap;
				justify-content: space-between;
				align-items: flex-start;
				& > div { width: calc(50% - 4px); margin: 0;}
			}

			div#dados_mobilidade {
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
					text-align: center;
				}
			}

			div#dados_areasverdes {
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