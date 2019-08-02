<template>
	<div class="Commentsloader">
		<template v-if="!commentsLoaded">
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="60 0 40 40" class="carregando">
				<path fill="#E3E3E3" d="M60 4v24a4 4 0 0 0 4 4h28l8 8V4a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4z"/>
				<circle class="bolinha1" cx="70.5" cy="14.9" r="3.4" fill="#FFF"/>
				<circle class="bolinha2" cx="80" cy="14.9" r="3.4" fill="#FFF"/>
				<path class="bolinha3" d="M92.9 15a3.4 3.4 0 1 1-3.4-3.5c1.8 0 3.4 1.5 3.4 3.4z" fill="#FFF"/>
			</svg>
		</template>
		<template v-if="commentsLoaded">
			<div v-for="(comment, index) in comments" class="comment" :key="index">
				<div class="name"><i class="icon-pessoa-outline icon"><span>person_outline</span></i>{{ comment.name }}</div>
				<div class="comment_info"><i class="icon-tempo icon"><span>schedule</span></i>{{ filterDate(comment.commentdate) }}</div>
				<div class="comment_info">
					<template v-if="comment.commentcontext !== 'ext'">
						<i class="icon-assunto icon"><span>assunto</span></i>Comentou em "{{ comment.commentcontext }}"
					</template>
					<template v-else>
						<i class="icon-diagonal_para_baixo icon"><span>diagonal_para_baixo</span></i><a :href="comment.extLink" alt="Acesse a notícia de onde veio essa contribuição">Contribuição externa</a>
					</template>
				</div>
				<p class="content" v-html="comment.content"></p>
				<i v-if="comment.commentcontext === 'ext'" class="icon-diagonal_para_baixo icon extcomment" title="Essa é uma contribuição externa"><span>diagonal_para_baixo</span></i>
			</div>
		</template>
	</div>
</template>

<script>
import api from '@/utils/api'
import apiWpCustom from '@/utils/apiWpCustom'
import { commentsMutations } from '@/mixins/commentsMutations'

export default {
	name: 'CommentsLoader',
	mixins: [ commentsMutations ],
	data () {
		return {
			incomments: [],
			extcommentsids: [],
			extcomments: [],
			error: {
				status: false,
				message: ''
			}
		}
	},
	props: ['attr'],
	computed: {
		routeId () { return this.$route.meta.id },
		commentsLoaded () { return this.$store.state.commentsLoaded },
		comments () { return this.$store.state.comments }
	},
	mounted () {
		this.incomments = this.loadInComments()
		this.loadExtIds()
	},
	watch: {
		comments () {
			if (this.comments) {
				this.$store.state.commentsLoaded = true
			} else {
				this.$store.state.commentsLoaded = false
			}
			// this.decodeComments(this.comments)
		},
		extcommentsids (arr) {
			if (arr.length > 0) this.loadExtComments(arr)
			else this.$store.commit('SET_COMMENTS', this.incomments)
		},
		extcomments () {
			if (this.extcomments) {
				let temp = this.incomments.concat(this.extcomments)
				this.$store.commit('SET_COMMENTS', temp.sort((a, b) => {
					return a.datems < b.datems ? -1 : a.datems > b.datems ? 1 : 0
				}))
			}
		}
	},
	methods: {
		loadExtComments (ids) {
			if (ids) {
				ids.forEach(id => {
					api.get(`${process.env.VUE_APP_API_URL}wp-custom/v1/?noticia-comments=${id}`)
						.then(res => res.data.map(comentario => {
							return {
								'name': decodeURIComponent(escape(comentario.name)),
								'commentdate': comentario.date,
								'datems': Date.parse(comentario.date),
								'commentcontext': 'ext',
								'extLink': 'https://gestaourbana.prefeitura.sp.gov.br/noticias/' + comentario.post_slug,
								'content': decodeURIComponent(escape(comentario.content)).replace(/(?:\r\n|\r|\n)/g, '<br>')
							}
						}))
						.then(res => {
							res.map(comment => {
								this.extcomments.push(comment)
							})
						})
						.catch(error => console.error(error))
				})
			}
			else {
				return false
			}
		},
		loadExtIds () {
			let app = this
			apiWpCustom.get(`consultasNoticias/?idConsulta=${this.$route.meta.id}`)
				.then(res => {
					let extIds = []
					res.data.forEach(id => extIds.push(id.idNoticia))
					return extIds
				})
				.then(res => { this.extcommentsids = res })
				.catch(error => {
					app.error.status = true
					app.error.message = 'Erro na requisição das notícias dessa consulta'
					console.error(error)
				})
		},
		loadInComments () {
			let output = []
			const url = process.env.VUE_APP_API_URL + 'v2/members/?id_consulta=' + this.$route.meta.id + '&public=1'
			api.get(url)
				.then(res => {
					if (res.data[0]) {
						res.data[0].forEach(comentario => {
							let prepComment = {
								'name': decodeURIComponent(escape(comentario.name)),
								'commentdate': comentario.commentdate,
								'datems': Date.parse(comentario.commentdate),
								'commentcontext': decodeURIComponent(escape(comentario.commentcontext)),
								'content': decodeURIComponent(escape(comentario.content)).replace(/(?:\r\n|\r|\n)/g, '<br>')
							}
							output.push(prepComment)
						})
					}
				})
				.catch(error => console.error(error))
			return output
		},
		filterDate (dataString) {
			let d = dataString.slice(8, 10)
			let m = dataString.slice(5, 7)
			let a = dataString.slice(0, 4)
			return d + '/' + m + '/' + a
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

.Commentsloader {
	max-width: 700px;
	margin: 2rem auto;
	padding: 0 2rem;
	& > svg.carregando {
		animation: surge ease-in .48s;
		@keyframes surge {
			from { opacity: 0 }
			to { opacity: 1 }
		}
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
	div.comment{
		background: #F5F5F5;
		padding: 1rem 1.2rem 0.8rem 1.2rem;
		margin: 0 0 1rem 0;
		border-radius: 2px;
		box-shadow: 0 2px 2px $sombra-4;
		position: relative;
		div.name {
			font-size: small;
			font-weight: bold;
			display: flex;
		}
		div.comment_info {
			font-size: small;
			color: $cinza-2;
			display: flex;
		}
		p.content {
			font-family: $serifada;
			margin: 0.8rem 0 0 0;
			padding: 0;
			font-size: 0.96rem;
			word-break: break-word;
		}
		* > i:not(.extcomment) {
			font-size: inherit;
			margin: 0 8px 0 0;
			padding-top: 3px;
			line-height: 1rem;
		}
		i.extcomment {
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			color: #FFF;
			background: $vermelho-tr;
			border-radius: 100%;
		}
	}
	@media screen and (max-width: 600px) {
		padding: 0 1rem;
		div.comment {
			padding: 0.8rem 1rem 0.6rem 1rem;
			p.content {
				font-size: smaller;
			}
		}
	}
	@media print {
		display: none;
	}
}
</style>
