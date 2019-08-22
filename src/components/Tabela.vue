<template>
	<div class="Tabela" :class="{ larga: dados.colunas.length > 6, estreita: dados.colunas.length <= 3 && dados.estreita != false }">
		<table :class="{ listrada: dados.tabelaListrada }">
			<caption v-if="dados.titulo">{{ dados.titulo }}</caption>
			<thead>
				<tr>
					<th v-for="coluna in dados.colunas">{{ coluna.titulo }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="linha in dados.linhas">
					<template v-for="celula in linha">
						<td :data-coluna="dados.colunas[col(celula, linha)].titulo" :class="{ destaque: celula[0].destaque, cor: celula[0].cor, vazio: celula[0].vazio, centralizado: celula[0].centro }" :colspan="celula[0].nCol" :rowspan="celula[0].nLin">
							<span>{{ celula[0].data }}<sup class="nota" v-if="celula[1]">{{ numeraNotas(celula[1].ref) }}</sup></span>
						</td>
					</template>
				</tr>
			</tbody>
		</table>
		<div class="notas" v-if="notas.length > 0">
			<h1>Notas</h1>
			<ul>
				<li v-for="nota in notas">
					<span>{{ nota.num }}.</span> {{ nota.nota }}
				</li>
			</ul>
		</div>
		<div class="fonte" v-if="dados.fonte">
			Fonte <b>{{ dados.fonte }}</b>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tabela',
	data () {
		return {
			notas: []
		}
	},
	computed: {},
	props: {
		dados: {
			type: Object,
			titulo: {
				type: String,
				required: false
			},
			colunas: {
				type: Array,
				titulo: String,
				required: true
			},
			linhas: {
				type: Array,
				linha: {
					type: Array,
					celula: {
						type: Object,
						data: {
							type: String,
							required: true,
							destaque: {
								type: Boolean,
								required: false
							},
							cor: {
								type: Boolean,
								required: false
							}
						},
						nCol: {
							type: String,
							required: false
						},
						nLin: {
							type: String,
							required: false
						},
						ref: {
							type: String,
							required: false
						}
					},
					required: true
				}
			},
			notas: {
				type: Array,
				nota: {
					type: String,
					required: false
				}
			},
			fonte: {
				type: String,
				required: false
			},
			tabelaListrada: Boolean,
			estreita: {
				type: Boolean,
				required: false
			}
		}
	},
	beforeMount () {
		this.montaNotas()
	},
	methods: {
		col (elem, group) { return group.indexOf(elem) },
		montaNotas () {
			let app = this
			let notasB = []
			let i = 1
			// let dados = app.$props
			this.dados.linhas.map(function (linha) {
				linha.map(function (celula) {
					celula.map((conteudo) => {
						if (conteudo.ref) {
							notasB.push(conteudo.ref)
						}
					})
				})
			})
			let notasC = Array.from(new Set(notasB))
			notasC.map(function (index) {
				app.notas.push({
					num: i,
					nota: index
				})
				i++
			})
		},
		numeraNotas (conteudo) {
			let app = this
			let n
			app.notas.map(function (index) {
				if (conteudo === index.nota) {
					n = index.num
				}
			})
			return n
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

*::selection, *::-moz-selection {
	background: $vermelho;
	color: #FFF;
}

div.Tabela {
	max-width: 700px;
	overflow-x: auto;
	margin: 2rem auto;
	padding: 2rem;
	background-color: $cinza-3;
	border-radius: 2px;
	@media screen and (max-width: 600px) { padding: 1rem; }
	table {
		width: 100%;
		position: relative;
		border-collapse: collapse;
		margin: 0;
		background-color: #FFF;
		& > * { color: $preto; }
		caption {
			font-size: initial;
			font-weight: bold;
			padding: 0 0 8px 0;
			background-color: $cinza-3;
		}
		th, td {
			border: 1px solid $cinza-2;
			padding: 4px 8px;
			font-size: smaller;
			color: $preto;
			position: relative;
			sup.nota {
				color: $cinza-1;
				font-weight: bold;
				margin: 0 0 0 2px;
				vertical-align: 4px;
			}
			&.destaque span { font-weight: bold; }
			&.cor { background-color: $vermelho-tr; }
			&.vazio { background-color: $cinza-3; }
			&.centralizado { text-align: center; }
		}
		th { background-color: $sombra-4; }
		&.listrada {
			th, td {
				border: 0px;
				border-bottom: 1px solid $cinza-2;
				text-align: center;
			}
			th { background-color: $cinza-3; }
			tr:nth-child(even) { background-color: $sombra-4; }
		}
		@media screen and (max-width: 600px) {
			display: block;
			background-color: transparent;
			th, td {
				width: calc(100vw - 3rem);
				&.cor {
					background-color: transparent;
					span {
						display: block;
						width: 100%;
						background-color: $vermelho-tr;
						padding: 0 0.4rem;
						border-radius: 1rem;
					}
				}
			}
			caption {
				width: calc(100vw - 2rem);
			}
			&.listrada {
				th, td {
					border-width: 0 !important;
					text-align: unset;
					background-color: unset;
				}
				tr:nth-child(even) { background-color: #FFF; }
			}
			thead { display: none; }
			tbody tr {
				display: block;
				margin: 12px 0 0 0;
				border: 1px solid $cinza-2;
				border-radius: 2px;
				padding: 4px 8px;
				width: 100%;
				background-color: #FFF;
				&:first-child { margin-top: 0; }
				& > td {
					display: flex;
					border: none !important;
					padding: 4px 0 !important;
					&.vazio { display: none; }
					&:not(:first-child) { border-top: 1px solid $cinza-2 !important; }
					&::before {
						content: attr(data-coluna);
						display: inline-block;
						font-weight: bold;
						color: $cinza-2;
						min-width: 40%;
						max-width: 40%;
						vertical-align: top;
						hyphens: auto;
						padding-right: 4px;
						text-align: left;
					}
					&.centralizado span {
						display: inline-flex;
						width: 100%;
						align-items: center;
						justify-content: center;
					}
				}
			}
		}
	}
	div.notas {
		margin: 1rem 0 0 0;
		h1 {
			font-size: inherit;
			margin: 0;
		}
		ul {
			list-style-type: none;
			margin: .4rem 0 0 0;
			padding: 0;
			columns: 160px;
			column-gap: 2rem;
			li {
				margin: 0 0 8px 0;
				font-size: small;
				font-family: $grotesca;
				break-inside: avoid;
				page-break-inside: avoid;
				&:last-child { margin-bottom: 0; }
				span {
					color: $cinza-1;
					font-weight: bold;
				}
			};
		};
	}
	div.fonte {
		margin: 1rem 0 0 0;
		font-size: x-small;
		color: $cinza-1;
	}
	@media print {
		page-break-inside: avoid;
		break-inside: avoid-page;
		padding: 0 !important;
		table th, table td {
			page-break-inside: avoid;
			break-inside: avoid-page;
		}
		* {
			background-color: transparent !important;
			border-width: 1px !important;
			border-color: $preto !important;
		}
		div.notas ul { columns: 2; }
	}
	&.larga {
		max-width: calc(100% - 400px - 4rem);
		width: -webkit-min-content;
		width: -moz-min-content;
		width: min-content;
		th, td {
			min-width: 6rem;
			hyphens: auto;
		}
		@media (max-width: 992px) {
			min-width: 100%;
			width: unset;
		}
	}
	&.estreita {
		max-width: unset;
		width: 700px;
		width: -webkit-min-content;
		width: -moz-min-content;
		width: -ms-min-content;
		width: min-content;
		th, td { min-width: 120px; }
	}
}
</style>
