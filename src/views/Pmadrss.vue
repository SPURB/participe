<template>
	<div class="Pmadrss" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/placeholder_480w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>1º Plano Municipal de Agroecologia e Desenvolvimento Rural Sustentável e Solidário PMADRSS</div></template>
			<!-- <template slot="subtitulo"><div>Subtítulo da Nova Consulta</div></template> -->
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<section>
			<h2 class="titulo" indent="1">Introdução</h2>
			<br>
			<p>A criação do “1º Plano Municipal de Agroecologia e Desenvolvimento Rural Sustentável e Solidário” ocorre por determinação estabelecida pela Lei nº 16.050, de 31 de julho de 2014 que aprova a Política de Desenvolvimento Urbano e o Plano Diretor Estratégico do Município de São Paulo.</p>
			<p>Idealizado para compor o conjunto da Politica de Desenvolvimento Urbano municipal, é a primeira vez que o estimulo a agricultura urbana, a agroecologia e o desenvolvimento rural sustentável surge como importante componente da busca pela sustentabilidade na cidade, da utilização harmoniosa dos recursos naturais e a conservação ambientalmente saudável da paisagem urbana; dando reconhecimento a Zona Rural e as diretrizes que nortearão a estruturação dos territórios rurais e das suas atividades correlatas.</p>
			<p>A mesma Lei n 16.050, em seu artigo 192 cria a figura do Conselho Municipal Desenvolvimento Rural Solidário e Sustentável, regulado pelo Decreto Municipal nº 57.058 de 14/06/2016, e que fora oficialmente constituido em virtude da realização da 1ª Conferência Municipal de Desenvolvimento Rural Solidário e Sustentável em 15 de Junho de 2016 onde ocorreu a eleição dos seus conselheiros. Nesta 1ª Conferência também foram discutidas e aprovadas diretrizes, definidas prioridades e elencadas propostas para a construção do PMADRSS, a partir de um amplo processo participativo.</p>
			<p>Desta forma, como componente da Política Pública de Desenvolvimento Urbano, o Plano Municipal de Agroecologia e Desenvolvimento Rural Sustentável e Solidário tem a responsabilidade de buscar o entrelaçamento das diversas políticas públicas existentes, buscando o aprimoramento no que tange a zona rural e agricultura urbana, formando um conjunto de ações para a promoção da segurança alimentar e nutricional, da soberania alimentar, do desenvolvimento rural e urbano e do direito humano à alimentação adequada (DHAA). Sendo também de sua responsabilidade apontar novas e necessárias políticas públicas com vistas ao  fortalecimento das práticas agropecuárias de forma compatível com a conservação ambiental, considerando a ecologia urbana e possibilitando a melhoria da qualidade de vida para os cidadãos e cidadãs da cidade. </p>
			<p>Os apontamentos e recomendações de ações que integram esse Plano  servirão para guiar a atuação do Poder Público, tanto do Executivo, quanto do Legislativo e do Judiciário, para garantir os objetivos previstos no Plano Diretor Estratégico (PDE) em relação ao território rural, principalmente, mas também ao território urbano, onde há imóveis rurais e agricultura urbana e periurbana. A  promoção do desenvolvimento rural e da agroecologia se dá a partir de ações complementares, integradas e transdisciplinares, apontando para a necessidade de uma articulação entre secretarias municipais, entre órgãos públicos estaduais e federais, entre espaços colegiados de participação social e entre a atuação pública e privada. Nenhuma ação descrita neste Plano  está isolada, pelo contrário: todas estão conectadas e deverão ser implantadas de forma articulada, mediante a avaliação de prioridade e arranjos institucionais necessários. O Plano Municipal de Agroecologia e Desenvolvimento Rural Solidário e Sustentável de São Paulo está estruturado de forma a impulsionar o desenvolvimento relacionado às zonas rurais e às áreas urbanas que possuem atividades de produção agropecuária. Desta forma, a partir de eixos temáticos, foram elaboradas diretrizes norteadoras que estruturam as ações elencadas no plano e as direcionam para o atendimento maior da política pública: garantir a qualidade de vida da população e proporcionar o desenvolvimento rural no município de São Paulo.</p>

			<Comments :attr="{id:commentId(true), context:'Introdução'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Estruturação do Plano</h2>
			<p>Conforme o Plano Diretor Estratégico (PDE), o Plano contém as seguintes seções:</p>
			<ol type="I">
				<li style="list-style-type: none">APRESENTAÇÃO</li>
				<li value="1">INTRODUÇÃO</li>
				<li>MARCO CONCEITUAL E METODOLOGIA ADOTADA NA CONSTRUÇÃO DO PLANO
					<ol type="1">
						<li>Principais Conceitos</li>
						<li>Histórico De Construção Do Plano</li>
					</ol>
				</li>
				<li>DIAGNÓSTICO SOCIOAMBIENTAL, ECONÔMICO E CULTURAL DA AGROECOLOGIA E DA  ZONA RURAL NA CIDADE DE SÃO PAULO
					<ol type="1.1">
						<li>Considerações Gerais</li>
						<li>Caracterização do Território Rural no Município
							<ol>
								<li>O ordenamento territorial</li>
								<li>Breve Caracterização das áreas rurais na cidade de São Paulo</li>
								<li>Caracterização Demográfica e Econômica das áreas rurais na cidade de São Paulo</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>
					CARACTERIZAÇÃO DAS CADEIAS PRODUTIVAS EXISTENTES E POTENCIAIS
				</li>
				<li>DIRETRIZES PARA ORIENTAR AS AÇÕES DOS ÓRGÃOS PÚBLICOS E DE SUAS PARCERIAS</li>
				<li>CONSIDERAÇÕES FINAIS E RECOMENDAÇÕES</li>
			</ol>
			
			<p>
				Para fins da presente Consulta Pública, serão recebidas considerações da população acerca do ponto V. DIRETRIZES PARA ORIENTAR AS AÇÕES DOS ÓRGÃOS PÚBLICOS E DE SUAS PARCERIAS, uma vez que é o principal capítulo onde estão descritas as ações, atividades estratégicas e metas previstas para atuações do Poder Público de forma a fomentar o desenvolvimento rural de forma solidária e sustentável e promover a agroecologia em todo o território municipal.
			</p>
			<p>
				Para melhor visualização do todo, segue abaixo a tabela onde estão descritas e estruturadas as diretrizes previstas no Plano. Sua estrutura consiste em eixos temáticos, ações, objetivos de cada ação, atividades estratégicas para atendimento dos objetivos, metas, órgãos públicos e secretarias responsáveis e parceiras e prioridade.
			</p>
			<ul class="links">
				<li>
					<a :href="src('arquivos/pmadrss/PMDRSS-2019_10_30-Final.pdf')" download>
						<i class="icon-pdf icon"><span>icon_pdf</span></i>
						<div>Tabela PMDRSS</div>
						<span>112 KB</span>
					</a>
				</li>
			</ul>
			<p>As diretrizes para a atuação do Poder Público contidas no plano estão divididas em 17 eixos temáticos, conforme quadro a seguir:</p>
			<table id="table-diretrizes">
				<colgroup>
					<col>
					<col>
				</colgroup>
				<tr>
					<th>EIXOS</th>
					<th>DIRETRIZES</th>
				</tr>
				<tr>
					<td>AGRICULTURA URBANA</td>
					<td>Promover e fomentar a agricultura urbana com base agroecológica, em espaços e equipamentos públicos e privados, principalmente em áreas ociosas, visando a segurança e soberania alimentar, alimentação saudável, auto-consumo, geração de renda, a preservação e educação ambiental e inclusão social.</td>
				</tr>
				<tr>
					<td rowspan="2">CULTURA</td>
					<td>Preservar a memória, identidade e herança cultural dos agricultores e agricultoras e povos indígenas para valorização da sociobiodiversidade.</td>
				</tr>
				<tr>
					<td>Fortalecer e valorizar a cultura da juventude inserida nas atividades da agricultura.</td>
				</tr>
				<tr>
					<td>INFRAESTRUTURA BÁSICA</td>
					<td>Articular e promover serviços básicos e de infraestrutura para a melhoria da qualidade de vida nas zonas rurais e periféricas, priorizando alternativas sustentáveis.</td>
				</tr>
				<tr>
					<td>ASSISTÊNCIA TÉCNICA E EXTENSÃO RURAL (ATER)</td>
					<td>Garantir e fortalecer a ATER municipal integrada entre todos os entes federativos, de forma a atender todos os agricultores do município, priorizando a abordagem agroecológica e processos participativos.</td>
				</tr>
				<tr>
					<td>FORTALECIMENTO INSTITUCIONAL</td>
					<td>Garantir estrutura pública adequada, com orçamento próprio, técnicos e equipamentos que promovam o desenvolvimento rural sustentável e solidário de forma participativa junto à sociedade civil.</td>
				</tr>
				<tr>
					<td>TURISMO</td>
					<td>Desenvolver o turismo nas áreas com atividade agropecuária, fortalecendo e criando pontos turísticos, integrados a educação e conservação ambiental, valorizando a sociobiodiversidade local.</td>
				</tr>
				<tr>
					<td>COMERCIALIZAÇÃO</td>
					<td>Estruturar as cadeias de produção, comercialização e consumo, promovendo a rentabilidade sustentável do setor agropecuário, priorizando a economia solidária.</td>
				</tr>
				<tr>
					<td>INDÍGENAS, MULHERES E JOVENS</td>
					<td>Priorizar em todas as ações do plano os povos indígenas e comunidades tradicionais, mulheres, jovens, e outros grupos em situação de vulnerabilidade social.</td>
				</tr>
				<tr>
					<td rowspan="2">SEGURANÇA E FISCALIZAÇÃO</td>
					<td>Fortalecer o controle ambiental, de forma a garantir a conservação das áreas protegidas e rurais, e a adoção de práticas sustentáveis, resgatando o caráter orientativo da fiscalização.</td>
				</tr>
				<tr>
					<td>Fortalecer e ampliar a segurança pública nas áreas rurais, para prevenir furtos e roubos de equipamentos, insumos e bens pessoais dos agricultores.</td>
				</tr>
				<tr>
					<td>REGULARIZAÇÃO DAS ATIVIDADES</td>
					<td>Promover o acesso à terra e o reconhecimento da agropecuária enquanto uma prática socioeconômica importante no município, identificando as áreas produtivas e viabilizando a regularização das atividades.</td>
				</tr>
				<tr>
					<td>FINANCIAMENTO</td>
					<td>Viabilizar recursos orçamentários e financeiros para o desenvolvimento das ações do plano, articulando recursos de todos os entes federativos.</td>
				</tr>
				<tr>
					<td>PRODUÇÃO ANIMAL</td>
					<td>Fortalecer a regularização das atividades pecuárias do município, garantindo a implantação de um sistema de inspeção municipal de produtos de origem animal, e o cumprimento das normas de vigilância sanitária.</td>
				</tr>
				<tr>
					<td>ENSINO E EDUCAÇÃO</td>
					<td>Utilizar a agricultura urbana/periurbana como instrumento pedagógico, que contempla as diversas dimensões do Desenvolvimento Humano, tanto no ensino formal como informal.</td>
				</tr>
				<tr>
					<td rowspan="2">CONSERVAÇÃO AMBIENTAL</td>
					<td>Implementar os planos ambientais previstos no PDE, em especial, o PMMA e o Plano de Áreas Prestadoras de Serviços Ambientais (e seus instrumentos, entre eles, o PSA), articulados com as demais políticas setoriais</td>
				</tr>
				<tr>
					<td>Viabilizar o manejo sustentável de espécies nativas da Mata Atlântica, bem como da silvicultura como atividades produtivas, geradoras de renda.</td>
				</tr>
				<tr>
					<td rowspan="4">SAÚDE E PROTEÇÃO SOCIAL</td>
					<td>Eliminar o uso indevido dos agrotóxicos, reduzindo de uma forma geral a sua aplicação, para prevenir a contaminação humana e ambiental.</td>
				</tr>
				<tr>
					<td>Promover ações que contribuam para promoção da saúde, prevenção e assistência integral à população.</td>
				</tr>
				<tr>
					<td>Garantir a inclusão dos agricultores à previdência social.</td>
				</tr>
				<tr>
					<td>Estimular e viabilizar o cultivo correto de plantas medicinais, ampliando o acesso e sua correta prescrição nas unidades de saúde, de forma a garantir cuidado adequado.</td>
				</tr>
				<tr>
					<td>ORDENAMENTO TERRITORIAL</td>
					<td>Implantar o  Polo de Desenvolvimento Rural Sustentável conforme o Plano Diretor Estratégico, com monitoramento contínuo, transparência e controle social.</td>
				</tr>
			</table>

			<p>Os eixos auxiliam na organização geral das ações, porém não devem ser vistos de forma setorializada, uma vez que as ações contidas em cada categoria estão integradas e, em muitos casos, dependem de outras ações descritas no plano para que possam ser efetivadas. Mais uma vez, a integração entre ações, a intersetorialidade e a ação intersecretarial são fundamentais para o desenvolvimento integrado da Zona Rural do município e das práticas agropecuárias distribuídas pelo território municipal.</p>
			<p>	O plano é um exercício de planejamento para um período de 8 anos, contando a partir da publicação do plano, devendo ter suas metas e prazos revistos a cada 4 anos. Foram listadas secretarias e órgãos responsáveis por cada ação, o que não impede de envolver outras instituições e órgãos conforme a implantação da ação e as demandas que dela surgirem. De forma similar, estão descritas atividades estratégicas e metas que devem ser cumpridas, a fim de garantir a efetividade do plano. O monitoramento da execução do plano deverá ser realizado mediante a criação de indicadores de gestão e de resultado, a serem acompanhados pelo CMDRSS com o apoio e a estrutura da Secretaria Municipal do Desenvolvimento Econômico e Trabalho (SMDET) e  da Secretaria Municipal de Subprefeituras (SMSUB).</p>
			<p>	Dessa forma, a priorização das ações e do tempo previsto para a realização das metas e ações estratégicas está organizada da seguinte forma:</p>
			<table style="max-width: 18em;">
				<tr>
					<th>PRIORIDADE</th>
					<th>NÚMERO DE ANOS</th>
				</tr>
				<tr>
					<td>Urgente</td>
					<td>Entre 1 e 2 anos</td>
				</tr>
				<tr>
					<td>Alta</td>
					<td>Entre 2 e 4 anos</td>
				</tr>	
				<tr>
					<td>Média</td>
					<td>Entre 4 e 6 anos</td>
				</tr>	
				<tr>
					<td>Baixa</td>
					<td>Entre 6 e 8 anos</td>
				</tr>
			</table>
			<p>O principal objeto desta Consulta Pública é a colheita de contribuições da população, de entidades e movimentos sociais e dos demais órgãos públicos e privados a respeito das ações, metas, atividades e prazos descritos no plano. Com essas contribuições, iremos aprimorar o trabalho já realizado de forma a atender diretamente as demandas dos cidadãos e cidadãs paulistanos. Você poderá fazer contribuições em cada ação do plano. Contribuições para redação, modificação de textos das propostas, novas atividades estratégicas e metas, alteração da prioridade da ação e inclusão de novas ações são bem-vindas e serão analisadas pelo Conselho Municipal de Desenvolvimento Rural Solidário e Sustentável (CMDRSS). Caso deseje visualizar as secretarias responsáveis e parceiras de cada ação, consulte a tabela anexada em pdf com as ações do Plano.</p>
			<p>A seguir, todas as ações do Plano estarão listadas de acordo com cada eixo. Para contribuir, basta clicar na ação desejada ou rolar para baixo para ver todas as ações. As contribuições serão realizadas para cada ação. Seja objetivo e faça contribuições diretas na ação apresentada, buscando justificar cada alteração proposta e, se necessário, sugerindo nova redação.</p>
			<p>Sua participação é muito importante para nós!</p>			
		</section>

		<section>
			<h2 class="titulo" indent="1">Ações do Plano</h2>
			<!-- <Comments :attr="{id:commentId(), context:'Ações do Plano'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h3 class="titulo" indent="2">EIXO TURISMO</h3>
			<div class="acao">				
				<h4>AÇÃO - Turismo Sustentável 1</h4>
				<h5>OBJETIVO</h5>
				<p>Apoiar o desenvolvimento do Turismo Rural no Pólo de Ecoturismo de Parelheiros, conforme Plano de Desenvolvimento do Turismo Sustentável aprovado</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. articulação do CMDRSS com o CONGETUR e parceiros do Polo;<br>
					. criação de programas de estruturação do turismo em propriedades rurais;<br>
					. criação de roteiros de turismo rural, integrando roteiro em atrativos naturais e culturais;<br>
					. aprimoramento do PAT/Parelheiros com profissionais com conhecimento regional e melhor estrutura;<br>
					. desenvolvimento de cursos de formação em monitoria;<br>
					. regulamentar a lei do polo de ecoturismo de Parelheiros;<br>
					. conciliar o Plano Municipal do Polo de Ecoturismo de Parelheiros com os planos de manejo das Unidades de Conservação do território;<br>
					. utilização de identificação de origem dos produtos produzidos na cidade;<br>
					. reconhecimento e respeito ao plano de visitação da Terra Índigena Tenonde Porã e suas diretrizes.<br>
				</p>
				<p><strong>META</strong></p>
				<p>
					. 30 propriedades estruturadas e aptas para recepção de turistas e com atividades voltadas ao turismo rural;<br>
					. realização de um Fórum de integração dos conselhos no território, pelo menos uma vez ao ano;
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Urgente</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO - Turismo Sustentável 1'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>

			<div class="acao">				
				<h4>AÇÃO – Turismo Sustentável 2</h4>
				<h5>OBJETIVO</h5>
				<p>Desenvolvimento do turismo rural na Zona Leste e Norte</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. mapeamento participativo dos atrativos naturais e culturais da região <br>
					. desenvolvimento de roteiros turísticos integrando os atrativos <br>
					. formação e capacitação em monitoria e turismo; <br>
				</p>
				<p><strong>META</strong></p>
				<p>
					. 10 propriedades estruturadas e aptas para recepção de turistas e com atividades voltadas ao turismo rural
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Turismo Sustentável 2'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>

			<div class="acao">				
				<h4>AÇÃO – Turismo Sustentável 3</h4>
				<h5>OBJETIVO</h5>
				<p>Polo de Ecoturismo Cantareira (Lei 16.823/2018)</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. implantar o Polo de Ecoturismo da Cantareira Regulamentar a Lei Municipal 16.832/2018)<br>
					. mapeamento participativo dos atrativos naturais e culturais da região<br>
					. desenvolvimento de roteiros turisticos integrando os atrativos; <br>
					. criação de um roteiros pilotos na estrada do Vista Alegre; <br>
					. formação e capacitação em monitoria e turismo ecológico;<br>
					. implantar o Território de Cultura e Paisagem (Perus- Anhanguera) conforme Plano Diretor<br>
					. incentivar um roteiro de turismo nas Terras Indígenas do Jaraguá, com protagonismo indígena;<br>
					. criação do Conselho de Turismo do Polo de Ecoturismo da Cantareira<br>

				</p>
				<p><strong>META</strong></p>
				<p>
					. Desenvolver um Plano de Desenvolvimento Sustentável do Polo de Ecoturismo da Cantareira
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Turismo Sustentável 3'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>

		<section>
			<h3 class="titulo" indent="2">EIXO SEGURANÇA E fiscalização</h3>
			<div class="acao">				
				<h4>AÇÃO – Segurança em áreas rurais</h4>
				<h5>OBJETIVO</h5>
				<p>Estruturar a segurança pública descentralizada em áreas rurais</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. criar a Inspertoria Regional de Defesa Ambiental (Irdam) represas como segunda unidade ambiental da região sul, além do fortalecimento da Base de Defesa Ambiental (Bdam) Barragem para um melhor atendimento e garantia de segurança a todas as regiões rurais e de proteção ambiental da região de Parelheiros;<br>
					. criar a Inspertoria Regional de Defesa Ambiental (Irdam) Cantareira, para atendimento das áreas rurais e de proteção ambiental, além de dar todas as condições de proteção e segurança as áreas afetas ao Polo de Ecoturismo da Cantareira;<br>
					. aumento de efetivo de guardas ambientais locais; <br>
					. manter a articulação e aprimorar os procedimentos com os tradicionais parceiros, Subprefeituras e SVMA, a fim de promover a ampliação da fiscalização em todas as áreas rurais;<br>
					. manter a parceria com os demais orgãos de segurança, a fim ampliar o patrulhamento e a segurança das áreas rurais. 

				</p>
				<p><strong>META</strong></p>
				<p>
					. Consolidar a presença de bases da GCM ambiental, bem como viaturas caracterizadas em todas as áreas rurais da Cidade de São Paulo.<br>
					. CONSEG Rural criado.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta/Urgente</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Segurança em áreas rurais'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>

			<div class="acao">				
				<h4>AÇÃO – Fiscalização ambiental</h4>
				<h5>OBJETIVO</h5>
				<p>Estruturar a fiscalização ambiental nos territórios rurais.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. fortalecer e dar continuidade a Operação Integrada de Defesa das Águas - OIDA;<br>
					. garantir a participação do CMDRSS na OIDA;<br>
					. promover a formação dos técnicos da fiscalização e da GCM Ambiental para atendimento dos agricultores no território;<br>
					, aprimorar o corpo técnico da fiscalização nos territórios nas zonas rurais do município, de forma articulada à execução do Plano de Trabalho da OIDA.<br>
					. estimular nos técnicos da fiscalização ambiental a conduta de orientação e advertência, sem prejuízo no cumprimento da legislação.<br>
					. reativar e ampliar o monitoramento aéreo na zona rural, das APAs e do entorno das unidades de conservação;<br>
					. adotar novas tecnologias de monitoramento, com drones, câmeras e imagens aéreas por satélite entre outras. 

				</p>
				<p><strong>META</strong></p>
				<p>
					. Manter uma articulação entre CMDRSS e OIDA.<br>
					. Realizar 2 cursos anuais com a participação da maioria dos técnicos que atuam na área de fiscalização ambiental.<br>
					. Monitoramento aéreo reativado e ocorrendo mensalmente.<br>

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Fiscalização ambiental'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>

		<section>
			<h3 class="titulo" indent="1">EIXO SAÚDE E PROTEÇÃO SOCIAL</h3>
			<div class="acao">				
				<h4>AÇÃO – Cultivo de Plantas Medicinais</h4>
				<h5>OBJETIVO</h5>
				<p>Possibilitar a produção de plantas medicinais para contribuir com a saúde dos cidadãos</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. definição das UBS com potencial para receber hortas de plantas medicinais;<br>
					. promover formação dos profissionais de saúde sobre plantas medicinais; <br>
					. implantar as hortas nas UBS, com incentivo à participação das comunidades.<br>
					. realizar parceria para assistência técnica das hortas em UBS.          <br>

				</p>
				<p><strong>META</strong></p>
				<p>
					. Realizar a manutenção das hortas de plantas medicinais / hortas educativas já existentes.<br>
					. Implantar, no mínimo, 40 hortas em Unidades Básicas de Saúde (UBS) em todas as regiões.<br>
					. Realizar, no mínimo, 2 capacitações semestrais sobre plantas medicinais para os profissionais de saúde.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Cultivo de Plantas Medicinais'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>

			<div class="acao">				
				<h4>AÇÃO – Saúde para Agricultores 1</h4>
				<h5>OBJETIVO</h5>
				<p>Reduzir a contaminação humana e ambiental dos agricultores por uso indevido de agrotóxicos. </p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. elaborar um plano de comunicação utilizando recursos visuais e gráficos (como cartilhas informativas) sobre o uso indevido de agrotóxicos, descarte de embalagens e locais para entrega; <br>
					. criação de banco de dados em saúde para casos de contaminação por agrotóxicos; <br>
					. articular o monitoramento e fiscalização da venda de agrotóxicos com o órgão federal responsável.
					. estruturar as Unidades de Vigilância em Saúde (Sul - Parelheiros, Norte - Perus, Leste - Itaim Paulista) mais próximos da região rural com capacidade técnica e operacional para realizar as ações de controle; <br>
					. criar o programa de redução de uso de agrotóxicos na Zona Rural, com análise de resíduos de agrotóxicos nos alimentos.          

				</p>
				<p><strong>META</strong></p>
				<p>
					. Plano de comunicação implantado para os agricultores do município;<br>
					. Banco de dados sobre contaminaçao por agrotóxicos criado;<br>
					. 3 UVIS estruturadas<br>
					. Programa de redução de uso de agrotóxicos na Zona Rural criado.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Saúde para Agricultores 1'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Saúde para Agricultores 2</h4>
				<h5>OBJETIVO</h5>
				<p>Implantar programa de prevenção e assistência relacionado a acidentes com animais </p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. criar de material educativo sobre animais peçonhentos e técnicas de prevenção <br>
					. oficina de primeiros socorros para agricultores.<br>
					. garantir que as unidades de saúde próximas a zonas rurais tenham capacidade técnica e operacional para cuidar de situações relacionadas a animais peçonhentos.<br>

				</p>
				<p><strong>META</strong></p>
				<p>
					. 1 Cartilha criada e divulgada aos agricultores do município.<br>
					. 3 unidades de saúde (Parelheiros, Norte e Leste) capacitadas para atendimento a acidentes com animais peçonhentos.<br>

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Saúde para Agricultores 2'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Saúde para Agricultores 3</h4>
				<h5>OBJETIVO</h5>
				<p>Instituir Práticas Integrativas Complementares em Saúde (PICS) para evitar lesões devido ao esforço no trabalho com agricultura </p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. Elaborar de plano de capacitação sobre PICS para agricultores;<br>
					. articular com as equipes das UBS para assistência aos agricultores;<br>
					. Articular com as equipes da saúde da população indígena; <br>
					. oficina de ginástica laboral para agricultores.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Plano de capacitação executado<br>
					. Equipes articuladas;<br>
					. Oficina de ginástica laboral realizada periodicamente.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Saúde para Agricultores 3'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Previdência</h4>
				<h5>OBJETIVO</h5>
				<p>Criar atendimento e assistência específica para INSS de agricultor </p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. articulação para uma equipe periódica de atendimento aos agricultores nas CAEs. <br>
					. curso sobre previdência social rural para os agricultores e técnicos das CAEs.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Equipe atendendo mensalmente nas CAEs;<br>
					. 1 curso sobre previdência social realizado.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Previdência'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>

		<section>
			<h3 class="titulo" indent="1">EIXO CONSERVAÇÃO AMBIENTAL</h3>
			<div class="acao">				
				<h4>AÇÃO – Pagamento por Serviços Ambientais (PSA)</h4>
				<h5>OBJETIVO</h5>
				<p>Implantar o Pagamento por Serviços Ambientais aos agricultores do município de São Paulo que contribuam na preservação ambiental conforme Plano Diretor Estratégico (PDE).</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. construção do Plano de PSA (conforme PDE); <br>
					. criar campanhas para divulgar o instrumento e a forma de acesso aos agricultores do município; <br>
					. capacitar técnicos da Prefeitura para implementação do PSA junto aos agricultores.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Plano de PSA construído;<br>
					. Lançamento de, pelo menos, 1 edital/ano para PSA<br>
					. Realizar 2 capacitações anuais para técnicos sobre PSA.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Urgente</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Pagamento por Serviços Ambientais (PSA)'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Silvicultura e manejo sustentável de fragmentos florestais</h4>
				<h5>OBJETIVO</h5>
				<p>Viabilizar a silvicultura e manejo sustentável de fragmentos florestais como atividades produtivas.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. articular, junto à Câmara Municipal, legislação para viabilizar a silvicultura, o manejo florestal e sistemas agroflorestais (como o PL 503/2016).          
				</p>
				<p><strong>META</strong></p>
				<p>
					Legislação que viabilize a silvicultura, o manejo florestal sustentável e sistemas agroflorestais aprovada
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Urgente</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Silvicultura e manejo sustentável de fragmentos florestais'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Sistemas Agroflorestais</h4>
				<h5>OBJETIVO</h5>
				<p>Criar alternativas de renda e gerar conhecimento de manejo das espécies nativas de Mata Atlântica</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. realizar curso de capacitação e visitação em áreas de SAF;<br>
					. implantar unidades demonstrativas de sistemas agroflorestais e áreas com manejo sustentável de fragmentos florestais.          

				</p>
				<p><strong>META</strong></p>
				<p>
					. Criar, no mínimo, 3 unidades demonstrativas de Sistemas Agroflorestais no município;<br>
					. Realizar 2 cursos anuais sobre SAF voltado a técnicos e agricultores.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Sistemas Agroflorestais'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – PMMA</h4>
				<h5>OBJETIVO</h5>
				<p>Implementar o PMMA</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. articular produtores para conectar fragmentos florestais e corredores ecolõgicos<br>
					. incentivar a implantação de RPPNs <br>
					. apoiar projetos de reflorestamento e recuperação florestal, com prioridade em terras indígenas<br>
					. Implementar instrumentos de incentivo para conservação da Mata Atlântica (como o PSA)          

				</p>
				<p><strong>META</strong></p>
				<p>
					. Implementar as ações prioritárias do PMMA.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – PMMA'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>

		<section>
			<h3 class="titulo" indent="1">EIXO ENSINO E EDUCAÇÃO</h3>
			<div class="acao">				
				<h4>AÇÃO – Hortas Escolares Agroecológicas</h4>
				<h5>OBJETIVO</h5>
				<p>Fortalecer a formação de hortas escolares apoiando as ações definidas na Lei nº 16.140/2015.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. realizar o mapeamento anual das Unidades de Ensino que possuem hortas escolares ativas e quais são suas demandas. <br>
					. apoiar e incentivar a inserção das atividades relacionadas à horta e alimentação nos Projetos Político Pedagógicos das escolas, envolvendo toda a comunidade e o corpo escolar. <br>
					. orientar as escolas e facilitar a articulação para viabilizar insumos e técnicos para o desenvolvimento das hortas. <br>
					. promover encontros para trocas de experiências entre as escolas. <br>
					. fomentar a formação da comunidade escolar para questões relacionadas ao sistema alimentar e agroecologia, envolvendo agricultores/as, merendeiras/os, nutricionistas e jardineiros/as nas atividades pedagógicas e promovendo a troca de experiências entre esses atores;<br>
					. associar hortas escolares a atividades de compostagem, conforme preconizado no PGIRS.          

				</p>
				<p><strong>META</strong></p>
				<p>
					. Estimular o aumento progressivo de 10% de hortas escolares/ano nas Unidades de Ensino.<br>
					. Realizar, no mínimo, 2 capacitações/ano por polos regionais para as escolas com atuação em hortas escolares.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Hortas Escolares Agroecológicas'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Educação ambiental agroecológica</h4>
				<h5>OBJETIVO</h5>
				<p>Promover ações de educação ambiental para o desenvolvimento de atividades relacionadas aos eixos agricultura urbana e periurbana, meio ambiente, agroecologia, permacultura e segurança alimentar e nutricional.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. realizar ações para a população em geral sobre alimentação, educação ambiental e agroecologia.<br>
					. elaborar cartilha informativa sobre alimentação, educação ambiental e agroecologia.          

				</p>
				<p><strong>META</strong></p>
				<p>
					. Promover cursos e outros eventos sobre alimentação, educação ambiental e agroecologia.<br>
					. Disponibilizar na forma digital materiais didáticos sobre os temas de alimentação, educação ambiental e agroecologia para a população.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Educação ambiental agroecológica'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Articulação com Instituições de Ensino</h4>
				<h5>OBJETIVO</h5>
				<p>Apoiar a realização de projetos de pesquisa e extensão universitários e técnicos voltados para o desenvolvimento rural sustentável e agroecologia.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. estabelecer diálogos com instituições de ensino e pesquisa que tenham cursos em áeras correlatas com as questões relacionadas ao desenvolvimento rural;<br>
					. fomentar a realização de estudos, projetos de pesquisa e extensão que deem suporte às ações de desenvolvimento rural e agroecologia, assim como às ações relacionadas ao manejo adequado dos resíduos gerados e a reciclagem “in loco” do resíduo orgânico;<br>
					. definir o escopo dos projetos de forma conjunta com CMDRSS; 
					. estabelecer parceria com universidades e escolas técnicas para realização de estágio nas áreas de produção.          

				</p>
				<p><strong>META</strong></p>
				<p>
					. Estabelecer e manter, no mínimo, 3 parcerias com instituições de ensino e pesquisa.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Articulação com Instituições de Ensino'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Criação de Escola Técnica de Agroecologia em Parelheiros</h4>
				<h5>OBJETIVO</h5>
				<p>- Estruturar um espaço educativo de formação e capacitação de agricultores para incrementar a produção agrícola do município, gerar renda e viabilizar a agricultura como atividade econômica.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. articular e formar parcerias para a criação de uma Escola Técnica de Agroecologia no município;          
				</p>
				<p><strong>META</strong></p>
				<p>
					. Criar a Escola Técnica de Agroecologia.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Criação de Escola Técnica de Agroecologia em Parelheiros'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Criação de Cursos na Área de Agroecologia</h4>
				<h5>OBJETIVO</h5>
				<p>Formar e capacitar agricultores para incrementar a produção agrícola do município, gerar renda e viabilizar a agricultura como atividade econômica.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. promover cursos de qualificação profissional nas áreas de agricultura de base ecológica, agricultura biodinâmica e afins;<br>
					. possibilitar que esses cursos sejam realizados nos Centros Educacionais Unificados (CEUs) das regiões com maior demanda;<br>
					. propor parceria com a Escola Tabor para a disponibilidade de vagas gratuítas para Curso Técnico em Agroecologia. 

				</p>
				<p><strong>META</strong></p>
				<p>
					. Criar ou estabelecer parceria para realização de 1 curso de qualificação/ano relacionados à agroecologia.  <br>
					. Disponibilizar 40 vagas/ano em cursos do setor agrícola e afins para agricultores do município, com prioridade para mulheres, jovens e grupos vulneráveis.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Criação de Cursos na Área de Agroecologia'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>
		<section>
			<h3 class="titulo" indent="1">EIXO PRODUÇÃO ANIMAL</h3>
			<div class="acao">				
				<h4>AÇÃO – Pesca artesanal</h4>
				<h5>OBJETIVO</h5>
				<p>Garantir a atividade de pesca artesanal e pesque pagues ajustadas a legislação ambiental.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. firmar parceria para levantamento de espécies pescadas e quantidade e qualidade de pescado;<br>
					. articulação de parceria para monitoramento da atividade de pesca; <br>
					. garantir uma cadeira no CMDRSS para os pescadores artesanais;<br>
					. articular a promoção da assistência técnica especializada para os pescadores 
					.  capacitação pescadores artesanais;<br>
					. articular a possibilitar que os pescadores possam utilizar a agroindústria do CEASA para o processamento do pescado;<br>
					. contemplar a gestão adequada de resíduos de forma associada a gestão ambiental e sanitária.          

				</p>
				<p><strong>META</strong></p>
				<p>
					. Articular a viabilização de uma agroindústria para o processamento do pescado dos pescadores artesanais de São Paulo.<br>
					. Realizar no mínimo 1 oficina de capacitação/ano com os pescadores.<br>
					. Articular parceria do órgão responsável para atender os pescadores com assistência técnica e extensão rural.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Pesca artesanal'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Pecuária (Avicultura, Suinocultura,  Apicultura, Caprinocultura, Bovinocultura, entre outros)</h4>
				<h5>OBJETIVO</h5>
				<p>Garantir a atividade da pecuária ajustada à legislação ambiental e sanitária.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. articular parceria para levantamento de quantidade e qualidade de produtos pecuários produzidos;<br>
					. articular parceria para monitoramento da atividade pecuária;<br>
					. articular assistência técnica especializada para os produtores; <br>
					. contemplar a gestão adequada de resíduos de forma associada a gestão ambiental e sanitária.          

				</p>
				<p><strong>META</strong></p>
				<p>
					. Promover curso para adequação da atividade visando a sua regularização.<br>
					. Articular parceria para atender os produtores com assistência técnica e extensão rural.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Pecuária (Avicultura, Suinocultura,  Apicultura, Caprinocultura, Bovinocultura, entre outros)'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Sistema de Inspeção Municipal (SIM)</h4>
				<h5>OBJETIVO</h5>
				<p>Revisão de normas sanitárias focando a criação animal e de produtos de origem animal.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. criar GT para revisão de normas em âmbito municipal, focando a criação animal e de produtos de origem animal;<br>
					. articulação com diferentes Secretarias para a criação do Sistema de Inspeção Municipal (SIM),<br>
					. criar GT para avaliar adesão ao SUASA na cidade de São Paulo,<br>
					. designar 1 médico veterinário para cuidar da orientação aos empreendimentos agroindustriais do municipio;<br>
					. fortalecer a estrutura da COVISA;<br>
					. contemplar a gestão adequada de resíduos de forma associada a gestão ambiental e sanitária.          

				</p>
				<p><strong>META</strong></p>
				<p>
					. GTs para revisão de normas e para avaliar adesão ao SUASA criados.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Urgente</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Sistema de Inspeção Municipal (SIM)'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>
		<section>
			<h3 class="titulo" indent="1">EIXO CULTURA</h3>
			<div class="acao">				
				<h4>AÇÃO – Cultura rural</h4>
				<h5>OBJETIVO</h5>
				<p>Promover ações culturais junto a unidades de produção agrícola de São Paulo.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. Preservar a memória, identidade e herança cultural dos agricultores e agricultoras e povos indígenas para valorização da sociobiodiversidade.<br>
					. Fortalecer e valorizar a cultura da juventude inserida nas atividades da agricultura.<br>
					. Articular a identificação e reconhecimento do patrimônio cultural rural’ com a regulamentação do Territórios de Interesse da Cultura e da Paisagem - TICP .          

				</p>
				<p><strong>META</strong></p>
				<p>
					. Desenvolver 2 ações\ano de resgate de memória da alimentação e cultura de São Paulo nos equipamentos culturais dos territórios com presença de atividades de agricultura.<br>
					. Desenvolver, no mínimo, 10 atividades culturais/ano relacionados à cultura agrícola e alimentar em equipamentos culturais e programas do município em todas as regiões da cidade.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Cultura rural'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Artesanato</h4>
				<h5>OBJETIVO</h5>
				<p>Viabilizar capacitação e geração de renda por meio do artesanato.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. promover oficinas de capacitação;<br>
					. criar pontos de comercialização de artesanato local na cidade, priorizando o artesanato indígena, mulheres e grupos vulneraveis.<br>
					. cadastrar os artesãos e manualidades.<br>
					. estímulo à produção de artesanato utilizando produtos florestais madeireiros ou não madeireiros, e demais produtos da socibiodiversidade de acordo com a Lei 16.573/2016.          

				</p>
				<p><strong>META</strong></p>
				<p>
					. Realizar no mínimo 2 cursos e oficinais anuais de capacitação.<br>
					. Criar no mínimo 2 pontos de comercialização de artesanato local, na cidade de São Paulo

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Artesanato'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>
		<section>
			<h3 class="titulo" indent="1">EIXO INFRAESTRUTURA BÁSICA</h3>
			<div class="acao">				
				<h4>AÇÃO – Educação para Saneamento Ambiental na Zona Rural</h4>
				<h5>OBJETIVO</h5>
				<p>Proteger os corpos d´água e garantir a qualidade de vida dos agricultores familiares.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. incentivar a instalação de fossas ecológicas e banheiro seco nas propriedades da zona rural e assentamentos urbanos isolados;  <br>
					. articular com a SABESP para instalação de saneamento em áreas rurais, como Irma Alberta, Jd Antartica, Jd Damasceno, TI Jaraguá entre outras regiões e áreas próximas a agricultores;<br>
					. orientar sobre o manejo dos resíduos sólidos em zona rural; <br>
					. criar programas de proteção e monitoramento das aguás nas áreas de proteção e recuperação de mananciais, Terras Indígenas e demais corpos d´água utilizados para irrigação de áreas produtivas.          

				</p>
				<p><strong>META</strong></p>
				<p>
					. Distribuir 1.000 cartilhas sobre saneamento rural e resíduos sólidos para os agricultores.<br>
					. Realizar 2 cursos anuais de saneamento ambiental rural e residuos solidos.<br>
					. Programa de proteção e monitoramento de águas criado.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Educação para Saneamento Ambiental na Zona Rural'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Serviços Básicos</h4>
				<h5>OBJETIVO</h5>
				<p>Apoiar a instalação de infraestrutura e serviços básicos na zona rural e outras áreas de produção agrícola.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. qualificar a demanda e estudar viabilidade para promover a coleta de resíduos de pequenos geradores em áreas rurais, buscando estimular ações que minimizem a geração de resíduo e ações para tratamento do resíduo gerado “in loco”;<br>
					. estabelecer periodicidade para manutenção das estradas rurais e criar um calendário de manutenção e tapa buracos, incluindo a possibilidade de pavimentação ecológica;<br>
					. qualificar a demanda e estudar viabilidade para iluminação pública nas áreas rurais.          

				</p>
				<p><strong>META</strong></p>
				<p>
					. Fornecimento de serviços básicos na zona rural e em regiões de produção agrícola.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Serviços Básicos'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Comunicação Rural</h4>
				<h5>OBJETIVO</h5>
				<p>Ampliação do sinal de Internet nas áreas rurais de São Paulo</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. ampliação do sinal de internet e modernização das redes existentes;<br>
					. estabelecer parcerias com operadoras de rede de internet e telefonia.           

				</p>
				<p><strong>META</strong></p>
				<p>
					. Ampliação do sinal de internet e telefonia na zona rural de São Paulo
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Urgente</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Comunicação Rural'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>
		<section>
			<h3 class="titulo" indent="1">EIXO FORTALECIMENTO INSTITUCIONAL </h3>
			<div class="acao">				
				<h4>AÇÃO – Fortalecer a CAISAN</h4>
				<h5>OBJETIVO</h5>
				<p>Garantir o fortalecimento e integração das políticas públicas voltadas para desenvolvimento rural sustentável e das ações das diferentes secretarias.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. criar um Grupo Permanente de Trabalho Intersecretarial para gestão do desenvolvimento rural;<br>
					. realizar a articulação entre programas e ações relacionadas à agricultura e hortas nas diversas secretarias;<br>
					. considerar as atividades e diretrizes dos demais planos e políticas setoriais e municipais, como o PROAURP, PMGIRS, PLAMSAN, Plano Municipal de Turismo, PMMA, PLANPAVEL, Planos Regionais e o próprio PMDRSS entre outros.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Realizar 6 reuniões da CAISAN por ano.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Fortalecer a CAISAN'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Fortalecer o CMDRSS</h4>
				<h5>OBJETIVO</h5>
				<p>Fortalecer conselho, garantindo o controle social das políticas públicas e a gestão participativa de políticas, programas e orçamentos.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. promover 1 capacitação por ano dos conselheiros em temas relativos à gestão pública, legislação, orçamento público, segurança alimentar e nutricional, desenvolvimento rural sustentável, agroecologia entre outros temas; <br>
					. garantir estrutura básica para o funcionamento do Conselho. Buscar atendimento para os trabalhos da Secretaria Executiva como veículos para visitas técnicas e diligências, impressões de materiais, salas para reuniões e trabalhos, transporte e alimentação para participação dos conselheiros conforme disponibilidade <br>
					. articular a parceria com os demais conselhos do município.<br>
					. articular com o patrimônio cultural’ como atividade estratégica<br>
					. incluir cadeira para SMC no CMDRSS.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Garantir a realização de no mínimo 10 reuniões da CMDRSS por ano.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Fortalecer o CMDRSS'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Estrutura institucional específica para Agricultura e Segurança Alimentar e Nutricional</h4>
				<h5>OBJETIVO</h5>
				<p>Ampliar a estrutura técnica e o orçamento da máquina pública para o desenvolvimento de políticas públicas relacionadas à segurança alimentar e nutricional, abastecimento, agricultura nas suas diversas tipologias , desenvolvimento rural sustentável e outros temas correlatos.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. desenvolver estudo de viabilidade para possível criação de estrutura institucional específica para Agricultura e Segurança Alimentar e Nutricional na Prefeitura de São Paulo<br>
					. criar Grupo de Trabalho Intersecretarial para estudar a viabilidade e propor o formato institucional adequado para criação de estrutura específica para Agricultura e Segurança Alimentar e Nutricional na Prefeitura de São Paulo, integrando seguintes temas: Agricultura Urbana e Agroecologia; Desenvolvimento Rural Sustentável; Abastecimento; Educação Alimentar e Nutricional.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Desenvolver um estudo de viabilidade para possível criação de estrutura institucional específica para Agricultura e Segurança Alimentar e Nutricional na Prefeitura de São Paulo
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Baixa</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Estrutura institucional específica para Agricultura e Segurança Alimentar e Nutricional'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Observatório do Desenvolvimento Rural no município</h4>
				<h5>OBJETIVO</h5>
				<p>Realizar estudos periódicos com dados da atividade agrícola no município.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. firmar parcerias para o desenvolvimento de estudos sobre o território rural e a atividade agrícola no município;<br>
					. estruturar no Observa Sampa um conjunto de indicadores, dados e estudos sobre o território rural.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Criar um Observatório do Desenvolvimento Rural, com realização de estudos temáticos a cada 2 anos.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Observatório do Desenvolvimento Rural no município'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – PDUI</h4>
				<h5>OBJETIVO</h5>
				<p>Articular as ações previstas neste plano com demais municípios da Região Metropolitana de São Paulo (RMSP).</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. observar as ações previstas nesse plano com aquelas propostas no Plano de Desenvolvimento Urbano Integrado da RMSP (PDUI), de forma a buscar convergências entre as ações dos diversos municípios da RMSP.
				</p>
				<p><strong>META</strong></p>
				<p>
					. Criar um GT no CMDRSS para articular ações do Plano a nível metropolitano.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – PDUI'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Subprefeituras</h4>
				<h5>OBJETIVO</h5>
				<p>Promover ações de desenvolvimento rural, agricultura urbana e agroecologia nas subprefeituras.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. garantir estrutura nas subprefeituras, visando atender as demandas dos agricultores do município;<br>
					. criar dotação orçamentaria e expediente para atender as políticas públicas nas subprefeituras;<br>
					.  operacionalização do PROAURP pela Secretaria Executiva de Agricultura<br>
					. observar as diferentes articulações necessárias com os órgãos competentes nas subprefeituras para trabalhar com as ações voltadas à agricultura, como regulação do uso do solo (estrutura local), assessoria técnica (recursos e contratos) entre outros.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Garantir que as Subprefeituras cumpram as ações designadas no PROAURP no que se refere ao apoio às atividades agropecuárias, como identificação de áreas, regularização das atividades e provimento de insumos e serviços.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Urgente</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Subprefeituras'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>
		<section>
			<h3 class="titulo" indent="1">EIXO ASSISTÊNCIA TÉCNICA E EXTENSÃO RURAL (ATER) </h3>
			<div class="acao">				
				<h4>AÇÃO – Patrulha Mecanizada Agrocológica</h4>
				<h5>OBJETIVO</h5>
				<p>Fortalecer as ações e atividades da Patrulha Mecanizada Agroecológica, ampliando a quantidade de horas de utilização mensal, a abrangência das áreas.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. manutenção e ampliação do contrato de prestação de serviço para operação;<br>
					. estabelecer diretrizes e contrapartidas para utilização dos equipamentos;<br>
					. definição de áreas prioritárias para atuação, logística e gestão participativa;<br>
					. disponibilização de uma patrulha agrícola para a Zona Norte;

				</p>
				<p><strong>META</strong></p>
				<p>
					. Contratar patrulhas agrícolas para atendimento das demandas do município.<br>
					. Garantir a manutenção e o funcionamento das patrulhas já existentes.<br>
					. Contratar equipamentos e máquinas para garantir o funcionamento da patrulha.<br>
					. Aumentar para 2000h/ano o uso da patrulha agrícola.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Patrulha Mecanizada Agrocológica'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Assistência Técnica e Extensão Rural</h4>
				<h5>OBJETIVO</h5>
				<p>Ampliar o número de agricultores atendidos e acompanhados pela ATER, priorizando mulheres, jovens e comunidades tradicionais</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. aumentar o efetivo de ATER por meio de concurso público, parcerias e editais, para atender os agricultores;<br>
					. disponibilizar de Economia Solidária e e Médico(a) veterinário nas CAE's;<br>
					. fomentar a criação de cooperativas, associações e agroindústrias familiares;<br>
					. fazer capacitações com os agricultores sobre diversos temas;<br>
					. apoiar os agricultores na obtenção de outorga de água, documentos como Nota Fiscal do produtor e emissão de DAP.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Aumentar, anualmente, em 10% o número de agricultores atendidos com ATER no município.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Assistência Técnica e Extensão Rural'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Crédito Rural</h4>
				<h5>OBJETIVO</h5>
				<p>Articular com os órgãos responsáveis a viabilização do Crédito Rural para os agricultores</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. promover o acesso aos agricultores familiares às linhas de crédito rural já existentes;<br>
					. estimular a criação de linhas de crédito para a agricultura, de uma forma mais simplificada, incluindo uma linha específica para indígenas, comunidades tradicionais, mulheres e jovens.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Estimular o aumento do número de agricultores que tiveram acesso a algum tipo de crédito rural.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Crédito Rural'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Transição Agroecológica</h4>
				<h5>OBJETIVO</h5>
				<p>Garantir a sustentabilidade da prática agrícola em consonância com a conservação ambiental, coibindo a adoção de práticas que impactem negativamente a produção de água e a qualidade ambiental do território.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. rearticular a participação da SMSUB (DA) como participante da organização do Protocolo de Transição Agroecológica; <br>
					. criar campanhas e de materiais para a promoção do Protocolo junto aos agricultores;<br>
					. garantir que a ATER oficial do município promova a transição agroecológica. <br>
					. reduzir a utilização de agrotóxicos nas áreas de proteção e recuperação dos mananciais.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Aumentar, anualmente, em 10% o número de adesões ao Protocolo de Transição Agroecológica.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Transição Agroecológica'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Sala da Cidadania</h4>
				<h5>OBJETIVO</h5>
				<p>Ter uma Sala da Cidadania ativa e em funcionamento no município.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. reafirmar Termo de Acordo Técnico entre PMSP e INCRA para a manutenção da Sala da Cidadania e ampliação do atendimento
				</p>
				<p><strong>META</strong></p>
				<p>
					. Ter uma Sala da Cidadania ativa e em funcionamento no município.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Sala da Cidadania'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Formação continuada para técnicos de ATER</h4>
				<h5>OBJETIVO</h5>
				<p>Garantir a qualidade da assistência técnica agroecológica prestada aos agricultores.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. garantir metodologias agroecológicas para a ATER, com protagonismo do agricultor; 
					. promover cursos e oficinas para os Técnicos de ATER do município em diversos temas.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Realizar 2 capacitações anuais para todos os agentes de ATER do município.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Formação continuada para técnicos de ATER'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Agroindústrias</h4>
				<h5>OBJETIVO</h5>
				<p>Estimular o beneficiamento de produtos da agricultura local.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. promover estudos sobre a atividade de beneficiamento de produtos da agricultura familiar;<br>
					. capacitar os agricultores e técnicos para o processamento e beneficiamento dos produtos, considerando a correta gestão dos resíduos gerados com alternativas para que atendam as boas práticas de sustentabilidade.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Capacitação sobre beneficiamento de produtos<br>
					. Estudo de caso de beneficiamento sobre segmentos/ produtos prioritários.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Agroindústrias'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>
		<section>
			<h3 class="titulo" indent="1">EIXO REGULARIZAÇÃO </h3>
			<div class="acao">				
				<h4>AÇÃO – Regularização Fundiária</h4>
				<h5>OBJETIVO</h5>
				<p>Regularizar a situação fundiária das propriedades existentes no município de São Paulo.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. viabilizar convênios e termos de cooperação para regularização fundiária: INCRA, ITESP, Procuradoria, cartõrios entre outros.<br>
					. realização de georeferenciamento das áreas rurais;<br>
					. levantamento fundiário das áreas com ITR no município;<br>
					. levantamento da documentação das áreas (matrículas/contrato/posse mansa);  <br>
					. desapropriar área do Irma Alberta enquanto área de interesse social (área SABESP)
					. facilitar e agilizar processos de regularização fundiária nas áreas do Jardim Damasceno, Taipas,Vila Nova Esperança.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Convênio ou termo de cooperação para regularização fundiária estabelecido.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Regularização Fundiária'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Regularização de hortas comunitárias urbanas em áreas públicas</h4>
				<h5>OBJETIVO</h5>
				<p>Implantação e acompanhamento das hortas comunitárias urbanas em espaços públicos municipais.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. apoio na instalação de hortas urbanas de iniciativa comunitárias e sociais em espaços públicos, de acordo com PROAURP. <br>
					. cadastramento e apoio à regularização das hortas existentes. <br>
					. formação para funcionários das Subprefeituras sobre agricultura urbana e PROAURP.

				</p>
				<p><strong>META</strong></p>
				<p>
					. 1 curso/ano sobre agricultura urbana e instrumentos do PROAURP para servidores das subprefeituras e outros órgãos envolvidos.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Regularização de hortas comunitárias urbanas em áreas públicas'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Atividades produtivas nas áreas da SABESP e ENEL</h4>
				<h5>OBJETIVO</h5>
				<p>Apoiar a instalação e condução de hortas nas áreas da SABESP e ENEL.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. Articular com ENEL e SABESP a promoção de hortas urbanas para geração, visitação e fins comunitários. <br>
					. Articular com a CATI a emissão de DAPs em área aptas.<br>
					. Revisão e atualização dos contratos de comodato já expirados ou de novos projetos.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Parceria com ENEL e SABESP para promoção das hortas nos linhas de transmissão da ENEL e nas áreas de adutoras SABESP
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Atividades produtivas nas áreas da SABESP e ENEL'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>
		<section>
			<h3 class="titulo" indent="1">EIXO FINANCIAMENTO </h3>
			<div class="acao">				
				<h4>AÇÃO – TACs e TCAs para o programa de agricultura urbana</h4>
				<h5>OBJETIVO</h5>
				<p>Direcionar recursos oriundos de TACs e TCAs às ações, objetivos e atividades estratégicas previstas neste Plano.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. criar articulação entre SVMA, SMDE e Procuradoria para incluir a agricultura urbana no rol das políticas de recuperação e adequação ambiental, com a aplicação de recursos oriundos de TACs e TCAs; <br>
					. articular essa ação com o programa de Pagamentos por Serviços Ambientais.

				</p>
				<p><strong>META</strong></p>
				<p>
					Aplicar pelo menos 20 % dos recursos gerados por TACs e TCAs lavrados em ações do plano.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – TACs e TCAs para o programa de agricultura urbana'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Fundo Municipal de Agroecologia e Desenvolvimento Rural Sustentável e Solidário</h4>
				<h5>OBJETIVO</h5>
				<p>Criar um fundo para tornar permanente o fluxo de dotação orçamentária para a realização de programas e ações de Agroecologia e Desenvolvimento Rural Sustentável e Solidário.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. criar o Fundo Municipal de Agroecologia e Desenvolvimento Rural Sustentável com previsão anual de recursos orçamentários, destinado a elaboração e execução de projetos de agricultura urbana e periurbana, educação alimentar e nutricional, empreendedorismo em agricultura urbana, segurança alimentar e nutricional, economia solidária, agroecologia, permacultura e desenvolvimento rural integral. <br>
					. garantir o controle social do fundo.

				</p>
				<p><strong>META</strong></p>
				<p>
					Criar o Fundo Municipal de Agroecologia e Desenvolvimento Rural Sustentável e Solidário. 
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Fundo Municipal de Agroecologia e Desenvolvimento Rural Sustentável e Solidário'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Recursos dos Fundos Municipais</h4>
				<h5>OBJETIVO</h5>
				<p>Destinar recursos dos Fundos Municipais para ações de Desenvolvimento Rural</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. articular com as secretarias gestoras do FEMA, do FUNDURB e do Fundo Municipal de Cultura a criação de editais específicos para ações de desenvolvimento rural sustentável.
				</p>
				<p><strong>META</strong></p>
				<p>
					Abertura de, no mínimo, 1 edital específico em cada fundo para ações com critérios de seleção que contemplem o desenvolvimento rural sustentável.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Baixa</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Recursos dos Fundos Municipais'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Dotação Orçamentária própria</h4>
				<h5>OBJETIVO</h5>
				<p>Criar dotação orçamentária específica para as ações desse plano.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. especificar, dentro das dotações orçamentárias da Prefeitura Municipal, principalmente na Secretaria Executiva de Abastecimento (SMSUB), os recursos para as ações do plano;<br>
					. garantir discriminação específica do orçamento na LOA a partir de 2020.

				</p>
				<p><strong>META</strong></p>
				<p>
					Dotação orçamentária específica para as ações do plano.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Dotação Orçamentária própria'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>
		<section>
			<h3 class="titulo" indent="1">EIXO INDÍGENAS, JOVENS E MULHERES </h3>
			<div class="acao">				
				<h4>AÇÃO – Fortalecimento das populações indígenas 1</h4>
				<h5>OBJETIVO</h5>
				<p>Fortalecer o cultivo Guarani em quintais produtivos com manejo de animais de pequeno porte.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. garantir assistência técnica, extensão rural, insumos e maquinário para as aldeias indígenas, com o protagonismo indígena<br>
					. promover feiras de trocas de sementes e mudas entre indígenas e entre indígenas e agricultores. <br>
					. consolidar um banco de sementes e mudas de variedades Guaranis (ex. batata doce) <br>
					. apoio à criação artesanal de abelhas sem ferrão (meliponicultura) para produção de mel e produtos correlatos; <br>
					. apoio à criação de galinhas e manejo de animais de pequeno porte. <br>
					. fornecimento e integração de alimentos tradicionais Guarani na alimentação escolar nos TI; <br>
					. apoio para a instalação de viveiros de plantas medicinais nas TI<br>
					. fornecimento de mudas de frutíferas e espécies utilizadas para artesanato

				</p>
				<p><strong>META</strong></p>
				<p>
					Ampliar em até 20% o envolvimento dos indígenas com a agricultura.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Fortalecimento das populações indígenas 1'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Fortalecimento das populações indígenas 2</h4>
				<h5>OBJETIVO</h5>
				<p>Promover a formação de indígenas para possibilitar a geração de renda, a gestão territorial e a manutenção da cultura Guarani</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. garantir a continuidade dos processos formativos e empregabilidade de indígenas na região. <br>
					. fomento e apoio para acordo com universidades e instituições de pesquisa para oferecimento de bolsas de estudo, cooperação técnica/científica (aldeias como laboratório para o desenvolvimento de pesquisas); <br>
					. formação de cursos de agentes ambientais e de guias condutores de observação de aves e de natureza para incentivar sobretudo, a relação com a terra, a valorização cultural, geração de renda e permanência do jovem no território.

				</p>
				<p><strong>META</strong></p>
				<p>
					Realizar 8 cursos e oficinas anuais de formação e capacitação técnica.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'acao'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Fortalecimento das populações indígenas 3</h4>
				<h5>OBJETIVO</h5>
				<p>Garantir o acesso e políticas públicas específicas para a população indígena. </p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. Apoiar a instituição de uma Política Municipal de Fortalecimento Ambiental, Cultural e Social de Terras Indigenas (T.I.).<br>
					. possibilitar o fortalecimento da cultura do povo Guarani por meio de agentes socioculturais e ambientais.<br>
					. Apoiar os Planos de Visitação das T.I. no perimetro municipal e outras ações de SAN e desenvolvimento rural.<br>
					. manutenção do programa Aldeias (SMC), <br>
					.  manutenção e ampliação do programa do Programa Operação Trabalho (SMDET) e do VAI (SMC).

				</p>
				<p><strong>META</strong></p>
				<p>
					Ampliar o número de indígenas beneficiados pelos programas.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Fortalecimento das populações indígenas 3'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Fortalecimento das populações indígenas 4</h4>
				<h5>OBJETIVO</h5>
				<p>Contribuir para o acesso à terra, apoiando a demarcação das terras indígenas, bem como provendo a infraestrutura necessária para garantir a qualidade de vida.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. apoiar ações que garantam a atenção aos serviços básicos de saneamento e saúde nas aldeias (FUNAI).<br>
					. realizar cursos para formação e implantação de saneamento ecológico e tratamento de águas nas residências das aldeias (FUNAI). <br>
					. auxiliar no apoio jurídico à regularização fundiária (FUNAI).<br>
					. garantir a integração entre município, estado e União para a promoção de políticas indigenistas nas aldeias (FUNAI).<br>
					. possibilitar o acesso à política de assistência social para famílias das aldeias com gestão integrada: benefícios e inserções na rede de serviços socioassistenciais (SMADS).

				</p>
				<p><strong>META</strong></p>
				<p>
					Realizar 8 cursos de saneamento ecológico nas aldeias.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Fortalecimento das populações indígenas 4'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Juventude rural</h4>
				<h5>OBJETIVO</h5>
				<p>Incentivar os jovens a continuar a atividade rural e agricultura familiar.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. criar grupo de jovens no CMDRSS<br>
					. promover encontros e oficinas para incentivar a troca de experiências e expectativas e fortalecimento da juventude rural<br>
					. destinar vagas em cursos nos FABLABs, Centros Culturais e Pontos de Cultura para jovens rurais buscando recursos para viabilizar a participação de jovens.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Criar o GT jovens agricultores<br>
					. Realizar 1 encontro anual de jovens rurais da Cidade de São Paulo<br>
					. Promover no mínimo 1 curso e oficina de jovens por ano.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Juventude rural'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Mulheres rurais</h4>
				<h5>OBJETIVO</h5>
				<p>Fortalecer a auto-organização das mulheres</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. apoio à auto-organização das mulheres rurais<br>
					. realizar encontros com as agricultoras e fortalecer a rede de mulheres agricultoras da cidade<br>
					. Articular o acesso das mulheres a DAP e ao Crédito Rural<br>
					. garantir ATER para as mulheres rurais<br>
					. fomento à prática de mutirões com protagonismo feminino.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Realizar encontros anuais das mulheres rurais<br>
					. Incentivar e apoiar as mulheres agricultoras e sua organização coletiva.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Mulheres rurais'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>
		<section>
			<h3 class="titulo" indent="1">EIXO AGRICULTURA URBANA </h3>
			<div class="acao">				
				<h4>AÇÃO – Hortas Urbanas</h4>
				<h5>OBJETIVO</h5>
				<p>Promover a agricultura urbana agroecológica conforme o PROAURP.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. criar uma campanha de estímulo ao envolvimento da população na criação de hortas comunitárias urbanas. <br>
					. promover cursos de formação para agricultores urbanos. <br>
					. promover a qualidade sanitária do solo das áreas destinadas a agricultura urbana por meio da adoção de boas práticas e orientação técnica;<br>
					. cercar e limpar as áreas públicas municipais destinadas a hortas urbanas;<br>
					. monitorar as condições de solo em função do seu uso e ocupação, de forma a considerar áreas contaminadas;<br>
					. desenvolvimento de materiais de divulgação e sinalização.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Possibilitar a criação de hortas urbanas vinculadas ao PROAURP.<br>
					. Realizar, no mínimo, 1 curso de formação por ano.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Hortas Urbanas'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Pátios de Compostagem</h4>
				<h5>OBJETIVO</h5>
				<p>Fomentar a produção e distribuição de composto para os agricultores.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. criação de um sistema de identificação e organização das demandas de insumos pelos agricultores;<br>
					. definir política de distribuição do composto para os agricultores; <br>
					. priorizar, na definição de pátios e estruturas para compostagem, regiões com agricultores urbanos e rurais.<br>
					. estimular a realização da compostagem in loco junto à unidades de produção agrícola.

				</p>
				<p><strong>META</strong></p>
				<p>
					Criar política de compostagem e distribuição do composto para os agricultores, conforme PGIRS.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Pátios de Compostagem'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – PROAURP</h4>
				<h5>OBJETIVO</h5>
				<p>Consolidar o PROAURP no município de São Paulo.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. conferir nova regulamentação à Lei n.13.727, de 12 de janeiro de 2004 (PROAURP); <br>
					. ampliar o grupo executivo (SVMA, SMTE, SMPR, SMDU, Saúde, Educação, Assistência Social e Habitação) e definir suas tarefas dentro do Programa; <br>
					. fortalecer as Casas de Agricultura Ecológicas (CAEs) Sul e Leste; <br>
					. criar uma Casa de Agricultura Ecológica (CAE) na zona Norte e Centro-Oeste.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Conferir nova regulamentação da Lei n.13.727, de 12 de janeiro de 2004 (PROAURP)<br>
					. Criação Casa de Agricultura Ecológica (CAE) da zona Centro-Oeste  e da Zona Norte.

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Urgente/Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – PROAURP'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Programa Operação Trabalho (POT)</h4>
				<h5>OBJETIVO</h5>
				<p>Incentivar a qualificação para a agricultura por meio de bolsas do POT Hortas e Viveiro.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. viabilizar o acesso ao Projeto POT Hortas e Viveiros para a população de baixa renda (CAD-único) e residentes de Zonas Especiais de Interesse Social (ZEIS) que tenham como atividade agricultura.<br>
					. possibilitar o apoio psico-social para o POT Hortas e Viveiros de forma a garantir sua permanência no programa

				</p>
				<p><strong>META</strong></p>
				<p>
					Beneficiar no mínimo 200 pessoas com o Projeto POT Hortas e Viveiros da comunidade
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Urgente</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Programa Operação Trabalho (POT)'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – VAI na Horta</h4>
				<h5>OBJETIVO</h5>
				<p>Possibilitar o acesso a recursos para viabilizar hortas urbanas.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. Apoiar o Programa Valorização de Iniciativas de Agricultura Urbana e Periurbana (VAI na Horta);<br>
					. destinar recursos ao programa;<br>
					. abrir editais para o acesso aos agricultores do município, com prioridade para a população de baixa renda (CAD-único) e residentes de Zonas Especiais de Interesse Social (ZEIS) que tenham como atividade agricultores, priorizando indígenas, jovens e mulheres das periferias da cidade.

				</p>
				<p><strong>META</strong></p>
				<p>
					Disponibilizar recursos para, no mínimo, 50 agricultores por ano.
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Média</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – VAI na Horta'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
			<div class="acao">				
				<h4>AÇÃO – Escolas Estufas</h4>
				<h5>OBJETIVO</h5>
				<p>Fomentar a produção para autoconsumo, hábitos alimentares saudáveis e preservação ambiental por meio do Programa Escola Estufa.</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					. viabilização de cursos e visitas;<br>
					. alinhamento e gestão conjunta com a Escola Municipal de Jardinagem <br>
					. produção de mudas para serem distribuídas/adquiridas pelos agricultores da região;<br>
					. garantir a inserção dos moradores do local nas ações de geração de trabalho e renda nas Escolas Estufas.

				</p>
				<p><strong>META</strong></p>
				<p>
					. Reativar e readequar o Programa Escola Estufa em no mínimo 5 regiões de maior demanda.<br>
					. Realizar 1 curso por ano em estufas diversas do programa. 

				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Alta</p>
				<Comments :attr="{id:commentId(), context:'AÇÃO – Escolas Estufas'}" v-if="estaConsulta.ativo == 1"></Comments>
			</div>
		</section>
		<section>
			<h3 class="titulo" indent="1">EIXO COMERCIALIZAÇÃO </h3>
			<div class="acao">				
					<h4>AÇÃO – Boxes da Agricultura Familiar em Mercados e Sacolões</h4>
					<h5>OBJETIVO</h5>
					<p>Priorizar aos agricultores familiares na concessão de uso dos boxes em mercados e sacolões públicos do município.</p>
					<h5>ATIVIDADES ESTRATÉGICAS</h5>
					<p>
						. Priorizar a agricultura familiar paulistana nos mercados e sacolões.<br>
						. Apoiar cooperativas e associações de agricultores familiares na gestão física e administrativa dos boxes.

					</p>
					<p><strong>META</strong></p>
					<p>
						Facilitar a participação dos agricultores paulistanos em mercados e sacolões municipais.
					</p>
					<p><strong>PRIORIDADE</strong></p>
					<p>Alta</p>
					<Comments :attr="{id:commentId(), context:'AÇÃO – Boxes da Agricultura Familiar em Mercados e Sacolões'}" v-if="estaConsulta.ativo == 1"></Comments>
				</div>	
				<div class="acao">				
					<h4>AÇÃO – Feiras Orgânicas</h4>
					<h5>OBJETIVO</h5>
					<p>Implementar feiras orgânicas na cidade de São Paulo.</p>
					<h5>ATIVIDADES ESTRATÉGICAS</h5>
					<p>
						. disponibilizar locais e apoio técnico, logístico e material para realização das feiras orgânicas<br>
						. articulação com agricultores orgânicos, com prioridade para mulheres da Região Metropolitana de São Paulo<br>
						. criação de campanha de comunicação para promoção das feiras.

					</p>
					<p><strong>META</strong></p>
					<p>
						Estimular a criação de feiras orgânicas e da agricultura familiar nas subprefeituras, com prioridade para regiões periféricas da cidade.
					</p>
					<p><strong>PRIORIDADE</strong></p>
					<p>Urgente</p>
					<Comments :attr="{id:commentId(), context:'AÇÃO – Feiras Orgânicas'}" v-if="estaConsulta.ativo == 1"></Comments>
				</div>
				<div class="acao">				
					<h4>AÇÃO – Centros de Distribuição Regional de Produtos Agrícolas</h4>
					<h5>OBJETIVO</h5>
					<p>Criar Centros de Distribuição Regional de Produtos Agrícolas para estreitar relação entre mercado consumidor e agricultores.</p>
					<h5>ATIVIDADES ESTRATÉGICAS</h5>
					<p>
						. identificar três áreas públicas para os entrepostos na região sul, na região norte, e na região leste.<br>
						. articular parceria para construção/reforma do entreposto<br>
						. definição participativa do modelo de gestão do entreposto, envolvendo agricultores e sociedade civil.

					</p>
					<p><strong>META</strong></p>
					<p>
						Criação de três entrepostos, sendo um na zona sul, um na zona norte e um na zona leste.
					</p>
					<p><strong>PRIORIDADE</strong></p>
					<p>Baixa</p>
					<Comments :attr="{id:commentId(), context:'AÇÃO – Centros de Distribuição Regional de Produtos Agrícolas'}" v-if="estaConsulta.ativo == 1"></Comments>
				</div>
				<div class="acao">				
					<h4>AÇÃO – Grupos de Consumo Responsável</h4>
					<h5>OBJETIVO</h5>
					<p>Promover e incentivar a comercialização dos agricultores do município por meio de formas alternativas de acesso aos consumidores.</p>
					<h5>ATIVIDADES ESTRATÉGICAS</h5>
					<p>
						. formação de técnicos da Subprefeituras para criação e gestão de GCRs em parceria com sociedade civil organizada<br>
						. dar apoio e orientação para os empreendimentos coletivos sobre a importância da participação social em fóruns e espaços de discussão.<br>
						 . auxiliar a articulação com os agricultores para abastecimento dos produtos<br>
						 . divulgar para funcionários da Subprefeituras e moradores dos bairros<br>
						. fortalecer o Fórum de Economia Solidária

					</p>
					<p><strong>META</strong></p>
					<p>
						Apoiar a criação de Grupos de Consumo Responsável em Subprefeituras.
					</p>
					<p><strong>PRIORIDADE</strong></p>
					<p>Média</p>
					<Comments :attr="{id:commentId(), context:'AÇÃO – Grupos de Consumo Responsável'}" v-if="estaConsulta.ativo == 1"></Comments>
				</div>
				<div class="acao">				
					<h4>AÇÃO – Compras Públicas</h4>
					<h5>OBJETIVO</h5>
					<p>Garantir a priorização de agricultores familiares agroecológicos nas compras públicas da Prefeitura.</p>
					<h5>ATIVIDADES ESTRATÉGICAS</h5>
					<p>
						. articular com cooperativas e associações de agricultores para oferta dos produtos<br>
						. implementar o PAA institucional no município de São Paulo<br>
						. garantir assistência técnica e burocrática específica para os agricultores do município para acessar as compras públicas<br>
						. formação de técnicos e procuradores das Secretarias para as compras públicas, com base na experiência da SME<br>
						. adequar as chamadas públicas para atender as especificidades da agricultura familiar para todos os órgãos municipais que comprem gêneros alimentícios

					</p>
					<p><strong>META</strong></p>
					<p>
						. Estruturar o PAA institucional no município de São Paulo.<br>
						. Implementar a compra progressiva com objetivo de alcançar 30% de alimentos oriundos da agricultura familiar em todos os equipamentos públicos da Prefeitura.

					</p>
					<p><strong>PRIORIDADE</strong></p>
					<p>Média</p>
					<Comments :attr="{id:commentId(), context:'AÇÃO – Compras Públicas'}" v-if="estaConsulta.ativo == 1"></Comments>
				</div>
		</section>
		<section>
			<h3 class="titulo" indent="1">EIXO ORDENAMENTO TERRITORIAL </h3>
			<div class="acao">				
					<h4>AÇÃO – Monitoramento das ferramentas do PDE para a Zona Rural</h4>
					<h5>OBJETIVO</h5>
					<p>Avaliar o desempenho das políticas públicas, instrumentos, planos e programas previstos no PDE abordando sua eficiência, eficácia e efetividade.</p>
					<h5>ATIVIDADES ESTRATÉGICAS</h5>
					<p>
						. Avaliar os indicadores existentes no Sistema de Monitoramento do PDE, desenvolvidos por SMDU, adequando-os para a Zona Rural
					</p>
					<p><strong>META</strong></p>
					<p>
						Implantar Sistema de monitoramento (PDE) da ZR até 2020.
					</p>
					<p><strong>PRIORIDADE</strong></p>
					<p>Alta</p>
					<Comments :attr="{id:commentId(), context:'AÇÃO – Monitoramento das ferramentas do PDE para a Zona Rural'}" v-if="estaConsulta.ativo == 1"></Comments>
				</div>	
				<div class="acao">				
					<h4>AÇÃO – Planos Regionais, Planos de Bairro e PIUs das subprefeituras com ZR e/ou atividade agropecuária.</h4>
					<h5>OBJETIVO</h5>
					<p>Compatibilizar as ações previstas no PDRSS com os Planos Regionais, Planos de Bairro e PIUs (Perímetros de intervenção urbana) das Subprefeituras com ZR ou atividades agropecuárias.</p>
					<h5>ATIVIDADES ESTRATÉGICAS</h5>
					<p>
						. Constituir GT intersecretarial para a elaboração de relatório de avaliação.
					</p>
					<p><strong>META</strong></p>
					<p>
						Elaborar e publicizar, apontando as compatibilidades e incompatibilidades entre os planos, antes do início do processo de revisão do PDE, relatório.
					</p>
					<p><strong>PRIORIDADE</strong></p>
					<p>Médio</p>
					<Comments :attr="{id:commentId(), context:'AÇÃO – Planos Regionais, Planos de Bairro e PIUs das subprefeituras com ZR e/ou atividade agropecuária.'}" v-if="estaConsulta.ativo == 1"></Comments>
				</div>
				<div class="acao">				
					<h4>AÇÃO – Sistema de Informações da Zona Rural de SP</h4>
					<h5>OBJETIVO</h5>
					<p>Coletar, sistematizar e disponibilizar um conjunto de informações fundiárias, sociais, econômicas e ambientais referentes aos territórios rurais da cidade.</p>
					<h5>ATIVIDADES ESTRATÉGICAS</h5>
					<p>
						. Constituir GT intersecretarial para a elaboração de relatório de avaliação.
					</p>
					<p><strong>META</strong></p>
					<p>
						. Criar, no âmbito do GEOSAMPA, plataforma já existente em SMDU, ambiente específico para os dados do rural paulistano.<br>
						. Realizar levantamento de dados e Registro de Áreas Produtivas

					</p>
					<p><strong>PRIORIDADE</strong></p>
					<p>Alta</p>
					<Comments :attr="{id:commentId(), context:'AÇÃO – Sistema de Informações da Zona Rural de SP'}" v-if="estaConsulta.ativo == 1"></Comments>
				</div>
		</section>
		
		
		
		

		
		
		
		

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
// import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'
import Comments from '@/components/Comments'
import CommentsContext from '@/components/CommentsContext'
import CommentsLoader from '@/components/CommentsLoader'


export default {
	name: 'Pmadrss',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			contextosPreenchidos: 0
		}
	},
	components: {
		Comments,
		CommentsContext,
		CommentsLoader,
		PageTop,
		Indice
		// Apoio
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

h4, h5 {
	margin-top: 1em !important;
}
.acao:nth-of-type(odd) {
	background-color: #FAFAFA;
}
</style>
