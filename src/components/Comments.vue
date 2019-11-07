<template>
	<div class="Comments" :class="{ aberto: abreComentario }">
		<div @click="abreComentario = !abreComentario" :class="{ sucesso: sucesso }"><i class="icon-comentario icon"><span>chat</span></i></div>
		<form>
			<fieldset>
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
			<fieldset>
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
			<div class="action">
				<svg v-if="enviandoComment" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="60 0 40 40">
					<path fill="#E3E3E3" d="M60 4v24a4 4 0 0 0 4 4h28l8 8V4a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4z"/>
					<circle class="bolinha1" cx="70.5" cy="14.9" r="3.4"/>
					<circle class="bolinha2" cx="80" cy="14.9" r="3.4"/>
					<path class="bolinha3" d="M92.9 15a3.4 3.4 0 1 1-3.4-3.5c1.8 0 3.4 1.5 3.4 3.4z"/>
				</svg>
				<a @click="checkName" :class="{ enviando: enviandoComment, erro: erro }"></a>
			</div>
		</form>
	</div>
</template>

<script>
import api from '@/utils/api'
import { commentsCommons } from '@/mixins/commentsCommons'

export default {
	name: 'Comments',
	props: {
		attr: {
			required: true,
			type: Object
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
				'commentcontext': app.attr.context
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
		}
	}
}

</script>

<style lang="scss" scoped>
@import '../variables';

div.Comments {
	margin: 2rem auto 4rem auto;
	max-width: 700px;
	background: $cinza-3;
	border-radius: 2px;
	font-weight: 700;
	max-height: calc(4rem + 40px);
	overflow: hidden;
	transition: all ease-in-out .4s;
	position: relative;
	z-index: 0;

	& > div {
		margin-bottom: 2rem;
		padding: 2rem;
		transition: all ease-in-out .4s;

		&::after { content: 'Comente aqui'; }

		i {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			vertical-align: -8px;
			width: 40px;
			height: 40px;
			font-size: 1.1em;
			background: $preto;
			border-radius: 100%;
			color: #FFF;
			margin: 0px 20px 0 0;
			box-shadow: 0 2px 2px $sombra-3;
		};

		&:hover {
			background: $cinza-2;
			color: #FFF;
			cursor: pointer;
		};

		&.sucesso {
			background: $verde;
			color: #FFF;

			i {
				background: #FFF;
				color: $verde;
			}

			&::after { content: 'Agradecemos a sua contribuição! O comentário estará disponível em breve, após a aprovação da Prefeitura.'; }
		}
	};

	form {
		display: block;
		padding: 0 2rem 2rem 2rem;

		fieldset {
			margin: 0;
			padding: 0;
			border: 0;

			label {
				display: block;
				font-size: initial;
				font-weight: initial;
				height: 30px;
				line-height: 30px;
			};

			input, textarea {
				display: block;
				width: 100%;
				font-family: inherit;
				font-size: large;
				height: 40px;
				line-height: 40px;
				border: 1px solid $cinza-2;
				border-radius: 2px;
				padding: 8px;
				caret-color: $vermelho;
				box-shadow: inset 0 2px 2px rgba(0, 0, 0, .08);
				margin-bottom: .8rem;
				transition: all ease-in .1s;

				&:focus { border-color: $vermelho; };

				&.inputErro {
					background: $vermelho;
					color: #FFF;
				};

				&.inputAcerto { color: $verde; };
			};

			textarea {
				height: 12rem;
				line-height: 160%;
				padding: 4px 8px;
			};
		};

		div.action {
			margin-top: 1rem;
			height: 42px;
			position: relative;
			text-align: right;

			svg {
				position: absolute;
				right: 0;
				top: 0;
				animation: surge ease-in .48s;

				@keyframes surge {
					from { opacity: 0 }
					to { opacity: 1 }
				}

				.bolinha1, .bolinha2, .bolinha3 { fill: #FFF; }

				@keyframes pulando {
					0% {
						transform: translateY(4px);
					}
					50% {
						transform: translateY(2px);
						opacity: 0.95;
					}
					75% {
						transform: translateY(-4px);
						opacity: 0.95;
					}
					100% {
						transform: translateY(-6px);
						opacity: 1;
					}
				}

				.bolinha1 {
					animation: pulando 0.6s 0.45s infinite;
					transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
				}

				.bolinha2 {
					animation: pulando 0.6s 0.55s infinite;
					transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
				}

				.bolinha3 {
					animation: pulando 0.6s 0.66s infinite;
					transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
				}
			}

			a {
				display: inline-block;
				color: inherit;
				font-family: inherit;
				font-size: smaller;
				text-transform: uppercase;
				max-width: 100%;
				overflow: hidden;
				width: 100%;
				text-align: center;
				line-height: 40px;
				border-radius: 2px;
				border: 1px solid $cinza-2;
				background: #FFF;
				box-shadow: 0 2px 2px rgba(0, 0, 0, .24);
				transition: all ease-out .36s;
				position: relative;
				white-space: nowrap;

				&::after { content: 'Comentar'; }

				&.enviando {
					max-width: 0;
					border-color: transparent;
					box-shadow: none;
					background: transparent;
				}

				&.erro {
					background: $vermelho;
					color: #FFF;
					border-color: transparent;

					&::after { content: 'Tentar novamente'; }
				}

				&.erro.enviando { background: transparent; }

				&:hover { text-decoration: none; cursor: pointer; };

				&:focus { border-color: $vermelho; };
			};
		};
	};

	&.aberto { max-height: 1000px; };

	@media (max-width: 600px) { font-size: 20px; }

	@media print {
		display: none;
	}
};
</style>
