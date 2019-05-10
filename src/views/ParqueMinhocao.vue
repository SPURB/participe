<template>
	<div class="ParqueMinhocao" ref="conteudoConsulta">
		<PageTop background_image_src="" :esta_consulta="estaConsulta" :social="social_assets">
			<template slot="titulo"><div>PIU Parque Minhocão</div></template>
			<template slot="subtitulo"><div>1ª consulta pública – Projeto de Intervenção Urbana do Parque Minhocão</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>
		<GraficoLinha></GraficoLinha>
		<!-- <div class="linkMapaInterativo">
			<a :href="imgSrc('mapas/piu-setor-central-2/')" target="_blank">MAPA INTERATIVO <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
		</div> -->
		<!-- <section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:14, context:'Comentarios'}"></Comments>
		</section> -->
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import CommentsContext from '@/components/CommentsContext'
import CommentsLoader from '@/components/CommentsLoader'
import Galeria from '@/components/Galeria'
import Apoio from '@/components/Apoio'
import Tabela from '@/components/Tabela'
import Imagem from '@/components/Imagem'
import AntesDepois from '@/components/AntesDepois'
import GraficoLinha from '@/components/GraficoLinha'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'SetorCentral2',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			social_assets: {
				whatsapp: '',
				facebook: '',
				twitter: ''
			}
		}
	},
	components: {
		PageTop,
		Indice,
		Comments,
		CommentsLoader,
		CommentsContext,
		Galeria,
		Apoio,
		Tabela,
		Imagem,
		AntesDepois,
		GraficoLinha
	},
	methods: {
		print () {
			this.$store.dispatch('imprime')
		}
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

div.ParqueMinhocao {}
</style>
