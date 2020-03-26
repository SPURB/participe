<template>
	<div class="GinasioIbirapuera" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/ginasio-ibirapuera_122w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Ibirapuera</div></template>
			<template slot="subtitulo"><div> 1ª Consulta Pública – Elementos prévios ao desenvolvimento do projeto</div></template>
		</PageTop>
		<indice :titulos="titulosLimpo"/>

		<apoio>
			<template slot="item2">
				<li>
					<input type="radio" name="tabs" id="item2">
					<label for="item2">Arquivos</label>
					<div class="conteudoTab">
						<ul class="links" style="margin: 0 0;">
							<li>
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_introducao.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Introdução</div>
									<span>212kb Kb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_diagnostico-socio-territorial.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Diagnóstico socio territorial</div>
									<span>5 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_diagnostico-ambiental.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Diagnóstico ambiental</div>
									<span>1,3 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_projeto-de-interesse-publico.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Programa de Interesse Público</div>
									<span>760 Kb</span>
								</a>
							</li>
							<li class="compacto__ultimo-item">
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ginasio-ibirapuera.zip')" target="_blank">
									<i class="icon-download icon"><span>pdf</span></i>
									<div>Consulta completa</div>
									<span>7 Mb</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
			</template>
		</apoio>
		<div class="horizontal">
			<section>
				<section>
					<h2 class="titulo" indent="1">Saiba como participar</h2>
					<p>O Complexo Desportivo Constâncio Vaz Guimarães, conhecido como “Complexo Ginásio do Ibirapuera”, é um equipamento público de grande porte gerido pelo Governo do Estado de São Paulo (GESP) que contém características urbanísticas excepcionais, tendo sido assim classificado como uma ZOE – Zona de Ocupação Especial pela Lei de Parcelamento, Uso e Ocupação do Solo – LPUOS (Lei nº 16.402/2016).</p>

					<p>As Zonas Especiais são porções do território com diferentes características ou com destinação específica que requerem normas próprias de uso e ocupação do solo, podendo estar situadas em qualquer macrozona do Município, e visam a promoção de políticas públicas setoriais, ou ainda, o estímulo ao desenvolvimento de áreas vocacionadas à diversas atividades econômicas, nos termos do Art. 39 do PDE – Plano Diretor Estratégico ( Lei 16.050/14).</p>

					<p>Conforme disposto no §1º do Art. 15 da Lei 16.402/2016, as áreas classificadas como ZOE – Zona de Ocupação Especial devem necessariamente ser objeto de PIU – Projetos de Intervenção Urbana, contemplando a definição de parâmetros específicos de parcelamento, uso e ocupação do solo adequados às suas especificidades.</p>

					<p>Este complexo desportivo, tão conhecido pela população paulistana e palco de memoráveis eventos, passa atualmente, segundo informa o Governo do Estado de São Paulo por um processo de deterioração face à obsolescência de suas instalações e a progressiva redução das atividades esportivas e programas de cunho cultural, esportivo e de lazer. Com a perspectiva de sua transformação em um moderno Centro Esportivo e Cultural para a cidade, o Projeto de Intervenção Urbana do Complexo Desportivo Constâncio Vaz Guimarães - PIU Ginásio Ibirapuera, a ser desenvolvido, buscará também uma maior integração do conjunto com seu contexto urbano, identificando novas oportunidades de requalificação urbana.</p>
				</section>
			</section>
				<section class="capitulos">
					<h2 class="titulos" indent="1">Arquivos</h2>
					<p>
						<ul class="links compacto">
							<li>
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_introducao.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Introdução</div>
									<span>212 Kb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_diagnostico-socio-territorial.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Diagnóstico socio territorial</div>
									<span>5 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_diagnostico-ambiental.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Diagnóstico ambiental</div>
									<span>1,3 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_projeto-de-interesse-publico.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Programa de Interesse Público</div>
									<span>760 Kb</span>
								</a>
							</li>
							<li class="compacto__ultimo-item">
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ginasio-ibirapuera.zip')" target="_blank">
									<i class="icon-download icon"><span>pdf</span></i>
									<div>Consulta completa</div>
									<span>7 Mb</span>
								</a>
							</li>
						</ul>
						<comments-option v-if="consultaAtiva" :options="[
								{ id: 1, context: 'Introdução' },
								{ id: 2, context: 'Diagnóstico socio territorial' },
								{ id: 3, context: 'Diagnóstico ambiental' },
								{ id: 4, context: 'Programa de Interesse público' }
							]"
							:alwaysOpen="false">
						</comments-option>
					</p>
				</section>
				<section class="coluna-content">
					<section>
						<h2 class="titulo" indent="1">Objeto</h2>
						<p>A presente Consulta Pública, promovida pela Prefeitura do Município de São Paulo por intermédio da Secretaria Municipal de Desenvolvimento Urbano (SMDU) e da São Paulo Urbanismo (SP-URBANISMO), a ser realizada no período entre 27 de março a 17 de abril de 2020, tem como objeto os <b>elementos prévios</b> ao desenvolvimento do Projeto de Intervenção Urbana do Complexo Desportivo Constâncio Vaz Guimarães - PIU Ginásio do Ibirapuera.</p>

						<p>De acordo com o Art. 2º do Decreto nº 56.901/2016, o processo de instrução do PIU se inicia pela publicação dos elementos prévios a seu desenvolvimento, constituídos de <b>diagnósticos socio-territorial e ambiental</b> da área estudada, bem como de seu <b>Programa de Interesse Público</b>, trazendo as questões a serem enfrentadas no contexto urbano em que está inserido. Esses documentos são então submetidos à consulta pública para receberem contribuições da sociedade, subsidiando a decisão da Secretaria Municipal de Desenvolvimento Urbano – SMDU quanto ao seu prosseguimento, considerando a compatibilidade de seus objetivos e diretrizes com a política de desenvolvimento urbano municipal, a legislação em vigor e os instrumentos urbanísticos que permitem ações específicas no território da cidade.</p>
					</section>
					<section>
						<h2 class="titulo" indent="1">Motivação</h2>
						<p>O Complexo Desportivo Constâncio Vaz Guimarães se insere no contexto de um dos principais desafios enfrentados pelas cidades contemporâneas: a renovação da sua infraestrutura existente de forma que possa acomodar as novas demandas da população frente à insuficiência econômico-financeira vivida pelo poder público. Nos últimos anos, o Complexo vem sofrendo crescente processo de subutilização e precarização. De acordo com informações do GESP<sup>1</sup> , o custo anual do Complexo para os cofres públicos é de R$15 milhões de reais, o que inibe a realização de investimentos necessários à sua manutenção e atualização.</p>

						<p>Diante desta problemática, o Governo do Estado de São Paulo promoveu em 2017 o Chamamento Público nº 00005/2017 no formato de um Procedimento de Manifestação de Interesse – PMI , onde 07 (sete) interessados da iniciativa privada apresentaram estudos técnicos de engenharia e arquitetura para as intervenções físicas, de viabilidade econômico-financeira de sua exploração, de modelagem jurídica e de modelagem operacional para a concessão onerosa do Complexo, que a partir dos critérios estabelecidos pelo edital, em consonância com os regramentos estabelecidos pelas legislações vigentes, propuseram novas formas de ocupação do site a partir de criteriosa avaliação de oportunidades e demandas de mercado da região e da cidade.</p>

						<p>Com base nos subsídios destes estudos, foi editada a Lei Estadual 17.099/2019, que autoriza a Fazenda do Estado à conceder o uso da área do Complexo Desportivo, visando sua revitalização – considerando sua reciclagem tecnológica e modernização – e exploração por meio de atividades culturais e esportivas por um período de até 35 anos, de modo a transformá-lo em um moderno Centro Esportivo Cultural, com a construção de uma arena multiuso, a exploração de outros serviços associados e a oferta obrigatória de atividades esportivas de fruição gratuita.</p>

						<p>Tal proposta coincide com um dos objetivos estratégicos do Plano Municipal de Esportes e Lazer (2018-2025), de modo que o PIU visa atentar-se também às diretrizes dispostas neste plano municipal no sentido, sobretudo, de promover o livre acesso às atividades físicas, esportivas e de lazer, estimulando o desenvolvimento social e econômico do município.</p>

						<p>Vale destacar que a Concessão Onerosa do Complexo, que é um pressuposto e não o objeto desta consulta, modalidade de Parceria entre entidade pública e iniciativa privada, garantirá ao Estado e à sociedade os benefícios da modernização do equipamento sem investimento estatal, com consequente incremento de novas atividades econômicas e arrecadação de impostos, desonerando os cofres públicos e  viabilizando a destinação de recursos para a promoção de políticas e ações intrínsecas ao governo, tais como educação, saúde, mobilidade, segurança e meio ambiente.</p>

						<p>Para que esta iniciativa do Governo do Estado de São Paulo se concretize, a Prefeitura de São Paulo deve desenvolver o presente Projeto de Intervenção Urbana  para definir os parâmetros urbanísticos aplicáveis ao terreno e os melhoramentos urbanísticos previstos para o entorno, possibilitando a conclusão das modelagens técnicas, jurídicas e econômicas necessárias ao processo de concessão do complexo. É importante salientar que o PIU trará a regulação dos aspectos urbanísticos que subsidiarão as ações previstas pelo GESP, e não tratará de aspectos inerentes às competências e ao planejamento do Governo do Estado de São Paulo para o equipamento, como o procedimento de concessão.</p>

						<p>Para a execução dos elementos técnicos do PIU Ginásio do Ibirapuera, o Governo do Estado de São Paulo, por meio da Secretaria de Governo, contratou a Fipe, que desenvolveu o conteúdo objeto desta primeira consulta pública conforme as orientações da SP Urbanismo e as deliberações da Secretaria Municipal de Desenvolvimento Urbano.</p>
					</section>

					<section>
						<h2 class="titulo" indent="1">Quadro normativo</h2>
						<h4>O Plano Diretor Estratégico Municipal – PDE, Lei 16.050/2014</h4>
						<p>O Plano Diretor Estratégico, de acordo com o texto expresso pelo Art. 182 da Constituição Federal de 1988, e, posteriormente, pelo Art. 40 do Estatuto da Cidade (Lei Federal nº 10.257/2001), é o instrumento básico para implementar a Política de Desenvolvimento Urbano e regular as ações dos agentes públicos e privados no território do município, direcionando o planejamento urbano municipal, seus objetivos, diretrizes e prioridades, </p>
						<blockquote>
							<p>A propriedade urbana cumpre sua função social quando atende às exigências fundamentais de ordenação da cidade expressas no plano diretor, assegurando o atendimento das necessidades dos cidadãos quanto à qualidade de vida, à justiça social e ao desenvolvimento das atividades econômicas, (…)”, ”, </p>
							<p class="fonte">(Art. 39, Lei 10.257/2001 – Estatuto das Cidades).</p>
						</blockquote>

						<p>O Plano Diretor Estratégico do Município de São Paulo – PDE (Lei nº 16.050/2014), por sua vez, objetiva ordenar o pleno desenvolvimento das funções sociais da cidade e o uso socialmente justo e ecologicamente equilibrado e diversificado de seu território, assegurando o bem-estar e qualidade de vida de seus habitantes. Ele determinará o modo de atuação de agentes públicos e privados no território municipal, articulando as distintas demandas presentes no território a partir das dimensões social, ambiental, imobiliária, econômica e cultural.</p>

						<p>Como estratégia de ordenamento territorial para garantir um desenvolvimento urbano sustentável e equilibrado, o Plano Diretor estrutura-se a partir de Macrozonas e Macroáreas, que orientam ao nível do território as ações públicas através de objetivos específicos, e da Rede de Estruturação e Transformação Urbana, composta pela Macroárea de Estruturação Metropolitana, a Rede Estrutural de Transporte Coletivo (rede de estruturação da transformação urbana), a Rede Hídrica e Ambiental e a Rede de Estruturação Local.</p>

						<h4>A Lei de Parcelamento, Uso e Ocupação do Solo – LPUOS, Lei nº 16.402/2016 e Decretos Regulamentadores</h4>
						<p>A Lei de Parcelamento, Uso e Ocupação do Solo - LPUOS (Lei nº 16.402/ 2016), veio regulamentar o PDE, detalhando as zonas de uso no território, seus parâmetros urbanísticos e condições de instalação, dentre outros instrumentos. Nos termos do §1º do art. 15 dessa lei, as áreas classificadas como ZOE – Zona de Ocupação Especial devem necessariamente ser objeto de PIU – Projetos de Intervenção Urbana, contemplando a definição de parâmetros específicos de parcelamento, uso e ocupação do solo adequados às suas especificidades.</p>

						<h4>Os Projetos de Intervenção Urbana – PIU, Decreto nº. 56.901/2016</h4>
						<p>O PIU é um instrumento urbanístico implementado pelo PDE, que tem por finalidade reunir e articular os estudos técnicos, objetivando promover o ordenamento e a reestruturação urbana em áreas subutilizadas e com potencial de transformação, tendo sua regulamentação estabelecida pelo Decreto n° 56.901/2016. </p>

						<p>De acordo com o Art. 4º decreto referido, o PIU deve ser composto por proposta de ordenamento urbanístico, modelagem econômica e modelo de gestão democrática de sua implantação, abrangendo instrumentos de avaliação dos impactos da transformação urbanística pretendida sobre o desenvolvimento econômico e social da área de estudo.  </p>

						<h4>O Plano Regional da Subprefeitura de Vila Mariana – PRS (Decreto nº 57.537/ 2016) </h4>

						<p>Os Planos Regionais são elementos de planejamento complementares ao PDE e à LPUOS, compostos por diretrizes e propostas para cada Subprefeitura do Município, contendo propostas para a Rede de Estruturação Local, a fim de articular políticas setoriais no território. </p>

						<p>A Rede de Estruturação Local é composta por Perímetros de Ação, que são porções do território com demandas e ações setoriais que necessitam de projetos coordenados de intervenção urbana.</p>

						<p>Nesse sentido, buscam instrumentalizar o poder público e sua relação com a sociedade nas tomadas de decisão e definições de prioridades de acordo com o Programa de Metas vigente, com os ciclos orçamentários e por meio de processos participativos contendo propostas essencialmente orientadas à intervenção urbana intersetorial, ao projeto, com o grande desafio de relacionar grandes planos municipais com questões locais específicas.</p>

						<h4>A Concessão do Complexo Desportivo Constâncio Vaz Guimarães – A Lei nº 17.099/2019</h4>
						<p>A Lei nº 17.099, de 27 de junho de 2019 veio, posteriormente, disciplinar a concessão Complexo Desportivo Constâncio Vaz Guimarães, a ser realizada no âmbito do Governo do Estado, reforçando a obrigatoriedade de elaboração do PIU correspondente para a definição dos parâmetros de uso e ocupação do solo do complexo, inserido em zona de uso ZOE.</p>
					</section>

					<section>
						<h2 class="titulo" indent="1">Modo de gestão democrática</h2>
						<p>O PIU Ginásio do Ibirapuera terá assegurada a gestão participativa em todas as etapas, desde seu desenvolvimento até sua implementação, conforme preconiza a Constituição Federal e o Estatuto da Cidade. Conforme a regulamentação do Decreto nº 56.901/2016, está prevista a realização de duas consultas públicas, sendo a primeira constituída pelos elementos prévios ao desenvolvimento do PIU e a segunda constituída pelas propostas de parâmetros e intervenções eventualmente contidas no PIU.</p>

						<p>A Constituição Federal determina expressamente a gestão participativa ou democrática em diversos campos. A gestão democrática é diretriz de política urbana prevista no Estatuto da Cidade, sendo este modelo de governança essencial na ordem jurídica urbanística.</p>

						<p>A gestão democrática das cidades positivada no Estatuto da Cidade promove a participação dos interessados em todos os processos decisórios de caráter relevante na política de desenvolvimento urbano do município, mas não tem o condão de substituir o dever de decidir e conduzir processos da Administração Pública. Falamos, ainda, em “participação de interessados” ao invés de participação popular: a uma porque usar a expressão “participação popular” esconde o real espectro de agentes que comparecem à arena pública no processo de gestão democrática das cidades (população, grupos de pressão, empresários, entidades de classe etc.); a duas, porque “participação de interessados” revela um outro aspecto deste procedimento, negligenciado pela maioria da doutrina: é preciso dar voz aos que efetivamente não participam. É usual que entidades organizadas assumam o controle de processos de gestão democrática, elidindo a participação de particulares que se apresentem fora destes grupos – é necessário que a Administração Pública pondere esta realidade, e que tome suas decisões, no papel de mediadora dos conflitos pelo espaço urbano, de forma isonômica e razoável.</p>

						<p>O texto da Lei 10.257/2001, no já estudado art. 2º, relaciona a gestão democrática à participação da população e de associações representativas dos vários segmentos da comunidade na formulação, execução e acompanhamento de planos, programas e projetos de desenvolvimento urbano. Isso delimita perfeitamente o instituto em termos de direito urbanístico, especialmente porque o Capítulo IV trata de veicular as maneiras pelas quais esta participação dos interessados se dará, denominando-os “instrumentos”. A lei fala de órgãos colegiados de política urbana, nos níveis nacional, estadual e municipal; debates, audiências e consultas públicas; conferências sobre assuntos de interesse urbano, nos níveis nacional, estadual e municipal e iniciativa popular de projeto de lei e de planos, programas e projetos de desenvolvimento urbano.</p>

						<h3>Instrumentos de Gestão Democrática</h3>
						<h4>Audiências e consultas públicas</h4>
						<p>Audiências e consultas públicas são instrumentos de gestão democrática previstos na Lei de Processo Administrativo Federal (Lei 9.784/1999), nos arts. 32 e 31, respectivamente. A audiência pública se materializa por intermédio de debates orais em sessões previamente designadas para tanto, com ou sem a realização de apresentações pelo Poder Público ou interessados. Seu traço marcante é a oralidade, embora deva ser permitido o protocolo de requerimentos por interessados (tais protocolos devem ser noticiados pela mesa condutora dos trabalhos). Nem todas as questões levantadas em audiência pública devem ser respondidas imediatamente – é possível por exemplo, posteriormente publicarem-se as respostas em diário oficial –, mas todas as matérias aventadas devem ser consideradas no processo decisório da Administração Pública.</p>

						<p>A consulta pública, por seu turno, tem caráter mais formal, e exige protocolo ou anotações de manifestações públicas de interessados por meio previamente estabelecidos – protocolos, formulários disponibilizados na rede mundial de computadores etc. A consulta pública não ocorre num evento, mas num processo aberto de participação de interessados sobre determinado tema em debate.</p>

						<h4>Conselhos de desenvolvimento urbano</h4>
						<p>Os conselhos de desenvolvimento urbano podem ter diversas conformações e funções, a depender da legislação municipal e da amplitude do tema que aborda – se todo o planejamento municipal (normalmente este conselho é denominado “Conselho Municipal de Política Urbana”, ou “Conselho Municipal de Desenvolvimento Urbano”), se somente transportes, patrimônio histórico etc. O que é certo é que integram a estrutura do Poder Público, contam com representantes da sociedade civil e de instituições da área do urbanismo afetas às atividades do conselho, em composição que pode ser ou não paritária com os representantes da Administração Pública, sendo certo que geralmente os representantes da população são escolhidos mediante sufrágio secreto entre a população interessada.</p>

						<p>Os conselhos, em regra, terão poderes consultivos – como já afirmado, pertencem ao processo de busca da consensualidade promovido pela Administração Pública no ambiente da gestão democrática. Isso significa, por outro lado, que suas opiniões e indicações deverão sempre ser consideradas pela Administração Pública, que fundamentará suas decisões considerando estes elementos.</p>

						<p>O inc. I do art. 43, ainda, determina que haverá órgãos colegiados de política urbana, nos níveis nacional, estadual e municipal. Esta estrutura hoje é representada pelo Conselho das Cidades do Ministério das Cidades, criado pelo Decreto n. 5.790/2006, pelos conselhos estaduais das cidades e pelos conselhos municipais das cidades. Tais conselhos têm por finalidade estudar e propor as diretrizes para a formulação e implementação da Política de Desenvolvimento Urbano, bem como acompanhar e avaliar a sua execução, cada qual em seu nível de atuação. Suas deliberações são alimentadas por informações e demandas advindas, dentre outras fontes, das conferências sobre assuntos de interesse urbano, também realizadas nos níveis nacional, estadual e municipal.</p>

						<h4>Iniciativa popular</h4>
							<p>O art. 29 da Constituição Federal estabelece que o município, em sua lei orgânica, deverá contemplar a possibilidade de iniciativa popular de projetos de lei de interesse específico do Município, da cidade ou de bairros, através de manifestação de, pelo menos, cinco por cento do eleitorado (inc. XIII). Este instrumento de soberania popular, nos termos do art. 14 da Constituição Federal, pode ter importância na conformação do sistema de planejamento urbanístico do município em razão do grande número de disposições do Estatuto da Cidade que preveem a edição de lei para sua efetiva eficácia (como exemplo, art. 5º; art. 25, § 1º; art. 30 etc.). Não se deve esquecer, todavia, que mesmo as leis de iniciativa popular não prescindem de atender ao processo de gestão democrática na elaboração das leis urbanísticas, e devem estar adequadas ao plano diretor municipal, em razão do Princípio da Reserva de Plano. Ainda no tocante à democracia direta, é importante destacar que o inciso V do art. 43, vetado pelo Executivo, trazia a previsão de inserção dos instrumentos do plebiscito e do referendo como de gestão democrática das cidades. Tal veto, evidentemente, não impede que tais sejam utilizados no processo de elaboração de legislação urbanística pelos municípios.</p>

							<h4>Controle social</h4>
							<p>Uma moderna modalidade de controle da Administração Pública é o denominado controle social. Segundo MEDAUAR<sup>1</sup>, “parece adequado inserir, no âmbito do controle social, atuações de cidadão, isolado ou mediante associações, referentes a decisões já tomadas e a decisões em vias de adoção, com o intuito de verificar ou provocar a verificação da sua legalidade, moralidade, impessoalidade, economicidade, conveniência, oportunidade etc. Os mecanismos de controle social permitem, por si, que a Administração corrija ou evite inadequações nos seus atos ou omissões, e também suscitam atuações dos órgãos de controle”.[1]</p>

							<p>No que toca à política de desenvolvimento urbano, o controle social é realizado basicamente por dois métodos: (a) o oferecimento de representações a órgãos de controle interno e externo da Administração Pública e no ajuizamento de ações pertinentes ao tema e (b) pela participação dos cidadãos e entidades no processo de elaboração dos estudos e projetos que redundarão nas leis urbanísticas e dos planos e projetos urbanos, bem como no acompanhamento da implantação de tais planos e projetos.</p>

							<p>Desta forma, a par da participação construtiva de consensos nos processos decisórios da Administração Pública, também integra a gestão democrática a atuação dos interessados provocando o controle interno e externo dos atos do Poder Público, de modo a tentar obrigar a correção de decisões já adotadas ou em fase de construção. Esta realidade é tanto mais presente quanto menor o diálogo estabelecido entre a Administração Pública e a sociedade – a consensualidade tende a diminuir a litigiosidade e, portanto, o acionamento dos órgãos de controle.</p>

							<ol class="notas">
								<li>MEDAUAR, Odete. Controle da administração pública. 3. ed., rev., atual. e ampl. São Paulo: Ed. RT, 2014. p. 186-187.</li>
							</ol>
						</section>
					</section>
				</div>

				<section ref="allComments">
					<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
					<CommentsLoader :attr="estaConsulta"></CommentsLoader>
					<Comments v-if="commentsLoaded && consultaAtiva" :attr="{id:commentId(), context:'Comentarios'}"></Comments>
				</section>
			</div>
</template>

<script>
import Apoio from '@/components/Apoio'
import Indice from '@/components/Indice'
import PageTop from '@/components/PageTop'
import { consultasCommons } from '@/mixins/consultasCommons'
import CommentsOption from '@/components/CommentsOption'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'

export default {
	name: 'GinasioIbirapuera',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {}
		}
	},
	components: {
		Apoio,
		Indice,
		Comments,
		CommentsOption,
		CommentsLoader,
		PageTop
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';
.horizontal {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr 100%
}

@supports(display: grid) {
	.horizontal {
		max-width: 1200px;
		margin: auto;
	}
	.horizontal .titulo {
		margin-top: 0
	}
	@media (max-width: 800px) {
		.horizontal {
			display: block;
			grid-template-columns: unset;
			max-width: unset;
		}
	}
}

.horizontal h2 {
	margin-top:0
}

.coluna-content {
	margin-top: 3rem;
	grid-area: 2 / 1 / 3 / 3;
}

.links.compacto li {
	margin: 1px
}

.links.compacto .compacto__ultimo-item {
	margin-top: 2rem
}
</style>
