<template>
	<div class="AdminPagConsulta">
		<h1>{{ $route.params.consulta }}</h1>
		<section class="hidden" :class="{ show: abreId }">
			<h2 @click="abreId = !abreId">Identificação <i class="material-icons">keyboard_arrow_down</i></h2>
			<form>
				<fieldset>
					<legend>Nome <span><i class="material-icons editBtn" title="Editar campo" @click="editar(['input_nomePublico'], $event)">edit</i></span></legend>
					<input type="text" id="input_nomePublico" name="input_nomePublico">
				</fieldset>
				<fieldset>
					<legend>Status <span><i class="material-icons editBtn" title="Editar campo" @click="editar(['input_status'], $event)">edit</i></span></legend>
					<input type="radio" id="input_status_aberta" name="input_status" value="1" checked>
					<label for="input_status_aberta" class="status">Consulta aberta</label>
					<input type="radio" id="input_status_encerrada" name="input_status" value="0">
					<label for="input_status_encerrada" class="status">Consulta encerrada</label>
				</fieldset>
				<fieldset>
					<legend>Período da consulta <span><i class="material-icons editBtn" title="Editar campo" @click="editar(['input_dataCadastro', 'input_dataFinal'], $event)">edit</i></span></legend>
					<div>
						<label for="input_dataCadastro">Início</label>
						<input type="date" id="input_dataCadastro" name="input_dataCadastro">
					</div>
					<div>
						<label for="input_dataFinal">Final</label>
						<input type="date" id="input_dataFinal" name="input_dataFinal">
					</div>
				</fieldset>
				<fieldset>
					<legend>Texto introdutório <span><i class="material-icons editBtn" title="Editar campo" @click="editar(['input_textoIntro'], $event)">edit</i></span></legend>
					<textarea id="input_textoIntro" maxlength="480" name="input_textoIntro"></textarea>
				</fieldset>
				<fieldset>
					<legend>Hiperlinks</legend>
					<div>
						<label for="input_urlConsulta">URL da consulta <i class="material-icons editBtn" title="Editar campo" @click="editar(['input_urlConsulta'], $event)">edit</i></label>
						<input type="url" id="input_urlConsulta" name="input_urlConsulta">
					</div>
					<div>
						<label for="input_urlCapa">URL da imagem de capa <i class="material-icons editBtn" title="Editar campo" @click="editar(['input_urlCapa'], $event)">edit</i></label>
						<input type="url" id="input_urlCapa" name="input_urlCapa">
					</div>
					<div>
						<label for="input_urlDevolutiva">URL da devolutiva <i class="material-icons editBtn" title="Editar campo" @click="editar(['input_urlDevolutiva'], $event)">edit</i></label>
						<input type="url" id="input_urlDevolutiva" name="input_urlDevolutiva">
					</div>
				</fieldset>
				<button class="limpar"><i class="material-icons" ref="limpar">clear</i>Cancelar</button>
				<button type="submit" class="enviar" ref="salvar"><i class="material-icons">check_circle</i> Salvar alterações</button>
			</form>
		</section>
		<section class="hidden" :class="{ show: abreMod }">
			<h2 @click="abreMod = !abreMod">Moderação <i class="material-icons">keyboard_arrow_down</i></h2>
			<div class="comentBlock analise">
				<h3>Pendentes</h3>
				<div class="comentario">
					<i class="material-icons">reply</i> Apresentação
					<div>Queria uma estrutura metálica leve que pudesse nascer e descer feito árvore... E que pudesse ser montada no solo pra evitar a construção provisória de um vasto emaranhado de andaimes, possivelmente mais caro do que a própria estrutura de cobertura.</div>
					<div class="comentInfo">
						<span>Nome do autor</span> <span>autor@email.com</span>
						<span>23 de fevereiro de 2018 às 09h33</span>
					</div>
					<div class="btns">
						<button>Reprovar <i class="material-icons">delete</i></button>
						<button>Aprovar <i class="material-icons">check</i></button>
						<button>Moderar novamente <i class="material-icons">cached</i></button>
					</div>
				</div>
			</div>
			<div class="comentBlock aprovados">
				<h3>Aprovados</h3>
			</div>
			<div class="comentBlock reprovados">
				<h3>Reprovados</h3>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	nome: 'AdminPagConsulta',
	data() {
		return {
			abreId: false,
			abreMod: false,
		}
	},
	methods: {
		editar(arr, event) {
			let app = this
			arr.map(function(index) {
				Array.from(app.$el.querySelectorAll('*[name='+index+']')).map(function(index) {
					index.disabled = false
					index.focus()
				})
			})
			event.target.classList.add('desbloqueado')
		},
	},
	mounted() {
		Array.from(this.$el.querySelectorAll('*[name^=input_]')).map(function (index){
			index.disabled = true
			index.addEventListener('change', function() {
				
			})
		})
	},
};
</script>

<style lang="scss" scoped>
div.AdminPagConsulta {
	h1 {
		margin: 0 0 2rem 0;
		height: 2.4rem;
	};

	section {
		margin: 0 0 2rem 0;
		transition: all ease-in-out .8s;

		&.hidden {			
			max-height: 64px;
			overflow: hidden;
		};

		&.show {
			max-height: 400vh;

			h2 i { transform: rotate(180deg); };
		};

		h2 {
			background: #F5F5F5;
			line-height: 64px;
			max-height: 64px;
			padding: 0 12px;
			border-radius: 2px;
			margin: 0 0 1rem 0;
			transition: all ease-in .2s;

			&:hover {
				background: #333;
				color: #FFF;
				cursor: pointer;
			};

			i { vertical-align: middle; transition: transform .1s; };
		};
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
			input[type=radio]:disabled + label.status {
				opacity: .4;
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

		i.editBtn {
			position: relative;
			border-radius: 100%;
			padding: 4px;
			font-size: 16px;
			color: #FFF;
			background: #333;
			vertical-align: top;
			margin: 0 0 0 4px;
			cursor: pointer;
			transition: all ease-in .1s;

			&:hover, &.desbloqueado {
				background: #EB5757;
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

	div.comentBlock {
		h3 {
			margin: 0;
		};
	};
};
</style>