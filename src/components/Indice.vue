<template>
	<div class="Indice">
		<ul>
			<li v-for="titulo in titulos" :class="{ ativo: titulo.ativo }" :style="{ paddingLeft: titulo.indent + 'rem'}" @click="rolar(titulo.offsetObj)">{{ titulo.nome }}</li>
		</ul>
		<button @click="topo"><i class="material-icons">arrow_upward</i></button>
	</div>
</template>

<script>
export default {
	name: 'Indice',
	props: [ 'titulos' ],
	mounted() {
	},
	updated() {
	},
	methods: {
		rolar(obj) {
			window.scrollBy({
				top: obj.getBoundingClientRect().y - 30,
				left: 0,
				behavior: 'smooth'
			});
		},
		topo() { window.scrollTo({top: 0, behavior: 'smooth'}) },
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
			max-width: 200px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			transition: opacity .1s, max-width ease-in-out .5s;
			border-left: 8px solid transparent;

			&:active, &.ativo {
				border-left-color: #333;
			};

			&:hover {
				opacity: .4;
				text-decoration: none;
				cursor: pointer;
				max-width: 1000px;
			};

			&.sub {
				padding-left: calc(2.8rem - 8px);
			};
		};
	};

	button {
		position: fixed;
		padding: 0;
		bottom: 2rem;
		right: 2rem;
		background: #FFF;
		border-radius: 100%;
		border: 1px solid #BDBDBD;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .12);
		transition: all .1s;
		display: none;

		&:active {
			background: #EB5757;
			color: #FFF;
			border-color: #EB5757;
		};

		i {			
			line-height: 40px;
			height: 40px;
			width: 40px;
		};
	};

	@media (max-width: 800px) {
		ul {
			display: block;
			position: relative;
			height: auto;
			margin: 2rem 0;
			padding: 0 2rem;
			font-size: initial;
			line-height: 1.1;

			li {
				display: inline-block;
				padding: 4px 6px !important;
				margin: 0 4px 4px 0;
				background: #EB5757;
				border-left-width: 0;
				border-radius: 2px;
				color: #FFF;
				max-width: 100%;

				&:hover {
					max-width: 100%;
				};
			};
		};

		button {
			display: inline-block;
		};
	};
};
</style>