<template>
	<div class="AdminPagConsulta">
		<h1>{{ $route.params.title }}</h1>
		<section class="hidden" :class="{ show: abreId }" id="identificacao">
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
			</form>
			<button class="limpar" ref="limpar"><i class="material-icons">clear</i>Cancelar</button>
			<button type="submit" class="enviar" ref="salvar"><i class="material-icons">check_circle</i> Salvar alterações</button>
		</section>
		<section class="hidden" :class="{ show: abreMod }" id="moderacao">
			<h2 @click="abreMod = !abreMod">Moderação <i class="material-icons">keyboard_arrow_down</i></h2>
			<div class="comentBlock analise">
				<h3>Pendentes <span>3</span></h3>
				<div class="comentario">
					<div class="comentCtx"><i class="material-icons">reply</i> Apresentação</div>
					<div class="coment">
						<p>Queria uma estrutura metálica leve que pudesse nascer e descer feito árvore... E que pudesse ser montada no solo pra evitar a construção provisória de um vasto emaranhado de andaimes, possivelmente mais caro do que a própria estrutura de cobertura.</p>
					</div>
					<div class="comentInfo">
						<div class="autor">
							<span>Nome do autor</span> <span>autor@email.com</span>
						</div>
						<div class="horario">
							<span>23 de fevereiro de 2018 às 09h33</span>
						</div>
					</div>
					<div class="btns">
						<button class="reprovar">Reprovar <i class="material-icons">delete</i></button>
						<button class="aprovar">Aprovar <i class="material-icons">check_circle</i></button>
						<!-- <button class="novamente">Moderar novamente <i class="material-icons">cached</i></button> -->
					</div>
				</div>
			</div>
			<div class="comentBlock aprovados">
				<h3>Aprovados</h3>
				<div class="comentario">
					<div class="comentCtx"><i class="material-icons">reply</i> Apresentação</div>
					<div class="coment">
						<p>Queria uma estrutura metálica leve que pudesse nascer e descer feito árvore... E que pudesse ser montada no solo pra evitar a construção provisória de um vasto emaranhado de andaimes, possivelmente mais caro do que a própria estrutura de cobertura.</p>
					</div>
					<div class="comentInfo">
						<div class="autor">
							<span>Nome do autor</span> <span>autor@email.com</span>
						</div>
						<div class="horario">
							<span>23 de fevereiro de 2018 às 09h33</span>
						</div>
					</div>
					<div class="btns">
						<!-- <button class="reprovar">Reprovar <i class="material-icons">delete</i></button> -->
						<!-- <button class="aprovar">Aprovar <i class="material-icons">check_circle</i></button> -->
						<button class="novamente">Moderar novamente <i class="material-icons">cached</i></button>
					</div>
				</div>
			</div>
			<div class="comentBlock reprovados">
				<h3>Reprovados</h3>
				<div class="comentario">
					<div class="comentCtx"><i class="material-icons">reply</i> Apresentação</div>
					<div class="coment">
						<p>Queria uma estrutura metálica leve que pudesse nascer e descer feito árvore... E que pudesse ser montada no solo pra evitar a construção provisória de um vasto emaranhado de andaimes, possivelmente mais caro do que a própria estrutura de cobertura.</p>
					</div>
					<div class="comentInfo">
						<div class="autor">
							<span>Nome do autor</span> <span>autor@email.com</span>
						</div>
						<div class="horario">
							<span>23 de fevereiro de 2018 às 09h33</span>
						</div>
					</div>
					<div class="btns">
						<!-- <button class="reprovar">Reprovar <i class="material-icons">delete</i></button> -->
						<!-- <button class="aprovar">Aprovar <i class="material-icons">check_circle</i></button> -->
						<button class="novamente">Moderar novamente <i class="material-icons">cached</i></button>
					</div>
				</div>
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
		let app = this
		Array.from(this.$el.querySelectorAll('*[name^=input_]')).map(function (index){
			index.disabled = true
			index.addEventListener('change', function() {
				app.$refs.limpar.style.display = 'inline-flex'
				app.$refs.salvar.style.display = 'inline-flex'
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
			background: #BDBDBD;
			color: #FFF;
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

	section#identificacao {
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
			flex-flow: column nowrap;
			padding: 10px 16px;
			margin-right: 2rem;
			border: 0;
			border-radius: 2px;
			cursor: pointer;
			border: 4px solid rgba(255, 255, 255, .2);
			color: #FFF;
			display: none;

			i { margin-bottom: 8px; };
			&.limpar { background: #EB5757; };
			&.enviar { background: #008015; };
		};
	};

	section#moderacao {
		div.comentBlock {
			padding-bottom: 1rem;

			h3 {
				margin: 1rem 0 0 0;
				position: relative;

				span {
					position: absolute;
					background: #EB5757;
					border-radius: 100%;
					font-size: 11px;
					line-height: 11px;
					padding: 2px;
					display: inline-block;
					width: 15px;
					color: #FFF;
					text-align: center;
					top: 0;
					margin-left: -4px;
				};
			};

			div.comentario {
				background: #F5F5F5;
				padding: 1rem 1rem 1rem calc(1rem - 8px);
				margin: .5rem 0 0 0;
				border-radius: 2px;
				border-left-width: 8px;
				border-left-style: solid;

				div.comentCtx {
					color: #777;
					max-width: 100%;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;

					i {
						transform: rotate(180deg);
						vertical-align: top;
					};
				};

				div.coment {
					font-family: 'Georgia', serif;
					font-size: large;
					margin: 1rem 0;

					p { margin: 1rem 0; };
					p:first-child { margin-top: 0; };
					p:last-child { margin-bottom: 0; };
				};

				div.comentInfo {
					color: #777;
					font-size: small;

					div.autor {
						span:first-child {
							font-weight: 700;
							color: #333;
						};
					};
				};

				div.btns {
					text-align: right;

					button {
						margin: 0 .2rem;
						font-family: inherit;
						color: inherit;
						text-transform: uppercase;
						background: transparent;
						border: 0;
						cursor: pointer;

						&:first-child { margin-left: 0; };
						&:last-child { margin-right: 0; };

						i {
							vertical-align: top;
							font-size: larger;
						};

						&.reprovar { color: #EB5757; };
						&.aprovar { color: #008015; };
						&.novamente { color: #333; };
					};
				};
			};

			&.analise {
				div.comentario { border-left-color: transparent; }
			};
			&.aprovados {
				div.comentario { border-left-color: #008015; }
			};
			&.reprovados {
				div.comentario { border-left-color: #EB5757; }
			};
		};
	};
};
</style>