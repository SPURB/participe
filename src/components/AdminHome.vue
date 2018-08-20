<template>
	<div class="AdminHome">
		<h1>Consultas</h1>
		<div class="busca">
			<i class="material-icons">search</i>
			<input type="search">
		</div>
		<table>
			<thead>
				<th align="left">
					Nome
					<i class="material-icons">keyboard_arrow_down</i>
				</th>
				<th align="left">
					Início
					<i class="material-icons">keyboard_arrow_down</i>
				</th>
				<th align="left">
					Término
					<i class="material-icons">keyboard_arrow_down</i>
				</th>
			</thead>
			<tr v-for="consulta in consultas">
				<td :class="{ consultaAtiva: consulta.ativo == 1 }">
					<router-link :to="{ name: 'pageConsulta', params: { title: consulta.nomePublico }}" :class="{ consultaAtiva: consulta.ativo == 1 }">{{ consulta.nomePublico }}</router-link>
				</td>
				<td>{{ dataDisplay(consulta.dataCadastro) }}</td>
				<td v-if="consulta.dataFinal">{{ dataDisplay(consulta.dataFinal) }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	nome: 'AdminHome',
	computed:{
		consultas(){return this.$store.state.consultas}
	},
	methods: {
		dataDisplay(data) {
			return data.substring(8,10) + '/' + data.substring(5,7) + '/' + data.substring(0,4);
		},
	},
};
</script>

<style lang="scss" scoped>
div.AdminHome {
	h1 { margin: 0; };

	div.busca {
		padding: 1rem 0;

		input {
			width: 100%;
			border: 1px solid #DDD;
			border-radius: 2px;
			height: 36px;
			padding: 6px 8px 6px 40px;
			font-family: inherit;
			font-size: inherit;
			transition: all ease-in-out .2s;
			caret-color: #EB5757;

			&:hover { border-color: #BDBDBD; };

			&:focus { border-color: #EB5757; };
		};

		i {
			position: absolute;
			line-height: 36px;
			padding: 0 8px;
			color: #BDBDBD;
		};
	};

	table {
		border-collapse: collapse;
		width: 100%;

		thead, tr {
			height: 60px;
			line-height: 24px;
			border-bottom: 1px solid #DDD;
			& > *:first-child { padding-left: 16px; };				
			& > *:last-child { padding-right: 16px; };
		};

		thead {
			th i {
				font-size: inherit;
				line-height: inherit;
				vertical-align: -3px;
			};
		};

		tr {
			td:first-child { width: 60%; border-radius: 2px 0 0 2px; };
			td:nth-child(2) { width: 20%; };
			td:last-child { border-radius: 0 2px 2px 0; };
			&:hover { background: #F8F8F8; };
		};
	};
}
</style>