<template>
	<div class="WifiLivreSP" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/wifi-livre-sp_pb_480w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>WiFi Livre SP</div></template>
			<template slot="subtitulo">
				<div>{{ estaConsulta.textoIntro }}</div>
			</template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio>
		<template slot="item1">
			<li>
				<input type="radio" name="tabs" id="item1">
				<label for="item1">Anexos</label>
				<div class="conteudoTab">
					<ul style="list-style-type: square; color: #DDD;">
						<li v-for="(anexo, index) in anexos">
							<a :href="fileSrc(anexo)" :key="index">{{ anexo }}</a>
						</li>
					</ul>
				</div>
			</li>
		</template>
		</Apoio>

		<section>
			<h2 class="titulo" indent="1">EDITAL DE CREDENCIAMENTO</h2>
			<AnexoA></AnexoA>
			<Comments :attr="{id:1, context:'EDITAL DE CREDENCIAMENTO'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<hr />

		<section>
			<!-- <h2 class="titulo" indent="1">MINUTA DE CONTRATO</h2> -->
			<h2 class="titulo" indent="1">ANEXO A - MINUTA DE CONTRATO</h2>
			<AnexoB></AnexoB>
			<Comments :attr="{id:2, context:'MINUTA DE CONTRATO'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<hr />
		<section>
			<!-- <h2 class="titulo" indent="1">ANEXO I – TERMO DE REFERÊNCIA</h2> -->
			<h2 class="titulo" indent="1">ANEXO B I - TERMO DE REFERÊNCIA</h2>
			<AnexoBI>
				<template slot="formula_01">
					<figure title="Fórmula do índice de latência" class="coluna">
						<img :src="imgSrc('arquivos/wifi-livre-sp/anexo_BI_formula_01.jpg')" alt="Fórmula do índice de latência">
						<figcaption>Fórmula do índice de latência</figcaption>
					</figure>
				</template>
				<template slot="formula_02">
					<figure title="Fórmula do índice de velocidade" class="coluna">
						<img :src="imgSrc('arquivos/wifi-livre-sp/anexo_BI_formula_02.jpg')" alt="Fórmula do índice de velocidade">
						<figcaption>Fórmula do índice de velocidade</figcaption>
					</figure>
				</template>

				<template slot="1. DO OBJETO">
					<Comments :attr="{id:3, context:'1. DO OBJETO'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="2. DOS PROCEDIMENTOS DE CONEXÃO, CADASTRO E TERMOS DE USO DO SERVIÇO">
					<Comments :attr="{id:4, context:'2. DOS PROCEDIMENTOS DE CONEXÃO, CADASTRO E TERMOS DE USO DO SERVIÇO'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="3. DA SEGURANÇA, PRIVACIDADE E NEUTRALIDADE DA REDE">
					<Comments :attr="{id:5, context:'3. DA SEGURANÇA, PRIVACIDADE E NEUTRALIDADE DA REDE'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="4. DO ARMAZENAMENTO E DISPONIBILIZAÇÃO DE INFORMAÇÕES PARA A PMSP">
					<Comments :attr="{id:6, context:'4. DO ARMAZENAMENTO E DISPONIBILIZAÇÃO DE INFORMAÇÕES PARA A PMSP'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="5">
					<Comments :attr="{id:7, context:'5. DA PLACA E POSTE DE IDENTIFICAÇÃO DO PROGRAMA E DOS ANÚNCIOS PUBLICITÁRIOS DIGITAIS'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="6">
					<Comments :attr="{id:8, context:'6. DA INFRAESTRUTURA E EQUIPAMENTOS PARA WIFI'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="7">
					<Comments :attr="{id:9, context:'7. DA ESPECIFAÇÃO E CONFIGURAÇÃO DOS EQUIPAMENTOS'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="8">
					<Comments :attr="{id:10, context:'8. DA INSTALAÇÃO DO SERVIÇO'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="9">
					<Comments :attr="{id:1, context:'9. DA FISCALIZAÇÃO TÉCNICA E AVALIAÇÃO DO SERVIÇO'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="10">
					<Comments :attr="{id:12, context:'10. DOS NÍVEIS DE SERVIÇO'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="11">
					<Comments :attr="{id:13, context:'11. DO SUPORTE E TREINAMENTO'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="12">
					<Comments :attr="{id:14, context:'12. DA MANUTENÇÃO E RESPOSTA A INCIDENTES'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="13">
					<Comments :attr="{id:15, context:'13. PROCESSOS DE GESTÃO E GERENCIAMENTO DE SERVIÇOS'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

				<template slot="14">
					<Comments :attr="{id:16, context:'14. PENALIDADES'}" v-if="estaConsulta.ativo == 1"></Comments>
				</template>

			</AnexoBI>
			<Comments :attr="{id:17, context:'ANEXO I – TERMO DE REFERÊNCIA'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<hr />

		<section>
			<!-- <h2 class="titulo" indent="1">ANEXO II - LOCALIDADES OBRIGATÓRIAS</h2> -->
			<h2 class="titulo" indent="1">ANEXO B II - LISTA DE LOCALIDADES</h2>
			<object :data="fileSrc('Anexo B II - Lista de localidades.pdf')" type="application/pdf" width="100%" height="600px">
			<p>Seu navegador não suporta a exibição na página. <a :href="fileSrc('Anexo B II - Lista de localidades.pdf')">Clique aqui para baixar.</a></p>
			</object>
			<Comments :attr="{id:18, context:'ANEXO II - LOCALIDADES OBRIGATÓRIAS'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<hr />

		<section>
			<!-- <h2 class="titulo" indent="1">ANEXO III – POSTE E PLACA DE IDENTIFICAÇÃO PARA WIFI</h2> -->
			<h2 class="titulo" indent="1">ANEXO B III - POSTES E PLACAS</h2>
			<AnexoBIII>
				<template slot="figura1">
					<figure title="Figura 1 – Modelo de placa de identificação" class="coluna">
						<img :src="imgSrc('arquivos/wifi-livre-sp/Figura 1 - Anexo III - Poste e Placas.jpg')" alt="Figura 1 – Modelo de placa de identificação">
						<figcaption>Figura 1 – Modelo de placa de identificação</figcaption>
					</figure>
				</template>
				<template slot="figura2">
					<figure title="Figura 2 – Modelo de poste para fixação da placa de sinalização" class="coluna">
						<img :src="imgSrc('arquivos/wifi-livre-sp/Figura 2 - Anexo III - Poste e Placas.jpg')" alt="Figura 2 – Modelo de poste para fixação da placa de sinalização">
						<figcaption>Figura 2 – Modelo de poste para fixação da placa de sinalização</figcaption>
					</figure>
				</template>
				<template slot="figura3">
					<figure title="Figura 3 – Exemplo de poste utilizado" class="coluna">
						<img :src="imgSrc('arquivos/wifi-livre-sp/Figura 3 - Anexo III - Poste e Placas.jpg')" alt="Figura 3 – Exemplo de poste utilizado">
						<figcaption>Figura 3 – Exemplo de poste utilizado</figcaption>
					</figure>
				</template>
			</AnexoBIII>
			<Comments :attr="{id:19, context:'ANEXO III – POSTE E PLACA DE IDENTIFICAÇÃO PARA WIFI'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<!-- <h2 class="titulo" indent="1">ANEXO IV – TERMO DE USO E POLÍTICA DE PRIVACIDADE</h2> -->
			<h2 class="titulo" indent="1">ANEXO B IV - TERMO DE USO E POLÍTICA DE PRIVACIDADE</h2>
			<AnexoBIV>
				<Comments :attr="{id:21, context:'ANEXO IV – TERMO DE USO'}" v-if="estaConsulta.ativo == 1"></Comments>
			</AnexoBIV>
			<Comments :attr="{id:21, context:'ANEXO IV – POLÍTICA DE PRIVACIDADE'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<!-- <h2 class="titulo" indent="1">ANEXO V – MANUAL DE IDENTIDADE VISUAL</h2> -->
			<h2 class="titulo" indent="1">ANEXO B V - MANUAL DE IDENTIDADE VISUAL</h2>
			<object :data="fileSrc('Anexo B V - Manual de identidade visual.pdf')" type="application/pdf" width="100%" height="600px">
			<p>Seu navegador não suporta a exibição na página. <a :href="fileSrc('Anexo B V - Manual de identidade visual.pdf')">Clique aqui para baixar.</a></p>
			</object>
			<Comments :attr="{id:22, context:'ANEXO B V - MANUAL DE IDENTIDADE VISUAL'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:23, context:'Comentarios'}"></Comments>
		</section>

	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'WifiLivreSP',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			anexos: [
				'Edital de Credenciamento n 01_2018.pdf',
				'Anexo A - Minuta do Termo de Contrato.pdf',
				'Anexo B I - Termo de Referência.pdf',
				'Anexo B II - Lista de localidades.pdf',
				'Anexo B III - Postes e placas.pdf',
				'Anexo B IV - Política de Privacidade.pdf',
				'Anexo B V - Manual de identidade visual.pdf'
			]
		}
	},
	components: {
		PageTop,
		Indice,
		Comments,
		CommentsLoader,
		Apoio,
		AnexoA: () => import(/* webpackChunkName: "AnexoA" */ '@/views/wifi-livre-sp/AnexoA'),
		AnexoB: () => import(/* webpackChunkName: "AnexoB" */ '@/views/wifi-livre-sp/AnexoB'),
		AnexoBI: () => import(/* webpackChunkName: "AnexoBI" */ '@/views/wifi-livre-sp/AnexoBI'),
		AnexoBIII: () => import(/* webpackChunkName: "AnexoBIII" */ '@/views/wifi-livre-sp/AnexoBIII'),
		AnexoBIV: () => import(/* webpackChunkName: "AnexoBIV" */ '@/views/wifi-livre-sp/AnexoBIV')
	},
	mixins: [ consultasCommons ],
	methods: {
		fileSrc (fileName) {
			let url = this.$store.getters.basePath + 'arquivos/wifi-livre-sp/' + fileName
			return url.toString()
		}
	}
}
</script>

<style lang="scss">
@import '../variables';
@import '../consulta';

#app div.WifiLivreSP div.Apoio button::before {
	content: "Ver downloads";
}
</style>
