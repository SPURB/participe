<template>
	<div class="AdminSide">
		<div class="titulo">
			<router-link to="/admin"><i class="material-icons" @click="">home</i></router-link>
			<span>{{ contextoNav }}</span>
		</div>
		<div class="lista">
			<h2>Consultas</h2>
			<ul>
				<li v-for="consulta in consultas">
					<router-link 
						:to="{ 
							path: '/consulta', 
							name: 'pageConsulta', 
							params: { 
									title: consulta.nomePublico, 
									id: consulta.id_consulta 
								}
							}"
							:class="{ consultaAtiva: consulta.ativo == 1 }">
						{{ consulta.nomePublico }}
					</router-link>
				</li>
			</ul>
		</div>
		<router-link :to="'/admin/novaconsulta'"><button class="novaConsulta">Criar consulta</button></router-link>
	</div>
</template>

<script>
	export default {
		name: 'AdminSide',
		data(){
			return {
				contextoNav: 'Admin'
			}
		},
		computed:{
			consultas(){ return this.$store.state.consultas },
		},
		watch:{
			$route(to){
				// console.log(to)
				switch (to.name){
					case 'pageConsulta' : this.contextoNav = to.params.title; break;
					case 'novaConsulta' : this.contextoNav = 'Nova Consulta'; break;
					default : this.contextoNav = 'Admin'; break
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
div.AdminSide {
	div.titulo {
		display: flex;
		align-items: center;
		color: #777;
		margin-bottom: 2rem;
		height: 2.4rem;

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

	button.novaConsulta {
		margin: 2rem 0 0 0;
		padding: 16px;
		width: 100%;
		font-family: inherit;
		font-size: 100%;
		font-weight: 500;
		background: transparent;
		color: #777;
		border-radius: 2px;
		border: 1px solid #BDBDBD;
		text-transform: uppercase;
		box-shadow: inset 0 4px 4px rgba(0, 0, 0, .08);
		cursor: pointer;
		transition: all ease-in .1s;

		i {
			font-size: 120%;
			vertical-align: text-bottom;
		};

		&:hover {
			color: #FFF;
			border-color: transparent;
			background: #EB5757;
		};

		&:active { background: #F5F5F5; };
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