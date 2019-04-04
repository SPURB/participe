<template>
	<div class="ConcessaoMartinelli" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/concessao-martinelli_1900w.jpg" :esta_consulta="estaConsulta" :social="social_assets">
			<template slot="titulo"><div>Concessão Martinelli</div></template>
		</PageTop>

		<Indice :titulos="titulosLimpo"></Indice>

		<section>
			<h2 class="titulo" indent="1">Introdução</h2>
			<p>Lorem lorem</p>

			<VideoContent
				titulo="Parte 1"
				descricao="Histórico."
				poster="arquivos/concessao-martinelli/martinelli-poster.jpg"
				src="arquivos/concessao-martinelli/martinelli-1.mp4"
				width="100%"
				type="video/mp4">
			</VideoContent>
			<VideoContent
				titulo="Parte 2"
				poster="arquivos/concessao-martinelli/martinelli-poster-1.jpg"
				src="arquivos/concessao-martinelli/martinelli-2.mp4"
				width="100%"
				type="video/mp4">
			</VideoContent>


			<p>Lorem lorem</p>
			<ul class="links">
				<li>
					<a href="#" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Capítulo 1</div>
						<span>10 MB</span>
					</a>
				</li>
				<li>
					<a href="#" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Capítulo 2</div>
						<span>10 MB</span>
					</a>
				</li>
				<li>
					<a href="#" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Capítulo 3</div>
						<span>10 MB</span>
					</a>
				</li>
			</ul>
			<CommentsOption v-if="estaConsulta.ativo == 1" :options="[
				{ id: 100, context: 'Capítulo 1: Lorem' },
				{ id: 101, context: 'Capítulo 2: Lorem' },
				{ id: 103, context: 'Capítulo 3: Lorem' },
			]">
			</CommentsOption>

			<CommentsContext :id="1" :context="'Introdução e protótipo'">
				<p>Comente aqui</p>
			</CommentsContext>

			<h2 class="titulo" indent="2">1. Capítulo 1</h2>
			<CommentsContext :id="2" :context="'1. Histórico'">
				<p>Lorem lorem</p>
				<p>Lorem lorem</p>
			</CommentsContext>

			<h2 class="titulo" indent="2">2. Capítulo 2</h2>
			<CommentsContext :id="3" :context="'2. Proposta de Mudança'">
				<p>Lorem lorem</p>
				<p>Lorem lorem</p>
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
import VideoContent from '@/components/VideoContent'
import Comments from '@/components/Comments'
import CommentsContext from '@/components/CommentsContext'
import CommentsOption from '@/components/CommentsOption'
import CommentsLoader from '@/components/CommentsLoader'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'ConcessaoMartinelli',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			social_assets: {
				whatsapp: 'https://api.whatsapp.com/send?text=Participe%20da%20consulta%20p%C3%BAblica%20de%20reformula%C3%A7%C3%A3o%20da%20prefeitura%20de%20S%C3%A3o%20Paulo%20-%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br/#/concessao-martinelli',
				facebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br/#/concessao-martinelli',
				twitter: 'https://twitter.com/intent/tweet?text=Participe%20da%20consulta%20p%C3%BAblica%20de%20reformula%C3%A7%C3%A3o%20da%20prefeitura%20de%20S%C3%A3o%20Paulo%20-%20http%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2F#%2Fconcessao-martinelli'
			}
		}
	},
	components: {
		PageTop,
		Indice,
		VideoContent,
		Comments,
		CommentsContext,
		CommentsOption,
		CommentsLoader
	},
	methods: {
		print () {
			this.$store.dispatch('imprime')
		}
	},
	mixins: [consultasCommons]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';
</style>
