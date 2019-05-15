<template>
	<div class="ParqueMinhocao" ref="conteudoConsulta">
		<PageTop background_image_src="" :esta_consulta="estaConsulta" :social="social_assets">
			<template slot="titulo"><div>PIU Parque Minhocão</div></template>
			<template slot="subtitulo"><div>1ª consulta pública – Elementos prévios ao desenvolvimento do projeto</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>
		<Processo></Processo>
		<Imagem :dados="{
			tipo: 'mapa',
			url: imgSrc('arquivos/parque-minhocao/img/mapas/fig2.jpg'),
			titulo: 'PIU Setor Central da MEM – inserção do Parque Minhocão como projeto estratégico',
			legenda: [
				{ borda: '#9107fd', espessura: '3', descricao: 'Projetos Estratégicos do PIU Setor Central' },
				{ borda: '#333', pontilhado: true, espessura: '1', descricao: 'Perímetro do PIU Setor Central' }
			],
			fonte: 'SP Urbanismo, 2019'
		}"></Imagem>
		<Imagem :dados="{
			tipo: 'coluna',
			url: imgSrc('arquivos/parque-minhocao/img/fig3.jpg'),
			caption: 'Mapa de Situação ',
			fonte: 'ARTIGAS, R. et al. Caminhos do Elevado: Memória e Projetos. São Paulo: Ed. Imprensa Oficial, 2008, p.77'
		}"></Imagem>
		<Imagem :dados="{
			tipo: 'mapa',
			url: imgSrc('arquivos/parque-minhocao/img/mapas/fig4.jpg'),
			titulo: 'Limites Administrativos',
			legenda: [
				{ borda: '#589fad', espessura: '2', descricao: 'Distritos' },
				{ borda: '#ec6768', espessura: '2', descricao: 'Subprefeituras' },
				{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
			],
			fonte: 'Geoinfo, 2014'
		}"></Imagem>
		<Imagem :dados="{
			tipo: 'mapa',
			url: imgSrc('arquivos/parque-minhocao/img/mapas/fig5.jpg'),
			titulo: 'Densidades Habitacionais',
			legenda: [
				{ fundo: '#a2b9c8', descricao: 'Até 25 hab/ha' },
				{ fundo: '#cfe4f0', descricao: '25 a 50 hab/ha' },
				{ fundo: '#f8f6d7', descricao: '50 a 100 hab/ha' },
				{ fundo: '#fedcb1', descricao: '100 a 250 hab/ha' },
				{ fundo: '#e6bc8f', descricao: '250 a 400 hab/ha' },
				{ fundo: '#d29689', descricao: '400 a 600 hab/ha' },
				{ fundo: '#af8284', descricao: 'Acima de 600 hab/ha' },
				{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
			],
			fonte: 'IBGE, 2010'
		}"></Imagem>
		<Imagem :dados="{
			tipo: 'mapa',
			url: imgSrc('arquivos/parque-minhocao/img/mapas/fig6.jpg'),
			titulo: 'Densidades de Empregos *',
			legenda: [
				{ fundo: '#fee6b1', descricao: 'Até 25' },
				{ fundo: '#fed884', descricao: '25 a 50' },
				{ fundo: '#feb56b', descricao: '50 a 75' },
				{ fundo: '#f9885e', descricao: '75 a 100' },
				{ fundo: '#ea5958', descricao: '100 a 150' },
				{ fundo: '#d13758', descricao: '150 a 200' },
				{ fundo: '#ae3f71', descricao: 'Maior que 200' },
				{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
			],
			fonte: 'RAIS, 2017'
		}">
			<template slot="extra">
				<div>* Unidade de análise: área de ponderação do IBGE</div>
			</template>
		</Imagem>
		<Imagem :dados="{
			tipo: 'mapa',
			url: imgSrc('arquivos/parque-minhocao/img/mapas/fig7.jpg'),
			titulo: 'Renda Média Familiar *',
			legenda: [
				{ fundo: '#daedf5', descricao: 'Até 2 s.m.' },
				{ fundo: '#95bad0', descricao: '2 a 5 s.m.' },
				{ fundo: '#bbbad0', descricao: '5 a 10 s.m.' },
				{ fundo: '#dfc8d9', descricao: '10 a 20 s.m.' },
				{ fundo: '#efb4b4', descricao: 'Acima de 20 s.m.' },
				{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
			],
			fonte: 'IBGE, 2010'
		}">
			<template slot="extra">
				<div>* Média de renda mensal dos domicílios, em salários mínimos (s.m.) de 2010</div>
			</template>
		</Imagem>
		<Imagem :dados="{
			tipo: 'mapa',
			url: imgSrc('arquivos/parque-minhocao/img/mapas/fig8.jpg'),
			titulo: 'Vulnerabilidade Social',
			legenda: [
				{ fundo: '#ded5b0', descricao: 'Grupo 1: baixíssima' },
				{ fundo: '#ccffa4', descricao: 'Grupo 2: muito baixa' },
				{ fundo: '#55aa7f', descricao: 'Grupo 3: baixa' },
				{ fundo: '#e6aa4a', descricao: 'Grupo 4: média' },
				{ fundo: '#ff5500', descricao: 'Grupo 5: alta' },
				{ fundo: '#ff0000', descricao: 'Grupo 6: muito alta' },
				{ fundo: '#bcbcbc', descricao: 'Sem classificação' },
				{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
			],
			fonte: 'SEADE, 2010 (IPVS - Índice Paulista de Vulnerabilidade Social 2010)'
		}"></Imagem>
		<Imagem :dados="{
			tipo: 'mapa',
			url: imgSrc('arquivos/parque-minhocao/img/mapas/fig9.jpg'),
			titulo: 'Predominância de Uso por Quadra',
			legenda: [
				{ fundo: '#f0f0f0', descricao: 'Sem informação' },
				{ fundo: '#ffffb9', descricao: 'RH Baixo Padrão' },
				{ fundo: '#ffcf55', descricao: 'RH Médio/Alto Padrão' },
				{ fundo: '#a0c0ff', descricao: 'RV Baixo Padrão' },
				{ fundo: '#427592', descricao: 'RV Médio/Alto Padrão' },
				{ fundo: '#b63327', descricao: 'Comércio e Serviços' },
				{ fundo: '#a2557e', descricao: 'Indústria e Armazéns' },
				{ fundo: '#ff9933', descricao: 'Residencial + Comércio/Serviços' },
				{ fundo: '#ffcc99', descricao: 'Residencial + Indústria/Armazéns' },
				{ fundo: '#ffc6ff', descricao: 'Comércio/Serviços + Indústria/Armazéns' },
				{ fundo: '#0000eb', descricao: 'Equipamentos públicos' },
				{ fundo: '#00afaf', descricao: 'Escolas' },
				{ fundo: '#9f5000', descricao: 'Terrenos vagos' },
				{ fundo: '#c09000', descricao: 'Outros' },
				{ fundo: '#909090', descricao: 'Sem predominância' },
				{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
			],
			fonte: 'TPCL, 2015'
		}"></Imagem>
		<Imagem :dados="{
			tipo: 'mapa',
			url: imgSrc('arquivos/parque-minhocao/img/mapas/fig10.jpg'),
			titulo: 'Gabarito das edificações',
			legenda: [
				{ fundo: '#ffba73', descricao: 'Até 5 metros' },
				{ fundo: '#fb613f', descricao: '5 até 10 metros' },
				{ fundo: '#d80808', descricao: '10 até 30 metros' },
				{ fundo: '#750606', descricao: '30 até 45 metros' },
				{ fundo: '#050000', descricao: 'Maior que 45 metros' },
				{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
			],
			fonte: 'TPCL, 2019'
		}"></Imagem>
		<Imagem :dados="{
			tipo: 'mapa',
			url: imgSrc('arquivos/parque-minhocao/img/mapas/fig11.jpg'),
			titulo: 'Relevo e hidrografia',
			legenda: [
				{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
			],
			fonte: 'Deinfo, 2014'
		}"></Imagem>
		<Imagem :dados="{
			tipo: 'mapa',
			url: imgSrc('arquivos/parque-minhocao/img/mapas/fig12.jpg'),
			titulo: 'Áreas verdes e arborização',
			legenda: [
				{ fundo: '#3c7e32', descricao: 'Parques Municipais' },
				{ fundo: '#c0ea56', descricao: 'Parques Estaduais' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig12_1.jpg'), descricao: 'Arborização urbana' },
				{ fundo: '#58a48e', descricao: 'Canteiros viários' },
				{ fundo: '#a5d48b', descricao: 'Praças' },
				{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão - Elevado Pres. João Goulart' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
			],
			fonte: 'Deinfo, 2014'
		}"></Imagem>
		<Galeria :gallery_attrs="galeria01"></Galeria>
		<Galeria :gallery_attrs="galeria02"></Galeria>
		<Galeria :gallery_attrs="galeria03"></Galeria>
		<Galeria :gallery_attrs="galeria04"></Galeria>
		<Galeria :gallery_attrs="galeria05"></Galeria>
		<div class="mobiliario-centro-aberto">
			<ul>
				<li v-for="item in mobiliario_centro_aberto">
					<img :src="item.ilustracao" :alt="item.titulo" :title="item.titulo">
					<div class="nome">{{ item.titulo }}</div>
					<ul>
						<li v-for="caracteristica in item.caracteristicas">{{ caracteristica }}</li>
					</ul>
				</li>
			</ul>
			<div class="dados">
				Exemplo de mobiliário no padrão Centro Aberto. Fonte: <a href="https://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2015/07/Centro_Aberto_Pub.pdf">Centro Aberto: experiências na escala humana</a>. SMDU, PMSP.
			</div>
		</div>
		<!-- <section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:14, context:'Comentarios'}"></Comments>
		</section> -->
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import CommentsContext from '@/components/CommentsContext'
import CommentsLoader from '@/components/CommentsLoader'
import Galeria from '@/components/Galeria'
import Apoio from '@/components/Apoio'
import Tabela from '@/components/Tabela'
import Imagem from '@/components/Imagem'
import AntesDepois from '@/components/AntesDepois'
import GraficoLinha from '@/components/GraficoLinha'
import Processo from '@/components/graf/parque-minhocao/processo'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'ParqueMinhocao',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			social_assets: {
				whatsapp: 'a',
				facebook: 'a',
				twitter: 'a'
			},
			mobiliario_centro_aberto: [{
				'titulo': 'Bancos Modulares',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/1.jpg',
				caracteristicas: [ 'Criam espaços para conversar', 'Conformam ‘espaços dentro do espaço’, convidando os passantes a sentar', 'Constroem grandes elementos para permanência', 'Tornam os espaços mais verdes com adição de vasos e planta' ]
			}, {
				'titulo': 'Banco e Mobiliário Portátil',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/2.jpg',
				caracteristicas: [ 'Garantem múltiplas possibilidades de sentar ao ar livre', 'Conferem ao usuário o protagonismo no uso do espaço, movendo as cadeiras para a sombra, sentando em grupos etc.', 'Mesinhas na calçada dão apoio à comida de rua (barracas, food-trucks, food-bikes etc.)', 'Guarda-sóis proporcionam sombra nas áreas de permanência' ]
			}, {
				'titulo': 'Vasos',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/3.jpg',
				caracteristicas: [ 'Ampliam a presença do verde na cidade', 'Fornecem sombra e filtrar a luz solar', 'Criam novos ambientes dentro do espaço', 'Servem como elementos adicionais de descanso', 'São uma alternativa aos balizadores para bloqueio do tráfego' ]
			}, {
				'titulo': 'Balizadores',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/4.jpg',
				caracteristicas: [ 'Impedem a entrada de veículos sem interromper as linhas de desejo dos pedestres', 'Servem como bancos informais', 'Conformam pequenas bordas secundárias' ]
			}, {
				'titulo': 'Tratamento de piso',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/5.jpg',
				caracteristicas: [ 'Unifica o espaço', 'Identifica com clareza as transformações do lugar', 'Cria identidade visual para intervenções pulverizadas', 'Conquista áreas de leito carroçável ocioso, mediando uma nova relação de uso do espaço viário' ]
			}, {
				'titulo': 'Iluminação e Projeção',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/6.jpg',
				caracteristicas: [ 'Garantem espaços públicos mais seguros', 'Convidam ao uso noturno', 'Reanimam fachadas e muros sem janelas', 'Realçam detalhes das construções', 'Criam padrões luminosos de piso' ]
			}, {
				'titulo': 'Instalações Temporárias',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/7.jpg',
				caracteristicas: [ 'Ativam bordas e fachadas degradadas ', 'Adicionam novas funções e atividades ao local', 'Criam unidades-satélite de atividades já presentes no entorno', 'Servem como unidades de depósito', 'Garantem a  presença  de  pessoas  no  local  ao  longo  do  dia,  fortalecendo a vigilância passiva' ]
			}, {
				'titulo': 'Centro de Informações e Apoio',
				'ilustracao': this.$store.getters.basePath + 'arquivos/parque-minhocao/mobiliario-centro-aberto/8.jpg',
				caracteristicas: [ 'Unidade de apoio e depósito de mobiliário portátil', 'Concentra informações sobre o projeto', 'Promove a zeladoria do espaço', 'Proporciona a interface com usuários' ]
			}],
			galeria01: {
				galleryTitle: 'Fotografias de imóveis no Setor 007, Quadra 020',
				width: 623,
				height: 468,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q020/1.jpeg',
					state: true,
					legenda: 'Rua das Palmeiras, nº 58',
					icon: false,
					id: 1
				}, {
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q020/2.jpeg',
					state: false,
					legenda: 'Rua Helvetia, nº 990',
					icon: false,
					id: 2
				}]
			},
			galeria02: {
				galleryTitle: 'Fotografias de imóveis no Setor 007, Quadra 041',
				width: 623,
				height: 468,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q041/1.jpeg',
					state: true,
					legenda: 'Avenida São João, nº 1475',
					icon: false,
					id: 1
				}, {
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q041/2.jpeg',
					state: false,
					legenda: 'Rua Doutor Frederico Steidel, nº 120',
					icon: false,
					id: 2
				}]
			},
			galeria03: {
				galleryTitle: 'Fotografias de imóveis no Setor 007, Quadra 093',
				width: 623,
				height: 468,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q093/1.jpeg',
					state: true,
					legenda: 'Rua Dr. Frederico Steidel, nº 299',
					icon: false,
					id: 1
				}, {
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q093/2.jpeg',
					state: false,
					legenda: 'Rua Dr. Frederico Steidel, nº 275',
					icon: false,
					id: 2
				}]
			},
			galeria04: {
				galleryTitle: 'Fotografias de imóveis no Setor 007, Quadra 094',
				width: 623,
				height: 468,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q094/1.jpeg',
					state: true,
					legenda: 'Rua Dr. Frederico Steidel, nº 233',
					icon: false,
					id: 1
				}, {
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q094/2.jpeg',
					state: false,
					legenda: 'Rua Dr. Frederico Steidel, nº 211',
					icon: false,
					id: 2
				}]
			},
			galeria05: {
				galleryTitle: 'Fotografias de imóveis no Setor 007, Quadra 095',
				width: 623,
				height: 468,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q095/1.jpeg',
					state: true,
					legenda: 'Rua Sebastião Pereira, nº 98 até 76',
					icon: false,
					id: 1
				}, {
					url: this.$store.getters.basePath + 'arquivos/parque-minhocao/galerias/S007Q095/2.jpeg',
					state: false,
					legenda: 'Rua Sebastião Pereira, nº 60',
					icon: false,
					id: 2
				}]
			}
		}
	},
	components: {
		PageTop,
		Indice,
		Comments,
		CommentsLoader,
		CommentsContext,
		Galeria,
		Apoio,
		Tabela,
		Imagem,
		AntesDepois,
		GraficoLinha,
		Processo
	},
	methods: {
		print () {
			this.$store.dispatch('imprime')
		}
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

div.ParqueMinhocao {
	div.mobiliario-centro-aberto {
		margin: 2rem auto;
		padding: 2rem;
		background-color: $cinza-3;
		max-width: calc(100% - 400px - 4rem);
		border-radius: 2px;
		& > ul {
			display: block;
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			align-items: flex-start;
			min-width: 100%;
			& > li {
				display: inline-block;
				vertical-align: top;
				width: calc(320px - 2rem);
				padding: 1rem;
				text-align: center;
				border: 1px solid $sombra-4;
				border-radius: 1rem;
				font-family: $grotesca;
				background-color: #FFF;
				img {
					margin: 1rem;
				}
				& > div.nome {
					font-size: small;
					font-weight: bold;
					color: #00b1ef;
				}
				& > ul {
					text-align: left;
					margin: 1rem 0 0 0;
					& > li {
						padding: 0;
						margin: 0 0 0 1rem;
						font-family: $grotesca;
						font-size: small;
					}
				}
			}
		}
		div.dados {
			text-align: center;
			font-size: small;
			color: $cinza-2;
		}
		@media (max-width: 600px) {
			width: 100%;
			max-width: unset;
			padding: 1rem;
			& > ul {
				padding: 0;
				& > li:not(:last-child) {
					margin: 0 0 1rem 0;
					img {
						max-width: 100%;
					}
				}
				& > li:last-child {
					margin: 0;
				}
			}
		}
	}
}
</style>
