<template>
	<div class="JockeyClub" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/jockey.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Jockey Club</div></template>
			<template slot="subtitulo"><div>Subtítulo da Nova Consulta</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magnam soluta nisi illum temporibus maiores? Fuga obcaecati cumque eos? Repudiandae minus accusamus mollitia blanditiis saepe non, eveniet sit sapiente eum.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">Seção 1</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti quae iure, quia recusandae eos! Recusandae culpa quod dolorum excepturi amet voluptatum perferendis doloribus, minus commodi. Dignissimos odit ipsam nam?</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">Seção 2</h2>
			<p>Seção 2</p>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && parseInt(estaConsulta.ativo) === 1" :attr="{id:99, context:'Comentarios'}"></Comments>
		</section>

	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Apoio from '@/components/Apoio'
import CommentsLoader from '@/components/CommentsLoader'
import Comments from '@/components/Comments'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'JockeyClub',
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
		Apoio,
		CommentsLoader,
		Comments
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

</style>
