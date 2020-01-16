<template>
	<div class="ArcoTiete2" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/arco-tiete_122w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Arco Tietê 2</div></template>
			<template slot="subtitulo"><div>Segunda consulta pública</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<Comments :attr="{ id:commentId(true), context:'Apresentação' }" v-if="parseInt(estaConsulta.ativo) === 1"></Comments>

			<p>A Prefeitura do Município de São Paulo, por intermédio da Secretaria Municipal de Desenvolvimento Urbano (SMDU) e da São Paulo Urbanismo (SPUrbanismo) apresenta proposta de Projeto de Intervenção Urbana (PIU) para o subsetor Arco Tietê, da Orla Ferroviária e Fluvial da Macroárea de Estruturação Metropolitana (MEM), o qual estabelece objetivos, diretrizes, estratégias e mecanismos para a implantação das intervenções. </p>

			<p>Nos estudos iniciais do Projeto de Intervenção Urbana Arco Tietê (PIU Arco Tietê) apresentados na Primeira Consulta Pública – Diagnóstico e Programa de Interesse Público – foram analisados os dados de todo território originalmente definido pelo Plano Diretor Estratégico (PDE) – Lei Municipal nº 16.050/2014 - como Subsetor Arco Tietê (5.380ha). No decorrer dos estudos, a constatação da sobreposição de perímetros de projetos, como a Operação Urbana Consorciada Água Branca, o PIU Anhembi, o PIU Setor Central e o PIU Parque Minhocão, e da existência de novos marcos regulatórios conduziram à adoção de uma nova estratégia de abordagem para o território. Esta nova abordagem tem como estratégia ações concentradas em porções do novo território do Arco Tietê, agora com 3.524 ha.</p>

			<p>Esta Segunda Consulta Pública, que se inicia em <mark>00 de janeiro de 2019</mark> com término previsto para o dia <mark>00 de fevereiro de 2019</mark>, apresenta a proposição preliminar dos <strong>Perímetros de Intervenção, de um Programa de Intervenções e Parâmetros Urbanísticos convergentes com a modelagem econômica e considerando um modelo de gestão democrática.</strong></p>

			<p>O Processo de elaboração do PIU Arco Tietê segue os passos dispostos no Decreto Municipal n° 56.901/2016 e, desta forma, as contribuições a serem colhidas nesta consulta irão colaborar para o seu aperfeiçoamento. Após consolidação, o conteúdo final do PIU e o Projeto de Lei dele resultante serão objeto de debate com a sociedade em audiências públicas, para posteriormente serem encaminhados ao Legislativo.</p>

			<processo2 :bgSrc320="src('arquivos/arco-tiete-2/processo_320px-arco-tiete-processo.png')" :bgSrc700="src('arquivos/arco-tiete-2/processo_700px-arco-tiete-processo.png')"/>
		</section>
		<section>
			<h2 class="titulo" indent="1">Uma nova abordagem para o Arco Tietê</h2>
			<p>A nova estratégia de abordagem do PIU Arco Tietê direciona um olhar mais atento às planícies fluviais, onde se verificou um <strong>processo de urbanização incompleto</strong>, com territórios que não receberam infraestrutura suficiente e que ainda hoje permanecem monofuncionais, como áreas industriais, áreas públicas subutilizadas e glebas com grande potencial de transformação urbana.</p>
			<p>O território deste novo estudo abrange uma área de 3.524 ha (2,3% do Município de São Paulo) e apresenta grande diversidade de usos e ocupação do solo. São áreas consolidadas como o centro de Santana, servido de infraestrutura de transporte de alta capacidade e territórios como as porções dos distritos da Freguesia do Ó e do Limão, caracterizados pela presença de vulnerabilidade social, carentes de urbanidade (mobilidade, diversidade de usos) e com problemas de drenagem, uma vez que correspondem às áreas dos antigos meandros do Rio Tietê.</p>
			<p>Neste contexto, são propostos perímetros de intervenção que têm como desafio promover processos de transformação urbana capazes de contribuir para integração, articulação e no reforço das potencialidades de cada área, de acordo com sua vocação e alinhadas às diretrizes gerais apresentadas no Programa de Interesse Público.</p>

			<imagem :dados="{
				titulo: 'Perímetros de Intervenção',
				tipo: 'mapa',
				url: src('arquivos/arco-tiete-2/mapas/mapa1_perimetros-intervencao.gif'),
				legenda: [
					{ borda: '#D6D6D6', espessura: 1, fundo: '#FFEBC2', descricao: 'PIU Arco Tietê' },
					{ fundo: '#CCCCCC', descricao: 'O.U.C. Água Branca / PIU Setor Central' },
					{ fundo: '#FFCC99', descricao: 'Perímetro de Intervenção' },
					{ char: '1', descricao: 'Lapa/Freguesia' },
					{ char: '2', descricao: 'Limão/Casa Verde' },
					{ char: '3', descricao: 'Santana/Vila Guilherme' },
					{ simbolo: src('arquivos/legendas/icones/cptm.png'), descricao: 'Estação CPTM' },
					{ simbolo: src('arquivos/legendas/icones/metro.png'), descricao: 'Estação Metrô' },
					{ simbolo: src('arquivos/legendas/icones/metro-prevista.png'), descricao: 'Estação Metrô Prevista' },
					{ simbolo: src('arquivos/legendas/icones/terminais-urbanis-municipais.png'), descricao: 'Terminais Urbanos Municipais' },
					{ borda: '#535353', linha: true, espessura: 3, descricao: 'Ferrovia' },
					{ simbolo: src('arquivos/legendas/icones/linha-de-metro.png'), descricao: 'Linha Metrô' }
				],
				fonte: 'Elaboração: SP-Urbanismo, 2020'
			}" />

			<p>O processo de planejamento se desenvolveu através de abordagens em <strong>diferentes escalas</strong>, resultando em graus de detalhamento, aplicação e gestão.</p>
			<p>A <strong>primeira escala</strong> apoia-se nos principais elementos estruturadores que articulam polos e municípios da Região Metropolitana de São Paulo, como os eixos de mobilidade e a rede hídrica e ambiental.</p>
			<p>No primeiro caso, tem destaque as vias marginais que conectam importantes rodovias em seus extremos: a oeste, as Rodovias Presidente Castelo Branco, Anhanguera e Bandeirantes e a leste, as Rodovias Presidente Dutra e Fernão Dias. Somam-se a estes eixos as linhas férreas (Linha 7 – Rubi e Linha 8 – Diamante da CPTM) e os Apoios Urbanos Norte e Sul, propostos pelo PDE e detalhados pela Lei nº 16.541/2016, formando um anel perimetral que se conectará a corredores, estações e terminais, articulando diferentes territórios em destaque os bairros.</p>
			<p>Já a rede hídrica e ambiental, formada pelo Rio Tietê e seus contribuintes e pelo conjunto de áreas verdes “transborda” os limites do perímetro de intervenção e deve ser encarada como um elemento essencialmente sistêmico, ou seja, dependente de ações que ocorrem inclusive fora do perímetro de intervenção. Nesse contexto, as ações propostas no contexto do PIU Arco Tietê buscam contribuir para a requalificação da planície fluvial.</p>
			<p>A <strong>segunda escala</strong> diz respeito ao perímetro atualizado do PIU Arco Tietê e teve por objetivo fundamentar o Programa de Interesse Público, por meio da definição de densidades e indicadores que construíram uma base para selecionar os perímetros prioritários de projeto, ou seja, os perímetros de intervenção.
			A <strong>terceira escala</strong> corresponde justamente aos perímetros de intervenção (Lapa/Freguesia, Limão/Casa Verde e Santana/Vila Guilherme). Nestes territórios, como já apresentado anteriormente, o processo de urbanização apresenta-se incompleto e, nesse contexto, o PIU Arco Tietê propõe um programa de desenvolvimento urbano com diretrizes específicas, definindo densidades e parâmetros urbanísticos, apoiados em um programa de intervenções e um instrumento urbanístico que definirá o modelo de financiamento capaz de promover sua implantação.</p>
			<p>Por fim, os Projetos Estratégicos representam a <strong>quarta escala</strong>, são perímetros internos aos perímetros de intervenção, com o objetivo de mobilizar o setor público ou privado, por meio da celebração de parcerias ou não, visando à implantação de projetos urbanísticos específicos.</p>

			<escalas :bgSrc320="src('arquivos/arco-tiete-2/Escalas-320.jpg')" :bgSrc700="src('arquivos/arco-tiete-2/Escalas-700.jpg')"/>

		</section>

		<section>
			<h2 class="titulo" indent="1">Perímetros de Intervenção</h2>

			<Imagem :dados="{
				tipo: 'mapa',
				titulo: 'Diagrama Geral',
				url: src('arquivos/arco-tiete-2/mapas/mapa2_diagrama-geral-piu-arco-tiete.jpg'),
				legenda: [
					{ borda: '#D6D6D6', espessura: 1, fundo: '#FFEBC2', descricao: 'PIU Arco Tietê' },
					{ fundo: '#CCCCCC', descricao: 'O.U.C. Água Branca / PIU Setor Central' },
					{ fundo: '#FFCC99', descricao: 'Perímetro de Intervenção' },
					{ char: '1', descricao: 'Lapa/Freguesia' },
					{ char: '2', descricao: 'Limão/Casa Verde' },
					{ char: '3', descricao: 'Santana/Vila Guilherme' },
					{ simbolo: src('arquivos/legendas/icones/cptm.png'), descricao: 'Estação CPTM' },
					{ simbolo: src('arquivos/legendas/icones/metro.png'), descricao: 'Estação Metrô' },
					{ simbolo: src('arquivos/legendas/icones/metro-prevista.png'), descricao: 'Estação Metrô Prevista' },
					{ simbolo: src('arquivos/legendas/icones/terminais-urbanis-municipais.png'), descricao: 'Terminais Urbanos Municipais' },
					{ simbolo: src('arquivos/legendas/icones/ferrovia.png'), descricao: 'Ferrovia' },
					{ simbolo: src('arquivos/legendas/icones/linha-de-metro.png'), descricao: 'Linha Metrô' },
					{ borda: '#92445C', linha: true, espessura: 3, descricao: 'Apoios Urbanos' },
					{ simbolo: src('arquivos/legendas/icones/Apoios-Urbanos-fase-1e2.png'), descricao: 'Apoios Urbanos (Implantação fase 1 e 2' },
					{ borda: '#92445C', linha: true, espessura: 2, descricao: 'Vias Estruturais' },
					{ simbolo: src('arquivos/legendas/icones/conexoes.png'), descricao: 'Conexões' },
					{ borda: '#FF3300', linha: true, espessura: 3, descricao: 'Transposições' },
					{ borda: '#E3F1F7', linha: true, espessura: 2, descricao: 'Cursos d’Água' },
					{ fundo: '#B2E5B2', descricao: 'Áreas Verdes Existentes' },
					{ simbolo: src('arquivos/legendas/icones/areas-verdes-propostas.png'), descricao: 'Áreas Verdes Propostas' },
					{ simbolo: src('arquivos/legendas/icones/eixos-de-integracao-local-1.png'), descricao: 'Eixos de Integração Local' }
				],
				fonte: 'Imagem de base: Google Earth, 2018. Elaboração: SP Urbanismo, 2019'
			}"></Imagem>

			<!-- Grafico_area_ACT_320px.png -->
			<imagem
				:dados="{
					tipo: 'default',
					url: src('arquivos/arco-tiete-2/Grafico_area_ACT_320px.png'),
					caption: 'Estrutura Plano urbanístico – Perspectiva. Elaboração: SP-Urbanismo 2020',
					fonte: 'SP-Urbanismo'
				}"
				maxWidth="'320px'"
			/>

			<p>Com o aprofundamento dos estudos, em consonância com a definição do programa de intervenções e, novamente, com a viabilidade de implantação das infraestruturas e de transformação do território, novos perímetros surgem no processo de desenvolvimento do projeto a partir dos setores delimitados no Diagnóstico e Programa de Interesse Público. O Polo Oeste permaneceu com a mesma divisão de setores, renomeados <strong>como perímetro Lapa/Freguesia e perímetro Limão/Casa Verde</strong>. Já o Polo Nordeste foi reduzido, e resume-se ao território da centralidade do distrito de Santana e porção da Vila Guilherme, denominado perímetro Santana/Vila Guilherme. </p>
			<p>Compreende-se que a transformação na área correspondente às quadras do complexo Anhembi e à gleba ocupada pelo Campo de Marte, hoje classificados como Zonas de Ocupação Especial (ZOE) pela LPUOS, depende da atualização da atividade hoje instalada – caso do Anhembi – ou de sua completa substituição, caso do Campo de Marte, área sob governança federal. Portanto, acredita-se que as duas áreas têm dimensão e importância suficiente para mobilizarem projetos independentes da regulação dos demais perímetros do Arco Tietê, alinhados aos momentos de transformação de cada área. No primeiro caso, para a ZOE Anhembi, como já apresentado no Diagnóstico, o regramento e condições específicas de desenvolvimento já ocorreram mediante aprovação da Lei nº 16.886/2018 e do Decreto nº 58.623/2019, cabendo ao PIU Arco Tietê a compatibilização e a definição de alternativas para compartilhamento dos recursos, visando à implantação efetiva das intervenções, bem como alternativas para gestão integrada entre ambos. Para o Campo de Marte, ainda é central a necessidade de desenvolvimento de um PIU específico, considerando que a atividade aeroportuária continua ativa, sem perspectivas de alteração em curto e médio prazo.</p>
			<p>Em relação ao trecho localizado a leste da Av. Nadir Dias de Figueiredo, na parte da Vila Maria inserida no perímetro do Arco Tietê, trata-se de área com morfologia urbana regular e organizada a partir do eixo da Av. Guilherme Cotching. O estágio atual de debate do Metrô para futura implantação da Linha 19 ainda deixa indefinições quanto às localizações das estações, de forma que a demarcação de áreas de alta densidade no entorno poderá sofrer grandes mudanças nas próximas etapas de desenvolvimento do projeto da linha. Além disto, a implantação do trecho do Apoio só se justifica se houver continuidade em direção a leste, atravessando a barreira da Rodovia Pres. Dutra. Nesse caso, passa a ser coerente debater a implantação dessa infraestrutura em função das especificidades de transformação da região do Parque Novo Mundo. Ou seja, embora a área tenha potencial para recepcionar um plano urbanístico específico, seu desenvolvimento está condicionado ao aprofundamento dos projetos de infraestrutura colocalizados e ainda distantes do horizonte de implantação.</p>
			<p>Desde a etapa anterior, de Diagnóstico e Programa de Interesse Público, verificou-se que os perímetros Jaguara e Belém, apesar de apresentarem elementos que justificam a inclusão desses territórios em ações de projeto urbano, deveriam ser foco de estudos futuros, permanecendo este entendimento.</p>
			<p>As análises urbanísticas realizadas na etapa de Diagnóstico e o desenvolvimento do Programa de Interesse Público revelaram que os Perímetros de Intervenção têm clara identificação com as áreas de urbanização incompleta. Considerando os débitos ambientais acumulados ao longo de décadas de degradação física e ambiental, a proposta urbanística aqui apresentada buscou assegurar a interação entre viabilidade econômica, desenvolvimento social e regeneração ambiental, aspectos fundamentais para um projeto urbano com foco na sustentabilidade. Em termos urbanísticos, somam-se à tríade os aspectos relativos à mobilidade urbana, elemento central na Política Urbana construída pelo PDE. </p>
			<dados-gerais :bgSrc320="src('arquivos/arco-tiete-2/Dados-320.jpg')" :bgSrc700="src('arquivos/arco-tiete-2/Dados-700.jpg')" />
			<h3>Lapa/Freguesia</h3>
			<perimetro-info-lapa :bgSrc="src('arquivos/arco-tiete-2/Infograficos_perimetros-lapa.jpg')" />

			<h3>Perímetro Limão/Casa Verde</h3>
			<perimetro-info-santana :bgSrc="src('arquivos/arco-tiete-2/Infograficos_perimetros-santana.jpg')" />

			<h3>Perímetro Santana/Vila Guilherme</h3>
			<perimetro-info-limao :bgSrc="src('arquivos/arco-tiete-2/Infograficos_perimetros-limao.jpg')" />
		</section>

		<section>
			<h2 class="titulo" indent="1">Localização estratégica</h2>
			<p>A planície do Rio Tietê teve um papel relevante no processo de urbanização do território metropolitano ao acolher um conjunto de infraestruturas de transporte que modificou estruturalmente o meio físico, qualificando-o para recepcionar, inicialmente, a atividade industrial e, posteriormente, a instalação de grandes centros comerciais horizontais associados às mudanças na localização da indústria em escala macrometropolitana. Tanto a chegada das rodovias, como as ocupações extensivas resultaram em um território com grandes quadras, deficitário do ponto de vista da mobilidade, carente de drenagem e de saneamento, definido como um território de urbanização incompleta.</p>
			<p>Nesse contexto, a ausência de diversidade de usos, a possibilidade de adensamento populacional, a degradação física ambiental da área de várzea e o isolamento das margens direita e esquerda do Rio Tietê configuram os principais desafios do PIU em desenvolvimento. Por outro lado, o reconhecimento do Arco Tietê como um território estratégico de transição entre a cidade urbanizada e o Rio Tietê, integrando a área de várzea ao tecido urbano consolidado e, ao mesmo tempo, promovendo a conexão de eixos estruturadores de mobilidade,, definem os objetivos a serem alcançados.</p>
			<desafios-objetivos :bgSrc320="src('arquivos/arco-tiete-2/DesafiosObjetivos-320.png')" :bgSrc700="src('arquivos/arco-tiete-2/DesafiosObjetivos-700.png')" />

			<h3 class="titulo" indent="2">Estrutura do plano urbanístico</h3>
			<layer-explorer :data="{
				cssBaseId: 'seq1',
				tipo: 'sequencial',
				mapW: 990,
				mapH: 575,
				base: {
					legendas: [
						{ path: 'arquivos/arco-tiete-2/mapas/lg_ar-estr.png', descricao: 'Áreas de Estruturação' },
						{ path: 'arquivos/arco-tiete-2/mapas/lg_ar-trans.png', descricao: 'Áreas de Transição' },
						{ path: 'arquivos/arco-tiete-2/mapas/lg_zde.png', descricao: 'ZDE' },
						{ path: 'arquivos/legendas/icones/melhoramento-viario-proposto-fas1.png', descricao: 'Melhoramento Viário Proposto (Fase1)' },
						{ path: 'arquivos/legendas/icones/melhoramento-viario-proposto-fas2.png', descricao: 'Melhoramento Viário Proposto (Fase2)' },
						{ path: 'arquivos/legendas/icones/transposicoes.png', descricao: 'Transposições' },
						{ path: 'arquivos/legendas/icones/rede-ambiental.png', descricao: 'Rede Ambiental' },
						{ path: 'arquivos/legendas/icones/eixos-de-integracao-local-1.png', descricao: 'Eixos de Integração Local' },
						{ path: 'arquivos/legendas/icones/projetos-estrategicos.png', descricao: 'Projetos Estratégicos' }
					]
				},
				layers: [
					{
						titulo: 'Estrutura do Plano Urbanístico nos Perímetros de Intervenção',
						path: 'arquivos/arco-tiete-2/mapas/mapa3-1_geral.jpg',
						legendas: [],
						textos: {
							'Base': 'MDC 2004',
							'Elaboração': 'SPUrbanismo, 2020'
						}
					},
					{
						titulo: 'Perímetros Lapa/Freguesia e Limão/Casa Verde',
						path: 'arquivos/arco-tiete-2/mapas/mapa3-2_lapa-limao.jpg',
						legendas: [
							[
								{ path: 'arquivos/legendas/icones/estacoes-terminais-existentes.png', descricao: 'Estações Terminais Existentes' },
								{ path: 'arquivos/legendas/icones/estacoes-terminais-previstos.png', descricao: 'Estações Terminais Previstos' },
								{ path: 'arquivos/legendas/icones/metro.png', descricao: 'Estações Metrô' },
								{ path: 'arquivos/legendas/icones/metro-prevista.png', descricao: 'Estações Metrô Previstos' },
								{ path: 'arquivos/legendas/icones/cptm.png', descricao: 'Estações CPTM' },
								{ path: 'arquivos/legendas/icones/cptm-estacoes-prevista.png', descricao: 'Estações CPTM Previstos' }
							]
						],
						textos: {
							'Base': 'MDC 2004',
							'Elaboração': 'SPUrbanismo, 2020'
						}
					},
					{
						titulo: 'Perímetro Santana/Vila Guilherme',
						path: 'arquivos/arco-tiete-2/mapas/mapa3-3_carandiru.jpg',
						textos: {},
						legendas: [
							[
								{ path: 'arquivos/legendas/icones/estacoes-terminais-existentes.png', descricao: 'Estações Terminais Existentes' },
								{ path: 'arquivos/legendas/icones/metro.png', descricao: 'Estações Metrô' },
								{ path: 'arquivos/legendas/icones/metro-prevista.png', descricao: 'Estações Metrô Previstos' },
							]
						],
						textos: {
							'Base': 'MDC 2004',
							'Elaboração': 'SPUrbanismo, 2020'
						}
					}
				]
			}" />
			<p>O Plano Urbanístico para os Perímetros de Intervenção destaca 4 elementos básicos de estruturação espacial: (i) os Anéis formados pelas vias estruturais, (ii) os Eixos de Integração Local, (iii) as Áreas de Estruturação e (iv) os Projetos Estratégicos. Combinados, esses elementos buscam responder aos problemas e potencialidades características de cada perímetro, bem como articular o Plano aos PIU e Operações Urbanas colocalizados.</p>
			<p>Os <strong>Anéis</strong> consistem na implantação de segmentos dos Apoios Urbanos, justamente os trechos mais viáveis de serem realizados em médio prazo, com menor grau de complexidade técnica e que estejam diretamente associados aos territórios com maior probabilidade de transformação. Tem como objetivo realizar importantes conexões entre os bairros e estabelecer etapas intermediárias para implantação dos Apoios Urbanos em sua versão completa, conforme previsto na Lei nº 16.541/2016, aprovada durante o desenvolvimento da versão anterior do PIU Arco Tietê.</p>
			<p>Os Apoios Urbanos partem de diretrizes do PDE e buscam melhorar a integração entre os bairros, a promoção de adensamento populacional em região com grande número de oferta de empregos ao sul do rio e de aumento das atividades econômicas e sociais a norte. Os trechos que conformam os Anéis se apoiam em vias já existentes – como as Av. Marques de São Vicente e Ermano Marchetti na Lapa, ou então a Av. Braz Leme em Santana – e também na previsão de alargamento e abertura de novos eixos viários seguindo as propostas para o Apoio Urbano Norte e o Apoio Urbano Sul, esse último a ser viabilizado no contexto no PIU Setor Central.</p>
			<p>Os <strong>Eixos de Integração Local</strong>, por sua vez, estabelecem novas conexões transversais no território da várzea, de forma a superar as barreiras físicas existentes, “costurar” novos tecidos urbanos de bairro e ampliar as continuidades entre o norte e o sul do Arco Tietê, redefinindo, assim, os territórios de urbanização incompleta. Para tanto, os Eixos somam um conjunto de ferramentas de intervenção, contando com soluções de drenagem urbana, melhorias de passeios e áreas livres, bem como propostas de novas ciclopassarelas.  Os Eixos selecionados seguem, na Lapa-Freguesia, o curso dos córregos do Tiburtino e Curtume, no Limão-Casa Verde, os córregos Papaterra Limongi e Mandaqui e, em Santana-Vila Guilherme, os córregos do Carandiru e Divisa. Conectados aos Anéis anteriormente citados, os Eixos buscam oferecer um novo padrão de urbanização, baseados na mobilidade ativa associada à qualificação ambiental.</p>
			<p>Por fim, as <strong>Áreas de Estruturação</strong> e os <strong>Projetos Estratégicos</strong> definem o território que conduzirá a urbanização, sendo diretamente associados aos Apoios Urbanos e aos Eixos de Integração Local.  O primeiro caso consiste em áreas de alta densidade e que recepcionam os mesmos incentivos e exigências dos Eixos de Estruturação da Transformação Urbana do PDE. Já o segundo diz respeito às áreas consideradas estratégicas para catalisar as transformações pretendidas.</p>
			<imagem
				:dados="{
					tipo: 'destaque',
					url: src('arquivos/arco-tiete-2/mobilidade.jpg'),
					caption: 'Estrutura Plano urbanístico – Perspectiva. Elaboração: SP-Urbanismo 2020',
					fonte: 'SP-Urbanismo'
				}"
				:maxWidth="'1920px'"
			/>
			<p>Ao observarmos como os 4 elementos se associam, é possível perceber que as propostas complementam a estrutura urbana existente de diferentes formas: nos perímetros Lapa-Freguesia e Limão-Casa Verde, eles estabelecem costuras na direção Nortes-Sul, aproximando as margens direita e esquerda do Rio Tietê. Já no perímetro Santana-Vila Guilherme, as costuras na direção Leste-Oeste respondem às principais demandas de integração entre os bairros.</p>
			<p>Entende-se os perímetros de intervenção como porções prioritárias do território do Arco Tietê destinadas à reestruturação, transformação, recuperação e melhoria ambiental, onde se promova: uma ocupação mais intensa, qualificada, inclusiva do espaço urbano; o desenvolvimento econômico, a racionalização da infraestrutura; a preservação dos sistemas ambientais e soluções para as necessidades habitacionais tanto em relação à precariedade habitacional e urbana quanto as dinâmicas econômicas e de crescimento demográfico.</p>
			<p>A partir deste contexto, dentre os instrumentos urbanísticos, definidos pelo PDE (§5°, Art. 134 - PDE) - Operações Urbanas Consorciadas (OUC), Concessão Urbanística, Áreas de Intervenção Urbana (AIU) e Áreas de Estruturação Local (AEL) - os instrumentos urbanísticos AIU e  OUC  apresentam maior aderência à implementação das propostas do PIU Arco Tietê. Caberá ao modelo de financiamento da intervenção validar a adoção dos instrumentos e, consequentemente, qual o mecanismo de gestão ambiental necessário para sua realização.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">Programa de intervenções</h2>
			<p>A definição de um Programa de Intervenções preliminar tem por objetivo apresentar ações capazes de assegurar o saneamento das fragilidades presentes no território, bem como a implantação de infraestrutura de suporte à transformação pretendida, de modo a consolidar em ações de projeto os conceitos almejados pelo PIU e assim garantir a qualidade de vida nos bairros e potencializar o papel do território por meio do melhor aproveitamento da terra.</p>
			<p>Desta forma, as ações propostas constituirão redes estruturadoras da transformação classificadas nos diferentes sistemas:</p>
			<ul>
				<li><strong>Ambiental</strong>, composto pelas redes hídrica e de espaços públicos;
				<p>A presença do Rio Tietê e todos os seus córregos tributários, tamponados ou não, configura em conjunto com a linha férrea a “espinha dorsal” do perímetro do Arco Tietê, condicionando ao projeto a busca pela aplicação dos conceitos de sustentabilidade no planejamento e na implementação das ações, considerando a interdependência de suas esferas econômica, social e ambiental.</p>
				<p>As redes hídrica e de espaços públicos têm como objetivo a atenuação das alterações microclimáticas, a melhoria da drenagem, a proteção da biodiversidade, ampliação da oferta de áreas livres de lazer e a contribuição para preservação, qualificação e recuperação das áreas de várzea, respondendo às necessidades evidenciadas no diagnóstico de maneira intersetorial, associando-se dispositivos que buscam, além do lazer, o controle de escoamento superficial das águas pluviais.</p>
				</li>
			</ul>
			<imagem :dados="{
				titulo: 'Rede Ambiental',
				tipo: 'mapa',
				url: src('arquivos/arco-tiete-2/mapas/mapa4_programa-de-intervencoes.jpg'),
				legenda: [
					{ fundo: '#BACCA8', descricao: 'Parque, praças e canteiros' },
					{ fundo: '#6CB5D5', descricao: 'Hidrografia' },
					{ borda: '#535353', espessura: 3, linha: true, descricao: 'Ferrovia' },
					{ simbolo: src('arquivos/legendas/icones/linha-de-metro.png'), descricao: 'Linha Metrô' },
					{ simbolo: src('arquivos/legendas/icones/cptm.png'), descricao: 'Estação CPTM' },
					{ simbolo: src('arquivos/legendas/icones/metro.png'), descricao: 'Estação Metrô' },
					{ simbolo: src('arquivos/legendas/icones/terminais-urbanos-municipais.png'), descricao: 'Terminais Urbanos Municipais' },
					{ borda: '#000000', espessura: 3, pontilhado: true, descricao: 'Perímetro de Intervenção' },
					{ fundo: '#7AA555', descricao: 'Áreas verdes novas' },
					{ simbolo: src('arquivos/legendas/icones/Requalificacao-areas-verdes-existentes.png'), descricao: 'Requalificação de áreas verdes existentes' },
					{ simbolo: src('arquivos/legendas/icones/Caminhos-verdes.png'), descricao: 'Caminhos Verdes' },
					{ simbolo: src('arquivos/legendas/icones/Areas-absorcao.png'), descricao: 'Áreas de Absorção' },
					{ borda: '#00D5CF', espessura: 1, descricao: 'Áreas de acumulação' },
					{ borda: '#00D5CF', espessura: 1, pontilhado: true, descricao: 'Canteiros drenantes' },
				],
				fonte: 'Elaboração: SP-Urbanismo, 2020'
			}" />
			<ul>
				<li><strong>Mobilidade urbana</strong>;
					<p>O Programa de Intervenções do Arco Tietê deverá conter ações na área de mobilidade que auxiliem a inserção da transformação urbanística pretendida tanto do ponto de vista da superação das grandes barreiras territoriais, notadamente para os deslocamentos não motorizados, quanto do apoio à ampliação da rede de transporte coletivo, para suporte às novas demandas oriundas do adensamento populacional e construtivo para melhorar o aproveitamento da terra.</p>
					<p>As medidas propostas são centradas em cinco pontos-chave: garantir os territórios necessários à ampliação das redes de infraestrutura de mobilidade urbana (abertura de novas vias e alargamento de vias existentes), melhoria do sistema existente (requalificação de vias), incentivo ao transporte não motorizado (requalificação de passeios e implantação de ciclovias) e transposição de barreiras urbanas.</p>
				</li>
			</ul>
			<imagem :dados="{
				titulo: 'Rede de Mobilidade',
				tipo: 'mapa',
				url: src('arquivos/arco-tiete-2/mapas/mapa4-2_mobilidade.jpg'),
				legenda: [
					{ fundo: '#BACCA8', descricao: 'Parque, praças e canteiros' },
					{ fundo: '#6CB5D5', descricao: 'Hidrografia' },
					{ simbolo: src('arquivos/legendas/icones/ferrovia.png'), descricao: 'Ferovia' },
					{ simbolo: src('arquivos/legendas/icones/linha-de-metro.png'), descricao: 'Linha Metrô' },
					{ simbolo: src('arquivos/legendas/icones/cptm.png'), descricao: 'Estação CPTM' },
					{ simbolo: src('arquivos/legendas/icones/metro.png'), descricao: 'Estação Metrô' },
					{ simbolo: src('arquivos/legendas/icones/terminais-urbanos-municipais.png'), descricao: 'Terminais Urbanos Municipais' },
					{ simbolo: src('arquivos/legendas/icones/Abertura-novo-viario.png'), descricao: 'Abertura de Novo Viário' },
					{ simbolo: src('arquivos/legendas/icones/Alargamento-Viario-Existente.png'), descricao: 'Alargamento de viário existente' },
					{ borda: '#E2B79F', linha: true, espessura: 4, descricao: 'Requalificação de viário existente' },
					{ simbolo: src('arquivos/legendas/icones/Melhorias-passeios-existentes.png'), descricao: 'Melhorias dos passeios existentes' },
					{ borda: '#FF4711', linha: true, espessura: 4, descricao: 'Transposições' },
					{ borda: '#DC0037', espessura: 1, pontilhado: true, descricao: 'Ciclovias e Ciclofaixas' }
				],
				fonte: 'Elaboração: SP-Urbanismo, 2020'
			}" />
			<ul>
				<li><strong>Produção e qualificação do habitat</strong>, subdividido em habitação, equipamentos públicos e infraestrutura;
					<p>No perímetro definido como Subsetor Arco Tietê há o predomínio de baixas densidades populacionais, combinado com a presença de grandes infraestruturas de mobilidade, revelando a alta acessibilidade urbana potencial dessa porção do território. Portanto, podemos considerar de antemão que o aumento da oferta de moradia, combinada à ampliação da oferta de equipamentos e a expansão da eficiência e a dinâmica de setores produtivos são temas a serem aprofundados no desenvolvimento do PIU.</p>
					<p>Nesse contexto, o debate acerca da precariedade habitacional existente no perímetro é fundamental, pois parte do papel da política habitacional a ser formulada para o Arco Tietê deverá considerar a necessidade de se ampliar o acesso à Habitação de Interesse Social, bem como a possibilidade de se urbanizar, qualificar e regularizar os assentamentos precários identificados.</p>
				</li>
			</ul>
			<imagem :dados="{
				titulo: 'Rede de Qualificação do Habitat',
				tipo: 'mapa',
				url: src('arquivos/arco-tiete-2/mapas/mapa4-1_habitat.jpg'),
				legenda: [
					{ fundo: '#BACCA8', descricao: 'Parque, praças e canteiros' },
					{ fundo: '#6CB5D5', descricao: 'Hidrografia' },
					{ simbolo: src('arquivos/legendas/icones/ferrovia.png'), descricao: 'Ferovia' },
					{ simbolo: src('arquivos/legendas/icones/linha-de-metro.png'), descricao: 'Linha Metrô' },
					{ simbolo: src('arquivos/legendas/icones/cptm.png'), descricao: 'Estação CPTM' },
					{ simbolo: src('arquivos/legendas/icones/metro.png'), descricao: 'Estação Metrô' },
					{ simbolo: src('arquivos/legendas/icones/terminais-urbanos-municipais.png'), descricao: 'Terminais Urbanos Municipais' },
					{ fundo: '#9E71AB', descricao: 'Equipamentos em edifícios de valor histórico' },
					{ simbolo: src('arquivos/legendas/icones/Novos-equipamentos.png'), descricao: 'Novos Equipamentos' },
					{ simbolo: src('arquivos/legendas/icones/intervencao-assetamento-precario.png'), descricao: 'Intervenção integrada em assentamentos precários' },
					{ simbolo: src('arquivos/legendas/icones/provisao-moradia.png'), descricao: 'Áreas para provisão de moradia' },
					{ simbolo: src('arquivos/legendas/icones/cota-solidariedade.png'), descricao: 'Áreas potenciais de cota de solidariedade' },
					{ simbolo: src('arquivos/legendas/icones/linha-alta-tensao.png'), descricao: 'Remanejamento de linha de alta tensão' }
			],
				fonte: 'Elaboração: SP-Urbanismo, 2020'
			}" />

			<h3>Especificidades dos Perímetros no Programa de Intervenções</h3>
			<p>No território do Perímetro de Intervenção <strong>Lapa/Freguesia</strong>, as principais estruturas de mobilidade atualmente existentes são ligações no sentido Leste-Oeste: Rua da Balsa, Marginal Tietê, Av. Ermano Marchetti, Linha 6 e Linha 7 da CPTM e R. Guaicurus. Assim, o programa de intervenções do Arco Tietê nesse perímetro propõe intervenções principalmente no sentido Norte-Sul, incluindo transposições da ferrovia e do Rio Tietê.</p>
			<p>Também se desenvolvem no sentido Norte-Sul os principais caminhos verdes propostos para o perímetro Lapa/Freguesia, ao longo dos córregos, embora canalizados, do Curtume e Tiburtino (Rua Luís Gatti/ Antônio Nagib Ibrahim, Rua Cenno Sbrighi, Rua Emílio Goeldi, Rua Tenente Landy, Rua do Curtume, Rua José Maria de Faria), alcançando a norte a região da Freguesia do Ó e, a sul, conectando as estações e terminais dos diferentes modos de transporte público dispostos no sentido leste – oeste.</p>
			<p>Para responder ao desequilíbrio na distribuição de áreas verdes demonstrado no diagnóstico, nos trechos dos Distritos da Freguesia do Ó e Lapa as novas áreas verdes propostas deverão se localizar principalmente a mais de 1.000 dos parques existentes.</p>
			<p>Já no território do Perímetro de Intervenção <strong>Limão/Casa Verde</strong>, as principais estruturas de mobilidade atualmente existentes são ligações no sentido Norte-Sul: Av. Comendador Martinelli / Av. Inajar de Souza, Pte. Julio de Mesquita Neto, Av. Prof. Celestino Bourroul / Av. Dep. Emilio Carlos, Av. Eng. Caetano Álvares e Av. Ordem e Progresso. Por isso, o programa de intervenções do Arco Tietê nesse perímetro propõe intervenções principalmente no sentido Leste-Oeste, sendo a principal intervenção de mobilidade o estabelecimento de um eixo viário, de transporte público e não motorizado que vai desde a Av. Nossa Senhora do Ó até a Av. Profa. Ida Kolb. Essa ligação entre o corredor de ônibus existente na Av. Inajar de Souza e o corredor de ônibus existente na Av. Ordem e Progresso, cruzando os importantes eixos de transporte da Av. Dep. Emilio Carlos e da Av. Eng. Caetano Álvares, é realizada atualmente por viário não contínuo, a despeito de sua importância: alguns trechos chegam a ter 132 ônibus/hora, como já mostrado no Diagnóstico.</p>
			<p>No entanto, a presença dos modos de transporte público não ocorre com a mesma intensidade dos demais perímetros, esta característica decorre do “urbanismo incompleto”, pois o processo de urbanização não se estendeu sobre as antigas áreas dos meandros do Rio Tietê. Desta forma, a implantação dos caminhos verdes está diretamente associada a novos melhoramentos viários que garantirão a acessibilidade do território, como o eixo formado pelas ruas Nelson Francisco, José Fiuza Guimarães e Av. Prfª Ida Kolb.</p>
			<p>Quanto aos córregos existentes, a proposta do PIU Arco Tietê prevê a construção de lajes sobre o Córrego Mandaqui, conectando as duas margens e qualificação ambiental das margens do Córrego Papaterra Limongi. Para os 3 trechos do Córrego Papaterra Limongi, com ocorrências distintas como confinamento por muros e ocupação precária, foi prevista a implantação de melhoramentos viários de forma a recuperar áreas lindeiras e, no caso das áreas com moradia, a previsão de remoção articulada com a provisão de novas unidades em outros locais.</p>
			<p>A implantação de área verde associada ao Córrego Papaterra Limongi também está vinculada ao espaço público de chegada da passarela de pedestres sobre o Rio Tietê, conectando-se ao território da Operação Urbana Consorciada Água Branca.</p>
			<p>De maneira semelhante ao perímetro Limão/Casa Verde, no Perímetro de Intervenção <strong>Santana/Vila Guilherme</strong>, as principais estruturas de mobilidade atualmente existentes são ligações no sentido Norte-Sul: Av. Santos Dumont, R. Voluntários da Pátria, Av. Cruzeiro do Sul, Av. Otto Baumgart, R. dos Machados / Av. Joaquina Ramalho, Av. Guilherme e Av. Nadir Dias de Figueiredo. Desse modo, o programa de intervenções do Arco Tietê nesse perímetro propõe intervenções principalmente no sentido Leste-Oeste, dentre os quais destacamos um trecho do Apoio Urbano Norte previsto pelo Plano Diretor Estratégico. Porém, neste perímetro, os volumes de coletivos no sentido Leste-Oeste dificilmente passam de 90 ônibus/hora, e na maior parte dos trechos estão bem abaixo disso. Se no Perímetro de Intervenção Limão / Casa Verde se falava de melhor atendimento a uma demanda de mobilidade já consolidada, aqui no Perímetro de Intervenção Santana / Vila Guilherme falamos de indução da demanda por meio de projeto integrado de urbanismo e transporte, ou seja, a infraestrutura sendo implantada simultaneamente à transformação urbana.</p>
			<p>Desta forma, a implantação de caminhos verdes que proporcionarão a conexão e formarão uma rede, também são propostos no sentido leste-oeste nas seguintes vias: Rua Santa Eulália e Av. Zakii Narchi, Rua Gal. Pedro Leon Schneider e Gal. Ataliba Leonel; Rua José Duran e Rua São Querino (trecho Apoio Urbano Norte); Travessa Simis e Rua Santo Basílico, Rua José Bernardo Pinto.</p>
			<p>Como o Córrego da Divisa está despoluído, no trecho aberto da Av. Nadir Dias de Figueiredo, tem-se como objetivo sua integração à paisagem urbana permitindo a aproximação da população ao córrego e integrando-o à rede ambiental. Desta forma, mantendo-se a largura atual do fundo do canal, remanejando a área destinada a estacionamento de veículos do viário existente poderá ser implantada faixa para arborização, integrando-o à nova área verde a ser implantada na área lindeira.</p>
			<p>O Córrego Carandiru/Carajás está canalizado e fechado a partir de sua nascente até o Parque da Juventude, a partir de onde se encontra canalizado em seção aberta, até sua foz no Rio Tietê.  Como forma de mitigar problemas de drenagem o PIU Arco Tietê propõe a implantação de uma nova área verde junto ao Córrego Carandiru, que consiste em uma intervenção intersetorial, envolvendo a provisão de moradias, novos eixos viários e alargamentos que ocorrem na Rua R. Urupiara com Zachi Narchi e nas proximidades das R. Palmeia e Cel. Antonio de Carvalho, e a oferta de novas áreas verdes, incluindo uma praça de absorção, essencial para drenagem urbana.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">Regramento urbanístico e projetos estratégicos</h2>
			<p>A proposição do regramento urbanístico consiste da definição dos parâmetros de parcelamento, uso e ocupação do solo em função dos cenários da transformação prevista pelo projeto, tendo como premissas: (i) a intensificação do uso e ocupação da terra urbana corelacionada à oferta de infraestrutura, (ii) a capacidade de empreendimentos qualificarem os espaços públicos no entorno e (iii) a preservação e valorização do patrimônio natural e construído, de forma a ordenar a paisagem urbana.</p>
			<p>O procedimento para delimitação das áreas e seus respectivos parâmetros surge a partir das seguintes ações: primeiro, o mapeamento dos usos consolidados realizado nas etapas anteriores apontou os lotes e glebas com maior probabilidade para recepcionar ou concentrar as transformações urbanas previstas. Sobre essa base, foi possível identificar as áreas que já incluem interesses imobiliários diversos, identificados a partir de novos lançamentos de empreendimentos, protocolos de projeto ou mesmo retenção de terra em incorporadoras e construtoras.</p>
			<p>A segunda ação diz respeito ao desenho do Programa de Intervenções, que identificou áreas potenciais para recepcionar adensamentos construtivos e populacionais em função das melhores conexões com o transporte público, da abertura de novas vias, da qualificação dos passeios e oferta de novas áreas verdes e equipamentos públicos. Essas propostas, majoritariamente de promoção pública, deverão ser financiadas principalmente a partir da captura da valorização imobiliária no perímetro do projeto, construindo um vínculo direto entre oferta de potencial construtivo e incremento da infraestrutura.</p>
			<p>Por fim, a última ação consiste na busca do reequilíbrio dos índices de adensamento construtivo no interior do perímetro em função dos potenciais construtivos já dispostos na Lei de Parcelamento, Uso e Ocupação do Solo (LPUOS, Lei nº 16.402/2016), de forma que algumas áreas sofreram redução em seu potencial máximo em relação à LPUOS, enquanto outras tiveram seus índices majorados.</p>

			<h3>Áreas de Transformação, Qualificação e Preservação</h3>
			<p>O conjunto de zonas de uso e ocupação do solo disposto no zoneamento vigente na cidade de São Paulo está organizado em 3 agrupamentos básicos: os territórios de Transformação, Qualificação e Preservação.  De maneira similar à LPUOS, a proposta de organização dos parâmetros para o Arco Tietê parte da definição de perímetros de intervenção categorizados em Áreas de Transformação, Áreas de Qualificação e Áreas de Preservação, a partir da identificação de potencialidades e condicionantes do território. Essa forma de organização foi adotada para os demais PIU já desenvolvidos para os Setores da Macroárea de Estruturação Metropolitana (MEM).</p>
			<p>Os territórios de <strong>Transformação</strong> objetivam a promoção do adensamento construtivo e populacional das atividades econômicas e dos serviços públicos, a diversificação de atividades e a qualificação paisagística dos espaços públicos de forma a adequar o uso do solo à oferta de transporte público coletivo. Fazem parte desse território as zonas de adensamento associadas aos eixos de transporte, como ZEU, ZEUP, ZEM e ZEMP.</p>
			<p>As <strong>Áreas de Transformação</strong> do PIU Arco Tietê caracterizam-se pela baixa consolidação dos usos e ocupação do solo e por sua articulação à rede de transporte coletivo existente e planejada, condições que permitem intensificar as densidades construtivas e populacionais. Objetiva-se, além do adensamento, a promoção do uso misto e da qualidade dos espaços públicos, de forma a adequar o uso do solo à oferta de transporte público coletivo.</p>
			<p>Por sua vez, os territórios de <strong>Qualificação</strong> buscam a manutenção de usos não residenciais existentes, o fomento às atividades produtivas, a diversificação de usos ou o adensamento populacional moderado, a depender das diferentes localidades que constituem esses territórios. É constituído pelas ZC, ZM, ZMIS, ZCOR, ZDE, ZPI, ZOE, ZEIS e ZCZEIS.</p>
			<p>Com maior grau de consolidação dos usos e ocupação do solo, as <strong>Áreas de Qualificação</strong> do PIU Arco Tietê destinam-se a abrigar densidades construtivas e populacionais médias e baixas. Objetiva-se, a depender da localidade, a manutenção de usos não residenciais existentes, o fomento às atividades produtivas ou a diversificação de usos.</p>
			<p>Por fim, os territórios de <strong>Preservação</strong> são áreas em que se objetiva a preservação de bairros consolidados de baixa e média densidades, de conjuntos urbanos específicos e territórios destinados à promoção de atividades econômicas sustentáveis conjugada com a preservação ambiental, além da preservação cultural. São formados pelas ZEPAM, ZER, ZPDS, ZEPC, ZEP e ZPR.</p>
			<p>Em relação às <strong>Áreas de Preservação</strong>, elas correspondem no Arco Tietê aos miolos de bairro consolidados – como a região da Lapa de Baixo – ou o entorno de grandes parques e equipamentos públicos, como as quadras situadas entre a Rua Guaicurus e a linha férrea na Lapa, o entorno do Parque da Juventude em Santana e do Parque do Trote, na Vila Guilherme.</p>
			<p>As três Áreas foram subdivididas em função do Coeficiente de Aproveitamento Máximo, dos gabaritos, Cota Parte e Fatores de Planejamento (esses últimos serão discutidos nas próximas etapas do PIU). Cabe ressaltar que os demais parâmetros continuarão a ser regulados pela LPUOS vigente (Coeficiente de Aproveitamento Mínimo e Básico, Taxa de Ocupação, Recuos Mínimos, Usos permitidos e níveis de incomodidade, Dimensões mínimas e máximas de lote).</p>
			<p>Para todas as Áreas de Transformação serão vigentes, ainda, os incentivos e exigências oferecidos pela LPUOS para as ZEM/ZEMP, de forma a garantir a qualidade urbanística e ambiental das áreas com maior adensamento construtivo e populacional (Redução das vagas de garagem próximo ao transporte público, Fachada Ativa, Incentivo ao uso misto, Alargamento de passeio público, Fruição pública, Redução da vedação nos alinhamentos).</p>
			<table>
				<tr>
					<th colspan="5">Parâmetros de ocupação nas Áreas do PIU Arco Tietê</th>
				</tr>
				<tr>
					<td colspan="2">Áreas</td>
					<td>C.A. máx.</td>
					<td>Gabarito</td>
					<td>Cota Parte</td>
				</tr>
				<tr>
					<td rowspan="2">Área de transformação</td>
					<td style="background-color: #984806">T2</td>
					<td>4</td>
					<td>NA</td>
					<td>20</td>
				</tr>
				<tr>
					<td style="background-color: #d7ae85">T3</td>
					<td>4</td>
					<td>48m</td>
					<td>NA</td>
				</tr>
				<tr>
					<td rowspan="3">Área de qualificação</td>
					<td style="background-color: #ffc000">Q1</td>
					<td>4</td>
					<td>48m</td>
					<td>NA</td>
				</tr>
				<tr>
					<td style="background-color: #ffff00">Q2</td>
					<td>2</td>
					<td>28m</td>
					<td>NA</td>
				</tr>
				<tr>
					<td style="background-color: #ffff99">Q3</td>
					<td>1,5</td>
					<td>28m</td>
					<td>NA</td>
				</tr>
				<tr>
					<td>Área de preservação</td>
					<td style="background-color: #ff6699">P3</td>
					<td>1</td>
					<td>15m</td>
					<td>NA</td>
				</tr>
			</table>
			<p>Portanto, a definição das Áreas no PIU Arco Tietê deve ser entendida como uma sobrecamada em relação às Zonas de uso e ocupação do solo vigentes, sendo os parâmetros urbanísticos de ambas aplicados conjuntamente. Combinados, os parâmetros, incentivos e exigências são responsáveis por conformar o desenho de paisagem previsto para os perímetros de intervenção no Arco Tietê, bem como distribuir o potencial construtivo e o adensamento populacional priorizando as áreas com alto grau de transformação e vinculadas à infraestrutura de transporte de massa – premissa fundamental do Plano Diretor Estratégico.</p>

			<h3>Projetos Estratégicos</h3>
			<p>Os Projetos Estratégicos consistem na delimitação de novos perímetros internos ao perímetro geral de intervenção, com o objetivo de mobilizar o setor público ou o privado, associados ou não, visando à implantação de projetos urbanísticos.</p>
			<p>Sabemos que o principal objetivo do PIU, como ferramenta, é promover um processo de planejamento de forma que o percurso de elaboração e debate revele os instrumentos e as intervenções necessárias à área objeto de estudo. Ou seja, o PIU pode mobilizar instrumentos e intervenções em escalas muito diversas, a depender dos problemas e potencialidades identificados ao longo da elaboração das propostas.</p>
			<p>Pela abrangência territorial, os três perímetros identificados no Arco Tietê – Lapa/Freguesia, Limão/Casa Verde e Santana/Vila Guilherme – configuram intervenções na escala de plano urbano. Já os Projetos Estratégicos dizem respeito à demarcação de áreas cuja transformação deverá ser apoiada na escala do projeto urbano. Ou seja, são perímetros inseridos em instrumento urbanístico mais amplo e, portanto, compartilham seus objetivos, bem como mecanismos de financiamento e gestão, mas buscam estratégias de desenho urbano no âmbito local.</p>
			<p>O PIU Arco Tietê estabelece Projetos Estratégicos em áreas consideradas aptas a processos especiais de transformação e qualificação, com características próprias de destinação de áreas públicas e formas de alienação e utilização do potencial construtivo adicional, sejam públicas ou privadas.</p>
			<p>No que tange sua aplicação, os Projetos Estratégicos deverão incluir um conjunto de <strong>diretrizes, objetivos e exigências</strong> e, para que os proprietários se articulem e promovam as transformações indicadas, compreendidas como contrapartidas urbanísticas, são previstos regras específicas de parcelamento, uso e ocupação do solo, ou seja, incentivos expressos por meio de parâmetros urbanísticos, como o aumento do limite de gabarito, a permissão do uso residencial vertical (R2v), a utilização do potencial construtivo original do lote, antes do processo de parcelamento, dentre outros.</p>
			<p>A adoção de incentivos é coerente por duas razões: primeiro, em alguns casos será necessário reparcelar lotes que não teriam essa exigência se tratados isoladamente e, segundo, foram estabelecidas contrapartidas urbanísticas específicas, como a implantação e qualificação de áreas públicas, usos institucionais e a destinação de habitação de interesse social. O conjunto de incentivos e contrapartidas deverá ser acessado mediante adesão voluntária dos proprietários ao Projeto Estratégico e, para tanto, o equilíbrio entre contrapartidas e incentivos será calibrado em cada caso.</p>
			<p>Nos imóveis enquadrados como Zonas Especiais de Interesse Social (ZEIS 1 e 3) pelo zoneamento, inseridos nos perímetros de Projetos Estratégicos, aplicam-se os parâmetros e disposições instituídos para as referidas zonas de uso pelo PDE, tais como destinação de percentuais mínimos de área construída total para HIS e necessidade de constituição de Conselhos Gestores, no momento de elaboração dos Planos de Urbanização ou Projetos de Intervenção.</p>
			<p>Abaixo, junto aos respectivos Perímetros de Intervenção são identificados os Projetos Estratégicos bem como as questões que justificaram sua demarcação, objetivos, incentivos e contrapartidas.</p>

			<h3 class="titulo" indent="2">Perímetro Lapa/Freguesia</h3>
			<layer-explorer :data="{
				cssBaseId: 'seq2',
				tipo: 'sequencial',
				mapW: 990,
				mapH: 586,
				base: {
					legendas: [
						{ path: 'arquivos/legendas/icones/pontilhado-preto.png', descricao: 'Perímetro de intervenção' },
						{ path: 'arquivos/legendas/cores/BACCA8.png', descricao: 'Parque, praças e canteiros' },
						{ path: 'arquivos/legendas/cores/6CB5D5.png', descricao: 'Hidrografia' },
						{ path: 'arquivos/legendas/icones/ferrovia.png', descricao: 'Ferrovia' },
						{ path: 'arquivos/legendas/icones/terminais-urbanos-municipais.png', descricao: 'Terminais Urbanos Municipais' },
						{ path: 'arquivos/legendas/icones/linha-de-metro.png', descricao: 'Linha Metrô' },
						{ path: 'arquivos/legendas/icones/cptm.png', descricao: 'Estação CPTM' },
						{ path: 'arquivos/legendas/icones/metro.png', descricao: 'Estação Metrô' },
						{ path: 'arquivos/legendas/icones/terminais-urbanos-municipais.png', descricao: 'Terminais Urbanos Municipais' }
					]
				},
				layers: [
					{
						titulo: 'Parâmetros Urbanísticos - Lapa-Freguesia',
						path: 'arquivos/arco-tiete-2/mapas/mapa5-1_parametros.jpg',
						legendas: [
							[
								{ path: 'arquivos/legendas/cores/845B2A.png', descricao: 'T2' },
								{ path: 'arquivos/legendas/cores/B2997B.png', descricao: 'T3' },
								{ path: 'arquivos/legendas/cores/E0B700.png', descricao: 'Q1' },
								{ path: 'arquivos/legendas/cores/F5D422.png', descricao: 'Q2' },
								{ path: 'arquivos/legendas/cores/E793BE.png', descricao: 'P3' },
								{ char: '1', descricao: 'Abril' },
								{ char: '2', descricao: 'Rua da Balsa' },
								{ char: '3', descricao: 'Trivelato' },
								{ char: '4', descricao: 'Bento Bicudo' },
								{ char: '5', descricao: 'Engenheiro Fox' },
								{ char: '6', descricao: 'CDC Mauro Bezerra' },
								{ char: '7', descricao: 'Santa Marina' },
								{ char: '8', descricao: 'Guaicurus' },
								{ char: '9', descricao: 'Pátio da Lapa' }
							]
						],
						textos: {
							'Base': 'MDC 2004',
							'Elaboração': 'SP-Urbanismo, 2020'
						}
					},
					{
						titulo: 'Zoneamento – Lei n° 16.402/2016',
						path: 'arquivos/arco-tiete-2/mapas/mapa5-2_zoneamento.jpg',
						legendas: [
							[
								{ path: 'arquivos/legendas/cores/5E4134.png', descricao: 'ZC' },
								{ path: 'arquivos/legendas/cores/A26178.png', descricao: 'ZDE-2' },
								{ path: 'arquivos/legendas/cores/B89E40.png', descricao: 'ZEIS-1' },
								{ path: 'arquivos/legendas/cores/FFCF55.png', descricao: 'ZEIS-3' },
								{ path: 'arquivos/legendas/cores/FFF4BC.png', descricao: 'ZEIS-5' },
								{ path: 'arquivos/legendas/cores/A0A0A0.png', descricao: 'ZM' },
								{ path: 'arquivos/legendas/cores/C1B58C.png', descricao: 'ZOE' },
								{ path: 'arquivos/legendas/cores/AA412C.png', descricao: 'ZEM' },
								{ path: 'arquivos/legendas/zoneamento/zemp.gif', descricao: 'ZEMP' }
							]
						],
						textos: {
							'Base': 'MDC 2004',
							'Elaboração': 'SP-Urbanismo, 2020'
						}
					}
				]
			}" />

			<p>Cabe às suas principais vias transversais, eixos do Curtume e Tiburtino, traspassando a barreira do Rio, atuarem como Eixos de Integração Local, cuja função é articular o território, enfrentando a transposição das barreiras com qualidade e promovendo importantes espaços livres com funções ambientais associadas. Ao longo desses Eixos de Integração Local estão as áreas mais oportunas para o adensamento construtivo e populacional do setor.</p>
			<p>Se, por um lado, a área central do setor oferece importante oportunidade de adensamento, a banda sul, lindeira à ferrovia, conta com uma série de edifícios associados à história da industrialização da cidade tombados ou não, que abrigam tanto equipamentos públicos como indústrias e, portanto, devem ter seu entorno preservado de verticalização e adensamento.</p>

			<imagem
				:dados="{
					tipo: 'coluna',
					url: src('arquivos/arco-tiete-2/vista-aerea-lapa-freguesia.jpg'),
					caption: 'Vista aérea do perímetro Lapa-Freguesia. Elaboração: SP-Urbanismo, 2020',
					fonte: 'Google, 2019'
				}"
			/>

			<h4>Áreas de Transformação </h4>
			<p>Adensamento construtivo e populacional com Indução do desenvolvimento da atividade imobiliária de uso misto com alta densidade, fachada ativa.</p>
			<ul>
				<li>T2 - sem limite de gabarito: localização nos dois novos Eixos de Integração Local, no sentido norte-sul, conectando o Bairro da Lapa com a Freguesia do Ó, associado a novo alinhamento viário, a soluções de drenagem e de paisagismo, conformando novos espaços públicos lineares junto aos córregos tamponados do Curtume e Tiburtino, que estruturam o setor; Também no lado sul da Rua Guaicurus, no sentido leste-oeste, reafirmando o disposto no Zoneamento, que o definiu como ZEM devido a presença das estações Lapa e Água Branca do trem e do terminal de ônibus da Lapa e considerando uma série de investimentos em mobilidade previstos.</li>
				<li>T3 - com gabarito máximo de 48m de altura, com intuito de promover uma transição gradual, condizente com a paisagem histórica: localização nas quadras lindeiras à Av. Ermano Marchetti, provida de corredor de ônibus com acesso direto ao centro da cidade e que se relacionada com o bairro de uso residencial horizontal da Lapa de Baixo, importante área histórica definida como Área de Preservação pelo plano; também no trecho entre a Rua da Balsa e o alinhamento viário do Apoio Norte, associado à implantação do corredor da Av. Inajar de Souza e à futura implantação da linha 6 do Metrô; ainda, no restante da área de influência desta linha do metrô, se estendendo até a ponta sudeste do setor, onde encontra-se a gleba da Santa Marina (alvo de projeto estratégico, descrito adiante), garantindo um adensamento com gabaritos médios. </li>
			</ul>
			<h4>Áreas de Qualificação</h4>
			<p>Índices de adensamento mais baixos que as Áreas de Transformação e gabaritos baixos, contemplando a qualificação dos espaços públicos de forma a dar suporte, principalmente, aos usos existentes</p>
			<ul>
				<li>Q1- gabaritos médios (48m) devido à proximidade com bairros horizontais faz transição com as áreas próximas aos eixos de transporte público: localização a oeste do pátio ferroviário da Lapa, no prolongamento da Rua Jorge Nunes Kehdi para norte e para sul, estendendo-se desde a Rua Fortunato Ferraz (com previsão de alargamento) até o Rio Tietê e trechos ao sul da ferrovia.</li>
				<li>Q2 - gabaritos baixos (28m): localização nas quadras lindeiras à rua Ricardo Cavatton, que parte da Praça Sebastião Jaime Pinto, junto à Av. Ermano Marchetti em direção à marginal Tietê; também a norte da Rua da Balsa, na parte inferior da encosta do morro da Freguesia do Ó. Apesar de associada ao buffer do Apoio Norte, a verticalização dessa área pode comprometer as visuais da Paróquia Nossa Senhora do Ó a partir da Lapa e da Marginal Tietê, de onde ainda se guarda importante perspectiva desse edifício que marca o centro comercial da Freguesia do Ó. </li>
			</ul>

			<h4>Áreas de Preservação</h4>
			<p>Coeficiente de aproveitamento 1 e gabarito máximo de 15m  de forma a inibir a verticalização e o adensamento e preservar as características culturais e morfológicas da LAPA, que contém diversas casas e galpões construídos no início do século XX</p>
			<ul>
				<li>P3: localização entre a Rua Guaicurus e a ferrovia e na Lapa de baixo, considerando o Projeto Estratégico Guaicurus, com o objetivo de integrar os equipamentos existentes, muitos deles tombados e implantar novas áreas verdes e transposições em seus espaços livres, de modo a construir uma nova orla ferroviária integrada ao tecido urbano, conforme detalhado adiante no item referente aos Projetos Estratégicos.</li>
			</ul>
			<galeria :gallery_attrs="galeriaProjetosEstrategicos1"/>

			<h3 class="titulo" indent="2">Perímetro Limão-Casa Verde</h3>

			<layer-explorer :data="{
				cssBaseId: 'seq3',
				tipo: 'sequencial',
				mapW: 990,
				mapH: 575,
				base: {
					legendas: [
						{ path: 'arquivos/legendas/icones/pontilhado-preto.png', descricao: 'Perímetro de intervenção' },
						{ path: 'arquivos/legendas/cores/BACCA8.png', descricao: 'Parque, praças e canteiros' },
						{ path: 'arquivos/legendas/cores/6CB5D5.png', descricao: 'Hidrografia' },
						{ path: 'arquivos/legendas/icones/ferrovia.png', descricao: 'Ferrovia' },
						{ path: 'arquivos/legendas/icones/terminais-urbanos-municipais.png', descricao: 'Terminais Urbanos Municipais' },
						{ path: 'arquivos/legendas/icones/linha-de-metro.png', descricao: 'Linha Metrô' },
						{ path: 'arquivos/legendas/icones/cptm.png', descricao: 'Estação CPTM' },
						{ path: 'arquivos/legendas/icones/metro.png', descricao: 'Estação Metrô' },
						{ path: 'arquivos/legendas/icones/terminais-urbanos-municipais.png', descricao: 'Terminais Urbanos Municipais' }
					]
				},
				layers: [
					{
						titulo: 'Parâmetros Urbanísticos - Limão-Casa Verde',
						path: 'arquivos/arco-tiete-2/mapas/mapa6-1_parametros.jpg',
						legendas: [
							[
								{ path: 'arquivos/legendas/cores/845B2A.png', descricao: 'T2' },
								{ path: 'arquivos/legendas/cores/B2997B.png', descricao: 'T3' },
								{ path: 'arquivos/legendas/cores/E0B700.png', descricao: 'Q1' },
								{ path: 'arquivos/legendas/cores/F5D422.png', descricao: 'Q2' },
								{ path: 'arquivos/legendas/cores/E793BE.png', descricao: 'P3' },
								{ char: '10', descricao: 'Lapa' },
							]
						],
						textos: {
							'Base': 'MDC 2004',
							'Elaboração': 'SPUrbanismo, 2020'
						}
					},
					{
						titulo: 'Zoneamento – Lei n° 16.402/2016',
						path: 'arquivos/arco-tiete-2/mapas/mapa6-2_zoneamento.jpg',
						legendas: [
							[
								{ path: 'arquivos/legendas/cores/5E4134.png', descricao: 'ZC' },
								{ path: 'arquivos/legendas/cores/9F6646.png', descricao: 'ZC-ZEIS' },
								{ path: 'arquivos/legendas/cores/6C2864.png', descricao: 'ZDE-1' },
								{ path: 'arquivos/legendas/cores/B89E40.png', descricao: 'ZEIS-1' },
								{ path: 'arquivos/legendas/cores/FFA237.png', descricao: 'ZEIS-2' },
								{ path: 'arquivos/legendas/cores/FFCF55.png', descricao: 'ZEIS-3' },
								{ path: 'arquivos/legendas/cores/269BEE.png', descricao: 'VETOS' },
								{ path: 'arquivos/legendas/cores/AA412C.png', descricao: 'ZEM' },
								{ path: 'arquivos/legendas/zoneamento/zemp.gif', descricao: 'ZEMP' }
							]
						],
						textos: {
							'Base': 'MDC 2004',
							'Elaboração': 'SPUrbanismo, 2020'
						}
					}
				]
			}" />
			<p>O setor Limão-Casa Verde possui três tipos de estratégias de regramento urbanístico: adensamento construtivo e populacional predominantemente no trecho norte do setor, previsto para ocorrer de forma associada ao alargamento das ruas Nélson Francisco e José Fiúza Guimarães; qualificação do espaço público do entorno das favelas e conjuntos habitacionais existentes, incluindo recuperação dos principais córregos do território e provimento de novas unidades habitacionais de interesse social; e manutenção da atividade produtiva industrial nos locais da Zona de Desenvolvimento Econômico (ZDE-2) onde ela ainda seja significativa.</p>
			<imagem
				:dados="{
					tipo: 'coluna',
					url: src('arquivos/arco-tiete-2/vista-aerea-limao-casa-verde.jpg'),
					caption: 'Vista aérea do perímetro Limão-Casa Verde',
				}"
			/>
			<h4>Áreas de Transformação</h4>
			<ul>
				<li>T2 e T3: localização predominante associada às ruas Nélson Francisco e José Fiúza Guimarães, além das ZEIS, que mantêm equivalência aos parâmetros originais da zona. O objetivo é incentivar a transformação desses lotes de forma que sejam destinadas as áreas necessárias ao alargamento das vias em questão, completando um importante anel viário interno ao setor, composto também pelas avenidas Caetano Álvares, Marginal Tietê e Inajar de Souza. A restrição de altura no caso do T3 decorre da necessidade de adequação ao entorno e à infraestrutura proposta.</li>
			</ul>
			<h4>Áreas de Qualificação</h4>
			<ul>
				<li>Q2 - índices médios de adensamento e gabarito máximo de 28m: consistem nas quadras localizadas entre a área de influência do Apoio Norte e a Marginal Tietê, junto aos eixos de integração local e quadras onde ainda existe uma atividade produtiva importante, associada às indústrias, principalmente de produção de plástico. </li>
			</ul>
			<galeria :gallery_attrs="galeriaProjetosEstrategicos2" class="single-item"/>

			<h4>Perímetro Santana-Vila Guilherme</h4>
			<layer-explorer :data="{
				cssBaseId: 'seq4',
				tipo: 'sequencial',
				mapW: 990,
				mapH: 587,
				base: {
					legendas: [
						{ path: 'arquivos/legendas/icones/pontilhado-preto.png', descricao: 'Perímetro de intervenção' },
						{ path: 'arquivos/legendas/cores/BACCA8.png', descricao: 'Parque, praças e canteiros' },
						{ path: 'arquivos/legendas/cores/6CB5D5.png', descricao: 'Hidrografia' },
						{ path: 'arquivos/legendas/icones/ferrovia.png', descricao: 'Ferrovia' },
						{ path: 'arquivos/legendas/icones/linha-de-metro.png', descricao: 'Linha Metrô' },
						{ path: 'arquivos/legendas/icones/cptm.png', descricao: 'Estação CPTM' },
						{ path: 'arquivos/legendas/icones/metro.png', descricao: 'Estação Metrô' },
						{ path: 'arquivos/legendas/icones/terminal-onibus-existentes.png', descricao: 'Terminal de Ônibus' },
					]
				},
				layers: [
					{
						titulo: 'Parâmetros Urbanísticos - Santana-Vila Guilherme',
						path: 'arquivos/arco-tiete-2/mapas/mapa7-1_parametros.jpg',
						legendas: [
							[
								{ path: 'arquivos/legendas/cores/845B2A.png', descricao: 'T2' },
								{ path: 'arquivos/legendas/cores/B2997B.png', descricao: 'T3' },
								{ path: 'arquivos/legendas/cores/E0B700.png', descricao: 'Q1' },
								{ path: 'arquivos/legendas/cores/F5D422.png', descricao: 'Q2' },
								{ path: 'arquivos/legendas/cores/E793BE.png', descricao: 'P3' },
								{ char: '11', descricao: 'Carandiru' },
								{ char: '12', descricao: 'DEIC' },
								{ char: '13', descricao: 'IPREM' },
								{ char: '14', descricao: 'Mart Center' },
								{ char: '15', descricao: 'São Quirino' },
								{ char: '16', descricao: 'Josão Veloso' },
								{ char: '17', descricao: 'Nadir Figueiredo' },
								{ char: '18', descricao: 'Morvan I' },
								{ char: '19', descricao: 'Morvan II' }
							]
						],
						textos: {
							'Base': 'MDC 2004',
							'Elaboração': 'SPUrbanismo, 2020'
						}
					},
					{
						titulo: 'Zoneamento – Lei n° 16.402/2016',
						path: 'arquivos/arco-tiete-2/mapas/mapa7-2_zoneamento.jpg',
						legendas: [
							[
								{ path: 'arquivos/legendas/cores/5E4134.png', descricao: 'ZC' },
								{ path: 'arquivos/legendas/cores/9F6646.png', descricao: 'ZC-ZEIS' },
								{ path: 'arquivos/legendas/cores/6C2864.png', descricao: 'ZDE-1' },
								{ path: 'arquivos/legendas/cores/B89E40.png', descricao: 'ZEIS-1' },
								{ path: 'arquivos/legendas/cores/FFA237.png', descricao: 'ZEIS-2' },
								{ path: 'arquivos/legendas/cores/FFCF55.png', descricao: 'ZEIS-3' },
								{ path: 'arquivos/legendas/cores/269BEE.png', descricao: 'VETOS' },
								{ path: 'arquivos/legendas/cores/AA412C.png', descricao: 'ZEM' },
								{ path: 'arquivos/legendas/zoneamento/zemp.gif', descricao: 'ZEMP' }
							]
						],
						textos: {
							'Base': 'MDC 2004',
							'Elaboração': 'SPUrbanismo, 2020'
						}
					}
				]
			}" />
			<p>O desafio para o perímetro é estabelecer um tecido urbano qualificado na escala do bairro, sobretudo próximo aos principais eixos de mobilidade urbana, áreas com maior probabilidade de adensamento construtivo e populacional. Para tanto, a proposta consiste em realizar novas conexões no sistema de áreas verdes e transporte, com destaque para os Eixos de Integração Local ao longo dos córregos do Carandiru e da Divisa e a nova conexão viária e eixos verdes na direção Leste-Oeste, articulando os dois parques existentes – Juventude e do Trote – por meio do Apoio Urbano Norte.</p>
			<imagem
				:dados="{
					tipo: 'coluna',
					url: src('arquivos/arco-tiete-2/vista-aerea-limao-santana-vila-guilherme.jpg'),
					caption: 'Perímetro Santana-Vila Guilherme a partir da Av. Nadir Dias de Figueiredo.',
					fonte: 'Google Earth, 2019'
				}"
			/>

			<h4>Áreas De Transformação</h4>
			<p>As áreas de transformação demarcadas no perímetro seguem fundamentalmente aquelas indicadas como Eixos de Estruturação da Transformação Urbana – ZEM e ZEMP na LPUOS. A esse conjunto foram adicionadas novas quadras até então demarcadas pelo zoneamento como Zonas de Centralidade (ZC) ou como Zonas Especiais de Interesse Social (ZEIS). As primeiras considerando critérios de unidade de paisagem ou potencial de transformação e adensamento em função do transporte coletivo e do comércio existente e as últimas, considerando a equivalência aos parâmetros originais da zona.</p>
			<p>Fundamentalmente, o eixo metropolitano – Av. Cruzeiro do Sul – e o eixo da Av. Joaquina Ramalho concentrarão os incentivos para as transformações pioneiras no perímetro geral de intervenção. Os recursos capturados a partir da valorização desses territórios suportarão a implantação dos trechos do Apoio Norte no perímetro, ativando novas áreas de adensamento.</p>
			<ul>
				<li>T2 - áreas sem limite de gabarito: concentram-se basicamente no eixo do Metrô, entre as Av. Santos Dumont e a Av. Cruzeiro do Sul e Ataliba Leonel. </li>
				<li>T3 - restrição de gabarito de altura, limitado a 48m: quadras incluídas entre a Av. Cruzeiro do Sul e o Córrego do Carandiru, estabelecendo uma transição de alturas em direção ao futuro parque. A única exceção se dá na quadra identificada como Projeto Estratégico Carandiru, pois a ZEIS-2 já libera o gabarito; já na Vila Guilherme, todas as Áreas de Transformação foram classificadas como T3, pois a limitação do gabarito ocorre devido às restrições da estrutura fundiária, sobretudo ao longo do Apoio Urbano Norte, apresentando vias perpendiculares estreitas. No caso das quadras ao longo da Av. Joaquina Ramalho, entende-se que a ausência de corredor futuro é condição de limitação à capacidade de suporte para o adensamento, mediante restrição do gabarito.</li>
			</ul>

			<h4>Áreas De Qualificação</h4>
			<p>Áreas de transição em relação aos eixos de transporte e apresentando adensamento moderado e gabaritos limitados entre 48m e 28m. Tais quadras estão localizadas ao longo da orla do Rio Tietê, nas grandes glebas privadas e nos miolos de bairro.</p>

			<ul>
				<li>Q1 - espera-se a continuidade de um processo de transformação e substituição de usos de forma orgânica, impulsionado a partir da implantação dos eixos de mobilidade e do desenvolvimento imobiliário das áreas mais densas no entorno: correspondem fundamentalmente às quadras entre a Rua Miguel Mentem, a leste, e a Rua João Veloso Filho, o oeste. Consiste no tecido urbano mais desenvolvido em todo o perímetro inserido na Vila Guilherme, com lotes e quadras de médio e pequeno porte e boa conectividade viária.  São nestas áreas também que se encontram boa parte dos lançamentos imobiliários dos últimos anos, com predominância de condomínios residenciais verticais que utilizam grandes lotes disponíveis. </li>
				<li>Q2 - definição de uma orla fluvial com baixa intensidade de ocupação do solo e da reserva de glebas passíveis de parcelamento do solo: engloba praticamente todo o território definido como ZPI-1, entre as quadras localizadas entre a Rua da Coroa e a Marginal Tietê. Boa parte da área apresenta glebas e lotes de grande dimensão, ocupados por equipamentos comerciais horizontais e serviços de logística, denotando que a saída da atividade industrial é um processo consolidado; situação semelhante também é encontrada nas quadras entre o Córrego do Carandiru, a Av. Otto Baumgart e a Rua Miguel Mentem, que abrigam o complexo do Shopping Center Norte, Shopping Lar Center e as áreas de feiras e eventos; finalmente, as áreas demarcadas como ZM próximas ao Parque da Juventude também foram classificadas como Q2. Trata-se de quadras ocupadas por residências unifamiliares, com lotes de pequeno porte e com baixo potencial de transformação.  A área também é envolvida pelo Parque da Juventude, apresentando um conjunto de vias locais conectadas unicamente à outra via local –a Rua Antônio dos Santos Neto, paralelo à Av. Zaki Narchi. Tais características indicam que se trata e uma área que poderá recepcionar adensamento mediano, sem grandes impactos locais. O entorno imediato do Parque do Trote, por sua vez, é formado por grandes glebas de praticamente dois proprietários, com destaque para a área que abriga o Mart Center, com cerca de 16 ha. As áreas são classificadas pela LPUOS como Zonas Eixo de Transformação Metropolitano (ZEMP) e a conversão dessas áreas em Q2 alinha-se com as diretrizes de tombamento do Parque do Trote (Resolução 15/CONPRESP/2013). De acordo com a Resolução, o lote localizado na esquina da Av. Nadir Dias de Figueiredo e Rua São Quirino terá gabarito máximo de 7 metros, taxa de permeabilidade de 30% e a exigência de implantação de pelo menos um elemento arbóreo a cada 25 metros quadrados de área permeável. Em relação à área envoltória, a Resolução estabelece uma faixa de proteção visando à recuperação/manutenção do ecossistema da área que anteriormente abrigou a Sede da Sociedade Paulista de Trote, com as seguintes diretrizes: gabarito máximo de 25 metros e, para os lotes com área maior de 300m², taxa de permeabilidade de 30% e previsão de implantação de pelo menos um elemento arbóreo a cada 25 metros quadrados de área permeável.</li>
			</ul>
			<h4>Áreas De Preservação</h4>
			<p>Correspondem ao entorno imediato do Parque da Juventude, sua delimitação tem por objetivo preservar a manutenção do maciço arbóreo e garantir a desobstrução à visual do parque em relação às áreas de adensamento mais vigoroso no entorno.</p>

			<ul>
				<li>P3 - As áreas ao redor do Parque da Juventude são classificadas pela LPUOS como Zonas de Ocupação Especial (ZOE). São áreas basicamente ocupadas por grandes equipamentos públicos, de ocupação horizontal, sem impacto da paisagem. O que se pretende, no PIU, é atribuir parâmetros à ZOE, de forma a garantir a unidade de paisagem do Parque da Juventude e seus lotes e glebas confrontantes; </li>
			</ul>
			<galeria :gallery_attrs="galeriaProjetosEstrategicos3" />
		</section>
		<section>
			<h2 class="titulo" indent="1">Instrumentos de gestão ambiental</h2>
			<p>O PIU tem o papel de promover o ordenamento e a reestruturação urbana em áreas subutilizadas e com potencial de transformação, preferencialmente localizadas na MEM, para melhor aproveitamento da terra urbana e consequente aumento nas densidades construtivas e demográficas, implantação de novas atividades econômicas e emprego e atendimento às necessidades de habitação e de equipamentos às necessidades da população (Art. 134 – PDE).</p>
			<p>Uma vez que os Perímetros de Intervenção propostos pelo PIU Arco Tietê incidem sobre as áreas que compõem a várzea do Rio Tietê, o grande desafio deste PIU é interromper o processo de degradação físico e ambiental da área e promover uma transformação urbana que garanta a recuperação da qualidade ambiental, através da compatibilização de usos e tipologias de parcelamento do solo urbanos com condicionantes geológica-geotécnicas e hidrológicas, em consonância com os objetivos específicos propostos pelo PDE para o Setor Orla Ferroviária e Fluvial da Macroárea de Estruturação Metropolitana- MEM.</p>
			<p>Como anteriormente mencionado, a área da várzea do rio, inicialmente ocupada por loteamentos industriais, apresenta quadras de grandes dimensões e extensas áreas impermeabilizadas, atividade que ao longo dos anos provocou a contaminação do solo, como demonstrado no Diagnóstico através das informações de cadastro da CETESB.  Neste sentido, busca-se que o processo de transformação orientado pelo regramento proposto pelo PIU Arco Tietê seja capaz de qualificar o território mitigando problemas ambientais decorrentes deste modelo de ocupação: alagamentos, inundações e ilhas de calor.</p>
			<p>Outra importante contribuição do PIU, do ponto de vista ambiental, será a oportunidade de remediação dos terrenos contaminados pela atividade industrial, uma vez que a revitalização das áreas degradadas e o reaproveitamento de terrenos subutilizados resultará em ações parcelamento em todas as suas modalidades: loteamento; desmembramento; remembramento; reparcelamento e parcelamento de interesse social (art. 49, LPUOS).</p>
			<p>Os parâmetros urbanísticos propostos pelo PIU Arco Tietê para as Áreas de Transformação, Qualificação e Preservação buscam o equilíbrio do potencial construtivo originalmente previsto no zoneamento para a totalidade dos lotes contidos nos Perímetros de Intervenção, não diferenciando ou subtraindo áreas consolidadas. De modo que os Coeficientes de Aproveitamento a serem determinados por lei, promovam o equilíbrio entre as áreas e não agravem o potencial construtivo definido originariamente pelo zoneamento.</p>
			<p>Busca-se, assim, reafirmar o compromisso de adequar as densidades propostas em função do programa de intervenções e da perspectiva de uma transformação concentrada, mais coerente com a diretriz de se construir uma cidade mais compacta.</p>
			<p>De modo geral, a expectativa é que a densidade, que antes era considerada baixa nos três Perímetros de Intervenção, inferior inclusive à média do Município – em torno de 74 hab/ha – convirja para a média no caso de Santana-Vila Guilherme (de 58 para 79 hab/ha). Nos casos da Lapa-Freguesia (60 hab/ha em 2017) e do Limão-Casa Verde (67 hab/ha em 2017), o incremento populacional praticamente dobrará a densidade, que ficará em torno de 127 e 136 hab/ha,  respectivamente.</p>
			<p>O reequilíbrio da oferta de potencial construtivo adicional, que passa a estar associado às melhorias de infraestrutura urbana, busca promover a chegada de novos moradores em áreas bem servidas de infraestrutura urbana, correspondendo a um aumento das respectivas densidades populacionais.  Ou seja, o incremento de cerca de 81 mil novos moradores estimado pelo PIU para os três Perímetros de Intervenção é um movimento que acompanha a implantação de novas infraestruturas urbanas que darão suporte a intensificação do uso do solo.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">Custos da Intervenção</h2>
			<p>A estimativa geral dos custos para implantação do Programa de Intervenções do PIU Arco Tietê é obtida a partir do levantamento das principais quantidades necessárias ao detalhamento dos custos estimados para cada uma das Ferramentas Urbanísticas apresentadas no Programa de Intervenções.</p>
			<p>Os custos baseiam-se em orçamentos de projetos com características técnicas similares, elaborados para a SP Urbanismo e em composições de custos obtidas a partir das Tabelas de Custos Unitários da SIURB – Secretaria Municipal de Infraestrutura Urbana e Obras. É importante ressaltar que os custos apresentados não contemplam os valores referentes à aquisição de terrenos.</p>
			<p>Além disto, para a elaboração da estimativa de custos das ferramentas adotadas no PIU Arco Tietê, como em projetos anteriores, foram estabelecidas algumas premissas de projeto:</p>
			<ul>
				<li>largura média para vias e calçadas existentes;</li>
				<li>classificação de vias entre simples e dupla;</li>
				<li>fator de preexistência, que implica na aplicação de um percentual sobre o custo das intervenções, refletindo as condições das calçadas, pavimento e arborização pré-existentes;</li>
				<li>adoção de percentuais sobre custos correlatos.</li>
			</ul>

			<p>Levando em conta (1) a possibilidade de compartilhamento de recursos com outras fontes como o  PIU Anhembi e PIU Setor Central, (2) possibilidade de implantação de intervenções como contrapartidas urbanísticas dos Projetos Estratégicos e, ainda, (3) priorização de intervenções consideradas estruturadoras da transformação, a estimativa de custos prevista para o Programa de Intervenções do Arco Tietê divide-se em total e básica.</p>
			<p>Especificamente no caso da habitação, o custo básico é estimado considerando as unidades atualmente localizadas no perímetro e impactadas pelo Programa de Intervenções ou Projetos Estratégicos, além da demanda em atendimento provisório, com compromisso habitacional e originária do perímetro e cadastrada pela SEHAB. De todo modo, o atendimento futuro seguirá critérios de SEHAB, garantindo que as famílias eventualmente removidas sejam reassentadas dentro do perímetro.</p>
			<p>Quanto a Provisão de Moradia para impacto no déficit acumulado foi calculada levando em conta estimativa da capacidade de produção habitacional dentro do território, considerando estratégias como a viabilização de empreendimentos habitacionais de interesse social em imóveis públicos municipais ou de outros entes federativos e áreas com potencial para aplicação da Cota de Solidariedade.</p>
			<p>Ainda, considerando os atuais resultados financeiros apresentados à frente e os desdobramentos dos estudos técnicos do PIU Arco Tietê nas próximas etapas, o percentual de custos representados pela habitação no programa de intervenções básico do Arco Tietê ( 25%), deverá ser ajustado conforme novos resultados financeiros e levando-se em conta a capacidade de produção habitacional estimada dentro do território por meio do emprego de demais estratégias de viabilização de áreas para provisão habitacional.</p>
			<p>No caso do Programa de Intervenções do Arco Tietê, a mobilidade representa a maioria dos custos, reflexo de um território caracterizado por um processo de urbanização incompleto, com territórios que não receberam infraestrutura suficiente e que ainda hoje permanecem monofuncionais cuja transformação urbana objetiva ser capazes de contribuir para integrar, articular e reforçar as potencialidades de cada porção dos perímetros de acordo com sua vocação, alinhadas às diretrizes gerais.</p>
			<p>O gráfico do percentual de cada um dos eixos temáticos, abaixo, exemplifica a proporção de cada eixo em relação ao custo básico estimado.</p>

			<pizza-custos :bgSrc="src('arquivos/arco-tiete-2/7_Grafico_custo_ACT_320px-custo.png')" />
			<programa-intervencoes :bgSrc="src('arquivos/arco-tiete-2/ProgramaIntervencoes-Prancheta_1.png')" />
			<p class="grafico__nota">Programa de Intervenções – Tabela de Ferramentas. Elaboração: SP-Urbanismo, 2020</p>

			<imagem
				:dados="{
					tipo: 'coluna',
					url: src('arquivos/arco-tiete-2/programa-intervencoes_estimativa.gif'),
					caption: 'Programa de Intervenções – Estimativa de Custos. Elaboração: SP-Urbanismo 2020'
				}"
			/>
		</section>

		<section>
			<h2 class="titulo" indent="1">Modelos de gestão democrática e plano de intervenção</h2>
			<p>O estudo de viabilidade econômica da 2ª Consulta Pública do PIU apresenta as estimativas de produção de demanda imobiliária e uma estimativa preliminar de receita num horizonte de planejamento de 20 anos para os 3 perímetros de intervenção: Lapa-Freguesia, Limão-Casa Verde e Santana-Vila Guilherme.</p>
			<p>Primeiramente, a demanda é avaliada por meio do comportamento pregresso da produção imobiliária bem como sua projeção futura nos perímetros e respectivas áreas do entorno. Os resultados são traduzidos em termos de área privativa e de potencial adicional de construção, sendo confrontados e distribuídos no território em função da oferta de terrenos transformáveis e da disposição dos parâmetros urbanísticos nos respectivos perímetros de intervenção.</p>
			<p>Posteriormente, procura-se avaliar o preço estabelecido para o potencial construtivo adicional. Para isso, foram elaboradas diversas simulações de viabilidade de empreendimentos imobiliários de referência, que incluem informações de despesas, taxas de retorno e, em particular, o custo da Outorga Onerosa do Direito de construir calculado a partir do Cadastro de Valor de Terrenos (Quadro 14 do PDE). Mensuradas as quantidades e a distribuição do potencial adicional de construção e seu preço, chega-se na projeção de receita em dois cenários, um conservador e outro otimista.</p>
			<p>Por fim, considerando as especificidades dos perímetros e dos instrumentos de ordenamento e reestruturação urbana do PDE, foi realizado um estudo específico que buscou estabelecer critérios para a classificação do perímetro Lapa-Freguesia como uma Operação Urbana Consorciada (OUC).</p>

			<h4>Estimativas Da Demanda Da Produção Imobiliária</h4>
			<p>Nesta primeira etapa de análise, foram contabilizados os dados de lançamento imobiliário da EMBRAESP, entre 2010 e 2017, para os três perímetros de intervenção e também para uma área de influência de 1 Km em relação a cada perímetro, considerando a possibilidade de atração de parte do mercado para o interior das áreas objeto de intervenção, em função das externalidades positivas promovidas pela implantação do projeto urbanístico.</p>
			<p>Em linhas gerais, ao longo do período analisado foram lançados cerca de 1,6 milhões m², considerando a produção imobiliária nos perímetros e respectivas áreas de influência, o que equivale a uma produção anual média 208 mil m² de área privativa, . Apesar da produção relativamente modesta dentro dos Perímetros de Intervenção, a produção imobiliária considerando parte da atividade das áreas de influência chega a 9,9% do total do Município, reiterando o fato do mercado se concentrar junto aos bairros mais consolidados, nas bordas do Arco Tietê.</p>

			<imagem :dados="{
				tipo: 'mapa',
				titulo: 'Lançamentos imobiliários no Arco Tietê e áreas de influência dos perímetros de intervenção',
				url: src('arquivos/arco-tiete-2/mapas/mapa8.jpg'),
				legenda: [
					{ fundo: '#BACCA8', descricao: 'Parque, praças e canteiros' },
					{ fundo: '#6CB5D5', descricao: 'Hidrografia' },
					{ linha: '#535353', espessura: 3, descricao: 'Ferrovia' },
					{ linha: '#535353', espessura: 3, descricao: 'Linha Metrô' },
					{ simbolo: src('arquivos/legendas/icones/cptm-estacoes.png'), descricao: 'Estação CPTM' },
					{ simbolo: src('arquivos/legendas/icones/metro-estacoes.png'), descricao: 'Estação Metrô' },
					{ simbolo: src('arquivos/legendas/icones/terminal-onibus-existentes.png'), descricao: 'Terminal de Ônibus' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'Perímetro de Intervenção' },
					{ simbolo: src('arquivos/legendas/icones/ponto-laranja.png'), descricao: 'Lançamentos Embraesp' },
					{ borda: '#DA5050', espessura: 3, pontilhado: true, descricao: 'Perímetro de Abrangência (1km)' }
				],
				fonte: 'Embraesp. Elaboração: SP-Urbanismo.'
			}"></imagem>

			<tabela :dados="{
				titulo: ' Área útil total por setor e perímetro, 2010 a 2017 (m²)',
				colunas: [
					{ titulo: 'Item' },
					{ titulo: 'Área privativa' },
					{ titulo: 'Part (%)' },
				],
				linhas: [
					[
						[ { data: 'Lapa-Freguesia' }],
						[ { data: '1.210.855' } ],
						[ { data: '7,2' } ],
					],
					[
						[ { data: 'Limão-Casa Verde' } ],
						[ { data: '161.786' } ],
						[ { data: '1,0' } ],
					],
					[
						[ { data: 'Santana-V. Guilherme' }],
						[ { data: '291.918' } ],
						[ { data: '1,7' } ],
					],
					[
						[ { data: 'Total analisado' } ],
						[ { data: '1.664.560' } ],
						[ { data: '9,9' } ],
					],
					[
						[ { data: 'MSP' } ],
						[ { data: '16.797.154' } ],
						[ { data: '100,0' } ],
					]
				],
				fonte: 'Embraesp. Elaboração: SP-Urbanismo.',
				tabelaListrada: false
			}"/>

			<p>A partir da observação do comportamento da produção imobiliária, foram realizadas projeções da área privativa futura. Para estimar essa capacidade de absorção nos próximos 20 anos, foi considerada uma metodologia padrão em estudos econométricos, baseada em modelos autoregressivos e de média móvel (ARIMA).</p>
			<p>Foram definidas duas séries para cada perímetro de intervenção. A primeira, correspondente a um Cenário Conservador, considera apenas a série histórica de produção no interior do perímetro. Entretanto, avalia-se que a produção deverá migrar paulatinamente das regiões mais consolidadas, atraentes da perspectiva da demanda, mas limitada em termos de oferta de terrenos transformáveis. Assim, foi construído um Cenário Otimista, que captura parte da produção das áreas de influência ao longo do tempo.</p>
			<p>O perímetro Lapa-Freguesia e arredores apresentou forte crescimento de lançamentos, sobretudo, a partir de meados dos anos 2000, crescimento localizado na área de influência. Assim, as projeções apresentam uma distancia entre os dois cenários: o primeiro reflete o quadro relativamente estável de produção na área de várzea, enquanto o segundo mostra o aquecimento do mercado em localidades como a Vila Romana. Assim, estima-se uma produção entre 30 mil m² e 89 mil m² de área privativa para o perímetro. No perímetro Limão-Casa Verde, a série histórica de lançamentos foi mais intermitente. Considerando os cenários conservador e otimista, projeta-se uma produção mínima anual de 10 mil m² e máxima de 21 mil m² de área privativa. Já no perímetro Santana-Vila Guilherme, o volume assemelha-se aquele observado no Limão-Casa Verde. A produção mínima estimada para o setor é de 9 mil m² de área privativa e a máxima de 27 mil m².</p>

			<h6>Lançamentos imobiliários e projeção no perímetro Lapa-Freguesia, 1992 – 2017, + 20 anos </h6>
			<lancamentos2 :bgSrc="src('arquivos/arco-tiete-2/LancamentosImobiliarios-Prancheta_2.png')" />
			<p class="grafico__nota">Fonte: Embraesp. Elaboração: SP-Urbanismo.</p>

			<h6>Lançamentos imobiliários e projeção no perímetro Limão-Casa Verde, 1992 – 2017, + 20 anos</h6>
			<lancamentos3 :bgSrc="src('arquivos/arco-tiete-2/LancamentosImobiliarios-Prancheta_3.png')" />
			<p class="grafico__nota">Fonte: Embraesp. Elaboração: SP-Urbanismo.</p>

			<h6>Lançamentos imobiliários e projeção no perímetro Santana-Vila Guilherme, 1992 – 2017, + 20 anos</h6>
			<lancamentos4 :bgSrc="src('arquivos/arco-tiete-2/LancamentosImobiliarios-Prancheta_4.png')" />
			<p class="grafico__nota">Fonte: Embraesp. Elaboração: SP-Urbanismo.</p>
			<table>
				<tr>
					<th colspan="7">Projeção de área privativa média anual e acumulado de 20 anos (m²)</th>
				</tr>
				<tr>
					<td>Perímetro</td>
					<td colspan="2">Média anual</td>
					<td colspan="2">Conservador</td>
					<td colspan="2"><br>Otimista</td>
				</tr>
				<tr>
					<td>Lapa-Freguesia</td>
					<td>29.808</td>
					<td>89.365</td>
					<td>596.161</td>
					<td>1.787.291</td>
					<td>60</td>
					<td>65</td>
				</tr>
				<tr>
					<td>Limão-Casa Verde</td>
					<td>10.465</td>
					<td>20.929</td>
					<td>209.302</td>
					<td>418.580</td>
					<td>21</td>
					<td>15</td>
				</tr>
				<tr>
					<td>Santana-V ila Guilherme</td>
					<td>9.279</td>
					<td>26.987</td>
					<td>185.572</td>
					<td>539.736</td>
					<td>19</td>
					<td>20</td>
				</tr>
				<tr>
					<td>Total</td>
					<td>49.552</td>
					<td>137.280</td>
					<td>991.034</td>
					<td>2.745.608</td>
					<td>100</td>
					<td>100</td>
				</tr>
			</table>
			<p class="grafico__nota">Fonte: Embraesp. Elaboração: SP-Urbanismo.</p>
			<p>Ou seja, o resultado da produção imobiliária projetada para os próximos 20 anos corresponde, num Cenário Conservador, a cerca de <strong>0,99 milhões m² de área privativa</strong> e, no Cenário Otimista, considerando a atração de parte da produção imobiliária do entorno, aproximadamente <strong>2,74 milhões m² de área privativa</strong>. Pela metodologia utilizada, os dados revelam a alta participação do perímetro Lapa-Freguesia, que corresponde entre 60% a 65% da produção imobiliária estimada para os três perímetros de intervenção no Arco Tietê. Nesse caso, abre-se a possibilidade de utilização de instrumentos urbanísticos capazes de gerar maior absorção da valorização imobiliária, como a Operação Urbana Consorciada.</p>

			<h3>8.2 Estimativa De Oferta De Potencial Construtivo Adicional</h3>
			<p>A estimativa de oferta de potencial construtivo adicional parte da identificação das áreas com maior probabilidade de transformação, ou seja, a partir do uso observado, imputam-se aqueles mais passíveis de transformação, considerando a disponibilidade do mercado imobiliário em alterar as tipologias existentes. Foram considerados como transformáveis os terrenos com uso comercial ou residencial horizontal (com lotes maiores que 500m²), galpões, indústrias inativas, estacionamentos e lotes vagos. Não computam como terrenos transformáveis os usos comercial e residencial vertical, além de usos especiais, como espaços culturais, educacionais entre outros.</p>
			<p>O potencial construtivo adicional foi calculado basicamente a partir do cruzamento entre a área dos lotes transformáveis e o estoque total de potencial construtivo estabelecido pelas Áreas de Transformação, Qualificação e Preservação dos perímetros de intervenção, como pode ser analisado nos mapas e tabela a seguir.</p>
			<p>Como resultado, temos uma taxa de transformação média de 68% dos lotes, sendo o perímetro Santana-Vila Guilherme aquele que concentra maior disponibilidade de lotes passíveis de transformação, na ordem de 72%. Portanto, dentro das probabilidades de transformação analisadas, o <strong>potencial construtivo adicional ofertado</strong> é de <strong>5.635.681 m²</strong> na Lapa-Freguesia, <strong>3.042.060 m²</strong> no Limão-Casa Verde e <strong>6.769.482 m²</strong> em Santana-Vila Guilherme.</p>

			<imagem :dados="{
				tipo: 'mapa',
				titulo: 'Taxa de transformação no perímetro do Arco Tietê',
				url: src('arquivos/arco-tiete-2/mapas/mapa9.jpg'),
				legenda: [
					{ fundo: '#BACCA8', descricao: 'Parque, praças e canteiros' },
					{ fundo: '#6CB5D5', descricao: 'Hidrografia' },
					{ simbolo: src('arquivos/legendas/icones/ferrovia.png'), descricao: 'Ferrovia' },
					{ simbolo: src('arquivos/legendas/icones/linha-de-metro.png'), descricao: 'Linha Metrô' },
					{ simbolo: src('arquivos/legendas/icones/cptm-estacoes.png'), descricao: 'Estação CPTM' },
					{ simbolo: src('arquivos/legendas/icones/metro-estacoes.png'), descricao: 'Estação Metrô' },
					{ simbolo: src('arquivos/legendas/icones/terminal-onibus-existentes.png'), descricao: 'Terminal de Ônibus' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'Perímetro de Intervenção' },
					{ borda: '#000', espessura: 3, descricao: 'Até 0.2' },
					{ fundo: '#DDCFC4', descricao: '0.2 - 0.4' },
					{ fundo: '#D9AE93', descricao: '0.4 - 0.6' },
					{ fundo: '#B77B55', descricao: '0.6 - 0.8' },
					{ fundo: '#7B4829', descricao: '0.8 - 1.0' }
				],
				fonte: 'Embraesp. Elaboração: SP-Urbanismo.'
			}"></imagem>

			<table>
				<tr>
					<th colspan="7">Área transformável e taxa de transformação por setor</th>
				</tr>
				<tr>
					<td>Perímetro</td>
					<td colspan="2">Área de terreno transformável (m²)</td>
					<td colspan="2">Conservador</td>
					<td colspan="2"><br>Otimista</td>
				</tr>
				<tr>
					<td>(m²)</td>
					<td>Taxa de transformação (%)</td>
					<td>Potencial construtivo adicional das áreas transformáveis(m²)</td>
					<td>596.161</td>
					<td>1.787.291</td>
					<td>60</td>
					<td>65</td>
				</tr>
				<tr>
					<td>Lapa-Freguesia</td>
					<td>2.164.140</td>
					<td>3.289.235</td>
					<td>66</td>
					<td>5.635.681</td>
					<td>21</td>
					<td>15</td>
				</tr>
				<tr>
					<td>Limão-Casa Verde</td>
					<td>998.915</td>
					<td>1.381.078</td>
					<td>72</td>
					<td>3.042.060</td>
					<td>19</td>
					<td>20</td>
				</tr>
				<tr>
					<td>Santana-Vila Guilherme</td>
					<td>2.855.269</td>
					<td>4.200.986</td>
					<td>68</td>
					<td>6.769.482</td>
					<td>100</td>
					<td>100</td>
				</tr>
			</table>
			<p class="grafico__nota">Fonte: Geoinfo/SMDU. Elaboração: SP-Urbanismo.</p>

			<h3>Distribuição Espacial da Produção Imobiliária</h3>
			<p>Com base nos dados de oferta e demanda, foi possível estimar qual a proporção de área privativa seria onerosa, ou seja, qual área poderia compor o potencial construtivo adicional demandado pelo mercado em cada perímetro. Sabe-se que a razão entre área privativa e área computável é da ordem de 1,2 e que o potencial construtivo adicional será distribuído de forma distinta entre as Áreas de Transformação, Qualificação e Preservação. Assim, os valores apresentados na tabela a seguir correspondem a uma estimativa geral da área considerada onerosa em cada perímetro de intervenção, tanto em função da distribuição das áreas transformáveis e quanto dos parâmetros urbanísticos propostos pelo PIU.</p>
			<p>Em linhas gerais, a demanda por terrenos e por área computável com base nas projeções do comportamento do mercado imobiliário é inferior à oferta de potencial construtivo adicional, mesmo considerando uma perspectiva de 20 anos. Pelas estimativas, seriam demandados entre 0,7 e 2,0 milhões de m² de potencial construtivo adicional em todo Arco Tietê, enquanto a oferta é de 15,4 milhões. A Lapa-Freguesia deve ser a região com maior consumo de potencial construtivo adicional, entre 59 e 64% do total do PIU Arco Tietê.</p>

			<table>
				<tr>
					<th colspan="7">Demanda e oferta por Potencial Construtivo Adicional e participação no consumo</th>
				</tr>
				<tr>
					<td>Perímetro</td>
					<td colspan="2">Demanda (m²)</td>
					<td colspan="2">Consumo (%)</td>
					<td colspan="2"><br>Otimista</td>
				</tr>
				<tr>
					<td>Conservador</td>
					<td>Otimista</td>
					<td>Conservador</td>
					<td>Otimista</td>
					<td>1.787.291</td>
					<td>60</td>
					<td>65</td>
				</tr>
				<tr>
					<td>Lapa-Freguesia</td>
					<td>420.303</td>
					<td>1.260.071</td>
					<td>5.635.681</td>
					<td>59</td>
					<td>64</td>
					<td>15</td>
				</tr>
				<tr>
					<td>Limão-Casa Verde</td>
					<td>161.697</td>
					<td>323.375</td>
					<td>3.042.060</td>
					<td>23</td>
					<td>16</td>
					<td>20</td>
				</tr>
				<tr>
					<td>Santana-Vila Guilherme</td>
					<td>130.154</td>
					<td>378.552</td>
					<td>6.769.482</td>
					<td>18</td>
					<td>19</td>
					<td>100</td>
				</tr>
			</table>
			<p class="grafico__nota">Fonte: Embraesp e Geoinfo/SMDU. Elaboração: SP-Urbanismo.</p>

			<h3>8.4 Projeção de Receita dos Perímetros de Intervenção</h3>
			<p>Concluído os estudos de oferta e demanda de potencial adicional de construção, o cálculo da receita é relativamente simples. Tomando a fórmula da outorga como:</p>

			<p class="formula">R = (V/Ca).(AC–AT). Fs . Fp</p>

			<p>Onde <strong>V</strong> é o valor de cadastro (a base de cálculo para o valor da terra), <strong>Ca</strong> é o coeficiente de aproveitamento, que juntos representam o preço em metros quadrados, e (<strong>AC–AT</strong>) a área computável menos a área de terreno que equivale à área onerosa (ou a quantidade), e <strong>Fs</strong> e <strong>Fp</strong> os fatores de solidariedade e planejamento. Basta fazer o somatório das áreas previamente calculadas e multiplicar pelo valor de cadastro de cada perímetro.</p>
			<p>Sabe-se que o valor de cadastro <strong>V</strong> está condicionado ao valor de terrenos instruído pelo Quadro 14 (Cadastro de valor de Outorga Onerosa) do Plano Diretor Estratégico de 2014. De uma maneira geral, o cadastro tem valores superiores na região centro-sul da cidade, sendo que os valores internos ao perímetro do Arco Tietê são mais modestos, principalmente do lado norte do Rio.</p>

			<imagem :dados="{
				tipo: 'mapa',
				titulo: 'Valor de cadastro médio por quadra no perímetro do Arco Tietê',
				url: src('arquivos/arco-tiete-2/mapas/mapa10.jpg'),
				legenda: [
					{ fundo: '#BACCA8', descricao: 'Parque, praças e canteiros' },
					{ fundo: '#6CB5D5', descricao: 'Hidrografia' },
					{ simbolo: src('arquivos/legendas/icones/ferrovia.png'), descricao: 'Ferrovia' },
					{ simbolo: imgSrc('arquivos/legendas/icones/linha-de-metro.png'), descricao: 'Linha Metrô' },
					{ simbolo: imgSrc('arquivos/legendas/icones/cptm-estacoes.png'), descricao: 'Estação CPTM' },
					{ simbolo: imgSrc('arquivos/legendas/icones/metro-estacoes.png'), descricao: 'Estação Metrô' },
					{ simbolo: imgSrc('arquivos/legendas/icones/terminal-onibus-existentes.png'), descricao: 'Terminal de Ônibus' },
					{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'Perímetro de Intervenção' },
					{ fundo: '#E4D9C5', descricao: '0 - 400' },
					{ fundo: '#D2BEB7', descricao: '400 - 800' },
					{ fundo: '#B9A5A7', descricao: '800 - 1.200' },
					{ fundo: '#977275', descricao: '1.200 - 1.600' },
					{ fundo: '#5A3A3D', descricao: '1.600 - 2.000' },
					{ fundo: '#261025', descricao: '2.000 - 2.400' }
				],
				fonte: ': Geoinfo/SMDU. Elaboração: SP-Urbanismo.'
			}"></imagem>

			<p>Os preços finais de cobrança de Outorga Onerosa para cada metro quadrado de potencial construtivo adicional tem impacto direto sobre a modelagem financeira dos perímetros de intervenção. Os preços situados entre R$ 500,00 e R$300,00, apresentados a seguir, foram obtidos a partir da relação entre a arrecadação via Outorga Onerosa para as diversas tipologias e parâmetros presentes nos perímetros analisados e o correspondente potencial construtivo adicional das áreas transformáveis.</p>

			<table>
				<tr>
					<th colspan="3">Valor de cadastro de terreno e preço do potencial construtivo adicional</th>
				</tr>
				<tr>
					<td>Perímetro</td>
					<td>Cadastro de valor de terreno para fins de Outorga Onerosa (R$/m²)</td>
					<td>Preço do potencial construtivo adicional</td>
				</tr>
				<tr>
					<td>Lapa-Freguesia</td>
					<td>1.572</td>
					<td>479</td>
				</tr>
				<tr>
					<td>Limão-Casa Verde</td>
					<td>1.083</td>
					<td>322</td>
				</tr>
				<tr>
					<td>Santana-Vila Guilherme</td>
					<td>1.214</td>
					<td>359</td>
				</tr>
			</table>
			<p class="grafico__nota">Fonte: Geoinfo/SMDU. Elaboração: SP-Urbanismo.</p>

			<p>Sem alteração no cadastro de valores do Quadro 14 e tomando o fator de planejamento igual a 1,0, estima-se que a receita com a venda de potencial construtivo adicional seja de <strong>R$ 300 milhões no Cenário Conservador</strong> e de <strong>R$ 843 milhões no Cenário Otimista.</strong></p>

			<table>
				<tr>
					<th colspan="6">Projeção inicial de receita segundo perímetros e cenários</th>
				</tr>
				<tr>
					<td rowspan="2">Perímetro</td>
					<td colspan="2">Potencial construtivo adicional (m²)</td>
					<td rowspan="2">Preço do PCA (R$/m²)</td>
					<td colspan="2">Receita (R$)</td>
				</tr>
				<tr>
					<td>Otimista</td>
					<td>Conservador</td>
					<td>Otimista</td>
					<td>Conservador</td>
				</tr>
				<tr>
					<td>Lapa-Freguesia</td>
					<td>420.303</td>
					<td>1.260.071</td>
					<td>479</td>
					<td>201.226.206</td>
					<td>603.276.756</td>
				</tr>
				<tr>
					<td>Limão-Casa Verde</td>
					<td>161.697</td>
					<td>323.375</td>
					<td>322</td>
					<td>52.115.781</td>
					<td>104.225.698</td>
				</tr>
				<tr>
					<td>Santana-Vila Guilherme</td>
					<td>130.154</td>
					<td>378.552</td>
					<td>359</td>
					<td>46.730.755</td>
					<td>135.916.512</td>
				</tr>
				<tr>
					<td>Total</td>
					<td>712.154</td>
					<td>1.961.998</td>
					<td>1.160</td>
					<td>300.072.742</td>
					<td>843.418.966</td>
				</tr>
			</table>
			<p class="grafico__nota">Fonte: Geoinfo/SMDU. Elaboração: SP-Urbanismo.</p>

			<p>Para compreendermos se os valores de terreno para fins de Outorga Onerosa e o preço do potencial construtivo adicional não estejam subdimensionados, ou seja, compatíveis com as realidades de mercado, foi realizado um estudo comparando o preço do Potencial Construtivo Adicional com o preço de venda da unidade e os demais custos enfrentados pelo incorporador imobiliário.</p>
			<p>Para essa avaliação, foram elaboradas simulações de 15 empreendimentos-tipo residenciais e não residenciais, seguindo os parâmetros urbanísticos das Áreas de Transformação, Qualificação e Preservação e preços médios de venda do metro quadrado praticados na região, que variam de R$8750,00/m² na Lapa-Freguesia até R$7.500,00/m².</p>
			<p>Os resultados demonstram que dentro de Taxas Internas de Retorno praticadas pelo marcado imobiliário paulistano, a relação Outorga Onerosa/VGV não chegou a atingir 2% em nenhum dos empreendimentos simulados, ficando bem abaixo da linha referencial dos 5%, o que pode ser explicado pela adoção de uma base de cálculo de preços de terreno bastante defasada.</p>
			<p>Portanto, frente aos resultados financeiros apresentados, considerando o preço de venda observado na região e as margens de viabilidade reveladas pelas simulações dos empreendimentos, conclui-se que o preço do potencial construtivo adicional tem ampla margem para ser majorado, melhorando os resultados para os perímetros de intervenção. Tais atualizações deverão ser alvo do desdobramento dos estudos técnicos do PIU Arco Tietê nas próximas etapas.</p>

			<h3>Oportunidades de Utilização do Instrumento Operação Urbana Consorciada</h3>
			<p>Apesar da modelagem econômico-financeira realizada até esta etapa de desenvolvimento do PIU Arco Tietê basear-se na utilização da Outorga Onerosa como ferramenta de acesso ao potencial construtivo adicional, dentro de Áreas de Intervenção Urbana (AIU), uma das questões reveladas ao longo dos estudos foi a possibilidade de alienação do estoque via leilões de CEPAC, os Certificados de Potencial Adicional de Construção. Se assim for, o instrumento de reordenamento urbanístico a ser utilizado, de acordo com as definições do Art. 134 do PDE, passa a ser a Operação Urbana Consorciada (OUC). Para tanto, é necessário estabelecer premissas que uma região precisaria ter, necessariamente, para apresentar um ambiente favorável ao surgimento de uma OUC.</p>
			<p>Foram escolhidas três premissas para apresentação de condições necessárias para instalação de uma OUC: (i) a existência de áreas transformáveis no perímetro de desenvolvimento, (ii) a possibilidade de majoração do potencial construtivo e, por fim, (iii) a existência de atratividade do mercado imobiliário para atuação na região.</p>
			<p>No primeiro caso, trata-se do conceito de áreas transformáveis para instalação de novos empreendimentos, que consomem potencial construtivo além do básico. Os estudos urbanísticos e os dados de oferta demonstraram que existe uma ampla margem para transformação nos três perímetros de intervenção e, considerando a valorização da região promovida por uma OUC, novos terrenos poderão também ser vistos como possibilidades de incorporação, mesmo que seu uso seja valorizado.</p>
			<p>No segundo caso, a majoração do potencial construtivo pode também ser interpretada como a intensificação do uso do solo urbano, possibilitada a partir da provisão de novas infraestruturas o que, por sua vez, possibilitaria o aumento do suporte para maiores densidades. Nos três perímetros de intervenção foi proposto o incremento de áreas verdes e da rede de mobilidade urbana, com destaque para a Lapa, que também receberá novas estações de Metrô planejadas. Esse conjunto de melhorias associado ao aumento do potencial construtivo traria uma nova frente de expansão com terrenos que apresentariam melhor eficiência na produção imobiliária.</p>
			<p>Por fim, a existência de atratividade do mercado imobiliário corresponde tanto ao comportamento da produção imobiliária interna ao perímetro e no seu entorno, mas também diz respeito às condições urbanísticas, como a qualidade urbana e o interesse da população em morar na região e a possibilidade de desenvolvimento de novos polos comerciais e de serviço. Embora as duas premissas anteriores também devam ser verificadas, com diferentes intensidades, para a implantação de uma AIU, a alta atratividade ao mercado imobiliário cria condições excepcionais para a alienação de potencial construtivo via CEPAC, uma vez que os leilões podem capturar esse interesse já existente, antecipando os recursos que serão investidos em melhorias públicas no território.</p>
			<p>Dentro os três Perímetros de Intervenção apresentados, os estudos atualmente em curso apontam que o perímetro Lapa-Freguesia é aquele com maior potencial para implantação de uma OUC, definição que será apresentada e debatida publicamente nas próximas etapas do PIU Arco Tietê.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">Modelo de Gestão Democrática e Plano de Implantação</h2>
			<h3>Modelo de Gestão Democrática</h3>
			<imagem
				:dados="{
					tipo: 'coluna',
					url: src('arquivos/arco-tiete-2/modelo-gestao.jpeg'),
					caption: 'Diagrama Modelo de Gestão Democrática.'
				}"
			/>
			<p>Dentre as estratégias de desenvolvimento urbano propostas pelo PDE, tem destaque o fortalecimento da participação popular nas decisões dos rumos da cidade, considerando as diver¬sas instâncias e os diferentes instrumentos de participação e controle social. Tais estratégias garantem a participação de representantes dos diferentes segmentos da população de forma direta ou por intermédio de asso¬ciações representativas, nos processos de planejamento e gestão da cidade, de realização de investimentos públicos e na elaboração, implementação e avaliação de planos, programas e projetos de desenvolvimento.</p>
			<p>O PDE definiu, no artigo 136, que os PIU elaborados pelo Poder Público deverão apresentar propostas de transfor¬mações urbanísticas, econômicas e ambientais no períme¬tro onde for aplicado o instrumento, cabendo ao PIU indi¬car os objetivos prioritários da intervenção, as propostas relativas a aspectos urbanísticos, ambientais, sociais, eco¬nômico-financeiros e modelo de gestão democrática que contemple mecanismos de participação e controle social e instrumentos para monitoramento e avaliação das ações.</p>
			<p>O Decreto nº 56.901 de 29 de março de 2016, que disciplina a elaboração dos Projetos de Intervenção Urbana, assegu¬ra a realização de consultas públicas em etapas definidas de sua elaboração, para discussão e aperfeiçoamento das propostas – procedimento já adotado pelo PIU Arco Tietê.</p>
			<p>Para a gestão participativa do PIU, na sua etapa de implan¬tação, propõe-se o a criação de um Conselho Gestor para cada Perímetro de Intervenção que poderão recorrer aos órgãos colegiados já cons¬tituídos para sua composição.</p>
			<p>Cada Subprefeitura conta com um Núcleo Regional de Planejamento (NRP), constituído por técnicos das diversas Secretarias Municipais, que, nos termos do § 1º do Artigo 324 do PDE, atua “(...) como um colegiado intersetorial e inter¬disciplinar, responsável pela integração e articulação das políticas setoriais bem como pelo acompanhamento das ações voltadas à concretização dos princípios diretrizes e ações do Plano Diretor, dos Planos Regionais e dos Planos de Desenvolvimento de Bairro”.</p>
			<p>Os NRP foram constituídos e seus integrantes designados pela Portaria SMPR Nº 31 de 7 de Julho de 2017, publicada pela Secretaria Municipal das Subprefeituras. Já o Decreto nº 57.537, de 16 de dezembro de 2016, dispõe em seu artigo 7º, inciso V, que os NRP, entre outras atribuições, devem “constituir subgrupos para acompanhamento de interven¬ções específicas”.</p>
			<p>Dessa forma, propõe-se que a representação da Municipa¬lidade no Conselho Gestor conte com integrantes dos NRP das subprefeituras contempladas pelos perímetros propostos pelo PIU Arco Tietê, ou seja – Lapa, Freguesia do Ó/Brasilândia, Casa Verde/Cachoeirinha, Santana/Tucuruvi e Vila Guilherme/Vila Maria que terão a incumbência de atuar como interlocutores dos órgãos-secretarias que representam no Conselho Gestor, validando propostas e tomadas de decisão. Essa atuação, contudo, não tem sido plenamente verifica¬da no funcionamento dos Conselhos Gestores, pois encami-nhamentos acordados nas reuniões dos conselhos vigentes eventualmente não são recepcionados pelos órgãos da administração competentes e, por vezes, ao contrário, de¬cisões tomadas pela administração conflitam com tais en¬caminhamentos.</p>
			<p>Por essa razão, parece-nos indispensável a representação da Secretaria de Governo no Conselho Gestor, em vista das competências desse órgão, que incluem assistir e assesso¬rar ao Prefeito nos assuntos relacionados à coor¬denação e integração das ações do Governo.</p>
			<p>Para a participação dos munícipes, os artigos 34 e 35 da Lei nº 15.764 de 27 de maio de 2013 dispõem sobre a constituição e atribuições dos Conselhos Participativos Municipais, dentre as quais “III – zelar para que os direi¬tos da população e os interesses públicos sejam atendidos nos serviços, programas e projetos públicos da região e co¬municar oficialmente aos órgãos competentes em caso de deficiências neste atendimento”.</p>
			<p>O Decreto nº 54.156, de 1º de agosto de 2013, que regula¬menta os dois artigos citados, estabelece um número mí¬nimo de 5 conselheiros por Distrito, o número máximo de 1 conselheiro para cada 10.000 habitantes e o máximo de 51 conselheiros por Subprefeitura, eleitos por votação secreta para um mandato de 2 anos.</p>
			<p>Parte da representação de munícipes pode ser preenchida por representantes dos Conselhos Participativos Munici¬pais, observada a obrigatoriedade desses representantes se vincular aos distritos abrangidos no PIU Arco Tietê de modo a permitir a representatividade da diversidade do território.</p>
			<p>Adicionalmente aos representantes desses órgãos consti¬tuídos, poderão integrar o Grupo Gestor entidades da so¬ciedade civil apontadas nas audiências públicas no curso da discussão do projeto.</p>
			<p>A atuação do Conselho Gestor deverá prever a articulação com os Conselhos Gestores de ZEIS, cuja constituição será exigida, por meio de atuação da SEHAB, na etapa de elaboração dos Planos de Urbanização ou Projetos de Intervenção de sua competência no âmbito dos respectivos perímetros, bem como deliberar acerca das intervenções destes decorrentes para o território ao qual estão vinculados em momento futuro, quando regu¬lamentada a intervenção.</p>

			<h3>9.1 Modelo de Gestão Democrática</h3>
			<p>Para faseamento da implantação das intervenções definidas pelo PIU Arco Tietê, deverão ser elaboradas Propostas de Diretrizes de Investimento - PDI, correspondentes a grupos de intervenções públicas específicas territorializadas, sele¬cionadas do Programa de Intervenções, abrangendo um conjunto orgânico de ações previstas para uma parcela de¬finida do território de projeto ou a solução de um problema específico no âmbito do PIU – por exemplo, provisão de creches.</p>
			<p>As Propostas de Diretrizes de Investimento- PDI serão elaboradas pela SP-Urbanismo, responsável pela implantação do PIU Arco Tietê, e serão submetidas ao Conselho Gestor, a quem caberá acompanhar e deliberar sobre as prioridades de implantação desses planos.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">Ficha técnica</h2>
			<p>
				<b>José Armênio de Brito Cruz</b><br>
				Presidência da São Paulo Urbanismo
			</p>
			<p>
				<b>Leonardo Amaral Castro</b><br>
				Diretoria de Desenvolvimento
			</p>
			<p>
				<b>Marlon Rubio Longo</b><br>
				Gerência de Estruturação de Projetos
			</p>
			<p>
				<b>Modelagem Urbanística</b><br>
				Ana Claudia Rocha Bonfim<br>
				Anna Carvalho de Moraes Barros (coordenação)<br>
				Eduardo Tavares de Carvalho<br>
				Kaique Xavier da Silva (estágio)<br>
				Laísa Bócoli Chamme<br>
				Luigi Zorzella Franco (estágio)<br>
				Rafael Giorgi Costa<br>
				Rosana Yamaguti<br>
				Thiago Francisco Carneiro
			</p>
			<p>
				<b>Modelagem Econômica</b><br>
				Alan Americo da Silva (estágio)<br>
				Allan Martino Matos<br>
				Bruno Martins Hermann<br>
				Gabriel Vasquez Rodriguez<br>
				Mayna de Campos Queiroz
			</p>
			<p>
				<b>Estimativa de custos</b><br>
				Maria Cristina Fernandes<br>
			</p>
			<p>
				<b>Desenvolvimento web</b><br>
				Thomas Len Yuba<br>
			</p>
		</section>
		<!-- <section>
			<h2 class="titulo" indent="1">Comments</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magnam soluta nisi illum temporibus maiores? Fuga obcaecati cumque eos? Repudiandae minus accusamus mollitia blanditiis saepe non, eveniet sit sapiente eum.</p>
			<Comments :attr="{id:commentId(true), context:'Apresentação'}" v-if="parseInt(estaConsulta.ativo) === 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">CommentsContext</h2>
			<CommentsContext :attr="{ context: 'test' }" :id="commentId()">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti quae iure, quia recusandae eos! Recusandae culpa quod dolorum excepturi amet voluptatum perferendis doloribus, minus commodi. Dignissimos odit ipsam nam?</p>
			</CommentsContext>
		</section>

		<section>
			<h2 class="titulo" indent="1">CommmentsOption </h2>
			<CommentsOption v-if="estaConsulta.ativo == 1" :options="[
				{ id: commentId(), context: 'Edital' },
				{ id: commentId(), context: 'Termo de referência' },
				{ id: commentId(), context: 'Anexo I do Termo de Referência' }
			]">
			</CommentsOption>
		</section> -->

		<!-- <section>
			<h3 class="titulo" indent="1">Contribua</h3>
			<Pergunta :id="commentId()" :context='"Pergunta 1"' :postid="1">
				<template #pergunta>
					Quais atividades de interesse público podem funcionar no Hipódromo de Cidade Jardim fora dos períodos em que ocorrem corridas e treinamentos e preservando o patrimônio histórico e as características da vizinhança?
				</template>
				<template #info>
					Info
				</template>
			</Pergunta>
		</section> -->

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && parseInt(estaConsulta.ativo) === 1" :attr="{id:commentId(), context:'Comentarios'}"></Comments>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'
import { fallbacks } from '@/mixins/fallbacks'
import Comments from '@/components/Comments'
import CommentsContext from '@/components/CommentsContext'
import CommentsOption from '@/components/CommentsOption'
import Pergunta from '@/components/Pergunta'
import CommentsLoader from '@/components/CommentsLoader'
import Processo2 from '@/components/graf/arco-tiete-2/Processo2'
import Escalas from '@/components/graf/arco-tiete-2/Escalas'
import PerimetroInfoLapa from '@/components/graf/arco-tiete-2/PerimetroInfoLapa'
import PerimetroInfoSantana from '@/components/graf/arco-tiete-2/PerimetroInfoSantana'
import PerimetroInfoLimao from '@/components/graf/arco-tiete-2/PerimetroInfoLimao'
import DadosGerais from '@/components/graf/arco-tiete-2/DadosGerais'
import PizzaCustos from '@/components/graf/arco-tiete-2/PizzaCustos'
import ProgramaIntervencoes from '@/components/graf/arco-tiete-2/ProgramaIntervencoes'
import Lancamentos2 from '@/components/graf/arco-tiete-2/Lancamentos2'
import Lancamentos3 from '@/components/graf/arco-tiete-2/Lancamentos3'
import Lancamentos4 from '@/components/graf/arco-tiete-2/Lancamentos4'
import DesafiosObjetivos from '@/components/graf/arco-tiete-2/DesafiosObjetivos'
import Imagem from '@/components/Imagem'
import LayerExplorer from '@/components/LayerExplorer'
import Galeria from '@/components/Galeria'
import Tabela from '@/components/Tabela'

export default {
	name: 'ArcoTiete2',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			galeriaProjetosEstrategicos1: {
				width: 992,
				height: 525,
				legendas: true,
				images: [
					{
						url: this.src('arquivos/arco-tiete-2/pe1/1.jpg'),
						state: true,
						title: '5.3.4 Projeto Estratégico Abril',
						icon: this.src('arquivos/arco-tiete-2/pe1/1-1.jpg'),
						legenda: 'O Projeto Estratégico Abril envolve unicamente o lote onde se instalou o parque gráfico da editoria no final da década de 1960. O lote, de 5,1 ha, possui uma frente de 430m para a Marginal Tietê, sendo uma importante oportunidade para consolidação da conexão entre a Lapa e a Freguesia do Ó, de forma articulada ao programa de intervenções. As benfeitorias públicas previstas incluem obtenção de novas áreas verdes associadas ao Rio Tietê, a dispositivos de absorção ou retenção das águas pluviais e à ancoragem da ciclopassarela do eixo do Tiburtino, implantação de sistema viário para quebra da quadra e acesso desde à ciclopassarela até a área verde ao norte, implantação de trecho do alargamento previsto para a Rua da Balsa, implantação de equipamento público.',
						id: 1
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe1/2.jpg'),
						state: false,
						title: '5.3.5 Projeto Estratégico rua da Balsa',
						icon: this.src('arquivos/arco-tiete-2/pe1/2-1.jpg'),
						legenda: 'O Projeto Estratégico da Rua da Balsa abrange lotes públicos em parte ocupados pela Diretoria Regional de Educação Freguesia/Brasilândia, e podem ser mais bem aproveitados a partir de um projeto de adensamento construtivo associado às benfeitorias públicas. Com a nova transposição para pedestres e ciclistas prevista pelo Programa de Intervenções, a área terá uma conexão direta com o eixo do Curtume, aumentando sua oportunidade de transformação e viabilizando o prolongamento do eixo em direção à Freguesia do Ó. A relevância desta transformação é potencializada pela implantação de área verde no sentido norte-sul, contemplando dispositivos de absorção das águas pluviais, implantação de equipamento público e habitação de interesse social.',
						id: 2
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe1/3.jpg'),
						state: false,
						title: '5.3.6 Projeto Estratégico Trivelato',
						icon: this.src('arquivos/arco-tiete-2/pe1/3-1.jpg'),
						legenda: 'O Projeto Estratégico do Trivelato é composto por terrenos de propriedade privada e do Município de São Paulo sendo ocupados por diversos usos: supermercados, galpões, depósitos e empresas, além de abrigar Escolas de Samba e o conjunto habitacional Trivelato, implantado sobre um antigo meandro do Rio Tietê. O perímetro oferece a oportunidade de transformação de seus lotes visando a implantação de novas áreas verdes vinculadas a dispositivos de drenagem urbana, visando mitigar os problemas de alagamento na área. Também oferece a oportunidade de implantação, na íntegra, das vias públicas definidas na Lei de Alinhamento Viário do Arco Tietê (Lei 16.541/2016) e implantação de Habitação de Interesse Social.',
						id: 3
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe1/4.jpg'),
						state: false,
						title: '5.3.7 Projeto Estratégico Bento Bicudo',
						icon: this.src('arquivos/arco-tiete-2/pe1/4-1.jpg'),
						legenda: 'O Projeto Estratégico Bento Bicudo tem por objetivo viabilizar a abertura de um novo sistema viário associado a novas áreas de lazer e Habitação de Interesse Social. É composto de 11 lotes, sendo alguns de propriedade particular e outros de propriedade do Município de São Paulo. Deverão ser elaboradas estratégias de drenagem urbana associadas a espaços de lazer e esportes, tendo em vista a presença do CDC Bento Bicudo.',
						id: 4
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe1/5.jpg'),
						state: false,
						title: '5.3.8 Projeto Estratégico Eng. Fox',
						icon: this.src('arquivos/arco-tiete-2/pe1/5-1.jpg'),
						legenda: 'O perímetro do Projeto Estratégico Eng. Fox é composto de lotes de propriedade de incorporadoras e lotes de propriedade particular, que somam 2,5ha. Tem como objetivo de viabilizar a implantação do prolongamento da R. Eng. Fox em direção à Rua Marina Ciufuli Zanfelice. Trata-se de uma ruptura de quadra extremamente importante para o território, conectando de forma direta o eixo que envolve a estação Lapa do Trem, a EMEI Neyde Guzzi e do Mercado da Lapa com a área de lazer do CDC Bento Bicudo.',
						id: 5
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe1/6.jpg'),
						state: false,
						title: '5.3.9 Projeto Estratégico CDC Mauro Bezerra',
						icon: this.src('arquivos/arco-tiete-2/pe1/6-1.jpg'),
						legenda: 'O CDC Mauro Bezerra encontra-se hoje em funcionamento, mas caracteriza-se pelo seu isolamento em relação ao entorno urbano, principalmente em relação à Av. Ermano Marchetti, onde há extensos muros e gradis. O Projeto Estratégico poderá contemplar sua reforma e otimização, incorporando-o de forma harmônica à área verde proposta pelo Programa de Intervenções. Também há previsão de abertura de via no prolongamento da Rua Sebastião Jayme Pinto em direção à Rua Marina Ciufuli Zanfelice, criando nova frente urbana para essa área verde proposta.',
						id: 6
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe1/7.jpg'),
						state: false,
						title: '5.3.10 Projeto Estratégico Santa Marina',
						icon: this.src('arquivos/arco-tiete-2/pe1/7-1.jpg'),
						legenda: 'O terreno, de 25,8 ha, hoje ocupado pela indústria Saint-Gobain do Brasil, abrigou a antiga Vidraria Santa Marina, estabelecida na área em fins do século XIX e possui edifícios e chaminés tombadas pelo Conselho Municipal de Preservação do Patrimônio Histórico, Cultural e Ambiental da Cidade de São Paulo – CONPRESP (Resolução de Tombamento de Nº 05/CONPRESP/2009). A LPUOS classificou o lote como uma Zona de Estruturação Metropolitana (ZEM), sendo importante que sua eventual transformação contemple, além de ligações viárias com o entorno, a implantação de Áreas Verdes e Equipamentos Públicos de forma associada aos bens tombados e à estação Água Branca da Linha 7 da CPTM e projetos das futuras estações previstas para a área – Estação Água Branca da Linha 6 do Metrô e nova estação da CPTM - criando um sistema de espaços públicos que se estenda até a Av. Ermano Marchetti.',
						id: 7
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe1/8.jpg'),
						state: false,
						title: '5.3.11 Projeto Estratégico Guaicurus',
						icon: this.src('arquivos/arco-tiete-2/pe1/8-1.jpg'),
						legenda: 'O Projeto Estratégico Guaicurus envolve os equipamentos existentes entre a Rua Guaicurus e a ferrovia (Poupatempo, Terminal Rodoviário da Lapa, Mercado da Lapa, Subprefeitura da Lapa, Tendal da Lapa e a antiga Estação Ciência, hoje Junta Comercial do Estado de São Paulo), prolongando-se até a Estação Água Branca do Trem, além de envolver as áreas da própria ferrovia, alvo de diversos projetos para novas estações – unificação das estações Lapa da linha 7 e 8 do trem, nova estação Água Branca do Trem e nova Estação Água Branca do Metrô, da futura Linha 6. A estratégia é integrar os espaços livres das estações e equipamentos existentes, além de promover a implantação de novas transposições sobre ou sob a ferrovia e implantar novas áreas verdes.',
						id: 8
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe1/9.jpg'),
						state: false,
						title: '5.3.12 Projeto Estratégico Pátio da Lapa',
						icon: this.src('arquivos/arco-tiete-2/pe1/9-1.jpg'),
						legenda: 'O Projeto Estratégico do Pátio da Lapa totaliza quase 35ha, ocupados por pátios de manobra, galpões de manutenção dos trens da CPTM, áreas técnicas da Alstom e uma unidade do SENAI. Recentemente, diversos galpões da oficina de trens da antiga SP Railway, localizados no interior do perímetro, foram tombados pela resolução de Nº 11/2018 do Conpresp. Essa grande gleba consiste na maior barreira urbana do setor de modo que em seu projeto estratégico devem ser previstas formas de conexão entre as vias do entorno e a implantação de áreas verdes associadas aos bens tombados.',
						id: 9
					}
				]
			},
			galeriaProjetosEstrategicos2: {
				width: 992,
				height: 525,
				legendas: true,
				images: [
					{
						url: this.src('arquivos/arco-tiete-2/pe2/1.jpg'),
						state: true,
						title: '5.4.3 Projeto Estratégico Iapó',
						icon: this.src('arquivos/arco-tiete-2/pe2/1-1.jpg'),
						legenda: 'O Projeto Estratégico Iapó incide sobre imóvel de propriedade da SPUrbanismo, cuja transformação  apresenta a oportunidade de melhorar a acessibilidade através da implantar sistema viário que permeie o lote, conectando a Rua Iapó com a Rua Zanzibar, possibilitando o desenvolvimento urbano em ambos os lados da via pública, permitindo um acesso mais direto à Av. Ordem e Progresso, a integração com as áreas verdes do entorno,  bem como  a implantação de Unidades Habitacionais de Interesse Social',
						id: 1
					}
				]
			},
			galeriaProjetosEstrategicos3: {
				width: 992,
				height: 525,
				legendas: true,
				images: [
					{
						url: this.src('arquivos/arco-tiete-2/pe3/1.jpg'),
						state: true,
						title: '5.4.8 Projeto Estratégico Carandiru',
						icon: this.src('arquivos/arco-tiete-2/pe3/1-1.jpg'),
						legenda: 'O projeto tem como principais objetivos produzir Habitação de Interesse Social e Habitação de Mercado Popular nos terrenos públicos, respeitando a ZEIS existente, bem como estabelecer conexões e acessos e uma frente verde junto às áreas de preservação do Córrego do Carandiru, conectando o Parque do Carandiru com o Parque da Juventude. A proximidade com a estação de metrô Carandiru e a frente para a Avenida Zaki Narchi trazem também benefícios para novos usos se instalarem. Empreendimentos de uso misto, com comércio, serviços e equipamentos públicos que atendam a população local, ajudam a criar uma nova frente para a avenida. Deverão, ainda, considerar usos existentes como o Centro de Reabilitação e o Ecoponto, que poderão ser remanejados dentro do perímetro.',
						id: 1
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe3/2.jpg'),
						state: false,
						title: '5.4.9 Projeto Estratégico DEIC',
						icon: this.src('arquivos/arco-tiete-2/pe3/2-1.jpg'),
						legenda: 'O projeto consiste na otimização de áreas públicas que apresentam hoje fundiário fragmentado e alta incidência de áreas residuais e pátios de estacionamento. Ainda que o projeto considere que as edificações principais existentes sejam mantidas, modernizadas ou, então, remanejadas dentro do perímetro, a abertura de nova via poderá liberar novas áreas para empreendimentos e habitação de interesse social, tirando partido da proximidade com os equipamentos de mobilidade do entorno e com o novo parque previsto pelo programa de intervenções.',
						id: 2
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe3/3.jpg'),
						state: false,
						title: '5.4.10 Projeto Estratégico IPREM',
						icon: this.src('arquivos/arco-tiete-2/pe3/3-1.jpg'),
						legenda: 'As quadras onde hoje se localizam o Instituto de Previdência Municipal de São Paulo - IPREM, a Escola Municipal de Administração Pública de São Paulo - EMASP e outros equipamentos públicos estão, em grande parte, subutilizadas, com áreas vazias e pátios de estacionamento. Esta leitura, somada à existência de propriedades municipais e de uma ZEIS, resultou na definição do perímetro. A área já foi objeto de chamamento pela COHAB-SP em 2018, visando à seleção de empresas interessadas em programa de Parceria Público-Privada para construção de habitação de Interesse Social e não recebeu, naquele momento, interessados. Contudo, a estruturação de propostas pra área poderá, ao longo do desenvolvimento do trabalho, resultar em mais de um perímetro de Projeto Estratégico. Além dos melhoramentos previstos na Lei nº 16.541/2016, o projeto poderá proporcionar a abertura de vias locais complementares que garantam maior permeabilidade da quadra, conectando com viário existente no entorno, produção de habitação de interesse social, novos equipamentos públicos e áreas verdes.',
						id: 3
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe3/4.jpg'),
						state: false,
						title: '5.4.11 Projeto Estratégico Mart Center',
						icon: this.src('arquivos/arco-tiete-2/pe3/4-1.jpg'),
						legenda: 'Com aproximadamente 16 ha, a gleba hoje ocupada pelo complexo de exposições é adjacente ao Parque do Trote e permanece absolutamente isolada do entorno. A possibilidade de atualização do complexo e a implantação de novos usos que diversifiquem as atividades e ativem as ruas e avenidas adjacentes passa a ser uma premissa importante a partir da implantação do Apoio Urbano Norte, que estabelecerá uma conexão intra-bairros importante na Zona Norte. A proposta para do Projeto Estratégico é criar possibilidades de desenvolvimento imobiliário da gleba, considerando as exigências e restrições de gabarito estabelecidas pela Resolução do Conpresp, prevendo novas conexões viárias, novas áreas institucionais e novas áreas verdes articuladas ao Parque do Trote.',
						id: 4
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe3/5.jpg'),
						state: false,
						title: '5.4.12.	Projeto Estratégico São Quirino',
						icon: this.src('arquivos/arco-tiete-2/pe3/5-1.jpg'),
						legenda: 'O perímetro deste Projeto Estratégico inclui um conjunto de grandes lotes com basicamente três titularidades, ocupados hoje por galpões de atividade logística e gráfica. É notável a quantidade de pátios de estacionamento, que definem uma ocupação rarefeita de uma área com grandes vantagens de localização, principalmente a partir da implantação do Apoio Urbano Norte. As diretrizes para a transformação dos lotes visam à melhoria da acessibilidade, rompendo as grandes quadras,  bem como sua integração com o entorno, como a Praça Arquimedes Memória. O projeto estratégico, que também é atingido pela faixa de proteção de gabarito do Parque do Trote, visa garantir a transição em relação ao Parque, a implantação dos alargamentos necessários ao Apoio Urbano Norte, novas aberturas de vias, além de novas áreas verdes e áreas institucionais.',
						id: 5
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe3/6.jpg'),
						state: false,
						title: '5.4.13 Projeto Estratégico João Veloso-Divisa',
						icon: this.src('arquivos/arco-tiete-2/pe3/6-1.jpg'),
						legenda: 'O perímetro incorpora quatro grandes lotes hoje ocupados por empresas ligadas à construção civil, atividade industrial e logística. A tipologia predominante é o galpão e grandes pátios de estacionamento, com exceção de uma torre corporativa na R. Dep. Vicente Penido, ao lado de uma ETEC. A possibilidade de transformação dessas áreas abre a oportunidade para implantação de novas áreas verdes junto ao eixo do Córrego da Divisa e também na Rua João Veloso Filho. Ambas as áreas verdes estabelecerão um ponto intermediário nos percursos que conectam o Parque do Trote ao futuro Parque previsto mais ao sul, na Av. Nadir Dias de Figueiredo. Ademais, a quadra tem uma posição estratégica e a abertura de novas vias não só possibilita a conexão entre a Av. Nadir Dias de Figueiredo e a Rua João Veloso Filho, mas também a distribuição de densidades de forma criar uma transição entre as áreas de transformação e qualificação adjacentes.',
						id: 6
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe3/7.jpg'),
						state: false,
						title: '5.4.14 Projeto Estratégico Nadir Figueiredo',
						icon: this.src('arquivos/arco-tiete-2/pe3/7-1.jpg'),
						legenda: 'As áreas incluídas no perímetro expressam muito claramente o processo de saída das grandes plantas industriais da Vila Guilherme. Formado principalmente por duas glebas que, somadas, perpassam aproximadamente 16 ha, a transformação do perímetro resolve importantes diretrizes do PIU, como a implantação do Parque ao longo do Córrego da Divisa, associado a equipamento público, a implantação de novas conexões viárias e a previsão de nova frente verde que recepcionará futura transposição de pedestres e ciclistas sobre as marginais e o Rio Tietê.',
						id: 7
					},
					{
						url: this.src('arquivos/arco-tiete-2/pe3/8.jpg'),
						state: false,
						title: '5.4.15.	Projeto Estratégico Morvan Dias De Figueiredo',
						icon: this.src('arquivos/arco-tiete-2/pe3/8-1.jpg'),
						legenda: 'Estes Projetos Estratégicos têm como objetivos principais implantar nova frente verde em relação à orla do Rio Tietê, abrindo áreas para recepcionar a futura ciclopassarela prevista no Programa de Intervenções, proporcionar rupturas de quadras, dando continuidade ao tecido urbano das áreas de qualificação, no interior do bairro, bem como permitir a construção de habitações de interesse social. Ambas as quadras incluídas no perímetro apresentam estrutura fundiária com geometria complexa, abrangendo múltiplos proprietários públicos e privados.',
						id: 8
					}
				]
			}
		}
	},
	components: {
		Comments,
		CommentsLoader,
		CommentsContext,
		CommentsOption,
		Pergunta,
		PageTop,
		Indice,
		Apoio,
		Processo2,
		Escalas,
		PerimetroInfoLapa,
		PerimetroInfoSantana,
		PerimetroInfoLimao,
		DadosGerais,
		PizzaCustos,
		ProgramaIntervencoes,
		Lancamentos2,
		Lancamentos3,
		Lancamentos4,
		DesafiosObjetivos,
		Imagem,
		LayerExplorer,
		Galeria,
		Tabela
	},
	mixins: [ consultasCommons, fallbacks ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

table {
	margin-bottom: 0
}

.formula {
	padding: 1rem;
	background-color: $cinza-3;
}

.grafico__nota {
	margin: auto;
	font-size: small;
	font-family: $grotesca;
	padding: 1rem 0 0;
	text-align: center;
}
</style>
