<template>
	<div class="Diagnostico" lang="pt-BR">
		<div class="limiteSp">
			<img :src="imgSrc('arquivos/arco-pinheiros/limiteSp.png')" alt="Localização do perímetro do PIU Arco Pinheiros no município de São Paulo.">
			<div class="limitePerimetro"></div>
		</div>
		<div class="menu">
			<div>
				<div class="menu_visor"><span ref="menu_visor">Selecione...</span> <i class="material-icons">keyboard_arrow_down</i></div>
				<ul>
					<li @click="alteraSecao('populacao', $event)" :class="{ ativo: !escPopulacao }">População</li>
					<li @click="alteraSecao('usosdosolo', $event)" :class="{ ativo: !escUsos }">Usos do solo</li>
					<li @click="alteraSecao('trabalho', $event)" :class="{ ativo: !escTrabalho }">Trabalho</li>
					<li @click="alteraSecao('mobilidade', $event)" :class="{ ativo: !escMobilidade }">Mobilidade</li>
					<li @click="alteraSecao('areasverdes', $event)" :class="{ ativo: !escAreasVerdes }">Áreas verdes</li>
				</ul>
			</div>
			<div class="legenda">
				<ul>
					<li class="tituloDiag">Legenda</li>
					<li><span style="border: 2px solid #211915"></span>Perímetro do Arco Pinheiros</li>
					<li><span :style="backgroundImg('arquivos/arco-pinheiros/legenda_ferrovias.png')" style="background-repeat: no-repeat; background-position: center center;"></span>Ferrovia</li>
					<li><span style="background: #84b1bd"></span>Hidrografia</li>
					<li><span style="height: 1px; border: 1px solid #4c4c4c"></span>Via Estrutural de Nível 1</li>
				</ul>
				<ul v-show="escPopulacao == false">
					<li class="tituloDiag">Densidade demográfica (hab/ha)</li>
					<li><span style="background: #fffbea"></span>Até 50</li>
					<li><span style="background: #ffebba"></span>25–50</li>
					<li><span style="background: #ffde95"></span>50–100</li>
					<li><span style="background: #ffd170"></span>100–150</li>
					<li><span style="background: #ffc34a"></span>150–200</li>
					<li><span style="background: #ffb625"></span>200–300</li>
					<li><span style="background: #ff9000"></span>Acima de 300</li>
				</ul>
				<ul v-show="escUsos == false || escTrabalho == false || escMobilidade == false">
					<li class="tituloDiag">Uso do solo por lote</li>
					<li><span style="background: #a0c0ff"></span> Res. vert. baixo padrão</li>
					<li><span style="background: #0080ff"></span> Res. vert. médio/alto padrão</li>
					<li><span style="background: #ffffd0"></span> Res. horiz. baixo padrão</li>
					<li><span style="background: #ffff00"></span> Res. horiz. médio/alto padrão</li>
					<li><span style="background: #ff9933"></span> Residencial + comércio/serviços</li>
					<li><span style="background: #ff3333"></span>Comércio e serviços</li>
					<li><span style="background: #e32de3"></span> Indústria e armazéns</li>
					<li><span style="background: #c485eb"></span> Usos especiais</li>
					<li><span style="background: #872de1"></span> Equipamentos</li>
					<li><span :style="backgroundImg('arquivos/arco-pinheiros/legenda_favelas.png')" style="background-repeat: no-repeat; background-position: center center; border: 2px solid #431700"></span>Favelas</li>
					<li><span :style="backgroundImg('arquivos/arco-pinheiros/legenda_nucleos.png')" style="background-repeat: no-repeat; background-position: center center; border: 2px solid #9c3836"></span>Núcleos</li>
					<li><span style="background: #dbdbdb"></span> Outros</li>
				</ul>
				<ul v-show="escAreasVerdes == false">
					<li class="tituloDiag">Áreas verdes existentes</li>
					<li><span style="background: #3d5d38"></span>Reserva de Mata Atlântica</li>
					<li><span style="background: #6e813f"></span>Áreas verdes tombadas e outras</li>
					<li><span style="background: #8ca350"></span>Parques</li>
					<li><span style="background: #ccdda3"></span>Praças e canteiros</li>
				</ul>
				<div class="fonte">Base <strong>MDC, 2004</strong><br />
				Elaboração <strong>SPUrbanismo</strong></div>
			</div>
		</div>
		<div class="main">
			<img :src="imgSrc('arquivos/arco-pinheiros/diagnostico_mapas/base.png')">
			<div id="mapas" ref="mapas"></div>
			<div class="limiteSp_mob">
				<img :src="imgSrc('arquivos/arco-pinheiros/limiteSp.png')" alt="Localização do perímetro do PIU Arco Pinheiros no município de São Paulo.">
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
			<div id="dados_usosdosolo" :class="{ escondido: escUsos }">
				<div>
					<h6>Usos predominantes do solo<sup>1</sup></h6>
					<div class="bar">
						<div style="width: 61%; background: #EB5757;"></div>
						<div style="width: 6%; background: #f3e826;"></div>
						<div style="width: 3%; background: #f28d14;"></div>
						<div style="width: 30%; background: #777;"></div>
					</div>
					<ul>
						<li>
							<span style="background: #EB5757;"></span>
							<strong>Usos não residenciais</strong> (comércio, serviços, indústrias, armazéns, equipamentos, usos especiais) <span>61%</span>
						</li>
						<li>
							<span style="background: #f3e826;"></span>
							<strong>Usos residenciais</strong> (residencial vertical de baixo, médio e alto padrão; residencial horizontal de baixo, médio e alto padrão; uso misto) <span>6%</span>
						</li>
						<li>
							<span style="background: #f28d14;"></span>
							<strong>Favelas e núcleos</strong> <span>3%</span>
						</li>
						<li>
							<span style="background: #777;"></span>
							<strong>Outros</strong> (terrenos vagos, terrenos sem informação, vias, praças, canteiros, rios, córregos) <span>30%</span>
						</li>
					</ul>
				</div>
				<ol class="fonte">
					<li>Estimativa a partir de dados TPCL 2010 e Google Earth</li>
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
			<div id="dados_mobilidade" :class="{ escondido: escMobilidade }">
				<div class="esq">
					<div>
						<h6>
							<i class="material-icons">call_made</i>
							Viagens geradas
						</h6>
						<div><span>46 mil</span> viagens diárias<sup>1</sup></div>
					</div>
					<div>
						<h6>
							<i class="material-icons">call_received</i>
							Viagens atraídas
						</h6>
						<div><span>168 mil</span> viagens diárias<sup>1</sup></div>
					</div>
				</div>
				<div class="pizza">
					<div>Motivos que mais atraem viagens ao perímetro do ACP</div>
					<div>
						<svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 width="160px" height="160px" viewBox="0 0 160 160" enable-background="new 0 0 160 160" xml:space="preserve">
							<g>
								<path fill="#333333" d="M80.45,79.989L8.034,46.185C21.462,17.357,48.678,0,80.45,0V79.989z"/>
								<path fill="#777777" d="M80.45,79.989L8.634,115.055C-2.198,92.819-2.41,68.606,8.034,46.185L80.45,79.989z"/>
								<path fill="#BDBDBD" d="M80.45,79.989l-46.966,64.712c-11.424-8.309-18.659-16.941-24.851-29.646L80.45,79.989z"/>
								<path fill="#D5D5D5" d="M80.45,79.989l5.574,79.794c-19.37,1.357-36.831-3.656-52.54-15.082L80.45,79.989z"/>
								<path fill="#EB5757" d="M80.45,79.989V0c44.129,0,79.902,35.813,79.902,79.989c0,42.41-32.067,76.837-74.328,79.794
									L80.45,79.989z"/>
							</g>
							<text transform="matrix(0.5484 0.8362 -0.8362 0.5484 38.3604 23.6611)"><tspan x="0" y="0" fill="#FFFFFF">18%</tspan></text>
							<text transform="matrix(1 0 0 1 9.3667 83.9282)"><tspan x="0" y="0" fill="#FFFFFF">14%</tspan></text>
							<text transform="matrix(1 0 0 1 128.8691 83.9282)"><tspan x="0" y="0" fill="#FFFFFF">49%</tspan></text>
							<text transform="matrix(0.7723 -0.6353 0.6353 0.7723 27.7515 128.3735)"><tspan x="0" y="0" fill="#FFFFFF">8%</tspan></text>
							<text transform="matrix(0.2784 -0.9605 0.9605 0.2784 64.3413 149.5308)"><tspan x="0" y="0" fill="#FFFFFF">11%</tspan></text>
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
				<div class="barras">
					<GrafBarras></GrafBarras>
				</div>
				<ol class="fonte">
					<li>Estimativa a partir de dados da Pesquisa Origem-Destino 2007 Metrô</li>
				</ol>
			</div>
			<div id="dados_areasverdes" :class="{ escondido: escAreasVerdes }">
				<div>
					<div>Relação áreas verdes/população</div>
					<div>53</div>
					<div>m²/habitante<sup>1</sup></div>
				</div>
				<ol class="fonte">
					<li>Estimativa a partir de dados do MDC e Google Earth</li>
				</ol>
			</div>
		</div>
		<div class="legenda_mob">
			<ul>
					<li class="tituloDiag">Legenda</li>
					<li><span style="border: 2px solid #211915"></span>Perímetro do Arco Pinheiros</li>
					<li><span :style="backgroundImg('arquivos/arco-pinheiros/legenda_ferrovias.png')" style="background-repeat: no-repeat; background-position: center center;"></span>Ferrovia</li>
					<li><span style="background: #84b1bd"></span>Hidrografia</li>
					<li><span style="height: 1px; border: 1px solid #4c4c4c"></span>Via Estrutural de Nível 1</li>
				</ul>
				<ul v-show="escPopulacao == false">
					<li class="tituloDiag">Densidade demográfica (hab/ha)</li>
					<li><span style="background: #fffbea"></span>Até 50</li>
					<li><span style="background: #ffebba"></span>25–50</li>
					<li><span style="background: #ffde95"></span>50–100</li>
					<li><span style="background: #ffd170"></span>100–150</li>
					<li><span style="background: #ffc34a"></span>150–200</li>
					<li><span style="background: #ffb625"></span>200–300</li>
					<li><span style="background: #ff9000"></span>Acima de 300</li>
				</ul>
				<ul v-show="escUsos == false || escTrabalho == false || escMobilidade == false">
					<li class="tituloDiag">Uso do solo por lote</li>
					<li><span style="background: #a0c0ff"></span> Res. vert. baixo padrão</li>
					<li><span style="background: #0080ff"></span> Res. vert. médio/alto padrão</li>
					<li><span style="background: #ffffd0"></span> Res. horiz. baixo padrão</li>
					<li><span style="background: #ffff00"></span> Res. horiz. médio/alto padrão</li>
					<li><span style="background: #ff9933"></span> Residencial + comércio/serviços</li>
					<li><span style="background: #ff3333"></span>Comércio e serviços</li>
					<li><span style="background: #e32de3"></span> Indústria e armazéns</li>
					<li><span style="background: #c485eb"></span> Usos especiais</li>
					<li><span style="background: #872de1"></span> Equipamentos</li>
					<li><span :style="backgroundImg('arquivos/arco-pinheiros/legenda_favelas.png')" style="background-repeat: no-repeat; background-position: center center; border: 2px solid #431700"></span>Favelas</li>
					<li><span :style="backgroundImg('arquivos/arco-pinheiros/legenda_nucleos.png')" style="background-repeat: no-repeat; background-position: center center; border: 2px solid #9c3836"></span>Núcleos</li>
					<li><span style="background: #dbdbdb"></span> Outros</li>
				</ul>
				<ul v-show="escAreasVerdes == false">
					<li class="tituloDiag">Áreas verdes existentes</li>
					<li><span style="background: #3d5d38"></span>Reserva de Mata Atlântica</li>
					<li><span style="background: #6e813f"></span>Áreas verdes tombadas e outras</li>
					<li><span style="background: #8ca350"></span>Parques</li>
					<li><span style="background: #ccdda3"></span>Praças e canteiros</li>
				</ul>
				<div class="fonte">Base <strong>MDC, 2004</strong><br />
				Elaboração <strong>SPUrbanismo</strong></div>
		</div>
		<div class="texto">
			<div v-show="escPopulacao && escUsos && escTrabalho && escMobilidade && escAreasVerdes">
				<p>Utilize os botões para selecionar uma das temáticas do diagnóstico realizado.</p>
			</div>
			<div v-show="escPopulacao == false">
				<p>Apesar da baixa densidade demográfica no perímetro do Arco Pinheiros, característica da Macroárea de Estruturação Metropolitana, fruto dos processos históricos de ocupação da orla fluvial e ferroviária no Município de São Paulo, o mapa de densidade demográfica (IBGE: Censo Demográfico, 2010) aponta pequenos bolsões com densidade acima de 300 habitantes por hectare e, sobretudo, acima de 500 habitantes por hectare, localizados nos territórios caracterizados como assentamentos precários pela SEHAB.</p>
			</div>
			<div v-show="escUsos == false">
				<p>O Mapa do Uso do Solo de 2010 (TPCL) aponta para a presença concentrada do uso industrial e de armazéns a sudoeste da Av. Dr. Gastão Vidigal até as divisas do território do ACP com as áreas de residências horizontais do Jaguaré e do Butantã. Demonstra também um grande eixo comercial ao longo da Av. Dr. Gastão Vidigal (apenas em seu lado norte) e uma área de grandes terrenos vagos na confluência dos rios Pinheiros e Tietê, região do Cebolão.</p>
				<p>Essas concentrações reveladas pelo mapa de Uso do Solo do TPCL definem, com efeito, grandes áreas com certa homogeneidade no território do ACP. Mas, quando observadas de perto e com detalhes, essas áreas revelam atividades diversificadas e porções ociosas significativas, características que devem ser consideradas para a definição mais precisa de estratégias de transformação do território.</p>
			</div>
			<div v-show="escTrabalho == false">
				<p>As características territoriais do Arco Pinheiros estão estreitamente ligadas à presença das grandes conexões com a macrometrópole: a norte, destaca-se a chegada das rodovias Bandeirantes e Anhanguera e a oeste, a Rodovia Presidente Castelo Branco, cuja entrada no município é marcada pelo Complexo Viário Heróis de 1932, o Cebolão. Ao se aproximarem de São Paulo, essas rodovias conformam um grande complexo de fluxo intenso e expresso, carregando pessoas e cargas industriais e agrícolas advindas de todo interior. Essa condição gerou e gera, seguidamente, efeitos positivos e negativos nesse território. </p>
			</div>
			<div v-show="escMobilidade == false">
				<p>O Arco Pinheiros caracteriza-se como região atratora (e não geradora) de viagens. Essa característica decorre, a exemplo do que acontece no restante da MEM, da baixa densidade populacional associada à presença de grandes áreas de uso não residencial.</p>
				<p>Chamam à atenção nos percentuais de modos de viagens, a participação elevada do automóvel  nos deslocamentos (quase 50% acima da média do município) e, dentre os modos coletivos de transporte, a elevada participação do trem (quase 6 vezes a média do município).</p>
				<p>Além disso, o baixo percentual de viagens não motorizadas (a pé e de bicicleta) em relação ao percentual municipal evidencia a monofuncionalidade dos usos no território e problemas de acessibilidade.</p>
			</div>
			<div v-show="escAreasVerdes == false">
				<p>Ainda que os índices de áreas verdes por habitante no perímetro do Arco Pinheiros ultrapassem os recomendados pela OMS, a influência da baixa densidade demográfica nos índices e a concentração de áreas verdes em algumas áreas específicas do território fazem com que estes números não se reflitam necessariamente em qualidade espacial.</p>
			</div>
			<a :href="imgSrc('arquivos/arco-pinheiros/Diagnostico_Consulta-publica_2018_09_06.pdf')" download="PIU Arco Pinheiros - Diagnóstico para Consulta pública (2018-09-06)">
				<i class="material-icons">picture_as_pdf</i>
				Faça o donwload do diagnóstico completo (25,5 Mb)
			</a>
		</div>
	</div>
</template>

<script>
import GrafBarras from '@/components/graf/GrafBarras';

export default {
	name: 'Diagnostico',
	components: {
		GrafBarras
	},
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
			let caminho = 'url(http://participe.comunicacao.smul.pmsp/arquivos/arco-pinheiros/diagnostico_mapas/' + path + '.png)'
			this.$refs.mapas.style.backgroundImage = caminho
			this.$refs.menu_visor.innerText = evento.target.innerText
		},
		imgSrc(caminho) {
			let url = this.$store.getters.basePath + caminho
			return url.toString()
		},
		backgroundImg(caminho) {
			let url = this.$store.getters.basePath + caminho
			return 'background-image: url(' + url + ');'
		}
	},
}
</script>

<style lang="scss" scoped>
div.Diagnostico {
	font-size: 16px;
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
			padding: 2rem;
		}

		div.limitePerimetro {
			position: absolute;
			top: 27.5%;
			left: 20.5%;
			right: 63.2%;
			bottom: 63%;
			border: 1px solid #333;
		}
	}

	div.menu {
		grid-column: 1/2;
		grid-row: 2/4;
		order: 3;

		div.menu_visor {
			display: none;
		}

		& > div:not(.legenda) > ul {
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
	}

	div.menu div.legenda, div.legenda_mob {
		margin: 1rem 0 0 0;
		background: #FFF;
		padding: 8px 12px;
		border: 1px solid #BDBDBD;
		font-size: small;
		overflow-wrap: break-word;
		word-wrap: break-word;
		hyphens: auto;

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
					min-width: 16px;
					margin: 0 8px 0 0;					
					border: 1px solid rgba(0, 0, 0, .08);
				}

				&.tituloDiag {
					font-weight: 700;
				}
			}

			&:first-child {
				border-bottom: 1px solid #BDBDBD;
				padding: 0 0 12px 0;
				margin: 0 0 12px 0;
			}

			&:not(:first-child) { max-height: 200px; overflow-y: auto; }
		}

		div.fonte {
			padding-top: 12px;
			margin-top: 12px;
			border-top: 1px solid #BDBDBD;
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
				box-shadow: 0 2px 2px rgba(0, 0, 0, .24);
			}

			& > ol.fonte { transition-delay: .1s; }
		}

		div#dados_populacao {
			z-index: 2;
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
				z-index: 0;
				& > div {
					transform: translateX(-150%);
				}
				ol.fonte {
					transform: translateY(150%);
				}
			}
		}

		div#dados_usosdosolo {
			z-index: 2;
			& > div {
				background: rgba(255, 255, 255, .8);
				border-radius: 2px;
				max-width: 280px;
				margin: 8px;
				float: right;

				h6 {
					margin: 0;
					padding: 8px 12px;
					font-size: large;
					background: #333;
					color: #FFF;
					border-radius: 2px 2px 0 0;
				}

				& > div {
					display: flex;
					flex-direction: row;
					margin: 16px 16px 8px 16px;

					& > div {
						height: 40px;
						border: 1px solid rgba(0, 0, 0, .08);
					}
				}

				ul {
					list-style: none;
					font-size: small;
					margin: 0;
					padding: 8px;

					li {
						margin: 0 0 8px 0;
						&:last-child { margin-bottom: 0; }

						span:first-child {
							display: inline-block;
							min-width: 16px;
							height: 16px;
							vertical-align: text-top;
							margin-right: 4px;							
							border: 1px solid rgba(0, 0, 0, .08);
						}

						span:last-child {
							font-weight: 700;
							background: #777;
							padding: 0 2px;
							border-radius: 2px;
							color: #FFF;
							white-space: nowrap;
						}
					}
				}
			}

			&.escondido {
				z-index: 0;
				& > div {
					transform: translateX(150%);
				}
				ol.fonte {
					transform: translateY(150%);
				}
			}
		}

		div#dados_trabalho {
			z-index: 2;
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-end;

			& > div {
				width: 200px;
				margin-top: 8px;
				margin-right: 8px;
				margin-left: 8px;
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
					border-radius: 2px 2px 0 0;
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
				z-index: 0;
				& > div {
					transform: translateX(150%);
				}
				ol.fonte {
					transform: translateY(150%);
				}
			}
		}

		div#dados_mobilidade {
			z-index: 2;
			padding: 8px;

			div.esq {
				width: max-content;
				box-shadow: none;

				& > div {
					display: inline-block;
					background: rgba(255, 255, 255, .8);
					width: 120px;
					border-radius: 2px;
					margin: 0 8px 0 0;
					box-shadow: 0 2px 2px rgba(0, 0, 0, .24);

					h6 {
						background: #777;
						font-size: x-small;
						text-transform: uppercase;
						color: #FFF;
						margin: 0;
						padding: 8px 12px;
						display: flex;
						align-items: center;
						border-radius: 2px 2px 0 0;

						i {
							font-size: large;
							padding-right: 12px;
							color: #333;
						}
					}

					div {
						text-align: center;
						font-size: small;
						padding: 16px 12px 12px 12px;

						span {							
							font-size: large;
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
				box-shadow: 0 2px 2px rgba(0, 0, 0, .24);

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
							stroke: rgba(0, 0, 0, .08);
							stroke-width: 1;
						}
						text {
							fill: #FFF;
							text-shadow: 0 2px 2px rgba(0, 0, 0, .72);
							font-size: small;
							cursor: default;
						}
					}
				}

				& > ul {
					margin: 0 auto;
					padding: 0 12px 8px 12px;
					list-style: none;
					font-size: small;

					li::before {
						display: inline-block;
						content: '';
						width: .8rem;
						height: .8rem;
						margin-right: 8px;
						vertical-align: -2px;
						border: 1px solid rgba(0, 0, 0, .08);
					};

					li[motivo=servicos]::before { background: #EB5757; }
					li[motivo=educacao]::before { background: #333; }
					li[motivo=comercio]::before { background: #777; }
					li[motivo=industria]::before { background: #BDBDBD; }
					li[motivo=outros]::before { background: #D5D5D5; }
				}
			}

			& > div.barras {
				box-shadow: 0 2px 2px rgba(0, 0, 0, .24);
				width: max-content;
				background: rgba(255, 255, 255, .8);
				padding: 12px;
				max-width: 280px;
				position: absolute;
				bottom: 8px;
				border-radius: 2px;
			}

			&.escondido {
				z-index: 0;
				div.esq {
					transform: translateY(-150%);
				}
				div.pizza {
					transform: translateX(150%);
				}
				div.barras {
					transform: translateX(-150%);
				}
				ol.fonte {
					transform: translateY(150%);
				}
			}
		}

		div#dados_areasverdes {
			z-index: 2;
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
				margin: 8px;
				border: 4px solid rgba(0, 0, 0, .48);

				& > div:nth-child(1), & > div:nth-child(3) { font-size: small; }
				& > div:nth-child(2) { font-size: xx-large; line-height: 100%; font-weight: 700; text-shadow: 2px 2px rgba(0, 0, 0, .48); }
			}

			&.escondido {
				z-index: 0;
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
		font-size: 20px;

		p {
			margin: 0;
			font-family: 'Georgia', serif;
		}

		a {
			display: inline-flex;
			align-items: center;
			background: #BDBDBD;
			color: #FFF;
			padding: 8px 12px;
			border-radius: 2px;
			font-size: smaller;
			transition: all ease-in-out .2s;
			margin-top: 1rem;
			border: 4px solid rgba(0, 0, 0, .08);
			i { margin-right: 12px; }
			&:hover {
				background: #EB5757;
				text-decoration: none;
			}
		}
	}

	@media (max-width: 750px) {
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

			div {
				cursor: pointer;

				div.menu_visor {
					display: block;
					font-size: larger;
					font-weight: bolder;
					background: #EB5757;
					color: #FFF;
					padding: 8px 12px;
					border-radius: 2px 2px 0 0;
					box-shadow: inset 0 8px 4px rgba(255, 255, 255, 0.12);
					i { vertical-align: text-top; }
				}

				ul {
					position: absolute;
					max-height: 0;
					overflow: hidden;
					width: calc(100% - 4rem);
					z-index: 2;
					transition: all ease-in-out .4s;

					li {
						margin-bottom: 0 !important;
						border-radius: 0 !important;
					}
				}

				&:hover {
					ul { max-height: 1000px }
				}
			}

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
					padding: 8px;
				}

				div.limitePerimetro {
					position: absolute;
					top: 25.5%;
					left: 17.5%;
					right: 63.2%;
					bottom: 64%;
					border: 1px solid #333;
				}
			}
		}

		div.legenda_mob {
			display: block;
			columns: 200px;
			order: 3;
			margin: 0;
			background: #FFF;
			border: 1px solid #BDBDBD;

			ul {
				list-style: none;
				margin: 0;
				padding: 0;
				max-width: unset;
				&:first-child { padding-right: 12px; }
				&:not(:first-child) { max-height: 200px; overflow-y: auto; }
			}
		}

		div.dados {
			grid-column: 1/2;
			grid-row: unset;
			order: 4;
			padding: 12px;
			background: #BDBDBD;
			border-radius: 2px;

			& > div {
				position: relative;
				height: unset;
				&.escondido {
					z-index: 0;
					transform: none !important;
					display: none !important;
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

			div#dados_usosdosolo {
				& > div {
					margin: 0;
					min-width: 100%;
					float: none;
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
					width: 100%;
					margin-bottom: 8px;
					& > div { margin: 0; width: calc(50% - 4px); }
				}
				div.pizza {
					position: relative;
					right: 0;
					top: 0;
					min-width: 100%;
					text-align: center;
					ul {
						text-align: left;
						width: max-content;
					}
				}
				div.barras {
					position: relative;
					bottom: 0;
					width: 100%;
					max-width: unset;
					margin: 8px auto 0 auto;
				}
			}

			div#dados_areasverdes div {
				margin: 0 auto;
			}

			ol.fonte {
				position: relative;
				margin: 12px 0 0 0;
				width: 100%;
				left: 0;
				bottom: 0;
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
			font-size: initial;
		}
	}
}
</style>