<template>
	<div class="comentavel" :class="{ aberto: abreComentario }" ref="scrollBackRef">
		<div :class="{ sucesso: sucesso }">
			<div class="content-comentario">
				<div class="icon-counter" @click="toggleForm()">
					<i v-if="!abreComentario" class="icon-comentario icon" title="Contribuir neste trecho"><span>comentario</span></i>
					<span v-if="!abreComentario" class="counter-comentario">{{ nCommentsDisplay(comments.length) }}</span>
					<i v-else class="icon-incorreto icon" title="Fechar"><span>incorreto</span></i>
				</div>
				<header v-if="consultaAtiva">
					<i class="icon-editar icon"><span>editar</span></i>
					<h1>Escrevendo contribuição sobre o trecho a seguir</h1>
					<h2>Para cancelar, clique sobre ícone "fechar" ao lado.</h2>
				</header>
				<header v-if="!consultaAtiva">
					<i class="icon-incorreto icon"><span>incorreto</span></i>
					<h1>O período de contribuições para esta consulta está encerrado.</h1>
					<h2>Para fechar clique no ícone ao lado.</h2>
				</header>
				<main ref="heightBackRef" :class="{ fullH: !consultaAtiva }">
					<slot></slot>
				</main>
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
		<aside>
			<caption>
				<i class="icon-responder icon"><span>responder</span></i>
				<h1>Contribuições nestre trecho</h1>
			</caption>
			<p class="empty" v-if="comments.length == 0">Não há contribuições</p>
			<ul>
				<li v-for="(comment, index) in comments" :style="commentsDelay(index)">
					<header>
						<ul>
							<li>
								<i class="icon-pessoa-outline icon"><span>pessoa-outline</span></i>
								{{ comment.name }}
							</li>
							<li>
								<i class="icon-tempo icon"><span>tempo</span></i>
								{{ filterDate(comment.commentdate) }}
							</li>
						</ul>
					</header>
					<main>{{ comment.content }}</main>
				</li>
			</ul>
		</aside>
	</div>
</template>

<script>
import api from '@/utils/api'
import { commentsCommons } from '@/mixins/commentsCommons'
import { commentsMutations } from '@/mixins/commentsMutations'

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
	mixins: [ commentsCommons, commentsMutations ],
	data () {
		return {
			abreComentario: false,
			form_context: null,
			initialHeight: undefined
		}
	},
	watch: {
		abreComentario () {
			document.body.style.overflow = document.body.style.overflow === '' ? 'hidden' : ''
			this.initialHeight = this.$refs.heightBackRef.getBoundingClientRect().height
			if (this.abreComentario) {
				this.$store.commit('SET_COMMENTCONTEXTABERTO', true)
				this.$el.style.height = window.innerHeight + 32 + 'px'
				window.scrollTo({
					top: this.$el.offsetTop,
					left: 0,
					behavior: 'smooth'
				})
			} else {
				this.$store.commit('SET_COMMENTCONTEXTABERTO', false)
				this.$el.style.height = (this.initialHeight + 32) + 'px'
				window.scrollTo({
					top: this.getInitialOffsetY() - 124,
					left: 0,
					behavior: 'smooth'
				})
			}
		},
		comments () {
			this.decodeComments(this.comments)
		}
	},
	computed: {
		consultaAtiva () {
			if (this.$store.getters.consultasClicada !== undefined) {
				if (parseInt(this.$store.getters.consultasClicada.ativo) === 1) {
					return true
				}
			}
			return false
		},
		toggleFormOrMessage () {
			return (this.abreComentario && this.consultaAtiva)
		},
		comments () {
			return this.$store.state.comments.comments.filter(comment => parseInt(comment.commentid) === parseInt(this.contextId))
		},
		contextId () {
			return this.$props.id
		}
	},
	methods: {
		toggleForm () {
			// let estecc = this.$parent.$children.filter(el => el.$el == this.$el)[0]
			// console.log(this.$parent.$children.indexOf(estecc))
			// console.log(estecc)
			this.abreComentario = !this.abreComentario
			if (!this.consultaAtiva) {
				console.log('consulta encerrada')
			}
		},
		getInitialOffsetY () {
			let y = this.$refs.scrollBackRef.offsetTop
			return y
		},
		filterDate (dataString) {
			let d = dataString.slice(8, 10)
			let m = dataString.slice(5, 7)
			let a = dataString.slice(0, 4)
			return d + '/' + m + '/' + a
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
		},
		commentsDelay (factor) {
			let value = parseInt(factor) * 0.05
			return `transition-delay: ${0.2 + value}s;`
		},
		nCommentsDisplay (num) {
			let display = ''
			let n = parseInt(num)
			if (n < 1000) {
				display = n.toString()
			} else if (n > 1000 && n < 99999) {
				display = (n / 1000).toFixed(1) + 'K'
			} else if (n > 100000 && n < 999999) {
				display = (n / 1000).toFixed(0) + 'K'
			} else if (n > 1000000) {
				display = (n / 1000000).toFixed(1) + 'M'
			}
			return display
		}
	}
}

</script>

<style lang="scss" scoped>
@import '../variables';

.comentavel {
	position: relative;
	overflow-y: visible;
	display: inline-block;
	margin: 0 calc((100% - 700px + 2rem)/2) 1rem;
	transition: padding ease-in-out .2s, height ease-out .4s, margin ease-in .2s;
	& > div {
		position: relative;
		margin: 0;
		max-width: calc(700px - 2rem);
		background-color: $cinza-3;
		border-radius: 4px;
		cursor: pointer;
		transition: all ease-in-out .4s;
		&:hover {
			background-color: $vermelho-tr;
		}
		.content-comentario {
			padding: 0.5rem 0;
			.icon-counter {
				position: absolute;
				top: -5px;
				right: -3rem;
				& > * {
					color: $cinza-2;
					cursor: pointer;
					transition: all ease-in-out .2s;
				}
				i.icon {
					font-size: 1.5rem;
					&.icon-incorreto {
						color: $vermelho;
						position: absolute;
						top: 1.5rem;
						left: -6rem;
						&::before {
							font-size: 2.5rem;
						}
						&:hover {
							color: $preto;
						}
					}
				}
				.counter-comentario {
					display: block;
					text-align: center;
					font-size: 0.75rem;
					line-height: 1;
				}
			}
			header {
				max-height: 0;
				overflow: hidden;
				transition: all ease-in-out .2s;
				border-radius: 4px;
				cursor: default;
				padding: 0;
				opacity: 0;
				& > .icon {
					margin: 0 0.5rem 0 -0.25rem;
					color: $cinza-1;
					font-size: 110%;
					&::before { vertical-align: text-top; }
				}
				h1 {
					margin: 0.5rem 0 0;
					font-size: 1rem;
					color: $cinza-1;
					display: inline;
					transition: inherit;

				}
				h2 {
					margin: 0;
					font-size: 0.8rem;
					font-weight: normal;
					color: $sombra-3;
					transition: inherit;
				}
			}
			main {
				overflow-y: auto;
				max-height: 500rem;
				transition: all ease-in-out .4s;
			}
			main > * {
				padding-right: 1rem;
				padding-left: 1rem;
			}
			& > *:last-child, & > *:last-child > *:last-child, & > *:last-child > *:last-child > *:last-child {
				margin-bottom: 0;
			}
			&:hover {
				.icon:not(.icon-editar):not(.icon-incorreto), .counter-comentario { color: $preto; }
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
		opacity: 0;
		transition: opacity .4s, max-height .2s;
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
	& > aside {
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100vh;
		background-color: $cinza-1;
		padding: 2rem 2.5rem;
		transform: scale(0);
		opacity: 0;
		z-index: 1;
		transition: all ease-in-out .2s;
		caption {
			display: block;
			text-align: left;
			color: #FFF;
			i.icon::before {
				vertical-align: top;
			}
			h1 {
				display: inline-block;
				margin: 0 0 0 .5rem;
				line-height: 1;
				font-size: 1.1rem;
			}
		}
		p.empty {
			background-color: $cinza-3;
			max-width: 640px;
			border-radius: 4px;
			padding: 0.75rem 1rem;
			color: $cinza-1;
			opacity: 0;
			transition: opacity ease-in .4s .4s;
		}
		ul {
			list-style-type: none;
			padding: 0;
			margin: 2rem 0 0;
			height: calc(100% - 4rem);
			overflow-y: auto;
			li {
				background-color: #FFF;
				border-radius: 4px;
				padding: 0.75rem 1rem;
				box-shadow: 0 2px 4px $sombra-3;
				max-width: 640px;
				white-space: pre-line;
				opacity: 0;
				transition: all ease-in .4s;
				&:not(:last-child) {
					margin-bottom: 1rem;
				}
				ul {
					margin: 0;
					padding: 0;
					list-style-type: none;
					li {
						padding: 0;
						display: inline-block;
						font-size: smaller;
						color: $cinza-1;
						background-color: transparent;
						border-radius: unset;
						box-shadow: none;
						margin-bottom: 0;
						white-space: normal;
						&:not(:last-child) {
							margin: 0 1rem 0 0;
						}
						i.icon {
							display: inline;
							color: $cinza-2;
							font-size: initial;
							margin-right: -2px;
							&::before {
								vertical-align: text-top;
							}
						}
					}
				}
				main {
					font-family: $serifada;
					margin-top: 0.5rem;
				}
			}
		}
	}
	& > p.consulta-encerrada {
		@keyframes surge {
			0% {
				transform: translateY(-2rem);
				opacity: 0;
			}
			10% {
				transform: translateY(-4rem);
				opacity: 1;
			}
			90% {
				transform: translateY(-4rem);
				opacity: 1;
			}
			100% {
				transform: translateY(-2rem);
				opacity: 0;
			}
		}
		max-width: calc(700px - 6rem);
		margin: 0 auto -2rem;
		padding: 0.5rem 0.75rem;
		background-color: $vermelho;
		font-size: small;
		color: #FFF;
		border-radius: 4px;
		box-shadow: 0 2px 2px $sombra-3;
		z-index: 2;
		transform: translateY(-2rem);
		opacity: 0;
		&.visible {
			animation: surge ease-in-out 4s;
		}
	}
	&:active {
		& > div {
			background-color: $vermelho-tr;
			transition: none;
		}
	}
	&.aberto {
		padding: 2rem 0;
		margin: 0 0 0 2.5rem;
		width: 100%;
		& > div {
			background-color: transparent;
			.content-comentario {
				header {
					max-height: 160px;
					padding: 0.5rem 1rem;
					background-color: $cinza-3;
					opacity: 1;
					transition-delay: .1s;
				}
				& > main {
					max-height: calc(100vh - 480px);
					margin: 1.5rem 0;
					&.fullH {
						max-height: calc(100vh - 10rem);
					}
				}
			}
		}
		& > form {
			margin: 0 0 2rem;
			max-height: 480px;
			opacity: 1;
			transition: all ease-in-out .4s;
			transition: opacity ease-in-out .4s .2s;
		}
		& > aside {
			transform: scale(1);
			left: calc(700px + 0.5rem);
			opacity: 1;
			width: calc(100vw - 700px - 3rem);
			transition: transform ease-in-out .4s;
			p.empty { opacity: 1; }
			& > ul li {
				opacity: 1;
			}
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
