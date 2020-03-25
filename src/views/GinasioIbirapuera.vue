<template>
	<div class="GinasioIbirapuera" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/ginasio-ibirapuera_122w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>Modelagem da concessão de uso do complexo desportivo Constâncio Vaz Guimarães e construção de arena multiuso</div></template>
			<template slot="subtitulo"><div>Avaliação urbanística</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<Apoio></Apoio>
		<!-- Decreto Nº 56.901 inclua este componente caso seja um PIU -->

		<section>
			<imagem :dados="{
				caption: 'Imagem 01: Vista aérea do Ibirapuera – Autor: Edilson Pacheco Aquino',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/imagem1.jpg'),
				fonte: 'http://www.acervosdacidade.prefeitura.sp.gov.br/-acessado-em-13/09/2019'
			}" />
			<imagem :dados="{
				caption: 'Imagem 02: Término da construção da piscina – Autor: José Moscardi',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/imagem2.jpg'),
				fonte: 'https://www.arquivo.arq.br/ginsio-do-ibirapuera-acessado-em-13/09/2019'
			}" />
			<imagem :dados="{
				caption: 'Imagem 03: Construção do Ginásio do Ibirapuera – Autor: Hans Gunter Flieg',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/imagem3.jpg'),
				fonte: 'https://www.arquivo.arq.br/ginsio-do-ibirapuera-acessado-em-13/09/2019'
			}" />
			<imagem :dados="{
				caption: 'Mapa 01: Perímetro de Intervenção e entorno para fins de avaliação',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa1.jpg'),
				fonte: 'Ortofoto 2017 – PMSP – Geosampa. Elaboração própria'
			}" />
			<imagem :dados="{
				caption: 'Mapa 02: Inserção Metropolitana',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa2.jpg'),
				fonte: 'Google Earth. Elaboração própria'
			}" />
			<imagem :dados="{
				caption: 'Mapa 03: Município de São Paulo – Subprefeituras / Inserção Urbana – Distritos',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa3.jpg'),
				fonte: 'Fonte: Geosampa – MDC, 2004. Elaboração própria'
			}" />
			<imagem :dados="{
				caption: 'Mapa 04: Macroáreas',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa4.jpg'),
				fonte: 'Google Earth. Elaboração própria'
			}" />
			<imagem :dados="{
				caption: 'Mapa 05: Zoneamento',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa5.jpg'),
				fonte: 'Mapa 01, da Lei nº 16.402/16 (LPUOS)'
			}" />
			<imagem :dados="{
				caption: 'Imagem 04: Bairro Universitário Cultural (ID 279)',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/imagem4.jpg'),
				fonte: 'Plano Regional – Subprefeitura Vila Mariana'
			}" />
			<imagem :dados="{
				caption: 'Mapa 06: Marcos Urbanos do entorno do Complexo Constâncio Vaz Guimarães',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa6-1.jpg'),
				fonte: 'Fonte: Geosampa, Google. Elaboração própria'
			}" />
			<imagem :dados="{
				caption: 'Mapa 06: Equipamentos esportivos',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa6-2.jpg'),
				fonte: 'Fonte: Estudo de oportunidade e vocações – Natureza Urbana. Elaboração própria'
			}" />
			<imagem :dados="{
				caption: 'Imagem 05: Diagrama - Espaços de eventos, São Paulo',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/imagem5.jpg'),
				fonte: 'Fonte: Estudo de oportunidade e vocações – Natureza Urbana. Elaboração própria'
			}"
			maxWidth="900px" />
			<imagem :dados="{
				caption: 'Imagem 06: Estudo sobre o desmembramento territorial da antiga invernada para os animais do corpo dos bombeiros',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/imagem6.jpg'),
				fonte: 'Relatório desenvolvido pela Procuradoria Geral do Estado, Procuradoria do Patrimônio, Volume II da Pasta Especial “PE 998”'
			}" />
			<imagem :dados="{
				caption: 'Mapa 07: Complexo Desportivo Constâncio Vaz Guimarães',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa7.jpg'),
				fonte: 'Geosampa. Elaboração própria'
			}" />

			<div class="grafico">
				<h3 class="grafico__titulo">Gráfico 01: População</h3>
				<h4 class="grafico__subtitulo">Distritos Vila Mariana</h4>
				<ve-pie :data="{
						columns: ['distrito', 'porcentagem' ],
						colors: ['red', 'blue', 'green'],
						rows: [
							{ 'distrito': 'Moema - 25%', 'porcentagem': 25 },
							{ 'distrito': 'Saúde - 38%', 'porcentagem': 38 },
							{ 'distrito': 'Vila Mariana - 37%', 'porcentagem': 37 },
						]
					}"
					:colors="[ '#9a9a9a', '#ee947c','#d4d2d3' ]"
				></ve-pie>
				<p class="grafico__fonte">Fonte: SEADE / Observa Sampa. Elaboração própria</p>
			</div>

			<div class="grafico wider">
				<h3 class="grafico__titulo">Gráfico 02: População Censitária e Projeções Populacionais</h3>
				<h4 class="grafico__subtitulo">2010 – 2040</h4>
				<ve-line :data="{
						columns: ['date', 'Alto de Pinheiros', 'Itaim Bibi', 'Jardim Paulista', 'Pinheiros', 'Moema', 'Saúde', 'Vila Mariana' ],
						rows: [
							{ 'date': '2010', 'Alto de Pinheiros': 41655,	'Itaim Bibi': 92570, 	'Jardim Paulista': 88692, 'Pinheiros': 65364, 'Moema': 83368, 	'Saúde': 130780, 'Vila Mariana': 130484 },
							{ 'date': '2015', 'Alto de Pinheiros': 41654, 	'Itaim Bibi': 96803, 	'Jardim Paulista': 89576, 'Pinheiros': 65312, 'Moema': 88445, 	'Saúde': 135013, 'Vila Mariana': 131470 },
							{ 'date': '2020', 'Alto de Pinheiros': 40117, 	'Itaim Bibi': 100916, 	'Jardim Paulista': 90189, 'Pinheiros': 65058, 'Moema': 93540, 	'Saúde': 138950, 'Vila Mariana': 132052 },
							{ 'date': '2025', 'Alto de Pinheiros': 38505, 	'Itaim Bibi': 104848, 	'Jardim Paulista': 90500, 'Pinheiros': 64585, 'Moema': 98594, 	'Saúde': 142519, 'Vila Mariana': 132189 },
							{ 'date': '2030', 'Alto de Pinheiros': 36821, 	'Itaim Bibi': 108528, 	'Jardim Paulista': 90474, 'Pinheiros': 63878, 'Moema': 103536, 	'Saúde': 145637, 'Vila Mariana': 131835 },
							{ 'date': '2040', 'Alto de Pinheiros': 33243, 	'Itaim Bibi': 114804, 	'Jardim Paulista': 89273, 'Pinheiros': 61694, 'Moema': 112723, 	'Saúde': 150147, 'Vila Mariana': 129463 },
						]
					}"
				></ve-line>
				<p class="grafico__fonte">Fonte: Prefeitura de São Paulo. Elaboração própria</p>
			</div>

			<imagem :dados="{
				caption: 'Mapa 08: Densidade Demográfica',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/mapa8.jpg'),
				fonte: 'Geosampa. Elaboração própria'
			}" />

			<tabela :dados="{
				titulo: 'Tabela 01: Domicílios, População e Densidade Domiciliar',
				colunas: [
					{ titulo: 'Unidades Territoriais' },
					{ titulo: 'Domicílios' },
					{ titulo: 'População' },
					{ titulo: 'Pess/Dom.' }
				],
				linhas: [
					[
						[{ data: 'Município de São Paulo' }],
						[{ data: '3 574 286' }],
						[{ data: '11 253 503' }],
						[{ data: 3.15 }]],
					[
						[{ data: 'Alto de Pinheiros (Distrito)' }],
						[{ data: '15 408' }],
						[{ data: '43 117' }],
						[{ data: 2.80 }]],
					[
						[{ data: 'Itaim Bibi (Distrito)' }],
						[{ data: '39 230' }],
						[{ data: '92 570' }],
						[{ data: 2.36 }]
					],
					[
						[{ data: 'Jardim Paulista (Distrito)' }],
						[{ data: '39 701' }],
						[{ data: '88 692' }],
						[{ data: 2.23 }]
					],
					[
						[{ data: 'Pinheiros (Distrito)' }],
						[{ data: '27 083' }],
						[{ data: '65 364' }],
						[{ data: 2.41 }]
					],
					[
						[{ data: 'Moema (Distrito)' }],
						[{ data: '34 821' }],
						[{ data: '83 368' }],
						[{ data: 2.39 }]
					],
					[
						[{ data: 'Saúde (Distrito)' }],
						[{ data: '49 278' }],
						[{ data: '130 780' }],
						[{ data: 2.65 }]
					],
					[
						[{ data: 'Vila Mariana (Distrito)' }],
						[{ data: '51 822' }],
						[{ data: '130 484' }],
						[{ data: 2.52 }]
					]
				],
				tabelaListrada: false,
				fonte: 'Prefeitura de São Paulo. Elaboração própria'
			}"/>

			<imagem :dados="{
				caption: 'Gráfico 03: Domicílios segundo Moradores por Dormitório',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/grafico3.jpg'),
				fonte: 'IBGE. Elaboração própria'
			}" />

			<tabela :dados="{
				titulo: 'Tabela 01: Domicílios, População e Densidade Domiciliar',
				colunas: [
					{ titulo: 'Unidades Territoriais' },
					{ titulo: 'Total de Domicílios' },
					{ titulo: 'Ligado à Rede' },
					{ titulo: 'Não ligado' }
				],
				linhas: [
					[
						[{ data:'Município de São Paulo' }],
						[{ data: '3.570.406' }],
						[{ data: '3.285.168' }],
						[{ data: '285.238' }]
					],
					[
						[{ data:'Pinheiros (Subprefeitura)' }],
						[{ data: '121.392' }],
						[{ data: '121.258' }],
						[{ data: '134' }]
					],
					[
						[{ data:'Alto de Pinheiros (Distrito)' }],
						[{ data: '15.408' }],
						[{ data: '15.393' }],
						[{ data: '15' }]
					],
					[
						[{ data:'Itaim Bibi (Distrito)' }],
						[{ data: '39.213' }],
						[{ data: '39.150' }],
						[{ data: '63' }]
					],
					[
						[{ data:'Jardim Paulista (Distrito)' }],
						[{ data: '39.686' }],
						[{ data: '39.649' }],
						[{ data: '37' }]
					],
					[
						[{ data:'Pinheiros (Distrito)' }],
						[{ data: '27.085' }],
						[{ data: '27.066' }],
						[{ data: '19' }]
					],
					[
						[{ data:'Vila Mariana (Subprefeitura)' }],
						[{ data: '135.965' }],
						[{ data: '135.594' }],
						[{ data: '372' }]
					],
					[
						[{ data:'Moema (Distrito)' }],
						[{ data: '34.810' }],
						[{ data: '34.810' }],
						[{ data: '0' }]
					]
					[
						[{ data:'Saúde (Distrito)' }],
						[{ data: '49.272' }],
						[{ data: '48.956' }],
						[{ data: '317' }]
					],
					[
						[{ data:'Vila Mariana (Distrito)' }],
						[{ data: '51.882' }],
						[{ data: '51.827' }],
						[{ data: '55' }]
					]
				],
				tabelaListrada: false,
				fonte: 'Prefeitura de São Paulo. Elaboração própria'
			}"/>
<!-- Unidades Territoriais	Total De Domicílios	Ligado À Rede	Não Ligado -->
		</section>
		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && consultaAtiva" :attr="{id:commentId(), context:'Comentarios'}"></Comments>
		</section>
	</div>
</template>
<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Apoio from '@/components/Apoio'
import Imagem from '@/components/Imagem'
import { consultasCommons } from '@/mixins/consultasCommons'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import Tabela from '@/components/Tabela'
import VePie from 'v-charts/lib/pie.common'
import VeLine from 'v-charts/lib/line.common'

export default {
	name: 'GinasioIbirapuera',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {}
		}
	},
	components: {
		Comments,
		CommentsLoader,
		PageTop,
		Indice,
		Tabela,
		Apoio,
		Imagem,
		VePie,
		VeLine
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

.grafico {
	border: 1px $cinza-2 solid;
	max-width: 700px;
	margin: 1rem auto;
	text-align: center;
	@media (max-width: 600px) {
		margin: 1rem
	}
}

.wider {
	max-width: 900px;
	@media (max-width: 900px) {
		margin: 1rem
	}
}

.grafico__titulo,
.grafico__subtitulo {
	font-size: initial;
}
.grafico__titulo {
	margin-top: 1.5rem;
}
.grafico__subtitulo {
	margin-bottom: 2rem;
	font-weight: normal;
}

.grafico__fonte {
	font-family: $grotesca;
	font-size: x-small;
}
</style>
