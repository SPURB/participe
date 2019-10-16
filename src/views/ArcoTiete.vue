<template>
	<div class="ArcoTiete" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/arco-tiete_122w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Arco Tietê</div></template>
			<template slot="subtitulo"><div>Primeira consulta pública do Projeto de Intervenção Urbana Arco Tietê</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<p>Devido a sua localização estratégica e por ser um dos principais eixos de ligação leste-oeste da cidade, o território da planície fluvial do Rio Tietê tem sido recorrentemente objeto de leitura, análise e proposição pela Prefeitura do Município de São Paulo.  Conceitos que foram desenvolvidos por diferentes estudos desde o último Plano Diretor Estratégico (Lei Municipal nº 13.430/2002) contribuíram na elaboração do chamamento público para manifestação de interesse visando ao desenvolvimento de projetos urbanos no Arco Tietê, realizado pela Secretaria de Desenvolvimento Urbano (SMDU), em 2013.</p>
			<p>A compreensão da necessidade de intervenções neste território é ratificada pelo atual Plano Diretor Estratégico - PDE, Lei Municipal nº 16.050/2014 ao definir o perímetro do Subsetor Arco Tietê, do Setor Orla Ferroviária e Fluvial da Macroárea de Estruturação Metropolitana (MEM), que abrange integralmente a várzea do Rio Tietê, desde Pirituba até Vila Maria a norte e, a sul, da Lapa até o Belém.</p>
			<Imagem :dados="{
				tipo: 'mapa',
				titulo: 'Arco Tietê do Setor Orla Ferroviária e Fluvial da Macroárea de Estruturação Metropolitana (MEM)',
				url: imgSrc('arquivos/arco-tiete/img/1.jpg'),
				legenda: [
					{ borda: '#000000', espessura: '2', descricao: 'Perímetro Arco Tietê' },
					{ fundo: '#d5c2be', descricao: 'MEM' },
					{ fundo: '#9bb091', descricao: 'Parques, praças, canteiros' },
					{ fundo: '#2bb5d9', descricao: 'Hidrografia' },
					{ fundo: '#d4d4d4', descricao: 'Quadra viária' },
					{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/ferrovia.png'), descricao: 'Ferrovia' }
				]
			}"></Imagem>
			<p>De acordo com o PDE, a MEM é caracterizada pela existência dos principais eixos que articulam polos e municípios da Região Metropolitana de São Paulo, além de possuir regiões que passam por intensos processos de mudança nos padrões de uso e ocupação do solo, com grande potencial de transformação e nos seus Subsetores deverão ser elaborados Projetos de Intervenção Urbana (PIU).</p>
			<p>Atendendo ao prazo estipulado no §3º do Art. 76 do PDE, que determinou o envio do Projeto de Lei relativo ao Subsetor Arco Tietê à Câmara Municipal, foi protocolado na Câmara Municipal em 14 de Dezembro de 2016 o Projeto de Lei Municipal n° 581/2016 (PL nº581/2016), que trata do PIU Arco Tietê desenvolvido entre 2013 e 2016.</p>
			<p>Considerando a diversidade e a complexidade desse extenso território, aquela primeira versão do PIU Arco Tietê adotou como estratégia a divisão do perímetro em unidades de projeto, viabilizadas pelo instrumento urbanístico <em>Área de Intervenção Urbana</em> (AIU). As propostas urbanísticas para cada uma das AIU (denominadas <em>Centralidade da Metrópole</em>, <em>Lapa</em> e <em>Apoios Urbanos</em>) visavam ao melhor aproveitamento da terra urbana em função da infraestrutura existente e planejada, de forma a apoiar o aumento das densidades demográfica e construtiva, permitindo o desenvolvimento de novas atividades econômicas, criação de empregos, produção habitacional de interesse social e equipamentos públicos para a população e mitigação dos problemas ambientais.</p>
			<p>Também decorreu dessa primeira versão do PIU Arco Tietê a formulação de um Plano de Melhoramentos Viários em consonância com o Programa de Corredores, prevendo as intervenções necessárias para o desenvolvimento dos eixos de transportes perimetrais, denominados Apoios Urbanos Norte e Sul, já indicados como diretrizes do PDE. Considerando o papel estratégico da rede de mobilidade no processo de reestruturação urbanística, capaz de promover a transformação do uso do solo, com adensamento populacional, mudança dos padrões construtivos e incremento da oferta de serviços e equipamentos públicos, o Plano de Melhoramentos Viários foi aprovado previamente, a partir de Lei específica (Lei Municipal n°16.541/2016).</p>
			<p>Na sequência, em abril de 2017 o Executivo solicitou a retirada do PL n°581/2016, a fim de propor uma nova estratégia de abordagem do projeto. Desde então, outros projetos se desenvolveram em trechos do perímetro do Arco Tietê, exigindo a necessária revisão da proposta anterior.</p>
			<p>Nesse contexto, o conteúdo ora apresentado para consulta pública pela Prefeitura, por meio da Secretaria Municipal de Desenvolvimento Urbano (SMDU) e da São Paulo Urbanismo (SP-Urbanismo), tem o papel de iniciar os trabalhos da retomada dos estudos para o Arco Tietê, sob a luz de uma nova estratégia e diante de um novo cenário, configurado pelos projetos colocalizados supervenientes aos estudos que resultaram no PL n°581/2016, somados às diretrizes postas pelo novo marco regulatório.</p>
			<p>Tendo como referência o Decreto nº 56.901/2016, que dispõe sobre a elaboração do Projeto de Intervenção Urbana, o conteúdo desta consulta pública contempla os <b>Elementos Prévios ao Desenvolvimento do PIU</b>, correspondentes ao <b>Diagnóstico</b> da área e ao <b>Programa de Interesse Público</b> da futura intervenção. A publicação deste conteúdo tem como finalidade divulgá-lo e colher contribuições da sociedade, de modo a permitir uma construção coletiva do PIU.</p>
			<p>Acolhidas as contribuições pertinentes, os estudos serão encaminhados à Secretaria Municipal de Desenvolvimento Urbano (SMDU) para avaliação quanto a sua aderência e contribuição à Política Urbana Municipal. Somente após a aprovação pela SMDU, a SP-Urbanismo prosseguirá com os estudos de acordo com as etapas definidas pelo Decreto Municipal.</p>
			<processo></processo>
			<Comments :attr="{ id: 1, context: 'Apresentação' }" v-if="estaConsulta.ativo == 1"></Comments>
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
			<Comments :attr="{ id: 2, context: 'Motivação' }" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Diagnóstico</h2>
			<section>
				<h3 class="titulo" indent="2">Perímetro de estudo</h3>
				<p>Os estudos de retomada do PIU Arco Tietê partem do perímetro determinado pelo PL nº 581/2016, fazendo distinção de trechos em que há sobreposição com outros planos, projetos e marcos legais. Além disso, conscientes da expressiva transformação do uso do solo a leste do perímetro do Arco Tietê, parte dos distritos Tatuapé e Belém foi incluída nessa etapa de diagnóstico para a investigação das possíveis relações com o território do PIU, sendo considerada como uma área de prospecção. O distrito Tatuapé é um dos que mais receberam o uso residencial vertical nos últimos 20 anos, registrando quase 30 hectares de novos lotes residenciais verticais.</p>
				<Mapa :mapa_attrs="mapa1"></Mapa>
				<p>A etapa de Diagnóstico, aqui apresentada de forma resumida, é composta pela análise do marco regulatório e projetos colocalizados e a análise socioterritorial e ambiental. O relatório completo, com informações detalhadas, está disponível para download em três partes:</p>
				<ul class="links">
					<li>
						<a :href="src('arquivos/arco-tiete/pdf/ACT_11_01_Diagnostico-P1-Parte1.pdf')" download>
							<i class="icon-pdf icon"><span>icon_pdf</span></i>
							<div>Parte 1: Análise do Marco Regulatório e dos Projetos Colocalizados Supervenientes</div>
							<span>36,7 Mb</span>
						</a>
					</li>
					<li>
						<a :href="src('arquivos/arco-tiete/pdf/ACT_11_01_Diagnostico-P1-Parte2.pdf')" download>
							<i class="icon-pdf icon"><span>icon_pdf</span></i>
							<div>Parte 2: Análise Socioterritorial</div>
							<span>43,3 Mb</span>
						</a>
					</li>
					<li>
						<a :href="src('arquivos/arco-tiete/pdf/ACT_11_01_Diagnostico-P1-Parte3.pdf')" download>
							<i class="icon-pdf icon"><span>icon_pdf</span></i>
							<div>Parte 3: Análise ambiental</div>
							<span>24,0 Mb</span>
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h3 class="titulo" indent="2">Dados gerais</h3>
				<dadosgerais></dadosgerais>
			</section>
			<section>
				<h3 class="titulo" indent="2">Análise do marco regulatório e dos projetos colocalizados supervenientes</h3>
				<p>Novos planos, projetos e marcos legais foram desenvolvidos a partir de 2016 no âmbito do Município e seus perímetros e disposições se sobrepõem ora integralmente, ora parcialmente ao perímetro do PIU Arco Tietê, com impactos no projeto anteriormente concebido (PL nº581/2016).</p>
				<p>As interferências entre planos e projetos ao longo do tempo são esperadas, uma vez que os projetos urbanos não são objetos fechados e estaques, mas resultados de um processo dinâmico e, essencialmente, conjuntural. Nesse sentido, a própria elaboração dos PIU tem sido objeto de amadurecimento desde a publicação do rito processual disposto no Decreto nº 56.901/2016, resultando em uma situação na qual as propostas para os Subsetores da MEM, apesar de sequenciais, retroalimentam o próprio processo de desenvolvimento dos projetos urbanos, compartilhando ferramentas de intervenção, estratégias de comunicação e mecanismos de gestão dos instrumentos de ordenamento e reestruturação urbana propostos pelo PDE.</p>
				<LayerExplorer :data="seq1"></LayerExplorer>
			</section>
			<section>
				<h3 class="titulo" indent="2">Análise socioterritorial e ambiental</h3>
				<p>A seguir foram selecionados quatro grandes eixos resultantes do processo de leitura e interpretação do território da etapa de Diagnóstico: Eixo Ambiental, Mobilidade, Econômico e Social. Os eixos consistem no agrupamento de informações que originaram as camadas apresentadas no Programa de Interesse Público.</p>
				<LayerExplorer :data="seq2"></LayerExplorer>
			</section>
			<Comments :attr="{ id: 3, context: 'Diagnóstico' }" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Programa de Interesse Público</h2>
				<p>Considerando as demandas e os problemas evidenciados na etapa de diagnóstico, a revisão do PIU Arco Tietê buscou evidenciar aspectos relativos à construção de um projeto urbano sustentável, no qual todas as ações são engajadas para assegurar a interação entre <b>viabilidade econômica</b>, <b>desenvolvimento social</b> e <b>regeneração ambiental</b>. Em termos urbanísticos, somam-se a essa tríade os aspectos relativos à <b>mobilidade urbana</b>, elemento central na Política Urbana construída pelo PDE.</p>
				<p>Entende-se que as soluções sustentáveis encontram-se na intersecção desses eixos temáticos, sendo insuficiente, para um território que apresenta os problemas descritos anteriormente, de natureza híbrida, respostas parciais. Basta ver, por exemplo, a vulnerabilidade social e a estagnação econômica nas áreas dos antigos meandros do Rio Tietê, hoje suscetíveis a alagamentos e sem conectividade territorial, ou seja, caracterizadas como teritórios de urbanização incompleta. Nesse sentido, uma das principais diretrizes urbanísticas do projeto é a indução do desenvolvimento de novas frentes urbanas associadas à recuperação dos córregos tributários do Rio Tietê, construindo soluções integradas às questões habitacionais e de mobilidade.</p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/arco-tiete/img/6.png'),
				}"></Imagem>
				<section>
					<h3 class="titulo" indent="2">Atualização do perímetro e Setores de Intervenção</h3>
					<p>Como resposta à complexidade de situações e dinâmicas emergentes do território, a nova área de em estudo respeita os projetos e planos colocalizados. Assim, foram subtraídos os perímetros da OUC Água Branca e PIU Setor Central, resultando em nova área de estudo de 3.524 hectares, incidindo de oeste a leste sobre 7 Subprefeituras – Lapa, Pirituba-Jaraguá, Freguesia do Ó-Brasilândia, Casa Verde-Limão, Santana-Tucuruvi, Vila Guilherme-Vila Maria e Moóca.</p>
					<p>Considerando os dados de diagnóstico e a necessidade de estabelecer um leque preliminar de diretrizes de desenvolvimento urbano para o Arco Tietê, foi desenvolvida metodologia para identificação dos <b>Setores de Intervenção</b>, recortes menores e considerados estratégicos para transformação e qualificação urbanística e ambiental. A definição dos Setores parte do desdobramento dos eixos temáticos em <b>8 camadas de interpretação do território</b>, com o objetivo de sintetizar questões que emergiram no diagnóstico sócioterritorial e ambiental.</p>
					<p>A sobreposição e recorrência de temas e questões deu origem a <b>6 Setores de Intervenção</b>, áreas consideradas prioritárias para a indução da transformação e o equacionamento dos problemas e potencialidade do Arco Tietê – denominados aqui preliminarmente como Setores <b>Lapa</b>, <b>Limão</b>, <b>Santana</b>, <b>Vila Guilherme-Vila Maria</b>, <b>Jaguara</b> e <b>Belém</b>.</p>
					<p>Cabe ressaltar que esses Setores não corresponderão, necessariamente, aos perímetros de intervenção futuros, que serão formulados nas próximas etapas do desenvolvimento do trabalho. Devem ser considerados como uma primeira aproximação para o dimensionamento da viabilidade da transformação, do adensamento futuro pretendido, e das diretrizes para o Programa de Interesse Público do Arco Tietê. Além disso, os Setores formam a base territorial para recepcionar os instrumentos de ordenamento e reestruturação urbana, previstos no art. 134 do PDE.</p>
					<p>Os Setores resultantes reforçam o foco de aplicação dos instrumentos urbanísticos nas áreas de urbanização incompleta, caracterizadas ao longo do diagnóstico como trechos com pouca infraestrutura urbana, ocupações extensivas e com baixo aproveitamento do solo, próximas ao leito menor do rio Tietê e seus afluentes. Os Setores coincidem também com os territórios classificados no diagnóstico como de base produtiva em transição e grandes glebas públicas, reforçando que o papel estratégico do PIU como ferramenta de organização das dinâmicas de transformação do uso e ocupação do solo na Macroárea de Estruturação Metropolitana.</p>
					<LayerExplorer :data="seq3"></LayerExplorer>
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
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-13.png'), descricao: 'Conexões locais propostas' },
							{ borda: '#ffa54c', espessura: 3, linha: true, descricao: 'Ciclopassarelas propostas' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-12.png'), descricao: 'Glebas privadas' }
						]
					}"></Imagem>
					<p>As diretrizes urbanísticas do Programa de Interesse Público nasceram a partir da caracterização dos Setores de Intervenção. Elas estão divididas entre Diretrizes Gerais, que identificam elementos comuns aos Setores e sua relação com a Política Urbana municipal, e as Diretrizes Específicas, que apontam direcionamentos preliminares para cada Setor.</p>
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
					<h4>Polo Oeste: Setores Lapa e Limão</h4>
					<Mapa :mapa_attrs="mapa2"></Mapa>
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
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-13.png'), descricao: 'Conexões locais propostas' },
							{ borda: '#ffa54c', espessura: 3, linha: true, descricao: 'Ciclopassarelas propostas' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-12.png'), descricao: 'Glebas privadas' }
						]
					}"></Imagem>
					<h5>Setor Lapa</h5>
					<p>O Setor Lapa é caracterizado pela baixa densidade populacional e pela presença da atividade industrial, notadamente o setor da confecção, em processo de transformação na direção do uso vertical residencial e de comércio e serviços. Em contraste à baixa densidade, a presença dos corredores de ônibus na Av. Ermano Marchetti, conectando Pirituba ao Centro, e na Rua Guaicurus, e das estações Lapa das Linhas 7 e 8 da CPTM, aponta para a necessidade de se otimizar o aproveitamento da infraestrutura existente, seja a partir da integração intermodal, ou pela indução da transformação e adensando deste território. Soma-se a isso, a futura Linha 6 do Metrô, já em construção e cuja integração com a rede ferroviária está prevista junto à estação Água Branca da CPTM.</p>
					<p>As diversas áreas sujeitas à inundação, decorrentes da retificação do Rio Tietê e os baixos índices de espaços verdes por hectare exigem a elaboração de estratégias de implantação de espaços públicos que cumpram funções ambientais, como a absorção das águas pluviais e a conexão ecológica entre diferentes pontos do território. A leitura da configuração hídrica original do Rio Tietê traz subsídios para a definição de parâmetros urbanísticos e estratégias para criação de futuras áreas verdes, de modo a suprir a demanda exigida pelo adensamento populacional e construtivo previsto.</p>
					<p>Ao sul da ferrovia, a Rua Guaicurus contempla importantes equipamentos públicos de porte regional:  Poupatempo, Terminal Rodoviário, Mercado da Lapa, Subprefeitura da Lapa, Tendal da Lapa e antiga Estação Ciência, sendo os quatro últimos edifícios tombados. A existência de diversos galpões degradados ao longo da via deteriora a paisagem, mas ao mesmo tempo oferece uma oportunidade para novos usos residenciais e de serviços se instalarem na área, uma vez que se trata de um importante corredor de ônibus com proximidade às estações da CPTM.</p>
					<p>Já a área localizada ao norte do Rio Tietê, que se expande até a Rua da Balsa, é caracterizada pela presença de grandes quadras e pouca permeabilidade urbana. Atualmente, a área está em forte processo de transformação pela implantação de torres residenciais junto à Av. Raimundo Pereira Magalhães. A implantação de uma nova ponte sobre o Rio Tietê, nessa mesma via, potencializará a acessibilidade.</p>
					<p><b>Diretrizes urbanísticas específicas</b></p>
					<ol class="romanos">
						<li>Implantar parque linear ao longo dos córregos do Curtume e Tiburtino, prevendo sua recuperação, associada à promoção de novas frentes urbanas de adensamento construtivo e populacional em seus lotes lindeiros; </li>
						<li>Implantar uma ciclopassarela sobre o Rio Tietê no prolongamento da Rua Luiz Gatti, onde se encontra tamponado o Córrego do Curtume;</li>
						<li>Implantar o parque Guaicurus, contemplando a integração dos equipamentos públicos existentes (Poupatempo, Subprefeitura da Lapa, Tendal da Lapa, Mercado da Lapa e Junta Comercial do Estado de São Paulo), prevendo sua articulação com novas transposições sobre a ferrovia e com as estações de trem e terminal de ônibus existentes, visando a valorização da orla ferroviária;</li>
						<li>Promover áreas de absorção de águas pluviais associadas a soluções de paisagismo e lazer nas áreas dos antigos meandros do Rio Tietê sujeitas à inundação.</li>
					</ol>
					<h5>Setor Limão</h5>
					<p>O Setor Limão faz divisa com a OUC Água Branca, abrigando seus perímetros de integração, onde estão previstas conexões entre as margens norte e sul do rio Tietê. Uma das principais transposições é uma ciclopassarela prevista para ser implantada nas proximidades da Ponte Julio de Mesquita Neto, ancorada nas proximidades do Centro de Tradições Nordestinas. Como continuidade deste eixo, ao longo do córrego Papaterra Limongi, estão localizados diversos terrenos vagos que compõem a oportunidade de transformação urbana com caráter ambiental. Outras conexões com as mesmas características, como o córrego Água Branca, junto à favela do Sapo, e o córrego Quirino dos Santos, podem promover a integração das margens do rio associada ao desenvolvimento urbano e à recuperação dos corpos d´água.</p>
					<p>Trata-se do Setor com a maior concentração de habitações precárias e problemas de vulnerabilidade social do Arco, com diversas famílias vivendo em favelas e em conjuntos habitacionais implantados a partir da década de 1990, alguns hoje degradados e carentes de espaços públicos e equipamentos de suporte. Do ponto de vista ambiental, é notável a presença de áreas sujeitas à inundação, principalmente ao longo dos antigos meandros do rio Tietê, onde hoje se encontram os conjuntos habitacionais Minas Gás e Trivelato, e ao longo do Córrego Papaterra Limongi. Já em relação à base produtiva, trata-se de um dos poucos locais do Arco onde a indústria da transformação ainda apresenta inúmeros estabelecimento e empregos.</p>
					<p>O balanço entre precariedade habitacional e oferta de ZEIS próximas à infraestrutura urbana aponta para um importante papel que pode cumprir o Setor no enfrentamento das questões habitacionais. Tal diretriz deve estar associada às ancoragens e eventuais prolongamentos dos eixos de desenvolvimento urbano previstos pela OUC Água Branca. Devem ser abordados, ainda, os problemas de alagamentos, a forte presença do emprego industrial e a importância do Centro de Tradições Nordestinas como principal equipamento do Setor.</p>
					<p><b>Diretrizes urbanísticas específicas</b></p>
					<ol class="romanos">
						<li>Implantar ciclopassarelas associadas às áreas de transposição do Rio Tietê previstas na Operação Urbana Consorciada Água Branca;</li>
						<li>Implantar melhoramentos viários ao longo do eixo da Rua da Balsa, Av. Nossa Senhora do Ó, Rua Nélson Francisco, Rua José Fiuza Guimarães até a Av. Prof. Ida Kolb, estabelecendo uma conexão intra-bairros preliminar à execução futura do Apoio Urbano Norte;</li>
						<li>Implantar novos eixos de desenvolvimento urbano associados às ciclopassarelas previstas, contemplando a recuperação ambiental dos córregos tributários e dos antigos meandros do Rio Tietê na transformação lindeira;</li>
						<li>Realizar intervenção integrada em assentamentos precários e promover Habitação de Interesse Social nas áreas públicas e ZEIS disponíveis, tendo em vista a presença da precariedade habitacional no Setor;</li>
						<li>Considerar a presença do emprego industrial no Setor, notadamente na indústria química, coibindo o desenvolvimento imobiliário em determinadas áreas onde os estabelecimentos industriais ainda estão ativos;</li>
					</ol>
					<h4>Polo Nordeste: Setores Santana e Vila Guilherme-Vila Maria</h4>
					<Mapa :mapa_attrs="mapa3"></Mapa>
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
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-13.png'), descricao: 'Conexões locais propostas' },
							{ borda: '#ffa54c', espessura: 3, linha: true, descricao: 'Ciclopassarelas propostas' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/8-12.png'), descricao: 'Glebas privadas' }
						]
					}"></Imagem>
					<h5>Setor Santana</h5>
					<p>O Setor Santana é marcado por grandes glebas públicas, contando com parte significativa de áreas transformáveis e aptas ao parcelamento do solo. Esse conjunto é responsável por um dos principais problemas identificados: a baixa conectividade urbana provocada pela presença de grandes extensões de quadra, o que leva não só à dificuldade de articulação do sistema viário, mas principalmente às restrições de microacessibilidade do pedestre e do ciclista, dificultando a promoção de modos de mobilidade ativa.</p>
					<p>A maior parte das glebas passíveis no Setor é ocupada por equipamentos públicos, sendo algumas gravadas como ZEIS-3 e com presença de assentamentos precários com ocupação recente. Também se destacam o Anhembi e o Campo de Marte, gravadas como Zonas de Ocupação Especial (ZOE) – no primeiro caso, uma série de diretrizes urbanísticas foram especialmente dirigiras ao parcelamento do solo no Decreto nº 58.623/2019 e, no segundo, merecem destaque as funções ambientais, que devem ser garantidas em qualquer hipótese de transformação do uso aeroportuário.</p>
					<p>Já os eixos da Av. Cruzeiro do Sul e da Av. Santos Dumont, que estabelecem as conexões urbanas com a área central, recebem a principal infraestrutura de mobilidade urbana do Setor, concentrando uma significativa parcela de empregos. Essa centralidade linear tem intensificado a transformação de usos, com destaque para implantação de novas torres corporativas ao norte, no final da avenida.</p>
					<p>Em relação aos sistemas ambientais, ganha ênfase o entorno do Córrego Carandiru, onde já estão previstos novos alinhamentos na Av. Moysés Roysen e na Praça Marshiach Now, estruturando um eixo verde com a função de recompor as áreas de preservação junto ao córrego, abrir espaço para um novo dispositivo de drenagem integrado à paisagem e conectar o Parque da Juventude.</p>
					<p>Em suma, compreende-se que ainda exista grande potencial de transformação no Setor Santana, sobretudo associado às grandes glebas públicas. Enfrentam-se, desta forma, os principais problemas do Setor, como a intervenção integrada em assentamentos precários e a consequente ativação das áreas de ZEIS, as melhorias ambientais necessárias, bem como a ampliação da conectividade e da microacessibilidade urbana a partir da ruptura de grandes quadras.</p>
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
					<p>Uma das principais características do Setor é a concentração de grandes glebas privadas e passíveis de transformação ao longo das Av. Zaki Narchi-Otho Baumgart e Av. Nadir Dias de Figueiredo. No primeiro caso, as glebas são marcadas pela presença de usos extensivos, como os Shopping Centers e centros de logística e distribuição. Uma característica comum a estas ocupações, além do uso ativo, é a grande extensão de pátios de estacionamento, que geram um entorno árido e ruas ausentes de atributos que as tornem atrativas e seguras. No segundo caso, as glebas próximas à Av. Nadir Dias de Figueiredo, junto à foz do Córrego da Divisa, denotam um processo intenso de transformação de uso da Zona Predominantemente Industrial (ZPI-1), hoje com poucas indústrias ativas.</p>
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
						url: imgSrc('arquivos/arco-tiete/img/11.png')
					}"></Imagem>
					<p>O Setor Jaguara localiza-se no extremo oeste do perímetro do Arco Tietê, limitado a norte pela Marginal, a sul pela Rodovia Anhanguera e a oeste pelo feixe de vias formado pelas Av. Alexandre Colares, Domingos de Souza Marques e Federico Felini.</p>
					<p>Caracterizado pela ocupação industrial desde sua formação, com o estabelecimento do frigorífico Armour na década de 20, e posteriormente com Refinação de Milho Brasil e Irmãos Lever, a sua classificação como zona industrial da Lei n°13.885/2004 (ZPI/0003) e da Lei n°16.402/2016 (ZPI- I). Embora o uso industrial ainda esteja presente no perímetro, o diagnóstico demonstrou que já ocorre um processo de substituição das atividades por escritórios das indústrias e por atividades de logística, como armazenamento e transporte.</p>
					<p>Importante ressaltar que a implantação do melhoramento viário dos Apoios Urbanos, definido pela Lei nº 16.541/2016 (Plano de Melhoramentos Viários do Arco Tietê), prevê o atendimento da população do Distrito de São Domingos, não havendo previsão de conexão com o Setor Jaguara. Complementa este cenário a previsão de implantação de obras de engenharia de grande porte para transposição do Rio Tietê, integrantes do processo de concessão da Rodovia Bandeirantes, sob a coordenação do Governo do Estado de São Paulo, bem como do anel perimetral composto Apoios Urbanos Norte e Sul.</p>
					<p>Considerando a proximidade com as rodovias, as obras previstas para transposição do rio, a carência de infraestrutura de mobilidade interna, a estrutura fundiária de grandes lotes e a desconexão com o entorno, conclui-se que a potencialidade do território permanece associada à base produtiva, ainda que em processo de transformação. Além disso, as melhorias viárias no entorno são consideradas intervenções de longo prazo, em um arco temporal distante da primeira abordagem deste PIU, que volta sua atenção aos territórios com transformação mais evidente e em curso.</p>
					<p>Portanto, entende-se que o Setor Jaguara possa ser objeto de estudo futuro, abarcando atividades relacionadas às mudanças da indústria, ou mesmo a possível implantação de uma plataforma de logística, obviamente associada às melhorias de transporte necessárias para conexão urbana.</p>
					<h5>Setor Belém</h5>
					<Imagem :dados="{
						tipo: 'coluna',
						url: imgSrc('arquivos/arco-tiete/img/12.png')
					}"></Imagem>
					<p>O Setor Belém, composto por uma porção do Distrito Belém e um trecho do Distrito de Vila Maria, é caracterizado pela concentração de áreas públicas e grandes glebas transformáveis ao sul e alta incidência de assentamentos precários adjacentes, ao norte do rio Tietê.</p>
					<p>Na etapa do diagnóstico, o perímetro de prospecção evidenciou um processo de transformação urbana nas proximidades da Av. Salim Farah Maluf até a Rua Tuiuti, no qual os lotes ocupados originalmente por galpões estão sendo rapidamente transformados para construção de empreendimentos residenciais verticais, resultando no aumento das densidades construtivas e habitacionais.</p>
					<p>Considerando a presença de áreas transformáveis, a necessidade de intervenção integrada em assentamentos precários na Vila Maria e a intensa atividade imobiliária em curso no entorno, é possível afirmar que o Setor Belém tem grande potencial para o desenvolvimento de projetos urbanos. Por outro lado, as análises iniciais demonstraram que para levar adiante os estudos urbanísticos, seria imprescindível incorporar ao Setor áreas externas ao perímetro do Arco Tietê, como as áreas com intensa produção imobiliária no Distrito do Tatuapé e o conjunto significativo de assentamentos precários na Vila Maria, ambas incluídas no Subsetor Arco Leste da MEM.</p>
					<p>Além dos elementos já levantados, uma característica muito importante dessa unidade territorial é a sobreposição de vetores formados pelos eixos da Av. Alcântara Machado, da ferrovia, da Av. Celso Garcia, das marginais e dos Apoios Urbanos Norte e Sul. Esses vetores de conexão leste-oeste da cidade tem grande impacto local e suas interferências devem ser estudadas em conjunto. Cabe ressaltar também que o plano de melhoramentos viários definido da Lei n° 16.541/2016 já definiu as áreas para implantação conexões e integrações viárias necessárias entre esse trecho do Arco Leste, do Arco Tietê e do PIU Setor Central.</p>
					<p>Portanto, acredita-se que o Setor Belém deverá ser escopo de estudos específicos que incorporem as dinâmicas e os elementos físico-territoriais do Arco Leste, estratégia que considera o natural aprofundamento das análises da MEM a partir do reconhecimento de dinâmicas próprias do território.</p>
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
					<div class="tabela">
						<table>
							<tr>
								<th colspan="5">Área útil lançada e participação por subprefeitura e setor (2000-17)</th>
							</tr>
							<tr>
								<td>Subprefeitura</td>
								<td>Setor</td>
								<td>Área útil (m²)</td>
								<td>Part. (%)</td>
								<td>Part. (%)</td>
							</tr>
							<tr>
								<td rowspan="2">Pirituba-Jaraguá</td>
								<td>interno</td>
								<td>-</td>
								<td>-</td>
								<td rowspan="2">13,6</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>264.060</td>
								<td>13,6</td>
							</tr>
							<tr>
								<td rowspan="2">Freguesia-Brasilândia</td>
								<td>interno</td>
								<td>24.964</td>
								<td>1,3</td>
								<td rowspan="2">2,4</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>22.239</td>
								<td>1,1</td>
							</tr>
							<tr>
								<td rowspan="2">Casa Verde-Cachoeirinha</td>
								<td>interno</td>
								<td>100.910</td>
								<td>5,2</td>
								<td rowspan="2">17,4</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>237.731</td>
								<td>12,2</td>
							</tr>
							<tr>
								<td rowspan="2">Santana-Tucuruvi</td>
								<td>interno</td>
								<td>35.389</td>
								<td>1,8</td>
								<td rowspan="2">13,4</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>224.581</td>
								<td>11,6</td>
							</tr>
							<tr>
								<td rowspan="2">Vila Maria-Vila Guilherme</td>
								<td>interno</td>
								<td>227.343</td>
								<td>11,7</td>
								<td rowspan="2">14,7</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>58.088</td>
								<td>3,0</td>
							</tr>
							<tr>
								<td rowspan="2">Mooca</td>
								<td>interno</td>
								<td>7.387</td>
								<td>0,4</td>
								<td rowspan="2">0,4</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>-</td>
								<td>-</td>
							</tr>
							<tr>
								<td rowspan="2">Lapa</td>
								<td>interno</td>
								<td>285.837</td>
								<td>14,7</td>
								<td rowspan="2">38,1</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>455.662</td>
								<td>23,4</td>
							</tr>
							<tr>
								<td>Total</td>
								<td></td>
								<td>1.944.191</td>
								<td>100,0</td>
								<td>100,0</td>
							</tr>
						</table>
					</div>
					<p>Um segundo fator a ser considerado para avaliar a propensão à transformação dos terrenos é a condição de oferta do insumo, em particular a disponibilidade de terrenos com usos e tamanhos adequados à incorporação imobiliária. Lotes vagos, garagens, galpões e usos residenciais e comerciais horizontais facilitam a viabilidade de empreendimentos imobiliários. Além disso, lotes maiores, acima de 500 metros quadrados, também favorecem o processo de transformação.</p>
					<p>Tomando estes dois filtros de uso e tamanho dos lotes, observa-se que o território em análise ainda possui uma grande quantidade de áreas transformáveis. De acordo com a Tabela abaixo, dos 22,5 milhões de metros quadrados de área total de lotes presentes nos limites do PIU Arco Tietê, pouco menos da metade, 10,3 milhões de metros quadrados, apresentam boas condições para a incorporação, o que representa uma taxa de transformação no agregado de 46%. Se a demanda por terrenos para os próximos 20 anos, segundo as projeções, é de aproximadamente 565 mil metros quadrados, a oferta de lotes transformáveis atende com larga margem a demanda para incorporação na região.</p>
					<p>A subprefeitura com maior oferta de áreas transformáveis é a Vila Maria-Vila Guilherme, com 38,8% do total, seguida da Lapa (26,1%) e Casa Verde-Cachoeirinha (12,2%). Inversamente ao vetor de demanda, a oferta de áreas transformáveis se concentra mais próxima à várzea do Rio Tietê. Assim, os Setores de Análise e Proposição respondem por 76,7% dessa oferta.</p>
					<div class="tabela">
						<table>
							<tr>
								<th colspan="7">Tabela: Área transformável e taxa de transformação por subprefeitura e setor</th>
							</tr>
							<tr>
								<td>Subprefeitura</td>
								<td>Setor</td>
								<td>Área total (m²)</td>
								<td>Área transformável (m²)</td>
								<td>Taxa de transformação (%)</td>
								<td>Part. área transformável (%)</td>
								<td>Part. área transformável (%)</td>
							</tr>
							<tr>
								<td rowspan="2">Pirituba-Jaraguá</td>
								<td>interno</td>
								<td>16.686</td>
								<td>13.645</td>
								<td>81,8</td>
								<td>0,1</td>
								<td rowspan="2">8,1</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>2.751.014</td>
								<td>827.906</td>
								<td>30,1</td>
								<td>8,0</td>
							</tr>
							<tr>
								<td rowspan="2">Freguesia-Brasilândia</td>
								<td>interno</td>
								<td>426.364</td>
								<td>296.915</td>
								<td>69,6</td>
								<td>2,9</td>
								<td rowspan="2">4,7</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>555.974</td>
								<td>185.968</td>
								<td>33,4</td>
								<td>1,8</td>
							</tr>
							<tr>
								<td rowspan="2">Casa Verde-Cachoeirinha</td>
								<td>interno</td>
								<td>966.853</td>
								<td>554.539</td>
								<td>57,4</td>
								<td>5,4</td>
								<td rowspan="2">12,2</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>2.315.183</td>
								<td>704.951</td>
								<td>30,4</td>
								<td>6,8</td>
							</tr>
							<tr>
								<td rowspan="2">Santana-Tucuruvi</td>
								<td>interno</td>
								<td>1.675.737</td>
								<td>400.913</td>
								<td>23,9</td>
								<td>3,9</td>
								<td rowspan="2">5,5</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>890.266</td>
								<td>168.788</td>
								<td>19,0</td>
								<td>1,6</td>
							</tr>
							<tr>
								<td rowspan="2">Vila Maria-Vila Guilherme</td>
								<td>interno</td>
								<td>5.994.297</td>
								<td>3.857.102</td>
								<td>64,3</td>
								<td>37,3</td>
								<td rowspan="2">38,8</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>731.105</td>
								<td>149.699</td>
								<td>20,5</td>
								<td>1,4</td>
							</tr>
							<tr>
								<td rowspan="2">Mooca</td>
								<td>interno</td>
								<td>668.867</td>
								<td>480.587</td>
								<td>71,9</td>
								<td>4,7</td>
								<td rowspan="2">4,7</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>-</td>
								<td>-</td>
								<td>na</td>
								<td>-</td>
							</tr>
							<tr>
								<td rowspan="2">Lapa</td>
								<td>interno</td>
								<td>3.571.178</td>
								<td>2.324.281</td>
								<td>65,1</td>
								<td>22,5</td>
								<td rowspan="2">26,1</td>
							</tr>
							<tr>
								<td>externo</td>
								<td>1.889.584</td>
								<td>368.185</td>
								<td>19,5</td>
								<td>3,6</td>
							</tr>
							<tr>
								<td colspan="2">Total</td>
								<td>22.453.107</td>
								<td>10.333.479</td>
								<td>46</td>
								<td>100</td>
								<td>100</td>
							</tr>
						</table>
					</div>
					<p>É diante desse cruzamento de forças de demanda e de oferta que se define a distribuição espacial da produção imobiliária. De um lado, consumidores tradicionalmente desejam se estabelecer em regiões próximas a sua rede de relações familiares ou profissionais. Quanto mais próxima de áreas consolidadas, maior a atratividade dos terrenos. Por outro lado, o incorporador depende da oferta do insumo terra para sua atividade e, conforme enfrenta escassez em locais específicos, ruma para vizinhanças com maior disponibilidade de áreas transformáveis.</p>
					<p>Para avaliar a propensão à transformação dos lotes inseridos no perímetro do PIU Arco Tietê, foi construído um indicador que incorpora esses dois elementos. Primeiramente, foi calculado um índice de atratividade das quadras baseada numa razão entre a produção atual medida em metros quadrados de área útil e a distância a essa produção (um clássico modelo gravitacional, massa sobre distância). Quanto maior a proximidade à produção/consumo atual de área útil, maior a atratividade das quadras para o mercado imobiliário sob a perspectiva da demanda.</p>
					<p>O resultado pode ser visto no mapa abaixo. Os lançamentos representados em lilás servem de instrumetos de mensuração e análise para a atual demanda do mercado. As quadras mais próximas à produção/consumo apresentam valores mais próximos a 1 e, à medida que se afastam dos lançamentos, assumem valores mais próximos a 0. Conforme esperado, as quadras na franja do PIU Arco Tietê apresentam o maior índice de atratividade atual do mercado, bolsões de produção e consumo de área útil ocorrem na Vila Romana (Lapa), Casa Verde, Santana e Barra Funda, embora esse último esteja a sua maior parte no perímetro da Operação Urbana Consorciada Água Branca.</p>
					<Imagem :dados="{
						tipo: 'mapa',
						url: imgSrc('arquivos/arco-tiete/img/13.png'),
						titulo: 'Índice de atratividade (I.A.) do mercado imobiliário',
						legenda: [
							{ fundo: '#fffeb6', descricao: 'I.A.: 0,0–0,2' },
							{ fundo: '#ffce4f', descricao: 'I.A.: 0,2–0,4' },
							{ fundo: '#ff8d37', descricao: 'I.A.: 0,4–0,6' },
							{ fundo: '#f9392d', descricao: 'I.A.: 0,6–0,8' },
							{ fundo: '#dc0015', descricao: 'I.A.: 0,8–1,0' },
							{ fundo: '#a4a69d', borda: '#7e8180', descricao: 'Projetos colocalizados' },
							{ borda: '#000', pontilhado: true, descricao: 'Setores' },
							{ simbolo: imgSrc('arquivos/arco-tiete/img/legenda/13-1.png'), descricao: 'Lançamentos EMBRAESP' }
						],
						fonte: 'Elaboração própria a partir de dados da Embraesp'
					}"></Imagem>
					<p>O segundo fator de construção do indicador de viabilidade da transformação é construído a partir da perspectiva da oferta. Cada quadra assume um valor entre 0 e 1, sendo 0 a taxa de transformação mínima, na qual toda a área da quadra é não transformável, e 1 a taxa de transformação máxima, onde toda a área da quadra é transformável. Como pode se observar no mapa abaixo, as regiões de várzeas assumem os maiores valores, significando que essas regiões apresentam a maior disponibilidade de terras transformáveis para a incorporação imobiliária. Assim, o maior volume de áreas transformáveis, situa-se dentro dos Setores de Análise e Proposição, destacando-se os Setores Lapa (1), Limão (2), Vila Guilherme-Vila Maria (4) e Belém (6).</p>
					<Imagem :dados="{
						tipo: 'mapa',
						url: imgSrc('arquivos/arco-tiete/img/14.png'),
						titulo: 'Taxa de área transformável (T.A.T.)',
						legenda: [
							{ fundo: '#fffeb6', descricao: 'T.A.T.: 0–20%' },
							{ fundo: '#ffce4f', descricao: 'T.A.T.: 20%–40%' },
							{ fundo: '#ff8d37', descricao: 'T.A.T.: 40%–60%' },
							{ fundo: '#f9392d', descricao: 'T.A.T.: 60%–80%' },
							{ fundo: '#dc0015', descricao: 'T.A.T.: 80%–100%' },
							{ fundo: '#a4a69d', borda: '#7e8180', descricao: 'Projetos colocalizados' },
							{ borda: '#000', pontilhado: true, descricao: 'Setores' }
						],
						fonte: 'Elaboração própria a partir de dados da Secretaria Municipal da Fazenda/PMSP'
					}"></Imagem>
					<p>A partir da composição do índice de atratividade e da taxa de transformação se constrói o indicador de viabilidade da transformação (IVT). Como outros indicadores, o IVT é calculado pela média simples de um conjunto de variáveis com intervalo de 0 a 1. Nesse caso, uma variável de demanda e outra de oferta. O regramento urbanístico – Coeficiente de Aproveitamento, gabarito, etc. – também tem influência sobre a propensão a transformação do solo. Contudo, o Programa de Interesse Público antecede a definição do regramento, visto que objetiva justamente a caracterização do território, e assim, subsidiar futuramente as diretrizes urbanísticas nas próximas etapas de desenvolvimento do PIU. Desse modo, o IVT inicial incorpora apenas os dois primeiros elementos.</p>
					<p>No mapa abaixo, apresenta-se o IVT por quadras dentro do perímetro do PIU Arco Tietê. O resultado aponta para um comportamento de borda. As regiões menos consolidadas e próximas à produção atual apresentam os maiores propensões à transformação. Entre essas, destacam-se os Setores Lapa (1), Limão (2) e Vila Guilherme-Vila Maria (4). As regiões com alta produção atual, mas com estrutura fundiária consolidada, ainda deverão ser alvo da indústria imobiliária, mas em ritmo menor, apresentando uma propensão a transformação moderada. Já as regiões com baixa atratividade atual e baixas taxas de transformação devem permanecer fora do alvo da indústria imobiliária.</p>
					<Imagem :dados="{
						tipo: 'mapa',
						url: imgSrc('arquivos/arco-tiete/img/15.png'),
						titulo: 'Indicador de Viabilidade de Transformação (I.V.T.)',
						legenda: [
							{ fundo: '#fffeb6', descricao: 'I.V.T.: 0,0–0,2' },
							{ fundo: '#ffce4f', descricao: 'I.V.T.: 0,2–0,4' },
							{ fundo: '#ff8d37', descricao: 'I.V.T.: 0,4–0,6' },
							{ fundo: '#f9392d', descricao: 'I.V.T.: 0,6–0,8' },
							{ fundo: '#dc0015', descricao: 'I.V.T.: 0,8–1,0' },
							{ fundo: '#a4a69d', borda: '#7e8180', descricao: 'Projetos colocalizados' },
							{ borda: '#000', pontilhado: true, descricao: 'Setores' }
						],
						fonte: 'Elaboração própria a partir de dados da Secretaria Municipal da Fazenda/PMSP'
					}"></Imagem>
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
					<p>O Art. 136 do PDE determina que os PIU devam estabelecer os <em>“instrumentos para a democratização da gestão da elaboração e implementação dos projetos, com mecanismos de participação e controle social”</em>. Ainda, aponta que o Sistema Municipal de Planejamento – ao qual o Plano Diretor e seus instrumentos se inserem – deva assegurar <em>“a participação direta da população em todas as fases de planejamento e gestão democrática da cidade, garantindo as instâncias e instrumentos necessários para efetivação da participação da sociedade na tomada de decisões, controle e avaliação da política”</em> (PDE, Art. 319).</p>
					<p>Complementarmente, o Decreto Municipal nº 56.901/2016, dispõe sobre os procedimentos para elaboração dos PIUs, definindo suas etapas de elaboração e os produtos resultantes, os procedimentos legais bem como os momentos de participação popular.</p>
					<gestao></gestao>
					<p>A etapa atual de divulgação dos <b>Elementos Prévios à elaboração do PIU</b>, ou seja, do Diagnóstico da área objeto da intervenção e de um Programa de Interesse Público, configura o início da participação popular no processo de elaboração do PIU Arco Tietê. Somente após o acolhimento das contribuições pertinentes o projeto será encaminhado para SMDU que autoriza seu desenvolvimento considerando a aderência à política de desenvolvimento urbano do Município.</p>
					<p>Nas etapas subsequentes, a participação popular prossegue em diferentes modalidades, de forma a identificar os problemas e anseios dos que vivenciam o território de projeto, refletindo as necessidades específicas da população atualmente residente e trabalhadora, bem como ao perfil de adensamento populacional e de geração de emprego e renda que se pretende com o PIU. As contribuições originadas das diversas discussões, quando pertinentes, são incorporadas ao projeto e a minuta de Projeto de Lei. São identificadas as seguintes etapas:</p>
					<ul>
						<li>Fase de <b>Desenvolvimento do PIU</b>, quando se dá a elaboração da sua proposta consolidada que conterá a definição do perímetro de intervenção, as características básicas da proposta, o programa de intervenções, o regramento urbanístico, os custos das intervenções, o modelo de financiamento, a modelagem jurídica, e o modelo de gestão democrática: realização de <b>diálogos setoriais</b>, tanto junto ao setor público, por meio de reuniões e grupos de trabalhos com as secretarias cuja competência seja pertinente ao trabalho, bem como com a sociedade civil, por meio de reuniões com associações de moradores, ONGs que atuam no território, representantes dos setores produtivos, entre outros atores identificados;</li>
						<li><b>Versão Completa do PIU</b>, contendo a proposta consolidada: realização de nova <b>Consulta Pública</b> no site Gestão Urbana; realização de apresentação e discussão junto aos <b>Conselhos Municipais Setoriais e Câmaras Técnicas Municipais</b>, compostos por representantes do poder público e sociedade civil: Conselho Municipal de Política Urbana – CMPU, Câmara Técnica Legislação Urbanística – CTLU e outros; e realização de <b>Audiências Públicas</b> no próprio território do projeto;</li>
						<li><b>Minuta do Projeto de Lei</b>, que contem as regras, os incentivos, define o instrumento urbanístico, apresenta o programa de intervenções: realização de <b>Consulta Pública</b> no site Gestão Urbana.</li>
					</ul>
					<p>Além da participação popular nas etapas de elaboração do PIU, a minuta é encaminhada à Câmara Municipal, momento em que conta mais uma vez com a participação popular por meio da realização de audiências públicas seguindo os ritos do Legislativo, necessárias para aprovação da lei.</p>
					<p>Aprovada a lei, a participação popular ainda prossegue no processo de implantação por intermédio do <b>Conselho Gestor</b>, cuja composição deverá prever representação paritária entre sociedade civil e setor público, equilibrando os interesses imobiliários e sociais. Criado o Conselho Gestor, caberá à coordenação à Secretaria Municipal de Desenvolvimento Urbano (SMDU), com a participação de órgãos municipais e de entidades representativas da sociedade civil, tendo a competência de instruir e auxiliar a implantação do Programa de Intervenções, monitorar o desenvolvimento e propor programas e estratégias que possam aprimorar o projeto. Já a SP-Urbanismo ficará a cargo de promover a implantação do Programa de Intervenções do PIU Arco Tietê, avaliar a evolução dos processos, podendo contar com a colaboração dos órgãos e entidades municipais para o desempenho de suas funções específicas.</p>
					<Imagem :dados="{
						tipo: 'default',
						url: imgSrc('arquivos/arco-tiete/img/17.jpg'),
						caption: 'Composição do Conselho Gestor'
					}"></Imagem>
					<p>Um ponto muito importante que deve ser destacado é a participação dos <b>Conselhos Gestores de ZEIS</b>, cuja constituição compete à Secretaria Municipal de Habitação (SEHAB). Os Conselhos de ZEIS são  compostos por representantes dos moradores, do Executivo e da sociedade civil organizada, e tem como mote a formulação e implementação das intervenções a serem realizadas em suas áreas específicas (art. 48, PDE). A iniciativa de implantação de quaisquer intervenções do PIU Arco Tietê nas ZEIS 1 e ZEIS 3, quando habitadas por população de baixa renda, será precedida do respectivo Plano de Urbanização ou Projeto de Intervenção, bem como de sua aprovação pelo Conselho Gestor.</p>
				</section>
				<Comments :attr="{ id: 4, context: 'Programa de Interesse Público' }" v-if="estaConsulta.ativo == 1"></Comments>
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
		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments :attr="{ id: 5, context: 'Geral' }" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Imagem from '@/components/Imagem'
import Mapa from '@/components/Mapa'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import LayerExplorer from '@/components/LayerExplorer'
import processo from '@/components/graf/arco-tiete/processo'
import gestao from '@/components/graf/arco-tiete/gestao'
import dadosgerais from '@/components/graf/arco-tiete/dadosgerais'
import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'ArcoTiete',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			mapa1: {
				id: 'mapa1',
				center: [ -5194160, -2695000 ],
				zoom: 12.5,
				layers: [
					{
						title: 'PIU Arco Tietê',
						path: this.$store.getters.basePath + 'arquivos/arco-tiete/kml/piu-arco-tiete.kml',
						stroke_color: 'rgba(0, 0, 0, .5)',
						fill_color: 'rgba(255, 255, 255, .4)',
						stroke_width: 2
					},
					{
						title: 'OUCAB',
						path: this.$store.getters.basePath + 'arquivos/arco-tiete/kml/oucab.kml',
						stroke_color: 'rgba(0, 0, 0, 0.2)',
						fill_color: 'rgba(119, 119, 119, .75)',
						stroke_width: 1
					},
					{
						title: 'PIU Anhembi',
						path: this.$store.getters.basePath + 'arquivos/arco-tiete/kml/piu-anhembi.kml',
						stroke_color: 'rgba(0, 0, 0, 0.2)',
						fill_color: 'rgba(247, 148, 30, .5)',
						stroke_width: 1
					},
					{
						title: 'PIU Setor Central',
						path: this.$store.getters.basePath + 'arquivos/arco-tiete/kml/piu-setor-central.kml',
						stroke_color: 'rgba(0, 0, 0, 0.2)',
						fill_color: 'rgba(255, 217, 179, .5)',
						stroke_width: 1
					}
				]
			},
			mapa2: {
				id: 'mapa2',
				center: [ -5197200, -2694800 ],
				zoom: 14,
				layers: [
					{
						title: 'Setor 1 - Lapa',
						path: this.$store.getters.basePath + 'arquivos/arco-tiete/kml/setor_1-lapa.kml',
						stroke_color: 'rgba(0, 0, 0, .5)',
						fill_color: 'rgba(255, 255, 255, .5)',
						stroke_width: 2
					},
					{
						title: 'Setor 2 - Limão',
						path: this.$store.getters.basePath + 'arquivos/arco-tiete/kml/setor_2-limao.kml',
						stroke_color: 'rgba(0, 0, 0, .5)',
						fill_color: 'rgba(255, 217, 179, .5)',
						stroke_width: 2
					},
					{
						title: 'Operação Urbana Consorciada Água Branca',
						path: this.$store.getters.basePath + 'arquivos/arco-tiete/kml/oucab.kml',
						stroke_color: 'rgba(0, 0, 0, 0.5)',
						fill_color: 'rgba(181, 181, 181, 0.5)',
						stroke_width: 2
					}
				]
			},
			mapa3: {
				id: 'mapa3',
				center: [ -5190000, -2696000 ],
				zoom: 13,
				layers: [
					{
						title: 'Setor 3 - Santana',
						path: this.$store.getters.basePath + 'arquivos/arco-tiete/kml/setor_3-santana.kml',
						stroke_color: 'rgba(0, 0, 0, .5)',
						fill_color: 'rgba(255, 255, 255, .5)',
						stroke_width: 2
					},
					{
						title: 'Setor 4 - Vila Guilherme-Vila Maria',
						path: this.$store.getters.basePath + 'arquivos/arco-tiete/kml/setor_4-v_guilhere_v_maria.kml',
						stroke_color: 'rgba(0, 0, 0, .5)',
						fill_color: 'rgba(255, 217, 179, .5)',
						stroke_width: 2
					},
					{
						title: 'PIU Setor Central',
						path: this.$store.getters.basePath + 'arquivos/arco-tiete/kml/piu-setor-central.kml',
						stroke_color: 'rgba(0, 0, 0, 0.5)',
						fill_color: 'rgba(181, 181, 181, 0.5)',
						stroke_width: 2
					}
				]
			},
			seq1: {
				cssBaseId: 'seq1',
				tipo: 'sequencial',
				mapW: 1900,
				mapH: 1125,
				base: {
					legendas: [
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-1.png', descricao: 'Perímetro Arco Tietê' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-2.png', descricao: 'Parques, praças e canteiros' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-3.png', descricao: 'Hidrografia' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-4.png', descricao: 'Quadra viária' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-5.png', descricao: 'Ferrovia' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-6.png', descricao: 'Linha Metrô' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-7.png', descricao: 'Estação CPTM' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-8.png', descricao: 'Estação Metrô' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-9.png', descricao: 'Terminal de ônibus' }
					]
				},
				layers: [{
					titulo: 'PIU Anhembi',
					path: 'arquivos/arco-tiete/img/4-1.png',
					legendas: [
						[
							{ path: 'arquivos/arco-tiete/img/legenda/4-1-1.png', descricao: 'PIU Anhembi - Perímetro de abrangência' },
							{ path: 'arquivos/arco-tiete/img/legenda/4-1-2.png', descricao: 'PIU Anhembi - Perímetro expandido' }
						]
					],
					textos: {
						'O que é': 'definição de parâmetros e diretrizes urbanísticas para a Zona de Ocupação Especial (ZOE) Anhembi (Sambódromo e Complexo do Anhembi - Perímetro de Abrangência) e de programa de intervenções para o Perímetro Expandido.',
						'Objetivo': 'qualificação urbanística e paisagística da área, de forma que os percentuais de destinação pública obrigatória originados do processo de parcelamento das glebas contribuam para integrar os territórios da ZOE Anhembi com o entorno; ampliação da acessibilidade ao complexo do Anhembi; realização de ações integradas e intersetoriais que envolvem habitações precárias, recuperação de córregos, abertura de viário e implantação de novas áreas verdes; ampliação da conectividade urbana entre os bairros da Zona Norte e o fluxo dos corredores de ônibus.',
						'Motivação': 'alienação da participação societária detida pelo Município de São Paulo na São Paulo Turismo, conforme Plano Municipal de Desestatização.',
						'Regulação': 'Lei Municipal n°16.766/2017, Lei Municipal n° 16.886/2018, Decreto Municipal nº 58.623/ 2019.',
						'Considerações para o PIU Arco Tietê': 'Considerar o Perímetro de Abrangência do PIU Anhembi como território de projeto específico; estudar alternativa para compartilhamento dos recursos com o PIU Arco Tietê, visando à implantação efetiva das intervenções bem como alternativas para gestão integrada da implantação das intervenções previstas em ambos; retomar o tema da atualização das bases de avaliação do potencial construtivo adicional, frente às dinâmcias do mercado de imóveis nos últimos anos; reavaliar intervenções e diretrizes urbanísticas previstas para os Projetos Estratégicos localizados na Zona Norte previstos pelo PL nº581/2016 e não contempladas no PIU Anhembi; considerar na revisão do PIU Arco Tietê os estudos e adequações viárias necessárias para implantação das melhorias previstas no Programa de Intervenções do PIU Anhembi.'
					}
				}, {
					titulo: 'PIU Setor Central',
					path: 'arquivos/arco-tiete/img/4-2.png',
					legendas: [
						[
							{ path: 'arquivos/arco-tiete/img/legenda/4-2-1.png', descricao: 'PIU Setor Central' },
							{ path: 'arquivos/arco-tiete/img/legenda/4-2-2.png', descricao: 'Setor Central da MEM' }
						]
					],
					textos: {
						'O que é': 'adequação do instrumento vigente (Operação Urbana Centro) às novas exigências da Lei Federal nº 10.257/2001 e do PDE, conformando novos contornos urbanísticos para o instrumento em vigor',
						'Objetivo': 'otimização da infraestrutura existente, principalmente a partir de novas articulações com o sistema de transporte coletivo e a provisão de habitação de interesse social, considerando a relação de complementaridade entre os distritos do Centro histórico e os distritos adjacentes – os chamados bairros centrais – conformando uma área com vasta oferta de infraestrutura urbana e a concentração de funções e usos centrais e de alcance metropolitano',
						'Motivação': 'revisão da Operação Urbana Centro (OU Centro), conforme PDE',
						'Regulação': 'Lei Municipal nº 12.349/1997',
						'Considerações para o PIU Arco Tietê': 'Retirar do escopo do PIU Arco Tietê as ações presentes no Programa de Intervenções do Perímetro do PIU Setor Central, que serão por ele financiadas; reestudar os perímetros da AIU Apoios Urbanos e da AIU Centralidade da Metrópole em função da sobreposição com o PIU Setor Central.',
						'Obs': 'Projeto fase de desenvolvimento, resultará em Projeto de Lei específico a ser encaminhado ao Legislativo.'
					}
				}, {
					titulo: 'PIU Terminal Princesa Isabel',
					path: 'arquivos/arco-tiete/img/4-3.png',
					legendas: [
						[
							{ path: 'arquivos/arco-tiete/img/legenda/4-3-1.png', descricao: 'PIU Terminal Princesa Isabel' }
						]
					],
					textos: {
						'O que é': 'indicação de perímetro e diretrizes que orientarão a transformação urbanística pretendida',
						'Objetivo': 'implantação de melhorias urbanísticas no terminal de ônibus e seu entorno de forma a garantir seu pleno funcionamento, bem como potencializar as atividades comerciais na área; requalificar o uso residencial, acrescentar novos espaços e equipamentos públicos de qualidade, assim como apresentar modelo de financiamento e gestão do projeto',
						'Motivação': 'redução do custeio dos terminais de ônibus, concedendo-os a agentes privados para operação e exploração econômica, conforme Plano Municipal de Desestatização',
						'Regulação': 'Lei Municipal nº 16.211/2015, Decreto Municipal nº 58.368/2018',
						'Considerações para o PIU Arco Tietê': 'Retirar do escopo da revisão a Área de Transformação Condicionada Campos Elíseos, indicada anteriormente no PL nº581/2016'
					}
				}, {
					titulo: 'PIU Parque Minhocão',
					path: 'arquivos/arco-tiete/img/4-4.png',
					legendas: [
						[
							{ path: 'arquivos/arco-tiete/img/legenda/4-4-1.png', descricao: 'PIU Parque Minhocão' }
						]
					],
					textos: {
						'O que é': 'conjunto de estudos técnicos, processos participativos  e discussões públicas para proposição das intervenções urbanas que constituirão a implantação do Parque Minhocão',
						'Objetivo': 'alteração do uso e formas de apropriação desse espaço',
						'Motivação': 'gradual restrição ao transporte individual motorizado no Elevado João Goulart, até sua completa desativação como via de tráfego, tendo como possibilidades a sua demolição ou transformação, parcial ou integral, em parque, conforme PDE',
						'Regulação': 'Lei nº 16.833/2018',
						'Considerações para o PIU Arco Tietê': 'Retirar do escopo da revisão a Área de Transformação Condicionada Elevado João Goulart, indicada anteriormente no PL nº581/2016',
						'Obs': 'Projeto em desenvolvimento'
					}
				}, {
					titulo: 'Resolução da Câmara Técnica de Legislação Urbanística (CTLU)',
					path: 'arquivos/arco-tiete/img/4-5.png',
					legendas: [
						[
							{ titulo: 'LPUOS - Lei 16.402/2016' },
							{ path: 'arquivos/arco-tiete/img/legenda/4-5-1.png', descricao: 'ZEM' },
							{ path: 'arquivos/arco-tiete/img/legenda/4-5-2.png', descricao: 'ZEMP' }
						]
					],
					textos: {
						'Descrição': 'Trata-se de deliberação da Câmara Técnica de Legislação Urbanística (CTLU) favoravelmente à aplicação do Coeficiente de Aproveitamento máximo igual a 4, dispensa de atendimento ao gabarito máximo de altura e fatores de planejamento igual a 2 para os usos residenciais e não residenciais para os lotes demarcados como ZEM (Zonas Eixo de Estruturação da Transformação Metropolitana) e ZEMP (Zona Eixo de Estruturação da Transformação Metropolitana Previsto) contidos no perímetro do Arco Tietê , nos termos dos §1º, 2º e 3º do art. 8º da Lei nº 16.402/ 2016; Para as ZEMP, os parâmetros e índices estabelecidos serão aplicados desde que atendidos o art. 83 da Lei nº 16.050/2014, o qual é responsável por condicionar a liberação dos parâmetros em função da emissão da Ordem de Serviços das obras das infraestruturas do sistema de transporte previsto',
						'Regulação': 'Resolução SMUL.AOC.CTLU/004/2018',
						'Considerações para o PIU Arco Tietê': 'Retomar os estudos para as Áreas de Transformação, Qualificação e Preservação do PIU Arco Tietê, de forma a estabelecer detalhadamente os parâmetros que são fruto de análises detalhadas do território, em especial nos perímetros que recepcionarão os instrumentos urbanísticos'
					}
				}, {
					titulo: 'Código de Obras e Edificações (COE)',
					path: 'arquivos/arco-tiete/img/4-6.png',
					legendas: [
						[
							{ titulo: 'Leis de Melhoramento Viário - Siurb' },
							{ path: 'arquivos/arco-tiete/img/legenda/4-6-1.png', descricao: 'Promulgadas após 1988' },
							{ path: 'arquivos/arco-tiete/img/legenda/4-6-2.png', descricao: 'Promulgadas até 1988' }
						]
					],
					textos: {
						'Descrição': 'Os novos regramentos urbanísticos contidos no art. 102 e art. 103 da Lei nº 16.642/2017 e no art. 97 do Decreto nº 57.776/2017, alteram a validade de uma série de alinhamentos viários necessários para a implantação das diretrizes do PL nº 581/2016, impactando ações relativas à mobilidade urbana do seu Programa de Intervenções. Outra implicação do COE é a possibilidade de utilização do potencial construtivo do lote original, conforme §1º do art. 107 da Lei nº 16.642/2017. Essa disposição é de grande importância para o PIU Arco Tietê visto que seu plano de melhoramentos viários acarreta em grandes desapropriações, sobretudo no caso dos principais eixos, como os Apoios Urbanos',
						'Regulação': 'Lei Municipal nº 16.642 /2017 e Decreto Municipal nº 57.776/2017',
						'Considerações para o PIU Arco Tietê': 'Incluir na revisão do Arco Tietê os trechos de melhoramentos viários anteriores a 1988 considerados essenciais às estratégias de mobilidade do PIU, bem como dar continuidade às propostas de alteração de trechos da Lei nº 16.541/2016, resultantes do processo de desenvolvimento das AIU no PIU Arco Tietê; Incluir nos estudos de financiamento do PIU Arco Tietê as disposições trazidas pela Lei nº 16.642/2017 e pelo Decreto nº 57.776/ 2017 em relação à possibilidade de utilização do potencial construtivo integral em lotes atingidos por melhoramentos viários'
					}
				}, {
					titulo: 'Parceria Público Privada da Habitação (PPP da Habitação)',
					path: 'arquivos/arco-tiete/img/4-7.png',
					legendas: [
						[
							{ path: 'arquivos/arco-tiete/img/legenda/4-7-1.png', descricao: 'PPP Cohab' },
							{ char: '1', descricao: 'Lote 6 - V. Maria-V. Guilherme' },
							{ char: '2', descricao: 'Lote 9 - Lapa' }
						]
					],
					textos: {
						'Descrição': 'Trata-se de seleção de empresas interessadas em participar do programa de Parceria Público-Privada para construção de Habitação de Interesse Social e Mercado Popular em São Paulo, por meio Edital de Concorrência Internacional nº 001/2018, lançado pela COHAB-SP/SEHAB.\nCada lote é composto por um conjunto de áreas públicas, para as quais é especificado um número mínimo de novas unidades habitacionais, prevendo-se a mistura de diversas faixas de renda, além de diretrizes urbanísticas e investimentos em equipamentos e infraestrutura pública.\nO Edital prevê que para cada Lote será realizada uma concessão administrativa pelo prazo de 20 anos à iniciativa privada, responsável pela implantação das unidades habitacionais, das infraestruturas e equipamentos públicos, dos usos não residenciais privados, bem como prestação de serviços de desenvolvimento de trabalho social, de pré e pós-ocupação, de apoio à gestão condominial, apoio a gestão da lista de beneficiários e de manutenção predial e de espaços livres e áreas verdes. O Edital também coloca a possibilidade da modelagem econômica das concessionárias considerarem receitas acessórias decorrentes da comercialização de parte das unidades habitacionais e da exploração das áreas não-residenciais privadas',
						'Considerações para o PIU Arco Tietê': 'Revisar o Programa Habitacional do PIU Arco Tietê, considerando os imóveis incluídos na PPP de habitação'

					}
				}]
			},
			seq2: {
				cssBaseId: 'seq2',
				tipo: 'sequencial',
				mapW: 1900,
				mapH: 1125,
				base: {
					path: 'arquivos/arco-tiete/img/5-1.png',
					legendas: [
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-1.png', descricao: 'Perímetro Arco Tietê' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-2.png', descricao: 'Parques, praças e canteiros' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-3.png', descricao: 'Hidrografia' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-4.png', descricao: 'Quadra viária' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-5.png', descricao: 'Ferrovia' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-6.png', descricao: 'Linha Metrô' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-7.png', descricao: 'Estação CPTM' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-8.png', descricao: 'Estação Metrô' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-9.png', descricao: 'Terminal de ônibus' }
					]
				},
				layers: [{
					titulo: 'Eixo ambiental',
					path: 'arquivos/arco-tiete/img/5-1.png',
					legendas: [
						[{
							path: 'arquivos/arco-tiete/img/legenda/5-1-1.png',
							descricao: 'Galeria/trecho de curso d\'água subterrâneo'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-1-2.png',
							descricao: 'Manchas de inundação'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-1-3.png',
							descricao: 'Isoterma (31°C)'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-1-4.png',
							descricao: 'Parques Municipais e Estaduais'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-1-5.png',
							descricao: 'Raio de influência de 1km de parques'
						}]
					],
					textos: {
						1: 'Em contraposição à existência de um rio de grandes dimensões, o Tietê, e diversos afluentes que originalmente ocupavam uma larga planície formada por meandros, atualmente o cenário ambiental do território em estudo é marcado pela degradação da várzea, na qual se verificam os seguintes problemas: escassez de áreas livres apropriadas ao lazer, presença de cursos d’água poluídos, canalizados e/ou isolados, trechos urbanizados sujeitos à inundação, perdas na biodiversidade, redução da umidade relativa média mensal, formação de ilhas de calor, que se caracterizam pela rápida elevação da temperatura em reduzida extensão territorial.',
						2: 'Esse cenário é resultado do processo de ocupação das várzeas, que promoveu a retificação e canalização de cursos d’água, aterramento de áreas, alta impermeabilização do solo, supressão de vegetação e concentração de atividades e fluxos geradores de poluição.'
					}
				}, {
					titulo: 'Eixo mobilidade',
					path: 'arquivos/arco-tiete/img/5-2.png',
					legendas: [
						[{
							titulo: 'Ações prioritárias no Sistema de Transporte Público Coletivo (PDE 2014)'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-2-1.png',
							descricao: 'Corredor municipal de ônibus existente'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-2-2.png',
							descricao: 'Corredor municipal de ônibus planejado (1ª etapa)'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-2-3.png',
							descricao: 'Corredor municipal de ônibus planejado (2ª etapa)'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-2-4.png',
							descricao: 'Linha Metroviária planejada (1ª etapa)'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-2-5.png',
							descricao: 'Linha Metroviária planejada (2ª etapa)'
						}],
						[{
							titulo: 'Volume de veículos da hora-pico da manhã'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-2-6.png',
							descricao: 'Acima de 2500'
						}]
					],
					textos: {
						1: 'Assim como demais setores da MEM, o Arco Tietê caracteriza-se como região atratora (e não geradora) de viagens. No que diz respeito ao modo como as viagens são realizadas, o transporte coletivo corresponde a 52% das viagens com origem e/ou destino no Arco. Isto se deve à presença significativa de infraestruturas de transportes coletivos de alta e média capacidade: trem, metrô e ônibus. Além da infraestrutura existente, parte da infraestrutura planejada para melhorar a mobilidade no Município, incluída nas ações prioritárias no sistema de transporte público coletivo definidas pelo PDE, impacta diretamente o Arco Tietê.',
						2: 'Esses dados, no entanto, não contemplam as viagens exclusivamente com passagem pelo Arco e, neste caso, há que se considerar que o perímetro também é marcado pelo transporte rodoviário rápido, apresentando estruturas viárias expressas, adequadas aos grandes fluxos de veículos, como a Marginal Tietê, mais importante eixo transversal da cidade, desempenhando funções de transporte no âmbito nacional, estadual, metropolitano e local.',
						3: 'Nesse contexto, a mobilidade local e os deslocamentos a pé são afetados pela existência de barreiras e por um desenho de vias e pontes que atende preferencialmente os deslocamentos de automóveis, tendo como resultado baixo volume de viagens realizadas por modos não motorizados (apenas 15%).'
					}
				}, {
					titulo: 'Eixo econômico',
					path: 'arquivos/arco-tiete/img/5-3.png',
					legendas: [
						[{
							titulo: 'Uso do solo (IPTU 2018)'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-3-1.png',
							descricao: 'Oficina/barracão/telheiro/armazém'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-3-2.png',
							descricao: 'Comercial horizontal'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-3-3.png',
							descricao: 'Comercial vertical'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-3-4.png',
							descricao: 'Indústria'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-3-5.png',
							descricao: 'Residencial horizontal'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-3-6.png',
							descricao: 'Residencial vertical'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-3-7.png',
							descricao: 'Templo/clube/ginásio ou estádio'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-3-8.png',
							descricao: 'Terreno'
						}],
						[{
							path: 'arquivos/arco-tiete/img/legenda/5-3-9.png',
							descricao: 'Transformação das quadras em uso residencial vertical entre 2000 e 2019'
						}]
					],
					textos: {
						1: 'Diversidade de uso e ocupação do solo, trechos com morfologias urbanas absolutamente distintas e em diferentes graus de consolidação conformam o perímetro original do Arco Tietê e suas adjacências. De forma geral, predominam nas bordas norte e sul do perímetro bairros residenciais que abrigam atividades comerciais locais mais ou menos estruturadas. No restante do território, indústrias, galpões, fábricas e armazéns, historicamente instalados na várzea e atualmente inseridos num processo de transição da base produtiva, dividem espaço com os polos econômicos do Bom Retiro e Brás-Pari, onde prevalecem as atividades comerciais de grande abrangência e com as grandes glebas públicas concentradas no eixo norte-sul central da cidade. Nesse cenário, na medida em que se aproxima do rio Tietê, há um aumento da concentração de áreas com probabilidade e viabilidade de transformação.',
						2: 'No que diz respeito à dinâmica dos usos, há um processo de renovação caracterizado pelo avanço dos usos residencial e comercial em direção à várzea, em função dos grandes lotes ali presentes, que dividem espaço com atividades remanescentes, como a indústria química no Limão. A oferta de empregos associada aos estabelecimentos não residenciais, sejam eles oriundos desta renovação (torres corporativas, shopping centers, entre outros) ou remanescentes das ocupações tradicionais (indústrias do Limão, Jaguara e Lapa, entre outros), refletem-se nos motivos das viagens com destino ao Arco Tietê: os motivos trabalho no setor serviços, setor comercial e setor industrial somam 56,9% das viagens atraídas, acima da média metropolitana, que é de 44,1%.'
					}
				}, {
					titulo: 'Eixo social',
					path: 'arquivos/arco-tiete/img/5-4.jpg',
					legendas: [
						[{
							path: 'arquivos/arco-tiete/img/legenda/5-4-1.png',
							descricao: 'Edificações'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-4-2.png',
							descricao: 'Conjunto habitacional'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-4-3.png',
							descricao: 'Favela'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-4-4.png',
							descricao: 'Núcleo'
						}],
						[{
							titulo: 'Perímetro das zonas (LPUOS)'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-4-5.png',
							descricao: 'ZEIS-1'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-4-6.png',
							descricao: 'ZEIS-2'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-4-7.png',
							descricao: 'ZEIS-3'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-4-8.png',
							descricao: 'ZEIS-4'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/5-4-9.png',
							descricao: 'ZEIS-5'
						}]
					],
					textos: {
						1: 'As áreas com precariedade habitacional localizadas no Arco Tietê coincidem predominantemente com áreas que não foram plenamente urbanizadas até os dias atuais.  A presença significativa de vazios urbanos e a convivência conflituosa entre os usos industriais, os grandes galpões comerciais e as áreas residenciais intensifica a precariedade. Além do mais, a conversão de grandes glebas da várzea em tecido urbano acessível e de uso misto demanda altos investimentos em urbanização.',
						2: 'No que diz respeito à provisão de moradias, se, por um lado, o predomínio de baixas densidades populacionais em grande parte do perímetro e a presença de grandes infraestruturas de mobilidade revelam a necessidade do aprofundamento do tema do aumento da oferta de habitação de interesse social e mercado popular, por outro, a ampliação do acesso à moradia não se reflete em presença significativa das ZEIS 2, 3 e 5 disponíveis para produção de empreendimentos para essa demanda.'
					}
				}]
			},
			seq3: {
				cssBaseId: 'seq3',
				tipo: 'multi',
				mapW: 1900,
				mapH: 1125,
				base: {
					path: 'arquivos/arco-tiete/img/7-base.png',
					legendas: [
						{ path: 'arquivos/arco-tiete/img/legenda/7-0-1.png', descricao: 'Projetos colocalizados' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-3.png', descricao: 'Hidrografia' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-5.png', descricao: 'Ferrovia' },
						{ path: 'arquivos/arco-tiete/img/legenda/4-0-6.png', descricao: 'Linha Metrô' }
					]
				},
				layers: [{
					titulo: 'Áreas transformáveis e consolidadas',
					path: 'arquivos/arco-tiete/img/7-0.png',
					legendas: [
						[{ path: 'arquivos/arco-tiete/img/legenda/4-0-4.png', descricao: 'Lotes consolidados' }]
					],
					textos: {
						1: 'As áreas transformáveis, ou seja, lotes e glebas que apresentem maior probabilidade e viabilidade de transformação pelas suas características morfológicas, tipológicas e usos existentes se revelam a partir da identificação do seu inverso, ou seja, das áreas e usos considerados consolidados. A base de dados utilizada foi formada a partir do cruzamento das informações do Imposto Predial e Territorial Urbano (IPTU) de 2018 e da estrutura fundiária disponibilizada na plataforma Geosampa (Julho/2019), contando com informações e geometrias atualizadas pela própria SP-Urbanismo.',
						2: 'Foram considerados como consolidados os seguintes lotes e glebas: Usos residenciais, comerciais, serviços e uso misto verticais, comércio e serviços horizontais significativos; equipamentos, usos especiais e usos coletivos correspondentes às escolas, hotéis, hospitais, cartórios, cinemas, teatros, clubes, templos, entre outros; edifícios nos quais incidem tombamentos e regramentos específicos dos órgãos de patrimônio; lotes com indicativo de incorporação imobiliária em curso; lotes com área inferior a 500m².'
					}
				}, {
					titulo: 'Áreas públicas',
					path: 'arquivos/arco-tiete/img/7-1.png',
					legendas: [
						[{
							titulo: 'Áreas de influência'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/7-1-1.png', descricao: 'Áreas públicas'
						}]
					],
					textos: {
						1: 'Dentre as áreas públicas existentes, sejam elas de propriedade do Município, do Estado ou da União, foram destacadas aquelas com potencial de transformação ou cuja transformação levaria a melhorias ambientais significativas. Foram também realizados filtros para descartar áreas com usos já consolidados, em sua maioria equipamentos de médio e grande porte. Por outro lado, lotes ou glebas que contenham usos relevantes, mas cuja área de terreno ainda viabilize intervenções e transformações significativas, também foram incluídos nesse perímetro.'
					}
				}, {
					titulo: 'Glebas com potencial de parcelamento',
					path: 'arquivos/arco-tiete/img/7-2.png',
					legendas: [
						[{
							titulo: 'Áreas de influência'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/7-2-1.png', descricao: 'Glebas > 20.000m² e CA existente entre 0 e 1'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/7-2-2.png', descricao: 'Glebas > 20.000m² e CA existente > 1'
						}]
					],
					textos: {
						1: 'Contempla as glebas maiores que 20.000m² e sua classificação de acordo com a densidade construtiva atual, ou seja, aquelas com Coeficiente de Aproveitamento (CA) existente entre 0 e 1 e aquelas com CA resultante maior que 1.',
						2: 'De acordo com os art. 44 e 45 da Lei nº 16.402/2016 (LPUOS), ao se transformarem estas glebas deverão destinar percentual mínimo de áreas públicas, portanto, sua identificação objetiva demonstrar o potencial de alteração da morfologia urbana, reduzindo as distâncias e os percursos, sobretudo para os pedestres, a partir do rompimento de grandes quadras, com presença significativa no Arco Tietê. Demonstra também a capacidade de geração de áreas públicas, sobretudo verdes e institucionais, que serão de fundamental importância para a qualificação urbana e ambiental do território.'
					}
				}, {
					titulo: 'Sistemas ambientais',
					path: 'arquivos/arco-tiete/img/7-3.png',
					legendas: [
						[{
							titulo: 'Áreas de influência'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/7-3-1.png', descricao: 'Sistemas ambientais'
						}]
					],
					textos: {
						1: 'O conjunto identificado busca revelar as áreas cuja transformação urbanística se associe diretamente às ações de qualificação ambiental, por meio da demarcação de lotes e glebas adjacentes aos cursos d’água identificados no perímetro, das áreas atingidas por manchas de inundação  e de trechos com as temperaturas de superfície mais elevadas (acima de 30ºC), dado indicativo da formação de ilhas de calor.',
						2: 'A recorrência de situações de sobreposição entre a rede hídrica e o sistema viário estrutural perpendicular à Marginal Tietê se coloca como grande desafio para o plano urbanístico, sobretudo porque as questões relativas ao saneamento e drenagem são fundamentalmente sistêmicas, ou seja, dependem de uma visão ampla de cada sub-bacia, que extrapolam o perímetro do Arco Tietê tanto a norte quanto a sul. Embora ações restritas ao leito maior do rio Tietê não sejam capazes de superar esses problemas sistêmicos, considera-se ainda relevante o redesenho das interfaces entre as vias e lotes adjacentes aos cursos d’água, de forma a aproximar a cidade e suas águas e, quando possível, auxiliar na mitigação de problemas ambientais.'
					}
				}, {
					titulo: 'Habitação de Interesse Social e vulnerabilidade',
					path: 'arquivos/arco-tiete/img/7-4.png',
					legendas: [
						[{
							titulo: 'Áreas de influência'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/7-4-1.png', descricao: 'Habitação de interesse social e vulnerabilidade'
						}]
					],
					textos: {
						1: 'Foram considerados os assentamentos precários demarcados como favelas e núcleos urbanizados além de conjuntos habitacionais com ou sem precariedade, localizados em áreas públicas ou privadas dentro do perímetro. Também foram somadas ao conjunto as áreas demarcadas como Zonas Especiais de Interesse Social (ZEIS), em especial as ZEIS-1, ZEIS-2, ZEIS-3 e ZEIS-5 com potencial de transformação.',
						2: 'A presença de áreas com moradia de interesse social e vulnerabilidade é um importante indicador dos territórios que deverão ser foco do futuro programa de intervenções do PIU Arco Tietê, seja a partir da qualificação de assentamentos existentes, como também por meio da provisão de habitação de interesse social, em suas diversas modalidades. Tais áreas devem, ainda, ser pensadas em conjunto com as demais variáveis, de forma a direcionar intervenções integradas em relação aos aspectos urbanísticos, habitacionais e ambientais.'
					}
				}, {
					titulo: 'Mobilidade urbana',
					path: 'arquivos/arco-tiete/img/7-5.png',
					legendas: [
						[{
							titulo: 'Áreas de influência'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/7-5-1.png', descricao: 'Mobilidade urbana'
						}]
					],
					textos: {
						1: 'Esta camada consiste na demarcação das áreas de influência das infraestruturas de mobilidade existentes e previstas, seguindo os mesmos critérios de distância e de demarcação de quadras estabelecidos pelo PDE para os Eixos de Estruturação da Transformação Urbana (ver art. 76 da Lei nº16.050/2014).',
						2: 'Em relação à rede planejada, foram consideradas as estações das Linhas 6 e 19 do Metrô, bem como vias cuja implantação de melhoramentos viários previstos são viáveis em um primeiro momento, considerando o recorte temporal previsto para o Arco Tietê (20 anos), são eles: trechos dos corredores do Apoio Urbano Norte (trecho entre Av. Freguesia do Ó até Av. Prof. Ida Kolb e trecho entre Av. Darzan até o Metrô Tatuapé), bem como as vias Av. Raimundo Pereira de Magalhães, Rua da Balsa, e Rua Fortunado Ferraz.',
						3: 'As áreas de influência da rede de mobilidade selecionada representam o conjunto de lotes e glebas que já são (ou ainda serão) afetadas pela implantação das infraestruturas de mobilidade urbana. Porém, diferente dos Eixos de Estruturação da Transformação Urbana previstos no PDE, sua demarcação não leva, necessariamente, à ativação de áreas com alto potencial construtivo e populacional, sobretudo porque alguns melhoramentos viários foram selecionados apenas para qualificar as condições de mobilidade e acessibilidade existentes.'
					}
				}, {
					titulo: 'Base produtiva - indústrias ativas',
					path: 'arquivos/arco-tiete/img/7-6.png',
					legendas: [
						[{
							titulo: 'Áreas de influência'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/7-6-1.png', descricao: 'Indústria ativa'
						}]
					],
					textos: {
						1: 'Apesar da perda de solo industrial em todos os Distritos que compõem o Arco Tietê, como analisado no diagnóstico socioterritorial, ainda é possível identificar subsetores da indústria com importante atuação no perímetro.',
						2: 'Esta camada tem como objetivo demonstrar o retrato atual da base produtiva industrial, destacando as áreas que ainda mantém relevante concentração de empregos nesse setor da economia, mesmo com o processo de substituição gradual de usos no entorno.',
						3: 'Busca-se, dessa forma, identificar territórios cuja permanência da atividade industrial seja positiva sob o ponto de vista de geração de emprego e renda e da economia urbana como um todo, controlando a expansão de usos que intensificariam a rápida substituição para atividades de comércio e serviços, ou mesmo expansão da atividade imobiliária.'
					}
				}, {
					titulo: 'Centralidades',
					path: 'arquivos/arco-tiete/img/7-7.png',
					legendas: [
						[{
							titulo: 'Áreas de influência'
						}, {
							path: 'arquivos/arco-tiete/img/legenda/7-7-1.png', descricao: 'Concentração de empregos'
						}]
					],
					textos: {
						1: 'Esta camada trata da identificação de centralidades no perímetro, baseadas na concentração relativa de emprego e destaca polos e vetores de atividade comercial e de serviços.',
						2: 'De fato, as quadras destacadas revelam o importante processo de transformação e substituição de usos que tem ocorrido em diversos trechos do Arco Tietê. Tais dinâmicas levam, ademais, à formação de centralidades em áreas bem servidas de transporte público, como é o caso do eixo da Av. Cruzeiro do Sul e arredores das estações de Metrô em Santana, mas também apontam para a formação de novos polos em áreas com antigo tecido urbano industrial, como na Lapa, cuja morfologia caracterizada por grandes quadras e baixa microacessibilidade, isola essas atividades e dificulta a formação de bairros que valorizem a mobilidade ativa.'
					}
				}, {
					titulo: 'Setores de intervenção',
					path: 'arquivos/arco-tiete/img/7-8.png',
					legendas: [
						[{
							titulo: 'Setores de análise'
						}, {
							char: '1', descricao: 'Lapa'
						}, {
							char: '2', descricao: 'Limão'
						}, {
							char: '3', descricao: 'Santana'
						}, {
							char: '4', descricao: 'Vila Guilherme-Vila Maria'
						}, {
							char: '5', descricao: 'Jaguara'
						}, {
							char: '6', descricao: 'Belém'
						}]
					],
					textos: {}
				}]
			}
		}
	},
	components: {
		Comments,
		CommentsLoader,
		PageTop,
		Indice,
		Imagem,
		Mapa,
		LayerExplorer,
		processo,
		gestao,
		dadosgerais,
		Apoio
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

p.e { background: $vermelho-tr; padding: 2rem }

.ArcoTiete {
	.tabela {
		margin: 2rem auto;
		padding: 0 2rem;
		max-width: 1200px;
		min-width: 700px;
		width: intrinsic;
		width: max-content;
		overflow-x: auto;
		table {
			margin: 0 auto;
			background-color: #FFF;
			tr {
				&:nth-child(2) td {
					background-color: $cinza-3;
					color: $cinza-1;
				}
				&:last-child td { background-color: $cinza-3; }
			}
		}
	}
	@media (max-width: 600px) {
		.tabela {
			min-width: unset;
			max-width: calc(100% - 2rem);
			padding: 0;
		}
	}
}

</style>
