<template>
	<div class="table-csv">
		<table>
			<caption>{{ titulo }}</caption>
			<thead>
				<tr>
					<th
						scope="col"
						:key="index"
						v-for="(col, index) in colunas">
						{{ col }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					:key="`tr-`+index"
					:class="setLinhaClass(index, tabelaListrada)"
					v-for="(item, index) in totalLinhas">
						<td
							:data-label="colunas[indexLinha]"
							:key="`td-`+indexLinha"
							:colspan="countColspan(linhasValues[index].length, totalColunas)"
							v-for="(linha, indexLinha) in linhasValues[index]"
						>
							{{ linha }}
						</td>
				</tr>
			</tbody>
		</table>
		<div class="fonte" v-if="fonte !== ''">
			Fonte: <span>{{ fonte }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabelaCsv',
	props: {
		titulo: {
			type: String,
			required: true
		},
		colunas: {
			type: Array,
			required: true
		},
		linhas: {
			type: Array,
			required: true
		},
		fonte: {
			type: String,
			default: ''
		},
		tabelaListrada: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		linhasValues () {
			let linhas = this.linhas
			linhas.forEach((linha, index) => {
				linhas[index] = [...new Set(linha)]
			})
			return linhas
		},
		totalColunas () {
			return this.colunas.length
		},
		totalLinhas () {
			return this.linhas.length
		}
	},
	methods: {
		countColspan (linha, total) {
			if (linha === 1) return total
			if (linha < total) return linha
		},
		setLinhaClass (index, tabelaListrada) {
			if (!tabelaListrada) return 'linha-default'
			else return index % 2 === 0 ? 'linha-default' : 'linha-escura'
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';
.table-csv {
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 0 1.5rem;
	font-family: $grotesca;
	background-color: $cinza-3;

	.fonte {
		color: $preto;
		opacity: 0.8;
		font-size: x-small;
		align-self: flex-start;
		margin: 0 0 1.5rem;
		span { font-weight: bolder; }
	}

	table {
		border-collapse: collapse;
		background-color: #FFF;
		width: 100%;
		margin-bottom:  1.5rem;

		caption {
			font-size: inherit;
			font-weight: 700;
			margin: 2rem 0 1rem;
		}

		th, td {
			border: 1px solid $cinza-2;
			color: $preto;
			font-size: smaller;
			padding: 4px 8px;
			position: relative;
		}

		thead tr {
			background-color: $sombra-4;
		}
	}

	.linha-escura {
		background-color: $cinza-3;
	}
}
@media screen and (max-width: 600px) {
	table {
		box-sizing: border-box;

		caption {
			font-size: 1.3em;
		}

		thead {
			border: none;
			clip: rect(0 0 0 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			width: 1px;
		}

		tr {
			display: block;
			margin-bottom: .625em;
			box-shadow: 0px 2px 2px 2px $sombra-4;
			cursor: pointer;
		}

		td {
			border-top: none !important;
			border-right: none !important;
			border-left: none !important;
			border-bottom: 1px solid #ddd !important;
			display: block;
			font-size: .8em;
			text-align: right;

			&::before {
				content: attr(data-label);
				font-weight: bold;
				float: left;
				hyphens: auto;
				padding-right: 4px;
				text-align: left;
			}
		}
	}
}
</style>
