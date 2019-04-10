<template>
<div id="app" @keyup.esc="fechaTudo">
	<div :class="{ desligado: interruptor }" id="interruptor" ref="interruptor" @click="fechaTudo"></div>
	<Cabecalho></Cabecalho>
	<MenuLateral></MenuLateral>
	<router-view name="Home"></router-view>
	<router-view name="Anhembi2"></router-view>
	<router-view name="ArcoPinheiros"></router-view>
	<router-view name="WifiLivreSP"></router-view>
	<router-view name="DigilabLivreSP"></router-view>
	<router-view name="VidaSegura"></router-view>
	<router-view name="VilaLeopoldina2"></router-view>
	<router-view name="PortalPrefeitura"></router-view>
	<router-view name="GovernoAberto"></router-view>
	<router-view name="ConcessaoMartinelli"></router-view>
	<router-view name="ArcoPinheiros2"></router-view>

	<Modal v-if="modalState.error">
		<h3 slot="header" class="modal-error">Erro!</h3>
		<!-- <p slot="body">Estamos com um erro de comunicação com o servidor. Tente novamente mais tarde.</p> -->
		<p slot="body">Não foi possível enviar a contribuição. Isso pode ocorrer se você já realizou uma contribuição com o mesmo conteúdo ou se ocorrer alguma falha de conexão com o servidor.</p>
	</Modal>
	<Modal v-if="modalState.success">
		<h3 slot="header" class="modal-success">Obrigado!</h3>
		<div slot="body"><p>Agradecemos a sua contribuição!<br>
		Seu comentário foi enviado e aguarda aprovação da moderação para ser publicado.</p></div>
	</Modal>

	<Rodape></Rodape>
</div>
</template>

<script>
import Cabecalho from '@/components/Cabecalho'
import MenuLateral from '@/components/MenuLateral'
import Rodape from '@/components/Rodape'
import Modal from '@/components/Modal.vue'

export default {
	name: 'Participe',
	components: {
		Cabecalho,
		MenuLateral,
		Rodape,
		Modal
	},
	computed: {
		interruptor () { return this.$store.state.luzApaga },
		isAdmin () { return this.$store.state.isAdmin },
		modalState () { return this.$store.state.modalState }
	},
	created () {
		let app = this
		this.$store.dispatch('fetchConsultas', { self: this })
		window.addEventListener('keydown', function (event) {
			if (event.ctrlKey && event.code === 'KeyP') {
				app.$store.dispatch('imprime')
			}
		})
	},
	mounted () { document.getElementById('carregando').classList.add('some') },
	updated () { this.$refs.interruptor.style.height = this.$el.clientHeight + 'px' },
	methods: {
		setModal (typeOfmodal) {
			this.$store.commit('COMMENT_MODAL_STATUS', typeOfmodal)
		},
		fechaTudo () {
			if (this.$store.state.menuToggle || this.$store.state.apoioToggle) {
				this.$store.state.menuToggle = false
				this.$store.state.apoioToggle = false
				this.$store.state.luzApaga = false
			};
		}
	}
}
</script>

<style lang="scss">
@import 'assets/icones/participe.css';
@import 'assets/icones/participe.custom.scss';
@import 'variables';

* { box-sizing: border-box; };
html { margin: 0; padding: 0; };

body {
	font-family: $font-stack;
	color: #333;
	font-size: 16px;
	line-height: 1.6;
	margin: 0;

	a { text-decoration: none; color: #EB5757; };

	a:hover { text-decoration: underline; };
};

i[class] {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	&::after { visibility: hidden; }
	&:hover { cursor: default; };
};

div#interruptor {
	position: absolute;
	transition: all ease-in-out .2s;
	z-index: 4;

	&.ligado { background: rgba(0, 0, 0, 0); };

	&.desligado {
		background: rgba(0, 0, 0, .72);
		display: block;
		width: 100%;
		height: unset;
	};
};

div#carregando.some { height: 0; }

@media print {
	body { background-color: $preto; }
	div#app { background-color: white; width: 210mm; }
	div#interruptor { display: none; }
	div#carregando { display: none; }
}

</style>
