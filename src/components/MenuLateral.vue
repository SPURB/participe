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
					<a :href="consulta.urlConsulta" class="consultaAtiva" @click="fechaMenu">{{ consulta.nomePublico }}</a>
				</li>			
				<li v-for="consulta in consultas" v-if="consulta.ativo == '0'">
					<a :href="consulta.urlConsulta">{{ consulta.nomePublico }}</a>
				</li>
			</ul>
		</aside>
	</div>
</template>

<script>
export default {
	name: 'MenuLateral',
	computed: {
		menuToggle() { return this.$store.state.menuToggle },
		consultas(){ return this.$store.state.consultas }
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
	z-index: 3;
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

		li {
			display: block;
			padding: .4rem 1rem;

			a {
				display: block;
				color: #666;

				&.ativo {
					color: #333;
					font-weight: bolder;
				};

				&:hover { text-decoration: none; };
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
			};
		};

		li:nth-of-type(2) { margin-top: .4rem; };

		li:last-child { margin-bottom: .4rem; };

		li.logo {
			display: inline-block;
			padding: 1.2rem 1rem .5rem .8rem;
		};
	};

	&.aberto { transform: translateX(0); };
};
</style>