<template>
	<div class="ConsultaAuto" ref="conteudoConsulta">
		<PageTop :background_image_src="typeof(estaConsulta) == 'undefined' ? 'arquivos/capas/placeholder.png' : 'arquivos/capas/'+estaConsulta.urlCapa" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>{{ estaConsulta ? estaConsulta.nomePublico : '' }}</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<!-- Modal de Alerta (mensagem urgente) -->
		<div v-if="mostraModal" class="modalBG" @click.self="mostraModal = false">
			<div class="fechaModal" title="Fechar" @click="mostraModal = false">X</div>
			<div class="innerModal">
				<component v-bind:is="msgAlerta"></component>
			</div>
		</div>

		<section class="horizontal">
			<div>
				<div>
					<h2>Introdução</h2>
					<p>
						{{ estaConsulta.textoIntro }}
					</p>
				</div>
			</div>
			<comments-option v-if="consultaAtiva" :options="topicosComentaveis"
			:alwaysOpen="true">
		</comments-option>
		</section>
		<component v-bind:is="htmlContent"></component>

		<section v-if="ready" ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && parseInt(estaConsulta.ativo) === 1" :attr="{id:commentId(), context:'Comentarios'}"></Comments>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import { consultasCommons } from '@/mixins/consultasCommons'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import CommentsOption from '@/components/CommentsOption'
import axios from 'axios'
import api from '@/utils/api'
import Vue from 'vue'
Vue.component('Comments', Comments)

export default {
	name: 'ConsultaAuto',
	created () {
		// Carrega ID e comentários da consulta

		axios
			.get(process.env.VUE_APP_ASSETS_BASE_URL + 'painel/conteudo-consulta.php?url_consulta=' + this.$route.params.nome)
			.then(response => {
				const idConsulta = parseInt(response.data)
				this.$route.meta.id = idConsulta
				this.ready = true

				// Carrega dados da consulta
				api
					.get(process.env.VUE_APP_API_URL + 'v3/consultas/' + idConsulta)
					.then(response => {
						let estaConsulta = response.data
						// Carrega conteúdo HTML
						axios
							.get(process.env.VUE_APP_ASSETS_BASE_URL + 'painel/conteudo-consulta.php?id=' + idConsulta)
							.then(response => {
								// Substitui tags por componentes de comentários
								let cId = 0
								let maisRecente = 0
								for (let i = 0; i < response.data.length; i++) {
									if (new Date(response.data[i].data_alteracao) > new Date(response.data[maisRecente].data_alteracao)) {
										maisRecente = i
									}
								}

								var tempApp = this
								let processedHtml = response.data[maisRecente].conteudo_html.replace(/<hr class="commentbox fa fa-comments" title="(.*?)">/g, function (x) {
									let context = x.replace(/<hr class="commentbox fa fa-comments" title="(.*?)">/g, '$1')
									tempApp.topicosComentaveis.push({ id: cId, context: context })
									return '<Comments :attr="{id:\'' + cId++ + '\', context:\'' + context + '\'}" v-if="' + estaConsulta.ativo + '"></Comments>'
								})
								// Formata itens de anexo
								processedHtml = processedHtml.replace(/class="anexo"><span class="fa fa-paperclip">/g, 'class="anexo"><span class="fa fa-paperclip"><i class="icon icon-pdf"></i>')

								// Corrige títulos
								processedHtml = processedHtml.replace(/<h1([\s\S]*?)>/g, '<h1>').replace(/<h2([\s\S]*?)>/g, '<h2>')
								processedHtml = processedHtml.replace(/<h1>(.*?)<\/h1>/g, '<section><h2 class="titulo" indent="1">$1</h2></section>')
								processedHtml = processedHtml.replace(/<h2>(.*?)<\/h2>/g, '<section><h3 class="titulo" indent="2">$1</h3></section>')
								const h1 = '<section><h1 id="tituloH1" class="titulo" indent="1">' + estaConsulta.nomePublico + '</h1></section>'

								// Limpa tag <o:p> do Word (para evitar tentativa frustrada de conversão em custom components)
								processedHtml = processedHtml.replace(/<o:p>|<\/o:p>/g, '').replace(/w:sdt/g, 'span').replace(/spanpr/g, 'span')

								this.htmlContent	= { template: '<div id="autocontent">' + h1 + processedHtml + '</div>' }
								this.ultimaAlteracao	= response.data[maisRecente].data_alteracao

								// Exibe mensagem de alerta, caso consulta possua
								if (response.data[maisRecente].msg_alerta) {
									this.exibeAlerta(response.data[maisRecente].msg_alerta)
								}

								// Atualiza índice lateral (h2 e h3)
								const app = this
								window.setTimeout(function () {
									app.titulosLimpo = app.listaTitulos()

									// Se houver muitos títulos, remove os de nível 2 (ou mais) para não extrapolar o índice
									if (app.titulosLimpo.length > 30) {
										for (var i = app.titulosLimpo.length - 1; i >= 0; i--) {
											if (app.titulosLimpo[i].indent > 1) {
												app.titulosLimpo.splice(i, 1)
											}
										}
									}
								}, 1000)
							})
					})
					.catch(error => console.error(error))
			})
			.catch(error => console.error(error))
	},
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			comentarios: [1, 2],
			estaConsulta: {},
			ready: false,
			htmlContent: '',
			ultimaAlteracao: '',
			msgAlerta: '',
			mostraModal: false,
			topicosComentaveis: []
		}
	},
	components: {
		Comments,
		CommentsLoader,
		CommentsOption,
		PageTop,
		Indice
	},
	methods: {
		encontraConsulta: () => {
			let consultaUrl = 'consulta/' + this.$route.params.nome
			this.consultas = this.$store.state.consultas
			this.estaConsulta = this.consultas.find(consulta => consulta.urlConsulta === consultaUrl)

			this.consultas.map((index) => {
				if (parseInt(index.idConsulta) === parseInt(this.$route.meta.id)) {
					this.estaConsulta = index
				}
			})
			return this.estaConsulta.idConsulta
		},
		exibeAlerta: function (mensagem) {
			this.msgAlerta = { template: '<div id="msgAlerta">' + mensagem + '</div>' }
			this.mostraModal = true
		},
		insereComentarios: function () {
			let rawHtml = this.htmlContent
			this.htmlContent = rawHtml.replace(/<hr class="commentbox fa fa-comments" title="(.*?)">/g, '<Comments v-for="comentario in comentarios" :attr="{id:commentId(), context:\'Seção 1\'}" v-if="estaConsulta.ativo == 1"></Comments>')
		}
	},
	mixins: [ consultasCommons ]
}
</script>

<style>
#autocontent {
	margin: auto;
	max-width: 700px;
	overflow: auto;
}
img {
	max-width: 100%;
}
p {
	word-wrap: break-word;
}
.titulo {
	padding-top: 35px;
	margin-top: 30px;
}
#tituloH1 {
	height: 0px;
	margin: 0;
	padding: 0;
	position: absolute;
	overflow: hidden;
}
table {
	margin-left: 0px !important;
}
a.anexo:hover {
    background-color: #EB5757;
    text-decoration: none;
    color: white;
    box-shadow: none;
}
a.anexo {
    border: 1px solid #ccc;
    display: block;
    padding: 1em;
    border-radius: 5px;
    color: black;
    box-shadow: 2px 2px 5px #ccc;
    width: calc(100% - 5px);
}
.modalBG {
	background-color: rgba(0,0,0, 0.4);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
}
.fechaModal {
	border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  width: 2em;
  height: 2em;
  background-color: #dd4040;
  color: white;
  right: 10%;
  top: calc(50% - 100px);
  margin-right: -1em;
  margin-top: -1em;
  position: absolute;
  text-align: center;
  z-index: 1;
}
.innerModal {
	background-color: white;
  border-radius: 1em;
  font-size: larger;
  position: relative;
  min-width: 100px;
  max-width: 80%;
  max-height: 70%;
  top: calc(50% - 100px);
  min-height: 200px;
  margin: auto;
  box-shadow: 1px 1px 10px black;
  padding: 2em;
  overflow: auto;
}

</style>
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
</style>
