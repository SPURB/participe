<template>
	<div class="AdminHome">
		<nav>
			<div class="titulo">
				<a href=""><i class="material-icons" @click="">home</i></a>
				<span>Início</span>
			</div>
			<div class="lista">
				<h2>Consultas</h2>
				<ul>
					<li v-for="consulta in consultas">
						<a href="" :class="{ consultaAtiva: consulta.ativo }">{{ consulta.nome }}</a>
					</li>
				</ul>
			</div>
		</nav>
		<section>
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
					<td :class="{ consultaAtiva: consulta.ativo }">
						<a :href="consulta.urlConsulta">{{ consulta.nome }}</a>
					</td>
					<td>{{ dataDisplay(consulta.dataCadastro) }}</td>
					<td>{{ dataDisplay(consulta.dataFinal) }}</td>
				</tr>
			</table>
		</section>
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
	margin: 0 auto;
	padding: 2rem;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;

	nav {
		width: 240px;
		max-width: 100%;
		margin-right: calc(2rem - 12px);
			margin-bottom: 2rem;

		div.titulo {
			display: flex;
			align-items: center;
			color: #777;
			margin-bottom: 2rem;

			a i {
				margin-right: 8px;
				font-size: larger;
				line-height: 1.6rem;
				background: #F5F5F5;
				padding: 4px 8px;
				border-radius: 2px;
				color: #777;
			};
			a:hover i {
				background: #777;
				color: #FFF;
				cursor: pointer;
			};

			span {
				text-transform: uppercase;
				line-height: 1.6rem;
				background: #F5F5F5;
				padding: 4px 12px;
				border-radius: 2px;
				width: 100%;
			};
		};

		div.lista {
			h2 {
				font-size: inherit;
				margin: 0;
			};

			ul {
				padding: 0;
				margin: 0;
				list-style-type: none;

				li a {
					display: block;
					padding: 4px 8px;
					margin: 8px 0;
					border-radius: 2px;
					color: inherit;
					background: #F5F5F5;
					transition: all .1s;

					&:first-child {
						margin-top: 4px;
					};

					&:hover {
						text-decoration: none;
						background: #777;
						color: #FFF;
					};
				};
			};
		};
	};

	section {
		max-width: 100%;
		min-width: 40vw;

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
	};
};

.consultaAtiva::after {
	display: inline-block;
	content: 'Em consulta';
	background: #008015;
	color: #FFF;
	font-size: 10px;
	text-transform: uppercase;
	line-height: 10px;
	white-space: nowrap;
	text-overflow: ellipsis;
	height: 10px;
	padding: 2px 4px;
	border-radius: 2px;
	vertical-align: 2px;
	margin-left: 4px;
};
</style>