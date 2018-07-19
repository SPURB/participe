<template>
<div id="app">
	<header>
		<div class="logo">
			<div><a href="http://gestaourbana.prefeitura.sp.gov.br/"><span>gestão</span><span>urbana</span><span>SP</span></a></div>
			<img src="../src/assets/img/PMSP_cor_transparente.png">
		</div>
		<div class="busca" @click="ativaBusca" title="Digite o que pesquisa e aperte 'Enter'">
			<i class="material-icons">search</i>
			<input ref="busca" type="search" :class="{ focus: buscaClick }" @focusout="desativaBusca">
			<i ref="iconeEnter" class="material-icons">keyboard_return</i>
		</div>
	</header>
	<main>
		<template v-for="consulta in consultas.slice().reverse()">
			<article class="card" :style="{ backgroundImage: 'url(' + consulta.capa + ')' }">
			<div>
				<h1 :class="{ consultaAtiva: consulta.ativo }">{{ consulta.nome }}</h1>
				<p v-if="consulta.ativo">
					<i class="material-icons">date_range</i>
					Consulta iniciada em {{ consulta.dataCadastro }}
				</p>
				<p v-if="!consulta.ativo">
					<i class="material-icons">date_range</i>
					{{ consulta.dataCadastro }} – {{ consulta.dataFinal }}
				</p>
				<p>
					<i class="material-icons">chat_bubble</i>
					{{ consulta.nContribuicoes }} contribuições
				</p>
				<p v-if="consulta.ativo">
					<i class="material-icons">access_time</i>
					XX dias restantes para contribuir
				</p>
			</div>
			<p ref="textoIntro">{{ consulta.textoIntro }}</p>
			<a :href="consulta.urlConsulta">Acessar consulta</a>
		</article>
		</template>
	</main>
	<footer>
		Caso surjam dúvidas ou problemas técnicos, envie um e-mail para: <a href="mailto:imprensasmul@prefeitura.sp.gov.br">imprensasmul@prefeitura.sp.gov.br</a>
	</footer>
</div>
</template>

<script>	
import consultas from '../static/consultas.json';
export default {
	name: 'Participe',
	data() {
		return {
			consultas: consultas,
			buscaClick: false,
		}
	},
	mounted() {
		for (let i = 0; i <= consultas.length; i++) {
			let txtI = this.$refs.textoIntro;
			let nMaxCaracteres = 280;
			txtI[i].innerHTML = txtI[i].innerHTML.substring(0, nMaxCaracteres);
			let limite = txtI[i].innerHTML.toString().lastIndexOf(' ');
			txtI[i].innerHTML = txtI[i].innerHTML.substring(0, limite) + '...';
		};
	},
	methods: {
		ativaBusca() {
			this.buscaClick = true;
			this.$refs.busca.focus();
			this.$refs.iconeEnter.style.opacity = '1';
		},
		desativaBusca() {
			this.buscaClick = false;
			this.$refs.busca.value = '';
			this.$refs.iconeEnter.style.opacity = '0';
		},
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

header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	height: 60px;
	max-height: 120px;
	box-shadow: 0 2px 2px rgba(0, 0, 0, .12);
	background: #F8F8F8;
	div.logo {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
		min-width: calc(280px - 2rem);
		font-size: x-large;
		div a {
			color: unset;
			&:hover { text-decoration: none; };
			span:first-child { color: #BDBDBD; };
			span:nth-child(2) { color: inherit; };
			span:nth-child(3) { color: #EB5757; };
		};
		img {
			margin-left: 2rem;
			max-height: 40px;
			min-height: 32px;
		};
	};
	div.busca {
		position: relative;
		i {
			position: absolute;
			font-size: 24px;
			line-height: 40px;
			color: #BDBDBD;
			padding: 0 10px;
			&:nth-of-type(2) {
				opacity: 0;
				right: 0;
				transition: opacity .25s;
			};
		};
		input {
			float: right;
			width: 40px;
			border: 1px solid #DDD;
			border-radius: 2px;
			height: 40px;
			padding: 6px 8px 6px 36px;
			font-family: inherit;
			font-size: large;
			transition: all ease-in-out .25s;
			caret-color: #EB5757;
			&.focus {
				padding-left: 40px;
				border-color: #EB5757;
				width: 40vw;
			};
		};
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

main {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(160px, 800px));
	grid-gap: 2rem;
	padding: 2rem;

	article.card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 400px 48px;
		border-radius: 2px;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .24);
		background-position: center center;
		background-size: cover;
		transition: transform ease-in-out .1s, box-shadow .1s;
		position: relative;
		z-index: 0;
		overflow: hidden;
		div {
			grid-row: 1 / 2;
			grid-column: 1 / 2;
			display: flex;
			flex-flow: column wrap;
			justify-content: center;
			padding: 16px;
			box-shadow: inset 0px -4px 4px rgba(0, 0, 0, .12);
			position: relative;
			overflow: hidden;
			h1 {
				font-size: xx-large;
				line-height: 120%;
				color: #FFF;
				margin: 0 0 12px 0;
				width: calc(100% - 32px);
				&::before {
					position: absolute;
					top: 16px;
					left: 16px;
					display: block;
					content: 'Consulta encerrada';
					font-size: 12px;
					font-weight: normal;
					text-transform: uppercase;
					text-align: center;
					line-height: 24px;
					white-space: nowrap;
					text-overflow: ellipsis;
					height: 24px;
					padding: 0 8px;
					border-radius: 2px;
					border: 2px solid rgba(255, 255, 255, .24);
					opacity: .5;
					background: rgba(0, 0, 0, .8);
				};
				&.consultaAtiva::before {
					opacity: 1;
					content: 'Em consulta';
					background: #008015;
				};
			};
			& p {
				display: block;
				width: 100%;
				font-family: inherit;
				font-size: small;
				text-shadow: none;
				padding: 0;
				margin: 0;
				color: #FFF;
				background: transparent;
				box-shadow: none;
				margin-bottom: 12px;
				i { vertical-align: text-top; font-size: larger; margin-right: 8px; };
				&:last-child{
					margin-bottom: 0;
				};
			};
		};
		p {
			grid-row: 1 / 2;
			grid-column: 2 / 3;
			align-self: end;
			display: flex;
			font-family: Georgia, serif;
			text-shadow: 0 1px 1px rgba(255, 255, 255, .4);
			padding: 8px 16px;
			box-sizing: content-box;
			margin: 0;
			background: rgba(255, 255, 255, .92);
			box-shadow: inset 0px -4px 4px rgba(0, 0, 0, .12);
			border-radius: 2px 0 0 0;
			z-index: 1;
		};
		a {
			grid-row: 2 / 3;
			grid-column: 1 / span 2;
			display: flex;
			align-items: center;
			padding: 16px;
			background: #FFF;
			text-transform: uppercase;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			z-index: 1;
		};
	};
	article.card::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;		
		background-image: linear-gradient(275deg, rgba(0,0,0,.2), rgba(0,0,0,.8));
		transition: all ease-in-out .2s;
		border-radius: 2px;
		z-index: 0;
	};
	article.card:first-child {
		grid-column: 1 / span all;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: minmax(300px, 60vh) 64px;
		div {
			grid-column: 1 / span 5;
			grid-row: 1 / span all;
			align-items: center;
			box-shadow: none;
			h1 {
				margin: 0 0 2rem 0;
				font-size: 64px;
				line-height: 100%;
				width: 100%;
			};
			p {
				align-self: flex-start;
			};
		};
		p {
			grid-column: 6 / 8;
		};
		a {
			grid-column: 6 / 8;
			justify-content: flex-end;
		};
	};
	article.card:hover {
		box-shadow: 0 8px 8px rgba(0, 0, 0, .24);
		transform: translateY(-2px);
	};
};

footer {
	clear: all;
	background: #eee;
	padding: 16px 32px;
};

@media (max-width: 800px) {
	header {
		div.logo {
			justify-content: space-between;
			width: 100%;
			font-size: large;
		};
		div.busca { display: none; };
	};
	main {
		article.card {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto 48px;
			h1 { padding-top: 2.5rem; };
			p { grid-row: 2 / 3; grid-column: 1 / 2; border-radius: 0; };
			a { grid-row: 3 / 4; grid-column: 1 / 2; };
		};
		article.card:first-child {
			grid-column: unset;
			grid-template-columns: 1fr;
			grid-template-rows: minmax(360px, auto) auto 48px;
			transform: scale(1.06);
			margin-bottom: 1rem;
			&:hover { transform: scale(1.06) translateY(-4px); };
			div {
				grid-column: unset;
				grid-row: 1 / 2;
				flex-flow: column nowrap;
				h1 {
					font-size: 48px;
					line-height: 120%;
					margin: 1rem 0;
					text-align: center;
				};
				p {
					font-size: small;
					&:nth-of-type(1) {
						margin-top: 2rem;
					};
				};
			};
			p { grid-column: unset; font-size: initial; };
			a { grid-column: unset; };
		};
	};
};

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
	main {
		display: block;
		article.card {
			float: left;
			min-width: 260px;
			width: 100%;
			max-width: 540px;
			margin: 0 2rem 2rem 0;
			position: relative;
			div {
				background-image: linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.4)); border-radius: 2px 0 0 2px;
			};
			div h1 { padding-top: 2.5rem; };
			p { max-height: 160px; background: rgba(255, 255, 255, .92); };
			a { width: 100%; };
		};
		article.card::before {
			background-image: none;
		};
		article.card:first-child {
			margin-bottom: 2rem;
			p { font-size: inherit; };
		}
	};
	@media (min-width: 600px) {
		main article.card:first-child {
			min-width: 100%;
			height: 540px;
			position: relative;
			div {
				float: left;
				width: calc(80% - 32px);
				height: 100%;
				box-shadow: none;
				h1 {
					width: 100%;
				};
				p {
					position: relative;
					min-height: 0;
					display: block;
					width: 100%;
					box-shadow: none;
				};
			};
			p {
				position: absolute;
				right: 0;
				width: 20%;
				min-width: 160px;
				min-height: calc(540px - 70px);
				max-height: calc(540px - 70px);
				box-shadow: inset 0px -4px 4px rgba(0, 0, 0, .12);
			};
			a {
				position: absolute;
				bottom: 0;
				right: 0;
				width: calc(20% + 32px);
				min-width: 192px;
				display: block;
				text-align: right;
			};
		};
	};
};

</style>