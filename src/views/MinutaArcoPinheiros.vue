<template>
	<div class="MinutaArcoPinheiros" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/placeholder_480w.jpg" :esta_consulta="estaConsulta" :social="social_assets">
			<template slot="titulo"><div>Minuta PIU Arco Pinheiros</div></template>
			<template slot="subtitulo"><div>Minuta do Projeto de Lei do Projeto de Intervenção Urbana do Arco Pinheiros</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magnam soluta nisi illum temporibus maiores? Fuga obcaecati cumque eos? Repudiandae minus accusamus mollitia blanditiis saepe non, eveniet sit sapiente eum.</p>

			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum temporibus nulla deserunt perferendis eligendi molestiae enim, sed iste nesciunt itaque maiores voluptatem omnis fugit a reprehenderit quasi culpa facere nihil.</p>

			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, non? Expedita officia quod maxime eveniet sed autem itaque ducimus corporis placeat voluptatibus illum, nulla est omnis, ipsum velit praesentium voluptas.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">Seção 1</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti quae iure, quia recusandae eos! Recusandae culpa quod dolorum excepturi amet voluptatum perferendis doloribus, minus commodi. Dignissimos odit ipsam nam?</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">Seção 2</h2>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure praesentium maxime sed velit, expedita quo molestiae minima et alias fugit modi tempora, distinctio consequatur voluptate odio libero omnis eligendi esse!</p>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{ id:1000, context:'Comentarios' }"></Comments>
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
	name: 'MinutaArcoPinheiros',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			social_assets: { // https://www.urlencoder.org/
				whatsapp: 'https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Ftext%3DParticipe%20da%20consulta%20p%C3%BAblica%20da%20Minuta%20do%20Projeto%20de%20Lei%20do%20Projeto%20de%20Interven%C3%A7%C3%A3o%20Urbana%20do%20Arco%20Pinheiros%3A%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fminuta-arco-pinheiros',
				facebook: 'https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fminuta-arco-pinheiros',
				twitter: 'https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Ftext%3DParticipe%20da%20consulta%20p%C3%BAblica%20da%20Minuta%20do%20Projeto%20de%20Lei%20do%20Arco%20Pinheiros%3A%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fminuta-arco-pinheiros'
			}
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
