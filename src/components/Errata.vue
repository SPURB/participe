<template>
	<!-- <div class="Errata">
		<ul>
			<li v-for="erro in erros" :class="{ correcao: erro.conteudoAntigo && erro.conteudoNovo, adicao: !erro.conteudoAntigo && erro.conteudoNovo, remocao: erro.conteudoAntigo && !erro.conteudoNovo }">
				<div class="dados">
					<div>
						<h2>{{ erro.id }}</h2>
						<i class="icon-novamente icon"><span>novamente</span></i>
						<i class="icon-adicionar icon"><span>adicionar</span></i>
						<i class="icon-remover icon"><span>remover</span></i>
					</div>					
					<span class="data">{{ erro.correcao }}</span>
				</div>
				<div class="antigo" v-if="erro.conteudoAntigo">
					<span>Conteúdo removido</span>
					<p>{{ erro.conteudoAntigo }}</p>
				</div>
				<div class="novo" v-if="erro.conteudoNovo">
					<span>Conteúdo inserido</span>
					<p>{{ erro.conteudoNovo  }}</p>
				</div>
			</li>
		</ul>
	</div> -->
</template>

<script>
export default {
	name: 'Errata',
	data () {
		return {
			
		}
	},
	methods: {}
}
</script>

<style lang="scss" scoped>
@import '../variables';

div.Errata {
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
						background-color: $preto;
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
				}
			}
			&.correcao {
				border-top-color: $cinza-1;
				div.dados {
					& > div h2 {
						background-color: $cinza-1;
					}
					i.icon-novamente {
						display: inline-block;
					}
				}
			}
			&.adicao {
				border-top-color: $verde;
				div.dados {
					& > div h2 {
						background-color: $verde;
					}
					i.icon-adicionar {
						display: inline-block;
					}
				}
			}
			&.remocao {
				border-top-color: $vermelho;
				div.dados {
					& > div h2 {
						background-color: $vermelho;
					}
					i.icon-remover {
						display: inline-block;
					}
				}
			}
		}
	}
};
</style>
