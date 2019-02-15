<template>
	<div class="VidaSegura" ref="conteudoConsulta">
		<PageTop background_image_src="./arquivos/capas/vida-segura.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>Vida Segura, o Plano de Segurança Viária do Município de São Paulo</div></template>
			<template slot="subtitulo">
				<div>{{ estaConsulta.textoIntro }}</div>
			</template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio>
		<template slot="item1">
			<li>
				<input type="radio" name="tabs" id="item1">
				<label for="item1">Anexos</label>
				<div class="conteudoTab">
					<ul style="list-style-type: square; color: #DDD;">
						<li v-for="(anexo, index) in anexos">
							<a :href="fileSrc(anexo)" :key="index" >{{ anexo }}</a>
						</li>
					</ul>
				</div>
			</li>
		</template>
		</Apoio>
		<!-- Nota inicial -->
		<div style="border: 1px solid black; max-width: 700px; margin: 0 auto; padding: 0 1em;">
			<p style="text-align: justify;">
				<center><strong>Termo “acidente de trânsito”</strong></center>
				<br />
				Em conformidade com os preceitos da Visão Zero e Sistemas Seguros, conceitos-chave que baseiam este plano, verifica-se a inadequação do uso da expressão “acidente de trânsito”, pelo fato de a semântica da palavra “acidente” remeter a algo inevitável, que não poderia ter sido evitado. Porém, a norma NBR 10697/1989 institui o termo técnico “acidente de trânsito” como aquele a ser utilizado para tratar de “evento não premeditado de que resulte dano em veículo ou na sua carga e/ou lesões em pessoas e/ou animais em que pelo menos uma das partes está em movimento nas vias terrestres (...). Por esse motivo, este documento mantém a utilização do termo “acidente de trânsito”, já que sua alteração pode acarretar problemas jurídicos futuros, mas com o compromisso de atuação para alteração da norma, que é antiga e anterior ao próprio surgimento da Visão Zero e Sistemas Seguros.
			</p>
		</div>
		<section>
			<h2 indent="1" class="titulo">Capítulo 1: Visão Zero e Sistemas Seguros</h2>
			<Cap1></Cap1>
			<Comments :attr="{id:commentId(true), context:'Capítulo 1: Visão Zero e Sistemas Seguros'}"></Comments>
		</section>

		<hr />
		<section>
			<h2 indent="1" class="titulo">Capítulo 2: Diagnóstico</h2>
		</section>
		<section>
			<h3 indent="2" class="titulo">Capítulo 2A - Panorama dos acidentes no Município de São Paulo</h3>
			<Cap2A>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
				<template slot="t6">
					<table class="headed-table"><tr><th>Ordem</th><th>Via</th><th>Número de acidentes fatais por atropelamento</th><th>Número demortos por atropelamento</th><th>Número de acidentes fatais envolvendo veículos</th><th>Número de mortos em acidentesenvolvendo veículos</th><th>Número total de acidentes fatais</th><th>Número total de mortos</th></tr><tr><td>1</td><td>Marginal Tietê</td><td>5</td><td>7</td><td>13</td><td>13</td><td>18</td><td>20</td></tr><tr><td>2</td><td>Av. Senador Teotônio Vilela</td><td>8</td><td>9</td><td>9</td><td>10</td><td>17</td><td>19</td></tr><tr><td>3</td><td>Marginal Pinheiros</td><td>2</td><td>2</td><td>12</td><td>12</td><td>14</td><td>14</td></tr><tr><td>4</td><td>Est. de Itapecerica</td><td>4</td><td>4</td><td>8</td><td>9</td><td>12</td><td>13</td></tr><tr><td>5</td><td>Av. Dona Belmira Marin</td><td>3</td><td>3</td><td>6</td><td>6</td><td>9</td><td>9</td></tr><tr><td>6</td><td>Av. Jacu-Pêssego / NovaTrabalhadores</td><td>6</td><td>6</td><td>2</td><td>3</td><td>8</td><td>9</td></tr><tr><td>7</td><td>Av. Sapopemba</td><td>5</td><td>5</td><td>3</td><td>3</td><td>8</td><td>8</td></tr><tr><td>8</td><td>Av. Marechal Tito</td><td>6</td><td>6</td><td>2</td><td>2</td><td>8</td><td>8</td></tr><tr><td>9</td><td>Est. M’Boi Mirim</td><td>3</td><td>3</td><td>4</td><td>4</td><td>7</td><td>7</td></tr><tr><td>10</td><td>Av. do Estado</td><td>3</td><td>3</td><td>4</td><td>4</td><td>7</td><td>7</td></tr><tr><td>11</td><td>Av. Aricanduva</td><td>2</td><td>2</td><td>5</td><td>5</td><td>7</td><td>7</td></tr><tr><td>12</td><td>Avenida José PinheiroBorges</td><td>2</td><td>2</td><td>4</td><td>4</td><td>6</td><td>6</td></tr><tr><td>13</td><td>Avenida Pires do Rio</td><td>2</td><td>2</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>14</td><td>Estrada da Baronesa</td><td>1</td><td>1</td><td>5</td><td>5</td><td>6</td><td>6</td></tr><tr><td>15</td><td>Avenida Raimundo Pereira deMagalhães</td><td>0</td><td>0</td><td>5</td><td>7</td><td>5</td><td>7</td></tr><tr><td>16</td><td>Avenida Salim FarahMaluf</td><td>2</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>17</td><td>Avenida Ragueb Chohfi</td><td>1</td><td>1</td><td>4</td><td>4</td><td>5</td><td>5</td></tr><tr><td>18</td><td>Avenida Professor FranciscoMorato</td><td>0</td><td>0</td><td>5</td><td>5</td><td>5</td><td>5</td></tr><tr><td>19</td><td>Avenida Corifeu deAzevedo Marques</td><td>2</td><td>2</td><td>3</td><td>3</td><td>5</td><td>5</td></tr><tr><td>20</td><td>Rua Doutor AssisRibeiro</td><td>2</td><td>2</td><td>3</td><td>3</td><td>5</td><td>5</td></tr><tr><td colspan="2">Total</td><td>59</td><td>62</td><td>104</td><td>110</td><td>163</td><td>173</td></tr></table>
					<figcaption>Tabela 6 - Vias com maior número de acidentes fatais, de acordo com Relatório Anual de Acidentes da CET de 2017.</figcaption>
				</template>
			</Cap2A>
			<Comments :attr="{id:commentId(), context:'Capítulo 2A - Panorama dos acidentes no Município de São Paulo'}"></Comments>
		</section>
		<section>
			<h3 indent="2" class="titulo">Capítulo 2B - Diagnóstico da cultura e comportamento em relação à segurança viária no Município de São Paulo</h3>
			<Cap2B>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap2B>
			<Comments :attr="{id:commentId(), context:'Capítulo 2B - Diagnóstico da cultura e comportamento em relação à segurança viária no Município de São Paulo'}"></Comments>
		</section>
		<section>
			<h3 indent="2" class="titulo">Capítulo 2C - Diagnóstico por eixo</h3>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo I - Articulação Institucional e Gestão</h4>
			<Cap2CEixoI>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
				<template slot='tabela9'>
					<figure style="width: 100%; margin: 0 auto;">
						<table class="simple-table"><tr><th colspan="5">Programa: Ações e s Serviços de Saúde</th></tr><tr><td>Ação Orçamentária</td><td>2018</td><td>2019</td><td>2020</td><td>2021</td></tr><tr><td>1518 - Implantação de Serviço de Atendimento Médico de Urgência (SAMU)</td><td>R$ 1.000</td><td>R$ 0</td><td>R$ 0</td><td>R$ 0</td></tr><tr><td>2514 - Manutenção e Operação de Serviço de Atendimento Médico de Urgência(SAMU)</td><td>R$ 87.359.581</td><td>R$ 83.330.576</td><td>R$ 72.556.533</td><td>R$ 75.946.087</td></tr><tr><td colspan="5"><strong><center>Programa: Direitos da pessoa com deficiência</center></strong></td></tr><tr><td>1169 - Reforma e Acessibilidade em Passeios Públicos</td><td>R$ 38.760.181</td><td>R$ 47.510.740</td><td>R$ 52.252.009</td><td>R$ 73.254.566</td></tr><tr><td>4705 - Transporte de Pessoas com Deficiência ou Mobilidade Reduzida - ATENDE</td><td>R$ 87.028.975</td><td>R$ 101.637.384</td><td>R$ 106.211.537</td><td>R$ 110.991.057</td></tr><tr><td colspan="5"><strong><center>Programa: Melhoria da mobilidade urbana universal</center></strong></td></tr><tr><td>1095 - Construção de Terminais de Ônibus</td><td>R$ 97.300.370</td><td>R$ 76.288.544</td><td>R$ 303.845.101</td><td>R$ 248.124.476</td></tr><tr><td>1096 - Acessibilidade, Ampliação, Reforma e Requalificação de Terminais de Ônibus</td><td>R$ 5.246.785</td><td>R$ 4.397.701</td><td>R$ 24.533.100</td><td>R$ 13.350.534</td></tr><tr><td>1097 - Construção de Ciclovias, Ciclofaixas e Ciclorrotas</td><td>R$ 2.000</td><td>R$ 2.000</td><td>R$ 2.000</td><td>R$ 2.000</td></tr><tr><td>1098 - Ampliação, Reforma e Requalificação de Ciclovias, Ciclofaixas e Ciclorrotas</td><td>R$ 8.992.681</td><td>R$ 10.334.104</td><td>R$ 9.450.880</td><td>R$ 1.000</td></tr><tr><td>1099 - Construção de Corredores de Ônibus</td><td>R$ 505.547.297</td><td>R$ 216.341.186</td><td>R$ 384.672.059</td><td>R$ 299.426.660</td></tr><tr><td>1100 - Ampliação, Reforma e Requalificação de Corredores de Ônibus</td><td>R$ 41.116.074</td><td>R$ 26.475.159</td><td>R$ 2.073.000</td><td>R$ 2.802.000</td></tr><tr><td>1240 - Modernização Semafórica</td><td>R$ 2.000</td><td>R$ 2.000</td><td>R$ 2.000</td><td>R$ 2.000</td></tr><tr><td>2096 - Manutenção e Operação de Terminais de Ônibus</td><td>R$ 2.000</td><td>R$ 3.000</td><td>R$ 3.000</td><td>R$ 3.000</td></tr><tr><td>2098 - Manutenção de Ciclovias, Ciclofaixas e Ciclorrotas</td><td>R$ 61.000</td><td>R$ 61.166</td><td>R$ 63.192</td><td>R$ 64.385</td></tr><tr><td>2099 - Manutenção de Corredores de Ônibus</td><td>R$ 2.000</td><td>R$ 3.000</td><td>R$ 3.000</td><td>R$ 3.000</td></tr><tr><td>3012 - Projetos de Transporte e Mobilidade Oriundos de Recursos de Desestatizações e Parcerias</td><td>R$ 6.000</td><td>R$ 6.000</td><td>R$ 6.000</td><td>R$ 6.000</td></tr><tr><td>3380 - Construção de Pontes, Viadutos e Alças</td><td>R$ 3.000</td><td>R$ 3.000</td><td>R$ 3.000</td><td>R$ 3.000</td></tr><tr><td>3704 - Ações paramodernização do sistema de transportes</td><td>R$ 13.700.000</td><td>R$ 13.920.000</td><td>R$ 14.450.000</td><td>R$ 15.000.000</td></tr><tr><td>3742 - Participação no Sistema de Transporte sobre Trilhos</td><td>R$ 2.000</td><td>R$ 2.000</td><td>R$ 2.000</td><td>R$ 2.000</td></tr><tr><td>3743 - Modernização do Controle e Fiscalização de Tráfego</td><td>R$ 1.000</td><td>R$ 1.000</td><td>R$ 1.000</td><td>R$ 1.000</td></tr><tr><td>3745 - Aumento de Capital da SPTrans</td><td>R$ 14.095.811</td><td>R$ 15.595.811</td><td>R$ 15.595.811</td><td>R$ 15.595.811</td></tr><tr><td>3746 - Aumento de Capital da CET</td><td>R$ 1.000</td><td>R$ 1.000</td><td>R$ 1.000</td><td>R$ 1.000</td></tr><tr><td>4656 - Manutenção e Operação do Policiamento de Trânsito</td><td>R$ 44.144.500</td><td>R$ 44.144.500</td><td>R$ 44.144.500</td><td>R$ 44.144.500</td></tr><tr><td>4657 - Ações de Educação de Trânsito</td><td>R$ 35.000.000</td><td>R$ 1.000</td><td>R$ 1.000</td><td>R$ 1.000</td></tr><tr><td>4658 - Manutenção e Operação da Sinalização do Sistema Viário</td><td>R$ 70.068.481</td><td>R$ 73.004.955</td><td>R$ 60.506.449</td><td>R$ 46.234.078</td></tr><tr><td>4700 - Manutenção e operação do sistema municipal de transporte coletivo</td><td>R$ 375.005.646</td><td>R$ 375.005.646</td><td>R$ 375.005.646</td><td>R$ 375.005.646</td></tr><tr><td>4701 - Compensações tarifárias do sistema de ônibus</td><td>R$ 2.342.987.676</td><td>R$ 2.327.984.033</td><td>R$ 2.333.941.543</td><td>R$ 2.340.227.415</td></tr><tr><td>4702 - Serviços de Engenharia de Tráfego</td><td>R$ 718.430.642</td><td>R$ 700.738.509</td><td>R$ 695.075.664</td><td>R$ 750.292.808</td></tr><tr><td>4703 - Manutenção e Operação do Controle e Fiscalização de Tráfego</td><td>R$ 139.200.000</td><td>R$ 139.200.000</td><td>R$ 139.200.000</td><td>R$ 139.200.000</td></tr><tr><td>5100 - Intervenções no Sistema Viário</td><td>R$ 224.128.391</td><td>R$ 216.769.580</td><td>R$ 211.984.533</td><td>R$ 99.436.588</td></tr><tr><td>6841 - Manutenção e Operação Semafórica</td><td>R$ 33.402.558</td><td>R$ 33.316.571</td><td>R$ 32.670.344</td><td>R$ 35.791.775</td></tr><tr><td>9201 - Intervenções na Área de Mobilidade Urbana</td><td>R$ 184.057.683</td><td>R$ 24.949.317</td><td>R$ 3.000</td><td>R$ 3.000</td></tr></table>
						<figcaption>Tabela 9 - Ações orçamentárias Plano Plurianual 2018-2021</figcaption>
					</figure>
				</template>
			</Cap2CEixoI>
			<Comments :attr="{id:commentId(), context:'Eixo I - Articulação Institucional e Gestão'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo II - Planejamento Urbano, Desenho de Ruas e Engenharia</h4>
			<Cap2CEixoII>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
				<template slot='tabela14'>
					<figure>
						<table class="headed-table"><tr><th>Acidentes na Av. Brigadeiro Luís Antônio</th><th>Antes da remoção (24/02/15 a 31/01/16)</th><th>Após a remoção (24/02/16 a 31/01/17)</th><th>Variação percentual (antes x depois)</th></tr><tr><td>Acidentes com feridos</td><td>12</td><td>4</td><td>-66,6%</td></tr><tr><td>Atropelamentos</td><td>16</td><td>2</td><td>-87,5%</td></tr><tr><td>Feridos</td><td>29</td><td>6</td><td>-79,3%</td></tr><tr><td>Mortos</td><td>2</td><td>0</td><td>-100%</td></tr></table>
						<figcaption>Tabela 14 - número de acidentes, de vítimas e de atropelamentos na Av. Brigadeiro Luís Antônio antes e após remoção do contrafluxo.</figcaption>
					</figure>
				</template>
				<!-- <template v-for="c in commentSlots" :slot='c'>
					<Comments :attr="{id:commentId(), context:c}"></Comments>
				</template> -->
			</Cap2CEixoII>
			<Comments :attr="{id:commentId(), context:'Eixo II - Planejamento Urbano, Desenho de Ruas e Engenharia'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo III - Melhoria das Opções de Mobilidade e Sustentabilidade</h4>
			<Cap2CEixoIII>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
				<template slot='tabela15'>
					<figure>
						<table class="simple-table"><tr><td>Efetuar Transporte em modalidade não autorizada</td><td>127</td><td>23,60%</td></tr><tr><td>Veículo Clandestino / carro frio</td><td>99</td><td>18,40%</td></tr><tr><td>Direção Perigosa</td><td>75</td><td>13,90%</td></tr><tr><td>Superlotação pingentes</td><td>57</td><td>10,60%</td></tr><tr><td>Atitude desrespeitosa</td><td>47</td><td>8,70%</td></tr><tr><td>Rádio alto volume / buzina sonora</td><td>32</td><td>5,90%</td></tr><tr><td>Demais</td><td>101</td><td>18,77%</td></tr><tr><td>TOTAL</td><td>538</td><td> </td></tr></table>
						<figcaption>Tabela 15 - Reclamações recebidas pelo DTP (2017) na modalidade Transporte Escolar</figcaption>
					</figure>
				</template>
				<template slot='tabela16'>
					<figure>
						<table style="border-collapse:collapse;border-spacing:0" class="tg"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#c0c0c0;text-align:center;vertical-align:top">Faixa horária</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#c0c0c0;text-align:center;vertical-align:top">Número de acidentes fatais entre<br>  2015 e 2017</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#c0c0c0;text-align:center;vertical-align:top">Percentual em relação ao total<br>  de acidentes fatais</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">0h-1h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f56b00;text-align:center;vertical-align:top">12</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f56b00;text-align:center;vertical-align:top">5,41%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">1h-2h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffce93;text-align:center;vertical-align:top">5</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffce93;text-align:center;vertical-align:top">2,25%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">2h-3h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffce93;text-align:center;vertical-align:top">5</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffce93;text-align:center;vertical-align:top">2,25%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">3h-4h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffc702;text-align:center;vertical-align:top">7</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffc702;text-align:center;vertical-align:top">3,15%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">4h-5h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#fffc9e;text-align:center;vertical-align:top">4</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#fffc9e;text-align:center;vertical-align:top">1,80%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">5h-6h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#fffc9e;text-align:center;vertical-align:top">4</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#fffc9e;text-align:center;vertical-align:top">1,80%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">6h-7h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffc702;text-align:center;vertical-align:top">8</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffc702;text-align:center;vertical-align:top">3,60%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">7h-8h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffc702;text-align:center;vertical-align:top">8</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffc702;text-align:center;vertical-align:top">3,60%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">8h-9h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f8a102;text-align:center;vertical-align:top">10</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f8a102;text-align:center;vertical-align:top">4,50%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">9h-10h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f56b00;text-align:center;vertical-align:top">12</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f56b00;text-align:center;vertical-align:top">5,41%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">10h-11h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ce6301;text-align:center;vertical-align:top">14</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ce6301;text-align:center;vertical-align:top">6,31%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">11h-12h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffc702;text-align:center;vertical-align:top">8</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffc702;text-align:center;vertical-align:top">3,60%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">12h-13h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f8a102;text-align:center;vertical-align:top">11</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f8a102;text-align:center;vertical-align:top">4,95%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">13h-14h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f8a102;text-align:center;vertical-align:top">10</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f8a102;text-align:center;vertical-align:top">4,50%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">14h-15h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ce6301;text-align:center;vertical-align:top">15</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ce6301;text-align:center;vertical-align:top">6,76%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">15h-16h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ce6301;text-align:center;vertical-align:top">14</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ce6301;text-align:center;vertical-align:top">6,31%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">16h-17h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ce6301;text-align:center;vertical-align:top">15</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ce6301;text-align:center;vertical-align:top">6,76%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">17h-18h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffc702;text-align:center;vertical-align:top">7</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffc702;text-align:center;vertical-align:top">3,15%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">18h-19h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f56b00;text-align:center;vertical-align:top">12</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f56b00;text-align:center;vertical-align:top">5,41%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">19h-20h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f8a102;text-align:center;vertical-align:top">9</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f8a102;text-align:center;vertical-align:top">4,05%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">20h-21h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f8a102;text-align:center;vertical-align:top">9</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f8a102;text-align:center;vertical-align:top">4,05%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">21h-22h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffc702;text-align:center;vertical-align:top">8</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffc702;text-align:center;vertical-align:top">3,60%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">22h-23h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffce93;text-align:center;vertical-align:top">6</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#ffce93;text-align:center;vertical-align:top">2,70%</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;background-color:#ffffff;text-align:center;vertical-align:top">23h-0h</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f8a102;text-align:center;vertical-align:top">9</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;background-color:#f8a102;text-align:center;vertical-align:top">4,05%</td></tr></table>
						<figcaption>Tabela 16: ocorrências fatais com envolvimento de caminhões por faixa horária (2015-2017). Fonte: CET</figcaption>
					</figure>
				</template>
				<template slot='tabela17'>
					<figure>
						<table class="simple-table"><tr><th>Atitude desrespeitosa</th><th>434</th><th>19,7%</th></tr><tr><td>Desrespeitar regulamento do ponto</td><td>316</td><td>14,4%</td></tr><tr><td>Não disponibilizar meio de pagamento eletrônico</td><td>242</td><td>11%</td></tr><tr><td>Angariar usuários a menos de 100 metros do ponto</td><td>203</td><td>9,2%</td></tr><tr><td>Direção Perigosa</td><td>184</td><td>8,4%</td></tr><tr><td>Recusa de passageiro</td><td>154</td><td>7%</td></tr><tr><td>Cobrança indevida</td><td>153</td><td>7%</td></tr><tr><td>Desrespeito ao público (agressão verbal)</td><td>85</td><td>3,9%</td></tr><tr><td>Demais</td><td>101</td><td>18,77%</td></tr><tr><td>TOTAL</td><td>2.198</td><td> </td></tr></table>
						<figcaption>Tabela 17 - Reclamações recebidas pelo DTP (2017) na modalidade Taxi</figcaption>
					</figure>
				</template>
			</Cap2CEixoIII>
			<Comments :attr="{id:commentId(), context:'Eixo III - Melhoria das Opções de Mobilidade e Sustentabilidade'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo IV – Legislação, Fiscalização e Velocidades</h4>
			<Cap2CEixoIV>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
				<template slot='tabela20'>
					<figure>
						<table class="headed-table"><tr><th>Classe das Vias</th><th>Característica Funcional</th><th>Característica Operacional</th><th>Característica Física</th></tr><tr><td>VTR – Via de Trânsito Rápido (Aprox. 58 km no total)</td><td>Vias ou trecho de vias sem cruzamento em nível.</td><td>Estruturar o viário principal servindo de conexão entre Rodovias, e as Regiões Norte e Sul e Leste e Oeste.</td><td>Vias com pelo menos uma pista por sentido.</td></tr><tr><td>Via Arterial (Aprox. 1350 km no total)</td><td>Caracterizada por interseções em nível.</td><td>Estrutura o viário principal servindo de conexão entre Rodovias e as Regiões Norte, Sul, Leste e Oeste, e geralmente controlada por semáforo.</td><td>Com acessibilidade aos lotes lindeiros e às vias secundárias e locais, possibilitando o trânsito entre as regiões da cidade.</td></tr><tr><td>Via Coletora (Aprox. 5200 km no total)</td><td>Coletar e distribuir o trânsito.</td><td>Necessidade de entrar ou sair das vias de trânsito rápido ou arteriais, possibilitando o trânsito dentro das regiões da cidade.</td><td>Pista simples.</td></tr><tr><td>Via Local (Aprox. 10.400 km no total)</td><td>Função predominante de proporcionar o acesso aos imóveis lindeiros.</td><td>Destinada apenas ao acesso local ou a áreas restritas.</td><td>Pista simples.</td></tr></table>
						<figcaption>Tabela 20: Classificação de vias, conforme as características urbanas.</figcaption>
					</figure>
				</template>
			</Cap2CEixoIV>
			<Comments :attr="{id:commentId(), context:'Eixo IV – Legislação, Fiscalização e Velocidades'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo V - Normas e Tecnologias de Veículos</h4>
			<Cap2CEixoV>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap2CEixoV>
			<Comments :attr="{id:commentId(), context:'Eixo V - Normas e Tecnologias de Veículos'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo VI – Atendimento e Cuidado Pós Acidente</h4>
			<Cap2CEixoVI></Cap2CEixoVI>
			<Comments :attr="{id:commentId(), context:'Eixo VI – Atendimento e Cuidado Pós Acidente'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo VII - Comunicação, educação e capacitação</h4>
			<Cap2CEixoVII>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
				<template slot='tabela23'>
					<figure>
						<table class="headed-table"><tr><th>ATIVIDADES</th><th>MÓDULOS</th><th>CARGA HORÁRIA</th></tr><tr><td rowspan="16">INTEGRAÇÃO</td><td>CONHECENDO A CET</td><td>08H00</td></tr><tr><td>O FATOR HUMANO NAS ORGANIZAÇÕES</td><td>08H00</td></tr><tr><td>VISITA TÉCNICA</td><td>08H00</td></tr><tr><td>POSTURA E CONDUTA PROFISSIONAL</td><td>08H00</td></tr><tr><td>CONHECENDO A ATIVIDADE</td><td>08H00</td></tr><tr><td>CONHECIMENTOS OPERACIONAIS</td><td>16H00</td></tr><tr><td>VISTORIA DE VIATURA</td><td>08H00</td></tr><tr><td>GESTOS E APITOS</td><td>08H00</td></tr><tr><td>FISCALIZAÇÃO DE OBRAS</td><td>08H00</td></tr><tr><td>BOLETIM DE ATIVIDADE DE CAMPO</td><td>12H00</td></tr><tr><td>SISTEMA DE COMUNICAÇÃO</td><td>04H00</td></tr><tr><td>SAÚDE E SEGURANÇA NO TRABALHO</td><td>08H00</td></tr><tr><td>ATENDIMENTO À OCORRÊNCIA COM VÍTIMA</td><td>16H00</td></tr><tr><td>NOÇÕES DE SINALIZAÇÃO VIÁRIA</td><td>06h00</td></tr><tr><td>DIREÇÃO DEFENSIVA</td><td>18H00</td></tr><tr><td>FORMAÇÃO DE AGENTE DE FISCALIZAÇÃO (CLASSE A)</td><td>36h00</td></tr><tr><td rowspan="2">QUALIFICAÇÃO grupo específico</td><td>TÉCNICAS DE PILOTAGEM COM SEGURANÇA</td><td>24H00</td></tr><tr><td>PEDALAR COM SEGURANÇA</td><td>06H00</td></tr><tr><td colspan="2">CARGA HORÁRIA TOTAL</td><td>210h00</td></tr></table>
						<figcaption>Tabela 23 - Grade de disciplinas do curso de formação do Agente de Trânsito I</figcaption>
					</figure>
				</template>
				<template slot='tabela24'>
					<figure>
						<table class="headed-table"><tr><th>ATIVIDADES</th><th>MÓDULOS</th><th>CARGA HORÁRIA</th></tr><tr><td rowspan="6">CAPACITAÇÃO</td><td>CONHECIMENTOS OPERACIONAIS/REMOÇÃO</td><td>18H00</td></tr><tr><td>CONCEITOS DE SINALIZAÇÃO H/V E PM</td><td>12H00</td></tr><tr><td>NOÇÕES DE SINALIZAÇÃO SEMAFÓRICA</td><td>12H00</td></tr><tr><td>FISCALIZAÇÃO (CLASSE B)</td><td>24H00</td></tr><tr><td>REMOÇÃO VISTORIA E CUSTÓDIA - RVC</td><td>06H00</td></tr><tr><td>ATENDIMENTO À OCORRÊNCIAS COM PRODUTOS PERIGOSOS E SUPERDIMENSIONADA</td><td>24H00</td></tr><tr><td>QUALIFICAÇÃO grupo específico</td><td>OPERAÇÃO DE EQUIPAMENTO GUINCHO LEVE</td><td>12H00</td></tr><tr><td colspan="2">TOTAL CARGA HORÁRIA</td><td>108h00</td></tr></table>
						<figcaption>Tabela 24 - Grade de disciplinas do curso realizado para promoção de Agente de Trânsito I para Agente de Trânsito II</figcaption>
					</figure>
				</template>
			</Cap2CEixoVII>
			<Comments :attr="{id:commentId(), context:'Eixo VII - Comunicação, educação e capacitação'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo XI - Dados</h4>
			<Cap2CEixoXI>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap2CEixoXI>
			<Comments :attr="{id:commentId(), context:'Eixo XI - Dados'}"></Comments>
		</section>
		<section>
			<h2 indent="1" class="titulo">Capítulo 3 - Plano de Ação</h2>
		</section>
		<section>
			<h3 indent="2" class="titulo">1. Introdução</h3>
			<Cap31></Cap31>
			<Comments :attr="{id:commentId(), context:'1. Introdução'}"></Comments>
		</section>
		<section>
			<h3 indent="2" class="titulo">2. Visão</h3>
			<div><p>Transformar São Paulo em referência mundial em segurança viária.</p></div>
			<Comments :attr="{id:commentId(), context:'2. Visão'}"></Comments>
		</section>
		<section>
			<h3 indent="2" class="titulo">3. Objetivos</h3>
			<Cap33>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap33>
			<Comments :attr="{id:commentId(), context:'3. Objetivos'}"></Comments>
		</section>
		<section>
			<h3 indent="2" class="titulo">4. Metas Globais</h3>
			<Cap34></Cap34>
			<Comments :attr="{id:commentId(), context:'4. Metas Globais'}"></Comments>
		</section>
		<section>
			<h3 indent="2" class="titulo">5. Plano de Ação por eixo de atuação</h3>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo I - Articulação institucional e Gestão</h4>
			<Cap3EixoI>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap3EixoI>
			<Comments :attr="{id:commentId(), context:'Eixo I - Articulação institucional e Gestão'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo II - Planejamento urbano, desenho das ruas e engenharia</h4>
			<Cap3EixoII>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
				<template slot='tabela25'>
					<figure>
						<table class="simple-table"><tr><th></th><th>Tempo extra verde para pedestre (s)</th><th>Verde (s)</th><th>Vermelho piscante (s)</th></tr><tr><td>Critérios antigos</td><td>0</td><td>De acordo com a largura da via</td><td>5 (média)</td></tr><tr><td>Critérios padrão</td><td>0</td><td>5</td><td>Garantia de 1,2 metros por segundo (máximo)</td></tr><tr><td>Critérios que estão sendo utilizados para os corredores</td><td>2</td><td>8</td><td>Garantia de 1,2 metros por segundo (máximo)</td></tr></table>
						<figcaption>Tabela 25 – critérios de definição de tempos semafóricos aos pedestres.</figcaption>
					</figure>
				</template>
			</Cap3EixoII>
			<Comments :attr="{id:commentId(), context:'Eixo II - Planejamento urbano, desenho das ruas e engenharia'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo III - Melhoria das opções de mobilidade e sustentabilidade</h4>
			<Cap3EixoIII>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap3EixoIII>
			<Comments :attr="{id:commentId(), context:'Eixo III - Melhoria das opções de mobilidade e sustentabilidade'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo IV - Legislação, Fiscalização e Velocidades</h4>
			<Cap3EixoIV>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap3EixoIV>
			<Comments :attr="{id:commentId(), context:'Eixo IV - Legislação, Fiscalização e Velocidades'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo V - Normas e tecnologia de veículos</h4>
			<Cap3EixoV>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap3EixoV>
			<Comments :attr="{id:commentId(), context:'Eixo V - Normas e tecnologia de veículos'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo VI - Atendimento e cuidado pós acidente</h4>
			<Cap3EixoVI>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap3EixoVI>
			<Comments :attr="{id:commentId(), context:'Eixo VI - Atendimento e cuidado pós acidente'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo VII- Comunicação, educação e capacitação</h4>
			<Cap3EixoVII>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap3EixoVII>
			<Comments :attr="{id:commentId(), context:'Eixo VII- Comunicação, educação e capacitação'}"></Comments>
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo VIII - Dados</h4>
			<Cap3EixoVIII>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap3EixoVIII>
			<Comments :attr="{id:commentId(), context:'Eixo VIII - Dados'}"></Comments>
		</section>
		<section>
			<h3 indent="2" class="titulo">Bibliografia</h3>
			<Bibliografia></Bibliografia>
			<Comments :attr="{id:commentId(), context:'Bibliografia'}"></Comments>
		</section>

		<hr />
		<section ref="allComments">
			<h2 indent="1" v-show="commentsLoaded" class="titulo">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:23, context:'Comentarios'}"></Comments>
		</section>
	</div>
</template>

<script>
import Cap1 from '@/views/vida-segura/Cap1'
import Cap2A from '@/views/vida-segura/Cap2A'
import Cap2B from '@/views/vida-segura/Cap2B'
import Cap2CEixoI from '@/views/vida-segura/Cap2CEixoI'
import Cap2CEixoII from '@/views/vida-segura/Cap2CEixoII'
import Cap2CEixoIII from '@/views/vida-segura/Cap2CEixoIII'
import Cap2CEixoIV from '@/views/vida-segura/Cap2CEixoIV'
import Cap2CEixoV from '@/views/vida-segura/Cap2CEixoV'
import Cap2CEixoVI from '@/views/vida-segura/Cap2CEixoVI'
import Cap2CEixoVII from '@/views/vida-segura/Cap2CEixoVII'
import Cap2CEixoXI from '@/views/vida-segura/Cap2CEixoXI'
import Cap31 from '@/views/vida-segura/Cap31'
import Cap33 from '@/views/vida-segura/Cap33'
import Cap34 from '@/views/vida-segura/Cap34'
import Cap3EixoI from '@/views/vida-segura/Cap3EixoI'
import Cap3EixoII from '@/views/vida-segura/Cap3EixoII'
import Cap3EixoIII from '@/views/vida-segura/Cap3EixoIII'
import Cap3EixoIV from '@/views/vida-segura/Cap3EixoIV'
import Cap3EixoV from '@/views/vida-segura/Cap3EixoV'
import Cap3EixoVI from '@/views/vida-segura/Cap3EixoVI'
import Cap3EixoVII from '@/views/vida-segura/Cap3EixoVII'
import Cap3EixoVIII from '@/views/vida-segura/Cap3EixoVIII'
import Bibliografia from '@/views/vida-segura/Bibliografia'

// Gerais
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'VidaSegura',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			anexos: ['Vida_Segura_29-10-2018_PDF.pdf'],
			// commentSlots: ['7.	Dispositivos de Segurança','8.	Ações de Segurança'],
			imagens: [
				{
					slotName: 'g1',
					figureTitle: 'Gráfico 1 - Evolução da frota veicular (2008 - 2017). Fonte: DETRAN/SP'
				},
				{
					slotName: 'g2',
					figureTitle: 'Gráfico 2 - Óbitos por causas externas (2016). Fonte: SIM/PRO-AIM - CEINFO - SMS - SP'
				},
				{
					slotName: 'g3',
					figureTitle: 'Gráfico 3 - Anos Potenciais de Vida Perdidos (APVP)  (2016). Fonte: SIM/PRO-AIM - CEINFO - SMS - SP'
				},
				{
					slotName: 'g4',
					figureTitle: 'Gráfico 4 - Evolução anual dos acidentes fatais por tipo. Fonte: CET.'
				},
				{
					slotName: 'g5',
					figureTitle: 'Gráfico 5 - Evolução Anual dos óbitos por tipo de usuário. Fonte: CET'
				},
				{
					slotName: 'g6',
					figureTitle: 'Gráfico 6 - Evolução do índice “óbitos/100 mil habitantes. Fonte: CET'
				},
				{
					slotName: 'g7',
					figureTitle: 'Gráfico 7 - Óbitos por tipo de usuário (2017). Fonte: CET'
				},
				{
					slotName: 'g8',
					figureTitle: 'Gráfico 8 - Total de vítimas por tipo de usuário (2017). Fonte: CET'
				},
				{
					slotName: 'g9',
					figureTitle: 'Gráfico 9 - Número anual de acidentes fatais por dia da semana (2017). Fonte: CET'
				},
				{
					slotName: 't1',
					figureTitle: 'Tabela 1 - Total de acidentes de trânsito fatais por dia da semana e período do dia. Fonte: CET'
				},
				{
					slotName: 'g10',
					figureTitle: 'Gráfico 10 - Relação entre número de viagens realizadas em um dia típico com destino sendo São Paulo e número de vítimas fatais por faixa horária. Fonte: CET-SP e Pesquisa de mobilidade (2012). Elaboração: WRI Brasil'
				},
				{
					slotName: 'g11',
					figureTitle: 'Gráfico 11 - índice de vítimas fatais por 10.000 viagens realizadas por hora do dia. Fonte: CET-SP e Pesquisa de mobilidade (2012). Elaboração: WRI Brasil'
				},
				{
					slotName: 'g12',
					figureTitle: 'Gráfico 12 - Relação entre o acidente por faixa horária do total de vítimas (feridas e fatais) e de vítimas fatais entre os anos de 2013 e 2017. Fonte: CET-SP. Elaboração: WRI Brasil'
				},
				{
					slotName: 'g13',
					figureTitle: 'Gráfico 13 - Variação no número de vítimas fatais por modal de transporte em São Paulo entre os anos de 2013 e 2017.  Fonte: CET-SP.'
				},
				{
					slotName: 'g14',
					figureTitle: 'Gráfico 14 - Risco relativo de se tornar uma vítima usando diferentes modos de transporte, sendo 1 o modal mais seguro. Fonte: CET-SP/Pesquisa de mobilidade (2012). Elaboração: WRI Brasil'
				},
				{
					slotName: 'g15',
					figureTitle: 'Gráfico 15: participação dos veículos no trânsito (2013-2017) nos horários de pico manhã/tarde dos dias úteis. Fonte: DSVP-CET-SP.'
				},
				{
					slotName: 'g16',
					figureTitle: 'Gráfico 16 - Distribuição de veículos envolvidos em acidentes fatais (2017). Fonte: CET'
				},
				{
					slotName: 'g17',
					figureTitle: 'Gráfico 17 - distribuição dos veículos envolvidos em atropelamentos fatais (2013-2017). Fonte: CET.'
				},
				{
					slotName: 'g18',
					figureTitle: 'Gráfico 18 - Óbitos por faixa etária (2017). Fonte: CET'
				},
				{
					slotName: 'g19',
					figureTitle: 'Gráfico 19 - Vítimas fatais e feridas por faixa etária para o ano de 2017. Fonte: CET-SP. Elaboração: WRI Brasil'
				},
				{
					slotName: 't2',
					figureTitle: 'Tabela 2 - Variação percentual das vítimas fatais por faixa etária (2013 - 2017). Fonte: CET. Elaboração: WRI Brasil'
				},
				{
					slotName: 't3',
					figureTitle: 'Tabela 3 - Variação percentual das vítimas feridas por faixa etária (2013 - 2017). Fonte: CET. Elaboração: WRI Brasil'
				},
				{
					slotName: 'g20',
					figureTitle: 'Gráfico 20  - Variação do número de vítimas fatais e da população por grupo de idade entre os anos de 2013 e 2017. Fonte: CET-SP e SEADE-SP. Elaboração: WRI Brasil'
				},
				{
					slotName: 't4',
					figureTitle: 'Tabela 4 - Relação entre o índice de fatalidade (mortos em acidentes de trânsito/100.000 habitantes) entre os anos de 2013 e 2017. Fonte: CET-SP e SEADE-SP. Elaboração: WRI Brasil'
				},
				{
					slotName: 'g21',
					figureTitle: 'Gráfico 21 - Vítimas fatais e feridas por faixa etárias e por modal de transporte para o ano de 2017. Fonte: CET-SP. Elaboração: WRI Brasil'
				},
				{
					slotName: 'g22',
					figureTitle: 'Gráfico 22: proporção de viagens (2012 e vítimas fatais (2017) por idade para o modo à pé. Fonte: CET. Elaboração: WRI Brasil'
				},
				{
					slotName: 'g23',
					figureTitle: 'Gráfico 23: proporção de viagens (2012 e vítimas fatais (2017) por idade para o modo automóvel. Fonte: CET. Elaboração: WRI Brasil'
				},
				{
					slotName: 'g24',
					figureTitle: 'Gráfico 24: proporção de viagens (2012 e vítimas fatais (2017) por idade para o modo bicicleta. Fonte: CET. Elaboração: WRI Brasil '
				},
				{
					slotName: 'g25',
					figureTitle: 'Gráfico 25: proporção de viagens (2012 e vítimas fatais (2017) por idade para o modo motocicleta. Fonte: CET. Elaboração: WRI Brasil'
				},
				{
					slotName: 'm1',
					figureTitle: 'Mapa 1 - Distribuição espacial com pontos críticos de acidentes com jovens vítimas fatais e menores de idade (2013-2017) e densidade de escolas para o município de São Paulo. Fonte: CET-SP/GEOSAMPA. Elaboração: WRI Brasil'
				},
				{
					slotName: 'g26',
					figureTitle: 'Gráfico 26 - Proporção de viagens e vítimas fatais por meio de transporte de acordo com o gênero para o ano de 2017. Fonte: CET-SP e Pesquisa de mobilidade (2012). Elaboração: WRI Brasil'
				},
				{
					slotName: 't5',
					figureTitle: 'Tabela 5 - Acidentes em cruzamentos e meio de quadra. Fonte: CET'
				},
				{
					slotName: 't7',
					figureTitle: 'Tabela 7 - Vias com maior valor de Unidade Padrão de Severidade por Km (2017). Fonte: CET'
				},
				{
					slotName: 'm2',
					figureTitle: 'Mapa 2 - Distribuição espacial de acidentes fatais envolvendo pedestres (2013-2017). Fonte: CET-SP. Elaboração: WRI Brasil'
				},
				{
					slotName: 'm3',
					figureTitle: 'Mapa 3 - Distribuição espacial de acidentes com vítimas feridas e fatais envolvendo pedestres e ônibus (2013-2017). Fonte: CET-SP. Elaboração: WRI Brasil'
				},
				{
					slotName: 'm4',
					figureTitle: 'Mapa 4 – Distribuição espacial de acidentes com vítimas feridas e fatais envolvendo ciclistas (2013-2017). Fonte: CET-SP. Elaboração: WRI Brasil'
				},
				{
					slotName: 'm5',
					figureTitle: 'Mapa 5 - Distribuição espacial de vítimas usuárias de bicicleta no ano de 2017 e mapa da rede cicloviária. Fonte: CET-SP. Elaboração: WRI Brasil'
				},
				{
					slotName: 'm6',
					figureTitle: 'Mapa 6 - Distribuição espacial de acidentes com vítimas feridas e fatais envolvendo motociclistas (2013-2017). Fonte: CET-SP. Elaboração: WRI Brasil'
				},
				{
					slotName: 'm7',
					figureTitle: 'Mapa 7 - Distribuição espacial de acidentes com vítimas fatais envolvendo motociclistas (2013-2017). Fonte: CET-SP. Elaboração: WRI Brasil'
				},
				{
					slotName: 't8',
					figureTitle: 'Tabela 8 - Prevalência de veículos trafegando acima da velocidade. Fonte: JH-IIRU e USP (2018).'
				},
				{
					slotName: 'm8',
					figureTitle: 'Mapa 8 - distribuição de responsabilidade pelas calçadas no município de São Paulo (proprietários x Prefeitura). Fonte: SPUrbanismo (2018).'
				},
				{
					slotName: 'm9',
					figureTitle: 'Mapa 9 - Plano Emergencial de Calçadas Ilustrado. Fonte: SP Urbanismo'
				},
				{
					slotName: 'f1',
					figureTitle: 'Figura 1 - Áreas de Influência - Eixos de Estruturação da Transformação Urbana'
				},
				{
					slotName: 'f2',
					figureTitle: 'Figura 2 - Instrumentos urbanísticos do PDE . Fonte: PMSP, 2014.'
				},
				{
					slotName: 'f3',
					figureTitle: 'Figura 3: Fachada Ativa Fonte: PMSP, 2016'
				},
				{
					slotName: 'f4',
					figureTitle: 'Figura 4: Fruição Pública Fonte: PMSP, 2016.'
				},
				{
					slotName: 'f5',
					figureTitle: 'Figura 5 - Av. Mal. Tito, trecho em São Miguel Paulista (Crédito: SPUrbanismo)'
				},
				{
					slotName: 'f6',
					figureTitle: 'Figura 6 - Corte esquemático da Av. Mal. Tito (Elaboração: BIGRS)'
				},
				{
					slotName: 't10',
					figureTitle: 'Tabela 10 - Quadro 2B da LPUOS/2016 - parâmetros de parcelamento do solo (sistema viário).'
				},
				{
					slotName: 't11',
					figureTitle: 'Tabela 11 - características geométricas das vias pelos critérios técnicos da SIURB - Instrução de Projeto 003/2004 - Quadro 3.1'
				},
				{
					slotName: 'f7',
					figureTitle: 'Figura 7 - exemplos de calçadas na cidade de São Paulo. Rua Ministro Gastão Mesquita, em Perdizes, e Rua Acutiranha, no Morumbi. Calçada construída pelo proprietário apresenta obstáculo de diferentes escalas para a acessibilidade. Fonte: Google Street View'
				},
				{
					slotName: 'f8',
					figureTitle: 'Figura 8 - Exemplos de calçadas na cidade de São Paulo. Crédito: BIGRS'
				},
				{
					slotName: 't12',
					figureTitle: 'Tabela 12 - Quadro 2B da LPUOS. Parâmetros de parcelamento do solo (sistema viário)'
				},
				{
					slotName: 't13',
					figureTitle: 'Tabela 13: Quadro 3.2 da IP-003/2004 SIURB - curvas de concordância das ruas - padronização dos raios'
				},
				{
					slotName: 't14',
					figureTitle: 'Tabela 14 - Código de Obras e Edificações Ilustrado (Lei nº 16.642, de 9 de maio de 2017. Decreto nº 57.776, de 7 de julho de 2017)'
				},
				{
					slotName: 'f9',
					figureTitle: 'Figura 9 - Calçada recém-construída (2016) na Av. Sumaré, em Perdizes, inclinada em toda a sua largura para acesso de veículos às vagas de estacionamento, prejudicando a circulação de pedestres'
				},
				{
					slotName: 'f10',
					figureTitle: 'Figura 10 - Calçada com diferentes declividades transversais e degraus conformados por rampas de acesso a garagens na Rua Caetés, em Perdizes.'
				},
				{
					slotName: 'f11',
					figureTitle: 'Figura 11 - Travessia em calçada (Av. Bgd. Faria Lima X R. Cláudio Soares). Obstáculos sobre a área de espera e passagem da travessia; rampa de acessibilidade na mesma área de poste.'
				},
				{
					slotName: 'f12a',
					figureTitle: 'Figura 12a - Placas de sinalização obstruindo passagem de pedestres em esquinas de calçadas estreitas nos cruzamentos (i) da Av. Francisco Morato com R. Min Heitor Bastos Tigre'
				},
				{
					slotName: 'f12b',
					figureTitle: 'Figura 12b - Placas de sinalização obstruindo passagem de pedestres em esquinas de calçadas estreitas nos cruzamentos (ii) Estr. do Campo Limpo com R. Campina Grande'
				},
				{
					slotName: 'f13a',
					figureTitle: 'Figura 13a - Mobiliário urbano no Largo da Batata (créditos: Diogo Lemos/WRI Brasil)'
				},
				{
					slotName: 'f13b',
					figureTitle: 'Figura 13b - Mobiliário urbano no Largo da Batata (créditos: Diogo Lemos/WRI Brasil)'
				},
				{
					slotName: 'f14a',
					figureTitle: 'Figura 14 - Comparação entre iluminação pública padrão e iluminação pública voltada para pedestres. Fonte: New York City Department of Transportation, 2013).'
				},
				{
					slotName: 'f14b',
					figureTitle: 'Luminária pública acoplada a poste de luz da Eletropaulo e voltada para o leito carroçável, na Rua Oscar Freire.'
				},
				{
					slotName: 'f14c',
					figureTitle: 'Luminária pública voltada para a calçada, em trecho reformado da Rua Oscar Freire, cuja fiação foi enterrada no projeto de transformação urbana.'
				},
				{
					slotName: 'f15',
					figureTitle: 'Figura 15 -  exemplo de ciclovia'
				},
				{
					slotName: 'f16',
					figureTitle: 'Figura 16 -  exemplo de ciclofaixa'
				},
				{
					slotName: 'f17',
					figureTitle: 'Figura 17: exemplo de ciclorrota'
				},
				{
					slotName: 'g27',
					figureTitle: 'Gráfico 27 - Avaliação das ciclovias. Fonte: Torres Freire et. al, 2018.'
				},
				{
					slotName: 'f17b',
					figureTitle: 'Figura 17b – Distância recomendada entre a travessia de pedestres e o estacionamento. FONTE: DNIT -Publicação IPR - 740 MANUAL DE PROJETO GEOMÉTRICO DE TRAVESSIAS URBANAS'
				},
				{
					slotName: 'f18',
					figureTitle: 'Figura 18 - Rua Oscar Freire. Diversas extensões de calçada foram implementadas (créditos: Foto: Google Street View - Esquema: WRI Brasil)'
				},
				{
					slotName: 'f19',
					figureTitle: 'Figura 19 - exemplo de travessia elevada.'
				},
				{
					slotName: 'f20',
					figureTitle: 'Figura 20 - esquema da Av. Brigadeiro Luís Antônio antes (à esquerda) e após (à direita) a remoção do contrafluxo.'
				},
				{
					slotName: 'f21',
					figureTitle: 'Figura 21: Situação atual da Praça Getúlio Vargas em São Miguel Paulista, acima (crédito: Google Street View). Abaixo, fotomontagem do projeto (crédito: 23 Sul Arquitetura / BIGRS).'
				},
				{
					slotName: 'g28',
					figureTitle: 'Gráfico 28 - Potencial Pedalável. Fonte:  Impacto Social do Uso da Bicicleta em São Paulo - CEBRAP 2018'
				},
				{
					slotName: 'g29',
					figureTitle: 'Gráfico 29: tipologia das ocorrências fatais envolvendo caminhões (2017). Fonte: CET'
				},
				{
					slotName: 't18',
					figureTitle: 'Tabela 18  - Dez países mais populosos e melhores práticas de legislação. Fonte: OMS, 2015, p. 38.'
				},
				{
					slotName: 't19',
					figureTitle: 'Tabela 19 - Risco de atropelamento a 60, 50 e 30km/h. Fonte: '
				},
				{
					slotName: 'f22',
					figureTitle: 'Figura 22 - Exemplo de autuação efetuada por velocidade média (Sistema Safety Tutor / Autostrade per I’Itália).'
				},
				{
					slotName: 'g30',
					figureTitle: 'Gráfico 30 -: Efeito do Sistema de Controle de Trecho  na velocidade média dos veículos no túnel Kaisermuhlen. (Fonte: Vienna Municipal Department)'
				},
				{
					slotName: 'g31',
					figureTitle: 'Gráfico 31: autuações por sub_unidade autuadora. Fonte: CET.'
				},
				{
					slotName: 'g32',
					figureTitle: 'Gráfico 32 - evolução das autuações realizadas por agentes. Fonte: CET'
				},
				{
					slotName: 'g33',
					figureTitle: 'Gráfico 33 - evolução das autuações realizadas por equipamentos de fiscalização. Fonte: CET'
				},
				{
					slotName: 't21',
					figureTitle: 'Tabela 21 - principais autuações lavradas (2017) no município de São Paulo. Fonte: CET'
				},
				{
					slotName: 't22',
					figureTitle: 'Tabela 22 - principais autuações lavradas por agentes de trânsito da CET (2017). Fonte: CET'
				},
				{
					slotName: 'f23',
					figureTitle: 'Figura 23 - Fluxo de análise e tabulação INFOSIGA. Fonte: INFOSIGA-SP	'
				},
				{
					slotName: 'f24',
					figureTitle: 'Figura 24 - nova calçada implantada na Rua Pedro de Toledo - Vila Mariana'
				}
			],
			commentsCount: 0
		}
	},
	components: {
		PageTop,
		Indice,
		Comments,
		CommentsLoader,
		Apoio,
		Cap1,
		Cap2A,
		Cap2B,
		Cap2CEixoI,
		Cap2CEixoII,
		Cap2CEixoIII,
		Cap2CEixoIV,
		Cap2CEixoV,
		Cap2CEixoVI,
		Cap2CEixoVII,
		Cap2CEixoXI,
		Cap31,
		Cap33,
		Cap34,
		Cap3EixoI,
		Cap3EixoII,
		Cap3EixoIII,
		Cap3EixoIV,
		Cap3EixoV,
		Cap3EixoVI,
		Cap3EixoVII,
		Cap3EixoVIII,
		Bibliografia
	},
	mixins: [ consultasCommons ],
	methods: {
		fileSrc (fileName) {
			let url = this.$store.getters.basePath + 'arquivos/vida-segura/' + fileName
			return url.toString()
		},
		commentId (isFirst) {
			if (isFirst) {
				this.$store.commentsCount = 0
			}
			this.$store.commentsCount++
			return this.$store.commentsCount
		}
	}
}
</script>

<style lang="scss">
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

div.VidaSegura {
	/*figure {
		text-align: center;
	}
	div.PageTop > div:first-child {
		max-width: 700px;
	}
	table {
		margin: auto;
		min-width: 400px;
	}
	table.simple-table {
		border-collapse: collapse;
		table, th, td {
			border: 1px solid black;
			padding: 3px;
		}
	}
	table.headed-table {
		border-collapse: collapse;
		text-align: center;
		table, th, td {
			border: 1px solid black;
			padding: 3px;
		}
		tr:first-child {
			background-color: #CCC;
			font-weight: bold;
		}
	}

	h2.titulo, h3.titulo {
		margin: 2em auto auto;
	}
	h4 {
		margin: 2em auto auto;
	}
	h5 {
		margin: 1em auto 0.2em;
	}
	*::selection, *::-moz-selection {
		background: #EB5757;
		color: #FFF;
	}
	div.VidaSegura section {
		max-width: 700px;
		margin: 0 auto;
		padding: 0 1em;
	}
	hr {
		max-width: 700px;
		margin: 3em auto;
	}
	img {
		max-width: 100%;
	}
	div.VidaSegura p {
		overflow: auto;
		text-align: justify;
	}
	#app div.VidaSegura div.Apoio button::before {
		content: "Ver downloads";
	}
	p.quotation {
		font-size: smaller;
		font-style: italic;
		padding-left: 20%;
	}*/

	figure table { margin: 2rem auto; }
	table * td, table * th { min-width: 120px; }
	section u { margin: 0 auto; }
	@media print { 
		section u {
			margin: 0 20mm 8px 20mm;
			padding: 0;
			max-width: unset;
			display: inline-block;
		} 
	}
}
</style>
