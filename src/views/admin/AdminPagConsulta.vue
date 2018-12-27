<template>
	<div class="AdminPagConsulta">
		<h1>{{ estaSubRota.title }} | id: {{estaSubRota.id}} </h1>
		<section class="hidden" :class="{ show: abreId }" id="identificacao">
			<h2 @click="abreId = !abreId">Identificação <i class="icon-expandir icon "><span>keyboard_arrow_down</span></i></h2>
			<form>
				<fieldset>
					<legend>Nome <span><i
						class="icon-editar icon editBtn"
						title="Editar campo"
						@click="editar(['input_nomePublico'], $event)"><span>edit</span></i></span>
					</legend>
					<input
						name="input_nomePublico"
						type="text"
						id="input_nomePublico"
						v-model="nome_publico"
						>
						<!-- :value="estaConsulta.nomePublico" -->
				</fieldset>

				<fieldset>
					<legend>Status <span><i
						class="icon-editar icon editBtn"
						title="Editar campo"
						@click="editar(['input_status'], $event)"><span>edit</span></i></span>
					</legend>
					<input
						type="radio"
						id="input_status_aberta"
						name="input_status"
						value="1"
						:checked = "ativo == '1'"
						v-model="ativo"
					>
					<label
						for="input_status_aberta"
						class="status">Consulta aberta</label>
					<input
						type="radio"
						id="input_status_encerrada"
						name="input_status"
						value="0"
						:checked = "ativo == '0'"
						v-model="ativo"
					>
					<label for="input_status_encerrada" class="status">Consulta encerrada</label>
				</fieldset>

				<fieldset>
					<legend>Período da consulta <span><i
						class="icon-editar icon editBtn"
						title="Editar campo"
						@click="editar(['input_dataCadastro', 'input_dataFinal'], $event)"><span>edit</span></i></span></legend>
					<div>
						<label for="input_dataCadastro">Início</label>
						<input
							type="date"
							id="input_dataCadastro"
							name="input_dataCadastro"
							v-model="data_cadastro"
						>
					</div>
					<div>
						<label for="input_dataFinal">Final</label>
						<input
							type="date"
							id="input_dataFinal"
							name="input_dataFinal"
							v-model="data_final"
						>
					</div>
				</fieldset>

				<fieldset>
					<legend>Texto introdutório <span><i class="icon-editar icon editBtn" title="Editar campo" @click="editar(['input_textoIntro'], $event)"><span>edit</span></i></span></legend>
					<textarea
						id="input_textoIntro"
						maxlength="480"
						name="input_textoIntro"
						v-model="texto_intro"
					></textarea>
				</fieldset>

				<fieldset>
					<legend>Hiperlinks</legend>
					<div>
						<label for="input_urlConsulta">URL da consulta <i class="icon-editar icon editBtn" title="Editar campo" @click="editar(['input_urlConsulta'], $event)"><span>edit</span></i></label>
						<input
							type="url"
							id="input_urlConsulta"
							name="input_urlConsulta"
							v-model="url_consulta"
						>
					</div>
					<div>
						<label for="input_urlCapa">URL da imagem de capa <i class="icon-editar icon editBtn" title="Editar campo" @click="editar(['input_urlCapa'], $event)"><span>edit</span></i></label>
						<input
							type="url"
							id="input_urlCapa"
							name="input_urlCapa"
							v-model="url_capa"
							>
					</div>
					<div>
						<label for="input_urlDevolutiva">URL da devolutiva <i class="icon-editar icon editBtn" title="Editar campo" @click="editar(['input_urlDevolutiva'], $event)"><span>edit</span></i></label>
						<input
							type="url"
							id="input_urlDevolutiva"
							name="input_urlDevolutiva"
							v-model="url_devolutiva"
							>
					</div>
				</fieldset>
			</form>
			<!-- <button class="limpar" ref="limpar"><i class="material-icons">clear</i>Cancelar</button>
			<button type="submit" class="enviar" ref="salvar"><i class="material-icons">check_circle</i> Salvar alterações</button> -->
			<a class="acao limpar" @click="cancelarAcao" ref="limpar"><i class="icon-incorreto icon"><span>clear</span></i>Cancelar</a>
			<a class="acao enviar" @click="atualizarConsulta" ref="salvar"><i class="icon-adicionar icon"><span>add_circle</span></i> Atualizar consulta</a>
		</section>

		<section
			class="hidden"
			:class="{ show: abreMod }"
			id="moderacao">
			<h2 @click="abreMod = !abreMod">Moderação <i class="icon-expandir icon"><span>keyboard_arrow_down</span></i></h2>

			<p v-show="fetchingContent">carregando...</p>

			<h3>Pendentes <span>{{ commentsPendentes.length }}</span></h3>
				<div class="comentario pendente" v-for="(comment, index) in commentsPendentes" :key="index">
					<div class="comentCtx" @click="abreContexto($event)">
						<i class="icon-responder icon"><span>reply</span></i>
						<p>{{ comment.commentcontext }}</p>
					</div>
					<div class="coment">
						{{ comment.content }}
						<button @click="abreComment($event)">Ver mais</button>
					</div>
					<div class="comentInfo">
						<div class="autor">
							<span>{{ comment.name }} </span> <span>{{ comment.email }}</span>
						</div>
						<div class="horario">
							<span>{{ comment.commentdate }}</span>
						</div>
					</div>
					<div class="btns">
						<button
							@click="moderar('reprovar',comment.memid)"
							class="reprovar">Reprovar <i class="icon-rejeitar icon"><span>delete</span></i>
						</button>

						<button
							@click="moderar('aprovar', comment.memid)"
							class="aprovar">Aprovar <i class="icon-aceitar icon"><span>check_circle</span></i>
						</button>
					</div>
				</div>
			<h3>Aprovados<span>{{ commentsAprovados.length }}</span></h3>
				<div class="comentario aprovado" v-for="(comment, index) in commentsAprovados" :key="index">
					<div class="comentCtx" @click="abreContexto($event)">
						<i class="icon-responder icon"><span>reply</span></i>
						<div>{{ comment.commentcontext }}</div>
					</div>
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
						<button
							@click="moderar('moderar', comment.memid)"
							class="novamente">Moderar novamente <i class="icon-novamente icon"><span>cached</span></i></button>
					</div>
				</div>
			<h3>Reprovados <span>{{ commentsReprovados.length }}</span></h3>
				<div class="comentario reprovado" v-for="(comment, index) in commentsReprovados" :key="index">
					<div class="comentCtx" @click="abreContexto($event)">
						<i class="icon-responder icon"><span>reply</span></i>
						<p>{{ comment.commentcontext }}</p>
					</div>
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
						<button
							@click="moderar('moderar', comment.memid)"
							class="novamente">Moderar novamente <i class="icon-novamente icon"><span>cached</span></i></button>
					</div>
				</div>
		</section>
	</div>
</template>

<script>
// import CommentUn from '@/components/CommentUn'
import axios from 'axios'
import { adminCommon } from '@/mixins/adminCommon'
import { commentsMutations } from '@/mixins/commentsMutations'

export default {
	nome: 'AdminPagConsulta',
	// components: {
	// 	CommentUn
	// },
	mixins: [ adminCommon, commentsMutations ],
	data () {
		return {
			fetchingContent: false,
			abreId: false,
			abreMod: false,
			commentsPendentes: [],
			commentsAprovados: [],
			commentsReprovados: []
		}
	},
	computed: {
		consultas () { return this.$store.state.consultas },
		estaSubRota () { return this.$route.params },
		estaConsulta: function () {
			let app = this
			let estaConsulta = {}
			app.consultas.filter(function (index) {
				if (app.$route.params.id === index.id_consulta) {
					estaConsulta = index
				}
			})
			return estaConsulta
		}
	},
	methods: {
		moderar (type, memberId) {
			const app = this
			let toChange

			switch (type) {
			case 'reprovar': toChange = { 'trash': '1' }; break
			case 'aprovar' : toChange = { 'public': '1' }; break
			case 'moderar' : toChange = { 'trash': '0', 'public': '0' }; break
			}

			axios.put(app.apiPath + 'members/' + memberId, toChange)
				.then(function (response) {
					if (type === 'reprovar') {
						// console.log('reprovar')
						app.commentsPendentes.map(function (index) {
							if (index.memid === memberId) {
								app.commentsReprovados.push(index)
							}
						})
						app.commentsPendentes = app.commentsPendentes.filter(index => index.memid !== memberId)
					}
					if (type === 'aprovar') {
						// console.log('aprovar')
						app.commentsPendentes.map(function (index) {
							if (index.memid === memberId) {
								app.commentsAprovados.push(index)
							}
						})
						app.commentsPendentes = app.commentsPendentes.filter(index => index.memid !== memberId)
					}
					if (type === 'moderar') {
						// console.log('moderar')
						app.commentsAprovados.map(function (index) {
							if (index.memid === memberId) {
								app.commentsPendentes.push(index)
							}
						})
						app.commentsReprovados.map(function (index) {
							if (index.memid === memberId) {
								app.commentsPendentes.push(index)
							}
						})
						app.commentsAprovados = app.commentsAprovados.filter(index => index.memid !== memberId)
						app.commentsReprovados = app.commentsReprovados.filter(index => index.memid !== memberId)
					}
				})
				.catch(function (error) {
					alert('erro')
				})
		},

		atualizarConsulta () {
			// TODO: enviar apenas formulários alterados
			const sendObj = {
				'ativo': this.ativo,
				'dataCadastro': this.data_cadastro,
				'dataFinal': this.data_final,
				'textoIntro': this.texto_intro,
				'nomePublico': this.nome_publico,
				'urlConsulta': this.url_consulta,
				'urlCapa': this.url_capa,
				'urlDevolutiva': this.url_devolutiva
			}
			// console.log(sendObj)
			const app = this
			axios.put(app.apiPath + 'consultas/' + app.estaConsulta.id_consulta, sendObj)
				.then(function (response) {
					// console.log(response)
					alert('Sucesso d~.~b')
					app.$store.dispatch('fetchConsultas', { self: this })
					app.clearInputs()
					app.$router.push('/admin')
				})
				.catch(function (error) {
					alert('Estamos com um erro de comunicação com o servidor. Tente novamente mais tarde.')
				})
		},
		abreComment (event) {
			event.target.parentNode.style.maxHeight = '10000px'
			event.target.style.display = 'none'
		},
		abreContexto (event) {
			event.target.style.whiteSpace = 'normal'
			event.target.style.cursor = 'default'
		},
		carregaComments (idConsulta) {
			this.fetchingContent = true
			const app = this
			let pendentes = []
			let aprovados = []
			let reprovados = []

			axios.post(app.apiPath + 'members/search/', {
				'idConsulta': '=' + idConsulta
			})
				.then(function (response) {
					let allcomments = response.data

					app.decodeComments(allcomments)

					allcomments.map(function (index) {
						if (index.public === '1') {
							aprovados.push(index)
						} else if (index.trash === '1') {
							reprovados.push(index)
						} else {
							pendentes.push(index)
						}
					})

					app.fetchingContent = false
				})
				.catch(function (error) {
					app.fetchingContent = false
					console.log(error)
				})

			this.commentsAprovados = aprovados
			this.commentsReprovados = reprovados
			this.commentsPendentes = pendentes
		},
		resetComments () {
			this.commentsPendentes = []
			this.commentsAprovados = []
			this.commentsReprovados = []
		},
		editar (arr, event) {
			let app = this
			arr.map(function (index) {
				Array.from(app.$el.querySelectorAll('*[name=' + index + ']')).map(function (index) {
					index.disabled = false
					index.focus()
				})
			})
			event.target.classList.add('desbloqueado')
		}
	},
	mounted () {
		this.updateForm()
		this.carregaComments(this.$route.params.id)
		let app = this
		Array.from(this.$el.querySelectorAll('*[name^=input_]')).map(function (index) {
			index.disabled = true
			index.addEventListener('change', function () {
				app.$refs.limpar.style.display = 'inline-flex'
				app.$refs.salvar.style.display = 'inline-flex'
			})
		})
	},
	watch: {
		$route (to, from) {
			this.resetComments()
			this.carregaComments(to.params.id)
			this.updateForm()
		}
	}
}
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
			i {
				display: inline-flex;
				vertical-align: middle;
				align-items: center;
				justify-content: center;
				transition: transform .1s;
			};
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
						display: inline-flex;
						color: #333;
						font-weight: initial;
						font-size: 1.5em;
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
				display: inline-flex;
				align-items: center;
				justify-content: center;
				position: relative;
				border-radius: 100%;
				padding: 1px;
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
		a.acao {
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
				display: flex;
				flex-flow: row nowrap;

				p {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					margin: 0;
					position: relative;
					cursor: pointer;
				};

				i {
					vertical-align: top;
					padding-right: 1rem
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
						display: inline-flex;
						align-items: center;
						vertical-align: middle;
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
