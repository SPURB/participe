<template>
	<div class="Commentsloader">
		<template v-if="fetching">
			<div class="empty">Carregando contribuições...</div>
		</template>
		<template v-if="!fetching && comments.length > 0">
			<div v-for="(comment, index) in comments" class="comment" :class="{ externo: comment.commentcontext == 'noticia' }" :key="index">
				<i class="icon-diagonal_para_baixo icon extInd" v-if="comment.commentcontext == 'noticia'"><span>diagonal_para_baixo</span></i>
				<div class="name"><i class="icon-pessoa-outline icon"><span>person_outline</span></i>{{ comment.name }}</div>
				<div class="comment_info"><i class="icon-tempo icon"><span>schedule</span></i>{{ filterDate(comment.commentdate) }}</div>
				<div class="comment_info" v-if="comment.commentcontext != 'noticia'"><i class="icon-assunto icon"><span>subject</span></i>Comentou em "{{ comment.commentcontext }}"</div>
				<div class="comment_info" v-if="comment.commentcontext == 'noticia' && comment.urlNoticia != '' && comment.urlNoticia != null"><i class="icon-assunto icon"><span>subject</span></i>Essa é uma contribuição original&nbsp;<a :href="'https://gestaourbana.prefeitura.sp.gov.br/noticias/' + comment.urlNoticia">desta notícia</a></div>
				<div class="comment_info" v-if="comment.commentcontext == 'noticia' && comment.urlNoticia == '' || comment.commentcontext == 'noticia' && comment.urlNoticia == null"><i class="icon-assunto icon"><span>subject</span></i>Essa é uma contribuição externa.</div>
				<p class="content">{{ comment.content }}</p>
			</div>
		</template>
		<template v-if="!fetching && comments.length == 0">
			<div class="empty">Não há nenhuma contribuição nesta consulta.</div>
		</template>
	</div>
</template>

<script>
import { commentsMutations } from '@/mixins/commentsMutations'

export default {
	name: 'CommentsLoader',
	mixins: [ commentsMutations ],
	props: [ 'attr' ],
	computed: {
		idConsulta () { return this.$route.meta.id },
		fetching () { return this.$store.state.comments.fetching },
		comments () {
			return this.$store.state.comments.comments.sort((a, b) => {
				return Date.parse(a.commentdate) > Date.parse(b.commentdate) ? 1 : -1
			})
		},
		idsNoticias () { return this.$store.state.comments.idsNoticias }
	},
	mounted () {
		this.loadIdsNoticias()
	},
	watch: {
		comments () {
			this.decodeComments(this.comments.filter(comment => comment.commentcontext !== 'noticia'))
		},
		idsNoticias (arr) {
			arr ? this.loadThisComments(arr) : false
		}
	},
	methods: {
		loadThisComments (arr) {
			this.$store.dispatch('comments/fetchComments', { id: this.idConsulta, self: this, noticiasIds: arr })
		},
		loadIdsNoticias () {
			this.$store.dispatch('comments/fetchIdsNoticias', { id: this.idConsulta, self: this })
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
	margin: 2rem auto 4rem;
	padding: 0 2rem;
	div.comment {
		position: relative;
		background: $cinza-3;
		padding: 1rem 1.2rem 0.8rem 1.2rem;
		margin: 0 0 1rem 0;
		border-radius: 2px;
		box-shadow: 0 2px 2px $sombra-4;
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
			white-space: pre-line;
		}
		* > i {
			font-size: inherit;
			margin: 0 8px 0 0;
			padding-top: 3px;
			line-height: 1rem;
		}
		&.externo .extInd {
			position: absolute;
			top: calc(1rem - 1px);
			right: calc(1rem - 1px);
			background-color: $sombra-4;
			color: #FFF;
			border-radius: 100%;
			font-size: larger;
		}
	}
	div.empty {
		font-size: smaller;
		line-height: 1.2;
		color: $sombra-3;
		padding: 0.75rem 1rem;
		background-color: $cinza-3;
	}
	@media print {
		display: none;
	}
	@media (max-width: 600px) {
		padding: 0 1rem;
		.comment .content {
			font-size: smaller;
		}
	}
}
</style>
