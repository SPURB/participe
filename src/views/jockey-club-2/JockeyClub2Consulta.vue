<template>
	<div class="jockey-club2-consulta" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/jockey2_244w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Jockey Club 2</div></template>
			<template slot="subtitulo"><div>Segunda consulta pública</div></template>
		</PageTop>
		<btn-fixed-url url="/jockey-club-2/minuta" text="MINUTA" target="_self" />
		<Indice :titulos="titulosLimpo"></Indice>
		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
				<p>O lote onde est&aacute; situado o Hip&oacute;dromo de Cidade Jardim foi classificado como uma Zona de Ocupa&ccedil;&atilde;o Especial &ndash; ZOE pela Lei de Zoneamento (Lei de Parcelamento, Uso e Ocupa&ccedil;&atilde;o do Solo &ndash; LPUOS - n&ordm; 16.402/2016). As Zonas de Ocupa&ccedil;&atilde;o Especial s&atilde;o por&ccedil;&otilde;es do territ&oacute;rio destinadas a abrigar predominantemente atividades que, por suas caracter&iacute;sticas &uacute;nicas, necessitem de par&acirc;metros especiais de parcelamento, uso e ocupa&ccedil;&atilde;o do solo, como aeroportos, centros de conven&ccedil;&atilde;o, grandes &aacute;reas de lazer, recrea&ccedil;&atilde;o e esportes.</p>
				<p>O artigo 15 da Lei de Zoneamento determina que os par&acirc;metros urban&iacute;sticos especiais das ZOEs sejam definidos atrav&eacute;s de&nbsp;<a href="https://gestaourbana.prefeitura.sp.gov.br/projetos-de-intervencao-urbana-piu/" target="_blank">Projetos de Interven&ccedil;&atilde;o Urbana (PIUs)</a>. Os PIUs s&atilde;o estudos t&eacute;cnicos que embasam a proposi&ccedil;&atilde;o de par&acirc;metros urban&iacute;sticos em per&iacute;metros espec&iacute;ficos do territ&oacute;rio do munic&iacute;pio e, em determinados casos, de interven&ccedil;&otilde;es destinadas a desenvolver e melhorar as condi&ccedil;&otilde;es urbanas, ambientais e sociais no contexto urbano desses projetos.</p>
				<p>O artigo 4&ordm; do Decreto Municipal n&ordm; 56.901/2016, que regulamenta os PIUs, traz a composi&ccedil;&atilde;o referencial do conte&uacute;do desses projetos, englobando a Proposta de Ordenamento Urban&iacute;stico, a Modelagem Econ&ocirc;mica, o Modelo de Gest&atilde;o Democr&aacute;tica e demais itens que se fa&ccedil;am necess&aacute;rios em cada caso. A partir desta composi&ccedil;&atilde;o b&aacute;sica, o processo espec&iacute;fico de desenvolvimento de cada PIU revelar&aacute; o conte&uacute;do mais apropriado a suas caracter&iacute;sticas, apresentando os crit&eacute;rios adotados para a composi&ccedil;&atilde;o definitiva.</p>
				<p>O Projeto de Interven&ccedil;&atilde;o Urbana do Hip&oacute;dromo de Cidade Jardim &ndash; PIU Jockey Club, a ser apresentado neste volume, tem como objetivo a regula&ccedil;&atilde;o dos par&acirc;metros urban&iacute;sticos especiais aplic&aacute;veis na ZOE correspondente ao lote onde se situa este importante equipamento, possibilitando que seu ordenamento e desenvolvimento ocorra em conson&acirc;ncia com a pol&iacute;tica urbana do munic&iacute;pio. Assim, o PIU Jockey Club n&atilde;o deve ser confundido com o licenciamento de um empreendimento concreto a ser implantado no Hip&oacute;dromo de Cidade Jardim, mas sim como um processo t&eacute;cnico e participativo que definir&aacute; as regras para o desenvolvimento deste equipamento nos pr&oacute;ximos anos.</p>
				<p>O PIU Jockey Club &eacute; uma iniciativa da Prefeitura de S&atilde;o Paulo que incidir&aacute; sobre um dos maiores equipamentos privados da cidade, cujas caracter&iacute;sticas funcionais, arquitet&ocirc;nicas, hist&oacute;ricas e paisag&iacute;sticas excepcionais s&atilde;o de interesse p&uacute;blico, constituindo-se como um patrim&ocirc;nio paulistano e uma importante refer&ecirc;ncia para a regi&atilde;o onde se situa.</p>
		</section>
		<section>
			<h2 class="titulo" indent="1">1. Etapas do PIU Jockey Club</h2>
				<p>O PIU Jockey Club &eacute; desenvolvido conforme a estrutura definida no decreto regulamentador dos Projetos de Interven&ccedil;&atilde;o Urbana, estando previstas duas principais fases.</p>
				<p>O in&iacute;cio do processo se d&aacute; antes mesmo do desenvolvimento do PIU. A partir de uma iniciativa da Prefeitura de S&atilde;o Paulo ou de um ente externo, que pode ser uma organiza&ccedil;&atilde;o privada, da sociedade civil organizada ou mesmo de outra esfera de governo e, estando a &aacute;rea objeto da proposta enquadrada dentro das condi&ccedil;&otilde;es previstas na legisla&ccedil;&atilde;o para a realiza&ccedil;&atilde;o deste tipo de projeto, &eacute; realizada uma fase pr&eacute;via.</p>
				<p>Nesta fase pr&eacute;via, a Prefeitura ou o proponente externo apresentam um Diagn&oacute;stico Socio-territorial e Ambiental e o Programa de Interesse P&uacute;blico, buscando identificar as principais caracter&iacute;sticas da &aacute;rea e de seu entorno, as car&ecirc;ncias, qualidades e potencialidades e, a partir destas caracter&iacute;sticas, identificar qual &eacute; o programa do projeto, ou seja, qual &eacute; o papel daquela &aacute;rea, regi&atilde;o ou equipamento para a cidade e quais seriam suas contribui&ccedil;&otilde;es para o desenvolvimento urbano na escala do munic&iacute;pio ou do bairro. Esse conte&uacute;do, chamado Elementos Pr&eacute;vios, &eacute; ent&atilde;o submetido a uma Consulta P&uacute;blica.</p>
				<p>A partir dos elementos pr&eacute;vios e das contribui&ccedil;&otilde;es recebidas nesta Consulta P&uacute;blica inicial, a Secretaria Municipal de Desenvolvimento Urbano avalia se o Projeto de Interven&ccedil;&atilde;o Urbana proposto &eacute; compat&iacute;vel com as diretrizes definidas no Plano Diretor Estrat&eacute;gico do Munic&iacute;pio de S&atilde;o Paulo &ndash; PDE (Lei n&ordm;16.050/2014) e decide se o projeto dever&aacute; ser desenvolvido ou arquivado.</p>
				<p>Caso seja autorizado, tem-se in&iacute;cio a segunda fase por meio da qual o PIU &eacute; desenvolvido e submetido a uma nova Consulta P&uacute;blica, onde os par&acirc;metros e interven&ccedil;&otilde;es propostas s&atilde;o apresentados e justificados para que a popula&ccedil;&atilde;o possa opinar e contribuir para seu aperfei&ccedil;oamento. Esta fase pode ser realizada em uma &uacute;nica etapa ou quantas mais forem necess&aacute;rias, de modo que, ao final, seja consolidado o documento t&eacute;cnico que apresenta as propostas do PIU, bem como a pe&ccedil;a jur&iacute;dica que possibilitar&aacute; a aplica&ccedil;&atilde;o das regras espec&iacute;ficas e a implanta&ccedil;&atilde;o do programa de interven&ccedil;&otilde;es do projeto. A pe&ccedil;a jur&iacute;dica pode ser um Projeto de Lei ou um Decreto Municipal, ambos de iniciativa exclusiva do Poder Executivo Municipal, que define a modalidade mais adequada a cada PIU, conforme as regras vigentes na legisla&ccedil;&atilde;o e as melhores t&eacute;cnicas jur&iacute;dicas.</p>
				<p>Seguindo esse roteiro, o PIU Jockey Club teve in&iacute;cio em outubro de 2019, com a determina&ccedil;&atilde;o da Prefeitura para a elabora&ccedil;&atilde;o dos elementos pr&eacute;vios pela equipe t&eacute;cnica da SP Urbanismo. A Consulta P&uacute;blica Pr&eacute;via foi realizada entre os dias 18 de outubro e 9 de novembro de 2019, tendo recebido 107 contribui&ccedil;&otilde;es de 56 cidad&atilde;os e pode ser acessada em</p>
				<p>Ap&oacute;s analisar os elementos pr&eacute;vios e as contribui&ccedil;&otilde;es recebidas, a Secretaria Municipal de Desenvolvimento Urbano &ndash; SMDU autorizou o desenvolvimento do PIU Jockey Club em janeiro de 2020. No mesmo m&ecirc;s, foi constitu&iacute;do um Grupo T&eacute;cnico composto por representantes de diversos &oacute;rg&atilde;os municipais, com objetivo de discutir o conte&uacute;do do PIU Jockey. Fazem parte deste grupo as Secretarias Municipais de Desenvolvimento Urbano, Cultura, Verde e Meio Ambiente, Transportes e Subprefeituras.</p>
				<p>Dando sequ&ecirc;ncia ao rito previsto no decreto regulamentador, a SP Urbanismo publicou em abril de 2020 no Di&aacute;rio oficial da Cidade &ndash; D.O.C., conforme as disposi&ccedil;&otilde;es do artigo 3&ordm;, as informa&ccedil;&otilde;es b&aacute;sicas do projeto a ser desenvolvido: o per&iacute;metro de interven&ccedil;&otilde;es, as caracter&iacute;sticas b&aacute;sicas da proposta e as fases de elabora&ccedil;&atilde;o do projeto. Estas informa&ccedil;&otilde;es s&atilde;o apresentadas a seguir.</p>
		</section>
		<section>
			<h2 class="titulo" indent="1">2. Informações básicas do PIU Jockey</h2>
			<p>Em cumprimento à determinação do artigo 3º do Decreto 56.901/2016, foram publicadas no Diário Oficial da Cidade - DOC de 09 de abril de 2020 as informações contidas nos itens 2.1, 2.2 e 2.3 desta presente Seção. A publicação foi transcrita na íntegra nos itens seguintes, complementados por uma justificativa técnica para a adoção de uma nova estratégia para a disponibilização dos materiais de elaboração do PIU Jockey Club à segunda consulta pública.</p>

			<h3>2.1 Definição do perímetro de intervenção</h3>
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
						{ fundo: 'white', borda: 'black', descricao: 'Projetos de Regulação Urbanística Excepcional' },
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
			<h3>2.2 Características básicas da proposta</h3>
			<p>As propostas constituintes do PIU Jockey Club deverão ser compatíveis com a Política Urbana Municipal, buscando contribuir para a utilização mais intensiva o ordenada do Hipódromo de Cidade Jardim pela população, para o desenvolvimento urbano e ambiental da região e para o atendimento mais amplo das demandas da população.</p>
			<p>As caracter&iacute;sticas b&aacute;sicas do PIU Jockey Club s&atilde;o as seguintes:</p>

			<h5>&nbsp;1) PAR&Acirc;METROS URBAN&Iacute;STICOS</h5>
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

			<h3>2.4 Fases de elaboração do projeto</h3>
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
			<p>As consultas p&uacute;blicas, realizadas por meios eletr&ocirc;nicos atrav&eacute;s da disponibiliza&ccedil;&atilde;o do conte&uacute;do na rede mundial de computadores &ndash; internet - ser&atilde;o divulgadas no portal da Prefeitura de S&atilde;o Paulo (<a href="http://www.capital.sp.gov.br/">http://www.capital.sp.gov.br/</a>), na p&aacute;gina da Secretaria Municipal de Desenvolvimento Urbano &ndash; SMDU (<a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/urbanismo/">https://www.prefeitura.sp.gov.br/cidade/secretarias/urbanismo/</a>), e na plataforma Gest&atilde;o Urbana SP (<a href="https://gestaourbana.prefeitura.sp.gov.br/">https://gestaourbana.prefeitura.sp.gov.br/</a>). O conte&uacute;do a ser publicado constar&aacute; da integralidade dos estudos e propostas t&eacute;cnicas desenvolvidos para embasar a propositura dos par&acirc;metros urban&iacute;sticos incidentes na ZOE do Hip&oacute;dromo de Cidade Jardim, com linguagem acess&iacute;vel e simplificada, podendo ser apoiada por outros conte&uacute;dos que auxiliem na comunica&ccedil;&atilde;o das propostas &agrave; popula&ccedil;&atilde;o.</p>
			<p>Os di&aacute;logos colegiados ser&atilde;o realizados com os conselhos municipais institu&iacute;dos para a finalidade de discuss&atilde;o e fiscaliza&ccedil;&atilde;o da pol&iacute;tica urbana municipal, o CMPU &ndash; Conselho Municipal de Pol&iacute;tica Urbana, de regula&ccedil;&atilde;o urban&iacute;stica,&nbsp; a CTLU &ndash; C&acirc;mara T&eacute;cnica de Legisla&ccedil;&atilde;o Urban&iacute;stica, e das pol&iacute;ticas p&uacute;blicas municipais incidentes nos territ&oacute;rios das subprefeituras, o CPM-BT &ndash; Conselho Participativo Municipal da Subprefeitura do Butant&atilde;, o CADES-BT &ndash; Conselho Municipal de Meio Ambiente e Desenvolvimento Sustent&aacute;vel da Subprefeitura do Butant&atilde;.&nbsp; O desenvolvimento do projeto e o processo participativo poder&atilde;o ainda demandar a oitiva de outros colegiados competentes.</p>
			<p>Os di&aacute;logos tem&aacute;ticos ser&atilde;o realizados com:</p>
			<p>As secretarias e demais &oacute;rg&atilde;os municipais competentes, cujas atribui&ccedil;&otilde;es se relacionem ao escopo de desenvolvimento do PIU Jockey Club, subsidiando a propositura conjunta de interven&ccedil;&otilde;es no &acirc;mbito do projeto ou o planejamento de pol&iacute;ticas setoriais complementares ao PIU, incidentes no mesmo territ&oacute;rio;</p>
			<p>Entidades de classe, associa&ccedil;&otilde;es de moradores e demais organiza&ccedil;&otilde;es participantes dos debates do projeto, subsidiando a propositura de interven&ccedil;&otilde;es que promovam o desenvolvimento urbano e ambiental sustent&aacute;vel e atendam de forma mais ampla as demandas da sociedade.</p>
			<p>Toda a documenta&ccedil;&atilde;o t&eacute;cnica e relativa ao registro das reuni&otilde;es, debates e contribui&ccedil;&otilde;es individuais dever&atilde;o ser publicadas na p&aacute;gina do PIU Jockey Club no s&iacute;tio eletr&ocirc;nico Gest&atilde;o urbana SP (<a href="https://gestaourbana.prefeitura.sp.gov.br/piu-jockey-club/">https://gestaourbana.prefeitura.sp.gov.br/piu-jockey-club/</a>) e no Sistema de Monitoramento dos PIUs (<a href="https://gestaourbana.prefeitura.sp.gov.br/estruturacao-territorial/piu/piu-monitoramento/">https://gestaourbana.prefeitura.sp.gov.br/estruturacao-territorial/piu/piu-monitoramento/</a>), garantindo a necess&aacute;ria transpar&ecirc;ncia ao processo.</p>
			<p>(Fim da Publica&ccedil;&atilde;o de 09 de abril de 2020)</p>

			<h3>Revisões após a publicação</h3>
			<p>Na publicação transcrita nos itens 2.1, 2.2 e 2.3 da presente Seção, o PIU Jockey Club seria elaborado em duas fases: Proposta Preliminar e Proposta Final. Nesta estrutura, o debate público abarcaria os parâmetros urbanísticos e o programa de intervenções, sendo este conteúdo revisto e reapresentado em conjunto com o decreto de regulação do perímetro na fase 2. No entanto, com o decorrer do processo de desenvolvimento do PIU, conforme se verá na Proposta de Ordenamento Urbanístico, algumas das premissas iniciais não se confirmaram e o programa de intervenções revelou-se inviável. Com isso, o PIU Jockey Club passou a tratar unicamente das diretrizes e parâmetros urbanísticos aplicáveis na ZOE do hipódromo, possibilitando que o respectivo decreto fosse apresentado à população em conjunto com a Proposta de Ordenamento Urbanístico do PIU, ou seja, mediante uma única fase que abarcasse tanto a formulação quanto a consolidação do PIU, sem prejuízo do procedimento cabível aos PIU nos termos do Decreto nº 56.901/2016.</p>

			<p>Em função das mesmas motivações, o Perímetro de Intervenções, que no momento da publicação abarcava as áreas públicas do entorno do hipódromo em ambas as margens do Rio Pinheiros e junto às estações do metrô e da CPTM, perdeu sua função no projeto, já que não haverá mais um programa de intervenções como previsto nas diretrizes iniciais, e os recursos obtidos através da alienação da outorga do direito de construir serão revertidos em sua integralidade ao FUNDURB. Assim, o PIU Jockey passa a ter como único perímetro o de “Regulação Urbanística Excepcional”, indicado no mesmo mapa da publicação.</p>
			<p>Destaca-se que esta alteração não traz prejuízos à discussão pública do projeto, pois a oferta de materiais contendo a íntegra do conteúdo específico deste PIU - conteúdo técnico urbanístico e econômico em conjunto com proposta de regulação mediante Decreto - permitirá maior foco na apresentação dos elementos do PIU para a população, favorecendo a compreensão sobre suas implicações regulatórias para o desenvolvimento do hipódromo e de seu entorno urbano, possibilitando assim que as contribuições do processo participativo sejam mais aprofundadas e assertivas.</p>
		</section>
		<section>
			<h2 class="titulo" indent="1">3. Síntese das contribuições da etapa prévia</h2>
			<p>As contribuições da população na Consulta Pública da Etapa Prévia trouxeram sugestões de atividades potenciais que possam funcionar de forma compatível com as atividades do hipódromo, como atividades culturais, educativas, de gastronomia e conveniência e, principalmente, a criação de um parque público. A melhoria das condições de acessibilidade de pedestres e ciclistas ao hipódromo também foi destacada, assim como as questões ambientais, com sugestões relativas à arborização, drenagem e à conexão do hipódromo com as margens do Rio Pinheiros. </p>
			<p>Contudo, a maioria das contribuições alertaram para os impactos dos eventos realizados pelo Jockey Club de São Paulo no cotidiano dos moradores de residências vizinhas, com queixas relativas a ruídos, trânsito, insegurança e atividades ilícitas.</p>
			<p>Assim, o desafio deste projeto consiste na formulação de propostas equilibradas entre parâmetros e intervenções que possibilitem o uso mais intensivo do hipódromo enquanto equipamento de interesse público para a cidade no contexto contemporâneo, além da compatibilidade com as características do entorno, buscando a diminuição dos conflitos atuais e o desenvolvimento urbano sustentável da região.</p>
			<p>Com base nas informações dos diagnósticos, do Programa de Interesse Público e das contribuições da Etapa Prévia, a SP Urbanismo formulou a Proposta de Ordenamento Urbanístico, submetida à análise das secretarias participantes do Grupo Técnico do PIU Jockey.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">4. Proposta de ordenamento urbanístico</h2>
			<p>A proposta de ordenamento urbanístico é o principal componente do Projeto de Intervenção Urbana, definindo as diretrizes e os parâmetros urbanísticos compatíveis com os cenários de transformação do Hipódromo de Cidade Jardim. Esta proposta está formulada a partir dos seguintes condicionantes: Situação Fundiária, Tombamento, Transferência de Potencial Construtivo e o Plano Diretor do Jockey Club de São Paulo.</p>

			<h3>4.1	Situação fundiária</h3>
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

			<h3>4.2 Tombamento</h3>
			<p>O conjunto arquitet&ocirc;nico do Jockey Club de S&atilde;o Paulo foi tombado pelo CONDEPHAAT (Conselho de Defesa do Patrim&ocirc;nio Hist&oacute;rico, Arqueol&oacute;gico, Art&iacute;stico e Tur&iacute;stico do Estado de S&atilde;o Paulo) atrav&eacute;s da Resolu&ccedil;&atilde;o SC97/10, de 19/11/2010 e tamb&eacute;m pelo CONPRESP (Conselho Municipal de Preserva&ccedil;&atilde;o do Patrim&ocirc;nio Hist&oacute;rico, Cultural e Ambiental da Cidade de S&atilde;o Paulo), atrav&eacute;s da Resolu&ccedil;&atilde;o 05/2013. Os dois documentos destacam o papel arquitet&ocirc;nico, hist&oacute;rico e simb&oacute;lico do Jockey Club para a cidade de S&atilde;o Paulo e descrevem os bens tombados, edifica&ccedil;&otilde;es cadastradas, &aacute;reas non aedificandi e &aacute;rea envolt&oacute;ria, conforme Mapa 2. Tamb&eacute;m s&atilde;o tombados os alto-relevos de autoria de Victor Brecheret incorporados ao pr&eacute;dio da arquibancada social e ao pr&eacute;dio do antigo vesti&aacute;rio de jockeys, este &uacute;ltimo n&atilde;o inclu&iacute;do no tombamento. Conforme expresso em ambas as resolu&ccedil;&otilde;es, qualquer interven&ccedil;&atilde;o que se planeje realizar no interior e &aacute;rea envolt&oacute;ria do Jockey Club deve ser aprovada pelos &oacute;rg&atilde;os de preserva&ccedil;&atilde;o.</p>
			<p>As resolu&ccedil;&otilde;es especificam 17 edifica&ccedil;&otilde;es ou conjuntos de edifica&ccedil;&otilde;es tombadas e 9 edifica&ccedil;&otilde;es ou conjuntos de edifica&ccedil;&otilde;es a serem cadastradas, especificando o escopo para tal feito. Todavia, n&atilde;o especificam se as edifica&ccedil;&otilde;es cadastradas devem ser necessariamente preservadas ou se podem ser modificadas ou mesmo demolidas. H&aacute; ainda um terceiro conjunto de edifica&ccedil;&otilde;es n&atilde;o mencionadas nas resolu&ccedil;&otilde;es, sobre as quais este projeto considera que n&atilde;o incidem restri&ccedil;&otilde;es quanto a eventuais altera&ccedil;&otilde;es ou mesmo demoli&ccedil;&otilde;es. Para ambas categorias ser&aacute; necess&aacute;ria a realiza&ccedil;&atilde;o de consultas aos respectivos &oacute;rg&atilde;os para verificar o entendimento preliminar aqui exposto.</p>
			<p>Al&eacute;m do tombamento do tra&ccedil;ado da pista do hip&oacute;dromo, as resolu&ccedil;&otilde;es destacam a import&acirc;ncia da preserva&ccedil;&atilde;o das caracter&iacute;sticas das &aacute;reas n&atilde;o edificadas situadas no miolo das pistas (denominada Pi&atilde;o do Prado) e na Vila H&iacute;pica, para preservar os visuais tomados a partir das arquibancadas e garantir a visibilidade das estruturas protegidas. Nestas &aacute;reas, n&atilde;o ser&atilde;o admitidas constru&ccedil;&otilde;es em sobressolo, excetuada a implanta&ccedil;&atilde;o de elementos de sinaliza&ccedil;&atilde;o de pr&aacute;ticas esportivas.</p>
			<p>Como visto, as diretrizes de tombamento do conjunto do Jockey Club s&atilde;o determinantes para a proposta de ordenamento urban&iacute;stico do PIU, considerando as &aacute;reas que podem ser restauradas para possibilitar a implanta&ccedil;&atilde;o de novos usos, &aacute;reas onde n&atilde;o &eacute; permitido construir, &aacute;reas com significativas restri&ccedil;&otilde;es a transforma&ccedil;&otilde;es e outras &aacute;reas que podem ter uma transforma&ccedil;&atilde;o mais significativa, incorporando novos usos e constru&ccedil;&otilde;es. A s&iacute;ntese das diretrizes de tombamento est&aacute; expressa no Mapa 2 a seguir:</p>

			<imagem
				:max-width="'700px'"
				:dados="{
				titulo: 'Mapa 2 - Tombamento do Conjunto arquitetônico do Jockey Club, de acordo com Resolução SC97/10 do CONDEPHAAT',
				tipo: 'mapa',
				url: src('arquivos/jockey-club-2/mapas/mapas2.jpg'),
				legenda: [
					{ fundo: '#A9C8CA', descricao: 'Área non aedificandi' },
					{ fundo: '#E9E5B4', descricao: 'Paddock' },
					{ fundo: '#6D153B', descricao: 'Edifícios c/ alto-relevos de Brecheret' },
					{ fundo: '#B8BBE7', descricao: 'Área envoltória' },
					{ fundo: '#FEF235', descricao: 'Edificações não mecionados pelo decreto de tombamento' },
					{ fundo: '#FC1029', descricao: 'Bens tombados' },
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
					{ fundo: '#EC9426', descricao: 'Edificações registradas', 'legenda__titulo': true },
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

			<h3>4.3	Transferência do direito de construir</h3>
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

			<h3>4.4	Plano Diretor do Jockey Club de São Paulo 2014-2023</h3>
			<p>O Plano Diretor do Jockey Club de São Paulo foi desenvolvido como uma das ações necessárias para a obtenção da Declaração de Potencial Construtivo Passível de Transferência, vinculada à assunção de obrigações pelo proprietário quanto ao restauro e preservação de bens imóveis protegidos.</p>
			<p>O Plano apresenta um histórico da instituição, do turfe e da criação do Hipódromo de Cidade Jardim, relatando a perda de popularidade do esporte e das receitas de apostas (poules), bem como as ações estratégicas previstas para sua recuperação financeira e o restauro dos edifícios e infraestrutura do hipódromo. O Plano mostra os eventos já realizados no local, como shows, festas e exposições, inseridos em uma visão estratégica de longo prazo que projeta a introdução de novos usos diversificados, simultaneamente à permanência das atividades do turfe, configurando no local um centro de entretenimento multifuncional. Esta visão estratégica, por sua vez, tem como referência experiências bem sucedidas em países como Austrália e Argentina, onde as corridas de cavalo são o ápice de roteiros de entretenimento que incluem gastronomia, cultura, jogos e compras.</p>
			<p>O Plano traz também um levantamento detalhado dos edifícios e outros elementos existentes no hipódromo, seu uso pretérito, atual e futuro, a indicação de fluxos de circulação do público, de logística e bolsões de estacionamento, entre outras informações que possibilitam uma compreensão sobre o funcionamento do hipódromo, e que subsidiaram a proposta de setorização do hipódromo.</p>

			<h3>4.5	Partido urbanístico</h3>
			<p>O partido urban&iacute;stico pode ser definido como o conjunto de decis&otilde;es ou escolhas da equipe t&eacute;cnica para responder aos aspectos trazidos pelos diagn&oacute;sticos e programa de interesse p&uacute;blico, tendo como base os condicionantes do projeto, o panorama fundi&aacute;rio e as estrat&eacute;gias de desenvolvimento urbano presentes no Plano Diretor Estrat&eacute;gico - PDE.</p>
			<p>O partido para o PIU Jockey Club parte de tr&ecirc;s pilares: a Macro&aacute;rea de Estrutura&ccedil;&atilde;o Metropolitana (MEM), as caracter&iacute;sticas do hip&oacute;dromo e as caracter&iacute;sticas do contexto urbano.</p>
			<p>A Macro&aacute;rea de Estrutura&ccedil;&atilde;o Metropolitana &ndash; MEM &ndash; &eacute; uma das oito macro&aacute;reas que representam a estrat&eacute;gia de ordenamento territorial do PDE. Em cada uma dessas macro&aacute;reas, est&atilde;o definidos diferentes objetivos que norteiam seu desenvolvimento a longo prazo, considerando seus desafios e pap&eacute;is dentro de uma estrat&eacute;gia de desenvolvimento urbano sustent&aacute;vel que engloba o conjunto da cidade, buscando a melhoria das condi&ccedil;&otilde;es urbanas, sociais, ambientais, econ&ocirc;micas, de infraestrutura e de mobilidade, entre outras.</p>
			<p>A MEM &eacute; um territ&oacute;rio cujo desenvolvimento esteve historicamente ligado &agrave;s orlas fluviais e ferrovi&aacute;rias da cidade e &agrave; forma&ccedil;&atilde;o das principais &aacute;reas industriais, concentrando atividades e elementos de infraestrutura de import&acirc;ncia metropolitana. &nbsp;Este territ&oacute;rio, em sua maioria, possui baixas densidades populacionais e passa, h&aacute; algumas d&eacute;cadas, por processos de transforma&ccedil;&atilde;o das atividades econ&ocirc;micas, constituindo-se como uma das regi&otilde;es priorit&aacute;rias para o desenvolvimento da cidade nos pr&oacute;ximos anos. Nesta macro&aacute;rea, os objetivos de desenvolvimento indicam que a infraestrutura existente deve ter um maior aproveitamento, com maior adensamento populacional, buscando equilibrar a rela&ccedil;&atilde;o entre moradias e postos de trabalho e qualificar os espa&ccedil;os p&uacute;blicos e o meio ambiente.</p>
			<p>Na regi&atilde;o do Hip&oacute;dromo de Cidade Jardim, onde bairros jardins exclusivamente residenciais se mesclam a centralidades de neg&oacute;cios, com&eacute;rcio e servi&ccedil;os, em meio a importantes avenidas e &agrave; rede estrutural de transportes p&uacute;blicos, esses objetivos se traduzem na possibilidade de ampliar as densidades e as atividades n&atilde;o residenciais e preservar sua qualidade ambiental.</p>
			<p>O Hip&oacute;dromo de Cidade Jardim, a exemplo de seus cong&ecirc;neres, &eacute; um equipamento de grande escala, com caracter&iacute;sticas volum&eacute;tricas, funcionais e log&iacute;sticas muito diversas entre os diversos locais que abriga. A interdepend&ecirc;ncia funcional entre as cocheiras e &aacute;reas de apoio, as tribunas e outras &aacute;reas de recep&ccedil;&atilde;o do p&uacute;blico e das pistas de corridas determina que este conjunto permane&ccedil;a coeso para que o hip&oacute;dromo continue funcionando, mesmo em um contexto de conviv&ecirc;ncia com outras atividades, limitando, por exemplo, as possibilidades de subdivis&atilde;o da &aacute;rea. Por outro lado, existem &aacute;reas atualmente desativadas ou cujo uso atual n&atilde;o possui um v&iacute;nculo funcional direto com o hip&oacute;dromo, sendo estas as &aacute;reas prop&iacute;cias para recepcionar transforma&ccedil;&otilde;es mais intensivas no conjunto.</p>
			<p>Assim, as caracter&iacute;sticas do hip&oacute;dromo determinam a necessidade de defini&ccedil;&atilde;o de diferentes estrat&eacute;gias para seus diferentes locais, coordenadas para que o conjunto deste equipamento possa preservar suas caracter&iacute;sticas funcionais e hist&oacute;ricas, ao mesmo tempo em que possa se adequar &agrave;s din&acirc;micas contempor&acirc;neas da cidade.</p>
			<p>As caracter&iacute;sticas do contexto urbano indicam que as transforma&ccedil;&otilde;es no hip&oacute;dromo sejam compat&iacute;veis com as particularidades do entorno, de modo que, ao mesmo tempo em que permitam que o equipamento se integre mais &agrave;s din&acirc;micas urbanas locais e se torne menos herm&eacute;tico, esta integra&ccedil;&atilde;o ocorra de modo controlado, inibindo conflitos potenciais de conviv&ecirc;ncia com as zonas exclusivamente residenciais e considerando as caracter&iacute;sticas da paisagem natural e constru&iacute;da local.</p>
			<p>Assim, os par&acirc;metros a serem definidos ser&atilde;o particularizados, buscando articular-se tanto com as &aacute;reas residenciais situadas a oeste e sul do hip&oacute;dromo, quanto ao corredor de servi&ccedil;os da Av. Lineu de Paula Machado e ao eixo estrutural do corredor Francisco Morato &ndash; Eus&eacute;bio Matoso.</p>

			<h3>4.6	setorização</h3>
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
				url: src('arquivos/jockey-club-2/mapas/mapa3.jpg'),
				caption: 'Organização interna do hipódromo',
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

			<h3>4.7	Síntese das contribuições do grupo técnico</h3>
			<p>A partir das contribui&ccedil;&otilde;es da popula&ccedil;&atilde;o na Etapa Pr&eacute;via, a proposta inicial do PIU Jockey Club considerava a hip&oacute;tese de implanta&ccedil;&atilde;o de um parque p&uacute;blico no Subsetor Pi&atilde;o do Prado, cuja utiliza&ccedil;&atilde;o se daria fora dos per&iacute;odos de realiza&ccedil;&atilde;o de treinos e corridas. Al&eacute;m de Pi&atilde;o do Prado, que abrigaria campos, quadras e pistas de corrida, o novo parque demandaria a utiliza&ccedil;&atilde;o de &aacute;reas situadas nos subsetores Lineu de Paula Machado e Jos&eacute; Augusto de Queiroz, para a implanta&ccedil;&atilde;o de edifica&ccedil;&otilde;es (administra&ccedil;&atilde;o, sanit&aacute;rios, vesti&aacute;rios, etc), &aacute;reas livres com vegeta&ccedil;&atilde;o arb&oacute;rea e acessos exclusivos.</p>
			<p>Em decorr&ecirc;ncia do aumento da frequ&ecirc;ncia da popula&ccedil;&atilde;o ao conjunto do hip&oacute;dromo, estavam previstas interven&ccedil;&otilde;es urban&iacute;sticas associadas &agrave; melhoria da acessibilidade por pedestres e ciclistas a partir das esta&ccedil;&otilde;es metro-ferrovi&aacute;rias e da infraestrutura ciclovi&aacute;ria existente. Este programa de interven&ccedil;&otilde;es seria suportado por receitas provenientes da venda de potencial construtivo adicional (PCA) aos setores de transforma&ccedil;&atilde;o do PIU, alocados em uma conta segregada do Fundurb.</p>
			<p>A SMDU determinou que o encaminhamento jur&iacute;dico deste PIU fosse realizado via decreto, estando assim limitado ao coeficiente de aproveitamento m&aacute;ximo da MEM (2,0), conforme disp&otilde;e o art. 15, &sect; 1&ordm; da Lei de Zoneamento, e que eventuais interven&ccedil;&otilde;es fossem custeadas por recursos privados, sem utiliza&ccedil;&atilde;o de recursos p&uacute;blicos, considerando que os recursos do Fundurb devem ser empregados prioritariamente em regi&otilde;es com maior vulnerabilidade social, maiores car&ecirc;ncias de infraestrutura urbana e fragilidades ambientais.</p>
			<p>A SMDU ainda esclareceu tamb&eacute;m pormenores relativos &agrave; Declara&ccedil;&atilde;o de Potencial Construtivo pass&iacute;vel de Transfer&ecirc;ncia do Jockey, em especial sua vincula&ccedil;&atilde;o &agrave; integralidade do lote, de modo que, caso haja parcelamento, o documento dever&aacute; ser reeditado para os novos lotes tendo em vista a altera&ccedil;&atilde;o da condi&ccedil;&atilde;o f&aacute;tica que culminou no c&aacute;lculo do Potencial transfer&iacute;vel realizado em 2015..</p>
			<p>A SVMA destacou que o Hip&oacute;dromo de Cidade Jardim n&atilde;o &eacute; uma &aacute;rea definida pelo PDE para implanta&ccedil;&atilde;o de parque p&uacute;blico e que a regi&atilde;o em que o equipamento est&aacute; inserido &nbsp; det&eacute;m os melhores indicadores ambientais da cidade. Reconhece o hip&oacute;dromo como &aacute;rea de interesse ambiental e paisag&iacute;stico do munic&iacute;pio, com potencial de utiliza&ccedil;&atilde;o pela popula&ccedil;&atilde;o atrav&eacute;s da frui&ccedil;&atilde;o p&uacute;blica de determinadas &aacute;reas. No entanto, em rela&ccedil;&atilde;o &agrave; proposta de implanta&ccedil;&atilde;o de um parque p&uacute;blico, a Secretaria se posicionou contrariamente &agrave; proposta, pois avalia que os eventos do turfe coincidem com os dias e hor&aacute;rios de maior utiliza&ccedil;&atilde;o dos parques municipais, diminuindo o alcance de sua frequ&ecirc;ncia por um p&uacute;blico mais amplo. Al&eacute;m disso, avaliou que a implanta&ccedil;&atilde;o e gest&atilde;o de um parque p&uacute;blico no local seria invi&aacute;vel, considerando as condi&ccedil;&otilde;es geol&oacute;gicas da &aacute;rea e as restri&ccedil;&otilde;es das resolu&ccedil;&otilde;es de tombamento, que restringem o plantio de vegeta&ccedil;&atilde;o arb&oacute;rea e a constru&ccedil;&atilde;o de edifica&ccedil;&otilde;es no Pi&atilde;o do Prado.&nbsp;</p>
			<p>O DPH reafirmou as diretrizes encaminhadas para o Jockey Club para o hip&oacute;dromo e destaca que o conceito de preserva&ccedil;&atilde;o deve compreender o uso compat&iacute;vel e contempor&acirc;neo do equipamento. Outra quest&atilde;o fundamental trazida &eacute; que os gabaritos dos edif&iacute;cios nos setores de transforma&ccedil;&atilde;o n&atilde;o podem causar acanhamento do conjunto hist&oacute;rico do hip&oacute;dromo. Por fim, consideraram positivas as diretrizes de maior permeabilidade visual dos fechamentos e da introdu&ccedil;&atilde;o de novos usos.</p>
			<p>A SMT destacou a oferta de transporte p&uacute;blico de alta e m&eacute;dia capacidade e a infraestrutura vi&aacute;ria e ciclovi&aacute;ria na regi&atilde;o. No entanto, avaliaram que o hip&oacute;dromo est&aacute; situado a dist&acirc;ncias consider&aacute;veis das principais esta&ccedil;&otilde;es, prejudicando sua acessibilidade por esses modais. A Secretaria informou ainda sobre as linhas de &ocirc;nibus que passam pela Av. Lineu de Paula Machado e sobre os conflitos vi&aacute;rios na Rua Bento Frias, nas proximidades dos subsetores Eus&eacute;bio Matoso e Vila H&iacute;pica.</p>
			<p>Os N&uacute;cleos de Planejamento Urbano das Subprefeituras do Butant&atilde; e de Pinheiros avaliaram que as transforma&ccedil;&otilde;es previstas no hip&oacute;dromo podem ser positivas para a regi&atilde;o, desde que sejam bem equacionadas as rela&ccedil;&otilde;es de vizinhan&ccedil;a e a articula&ccedil;&atilde;o com os sistemas de transportes.</p>
			<p>A partir destas contribui&ccedil;&otilde;es e considerando as compet&ecirc;ncias final&iacute;sticas das secretarias consultadas na mat&eacute;ria em que se manifestaram, a SP Urbanismo revisou as propostas do projeto, abandonando a proposta do parque p&uacute;blico e, consequentemente, do programa de interven&ccedil;&otilde;es. Assim, no PIU Jockey Club o cerne do interesse p&uacute;blico, que por sua vez justifica a continuidade da elabora&ccedil;&atilde;o do presente PIU, passou a ter com objeto a defini&ccedil;&atilde;o dos par&acirc;metros urban&iacute;sticos para a ZOE do Hip&oacute;dromo de Cidade Jardim e a destina&ccedil;&atilde;o dos recursos da venda do PCA dos setores de transforma&ccedil;&atilde;o para a conta geral do FUNDURB.</p>

			<h3>4.8	Cenários</h3>
			<p>O PIU Jockey Club tem como caracter&iacute;stica a regula&ccedil;&atilde;o de uma ZOE (Zona de Ocupa&ccedil;&atilde;o Especial) incidente sobre um relevante equipamento privado, cujo interesse p&uacute;blico reside na preserva&ccedil;&atilde;o do hip&oacute;dromo e de seus atributos hist&oacute;ricos, arquitet&ocirc;nicos e paisag&iacute;sticos. Conforme proposto no Programa de Interesse P&uacute;blico e manifestado nas contribui&ccedil;&otilde;es recebidas na primeira Consulta P&uacute;blica, este projeto traz a oportunidade deste equipamento ampliar seu interesse p&uacute;blico, intensificando sua utilidade e atratividade para a popula&ccedil;&atilde;o atrav&eacute;s da introdu&ccedil;&atilde;o de novas atividades que possam conviver com as atividades do turfe promovidas pelo Jockey Club de S&atilde;o Paulo, visto que estas ocorrem atualmente com menor intensidade do que no passado. Pelo porte e caracter&iacute;sticas da &aacute;rea, as &aacute;reas de interesse de preserva&ccedil;&atilde;o hist&oacute;rica e paisag&iacute;stica podem ser combinadas a outras que possam se transformar para intensificar o aproveitamento do conjunto, tornando-o mais diversificado e din&acirc;mico e contribuindo diretamente para a qualifica&ccedil;&atilde;o urbana do entorno.</p>
			<p>Considerando que o cumprimento da fun&ccedil;&atilde;o social da propriedade desta &aacute;rea se relaciona justamente com essas possibilidades de uso mais intensivo, tanto do solo urbano, quanto em rela&ccedil;&atilde;o &agrave; frequ&ecirc;ncia do equipamento, &eacute; importante que tais transforma&ccedil;&otilde;es ocorram mesmo na hip&oacute;tese de impossibilidade de parcelamento da gleba, desde que atendam &agrave;s diferentes diretrizes e par&acirc;metros definidos para cada subsetor. Este &eacute; o conceito conhecido como &ldquo;lote virtual&rdquo;. No entanto, caso o Jockey Club consiga parcelar por&ccedil;&otilde;es do lote - possibilidade esta que poder&aacute; ser melhor viabilizada a depender do afastamento das cl&aacute;usulas de inalienabilidade e impenhorabilidade gravadas na Matr&iacute;cula do lote - os mesmos par&acirc;metros j&aacute; definidos por subsetor permanecer&atilde;o vigentes para os novos lotes frutos do desmembramento, somando-se a outros dispositivos exclusivos desse cen&aacute;rio, com a destina&ccedil;&atilde;o de &aacute;reas</p>
			<p>Em rela&ccedil;&atilde;o &agrave; aliena&ccedil;&atilde;o de partes da &aacute;rea, tamb&eacute;m &eacute; poss&iacute;vel imaginar cen&aacute;rios diversos que considerem a condi&ccedil;&atilde;o fundi&aacute;ria atual. As condi&ccedil;&otilde;es definidas na matr&iacute;cula do im&oacute;vel - notadamente as cl&aacute;usulas de inalienabilidade e impenhorabilidade do bem - visam garantir e est&atilde;o relacionadas &agrave; manuten&ccedil;&atilde;o do equipamento do Hip&oacute;dromo de Cidade Jardim, de modo a preservar as atividades ali desempenhadas pelo Jockey Club de S&atilde;o Paulo. Outra condi&ccedil;&atilde;o colocada na matr&iacute;cula se refere &agrave; possibilidade de transfer&ecirc;ncia do im&oacute;vel no qual se localiza o Hip&oacute;dromo &agrave; Municipalidade, condi&ccedil;&atilde;o esta que se concretizar&aacute; em caso de dissolu&ccedil;&atilde;o legal do Jockey Club de S&atilde;o Paulo enquanto uma associa&ccedil;&atilde;o civil sem fins lucrativos, ou seja, caso as fun&ccedil;&otilde;es prec&iacute;puas de funcionamento do Jockey percam sua raz&atilde;o de ser ou deixem de existir.</p>
			<p>Neste sentido, &eacute; relevante tratar a possibilidade de venda de parcelas do hip&oacute;dromo sem desconsiderar a preserva&ccedil;&atilde;o das &aacute;reas funcionais que originaram o surgimento das cl&aacute;usulas de inalienabilidade e impenhorabilidade e que garantem a manuten&ccedil;&atilde;o da fun&ccedil;&atilde;o social p&uacute;blica do Jockey Club enquanto entidade. Logo, acreditamos ser poss&iacute;vel tanto a implanta&ccedil;&atilde;o de novos edif&iacute;cios no setor de transforma&ccedil;&atilde;o (dissociadas da atividade principal do Hip&oacute;dromo e sem transfer&ecirc;ncia da propriedade do Jockey Club), cujas unidades ser&atilde;o disponibilizadas ao mercado consumidor mediante loca&ccedil;&atilde;o (empreendimentos de renda). Da mesma forma, seria poss&iacute;vel considerar, na hip&oacute;tese de o Jockey Club conseguir a autoriza&ccedil;&atilde;o necess&aacute;ria para alienar o todo ou parcelas de seu im&oacute;vel, que as mesmas unidades pudessem ser vendidas livremente ao mercado. Dessa maneira, a proposta urban&iacute;stica visa garantir a edifica&ccedil;&atilde;o de novos empreendimentos nas &aacute;reas dissociadas do setor de preserva&ccedil;&atilde;o independentemente do afastamento do &ocirc;nus de inalienabilidade constante na matr&iacute;cula do Hip&oacute;dromo.</p>
			<p>Em rela&ccedil;&atilde;o &agrave; transfer&ecirc;ncia de potencial construtivo, como o potencial pass&iacute;vel de transfer&ecirc;ncia da declara&ccedil;&atilde;o atual em posse do Jockey &eacute; maior que o potencial a que teria direito pela legisla&ccedil;&atilde;o vigente p&oacute;s 2016, dada a entrada em vigor de novos Fatores de Incentivo, e pelos par&acirc;metros definidos neste PIU, a modelagem econ&ocirc;mica indica que a maior probabilidade &eacute; que o Jockey transfira este potencial por, pelo menos, os pr&oacute;ximos dez anos, at&eacute; que se esgote. Caso opte pelo cen&aacute;rio menos prov&aacute;vel de parcelar a &aacute;rea enquanto ainda det&eacute;m saldo de potencial transfer&iacute;vel, ter&aacute; este potencial recalculado nos termos da legisla&ccedil;&atilde;o vigente, com o desconto do potencial j&aacute; transferido e j&aacute; incorporado em outros im&oacute;veis localizados no munic&iacute;pio de S&atilde;o Paulo.</p>
			<p>Em rela&ccedil;&atilde;o ao acesso do p&uacute;blico a &aacute;reas do conjunto do hip&oacute;dromo, parece haver uma grande compatibilidade entre os objetivos de transforma&ccedil;&atilde;o do conjunto do hip&oacute;dromo em um centro de entretenimento multifuncional e o dispositivo da frui&ccedil;&atilde;o p&uacute;blica, ampliando a atratividade da &aacute;rea para a popula&ccedil;&atilde;o e possibilitando que o Jockey se beneficie dos incentivos urban&iacute;sticos previstos na legisla&ccedil;&atilde;o.</p>
			<p>Como o Plano Diretor do Jockey 2013-2024 n&atilde;o indica um cronograma de quando a institui&ccedil;&atilde;o pretende transformar os diversos espa&ccedil;os que comp&otilde;em o hip&oacute;dromo, os cen&aacute;rios descritos neste item demonstram como o PIU foi estruturado para responder a diversas hip&oacute;teses de desenvolvimento do conjunto no tempo, com diversas combina&ccedil;&otilde;es poss&iacute;veis entre a configura&ccedil;&atilde;o fundi&aacute;ria, transfer&ecirc;ncia de potencial, usos e produtos imobili&aacute;rios, entre outras vari&aacute;veis, possibilitando uma flexibilidade de escolhas &agrave; institui&ccedil;&atilde;o conforme suas prioridades, ao mesmo tempo em que garante que tais transforma&ccedil;&otilde;es ocorram em conson&acirc;ncia com as diretrizes de desenvolvimento urbano do PDE e caracter&iacute;sticas do entorno.</p>

			<h3>4.9 Parcelamento</h3>
			<p>A &aacute;rea do Hip&oacute;dromo de Cidade Jardim &eacute; constitu&iacute;da, atualmente, por um &uacute;nico lote com 586.634,68 m&sup2; (&aacute;rea matr&iacute;cula) ou 617.971 m&sup2; (&aacute;rea conforme o Mapa Digital da Cidade - MDC). Com objetivo de compatibilizar os par&acirc;metros aos dados utilizados para os c&aacute;lculos da transfer&ecirc;ncia do direito de construir (TDC), o PIU Jockey adotou a &aacute;rea da matr&iacute;cula, definindo as &aacute;reas dos setores e subsetores a partir da propor&ccedil;&atilde;o aferida nos programas de geoprocessamento utilizados para a execu&ccedil;&atilde;o dos mapas deste projeto.</p>
			<p>&nbsp;A Lei de Zoneamento ou Lei de Parcelamento, Uso e Ocupa&ccedil;&atilde;o do Solo &ndash; LPUOS (Lei n&ordm; 16.402/2016) prev&ecirc; o parcelamento de &aacute;reas acima de 20.000m&sup2;, com destina&ccedil;&atilde;o de 30 a 40% de &aacute;rea p&uacute;blica. No entanto, em uma ZOE (Zona de Ocupa&ccedil;&atilde;o Especial) como o Jockey Club, conforme o art. 42 da LPUOS, este par&acirc;metro de lote m&aacute;ximo n&atilde;o &eacute; aplic&aacute;vel, tendo em vista as particularidades do equipamento (hip&oacute;dromo), do terreno e de seu conjunto constru&iacute;do, n&atilde;o se vislumbrando a possibilidade de um parcelamento tradicional do terreno, com abertura de novas vias e destina&ccedil;&atilde;o de &aacute;reas verdes e institucionais.</p>
			<p>A escala e implanta&ccedil;&atilde;o em um lote &uacute;nico s&atilde;o compat&iacute;veis com as caracter&iacute;sticas do hip&oacute;dromo, que demanda extensas &aacute;reas livres de pistas e treinamento conectadas a &aacute;reas edificadas com fun&ccedil;&otilde;es ligadas ao turfe, como abrigo, tratamento e cuidado com os animais, alojamentos e vesti&aacute;rio para os jockeys, tribunas, &aacute;reas para apostas, leil&otilde;es, eventos sociais e restaurantes, entre outras.</p>
			<p>O projeto aponta para transforma&ccedil;&otilde;es mais intensivas no Subsetor Eus&eacute;bio Matoso, combinadas a transforma&ccedil;&otilde;es mais restritas nos subsetores Jos&eacute; Augusto de Queiroz e Lineu de Paula Machado e ao restauro e retrofit de edif&iacute;cios dos subsetores Tribunas e Vila H&iacute;pica. Conforme j&aacute; exposto, tais transforma&ccedil;&otilde;es podem ocorrer mesmo em um lote &uacute;nico, com par&acirc;metros espec&iacute;ficos aplicados a cada subsetor, como se cada um destes subsetores estivesse constitu&iacute;do em um lote diferente (lote virtual). Conforme as diretrizes definidas neste PIU, os novos empreendimentos que venham a ser implantados devem, necessariamente, estar implantados em um &uacute;nico subsetor, estando dispensados do atendimento das dimens&otilde;es m&aacute;ximas de lote estabelecidas ordinariamente nos termos do artigo 42 da LPUOS, recebendo novas dimens&otilde;es de &aacute;rea m&aacute;xima de lote ajust&aacute;veis &agrave; caracter&iacute;stica desta ZOE</p>
			<p>Na hip&oacute;tese de o Jockey Club conseguir a autoriza&ccedil;&atilde;o necess&aacute;ria para parcelar por&ccedil;&otilde;es do lote, este parcelamento dever&aacute; ocorrer, primeiramente, atrav&eacute;s da modalidade desmembramento, mantendo a subdivis&atilde;o dos setores e subsetores definidos no PIU, possibilitando a manuten&ccedil;&atilde;o da coes&atilde;o interna necess&aacute;ria ao funcionamento das atividades de cada subsetor e necess&aacute;rias &agrave; preserva&ccedil;&atilde;o das atividades associadas ao turfe.</p>
			<p>Ap&oacute;s o desmembramento, o parcelamento poder&aacute; ocorrer em fases, mediante Plano Integrado, de modo que cada subsetor possa se desenvolver a seu tempo, dentro de uma ordem geral. Os subsetores dentro do setor de transforma&ccedil;&atilde;o dever&atilde;o ser loteados, prevendo a destina&ccedil;&atilde;o de &aacute;reas p&uacute;blicas para implanta&ccedil;&atilde;o de &aacute;reas verdes, sistema vi&aacute;rio e &aacute;reas sem afeta&ccedil;&atilde;o definida, observando os limites m&aacute;ximos relativos &agrave; frente e &aacute;rea, conforme o Quadro 4 a seguir.</p>

			<div class="tabela-container">
				<table width="644">
					<caption>Quadro 4: Percentuais de destinação de áreas públicas e dimensões máximas do lote. </caption>
				<tbody>
				<tr>
				<td rowspan="2" width="163">
				Subsetor
				</td>
				<td rowspan="2" width="215">
				Percentual M&iacute;nimo de <br /> Destina&ccedil;&atilde;o de &aacute;rea p&uacute;blica (%)
				</td>
				<td colspan="2" width="266">
				Dimens&atilde;o M&aacute;xima de lote
				</td>
				</tr>
				<tr>
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

			<h3>4.10 Ocupação</h3>
			<p>Os par&acirc;metros de ocupa&ccedil;&atilde;o do solo previstos consideram a diversidade dos subsetores contidos nos Setores de preserva&ccedil;&atilde;o ou transforma&ccedil;&atilde;o, atribuindo coeficientes de aproveitamento m&aacute;ximo, de modo que o conjunto do Hip&oacute;dromo de Cidade Jardim tenha um Coeficiente de Aproveitamento global menor que o limite estabelecido para a MEM, conforme estabelecido pelo artigo 15 da LPUOS.</p>
			<p>No Setor de Preserva&ccedil;&atilde;o, as caracter&iacute;sticas de ocupa&ccedil;&atilde;o devem preservar a funcionalidade das atividades ligadas ao turfe e a ambi&ecirc;ncia e integridade do conjunto do hip&oacute;dromo, admitindo-se transforma&ccedil;&otilde;es restritas para qualificar e adaptar cada subsetor &agrave;s demandas contempor&acirc;neas de maior diversidade de usos nos edif&iacute;cios hist&oacute;ricos e espa&ccedil;os livres.</p>
			<p>Nos subsetores Pistas de Corrida e Pi&atilde;o do Prado, onde incidem restri&ccedil;&otilde;es a edifica&ccedil;&otilde;es em sobressolo, &eacute; necess&aacute;rio preservar as &aacute;reas livres para o uso esportivo, a frui&ccedil;&atilde;o da paisagem e o cumprimento dos servi&ccedil;os ambientais. Para esses subsetores foram utilizados como refer&ecirc;ncia os par&acirc;metros da Zona Especial de Preserva&ccedil;&atilde;o Ambiental &ndash; ZEPAM, adaptados &agrave;s caracter&iacute;sticas espec&iacute;ficas do hip&oacute;dromo, com defini&ccedil;&atilde;o do coeficiente de aproveitamento m&aacute;ximo igual a 0,1.</p>
			<p>Nos subsetores Tribunas e Vila H&iacute;pica, onde a ocupa&ccedil;&atilde;o atual &eacute; extensiva e concentra as principais refer&ecirc;ncias constru&iacute;das do hip&oacute;dromo, as possibilidades de transforma&ccedil;&atilde;o s&atilde;o limitadas, condicionando a ado&ccedil;&atilde;o de coeficientes de aproveitamento m&aacute;ximo iguais a 1,0.</p>
			<p>J&aacute; no Setor de Transforma&ccedil;&atilde;o, os crit&eacute;rios para a defini&ccedil;&atilde;o dos par&acirc;metros visam possibilitar as transforma&ccedil;&otilde;es mais intensas e permitir que se crie uma nova ambi&ecirc;ncia urbana diversificada, na qual o Jockey estabelece uma nova rela&ccedil;&atilde;o com a cidade e com seu entorno imediato, considerando as quest&otilde;es ambientais e as rela&ccedil;&otilde;es entre os novos edif&iacute;cios e os edif&iacute;cios existentes preservados para valorizar os atributos hist&oacute;ricos e paisag&iacute;sticos do hip&oacute;dromo de modo a criar uma coexist&ecirc;ncia harmoniosa.</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nos subsetores Lineu de Paula Machado e Jos&eacute; Augusto de Queiroz, entende-se que esse coeficiente deve ser mais moderado, igual a 2,0, tendo em vista a maior proximidade com os edif&iacute;cios hist&oacute;ricos e com o bairro exclusivamente residencial, bem como o objetivo de possibilitar uma maior integra&ccedil;&atilde;o com o cotidiano do entorno.</p>
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
				url: src('arquivos/jockey-club-2/figuras/figura10.jpg'),
				caption: 'Figura 10 - Estudos de Sombreamento para o Subsetor José Augusto de Queiroz com gabarito de 60m',
				fonte: 'Elaboração: SP Urbanismo, 2019'
			}" />

			<imagem :dados="{
				tipo: 'coluna',
				url: src('arquivos/jockey-club-2/mapas/mapa8.jpg'),
				caption: 'Mapa 8 - Coeficientes de Aproveitamento Máximo',
				fonte: 'Elaboração: SP Urbanismo, 2019'
			}" />

			<imagem :dados="{
				tipo: 'coluna',
				url: src('arquivos/jockey-club-2/mapas/mapa9.jpg'),
				caption: 'Mapa 9 - Gabaritos de Altura Máximos',
				fonte: 'Elaboração: SP Urbanismo, 2019'
			}" />

			<p>Os par&acirc;metros de Quota Ambiental s&atilde;o fundamentais para que o conjunto do Jockey possa ampliar os servi&ccedil;os ambientais prestados &agrave; cidade, considerando que o conjunto j&aacute; possui atributos relevantes que devem ser preservados. Os par&acirc;metros seguem uma l&oacute;gica associada &agrave; diferencia&ccedil;&atilde;o entre os setores.</p>
			<p>No setor de transforma&ccedil;&atilde;o incidir&atilde;o os mesmos par&acirc;metros ordin&aacute;rios definidos na LPUOS para o Per&iacute;metro de Qualifica&ccedil;&atilde;o Ambiental 4 (PA 4), onde est&aacute; inserida a ZOE Jockey Club. No cen&aacute;rio de transforma&ccedil;&atilde;o sem parcelamento, dever&aacute; ser adotada a pontua&ccedil;&atilde;o para 10.000 m&sup2;, igual a 0,78, pois a refer&ecirc;ncia utilizada &eacute; a &aacute;rea dos subsetores e todos t&ecirc;m &aacute;rea superior a esta. No cen&aacute;rio de transforma&ccedil;&atilde;o ap&oacute;s o parcelamento, o empreendimento dever&aacute; adotar a pontua&ccedil;&atilde;o correspondente ao novo lote. Em qualquer cen&aacute;rio, a Taxa de Permeabilidade &ndash; TP definida &eacute; de 25%.&nbsp;</p>
			<p>No setor de preserva&ccedil;&atilde;o, os subsetores possuem caracter&iacute;sticas distintas, mas tem em comum a restri&ccedil;&atilde;o &agrave;s possibilidades de altera&ccedil;&atilde;o dos atributos ambientais atuais. Os subsetores Pistas de Corrida e Pi&atilde;o do Prado, que ocupam 60% do lote e s&atilde;o compostos integralmente por &aacute;reas livres perme&aacute;veis, s&atilde;o os principais contribuintes para a drenagem da &aacute;rea. Por outro lado, as restri&ccedil;&otilde;es funcionais e de tombamento impedem a introdu&ccedil;&atilde;o de vegeta&ccedil;&atilde;o arb&oacute;rea.</p>
			<p>Os subsetores Tribunas e Lineu de Paula Machado possuem &aacute;reas arborizadas e &aacute;reas livres ora perme&aacute;veis, ora compostas por pavimentos implantados em conjunto com os edif&iacute;cios hist&oacute;ricos e que, portanto, devem ser em grande parte preservados, limitando as possibilidades de incremento de vegeta&ccedil;&atilde;o arb&oacute;rea e &aacute;reas perme&aacute;veis. Nestes subsetores tamb&eacute;m s&atilde;o limitadas as possibilidades de implanta&ccedil;&atilde;o de reservat&oacute;rios de reten&ccedil;&atilde;o de &aacute;guas pluviais. Os par&acirc;metros de ocupa&ccedil;&atilde;o definidos limitam as possibilidades de transforma&ccedil;&atilde;o com acr&eacute;scimo de &aacute;rea constru&iacute;da acima de 20%.</p>
			<p>Assim, para este setor, a quota ambiental n&atilde;o ser&aacute; aplic&aacute;vel se, mesmo que ocorram transforma&ccedil;&otilde;es que superem os 20% de &aacute;rea constru&iacute;da, os atributos ambientais caracter&iacute;sticos de cada subsetor sejam mantidos conforme a situa&ccedil;&atilde;o atual, sem supress&atilde;o de vegeta&ccedil;&atilde;o arb&oacute;rea e &aacute;rea perme&aacute;vel. No caso de altera&ccedil;&atilde;o destes atributos, o atendimento &agrave; quota ambiental dever&aacute; ser relativo ao setor de preserva&ccedil;&atilde;o, considerando o conjunto dos quatro subsetores que o comp&otilde;em.</p>

			<imagem :dados="{
				tipo: 'coluna',
				url: src('arquivos/jockey-club-2/quadros/quadro6.jpg'),
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
				caption: 'Figura 13 - Ilustração da Rua José Augusto de Queiroz com vedações mais transparentes e fachadas ativas',
				fonte: 'Elaboração: SP Urbanismo, 2019'
			}"
			:elaboracaoOnly="true" />

			<h3>4.11 Uso</h3>

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
			<p>&nbsp;</p>
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

		<section>
			<h2 class="titulo" indent=1>5. Modelagem Econômica</h2>
		</section>

		<section>
			<h2 class="titulo" indent=1>6. Modelo de Gestão democrática</h2>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<!-- <CommentsLoader :attr="estaConsulta"></CommentsLoader> -->
			<Comments v-if="commentsLoaded && consultaAtiva" :attr="{ id:commentId(),context:'Comentarios' }"></Comments>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import Imagem from '@/components/Imagem'
import Tabela from '@/components/Tabela'
import TabelaCsv from '@/components/TabelaCsv'
import BtnFixedUrl from '@/components/BtnFixedUrl'

export default {
	name: 'JockeyClub2Consulta',
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
@import '../../tabela';
.notas {
	font-family: $grotesca;
	font-size: small;
	padding: 0
}
.jockey-club2-consulta {
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
}
</style>
