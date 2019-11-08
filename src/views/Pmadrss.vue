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

			<Comments :attr="{id:commentId(), context:'Introdução'}" v-if="estaConsulta.ativo == 1"></Comments>
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
				<CommentsContext :id="commentId()" :context="getContext($event)">
				<h4>AÇÃO - Turismo Sustentável 1</h4>
				<h5>OBJETIVO</h5>
				<p>Apoiar o desenvolvimento do Turismo Rural no Pólo de Ecoturismo de Parelheiros, conforme Plano de Desenvolvimento do Turismo Sustentável aprovado</p>
				<h5>ATIVIDADES ESTRATÉGICAS</h5>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p><strong>META</strong></p>
				<p>
					. 30 propriedades estruturadas e aptas para recepção de turistas e com atividades voltadas ao turismo rural;<br>
					. realização de um Fórum de integração dos conselhos no território, pelo menos uma vez ao ano;
				</p>
				<p><strong>PRIORIDADE</strong></p>
				<p>Urgente</p>
				<!-- <Comments :attr="{id:commentId(), context:'AÇÃO - Turismo Sustentável 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->
				</CommentsContext>
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
			estaConsulta: {}
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
	mounted: function () {
		console.log("COMPUTED");
		console.log(this.estaConsulta);
	},
	methods: {
		getContext (elemento) {
			console.log("GET CONTEXT -------->")
			console.log(elemento)
			return 'ok'
		}
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
	background-color: gray;
}
</style>
