<template>
	<div class="NomeDaConsulta" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/placeholder_480w.png" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>{{ message }}</div></template>
			<template slot="subtitulo"><div>Subtítulo da Nova Consulta</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magnam soluta nisi illum temporibus maiores? Fuga obcaecati cumque eos? Repudiandae minus accusamus mollitia blanditiis saepe non, eveniet sit sapiente eum.</p>
			<Comments :attr="{id:commentId(), context:'Apresentação'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Seção 1</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti quae iure, quia recusandae eos! Recusandae culpa quod dolorum excepturi amet voluptatum perferendis doloribus, minus commodi. Dignissimos odit ipsam nam?</p>
			<Comments :attr="{id:commentId(), context:'Seção 1'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

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
import { get } from 'axios'
import { mapMutations } from 'vuex'

export default {
	name: 'NomeDaConsulta',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			message: '',
			error: ''
		}
	},
	components: {
		Comments,
		CommentsLoader,
		PageTop,
		Indice
	},
	created () {
		const { id } = this.$route.params
		this.SET_ROUTE_ID(parseInt(id))
		this.getContent('/admin/content/about.json')
	},
	mixins: [ consultasCommons ],
	methods: {
		...mapMutations(['SET_ROUTE_ID']),
		setData (key, val) { this[key] = val },
		getContent (path) {
			get('/admin/content/about.json')
				.then(({ data }) => this.setData('message', data.message))
				.catch(err => this.setData('error', err))
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

</style>
