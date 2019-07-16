<template>
	<div class="home">
		<main id="listaProjetos" :class="{ load: !fetching }">
			<section class="abertas">
				<ul ref="consultas">
					<template v-for="(consulta, index) in consultasAbertas">
						<li v-if="parseInt(consulta.ativo) === 1" class="card" @click="redirect(setUrlByType(consulta.urlConsulta))" :key="index">
							<div class="img" :style="{ background: 'url(' + placeholderSrc(consulta.urlCapa) + ')', backgroundSize: 'cover', backgroundColor: '#BDBDBD' }">
								<ul class="tags">
									<li class="consAtiva">Em consulta</li>
									<li class="ultimosDias" v-if="tempoRestante(consulta.dataFinal) <= 7">Últimos dias</li>
								</ul>
								<img v-if="!isIE" v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, consulta.urlCapa, consulta.ativo)" :alt="consulta.nomePublico">
								<img v-if="isIE" :src="imgset(consulta.urlCapa, consulta.ativo)" :style="{ opacity: 1 }" :alt="consulta.nomePublico">
							</div>
							<aside>
								<h2>{{ decodeURI(consulta.nomePublico) }}</h2>
								<table class="info">
									<tr v-if="tempoRestante(consulta.dataFinal) >= 0" :class="{ ultimoDia: tempoRestante(consulta.dataFinal) == 0 }">
										<td><i class="icon-tempo icon"><span>tempo</span></i></td>
										<td title="Tempo restante para contribuir nesta consulta">
											<template v-if="tempoRestante(consulta.dataFinal) == 0">Último dia para contribuir</template>
											<template v-else>{{ tempoRestante(consulta.dataFinal) }} dias restantes para contribuir</template>
										</td>
									</tr>
									<tr>
										<td><i class="icon-data icon"><span>data</span></i></td>
										<td title="Período de contribuições desta consulta" v-if="tempoRestante(consulta.dataFinal)">{{ dataDisplay(consulta.dataCadastro) }}–{{ dataDisplay(consulta.dataFinal) }}</td>
										<td title="Data de abertura desta consulta" v-else>Aberta em {{ dataDisplay(consulta.dataCadastro) }}</td>
									</tr>
									<tr>
										<td><i class="icon-contribuicao icon"><span>contribuicao</span></i></td>
										<td title="Número de contribuições recolhidas até o momento">{{ consulta.nContribuicoes }} contribuições</td>
									</tr>
								</table>
								<p class="intro">
									{{ decodeURI(consulta.textoIntro) }}
									<span class="acesso" @click="redirect(setUrlByType(consulta.urlConsulta))">
										Acesse e contribua
										<i class="icon-seta_direita icon"><span>seta_direita</span></i>
									</span>
								</p>
							</aside>
						</li>
					</template>
				</ul>
			</section>
			<section class="encerradas">
				<header>
					<h2>Consultas encerradas</h2>
					<button @click="toggleListDisplay" ref="toggleListDisplayBt" name='grade-ou-lista'>
						<i class="icon-grade icon"><span>grade</span></i>
						<i class="icon-listagem icon"><span>listagem</span></i>
					</button>
				</header>
				<ul ref="consultasEncerradas">
					<template v-for="(consulta, index) in consultas">
						<li v-if="!parseInt(consulta.ativo)" @click="redirect(setUrlByType(consulta.urlConsulta))" :key="index">

							<div class="sq" :style="{ background: 'url(' + placeholderSrc(consulta.urlCapa) + ')', backgroundSize: 'cover', backgroundColor: '#BDBDBD' }">
								<img v-if="!isIE" v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, consulta.urlCapa, consulta.ativo)" :alt="consulta.nomePublico">
								<div v-if="isIE" class="imgIE" :style="{ backgroundImage: 'url(' + imgset(consulta.urlCapa, consulta.ativo) + ')', backgroundSize: 'cover', backgroundPosition: 'center center', height: '100%', width: '100%' }"></div>
							</div>
							<h3>{{consulta.nomePublico}}</h3>
							<table class="info">
								<tr>
									<td><i class="icon-data icon"><span>data</span></i></td>
									<td>
										{{ dataDisplay(consulta.dataCadastro) }}<span v-if="consulta.dataFinal">–<br>{{ dataDisplay(consulta.dataFinal) }}</span>
									</td>
								</tr>
								<tr>
									<td><i class="icon-contribuicao icon"><span>contribuicao</span></i></td>
									<td>{{ consulta.nContribuicoes }} contribuições</td>
								</tr>
								<tr v-if="consulta.urlDevolutiva">
									<td><i class="icon-responder icon"><span>responder</span></i></td>
									<td><a :href="consulta.urlDevolutiva" target="_blank">Ver devolutiva</a></td>
								</tr>
							</table>
						</li>
					</template>
				</ul>
			</section>
		</main>
	</div>
</template>

<script>
import { consultasMutations } from '@/mixins/consultasMutations'
export default {
	name: 'Home',
	mixins: [ consultasMutations ],
	computed: {
		consultas () { return this.$store.state.consultas === undefined ? false : this.$store.state.consultas.filter(consulta => !parseInt(consulta.ativo)) },
		consultasAbertas () {
			if (this.$store.state.consultas === undefined) { return }
			return Array.from(this.$store.state.consultas).sort(this.parametrosDestaque).filter(consulta => parseInt(consulta.ativo))
		},
		basePathImgSrc () { return this.$store.getters.basePath + 'arquivos/capas/' },
		fetching () { return this.$store.state.fetching },
		isIE () {
			let nav = window.navigator.userAgent
			if (nav.match(/MSIE\s\d\S*;|Trident.*rv:\d*\.\d/)) {
				return true
			} else {
				return false
			}
		}
	},
	created () {
		this.$store.dispatch('fetchConsultas', { self: this })
	},
	mounted () {
		if (window.location.hash !== '') this.checkOldRoutesWithHashes(window.location.hash)// redirect if url contain old patter. ex -> /#/anhembi2
	},
	methods: {
		checkOldRoutesWithHashes (hash) {
			const noHash = hash.replace('#', '')
			const routes = this.$router.options.routes.map(route => route.path)

			if (routes.includes(noHash)) this.redirect(noHash)
			else throw new Error('A rota ' + hash + ' não existe. Checar url.')
		},
		parametrosDestaque (a, b) {
			return this.tempoRestante(a.dataFinal) < this.tempoRestante(b.dataFinal) ? -1 : 1
			// if (this.tempoRestante(a.dataFinal) < this.tempoRestante(b.dataFinal)) {
			// 	if (this.tempoPublicado(a.dataCadastro) > this.tempoPublicado(b.dataCadastro)) {
			// 		return -1
			// 	} else {
			// 		return 1
			// 	}
			// } else if (this.tempoRestante(a.dataFinal) > this.tempoRestante(b.dataFinal)) {
			// 	if (this.tempoPublicado(a.dataCadastro) < this.tempoPublicado(b.dataCadastro)) {
			// 		return 1
			// 	} else {
			// 		return -1
			// 	}
			// } else {
			// 	return 1
			// }
		},
		imgset (nomeStr, isAtiva) {
			let nome = this.basePathImgSrc + nomeStr.slice(0, nomeStr.lastIndexOf('.'))
			let ext = nomeStr.slice(nomeStr.lastIndexOf('.') + 1, nomeStr.lenght)
			let declare = ''
			if (!this.isIE) {
				if (parseInt(isAtiva) === 1) {
					declare +=
					nome + '_1600w.webp 2x, ' +
					nome + '_800w.webp 1x, ' +
					nome + '_1600w.' + ext + ' 2x, ' +
					nome + '_800w.' + ext + ' 1x'
				} else if (parseInt(isAtiva) === 0) {
					declare +=
					nome + '_244w.webp 2x, ' +
					nome + '_122w.webp 1x, ' +
					nome + '244w.' + ext + ' 2x, ' +
					nome + '122w.' + ext + ' 1x'
				}
			} else {
				if (parseInt(isAtiva) === 1) {
					declare = nome + '_1600w.' + ext
				} else if (parseInt(isAtiva) === 0) {
					declare = nome + '_244w.' + ext
				}
			}
			return declare.toString()
		},
		placeholderSrc (nomeStr) {
			return this.basePathImgSrc + nomeStr.slice(0, nomeStr.indexOf('.')) + '_40w.webp'
		},
		dataDisplay (data) {
			return data.substring(8, 10) + '/' + data.substring(5, 7) + '/' + data.substring(0, 4)
		},
		tempoRestante (dataFinal) {
			let restante = Math.ceil((Date.parse(dataFinal) - Date.now()) / 86400000)
			return Math.abs(restante)
		},
		tempoPublicado (dataCadastro) {
			const restante = Math.ceil((Date.now() - Date.parse(dataCadastro)) / 86400000)
			return Math.abs(restante)
		},
		redirect (dest) { location.assign(dest) },
		visibilityChanged (isVisible, entry, capa, consultaAtiva) {
			const srcset = this.imgset(capa, consultaAtiva)
			if (isVisible) {
				entry.target.srcset = srcset
				entry.target.style.opacity = 1
			}
		},
		toggleListDisplay (event) {
			this.$refs.consultasEncerradas.classList.toggle('lista')
			this.$refs.toggleListDisplayBt.classList.toggle('lista')
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../variables';

.home {
	position: relative;
	main {
		&:not(.load) > * {
			opacity: 0;
		}
		&.load > * {
			animation: surge ease-in-out .4s;
		}
		@keyframes surge {
			from { opacity: 0; }
			to { opacity: 1; }
		}
		section.abertas {
			position: relative;
			margin: calc(60px + 2rem) auto 2rem auto;
			padding: 0 2rem;
			max-width: 1200px;
			width: 100%;
			ul {
				padding: 0;
				list-style-type: none;
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
				align-items: flex-start;
				li.card {
					position: relative;
					display: inline-block;
					margin-bottom: 2rem;
					width: calc(50% - 1rem);
					vertical-align: top;
					cursor: pointer;
					border-radius: 4px;
					&:nth-child(2n) {
						margin-right: 2rem;
					}
					.img {
						margin-bottom: 1rem;
						height: 330px;
						overflow: hidden;
						position: relative;
						border-radius: 4px;
						.tags {
							position: absolute;
							display: block;
							top: 1rem;
							left: 0;
							list-style-type: none;
							z-index: 1;
							li {
								display: block;
								margin: 0 0 1rem 0;
								padding: 0.75rem;
								font-size: .75rem;
								line-height: 1;
								text-transform: uppercase;
								box-shadow: 2px 0 4px $sombra-3;
								text-shadow: 0 1px 1px $sombra-2;
								border-width: 1px 1px 1px 0;
								border-color: $sombra-4;
								border-style: solid;
								border-radius: 0 2px 2px 0;
								color: #FFF;
								&:last-child {
									margin-right: 0;
								}
								&.consAtiva {
									background-color: $verde;
								}
								&.ultimosDias {
									background-color: $vermelho;
								}
							}
						}
						img {
							object-fit: cover;
							width: 100%;
							height: 100%;
							opacity: 0;
							transition: all ease-out .4s;
							transition-delay: .2s;
							background-color: $cinza-3;
						}
					}
					aside {
						border-bottom: 1rem solid $cinza-3;
						padding-bottom: 0.5rem;
						h2 {
							font-size: 1.5rem;
							margin: 0 0 0.75rem;
							line-height: 1.2;
						}
						.info {
							font-size: 0.8rem;
							color: $cinza-1;
							width: 100%;
							border-collapse: collapse;
							border-spacing: 0;
							tr {
								td {
									padding: 0;
									line-height: 1.4;
								}
								td:first-child {
									width: 1.25rem;
									.icon {
										line-height: inherit;
									}
								}
								&.ultimoDia td:nth-child(2) {
									display: inline-block;
									padding: 0.25rem 0.5rem;
									color: #FFF;
									background: $vermelho;
									border-radius: 0.25rem;
								}
							}
						}
						.intro {
							font-family: $serifada;
							margin: 0.75rem 0 0;
							hyphens: auto;
						}
						span.acesso {
							margin: 0;
							color: $vermelho;
							font-family: inherit;
							white-space: nowrap;
							font-family: $grotesca;
							font-weight: bold;
							.icon::before {
								vertical-align: -6px;
								margin-left: -0.25rem;
							}
						}
					}
					&:first-child {
						width: 100%;
						.img {
							display: inline-block;
							width: 60%;
							height: 0;
							padding-bottom: calc(60% * 9/16);
							margin-bottom: -0.5rem;
							.tags {
								left: inherit;
								right: 0;
								li {
									border-width: 1px 0 1px 1px;
									border-radius: 2px 0 0 2px;
									box-shadow: -2px 0 8px $sombra-2;
								}
							}
							img {
								position: absolute;
								top: 0;
								left: 0;
							}
						}
						aside {
							display: inline-block;
							width: 40%;
							vertical-align: top;
							padding-left: 2rem;
							padding-bottom: 0;
							border-bottom: none;
							h2 {
								font-size: 2.5rem;
							}
							.intro {
								font-size: 1rem;
								line-height: 1.6;
							}
						}
					}
					&:active {
						background-color: $vermelho-tr;
						outline: 0.5rem solid $vermelho-tr;
						-moz-outline-radius: 0.75rem;
						border-radius: 0;
					}
				}
			}
		}
		section.encerradas {
			header {
				position: relative;
				margin: 2rem auto 0;
				padding: 0 2rem;
				width: 100%;
				max-width: 1200px;
				h2 {
					display: inline-block;
					font-size: 1.25rem;
				}
				button {
					position: absolute;
					right: 2rem;
					top: 50%;
					display: inline-block;
					border: none;
					margin: 0 -4px 0 0;
					padding:  0.25rem 0.5rem;
					border-radius: 2rem;
					transform: translateY(-50%);
					box-shadow: 0 2px 0 $sombra-3;
					&, * { cursor: pointer; }
					.icon {
						transition: color ease-in .2s;
						font-size: 1rem;
					}
					.icon:nth-child(2) {
						color: $cinza-1;
						margin-left: 4px;
					}
					&.lista {
						.icon:first-child {
							color: $cinza-1;
						}
						.icon:nth-child(2) {
							color: $preto;
						}
					}
					&:active {
						box-shadow: 0 1px 0 $sombra-3;
						margin-top: 1px;
					}
				}
			}
			ul {
				max-width: 1200px;
				width: 100%;
				margin: 0 auto 4rem;
				padding: 0 1rem;
				list-style-type: none;
				text-align: center;
				@supports (display: flex) {
					display: flex;
					flex-flow: row wrap;
					justify-content: space-between;
					align-items: flex-start;
				}
				& > li {
					display: inline-block;
					vertical-align: top;
					margin: 0 1rem 1rem;
					width: 122px;
					text-align: left;
					&, & * { cursor: pointer; }
					div.sq {
						position: relative;
						height: 68px;
						width: 122px;
						background-color: $cinza-2;
						overflow: hidden;
						border-radius: 2px;
						img {
							object-fit: cover;
							width: 100%;
							height: 100%;
							opacity: 0;
							transition: all ease-out .4s;
							transition-delay: .2s;
						}
					}
					h3 {
						margin: 8px 0 4px;
						font-size: 1rem;
						line-height: 1.2;
					}
					.info {
						padding: 0;
						font-size: 0.75rem;
						line-height: 1.6;
						width: 100%;
						color: $cinza-1;
						tr {
							display: block;
							td {
								display: inline-block;
								margin: 0;
								padding: 0;
								vertical-align: top;
								&:nth-child(2) {
									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
									width: calc(100% - 18px);
								}
								& > .icon {
									display: block;
									position: relative;
									width: 18px;
									&::before {
										display: block;
										position: absolute;
										left: -2px;
									}
								}
							}
						}
					}
					&:active {
						background-color: $vermelho-tr;
						outline: 0.5rem solid $vermelho-tr;
						-moz-outline-radius: 0.75rem;
					}
				}
				&.lista {
					text-align: left;
					position: relative;
					& > li {
						display: block;
						width: 100%;
						margin: 0;
						padding: 1rem;
						background-color: $cinza-3;
						&:nth-child(2n) {
							background-color: transparent;
						}
						div.sq {
							width: 3.5rem;
							height: 3.5rem;
							display: inline-block;
							vertical-align: middle;
						}
						h3 {
							display: inline-block;
							vertical-align: middle;
							margin: 0 1rem;
							width: calc(100% - 16rem);
						}
						.info {
							width: auto;
							display: inline-block;
							vertical-align: middle;
							tr {
								td {
									&:nth-child(2) {
										white-space: nowrap;
										overflow: hidden;
										text-overflow: ellipsis;
									}
									br {
										display: none;
									}
								}
							}
						}
						&:hover {
							background-color: $sombra-4;
						}
						&:active {
							outline: none;
							background-color: $vermelho-tr;
						}
					}
				}
			}
		}
	};
	@media screen and (max-width: 1200px) {
		main {
			section.abertas {
				ul {
					li.card {
						.img {
							width: auto;
							height: 0;
							padding-bottom: calc(100% * 9/16);
							ul.tags {
								top: 0.5rem;
								li {
									padding: 0.5rem;
									margin-bottom: 0.5rem;
								}
							}
							img {
								position: absolute;
								top: 0;
								left: 0;
							}
						}
						aside {
							.info {
								width: 100%;
							}
						}
						&:not(:first-child) {
							aside p.intro {
								font-size: 0.9rem;
							}
						}
					}
				}
			}
		}
	};
	@media screen and (max-width: 800px) {
		main section.abertas ul li.card:first-child {
			.img {
				display: block;
				width: 100%;
				padding-bottom: calc(100% * 9/16);
				.tags {
					left: 0;
					right: inherit;
					bottom: 0.5rem;
					top: inherit;
					li {
						border-width: 1px 1px 1px 0;
						border-radius: 0 2px 2px 0;
						box-shadow: 2px 0 8px $sombra-2;
					}
				}
			}
			aside {
				display: block;
				width: 100%;
				padding-left: 0;
				margin-top: 1rem;
			}
		}
	}
	@media screen and (max-width: 600px) {
		main {
			section.abertas {
				padding: 0 1rem;
				margin-top: calc(60px + 1rem);
				ul {
					li.card, li.card:nth-child(2n) {
						display: block;
						width: 100%;
						margin: 0 0 2rem 0;
						aside {
							h2 {
								font-size: 1.25rem;
								margin-bottom: 0.2rem;
							}
							p.intro {
								margin-top: 0.25rem;
							}
						}
					}
					li.card:first-child {
						.img {
							margin-bottom: 0.75rem;
						}
						aside {
							margin-top: 0.5rem;
							h2 {
								font-size: 1.75rem;
							}
							p.intro span.acesso {
								display: block;
								text-align: center;
								margin: 0.5rem 0 0;
								padding: 0.5rem 0.75rem 0.5rem 1rem;
								border-radius: 2rem;
								background-color: $vermelho;
								color: #FFF;
								box-shadow: 0 2px 2px $sombra-3;
								font-weight: normal;
							}
						}
					}
				}
			}
			section.encerradas {
				header {
					padding: 0 1rem;
					button {
						right: calc(1rem - 1px);
					}
				}
				ul {
					padding: 0;
					justify-content: center;
					&.lista {
						li {
							div.sq {
								float: left;
								margin-right: 1rem;
							}
							h3 {
								display: block;
								width: 100%;
								margin: 0;
							}
							.info {
								width: calc(100% - 4.5rem);
							}
						}
						@suports (display: grid) {
							li {
								display: grid;
								grid-template-columns: 3.5rem 1fr;
								grid-template-rows: 1fr auto;
								grid-column-gap: 1rem;
								div.sq {
									grid-column: 1/2;
									grid-row: 1/3;
								}
								h3 {
									width: 100%;
									margin: -3px 0 0 0;
									grid-column: 2/3;
									grid-row: 1/2;
								}
								.info {
									grid-column: 2/3;
									grid-row: 2/3;
									tr {
										line-height: 0.75rem;
										margin: 4px 0;
										td .icon {
											line-height: 0.75rem;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
