<template>
	<div class="VideoContent">
		<h3 v-if="titulo">{{ titulo }}</h3>
		<video
			:class="{canvasBorder: addBorder}"
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
		<div class="video-description">
			<p v-if="descricao">{{ descricao }}</p>
			<a :href="srcPath">Baixe este vídeo</a>
		</div>
	</div>
</template>

<script>
/**
* usage
	<VideoContent
		titulo="Conheça a história do edifício"
		descricao="Edifício Martinelli - 2/2"
		poster="arquivos/concessao-martinelli/martinelli-poster.jpg"
		src="arquivos/concessao-martinelli/martinelli-1.mp4"
		width="100%"
		type="video/mp4">
	</VideoContent> -->
*/
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
		},
		addBorder: {
			type: Boolean,
			required: false,
			default: true
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
	.video-description {
		display: flex;
		justify-content: space-between
	}
	h3, p, a {
		margin: 0;
		padding: 0.75rem 1rem;
	}
	p { padding-bottom: 1.25rem }
	video {
		border-radius: 2px;
		&.canvasBorder{
			border-right: 1px solid $cinza-3;
			border-left: 1px solid $cinza-3
		}
		&:hover {
			cursor: pointer
		}
	}

}
</style>
