<template>
	<div class="share-group">
		<div class="share-icon">
			<i class="icon-compartilhar icon"></i>
			</div>
			<div class="share-buttons">
			<a class="share-buttons__sharer" :href="whatsappSend" target="_blank" data-cy="share_whatsapp">
				<i class="icon-whatsapp icon"></i>
			</a>
			<a class="share-buttons__sharer" :href="twitterSend" target="_blank" data-cy="share_twitter">
				<i class="icon-twitter icon"></i>
			</a>
			<a class="share-buttons__sharer" :href="facebookSend" target="_blank" data-cy="share_facebook">
				<i class="icon-facebook icon"></i>
			</a>
			</div>
	</div>
</template>

<script>
export default {
	name: 'ShareButtons',
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

.icon-compartilhar{
	color: $cinza-2;
	margin-left: 0.25rem;
}

.comentavel:hover {
	.icon-compartilhar {
		animation: surge ease-in-out .28s;
		color: $preto;
	}
}
.share-buttons {
	display: flex;
	flex-direction: row;
}
.share-buttons__sharer {
	width: 22px ;
	height: 22px;
	color: #FFF;
	text-decoration: none;
	margin-right: 3px;
	background-color: $cinza-2;
	border-radius: 3px;
	.icon {
		cursor: pointer;
	};
	transition: background-color 0.14s ease-in-out;
	&:hover {
		background-color: $preto;
	}
}

@keyframes surge {
	from { opacity: 0 }
	to { opacity: 1 }
}
</style>
