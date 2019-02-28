<template>
	<div class="GovernoAberto" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/governo-aberto_1900w.jpg" :esta_consulta="estaConsulta" :social="social_assets">
			<template slot="titulo"><div>Edital de Credenciamento do Programa Agentes de Governo Aberto - 2019</div></template>
		</PageTop>

		<Indice :titulos="titulosLimpo"></Indice>

		<section>
			<h2 class="titulo" indent="1">Introdução</h2>
			<p>A Consulta Pública irá colher sugestões sobre o Edital do Programa Agentes de Governo Aberto (edição de 2019).
O propósito do programa é engajar a sociedade civil na agenda de Governo Aberto através da contratação de pessoas para a oferta de formações gratuitas aos demais munícipes, de modo a disseminar e descentralizar conceitos, ferramentas e práticas de Governo Aberto na cidade de São Paulo.
</p>

			<ul class="links">
				<li>
					<a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/comunicacao/consulta_publica" target="_blank">
						<i class="icon-acessar_url icon"><span>url</span></i>
						<div>Protótipo</div>
						<span>7.9 MB</span>
					</a>
				</li>
			</ul>
			<CommentsContext :id="1" :context="'Introdução e protótipo'">
				<p>Comente aqui o protótipo do novo portal da prefeitura.</p>
			</CommentsContext>

			<h2 class="titulo" indent="2">1. Histórico</h2>
			<CommentsContext :id="2" :context="'1. Histórico'">
				<p>A Prefeitura de São Paulo (PMSP) trabalha oferecendo transparência e informando o cidadão por diversos meios de comunicação. Os sites institucionais utilizam sistemas para publicar e gerenciar as informações dos Órgãos municipais.</p>
				<p>A publicação do conteúdo nos sites institucionais é realizada pelos funcionários das Secretarias e Subprefeituras, com controle de acesso monitorado pela Secretaria do Governo Municipal visando a divulgação de atos da administração pública, respeitando a Lei de Acesso à Informação nº 12.527 de 18 de novembro de 2011 e o interesse do cidadão.</p>
			</CommentsContext>

			<h2 class="titulo" indent="2">2. Proposta de Mudança</h2>
			<CommentsContext :id="3" :context="'2. Proposta de Mudança'">
				<p>O Portal da Prefeitura de São Paulo da Secretaria do Governo Municipal, responsável pela parte técnica dos Portais, propõe a mudança de plataforma do site da Prefeitura do CMS Plone para o CMS Drupal.  .</p>
				<p>A nova arquitetura dará maior liberdade no desenvolvimento, manutenção e atualização do sistema com uma nova identidade visual dos Portais Institucionais da Prefeitura de São Paulo. O novo portal também será livre de custos, visto que o CMS Drupal é uma plataforma livre e gratuita e poderá ser implantada pelos funcionários técnicos conhecedores da ferramenta.</p>
			</CommentsContext>

			<h2 class="titulo" indent="2">3. Novo Portal da Prefeitura de SP</h2>
			<CommentsContext :id="4" :context="'3. Novo Portal da Prefeitura de SP'">
				<p>Além de uma nova identidade visual para os sites da PMSP, o objetivo principal dessa nova estrutura é fazer com que todos os sites fiquem unidos em uma mesma plataforma possibilitando a criação de um portal que receberá dados de todas as Secretarias e Subprefeituras. Isso faz com que as informações fiquem concentradas em um só lugar facilitando o acesso às informações ao cidadão e minimizando os ruídos de comunicação entre os Órgãos Municipais.</p>
			</CommentsContext>

			<h2 class="titulo" indent="2">4. Processo participativo</h2>
			<CommentsContext :id="5" :context="'4. Processo participativo'">
				<p>A construção dos novos sites tem caráter colaborativo para que as necessidades da população sejam, em sua maioria, contempladas nos novos portais </p>
				<p>Por este motivo, ficará disponível entre os dias 09/02/2019 a 28/02/2019, no link <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/comunicacao/consulta_publica">https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/comunicacao/consulta_publica</a> o acesso ao protótipo do novo portal, que também será discutido na Campus Party 2019 onde ficará disponível aos visitantes o acesso à algumas páginas internas do novo Portal da PMSP.</p>
				<p>Após o período de consulta, os dados coletados e poderão ser utilizados para orientar o desenvolvimento do projeto com melhores práticas, buscando atender os anseios do cidadão.</p>
				<p>Fica disponível o endereço de e-mail novoportal@prefeitura.sp.gov.br para que sejam direcionadas as dúvidas e sugestões quanto ao protótipo disponível. </p>
			</CommentsContext>
		</section>

		<section>
			<h2 class="titulo" indent="1">2. Mudanças propostas </h2>
			<p>A partir da implantação do CMS Drupal, algumas mudanças poderão ser viabilizadas no novo portal:</p>

			<h3 class="titulo" indent="2">1. Identidade Visual</h3>
			<CommentsContext :id="6" :context="'2.1. Identidade Visual'">
				<p>Um dos objetivos da aplicação da nova plataforma é poder dar uma nova identidade visual, mais moderna e dinâmica, para os sites da Prefeitura de São Paulo. </p>
			</CommentsContext>

			<h3 class="titulo" indent="2">2. Menu Principal</h3>

			<CommentsContext :id="7" :context="'2.2. Menu Principal'">
			<p>O menu será simplificado e levará para as principais áreas do site com busca para auxiliar a procura pelo conteúdo, relacionamos alguns assuntos que serão apresentados no novo Portal. </p>

			<ol class="decimais">
				<li><strong>Prefeitura</strong><br>
				Exibirá dados da Equipe de Governo, agenda do Prefeito, Secretarias, Subprefeituras, Licitações, informações para o servidor público.
				</li>
				<li><strong>São Paulo</strong><br>
					História da cidade, localização de escolas, parques, unidades de saúde, dados estatísticos sobre a população, Educação economia entre outros.
				</li>
				<li><strong>Turismo</strong><br>
					Pontos turísticos da cidade, centrais turísticas, roteiros, consulados, telefones e informações úteis.
				</li>
				<li><strong>Serviços</strong><br>
					Lista de relação dos serviços da PMSP sendo direcionado para a página específica do serviço.
				</li>
				<li><strong>Notícias</strong><br>
					Informações sobre atos da administração pública e interesse do município a fim de manter o cidadão informado com os acontecimentos recentes e ações na cidade.
				</li>
			</ol>
			</CommentsContext>

			<h3 class="titulo" indent="2">3. Eventos</h3>
			<CommentsContext :id="8" :context="'2.3. Eventos'">
				<p>A parte de eventos é uma área nova, que não existe atualmente no site. Essa área será dividida em duas partes: </p>

				<ol class="decimais">
					<li><strong>Conheça São Paulo</strong><br>
					Este é um bloco onde serão indicados lugares históricos de atrativo turístico para que o cidadão conheça melhor a cidade e os benefícios que tem a oferecer, o espaço é reservado para obter conhecimento cultural.</li>
					<li><strong>Acontece em SP</strong><br>
					Esta área é uma agenda de eventos da cidade promovidos pela PMSP que acontecerão na cidade de São Paulo oferecendo opções de lazer para o cidadão e promovendo assim uma proximidade maior entre a população e a cidade.
					</li>
				</ol>
			</CommentsContext>

			<h3 class="titulo" indent="2">4. Ações e projetos da Prefeitura</h3>
			<CommentsContext :id="9" :context="'2.4. Ações e projetos da Prefeitura'">
				<p>A área mostrará informações sobre cada ação e projeto em destaque feitos pela Prefeitura. </p>
			</CommentsContext>

			<h3 class="titulo" indent="2">5. Canal SP</h3>
			<CommentsContext :id="10" :context="'2.5. Canal SP'">
				<p>Vídeos do canal oficial da Prefeitura de São Paulo.</p>
			</CommentsContext>

			<h3 class="titulo" indent="2">6. Agenda do Prefeito</h3>
			<CommentsContext :id="11" :context="'2.6. Agenda do Prefeito'">
				<p>Atualmente para o cidadão ou jornalista conferirem a agenda do Prefeito, eles precisam ir ao rodapé para clicar em um link pequeno e escondido. A nova proposta é que a agenda já exiba seus primeiros eventos na página inicial do Portal evitando tantos cliques, ficará mais fácil visualizar.</p>
			</CommentsContext>

			<h3 class="titulo" indent="2">7. Portal da Transparência </h3>
			<CommentsContext :id="11" :context="'2.7. Portal da Transparência'">
				<p>Outra área nova que irá mostrar um gráfico das receitas e despesas do município de São Paulo, mostrando mais uma vez o desejo de aproximar o cidadão da Prefeitura e de tudo que ela faz. Ao clicar no gráfico, será encaminhado para o Portal da Transparência.</p>
			</CommentsContext>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import CommentsContext from '@/components/CommentsContext'
import CommentsOption from '@/components/CommentsOption'
import CommentsLoader from '@/components/CommentsLoader'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'GovernoAberto',
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
		Comments,
		CommentsContext,
		CommentsOption,
		CommentsLoader
	},
	mixins: [consultasCommons]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
</style>
