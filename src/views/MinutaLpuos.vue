<template>
	<div class="MinutaLpuos" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/placeholder_480w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>2ª Minuta Participativa - Ajustes na LPUOS</div></template>
			<template slot="subtitulo">
				<div>Ajustes da Lei nº 16.402, de 22 de março de 2016.
				<br>Lei de Parcelamento, Uso e Ocupação do Solo – LPUOS.
				</div>
			</template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<Apoio>
			<template slot="item1">
				<li>
					<input type="radio" name="tabs" id="item1">
					<label for="item1">Anexos</label>
					<div class="conteudoTab">
						a
					</div>
				</li>
			</template>
		</Apoio>

		<section>
			<h2 class="titulo" indent="1">Legenda</h2>
			<p>
				Texto vigente a ser mantido (Lei nº 16.402/2016)<br>
				<s>Texto vigente com proposta de Exclusão  (Lei nº 16.402/2016)</s><br>
				<mark>Inclusão proposta</mark>
			</p>
		</section>
		<section>
			<h2 class="titulo" indent="1">Minuta de Projeto de Lei , DE — DE — DE 2019</h2>			
			<p>
				<mark>Dispõe sobre ajustes e normas complementares à Lei nº 16.402, de 22 de março de 2016, dá nova redação ao artigo 108 da Lei 16.642, de 2017 e dá outras providências.</mark>
			</p>
			<p>
				<mark><strong>BRUNO COVAS</strong>, Prefeito do Município de São Paulo, no uso das atribuições que lhe são conferidas por lei, faz saber que a Câmara Municipal, em sessão de ____, decretou e eu promulgo a seguinte lei:</mark>
			</p>
			<p class="titulo" indent="1">
				<mark><strong>Art. 1º</strong> Esta lei dispõe sobre ajustes e normas complementares à Lei nº 16.402, de 22 de março de 2016 e dá outras providências.</mark>
			</p>		
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
import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'


export default {
	name: 'MinutaLpuos',
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

h2 {
	font-size: 150%;
}

mark {
	color: #0070c0;
	background-color: unset;
	padding: 0;
}
</style>
