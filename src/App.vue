<template>
<div id="app" @keyup.esc="fechaTudo">
	<div :class="{ desligado: interruptor }" id="interruptor" ref="interruptor" @click="fechaTudo"></div>
	<Cabecalho></Cabecalho>
	<MenuLateral></MenuLateral>
	<router-view name="Home"></router-view>
	<router-view name="Anhembi2"></router-view>
	<router-view name="ArcoPinheiros"></router-view>
	<router-view name="AdminLogin"></router-view>
	<router-view name="Admin"></router-view>
	<Rodape></Rodape>
</div>
</template>

<script>
import axios from 'axios';
import Cabecalho from '@/components/Cabecalho';
import MenuLateral from '@/components/MenuLateral';
import Rodape from '@/components/Rodape';

export default {
	name: 'Participe',
	components: {
		Cabecalho,
		MenuLateral,
		Rodape
	},
	computed: { 
		interruptor() { return this.$store.state.luzApaga }, 
	},
	created() { this.$store.dispatch("fetchConsultas", { self: this }) },
	updated() { this.$refs.interruptor.style.height = this.$el.clientHeight+'px'; },
	methods: {
		fechaTudo() {
			if (this.$store.state.menuToggle || this.$store.state.apoioToggle) {
				this.$store.state.menuToggle = false;
				this.$store.state.apoioToggle = false;
				this.$store.state.luzApaga = false;
			};
		}
	},
};
</script>

<style lang="scss">
@import 'variables';

* { box-sizing: border-box; };
html { margin: 0; padding: 0; };
*::selection, *::-moz-selection {
	background: #EB5757;
	color: #FFF;
}

body {
	font-family: $font-stack;
	color: #333;
	font-size: 16px;
	line-height: 1.6;
	margin: 0;

	a { text-decoration: none; color: #EB5757; };

	a:hover { text-decoration: underline; };
};

i {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

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

</style>