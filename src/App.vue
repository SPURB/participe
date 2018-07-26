<template>
<div id="app">
	<div :class="{ preto: menuToggle }" class="lightsOff"></div>
	<Cabecalho></Cabecalho>
	<MenuLateral></MenuLateral>
	<router-view name="Home"></router-view>
	<router-view name="Anhembi2"></router-view>
	<Rodape></Rodape>
</div>
</template>

<script>
import Cabecalho from '@/components/Cabecalho';
import MenuLateral from '@/components/MenuLateral';
import Rodape from '@/components/Rodape';
import consultas from '../static/consultas.json';

export default {
	name: 'Participe',
	components: {
		Cabecalho,
		MenuLateral,
		Rodape,
	},
	data() {
		return {
			consultas: consultas.slice().reverse(),
			menuToggle: false,
		}
	},
};
</script>

<style lang="scss">
* { box-sizing: border-box; };
html { margin: 0; padding: 0; };
i {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	&:hover { cursor: default; };
};

div.lightsOff {
	position: absolute;
	z-index: 2;
	background: transparent;
	transition: all .2s;
	&.preto {
		display: block;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .72);
	};
};


body {
	font-family: 'Roboto', 'Segoe UI', 'Helvetica', Arial, sans-serif;
	color: #333;
	font-size: 16px;
	line-height: 1.6;
	margin: 0;
	a { text-decoration: none; color: #EB5757; };
	a:hover { text-decoration: underline; };
};

</style>