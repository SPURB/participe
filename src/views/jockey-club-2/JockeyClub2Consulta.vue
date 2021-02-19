<template>
	<div class="jockey-club2-consulta" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/jockey2_244w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Jockey: Proposta de Regulação Urbanística</div></template>
			<template slot="subtitulo"><div>Segunda consulta pública</div></template>
		</PageTop>
		<indice
			title="PIU Jockey: Proposta de Regulação Urbanística"
			:menuItems="[
				{
					title: 'Apresentação',
					scrollTo: '#consulta-0',
					indent: 1
				},
				{
					title: '1. Etapas do PIU Jockey Club',
					scrollTo: '#consulta-1',
					indent: 1
				},
				{
					title: '2. Informações básicas do PIU Jockey',
					scrollTo: '#consulta-2',
					indent: 1
				},
				{
					title: '2.1 Definição do perímetro de intervenção',
					scrollTo: '#consulta-2-1',
					indent: 2
				},
				{
					title: '2.2 Características básicas da proposta',
					scrollTo: '#consulta-2-2',
					indent: 2
				},
				{
					title: '2.3 Fases de elaboração do projeto',
					scrollTo: '#consulta-2-3',
					indent: 2
				},
				{
					title: '2.4 Revisões após a publicação',
					scrollTo: '#consulta-2-4',
					indent: 2
				},
				{
					title: '3. Síntese das contribuições da etapa prévia',
					scrollTo: '#consulta-3',
					indent: 1
				},
				{
					title: '4. Proposta de ordenamento urbanístico',
					scrollTo: '#consulta-4',
					indent: 1
				},
				{
					title: '4.1	Situação fundiária',
					scrollTo: '#consulta-4-1',
					indent: 2
				},
				{
					title: '4.2	Tombamento',
					scrollTo: '#consulta-4-2',
					indent: 2
				},
				{
					title: '4.3	Transferência do direito de construir',
					scrollTo: '#consulta-4-3',
					indent: 2
				},
				{
					title: '4.4	Plano Diretor do Jockey Club de São Paulo 2014-2023',
					scrollTo: '#consulta-4-4',
					indent: 2
				},
				{
					title: '4.5	Partido urbanístico',
					scrollTo: '#consulta-4-5',
					indent: 2
				},
				{
					title: '4.6	Setorização',
					scrollTo: '#consulta-4-6',
					indent: 2
				},
				{
					title: '4.7	Síntese das contribuições do grupo técnico',
					scrollTo: '#consulta-4-7',
					indent: 2
				},
				{
					title: '4.8	Cenários',
					scrollTo: '#consulta-4-8',
					indent: 2
				},
				{
					title: '4.9 Parcelamento',
					scrollTo: '#consulta-4-9',
					indent: 2
				},
				{
					title: '4.10 Ocupação',
					scrollTo: '#consulta-4-10',
					indent: 2
				},
				{
					title: '4.11 Uso',
					scrollTo: '#consulta-4-11',
					indent: 2
				},
				{
					title: '5. Modelagem Econômica',
					scrollTo: '#consulta-5',
					indent: 1
				},
				{
					title: '5.1. Potencial construtivo adicional no PIU',
					scrollTo: '#consulta-5-1',
					indent: 2
				},
				{
					title: '5.2. Oferta e demanda de áreas transformáveis',
					scrollTo: '#consulta-5-2',
					indent: 2
				},
				{
					title: '5.3 Estudo vocacional dos setores de transformação',
					scrollTo: '#consulta-5-3',
					indent: 2
				},
				{
					title: '5.4 Estudo de viabilidade',
					scrollTo: '#consulta-5-4',
					indent: 2
				},
				{
					title: '5.5. Potencial Construtivo Passível de Transferência',
					scrollTo: '#consulta-5-5',
					indent: 2
				},
				{
					title: '5.6. Fluxo de lançamentos e Outorga Onerosa no tempo',
					scrollTo: '#consulta-5-6',
					indent: 2
				},
				{
					title: '6. Modelo de Gestão democrática',
					scrollTo: '#consulta-6',
					indent: 1
				},
			]"
			:router-links="[
				{
					to: '/jockey-club-2/minuta',
					title: 'Ver minuta de decreto',
					indent: 1
				}
			]"
			:show-contrib="true"
		/>
		<btn-fixed-url
			class="jockey-club2-consulta__btn-fixed"
			url="/jockey-club-2/minuta"
			text="Minuta de Decreto"
			target="_self"
			:isRouteLink="true"
		/>
		<section id="consulta-0">
			<p>A Prefeitura do Município de São Paulo, por intermédio da Secretaria Municipal de Desenvolvimento Urbano (SMDU) e da São Paulo Urbanismo (SP Urbanismo) apresenta nesta Consulta Pública a proposta do Projeto de Intervenção Urbana do Hipódromo de Cidade Jardim (PIU Jockey Club), o qual define os parâmetros urbanísticos aplicáveis à Zona de Ocupação Especial onde se localiza este equipamento.</p>
			<p>Na Primeira Consulta Pública, foram apresentados os elementos prévios ao desenvolvimento do projeto, os Diagnósticos Socio-territorial e Ambiental e o Programa de Interesse Público, para que o público pudesse contribuir e subsidiar as propostas que estão sendo agora apresentadas.</p>
			<p>Esta Segunda Consulta Pública, que se inicia em 10 de dezembro de 2020, com término previsto para o dia 26 de fevereiro de 2021, apresenta a <b>Proposta de Ordenamento Urbanístico</b>, a <b>Modelagem Econômica</b>, o <b>Modelo de Gestão Democrática</b> e a <b>Minuta do Decreto Regulamentador do PIU Jockey Club</b>.</p>
			<p>O Processo de elaboração do PIU Jockey Club segue os passos definidos no Decreto Municipal n° 56.901/2016, que regulamenta os projetos de intervenção urbana e que prevê a participação da população em todas as etapas de seu desenvolvimento. Desta forma, as contribuições a serem colhidas nesta Consulta Pública irão colaborar para o seu aperfeiçoamento, assim como aquelas advindas de Audiência Pública e dos debates nos conselhos municipais cujas competências estejam associadas à política urbana do município.</p>

			<h2>Apresentação</h2>
			<comments v-if="consultaAtiva" :attr="{ id: 1000, context:'Consulta | Apresentação' }" />

			<p>O lote onde est&aacute; situado o Hip&oacute;dromo de Cidade Jardim foi classificado como uma Zona de Ocupa&ccedil;&atilde;o Especial &ndash; ZOE pela Lei de Zoneamento (Lei de Parcelamento, Uso e Ocupa&ccedil;&atilde;o do Solo &ndash; LPUOS - n&ordm; 16.402/2016). As Zonas de Ocupa&ccedil;&atilde;o Especial s&atilde;o por&ccedil;&otilde;es do territ&oacute;rio destinadas a abrigar predominantemente atividades que, por suas caracter&iacute;sticas &uacute;nicas, necessitem de par&acirc;metros especiais de parcelamento, uso e ocupa&ccedil;&atilde;o do solo, como aeroportos, centros de conven&ccedil;&atilde;o, grandes &aacute;reas de lazer, recrea&ccedil;&atilde;o e esportes.</p>

			<p>O artigo 15 da Lei de Zoneamento determina que os par&acirc;metros urban&iacute;sticos especiais das ZOEs sejam definidos atrav&eacute;s de&nbsp;Projetos de Interven&ccedil;&atilde;o Urbana (PIUs). Os PIUs s&atilde;o estudos t&eacute;cnicos que embasam a proposi&ccedil;&atilde;o de par&acirc;metros urban&iacute;sticos em per&iacute;metros espec&iacute;ficos do territ&oacute;rio do munic&iacute;pio e, em determinados casos, de interven&ccedil;&otilde;es destinadas a desenvolver e melhorar as condi&ccedil;&otilde;es urbanas, ambientais e sociais no contexto urbano desses projetos.</p>
			<p>O artigo 4&ordm; do Decreto Municipal n&ordm; 56.901/2016, que regulamenta os PIUs, traz a composi&ccedil;&atilde;o referencial do conte&uacute;do desses projetos, englobando a Proposta de Ordenamento Urban&iacute;stico, a Modelagem Econ&ocirc;mica, o Modelo de Gest&atilde;o Democr&aacute;tica e demais itens que se fa&ccedil;am necess&aacute;rios em cada caso. A partir desta composi&ccedil;&atilde;o b&aacute;sica, o processo espec&iacute;fico de desenvolvimento de cada PIU revelar&aacute; o conte&uacute;do mais apropriado a suas caracter&iacute;sticas, apresentando os crit&eacute;rios adotados para a composi&ccedil;&atilde;o definitiva.</p>
			<p>O Projeto de Interven&ccedil;&atilde;o Urbana do Hip&oacute;dromo de Cidade Jardim &ndash; PIU Jockey Club, a ser apresentado neste volume, tem como objetivo a regula&ccedil;&atilde;o dos par&acirc;metros urban&iacute;sticos especiais aplic&aacute;veis na ZOE correspondente ao lote onde se situa este importante equipamento, possibilitando que seu ordenamento e desenvolvimento ocorra em conson&acirc;ncia com a pol&iacute;tica urbana do munic&iacute;pio. Assim, o PIU Jockey Club n&atilde;o deve ser confundido com o licenciamento de um empreendimento concreto a ser implantado no Hip&oacute;dromo de Cidade Jardim, mas sim como um processo t&eacute;cnico e participativo que definir&aacute; as regras para o desenvolvimento deste equipamento nos pr&oacute;ximos anos.</p>
			<p>O PIU Jockey Club &eacute; uma iniciativa da Prefeitura de S&atilde;o Paulo que incidir&aacute; sobre um dos maiores equipamentos privados da cidade, cujas caracter&iacute;sticas funcionais, arquitet&ocirc;nicas, hist&oacute;ricas e paisag&iacute;sticas excepcionais s&atilde;o de interesse p&uacute;blico, constituindo-se como um patrim&ocirc;nio paulistano e uma importante refer&ecirc;ncia para a regi&atilde;o onde se situa.</p>
		</section>
		<section id="consulta-1">
			<h2 class="titulo" indent="1">1. Etapas do PIU Jockey Club</h2>
			<comments v-if="consultaAtiva" :attr="{ id: 1100, context:'Consulta | 1. Etapas do PIU Jockey Club' }" />
			<p>O PIU Jockey Club &eacute; desenvolvido conforme a estrutura definida no decreto regulamentador dos Projetos de Interven&ccedil;&atilde;o Urbana, estando previstas duas principais fases.</p>
			<p>O in&iacute;cio do processo se d&aacute; antes mesmo do desenvolvimento do PIU. A partir de uma iniciativa da Prefeitura de S&atilde;o Paulo ou de um ente externo, que pode ser uma organiza&ccedil;&atilde;o privada, da sociedade civil organizada ou mesmo de outra esfera de governo e, estando a &aacute;rea objeto da proposta enquadrada dentro das condi&ccedil;&otilde;es previstas na legisla&ccedil;&atilde;o para a realiza&ccedil;&atilde;o deste tipo de projeto, &eacute; realizada uma fase pr&eacute;via.</p>
			<p>Nesta fase pr&eacute;via, a Prefeitura ou o proponente externo apresentam um Diagn&oacute;stico Socio-territorial e Ambiental e o Programa de Interesse P&uacute;blico, buscando identificar as principais caracter&iacute;sticas da &aacute;rea e de seu entorno, as car&ecirc;ncias, qualidades e potencialidades e, a partir destas caracter&iacute;sticas, identificar qual &eacute; o programa do projeto, ou seja, qual &eacute; o papel daquela &aacute;rea, regi&atilde;o ou equipamento para a cidade e quais seriam suas contribui&ccedil;&otilde;es para o desenvolvimento urbano na escala do munic&iacute;pio ou do bairro. Esse conte&uacute;do, chamado Elementos Pr&eacute;vios, &eacute; ent&atilde;o submetido a uma Consulta P&uacute;blica.</p>
			<p>A partir dos elementos pr&eacute;vios e das contribui&ccedil;&otilde;es recebidas nesta Consulta P&uacute;blica inicial, a Secretaria Municipal de Desenvolvimento Urbano avalia se o Projeto de Interven&ccedil;&atilde;o Urbana proposto &eacute; compat&iacute;vel com as diretrizes definidas no Plano Diretor Estrat&eacute;gico do Munic&iacute;pio de S&atilde;o Paulo &ndash; PDE (Lei n&ordm;16.050/2014) e decide se o projeto dever&aacute; ser desenvolvido ou arquivado.</p>
			<p>Caso seja autorizado, tem-se in&iacute;cio a segunda fase por meio da qual o PIU &eacute; desenvolvido e submetido a uma nova Consulta P&uacute;blica, onde os par&acirc;metros e interven&ccedil;&otilde;es propostas s&atilde;o apresentados e justificados para que a popula&ccedil;&atilde;o possa opinar e contribuir para seu aperfei&ccedil;oamento. Esta fase pode ser realizada em uma &uacute;nica etapa ou quantas mais forem necess&aacute;rias, de modo que, ao final, seja consolidado o documento t&eacute;cnico que apresenta as propostas do PIU, bem como a pe&ccedil;a jur&iacute;dica que possibilitar&aacute; a aplica&ccedil;&atilde;o das regras espec&iacute;ficas e a implanta&ccedil;&atilde;o do programa de interven&ccedil;&otilde;es do projeto. A pe&ccedil;a jur&iacute;dica pode ser um Projeto de Lei ou um Decreto Municipal, ambos de iniciativa exclusiva do Poder Executivo Municipal, que define a modalidade mais adequada a cada PIU, conforme as regras vigentes na legisla&ccedil;&atilde;o e as melhores t&eacute;cnicas jur&iacute;dicas.</p>
			<p>Seguindo esse roteiro, o PIU Jockey Club teve in&iacute;cio em outubro de 2019, com a determina&ccedil;&atilde;o da Prefeitura para a elabora&ccedil;&atilde;o dos elementos pr&eacute;vios pela equipe t&eacute;cnica da SP Urbanismo. A Consulta P&uacute;blica Pr&eacute;via foi realizada entre os dias 18 de outubro e 9 de novembro de 2019, tendo recebido 107 contribui&ccedil;&otilde;es de 56 cidad&atilde;os e pode ser acessada em</p>
			<p>Ap&oacute;s analisar os elementos pr&eacute;vios e as contribui&ccedil;&otilde;es recebidas, a Secretaria Municipal de Desenvolvimento Urbano &ndash; SMDU autorizou o desenvolvimento do PIU Jockey Club em janeiro de 2020. No mesmo m&ecirc;s, foi constitu&iacute;do um Grupo T&eacute;cnico composto por representantes de diversos &oacute;rg&atilde;os municipais, com objetivo de discutir o conte&uacute;do do PIU Jockey. Fazem parte deste grupo as Secretarias Municipais de Desenvolvimento Urbano, Cultura, Verde e Meio Ambiente, Transportes e Subprefeituras.</p>
			<p>Dando sequ&ecirc;ncia ao rito previsto no decreto regulamentador, a SP Urbanismo publicou em abril de 2020 no Di&aacute;rio oficial da Cidade &ndash; D.O.C., conforme as disposi&ccedil;&otilde;es do artigo 3&ordm;, as informa&ccedil;&otilde;es b&aacute;sicas do projeto a ser desenvolvido: o per&iacute;metro de interven&ccedil;&otilde;es, as caracter&iacute;sticas b&aacute;sicas da proposta e as fases de elabora&ccedil;&atilde;o do projeto. Estas informa&ccedil;&otilde;es s&atilde;o apresentadas a seguir.</p>
		</section>
		<section id="consulta-2">
			<h2>2. Informações básicas do PIU Jockey</h2>
			<comments v-if="consultaAtiva" :attr="{ id: 1200, context:'Consulta | 2. Informações básicas do PIU Jockey' }" />
			<p>Em cumprimento à determinação do artigo 3º do Decreto 56.901/2016, foram publicadas no Diário Oficial da Cidade - DOC de 09 de abril de 2020 as informações contidas nos itens 2.1, 2.2 e 2.3 desta presente Seção. A publicação foi transcrita na íntegra nos itens seguintes, complementados por uma justificativa técnica para a adoção de uma nova estratégia para a disponibilização dos materiais de elaboração do PIU Jockey Club à segunda consulta pública.</p>

			<section id="consulta-2-1">
				<h3>2.1 Definição do perímetro de intervenção</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 2001, context:'Consulta | 2.1 Definição do perímetro de intervenção' }" />
				<p>A condi&ccedil;&atilde;o para demarca&ccedil;&atilde;o do Hip&oacute;dromo de Cidade Jardim como uma ZOE &ndash; Zona de Ocupa&ccedil;&atilde;o Especial - pela LPUOS (Lei n&ordm; 16.402/2016) &eacute; a excepcionalidade que caracteriza o equipamento, considerando aspectos hist&oacute;ricos, funcionais, arquitet&ocirc;nicos, paisag&iacute;sticos e ambientais, demandando, conforme determina o art. 15 desta lei, a institui&ccedil;&atilde;o deste projeto de interven&ccedil;&atilde;o urbana para defini&ccedil;&atilde;o de seus par&acirc;metros urban&iacute;sticos. Assim, o PIU Jockey Club ter&aacute; um per&iacute;metro de regula&ccedil;&atilde;o urban&iacute;stica excepcional, correspondente ao pr&oacute;prio per&iacute;metro da ZOE, onde dever&atilde;o ser definidos par&acirc;metros urban&iacute;sticos adequados &agrave;s diretrizes de desenvolvimento urbano do projeto e &agrave;s caracter&iacute;sticas do equipamento.</p>
				<p>O per&iacute;metro de interven&ccedil;&atilde;o do PIU Jockey Club dever&aacute; abarcar as &aacute;reas p&uacute;blicas do entorno do hip&oacute;dromo em ambas as margens do Rio Pinheiros e junto &agrave;s esta&ccedil;&otilde;es do metr&ocirc; e da CPTM, possibilitando a implanta&ccedil;&atilde;o de melhoramentos urban&iacute;sticos, conforme o Mapa a seguir:</p>
				<imagem
					:max-width="'700px'"
					:dados="{
						titulo: 'Mapa 1 – Perímetros do PIU Jockey Club',
						tipo: 'mapa',
						url: src('arquivos/jockey-club-2/mapas/perimetro.jpg'),
						legenda: [
							{ fundo: 'white', borda: 'black', pontilhado: true, descricao: 'OUC Faria Lima' },
							{ fundo: '#c6e0ee', descricao: 'Hidrografia Principal' },
							{ fundo: '#d4e8c1', descricao: 'Praças e canteiros' },
							{ simbolo: src('arquivos/legendas/icones/cptm.png'), descricao: 'CPTM estações existentes' },
							{ simbolo: src('arquivos/legendas/icones/metro.png'), descricao: 'Metrô estações existentes' },

							{ descricao: 'PIU Jockey Club', 'legenda__titulo': true },
							{ fundo: 'white', borda: 'black', descricao: 'PRU - Perímetro de Regulação Urbanística' },
							{ fundo: 'white', borda: '#ff4c00', descricao: 'Perímetro de Intervenção' },

							{ descricao: 'Lei 16.402/2016 - Zoneamento', 'legenda__titulo': true },
							{ fundo: '#c5dc61', descricao: 'AC-1' },
							{ fundo: '#5e4134', descricao: 'ZC' },
							{ fundo: '#18217d', descricao: 'ZCOR-1' },
							{ fundo: '#0076c5', descricao: 'ZCOR-2' },
							{ fundo: '#50aa78', descricao: 'ZEPAM-1' },
							{  simbolo: src('arquivos/legendas/zoneamento/zer-1.gif'), descricao: 'ZER-1' },
							{ fundo: '#7d181f', descricao: 'ZEU' },
							{ fundo: '#a0a0a0', descricao: 'ZM' },
							{ fundo: '#c1b58c', descricao: 'ZOE' },
							{ fundo: '#ffff30', descricao: 'ZPR' }
						],
						fonte: 'GEOSAMPA MAPAS - MDC - MAPA DIGITAL DA CIDADE, 2020. SIRGAS | UTM ZONAS 23S. Elaboração: São Paulo Urbanismo'
					}"
				/>
			</section>

			<section id="consulta-2-2">
				<h3>2.2 Características básicas da proposta</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 2002, context:'Consulta | 2.2 Características básicas da proposta' }" />
				<p>As propostas constituintes do PIU Jockey Club deverão ser compatíveis com a Política Urbana Municipal, buscando contribuir para a utilização mais intensiva o ordenada do Hipódromo de Cidade Jardim pela população, para o desenvolvimento urbano e ambiental da região e para o atendimento mais amplo das demandas da população.</p>
				<p>As caracter&iacute;sticas b&aacute;sicas do PIU Jockey Club s&atilde;o as seguintes:</p>

				<h5>1) PAR&Acirc;METROS URBAN&Iacute;STICOS</h5>
				<p>Os par&acirc;metros urban&iacute;sticos aplic&aacute;veis &agrave; ZOE do Hip&oacute;dromo de Cidade Jardim estar&atilde;o limitados aos par&acirc;metros definidos pelo Quadro 2A do Plano Diretor Estrat&eacute;gico &ndash; PDE (Lei n&ordm; 16.050/2014) para a Macro&aacute;rea de Estrutura&ccedil;&atilde;o Metropolitana, subsetor Faria Lima/ &Aacute;guas Espraiadas/ Chucri Zaidan. O PIU Jockey Club poder&aacute; definir par&acirc;metros espec&iacute;ficos de parcelamento, uso e ocupa&ccedil;&atilde;o do solo para diferentes setores inseridos no per&iacute;metro da ZOE, fundamentando e justificando suas implica&ccedil;&otilde;es urban&iacute;sticas.</p>

				<h5>2) DIRETRIZES</h5>
				<p>Tendo por base o Programa de Interesse P&uacute;blico e as contribui&ccedil;&otilde;es do Processo participativo, o PIU dever&aacute; ser desenvolvido conforme as seguintes diretrizes:</p>
				<p>Garantir a preserva&ccedil;&atilde;o do patrim&ocirc;nio hist&oacute;rico e dos atributos paisag&iacute;sticos do hip&oacute;dromo;</p>
				<p>Preservar o funcionamento do hip&oacute;dromo, possibilitando a inser&ccedil;&atilde;o de novos usos que possam conviver com a atividade principal do turfe e dar maior dinamismo ao equipamento e ao entorno, ampliando sua utiliza&ccedil;&atilde;o pela popula&ccedil;&atilde;o fora dos per&iacute;odos de treinamentos e corridas;</p>
				<p>Possibilitar a transforma&ccedil;&atilde;o de &aacute;reas dissociadas do funcionamento do hip&oacute;dromo, situadas no mesmo lote, preservando a qualidade urbana e ambiental do entorno e impedindo o agravamento dos padr&otilde;es de incomodidade atuais em decorr&ecirc;ncia de novas atividades;</p>
				<p>Possibilitar a qualifica&ccedil;&atilde;o da micro acessibilidade de pedestres e ciclistas no entorno, nas travessias e nos acessos ao Jockey Club, considerando a necessidade de promover transposi&ccedil;&otilde;es qualificadas sobre o Rio Pinheiros, a partir das esta&ccedil;&otilde;es Hebraica-Rebou&ccedil;as e Cidade Jardim da CPTM, e nos percursos entre o hip&oacute;dromo, a Esta&ccedil;&atilde;o Butant&atilde; do Metr&ocirc;, o Corredor da Av. Prof. Francisco Morato e os principais equipamentos da regi&atilde;o;</p>
				<p>Promover maior permeabilidade visual entre o hip&oacute;dromo e o entorno e a ativa&ccedil;&atilde;o de fachadas na Av. Lineu de Paula Machado e na Rua Dr. Jos&eacute; Augusto de Queiroz;</p>
				<p>Possibilitar a amplia&ccedil;&atilde;o dos servi&ccedil;os ambientais prestados pelo hip&oacute;dromo &agrave; cidade, relativos a &aacute;reas verdes e solu&ccedil;&otilde;es de drenagem;</p>
				<p>Possibilitar a conex&atilde;o entre o hip&oacute;dromo e a margem oeste do Rio Pinheiros, contribuindo para a frui&ccedil;&atilde;o p&uacute;blica do patrim&ocirc;nio ambiental da cidade.</p>
			</section>

			<section id="consulta-2-3">
				<h3>2.3 Fases de elaboração do projeto</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 2003, context:'Consulta | 2.3 Fases de elaboração do projeto' }" />
				<p>O Projeto de Intervenção Urbana Hipódromo de Cidade Jardim – PIU Jockey Club - será conduzido pela SP URBANISMO em conformidade com as disposições do Decreto nº 56.901/2016, assegurando o processo participativo em todas as fases de elaboração do projeto.</p>
				<p>A Etapa Prévia ao desenvolvimento do projeto foi realizada entre outubro e novembro de 2019. Após a autorização de SMDU e a publicação dos elementos constantes no Art. 3º do decreto regulamentador, o PIU Jockey Club será desenvolvido em duas etapas, com o seguinte conteúdo:</p>

				<tabela :dados="{
					estreita: false,
					titulo: 'Quadro 1 – Fases de Elaboração do PIU Jockey Club',
					colunas: [
						{ titulo: 'Fase' },
						{ titulo: 'Conteúdo' },
						{ titulo: 'Processo Participativo' },
					],
					linhas: [
						[
							[ { data: '1' } ],
							[ { data: 'PIU – Proposta Preliminar: Ordenamento urbanístico, programa de intervenções, fases de implantação, parâmetros urbanísticos, instrumentos de gestão ambiental, modelagem econômica e modelo de gestão democrática' } ],
							[ { data: 'Consulta Pública. Diálogos temáticos' } ],
						],
						[
							[ { data: '2' } ],
							[ { data: 'PIU – Proposta Final: Minuta de Decreto de regulação do perímetro e ajustes técnicos dos elementos constituintes do PIU'} ],
							[ { data: 'Consulta Pública. Diálogos colegiados. Reunião Devolutiva' } ]
						],
					],
					fonte: 'Elaboração: SP Urbanismo'
				}"/>

				<p>Na Etapa 1 ser&aacute; desenvolvida a proposta preliminar do PIU, conforme o conte&uacute;do referencial presente no art. 4&ordm; do decreto regulamentador. Ap&oacute;s novo ciclo de submiss&atilde;o &agrave; consulta p&uacute;blica, debates p&uacute;blicos e ajustes t&eacute;cnicos, as propostas que constituem o projeto ser&atilde;o revisadas e consolidadas em uma vers&atilde;o final do PIU, correspondente &agrave; Etapa 2.</p>
				<p>As consultas p&uacute;blicas, realizadas por meios eletr&ocirc;nicos atrav&eacute;s da disponibiliza&ccedil;&atilde;o do conte&uacute;do na rede mundial de computadores &ndash; internet - ser&atilde;o divulgadas no portal da Prefeitura de S&atilde;o Paulo (<a href="http://www.capital.sp.gov.br/">http://www.capital.sp.gov.br/</a>), na p&aacute;gina da Secretaria Municipal de Desenvolvimento Urbano &ndash; SMDU (<a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/urbanismo/">https://www.prefeitura.sp.gov.br/cidade<br>/secretarias/urbanismo/</a>), e na plataforma Gest&atilde;o Urbana SP (<a href="https://gestaourbana.prefeitura.sp.gov.br/">https://gestaourbana.prefeitura.sp.gov.br/</a>). O conte&uacute;do a ser publicado constar&aacute; da integralidade dos estudos e propostas t&eacute;cnicas desenvolvidos para embasar a propositura dos par&acirc;metros urban&iacute;sticos incidentes na ZOE do Hip&oacute;dromo de Cidade Jardim, com linguagem acess&iacute;vel e simplificada, podendo ser apoiada por outros conte&uacute;dos que auxiliem na comunica&ccedil;&atilde;o das propostas &agrave; popula&ccedil;&atilde;o.</p>
				<p>Os di&aacute;logos colegiados ser&atilde;o realizados com os conselhos municipais institu&iacute;dos para a finalidade de discuss&atilde;o e fiscaliza&ccedil;&atilde;o da pol&iacute;tica urbana municipal, o CMPU &ndash; Conselho Municipal de Pol&iacute;tica Urbana, de regula&ccedil;&atilde;o urban&iacute;stica,&nbsp; a CTLU &ndash; C&acirc;mara T&eacute;cnica de Legisla&ccedil;&atilde;o Urban&iacute;stica, e das pol&iacute;ticas p&uacute;blicas municipais incidentes nos territ&oacute;rios das subprefeituras, o CPM-BT &ndash; Conselho Participativo Municipal da Subprefeitura do Butant&atilde;, o CADES-BT &ndash; Conselho Municipal de Meio Ambiente e Desenvolvimento Sustent&aacute;vel da Subprefeitura do Butant&atilde;.&nbsp; O desenvolvimento do projeto e o processo participativo poder&atilde;o ainda demandar a oitiva de outros colegiados competentes.</p>
				<p>Os di&aacute;logos tem&aacute;ticos ser&atilde;o realizados com:</p>
				<p>As secretarias e demais &oacute;rg&atilde;os municipais competentes, cujas atribui&ccedil;&otilde;es se relacionem ao escopo de desenvolvimento do PIU Jockey Club, subsidiando a propositura conjunta de interven&ccedil;&otilde;es no &acirc;mbito do projeto ou o planejamento de pol&iacute;ticas setoriais complementares ao PIU, incidentes no mesmo territ&oacute;rio;</p>
				<p>Entidades de classe, associa&ccedil;&otilde;es de moradores e demais organiza&ccedil;&otilde;es participantes dos debates do projeto, subsidiando a propositura de interven&ccedil;&otilde;es que promovam o desenvolvimento urbano e ambiental sustent&aacute;vel e atendam de forma mais ampla as demandas da sociedade.</p>
				<p>Toda a documenta&ccedil;&atilde;o t&eacute;cnica e relativa ao registro das reuni&otilde;es, debates e contribui&ccedil;&otilde;es individuais dever&atilde;o ser publicadas na p&aacute;gina do PIU Jockey Club no s&iacute;tio eletr&ocirc;nico Gest&atilde;o urbana SP (<a href="https://gestaourbana.prefeitura.sp.gov.br/piu-jockey-club/">gestaourbana.prefeitura.sp.gov.br/piu-jockey-club/</a>) e no Sistema de Monitoramento dos PIUs (<a href="https://gestaourbana.prefeitura.sp.gov.br/piu-monitoramento/">gestaourbana.prefeitura.sp.gov.br/piu-monitoramento/</a>), garantindo a necess&aacute;ria transpar&ecirc;ncia ao processo.</p>
				<p>(Fim da Publica&ccedil;&atilde;o de 09 de abril de 2020)</p>
			</section>

			<section id="consulta-2-4">
				<h3>2.4 Revisões após a publicação</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 2004, context:'Consulta | 2.4 Revisões após a publicação' }" />
				<p>Na publicação transcrita nos itens 2.1, 2.2 e 2.3 da presente Seção, o PIU Jockey Club seria elaborado em duas fases: Proposta Preliminar e Proposta Final. Nesta estrutura, o debate público abarcaria os parâmetros urbanísticos e o programa de intervenções, sendo este conteúdo revisto e reapresentado em conjunto com o decreto de regulação do perímetro na fase 2. No entanto, com o decorrer do processo de desenvolvimento do PIU, conforme se verá na Proposta de Ordenamento Urbanístico, algumas das premissas iniciais não se confirmaram e o programa de intervenções revelou-se inviável. Com isso, o PIU Jockey Club passou a tratar unicamente das diretrizes e parâmetros urbanísticos aplicáveis na ZOE do hipódromo, possibilitando que o respectivo decreto fosse apresentado à população em conjunto com a Proposta de Ordenamento Urbanístico do PIU, ou seja, mediante uma única fase que abarcasse tanto a formulação quanto a consolidação do PIU, sem prejuízo do procedimento cabível aos PIU nos termos do Decreto nº 56.901/2016.</p>

				<p>Em função das mesmas motivações, o Perímetro de Intervenções, que no momento da publicação abarcava as áreas públicas do entorno do hipódromo em ambas as margens do Rio Pinheiros e junto às estações do metrô e da CPTM, perdeu sua função no projeto, já que não haverá mais um programa de intervenções como previsto nas diretrizes iniciais, e os recursos obtidos através da alienação da outorga do direito de construir serão revertidos em sua integralidade ao FUNDURB. Assim, o PIU Jockey passa a ter como único perímetro o de “Regulação Urbanística Excepcional”, indicado no mesmo mapa da publicação.</p>
				<p>Destaca-se que esta alteração não traz prejuízos à discussão pública do projeto, pois a oferta de materiais contendo a íntegra do conteúdo específico deste PIU - conteúdo técnico urbanístico e econômico em conjunto com proposta de regulação mediante Decreto - permitirá maior foco na apresentação dos elementos do PIU para a população, favorecendo a compreensão sobre suas implicações regulatórias para o desenvolvimento do hipódromo e de seu entorno urbano, possibilitando assim que as contribuições do processo participativo sejam mais aprofundadas e assertivas.</p>
			</section>
		</section>
		<section id="consulta-3">
			<h2>3. Síntese das contribuições da etapa prévia</h2>
			<comments v-if="consultaAtiva" :attr="{ id: 1300, context:'Consulta | 3. Síntese das contribuições da etapa prévia' }" />
			<p>As contribuições da população na Consulta Pública da Etapa Prévia trouxeram sugestões de atividades potenciais que possam funcionar de forma compatível com as atividades do hipódromo, como atividades culturais, educativas, de gastronomia e conveniência e, principalmente, a criação de um parque público. A melhoria das condições de acessibilidade de pedestres e ciclistas ao hipódromo também foi destacada, assim como as questões ambientais, com sugestões relativas à arborização, drenagem e à conexão do hipódromo com as margens do Rio Pinheiros. </p>
			<p>Contudo, a maioria das contribuições alertaram para os impactos dos eventos realizados pelo Jockey Club de São Paulo no cotidiano dos moradores de residências vizinhas, com queixas relativas a ruídos, trânsito, insegurança e atividades ilícitas.</p>
			<p>Assim, o desafio deste projeto consiste na formulação de propostas equilibradas entre parâmetros e intervenções que possibilitem o uso mais intensivo do hipódromo enquanto equipamento de interesse público para a cidade no contexto contemporâneo, além da compatibilidade com as características do entorno, buscando a diminuição dos conflitos atuais e o desenvolvimento urbano sustentável da região.</p>
			<p>Com base nas informações dos diagnósticos, do Programa de Interesse Público e das contribuições da Etapa Prévia, a SP Urbanismo formulou a Proposta de Ordenamento Urbanístico, submetida à análise das secretarias participantes do Grupo Técnico do PIU Jockey.</p>
		</section>

		<section id="consulta-4">
			<h2>4. Proposta de ordenamento urbanístico</h2>
			<comments v-if="consultaAtiva" :attr="{ id: 1400, context:'Consulta | 4. Proposta de ordenamento urbanístico' }" />
			<p>A proposta de ordenamento urbanístico é o principal componente do Projeto de Intervenção Urbana, definindo as diretrizes e os parâmetros urbanísticos compatíveis com os cenários de transformação do Hipódromo de Cidade Jardim. Esta proposta está formulada a partir dos seguintes condicionantes: Situação Fundiária, Tombamento, Transferência de Potencial Construtivo e o Plano Diretor do Jockey Club de São Paulo.</p>

			<section id="consulta-4-1">
				<h3>4.1	Situação fundiária</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 4001, context:'Consulta | 4.1	Situação fundiária' }" />

				<p>O atual Jockey Club de São Paulo (JCSP) foi fundado em 14 de março 1875 como Clube de Corridas Paulistano, começando suas atividades no bairro da Mooca. Após a retificação do Rio Pinheiros a partir de 1928, teve início o processo de urbanização dos bairros do Butantã e Jardim Guedala, executados pela Companhia City a partir dos anos 1930. Nesta época, a Companhia doou ao Jockey, com interveniência da Prefeitura de São Paulo, o terreno de cerca de 600 mil m² na margem oeste do rio, com o objetivo de trazer uma opção de lazer atraente à elite paulistana e valorizar os novos bairros.  Em 25 de janeiro 1941 foi inaugurado o Hipódromo de Cidade Jardim, concebido por Fábio Prado, prefeito da cidade e presidente do Jockey à época. Ao mesmo tempo, o JCSP doou o terreno na Mooca para o município.</p>
				<p>Este histórico é relevante para o projeto porque explica em parte a viabilização da transferência do atual terreno do Hipódromo de Cidade Jardim à titularidade do JCSP, a qual acontecera mediante interveniência da Prefeitura de São Paulo que comprou a porção do terreno de propriedade do JCSP, e suas respectivas benfeitorias, em que estava instalado o antigo Hipódromo da Mooca.  Tal condição, como se demonstrará adiante, é fundamental para a formulação de cenários no contexto de desenvolvimento deste projeto urbano. Os registros cartoriais do imóvel, destacados a seguir, trazem aspectos que subsidiam o desenvolvimento das propostas preliminares aqui apresentadas:</p>

				<p><b>Transcrição 15.339</b> de 11/11/1936 (4º Oficial de Registro de Imóveis):
				Área do Terreno: <b>600.000 m²</b>;</p>

				<p>Transmitido da Companhia Cidade Jardim para o Jockey Club de São Paulo, com interveniência da Municipalidade de São Paulo e do Banco do Comércio e Indústria de São Paulo;</p>

				<p>Averbação 11/11/1936: Consta do título de que a <b>transmitente doou ao adquirente</b> a área de 600.000,00 m² de terrenos acima descrita, para que sobre os mesmos o adquirente pudesse <b>construir e manter o seu novo hipódromo</b>, fazendo a construção com o produto da alienação, à Prefeitura, de tudo quanto, em bens e direitos ele possuía no hipódromo da Moóca, alienação essa que por preço correspondente ao custo do novo hipódromo. Em razão de tais condições de doação e da finalidade de uso da propriedade, consta na mesma averbação que o imóvel do Hipódromo de Cidade Jardim ficou “gravado com as <b>cláusulas de inalienabilidade e impenhorabilidade</b>, a fim de jamais responder pela solução de qualquer obrigação porventura assumida pelo Clube, a não ser que, <b>com prévia anuência da Municipalidade</b>, ele adquirente houver de assumir para uma eventual remoção do novo hipódromo para outro mais amplo, que, num futuro remoto, venha a ser exigido pelo desenvolvimento e progresso da cidade e pela necessidade de adoção de novas condições técnicas, porventura então existentes;”. A averbação ainda prevê que, “não obstante a indissolubilidade do Club adquirente expressamente estipulada em seus estatutos, se ainda assim um dia ocorrer a <b>hipótese de dissolução legal</b>, a parcela de seu patrimônio, então representada pelo novo hipódromo, com seus terrenos e edificações, <b>reverterá para o patrimônio da Municipalidade de São Paulo</b>”. Trata-se de averbação que replica as condições constantes no título de doação do terreno da Companhia City ao JCSP que interferem no exercício do direito de propriedade do Clube sobre a área do atual Hipódromo.</p>

				<p>Demais Averbações de 16/10/1937 a 28/03/2001: após sucessivas supressões de área do imóvel para implantação e adequações geométricas do sistema viário da região, <b>sua área remanescente foi retificada para 586.634,68 m².</b></p>

				<p><b>Matrícula 194.337</b> de 16/06/2009 (18º CRI):</p>

				<p>Área do Terreno: <b>586.634,68 m²;</b></p>

				<p>Averbação 21 (24/10/2016): “... <b>Declaração de Potencial Construtivo Passível de Transferência SMDU/DEUSO 0065/15 de 03/06/2015</b>... com fundamento nos arts. 122 a 132 da Lei 16.050/2014, ... para constar que <b>o imóvel objeto desta matrícula dispõe de 351.981,00 m² de POTENCIAL CONSTRUTIVO passível de transferência</b>, originado sem a doação de terreno, visto o mesmo ser enquadrado como ZEPEC...”</p>
			</section>

			<section id="consulta-4-2">
					<h3>4.2 Tombamento</h3>
					<comments v-if="consultaAtiva" :attr="{ id: 4002, context:'Consulta | 4.2 Tombamento' }" />

					<p>O conjunto arquitet&ocirc;nico do Jockey Club de S&atilde;o Paulo foi tombado pelo CONDEPHAAT (Conselho de Defesa do Patrim&ocirc;nio Hist&oacute;rico, Arqueol&oacute;gico, Art&iacute;stico e Tur&iacute;stico do Estado de S&atilde;o Paulo) atrav&eacute;s da Resolu&ccedil;&atilde;o SC97/10, de 19/11/2010 e tamb&eacute;m pelo CONPRESP (Conselho Municipal de Preserva&ccedil;&atilde;o do Patrim&ocirc;nio Hist&oacute;rico, Cultural e Ambiental da Cidade de S&atilde;o Paulo), atrav&eacute;s da Resolu&ccedil;&atilde;o 05/2013. Os dois documentos destacam o papel arquitet&ocirc;nico, hist&oacute;rico e simb&oacute;lico do Jockey Club para a cidade de S&atilde;o Paulo e descrevem os bens tombados, edifica&ccedil;&otilde;es cadastradas, &aacute;reas non aedificandi e &aacute;rea envolt&oacute;ria, conforme Mapa 2. Tamb&eacute;m s&atilde;o tombados os alto-relevos de autoria de Victor Brecheret incorporados ao pr&eacute;dio da arquibancada social e ao pr&eacute;dio do antigo vesti&aacute;rio de jockeys, este &uacute;ltimo n&atilde;o inclu&iacute;do no tombamento. Conforme expresso em ambas as resolu&ccedil;&otilde;es, qualquer interven&ccedil;&atilde;o que se planeje realizar no interior e &aacute;rea envolt&oacute;ria do Jockey Club deve ser aprovada pelos &oacute;rg&atilde;os de preserva&ccedil;&atilde;o.</p>
					<p>As resolu&ccedil;&otilde;es especificam 17 edifica&ccedil;&otilde;es ou conjuntos de edifica&ccedil;&otilde;es tombadas e 9 edifica&ccedil;&otilde;es ou conjuntos de edifica&ccedil;&otilde;es a serem cadastradas, especificando o escopo para tal feito. Todavia, n&atilde;o especificam se as edifica&ccedil;&otilde;es cadastradas devem ser necessariamente preservadas ou se podem ser modificadas ou mesmo demolidas. H&aacute; ainda um terceiro conjunto de edifica&ccedil;&otilde;es n&atilde;o mencionadas nas resolu&ccedil;&otilde;es, sobre as quais este projeto considera que n&atilde;o incidem restri&ccedil;&otilde;es quanto a eventuais altera&ccedil;&otilde;es ou mesmo demoli&ccedil;&otilde;es. Para ambas categorias ser&aacute; necess&aacute;ria a realiza&ccedil;&atilde;o de consultas aos respectivos &oacute;rg&atilde;os para verificar o entendimento preliminar aqui exposto.</p>
					<p>Al&eacute;m do tombamento do tra&ccedil;ado da pista do hip&oacute;dromo, as resolu&ccedil;&otilde;es destacam a import&acirc;ncia da preserva&ccedil;&atilde;o das caracter&iacute;sticas das &aacute;reas n&atilde;o edificadas situadas no miolo das pistas (denominada Pi&atilde;o do Prado) e na Vila H&iacute;pica, para preservar os visuais tomados a partir das arquibancadas e garantir a visibilidade das estruturas protegidas. Nestas &aacute;reas, n&atilde;o ser&atilde;o admitidas constru&ccedil;&otilde;es em sobressolo, excetuada a implanta&ccedil;&atilde;o de elementos de sinaliza&ccedil;&atilde;o de pr&aacute;ticas esportivas.</p>
					<p>Como visto, as diretrizes de tombamento do conjunto do Jockey Club s&atilde;o determinantes para a proposta de ordenamento urban&iacute;stico do PIU, considerando as &aacute;reas que podem ser restauradas para possibilitar a implanta&ccedil;&atilde;o de novos usos, &aacute;reas onde n&atilde;o &eacute; permitido construir, &aacute;reas com significativas restri&ccedil;&otilde;es a transforma&ccedil;&otilde;es e outras &aacute;reas que podem ter uma transforma&ccedil;&atilde;o mais significativa, incorporando novos usos e constru&ccedil;&otilde;es. A s&iacute;ntese das diretrizes de tombamento est&aacute; expressa no Mapa 2 a seguir:</p>

					<imagem
						:max-width="'700px'"
						:dados="{
						titulo: 'Mapa 2 - Tombamento do Conjunto arquitetônico do Jockey Club, de acordo com Resolução SC97/10 do CONDEPHAAT',
						tipo: 'mapa',
						url: src('arquivos/jockey-club-2/mapas/mapa2.jpg'),
						legenda: [
							{ fundo: '#A9C8CA', descricao: 'Área non aedificandi' },
							{ fundo: '#E9E5B4', descricao: 'Paddock' },
							{ fundo: '#6D153B', descricao: 'Edifícios c/ alto-relevos de Brecheret' },
							{ fundo: '#B8BBE7', descricao: 'Área envoltória' },
							{ fundo: '#FC1029', descricao: 'Bens tombados' },
							{ fundo: '#EC9426', descricao: 'Edificações registradas', 'legenda__titulo': true },
							{ fundo: '#FEF235', descricao: 'Edificações não mencionadas na Resolução de tombamento' },
							{ char: '1', descricao: 'Portaria' },
							{ char: '2', descricao: 'Arquibancada social' },
							{ char: '3', descricao: 'Arquibancada especial 1' },
							{ char: '4', descricao: 'Arquibancada especial 2' },
							{ char: '5', descricao: 'Arquibancada de proprietários' },
							{ char: '6', descricao: 'Paddock' },
							{ char: '7', descricao: 'Tatersal' },
							{ char: '8', descricao: 'Antidopping' },
							{ char: '9', descricao: 'Escadaria' },
							{ char: '10', descricao: 'Baias para lavagem dos cavalos' },
							{ char: '11', descricao: 'Caixa dágua' },
							{ char: '12', descricao: 'Hospital - Ambulatório' },
							{ char: '13', descricao: 'Pista' },
							{ char: '14', descricao: 'Antiga ducha para cavalos' },
							{ char: '15', descricao: 'Vila Hípica' },
							{ char: '16', descricao: 'Caixa dágua da vila hípica' },
							{ char: '17', descricao: 'Prédio da administração' },
							{ char: '18', descricao: 'Praça da vila hípica' },
							{ char: '19', descricao: 'Escola do Jockey Club (fora da ZOE)' },
							{ char: '20', descricao: 'Antigo Armazém (fora da ZOE)' },
							{ char: '21', descricao: 'Prédio da veterinária e Praça' },
							{ char: '22', descricao: 'Ferraria' },
							{ char: '23', descricao: 'Chaminé do forno crematório' },
							{ char: '24', descricao: 'Remanescentes do biotério' },
							{ char: '25', descricao: 'Conjunto de tratamento de águas' },
							{ char: '26', descricao: 'Antiga casa do engenheiro' },
							{ char: '27', descricao: 'Antigas residências dos empregados' },
							{ char: '28', descricao: 'Antiga garagem' },
							{ char: '29', descricao: 'Oficinas' },
							{ char: '30', descricao: 'Antiga casa do diretor' },
							{ char: '31', descricao: 'Antigo vestiário dos jockeys' },
							{ char: '32', descricao: 'Cocheiras' }
						],
						fonte: 'Elaboração: SP-Urbanismo, 2020'
					}" />
			</section>

			<section id="consulta-4-3">
				<h3>4.3 Transferência do direito de construir</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 4003, context:'Consulta | 4.3 Transferência do direito de construir' }" />

				<p>Com base em sua classificação como Zona Especial de Preservação Cultural – Bens Imóveis Representativos (ZEPEC-BIR), o Jockey Club de São Paulo solicitou à Prefeitura a emissão de uma Declaração de Potencial Construtivo Passível de Transferência, documento este que possibilita ao proprietário de um bem tombado ou de interesse de preservação cultural a transferência, mediante venda, do direito de construir do imóvel para outros imóveis na cidade. Trata-se da efetivação da Transferência do Direito de Construir - TDC, instrumento de política urbana trazido pelo Estatuto da Cidade (Lei Federal nº 10.257/2001) e regulamentado pela Prefeitura de São Paulo por meio de seu atual Plano Diretor Estratégico (Lei nº 16.050/2014), e legislações municipais correlatas. Este instrumento possibilita que categorias de imóveis específicos, privados do exercício pleno do direito de construir - no caso de imóveis classificados como ZEPEC-BIR isso decorre das restrições construtivas oriundas do tombamento - possam obter recursos a partir da venda do potencial construtivo não utilizado no próprio imóvel  para posterior aplicação do referido recurso no restauro e conservação do bem de interesse histórico. O montante de potencial construtivo passível de transferência, por sua vez, é calculado nos termos do art. 125 do PDE e constará, a pedido do proprietário, em uma Declaração de Potencial Passível de Transferência.</p>
				<p>Conforme já exposto no item 4.1, o JCSP obteve a Declaração em junho de 2015, constando um total de 351.981,00 m² de potencial construtivo passível de transferência, originado sem a doação de terreno. A partir deste instrumento, o Jockey efetuou duas operações de transferência de potencial construtivo, cedendo 50.000 m² para diferentes imóveis:</p>
				<tabela-csv
					class="jockey-club2-consulta__table"
					:titulo="'Quadro 2: Operações de transferência de potencial construtivo.'"
					:colunas="['PROCESSO ADMINISTRATIVO', 'Declaração de PCpT', 'Certidão de TPC', 'Data da Publicação', 'PCpT (m²)', 'Área Cedida (m²)', 'Saldo de PCpT (m²)']"
					:linhas="[
						['2012-0.237.770-6', '065/15', '-', '10/06/2015', '351.981.00', '0', '351.981,00'],
						['6068.2018/0001994-4', '065A/18', '024/18', '22/12/2018', '351.981,00', '8.442,41', '343.538,59'],
						['6066.2019/0005896-7', '065B/19', '023/19', '14/12/2019', '343.538,59', '41.557,59', '301.981,00']
					]"
					:fonte="'Fonte: SMDU. Elaboração: SP Urbanismo.'"
				/>

				<p>Conforme disposto no art. 124, § 3º do PDE, “quando o potencial construtivo passível de transferência ultrapassar 50.000m² (cinquenta mil metros quadrados), a transferência do que exceder este limite se dará de forma gradativa em dez parcelas anuais, incluindo as declarações já emitidas anteriormente a publicação desta lei.”</p>

				<p>Destaca-se que a Declaração do atual terreno do Hipódromo de Cidade Jardim foi emitida antes da entrada em vigor da Lei de Parcelamento, Uso e Ocupação do Solo do Município (Lei nº 16.402/2016) e que, portanto, não recebeu os Fatores de Incentivos definidos pelo art. 24 da referida lei, adotando-se, para fins do cálculo de seu potencial passível de transferência, o Fator de Incentivo igual à 1,0 (um) conforme determinava o art. 125, “caput” do PDE.</p>
			</section>

			<section id="consulta-4-4">
				<h3>4.4	Plano Diretor do Jockey Club de São Paulo 2014-2023</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 4004, context:'Consulta | 4.4	Plano Diretor do Jockey Club de São Paulo 2014-2023' }" />
				<p>O Plano Diretor do Jockey Club de São Paulo foi desenvolvido como uma das ações necessárias para a obtenção da Declaração de Potencial Construtivo Passível de Transferência, vinculada à assunção de obrigações pelo proprietário quanto ao restauro e preservação de bens imóveis protegidos.</p>
				<p>O Plano apresenta um histórico da instituição, do turfe e da criação do Hipódromo de Cidade Jardim, relatando a perda de popularidade do esporte e das receitas de apostas (poules), bem como as ações estratégicas previstas para sua recuperação financeira e o restauro dos edifícios e infraestrutura do hipódromo. O Plano mostra os eventos já realizados no local, como shows, festas e exposições, inseridos em uma visão estratégica de longo prazo que projeta a introdução de novos usos diversificados, simultaneamente à permanência das atividades do turfe, configurando no local um centro de entretenimento multifuncional. Esta visão estratégica, por sua vez, tem como referência experiências bem sucedidas em países como Austrália e Argentina, onde as corridas de cavalo são o ápice de roteiros de entretenimento que incluem gastronomia, cultura, jogos e compras.</p>
				<p>O Plano traz também um levantamento detalhado dos edifícios e outros elementos existentes no hipódromo, seu uso pretérito, atual e futuro, a indicação de fluxos de circulação do público, de logística e bolsões de estacionamento, entre outras informações que possibilitam uma compreensão sobre o funcionamento do hipódromo, e que subsidiaram a proposta de setorização do hipódromo.</p>
			</section>

			<section id="consulta-4-5">
				<h3>4.5	Partido urbanístico</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 4005, context:'Consulta | 4.5	Partido urbanístico' }" />

				<p>O partido urban&iacute;stico pode ser definido como o conjunto de decis&otilde;es ou escolhas da equipe t&eacute;cnica para responder aos aspectos trazidos pelos diagn&oacute;sticos e programa de interesse p&uacute;blico, tendo como base os condicionantes do projeto, o panorama fundi&aacute;rio e as estrat&eacute;gias de desenvolvimento urbano presentes no Plano Diretor Estrat&eacute;gico - PDE.</p>
				<p>O partido para o PIU Jockey Club parte de tr&ecirc;s pilares: a Macro&aacute;rea de Estrutura&ccedil;&atilde;o Metropolitana (MEM), as caracter&iacute;sticas do hip&oacute;dromo e as caracter&iacute;sticas do contexto urbano.</p>
				<p>A Macro&aacute;rea de Estrutura&ccedil;&atilde;o Metropolitana &ndash; MEM &ndash; &eacute; uma das oito macro&aacute;reas que representam a estrat&eacute;gia de ordenamento territorial do PDE. Em cada uma dessas macro&aacute;reas, est&atilde;o definidos diferentes objetivos que norteiam seu desenvolvimento a longo prazo, considerando seus desafios e pap&eacute;is dentro de uma estrat&eacute;gia de desenvolvimento urbano sustent&aacute;vel que engloba o conjunto da cidade, buscando a melhoria das condi&ccedil;&otilde;es urbanas, sociais, ambientais, econ&ocirc;micas, de infraestrutura e de mobilidade, entre outras.</p>
				<p>A MEM &eacute; um territ&oacute;rio cujo desenvolvimento esteve historicamente ligado &agrave;s orlas fluviais e ferrovi&aacute;rias da cidade e &agrave; forma&ccedil;&atilde;o das principais &aacute;reas industriais, concentrando atividades e elementos de infraestrutura de import&acirc;ncia metropolitana. &nbsp;Este territ&oacute;rio, em sua maioria, possui baixas densidades populacionais e passa, h&aacute; algumas d&eacute;cadas, por processos de transforma&ccedil;&atilde;o das atividades econ&ocirc;micas, constituindo-se como uma das regi&otilde;es priorit&aacute;rias para o desenvolvimento da cidade nos pr&oacute;ximos anos. Nesta macro&aacute;rea, os objetivos de desenvolvimento indicam que a infraestrutura existente deve ter um maior aproveitamento, com maior adensamento populacional, buscando equilibrar a rela&ccedil;&atilde;o entre moradias e postos de trabalho e qualificar os espa&ccedil;os p&uacute;blicos e o meio ambiente.</p>
				<p>Na regi&atilde;o do Hip&oacute;dromo de Cidade Jardim, onde bairros jardins exclusivamente residenciais se mesclam a centralidades de neg&oacute;cios, com&eacute;rcio e servi&ccedil;os, em meio a importantes avenidas e &agrave; rede estrutural de transportes p&uacute;blicos, esses objetivos se traduzem na possibilidade de ampliar as densidades e as atividades n&atilde;o residenciais e preservar sua qualidade ambiental.</p>
				<p>O Hip&oacute;dromo de Cidade Jardim, a exemplo de seus cong&ecirc;neres, &eacute; um equipamento de grande escala, com caracter&iacute;sticas volum&eacute;tricas, funcionais e log&iacute;sticas muito diversas entre os diversos locais que abriga. A interdepend&ecirc;ncia funcional entre as cocheiras e &aacute;reas de apoio, as tribunas e outras &aacute;reas de recep&ccedil;&atilde;o do p&uacute;blico e das pistas de corridas determina que este conjunto permane&ccedil;a coeso para que o hip&oacute;dromo continue funcionando, mesmo em um contexto de conviv&ecirc;ncia com outras atividades, limitando, por exemplo, as possibilidades de subdivis&atilde;o da &aacute;rea. Por outro lado, existem &aacute;reas atualmente desativadas ou cujo uso atual n&atilde;o possui um v&iacute;nculo funcional direto com o hip&oacute;dromo, sendo estas as &aacute;reas prop&iacute;cias para recepcionar transforma&ccedil;&otilde;es mais intensivas no conjunto.</p>
				<p>Assim, as caracter&iacute;sticas do hip&oacute;dromo determinam a necessidade de defini&ccedil;&atilde;o de diferentes estrat&eacute;gias para seus diferentes locais, coordenadas para que o conjunto deste equipamento possa preservar suas caracter&iacute;sticas funcionais e hist&oacute;ricas, ao mesmo tempo em que possa se adequar &agrave;s din&acirc;micas contempor&acirc;neas da cidade.</p>
				<p>As caracter&iacute;sticas do contexto urbano indicam que as transforma&ccedil;&otilde;es no hip&oacute;dromo sejam compat&iacute;veis com as particularidades do entorno, de modo que, ao mesmo tempo em que permitam que o equipamento se integre mais &agrave;s din&acirc;micas urbanas locais e se torne menos herm&eacute;tico, esta integra&ccedil;&atilde;o ocorra de modo controlado, inibindo conflitos potenciais de conviv&ecirc;ncia com as zonas exclusivamente residenciais e considerando as caracter&iacute;sticas da paisagem natural e constru&iacute;da local.</p>
				<p>Assim, os par&acirc;metros a serem definidos ser&atilde;o particularizados, buscando articular-se tanto com as &aacute;reas residenciais situadas a oeste e sul do hip&oacute;dromo, quanto ao corredor de servi&ccedil;os da Av. Lineu de Paula Machado e ao eixo estrutural do corredor Francisco Morato &ndash; Eus&eacute;bio Matoso.</p>
			</section>

			<section id="consulta-4-6">
				<h3>4.6	Setorização</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 4006, context:'Consulta | 4.6	Setorização' }" />
				<p>A partir das diretrizes do partido urbanístico, foram avaliadas as diferentes áreas que compõem o Hipódromo de Cidade Jardim, bem como sua potencial articulação com o entorno e contribuição para os objetivos de desenvolvimento da Macroárea de Estruturação Metropolitana. Tal avaliação resultou na definição de setores e subsetores, apresentados a seguir.</p>

				<p>O espaço do Hipódromo é composto por áreas bastante diversas. Há o grande espaço livre formado pelas pistas de grama e areia - onde ocorrem as corridas de cavalos e atividades de treinamento - e pelo Pião do Prado - o vazio central gramado onde se localiza o placar ou quadro de rateios das apostas. O público em geral circula entre o Estacionamento dos Eucaliptos e o complexo formado pelas tribunas, onde se localizam os acessos principais, as arquibancadas, restaurantes e salões nobres, o Paddock, o Tatersal, e as bilheterias de apostas ou “casas de poules”. Para dar suporte às atividades do turfe, a Vila Hípica possui 86 conjuntos de cocheiras, alojamentos para jockeys e funcionários, escola para jockeys, áreas de manutenção, centro veterinário, selaria, ferraria, crematório, farmácia, armazém e áreas administrativas. As Sedes social e esportiva do Jockey Club também estão instaladas no hipódromo, estando distribuídas em salões das tribunas, em edifícios de menor porte situados na Av. Lineu de Paula Machado, e em áreas livres que abrigam campos gramados, quadras e piscinas. Associações e agremiações diversas ligadas ao turfe ocupam edifícios de menor porte, situados entre a Vila Hípica e as tribunas. Os estacionamentos, todos implantados a céu aberto, são compostos por oito bolsões, totalizando cerca de 2.000 vagas. O maior é o Estacionamento dos Eucaliptos, localizado na Rua José Augusto de Queiroz, com cerca de 800 vagas. Os demais bolsões estão dispersos entre a Vila Hípica e as tribunas, com cerca de 1.200 vagas, Os acessos do público ao hipódromo e aos eventos, bem como dos associados ao clube, acontece pela Av. Lineu de Paula Machado e pela Rua José Augusto de Queiroz. O acesso à Vila Hípica se dá pela Rua Bento Frias e as operações logísticas (transporte de animais, montagem e desmontagem de eventos, manutenção, carga e descarga) se dão pelas ruas José Augusto de Queiroz e Bento Frias.</p>

				<Imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/mapas/mapa3.jpg'),
					caption: 'Mapa 3 – Organização interna do hipódromo',
					fonte: 'PD Jockey 2013-2024. Elaboração: SP Urbanismo'
				}"></Imagem>

				<Imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/mapas/mapa4.jpg'),
					caption: 'Mapa 4 – Organização interna do hipódromo',
					fonte: 'PD Jockey 2013-2024. Elaboração: SP Urbanismo'
				}"></Imagem>

				<p>A partir do reconhecimento das áreas internas do hipódromo, foi possível distinguir dois grupos. O primeiro, denominado <b>Setor de Preservação</b>, corresponde a 83% da área do terreno do hipódromo e compreende as áreas funcionalmente ativas e diretamente utilizadas para as atividades do turfe, além de outras atividades do Jockey Club de São Paulo, com presença marcante de edifícios históricos e espaços livres preservados pelas resoluções de tombamento vigentes, que configuram os usos principais do equipamento. O segundo, denominado <b>Setor de Transformação</b>, corresponde a 17% da área do terreno do hipódromo e compreende as áreas funcionalmente dissociadas das atividades do turfe, as quais poderão ser transformadas urbanisticamente sem prejuízo do funcionamento do equipamento e das disposições das resoluções de tombamento, contribuindo para o maior aproveitamento do solo urbano na Macroárea de Estruturação Metropolitana e para a diversificação de usos no entorno.</p>

				<p>Os objetivos específicos a serem alcançados no Setor de Preservação são:</p>
				<ul>
					<li>possibilitar a requalificação das áreas funcionais do Hipódromo de Cidade Jardim ligadas ao turfe, com atualização tecnológica dos equipamentos e infraestruturas e com ações voltadas ao restauro dos edifícios históricos;</li>
					<li>permitir a introdução de novos usos no interior dos edifícios históricos existentes desde que não inviabilizem as atividades ligadas ao turfe e sejam compatíveis com as particularidades de ambiência do conjunto do hipódromo e dos edifícios históricos preservados, devendo ser observadas as disposições instituídas pelas resoluções de tombamento e as características da vizinhança;</li>
					<li>garantir a preservação dos atributos paisagísticos e ambientais do Hipódromo de Cidade Jardim, valorizando a identificação do conjunto como patrimônio histórico do Município de São Paulo e como espaço livre de fruição da paisagem, admitindo-se a ampliação dos seus serviços ambientais;</li>
					<li>possibilitar o aumento da integração do Hipódromo de Cidade Jardim e das novas atividades com o entorno e com a cidade, contribuindo para uma maior permeabilidade visual do equipamento.</li>
				</ul>
				<p>Os objetivos específicos a serem alcançados no Setor de Transformação são:</p>
				<ul>
					<li>possibilitar a transformação urbanística, em conformidade com o ordenamento territorial expresso na Lei nº 16.050 de 2014, com a finalidade de contribuir para o aproveitamento mais intensivo do solo urbano, com parâmetros compatíveis às características do desenho da paisagem no entorno;</li>
					<li>induzir a transformação das áreas do terreno do Hipódromo de Cidade Jardim que estão dissociadas da atividade do turfe, visando a introdução de novos usos que contribuam para o aumento da diversidade e vitalidade do entorno, com a mobilidade e a ampliação das áreas verdes;</li>
					<li>possibilitar a implantação de fachadas ativas ou áreas de fruição pública na Av. Lineu de Paula Machado e na Rua José Augusto de Queiroz, contribuindo para uma maior integração do hipódromo com o entorno e para a ampliação da oferta de serviços de conveniência à vizinhança.</li>
				</ul>

				<Imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/mapas/mapa5.jpg'),
					caption: 'Mapa 5 – Setores de Preservação e Transformação.',
					fonte: 'Elaboração: SP Urbanismo'
				}"></Imagem>

				<p>A partir da definição dos setores de preservação e transformação, foram avaliados pormenores relativos a barreiras físicas e funcionais, aos edifícios e espaços livres, aos acessos e relações com o entorno e aos cenários de transformação, redundando na formulação da presente proposta de subdivisão dos setores em sete subsetores: Pistas de Corrida, Pião do Prado, Tribunas, Vila Hípica, Lineu de Paula Machado, José Augusto de Queiroz e Eusébio Matoso.</p>
				<p>Como referência geral, a linha divisória entre o Subsetor Pistas de Corrida e os demais subsetores corresponde a uma ampliação em 5m do limite externo da pista de grama, de modo a afastar o limite físico das pistas de eventuais elementos de vedação que venham a ser implantados entre os subsetores. Quando os demais subsetores possuem edificações implantadas a distâncias menores que esta, prevalecem as edificações, como por exemplo nos subsetores Vila Hípica e Tribunas. Outras exceções à regra geral  são a extensão do Subsetor Pistas até o limite nordeste do lote, onde se encontra o muro de vedação da Av. Magalhães de Castro (Marginal Pinheiros), e o limite da área de preservação permanente (APP) de 100m a partir da borda do leito regular do Rio Pinheiros, conforme disposições do art. 4º, alínea “c” do Código Florestal (Lei Federal nº12.651/2012), que define um dos limites entre os subsetores Pistas de Corrida e José Augusto de Queiroz. O limite físico entre a Tribuna Especial e o Clube define a divisão entre os subsetores Lineu de Paula Machado e Tribunas. As edificações secundárias que compõem o conjunto tombado do Subsetor Tribunas, como a Portaria do Estacionamento dos Eucaliptos e a Ducha de Cavalos, definem o limite entre os subsetores Tribunas e José Augusto de Queiroz. Por fim, os limites físicos dos conjuntos de cocheiras definem as divisões entre os subsetores Eusébio Matoso, Vila Hípica e Lineu de Paula Machado. As diretrizes para cada subsetor estão descritas a seguir: </p>

				<p><b>1. Subsetor Pistas de Corridas:</b> principal componente de hipódromo, palco das corridas de cavalos e grande espaço vazio estruturador do equipamento. São quatro pistas: uma externa, de grama e três de areia (sendo duas para treino), formando anéis circunscritos um ao outro. Este subsetor não inclui o “miolo” das pistas, que se constitui em outro subsetor, denominado “Pião do Prado”. Mais ao norte, no espaço entre as pistas de areia, há a piscina para fisioterapia dos cavalos e dois picadeiros utilizados para exercício e doma dos potros. Além de indissolúvel em termos de funcionamento, este subsetor condiciona a distribuição de todos os demais no hipódromo. As resoluções de tombamento o definem como área non <em>aedificandi</em> em sobressolo, possibilitando um eventual aproveitamento do subsolo, sem prejuízo da funcionalidade principal.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura1.jpg'),
					caption: 'Figura 1 – Vista Aérea com destaque do Subsetor Pistas de Corrida.',
					fonte: 'Google Earth, 2019. Elaboração: SP Urbanismo'
				}" />

				<p><b>2. Subsetor Pião do Prado</b> espaço livre que compreende o anel interno da pista de corridas, onde está instalado o Quadro de rateios e equipamentos de infraestrutura do hipódromo. As resoluções de tombamento a classificam como área <em>non aedificandi</em> em sobressolo, com o objetivo de preservar a visão completa das pistas pelo público a partir das tribunas durante as corridas. Portanto deve-se manter como área livre, dedicada à preservação da ambiência do hipódromo e da paisagem. Há potencial para aproveitamento como área de lazer e prática de esportes de associados e, eventualmente, do público, fora do período de realização de treinos e corridas e sem que o acesso prejudique as pistas. A área também pode continuar prestando relevantes serviços ambientais para detenção e absorção de águas pluviais. A possibilidade de transformações permanentes está limitada a construções em subsolo, sem prejuízo da funcionalidade principal.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura2.jpg'),
					caption: 'Figura 2 – Vista Aérea com destaque do Subsetor Pião do Prado.',
					fonte: 'Google Earth, 2019. Elaboração: SP Urbanismo'
				}" />

				<p><b>3. Subsetor Tribunas:</b> compreende os principais edifícios históricos do hipódromo, projetadas por Elisiário Bahiana, como os edifícios das Tribunas, Paddock e Tatersal, entre outros. São ainda hoje utilizados pelo Jockey Club, tanto para as atividades ligadas ao turfe, como para eventos não relacionados, além de abrigar os restaurantes hoje existentes. As edificações devem ser todas preservadas, ainda que seu uso possa ser transformado para se adaptar ao novo perfil multifuncional do conjunto.  As áreas livres, situadas entre a Av. Lineu de Paula Machado e a pista do hipódromo também podem ter um aproveitamento mais nobre, substituindo áreas de estacionamento por atividades de cultura, lazer e gastronomia, por exemplo. Considerando sua localização e visuais privilegiadas, são áreas fundamentais para a qualificação e dinamização do conjunto. Neste subsetor também existem oportunidades de demolição de muros em trechos do perímetro, possibilitando maior amplitude visual do marcante conjunto de edifícios.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura3.jpg'),
					caption: 'Figura 3 – Vista Aérea com destaque do Subsetor Tribunas.',
					fonte: 'Google Earth, 2019. Elaboração: SP Urbanismo'
				}" />

				<p><b>4. Subsetor Vila Hípica</b> abarca o conjunto de cocheiras, edifício administrativo, clínica veterinária e demais usos de apoio ao turfe, implantados em edificações tombadas. Esse subsetor deve ser inteiramente preservado como patrimônio construído, sendo uma área fundamental para o funcionamento do hipódromo. Conforme indicado no Plano Diretor do Jockey, atualmente possui grande ociosidade pela redução do plantel de animais, o que indica que pode receber outras atividades compatíveis com as características dos edifícios existentes, com configuração pavilhonar de piso único, tais como equipamentos culturais, oficinas, eventos, atividades socioeducativas e de qualificação profissional, além de áreas administrativas e de apoio ao funcionamento do conjunto. Além da preservação e restauração, a adaptação dos edifícios deste subsetor para novas atividades pode demandar a instalação de novas infraestruturas e a reformulação dos espaços interiores.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura4.jpg'),
					caption: 'Figura 4 – Vista Aérea com destaque do Subsetor Vila Hípica.',
					fonte: 'Google Earth, 2019. Elaboração: SP Urbanismo'
				}" />

				<p><b>5. Subsetor Lineu de Paula Machado</b> em posição central no conjunto e situado entre a Av. Lineu de Paula Machado e a pista do hipódromo, é um subsetor onde estão implantadas edificações tombadas, como o antigo Ambulatório (que nos últimos anos tem abrigado a exposição Casa Cor) e a Caixa d’Água, juntamente com edificações registradas e edificações não mencionadas nas resoluções de tombamento. É também onde se encontra o clube e suas áreas esportivas, além de pequenos bolsões de estacionamento. Hoje a avenida não possui nenhum atrativo que dinamize sua frequência e crie alguma movimentação de pedestres. Do lado do hipódromo são quase 1.400 metros de muros, com poucos pontos de contato com a avenida. Do outro lado, conformando a borda da ZER (Zona Exclusivamente Residencial) encontram-se imóveis não residenciais classificados como ZCOR2 (Zona Corredor 2). Na maioria dos casos, são antigas residências que tiveram seu uso alterado para atividades relacionadas ao setor de serviços, mas que também não propiciam atratividade e movimento à avenida. Muitos desses imóveis encontram-se subutilizados, à venda ou disponíveis para aluguel. A proposta para esse subsetor é permitir uma transformação controlada no lado do hipódromo, possibilitando a implantação de novos edifícios ou a transformação dos existentes, voltados diretamente para a avenida para criar atratividade e movimento, fazendo com que o conjunto se relacione com maior intensidade com o bairro e contribuindo para trazer mais segurança ao entorno nos períodos em que a maioria dos moradores está ausente. A possibilidade da demolição dos muros, substituindo-os por gradis ou outras barreiras permeáveis visualmente também é importante para aproximar o conjunto do Jockey do bairro e qualificar a paisagem da Av. Lineu de Paula Machado. </p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura5.jpg'),
					caption: 'Figura 5 – Vista Aérea com destaque do Subsetor Lineu de Paula Machado.',
					fonte: 'Google Earth, 2019. Elaboração: SP Urbanismo'
				}" />

				<p><b>6. Subsetor Eusébio Matoso</b> compreende a área relativa ao conjunto de cocheiras mais ao norte do Jockey, próximo ao encontro das avenidas Lineu de Paula Machado, Eusébio Matoso, Prof. Francisco Morato e Vital Brasil. É o ponto de melhor acessibilidade do Jockey, a 550 metros da estação Butantã do Metrô (Linha 4 – Amarela), próximo à estação Hebraica-Rebouças da CPTM (Linha 9 – Esmeralda) e a poucos metros da Parada Vital Brasil do Corredor Campo Limpo – Rebouças – Centro da SPTrans, situado na Av. Prof. Francisco Morato. Pela proximidade com o corredor de ônibus e pelo fato das edificações constarem apenas como registradas nas resoluções de tombamento – o que possibilita sua transformação –, o Subsetor poderia receber parâmetros similares aos da ZEU (Zona Eixo de Estruturação da Transformação Urbana) vizinha, compatibilizando-o ao entorno, com ocupação mais intensa do solo, maior diversidade de usos e buscando promover a qualificação dos espaços públicos de modo articulado ao sistema de transporte público coletivo.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura6.jpg'),
					caption: 'Figura 6 – Vista Aérea com destaque do Subsetor Eusébio Matoso.',
					fonte: 'Google Earth, 2019. Elaboração: SP Urbanismo'
				}" />

				<p><b>7. Subsetor José Augusto de Queiroz</b> localizado na extremidade sul do lote, é composto pelo chamado Estacionamento dos Eucaliptos (800 vagas), que margeia o terreno junto à R. Dr. José Augusto de Queiroz, e pela área livre de formato triangular situada entre o estacionamento e a pista do hipódromo. O subsetor é o mais próximo da Ponte Engenheiro Roberto Rossi Zuccolo (Cidade Jardim), da estação Cidade Jardim da CPTM (Linha 9 – Esmeralda) e do Parque do Povo. Ao mesmo tempo em que se constitui atualmente como o principal acesso de veículos ao conjunto, é um subsetor que demanda intervenções que contribuam para a mitigação do impacto de vizinhança do hipódromo à zona exclusivamente residencial próxima. Nesse subsetor, encontra-se outra área passível de transformação mais intensa, que pode recepcionar empreendimentos que tragam diversidade de usos e maior densidade construtiva, afastados das residências para uma inserção sensível à vizinhança e à ambiência do conjunto do hipódromo, com preservação da vegetação existente.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura7.jpg'),
					caption: 'Figura 7 – Vista Aérea com destaque do Subsetor José Augusto de Queiroz. ',
					fonte: 'Google Earth, 2019. Elaboração: SP Urbanismo'
				}" />

				<p>As áreas e distribuição dos setores e subsetores é a seguinte:</p>

				<div class="tabela-container">
					<table>
					<caption>Quadro 3 – Setores e Subsetores do PIU Jockey Club</caption>
					<tbody>
					<tr>
					<th rowspan="2" width="110">
					Setor
					</th>
					<th rowspan="2" width="177">
					Subsetor
					</th>
					<th colspan="2" width="194">
					&Aacute;rea (m&sup2;)
					</th>
					<th colspan="2" width="160">
					Distribui&ccedil;&atilde;o (%)
					</th>
					</tr>
					<tr>
					<th width="98">
					Setor
					</th>
					<th width="97">
					Subsetor
					</th>
					<th width="79">
					Setor
					</th>
					<th width="81">
					Subsetor
					</th>
					</tr>
					<tr>
					<td rowspan="4" width="110">
					Preserva&ccedil;&atilde;o
					</td>
					<td width="177">
					Pistas de Corrida
					</td>
					<td rowspan="4" width="98">
					486.906,79
					</td>
					<td width="97">
					252.252,91&nbsp;&nbsp;&nbsp;&nbsp;
					</td>
					<td rowspan="4" width="79">
					83
					</td>
					<td width="81">
					43
					</td>
					</tr>
					<tr>
					<td width="177">
					Pi&atilde;o do Prado
					</td>
					<td width="97">
					99.727,90
					</td>
					<td width="81">
					17
					</td>
					</tr>
					<tr>
					<td width="177">
					Tribunas
					</td>
					<td width="97">
					52.797,12
					</td>
					<td width="81">
					9
					</td>
					</tr>
					<tr>
					<td width="177">
					Vila H&iacute;pica
					</td>
					<td width="97">
					82.128,86
					</td>
					<td width="81">
					14
					</td>
					</tr>
					<tr>
					<td rowspan="3" width="110">
					Transforma&ccedil;&atilde;o
					</td>
					<td width="177">
					Lineu de Paula Machado
					</td>
					<td rowspan="3" width="98">
					99.727,89
					</td>
					<td width="97">
					46.930,77
					</td>
					<td rowspan="3" width="79">
					17
					</td>
					<td width="81">
					8
					</td>
					</tr>
					<tr>
					<td width="177">
					Jos&eacute; Augusto de Queiroz
					</td>
					<td width="97">
					41.064,43
					</td>
					<td width="81">
					7
					</td>
					</tr>
					<tr>
					<td width="177">
					Eus&eacute;bio Matoso
					</td>
					<td width="97">
					11.732,69
					</td>
					<td width="81">
					2
					</td>
					</tr>
					<tr>
					<td width="110">
					<strong>&nbsp;</strong>
					</td>
					<td width="177">
					<strong>Total</strong>
					</td>
					<td colspan="2" width="194">
					<strong>586.634,68</strong>
					</td>
					<td colspan="2" width="160">
					<strong>100</strong>
					</td>
					</tr>
					</tbody>
					</table>
					<div class="fonte">Elaboração: SP Urbanismo.</div>
					</div>

					<imagem :dados="{
						tipo: 'coluna',
						url: src('arquivos/jockey-club-2/mapas/mapa6.jpg'),
						caption: 'Mapa 6 – Subsetores do PIU Jockey Club.',
						fonte: 'Elaboração: SP Urbanismo.'
					}" />
			</section>

			<section id="consulta-4-7">
				<h3>4.7	Síntese das contribuições do grupo técnico</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 4007, context:'Consulta | 4.7	Síntese das contribuições do grupo técnico' }" />

				<p>A partir das contribuições da população na Etapa Prévia, a proposta inicial do PIU Jockey Club considerava a hipótese de implantação de um parque público no Subsetor Pião do Prado, cuja utilização se daria fora dos períodos de realização de treinos e corridas. Além de Pião do Prado, que abrigaria campos, quadras e pistas de corrida, o novo parque demandaria a utilização de áreas situadas nos subsetores Lineu de Paula Machado e José Augusto de Queiroz, para a implantação de edificações (administração, sanitários, vestiários, etc), áreas livres com vegetação arbórea e acessos exclusivos.</p>
				<p>Em decorrência do aumento da frequência da população ao conjunto do hipódromo, estavam previstas intervenções urbanísticas associadas à melhoria da acessibilidade por pedestres e ciclistas a partir das estações metro-ferroviárias e da infraestrutura cicloviária existente. Este programa de intervenções seria suportado por receitas provenientes da venda de potencial construtivo adicional (PCA) aos setores de transformação do PIU, alocados em uma conta segregada do Fundurb.</p>
				<p>Esta proposta inicial foi a base para as discussões do Grupo Técnico Intersecretarial formado pelas Secretarias de Desenvolvimento Urbano, Verde e Meio Ambiente, Cultura, Transportes e de Subprefeituras, cujas principais contribuições estão sintetizadas a seguir:</p>
				<p>O encaminhamento jurídico deste PIU poderá ser realizado via decreto, estando assim limitado ao coeficiente de aproveitamento máximo da MEM (2,0), conforme dispõe o art. 15, § 1º da Lei de Zoneamento. Eventuais intervenções deverão ser custeadas por recursos privados, sem utilização de recursos públicos, considerando que os recursos do Fundurb devem ser empregados prioritariamente em regiões com maior vulnerabilidade social, maiores carências de infraestrutura urbana e fragilidades ambientais.</p>
				<p>A Declaração de Potencial Construtivo passível de Transferência do Jockey está vinculada à integralidade do lote original do hipódromo, de modo que, caso haja parcelamento, o documento deverá ser reeditado para os novos lotes desmembrados, tendo em vista a alteração da condição fática que culminou no cálculo do Potencial transferível realizado em 2015.</p>
				<p>O Hipódromo de Cidade Jardim não é uma área definida pelo PDE para implantação de parque público e os distritos do Morumbi e Butantã, onde o equipamento está inserido, estão entre as que detém os melhores indicadores ambientais da cidade. Por outro lado, o hipódromo é, reconhecidamente, uma área de interesse ambiental e paisagístico do município, com potencial de utilização pela população através da fruição pública de determinadas áreas. No entanto, em relação à proposta de implantação de um parque público, o Grupo avaliou que os eventos do turfe coincidem com os dias e horários de maior utilização dos parques municipais, diminuindo o alcance de sua frequência por um público mais amplo. Além disso, avaliou que a implantação e gestão de um parque público no local seria inviável, considerando as condições geológicas da área e as restrições das resoluções de tombamento, que restringem o plantio de vegetação arbórea e a construção de edificações no Pião do Prado.</p>
				<p>Em relação às diretrizes de tombamento, destaca-se que o conceito de preservação deve compreender o uso compatível e contemporâneo do equipamento. Outra questão fundamental trazida é que os gabaritos dos edifícios nos setores de transformação não podem causar acanhamento do conjunto histórico do hipódromo.</p>
				<p>As transformações previstas no hipódromo podem ser positivas para a região, desde que sejam bem equacionadas as relações de vizinhança e a articulação com os sistemas de transportes.</p>
				<p>A partir destas contribuições e considerando as competências finalísticas das secretarias consultadas na matéria em que se manifestaram, a SP Urbanismo revisou as propostas do projeto, abandonando a proposta do parque público e, consequentemente, do programa de intervenções. Assim, no PIU Jockey Club o cerne do interesse público, que por sua vez justifica a continuidade da elaboração do presente PIU, passou a ter com objeto a definição dos parâmetros urbanísticos para a ZOE do Hipódromo de Cidade Jardim e a destinação dos recursos da venda do PCA dos setores de transformação para a conta geral do FUNDURB.</p>
			</section>

			<section id="consulta-4-8">
				<h3>4.8	Cenários</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 4008, context:'Consulta | 4.8	Cenários' }" />

				<p>O PIU Jockey Club tem como caracter&iacute;stica a regula&ccedil;&atilde;o de uma ZOE (Zona de Ocupa&ccedil;&atilde;o Especial) incidente sobre um relevante equipamento privado, cujo interesse p&uacute;blico reside na preserva&ccedil;&atilde;o do hip&oacute;dromo e de seus atributos hist&oacute;ricos, arquitet&ocirc;nicos e paisag&iacute;sticos. Conforme proposto no Programa de Interesse P&uacute;blico e manifestado nas contribui&ccedil;&otilde;es recebidas na primeira Consulta P&uacute;blica, este projeto traz a oportunidade deste equipamento ampliar seu interesse p&uacute;blico, intensificando sua utilidade e atratividade para a popula&ccedil;&atilde;o atrav&eacute;s da introdu&ccedil;&atilde;o de novas atividades que possam conviver com as atividades do turfe promovidas pelo Jockey Club de S&atilde;o Paulo, visto que estas ocorrem atualmente com menor intensidade do que no passado. Pelo porte e caracter&iacute;sticas da &aacute;rea, as &aacute;reas de interesse de preserva&ccedil;&atilde;o hist&oacute;rica e paisag&iacute;stica podem ser combinadas a outras que possam se transformar para intensificar o aproveitamento do conjunto, tornando-o mais diversificado e din&acirc;mico e contribuindo diretamente para a qualifica&ccedil;&atilde;o urbana do entorno.</p>
				<p>Considerando que o cumprimento da fun&ccedil;&atilde;o social da propriedade desta &aacute;rea se relaciona justamente com essas possibilidades de uso mais intensivo, tanto do solo urbano, quanto em rela&ccedil;&atilde;o &agrave; frequ&ecirc;ncia do equipamento, &eacute; importante que tais transforma&ccedil;&otilde;es ocorram mesmo na hip&oacute;tese de impossibilidade de parcelamento da gleba, desde que atendam &agrave;s diferentes diretrizes e par&acirc;metros definidos para cada subsetor. Este &eacute; o conceito conhecido como &ldquo;lote virtual&rdquo;. No entanto, caso o Jockey Club consiga parcelar por&ccedil;&otilde;es do lote - possibilidade esta que poder&aacute; ser melhor viabilizada a depender do afastamento das cl&aacute;usulas de inalienabilidade e impenhorabilidade gravadas na Matr&iacute;cula do lote - os mesmos par&acirc;metros j&aacute; definidos por subsetor permanecer&atilde;o vigentes para os novos lotes frutos do desmembramento, somando-se a outros dispositivos exclusivos desse cen&aacute;rio, com a destina&ccedil;&atilde;o de &aacute;reas</p>
				<p>Em rela&ccedil;&atilde;o &agrave; aliena&ccedil;&atilde;o de partes da &aacute;rea, tamb&eacute;m &eacute; poss&iacute;vel imaginar cen&aacute;rios diversos que considerem a condi&ccedil;&atilde;o fundi&aacute;ria atual. As condi&ccedil;&otilde;es definidas na matr&iacute;cula do im&oacute;vel - notadamente as cl&aacute;usulas de inalienabilidade e impenhorabilidade do bem - visam garantir e est&atilde;o relacionadas &agrave; manuten&ccedil;&atilde;o do equipamento do Hip&oacute;dromo de Cidade Jardim, de modo a preservar as atividades ali desempenhadas pelo Jockey Club de S&atilde;o Paulo. Outra condi&ccedil;&atilde;o colocada na matr&iacute;cula se refere &agrave; possibilidade de transfer&ecirc;ncia do im&oacute;vel no qual se localiza o Hip&oacute;dromo &agrave; Municipalidade, condi&ccedil;&atilde;o esta que se concretizar&aacute; em caso de dissolu&ccedil;&atilde;o legal do Jockey Club de S&atilde;o Paulo enquanto uma associa&ccedil;&atilde;o civil sem fins lucrativos, ou seja, caso as fun&ccedil;&otilde;es prec&iacute;puas de funcionamento do Jockey percam sua raz&atilde;o de ser ou deixem de existir.</p>
				<p>Neste sentido, &eacute; relevante tratar a possibilidade de venda de parcelas do hip&oacute;dromo sem desconsiderar a preserva&ccedil;&atilde;o das &aacute;reas funcionais que originaram o surgimento das cl&aacute;usulas de inalienabilidade e impenhorabilidade e que garantem a manuten&ccedil;&atilde;o da fun&ccedil;&atilde;o social p&uacute;blica do Jockey Club enquanto entidade. Logo, acreditamos ser poss&iacute;vel tanto a implanta&ccedil;&atilde;o de novos edif&iacute;cios no setor de transforma&ccedil;&atilde;o (dissociadas da atividade principal do Hip&oacute;dromo e sem transfer&ecirc;ncia da propriedade do Jockey Club), cujas unidades ser&atilde;o disponibilizadas ao mercado consumidor mediante loca&ccedil;&atilde;o (empreendimentos de renda). Da mesma forma, seria poss&iacute;vel considerar, na hip&oacute;tese de o Jockey Club conseguir a autoriza&ccedil;&atilde;o necess&aacute;ria para alienar o todo ou parcelas de seu im&oacute;vel, que as mesmas unidades pudessem ser vendidas livremente ao mercado. Dessa maneira, a proposta urban&iacute;stica visa garantir a edifica&ccedil;&atilde;o de novos empreendimentos nas &aacute;reas dissociadas do setor de preserva&ccedil;&atilde;o independentemente do afastamento do &ocirc;nus de inalienabilidade constante na matr&iacute;cula do Hip&oacute;dromo.</p>
				<p>Em rela&ccedil;&atilde;o &agrave; transfer&ecirc;ncia de potencial construtivo, como o potencial pass&iacute;vel de transfer&ecirc;ncia da declara&ccedil;&atilde;o atual em posse do Jockey &eacute; maior que o potencial a que teria direito pela legisla&ccedil;&atilde;o vigente p&oacute;s 2016, dada a entrada em vigor de novos Fatores de Incentivo, e pelos par&acirc;metros definidos neste PIU, a modelagem econ&ocirc;mica indica que a maior probabilidade &eacute; que o Jockey transfira este potencial por, pelo menos, os pr&oacute;ximos dez anos, at&eacute; que se esgote. Caso opte pelo cen&aacute;rio menos prov&aacute;vel de parcelar a &aacute;rea enquanto ainda det&eacute;m saldo de potencial transfer&iacute;vel, ter&aacute; este potencial recalculado nos termos da legisla&ccedil;&atilde;o vigente, com o desconto do potencial j&aacute; transferido e j&aacute; incorporado em outros im&oacute;veis localizados no munic&iacute;pio de S&atilde;o Paulo.</p>
				<p>Em rela&ccedil;&atilde;o ao acesso do p&uacute;blico a &aacute;reas do conjunto do hip&oacute;dromo, parece haver uma grande compatibilidade entre os objetivos de transforma&ccedil;&atilde;o do conjunto do hip&oacute;dromo em um centro de entretenimento multifuncional e o dispositivo da frui&ccedil;&atilde;o p&uacute;blica, ampliando a atratividade da &aacute;rea para a popula&ccedil;&atilde;o e possibilitando que o Jockey se beneficie dos incentivos urban&iacute;sticos previstos na legisla&ccedil;&atilde;o.</p>
				<p>Como o Plano Diretor do Jockey 2013-2024 n&atilde;o indica um cronograma de quando a institui&ccedil;&atilde;o pretende transformar os diversos espa&ccedil;os que comp&otilde;em o hip&oacute;dromo, os cen&aacute;rios descritos neste item demonstram como o PIU foi estruturado para responder a diversas hip&oacute;teses de desenvolvimento do conjunto no tempo, com diversas combina&ccedil;&otilde;es poss&iacute;veis entre a configura&ccedil;&atilde;o fundi&aacute;ria, transfer&ecirc;ncia de potencial, usos e produtos imobili&aacute;rios, entre outras vari&aacute;veis, possibilitando uma flexibilidade de escolhas &agrave; institui&ccedil;&atilde;o conforme suas prioridades, ao mesmo tempo em que garante que tais transforma&ccedil;&otilde;es ocorram em conson&acirc;ncia com as diretrizes de desenvolvimento urbano do PDE e caracter&iacute;sticas do entorno.</p>
			</section>

			<section id="consulta-4-9">
				<h3>4.9 Parcelamento</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 4009, context:'Consulta | 4.9 Parcelamento' }" />
				<p>A &aacute;rea do Hip&oacute;dromo de Cidade Jardim &eacute; constitu&iacute;da, atualmente, por um &uacute;nico lote com 586.634,68 m&sup2; (&aacute;rea matr&iacute;cula) ou 617.971 m&sup2; (&aacute;rea conforme o Mapa Digital da Cidade - MDC). Com objetivo de compatibilizar os par&acirc;metros aos dados utilizados para os c&aacute;lculos da transfer&ecirc;ncia do direito de construir (TDC), o PIU Jockey adotou a &aacute;rea da matr&iacute;cula, definindo as &aacute;reas dos setores e subsetores a partir da propor&ccedil;&atilde;o aferida nos programas de geoprocessamento utilizados para a execu&ccedil;&atilde;o dos mapas deste projeto.</p>
				<p>&nbsp;A Lei de Zoneamento ou Lei de Parcelamento, Uso e Ocupa&ccedil;&atilde;o do Solo &ndash; LPUOS (Lei n&ordm; 16.402/2016) prev&ecirc; o parcelamento de &aacute;reas acima de 20.000m&sup2;, com destina&ccedil;&atilde;o de 30 a 40% de &aacute;rea p&uacute;blica. No entanto, em uma ZOE (Zona de Ocupa&ccedil;&atilde;o Especial) como o Jockey Club, conforme o art. 42 da LPUOS, este par&acirc;metro de lote m&aacute;ximo n&atilde;o &eacute; aplic&aacute;vel, tendo em vista as particularidades do equipamento (hip&oacute;dromo), do terreno e de seu conjunto constru&iacute;do, n&atilde;o se vislumbrando a possibilidade de um parcelamento tradicional do terreno, com abertura de novas vias e destina&ccedil;&atilde;o de &aacute;reas verdes e institucionais.</p>
				<p>A escala e implanta&ccedil;&atilde;o em um lote &uacute;nico s&atilde;o compat&iacute;veis com as caracter&iacute;sticas do hip&oacute;dromo, que demanda extensas &aacute;reas livres de pistas e treinamento conectadas a &aacute;reas edificadas com fun&ccedil;&otilde;es ligadas ao turfe, como abrigo, tratamento e cuidado com os animais, alojamentos e vesti&aacute;rio para os jockeys, tribunas, &aacute;reas para apostas, leil&otilde;es, eventos sociais e restaurantes, entre outras.</p>
				<p>O projeto aponta para transforma&ccedil;&otilde;es mais intensivas no Subsetor Eus&eacute;bio Matoso, combinadas a transforma&ccedil;&otilde;es mais restritas nos subsetores Jos&eacute; Augusto de Queiroz e Lineu de Paula Machado e ao restauro e retrofit de edif&iacute;cios dos subsetores Tribunas e Vila H&iacute;pica. Conforme j&aacute; exposto, tais transforma&ccedil;&otilde;es podem ocorrer mesmo em um lote &uacute;nico, com par&acirc;metros espec&iacute;ficos aplicados a cada subsetor, como se cada um destes subsetores estivesse constitu&iacute;do em um lote diferente (lote virtual). Conforme as diretrizes definidas neste PIU, os novos empreendimentos que venham a ser implantados devem, necessariamente, estar implantados em um &uacute;nico subsetor, estando dispensados do atendimento das dimens&otilde;es m&aacute;ximas de lote estabelecidas ordinariamente nos termos do artigo 42 da LPUOS, recebendo novas dimens&otilde;es de &aacute;rea m&aacute;xima de lote ajust&aacute;veis &agrave; caracter&iacute;stica desta ZOE</p>
				<p>Na hip&oacute;tese de o Jockey Club conseguir a autoriza&ccedil;&atilde;o necess&aacute;ria para parcelar por&ccedil;&otilde;es do lote, este parcelamento dever&aacute; ocorrer, primeiramente, atrav&eacute;s da modalidade desmembramento, mantendo a subdivis&atilde;o dos setores e subsetores definidos no PIU, possibilitando a manuten&ccedil;&atilde;o da coes&atilde;o interna necess&aacute;ria ao funcionamento das atividades de cada subsetor e necess&aacute;rias &agrave; preserva&ccedil;&atilde;o das atividades associadas ao turfe.</p>
				<p>Ap&oacute;s o desmembramento, o parcelamento poder&aacute; ocorrer em fases, mediante Plano Integrado, de modo que cada subsetor possa se desenvolver a seu tempo, dentro de uma ordem geral. Os subsetores dentro do setor de transforma&ccedil;&atilde;o dever&atilde;o ser loteados, prevendo a destina&ccedil;&atilde;o de &aacute;reas p&uacute;blicas para implanta&ccedil;&atilde;o de &aacute;reas verdes, sistema vi&aacute;rio e &aacute;reas sem afeta&ccedil;&atilde;o definida, observando os limites m&aacute;ximos relativos &agrave; frente e &aacute;rea, conforme o Quadro 4 a seguir.</p>

				<div class="tabela-container">
					<table width="644">
						<caption>
							Quadro 4: Percentuais de destinação de áreas públicas e dimensões máximas do lote.
						</caption>
						<tbody>
							<tr class="escuro negrito">
								<td rowspan="2" width="163">
									Subsetor
								</td>
								<td rowspan="2" width="215">
									Percentual M&iacute;nimo de <br />
									Destina&ccedil;&atilde;o de &aacute;rea p&uacute;blica (%)
								</td>
								<td colspan="2" width="266">
									Dimens&atilde;o M&aacute;xima de lote
								</td>
							</tr>
							<tr class="escuro negrito">
								<td width="134">
									Frente m&aacute;xima (m)
								</td>
								<td width="132">
									&Aacute;rea m&aacute;xima (m&sup2;)
								</td>
							</tr>
							<tr>
								<td width="163">
									Eus&eacute;bio Matoso
								</td>
								<td width="215">
									15
								</td>
								<td rowspan="3" width="134">
									200
								</td>
								<td width="132">
									10.000
								</td>
							</tr>
							<tr>
								<td width="163">
									Lineu de Paula Machado
								</td>
								<td width="215">
									25
								</td>
								<td rowspan="2" width="132">
									20.000
								</td>
							</tr>
							<tr>
								<td width="163">
									Jos&eacute; Augusto de Queiroz
								</td>
								<td width="215">
									30
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte e elaboração: SP Urbanismo.</div>
				</div>

				<p>As áreas públicas a serem destinadas deverão atender às seguintes diretrizes urbanísticas específicas:</p>

				<ul>
					<li>No Subsetor Eusébio Matoso: destinação de área para implantação de via local, conforme os parâmetros do Quadro 2B da Lei nº 16.402 de 2016, a fim de promover a ligação entre a Av. Lineu de Paula Machado até a divisa da ZOE Jockey Club com o Lote 0010 da Quadra 055 do Setor 200, possibilitando futura conexão com a Rua Bento Frias;</li>

					<li>No Subsetor Lineu de Paula Machado: destinação de área para futura implantação de área verde no eixo da Praça Professor Cardim;</li>

					<li>No Subsetor José Augusto de Queiroz: destinação de área para futuro melhoramento da Rua José Augusto de Queiroz, entre as ruas Fonseca Teixeira e Itapê‐Açu, correspondente à faixa de 10 m a partir do alinhamento atual do lote, bem como para preservação de parte da significativa da vegetação arbórea existente no Estacionamento dos Eucaliptos.</li>
				</ul>

				<p>As &aacute;reas p&uacute;blicas n&atilde;o especificadas acima n&atilde;o t&ecirc;m afeta&ccedil;&atilde;o de destina&ccedil;&atilde;o previamente definida e dever&atilde;o ser avaliadas no ato do licenciamento para defini&ccedil;&atilde;o de seu aproveitamento como &aacute;reas institucionais, verdes ou sistema vi&aacute;rio, devendo atender as regras constantes nos artigos 46 e 47 da LPUOS.</p>
				<p>No Subsetor Eus&eacute;bio Matoso, a abertura de uma via local, de uso exclusivo para pedestres e ciclistas, contribuir&aacute; para ampliar a permeabilidade da &aacute;rea aos fluxos de mobilidade ativa, sem prejudicar a din&acirc;mica de circula&ccedil;&atilde;o de ve&iacute;culos da Rua Bento Frias, j&aacute; muito carregada entre as Avenidas Magalh&atilde;es de Castro (Marginal Pinheiros) e Eus&eacute;bio Matoso.</p>
				<p>No Subsetor Jos&eacute; Augusto de Queiroz, o alargamento em 10 metros no trecho entre as Ruas Fonseca Teixeira e Itap&ecirc;-A&ccedil;&uacute;&nbsp; possibilitar&aacute; a separa&ccedil;&atilde;o entre os fluxos de passagem entre as Avenidas Magalh&atilde;es de Castro e Lineu de Paula Machado, e os fluxos internos do bols&atilde;o residencial, contribuindo ainda para uma melhor opera&ccedil;&atilde;o da CET em ocasi&otilde;es de eventos e para a qualifica&ccedil;&atilde;o urbana local, com o alargamento de cal&ccedil;adas e implanta&ccedil;&atilde;o de um canteiro arborizado para separa&ccedil;&atilde;o dos fluxos.</p>
				<p>Neste mesmo Subsetor, a maior parte da destina&ccedil;&atilde;o prevista possibilitar&aacute; a implanta&ccedil;&atilde;o de uma pra&ccedil;a, com preserva&ccedil;&atilde;o da vegeta&ccedil;&atilde;o arb&oacute;rea existente e a instala&ccedil;&atilde;o de &aacute;reas de pr&aacute;tica esportiva e de lazer. Combinada &agrave; &aacute;rea de frui&ccedil;&atilde;o p&uacute;blica da por&ccedil;&atilde;o privada deste subsetor, esta &aacute;rea verde formar&aacute; uma faixa de transi&ccedil;&atilde;o entre o conjunto do Jockey e o entorno residencial, mantendo a qualidade ambiental existente e contribuindo para a diminui&ccedil;&atilde;o do impacto de vizinhan&ccedil;a.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura8.jpg'),
					caption: 'Figura 8 - Ilustração do alargamento viário da Rua Dr. José Augusto de Queiroz',
					fonte: 'Elaboração: SP Urbanismo, 2020.'
				}" />

				<p>No Subsetor Lineu de Paula Machado, a implantação de uma praça, situada no eixo da Praça Professor Cardim, entre as atuais instalações da área esportiva do Jockey Club e o edifício do antigo Ambulatório, contribuirá para a integração física e funcional de duas áreas que já possuem uma integração ambiental, considerando a vegetação arbórea de porte que funciona como um corredor de fauna entre o hipódromo e o bairro de Cidade Jardim.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura9.jpg'),
					caption: 'Figura 9 - Ilustração da implantação de nova praça na Av. Lineu de Paula Machado',
					fonte: 'Elaboração: SP Urbanismo, 2020.'
				}" />

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/mapas/mapa7.jpg'),
					caption: 'Mapa 7 - Diretrizes urbanísticas para parcelamento do solo.',
					fonte: 'Secretaria do Verde e do Meio Ambiente - SVMA, 2020. Elaboração: SP Urbanismo, 2020.'
				}" />
			</section>

			<section id="consulta-4-10">
				<h3>4.10 Ocupação</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 4010, context:'Consulta | 4.10 Ocupação' }" />
				<p>Os par&acirc;metros de ocupa&ccedil;&atilde;o do solo previstos consideram a diversidade dos subsetores contidos nos Setores de preserva&ccedil;&atilde;o ou transforma&ccedil;&atilde;o, atribuindo coeficientes de aproveitamento m&aacute;ximo, de modo que o conjunto do Hip&oacute;dromo de Cidade Jardim tenha um Coeficiente de Aproveitamento global menor que o limite estabelecido para a MEM, conforme estabelecido pelo artigo 15 da LPUOS.</p>
				<p>No Setor de Preserva&ccedil;&atilde;o, as caracter&iacute;sticas de ocupa&ccedil;&atilde;o devem preservar a funcionalidade das atividades ligadas ao turfe e a ambi&ecirc;ncia e integridade do conjunto do hip&oacute;dromo, admitindo-se transforma&ccedil;&otilde;es restritas para qualificar e adaptar cada subsetor &agrave;s demandas contempor&acirc;neas de maior diversidade de usos nos edif&iacute;cios hist&oacute;ricos e espa&ccedil;os livres.</p>
				<p>Nos subsetores Pistas de Corrida e Pi&atilde;o do Prado, onde incidem restri&ccedil;&otilde;es a edifica&ccedil;&otilde;es em sobressolo, &eacute; necess&aacute;rio preservar as &aacute;reas livres para o uso esportivo, a frui&ccedil;&atilde;o da paisagem e o cumprimento dos servi&ccedil;os ambientais. Para esses subsetores foram utilizados como refer&ecirc;ncia os par&acirc;metros da Zona Especial de Preserva&ccedil;&atilde;o Ambiental &ndash; ZEPAM, adaptados &agrave;s caracter&iacute;sticas espec&iacute;ficas do hip&oacute;dromo, com defini&ccedil;&atilde;o do coeficiente de aproveitamento m&aacute;ximo igual a 0,1.</p>
				<p>Nos subsetores Tribunas e Vila H&iacute;pica, onde a ocupa&ccedil;&atilde;o atual &eacute; extensiva e concentra as principais refer&ecirc;ncias constru&iacute;das do hip&oacute;dromo, as possibilidades de transforma&ccedil;&atilde;o s&atilde;o limitadas, condicionando a ado&ccedil;&atilde;o de coeficientes de aproveitamento m&aacute;ximo iguais a 1,0.</p>
				<p>J&aacute; no Setor de Transforma&ccedil;&atilde;o, os crit&eacute;rios para a defini&ccedil;&atilde;o dos par&acirc;metros visam possibilitar as transforma&ccedil;&otilde;es mais intensas e permitir que se crie uma nova ambi&ecirc;ncia urbana diversificada, na qual o Jockey estabelece uma nova rela&ccedil;&atilde;o com a cidade e com seu entorno imediato, considerando as quest&otilde;es ambientais e as rela&ccedil;&otilde;es entre os novos edif&iacute;cios e os edif&iacute;cios existentes preservados para valorizar os atributos hist&oacute;ricos e paisag&iacute;sticos do hip&oacute;dromo de modo a criar uma coexist&ecirc;ncia harmoniosa.</p>
				<p>Nos subsetores Lineu de Paula Machado e Jos&eacute; Augusto de Queiroz, entende-se que esse coeficiente deve ser mais moderado, igual a 2,0, tendo em vista a maior proximidade com os edif&iacute;cios hist&oacute;ricos e com o bairro exclusivamente residencial, bem como o objetivo de possibilitar uma maior integra&ccedil;&atilde;o com o cotidiano do entorno.</p>
				<p>J&aacute; para o Subsetor Eus&eacute;bio Matoso, por sua proximidade com os modais de transporte e grandes avenidas, prop&otilde;e-se um coeficiente de aproveitamento mais alto (4,0), aumentando a densidade construtiva na extremidade norte do lote e estimulando um uso mais intenso dessa &aacute;rea.</p>
				<p>Em rela&ccedil;&atilde;o aos gabaritos, a estratifica&ccedil;&atilde;o segue as mesmas diretrizes, reconhecendo os contrastes do contexto urbano, ao mesmo tempo em que prop&otilde;e uma maior diversidade volum&eacute;trica na ambi&ecirc;ncia do conjunto.</p>
				<p>Nos subsetores Pistas de Corrida e Pi&atilde;o do Prado, o gabarito de altura &eacute; zero, tendo em vista serem &aacute;reas non aedificandi em sobressolo. Nos subsetores Tribunas, Vila H&iacute;pica e Lineu de Paula Machado, para manter a rela&ccedil;&atilde;o volum&eacute;trica mais estreita com os conjuntos edificados existentes, o gabarito de altura definido &eacute; de 15 m.</p>
				<p>Nos subsetores Eus&eacute;bio Matoso e Jos&eacute; Augusto de Queiroz, buscou-se estabelecer uma rela&ccedil;&atilde;o de contraste com as edifica&ccedil;&otilde;es existentes, refor&ccedil;ando as diretrizes de transforma&ccedil;&atilde;o mais intensa para estes subsetores.&nbsp; No Subsetor Eus&eacute;bio Matoso, utilizando como refer&ecirc;ncia as restri&ccedil;&otilde;es do COMAER, tendo em vista os cones de aproxima&ccedil;&atilde;o do Aeroporto de Congonhas, o gabarito de altura de definido &eacute; de 80m.</p>
				<p>No subsetor Jos&eacute; Augusto de Queiroz, buscou-se permitir a verticaliza&ccedil;&atilde;o no trecho mais pr&oacute;ximo do Rio Pinheiros e mais afastado dos edif&iacute;cios hist&oacute;ricos e do entorno, evitando o acanhamento do conjunto e o sombreamento das resid&ecirc;ncias. Neste subsetor, o gabarito definido &eacute; de 60 m. A escolha por esse gabarito foi orientada pelos estudos solares realizados (Figura 10), procurando uma altura m&aacute;xima que n&atilde;o causasse sombreamento nas resid&ecirc;ncias vizinhas, mas que ao mesmo tempo n&atilde;o fosse muito baixa a ponto de exigir que fossem implantadas diversas torres para esgotar o potencial construtivo m&aacute;ximo.</p>
				<p>Adicionalmente, para esse subsetor, foi definida uma faixa de transi&ccedil;&atilde;o com a Zona Exclusivamente Residencial &ndash; ZER vizinha, onde incidir&aacute; o gabarito de altura de 10m no trecho do Estacionamento dos Eucaliptos junto &agrave; linha divis&oacute;ria com o Subsetor Tribunas e na faixa de 30m a partir da testada da Rua Jos&eacute; Augusto de Queiroz no restante do subsetor.</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;As taxas de ocupa&ccedil;&atilde;o aplic&aacute;veis nos subsetores Pistas de Corrida e Pi&atilde;o do Prado s&atilde;o de 10%. No Subsetor Jos&eacute; Augusto de Queiroz, onde se busca preservar grande parte da &aacute;rea como espa&ccedil;o livre, a taxa de ocupa&ccedil;&atilde;o m&aacute;xima ser&aacute; de 30%. Em todos os demais, a taxa de ocupa&ccedil;&atilde;o adotada &eacute; de 70%.</p>
				<p>Os recuos definidos para toda a ZOE Jockey Club correspondem a 5m de frente e 3m nas laterais e fundos dos lotes virtuais dos subsetores ou novos lotes frutos de parcelamento do lote original, com exce&ccedil;&atilde;o do Subsetor Eus&eacute;bio Matoso, onde os recuos laterais e de fundos s&atilde;o dispensados at&eacute; 10m de altura e proporcionais &agrave; altura do edif&iacute;cio quando este for superior a 10m, sendo o m&iacute;nimo de 3m, conforme disposi&ccedil;&otilde;es do C&oacute;digo de Obras e Edifica&ccedil;&otilde;es &ndash; COE (Lei 16.642/2017).</p>
				<p>Adicionalmente, todas as novas edifica&ccedil;&otilde;es dever&atilde;o observar um afastamento m&iacute;nimo de 15 metros em rela&ccedil;&atilde;o &agrave;s edifica&ccedil;&otilde;es tombadas e ao limite f&iacute;sico externo das pistas de grama.</p>
				<p>No Subsetor Eus&eacute;bio Matoso, considerando a refer&ecirc;ncia da Zona de Estrutura&ccedil;&atilde;o Urbana &ndash; ZEU e a import&acirc;ncia deste subsetor para o adensamento construtivo e populacional da regi&atilde;o, em conson&acirc;ncia com os objetivos de desenvolvimento urbano da Macro&aacute;rea de Estrutura&ccedil;&atilde;o Metropolitana &ndash; MEM, o PIU Jockey definiu a incid&ecirc;ncia de Cota Parte m&aacute;xima de terreno por unidade habitacional igual a 20 m&sup2;.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/quadros/quadro5.gif'),
					caption: 'Quadro 5 - Parâmetros de Ocupação, de acordo com o subsetor.',
					fonte: 'Elaboração: SP Urbanismo, 2019'
				}"
				:elaboracaoOnly="true" />

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura10.jpg'),
					caption: 'Figura 10 - Estudos de Sombreamento para o Subsetor José Augusto de Queiroz com gabarito de 60m',
					fonte: 'Elaboração: SP Urbanismo, 2019'
				}"
				:elaboracaoOnly="true"
				/>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/mapas/mapa8.jpg'),
					caption: 'Mapa 8 - Coeficientes de Aproveitamento Máximo',
					fonte: 'Elaboração: SP Urbanismo, 2019'
				}"
				:elaboracaoOnly="true"
				/>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/mapas/mapa9.jpg'),
					caption: 'Mapa 9 - Gabaritos de Altura Máximos',
					fonte: 'Elaboração: SP Urbanismo, 2019'
				}"
				:elaboracaoOnly="true"
				/>

				<p>Os par&acirc;metros de Quota Ambiental s&atilde;o fundamentais para que o conjunto do Jockey possa ampliar os servi&ccedil;os ambientais prestados &agrave; cidade, considerando que o conjunto j&aacute; possui atributos relevantes que devem ser preservados. Os par&acirc;metros seguem uma l&oacute;gica associada &agrave; diferencia&ccedil;&atilde;o entre os setores.</p>
				<p>No setor de transforma&ccedil;&atilde;o incidir&atilde;o os mesmos par&acirc;metros ordin&aacute;rios definidos na LPUOS para o Per&iacute;metro de Qualifica&ccedil;&atilde;o Ambiental 4 (PA 4), onde est&aacute; inserida a ZOE Jockey Club. No cen&aacute;rio de transforma&ccedil;&atilde;o sem parcelamento, dever&aacute; ser adotada a pontua&ccedil;&atilde;o para 10.000 m&sup2;, igual a 0,78, pois a refer&ecirc;ncia utilizada &eacute; a &aacute;rea dos subsetores e todos t&ecirc;m &aacute;rea superior a esta. No cen&aacute;rio de transforma&ccedil;&atilde;o ap&oacute;s o parcelamento, o empreendimento dever&aacute; adotar a pontua&ccedil;&atilde;o correspondente ao novo lote. Em qualquer cen&aacute;rio, a Taxa de Permeabilidade &ndash; TP definida &eacute; de 25%.&nbsp;</p>
				<p>No setor de preserva&ccedil;&atilde;o, os subsetores possuem caracter&iacute;sticas distintas, mas tem em comum a restri&ccedil;&atilde;o &agrave;s possibilidades de altera&ccedil;&atilde;o dos atributos ambientais atuais. Os subsetores Pistas de Corrida e Pi&atilde;o do Prado, que ocupam 60% do lote e s&atilde;o compostos integralmente por &aacute;reas livres perme&aacute;veis, s&atilde;o os principais contribuintes para a drenagem da &aacute;rea. Por outro lado, as restri&ccedil;&otilde;es funcionais e de tombamento impedem a introdu&ccedil;&atilde;o de vegeta&ccedil;&atilde;o arb&oacute;rea.</p>
				<p>Os subsetores Tribunas e Lineu de Paula Machado possuem &aacute;reas arborizadas e &aacute;reas livres ora perme&aacute;veis, ora compostas por pavimentos implantados em conjunto com os edif&iacute;cios hist&oacute;ricos e que, portanto, devem ser em grande parte preservados, limitando as possibilidades de incremento de vegeta&ccedil;&atilde;o arb&oacute;rea e &aacute;reas perme&aacute;veis. Nestes subsetores tamb&eacute;m s&atilde;o limitadas as possibilidades de implanta&ccedil;&atilde;o de reservat&oacute;rios de reten&ccedil;&atilde;o de &aacute;guas pluviais. Os par&acirc;metros de ocupa&ccedil;&atilde;o definidos limitam as possibilidades de transforma&ccedil;&atilde;o com acr&eacute;scimo de &aacute;rea constru&iacute;da acima de 20%.</p>
				<p>Assim, para este setor, a quota ambiental n&atilde;o ser&aacute; aplic&aacute;vel se, mesmo que ocorram transforma&ccedil;&otilde;es que superem os 20% de &aacute;rea constru&iacute;da, os atributos ambientais caracter&iacute;sticos de cada subsetor sejam mantidos conforme a situa&ccedil;&atilde;o atual, sem supress&atilde;o de vegeta&ccedil;&atilde;o arb&oacute;rea e &aacute;rea perme&aacute;vel. No caso de altera&ccedil;&atilde;o destes atributos, o atendimento &agrave; quota ambiental dever&aacute; ser relativo ao setor de preserva&ccedil;&atilde;o, considerando o conjunto dos quatro subsetores que o comp&otilde;em.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/quadros/quadro6.gif'),
					caption: 'Quadro 6 - Quota Ambiental, Taxa de Permeabilidade e Fatores por subsetores',
					fonte: 'Elaboração: SP Urbanismo, 2019'
				}" />

				<p>Em relação aos parâmetros qualificadores da ocupação, constituídos por fruição pública, fachada ativa, e limites de vedação do lote, são aplicáveis na ZOE Jockey Club os incentivos e obrigações previstos nos artigos 62 e 87 da LPUOS correspondentes a:</p>

				<ul>
					<li>Zona de Centralidade – ZC para os Subsetores Tribunas, Vila Hípica e Lineu de Paula Machado;</li>
					<li>Zona de Estruturação Urbana – ZEU para o Subsetor Eusébio Matoso</li>
				</ul>

				<p>Tendo em vista as caracter&iacute;sticas dos passeios p&uacute;blicos das vias de acesso ao Hip&oacute;dromo de Cidade Jardim, com passeios mais largos do que 5m de largura, n&atilde;o ser&atilde;o aplicados &agrave; ZOE Jockey Club os incentivos para alargamento das cal&ccedil;adas.</p>
				<p>Tendo em vista as caracter&iacute;sticas dos Subsetores Pistas de Corrida e Pi&atilde;o do Prado, n&atilde;o s&atilde;o aplic&aacute;veis a estes subsetores os incentivos para os par&acirc;metros qualificadores, valendo, entretanto, as regras de Zona Especial de Preserva&ccedil;&atilde;o Ambiental &ndash; ZEPAM.</p>
				<p>Tendo em vista a necessidade de melhorar a integra&ccedil;&atilde;o do hip&oacute;dromo com o bairro de Cidade Jardim, os limites de veda&ccedil;&atilde;o por muros s&atilde;o obrigat&oacute;rios para o setor de transforma&ccedil;&atilde;o e facultativos para o setor de preserva&ccedil;&atilde;o, j&aacute; que neste existem trechos de muros integrados aos edif&iacute;cios implantados junto ao limite do lote, sem recuos, bem como gradis com desenho integrado ao projeto dos edif&iacute;cios. Neste setor, as altera&ccedil;&otilde;es das caracter&iacute;sticas das veda&ccedil;&otilde;es dever&atilde;o ser aprovadas pelos &oacute;rg&atilde;os de preserva&ccedil;&atilde;o do patrim&ocirc;nio hist&oacute;rico. Em rela&ccedil;&atilde;o ao muro de veda&ccedil;&atilde;o da Av. Magalh&atilde;es de Castro (Marginal Pinheiros), eventuais altera&ccedil;&otilde;es tamb&eacute;m dever&atilde;o ser submetidas &agrave; aprova&ccedil;&atilde;o da Companhia de Engenharia de Tr&aacute;fego &ndash; CET, que dever&aacute; avaliar a adequa&ccedil;&atilde;o da solu&ccedil;&atilde;o em rela&ccedil;&atilde;o &agrave; seguran&ccedil;a vi&aacute;ria, a fim de evitar que a ilumina&ccedil;&atilde;o e as atividades do hip&oacute;dromo n&atilde;o ofusquem a vis&atilde;o ou distraiam os motoristas.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura11.jpg'),
					caption: 'Figura 11 - Ilustração da Av. Lineu de Paula Machado com vedações mais transparentes e fachadas ativas',
					fonte: 'Elaboração: SP Urbanismo, 2019'
				}"
				:elaboracaoOnly="true" />

				<p>Em relação ao Subsetor José Augusto de Queiroz, a proposta trazida pelo PIU tem o objetivo de possibilitar a introdução de atividades de comércio e serviços que ampliem as opções de conveniência à vizinhança, evitando, por outro lado, que tais atividades tragam impactos negativos aos moradores. Para tanto, a estratégia de definição de obrigações e incentivos para este subsetor prevê a proibição da implantação de fachadas ativas e, ao mesmo tempo, a adoção do percentual mínimos de fruição pública em 50%, de modo que tais atividades possam ser implantadas em posição interna ao lote, afastadas da Rua José Augusto de Queiroz e das residências, porém abertas ao acesso público e integradas à vegetação arbórea da faixa de transição.</p>

				<p>Os parâmetros de incomodidade definidos tem como referência a Zona de Centralidade – ZC, cujo mix de usos mais se aproxima da maioria dos subsetores do hipódromo e cujos limites estabelecidos na LPUOS possibilitam a necessária dinamização e diversidade ao conjunto, ao mesmo tempo em que impedem que os eventos que ocorram no hipódromo causem maiores impactos à vizinhança residencial. Estes parâmetros compreendem limites relativos à emissão de ruídos, de odores, de gases, de vapores e material particulado, de vibração associada, e de radiação – faixa de frequência de 0 a 300 GHz. Considerando as especificidades das atividades esportivas do turfe pré-existentes, não se aplicam os parâmetros de incomodidade especificamente a estas atividades.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura12.jpg'),
					caption: 'Figura 12 - Ilustração da Rua José Augusto de Queiroz com melhoramento viário e fruição pública',
					fonte: 'Elaboração: SP Urbanismo, 2019'
				}"
				:elaboracaoOnly="true" />

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura13.jpg'),
					caption: 'Figura 13 - Ilustraçao do Subsetor José Augusto de Queiroz visto a partir das Tribunas',
					fonte: 'Elaboração: SP Urbanismo, 2019'
				}"
				:elaboracaoOnly="true" />
			</section>

			<section id="consulta-4-11">
				<h3>4.11 Uso</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 4011, context:'Consulta | 4.11 Uso' }" />
				<p>As propostas de parâmetros relativos aos usos também têm como base a setorização. No setor de preservação, além de considerar as atividades inerentes ao hipódromo, o projeto considera uma ampla gama de usos não residenciais, que podem funcionar concomitantemente com as atividades do turfe ou em horários em que não esteja ocorrendo corridas e treinamentos nas pistas. No setor de transformação, o projeto admite a implantação de usos residenciais verticais nos subsetores Eusébio Matoso e José Augusto de Queiroz e usos não residenciais em todos os subsetores, excluindo grupos de atividades que possam causar maior impacto à vizinhança residencial.</p>
				<p>Quanto ao uso principal do equipamento, todas as atividades associadas às funcionalidades do turfe devem ser permitidas na ZOE, pois o hipódromo pode continuar funcionando tal como atualmente. Quanto aos usos acessórios, nos subsetores Tribunas e Vila Hípica são permitidos usos não residenciais compatíveis com o uso principal, como serviços de alimentação, compras, equipamentos culturais e de lazer, feiras e atividades voltadas à economia criativa e ambiental.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura14.jpg'),
					caption: 'Figura 14 - Ilustração da Vila Hípica, com novos usos compatíveis com as particularidades do conjunto',
					fonte: 'Elaboração: SP Urbanismo, 2019'
				}"
					:elaboracaoOnly="true"
				/>

				<p>&Eacute; necess&aacute;rio, contudo, considerar a quest&atilde;o da realiza&ccedil;&atilde;o de eventos, cujas manifesta&ccedil;&otilde;es da popula&ccedil;&atilde;o revelaram diversos conflitos de conviv&ecirc;ncia entre o Jockey e a vizinhan&ccedil;a. Pela escala, localiza&ccedil;&atilde;o e infraestrutura do equipamento, avalia-se que a permiss&atilde;o para que possam continuar a ocorrer no Hip&oacute;dromo &eacute; positiva para o conjunto, ampliando sua utiliza&ccedil;&atilde;o, desde que os par&acirc;metros de incomodidade e condi&ccedil;&otilde;es de instala&ccedil;&atilde;o possam controlar excessos e regular as condi&ccedil;&otilde;es para que grandes shows e outros eventos de maior impacto n&atilde;o mais ocorram.</p>
				<p>Com o objetivo de estimular a diversidade de usos no conjunto e uma maior din&acirc;mica urbana nos espa&ccedil;os p&uacute;blicos do entorno, a proposta de usos para o setor de transforma&ccedil;&atilde;o prev&ecirc; a presen&ccedil;a mais intensa de usos n&atilde;o residenciais. Esses usos surgem como complementares ao uso residencial do bairro Cidade Jardim, provocando efeitos positivos nas din&acirc;micas de mobilidade da regi&atilde;o, na medida em que criam postos de trabalho na pr&oacute;pria subprefeitura, trazendo trabalhadores de outras localidades para uma &aacute;rea atualmente vazia na maior parte do dia. Este contingente de trabalhadores ajuda a dinamizar a economia local nas centralidades pr&oacute;ximas, trazendo maior movimento &agrave;s ruas e, consequentemente, maior seguran&ccedil;a. Ser&aacute; admitido o uso residencial vertical em empreendimentos de uso misto, com propor&ccedil;&atilde;o m&aacute;xima de &aacute;reas constru&iacute;das comput&aacute;veis de at&eacute; 80% do empreendimento.</p>
				<p>Nos subsetores Pistas de Corrida e Pi&atilde;o do Prado, considerando as restri&ccedil;&otilde;es do tombamento e as funcionalidades relativas ao hip&oacute;dromo, ser&atilde;o permitidas as atividades do turfe (Subsetor Pistas) e outras atividades de car&aacute;ter esportivo, cultural e ambiental (Subsetor Pi&atilde;o do Prado), desde que realizadas ao ar livre e em hor&aacute;rios em que n&atilde;o estejam ocorrendo atividades do turfe.</p>
				<p>No Subsetor Lineu de Paula Machado, esta avenida &eacute; atualmente uma via de passagem, tendo de um lado o hip&oacute;dromo, com poucos acessos e grande extens&atilde;o de muros e, do lado oposto, a maior parte dos im&oacute;veis vazios na Zona Corredor existente - ZCOR2. Um exemplo bem sucedido das Zonas Corredor (ZCOR) do bairro Cidade Jardim &eacute; a Avenida dos Tajur&aacute;s, onde &eacute; poss&iacute;vel encontrar bancos, lojas, postos de conveni&ecirc;ncia, escola e diversos outros servi&ccedil;os que atendem &agrave;s necessidades mais corriqueiras dos moradores do entorno sem causar incomodidade &agrave; vizinhan&ccedil;a direta. Entende-se que a Av. Lineu de Paula Machado pode ser como uma extens&atilde;o da Av. Tajur&aacute;s no que tange a vitalidade do espa&ccedil;o p&uacute;blico, criando um ambiente agrad&aacute;vel ao pedestre de uma ponta a outra, chegando at&eacute; a Av. Francisco Morato. A introdu&ccedil;&atilde;o de novos usos n&atilde;o residenciais similares &agrave; ZCOR2, com incentivo &agrave; fachada ativa, objetiva possibilitar a implanta&ccedil;&atilde;o de usos que possam impulsionar a transforma&ccedil;&atilde;o nunca vista no outro lado da avenida, fazendo com que o local se torne mais seguro e agrad&aacute;vel para os moradores do entorno e para quem passa pela regi&atilde;o.</p>
				<p>No Subsetor Jos&eacute; Augusto de Queiroz prev&ecirc;-se atividades que possam conviver com a zona exclusivamente residencial no entorno imediato do Jockey &ndash; o chamado Bols&atilde;o 1 do bairro, situado entre a Rua Dr. Jos&eacute; Augusto de Queiroz e a Av. dos Tajur&aacute;s, com menor impacto na vizinhan&ccedil;a. Al&eacute;m de atividades n&atilde;o residenciais de menor n&iacute;vel de incomodidade no t&eacute;rreo dos edif&iacute;cios, ser&atilde;o admitidos usos residenciais verticais e de escrit&oacute;rios, com as condi&ccedil;&otilde;es de distanciamento definidas pelos par&acirc;metros de ocupa&ccedil;&atilde;o.</p>
				<p>A proposta de usos para o Subsetor Eus&eacute;bio Matoso &eacute; mais permissiva, similar &agrave;s zonas eixo de estrutura&ccedil;&atilde;o urbana &ndash; ZEU que caracterizam o eixo das Avenidas Eus&eacute;bio Matoso, Vital Brasil e Francisco Morato, de modo a estimular atividades diversificadas. Pelo f&aacute;cil acesso de pedestres atrav&eacute;s de metr&ocirc; ou &ocirc;nibus, as atividades que ali acontecerem pode estimular uma maior ocupa&ccedil;&atilde;o dos im&oacute;veis na Av. Lineu de Paula Machado.</p>
				<p>Em todos os subsetores, &eacute; admitida a atividade de estacionamento de ve&iacute;culos para dar suporte n&atilde;o s&oacute; &agrave;s atividades do hip&oacute;dromo, mas a eventos e demais atividades que venham a se instalar no conjunto, suprindo a demanda e buscando diminuir o impacto de estacionamento de ve&iacute;culos nas ruas das zonas residenciais pr&oacute;ximas. Considerando que atualmente todos os bols&otilde;es existentes s&atilde;o em superf&iacute;cie, as possibilidades de preserva&ccedil;&atilde;o, transforma&ccedil;&atilde;o e qualifica&ccedil;&atilde;o do conjunto do hip&oacute;dromo podem utilizar &aacute;reas atualmente reservadas para este uso para um aproveitamento mais nobre, transferindo as vagas existentes para estacionamentos em subsolo. Os usos permitidos para cada subsetor s&atilde;o apresentados no quadro 7, a seguir:</p>

				<div class="jockey-club2-consulta__quadro-contexto">
					<imagem :dados="{
						tipo: 'coluna',
						url: src('arquivos/jockey-club-2/quadros/quadro7.gif'),
						caption: 'Quadro 7 - Usos permitidos por subsetor',
						fonte: 'Elaboração: SP Urbanismo, 2019',
					}"
						:elaboracaoOnly="true"
					/>
				<ol class="minusculas">
					<li>A atividade "Hipódromo" se enquadra na subcategoria de uso nR3, grupo de atividade nR3-4 - local de reunião ou evento de grande porte localizado na zona urbana com lotação superior a 500 (quinhentas) pessoas e é permitida em todos os subsetores.</li>
					<li>Atividade "Estacionamentos e garagens de veículos (inclusive garagens subterrâneas)" permitidos em todos os subsetores, sem limite de vagas.</li>
					<li>permitidos todos os grupos, exceto nRa-4 e nRa-5.</li>
					<li>permitidos todos os grupos, exceto nR1-12, nR1-14 e nR1-15.</li>
					<li>permitidos todos os grupos, exceto nR1-14 e nR1-15.</li>
					<li>permitidos nR2-10, nR2-11 e nR2-13.	</li>
					<li>permitidos todos os grupos, exceto nR2-2 a nR2-4, nR2-12 e nR2-15.</li>
					<li>permitidos todos os grupos, exceto nR2-2, nR2-3, nR2-12 e nR2-15.</li>
					<li>permitidos nR3-1, nR3-3, nR3-4, nR3-5.</li>
					<li>aplicam-se aos subsetores da ZOE, complementarmente aos parâmetros previstos neste Quadro, os parâmetros definidos pela Lei 16.402/2016 para a Zona de Estruturação Urbana - ZEU ao Subsetor Eusébio Matoso, para a Zona Especial de Preservação Ambiental - ZEPAM aos Subsetores Pistas de Corridas e Pião do Prado e para a Zona de Centralidade - ZC aos demais subsetores.</li>
				</ol>
				</div>
				<p>Em rela&ccedil;&atilde;o &agrave;s condi&ccedil;&otilde;es de instala&ccedil;&atilde;o, a aplica&ccedil;&atilde;o dos par&acirc;metros dever&aacute; considerar a diversidade de usos, a divis&atilde;o entre os subsetores deste PIU e os cen&aacute;rios de parcelamento previstos neste PIU.</p>
				<p>No setor de transforma&ccedil;&atilde;o, para o cen&aacute;rio de implanta&ccedil;&atilde;o de empreendimentos sem parcelamento do lote original, ser&aacute; necess&aacute;ria a an&aacute;lise da CET para defini&ccedil;&atilde;o dos par&acirc;metros gerais e espec&iacute;ficos por subcategoria de uso, admitindo-se a ado&ccedil;&atilde;o de solu&ccedil;&otilde;es que atendam ao conjunto de usos da ZOE Jockey Club, tais como n&uacute;mero de vagas, &aacute;reas de embarque e desembarque, &aacute;reas e vagas para ve&iacute;culos de carga e fretamento. Para o cen&aacute;rio de parcelamento do solo, dever&atilde;o ser aplicados em cada lote os par&acirc;metros correspondentes a cada subcategoria de usos definidos no Quadro 4A da LPUOS.</p>
				<p>No setor de preserva&ccedil;&atilde;o, em qualquer cen&aacute;rio de parcelamento, admite-se a ado&ccedil;&atilde;o de solu&ccedil;&otilde;es que atendam ao conjunto dos subsetores deste setor, sendo tamb&eacute;m neste caso, necess&aacute;ria a an&aacute;lise da CET para defini&ccedil;&atilde;o dos respectivos par&acirc;metros.</p>

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/figuras/figura15.jpg'),
					caption: 'Figura 15 - Ilustração da aplicação dos parâmetros na ZOE Jockey Club',
					fonte: 'Elaboração: SP Urbanismo, 2019',
				}"
					:elaboracaoOnly="true"
				/>
			</section>
		</section>

		<section id="consulta-5">
			<h2>5. Modelagem Econômica</h2>
			<comments v-if="consultaAtiva" :attr="{ id: 5000, context:'Consulta | 5. Modelagem Econômica' }" />
			<h3>Apresentação</h3>
			<p>Esta modelagem econ&ocirc;mica tem dois objetivos fundamentais: o primeiro &eacute; precificar o Potencial Construtivo Adicional a ser alienado em eventuais empreendimentos imobili&aacute;rios no &acirc;mbito do PIU Jockey Club e, o segundo, avaliar o potencial m&aacute;ximo de receita a partir da utiliza&ccedil;&atilde;o da Outorga Onerosa do Direito de Construir, que se destinar&aacute; ao FUNDURB ao longo dos anos.</p>
			<p>Para tanto, foram elaboradas simula&ccedil;&otilde;es de empreendimentos imobili&aacute;rios nos terrenos assinalados como pass&iacute;veis de transforma&ccedil;&atilde;o urban&iacute;stica, de maneira a (i) prever as implanta&ccedil;&otilde;es poss&iacute;veis de acordo com o ordenamento indicado no PIU (estudo de massas) e (ii) simular seu fluxo de caixa e calcular seus indicadores financeiros (estudo de viabilidade econ&ocirc;mica e financeira). Tais procedimentos permitem calibrar a equa&ccedil;&atilde;o da Outorga Onerosa de acordo com a disponibilidade de pagamento dos empreendimentos, adequando os pre&ccedil;os do potencial construtivo adicional ao pre&ccedil;o de venda e aos demais elementos de composi&ccedil;&atilde;o de custo.</p>
			<p>A modelagem est&aacute; dividida em 6 se&ccedil;&otilde;es. Na primeira &eacute; apresentado resumidamente o potencial construtivo adicional no per&iacute;metro PIU, considerando os Setores de Transforma&ccedil;&atilde;o e os par&acirc;metros urban&iacute;sticos propostos. Na segunda e terceira partes, foi realizada uma pesquisa lan&ccedil;amentos imobili&aacute;rios em uma determinada &aacute;rea de influ&ecirc;ncia do PIU, que servir&aacute; de apoio tanto &agrave; defini&ccedil;&atilde;o das premissas e voca&ccedil;&otilde;es nos estudos de viabilidade &ndash; seus usos e tipologias mais demandados e pre&ccedil;os praticados &ndash; quanto &agrave; capacidade de absor&ccedil;&atilde;o do potencial construtivo.</p>
			<p>Na quarta se&ccedil;&atilde;o s&atilde;o demonstrados os resultados dos estudos de viabilidade, a precifica&ccedil;&atilde;o do Potencial Construtivo Adicional e a receita de Outorga Onerosa. Na sequ&ecirc;ncia s&atilde;o demonstradas tamb&eacute;m fontes alternativas de receita no per&iacute;metro, como a venda de Potencial Construtivo mediante Transfer&ecirc;ncia do Direito de Construir (TDC). Ao final, ambas as receitas e estudos s&atilde;o colocados na perspectiva da demanda imobili&aacute;ria no entorno, demonstrando o tempo poss&iacute;vel de captura de recursos para o FUNDURB.</p>

			<section id="consulta-5-1">
				<h3>5.1. Potencial construtivo adicional no PIU</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 5001, context:'Consulta | 5.1. Potencial construtivo adicional no PIU' }" />
				<p>Como demonstrado nos estudos urbanísticos do PIU, o perímetro objeto de estudo foi dividido em Setores de Preservação e de Transformação. Os estudos de viabilidade consideram esses últimos para o desenvolvimento de negócios imobiliários, visto que são as áreas com vocação para recepção de novos usos. A produção de imóveis servirá para a geração de renda mediante alienação do chamado Potencial Construtivo Adicional – ou seja, aquele potencial calculado acima do Coeficiente de Aproveitamento Básico dos terrenos.</p>
				<p>A Tabela 1 a seguir resume a quantidade de Potencial Construtivo Adicional considerada na modelagem dos três Setores de Transformação. Para tanto, foram adotadas como base as áreas líquidas de terreno, decorrentes de possíveis destinações de área pública em processos de parcelamento do solo, conforme parâmetros indicados pelo PIU.</p>

				<div class="tabela-container">
					<table width="640">
						<caption>Tabela 1: &Aacute;reas l&iacute;quidas de terreno e Potencial Construtivo Adicional dos Setores de Transforma&ccedil;&atilde;o</caption>
							<thead>
								<tr>
									<th width="178">
										Resumo de &aacute;reas e projeto
									</th>
									<th width="126">
										Eus&eacute;bio Matoso
									</th>
									<th width="126">
										Jos&eacute; Augusto de Queiroz
									</th>
									<th width="126">
										Lineu de Paula Machado
									</th>
									<th width="84">
										Total
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td width="178">
											&Aacute;rea l&iacute;quida de terreno (m&sup2;)
									</td>
									<td width="126">
											9.973
									</td>
									<td width="126">
											28.745
									</td>
									<td width="126">
											35.198
									</td>
									<td width="84">
											73.916
									</td>
								</tr>
								<tr>
									<td width="178">
											CA m&aacute;ximo
									</td>
									<td width="126">
											4,4
									</td>
									<td width="126">
											2,2
									</td>
									<td width="126">
											2,2
									</td>
									<td width="84">
											-
									</td>
								</tr>
								<tr>
									<td width="178">
										Gabarito m&aacute;ximo
									</td>
									<td width="126">
										Sem limite
									</td>
									<td width="126">
										60m
									</td>
									<td width="126">
										15m
									</td>
									<td width="84">
										-
									</td>
								</tr>
								<tr>
									<td width="178">
										Taxa de Ocupa&ccedil;&atilde;o
									</td>
									<td width="126">
										70%
									</td>
									<td width="126">
										70%
									</td>
									<td width="126">
										70%
									</td>
									<td width="84">
										-
									</td>
								</tr>
								<tr>
									<td width="178">
										&Aacute;rea comput&aacute;vel (m&sup2;)
									</td>
									<td width="126">
										43.880
									</td>
									<td width="126">
										63.239
									</td>
									<td width="126">
										77.436
									</td>
									<td width="84">
										184.555
									</td>
								</tr>
						</tbody>
						<tfoot>
							<tr>
								<td width="178">
									Potencial Construtivo Adicional m&aacute;ximo (m&sup2;)
								</td>
								<td width="126">
									33.907
								</td>
								<td width="126">
									34.494
								</td>
								<td width="126">
									42.238
								</td>
								<td width="84">
									110.639
								</td>
							</tr>
						</tfoot>
					</table>
					<div class="fonte">Fonte: SP-Urbanismo, 2020.</div>
				</div>
				<p>Diante do tamanho dos Setores e do aproveitamento concedido, é possível a construção de cerca de <b>184 mil m² de Área Computável</b>, o que equivale a <b>110 mil m² de Potencial Construtivo Adicional</b> a ser consumido em novos empreendimentos imobiliários. Para os cálculos foram considerados o incremento de 10% do Potencial Construtivo Adicional relativo à Cota de Solidariedade, conforme Art. 112 do PDE.</p>

				<p>Como observado, no Setor Eusébio Matoso pretende-se uma utilização mais intensa do solo, com Coeficiente de Aproveitamento alto e sem restrição de gabarito. Já os Setores Lineu de Paula Machado e José Augusto de Queiroz apresentam condições mais restritivas de desenvolvimento, com Coeficiente de Aproveitamento duas vezes menor e gabarito máximo de 15 e 60 metros. Ainda assim, a dimensão dos Setores e suas condições privilegiadas de localização permitem a adoção de tipologias bastante viáveis, como será demonstrando nas seções seguintes.</p>
			</section>

			<section id="consulta-5-2">
				<h3>5.2. Oferta e demanda de áreas transformáveis</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 5002, context:'Consulta | 5.2. Oferta e demanda de áreas transformáveis' }" />
				<p>Considerando o grande volume de Potencial Construtivo Adicional ofertado no âmbito do PIU, coube inicialmente à modelagem econômica mensurar a capacidade dos Setores de Transformação em atrair demanda por terras para produção imobiliária. Essa capacidade de atração será utilizada mais adiante, para alocação no tempo dos recursos provenientes da alienação do Potencial Construtivo Adicional.</p>
				<p>Para expressar o comportamento da produção imobiliária no entorno foi definida, primeiramente, uma Área de Influência Imobiliária, um perímetro que alcança as franjas dos principais vetores de transformação do entorno, a saber: a Av. Faria Lima, o entorno das Estações Faria Lima, Butantã e Morumbi da Linha 4-Amarela do Metrô e o baixo Itaim Bibi.</p>
				<p>O estudo considerou, então, dois movimentos: (i) a oferta de terrenos transformáveis dentro dessa Área de Influência – dado que comporta os Setores de Transformação do PIU, e (ii) a demanda por produção imobiliária, considerando o histórico de lançamentos nessa mesma Área.</p>

				<h4>5.2.1. Oferta de áreas transformáveis na área de influência imobiliária</h4>
				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/mapas/mapa10.jpg'),
					caption: 'Mapa 10 - Área de Influência Imobiliária e áreas transformáveis.',
					fonte: 'Elaboração: SP Urbanismo, 2019'
				}" />

				<p>O levantamento das áreas que apresentam maior probabilidade e viabilidade de transformação partiu da identificação de seu inverso, ou seja, das áreas e usos considerados consolidados. A base de dados utilizada foi formada a partir do cruzamento das informações do Imposto Predial e Territorial Urbano (IPTU) de 2018 e da estrutura fundiária disponibilizada na plataforma Geosampa (Julho/2019), contando com informações e geometrias atualizadas pela própria SP-Urbanismo.</p>

				<p>Foram considerados como consolidados lotes e glebas com verticalizados ( usos residenciais, comerciais, serviços e misto), comércio e serviços horizontais significativos, equipamentos e usos especiais e coletivos; lotes com indicativo de incorporação imobiliária; lotes com área inferior a 500m²; e lotes em Zonas com Coeficiente de Aproveitamento menor ou igual a 1 (ZER, ZPR, ZCOR, ZEPAM). A Zona de Ocupação Especial correspondente à Subprefeitura de Pinheiros foi considerada transformável, uma vez que vem sendo estudada em um PIU específico. O dimensionamento da oferta considera os parâmetros da legislação em vigor para cada lote transformável.</p>

				<div class="tabela-container">
					<table width="644">
						<caption>Tabela 2: Áreas Transformáveis na Área de Influência Imobiliária</caption>
							<thead>
								<tr>
									<th colspan="2" width="181">
										&nbsp;&nbsp;Per&iacute;metro
									</th>
									<th width="116">
										&Aacute;rea dos lotes (m&sup2;)
									</th>
									<th width="116">
										&Aacute;rea total <br /> dos lotes transform&aacute;veis (m&sup2;)
									</th>
									<th width="116">
										&Aacute;rea <br /> Comput&aacute;vel <br /> (m&sup2;)
									</th>
									<th width="116">
										Potencial Construtivo Adicional <br /> (m&sup2;)
									</th>
								</tr>
							</thead>
						<tbody>
						<tr>
							<td class="escuro" rowspan="5" width="96">
								&Aacute;rea de Influ&ecirc;ncia Imobili&aacute;ria (exclu&iacute;do PIU)
							</td>
							<td class="escuro" width="85">
								Butant&atilde;
							</td>
							<td class="align-rigth">
								1.363.254
							</td>
							<td class="align-rigth">
								148.548
							</td>
							<td class="align-rigth">
								587.436
							</td>
							<td class="align-rigth">
								438.888
							</td>
						</tr>
						<tr>
							<td class="escuro" width="85">
								Itaim Bibi
							</td>
							<td class="align-rigth">
								1.375.957
							</td>
							<td class="align-rigth">
								136.884
							</td>
							<td class="align-rigth">
								515.304
							</td>
							<td class="align-rigth">
								378.420
							</td>
						</tr>
						<tr>
							<td class="escuro" width="85">
								Morumbi
							</td>
							<td class="align-rigth">
								3.906.695
							</td>
							<td class="align-rigth">
								137.840
							</td>
							<td class="align-rigth">
								978.540
							</td>
							<td class="align-rigth">
								711.359
							</td>
						</tr>
						<tr>
							<td class="escuro" width="85">
								Pinheiros
							</td>
							<td class="align-rigth">
								2.115.272
							</td>
							<td class="align-rigth">
								252.873
							</td>
							<td class="align-rigth">
								300.700
							</td>
							<td class="align-rigth">
								217.783
							</td>
						</tr>
						<tr class="escuro">
							<td width="85">
								Total
							</td>
							<td class="align-rigth">
								8.761.178
							</td>
							<td class="align-rigth">
								676.145
							</td>
							<td class="align-rigth">
								2.381.980
							</td>
							<td class="align-rigth">
								1.746.450
							</td>
						</tr>
						<tr>
							<td class="escuro" colspan="2" width="181">
								<strong>PIU Jockey Club</strong>
							</td>
							<td class="align-rigth">
								<strong>586.635 </strong>
							</td>
							<td class="align-rigth">
								<strong>73.916 </strong>
							</td>
							<td class="align-rigth">
								<strong>184.555 </strong>
							</td>
							<td class="align-rigth">
								<strong>110.639 </strong>
							</td>
						</tr>
						<tr>
							<td colspan="2" class="escuro" width="181">
								Participa&ccedil;&atilde;o do PIU no total
							</td>
							<td class="align-rigth">
								7%
							</td>
							<td class="align-rigth">
								11%
							</td>
							<td class="align-rigth">
								8%
							</td>
							<td class="align-rigth">
								6%
							</td>
						</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte: SP-Urbanismo, SMDU, 2020.</div>
				</div>

				<p>O levantamento apontou para a escassez de terras disponíveis para desenvolvimento imobiliário no perímetro, somando apenas 7% da área de lotes, concentrados no entorno das estações Butantã e Morumbi do Metrô e, de forma mais esparsa e com lotes menores, no baixo Itaim e no baixo Pinheiros. À exceção da Gleba do Jockey Club, apenas três terrenos na Área de Influência Imobiliária são maiores que 15 mil m², o que aumenta ainda mais a atratividade imobiliária dos Setores de Transformação do PIU, que oferecem 11% dos terrenos transformáveis da área de influência analisada.</p>

				<h4>5.2.2 Demanda do mercado imobiliário na área de influência imobiliária</h4>
				<p>A demanda do mercado imobiliário é fundamental para compreendermos sua capacidade de consumo de Potencial Construtivo Adicional ofertado a partir do levantamento das áreas transformáveis.</p>
				<p>Os dados de produção imobiliária correspondem ao levantamento dos lançamentos da EMBRAESP, de 1995 a 2017, de forma que seja possível observar o comportamento do consumo histórico nas diversas regiões da Áreas de Influência Imobiliária. Os resultados foram sistematizados no mapa e gráficos a seguir, todos colocados em termos de Área Útil ou Privativa.</p>
				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/mapas/mapa11.jpg'),
					caption: 'Mapa 11 - Área de Influência Imobiliária e áreas transformáveis.',
					fonte: 'Elaboração: SP Urbanismo, 2020'
				}"
				:elaboracaoOnly="true"
				/>
				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/graficos/grafico-1.gif'),
					caption: 'Gráfico 1: Consumo de Área Útil - Morumbi',
					fonte: 'EMBRAESP, Elaboração: SP Urbanismo, 2020'
				}" />

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/graficos/grafico-2.gif'),
					caption: 'Gráfico 2: Consumo de Área Útil - Itaim Bibi',
					fonte: 'EMBRAESP, Elaboração: SP Urbanismo, 2020'
				}" />

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/graficos/grafico-3.gif'),
					caption: 'Gráfico 3: Consumo de Área Útil - Pinheiros',
					fonte: 'EMBRAESP, Elaboração: SP Urbanismo, 2020'
				}" />

				<imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/jockey-club-2/graficos/grafico-4.gif'),
					caption: 'Gráfico 4: Consumo de Área Útil - Butantã',
					fonte: 'EMBRAESP, Elaboração: SP Urbanismo, 2020'
				}" />

				<p>Para projeção anual da demanda foi levado em consideração o ciclo de lançamentos imobiliários, colocando os dados em perspectiva de uma média móvel de 3 anos. A primeira projeção realizada corresponde à média dos últimos 2 ciclos e, na ausência de produção imobiliária, os resultados mais recentes com produção positiva.</p>
				<p>Contudo, os dados demonstram movimentos variados do mercado ao longo dos anos, com picos anteriores a 2015, que poderiam também informar a projeção da demanda. Essa variação é influenciada tanto pela disponibilidade de estoque de Potencial Construtivo Adicional, em diferentes marcos regulatórios, quanto pelo comportamento do setor da construção civil na cidade de São Paulo.</p>
				<p>Tendo em vista as boas condições locacionais e fundiárias nos Setores de Transformação do PIU, bem como seus parâmetros urbanísticos, foi possível incrementar a projeção da demanda, incluindo no cálculo os últimos picos de produção imobiliária em ciclos anteriores (portanto, antes de 2015). O resultado para a Área de Influência Imobiliária é demonstrado a seguir:</p>

				<div class="tabela-container">
					<table>
						<caption>Tabela 3: Estimativa da produção imobiliária anual na Área de Influência</caption>
						<thead>
							<tr>
								<th width="145">
									Regi&atilde;o
								</th>
								<th colspan="2" width="211">
									&Aacute;rea &uacute;til Residencial
								</th>
								<th colspan="2" width="191">
									&Aacute;rea &uacute;til Comercial
								</th>
								<th width="100">
									Total
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td width="145">
									Morumbi
								</td>
								<td width="154">
									7.477 m&sup2;
								</td>
								<td width="57">
									90%
								</td>
								<td width="144">
									822 m&sup2;
								</td>
								<td width="47">
									10%
								</td>
								<td width="100">
									8.299 m&sup2;
								</td>
							</tr>
							<tr>
								<td width="145">
									Itaim Bibi
								</td>
								<td width="154">
									30.945 m&sup2;
								</td>
								<td width="57">
									94%
								</td>
								<td width="144">
									2.148 m&sup2;
								</td>
								<td width="47">
									6%
								</td>
								<td width="100">
									33.093 m&sup2;
								</td>
							</tr>
							<tr>
								<td width="145">
									Pinheiros
								</td>
								<td width="154">
									14.666 m&sup2;
								</td>
								<td width="57">
									72%
								</td>
								<td width="144">
									5.602 m&sup2;
								</td>
								<td width="47">
									28%
								</td>
								<td width="100">
									20.268 m&sup2;
								</td>
							</tr>
							<tr>
								<td width="145">
									Butant&atilde;
								</td>
								<td width="154">
									607 m&sup2;
								</td>
								<td width="57">
									36%
								</td>
								<td width="144">
									1.094 m&sup2;
								</td>
								<td width="47">
									64%
								</td>
								<td width="100">
									1.700 m&sup2;
								</td>
							</tr>
							<tr class="escuro negrito">
								<td width="145">
									Total
								</td>
								<td width="154">
									53.695 m&sup2;
								</td>
								<td width="57">
									85%
								</td>
								<td width="144">
									9.666 m&sup2;
								</td>
								<td width="47">
									15%
								</td>
								<td width="100">
									63.361 m&sup2;
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte: EMBRAESP, SPUrbanismo, 2020</div>
				</div>

				<p>Trata-se, como demonstrado, de uma região com produção imobiliária intensa, muito demandada e bastante sensível às mudanças no regramento urbanístico. Sabendo-se que a produção imobiliária seria absorvida prioritariamente pelos terrenos que apresentem as melhores condições de viabilidade, pode-se dizer que apesar dos Setores de Transformação corresponderem à somente 7% de toda a área computável ofertada no recorte de análise, eles apresentam condições urbanísticas bastante atraentes para absorção dos 63 mil m² anuais de área útil ou privativa projetados.</p>
			</section>

			<section id="consulta-5-3">
				<h3>5.3 Estudo vocacional dos setores de transformação</h3>
				<comments v-if="consultaAtiva" :attr="{ id: 5003, context:'Consulta | 5.3 Estudo vocacional dos setores de transformação' }" />
				<p>Para alimentar os estudos de viabilidade, foram prospectados os dados de lançamento de acordo com as regiões da Área de Influência Imobiliária. Cada trecho – Morumbi, Itaim Bibi, Pinheiros e Butantã – corresponde a um possível vetor de produção imobiliária que informa as condições de incorporação a serem utilizadas pelos 3 diferentes Setores de Transformação do PIU. A seguir foram sistematizados os dados em termos de uso, tipologia e preços de lançamento.</p>

				<h4>5.3.1 Uso e tipologia</h4>
				<p>No período indicado, foram mapeados 197 lançamentos, com uma oferta de 14.962 unidades imobiliárias, com uma prevalência de dois terços de unidades residenciais. Já em termos de área privativa lançada, os usos residenciais correspondem a cerca de 70% do total.</p>

				<div class="tabela-container">
					<table width="644">
						<caption>Tabela 4: Unidades lançadas na Área de Influência Imobiliária, por localização e uso, 1995-2017</caption>
						<tbody>
							<tr class="escuro negrito">
								<td width="209">
									Localiza&ccedil;&atilde;o
								</td>
								<td width="113">
									Total
								</td>
								<td colspan="2" width="170">
									Comercial
								</td>
								<td colspan="2" width="152">
									Residencial
								</td>
							</tr>
							<tr>
								<td width="209">
									Morumbi
								</td>
								<td width="113">
									1.399
								</td>
								<td width="123">
									397
								</td>
								<td width="47">
									28%
								</td>
								<td width="104">
									1.002
								</td>
								<td width="48">
									72%
								</td>
							</tr>
							<tr>
								<td width="209">
									Itaim Bibi
								</td>
								<td width="113">
									7.755
								</td>
								<td width="123">
									2.759
								</td>
								<td width="47">
									36%
								</td>
								<td width="104">
									4.996
								</td>
								<td width="48">
									64%
								</td>
							</tr>
							<tr>
								<td width="209">
									Pinheiros
								</td>
								<td width="113">
									5.273
								</td>
								<td width="123">
									1.660
								</td>
								<td width="47">
									31%
								</td>
								<td width="104">
									3.613
								</td>
								<td width="48">
									69%
								</td>
							</tr>
							<tr>
								<td width="209">
									Butant&atilde;
								</td>
								<td width="113">
									535
								</td>
								<td width="123">
									274
								</td>
								<td width="47">
									51%
								</td>
								<td width="104">
									261
								</td>
								<td width="48">
									49%
								</td>
							</tr>
							<tr class="escuro">
								<td>
									Total
								</td>
								<td width="113">
									14.962
								</td>
								<td width="123">
									5.090
								</td>
								<td width="47">
									34%
								</td>
								<td width="104">
									9.872
								</td>
								<td width="48">
									66%
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte: EMBRAESP, 1995-2017</div>
				</div>
				<div class="tabela-container">
					<table width="644">
						<caption>Tabela 5: Metragem lançada na Área de Influência Imobiliária, por localização e uso, 1995-2017</caption>
						<tbody>
							<tr class="escuro negrito">
								<td width="209">
									Localiza&ccedil;&atilde;o
								</td>
								<td width="113">
									Total
								</td>
								<td colspan="2" width="170">
									Comercial
								</td>
								<td colspan="2" width="152">
									Residencial
								</td>
							</tr>
							<tr>
								<td width="209">
									Morumbi
								</td>
								<td width="113">
									155.008 m&sup2;
								</td>
								<td width="123">
									14.904 m&sup2;
								</td>
								<td width="47">
									10%
								</td>
								<td width="104">
									140.104 m&sup2;
								</td>
								<td width="48">
									90%
								</td>
							</tr>
							<tr>
								<td width="209">
									Itaim Bibi
								</td>
								<td width="113">
									749.469 m&sup2;
								</td>
								<td width="123">
									253.521 m&sup2;
								</td>
								<td width="47">
									34%
								</td>
								<td width="104">
									495.948 m&sup2;
								</td>
								<td width="48">
									66%
								</td>
							</tr>
							<tr>
								<td width="209">
									Pinheiros
								</td>
								<td width="113">
									521.634 m&sup2;
								</td>
								<td width="123">
									143.799 m&sup2;
								</td>
								<td width="47">
									28%
								</td>
								<td width="104">
									377.835 m&sup2;
								</td>
								<td width="48">
									72%
								</td>
							</tr>
							<tr>
								<td width="209">
									Butant&atilde;
								</td>
								<td width="113">
									28.452 m&sup2;
								</td>
								<td width="123">
									11.553 m&sup2;
								</td>
								<td width="47">
									41%
								</td>
								<td width="104">
									16.899 m&sup2;
								</td>
								<td width="48">
									59%
								</td>
							</tr>
							<tr class="escuro">
								<td width="209">
									Total
								</td>
								<td width="113">
									1.454.564 m&sup2;
								</td>
								<td width="123">
									423.777 m&sup2;
								</td>
								<td width="47">
									29%
								</td>
								<td width="104">
									1.030.787 m&sup2;
								</td>
								<td width="48">
									71%
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte: EMBRAESP, 1995-2017.</div>
				</div>
				<p>Observa-se também nos lançamentos a manutenção da proporção entre o uso residencial e comercial, relação esta que altera-se significativamente apenas no caso do Morumbi, que detêm 28% de suas unidades lançadas como comerciais, mas apenas 10% da área lançada como tal, o que indica que suas unidades comerciais são relativamente menores que as residenciais em comparação às outras regiões. Cabe, portanto, analisar o tamanho médio das unidades lançadas, bem como a suas características tipológicas básicas – a quantidade de dormitórios, no caso residencial, ou se as unidades comerciais correspondem às lajes corporativas (área livre) ou salas comerciais.</p>

				<div class="tabela-container">
					<table>
						<caption>Tabela 6: Área útil lançada na Área de Influência Imobiliária, por tipologia e uso, 1995-2017</caption>
						<tbody>
							<tr class="escuro">
								<td rowspan="2" width="81">
									Localiza&ccedil;&atilde;o
								</td>
								<td colspan="6" width="372">
									Residencial
								</td>
								<td colspan="3" width="198">
									Comercial
								</td>
							</tr>
							<tr tr class="escuro">
								<td width="54">
									Flat
								</td>
								<td width="61">
									1 dorm
								</td>
								<td width="61">
									2 dorm
								</td>
								<td width="61">
									3 dorm
								</td>
								<td width="64">
									4+ dorm
								</td>
								<td width="71">
									Total
								</td>
								<td width="72">
									Sala
								</td>
								<td width="61">
									&Aacute;rea Livre
								</td>
								<td width="66">
									Total
								</td>
							</tr>
							<tr>
								<td width="81">
									Morumbi
								</td>
								<td width="54">
									0
								</td>
								<td width="61">
									8.350
								</td>
								<td width="61">
									17.663
								</td>
								<td width="61">
									41.646
								</td>
								<td width="64">
									72.445
								</td>
								<td width="71">
									140.104
								</td>
								<td width="72">
									14.904
								</td>
								<td width="61">
									0
								</td>
								<td width="66">
									14.904
								</td>
							</tr>
							<tr>
								<td width="81">
									Itaim Bibi
								</td>
								<td width="54">
									38.620
								</td>
								<td width="61">
									51.857
								</td>
								<td width="61">
									64.140
								</td>
								<td width="61">
									63.790
								</td>
								<td width="64">
									277.540
								</td>
								<td width="71">
									495.948
								</td>
								<td width="72">
									143.436
								</td>
								<td width="61">
									110.085
								</td>
								<td width="66">
									253.521
								</td>
							</tr>
							<tr>
								<td width="81">
									Pinheiros
								</td>
								<td width="54">
									6.038
								</td>
								<td width="61">
									52.868
								</td>
								<td width="61">
									81.932
								</td>
								<td width="61">
									23.578
								</td>
								<td width="64">
									213.419
								</td>
								<td width="71">
									377.835
								</td>
								<td width="72">
									74.244
								</td>
								<td width="61">
									69.555
								</td>
								<td width="66">
									143.799
								</td>
							</tr>
							<tr>
								<td width="81">
									Butant&atilde;
								</td>
								<td width="54">
									0
								</td>
								<td width="61">
									0
								</td>
								<td width="61">
									0
								</td>
								<td width="61">
									15.079
								</td>
								<td width="64">
									1.820
								</td>
								<td width="71">
									16.899
								</td>
								<td width="72">
									10.755
								</td>
								<td width="61">
									799
								</td>
								<td width="66">
									11.553
								</td>
							</tr>
							<tr class="escuro">
								<td width="81">
									Total
								</td>
								<td width="54">
									44.659
								</td>
								<td width="61">
									113.075
								</td>
								<td width="61">
									163.735
								</td>
								<td width="61">
									144.094
								</td>
								<td width="64">
									565.224
								</td>
								<td width="71">
									1.030.787
								</td>
								<td width="72">
									243.338
								</td>
								<td width="61">
									180.439
								</td>
								<td width="66">
									423.777
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte: EMBRAESP, 1995-2017.</div>
				</div>

				<div class="tabela-container">
					<table width="643">
						<caption>Tabela 7: Área útil média das unidades lançadas na Área de Influência Imobiliária, 1995-2017</caption>
						<tbody>
							<tr class="escuro">
								<td rowspan="2" width="85">
									Localiza&ccedil;&atilde;o
								</td>
								<td colspan="6" width="373">
									Residencial
								</td>
								<td colspan="3" width="184">
									Comercial
								</td>
							</tr>
							<tr class="escuro">
								<td width="57">
									Flat
								</td>
								<td width="57">
									1 dorm
								</td>
								<td width="58">
									2 dorm
								</td>
								<td width="65">
									3 dorm
								</td>
								<td width="66">
									4+ dorm
								</td>
								<td width="71">
									Geral R
								</td>
								<td width="62">
									Sala
								</td>
								<td width="62">
									&Aacute;rea Livre
								</td>
								<td width="61">
									Geral NR
								</td>
							</tr>
							<tr>
								<td width="85">
									Morumbi
								</td>
								<td width="57">
									-
								</td>
								<td width="57">
									93 m&sup2;
								</td>
								<td width="58">
									81 m&sup2;
								</td>
								<td width="65">
									102 m&sup2;
								</td>
								<td width="66">
									254 m&sup2;
								</td>
								<td width="71">
									140 m&sup2;
								</td>
								<td width="62">
									38 m&sup2;
								</td>
								<td width="62">
									-
								</td>
								<td width="61">
									38 m&sup2;
								</td>
							</tr>
							<tr>
								<td width="85">
									Itaim Bibi
								</td>
								<td width="57">
									31 m&sup2;
								</td>
								<td width="57">
									44 m&sup2;
								</td>
								<td width="58">
									65 m&sup2;
								</td>
								<td width="65">
									100 m&sup2;
								</td>
								<td width="66">
									294 m&sup2;
								</td>
								<td width="71">
									99 m&sup2;
								</td>
								<td width="62">
									58 m&sup2;
								</td>
								<td width="62">
									408 m&sup2;
								</td>
								<td width="61">
									92 m&sup2;
								</td>
							</tr>
							<tr>
								<td width="85">
									Pinheiros
								</td>
								<td width="57">
									23 m&sup2;
								</td>
								<td width="57">
									41 m&sup2;
								</td>
								<td width="58">
									67 m&sup2;
								</td>
								<td width="65">
									100 m&sup2;
								</td>
								<td width="66">
									359 m&sup2;
								</td>
								<td width="71">
									105 m&sup2;
								</td>
								<td width="62">
									47 m&sup2;
								</td>
								<td width="62">
									953 m&sup2;
								</td>
								<td width="61">
									87 m&sup2;
								</td>
							</tr>
							<tr>
								<td width="85">
									Butant&atilde;
								</td>
								<td width="57">
									-
								</td>
								<td width="57">
									-
								</td>
								<td width="58">
									-
								</td>
								<td width="65">
									61 m&sup2;
								</td>
								<td width="66">
									130 m&sup2;
								</td>
								<td width="71">
									65 m&sup2;
								</td>
								<td width="62">
									40 m&sup2;
								</td>
								<td width="62">
									200 m&sup2;
								</td>
								<td width="61">
									42 m&sup2;
								</td>
							</tr>
							<tr class="escuro">
								<td width="85">
									M&eacute;dia total
								</td>
								<td width="57">
									30 m&sup2;
								</td>
								<td width="57">
									44 m&sup2;
								</td>
								<td width="58">
									67 m&sup2;
								</td>
								<td width="65">
									94 m&sup2;
								</td>
								<td width="66">
									308 m&sup2;
								</td>
								<td width="71">
									104 m&sup2;
								</td>
								<td width="62">
									51 m&sup2;
								</td>
								<td width="62">
									520 m&sup2;
								</td>
								<td width="61">
									83 m&sup2;
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte: EMBRAESP, 1995-2017.</div>
				</div>
				<p>A análise tipológica demonstra que, no uso Residencial, predomina a preferência por apartamentos grandes, com 3 ou mais dormitórios. Cabe ressaltar, por outro lado, novas tendências, como demonstra o volume significativo de oferta de unidades com 2 dormitórios em Pinheiros e movimentos recentes no Butantã, ainda não identificados na base de dados, com o lançamento de tipologias menores, sobretudo após a inauguração da Estação da Linha 4 do Metrô.</p>

				<p>Considerando a proximidade dos quatro vetores de análise com os três Setores de Transformação, os estudos de viabilidade desenvolvidos a seguir estabeleceram as seguintes vocações: no Setor Eusébio Matoso, a proximidade com a Linha 4 do Metrô confere ao terreno vocação tanto para construção pequenos apartamentos residenciais, como salas comerciais. No Setor José Augusto de Queiroz, entende-se que, dada a proximidade com a Avenida Cidade Jardim e o Itaim Bibi, o terreno serve tanto ao desenvolvimento de plantas residenciais maiores, como também o investimento em lajes corporativas. Já o Setor Lineu de Paula Machado, considerando os parâmetros dispostos e o diagnóstico do PIU que apontou a necessidade de dinamização de usos na avenida, apostará exclusivamente nos usos não residenciais.</p>

				<h4> 5.3.2 Análise de preços</h4>
				<p>Os preços de lançamentos praticados atualmente foram extraídos da mesma base de dados e atualizados pelo INCC, considerando o último lançamento para a tipologia específica e localidade desde 2006.</p>

				<div class="tabela-container">
					<table width="643">
						<caption>Tabela 8: Preço médio por metro quadrado de área útil residencial</caption>
						<tbody>
							<tr class="escuro">
								<td width="113">
									Localiza&ccedil;&atilde;o
								</td>
								<td width="88">
									Flat
								</td>
								<td width="88">
									1 dorm
								</td>
								<td width="88">
									2 dorm
								</td>
								<td width="88">
									3 dorm
								</td>
								<td width="88">
									4+ dorm
								</td>
								<td width="88">
									M&eacute;dia
								</td>
							</tr>
							<tr>
								<td width="113">
									Morumbi
								</td>
								<td width="88">
									-
								</td>
								<td width="88">
									R$ 14.154
								</td>
								<td width="88">
									R$ 12.788
								</td>
								<td width="88">
									R$ 14.113
								</td>
								<td width="88">
									R$ 7.326
								</td>
								<td width="88">
									R$ 10.964
								</td>
							</tr>
							<tr>
								<td width="113">
									Itaim Bibi
								</td>
								<td width="88">
									R$ 28.009
								</td>
								<td width="88">
									R$ 29.898
								</td>
								<td width="88">
									R$ 25.903
								</td>
								<td width="88">
									R$ 26.687
								</td>
								<td width="88">
									R$ 35.083
								</td>
								<td width="88">
									R$ 31.484
								</td>
							</tr>
							<tr>
								<td width="113">
									Pinheiros
								</td>
								<td width="88">
									R$ 16.175
								</td>
								<td width="88">
									R$ 15.641
								</td>
								<td width="88">
									R$ 13.914
								</td>
								<td width="88">
									R$ 19.619
								</td>
								<td width="88">
									R$ 18.127
								</td>
								<td width="88">
									R$ 16.823
								</td>
							</tr>
							<tr>
								<td width="113">
									Butant&atilde;
								</td>
								<td width="88">
									-
								</td>
								<td width="88">
									-
								</td>
								<td width="88">
									-
								</td>
								<td width="88">
									-
								</td>
								<td width="88">
									R$ 8.416
								</td>
								<td width="88">
									R$ 8.416
								</td>
							</tr>
							<tr class="escuro">
								<td width="113">
									Pre&ccedil;os m&eacute;dios
								</td>
								<td width="88">
									R$ 25.793
								</td>
								<td width="88">
									R$ 16.905
								</td>
								<td width="88">
									R$ 15.119
								</td>
								<td width="88">
									R$ 22.626
								</td>
								<td width="88">
									R$ 21.396
								</td>
								<td width="88">
									R$ 20.094
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte: EMBRAESP, 1995-2017.</div>
				</div>
				<div class="tabela-container">
					<table width="643">
						<caption>Tabela 9: Preço médio por metro quadrado de área útil não residencial</caption>
						<tbody>
							<tr class="escuro">
								<td width="113">
									Localiza&ccedil;&atilde;o
								</td>
								<td width="176">
									Sala
								</td>
								<td width="176">
									&Aacute;rea Livre
								</td>
								<td width="176">
									M&eacute;dia
								</td>
							</tr>
							<tr>
								<td width="113">
									Morumbi
								</td>
								<td width="176">
									R$ 15.106
								</td>
								<td width="176">
									-
								</td>
								<td width="176">
									R$ 15.106
								</td>
							</tr>
							<tr>
								<td width="113">
									Itaim Bibi
								</td>
								<td width="176">
									R$ 28.924
								</td>
								<td width="176">
									R$ 25.238
								</td>
								<td width="176">
									R$ 25.667
								</td>
							</tr>
							<tr>
								<td width="113">
									Pinheiros
								</td>
								<td width="176">
									R$ 26.708
								</td>
								<td width="176">
									R$ 16.149
								</td>
								<td width="176">
									R$ 17.441
								</td>
							</tr>
							<tr>
								<td width="113">
									Butant&atilde;
								</td>
								<td width="176">
									R$ 19.015
								</td>
								<td width="176">
									R$ 17.171
								</td>
								<td width="176">
									R$ 17.990
								</td>
							</tr>
							<tr class="escuro">
								<td width="113">
									Pre&ccedil;os m&eacute;dios
								</td>
								<td width="176">
									R$ 23.619
								</td>
								<td width="176">
									R$ 17.277
								</td>
								<td width="176">
									R$ 18.367
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte: EMBRAESP, 1995-2017.</div>
				</div>
				<p>Como pode se observar, os preços mais elevados são praticados no recorte corresponde ao Itaim Bibi e, em seguida, Pinheiros, ambos com grande influência da Av. Faria Lima.</p>
				<p>Os preços dos imóveis residenciais variam conforme a tipologia e determinam um gráfico em forma de “U”, sendo as tipologias de dois dormitórios (demanda que foi observada principalmente em Pinheiros) as mais baratas. Esse resultado é bastante usual: as plantas menores oferecem ao incorporador a estratégia de elevar o preço por metro quadrado, pois representa pouco impacto no preço total. Já as unidades de três ou mais dormitórios, embora extensivas em metragem, geralmente, localizam-se nos melhores pontos das regiões avaliadas e, assim, o ponto agrega valor ao produto.</p>
				<p>Quanto aos aluguéis, foi utilizado como variável o <em>rental yield</em> disponível na base de dados da FipeZap, referente a Maio/2020. Em relação aos usos não residenciais, importante destacar que a base não distingue as tipologias entre Área Livre e Sala comercial. Assim, uma vez que a calibragem do dado se ampara principalmente nas maiores áreas – a tipologia Área Livre – considerou-se o dado para estimar o aluguel da primeira tipologia, e um mesmo acréscimo em 40% para a segunda.</p>

				<p>Multiplicando-se o <em>rental yield</em> pelo preço do metro quadrado considerado anteriormente, obtemos o preço do aluguel mensal de cada metro quadrado, disposto abaixo:</p>

				<div class="tabela-container">
					<table width="652">
						<caption>Tabela 10: Aluguel médio por metro quadrado (por mês)</caption>
						<tbody>
							<tr class="escuro">
								<td rowspan="2" width="84">
									Localiza&ccedil;&atilde;o
								</td>
								<td colspan="6" width="385">
									Residencial
								</td>
								<td colspan="3" width="183">
									Comercial
								</td>
							</tr>
							<tr class="escuro">
								<td width="55">
									Flat
								</td>
								<td width="66">
									1 dorm
								</td>
								<td width="66">
									2 dorm
								</td>
								<td width="67">
									3 dorm
								</td>
								<td width="65">
									4+ dorm
								</td>
								<td width="66">
									Geral &nbsp;R
								</td>
								<td width="65">
									Sala
								</td>
								<td width="48">
									&Aacute;rea Livre
								</td>
								<td width="70">
									Geral NR
								</td>
							</tr>
							<tr>
								<td width="84">
									Morumbi
								</td>
								<td width="55">
									-
								</td>
								<td width="66">
									R$ 76
								</td>
								<td width="66">
									R$ 59
								</td>
								<td width="67">
									R$ 55
								</td>
								<td width="65">
									R$ 24
								</td>
								<td width="66">
									R$ 50
								</td>
								<td width="65">
									R$ 101
								</td>
								<td width="48">
									-
								</td>
								<td width="70">
									R$ 98
								</td>
							</tr>
							<tr>
								<td width="84">
									Itaim Bibi
								</td>
								<td width="55">
									R$ 151
								</td>
								<td width="66">
									R$ 161
								</td>
								<td width="66">
									R$ 120
								</td>
								<td width="67">
									R$ 104
								</td>
								<td width="65">
									R$ 116
								</td>
								<td width="66">
									R$ 143
								</td>
								<td width="65">
									R$ 194
								</td>
								<td width="48">
									R$ 121
								</td>
								<td width="70">
									R$ 167
								</td>
							</tr>
							<tr>
								<td width="84">
									Pinheiros
								</td>
								<td width="55">
									R$ 87
								</td>
								<td width="66">
									R$ 84
								</td>
								<td width="66">
									R$ 64
								</td>
								<td width="67">
									R$ 76
								</td>
								<td width="65">
									R$ 60
								</td>
								<td width="66">
									R$ 76
								</td>
								<td width="65">
									R$ 179
								</td>
								<td width="48">
									R$ 77
								</td>
								<td width="70">
									R$ 113
								</td>
							</tr>
							<tr>
								<td width="84">
									Butant&atilde;
								</td>
								<td width="55">
									-
								</td>
								<td width="66">
									-
								</td>
								<td width="66">
									-
								</td>
								<td width="67">
									-
								</td>
								<td width="65">
									R$ 28
								</td>
								<td width="66">
									R$ 38
								</td>
								<td width="65">
									R$ 128
								</td>
								<td width="48">
									R$ 82
								</td>
								<td width="70">
									R$ 117
								</td>
							</tr>
							<tr class="escuro">
								<td>
									M&eacute;dia total
								</td>
								<td width="55">
									R$ 139
								</td>
								<td width="66">
									R$ 91
								</td>
								<td width="66">
									R$ 70
								</td>
								<td width="67">
									R$ 88
								</td>
								<td width="65">
									R$ 71
								</td>
								<td width="66">
									R$ 91
								</td>
								<td width="65">
									R$ 159
								</td>
								<td width="48">
									R$ 83
								</td>
								<td width="70">
									R$ 119
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte: EMBRAESP, 1995-2017.</div>
				</div>
			</section>

			<section id="consulta-5-4">
				<h4>5.4 Estudo de viabilidade</h4>
				<comments v-if="consultaAtiva" :attr="{ id: 5004, context:'Consulta | 5.4 Estudo de viabilidade' }" />

				<p>O estudo de viabilidade econômica e financeira de empreendimentos imobiliários é dividido em duas partes. Na primeira, o estudo de massa, são avaliadas implantações nos terrenos de acordo com o regramento urbanístico, considerando o máximo aproveitamento do lote, resultando no cálculo do quadro de áreas de cada empreendimento. Na segunda parte, a análise financeira, essas áreas são precificadas e dispostas num fluxo de caixa como receitas e despesas, incluindo nos cálculos o fator “tempo da transformação”, obtido pelas estimativas da demanda imobiliária dos próximos anos na região e da capacidade de atração desse mercado pelos Setores de Transformação do PIU.</p>
				<p>Esse exercício foi efetuado nos 3 Setores de Transformação – Eusébio Matoso, José Augusto de Queiroz e Lineu de Paula Machado. Seguindo o estudo de vocação dos terrenos, nos dois primeiros Setores considerou-se o desenvolvimento de empreendimentos de uso misto, com fachada ativa: no Setor Eusébio, optou-se por unidades residenciais de 2 dormitórios e salas comerciais, próximo do que se espera para Pinheiros e Butantã; já no Setor José Augusto de Queiroz, foram adotadas unidades residenciais de três dormitórios e andar livre, na mesma perspectiva do Itaim Bibi e Morumbi. Por fim, no Setor Lineu de Paula Machado foi realizada modelagem de desenvolvimento imobiliário exclusivamente comercial, também com fachada ativa, coerente com as expectativas do PIU de atração de novas dinâmicas para a Av. Lineu de Paula Machado.</p>

				<div class="tabela-container">
					<table width="654">
						<caption>Tabela 11: Resultado dos Estudos de massa por Setor</caption>
						<tbody>
							<tr class="escuro">
								<td width="77">
									Setor
								</td>
								<td width="38">
									Gab.
									(m)
								</td>
								<td width="57">
									&Aacute;rea Comp.<br /> (m&sup2;)
								</td>
								<td width="76">
									Pot. Const. Adicional
									(m&sup2;)
								</td>
								<td width="38">
									CA
								</td>
								<td width="94">
									Uso
								</td>
								<td width="47">
									Torres
								</td>
								<td width="57">
									&Aacute;rea <br /> &Uacute;til (m&sup2;)
								</td>
								<td width="57">
									Planta (m&sup2;)
								</td>
								<td width="47">
									Unid.
								</td>
								<td width="67">
									Vagas Garagem
								</td>
							</tr>
							<tr>
								<td rowspan="3" class="negrito">
									Eus&eacute;bio Matoso
								</td>
								<td rowspan="3" width="38">
									67
								</td>
								<td rowspan="3" width="57">
									43.880
								</td>
								<td rowspan="3" width="76">
									33.907
								</td>
								<td rowspan="3" width="38">
									&nbsp;4,4
								</td>
								<td width="94">
									Residencial
								</td>
								<td width="47">
									4
								</td>
								<td width="57">
									45.539
								</td>
								<td width="57">
									65
								</td>
								<td width="47">
									704
								</td>
								<td rowspan="3" width="67">
									884
								</td>
							</tr>
							<tr>
								<td width="94">
									Salas Comerciais
								</td>
								<td width="47">
									1
								</td>
								<td width="57">
									8.100
								</td>
								<td width="57">
									45
								</td>
								<td width="47">
									180
								</td>
							</tr>
							<tr>
								<td width="94">
									Fachada ativa
								</td>
								<td width="47">
									-
								</td>
								<td width="57">
									4.986
								</td>
								<td width="57">
									-
								</td>
								<td width="47">
									-
								</td>
							</tr>
							<tr>
								<td rowspan="3" class="negrito">
									Jos&eacute; Augusto de Queiroz
								</td>
								<td rowspan="3" width="38">
									59
								</td>
								<td rowspan="3" width="57">
									63.232
								</td>
								<td rowspan="3" width="76">
									34.487
								</td>
								<td rowspan="3" width="38">
									&nbsp;2,2
								</td>
								<td width="94">
									Residencial
								</td>
								<td width="47">
									5
								</td>
								<td width="57">
									57.600
								</td>
								<td width="57">
									120
								</td>
								<td width="47">
									480
								</td>
								<td rowspan="3" width="67">
									1.216
								</td>
							</tr>
							<tr>
								<td width="94">
									Andar livre
								</td>
								<td width="47">
									1
								</td>
								<td width="57">
									14.528
								</td>
								<td width="57">
									454
								</td>
								<td width="47">
									32
								</td>
							</tr>
							<tr>
								<td width="94">
									Fachada ativa
								</td>
								<td width="47">
									-
								</td>
								<td width="57">
									5.749
								</td>
								<td width="57">
									-
								</td>
								<td width="47">
									-
								</td>
							</tr>
							<tr>
								<td rowspan="2" class="negrito">
									Lineu de Paula Machado
								</td>
								<td rowspan="2" width="38">
									15
								</td>
								<td rowspan="2" width="57">
									77.331
								</td>
								<td rowspan="2" width="76">
									42.133
								</td>
								<td rowspan="2" width="38">
									&nbsp;2,2
								</td>
								<td width="94">
									Andar livre
								</td>
								<td width="47">
									4
								</td>
								<td width="57">
									59.520
								</td>
								<td width="57">
									1.240
								</td>
								<td width="47">
									48
								</td>
								<td rowspan="2" width="67">
									960
								</td>
							</tr>
							<tr>
								<td width="94">
									Fachada ativa + Servi&ccedil;os
								</td>
								<td width="47">
									-
								</td>
								<td width="57">
									19.141
								</td>
								<td width="57">
									-
								</td>
								<td width="47">
									-
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte: SP-Urbanismo, 2020</div>
				</div>
				<p>Os resultados da modelagem demonstraram que todos os empreendimentos apresentam viabilidade financeira. O VGV alcança, ao todo, <b>R$ 3,76 bilhões</b> e o ganho com venda ou permuta dos terrenos atinge cerca de <b>R$ 828 milhões</b>. Importante destacar que todos os Setores têm potencial para atingir Margens Líquidas maiores que 20% e Taxas Internas de Retorno bem expressivas, em torno de 30%, resultado da composição entre as condições de localização - com preços/m² de lançamento elevados - e parâmetros urbanísticos vantajosos do ponto de vista imobiliário.</p>
				<div class="tabela-container">
					<table width="642">
						<caption>Tabela 12: Resultado dos Estudos de viabilidade por Setor</caption>
						<tbody>
							<tr class="escuro">
								<td colspan="2" width="188">
									Setores de Transforma&ccedil;&atilde;o:
								</td>
								<td width="161">
									Eus&eacute;bio Matoso
								</td>
								<td width="151">
									Jos&eacute; Augusto de Queiroz
								</td>
								<td width="142">
									Lineu de Paula Machado
								</td>
							</tr>
							<tr>
								<td rowspan="2" width="112">
									VGV
								</td>
								<td width="76">
									&nbsp;R$/m&sup2;
								</td>
								<td width="161">
									15.872
								</td>
								<td width="151">
									20.341
								</td>
								<td width="142">
									15.836
								</td>
							</tr>
							<tr>
								<td width="76">
									&nbsp;R$
								</td>
								<td width="161">
									930,5 mi
								</td>
								<td width="151">
									1.584 mi
								</td>
								<td width="142">
									1.248 mi
								</td>
							</tr>
							<tr>
								<td rowspan="3" width="112">
									Terreno
								</td>
								<td width="76">
									&nbsp;R$/m&sup2;
								</td>
								<td width="161">
									20.527
								</td>
								<td width="151">
									12.124
								</td>
								<td width="142">
									7.801
								</td>
							</tr>
							<tr>
								<td width="76">
									%VGV
								</td>
								<td width="161">
									22%
								</td>
								<td width="151">
									22%
								</td>
								<td width="142">
									22%
								</td>
							</tr>
							<tr>
								<td width="76">
									&nbsp;R$
								</td>
								<td width="161">
									204,7 mi
								</td>
								<td width="151">
									348,5 mi
								</td>
								<td width="142">
									274,6 mi
								</td>
							</tr>
							<tr class="escuro">
								<td rowspan="4" width="112">
									Outorga
								</td>
								<td width="76">
									Fp
								</td>
								<td width="161">
									2,4
								</td>
								<td width="151">
									2,4
								</td>
								<td width="142">
									2,2
								</td>
							</tr>
							<tr class="escuro">
								<td width="76">
									R$/m&sup2;
								</td>
								<td width="161">
									984
								</td>
								<td width="151">
									1.969
								</td>
								<td width="142">
									1.807
								</td>
							</tr>
							<tr class="escuro">
								<td width="76">
									%VGV
								</td>
								<td width="161">
									3,6%
								</td>
								<td width="151">
									4,3%
								</td>
								<td width="142">
									6,1%
								</td>
							</tr>
							<tr class="escuro">
								<td width="76">
									R$
								</td>
								<td width="161">
									33,4 mi
								</td>
								<td width="151">
									67.9 mi
								</td>
								<td width="142">
									76,1 mi
								</td>
							</tr>
							<tr>
								<td width="112">
									Cota de Solidariedade
								</td>
								<td width="76">
									R$
								</td>
								<td width="161">
									1,79 mi
								</td>
								<td width="151">
									5,18 mi
								</td>
								<td width="142">
									6,35 mi
								</td>
							</tr>
							<tr>
								<td width="112">
									ML
								</td>
								<td width="76">
									(%)
								</td>
								<td width="161">
									25,6
								</td>
								<td width="151">
									23,5
								</td>
								<td width="142">
									23,8
								</td>
							</tr>
							<tr>
								<td width="112">
									TIR
								</td>
								<td width="76">
									(%)
								</td>
								<td width="161">
									33,2
								</td>
								<td width="151">
									31,1
								</td>
								<td width="142">
									29,8
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte:  SP-Urbanismo, 2020</div>
				</div>
				&nbsp;
				<div class="tabela-container">
					<table width="644">
						<caption>Tabela 13: Resultado geral dos Estudos de viabilidade </caption>
						<tbody>
							<tr class="escuro">
								<td rowspan="2" width="114">
									VGV
								</td>
								<td colspan="2" width="151">
									Terreno
								</td>
								<td colspan="3" width="274">
									Outorga Onerosa
								</td>
								<td rowspan="2" width="104">
									Cota de Solidariedade
								</td>
							</tr>
							<tr class="escuro">
								<td width="76">
									Total
								</td>
								<td width="76">
									%VGV
								</td>
								<td width="104">
									Pre&ccedil;o m&eacute;dio
								</td>
								<td width="94">
									R$
								</td>
								<td width="76">
									%VGV
								</td>
							</tr>
							<tr>
								<td width="114">
									R$ 3,76 bi
								</td>
								<td width="76">
									R$ 828 mi
								</td>
								<td width="76">
									22%
								</td>
								<td width="104">
									R$ 1.584/m&sup2;
								</td>
								<td width="94">
									R$ 177,4 mi
								</td>
								<td width="76">
									4,7%
								</td>
								<td width="104">
									R$ 13,3 mi
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte:  SP-Urbanismo, 2020</div>
				</div>
				<p>Os estudos de viabilidade demonstram que existe disponibilidade financeira para que os empreendimentos contribuam com a Outorga Onerosa e para a Cota de Solidariedade, essa última exigida para empreendimentos com mais de 20.000m² de área computável (Art. 111 e 112 do PDE). No caso da Outorga, foram considerados preços médios de Potencial Construtivo Adicional praticados em outras áreas com perfil similar, em termos de valorização imobiliária e parâmetros urbanísticos.</p>
				<p>Tal como previsto pelo PDE, os preços decrescem de acordo com o CA máximo, perfazendo uma média de <b>R$1.584/m²</b> (considerando CA=2,2, e 4,4) e uma receita de aproximadamente <b>R$ 177,4 milhões</b>, correspondente a cerca de 4,7% do VGV, em média, para os estudos realizados. Tais valores consideram Fatores de Planejamento (Fp) de 2,4 para os Setores Eusébio Matoso e José Augusto de Queiroz, e 2,2 para o Setor Lineu de Paula Machado, portanto, maiores que aqueles indicados no PDE.</p>
				<p>Em relação à Cota de Solidariedade, a estimativa de R$13,3 milhões deriva de uma das modalidades de pagamento, no caso, a destinação de 10% do valor do terreno para o FUNDURB (inciso III do Art.112 do PDE).</p>
			</section>

			<section id="consulta-5-5">
				<h4>5.5. Potencial Construtivo Passível de Transferência</h4>
				<comments v-if="consultaAtiva" :attr="{ id: 5005, context:'Consulta | 5.5. Potencial Construtivo Passível de Transferência' }" />

				<p>Por se tratar de um imóvel tombado, o Jockey Club teve acesso ao instrumento de Transferência do Direito de Construir (TDC), tendo emitido em Março de 2015 uma Declaração de Potencial Construtivo Passível de Transferência (<span class="formula">PC<sub>pt</sub></span>), calculada de acordo com as regras constantes no Art. 125 do PDE.</p>
				<p>Como se trata de uma declaração já emitida pelo Município, não convém ao PIU em curso alterar qualquer disposição em relação ao montante de potencial construtivo disponível. Ainda assim, e sobretudo pelo volume de <span class="formula">PC<sub>pt</sub></span>, trata-se de um importante ativo que, ao longo dos anos, também será observado em relação às decisões de se levar adiante ou não novos empreendimentos imobiliários no perímetro do PIU.</p>

				<p>O cálculo do potencial seguiu a fórmula: </p>
				<p class="formula destaque">PC<sub>pt</sub> = At<sub>c</sub> × CA<sub>bas</sub>× F<sub>i</sub></p>

				<p>onde <span class="formula">At<sub>c</sub></span> é área do terreno cedente, <span class="formula">CA<sub>bas</sub></span> é o coeficiente de aproveitamento básico do terreno cedente, vigente na data de referência e <span class="formula">F<sub>i</sub></span> é o fator de incentivo igual a 1.</p>

				<p>No cálculo realizado em 2015, foram apresentados os seguintes valores:</p>

				<p class="formula destaque">
				At<sub>c</sub> = 586.635 m²<br>
				CA<sub>bas</sub> = 0,6<br>
				∴ PC<sub>pt</sub> = 586.635 × 0,6 × 1 = 351.981 m²<br>
				</p>

				<p>De acordo com os dados da PMSP, desde a emissão da Declaração, em 2015, foram transferidos 50.000m², resultando em um <span class="formula">PC<sub>pt</sub></span> disponível atualmente de <b class="formula">301.981m².</b></p>
				<p>Ainda que não tenhamos certeza do fluxo futuro de transferência desse potencial, é possível estimarmos com precisão a receita máxima a ser atingida pelo <span class="formula">PC<sub>pt</sub></span> disponível.</p>
				<p>No modelo da TDC, o <span class="formula">PC<sub>pt</sub></span> é convertido em Potencial Construtivo Equivalente ao imóvel receptor (<span class="formula">PC<sub>r</sub></span>), seguindo a fórmula do Art. 128 do PDE:</p>

				<div class="formula svg-container"><img :src="src('arquivos/jockey-club-2/figuras/pde-art-128.svg')" alt="Fórmula artigo 128 PDE"></div>

				<p>onde <span class="formula">VT<sub>cd</sub></span> é valor unitário/m² do terreno cedente ou doado de acordo com o Cadastro de Valor de Terreno para fins de Outorga Onerosa vigente na data de expedição da Declaração (03/2015), <span class="formula">C<sub>r</sub></span> é valor unitário/ m² da contrapartida da Outorga Onerosa no imóvel receptor e <span class="formula">CA<sub>maxcd</sub></span> é coeficiente de aproveitamento máximo do imóvel cedente, com valor fixo de 4,0 para as hipóteses de transferência de potencial sem doação.</p>

				<p>Sabemos que o os preços máximos a serem atingidos por cada m² de <span class="formula">PC<sub>pt</sub></span> equivale à razão entre a receita de Outorga Onerosa praticada no imóvel receptor (ou seja <span class="formula">PC<sub>r</sub> × PC<sub>r</sub></span>) e o <span class="formula">PC<sub>pt</sub></span> disponível. Podemos, então, concluir que o teto do preço/m² do <span class="formula">PC<sub>pt</sub></span> a ser negociado entre o detentor da Declaração e o imóvel receptor será sempre <span class="formula">VT<sub>cd</sub> / 4</span>.</p>

				<p>Na Declaração emitida em Março de 2015, o <span class="formula destaque">VT<sub>cd</sub> = R$1.769/m²</span>. Como o VT<sub>cd</sub> deve ser corrigido pelo IPCA (IBGE) acumulado até o mês anterior à data de transferência ao imóvel receptor, atualmente o VT<sub>cd</sub> seria igual a R$2.267,16/m², resultando em <span class="formula destaque"><b>R$566,79/m² de PC<sub>pt</sub></b></span>.</p>

				<p>Dessa forma, considerando os <b>301.981m²</b> disponíveis, o instrumento de TDC ainda tem potencial para gerar cerca de <b>R$171 milhões ao Jockey Club</b>, em valores de Abril/2020, receita que provavelmente não será desprezada.</p>
				<p>Vale ressaltar também que, de acordo com as regras vigentes, após os 50.000m² transferidos inicialmente, o saldo só poderá ser transferido gradualmente por meio de 10 parcelas anuais.  Ou seja, os 301.981m² disponíveis resultariam, em termos de receita, no máximo, <b>R$17,1 milhões ao ano ao Jockey Club</b>, pelos próximos 10 anos.</p>

				<p>Uma outra hipótese a ser destacada é a possibilidade da emissão de uma nova Declaração de Potencial Construtivo Passível de Transferência, que seria possível a partir do parcelamento da gleba. Considerando que essa nova Declaração seria calculada à luz do regramento estabelecido pelo PIU e pelo zoneamento, estima-se que seriam produzidos <span class="formula destaque"><b>17.151 m²</b> de PC<sub>pt</sub></span> a um preço máximo de <b>R$451/m²</b>, dados os valores constantes na atualização do Quadro 14 do PDE em 2020. Como o potencial já transferido supera consideravelmente o potencial de uma nova Declaração, conclui-se que, apesar da possibilidade dessa nova emissão cumprir exigências do ponto de vista regulatório, ela não será capaz de efetivar novas receitas ao Jockey Club.</p>
			</section>

			<section id="consulta-5-6">
				<h4>5.6. Fluxo de lançamentos e Outorga Onerosa no tempo</h4>
				<comments v-if="consultaAtiva" :attr="{ id: 5006, context:'Consulta | 5.6. Fluxo de lançamentos e Outorga Onerosa no tempo' }" />
				<p>O leque de composi&ccedil;&atilde;o de neg&oacute;cios permitidos pelo PIU Jockey Club &eacute; bastante amplo: &eacute; poss&iacute;vel optar pelo parcelamento dos Setores de Transforma&ccedil;&atilde;o, o que permitiria um poss&iacute;vel cen&aacute;rio de aliena&ccedil;&atilde;o de im&oacute;veis, ou ent&atilde;o trabalhar cen&aacute;rios de rentabilidade baseados exclusivamente em alugu&eacute;is dos im&oacute;veis n&atilde;o residenciais. Ainda, seria poss&iacute;vel pensar em um modelo que combinasse ambos os cen&aacute;rios, de forma a dinamizar os ativos no tempo.</p>
				<p>A simula&ccedil;&atilde;o aqui realizada considera um modelo h&iacute;brido, tendo como teto de lan&ccedil;amentos aquele definido pela proje&ccedil;&atilde;o anual da demanda. Tomamos como base um cen&aacute;rio otimista, no qual os Setores de Transforma&ccedil;&atilde;o, por suas caracter&iacute;sticas end&oacute;genas, fossem capazes de consumir cerca de 60% da produ&ccedil;&atilde;o imobili&aacute;ria anual identificada na &Aacute;rea de Influ&ecirc;ncia Imobili&aacute;ria, ou seja, algo em torno de 38 mil m&sup2; de &aacute;rea privativa ao ano.</p>
				<p>Em rela&ccedil;&atilde;o a propor&ccedil;&atilde;o de usos residenciais e n&atilde;o residenciais, optou-se por adotar a mesma propor&ccedil;&atilde;o identificada na demanda, resultando em um consumo anual de, no m&aacute;ximo, 5.800 m&sup2; de &aacute;rea privativa para usos comerciais e servi&ccedil;os &ndash; o que inclui &aacute;reas de fachada ativa, torres com salas comerciais e andares livres &ndash; al&eacute;m &nbsp;de uma &aacute;rea privativa residencial anual de pouco mais de 32 mil m&sup2;.</p>
				<p>O cen&aacute;rio adotado considera a possibilidade de empreendimentos para venda nos Setores Eus&eacute;bio Matoso e Jos&eacute; Augusto de Queiroz e empreendimentos comerciais para renda no Setor Lineu de Paula Machado. Al&eacute;m disso, sabe-se que nos pr&oacute;ximos 10 anos ainda seria poss&iacute;vel usufruir as receitas de TDC, ou seja, qualquer aliena&ccedil;&atilde;o (residencial ou comercial) ocorreria, em tese, ap&oacute;s esse per&iacute;odo. Dessa forma optou-se pela prioriza&ccedil;&atilde;o no lan&ccedil;amento dos im&oacute;veis de aluguel no Setor Lineu de Paula Machado na primeira d&eacute;cada, seguido dos lan&ccedil;amentos de im&oacute;veis para venda no Setor Eus&eacute;bio Matoso &ndash; completando a nova frente da Avenida &ndash; e, por fim, Jos&eacute; Augusto de Queiroz.</p>
				<p>O fluxo de lan&ccedil;amentos considera a possibilidade de faseamento de cada empreendimento, sendo que o volume de &aacute;rea lan&ccedil;ada ao ano corresponde sempre a uma ou mais torres (residencial ou n&atilde;o residencial) ofertadas. Caso a oferta ultrapasse a demanda, acumulam-se alguns anos para novos lan&ccedil;amentos, at&eacute; o esgotamento das &aacute;reas privativas estimadas nos estudos de viabilidade. Tamb&eacute;m foi considerada uma vac&acirc;ncia m&eacute;dia de 5% para as loca&ccedil;&otilde;es.</p>

				<div class="tabela-container">
					<table>
						<caption>Tabela 13: fluxo de lançamentos e financeiro ao longo do tempo</caption>
						<tbody>
							<tr class="escuro">
								<td rowspan="2" width="57">
									Ano
								</td>
								<td rowspan="2" width="57">
									Pot. Const. Adic. (m&sup2;)
								</td>
								<td colspan="3" width="198">
									&Aacute;rea &Uacute;til (m&sup2;)
								</td>
								<td rowspan="2" width="85">
									OODC recebida<br /> (R$)
								</td>
								<td rowspan="2" width="123">
									Proje&ccedil;&atilde;o alugu&eacute;is nos empreendimentos de renda<br /> (R$)
								</td>
								<td rowspan="2" width="123">
									VGV dos empreendimentos de uso misto<br /> (R$)
								</td>
							</tr>
							<tr class="escuro">
								<td width="66">
									Jos&eacute; Augusto de Queiroz
								</td>
								<td width="66">
									Lineu de Paula Machado
								</td>
								<td width="66">
									Eus&eacute;bio Matoso
								</td>
							</tr>
							<tr class="negrito escuro">
								<td width="57">
									Total
								</td>
								<td width="57">
									110.527
								</td>
								<td width="66">
									77.877
								</td>
								<td width="66">
									78.817
								</td>
								<td width="66">
									58.625
								</td>
								<td width="85">
									177.390.982
								</td>
								<td width="123">
									1.351.240.022
								</td>
								<td width="123">
									2.514.571.501
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 1
								</td>
								<td width="57">
									10.533
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									19.704
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									19.031.709
								</td>
								<td width="123">
									0
								</td>
								<td width="123">
									0
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 2
								</td>
								<td width="57">
									3.511
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									6.343.903
								</td>
								<td width="123">
									18.510.137
								</td>
								<td width="123">
									0
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 3
								</td>
								<td width="57">
									3.511
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									6.343.903
								</td>
								<td width="123">
									18.510.137
								</td>
								<td width="123">
									0
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 4
								</td>
								<td width="57">
									3.511
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									19.704
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									6.343.903
								</td>
								<td width="123">
									37.020.275
								</td>
								<td width="123">
									0
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 5
								</td>
								<td width="57">
									3.511
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									6.343.903
								</td>
								<td width="123">
									37.020.275
								</td>
								<td width="123">
									0
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 6
								</td>
								<td width="57">
									3.511
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									6.343.903
								</td>
								<td width="123">
									37.020.275
								</td>
								<td width="123">
									0
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 7
								</td>
								<td width="57">
									3.511
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									19.704
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									6.343.903
								</td>
								<td width="123">
									55.530.412
								</td>
								<td width="123">
									0
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 8
								</td>
								<td width="57">
									3.511
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									6.343.903
								</td>
								<td width="123">
									55.530.412
								</td>
								<td width="123">
									0
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 9
								</td>
								<td width="57">
									10.096
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									12.824.549
								</td>
								<td width="123">
									55.530.412
								</td>
								<td width="123">
									0
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 10
								</td>
								<td width="57">
									10.096
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									19.704
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									12.824.549
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									0
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 11
								</td>
								<td width="57">
									7.306
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									7.190.259
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									0
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 12
								</td>
								<td width="57">
									7.306
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									25.263
								</td>
								<td width="85">
									7.190.259
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									145.869.496
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 13
								</td>
								<td width="57">
									1.442
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									25.263
								</td>
								<td width="85">
									1.419.227
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									251.476.124
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 14
								</td>
								<td width="57">
									6.273
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									11.195.711
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									211.213.256
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 15
								</td>
								<td width="57">
									6.273
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									4.050
								</td>
								<td width="85">
									11.195.711
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									213.775.601
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 16
								</td>
								<td width="57">
									8.462
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									4.050
								</td>
								<td width="85">
									14.353.193
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									108.168.973
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 17
								</td>
								<td width="57">
									6.120
								</td>
								<td width="66">
									25.340
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									12.047.771
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									203.059.694
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 18
								</td>
								<td width="57">
									5.611
								</td>
								<td width="66">
									25.340
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									11.045.386
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									359.731.694
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 19
								</td>
								<td width="57">
									1.072
								</td>
								<td width="66">
									12.670
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									2.110.890
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									414.873.847
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 20
								</td>
								<td width="57">
									1.072
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									2.110.890
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									235.008.000
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 21
								</td>
								<td width="57">
									2.145
								</td>
								<td width="66">
									4.843
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									4.221.780
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									176.022.272
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 22
								</td>
								<td width="57">
									2.145
								</td>
								<td width="66">
									4.843
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									4.221.780
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									97.686.272
								</td>
							</tr>
							<tr>
								<td width="57">
									Ano 23
								</td>
								<td width="57">
									0
								</td>
								<td width="66">
									4.843
								</td>
								<td width="66">
									0
								</td>
								<td width="66">
									0
								</td>
								<td width="85">
									0
								</td>
								<td width="123">
									74.040.549
								</td>
								<td width="123">
									97.686.272
								</td>
							</tr>
						</tbody>
					</table>
					<div class="fonte">Fonte: SP-Urbanismo, 2020</div>
				</div>

				<p>De acordo com as projeções, seria possível realizar todos os lançamentos imobiliários nos Setores de Transformação em pouco mais de 20 anos, prazo portanto referencial para o recebimento integral dos 177,4 milhões de Outorga Onerosa. Nesse período, a receita com aluguéis se aproxima do VGV desenhado nos estudos de viabilidade para o Setor Lineu de Paula Machado, demonstrando a pertinência dos preços de potencial construtivo adicional ali praticados.</p>
				<p>Os resultados reiteram que a localização do Jockey Club e as disposições do PIU dão margem a grande atratividade de negócios imobiliários. A região tem forte vocação comercial, mas também deve-se considerar o ordenamento para fins residenciais, muito demandado. Dada a atratividade do mercado, a velocidade de vendas não deve prejudicar os resultados financeiros no caso da escolha dos usos e modelos de negócio.</p>
				<p>Os estudos demonstram também que, independente do modelo de negócio a ser adotado, os Fatores de Planejamento propostos são sensíveis aos indicadores financeiros correntes. Em consequência, a destinação de parte do perímetro do PIU para transformação urbanística e imobiliária permite a geração de receita considerável ao FUNDURB – recursos que poderão ser utilizados na execução das intervenções públicas em outras regiões da cidade, equalizando-se, portanto, os ganhos privados com os ganhos públicos proporcionados no âmbito do PIU Jockey Club.</p>
			</section>
		</section>

		<section id="consulta-6">
			<h2 class="titulo" indent=1>6. Modelo de Gestão democrática</h2>
			<comments v-if="consultaAtiva" :attr="{ id: 1600, context:'Consulta | 6. Modelo de Gestão democrática' }" />
			<p>Dentre as estrat&eacute;gias do Plano Diretor Estrat&eacute;gico (PDE), tem destaque o fortalecimento da participa&ccedil;&atilde;o popular nas decis&otilde;es dos rumos da cidade, considerando as diversas inst&acirc;ncias e por meio de diferentes instrumentos de participa&ccedil;&atilde;o e controle social. Tais estrat&eacute;gias garantem a participa&ccedil;&atilde;o de representantes dos diferentes segmentos da popula&ccedil;&atilde;o de forma direta ou por interm&eacute;dio de associa&ccedil;&otilde;es representativas, nos processos de planejamento e gest&atilde;o da cidade, de realiza&ccedil;&atilde;o de investimentos p&uacute;blicos e na elabora&ccedil;&atilde;o, implementa&ccedil;&atilde;o e avalia&ccedil;&atilde;o de planos, programas e projetos de desenvolvimento urbano.</p>
			<p>O PDE definiu, no artigo 136, que os PIUs elaborados pelo Poder P&uacute;blico dever&atilde;o apresentar propostas de transforma&ccedil;&otilde;es urban&iacute;sticas, econ&ocirc;micas e ambientais no per&iacute;metro onde for aplicado o instrumento, cabendo ao PIU indicar os objetivos priorit&aacute;rios da interven&ccedil;&atilde;o, as propostas relativas a aspectos urban&iacute;sticos, ambientais, sociais, econ&ocirc;mico-financeiros e modelo de gest&atilde;o democr&aacute;tica que contemple mecanismos de participa&ccedil;&atilde;o e controle social e instrumentos para monitoramento e avalia&ccedil;&atilde;o das a&ccedil;&otilde;es.</p>
			<p>O Modelo de Gest&atilde;o Democr&aacute;tica, de modo geral, considera informa&ccedil;&otilde;es como as diretrizes de desenvolvimento urbano, os par&acirc;metros urban&iacute;sticos e o programa de interven&ccedil;&otilde;es previsto para propor os mecanismos de controle social e monitoramento dos resultados do projeto para o equipamento e a regi&atilde;o em que est&aacute; inserido.</p>
			<p>Neste projeto em particular, o PIU estabelece diretrizes e par&acirc;metros para uma &aacute;rea privada de propriedade do Jockey Club de S&atilde;o Paulo, que ser&aacute; transformada conforme as prioridades e disponibilidade de recursos desta organiza&ccedil;&atilde;o. Tampouco h&aacute; neste projeto um programa de interven&ccedil;&otilde;es, que demande a defini&ccedil;&atilde;o de prioridades e a fiscaliza&ccedil;&atilde;o da implanta&ccedil;&atilde;o de obras relacionadas ao projeto. Em consequ&ecirc;ncia dessas caracter&iacute;sticas, o PIU Jockey n&atilde;o define nenhum Instrumento de Ordenamento e Reestrutura&ccedil;&atilde;o Urbana espec&iacute;fico para veicular suas disposi&ccedil;&otilde;es, sendo estas diretamente aplic&aacute;veis ap&oacute;s a edi&ccedil;&atilde;o do decreto. Nestas condi&ccedil;&otilde;es, n&atilde;o h&aacute; previs&atilde;o no PIU Jockey para constitui&ccedil;&atilde;o de um Conselho Gestor, pois n&atilde;o existem elementos t&iacute;picos da natureza e compet&ecirc;ncia deste tipo de colegiado.</p>
			<p> Tal caracter&iacute;stica, no entanto, n&atilde;o impede que a sociedade civil organizada cumpra seu papel de monitoramento dos resultados do projeto em rela&ccedil;&atilde;o ao desenvolvimento urbano e ambiental da regi&atilde;o, pois permanecem ativas as demais inst&acirc;ncias da democracia participativa que atuam em n&iacute;vel local e municipal com atribui&ccedil;&otilde;es associadas &agrave; pol&iacute;tica urbana municipal, sendo estes canais preferenciais para o acompanhamento das transforma&ccedil;&otilde;es pretendidas pelo projeto e, eventualmente, para a proposi&ccedil;&atilde;o de corre&ccedil;&otilde;es e ajustes para que os objetivos do PIU sejam alcan&ccedil;ados. Dentre estas inst&acirc;ncias, podemos destacar:</p>

			<ul>
				<li>Conselho Municipal de Política Urbana – CMPU;</li>
				<li>Conselho do Fundo Municipal de Desenvolvimento Urbano – FUNDURB;</li>
				<li>Conselho Municipal de Meio Ambiente e Desenvolvimento Sustentável – CADES (constituído em nível municipal e em cada subprefeitura);</li>
				<li>Conselho Participativo Municipal – CPM.</li>
			</ul>
			<p>As contribuições da sociedade civil, recebidas durante o processo de desenvolvimento deste PIU através do processo participativo (consultas públicas, apresentações no CPM e CADES Butantã e no CMPU) revelaram diversas organizações atuando na região, que ajudaram a modelar a presente proposta e que certamente continuarão ativas e vigilantes após a edição do decreto regulamentador da ZOE Jockey Club.</p>
		</section>

		<section id="commentsLoader" ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && consultaAtiva" :attr="{ id:commentId(),context:'Comentarios' }"></Comments>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import Imagem from '@/components/Imagem'
import Tabela from '@/components/Tabela'
import TabelaCsv from '@/components/TabelaCsv'
import BtnFixedUrl from '@/components/BtnFixedUrl'
import Indice from '@/components/Indice.0.0.1'

export default {
	name: 'JockeyClub2Consulta',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			novoIndice: true
		}
	},
	components: {
		Comments,
		CommentsLoader,
		PageTop,
		Indice,
		Apoio,
		Imagem,
		Tabela,
		TabelaCsv,
		BtnFixedUrl
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../../variables';
@import '../../consulta';
@import '../../oldstylestoprint';
@import '../../assets/styles/tabela';
.notas {
	font-family: $grotesca;
	font-size: small;
	padding: 0
}
.jockey-club2-consulta {
	// p a {	word-break: break-all; }
	&__table {
		margin: 1rem auto;
		max-width: 700px;
	}
	&__quadro-contexto {
		ol li, ul li {
			font-size: small;
			font-family: $grotesca;
			margin: 0 auto;
		}
	}
	&__btn-fixed {
		@media (max-width: 800px) {
			display: none;
		}
	}
	.formula {
		font-family: $grotesca;
		font-size: small;
		font-style: italic;
		padding: 0.25rem;
		background-color: $cinza-3;
		border-radius: 2px;
		&.destaque {
			font-size: medium;
			text-align: center;
			padding: 0.5rem;
		}
		&.svg-container {
			display: flex;
			max-width: 700px;
			margin: 1rem auto;
			padding: 1rem 0;
			img {
				margin: auto;
				min-width: 165px;
			}
		}
	}
}
</style>
