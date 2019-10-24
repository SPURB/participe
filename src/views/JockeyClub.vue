<template>
	<div class="JockeyClub" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/jockey_244w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Jockey Club</div></template>
			<template slot="subtitulo"><div>1ª Consulta Pública – Elementos prévios</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio>
			<template slot="item2">
				<li>
					<input type="radio" name="tabs" id="item2">
					<label for="item2">PDF</label>
					<div class="conteudoTab">
						<ul class="links" style="margin: 0 0;">
							<li>
								<a :href="src('arquivos/jockey/anexos/PIU_JOCKEY_Diagnostico-Socioterritorial.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>ANÁLISE SOCIOTERRITORIAL</div>
									<span>12,2 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/jockey/anexos/ANEXO-I_RESOLUCAO-SC97-10_CONDEPHAAT.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>ANÁLISE SOCIOTERRITORIAL: ANEXO I – RESOLUÇÃO SC97/10 – CONDEPHAAT E COMPRESP</div>
									<span>2,7 Mb</span>
								</a>
							</li>

							<li>
								<a :href="src('arquivos/jockey/anexos/PIU_JOCKEY_Diagnostico-Ambiental.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>ANÁLISE AMBIENTAL</div>
									<span>3,2 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/jockey/anexos/PIU_JOCKEY_Programa-de-Interesse-Publico.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>PROGRAMA DE INTERESSE PÚBLICO</div>
									<span>1,6 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/jockey/anexos/ANEXO_REFERENCIAS-HIPODROMOS.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>PROGRAMA DE INTERESSE PÚBLICO: ANEXO I – REFERÊNCIAS</div>
									<span>580 KB</span>
								</a>
							</li>

						</ul>
					</div>
				</li>
			</template>
		</Apoio>

		<section>
			<h2 class="titulo" indent="1">Introdução</h2>
			<p>O Hipódromo de Cidade Jardim é um equipamento privado de grande porte que contém características urbanísticas, paisagísticas e históricas excepcionais, tendo sido assim classificado como uma ZOE – Zona de Ocupação Especial pela Lei de Parcelamento, Uso e Ocupação do Solo – LPUOS (Lei nº 16402/2016).  Nos termos do §1º do art. 15 dessa lei, as áreas classificadas como ZOE – Zona de Ocupação Especial devem necessariamente ser objeto de PIU – Projetos de Intervenção Urbana, contemplando a definição de parâmetros específicos de parcelamento, uso e ocupação do solo adequados às suas especificidades.</p>
			<p>Em atendimento ao Art. 2° do Decreto Municipal nº 56.901/2016, que regulamenta o desenvolvimento dos Projetos de Intervenção Urbana, os produtos ora apresentados correspondem aos elementos prévios à elaboração do PIU, constituídos pelo Diagnóstico Socioterritorial e Ambiental e pelo Programa de Interesse Público, subsidiando a instrução do presente Projeto de Intervenção Urbana do Hipódromo de Cidade Jardim – PIU Jockey Club, possibilitando à SMDU a realização da Consulta Pública inaugural do processo de desenvolvimento deste projeto no site Gestão Urbana.</p>
			<p>Considerando que o Hipódromo de Cidade Jardim vem passando nos últimos anos por um processo gradativo de refuncionalização em razão de uma progressiva redução das atividades do turfe e da realização de eventos e novas atividades de cunho cultural, esportivo e de lazer, bem como das tratativas iniciadas entre a Prefeitura e o Jockey Club de São Paulo visando à composição em relação a lançamentos tributários relativos ao  imóvel, envolvendo a prestação de contrapartidas de interesse público, este PIU Jockey Club é uma oportunidade para que se promova publicamente a discussão acerca da destinação urbanística deste equipamento histórico no contexto de desenvolvimento urbano atual da cidade e da estratégia de ordenamento territorial delineada pelo Plano Diretor Estratégico – PDE (Lei nº 16.050/2014).</p>
			<Comments v-if="parseInt(estaConsulta.ativo) === 1" :attr="{ id: commentId(true), context: 'Introdução' }"></Comments>

			<h4>Objeto</h4>
				<p>A presente Consulta Pública, promovida pela Prefeitura do Município de São Paulo por intermédio da Secretaria Municipal de Desenvolvimento Urbano (SMDU) e da São Paulo Urbanismo (SP-URBANISMO), tem como objeto desencadear o processo administrativo tendente a instaurar o Projeto de Intervenção Urbana do Hipódromo de Cidade Jardim – PIU Jockey Club, a ser realizada entre os dias 18 de outubro a 09 de novembro de 2019, apresentando os elementos preliminares ao desenvolvimento do PIU, com vistas a colher contribuições da sociedade civil ao posterior desenvolvimento do projeto. A consulta tem por base a legislação em vigor e os instrumentos urbanísticos que permitem ações específicas no território da cidade.</p>
				<p>De acordo com o Art. 2º do Decreto nº 56.901/2016, o processo de instrução do PIU se inicia pela publicação dos elementos preliminares a seu desenvolvimento, constituídos de diagnósticos socioterritorial e ambiental da área estudada, bem como de seu Programa de Interesse Público, trazendo as questões a serem enfrentadas no contexto urbano em que está inserido. Esses documentos são então submetidos à consulta pública para receberem contribuições da sociedade, subsidiando a decisão da Secretaria Municipal de Desenvolvimento Urbano – SMDU quanto ao seu prosseguimento.</p>

				<h4>Motivação</h4>
				<p>O PIU Jockey Club tem como motivação básica a definição dos parâmetros de parcelamento, uso e ocupação do solo para Zona de Ocupação Especial – ZOE Jockey Club, localizada no território da Prefeitura Regional de Butantã. Tal definição deve considerar o processo de transformações pelo qual vem passando o equipamento em relação a suas atividades, suas características singulares de arquitetura e inserção na paisagem e o marco regulatório da política urbana municipal (PDE, LPUOS, Planos Regionais das Subprefeituras – PRS).</p>
				<p>A proposta para a regulação da ZOE Jockey Club vem como consequência de um estudo apresentado pelo Jockey Club de São Paulo para a Prefeitura em outubro de 2017, sugerindo a criação de um parque público sem interferências nas atividades ligadas ao turfe. Embora tal provocação tenha contribuído para a decisão de deflagrar o presente processo, todas as definições a serem adotadas pelo PIU decorrerão exclusivamente do processo que ora se inicia, servindo como plataforma de recepção de contribuições por toda a sociedade, não representando, pois, adesão a priori ao conteúdo das proposições já apresentadas. </p>

				<h4>Quadro Normativo</h4>
				<p>O Plano Diretor Estratégico, de acordo com o texto expresso pelo Art. 182 da Constituição Federal de 1988, e, posteriormente, pelo Art. 40 do Estatuto da Cidade (Lei Federal nº 10.257/2001), é o instrumento básico das políticas públicas referentes ao desenvolvimento e à expansão urbana, caracterizando-se como o índice de aferição do cumprimento da função social da propriedade. É o diploma que apresenta as diretrizes de condutas a serem seguidas pelo Poder Público Municipal visando ordenar o desenvolvimento das funções sociais da cidade e da propriedade urbana.</p>
				<p>O Plano Diretor Estratégico do Município de São Paulo – PDE (Lei nº 16.050/2014), por sua vez, tem entre seus objetivos a busca pelo desenvolvimento urbano sustentável e equilibrado do Município, buscando promover a aproximação entre emprego e moradia, o acesso à mobilidade e a reestruturação e qualificação das centralidades urbanas, considerando em seu ordenamento as dimensões social, ambiental, imobiliária, econômica e cultural. Tais diretrizes estão expressas, sobretudo, na instituição dos Eixos de Estruturação da Transformação Urbana e nos territórios estratégicos que compõem a Macroárea de Estruturação Metropolitana.</p>
				<p>A Lei de Parcelamento, Uso e Ocupação do Solo - LPUOS (Lei nº 16.402/ 2016), veio regulamentar o PDE, detalhando as zonas de uso no território, seus parâmetros urbanísticos e condições de instalação, dentre outros instrumentos. Nos termos do §1º do art. 15 dessa lei, as áreas classificadas como ZOE – Zona de Ocupação Especial devem necessariamente ser objeto de PIU – Projetos de Intervenção Urbana, contemplando a definição de parâmetros específicos de parcelamento, uso e ocupação do solo adequados às suas especificidades.</p>
				<p>Dentre os instrumentos urbanísticos trazidos pelo PDE, está previsto no seu artigo 134 o PIU, que pode ser promovido pelo poder público para articular medidas de financiamento, gestão, aquisição de terras (reordenamento urbano) e ações intersetoriais para desenvolver e implementar as especificidades de cada intervenção proposta, com processos adequados de gestão e participação social. O PIU tem por finalidade reunir e articular os estudos técnicos objetivando promover o ordenamento e a reestruturação urbana em áreas subutilizadas e com potencial de transformação, tendo sua regulamentação estabelecida pelo Decreto n° 56.901/2016.</p>
				<p>Os Planos Regionais das Subprefeituras – PRS (Decreto nº 57.537/ 2016) são elementos de planejamento complementares ao PDE e à LPUOS, enfatizando os espaços públicos e a articulação de políticas setoriais no território e com as peças orçamentárias, contendo propostas para a Rede de Estruturação Local. A Rede de Estruturação Local, por sua vez, é composta por Perímetros de Ação, que são porções do território com demandas e ações setoriais que necessitam de projetos coordenados de intervenção destinados ao desenvolvimento urbano local, mediante integração de políticas e investimentos públicos.</p>
				<p>A Resolução SC 97/10 do Conselho de Defesa do Patrimônio Histórico, Arqueológico, Artístico e Turístico do Estado de São Paulo - CONDEPHAAT, de 19/11/2010, dispõe sobre o tombamento do conjunto arquitetônico do Jockey Club de São Paulo na categoria de bem cultural, histórico, arquitetônico e ambiental. Além disso, o Conselho Municipal de Preservação do Patrimônio Histórico, Cultural e Ambiental da Cidade de São Paulo – CONPRESP, através da Resolução nº 05/2013 também realizou o tombamento do conjunto, destacando seu papel arquitetônico, histórico e simbólico para a cidade. As duas resoluções mencionadas (apresentadas nos Anexos I e II ao final deste trabalho) descrevem quais edifícios do conjunto devem ser preservados e estabelece que quaisquer intervenções ali planejadas devem ser aprovadas pelos respectivos órgãos. </p>
		</section>

		<section>
			<h2 class="titulo" indent="1">Diagnóstico Socio territorial</h2>
			<ul class="links">
				<li>
					<a :href="src('arquivos/jockey/anexos/PIU_JOCKEY_Diagnostico-Socioterritorial.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>ANÁLISE SOCIOTERRITORIAL</div>
						<span>12,2 Mb</span>
					</a>
				</li>
			</ul>
			<Comments v-if="parseInt(estaConsulta.ativo) === 1" :attr="{ id: commentId(), context: 'Diagnóstico Sócio-territorial' }"></Comments>

			<!-- <section>
				<h3 class="titulo" indent="2">Unidades de análise</h3>
			</section>

			<section>
				<h3 class="titulo" indent="2">Análise Socioeconômica</h3>
			</section>

			<section>
				<h3 class="titulo" indent="2">Uso do Solo, Patrimônio e Mercado Imobiliário</h3>
			</section>

			<section>
				<h3 class="titulo" indent="2">Vulnerabilidade Social Habitação</h3>
			</section>

			<section>
				<h3 class="titulo" indent="2">Ordenamento Territorial e Parâmetro de Ocupação</h3>
			</section>

			<section>
				<h3 class="titulo" indent="2">Equipamentos Públicos</h3>
			</section>

			<section>
				<h3 class="titulo" indent="2">Mobilidade</h3>
			</section> -->

			<h3>Histórico e organização funcional do hipódromo</h3>
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
				caption: 'Figura 2 – Vista da Tribuna dos Sócios a partir da Avenida Lineu de Paula Machado, 1944',
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
				caption: 'Figura 5 - Vista da Arquibancada Especial 2, 1955',
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
				caption: 'Figura 7 - Vista do Ambulatório (a partir da Av. Lineu de Paula), projetado por Henri Sajous, 1955',
				fonte: 'Revista Acrópole, 1955. Disponível em: acropole.fau.usp.br'
			}"></Imagem>

			<p>No campo esportivo, a instituição é também uma referência para o turfe nacional, recebendo os principais eventos da modalidade, junto com os hipódromos do Jockey Club Brasileiro (instalado no Rio de Janeiro), do Rio Grande do Sul e do Paraná. As corridas são realizadas nas tardes de sábado, domingo e segunda-feira, compostas por 10 páreos. A principal competição do ano é a realização do GP São Paulo, disputado em 2.400 metros, na pista de grama, além de outras provas como os GPs Presidente da República, OSAF, ABCPCC e Juliano Martins.</p>
			<p>Além das atividades relacionadas ao turfe, o Jockey Club abriga um clube sócio-desportivo, com estrutura como piscinas, campos de futebol, quadras de tênis e vôlei de praia. A instituição tem buscado diversificar e intensificar a utilização do equipamento, de modo a atrair público nos demais dias da semana e em horários diversos, abrigando atualmente em média 15 eventos mensais, ligados principalmente à gastronomia e cultura. O Cena Jockey é um espaço dedicado a eventos gastronômicos com capacidade para mais de 1500 pessoas.  Há ainda os restaurantes Ferra Jockey e Iulia, que também recebem eventos esporadicamente. Desde 2006 o Jockey foi escolhido como a sede oficial do evento CasaCor, mostra de arquitetura, design de interiores e paisagismo que recebe milhares de visitantes todos os anos. Eventos de música também têm ocorrido no espaço, como o Festival Lollapalooza (2012-2013) e o Festival Planeta Terra (2012). Além disso, o Jockey recebeu o festival de filmes ao ar livre Shell Open Air 2019 e, recentemente, sedia a 3ª edição da Oktoberfest. </p>
			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/capas/jockey_800w.jpg'),
				caption: 'Figura - 8 Foto Aérea',
				fonte: 'Google Earth, 2019'
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-1.gif'),
				titulo: 'Mapa 1 - Setores do Hipódromo',
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

			<h2>Diagnóstico socioterritorial</h2>
			<h4>Unidades de análise</h4>
			<p>O Hipódromo de Cidade Jardim está localizado na região oeste da cidade de São Paulo, no território da Subprefeitura do Butantã, mais especificamente no distrito Morumbi, no limite deste com o distrito do Butantã.</p>
			<p>As análises contidas neste diagnóstico socioterritorial consideram a área da ZOE do Hipódromo de Cidade Jardim como Área Diretamente Afetada (ADA) pelo projeto de intervenção urbana a ser desenvolvido, as áreas das Zonas Origem e Destino (ZOD) da Pesquisa Origem e Destino do Metrô de São Paulo situadas no entorno do hipódromo como Área de Influência Direta (AID) deste PIU e, por fim, as áreas dos distritos municipais situados ao redor do hipódromo, como Área de Influência Indireta (AII) do PIU Jockey. </p>
			<p>Considerando as características socioeconômicas e ambientais do contexto urbano em que se insere o hipódromo, as ZODs que compõem a AID estão localizadas nas subprefeituras do Butantã e Pinheiros, englobando Butantã, Pinheiros, Jardim Europa e Jockey Club. Os distritos que compõem a AII também estão localizados em ambas as subprefeituras, englobando Morumbi, Butantã, Vila Sônia, Pinheiros, Alto de Pinheiros e Itaim Bibi.</p>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
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

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-3.jpg'),
				titulo: 'Mapa 3 - Unidades de análise',
				fonte: 'Geosampa. Elaboração: SPUrbanismo',
				legenda: [
					{ borda: '#FF9100', espessura: 3, fundo: '#FFDFB4', descricao: 'ADA - Área de Diretamenten Afetada' },
					{ borda: '#FFFF48', espessura: 3, fundo: '#FFFFED', pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 1, descricao: 'AII - Área de influência Indireta' }
				]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-4.jpg'),
				titulo: 'Mapa 4 - Limites Administrativos',
				fonte: 'Geosampa. Elaboração: SPUrbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ simbolo: imgSrc('arquivos/legendas/icones/cptm.png'), descricao: 'Estação CPTM' },
					{ simbolo: imgSrc('arquivos/legendas/icones/metro.png'), descricao: 'Estação Metrô' },
					{ simbolo: imgSrc('arquivos/legendas/icones/terminais-urbanis-municipais.png'), descricao: 'Terminais Urbanos Municipais' },
					{ simbolo: imgSrc('arquivos/legendas/icones/ferrovia.png'), descricao: 'Ferovia' },
					{ borda: '#6A6A6A', espessura: 3, descricao: 'Subprefeituras' },
					{ borda: '#9E9E9E', espessura: 2, descricao: 'Distrito' },
					{ borda: '#F8F8F8', espessura: 2, descricao: 'Quadras Fiscais' },
					{ fundo: '#8DC1C7', descricao: 'Hidrografia' },
					{ fundo: '#DDEEBA', descricao: 'Pracas, parques, canteiros e reservas de Mata Atlântica' },
					{ fundo: '#E6E6E6', descricao: 'Quadras Viárias' }
			]
			}"></Imagem>
			<h4>Análise socioeconômica</h4>
			<p>Segundo dados do Censo  de 2010, os distritos do Morumbi e do Butantã, onde se insere o Hipódromo de Cidade Jardim, continham uma população de, respectivamente, 46.957 e 54.196 habitantes. As retroestimativas e projeções populacionais realizadas pelo GEOINFO  para os mesmos distritos apontam para dinâmicas opostos, com crescimento expressivo no Morumbi e ligeiro decréscimo no Butantã. Em 2020, as populações seriam de, respectivamente, 53.670 e 53.939 habitantes e, em 2040, de 99.283 e 49.951 habitantes. Este quadro tendencial não considera, entre outros fatores, as diretrizes de ocupação do PDE e da LPUOS.</p>
			<p>Observamos nas projeções do GEOINFO que o Município de São Paulo deve registrar um crescimento populacional da ordem de 8% ao longo dos próximos 20 anos. Os distritos Morumbi e Vila Sônia destacam-se pelas projeções de crescimento populacional mais acentuadas em relação aos demais distritos da AII, o que pode ser explicado, em parte, pelo adensamento populacional esperado para o entorno das novas estações de metrô da linha amarela. O distrito Rio Pequeno é o único com projeção de crescimento populacional negativa na Subprefeitura do Butantã. Nos distritos situados na Subprefeitura de Pinheiros estudados, Alto de Pinheiros e Pinheiros também apresentam projeções de crescimento negativas, enquanto que o Itaim Bibi continuará crescendo no referido período.</p>
			<p>Todavia, o crescimento da população no distrito Morumbi, que está sob área de influência de estações de trem e metrô, além de corredores de ônibus, está em parte limitado pelas disposições da Lei de Parcelamento, Uso e Ocupação do Solo vigente, estabelecendo parâmetros majoritariamente restritivos à transformação e adensamento. </p>
			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-1.gif'),
				caption: 'Gráfico 1 - Projeção Populacional - Distritos Municipais',
				fonte: 'GEOINFO, 2010. Elaboração: SP Urbanismo'
			}"></Imagem>
			<p>As densidades populacionais das ZODs que compõem a AID são homogêneas e consideradas baixas, da ordem de até 50 habitantes/ha, refletindo os padrões correspondentes à ocupação predominante de perfil residencial horizontal unifamiliar de alta renda.</p>
			<p>Considerando os distritos, as densidades do Morumbi e Alto de Pinheiros refletem o quadro descrito para a AID, com densidades baixas, da ordem de 50 habitantes/ha. Nos demais distritos, onde há maior diversidade dos padrões de ocupação vertical e horizontal e maior diversidades entre usos residenciais e não residenciais, as densidades predominantes variam entre 50 e 200 hab/ha. Densidades acima de 200 hab/ha podem ser observadas em determinadas regiões dos distritos da Vila Sônia, Pinheiros e Itaim Bibi. Já as densidades domiciliares nos distritos da AII são pouco menores que a média da cidade (3,15 pes/dom), variando entre 2,36 pessoas/domicílio no Itaim Bibi e 3,13 pessoas/domicílio na Vila Sônia.</p>
			<p>Constata-se que o distrito Morumbi, onde se localiza o Hipódromo de Cidade Jardim, é, em suas características econômicas e populacionais, mais semelhante aos distritos vizinhos da margem oposta do Rio Pinheiros do que de os outros distritos sob jurisdição da Subprefeitura do Butantã - Butantã, Raposo Tavares, Rio Pequeno e Vila Sônia.</p>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-5.jpg'),
				titulo: 'Mapa 5 - Densidade Demográfica (hab/ha)',
				fonte:'IBGE, 2010. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#FEF6E8', descricao: '0 a 50' },
					{ fundo: '#FDDFBB', descricao: '50 a 120' },
					{ fundo: '#F7B99C', descricao: '120 a 200' },
					{ fundo: '#EB9482', descricao: '200 a 280' },
					{ fundo: '#D47E7D', descricao: 'acima de 280' }
			]
			}"></Imagem>

			<div class="tabela">
				<table>
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
					<tr>
						<th colspan="8">Tabela 1 - Domicílios segundo número de moradores</th>
					</tr>
				</table>
			</div>
			<h6>Gráfico 2 - Domicílios segundo número de moradores</h6>
			<Imagem :dados="{
				tipo: 'default',
				url: imgSrc('arquivos/jockey/Grafico-2.gif'),
				caption: 'Gráfico 2 - Domicílios segundo número de moradores',
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
				fonte: 'GEOINFO, 2017. Elaboração: SP Urbanismo'
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

			<p>Os distritos com menos postos de trabalho assim o são por motivos diferentes. No caso de Morumbi e Alto de Pinheiros, a predominância de zonas residenciais se relaciona às tipologias de ocupação predominantes nestes distritos, marcadas por residências unifamiliares baixas em terrenos de grandes dimensões, que “empurram” a maioria dos postos de trabalho para os corredores comerciais, restando nos “miolos” dos bairros apenas postos de trabalho relacionados a serviços domésticos. No Morumbi, a quantidade significativamente maior de empregos em Serviços pode ser um indicativo desse fenômeno, enquanto no Butantã a quantidade relativamente grande de empregos em Serviços possivelmente encontra relações com a presença do campus da USP.</p>
			<p>No Morumbi e em Pinheiros, a diferença entre o número de postos de trabalho ocupados por homens e por mulheres é significativamente menor do que em outros distritos, não chega a 5% dos postos de trabalho, enquanto na Vila Sônia, o distrito mais desigual neste quesito entre os estudados, a diferença é de quase 30%. O Morumbi é o único distrito no qual há mais mulheres do que homens empregados, contudo, a diferença é pequena, cerca de 1%. No âmbito da distribuição dos postos de trabalho segundo raça, em todos os distritos observa-se predominância de postos de trabalho ocupados por pessoas brancas, seguidos por aqueles ocupados por pessoas pardas. Nota-se, porém, que, levando em consideração os distritos estudados, a diferença entre pessoas pardas e pessoas brancas é menor na Vila Sônia e maior no Morumbi.</p>
			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-8.gif'),
				caption: 'Gráfico 8 – Empregos Formais, exclusive Administração Pública, Segundo Gênero',
				fonte: 'MTE, RAIS, 2016. .Elaboração: SP Urbanismo'
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-6.jpg'),
				titulo: 'Mapa 6 - Densidade de empregos',
				fonte:'MTE, RAIS, 2016. Elaboração: SP Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },{ fundo: '#3535B3', descricao: 'Área do Turfe' },
					{ fundo: '#FEECC4', descricao: 'Até 50' },
					{ fundo: '#FEE2A3', descricao: '25 a 50' },
					{ fundo: '#FEC790', descricao: '50 a 75' },
					{ fundo: '#FAA686', descricao: '75 a 100' },
					{ fundo: '#EF8382', descricao: '100 a 150' },
					{ fundo: '#DC6982', descricao: '150 a 200' },
					{ fundo: '#C26F95', descricao: 'Maior que 280' }
			]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-7.jpg'),
				titulo: 'Mapa 7 - Renda Média da População (Salários Mínimos)',
				fonte:'IBGE, 2010. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#CFEEF7', descricao: 'Até 2 s.m' },
					{ fundo: '#9EC8DA', descricao: '2 a 5 s.m' },
					{ fundo: '#C8C8DA', descricao: '5 a 10 s.m' },
					{ fundo: '#ECD3E1', descricao: '10 a 20 s.m' },
					{ fundo: '#FFC3C3', descricao: 'Acima de 20 s.m.' }
				]
			}"></Imagem>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Tabela-6.gif'),
				caption: 'Tabela 6 - Empregos Formais, Exclusive Administração Pública, Segundo Faixa Etária',
				fonte: 'MTE, RAIS, 2016. Elaboração: SP Urbanismo'
			}"></Imagem>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-9.gif'),
				caption: 'Gráfico 9  – Empregos Formais, Exclusive Administração Pública, Segundo Faixa Etária.',
				fonte: 'MTE, RAIS, 2016. .Elaboração: SP Urbanismo'
			}"></Imagem>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Tabela-7.gif'),
				caption: 'Tabela 7 - Empregos Formais, Exclusive Administração Pública, Segundo Faixas de Rendimento',
				fonte: 'MTE, RAIS, 2016. Elaboração: SP Urbanismo'
			}"></Imagem>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-10.gif'),
				caption: 'Gráfico 10 – Empregos Formais, Exclusive Administração Pública, Segundo Faixas de Rendimento',
				fonte: 'MTE, RAIS, 2016. Elaboração: SP Urbanismo'
			}"></Imagem>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Tabela-8.gif'),
				caption: 'Tabela 8 – Domicílios Particulares Permanentes, por Classes de Rendimento Nominal Mensal Domiciliar',
				fonte: 'IBGE. Elaboração: SP Urbanismo'
			}"></Imagem>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-11.gif'),
				caption: 'Gráfico 11 – Domicílios Particulares Permanentes, por Classes de Rendimento Nominal Mensal Domiciliar',
				fonte: 'IBGE. Elaboração: SP-Urbanismo'
			}"></Imagem>
			<p>Conforme dados da Relação Anual de Informações Sociais  do Ministério do Trabalho e Emprego - RAIS 2016, observamos que em todos os distritos, predominava a faixa de remuneração entre 1 e 5 salários mínimos, sendo que nos distritos Raposo Tavares, Rio Pequeno e Vila Sônia, a maior concentração está na faixa que vai de 1 a 2 salários mínimos e nos distritos Butantã, Morumbi e Pinheiros, na faixa que vai de 2 a 5 salários mínimos. Todavia, o Censo Demográfico 2010 demonstrou que a distribuição dos domicílios por renda não coincide com a remuneração dos empregos no território. Nos distritos Raposo Tavares e Rio Pequeno, existe uma concentração de domicílios nos quais a renda está entre 2 e 5 salários mínimos. No caso do Butantã e da Vila Sônia, os domicílios estão distribuídos de maneira menos absoluta, ocupando faixas a partir de 5 salários mínimos. Isso, posto ao lado da distribuição dos postos de trabalho por faixas de rendimento, nos mostra que, nesses distritos, uma parcela significativa dos postos de trabalho são ocupados por pessoas que não residem ali e, por outro lado, os residentes desses distritos trabalham em outras regiões.</p>
			<p>No caso do Morumbi, Alto de Pinheiros, Itaim Bibi e Pinheiros, a diferença entre os salários pagos pelos empregos e as rendas das famílias que residem naquela região é altamente significativa. No Morumbi, por exemplo, cerca de 65% dos postos de trabalho remuneram na faixa de 1 a 5 salários mínimos, em cerca de 51% dos domicílios registra-se renda superior a 10 salários mínimos, sendo 17% entre 10 a 20 salários mínimos, e 34% acima de 20 salários mínimos. Considerando a predominância do uso residencial neste distrito, podemos inferir que uma parte significativa desses postos de trabalho está nos serviços domésticos, isto é, são faxineiras, jardineiros, motoristas, agentes de segurança privada, etc.</p>
			<p>Em suma, o Jockey Club está no centro de uma área altamente privilegiada da cidade, com elevados padrões de renda e escolaridade, dentre outros indicadores, mas está próxima de áreas cujos indicadores revelam realidades socioeconômicas distintas.</p>

			<h4>Uso do solo, patrimônio histórico e mercado imobiliário</h4>
			<p>Uma análise visual do Cadastro Territorial Predial de Conservação e Limpeza (Mapa 7) permite a identificação dos grandes contrastes quanto ao uso do solo nas áreas de estudo. Tanto na AID quanto na AII há uma presença marcante de quadras ocupadas por uso residencial horizontal de médio ou alto padrão, em especial nos distritos do Morumbi, Alto de Pinheiros e Butantã. </p>
			<p>O uso residencial vertical de médio ou alto padrão também tem participação relevante na AII, especialmente no Butantã, Vila Sônia, Pinheiros e Itaim Bibi. Enquanto no Butantã o número de domicílios em apartamentos corresponde a 38% do total, mais da metade dos domicílios no Morumbi e em Alto de Pinheiros estão em apartamentos e, em Pinheiros e no Itaim Bibi, esse número chega a 77%.</p>
			<p>Em Pinheiros e no Itaim Bibi, que se caracterizam por maior mescla de atividades, adensamento e verticalização, também se destacam os usos de comércio e serviços e o residencial + comércio e serviços.</p>
			<p>Junto ao eixo do Rio Pinheiros, também se destacam os grandes equipamentos presentes na AII: a Cidade Universitária da Universidade de São Paulo, o Parque Villa Lobos e o Hipódromo de Cidade Jardim, objeto deste diagnóstico.</p>
			<p>Em relação ao patrimônio, como reflexo da relevância da AII no desenvolvimento histórico da cidade, existem diversos imóveis e monumentos identificados e protegidos pelas instâncias de preservação, principalmente nos distritos do Morumbi, Butantã, Pinheiros e Itaim Bibi. Há ainda ocorrência de sítios arqueológicos em todos os distritos da AII, exceto no Alto de Pinheiros.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Tabela-9.gif'),
				caption: 'Tabela 9 – Domicílio segundo Tipologias Residenciais Município de São Paulo',
				fonte: 'IBGE, 2010. Elaboração: SP Urbanismo'
			}"></Imagem>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-12.gif'),
				caption: 'Gráfico 12 – Domicílios segundo Tipologias Residenciais Município de São Paulo',
				fonte: 'IBGE. Elaboração: SP-Urbanismo'
			}"></Imagem>

			<p>Em relação à produção imobiliária, conforme dados da Embraesp de 1985 a 2013, é possível identificar no Mapa 10 uma produção robusta e distribuída por praticamente toda a AII, com exceção das áreas de perfil estritamente residencial horizontal, com regulação restrita para esta atividade. Como em toda a cidade, há predomínio absoluto de empreendimentos residenciais, com maior concentração nas regiões da Vila Madalena, Itaim Bibi, Vila Olímpia, Morumbi e Real Parque. Os empreendimentos não residenciais tem participação expressiva da região, em relação ao total da cidade, considerando principalmente os lançamentos localizados dentro das operações urbanas consorciadas Faria Lima e Águas Espraiadas, nas regiões de Pinheiros, Itaim Bibi e Vila Olímpia. </p>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-8.jpg'),
				titulo: 'Mapa 8 - Uso Predominante do Solo',
				fonte:'TPCL, 2015. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#FFFFCE', descricao: 'RH Baixo Padrão' },
					{ fundo: '#FFFF00', descricao: 'RH Médio/Padrão' },
					{ fundo: '#93C0FF', descricao: 'RV Baixo Padrão' },
					{ fundo: '#0080FF', descricao: 'RV Médio/Alto Padrão' },
					{ fundo: '#FF3333', descricao: 'Comércio e Serviços' },
					{ fundo: '#FF2DEB', descricao: 'Indústria e Armazens' },
					{ fundo: '#FF992F', descricao: 'Residencial + Com./Serv.' },
					{ fundo: '#FFCC97', descricao: 'Residencial + Ind./Armazens' },
					{ fundo: '#FFC6FF', descricao: 'Com./Ser. + Ind./Armazens' },
					{ fundo: '#AB2DE9', descricao: 'Equipamentos Públicos' },
					{ fundo: '#00F0F0', descricao: 'Escolas' },
					{ fundo: '#BE5000', descricao: 'Terrenos' },
					{ fundo: '#D39000', descricao: 'Outros' },
					{ fundo: '#909090', descricao: 'Sem predominâncias' },
					{ fundo: '#F0F0F0', descricao: 'Sem informação' }
			]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-9.jpg'),
				titulo: 'Mapa 9 - Patrimônio Histórico e Arqueológico',
				fonte:'Geosampa, 2016. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ simbolo: imgSrc('arquivos/legendas/icones/bem-tombado.png'), descricao: 'Bem tombado' },
					{ fundo: '#FFB2B3', descricao: 'Área envoltória' },
					{ simbolo: imgSrc('arquivos/legendas/icones/bairro-ambiental.png'), descricao: 'Bairro ambiental' },
					{ borda: '#FF8200', espessura: 3, descricao: 'Área de interesse arqueológico' },
					{ simbolo: imgSrc('arquivos/legendas/icones/bem-registrado.png'), descricao: 'Bem registrado' },
					{ simbolo: imgSrc('arquivos/legendas/icones/monumento.png'), descricao: 'Monumento' },
					{ simbolo: imgSrc('arquivos/legendas/icones/acervo-tombado.png'), descricao: 'Acervo tombado' },
					{ simbolo: imgSrc('arquivos/legendas/icones/selo-valor-cultural.png'), descricao: 'Selo Valor Cultural' },
					{ simbolo: imgSrc('arquivos/legendas/icones/sitio-arqueologico.png'), descricao: 'Sítio arqueológico' },
					{ simbolo: imgSrc('arquivos/legendas/icones/ocorrencia-arqueologica.png'), descricao: 'Ocorrência arqueológica' }
			]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-10.jpg'),
				titulo: 'Mapa 10 - Gabarito das Edificações',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#FFBA70', descricao: 'Até 5 metros' },
					{ fundo: '#FF613E', descricao: '5 áte 10 metros' },
					{ fundo: '#FF0808', descricao: '10 áte 30 metros' },
					{ fundo: '#A10606', descricao: '30 áte 45 metros' },
					{ fundo: '#070000', descricao: 'Maior que 45 metros' }
			]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-11.jpg'),
				titulo: 'Mapa 11 - Lançamentos Imobiliários 1985-2013',
				fonte:'Embraesp, 2013. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ simbolo: imgSrc('arquivos/legendas/icones/lancamentos-comerciais-(embraesp,1985-2013).png'), descricao: 'Lançamentos comerciais (Embraesp,1985 - 2013)' },
					{ simbolo: imgSrc('arquivos/legendas/icones/lancamentos-residenciais-(embraesp,1985-2013).png'), descricao: 'Lançamentos residenciais (Embraesp,1985 - 2013)' }
			]
			}"></Imagem>

			<h4>Vulnerabilidade social e habitação</h4>
			<p>A vulnerabilidade social no entorno imediato do PIU Jockey Club é muito baixa. Para além da baixa densidade demográfica observada, resultante de um zoneamento historicamente restritivo e de alto padrão, as imediações do equipamento não apresentam assentamentos precários.</p>
			<p>Para a análise mais ampla da vulnerabilidade social do território de influência socioeconômica do PIU Jockey Club, foi analisado perímetro que abrange os distritos Butantã, Morumbi e Vila Sônia, da Subprefeitura Butantã e os distritos Pinheiros, Alto de Pinheiros e Itaim Bibi, da Subprefeitura Pinheiros. De maneira geral, a área analisada é marcada pela baixa densidade populacional, com a presença das maiores concentrações populacionais nos territórios que apresentam precariedade habitacional e urbana. Também conta com algumas áreas demarcadas como Zonas Especiais de Interesse social – ZEIS pelo Plano Diretor Estratégico – PDE (Lei Municipal nº 16.050/2014) e Zoneamento (Lei Municipal nº 16.402/2016).</p>
			<p>Dentre a predominância das vulnerabilidades baixíssima e muito baixa, há focos de vulnerabilidade social muito alta, que corresponde aos assentamentos precários cadastrados por SEHAB. Isso ocorre porque a precariedade habitacional e a vulnerabilidade social muito alta se sobrepõem no território. Os assentamentos precários são caracterizados pela presença de população de baixa renda e baixa escolaridade, que encontra nesses territórios informais e carentes de infraestrutura urbana seu lugar para residir.</p>
			<p>Cerca de 4% das favelas da cidade estão na Subprefeitura do Butantã, distribuídas, sobretudo pelos distritos Raposo Tavares, Rio Pequeno e, em menor número, Vila Sônia onde, por outro lado, está o maior número de domicílios em favelas. O distrito Morumbi também registra uma quantidade relativamente alta de domicílios em favelas. No distrito Pinheiros, por outro lado, estão menos de 0,2% das favelas do município e Alto de Pinheiros não registra favelas.
			O Jardim Panorama é o assentamento precário mais próximo do Jockey Club, e trata-se de assentamento precário antigo, cuja ocupação data de 1957 e que, segundo as informações coletadas pelo HabitaSAMPA, conta com 576 domicílios.</p>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-12.jpg'),
				titulo: 'Mapa 12 - Índice Paulista de Vulnerabilidade Social 2010',
				fonte:' Fundação SEADE, 2010. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#85CCB1', descricao: 'Grupo 1 baixíssima vulnerabilidade:' },
					{ fundo: '#C9EFBC', descricao: 'Grupo 2 vulnerabilidade muito baixa:' },
					{ fundo: '#EDE6CF', descricao: 'Grupo 3 vulnerabilidade baixa:' },
					{ fundo: '#FECC90', descricao: 'Grupo 4 vulnerabilidade média:' },
					{ fundo: '#FF9964', descricao: 'Grupo 5: vulnerabilidade alta' },
					{ fundo: '#FF6666', descricao: 'Grupo 6: vulnerabilidade muito alta' },
					{ fundo: '#DFDFDF', descricao: 'sem classificação' }
			]
			}"></Imagem>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Tabela-10.gif'),
				caption: 'Tabela 10 - Favelas Próximas a Área de Intervenção',
				fonte: 'HabitaSAMPA, 2019. Elaboração: SP Urbanismo'
			}"></Imagem>

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

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-13.jpg'),
				titulo: 'Mapa 13 - Habitação de Interesse Social',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ simbolo: imgSrc('arquivos/legendas/icones/conjuntos-habitacionais.png'), descricao: 'Conjuntos Habitacionais' },
					{ simbolo: imgSrc('arquivos/legendas/icones/empreendimentos-e-habitacao-de-interesse-social.png'), descricao: 'Empreendimentos e Habitação de Interesse Social' },
					{ fundo: '#C29E3C', descricao: 'ZEIS - 1' },
					{ fundo: '#FFA232', descricao: 'ZEIS - 2' },
					{ fundo: '#FFCF50', descricao: 'ZEIS - 3' },
					{ fundo: '#FFF4BA', descricao: 'ZEIS - 5' },
					{ borda: '#6565E6', espessura: 3, descricao: 'Favelas' },
					{ borda: '#B600FF', espessura: 3, descricao: 'Núcleos' },
					{ borda: '#FF00D5', espessura: 3, descricao: 'Loteamentos' }
				]
			}"></Imagem>

			<p>Para além da precariedade urbanística e fundiária, há os loteamentos irregulares, que apresentam precariedade fundiária, mas não necessariamente urbanística e nos quais, há a possibilidade de garantir a segurança de posse por meio de ações de regularização fundiária. As ações públicas abrangem somente os loteamentos com renda familiar mensal até seis salários mínimos. São 1.774 lotes nessas condições, além de parte do loteamento do Complexo Paraísopolis. Há ainda outros 17 loteamentos que contém 1.835 lotes irregulares, mas como apresentam renda familiar mensal superior a seis salários mínimos.</p>

			<p>Quanto aos conjuntos habitacionais entregues em diversas gestões e programas sociais anteriores, que totalizam na região 3.166 unidades, destaca-se que grande parte deste contingente foi financiado por projetos urbanos, quais sejam, as operações urbanas consorciadas Faria Lima e Águas Espraiadas. Vale reassaltar que, nesses projetos, não foram realizadas ações de consolidação da população residente nos perímetros de abrangência por meio de ações de urbanização de favelas, mas as mesmas foram substituídas por conjuntos habitacionais de mesmo nome. Essa análise vale para os conjuntos do Real Parque e Jardim Edith. Ainda sobre a produção de habitação oscial na região, existem 616 unidades em obras e 3.860 unidades previstas, em fase de projeto e licenciamento.</p>

			<p>Da mesma forma que há pouca precariedade habitacional, há também pouca reserva de terra para a provisão de moradia de 	interesse social no entorno imediato do PIU Jockey  Club. As ZEIS são territórios reservados para a habitação de interesse social e de mercado popular, segundo os critérios e proporcionalidades definidos pelo PDE. A ZEIS de vazio mais próxima do Jockey Club, localizada no distrito Butantã. Trata-se de ZEIS-5 de aproximadamente 17 mil m², localizada na Av. Vital Brasil. As demais áreas demarcadas como ZEIS 2, 3 ou 5 encontram-se dispersas no território, em pequena quantidade e área, à exceção da ZEIS 3 do Jd. Panorama, que já conta com empreendimentos habitacionais em andamento.</p>

			<h4>Ordenamento territorial e parâmetros de ocupação</h4>
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
			<blockquote class="leg"><p><i>Art. 15. As Zonas de Ocupação Especial (ZOE) são porções do território que, por suas características específicas, necessitem de disciplina especial de parcelamento, uso e ocupação do solo.</i></p>
			<p><strong>§ 1º Os perímetros de ZOE terão parâmetros específicos de parcelamento, uso e ocupação do solo adequados às suas especificidades e definidos por Projeto de Intervenção Urbana, aprovado por decreto, observados os coeficientes de aproveitamento estabelecidos por macroárea conforme Quadro 2A da Lei nº 16.050, de 31 de julho de 2014 – PDE.</strong></p>
			<p class="fonte">Lei nº 16.402/2016, grifo nosso</p>
			</blockquote>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-14.jpg'),
				titulo: 'Mapa 14 – Áreas de desenvolvimento estratégico do PDE',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ borda: '#FF04FF', espessura: 3, pontilhado: true, descricao: 'Operação Urbana Consorciada Faria Lima' },
					{ borda: '#0D0DFF', espessura: 3, pontilhado: true, descricao: 'Operação Urbana Consorciada Água Espraiada' },
					{ borda: '#FF7901', espessura: 3, pontilhado: true, descricao: 'Arco Pinheiros' }
			]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-15.jpg'),
				titulo: 'Mapa 15 - Zoneamento (Lei 16.402/2016)',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#BCDC5C', descricao: 'AC-1' },
					{ fundo: '#009BF2', descricao: 'VETOS' },
					{ fundo: '#6A4133', descricao: 'ZC' },
					{ simbolo: imgSrc('arquivos/legendas/zoneamento/zca.gif'), descricao: 'ZCa' },
					{ fundo: '#142181', descricao: 'ZCOR-1' },
					{ fundo: '#0076C8', descricao: 'ZCOR-2' },
					{ fundo: '#5AA0D1', descricao: 'ZCOR-3' },
					{ fundo: '#198085', descricao: 'ZCORa' },
					{ fundo: '#BC6179', descricao: 'ZDE' },
					{ fundo: '#C29E3C', descricao: 'ZEIS - 1' },
					{ fundo: '#FFA232', descricao: 'ZEIS - 2' },
					{ fundo: '#FFCF50', descricao: 'ZEIS - 3' },
					{ fundo: '#FFF4BA', descricao: 'ZEIS - 5' },
					{ fundo: '#D4412B', descricao: 'ZEM' },
					{ simbolo: imgSrc('arquivos/legendas/zoneamento/zemp.gif'), descricao: 'ZEMP' },
					{ fundo: '#2CAA76', descricao: 'ZEPAM' },
					{ fundo: '#FFC339', descricao: 'ZER-1' },
					{ simbolo: imgSrc('arquivos/legendas/zoneamento/zer-2.gif'), descricao: 'ZER-2' },
					{ simbolo: imgSrc('arquivos/legendas/zoneamento/zera.gif'), descricao: 'ZERa' },
					{ fundo: '#A5181F', descricao: 'ZEU' },
					{ simbolo: imgSrc('arquivos/legendas/zoneamento/zeup.gif'), descricao: 'ZEUP' },
					{ fundo: '#A0A0A0', descricao: 'ZM' },
					{ simbolo: imgSrc('arquivos/legendas/zoneamento/zma.gif'), descricao: 'ZMa' },
					{ fundo: '#C6B58A', descricao: 'ZOE' },
					{ fundo: '#578458', descricao: 'ZPDS' },
					{ fundo: '#4C3770', descricao: 'ZPI-1' },
					{ fundo: '#FFFF27', descricao: 'ZPR' }
			]
			}"></Imagem>

			<p>A partir das diretrizes de desenvolvimento urbano expressas no PDE, a Lei de Zoneamento (LPUOS – Lei nº16.402/2016) demarcou na AII um mosaico bem heterogêneo de zonas de uso. Os grandes equipamentos, como a Cidade Universitária e o Jockey Club estão classificados como ZOEs (Zonas de Ocupação Especial). Os parques e praças estão classificados como ZEPAMs (zonas especiais de preservação e recuperação ambiental). As regiões caracterizadas por bairros jardins foram classificadas como ZERs (zonas exclusivamente residenciais) e ZCor (zonas corredores de serviços). Os eixos de estruturação da transformação urbana, áreas prioritárias para a transformação e adensamento associadas à infraestrutura de transportes, foram classificados como ZEU (zonas eixo de estruturação da transformação urbana). As quadras sob operações urbanas em vigor, assim como os miolos dos bairros de perfil misto foram classificadas como ZM (Zonas mistas). As áreas com perfil misto e predomínio não residencial foram classificadas como ZC (zonas de centralidade). As áreas identificadas como de ocupação residencial informal ou prioritárias para o atendimento à demanda habitacional foram classificadas como ZEIS (zonas especiais de interesse social).</p>
			<p> No Morumbi, 51% da área considerada pelo Zoneamento é demarcada como ZER, nas quais se aplicam restrições a qualquer uso residencial vertical, dadas pelo Zoneamento, e 10% das quadras ficais é demarcada como Zona Corredor (ZCOR), nas quais também incidem restrições à verticalização. Por outro lado, há áreas relativamente pequenas demarcadas como ZC, nas quais provavelmente estão os quase 53% de domicílios em apartamentos, junto às favelas que existem nesse distrito. Isso é um indicativo de que, nas regiões demarcadas como ZER, os lotes são maiores e são relativamente pouco ocupados, isto é, têm uma Taxa de Ocupação (TO) relativamente baixa. </p>
			<p>Fenômeno similar é observado no distrito Alto de Pinheiros, no qual 52% da área considerada pelo zoneamento é demarcada como ZER ou ZPR e 15% da área é ZEPAM; Os outros 32% da área do distrito, onde é possível construir prédios em apartamentos, concentram 53% dos domicílios.</p>
			<p>Para fins de comparação, observamos que, atualmente, incidem sobre o distrito Butantã diversas zonas de uso. Além da Zona de Ocupação Especial (ZOE) demarcada sobre o campus da USP, há áreas demarcadas como Zona Eixo de Estruturação da Transformação Urbana (ZEU) no entorno da estação Butantã de metrô. Há áreas significativas de Zonas Exclusivamente Residenciais (ZER) e Zonas Predominantemente Residenciais (ZPR), com Coeficiente de aproveitamento (CA) máximo de uma vez a área do lote, e áreas demarcadas como Zona Mista (ZM) e Zona Centralidade (ZC) em eixos viários importantes, com CA máximo de 2 vezes a área do terreno, e nas quais historicamente se concentram os lançamentos imobiliários do distrito, a maioria deles residencial. </p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Tabela-11.gif'),
				caption: 'Tabela 11 - Áreas Ocupadas Por Tipo de Zona em Quadras Fiscais (m²).',
				fonte: 'Geosampa. Elaboração: SP Urbanismo'
			}"></Imagem>

			<h4>Equipamentos públicos</h4>
			<p>A distribuição da rede de equipamentos públicos na AII reflete os padrões de ocupação descritos anteriormente. Os equipamentos de educação representam a rede com distribuição mais capilarizada no território e estão mais próximas a áreas com perfil predominantemente residencial, com destaque para os distritos do Butantã, Vila Sônia e Itaim Bibi. </p>
			<p>Já os equipamentos de cultura, onde também estão inclusos determinadas categorias de casas de shows e bares, estão localizados em áreas com perfil predominante não residencial ou misto, com características de centralidade, como Vila Madalena e Itaim Bibi. Nesta categoria merece destaque a Cidade Universitária da USP, onde se localizam diversos museus.</p>

			<p>As demais redes de equipamentos apresentam distribuição mais discreta no território da AII, relacionando-se ora com regiões de maior vulnerabilidade social ou demandas específicas para atendimento de segmentos vulneráveis da população, ora com localizações estratégicas quanto à acessibilidade por transporte público ou conectadas ao sistema viário estrutural. As redes de esportes e assistência social se vinculam principalmente ao primeiro caso, enquanto que as redes de saúde e abastecimento mais com o segundo. </p>
			<p>A Vila Sônia é o distrito da AII que conta com maior número de equipamentos de esportes e assistência social. Os equipamentos de saúde, muitos de grande porte, estão presentes em maior número em Pinheiros, Itaim Bibi, Butantã e Morumbi.</p>

			<!-- <p class="substitua-me">Salvar ícones a partir deste mapa</p> -->

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa-16.jpg'),
				titulo: 'Mapa 16 – Equipamentos Públicos',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'Limite do Município de São Paulo' },
					{ simbolo: imgSrc('arquivos/legendas/icones/assistencia-social.png'), descricao: 'Assistência Social' },
					{ simbolo: imgSrc('arquivos/legendas/icones/saude.png'), descricao: 'Saúde' },
					{ simbolo: imgSrc('arquivos/legendas/icones/esporte.png'), descricao: 'Esporte' },
					{ simbolo: imgSrc('arquivos/legendas/icones/abastecimento.png'), descricao: 'Abastecimento (Feira, Sacolão e Mercado' },
					{ simbolo: imgSrc('arquivos/legendas/icones/cultura.png'), descricao: 'Cultura' },
					{ simbolo: imgSrc('arquivos/legendas/icones/educacao-rede-publica.png'), descricao: 'Educação - Rede Pública' },
					{ simbolo: imgSrc('arquivos/legendas/icones/educacao-rede-privada.png'), descricao: 'Educação - Rede Privada' },
				]
			}"></Imagem>

			<h3>Mobilidade</h3>
			<p>A região onde se situa o Hipódromo de Cidade Jardim possui uma robusta rede de mobilidade composta por diversos modais.</p>

			<p>Em relação ao sistema viário, a rede estrutural demarca fortemente as dinâmicas de mobilidade da região, pois conta com algumas das mais importantes e carregadas vias da cidade, muitas delas de trânsito rápido, que conectam a cidade com os municípios vizinhos da região oeste e a duas importantes rodovias, Raposo Tavares e Régis Bittencourt, que possibilitam ligações com as regiões sudoeste e oeste do estado e com os estados da região sul do país.</p>

			<p>A Av. das Nações Unidas (Marginal Pinheiros), é uma via estrutural de primeira categoria, que se constitui como o principal eixo viário da região oeste da metrópole, conectando a Marginal Tietê e a Rodovia Pres. Castello Branco, na região noroeste, à região sul da cidade, na região de Santo Amaro e dividindo as duas subprefeituras da AII. A subprefeitura do Butantã possui uma rede estrutural e coletora menos capilarizada que a subprefeitura de Pinheiros, com destaque para as avenidas Prof. Francisco Morato, Corifeu de Azevedo Marques, Eliseu de Almeida e Vital Brasil. A subprefeitura de Pinheiros é demarcada pelo eixo longitudinal norte-sul composto pelas avenidas Prof. Fonseca Rodrigues, Pedroso de Morais e Faria Lima e pela Av. dos Bandeirantes, que conecta a Marginal do Rio Pinheiros às rodovias Imigrantes e Anchieta. Há ainda importantes eixos na direção leste-oeste, que conectam as duas subprefeituras, como as avenidas Rebouças, Eusébio Matoso, Cidade Jardim, Juscelino Kubitschek, Roberto Marinho, Morumbi e Prof. Vicente Rao.
			O Hipódromo de Cidade Jardim tem acesso direto pela Av. Lineu de Paula Machado, situando-se entre esta e a Av. das Nações Unidas.</p>

			<p>A rede de transporte público também é robusta, contando com a linha ferroviária 9 – Esmeralda da CPTM, a linha 4-amarela do metrô e o corredor de ônibus Rebouças – Eusébio Matoso - Francisco Morato, onde operam linhas municipais da SPTrans e metropolitanas da EMTU. O Hipódromo de Cidade Jardim está próximo deste corredor e das estações Cidade Jardim e Hebraica – Rebouças da CPTM e da estação Butantã do metrô.</p>

			<p>Ainda que seja uma região privilegiada no que diz respeito ao transporte motorizado individual e ao transporte público, observamos que a microacessibilidade de pedestres ao Jockey Club é pouco favorecida, considerando o grande volume de tráfego, os tempos de travessias semafóricas, as características das calçadas, sinalizações e iluminação existentes. Isso significa que o pedestre possivelmente enfrenta dificuldades para chegar ao Jockey Club de um ponto de parada do transporte público, especialmente das estações de trem, que estão na margem oposta do Rio Pinheiros, cuja transposição, para pedestres, é pouco facilitada nas pontes Eusébio Matoso e Engenheiro Roberto Rossi Zuccolo, e proibida na ponte Bernardo Goldfarb.</p>

			<p>Em relação às dinâmicas de viagens a partir da observação dos dados da Pesquisa Origem e Destino  do Metro de São Paulo (Pesquisa OD 2017),  observa-se que as viagens com origem da AID tem  predomínio de viagens de pequena e média distâncias, tendo como destinos mais relevantes a própria AII, as regiões de Campo Limpo, Lapa e Santo Amaro e a cidade vizinha de Taboão da Serra. Já as viagens com destino à AID tem dinâmica muito semelhante, partindo principalmente do vetor a sudoeste da AII.</p>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa17.jpg'),
				titulo: 'Mapa 17 – Rede de Transporte Público',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ simbolo: imgSrc('arquivos/legendas/icones/piu-jockey-club.png'), descricao: 'PIU jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#DAE7CE', descricao: 'Praças, parques e canteiros' },
					{ fundo: '#C2C1BE', descricao: 'Eixo de Estruturação da Transformação Urbana Existente' },
					{ fundo: '#DDDCDB', descricao: 'Eixo de Estruturação da Transformação Urbana Previstas' },
					{ simbolo: imgSrc('arquivos/legendas/icones/cptm-estacoes.png'), descricao: 'CPTM - Estações' },
					{ borda: '#F73700', espessura: 2, descricao: 'CPTM' },
					{ simbolo: imgSrc('arquivos/legendas/icones/metro-estacoes.png'), descricao: 'Metrô - Estações' },
					{ borda: '#FF7F00', espessura: 2, descricao: 'Metrô Existente' },
					{ borda: '#FF7F00', espessura: 2, pontilhado: true, descricao: 'Metrô Existente' },
					{ borda: '#FA2613', espessura: 2, pontilhado: true, descricao: 'Monotrilho Planejada' },
					{ simbolo: imgSrc('arquivos/legendas/icones/terminal-onibus-existentes.png'), descricao: 'Terminais de Ônibus Existentes' },
					{ borda: '#F394F8', espessura: 2, descricao: 'Faixa de Ônibus' },
					{ borda: '#D433F4', espessura: 3, descricao: 'Corredor de Ônibus' },
					{ borda: '#CD09FE', espessura: 2, pontilhado: true, descricao: 'Corredor de Ônibus Planejado' },
					{ simbolo: imgSrc('arquivos/legendas/icones/terminal-onibus-planejados.png'), descricao: 'Terminais de Ônibus Planejados' }
			]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa18.jpg'),
				titulo: 'Mapa 18 – Rede Cicloviária e Calçadas',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ simbolo: imgSrc('arquivos/legendas/icones/piu-jockey-club.png'), descricao: 'PIU jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ borda: '#9B5DF8', espessura: 2, descricao: 'AII - Plano Emergencial de Calçadas 2019' },
					{ simbolo: imgSrc('arquivos/legendas/icones/bicicletarios-paraciclos.png'), descricao: 'Bicicletários e Paraciclos' },
					{ borda: '#F34966', linha: true, espessura: 2, descricao: 'Ciclovia' },
					{ borda: '#F97638', espessura: 2, descricao: 'Ciclofaixa' },
					{ borda: '#FEFAA0', espessura: 2, descricao: 'Ciclorrota' },
					{ borda: '#9F9F9F', espessura: 2, descricao: 'Ciclopassarela' }
			]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa19.jpg'),
				titulo: 'Mapa 19 - Classificação Viária - PDE 2014',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', linha: true, espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', linha: true, espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', linha: true, espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ borda: '#FF0105', linha: true, espessura: 7, descricao: 'Vias Estruturais N1' },
					{ borda: '#FCC000', linha: true, espessura: 5, descricao: 'Vias Estruturais N2' },
					{ borda: '#00FF21', linha: true, espessura: 3, descricao: 'Vias Estruturais N3' },
					{ borda: '#00BEEA', linha: true, espessura: 2, descricao: 'Vias Coletoras' }
				]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa20.jpg'),
				titulo: 'Mapa 20 - Classificação Viária - CET',
				fonte:'CET. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', linha: true, espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', linha: true, espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', linha: true, espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ borda: '#A12C12', linha: true, espessura: 3, descricao: 'Vias de Trânsito Rápido' },
					{ borda: '#FF4E55', linha: true, espessura: 1, descricao: 'Vias Arteriais' },
					{ borda: '#FFAC58', linha: true, espessura: 1, descricao: 'Vias Coletoras' }
			]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa21.jpg'),
				titulo: 'Mapa 21 - Sistema viário, rede semafórica e ocorrências de atropelamentos',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ simbolo: imgSrc('arquivos/legendas/icones/bicicletarios-paraciclos.png'), descricao: 'Bicicletários e Paraciclos' },
					{ borda: '#FF8200', linha: true, espessura: 3, descricao: 'Rede Cicloviária' },
					{ borda: '#FF0105', linha: true, espessura: 1, descricao: 'Vias Estruturais N1' },
					{ birda: '#FFDB1B', linha: true, espessura: 1, descricao: 'Corredores de Ônibus' },
					{ simbolo: imgSrc('arquivos/legendas/icones/semaforos.png'), descricao: 'Semáforos' },
					{ simbolo: imgSrc('arquivos/legendas/icones/atropelamentos.png'), descricao: 'Atropelamentos' }
				]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa22.jpg'),
				titulo: 'Mapa 22 - Viagens com Origem na Área de Influência Direta',
				fonte:'Metrô Pesquisa OD, 2017. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'Limite do Minicípio de São Paulo' },
					{ fundo: '#FFFFC9', descricao: '0 - 30' },
					{ fundo: '#FEDB8C', descricao: '300 - 1000' },
					{ fundo: '#FDAF76', descricao: '1000 - 3000' },
					{ fundo: '#F47562', descricao: '3000 - 6000' },
					{ fundo: '#D04C67', descricao: '> 6000' }
			]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa23.jpg'),
				titulo: 'Mapa 23 - Viagens com Destino na Área de Influência Direta',
				fonte:'Metrô Pesquisa OD, 2017. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'Limite do Minicípio de São Paulo' },
					{ fundo: '#FFFFC9', descricao: '0 - 30' },
					{ fundo: '#FEDB8C', descricao: '300 - 1000' },
					{ fundo: '#FDAF76', descricao: '1000 - 3000' },
					{ fundo: '#F47562', descricao: '3000 - 6000' },
					{ fundo: '#D04C67', descricao: '> 6000' }
				]
			}"></Imagem>

			<ul class="links">
				<li>
					<a :href="src('arquivos/jockey/anexos/ANEXO-I_RESOLUCAO-SC97-10_CONDEPHAAT.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>ANEXO I – RESOLUÇÃO SC97/10 – CONDEPHAAT E COMPRESP</div>
						<span>2,7 Mb</span>
					</a>
				</li>
			</ul>
		</section>
		<section>
			<h2 class="titulo" indent="1">Diagnóstico Ambiental</h2>

			<ul class="links">
				<li>
					<a :href="src('arquivos/jockey/anexos/PIU_JOCKEY_Diagnostico-Ambiental.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>ANÁLISE AMBIENTAL</div>
						<span>3,2 Mb</span>
					</a>
				</li>
			</ul>

			<Comments v-if="parseInt(estaConsulta.ativo) === 1" :attr="{ id: commentId(), context: 'Diagnóstico Ambiental' }"></Comments>

			<h4>Clima</h4>
			<p>O clima tropical úmido de altitude é o clima natural da região onde está localizada a cidade de São Paulo, que se caracteriza por reduzidas chuvas no inverno e temperatura média de 19°C. Entretanto, a intensa urbanização da região  e a produção de poluentes atmosféricos,  promoveram alterações climáticas e o clima na região passou a ser caracterizado por Unidades Climáticas Urbanas, com características próprias na região central, periférica, nos trechos de urbanização fragmentada e nas regiões não urbanizadas.</p>
			<p>Na região onde se encontra o Jockey Club, predomina a Unidade Climática Urbana Central do Além Pinheiros, área com predomínio do uso residencial, extensas áreas verdes e vizinha à Marginal Pinheiros.</p>
			<h4>Ilha de calor</h4>
			<p>A região do MSP era originalmente ocupada pela Mata Atlântica e Floresta das Araucárias, onde predominava o clima tropical úmido. A urbanização, através da impermeabilização do solo e construção de elevados edifícios, promoveu a elevação da temperatura média mensal em 2°C, redução da umidade relativa média mensal de 85% para 80%, os períodos de calor ficaram mais longos, as temperaturas mais amenas só passaram a ser registradas em áreas com cobertura vegetal, junto aos corpos d’água e nas porções com predominância de ocupação residencial horizontal. Na área ocupada pelo Jockey Club, o Mapa das Isotermas das Temperaturas de Superfície, revela predominância de temperaturas de 28°C, que se mantem praticamente constantes, sem grandes variações, ao longo dos Distritos Morumbi e Pinheiros, enquanto que, no mesmo instante, são registradas temperaturas de até 31,5°C na Mooca, onde se constata a formação de ilha de calor.</p>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa18A.jpg'),
				titulo: 'Mapa 24: Temperatura aparente de superfície,  isotermas',
				fonte:'Atlas Ambiental MSP/2004. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#EAB93D', descricao: 'Isotermas 27,5°C' },
					{ fundo: '#E5AA45', descricao: 'Isotermas 28°C' },
					{ fundo: '#D9AB4A', descricao: 'Isotermas 28,5°C' },
					{ fundo: '#DD8340', descricao: 'Isotermas 29,5°C' },
					{ fundo: '#E46C35', descricao: 'Isotermas 30°C' }
				]
			}"></Imagem>

			<h4>Qualidade do Ar</h4>
			<p>A qualidade do ar é impactada diretamente pelas emissões de poluentes atmosféricos. No MSP, a frota de veículos é a responsável por mais de 90% da emissão de CO, hidrocarbonetos e óxidos de nitrogênio (NOx) (CETESB, 2005). A poluição do ar é agravada pelo modelo de transporte com utilização predominante de ônibus movido a diesel, o uso de automóvel particular e motocicleta. Os automóveis, mesmo equipados com sistemas de controle da poluição, devido ao grande volume, acabam se tornando grandes poluidores.</p>
			<p>Para a análise da qualidade do Ar no entorno do PIU Jockey Club, por se tratar de uma escala local de análise, foram analisadas as concentrações de cada poluente atmosférico conforme coletados pela Estação Pinheiros, localizada na Av. Prof. Frederico Hermann Jr., 345, Alto de Pinheiros. Os dados foram comparados com aqueles coletados pela Estação Parque Dom Pedro II, situada no Palácio das Indústrias, estação mais central do Município de São Paulo. Quando possível, também foram levantados os dados da Região Metropolitana de São Paulo – RMSP. Essas comparações são importantes para compreender a qualidade do ar do entorno do projeto em relação ao centro urbano da cidade e à análise mais abrangente da metrópole.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Figura-A-5.gif'),
				caption: 'Figura 9. Localização das estações da Rede Automática ',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<p>Quanto aos poluentes atmosféricos, podemos dividi-los entre os particulados, que tratam de partículas suspensas, e os gasosos. Dentre os particulados temos: as partículas inaláveis – MP10, as partículas inaláveis finas – MP2,5, as partículas totais em suspensão – PTS e a fumaça – FMC. Dentre os poluentes gasosos, são monitorados por meio de padrões o ozônio (O3), o dióxido de nitrogênio (NO2), o monóxido de carbono (CO) e o dióxido de enxofre (SO2). Os dados coletados pela estação Pinheiros e disponibilizados pela Cetesb foram confrontados com os padrões de qualidade do ar, definidos pelo Decreto Estadual nº 59.113/2013, que estabelece padrões de qualidade do ar para o Estado de São Paulo, de acordo com as diretrizes estabelecidas pela OMS, conforme consta na  Tabela abaixo.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Tabela-23.gif'),
				caption: 'Tabela 12 – Padrões de Qualidade do Ar. DE nº 59.113/2013'
			}"></Imagem>

			<p>Vale destacar que os padrões estaduais estabelecidos são semelhantes ao disposto na Resolução CONAMA nº 491/2018, exceto na concentração máxima de dióxido de enxofre que, na resolução federal, apresenta valor superior ao decreto estadual, de 125 microgramas por metro cúbico.</p>

			<h4>MP10</h4>
			<p>Quanto às partículas inaláveis - MP10, as informações coletadas na Estação Pinheiros carecem de dados de 2016. Pelo Gráfico, podemos observar que as concentrações máximas diárias encontram-se dentro dos padrões estabelecidos (PQAr = 120 µg/m³) e são inferiores às aferidas no Parque Dom Pedro II.
			</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-12.gif'),
				caption: 'Gráfico 13. Concentrações Máximas Diárias (24 horas) – MP10',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<p>As concentrações médias anuais deste poluente também se encontram abaixo do PQAr e oscila próximo às medições da região central do Município e das médias observadas na RMSP, conforme o gráfico a seguir.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-13.gif'),
				caption: 'Gráfico 14. Médias Aritméticas Anuais (MAA) – MP10',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<h4>MP2,5</h4>
			<p>A concentração máxima de partículas inaláveis finas - MP2,5 observadas na Estação Pinheiros em 2015 estava acima do PQAr (60 µg/m³). Não é possível comparar o comportamento da partícula nas estações Pinheiros e na região central em 2015 e 2016, por falta da coleta desses dados nas estações. Contudo, pela observação dos dados de 2017 e 2018, as concentrações máximas de MP2,5 são menores em Pinheiros do que no Parque Dom Pedro II, cujos valores ficam próximos ou ultrapassam o PQAr.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-14.gif'),
				caption: 'Gráfico 15. Concentrações Máximas Diárias  (24 horas) – MP2,5',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<p>Comportamento semelhante é observado nas médias anuais, em que a estação Pinheiros apresenta condições mais favoráveis do que o centro de São Paulo e com médias abaixo do PQAr (20 µg/m³).</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-15.gif'),
				caption: 'Gráfico 16. Médias Aritméticas Anuais (MAA) – MP2,5',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<h4>Fumaça – FMC</h4>
			<p>O Poluente Fumaça não foi analisado na estação Parque Dom Pedro II e, por isso não podemos analisar o comportamento da estação Pinheiros em relação ao centro da cidade. Contudo, podemos observar pelo gráfico que as concentrações máximas do poluente estiveram abaixo do PQAr (120 µg/m³) em 2015, 2017 e 2018, tendo apresentado concentração máxima superior, de 127 µg/m³, em 2016.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-16.gif'),
				caption: 'Gráfico 17. Concentrações Máximas Diárias (24 horas) – FMC',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<p>Contudo, apesar de ter ultrapassado a concentração máxima estabelecida pelo padrão, as médias anuais tanto observadas na Estação Pinheiros quanto na média da RMSP ficaram abaixo do PQAr (40 µg/m³) durante o período analisado, conforme o gráfico a seguir.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-17.gif'),
				caption: 'Gráfico 18. Médias Aritméticas Anuais (MAA) – FMC',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<h4>Partículas Totais em Suspensão – PTS</h4>
			<p>Os dados sobre as partículas totais em suspensão – PTS foram coletados na Estação Pinheiros somente em 2015 e 2018, não tendo dados acerca do referencial central estabelecido pela estação Parque Dom Pedro. Ainda que tenhamos poucas informações, as concentrações máximas coletadas ficaram bastante abaixo do PQAr (240 µg/m³), conforme o gráfico XX.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-18.gif'),
				caption: 'Gráfico 19. Concentrações Máximas Diárias (24 horas) – PTS',
				fonte: 'Cetesb, 2019'
			}"></Imagem>
			<p>O mesmo se observa na análise das médias geométricas anuais, ou seja, os dados coletados na estação Pinheiros, ainda que próximos da Marginal Pinheiros e Av. Nações Unidas, apresenta ídices de partículas totais em suspensão inferiores ao padrão estabelecido (80 µg/m³).</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-19.gif'),
				caption: 'Gráfico 20. Médias Geométricas Anuais (MGA) – PTS',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<p>A análise do comportamento dos poluentes particulados aponta que não há níveis críticos deste tipo de poluente no entorno do PIU Jockey Club, observados a partir da Estação Pinheiros.</p>

			<h4>Ozônio (O3)</h4>
			<p>A presença de ozônio na troposfera é caracterizada como poluente, ao contrário da sua presença da estratosfera. O O3 é uma das maiores ameaças para a qualidade do ar. As maiores concentrações de O3 são observadas entre agosto e outubro, sendo aproximadamente 24% menores nos finais de semana (SANCHES-CCOYLLO e ANDRADE 2009). Mesmo na estação Pinheiros, os níveis de ozônio coletados superam o padrão estabelecido (PQAr = 140 µg/m³), anda que  os dados apontem concentrações máximas médias móveis obtidas no dia (8 horas) abaixo daquelas coletadas no Parque Dom Pedro II, conforme observamos no gráfico. Tendo em vista que as concentrações se mantiveram acima do padrão, foram observadas as concentrações em relação ao nível de atenção estadual estabelecido pela CONAMA nº 491/2018 (200 µg/m³), parâmetros esses que não foram ultrapassados nas estações analisadas.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-20.gif'),
				caption: 'Gráfico 21. Concentrações Máximas Média Móvel (8 horas) – O3',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<p>Para além da análise das concentrações máximas médias móveis, são analisados os números de dias que essas concentrações medidas ultrapassaram o padrão, conforme o gráfico abaixo. Observa-se que as o número de dias com ultrapassagem do PQAr foram poucos em Pinheiros e mais prevalentes no Parque Dom Pedro II.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-21.gif'),
				caption: 'Gráfico 22. Número de Dias com Ultrapassagem do PQAr – O3',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<p>Contudo, a análise da série histórica, que apresenta valores entre 1998 e 2008, aponta que houve uma redução considerável nas concentrações de ozônio medidas no centro de São Paulo. Nesse período, as máximas concentrações observadas no Parque Dom Pedro estava acima do Padrão vigente à época (160 µg/m³), chegando a ultrapassar o Nível de Atenção (200 µg/m³) na maioria dos anos analisados, conforme o gráfico abaixo.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-22.gif'),
				caption: 'Gráfico 23. Série Histórica: Concentrações Máximas média móvel (8 horas) – O3',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<p>A análise da série histórica também permite observar que o padrão de ozônio era também ultrapassado em maior número de dias, sendo observado ainda a ultrapassagem do Nível de Alerta (400 µg/m³).</p>
			<p>Assim, a contextualização histórica permite constatar que, ainda que os níveis de ozônio ainda estejam acima da expectativa, houve significativa redução em relação à análise entre 1998 e 2008.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-23.gif'),
				caption: 'Gráfico 24. Série Histórica: Número de Dias com Ultrapassagem do PQAr – O3',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<h4>Monóxido de Carbono (CO)</h4>
			<p>As concentrações de monóxido de carbono em Pinheiros apresentam valores próximos ou superiores ao observados no centro de São Paulo, ainda que as medições dos últimos quatro anos apresentem valores abaixo do padrão, conforme o gráfico a seguir. Os índices mais elevados em Pinheiros são observados tendo em vista a proximidade com a Marginal Pinheiros, cujo tráfego de caminhões é intenso.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-24.gif'),
				caption: 'Gráfico 25. Concentrações Máximas média móvel (8 horas) – CO',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<h4>Dióxido de Nitrogênio NO2 </h4>
			<p>Assim como o observado dentre os demais poluentes, à exceção do ozônio, o Dióxido de Nitrogênio apresenta concentrações máximas abaixo do PQAr (260 µg/m³), ainda que Pinheiros apresente valores próximos do centro da cidade, conforme dados da estação Parque Dom Pedro II, tanto no que se refere às concentrações máximas quanto às médias aritméticas anuais.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-25.gif'),
				caption: 'Gráfico 26. Concentrações Máximas Diárias (24 horas) – NO2',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-26.gif'),
				caption: 'Gráfico 27. Médias Aritméticas Anuais (MAA) – NO2',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<h4>Dióxido de Enxofre SO2</h4>
			<p>Dentre todos os poluentes analisados, o dióxido de enxofre apresenta as menores concentrações em relação ao PQAr, podendo ser observado tanto em Pinheiros quanto no Parque Dom Pedro II.. Isto se deve à alteração legal, em 2014, dos níveis nacionais de concentração de enxofre na gasolina, de 800 µg/kg do para 50 µg/kg. Atribui-se a esta medida, a redução de 94% da emissão de enxofre na atmosfera, decorrente da medida da Agência nacional de Petróleo, Gás Natural e Biocombustíveis – ANP, prevista na Res. Nº 40/2013. Essas medidas aumentaram a qualidade da gasolina tanto para o desempenho automotivo quanto para o cumprimento da etapa L-6 do Programa de Controle da Poluição do Ar por Veículos Automotores (PROCONV), do Conselho Nacional do Meio Ambiente – CONAMA, conforme a Res. CONAMA 415/2009, que determinou os limites máximos de emissão de poluentes dos veículos leves.</p>
			<p>Sendo assim, podemos analisar nos gráficos a seguir os níveis de dióxido de enxofre, em suas concentrações máximas diárias e nas médias aritméticas anuais.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-27.gif'),
				caption: 'Gráfico 28. Concentrações Máximas Diárias (24 horas) – SO2',
				fonte: 'Cetesb, 2019'
			}"></Imagem>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Grafico-A-28.gif'),
				caption: 'Gráfico 29. Médias Aritméticas Anuais (MAA) – SO2',
				fonte: 'Cetesb, 2019'
			}"></Imagem>
			<p>Portanto, a análise da qualidade do ar no entorno do PIU Jockey Club pode ser considerada adequada, dentro dos padrões estabelecidos pela Resolução CONAMA nº 491/2018 e pelo Decreto Estadual nº 59.113/2013, exceto pelos ainda elevados níveis de ozônio. Esta condição se dá pelo esforço em reduzir as emissões de poluentes veiculares nas últimas décadas, destacando-se o ano de 2014 com relação aos níveis de dióxido de enxofre. Essa medida é importante para a realidade municipal e para o entorno da área de projeto, medida pela estação Pinheiros, tendo em vista que a região não apresenta fontes poluidoras fixas (indústrias), sendo a frota veicular a fonte prevalente emissora de poluentes atmosféricos.</p>
			<h4>Aspectos geológicos</h4>
			<p>O Município de São Paulo, desde a sua fundação no século XVI até o final do século XIX, limitou-se à ocupação das colinas existentes na região, somente após o final deste período é que se inicia a ocupação da várzea dos rios.</p>
			<p>A partir de 1930, a Companhia City, responsável pela urbanização do Butantã, objetivando trazer uma opção de lazer atraente para a região, doou o terreno atualmente localizado na margem oeste do Rio Pinheiros ao Jockey Club, cujas instalações foram inauguradas em 1941. O terreno de aproximadamente 600.000m², que ocupa uma largura aproximada de 375m da planície aluvial do Rio Pinheiros, é composto parte por terra mole e solo compressível e outra parte por aluviões argilo-arenosos recentes e solos turfosos de várzea, região da planície aluvial sujeita a inundações periódicas situada entre as cotas 720 e 725. </p>
			<p>Outro trecho sujeito a inundações anuais é o vale ocupado pela planície aluvial do Córrego Pirajussara, local de inundação que se estende até a foz do Córrego Pirajussara Mirim. O terreno do Jockey Club está inserido na Área de Contribuição Direta de Escoamento Difuso entre os Córregos Pirajussara e Oscar Americano, que apresenta ao norte uma região de antigo meandro do Rio Pinheiros, com solo argiloso escuro, anteriormente permanentemente encharcado, constituindo–se atualmente numa área da planície aluvial sujeita a inundações anuais, situada na cota 720. Fazem parte ainda da Área de Contribuição Direta de Escoamento Difuso entre os Córregos Pirajussara e Oscar Americano o trecho que se eleva da cota 725 até a cota 760, formado por Gnaisse, e outro trecho que se estende da cota 735 até a cota 780, com solo do Sedimento Terciário.</p>
			<p>Toda a Área de Contribuição Direta de Escoamento Difuso entre os Córregos Pirajussara e Oscar Americano se apresenta densamente urbanizada  e transformada por retificação, canalização dos córregos e aterros que desconfiguraram a paisagem original.</p>
<!-- Mapa 19: Aspectos geológicos. Fonte: Geosampa, 2019. -->

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa19A.jpg'),
				titulo: 'Mapa 25: Aspectos geológicos',
				fonte:'Geosampa, 2019. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#6da8b8', descricao: 'Hidrografia principal' },
					{ borda: '#63c0c3', linha: true, espessura: 2, descricao: 'Córregos drenados' },
					{ fundo: '#ab7059', descricao: 'Terra mole e solo compreensível' },
					{ fundo: '#e4b772', descricao: 'Planície aluvial' },
					{ fundo: '#c89158', descricao: 'Gnaisse' },
					{ fundo: '#d8a88c', descricao: 'Sedimento terciário' },
					{ fundo: '#713a1f', descricao: 'Terraço e terreno elevado' },
					{ fundo: '#87e5fd', descricao: 'Área sujeita à inundação' }
				]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa20A.jpg'),
				titulo: 'Mapa 26: Relevo',
				fonte:'MDC, 2019. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ linha: true, fundo: '#e2d191', descricao: 'Altitude até 750m' },
					{ linha: true, fundo: '#dea94c', descricao: 'Altitude de 750 a 765m' },
					{ linha: true, fundo: '#d69e5c', descricao: 'Altitude de 765 a 780m' },
					{ linha: true, fundo: '#cc5f00', descricao: 'Altitude acima de 780m' }
				]
			}"></Imagem>

			<h4>Drenagem</h4>
			<p>A retificação do Rio Pinheiros, a urbanização de sua várzea, a impermeabilização de sua bacia e a canalização de seus afluentes causam inundações e enchentes. Cabe ao Município as providências para a contenção das águas pluviais ao longo das bacias para conter as inundações que ocorrem nas várzeas. Providências que devem procurar reduzir a vazão de águas pluviais que se dirigem aos córregos através do aumento das áreas permeáveis e implantação de praças alagáveis. O Jockey Club está situado na Área de Contribuição Direta de Escoamento Difuso entre os Córregos Pirajussara e Oscar Americano que, como já mencionado, apresenta ao norte uma região de antigo meandro do Rio Pinheiros sujeita a inundações anuais.</p>
			<h4>Córrego Pirajussara</h4>
			<p>O Córrego Pirajussara nasce no Capão Redondo, segue pela divisa do MSP até Campo Limpo, passa por Vila Sonia e Butantã. Em Capão Redondo apresenta trechos canalizados abertos e fechados, em Campo Limpo canal aberto, em Vila Sonia e Butantã, em canal fechado sob a Av. Pirajussara, Av. Eliseu de Almeida e Av. Caxingui, na Cidade Universitária em canal natural aberto até sua foz no Rio Pinheiros. A Bacia do Córrego Pirajussara possui sete piscinões com capacidade total de armazenamento de 1.200.000m³: Nova República (Embu, 110.000m³); Parque Pinheiros (Taboão da Serra, 117.000 m³); Portuguesinha (Taboão da Serra, 120.000 m³); CPTM/Maria Sampaio (MSP, 120.000m³); Eliseu de Almeida (São Paulo/Taboão da Serra, 113.000m³); Sharp (MSP, 500.000m³) e Olaria (MSP, 120.000m³). A instalação dos piscinões tem por função manter a vazão do Córrego Pirajussara constante e reduzir as inundações em Vila Sonia e Butantã, ao longo da planície aluvial do Pirajussara nas Av. Pirajussara, Eliseu de Almeida e Caxingui, no quadrilátero da Av. Magalhães de Castro, Valentin Gentil, Afrânio Peixoto e Prof. Melo Moraes, bem como, na planície aluvial do Córrego Itararé, canalizado sob a Av. Jorge João Saad.</p>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa21A.jpg'),
				titulo: 'Mapa 27: Bacia hidrográficas',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#9cc1c7', descricao: 'Hidrografia principal' },
					{ linha: true, fundo: '#00adc7', descricao: 'Córregos drenantes' },
					{ fundo: '#9cd8e8', descricao: 'Área sujeita a inundação' },
					{ fundo: '#ff1601', descricao: 'Reservatórios de amortecimento (piscinões)' },
					{ fundo: '#f7fcab', descricao: 'Bacia Hidrográfica Córrego Pirajussara' },
					{ fundo: '#ff844e', descricao: 'Bacia Hidrográfica Córrego Oscar Americano' },
					{ fundo: '#fed598', descricao: 'Área de Contribuição Direta de Escoamento Difuso - Pirajussara/Oscar Americano' },
					{ fundo: '#f7be69', descricao: 'Área de Contribuição Direta de Escoamento Difuso - Oscar Americano/Pedro Avancini' }
				]
			}"></Imagem>

			<h4>Córrego Oscar Americano</h4>
			<p>O Córrego Oscar Americano tem aproximadamente 2.100m de extensão, nasce no Distrito Morumbi, próximo à R. Ícaro Sydow, dirigindo-se à Av. Amarilis, Av. Oscar Americano, passando sob a Av. dos Tajurás. R. Severo Dumont, R. Dr. José Augusto de Queiroz, desembocando no Rio Pinheiros. Durante todo o seu percurso, desde a sua nascente até a foz, encontra-se  em canalização fechada. Tem um afluente na sua margem esquerda, que se encontra dentro do  Parque Antonio Volpi, desde a sua nascente até sua foz no Córrego Oscar Americano, se encontra em leito natural e tem aproximadamente 380m de extensão.</p>

			<Imagem :maxWidth="'600px'" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa22A.jpg'),
				titulo: 'Mapa 22: Bacia hidrográfica da AID',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#9cc1c7', descricao: 'Hidrografia principal' },
					{ linha: true, fundo: '#00adc7', descricao: 'Córregos drenantes' },
					{ fundo: '#9cd8e8', descricao: 'Área sujeita a inundação' },
					{ fundo: '#ff1601', descricao: 'Reservatórios de amortecimento (piscinões)' },
					{ fundo: '#f7fcab', descricao: 'Bacia Hidrográfica Córrego Pirajussara' },
					{ fundo: '#ff844e', descricao: 'Bacia Hidrográfica Córrego Oscar Americano' },
					{ fundo: '#fed598', descricao: 'Área de Contribuição Direta de Escoamento Difuso - Pirajussara/Oscar Americano' },
					{ fundo: '#f7be69', descricao: 'Área de Contribuição Direta de Escoamento Difuso - Oscar Americano/Pedro Avancini' }
			]
			}"></Imagem>

			<h4>Saneamento</h4>
			<p>A melhoria da qualidade de vida está ligada à oferta de áreas verdes, o atendimento aos padrões de qualidade do ar, dos rios e córregos. No MSP a canalização de diversos córregos e a degradação da bacia Rio Pinheiros gera mau cheiro, inundações e deterioração da paisagem. As principais causas da poluição dos rios e córregos são a poluição difusa, o lançamento de esgoto doméstico, causadas por canalizações que não chegam às estações de tratamento, por residências que não estão conectadas à rede coletora, devido às galerias de águas pluviais lançarem resíduos sólidos diretamente na rede hídrica, sem prévio tratamento e pelo lançamento de resíduos químicos provenientes das indústrias. Após a construção da Represa Billings, o Rio Pinheiros deixou de receber 12 m³/s de água de suas nascentes, passando a ser alimentado por 2,67m³/s provenientes de seus afluentes e por 6,9m³/s de esgoto doméstico e industrial. Os corpos d’água da bacia do Rio Pinheiros devem atender aos padrões Classe IV, que permitem navegação e harmonia paisagística, padrões estes que não são atingidos nas condições atuais em que se encontram.</p>
			<h4>Córrego Pirajussara</h4>
			<p>Somente cinco afluentes do Córrego Pirajussara foram despoluídos pelo Programa Córrego Limpo da SABESP. A CETESB mantém monitoramento da qualidade das águas do Pirajussara na USP, onde, de 2012 a 2014 foram obtidos Índices de Qualidade das Águas Médios Anuais classificados como Péssimos (IQA entre 17 e 19, quando IQA são considerados Bons acima de 50). Em análises efetuadas de janeiro a novembro de 2013 foram detectadas 16,6mg/l de Nitrogênio Amonical (proveniente de efluentes industriais), 2,6mg/l de Fósforo Total e 3.066.700 micro-organismos (Escherichia Coli) em amostras de 100ml  (provenientes de esgoto doméstico), 80,8mg/l de Demanda Biológica de Oxigênio e 2,2mg/lO2  de Oxigênio Dissolvido. A contaminação por esgoto doméstico ocorre, principalmente devido a habitações irregulares existentes na bacia nos Distritos Capão Redondo, Campo Limpo, Vila Andrade e Vila Sonia.</p>
			<h4>Córrego Oscar Americano</h4>
			<p>O Córrego Oscar Americano encontra-se despoluido pelo Programa Córrego Limpo da SABESP. Segundo o Relatório de Monitoramento da Demanda Biológica de Oxigênio (DBO) do Programa Córrego Limpo, a DBO do Córrego Oscar Americano, de maio de 2017 a dezembro de 2018 se manteve entre 01 e 14mg/l.</p>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa23A.jpg'),
				titulo: 'Mapa 29: Saneamento - Programa Córrego Limpo',
				fonte:'Geosampa. Acesso: 01 out 2019',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#9cc1c7', descricao: 'Hidrografia principal' },
					{ linha: true, borda: '#00adc7', descricao: 'Córregos drenantes' },
					{ fundo: '#f7fcab', descricao: 'Bacia Hidrográfica Córrego Pirajussara' },
					{ fundo: '#ff844e', descricao: 'Bacia Hidrográfica Córrego Oscar Americano' },
					{ fundo: '#fed598', descricao: 'Área de Contribuição Direta de Escoamento Difuso - Pirajussara/Oscar Americano' },
					{ fundo: '#f7be69', descricao: 'Área de Contribuição Direta de Escoamento Difuso - Oscar Americano/Pedro Avancini' },
					{ fundo: '#03afff', descricao: 'Programa Córrego Limpo (SABESP)' }
			]
			}"></Imagem>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa24A.jpg'),
				titulo: 'Mapa 30: Favelas e precariedade de saneamento básico',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#9cc1c7', descricao: 'Hidrografia principal' },
					{ linha: true, fundo: '#00adc7', descricao: 'Córregos drenantes' },
					{ fundo: '#f7fcab', descricao: 'Bacia Hidrográfica Córrego Pirajussara' },
					{ fundo: '#ff844e', descricao: 'Bacia Hidrográfica Córrego Oscar Americano' },
					{ fundo: '#fed598', descricao: 'Área de Contribuição Direta de Escoamento Difuso - Pirajussara/Oscar Americano' },
					{ fundo: '#f7be69', descricao: 'Área de Contribuição Direta de Escoamento Difuso - Oscar Americano/Pedro Avancini' },
					{ borda: '#0000cc', espessura: 3, descricao: 'Favelas' }
				]
			}"></Imagem>

			<h4>Áreas contaminadas</h4>
			<p>Atividades comerciais que manipulam substâncias tóxicas ou inflamáveis, determinadas atividades industriais dependendo das matérias primas, produtos e resíduos gerados são consideradas atividades potencialmente contaminadoras. </p>
			<p>Na área de influencia direta do PIU Jockey Club foram identificadas áreas contaminadas através do cadastro da Companhia Ambiental do Estado De São Paulo (CETESB – Dezembro/2018).</p>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa25A.jpg'),
				titulo: 'Mapa 31: Áreas contaminadas e reabilitadas na AID',
				fonte:'CETESB 2018. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ simbolo: imgSrc('arquivos/legendas/icones/ponto-vermelho.png'), descricao: 'Contaminada com risco confirmado (ACRi)'},
					{ simbolo: imgSrc('arquivos/legendas/icones/ponto-laranja.png'), descricao: 'Contaminada em processo de reutilização (ACRu)'},
					{ simbolo: imgSrc('arquivos/legendas/icones/ponto-amarelo.png'), descricao: 'Contaminada sob investigação (ACI)'},
					{ simbolo: imgSrc('arquivos/legendas/icones/ponto-verde-limao.png'), descricao: 'Em processo de monitoramento para encerramento (AME)'},
					{ simbolo: imgSrc('arquivos/legendas/icones/ponto-verde.png'), descricao: 'Em processo de remediação (ACRe)'},
					{ simbolo: imgSrc('arquivos/legendas/icones/ponto-cyan.png'), descricao: 'Reabilitada para uso declarado'},
			]
			}"></Imagem>

			<ul class="links">
				<li>
					<a :href="src('arquivos/jockey/anexos/TABELA-24_cadastro-de-areas-contaminadas.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Tabela 13: Cadastro de áreas contaminadas nos distritos Morumbi, Butantã e Pinheiros. Fonte CETESB, dezembro 2018.</div>
						<span>150kb</span>
					</a>
				</li>
			</ul>

			<h4>Áreas Verdes</h4>
			<p>O PIU Jockey Club está inserido em uma das subprefeituras com maiores índices de áreas verdes do Município de São Paulo. Para a análise das áreas verdes do entorno deste projeto, é preciso compreender a realidade do Município de São Paulo, no que se refere a esta temática.</p>
			<p>O Plano Diretor Estratégico organiza estruturalmente o Município de São Paulo em duas macrozonas: </p>
			<ul>
				<li>a Macrozona de Estruturação da Qualificação Urbana, “situada integralmente na Zona Urbana, apresenta grande diversidade de padrões de uso e ocupação do solo, desigualdade socioespacial, padrões diferenciados de urbanização e é a área do Município mais propícia para abrigar os usos e atividades urbanos” (PDE, 2014, art. 10); </li>
				<li>a Macrozona de Proteção e Recuperação Ambiental, é um território ambientalmente frágil devido às suas características geológicas e geotécnicas, à presença de mananciais de abastecimento hídrico e à significativa biodiversidade, demandando cuidados especiais para sua conservação. </li>
			</ul>
			<p>Tendo em vista essa característica territorial, expressa pelas macrozonas, em que pese a presença de importantes áreas de proteção ambiental, definidas como Unidades de Conservação, e presença de fragmentos de Mata Atlântica, sua distribuição no território é bastante desigual.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Figura-A-5-2.jpg'),
				caption: 'Figura 10. Macrozonas',
				fonte: 'Plano Diretor Estratégico, 2014.'
			}"></Imagem>

			<p>A Subprefeitura Butantã está parcialmente inserida na Macrozona de Proteção e Recuperação Ambiental, que abrange todo o distrito Raposo Tavares e uma parcela dos distritos Rio Pequeno e Vila Sônia. O restante do Rio pequeno e da Vila Sônia, e os distritos Butantã e Morumbi encontram-se integralmente na Macrozona de Estruturação da Qualificação Urbana, incluindo a área de estudo deste projeto. </p>
			<p>Assim, para a análise da área de influência indireta, consideramos as áreas verdes em relação à Macrozona em que o PIU Jockey está inserido. Para o levantamento das áreas, apreciadas áreas verdes aquelas definidas:</p>
			<ul>
				<li>como parques municipais, parques estaduais e parques estaduais e proteção integral no Mapa 5 – Sistema de Áreas Protegidas, Áreas Verdes e Espaços Livres da Lei Municipal nº 16.050/2014 – Plano Diretor Estratégico- PDE;</li>
				<li>ZEPAM e Praças e Canteiros, no Mapa Perímetro das Zonas, na Lei Municipal nº 16.402/2016 – Lei de Parcelamento, Uso e Ocupação do Solo – LPUOS;</li>
				<li>Levantamento das reservas de Mata Atlântica, realizado no âmbito do Plano Municipal da Mata Atlântica – PMMA, cuja camada vetorial foi disponibilizada pelo portal Geosampa.</li>
			</ul>
			<p>É importante destacar que as informações listadas acima e consideradas como áreas verdes para este relatório, em muitos casos se sobrepõem. É o caso de alguns parques que, por definição do PDE, são categorizados como ZEPAM, enquanto os parques lineares não o são. Além disso, no caso específico do Butantã, a presença do Campus Cidade Universitária é um aspecto bastante relevante para o levantamento das áreas verdes deste território. Como a USP é definida pelo Zoneamento como ZOE, ela não seria incorporada ao levantamento das áreas verdes, o que representaria uma distorção, subestimando os valores de áreas verdes da área analisada. Por outro lado, seria superestimado incorporar à análise toda a ZOE Cidade Universitária. Assim, metodologicamente, optou-se por incorporar à análise as reservas de mata atlântica identificadas pelo Plano Municipal de Mata Atlântica. Elas revelam porções importantes do território para a análise das áreas verdes, ainda que muitas delas se sobreponham às ZEPAM, muitas das quais não são pertencentes à classe dos bens de uso comum do povo, mas prestam importantes serviços ambientais ao território.</p>
			<p>Para fins de cálculo da área verde, foram analisadas as camadas vetoriais referentes às informações consideradas, retiradas do PDE, da LPUOS e do Plano Municipal da Mata Atlântica. Como há sobreposição entre as camadas, foram executadas ações de geoprocessamento a fim de evitar distorções numéricas. O resultado está listado na tabela a seguir, que expressa a relação de áreas verdes em cada um dos distritos da AII e também o índice de área verde por habitante. Vale considerar que a população considerada nesta análise, extraída do Censo Demográfico do IBGE, de 2010, é o dado oficial mais atualizado, ainda que já tenha nove anos. Contudo, para esta análise, as projeções de populações poderiam gerar distorções dado o perímetro recortado do território.</p>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa26A.jpg'),
				titulo: 'Mapa 32: Áreas verdes',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#c5e372', descricao: 'Praças e canteiros' },
					{ fundo: '#69cf47', descricao: 'Parques municipais' },
					{ fundo: '#377231', descricao: 'Parques estaduais' },
					{ fundo: '#89c151', descricao: 'Reserva de Mata Atlântica - Mata Obrófila Densa' },
					{ fundo: '#d2df3e', descricao: 'Reserva de Mata Atlântica - Bosque Heterogêneo' },
					{ fundo: '#f9cf5c', descricao: 'Reserva de Mata Atlântica - Campos Gerais' },
				]
			}"></Imagem>

			<p>Assim, a análise permite afirmar que o distrito Morumbi, onde o Jockey Club está inserido, tem 11% de seu território ocupado por áreas verdes. Como sua densidade é baixa, o índice de área verde por habitante é de 27,4 m², muito acima dos índices observados na Macrozona de Estruturação da Qualificação Urbana, que é de 5,8 m² e corresponde a 7% do território. A análise permite afirmar que todos os distritos da AII apresentam índices de área verde por habitante superior à média da macrozona urbana. </p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Tabela-29.gif'),
				caption: 'Tabela 14. Percentuais de área verde (PAV) e índice de áreas verdes por habitante (IAV) na AII.',
				fonte: 'IBGE, Censo Demográfico, 2010. Elaboração: SP Urbanismo, 2019.'
			}"></Imagem>

			<h4>Arborização viária</h4>
			<p>Ainda que não tenham sido quantificadas ou consideradas no cálculo das áreas verdes dos distritos e das macrozonas, a arborização urbana é muito importante para a formação de corredores ecológicos, sombreamento e melhorias da umidade relativa do ar e, consequentemente, do microclima. A arborização urbana é prevalente nas subprefeituras Butantã e Pinheiros, sobretudo nos seis distritos que compõem a área de influência indireta. Ela é particularmente expressiva nas proximidades do Jockey Club, inclusive pela característica morfológica da zona estritamente residencial - ZER do entorno, característica esta que remonta à época de seu loteamento.</p>

			<h4>Morfologia urbana da AII</h4>
			<p>O Jockey Club se insere em um território morfológico caracterizado por loteamentos planejados, datados da primeira metade do século XX, inspirados nos bairros jardins e nas cidades jardins idealizadas por Ebenezer Howard, na Inglaterra. Assim, dos seis distritos que compõem a área de influência indireta do PIU Jockey Club, quatro apresentam esta característica de morfologia urbana.</p>
			<p>Ainda que só os jardins tenham seus parâmetros de uso e ocupação do solo protegidos por resolução de tombamento do Conpresp, os demais loteamentos apresentam semelhantes parâmetros, o que torna a ambiência nesses bairros consonante com espaços de grande qualidade ambiental. </p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Figura-A-6.jpg'),
				caption: 'Figura 11.  Vista da Rua Severo Dumont, Morumbi',
				fonte: 'Google Street View, 2015'
			}"></Imagem>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Figura-A-7.jpg'),
				caption: 'Figura 12.  Vista da Rua Campina, Jardim Guedala, Morumbi',
				fonte: 'Google Street View, 2015'
			}"></Imagem>

			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/jockey/Figura-A-8.jpg'),
				caption: 'Figura 13.  Vista da Rua Cidade do Bosque, Morumbi.',
				fonte: 'Google Street View, 2015'
			}"></Imagem>
			<h4>O Campus da Cidade Universitária</h4>
			<p>A Cidade Universitária, campus que abriga parte das faculdades e institutos da Universidade de São Paulo – USP e localizada no distrito Butantã, não é formalmente considerada uma área verde institucional. Para o cálculo de áreas verdes do distrito, foram considerados apenas os fragmentos de mata atlântica integrantes do Plano Municipal da Mata Atlântica e as praças e canteiros assim definidos pelos mapas que compõem a Lei do Zoneamento, conforme descrito anteriormente. </p>

			<p>Contudo, além da falha metodologia desta análise, que exclui a Praça do Relógio, uma vez que a mesma encontra-se demarcada como ZOE, a própria caracterização morfológica do tecido urbano do campus o configuram como território de grande importância para a flora e fauna da região, e presta importantes serviços ambientais referentes ao clima urbano, agindo como mitigador dos impactos de ilha de calor decorrentes do processo antrópico de ocupação do solo.</p>

			<p>Antes da implantação do Campus e do Instituto Butantan, a área era uma fazenda que abrigava o primeiro engenho de açúcar da antiga Vila de São Paulo. Naquela época, a região do atual bairro do Butantã era considerada rural e só foi urbanizada após a criação do instituto e a fundação da Cidade Universitária, em 1968. A área permanece densamente arborizada, com 10 hectares de floresta tropical nativa, protegida pela reserva florestal do Instituto de Biociências (IB). </p>

			<p>O campus é ainda rico em biodiversidade de flora e fauna, sendo encontradas mais de 368 espécies de plantas, dentre arbóreas-arbustivas, herbáceas e outras. Diversas espécies de aves também podem ser vistas na região, além de gambás e saguis. Infelizmente, a antropização do território vem trazendo consigo espécies invasoras de flora, além das plantações de palmeiras australianas, de função meramente ornamental.</p>

			<h4>Fauna</h4>
			<p>A pressão exercida pelo avanço da urbanização sobre os ecossistemas podem causar perdas irreversíveis da biodiversidade reduzindo a riqueza das espécies com o decorrer do tempo. A importância da conservação da biodiversidade tem caráter preventivo, por meio do cadastro e detecção de espécies, e monitoramento da frequência de observação das mesmas. A partir da constatação da diminuição da frequência de observação das espécies registradas, é preciso desenvolver estratégias preventivas de conservação.</p>

			<p>O Município de São Paulo é lar de grande diversidade de fauna. Ainda que a grande biodiversidade ocorra nos territórios protegidos e nas Unidades de Conservação localizadas na Macrozona de Proteção e Recuperação Ambiental, a zona urbana tem uma avifauna bastante expressiva, de modo que a diversidade de aves dividem o território urbano com a população, muitas vezes sem serem notadas.</p>

			<p>A Divisão de Fauna Silvestre, da Secretaria Municipal do Verde e do Meio Ambiente – SVMA catalogou 372 diferentes espécies de aves residentes na cidade. Esta riqueza inclui aves migratórias, endêmicas e até mesmo espécies ameaçadas de extinção. As aves desempenham importantes serviços ambientais, de valores inestimáveis e são fundamentais para a polinização de flores, dispersão de sementes e controle de pragas. Sua presença também pode ser medida como indicador do quão saudável o ambiente se encontra.</p>

			<p>Os parques municipais e áreas verdes do Município são alguns dos locais onde estes animais encontram abrigo, alimento e local para reprodução. Assim, para a caracterização da fauna residente na área de influência do PIU Jockey Club, foram levantados estudos realizados a partir de levantamento de dados secundários, principalmente pela Divisão de Fauna Silvestre da SVMA.</p>

			<h4>Parque Alfredo Volpi</h4>
			<p>Localizado na Av. Eng. Oscar Americano, 480, distrito Morumbi, o Parque Alfredo Volpi foi inaugurado em 27/04/1971, com 142.400 m² de áreas de lazer e contemplação. O parque fazia parte de grande fazenda no século XIX, com o plantio de chá. A SVMA tem registro de 107 espécies de fauna, sendo a grande maioria aves, além de peixe (carpa), lagarto “papa-vento, bicho-preguiça e saguis. Dentre as aves, as mais presentes são: Pica-paus, sanhaços e saíras (traupídeos) e papa-moscas/tiranídeos (pássaros da família do bem-te-vi). Podemos observar ainda irerês, socó-dorminhoco, garça-branca, martins-pescadores, carão e algumas aves de rapina, como gavião-peneira, gavião-carijó, corujinha-do-mato e caracará.</p>

			<h4>Chácara do Jockey</h4>
			<p>Localizado na Av. Prof. Francisco Morato, 5300 - Vila Sônia, o parque foi inaugurado em abril de 2016. Com 143.531 m², o Jockey Club adquiriu a propriedade rural em 1946, com o objetivo de estabelecer um local adequado para a criação e treinamento de cavalos de corrida. Em 2014, a Municipalidade tomou posse do imóvel por meio de acordo com o Jockey Club, por meio do instituto legal da Dação em Pagamento, no qual o Jockey Club pagou parte de sua dívida com a Prefeitura da Cidade de São Paulo com o imóvel. Demarcado como parque em planejamento pelo PDE, a área foi automaticamente protegida com zoneamento restritivo de ZEPAM.</p>

			<p>O parque agrega funções de esporte, lazer, cultura e contemplação, dividido em Núcleo Esportivo, que abriga usos destinados à convivência, quadra poliesportiva, skate, patins, campos de futebol e caminhada, além da sede dos Pequeninos do Jockey, voltado à formação de base de jogadores de futebol. O Núcleo Cultural das Baias utiliza as edificações históricas, além da Casa de Cultura e da Praça da Balança. O Núcleo Contemplativo abrange amplo gramado e áreas de piquenique.</p>

			<p>Acerca da Fauna, a SVMA registrou 33 espécies, sendo 29 de aves e 4 de borboletas. É possível observar espécies endêmicas da Mata Atlântica como o arredio-pálido e o periquito-rico, além de columbídeos, sabiás, bem-te-vis, sanhaçus, e ainda o gavião-asa-de-telha, rapinante ameaçado de extinção.</p>

			<h4>Luiz Carlos Prestes</h4>
			<p>Localizado na Rua João Della Manna, 665 , com 27.100 m², o parque abriga infraestrutura para atividades de esportes e lazer, como churrasqueiras, quiosques, quadras poliesportivas, playgrounds, trilhas e pista de caminhada. </p>
			<p>Sua fauna é composta sobretudo por espécies aladas, 46 espécies de aves e 5 de borboletas. Dentre as borboletas, destacam-se as do grupo asas-de-vidro,. Periquitos, papagaios, maracanãs, tuins, saí-canários, sanhaçus, saíras-amarela, pitiguaris e bicos-de-lacre. Ocorrem espécies endêmicas da Mata Atlântica, como pica-pauzinho-verde-carijó, picapauzinho-de-coleira, flautim e arredio-pálido. É possível se observar também aves de rapina como o gavião-carijó, corujinha-do-mato e o caracará. Das espécies migratórias, o suiriri, bem-te-vi-rajado e tesourinha, espécies migratórias podem ser vistos de setembro a março.</p>
			<p>Quanto à fauna terrestre,existem registros da cobra falsa-coral e do marsupial gambá-de-orelha-preta. Há também registros de 1 espécie de molusco, 5 de aranhas, 9 de insetos. </p>

			<h4>Parque Mário Pimenta Camargo</h4>
			<p>Localizado na Av. Henrique Chamma, 420, Pinheiros e foi implantado em 2008 pela Coordenação das Subprefeituras, com 133.547m² de área. O parque destaca-se por possuir Roteiros Botânicos, quais sejam: Mirtáceas, Frutíferas Nativas, Frutíferas Exóticas, Madeiras Nobres, Círculos, Palmeiras, Árvores Especiais e Árvores Ornamentais.</p>

			<p>A fauna registrada é composta por 54 espécies, sendo 42 de aves, 9 de insetos e 3 de moluscos. Dentre as aves, podem ser avistados quero-quero, avoante, rolinha, asa-branca, beija-flor-tesoura, pica-pau-do-campo, suiriri-cavaleiro, sabiá-do-campo e tico-tico. Observam-se maracanã-nobre, tuim, sanhaçu-do-coqueiro, ferreirinho-relógio, alegrinho e pitiguari. Os migratórios suiriris e tesourinhas podem ser avistados de setembro a março.</p>

			<h4>Parque da Previdência</h4>
			<p>Com 91.500m² de jardins, trilhas e áreas de estar, o parque localizado na Rua Pedro Peccinini, 88, Butantã foi inaugurado em 1979. Seu nome remonta à presença do Instituto de Previdência do Estado de São Paulo (IPESP) e funcionou como reservatório de águas para abastecimento do bairro até 1968. </p>

			<p>Conta com fragmentos da Mata Atlântica e nele foram identificadas, pela Divisão de Fauna da SVMA, 87 espécies de fauna, sendo 19 invertebrados (aranhas e borboletas), 8 répteis (serpentes e lagartos) e 2 mamíferos (gambá-de-orelha-preta e sagui). Há ainda 58 espécies de aves, incluindo algumas ameaçadas de extinção como a araponga e o chibante. São observadas espécies endêmicas da Mata Atlântica, como o picapauzinho-de-coleira, arredio-pálido e cigarra-bambu. Há ainda registros de corujinha-do-mato, gavião-gato, maracanãs, papagaios, gaturamo-rei e saí-azul. </p>

			<p>Dentre a fauna terrestre, é possível encontrar o agitado camaleãozinho, um pequeno lagarto esverdeado com ocorrência associada às matas preservadas no Município de São Paulo.</p>

			<h4>Parque Raposo Tavares</h4>
			<p>Localizado junto à Rodovia Raposo Tavares, o parque foi o primeiro da América do Sul construído sobre um aterro sanitário. Inaugurado em 2008, conta com 195.000m² de solo formado por camadas compactadas de lixo revestidas por uma camada de argila e por outra de terra, com a finalidade de diminuir a emanação de gases e criar um substrato à vegetação.</p>

			<p>A fauna registrada neste parque é composta por 3 espécies de répteis, 2 de aranhas e 53 de aves, dentre as quais periquito-rico restrito à Mata Atlântica, além espécies comuns como coruja-buraqueira, andorinha-pequena-de-casa, suiriri-cavaleiro, chopim, tico-tico, corujinha-do-mato, sabiás e pica-paus. Dentre as espécies migratórias, há registros de suiriri, bem-te-vi-rajado e andorinhão-do-temporal.</p>

			<h4>Reserva do Morumbi</h4>
			<p>Localizada no cume de uma pequena colina próxima à margem do Rio Pinheiros, a reserva do Morumbi é uma área de 15.600m² de mata fechada remanescente da Mata Atlântica, com função de educação ambiental e visitas e trilhas monitoradas. Na fauna local foram registradas pela SVMA 21 espécies de aves e 1 mamífero (sagui). Das aves, foram avistados periquito-rico, joão-de-barro, bem-te-vi, pitiguari, sabiás, sanhaço-cinzento, pula-pula, além de aves de rapina como o gavião-miúdo, gavião-caboclo e carrapateiro.</p>

			<h4>Parque Villa Lobos</h4>
			<p>O Parque Estadual Villa Lobos, localizado Av. Professor Fonseca Rodrigues, 2001, em Alto de Pinheiros, foi inaugurado em 1994, que transformou em parque público o antigo depósito de entulho e material dragado do Rio Pinheiros, com 765.342,88m². Portanto, a constituição da flora do parque foi realizada por ação antrópica em processo de recuperação ambiental, na qual a Secretaria Estadual do Meio Ambiente – SMA, levou em consideração a diversidade de espécies para reflorestamento heterogêneo de espécies nativas. Os levantamentos de fauna do parque apontam para a presença de 46 espécies de aves, das quais podem ser avistados joão-de-barro, pardal, quero-quero, tico-tico, vira-bosta, andorinha-pequena-de-casa, bem-te-vi, sabiá-laranjeira, sanhaçu-cinzento, cambacica, alma-de-gato, canário-da-terra-verdadeiro, periquito-rico, tuim. Há também cambacica, alma-de-gato e Sabiás-laranjeira.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">Programa de Interesse Público</h2>
			<ul class="links">
				<li>
					<a :href="src('arquivos/jockey/anexos/PIU_JOCKEY_Programa-de-Interesse-Publico.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>PROGRAMA DE INTERESSE PÚBLICO</div>
						<span>1,6 Mb</span>
					</a>
				</li>
			</ul>

			<Comments v-if="parseInt(estaConsulta.ativo) === 1" :attr="{ id: commentId(), context: 'Programa de Interesse Público' }"></Comments>

			<h4>Introdução</h4>
			<p>O Programa de Interesse Público considera as informações levantadas na Análise Socioterritorial e Ambiental para apresentar as diretrizes de desenvolvimento e os principais aspectos a serem enfrentados pelo PIU Jockey Club para que se constitua como uma iniciativa que contribua para a utilização mais intensiva do hipódromo e para o desenvolvimento urbano local e da cidade, tendo por base as diretrizes presentes no PDE. Além da participação espontânea, os munícipes poderão opinar sobre questões propostas pela SP Urbanismo, auxiliando na formulação de propostas para a sequência do projeto. O presente produto apresenta também no Anexo I um estudo de casos de projetos similares envolvendo a reestruturação de hipódromos, com o objetivo de auxiliar a população a visualizar as possibilidades de transformação para este PIU.</p>
			<h4>Programa de Interesse Público</h4>
			<p>O Programa de Interesse Público precede o desenvolvimento do projeto de intervenção urbana. A partir da identificação de demandas e oportunidades urbanísticas e sociais nos diagnósticos socioterritorial e ambiental, o programa se constitui como uma seleção preliminar de diretrizes para o desenvolvimento do PIU em si. Para tanto, buscar responder por que o projeto interessa à sociedade e quais aspectos urbanísticos serão contemplados.</p>
			<h4>O interesse público</h4>
			<p>Os equipamentos classificados como ZOE são áreas públicas ou privadas com funções urbanas excepcionais, que necessitam de uma abordagem específica para que tenham seus parâmetros urbanísticos definidos, dando segurança técnica e jurídica para o funcionamento das atividades neles implantadas e para futuras reformas, ampliações ou transformações. Para terem sido classificados como ZOE, tais equipamentos foram reconhecidos pela Prefeitura de São Paulo como áreas que desempenham um papel relevante para a história, a cultura, o lazer, a acessibilidade ou para serviços essenciais à cidade, sendo, portanto, sua regulação de interesse de toda a sociedade. </p>
			<p>O Hipódromo de Cidade Jardim, administrado pelo Jockey Club de São Paulo, conforme apresentado no diagnóstico socioterritorial, se enquadra neste reconhecimento, pois é um equipamento único na cidade, com uma rica história associada ao turfe e a eventos sociais e políticos de relevância local e nacional. A definição dos parâmetros urbanísticos aplicados ao local possibilitará a preservação de seus atributos arquitetônicos, urbanísticos e ambientais, ao mesmo tempo em que dará condições para que seu potencial possa ser mais bem explorado e o local possa se converter progressivamente em um equipamento multifuncional, integrando-se à vida urbana e mantendo sua relevância para a população. O PIU é, pois, o processo pelo qual a Prefeitura pode promover um debate transparente com o Jockey Club, com organizações da sociedade civil e cidadãos interessados para definir o futuro deste equipamento, buscando conciliar diferentes visões para atingir de forma mais ampla o interesse do conjunto da sociedade. </p>

			<h4>Diretrizes Urbanísticas</h4>
			<p>O Programa de Interesse Público procura traçar diretrizes alinhadas com o Plano Diretor Estratégico do Município de São Paulo - PDE (Lei nº 16.050/2014). De acordo com esta lei, o Jockey Club está na Macroárea de Estruturação Metropolitana – MEM, no setor Orla Ferroviária e Fluvial e no subsetor Arco Faria Lima – Águas Espraiadas – Chucri Zaidan. </p>
			<p>A Macroárea de Estruturação Metropolitana (MEM) caracteriza-se pela presença de importantes elementos do sistema de transporte, que articulam diferentes municípios e polos econômicos da Região Metropolitana de São Paulo, onde se verifica a necessidade de alcançar o equilíbrio da relação entre postos de trabalho e moradia. São objetivos da MEM, entre outros: aumento de densidades construtiva e demográfica para maior aproveitamento da terra urbana, implantação de novas atividades econômicas, recuperação ambiental, manutenção da população moradora e produção de HIS e HMP (Lei nº 16.050/2014, Seção I, Subseção I).</p>
			<p>Considerando que o setor Orla Ferroviária e Fluvial da MEM se constitui como um amplo território composto por subsetores com características distintas, o PIU Jockey Club deverá considerar, dentre os 11 objetivos definidos no art. 12, § 1º do PDE e apresentados no diagnóstico socioterritorial, aqueles aplicáveis a seu contexto, como ponto de partida para seu desenvolvimento. Esta identificação está expressa a seguir:</p>

			<blockquote class="leg">
				I - promover transformações estruturais orientadas para o maior aproveitamento da terra urbana com o aumento nas densidades construtiva e demográfica e implantação de novas atividades econômicas de abrangência metropolitana, atendendo a critérios de sustentabilidade e garantindo a proteção do patrimônio arquitetônico e cultural; <br><br>

				II - recuperação da qualidade dos sistemas ambientais existentes, com especial atenção à recuperação das planícies fluviais e mitigação das ilhas de calor;<br><br>
				V - incremento e qualificação da oferta de diferentes sistemas de transporte coletivo, articulando-os aos modos não motorizados de transporte e promovendo melhorias na qualidade urbana e ambiental<br><br>
				VII - redefinição dos parâmetros de uso e ocupação do solo para qualificação dos espaços públicos e da paisagem urbana;<br><br>
				IX - compatibilização de usos e tipologias de parcelamento do solo urbano com as condicionantes geológico-geotécnicas e hidrológicas; <br><br>
				X - recuperação, preservação e proteção de imóveis relacionados ao patrimônio industrial e ferroviário, bem como locais de referência da memória operária, incentivando usos e atividades compatíveis com sua preservação.<br><br>
			</blockquote>
			<p>Também é preciso considerar que o Jockey Club está em uma área limítrofe, de divisa entre a MEM e a MUC, sobre a qual incidem os eixos de estruturação e transformação urbana estabelecidos pelo PDE, “definidos pelos elementos estruturais dos sistemas de transporte coletivo de média e alta capacidade, existentes e planejados, determinam áreas de influência potencialmente aptas ao adensamento construtivo e populacional e ao uso misto entre usos residenciais e não residenciais” (Lei nº 16.050/2014, Art. 75).</p>

			<p>O patrimônio edificado e os espaços livres do Hipódromo de Cidade Jardim são protegidos pelas resoluções de tombamento do Condephaat e do Conpresp, apresentadas como anexos do Diagnóstico Socioterritorial. A partir do reconhecimento da importância histórica, esportiva e paisagística deste equipamento, tais documentos determinam a preservação de edifícios, a manutenção de espaços livres e a constituição de áreas envoltórias junto às testadas das avenidas Lineu de Paula Machado e Nações Unidas, possibilitando nas áreas remanescentes do lote uma transformação que não interfere no funcionamento do hipódromo e nas perspectivas visuais relevantes para o avistamento da arquitetura local. </p>

			<p>Em vista desses apontamentos, o PIU Jockey Club tem as seguintes diretrizes urbanísticas:</p>
			<blockquote class="leg diretrizes">
				1. Garantir a preservação do patrimônio histórico e dos atributos paisagísticos do hipódromo;
			</blockquote>

			<blockquote class="leg diretrizes">
				2.	Preencher as lacunas da regulação urbanística e edilícia para esta ZOE, possibilitando seu melhor aproveitamento;
			</blockquote>

			<blockquote class="leg diretrizes">
				3.	Preservar o funcionalmente do hipódromo, possibilitando a inserção de novos usos que possam conviver com a atividade principal do turfe e dar maior dinamismo ao equipamento e ao entorno, ampliando sua utilização pela população fora dos períodos de treinamentos e corridas;
			</blockquote>

			<blockquote class="leg diretrizes">
				4.	Possibilitar a ampliação dos serviços ambientais relativos a áreas verdes e soluções de drenagem atualmente prestados à cidade;
			</blockquote>
			<blockquote class="leg diretrizes">
				5.	Possibilitar a transformação e o adensamento em áreas dissociadas do hipódromo, situadas no mesmo lote, preservando a qualidade urbana e ambiental do entorno e impedindo o agravamento dos padrões de incomodidade atuais em decorrência de novas atividades;
			</blockquote>
			<blockquote class="leg diretrizes">
				6.	Qualificar a microacessibilidade de pedestres e ciclistas no entorno e nos acessos ao Jockey Club, considerando a necessidade de promover transposições qualificadas sobre o Rio Pinheiros, a partir das estações Hebraica-Rebouças e Cidade Jardim da CPTM, e nos percursos entre o hipódromo, a Estação Butantã do Metrô, o Corredor da Av. Prof. Francisco Morato e os principais equipamentos da região;
			</blockquote>
			<blockquote class="leg diretrizes">
				7.	Promover maior permeabilidade visual entre o hipódromo e o entorno e a ativação de fachadas na Av. Lineu de Paula Machado e na Rua Dr. José Augusto de Queiroz;
			</blockquote>
			<blockquote class="leg diretrizes">
				8.	Buscar contrapartidas para a ampliação da rede de equipamentos públicos e o atendimento habitacional na região.
			</blockquote>

			<Imagem :maxWidth="mapMaxWidth" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa1B.jpg'),
				titulo: 'Mapa 33 - Áreas de Transformação segundo Critérios do PDE',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'AID - Área de Influência Direta' },
					{ borda: '#000', espessura: 3, descricao: 'AII - Área de Influência Indireta' },
					{ fundo: '#bf7f7f', descricao: 'Perímetro da Macroárea de Estruturação Metropolitana (MEM) (Lei 16.050/2014)' },
					{ borda: '#e65d3e', espessura: 3, pontilhado: true, descricao: 'Áreas de transformação segundo critérios do PDE' }
				]
			}"></Imagem>

			<p>Os PIUs devem também considerar a referência para os coeficientes de aproveitamento estabelecidos por macroárea conforme Quadro 2A da Lei nº16.050, de 31 de julho de 2014 – PDE. Esse quadro estabelece, para a MEM, C.A. máximo de 2 vezes a área do terreno. Tais limites podem ser superados mediante proposição de lei específica.</p>

			<h4>Viabilidade da transformação</h4>
			<p>As diretrizes urbanísticas delineadas indicam que o Hipódromo de Cidade Jardim pode conciliar a preservação de seus atributos históricos e paisagísticos, admitindo transformações controladas que tragam maior dinamismo ao entorno e melhor aproveitamento do lote, sem provocar impactos negativos para a vizinhança de perfil residencial.</p>
			<p>Dada a amplitude do lote onde se situa o hipódromo e as diferentes possibilidades de acesso, é possível vislumbrar oportunidades de transformação em diferentes graus, respeitando as restrições e disposições das resoluções de tombamento incidentes no equipamento e os requisitos funcionais das atividades do Jockey Club.</p>
			<p>A fim de conciliar as diferentes condições de uso e ocupação do lote pertencente ao Jockey Club, o lote foi dividido em setores, com as seguintes características:</p>

			<ol>
				<li>Setor Eusébio Matoso, próximo às estações Butantã do Metrô, Hebraica – Rebouças da CPTM e do corredor de ônibus da Av. Prof. Francisco Morato, é uma área inserida em um contexto de maior dinamismo urbano, com presença de usos mistos e maior grau de ocupação dos lotes. Sua diretriz é de transformação com adensamento construtivo;</li>
				<li>Setor Lineu de Paula, ao longo da Av. Lineu de Paula Machado, no qual há um conjunto de edifícios de interesse histórico que pouco se relaciona com a via, inserido em um contexto urbano de perfil estritamente residencial, sensível a atividades de maior grau de incomodidade. Existem vazios que podem ser preenchidos por novas edificações com programas que atendam tanto ao Jockey Club quanto estejam voltados para a avenida, ativando as fachadas. Sua diretriz é de transformação condicionada;</li>
				<li>Setor Tajurás, próximo da Av. dos Tajurás e da estação Cidade Jardim da CPTM, com um contexto urbano que mescla áreas estritamente residenciais com um corredor de serviços e lotes com ocupação esparsa. Sua diretriz é de transformação com adensamento construtivo;</li>
				<li>Setor Preservação Histórica e Ambiental, é composto por áreas livres e edificações associadas ao hipódromo, com maiores restrições a novas construções. Sua diretriz é a preservação dos atributos históricos, ambientais e esportivos, podendo recepcionar novas atividades para intensificar sua utilização;</li>
			</ol>

			<p>Com isso em vista, propõe-se maior transformação nos setores Eusébio Matoso e Tajurás, situados nos extremos norte e sul do lote, nas proximidades das pontes Eusébio Matoso e Engenheiro Roberto Rossi Zuccolo (Cidade Jardim), onde já existem atividades de uso misto e dinâmicas urbanas mais intensas do que nas demais áreas de perfil estritamente residencial. </p>

			<Imagem :maxWidth="'500px'" :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/jockey/Mapa2B.jpg'),
				titulo: 'Mapa 34 - Setorização do PIU Jockey Club',
				fonte:'Geosampa. Elaboração: SP-Urbanismo',
				legenda: [
					{ fundo: '#eb4000', descricao: 'Setor Tajurás' },
					{ fundo: '#ff7f17', descricao: 'Setor Eusébio Matoso' },
					{ fundo: '#798cec', descricao: 'Setor Lineu de Paula Machado' },
					{ fundo: '#70e561', descricao: 'Setor de Preservação Histórica e Ambiental' }
				]
			}"></Imagem>

			<h4>Adensamento Populacional e Impacto da Transformação</h4>
			<p>O Diagnóstico socioterritorial demonstrou que há uma grande diferença nas relações entre empregos e habitantes nas subprefeituras do Butantã e de Pinheiros e seus distritos. Considerando dados de 2016, havia 0,38 empregos/habitante na Subprefeitura do Butantã contra 2,14 emp/hab na Subprefeitura de Pinheiros. Em relação aos distritos, as diferenças são ainda maiores. Enquanto no Morumbi havia 0, 92 emp/hab e no Butantã 0,99 emp/hab, em Pinheiros havia 1,90 emp/hab e no Itaim Bibi 3,35 emp/hab. Assim, se o equilíbrio da relação emprego/habitante é uma diretriz para os subsetores da MEM, a prioridade para as transformações no lote do Hipódromo de Cidade Jardim deve ser a implantação de atividades não residenciais, contribuindo para a geração de postos de trabalho, ao invés do uso residencial. O uso misto também pode ser uma alternativa adequada, pois também contribuiria para a criação de empregos no distrito do Morumbi e traria maior vitalidade a áreas atualmente vazias. </p>
			<p>Em um primeiro cenário, a transformação das áreas citadas acontece exclusivamente por usos não residenciais. Nesse cenário, aumentariam as viagens com destino àquela região, devido ao aumento no número de postos de trabalho. Parte destes postos poderia fazer com que uma parcela da população que trabalha na Subprefeitura do Butantã e hoje tem que atravessar o Rio Pinheiros todos os dias, não tenha mais que transpor essa barreira. Seus custos e tempo de deslocamento seriam menores, e isso iria diminuir a demanda sobre a rede de transportes e o sistema viário na região. </p>
			<p>Em um segundo cenário, esse adensamento acontecerá majoritariamente com o uso residencial. A proximidade de importantes elementos da infraestrutura urbana possibilitaria, para os novos moradores do local, melhores condições de acesso à cidade. Além disso, esse adensamento poderia colaborar com a diversificação de tipologias e rendas no distrito Morumbi, caminhando para uma cidade mais equilibrada territorialmente. Como potenciais efeitos negativos, haveria um aumento no número de viagens com origem naquela região e maior demanda por serviços públicos nos equipamentos existentes.</p>
			<p>Finalmente, é possível prever um cenário em que os usos residenciais e não residenciais estariam dividindo a área construída de maneira equivalente, em edifícios ou conjuntos de uso misto. Nesse cenário, esse adensamento levaria a um aumento do número de postos de trabalho naquela região, que poderiam, inclusive, ser ocupado, em parte, pelos novos moradores desses conjuntos edificados. Esse tipo de adensamento poderia levar a um aumento tanto das viagens com origem naquela região, quanto das viagens com destino àquela região, mas a convivência de trabalho e moradia no mesmo local pode acabar por diminuir a demanda sobre a infraestrutura urbana próxima. </p>

			<section>
			<h3 class="titulo" indent="1">Contribua</h3>
				<div v-if="parseInt(estaConsulta.ativo) === 1">
					<Pergunta :id="commentId()" :context='"Pergunta 1"' :postid="1">
						<template #pergunta>
							Quais atividades de interesse público podem funcionar no Hipódromo de Cidade Jardim fora dos períodos em que ocorrem corridas e treinamentos e preservando o patrimônio histórico e as características da vizinhança?
						</template>
						<template #info>
							{{ perguntaInfo }}
						</template>
					</Pergunta>

					<Pergunta :id="commentId()" :context='"Pergunta 2"' :postid="1">
						<template #pergunta>
							Como você avalia a proposta de setorização do Programa de Interesse Público? A transformação proposta beneficia a região?
						</template>
						<template #info>
							{{ perguntaInfo }}
						</template>
					</Pergunta>

					<Pergunta :id="commentId()" :context='"Pergunta 3"' :postid="1">
						<template #pergunta>
							A introdução de fachadas ativas nas interfaces urbanas do Jockey Club contribui para a qualificação do bairro em que está inserido?
						</template>
						<template #info>
							{{ perguntaInfo }}
						</template>
					</Pergunta>
				</div>

				<p v-else class="encerrada">O período de contribuições foi encerrado.</p>

			</section>

			<h4>Modo de Gestão</h4>
			<p>O PIU Jockey Club terá assegurada a gestão participativa em todas as etapas, desde seu desenvolvimento até sua implementação, conforme preconiza a Constituição Federal e o Estatuto da Cidade. Conforme a regulamentação do Decreto nº 56.901/2016, está prevista a realização de duas consultas públicas, sendo a primeira constituída pelos elementos prévios ao desenvolvimento do PIU  e a segunda constituída pelas propostas de parâmetros e intervenções eventualmente contidas no PIU. </p>
			<p>A Constituição Federal determina expressamente a gestão participativa ou democrática em diversos campos.  A gestão democrática é diretriz de política urbana prevista no Estatuto da Cidade, sendo este modelo de governança essencial na ordem jurídica urbanística.</p>
			<p>A gestão democrática das cidades positivada no Estatuto da Cidade promove a participação dos interessados em todos os processos decisórios de caráter relevante na política de desenvolvimento urbano do município, mas não tem o condão de substituir o dever de decidir e conduzir processos da Administração Pública. Falamos, ainda, em “participação de interessados” ao invés de participação popular: a uma porque usar a expressão “participação popular” esconde o real espectro de agentes que comparecem à arena pública no processo de gestão democrática das cidades (população, grupos de pressão, empresários, entidades de classe etc.); a duas, porque “participação de interessados” revela um outro aspecto deste procedimento, negligenciado pela maioria da doutrina: é preciso dar voz aos que efetivamente não participam. É usual que entidades organizadas assumam o controle de processos de gestão democrática, elidindo a participação de particulares que se apresentem fora destes grupos – é necessário que a Administração Pública pondere esta realidade, e que tome suas decisões, no papel de mediadora dos conflitos pelo espaço urbano, de forma isonômica e razoável.</p>
			<p>O texto da Lei 10.257/2001, no já estudado art. 2º, relaciona a gestão democrática à participação da população e de associações representativas dos vários segmentos da comunidade na formulação, execução e acompanhamento de planos, programas e projetos de desenvolvimento urbano. Isso delimita perfeitamente o instituto em termos de direito urbanístico, especialmente porque o Capítulo IV trata de veicular as maneiras pelas quais esta participação dos interessados se dará, denominando-os “instrumentos”. A lei fala de órgãos colegiados de política urbana, nos níveis nacional, estadual e municipal; debates, audiências e consultas públicas; conferências sobre assuntos de interesse urbano, nos níveis nacional, estadual e municipal e iniciativa popular de projeto de lei e de planos, programas e projetos de desenvolvimento urbano.</p>
			<h5>Instrumentos de Gestão Dempocrática</h5>
			<h6>Audiências e consultas públicas</h6>
			<p>Audiências e consultas públicas são instrumentos de gestão democrática previstos na Lei de Processo Administrativo Federal (Lei 9.784/1999), nos arts. 32 e 31, respectivamente. A audiência pública se materializa por intermédio de debates orais em sessões previamente designadas para tanto, com ou sem a realização de apresentações pelo Poder Público ou interessados. Seu traço marcante é a oralidade, embora deva ser permitido o protocolo de requerimentos por interessados (tais protocolos devem ser noticiados pela mesa condutora dos trabalhos). Nem todas as questões levantadas em audiência pública devem ser respondidas imediatamente – é possível por exemplo, posteriormente publicarem-se as respostas em diário oficial –, mas todas as matérias aventadas devem ser consideradas no processo decisório da Administração Pública. </p>
			<p>A consulta pública, por seu turno, tem caráter mais formal, e exige protocolo ou anotações de manifestações públicas de interessados por meio previamente estabelecidos – protocolos, formulários disponibilizados na rede mundial de computadores etc. A consulta pública não ocorre num evento, mas num processo aberto de participação de interessados sobre determinado tema em debate. </p>
			<h6>Conselhos de desenvolvimento urbano e conferências sobre assuntos de interesse urbano </h6>
			<p>Os conselhos de desenvolvimento urbano podem ter diversas conformações e funções, a depender da legislação municipal e da amplitude do tema que aborda – se todo o planejamento municipal (normalmente este conselho é denominado “Conselho Municipal de Política Urbana”, ou “Conselho Municipal de Desenvolvimento Urbano”), se somente transportes, patrimônio histórico etc. O que é certo é que integram a estrutura do Poder Público, contam com representantes da sociedade civil e de instituições da área do urbanismo afetas às atividades do conselho, em composição que pode ser ou não paritária com os representantes da Administração Pública, sendo certo que geralmente os representantes da população são escolhidos mediante sufrágio secreto entre a população interessada. </p>
			<p>Os conselhos, em regra, terão poderes consultivos – como já afirmado, pertencem ao processo de busca da consensualidade promovido pela Administração Pública no ambiente da gestão democrática. Isso significa, por outro lado, que suas opiniões e indicações deverão sempre ser consideradas pela Administração Pública, que fundamentará suas decisões considerando estes elementos. </p>
			<p>O inc. I do art. 43, ainda, determina que haverá órgãos colegiados de política urbana, nos níveis nacional, estadual e municipal. Esta estrutura hoje é representada pelo Conselho das Cidades do Ministério das Cidades, criado pelo Decreto n. 5.790/2006, pelos conselhos estaduais das cidades e pelos conselhos municipais das cidades. Tais conselhos têm por finalidade estudar e propor as diretrizes para a formulação e implementação da Política de Desenvolvimento Urbano, bem como acompanhar e avaliar a sua execução, cada qual em seu nível de atuação. Suas deliberações são alimentadas por informações e demandas advindas, dentre outras fontes, das conferências sobre assuntos de interesse urbano, também realizadas nos níveis nacional, estadual e municipal. </p>

			<h6>Iniciativa popular </h6>
			<p>O art. 29 da Constituição Federal estabelece que o município, em sua lei orgânica, deverá contemplar a possibilidade de iniciativa popular de projetos de lei de interesse específico do Município, da cidade ou de bairros, através de manifestação de, pelo menos, cinco por cento do eleitorado (inc. XIII). Este instrumento de soberania popular, nos termos do art. 14 da Constituição Federal, pode ter importância na conformação do sistema de planejamento urbanístico do município em razão do grande número de disposições do Estatuto da Cidade que preveem a edição de lei para sua efetiva eficácia (como exemplo, art. 5º; art. 25, § 1º; art. 30 etc.). Não se deve esquecer, todavia, que mesmo as leis de iniciativa popular não prescindem de atender ao processo de gestão democrática na elaboração das leis urbanísticas, e devem estar adequadas ao plano diretor municipal, em razão do Princípio da Reserva de Plano. Ainda no tocante à democracia direta, é importante destacar que o inciso V do art. 43, vetado pelo Executivo, trazia a previsão de inserção dos instrumentos do plebiscito e do referendo como de gestão democrática das cidades. Tal veto, evidentemente, não impede que tais sejam utilizados no processo de elaboração de legislação urbanística pelos municípios.</p>
			<h6>Controle social </h6>

			<p>Uma moderna modalidade de controle da Administração Pública é o denominado controle social. Segundo MEDAUAR<sup>1</sup>, “parece adequado inserir, no âmbito do controle social, atuações de cidadão, isolado ou mediante associações, referentes a decisões já tomadas e a decisões em vias de adoção, com o intuito de verificar ou provocar a verificação da sua legalidade, moralidade, impessoalidade, economicidade, conveniência, oportunidade etc. Os mecanismos de controle social permitem, por si, que a Administração corrija ou evite inadequações nos seus atos ou omissões, e também suscitam atuações dos órgãos de controle”.[1]</p>
			<p>No que toca à política de desenvolvimento urbano, o controle social é realizado basicamente por dois métodos: (a) o oferecimento de representações a órgãos de controle interno e externo da Administração Pública e no ajuizamento de ações pertinentes ao tema e (b) pela participação dos cidadãos e entidades no processo de elaboração dos estudos e projetos que redundarão nas leis urbanísticas e dos planos e projetos urbanos, bem como no acompanhamento da implantação de tais planos e projetos. </p>
			<p>Desta forma, a par da participação construtiva de consensos nos processos decisórios da Administração Pública, também integra a gestão democrática a atuação dos interessados provocando o controle interno e externo dos atos do Poder Público, de modo a tentar obrigar a correção de decisões já adotadas ou em fase de construção. Esta realidade é tanto mais presente quanto menor o diálogo estabelecido entre a Administração Pública e a sociedade – a consensualidade tende a diminuir a litigiosidade e, portanto, o acionamento dos órgãos de controle.</p>

			<ol class="notas">
				<li>MEDAUAR, Odete. Controle da administração pública. 3. ed., rev., atual. e ampl. São Paulo: Ed. RT, 2014. p. 186-187.</li>
			</ol>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<ol class="notas perguntas">
				<h6>Questões propostas para subsídio ao desenvolvimento do projeto</h6>
				<p>Além da participação espontânea, com comentários acerca do conteúdo dos elementos prévios ao desenvolvimento do PIU Jockey Club, os munícipes poderão opinar sobre questões propostas pela SP Urbanismo, auxiliando na formulação de propostas para a sequência do projeto. São elas:</p>
					<li>Quais atividades de interesse público podem funcionar no Hipódromo de Cidade Jardim fora dos períodos em que ocorrem corridas e treinamentos e preservando o patrimônio histórico e as características da vizinhança?</li>
					<li>Como você avalia a proposta de setorização do Programa de Interesse Público? A transformação proposta beneficia a região?</li>
					<li>A introdução de fachadas ativas nas interfaces urbanas do Jockey Club contribui para a qualificação do bairro em que está inserido?</li>
			</ol>

			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && parseInt(estaConsulta.ativo) === 1" :attr="{id:commentId(), context:'Comentarios'}"></Comments>

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
import Pergunta from '@/components/Pergunta'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'JockeyClub',
	data () {
		return {
			mapMaxWidth: '700px',
			perguntaInfo: 'Além da participação espontânea, com comentários acerca do conteúdo dos elementos prévios ao desenvolvimento do PIU Jockey Club, os munícipes poderão opinar sobre questões propostas pela SP Urbanismo, auxiliando na formulação de propostas para a sequência do projeto.',
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
		Pergunta,
		Tabela
	},
	mixins: [ consultasCommons ],
	methods: {
		// ccConcat (category, complement, isFirst) {
		// 	if (isFirst) {
		// 		this.$store[category] = 0
		// 	}
		// 	this.$store[category]++
		// 	return `${this.category} ${this.$store.commentsCount} - ${complement}`
		// }
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

.substitua-me { padding: 1em; background-color:yellow }
.tabela { overflow-x: auto }
.leg.diretrizes { margin: 1rem auto }
.notas.perguntas { margin: 2rem auto }
.notas.perguntas > h6, .notas.perguntas > p {
	font-size: smaller;
	margin: unset;
	padding: 0.5rem 0;
}
</style>
