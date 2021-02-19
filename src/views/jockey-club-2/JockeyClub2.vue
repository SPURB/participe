<template>
	<div class="jockey-club2">
		<apoio>
			<template slot="item2">
				<li>
					<input type="radio" name="tabs" id="item2">
					<label for="item2">Arquivos</label>
					<div class="conteudoTab">
						<h4 class="jockey-club2__section-title">Cadernos do PIU:</h4>
						<h5 class="jockey-club2__section-item">Cadernos</h5>
						<ul class="links">
							<li>
								<a :href="`${base}PIUJC_Caderno_I-Introducao.pdf`" download>
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Apresentação</div>
									<span>218 kb</span>
								</a>
							</li>
							<li>
								<a :href="`${base}PIUJC_Caderno_II-PropostaOrdenamentoUrbanistico.pdf`" download>
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Proposta de ordenamento urbanístico</div>
									<span>26.3 mb kb</span>
								</a>
							<li>
								<a :href="`${base}PIUJC_Caderno_III-ModelagemEconomica.pdf`" download>
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Modelagem econômica</div>
									<span>26.3 mb kb</span>
								</a>
							</li>
							<li>
								<a :href="`${base}PIUJC_Caderno_IV-ModeloGestaoDemocratica.pdf`" download>
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Modelo de gestão democrática</div>
									<span>26.3 mb kb</span>
								</a>
							</li>
						</ul>

						<h4 class="jockey-club2__section-title">Anexos do Decreto:</h4>
						<h5 class="jockey-club2__section-item">Minuta</h5>
						<ul class="links">
							<li>
								<a :href="`${base}Minuta_Decreto_PIU_Jockey_20201209.pdf`" download>
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Minuta do decreto em pdf<br></div>
									<span>166kb</span>
								</a>
							</li>
						</ul>

						<h5 class="jockey-club2__section-item">Mapas</h5>
						<ul class="links">
							<li>
								<a :href="`${base}Anexo1_Mapa1.pdf`" download>
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Mapa 1<br>Perímetro de regulação urbanística e setores</div>
									<span>1.2 Mb</span>
								</a>
							</li>
						</ul>

						<h5 class="jockey-club2__section-item">Quadros</h5>
						<ul class="links">
							<li>
								<a :href="`${base}Anexo2_Quadro1.pdf`" download>
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>QUADRO 1<br>Percentuais mínimos de destinação de área pública e dimensão máxima de lotes por subsetor</div>
									<span>78kb</span>
								</a>
							</li>
							<li>
								<a :href="`${base}Anexo3_Quadro2.pdf`" download>
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>QUADRO 2<br>Parâmetros de Ocupação e Fatores de Planejamento por Subsetores</div>
									<span>498 kb</span>
								</a>
							</li>
							<li>
								<a :href="`${base}Anexo4_Quadro2A.pdf`" download>
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>QUADRO 2A<br>Parâmetros de Quota Ambiental: Pontuação mínima e Taxa de Permeabilidade Mínima.</div>
									<span>495 kb</span>
								</a>
							</li>
							<li>
								<a :href="`${base}Anexo5_Quadro3.pdf`" download>
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>QUADRO 3<br>Usos permitidos nos Subsetores do PIU Jockey Club</div>
									<span>425 kb</span>
								</a>
							</li>
							<li>
								<a :href="`${base}Anexo6_Quadro3A.pdf`" download>
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>QUADRO 3A<br>Parâmetros de Incomodidade da ZOE Jockey Club</div>
									<span>79kb</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
			</template>
		</apoio>
		<router-view />
	</div>
</template>
<script>
import Apoio from '@/components/Apoio'
import { mapGetters } from 'vuex'

export default {
	name: 'JockeyClub2',
	components: {
		Apoio
	},
	computed: {
		...mapGetters(['basePath']),
		base () {
			return `${this.basePath}arquivos/jockey-club-2/anexos/`
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../../variables';
@import '../../assets/styles/lista';
a, a:hover {
	text-decoration: none;
}
.jockey-club2 {
	&__section-title {
		margin-bottom: 0.25rem;
	}

	&__section-item {
		margin-bottom: 0.25rem;
    margin-top: 0.25rem;
	}
	.links {
		margin-top: 0;
		padding-left: 1rem;
	}
}
</style>
