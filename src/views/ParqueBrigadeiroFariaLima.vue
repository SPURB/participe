<template>
	<div class="PoliticaMunicipalTurismo" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/parque_brigadeiro_faria_lima.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PARQUE TENENTE BRIGADEIRO FARIA LIMA</div></template>
			<template slot="subtitulo"><div>Processo Participativo</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<!-- <Apoio></Apoio> -->
		<!-- Decreto Nº 56.901 inclua este componente caso seja um PIU -->

		<section>
			<h2 class="titulo" indent="2">Teste pergunta</h2>
			<p>Et sem mi aliquet tellus. Bibendum nibh eu odio mattis id vulputate consequat. Nisi, sem nullam congue amet facilisi hac ante. Eleifend vestibulum nec viverra amet convallis et semper in id. Volutpat aliquam, etiam eu pharetra. Vulputate tortor cras suspendisse tellus quis at sit blandit sit. Urna mauris sociis justo elementum cursus donec. Eget maecenas enim congue eu velit diam sodales. Ultricies tristique mollis gravida elementum diam proin. Bibendum vitae nam et risus tellus. Leo dui non vestibulum sed sollicitudin mollis luctus convallis etiam. Lorem tortor sagittis feugiat eu laoreet gravida condimentum viverra orci.</p>
			<Pergunta :attr="{ id: 20, context: 'Ctx1' }">
				<template #pergunta>
					Quais atividades de interesse público podem funcionar no Hipódromo de Cidade Jardim fora dos períodos em que ocorrem corridas e treinamentos e preservando o patrimônio histórico e as características da vizinhança?
				</template>
				<template #info>
					Além da participação espontânea, com comentários acerca do conteúdo dos elementos prévios ao desenvolvimento do PIU Jockey Club, os munícipes poderão opinar sobre questões propostas pela SP Urbanismo, auxiliando na formulação de propostas para a sequência do projeto.
				</template>
			</Pergunta>
			<p>Nisl, viverra mauris lacus, placerat laoreet in habitant. A sed molestie malesuada nisi, fermentum dolor, nibh risus sed. Tortor ac ultrices non, suspendisse tortor faucibus. Scelerisque montes, consequat volutpat vestibulum et, orci duis. Eget quam fames viverra habitant sit. Diam augue morbi amet, congue sit iaculis venenatis. Ultrices sodales eget augue ac. Nullam interdum parturient amet quis ornare. Ut fringilla nunc dolor vitae, vel at amet vulputate sagittis. Massa luctus et cum urna et. Sagittis pharetra diam adipiscing vivamus. Nam nunc, dui ultricies dolor lorem. Mauris non adipiscing gravida morbi amet, eget congue molestie nibh. Donec elit ultrices libero enim velit.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">1. APRESENTAÇÃO</h2>
			<Comments :attr="{id:commentId(true), context:'1. APRESENTAÇÃO'}" v-if="estaConsulta.ativo == 1"></Comments>
			<p>Este documento se trata do Plano Diretor do Parque Tenente Brigadeiro Faria Lima, fruto das atividades do Grupo de Trabalho instituído pela Portaria Intersecretarial nº 1/SVMA/SGM/2019. Sua elaboração fora determinada na ocasião de um Acordo junto à Promotoria de Justiça do Meio Ambiente da Capital do Ministério Público do Estado de São Paulo, em meio ao processo de concessão pública do 1° Lote de Parques, o qual contempla, além do Tenente Brigadeiro Faria Lima, o Ibirapuera, Lajeado, Jardim Felicidade, Eucaliptos e Jacintho Alberto.</p>
			<p>O referido Grupo de Trabalho contou com quadro técnico especializado e multidisciplinar da Secretaria Municipal do Verde e do Meio Ambiente e apoio da SP Parcerias, destacados pela formação em biologia, geografia, arquitetura, urbanismo, engenharias, direito, dentre outros.</p>
			<p>A elaboração do Plano está em andamento desde março de 2019 percorrendo etapas que contemplaram desde levantamento de documentação existente, visitas técnicas, levantamentos de flora e fauna, análise dos dados encontrados até o processo participativo junto à população.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">2. INTRODUÇÃO</h2>
			<Comments :attr="{id:commentId(), context:'2. INTRODUÇÃO'}" v-if="estaConsulta.ativo == 1"></Comments>
			<p>O Plano Diretor se volta a balizar a gestão do parque, por meio do fornecimento de diretrizes que parametrizarão sua governança, com vistas a promover: (i) a proteção do seu ecossistema; (ii) melhorias ambientais; (iii) aprimoramento de sua estrutura; e (iv) maximizar a experiência dos usuários na fruição do equipamento.</p>
			<p>Assim, o Plano Diretor é um documento que reúne diretrizes de gestão, uso e manejo do Parque para garantir a sua boa governança e preservar suas funções ecológicas e recreativas. A implementação de tais diretrizes deve ser monitorada por meio de indicadores instituídos e fornecidos por este próprio Plano, de modo a avaliar o seu estágio de implementação e o sucesso das diretrizes indicadas.</p>
			<p>O Plano Diretor é um instrumento do planejamento, é um documento estratégico, abrangente e geral com diretrizes que consolidam regramentos, estudos, análises situacionais ou diagnósticos, visando orientar as ações de melhoria e gestão, os programas e projetos necessários, para alcançar as metas de um governo.</p>
			<p>Tanto é um guia de gestão que a elaboração deste documento levou em consideração as obrigações oriundas das normas incidentes sobre parques urbanos no âmbito do Município de São Paulo, bem como das normas específicas. Ademais, prevê-se uma revisão quinquenal deste Plano, como medida de garantia de sua atualidade.</p>
			<p>Embora sua elaboração tenha se dado em meio a um projeto concessório, sua aplicabilidade se estende tanto ao caso de gestão pública, quanto de gestão privada. É dizer: este Plano Diretor não se trata de um documento da concessão, sendo verdadeiramente um instrumento de governança e gestão do Parque como um todo. Assim, suas diretrizes devem ser observadas independentemente de seu gestor ser diretamente o Poder Público ou uma entidade privada.</p>
			<p>Especificamente para o caso do Parque ser gerido por entidade privada, imprescindível anotar que somente as diretrizes ora contidas que encontrarem correlação com os encargos constantes do instrumento de delegação que se aplicarão ao particular na qualidade de gestor do equipamento. As demais diretrizes, por sua vez, permanecerão sob responsabilidade da Municipalidade.</p>
			<p>Portanto, o presente Plano Diretor se aplica a todos envolvidos no cotidiano do Parque e responsáveis por sua gestão, incluindo Administração Pública, concessionária e usuários. Tem-se, portanto, uma ampla matriz de responsabilidades e diretrizes que devem ser seguidas por todos, conforme suas atribuições.</p>
			<p>A ordenação do documento da maneira exibida busca fornecer diretrizes para abranger a gestão do Parque Lajeado como um todo, garantindo que o equipamento tenha suas funções ambientais mantidas e aprimoradas e que seus usuários possam desfrutar adequadamente de suas estruturas.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">3. INSERÇÃO URBANA</h2>
			<Comments :attr="{id:commentId(), context:'3. INSERÇÃO URBANA'}" v-if="estaConsulta.ativo == 1"></Comments>
			<ul class="links">
				<li>
					<a :href="src('arquivos/parque-brigadeiro-faria-lima/3 Inserção Urbana – Leia a minuta aqui na íntegra e contribua.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>3 Inserção Urbana – Leia a minuta aqui na íntegra e contribua.pdf</div>
						<span>201 KB</span>
					</a>
				</li>
			</ul>
		</section>

		<section>
			<h2 class="titulo" indent="1">4. DIAGNÓSTICO</h2>
			<Comments :attr="{id:commentId(), context:'4. DIAGNÓSTICO'}" v-if="estaConsulta.ativo == 1"></Comments>
			<ul class="links">
				<li>
					<a :href="src('arquivos/parque-brigadeiro-faria-lima/4 Diagnóstico – Leia a minuta aqui na íntegra e contribua.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>4 Diagnóstico – Leia a minuta aqui na íntegra e contribua.pdf</div>
						<span>2,48 MB</span>
					</a>
				</li>
			</ul>
		</section>

		<section>
			<h2 class="titulo" indent="1">5. GESTÃO</h2>
			<Comments :attr="{id:commentId(), context:'5. GESTÃO'}" v-if="estaConsulta.ativo == 1"></Comments>
			<ul class="links">
				<li>
					<a :href="src('arquivos/parque-brigadeiro-faria-lima/5 Gestão – Leia a minuta aqui na íntegra e contribua.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>5 Gestão – Leia a minuta aqui na íntegra e contribua.pdf</div>
						<span>291 KB</span>
					</a>
				</li>
			</ul>
		</section>

		<section>
			<h2 class="titulo" indent="1">6. PARTICIPAÇÃO SOCIAL</h2>
			<Comments :attr="{id:commentId(), context:'6. PARTICIPAÇÃO SOCIAL'}" v-if="estaConsulta.ativo == 1"></Comments>

		</section>
		<section>
			<h2 class="titulo" indent="2">6.1 CONSELHO GESTOR O PAPEL DOS CONSELHOS GESTORES NOS PARQUES URBANOS</h2>
			<p>A Lei Municipal nº 15.910/2013 foi a que dispôs, na esteira da ampliação da participação democrática na Administração Pública, sobre a criação dos Conselhos Gestores dos Parques Municipais. Os Conselhos Gestores são órgãos que congregam representantes da sociedade civil e do Poder Executivo municipal e desempenham primordial função de colaborar com a gestão do seu respectivo parque.</p>
			<p>Nesse sentido, uma vez constituído, o Conselho Gestor de cada parque possui as atribuições arroladas pelo art. 10º, da Lei Municipal nº 15.910/2013:</p>
			<p>“<em>Art. 10º São competências dos Conselhos Gestores dos Parques Municipais, ressalvadas as que são exclusivas do Poder Público:</em></p>
			<p><em>I - acompanhar, fiscalizar e propor medidas visando à organização dos parques municipais, à melhoria do sistema de atendimento aos frequentadores e à consolidação de seu papel como centro de cultura, lazer e recreação e como unidade de conservação e educação ambiental;</em></p>
			<p><em>II - propor estratégias de ação visando à integração do trabalho do parque a planos, programas e projetos intersetoriais;</em></p>
			<p><em>III - participar da elaboração ou da atualização do Plano Diretor, do Plano de Gestão e do Regulamento de Uso dos respectivos parques, assim como do planejamento das atividades neles desenvolvidas, respeitando as normas e restrições de uso estabelecidas pela Secretaria Municipal do Verde e do Meio Ambiente;</em></p>
			<p><em>IV - participar, analisar e opinar sobre pedidos de autorização de uso dos espaços dos parques municipais, inclusive para realização de shows e eventos, considerando as diretrizes da Secretaria Municipal do Verde e do Meio Ambiente e o Plano de Gestão do Parque;</em></p>
			<p><em>V - auxiliar a direção do parque, a fim de esclarecer os frequentadores sobre suas questões, conservação e importância para o bem comum, a qualidade de vida e a sustentabilidade;</em></p>
			<p><em>VI - articular as populações do entorno do parque, para promover o debate e elaborar propostas sobre as questões ambientais locais, em consonância com as diretrizes da política da Secretaria Municipal do Verde e do Meio Ambiente;</em></p>
			<p><em>VII - incentivar a participação das comunidades que frequentam os parques na articulação com os Conselhos Regionais de Meio Ambiente, Desenvolvimento Sustentável e Cultura de Paz, fazendo avançar a discussão de temas de interesse ambiental e a elaboração participativa de planos de desenvolvimento sustentável;</em></p>
			<p><em>VIII - participar de cursos, treinamento, campanhas e eventos que visem ampliar a participação em suas atividades e melhorar o desempenho dos membros dos Conselhos;</em></p>
			<p><em>IX - promover política de comunicação e atividades externas para divulgar a existência dos Conselhos e o trabalho desenvolvido por seus membros;</em></p>
			<p><em>X - examinar propostas, denúncias e queixas, encaminhadas por qualquer pessoa, movimento ou entidade social, podendo remetê-las, pela importância ou gravidade, aos Conselhos Regionais de Meio Ambiente, Desenvolvimento Sustentável e Cultura de Paz;</em></p>
			<p><em>XI - solicitar e ter acesso às informações de caráter técnico-administrativo, econômico-financeiro e operacional, incluindo as referentes a obras, acompanhar o Orçamento Participativo, a execução do Plano de Gestão e o cumprimento das metas correspondentes a cada parque;</em></p>
			<p><em>XII - promover reunião anual de prestação pública de contas, avaliação de resultados e planejamento de trabalho do respectivo Conselho;</em></p>
			<p><em>XIII - manter intercâmbio, trocar experiências e desenvolver atividades conjuntas, de cunho intersetorial, com outros conselhos que atuam em políticas públicas no âmbito de cada Subprefeitura;</em></p>
			<p><em>XIV - incentivar a organização e a participação da sociedade em fóruns, associações, outras entidades e movimentos sociais, com vistas a fortalecer sua representação nos Conselhos Gestores dos Parques Municipais;</em></p>
			<p><em>XV - elaborar, aprovar e manter atualizados o Regimento Interno de cada Conselho e suas normas de funcionamento, deliberando as questões de competência exclusiva dos Conselhos.</em>”</p>
			<p>À luz das suas competências, conclui-se que o Conselho Gestor representa um órgão para auxiliar na governança de seu respectivo parque. Interessante repisar que o Plano Diretor é um instrumento que também serve para balizar a governança dos parques urbanos. Não é à toa, portanto, que o inc. III do art. 10º impõe a participação dos Conselhos Gestores na elaboração do Plano Diretor de seu respectivo parque.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">7. MONITORAMENTO</h2>
			<Comments :attr="{id:commentId(), context:'7. MONITORAMENTO'}" v-if="estaConsulta.ativo == 1"></Comments>
			<p>O plano diretor é um documento de gestão que, neste caso, deverá ser revisado e atualizado no prazo de cinco anos. Ele deve conter um sistema de monitoramento e avaliação que permita verificar a eficiência da gestão e o cumprimento das diretrizes propostas, compreendendo a coleta e sistematização de dados, bem como a interpretação destes. É nesse contexto que os indicadores se tornam importantes, pois permitem a análise e comparação de parâmetros do ambiente, de eventos e de situações específicas ao longo do espaço e do tempo.</p>
			<p>Entretanto, a ausência de um sistema nacionalmente padronizado e consolidado de monitoramento e de indicadores impõe desafios aos novos modelos que são pretendidos, como no presente plano diretor do Parque do Lajeado. </p>
			<p>Assim, identificou-se um modelo conceitual de monitoramento e indicadores criados pela Organização para a Cooperação e Desenvolvimento Econômico (OCDE) que passou a ser utilizado internacionalmente desde sua criação em 1993. Nesse modelo os indicadores são agrupados em três categorias: pressão, estado e resposta. Os indicadores de pressão descrevem as pressões ou ameaças sobre o ambiente; os de estado descrevem o estado ou as características do ambiente (integridade ou qualidade e quantidade); e por fim, os indicadores de resposta descrevem as respostas às ações de manejo propostas.</p>
			<p>Segundo a OCDE, esse modelo considera as seguintes características:</p>
			<p>Relevância: deve ser representativo, de fácil compreensão e comparável;</p>
			<p>Consistência: deve ser bem apoiado em termos técnicos e científicos e de consenso internacional</p>
			<p>Mensurabilidade: deve ser facilmente mensurável e passível de monitoramento regular a um custo não excessivo.</p>
			<p>Tendo esse modelo como norteador, elaborou-se uma matriz de indicadores a partir de diretrizes traçadas ao longo do plano diretor, acrescentando-se ainda as formas de medição e os resultados esperados.</p>
			<p>Compete ao Poder Público estipular os limites ou valores de referência dos parâmetros aferidos pelos indicadores conforme as regulamentações vigentes na época da medição, sendo que esta (coleta dos dados) é de responsabilidade da gestão do Parque.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">8. PERIODICIDADE DA REVISÃO INTEGRATIVA</h2>
			<Comments :attr="{id:commentId(), context:'8. PERIODICIDADE DA REVISÃO INTEGRATIVA'}" v-if="estaConsulta.ativo == 1"></Comments>
			<p>Como mencionado no início, esse plano diretor deve ser revisado e atualizado após cinco anos de sua publicação, pois o ambiente sofre constante influência de fatores que são extremamente fluidos ao longo do tempo. Nesse sentido, prevê-se até mesmo a atualização e fortalecimento do sistema de indicadores inicialmente propostos.</p>
			<p>Com isso, o presente Plano Diretor deve mensurar e avaliar periodicamente dados e informações, de modo que esse processo transcorra de forma transparente, com a participação do Conselho Gestor do parque e, na medida do possível, da sociedade civil, contando com um amplo debate nas diferentes instâncias de controle institucional.</p>
			<p>O Monitoramento de como está evoluindo este processo e finalmente, a avaliação da situação do parque, consiste num ciclo que se moderniza constantemente e de modo a sempre gerar <em>feedback</em> de ações passadas para a definição de ações futuras.</p>
			<p>Para esse processo, há que se oferecer publicidade e amplo debate com a sociedade civil e entidades públicas e privadas, construindo um espaço de multiplicidade de ideias e contrapontos que deverão ser absorvidos no processo que resultará em um novo e atualizado marco legal de diretrizes do parque.</p>
			<p>Há ainda que se utilizar e embasar com dados da concessão tal como pesquisas com usuário, relatórios de prestação de contas e demais indicadores que consigam propiciar um debate mais qualificado e enriquecedor ao processo revisional.</p>
			<p>Ao fim dos ciclos quinquenais, o produto concebido se configurará de um modo mais intersetorial e democrático, estando mais condizente com a demanda da sociedade que é e sempre deverá ser a razão de se buscar ofertar cada vez mais e melhores serviços e experiências na cidade, destacadamente em espaços de Parques Urbanos.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">9. APONTAMENTOS FINAIS</h2>
			<Comments :attr="{id:commentId(), context:'9. APONTAMENTOS FINAIS'}" v-if="estaConsulta.ativo == 1"></Comments>
			<p>Com base no exposto, este plano diretor objetiva atuar no monitoramento com base na estrutura conceitual de intersetorialidade e impacto multidimensional segundo a abordagem de Pressão-Estado-Resposta.</p>
			<p>Nessa linha, cria-se um sistema de monitoramento para o Plano Diretor, uma vez que torna possível a visualização de uma estrutura orgânica de mensuração de ações e resultado. Além do mais, quantifica-se o grau de esforço e sucesso de uma ação de uma determinada temática, pois ao estar alinhada à diretriz e com mensuração por meio do indicador equaciona-se uma fórmula lógica de mensuração de resultados práticos.</p>
			<p>Uma vez que o tema “gestão de parques urbanos” ainda é pouco explorado pela comunidade técnica e acadêmica, busca-se também construir um paradigma de gestão além de inserir na pauta de avaliação e acompanhamento a necessidade de acompanhar continuamente o comportamento dos fenômenos relativos ao parque Lajeado.</p>
			<p>Com a aplicação do modelo de indicadores propostos, pode-se identificar que o sistema poderia ser dotado para futuros modelos de concessão de parques no país.</p>
			<p>Analisando a literatura sobre os sistemas de gerenciamento ambiental, conclui-se que há uma tendência em se correlacionar esse gerenciamento com a qualidade e segurança da abordagem da sustentabilidade, fomentando um terreno fértil ao desenvolvimento do monitoramento e controle como a que está sendo proposta.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">10. ANEXOS</h2>
			<Comments :attr="{id:commentId(), context:'10. ANEXOS'}" v-if="estaConsulta.ativo == 1"></Comments>
			<ul class="links">
				<li>
					<a :href="src('arquivos/parque-brigadeiro-faria-lima/ANEXO 1_Legislação aplicável aos parques urbanos.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>ANEXO 1_Legislação aplicável aos parques urbanos.pdf</div>
						<span>249 KB</span>
					</a>
				</li>
			</ul>
			<ul class="links">
				<li>
					<a :href="src('arquivos/parque-brigadeiro-faria-lima/ANEXO 2_Relatório do Herbário.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>ANEXO 2_Relatório do Herbário.pdf</div>
						<span>3,08 MB</span>
					</a>
				</li>
			</ul>
			<ul class="links">
				<li>
					<a :href="src('arquivos/parque-brigadeiro-faria-lima/ANEXO 3_Inventário da Fauna.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>ANEXO 3_Inventário da Fauna.pdf</div>
						<span>129 KB</span>
					</a>
				</li>
			</ul>
			<ul class="links">
				<li>
					<a :href="src('arquivos/parque-brigadeiro-faria-lima/ANEXO 4_Caderno das diretrizes do Conselho Gestor.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>ANEXO 4_Caderno das diretrizes do Conselho Gestor.pdf</div>
						<span>740 KB</span>
					</a>
				</li>
			</ul>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:commentId(), context:'Comentarios'}"></Comments>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import Pergunta from '@/components/Pergunta'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'ParqueBrigadeiroFariaLima',
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
		CommentsLoader,
		Pergunta
	},
	mixins: [ consultasCommons ],
	methods: {
		fileSrc (fileName) {
			let url = this.$store.getters.basePath + 'arquivos/parque-brigadeiro-faria-lima/' + fileName
			return url.toString()
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

</style>
