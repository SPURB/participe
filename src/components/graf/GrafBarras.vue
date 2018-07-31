<template>
	<div class="GrafBarras">
		<div class="grafTitulo">OODC esperada para cada Coeficiente de Aproveitamento</div>
		<div id="eixoY" ref="eixoY">
			<div>
				<span>R$ 350.000.000</span>
			</div>
			<div>
				<span>R$ 300.000.000</span>
			</div>
			<div>
				<span>R$ 250.000.000</span>
			</div>
			<div>
				<span>R$ 200.000.000</span>
			</div>
			<div>
				<span>R$ 150.000.000</span>
			</div>
			<div>
				<span>R$ 100.000.000</span>
			</div>
			<div>
				<span>R$ 50.000.000</span>
			</div>
		</div>
		<div id="eixoX" ref="eixoX">
			<div legenda="CA 2,0">
				<div class="barra" valor="100901259" title="R$ 100.901.259"></div>
				<div class="barra" valor="184883024" title="R$ 184.883.024"></div>
			</div>
			<div legenda="CA 4,0">
				<div class="barra" valor="151351888" title="R$ 151.351.888"></div>
				<div class="barra" valor="277324537" title="R$ 277.324.537"></div>
			</div>
			<div legenda="CA 5,7">
				<div class="barra" valor="166347932" title="R$ 166.347.932"></div>
				<div class="barra" valor="304427327" title="R$ 304.427.327"></div>
			</div>
		</div>
		<ul class="legenda">
			<li>Valor de Cadastro atual</li>
			<li>Valor de Cadastro da região</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'GrafBarras',
		mounted() {
			let total = 350000000;
			let alturaGrafico = this.$refs.eixoY.offsetHeight;
			this.$refs.eixoX.style.marginLeft = this.$refs.eixoY.getElementsByTagName('span')[0].offsetWidth + 'px';
			this.$refs.eixoX.style.height = alturaGrafico + 'px';
			Array.from(this.$el.getElementsByClassName('barra')).map(function(index) {
				index.style.height = (index.attributes.valor.value/total) * alturaGrafico + 'px';
				index.innerText = 'R$ ' + index.attributes.valor.value.slice(0,3) + '.' + index.attributes.valor.value.slice(3,6) + '.' + index.attributes.valor.value.slice(6,9);
			});
		},
	};
</script>

<style lang="scss" scoped>
div.GrafBarras {
	width: 100%;
	max-width: 700px;
	min-width: 200px;
	margin: 2rem auto;
	padding: 2rem;
	background: #F5F5F5;
	border-radius: 2px;
	position: relative;
	overflow-x: auto;

	div.grafTitulo {
		font-size: 1rem;
		font-weight: 700;
		text-align: center;
		padding: 0 0 .4rem 0;
	};

	div#eixoY {
		position: absolute;
		width: calc(100% - 4rem);

		div {
			font-size: small;
			min-height: 2rem;
			border-top: 1px dotted #BDBDDB;

			&:last-child { border-bottom: 1px dotted #BDBDDB; };
		};
	};

	div#eixoX {
		display: flex;
		flex-flow: row nowrap;

		div {
			width: 100%;
			display: flex;
			margin: 0 1.2%;
			position: relative;

			&:first-child { margin-left: 2.4%; };
			&:last-child { margin-right: 2.4%; };

			&::after {
				content: attr(legenda);
				font-size: small;
				line-height: 1.6rem;
				max-height: 1.6rem;
				display: block;
				position: absolute;
				width: 100%;
				text-align: center;
				bottom: -1.6rem;
			};

			div.barra {
				display: block;
				align-self: flex-end;
				font-size: x-small;
				text-align: center;
				padding: 4px;
				margin: 0;
				word-break: break-all;
				z-index: 2;
				color: #FFF;
				border: 4px solid transparent;
				overflow: hidden;
				transition: all ease-in-out .1s;

				&:nth-of-type(1) { background: #EB5757; };
				&:nth-of-type(2) { background: #AD3D3D; };

				&:hover {
					border-color: rgba(0, 0, 0, .12);
				};
			};
		};
	};

	ul.legenda {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-self: center;
		list-style-type: none;
		margin: 2.6rem 0 0 0;
		padding: 0;
		font-family: inherit;
		font-size: small;

		li {
			margin: 0 12px;
			padding: 0;
			display: flex;
			align-items: center;

			&::before {
				content: '';
				display: inline-block;
				width: 1rem;
				height: 1rem;
				margin-right: 4px;
			};

			&:nth-of-type(1)::before { background: #EB5757; };
			&:nth-of-type(2)::before { background: #AD3D3D; };
		};
	};
};
</style>