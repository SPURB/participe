<template>
	<div class="AdminNovaConsulta">
		<h1>Nova Consulta</h1>
		<form>

			<fieldset>
				<legend>Nome <span>(obrigatório)</span></legend>
				<input 
					name="nome"
					type="text" 
					v-validate="{
						required: true,
					}"
					id="input_nomePublico" 
					required 
					v-model="nome_publico" >
			</fieldset>
			<fieldset>
				<legend>Status <span>(obrigatório)</span></legend>
				<input 
					type="radio" 
					id="input_status_aberta" 
					name="input_status" 
					required 
					checked 
					value="1" 
					v-model="ativo">
				<label for="input_status_aberta" class="status">Consulta aberta</label>
				<input 
					type="radio" 
					id="input_status_encerrada" 
					name="input_status" 
					required 
					value="0" 
					v-model="ativo">
				<label for="input_status_encerrada" class="status">Consulta fechada</label>
			</fieldset>
			<fieldset>
				<legend>Período da consulta <span>(obrigatório)</span></legend>
				<div>
					<label for="input_dataCadastro">Início</label>
					<input 
						type="date" 
						id="input_dataCadastro" 
						required 
						v-model="data_cadastro"
					>
				</div>
				<div>
					<label for="input_dataFinal">Final</label>
					<input 
						type="date" 
						id="input_dataFinal" 
						required 
						v-model="data_final"
					>
				</div>
			</fieldset>
			<fieldset>
				<legend>Texto introdutório <span>(obrigatório)</span></legend>
				<textarea 
					name="texto_intro"
					type="text"
					id="input_textoIntro" 
					v-validate="{
						required: true,
						max: 480
					}"
					required 
					placeholder="Até 480 caracteres" 
					maxlength="480" 
					v-model="texto_intro"></textarea>
			</fieldset>
			<fieldset>
				<legend>Hiperlinks <span>(obrigatório)</span></legend>
				<div>
					<label for="input_urlConsulta">URL da consulta</label>
					<input 
						name="URL da consulta"
						type="text" 
						v-validate="'required|text'"
						id="input_urlConsulta" 
						placeholder="Obrigatório" 
						v-model="url_consulta">
				</div>
				<div>
					<label for="input_urlCapa">URL da imagem de capa</label>
					<input 
						name="URL da imagem de capa"
						type="text" 
						v-validate="'required|url'"
						id="input_urlCapa" 
						placeholder="Obrigatório" 
						v-model="url_capa">
				</div>
				<div>
					<label for="input_urlDevolutiva">URL da devolutiva</label>
					<input 
						name="URL da devolutiva"
						type="text" 
						v-validate="'text'"
						id="input_urlDevolutiva" 
						placeholder="Não obrigatório" 
						v-model="url_devolutiva">
				</div>
			</fieldset>
			<a class="acao limpar" @click="cancelarAcao"><i class="material-icons">clear</i>Cancelar</a>
			<a  @click="criarConsulta" class="acao enviar"><i class="material-icons">add_circle</i> Criar consulta</a>
		</form>
	</div>
</template>

<script>
import axios from 'axios'
import { mapFields } from 'vee-validate'
import { adminCommon } from '@/mixins/adminCommon' 

export default {
	mixins:[ adminCommon ],
	nome: 'AdminNovaConsulta',
	computed:{
		periodoPadrao() {
			let hoje = new Date() // objeto Date "Date 2018-08-16T14:27:38.500Z"
			let hojeFull = hoje.toISOString().substring(0, hoje.toISOString().indexOf('T')) // "2018-08-16T14:27:38.500Z" -> "2018-08-16"
			let dataFinal = new Date(hoje.setDate(hoje.getDate() + 20)) // soma vinte dias e cria um novo objeto Date
			let dataFinalFull = dataFinal.toISOString().substring(0, dataFinal.toISOString().indexOf('T')) // "2018-08-16T14:27:38.500Z" -> "2018-08-16"
			return {
				hoje: hojeFull, //  1
				fim: dataFinalFull  // -1
			}
		},
		...mapFields({ // https://baianat.github.io/vee-validate/guide/flags.html
			url: 'url',
			text: ''
		}),
	},
	methods:{
		criarConsulta(){
			const sendObj = {
				"nome":this.nome_db,
				"ativo":"="+this.ativo, 
				"dataCadastro": this.data_cadastro,
				"dataFinal": this.data_final,
				"textoIntro": this.texto_intro,
				"nomePublico":this.nome_publico,
				"urlConsulta":this.url_consulta,
				"urlCapa":this.url_capa,
				"urlDevolutiva":this.url_devolutiva
			}
			// console.log(sendObj)

			const app = this;
			axios.post(this.apiPath+'consultas',sendObj)
			.then(function (response) {
				// console.log(response);
				alert("Sucesso d~.~b")
				app.$store.dispatch("fetchConsultas", { self: this })
				app.clearInputs()
				app.$router.push('/admin') 
			})
			.catch(function (error) {
				alert("Estamos com um erro de comunicação com o servidor. Tente novamente mais tarde.")
			});

		},
	},
	watch:{
		nome_publico(noSlug){
			this.nome_db = noSlug
				.toLowerCase()
				.replace(/\s/g, '_')
				.replace(/[àáâãäå]/g,"a")
				.replace(/[èéêë]/g,"e")
				.replace(/[ìíîï]/g,"i")
				.replace(/[òóôõö]/g,"o")
				.replace(/[ùúûü]/g,"u")
				.replace(/[æ]/g,"ae")
				.replace(/[ýÿ]/g,"y")
				.replace(/[ñ]/g,"n")
				.replace(/[ç]/g,"c")
				.replace(/[^a-z0-9]/gi,'_')
		}
	}
};
</script>

<style lang="scss" scoped>
div.AdminNovaConsulta {
	h1 {
		margin: 0 0 2rem 0;
		height: 2.4rem;
	};

	form {

		fieldset {
			padding: 0;
			margin: 0 0 2rem 0;
			border: 0;

			legend {
				font-weight: 600;
				padding: 0 0 4px 0;

				span {
					color: #BDBDBD;
					font-weight: initial;
				};
			};

			input, textarea {
				font-family: inherit;
				font-size: inherit;
				color: inherit;
				padding: 8px 10px;
				border: 1px solid #BDBDBD;
				border-radius: 2px;
			};

			legend + input, textarea { width: 100%; };
			textarea { resize: none; height: 80px; }

			input[type=radio] { display: none; };
			input[type=radio] + label.status {
				display: inline-block;
				padding: 8px 10px;
				border-radius: 2px;
				background: #F5F5F5;
				color: #BDBDBD;
				cursor: pointer;
				transition: all ease-in .1s;
			};
			input[type=radio]:checked + label.status {
				background: #333;
				font-weight: 700;
				color: #FFF;
			};

			div {
				background: #F5F5F5;
				padding: 8px 8px 8px 16px;
				margin: 0 0 8px 0;
				width: max-content;
				border-radius: 2px;

				input[type=url], input[type=date] {
					display: inline-block;
					min-width: 240px;
				};

				label:not(.status) {
					display: inline-block;
					vertical-align: middle;
					padding-right: 8px;
				};
			};
		};
	};

	a.acao {
		font-family: inherit;
		font-size: larger;
		color: inherit;
		display: inline-flex;
		flex-flow: column nowrap;
		padding: 10px 16px;
		margin-right: 2rem;
		border: 0;
		border-radius: 2px;
		cursor: pointer;
		border: 4px solid rgba(255, 255, 255, .2);
		color: #FFF;

		i { margin-bottom: 8px; };
		&.limpar { background: #EB5757; };
		&.enviar { background: #008015; };
	};
};
</style>