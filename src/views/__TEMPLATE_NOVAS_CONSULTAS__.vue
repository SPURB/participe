<template>
	<div class="NomeDaConsulta" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/placeholder_480w.jpg" :esta_consulta="estaConsulta" :social="social_assets">
			<template slot="titulo"><div>Título da Nova Consulta</div></template>
			<template slot="subtitulo"><div>Subtítulo da Nova Consulta</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<!-- <Apoio></Apoio> -->
		<!-- Decreto Nº 56.901 inclua este componente caso seja um PIU -->

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
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
// import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'NomeDaConsulta',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			social_assets: { // https://www.urlencoder.org/
				whatsapp: 'https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Ftext%3DParticipe%20da%20consulta%20p%C3%BAblica%20do%20Nome%20da%20Consulta%3A%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fnome-da-consulta',
				facebook: 'https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fnome-da-consulta',
				twitter: 'https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Ftext%3DParticipe%20da%20consulta%20p%C3%BAblica%20do%20Nome%20da%20Consulta%3A%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fnome-da-consulta'
			}
		}
	},
	components: {
		PageTop,
		Indice
		// Apoio
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

</style>
