<template>
	<div class="ParqueMinhocao" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/parque-minhocao_480w.jpg" :esta_consulta="estaConsulta" :social="social_assets">
			<template slot="titulo"><div>PIU Parque Minhocão</div></template>
			<template slot="subtitulo"><div>1ª consulta pública – Elementos prévios ao desenvolvimento do projeto</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<p>A Prefeitura do Município de São Paulo, por intermédio da Secretaria Municipal de Desenvolvimento Urbano – SMDU e da São Paulo Urbanismo–SP Urbanismo, em conformidade com a cronologia estabelecida pelo Plano Diretor Estratégico – PDE e ao disposto no Art. 2º do Decreto n° 56.901/2016, promove a presente Consulta Pública sobre os elementos prévios necessários à proposição de Projeto de Intervenção Urbana Parque Municipal do Minhocão - PIU PARQUE MINHOCÃO, a ser realizada entre os dias 17 de maio a 14 de junho, com vistas a colher contribuições da sociedade civil ao posterior desenvolvimento e consolidação deste projeto.</p>
			<p>O conteúdo desta consulta pública tem por base os elementos definidos pelo art. 2º do referido decreto regulamentador dos projetos de intervenção urbana, correspondentes ao Diagnóstico Socioterritorial e ao Programa de Interesse Público, considerados como elementos específicos e indissociáveis do contexto do PIU do Setor Central da Macroárea de Estruturação Metropolitana - MEM, em desenvolvimento pela SP Urbanismo.</p>
			<Comments :attr="{id:1, context:'Apresentação'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Objetivo</h2>
			<p>O Projeto de Intervenção Urbana Parque Municipal do Minhocão (PIU Parque Minhocão) tem como objetivo o levantamento de insumos para o desenvolvimento do projeto de arquitetura e urbanismo deste equipamento, integrando-se às estratégias do Projeto de Intervenção Urbana do Setor Central da Macroárea de Estruturação Metropolitana (PIU Setor Central), em desenvolvimento pela municipalidade desde 2017 e, proposto para os distritos centrais de Santa Cecília, República, Sé, Bom Retiro, Pari e Brás e que abarca o eixo viário formado pela Rua Amaral Gurgel, pela Av. São João e pela Av. General Olímpio da Silveira, onde se desenvolve o Elevado, de forma a assegurar a harmonia e a coerência entre as propostas e a propiciar que as estratégias de desenvolvimento se reforcem mutuamente, sem perder de vista a natural necessidade de que o elevado, por sua relevância no contexto do PIU Setor Central, encontre um espaço específico para a sua discussão.</p>
			<Comments :attr="{id:2, context:'Objetivo'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Escopo e fases do PIU Parque Minhocão</h2>
			<p>O Escopo dos Projetos de Intervenção Urbana é definido conforme as diretrizes do Decreto nº 56.901/2016. O conteúdo técnico-jurídico básico do PIU Parque Minhocão se divide em três etapas:</p>
			<ul>
				<li>1ª Etapa - Apresentação dos Elementos Prévios ao desenvolvimento do Projeto: Diagnóstico e Programa de Interesse Público;</li>
				<li>2ª Etapa - Apresentação da proposta preliminar do PIU;</li>
				<li>3ª Etapa - Apresentação da proposta consolidada do PIU e da minuta da peça jurídica de regulação de seus dispositivos.</li>
			</ul>
			<!-- Figura 1 -->
			<figure>
				<Processo></Processo>
				<figcaption>Fluxograma de elaboração do PIU. Fonte: SP Urbanismo, 2019.</figcaption>
			</figure>
			<!-- /Figura 1 -->
			<p>A definição dos elementos prévios à elaboração do PIU é constituída por dois produtos, definidos no art. 2º do Decreto:</p>
			<ol class="decimais">
				<li><b>Diagnóstico</b> da área objeto de intervenção, com caracterização de seu contexto urbano, dos seus aspectos socioterritoriais e das carências e potencialidades mais relevantes a serem consideradas;</li>
				<li><b>Programa de interesse público</b> corresponde ao programa urbanístico do PIU, expressando o conjunto de aspectos urbanísticos a que o projeto a ser desenvolvido pretende dar respostas, considerando as diretrizes de planejamento expressas pelo PDE, a viabilidade da transformação  e adensamento construtivo e populacional para a área e o modo de gestão democrática.</li>
			</ol>
			<p>Neste sentido, o PIU Parque Minhocão apresenta como parte da presente consulta o conteúdo dos estudos coligidos pelo Grupo de Trabalho Intersecretarial instituído pelo Decreto 58.601/2019, com o objetivo de adotar medidas prévias necessárias à implantação gradativa do Parque do Minhocão e fazer recomendações técnicas para elaboração e execução do projeto do parque e do desenvolvimento dos planos setoriais a ele associados.</p>
			<p>O Desenvolvimento do PIU, expresso no Art. 4º do Decreto, ocorrerá após as medidas descritas nos arts. 2º e 3º, que serão especificadas adiante. O conteúdo final do PIU é constituído por três produtos:</p>
			<ol class="decimais">
				<li><b>Proposta de ordenamento ou reestruturação urbanística</b>, com a definição de elementos como programa de intervenções para o Parque Minhocão e seu entorno, suas fases de implantação e instrumentos de gestão programática e ambiental necessários;</li>
				<li><b>Modelagem econômica</b> do Parque Minhocão, considerando a origem dos recursos públicos ou privados necessários à viabilização e financiamento da implantação do parque e, eventualmente, dos custos de operação previstos, discriminando os investimentos associados ao programa de intervenções;</li>
				<li>Definição do <b>modelo de gestão democrática</b> de sua implantação, esclarecendo como se dará a governança da implantação e operação do Parque Minhocão, destacando os arranjos institucionais, as instâncias de participação e controle social, bem como os mecanismos de monitoramento e avaliação dos impactos da transformação urbanística pretendida sobre o desenvolvimento econômico e social da área objeto de estudo;</li>
			</ol>
			<p>Cabe destacar que os elementos que compõem o conteúdo expresso no decreto não são exaustivos, ou seja, não se resumem aos mencionados, podendo no decorrer do processo de desenvolvimento do PIU Parque Minhocão serem inseridos outros elementos que se fizerem necessários. Neste sentido, o conteúdo deste PIU deve ter suficiência para cumprir seu papel em cada etapa, informando a sociedade sobre as características da área de abrangência, as intenções do projeto e os impactos socioterritoriais esperados.</p>
			<p>A redação da peça jurídica que regulamenta o PIU Parque Minhocão está presente no art. 5º do referido decreto regulamentador, estando prevista a edição de um decreto pelo Executivo Municipal.</p>
			<p>Em todas as fases serão realizadas consultas e audiências públicas, apresentações a órgão colegiados (CMPU, CTLU, CPM e CADES regionais, entre outros), podendo ainda ser utilizadas ferramentas digitais com interfaces interativas e realizadas apresentações, debates e oficinas temáticas para aprofundamento de temas específicos, conforme a identificação das demandas durante o desenvolvimento do projeto e da realização do processo participativo.</p>
			<p>Após esta primeira Consulta Pública sobre os elementos prévios e a autorização pela SMDU, a SP Urbanismo dará continuidade ao desenvolvimento do PIU PARQUE MINHOCÃO, sistematizando o conteúdo técnico do projeto e seu dispositivo legal para submetê-lo ao debate com a sociedade, a fim de consolidar a proposta final do projeto e sua instrução formal.</p>
			<p>Deste modo, neste ato são apresentados:</p>
			<p>A <b>Parte 1 – Contexto de Planejamento e Diagnóstico Socioterritorial</b> - apresenta a inserção da iniciativa do PIU Parque do Minhocão no contexto de planejamento da política urbana municipal e do desenvolvimento do PIU Setor Central e uma consolidação das informações dos diagnósticos socioterritorial, de mobilidade e incomodidade ambiental para subsidiar as propostas que constituem o Programa de interesse Público.</p>
			<p>A <b>Parte 2 – Programa de Interesse Público</b> – apresenta os objetivos, diretrizes, premissas e elementos de estudo para a implantação gradual do Parque do Minhocão, e as medidas prévias para análise da iniciativa e seus resultados.</p>
			<Comments :attr="{id:3, context:'Escopo e fases do PIU Parque Minhocão'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Contexto de planejamento do PIU Parque Minhocão</h2>
			<p>O destino do Elevado João Goulart vem sendo objeto de discussão desde pelo menos 1976, quando foram iniciadas as rotinas de sua interdição ao tráfego veicular no período noturno.</p>
			<p>A consideração do impacto que o resultado dessa discussão teria sobre o cotidiano de grande número de munícipes fez com que a Lei n. 16.050/2014, o Plano Diretor Estratégico do Município de São Paulo (PDE) tratasse desse tema em uma de suas disposições. O parágrafo único do Artigo 375 do PDE estabeleceu:</p>
			<blockquote>“Lei especifica deverá ser elaborada determinando a gradual restrição ao transporte individual motorizado no Elevado Costa e Silva, definindo prazos até sua completa desativação como via de tráfego, sua demolição ou transformação, parcial ou integral, em parque.”</blockquote>
			<p>Essa disposição expressa o ideal de transformação e qualificação do tecido urbano previsto no PDE, que prioriza o transporte coletivo e o adensamento construtivo e populacional no entorno dos grandes eixos servidos por transporte coletivo e propõe o aumento das áreas de lazer e fruição pública, de modo a tornar o ambiente urbano mais aprazível e adequado à convivência humana.</p>
			<p>Após a edição do PDE foi aprovada a Lei Municipal n. 16.833/2018, que cria o Parque Municipal do Minhocão e estabelece a desativação gradativa do Elevado João Goulart. De acordo com esta lei, cabe ao Poder Executivo apresentar Projeto de Intervenção Urbana - PIU, por decreto ou por lei específica, considerando as particularidades do espaço em debate, com a finalidade de estabelecer as condicionantes urbanísticas específicas para o local, e regular a necessária transição da atual infraestrutura de mobilidade condição do equipamento (leito carroçável de interligação das regiões Leste-Oeste da cidade) para a nova situação como parque público. Este será o Projeto de Intervenção Urbana do Parque Minhocão, (PIU do Parque Minhocão), cujo processo de discussão ora se inicia.</p>
			<p>Paralelamente às determinações da Lei n. 16.833/2018, encontra-se em desenvolvimento na São Paulo Urbanismo  o Projeto de Intervenção Urbana do Setor Central – PIU Setor Central, que tem por objetivo tanto atualizar a Lei da Operação Urbana Centro como definir o planejamento urbanístico de todo território circundante, identificado na lei como o Setor Central da Macroárea de Estruturação Metropolitana (art. 12, inc. III c/c art. 12, § 3º, inc. VII do PDE).</p>

			<!-- Figura 2 -->
			<Imagem :dados="{
				tipo: 'mapa',
				url: imgSrc('arquivos/parque-minhocao/img/mapas/fig2.jpg'),
				titulo: 'PIU Setor Central da MEM – inserção do Parque Minhocão como projeto estratégico',
				legenda: [
					{ borda: '#9107fd', espessura: '3', descricao: 'Projetos Estratégicos do PIU Setor Central' },
					{ borda: '#333', pontilhado: true, espessura: '1', descricao: 'Perímetro do PIU Setor Central' }
				],
				fonte: 'SP Urbanismo, 2019'
			}"></Imagem>
			<!-- /Figura 2 -->

			<p>Como o PIU do Parque Minhocão se relaciona com PIU Setor Central? </p>
			<p>A gestão urbana é realizada em diversas escalas de abordagem. O PIU Setor Central propõe um Plano Urbanístico, um Programa de Intervenções e Regramentos e Incentivos específicos para 2.098 ha dos distritos centrais. Trata-se de uma nova camada de regulação urbanística que se combina ao PDE e à Lei de Parcelamento Uso e Ocupação do Solo. Desta maneira, o PIU Setor Central abrange as quadras lindeiras ao Minhocão e, face ao cenário de transformação indicado no PDE, definiu o <i>Eixo de Transformação Elevado João Goulart</i>, associado a parâmetros de uso e ocupação do solo e incentivos específicos que têm o objetivo de alavancar o aproveitamento de imóveis subutilizados, lindeiros ao elevado. </p>
			<p>Trata-se de um projeto de regulação urbanística que requer a aprovação de uma lei específica para sua implantação.</p>
			<p>O PIU do Parque Minhocão tem como ponto de partida a desmobilização do Elevado e, a partir disso, a discussão específica do impacto urbanístico dessa medida e a proposição de soluções estruturantes em resposta às determinações expressas pelo PDE e pela Lei nº 16.833/2018 e às contribuições advindas das consultas públicas realizadas no desenvolvimento do projeto, constituindo-se como uma intervenção de requalificação urbanística que abordará, entre outros temas, a acessibilidade ao parque, o desenho e programa do parque, a conectividade com os edifícios e atividades do entorno e as estratégias setoriais relacionadas à habitação social, assistência social, segurança urbana, cultura, esportes e lazer. </p>
			<p>Nesta linha de ideias, é possível concluir-se obrigatório (em termos conceituais) que os estudos específicos previstos para a desmobilização do equipamento sejam consoantes com o material já produzido para a região como um todo. Esta condição, por sua vez, atesta a necessidade de que os trabalhos dedicados ao PIU do Parque Minhocão decorram, em termos de planejamento, de elementos de informação gerais, amealhados nos estudos de maior abrangência territorial, lançando um olhar mais dedicado à ponderação sobre este espaço urbano e de proposição de soluções estruturantes das determinações expressas pelo PDE e pela Lei n. 13.833/2018. </p>
			<p>É preciso destacar, ainda, que os elementos prévios à elaboração de Projetos de Intervenção Urbana, nos termos do artigo 2º do Decreto 56.901/2016<sup>1</sup>, já se encontram suficientemente estabelecidos em função da regulação urbanística e dos estudos urbanísticos já produzidos no âmbito do PIU do Setor Central, devendo o apontado detalhamento partir destes elementos de informação para seu desenvolvimento.</p>
			<p>É certo, por outro lado, que os estudos do Parque do Minhocão poderiam em tese ser integralmente desenvolvidos no âmbito do PIU do Setor Central (em capítulo exclusivo, por exemplo) – há, contudo, mais elementos a ponderar sobre este tema. O primeiro deles é a celebração do Termo de Ajustamento de Conduta – TAC nº 295/2015 entre a Prefeitura do Município de São Paulo, o Ministério Público do Estado de São Paulo e o Corpo de Bombeiros da Polícia Militar do Estado de São Paulo no âmbito do Inquérito Civil nº 14.279.295/2015, no qual restou pactuada a responsabilidade da Prefeitura no que tange à segurança do Elevado quando da realização de eventos neste equipamento; o segundo deles é a orientação do Ministério Público do Estado de São Paulo, exposta no Ofício 1112/19, da Promotoria de Justiça de Habitação e Urbanismo da Capital, veiculado no processo SEI n. 6010.2019/0000611-2, que recomenda a elaboração de Projeto de Intervenção Urbana específico que avalie as medidas de desativação do Elevado João Goulart, inclusive por meio de estudos de impacto de mobilidade que considerem os múltiplos cenários de desativação do equipamento. A partir destes elementos, bem como em função do disposto na Lei n. 16.833/2018, foi instituído, por meio do Decreto 58.601/2019, um Grupo de Trabalho Intersecretarial para a elaboração de relatório avaliativo, que apontou as medidas inicialmente consideradas necessárias à implantação de um parque no Elevado João Goulart, e que considerou o PIU do Parque Minhocão como necessário e integrante destas providências.</p>
			<p>Tendo em vista todo o exposto, mostra-se necessário adotar as providências para que seja realizada a instrução preliminar ao Projeto de Intervenção Urbana do Parque Minhocão, e autorizada a elaboração dos elementos prévios necessários à proposição deste PIU, nos termos do procedimento previsto pelo Decreto 56.901/2016. </p>
			<p>Ambos os projetos - o PIU do Setor Central da escala do planejamento e o PIU do Parque Minhocão da escala da intervenção urbanística - estão integrados para gerar o máximo de eficiência administrativa na gestão da cidade, tem em mira o desenvolvimento urbano harmonioso e consequente para a região central de São Paulo.</p>
			<p>Desta forma, a Prefeitura da Cidade de São Paulo apresenta a presente consulta pública que inaugura o processo de desenvolvimento do PIU Parque Minhocão de forma oportuna e concomitante com a segunda consulta pública do PIU Setor Central, que apresenta a versão consolidada do projeto, possibilitando uma apreensão conjunta de ambos projetos pela população.</p>
			<ol class="notas">
				<caption>Notas</caption>
				<li>O Programa de Interesse Público da futura intervenção e o Diagnóstico da área objeto de intervenção</li>
			</ol>
			<Comments :attr="{id:4, context:'Contexto de planejamento do PIU Parque Minhocão'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Gestão democrática</h2>
			<p>O PIU Parque Minhocão terá assegurada a gestão participativa em todas as etapas, desde seu desenvolvimento até sua implementação, conforme preconiza a Constituição Federal e o Estatuto da Cidade.</p>
			<p>Conforme a regulamentação do Decreto nº 56.901/2016, serão realizadas duas consultas públicas, sendo a primeira constituída por esta publicação de elementos e dados prévios ao desenvolvimento do projeto.</p>
			<h3>Audiências e Consultas Públicas</h3>
			<p>Audiências e consultas públicas são instrumentos de gestão democrática previstos na Lei de Processo Administrativo Federal (Lei 9.784/1999), nos arts. 32 e 31, respectivamente. A audiência pública se materializa por intermédio de debates orais em sessões previamente designadas para tanto, com ou sem a realização de apresentações pelo Poder Público ou interessados. Seu traço marcante é a oralidade, embora deva ser permitido o protocolo de requerimentos por interessados (tais protocolos devem ser noticiados pela mesa condutora dos trabalhos). Nem todas as questões levantadas em audiência pública devem ser respondidas imediatamente – é possível por exemplo, posteriormente publicarem-se as respostas em diário oficial –, mas todas as matérias aventadas devem ser consideradas no processo decisório da Administração Pública.</p>
			<p>A consulta pública, por seu turno, tem caráter mais formal, e exige protocolo ou anotações de manifestações públicas de interessados por meio previamente estabelecidos – protocolos, formulários disponibilizados na rede mundial de computadores etc. A consulta pública não ocorre num evento, mas num processo aberto de participação de interessados sobre determinado tema em debate.</p>
			<h3>Controle Social</h3>
			<p>No que toca à política de desenvolvimento urbano, o controle social é realizado basicamente por dois métodos: (a) o oferecimento de representações a órgãos de controle interno e externo da Administração Pública e no ajuizamento de ações pertinentes ao tema e (b) pela participação dos cidadãos e entidades no processo de elaboração dos estudos e projetos que redundarão nas leis urbanísticas e dos planos e projetos urbanos, bem como no acompanhamento da implantação de tais planos e projetos.</p>
			<p>Desta forma, a par da participação construtiva de consensos nos processos decisórios da Administração Pública, também integra a gestão democrática a atuação dos interessados provocando o controle interno e externo dos atos do Poder Público, de modo a tentar obrigar a correção de decisões já adotadas ou em fase de construção. Esta realidade é tanto mais presente quanto menor o diálogo estabelecido entre a Administração Pública e a sociedade – a consensualidade tende a diminuir a litigiosidade e, portanto, o acionamento dos órgãos de controle.</p>
			<Comments :attr="{id:5, context:'Gestão democrática'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Parte 1 – Diagnóstico Socioterritorial</h2>

			<section>
				<h3 class="titulo" indent="2">Caracterização e diagnósticos do entorno do Minhocão</h3>
				<p>Neste item serão apresentados os elementos básicos que caracterizam as áreas lindeiras do Parque Municipal do Minhocão e seu entorno, compreendendo a definição de suas principais áreas de influência em termos de mobilidade e incomodidade urbanas, seu perfil de ocupação, características institucionais básicas e projetos existentes de transformação urbanística para o Elevado e áreas adjacentes.</p>
				<p>Além disso, outros dois subsídios estão disponíveis como anexos a diagnóstico. O Anexo A apresenta um panorama histórico mais detalhado da ocupação do território que compreende o Elevado João Goulart; o Anexo B apresenta uma análise preliminar de experiências internacionais de intervenção urbanística para transformação de estruturas desativadas ou degradadas em parques lineares urbanos.</p>

				<!-- Figura 3 -->
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/parque-minhocao/img/fig3.jpg'),
					caption: 'Mapa de Situação ',
					fonte: 'ARTIGAS, R. et al. Caminhos do Elevado: Memória e Projetos. São Paulo: Ed. Imprensa Oficial, 2008, p.77'
				}"></Imagem>
				<!-- /Figura 3 -->

				<h4>Perfil socioeconômico, ambiental e de uso e ocupação do solo</h4>

				<!-- Figura 4 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig4.jpg'),
					titulo: 'Limites Administrativos',
					legenda: [
						{ borda: '#589fad', espessura: '2', descricao: 'Distritos' },
						{ borda: '#ec6768', espessura: '2', descricao: 'Subprefeituras' },
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'Geoinfo, 2014 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 4 -->

				<p>O traçado do elevado reforça as disparidades socioterritoriais que marcam seu contexto, com o distrito da Consolação, marcadamente a região de Higienópolis, com indicadores que refletem padrões mais elevados de renda e urbanização em relação às demais localidades.</p>
				<p>As densidades habitacionais por setores censitários estão acima da média da cidade, variando entre 100 e 600 habitantes por hectare em praticamente todo o entorno, sendo mais elevadas na região de Santa Cecília, refletindo uma ocupação mais verticalizada e com tipologias de menor área privativa.</p>

				<!-- Figura 5 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig5.jpg'),
					titulo: 'Densidades Habitacionais',
					legenda: [
						{ fundo: '#a2b9c8', descricao: 'Até 25 hab/ha' },
						{ fundo: '#cfe4f0', descricao: '25 a 50 hab/ha' },
						{ fundo: '#f8f6d7', descricao: '50 a 100 hab/ha' },
						{ fundo: '#fedcb1', descricao: '100 a 250 hab/ha' },
						{ fundo: '#e6bc8f', descricao: '250 a 400 hab/ha' },
						{ fundo: '#d29689', descricao: '400 a 600 hab/ha' },
						{ fundo: '#af8284', descricao: 'Acima de 600 hab/ha' },
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'IBGE, 2010 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 5 -->

				<p>Assim como em toda a região central, as densidades de empregos por área de ponderação são elevadas em todo o entorno do elevado, estando acima de 100 empregos por hectare, sendo mais elevadas nos tecidos com perfil de atividades mais misto, como Barra Funda, República e Consolação.</p>

				<!-- Figura 6 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig6.jpg'),
					titulo: 'Densidades de Empregos *',
					legenda: [
						{ fundo: '#fee6b1', descricao: 'Até 25' },
						{ fundo: '#fed884', descricao: '25 a 50' },
						{ fundo: '#feb56b', descricao: '50 a 75' },
						{ fundo: '#f9885e', descricao: '75 a 100' },
						{ fundo: '#ea5958', descricao: '100 a 150' },
						{ fundo: '#d13758', descricao: '150 a 200' },
						{ fundo: '#ae3f71', descricao: 'Maior que 200' },
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'RAIS, 2017 (Elaboração: SP Urbanismo, 2019)'
				}">
					<template slot="extra">
						<div>* Unidade de análise: área de ponderação do IBGE</div>
					</template>
				</Imagem>
				<!-- /Figura 6 -->

				<p>Os padrões de renda média familiar da região são de perfil médio a alto, sendo mais elevados nos bairros de Higienópolis e Pacaembu, onde predominam rendas acima de 10 salários mínimos. Em Santa Cecília, Barra Funda, Campos Elíseos e República, há predominância de rendas de perfil médio, entre 5 e 10 salários mínimos.</p>

				<!-- Figura 7 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig7.jpg'),
					titulo: 'Renda Média Familiar *',
					legenda: [
						{ fundo: '#daedf5', descricao: 'Até 2 s.m.' },
						{ fundo: '#95bad0', descricao: '2 a 5 s.m.' },
						{ fundo: '#bbbad0', descricao: '5 a 10 s.m.' },
						{ fundo: '#dfc8d9', descricao: '10 a 20 s.m.' },
						{ fundo: '#efb4b4', descricao: 'Acima de 20 s.m.' },
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'IBGE, 2010 (Elaboração: SP Urbanismo, 2019)'
				}">
					<template slot="extra">
						<div>* Média de renda mensal dos domicílios, em salários mínimos (s.m.) de 2010</div>
					</template>
				</Imagem>
				<!-- /Figura 7 -->

				<p>A vulnerabilidade social na região, de modo geral, pode ser caracterizada como baixa, com a notável exceção da Favela do Moinho, onde a vulnerabilidade é muito alta. Em Higienópolis e na Barra Funda a vulnerabilidade é baixíssima, refletindo melhores níveis de renda, educação, habitação e acesso a serviços públicos, entre outros fatores. Nas imediações do Minhocão, Santa Cecília e Campos Elíseos, a vulnerabilidade é muito baixa ou baixa.</p>

				<!-- Figura 8 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig8.jpg'),
					titulo: 'Vulnerabilidade Social',
					legenda: [
						{ fundo: '#ded5b0', descricao: 'Grupo 1: baixíssima' },
						{ fundo: '#ccffa4', descricao: 'Grupo 2: muito baixa' },
						{ fundo: '#55aa7f', descricao: 'Grupo 3: baixa' },
						{ fundo: '#e6aa4a', descricao: 'Grupo 4: média' },
						{ fundo: '#ff5500', descricao: 'Grupo 5: alta' },
						{ fundo: '#ff0000', descricao: 'Grupo 6: muito alta' },
						{ fundo: '#bcbcbc', descricao: 'Sem classificação' },
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'SEADE, 2010 (IPVS - Índice Paulista de Vulnerabilidade Social 2010) (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 8 -->

				<p>As características de parcelamento, uso e ocupação do solo da região são de grande heterogeneidade, mesclando lotes maiores com ocupação vertical residencial de médio e alto padrão, tipologia predominante em Higienópolis e em porções dos Campos Elíseos e Barra Funda, nas imediações da Chácara do Carvalho e da Praça Olavo Bilac, com lotes com tamanhos e volumetrias variadas, ocupados por usos de comércio, serviços e armazéns de baixo a alto padrão, com maior presença nas regiões de Santa Cecília, República, Pacaembu e em grande parte dos Campos Elíseos.</p>

				<!-- Figura 9 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig9.jpg'),
					titulo: 'Predominância de Uso por Quadra',
					legenda: [
						{ fundo: '#f0f0f0', descricao: 'Sem informação' },
						{ fundo: '#ffffb9', descricao: 'RH Baixo Padrão' },
						{ fundo: '#ffcf55', descricao: 'RH Médio/Alto Padrão' },
						{ fundo: '#a0c0ff', descricao: 'RV Baixo Padrão' },
						{ fundo: '#427592', descricao: 'RV Médio/Alto Padrão' },
						{ fundo: '#b63327', descricao: 'Comércio e Serviços' },
						{ fundo: '#a2557e', descricao: 'Indústria e Armazéns' },
						{ fundo: '#ff9933', descricao: 'Residencial + Comércio/Serviços' },
						{ fundo: '#ffcc99', descricao: 'Residencial + Indústria/Armazéns' },
						{ fundo: '#ffc6ff', descricao: 'Comércio/Serviços + Indústria/Armazéns' },
						{ fundo: '#0000eb', descricao: 'Equipamentos públicos' },
						{ fundo: '#00afaf', descricao: 'Escolas' },
						{ fundo: '#9f5000', descricao: 'Terrenos vagos' },
						{ fundo: '#c09000', descricao: 'Outros' },
						{ fundo: '#909090', descricao: 'Sem predominância' },
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'TPCL, 2015 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 9 -->

				<!-- Figura 10 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig10.jpg'),
					titulo: 'Gabarito das edificações',
					legenda: [
						{ fundo: '#ffba73', descricao: 'Até 5 metros' },
						{ fundo: '#fb613f', descricao: '5 até 10 metros' },
						{ fundo: '#d80808', descricao: '10 até 30 metros' },
						{ fundo: '#750606', descricao: '30 até 45 metros' },
						{ fundo: '#050000', descricao: 'Maior que 45 metros' },
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'TPCL, 2018 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 10 -->

				<p>O Elevado se localiza em uma região de transição entre a várzea do Rio Tietê e as colinas e vales que se sucedem a partir do espigão central da cidade, onde se localizam as avenidas Paulista e Dr. Arnaldo. A topografia é de baixas declividades em todo o trajeto, considerando a transposição do vale do córrego Pacaembu pelo Viaduto Gal. Olímpio da Silveira. No trecho de Santa Cecília até a R. da Consolação, há sobreposição do trajeto do Elevado com o Córrego Anhanguera.</p>

				<!-- Figura 11 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig11.jpg'),
					titulo: 'Relevo e hidrografia',
					legenda: [
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'Geinfo, 2014 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 11 -->

				<p>A região é caracterizada por loteamentos paradigmáticos quanto aos padrões de urbanização, como Campos Elíseos e Higienópolis, incluindo a própria abertura do bulevar da Av. São João, que se tornou uma importante referência no desenvolvimento urbano da cidade. A arborização urbana é bem distribuída e as praças são referências urbanas fundamentais na cidade, como as Praças da República, Princesa Isabel, Marechal Deodoro, Roosevelt e Charles Muller. O Parque Buenos Aires desponta como a área verde mais relevante e o futuro Parque Augusta, a ser implantado, contribuirá para a qualificação ambiental e urbana da região.</p>

				<!-- Figura 12 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig12.jpg'),
					titulo: 'Áreas verdes e arborização',
					legenda: [
						{ fundo: '#3c7e32', descricao: 'Parques Municipais' },
						{ fundo: '#c0ea56', descricao: 'Parques Estaduais' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig12_1.jpg'), descricao: 'Arborização urbana' },
						{ fundo: '#58a48e', descricao: 'Canteiros viários' },
						{ fundo: '#a5d48b', descricao: 'Praças' },
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'PDE, 2014 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 12 -->

				<p>Localizado na área central da cidade, o Minhocão é parte da principal conexão entre as regiões Oeste e Leste da cidade, ligando a Av. Francisco Matarazzo, a partir do Largo Padre Péricles, até a Praça Roosevelt, atravessando importantes eixos estruturais da região Centro-Oeste, tais como as avenidas Pacaembu, Angélica e São João e as ruas da Consolação, Amaral Gurgel e Mário de Andrade.</p>

				<!-- Figura 13 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig13.gif'),
					titulo: 'Sistema Viário Estrutural',
					legenda: [
						{ linha: true, borda: '#802c13', espessura: '3', descricao: 'Vias de Trânsito Rápido' },
						{ linha: true, borda: '#e3121c', espessura: '3', descricao: 'Arterial' },
						{ linha: true, borda: '#ff8b18', espessura: '3', descricao: 'Coletora' },
						{ linha: true, borda: '#ffd84e', espessura: '3', descricao: 'Local' },
						{ linha: true, borda: '#a7cb97', espessura: '3', descricao: 'Vias de pedestres', pontilhado: true },
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão (Contorno)' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'CET, 2019 (Elaboração: SP Urbanismo, 2019).'
				}"></Imagem>
				<!-- /Figura 13 -->

				<p>O sistema de transporte público da região é robusto, composto pelas linhas 3 –vermelha e 4 – amarela do metrô, as linhas 7 – rubi e 8 – diamante da CPTM e os corredores de ônibus Pirituba-Lapa-Centro, Rio Branco e Consolação-Rebouças, da SPTrans. Este sistema tem presença marcante nas imediações do Elevado, com as estações Mal. Deodoro e Santa Cecília do Metrô, o corredor de ônibus nas avenidas São João e Gal. Olímpio da Silveira e os terminais municipais Amaral Gurgel e Princesa Isabel. A região conta ainda com faixas exclusivas de ônibus nas avenidas Angélica, Pacaembu e Duque de Caxias e uma ampla rede cicloviária.</p>

				<!-- Figura 14 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig14.gif'),
					titulo: 'Sistema de transporte público',
					legenda: [
						{ linha: true, borda: '#ea2f41', espessura: '3', descricao: 'Corredor de ônibus' },
						{ linha: true, borda: '#ffbd37', espessura: '3', descricao: 'Faixa de ônibus' },
						{ linha: true, borda: '#fff8a8', espessura: '3', descricao: 'Linha de ônibus' },
						{ simbolo: src('arquivos/parque-minhocao/img/mapas/legendas/onibus.gif'), descricao: 'Ponto de ônibus' },
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão (Contorno)' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'Geinfo, 2014 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 14 -->

				<p>A rede cicloviária se desenvolveu nos últimos anos, com implantação de ciclovias como a existente sob o elevado, nas Avenidas São João e Gal. Olímpio da Silveira e R. Amaral Gurgel e, sobretudo, ciclofaixas e ciclorrotas, com destaque para as implantadas na Av. Pacaembu, R. da Consolação, Al. Barros, Al. Nothman e Largo do Arouche.</p>

				<!-- Figura 15 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig15.gif'),
					titulo: 'Sistema cicloviário',
					legenda: [
						{ linha: true, borda: '#cf0c6e', descricao: 'Ciclovia' },
						{ linha: true, borda: '#f97131', descricao: 'Ciclofaixa' },
						{ linha: true, borda: '#feca55', descricao: 'Ciclorrota' },
						{ linha: true, borda: '#9a9a9a', descricao: 'Ciclopassarela' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig15_1.jpg'), descricao: 'Bicicletários e paraciclos' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig15_2.jpg'), descricao: 'Bicicletas compartilhadas' },
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'CET, 2016 e CEM, 2017 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 15 -->

				<p>A rede de equipamentos públicos é bem capilarizada e conta com equipamentos icônicos, como as bibliotecas Mário de Andrade e Monteiro Lobato, o Estádio do Pacaembu, o Memorial da América Latina e a Santa Casa de Misericórdia. As áreas com perfil mais residencial tem maior presença de equipamentos de educação, com destaque para Higienópolis, enquanto os equipamentos de cultura são mais presentes na região da Consolação e na Barra Funda.</p>

				<!-- Figura 16 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig16.gif'),
					titulo: 'Equipamentos públicos',
					legenda: [
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig16_1.gif'), descricao: 'Abastecimentos Municipais' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig16_2.gif'), descricao: 'Assistência Social' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig16_3.gif'), descricao: 'Cultura' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig16_4.gif'), descricao: 'Educação' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig16_5.gif'), descricao: 'Esportes' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig16_6.gif'), descricao: 'Saúde' },
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'Geosampa, 2019 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 16 -->

				<p>Por se tratar de uma região intensamente urbanizada e verticalizada, o mercado imobiliário residencial se desenvolveu muito pouco nas décadas de 80 e 90. Nos últimos anos, a região central vem crescendo em atratividade, com aumento da população e retomada de lançamentos residenciais com unidades de menor área, com maior presença nas proximidades das estações de metrô da região.</p>

				<!-- Figura 17 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig17.gif'),
					titulo: 'Lançamentos Residenciais',
					legenda: [
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão (Contorno)' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/1985.gif'), descricao: '1985 até 1990' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/1990.gif'), descricao: '1990 até 2000' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/1995.gif'), descricao: '1995 até 2000' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/2000.gif'), descricao: '2000 até 2005' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/2005.gif'), descricao: '2005 até 2010' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/2010.gif'), descricao: '2010 até 2015' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/2015.gif'), descricao: '2015 até 2019' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'Embraesp, 2013 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 17 -->

				<p>Já os lançamentos não residenciais, cuja característica é de maior concentração e seletividade territorial, tiveram crescimento irrelevante de 1985 até meados de 2010, quando o mercado passou a lançar empreendimentos comerciais com unidades de menor área na região da Barra Funda e nas imediações da estação Mal. Deodoro.</p>

				<!-- Figura 18 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig18.gif'),
					titulo: 'Lançamentos não Residenciais',
					legenda: [
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão (Contorno)' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/1985.gif'), descricao: '1985 até 1990' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/1990.gif'), descricao: '1990 até 2000' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/1995.gif'), descricao: '1995 até 2000' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/2000.gif'), descricao: '2000 até 2005' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/2005.gif'), descricao: '2005 até 2010' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/2010.gif'), descricao: '2010 até 2015' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/pontos/2015.gif'), descricao: '2015 até 2019' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'Embraesp, 2013 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 18 -->

				<p>A legislação de uso e ocupação do solo vigente é caracterizada pelo predomínio de zonas de transformação e alto potencial construtivo (ZEU, ZEM), definidas a partir das áreas de influência do Corredor de Ônibus Pirituba-Lapa-Centro, que atravessa as avenidas São João e General Olímpio da Silveira, e das estações da Linha 3 Vermelha do metrô - Santa Cecília e Marechal Deodoro e em conformidade com as diretrizes do PDE para adensamento em áreas centrais de perfil misto e infraestruturadas que compõem a MEM – Macroárea de Estruturação Metropolitana. Nas áreas mais consolidadas, o predomínio é de zonas de centralidade, que buscam qualificar a ocupação e garantir as transformações dos usos não residenciais de forma compatível com a ocupação residencial. O Elevado Presidente João Goulart está contido, em sua maior parte, na Zona Eixo de Estruturação da Transformação Metropolitana – ZEM. Há ainda uma concentração pontual de ZEIS-3 nas imediações do Terminal de Ônibus Amaral Gurgel.</p>

				<!-- Figura 19 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig19.gif'),
					titulo: 'LPUOS – Lei nº 16.402/2016',
					legenda: [
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão (Contorno)' },
						{ fundo: '#c5dc61', descricao: 'AC-1' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/ac-2.gif'), descricao: 'AC-2' },
						{ fundo: '#269bee', descricao: 'VETOS' },
						{ fundo: '#5e4134', descricao: 'ZC' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zca.gif'), descricao: 'ZCa' },
						{ fundo: '#18217d', descricao: 'ZCOR-1' },
						{ fundo: '#0076c5', descricao: 'ZCOR-2' },
						{ fundo: '#6ea0cf', descricao: 'ZCOR-3' },
						{ fundo: '#368085', descricao: 'ZCORa' },
						{ fundo: '#9f6646', descricao: 'ZC-ZEIS' },
						{ fundo: '#6c2864', descricao: 'ZDE-1' },
						{ fundo: '#a26178', descricao: 'ZDE-2' },
						{ fundo: '#b89e40', descricao: 'ZEIS-1' },
						{ fundo: '#ffa237', descricao: 'ZEIS-2' },
						{ fundo: '#ffcf55', descricao: 'ZEIS-3' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zeis-4.gif'), descricao: 'ZEIS-4' },
						{ fundo: '#fff4bc', descricao: 'ZEIS-5' },
						{ fundo: '#aa412c', descricao: 'ZEM' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zemp.gif'), descricao: 'ZEMP' },
						{ fundo: '#265731', descricao: 'ZEP' },
						{ fundo: '#50aa78', descricao: 'ZEPAM' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zer-1.gif'), descricao: 'ZER-1' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zer-2.gif'), descricao: 'ZER-2' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zera.gif'), descricao: 'ZERa' },
						{ fundo: '#7d181f', descricao: 'ZEU' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zeua.gif'), descricao: 'ZEUa' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zeup.gif'), descricao: 'ZEUP' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zeupa.gif'), descricao: 'ZEUPa' },
						{ fundo: '#a0a0a0', descricao: 'ZM' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zma.gif'), descricao: 'ZMa' },
						{ fundo: '#797979', descricao: 'ZMIS' },
						{ fundo: '#d2d2d3', descricao: 'ZMISa' },
						{ fundo: '#c1b58c', descricao: 'ZOE' },
						{ fundo: '#38ff00', descricao: 'ZPDS' },
						{ fundo: '#64845a', descricao: 'ZPDSr' },
						{ fundo: '#46376e', descricao: 'ZPI-1' },
						{ fundo: '#a98abc', descricao: 'ZPI-2' },
						{ fundo: '#ffff30', descricao: 'ZPR' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
					],
					fonte: 'SMUL, 2016 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 19 -->

				<p>As definições e os parâmetros urbanísticos definidos para essa ZEM são estabelecidos na Lei de Parcelamento, Uso e Ocupação do Sol, nos arts. 8º e 12 e nos quadros 2A Parâmetros de parcelamento do solo (dimensões de Lote) por zona, 3 – Parâmetros de ocupação, exceto de Quota Ambiental, 4 – Usos permitidos por Zona e 4B- Parâmetros de incomodidade por zona.</p>
				<p>As habitações precárias na região são compostas pelos cortiços, com distribuição significativa e capilarizada em Santa Cecília, Barra Funda e Campos Elíseos, e pela Favela do Moinho, que ocupa área segregada do tecido urbano entre as duas linhas da CPTM que cortam a região.</p>

				<!-- Figura 20 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/parque-minhocao/img/mapas/fig20.gif'),
					titulo: 'Habitações Precárias',
					legenda: [
						{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão (Contorno)' },

						{ fundo: '#f71c1f', descricao: 'ZEIS-1' },
						{ fundo: '#fb9a99', descricao: 'ZEIS-2' },
						{ fundo: '#165580', descricao: 'ZEIS-3' },
						{ fundo: '#ffe300', descricao: 'ZEIS-4' },
						{ fundo: '#ff7f00', descricao: 'ZEIS-5' },
						{ fundo: '#ff00ae', descricao: 'Cortiço' },
						{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/favelas.gif'), descricao: 'Favelas' }
					],
					fonte: 'Habitasampa, 2019 (Elaboração: SP Urbanismo, 2019)'
				}"></Imagem>
				<!-- /Figura 20 -->
				<Comments :attr="{id:6, context:'Caracterização e diagnósticos do entorno do Minhocão'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">Mobilidade urbana</h3>
				<p>O Elevado João Goulart conecta a Av. Radial Leste-Oeste (no centro da cidade) à Av. Francisco Matarazzo (na zona oeste), passando pelos distritos República, Consolação, Santa Cecília e Barra Funda.</p>
				<p>No sentido Centro-Oeste, o primeiro acesso é pela Av. Radial Leste-Oeste (sob a Praça Roosevelt), por onde entra todo o fluxo vindo da zona leste, mais as contribuições da área central (Sé, Liberdade, República e Bela Vista). Nesse sentido, a primeira saída é a alça para a Rua Ana Cintra, que permite acessar o distrito Santa Cecília. Já quem vem do distrito Santa Cecília pode acessar a via elevada pela alça da Rua Helvetia. A saída de todo o fluxo remanescente da Via Elevada se dá pela rampa de acesso à Av. Francisco Matarazzo, em direção à zona oeste.</p>
				<p>No sentido Oeste-Centro, o primeiro acesso é pela Av. Francisco Matarazzo, por onde entra todo o fluxo da Zona Oeste, incluindo os distritos Lapa, Perdizes e parte da Barra Funda. O segundo acesso é pela rampa da R. Dr. Albuquerque Lins, por onde entram os fluxos de Santa Cecília e parte da Barra Funda. Segue-se a saída para a R. Sebastião Pereira, que permite acessar Santa Cecília, Consolação e República. Logo após, vem a saída da R. da Consolação, que permite o acesso ao Distrito Consolação. O fluxo remanescente na Via Elevada segue pela última rampa em direção à Av. Radial Leste-Oeste (sob a Praça Roosevelt), objetivando acessar o Centro e a Zona Leste.</p>
				<p>Os volumes de veículos no nível da rua estão representados no mapa a seguir (Figura 21). Na sequência, está representado o volume de veículos sobre o Elevado.</p>

				<!-- Figura 21 -->
				<Imagem :dados="{
					tipo:'default',
					url: src('arquivos/parque-minhocao/img/fig21.gif'),
					caption: 'Mapa ilustrativo dos fluxos veiculares no nível da rua',
					fonte: 'CET'
				}"></Imagem>
				<!--/ Figura 21 -->

				<p>No nível do solo, como esperado, os principais fluxos veiculares concentram-se nas vias estruturais, tais como a Av. Francisco Matarazzo, Av. São João, Av. Angélica, R. Amaral Gurgel e R. da Consolação. Dentre as vias coletoras, as que apresentam maior fluxo veicular, estão a R. Conselheiro Brotero, o eixo da Al. Barros / R. Frederico Abranches e a R. Helvetia. Entretanto, observam-se várias vias coletoras com baixo fluxo veicular, notadamente ao norte da via elevada.</p>
				<p>Já sobre o Elevado, no pico da manhã, o principal fluxo veicular se dá no sentido Oeste-Centro. Cerca de 60% do fluxo na Via Elevada é proveniente da Av. Francisco Matarazzo e 40% do fluxo é proveniente da rampa da R. Albuquerque Lins. O fluxo de saída pela rampa da R. Sebastião Pereira é bastante reduzido. Cerca de 25% do fluxo da Via Elevada sai pela rampa da R. da Consolação e 75% prossegue para a Av. Radial Leste-Oeste.</p>

				<!-- Figura 22 -->
				<Imagem :dados="{
					tipo:'default',
					url: src('arquivos/parque-minhocao/img/fig22.gif'),
					caption: 'Mapa ilustrativo dos fluxos veiculares no nível da via elevada',
					fonte: 'CET'
				}"></Imagem>
				<!--/ Figura 22 -->

				<p>Ainda sobre o elevado, no sentido Centro-Oeste, o principal fluxo é proveniente da Av. Radial Leste-Oeste. Cerca de um terço desse fluxo sai pela rampa da R. Ana Cintra. A contribuição de entrada da rampa da R. Helvetia é bastante reduzida. Dois terços desse fluxo Centro-Oeste vão em direção à Av. Francisco Matarazzo.</p>
				<p>Quanto ao fluxo de coletivos, os principais volumes são encontrados no Corredor da Av. São João e no corredor da R. da Consolação. Cada um concentra até 180 ônibus/hora/sentido nos trechos mais carregados. As demais vias que apresentam elevados volumes de coletivos são a Al. Nothmann (mais de 60 ônibus/hora), a R. das Palmeiras e a R. Sebastião Pereira (quase 60 ônibus/hora) e a Av. Angélica e a Av. Mario de Andrade (quase 40 ônibus/hora/sentido).</p>

				<!-- Figura 23 -->
				<Imagem :dados="{
					tipo:'default',
					url: src('arquivos/parque-minhocao/img/fig23.gif'),
					caption: 'Mapa ilustrativo do carregamento de ônibus. Destaque para o Corredor da Av. São João',
					fonte: 'CET (Elaboração: SP-Urbanismo)'
				}"></Imagem>
				<!--/ Figura 23 -->

				<p>Em relação aos fluxos de pedestres verifica-se uma concentração nos arredores do Terminal Amaral Gurgel, das estações de metrô Santa Cecília e Marechal Deodoro, e nos acessos aos pontos de parada do corredor de ônibus no canteiro central da Av. São João. A figura a seguir indica os principais nós de concentração dos fluxos de pedestres nas vias ao longo do Elevado.</p>

				<!-- Figura 24 -->
				<Imagem :dados="{
					tipo:'default',
					url: src('arquivos/parque-minhocao/img/fig24.jpg'),
					caption: 'Mapa ilustrativo dos pontos de concentração os fluxos de pedestres',
					fonte: 'Elaboração: SP-Urbanismo'
				}"></Imagem>
				<!--/ Figura 24 -->

				<p>O fluxo de ciclistas concentra-se nas ciclovias existentes sob o elevado no trecho da R. Amaral Gurgel, entre a R. Major Sertório e o Largo do Arouche, e no trecho da Av. São João, entre a R. Ana Cintra e a Av. Pacaembu. Também existem várias ciclovias ou ciclofaixas em vias paralelas (R. Candido Espinheira, Al. Barros, R. Barra Funda, R. Frederico Abranches, R. Dr. Frederico Steidel) e transversais (R. Mario de Andrade, R. Dr. Albuquerque Lins, Al. Nothmann, R. Ana Cintra, R. da Consolação), formando uma rede cicloviária bastante densa em relação ao restante da cidade. Existem bicicletários municipais no Terminal Amaral Gurgel e na Praça Roosevelt, além de paraciclos em passeios e praças.</p>

				<!-- Figura 25 -->
				<Imagem :dados="{
					tipo:'coluna',
					url: src('arquivos/parque-minhocao/img/fig25.gif'),
					caption: 'Rede cicloviária e bicicletários, com destaque (azul) para aquelas diretamente articuladas ao Elevado',
					fonte: 'CET (Elaboração: SP-Urbanismo)'
				}"></Imagem>
				<!--/ Figura 25 -->
				<Comments :attr="{id:7, context:'Mobilidade urbana'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">Incomodidade urbana</h3>
				<p>Parte fundamental das análises do impacto do tráfego de veículos sobre e sob o Elevado diz respeito aos elevados níveis de incomodidade urbana resultantes.</p>
				<p>Conforme dados divulgados pelo Laboratório de Poluição Atmosférica Experimental da Faculdade de Medicina da USP<sup>1</sup>, o entorno imediato afetado pelo Elevado Pres. João Goulart apresenta altos índices de poluição. Em levantamentos realizados ao longo de uma semana de medição ininterrupta da qualidade do ar, os números do estudo revelam que a média de Material Particulado equivalente a 2,5 – partículas finas menores ou iguais a 2,5 μm (micrômetros) – encontrada na região do Elevado chega a ser de 3 a 4 vezes superiores ao limite de 25 μg/m³ definido pela CETESB e pela Organização Mundial de Saúde (OMS). Os dados ainda apontam que, mesmo quando o Elevado está fechado durante a semana para passagem de veículos aos sábados e domingos, os índices de poluição continuam altos e bem acima dos verificados no resto da capital paulista. </p>
				<p>Ainda segundo os dados publicados, na altura do elevado, a média averiguada de material particulado por metro cúbico foi de 83,47 μg/m³, 79% maior que a média de 46,5 μg/m³ registrada em toda a metrópole pela CETESB em 2014, mesmo ano do levantamento da USP.</p>
				
				<!-- Figura 26 -->
				<Imagem :dados="{
					tipo:'coluna',
					url: src('arquivos/parque-minhocao/img/fig26.gif'),
					caption: ' Níveis de poluição atmosférica medidos ao longo de uma semana',
					fonte: 'Laboratório de Poluição Atmosférica Experimental da FMUSP'
				}"></Imagem>
				<!--/ Figura 26 -->

				<p>Em relação ao ruído, o estudo realizado também indica níveis de decibéis muito acima do limite estabelecido pela CETESB, com pico entre as 8 horas da manhã e 16 horas.</p>

				<!-- Figura 27 -->
				<Imagem :dados="{
					tipo:'coluna',
					url: src('arquivos/parque-minhocao/img/fig27.gif'),
					caption: ' Níveis de ruído medidos ao longo de uma semana',
					fonte: 'Laboratório de Poluição Atmosférica Experimental da FMUSP'
				}"></Imagem>
				<!--/ Figura 27 -->

				<p>Ambos os casos indicam que a presença de automóveis individuais sobre o Elevado João Goulart é fonte significativa de incomodidade urbana em relação ao entorno imediato, fato decisivo para depreciação dos imóveis. Além disso, no térreo, a presença do corredor de ônibus no eixo da Av. São João é a principal causa do alto nível de material particulado, situação que se agrava nos trechos onde a estrutura se aproxima das fachadas, delimitando um ambiente quase completamente fechado.</p>
				<p>Desta forma, as intervenções a serem propostas no Elevado devem levar em consideração a necessidade de construção de aberturas na tabuleiro (pista), além de demolições parciais que garantam maior ventilação nos níveis inferiores e a redução dos níveis de material particulado. Em relação ao ruído, é possível deduzir que a restrição do fluxo de automóveis sobre o Elevado resultará em redução significativa.</p>

				<ol class="notas">
					<caption>Notas</caption>
					<li>Os dados foram publicados no blog Urbanidades no site <a href="http://conexaoplaneta.com.br">http://conexaoplaneta.com.br</a> em 20 de outubro de 2017.</li>
				</ol>
				<Comments :attr="{id:8, context:'Incomodidade urbana'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">Análise estrutural do viaduto</h3>
				<p>Foi realizada por SPObras uma Inspeção inicial, com relatório fotográfico, do Elevado Presidente João Goulart, em 24 de fevereiro de 2019.</p>
				<p>Esses resultados conduzem a duas conclusões/encaminhamentos:</p>
				<ol class="decimais">
					<li>Não foi constatada a necessidade de contratação emergencial para análise detalhada da estrutura e/ou obras de emergência;</li>
					<li>No entanto, o projeto decorrente deste PIU pressuporá a contratação de análise detalhada para a solução dos problemas encontrados, já levando em consideração o uso do Elevado como parque, bem como eventuais alterações em sua estrutura.</li>
				</ol>
				<p>Não há, portanto, nenhum impedimento estrutural para a realização das intervenções de segurança, acessibilidade e conforto e de eventuais implantações de trechos de parque.</p>
				<p>Além disso, foi realizado um levantamento dos custos associados à alternativa de demolição total do Elevado.</p>
				<p>O Elevado Presidente João Goulart conta com aproximadamente 2.700 metros de comprimento e 14 metros de largura em média. O elevado localiza-se em uma região adensada, desenvolvendo-se sobre vias locais, corredor de ônibus, terminais de ônibus e ciclo faixa, estando muito próximo de diversas edificações e comércios.</p>
				<p>Portanto, o processo de demolição de um viaduto desta magnitude envolve uma grande complexidade quanto ao planejamento das intervenções e ao conjunto de técnicas de demolição controlada, incluindo processos manuais, mecanizados e através de explosivos. </p>
				<p>Para início dos trabalhos é necessário um minucioso detalhamento dos desvios de tráfego e de linhas de ônibus, envolvendo adequação da sinalização viária e ampla divulgação das rotas alternativas e emprego de equipes de apoio ao trânsito. Após esta definição, será realizada a segmentação das intervenções de demolição, por trechos e com períodos de interdição.</p>
				<p>A primeira intervenção consistiria na desmontagem manual de postes de iluminação, guarda-corpos, gradis, sistemas elétricos, sistemas de drenagem pluvial, sinalizações verticais e semafóricas, entre outras interferências existentes.</p>
				<p>A intervenção seguinte seria a remoção da camada de pavimento existente. Em seguida, a demolição mecanizada envolveria algum tipo de equipamento ou ferramenta mecânica para a destruição de elementos rígidos. Geralmente são utilizados marteletes, carregadeiras, escavadeiras, pulverizadores, caminhões pipa e guindastes, além de máquinas de corte e fio diamantado, que são máquinas de médio e grande porte para permitir o fracionamento dos elementos rígidos e a retirada parcial ou total de new jersey (defensa de concreto), lajes de concreto, vigas de concreto, entre outros.</p>
				<p>A demolição mecanizada seria intercalada com a demolição manual, em função da estrutura da laje ser protendida. Esse tipo de demolição é utilizada em trabalhos menores e que exigem cuidados mais detalhados.</p>
				<p>Em função do risco de acidentes, seria necessária uma equipe especializada para monitoramento dos trabalhos, visando minimizar os riscos de acidentes.</p>
				<p>Para algumas atividades de demolição, principalmente com explosivos, seria programada a evacuação das edificações e comércios, em um raio definido de segurança da população, envolvendo custos indiretos, tais como: aluguéis, indenizações ou outros associados à indisponibilidade de uso de espaços privados.</p>
				<p>A demolição através de explosivos é utilizada para a demolição de grandes estruturas, contudo, é necessário um estudo detalhado e uma equipe especializada para evitar acidentes e os danos adicionais que os explosivos podem causar. Esse estudo também deve observar as estruturas para identificar o melhor tipo de explosivos e onde posiciona-los.</p>
				<p>Faz-se necessário o atendimento ao regimento legal quanto à realização de demolição, envolvendo procedimentos específicos, obtenção de autorizações, alvarás, Termo de Permissão para Ocupação de Vias – TPOV, plano de gerenciamento de resíduos da construção, entre outros. De acordo com a Resolução n.º 307 do Conselho Nacional do Meio Ambiente (Conama), os resíduos de demolição são considerados entulhos e, por isso, devem ser descartados de maneira correta.</p>
				<p>O prazo estimado para a realização da demolição de todo o Elevado Presidente João Goulart seria de 24 meses e o orçamento estimado preliminarmente é de R$ 113.229.658,84.</p>
				<Comments :attr="{id:9, context:'Análise estrutural do viaduto'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">Projetos de transformação e mudança de uso do “Minhocão”</h3>
				<p>Em 2006 a Secretaria Municipal de Planejamento (SEMPLA) iniciou, através do concurso Prestes Maia, a necessária discussão sobre a utilização do Elevado e seu impacto urbanístico, social e ambiental. Nesse âmbito, foi lançado um Concurso de Projetos que recebeu 46 propostas, sendo premiado em 1º lugar o Projeto de José Alves e Juliana Corradini, apresentado a seguir.</p>
				<blockquote>
					<p>A proposta vencedora mantém a função de conexão viária Leste-Oeste do Minhocão, agregando novos usos e reformulando a sua estrutura com o objetivo de proteger as construções adjacentes da poluição ambiental.</p>
					<p>O projeto transforma o Elevado num túnel através da incorporação de uma cobertura e da construção de galerias laterais de uso múltiplo. Reconhecendo a importância de um espaço de lazer nesse local da cidade e o atual uso da via elevada durante os finais de semana, o projeto propõe a implantação de um parque linear na cobertura do túnel. O acesso ao parque suspenso pode ser feito tanto pelas galerias quanto pelos edifícios de acesso. Essas galerias e os edifícios erguidos em terrenos adjacentes, abrigariam usos diversos tais como escolas, bibliotecas, cinemas, teatros, restaurantes, galerias de arte, centros de compras, livrarias e estacionamentos.</p>
					<p>Para a viabilização do empreendimento os arquitetos propõem uma Operação Urbana Minhocão que contempla parcerias com a iniciativa privada para a construção dos edifícios de acesso. Além disso, há a previsão de receita permanente proveniente do aluguel das galerias e estacionamentos destes edifícios.</p>
					<p>A nova estrutura metálica proposta é composta por três sistemas: o primário de treliças longitudinais apoiadas nas travessas principais do elevado; o secundário de vigas transversais a cada 10 m e altura de 1,20 m, e o terciário de vigas longitudinais a cada 2,17 m. No sistema proposto, os novos carregamentos são dirigidos diretamente para as linhas de apoio dos pilares do Elevado (a cada 40 m) sem solicitação do vigamento longitudinal existente.</p>
					<p>A vedação é feita por painéis de concreto de 50 mm de espessura e por painéis de vidro duplo, espaçados um do outro por um colchão de ar de 80 mm. Esse fechamento é interrompido nas esquinas, garantindo a ventilação do túnel. Para atenuar os ruídos e garantir um bom desempenho térmico, o projeto prevê a utilização de lã mineral revestida de chapa metálica perfurada e um sistema de exaustão natural composto por saídas e entradas de ar na parte superior e inferior do túnel</p>
					<p class="fonte">Caminhos do Elevado – Memória e Projetos, Prefeitura da Cidade de São Paulo, Secretaria de Planejamento, Imprensa Oficial 2008; página 93/94</p>
				</blockquote>

				<!-- Figura 28 -->
				<Imagem :dados="{
					tipo:'coluna',
					url: src('arquivos/parque-minhocao/img/fig28.jpg'),
					caption: 'Ilustração do projeto de José Alves e Juliana Corradini',
				}"></Imagem>
				<!--/ Figura 28 -->

				<!-- Figura 29 -->
				<Imagem :dados="{
					tipo:'coluna',
					url: src('arquivos/parque-minhocao/img/fig29.jpg'),
					caption: 'Ilustração do projeto de José Alves e Juliana Corradini',
				}"></Imagem>
				<!--/ Figura 29 -->

				<p>Em 2016, a partir da diretriz estabelecida pelo artigo 375 do Plano Diretor Estratégico de 2014, a Prefeitura de São Paulo recepcionou a doação de uma proposta de reconversão do elevado, elaborada pelo escritório Triptyque em parceria com o paisagista Guil Blanche. A descrição a seguir é de autoria dos autores do projeto.</p>
				<blockquote>
					<p>O plano diretor estipula um prazo máximo de 4 anos para transformar o elevado de quase 3 km. Durante anos, a reflexão ficou focada no futuro que seria dado às suas pistas e nunca na sua parte inferior, completamente esquecida pelo debate, mesmo sendo aquela que suscita mais cuidados, que forma uma espécie de túnel urbano, uma fonte de sombra abandonada.</p>
					<p>Triptyque em parceria com o paisagista Guil Blanche, mudaram o ponto de vista com relação a essa infra-estrutura, passando do elevado à Marquise. Eles convidam a cidade e seus habitantes a olharem para a marquise como um ambiente produtivo e não apenas como um espaço passagem. Esse conceito foi então doado à Prefeitura de São Paulo.</p>
					<p>Desde o início, o projeto é participativo. A primeira fase deste estudo foi convidar a comunidade local para desenvolver e compartilhar seus desejos com relação ao futuro da Marquise do Minhocão. A estrutura se transformará respeitando a identidade do bairro e da comunidade local.</p>
					<p>Em seguida, a proposta da Triptyque é dar vida ao espaço, iluminando-o graças a uma operação simples de abertura entre suas pistas para criar feixes de luz natural. A luz ativa o lugar e permite que a vida se instale, sendo que, no início, esse processo se dará sob a forma de vegetação. A Marquise do Minhocão é um dos lugares mais poluídos de São Paulo. Segundo pesquisas, plantas suspensas no teto ao longo de todo o comprimento do Minhocão poderão filtrar 20% da emissão de CO2 produzida pelos carros. A irrigação das plantas será feita por um sistema de coleta de água e a vaporização terá um papel de limpar o ar e as superfícies da marquise.</p>
					<p>Por fim, a Marquise poderá receber programas diversos. O seu comprimento será dividido em trechos determinados pelo espaço entre cada pilar (33m), estes blocos serão numerados como os "postos" nas praias do Rio de Janeiro. Cada bloco receberá 4 módulos de programa: cultura, alimentação, serviços e comércio.</p>
					<p class="fonte">A marquise do Minhocão - Triptyque e Movimento 90° [Gregory Bousquet, Carolina Bueno, Guillaume Sibaud, Olivier Raffaelli e Guil Blanche. Vitruviu. Março 2016. Acesso em 13 de Fevereiro de 2019. (<a href="http://www.vitruvius.com.br/revistas/read/projetos/16.183/5971">http://www.vitruvius.com.br/revistas/read/projetos/16.183/5971</a>)</p>
				</blockquote>

				<!-- Figura 30 -->
				<Imagem :dados="{
					tipo:'coluna',
					url: src('arquivos/parque-minhocao/img/fig30.jpg'),
					caption: 'Ilustração da proposta da Triptyque em parceria com o paisagista Guil Blanche',
				}"></Imagem>
				<!--/ Figura 30 -->

				<!-- Figura 31 -->
				<Imagem :dados="{
					tipo:'coluna',
					url: src('arquivos/parque-minhocao/img/fig31.jpg'),
					caption: 'Ilustração da proposta da Triptyque em parceria com o paisagista Guil Blanche',
				}"></Imagem>
				<!--/ Figura 31 -->

				<p>Em Maio de 2017 a Secretaria Urbanismo e Licenciamento recepcionou a doação de Proposta do Escritório Jayme Lerner, que, adicionalmente à transformação do Elevado em parque, vislumbra a possibilidade de transformação do entorno imediato pelo incentivo de ocupação dos edifícios lindeiros e conexões de seus pavimentos intermediários ao Minhocão.  Intitulado como Parque do Minhocão – de passagem a permanência, o projeto estrutura-se em acupunturas urbanas e ideias de utilização tanto da parte superior do elevado – áreas de estar, paisagismo, iluminação; da parte inferior – usos culturais; além de usos acoplados ao Minhocão através da utilização dos edifícios lindeiros. Sobre este uso acessório o projeto traz a seguinte proposta:</p>
				<blockquote>
					<p>Coberturas ou andares intermediários em hotéis, restaurantes, cafés, edifícios residenciais e corporativos podem, a partir de passarelas leves utilizando as mesmas peças de aço galvanizado, se comunicar diretamente com o parque, gerando novos negócios e oportunidades.</p>
					<p class="fonte">Parque do Minhocão: de passagem a permanência. Ideias e acupunturas. Jaime Lerner Arquitetos Associados. Maio de 2017.</p>
				</blockquote>

				<!-- Figura 32 -->
				<Imagem :dados="{
					tipo:'coluna',
					url: src('arquivos/parque-minhocao/img/fig32.jpg'),
					caption: 'Ilustração da proposta do Escritório Jayme Lerner',
				}"></Imagem>
				<!--/ Figura 32 -->

				<!-- Figura 33 -->
				<Imagem :dados="{
					tipo:'coluna',
					url: src('arquivos/parque-minhocao/img/fig33.jpg'),
					caption: 'Ilustração da proposta do Escritório Jayme Lerner',
				}"></Imagem>
				<!--/ Figura 33 -->

				<!-- Figura 34 -->
				<Imagem :dados="{
					tipo:'destaque',
					url: src('arquivos/parque-minhocao/img/fig34.jpg'),
					caption: 'Ilustração da proposta do Escritório Jayme Lerner',
				}"></Imagem>
				<!--/ Figura 34 -->

				<!-- Figura 35 -->
				<Imagem :dados="{
					tipo:'coluna',
					url: src('arquivos/parque-minhocao/img/fig35.jpg'),
					caption: 'Ilustração da proposta do Escritório Jayme Lerner',
				}"></Imagem>
				<!--/ Figura 35 -->

				<p>É importante frisar que as propostas citadas neste item são exercícios conceituais que podem ser levados em consideração na elaboração dos projetos de transformação do Parque Municipal do Minhocão. No entanto, alguns elementos importantes devem ser levados em conta nessa análise:</p>
				<ul>
					<li>Compatibilidade com as formas de uso já consolidadas no Parque;</li>
					<li>Viabilidade técnica das soluções propostas;</li>
					<li>Viabilidade financeira das soluções propostas.</li>
				</ul>
				<Comments :attr="{id:10, context:'Projetos de transformação e mudança de uso do “Minhocão”'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">Projetos urbanísticos para o perímetro imediato e área de influência</h3>
				<p>No entorno do Elevado Presidente João Goulart, o Minhocão, e no âmbito do PIU Setor Central, há uma série de projetos públicos em diversas fases de desenvolvimento. De início, podemos citar as diversas fases da PPP Casa Paulista, intervenção que marca um importante momento de transformação integrada do Centro, no qual estão articulados a qualificação do espaço público e a provisão de equipamentos e de moradia. Ainda no âmbito da provisão habitacional de interesse social, podemos citar os edifícios que abrigavam o antigo cinema Art Palácio e o Cine Marrocos, ambos desapropriados pela Prefeitura e com possibilidade de reconversão para moradia.</p>
				<p>No âmbito da provisão de equipamentos públicos, o Parque do Minhocão pode ser incluído na rede de equipamentos de lazer da cidade, da qual também fazem parte o Vale do Anhangabaú (com obra de requalificação já contratada), a Praça das Artes, o Observatório Martinelli e o Teatro Municipal, estruturas com potencial para atrair moradores de diversas regiões da metrópole. Somam-se a estes o novo Hospital Pérola Byington, proposto para a região dos Campos Elíseos, junto à Praça Júlio Prestes, e o Mercado Municipal Cantareira, importante polo de abastecimento, de turismo e gastronomia, cujo entorno também deve ser requalificado tendo em vista sua integração ao sistema de espaços públicos livres da cidade. Dos espaços e edifícios públicos da cidade, alguns projetos têm uma relação singular de proximidade com o Elevado João Goulart.</p>
				<p>O terreno de propriedade do Metrô junto à estação Marechal Deodoro tem sido objeto de estudos para concessão, e poderá incorporar como diretrizes advindas dos estudos para o Parque do Minhocão, em seu embasamento, a integração livre e franca entre o nível do térreo e o nível do Minhocão, propiciando um acesso ao parque associado a uma série de equipamentos, comércio e serviços, como lojas, restaurantes, banheiros públicos e postos de atendimento e informação ao publico de moradores e turistas que virão de diversas partes da cidade, do país e do mundo.</p>
				<p>O projeto do Largo do Arouche, doado à Prefeitura pela comunidade francesa no Brasil e desenvolvido pelo escritório de arquitetura Triptyque, estabelece ações voltadas à reabilitação paisagística, reforma e ampliação dos passeios, implantação de mobiliário e equipamentos em área de 17 mil m², potencializará atividades de lazer, entretenimento, comércio e serviços.</p>
				<p>A requalificação do Largo do Arouche a ser implantada por meio de Termo de Cooperação (01/SMSO/2018) entre a PMSP (SIURB+SUB-SÉ) e a Associação Viva o Centro, encontra-se em análise junto à Comissão Permanente de Acessibilidade (SEI 6022.2018/0005038-7). Em tempo, o projeto poderá incorporar como diretriz advinda dos estudos para o Parque do Minhocão a integração via construção de novos acessos ou requalificação dos acessos já existentes no encontro entre os dois projetos, tendo em vista a mobilidade pedonal e de veículos não motorizados, garantindo a integração entre os dois espaços.</p>
				<p>Diversas porções dos espaços públicos livres do Centro de São Paulo são objetos de estudos e projetos de requalificação, a fim de qualificar essa rede para que, além do já importante papel no âmbito da mobilidade, tais locais também possam ser encarados como espaços de passeio e permanência, articulando e qualificando os diversos usos que são dados às ruas, às calçadas e aos calçadões da cidade, pela população de toda a região metropolitana.</p>
				<p>O PIU Terminal Princesa Isabel, projeto desenvolvido pela SP Urbanismo em 2017, é outro projeto com potencial sinergia com com o Parque Minhocão, possibilitando, entre outros aspectos, o acesso facilitado a um parque público de porte aos passageiros que desembarcam no Terminal Princesa Isabel da SPTrans. </p>
				<p>Outra proposta trazida pelo Escritório Jaime Lerner foi a criação de uma linha Circular Centro, atualmente sob análise de sua viabilidade na SMT. O projeto propõe uma solução de mobilidade urbana com adoção de um veículo inovador e amigável ao pedestre, associada à qualificação de espaços públicos, conectando diversos pontos de interesse na região central, como grandes equipamentos culturais e monumentos históricos, estações, terminais e linhas de transporte público existentes, polos de comércio especializado e popular, centros de ensino e pesquisa e outros equipamentos de lazer, entretenimento e gastronomia.</p>
				<p>Nos dois pontos em o traçado referencial cruza o Parque Minhocão, poderão ser previstas paradas integradas aos acessos ao parque.</p>
				<p>Associada a este projeto, foi protocolada pela Alstom Brasil Energia e Transporte Ltda. e Telar Engenharia e Comércio S/A junto a Secretaria Municipal de Mobilidade e Transporte  a Manifestação de Interesse Privado (MIP) que tem como objetivo a implantação, operação e manutenção de Veículo Leve sobre Trilhos (“VLT”), visando à revitalização da área central do Município de São Paulo no formato Concessão Patrocinada (Pagamento de tarifas pelos usuários + contraprestação do Poder Concedente). O traçado encontra-se em fase de projeto e não há sugestão de prazo para o contrato.  Todavia, as principais características são: 26 km de via (ida e volta) com traçado circular, definido no Projeto de Engenharia; paradas a cada 700 metros; criação de bulevares na Rua José Paulino, Rua Mauá e Rua da Cantareira; demanda esperada de 80 mil passageiros por dia útil; intervalo de 4,5 minutos entre veículos no horário de pico; velocidade média esperada de 12 km/h; prazo de 3 anos para início da operação do circuito completo. </p>
				<p>Em suma, podemos dizer que o Parque do Minhocão, sobretudo se implantado sobre a via elevada, terá papel integrador de diversos projetos e demandará ações pontuais no sentido de compatibilizá-lo com outros projetos do Setor Central, que se mostram oportunidades estratégicas no sentido da implementação de serviços e equipamentos.</p>
				<Comments :attr="{id:11, context:'Projetos urbanísticos para o perímetro imediato e área de influência'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>
		</section>

		<section>
			<h2 class="titulo" indent="1">Anexo A – Panorama histórico de ocupação do território integrado ao Elevado</h2>
			<p>Superado o período colonial, podemos situar a consolidação do Centro Novo (e do entorno do futuro Elevado Presidente Costa e Silva, depois Elevado Presidente João Goulart), durante o ciclo do café, que impunha novas dinâmicas na estruturação urbana e social paulistana. Sobre o histórico de ocupação da região, no contexto do ciclo do café, o professor Candido Malta Campos descreve em seu texto para a obra Caminhos do Elevado – Memória e Projetos:</p>
			<blockquote>
				<p>Com o sucesso da política de valorização do café, acordada no Convênio de Taubaté em 1906, abriu-se caminho para intervenções mais ambiciosas. Para facilitar o acesso às estações encomendou-se o Viaduto Santa Ifigênia. Discussões em torno dos demais melhoramentos a serem priorizados envolviam, entre outras propostas, o alargamento da Líbero Badaró, da própria São João e o aproveitamento do Vale do Anhangabaú, assim como a localização daquela que deveria ser a “avenida central” paulistana. Porém, um bulevar que se prezasse − a exemplo daqueles abertos por Haussmann em Paris e admirados pelas elites afrancesadas da época − deveria ser largo, retilíneo e plano, e era difícil criá-lo na topografia acidentada da cidade. São Paulo parecia exigir soluções em desnível: viadutos, túneis, vias elevadas.</p>
			</blockquote>
			<p>Neste contexto a Av São João passa a assumir um caráter de marco urbanístico e consolida novos padrões arquitetônicos:</p>
			<blockquote>
				<p>A visão haussmaniana prevalecia novamente, e para figurar como “avenida central” paulistana, jogaram-se as fichas no alargamento da Rua de São João para trinta metros, aprovado em 1912 e iniciado em seguida. Um aterro permitiu aplainar melhor a travessia do Anhangabaú. Para garantir o caráter parisiense do bulevar, construções na nova avenida (assim como na Líbero e na Sé) passaram a seguir normas edilícias especiais que, embora não estabelecessem gabarito fixo, asseguravam certa homogeneidade volumétrica. Em 1915, a avenida já chegava ao Paissandu; em 1921, à Rua Vitória; em 1923, era a vez do trecho inicial junto à Praça Antonio Prado, abrindo caminho à construção do Martinelli nos anos seguintes; enquanto esse ganhava altura, culminando nos 23 andares inaugurados em 1930 (após embargo da Prefeitura, pois ultrapassava os parâmetros volumétricos legais), o prolongamento da via atingia a Avenida Angélica.</p>
			</blockquote>

			<!-- Figura 36 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig36.jpg'),
				caption: 'Fachada do Edifício Angélica (1927) Arq. Júlio de Abreu Jr.',
				fonte: 'XAVIER,1983.'
			}"></Imagem>
			<!--/ Figura 36 -->

			<!-- Figura 37 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig37.jpg'),
				caption: 'Fachada do Ufa-Palácio (1936)',
				fonte: 'http://salasdecinemasp2.blogspot.com.br'
			}"></Imagem>
			<!--/ Figura 37 -->

			<!-- Figura 38 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig38.jpg'),
				caption: 'Fachada do Prédio Lívia Maria na Av. São João. Características art-déco (1939)',
				fonte:'Acrópole'
			}"></Imagem>
			<!--/ Figura 38 -->

			<!-- Figura 40 -->
			<Imagem :dados="{
				tipo: 'default',
				url: src('arquivos/parque-minhocao/img/fig39.jpg'),
				caption: 'Fachada do Edifício Trussardi (1941)',
				fonte: 'Anelli, 2001'
			}"></Imagem>
			<!--/ Figura 39 -->

			<!-- Figura 40 -->
			<Imagem :dados="{
				tipo: 'default',
				url: src('arquivos/parque-minhocao/img/fig40.jpg'),
				caption: 'Edifício Racy (1950)',
				fonte: 'Anelli, 2001'
			}"></Imagem>
			<!--/ Figura 40 -->

			<!-- Figura 41 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig41.jpg'),
				caption: 'Edifício Racy (1950)',
				fonte: 'Acervo Estado'
			}"></Imagem>
			<!--/ Figura 41 -->

			<p>A ocupação do entorno da Avenida São João ganha novos contornos com a remodelação da avenida:</p>
			<blockquote>
				<p>Era o ideal da capital agroexportadora, com bairros residenciais aprazíveis rodeando um núcleo terciário central marcado por espaços diferenciados de aparência européia e estruturada por linhas radioconcêntricas de bonde, e acessada pela ferrovia. Pela São João, Paissandu e Rua Conceição (atual Cásper Líbero) chegava-se agora às estações, e esse era um trajeto que urgia enobrecer. Todavia, a mesma proximidade atraía usos de valor mais ambíguo, entre eles a prostituição, que, expulsa do centro velho, ressurgia junto à São João, incluindo estabelecimentos de luxo como o descrito no romance Madame Pommery (1920), cujo personagem-título, imigrante polonesa tornada cafetina, satiriza os hábitos ocultos da elite cafeeira. Prédios afrancesados incluíam moradias para solteiros (garçonnières), novidade escandalosa que abria caminho para inúmeras transgressões, inclusive a dos modernistas que se reuniam no apartamento de Oswald de Andrade.</p>
			</blockquote>
			<p>Da mesma forma</p>
			<blockquote>
				<p>A partir de 1924, como lembra Sarah Feldman, a intervenção policial sobre a localização das chamadas casas de tolerância foi institucionalizada, instrumento logo aplicado na tentativa de sanear moralmente o entorno da São João − cujo alargamento, pontuado por belas praças como a do Correio, o Largo do Paissandu, a da Vitória (atual Júlio Mesquita) e a Marechal Deodoro, continuava a ser, ao longo dos anos 1920, 1930 e 1940, um dos maiores investimentos da Prefeitura. O Perímetro de Irradiação, anel viário proposto por Ulhôa Cintra desde 1921 como meio de desafogar o centro, contribuiria para colocar a região no foco das intenções transformadoras, pois seu traçado, cruzando a São João, envolveria a abertura de novas avenidas, que abririam todo o trecho a Noroeste, Oeste e Sudoeste do centro histórico à expansão das funções centrais. Estruturaria ambicioso esquema radial-perimetral de circulação de automóvel, incentivando o crescimento horizontal e vertical, e abrindo novas frentes de ocupação terciária.</p>
			</blockquote>
			<p>Contudo, a década de 1930 marca uma mudança do planejamento urbano paulistano. O Plano de Avenidas passa a impor uma nova estruturação territorial. Prestes Maia</p>
			<blockquote>
				<p>deu continuidade ao prolongamento da São João até o largo das Perdizes, com viaduto sobre a Avenida Pacaembu ligou-a ao Arouche pela Avenida Vieira de Carvalho, alargou a Rio Branco, a Barão de Limeira e a Conceição (atual Cásper Líbero), e, quando saiu da Prefeitura em 1945, além de deixar quase pronta a rótula central, na qual o maior destaque foi dado à Avenida Ipiranga, já havia iniciado a abertura do segundo circuito perimetral de seu esquema viário − passando agora pelo alargamento das ruas Mauá, Duque de Caxias e Amaral Gurgel e pela abertura da Praça Roosevelt.</p>
				<p>A mesma altura mínima obrigatória de 39 metros no alinhamento imposta na Ipiranga, São Luís, Arouche, Vieira de Carvalho e República foi aplicada à São João, do Largo do Paissandu à Praça Júlio Mesquita − enquanto nos demais trechos do Perímetro de Irradiação, assim como na Praça da Sé, a altura mínima era de 22 metros.</p>
			</blockquote>
			<p>Assim</p>
			<blockquote>
				<p>A região entre Paissandu, São João e Ipiranga ganhava cinemas luxuosos e passava a concentrar a vida noturna de bares e restaurantes de melhor padrão, logo ganhando o apelido de Cinelândia paulistana. E a zona de tolerância da prostituição, o chamado baixo meretrício, foi transferida para o Bom Retiro.</p>
			</blockquote>

			<!-- Figura 42 -->
			<Imagem :dados="{
				tipo:'coluna',
				url: src('arquivos/parque-minhocao/img/fig42.jpg'),
				caption: 'Avenida São João, anos 1930. Claude Lévi-Strauss',
				fonte: 'Caminhos do Elevado – Memória e Projetos'
			}"></Imagem>
			<!--/ Figura 42 -->

			<!-- Figura 43 -->
			<Imagem :dados="{
				tipo:'coluna',
				url: src('arquivos/parque-minhocao/img/fig43.jpg'),
				caption: 'Avenida São João, anos 1930. J.B. Duarte',
				fonte: 'Caminhos do Elevado – Memória e Projetos'
			}"></Imagem>
			<!--/ Figura 43 -->

			<p>No contexto do pós-guerra o Centro Novo passa a assumir uma nova centralidade:</p>
			<blockquote>
				<p>No segundo pós-guerra, enquanto o Centro Velho, congestionado e de difícil acesso por automóvel, perdia atratividade, a centralidade dominante passou para o Centro Novo. Com a crescente utilização da rede ferroviária como linhas de subúrbio, a afluência da população de menor renda às estações da Luz e Sorocabana acentuou a mudança de perfil social dos Campos Elíseos e o caráter simultaneamente transicional e receptivo da região, favorecidos também pela instalação da Estação Rodoviária (1961).</p>
				<p>Tentativas de disciplinar o crescimento vertical por meio do Código de Obras e leis especiais perdiam espaço em face do boom imobiliário. A área central e suas frentes de expansão, incluindo o eixo da São João, eram preenchidas por edifícios de escritórios ou quitinetes, que faziam uso da arquitetura moderna para maximizar o aproveitamento dos terrenos.</p>
			</blockquote>
			<p>Na década de 60, a cidade passa a recepcionar grandes estruturas viárias, culminando, no final da década, com a construção do Elevado.</p>
			<blockquote>
				<p>A partir da gestão Faria Lima (1965-1969) a Prefeitura, com caixa reforçado e apoio do governo federal, encetou nova leva de grandes obras viárias. Mas Faria Lima priorizou o metrô e vias expressas de fundo de vale como a 23 de Maio. A idéia de um elevado sobre a São João ainda era considerada por demais radical. O Plano Urbanístico Básico (PUB), elaborado sob sua administração, propôs nova estrutura viária formada por malha ortogonal de vias expressas, na qual o eixo Leste-Oeste mais central passaria bem ao Sul da São João e da atual Radial Leste. Foi o prefeito seguinte, Paulo Maluf (1969-1971) quem consagraria a transmutação de parte do traçado da segunda perimetral em ligação diametral incluindo o elevado, cujas obras ganharam impulso inédito. Em menos de um ano, milagre da engenharia nacional, ergueu-se o Elevado Costa e Silva. Ao longo dos anos 1970, as administrações seguintes dariam continuidade à ligação Leste-Oeste, completando a Praça Roosevelt e os trechos que atravessam o Bexiga e a Liberdade; ao longo dos anos 1980, tomaria forma a atual Radial Leste e o complexo viário do Glicério amarrando o conjunto.</p>
			</blockquote>

			<!-- Figura 44 -->
			<Imagem :dados="{
				tipo:'coluna',
				url: src('arquivos/parque-minhocao/img/fig44.jpg'),
				caption: 'Perspectiva do projeto original, 1969 (trecho sobre o Largo do Arouche)',
				fonte: 'BRANCO, 2006 apud ASSUNÇÃO, 2016 (Originais em Arquivo da SIURB)'
			}"></Imagem>
			<!--/ Figura 44 -->

			<p>O Elevado João Goulart passa a ter papel importante na história da urbanização e do urbanismo paulistano. A estrutura sintetiza três conceitos sobre o papel do sistema viário na cidade: primeiro, em relação ao papel do seu traçado dentro da estrutura urbana; segundo, às implicações do conceito de via expressa, idealizado para eliminar interferências e aumentar a velocidade dos deslocamentos; e, por fim, sua elevação ou rebaixamento de nível como forma de segregação do tecido urbano.</p>
			<p>O Elevado como expressão do sistema viário estrutural corresponde à forma de sua articulação com o conjunto de vias, sendo duas delas radiais (Avenidas General Olimpio da Silveira e São João) e um trecho da segunda perimetral (Rua Amaral Gurgel). Ademais, estende-se a Leste a partir da Liberdade e Glicério, chegando até a Avenida Alcântara Machado e constituindo, desta forma, a primeira conexão diametral expressa entre as zonas Leste e Oeste, caracterizando-se por contornar o centro e o perímetro de irradiação do Plano de Avenidas de Prestes Maia, concebido em 1930<sup>1</sup>.</p>
			<p>De fato, a conexão estrutural Leste-Oeste já estava presente no Plano de Avenidas, que dispunha de duas importantes conexões diametrais – a Norte-Sul, formando o conhecido “Sistema Y” e a Leste-Oeste, nunca inteiramente implantada, ligando a Avenida São João ao Parque Dom Pedro II, passando em túnel sob o Largo São Bento<sup>2</sup>. Como bem analisado por Anelli e Seixas (2008): “(...) se no primeiro caso a própria topografia resolvia a questão da transposição da área central, na ligação Leste-Oeste seria necessário uma solução de engenharia muito avançada para a época”.</p>
			
			<!-- Figura 45 -->
			<Imagem :dados="{
				tipo:'coluna',
				url: src('arquivos/parque-minhocao/img/fig45.jpg'),
				caption: ' Perspectiva do projeto original',
				fonte: 'BRANCO, 2006 apud ASSUNÇÃO, 2016 (Originais em Arquivo da SIURB)'
			}"></Imagem>
			<!--/ Figura 45 -->

			<p>A integração do traçado do Elevado no sistema viário estrutural da cidade está relacionada também à conceituação do segundo anel perimetral, idealizado nos estudos de Prestes Maia já em 1956, permitindo o desvio das diametrais com maior velocidade<sup>3</sup>. O segundo anel conformaria uma “(...) ligação restrita, entre a Vila Buarque e a Mooca, composta pela Avenida Duque de Caxias e pela Rua Amaral Gurgel, que se prolongaria até a baixada do Glicério e passaria sob a Rua da Consolação e a Avenida Liberdade. Do Glicério, seguiria para a Zona Leste por um traçado próximo ao da atual Radial Leste” (ANELLI, SEIXAS, 2008). Em 1969, a concepção da segunda perimetral recebeu uma alteração substancial. A partir do projeto de prolongamento da Rua Amaral Gurgel até a Avenida São João, seria possível sua conexão com a Avenida Francisco Matarazzo. A segunda perimetral fora então planejada junto com a ligação contínua e expressa Leste-Oeste, na qual se adotaria a opção elevada de separação do tráfego. Surgia, assim, o Elevado Costa e Silva, hoje denominado Elevado João Goulart.</p>

			<!-- Figura 46 -->
			<Imagem :dados="{
				tipo:'coluna',
				url: src('arquivos/parque-minhocao/img/fig46.jpg'),
				caption: 'Perspectiva do projeto original, 1969',
				fonte: 'BRANCO, 2006 apud ASSUNÇÃO, 2016 (Originais em Arquivo da SIURB)'
			}"></Imagem>
			<!--/ Figura 46 -->

			<!-- Figura 47 -->
			<Imagem :dados="{
				tipo:'coluna',
				url: src('arquivos/parque-minhocao/img/fig47.jpg'),
				caption: 'Perspectiva do projeto original, 1969',
				fonte: ' BRANCO, 2006 apud ASSUNÇÃO, 2016 (Originais em Arquivo da SIURB)'
			}"></Imagem>
			<!--/ Figura 47 -->

			<p>Neste mesmo contexto, um fato é fundamental para compreendermos a relevância do debate em torno das vias expressas na cidade de São Paulo: a atuação de Robert Moses a partir da elaboração do “Plano de Melhoramentos Públicos para a Cidade de São Paulo” em 1950, no qual foi introduzida a via expressa como uma alternativa para separação das interferências da malha urbana no tráfego de veículos, sendo fundamental para impulsionar os projetos viários nas décadas seguintes (ANELLI, SEIXAS, 2008).</p>
			<p>Passadas quase cinco décadas desde sua inauguração como via expressa segregada, os impactos causados pelo Elevado em seu entorno foram gritantes: houve uma mudança brusca na rotina dos moradores adjacentes, com a estrutura e o alto fluxo de veículos a poucos metros das janelas e elevados níveis de ruído; o térreo, pouco iluminado e com alta concentração de poluentes, depreciou a atividade comercial e impulsionou a decadência dos imóveis; os edifícios perderam o perfil de moradores de classe média e a sofisticada arquitetura do entorno, com pouca manutenção, acabou degradando-se. </p>
			<p>Ainda que tenha nascido no contexto de valorização das vias expressas e do fluxo de automóveis individuais como modo predominante de circulação, a frequência e a intensidade dos congestionamentos ao longo de toda a ligação Leste-Oeste, dentro e fora do Elevado, atestam sua ineficiência em atender às demandas de mobilidade de São Paulo (ANELLI, SEIXAS, 2008). A soma entre essa ineficiência e a percepção clara da degradação causada pelo alto fluxo de veículos sobre e sob a estrutura vem colocando já há alguns anos a necessidade de rever a inserção urbana do Elevado como dispositivo viário dedicado exclusivamente ao transporte individual.</p>
			<ol class="notas">
				<caption>Notas</caption>
				<li>ANELLI, R. SEIXAS, A. O peso das decisões: o impacto das redes de infraestrutura no tecido urbano. In. ARTIGAS, R. et al. Caminhos do Elevado: Memória e Projetos. São Paulo: Ed. Imprensa Oficial, 2008, p.59.</li>
				<li>CAMPOS, Candido Malta. Os rumos da cidade: urbanismo e modernização em São Paulo. São Paulo: Ed. Senac, p. 417</li>
				<li>MAIA, Francisco Prestes. Ante-projeto de um sistema de transporte rápido metropolitano. São Paulo: Prefeitura do Município de São Paulo, 1955, p. 142.</li>
			</ol>
			<Comments :attr="{id:12, context:'Anexo A – Panorama histórico de ocupação do território integrado ao Elevado'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Anexo B – Análise de experiências semelhantes (estudo preliminar)</h2>
			<p>Alguns exemplos de intervenções urbanísticas para transformação e ativação de estruturas físicas e áreas adjacentes em parques lineares urbanos foram selecionados para análise. Este anexo apresenta os resultados preliminares desse estudo para as seguintes áreas:</p>
			<ul>
				<li>Parque High Line, Nova York/EUA</li>
				<li>Coullée Verte René-Dumont, Paris/França</li>
				<li>Renaturalização do Riacho Cheong Gye Cheon, Seul/Coréia do Sul</li>
				<li>The Bentway, Toronto/Canadá</li>
				<li>The 606, Chicago/EUA</li>
				<li>Seoullo 7017, Seul/Coréia do Sul</li>
			</ul>
			<h3>High Line</h3>
			<p>A High Line é um parque elevado de aproximadamente 2,3km de extensão, com áreas verdes, mobiliário urbano e pequenos comércios em lugares específicos. Sua construção foi iniciada em 2006, com a inauguração do trecho mais ao sul três anos depois. O trecho final foi concluído em 2014. A construção do Parque é resultado de um intenso trabalho da sociedade civil e esferas públicas, envolvendo a doação da área ao município, concurso de projetos e alterações no zoneamento, entre outros.</p>

			<!-- Figura 48 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig48.jpg'),
				caption: 'Arquibancada em trecho do High Line',
				fonte: 'Vista aérea de trecho do High Line implantado'
			}"></Imagem>
			<!--/ Figura 48 -->

			<p>O parque, projeto de Diller Scofidio + Renfro, James Corner Field Operations e Piet Oudolf, é mantido, operado e programado pela Friends of the High Line em parceria com o Departamento de Parques e Recreação de Nova York. Exemplo icônico de revitalização de áreas abandonadas e envolvimento comunitário, o High Line abriga um conjunto diversificado de programas públicos gratuitos.</p>

			<!-- Figura 49 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig49.jpg'),
				caption: 'Arquibancada em trecho do High Line',
				fonte: 'Imagem de Rowa Lee'
			}"></Imagem>
			<!--/ Figura 49 -->

			<p>O famoso parque elevado foi construído sobre uma antiga estrutura que serviu como linha férrea da década de 1930 à década de 1980. Após o abandono da estrutura, considerou-se a demolição da mesma. Contudo, ao fim do século XX a ideia de reforma e novo uso do espaço foi levada à frente e a proprietária da linha, CSX Transportation, Inc., passou a receber propostas de uso da estrutura. </p>
			<p>Em meio à discussão sobre o futuro da High Line, surgiu a organização de conservação sem fins lucrativos “Friends of the High Line”, fundada em 1999 por residentes da cidade, que advogou pela readequação do espaço para utilização pública. Nos anos de 2003 e 2004 a organização realizou um concurso de ideias e outro de design, do qual o grupo vencedor foi selecionado para desenhar o design do novo parque. </p>
			<p>A entrada definitiva do tema na pauta na agenda da cidade ocorreu em 2005. A aprovação da emenda do instrumento de zoneamento do distrito onde está localizado o parque faria com que o distrito deixasse de ser industrial de baixa densidade. A emenda garantia o uso aberto do espaço e novos limites para o desenvolvimento de empreendimentos comerciais e residenciais, além da inclusão de novas áreas para moradia a custo acessível. </p>
			<p>Os estudos de impacto do projeto que acompanharam a proposta de alteração de zoneamento do distrito consideraram um período de dez anos. Foram incluídos temas como poluição sonora, impactos sobre tráfego e estacionamento, uso por pedestres, área coberta por sombras, infraestrutura, uso do solo, impacto sobre a mudança do perfil socioeconômico da região, e alternativas ao projeto, entre outros. </p>
			<p>Ainda em 2005, a CSX Transportation Inc transferiu a propriedade de um trecho da linha de trem elevada para a cidade de Nova Iorque e ambas assinaram um acordo de uso recreacional do espaço. No ano seguinte as obras da primeira seção do High Line tiveram início. As atividades envolveram a remoção dos trilhos, permeabilização do solo, construção de sistemas de acesso (escadas e elevadores), trilhas, arborização, iluminação, adequações de segurança, instalação de mobiliário urbano, etc.</p>
			
			<!-- Figura 50 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig50.jpg'),
				caption: 'High Line Park. Fonte: Field Operations',
				fonte: 'Imagem de Rowa Lee'
			}"></Imagem>
			<!--/ Figura 50 -->

			<p>A construção do parque foi feita em três etapas. Em junho de 2009, ocorreu a inauguração de sua primeira seção, e dois anos depois, a de sua segunda seção. Para a construção do terceiro trecho, houve a necessidade da doação de um novo trecho da linha férrea para a cidade, assim como foi feito para o trecho já construído. A abertura da terceira seção (fase 1) ocorreu em setembro de 2014, totalizando a extensão total de 2,33 km. A fase 2 da seção 3 deve ser inaugurado no primeiro semestre de 2019, no qual está sendo construído um terraço com jardim e varandas, e fase 3 ainda sendo planejada.</p>
			<p>Suas medidas variam durante toda sua extensão. Está entre 5,5 e 9 metros do solo e possui uma largura que varia de 9 à 18 metros. Uma área de vinte sete mil metros quadrados feitos de concreto reforçado e ferro, que podem ser acessados via onze entradas, entre escadas, rampas e elevadores. </p>
			<p>O espaço possui entrada gratuita e tem horários de funcionamento que variam de acordo com os meses, permanecendo aberto entre 07:00 e fechando entre 19:00 e 22:00. Não é permitido passeios de bicicleta, skate, patins, ou outros meios semelhantes. Assim como não é permitido fumar ou levar cachorros. O parque conserva quinze jardins distribuídos por toda sua superfície, inspirados na paisagem natural que persistiu sobre os trilhos enquanto estava abandonado. Possui banheiros, pontos de venda de alimentos e pontos de acesso à internet via wi-fi.</p>
			<p>O espaço possui uma loja física que comercializa produtos com a marca do parque, permitindo ainda aos visitantes tornarem-se sócios do High Line. Os planos com diferentes benefícios são dispostos na modalidade mensal (5~65 dólares) ou única (40~750 dólares), além de planos especiais. Sem repasses de verbas públicas, o parque conta com doações para sua manutenção. </p>
			<p>A organização Friends of the High Line, em parceria com o Departamento de Parques e Recreação da cidade, é a responsável por sua programação, manutenção e operação até 2021. Este acordo ainda pode ser prorrogado por mais dois períodos de cinco anos e seu uso e ocupação pela organização é cedida pela cidade sem nenhum custo. A organização é responsável pela manutenção e reparo do parque através da arrecadação de fundos privados, do custo de pessoal às manutenções e operações diárias. Por outro lado, a cidade é responsável pela manutenção da estrutura de concreto e ferro e outros serviços públicos, assim como pela equipe de segurança durante alguns anos. Ainda, está presente no contrato uma quantia mínima de gastos a serem empregados para manutenção do espaço físico do High Line, sendo reajustado pelo índice de preços do consumidor.</p>
			<p>Os investimentos para a construção do parque (seções 1, 2 e 3) foram estimados em cerca de 220 milhões de dólares. A divisão desse valor ficou entre governo (federal, estadual e municipal), arrecadação de fundos privados feita pela Friends of the High Line e incorporadoras como Oxford Properties e The Related Companies. Em relação aos custos, segundo o balanço financeiro de 2017 divulgado pela responsável do parque, houve despesa total de 29,5 milhões de dólares e uma arrecadação de 25,2 milhões. Já em 2016 a receita foi de 21,1 milhões e as despesas de 16,8 milhões de dólares. A responsável pelo espaço estima que a cidade arrecade um bilhão de dólares em vinte anos.</p>
			<p>Desde seu lançamento, os valores das quadras ao redor da seção 1 do parque cresceram em cerca de 50,6% e o da seção 2 em cerca de 48,2%. Uma área vizinha às primeiras apontou um crescimento de 31,4% no mesmo período. As informações são do site de vendas online de imóveis de Nova Iorque, StreetEasy.</p>
			<p>A valorização também é medida quando comparado somente os valores de vendas de lançamentos. Em 2015, uma área vizinha ao parque, o valor médio de novas unidades foi cerca de 1,93 milhões de dólares. Já o valor médio ao redor da seção 1 foi de 4,42 milhões e para a seção 2 cerca de 6,06 milhões, o que representa 130% e 214% de superioridade, respectivamente.</p>
			
			<!-- Figura 51 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig51.jpg'),
				caption: 'Média de renda em 2013 do entorno do High Line Park. Fonte: Field Operations',
			}"></Imagem>
			<!--/ Figura 51 -->

			<p>O parque coleta e analisa dados sobre os visitantes. Cerca de 7,6 milhões de pessoas transitaram pelo parque em 2015, sendo 31% residentes da cidade e 67% de não residentes. A maioria dos visitantes estão no parque pela primeira vez e a idade média do visitante é de 41 anos. As atividades mais comuns entre os visitantes são: caminhar, observar pessoas e os jardins, tirar fotos, relaxar, passar o tempo com amigos, alimentar-se.</p>

			<h3>Coulée Verte René-Dumont</h3>
			<p>Em Paris, a “Promenade Plantée”, inaugurada em 1993, constitui-se de um parque sobre antigas estruturas ferroviárias, que se inicia a 10 m do chão, no Viaduc dês arts. A Promenade possui no total 4,5km de extensão, a maior parte sobre a antiga ferrovia, parte sobre novas passarelas e parte também ao nível do chão. A Promenade conecta-se ainda com o Parque Reully, áreas esportivas e culturais e outras áreas verdes menores.</p>
			
			<!-- Figura 52 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig52.jpg'),
				caption: 'Promenade Plantée',
			}"></Imagem>
			<!--/ Figura 52 -->

			<!-- Figura 53 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig53.jpg'),
				caption: 'Promenade Plantée',
			}"></Imagem>
			<!--/ Figura 53 -->

			<p>Além do Parque, o Viaduto abriga em seus 67 arcos remanescentes ateliês com fachadas de madeira e vidro, junto à Avenida Daumesnil. A reforma e restauro do viaduto para a criação destes espaços se deu entre 1994 e 1997, a partir do projeto de Patrick Berger resultante de concurso público, que organizou as atividades que já ocorriam no local.</p>

			<!-- Figura 54 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig54.jpg'),
				caption: 'Promenade Plantée',
			}"></Imagem>
			<!--/ Figura 54 -->

			<h3>Riacho Cheong Gye Cheon</h3>
			<p>Outro exemplo, mais próximo do caso do Minhocão, pois trata-se de reforma de estrutura também rodoviarista e voltada ao transporte individual, é a Renaturalização do Riacho Cheong Gye Cheon, em Seul, que passou décadas coberto por vias arteriais e um viaduto, implantados na década de 70. Nos anos 2000, o então prefeito Myung-bak Lee, a partir da pressão da população que reclamava da degradação do local, optou pela retirada da via e do elevado em questão, e criou um parque linear com 5,84 quilômetros, com espaços de lazer, a implantação de uma rede de esgotamento sanitário, sistema de drenagem de águas pluviais, a construções de pontes de conexão entre os dois lados, o plantio de espécies nativas, entre outros aspectos que acabaram por conectar muito mais a população local.</p>
			
			<!-- Figura 55 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig55.jpg'),
				caption: 'Renaturalização do Riacho Cheong Gye Cheon',
			}"></Imagem>
			<!--/ Figura 55 -->

			<p>O aspecto mais verde do parque se intensifica na medida em que se afasta do centro, ganhando contornos cada vez menos urbanos. O Parque linear situa-se entre 3 a 5m abaixo do nível da rua, ainda bastante movimentada, criando um espaço preservado. Ao final dele, está uma reserva ecológica de mais de 1,1 quilometro quadrado, e posteriormente segue até o Rio Han, que atravessa a parte sul da cidade.</p>
			
			<h3>The Bentway</h3>
			<p>O parque é parte de um projeto de desenvolvimento urbano que compreende uma área maior, liderado pela agência pública Waterfront Toronto (criada pelos governos do Canadá, Ontario e Toronto). Toda a região onde o parque está localizado tem uma extensão de cerca de 800 hectares e está localizada de frente ao lago Ontario. O objetivo do projeto é transformar a região, reduzindo o espraiamento da cidade, desenvolvendo comunidades sustentáveis, aumentando a oferta de moradias populares, expandindo o transporte público e aumentando a competitividade econômica.</p>

			<!-- Figura 56 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig56.jpg'),
				caption: 'The Bentway e seu entorno',
				fonte: 'Waterfront Toronto'
			}"></Imagem>
			<!--/ Figura 56 -->

			<p>Anunciado em novembro de 2015 e inaugurado em janeiro de 2018, The Bentway é composto por três grandes ambientes: intenso, médio e calmo, distribuídos em sua extensão de 1,75 km. Os ambientes ainda são seccionados em 55 espaços pelas pilastras que sustentam a rodovia sob a qual está construída, e que formam um grande corredor de 14,5 metros de altura e 24 metros de largura. Seu mobiliário inclui assentos e mesas; espreguiçadeiras; cones de sinalização; uma pista de patinação de gelo de 220 metros; tendas temporárias de comércio de alimentos; jardins rasteiros; e um espaço dedicado à pratica de skate com obstáculos não permanentes. Durante o inverno a pista de patinação no gelo torna-se a principal atração do espaço, sendo cobrada a sua utilização e aluguel de patins. Ainda, sua área total de mais de 4 hectares comporta um espaço dedicado à um pequeno teatro a céu aberto, painéis com grafite, e uma trilha para pedestres. O espaço é utilizado também para sediar diferentes tipos de eventos, como confraternizações, shows, feiras, etc. O espaço é aberto todos os dias e não há bilheteria.</p>
			
			<!-- Figura 57 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig57.jpg'),
				caption: 'The Bentway',
				fonte: 'DailyHive'
			}"></Imagem>
			<!--/ Figura 57 -->

			<p>A construção e a operação deste espaço urbano envolveram parcerias. Construído pela mesma agência pública que coordena a revitalização da aérea, The Bentway foi financiado totalmente (excluindo gastos com manutenção e operação) com a doação de 25 milhões de dólares canadenses da Matthews Foundation, organização criada por um casal de moradores da cidade. Seu design foi realizado por dois escritórios de arquitetura, PUBLIC WORK e Greenberg Consultants e contou com um relatório de impacto ambiental pronto em janeiro de 2017, um ano antes de sua inauguração. O atual espaço representa apenas a fase 1 do projeto, e suas futuras fases estão sob planejamento.</p>

			<!-- Figura 58 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig58.jpg'),
				caption: 'The Bentway e a Gardiner',
				fonte: 'Canadian Architect'
			}"></Imagem>
			<!--/ Figura 58 -->

			<p>A governança do projeto de construção foi disposta por: comitê executivo de direção; time consultivo de doadores; comitê consultivo formado por stakeholders (entre eles moradores); think-tank curatorial; um time de construção e outro de design. Os espaços de discussão presencial com a sociedade restringiram-se a duas consultas públicas que atraíram cerca de 220 pessoas. As reuniões forneceram atualizações sobre o design e os relatórios de avaliação ambiental do parque, além das escutas de propostas para o projeto. O projeto ainda organizou visitas guiadas ao espaço, elaborou um site dedicado ao projeto, perfis em redes sociais e newsletters para promover e solicitar feedbacks e sugestões, assim como a escolha do nome por meio de votação popular.</p>
			<p>O governo municipal de Toronto manteve a propriedade do terreno em questão, assim como de sua infraestrutura instalada durante o processo. The Bentway Conservancy e o município assinaram um acordo de uso do solo, garantindo à primeira o uso da área construída pelo período de vinte e um anos. </p>
			<p>A programação, operação e manutenção são de responsabilidade conjunta entre The Bentway Conservancy (organização sem fins lucrativos fundada em 2017 para este fim) e Fort York National Historic Site (forte detentor do terreno sobre o qual o parque foi construído), ainda que a primeira detenha foco maior nas atividades de programação e arrecadação de recursos e a segunda sobre o museu já anteriormente instalado. The Bentway Conservancy é responsável por definir uma programação de eventos, atividades e oportunidades durante todo o ano para residentes, membros da comunidade e visitantes. A mesma trabalha em parceria com o governo de Toronto, outras organizações semelhantes, organizações de comunidades adjacentes e outros stakeholders da cidade. Sua estrutura organizacional está disposta em um Comitê Consultivo Comunitário, Comitê Consultivo de Artes, Conselho Administrativo (com presença de dois membros do conselho da cidade), uma equipe formada de diretores e coordenadores setoriais e um CEO. </p>
			<p>Durante o período de planejamento, duas consultoras (HR&A Advisors, Inc. e Park People) realizaram um estudo de mensuração do custo de operação e recomendações sobre estratégia de governança e financiamento sustentável do espaço. O estudo, entregue em junho de 2016, concluiu que os custos de operação para a fase 1 do projeto iria variar anualmente entre 3,2 e 4,5 milhões de dólares canadenses durante os primeiros anos. O estudo sugeriu que cerca de 2,0 à 3,1 milhões fossem financiados com dinheiro público, já que em seus primeiros anos as receitas não deveriam alcançar seu total potencial. Mesmo em seu máximo potencial de receitas, o parque ainda não alcançaria a sustentabilidade econômica sem aporte financeiro, seja público ou privado.</p>
			<p>Estratégias para alcançar o equilíbrio de receitas e despesas foram sugeridas no estudo. Na primeira estratégia, ocorre um repasse fixo e regular, provavelmente da cidade de Toronto, mas potencialmente dos governos estaduais ou federais para a organização responsável. A realocação dos fundos doados pela Matthews Foundation também foi sugerida para resolver a lacuna de financiamento, na qual dinheiro público seria investido na implementação e a doação seria destinada para a manutenção. Nenhum relatório financeiro executado foi encontrado em pesquisa na internet.</p>

			<h3>The 606</h3>
			<p>O parque “The 606” é construído sobre uma antiga linha de trem e inclui seis pequenos parques adjacentes. A linha elevada “Bloomingdale Line” serviu por quase um século para o escoamento de produtos de portos ferroviários para o rio Chicago. Após o boom industrial da cidade, o tráfego sobre a linha reduziu e na década de 1990 cessou-se por completo. O espaço então foi ocupado naturalmente por árvores, plantas e animais.</p>
			<p>Ainda na década de 1990 surgiu a primeira recomendação para alterar a sua função, contida no Plano de Bicicletas da Cidade. Depois disso ainda apareceu em um plano de espaço aberto da cidade e outros planos de qualidade de vida de dois distritos. Aprovado em 2004, o Plano de Espaço Aberto do distrito se propôs a investigar oportunidades recreacionais e de espaço aberto ao longo da linha. O plano sugeriu a criação de um parque linear elevado que incluísse uma trilha, áreas passivas e espaços recreativos em suas vias de acesso, servindo como via de deslocamento e contribuindo para a melhoria da estética da área. Por fim, foram sugeridos uma avaliação de impacto ambiental e outra sobre a integridade dos 37 viadutos sobre os quais a linha está construída; identificação de fontes de financiamento de investimentos e custos.</p>
			
			<!-- Figura 62 -->
			<Imagem :dados="{
				tipo:'coluna',
				url: src('arquivos/parque-minhocao/img/fig62.jpg'),
				caption: 'Bloomingdale Line abandonada',
				fonte: 'Untapped Cities'
			}"></Imagem>
			<!--/ Figura 62 -->

			<p>Em 2003, surge a organização sem fins lucrativos Friends of the Bloomingdale Trail, participante do processo de planejamento e implementação do projeto. Sua missão é representar os interesses da comunidade no projeto, é parte do conselho consultivo do The 606. </p>
			<p>Em 2010, a Trust for Public Land, uma organização nacional sem fins lucrativos com a missão de criar parques e preservar espaços abertos, assinou um contrato com o Chicago Park District para se tornar o principal parceiro privado do projeto. A TPL foi encarregada de liderar a angariação de fundos; conduzir o diálogo com a comunidade; e adquirir terras em nome da cidade. Entre 2011 e 2014 a TPL liderou processo de envolvimento da comunidade, incluindo atividades para elaborar um plano final para a trilha em 2013.</p>
			<p>O contrato de licitação foi assinado em 2013 para construção do parque foi de 53,7 milhões de dólares. O contrato incluiu a reabilitação de viadutos e muros de contenção, a remoção dos trilhos, assim como a pavimentação da trilha. O projeto começou em agosto de 2013 e sua primeira fase foi inaugurada em 6 de junho de 2015. Naquela época, a Bloomingdale Trail e quatro dos parques conectados estavam prontos. Dois parques adicionais, mais integração artística e paisagismo foram finalizados no ano seguinte.</p>

			<!-- Figura 63 -->
			<Imagem :dados="{
				tipo:'coluna',
				url: src('arquivos/parque-minhocao/img/fig63.jpg'),
				caption: 'Mapa do The 606',
				fonte: 'The 606'
			}"></Imagem>
			<!--/ Figura 63 -->

			<p>The 606 é uma parceria público-privada entre a cidade de Chicago, Chicago Park District (órgão municipal gestor de parques) e o The Trust for Public Land. A estimativa de custo total é de US$ 95 milhões. A maior parte do parque, US$ 50 milhões, foi financiado pelo de programa federal de Mitigação de Congestionamento e Qualidade do Ar (CMAQ). A cidade de Chicago e o condado de Cook disponibilizaram US$ 6 milhões, e quase US$ 40 milhões são provenientes de arrecadação de fundos privados. </p>
			<p>Após o fechamento da linha férrea o uso do solo da região alterou-se. Hoje, o parque linear está inserido em uma região de baixa densidade residencial que carecia de áreas verdes e apresenta valorização do valor terreno. Sua extensão de 4,3 km percorre a fronteiras de quatro distritos de Chicago que apresentam diferentes perfis sociodemográficos.</p>
			<p>Os distritos de Wicker Park e Bucktown possuem população mais branca e com maior renda média comparados com Logan Square e Humboldt. Os valores de venda de novos imóveis nos distritos cresceram no período de 2012 à 2016 e atingiram seu ponto mais alto desde 2000 após a abertura do parque. Especialmente nos distritos onde a população possui renda menor os aumentos foram maiores.</p>
			<p>O perfil socioeconômico dos moradores também alterou no período que vai do planejamento à inauguração do parque. O quadro abaixo mostra a essa mudança, no período que vai de 2010 à 2016, em territórios próximos ao parque comparados com o resto da cidade, utilizando renda média, escolaridade, porcentagem de moradores brancos não hispânicos e valor médio de aluguel.</p>
			<p>A gestão do parque é feita pela The Trust for Public Land em nome da Chicago Park District. A organização atua como o principal parceiro privado, gerenciando o envolvimento com a comunidade, captação de recursos, planejamento de longo prazo, comunicações e outros aspectos cruciais do projeto. </p>
			<p>Instalado a 5,5 metros de altura, com 17 rampas e 12 pontos de acesso, o parque caracteriza-se por ser um local de passagem e não de destino. O parque opera diariamente das 6 am às 11 pm e tem entrada gratuita. Sua largura varia de 6 à 9 metros e comporta jardins e uma trilha de 3 metros de largura dividido em duas faixas ocupadas por ciclistas e pedestres. A infraestrutura conta com bancos, postes de iluminação e cinco miniparques no nível da rua que servem de entrada ao elevado e compensam a falta de espaço sobre ele. Ainda, há exposições de arte permanentes e temporárias que são escolhidas via convites, parcerias e chamamentos organizados pela The Trust for Public Land, Chicago Park District e Chicago Department of Cultural Affairs and Special Events.</p>
			
			<!-- Figura 65 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig65.jpg'),
				caption: 'The 606',
				fonte: 'Curbed Chicago'
			}"></Imagem>
			<!--/ Figura 65 -->

			<h3>Seoullo 7017</h3>
			<p>O Seoullo 7017 surge da ideia de transformar seu entorno em uma atração turística da cidade, conectando espaços históricos e culturais próximos para impulsionar a economia local. O projeto de renovação do elevado foi escolhido via uma competição de design em 2015 e foi estimado em 40 milhões de dólares, financiados pelo Governo Metropolitano de Seoul.</p>
			<p>O parque é fruto da revitalização do Elevado Estação Seoul, que serviu para conectar dois distritos separados por trilhos de trem. Pronto em 1970, o elevado apresentou problemas estruturais com quinze anos de idade e passou por diversas reparações. Em 2006, estudos apontaram preocupações sobre sua integridade estrutural e nos anos seguintes foram elaborados planos para sua demolição e a construção de um substitutivo.</p>

			<!-- Figura 66 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig66.jpg'),
				caption: 'Elevado Estação Seoul antes das intervenções'
			}"></Imagem>
			<!--/ Figura 66 -->

			<p>Em 2014, o prefeito reeleito prometeu em campanha a transformação do elevado em um espaço para pedestres, na medida em que estudos eram feitos sobre sua viabilidade. Com o projeto incluso em seu programa de mandato, o projeto chamado “Seoul Station 7017”, foi anunciado em janeiro de 2015. No mesmo ano, profissionais/cidadãos e organizações discutiram ideias e impactos do projeto dando origem ao “plano de desenvolvimento compreensivo da região de Seoul Station”.  Então, comitês setoriais de moradores foram formados para continuar o debate e o elevado foi fechado para circulação de veículos após um evento aberto ao público.</p>
			<p>As primeiras intervenções no elevado ocorreram no início de 2016 com remoção de pilastras de sustentação, reparos e reforços na ponte, seguidos das obras de construção do parque de fato, em junho de 2016. Em abril de 2017 o parque foi aberto à população.</p>

			<!-- Figura 67 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig67.jpg'),
				caption: 'Projeto do Seoullo 7017'
			}"></Imagem>
			<!--/ Figura 67 -->

			<p>Para reorganizar o congestionamento causado pelo impedimento de circulação de carros sobre o elevado foram realizados redirecionamento de fluxo pela alteração de faixas, reprogramação de semáforos, comunicação pública e orientação de tráfego nos locais que sofreram intervenção.</p>

			<!-- Figura 68 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig68.jpg'),
				caption: 'Seoullo 7017. Planejamento da reorganização do trânsito'
			}"></Imagem>
			<!--/ Figura 68 -->

			<p>O espaço comporta mais de 24.000 plantas e árvores semeadas em grandes vasos de concreto. Sua infraestrutura é composta por câmeras de segurança, bancos, ativações que incluem centros de informação para turistas, comércios de alimentos e bebidas, uma loja oficial que comercializa produtos com a marca do parque, quiosques que trazem experiências educativas sobre horticultura, etc. O acesso é livre durante todo o dia e sem custos, exceto para a realização de eventos sob permissão do Governo Metropolitano de Seoul.</p>
			
			<!-- Figura 69 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig69.jpg'),
				caption: 'Seoullo 7017'
			}"></Imagem>
			<!--/ Figura 69 -->

			<p>O elevado possui 17 pontos de entrada (entre escadas, rampas, elevadores e escadas rolantes que também conectam à prédios em seu entorno) e banheiros em 6 locais distribuídos por sua extensão de um quilometro. Está a 17 metros de altura e sua largura varia durante todo seu comprimento, não ultrapassando dez metros.</p>
			<p>A gestão do parque está sob responsabilidade do Governo Metropolitano de Seoul. Para fins de deliberação, aconselhamento, manutenção, gestão e uso do parque, um comitê operacional foi criado. O comitê tem permissão para implementar programas para promoção da ocupação do elevado com parceria com o setor público e/ou privado, formular planos, gerir e operacionais instalações na área do parque, etc. O comitê deve ser formado por não mais de quinze membros, respeitando ao limite de 60% de composição de só um gênero. Presidente e vice-presidente devem ser eleitos pelos próprios membros, que por sua vez, são nomeados pelo prefeito por um período de dois anos.</p>
			<p>Apesar de não configurar área residencial antes mesmo da reforma do elevado, os poucos moradores que ficaram na área da Estação Seul estão se afastando. Moradores vendem ou alugam suas propriedades por causa do aumento dos preços dos imóveis e da abordagem agressiva de grandes empresas, como os hotéis, shoppings e restaurantes que podem conectar-se diretamente com o elevado. O governo aparenta não ter planos para a intervenção para a ordenação do uso da terra na região.</p>
			<p>Até 2017, aproximadamente 7,4 milhões de pessoas haviam transitado pelo local. Os visitantes costumavam passar o tempo passeando, admirando a vegetação e a vista da cidade. No entanto, muitas pessoas não visitam as comunidades ao redor do Seoullo 7017, permanecendo apenas sobre o elevado.</p>
			
			<!-- Figura 70 -->
			<Imagem :dados="{
				tipo:'default',
				url: src('arquivos/parque-minhocao/img/fig70.jpg'),
				caption: 'Seoullo 7017'
			}"></Imagem>
			<!--/ Figura 70 -->

			<p>Além destes exemplos de requalificação de estruturas elevadas, exemplos de aproveitamento de estruturas fabris (Parque Fundidora, no México), prisionais (Parque da Juventude), entre outros também podem ser uma referência que subsidie os estudos de projeto do Parque Minhocão.</p>
			<Comments :attr="{id:13, context:'Anexo B – Análise de experiências semelhantes (estudo preliminar)'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Anexo C – Caracterização Demográfica do Entorno do Minhocão</h2>
			<ul class="links">
				<li>
					<a :href="src('arquivos/parque-minhocao/geoinfo_caracterizacao-demografica-minhocao.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Caracterização Demográfica do Entorno do Minhocão</div>
						<span>1,73 Mb</span>
					</a>
				</li>
			</ul>
			<Comments :attr="{id:14, context:'Caracterização Demográfica do Entorno do Minhocão'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Parte 2 – Programa de Interesse Público do PIU Parque Minhocão</h2>

			<section>
				<h3 class="titulo" indent="2">Princípios e premissas básicas</h3>
				<p>A decisão da Prefeitura de São Paulo transformar gradativamente  o Elevado João Goulart no Parque Municipal Minhocão, está amparada no contexto de planejamento e na legislação vigente, identificados no item 3, nos elementos arrolados na Parte 1, e nos seguintes princípios orientadores:</p>
				<ul>
					<li>Qualificação e integração dos espaços públicos do entorno do elevado e ampliação das atividades de lazer, cultura, comércio e serviços, estimulando a criação de espaços de convivência e a melhoria da infraestrutura urbana, com sustentabilidade socioambiental e redução dos níveis de incomodidade;</li>
					<li>Promoção da diversidade de usos e da coexistência com as dinâmicas já consolidadas, buscando a integração das políticas setoriais, a inclusão e o atendimento socioassistencial de populações vulneráveis, e a construção de espaços de participação dos atores sociais e empresariais da cidade na gestão do parque e;</li>
					<li>Implantação dos projetos de forma gradual, utilizando o efeito demonstrativo das intervenções para ativação e suporte à permanência nos espaços públicos, levando em consideração impactos relacionados à mudança dos fluxos de mobilidade urbana e às dinâmicas de valorização imobiliária.</li>
				</ul>
				<p>Esses princípios podem ser desdobrados em algumas premissas básicas, que devem orientar o planejamento, a implantação e a operação do Parque do Minhocão:</p>
				<ul>
					<li>O elevado deve ser desativado para o tráfego de veículos de forma parcial ou total, respeitando o que determina o Art. 4° da Lei 16.833/2018;</li>
					<li>A segurança estrutural e a acessibilidade devem ser garantidas, independente das características do projeto;</li>
					<li>Impactos da desativação nos fluxos de mobilidade devem ser estudados e mitigados com obras acessórias e outras ações de organização dos fluxos de trânsito e alteração de rotas;</li>
					<li>O Parque deve ser ativado de forma gradual, com estratégias de curto, médio e longo prazo, levando-se em consideração os espaços públicos associados ao Elevado, na parte de baixo e no entorno, e os impactos previstos de valorização imobiliária;</li>
					<li>Parcerias com o setor privado e a sociedade civil devem ser estimuladas na implantação e gestão do parque;</li>
					<li>O Parque deve ser um espaço de integração de várias políticas públicas, conjugando equipamentos públicos de lazer e convivência com segurança, cultura, educação urbana e ambiental, abordagem socioassistencial e desenvolvimento local; </li>
					<li>A participação social na implantação e gestão do Parque deve ser garantida.</li>
				</ul>
				<p>A decisão de implantar, de forma gradual, o Parque Municipal Minhocão, com progressivo aumento da restrição do tráfego de veículos no Elevado Presidente João Goulart, está amparada no Art. 375 do Plano Diretor Estratégico, na promulgação da Lei 16.833/2018, e nos seguintes elementos de análise:</p>
				<ul>
					<li>Altos custos e dificuldades logísticas da alternativa de desmontagem/demolição total do Elevado;</li>
					<li>Elevados índices de incomodidade urbana (poluição ambiental e sonora) resultantes da circulação de veículos no tabuleiro do Elevado;</li>
					<li>Oportunidade de mitigação dos índices de incomodidade urbana (poluição ambiental e sonora) resultantes da circulação de veículos nas áreas públicas abaixo do Elevado, a partir de projetos de intervenção que levem em consideração a redução da carga estrutural no tabuleiro do viaduto e permitam melhorias estruturais que impactem as condições de iluminação, aeração e ventilação das vias;</li>
					<li>Oportunidade para qualificação e ativação de um espaço para convivência, lazer, cultura e esporte, em articulação com projetos setoriais para melhoria da situação de manutenção, segurança e assistência e desenvolvimento social nas áreas públicas abaixo e nas proximidades do Elevado; </li>
					<li>Projeção de impactos de mobilidade urbana passíveis de mitigação para a alternativa de restrição gradual de tráfego de veículos;</li>
					<li>Uso atual do Elevado como parque já consolidado em horários e dias específicos e;</li>
					<li>Possibilidade de integração do Parque Municipal do Minhocão com as estratégias de médio e longo prazo a serem definidas pelo PIU Setor Central, em andamento na SP Urbanismo, que contém em seu perímetro de intervenção o Elevado João Goulart.</li>
				</ul>
				<Comments :attr="{id:15, context:'Princípios e premissas básicas'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">Eixos estratégicos de intervenção</h3>
				<p>A organização das intervenções para implantação do Parque do Minhocão devem se dar a partir dos seguintes eixos estratégicos:</p>
				<ol class="decimais">
					<li><b>Eixo Institucional:</b> PIU Parque Municipal do Minhocão, no contexto do PIU Setor Central;</li>
					<li><b>Eixo Segurança e Mobilidade:</b> ações relativas à garantia da segurança estrutural do viaduto, acessibilidade, obras complementares e outras ações para redução dos impactos na mobilidade urbana;</li>
					<li><b>Eixo Ativação dos Espaços Públicos:</b> ações relativas à organização dos espaços, paisagismo e implantação de mobiliário urbano, iluminação, segurança, abordagem socioassistencial e programação cultural e de eventos no tabuleiro e nos espaços públicos abaixo e no entorno do Elevado.</li>
				</ol>

				<h4>Eixo Institucional</h4>
				<p>Os trabalhos dedicados ao PIU do Parque Minhocão devem decorrer, em termos de planejamento, das diretrizes e parâmetros urbanísticos definidos no PIU Setor Central, de maior abrangência territorial, lançando um olhar mais dedicado à ponderação sobre este espaço urbano e de proposição de soluções estruturantes, de maneira que seus resultados deverão reforçar a relação entre os projetos de cunho geral (PIU do Setor Central) e específico (PIU do Parque Minhocão), a fim de garantir-se o desenvolvimento urbano harmonioso para a região central de São Paulo.</p>
				<p>Como PIU específico, o PIU Parque Minhocão deverá abordar tanto as medidas e estudos relacionados ao processo gradual de desativação do Elevado quanto as estratégias de implantação deste equipamentos e os impactos urbanísticos e socioeconômicos possivelmente gerados com a intervenção. Além disso, serão exploradas as possibilidades de uso, sempre por meio da pactuação dos conflitos existentes e do interesse público pertinente ao projeto, devendo ser promovida a articulação dos espaços públicos existentes e projetados.</p>

				<h4>Eixo Segurança e Mobilidade</h4>
				<h5>Intervenções de segurança, acessibilidade e conforto</h5>
				<p>Em atendimento às determinações acordadas com o Ministério Público do Estado de São Paulo e como fase preparatória para implantação do Parque do Minhocão, está em desenvolvimento o projeto de adequação do Elevado para proporcionar o correto compartilhamento do uso entre os veículos e o lazer da população aos finais de semana e feriados.</p>
				<p>O projeto compreende a implantação de dispositivos de segurança e acessibilidade, tais como gradil de proteção aos usuários nas laterais e estruturas de acessibilidade ao longo de todo Elevado. As estruturas de acesso serão compostas por diferentes tipologias de escadas metálicas com e sem elevadores. Esses dispositivos servirão também, no futuro, para prover de acessibilidade e segurança ao Parque a ser implantado.</p>
				<p>As estruturas de acesso propostas ao longo dos 2700 metros de extensão do Elevado conectarão pontos de interesse e de afluxo de pessoas. Rua General Jardim, Largo do Arouche, Praça Marechal Deodoro entre outros, caracterizam bem esta integração. A estratégia de localização dos acessos será a de otimizar e qualificar os espaços públicos onde estão localizados. De um lado trazendo uso e fluxo de pessoas para as diversas praças, canteiros e calçadas e de outro integrando enquanto espaço qualificado com o Parque do Minhocão.</p>
				<p>Dessa forma, as praças e calçadas do térreo, baixio ou entorno do elevado estarão também ativadas com a implantação dos equipamentos de acesso e segurança. Cada acesso, escada com ou sem elevador, será estrategicamente localizado para integrar o térreo ao tabuleiro, desde uma escada localizada em área remanescente de desapropriação na Rua General Jardim até as localizadas em praças públicas como a do Largo Santa Cecilia, Arouche ou Marechal Deodoro.</p>

				<!-- Galeria 72, 71 -->
				<Galeria :gallery_attrs="galeria71_72"></Galeria>
				<!-- Galeria/ 72, 71 -->

				<!-- Figura 73 -->
				<Imagem :dados="{
					tipo:'coluna',
					url: src('arquivos/parque-minhocao/img/fig73.gif'),
					caption: 'Simulação de gradil de proteção'
				}"></Imagem>
				<!--/ Figura 73 -->

				<!-- Figura 74 -->
				<Imagem :dados="{
					tipo:'default',
					url: src('arquivos/parque-minhocao/img/fig74.gif'),
					caption: 'Simulação de gradil de proteção'
				}"></Imagem>
				<!--/ Figura 74 -->

				<h5>PIU Parque Minhocão - Impactos no trânsito e medidas de mitigação</h5>
				<p>O Elevado Presidente João Goulart, mais conhecido como Minhocão, e originalmente denominado por Elevado Presidente Costa e Silva, foi construído a partir de 1969 e inaugurado em 1971. Seu traçado consiste em um percurso de 2.700 metros que liga a região da Praça Franklin Roosevelt, no centro da cidade, ao Largo Padre Péricles, em Perdizes.</p>
				<p>Sua estrutura foi concebida para aliviar o grande volume de tráfego que tinha interesse em atravessar a cidade de Leste a Oeste sem a necessidade de parar em cruzamentos semaforizados. Ele é classificado como uma via expressa segundo a Portaria DSV n° 18/2019.</p>
				<p>O Minhocão foi concebido com duas pistas de tráfego e cada uma delas com duas faixas de tráfego por sentido com largura aproximada de 3,3m cada faixa. As pistas estão separadas por segregadores físicos tipo “New Jersey” com largura de 1,6m. Não existe calçada ou passeio destinado aos pedestres ao longo de toda a sua extensão. A iluminação pública existente é do tipo “Pétalas” em Poste de Iluminação típicas da época da sua implantação com distancias variadas entre elas.</p>
				<p>Os acessos no sentido Centro/Bairro são pela ligação Leste/Oeste junto da Praça Roosevelt, na R. Augusta x Martinho Prado e na confluência com a R. Helvetia. No sentido Bairro/Centro os acessos são junto ao Largo Padre Péricles e na confluência com a R. Albuquerque Lins/Pça Marechal Deodoro. Possui duas saídas no sentido Centro, sendo uma no Largo de Santa Cecília e outra em direção à R. da Consolação. No sentido Bairro a saída é em direção à R. Ana Cintra/Av. São João.</p>
				<p>Para intervenções viárias de porte como é o caso do Parque do Minhocão, a CET desenvolve estudos de simulações de tráfego realizadas através do software EMME - “Equilibre Multimodal, Multimodal Equilibrium” que é uma ferramenta para planejamento de transportes urbanos. O EMME utiliza procedimentos flexíveis, é difundido mundialmente e utilizado em empresas de planejamento em todo o Brasil.</p>
				<p>A modelagem é uma ferramenta de previsão que visa reproduzir comportamentos observados na realidade através de uma rede digitalizada e do conhecimento da demanda. Dessa forma, é possível testar o impacto do desenvolvimento da rede num horizonte futuro, tomando em conta a evolução da composição da demanda.</p>
				<p>Um aspecto essencial é a utilização e atualização do banco de dados que apoia as análises quantitativas das mudanças contempladas. O banco (“emmebank”) é uma representação da infraestrutura de transportes, das atividades econômicas e das características socioeconômicas da população na área urbana estudada. Os dados que correspondem à imagem da área são representados como cenários de situações já consolidadas ou propostas.</p>
				<p>A rede digitalizada, utilizada pela CET, abrange o sistema viário principal da região metropolitana de São Paulo e a demanda é extraída da Pesquisa Origem/Destino 2007 aplicada pelo Metrô.</p>
				<p>A aferição da rede base, que representa a situação existente para uma hora, é através de um processo de ajuste interativo dos parâmetros dos links e comparação da demanda alocada em cada link com dados reais pesquisados em campo (contagens veiculares classificadas e pesquisas de velocidades).</p>
				<p>As medições são feitas através da extensa gama de variáveis de saída (tabelas e mapas) que o EMME oferece e são os resultados da simulação de uma situação real ou futura. As variáveis de saída expressam em termos de tempo ou quantidade de veículos a eficiência de uma intervenção no sistema de transportes de uma área de estudos.</p>
				<p>Cada um dos estudos realizados leva em conta diversos cenários considerando obras de ampliação da rede viária estrutural, tais como as previstas no PDE - Plano Diretor Estratégico, a rede de transportes, como os corredores de ônibus e linhas de metrô, bem como adequações viárias regionais, como alterações de circulação e pequenas obras.</p>
				<p>As análises são realizadas através da comparação dos resultados simulados, da proposição de alternativas para mitigação dos impactos na mobilidade da cidade e de novos cenários de simulação até que se conclua sobre a viabilidade da proposição.</p>
				<p>A CET vem considerando a demolição total do Minhocão e realizando simulações desde 2010, de forma a obter condições de analisar os impactos e verificar como as viagens se distribuem. Nesses trabalhos, foram consideradas obras previstas na Operação Urbana Água Branca (OUCAB), como o prolongamento da Av. Auro Soares de Moura Andrade e a ampliação das pistas da Av. Gal. Olímpio da Silveira.</p>
				<p>Os volumes veiculares do Elevado nos picos da manhã são da ordem de 3.900 no sentido Oeste-Leste e 3.300 no sentido Leste-Oeste, enquanto na Av. São João, é da ordem de 700 Veq. no sentido Centro e 1.000 Veq. no sentido Bairro. Nos picos da tarde são de 2.900 e 2.100, respectivamente, no Elevado e, na Av. São João, 600 e 1.400.</p>
				<p>Somando-se os volumes da parte superior do Elevado com os volumes da Avenida, conforme indicado na figura abaixo, temos cerca de 4.600 Veq/h. A capacidade máxima da Av. São João é de 2.400 Veq/h (2 faixas) e da Av. Amaral Gurgel é de 3.600 Veq/h (3 faixas).</p>
				<p>Por dia, circulam sobre o Elevado João Goulart cerca de 78 mil veículos, que significam 10 mil viagens/hora.</p>
				
				<!-- Figura 75 -->
				<Imagem :dados="{
					tipo:'default',
					url: src('arquivos/parque-minhocao/img/fig75.jpg'),
					caption: 'Volumes veiculares',
					fonte: 'CET, 2019'
				}"></Imagem>
				<!--/ Figura 75 -->

				<p>A proposta de implantação da primeira fase do Parque Minhocão se dá no trecho entre a Praça Franklin Roosevelt e o Largo do Arouche (ver item 6.1 adiante), onde está concentrado o maior número de viagens, conforme indicado nas simulações e contagens realizadas no diagnóstico rápido.</p>
				<p>Isso ocorre porque o Elevado nesse trecho é a confluência entre os eixos principais da cidade ligando a Av. Francisco Matarazzo e a Av. Pacaembu com a Rótula e Contra Rótula e os eixos Consolação e Ligação Leste-Oeste.</p>

				<!-- Figura 76 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: src('arquivos/parque-minhocao/img/fig76.gif'),
					titulo: 'O Select Link representa a distribuição das viagens do Elevado na cidade',
					legenda: [
						{ fundo: '#00ffff', espessura: '0', pontilhado: false, descricao: 'Viagens sobre o Elevado' },
						{ fundo: 'red', espessura: '0', pontilhado: false, descricao: 'Viagens embaixo do Elevado' }
					]
				}"></Imagem>
				<!--/ Figura 76 -->

				<p>De acordo com os estudos de simulação realizados, bem como análises da rede viária da cidade, estimamos que a implantação da primeira fase do Parque Minhocão implicará em impactos no trânsito na Rótula Central, no eixo Paulista, no eixo Sumaré/Brasil e nas Marginais Pinheiros e Tietê, conforme pode-se verificar na figura abaixo.</p>
				<p>Lembramos que as análises da simulação são referentes à rede viária no pico da manhã, sendo que no pico da tarde estimamos impactos em toda a região central, em especial na R. da Consolação e região da Vila Buarque, Martins Fontes e Av. 9 de Julho.</p>
				
				<!-- Figura 77 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: src('arquivos/parque-minhocao/img/fig77.gif'),
					titulo: 'Comparação da distribuição de viagens com e sem Elevado',
					legenda: [
						{ fundo: 'blue', espessura: '0', pontilhado: false, descricao: 'Viagens sobre o Elevado' },
						{ fundo: 'red', espessura: '0', pontilhado: false, descricao: 'Viagens embaixo do Elevado' }
					]
				}"></Imagem>
				<!--/ Figura 77 -->

				<p>É importante destacar que os resultados das simulações são sempre apresentados com padrão de viagens equilibrado tempos após as interdições, não sendo possível demonstrar a situação imediata à desativação do primeiro trecho do Elevado, mas após o processo de acomodação e equilíbrio.</p>
				<p>Em seguida, cabe detalhar a metodologia utilizada para a simulação realizada em fevereiro de 2019.</p>
				<p>Inicialmente foram coletados parâmetros de desempenho relativos a áreas pré-definidas, e posteriormente em vias elencadas como principais.</p>
				<p>Para a primeira situação, calculou-se o tempo médio gasto pelos usuários de automóveis em circulação a partir das seguintes áreas de analise:</p>
				<p><b>1</b> – Malha viária da <b>Área de Influência</b>: considera as vias com maiores diferenças de volumes entre a situação atual e com a situação resultante da desativação do primeiro trecho do Elevado (avaliação visual). Os resultados indicam como área de influência, entre outras, a Avenida Marques de São Vicente, Avenida Rudge, Avenida Rio Branco, Avenida Francisco Matarazzo, Avenida Tiradentes  e Avenida Pacaembu, conforme destaque em verde no desenho abaixo.</p>
				
				<!-- Figura 78 -->
				<Imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/parque-minhocao/img/fig78.jpg'),
					caption: 'Área de Influência resultante da desativação do primeiro trecho do Elevado'
				}"></Imagem>
				<!--/ Figura 78 -->

				<p><b>2</b> – Malha viária do <b>Minianel Viário</b>: considera as vias internas ao Minianel Viário, inclusive o seu perímetro, formado pelas Marginais Tietê e Pinheiros, Avenida dos Bandeirantes, Avenida Tancredo Neves, Rua das Juntas Provisórias, Avenida Professor Luis Inácio de Anhaia Melo e Avenida Salim Farah Maluf, conforme destacado em vermelho na imagem abaixo.</p>
				
				<!-- Figura 79 -->
				<Imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/parque-minhocao/img/fig79.jpg'),
					caption: 'Perímetro da área do Minianel Viário',
					fonte: 'http://cetsp.com.br/consultas/rodizio-municipal/como-funciona.aspx'
				}"></Imagem>
				<!--/ Figura 79 -->

				<p><b>3</b> – Malha viária do <b>Município de São Paulo</b>: considera todas as vias internas ao Município.</p>
				<p>As tabelas abaixo apresentam em números absolutos e em porcentagem os valores obtidos com a simulação, consideram as áreas de análise descritas anteriormente para projetar três situações distintas: (I) Situação atual, (II) Situação proposta – Sem Elevado, e (III) Situação proposta – Sem Elevado e com ações de mitigação.</p>

				<!-- Tabela 80 -->
				<Tabela :dados="tabela_80"></Tabela>
				<!--/ Tabela 80 -->

				<!-- Tabela 80a -->
				<Tabela :dados="tabela_80a"></Tabela>
				<!--/ Tabela 80a -->

				<p>Observa-se assim que no <b>município</b> o impacto é considerado muito baixo. A velocidade média diminui de <b>21,0 km/h</b> para <b>20,9 km/h</b> antes da mitigação no pico da manhã (<b>0,16%</b>), e o tempo médio gasto pelos usuários de automóveis aumenta de <b>25,69 minutos</b> para <b>25,75 minutos</b> no pico da manhã (<b>0,23%</b>).</p>
				<p>Já no <b>centro expandido</b> o impacto é considerado baixo. A velocidade média diminui de <b>26,8 km/h</b> para <b>26,6 km/h</b> antes da mitigação no pico da manhã (<b>0,48%</b>), e o tempo médio gasto pelos usuários de automóveis aumenta de <b>15,32 minutos</b> para <b>15,41 minutos</b> no pico da manhã (0,59%).</p>
				<p>Porém, na <b>área de influência</b> o impacto é considerado significativo. A velocidade média diminui de <b>22,7 km/h</b> para <b>20,9 km/h</b> antes da mitigação no pico da manhã (<b>8%</b>), e o tempo médio gasto pelos usuários de automóveis aumenta de <b>4,72 minutos</b> para <b>4,83 minutos</b> no pico da manhã (2%)</p>
				<p>Dessa forma, entendemos que será necessária a adequação do sistema viário existente para mitigar os impactos dessa proposta.</p>
				<p>Em uma análise preliminar, recomendamos a implantação de adequações viárias com obras e sinalização (Fase1), antes da desativação do Elevado, conforme segue:</p>
				<ol class="decimais">
					<li>Alterar circulação de vias da Vila Buarque (alternativas em estudo, aguardando resultados da simulação);</li>
					<li>Fechar/desativar a alça de acesso do Elevado para a Rua da Consolação;</li>
					<li>Desativar a conversão à esquerda da Rua da Consolação para acesso à Avenida Amaral Gurgel;</li>
					<li>Adequar a sinalização de orientação para melhorar a nova distribuição de fluxos;</li>
					<li>Adequar a sinalização de regulamentação de estacionamento em toda a Área de Influência;</li>
					<li>Manter em rede e centralizados os semáforos da Rótula, Contra-Rótula, Paulista, Pacaembu, Brasil e Sumaré e;</li>
					<li>Viabilizar pequenas obras de adequação geométrica na Área de Influência</li>
				</ol>
				<p>Para a Fase 2, indicamos as seguintes necessidades:</p>
				<ol class="decimais" start="8">
					<li>Adequar o acesso da Ligação Leste-Oeste para a Avenida Amaral Gurgel em ambos os sentidos, ajustando as pistas para 3 faixas de rolamento;</li>
					<li>Estudar possibilidade de rampa de descida do Elevado no sentido Leste após o cruzamento da Rua Jaguaribe;</li>
					<li>Desativar cruzamentos semaforizados sob a área do Parque (Rua Santa Isabel, Rua Jaguaribe e outras – em estudo);</li>
					<li>Fechar a rampa de acesso próxima à Praça Marechal Deodoro para veículos;</li>
					<li>Executar melhoria de calçadas e circulação de pedestres na Avenida Amaral Gurgel, em especial nas áreas de acesso ao Parque;</li>
					<li>Alargar a pista da Avenida General Olímpio da Silveira entre Rua Albuquerque Lins e Avenida Angélica e;</li>
					<li>Melhorar a rampa de subida ao Elevado sentido Oeste com adequação de geometria.</li>
				</ol>
				<p>Recomendamos ainda que sejam realizadas melhorias de calçada, pavimentação/recapeamento e drenagem nas seguintes vias:</p>
				<ul>
					<li>Av. Gal. Olímpio da Silveira (toda extensão);</li>
					<li>R. das Palmeiras (toda extensão).</li>
				</ul>
				<p>Em função das condições de saturação do sistema viário e visando garantir a mobilidade do transporte coletivo, pedestres e ciclistas, enfatizamos a importância das obras estruturais previstas no Plano Diretor Estratégico (PDE), em especial a construção do Apoio Sul da Marginal Tietê e da Linha 6 Laranja do Metrô.</p>
				<p>O diagnóstico de impactos no trânsito e a proposição de medidas de mitigação serão detalhados conforme cronograma apresentado ao final deste documento. Dados adicionais devem ser trabalhados para refinar as análises aqui presentes, incluindo projeções com base em cruzamento de dados de Big Data relativos aos registros de equipamentos de fiscalização, GPS de ônibus e bicicletas compartilhadas, bilhetagem, informações de aplicativos como Waze/Google e outros. A possibilidade de realização de fechamentos de testes também será considerada.</p>
				
				<h4>Eixo Ativação dos Espaços Públicos</h4>
				<h5>Parque do Minhocão – Primeiro trecho proposto</h5>
				<p>Recomenda-se a implantação do primeiro trecho desativado para veículos do Parque do Minhocão nos 900m entre a Praça Roosevelt e o Largo do Arouche.</p>
				<p>Esse trecho foi escolhido em razão de sua favorável conexão com outros espaços públicos de lazer – Praça Roosevelt, Parque Augusta, Largo do Arouche, Largo de Santa Cecília e Praça Marechal Deodoro. Outro aspecto favorável à sua implantação é a melhor inserção urbana deste trecho em relação ao entorno imediato – o Elevado encontra-se mais afastado das fachadas em comparação com o trecho da Avenida São João.</p>

				<!-- Figura 81 -->
				<Imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/parque-minhocao/img/fig81.jpg'),
					caption: 'Mapa da situação proposta para a Fase Praça Roosevelt – Largo do Arouche',
					fonte: 'São Paulo Urbanismo – 2019.'
				}"></Imagem>
				<!--/ Figura 81 -->

				<p>O estudo de implantação também avaliou o impacto nos fluxos de veículos e apresenta uma reestruturação: no sentido oeste-leste mantêm-se o acesso ao Elevado pelo Largo Padre Péricles, e descendo, obrigatoriamente, pela rampa da Praça do Metro Santa Cecília. A partir deste ponto o deslocamento oeste-leste seria feito ao nível do solo. Já no sentido leste-oeste o fluxo que atravessa sob a Praça Roosevelt seria mantido ao nível do solo e só poderia acessar o Elevado a partir da alça de acesso da Avenida São João.</p>
				<p>A partir do estudo de fluxo a cidade ganha a possibilidade de demolição da rampa de acesso sobre a Praça Marechal Deodoro, recuperando um histórica e valiosa área verde, como podemos observar nas simulações a seguir.</p>

				<!-- Figura 82 -->
				<Imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/parque-minhocao/img/fig82.jpg'),
					caption: 'Situação atual da Praça Marechal Deodoro. Rampa de acesso ao Elevado',
					fonte: 'São Paulo Urbanismo – 2019.'
				}"></Imagem>
				<!--/ Figura 82 -->

				<!-- Figura 83 -->
				<Imagem :dados="{
					tipo: 'coluna',
					url: src('arquivos/parque-minhocao/img/fig83.jpg'),
					caption: 'Situação atual da Praça Marechal Deodoro. Baixio da rampa de acesso ao Elevado',
					fonte: 'São Paulo Urbanismo – 2019.'
				}"></Imagem>
				<!--/ Figura 83 -->

				<!-- Figura 84 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: src('arquivos/parque-minhocao/img/fig84.jpg'),
					titulo: 'Recuperação da Praça Marechal Deodoro',
					fonte: 'São Paulo Urbanismo – 2019.'
				}"></Imagem>
				<!--/ Figura 84 -->

				<!-- Figura 85 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: src('arquivos/parque-minhocao/img/fig85.jpg'),
					titulo: 'Mapa da situação proposta para a Fase Praça Roosevelt – Largo do Arouche',
					fonte: 'São Paulo Urbanismo – 2019.'
				}"></Imagem>
				<!--/ Figura 85 -->

				<p>Para a implantação parcial do Parque do Minhocão no primeiro trecho, a readequação urbanística da estrutura existente teria como premissa a utilização de elementos pré-construídos que serão justapostos à infraestrutura existente. Em complementação aos elementos necessários para dotar o Parque com condições adequadas de acesso e segurança, tratados no item anterior, seriam implantados também elementos de mobiliário urbano que darão suporte à permanência, tais como:</p>
				<ul>
					<li>Bancos</li>
					<li>Mesas</li>
					<li>Decks de madeira</li>
					<li>Vasos com plantas</li>
					<li>Elementos de sombra e de atividades lúdicas</li>
				</ul>
				<p>O padrão de mobiliário a ser utilizado será compatível com o modelo de “caixa de ferramentas” já utilizado em projetos da Prefeitura; são elementos com grande potencial de ativação de espaços públicos e que permitem reorganizações periódicas desses espaços, mas com pouco impacto orçamentário-financeiro. Abaixo, alguns exemplos de modelos de mobiliário da “caixa de ferramentas” do projeto Centro Aberto.</p>

				<div class="mobiliario-centro-aberto">
					<ul>
						<li v-for="item in mobiliario_centro_aberto">
							<img :src="item.ilustracao" :alt="item.titulo" :title="item.titulo">
							<div class="nome">{{ item.titulo }}</div>
							<ul>
								<li v-for="caracteristica in item.caracteristicas">{{ caracteristica }}</li>
							</ul>
						</li>
					</ul>
					<div class="dados">
						Exemplo de mobiliário no padrão Centro Aberto. Fonte: <a href="https://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2015/07/Centro_Aberto_Pub.pdf">Centro Aberto: experiências na escala humana</a>. SMDU, PMSP.
					</div>
				</div>

				<p>Nesse sentido, as intervenções na infraestrutura física existente se limitariam, em uma primeira fase, às correções e readequações necessárias para garantir a integridade e segurança do espaço, bem como recepcionar os elementos de mobiliário urbano.</p>
				<p>Como não poderia deixar de ser, o projeto para a implantação do parque em seus 900 metros iniciais, da mesma forma que em seu estudo na totalidade, devem contemplar a parte elevada e o seu espaço inferior. Elementos de suporte à vida pública e à permanência das pessoas serão pensados e instalados nos dois níveis. O Parque é dessa forma considerado como um equipamento urbano que conta com o nível das ruas e calçadas do baixio e entorno além do tabuleiro elevado. Todos os acessos serão projetados com essa diretriz integrando os dois níveis do parque.</p>
				<p>Em uma segunda fase, serão realizadas intervenções de aberturas no tabuleiro e demolições parciais e localizadas, com o intuito de melhorar as condições de incomodidade urbana e de falta de iluminação nos baixios do Elevado. Os projetos relativos a essa fase serão elaborados após a realização de laudo estrutural que garanta a segurança e indique os locais onde há viabilidade para as intervenções de abertura/demolição.</p>
				<Comments :attr="{id:16, context:'Eixos estratégicos de intervenção'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">Contribuições setoriais para ativação e qualificação</h3>
				<p>Junto às intervenções urbanísticas previstas no âmbito do PIU Parque Minhocão, é fundamental que projetos e ações setoriais sejam viabilizados para ativação e qualificação dos espaços públicos localizados abaixo e no entorno imediato do futuro Parque Municipal do Minhocão.</p>
				<p>Este item apresenta algumas contribuições preliminares, fornecidas por diversas secretarias municipais, acerca da situação do Elevado e de seu entorno, assim como possibilidades de ações setoriais a serem consideradas pelo projeto urbanístico e na operação do parque. Algumas dessas contribuições serão desdobradas em planos detalhados pelas secretarias municipais responsáveis. Os planos previstos são os seguintes:</p>
				<ul>
					<li>Plano de Abordagem Socioassistencial;</li>
					<li>Plano de Habitação de Interesse Social</li>
					<li>Plano de Segurança Urbana;</li>
					<li>Plano de Programação Cultural e de Patrimônio;</li>
					<li>Plano de Monitoramento Ambiental.</li>
				</ul>

				<h4>Assistência e Desenvolvimento Social</h4>
				<p>Uma estratégia robusta de abordagem humanizada é fundamental para o sucesso do Parque do Minhocão, tendo em vista que a falta de um acolhimento mais eficaz das populações vulneráveis tem impactos em diversas dimensões, desde a garantia dos direitos humanos dos próprios moradores de rua até o reforço da cultura do medo na região.</p>
				<p>No perímetro que vai do Largo do Arouche até a Praça Roosevelt, já existe uma série de serviços e equipamentos de Assistência e Desenvolvimento Social. São eles:</p>
				<ul>
					<li>Centro de Referência do Idoso: serviço de referência, proteção e defesa de direitos. Atendimento individual e coletivo com estímulo da participação social.</li>
					<li>CRD: promoção de apoio e acolhida social a profissionais do sexo, homossexuais, travestis e transexuais em situações de vulnerabilidade e risco pessoal e social.</li>
					<li>Centro de Acolhida a Pessoas em Situação de Rua (2): acolhimento provisório para pernoite, com privacidade. Para adultos e grupos familiares. Garantia de proteção integral às pessoas em situação de rua, contribuindo para reinserção social.</li>
					<li>Centro de Capacitação Técnica para Adultos em Situação de Rua: cursos de formação e capacitação profissional para a população em situação de rua.</li>
					<li>Serviço Especializado de Abordagem a Adultos em Situação de Rua (2): busca ativa e abordagem nas ruas, identificando a incidência de trabalho infantil, violência, abuso e exploração sexual de crianças e adolescentes, pessoas em situação de rua e outras.</li>
					<li>CEDESP: atividades com adolescentes, jovens e adultos (a partir de 15 anos) visando investimento na formação profissional. Ampliação de repertório cultural e participação na vida pública.</li>
					<li>Centro de Acolhida às Pessoas em Situação de Rua (4): acolhimento provisório para pernoite, com privacidade. Para adultos e grupos familiares. Garantia de proteção integral às pessoas em situação de rua, contribuindo para reinserção social.</li>
					<li>Centro de Acolhida Especial para Idosos: acolhimento provisório com privacidade, para pessoas de ambos os sexos, a partir de 60 anos, sem condições de autocuidado ou retaguarda familiar, mas com autonomia para realização das atividades diárias.</li>
					<li>CTA: rápido acolhimento, servindo de apoio aos demais centros de acolhida. Com capacitações para possibilitar aos usuários obtenção de trabalho, gerando autonomia e renda.</li>
					<li>Serviço de Proteção Social às Crianças e Adolescentes Vítimas de Violência: atendimento a todos os envolvidos (vítimas, familiares e agressores) em situação de violência doméstica, abuso ou exploração sexual. Fortalecimento da autoestima, superação da situação de violação de direitos, reparação da violência.</li>
				</ul>
				<p>O mapa apresentado abaixo permite visualizar a rede socioassistencial do perímetro.</p>

				<!-- Figura 90 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: src('arquivos/parque-minhocao/img/fig90.jpg'),
					titulo: 'Abordagens segundo raio de 2,5km entre a Av São João, Rua Amaral Gurgel e Elevado Costa e Silva',
				}"></Imagem>
				<!--/ Figura 90 -->

				<p>A tabela abaixo mostra o total de abordagens socioassistenciais realizadas em um raio de 2,5 km entre a Av. São João, a Rua Amaral Gurgel e o Elevado João Goulart entre maio e outubro de 2018.</p>

				<!-- Figura 91 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: src('arquivos/parque-minhocao/img/fig91.png'),
					titulo: 'Total de abordagens na Operação Baixa Temperatura, segundo raio de 2,5km entre Av. São João, Rua Amaral Gurgel e Elevado João Goulart do Município de São Paulo, total de maio à outrubro de 2018',
					fonte: 'SMADS | Secretaria Municipal de Assistência e Desenvolvimento Social (05 a 10/2018)'
				}"></Imagem>
				<!--/ Figura 91 -->

				<p>Para melhorar a situação socioassistencial no perímetro que inclui o Elevado João Goulart, recomenda-se a implantação e reorganização de alguns serviços adicionais:</p>
				<ul>
					<li>CRAS Santa Cecília;</li>
					<li>Mudança de local do CREAS Santa Cecília; e</li>
					<li>Implantação de CCInter (Centro de Convivência Intergeracional).</li>
				</ul>

				<h4>Habitação de Interesse Social</h4>
				<p>Dentro do conjunto de ações setoriais fundamentais à implantação do Parque Municipal do Minhocão, há de se destacar a importância dos estudos e estratégias que garantam permanência à população de baixa renda nas áreas de influência do Parque, tendo em vista a provável valorização imobiliária da região e a consequente expulsão dos que mais necessitam acesso à cidade.</p>
				<p>Cabe observar de inicio o texto disposto no Plano Diretor Estratégico, Lei Municipal Nº 16.050 de 31 de julho de 2014, que dedica a IV Seção para tratar da Zona Especial de Interesse Social, de onde destaca-se:</p>
				<blockquote class="leg">
					<p>Art. 44. As Zonas Especiais de Interesse Social (ZEIS), (...), são porções do território destinadas, predominantemente, à moradia digna para a população da baixa renda por intermédio de melhorias urbanísticas, recuperação ambiental e regularização fundiária de assentamentos precários e irregulares, bem como à provisão de novas Habitações de Interesse Social - HIS e Habitações de Mercado Popular - HMP a serem dotadas de equipamentos sociais, infraestruturas, áreas verdes e comércios e serviços locais, situadas na zona urbana.</p>
					<p>(...)</p>
					<p>Art. 45 . As ZEIS classificam-se em 5 (cinco) categorias, definidas nos seguintes termos:</p>
					<p>(...)</p>
					<p>III- ZEIS 3 são áreas com ocorrência de imóveis ociosos, subutilizados, não utilizados, encortiçados ou deteriorados localizados em regiões dotadas de serviços, equipamentos e infraestruturas urbanas, boa oferta de empregos, onde haja interesse público ou privado em promover Empreendimentos de Habitação de Interesse Social;</p>
				</blockquote>
				<p>Nesse sentido, apresentamos neste item uma primeira analise sobre as áreas gravadas como Zonas Especiais de Interesse Social (ZEIS) internas ao perímetro da Macroárea de Estruturação Metropolitana - MEM, relacionada ao Parque Municipal do Minhocão. Estão descritas abaixo cinco áreas, todas localizadas no Distrito Santa Cecilia, pertencentes à Subprefeitura Sé, centro da capital; identificadas pelo número do Setor e da Quadra.</p>
				<p>
					<b>Setor 007, Quadra 020</b><br>
					Perímetro compreendido pela Avenida São João, Rua Helvétia, Rua das Palmeiras e Alameda Glete. A quadra possui características muito diversas, onde foi possível observar um empreendimento residencial novo, um estacionamento térreo descoberto e um edifício antigo vazio. Este, por sua vez, é conhecido como Edifício Lord, localizado Rua das Palmeiras Nº 58, era ocupado pelo Movimento de Moradia denominado Frente de Luta por Moradia (FLM). Este e o imóvel vizinho, um sobrado abandonado, vem sendo tratado pela Secretaria Municipal de Habitação (SEHAB) e pela Companhia Metropolitana de Habitação de São Paulo (COHAB) junto ao Programa Minha Casa Minha Vida Entidades com recursos financeiros do Fundo de Desenvolvimento Social (FDS). Atualmente os dois imóveis já estão desapropriados para reforma e construção de um anexo, para ao final, destinar as unidades habitacionais às famílias correspondentes. O lote do estacionamento apresenta potencial para provisão de habitação de interesse social.
				</p>

				<Galeria :gallery_attrs="galeria01"></Galeria>

				<p>
					<b>Setor 007, Quadra 041</b><br>
					Perímetro compreendido pela Rua Doutor Frederico Steidel, Avenida São João, Avenida Duque de Caxias e Largo do Arouche. Por estar associada à duas Avenidas importantes, a maior parte da quadra tem usos comerciais ou mistos, já na face voltada a Rua Doutor Frederico Steidel os comércios são de menor porte, onde também foi identificada uma Rua sem saída no miolo da quadra com sobrados ocupados por famílias de baixa renda. Possui um lote importante gravado como ZEIS-3 com fachada para a Avenida São João e lateral/fundos para a Rua Doutor Frederico Steidel, atualmente é ocupado por um estacionamento térreo descoberto. Além desse, existem mais dois lotes em ZEIS-3 que são ocupados por dois estacionamentos térreos fechados do tipo galpão. É uma quadra com potencial para a provisão de habitação de interesse social.
				</p>
				
				<Galeria :gallery_attrs="galeria02"></Galeria>

				<p>
					<b>Setor 007, Quadra 093</b><br>
					Perímetro compreendido pela Avenida São João, Rua Doutor Frederico Steidel, Travessa dos Desenhistas, Elevado Presidente João Goulart e Rua Ana Cintra. A quadra é pouco verticalizada e tem baixa densidade, principalmente por conta de dois grandes estacionamentos térreos, de um galpão abandonado e de uma área de lazer com quadra poliesportiva junto a primeira alça de descida do fluxo Leste-Oeste do Elevado Presidente João Goulart. De frente para a Rua Ana Cintra está localizado o Galpão do Folias, um espaço cultural que ocupa o imóvel desde o ano 2000. E, próximos à Travessa dos Desenhistas, estão alguns edifícios de uso residencial ou misto. É uma quadra com potencial para a provisão de habitação de interesse social.
				</p>
				
				<Galeria :gallery_attrs="galeria03"></Galeria>

				<p>
					<b>Setor 007, Quadra 094</b><br>
					Perímetro compreendido pela Travessa dos Desenhistas, Rua Doutor Frederico Steidel, Largo do Arouche e Elevado Presidente João Goulart. A quadra se relaciona principalmente com a Rua Doutor Frederico Steidel, tendo em vista que seu fundo está voltado para o Elevado Presidente João Goulart, que nesse trecho tem seu baixio ocupado pelo Terminal de Ônibus Amaral Gurgel. A quadra, demarcada em sua integralidade como ZEIS-3, tem características muito distintas de ocupação. Destacam-se dois edifícios de uso residencial, com comércio no térreo, de oito pavimentos cada, além de um conjunto de sobrados e um estacionamento do número 127 ao número 183. É importante apontar que a Rua Doutor Frederico Steidel tem problemas de drenagem das águas pluviais, a maioria dos imóveis tem comportas para evitar que a água das chuvas adentre suas moradas.
				</p>
				
				<Galeria :gallery_attrs="galeria04"></Galeria>

				<p>
					<b>Setor 007, Quadra 095</b><br>
					Perímetro compreendido pela primeira alça de descida no sentido Oeste-Leste do Elevado Presidente João Goulart, Elevado Presidente João Goulart (Terminal de Ônibus Amaral Gurgel), e Rua Sebastião Pereira. Possui dois edifícios residenciais de dez e onze pavimentos, ambos os térreos tem comércios e um deles tem uma igreja. Do outro lado da quadra existem comércios de mecânica, borracharia e serralheria de no máximo três pavimentos.
				</p>
				
				<Galeria :gallery_attrs="galeria05"></Galeria>

				<!-- Figura 97 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: src('arquivos/parque-minhocao/img/fig97.jpg'),
					titulo: 'Mapa de quadras e lotes gravados como ZEIS-3 internas ao perímetro da ZEM',
					fonte: 'SEHAB/DTS Centro.',
					legenda: [
						{ fundo: '#fffe00', espessura: '3', pontilhado: false, descricao: 'ZEIS 3 | Zona Especial de Interesse Social 3' },
						{ borda: '#000', espessura: '1', pontilhado: false, descricao: 'ZEM | Zona de Estruturação Metropolitana' },
						{ borda: '#ff0077', espessura: '3', pontilhado: false, descricao: 'Setor 007 Quadra 020' },
						{ borda: '#a006d8', espessura: '3', pontilhado: false, descricao: 'Setor 007 Quadra 093' },
						{ borda: '#ff7c0d', espessura: '3', pontilhado: false, descricao: 'Setor 007 Quadra 094' },
						{ borda: '#6adb0d', espessura: '3', pontilhado: false, descricao: 'Setor 007 Quadra 095' },
						{ borda: '#057df7', espessura: '3', pontilhado: false, descricao: 'Setor 007 Quadra 041' }
					]
				}">
					<template slot="extra">Observação: Números reais do lado externo a quadra.</template>
				</Imagem>
				<!-- Figura 97 -->

				<p>Também em levantamento preliminar, foi identificada a existência de cortiços e ocupações na área do perímetro da Zona Eixo de Estruturação da Transformação Metropolitana (ZEM) relacionada ao Parque Municipal do Minhocão. O levantamento detalhado da situação será realizado dentro das atividades programadas no Censo de Cortiços e Assemelhados da área Central de São Paulo, ação contratada pela Secretaria Municipal de Habitação em março de 2019.</p>

				<!-- Figura 99 -->
				<Imagem :dados="{
					tipo: 'mapa',
					url: src('arquivos/parque-minhocao/img/fig99.jpg'),
					titulo: 'Mapa de cortiços e ocupações sobre os perímetros das zonas (lei 16.402/16), destacado o perímetro da ZEM',
					fonte: 'SEHAB/DTS Centro',
					legenda: [
						{ fundo: '#c5dc61', descricao: 'AC-1' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/ac-2.gif'), descricao: 'AC-2' },
						{ fundo: '#269bee', descricao: 'VETOS' },
						{ fundo: '#5e4134', descricao: 'ZC' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zca.gif'), descricao: 'ZCa' },
						{ fundo: '#18217d', descricao: 'ZCOR-1' },
						{ fundo: '#0076c5', descricao: 'ZCOR-2' },
						{ fundo: '#6ea0cf', descricao: 'ZCOR-3' },
						{ fundo: '#368085', descricao: 'ZCORa' },
						{ fundo: '#9f6646', descricao: 'ZC-ZEIS' },
						{ fundo: '#6c2864', descricao: 'ZDE-1' },
						{ fundo: '#a26178', descricao: 'ZDE-2' },
						{ fundo: '#b89e40', descricao: 'ZEIS-1' },
						{ fundo: '#ffa237', descricao: 'ZEIS-2' },
						{ fundo: '#ffcf55', descricao: 'ZEIS-3' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zeis-4.gif'), descricao: 'ZEIS-4' },
						{ fundo: '#fff4bc', descricao: 'ZEIS-5' },
						{ fundo: '#aa412c', descricao: 'ZEM' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zemp.gif'), descricao: 'ZEMP' },
						{ fundo: '#265731', descricao: 'ZEP' },
						{ fundo: '#50aa78', descricao: 'ZEPAM' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zer-1.gif'), descricao: 'ZER-1' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zer-2.gif'), descricao: 'ZER-2' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zera.gif'), descricao: 'ZERa' },
						{ fundo: '#7d181f', descricao: 'ZEU' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zeua.gif'), descricao: 'ZEUa' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zeup.gif'), descricao: 'ZEUP' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zeupa.gif'), descricao: 'ZEUPa' },
						{ fundo: '#a0a0a0', descricao: 'ZM' },
						{ simbolo: imgSrc('arquivos/legendas/zoneamento/zma.gif'), descricao: 'ZMa' },
						{ fundo: '#797979', descricao: 'ZMIS' },
						{ fundo: '#d2d2d3', descricao: 'ZMISa' },
						{ fundo: '#c1b58c', descricao: 'ZOE' },
						{ fundo: '#38ff00', descricao: 'ZPDS' },
						{ fundo: '#64845a', descricao: 'ZPDSr' },
						{ fundo: '#46376e', descricao: 'ZPI-1' },
						{ fundo: '#a98abc', descricao: 'ZPI-2' },
						{ fundo: '#ffff30', descricao: 'ZPR' },
						{ borda: '#fd0b07', espessura: '3', pontilhado: true, descricao: 'Perímetro da Zona de Estruturação Metropolitana (ZEM)' },
						{ borda: '#000', espessura: '1', pontilhado: false, descricao: 'Cortiços e ocupações' }
					]
				}"></Imagem>
				<!-- Figura 99 -->

				<p>Diante do exposto, verifica-se que as áreas estudadas apresentam um número significativo de edificações consolidadas compostas principalmente por edifícios antigos e novos, onde habitam famílias de diversas faixas de renda e atuam comércios de diversos seguimentos. Concluí-se que para que possa tratar as diferentes características do território, visando alcançar transformações urbanísticas para as quadras destacadas em ZEIS-3, será necessário realizar um trabalho que observe as fragilidades e particularidades de cada quadra em questão.</p>
				<p>Tendo em vista os impactos sociais, econômicos e urbanos previstos com a implantação do Parque Municipal do Minhocão, e em consonância com a legislação municipal exposta acima, cabe ao município a atenção com a população de baixa renda, e a priorização da provisão de habitação de interesse social.</p>
				<p>Para tanto, recomenda-se a elaboração de um Plano de Habitação de Interesse Social especifico, que observe e estimule a aplicação das ações concebidas no âmbito da política habitacional municipal vigente, articulado ao Projeto de Intervenção Urbana do Parque do Minhocão e ao Projeto de Intervenção Urbana Setor Central da MEM. Essa ação especifica deve ser realizada pela Secretaria Municipal de Habitação em parceria com a Secretaria Municipal de Desenvolvimento Urbano e a SP Urbanismo. A parceria proposta visa potencializar a ação do Poder Público para alcançar os objetivos expostos acima, consolidado uma estratégia de ação integrada, como por exemplo, na aplicação do instrumento de Parcelamento, Edificação e Utilização Compulsórios (PEUC) para estimular a Função Social da Propriedade, priorizando a provisão de Habitação de Interesse Social.</p>
				<p>Deve ser objeto do trabalho supracitado todo o perímetro da Zona Eixo de Estruturação da Transformação Metropolitana (ZEM) relacionada ao Parque Municipal do Minhocão, bem como das áreas gravadas como Zonas Especiais de Interesse Social (ZEIS) pela Lei Municipal Nº 16.402 de 22 de março de 2016. E deve ser apresentado no conteúdo um diagnóstico socioterritorial temático que identifique e caracterize situações de precariedade habitacional e vulnerabilidade social em todo o perímetro. Deve, ainda, trazer proposta de ações objetivas priorizadas e contextualizadas às estruturas de atuação da municipalidade, como, por exemplo, o Projeto de Intervenção Urbana Setor Central da MEM que é um importante instrumento para captação de recursos para a provisão de habitação de interesse social, ou como o Programa de Locação Social que permite ao município ofertar unidades habitacionais para aluguel com valores mais baixos que os oferecidos pelo mercado, visando garantir a permanência da população de baixa renda no território, dentre outros.</p>

				<h4>Segurança urbana</h4>
				<p>Como previsto constitucionalmente e em leis infraconstitucionais, a Guarda Civil Metropolitana (GCM) pode atuar na prevenção criminal em próprios municipais como os parques urbanos.</p>
				<p>Nesse sentido, recomenda-se que o projeto Parque do Minhocão, do ponto de vista da segurança urbana, adote dois caminhos:</p>
				<ol class="decimais">
					<li>Presença física de Guardas Municipais no parque em uma escala de 24x7 durante 365 dias ao ano, com base comunitária móvel com 2 guardas e duas motocicletas para patrulhamento por toda sua extensão. Vale lembrar que a GCM, desde o decreto que cria o Parque do Minhocão já vem cumprindo o serviço de prevenção naquele logradouro, notadamente todas as noites após o fechamento para veículos (20:00) e aos finais de semana durante todo o dia.</li>
					<li>Instalação de câmeras de segurança: importante mecanismo de inibição da prática delituosa e mecanismo de suporte a investigações criminais. As câmeras para instalação já estão disponíveis, sendo necessário prover o logradouro de <i>link</i> e nuvem para compartilhamento ao City Câmeras. Existe na SMSU doação de <i>biosites</i> pela empresa TIM, a qual compromete-se a instalar os biosites com 4 câmeras na extensão da via. A doação em questão está em análise pela consultoria da SMSU, para posterior encaminhamento à PGM.</li>
				</ol>
				<p>Abaixo seguem mapas de calor dos meses de setembro, outubro, novembro e dezembro de 2018 para conhecimento da problemática quanto a furtos e roubos na região.</p>
				
				<!-- Figuras 100-103: furtos e roubos na região setembro-outubro/2018 -->
				<Galeria :gallery_attrs="galeria100_103"></Galeria>
				<!-- /Figuras 100-103: furtos e roubos na região setembro-outubro/2018 -->

				<p>Recomenda-se a elaboração de plano detalhado de segurança urbana no perímetro das intervenções, com ações de curto, médio e longo prazo.</p>

				<h4>Cultura</h4>
				<p>O Parque do Minhocão deve ser visto como um ganho de convivência social e espaços multifuncionais de extrema importância para a cidade. Além disso, o próprio espaço supre uma imensa demanda urbana de vivências culturais, pela sua localização e permeabilidade com a cidade.</p>
				<p>Analisando a ocupação e uso do solo de seu entorno imediato, identifica-se alguns pontos importantes levando em consideração a população que reside em sua “borda”, os transeuntes no nível da Rua Amaral Gurgel, o comércio existente, a população de baixa renda em situação vulnerável nas vias do entorno e no eixo principal, o fluxo de veículos e a sua relação com equipamentos culturais públicos (municipal, estadual e federal) e privados.</p>
				<p>O Parque pode funcionar como um equipamento de convite à sociedade para transitar, permanecer e conhecer o Centro de São Paulo com mais intensidade e programação. Com atenção aos danos e incômodos que o Elevado causou para os moradores do seu entorno durante anos, é importante dosar as atividades propostas pensando em como manter um ambiente silencioso e produtivo ao mesmo tempo.</p>
				<p>Recomenda-se uma dinâmica de gestão que cuide em conjunto da curadoria das atividades do parque, seguindo a lógica de implementar um calendário unificado público-privado, tendo em vista que as atividades culturais da cidade serão atualizadas em tempo real em uma plataforma ligada à SMC.</p>
				<p>Em cada acesso de escadas, recomenda-se implantar painéis informativos com os locais e atividades no entorno expandido (item com possibilidade de patrocínios). Ao final deste item, listamos alguns equipamentos do perímetro expandido citado.</p>
				<p>Pode-se dizer que há 3 eixos importantes que permeiam o parque: o nível da rua, o elevado e as empenas dos edifícios da Rua Amaral Gurgel. Para cada um dos eixos, recomendam-se ocupações distintas.</p>
				<ol class="decimais">
					<li>No nível da rua, o canteiro central pode ser usado somente para acesso ao elevado, para não interferir no fluxo da ciclovia e no corredor de ônibus. Os pilares do elevado podem ser painéis importantes para expressões artísticas na escala de pedestres e veículos, podendo receber trabalhos de artistas convidados com iluminação adequada para valorizar as artes e permitir boa visualização<sup>1</sup>.</li>
					<li>
						A ocupação do parque elevado pode ser feita em sua maioria por espaços livres que permitam fluxos em ritmos diferentes do nível da rua, com pontos de convivência criados a partir de mobiliário urbano fixo e móvel. Esse eixo pode receber também atividades periódicas como:
						<ul>
							<li>Clubes de leitura, leituras de roteiros, contação de histórias, saraus literários, feira de troca de livros e vinil, etc.. ;</li>
							<li>Passeios guiados com a arquitetura e urbanismo como tema, conectando a população com a cidade ;</li>
							<li>Feiras gastronômicas;</li>
							<li>Audições de música acústica – conversas sobre música;</li>
							<li>Parceria com SPCine para sessões de cinema ao ar livre semanais;</li>
							<li>
								Programação infantil aos domingos pela manhã;
							</li>
						</ul>

						<Imagem :dados="{
							tipo: 'default',
							url: src('arquivos/parque-minhocao/img/fig104.jpg'),
							caption: 'Programação infantil e mobiliário urbano'
						}" class="liImagem"></Imagem>

						<ul>
							<li>
								Programação como “Grupo esparrama” - Teatro nas janelas dos edifícios.
							</li>
						</ul>

						<Imagem :dados="{
							tipo: 'default',
							url: src('arquivos/parque-minhocao/img/fig105.jpg'),
							caption: 'Teatro nas janelas dos edifícios (Grupo Esparrama)'
						}" class="liImagem"></Imagem>

						<Imagem :dados="{
							tipo: 'default',
							url: src('arquivos/parque-minhocao/img/fig106.jpg'),
							caption: 'Teatro nas janelas dos edifícios (Grupo Esparrama)'
						}" class="liImagem"></Imagem>
					</li>
					<li>Galeria de Arte Urbana em empenas. Existem 18 empenas que poderiam receber esses trabalhos com linguagens como grafitti, projeções e mapping.</li>
				</ol>
				<p>Recomenda-se a elaboração de plano detalhado de programação cultural e de patrimônio no perímetro das intervenções, com ações de curto, médio e longo prazo.</p>
				<ol class="notas">
					<caption>Notas</caption>
					<li>Referência: Raquel Brust.</li>
				</ol>

				<h4>Turismo</h4>
				<p>No âmbito do desenvolvimento das políticas municipais de turismo, a implantação do Parque do Minhocão é considerada uma estratégia importante para:</p>
				<ul>
					<li>Fortalecimento da conexão da área do Elevado João Goulart com outros equipamentos do entorno;</li>
					<li>Valorização do Centro como lugar privilegiado da estratégia de consolidação de produtos turísticos da cidade;</li>
					<li>Integração da área do “Centro Novo” com a estratégia de implantação do Triângulo SP, projeto de intervenção no “Centro Velho” funcionalmente conectado ao Elevado pela Av. São João;</li>
					<li>Potencializar dinâmicas de desenvolvimento local e de fortalecimento da economia do turismo.</li>
				</ul>

				<h4>Esporte e lazer</h4>
				<p>Este subitem compila apontamentos iniciais da Secretaria Municipal de Esportes e Lazer da Prefeitura de São Paulo com vistas à implantação do Parque Municipal do Minhocão, na forma determinada pela Lei 16.833/2018. Trata-se de contribuição preliminar ao processo de formulação de política pública desencadeada pela criação do Parque, propondo uma agenda de aparelhagem com equipamentos esportivos no território do Parque do Minhocão, tais como:</p>
				<ol class="decimais">
					<li><b>Ciclovia:</b> reafirmando e contemplando a vocação esportiva por excelência do Elevado João Goulart tal como ele é hoje, é fundamental viabilizar a ampliação das ciclovias no futuro Parque, com incrementos de segurança, conforto e circulação.</li>
					<li><b>Pista de corrida:</b> tal como a ciclovias, a pista de corrida vem para atender à demanda atual e já consolidada por atividades de caminhada e corrida no Elevado João Goulart, aprimorando as condições de conforto e segurança dos usuários, com separação entre os fluxos de corrida e caminhada, de um lado e bicicletas, de outro.</li>
					<li><b>Academia ao ar livre:</b> aos moldes de parcerias já consolidadas em muitos parques públicos, propõe-se a instalação de pequenas estações de ginástica ao ar livre, capazes de oferecer suporte para atividades físicas aeróbicas e anaeróbicas, como a musculação.</li>
					<li><b>Training trucks:</b> equipamentos cada vez mais frequentes por sua praticidade logística, os training trucks podem ser uma alternativa viável e rápida para a viabilização de equipamentos esportivos à disposição da população frequentadora do futuro Parque. Trata-se de veículo automotor adaptado para armazenamento e desdobramento em aparelhos próprios para aulas de danças, spinning e pilates, bem como atividades funcionais de musculação.</li>
					<li><b>Quadras de basquete 3x3:</b> equipamento símbolo do esporte urbano de rua nas grandes cidades, as quadras de basquete 3 x 3 são caracterizadas pela simplicidade da sua instalação e pela sua alta demanda junto à população jovem.</li>
					<li><b>Parede de escalada:</b> com o Parque do Minhocão abre-se uma oportunidade privilegiada para fomento ao esporte radical, em especial para a população jovem. O Elevado apresenta à população um convite à prática da escalada, partindo do nível da rua para o nível da pista suspensa (viaduto), seja em direção às vigas ou por meio de alguma plataforma móvel. Essa atração pode ser especialmente interessante para crianças e adolescentes, em uma verdadeira iniciação esportiva.</li>
					<li><b>Pista de skate:</b> assim como a escalada, abre-se com o Parque a possibilidade de articulação de um polo de esporte radical e lazer para a população jovem, por meio da construção de pistas no seu nível elevado ou inferior.</li>
					<li><b>Mini-parkour para crianças:</b> finalmente, a localização no centro da cidade, em meio à paisagem urbana por excelência, é uma oportunidade rara de prestígio à prática do parkour, em sua modalidade de iniciação para crianças e adolescentes.</li>
				</ol>
				<p>Tendo em vista a necessidade de se preservar certo ambiente de silêncio para a população que mora nas “bordas” do Minhocão, entendemos ser prudente a opção de modulação e combinações entre as disponibilizações desses equipamentos.</p>
				<p>Ainda, vale observar que, a depender do calendário de criação do Parque, há interesse da parte de SEME de fazer do Parque Minhocão um dos polos mais estratégicos das nossas Viradas Esportivas, momento urbano no qual os equipamentos aqui propostos ganhariam ainda mais protagonismo na paisagem social e urbanística da região.</p>
				<Comments :attr="{id:17, context:'Contribuições setoriais para ativação e qualificação'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">Zeladoria urbana e regulação de atividades em espaços públicos</h3>
				<p>No âmbito de atuação da Secretaria Municipal das Subprefeituras (SMSUB) e da Subprefeitura Sé, é importante que o projeto Parque Minhocão incorpore os seguintes temas:</p>
				<ul>
					<li>Zeladoria nos baixios do Viaduto;</li>
					<li>Interface com as empresas concessionárias de varrição e coleta de lixo;</li>
					<li>Fiscalização dos grandes geradores de resíduos;</li>
					<li>Fiscalização no comércio do entorno imediato à intervenção;</li>
					<li>Combate ao comércio ilegal no baixio e nas entradas do futuro parque;</li>
					<li>Processo de autorização de eventos no entorno e;</li>
					<li>Termos de Cooperação para manutenção de áreas verdes ao longo do eixo do minhocão.</li>
				</ul>
				<Comments :attr="{id:18, context:'Zeladoria urbana e regulação de atividades em espaços públicos'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">Monitoramento ambiental</h3>
				<p>É importante que se constitua uma sistemática de monitoramento ambiental da área de influência do Parque Municipal do Minhocão, com indicadores que possam ser acompanhados antes, durante e após as intervenções previstas neste relatório. </p>
				<p>Recomenda-se, assim, a elaboração de um Plano de Monitoramento Ambiental que defina os indicadores de monitoramento, sua periodicidade, formas de acesso e medição, a linha de base atual e as bases do processo de monitoramento.</p>
				<Comments :attr="{id:19, context:'Monitoramento ambiental'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">Estratégias de gestão</h3>
				<p>Projetos que envolvem múltiplos atores institucionais para promover transformações urbanas de grande impacto demandam não só bons projetos de engenharia, urbanísticos e ações setoriais complementares. É fundamental que se desenhe uma boa estratégia de gestão para os processos de planejamento e implantação do projeto, assim como para a sustentabilidade da operação de espaços, equipamentos e serviços resultantes da intervenção.</p>
				<p>Nesse sentido, devem ser propostos os elementos básicos da estrutura de governança institucional do processo de implantação do Parque do Minhocão, e da abordagem dos diferentes desafios associados à sua gestão.</p>

				<h4>Gestão compartilhada da operação</h4>
				<p>Para que as intervenções propostas sejam realizadas no prazo estimado, é fundamental que as diversas ações do projeto estejam alinhadas institucionalmente e contem com um arranjo claro de coordenação.</p>
				<ul>
					<li>A coordenação geral e técnica da estratégia seja de responsabilidade da Secretaria Municipal de Desenvolvimento Urbano (SMDU);</li>
					<li>A Secretaria do Governo Municipal (SGM) seja responsável pelo apoio institucional à SMDU, principalmente no que se refere à articulação intersecretarial;</li>
					<li>Sejam definidas linhas de ações de responsabilidade de cada uma das secretarias setoriais envolvidas, com indicação de responsáveis técnicos.</li>
				</ul>
				<p>A SMDU, assim, coordenará e acompanhará, com apoio das secretarias setoriais envolvidas:</p>
				<ul>
					<li>A elaboração dos projetos preliminares e termos de referência (TR) necessários à contratação dos projetos executivos de obras e intervenções urbanísticas;</li>
					<li>O detalhamento dos estudos de impacto de mobilidade e a elaboração dos projetos preliminares e ações complementares de mitigação de impactos;</li>
					<li>O detalhamento e a integração aos projetos dos planos e ações setoriais produzidos por outras secretarias municipais;</li>
					<li>A proposição de modelos de gestão compartilhada para a operação do Parque, e seus impactos nos projetos de obras e intervenções urbanísticas;</li>
					<li>A integração entre a primeira fase de implantação gradual do Parque Minhocão e as estratégias definidas no processo de elaboração do PIU Parque Minhocão;</li>
					<li>As ações de participação social e gestão democrática associadas ao Parque no âmbito do PIU.</li>
				</ul>
				<p>A operação de um parque urbano deve levar em consideração, sempre, uma série de questões relativas ao planejamento da zeladoria do espaço (limpeza e manutenção de equipamentos), segurança, gestão ambiental, programação cultural, de eventos e atividades, gestão dos usos permitidos e presença de espaços reservados para exploração econômica (comércio e serviços oferecidos aos frequentadores).</p>
				<p>No caso do Parque do Minhocão, o planejamento da operação é fundamental para o sucesso da implantação do parque, tendo em vista algumas características específicas:</p>
				<ul>
					<li>Conflitos de usos e visões sobre o território, com grande engajamento de moradores, frequentadores e entidades;</li>
					<li>Necessidade de forte integração entre parque e áreas públicas associadas, com graus diferenciados de degradação;</li>
					<li>Fase de transição decisiva, com previsão de impactos de mobilidade que serão mitigados de forma gradual;</li>
					<li>Cenário de restrição orçamentária, com necessidade de busca de alternativas para auxiliar no financiamento da operação do Parque.</li>
				</ul>
				<p>A experiência comparada indica que em cenários desse tipo é importante investir em modelos de gestão compartilhada, envolvendo poder público, setor privado e sociedade civil, buscando maior participação e apropriação da gestão dos usos do parque por parte de entidades e frequentadores e, ao mesmo tempo, a prospecção de recursos que permitam uma manutenção adequada com menor dispêndio de recursos públicos.</p>
				<p>Essa lógica de articulação entre poder público e privado para a gestão compartilhada de espaços e equipamentos públicos se aplica não só aos parques urbanos (equipamentos) propriamente ditos, mas para áreas públicas em sentido mais amplo. Praças e outras áreas públicas, como canteiros e faixas verdes de calçadas, podem ser mantidas por atores privados através de Termos de Cooperação celebrados pelas subprefeituras.</p>
				<p>Esse conjunto de instrumentos e alternativas disponíveis precisa, para o caso do Parque do Minhocão, ser integrado em uma proposta de Modelo de Gestão Compartilhada que compreenda a integração entre:</p>
				<ul>
					<li>O tabuleiro do viaduto e seus acessos (área de parque urbano sob responsabilidade de gestão da SVMA);</li>
					<li>As áreas públicas (vias, ciclovias, calçadas e equipamentos) imediatamente abaixo do tabuleiro do viaduto, sob responsabilidade de diversos órgãos (SUB-SE, SIURB, SPTRANS, CET, particulares e órgãos vinculados a outras esferas federativas) e;</li>
					<li>Espaços públicos considerados importantes para a ativação e transformação do espaço, como praças e rotas estratégicas de entrada e saída (como as praças Roosevelt, Rotary e Marechal Deodoro, o Parque Augusta e os largos do Arouche e de Santa Cecília), também sob responsabilidade de diversos atores institucionais.</li>
				</ul>
				<p>Já existem experiências nesse sentido no município de São Paulo. Considerando a diretriz geral, atualmente em prática na SVMA, de desonerar custeios de conservação e manutenção de parques sob sua administração, é possível apontar algumas alternativas de modelos de gestão, para aplicação em curto prazo, no Parque Minhocão. Há, basicamente, dois modelos atualmente em operação, geridos pela SVMA:</p>
				<ul>
					<li><b>Concessão Plena</b>, como no caso do Parque Ibirapuera ou do Parque Chácara do Jockey. No momento, os processos licitatórios ainda estão em andamento. Em breve, teremos resultados e, em algum tempo, experiências concretas e;</li>
					<li><b>Patrocínio Integral</b> como no Parque Burle Marx, pela Fundação Aron Birmann, ou <b>Patrocínio Parcial</b>, como no Parque do Povo/Mario Pimenta Camargo, pela Associação Parque do Povo, composta de um grupo de empresas, entre elas, o Grupo W Torres.</li>
				</ul>
				<p>Há, além disso, e dadas as características do Parque Minhocão e de seu entorno, a possibilidade de propor um novo tipo de arranjo de gestão compartilhada, envolvendo SVMA, Subprefeitura Sé e outros atores institucionais:</p>
				<ul>
					<li><b>Gestão Integrada</b> do Parque Minhocão no sistema de espaços públicos da área central da cidade. A gestão do Parque Minhocão estaria integrada às da Praça Roosevelt, Praça D. José Gaspar, Praça da República, Praça Monteiro Lobato, Largo Santa Cecília e de avenidas e bulevares emblemáticas como Av. São João, Av. Ipiranga, Av. São Luis e Av. Vieira de Carvalho, além de outros espaços públicos com características de área de convivência e de rota estratégica.</li>
				</ul>
				<p>Destacamos a possibilidade de integração com o Programa Centro Aberto, coordenado pela SMDU, para promover usos em espaços públicos “ociosos” ou “negligenciados”. O Programa Centro Aberto foi iniciado em 2014, primeiramente, no Largo São Francisco e Largo Paissandu e, baseado em retornos positivos, foi estendido para mais três lugares: Rua Galvão Bueno, Largo São Bento e Largo Gen. Osório.</p>
				<p>Nesse sentido, recomenda-se a produção de um Plano de Gestão Compartilhada, que analise e recomende modelos de gestão de forma detalhada, contendo:</p>
				<ul>
					<li>Modelo institucional e matriz de responsabilidades;</li>
					<li>Ações institucionais necessárias para formalizar o modelo de gestão;</li>
					<li>Forma de articulação com o Conselho de Gestão do Parque;</li>
					<li>Definição de princípios relacionados à zeladoria, segurança e programação de usos;</li>
					<li>Diálogo com o projeto urbanístico para definição de pontos para exploração econômica;</li>
					<li>Fomento ao redesenho de praças e outras áreas públicas articuladas ao parque e;</li>
					<li>Articulação com estratégia de celebração de Termos de Cooperação para adoção de praças e outras áreas públicas.</li>
				</ul>
				<p>A implantação de um Modelo de Gestão Integrada do Parque do Minhocão poderá, no curto prazo, ser mais prática e eficiente, pela facilidade de integração do parque a programas de revitalização do espaço público na área central e a contratos existentes de zeladora urbana. O Parque do Minhocão representa uma oportunidade de tratar de forma integrada um conjunto contínuo de espaços públicos no coração da cidade.</p>
				<p>A gestão integrada entre ações locais e políticas públicas poderá garantir um padrão dos serviços, em qualidade e em rapidez, com base em experiências acumuladas de zeladora urbana, de participação comunitária, de capacitação profissional, de inclusão no trabalho e de ativação de espaços “ociosos”. O Parque do Minhocão deve ser visto como uma oportunidade de valorização da governança local.</p>
				<p>Algumas possibilidades e sugestões adicionais devem ser analisadas no Plano de Gestão Compartilhada do Parque:</p>
				<ul>
					<li>Inclusão, no contrato da obra, da conservação e manutenção dos espaços por um período mínimo, tempo suficiente para que os usos planejados sejam testados e a vegetação nova estabelecida; </li>
					<li>Previsão de recursos financeiros e humanos para efetuar avaliações pós-usos sistemáticas e ajustes periódicos do projeto;</li>
					<li>Inclusão de políticas públicas para participação e engajamento da comunidade. Programas já realizados, como Florir e Zeladora de Praças, articulados entre Subprefeituras, Desenvolvimento Social e Trabalho e SVMA, foram bem sucedidos, especialmente em relação à capacitação profissional de jardineiros e zeladores e a sua inclusão no mercado de trabalho; </li>
					<li>Integração da segurança pública do parque aos programas de Rondas Comunitárias. Nas proximidades do Minhocão, há pelo menos dois postos policiais, um na Praça Roosevelt e outro na Praça Monteiro Lobato;</li>
					<li>Formação de Conselho Gestor do Parque Minhocão nos moldes do Conselho Gestor da Praça Roosevelt, composto de representantes eleitos entre moradores, artistas, usuários e indicados pela Prefeitura. </li>
				</ul>
				<Comments :attr="{id:20, context:'Estratégias de gestão'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:14, context:'Comentarios'}"></Comments>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import CommentsContext from '@/components/CommentsContext'
import CommentsLoader from '@/components/CommentsLoader'
import Galeria from '@/components/Galeria'
import Apoio from '@/components/Apoio'
import Tabela from '@/components/Tabela'
import Imagem from '@/components/Imagem'
import AntesDepois from '@/components/AntesDepois'
import GraficoLinha from '@/components/GraficoLinha'
import Processo from '@/components/graf/parque-minhocao/processo'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'ParqueMinhocao',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			social_assets: {
				whatsapp: 'https://api.whatsapp.com/send?text=Participe%20da%20consulta%20p%C3%BAblica%20do%20PIU%20Parque%20Minhoc%C3%A3o%3A%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fparque-minhocao',
				facebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fparque-minhocao',
				twitter: 'https://twitter.com/intent/tweet?text=Participe%20da%20consulta%20p%C3%BAblica%20do%20PIU%20Parque%20Minhoc%C3%A3o%3A%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fparque-minhocao'
			},
			mobiliario_centro_aberto: [{
				'titulo': 'Bancos Modulares',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/1.jpg',
				caracteristicas: [ 'Criam espaços para conversar', 'Conformam ‘espaços dentro do espaço’, convidando os passantes a sentar', 'Constroem grandes elementos para permanência', 'Tornam os espaços mais verdes com adição de vasos e planta' ]
			}, {
				'titulo': 'Banco e Mobiliário Portátil',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/2.jpg',
				caracteristicas: [ 'Garantem múltiplas possibilidades de sentar ao ar livre', 'Conferem ao usuário o protagonismo no uso do espaço, movendo as cadeiras para a sombra, sentando em grupos etc.', 'Mesinhas na calçada dão apoio à comida de rua (barracas, food-trucks, food-bikes etc.)', 'Guarda-sóis proporcionam sombra nas áreas de permanência' ]
			}, {
				'titulo': 'Vasos',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/3.jpg',
				caracteristicas: [ 'Ampliam a presença do verde na cidade', 'Fornecem sombra e filtrar a luz solar', 'Criam novos ambientes dentro do espaço', 'Servem como elementos adicionais de descanso', 'São uma alternativa aos balizadores para bloqueio do tráfego' ]
			}, {
				'titulo': 'Balizadores',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/4.jpg',
				caracteristicas: [ 'Impedem a entrada de veículos sem interromper as linhas de desejo dos pedestres', 'Servem como bancos informais', 'Conformam pequenas bordas secundárias' ]
			}, {
				'titulo': 'Tratamento de piso',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/5.jpg',
				caracteristicas: [ 'Unifica o espaço', 'Identifica com clareza as transformações do lugar', 'Cria identidade visual para intervenções pulverizadas', 'Conquista áreas de leito carroçável ocioso, mediando uma nova relação de uso do espaço viário' ]
			}, {
				'titulo': 'Iluminação e Projeção',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/6.jpg',
				caracteristicas: [ 'Garantem espaços públicos mais seguros', 'Convidam ao uso noturno', 'Reanimam fachadas e muros sem janelas', 'Realçam detalhes das construções', 'Criam padrões luminosos de piso' ]
			}, {
				'titulo': 'Instalações Temporárias',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/7.jpg',
				caracteristicas: [ 'Ativam bordas e fachadas degradadas ', 'Adicionam novas funções e atividades ao local', 'Criam unidades-satélite de atividades já presentes no entorno', 'Servem como unidades de depósito', 'Garantem a  presença  de  pessoas  no  local  ao  longo  do  dia,  fortalecendo a vigilância passiva' ]
			}, {
				'titulo': 'Centro de Informações e Apoio',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/8.jpg',
				caracteristicas: [ 'Unidade de apoio e depósito de mobiliário portátil', 'Concentra informações sobre o projeto', 'Promove a zeladoria do espaço', 'Proporciona a interface com usuários' ]
			}],
			galeria01: {
				galleryTitle: 'Fotografias de imóveis no Setor 007, Quadra 020',
				width: 623,
				height: 468,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q020/1.jpeg',
					state: true,
					legenda: 'Rua das Palmeiras, nº 58',
					icon: false,
					id: 1
				}, {
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q020/2.jpeg',
					state: false,
					legenda: 'Rua Helvetia, nº 990',
					icon: false,
					id: 2
				}]
			},
			galeria02: {
				galleryTitle: 'Fotografias de imóveis no Setor 007, Quadra 041',
				width: 623,
				height: 468,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q041/1.jpeg',
					state: true,
					legenda: 'Avenida São João, nº 1475',
					icon: false,
					id: 1
				}, {
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q041/2.jpeg',
					state: false,
					legenda: 'Rua Doutor Frederico Steidel, nº 120',
					icon: false,
					id: 2
				}]
			},
			galeria03: {
				galleryTitle: 'Fotografias de imóveis no Setor 007, Quadra 093',
				width: 623,
				height: 468,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q093/1.jpeg',
					state: true,
					legenda: 'Rua Dr. Frederico Steidel, nº 299',
					icon: false,
					id: 1
				}, {
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q093/2.jpeg',
					state: false,
					legenda: 'Rua Dr. Frederico Steidel, nº 275',
					icon: false,
					id: 2
				}]
			},
			galeria04: {
				galleryTitle: 'Fotografias de imóveis no Setor 007, Quadra 094',
				width: 623,
				height: 468,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q094/1.jpeg',
					state: true,
					legenda: 'Rua Dr. Frederico Steidel, nº 233',
					icon: false,
					id: 1
				}, {
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q094/2.jpeg',
					state: false,
					legenda: 'Rua Dr. Frederico Steidel, nº 211',
					icon: false,
					id: 2
				}]
			},
			galeria05: {
				galleryTitle: 'Fotografias de imóveis no Setor 007, Quadra 095',
				width: 623,
				height: 468,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q095/1.jpeg',
					state: true,
					legenda: 'Rua Sebastião Pereira, nº 98 até 76',
					icon: false,
					id: 1
				}, {
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q095/2.jpeg',
					state: false,
					legenda: 'Rua Sebastião Pereira, nº 60',
					icon: false,
					id: 2
				}]
			},
			// início parque-minhocao-temp
			galeria71_72: {
				width: 992,
				height: 482,
				images: [
					{
						url: this.src('arquivos/parque-minhocao/galerias/71_72/fig71.jpg'),
						state: true,
						legenda: 'Simulação de escada de acesso (parte de baixo)',
						icon: false,
						id: 1
					},
					{
						url: this.src('arquivos/parque-minhocao/galerias/71_72/fig72.jpg'),
						state: false,
						legenda: 'Simulação de escada de acesso (parte de cima)',
						icon: false,
						id: 2
					}
				]
			},

			tabela_80: {
				titulo: 'Redução de velocidade média (KM/H) - Exemplo do pico da manhã',
				colunas: [
					{ titulo: 'Observado' },
					{ titulo: 'Atual' },
					{ titulo: 'Fechamento' },
					{ titulo: 'Com ações de mitigação' }
				],
				linhas: [
					[
						[ { data: 'MUNICÍPIO' } ],
						[ { data: '21,0 km/h' } ],
						[ { data: '20,9 km/h (-0,16%)' } ],
						[ { data: '20,9 km/h (-0,06%)' } ]
					],
					[
						[ { data: 'CENTRO EXPANDIDO' } ],
						[ { data: '26,8 km/h' } ],
						[ { data: '26,6 km/h (-0,48%)' } ],
						[ { data: '26,7 km/h (-0,28%)' } ]
					],
					[
						[ { data: 'ÁREA DE INFLUÊNCIA' } ],
						[ { data: '22,7 km/h' } ],
						[ { data: '20,8 km/h (-8,01%)' } ],
						[ { data: '21,1 km/h (-6,89%)' } ]
					],
					[
						[ { data: 'RUA AMARAL GURGEL' } ],
						[ { data: '42,8 km/h' } ],
						[ { data: '27,3 km/h (-36,1%)' } ],
						[ { data: '31,7 km/h (-25,7%)' } ]
					],
					[
						[ { data: 'AV. SÃO JOÃO' } ],
						[ { data: '31,4 km/h' } ],
						[ { data: '29,1 km/h (-7,05%)' } ],
						[ { data: '28,3 km/h (-9,71%)' } ]
					]
				]
			},

			tabela_80a: {
				titulo: 'Aumento do tempo médio de viagem (minutos) - Exemplo do pico da manhã',
				colunas: [
					{ titulo: 'Observado' },
					{ titulo: 'Atual' },
					{ titulo: 'Fechamento' },
					{ titulo: 'Com ações de mitigação' }
				],
				linhas: [
					[
						[ { data: 'MUNICÍPIO' } ],
						[ { data: '25,69 min' } ],
						[ { data: '25,75 min (+0,23%)' } ],
						[ { data: '25,8 min' } ]
					],
					[
						[ { data: 'CENTRO EXPANDIDO' } ],
						[ { data: '15,32 min' } ],
						[ { data: '15,41 min (+0,59%' } ],
						[ { data: '15, 54' } ]
					],
					[
						[ { data: 'ÁREA DE INFLUÊNCIA' } ],
						[ { data: '4,72 min' } ],
						[ { data: '4,83 min (+2,33%)' } ],
						[ { data: '4,82 min' } ]
					]
				]
			},

			galeria100_103: {
				width: 821,
				height: 597,
				images: [
					{
						url: this.src('arquivos/parque-minhocao/galerias/100_103/100.jpg'),
						state: true,
						legenda: 'Furtos e roubos na região. Setembro/2018',
						icon: false,
						id: 1
					},
					{
						url: this.src('arquivos/parque-minhocao/galerias/100_103/101.jpg'),
						state: false,
						legenda: 'Furtos e roubos na região. Outubro/2018',
						icon: false,
						id: 2
					},
					{
						url: this.src('arquivos/parque-minhocao/galerias/100_103/102.jpg'),
						state: false,
						legenda: 'Furtos e roubos na região. Novembro/2018',
						icon: false,
						id: 3
					}, {
						url: this.src('arquivos/parque-minhocao/galerias/100_103/103.jpg'),
						state: false,
						legenda: 'Furtos e roubos na região. Dezembro/2018',
						icon: false,
						id: 4
					}
				]
			}
		}
	},
	components: {
		PageTop,
		Indice,
		Comments,
		CommentsLoader,
		CommentsContext,
		Galeria,
		Apoio,
		Tabela,
		Imagem,
		AntesDepois,
		GraficoLinha,
		Processo
	},
	methods: {
		print () {
			this.$store.dispatch('imprime')
		}
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

div.ParqueMinhocao {
	div.mobiliario-centro-aberto {
		margin: 2rem auto;
		padding: 2rem;
		background-color: $cinza-3;
		max-width: calc(100% - 400px - 4rem);
		border-radius: 2px;
		& > ul {
			display: block;
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			align-items: flex-start;
			min-width: 100%;
			& > li {
				display: inline-block;
				vertical-align: top;
				width: calc(320px - 2rem);
				padding: 1rem;
				text-align: center;
				border: 1px solid $sombra-4;
				border-radius: 1rem;
				font-family: $grotesca;
				background-color: #FFF;
				img {
					margin: 1rem;
				}
				& > div.nome {
					font-size: small;
					font-weight: bold;
					color: #00b1ef;
				}
				& > ul {
					text-align: left;
					margin: 1rem 0 0 0;
					& > li {
						padding: 0;
						margin: 0 0 0 1rem;
						font-family: $grotesca;
						font-size: small;
					}
				}
			}
		}
		div.dados {
			text-align: center;
			font-size: small;
			color: $cinza-2;
		}
		@media (max-width: 600px) {
			width: 100%;
			max-width: unset;
			padding: 1rem;
			& > ul {
				padding: 0;
				& > li:not(:last-child) {
					margin: 0 0 1rem 0;
					img {
						max-width: 100%;
					}
				}
				& > li:last-child {
					margin: 0;
				}
			}
		}
	}
	*.liImagem {
		margin-left: -4.4rem;
		@media (max-width: 600px) {
			margin-left: -2.4rem;
		}
	}
}
</style>
