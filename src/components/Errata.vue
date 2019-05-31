<template>
	<div class="Errata">
		<ul>
			<li v-for="erro in erros" :class="{ correcao: erro.conteudoAntigo.conteudo && erro.conteudoNovo.conteudo, adicao: !erro.conteudoAntigo.conteudo && erro.conteudoNovo.conteudo, remocao: erro.conteudoAntigo.conteudo && !erro.conteudoNovo.conteudo }">
				<div class="dados">
					<div>
						<h2>{{ erro.id }}</h2>
						<i class="icon-novamente icon"><span>novamente</span></i>
						<i class="icon-adicionar icon"><span>adicionar</span></i>
						<i class="icon-remover icon"><span>remover</span></i>
					</div>
					<span class="data">{{ displayDate(erro.atualizacao) }}</span>
				</div>
				<div class="antigo" v-if="erro.conteudoAntigo.conteudo">
					<span>Conteúdo removido</span>
					<p v-if="erro.conteudoAntigo.tipo == 'texto'">{{ erro.conteudoAntigo.conteudo }}</p>
					<a v-if="erro.conteudoAntigo.tipo == 'imagem'" :href="erro.conteudoAntigo.conteudo" target="_blank">
						<img :src="erro.conteudoAntigo.conteudo" alt="Imagem removida">
						<i class="icon-acessar_url icon"><span>acessar_url</span></i>
					</a>
				</div>
				<div class="novo" v-if="erro.conteudoNovo.conteudo">
					<span>Conteúdo inserido</span>
					<p v-if="erro.conteudoNovo.tipo == 'texto'">{{ erro.conteudoNovo.conteudo }}</p>
					<a v-if="erro.conteudoNovo.tipo == 'imagem'" :href="erro.conteudoNovo.conteudo" target="_blank">
						<img :src="erro.conteudoNovo.conteudo" alt="Imagem inserida">
						<i class="icon-acessar_url icon"><span>acessar_url</span></i>
					</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Errata',
	data () {
		return {}
	},
	computed: {
		idConsulta () {
			return this.$route.meta.id
		},
		erros () {
			return this.$store.state.erratas.erros
		}
	},
	methods: {
		fetchErros () {
			this.$store.dispatch('erratas/fetchErrata', { id: this.idConsulta, self: this })
		},
		displayDate (dateStr) {
			let y = dateStr.slice(0, 4)
			let m = dateStr.slice(5, 7)
			let d = dateStr.slice(8, 10)
			return d + '/' + m + '/' + y
		}
	},
	mounted () {
		this.fetchErros()
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

div.Errata {
	padding-bottom: 2rem;
	p {
		font-family: $serifada;
		margin: 0;
	}
	& > ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		li {
			padding: 1rem;
			background-color: $cinza-3;
			border-radius: 0.25rem 0.25rem 2px 2px;
			box-shadow: 0 2px 2px $sombra-4;
			border-top-width: 0.5rem;
			border-top-style: solid;
			&:not(:last-child) { margin-bottom: 2rem; }
			div:not(:last-child) {
				margin-bottom: 1rem;
			}
			div.dados {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
				div {
					margin: 0;
					display: inline-flex;
					align-items: center;
					h2 {
						font-size: 1.5rem;
						text-transform: uppercase;
						margin: 0;
						display: inline-flex;
						align-items: center;
						justify-content: center;
						background-color: $preto;
						color: #FFF;
						border-radius: 100%;
						width: 2.5rem;
						height: 2.5rem;
						text-shadow: 1px 1px 0 $sombra-4;
					}
					i {
						color: #FFF;
						border-radius: 100%;
						padding: 2px;
						font-size: 1.25rem;
						margin-left: 0.5rem;
						display: none;
					}
				}
				span.data {
					font-size: 0.75rem;
					color: $sombra-3;
					white-space: nowrap;
				}
			}
			div.antigo {
				span {
					display: block;
					font-size: 0.75rem;
					text-transform: uppercase;
					color: $cinza-2;
				}
				& > p {
					font-size: 0.75rem;
					color: $cinza-1;
					max-width: 100%;
					hyphens: auto;
				}
				& > a {
					display: inline-block;
					position: relative;
					background-color: #FFF;
					padding: 0.5rem;
					line-height: 0.8;
					border: 1px solid $sombra-4;
					border-radius: 2px;
					img {
						max-height: 8rem;
						max-width: 100%;
						opacity: 0.75;
					}
				}
			}
			div.novo {
				span {
					display: block;
					font-size: 0.75rem;
					text-transform: uppercase;
					color: $cinza-2;
				}
				& > p {
					font-size: 1rem;
					display: inline-block;
					border: 1px solid $sombra-4;
					border-radius: 2px;
					background-color: #FFF;
					padding: 0.2rem 0.6em;
					max-width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				& > a {
					display: inline-block;
					position: relative;
					background-color: #FFF;
					padding: 1rem;
					line-height: 0.8;
					border: 1px solid $sombra-3;
					border-radius: 2px;
					img {
						max-height: 16rem;
						max-width: 100%;
					}
				}
			}
			div:not(.dados) > a i.icon {
				position: absolute;
				top: 4px;
				right: 4px;
				background-color: $sombra-2;
				color: #FFF;
				border-radius: 2px;
				font-size: 1rem;
				padding: 0.1rem;
			}
			div.antigo + div.novo { margin-top: -0.5rem; }
			&.correcao {
				border-top-color: $cinza-1;
				div.dados {
					i.icon-novamente {
						display: inline-block;
						background-color: $cinza-1;
					}
				}
			}
			&.adicao {
				border-top-color: $verde;
				div.dados {
					i.icon-adicionar {
						display: inline-block;
						background-color: $verde;
					}
				}
				div.antigo { display: none; }
			}
			&.remocao {
				border-top-color: $vermelho;
				div.dados {
					i.icon-remover {
						display: inline-block;
						background-color: $vermelho;
					}
				}
				div.antigo p {
					font-size: 1rem;
				}
				div.novo { display: none; }
			}
		}
	}
};
</style>
