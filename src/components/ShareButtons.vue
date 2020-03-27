<template>
  <div class="share-group">
    <div class="share-icon">
      <share-icon />
    </div>
    <div class="share-buttons">
      <a :href="whatsappSend" target="_blank">
        <whatsapp-icon />
      </a>
      <a :href="twitterSend" class="botao-wpp" target="_blank">
        <twitter-icon />
      </a>
      <a :href="facebookSend" class="botao-wpp" target="_blank">
        <facebook-icon />
      </a>
    </div>
  </div>
</template>

<script>
import ShareIcon from './share-icons/ShareIcon'
import WhatsappIcon from './share-icons/WhatsappIcon'
import FacebookIcon from './share-icons/FacebookIcon'
import TwitterIcon from './share-icons/TwitterIcon'
export default {
	name: 'ShareButtons',
	components: {
		ShareIcon,
		WhatsappIcon,
		FacebookIcon,
		TwitterIcon
	},
	props: {
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
		url () {
			return window.location.href
		},
		formataConteudo () {
			return this.conteudo.substring(0, 300) + '...'
		},
		whatsappSend () {
			let msg = this.formataConteudo + `\n \n \n Veja mais: ${this.url}`
			msg = `https://api.whatsapp.com/send?text=${msg}`
			return msg
		},
		facebookSend () {
			let msg = `https://www.facebook.com/sharer/sharer.php?u=${this.url}&quote=${this.titulo}`
			return msg
		},
		twitterSend () {
			let msg = this.formataConteudo + `\n \n \n Veja mais: `
			msg = `https://twitter.com/intent/tweet?url=${this.url}&text=${msg}`
			return msg
		}
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
