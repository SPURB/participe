<template>
	<div class="GovernoAberto" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/governo-aberto_1900w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>Edital de Credenciamento do Programa Agentes de Governo Aberto - 2019</div></template>
		</PageTop>

		<Indice :titulos="titulosLimpo"></Indice>

		<section>
			<h2 class="titulo" indent="1">Introdução</h2>
			<p>A Consulta Pública irá acolher sugestões sobre o Edital do Programa Agentes de Governo Aberto de 2019, promovido pela Prefeitura de São Paulo, por meio da Secretaria do Governo Municipal e Controladoria Geral do Município. 
O propósito do programa é engajar a sociedade civil na agenda de Governo Aberto através da contratação de pessoas para a oferta de formações gratuitas aos munícipes, de modo a descentralizar conceitos, ferramentas e práticas de Governo Aberto na cidade</p>
		</section>
		<section>
			<h2 class="titulo" indent="1"><center>EDITAL Nº 01/2019 – SGM/CGM - EDITAL DE CREDENCIAMENTO DE AGENTES DE GOVERNO ABERTO <br />
				Processo SEI</center>
			</h2>
			<CommentsContext :id="1" :context="'EDITAL DE CREDENCIAMENTO DE AGENTES DE GOVERNO ABERTO'">
				<p>
					A Prefeitura de São Paulo, por meio da Secretaria do Governo Municipal e a Controladoria Geral do Município, <b>com apoio do Comitê Intersecretarial de Governo Aberto da Cidade de São Paulo (CIGA-SP)</b>, FAZ SABER que, durante o período de <mark style="background-color: yellow">xx de xxxx a xx  de xxxx de 2019, às 23h59</mark>, por cadastramento online na plataforma SP Cultura (http://spcultura.prefeitura.sp.gov.br), estarão abertas as inscrições para credenciamento de Agentes de Governo Aberto.
				</p>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">1. DO OBJETO</h3>
			<CommentsContext :id="2" :context="'ITEM 1.1'">
				<p>
					1.1 O presente Edital tem por objeto o credenciamento de Agentes de Governo Aberto para a realização de oficinas formativas de promoção e cultura de governo aberto nas áreas de abrangência de todas as Subprefeituras da cidade de São Paulo.
					<p>1.1.1. As oficinas formativas serão destinadas aos cidadãos, redes, associações, organizações e coletivos da sociedade civil, visando ampliar e qualificar a participação política na gestão municipal.</p>
				</p>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">2. DAS DIRETRIZES, DOS OBJETIVOS E DAS ORIENTAÇÕES</h3>
			<CommentsContext :id="3" :context="'ITEM 2.1'">
				<p>2.1. Para fins deste Edital, com base no conceito adotado pela iniciativa internacional Open Government Partnership, consideram-se como diretrizes de Governo Aberto:
					<ol type="a">
					    <li>A transparência e o acesso às informações públicas;</li>
					    <li>O fortalecimento da participação social;</li>
					    <li>O fomento à inovação tecnológica;</li>
					    <li>O fortalecimento da integridade pública, por meio da prevenção e do combate à corrupção. </li>
					</ol>
					<p>2.1.1. O programa Agentes de Governo Aberto tem como objetivo engajar a sociedade civil na agenda de Governo Aberto, por meio da contratação de Agentes Formadores e a oferta de formações gratuitas para munícipes, de modo a descentralizar conceitos, ferramentas e práticas de Governo Aberto no município de São Paulo e atingindo o maior número possível de cidadãos, capacitando-os para uma boa participação política junto ao poder público.</p>
				</p>
			</CommentsContext>
			<CommentsContext :id="4" :context="'ITEM 2.2'">
				<p>2.2. Por promoção da cultura de Governo Aberto, para fins deste Edital, entende-se:
					<ol type="a">
					    <li>A difusão do conceito e das <b>práticas de transparência, dados abertos</b> e <b>acesso à informação</b>;</li>
					    <li>O fomento ao uso de <b>instrumentos de gestão participativa</b>, de <b>mapeamento colaborativo</b> e outras <b>técnicas de georreferenciamento</b> dos territórios;</li>
					    <li>A criação de aplicações e ferramentas tecnológicas voltadas à <b>promoção da cidadania</b>, por meio do uso e desenvolvimento de hardwares e softwares livres e abertos e incentivo às <b>inovações sociais e colaborativas</b>;</li>
					    <li>A difusão dos instrumentos de <b>comunicação cidadã</b> existentes e o estímulo ao desenvolvimento de novos que tenham como propósito compartilhar <b>experiências e iniciativas de governo aberto</b>;</li>
					    <li>A difusão do conhecimento de existência de <b>mecanismos internos e externos de combate à corrupção</b>, fomentando o <b>controle social</b> e disseminando a cultura de atendimento às exigências de <b>programas de integridade (compliance)</b>, além de propiciar uma <b>educação política</b> que capacite o cidadão para a <b>avaliação e monitoramento de políticas públicas</b>.</li>
					    <li>A difusão do conhecimento das <b>estruturas públicas</b> e suas <b>competências</b> e a capacitação para a <b>interação com o Poder Público</b> de forma ética e atendendo a programas de integridade (<b>formação de relações governamentais</b>).</li>
					</ol>
				</p>
			</CommentsContext>
			<CommentsContext :id="5" :context="'ITEM 2.3'">
				<p>
					2.3.  A 4ª edição do Edital de Credenciamento de Agentes de Governo Aberto terá sua primeira etapa com a contratação de 32 (trinta e dois) Agentes, com a concessão de bolsa com duração de 04 (quatro) meses no decorrer do segundo semestre de 2019.
					<p>2.3.1. O candidato interessado em se credenciar como Agente de Governo Aberto deve inscrever um projeto de oficina inserido nas categorias descritas no item 6.1 atendendo aos objetivos, diretrizes e orientações do programa.</p>
					<p>2.3.2. Por “oficina” entende-se como conjunto de atividades em metodologias ativas que visam formar e capacitar o participante, ampliando seu conhecimento e desenvolvendo habilidades específicas.</p>
					<p>2.3.3. os Agentes serão selecionados pela Comissão de Seleção prevista pelo item 10.1  de acordo com os critérios estabelecidos neste edital.</p>
				</p>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">3. DO PAGAMENTO</h3>
			<CommentsContext :id="6" :context="'ITEM 3.1'">
				<p>
					3.1. Cada Agente de Governo Aberto receberá bolsa pessoal e intransferível no valor bruto de até R$ 6.000,00 (seis mil  reais) pela realização das atividades no período da ocorrência das oficinas (04 meses) a partir da assinatura do Termo de Compromisso. 
					<p>3.1.1. Os pagamentos serão efetuados mensalmente na proporção de horas de atividades presenciais executadas em cada mês, condicionados à comprovação em prestação de contas, conforme o item 14.2 deste edital, e à participação nos Encontros Formativos.</p>
					<p>3.1.2. Sobre o valor mensal de pagamento incidirá os tributos conforme a legislação vigente, incorrendo pagamento de INSS e, quando o pagamento for superior ao limite de isenção de tributação, incorrerá pagamento de IR.</p>
				</p>
			</CommentsContext>
			<CommentsContext :id="7" :context="'ITEM 3.2'">
				<p>
					3.2. O valor ofertado de bolsa refere-se à atividade e ao seu respectivo planejamento, não sendo os demais custos como produção de materiais e cartilhas, cópias reprográficas, deslocamento, alimentação e outros arcados pela Prefeitura de São Paulo.
					<p>3.2.1. As horas de atividade de planejamento são presumidas como existentes na proporção de 30 minutos de planejamento para cada hora de oficina ministrada.</p>
				</p>
			</CommentsContext>
			<CommentsContext :id="8" :context="'ITEM 3.3'">
				<p>
					3.3. O valor da bolsa está condicionado à efetiva execução da oficina e sua não ocorrência, independentemente do motivo, não ensejará qualquer pagamento ou reembolso.
				</p>
			</CommentsContext>
			<CommentsContext :id="9" :context="'ITEM 3.4'">
				<p>
					3.4. A concessão da bolsa ao Agente não gera qualquer tipo de vínculo empregatício com a Prefeitura de São Paulo.
				</p>
			</CommentsContext>
			<CommentsContext :id="10" :context="'ITEM 3.5'">
				<p>
					3.5. A relação jurídica entre a Prefeitura de São Paulo e o Agente de Governo Aberto é intransferível a terceiros, sendo de responsabilidade única e exclusiva do Agente qualquer auxílio que venha a utilizar (tais quais assessores, monitores, ajudantes ou estagiários), não configurando qualquer vínculo destes com o município ou com o Programa Agentes de Governo Aberto.
				</p>
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
