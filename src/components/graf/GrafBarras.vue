<template>
	<div class="GrafBarras">
		<div class="grafTitulo">Modo principal das viagens<sup>1</sup></div>
		<div id="eixoY" ref="eixoY">
			<div><span>50%</span></div>
			<div><span>40%</span></div>
			<div><span>30%</span></div>
			<div><span>20%</span></div>
			<div><span>10%</span></div>
		</div>
		<div id="eixoX" ref="eixoX">
			<div legenda="1">
				<div class="barra" valor="66" title="6,6%"></div>
				<div class="barra" valor="83" title="8,3%"></div>
			</div>
			<div legenda="2">
				<div class="barra" valor="107" title="10,7%"></div>
				<div class="barra" valor="19" title="1,9%"></div>
			</div>
			<div legenda="3">
				<div class="barra" valor="280" title="28%"></div>
				<div class="barra" valor="244" title="24,4%"></div>
			</div>
			<div legenda="4">
				<div class="barra" valor="9" title="0,9%"></div>
				<div class="barra" valor="7" title="0,7%"></div>
			</div>
			<div legenda="5">
				<div class="barra" valor="8" title="0,8%"></div>
				<div class="barra" valor="32" title="3,2%"></div>
			</div>
			<div legenda="6">
				<div class="barra" valor="414" title="41,4%"></div>
				<div class="barra" valor="280" title="28%"></div>
			</div>
			<div legenda="7">
				<div class="barra" valor="40" title="4%"></div>
				<div class="barra" valor="21" title="2,1%"></div>
			</div>
			<div legenda="8">
				<div class="barra" valor="1" title="0,1%"></div>
				<div class="barra" valor="6" title="0,6%"></div>
			</div>
			<div legenda="9">
				<div class="barra" valor="75" title="7,5%"></div>
				<div class="barra" valor="308" title="30,8%"></div>
			</div>
		</div>
		<ul class="legenda">
			<li>Com origem ou destino no ACP</li>
			<li>Viagens em todo município</li>
		</ul>
		<ul class="legendaBarras">
			<li><span>1</span>Metrô</li>
			<li><span>2</span>Trem</li>
			<li><span>3</span>Ônibus</li>
			<li><span>4</span>Ônibus fretado</li>
			<li><span>5</span>Escolar</li>
			<li><span>6</span>Individual: automóvel</li>
			<li><span>7</span>Individual: moto, táxi, outros</li>
			<li><span>8</span>Bicicleta</li>
			<li><span>9</span>A pé</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'GrafBarras',
	mounted () {
		let total = 500
		let alturaGrafico = this.$refs.eixoY.offsetHeight
		this.$refs.eixoX.style.marginLeft = this.$refs.eixoY.getElementsByTagName('span')[0].offsetWidth + 'px'
		this.$refs.eixoX.style.height = alturaGrafico + 'px'
		Array.from(this.$el.getElementsByClassName('barra')).map(function (index) {
			index.style.height = (index.attributes.valor.value / total) * alturaGrafico + 'px'
		})
	}
}
</script>

<style lang="scss" scoped>
div.GrafBarras {
	width: 100%;
	border-radius: 2px;
	position: relative;
	overflow-x: auto;

	div.grafTitulo {
		font-size: 1rem;
		font-weight: 700;
		text-align: center;
	};

	div#eixoY {
		position: absolute;
		width: 100%;

		div {
			font-size: xx-small;
			height: 20px;
			color: #BDBDBD;
			border-top: 1px dotted #BDBDDB;

			&:last-child { border-bottom: 1px dotted #BDBDDB; };
		};
	};

	div#eixoX {
		display: flex;
		flex-flow: row nowrap;
		overflow-wrap: break-word;
		word-wrap: break-word;
		hyphens: auto;

		div {
			width: 100%;
			display: flex;
			margin: 0 2px;
			position: relative;

			&:first-child { margin-left: 4px; };
			&:last-child { margin-right: 4px; };

			&::after {
				content: attr(legenda);
				font-size: x-small;
				text-transform: uppercase;
				line-height: 100%;
				position: absolute;
				bottom: -24px;
				width: 100%;
				text-align: center;
				background: #BDBDBD;
				color: #FFF;
				padding: 4px 0;
			};

			div.barra {
				display: block;
				align-self: flex-end;
				font-size: x-small;
				text-align: center;
				margin: 0;
				word-break: break-all;
				color: #FFF;
				/*border: 4px solid transparent;*/
				overflow: hidden;
				transition: all ease-in-out .1s;
				border-color: rgba(0, 0, 0, .12);

				&:nth-of-type(1) { background: #333; };
				&:nth-of-type(2) { background: #777; };

				&:hover {
					opacity: .4;
				};
			};
		};
	};

	ul.legenda {
		display: flex;
		flex-flow: row wrap;
		column-gap: 12px;
		list-style-type: none;
		margin: 40px 0 0 0;
		padding: 0;
		font-family: inherit;
		font-size: small;

		li {
			margin: 0;
			padding: 0;
			display: flex;
			align-items: center;

			&::before {
				content: '';
				display: inline-block;
				min-width: 16px;
				height: 16px;
				margin-right: 8px;
			};

			&:nth-of-type(1)::before { background: #333; border: 1px solid rgba(0, 0, 0, .08); };
			&:nth-of-type(2)::before { background: #777; border: 1px solid rgba(0, 0, 0, .08); };
		};
	};

	ul.legendaBarras {
		list-style-type: none;
		padding: 0;
		font-family: inherit;
		font-size: small;
		max-height: 80px;
		overflow-y: auto;
		margin-bottom: 0;

		li {
			margin: 0;
			padding: 0;
			display: flex;
			align-items: center;

			span {
				background: #BDBDBD;
				display: inline-block;
				min-width: 16px;
				height: 16px;
				line-height: 16px;
				text-align: center;
				color: #FFF;
				margin: 0 8px 0 0;
			}
		}
	}
};
</style>
