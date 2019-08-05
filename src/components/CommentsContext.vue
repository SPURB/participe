<template>
	<div class="comentavel" :class="{ aberto: abreComentario && consultaAtiva }">
		<div class="cortina"></div>
		<div :class="{ sucesso: sucesso }">
			<div class="content-comentario" @click="toggleForm()">
				<div class="icon-counter" @click="toggleForm()">
					<i v-if="!abreComentario" class="icon-comentario icon" @click="toggleForm()"><span>comentario</span></i>
					<!-- filtrar numero (será refatorar CommentsLoader e vuex)-->
					<span v-if="!abreComentario" class="counter-comentario" @click="toggleForm()">89</span>
					<i v-else class="icon-incorreto icon" @click="toggleForm()"><span>incorreto</span></i>
				</div>
				<h1>Escrevendo contribuição sobre o trecho:</h1>
				<slot></slot>
			</div>
		</div>
		<form v-if="consultaAtiva">
			<aside>
				<fieldset>
					<label for="nome">Nome</label>
					<input
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
			</aside>
			<main>
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
					<svg v-if="enviandoComment" width="40" height="40" viewBox="60 0 40 40">
						<path fill="#E3E3E3" d="M60 4v24a4 4 0 0 0 4 4h28l8 8V4a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4z"/>
						<circle class="bolinha1" cx="70.5" cy="14.9" r="3.4"/>
						<circle class="bolinha2" cx="80" cy="14.9" r="3.4"/>
						<path class="bolinha3" d="M92.9 15a3.4 3.4 0 1 1-3.4-3.5c1.8 0 3.4 1.5 3.4 3.4z"/>
					</svg>
					<a @click="checkName" :class="{ enviando: enviandoComment, erro: erro }"></a>
				</div>
			</main>
		</form>
		<p class="consulta-encerrada" v-if="!consultaAtiva">Desculpe, mas o período de participação já foi encerrado.</p>
	</div>
</template>

<script>
import api from '@/utils/api'
import { commentsCommons } from '@/mixins/commentsCommons'

export default {
	name: 'CommentsContext',
	props: {
		id: {
			required: true,
			type: Number
		},
		context: {
			required: false,
			type: String,
			default: 'participe.gestaourbana'
		},
		postid: {
			required: false,
			type: Number,
			default: 1
		}
	},

	mixins: [ commentsCommons ],

	data () {
		return {
			abreComentario: false,
			form_context: null
		}
	},

	watch: {
		abreComentario () {
			document.body.style.overflow = document.body.style.overflow === '' ? 'hidden' : ''
			if (this.abreComentario) {
				window.scrollTo({
					top: this.$el.offsetTop,
					left: 0,
					behavior: 'smooth'
				})
			} else {
				window.scrollTo({
					top: this.$el.offsetTop - 60,
					left: 0,
					behavior: 'smooth'
				})
			}
		}
	},

	computed: {
		consultaAtiva () {
			if (this.$store.getters.consultasClicada !== undefined) {
				if (parseInt(this.$store.getters.consultasClicada.ativo) === 1) {
					return true
				}
			} else { return false }
		},
		toggleFormOrMessage () {
			return (this.abreComentario && this.consultaAtiva)
		}
	},

	methods: {
		toggleForm () {
			this.abreComentario = !this.abreComentario
		},
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
		}
	}
}

</script>

<style lang="scss" scoped>
@import '../variables';

.comentavel {
	position: relative;
	transition: padding ease-in-out .4s;
	div.cortina {
		position: absolute;
		top: 0;
		width: 100vw;
		height: 0;
		z-index: 1;
	}
	& > div:not(.cortina) {
		position: relative;
		margin: 0 auto 1rem;
		max-width: calc(700px - 4rem + 2rem);
		background-color: $cinza-3;
		border-radius: 4px;
		cursor: pointer;
		transition: all ease-in-out .2s;
		z-index: 2;
		&:hover {
			background-color: transparent;
		}
		.content-comentario {
			padding: 0.5rem 0;
			.icon-counter {
				position: absolute;
				top: -4px;
				right: -4rem;
				& > * {
					color: $cinza-2;
					cursor: pointer;
					transition: all ease-in-out .2s;
				}
				i.icon {
					font-size: 1.5rem;
					&.icon-incorreto {
						color: $vermelho;
						&::before {
							font-size: 2.5rem;
						}
					}
				}
				.counter-comentario {
					display: block;
					text-align: center;
					line-height: 1;
				}
			}
			h1 {
				margin: 0.5rem 0 0;
				font-size: 1rem;
				color: $cinza-1;
				max-height: 0;
				overflow: hidden;
				transition: all ease-in-out .2s;
			}
			& > * {
				padding-right: 1rem;
				padding-left: 1rem;
			}
			& > *:last-child, & > *:last-child > *:last-child {
				margin-bottom: 0;
			}
			&:hover {
				.icon, .counter-comentario { color: $preto; }
			}
			&::before {
				content: '“';
				position: absolute;
				top: 3.5rem;
				left: -2rem;
				font-family: $serifada;
				font-size: 6rem;
				color: $cinza-2;
				opacity: 0;
				transition: opacity ease-in .05s;
			}
		}
	}
	& > form {
		max-width: calc(700px - 4rem + 2rem);
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 2rem;
		padding: 0 1rem;
		margin: 0 auto;
		max-height: 0;
		overflow: hidden;
		transition: all ease-in-out .4s;
		z-index: 2;
		fieldset {
			margin: 0;
			padding: 0;
			border: 0;
			label {
				display: block;
				font-size: 0.8rem;
				font-weight: initial;
				text-transform: uppercase;
				color: $cinza-1;
			};
			input, textarea {
				width: 100%;
				font-family: inherit;
				font-size: large;
				height: 2rem;
				line-height: 1.6;
				border: 1px solid $sombra-4;
				border-radius: 2px;
				padding: 8px;
				caret-color: $vermelho;
				&:not(:last-child) {
					margin-bottom: 1rem;
				}
				transition: all ease-in .1s;
				&:focus { border-color: $vermelho; };
				&.inputErro {
					background: $vermelho;
					color: #FFF;
				};
				&.inputAcerto { color: $verde; };
			};
			textarea {
				padding: 0 8px;
				height: 10rem;
				margin-bottom: 1rem;
			};
		};
		div.action {
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
				color: #FFF;
				font-family: inherit;
				font-size: smaller;
				text-transform: uppercase;
				max-width: 100%;
				overflow: hidden;
				width: 100%;
				text-align: center;
				line-height: 3rem;
				border-radius: 4px;
				background: $verde;
				transition: all ease-out .2s;
				position: relative;
				white-space: nowrap;
				&::after { content: 'Enviar contribuição'; }
				&:hover {
					background-color: $verde-tr;
				}
				&.enviando {
					max-width: 0;
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
	}
	& > p.consulta-encerrada {}
	&:active {
		& > div:not(.cortina) {
			background-color: $vermelho-tr;
			transition: none;
		}
	}
	&.aberto {
		background-color: #FFF;
		padding: 4rem 0;
		height: 100vh;
		overflow-y: auto;
		div.cortina {
			height: 100vh;
		}
		& > div:not(.cortina) {
			background-color: transparent;
			.content-comentario {
				h1 {
					margin: 0 0 4rem;
					max-height: 4rem;
				}
				&::before {
					opacity: 1;
					transition: opacity ease-in-out .4s;
					transition-delay: .2s;
				}
			}
		}
		& > form {
			margin: 4rem auto;
			max-height: 100vh;
		}
	}
}

// .comentavel {
// 	margin: 0 auto;
// 	max-width: 700px;
// 	border-radius: 2px;
// 	overflow: hidden;
// 	transition: all ease-in-out .2s;
// 	position: relative;
// 	z-index: 0;

// 	.consulta-encerrada{
// 		display: none;
// 		background-color: $vermelho;
// 		padding: 1em;
// 		color: #FFF
// 	}

// 	&:hover,
// 	&.aberto {
// 		background: $cinza-3;
// 	}
// 	&.aberto {
// 		padding: 1em 0;
// 		margin: 1em auto;
// 		.consulta-encerrada{
// 			display: block
// 		}
// 	}

// 	& > div {
// 		display: grid;
// 		grid-gap: 10px;
// 		grid-template-columns: 30px 1fr;

// 		.icon-counter{
// 			display: flex;
// 			flex-direction: column;
// 			.counter-comentario,
// 			.icon-comentario {
// 				color: $cinza-2;
// 				text-align: center;
// 				transition: color ease-in-out .2s;
// 			}
// 			.icon-comentario{
// 				margin-top: .5rem;
// 			}
// 		}
// 		&:hover {
// 			cursor: pointer;
// 			.counter-comentario,
// 			.icon-comentario {
// 				color: $preto
// 			}
// 		};

// 		&.sucesso {
// 			margin-bottom: 1em;
// 			&::after {
// 				content: 'Comentário enviado';
// 				line-height: 1.3;
// 				background-color: $verde;
// 				padding: .7em;
// 				color: #fff;
// 				grid-column: 1 / 3;
// 				grid-row: 2
// 			}
// 		}
// 	}

// 	& div.content-comentario{
// 		p, ol, ul {
// 			padding-left: 0
// 		}
// 	}

	
// 	@media (max-width: 600px) {
// 		.content-comentario {
// 			padding-left:0;
// 			margin-left: 0
// 		}
// 	}
// 	@media print {
// 		max-width: unset;
// 		user-select: none;
// 		& > div {
// 			display: block;
// 			.icon-counter { display: none; }
// 			.content-comentario {
// 				padding: 0 20mm;
// 				p, ol { padding-right: 0; }
// 			}
// 		}
// 	}
// };
</style>
