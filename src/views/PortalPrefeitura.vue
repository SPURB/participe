<template>
	<div class="PortalPrefeitura" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/portal-prefeitura_1900w.jpg" :esta_consulta="estaConsulta" :social="social_assets">
			<template slot="titulo"><div>Layout do Novo Portal da Prefeitura de São Paulo</div></template>
		</PageTop>

		<Indice :titulos="titulosLimpo"></Indice>

		<section>
			<h2 class="titulo" indent="1">Introdução</h2>
			<p>A Prefeitura de São Paulo, por meio da Secretaria do Governo Municipal, quer saber sua opinião sobre o projeto de modernização dos Portais Institucionais da cidade de São Paulo.</p>

			<p>Veja o protótipo do novo portal da prefeitura:</p>
			<ul class="links">
				<li>
					<a href="http://dpp9764.prodam/portaispmsp/capital/home_cor_v1.html" target="_blank">
						<i class="icon-acessar_url icon"><span>url</span></i>
						<div>Protótipo</div>
						<span>7.9 MB</span>
					</a>
				</li>
			</ul>

			<!-- <Comments
				v-if="estaConsulta.ativo == 1"
				:attr="{id:1, context:'Introdução'}"
			></Comments> -->
			<Comments
				:attr="{id:1, context:'Introdução'}"
			></Comments>

			<h2 class="titulo" indent="2">1. Histórico</h2>
			<p>A Prefeitura de São Paulo (PMSP) utiliza o CMS (Content Management System) PLONE e CMS WARAM para gerenciamento do conteúdo dos sites institucionais.</p>
			<p>A publicação do conteúdo é realizada pelos funcionários das Secretarias e Subprefeituras, com controle de acesso monitorado pela Secretaria do Governo Municipal visando a divulgação de atos da administração pública, respeitando a Lei de Acesso à Informação nº 12.527 de 18 de novembro de 2011 e o interesse do cidadão.</p>

			<h2 class="titulo" indent="2">2. Proposta de Mudança</h2>
			<p>O Portal da Prefeitura de São Paulo da Secretaria do Governo Municipal, responsável pela parte técnica dos Portais, propõe a mudança de plataforma do site da Prefeitura do CMS Plone para o CMS Drupal.</p>
			<p>A nova arquitetura dará maior liberdade no desenvolvimento, manutenção e atualização do sistema com uma nova identidade visual dos Portais Institucionais da Prefeitura de São Paulo. O novo portal também será livre de custos, visto que o CMS Drupal é uma plataforma livre e gratuita e poderá ser implantada pelos funcionários técnicos conhecedores da ferramenta. </p>

			<h2 class="titulo" indent="2">3. Novo Portal da Prefeitura de SP   </h2>
			<p>Além de uma nova identidade visual para os sites da PMSP, o objetivo principal dessa nova estrutura é fazer com que todos os sites fiquem unidos em uma mesma plataforma possibilitando a criação de um portal que receberá dados de todas as Secretarias e Subprefeituras. Isso faz com que as informações fiquem concentradas em um só lugar facilitando o acesso às informações ao cidadão e minimizando os ruídos de comunicação entre os Órgãos Municipais.  </p>

			<h2 class="titulo" indent="2">4. Processo participativo  </h2>
			<p>O desenvolvimento de um Portal para auxiliar o cidadão é complexo, e poderá necessitar de ajustes quando implantados. Mesmo com planejamento e participação social, na prática, algumas variáveis podem ficar de fora e, em regra, não é possível saber como a população irá utilizar e reagir à utilização do serviço necessitando de constante evolução. </p>
			<p>Por este motivo, ficará disponível os arquivos para download e visualização na Campus Party 2019 da versão do wireframe da página principal e algumas páginas internas do protótipo do novo Portal da PMSP.</p>
			<p>Após a Campus Party, os dados coletados e poderão ser utilizados para orientar o desenvolvimento do projeto com melhores práticas, buscando atender os anseios do cidadão.</p>
			<p>Fica disponível o endereço de e-mail<a href="mailto:novoportal@prefeitura.sp.gov.br?subject=Consulta%20/%20participe.gestaourbana-%20novo%20portal"> novoportal@prefeitura.sp.gov.br</a> para que sejam direcionadas as dúvidas e sugestões quanto ao protótipo disponível. </p>

			<!-- <Comments
				v-if="estaConsulta.ativo == 1"
				:attr="{id:1, context:'Introdução'}"
			></Comments> -->
			<Comments
				:attr="{id:1, context:'Introdução'}"
			></Comments>

		</section>

		<section>
			<h2 class="titulo" indent="1">2. Mudanças propostas </h2>
			<p>A partir da implantação do CMS Drupal, algumas mudanças poderão ser viabilizadas no novo portal: </p>

			<h3 class="titulo" indent="2">1. Identidade Visual</h3>
			<p>Um dos objetivos da aplicação da nova plataforma é poder dar uma nova identidade visual para os sites da Prefeitura de São Paulo.</p>

			<h3 class="titulo" indent="2">2. Menu Principal</h3>
			<p>O menu será simplificado e levará para as principais áreas do site com busca para auxiliar a procura pelo conteúdo, relacionamos alguns assuntos que serão apresentados no novo Portal.</p>

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
					Informações sobre atos da administração pública e interesse do município a fim de manter o cidadão informado com os acontecimentos recentes e ações da PMSP na cidade.
				</li>
			</ol>

			<h3 class="titulo" indent="2">3. Eventos</h3>
			<p>A parte de eventos é uma área nova, que não existe atualmente no site. Essa área será dividida em duas partes: </p>

			<ol class="decimais">
				<li><strong>Conheça São Paulo</strong><br>
				Este é um bloco onde serão indicados lugares históricos de atrativo turístico para que o cidadão conheça melhor a cidade e os benefícios que tem a oferecer, o espaço é reservado para obter conhecimento cultural.</li>
				<li><strong>Acontece em SP</strong><br>
				Esta área é uma agenda de eventos da cidade promovidos pela PMSP que acontecerão na cidade de São Paulo oferecendo opções de lazer para o cidadão e promovendo assim uma proximidade maior entre a população e a cidade.
				</li>
			</ol>

			<h3 class="titulo" indent="2">4. Programas</h3>
			<p>No novo portal, a área mostrará os programas em destaque feitos pela Prefeitura com informações que poderão inserir os cidadãos interessados nos programas da PMSP, além de informar as pessoas que navegam pelo site para que possam conhecê-los</p>

			<h3 class="titulo" indent="2">5. Canais oficiais</h3>
			<p>As redes sociais da Prefeitura são grandes aliadas quando o quesito é trazer informação. Por isso terão uma área própria para cada uma delas na página inicial do site. </p>

			<h3 class="titulo" indent="2">6. Agenda do Prefeito </h3>
			<p>Atualmente para o cidadão ou jornalista conferirem a agenda do Prefeito, eles precisam ir ao rodapé para clicar em um link pequeno e escondido. A nova proposta é que a agenda já exiba seus primeiros eventos na página inicial do Portal evitando tantos cliques, ficará mais fácil visualizar.</p>

			<h3 class="titulo" indent="2">7. Portal da Transparência </h3>
			<p>Outra área nova que irá mostrar um gráfico das receitas e despesas do município de São Paulo, mostrando mais uma vez o desejo de aproximar o cidadão da Prefeitura e de tudo que ela faz. Ao clicar no gráfico, será encaminhado para o Portal da Transparência. </p>

			<Comments
				v-if="estaConsulta.ativo == 1"
				:attr="{id:2, context:'Mudanças propostas'}"
			></Comments>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>

			<Comments
				v-if="commentsLoaded && estaConsulta.ativo == 1"
				:attr="{id:1, context:'Comentarios'}">
			</Comments>
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
// import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'PortalPrefeitura',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			social_assets: {
				whatsapp: 'https://api.whatsapp.com/send?text=Participe%20da%20consulta%20p%C3%BAblica%20de%20reformula%C3%A7%C3%A3o%20da%20prefeitura%20de%20S%C3%A3o%20Paulo%20-%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br/#/portal-prefeitura',
				facebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br/#/portal-prefeitura',
				twitter: 'https://twitter.com/intent/tweet?text=Participe%20da%20consulta%20p%C3%BAblica%20de%20reformula%C3%A7%C3%A3o%20da%20prefeitura%20de%20S%C3%A3o%20Paulo%20-%20http%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2F#%2Fportal-prefeitura'
			}
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

// div.PortalPrefeitura {}

</style>
