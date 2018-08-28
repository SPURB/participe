<template>
	<div class="AdminNovaConsulta">
		<h1>Nova Consulta</h1>
		<form>
			<fieldset>
				<legend>Nome <span>(obrigatório)</span></legend>
				<input type="text" id="input_nomePublico" required>
			</fieldset>
			<fieldset>
				<legend>Status <span>(obrigatório)</span></legend>
				<input type="radio" id="input_status_aberta" name="input_status" required checked>
				<label for="input_status_aberta" class="status">Consulta aberta</label>
				<input type="radio" id="input_status_encerrada" name="input_status" required>
				<label for="input_status_encerrada" class="status">Consulta encerrada</label>
			</fieldset>
			<fieldset>
				<legend>Período da consulta <span>(obrigatório)</span></legend>
				<div>
					<label for="input_dataCadastro">Início</label>
					<input type="date" id="input_dataCadastro" required :value="periodoPadrao(1)" :max="periodoPadrao(-1)">
				</div>
				<div>
					<label for="input_dataFinal">Final</label>
					<input type="date" id="input_dataFinal" required :value="periodoPadrao(-1)" :min="periodoPadrao(1)">
				</div>
			</fieldset>
			<fieldset>
				<legend>Texto introdutório <span>(obrigatório)</span></legend>
				<textarea id="input_textoIntro" required placeholder="Até 480 caracteres" maxlength="480"></textarea>
			</fieldset>
			<fieldset>
				<legend>Hiperlinks</legend>
				<div>
					<label for="input_urlConsulta">URL da consulta</label>
					<input type="url" id="input_urlConsulta" required placeholder="Obrigatório">
				</div>
				<div>
					<label for="input_urlCapa">URL da imagem de capa</label>
					<input type="url" id="input_urlCapa" required placeholder="Obrigatório">
				</div>
				<div>
					<label for="input_urlDevolutiva">URL da devolutiva</label>
					<input type="url" id="input_urlDevolutiva" required placeholder="Não obrigatório">
				</div>
			</fieldset>
			<button class="limpar"><i class="material-icons">clear</i>Cancelar</button>
			<button type="submit" class="enviar"><i class="material-icons">add_circle</i> Criar consulta</button>
		</form>
	</div>
</template>

<script>
export default {
	nome: 'AdminNovaConsulta',
	methods: {
		periodoPadrao(par) {
			let hoje = new Date() // objeto Date "Date 2018-08-16T14:27:38.500Z"
			let hojeFull = hoje.toISOString().substring(0, hoje.toISOString().indexOf('T')) // "2018-08-16T14:27:38.500Z" -> "2018-08-16"
			let dataFinal = new Date(hoje.setDate(hoje.getDate() + 20)) // soma vinte dias e cria um novo objeto Date
			let dataFinalFull = dataFinal.toISOString().substring(0, dataFinal.toISOString().indexOf('T')) // "2018-08-16T14:27:38.500Z" -> "2018-08-16"
			if (par == 1) { return hojeFull }
			else if (par == -1) { return dataFinalFull }
		},
	},
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

	button {
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