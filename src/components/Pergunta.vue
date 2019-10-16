<template>
	<div class="Pergunta" :class="{ fetching: enviandoComment, sucesso: sucesso, erro: erro }">
		<main>
			<i class="icon-dialogo icon"><span>dialogo</span></i>
			<p class="text"><slot name="pergunta"></slot></p>
			<button class="modalBtn" @click="toggleModal">?</button>
			<div class="modal" :class="{ hidden: !modalOpen }">
				<p><slot name="info"></slot></p>
				<i class="icon-incorreto icon" @click="toggleModal"><span>incorreto</span></i>
			</div>
		</main>
		<aside>
			<button class="formStart" :class="{ hidden: step !== 0 }">
				<i class="icon-responder icon"><span>responder</span></i>
				<span>Escreva sua resposta</span>
			</button>
			<form>
				<fieldset :class="{ hidden: step !== 1 }">
					<label for="nome">Nome</label>
					<input
						value=""
						id="nome"
						type="text"
						name="name"
						v-validate="'required: true'"
						:class="{ inputErro: errors.has('name') }"
						v-model='form_name'
					>
					<label for="sobrenome">Sobrenome</label>
					<input
						value=""
						id="sobrenome"
						type="text"
						name="surname"
						v-validate="'required: true'"
						:class="{ inputErro: errors.has('surname') }"
						v-model='form_surname'
					>
					<label for="organizacao">Organização (opcional)</label>
					<input
						value=""
						id="organizacao"
						type="text"
						name="organization"
						v-validate="'required: false'"
						v-model='form_organization'
					>
					<label for="email">E-mail</label>
					<input
						value=""
						id="email"
						name="email"
						v-validate="'required|email'"
						:class="{ inputErro: errors.has('email') }"
						type="email"
						v-model='form_email'
					>
				</fieldset>
				<fieldset :class="{ hidden: step !== 2 }">
					<label for="comentario">Comente aqui</label>
					<textarea
						value=""
						id="comentario"
						name="content"
						v-validate="'required: true'"
						:class="{ inputErro: errors.has('content') }"
						v-model='form_content'
					></textarea>
				</fieldset>
			</form>
			<button class="formBtn" :class="{ hidden: step == 0, prox: step == 1, enviar: step == 2 }" @click="formButton">
				<span>Enviar</span>
				<i class="icon-seta_direita icon"><span>seta_direita</span></i>
			</button>
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
			modalOpen: false
		}
	},
	props: {
		attr: {
			id: Number,
			context: String
		}
	},
	mixins: [ commentsCommons ],
	methods: {
		send () {
			let app = this
			app.erro = false
			app.enviandoComment = true
			api.post(process.env.VUE_APP_API_URL + 'members', {
				'idConsulta': app.$route.meta.id,
				'name': app.returnFormNameObject,
				'email': app.form_email,
				'content': app.form_content,
				'public': '0',
				'trash': '0',
				'postid': '1',
				'commentid': app.attr.id,
				'commentcontext': 'contexto!'
			})
				.then(function (response) {
					console.log(app.attr.id)
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
		toggleModal () {
			!this.modalOpen ? this.modalOpen = true : this.modalOpen = false
		},
		formButton () {
			console.log('formButton')
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
	main {
		padding: 1rem;
		& > .icon-dialogo {
			position: absolute;
			top: -0.25rem;
			left: 0.75rem;
			background-color: $cinza-1;
			padding: 0.5rem;
			border-radius: 2rem;
			box-shadow: 0 2px 2px $sombra-2;
		}
		& > p.text {
			margin: 2rem 0 0;
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
			p { margin: 0; }
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
		flex-flow: column nowrap;
		align-items: flex-start;
		height: 6rem;
		& > button.formStart {
			height: 100%;
			border: none;
			background-color: $vermelho;
			color: #FFF;
			font-family: $grotesca;
			font-size: 1rem;
			padding: 0;
			border-radius: 0.25rem;
			box-shadow: 0 2px 4px $sombra-1;
			padding: 0 1.5rem 0 0;
			overflow: hidden;
			.icon-responder {
				display: inline-flex;
				align-items: center;
				height: 100%;
				background-color: $sombra-4;
				padding: 0 1.25rem;
				margin-right: 1.5rem;
				vertical-align: middle;
			}
			&, & > * { cursor: pointer; }
		}
		& > form {
			fieldset {
				transform-origin: left center;
				&.hidden {
					z-index: -1;
					display: none;
				}
			}
		}
		& > button.formBtn {
			display: none;
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
}

</style>
