<template>
	<div class="Home">
		<main id="listaProjetos">
			<!-- <div class="busca" @click="ativaBusca">
				<i class="material-icons">search</i>
				<input class="fuzzy-search" type="search" ref="busca" title="Digite o que pesquisa" value="Pesquisar" @focusout="desativaBusca">
			</div> -->
			<ul class="list">
				<li v-for="consulta in consultas" class="card" :style="{ backgroundImage: 'url(' + consulta.urlCapa + ')' }">
					<p class="nome">{{ consulta.nomePublico }}</p>
					<p class="textoIntro">{{ consulta.textoIntro }}</p>
					<div>
						<a :href="consulta.urlConsulta">
							<h1 :class="{ consultaAtiva: parseAtivo(consulta.ativo) }" class="nome">{{ consulta.nomePublico }}</h1>
						</a>
						<p v-if="consulta.ativo" title="Período da consulta">
							<i class="material-icons">date_range</i>
							Consulta iniciada em {{ dataDisplay(consulta.dataCadastro) }}
						</p>
						<p v-if="!consulta.ativo" title="Período da consulta">
							<i class="material-icons">date_range</i>
							{{ dataDisplay(consulta.dataCadastro) }}–{{ dataDisplay(consulta.dataFinal) }}
						</p>
						<p title="Número de contribuições">
							<i class="material-icons">chat_bubble</i>
							{{ consulta.nContribuicoes }} contribuições
						</p>
							<!--<p v-if="consulta.ativo" title="Tempo restante para contribuir">
							<i class="material-icons">access_time</i>
							{{ diasRestantes(consulta.dataFinal) }}
						</p>-->
						<p v-if="consulta.urlDevolutiva" class="linkSistemat">
							<a href="#">
								{{ consulta.urlDevolutiva }}
								<i class="material-icons">launch</i>
							</a>
						</p>
					</div>
					<p ref="textoIntro" class="esconde textoIntro"><a :href="consulta.urlConsulta">{{ consulta.textoIntro }}</a></p>
					<a :href="consulta.urlConsulta" class="acesso">Acessar consulta</a>
				</li>
			</ul>
		</main>
	</div>
</template>

<script>
export default {
	name: 'Home',
	computed:{
		consultas(){return this.$store.state.consultas }
	},
	mounted() {
		// let listaProjetos = new List('listaProjetos', {
		// 	valueNames: [ 'nome', 'textoIntro' ],
		// });
	},
	methods: {
		parseAtivo(state){
			return state == '0' ? false : true
		}, 
		ativaBusca() {
			this.$refs.busca.value = '';
			this.$refs.busca.style.color = '#333';
		},
		desativaBusca() {
			this.$refs.busca.value='Pesquisar'
			this.$refs.busca.style.color = '#BDBDBD';
		},
		dataDisplay(data) {
			return data.substring(8,10) + '/' + data.substring(5,7) + '/' + data.substring(0,4);
		},
		diasRestantes(data) {
			// if(data != null || data != '' ){
				let hoje = new Date();
				let dataFinal = new Date(data.substring(0,4), data.substring(5,7)-1, data.substring(8,10));
				let dias = Math.round((dataFinal - hoje)/(1000 * 60 * 60 * 24))+1;
				if (dias <= 0) {
					return 'Não é mais possível contribuir';
				} else { return dias + ' dias restantes para contribuir' };
			// }
		},
	},
};
</script>

<style lang="scss" scoped>
	main {
		div.busca {
			position: relative;
			padding: 2rem 2rem 0 2rem;
			z-index: 0;
			i {
				position: absolute;
				font-size: 24px;
				line-height: 40px;
				color: #BDBDBD;
				padding: 0 10px;
			};
			input {
				width: 100%;
				border: 1px solid #DDD;
				border-radius: 2px;
				height: 40px;
				padding: 6px 8px 6px 40px;
				font-family: inherit;
				font-size: large;
				transition: all ease-in-out .2s;
				caret-color: #EB5757;
				color: #BDBDBD;
				&:hover {
					border-color: #BDBDBD;
				};
				&:focus {
					border-color: #EB5757;
				};
			};

		};
		ul {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(160px, 720px));
			grid-gap: 2rem;
			padding: 2rem;
			margin: 0;

			li.card {
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
				p.nome, p.textoIntro { display: none; };
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
					a {
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
						&:hover { text-decoration: none; };
					};
					& p {
						display: block;
						width: auto;
						font-family: inherit;
						font-size: small;
						text-shadow: none;
						padding: 0;
						margin: 0;
						color: #FFF;
						background: transparent;
						box-shadow: none;
						margin-bottom: 12px;
						white-space: nowrap;
						i { vertical-align: text-top; font-size: larger; margin-right: 8px; };
						&.linkSistemat {
							position: absolute;
							bottom: 20px;
							a {
								display: inline;
								background: transparent;
								margin: 0;
								padding: 6px 8px;
								border-radius: 2px;
								background: rgba(255, 255, 255, .2);
								text-transform: none;
								color: inherit;
								transition: all ease-in-out .1s;
								&:hover { text-decoration: none; background: transparent; };
							};
							i { margin: 0; };
						};
						&:last-child{
							margin-bottom: 0;
						};
					};
				};
				p.esconde {
					grid-row: 1 / 2;
					grid-column: 2 / 3;
					align-self: end;
					display: flex;
					font-family: Georgia, serif;
					text-shadow: 0 1px 1px rgba(255, 255, 255, .4);
					padding: 8px 16px 0px 16px;
					box-sizing: content-box;
					margin: 0;
					background: rgba(255, 255, 255, .92);
					box-shadow: inset 0px -4px 4px rgba(0, 0, 0, .12);
					border-radius: 2px 0 0 0;
					z-index: 1;
					max-height: 16rem;
					position: relative;
					a { color: inherit; overflow-y: hidden; &:hover { text-decoration: none; }; };
				};
				a.acesso {
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
			li.card::before {
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
			li.card:first-child {
				grid-column: 1 / span all;
				grid-template-columns: repeat(7, 1fr);
				grid-template-rows: minmax(300px, 60vh) 64px;
				div {
					grid-column: 1 / span 5;
					grid-row: 1 / span all;
					align-items: center;
					box-shadow: none;
					a {
						display: block;
						width: 100%;
						h1 {
							margin: 0 0 2rem 0;
							font-size: 64px;
							line-height: 100%;
							width: 100%;
						};
					};
					p {
						align-self: flex-start;
					};
				};
				p {
					grid-column: 6 / 8;
				};
				a.acesso {
					grid-column: 6 / 8;
					justify-content: flex-end;
				};
			};
			li.card:hover {
				box-shadow: 0 8px 8px rgba(0, 0, 0, .24);
				transform: translateY(-2px);
			};
		};
	};

	@media (max-width: 800px) {
		main div.busca {
			margin-bottom: 1rem;
		};
		main ul {
			li.card {
				grid-template-columns: 1fr;
				grid-template-rows: minmax(280px, auto) auto 48px;
				div a h1 { padding-top: 2.5rem; };
				p.esconde { grid-row: 2 / 3; grid-column: 1 / 2;  border-radius: 0; max-height: calc(8rem - 6px;); };
				a.acesso { grid-row: 3 / 4; grid-column: 1 / 2; border-radius: 0 0 2px 2px; };
			};
			li.card:first-child {
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
					a h1 {
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
				p.esconde { grid-column: unset; font-size: initial; };
				a.acesso { grid-column: unset; };
			};
		};
	};

	@media screen and (-ms-high-contrast: none), (-ms-high-contrast: active) {
		main div.busca { margin-bottom: 1rem; };
		main ul {
			display: block;
			color: transparent;
			li.card {
				float: left;
				min-width: 260px;
				width: 100%;
				max-width: 540px;
				margin: 0 2rem 2rem 0;
				position: relative;
				div {
					background-image: linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.4)); 
					border-radius: 2px 0 0 2px;
					min-height: 220px;
					margin-top: -26px;
				};
				div a h1 { padding-top: 2.5rem; };
				p.esconde {
					background: rgba(255, 255, 255, .92);
					color: #333;
					overflow: hidden;
					max-height: calc(9.6rem - 6px);
					border-radius: 0;
				};
				a.acesso { width: 100%; };
			};
			li.card::before {
				background-image: none;
			};
			li.card:first-child {
				margin-bottom: 3rem;
				div { margin-top: -26px; };
				p.esconde { font-size: inherit; };
			}
		};
		@media (min-width: 600px) {
			main ul li.card:first-child {
				min-width: 100%;
				height: 540px;
				position: relative;
				margin-bottom: 2rem;
				div {
					float: left;
					width: calc(80% - 32px);
					height: 100%;
					box-shadow: none;
					margin-top: 0;
					a h1 {
						width: 100%;
					};
					p {
						position: relative;
						min-height: 0;
						display: block;
						box-shadow: none;
					};
				};
				p.esconde {
					position: absolute;
					right: 0;
					width: 20%;
					min-width: 160px;
					min-height: calc(540px - 66px);
					box-shadow: inset 0px -4px 4px rgba(0, 0, 0, .12);
				};
				a.acesso {
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