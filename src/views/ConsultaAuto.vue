<template>
	<div class="ConsultaAuto" ref="conteudoConsulta">
		<PageTop :background_image_src="typeof(estaConsulta.urlCapa) == 'undefined' ? 'arquivos/capas/placeholder.png' : 'arquivos/capas/'+estaConsulta.urlCapa" :esta_consulta="estaConsulta">
			<!-- <template slot="titulo"><div>Título da Nova Consulta</div></template> -->
			<template slot="titulo"><div>{{ estaConsulta.nomePublico }}</div></template>
			<!-- <template slot="subtitulo"><div>Subtítulo da Nova Consulta</div></template> -->
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<span v-html="htmlContent"></span>
		<Comments v-for="comentario in comentarios" :attr="{id:commentId(), context:'Seção 1'}" v-if="estaConsulta.ativo == 1"></Comments>

		<section ref="allComments">
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

export default {
	name: 'ConsultaAuto',
	created () {
		// Carrega ID e comentários da consulta
		let app = this;
		axios
		.get(process.env.VUE_APP_ASSETS_BASE_URL+'painel/conteudo-consulta.php?url_consulta='+this.$route.params.nome)
		.then(response => {
			app.$route.meta.id = response.data
			app.ready = true

			// Carrega conteúdo HTML
			axios
			.get(process.env.VUE_APP_ASSETS_BASE_URL+'painel/conteudo-consulta.php?id='+app.$route.meta.id)
			.then(response => {
				// Substitui tags por componentes de comentários
				app.htmlContent = response.data[0].conteudo_html
				app.ultimaAlteracao = response.data[0].data_alteracao
				app.insereComentarios()
			})
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
			this.htmlContent = rawHtml.replace(/asd/g, '<Comments v-for="comentario in comentarios" :attr="{id:commentId(), context:\'Seção 1\'}" v-if="estaConsulta.ativo == 1"></Comments>')
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
