<template>
	<div class="WifiLivreSP" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/wifi-livre-sp_dt.jpg" :esta_consulta="estaConsulta">
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
					    <li v-for="anexo in anexos">
					    	<a :href="fileSrc(anexo)">{{ anexo }}</a>
					    </li>
					</ul>
				</div>
			</li>
		</template>
		</Apoio>

		<section>
			<h2 class="titulo" indent="1">EDITAL DE CREDENCIAMENTO Nº 01/2018</h2>
			<AnexoA></AnexoA>
			<Comments :attr="{id:1, context:'EDITAL DE CREDENCIAMENTO Nº 01/2018'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<hr />

		<section>
			<h2 class="titulo" indent="1">MINUTA DE CONTRATO</h2>
			<AnexoB></AnexoB>
			<Comments :attr="{id:2, context:'MINUTA DE CONTRATO'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<hr />

		<section>
			<h2 class="titulo" indent="1">ANEXO I – TERMO DE REFERÊNCIA</h2>
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
			<h2 class="titulo" indent="1">ANEXO II - LOCALIDADES OBRIGATÓRIAS</h2>
			<object :data="fileSrc('Anexo B II - Lista de localidades.pdf')" type="application/pdf" width="100%" height="600px">
			  <p>Seu navegador não suporta a exibição na página. <a :href="fileSrc('Anexo B II - Lista de localidades.pdf')">Clique aqui para baixar.</a></p>
			</object>
			<Comments :attr="{id:18, context:'ANEXO II - LOCALIDADES OBRIGATÓRIAS'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<hr />

		<section>
			<h2 class="titulo" indent="1">ANEXO III – POSTE E PLACA DE IDENTIFICAÇÃO PARA WIFI</h2>
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
			<h2 class="titulo" indent="1">ANEXO IV – TERMO DE USO E POLÍTICA DE PRIVACIDADE</h2>
			<AnexoBIV>
				<Comments :attr="{id:21, context:'ANEXO IV – TERMO DE USO'}" v-if="estaConsulta.ativo == 1"></Comments>
			</AnexoBIV>
			<Comments :attr="{id:21, context:'ANEXO IV – POLÍTICA DE PRIVACIDADE'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">ANEXO V – MANUAL DE IDENTIDADE VISUAL</h2>
			<object :data="fileSrc('Anexo B V - Manual de identidade visual.pdf')" type="application/pdf" width="100%" height="600px">
			  <p>Seu navegador não suporta a exibição na página. <a :href="fileSrc('Anexo B V - Manual de identidade visual.pdf')">Clique aqui para baixar.</a></p>
			</object>
			<Comments :attr="{id:22, context:'ANEXO IV – TERMO DE USO E POLÍTICA DE PRIVACIDADE'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:23, context:'Comentarios'}"></Comments>
		</section>

	</div>
</template>

<script>
import AnexoA from '@/components/pages/wifi-livre-sp/AnexoA';
import AnexoB from '@/components/pages/wifi-livre-sp/AnexoB';
import AnexoBI from '@/components/pages/wifi-livre-sp/AnexoBI';
import AnexoBIII from '@/components/pages/wifi-livre-sp/AnexoBIII';
import AnexoBIV from '@/components/pages/wifi-livre-sp/AnexoBIV';

import PageTop from '@/components/PageTop';
// const Mapa = () => import('@/components/Mapa');
// import Diagnostico from '@/components/Diagnostico';
import Indice from '@/components/Indice';
import Comments from '@/components/Comments';
import CommentsLoader from '@/components/CommentsLoader';
import Apoio from '@/components/Apoio';

export default {
	name: 'WifiLivreSP',
	data() {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			anexos: [
			'Anexo A - Edital de Credenciamento n 01_2018 - Expansao do WiFi (V.Final).pdf',
			'Anexo B - Minuta do Termo de Contrato.pdf',
			'Anexo B I - Termo de Referência FINAL - 2018-09-13.pdf',
			'Anexo B II - Lista de localidades.pdf',
			'Anexo B III - Postes e placas.pdf',
			'Anexo B IV - Política de Privacidade.pdf',
			'Anexo B V - Manual de identidade visual.pdf'
			]
		}
	},
	computed: {
		commentsLoaded() { return this.$store.state.commentsLoaded }
	},
	components: {
		PageTop,
		// Diagnostico,
		Indice,
		Comments,
		CommentsLoader,
		// Mapa,
		Apoio,
		AnexoA,
		AnexoB,
		AnexoBI,
		AnexoBIII,
		AnexoBIV
	},
	created() {
		this.$store.dispatch("fetchConsultas", { self: this });
		this.consultas = this.$store.state.consultas;
	},
	mounted() {
		this.listaTitulos();
	},
	updated() {
		this.alteraIndice();
	},
	methods: {
		scrollToallComments(){
			let appRef = this.$refs.allComments;
			window.scrollBy({
				top: appRef.getBoundingClientRect().y - 30,
				left: 0,
				behavior: 'smooth'
			});
		},
		filterConsultas(){
			this.consultas = this.$store.state.consultas;
			this.estaConsulta = this.consultas.filter(esta => esta.id_consulta == this.$route.meta.id )[0];
			// let app = this
			// this.consultas.map(function(index) {
			// 	if (parseInt(index.id_consulta) == parseInt(app.$route.meta.id)) {
			// 		app.estaConsulta = index
			// 	}
			// })
		},
		consultaState(){ return (this.estaConsulta.ativo == '1' ? "aberta" : "fechada") },
		listaTitulos() {
			let app = this;
			let titulosBruto = Array.from(this.$refs.conteudoConsulta.getElementsByClassName('titulo'));
			let titulos = [];
			let id = 0;
			titulosBruto.map(function(index) {

				let titulo = {
					id: id,
					nome: index.innerText,
					indent: index.attributes.indent.value,
					offsetObj: index,
					ativo: false
				};

				id++;
				titulos.push(titulo);
			});
			this.titulosLimpo = titulos;
		},
		setaBaixo() {
			window.scrollTo({ top: Math.round(window.innerHeight), behavior: 'smooth'})
		},
		alteraIndice() {
			let app = this;
			let sectionCollection = Array.from(this.$el.getElementsByTagName('section'));		
			window.addEventListener('scroll', function() {
				sectionCollection.map(function(index, i) {
					if (window.scrollY >= index.offsetTop - (window.innerHeight)/2 && window.scrollY < (index.offsetTop + index.offsetHeight) - (window.innerHeight)/4) {
						app.titulosLimpo[i].ativo = true
					} else { app.titulosLimpo[i].ativo = false };
				});
			}, {
				capture: true,
				passive: true
			});
		},
		imgSrc(caminho) {
			let url = this.$store.getters.basePath + caminho;
			return url.toString()
		},
		fileSrc(fileName) {
			let url = this.$store.getters.basePath + "arquivos/wifi-livre-sp/" + fileName;
			return url.toString()
		},		
		backgroundImg(caminho) {
			let url = this.$store.getters.basePath + caminho;
			return 'background-image: url(' + url + ');'
		}
	}
};
</script>

<style lang="scss">
div.PageTop > div:first-child {
	max-width: 700px;
}
table {
	margin: auto;
	min-width: 400px;
}
table.simple-table {
	border-collapse: collapse;
	table, th, td {
		border: 1px solid black;
		padding: 3px;
	}
}
table.headed-table {
	border-collapse: collapse;
	text-align: center;	
	table, th, td {
		border: 1px solid black;
		padding: 3px;
	}
	tr:first-child {
		background-color: #CCC;
		font-weight: bold;
	}
}

h2.titulo, h3.titulo {
	margin: 2em auto auto;
}
h4 {
	margin: 2em auto auto;
}
*::selection, *::-moz-selection {
	background: #EB5757;
	color: #FFF;
}
div.WifiLivreSP section {
	max-width: 700px;
	margin: 0 auto;
	padding: 0 1em;
}
hr {
	max-width: 700px;
	margin: 3em auto;
}
img {
	max-width: 100%;
}
div.WifiLivreSP p {
	overflow: auto;
	text-align: justify;
}
#app div.WifiLivreSP div.Apoio button::before {
	content: "Ver downloads";
}
</style>