<template>
	<div class="MenuLateral">
		<aside :class="{ aberto: menuToggle }">
			<ul>
				<li class="logo">
					<a href="https://gestaourbana.prefeitura.sp.gov.br/">
						<picture>
							<source type="image/webp" :srcset="logo('arquivos/img/gestaourbana', 'webp')">
							<img :src="logo('arquivos/img/gestaourbana', 'jpg')" alt='Logo Gestão Urbana SP'>
						</picture>
					</a>
				</li>
				<template v-for="(consulta, index) in consultas">
					<li v-if="parse(consulta.ativo)" :key="index">
						<a :href="setUrlByType(consulta.urlConsulta)" class="consultaAtiva" @click="fechaMenu">{{ consulta.nomePublico }}</a>
					</li>
					<li v-else :key="index">
						<a :href="setUrlByType(consulta.urlConsulta)">{{ consulta.nomePublico }}</a>
					</li>
				</template>
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
		consultas () { return this.$store.state.consultas },
		menuToggle () { return this.$store.state.menuToggle },
		logoGestaoUrbana () { return this.$store.getters.basePath + 'arquivos/img/gestaourbana.jpg' }
	},
	updated () {
		this.$el.children[0].scrollTop = 0
	},
	methods: {
		parse (str) { return parseInt(str) },
		logo (name, extension) { return this.$store.getters.basePath + name + '.' + extension },
		fechaMenu () {
			this.$store.state.menuToggle = false
			this.$store.state.luzApaga = false
			document.body.style.overflow = document.body.style.overflow === '' ? 'hidden' : ''
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

aside {
	position: fixed;
	background: #FFF;
	top: 0;
	left: 0;
	width: 80vw;
	max-width: 400px;
	height: 100vh;
	overflow-y: scroll;
	box-shadow: 8px 0 8px $sombra-3;
	transform: translateX(-200%);
	transition: transform ease-in-out .4s;
	z-index: 5;
	* { font-family: $grotesca !important; }

	i:nth-of-type(1) {
		position: absolute;
		right: 1rem;
		top: 1rem;
		color: $cinza-2;
		transition: color .1s;

		&:hover { color: $preto; cursor: pointer; };
	};

	ul {
		margin: 0;
		padding: 0;

		li:not(.logo) {
			display: block;
			transition: all ease-out .1s;
			margin: 0;

			a {
				display: block;
				color: $cinza-1;
				padding: 1rem;
				transition: all ease-out .1s;
				font-size: initial;

				&.ativo, &:active {
					font-weight: bolder;
					color: $preto;
					background: $cinza-3;
				};

				&:hover {
					text-decoration: none;
					border-bottom-color: transparent;
					color: $preto;
				};
			};

			a.consultaAtiva::after {
				content: 'Em consulta';
				font-size: 10px;
				text-transform: uppercase;
				color: #FFF;
				background-color: $verde;
				padding: 2px 5px;
				border-radius: 2px;
				margin-left: 8px;
				vertical-align: middle;
				white-space: nowrap;
			};

			&:hover { background: $cinza-3; };
		};

		li:nth-of-type(2) { margin-top: .4rem; };

		li:last-child { margin-bottom: .4rem; };

		li.logo {
			display: block;
			padding: 1rem .6rem .6rem .6rem;
			margin: 0 0 -8px 0;

			a img { width: min-content; };
			a:hover { border-bottom-color: transparent; }
		};
	};

	&.aberto { transform: translateX(0); };
};
</style>
