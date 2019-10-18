<template>
	<div class="Commentsloader">
		<template v-if="comments">
			<div v-for="(comment, index) in comments" class="comment" :key="index">
				<div class="name"><i class="icon-pessoa-outline icon"><span>person_outline</span></i>{{ comment.name }}</div>
				<div class="comment_info"><i class="icon-tempo icon"><span>schedule</span></i>{{ filterDate(comment.commentdate) }}</div>
				<div class="comment_info"><i class="icon-assunto icon"><span>subject</span></i>Comentou em "{{ comment.commentcontext }}"</div>
				<p class="content">{{comment.content}}</p>
			</div>
		</template>
	</div>
</template>

<script>
import api from '@/utils/api'
import { commentsMutations } from '@/mixins/commentsMutations'

export default {
	name: 'CommentsLoader',
	mixins: [ commentsMutations ],
	data () {
		return {
			comments: false
		}
	},
	props: ['attr'],
	mounted () { this.loadThisComments() },
	watch: {
		comments (val) {
			this.comments ? this.$store.state.commentsLoaded = true : this.$store.state.commentsLoaded = false
			if (val) this.decodeComments(this.comments)
		}
	},
	methods: {
		loadThisComments () {
			let app = this
			const url = process.env.VUE_APP_API_URL + 'v2/members/?id_consulta=' + this.$route.meta.id + '&public=1'
			api.get(url)
				.then(response => { app.comments = response.data[0] })
				.catch(error => console.error(error))
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
	div.comment{
		background: #F5F5F5;
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
