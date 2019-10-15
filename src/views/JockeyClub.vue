<template>
	<div class="JockeyClub" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/jockey.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Jockey Club</div></template>
			<template slot="subtitulo"><div>Subtítulo da Nova Consulta</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Análise Socioterritorial e Ambiental</h2>
			<section>
				<h3 class="titulo" indent="2">Introdução</h3>
				<p>O Hipódromo de Cidade Jardim é um equipamento privado de grande porte que contém características urbanísticas, paisagísticas e históricas excepcionais, tendo sido assim classificado como uma ZOE – Zona de Ocupação Especial pela Lei de Parcelamento, Uso e Ocupação do Solo – LPUOS (Lei nº 16402/2016).  Nos termos do §1º do art. 15 dessa lei, as áreas classificadas como ZOE – Zona de Ocupação Especial devem necessariamente ser objeto de PIU – Projetos de Intervenção Urbana, contemplando a definição de parâmetros específicos de parcelamento, uso e ocupação do solo adequados às suas especificidades.</p>
				<p>Em atendimento ao Art. 2° do Decreto Municipal nº 56.901/2016, que regulamenta o desenvolvimento dos Projetos de Intervenção Urbana, os produtos ora apresentados correspondem aos elementos prévios à elaboração do PIU, constituídos pelo Diagnóstico Socioterritorial e Ambiental e pelo Programa de Interesse Público, subsidiando a instrução do presente Projeto de Intervenção Urbana do Hipódromo de Cidade Jardim – PIU Jockey Club, possibilitando à SMDU a realização da Consulta Pública inaugural do processo de desenvolvimento deste projeto no site Gestão Urbana.</p>
				<p>Considerando que o Hipódromo de Cidade Jardim vem passando nos últimos anos por um processo gradativo de refuncionalização em razão de uma progressiva redução das atividades do turfe e da realização de eventos e novas atividades de cunho cultural, esportivo e de lazer, bem como das tratativas iniciadas entre a Prefeitura e o Jockey Club de São Paulo visando à composição em relação a lançamentos tributários relativos ao  imóvel, envolvendo a prestação de contrapartidas de interesse público, este PIU Jockey Club é uma oportunidade para que se promova publicamente a discussão acerca da destinação urbanística deste equipamento histórico no contexto de desenvolvimento urbano atual da cidade e da estratégia de ordenamento territorial delineada pelo Plano Diretor Estratégico – PDE (Lei nº 16.050/2014).</p>
				<p>O formato definido para esta publicação da Consulta Pública dos Elementos Prévios ao Desenvolvimento do PIU Jockey Club no sítio eletrônico http://gestaourbana.prefeitura.sp.gov.br/ traz, primeiramente, o Objeto da Consulta, descrevendo o conteúdo, o prazo e o rito previsto no decreto regulamentador, a Motivação da consulta, destacando a definição de parâmetros para a ZOE e a refuncionalização do equipamento e o Quadro Normativo, destacando o Estatuto da Cidade e o marco regulatório do desenvolvimento urbano municipal. O conteúdo do Diagnóstico Socioterritorial é apresentado no item 3, com histórico do equipamento e os principais aspectos socioterritoriais do contexto urbano do equipamento. Por fim, o item 4 aborda os aspectos ambientais deste contexto urbano.</p>
			</section>

			<section>
				<h3 class="titulo" indent="2">Consulta Pública – Elementos prévios</h3>
				<section>
					<h4 class="titulo" indent="3">Objeto</h4>
					<p>A presente Consulta Pública, promovida pela Prefeitura do Município de São Paulo por intermédio da Secretaria Municipal de Desenvolvimento Urbano (SMDU) e da São Paulo Urbanismo (SP-URBANISMO), tem como objeto desencadear o processo administrativo tendente a instaurar o Projeto de Intervenção Urbana do Hipódromo de Cidade Jardim – PIU Jockey Club, a ser realizada entre os dias 14 de outubro a 05 de novembro de 2019, apresentando os elementos preliminares ao desenvolvimento do PIU, com vistas a colher contribuições da sociedade civil ao posterior desenvolvimento do projeto. A consulta tem por base a legislação em vigor e os instrumentos urbanísticos que permitem ações específicas no território da cidade.</p>
					<p>De acordo com o Art. 2º do Decreto nº 56.901/2016, o processo de instrução do PIU se inicia pela publicação dos elementos preliminares a seu desenvolvimento, constituídos de diagnósticos socioterritorial e ambiental da área estudada, bem como de seu Programa de Interesse Público, trazendo as questões a serem enfrentadas no contexto urbano em que está inserido. Esses documentos são então submetidos à consulta pública para receberem contribuições da sociedade, subsidiando a decisão da Secretaria Municipal de Desenvolvimento Urbano – SMDU quanto ao seu prosseguimento.</p>

					<h4 class="titulo" indent="3">Motivação</h4>
					<p>O PIU Jockey Club tem como motivação básica a definição dos parâmetros de parcelamento, uso e ocupação do solo para Zona de Ocupação Especial – ZOE Jockey Club, localizada no território da Prefeitura Regional de Butantã. Tal definição deve considerar o processo de transformações pelo qual vem passando o equipamento em relação a suas atividades, suas características singulares de arquitetura e inserção na paisagem e o marco regulatório da política urbana municipal (PDE, LPUOS, Planos Regionais das Subprefeituras – PRS).</p>
					<p>A proposta para a regulação da ZOE Jockey Club vem como consequência de um estudo apresentado pelo Jockey Club de São Paulo para a Prefeitura em outubro de 2017, sugerindo a criação de um parque público sem interferências nas atividades ligadas ao turfe. Embora tal provocação tenha contribuído para a decisão de deflagrar o presente processo, todas as definições a serem adotadas pelo PIU decorrerão exclusivamente do processo que ora se inicia, servindo como plataforma de recepção de contribuições por toda a sociedade, não representando, pois, adesão a priori ao conteúdo das proposições já apresentadas. </p>
					<h4 class="titulo" indent="3">Quadro Normativo</h4>
					<p>O Plano Diretor Estratégico, de acordo com o texto expresso pelo Art. 182 da Constituição Federal de 1988, e, posteriormente, pelo Art. 40 do Estatuto da Cidade (Lei Federal nº 10.257/2001), é o instrumento básico das políticas públicas referentes ao desenvolvimento e à expansão urbana, caracterizando-se como o índice de aferição do cumprimento da função social da propriedade. É o diploma que apresenta as diretrizes de condutas a serem seguidas pelo Poder Público Municipal visando ordenar o desenvolvimento das funções sociais da cidade e da propriedade urbana.</p>
					<p>O Plano Diretor Estratégico do Município de São Paulo – PDE (Lei nº 16.050/2014), por sua vez, tem entre seus objetivos a busca pelo desenvolvimento urbano sustentável e equilibrado do Município, buscando promover a aproximação entre emprego e moradia, o acesso à mobilidade e a reestruturação e qualificação das centralidades urbanas, considerando em seu ordenamento as dimensões social, ambiental, imobiliária, econômica e cultural. Tais diretrizes estão expressas, sobretudo, na instituição dos Eixos de Estruturação da Transformação Urbana e nos territórios estratégicos que compõem a Macroárea de Estruturação Metropolitana.</p>
					<p>A Lei de Parcelamento, Uso e Ocupação do Solo - LPUOS (Lei nº 16.402/ 2016), veio regulamentar o PDE, detalhando as zonas de uso no território, seus parâmetros urbanísticos e condições de instalação, dentre outros instrumentos. Nos termos do §1º do art. 15 dessa lei, as áreas classificadas como ZOE – Zona de Ocupação Especial devem necessariamente ser objeto de PIU – Projetos de Intervenção Urbana, contemplando a definição de parâmetros específicos de parcelamento, uso e ocupação do solo adequados às suas especificidades.</p>
					<p>Dentre os instrumentos urbanísticos trazidos pelo PDE, está previsto no seu artigo 134 o PIU, que pode ser promovido pelo poder público para articular medidas de financiamento, gestão, aquisição de terras (reordenamento urbano) e ações intersetoriais para desenvolver e implementar as especificidades de cada intervenção proposta, com processos adequados de gestão e participação social. O PIU tem por finalidade reunir e articular os estudos técnicos objetivando promover o ordenamento e a reestruturação urbana em áreas subutilizadas e com potencial de transformação, tendo sua regulamentação estabelecida pelo Decreto n° 56.901/2016.</p>
					<p>Os Planos Regionais das Subprefeituras – PRS (Decreto nº 57.537/ 2016) são elementos de planejamento complementares ao PDE e à LPUOS, enfatizando os espaços públicos e a articulação de políticas setoriais no território e com as peças orçamentárias, contendo propostas para a Rede de Estruturação Local. A Rede de Estruturação Local, por sua vez, é composta por Perímetros de Ação, que são porções do território com demandas e ações setoriais que necessitam de projetos coordenados de intervenção destinados ao desenvolvimento urbano local, mediante integração de políticas e investimentos públicos.</p>
					<p>A Resolução SC 97/10 do Conselho de Defesa do Patrimônio Histórico, Arqueológico, Artístico e Turístico do Estado de São Paulo - CONDEPHAAT, de 19/11/2010, dispõe sobre o tombamento do conjunto arquitetônico do Jockey Club de São Paulo na categoria de bem cultural, histórico, arquitetônico e ambiental. Além disso, o Conselho Municipal de Preservação do Patrimônio Histórico, Cultural e Ambiental da Cidade de São Paulo – CONPRESP, através da Resolução nº 05/2013 também realizou o tombamento do conjunto, destacando seu papel arquitetônico, histórico e simbólico para a cidade. As duas resoluções mencionadas (apresentadas nos Anexos I e II ao final deste trabalho) descrevem quais edifícios do conjunto devem ser preservados e estabelece que quaisquer intervenções ali planejadas devem ser aprovadas pelos respectivos órgãos. </p>
				</section>
			</section>
			<section>
				<h3 class="titulo" indent="2">Histórico e organização funcional do hipódromo</h3>
				<p>Fundado em 14 de março 1875, como Clube de Corridas Paulistano, o atual Jockey Club de São Paulo começou suas atividades no bairro da Mooca. Com o processo de urbanização do bairro do Butantã e Jardim Guedala, feitos pela Companhia City a partir dos anos 1930, e após a retificação do Rio Pinheiros, a partir de 1928, a companhia doou ao Jockey o terreno de cerca de 600 mil m² na margem oeste do rio, com o objetivo de trazer uma opção de lazer atraente à elite paulistana e valorizar o novo bairro. </p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-1_vista-aerea.jpg'),
					caption: 'Figura 1 – Vista Aérea, 1955',
					fonte: 'oldsaopaulo.tumblr'
				}"></Imagem>
				<p>Em 25 de janeiro 1941 foi inaugurado o Hipódromo de Cidade Jardim, concebido por Fábio Prado, prefeito da cidade e presidente do Jockey à época. Ao mesmo tempo, o Jockey doou o terreno na Mooca para o município.</p>
				<p>O projeto da nova sede foi elaborado em 1937, por Elisiário da Cunha Bahiana, no estilo Art Decó e ficou pronto em 1941. O arquiteto projetou as pistas, arquibancadas e a Vila Hípica da nova sede. Ao todo são quatro pistas de grama ou areia utilizadas para as corridas oficiais, com cerca de 2.000 metros de extensão em volta fechada. As arquibancadas e tribunas tem capacidade para receber até 20.000 pessoas. A Vila Hípica, diretamente ligada às pistas, tem capacidade para abrigar até 1.400 animais.</p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-2.jpg'),
					caption: 'Figura 2 – Vista da Tribuna dos Sócios a Partir da Rua Lineu de Paula, 1944',
					fonte: 'oldsaopaulo.tumblr'
				}"></Imagem>
				<p>De 1946 a 1958 o conjunto passa por uma reforma projetada pelo arquiteto francês Henri Sajous, reformulando o Salão Nobre e criando novas edificações, entre elas o novo ambulatório. A renovação da Tribuna Social e do Salão Nobre contou com a criação de 15 esculturas em alto relevo produzidas por Victor Brecheret em mármore travertino romano, constituindo o segundo maior acervo do artista. O Salão Nobre ainda recebeu painel decorativo em laca feito por Bernard Durand.</p>
				<p>Em 2010 o conjunto do Jockey Club foi tombado pelo CONDEPHAAT e em 2013 pelo CONPRESP. As duas resoluções ressaltam o valor histórico, arquitetônico, cultural e simbólico do conjunto.</p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-3_tribuna.jpg'),
					caption: 'Figura 3 – Vista a partir da Tribuna dos Sócios, 1961.',
					fonte: 'Acervo Folhapress'
				}"></Imagem>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-4.jpg'),
					caption: 'Figura 4 - Salão Nobre Reformado por Henri Sajous e Painel de Bernard Durand ao fundo, 1954',
					fonte: 'Revista Acrópole, 1954. Disponível em: acropole.fau.usp.br'
				}"></Imagem>

				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-5.jpg'),
					caption: 'Vista da Arquibancada Especial 2, 1955',
					fonte: 'Revista Acrópole, 1955. Disponível em: acropole.fau.usp.br'
				}"></Imagem>

				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-6.jpg'),
					caption: 'Figura 6 – Vista do Ambulatório (a partir da pista), projetado por Henri Sajous, 1955',
					fonte: 'Revista Acrópole, 1955. Disponível em: acropole.fau.usp.br'
				}"></Imagem>

				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/jockey/Figura-7.jpg'),
					caption: 'Vista do Ambulatório (a partir da Av. Lineu de Paula), projetado por Henri Sajous, 1955',
					fonte: 'Revista Acrópole, 1955. Disponível em: acropole.fau.usp.br'
				}"></Imagem>

				<p>No campo esportivo, a instituição é também uma referência para o turfe nacional, recebendo os principais eventos da modalidade, junto com os hipódromos do Jockey Club Brasileiro (instalado no Rio de Janeiro), do Rio Grande do Sul e do Paraná. As corridas são realizadas nas tardes de sábado, domingo e segunda-feira, compostas por 10 páreos. A principal competição do ano é a realização do GP São Paulo, disputado em 2.400 metros, na pista de grama, além de outras provas como os GPs Presidente da República, OSAF, ABCPCC e Juliano Martins.</p>
				<p>Além das atividades relacionadas ao turfe, o Jockey Club abriga um clube sócio-desportivo, com estrutura como piscinas, campos de futebol, quadras de tênis e vôlei de praia. A instituição tem buscado diversificar e intensificar a utilização do equipamento, de modo a atrair público nos demais dias da semana e em horários diversos, abrigando atualmente em média 15 eventos mensais, ligados principalmente à gastronomia e cultura. O Cena Jockey é um espaço dedicado a eventos gastronômicos com capacidade para mais de 1500 pessoas.  Há ainda os restaurantes Ferra Jockey e Iulia, que também recebem eventos esporadicamente. Desde 2006 o Jockey foi escolhido como a sede oficial do evento CasaCor, mostra de arquitetura, design de interiores e paisagismo que recebe milhares de visitantes todos os anos. Eventos de música também têm ocorrido no espaço, como o Festival Lollapalooza (2012-2013) e o Festival Planeta Terra (2012). Além disso, o Jockey recebeu o festival de filmes ao ar livre Shell Open Air 2019 e, recentemente, sedia a 3ª edição da Oktoberfest. </p>
				<Imagem :dados="{
					tipo: 'hero',
					url: imgSrc('arquivos/capas/jockey_1600w.jpg'),
					caption: 'Foto Aérea',
					fonte: 'Google Earth, 2019'
				}"></Imagem>

				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/jockey/Mapa-1.gif'),
					titulo: 'Setores do Hipódromo',
					fonte: 'Jockey Club, 2019. Elaboração: SPUrbanismo',
					legenda: [
						{ fundo: '#3535B3', descricao: 'Área do Turfe' },
						{ fundo: '#0080FF', descricao: 'Tribunas especiais' },
						{ fundo: '#0080FF', descricao: 'Clube Social' },
						{ fundo: '#CCFFFF', descricao: 'Área Administrativas' },
						{ fundo: '#B3B3B3', descricao: 'Cocheiras e alojamentos' },
						{ fundo: '#CCCC00', descricao: 'Vila Hípica' },
						{ fundo: '#FFFF33', descricao: 'Pista de corridas' },
						{ fundo: '#FFAF00', descricao: 'Área livre' },
						{ fundo: '#FF7800', descricao: 'Estacionamento' }
					]
				}"></Imagem>

			</section>
			<section>
				<h3 class="titulo" indent="2">Diagnóstico socioterritorial</h3>
				<section>
					<h4 class="titulo" indent="3">Objeto</h4>
					<p>O Hipódromo de Cidade Jardim está localizado na região oeste da cidade de São Paulo, no território da Subprefeitura do Butantã, mais especificamente no distrito Morumbi, no limite deste com o distrito do Butantã (Mapa 1).</p>
					<p>As análises contidas neste diagnóstico socioterritorial consideram a área da ZOE do Hipódromo de Cidade Jardim como Área Diretamente Afetada (ADA) pelo projeto de intervenção urbana a ser desenvolvido, as áreas das Zonas Origem e Destino (ZOD) da Pesquisa Origem e Destino do Metrô de São Paulo situadas no entorno do hipódromo como Área de Influência Direta (AID) deste PIU e, por fim, as áreas dos distritos municipais situados ao redor do hipódromo, como Área de Influência Indireta (AII) do PIU Jockey (Mapa 2). </p>
					<p>Considerando as características socioeconômicas e ambientais do contexto urbano em que se insere o hipódromo, as ZODs que compõem a AID estão localizadas nas subprefeituras do Butantã e Pinheiros, englobando Butantã, Pinheiros, Jardim Europa e Jockey Club. Os distritos que compõem a AII também estão localizados em ambas as subprefeituras, englobando Morumbi, Butantã, Vila Sônia, Pinheiros, Alto de Pinheiros e Itaim Bibi.</p>
					<Imagem :dados="{
						tipo: 'mapa',
						url: imgSrc('arquivos/jockey/Mapa-2.jpg'),
						titulo: 'Mapa 2 - Inserção Metropolitana da Área de Intervenção',
						fonte: 'Geosampa. Elaboração: SPUrbanismo',
						legenda: [
							{ borda: '#000', espessura: 3, descricao: 'Limite do Município de São Paulo (MSP)' },
							{ borda: '#000', espessura: 1, descricao: 'Distritos MSP' },
							{ borda: '#FF9100', espessura: 3, fundo: '#FFDFB4', descricao: 'PIU Jockey Club - Área de Diretamenten Afetada (ADA)' },
							{ borda: '#000', espessura: 3, pontilhado: true, descricao: 'PIU Jockey Club - Área de Influência Direta (AID)' },
							{ fundo: '#B2B2B2', descricao: 'PIU Jockey Club - Área de influência Indireta (AII)' }
						]
					}"></Imagem>

					<Imagem :dados="{
						tipo: 'mapa',
						url: imgSrc('arquivos/jockey/Mapa-3.jpg'),
						titulo: 'Mapa 3 - Definição das áreas de análise',
						fonte: 'Geosampa. Elaboração: SPUrbanismo',
						legenda: [
							{ borda: '#FF9100', espessura: 3, fundo: '#FFDFB4', descricao: 'ADA - Área de Diretamenten Afetada' },
							{ borda: '#FFFF48', espessura: 3, fundo: '#FFFFED', pontilhado: true, descricao: 'AID - Área de Influência Direta' },
							{ borda: '#000', espessura: 1, descricao: 'AII - Área de influência Indireta' }
						]
					}"></Imagem>

					<Imagem :dados="{
						tipo: 'mapa',
						url: imgSrc('arquivos/jockey/Mapa-4.jpg'),
						titulo: 'Mapa 3 - Definição das áreas de análise',
						fonte: 'Geosampa. Elaboração: SPUrbanismo',
						legenda: [
							{ borda: '#FC50D3', espessura: 3, descricao: 'PIU Jockey Club' },
							{ simbolo: imgSrc('arquivos/legendas/icones/cptm.png'), descricao: 'Estação CPTM' }
						]
					}"></Imagem>


				</section>
			</section>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && parseInt(estaConsulta.ativo) === 1" :attr="{id:99, context:'Comentarios'}"></Comments>
		</section>

	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Apoio from '@/components/Apoio'
import CommentsLoader from '@/components/CommentsLoader'
import Comments from '@/components/Comments'
import Imagem from '@/components/Imagem'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'JockeyClub',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {}
		}
	},
	components: {
		PageTop,
		Indice,
		Apoio,
		CommentsLoader,
		Comments,
		Imagem
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

</style>
