<template>
	<div class="Home">
		<Preloader></Preloader>
		<main id="listaProjetos" :class="{ load: !fetching }">
			<!-- <ul class="nabertas" ref="consultasAbertas">
				<li v-for="(consulta, index) in consultas" v-if="consulta.ativo == 1" class="card" @click="redirect(setUrlByType(consulta.urlConsulta))" :key="index">
					<div class="bgImg" :style="{ background: 'url(' + webpSrc(consulta.urlCapa) + ')', backgroundSize: 'cover' }">
						<img v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, consulta.urlCapa)">
					</div>
					<aside>
						<ul class="tags">
							<li class="consAtiva">Em consulta</li>
							<li class="ultimosDias" v-if="tempoRestante(consulta.dataFinal) <= 7">Últimos dias</li>
						</ul>
						<h2>{{ decodeURI(consulta.nomePublico) }}</h2>
						<table class="info">
							<tr v-if="tempoRestante(consulta.dataFinal)">
								<td><i class="icon-tempo icon"><span>tempo</span></i></td>
								<td>{{ tempoRestante(consulta.dataFinal) }} dias restantes para contribuir</td>
							</tr>
							<tr>
								<td><i class="icon-data icon"><span>data</span></i></td>
								<td v-if="tempoRestante(consulta.dataFinal)">{{ dataDisplay(consulta.dataCadastro) }}–{{ dataDisplay(consulta.dataFinal) }}</td>
								<td v-else>Aberta em {{ dataDisplay(consulta.dataCadastro) }}</td>
							</tr>
							<tr>
								<td><i class="icon-contribuicao icon"><span>contribuicao</span></i></td>
								<td>{{ consulta.nContribuicoes }} contribuições</td>
							</tr>
						</table>
						<p class="intro">{{ decodeURI(consulta.textoIntro) }}</p>
						<button class="acesso" @click="redirect(setUrlByType(consulta.urlConsulta))" >
							Acesse e contribua
							<i class="icon-seta_direita icon"><span>seta_direita</span></i>
						</button>
					</aside>
				</li>
			</ul> -->
			<section class="abertas">
				<ul ref="consultas">
					<li v-for="(consulta, index) in consultas" v-if="consulta.ativo == 1" class="card" @click="redirect(setUrlByType(consulta.urlConsulta))" :key="index">
						<div class="img" :style="{ background: 'url(' + webpSrc(consulta.urlCapa) + ')', backgroundSize: 'cover' }">
							<ul class="tags">
								<li class="consAtiva">Em consulta</li>
								<li class="ultimosDias" v-if="tempoRestante(consulta.dataFinal) <= 7">Últimos dias</li>
							</ul>
							<img v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, consulta.urlCapa)">
						</div>
						<aside>
							<h2>{{ decodeURI(consulta.nomePublico) }}</h2>
							<table class="info">
								<tr v-if="tempoRestante(consulta.dataFinal)">
									<td><i class="icon-tempo icon"><span>tempo</span></i></td>
									<td>{{ tempoRestante(consulta.dataFinal) }} dias restantes para contribuir</td>
								</tr>
								<tr>
									<td><i class="icon-data icon"><span>data</span></i></td>
									<td v-if="tempoRestante(consulta.dataFinal)">{{ dataDisplay(consulta.dataCadastro) }}–{{ dataDisplay(consulta.dataFinal) }}</td>
									<td v-else>Aberta em {{ dataDisplay(consulta.dataCadastro) }}</td>
								</tr>
								<tr>
									<td><i class="icon-contribuicao icon"><span>contribuicao</span></i></td>
									<td>{{ consulta.nContribuicoes }} contribuições</td>
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
				</ul>
				<!-- <nav>
					<h2>Consultas abertas</h2>
					<ul>
						<li v-for="(consulta, index) in consultas" v-if="consulta.ativo == 1" :class="{ active: index == 0}" @click="display(index, $event)">
							{{ decodeURI(consulta.nomePublico) }}
						</li>
					</ul>
				</nav>
				<ul ref="consultas">
					<li v-for="(consulta, index) in consultas" v-if="consulta.ativo == 1" class="card" :class="{ show: index == 0 }" @click="redirect(setUrlByType(consulta.urlConsulta))">
						<div class="bgImg" :style="{ background: 'url(' + webpSrc(consulta.urlCapa) + ')', backgroundSize: 'cover' }">
							<img v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, consulta.urlCapa)">
						</div>
						<aside>
							<ul class="tags">
								<li class="consAberta">Em consulta</li>
								<li class="ultimosDias" v-if="tempoRestante(consulta.dataFinal) <= 7">Últimos dias</li>
							</ul>
							<h2>{{ decodeURI(consulta.nomePublico) }}</h2>
							<table class="info">
								<tr v-if="tempoRestante(consulta.dataFinal)">
									<td><i class="icon-tempo icon"><span>tempo</span></i></td>
									<td>{{ tempoRestante(consulta.dataFinal) }} dias restantes para contribuir</td>
								</tr>
								<tr>
									<td><i class="icon-data icon"><span>data</span></i></td>
									<td v-if="tempoRestante(consulta.dataFinal)">{{ dataDisplay(consulta.dataCadastro) }}–{{ dataDisplay(consulta.dataFinal) }}</td>
									<td v-else>Aberta em {{ dataDisplay(consulta.dataCadastro) }}</td>
								</tr>
								<tr>
									<td><i class="icon-contribuicao icon"><span>contribuicao</span></i></td>
									<td>{{ consulta.nContribuicoes }} contribuições</td>
								</tr>
							</table>
							<p class="intro">{{ decodeURI(consulta.textoIntro) }}</p>
							<button class="acesso" @click="redirect(setUrlByType(consulta.urlConsulta))" >
								Acesse e contribua
								<i class="icon-seta_direita icon"><span>seta_direita</span></i>
							</button>
						</aside>
					</li>
				</ul> -->
			</section>
			<section class="encerradas">
				<header>
					<h2>Consultas encerradas</h2>
					<button @click="toggleListDisplay" ref="toggleListDisplayBt">
						<i class="icon-listagem icon"><span>listagem</span></i>
						<i class="icon-listagem icon"><span>listagem</span></i>
					</button>
				</header>
				<ul ref="consultasEncerradas">
					<li v-for="consulta in consultas" v-if="consulta.ativo == 0" @click="redirect(setUrlByType(consulta.urlConsulta))">
						<div class="sq" :style="{ background: 'url(' + webpSrc(consulta.urlCapa) + ')', backgroundSize: 'cover', backgroundColor: '#BDBDBD' }">
							<img v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, consulta.urlCapa)">
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
				</ul>
			</section>
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
	created () {
		this.$store.dispatch('fetchConsultas', { self: this })
	},
	mounted () {
		if (window.location.hash !== '') this.checkOldRoutesWithHashes(window.location.hash)// redirect if url contain old patter. ex -> /#/anhembi2
	},
	methods: {
		visibilityChanged (isVisible, entry, capa) {
			const srcset = this.imgset(capa)
			if (isVisible) {
				entry.target.srcset = srcset
				entry.target.style.filter = 'blur(0)'
				entry.target.style.transform = 'scale(1)'
				entry.target.style.opacity = 1
			}
		},
		webpSrc (nomeStr) {
			return this.basePathImgSrc + nomeStr.slice(0, nomeStr.indexOf('.')) + '_15w.webp'
		},
		checaContribuicoes (n) { return parseInt(n) > 0 },
		imgset (nomeStr) {
			let nome = this.basePathImgSrc + nomeStr.slice(0, nomeStr.lastIndexOf('.'))
			let ext = nomeStr.slice(nomeStr.lastIndexOf('.') + 1, nomeStr.lenght)
			let declare =
				nome + '_1900w.' + ext + ' 1900w, ' +
				nome + '_1300w.' + ext + ' 1300w, ' +
				nome + '_1000w.' + ext + ' 1000w, ' +
				nome + '_700w.' + ext + ' 700w, ' +
				nome + '_480w.' + ext + ' 640w,' +
				nome + '_1900w.webp 1900w, ' +
				nome + '_1300w.webp 1300w, ' +
				nome + '_1000w.webp 1000w, ' +
				nome + '_700w.webp 700w, ' +
				nome + '_480w.webp 640w '
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
		redirect (dest) { location.assign(dest) },
		checkOldRoutesWithHashes (hash) {
			const noHash = hash.replace('#', '')
			const routes = this.$router.options.routes.map(route => route.path)

			if (routes.includes(noHash)) this.redirect(noHash)
			else throw new Error('A rota ' + hash + ' não existe. Checar url.')
		},
		toggleListDisplay (event) {
			this.$refs.consultasEncerradas.classList.toggle('lista')
			this.$refs.toggleListDisplayBt.classList.toggle('lista')
		},
		tempoRestante (dataFinal) {
			let restante = Math.ceil((Date.parse(dataFinal) - Date.now())/86400000)
			return restante
		},
		display (pos, event) {
			let consultas = Array.from(this.$refs.consultas.children)
			let clicked = event.target
			let navList = Array.from(event.target.parentNode.children)
			consultas.map(consulta => {
				if (consulta != consultas[pos]) {
					consulta.classList.remove('show')
				} else if (consulta == consultas[pos]) {
					consultas[pos].classList.add('show')
				}
			})
			navList.map(item => item.classList.remove('active'))
			clicked.classList.add('active')
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../variables';

div.Home {
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
		ul.abertas {
			max-width: 1200px;
			margin: calc(60px + 2rem) auto 2rem;
			padding: 0;
			list-style-type: none;
			@supports (display: flex) {
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
			}
			li.card {
				position: relative;
				display: inline-block;
				margin-bottom: 2rem;
				width: calc(600px - 1rem);
				vertical-align: top;
				cursor: pointer;
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
						padding: 0 1rem;
						list-style-type: none;
						z-index: 1;
						li {
							display: inline-block;
							margin: 0 1rem 0 0;
							padding: 1rem 1.25rem;
							font-size: .75rem;
							line-height: 1;
							text-transform: uppercase;
							box-shadow: 0 2px 2px $sombra-3;
							text-shadow: 0 1px 1px $sombra-2;
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
						filter: blur(20px);
						transform: scale(1.04);
						transition: all ease-in .4s;
						transition-delay: .2s;
						background-color: $cinza-3;
					}
				}
				aside {
					h2 {
						font-size: 1.5rem;
						margin: 0 0 0.75rem;
						line-height: 1.2;
					}
					.info {
						font-size: 0.8rem;
						color: $cinza-1;
					}
					.intro {
						font-family: $serifada;
						font-size: 0.9rem;
						line-height: 1.32;
						margin-top: 0.75rem;
					}
					span.acesso {
						margin: 0;
						color: $vermelho;
						font-family: inherit;
						white-space: nowrap;
						font-family: $grotesca;
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
						width: 70%;
						height: 475px;
						margin-bottom: 0;
					}
					aside {
						display: inline-block;
						width: 30%;
						vertical-align: top;
						padding-left: 2rem;
						h2 {
							font-size: 2rem;
						}
						.intro {
							font-size: 1rem;
							line-height: 1.6;
						}
					}
				}
			}
		}
		ul.nabertas {
			position: relative;
			max-width: 1200px;
			margin: calc(60px + 2rem) auto 2rem;
			padding: 0 2rem;
			list-style-type: none;
			&.load {
				animation: surge ease-out .64s;
			}
			li.card {
				position: relative;
				height: calc(1200px/16*9);
				margin: 2rem 0 0;
				overflow: hidden;
				background-color: $cinza-2;
				border-radius: 4px;
				z-index: 0;
				&, & * { cursor: pointer; }
				.bgImg {
					display: inline-block;
					height: 100%;
					width: 100%;
					overflow: hidden;
					img {
						object-fit: cover;
						width: 100%;
						height: 100%;
						opacity: 0;
						filter: blur(20px);
						transform: scale(1.04);
						transition: all ease-in .4s;
						transition-delay: .2s;
					}
				}
				aside {
					position: absolute;
					top: 0;
					left: 0;
					max-width: 50%;
					min-width: 320px;
					height: 100%;
					padding: 0 2rem 2rem;
					background-color: $sombra-1;
					color: #FFF;
					.tags {
						list-style-type: none;
						margin: 0;
						padding: 0;
						li {
							display: inline-block;
							vertical-align: top;
							margin: 0 1rem 0 0;
							padding: 1rem 1.25rem;
							font-size: .75rem;
							line-height: 1;
							text-transform: uppercase;
							box-shadow: 0 2px 4px $sombra-2;
							text-shadow: 0 1px 1px $sombra-2;
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
					h2 {
						margin: 2rem 0 1rem;
						font-size: 2rem;
						line-height: 1.2;
						text-shadow: 0 2px 2px $sombra-1;
					}
					.info {
						margin: 1rem 0;
						tr {
							display: block;
							margin: 0;
							td {
								display: inline-block;
								padding: 0;
								margin: 0;
								font-size: 0.75rem;
								line-height: 1;
								opacity: 0.8;
							}
							td:first-child {
								margin-right: 4px;
								font-size: 1rem;
							}
						}
					}
					p.intro {
						margin: 1rem 0 2rem;
					}
					button.acesso {
						margin: 0;
						padding: 1rem 0.75rem 1rem 1.25rem;
						border: 0;
						border-radius: 2rem;
						background-color: $vermelho;
						color: #FFF;
						font-family: inherit;
						box-shadow: 0 2px 4px $sombra-2;
						text-shadow: 0 1px 1px $sombra-2;
						&, & > * {
							font-size: 1rem;
							line-height: 1rem;
						}
					}
				}
				&:nth-child(2n) aside {
					right: 0;
					left: 50%;
					button.acesso {
						float: right;
					}
				}
			};
		};
		section.abertas {
			position: relative;
			margin: calc(60px + 2rem) auto 2rem auto;
			padding: 0 2rem;
			max-width: 1200px;
			width: 100%;
			height: calc(675px - 2rem);
			nav {
				position: absolute;
				z-index: 1;
				width: 20%;
				height: 100%;
				border-radius: 4px 0 0 4px;
				color: #FFF;
				background-color: rgba(0, 128, 21, 0.8);
				overflow: hidden;
				h2 {
					font-size: 1.25rem;
					line-height: 1.2;
					margin: 0;
					padding: 0.75rem 1rem;
					background-color: $sombra-3;
				}
				ul {
					margin: 0;
					padding: 0;
					list-style-type: none;
					li {
						padding: 0.75rem 1rem;
						line-height: 1.2;
						cursor: pointer;
						text-shadow: 0 1px 1px $sombra-4;
						opacity: 0.56;
						transition: opacity ease-in .2s;
						&.active {
							opacity: 1;
						}
						&:hover {
							background-color: $sombra-4;
						}
					}
				}
			}
			max-width: 1200px;
			margin: calc(60px + 2rem) auto 2rem;
			padding: 0;
			list-style-type: none;
			@supports (display: flex) {
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
			}
			li.card {
				position: relative;
				display: inline-block;
				margin-bottom: 2rem;
				width: calc(600px - 1rem);
				vertical-align: top;
				cursor: pointer;
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
						padding: 0 1rem;
						list-style-type: none;
						z-index: 1;
						li {
							display: inline-block;
							margin: 0 1rem 0 0;
							padding: 1rem 1.25rem;
							font-size: .75rem;
							line-height: 1;
							text-transform: uppercase;
							box-shadow: 0 2px 2px $sombra-3;
							text-shadow: 0 1px 1px $sombra-2;
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
						filter: blur(20px);
						transform: scale(1.04);
						transition: all ease-in .4s;
						transition-delay: .2s;
						background-color: $cinza-3;
					}
				}
				aside {
					h2 {
						font-size: 1.5rem;
						margin: 0 0 0.75rem;
						line-height: 1.2;
					}
					.info {
						font-size: 0.8rem;
						color: $cinza-1;
					}
					.intro {
						font-family: $serifada;
						font-size: 0.9rem;
						line-height: 1.32;
						margin-top: 0.75rem;
					}
					span.acesso {
						margin: 0;
						color: $vermelho;
						font-family: inherit;
						white-space: nowrap;
						font-family: $grotesca;
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
						width: 70%;
						height: 475px;
						margin-bottom: 0;
					}
					aside {
						display: inline-block;
						width: 30%;
						vertical-align: top;
						padding-left: 2rem;
						h2 {
							font-size: 2rem;
						}
						.intro {
							font-size: 1rem;
							line-height: 1.6;
						}
					}
				}
			}
			// ul {
			// 	margin: 0;
			// 	padding: 0;
			// 	width: 100%;
			// 	height: 100%;
			// 	list-style-type: none;
			// 	position: relative;
			// 	z-index: 0;
			// 	li.card {
			// 		height: 100%;
			// 		margin: 0;
			// 		background-color: $cinza-2;
			// 		overflow: hidden;
			// 		border-radius: 4px;
			// 		&, &.show {
			// 			transition: opacity ease-in-out .2s; 
			// 		}
			// 		&:not(.show) {
			// 			opacity: 0;
			// 			height: 0;
			// 			overflow: hidden;
			// 			aside {
			// 				opacity: 0;
			// 			}
			// 		}
			// 		&, & * { cursor: pointer; }
			// 		.bgImg {
			// 			display: inline-block;
			// 			height: 100%;
			// 			width: 100%;
			// 			overflow: hidden;
			// 			background-color: $cinza-2;
			// 			img {
			// 				object-fit: cover;
			// 				width: 100%;
			// 				height: 100%;
			// 				opacity: 0;
			// 				filter: blur(20px);
			// 				transform: scale(1.04);
			// 				transition: all ease-in .4s;
			// 				transition-delay: .2s;
			// 			}
			// 		}
			// 		aside {
			// 			position: absolute;
			// 			top: 0;
			// 			right: 0;
			// 			max-width: 40%;
			// 			min-width: 320px;
			// 			height: 100%;
			// 			padding: 0 2rem 2rem;
			// 			background-color: $sombra-1;
			// 			color: #FFF;
			// 			border-radius: 0 4px 4px 0;
			// 			transition: inherit;
			// 			overflow: hidden;
			// 			.tags {
			// 				list-style-type: none;
			// 				margin: 0;
			// 				padding: 0;
			// 				height: auto;
			// 				li {
			// 					display: inline-block;
			// 					vertical-align: top;
			// 					margin: 0 1rem 0 0;
			// 					padding: 1rem 1.25rem;
			// 					font-size: .75rem;
			// 					line-height: 1;
			// 					text-transform: uppercase;
			// 					box-shadow: 0 2px 4px $sombra-2;
			// 					text-shadow: 0 1px 1px $sombra-2;
			// 					&:last-child {
			// 						margin-right: 0;
			// 					}
			// 					&.consAberta {
			// 						background-color: $verde;
			// 						display: none;
			// 					}
			// 					&.ultimosDias {
			// 						background-color: $vermelho;
			// 					}
			// 				}
			// 			}
			// 			h2 {
			// 				margin: 2rem 0 1rem;
			// 				font-size: 2rem;
			// 				line-height: 1.2;
			// 				text-shadow: 0 2px 2px $sombra-1;
			// 			}
			// 			.info {
			// 				margin: 1rem 0;
			// 				tr {
			// 					display: block;
			// 					margin: 0;
			// 					td {
			// 						display: inline-block;
			// 						padding: 0;
			// 						margin: 0;
			// 						font-size: 0.75rem;
			// 						line-height: 1;
			// 						opacity: 0.8;
			// 					}
			// 					td:first-child {
			// 						margin-right: 4px;
			// 						font-size: 1rem;
			// 					}
			// 				}
			// 			}
			// 			p.intro {
			// 				margin: 1rem 0 2rem;
			// 			}
			// 			button.acesso {
			// 				margin: 0;
			// 				padding: 1rem 0.75rem 1rem 1.25rem;
			// 				border: 0;
			// 				border-radius: 2rem;
			// 				background-color: $vermelho;
			// 				color: #FFF;
			// 				font-family: inherit;
			// 				box-shadow: 0 2px 4px $sombra-2;
			// 				text-shadow: 0 1px 1px $sombra-2;
			// 				&, & > * {
			// 					font-size: 1rem;
			// 					line-height: 1rem;
			// 				}
			// 			}
			// 		}
			// 	};
			// }
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
					margin: 0;
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
				}
			}
			ul {
				max-width: 1200px;
				width: 100%;
				margin: 0 auto 4rem;
				padding: 0 1rem;
				list-style-type: none;
				text-align: center;
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
				align-items: flex-start;
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
							filter: blur(20px);
							transform: scale(1.04);
							transition: all ease-in .4s;
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
									margin-left: -4px;
									margin-right: 4px;
									vertical-align: baseline;
								}
							}
						}
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
					}
				}
			}
		}
	};
	@media screen and (max-width: 1200px) {
		main {
			section.abertas {
				height: auto;
				nav {
					display: none;
				}
				ul {
					li.card, li.card.show, li.card:not(.show) {
						height: calc(100vh - 60px - 6rem);
						max-height: 600px;
						opacity: 1;
						position: relative;
						margin: 0 0 2rem;
						border-radius: 4px;
						.bgImg {
						}
						aside {
							opacity: 1;
							min-width: 100%;
							height: auto;
							border-radius: 4px 4px 0 0;
							overflow: visible;
							.tags .consAberta {
								display: inline-block;
							}
							h2 {
								font-size: 1.75rem;
								margin: 1rem 0;
							}
							p.intro {
								font-size: 1rem;
								margin-bottom: 1rem;
								max-width: 40rem;
							}
							button.acesso {
								position: absolute;
								margin-top: 0.75rem;
								padding: 0.5rem 0.5rem 0.5rem 1rem;
								font-size: 0.75rem;
								line-height: 0.75rem;
								text-transform: uppercase;
								box-shadow: 0 2px 4px $sombra-1;
								.icon {
									font-size: inherit;
								}
							}
						}
						&:nth-child(2n) aside button.acesso {
							right: 2rem;
						}
					}
				}
			}
		}
	};
	@media screen and (max-width: 600px) {
		main {
			section.abertas {
				padding: 0;
				margin-top: 60px;
				ul {
					li.card.show, li.card:not(.show) {
						border-radius: 0;
						height: 88vh;
						margin-bottom: 1rem;
						aside {
							padding: 0 1rem 1rem;
							border-radius: 0;
							.bgImg {
								border-radius: 0;
							}
							.tags li {
								padding: 0.5rem;
								font-size: 0.75rem;
							}
							h2 {
								font-size: 1.25rem;
								margin-bottom: 0.5rem;
							}
							.info {
								margin: 0.5rem 0;
								tr {
									margin: 0 0 0.5rem 0;
									max-height: 1rem;
									td {
										height: 1rem;
										i::before {
											font-size: 1rem;
											line-height: .8;
										}
									}
								}
							}
							p.intro {
								margin: 0.5rem 0;
								font-size: 0.75rem;
							}
							button.acesso {
								bottom: -1rem;
							}
						}
						&:nth-child(2n) aside button.acesso {
							right: 1rem;
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
