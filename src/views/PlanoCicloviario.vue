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
				<p>A Prefeitura Municipal de São Paulo convida todos os munícipes a contribuírem para a melhoria da rede cicloviária da cidade de São Paulo. As audiências terão por objetivo a apresentação da proposta inicial do Plano Cicloviário elaborada pela PMSP/SMT/CET.</p>
				<p>O objetivo é, a partir desse plano colher as sugestões da sociedade para então elaborar a versão atualizada.</p>
				<p>Dentro do Plano de Metas proposto para o biênio 2019/2020 pela Prefeitura, foi estabelecida como primeira etapa, a meta de implantar 173,3 km de infraestrutura cicloviária, através das conexões e requalificar 310,6 km de infraestrutura cicloviária até o final de 2020. </p>
				<p>A seleção dos locais de implantação foi realizada pelas áreas de planejamento da CET, adotando como principais diretrizes, desde o início do processo, a segurança, a integração modal e a implantação com o mínimo de intervenções. Na sequência, a definição dos locais seguiu o critério da conectividade entre os trechos já implantados, a fim de consolidar uma rede. A definição dos locais foi feita de forma a abranger todas as regiões da cidade.</p>
			</div>
			<div>
				<p>As audiências ocorrerão agrupadas por Subprefeituras ,seguindo o cronograma abaixo:</p>

				<p v-for="audiencia in audiencias">
					<b><u>{{audiencia.dataRegiao}}:</u></b><br>
					<b>{{audiencia.bairros}}</b><br>
					HORÁRIO: {{audiencia.horario}}<br>
					LOCAL: {{audiencia.local}} <br>
					ENDEREÇO: {{audiencia.endereco}}
				</p>
				<!-- Para acessar a apresentação que será realizada nas audiências públicas, clique aqui -->
			</div>
			<Comments :attr="{id:commentId(true), context:'Introdução'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<hr />
		<section>
			<h2 class="titulo" indent="1">Apresentação que será realizada nas audiências públicas</h2>
			<br />
			<iframe id="ifrSlides" src="https://docs.google.com/presentation/d/19tfb2aSxfYc8fZdxt1QKjiQlunV4Mv_qcqayTW0RCVs/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="405" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
			<br />
			<p><small>Caso tenha dificuldades para visualizar a apresentação acima, <a href="LINK PARA O ARQUIVO">clique aqui para fazer o download</a>.</small></p>
			<Comments :attr="{id:commentId(), context:'Apresentação'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<hr />
		<section>
			<h3 class="titulo" indent="1">Mapa</h3>
			<!-- MAPA -->
			<MapaOSM :mapaAttrs="mapaAttrs"></MapaOSM>
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
<!-- <script src="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/build/ol.js"></script> -->
<!-- <script src="fileSrc('ol.js')"></script> -->

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
			audiencias: [
				{
					dataRegiao: "23/05 - Norte 1"
					,bairros: "PERUS , PIRITUBA , FREGUESIA DO Ó/BRASILANDIA, CASAVERDE / CACHOEIRINHA"
					,horario: "19- 21h"
					,local: "Casa de Cultura Salvador Ligabue"
					,endereco: "Largo da Matriz de Nossa Senhora do Ó nº 215-Freguesia do Ó"
				}
				,{
					dataRegiao: "24/05 - Norte 2"
					,bairros: "JAÇANÃ/TREMEMBÉ, SANTANA/TUCURUVI - VILA MARIA / VILA GUILHERME"
					,horario: "19- 21h"
					,local: "Auditório da Subprefeitura Santana/Tucuruvi"
					,endereco: "Av. Tucuruvi, nº 808 – Tucuruvi"
				}
				,{
					dataRegiao: "30/05 – Oeste"
					,bairros: "LAPA , BUTANTÃ , PINHEIROS "
					,horario: "19 -21h"
					,local: "AUDITÓRIO DA SUBPREFEITURA DE PINHEIROS"
					,endereco: "Av. das Nações Unidas,nº 7123 - Alto de Pinheiros"
				}
				,{
					dataRegiao: "31/05 – Leste 1"
					,bairros: "MOOCA ,  PENHA,  VILA PRUDENTE"
					,horario: "19- 21h "
					,local: "AUDITÓRIO DA SUBPREFEITURA DA MOOCA"
					,endereco: "Rua Taquari, nº 549 – Mooca "
				}
				,{
					dataRegiao: "06/06 – Leste 2"
					,bairros: "SAPOPEMBA  , ARICANDUVA"
					,horario: "19 -21h "
					,local: "SUBPREFEITURA ARICANDUVA / FORMOSA/CARRÃO"
					,endereco: "RUA Atucuri nº 699- Chácara Santo Antônio"
				}
				,{
					dataRegiao: "07/06 – Leste 3"
					,bairros: "SÃO MIGUEL, ITAIM PAULISTA , ITAQUERA , GUAIANAZES, SÃO MATEUS, CIDADE TIRADENTES ,  ERMELINO MATARAZZO"
					,horario: "19 – 21h "
					,local: "SUBPREFEITURA DE CIDADE TIRADENTES "
					,endereco: "Rua Juá Mirim s/nº  – Chácara Santa Etelvina"
				}
				,{
					dataRegiao: "12/06 – Centro"
					,bairros: "SÉ"
					,horario: "19h – 21h "
					,local: "PRAÇA DE ATENDIMENTO DA SUBPREFEITURA DA SÉ "
					,endereco: "Rua Álvares Penteado,nº 53 – Centro"
				}
				, {
					dataRegiao: "13/06 – Sul 1"
					,bairros: "IPIRANGA ,  JABAQUARA , VILA MARIANA"
					,horario: "19 - 21h "
					,local: "AUDITÓRIO DA SUBPREFEITURA DO IPIRANGA "
					,endereco: "Rua Lino Coutinho,nº 444 - 1º Andar - Ipiranga"
				}
				,{
					dataRegiao: "14/06 - Sul 2"
					,bairros: "SANTO AMARO , CIDADE ADEMAR , CAMPO LIMPO   "
					,horario: "19 – 21h "
					,local: "SUBPREFEITURA DE SANTO AMARO"
					,endereco: "RUA Floriano Peixoto ,nº 54 - 1º Andar – Santo amaro"
				}
				,{
					dataRegiao: "19/06 – Sul 3"
					,bairros: "PARELHEIROS,  CAPELA DO SOCORRO ,  M’BOI MIRIM "
					,horario: "19 – 21h "
					,local: "SUBPREFEITURA DE M’BOI MIRIM"
					,endereco: "Av. Guarapiranga , nº1695 – Parque Alves Lima"
				}
			],
			anexos: [
				"Apresentacao_audiencias_publicas_Plano_Cicloviario-29abr2019.pptx"
			],
			mapaAttrs: {
				center: [ -5191000, -2698002 ],
				zoom: 12,
				layers: [
					{
						// title: 'Perímetro de abrangência Arco Pinheiros',
						path: this.$store.getters.basePath + 'arquivos/arco-pinheiros/perimetro_ACP.kml',
						stroke_color: 'rgba(255, 135, 0, 1)',
						fill_color: 'rgba(255, 255, 255, .1)',
						stroke_width: 2
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
#app div.WifiLivreSP div.Apoio button::before {
	content: "Ver downloads";
}
.map {
	height: 400px;
	width: 100%;
}
</style>
