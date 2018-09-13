<template>
	<div class="Apoio">
		<aside :class="{ aberto: apoioToggle }">
			<ul class="tabs">
				<li>
					<input type="radio" name="tabs" id="decreto">
					<label for="decreto">Decreto</label>
					<div class="conteudoTab">
						<slot></slot>
					</div>
				</li>
<!-- 			<li>
					<input type="radio" name="tabs" id="quadros">
					<label for="quadros">Quadros</label>
					<div class="conteudoTab">
						<figure title="Síntese das intervenções de qualificação ambiental" class="borda">
							<img src="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/ANH_ambiental.jpg" alt="Síntese das intervenções de qualificação ambiental">
							<h6>Síntese das intervenções de qualificação ambiental</h6>
							<ul class="legenda">
								<li>
									<div class="linha" style="border-style: dashed; border-color: #ee832c"></div>
									Ciclovia proposta
								</li>
								<li>
									<div style="border-width: 0; border-radius: 100%; background: url('http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/legendaAmbiental1.gif');"></div>
									Requalificação
								</li>
								<li>
									<div style="border-style: dotted; border-color: #47642e; border-width: 0; border-right-width: 5px; transform: rotate(45deg) translateX(-8px);"></div>
									Alamedas propostas
								</li>
								<li>
									<div style="border-style: dotted; border-color: #85c444; border-width: 0; border-right-width: 5px; transform: rotate(45deg) translateX(-8px);"></div>
									Bulevares propostos
								</li>
								<li>
									<div class="linha" style="border-color: #ffba18;"></div>
									Melhoria de passeio existente
								</li>
								<li>
									<div class="linha" style="border-color: #f2903c;"></div>
									Rede cicloviária existente
								</li>
							</ul>
						</figure>
					</div>
				</li>
				<li>
					<input type="radio" name="tabs" id="mapas">
					<label for="mapas">Mapas</label>
					<div class="conteudoTab">
						<figure title="Síntese das intervenções de habitação de interesse social" class="borda">
							<img src="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/ANH_habitacao.jpg" alt="Habitação">
							<h6>Síntese das intervenções de habitação de interesse social</h6>
							<ul class="legenda">
								<li>
									<div style="border-width: 0; border-radius: 100%; background: url('http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/legendaHabitacao1.gif');"></div>
									Áreas públicas
								</li>
								<li>
									<div style="border-width: 0; background: #d7ab60;"></div>
									Intervenção integrada em áreas precárias
								</li>
								<li>
									<div style="border-width: 0; background: #fe7401;"></div>
									Requalificação e regularização de conjuntos habitacionais
								</li>
								<li>
									<div style="border-width: 0; background: #c20001;"></div>
									Remoção e reassentamento de famílias atingidas pelo Programa de Intervenções
								</li>
							</ul>
						</figure>
					</div>
				</li> -->
			</ul>
		</aside>
		<button @click="abreApoio" :class="{ aberto: apoioToggle }">
			<i class="material-icons">chevron_left</i>
		</button>
		</div>
</template>

<script>
export default {
	name: 'Indice',
	data() {
		return {
			aberto: false,
		}
	},
	computed: {
		apoioToggle() {
			return this.$store.state.apoioToggle
		}
	},
	mounted() {},
	methods: {		
		abreApoio() {
			if (this.$store.state.apoioToggle) {
				this.$store.state.apoioToggle = false;
				this.$store.state.luzApaga = false;
			} else {
				this.$store.state.apoioToggle = true;
				this.$store.state.luzApaga = true;
			};
		},
	},
};
</script>

<style lang="scss" scoped>
div.Apoio {
	aside {
		position: fixed;
		right: 0;
		top: 0;
		width: 60vw;
		min-width: 300px;
		max-width: 700px;
		height: 100vh;
		min-width: 280px;
		margin: 0;
		background: #F5F5F5;
		transform: translateX(100%);
		transition: transform ease-in .2s;
		z-index: 5;

		&.aberto { transform: translateX(0); box-shadow: -8px 0 8px rgba(0, 0, 0, .48); };

		ul.tabs {
			list-style-type: none;
			padding: 0;
			margin: 0;
			font-family: inherit;

			& > li {
				float: left;
				margin: 0;
				padding: 0;

				& > input { display: none; };

				& > label {
					display: inline-block;
					cursor: pointer;
					padding: 20px 2rem;
					opacity: .4;
					font-size: smaller;
					line-height: 20px;
					transition: all ease-in .1s;

					&:hover { color: #333; };
				};

				& > input:checked + label {
					opacity: 1;
					background-color: #EB5757;
					color: #FFF;
					z-index: 1;
				};

				& > input:checked ~ div.conteudoTab {
					opacity: 1;
					z-index: 2;
				};
			};

			div.conteudoTab {
				// opacity: 0;
				position: absolute;
				left: 0;
				padding: 1.6rem 2rem;
				max-height: calc(100vh - 60px);
				min-width: 100%;
				overflow-y: auto;
				transition: opacity ease-out .2s;
				background: #FFF;

				h1 {
					margin: 0 0 2rem 0;
					padding: 0;
					font-size: larger;
				};

				p.caput {
					font-size: smaller;
					margin: 0 0 2rem 0;
					color: #777;
				};

				p { padding: 0; }
			};
		};
	};

	button {
		position: fixed;
		padding: 0;
		top: unset;
		bottom: 6rem;
		right: 2rem;
		max-width: 42px;
		max-height: 42px;
		background: #FFF;
		border-radius: 100%;
		border: 1px solid #BDBDBD;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
		transition: all ease-in .1s;
		display: block;
		font-family: inherit;
		z-index: 0;

		i {
			line-height: 40px;
			height: 40px;
			width: 40px;
		};

		&:active {
			background: #EB5757;
			color: #FFF;
			border-color: #EB5757;

			&::before { color: #333; };
		};

		&:hover {
			cursor: pointer;

			&::before { opacity: 1; };
		};

		&::before {
			content: 'Ver texto de apoio';
			position: absolute;
			margin: 4px 0 0 -132px;
			line-height: 32px;
			padding: 0 8px;
			border-radius: 10px;
			opacity: 0;
			transition: all ease-in .1s;
			font-size: 14px;
			color: #333;
		};
	};

	button.aberto {
		transform: rotate(180deg);
		&::before { opacity: 0; };
	};

	@media (max-width: 1200px) {
		aside ul.tabs {
			li label { padding: 8px 12px; };
			div.conteudoTab { max-height: 100%; };
		};
		button::before { display: none; };
	};
};
</style>