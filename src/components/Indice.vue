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
	methods: {
		rolar(obj) {
			window.scrollBy({
				top: obj.getBoundingClientRect().y - 30,
				left: 0,
				behavior: 'smooth'
			});
		},
		topo() { window.scrollTo({top: window.innerHeight, behavior: 'smooth'}) },
	},
};
</script>

<style lang="scss">

div.Indice {
	z-index: 0;

	ul {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		position: fixed;
		top: 60px;
		bottom: 0;
		left: 0;
		margin-left: -2rem;
		padding: 0;
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
			transition: opacity .1s, max-width ease-in-out .5s, border-left-color ease-in-out .5s, font-weight .1s;
			border-left: 8px solid transparent;

			&:active, &.ativo {
				border-left-color: #333;
				font-weight: 700;
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
		display: block;
		font-family: inherit;

		&:active {
			background: #EB5757;
			color: #FFF;
			border-color: #EB5757;
		};

		&:hover {
			cursor: pointer;

			&::before { opacity: 1; };
		};

		i {			
			line-height: 40px;
			height: 40px;
			width: 40px;
		};

		&::before {
			content: 'Voltar ao topo';
			position: absolute;
			margin: 4px 0 0 -108px;
			line-height: 32px;
			padding: 0 8px;
			border-radius: 10px;
			opacity: 0;
			transition: all ease-in .1s;
			font-size: 14px;
			color: #333;
		};		

		@media (max-width: 1200px) {
			&::before { display: none; };
		};
	};

	@media (max-width: 1200px) {
		ul {
			display: block;
			position: relative;
			height: auto;
			top: 0;
			margin: 2rem 0;
			padding: 0 2rem;
			font-size: initial;
			line-height: 1.1;
			max-width: unset;

			li {
				display: inline-block;
				padding: 4px 6px !important;
				margin: 0 6px 4px 0;
				background: #EB5757;
				border: 1px solid #EB5757;
				border-left-width: 0;
				border-radius: 2px;
				color: #FFF;
				max-width: 100%;

				&:hover {
					max-width: 100%;
				};
			};

			&::before {
				content: 'Índice';
				display: inline-block;
				padding: 4px 6px !important;
				vertical-align: top;
				margin: 0 6px 4px 0;
				border: 1px solid #EB5757;
				border-radius: 2px;
				color: #EB5757;
				max-width: 100%;				
			};
		};
	};
};
</style>