<template>
<div id="app">
	<div :class="{ desligado: interruptor }" id="interruptor" ref="interruptor" @click="fechaMenu"></div>
	<Cabecalho></Cabecalho>
	<MenuLateral></MenuLateral>
	<router-view name="Home"></router-view>
	<router-view name="Anhembi2"></router-view>
	<Rodape></Rodape>
</div>
</template>

<script>
import axios from 'axios';
import Cabecalho from '@/components/Cabecalho';
import MenuLateral from '@/components/MenuLateral';
// import AdminLogin from '@/components/AdminLogin';
// import AdminHome from '@/components/AdminHome';
import Rodape from '@/components/Rodape';

export default {
	name: 'Participe',
	components: {
		Cabecalho,
		MenuLateral,
		Rodape,
	},
	computed: {
		interruptor() { return this.$store.state.luzApaga },
		apiPath() {
			if(location.port == '8080' || location.port == '8082'){
				return 'http://spurbsp163:7080/apiconsultas/' 
			}
			else{
				return 'http://participe.gestaourbana.prefeitura.sp.gov.br/apiconsultas/' 
			}
		}
	},
	created(){
		this.getConsultas();
	},
	updated() {		
		this.$refs.interruptor.style.height = this.$el.clientHeight+'px';
	},
	methods: {
		fechaMenu() {
			if (this.$store.state.menuToggle) {
				this.$store.state.menuToggle = false;
				this.$store.state.luzApaga = false;
			};
		},
		getConsultas(){
			axios.get(this.apiPath+'consultas')
			.then(response => {
				this.$store.state.consultas = response.data.slice().reverse()
			})
			.catch(e => {
				this.errors.push(e)
			})
		},
	},
};
</script>

<style lang="scss">
* { box-sizing: border-box; };
html { margin: 0; padding: 0; };

body {
	font-family: 'Roboto', 'Segoe UI', 'Helvetica', Arial, sans-serif;
	color: #333;
	font-size: 16px;
	line-height: 1.6;
	margin: 0;
	z-index: 0;

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
	transition: all .2s;
	z-index: 2;

	&.ligado { background: transparent; };

	&.desligado {
		background: rgba(0, 0, 0, .72);
		display: block;
		width: 100%;
		height: unset;
	};
};

</style>