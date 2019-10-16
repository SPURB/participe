<template>
	<div class="JockeyClub" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/jockey.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Jockey Club</div></template>
			<template slot="subtitulo"><div>Subtítulo da Nova Consulta</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Análise Socioterritorial e Ambiental</h2>
			<section>
				<h3 class="titulo" indent="2">Introdução</h3>
				<p>O Hipódromo de Cidade Jardim é um equipamento privado de grande porte que contém características urbanísticas, paisagísticas e históricas excepcionais, tendo sido assim classificado como uma ZOE – Zona de Ocupação Especial pela Lei de Parcelamento, Uso e Ocupação do Solo – LPUOS (Lei nº 16402/2016).  Nos termos do §1º do art. 15 dessa lei, as áreas classificadas como ZOE – Zona de Ocupação Especial devem necessariamente ser objeto de PIU – Projetos de Intervenção Urbana, contemplando a definição de parâmetros específicos de parcelamento, uso e ocupação do solo adequados às suas especificidades.</p>
				<p>Em atendimento ao Art. 2° do Decreto Municipal nº 56.901/2016, que regulamenta o desenvolvimento dos Projetos de Intervenção Urbana, os produtos ora apresentados correspondem aos elementos prévios à elaboração do PIU, constituídos pelo Diagnóstico Socioterritorial e Ambiental e pelo Programa de Interesse Público, subsidiando a instrução do presente Projeto de Intervenção Urbana do Hipódromo de Cidade Jardim – PIU Jockey Club, possibilitando à SMDU a realização da Consulta Pública inaugural do processo de desenvolvimento deste projeto no site Gestão Urbana.</p>
				<p>Considerando que o Hipódromo de Cidade Jardim vem passando nos últimos anos por um processo gradativo de refuncionalização em razão de uma progressiva redução das atividades do turfe e da realização de eventos e novas atividades de cunho cultural, esportivo e de lazer, bem como das tratativas iniciadas entre a Prefeitura e o Jockey Club de São Paulo visando à composição em relação a lançamentos tributários relativos ao  imóvel, envolvendo a prestação de contrapartidas de interesse público, este PIU Jockey Club é uma oportunidade para que se promova publicamente a discussão acerca da destinação urbanística deste equipamento histórico no contexto de desenvolvimento urbano atual da cidade e da estratégia de ordenamento territorial delineada pelo Plano Diretor Estratégico – PDE (Lei nº 16.050/2014).</p>
				<p>O formato definido para esta publicação da Consulta Pública dos Elementos Prévios ao Desenvolvimento do PIU Jockey Club no sítio eletrônico http://gestaourbana.prefeitura.sp.gov.br/ traz, primeiramente, o Objeto da Consulta, descrevendo o conteúdo, o prazo e o rito previsto no decreto regulamentador, a Motivação da consulta, destacando a definição de parâmetros para a ZOE e a refuncionalização do equipamento e o Quadro Normativo, destacando o Estatuto da Cidade e o marco regulatório do desenvolvimento urbano municipal. O conteúdo do Diagnóstico Socioterritorial é apresentado no item 3, com histórico do equipamento e os principais aspectos socioterritoriais do contexto urbano do equipamento. Por fim, o item 4 aborda os aspectos ambientais deste contexto urbano.</p>
			</section>

			<section>
				<h3 class="titulo" indent="2">Consulta Pública – Elementos prévios</h3>
				<section>
					<h4 class="titulo" indent="3">Objeto</h4>
					<p>A presente Consulta Pública, promovida pela Prefeitura do Município de São Paulo por intermédio da Secretaria Municipal de Desenvolvimento Urbano (SMDU) e da São Paulo Urbanismo (SP-URBANISMO), tem como objeto desencadear o processo administrativo tendente a instaurar o Projeto de Intervenção Urbana do Hipódromo de Cidade Jardim – PIU Jockey Club, a ser realizada entre os dias 14 de outubro a 05 de novembro de 2019, apresentando os elementos preliminares ao desenvolvimento do PIU, com vistas a colher contribuições da sociedade civil ao posterior desenvolvimento do projeto. A consulta tem por base a legislação em vigor e os instrumentos urbanísticos que permitem ações específicas no território da cidade.</p>
					<p>De acordo com o Art. 2º do Decreto nº 56.901/2016, o processo de instrução do PIU se inicia pela publicação dos elementos preliminares a seu desenvolvimento, constituídos de diagnósticos socioterritorial e ambiental da área estudada, bem como de seu Programa de Interesse Público, trazendo as questões a serem enfrentadas no contexto urbano em que está inserido. Esses documentos são então submetidos à consulta pública para receberem contribuições da sociedade, subsidiando a decisão da Secretaria Municipal de Desenvolvimento Urbano – SMDU quanto ao seu prosseguimento.</p>

					<h4 class="titulo" indent="3">Motivação</h4>
					<p>O PIU Jockey Club tem como motivação básica a definição dos parâmetros de parcelamento, uso e ocupação do solo para Zona de Ocupação Especial – ZOE Jockey Club, localizada no território da Prefeitura Regional de Butantã. Tal definição deve considerar o processo de transformações pelo qual vem passando o equipamento em relação a suas atividades, suas características singulares de arquitetura e inserção na paisagem e o marco regulatório da política urbana municipal (PDE, LPUOS, Planos Regionais das Subprefeituras – PRS).</p>
					<p>A proposta para a regulação da ZOE Jockey Club vem como consequência de um estudo apresentado pelo Jockey Club de São Paulo para a Prefeitura em outubro de 2017, sugerindo a criação de um parque público sem interferências nas atividades ligadas ao turfe. Embora tal provocação tenha contribuído para a decisão de deflagrar o presente processo, todas as definições a serem adotadas pelo PIU decorrerão exclusivamente do processo que ora se inicia, servindo como plataforma de recepção de contribuições por toda a sociedade, não representando, pois, adesão a priori ao conteúdo das proposições já apresentadas. </p>
					<h4 class="titulo" indent="3">Quadro Normativo</h4>
					<p>O Plano Diretor Estratégico, de acordo com o texto expresso pelo Art. 182 da Constituição Federal de 1988, e, posteriormente, pelo Art. 40 do Estatuto da Cidade (Lei Federal nº 10.257/2001), é o instrumento básico das políticas públicas referentes ao desenvolvimento e à expansão urbana, caracterizando-se como o índice de aferição do cumprimento da função social da propriedade. É o diploma que apresenta as diretrizes de condutas a serem seguidas pelo Poder Público Municipal visando ordenar o desenvolvimento das funções sociais da cidade e da propriedade urbana.</p>
					<p>O Plano Diretor Estratégico do Município de São Paulo – PDE (Lei nº 16.050/2014), por sua vez, tem entre seus objetivos a busca pelo desenvolvimento urbano sustentável e equilibrado do Município, buscando promover a aproximação entre emprego e moradia, o acesso à mobilidade e a reestruturação e qualificação das centralidades urbanas, considerando em seu ordenamento as dimensões social, ambiental, imobiliária, econômica e cultural. Tais diretrizes estão expressas, sobretudo, na instituição dos Eixos de Estruturação da Transformação Urbana e nos territórios estratégicos que compõem a Macroárea de Estruturação Metropolitana.</p>
					<p>A Lei de Parcelamento, Uso e Ocupação do Solo - LPUOS (Lei nº 16.402/ 2016), veio regulamentar o PDE, detalhando as zonas de uso no território, seus parâmetros urbanísticos e condições de instalação, dentre outros instrumentos. Nos termos do §1º do art. 15 dessa lei, as áreas classificadas como ZOE – Zona de Ocupação Especial devem necessariamente ser objeto de PIU – Projetos de Intervenção Urbana, contemplando a definição de parâmetros específicos de parcelamento, uso e ocupação do solo adequados às suas especificidades.</p>
					<p>Dentre os instrumentos urbanísticos trazidos pelo PDE, está previsto no seu artigo 134 o PIU, que pode ser promovido pelo poder público para articular medidas de financiamento, gestão, aquisição de terras (reordenamento urbano) e ações intersetoriais para desenvolver e implementar as especificidades de cada intervenção proposta, com processos adequados de gestão e participação social. O PIU tem por finalidade reunir e articular os estudos técnicos objetivando promover o ordenamento e a reestruturação urbana em áreas subutilizadas e com potencial de transformação, tendo sua regulamentação estabelecida pelo Decreto n° 56.901/2016.</p>
					<p>Os Planos Regionais das Subprefeituras – PRS (Decreto nº 57.537/ 2016) são elementos de planejamento complementares ao PDE e à LPUOS, enfatizando os espaços públicos e a articulação de políticas setoriais no território e com as peças orçamentárias, contendo propostas para a Rede de Estruturação Local. A Rede de Estruturação Local, por sua vez, é composta por Perímetros de Ação, que são porções do território com demandas e ações setoriais que necessitam de projetos coordenados de intervenção destinados ao desenvolvimento urbano local, mediante integração de políticas e investimentos públicos.</p>
					<p>A Resolução SC 97/10 do Conselho de Defesa do Patrimônio Histórico, Arqueológico, Artístico e Turístico do Estado de São Paulo - CONDEPHAAT, de 19/11/2010, dispõe sobre o tombamento do conjunto arquitetônico do Jockey Club de São Paulo na categoria de bem cultural, histórico, arquitetônico e ambiental. Além disso, o Conselho Municipal de Preservação do Patrimônio Histórico, Cultural e Ambiental da Cidade de São Paulo – CONPRESP, através da Resolução nº 05/2013 também realizou o tombamento do conjunto, destacando seu papel arquitetônico, histórico e simbólico para a cidade. As duas resoluções mencionadas (apresentadas nos Anexos I e II ao final deste trabalho) descrevem quais edifícios do conjunto devem ser preservados e estabelece que quaisquer intervenções ali planejadas devem ser aprovadas pelos respectivos órgãos. </p>
				</section>
			</section>
			<section>
				<h3 class="titulo" indent="2">Histórico e organização funcional do hipódromo</h3>
				<p>Fundado em 14 de março 1875, como Clube de Corridas Paulistano, o atual Jockey Club de São Paulo começou suas atividades no bairro da Mooca. Com o processo de urbanização do bairro do Butantã e Jardim Guedala, feitos pela Companhia City a partir dos anos 1930, e após a retificação do Rio Pinheiros, a partir de 1928, a companhia doou ao Jockey o terreno de cerca de 600 mil m² na margem oeste do rio, com o objetivo de trazer uma opção de lazer atraente à elite paulistana e valorizar o novo bairro. </p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-1_vista-aerea.jpg'),
					caption: 'Figura 1 – Vista Aérea, 1955',
					fonte: 'oldsaopaulo.tumblr'
				}"></Imagem>
				<p>Em 25 de janeiro 1941 foi inaugurado o Hipódromo de Cidade Jardim, concebido por Fábio Prado, prefeito da cidade e presidente do Jockey à época. Ao mesmo tempo, o Jockey doou o terreno na Mooca para o município.</p>
				<p>O projeto da nova sede foi elaborado em 1937, por Elisiário da Cunha Bahiana, no estilo Art Decó e ficou pronto em 1941. O arquiteto projetou as pistas, arquibancadas e a Vila Hípica da nova sede. Ao todo são quatro pistas de grama ou areia utilizadas para as corridas oficiais, com cerca de 2.000 metros de extensão em volta fechada. As arquibancadas e tribunas tem capacidade para receber até 20.000 pessoas. A Vila Hípica, diretamente ligada às pistas, tem capacidade para abrigar até 1.400 animais.</p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-2.jpg'),
					caption: 'Figura 2 – Vista da Tribuna dos Sócios a Partir da Rua Lineu de Paula, 1944',
					fonte: 'oldsaopaulo.tumblr'
				}"></Imagem>
				<p>De 1946 a 1958 o conjunto passa por uma reforma projetada pelo arquiteto francês Henri Sajous, reformulando o Salão Nobre e criando novas edificações, entre elas o novo ambulatório. A renovação da Tribuna Social e do Salão Nobre contou com a criação de 15 esculturas em alto relevo produzidas por Victor Brecheret em mármore travertino romano, constituindo o segundo maior acervo do artista. O Salão Nobre ainda recebeu painel decorativo em laca feito por Bernard Durand.</p>
				<p>Em 2010 o conjunto do Jockey Club foi tombado pelo CONDEPHAAT e em 2013 pelo CONPRESP. As duas resoluções ressaltam o valor histórico, arquitetônico, cultural e simbólico do conjunto.</p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-3_tribuna.jpg'),
					caption: 'Figura 3 – Vista a partir da Tribuna dos Sócios, 1961.',
					fonte: 'Acervo Folhapress'
				}"></Imagem>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-4.jpg'),
					caption: 'Figura 4 - Salão Nobre Reformado por Henri Sajous e Painel de Bernard Durand ao fundo, 1954',
					fonte: 'Revista Acrópole, 1954. Disponível em: acropole.fau.usp.br'
				}"></Imagem>

				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-5.jpg'),
					caption: 'Vista da Arquibancada Especial 2, 1955',
					fonte: 'Revista Acrópole, 1955. Disponível em: acropole.fau.usp.br'
				}"></Imagem>

				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-6.jpg'),
					caption: 'Figura 6 – Vista do Ambulatório (a partir da pista), projetado por Henri Sajous, 1955',
					fonte: 'Revista Acrópole, 1955. Disponível em: acropole.fau.usp.br'
				}"></Imagem>

				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-7.jpg'),
					caption: 'Vista do Ambulatório (a partir da Av. Lineu de Paula), projetado por Henri Sajous, 1955',
					fonte: 'Revista Acrópole, 1955. Disponível em: acropole.fau.usp.br'
				}"></Imagem>

				<p>No campo esportivo, a instituição é também uma referência para o turfe nacional, recebendo os principais eventos da modalidade, junto com os hipódromos do Jockey Club Brasileiro (instalado no Rio de Janeiro), do Rio Grande do Sul e do Paraná. As corridas são realizadas nas tardes de sábado, domingo e segunda-feira, compostas por 10 páreos. A principal competição do ano é a realização do GP São Paulo, disputado em 2.400 metros, na pista de grama, além de outras provas como os GPs Presidente da República, OSAF, ABCPCC e Juliano Martins.</p>
				<p>Além das atividades relacionadas ao turfe, o Jockey Club abriga um clube sócio-desportivo, com estrutura como piscinas, campos de futebol, quadras de tênis e vôlei de praia. A instituição tem buscado diversificar e intensificar a utilização do equipamento, de modo a atrair público nos demais dias da semana e em horários diversos, abrigando atualmente em média 15 eventos mensais, ligados principalmente à gastronomia e cultura. O Cena Jockey é um espaço dedicado a eventos gastronômicos com capacidade para mais de 1500 pessoas.  Há ainda os restaurantes Ferra Jockey e Iulia, que também recebem eventos esporadicamente. Desde 2006 o Jockey foi escolhido como a sede oficial do evento CasaCor, mostra de arquitetura, design de interiores e paisagismo que recebe milhares de visitantes todos os anos. Eventos de música também têm ocorrido no espaço, como o Festival Lollapalooza (2012-2013) e o Festival Planeta Terra (2012). Além disso, o Jockey recebeu o festival de filmes ao ar livre Shell Open Air 2019 e, recentemente, sedia a 3ª edição da Oktoberfest. </p>
				<Imagem :dados="{
					tipo: 'hero',
					url: imgSrc('arquivos/capas/jockey_1600w.jpg'),
					caption: 'Foto Aérea',
					fonte: 'Google Earth, 2019'
				}"></Imagem>

				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/jockey/Mapa-1.gif'),
					titulo: 'Setores do Hipódromo',
					fonte: 'Jockey Club, 2019. Elaboração: SPUrbanismo',
					legenda: [
						{ fundo: '#3535B3', descricao: 'Área do Turfe' },
						{ fundo: '#0080FF', descricao: 'Tribunas especiais' },
						{ fundo: '#0080FF', descricao: 'Clube Social' },
						{ fundo: '#CCFFFF', descricao: 'Área Administrativas' },
						{ fundo: '#B3B3B3', descricao: 'Cocheiras e alojamentos' },
						{ fundo: '#CCCC00', descricao: 'Vila Hípica' },
						{ fundo: '#FFFF33', descricao: 'Pista de corridas' },
						{ fundo: '#FFAF00', descricao: 'Área livre' },
						{ fundo: '#FF7800', descricao: 'Estacionamento' }
					]
				}"></Imagem>

			</section>
			<section>
				<h3 class="titulo" indent="2">Diagnóstico socioterritorial</h3>
				<section>
					<h4 class="titulo" indent="3">Objeto</h4>
					<p>O Hipódromo de Cidade Jardim está localizado na região oeste da cidade de São Paulo, no território da Subprefeitura do Butantã, mais especificamente no distrito Morumbi, no limite deste com o distrito do Butantã (Mapa 1).</p>
					<p>As análises contidas neste diagnóstico socioterritorial consideram a área da ZOE do Hipódromo de Cidade Jardim como Área Diretamente Afetada (ADA) pelo projeto de intervenção urbana a ser desenvolvido, as áreas das Zonas Origem e Destino (ZOD) da Pesquisa Origem e Destino do Metrô de São Paulo situadas no entorno do hipódromo como Área de Influência Direta (AID) deste PIU e, por fim, as áreas dos distritos municipais situados ao redor do hipódromo, como Área de Influência Indireta (AII) do PIU Jockey (Mapa 2). </p>
					<p>Considerando as características socioeconômicas e ambientais do contexto urbano em que se insere o hipódromo, as ZODs que compõem a AID estão localizadas nas subprefeituras do Butantã e Pinheiros, englobando Butantã, Pinheiros, Jardim Europa e Jockey Club. Os distritos que compõem a AII também estão localizados em ambas as subprefeituras, englobando Morumbi, Butantã, Vila Sônia, Pinheiros, Alto de Pinheiros e Itaim Bibi.</p>
					<Imagem :dados="{
						tipo: 'mapa',
						url: imgSrc('arquivos/jockey/Mapa-2.jpg'),
						titulo: 'Mapa 2 - Inserção Metropolitana da Área de Intervenção',
						fonte: 'Geosampa. Elaboração: SPUrbanismo',
						legenda: [
							{ borda: '#000', espessura: 3, descricao: 'Limite do Município de São Paulo (MSP)' },
							{ borda: '#000', espessura: 1, descricao: 'Distritos MSP' },
							{ borda: '#FF9100', espessura: 3, fundo: '#FFDFB4', descricao: 'PIU Jockey Club - Área de Diretamenten Afetada (ADA)' },
							{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'PIU Jockey Club - Área de Influência Direta (AID)' },
							{ fundo: '#B2B2B2', descricao: 'PIU Jockey Club - Área de influência Indireta (AII)' }
						]
					}"></Imagem>

					<Imagem :dados="{
						tipo: 'mapa',
						url: imgSrc('arquivos/jockey/Mapa-3.jpg'),
						titulo: 'Mapa 3 - Definição das áreas de análise',
						fonte: 'Geosampa. Elaboração: SPUrbanismo',
						legenda: [
							{ borda: '#FF9100', espessura: 3, fundo: '#FFDFB4', descricao: 'ADA - Área de Diretamenten Afetada' },
							{ borda: '#FFFF48', espessura: 3, fundo: '#FFFFED', pontilhado: true, descricao: 'AID - Área de Influência Direta' },
							{ borda: '#000', espessura: 1, descricao: 'AII - Área de influência Indireta' }
						]
					}"></Imagem>

					<Imagem :dados="{
						tipo: 'mapa',
						url: imgSrc('arquivos/jockey/Mapa-4.jpg'),
						titulo: 'Mapa 4 - Limites Administrativos',
						fonte: 'Geosampa. Elaboração: SPUrbanismo',
						legenda: [
							{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
							{ simbolo: imgSrc('arquivos/legendas/icones/cptm.png'), descricao: 'Estação CPTM' }
						]
					}"></Imagem>
				</section>

				<section>
					<h3 class="titulo" indent="2">Análise Socioeconômica</h3>
					<p>Segundo dados do Censo  de 2010, os distritos do Morumbi e do Butantã, onde se insere o Hipódromo de Cidade Jardim, continham uma população de, respectivamente, 46.957 e 54.196 habitantes. As retroestimativas e projeções populacionais realizadas pelo GEOINFO  para os mesmos distritos apontam para dinâmicas opostos, com crescimento expressivo no Morumbi e ligeiro decréscimo no Butantã. Em 2020, as populações seriam de, respectivamente, 53.670 e 53.939 habitantes e, em 2040, de 99.283 e 49.951 habitantes. Este quadro tendencial não considera, entre outros fatores, as diretrizes de ocupação do PDE e da LPUOS.</p>
					<p>Observamos nas projeções do GEOINFO que o Município de São Paulo deve registrar um crescimento populacional da ordem de 8% ao longo dos próximos 20 anos. Os distritos Morumbi e Vila Sônia destacam-se pelas projeções de crescimento populacional mais acentuadas em relação aos demais distritos da AII, o que pode ser explicado, em parte, pelo adensamento populacional esperado para o entorno das novas estações de metrô da linha amarela. O distrito Rio Pequeno é o único com projeção de crescimento populacional negativa na Subprefeitura do Butantã. Nos distritos situados na Subprefeitura de Pinheiros estudados, Alto de Pinheiros e Pinheiros também apresentam projeções de crescimento negativas, enquanto que o Itaim Bibi continuará crescendo no referido período.</p>
					<p>Todavia, o crescimento da população no distrito Morumbi, que está sob área de influência de estações de trem e metrô, além de corredores de ônibus, está em parte limitado pelas disposições da Lei de Parcelamento, Uso e Ocupação do Solo vigente, estabelecendo parâmetros majoritariamente restritivos à transformação e adensamento. </p>
					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/jockey/Grafico-1.gif'),
						caption: 'Gráfico 1 - Projeção Populacional - Distritos Municipais',
						fonte: 'IBGE, 2010. Elaboração: SP Urbanismo'
					}"></Imagem>
					<p>As densidades populacionais das ZODs que compõem a AID são homogêneas e consideradas baixas, da ordem de até 50 habitantes/ha, refletindo os padrões correspondentes à ocupação predominante de perfil residencial horizontal unifamiliar de alta renda.</p>
					<p>Considerando os distritos, as densidades do Morumbi e Alto de Pinheiros refletem o quadro descrito para a AID, com densidades baixas, da ordem de 50 habitantes/ha. Nos demais distritos, onde há maior diversidade dos padrões de ocupação vertical e horizontal e maior diversidades entre usos residenciais e não residenciais, as densidades predominantes variam entre 50 e 200 hab/ha. Densidades acima de 200 hab/ha podem ser observadas em determinadas regiões dos distritos da Vila Sônia, Pinheiros e Itaim Bibi. Já as densidades domiciliares nos distritos da AII são pouco menores que a média da cidade (3,15 pes/dom), variando entre 2,36 pessoas/domicílio no Itaim Bibi e 3,13 pessoas/domicílio na Vila Sônia.</p>
					<p>Constata-se que o distrito Morumbi, onde se localiza o Hipódromo de Cidade Jardim, é, em suas características econômicas e populacionais, mais semelhante aos distritos vizinhos da margem oposta do Rio Pinheiros do que de os outros distritos sob jurisdição da Subprefeitura do Butantã - Butantã, Raposo Tavares, Rio Pequeno e Vila Sônia.</p>

					<p class="substitua-me">Mapa 5 - Densidade Demográfica (hab/ha) Fonte: IBGE, 2010. Elaboração: SP-Urbanismo</p>

					<div class="tabela">
						<table>
							<tr>
								<th colspan="8">Tabela 1 - Domicílios Segundo Moradores por Dormitório.</th>
							</tr>
							<tr>
								<th rowspan="2"></th>
								<th rowspan="2">Total*</th>
								<th colspan="6">Moradores por domicílio (%)</th>
							</tr>
							<tr>
								<th>Até 1</th>
								<th>1 a 2</th>
								<th>2 a 3</th>
								<th>3 a 4</th>
								<th>4 a 5</th>
								<th>>5</th>
							</tr>
							<tr>
								<th>Município de São Paulo</th>
								<td>3.573.509</td>
								<td>33,73</td>
								<td>44,46</td>
								<td>13,92</td>
								<td>5,06</td>
								<td>1,80</td>
								<td>1,03</td>
							</tr>
							<tr>
								<td>Butantã</td>
								<td>18.477</td>
								<td>53,17</td>
								<td>41,53</td>
								<td>4,11</td>
								<td>0,93</td>
								<td>0,07</td>
								<td>0,19</td>
							</tr>
							<tr>
								<td>Morumbi</td>
								<td>15.428</td>
								<td>47,59</td>
								<td>44,38</td>
								<td>4,53</td>
								<td>1,82</td>
								<td>0,91</td>
								<td>0,76</td>
							</tr>
							<tr>
								<td>Raposo Tavares</td>
								<td>29.866</td>
								<td>28,17</td>
								<td>47,27</td>
								<td>16,63</td>
								<td>5,14</td>
								<td>1,71</td>
								<td>1,07</td>
							</tr>
							<tr>
								<td>Rio Pequeno</td>
								<td>37.401</td>
								<td>35,62</td>
								<td>45,85</td>
								<td>11,66</td>
								<td>4,31</td>
								<td>1,30</td>
								<td>1,26</td>
							</tr>
							<tr>
								<td>Vila Sônia</td>
								<td>34.577</td>
								<td>41,67</td>
								<td>43,09</td>
								<td>8,67</td>
								<td>3,83</td>
								<td>1,55</td>
								<td>1,19</td>
							</tr>
							<tr>
								<td>Alto de Pinheiros</td>
								<td>15.408</td>
								<td>61,65</td>
								<td>33,92</td>
								<td>3,22</td>
								<td>0,76</td>
								<td>0,10</td>
								<td>0,34</td>
							</tr>
							<tr>
								<td>Itaim Bibi</td>
								<td>39.213</td>
								<td>63,48</td>
								<td>33,68</td>
								<td>2,24</td>
								<td>0,43</td>
								<td>0,11</td>
								<td>0,05</td>
							</tr>
							<tr>
								<td>Pinheiros</td>
								<td>27.085</td>
								<td>62,55</td>
								<td>33,30</td>
								<td>3,21</td>
								<td>0,64</td>
								<td>0,29</td>
								<td>0,00</td>
							</tr>
						</table>
					</div>
					<Imagem :dados="{
						tipo: 'default',
						url: imgSrc('arquivos/jockey/Grafico-2.gif'),
						caption: 'Gráfico 2 - Domicílios segundo Moradores Por Dormitório',
						fonte: 'IBGE, 2010. Elaboração: SP Urbanismo'
					}"></Imagem>
					<p>Os distritos sob a Subprefeitura de Pinheiros analisados estão bastante próximos de terem 100% dos domicílios ligados à rede de esgoto, enquanto na Vila Sônia ainda existem 10% de domicílios não ligados à rede. No distrito Morumbi, cerca de 5% dos domicílios não estão ligados à rede de esgoto, o que, nesse quesito, o aproxima dos distritos Raposo Tavares e Rio Pequeno, algo que pode ser explicado pela existência de favelas junto à Marginal Pinheiros, que impactam também a densidade demográfica. Além disso, o Morumbi é o distrito com a maior quantidade de domicílios que recebem energia elétrica de fontes que não a companhia distribuidora.</p>
					<Tabela :dados="{
						titulo: 'Tabela 2 - Domicílios Ligados ou Não à Rede de Esgoto',
						colunas: [
							{ titulo: '' },
							{ titulo: 'Total de domicílios*'},
							{ titulo: '%' },
							{ titulo: 'Ligados à rede' },
							{ titulo: '%' },
							{ titulo: 'Não ligados à rede' },
							{ titulo: '%' }
						],
						linhas: [
							[
								[ { data: 'Município de São Paulo', destaque: true } ],
								[ { data: '3.570.406' } ],
								[ { data: '100' } ],
								[ { data: '3.285.168' } ],
								[ { data: '92,01' } ],
								[ { data: '285.238' } ],
								[ { data: '7,99' } ]
							],
							[
								[ { data: 'Butantã'} ],
								[ { data: '18.477' } ],
								[ { data: '100' } ],
								[ { data: '18.312' } ],
								[ { data: '99,11' } ],
								[ { data: '165' } ],
								[ { data: '0,89' } ]
							],
							[
								[ { data: 'Morumbi' } ],
								[ { data: '15.404' } ],
								[ { data: '100' } ],
								[ { data: '14.577' } ],
								[ { data: '94,63' } ],
								[ { data: '827' } ],
								[ { data: '5,37' } ]
							],
							[
								[ { data: 'Raposo Tavares' } ],
								[ { data: '29.866' } ],
								[ { data: '100' } ],
								[ { data: '28.371' } ],
								[ { data: '95,00' } ],
								[ { data: '1.495' } ],
								[ { data: '5,00' } ]
							],
							[
								[ { data: 'Rio Pequeno' } ],
								[ { data: '37.401' } ],
								[ { data: '100' } ],
								[ { data: '34.571' } ],
								[ { data: '92,43' } ],
								[ { data: '2.830' } ],
								[ { data: '7,57' } ]
							],
							[
								[ { data: 'Vila Sônia' } ],
								[ { data: '34.559' } ],
								[ { data: '100' } ],
								[ { data: '30.913' } ],
								[ { data: '89,45' } ],
								[ { data: '3.646' } ],
								[ { data: '10,55', cor: true } ]
							],
							[
								[ { data: 'Alto de Pinheiros' } ],
								[ { data: '15.408' } ],
								[ { data: '100' } ],
								[ { data: '15.393' } ],
								[ { data: '99,90' } ],
								[ { data: '15' } ],
								[ { data: '0,10' } ]
							],
							[
								[ { data: 'Itaim Bibi' } ],
								[ { data: '39.213' } ],
								[ { data: '100' } ],
								[ { data: '39.150' } ],
								[ { data: '99,84' } ],
								[ { data: '63' } ],
								[ { data: '0,16' } ]
							],
							[
								[ { data: 'Pinheiros' } ],
								[ { data: '27.085' } ],
								[ { data: '100' } ],
								[ { data: '27.066' } ],
								[ { data: '99,93', cor: true } ],
								[ { data: '19' } ],
								[ { data: '0,07' } ]
							],
						],
						fonte: 'IBGE. Censos Demográfico 2010. Elaboração: Secretaria Municipal de Desenvolvimento Urbano (SMDU/Dipro). (*) Dado levantado apenas para os domicílios particulares permanentes.',
						tabelaListrada: true
					}"></Tabela>

					<Tabela :dados="{
						titulo: 'Tabela 3 - Domicílios Servidos Por Rede Elétrica',
						colunas: [
							{ titulo: '' },
							{ titulo: 'Total de domicílios*'},
							{ titulo: '%' },
							{ titulo: 'Sim, de companhia distribuidora' },
							{ titulo: '%' },
							{ titulo: 'Sim, de outras fontes' },
							{ titulo: '%' },
							{ titulo: 'Não existe enegia elétrica' },
							{ titulo: '%' }
						],
						linhas: [
							[
								[ { data: 'Município de São Paulo', destaque: true } ],
								[ { data: '3.573.509' } ],
								[ { data: '100' } ],
								[ { data: '3.529.714' } ],
								[ { data: '98,77' } ],
								[ { data: '42.502' } ],
								[ { data: '1,19' } ],
								[ { data: '293' } ],
								[ { data: '0,04' } ]
							],
							[
								[ { data: 'Butantã' } ],
								[ { data: '18.477' } ],
								[ { data: '100' } ],
								[ { data: '18.459' } ],
								[ { data: '99,90' } ],
								[ { data: '0' } ],
								[ { data: '0' } ],
								[ { data: '18' } ],
								[ { data: '0,10' } ]
							],
							[
								[ { data: 'Morumbi' } ],
								[ { data: '15.428' } ],
								[ { data: '100' } ],
								[ { data: '14.853' } ],
								[ { data: '96,27' } ],
								[ { data: '575' } ],
								[ { data: '3,73', cor: true } ],
								[ { data: '0' } ],
								[ { data: '0' } ]
							],
							[
								[ { data: 'Raposo Tavares' } ],
								[ { data: '29.866' } ],
								[ { data: '100' } ],
								[ { data: '29.201' } ],
								[ { data: '97,77' } ],
								[ { data: '618' } ],
								[ { data: '2,07' } ],
								[ { data: '47' } ],
								[ { data: '0,16', cor: true } ]
							],
							[
								[ { data: 'Rio Pequeno' } ],
								[ { data: '37.401' } ],
								[ { data: '100' } ],
								[ { data: '37.033' } ],
								[ { data: '99,02' } ],
								[ { data: '351' } ],
								[ { data: '0,94' } ],
								[ { data: '17' } ],
								[ { data: '0,05' } ]
							],
							[
								[ { data: 'Vila Sônia' } ],
								[ { data: '34.577' } ],
								[ { data: '100' } ],
								[ { data: '33.543' } ],
								[ { data: '97,01' } ],
								[ { data: '1.033' } ],
								[ { data: '2,99' } ],
								[ { data: '0' } ],
								[ { data: '0' } ]
							],
							[
								[ { data: 'Alto de Pinheiros' } ],
								[ { data: '15.408' } ],
								[ { data: '100' } ],
								[ { data: '15.408' } ],
								[ { data: '100', cor: true } ],
								[ { data: '0' } ],
								[ { data: '0' } ],
								[ { data: '0' } ],
								[ { data: '0' } ]
							],
							[
								[ { data: 'Itaim Bibi' } ],
								[ { data: '39.213' } ],
								[ { data: '100' } ],
								[ { data: '39.193' } ],
								[ { data: '99,95' } ],
								[ { data: '20' } ],
								[ { data: '0,05' } ],
								[ { data: '0' } ],
								[ { data: '0' } ]
							],
							[
								[ { data: 'Pinheiros' } ],
								[ { data: '27.085' } ],
								[ { data: '100' } ],
								[ { data: '27.085' } ],
								[ { data: '100', cor: true } ],
								[ { data: '0' } ],
								[ { data: '0' } ],
								[ { data: '0' } ],
								[ { data: '0' } ]
							],
						],
						fonte: 'IBGE. Censos Demográfico 2010. Elaboração: Secretaria Municipal de Desenvolvimento Urbano (SMDU/Dipro). Disponibilizado no portal Infocidade e reelaborado pela São Paulo Urbanismo. (*) Dado levantado apenas para os domicílios particulares permanentes.',
						tabelaListrada: true
					}"></Tabela>
					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/jockey/Grafico-3.gif'),
						caption: 'Gráfico 3 - Projeção Populacional Por Faixa Etária',
						fonte: 'IBGE, 2010. Elaboração: SP Urbanismo'
					}"></Imagem>
					<p>O levantamento da Taxa de Analfabetismo demonstra que o distrito Morumbi tem uma taxa relativamente alta (2,28%), mas ainda abaixo da taxa municipal (3,16%) e bastante abaixo da taxa do distrito Raposo Tavares (4,16%). Alto de Pinheiros, Itaim Bibi e Pinheiros registram as menores Taxas de Analfabetismo.</p>
					<p>O quadro que retrata o nível de instrução dos habitantes dos distritos em questão mostra que, no Município de São Paulo, apenas 16% da população possui nível Superior Completo, mas, nos distritos sob a Subprefeitura de Pinheiros estudados, este número ultrapassa 50%. No Morumbi, a população que possui nível de instrução Superior Completo é de cerca de 40% e diminui gradativamente conforme percorremos os distritos Butantã, Vila Sônia, Rio Pequeno e Raposo Tavares, no qual menos de 10% da população possui nível Superior Completo.</p>
					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/jockey/Grafico-4.gif'),
						caption: 'Gráfico 4 - Taxa de Analfabetismo',
						fonte: 'IBGE, 2010. Elaboração: SP Urbanismo'
					}"></Imagem>
					<p>Diversos fatores podem explicar essa diferença; a infraestrutura urbana que possibilita fácil acesso à cidade e a proximidade ao campus da Universidade de São Paulo (USP), por exemplo, possivelmente fazem com que, sobretudo, os distritos Alto de Pinheiros, Pinheiros e Butantã, sejam escolhidos por alunos, funcionários, professores e demais pesquisadores que procuram, ao mesmo tempo, morar em uma região qualificada da cidade e morar perto de seus locais de ensino e trabalho. Considerando que o nível de qualificação tende a influenciar nos salários pagos e que a infraestrutura urbana tende a aumentar o valor da terra, pode-se afirmar que há uma coincidência entre áreas com maior número de pessoas com nível Superior Completo e áreas nas quais há maior concentração de renda.</p>

					<Tabela :dados="{
						titulo: 'Tabela 4 - População de 10 Anos ou Mais de Idade, por Nível de Instrução',
						colunas: [
							{ titulo: ' - ' },
							{ titulo: 'Total' },
							{ titulo: 'Sem instrução e fundamental incompleto (%)' },
							{ titulo: 'Fundamental completo e médio incompleto (%)' },
							{ titulo: 'Médio completo e superior incompleto (%)' },
							{ titulo: 'Superior completo (%)' },
							{ titulo: 'Não determinado (%)' }
						],
						linhas: [
							[
								[ { data: 'Município de São Paulo' }],
								[ { data: '9.783.868' }],
								[ { data: '37,64' }],
								[ { data: '18,38' }],
								[ { data: '26,68' }],
								[ { data: '16,07' }],
								[ { data: '1,22' }]
							],
							[
								[ { data: 'Butantã' }],
								[ { data: '49.641' }],
								[ { data: '20,30' }],
								[ { data: '12,46' }],
								[ { data: '27,86' }],
								[ { data: '38,57' }],
								[ { data: '0,81' }]
							],
							[
								[ { data: 'Morumbi' }],
								[ { data: '41.565' }],
								[ { data: '25,97' }],
								[ { data: '10,52' }],
								[ { data: '21,53' }],
								[ { data: '40,97' }],
								[ { data: '1,01' }]
							],
							[
								[ { data: 'Raposo Tavares' }],
								[ { data: '85.488' }],
								[ { data: '39,00' }],
								[ { data: '20,54' }],
								[ { data: '30,14' }],
								[ { data: '9,13' }],
								[ { data: '1,19' }]
							],
							[
								[ { data: 'Rio Pequeno' }],
								[ { data: '103.600' }],
								[ { data: '35,27' }],
								[ { data: '15,46' }],
								[ { data: '26,21' }],
								[ { data: '21,49' }],
								[ { data: '1,57' }]
							],
							[
								[ { data: 'Vila Sônia' }],
								[ { data: '95.370' }],
								[ { data: '32,07' }],
								[ { data: '13,95' }],
								[ { data: '23,48' }],
								[ { data: '29,32' }],
								[ { data: '1,18' }]
							],
							[
								[ { data: 'Alto de Pinheiros' }],
								[ { data: '39.507' }],
								[ { data: '16,21' }],
								[ { data: '10,81' }],
								[ { data: '21,71' }],
								[ { data: '50,79' }],
								[ { data: '0,48' }]
							],
							[
								[ { data: 'Itaim Bibi' }],
								[ { data: '85.008' }],
								[ { data: '12,17' }],
								[ { data: '8,80' }],
								[ { data: '22,78' }],
								[ { data: '55,70' }],
								[ { data: '0,56' }]
							],
							[
								[ { data: 'Pinheiros' }],
								[ { data: '60.263' }],
								[ { data: '15,69' }],
								[ { data: '9,69' }],
								[ { data: '23,47' }],
								[ { data: '50,62' }],
								[ { data: '0,53' }]
							]
						],
						fonte: 'IBGE. Censos Demográfico 2010. Elaboração: Secretaria Municipal de Desenvolvimento Urbano (SMDU/Dipro). Disponibilizado no portal Infocidade e reelaborado pela São Paulo Urbanismo. (*) Dado levantado apenas para os domicílios particulares permanentes.',
						tabelaListrada: true
					}"></Tabela>
					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/jockey/Grafico-5.gif'),
						caption: 'Gráfico 5 - População de 10 Anos ou Mais de Idade, por Nível de Instrução',
						fonte: 'MTE, RAIS, 2016. .Elaboração: SP Urbanismo'
					}"></Imagem>

					<div class="tabela">
						<table >
							<caption>Tabela 5 – Estabelecimentos e empregos formais por setor econômico</caption>
							<thead>
								<tr>
									<th rowspan="2"></th>
									<th colspan="2">Comércio</th>
									<th colspan="2">Serviços</th>
									<th colspan="2">Ind. de Transformação</th>
									<th colspan="2">Construção Civil</th>
								</tr>
								<tr>
									<th>Estab.</th>
									<th>Empregos</th>
									<th>Estab.</th>
									<th>Empregos</th>
									<th>Estab.</th>
									<th>Empregos</th>
									<th>Estab.</th>
									<th>Empregos</th>
								</tr>
							</thead>
							<tbody>
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
									<td>Butantã</td>
									<td>819</td>
									<td>9.657</td>
									<td>1.244</td>
									<td>33.432</td>
									<td>154</td>
									<td>3.149</td>
									<td>133</td>
									<td>6.532</td>
								</tr>
								<tr>
									<td>Morumbi</td>
									<td>443</td>
									<td>7.426</td>
									<td>1.232</td>
									<td>36.849</td>
									<td>86</td>
									<td>2.607</td>
									<td>46</td>
									<td>3.619</td>
								</tr>
								<tr>
									<td>Raposo Tavares</td>
									<td>463</td>
									<td>4.446</td>
									<td>397</td>
									<td>5.849</td>
									<td>150</td>
									<td>4.324</td>
									<td>94</td>
									<td>1.638</td>
								</tr>
								<tr>
									<td>Rio Pequeno</td>
									<td>713</td>
									<td>5.986</td>
									<td>789</td>
									<td>7.249</td>
									<td>130</td>
									<td>1.819</td>
									<td>92</td>
									<td>1.224</td>
								</tr>
								<tr>
									<td>Vila Sônia</td>
									<td>953</td>
									<td>8.450</td>
									<td>1.241</td>
									<td>17.559</td>
									<td>198</td>
									<td>2.143</td>
									<td>138</td>
									<td>6.794</td>
								</tr>
								<tr>
									<td>Alto de Pinheiros</td>
									<td>458</td>
									<td>5.014</td>
									<td>1.016</td>
									<td>14.815</td>
									<td>102</td>
									<td>2.747</td>
									<td>50</td>
									<td>2.887</td>
								</tr>
								<tr>
									<td>Itaim Bibi</td>
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
									<td>Pinheiros</td>
									<td>2.131</td>
									<td>21.679</td>
									<td>5.498</td>
									<td>81.637</td>
									<td>499</td>
									<td>9.462</td>
									<td>202</td>
									<td>9.239</td>
								</tr>
							</tbody>
						</table>
					</div>
					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/jockey/Grafico-6.gif'),
						caption: 'Gráfico 6 – Estabelecimentos formais por setor',
						fonte: 'MTE, RAIS, 2016. .Elaboração: SP Urbanismo'
					}"></Imagem>

					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/jockey/Grafico-7.gif'),
						caption: 'Gráfico 7 – Empregos formais por setor',
						fonte: 'MTE, RAIS, 2016. .Elaboração: SP Urbanismo'
					}"></Imagem>

					<p>Os distritos menos postos de trabalho assim o são por motivos diferentes. No caso de Morumbi e Alto de Pinheiros, a predominância de zonas residenciais se relaciona às tipologias de ocupação predominantes nestes distritos, marcadas por residências unifamiliares baixas em terrenos de grandes dimensões, que “empurram” a maioria dos postos de trabalho para os corredores comerciais, restando nos “miolos” dos bairros apenas postos de trabalho relacionados a serviços domésticos. No Morumbi, a quantidade significativamente maior de empregos em Serviços pode ser um indicativo desse fenômeno, enquanto no Butantã a quantidade relativamente grande de empregos em Serviços possivelmente encontra relações com a presença do campus da USP.</p>
					<p>No Morumbi e em Pinheiros, a diferença entre o número de postos de trabalho ocupados por homens e por mulheres é significativamente menor do que em outros distritos, não chega a 5% dos postos de trabalho, enquanto na Vila Sônia, o distrito mais desigual neste quesito entre os estudados, a diferença é de quase 30%. O Morumbi é o único distrito no qual há mais mulheres do que homens empregados, contudo, a diferença é pequena, cerca de 1%. No âmbito da distribuição dos postos de trabalho segundo raça, em todos os distritos observa-se predominância de postos de trabalho ocupados por pessoas brancas, seguidos por aqueles ocupados por pessoas pardas. Nota-se, porém, que, levando em consideração os distritos estudados, a diferença entre pessoas pardas e pessoas brancas é menor na Vila Sônia e maior no Morumbi.</p>
					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/jockey/Grafico-8.gif'),
						caption: 'Gráfico 8 – Empregos Formais, exclusive Administração Pública, Segundo Gênero',
						fonte: 'MTE, RAIS, 2016. .Elaboração: SP Urbanismo'
					}"></Imagem>

					<p class="substitua-me">Mapa 6 - Renda Média da População (Salários Mínimos). Fonte: MTE, RAIS, 2016. Elaboração: SP Urbanismo</p>

					<p class="substitua-me">Mapa 7 - Renda Média da População (Salários Mínimos). Fonte: IBGE. Elaboração: SP-Urbanismo</p>

					<p class="substitua-me">Tabela 6 - Empregos Formais, Exclusive Administração Pública, Segundo Faixa Etária. Fonte: MTE, RAIS, 2016. .Elaboração: SP Urbanismo.</p>

					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/jockey/Grafico-9.gif'),
						caption: 'Gráfico 9  – Empregos Formais, Exclusive Administração Pública, Segundo Faixa Etária.',
						fonte: 'MTE, RAIS, 2016. .Elaboração: SP Urbanismo'
					}"></Imagem>

					<p class="substitua-me">Tabela 7 – Empregos Formais, Exclusive Administração Pública, Segundo Faixas de Rendimento. Fonte: MTE, RAIS, 2016. .Elaboração: SP Urbanismo.</p>

					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/jockey/Grafico-10.gif'),
						caption: 'Gráfico 10 – Empregos Formais, Exclusive Administração Pública, Segundo Faixas de Rendimento',
						fonte: 'MTE, RAIS, 2016. Elaboração: SP Urbanismo'
					}"></Imagem>


					<p class="substitua-me">Tabela 8 – Domicílios Particulares Permanentes, por Classes de Rendimento Nominal Mensal Domiciliar. Fonte: IBGE. Elaboração: SP-Urbanismo</p>

					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/jockey/Grafico-11.gif'),
						caption: 'Gráfico 11 – Domicílios Particulares Permanentes, por Classes de Rendimento Nominal Mensal Domiciliar',
						fonte: 'Fonte: IBGE. Elaboração: SP-Urbanismo'
					}"></Imagem>
					<p>Conforme dados da Relação Anual de Informações Sociais  do Ministério do Trabalho e Emprego - RAIS 2016, observamos que em todos os distritos, predominava a faixa de remuneração entre 1 e 5 salários mínimos, sendo que nos distritos Raposo Tavares, Rio Pequeno e Vila Sônia, a maior concentração está na faixa que vai de 1 a 2 salários mínimos e nos distritos Butantã, Morumbi e Pinheiros, na faixa que vai de 2 a 5 salários mínimos. Todavia, o Censo Demográfico 2010 demonstrou que a distribuição dos domicílios por renda não coincide com a remuneração dos empregos no território. Nos distritos Raposo Tavares e Rio Pequeno, existe uma concentração de domicílios nos quais a renda está entre 2 e 5 salários mínimos. No caso do Butantã e da Vila Sônia, os domicílios estão distribuídos de maneira menos absoluta, ocupando faixas a partir de 5 salários mínimos. Isso, posto ao lado da distribuição dos postos de trabalho por faixas de rendimento, nos mostra que, nesses distritos, uma parcela significativa dos postos de trabalho são ocupados por pessoas que não residem ali e, por outro lado, os residentes desses distritos trabalham em outras regiões.</p>
					<p>No caso do Morumbi, Alto de Pinheiros, Itaim Bibi e Pinheiros, a diferença entre os salários pagos pelos empregos e as rendas das famílias que residem naquela região é altamente significativa. No Morumbi, por exemplo, cerca de 65% dos postos de trabalho remuneram na faixa de 1 a 5 salários mínimos, em cerca de 51% dos domicílios registra-se renda superior a 10 salários mínimos, sendo 17% entre 10 a 20 salários mínimos, e 34% acima de 20 salários mínimos. Considerando a predominância do uso residencial neste distrito, podemos inferir que uma parte significativa desses postos de trabalho está nos serviços domésticos, isto é, são faxineiras, jardineiros, motoristas, agentes de segurança privada, etc.</p>
					<p>Em suma, o Jockey Club está no centro de uma área altamente privilegiada da cidade, com elevados padrões de renda e escolaridade, dentre outros indicadores, mas está próxima de áreas cujos indicadores revelam realidades socioeconômicas distintas.</p>
				</section>
				<section>
					<h3 class="titulo" indent="2">Uso do solo, patrimônio histórico e mercado imobiliário</h3>
					<p>Uma análise visual do Cadastro Territorial Predial de Conservação e Limpeza (Mapa 7) permite a identificação dos grandes contrastes quanto ao uso do solo nas áreas de estudo. Tanto na AID quanto na AII há uma presença marcante de quadras ocupadas por uso residencial horizontal de médio ou alto padrão, em especial nos distritos do Morumbi, Alto de Pinheiros e Butantã. </p>
					<p>O uso residencial vertical de médio ou alto padrão também tem participação relevante na AII, especialmente no Butantã, Vila Sônia, Pinheiros e Itaim Bibi. Enquanto no Butantã o número de domicílios em apartamentos corresponde a 38% do total, mais da metade dos domicílios no Morumbi e em Alto de Pinheiros estão em apartamentos e, em Pinheiros e no Itaim Bibi, esse número chega a 77%.</p>
					<p>Em Pinheiros e no Itaim Bibi, que se caracterizam por maior mescla de atividades, adensamento e verticalização, também se destacam os usos de comércio e serviços e o residencial + comércio e serviços.</p>
					<p>Junto ao eixo do Rio Pinheiros, também se destacam os grandes equipamentos presentes na AII: a Cidade Universitária da Universidade de São Paulo, o Parque Villa Lobos e o Hipódromo de Cidade Jardim, objeto deste diagnóstico.</p>
					<p>Em relação ao patrimônio, como reflexo da relevância da AII no desenvolvimento histórico da cidade, existem diversos imóveis e monumentos identificados e protegidos pelas instâncias de preservação, principalmente nos distritos do Morumbi, Butantã, Pinheiros e Itaim Bibi. Há ainda ocorrência de sítios arqueológicos em todos os distritos da AII, exceto no Alto de Pinheiros.</p>

					<p class="substitua-me">Tabela 9 – Domicílio segundo Tipologias Residenciais Município de São Paulo. Fonte: IBGE,2010. Elaboração: SP Urbanismo.</p>

					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/jockey/Grafico-12.gif'),
						caption: 'Gráfico 12 – Domicílios segundo Tipologias Residenciais Município de São Paulo',
						fonte: 'Fonte: IBGE. Elaboração: SP-Urbanismo'
					}"></Imagem>

					<p>Em relação à produção imobiliária, conforme dados da Embraesp de 1985 a 2013, é possível identificar no Mapa 10 uma produção robusta e distribuída por praticamente toda a AII, com exceção das áreas de perfil estritamente residencial horizontal, com regulação restrita para esta atividade. Como em toda a cidade, há predomínio absoluto de empreendimentos residenciais, com maior concentração nas regiões da Vila Madalena, Itaim Bibi, Vila Olímpia, Morumbi e Real Parque. Os empreendimentos não residenciais tem participação expressiva da região, em relação ao total da cidade, considerando principalmente os lançamentos localizados dentro das operações urbanas consorciadas Faria Lima e Águas Espraiadas, nas regiões de Pinheiros, Itaim Bibi e Vila Olímpia. </p>

					<p class="substitua-me">Mapa 8 - Uso Predominante do Solo. Fonte: TPCL Elaboração: SP-Urbanismo</p>

					<p class="substitua-me">Mapa 9 - Patrimônios Identificados. Fonte: GeoSampa. Elaboração: SP-Urbanismo.</p>

					<p class="substitua-me">Mapa 10 - Gabarito das Edificações. Fonte: GeoSampa. Elaboração: SP-Urbanismo.</p>

					<p class="substitua-me">Mapa 11 - Lançamentos Imobiliários 1985-2013. Fonte: Embraesp. Elaboração: SP-Urbanismo</p>
				</section>

				<section>
					<h3 class="titulo" indent="2">Vulnerabilidade social e habitação</h3>
					<p>A vulnerabilidade social no entorno imediato do PIU Jockey Club é muito baixa. Para além da baixa densidade demográfica observada, resultante de um zoneamento historicamente restritivo e de alto padrão, as imediações do equipamento não apresentam assentamentos precários.</p>
					<p>Para a análise mais ampla da vulnerabilidade social do território de influência socioeconômica do PIU Jockey Club, foi analisado perímetro que abrange os distritos Butantã, Morumbi e Vila Sônia, da Subprefeitura Butantã e os distritos Pinheiros, Alto de Pinheiros e Itaim Bibi, da Subprefeitura Pinheiros. De maneira geral, a área analisada é marcada pela baixa densidade populacional, com a presença das maiores concentrações populacionais nos territórios que apresentam precariedade habitacional e urbana. Também conta com algumas áreas demarcadas como Zonas Especiais de Interesse social – ZEIS pelo Plano Diretor Estratégico – PDE (Lei Municipal nº 16.050/2014) e Zoneamento (Lei Municipal nº 16.402/2016).</p>
					<p>Dentre a predominância das vulnerabilidades baixíssima e muito baixa, há focos de vulnerabilidade social muito alta, que corresponde aos assentamentos precários cadastrados por SEHAB. Isso ocorre porque a precariedade habitacional e a vulnerabilidade social muito alta se sobrepõem no território. Os assentamentos precários são caracterizados pela presença de população de baixa renda e baixa escolaridade, que encontra nesses territórios informais e carentes de infraestrutura urbana seu lugar para residir.</p>
					<p>Cerca de 4% das favelas da cidade estão na Subprefeitura do Butantã, distribuídas, sobretudo pelos distritos Raposo Tavares, Rio Pequeno e, em menor número, Vila Sônia onde, por outro lado, está o maior número de domicílios em favelas. O distrito Morumbi também registra uma quantidade relativamente alta de domicílios em favelas. No distrito Pinheiros, por outro lado, estão menos de 0,2% das favelas do município e Alto de Pinheiros não registra favelas. 
					O Jardim Panorama é o assentamento precário mais próximo do Jockey Club, e trata-se de assentamento precário antigo, cuja ocupação data de 1957 e que, segundo as informações coletadas pelo HabitaSAMPA, conta com 576 domicílios.</p>

					<p class="substitua-me">Mapa 12 - Índice Paulista de Vulnerabilidade Social 2010. Fonte: Fundação SEADE. Elaboração: SP-Urbanismo</p>

					<p class="substitua-me">Tabela 10 - Favelas Próximas a Área de Intervenção. Fonte: HabitaSAMPA, 2019. Elaboração: SP Urbanismo.</p>

					<p>Cabe destacar que as favelas Panorama, Real Parque e São Paulo Antigo pertencem ao perímetro de Ação do Renova SP – Pirajussara 8 e as duas primeiras favelas, juntamente com a favela Coliseu, compõem o programa de intervenções da Operação Urbana Consorciada Faria Lima.</p>

					<p>O distrito Morumbi, no qual se localiza o Jockey Club, abrange parte do complexo da Paraisópolis, contendo as favelas Porto Seguro (612 domicílios), José Dias (20 domicílios) e Leandro Teixeira (10 domicílios). Conta ainda com quatro loteamentos irregulares com renda familiar mensal de seis salários mínimos, denominados Paineiras do Morumbi, Jardim Evereste – Gl. 2, Vila Progredior e Real Parque,  totalizando 855 lotes. Há também um conjunto habitacional do programa Minha Casa Minha Vida sendo promovido em ZEIS 5 pelo mercado privado, denominado Jd. Guedala, com 1098 unidades habitacionais, sendo 600 UHIS 2, 300 UHMP e 198 UH R2V.</p>
					<p>O distrito do Butantã contém três assentamentos precários, todos localizados fora do perímetro de abrangência do PIU Arco Pinheiros: favela Balbino Miranda (45 domicílios), São José/ Jardim Pinheiros (191 domicílios) e Pedra (23 domicílios).
					O distrito Vila Sônia apresenta precariedade habitacional nas seguintes favelas: Jockeizinho I (57 domicílios), Antônio do Vale (4 domicílios), Favela do Gelo (350 domicílios), Jardim Jaqueline (3392 domicílios), Monte Kemel (60 domicílios), Ferrer Bassa (3 domicílios), Santo Américo (3 domicílios), Jardim Das Vertentes (188 domicílios), Intercontinental (50 domicílios), Francisco Preto (20 domicílios), Dias Vieira (102 domicílios), Jardim Colombo (3244 domicílios), Vale da Esperança (807 domicílios), Viela da Paz (1328 domicílios). Totaliza 9.608 domicílios em favela, além de 5.729 famílias removidas e atualmente atendidas pelo Programa Auxílio Aluguel. Conta ainda com quatro núcloes urbanizados: Jockeizinho II (36 domicílios), Franco Alfano (7 domicílios), Monte Kemel II (22 domicílios) e Domingos Somões (4 domicílios).</p>
					<p>Não há cadastro de assentamentos precários no distrito Alto de Pinheiros, subprefeitura Pinheiros. Há apenas registro de um loteamento irregular com renda maior do que seis salários mínimos, denominado Vila Madalena, que conta com 47 lotes.
					O distrito Pinheiros, localizado na subprefeitura de mesmo nome, apresenta um assentamento precário, a favela Fidalga I, que conta com 12 domicílios, segundo o HabitaSAMPA. Há também um loteamento irregular com renda maior do que seis salários mínimos, denominado AC. R. D., que conta com 63 lotes.</p>
					<p>O distrito Itaim Bibi, para além da favela Coliseu, conta ainda com os seguintes assentamentos precários, localizados ao longo da Av. Professor Roberto Marinho, e contidas no perímetro da Operação Urbana Consorciada Águas Espraiadas:</p>
					<ul>
						<li>Favela Bartolomeu Feio, ocupada em 2004, com 20 domicílios;</li>
						<li>Favela Gabriel de Lara coupada em 2004, com 34 domicílios;</li>
						<li>Favela Niágara, ocupada em 1980, com 35 domicílios;</li>
						<li>Núcleo urbanizado Florida 1968;</li>
						<li>Conjunto habitacional Jardim Edith e Jardim Edith II, empreendido com recursos da OUCAE.</li>
					</ul>
					<p>Há ainda loteamento irregular com renda maior do que seis salários mínimos, denominado Jardim Edith, que conta com 406 lotes.</p>
					<p>Portanto, do ponto de vista da vulnerabilidade social, a subprefeitura de Pinheiros apresenta poucos assentamentos precários, os quais se encontram em perímetros de adesão de operações urbanas consorciadas que contam com recursos da venda de Certificado de Potencial Construtivo Adicional – CEPAC.</p>

					<p class="substitua-me">Mapa 13 - Precariedade Habitacional. Fonte: GeoSampa. Elaboração: SP-Urbanismo.</p>

					<p>Para além da precariedade urbanística e fundiária, há os loteamentos irregulares, que apresentam precariedade fundiária, mas não necessariamente urbanística e nos quais, há a possibilidade de garantir a segurança de posse por meio de ações de regularização fundiária. As ações públicas abrangem somente os loteamentos com renda familiar mensal até seis salários mínimos. São 1.774 lotes nessas condições, além de parte do loteamento do Complexo Paraísopolis. Há ainda outros 17 loteamentos que contém 1.835 lotes irregulares, mas como apresentam renda familiar mensal superior a seis salários mínimos.</p>

					<p>Quanto aos conjuntos habitacionais entregues em diversas gestões e programas sociais anteriores, que totalizam na região 3.166 unidades, destaca-se que grande parte deste contingente foi financiado por projetos urbanos, quais sejam, as operações urbanas consorciadas Faria Lima e Águas Espraiadas. Vale reassaltar que, nesses projetos, não foram realizadas ações de consolidação da população residente nos perímetros de abrangência por meio de ações de urbanização de favelas, mas as mesmas foram substituídas por conjuntos habitacionais de mesmo nome. Essa análise vale para os conjuntos do Real Parque e Jardim Edith. Ainda sobre a produção de habitação oscial na região, existem 616 unidades em obras e 3.860 unidades previstas, em fase de projeto e licenciamento.</p>

					<p>Da mesma forma que há pouca precariedade habitacional, há também pouca reserva de terra para a provisão de moradia de 	interesse social no entorno imediato do PIU Jockey  Club. As ZEIS são territórios reservados para a habitação de interesse social e de mercado popular, segundo os critérios e proporcionalidades definidos pelo PDE. A ZEIS de vazio mais próxima do Jockey Club, localizada no distrito Butantã. Trata-se de ZEIS-5 de aproximadamente 17 mil m², localizada na Av. Vital Brasil. As demais áreas demarcadas como ZEIS 2, 3 ou 5 encontram-se dispersas no território, em pequena quantidade e área, à exceção da ZEIS 3 do Jd. Panorama, que já conta com empreendimentos habitacionais em andamento.</p>
				</section>
				<section>
					<h3 class="titulo" indent="2">Ordenamento territorial e parâmetros de ocupação</h3>
					<p>Conforme disposto no Plano Diretor Estratégico do Município de São Paulo – PDE (Lei nº 16.050/2014), o Hipódromo de Cidade Jardim está contido na Macroárea de Estruturação Metropolitana (MEM), mais especificamente no setor Orla Ferroviária e Fluvial, onde estão previstos os seguintes objetivos específicos (art. 12, § 1º):</p>

					<p>I - transformações estruturais orientadas para o maior aproveitamento da terra urbana com o aumento nas densidades construtiva e demográfica e implantação de novas atividades econômicas de abrangência metropolitana, atendendo a critérios de sustentabilidade e garantindo a proteção do patrimônio arquitetônico e cultural, em especial o ferroviário e o industrial;</p>
					<p>II - recuperação da qualidade dos sistemas ambientais existentes, especialmente dos rios, córregos e áreas vegetadas, articulando-os adequadamente com os sistemas urbanos, principalmente de drenagem, saneamento básico e mobilidade, com especial atenção à recuperação das planícies fluviais e mitigação das ilhas de calor;</p>
					<p>III - manutenção da população moradora, inclusive através da promoção da urbanização e regularização fundiária de assentamentos precários e irregulares ocupados pela população de baixa renda com oferta adequada de serviços, equipamentos e infraestruturas urbanas;</p>
					<p>IV - produção de HIS e HMP;</p>
					<p>V - incremento e qualificação da oferta de diferentes sistemas de transporte coletivo, articulando-os aos modos não motorizados de transporte e promovendo melhorias na qualidade urbana e ambiental do entorno;</p>
					<p>VI - regulação da produção imobiliária para captura, pela municipalidade, da valorização imobiliária decorrente de investimentos públicos, para financiamento de melhorias e benefícios públicos;</p>
					<p>VII - redefinição dos parâmetros de uso e ocupação do solo para qualificação dos espaços públicos e da paisagem urbana; </p>
					<p>VIII - minimização dos problemas das áreas com riscos geológico-geotécnicos e de inundações e solos contaminados, acompanhada da prevenção do surgimento de novas situações de vulnerabilidade; </p>
					<p>IX - compatibilização de usos e tipologias de parcelamento do solo urbano com as condicionantes geológico-geotécnicas e hidrológicas; </p>
					<p>X - recuperação, preservação e proteção de imóveis relacionados ao patrimônio industrial e ferroviário, bem como locais de referência da memória operária, incentivando usos e atividades compatíveis com sua preservação; </p>
					<p>XI - manutenção e estímulo ao emprego industrial e atividades econômicas de abrangência metropolitana.
					O Jockey Club está também próximo a áreas estratégicas para o desenvolvimento urbano da cidade, como a Operação Urbana Consorciada Faria Lima, a Operação Urbana Consorciada Água Espraiada, e o PIU Arco Pinheiros. </p>
					<p>
					Além disso, é demarcado pela LPUOS - Lei de Parcelamento, Uso e Ocupação do Solo (Lei nº 16.402/2016) – como uma Zona de Ocupação Especial (ZOE), conforme texto da lei:</p>
					<blockquote><p><i>Art. 15. As Zonas de Ocupação Especial (ZOE) são porções do território que, por suas características específicas, necessitem de disciplina especial de parcelamento, uso e ocupação do solo.</i></p>
					<p><strong>§ 1º Os perímetros de ZOE terão parâmetros específicos de parcelamento, uso e ocupação do solo adequados às suas especificidades e definidos por Projeto de Intervenção Urbana, aprovado por decreto, observados os coeficientes de aproveitamento estabelecidos por macroárea conforme Quadro 2A da Lei nº 16.050, de 31 de julho de 2014 – PDE.</strong></p>
					<p class="fonte">Lei nº 16.402/2016, grifo nosso</p>
					</blockquote>
					
					<p class="substitua-me">Mapa 14 – Áreas de desenvolvimento estratégico do PDE. Fonte: GeoSampa. Elaboração: SP-Urbanismo.</p>

					<p class="substitua-me">Mapa 15 - Zoneamento. Fonte: GeoSampa. Elaboração: SP-Urbanismo.</p>

					<p>A partir das diretrizes de desenvolvimento urbano expressas no PDE, a Lei de Zoneamento (LPUOS – Lei nº16.402/2016) demarcou na AII um mosaico bem heterogêneo de zonas de uso. Os grandes equipamentos, como a Cidade Universitária e o Jockey Club estão classificados como ZOEs (Zonas de Ocupação Especial). Os parques e praças estão classificados como ZEPAMs (zonas especiais de preservação e recuperação ambiental). As regiões caracterizadas por bairros jardins foram classificadas como ZERs (zonas exclusivamente residenciais) e ZCor (zonas corredores de serviços). Os eixos de estruturação da transformação urbana, áreas prioritárias para a transformação e adensamento associadas à infraestrutura de transportes, foram classificados como ZEU (zonas eixo de estruturação da transformação urbana). As quadras sob operações urbanas em vigor, assim como os miolos dos bairros de perfil misto foram classificadas como ZM (Zonas mistas). As áreas com perfil misto e predomínio não residencial foram classificadas como ZC (zonas de centralidade). As áreas identificadas como de ocupação residencial informal ou prioritárias para o atendimento à demanda habitacional foram classificadas como ZEIS (zonas especiais de interesse social).</p>
					<p> No Morumbi, 51% da área considerada pelo Zoneamento é demarcada como ZER, nas quais se aplicam restrições a qualquer uso residencial vertical, dadas pelo Zoneamento, e 10% das quadras ficais é demarcada como Zona Corredor (ZCOR), nas quais também incidem restrições à verticalização. Por outro lado, há áreas relativamente pequenas demarcadas como ZC, nas quais provavelmente estão os quase 53% de domicílios em apartamentos, junto às favelas que existem nesse distrito. Isso é um indicativo de que, nas regiões demarcadas como ZER, os lotes são maiores e são relativamente pouco ocupados, isto é, têm uma Taxa de Ocupação (TO) relativamente baixa. </p>
					<p>Fenômeno similar é observado no distrito Alto de Pinheiros, no qual 52% da área considerada pelo zoneamento é demarcada como ZER ou ZPR e 15% da área é ZEPAM; Os outros 32% da área do distrito, onde é possível construir prédios em apartamentos, concentram 53% dos domicílios.</p>
					<p>Para fins de comparação, observamos que, atualmente, incidem sobre o distrito Butantã diversas zonas de uso. Além da Zona de Ocupação Especial (ZOE) demarcada sobre o campus da USP, há áreas demarcadas como Zona Eixo de Estruturação da Transformação Urbana (ZEU) no entorno da estação Butantã de metrô. Há áreas significativas de Zonas Exclusivamente Residenciais (ZER) e Zonas Predominantemente Residenciais (ZPR), com Coeficiente de aproveitamento (CA) máximo de uma vez a área do lote, e áreas demarcadas como Zona Mista (ZM) e Zona Centralidade (ZC) em eixos viários importantes, com CA máximo de 2 vezes a área do terreno, e nas quais historicamente se concentram os lançamentos imobiliários do distrito, a maioria deles residencial. </p>

					<p class="substitua-me">Tabela 11 - Áreas Ocupadas Por Tipo de Zona em Quadras Fiscais (m²). Fonte: Geosampa. Elaboração: SP Urbanismo.</p>
				</section>

				<section>
					<h3 class="titulo" indent="2">Equipamentos públicos</h3>
					<p>A distribuição da rede de equipamentos públicos na AII reflete os padrões de ocupação descritos anteriormente. Os equipamentos de educação representam a rede com distribuição mais capilarizada no território e estão mais próximas a áreas com perfil predominantemente residencial, com destaque para os distritos do Butantã, Vila Sônia e Itaim Bibi. </p>
					<p>Já os equipamentos de cultura, onde também estão inclusos determinadas categorias de casas de shows e bares, estão localizados em áreas com perfil predominante não residencial ou misto, com características de centralidade, como Vila Madalena e Itaim Bibi. Nesta categoria merece destaque a Cidade Universitária da USP, onde se localizam diversos museus.</p>

					<p>As demais redes de equipamentos apresentam distribuição mais discreta no território da AII, relacionando-se ora com regiões de maior vulnerabilidade social ou demandas específicas para atendimento de segmentos vulneráveis da população, ora com localizações estratégicas quanto à acessibilidade por transporte público ou conectadas ao sistema viário estrutural. As redes de esportes e assistência social se vinculam principalmente ao primeiro caso, enquanto que as redes de saúde e abastecimento mais com o segundo. </p>
					<p>A Vila Sônia é o distrito da AII que conta com maior número de equipamentos de esportes e assistência social. Os equipamentos de saúde, muitos de grande porte, estão presentes em maior número em Pinheiros, Itaim Bibi, Butantã e Morumbi.</p>
					<p class="substitua-me">Mapa 16 – Equipamentos Públicos. Fonte: GeoSampa. Elaboração: SP-Urbanismo</p>
				</section>
				<section>
					<h3 class="titulo" indent="2">Mobilidade</h3>
					<p>A região onde se situa o Hipódromo de Cidade Jardim possui uma robusta rede de mobilidade composta por diversos modais.</p>

					<p>Em relação ao sistema viário, a rede estrutural demarca fortemente as dinâmicas de mobilidade da região, pois conta com algumas das mais importantes e carregadas vias da cidade, muitas delas de trânsito rápido, que conectam a cidade com os municípios vizinhos da região oeste e a duas importantes rodovias, Raposo Tavares e Régis Bittencourt, que possibilitam ligações com as regiões sudoeste e oeste do estado e com os estados da região sul do país.</p>

					<p>A Av. das Nações Unidas (Marginal Pinheiros), é uma via estrutural de primeira categoria, que se constitui como o principal eixo viário da região oeste da metrópole, conectando a Marginal Tietê e a Rodovia Pres. Castello Branco, na região noroeste, à região sul da cidade, na região de Santo Amaro e dividindo as duas subprefeituras da AII. A subprefeitura do Butantã possui uma rede estrutural e coletora menos capilarizada que a subprefeitura de Pinheiros, com destaque para as avenidas Prof. Francisco Morato, Corifeu de Azevedo Marques, Eliseu de Almeida e Vital Brasil. A subprefeitura de Pinheiros é demarcada pelo eixo longitudinal norte-sul composto pelas avenidas Prof. Fonseca Rodrigues, Pedroso de Morais e Faria Lima e pela Av. dos Bandeirantes, que conecta a Marginal do Rio Pinheiros às rodovias Imigrantes e Anchieta. Há ainda importantes eixos na direção leste-oeste, que conectam as duas subprefeituras, como as avenidas Rebouças, Eusébio Matoso, Cidade Jardim, Juscelino Kubitschek, Roberto Marinho, Morumbi e Prof. Vicente Rao.  
					O Hipódromo de Cidade Jardim tem acesso direto pela Av. Lineu de Paula Machado, situando-se entre esta e a Av. das Nações Unidas.</p>

					<p>A rede de transporte público também é robusta, contando com a linha ferroviária 9 – Esmeralda da CPTM, a linha 4-amarela do metrô e o corredor de ônibus Rebouças – Eusébio Matoso - Francisco Morato, onde operam linhas municipais da SPTrans e metropolitanas da EMTU. O Hipódromo de Cidade Jardim está próximo deste corredor e das estações Cidade Jardim e Hebraica – Rebouças da CPTM e da estação Butantã do metrô.</p>

					<p>Ainda que seja uma região privilegiada no que diz respeito ao transporte motorizado individual e ao transporte público, observamos que a microacessibilidade de pedestres ao Jockey Club é pouco favorecida, considerando o grande volume de tráfego, os tempos de travessias semafóricas, as características das calçadas, sinalizações e iluminação existentes. Isso significa que o pedestre possivelmente enfrenta dificuldades para chegar ao Jockey Club de um ponto de parada do transporte público, especialmente das estações de trem, que estão na margem oposta do Rio Pinheiros, cuja transposição, para pedestres, é pouco facilitada nas pontes Eusébio Matoso e Engenheiro Roberto Rossi Zuccolo, e proibida na ponte Bernardo Goldfarb.</p>

					<p>Em relação às dinâmicas de viagens a partir da observação dos dados da Pesquisa Origem e Destino  do Metro de São Paulo (Pesquisa OD 2017),  observa-se que as viagens com origem da AID tem  predomínio de viagens de pequena e média distâncias, tendo como destinos mais relevantes a própria AII, as regiões de Campo Limpo, Lapa e Santo Amaro e a cidade vizinha de Taboão da Serra. Já as viagens com destino à AID tem dinâmica muito semelhante, partindo principalmente do vetor a sudoeste da AII.</p>

					<p class="substitua-me">Mapa 17 – Rede de Transporte Público. Fonte: GeoSampa. Elaboração: SP-Urbanismo.</p>

					<p class="substitua-me">Mapa 18 – Rede Cicloviária (CET). Fonte: GeoSampa. Elaboração: SP-Urbanismo.</p>

					<p class="substitua-me">Mapa 19 - Classificação Viária de Acordo com o PDE 2014. Fonte: GeoSampa. Elaboração: SP-Urbanismo.</p>

					<p class="substitua-me">Mapa 20 - Classificação Viária. Fonte: CET, 2019. Elaboração: SP-Urbanismo</p>

					<p class="substitua-me">Mapa 21 - Sistema Viário, Equipamentos de Mobilidade, Semáforos e Ocorrências de Atropelamentos. Fonte: GeoSampa Elaboração: SP-Urbanismo</p>

					<p class="substitua-me">Mapa 22 - Viagens Com Origem na Área de Influência Direta. Fonte: Metrô: 2017. Elaboração: SP-Urbanismo</p>
					<p class="substitua-me">Mapa 23 - Viagens Com Destino na Área de Influência Direta. Fonte: Metrô: 2017. Elaboração: SP-Urbanismo</p>

					<p class="substitua-me">ANEXO I – RESOLUÇÃO SC97/10 – CONDEPHAAT</p>

				</section>
			</section>
		</section>
		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && parseInt(estaConsulta.ativo) === 1" :attr="{id:99, context:'Comentarios'}"></Comments>
		</section>

	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Apoio from '@/components/Apoio'
import CommentsLoader from '@/components/CommentsLoader'
import Comments from '@/components/Comments'
import Imagem from '@/components/Imagem'
import Tabela from '@/components/Tabela'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'JockeyClub',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {}
		}
	},
	components: {
		PageTop,
		Indice,
		Apoio,
		CommentsLoader,
		Comments,
		Imagem,
		Tabela
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

.substitua-me { padding: 1em; background-color:yellow }
.tabela { overflow-x: auto }

</style>
