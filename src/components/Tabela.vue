<template>
	<div class="Tabela">
		<table :class="{ listrada: dados.tabelaListrada }">
			<caption>{{ dados.titulo }}</caption>
			<thead>
				<tr>
					<th v-for="coluna in dados.colunas">{{ coluna.titulo }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="linha in dados.linhas">
					<template v-for="celula in linha">
						<td :data-coluna="dados.colunas[col(celula, linha)].titulo">
							<span>{{ celula[0].data }}<sup class="nota" v-if="celula[1]">{{ numeraNotas(celula[1].ref) }}</sup></span>
						</td>
					</template>
				</tr>
			</tbody>
		</table>
		<div class="notas">
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
				required: true
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
							required: true
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
			tabelaListrada: Boolean
		}
	},
	created () {
		this.montaNotas()
	},
	methods: {
		col (elem, group) { return group.indexOf(elem) },
		montaNotas () {
			let app = this
			let notasB = []
			let i = 1
			let dados = app.$props
			this.dados.linhas.map(function (linha) {
				linha.map(function (celula) {
					celula.map(function (conteudo) {
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
				if (conteudo == index.nota) {
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
	margin: 2rem auto;
	padding: 1rem 2rem 2rem 2rem;
	background-color: $cinza-3;
	border-radius: 2px;

	@media (max-width: 600px) { padding: 1rem; }

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
			padding: 8px 0;
		}

		th, td {
			border: 1px solid $cinza-2 !important;
			padding: 4px 8px !important;
			font-size: smaller;
			color: $preto;
			position: relative;

			sup.nota {
				color: $cinza-1;
				font-weight: bold;
				margin: 0 0 0 2px;
				vertical-align: 4px;
			}
		}

		th { background-color: $sombra-4; }

		&.listrada {
			th, td {
				border: 0px !important;
				border-bottom: 1px solid $cinza-2 !important;
				text-align: center;
			}
			th { background-color: $cinza-3; }
			tr:nth-child(even) { background-color: $sombra-4; }
		}

		@media (max-width: 600px) {
			display: block;
			background-color: transparent;

			&.listrada {
				tr { background-color: #FFF !important; }
				th, td {
					border-width: 0 !important;
					text-align: unset;
					background-color: unset;
				}
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
}
</style>
