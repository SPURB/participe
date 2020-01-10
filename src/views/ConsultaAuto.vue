<template>
	<div class="ConsultaAuto" ref="conteudoConsulta">
		<PageTop :background_image_src="typeof(estaConsulta.urlCapa) == 'undefined' ? 'arquivos/capas/placeholder.png' : 'arquivos/capas/'+estaConsulta.urlCapa" :esta_consulta="estaConsulta">
			<!-- <template slot="titulo"><div>Título da Nova Consulta</div></template> -->
			<template slot="titulo"><div>{{ estaConsulta.nomePublico }}</div></template>
			<!-- <template slot="subtitulo"><div>Subtítulo da Nova Consulta</div></template> -->
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
		</section>
	
		<!-- <span v-html="htmlContent"></span> -->
		<component v-bind:is="htmlContent"></component>
<section><h3 class="titulo" indent="2">Outra coisa</h3></section>
		
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
					let processedHtml = response.data[0].conteudo_html.replace(/<hr class="commentbox fa fa-comments" title="(.*?)">/g, function(x){
						let context = x.replace(/<hr class="commentbox fa fa-comments" title="(.*?)">/g, "$1");
						return '<Comments :attr="{id:\'' + cId++ + '\', context:\''+context+'\'}" v-if="'+estaConsulta.ativo+'"></Comments>'
					})
					// Corrige títulos
					processedHtml = processedHtml.replace(/<h1>(.*?)<\/h1>/g, '<h2 class="titulo" indent="1">$1</h2>')
					
					// Limpa tag <o:p> do Word (para evitar tentativa frustrada de conversão em custom components)
					processedHtml = processedHtml.replace(/<o:p>|<\/o:p>/g, '').replace(/w:sdt/g, 'span').replace(/spanpr/g, 'span')

					app.htmlContent = {template: '<div id="autocontent">'+processedHtml+'</div>'}
					app.ultimaAlteracao = response.data[0].data_alteracao
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
			// this.htmlContent = rawHtml.replace(/<hr class="commentbox fa fa-comments" title="(.*?)">/g, '<div>$1</div>')
		}
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

</style>
