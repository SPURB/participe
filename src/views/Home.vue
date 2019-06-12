<template>
	<div class="Home">
		<Preloader></Preloader>
		<main id="listaProjetos">
			<ul class="list" :class="{ load: !fetching }">
				<li v-for="(consulta, index) in consultas.filter(function (consulta) { return consulta.ativo == 1 })" class="card" @click="redirect(setUrlByType(consulta.urlConsulta))" :key="index">
					<div class="bgImg" :style="{ background: 'url(' + webpSrc(consulta.urlCapa) + ')', backgroundSize: 'cover' }">
						<img v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, consulta.urlCapa)">
					</div>
					<aside>
						<ul class="tags">
							<li class="consAtiva">Em consulta</li>
							<li class="ultimosDias" v-if="0 == 1">Últimos dias</li>
						</ul>
						<h2>{{ decodeURI(consulta.nomePublico) }}</h2>
						<table class="info">
							<tr>
								<td><i class="icon-tempo icon"><span>tempo</span></i></td>
								<!-- fazer metodo para contas dias faltantes -->
								<td>XX dias restantes para contribuir</td>
							</tr>
							<tr>
								<td><i class="icon-data icon"><span>data</span></i></td>
								<td>{{ dataDisplay(consulta.dataCadastro) }}–{{ dataDisplay(consulta.dataFinal) }}</td>
							</tr>
							<tr>
								<td><i class="icon-contribuicao icon"><span>contribuicao</span></i></td>
								<td>{{ consulta.nContribuicoes }} contribuições</td>
							</tr>
						</table>
						<p class="intro">{{ decodeURI(consulta.textoIntro) }}</p>
					</aside>

					<!-- <p class="nome">{{ decodeURI(consulta.nomePublico) }}</p>
					<p class="textoIntro">{{ decodeURI(consulta.textoIntro) }}</p>

					<div class="cont">
						<a>
							<h2 :class="{ consultaAtiva: parseAtivo(consulta.ativo) }" class="nome">{{ consulta.nomePublico }}</h2>
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
						<p v-if="consulta.ativo" title="Tempo restante para contribuir">
							{{ diasRestantes(consulta.dataFinal) }}
						</p>
						<p v-if="consulta.urlDevolutiva" class="linkSistemat">
							<a :href="consulta.urlDevolutiva" target="_blank">
								<i class="icon-acessar_url icon" style="font-size: 0.7rem;"><span>launch</span></i> Acessar devolutiva
							</a>
						</p>
					</div>

					<p ref="textoIntro" class="esconde textoIntro">{{ consulta.textoIntro }}</p>
					<a class="acesso">Acessar consulta</a> -->
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
				entry.target.parentNode.style.filter = 'blur(0)'
				entry.target.parentNode.style.transform = 'scale(1)'
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
				nome + '_1900w.webp 1900w, ' +
				nome + '_1300w.webp 1300w, ' +
				nome + '_1000w.webp 1000w, ' +
				nome + '_700w.webp 700w, ' +
				nome + '_480w.webp 640w, ' +
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
		redirect (dest) { location.assign(dest) },
		checkOldRoutesWithHashes (hash) {
			const noHash = hash.replace('#', '')
			const routes = this.$router.options.routes.map(route => route.path)

			if (routes.includes(noHash)) this.redirect(noHash)
			else throw new Error('A rota ' + hash + ' não existe. Checar url.')
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../variables';

div.Home {
	position: absolute;
	left: 0;
	right: 0;
	main {
		ul {
			margin: 0;
			padding: 0;
			position: relative;
			list-style-type: none;
			&.load {
				animation: surge ease-out .64s;
				@keyframes surge {
					from { opacity: 0; }
					to { opacity: 1; }
				}
			}
			li.card {
				position: sticky;
				top: 60px;
				margin-top: 2rem;
				border-radius: 2px;
				box-shadow: 0 -2px 4px rgba(0, 0, 0, .48);
				cursor: pointer;
				z-index: 0;
				overflow: hidden;
				height: calc(100vh - 60px);
				background-color: $preto;
				.bgImg {
					display: inline-block;
					max-width: 50%;
					height: 100%;
					z-index: -1;
					overflow: hidden !important;
					filter: blur(20px);
					transform: scale(1.04);
					transition: all ease-in .4s;
					transition-delay: .2s;
					img {
						object-fit: cover;
						width: 100%;
						height: 100%;
						opacity: 0;
					}
				}
				aside {
					display: inline-block;
					vertical-align: top;
					width: 50%;
					color: #FFF;
				}
			};
		};
	};
}
</style>
