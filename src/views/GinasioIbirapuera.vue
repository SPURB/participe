<template>
	<div class="GinasioIbirapuera" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/ginasio-ibirapuera_122w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Ginásio Ibirapuera</div></template>
			<template slot="subtitulo"><div>1ª Consulta Pública – Elementos prévios</div></template>
		</PageTop>
		<Apoio></Apoio>
		<div class="horizontal">
			<section>
				<h2 class="titulo" indent="1">Resumo</h2>
				<p>O Governo do Estado de São Paulo, por meio da Secretaria de Governo, contratou a Fipe para a execução de estudos especializados em modelagem técnico-operacional e econômico-financeira da concessão onerosa do Complexo Desportivo Constâncio Vaz Guimarães e construção de uma Arena Multiuso. </p>

				<p>O presente documento consiste no relatório técnico <i>“Avaliação Urbanística | Diagnóstico: Relatório Técnico Para Consulta Pública para o Projeto de Intervenção Urbanística (PIU)”</i> e tem como objetivo principal apresentar os insumos necessários para a realização da primeira consulta pública do projeto pela Prefeitura Municipal de São Paulo (PMSP).</p>
			</section>
			<section class="capitulos">
				<p>
					<ul class="links compacto" style="margin: 0 0;">
						<li>
							<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_diagnostico-socio-territorial.pdf')" target="_blank">
								<i class="icon-pdf icon"><span>pdf</span></i>
								<div>Diagnóstico socio territorial</div>
								<span>5 Mb</span>
							</a>
						</li>
						<li>
							<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_diagnostico-ambiental.pdf')" target="_blank">
								<i class="icon-pdf icon"><span>pdf</span></i>
								<div>Diagnóstico ambiental</div>
								<span>1,3 Mb</span>
							</a>
						</li>
						<li>
							<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_projeto-de-interesse-publico.pdf')" target="_blank">
								<i class="icon-pdf icon"><span>pdf</span></i>
								<div>Programa de Interesse Público</div>
								<span>760 Kb</span>
							</a>
						</li>
						<li class="compacto__ultimo-item">
							<a :href="src('arquivos/ginasio-ibirapuera/piu-ginasio-ibirapuera.zip')" target="_blank">
								<i class="icon-download icon"><span>pdf</span></i>
								<div>Consulta completa</div>
								<span>7 Mb</span>
							</a>
						</li>
					</ul>
				</p>
			</section>
		</div>

		<section>
			<CommentsOption v-if="consultaAtiva" :options="[
					{ id: 1, context: 'Diagnóstico socio territorial' },
					{ id: 2, context: 'Diagnóstico ambiental' },
					{ id: 3, context: 'Programa de Interesse público' }
				]"
				:alwaysOpen="false">
			</CommentsOption>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && consultaAtiva" :attr="{id:commentId(), context:'Comentarios'}"></Comments>
		</section>
	</div>
</template>

<script>
import Apoio from '@/components/Apoio'
import PageTop from '@/components/PageTop'
import { consultasCommons } from '@/mixins/consultasCommons'
import CommentsOption from '@/components/CommentsOption'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'

export default {
	name: 'GinasioIbirapuera',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {}
		}
	},
	components: {
		Apoio,
		Comments,
		CommentsOption,
		CommentsLoader,
		PageTop
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';
.horizontal {
	display: grid;
	grid-template-columns: 1fr 1fr;
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

.links.compacto li {
	margin: 1px
}

.links.compacto .compacto__ultimo-item {
	margin-top: 2rem
}
</style>
