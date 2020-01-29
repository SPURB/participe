<template>
	<div class="JockeyClub2" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/jockey2_244w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Jockey Club</div></template>
			<template slot="subtitulo"><div>Segunda consulta pública - Proposta de ordenamento urbanístico</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id: commentId(true), context:'Apresentação' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Situação fundiária</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id:commentId(), context:'Situação fundiária' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Cenários</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id:commentId(), context:'Cenários' }" v-if="consultaAtiva"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Parâmetros urbanísticos</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id:commentId(), context:'Parâmetros urbanísticos' }" v-if="consultaAtiva"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Tombamento</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id:commentId(), context:'Tombamento' }" v-if="consultaAtiva"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Setorização</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id:commentId(), context:'Setorização' }" v-if="consultaAtiva"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Parcelamento</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id:commentId(), context:'Parcelamento' }" v-if="consultaAtiva"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Uso</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id:commentId(), context:'Uso' }" v-if="consultaAtiva"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Ocupação</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id:commentId(), context:'Ocupação' }" v-if="consultaAtiva"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Uso</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id:commentId(), context:'Uso' }" v-if="consultaAtiva"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Programa de intervenções</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id:commentId(), context:'Programa de intervenções' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Estimativa de custos das intervenções</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id:commentId(), context:'Estimativa de custos das intervenções' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Modelo de gestão democrática</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id: commentId(), context:'Modelo gestão democrática' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Modelagem econômica</h2>
			<p>Lorem ipsum</p>
			<Comments :attr="{ id: commentId(), context:'Modelagem econômica' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Ficha técnica</h2>
			<p>Lorem ipsum</p>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && consultaAtiva" :attr="{ id:commentId(), context:'Comentarios' }"></Comments>
		</section>

	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'

export default {
	name: 'JockeyClub2',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {}
		}
	},
	components: {
		Comments,
		CommentsLoader,
		PageTop,
		Indice,
		Apoio
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

</style>
