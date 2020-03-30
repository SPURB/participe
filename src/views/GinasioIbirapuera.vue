<template>
	<div class="GinasioIbirapuera" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/ginasio-ibirapuera_122w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Ginásio do Ibirapuera</div></template>
			<template slot="subtitulo"><div>1ª Consulta Pública – Elementos prévios</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<Apoio></Apoio>
		<!-- Decreto Nº 56.901 inclua este componente caso seja um PIU -->

		<section>
			<imagem :dados="{
				caption: 'Mapa 01: Planta da Cidade de São Paulo, 1924',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/image2.jpg'),
				fonte: 'SMDU/ SEMPLA. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Imagem 01: Primeiro projeto para o Parque do Ibirapuera de 1950',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/image3.jpg'),
				fonte: 'Divisão do Arquivo Histórico Municipal.'
			}" />

			<imagem :dados="{
				caption: 'Imagem 02: Vista aérea do Ibirapuera – Autor: Edilson Pacheco Aquino',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/imagem1.jpg'),
				fonte: 'http://www.acervosdacidade.prefeitura.sp.gov.br/-acessado-em-13/09/2019'
			}" />
			<imagem :dados="{
				caption: 'Imagem 03: Término da construção da piscina – Autor: José Moscardi',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/imagem2.jpg'),
				fonte: 'https://www.arquivo.arq.br/ginsio-do-ibirapuera-acessado-em-13/09/2019'
			}" />
			<imagem :dados="{
				caption: 'Imagem 04: Construção do Ginásio do Ibirapuera – Autor: Hans Gunter Flieg ',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/imagem3.jpg'),
				fonte: 'https://www.arquivo.arq.br/ginsio-do-ibirapuera-acessado-em-13/09/2019'
			}" />
			<imagem :dados="{
				caption: 'Imagem 05: Estudo sobre o desmembramento territorial da antiga invernada para os animais do corpo dos bombeiros',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/imagem6.jpg'),
				fonte: 'Relatório desenvolvido pela Procuradoria Geral do Estado, Procuradoria do Patrimônio, Volume II da Pasta Especial “PE 998”'
			}" />
			<imagem :dados="{
				caption: 'Mapa 02: Complexo Desportivo Constâncio Vaz Guimarães',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa7.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 03: Perímetro de Intervenção e entorno para fins de avaliação',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa1.jpg'),
				fonte: 'Ortofoto 2017 – PMSP – Geosampa. Elaboração: LEVISKY, 2020.'
			}" />
			<imagem :dados="{
				caption: 'Mapa 04: Inserção Metropolitana',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa2.jpg'),
				fonte: 'Google Earth. Elaboração: LEVISKY, 2020'
			}" />
			<imagem :dados="{
				caption: 'Mapa 05: Município de São Paulo – Subprefeituras / Inserção Urbana – Distritos',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa3.jpg'),
				fonte: 'Fonte: Geosampa – MDC, 2004. Elaboração: LEVISKY, 2020'
			}" />
			<imagem :dados="{
				caption: 'Mapa 06: Macroáreas',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa4.jpg'),
				fonte: 'Google Earth. Elaboração: LEVISKY, 2020'
			}" />
			<imagem :dados="{
				caption: 'Mapa 07: Zoneamento',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa5.jpg'),
				fonte: 'Mapa 01, da Lei nº 16.402/16 (LPUOS)'
			}" />
			<imagem :dados="{
				caption: 'Imagem 06: Bairro Universitário Cultural (ID 279)',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/imagem4.jpg'),
				fonte: 'Plano Regional – Subprefeitura Vila Mariana'
			}" />
			<imagem :dados="{
				caption: 'Mapa 08: Marcos Urbanos do entorno do Complexo Constâncio Vaz Guimarães',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa6-1.jpg'),
				fonte: 'Fonte: Geosampa, Google. Elaboração: LEVISKY, 2020'
			}" />
			<imagem :dados="{
				caption: 'Mapa 06: Equipamentos esportivos',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa6-2.jpg'),
				fonte: 'Fonte: Estudo de oportunidade e vocações – Natureza Urbana. Elaboração: LEVISKY, 2020'
			}" />
			<imagem :dados="{
				caption: 'Imagem 07: Diagrama - Espaços de eventos, São Paulo',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/imagem5.jpg'),
				fonte: 'Fonte: Estudo de oportunidade e vocações – Natureza Urbana. Elaboração: LEVISKY, 2020'
			}"
			maxWidth="900px" />

			<div class="grafico">
				<h3 class="grafico__titulo">Gráfico 01: População</h3>
				<h4 class="grafico__subtitulo">Distritos Vila Mariana</h4>
				<ve-pie :data="{
						columns: ['distrito', 'porcentagem' ],
						rows: [
							{ 'distrito': 'Moema - 25%', 'porcentagem': 25 },
							{ 'distrito': 'Saúde - 38%', 'porcentagem': 38 },
							{ 'distrito': 'Vila Mariana - 37%', 'porcentagem': 37 },
						]
					}"
					:colors="[ '#9a9a9a', '#ee947c','#d4d2d3' ]"
				/>
				<p class="grafico__fonte">Fonte: SEADE / Observa Sampa. Elaboração: LEVISKY, 2020</p>
			</div>

			<div class="grafico wider">
				<h3 class="grafico__titulo">Gráfico 02: População Censitária e Projeções Populacionais</h3>
				<h4 class="grafico__subtitulo">2010 – 2040</h4>
				<ve-line :data="{
						columns: ['date', 'Alto de Pinheiros', 'Itaim Bibi', 'Jardim Paulista', 'Pinheiros', 'Moema', 'Saúde', 'Vila Mariana' ],
						rows: [
							{ 'date': '2010', 'Alto de Pinheiros': 41655,	'Itaim Bibi': 92570, 	'Jardim Paulista': 88692, 'Pinheiros': 65364, 'Moema': 83368, 	'Saúde': 130780, 'Vila Mariana': 130484 },
							{ 'date': '2015', 'Alto de Pinheiros': 41654, 	'Itaim Bibi': 96803, 	'Jardim Paulista': 89576, 'Pinheiros': 65312, 'Moema': 88445, 	'Saúde': 135013, 'Vila Mariana': 131470 },
							{ 'date': '2020', 'Alto de Pinheiros': 40117, 	'Itaim Bibi': 100916, 	'Jardim Paulista': 90189, 'Pinheiros': 65058, 'Moema': 93540, 	'Saúde': 138950, 'Vila Mariana': 132052 },
							{ 'date': '2025', 'Alto de Pinheiros': 38505, 	'Itaim Bibi': 104848, 	'Jardim Paulista': 90500, 'Pinheiros': 64585, 'Moema': 98594, 	'Saúde': 142519, 'Vila Mariana': 132189 },
							{ 'date': '2030', 'Alto de Pinheiros': 36821, 	'Itaim Bibi': 108528, 	'Jardim Paulista': 90474, 'Pinheiros': 63878, 'Moema': 103536, 	'Saúde': 145637, 'Vila Mariana': 131835 },
							{ 'date': '2040', 'Alto de Pinheiros': 33243, 	'Itaim Bibi': 114804, 	'Jardim Paulista': 89273, 'Pinheiros': 61694, 'Moema': 112723, 	'Saúde': 150147, 'Vila Mariana': 129463 },
						]
					}"
				></ve-line>
				<p class="grafico__fonte">Fonte: Prefeitura de São Paulo. Elaboração: LEVISKY, 2020</p>
			</div>

			<imagem :dados="{
				caption: 'Mapa 08: Densidade Demográfica',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa8.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<tabela :dados="{
				titulo: 'Tabela 01: Domicílios, População e Densidade Domiciliar',
				colunas: [
					{ titulo: 'Unidades Territoriais' },
					{ titulo: 'Domicílios' },
					{ titulo: 'População' },
					{ titulo: 'Pess/Dom.' }
				],
				linhas: [
					[
						[{ data: 'Município de São Paulo' }],
						[{ data: '3 574 286' }],
						[{ data: '11 253 503' }],
						[{ data: 3.15 }]],
					[
						[{ data: 'Alto de Pinheiros (Distrito)' }],
						[{ data: '15 408' }],
						[{ data: '43 117' }],
						[{ data: 2.80 }]],
					[
						[{ data: 'Itaim Bibi (Distrito)' }],
						[{ data: '39 230' }],
						[{ data: '92 570' }],
						[{ data: 2.36 }]
					],
					[
						[{ data: 'Jardim Paulista (Distrito)' }],
						[{ data: '39 701' }],
						[{ data: '88 692' }],
						[{ data: 2.23 }]
					],
					[
						[{ data: 'Pinheiros (Distrito)' }],
						[{ data: '27 083' }],
						[{ data: '65 364' }],
						[{ data: 2.41 }]
					],
					[
						[{ data: 'Moema (Distrito)' }],
						[{ data: '34 821' }],
						[{ data: '83 368' }],
						[{ data: 2.39 }]
					],
					[
						[{ data: 'Saúde (Distrito)' }],
						[{ data: '49 278' }],
						[{ data: '130 780' }],
						[{ data: 2.65 }]
					],
					[
						[{ data: 'Vila Mariana (Distrito)' }],
						[{ data: '51 822' }],
						[{ data: '130 484' }],
						[{ data: 2.52 }]
					]
				],
				tabelaListrada: false,
				fonte: 'Prefeitura de São Paulo. Elaboração: LEVISKY, 2020'
			}"/>

			<imagem :dados="{
				caption: 'Gráfico 03: Domicílios segundo Moradores por Dormitório',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/grafico3.jpg'),
				fonte: 'IBGE. Elaboração: LEVISKY, 2020'
			}" />

			<tabela :dados="{
				titulo: 'Tabela 02: Domicílios ligados ou não à Rede de Esgoto',
				colunas: [
					{ titulo: 'Unidades Territoriais' },
					{ titulo: 'Total de Domicílios' },
					{ titulo: 'Ligado à Rede' },
					{ titulo: 'Não ligado' }
				],
				linhas: [
					[
						[{ data:'Município de São Paulo' }],
						[{ data: '3.570.406' }],
						[{ data: '3.285.168' }],
						[{ data: '285.238' }]
					],
					[
						[{ data:'Moema (Distrito)' }],
						[{ data: '34.810' }],
						[{ data: '34.810' }],
						[{ data: '0' }]
					],
					[
						[{ data:'Saúde (Distrito)' }],
						[{ data: '49.272' }],
						[{ data: '48.956' }],
						[{ data: '317' }]
					],
					[
						[{ data:'Vila Mariana (Distrito)' }],
						[{ data: '51.882' }],
						[{ data: '51.827' }],
						[{ data: '55' }]
					]
				],
				fonte: 'Prefeitura de São Paulo. Elaboração: LEVISKY, 2020'
			}"/>

			<imagem :dados="{
				caption: 'Gráfico 04: Domicílios ligados ou não à Rede de Esgoto, 2010',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/grafico4.jpg'),
				fonte: 'IBGE. Elaboração: LEVISKY, 2020'
			}" />

			<tabela :dados="{
				titulo: 'Tabela 03: Domicílios servidos por rede elétrica',
				colunas: [
					{ titulo: 'Unidades territoriais' },
					{ titulo: 'Total de domicílios (*)' },
					{ titulo: 'Sim, de companhia distribuidora' },
					{ titulo: 'Sim, de outras fontes' },
					{ titulo: 'Não existe energia elétrica' }
				],
				linhas: [
					[
						[{ data:'Município de São Paulo' }],
						[{ data: '3.573.509' }],
						[{ data: '3.529.714' }],
						[{ data: '42.502' }],
						[{ data: '1.293' }]
					],
					[
						[{ data:'Vila Mariana (Subpref.)' }],
						[{ data: '135.984' }],
						[{ data: '135.923' }],
						[{ data: '62' }],
						[{ data: '0' }]
					],
					[
						[{ data: 'Moema (Distrito)' }],
						[{ data: '34.810' }],
						[{ data: '34.810' }],
						[{ data: '0' }],
						[{ data: '0' }]
					],
					[
						[{ data: 'Saúde (Distrito)' }],
						[{ data: '49.272' }],
						[{ data: '49.231' }],
						[{ data: '41' }],
						[{ data: '0' }],
					],
					[
						[{ data: 'Vila Mariana (Distrito)' }],
						[{ data: '51.901' }],
						[{ data: '51.881' }],
						[{ data: '20' }],
						[{ data: '0' }]
					]
				],
				fonte: 'Prefeitura de São Paulo. Elaboração: LEVISKY, 2020'
			}"/>

			<tabela :dados="{
				titulo: 'Tabela 04: Taxa de analfabetismo, 2010',
				colunas: [
					{ titulo: 'Unidades Territoriais' },
					{ titulo: 'Total (2010)' },
					{ titulo: 'Analfabetos (2010)' },
					{ titulo: 'Taxa de analfabetismo (2010)' }
				],
				linhas: [
					[
						[{ data: 'MSP' }],
						[{ data: '8.916.518' }],
						[{ data: '281.847' }],
						[{ data: '3,2' }],
					],
					[
						[{ data: 'Vila Mariana (Subprefeitura)' }],
						[{ data: '302.935' }],
						[{ data: '1.804' }],
						[{ data: '0,6' }]
					],
					[
						[{ data: 'Moema (Distrito)' }],
						[{ data: '73.087' }],
						[{ data: '159' }],
						[{ data: '0,2'}],
					],
					[
						[{ data: 'Saúde (Distrito)' }],
						[{ data: '114.234' }],
						[{ data: '843' }],
						[{ data: '0,7' }],
					],
					[
						[{ data: 'Vila Mariana (Distrito)' }],
						[{ data: '115.614' }],
						[{ data: '802' }],
						[{ data: '0,7' }],
					]
				],
				fonte: 'Prefeitura de São Paulo. Elaboração: LEVISKY, 2020'
			}"/>

			<div class="grafico" style="padding:0 1rem">
				<h3 class="grafico__titulo">Gráfico 05: Domicílios Taxa de analfabetismo </h3>
				<h4 class="grafico__subtitulo">(%) 2010</h4>
				<ve-bar :data="{
						columns: ['distrito', '%' ],
						rows: [
							{ 'distrito': 'Município de São Paulo', '%': 3.2 },
							{ 'distrito': 'Alto de Pinheiros', '%': 0.4 },
							{ 'distrito': 'Itaim Bibi', '%': 0.4 },
							{ 'distrito': 'Jardim Paulista', '%': 0.5 },
							{ 'distrito': 'Pinheiros', '%': 0.5 },
							{ 'distrito': 'Moema', '%': 0.2 },
							{ 'distrito': 'Saúde', '%': 0.7 },
							{ 'distrito': 'Vila Mariana', '%': 0.7 },
						]
					}"
					:colors="[ '#2e75b6', '#000' ]"
				/>
				<p class="grafico__fonte">Fonte: IBGE. Elaboração: LEVISKY, 2020.</p>
			</div>

			<tabela :dados="{
				titulo: 'Tabela 05: Grau de Instrução 2017',
				colunas: [
					{ titulo: 'Unidades Territoriais' },
					{ titulo: 'Total' },
					{ titulo: 'Não Alfabetizado/ Fundamental I Incompleto' },
					{ titulo: 'Fundamental I Completo/ Fundamental II Incompleto' },
					{ titulo: 'Fundamental II Completo/ Médio In-completo' },
					{ titulo: 'Médio Completo/ Superior Incompleto' },
					{ titulo: 'Superior Completo' }
				],
				linhas: [
					[
						[{ data: 'Município de São Paulo' }],
						[{ data: '11.739.241' }],
						[{ data: '2.392.475' }],
						[{ data: '1.673.061' }],
						[{ data: '1.689.828' }],
						[{ data: '3.916.719' }],
						[{ data: '2.067.158' }]
					],
					[
						[{ data: 'Vila Mariana (Subprefeitura)' }],
						[{ data: '354.079' }],
						[{ data: '41.080' }],
						[{ data: '19.151' }],
						[{ data: '21.797' }],
						[{ data: '77.967' }],
						[{ data: '194.085' }]
					],
					[
						[{ data: 'Moema (Distrito)' }],
						[{ data: '88.407' }],
						[{ data: '9.876' }],
						[{ data: '3.319' }],
						[{ data: '3.405' }],
						[{ data: '19.054' }],
						[{ data: '52.752' }]
					],
					[
						[{ data: 'Saúde (Distrito)' }],
						[{ data: '133.683' }],
						[{ data: '18.195' }],
						[{ data: '10.186' }],
						[{ data: '10.751' }],
						[{ data: '29.433' }],
						[{ data: '65.117' }]
					],
					[
						[{ data: 'Vila Mariana (Distrito)' }],
						[{ data: '131.989' }],
						[{ data: '13.008' }],
						[{ data: '5.646' }],
						[{ data: '7.641' }],
						[{ data: '29.479' }],
						[{ data: '76.216' }]
					]
				],
				fonte: 'Fonte: Metrô/SP – Pesquisa Origem e Destino 2017. Elaboração: LEVISKY, 2020'
			}"/>

			<div class="grafico wider">
				<h3 class="grafico__titulo">Gráfico 06: População Total por grau de instrução</h3>
				<div class="grafico__grupos">
					<div class="grafico__grupo grafico__grupo">
						<h4 class="grafico__subtitulo">Município de São Paulo</h4>
						<ve-pie :data="{
								columns: ['Grau de instrução', 'população' ],
								rows: [
									{ 'Grau de instrução': '1. Não alfabetizado', 'população': 2392475 },
									{ 'Grau de instrução': '2. Fund. incompleto', 'população': 1673061 },
									{ 'Grau de instrução': '3. Fund. completo', 'população': 1689828 },
									{ 'Grau de instrução': '4. Sup. Incompleto', 'população': 3916719 },
									{ 'Grau de instrução': '5. Sup. Completo', 'população': 2067158 },
								]
							}"
							:settings="{
								radius: 70,
							}"
							:colors="[ '#b35d22', '#d26e2a','#ed7d31', '#f1a78a', '#f5c7b8' ]"
						></ve-pie>
					</div>
					<div class="grafico__grupo--entrecoluna"></div>
					<div class="grafico__grupo grafico__grupo--pequeno">
						<h4 class="grafico__subtitulo">Vila Mariana</h4>
						<ve-pie :data="{
								columns: ['Grau de instrução', 'população' ],
								rows: [
									{ 'Grau de instrução': '1. Não alfabetizado', 'população': 41080 },
									{ 'Grau de instrução': '2. Fund. incompleto', 'população': 19151 },
									{ 'Grau de instrução': '3. Fund. completo', 'população': 21797 },
									{ 'Grau de instrução': '4. Sup. Incompleto', 'população': 77967 },
									{ 'Grau de instrução': '5. Sup. Completo', 'população': 194085 }
								]
							}"
							:settings="{
								radius: 50,
							}"
							:colors="[ '#b35d22', '#d26e2a','#ed7d31', '#f1a78a', '#f5c7b8' ]"
						></ve-pie>
					</div>
				</div>
				<p class="grafico__fonte notas">
					1. Não Alfabetizado/ Fundamental I Incompleto<br>
					2. Fundamental I Completo/ Fundamental II Incompleto<br>
					3. Fundamental II Completo/ Médio Incompleto<br>
					4. Médio Completo/ Superior Incompleto<br>
					5. Superior Completo<br>
				</p>
				<p class="grafico__fonte">Fonte: IBGE. Elaboração: LEVISKY, 2020</p>
			</div>

			<imagem :dados="{
				caption: 'Gráfico 07: Empregos por subsetor de atividade econômica, 2012',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/grafico7.jpg'),
				fonte: 'Elaboração: LEVISKY, 2020.'
			}" />

			<tabela :dados="{
				titulo: 'Tabela 04: Taxa de analfabetismo, 2010',
				colunas: [
					{ titulo: 'Unidades Territoriais' },
					{ titulo: 'Total (2010)' },
					{ titulo: 'Analfabetos (2010)' },
					{ titulo: 'Taxa de analfabetismo (2010)' }
				],
				linhas: [
					[
						[{ data: 'MSP' }],
						[{ data: '8.916.518' }],
						[{ data: '281.847' }],
						[{ data: '3,2' }],
					],
					[
						[{ data: 'Vila Mariana (Subprefeitura)' }],
						[{ data: '302.935' }],
						[{ data: '1.804' }],
						[{ data: '0,6' }]
					],
					[
						[{ data: 'Moema (Distrito)' }],
						[{ data: '73.087' }],
						[{ data: '159' }],
						[{ data: '0,2'}],
					],
					[
						[{ data: 'Saúde (Distrito)' }],
						[{ data: '114.234' }],
						[{ data: '843' }],
						[{ data: '0,7' }],
					],
					[
						[{ data: 'Vila Mariana (Distrito)' }],
						[{ data: '115.614' }],
						[{ data: '802' }],
						[{ data: '0,7' }],
					]
				],
				fonte: 'Prefeitura de São Paulo. Elaboração: LEVISKY, 2020'
			}"/>
			<div class="tabela--custom">
				<table>
					<caption>Tabela 06: Estabelecimentos e Empregos Formais no Setor do Comércio, Serviços, Indústria de Transformação e Construção Civil</caption>
					<thead>
						<tr>
							<th rowspan="2">Unidades Territoriais</th>
							<th colspan="2">Comércio</th>
							<th colspan="2">Serviços</th>
							<th colspan="2">Indústria de Transformação</th>
							<th colspan="2">Construção civil</th>
						</tr>
						<tr>
							<th>Estab.</th>
							<th>Empre.</th>
							<th>Estab.</th>
							<th>Empre.</th>
							<th>Estab.</th>
							<th>Empre.</th>
							<th>Estab.</th>
							<th>Empre.</th>
						</tr>
					</thead>
					<tr>
						<td>Município de São Paulo</td>
						<td>96.484</td>
						<td>885.789</td>
						<td>136.756</td>
						<td>2.543.845</td>
						<td>25.208</td>
						<td>430.668</td>
						<td>9.508</td>
						<td>237.493</td>
					</tr>
					<tr>
						<td>Pinheiros (Subprefeitura)</td>
						<td>7.110</td>
						<td>88.384</td>
						<td>22.548</td>
						<td>452.894</td>
						<td>1.496</td>
						<td>35.384</td>
						<td>778</td>
						<td>45.293</td>
					</tr>
					<tr>
						<td>Itaim Bibi (Distrito)</td>
						<td>2.887</td>
						<td>44.282</td>
						<td>10.082</td>
						<td>230.754</td>
						<td>604</td>
						<td>19.189</td>
						<td>406</td>
						<td>28.535</td>
					</tr>
					<tr>
						<td>Jardim Paulista (Distrito)</td>
						<td>1.634</td>
						<td>17.409</td>
						<td>5.952</td>
						<td>125.688</td>
						<td>291</td>
						<td>3.986</td>
						<td>120</td>
						<td>4.632</td>
					</tr>
					<tr>
						<td>Pinheiros (Distrito)</td>
						<td>2.131</td>
						<td>21.679</td>
						<td>5.498</td>
						<td>81.637</td>
						<td>499</td>
						<td>9.462</td>
						<td>202</td>
						<td>9.239</td>
					</tr>
					<tr>
						<td>Vila Mariana (Subprefeitura)</td>
						<td>4.889</td>
						<td>54.096</td>
						<td>14.011</td>
						<td>241.051</td>
						<td>975</td>
						<td>16.845</td>
						<td>526</td>
						<td>18.334</td>
					</tr>
					<tr>
						<td>Moema (Distrito)</td>
						<td>1.772</td>
						<td>20.173</td>
						<td>4.488</td>
						<td>58.946</td>
						<td>362</td>
						<td>6.490</td>
						<td>131</td>
						<td>4.248</td>
					</tr>
					<tr>
						<td>Saúde (Distrito)</td>
						<td>1.372</td>
						<td>13.891</td>
						<td>3.373</td>
						<td>57.465</td>
						<td>321</td>
						<td>6.064</td>
						<td>197</td>
						<td>5.057</td>
					</tr>
					<tr>
						<td>Vila Mariana (Distrito)</td>
						<td>1.745</td>
						<td>20.032</td>
						<td>6.150</td>
						<td>124.640</td>
						<td>292</td>
						<td>4.291</td>
						<td>198</td>
						<td>9.029</td>
					</tr>
				</table>
				<div class="fonte">Fonte <b>Prefeitura de São Paulo. Elaboração: LEVISKY, 2020</b></div>
			</div>

			<div class="grafico" style="max-width: 1000px">
				<h3 class="grafico__titulo">Gráfico 08: Estabelecimentos Formais 2016</h3>
					<ve-histogram :data="{
						columns: ['local', 'Comércio', 'Serviços', 'Indústria de transformação', 'Construção Civil'],
						rows: [
								{ 'local': 'Alto de Pinheiros', 'Comércio': 458, 'Serviços': 1016, 'Indústria de transformação': 102, 'Construção Civil': 50 },
								{ 'local': 'Itaim Bibi', 'Comércio': 2887, 'Serviços': 10082, 'Indústria de transformação': 604, 'Construção Civil': 406 },
								{ 'local': 'Jardim Paulista', 'Comércio': 1634, 'Serviços': 5952, 'Indústria de transformação': 291, 'Construção Civil': 120 },
								{ 'local': 'Pinheiros', 'Comércio': 2131, 'Serviços': 5498, 'Indústria de transformação': 499, 'Construção Civil': 202 },
								{ 'local': 'Moema', 'Comércio': 1772, 'Serviços': 4488, 'Indústria de transformação': 362, 'Construção Civil': 131 },
								{ 'local': 'Saúde', 'Comércio': 1372, 'Serviços': 3373, 'Indústria de transformação': 321, 'Construção Civil': 197 },
								{ 'local': 'Vila Mariana', 'Comércio': 1745, 'Serviços': 6150, 'Indústria de transformação': 292, 'Construção Civil': 198 }
							]
					}"
					:colors="[ '#8faadc', '#ee947c','#a9d18e', '#c9c9c9' ]"
					/>
					<p class="grafico__fonte">Fonte: Ministério do Trabalho em Emprego, Rais, Elaboração: LEVISKY, 2020.</p>
			</div>

			<div class="grafico" style="max-width: 1000px">
				<h3 class="grafico__titulo">Gráfico 09: Empregos formais 2016</h3>
					<ve-histogram :data="{
						columns: ['local', 'Comércio', 'Serviços', 'Indústria de transformação', 'Construção Civil'],
						rows: [
								{ 'local': 'Alto de Pinheiros', 'Comércio': 5014, 'Serviços': 14815, 'Indústria de transformação': 2747, 'Construção Civil': 2887 },
								{ 'local': 'Itaim Bibi', 'Comércio': 44282, 'Serviços': 230754, 'Indústria de transformação': 19189, 'Construção Civil': 28535 },
								{ 'local': 'Jardim Paulista', 'Comércio': 17409, 'Serviços': 125688, 'Indústria de transformação': 3986, 'Construção Civil': 4632 },
								{ 'local': 'Pinheiros', 'Comércio': 21679, 'Serviços': 81637, 'Indústria de transformação': 9462, 'Construção Civil': 9239 },
								{ 'local': 'Moema', 'Comércio': 20173, 'Serviços': 58946, 'Indústria de transformação': 6490, 'Construção Civil': 4248 },
								{ 'local': 'Saúde', 'Comércio': 13891, 'Serviços': 57465, 'Indústria de transformação': 6064, 'Construção Civil': 5057 },
								{ 'local': 'Vila Mariana', 'Comércio': 20032, 'Serviços': 124640, 'Indústria de transformação': 4291, 'Construção Civil': 9029 }
							]
					}"
					:colors="[ '#8faadc', '#ee947c','#a9d18e', '#c9c9c9' ]"
					/>
					<p class="grafico__fonte">Fonte: Ministério do Trabalho em Emprego, Rais, Elaboração: LEVISKY, 2020.</p>
			</div>

			<div class="table-container">
				<tabela-csv
					:titulo="'Tabela 07: Estabelecimentos e Empregos Formais no Setor do Comércio, Serviços, Indústria de Transformação e Construção Civil'"
					:colunas="['Unidade Territorial', 'Até 1/2', '1/2 a 1', '1 a 2', '2 a 5', '5 a 10', '10 a 20', 'Mais de 20', 'Sem Rendimento']"
					:linhas="[
						[ 'Município de São Paulo', '20.129', '255.166', '588.778', '1.212.485', '714.900', '380.801', '224.798', '202.016' ],
						[ 'Vila Mariana (Subprefeitura)', '445', '1.754', '4.822', '18.788', '28.926', '35.298', '37.438', '7.045' ]
					]"
					:fonte="'IBGE. Elaboração: LEVISKY, 2020.'"
				/>
			</div>

			<div class="grafico wider">
				<h3 class="grafico__titulo">Gráfico 10: Domicílios por Faixa de Rendimento, em salários mínimos – 2010</h3>
				<div class="grafico__grupos">
					<div class="grafico__grupo grafico__grupo">
						<h4 class="grafico__subtitulo">Município de São Paulo</h4>
						<ve-pie :data="{
								columns: ['categoria', 'domicílios'],
								rows: [
									{ 'categoria': 'Até 1/2', 'domicílios': 20129 },
									{ 'categoria': '1/2 A 1', 'domicílios': 255166 },
									{ 'categoria': '1 A 2', 'domicílios': 588778 },
									{ 'categoria': '2 A 5', 'domicílios': 1212485 },
									{ 'categoria': '5 A 10', 'domicílios': 714900 },
									{ 'categoria': '10 A 20', 'domicílios': 380801 },
									{ 'categoria': 'Mais De 20', 'domicílios': 224798 },
									{ 'categoria': 'Sem Rendimento', 'domicílios': 202016 }
								]
							}"
							:settings="{ radius: 70 }"
							:colors="[ '#a6561f', '#be6325', '#d26e2a', '#e4782f', '#ee8c58', '#f1a78a', '#f4bda9', '#f7d1c4' ]"
						></ve-pie>
					</div>
					<div class="grafico__grupo--entrecoluna" />
					<div class="grafico__grupo grafico__grupo--pequeno">
						<h4 class="grafico__subtitulo">Vila Mariana</h4>
						<ve-pie :data="{
								columns: ['categoria', 'domicílios'],
								rows: [
									{ 'categoria': 'Até 1/2', 'domicílios': 445 },
									{ 'categoria': '1/2 A 1', 'domicílios': 1754 },
									{ 'categoria': '1 A 2', 'domicílios': 4822 },
									{ 'categoria': '2 A 5', 'domicílios': 18788 },
									{ 'categoria': '5 A 10', 'domicílios': 28926 },
									{ 'categoria': '10 A 20', 'domicílios': 35298 },
									{ 'categoria': 'Mais De 20', 'domicílios': 37438 },
									{ 'categoria': 'Sem Rendimento', 'domicílios': 7045 }
								]
							}"
							:colors="[ '#a6561f', '#be6325', '#d26e2a', '#e4782f', '#ee8c58', '#f1a78a', '#f4bda9', '#f7d1c4' ]"
							:settings="{ radius: 50 }"
						></ve-pie>
					</div>
				</div>
				<p class="grafico__fonte">Fonte: IBGE. Elaboração: LEVISKY, 2020.</p>
			</div>

			<imagem :dados="{
				caption: 'Mapa 11: Vulnerabilidade Social e Habitação',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa11.jpg'),
				fonte: 'Elaboração: LEVISKY, 2020.'
			}" />

			<imagem :dados="{
				caption: 'Mapa 12: Índice Paulista de Vulnerabilidade Social',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image30.jpg'),
				fonte: 'Elaboração: LEVISKY, 2020.'
			}" />

			<div class="table-container">
				<tabela-csv
					:titulo="'Tabela 08: Estimativas de Domicílios em Favelas'"
					:colunas="['Unidades Territoriais', '2010', '2017']"
					:linhas="[
						['Município de São Paulo', '386.483', '391.043'],
						['Pinheiros (Subprefeitura)', '307', '347'],
						['Itaim Bibi (Distrito)', '285', '325'],
						['Jardim Paulista (Distrito)', '-', '0'],
						['Pinheiros (Distrito)', '22 ', '22'],
						['Vila Mariana (Subprefeitura)', '926', '977'],
						['Moema (Distrito)', '-', '0'],
						['Saúde (Distrito)', '492', '503'],
						['Vila Mariana (Distrito)', '434', '474']
					]"
					:fonte="'SEHAB/HABITAsampa. Elaboração: LEVISKY, 2020.'"
					:tabelaListrada="true"
				/>
			</div>

			<div class="grafico" style="max-width: 1000px">
				<h3 class="grafico__titulo">Domícílios em Favelas</h3>
					<ve-histogram :data="{
						columns: ['Unidades Territoriais', '2010', '2017'],
						rows: [
								{ 'Unidades Territoriais': 'Alto de Pinheiros', '2010': 0, '2017': 0 },
								{ 'Unidades Territoriais': 'Itaim Bibi', '2010': 285, '2017': 434},
								{ 'Unidades Territoriais': 'Jardim Paulista', '2010': 0, '2017': 0 },
								{ 'Unidades Territoriais': 'Pinheiros', '2010': 22, '2017': 22 },
								{ 'Unidades Territoriais': 'Moema', '2010': 0, '2017': 0 },
								{ 'Unidades Territoriais': 'Saúde', '2010': 492, '2017': 503 },
								{ 'Unidades Territoriais': 'Vila Mariana', '2010': 434, '2017': 474 }
							]
					}"
					:colors="[ '#d26e2a', '#f4bda9']"
					/>
					<p class="grafico__fonte">Fonte: SEHAB/HABITAsampa. Elaboração: LEVISKY, 2020.</p>
			</div>

			<div class="table-container">
				<tabela-csv
					:titulo="'Tabela 09: Índice de Desenvolvimento Humano Municipal, 2000-2010'"
					:colunas="['Subprefeituras', 'IDH-M  - 2000', 'IDH-M 2010', 'IDH=M Variação %']"
					:linhas="[
						[ 'Pinheiros', '0,910', '0,942', '3,52'],
						[ 'Vila Mariana', '0,897', '0,938', '4,57'],
						[ 'Santo Amaro', '0,867', '0,909', '4,84'],
						[ 'Lapa', '0,849', '0,906', '6,71'],
						[ 'Sé', '0,831', '0,889', '6,98'],
						[ 'Mooca', '0,811', '0,869', '7,15'],
						[ 'Santana/Tucuruvi', '0,811', '0,869', '7,15'],
						[ 'Butantã', '0,789', '0,859', '8,87'],
						[ 'Ipiranga', '0,759', '0,824', '8,56'],
						[ 'Aricanduva/Vila Formosa', '0,762', '0,822', '7,87'],
						[ 'Jabaquara', '0,756', '0,816', '7,94'],
						[ 'Penha', '0,745', '0,804', '7,92'],
						[ 'Casa Verde', '0,732', '0,799', '9,15'],
						[ 'Vila Maria/Vila Guilherme', '0,733', '0,793', '8,19'],
						[ 'Pirituba/Jaraguá', '0,718', '0,787', '9,61'],
						[ 'Vila Prudente', '0,723', '0,785', '8,58'],
						[ 'Campo Limpo', '0,699', '0,783', '12,02'],
						[ 'Ermelino Matarazzo', '0,707', '0,777', '9,9'],
						[ 'Jaçanã/Tremembé', '0,716', '0,768', '7,26'],
						[ 'Freguesia do Ó/Brasilândia', '0,677', '0,762', '12,56'],
						[ 'Itaquera', '0,691', '0,758', '9,7'],
						[ 'Cidade Ademar', '0,662', '0,758', '14,5'],
						[ 'Capela do Socorro', '0,656', '0,750', '14,33'],
						[ 'São Miguel Paulista', '0,650', '0,736', '13,23'],
						[ 'São Mateus', '0,658', '0,732', '11,25'],
						[ 'Perus', '0,637', '0,731', '14,76'],
						[ 'Itaim Paulista', '0,639', '0,725', '13,46'],
						[ 'M´Boi Mirim ', '0,638', '0,716', '12,23'],
						[ 'Guaianases', '0,621', '0,713', '14,81'],
						[ 'Cidade Tiradentes', '0,634', '0,708', '11,67'],
						[ 'Parelheiros', '0,593', '0,680', '14,67']
					]"
					:fonte="'Prefeitura de São Paulo. Elaboração: LEVISKY, 2020.'"
					:tabelaListrada="true"
				/>
			</div>

			<imagem :dados="{
				caption: 'Mapa 13: Zoneamento',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image31.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 14: Uso Predominante do Solo',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image32.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 15:  Coeficiente de Aproveitamento Máximo',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image33.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Imagem 08: Altura média dos edifícios do entorno',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/imagem8.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 16: Altura média dos edifícios do entorno',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image35.jpg'),
				fonte: 'CadMapper. Elaboração: LEVISKY, 2020'
			}" />

			<div class="table-container">
				<tabela-csv
					:titulo="'Tabela 09: Índice de Desenvolvimento Humano Municipal, 2000-2010'"
					:colunas="[ 'Unidades Territoriais', 'Casa', 'Casa de Vila ou em Condomínio', 'Apartamento', 'Habitação em: Casa de Cômodos, Cortiço ou Cabeça de Porco', 'Oca ou Maloca' ]"
					:linhas="[
						[ 'Município de São Paulo', '2.460.091', '52.673', '1.017.720', '42.924', '101' ],
						[ 'Pinheiros (Subprefeitura)', '23.345', '1.518', '96.232', '297', '0' ],
						[ 'Alto de Pinheiros (Distrito)', '6.812', '260', '8.206', '130', '0' ],
						[ 'Itaim Bibi (Distrito)', '8.441', '593', '30.135', '44', '0' ],
						[ 'Jardim Paulista (Distrito)', '2.455', '234', '36.930', '66', '0' ],
						[ 'Pinheiros (Distrito)', '5.636', '431', '20.961', '57', '0' ],
						[ 'Vila Mariana (Subpref.)', '29.391', '1.878', '104.064', '652', '0' ],
						[ 'Moema (Distrito)', '3.258', '170', '31.382', '0', '0 ' ],
						[ 'Saúde (Distrito)', '17.262', '888', '30.651', '471', '0' ]
					]"
					:tabelaListrada="true"
				/>
			</div>

			<div class="grafico wider">
				<h3 class="grafico__titulo">Gráfico 12: Domicílio segundo Tipologias Residenciais</h3>
				<h3 class="grafico__titulo">São Paulo</h3>
				<ve-pie :data="{
						columns: ['Tipologia', 'unidades' ],
						rows: [
							{ 'Tipologia': 'Casa', 'unidades': 2460091 },
							{ 'Tipologia': 'Casa de Vila ou em Condomínio', 'unidades': 52673 },
							{ 'Tipologia': 'Apartamento', 'unidades': 1017720 },
							{ 'Tipologia': 'Habitação em: Casa de Cômodos, Cortiço ou Cabeça de Porco', 'unidades': 42924 },
						]
					}"
					:colors="[ '#f5c7b8', '#f1a78a', '#ed7d31', '#d26e2a', '#a04507' ]"
				/>
				<div class="grafico__grupos">
					<div class="grafico__grupo grafico__grupo">
						<h4 class="grafico__subtitulo">Pinheiros</h4>
						<ve-pie :data="{
								columns: ['Tipologia', 'unidades' ],
								rows: [
									{ 'Tipologia': 'Casa', 'unidades': 23345 },
									{ 'Tipologia': 'Casa de Vila ou em Condomínio', 'unidades': 1518 },
									{ 'Tipologia': 'Apartamento', 'unidades': 96232 },
									{ 'Tipologia': 'Habitação em: Casa de Cômodos, Cortiço ou Cabeça de Porco', 'unidades': 297 },
								]
							}"
							:colors="[ '#f5c7b8', '#f1a78a', '#ed7d31', '#d26e2a', '#a04507' ]"
							:settings="{ radius: 50 }"
						/>
					</div>
					<div class="grafico__grupo--entrecoluna" />
					<div class="grafico__grupo grafico__grupo--pequeno">
						<h4 class="grafico__subtitulo">Vila Mariana</h4>
						<ve-pie :data="{
								columns: ['Tipologia', 'unidades' ],
								rows: [
									{ 'Tipologia': 'Casa', 'unidades': 29391 },
									{ 'Tipologia': 'Casa de Vila ou em Condomínio', 'unidades': 1878 },
									{ 'Tipologia': 'Apartamento', 'unidades': 104064 },
									{ 'Tipologia': 'Habitação em: Casa de Cômodos, Cortiço ou Cabeça de Porco', 'unidades': 652 },
								]
							}"
							:colors="[ '#f5c7b8', '#f1a78a', '#ed7d31', '#d26e2a', '#a04507' ]"
							:settings="{ radius: 50 }"
						/>
					</div>
				</div>
				<p class="grafico__fonte">Fonte: IBGE. Elaboração: LEVISKY, 2020</p>
			</div>

			<imagem :dados="{
				caption: 'Imagem 09: Novos Lançamento Imobiliários – 2018',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image37.jpg'),
				fonte: 'Fonte: Secovi, 2018. Elaboração: LEVISKY, 2020'
			}" />

			<div class="table-container">
				<tabela-csv
					:titulo="'Tabela 11: Lançamentos Residenciais Verticais, 2010 – 2018'"
					:colunas="[ 'Unidades Territoriais', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018' ]"
					:linhas="[
						[ 'Município de São Paulo', '267', '304', '208', '272', '258', '156', '136', '188', '228' ],
						[ 'Pinheiros (Subprefeitura)', '34', '41', '13', '27', '33', '15', '17', '30', '29' ],
						[ 'Itaim Bibi (Distrito)', '25', '25 ', '7 ', '16', '14', '8', '7', '9', '10' ],
						[ 'Jardim Paulista (Distrito)', '3', '4', '2', '5', '4 ', '1', '-', '8', '9' ],
						[ 'Pinheiros (Distrito)', '5 ', '10', '4', '3', '14', '4 ', '7', '13', '10 ' ],
						[ 'Vila Mariana (Subprefeitura)', '25', '26', '22', '40', '22 ', '17', '17 ', '15', '36' ],
						[ 'Moema (Distrito)', '6', '6 ', '1', '5', '5 ', '2', '7', ' 6  ', ' 12' ],
						[ 'Saúde (Distrito)', '8', '10', '15', '11', '7', '11 ', '4', '3', '9' ],
						[ 'Vila Mariana (Distrito)', '11', '10', '6', '24', '10 ', '4', '6 ', '6  ', '15' ]
					]"
					:tabelaListrada="true"
					:fonte="'Embraesp. Elaboração: LEVISKY, 2020'"
				/>
			</div>

			<div class="grafico" style="padding:0 1rem">
				<h3 class="grafico__titulo">Gráfico 13: Lançamentos Residenciais Verticais</h3>
				<h4 class="grafico__subtitulo">2018</h4>
				<ve-bar :data="{
						columns: ['territorio', 'Lançamentos Residenciais Verticais' ],
						rows: [
							{ 'territorio': 'Aricanduva/Formosa/Carrão', 'Lançamentos Residenciais Verticais': 5 },
							{ 'territorio': 'Butantã', 'Lançamentos Residenciais Verticais': 12 },
							{ 'territorio': 'Campo Limpo', 'Lançamentos Residenciais Verticais': 11 },
							{ 'territorio': 'Capela do Socorro', 'Lançamentos Residenciais Verticais': 0 },
							{ 'territorio': 'Casa Verde/Cachoeirinha', 'Lançamentos Residenciais Verticais': 2 },
							{ 'territorio': 'Cidade Ademar', 'Lançamentos Residenciais Verticais': 5 },
							{ 'territorio': 'Cidade Tiradentes', 'Lançamentos Residenciais Verticais': 0 },
							{ 'territorio': 'Ermelino Matarazzo', 'Lançamentos Residenciais Verticais': 4 },
							{ 'territorio': 'Freguesia/Brasilândia', 'Lançamentos Residenciais Verticais': 1 },
							{ 'territorio': 'Guaianases', 'Lançamentos Residenciais Verticais': 2 },
							{ 'territorio': 'Ipiranga', 'Lançamentos Residenciais Verticais': 9 },
							{ 'territorio': 'Itaim Paulista', 'Lançamentos Residenciais Verticais': 0 },
							{ 'territorio': 'Itaquera', 'Lançamentos Residenciais Verticais': 12 },
							{ 'territorio': 'Jabaquara', 'Lançamentos Residenciais Verticais': 3 },
							{ 'territorio': 'Jaçanã/Tremembé', 'Lançamentos Residenciais Verticais': 2 },
							{ 'territorio': 'Lapa', 'Lançamentos Residenciais Verticais': 18 },
							{ 'territorio': 'M´Boi Mirim', 'Lançamentos Residenciais Verticais': 0 },
							{ 'territorio': 'Mooca', 'Lançamentos Residenciais Verticais': 19 },
							{ 'territorio': 'Parelheiros', 'Lançamentos Residenciais Verticais': 0 },
							{ 'territorio': 'Penha', 'Lançamentos Residenciais Verticais': 11 },
							{ 'territorio': 'Perus', 'Lançamentos Residenciais Verticais': 1 },
							{ 'territorio': 'Pinheiros', 'Lançamentos Residenciais Verticais': 29 },
							{ 'territorio': 'Pirituba', 'Lançamentos Residenciais Verticais': 9 },
							{ 'territorio': 'Santana/Tucuruvi', 'Lançamentos Residenciais Verticais': 11 },
							{ 'territorio': 'Santo Amaro', 'Lançamentos Residenciais Verticais': 3 },
							{ 'territorio': 'São Mateus', 'Lançamentos Residenciais Verticais': 1 },
							{ 'territorio': 'São Miguel', 'Lançamentos Residenciais Verticais': 2 },
							{ 'territorio': 'Sé', 'Lançamentos Residenciais Verticais': 13 },
							{ 'territorio': 'Vila Maria/Vila Guilherme', 'Lançamentos Residenciais Verticais': 3 },
							{ 'territorio': 'Vila Mariana', 'Lançamentos Residenciais Verticais': 36 },
							{ 'territorio': 'Vila Prudente/Sapopemba', 'Lançamentos Residenciais Verticais': 4 },
							{ 'territorio': 'Sapopemba', 'Lançamentos Residenciais Verticais': 0 }
						]
					}"
					:colors="[ '#2e75b6', '#000' ]"
				/>
				<p class="grafico__fonte">Fonte: Embraesp. Elaboração: LEVISKY, 2020</p>
			</div>

			<div class="table-container">
				<tabela-csv
					:titulo="'Tabela 12: Coeficiente de Leitos por mil Habitantes, 2018'"
					:colunas="[ 'Unidades Territoriais', 'População', 'Total de Leitos Gerais', 'Coeficiente de Leitos gerais' ]"
					:linhas="[
						['Município de São Paulo', '11.654.490', '29.052', '2,49' ],
						['Pinheiros (Subprefeitura)', '295.195', '3.423', '11,60' ],
						['Vila Mariana (Subprefeitura)', '360.790', '4.193', '11,62' ]
					]"
					:fonte="'Fonte: CNES, SMS, SES e IBGE. Elaboração: LEVISKY, 2020'"
				/>
			</div>

			<imagem :dados="{
				caption: 'Mapa 17: Equipamentos de Saúde',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image38.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020.'
			}" />

			<imagem :dados="{
				caption: 'Mapa 18: Rede de Educação',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image39.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020.'
			}" />

			<imagem :dados="{
				caption: 'Mapa 19: Rede de Cultura.',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image40.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020.'
			}" />

			<imagem :dados="{
				caption: 'Mapa 20: Rede de abastecimento',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image41.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020.'
			}" />

			<div class="table-container">
				<tabela-csv
					:titulo="'Tabela 13: Rede de Abastecimento, 2018'"
					:colunas="[ 'Unidades Territoriais', 'Feiras (2018)', 'Mercados (2018)', 'Sacolões (2018)' ]"
					:linhas="[
						[ 'Município de São Paulo', '883', '16', '18' ],
						[ 'Pinheiros', '25', '1', '1 ' ],
						[ 'Alto de Pinheiros', '3', '-', '- ' ],
						[ 'Itaim Bibi', '10', '-', '- ' ],
						[ 'Jardim Paulista', '6', '-', '1' ],
						[ 'Pinheiros', '6', '1', '-' ],
						[ 'Vila Mariana', '37', '-', '- ' ],
						[ 'Moema', '8', '-', '- ' ],
						[ 'Saúde', '13', '-', '- ' ],
						[ 'Vila Mariana', '16', '-', '- ' ]
					]"
					:tabelaListrada="true"
					:fonte="'Coordenadoria de Segurança Alimentar e Nutricional – Secretaria Municipal de Desenvolvimento, Trabalho e Empreendedorismo. Elaboração: LEVISKY, 2020.'"
				/>
			</div>

			<imagem :dados="{
				caption: 'Mapa 21: Principais Comércios',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image42.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020.'
			}" />

			<imagem :dados="{
				caption: 'Mapa 22: Rede de Hotelaria',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image43.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020.'
			}" />

			<div class="tabela--custom">
				<table>
					<caption>Tabela 14: Modais</caption>
					<tr>
						<th colspan="3">Viagens Motorizadas</th>
						<th colspan="2">Viagens Não Motorizadas</th>
					</tr>
					<tr>
						<th colspan="2">Modo Individual</th>
						<th>Modo Coletivo</th>
						<th colspan="2">Modo Ativo</th>
					</tr>
					<tr>
						<td colspan="2">Automóvel</td>
						<td>Metrô / Trem</td>
						<td colspan="2">A Pé</td>
					</tr>
					<tr>
						<td colspan="2">Táxi / Aplicativos</td>
						<td>Ônibus</td>
						<td colspan="2">Bicicleta</td>
					</tr>
				</table>
				<div class="fonte">Fonte e Elaboração: <b>TTC</b></div>
			</div>

			<imagem :dados="{
				caption: 'Mapa 23: Classificação Viária',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image44.jpg'),
				fonte: 'Mapa 09, da Lei 16.050/14. Elaboração: LEVISKY, 2020.'
			}" />

			<div class="tabela--custom">
				<table>
					<caption>Tabela 15 - Hierarquização Viária </caption>
					<tr>
						<th>Nível/ Classificação Viária</th>
						<th>Vias</th>
					</tr>
					<tr>
						<td>N3</td>
						<td>
							Av. Brasil<br>
							Av. Brigadeiro Luís Antônio (da Av. São Gabriel até Vd. Brig. Luís Colombo)<br>
							Av. Pedro Álvares Cabral <br>
							Av. Vinte e Três de Maio <br>
							Av. República do Líbano <br>
							R. Manoel da Nóbrega (da Av. República do Líbano até R. Pedro Álvares Cabral)<br>
						</td>
					</tr>
					<tr>
						<td>Coletora</td>
						<td>
							R. Abílio Soares<br>
							R. Manoel da Nóbrega<br>
							Av. Marechal Estênio Albuquerque Lima<br>
							R. Jundiaí<br>
							R. Curitiba<br>
							R. Tutóia<br>
							R. Dr. Amâncio de Carvalho<br>
							R. Tomás Carvalhal<br>
							R. Tumiaru (entre R. Tutóia e R. Joinville)<br>
							R. Pirapora (entre R. Tutóia e R. Joinville)<br>
						</td>
					</tr>
				</table>
				<div class="fonte">
					Fonte: <a href="https://gestaourbana.prefeitura.sp.gov.br"><b>https://gestaourbana.prefeitura.sp.gov.br </b></a><br>
					Elaboração: <b>PDE 16.050/2014 - Adaptação TTC, 2020.</b><br>
				</div>
			</div>

			<div class="tabela--custom">
				<table>
					<caption>Tabela 16 - Características Físicas dos Principais Eixos da Área De Influência</caption>
					<tr>
					<th>Distrito</th>
					<th>Vias</th>
					<th>Classe das vias</th>
					<th>Características operacionais</th>
					<th>Nº de Pistas</th>
					<th>Nº de Faixas/</th>
					<th>Sentido Sentidos</th>
					<th>Separação de Pistas</th>
					</tr>
					<tr>
					<td rowspan="9">Moema</td>
					<td>Av. Pedro Álvares Cabral</td>
					<td>N3</td>
					<td>Interrompido</td>
					<td>2</td>
					<td>Nº de</td>
					<td>2</td>
					<td>Sim</td>
					</tr>
					<tr>
					<td>Av. Vinte e Três de Maio</td>
					<td>N3</td>
					<td>Ininterrupto</td>
					<td>2</td>
					<td>Faixas/</td>
					<td>2</td>
					<td>Sim</td>
					</tr>
					<tr>
					<td>Av. República do Líbano</td>
					<td>N3</td>
					<td>Interrompido</td>
					<td>2</td>
					<td>3 a 4</td>
					<td>2</td>
					<td>Sim</td>
					</tr>
					<tr>
					<td>R. Abílio Soares</td>
					<td>Coletora</td>
					<td>Interrompido</td>
					<td>1</td>
					<td>1 a 4</td>
					<td>1 a 2</td>
					<td>Não</td>
					</tr>
					<tr>
					<td>R. Manoel da Nóbrega</td>
					<td>Coletora</td>
					<td>Interrompido</td>
					<td>2</td>
					<td>1 a 4</td>
					<td>2</td>
					<td>Sim</td>
					</tr>
					<tr>
					<td>R. Jundiaí</td>
					<td>Coletora</td>
					<td>Interrompido</td>
					<td>1</td>
					<td>2</td>
					<td>1</td>
					<td>Não</td>
					</tr>
					<tr>
					<td>R. Curitiba</td>
					<td>Coletora</td>
					<td>Interrompido</td>
					<td>1 a 2</td>
					<td>1 a 3</td>
					<td>1 a 2</td>
					<td>Eventual</td>
					</tr>
					<tr>
					<td>R. Tumiaru (entre R. Tutóia e R. Joinville)</td>
					<td>Coletora</td>
					<td>Interrompido</td>
					<td>1</td>
					<td>1 a 2</td>
					<td>1 a 2</td>
					<td>Não</td>
					</tr>
					<tr>
					<td>R. Pirapora (entre R. Tutóia e R. Joinville)</td>
					<td>Coletora</td>
					<td>Interrompido</td>
					<td>1</td>
					<td>1 a 2</td>
					<td>1 a 2</td>
					<td>Não</td>
					</tr>
					<tr>
					<td rowspan="3">Vila Mariana</td>
					<td>R. Tomás Carvalhal</td>
					<td>Coletora</td>
					<td>Interrompido</td>
					<td>1</td>
					<td>1</td>
					<td>2</td>
					<td>Não</td>
					</tr>
					<tr>
					<td>R. Tutóia</td>
					<td>Coletora</td>
					<td>Interrompido</td>
					<td>1</td>
					<td>1 a 2</td>
					<td>2</td>
					<td>Não</td>
					</tr>
					<tr>
					<td>R. Dr. Amâncio de Carvalho</td>
					<td>Coletora</td>
					<td>Interrompido</td>
					<td>1</td>
					<td>1 a 2</td>
					<td>2</td>
					<td>Não</td>
					</tr>
					<tr>
					<td rowspan="2">Jardim Paulista</td>
					<td>Av. Brigadeiro Luís Antônio </td>
					<td>N3</td>
					<td>Interrompido</td>
					<td>1</td>
					<td>2 (faixa exclusiva de ônibus)</td>
					<td>2</td>
					<td>Não</td>
					</tr>
					<tr>
					<td>Av. Brasil</td>
					<td>N3</td>
					<td>Interrompido</td>
					<td>2</td>
					<td>3 a 4</td>
					<td>2</td>
					<td>Sim</td>
					</tr>
				</table>
				<div class="fonte">
					Fonte e Elaboração: <b>TTC, 2020</b>
				</div>
			</div>

			<imagem :dados="{
				caption: 'Mapa 24: Rede de Transporte Coletivo Existente',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image45.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 25: Rede de Transporte Coletivo Planejada',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image46.jpg'),
				fonte: 'Mapa 11, da Lei 16.050/14. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 26: Melhoramento de calçadas',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image47.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 27: Rede Cicloviária Existente',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image48.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 28: Patrimônio Cultural',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image49.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 29: Imóveis e Territórios Enquadrados como ZEPEC e Indicados para Tombamento',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image50.jpg'),
				fonte: 'Mapa 02, da Lei 16.402/2016. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 30: Patrimônio Cultural – CONDEPHAAT',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image51.jpg'),
				fonte: 'Geosampa | IDE-SP - Secretaria da Casa Civil. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 31: Bacias Hidrográficas',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image52.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 32: Carta Geotécnica',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image53.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 33: Áreas Verdes',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image54.jpg'),
				fonte: 'Mapa 05, da Lei nº 16.050/2014, Mapa 01 da Lei nº 16.402/2016, Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<div class="table-container">
				<tabela-csv
					:titulo="'Tabela 17: Áreas verdes, 2017'"
					:colunas="['Unidades Territoriais', 'Área Total', 'Área Verde (m²)', 'População', 'Percentuais de Área Verde (PAV)%', 'Área Verde por Habitante (IAV) m²' ]"
					:linhas="[
						[ 'Município de São Paulo', '1.527.535.804', '194.138.890', '11.696.088', '12,71', '16,60' ],
						[ 'Pinheiros (Subprefeitura)', '31.991.417', '1.880.420', '490.054', '5,81', '3,80' ],
						[ 'Vila Mariana (Subprefeitura)', '26.985.558', '1.002.514', '295.133', '3,71', '3,40' ]
					]"
					:fonte="'SVMA, IBGE. Elaboração: LEVISKY, 2020.'"
				/>
			</div>

			<imagem :dados="{
				caption: 'Mapa 34: Patrimônio Ambiental',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image55.jpg'),
				fonte: 'Geosampa, Carta de Vegetação Significativa, Decreto nº 30.443/1989. Elaboração: LEVISKY, 2020.'
			}" />

			<imagem :dados="{
				caption: 'Mapa 35: Aglomerados Arbóreos',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image56.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Imagem 10: Exemplares arbóreos presentes no terreno (01 – Pau Ferro; 02 – Ipê Branco; 03 – Sibipuruna)',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image57.jpg'),
				fonte: 'Relatório Técnico preliminar, Legal Tree Consultoria e Engenharia em Meio Ambiente, 2020.'
			}" />

			<imagem :dados="{
				caption: 'Mapa 36: Mapa Geral do Parque Ibirapuera – Comissão do IV Centenário, São Paulo – 1954',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image58.jpg'),
				fonte: 'http://www.bienal.org.br/post/1089. Acessado em novembro 2019'
			}" />

			<imagem :dados="{
				caption: 'Imagem 11: Parque do Ibirapuera',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/imagem11.jpg'),
				fonte: 'Site do Parque < https://www.ibirapueraparque.com.br> Acesso em: outubro 2019'
			}" />

			<div class="table-container">
				<tabela-csv
					:titulo="'Tabela 18: Áreas verdes, 2017'"
					:colunas="['Unidades Territoriais', 'Nº de Árvores no Sistema Viário']"
					:linhas="[
						[ 'Município de São Paulo', '6.552.000' ],
						[ 'Pinheiros (Subprefeitura)', '49.895' ],
						[ 'Vila Mariana (Subprefeitura)', '32.673' ]
					]"
					:fonte="'SVMA, IBGE. Elaboração: LEVISKY, 2020.'"
				/>
			</div>

			<imagem :dados="{
				caption: 'Mapa 37: Arborização Viária',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image60.jpg'),
				fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
			}" />

			<imagem :dados="{
				caption: 'Mapa 38: Áreas contaminadas e reabilitadas (2018)',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/image61.jpg'),
				fonte: 'CETESB. Elaboração: LEVISKY, 2020'
			}" />

			<!-- PIP - Projeto de Intervenção Pública-->
			<imagem :dados="{
				caption: 'Imagem 01: Programas obrigatórios do Complexo.',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image2.jpg'),
				fonte: 'Natureza Urbana'
			}" />

			<imagem :dados="{
				caption: 'Imagem 02: Atividades propostas pelas PMI’s',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image3.jpg'),
				fonte: 'Natureza Urbana'
			}" />

			<imagem :dados="{
				caption: 'Imagem 03: Cenários de uso ',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image4.jpg'),
				fonte: 'Natureza Urbana'
			}" />

			<imagem :dados="{
				caption: 'Imagem 04: Interdependência de usos',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image5.jpg'),
				fonte: 'Natureza Urbana'
			}" />

			<imagem :dados="{
				caption: 'Imagem 05: The O2 London Populous, Sony Center, L.A. l',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image6.jpg'),
				fonte: 'sites O2 London, Sony Center, L.A. Live'
			}" />

			<imagem :dados="{
				caption: 'Imagem 06: The O2 London Populous',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image7.jpg'),
				fonte: 'site O2 <https://www.theo2.co.uk/>'
			}" />

			<imagem :dados="{
				caption: 'Imagem 07: Sony Center, Berlin Murphy Jahn',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image8.jpg'),
				fonte: 'Landscape Architecture'
			}" />

			<imagem :dados="{
				caption: 'Imagem 08: L.A. Live, Los Angeles RTKL Associates',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image9.jpg'),
				fonte: '<https://www.lalive.com/> Acessado em outubro, 2020'
			}" />

		</section>
		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && consultaAtiva" :attr="{id:commentId(), context:'Comentarios'}"></Comments>
		</section>
	</div>
</template>
<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Apoio from '@/components/Apoio'
import Imagem from '@/components/Imagem'
import { consultasCommons } from '@/mixins/consultasCommons'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import Tabela from '@/components/Tabela'
import TabelaCsv from '@/components/TabelaCsv'
import VePie from 'v-charts/lib/pie.common'
import VeLine from 'v-charts/lib/line.common'
import VeBar from 'v-charts/lib/bar.common'
import veHistogram from 'v-charts/lib/histogram.common'

export default {
	name: 'GinasioIbirapuera',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {}
		}
	},
	components: {
		Comments,
		CommentsLoader,
		PageTop,
		Indice,
		Tabela,
		TabelaCsv,
		Apoio,
		Imagem,
		VePie,
		VeLine,
		VeBar,
		veHistogram
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

.grafico {
	border: 1px $cinza-2 solid;
	max-width: 700px;
	margin: 1rem auto;
	text-align: center;
	@media (max-width: 600px) {
		margin: 1rem
	}
}

.wider {
	max-width: 900px;
	@media (max-width: 900px) {
		margin: 1rem
	}
}

.grafico__titulo,
.grafico__subtitulo {
	font-size: initial;
}

.grafico__titulo {
	margin-top: 1.5rem;
}

.grafico__subtitulo {
	margin-bottom: 2rem;
	font-weight: normal;
}

.grafico__fonte {
	font-family: $grotesca;
	font-size: x-small;
}

.grafico__grupos {
	display: grid;
	grid-template-columns: 1fr 1px 1fr;
	@supports(not(display: grid)) {
		display: flex
	}
	@media(max-width: 700px) {
		display: flex;
		flex-direction: column;
	}
}

.grafico__grupo--entrecoluna {
	background-color: $cinza-2;
	margin: 1rem 0;
}

.tabela--custom {
	max-width: 700px;
	overflow-x: auto;
	margin: 2rem auto;
	padding: 0 2rem 2rem;
	background-color: #F5F5F5;
	border-radius: 2px;
}

.tabela--custom table {
	width: 100%;
}

.tabela--custom table caption  {
	border-top: unset
}

.tabela--custom table th {
	background-color: rgba(0, 0, 0, 0.12);
}

.tabela--custom table td {
	background-color: #fff;
}

.tabela--custom .fonte {
	margin: 1rem 0 0 0;
	font-size: x-small;
	color: #777;
}

.table-container {
	max-width: 700px;
	margin: auto;
}
</style>
