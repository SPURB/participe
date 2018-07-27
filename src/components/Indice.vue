<template>
	<div class="Indice">
		<ul>
			<li v-for="titulo in titulos" :class="{ sub: titulo.indent, ativo: titulo.ativo }" @click="rolar(titulo.offset)">{{ titulo.nome }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Indice',
	props: [ 'titulos' ],
	mounted() {
	},
	updated() {
		this.titulos.map(function(index){
			if (window.pageYOffset >= index.offset) {
				console.log('rrrr');
				index.ativo = true;
			};
		});
	},
	methods: {
		rolar(posY) {
			window.scroll({
				top: posY,
				left: 0,
				behavior: 'smooth'
			});
			console.log(posY);
		},
	},
};
</script>

<style lang="scss">

div.Indice {
	z-index: 1;

	ul {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		margin: 0 0 0 -2rem;
		padding: 0;
		height: 100vh;
		list-style-type: none;
		font-family: inherit;
		font-size: small;

		li {
			display: block;
			margin-top: 0;
			margin-bottom: 4px;
			padding-left: calc(2rem - 8px);
			color: #333;
			transition: all .1s;
			border-left: 8px solid transparent;

			&:active, &.ativo {
				border-left-color: #333;
			};

			&:hover {
				opacity: .4;
				text-decoration: none;
				cursor: pointer;
			};

			&.sub {
				padding-left: calc(2.8rem - 8px);
			};
		};
	};

	@media (max-width: 800px) {
		ul {
			display: block;
			position: relative;
			height: auto;
			margin: 2rem 0;
			padding: 0 2rem;
			font-size: small;
			line-height: 1.1;
			text-transform: uppercase;

			li {
				display: inline-block;
				padding: 4px 6px;
				margin: 0 4px 4px 0;
				background: #EB5757;
				border-left-width: 0;
				border-radius: 2px;
				color: #FFF;

				&.sub { padding-left: 4px; }
			};
		};
	};
};
</style>