<template>
  <div class="share-group">
	<div class="share-icon">
		<share-icon />
    </div>
    <div class="share-buttons">
		<a :href="whatsappSend" target="_blank" data-cy="share_whatsapp">
			<img :src="imgsrc('share_whatsapp.svg')" alt="Logo do Whatsapp">
		</a>
		<a :href="twitterSend" target="_blank" data-cy="share_twitter">
			<img :src="imgsrc('share_twitter.svg')" alt="Logo do Twitter">
		</a>
		<a :href="facebookSend" target="_blank" data-cy="share_facebook">
			<img :src="imgsrc('share_facebook.svg')" alt="Logo do Facebook">
		</a>
    </div>
  </div>
</template>

<script>
import ShareIcon from './share-icons/ShareIcon'
export default {
	name: 'ShareButtons',
	components: {
		ShareIcon
	},
	props: {
		id: {
			type: Number,
			required: true
		},
		titulo: {
			type: String,
			required: true
		},
		conteudo: {
			type: String,
			required: true
		}
	},
	computed: {
		basePath () { return this.$store.getters.basePath },
		url () {
			let path = window.location.pathname
			let proto = window.location.protocol + '//'
			let host = window.location.host

			if (path.match('comentarios') !== null) {
				path = `${this.$route.meta.pathPai}/comentarios/${this.id}`
			} else {
				path = `${this.$route.path}/comentarios/${this.id}`
			}
			return proto + host + path
		},
		formataConteudo () {
			return this.conteudo.substring(0, 130) + '... '
		},
		whatsappSend () {
			let msg = this.conteudo + `Veja mais: ${this.url}`
			msg = `https://api.whatsapp.com/send?text=${msg}`
			return msg
		},
		facebookSend () {
			let msg = `https://www.facebook.com/sharer/sharer.php?u=${this.url}&quote=${this.titulo}`
			return msg
		},
		twitterSend () {
			let msg = this.formataConteudo + `Veja mais: `
			msg = `https://twitter.com/intent/tweet?url=${this.url}&text=${msg}`
			return msg
		}
	},
	methods: {
		imgsrc (name) { return this.basePath + 'arquivos/img/' + name }
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';
.comentavel:hover > .share-group {
	.share-icon > svg {
		animation: surge ease-in .28s;
		fill: $preto;
	}
}
.share-group {
	.share-buttons {
    display: flex;
		margin-bottom: 8px;

		a {
			color: #FFF;
			text-decoration: none;
      margin: 3px;
		}
	}
	.share-icon {
    display: flex;
    justify-content: center;
    margin: 3px;
  }
}
@keyframes surge {
	from { opacity: 0 }
	to { opacity: 1 }
}
</style>
