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
				></ve-pie>
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
</style>
