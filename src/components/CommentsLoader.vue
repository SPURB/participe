<template>
	<div class="Commentsloader">
		<div v-if="comments" v-for="comment in comments" class="comment">
			<h5 class="name">{{  comment.name }} em <span>{{ filterDate(comment.commentdate) }} </span> disse:</h5>
			<p class="content"> {{comment.content}} 
			<span class="topico">Capítulo comentado: {{ comment.commentcontext }}.</span>
			</p>
		</div>
	</div>
</template>

<script>

import axios from 'axios';
export default {
	name: 'CommentsLoader',
	data () {
		return {
			comments: false,
		}
	},
	props:[
		'attr'
	],
	computed:{ apiPath(){ return this.$store.getters.apiPath} }, 
	mounted(){
		this.loadThisComments()
	},
	watch: {
		comments(){
			this.comments ? this.$store.state.commentsLoaded = true : this.$store.state.commentsLoaded = false
		}
	},

	methods:{
		loadThisComments(){
			let app = this;
			axios.post(this.apiPath + 'members/search/',{
				"idConsulta":"="+app.$route.meta.id,
				"public":"=1"}
				// ,{
					// responseEncoding: 'utf8',
					// 'Content-Type': 'application/json',
				// } 
			)
			.then(function(response) {
				app.comments = response.data
			})
			.catch(function (error){
				console.log(error)
			})
		},
		filterDate(dataString){
			return dataString.slice(0,10)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

.Commentsloader {
	max-width: 700px;
	margin: 2rem auto 4rem auto;
	div.comment{
		margin: 1.2em 0;
		padding-top: 1em;
		border-top: 1px #DCDCD9 solid;
		h5.name{ 
			// padding: 0;
			color: $font-default-grey; 
			font-weight: 700
		}
		p.content {
			// padding: 0;
			font-family: $font-stack;
			font-size: .9em;
			line-height: 1.63em
			// line-height: 1.8em;
		}
		span{
			font-size: 13px
		}
	}
}
</style>