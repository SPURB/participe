<template>
	<div class="ConsultaAuto" ref="conteudoConsulta">
		<PageTop :background_image_src="typeof(estaConsulta.urlCapa) == 'undefined' ? 'arquivos/capas/placeholder.png' : 'arquivos/capas/'+estaConsulta.urlCapa" :esta_consulta="estaConsulta">
			<!-- <template slot="titulo"><div>Título da Nova Consulta</div></template> -->
			<template slot="titulo"><div>{{ estaConsulta.nomePublico }}</div></template>
			<!-- <template slot="subtitulo"><div>Subtítulo da Nova Consulta</div></template> -->
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>		
	
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
import axios from 'axios'
import Vue from 'vue'
Vue.component('Comments', Comments)

export default {
	name: 'ConsultaAuto',
	created () {
		// Carrega ID e comentários da consulta
		var app = this;

		axios
		.get(process.env.VUE_APP_ASSETS_BASE_URL+'painel/conteudo-consulta.php?url_consulta='+this.$route.params.nome)
		.then(response => {
			app.$route.meta.id = response.data
			app.ready = true

			// Carrega dados da consulta
			axios
			.get(process.env.VUE_APP_API_URL+'v3/consultas/'+app.$route.meta.id)
			.then(response => {
				let estaConsulta = response.data
				// Carrega conteúdo HTML
				axios
				.get(process.env.VUE_APP_ASSETS_BASE_URL+'painel/conteudo-consulta.php?id='+app.$route.meta.id)
				.then(response => {
					// Substitui tags por componentes de comentários
					var cId = 0
					var comId = function() {
						cId++
						return cId
					}
					let maisRecente = 0;
					for(let i = 0; i < response.data.length; i++) {						
						if(new Date(response.data[i].data_alteracao) > new Date(response.data[maisRecente].data_alteracao)) {
							maisRecente = i;
						}
					}					

					let processedHtml = response.data[maisRecente].conteudo_html.replace(/<hr class="commentbox fa fa-comments" title="(.*?)">/g, function(x){
						let context = x.replace(/<hr class="commentbox fa fa-comments" title="(.*?)">/g, "$1");
						return '<Comments :attr="{id:\'' + cId++ + '\', context:\''+context+'\'}" v-if="'+estaConsulta.ativo+'"></Comments>'
					})
					// Formata itens de anexo
					processedHtml = processedHtml.replace(/class="anexo"><span class="fa fa-paperclip">/g, 'class="anexo"><span class="fa fa-paperclip"><i class="icon icon-pdf"></i>')
					// Corrige títulos
					processedHtml = processedHtml.replace(/<h1([\s\S]*?)>/g, '<h1>').replace(/<h2([\s\S]*?)>/g, '<h2>')

					processedHtml = processedHtml.replace(/<h1>(.*?)<\/h1>/g, '<section><h2 class="titulo" indent="1">$1</h2></section>')
					processedHtml = processedHtml.replace(/<h2>(.*?)<\/h2>/g, '<section><h3 class="titulo" indent="2">$1</h3></section>')
					// processedHtml = processedHtml.replace(/<h1>(.*?)<\/h1>/g, '<section><h2 class="titulo" indent="1">$1</h2></section>')
					// processedHtml = processedHtml.replace(/<h2>(.*?)<\/h2>/g, '<section><h3 class="titulo" indent="2">$1</h3></section>')
					const h1 = '<section><h1 id="tituloH1" class="titulo" indent="1">'+estaConsulta.nomePublico+'</h1></section>'
					
					// Limpa tag <o:p> do Word (para evitar tentativa frustrada de conversão em custom components)
					processedHtml = processedHtml.replace(/<o:p>|<\/o:p>/g, '').replace(/w:sdt/g, 'span').replace(/spanpr/g, 'span')

					app.htmlContent	= {template: '<div id="autocontent">'+h1+processedHtml+'</div>'}
					app.ultimaAlteracao	= response.data[maisRecente].data_alteracao
					
					// Atualiza índice lateral (h2 e h3)
					window.setTimeout(function() {
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
			comentarios: [1,2],
			estaConsulta: {},
			ready: false,
			htmlContent: '',
			ultimaAlteracao: ''
		}
	},
	components: {
		Comments,
		CommentsLoader,
		PageTop,
		Indice
	},
	methods: {
		encontraConsulta: function() {
			let consultaUrl = "consulta/"+this.$route.params.nome
			this.consultas = this.$store.state.consultas
			this.estaConsulta = this.consultas.find(consulta => consulta.urlConsulta === consultaUrl)

			let app = this
			this.consultas.map(function (index) {
				if (parseInt(index.idConsulta) === parseInt(app.$route.meta.id)) {
					app.estaConsulta = index
				}
			})
			return app.estaConsulta.idConsulta
		},
		insereComentarios: function() {
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
</style>
<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

</style>