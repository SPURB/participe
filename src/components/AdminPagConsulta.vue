<template>
	<div class="AdminPagConsulta">
		<h1>{{ $route.params.title }}</h1>
		<section class="hidden" :class="{ show: abreId }" id="identificacao">
			<h2 @click="abreId = !abreId">Identificação <i class="material-icons">keyboard_arrow_down</i></h2>
			<form>
				<fieldset>
					<legend>Nome <span><i class="material-icons editBtn" title="Editar campo" @click="editar(['input_nomePublico'], $event)">edit</i></span></legend>
					<input type="text" id="input_nomePublico" name="input_nomePublico" :value="estaConsulta.nomePublico">
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
						<input type="date" id="input_dataCadastro" name="input_dataCadastro" :value="estaConsulta.dataCadastro">
					</div>
					<div>
						<label for="input_dataFinal">Final</label>
						<input type="date" id="input_dataFinal" name="input_dataFinal" :value="estaConsulta.dataFinal">
					</div>
				</fieldset>
				<fieldset>
					<legend>Texto introdutório <span><i class="material-icons editBtn" title="Editar campo" @click="editar(['input_textoIntro'], $event)">edit</i></span></legend>
					<textarea id="input_textoIntro" maxlength="480" name="input_textoIntro" :value="estaConsulta.textoIntro"></textarea>
				</fieldset>
				<fieldset>
					<legend>Hiperlinks</legend>
					<div>
						<label for="input_urlConsulta">URL da consulta <i class="material-icons editBtn" title="Editar campo" @click="editar(['input_urlConsulta'], $event)">edit</i></label>
						<input type="url" id="input_urlConsulta" name="input_urlConsulta" :value="estaConsulta.urlConsulta">
					</div>
					<div>
						<label for="input_urlCapa">URL da imagem de capa <i class="material-icons editBtn" title="Editar campo" @click="editar(['input_urlCapa'], $event)">edit</i></label>
						<input type="url" id="input_urlCapa" name="input_urlCapa" :value="estaConsulta.urlCapa">
					</div>
					<div>
						<label for="input_urlDevolutiva">URL da devolutiva <i class="material-icons editBtn" title="Editar campo" @click="editar(['input_urlDevolutiva'], $event)">edit</i></label>
						<input type="url" id="input_urlDevolutiva" name="input_urlDevolutiva" :value="estaConsulta.urlDevolutiva">
					</div>
				</fieldset>
			</form>
			<button class="limpar" ref="limpar"><i class="material-icons">clear</i>Cancelar</button>
			<button type="submit" class="enviar" ref="salvar"><i class="material-icons">check_circle</i> Salvar alterações</button>
		</section>
		<section class="hidden" :class="{ show: abreMod }" id="moderacao">
			<h2 @click="abreMod = !abreMod">Moderação <i class="material-icons">keyboard_arrow_down</i></h2>
			<h3>Pendentes <span>{{ commentsPendentes.feed.length }}</span></h3>
				<div class="comentario pendente" v-for="comment in commentsPendentes.feed">
					<div class="comentCtx"><i class="material-icons">reply</i> {{ comment.commentcontext }}</div>
					<div class="coment">
						{{ comment.content }}
						<button @click="abreComment($event)">Ver mais</button>
					</div>
					<div class="comentInfo">
						<div class="autor">
							<span>{{ comment.name }}</span> <span>{{ comment.email }}</span>
						</div>
						<div class="horario">
							<span>{{ comment.commentdate }}</span>
						</div>
					</div>
					<div class="btns">
						<button class="reprovar">Reprovar <i class="material-icons">delete</i></button>
						<button class="aprovar">Aprovar <i class="material-icons">check_circle</i></button>
					</div>
				</div>
			<h3>Aprovados<span>{{ commentsAprovados.feed.length }}</span></h3>
				<div class="comentario aprovado" v-for="comment in commentsAprovados.feed">
					<div class="comentCtx"><i class="material-icons">reply</i> {{ comment.commentcontext }}</div>
					<div class="coment">
						{{ comment.content }}
						<button @click="abreComment($event)">Ver mais</button>
					</div>
					<div class="comentInfo">
						<div class="autor">
							<span>{{ comment.name }}</span> <span>{{ comment.email }}</span>
						</div>
						<div class="horario">
							<span>{{ comment.commentdate }}</span>
						</div>
					</div>
					<div class="btns">
						<button class="reprovar">Reprovar <i class="material-icons">delete</i></button>
						<button class="aprovar">Aprovar <i class="material-icons">check_circle</i></button>
					</div>
				</div>
			<h3>Reprovados <span>{{ commentsReprovados.feed.length }}</span></h3>
				<div class="comentario reprovado" v-for="comment in commentsReprovados.feed">
					<div class="comentCtx"><i class="material-icons">reply</i> {{ comment.commentcontext }}</div>
					<div class="coment">
						{{ comment.content }}
						<button @click="abreComment($event)">Ver mais</button>
					</div>
					<div class="comentInfo">
						<div class="autor">
							<span>{{ comment.name }}</span> <span>{{ comment.email }}</span>
						</div>
						<div class="horario">
							<span>{{ comment.commentdate }}</span>
						</div>
					</div>
					<div class="btns">
						<button class="novamente">Moderar novamente <i class="material-icons">cached</i></button>
					</div>
				</div>
		</section>
	</div>
</template>

<script>
import CommentUn from '@/components/CommentUn'
import axios from 'axios';

export default {
	nome: 'AdminPagConsulta',
	components: { 
		CommentUn
	},
	data() {
		return {
			abreId: false,
			abreMod: false,
		}
	},
	computed:{
		apiPath(){ return this.$store.getters.apiPath},
		consultas(){return this.$store.state.consultas},
		estaConsulta: function() {
			let app = this
			let estaConsulta = {}
			app.consultas.map(function(index) {
				if (app.$route.params.id == index.id) {
					estaConsulta = {
						id: index.id,
						nome: index.nome,
						nomePublico: index.nomePublico,
						dataCadastro: index.dataCadastro,
						dataFinal: index.dataFinal,
						textoIntro: index.textoIntro,
						urlConsulta: index.urlConsulta,
						urlCapa: index.urlCapa,
						urlDevolutiva: index.urlDevolutiva,
						nContribuicoes: index.nContribuicoes
					}
				}
			})
			return estaConsulta
		},
		commentsPendentes() {
			let app = this
			let feed = []
			axios.post(app.apiPath + 'members/search/',{
				"idConsulta":"="+app.estaConsulta.id.toString(),
				"public":"=0",
				"trash":"=0"}
				// ,{
				// 	responseEncoding: 'utf8',
				// 	'Content-Type': 'application/json',
				// }
			)
			.then(function(response) {
				response.data.map(function(index) {
					feed.push(index)
				})
			})
			.catch(function (error){
				console.log(error)
			})
			return { feed }
		},
		commentsAprovados() {
			let app = this
			let feed = []
			axios.post(app.apiPath + 'members/search/',{
				"idConsulta":"="+app.estaConsulta.id.toString(),
				"public":"=1",
				"trash":"=0"}
				// ,{
				// 	responseEncoding: 'utf8',
				// 	'Content-Type': 'application/json',
				// }
			)
			.then(function(response) {
				response.data.map(function(index) {
					feed.push(index)
				})
			})
			.catch(function (error){
				console.log(error)
			})
			return { feed }
		},
		commentsReprovados() {
			let app = this
			let feed = []
			axios.post(app.apiPath + 'members/search/',{
				"idConsulta":"="+app.estaConsulta.id.toString(),
				"public":"=0",
				"trash":"=1"}
				// ,{
				// 	responseEncoding: 'utf8',
				// 	'Content-Type': 'application/json',
				// }
			)
			.then(function(response) {
				response.data.map(function(index) {
					feed.push(index)
				})
			})
			.catch(function (error){
				console.log(error)
			})
			return { feed }
		},
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
		abreComment(event) {
			event.target.parentNode.style.maxHeight = '10000px'
			event.target.style.display = 'none'
		}
	},
	mounted() {
		// console.log(this.estaConsulta) // atencion
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

		&.hidden {			
			max-height: 64px;
			overflow: hidden;
			transition: all ease-in-out .2s;
		};

		&.show {
			max-height: 1000000px;
			transition: all ease-in-out .4s;

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
					line-height: 160%;
				};

				legend + input, textarea { width: 100%; };
				textarea { resize: none; }

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
		padding-bottom: 1rem;

		h3 {
			margin: 1rem 0 0 0;
			background: #333;
			color: #FFF;
			display: block;
			width: min-content;
			padding: 2px 8px;
			border-radius: 2px;
			position: relative;

			span {
				position: absolute;
				background: #EB5757;
				border-radius: 100%;
				font-size: 12px;
				line-height: 16px;
				padding: 2px;
				display: inline-block;
				width: 20px;
				top: -4px;
				color: #FFF;
				text-align: center;
				box-shadow: 0 2px 2px rgba(0, 0, 0, .2);
			};
		};

		div.comentario {
			background: #F5F5F5;
			padding: 1rem;
			margin: 1rem 0 2rem 0;
			border-radius: 2px;
			border-left-width: 8px;
			border-left-style: solid;
			max-width: 720px;

			&.pendente { border-left-color: #BDBDBD; };
			&.aprovado { border-left-color: #008015; };
			&.reprovado { border-left-color: #EB5757; };

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
				max-height: 4.8rem;
				display: inline-block;
				overflow: hidden;
				position: relative;
				transition: all ease-in .4s;

				button {
					position: absolute;
					bottom: 0;
					right: 0;
					font-family: "Roboto", "Segoe UI", "Helvetica", Arial, sans-serif;
					font-weight: 300;
					background: #333;
					border: 0;
					border-radius: 2px;
					color: #FFF;
					padding: 4px 8px;
					cursor: pointer;
					opacity: 0;
					transition: all ease-in .1s;
				};
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

		div.comentario:hover {
			div.coment button { opacity: 1; };
		};
	};
};
</style>