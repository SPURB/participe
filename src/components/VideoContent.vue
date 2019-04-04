<template>
	<div class="VideoContent">
		<h3 v-if="titulo">{{ titulo }}</h3>
		<video
			:controls="controls"
			:width="width"
			:muted="muted">
		<source
			:poster="srcPoster"
			:src="srcPath"
			:type="type">
		<p> Desculpe, o seu browser não suporta vídeos neste formato.
			<a :href="srcPath">Link do arquivo</a>.
		</p>
		</video>
		<p v-if="descricao">{{ descricao }}</p>
	</div>
</template>

<script>
// checar especificações em https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
export default {
	name: 'VideoContent',
	props: {
		titulo: {
			required: false,
			default: false
		},
		descricao: {
			required: false,
			default: false
		},
		src: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		width: {
			type: String,
			required: false
		},
		controls: {
			default: true,
			required: false
		},
		muted: {
			type: Boolean,
			required: false,
			default: false
		},
		poster: {
			required: false,
			default: false
		}
	},
	computed: {
		srcPath () { return this.$store.getters.basePath + this.src },
		srcPoster () { return this.$store.getters.basePath + this.poster }
	}
}
</script>
<style lang='scss' scoped>
@import '../variables';

.VideoContent {
	max-width: 700px;
	margin: 2rem auto;
	background-color: $cinza-3;
	h3, p {
		margin: 0;
		padding: 0.75rem 1rem;
	}
	p { padding-bottom: 1.25rem }
	video {
		border-radius: 2px;
		&:hover {
			cursor: pointer
		}
	}

}
</style>
