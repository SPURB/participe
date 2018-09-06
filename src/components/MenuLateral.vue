<template>
	<div class="MenuLateral">
		<aside :class="{ aberto: menuToggle }">
			<ul>
				<li class="logo">
					<a href="http://gestaourbana.prefeitura.sp.gov.br/">
						<img src="http://gestaourbana.prefeitura.sp.gov.br/wp-content/themes/gestaourbana-1.4/images/logo_gestao_footer.jpg">
					</a>
				</li>
				<li v-for="consulta in consultas" v-if="consulta.ativo == '1'">
					<a :href="setUrlByType(consulta.urlConsulta)" class="consultaAtiva" @click="fechaMenu">{{ consulta.nomePublico }}</a>
				</li>			
				<li v-for="consulta in consultas" v-if="consulta.ativo == '0'">
					<a :href="setUrlByType(consulta.urlConsulta)">{{ consulta.nomePublico }}</a>
				</li>
			</ul>
		</aside>
	</div>
</template>

<script>
/*

são métodos neste mixin:
setUrlByType(urlOrSlug) 

*/
import { consultasMutations } from '../mixins/consultasMutations' 

	export default {
		name: 'MenuLateral',
		mixins: [ consultasMutations ],
		computed: {
			consultas(){ return this.$store.state.consultas },
			menuToggle() {
				return this.$store.state.menuToggle
			},
		},
		methods: {
			fechaMenu() {
				this.$store.state.menuToggle = false;
				this.$store.state.luzApaga = false;
			},
		},
	};
</script>

<style lang="scss" scoped>

aside {
	position: fixed;
	background: #FFF;
	top: 0;
	left: 0;
	width: 80vw;
	max-width: 400px;
	height: 100vh;
	overflow-y: scroll;
	box-shadow: 8px 0 8px rgba(0, 0, 0, .48);
	transform: translateX(-200%);
	transition: transform ease-in-out .4s;
	z-index: 5;

	i:nth-of-type(1) {
		position: absolute;
		right: 1rem;
		top: 1rem;
		color: #BDBDBD;
		transition: color .1s;

		&:hover { color: #333; cursor: pointer; };
	};

	ul {
		margin: 0;
		padding: 0;

		li:not(.logo) {
			display: block;
			transition: all ease-out .1s;

			a {
				display: block;
				color: #777;
				padding: 1rem;
				transition: all ease-out .1s;

				&.ativo, &:active {
					font-weight: bolder;
					color: #333;
					background: #F5F5F5;
				};

				&:hover {
					text-decoration: none;
					color: #333;
				};
			};

			a.consultaAtiva::after {
				content: 'Em consulta';
				font-size: 10px;
				text-transform: uppercase;
				color: #FFF;
				background-color: #008015;
				padding: 2px 5px;
				border-radius: 2px;
				margin-left: 8px;
				vertical-align: middle;
				white-space: nowrap;
			};

			&:hover { background: #F5F5F5; };
		};

		li:nth-of-type(2) { margin-top: .4rem; };

		li:last-child { margin-bottom: .4rem; };

		li.logo {
			display: block;
			padding: 1rem .6rem .6rem .6rem;
			margin-bottom: -8px;

			a img {	width: min-content; };
		};
	};

	&.aberto { transform: translateX(0); };
};
</style>