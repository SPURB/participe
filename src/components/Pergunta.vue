<template>
	<div class="Pergunta" :class="{ fetching: enviandoComment, sucesso: sucesso, erro: erro }">
		<main>
			<i class="icon-dialogo icon"><span>dialogo</span></i>
			<p class="text"><slot name="pergunta"></slot></p>
			<button class="modalBtn" @click.prevent="toggleModal($event)">?</button>
			<div class="modal" :class="{ hidden: !modalOpen }">
				<p><slot name="info"></slot></p>
				<i class="icon-incorreto icon" @click.prevent="toggleModal($event)"><span>incorreto</span></i>
			</div>
		</main>
		<aside :class="{ tosend: step == 2, enviando: enviandoComment, contentError: errors.has('content') }">
			<button class="formStart" :class="{ hidden: step !== 0 }" @click.prevent="goStep(1)">
				<i class="icon-responder icon"><span>responder</span></i>
				Escreva sua resposta
			</button>
			<form :class="{ hidden: step == 0 || step > 2 }" >
				<fieldset :class="{ hidden: step !== 1 }">
					<div>
						<label for="nome">Nome</label>
						<input
							value=""
							id="nome"
							type="text"
							name="name"
							v-validate="'required: true'"
							:class="{ inputErro: errors.has('name') }"
							v-model='form_name'
							ref="nome"
							@keyup="setFormBtnState(['form_email', 'form_surname', 'form_name' ])"
							@blur="setFormBtnState(['form_email', 'form_surname', 'form_name' ])"
						>
					</div>
					<div>
						<label for="sobrenome">Sobrenome</label>
						<input
							value=""
							id="sobrenome"
							type="text"
							name="surname"
							v-validate="'required: true'"
							:class="{ inputErro: errors.has('surname') }"
							v-model='form_surname'
							@keyup="setFormBtnState(['form_email', 'form_surname', 'form_name' ])"
							@blur="setFormBtnState(['form_email', 'form_surname', 'form_name' ])"
						>
					</div>
					<div>
						<label for="organizacao">Organização (opcional)</label>
						<input
							value=""
							id="organizacao"
							type="text"
							name="organization"
							v-validate="'required: false'"
							v-model='form_organization'
						>
					</div>
					<div>
						<label for="email">E-mail</label>
						<input
							value=""
							id="email"
							name="email"
							v-validate="'required|email'"
							:class="{ inputErro: errors.has('email') }"
							type="email"
							v-model='form_email'
							@keyup="setFormBtnState(['form_email', 'form_surname', 'form_name' ])"
							@blur="setFormBtnState(['form_email', 'form_surname', 'form_name' ])"
						>
					</div>
				</fieldset>
				<fieldset :class="{ hidden: step !== 2 }">
					<textarea
						value=""
						id="comentario"
						name="content"
						v-validate="'required: true'"
						v-model='form_content'
						placeholder="Escreva sua resposta aqui"
						@keyup="setFormBtnState(['form_content'])"
					></textarea>
				</fieldset>
			</form>
			<button class="formBtn" :class="{ hidden: step == 0 || step > 2, prox: step == 1, enviar: step == 2 }" @click.prevent="formButton" :disabled="formBtnState">
				<span>Enviar</span>
				<i class="icon-seta_direita icon"><span>seta_direita</span></i>
			</button>
			<div :class="{ hidden: step < 3, enviando: enviandoComment, erro: erro, sucesso: sucesso }">
				<template v-if="enviandoComment">
					<p class="enviando">Enviando...</p>
				</template>
				<template v-if="erro">
					<p>Ocorreu um erro ao enviar sua resposta</p>
					<button @click.prevent="send">
						<i class="icon-novamente icon"><span>novamente</span></i>
						<span>Tentar novamente</span>
					</button>
				</template>
				<template v-if="sucesso">
					<p>Sua resposta foi enviada</p>
				</template>
			</div>
		</aside>
	</div>
</template>

<script>
import api from '@/utils/api'
import { commentsCommons } from '@/mixins/commentsCommons'

export default {
	name: 'Pergunta',
	data () {
		return {
			step: 0,
			modalOpen: false,
			formBtnState: true
		}
	},
	props: {
		id: {
			type: Number,
			required: true
		},
		postid: {
			type: Number,
			required: true
		},
		context: {
			type: String,
			required: false,
			default: 'Pergunta'
		}
	},
	mixins: [ commentsCommons ],
	methods: {
		send () {
			let app = this
			this.step++
			app.erro = false
			app.enviandoComment = true
			api.post(process.env.VUE_APP_API_URL + 'members', {
				'idConsulta': app.$route.meta.id,
				'name': app.returnFormNameObject,
				'email': app.form_email,
				'content': app.form_content,
				'public': '0',
				'trash': '0',
				'postid': app.postid,
				'commentid': app.id,
				'commentcontext': app.context
			})
				.then(function (response) {
					app.abreComentario = false
					app.sucesso = true
					app.resetForm()
				})
				.catch(function (error) {
					app.erro = true
					console.log(error)
				})
				.then(function () {
					app.enviandoComment = false
				})
		},
		goStep (num) {
			if (this.step === 0) {
				this.checkStorage(['form_name', 'form_surname', 'form_organization', 'form_email'])
				this.setFormBtnState(['form_email', 'form_surname', 'form_name' ])
			}
			this.step = num
		},
		toggleModal (event) {
			!this.modalOpen ? this.modalOpen = true : this.modalOpen = false
		},
		formButton () {
			let storage = window.localStorage
			let app = this
			if (this.step === 1) {
				if (app.errors.items.length == 0) {
					this.goStep(2)
					storage.setItem('form_name', app.form_name)
					storage.setItem('form_surname', app.form_surname)
					storage.setItem('form_organization', app.form_organization)
					storage.setItem('form_email', app.form_email)
				}
				this.setFormBtnState(['form_content'])
			} else if (this.step === 2) {
				this.send()
			}
		},
		setFormBtnState (requiredKeys) {
			let errors = 0
			requiredKeys.forEach(key => {
				if (this[key] === null || this[key] === '') errors++
			})
			if (errors) return this.formBtnState = true
			else return this.formBtnState = false
		}

	}
}

</script>

<style lang="scss" scoped>
@import '../variables';

div.Pergunta {
	margin: 3rem auto;
	max-width: calc(700px - 4rem);
	background-color: $preto;
	border-radius: 0.25rem;
	box-shadow: 0 4px 8px $sombra-3;
	color: #FFF;
	position: relative;
	z-index: 0;
	transition: all ease-in-out .2s;
	main {
		& > .icon-dialogo {
			position: absolute;
			top: -0.25rem;
			left: 0.75rem;
			background-color: $cinza-1;
			padding: 0.5rem;
			border-radius: 2rem;
			box-shadow: 0 2px 2px $sombra-2;
			z-index: 1;
		}
		& > p.text {
			margin: 0;
			padding: 3rem 1rem 1rem;
			font-size: 1.2rem;
		}
		& > button.modalBtn {
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			background-color: transparent;
			padding: 0 0.25rem;
			border: 1px solid rgba(255, 255, 255, .6);
			border-radius: 2rem;
			font-family: $grotesca;
			font-weight: 300;
			line-height: 1rem;
			color: rgba(255, 255, 255, .6);
			&, & > * { cursor: pointer; }
			&:hover {
				border-color: #FFF;
				color: #FFF;
			}
		}
		& > div.modal {
			position: absolute;
			top: 0.45rem;
			right: 0.5rem;
			left: 0.5rem;
			background-color: $cinza-3;
			border-radius: 0.25rem;
			color: $preto;
			font-size: small;
			padding: 0.75rem 1rem;
			border-left: 4px solid $cinza-2;
			transform: scale(1);
			transform-origin: top right;
			transition: transform ease-in .2s;
			z-index: 2;
			p {
				margin: 0;
			}
			& > .icon-incorreto {
				position: absolute;
				top: 0.25rem;
				right: 0.25rem;
				background-color: $vermelho;
				color: #FFF;
				font-size: 75%;
				border-radius: 2rem;
				cursor: pointer;
			}
			&.hidden {
				transform: scale(0);
				transition: transform ease-out .1s;
			}
		}
	}
	aside {
		padding: 1rem;
		background-color: $sombra-4;
		z-index: 0;
		display: flex;
		flex-flow: row nowrap;
		align-items: flex-start;
		justify-content: flex-start;
		overflow-x: hidden;
		overflow-y: auto;
		transition: all ease-in-out .2s;
		&::after {
			content: '';
			position: absolute;
			bottom: -4px;
			right: 0;
			left: 0;
			max-height: 4px;
			height: 100%;
			border-radius: 0 0 4px 4px;
			background-color: rgba(255, 255, 255, .24);
			transition: all ease-in-out .4s;
		}
		& > button.formStart {
			height: 3rem;
			border: none;
			background-color: $vermelho;
			color: #FFF;
			font-family: $grotesca;
			font-size: 1rem;
			padding: 0;
			border-radius: 0.25rem;
			box-shadow: 0 2px 4px $sombra-1;
			padding: 0 1rem 0 0;
			overflow: hidden;
			transition: all ease-in-out .2s;
			transform: translateX(0);
			flex: 0.37;
			text-align: left;
			.icon-responder {
				display: inline-flex;
				align-items: center;
				height: 100%;
				background-color: $sombra-4;
				padding: 0 0.75rem;
				margin-right: 0.75rem;
				vertical-align: middle;
			}
			&, & > * { cursor: pointer; }
			&:hover {
				background-color: $vermelho-escuro;
			}
			&.hidden {
				transform: translateX(-2rem);
				opacity: 0;
				user-select: none;
				z-index: -1;
				flex: 0;
				padding: 0;
				height: 0;
			}
		}
		& > form {
			height: 100%;
			width: 100%;
			flex: 1;
			opacity: 1;
			transition: all ease-in-out .2s;
			fieldset {
				height: 100%;
				width: 100%;
				min-width: 0;
				padding: 0;
				margin: 0;
				border: none;
				transform-origin: left center;
				& > div {
					display: inline-block;
					width: calc(25% - 0.75rem);
					&:not(:first-child) { margin-left: 1rem; }
					label {
						display: block;
						font-size: small;
						line-height: 1;
						padding-bottom: 0.25rem;
						color: $cinza-2;
						white-space: pre;
					}
					input {
						width: 100%;
						border-radius: 2px;
						border: none;
						background-color: rgba(255, 255, 255, .08);
						border-bottom: 2px solid rgba(255, 255, 255, .16);
						padding: 0.25rem 0.45rem;
						font-family: $grotesca;
						color: #FFF;
						transition: all ease-in .1s;
						&:focus { border-color: #FFF; }
						&.inputErro {
							border-color: $vermelho;
						}
					}
				}
				& > textarea {
					width: 100%;
					height: 100%;
					min-height: 4rem;
					margin: 0;
					padding: 0;
					background-color: transparent;
					border: none;
					font-family: $grotesca;
					color: #FFF;
				}
				&.hidden {
					z-index: -1;
					display: none;
					max-height: 0;
					flex: 0;
				}
			}
			&.hidden {
				opacity: 0;
				max-width: 0;
			}
		}
		& > button.formBtn {
			position: absolute;
			bottom: 0.75rem;
			right: 0.75rem;
			border: none;
			padding: 0.5rem;
			border-radius: 2rem;
			background-color: $vermelho;
			font-family: $grotesca;
			font-size: 1rem;
			color: #FFF;
			box-shadow: 0 2px 4px $sombra-1;
			display: flex;
			align-items: center;
			opacity: 1;
			transition: all ease-in-out .2s;
			&, & > * { cursor: pointer; }
			& > .icon { user-select: none; }
			& > span {
				display: inline-block;
				letter-spacing: -0.47rem;
				max-width: 0px;
				overflow: hidden;
				transition: all ease-in-out .2s;
			}
			&.enviar {
				& > span {
					padding-left: 0.25rem;
					letter-spacing: 0;
					max-width: 10rem;
				}
			}
			&.hidden { opacity: 0; }
			&:active { background-color: $vermelho-escuro; }
			&:disabled {
				background-color: $cinza-2;
				color: $cinza-1;
			}
		}
		& > div {
			display: flex;
			max-width: 100%;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			opacity: 1;
			p {
				margin: 0;
			}
			button {
				background-color: transparent;
				padding: 0;
				border: none;
				font-family: $grotesca;
				color: #FFF;
				font-size: 1rem;
				&, & > * {
					cursor: pointer;
				}
			}
			&.hidden {
				opacity: 0;
				max-width: 0;
			}
		}
		&.tosend {
			background-color: rgba(255, 255, 255, .04);
			&::after {
				bottom: 0;
			}
			&.contentError::after {
				background-color: $vermelho;
			}
		}
		&.enviando {
			&::after {
				bottom: 0;
				max-height: 100%;
			}
		}
	}
	&.fetching {
		main {
			.icon-dialogo {
				@keyframes blink {
					from {
						color: #FFF;
						background-color: $cinza-1;
					}
					to {
						color: $cinza-1;
						background-color: $cinza-3;
					}
				}
				animation: blink infinite alternate ease-in-out .5s;
			}
		}
	}
	&.sucesso {
		background-color: $verde;
	}
	&.erro {
		background-color: $vermelho;
	}
	@media (max-width: 700px) {
		margin: 2rem 1rem;
		max-width: 100%;
		main {
			& > p.text {
				margin: 1.5rem 0 0;
				font-size: 1rem;
			}
		}
		aside {
			button.formStart {
				min-width: 100%;
				&.hidden { min-width: 0; }
			}
			form {
				min-width: 100%;
				&.hidden {
					min-width: 0;
				}
				fieldset {
					width: 100%;
					flex-flow: column nowrap;
					& > div {
						width: 100%;
						&:not(:first-child) {
							margin-left: 0;
							margin-top: 0.5rem;
						}
					}
					& > textarea {
						height: 6rem;
					}
				}
			}
			& > div {
				flex-flow: column nowrap;
				align-items: flex-start;
				p {
					font-size: small;
				}
				button {
					margin-top: 0.5rem;
				}
			}
		}
	}
}

</style>
