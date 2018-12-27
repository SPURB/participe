<template>
	<div class="Home">
		<Preloader></Preloader>
		<main id="listaProjetos">
			<!-- <div class="busca" @click="ativaBusca">
				<i class="material-icons">search</i>
				<input class="fuzzy-search" type="search" ref="busca" title="Digite o que pesquisa" value="Pesquisar" @focusout="desativaBusca">
			</div> -->
			<ul class="list" :class="{ load: !fetching }">
				<li v-for="(consulta, index) in consultas" class="card" @click="redirect(setUrlByType(consulta.urlConsulta))" :key="index">
					<div class="bgImg">
						<img :srcset="imgset(consulta.urlCapa)"
							sizes="
								(max-width: 480px) 480w,
								(max-width: 700px) 700w,
								(max-width: 1000px) 1000w,
								(max-width: 1300px) 1300w,
								(max-width: 1900px) 1900w"
						>
					</div>

					<p class="nome">{{ decodeURI(consulta.nomePublico) }}</p>
					<p class="textoIntro">{{ decodeURI(consulta.textoIntro) }}</p>

					<div class="cont">
						<a>
							<h1 :class="{ consultaAtiva: parseAtivo(consulta.ativo) }" class="nome">{{ consulta.nomePublico }}</h1>
						</a>
						<p v-if="consulta.ativo" title="Período da consulta">
							<i class="icon-data icon"><span>date_range</span></i>
							Consulta iniciada em {{ dataDisplay(consulta.dataCadastro) }}
						</p>
						<p v-if="!consulta.ativo" title="Período da consulta">
							<i class="icon-data icon"><span>date_range</span></i>
							{{ dataDisplay(consulta.dataCadastro) }}–{{ dataDisplay(consulta.dataFinal) }}
						</p>
						<p title="Número de contribuições" v-if="checaContribuicoes(consulta.nContribuicoes)">
							<i class="icon-contribuicao icon"><span>contribuicao</span></i>
							{{ consulta.nContribuicoes }} contribuições
						</p>
						<!-- <p v-if="consulta.ativo" title="Tempo restante para contribuir">
							{{ diasRestantes(consulta.dataFinal) }}
						</p> -->
						<p v-if="consulta.urlDevolutiva" class="linkSistemat">
							<a :href="consulta.urlDevolutiva" target="_blank">
								<i class="icon-acessar_url icon" style="font-size: 0.7rem;"><span>launch</span></i> Acessar devolutiva
							</a>
						</p>
					</div>

					<p ref="textoIntro" class="esconde textoIntro">{{ consulta.textoIntro }}</p>
					<a class="acesso">Acessar consulta</a>
				</li>
			</ul>
		</main>
	</div>
</template>
<script>
/*

são métodos neste mixin:
setUrlByType(urlOrSlug)

*/
import { consultasMutations } from '@/mixins/consultasMutations'
import Preloader from '@/components/Preloader'

export default {
	name: 'Home',
	components: { Preloader },
	mixins: [ consultasMutations ],
	computed: {
		consultas () { return this.$store.state.consultas },
		basePathImgSrc () { return this.$store.getters.basePath + 'arquivos/capas/' },
		fetching () { return this.$store.state.fetching }
	},
	methods: {
		checaContribuicoes (n) { return parseInt(n) > 0 },
		imgset (nomeStr) {
			let nome = this.basePathImgSrc + nomeStr.slice(0, nomeStr.lastIndexOf('.'))
			// let nome = '../../public/img/testes/' + nomeStr.slice(0, nomeStr.lastIndexOf('.'))
			let ext = nomeStr.slice(nomeStr.lastIndexOf('.') + 1, nomeStr.lenght)
			let declare =
				nome + '_1900w.' + ext + ' 1900w, ' +
				nome + '_1300w.' + ext + ' 1300w, ' +
				nome + '_1000w.' + ext + ' 1000w, ' +
				nome + '_700w.' + ext + ' 700w, ' +
				nome + '_480w.' + ext + ' 640w'
			return declare.toString()
		},
		parseAtivo (state) { return state !== '0' },
		ativaBusca () {
			this.$refs.busca.value = ''
			this.$refs.busca.style.color = '#333'
		},
		desativaBusca () {
			this.$refs.busca.value = 'Pesquisar'
			this.$refs.busca.style.color = '#BDBDBD'
		},
		dataDisplay (data) {
			return data.substring(8, 10) + '/' + data.substring(5, 7) + '/' + data.substring(0, 4)
		},
		// diasRestantes (data) {
		// 	// if(data != null || data != '' ){
		// 	let hoje = new Date()
		// 	let dataFinal = new Date(data.substring(0, 4), data.substring(5, 7) - 1, data.substring(8, 10))
		// 	let dias = Math.round((dataFinal - hoje) / (1000 * 60 * 60 * 24)) + 1
		// 	if (dias <= 0) {
		// 		return 'Não é mais possível contribuir'
		// 	} else { return dias + ' dias restantes para contribuir' }
		// },
		redirect (dest) { location.assign(dest) }
	}
}
</script>
<style lang="scss" scoped>
div.Home {
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

			i:after {
				visibility:hidden;
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

				&:hover { border-color: #BDBDBD };
				&:focus {border-color: #EB5757; };
			};

		};

		ul {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(160px, 720px));
			grid-gap: 2rem;
			padding: 2rem;
			margin: 0 auto;

			&.load {
				animation: surge ease-out .64s;
				@keyframes surge {
					from { opacity: 0; }
					to { opacity: 1; }
				}
			}

			li.card {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 400px 48px;
				border-radius: 2px;
				box-shadow: 0 4px 4px rgba(0, 0, 0, .24);
				transition: transform ease-in-out .1s, box-shadow .1s;
				position: relative;
				cursor: pointer;
				z-index: 0;

				div.bgImg {
					position: absolute;
					width: 100%;
					height: 100%;
					z-index: -1;
					border-radius: inherit;
					overflow: hidden;
					display: flex;
					justify-content: center;
					align-items: center;

					img {
						object-fit: cover;
						min-width: 100%;
						min-height: 100%;
					}
				}

				&:nth-child(2n+1) { background-image: -moz-radial-gradient(left bottom, circle farthest-side, #777, #EB5757); }
				&:nth-child(3n+2) { background-image: -moz-radial-gradient(left top, circle farthest-side, #FFF, #333); }
				&:nth-child(5n+3) { background-image: -moz-radial-gradient(right bottom, circle farthest-side, #FFF, #EB5757); }
				&:nth-child(7n+5) { background-image: -moz-radial-gradient(left top, circle farthest-side, #777, #333); }

				p.nome, p.textoIntro { display: none; };

				div.cont {
					grid-row: 1 / 2;
					grid-column: 1 / 2;
					display: flex;
					flex-flow: column wrap;
					justify-content: center;
					padding: 2rem;
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
								top: 0;
								left: 0;
								display: inline-block;
								margin: 2rem;
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
						i:after { visibility: hidden; }

						&.linkSistemat {

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

							i {
								margin: 0;
								display: inline-flex;
								align-items: center; }
							};

						&:last-child { margin-bottom: 0; };
					};
				};

				p.esconde {
					grid-row: span all;
					grid-column: 2 / 3;
					align-self: end;
					display: flex;
					font-family: Georgia, serif;
					padding: 8px 16px 0px 16px;
					box-sizing: content-box;
					margin: 0;
					background: rgba(255, 255, 255, .88);
					border-radius: 2px 0 0 0;
					z-index: 1;
					position: relative;
					overflow-wrap: break-word;
					hyphens: auto;
					max-height: 100%;

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
				background-image: linear-gradient(0deg, rgba(0,0,0,.2), rgba(0,0,0,.8));
				transition: all ease-in-out .2s;
				border-radius: 2px;
				z-index: 0;
			};

			li.card:first-child {
				grid-column: 1 / span all;
				grid-template-columns: repeat(7, 1fr);
				grid-template-rows: minmax(300px, 72vh) 64px;

				div.cont {
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
				grid-template-rows: minmax(140px, auto) auto 48px;
				overflow-y: hidden;

				div.cont {
					padding: 12px;
					a h1 {
						padding-top: 2.5rem;
						margin-bottom: 2rem;
						font-size: x-large;
						&::before {
							margin: 12px;
							font-size: xx-small;
						}
					};
				}

				p.esconde { grid-row: 2 / 3; grid-column: 1 / 2;  border-radius: 0; max-height: calc(8rem + 4px); font-size: smaller; };
				a.acesso { grid-row: 3 / 4; grid-column: 1 / 2; border-radius: 0 0 2px 2px; };
			};

			li.card:first-child {
				grid-column: unset;
				grid-template-columns: 1fr;
				grid-template-rows: minmax(280px, auto) auto 48px;
				transform: scale(1.04);
				margin-bottom: 1rem;

				div.cont {
					grid-column: unset;
					grid-row: 1 / 2;
					flex-flow: column nowrap;
					justify-content: flex-end;

					a h1 {
						font-size: xx-large;
						line-height: 120%;
						margin: 2rem 0 0 0;
						text-align: center;
					};

					p {
						&:nth-of-type(1) {
							margin-top: 3rem;
						};
					};
				};

				p.esconde { grid-column: unset; max-height: unset; };
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

				div.cont {
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

			li.card::before { background-image: none; };

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

				div.cont {
					float: left;
					width: calc(80% - 32px);
					height: 100%;
					box-shadow: none;
					margin-top: 0;

					a h1 { width: 100%; };

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

	@media screen and (min-width: 2000px) {
		main ul { max-width: 2000px; }
	}
}
</style>
