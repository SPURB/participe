<template>
	<div class="Commentsloader">
		<div v-if="comments" v-for="comment in comments" class="comment">
			<div class="name"><i class="material-icons">person_outline</i>{{ comment.name }}</div>
			<div class="comment_info"><i class="material-icons">schedule</i>{{ filterDate(comment.commentdate) }}</div>
			<div class="comment_info"><i class="material-icons">subject</i>Comentou em "{{ comment.commentcontext }}"</div>
			<p class="content">{{comment.content}}</p>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
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
  computed: { apiPath () { return this.$store.getters.apiPath } },
  mounted () { this.loadThisComments() },
  watch: {
    comments () {
      this.comments ? this.$store.state.commentsLoaded = true : this.$store.state.commentsLoaded = false
      this.decodeComments(this.comments)
    }
  },
  methods: {
    loadThisComments () {
      let app = this
      axios.post(this.apiPath + 'members/search/', {
        'idConsulta': '=' + app.$route.meta.id,
        'public': '=1' }
      )
        .then(function (response) {
          app.comments = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
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
		box-shadow: 0 2px 2px rgba(0, 0, 0, .12);
		div.name {
			font-size: small;
			font-weight: bold;
			display: flex;
		}
		div.comment_info {
			font-size: small;
			color: #BDBDBD;
			display: flex;
		}
		p.content {
			font-family: "Georgia", serif;
			margin: 0.8rem 0 0 0;
			font-size: smaller;
			@media (max-width: 600px) { font-size: initial; }
		}
		* > i {
			font-size: inherit;
			vertical-align: -2px;
			margin: 0 8px 0 0;
			padding-top: 4px;
		}
	}
}
</style>
