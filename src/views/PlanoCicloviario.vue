<template>
	<div class="PlanoCicloviario" ref="conteudoConsulta">
		<!-- <link rel="stylesheet" href="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/css/ol.css" type="text/css"> -->
		<!-- <link rel="stylesheet" href="fileSrc('ol.css')" type="text/css"> -->
		<PageTop background_image_src="arquivos/capas/plano-cicloviario_480w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>Audiências Públicas para Plano Cicloviário</div></template>
			<template slot="subtitulo">
				<div>{{ estaConsulta.textoIntro }}</div>
			</template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio>
		<template slot="item1">
			<li>
				<input type="radio" name="tabs" id="item1">
				<label for="item1">Anexos</label>
				<div class="conteudoTab">
					<ul style="list-style-type: square; color: #DDD;">
						<li v-for="anexo in anexos">
							<a :href="fileSrc(anexo)">{{ anexo }}</a>
						</li>
					</ul>
				</div>
			</li>
		</template>
		</Apoio>

		<section>
			<h2 class="titulo" indent="1">Introdução</h2>
			<div>
				<p>
					A Prefeitura do Município de São Paulo convida todos os munícipes a contribuírem para a melhoria da rede cicloviária da cidade de São Paulo. As audiências terão por objetivo a apresentação da minuta do Plano Cicloviário elaborada pela PMSP/SMT/CET, bem como da próxima etapa de ampliação da rede. O objetivo é, a partir desse plano, colher as sugestões da sociedade para então elaborar a versão atualizada.
				</p>
				<p>
					Dentro do Plano de Metas proposto para o biênio 2019/2020 pela Prefeitura, foi estabelecida como primeira etapa a meta de implantar 173,35 km de nova infraestrutura cicloviária, através das conexões, além de requalificar 310,6 km de infraestrutura cicloviária existente até o final de 2020.
				</p>
				<p>
					A seleção dos locais de implantação foi realizada pelas áreas de planejamento da CET, adotando como principais diretrizes, desde o início do processo, a segurança, a integração modal e a implantação com o mínimo de intervenções. Na sequência, a definição dos locais seguiu o critério da conectividade entre os trechos já implantados, a fim de consolidar uma rede. A definição dos locais foi feita de forma a abranger todas as regiões da cidade. Foram ouvidos os representantes da Câmara Temática de Bicicleta do Conselho Municipal de Transporte e Trânsito em processo de participação social organizado por meio de nove oficinas, realizadas entre novembro de 2018 e maio de 2019.
				</p>
				<p>
					O material produzido para essas oficinas bem como o registro de seus resultados pode ser acessado na página da CET, na seção “Análise Técnica da Infraestrutura Cicloviária por Subprefeitura”.
				</p>
			</div>
			<Comments :attr="{id:commentId(true), context:'Introdução'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">REGIMENTO INTERNO DA AUDIÊNCIA PÚBLICA</h2>
			<section>
				<h3 class="titulo" indent="2">CAPÍTULO I</h3>
				<h4 class="subtitulo">DISPOSIÇÕES PRELIMINARES</h4>
				<div>
					<p>
						<b>Art. 1º</b> A Audiência Pública realizar-se-á com a finalidade de apresentação, divulgação e discussão do <b>PLANO CICLOVIÁRIO DE SÃO PAULO</b>. A audiência pública, no âmbito da Secretaria de Mobilidade e Transpores - SMT, é atividade institucional de informação e oitiva da população, das entidades organizadas da sociedade e de empresas especializadas, com a finalidade de divulgar e realizar a coleta de informações, sugestões e outros elementos que viabilizem a implantação de infraestrutura cicloviária, com a finalidade de aprimorar a infraestrutura cicloviária com vistas à segurança, à funcionalidade e à conectividade da rede cicloviária.
					</p>
					<p>
						Objetiva ainda a melhoria da infraestrutura de apoio ao ciclistas, com Bicicletario e paraciclos.
					</p>
					<p>
						Por fim criar uma hierarquia de rede (estrutural, regional e local), levando-se em conta o volume de tráfego de cada via, a implantação de estruturas de acalmamento de tráfego.
					</p>
					<p>
						De acordo com a Lei Municipal 16.885 - SICLO, sancionada em 2018, a implantação dos trechos Cicloviários deve ser precedida de audiência pública. Previamente às audiências, “os planos e projetos iniciais e os estudos de demanda, viabilidade e impacto deverão ser publicados em sítio eletrônico da Prefeitura em local e formato de fácil acesso pelos cidadãos”.
					</p>
					<p>
						<b>Art. 2º</b> A Audiência Pública terá o objetivo específico de apresentar o conteúdo do Plano Cicloviário, receber sugestões, recomendações, críticas ou propostas sobre o objeto, que faz parte integrante deste Regimento, com vistas a democratizar, conferir transparência e assegurar a participação popular na elaboração do plano.
					</p>
					<p>
						<b>Parágrafo único.</b> A sessão terá acesso livre a qualquer pessoa, bem como aos meios de comunicação, respeitados os limites impostos pelas instalações físicas do local.
					</p>
					<p>
						<b>Art. 3º.</b> A audiência terá primeira chamada as 19:00 horas, e iniciará em segunda chamada impreterivelmente as 19:30 horas, com qualquer número de presentes.
					</p>
					<p>
						<b>Parágrafo único.</b> O encerramento da sessão acontecerá as 21:00 horas.
					</p>
					<p>
						As Audiências Públicas serão realizadas respeitando o cronograma a seguir:
					</p>
					<p v-for="audiencia in audiencias" class="card">
						<b><u>{{audiencia.dataRegiao}}:</u></b><br>
						Subprefeituras: {{audiencia.bairros}}<br>
						Horário: {{audiencia.horario}}<br>
						Local: {{audiencia.local}} <br>
						Endereço: {{audiencia.endereco}}
					</p>
					<p>
						<b>Art. 4º.</b> O público presente deverá assinar lista de presença, que conterá:
						<ol type="I">
							<li>Nome legível, endereço, endereço eletrônico (email) e telefone;</li>
							<li>Número do documento de identificação;</li>
							<li>A entidade pública ou privada a que pertence; e,</li>
							<li>Assinatura.</li>
						</ol>
					</p>
					<p>
						<b>Parágrafo único.</b> A lista de presença ficará disponível durante toda a sessão em local acessível.
					</p>
				</div>
				<Comments :attr="{id:commentId(), context:'CAPÍTULO I'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>
			<section>
				<h3 class="titulo" indent="2">CAPÍTULO II</h3>
				<h4 class="subtitulo">DA CONDUÇÃO DA AUDIÊNCIA</h4>
				<div>
					<p>
						<b>Art. 5º</b> A Audiência será conduzida pelo Presidente, nos termos definidos neste Regimento, com o apoio da Companhia de Engenharia de Tráfego - CET, responsável pela elaboração deste Plano Cicloviário, respeitando a Lei Municipal 16.885 - SICLO, sancionada em 2018.
					</p>
					<p>
						<b>Parágrafo único.</b> O Presidente da Audiência Pública será o Secretário Municipal de Mobilidade e Transportes ou seu representante.
					</p>
					<p>
						<b>Art. 6º</b> São prerrogativas do Presidente da Sessão:
						<ol type="I">
							<li>designar um ou mais secretários para assisti-lo;</li>
							<li>designar a apresentação de objetivos e regras de funcionamento da audiência, ordenando o curso das manifestações;</li>
							<li>decidir sobre a pertinência das intervenções orais;</li>
							<li>decidir sobre a pertinência das questões formuladas;</li>
							<li>dispor sobre a interrupção, suspensão, prorrogação ou postergação da sessão, bem como sua reabertura ou continuação, quando o reputar conveniente, de ofício ou a pedido de algum participante;</li>
							<li>Alongar o tempo das elocuções, quando considerar necessário e útil.</li>
						</ol>
					</p>
					<p>
						<b>Art. 7º</b> O Presidente da sessão indicará um Moderador para lhe auxiliar na condução e organização da audiência, sendo atribuições do Moderador, com auxilio dos Secretários designados:
						<ol type="I">
							<li>Inscrever os participantes, de acordo com a ordem das solicitações;</li>
							<li>Controlar o tempo das intervenções orais;</li>
							<li>Registrar o conteúdo das intervenções;</li>
							<li>Sistematizar as informações;</li>
							<li>Elaborar a ata da Sessão;</li>
							<li>A guarda da documentação produzida na audiência.</li>
						</ol>
					</p>
				</div>
				<Comments :attr="{id:commentId(), context:'CAPÍTULO II'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>
			<section>
				<h3 class="titulo" indent="2">CAPITULO III</h3>
				<h4 class="subtitulo">DOS PARTICIPANTES</h4>
				<div>
					<p>
						<b>Art. 8º</b> Será considerado participante da Audiência Pública qualquer cidadão ou cidadã residente na cidade de São Paulo, sem distinção de qualquer natureza, interessado em contribuir com o processo de discussão mencionado no Edital de Convocação.
					</p>
					<p>
						<b>Art. 9º</b> São direitos dos participantes manifestar livremente suas opiniões sobre as questões tratadas no âmbito da Audiência Pública, respeitando as disposições previstas neste Regimento;
					</p>
					<p>
						<b>Art. 10º</b> São deveres dos participantes:
						<ol type="I">
							<li>Respeitar o Regimento Interno da audiência pública;</li>
							<li>Respeitar o tempo estabelecido para intervenção e a ordem de inscrição;</li>
							<li>Tratar com respeito e civilidade os participantes da audiência e seus organizadores.</li>
						</ol>
					</p>
					<p>
						<b>Art. 11º</b> É condição para a participação, a prévia inscrição.
					</p>
					<p>
						<b>Parágrafo único.</b> A ordem de inscrição determinará a sequência dos participantes.
					</p>
					<p>
						<b>Art. 12º</b> A inscrição deverá ser realizada após a abertura da audiência, por meio de ficha de inscrição e encerrar-se-á após a exposição de cada tema.
					</p>
					<p>
						<b>Parágrafo único -</b> A inscrição das perguntas ou sugestões deverão ser realizada por escrito através de ficha de inscrição. As fichas serão disponibilizadas pelos secretários responsáveis, devendo estas ser entregues aos mesmos.
					</p>
				</div>
				<Comments :attr="{id:commentId(), context:'CAPÍTULO III'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>
			<section>
				<h3 class="titulo" indent="2">CAPÍTULO IV</h3>
				<h4 class="subtitulo">DA REALIZAÇÃO DA AUDIÊNCIA</h4>
				<div>
					<p>
						<b>Art. 13º</b> A Audiência Pública terá a seguinte ordem:
						<ol type="I">
							<li>Apresentação dos objetivos e regras de funcionamento da audiência;</li>
							<li>Exposição do conteúdo do Plano Cicloviário de São Paulo, pelos responsáveis por sua elaboração;</li>
						</ol>
					</p>
					<p>
						<b>Art. 14º</b> Os participantes disporão de 02 (dois) minutos, após a exposição determinada no inciso II, do Art. 13º, observada a ordem de inscrição para manifestação, sendo o questionamento lido pelo Presidente da sessão ou pessoa por ele designada.
					</p>
					<p>
						<b>Parágrafo único –</b> As respostas serão encaminhadas “a posteriori” por escrito.
					</p>
					<p>
						<b>Art. 15º</b> Serão permitidas filmagens, gravações ou outras formas de registro.
					</p>
					<p>
						Concluídas as exposições e as intervenções, o Presidente lavrará a Ata de Certificação da Realização do evento, relatando resumidamente o ocorrido durante a sessão, que será assinada pelo Presidente da sessão e componentes da mesa, e dará por encerrada a Audiência Pública,
					</p>
					<p>
						<b>Parágrafo único.</b> Após o acontecimento da audiência será elaborada ata técnica contendo a íntegra dos debates, com base nas gravações do evento, e será subscrita pelo Presidente da Sessão, devendo ser anexada à lista de presença e, posteriormente, publicada na página eletrônica do Município.
					</p>
				</div>
				<Comments :attr="{id:commentId(), context:'CAPÍTULO IV'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>
			<section>
				<h3 class="titulo" indent="2">CAPÍTULO V</h3>
				<h4 class="subtitulo">DAS DISPOSIÇÕES FINAIS</h4>
				<div>
					<p>
						<b>Art. 19º.</b> As opiniões, sugestões, críticas ou informações colhidas durante a Audiência Pública terão caráter consultivo, destinando-se à motivação do Executivo Municipal quando da tomada das decisões em face dos debates realizados.
					</p>
					<br>
					<center><h4>Edson Caran<br>Secretário Municipal de Mobilidade e Transportes</h4></center>
				</div>
				<br>
				<p>
					<a :href="fileSrc('Mapa_Audiencias_Publicas2.jpg')" target="_blank"><img :src="fileSrc('Mapa_Audiencias_Publicas2.jpg')" alt="Mapa Audiêncas Públicas" style="height: auto; width: 100%;"></a>
				</p>
				<h4>Link para a página da CET</h4>
				<p>
					<a href="http://www.cetsp.com.br/consultas/bicicleta.aspx" target="_blank">http://www.cetsp.com.br/consultas/bicicleta.aspx</a>
				</p>
				<Comments :attr="{id:commentId(), context:'CAPÍTULO V'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>
		</section>
		<hr />
		<section>
			<h2 class="titulo" indent="1">Apresentação que será realizada nas audiências públicas</h2>
			<br />
			<p>
				<embed :src="fileSrc('Apresentacao-audiencias-publicas_PlanoCicloviario-20mai2019.pdf')" width="700" height="500" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">
			</p>

			<!-- <iframe id="ifrSlides" src="https://docs.google.com/presentation/d/19tfb2aSxfYc8fZdxt1QKjiQlunV4Mv_qcqayTW0RCVs/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="405" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe> -->
			<!-- <p><small>Caso tenha dificuldades para visualizar a apresentação acima, <a :href="fileSrc('Apresentacao_audiencias_publicas_Plano_Cicloviario-29abr2019.pptx')">clique aqui para fazer o download</a>.</small></p> -->
			<p><small>Caso tenha dificuldades para visualizar a apresentação acima, <a :href="fileSrc('Apresentacao-audiencias-publicas_PlanoCicloviario-20mai2019.pdf')">clique aqui para fazer o download</a>.</small></p>
			<Comments :attr="{id:commentId(), context:'Apresentação'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<hr />
		<section>
			<h3 class="titulo" indent="1">Mapa</h3>
			<!-- MAPA -->
			<MapaOSM :mapaAttrs="mapaAttrs" :styleFromKML="false"></MapaOSM>
			<!-- END MAPA -->
			<Comments :attr="{id:commentId(), context:'Mapa'}" v-if="estaConsulta.ativo == 1"></Comments>
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
import { consultasCommons } from '@/mixins/consultasCommons'
import Apoio from '@/components/Apoio'
// OpenLayers
const MapaOSM = () => import('@/components/MapaOSM')

export default {
	name: 'PlanoCicloviario',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			audienciasOld: [
				{
					dataRegiao: '23/05 - Norte 1',
					bairros: 'PERUS , PIRITUBA , FREGUESIA DO Ó/BRASILANDIA, CASAVERDE / CACHOEIRINHA',
					horario: '19- 21h',
					local: 'Casa de Cultura Salvador Ligabue',
					endereco: 'Largo da Matriz de Nossa Senhora do Ó nº 215-Freguesia do Ó'
				},
				{
					dataRegiao: '24/05 - Norte 2',
					bairros: 'JAÇANÃ/TREMEMBÉ, SANTANA/TUCURUVI - VILA MARIA / VILA GUILHERME',
					horario: '19- 21h',
					local: 'Auditório da Subprefeitura Santana/Tucuruvi',
					endereco: 'Av. Tucuruvi, nº 808 – Tucuruvi'
				},
				{
					dataRegiao: '30/05 – Oeste',
					bairros: 'LAPA , BUTANTÃ , PINHEIROS ',
					horario: '19 -21h',
					local: 'AUDITÓRIO DA SUBPREFEITURA DE PINHEIROS',
					endereco: 'Av. das Nações Unidas,nº 7123 - Alto de Pinheiros'
				},
				{
					dataRegiao: '31/05 – Leste 1',
					bairros: 'MOOCA ,  PENHA,  VILA PRUDENTE',
					horario: '19- 21h ',
					local: 'AUDITÓRIO DA SUBPREFEITURA DA MOOCA',
					endereco: 'Rua Taquari, nº 549 – Mooca '
				},
				{
					dataRegiao: '06/06 – Leste 2',
					bairros: 'SAPOPEMBA  , ARICANDUVA',
					horario: '19 -21h ',
					local: 'SUBPREFEITURA ARICANDUVA / FORMOSA/CARRÃO',
					endereco: 'RUA Atucuri nº 699- Chácara Santo Antônio'
				},
				{
					dataRegiao: '07/06 – Leste 3',
					bairros: 'SÃO MIGUEL, ITAIM PAULISTA , ITAQUERA , GUAIANAZES, SÃO MATEUS, CIDADE TIRADENTES ,  ERMELINO MATARAZZO',
					horario: '19 – 21h ',
					local: 'SUBPREFEITURA DE CIDADE TIRADENTES ',
					endereco: 'Rua Juá Mirim s/nº  – Chácara Santa Etelvina'
				},
				{
					dataRegiao: '12/06 – Centro',
					bairros: 'SÉ',
					horario: '19h – 21h ',
					local: 'PRAÇA DE ATENDIMENTO DA SUBPREFEITURA DA SÉ ',
					endereco: 'Rua Álvares Penteado,nº 53 – Centro'
				},
				{
					dataRegiao: '13/06 – Sul 1',
					bairros: 'IPIRANGA ,  JABAQUARA , VILA MARIANA',
					horario: '19 - 21h ',
					local: 'AUDITÓRIO DA SUBPREFEITURA DO IPIRANGA ',
					endereco: 'Rua Lino Coutinho,nº 444 - 1º Andar - Ipiranga'
				},
				{
					dataRegiao: '14/06 - Sul 2',
					bairros: 'SANTO AMARO , CIDADE ADEMAR , CAMPO LIMPO   ',
					horario: '19 – 21h ',
					local: 'SUBPREFEITURA DE SANTO AMARO',
					endereco: 'RUA Floriano Peixoto ,nº 54 - 1º Andar – Santo amaro'
				},
				{
					dataRegiao: '19/06 – Sul 3',
					bairros: 'PARELHEIROS,  CAPELA DO SOCORRO ,  M’BOI MIRIM ',
					horario: '19 – 21h ',
					local: 'SUBPREFEITURA DE M’BOI MIRIM',
					endereco: 'Av. Guarapiranga , nº1695 – Parque Alves Lima'
				}
			],
			audiencias: [
				{
					dataRegiao: '23/05 – Região Norte 1',
					bairros: 'Subprefeituras: Perus, Pirituba, Freguesia do Ó/Brasilândia e Casa Verde/Cachoeirinha',
					horario: '19h – 21h',
					local: 'Subprefeitura da Freguesia do Ó',
					endereco: 'R. João Marcelino Branco, 95, Freguesia do Ó'
				},
				{
					dataRegiao: '24/05 - Região Norte 2',
					bairros: 'Jaçanã/Tremembé, Santana/Tucuruvi, V Maria/V. Guilherme',
					horario: '19h – 21h',
					local: 'Subprefeitura: Santana/Tucuruvi',
					endereco: 'Av. Tucuruvi, 808 – Tucuruvi'
				},
				{
					dataRegiao: '30/05 – Região Oeste',
					bairros: 'Lapa/ Butantã e Pinheiros ',
					horario: '19h - 21h',
					local: 'Auditório da Subprefeitura Pinheiros',
					endereco: 'Av. das Nações Unidas, 7123 - Alto de Pinheiros'
				},
				{
					dataRegiao: '31/05 – Região Leste 1',
					bairros: 'Mooca, Penha e Vila Prudente',
					horario: '19h - 21h',
					local: 'Universidade Cidade de São Paulo – UNICID',
					endereco: 'Rua Cesário Galero, 475 – Tatuapé '
				},
				{
					dataRegiao: '06/06 – Região Leste 2',
					bairros: 'Aricanduva e Sapopemba',
					horario: '19h - 21h',
					local: 'Subprefeitura Aricanduva/Formosa/Carrão',
					endereco: 'R. Atucuri, 699, Chácara Santo Antônio'
				},
				{
					dataRegiao: '07/06 – Região Leste 3',
					bairros: 'S. Miguel, Itaim Paulista, Itaquera, Guaianazes, São. Mateus, Cidade Tiradentes e Ermelino Matarazzo',
					horario: '19h - 21h',
					local: 'Subprefeitura Cidade Tiradentes',
					endereco: 'Rua Juá Mirim S/N – Chácara Santa Etelvina'
				},
				{
					dataRegiao: '12/06 – Região Centro',
					bairros: 'Sé',
					horario: '19h -21h',
					local: 'Praça de Atendimento da Subprefeitura Sé',
					endereco: 'Rua Álvares Penteado, 53 – Centro'
				},
				{
					dataRegiao: '13/06 – Região Sul 1',
					bairros: 'Ipiranga, Jabaquara e Vila Mariana',
					horario: '19h - 21h',
					local: 'Auditório da Subprefeitura Ipiranga',
					endereco: 'Rua Lino Coutinho, 444 - 1º Andar – Ipiranga'
				},
				{
					dataRegiao: '14/06 - Região Sul 2',
					bairros: 'Santo Amaro, Cidade Ademar e Campo Limpo ',
					horario: '19h – 21h',
					local: 'Subprefeitura Santo Amaro',
					endereco: 'R. Floriano Peixoto, 54 – 1º andar, Santo Amaro'
				},
				{
					dataRegiao: '27/06 – Região Sul 3',
					bairros: 'Parelheiro, Capela do Socorro e M’Boi Mirim',
					horario: '19h – 21h',
					local: 'Subprefeitura M’boi Mirim',
					endereco: 'Av. Guarapiranga, 1695, Parque Alves Lima '
				}
			],
			anexos: [
				// 'Apresentacao_audiencias_publicas_Plano_Cicloviario-29abr2019.pptx'
				'Apresentacao-audiencias-publicas_PlanoCicloviario-20mai2019.pdf'
			],
			mapaAttrs: {
				center: [ -5191000, -2698002 ],
				zoom: 11,
				layers: [
					{
						title: 'Rede Plano Cicloviário',
						path: this.$store.getters.basePath + 'arquivos/plano-cicloviario/01-RedeDeReferencia_polyline.kml',
						stroke_color: 'rgba(0, 0, 0, 1)',
						// fill_color: 'rgba(255, 255, 255, .5)',
						stroke_width: 2
					},
					{
						title: 'Conexões 2019-2020',
						path: this.$store.getters.basePath + 'arquivos/plano-cicloviario/02-Conexoes_SMT_2019-2020_polyline.kml',
						stroke_color: 'rgba(0, 0, 255, 1)',
						stroke_width: 4
					},
					{
						title: 'Ciclovias Implantadas',
						path: this.$store.getters.basePath + 'arquivos/plano-cicloviario/04_CicloviasImplantadas_polyline.kml',
						stroke_color: 'rgba(255, 0, 0, 1)',
						stroke_width: 4
					},
					{
						title: 'Ciclorrotas Implantadas',
						path: this.$store.getters.basePath + 'arquivos/plano-cicloviario/05-CiclorrotasImplantadas.kml',
						stroke_color: 'rgba(255, 0, 0, 1)',
						stroke_width: 2
						// stroke_dash: [10,8]
					}
				]
			}
		}
	},
	components: {
		Apoio,
		MapaOSM,
		PageTop,
		Indice,
		Comments,
		CommentsLoader
	},
	mixins: [ consultasCommons ],
	methods: {
		fileSrc (fileName) {
			let url = this.$store.getters.basePath + 'arquivos/plano-cicloviario/' + fileName
			return url.toString()
		},
		commentId (isFirst) {
			if (isFirst) {
				this.$store.commentsCount = 0
			}
			this.$store.commentsCount++
			return this.$store.commentsCount
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
div.Apoio button::before{
	content: "Ver downloads";
}
.map {
	height: 400px;
	width: 100%;
}
.card {
    background-color: #EEE;
    font-family: sans-serif;
    padding: 1em 2em;
}
h4.subtitulo {
	margin-top: 2em;
    margin-bottom: 2em;
    font-size: 140%;
    font-weight: bold;
}
</style>
