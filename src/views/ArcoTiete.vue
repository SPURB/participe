<template>
	<div class="ArcoTiete" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/placeholder_480w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Arco Tietê</div></template>
			<template slot="subtitulo"><div>Primeira consulta pública do Projeto de Intervenção Urbana Arco Tietê</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<!-- <Apoio></Apoio> -->
		<!-- Decreto Nº 56.901 inclua este componente caso seja um PIU -->

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<p>Devido a sua localização estratégica e por ser o um dos principais eixos de ligação leste-oeste da cidade, ao longo dos anos, o território da planície fluvial do Rio Tietê tem sido recorrentemente objeto de leitura, análise e proposição pela Prefeitura do Município de São Paulo, como os estudos das Operações Urbanas Diagonal Sul, Diagonal Norte e Carandiru-Vila Maria, Lapa- Brás apoiados nas diretrizes do antigo Plano Diretor Estratégico (Lei Municipal n°13.430/2002) e da Operação Urbana Consorciada Água Branca aprovada pela Lei n° 15.893/2013. Mais recentemente, os conceitos oriundos dos diferentes estudos desenvolvidos contribuíram para a elaboração do chamamento público para elaboração e apresentação de estudos de transformação urbana do Arco Tietê, correspondente ao Processo de Manifestação de Interesse Arco Tietê (PMI Arco Tietê), realizado pela Secretaria de Desenvolvimento Urbano (SMDU), em 2013.</p>
			<p>A compreensão da necessidade de intervenções neste território é ratificada pelo atual Plano Diretor Estratégico, Lei Municipal nº 16.050/2014 (PDE) ao definir o perímetro do Subsetor Arco Tietê (ACT), do Setor Orla Ferroviária e Fluvial da Macroárea de Estruturação Metropolitana (MEM), que abrange integralmente a várzea do Rio Tietê, desde Pirituba até Vila Maria a norte e, a sul, da Lapa até o Belém.</p>
			<Imagem :dados="{
				tipo: 'mapa',
				titulo: 'Arco Tietê do Setor Orla Ferroviária e Fluvial da Macroárea de Estruturação Metropolitana',
				url: imgSrc('arquivos/arco-tiete/img/1.jpg'),
				legenda: [
					{ borda: '#000000', espessura: '2', descricao: 'Perímetro Arco Tietê' },
					{ fundo: '#9bb091', descricao: 'Parques, praças, canteiros' },
					{ fundo: '#2bb5d9', descricao: 'Hidrografia' },
					{ fundo: '#d4d4d4', descricao: 'Quadra viária' },
					{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/ferrovia.png'), descricao: 'Ferrovia' }
				]
			}"></Imagem>
			<p>De acordo com o PDE, a MEM é caracterizada pela existência dos principais eixos que articulam polos e municípios da Região Metropolitana de São Paulo, além de possuir regiões que passam por intensos processos de mudança nos padrões de uso e ocupação do solo, com grande potencial de transformação e nos seus Subsetores deverão ser elaborados Projetos de Intervenção Urbana (PIU).</p>
			<p>Atendendo ao prazo estipulado no §3º do Art. 76 do PDE, que determinou o envio do Projeto de Lei relativo ao Subsetor Arco Tietê à Câmara Municipal, foi protocolado na Câmara Municipal em 14 de Dezembro de 2016 o Projeto de Lei Municipal n° 581/2016 (PL nº581/2016), que trata do PIU Arco Tietê desenvolvido entre 2013 e 2016.</p>
			<p>Considerando a diversidade e a complexidade desse extenso território, aquela primeira versão do PIU Arco Tietê adotou como estratégia a divisão do perímetro em unidades de projeto, viabilizadas pelo instrumento urbanístico <em>Área de Intervenção Urbana</em> (AIU). As propostas urbanísticas para cada uma das AIU (denominadas <em>Centralidade da Metrópole</em>, <em>Lapa</em> e <em>Apoios Urbanos</em>) visavam o melhor aproveitamento da terra urbana em função da infraestrutura existente e planejada, de forma a apoiar o aumento das densidades demográfica e construtiva, permitindo o desenvolvimento de novas atividades econômicas, criação de empregos, produção habitacional de interesse social e equipamentos públicos para a população e mitigar os problemas ambientais.</p>
			<p>Também decorreu dessa primeira versão do PIU Arco Tietê a formulação de um Plano de Melhoramentos Viários em consonância com o Programa de Corredores, prevendo as intervenções necessárias para o desenvolvimento dos eixos de transportes perimetrais, denominados Apoios Urbanos Norte e Sul, já indicados como diretrizes do PDE. Considerando o papel estratégico da rede de mobilidade no processo de reestruturação urbanística, capaz de promover a transformação do uso do solo, com adensamento populacional, mudança dos padrões construtivos e incremento da oferta de serviços e equipamentos públicos, o Plano de Melhoramentos Viários foi aprovado previamente, a partir de Lei específica (Lei Municipal n°16.541/2016).</p>
			<p>Na sequência, em abril de 2017 o Executivo solicitou a retirada do PL n°581/2016, a fim de propor uma nova estratégia de abordagem do projeto. Desde então, outros projetos se desenvolveram em trechos do perímetro do Arco Tietê, exigindo novas abordagens e a necessária revisão da proposta anterior.</p>
			<p>Neste contexto, o conteúdo ora apresentado para consulta pública pela Prefeitura Municipal, por meio da Secretaria Municipal de Desenvolvimento Urbano (SMDU) e da São Paulo Urbanismo (SP-Urbanismo), tem o papel de iniciar os trabalhos da retomada dos estudos para o Arco Tietê, sob a luz de uma nova estratégia e diante de um novo cenário, configurado pelos projetos colocalizados supervenientes aos estudos que resultaram no PL n°581/2016, somados às diretrizes postas pelo novo marco regulatório.</p>
			<p>Tendo como referência o Decreto nº 56.901/2016, que dispõe sobre a elaboração do Projeto de Intervenção Urbana, o conteúdo desta consulta pública contempla os <b>Elementos Prévios ao Desenvolvimento do PIU</b>, correspondentes ao <b>Diagnóstico</b> da área e ao <b>Programa de Interesse Público</b> da futura intervenção. A publicação deste conteúdo tem como finalidade divulgá-lo e colher contribuições da sociedade, de modo a permitir uma construção coletiva do PIU.</p>
			<p>Acolhidas as contribuições pertinentes, os estudos serão encaminhados à Secretaria Municipal de Desenvolvimento Urbano (SMDU) para avaliação quanto a sua aderência e contribuição à Política Urbana Municipal. Somente após a aprovação pela SMDU, a SP-Urbanismo prosseguirá com os estudos de acordo com as etapas definidas pelo Decreto Municipal.</p>
			<processo></processo>
		</section>
		<section>
			<h2 class="titulo" indent="1">Motivação</h2>
			<p>Uma das especificidades do Arco Tietê em relação ao conjunto de áreas que compõe a MEM é a capacidade de articulação de territórios externos ao seu perímetro, tanto em âmbito municipal quanto metropolitano. Essa articulação é expressa na marcante presença da infraestrutura ferroviária e do conjunto de vias marginais e rodovias – a oeste, as rodovias Presidente Castelo Branco, Anhanguera e Bandeirantes, e a leste, as rodovias Presidente Dutra e Fernão Dias – ambas com grande impacto no tecido urbano local.</p>
			<p>Como já demonstrado por uma série de estudos, essas infraestruturas de grande porte foram sistematicamente concentradas nas planícies fluviais, locais que ofereciam boas condições topográficas e terras não urbanizadas em abundância – resultantes, sobretudo, da retificação dos canais dos principais rios metropolitanos. Nesse percurso, o rio Tietê e seus afluentes foram sendo gradualmente submetidos a um intenso processo de degradação física e ambiental, sendo notados quase exclusivamente apenas nos períodos de chuva, em função dos recorrentes alagamentos.</p>
			<p>Mesmo com a retificação do curso natural do Rio Tietê, iniciada nos anos 30, que eliminou seus meandros e áreas alagadiças, abrindo espaço para a implantação das infraestruturas ferroviária e rodoviária e para a ocupação da sua várzea, diversas áreas nas margens do rio não foram plenamente urbanizadas até os dias atuais.</p>
			<Imagem :dados="{
				tipo: 'coluna',
				caption: 'Várzea do Rio Tietê em 1958',
				fonte: 'https://www.geoportal.com.br/memoriapaulista - acessado em 04/09/2019',
				url: imgSrc('arquivos/arco-tiete/img/3.jpeg')
			}"></Imagem>
			<p>Esse processo de urbanização da várzea – que passa pelo período de industrialização e, mais recentemente, pela transformação da base produtiva, atraindo tipologias de ocupação extensiva do solo – produziu um tecido urbano marcado pela presença de grandes quadras que não se integram ao entorno, bem como grandes áreas vazias ou com baixos índices de ocupação que não receberam adequada infraestrutura, conformando um processo de <b>urbanização incompleta</b>, cujo resultado é a ausência da diversidade de usos necessária ao adensamento populacional, diversidade vista nas bordas sul e norte do Arco Tietê.</p>
			<p>A degradação do rio, a implantação das marginais e a urbanização incompleta de sua orla acabaram por isolar as duas margens do rio, sendo poucas as conexões urbanas efetivas e qualificadas que integrem as porções norte e sul do Arco Tietê. Esse é um dos principais desafios que o PIU Arco Tietê deve enfrentar, na busca por promover uma intervenção que contribua para solucionar os diversos problemas derivados do processo de urbanização do perímetro, de modo a assegurar o uso mais coerente e inteligente da cidade, de sua infraestrutura e de seus recursos, perseguindo as estratégias definidas pelo Plano Diretor Estratégico – PDE:</p>
			<ol class="romanos">
				<li>Socializar os ganhos da produção da cidade;</li>
				<li>Assegurar o direito à moradia digna para quem precisa;</li>
				<li>Melhorar a mobilidade urbana;</li>
				<li>Qualificar a vida urbana nos bairros;</li>
				<li>Orientar o crescimento da cidade nas proximidades do transporte público;</li>
				<li>Reorganizar as dinâmicas metropolitanas;</li>
				<li>Promover o desenvolvimento econômico da cidade;</li>
				<li>Incorporar a agenda ambiental ao desenvolvimento da cidade;</li>
				<li>Preservar o patrimônio e valorizar as iniciativas culturais e</li>
				<li>Fortalecer a participação popular nas decisões dos rumos da cidade.</li>
			</ol>
		</section>
		<section>
			<h2 class="titulo" indent="1">Diagnóstico</h2>
			<section>
				<h3 class="titulo" indent="2">Perímetro de estudo</h3>
				<p>Os estudos de retomada do PIU Arco Tietê partem do perímetro determinado pelo PL nº 581/2016, fazendo distinção de trechos em que há sobreposição com outros planos, projetos e marcos legais. Além disto, conscientes da expressiva transformação do uso do solo a leste do perímetro do Arco Tietê, parte dos Distritos Tatuapé e Belém foi incluída nessa etapa de diagnóstico para a investigação das possíveis relações com o território do PIU, sendo considerada como uma área de prospecção. O distrito Tatuapé é um dos que mais receberam o uso residencial vertical nos últimos 20 anos, registrando quase 30 ha de novos lotes residenciais verticais.</p>
				<p class="e">mapa kml #1</p>
				<p>A etapa de Diagnóstico, aqui apresentada de forma resumida, é composta pela análise do marco regulatório e projetos colocalizados e a análise socioterritorial e ambiental. O relatório completo, com informações detalhadas, está disponível para download em três partes:</p>
				<ul class="links">
					<li>
						<a href="#">
							<i class="icon-pdf icon"><span>icon_pdf</span></i>
							<div>Parte 1: Análise do Marco Regulatório e dos Projetos Colocalizados Supervenientes</div>
							<span><!-- espaço para inserir o tamanho do arquivo --></span>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon-pdf icon"><span>icon_pdf</span></i>
							<div>Parte 2: Análise Socioterritorial</div>
							<span><!-- espaço para inserir o tamanho do arquivo --></span>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon-pdf icon"><span>icon_pdf</span></i>
							<div>Parte 3: Análise ambiental</div>
							<span><!-- espaço para inserir o tamanho do arquivo --></span>
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h3 class="titulo" indent="2">Dados gerais</h3>
				<p class="e">ai2html dados gerais</p>
			</section>
			<section>
				<h3 class="titulo" indent="2">Análise do marco regulatório e dos projetos colocalizados supervenientes</h3>
				<p>Novos planos, projetos e marcos legais foram desenvolvidos a partir de 2016 no âmbito do Município e seus perímetros e disposições se sobrepõem ora integralmente, ora parcialmente ao perímetro do PIU Arco Tietê, com impactos no projeto anteriormente concebido (PL nº581/2016).</p>
				<p>As interferências entre planos e projetos ao longo do tempo são esperadas, uma vez que os projetos urbanos não são objetos fechados e estaques, mas resultados de um processo dinâmico e, essencialmente, conjuntural. Nesse sentido, a própria elaboração dos PIU tem sido objeto de amadurecimento desde a publicação do rito processual disposto no Decreto nº 56.901/2016, resultando em uma situação na qual as propostas para os Subsetores da MEM, apesar de sequenciais, retroalimentam o próprio processo de desenvolvimento dos projetos urbanos, compartilhando ferramentas de intervenção, estratégias de comunicação e mecanismos de gestão dos instrumentos de ordenamento e reestruturação urbana propostos pelo PDE.</p>
				<LayerExplorer :data="seq1"></LayerExplorer>
			</section>
			<section>
				<h3 class="titulo" indent="2">Análise socioterritorial e ambiental</h3>
				<p>A seguir foram selecionados quatro grandes eixos resultantes do processo de leitura e interpretação do território da etapa de Diagnóstico: Eixo Ambiental, Mobilidade, Econômico e Social. Os eixos consistem no agrupamento de informações que originaram as camadas que serão apresentadas no Programa de Interesse Público.</p>
				<p class="e">img #5 - galeria 2: textos no word</p>
			</section>
		</section>
		<section>
			<h2 class="titulo" indent="1">Programa de Interesse Público</h2>
				<p>Considerando as demandas e os problemas evidenciados na etapa de diagnóstico, a revisão do PIU Arco Tietê buscou evidenciar aspectos relativos à construção de um projeto urbano sustentável, no qual todas as ações são engajadas para assegurar a interação entre <b>viabilidade econômica</b>, <b>desenvolvimento social</b> e <b>regeneração ambiental</b>. Em termos urbanísticos, soma-se à tríade os aspectos relativos à <b>mobilidade urbana</b>, elemento central na Política Urbana construída pelo PDE.</p>
				<p>Entende-se que as soluções sustentáveis encontram-se na intersecção desses eixos temáticos, sendo insuficiente, para um território que apresenta os problemas descritos anteriormente, de natureza híbrida, respostas parciais. Basta ver, por exemplo, a vulnerabilidade social e a estagnação econômica nas áreas dos antigos meandros do Rio Tietê, áreas hoje suscetíveis a alagamentos e sem conectividade territorial, ou seja, áreas de urbanização incompleta. Nesse sentido, uma das principais diretrizes urbanísticas do projeto é a indução do desenvolvimento de novas frentes urbanas associadas à recuperação dos córregos tributários do Rio Tietê, construindo soluções integradas às questões habitacionais e de mobilidade.</p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/arco-tiete/img/6.png'),
				}"></Imagem>
				<section>
					<h3 class="titulo" indent="2">Atualização do perímetro e Setores de Intervenção</h3>
					<p>Como resposta à complexidade de situações e dinâmicas emergentes do território, a nova área de em estudo respeita os projetos e planos colocalizados, cujas abordagens são direcionadas às questões de trechos específicos do Arco Tietê. Assim, foram subtraídos os perímetros da OUC Água Branca e PIU Setor Central, resultando em nova área de estudo de 3.594ha, incidindo de oeste a leste sobre 7 Subprefeituras – Lapa, Pirituba-Jaraguá, Freguesia do Ó-Brasilândia, Casa Verde-Limão, Santana-Tucuruvi, Vila Guilherme-Vila Maria e Moóca.</p>
					<p>Considerando os dados de diagnóstico e a necessidade de estabelecer um leque preliminar de diretrizes de desenvolvimento urbano para o Arco Tietê, foi desenvolvida metodologia para identificação dos <b>Setores de Intervenção</b>, recortes menores e considerados estratégicas para transformação e qualificação urbanística e ambiental. A definição dos Setores parte do desdobramento dos 4 eixos temáticos em <b>8 camadas de interpretação do território</b>, com o objetivo de sintetizar questões que emergiram no diagnóstico sócioterritorial e ambiental.</p>
					<p>A sobreposição e recorrência de temas e questões deu origem a <b>6 Setores de Intervenção</b>, áreas consideradas prioritárias para a indução da transformação e o equacionamento dos problemas e potencialidade do Arco Tietê – denominados aqui preliminarmente como Setores <b>Lapa</b>, <b>Limão</b>, <b>Santana</b>, <b>Vila Guilherme-Vila Maria</b>, <b>Jaguara</b> e <b>Belém</b>.</p>
					<p>Cabe ressaltar que esses Setores não corresponderão, necessariamente, aos perímetros de intervenção futuros, que serão formulados nas próximas etapas do desenvolvimento do trabalho. Devem ser considerados como uma primeira aproximação para o dimensionamento da viabilidade da transformação, do adensamento futuro pretendido, e das diretrizes para o Programa de Interesse Público do Arco Tietê. Além disso, os Setores formam a base territorial para recepcionar os instrumentos de ordenamento e reestruturação urbana, previstos no Art. 134 do PDE.</p>
					<p>Os Setores resultantes reforçam o foco de aplicação dos instrumentos urbanísticos nas áreas de urbanização incompleta, caracterizadas ao longo do diagnóstico como trechos com pouca infraestrutura urbana, ocupações extensivas e com baixo aproveitamento do solo, próximas ao leito menor do rio Tietê e seus afluentes. Os Setores coincidem também com os territórios classificados no diagnóstico como de base produtiva em transição e grandes glebas públicas, reforçando que o papel estratégico do PIU como ferramenta de organização das dinâmicas de transformação do uso e ocupação do solo na Macroárea de Estruturação Metropolitana.</p>
					<p class="e">img #7 - layers: textos no word</p>
				</section>
				<section>
					<h3 class="titulo" indent="2">Diretrizes urbanísticas</h3>
					<Imagem :dados="{
						tipo: 'mapa',
						url: imgSrc('arquivos/arco-tiete/img/8.png'),
						titulo: 'Diagrama Síntese PIU Arco Tietê',
						legenda: [
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-1.png'), descricao: 'PIU Arco Tietê' },
							{ fundo: '#b3b3b3', borda: '#000', espessura: 2, pontilhado: true, descricao: 'Operação Urbana Consorciada Água Branca' },
							{ fundo: '#b3b3b3', borda: '#000', espessura: 2, descricao: 'PIU Setor Central' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-2.png'), descricao: 'Estação CPTM' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-3.png'), descricao: 'Estação Metrô (existente)' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-4.png'), descricao: 'Estação Metrô (prevista)' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-5.png'), descricao: 'Terminal de ônibus' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/ferrovia.png'), descricao: 'Ferrovia' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-6.png'), descricao: 'Linha Metrô' },
							{ borda: '#000', espessura: 1, pontilhado: true, char: '1', descricao: 'Setor Lapa' },
							{ borda: '#000', espessura: 1, pontilhado: true, char: '2', descricao: 'Setor Limão' },
							{ borda: '#000', espessura: 1, pontilhado: true, char: '3', descricao: 'Setor Santana' },
							{ borda: '#000', espessura: 1, pontilhado: true, char: '4', descricao: 'Setor Vila Guilherme-Vila Maria' },
							{ borda: '#000', espessura: 1, pontilhado: true, char: '5', descricao: 'Setor Jaguara' },
							{ borda: '#000', espessura: 1, pontilhado: true, char: '6', descricao: 'Setor Belém' },
							{ borda: '#aa405a', espessura: 3, linha: true, descricao: 'Apoios Urbanos'},
							{ borda: '#aa405a', espessura: 3, linha: true, pontilhado: true, descricao: 'Apoios Urbanos (implantação fase 2)'},
							{ borda: '#aa405a', espessura: 2, linha: true, descricao: 'Vias estruturais'},
							{ fundo: '#dadada', descricao: 'Áreas de urbanização consolidada' },
							{ borda: '#dadada', espessura: 1, descricao: 'Áreas de urbanização incompleta' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-7.png'), descricao: 'Áreas de indução da urbanização' },
							{ fundo: '#eeccad', descricao: 'Áreas públicas' },
							{ fundo: '#f5c3c6', descricao: 'Vulnerabilidade social e ZEIS disponíveis '},
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-8.png'), descricao: 'Centralidades comerciais existentes' },
							{ fundo: '#6ed0ed', linha: true, descricao: 'Córregos abertos' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-9.png'), descricao: 'Córregos tamponados' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-10.png'), descricao: 'Meandros regeneráveis' },
							{ fundo: '#00dc75', descricao: 'Parques existentes' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-11.png'), descricao: 'Parques propostos' },
							{ fundo: '#005c01', linha: true, descricao: 'Conexões locais propostas' },
							{ borda: '#ffa54c', espessura: 3, linha: true, descricao: 'Ciclopassarelas propostas' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-12.png'), descricao: 'Glebas privadas' }
						]
					}"></Imagem>
					<p>As diretrizes urbanísticas do Programa de Interesse Público nasceram a partir da caracterização urbanística dos Setores de Intervenção. Elas estão divididas entre Diretrizes Gerais, que identificam elementos comuns aos Setores e sua relação com a Política Urbana municipal, e as Diretrizes Específicas, que apontam direcionamentos preliminares para cada Setor.</p>
					<p>A estratégia adotada busca compreender as múltiplas articulações urbanas entre 2 polos: <b>(1) Polo Oeste</b> (Setores Lapa e Limão, relacionados com a OUC Água Branca) e <b>(2) Polo Nordeste</b> (Setores Santana e Vila Guilherme-Vila Maria, relacionados com o PIU Setor Central). As articulações se traduzem na previsão de novas transposições, na implantação de eixos verdes, na condução da produção imobiliária e no estabelecimento de novas conexões viárias e de transporte público. Sobre o último aspecto, a principal ação consiste em viabilizar a implantação dos Apoios Urbanos por segmentos com menor grau de complexidade técnica, trechos diretamente associados aos territórios com maior probabilidade de transformação.</p>
					<p>Considerando que (i) para a implantação dos Apoios Urbanos Norte e Sul já está garantida a reserva de área pela Lei n° 16.541/2016, e (ii) que os estudos anteriores do PIU demonstraram que devido sua complexidade, os recursos necessários para implantação dos Apoios vão muito além da expectativa de arrecadação decorrente da transformação do entorno imediato, o atual desenvolvimento dos trabalhos reconheceu a necessidade de uma nova estratégia de abordagem. Esse reconhecimento surge também a partir do desenvolvimento dos demais PIU para a MEM, em especial o PIU Arco Jurubatuba e o PIU Arco Pinheiros, que demonstraram que a transformação das grandes glebas nas planícies fluviais dos principais rios metropolitanos demanda um alto investimento em infraestrutura urbana, o que pode comprometer um escopo mais amplo de atendimento às demandas urbanísticas internas aos perímetros.</p>
					<p>Os segmentos selecionados dos Apoios Urbanos formam anéis que realizam importantes conexões intra-bairros, são viáveis de serem implantados no arco temporal do PIU Arco Tietê e estabelecem etapas intermediárias para implantação total dos Apoios Urbanos.</p>
					<p>Entre os anéis formados pelos Apoios Urbanos, novas conexões e articulações ambientais transversais são previstas, de forma a costurar e estruturar novos tecidos urbanos de bairro, ampliando as continuidades entre o norte e o sul do Arco Tietê e redefinindo, assim, os territórios de urbanização incompleta.</p>
					<h4>Diretrizes urbanísticas gerais</h4>
					<ol class="romanos">
						<li>A promoção do adensamento populacional e o aumento de postos de emprego, apoiada na infraestrutura de mobilidade existente e proposta, incentivando usos não residenciais de forma a criar novas frentes urbanas qualificadas por meio de fachadas ativas e passeios amplos;</li>
						<li>A otimização do aproveitamento de terrenos públicos, definindo-se áreas para novos Empreendimentos de Habitação de Interesse Social, equipamentos institucionais e sociais, praças e parques, bem como modernização das instalações existentes, associando-se tais medidas a programas de desenvolvimento econômico e outros empreendimentos associados;</li>
						<li>Incentivo à transformação de lotes de grande ou de pequena dimensão, através da definição de parâmetros urbanísticos e diretrizes de parcelamento ou de incentivos ao remembramento, associado ao incremento de áreas permeáveis e vegetadas e áreas para novos equipamentos institucionais e sociais;</li>
						<li>Incentivo à produção de Empreendimentos de Habitação de Interesse Social - EHIS e a realização das Zonas Especiais de Interesse Social - ZEIS do território, priorizando a aplicação de recursos na solução de questões habitacionais pré-existentes;</li>
						<li>Promoção de regularização fundiária, obras de reurbanização e melhoria das condições de habitabilidade das moradias em territórios vulneráveis, evitando deslocamentos da população de baixa renda seja nestes casos ou em para abertura de frente de obras;</li>
						<li>Promoção de estratégias para preservação e recuperação das várzeas e Áreas de Preservação Permanente (APP) do rio Tietê e de seus afluentes, implantando-se novos parques urbanos, com objetivo ambiental e de lazer, parques lineares ao longo dos cursos d’água existentes;</li>
						<li>Implantação de áreas verdes de lazer, esporte e contemplação associadas a soluções funcionais de drenagem nas áreas atualmente sujeitas a alagamento; </li>
						<li>Apoio à implantação dos corredores de transporte público coletivo de média e alta capacidade, de forma a melhor atender os fluxos atuais e preparar o território para receber o adensamento construtivo e populacional previsto; </li>
						<li>Reestruturação do sistema de mobilidade, com a implantação de melhoramentos viários estruturais que facilitem o acesso a áreas produtivas e incrementem a circulação de pessoas e mercadorias;</li>
						<li>Promoção do aumento da conectividade viária por intermédio da implementação de melhoramentos viários complementares aos estruturais e de incentivos ao parcelamento de grandes lotes;</li>
						<li>Construção de passeios amplos, da promoção de transposição de barreiras urbanas como os rios e a ferrovia, e complementação da rede cicloviária, conectando-a com outros modos de transporte e associados ao sistema de espaços públicos;</li>
						<li>Requalificação do patrimônio histórico ferroviário e industrial, permitindo-se melhores condições de inserção urbana e integração espacial com o entorno;</li>
						<li>Busca pela aplicação de conceitos de sustentabilidade no planejamento e implementação das ações, considerando a interdependência de suas esferas econômica, social e ambiental.</li>
					</ol>
					<h4>Setores Lapa e Limão</h4>
					<p class="e">kml #2</p>
					<Imagem :dados="{
						tipo: 'mapa',
						url: imgSrc('arquivos/arco-tiete/img/9.jpg'),
						titulo: 'Setores Lapa e Limão',
						legenda: [
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-1.png'), descricao: 'PIU Arco Tietê' },
							{ fundo: '#b3b3b3', borda: '#000', espessura: 2, pontilhado: true, descricao: 'Operação Urbana Consorciada Água Branca' },
							{ fundo: '#b3b3b3', borda: '#000', espessura: 2, descricao: 'PIU Setor Central' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-2.png'), descricao: 'Estação CPTM' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-3.png'), descricao: 'Estação Metrô (existente)' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-4.png'), descricao: 'Estação Metrô (prevista)' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-5.png'), descricao: 'Terminal de ônibus' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/ferrovia.png'), descricao: 'Ferrovia' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-6.png'), descricao: 'Linha Metrô' },
							{ borda: '#000', espessura: 1, pontilhado: true, char: '1', descricao: 'Setor Lapa' },
							{ borda: '#000', espessura: 1, pontilhado: true, char: '2', descricao: 'Setor Limão' },
							{ borda: '#aa405a', espessura: 3, linha: true, descricao: 'Apoios Urbanos'},
							{ borda: '#aa405a', espessura: 3, linha: true, pontilhado: true, descricao: 'Apoios Urbanos (implantação fase 2)'},
							{ borda: '#aa405a', espessura: 2, linha: true, descricao: 'Vias estruturais'},
							{ fundo: '#dadada', descricao: 'Áreas de urbanização consolidada' },
							{ borda: '#dadada', espessura: 1, descricao: 'Áreas de urbanização incompleta' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-7.png'), descricao: 'Áreas de indução da urbanização' },
							{ fundo: '#eeccad', descricao: 'Áreas públicas' },
							{ fundo: '#f5c3c6', descricao: 'Vulnerabilidade social e ZEIS disponíveis '},
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-8.png'), descricao: 'Centralidades comerciais existentes' },
							{ fundo: '#6ed0ed', linha: true, descricao: 'Córregos abertos' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-9.png'), descricao: 'Córregos tamponados' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-10.png'), descricao: 'Meandros regeneráveis' },
							{ fundo: '#00dc75', descricao: 'Parques existentes' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-11.png'), descricao: 'Parques propostos' },
							{ fundo: '#005c01', linha: true, descricao: 'Conexões locais propostas' },
							{ borda: '#ffa54c', espessura: 3, linha: true, descricao: 'Ciclopassarelas propostas' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-12.png'), descricao: 'Glebas privadas' }
						]
					}"></Imagem>
					<h5>Setor Lapa</h5>
					<p>O Setor Lapa é caracterizado pela baixa densidade populacional e pela presença da atividade industrial, notadamente o setor da confecção, em processo de transformação na direção do uso vertical residencial e de comércio e serviços. Em contraste à baixa densidade, a presença dos corredores de ônibus na Av. Ermano Marchetti, conectando Pirituba ao Centro, e na Rua Guaicurus, e das estações Lapa das Linhas 7 e 8 da CPTM, aponta para a necessidade de se otimizar a infraestrutura existente, seja a partir da integração intermodal, ou pela indução da transformação e adensando deste território. Soma-se a isso, a futura Linha 6 do Metrô, já em construção e cuja integração com a rede ferroviária está prevista junto à estação Água Branca da CPTM.</p>
					<p>As diversas áreas sujeitas à inundação, decorrentes da retificação do Rio Tietê e os baixos índices de espaços verdes por hectare exigem a elaboração de estratégias de implantação de espaços públicos que cumpram funções ambientais, como a absorção das águas pluviais e a conexão ecológica entre diferentes pontos do território. A leitura da configuração hídrica original do Rio Tietê traz subsídios para a definição de parâmetros urbanísticos e estratégias para criação de futuras áreas verdes, de modo a suprir a demanda exigida pelo adensamento populacional e construtivo previsto.</p>
					<p>Ao sul da ferrovia, a Rua Guaicurus contempla importantes equipamentos públicos de porte regional:  Poupatempo, Terminal Rodoviário, Mercado da Lapa, Subprefeitura da Lapa, Tendal da Lapa e antiga Estação Ciência, sendo os quatro últimos edifícios tombados. A existência de diversos galpões degradados ao longo da via deteriora a paisagem, mas ao mesmo tempo oferece uma oportunidade para novos usos residenciais e de serviços se instalarem na área, uma vez que se trata de um importante corredor de ônibus com proximidade às estações da CPTM.</p>
					<p>Já a área localizada ao norte do Rio Tietê, que se expande até a Rua da Balsa, é caracterizada pela presença de grandes quadras e pouca permeabilidade urbana. Atualmente, a área está em forte processo de transformação pela implantação de torres residenciais junto à Av. Raimundo Pereira Magalhães. A implantação de uma nova ponte sobre o Rio Tietê, nesta mesma via, potencializará a acessibilidade.</p>
					<p><b>Diretrizes urbanísticas específicas</b></p>
					<ol class="romanos">
						<li>Implantar parque linear ao longo dos córregos do Curtume e Tiburtino, prevendo sua recuperação, associada à promoção de novas frentes urbanas de adensamento construtivo e populacional em seus lotes lindeiros; </li>
						<li>Implantar uma ciclopassarela sobre o Rio Tietê no prolongamento da Rua Luiz Gatti, onde se encontra tamponado o Córrego do Curtume;</li>
						<li>Implantar o parque Guaicurus, contemplando a integração dos equipamentos públicos existentes (Poupatempo, Subprefeitura da Lapa, Tendal da Lapa, Mercado da Lapa e Junta Comercial do Estado de São Paulo), prevendo sua articulação com novas transposições sobre a ferrovia e com as estações de trem e terminal de ônibus existentes, visando a valorização da orla ferroviária;</li>
						<li>Promover áreas de absorção de águas pluviais associadas a soluções de paisagismo e lazer nas áreas dos antigos meandros do Rio Tietê sujeitas à inundação.</li>
					</ol>
					<h5>Setor Limão</h5>
					<p>O Setor Limão faz divisa com a OUC Água Branca, abrigando seus perímetros de integração, onde estão previstas conexões entre as margens norte e sul do rio Tietê. Uma das principais transposições é uma ciclopassarela prevista para ser implantada nas proximidades da Ponte Julio de Mesquita Neto, ancorada nas proximidades do Centro de Tradições Nordestinas. Como continuidade deste eixo, ao longo do córrego Papaterra Limongi, estão localizados diversos terrenos vagos que compõem a oportunidade de transformação urbana com caráter ambiental. Outras conexões com as mesmas características, como o córrego Água Branca, junto à favela do Sapo, e o córrego Quirino dos Santos, podem promover a integração das margens do rio associada ao desenvolvimento urbano e à recuperação dos corpos d´água.</p>
					<p>Trata-se do Setor com a maior concentração de habitações precárias e problemas de vulnerabilidade social do Arco, com famílias em favelas em diversos conjuntos habitacionais implantados a partir da década de 1990, alguns hoje degradados e carentes de espaços públicos e equipamentos de suporte. Do ponto de vista ambiental, é notável a presença de áreas sujeitas à inundação, principalmente ao longo dos antigos meandros do rio Tietê, onde hoje se encontram os conjuntos habitacionais Minas Gás e Trivelato, e ao longo do Córrego Papaterra Limongi. Já em relação à base produtiva, trata-se de um dos poucos locais do Arco onde a indústria da transformação ainda apresenta inúmeros estabelecimento e empregos.</p>
					<p>O balanço entre precariedade habitacional e oferta de ZEIS próximas à infraestrutura urbana aponta para um importante papel que pode cumprir o Setor no enfrentamento das questões habitacionais. Tal diretriz deve estar associada às ancoragens e eventuais prolongamentos dos eixos de desenvolvimento urbano previstos pela OUC Água Branca. Devem ser abordados, ainda, os problemas de alagamentos, a forte presença do emprego industrial e a importância do Centro de Tradições Nordestinas como principal equipamento do Setor.</p>
					<p><b>Diretrizes urbanísticas específicas</b></p>
					<ol class="romanos">
						<li>Implantar ciclopassarelas associadas às áreas de transposição do Rio Tietê previstas na Operação Urbana Consorciada Água Branca;</li>
						<li>Implantar melhoramentos viários ao longo do eixo da Rua da Balsa, Av. Nossa Senhora do Ó, Rua Nélson Francisco, Rua José Fiuza Guimarães até a Av. Prof. Ida Kolb, estabelecendo uma conexão intra-bairros preliminar à execução futura do Apoio Urbano Norte;</li>
						<li>Implantar novos eixos de desenvolvimento urbano associados às ciclopassarelas previstas, contemplando a recuperação ambiental dos córregos tributários e dos antigos meandros do Rio Tietê na transformação lindeira;</li>
						<li>Realizar intervenção integrada em assentamentos precários e promover Habitação de Interesse Social nas áreas públicas e ZEIS disponíveis, tendo em vista a presença da precariedade habitacional no Setor;</li>
						<li>Considerar a presença do emprego industrial no Setor, notadamente na indústria química, coibindo o desenvolvimento imobiliário em determinadas áreas onde os estabelecimentos industriais ainda estão ativos;</li>
					</ol>
					<h4>Setores Santana e Vila Guilherme-Vila Maria</h4>
					<p class="e">kml #3</p>
					<Imagem :dados="{
						tipo: 'mapa',
						url: imgSrc('arquivos/arco-tiete/img/10.jpg'),
						titulo: 'Setores Santana  e Vila Guilherme-Vila Maria',
						legenda: [
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-1.png'), descricao: 'PIU Arco Tietê' },
							{ fundo: '#b3b3b3', borda: '#000', espessura: 2, pontilhado: true, descricao: 'Operação Urbana Consorciada Água Branca' },
							{ fundo: '#b3b3b3', borda: '#000', espessura: 2, descricao: 'PIU Setor Central' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-2.png'), descricao: 'Estação CPTM' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-3.png'), descricao: 'Estação Metrô (existente)' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-4.png'), descricao: 'Estação Metrô (prevista)' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-5.png'), descricao: 'Terminal de ônibus' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/ferrovia.png'), descricao: 'Ferrovia' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-6.png'), descricao: 'Linha Metrô' },
							{ borda: '#000', espessura: 1, pontilhado: true, char: '3', descricao: 'Setor Santana' },
							{ borda: '#000', espessura: 1, pontilhado: true, char: '4', descricao: 'Setor Vila Guilherme-Vila Maria' },
							{ borda: '#aa405a', espessura: 3, linha: true, descricao: 'Apoios Urbanos'},
							{ borda: '#aa405a', espessura: 3, linha: true, pontilhado: true, descricao: 'Apoios Urbanos (implantação fase 2)'},
							{ borda: '#aa405a', espessura: 2, linha: true, descricao: 'Vias estruturais'},
							{ fundo: '#dadada', descricao: 'Áreas de urbanização consolidada' },
							{ borda: '#dadada', espessura: 1, descricao: 'Áreas de urbanização incompleta' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-7.png'), descricao: 'Áreas de indução da urbanização' },
							{ fundo: '#eeccad', descricao: 'Áreas públicas' },
							{ fundo: '#f5c3c6', descricao: 'Vulnerabilidade social e ZEIS disponíveis '},
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-8.png'), descricao: 'Centralidades comerciais existentes' },
							{ fundo: '#6ed0ed', linha: true, descricao: 'Córregos abertos' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-9.png'), descricao: 'Córregos tamponados' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-10.png'), descricao: 'Meandros regeneráveis' },
							{ fundo: '#00dc75', descricao: 'Parques existentes' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-11.png'), descricao: 'Parques propostos' },
							{ fundo: '#005c01', linha: true, descricao: 'Conexões locais propostas' },
							{ borda: '#ffa54c', espessura: 3, linha: true, descricao: 'Ciclopassarelas propostas' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-12.png'), descricao: 'Glebas privadas' }
						]
					}"></Imagem>
					<h5>Setor Santana</h5>
					<p>O Setor Santana é marcado por grandes glebas públicas, contando com parte significativa de áreas transformáveis e aptas ao parcelamento do solo. Esse conjunto é responsável por um dos principais problemas identificados: a baixa conectividade urbana provocada pela presença de grandes extensões de quadra, o que leva não só à dificuldade de articulação do sistema viário, mas principalmente às restrições de microacessibilidade do pedestre e do ciclista, dificultando a promoção de modos de mobilidade ativa.</p>
					<p>A maior parte das glebas passíveis no Setor é ocupada por equipamentos públicos, sendo algumas gravadas como ZEIS-3 e com presença de assentamentos precários com ocupação recente. Também se destacam o Anhembi e o Campo de Marte, gravadas como Zonas de Ocupação Especial (ZOE) – no primeiro caso, uma série de diretrizes urbanísticas foram especialmente dirigiras ao parcelamento do solo no Decreto nº 58.623/2019 e, no segundo, merecem destaque as funções ambientais, que devem ser garantidas em qualquer hipótese de transformação do uso aeroportuário.</p>
					<p>Já os eixos da Av. Cruzeiro do Sul e da Av. Santos Dumont, que estabelecem as conexões urbanas com a área central, recebem a principal infraestrutura de mobilidade urbana do Setor, concentrando uma significativa parcela de empregos. Essa centralidade linear tem intensificado a transformação de usos, com destaque para implantação de novas torres corporativas ao norte, no final da avenida.</p>
					<p>Em relação aos sistemas ambientais, ganha ênfase o entorno do Córrego Carandiru, onde já estão previstos novos alinhamentos na Av. Moysés Roysen e na Praça Marshiach Now, estruturando um eixo verde com a função de recompor as áreas de preservação junto ao córrego, abrir espaço para um novo dispositivo de drenagem integrado à paisagem e conectar o Parque da Juventude.</p>
					<p>Em suma, compreende-se que ainda exista grande potencial de transformação no Setor Santana, sobretudo associado às grandes glebas públicas. Enfrenta-se, desta forma, os principais problemas do Setor, como a intervenção integrada em assentamentos precários e a consequente ativação das áreas de ZEIS, as melhorias ambientais necessárias, bem como a ampliação da conectividade e da microacessibilidade urbana a partir da ruptura de grandes quadras.</p>
					<p><b>Diretrizes urbanísticas específicas</b></p>
					<ol class="romanos">
						<li>Otimização e intensificação do uso e ocupação de glebas públicas, promovendo a ruptura das grandes quadras, a ampliação da conectividade, a implantação de áreas verdes e o adensamento construtivo e populacional;</li>
						<li>Implantar os melhoramentos viários necessários para trecho do Apoio Urbano Norte, em especial a conexão da Av. Braz Leme com a Av. Gal. Ataliba Leonel;</li>
						<li>Promover o desenvolvimento urbano das áreas de ZOE do Anhembi e do Campo de Marte, contemplando a formação de uma cidade de uso misto, com especial atenção às suas funções ambientais;</li>
						<li>Qualificar as vias existentes, reformando e arborizando os passeios, em especial a Av. Santos Dumont, a Av. Olavo Fontoura e Av. Braz Leme;</li>
						<li>Promover a recuperação do Córrego Carandiru, associada à transformação das grandes glebas em suas margens, de forma a implantar um parque linear integrado com as áreas verdes de destinação;</li>
						<li>Realizar intervenção integrada em assentamentos precários e promover Habitação de Interesse Social nas áreas de ZEIS junto à Av. Zaki Narchi, associados ao parque linear previsto ao longo do córrego de Carandiru;</li>
						<li>Implantar ciclopassarelas de transposição do Rio Tietê entre as pontes existentes, conectando o futuro parque linear do Carandiru com os projetos estratégicos previstos pelo PIU Setor Central.</li>
					</ol>
					<h5>Setor Vila Guilherme-Vila Maria</h5>
					<p>O Setor Vila Guilherme-Vila Maria se estende desde as glebas públicas do Setor Santana até a barreira formada pela Rodovia Presidente Dutra. O Setor é atravessado por uma série de vias na direção norte-sul, responsáveis por estabelecer conexões com a Zona Norte – como o eixo das Av. Zaki Narchi-Otho Baumgart – mas também entre a Zona Norte e a área central, como é o caso dos eixos das Av. Joaquina Ramalho, Av. Nadir Dias de Figueiredo e a Av. Guilherme Cotching.</p>
					<p>Uma das principais características do Setor é a concentração de grandes glebas privadas e passíveis de transformação ao longo das Av. Zaki Narchi-Otho Baumgart e Av. Nadir Dias de Figueiredo. No primeiro caso, as glebas são marcadas pela presença de usos extensivos, como os Shoppings Centers e centros de logística e distribuição. Uma característica comum a estas ocupações, além do uso ativo, é a grande extensão de pátios de estacionamento, que geram um entorno árido e ruas ausentes de atributos que as tornem atrativas e seguras. No segundo caso, as glebas próximas à Av. Nadir Dias de Figueiredo, junto à foz do Córrego da Divisa, denotam um processo intenso de transformação de uso da Zona Predominantemente Industrial (ZPI-1), hoje com poucas indústrias ativas.</p>
					<p>Vislumbra-se neste Setor a sobreposição de três lógicas de desenvolvimento urbano: primeiro, a transformação associada aos eixos estruturadores da área, sendo dois existentes – o eixo das Av. Zaki Narchi-Otho Baumgart e a Av. Nadir Dias de Figueiredo, que concentram grandes glebas com usos ativos ou em processo de transformação de uso – e o futuro corredor ao longo do Apoio Urbano Norte, que ancora uma área de adensamento prevista pelo zoneamento entre a Av. Zaki Narchi e a Av. Nadir Dias de Figueiredo. Segundo, as transformações na frente do rio Tietê, articuladas com as futuras transposições que conectam o território do PIU Setor Central. Por fim, o adensamento dos eixos Av. Joaquina Ramalho e Av. Guilherme Cotching, que conectarão os Apoios Urbanos Norte e Sul e já contam com uma interessante dinâmica comercial e de serviços, formando centralidades lineares capazes de qualificar a porção central da Vila Guilherme e da Vila Maria.</p>
					<p><b>Diretrizes urbanísticas específicas</b></p>
					<ol class="romanos">
						<li>Definir estratégias de parcelamento para glebas com ocupação extensiva do solo e usos ativos ao longo da Av. Otto Baumgart, de forma a ampliar a conectividade urbana a partir da ruptura de grandes quadras e promover melhorias ambientais a partir da destinação de áreas verdes;</li>
						<li>Promover a recuperação do Córrego da Divisa, associada à transformação das grandes glebas em suas margens, de forma a implantar um parque linear integrado com as áreas verdes de destinação;</li>
						<li>Incentivar a transformação da frente urbana voltada à Marginal Tietê associada a um sistema de áreas verdes integradas de frente ao rio;</li>
						<li>Implantar ciclopassarelas de transposição do Rio Tietê entre as pontes existentes de forma articulada com as prevista no PIU Setor Central;</li>
						<li>Implantar trecho do Apoio Urbano Norte entre a Av. Zaki Narchi e a Av. Nadir Dias de Figueiredo, ativando áreas transformáveis ao longo do trajeto;</li>
						<li>Implantar bulevares, com passeios amplos e arborizados, nos principais eixos de transporte público do Setor, com ênfase para o eixo do Apoio Norte, de forma a conectar os parques Carandiru e do Trote;</li>
						<li>Incentivar o adensamento construtivo e populacional associado à implantação das futuras estações da Linha 19 do Metrô, no eixo da Av. Guilherme Cotching.</li>
					</ol>
					<h4>Setores Jaguara e Belém</h4>
					<p>Embora tenham sido identificados como áreas estratégicas para recepcionar projetos urbanos, os Setores Jaguara e Belém contam com características e condições de desenvolvimento urbano distintas se comparadas aos demais Setores.  Foi identificado que o aprofundamento dos estudos urbanísticos nesses dois casos depende ou de ações de longo prazo ou então se associam a processos de transformação em curso no entorno, em porções fora do Arco Tietê.</p>
					<h5>Setor Jaguara</h5>
					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/arco-tiete/img/11.jpg')
					}"></Imagem>
					<p>O Setor Jaguara localiza-se no extremo oeste do perímetro do Arco Tietê, limitado a norte pela Marginal, a sul pela Rodovia Anhanguera e a oeste pelo feixe de vias formado pelas Av. Alexandre Colares, Domingos de Souza Marques e Federico Felini.</p>
					<p>Caracterizado pela ocupação industrial desde sua formação, com o estabelecimento do frigorífico Armour na década de 20, e posteriormente com Refinação de Milho Brasil e Irmãos Lever, a sua classificação como zona industrial da Lei n°13.885/2004 (ZPI/0003) e da Lei n°16.402/2016 (ZPI- I). Embora o uso industrial ainda esteja presente no perímetro, o diagnóstico demonstrou que já ocorre um processo de substituição das atividades por escritórios das indústrias e por atividades de logística, como armazenamento e transporte.</p>
					<p>Importante ressaltar que a implantação do melhoramento viário dos Apoios Urbanos, definido pela Lei nº 16.541/2016 (Plano de Melhoramentos Viários do Arco Tietê), prevê o atendimento da população do Distrito de São Domingos, não havendo previsão de conexão com o Setor Jaguara. Complementa este cenário a previsão de implantação de obras de engenharia de grande porte para transposição do Rio Tietê, integrantes do processo de concessão da Rodovia Bandeirantes, sob a coordenação do Governo do Estado de São Paulo, bem como do anel perimetral composto Apoios Urbanos Norte e Sul.</p>
					<p>Considerando a proximidade com as rodovias, as obras previstas para transposição do rio, a carência de infraestrutura de mobilidade interna, a estrutura fundiária composta por grandes lotes e a desconexão com o entorno, conclui-se que a potencialidade do território permanece associada à base produtiva, ainda que em processo de transformação. Além disso, as melhorias viárias no entorno são consideradas intervenções de longo prazo, em um arco temporal distante da primeira abordagem deste PIU, que volta sua atenção aos territórios com transformação mais evidente e em curso.</p>
					<p>Portanto, entende-se que o Setor Jaguara possa ser objeto de estudo futuro, abarcando atividades relacionadas à indústria do conhecimento, ou mesmo a possível implantação de uma plataforma de logística, obviamente associada às melhorias de transporte necessárias para conexão urbana.</p>
					<h5>Setor Belém</h5>
					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/arco-tiete/img/12.jpg')
					}"></Imagem>
					<p>O Setor Belém, composto por uma porção do Distrito Belém e um trecho do Distrito de Vila Maria, é caracterizado pela concentração de áreas públicas e grandes glebas transformáveis ao sul e alta incidência de assentamentos precários adjacentes, ao norte do rio Tietê.</p>
					<p>Na etapa do diagnóstico, o perímetro de prospecção evidenciou um processo de transformação urbana nas proximidades da Av. Salim Farah Maluf até a Rua Tuiuti, no qual os lotes ocupados originalmente por galpões estão sendo rapidamente transformados para construção de empreendimentos residenciais verticais, resultando no aumento das densidades construtivas e habitacionais.</p>
					<p>Considerando a presença de áreas transformáveis, a necessidade de intervenção integrada em assentamentos precários na Vila Maria e a intensa atividade imobiliária em curso no entorno, é possível afirmar que o Setor Belém tem grande potencial para o desenvolvimento de projetos urbanos. Por outro lado, as análises iniciais demonstraram que para levar adiante os estudos urbanísticos, seria imprescindível incorporar ao Setor áreas externas ao perímetro do Arco Tietê, como as áreas com intensa produção imobiliária no Distrito do Tatuapé e o conjunto significativo de assentamentos precários na Vila Maria, ambas incluídas no Subsetor Arco Leste da MEM.</p>
					<p>Além dos elementos já levantados, uma característica muito importante dessa unidade territorial é a sobreposição de vetores formados pelos eixos da Av. Alcântara Machado, da ferrovia, da Av. Celso Garcia, das marginais e dos Apoios Urbanos Norte e Sul. Esses vetores de conexão leste-oeste da cidade tem grande impacto local e suas interferências devem ser estudadas em conjunto. Cabe ressaltar também que o plano de melhoramentos viários definido pela Lei n° 16.541/2016 já definiu as áreas necessárias para implantação de melhoramentos capazes de promoverem conexões e integrações viárias necessárias entre esse trecho do Arco Leste, do Arco Tietê e do PIU Setor Central.</p>
					<p>Portanto, pelas razões apresentadas, acredita-se que o Setor Belém deverá ser escopo de estudos específicos que incorporem as dinâmicas e os elementos físico-territoriais do Arco Leste, estratégia que considera o natural aprofundamento das análises da MEM a partir do reconhecimento de dinâmicas próprias do território.</p>
				</section>
				<section>
					<h3 class="titulo" indent="2">Viabilidade de transformação e adensamento</h3>
					<p>Entre os elementos que compõem o diagnóstico do território, suporte para a definição de diretrizes urbanísticas, está a avaliação da viabilidade da transformação do solo urbano. A reutilização do solo para novos usos, principalmente para o adensamento residencial e comercial, depende de alguns fatores. O primeiro deles é a demanda por insumos promovida pela produção imobiliária. A indústria imobiliária lança anualmente no mercado uma determinada quantidade de área construída, seja na forma de unidades habitacionais ou de lajes corporativas, oferta que depende, entre outras coisas, da disponibilidade de terrenos e de potencial construtivo adicional, principais insumos aqui considerados.</p>
					<p>Para o perímetro revisto do Arco Tietê, ou seja, excluindo-se as regiões colocalizadas do PIU Setor Central e da Operação Urbana Consorciada Água Branca, a projeção média de lançamento anual de área útil para os próximos 20 anos é de 136 mil metros quadrados, dos quais 113 mil se referem à área construída computável. Considerando que essa área computável seja distribuída no território sob um coeficiente de aproveitamento de 4,0 vezes o tamanho do lote, tal quantia representa uma demanda mínima de 28 mil metros quadrados de terreno. Tal demanda aumenta à medida que se define Coeficientes de Aproveitamento menores para o território, mas o desejo de se conduzir a transformação de forma associada aos eixos de transporte leva à adoção preliminar de índices urbanísticos condizentes com a infraestrutura ofertada.</p>
					<Imagem :dados="{
						tipo: 'default',
						url: imgSrc('arquivos/arco-tiete/img/13.jpg'),
						caption: 'Área útil realizada e estimada (m²)'
					}"></Imagem>
					<p>A produção imobiliária pode ser subdividida no território do Arco Tietê segundo subprefeituras e, para cada uma delas, repartindo a seção de dentro e de fora dos seis Setores definidos anteriormente. Observa-se que a subprefeitura da Lapa apresentou o maior volume de lançamentos por metro quadrado de área útil entre os anos de 2000 e 2017, 38,1%, sendo 23,4% fora dos limites do Setor 01 e 14,7% dentro dele. Em seguida, a produção imobiliária é bem distribuída entre as subprefeituras ao norte do Rio Tietê, Casa Verde-Cachoeirinha (17,4%), Vila Maria-Vila Guilherme (14,7%), Pirituba-Jaraguá (13,6%) e Santana-Tucuruvi (13,4%). Ao todo 64,9% do volume de lançamentos ocorreu fora do perímetro assinalado dos Setores, confirmando a atuação do mercado em áreas mais consolidadas que oferecem maiores elementos de urbanidade para famílias e firmas, situadas essas na franja do PIU Arco Tietê.</p>
					<p class="e">tabela #1</p>
					<p>Um segundo fator a ser considerado para avaliar a propensão à transformação dos terrenos é a condição de oferta do insumo, em particular a disponibilidade de terrenos com usos e tamanhos adequados à incorporação imobiliária. Lotes vagos, garagens, galpões e usos residenciais e comerciais horizontais facilitam a viabilidade de empreendimentos imobiliários. Além disso, lotes maiores, acima de 500 metros quadrados, também favorecem o processo de transformação.</p>
					<p>Tomando estes dois filtros de uso e tamanho dos lotes, observa-se que o território em análise ainda possui uma grande quantidade de áreas transformáveis. De acordo com a Tabela abaixo, dos 22,5 milhões de metros quadrados de área total de lotes presentes nos limites do PIU Arco Tietê, pouco menos da metade, 10,3 milhões de metros quadrados, apresentam boas condições para a incorporação, o que representa uma taxa de transformação no agregado de 46%. Se a demanda por terrenos para os próximos 20 anos, segundo as projeções, é de aproximadamente 565 mil metros quadrados, a oferta de lotes transformáveis atende com larga margem a demanda para incorporação na região.</p>
					<p>A subprefeitura com maior oferta de áreas transformáveis é a Vila Maria-Vila Guilherme, com 38,8% do total, seguida da Lapa (26,1%) e Casa Verde-Cachoeirinha (12,2%). Inversamente ao vetor de demanda, a oferta de áreas transformáveis se concentra mais próxima à várzea do Rio Tietê. Assim, os Setores de Análise e Proposição respondem por 76,7% dessa oferta.</p>
					<p class="e">tabela #2</p>
					<p>É diante desse cruzamento de forças de demanda e de oferta que se define a distribuição espacial da produção imobiliária. De um lado, consumidores tradicionalmente desejam se estabelecer em regiões próximas a sua rede de relações familiares ou profissionais. Quanto mais próxima de áreas consolidadas maior a atratividade dos terrenos. Por outro lado, o incorporador depende da oferta do insumo terra para sua atividade e, conforme enfrenta escassez em locais específicos, ruma para vizinhanças com maior disponibilidade de áreas transformáveis.</p>
					<p>Para avaliar a propensão à transformação dos lotes inseridos no perímetro do PIU Arco Tietê, foi construído um indicador que incorpora esses dois elementos. Primeiramente, foi calculado um índice de atratividade das quadras baseada numa razão entre a produção atual medida em metros quadrados de área útil e a distância a essa produção (um clássico modelo gravitacional, massa sobre distância). Quanto maior a proximidade à produção/consumo atual de área útil, maior a atratividade das quadras para o mercado imobiliário sob a perspectiva da demanda.</p>
					<p>O resultado pode ser visto no mapa abaixo. Os lançamentos representados em lilás servem de proxy para a atual demanda do mercado. As quadras mais próximas à produção/consumo apresentam valores mais próximos a 1 e, à medida que se afastam dos lançamentos, assumem valores mais próximos a 0. Conforme esperado, as quadras na franja do PIU Arco Tietê apresentam o maior índice de atratividade atual do mercado, bolsões de produção e consumo de área útil ocorrem na Vila Romana (Lapa), Casa Verde, Santana e Barra Funda, embora esse último esteja a sua maior parte no perímetro da Operação Urbana Consorciada Água Branca.</p>
					<p class="e">img #13</p>
					<p>O segundo fator de construção do indicador de viabilidade da transformação é construído a partir da perspectiva da oferta. Cada quadra assume um valor entre 0 e 1, sendo 0 a taxa de transformação mínima, na qual toda a área da quadra é não transformável, e 1 a taxa de transformação máxima, onde toda a área da quadra é transformável. Como pode se observar no mapa abaixo, as regiões de várzeas assumem os maiores valores, significando que essas regiões apresentam a maior disponibilidade de terras transformáveis para a incorporação imobiliária. Assim, o maior volume de áreas transformáveis, situa-se dentro dos Setores de Análise e Proposição, destacando-se os Setores Lapa (1), Limão (2), Vila Guilherme-Vila Maria (4) e Belém (6).</p>
					<p class="e">img #14</p>
					<p>A partir da composição do índice de atratividade e da taxa de transformação se constrói o indicador de viabilidade da transformação (IVT). Como outros indicadores, o IVT é calculado pela média simples de um conjunto de variáveis com intervalo de 0 a 1. Nesse caso, uma variável de demanda e outra de oferta. O regramento urbanístico – Coeficiente de Aproveitamento, gabarito, etc – também tem influência sobre a propensão a transformação do solo. Contudo, o Programa de Interesse Público antecede a definição do regramento, visto que objetiva justamente a caracterização do território, e assim, subsidiar futuramente as diretrizes urbanísticas nas próximas etapas de desenvolvimento do PIU. Desse modo, o IVT inicial incorpora apenas os dois primeiros elementos.</p>
					<p>No mapa abaixo, apresenta-se o IVT por quadras dentro do perímetro do PIU Arco Tietê. O resultado aponta para um comportamento de borda. As regiões menos consolidadas e próximas à produção atual apresentam os maiores propensões à transformação. Entre essas, destacam-se os Setores Lapa (1), Limão (2) e Vila Guilherme-Vila Maria (4). As regiões com alta produção atual, mas com estrutura fundiária consolidada, ainda deverão ser alvo da indústria imobiliária, mas em ritmo menor, apresentando uma propensão a transformação moderada. Já as regiões com baixa atratividade atual e baixas taxas de transformação devem permanecer fora do alvo da indústria imobiliária.</p>
					<p class="e">img #15</p>
					<p>Partindo da verificação de que a oferta de lotes transformáveis atende com larga margem a demanda de incorporação na região para os próximos 20 anos, e que as regiões menos consolidadas, nas quais se verifica um processo de urbanização incompleto (grandes glebas, áreas mais próximas ao Rio Tietê, correspondentes aos antigos meandros do rio), foram identificadas com maior viabilidade de transformação, caberá ao projeto de intervenção urbana, ao definir seu regramento urbanístico, conduzir o desenvolvimento urbano de forma assertiva e concentrada.</p>
					<p>Nesse modelo de transformação, busca-se por novas áreas ou eixos de adensamento populacional e construtivo atrelados à regeneração ambiental do território e apoiados na infraestrutura existente e proposta, de forma a promover novas centralidades de uso misto e o ordenamento da paisagem. Desta forma, evita-se o modelo de transformação dispersa, no qual não há complementaridade entre os empreendimentos e tampouco se promove a dinâmica e a paisagem urbana desejadas.</p>
					<p>Nesse sentido, embora não seja possível estimar o adensamento demográfico específico dos Setores, uma vez que não foram definidos os parâmetros urbanísticos para o território, é importante destacar o desejo de promover dentro deles um processo de transformação urbana concentrado, onde os objetivos econômicos, sociais e ambientais estejam conjugados.</p>
				</section>
				<section>
					<h3 class="titulo" indent="2">Impactos esperados</h3>
					<p>No período de divulgação do empreendimento pode haver impacto de geração de expectativa, ansiedade e insegurança na população, relativo às possíveis desapropriações necessárias, impacto considerado de curto prazo, que poderá ser mitigado através de canal de comunicação para divulgação do empreendimento de forma didática.</p>
					<p>Cabe ressaltar que o PIU Arco Tietê tem como impacto positivo a introdução do conceito de gestão participativa para as intervenções naquele território, a partir da criação de um Grupo Gestor, que contará com a participação da sociedade civil na definição das prioridades, no acompanhamento, aprimoramento e aprovação dos planos e projetos urbanísticos propostos. Contudo, em que pese o ganho com a adoção de um sistema de participação social nas tomadas de decisão para a priorização das intervenções, este amplia o tempo do processo decisório.</p>
					<h4>Impactos decorrentes das diretrizes do projeto</h4>
					<ul>
						<li>
							<p><b>Adensamento e intensificação do uso do solo (Diretriz I)</b></p>
							<p>O incentivo ao adensamento construtivo, populacional, uso misto e aumento de postos de emprego, apoiado na infraestrutura de mobilidade existente e proposta, promoverá impactos ambientais positivos promovendo desenvolvimento urbano, incremento da ação do mercado imobiliário, oscilação do valor dos imóveis, aumento da arrecadação tributária, geração de empregos, redução de tempo de deslocamento e melhoria da qualidade de vida da população.</p>
							<p>Entretanto, o incentivo ao adensamento também promoverá impactos negativos como, aumento da demanda por serviços públicos, pressão por equipamentos de saúde e educação e a demanda por infraestrutura, que deverão ser mitigados através do monitoramento da capacidade de atendimento dos equipamentos públicos de saúde e educação, em função da necessidade detectada pelas respectivas Secretarias, mantendo o Grupo Gestor informado quanto à prioridade de ampliação das redes de atendimento públicas e as concessionárias das perspectivas de adensamento. Também contribuirão para um impacto no nível de serviço de tráfego reduzindo a fluidez, aumento da demanda por estacionamento em vias públicas, impacto na conectividade em âmbito local, impactos na conectividade intersetorial, que estão sendo mitigados através de abertura ou alargamento da malha viária existente para a reconfiguração urbana do entorno imediato e de vias de passagem. Implicam ainda no aumento na demanda por infraestrutura de transporte não motorizado, que está sendo mitigado pela estruturação de uma rede de apoio ao transporte cicloviário e ao pedestre, conectada ao sistema de transportes coletivos metro-ferroviários, através da implantação de ciclovias.</p>
						</li>
						<li>
							<p><b>Transformação de glebas e otimização dos terrenos públicos (Diretrizes II e III)</b></p>
							<p>O adensamento populacional, construtivo, o parcelamento do solo, a reestruturação do viário e a destinação de parte dos recursos arrecadados para a produção de Habitação de Interesse Social, preferencialmente para a população de baixa renda residente no perímetro, promoverão impactos positivos alterando a paisagem, reduzindo o tempo de deslocamento, melhorando a qualidade de vida, incrementando a ação do mercado imobiliário e promovendo valorização dos imóveis.</p>
							<p>Também geram impactos negativos por aumento da demanda por serviços públicos e pressão por equipamentos de saúde e educação, aumento da demanda de infraestrutura, impacto no nível de serviço de tráfego, aumento da demanda por estacionamento em vias públicas, impacto na conectividade em âmbito local e intersetorial, aumento na demanda por infraestrutura de transporte não motorizado, impactos que serão mitigados por meio de destinação de parte dos recursos arrecadados para áreas verdes, microdrenagem, equipamentos públicos, mobilidade e gestão do projeto.</p>			
						</li>
						<li>
							<p><b>Intervenção em assentamentos precários e produção habitacional (Diretrizes IV e V)</b></p>
							<p>Diretriz que gera impactos positivos através do incremento de habitação de interesse social e aumento da qualidade de vida da população de baixa renda, incremento da ação do mercado imobiliário e oscilação do valor dos imóveis, melhoria da qualidade de vida da população e aumento da arrecadação tributária.</p>
							<p>Também gera impactos negativos por aumento da demanda por serviços públicos e pressão por equipamentos de saúde e educação, aumento da demanda de infraestrutura, impacto no nível de serviço de tráfego, aumento da demanda por estacionamento em vias públicas, impacto na conectividade em âmbito local e intersetorial, aumento na demanda por infraestrutura de transporte não motorizado. Impactos que poderão ser mitigados através do monitoramento da capacidade de atendimento dos equipamentos públicos de saúde e educação, acompanhamento da necessidade de equipamentos junto às Secretarias de Saúde e Educação, indicação ao Grupo Gestor da necessidade de ampliação das redes de atendimento, mantendo as concessionárias de serviços informadas da previsão de adensamento, aumento da infraestrutura viária através de ações e intervenções que objetivem a melhoria da fluidez do tráfego na região e implantação de ciclovias conectadas ao sistema de transportes coletivos metro-ferroviários.</p>
						</li>
						<li>
							<p><b>Mobilidade urbana (Diretrizes VIII, IX, X e XI)</b></p>
							<p>Esta diretriz incrementa a ação do mercado imobiliário e a oscilação do valor dos imóveis, melhora a qualidade de vida da população, promove o aumento da arrecadação tributária, implanta ciclovias interligadas à malha cicloviária existente, promove melhoria da qualidade de vida da população e o uso de meio de transporte sustentável.</p>
							<p>Os impactos negativos previstos pela implantação desta diretriz estão correlacionados à alteração da qualidade do ar e ruído pelo aumento de tráfego nos locais de implantação, que podem ser mitigados através do afastamento das áreas residenciais das vias de maior fluxo de veículos através do alargamento e arborização das calçadas e redução do limite de velocidade dos veículos.</p>
						</li>
						<li>
							<p><b>Áreas verdes e drenagem (Diretrizes VI e VII)</b></p>
							<p>A implantação de áreas verdes, através da introdução de novos parques lineares, praças e calçadas verdes, contribuirá para alterar o microclima local, reduzindo a temperatura de superfície, elevando a umidade relativa, melhorando a qualidade do ar, elevando a absorção das águas pluviais com consequente redução da vazão às galerias e córregos, reduzindo áreas de inundação, promovendo abrigo, recursos alimentares e maior disponibilidade de micro habitats para avifauna urbana, introduzindo novas áreas de lazer públicas, mudando a paisagem, contribuindo para a melhoria da qualidade de vida e conforto ambiental da população.</p>
							<p>O acréscimo de áreas verdes gera impactos positivos alterando o microclima local, melhorando a temperatura de superfície, aumentando a umidade relativa, aumentando o percentual de áreas permeáveis reduzindo a vazão de águas pluvias, auxiliando na eliminação das áreas de inundação, melhorando a qualidade do ar, oferecendo maior disponibilidade de micro habitats para avifauna urbana, maior disponibilidade de áreas de lazer, melhora da qualidade de vida e de conforto ambiental da população e melhoria da paisagem.</p>
							<p>Durante a fase de obra, as implantações das áreas verdes estarão sujeitas a impactos negativos devido à alteração da paisagem durante a fase de implantação e às ações de movimentação e exposição do solo que podem torná-lo vulnerável ao impacto abrasivo da chuva, promovendo a instalação de novos processos erosivos por exposição temporária do solo.</p>
						</li>
						<li>
							<p><b>Patrimônio (Diretriz XII)</b></p>
							<p>A demolição de imóveis, movimentação de terra, alterações no viário e implantação de construções da engenharia civil, podem causar remobilização, soterramento, destruição parcial ou total de sítios arqueológicos, como também podem causar risco de interferência no patrimônio histórico tombado, não tombado e em processo de tombamento, impactos que deverão ser mitigados através de monitoramento e controle das intervenções próximas a bens imóveis representativos e pela implantação de Programa de Prospecção Arqueológica Intensivo nos compartimentos ambientais de maior potencial arqueológico inseridos no perímetro.</p>
						</li>
					</ul>
					<h4>Impactos decorrentes das diretrizes do projeto</h4>
					<p>A cada nova obra, além do impacto positivo da geração de emprego, há impactos negativos:</p>
					<ul>
						<li>Alterações no trânsito de conectividade em âmbito local;</li>
						<li>Alteração da qualidade do ar, devido à poeira proveniente de demolições e escavações, que provoca ou que podem ser depositadas sobre as superfícies vegetais;</li>
						<li>Elevação dos níveis de ruído provocado pela alteração de tráfego na região e pela operação de máquinas;</li>
						<li>Alteração da qualidade ambiental do solo, águas superficiais e subterrâneas e presença de fauna sinantrópica nociva.  provocados pela implantação de canteiros de obras, bota-fora, serviços de terraplenagem, escavações, sondagens, fundações, manutenção, operação e abastecimento de veículos e equipamentos;</li>
						<li>Riscos de ocorrências de vibrações induzidas no solo, devido a estruturas da construção civil, associadas às condições do terreno, eventuais detonações e utilização de maquinário de alto impacto;</li>
						<li>Remoção de indivíduos arbóreos, e  afugentamento da avifauna;</li>
						<li>Remobilização, soterramento e destruição parcial ou total de sítios arqueológicos e/ou interferência no patrimônio histórico;</li>
					</ul>
					<p>Impactos que deverão ser monitorados e mitigados através de Programas Ambientais a serem implementados, em cada obra, e que permitam acompanhamento de todas as fases de implantação das intervenções.</p>
				</section>
				<section>
					<h3 class="titulo" indent="2">Modelo de gestão democrática</h3>
					<p>A gestão democrática é parte fundamental da democracia participativa e representativa pactuada entre os estes federativos por meio da Constituição de 1988. Na agenda urbana, a participação popular integrante do Estatuto da Cidade (Lei Federal nº 10.257/2001) se consolida no Plano diretor Estratégico – PDE (Lei Municipal nº 16.050/2014) por meio do capítulo de Gestão Democrática, que tem por objetivo fortalecer a participação popular nas decisões dos rumos da cidade, em um processo permanente, descentralizado e participativo de planejamento. Ela garante a participação de representantes dos diferentes segmentos da população, diretamente ou por intermédio de associações representativas, nos processos de planejamento e gestão da cidade, de realização de investimentos públicos e na elaboração, implementação e avaliação de planos, programas e projetos de desenvolvimento.</p>
					<p>O art. 136 do PDE determina que projetos de intervenção urbana devam estabelecer os “instrumentos para a democratização da gestão da elaboração e implementação dos projetos de intervenção urbana, com mecanismos de participação e controle social”. Ainda, aponta que o Sistema Municipal de Planejamento – ao qual o Plano Diretor e seus instrumentos se inserem – deva assegurar “a participação direta da população em todas as fases de planejamento e gestão democrática da cidade garantindo as instâncias e instrumentos necessários para efetivação da participação da sociedade na tomada de decisões, controle e avaliação da política” (PDE, art. 319).</p>
					<p>Complementarmente, o Decreto Municipal nº 56.901/2016, dispõe sobre os procedimentos para elaboração dos projetos de intervenção urbana definindo suas etapas de elaboração e os produtos resultantes, os procedimentos legais bem como os momentos de participação popular.</p>
					<p class="e">img #16</p>
					<p>A etapa atual de divulgação dos <b>Elementos Prévios à elaboração do PIU</b>, ou seja, do Diagnóstico da área objeto da intervenção e de um Programa de Interesse Público, configura o início da participação popular no processo de elaboração do PIU Arco Tietê. Somente após o acolhimento das contribuições pertinentes o projeto é encaminhado para SMDU que autoriza seu desenvolvimento considerando sua aderência à política de desenvolvimento urbano do município.</p>
					<p>Nas etapas subsequentes, a participação popular prossegue em diferentes modalidades, de forma a identificar os problemas e anseios dos que vivenciam o território de projeto, refletindo as necessidades específicas da população atualmente residente e trabalhadora, bem como ao perfil de adensamento populacional e de geração de emprego e renda que se pretende com o PIU. As contribuições originadas das diversas discussões, quando pertinentes, são incorporadas ao projeto e a minuta de Projeto de Lei.</p>
					<ul>
						<li>Fase de <b>Desenvolvimento do PIU</b>, quando se dá a elaboração da sua proposta consolidada que conterá a definição do perímetro de intervenção, as características básicas da proposta, o programa de intervenções, o regramento urbanístico, os custos das intervenções, o modelo de financiamento, a modelagem jurídica, e o modelo de gestão democrática: realização de <b>diálogos setoriais</b>, tanto junto ao setor público através de reuniões e grupos de trabalhos com as secretarias cuja competência seja pertinente ao trabalho, como com a sociedade civil através de reuniões com associações de moradores, ONGS que atuam no território, representantes dos setores produtivos entre outros atores identificados;</li>
						<li><b>Versão Completa do PIU</b>, contendo a proposta consolidada: realização de nova <b>Consulta Pública</b> na internet através do site Gestão Urbana; realização de apresentação e discussão junto aos <b>Conselhos Municipais Setoriais</b> e <b>Câmaras Técnicas Municipais</b>, compostos por representantes do poder público e sociedade civil: Conselho Municipal de Política Urbana – CMPU, Câmara Técnica Legislação Urbanística – CTLU e outros; e realização de <b>Audiências Públicas</b> no próprio território do projeto;</li>
						<li><b>Minuta do Projeto de Lei</b>, que contem as regras, os incentivos, define o instrumento urbanístico, apresenta o programa de intervenções: realização de <b>Consulta Pública</b> na internet através do site Gestão Urbana.</li>
					</ul>
					<p>Além da participação popular nas etapas de elaboração do PIU a minuta encaminhada ao Executivo e posteriormente à Câmara Municipal conta mais uma vez com a participação popular através da realização de audiências públicas seguindo os ritos do Legislativo, necessárias para aprovação da lei.</p>
					<p>Aprovada a lei, a participação popular ainda prossegue no processo de implantação através do Conselho Gestor, cuja composição deverá prever representação paritária entre sociedade civil e demais representantes do setor público, equilibrando os interesses imobiliários e sociais. Criado o Conselho Gestor, caberá à coordenação à Secretaria de Desenvolvimento Urbano – SMDU, com a participação de órgãos municipais e de entidades representativas da sociedade civil, tendo a competência de instruir e auxiliar a implantação do Programa de Intervenções, monitorar o desenvolvimento e propor programas e estratégias que possam aprimorar o projeto, enquanto que a SP-Urbanismo ficará a cargo de promover a implantação do Programa de Intervenções do PIU Arco Tietê, avaliar a evolução dos processos e poderá contar com a colaboração dos órgãos e entidades municipais para o desempenho de suas funções específicas.</p>
					<p class="e">img #17</p>
					<p>Um ponto muito importante que deve ser destacado é a participação dos <b>Conselhos Gestores de ZEIS</b>, a serem compostos por representantes dos moradores, do Executivo e da sociedade civil organizada, para participar da formulação e implementação das intervenções a serem realizadas em suas áreas (Art. 48, PDE). A iniciativa de implantação de quaisquer intervenções do PIU Arco Tietê nas ZEIS 1 e ZEIS 3, quando habitadas por população de baixa renda, será precedida do respectivo Plano de Urbanização e Projeto de Intervenção e de sua aprovação pelo Conselho Gestor, lembrando que compete à Secretaria Municipal da Habitação - SEHAB a constituição destes conselho.</p>
				</section>
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
				<b>Marcelo Fonseca Ignatios</b><br>
				Superintendência de Estruturação de Projetos
			</p>
			<p>
				<b>Análise Urbanística</b><br>
				Ana Claudia Rocha Bonfim<br>
				Anna Carvalho de Moraes Barros (coordenação)<br>
				Eduardo Tavares de Carvalho<br>
				Kaique Xavier da Silva (estágio)<br>
				Laísa Bócoli Chamme<br>
				Marlon Rubio Longo<br>
				Rafael Giorgi Costa<br>
				Sônia da Silva Gonçalves
			</p>
			<p>
				<b>Análise Ambiental</b><br>
				Waldir Macho de La Rubia
			</p>
			<p>
				<b>Análise Econômica</b><br>
				Alan Americo da Silva (estágio)<br>
				Allan Martino Matos<br>
				Bruno Martins Hermann<br>
				Gabriel Vasquez Rodriguez
			</p>
			<p>
				<b>Design Gráfico</b><br>
				Thomas Len Yuba<br>
				Davi Masayuki Hosogiri (estágio)
			</p>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Imagem from '@/components/Imagem'
import Mapa from '@/components/Mapa'
import LayerExplorer from '@/components/LayerExplorer'
import processo from '@/components/graf/arco-tiete/processo'
// import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'ArcoTiete',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},

			seq1: {
				cssBaseId: 'seq1',
				tipo: 'sequencial',
				mapW: 1900,
				mapH: 1125,
				base: {
					path: 'https://placehold.it/1900x1125',
					legendas: [
						{ path: 'https://placehold.it/16x16', descricao: 'Legenda 1' },
						{ path: 'https://placehold.it/16x16', descricao: 'Legenda 2' },
						{ path: 'https://placehold.it/16x16', descricao: 'Legenda 3' }
					]
				},
				layers: [{
					titulo: 'PIU Anhembi',
					tituloLegendas: 'Densidade demográfica',
					path: 'arquivos/arco-tiete/img/4-0.png',
					legendas: [
						{ path: 'https://placehold.it/16x16', descricao: 'Legenda 1' },
						{ path: 'https://placehold.it/16x16', descricao: 'Legenda 1' },
						{ path: 'https://placehold.it/16x16', descricao: 'Legenda 1' },
						{ path: 'https://placehold.it/16x16', descricao: 'Legenda 1' },
						{ path: 'https://placehold.it/16x16', descricao: 'Legenda 1' },
					],
					textos: {
						'O que é': 'definição de parâmetros e diretrizes urbanísticas para a Zona de Ocupação Especial (ZOE) Anhembi (Sambódromo e Complexo do Anhembi - Perímetro de Abrangência) e de programa de intervenções para o Perímetro Expandido.',
						'Objetivo': 'qualificação urbanística e paisagística da área, de forma que os percentuais de destinação pública obrigatória originados do processo de parcelamento das glebas contribuam para integrar os territórios da ZOE Anhembi com o entorno; Ampliação da acessibilidade ao complexo do Anhembi; Realização de ações integradas e intersetoriais que envolvem habitações precárias, recuperação de córregos, abertura de viário e implantação de novas áreas verdes; Ampliação da conectividade urbana entre os bairros da Zona Norte e o fluxo dos corredores de ônibus.',
						'Motivação': 'alienação da participação societária detida pelo Município de São Paulo na São Paulo Turismo, conforme Plano Municipal de Desestatização.',
						'Regulações': 'Lei Municipal n°16.766/2017, Lei Municipal n° 16.886/2018, Decreto Municipal nº 58.623/ 2019.',
						'Considerações para o PIU Arco Tietê': 'Considerar o Perímetro de Abrangência do PIU Anhembi como território de projeto específico; Estudar alternativa para compartilhamento dos recursos com o PIU Arco Tietê, visando à implantação efetiva das intervenções bem como alternativas para gestão integrada da implantação das intervenções previstas em ambos; Retomar o tema da atualização do Valor de Cadastro do Quadro 14 do PDE, frente à valorização da terra nos últimos anos; Reavaliar intervenções e diretrizes urbanísticas previstas para os Projetos Estratégicos localizados na Zona Norte previstos pelo PL nº581/2016 e não contempladas no PIU Anhembi; Considerar na revisão do PIU Arco Tietê os estudos e adequações viárias necessárias para implantação das melhorias previstas no Programa de Intervenções do PIU Anhembi.'
					}
				}, {
					titulo: 'PIU Setor Central',
					path: 'arquivos/arco-tiete/img/4-1.png',
					legendas: [
						{ path: 'https://placehold.it/16x16', descricao: 'Legenda 1' }
					],
					textos: {
						"O que é": "adequação do instrumento vigente (Operação Urbana Centro) às novas exigências da Lei Federal nº 10.257/2001 e novas exigências e objetivos do PDE, conformando novos contornos urbanísticos para o instrumento em vigor",
						"Objetivo": "otimização da infraestrutura existente, principalmente a partir de novas articulações com o sistema de transporte coletivo e a provisão de habitação de interesse social, considerando a relação de complementaridade entre os distritos do Centro histórico e os distritos adjacentes – os chamados bairros centrais – conformando uma área com vasta oferta de infraestrutura urbana e a concentração de funções e usos centrais e de alcance metropolitano",
						"Motivação": "revisão da Operação Urbana Centro (OU Centro), conforme PDE",
						"Regulações": "Lei Municipal nº 12.349/1997",
						"Considerações para o PIU Arco Tietê": "Retirar do escopo do PIU Arco Tietê as intervenções presentes no Programa de Intervenções do Perímetro do PIU Setor Central, que serão por ele financiados; Reestudar os perímetros da AIU Apoios Urbanos e da AIU Centralidade da Metrópole em função da sobreposição com o PIU Setor Central.",
						"Obs": "Projeto em curso, deverá resultar em Projeto de Lei."
					}
				}, {
					titulo: 'PIU Terminal Princesa Isabel',
					path: 'arquivos/arco-tiete/img/4-3.png',
					legendas: [],
					textos: {
						'O que é': 'indicação de perímetro e diretrizes que orientarão a transformação urbanística pretendida',
						'Objetivo': 'implantação de melhorias urbanísticas no terminal de ônibus e seu entorno de forma a garantir seu pleno funcionamento, bem como potencializar as atividades comerciais na área; requalificar o uso residencial, acrescentar novos espaços e equipamentos públicos de qualidade, assim como apresentar modelo de financiamento e gestão do projeto',
						'Motivação': 'redução do custeio dos terminais de ônibus, concedendo-os a agentes privados para operação e exploração econômica, conforme Plano Municipal de Desestatização',
						'Regulações': 'Lei Municipal nº 16.211/2015, Decreto Municipal nº 58.368/2018',
						'Considerações para o PIU Arco Tietê': 'Retirar do escopo da revisão a Área de Transformação Condicionada Campos Elíseos, indicada anteriormente no PL nº581/2016'
					}
				}, {
					titulo: 'PIU Parque Minhocão',
					path: 'arquivos/arco-tiete/img/4-4.png',
					legendas: [],
					textos: {
						'O que é': 'conjunto de estudos técnicos, processos participativos  e discussões públicas para proposição das intervenções urbanas que constituirão a implantação do Parque Minhocão',
						'Objetivo': 'alteração do uso e formas de apropriação desse espaço',
						'Motivação': 'gradual restrição ao transporte individual motorizado no Elevado João Goulart, até sua completa desativação como via de tráfego, tendo como possibilidades a sua demolição ou transformação, parcial ou integral, em parque, conforme PDE',
						'Regulações': 'Lei nº 16.833/2018',
						'Considerações para o PIU Arco Tietê': 'Retirar do escopo da revisão a Área de Transformação Condicionada Elevado João Goulart, indicada anteriormente no PL nº581/2016',
						'Obs': 'Projeto em curso'
					}
				}, {
					titulo: 'Resolução da Câmara Técnica De Legislação Urbanística (CTLU)',
					path: 'arquivos/arco-tiete/img/4-5.png',
					legendas: [],
					textos: {
						'Descrição': 'Trata-se de deliberação da Câmara Técnica de Legislação Urbanística (CTLU) favoravelmente à aplicação do Coeficiente de Aproveitamento máximo igual a 4, dispensa de atendimento ao gabarito máximo de altura e fatores de planejamento igual a 2 para os usos residenciais e não residenciais para os lotes demarcados como ZEM e ZEMP contidos no perímetro do Arco Tietê , nos termos do  §1º, §2º e §3º do Art. 8º da Lei nº 16.402/ 2016; Para as ZEMP, os parâmetros e índices estabelecidos serão aplicados desde que atendidos o Art. 83 da Lei nº 16.050/2014, o qual é responsável por condicionar a liberação dos parâmetros em função da emissão da Ordem de Serviços das obras das infraestruturas do sistema de transporte previsto',
						'Regulações': 'Resolução SMUL.AOC.CTLU/004/2018',
						'Considerações para o PIU Arco Tietê': 'Retomar os estudos para as Áreas de Transformação, Qualificação e Preservação do PIU Arco Tietê, de forma a refinar os parâmetros que são fruto de análises detalhadas do território, em especial nos perímetros que recepcionarão os instrumentos urbanísticos'
					}
				}, {
					titulo: 'Código de Obras e Edificações (COE)',
					path: 'arquivos/arco-tiete/img/4-6.png',
					legendas: [],
					textos: {
						'Descrição': 'Os novos regramentos urbanísticos contidos no Art. 102 e Art. 103 da Lei nº 16.642/2017 e no Art. 97 do Decreto nº 57.776/2017, alteram a validade de uma série de alinhamentos viários necessários para a implantação das diretrizes do PL nº 581/2016, impactando ações relativas à mobilidade urbana do seu Programa de Intervenções. Outra implicação do COE é a possibilidade de utilização do potencial construtivo do lote original, conforme §1º do Art. 107 da Lei nº 16.642/2017. Essa disposição é de grande importância para o PIU Arco Tietê visto que seu plano de melhoramentos viários acarreta em grandes áreas de desapropriações, sobretudo no caso dos principais eixos, como os Apoios Urbanos',
						'Regulações': 'Lei Municipal nº 16.642 /2017 e Decreto Municipal nº 57.776/2017',
						'Considerações para o PIU Arco Tietê': 'Incluir na revisão do Arco Tietê os trechos de melhoramentos viários anteriores a 1988 considerados essenciais às estratégias de mobilidade do PIU, bem como dar continuidade às propostas de alteração de trechos da Lei nº 16.541/2016, resultantes do processo de desenvolvimento das AIU no PIU Arco Tietê; Incluir nos estudos de financiamento do PIU Arco Tietê as disposições trazidas pela Lei nº 16.642/2017 e pelo Decreto nº 57.776/ 2017 em relação à possibilidade de utilização do potencial construtivo integral em lotes atingidos por melhoramentos viários'
					}
				}, {
					titulo: 'Parceria Público Privada da Habitação (PPP da Habitação)',
					path: 'arquivos/arco-tiete/img/4-7.png',
					legendas: [],
					textos: {
						'Descrição': 'Trata-se de seleção de empresas interessadas em participar do programa de Parceria Público-Privada para construção de Habitação de Interesse Social e Mercado Popular em São Paulo, por meio Edital de Concorrência Internacional nº 001/2018, lançado pela COHAB-SP/SEHAB.\nCada lote é composto por um conjunto de áreas públicas, para as quais é especificado um número mínimo de novas unidades habitacionais, prevendo-se a mistura de diversas faixas de renda, além de diretrizes urbanísticas e investimentos em equipamentos e infraestrutura pública.\nO Edital prevê que para cada Lote será realizada uma concessão administrativa pelo prazo de 20 anos à iniciativa privada, responsável pela implantação das unidades habitacionais, das infraestruturas e equipamentos públicos, dos usos não residenciais privados, bem como prestação de serviços de desenvolvimento de trabalho social, de pré e pós-ocupação, de apoio à gestão condominial, apoio a gestão da lista de beneficiários e de manutenção predial e de espaços livres e áreas verdes. O Edital também coloca a possibilidade da modelagem econômica das concessionárias considerarem receitas acessórias decorrentes da comercialização das unidades de HMP e HMC e da exploração das áreas não-residenciais privadas',
						'Considerações para o PIU Arco Tietê': 'Revisar o Programa Habitacional do PIU Arco Tietê, considerando os imóveis incluídos na PPP de habitação'

					}
				}]
			}
		}
	},
	components: {
		PageTop,
		Indice,
		Imagem,
		Mapa,
		LayerExplorer,
		processo
		// Apoio
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

p.e { background: $vermelho-tr; padding: 2rem }

</style>
