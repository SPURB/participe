<template>
	<div class="comments-loader">
		<template v-if="comments && comments.length > 0">
			<div v-for="(comment, index) in comments" class="comment" :key="index">
				<div class="name"><i class="icon-pessoa-outline icon"><span>person_outline</span></i>{{ comment.name }}</div>
				<div class="comment_info"><i class="icon-tempo icon"><span>schedule</span></i>{{ filterDate(comment.commentdate) }}</div>
				<div class="comment_info"><i class="icon-assunto icon"><span>subject</span></i>Comentou em "{{ comment.commentcontext }}"</div>
				<p class="content">{{comment.content}}</p>
			</div>
		</template>
		<template v-else>
			<h3>Nenhum comentário encontrado.</h3>
		</template>
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
	name: 'CommentsLoader',
	props: ['attr'],
	created () { this.$route.meta.pathPai ? this.IS_THREAD(true) : this.IS_THREAD(false) },
	mounted () { this.loadThisComments() },
	watch: {
		comments (val) {
			this.comments ? this.$store.state.commentsLoaded = true : this.$store.state.commentsLoaded = false
		}
	},
	computed: {
		...mapState('commentsLoader', ['comments'])
	},
	methods: {
		...mapActions('commentsLoader', ['loadThisComments']),
		...mapMutations('commentsLoader', [ 'IS_THREAD' ]),
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

.comments-loader {
	max-width: 700px;
	margin: 2rem auto;
	padding: 0;

	h3 { padding: 0 2rem; }

	.comment{
		background: #F5F5F5;
		padding: 1rem 1.2rem 0.8rem 1.2rem;
		margin: 0 0 1rem 0;
		border-radius: 2px;
		box-shadow: 0 2px 2px $sombra-4;
		.name {
			font-size: small;
			font-weight: bold;
			display: flex;
		}
		.comment_info {
			font-size: small;
			color: $cinza-2;
			display: flex;
		}
		.content {
			font-family: $serifada;
			margin: 0.8rem 0 0 0;
			font-size: smaller;
			@media (max-width: 600px) { font-size: initial; }
		}
		* > i {
			font-size: inherit;
			margin: 0 8px 0 0;
			padding-top: 3px;
			line-height: 1rem;
		}
	}
	@media print {
		display: none;
	}
}
</style>
