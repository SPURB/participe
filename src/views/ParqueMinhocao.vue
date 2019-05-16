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

		<!-- branch minhocao-TEMP -->

		<!-- Figura 13 -->
		<Imagem :dados="{
			tipo: 'mapa',
			url: imgSrc('arquivos/parque-minhocao/img/mapas/fig13.gif'),
			titulo: 'Sistema Viário Estrutural',
			legenda: [
				{ linha: true, borda: '#802c13', espessura: '3', descricao: 'Vias de Trânsito Rápido' },
				{ linha: true, borda: '#e3121c', espessura: '3', descricao: 'Arterial' },
				{ linha: true, borda: '#ff8b18', espessura: '3', descricao: 'Coletora' },
				{ linha: true, borda: '#ffd84e', espessura: '3', descricao: 'Local' },
				{ linha: true, borda: '#a7cb97', espessura: '3', descricao: 'Vias de pedestres', pontilhado: true },

				{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão (Contorno)' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
			],
			fonte: 'Elaboração: SP Urbanismo, 2019'
		}"></Imagem>
		<!-- /Figura 13 -->

		<!-- Figura 14 -->
		<Imagem :dados="{
			tipo: 'mapa',
			url: imgSrc('arquivos/parque-minhocao/img/mapas/fig14.gif'),
			titulo: 'Sistema de transporte público',
			legenda: [
				{ linha: true, borda: '#ea2f41', espessura: '3', descricao: 'Corredor de ônibus' },
				{ linha: true, borda: '#ffbd37', espessura: '3', descricao: 'Faixa de ônibus' },
				{ linha: true, borda: '#fff8a8', espessura: '3', descricao: 'Linha de ônibus' },
				{ simbolo: src('arquivos/parque-minhocao/img/mapas/legendas/onibus.gif'), descricao: 'Ponto de ônibus' },

				{ linha: true, borda: '#333', espessura: '3', descricao: 'Minhocão (Contorno)' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_3.jpg'), descricao: 'Linha férrea' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_1.jpg'), descricao: 'Estações do Metrô' },
				{ simbolo: imgSrc('arquivos/parque-minhocao/img/mapas/legendas/fig4_2.jpg'), descricao: 'Estações da CPTM' }
			],
			fonte: 'Geinfo, 2018. Elaboração: SP Urbanismo, 2019'
		}"></Imagem>
		<!-- /Figura 14 -->

		<!-- Figura 15 -->
		<!-- /Figura 15 -->

		<!-- Figura 16 -->
		<!-- /Figura 16 -->

		<!-- Figura 17 -->
		<!-- /Figura 17 -->

		<!-- Figura 18 -->
		<!-- /Figura 18 -->

		<!-- Figura 19 -->
		<!-- /Figura 19 -->

		<!-- Figura 20 -->
		<!-- /Figura 20 -->

		<!-- Figura 21 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig21.gif'),
			caption: ' Mapa ilustrativo dos fluxos veiculares no nível da rua',
			fonte: 'CET'
		}"></Imagem>
		<!--/ Figura 21 -->

		<!-- Figura 221 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig22.gif'),
			caption: 'Mapa ilustrativo dos fluxos veiculares no nível da via elevada',
			fonte: 'CET'
		}"></Imagem>
		<!--/ Figura 22 -->

		<!-- Figura 23 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig23.gif'),
			caption: 'Mapa ilustrativo do carregamento de ônibus. Destaque para o Corredor da Av. São João',
			fonte: 'CET /Elaboração: SP-Urbanismo'
		}"></Imagem>
		<!--/ Figura 23 -->

		<!-- Figura 24 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig24.jpg'),
			caption: 'Mapa ilustrativo dos pontos de concentração os fluxos de pedestres',
			fonte: 'CET /Elaboração: SP-Urbanismo'
		}"></Imagem>
		<!--/ Figura 24 -->

		<!-- Figura 25 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig25.gif'),
			caption: 'Rede cicloviária e bicicletários, com destaque (azul) para aquelas diretamente articuladas ao Elevado',
			fonte: 'CET /Elaboração: SP-Urbanismo'
		}"></Imagem>
		<!--/ Figura 25 -->

		<!-- Figura 26 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig26.gif'),
			caption: ' Níveis de poluição atmosférica medidos ao longo de uma semana',
			fonte: 'Laboratório de Poluição Atmosférica Experimental da FMUSP'
		}"></Imagem>
		<!--/ Figura 26 -->

		<!-- Figura 27 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig27.gif'),
			caption: ' Níveis de ruído medidos ao longo de uma semana',
			fonte: 'Laboratório de Poluição Atmosférica Experimental da FMUSP'
		}"></Imagem>
		<!--/ Figura 27 -->

		<!-- Figura 28 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig28.jpg'),
			caption: ' Ilustração do projeto de José Alves e Juliana Corradini',
		}"></Imagem>
		<!--/ Figura 28 -->

		<!-- Figura 29 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig29.jpg'),
			caption: ' Ilustração do projeto de José Alves e Juliana Corradini',
		}"></Imagem>
		<!--/ Figura 29 -->

		<!-- Figura 30 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig30.jpg'),
			caption: 'Ilustração da proposta da Triptyque em parceria com o paisagista Guil Blanche',
		}"></Imagem>
		<!--/ Figura 30 -->

		<!-- Figura 31 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig31.jpg'),
			caption: 'Ilustração da proposta da Triptyque em parceria com o paisagista Guil Blanche',
		}"></Imagem>
		<!--/ Figura 31 -->

		<!-- Figura 32 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig32.jpg'),
			caption: 'Ilustração da proposta do Escritório Jayme Lerner',
		}"></Imagem>
		<!--/ Figura 32 -->

		<!-- Figura 33 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig33.jpg'),
			caption: 'Ilustração da proposta do Escritório Jayme Lerner',
		}"></Imagem>
		<!--/ Figura 33 -->

		<!-- Figura 34 -->
		<Imagem :dados="{
			tipo:'destaque',
			url: src('arquivos/parque-minhocao/img/fig34.jpg'),
			caption: 'Ilustração da proposta do Escritório Jayme Lerner',
		}"></Imagem>
		<!--/ Figura 34 -->

		<!-- Figura 35 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig35.jpg'),
			caption: 'Ilustração da proposta do Escritório Jayme Lerner',
		}"></Imagem>
		<!--/ Figura 35 -->

		<!-- Figura 36 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig36.jpg'),
			caption: ' Fachada do Edifício Angélica (1927) Arq. Júlio de Abreu Jr. ',
			fonte:' XAVIER,1983.'
		}"></Imagem>
		<!--/ Figura 36 -->

		<!-- Figura 37 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig37.jpg'),
			caption: 'Fachada do Ufa-Palácio (1936)',
			fonte:'http://salasdecinemasp2.blogspot.com.br'
		}"></Imagem>
		<!--/ Figura 37 -->

		<!-- Figura 38 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig38.jpg'),
			caption: ' Fachada do Prédio Lívia Maria na Av. São João. Características art-déco (1939)',
			fonte:'Acrópole.'
		}"></Imagem>
		<!--/ Figura 38 -->

		<!-- Figura 40 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig39.jpg'),
			caption: 'Fachada do Edifício Trussardi (1941)',
			fonte:'Anelli, 2001.'
		}"></Imagem>
		<!--/ Figura 39 -->

		<!-- Figura 40 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig40.jpg'),
			caption: 'Edifício Racy (1950)',
			fonte:'Anelli, 2001.'
		}"></Imagem>
		<!--/ Figura 40 -->

		<!-- Figura 41 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig41.jpg'),
			caption: 'Edifício Racy (1950)',
			fonte: 'Acervo Estado.'
		}"></Imagem>
		<!--/ Figura 41 -->

		<!-- Figura 42 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig42.jpg'),
			caption: 'Avenida São João, anos 1930. Claude Lévi-Strauss',
			fonte: 'Caminhos do Elevado – Memória e Projetos.'
		}"></Imagem>
		<!--/ Figura 42 -->

		<!-- Figura 43 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig43.jpg'),
			caption: 'Avenida São João, anos 1930. J.B. Duarte',
			fonte: 'Caminhos do Elevado – Memória e Projetos.'
		}"></Imagem>
		<!--/ Figura 43 -->

		<!-- Figura 44 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig44.jpg'),
			caption: 'Perspectiva do projeto original, 1969 (trecho sobre o Largo do Arouche)',
			fonte: 'BRANCO, 2006 apud ASSUNÇÃO, 2016 (Originais em Arquivo da SIURB).'
		}"></Imagem>
		<!--/ Figura 44 -->

		<!-- Figura 45 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig45.jpg'),
			caption: ' Perspectiva do projeto original',
			fonte: ' BRANCO, 2006 apud ASSUNÇÃO, 2016 (Originais em Arquivo da SIURB).'
		}"></Imagem>
		<!--/ Figura 45 -->

		<!-- Figura 46 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig46.jpg'),
			caption: 'Perspectiva do projeto original, 1969',
			fonte: ' BRANCO, 2006 apud ASSUNÇÃO, 2016 (Originais em Arquivo da SIURB).'
		}"></Imagem>
		<!--/ Figura 46 -->

		<!-- Figura 47 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig47.jpg'),
			caption: 'Perspectiva do projeto original, 1969',
			fonte: ' BRANCO, 2006 apud ASSUNÇÃO, 2016 (Originais em Arquivo da SIURB).'
		}"></Imagem>
		<!--/ Figura 47 -->

		<!-- Figura 48 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig48.jpg'),
			caption: 'Arquibancada em trecho do High Line',
			fonte: ' Vista aérea de trecho do High Line implantado'
		}"></Imagem>
		<!--/ Figura 48 -->

		<!-- Figura 49 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig49.jpg'),
			caption: 'Arquibancada em trecho do High Line',
			fonte: 'Imagem de Rowa Lee.'
		}"></Imagem>
		<!--/ Figura 49 -->

		<!-- Figura 50 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig50.jpg'),
			caption: 'High Line Park. Fonte: Field Operations',
			fonte: 'Imagem de Rowa Lee.'
		}"></Imagem>
		<!--/ Figura 50 -->

		<!-- Figura 51 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig51.jpg'),
			caption: ' Média de renda em 2013 do entorno do High Line Park. Fonte: Field Operations',
		}"></Imagem>
		<!--/ Figura 51 -->

		<!-- Figura 52 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig52.jpg'),
			caption: 'Promenade Plantée',
		}"></Imagem>
		<!--/ Figura 52 -->

		<!-- Figura 53 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig53.jpg'),
			caption: 'Promenade Plantée',
		}"></Imagem>
		<!--/ Figura 53 -->
		
		<!-- Figura 54 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig54.jpg'),
			caption: 'Promenade Plantée',
		}"></Imagem>
		<!--/ Figura 54 -->
		
		<!-- Figura 55 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig55.jpg'),
			caption: 'Renaturalização do Riacho Cheong Gye Cheon',
		}"></Imagem>
		<!--/ Figura 55 -->

		<!-- Figura 56 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig56.jpg'),
			caption: 'The Bentway e seu entorno',
			fonte: 'Waterfront Toronto'
		}"></Imagem>
		<!--/ Figura 56 -->

		<!-- Figura 57 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig57.jpg'),
			caption: 'The Bentway',
			fonte: 'DailyHive.'
		}"></Imagem>
		<!--/ Figura 57 -->

		<!-- Figura 58 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig58.jpg'),
			caption: 'The Bentway e a Gardiner',
			fonte: 'Canadian Architect.'
		}"></Imagem>
		<!--/ Figura 58 -->

		<!-- Tabela 59 -->
		<!-- <div class="Tabela estreita">
			<table>
				<caption style="border:0">Receitas detalhadas</caption>
				<thead>
					<tr>
						<th>Category</th>
						<th colspan="2">Phase 1</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class='destaque'><span> </span></td>
						<td class='destaque'><span>Low</span></td>
						<td class='destaque'><span>High</span></td>
					</tr>
				</tbody>
			</table>
			<div class="fonte">
				Fonte <b>HR&A ADVISORS</b>
			</div>
		</div> -->
		<!--/ Tabela 59 -->

		<!-- Tabela 60 -->
		<!-- <div class='Tabela estreita'>
			<table>
				<caption style="border:0">Custos e receitas</caption>
				<thead>
					<tr>
						<th>Category</th>
						<th colspan="2">Phase 1</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td class='destaque'><span>Low</span></td>
						<td class='destaque'><span>High</span></td>
					</tr>
					<tr>
						<td>Routine O&M</td>
						<td>$ 540 K</td>
						<td>$ $ 720 K</td>
					</tr>
					<tr>
						<td>Staff & Administration</td>
						<td>$ 1.0 M</td>
						<td>$ 1.2 M</td>
					</tr>
					<tr>
						<td>Capital Reserve</td>
						<td>$ 200 K</td>
						<td>$ 550 K</td>
					</tr>
					<tr>
						<td>Fundraising</td>
						<td>$ 60K</td>
						<td>$ 180K</td>
					</tr>
					<tr>
						<td>Ice Skating Trail</td>
						<td>$ 130 K</td>
						<td>$ 430 K </td>
					</tr>
					<tr>
						<td>Foundational Programming</td>
						<td>$ 1.2 M</td>
						<td>$ 1.4 M</td>
					</tr>
					<tr>
						<td class='destaque'><span>Estimated Annual Costs</span></td>
						<td class='destaque'><span>$ 930 K</span></td>
						<td class='destaque'><span>$ 1.7 M</span></td>
					</tr>
				</tbody>
			</table>
			<div class="fonte">
				Fonte <b>HR&A ADVISORS</b>
			</div>
		</div> -->
		<!--/ Tabela 60 -->

		<!-- Tabela 61 -->
		<!-- <div class='Tabela estreita'>
			<table><caption style="border:0">Custos e receitas</caption>
				<thead>
					<tr>
						<th>Category</th>
						<th colspan="2">Phase 1</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td class='destaque'><span>Low</span></td>
						<td class='destaque'><span>High</span></td>
					</tr>
					<tr>
						<td>Estimated Annual Costs</td>
						<td>$ 3.2 M</td>
						<td>$ 4.5 M</td>
					</tr>
					<tr>
						<td>Estimated Annual Revenues</td>
						<td>$ 930 K</td>
						<td>$ 1.7 M</td>
					</tr>
					<tr>
						<td class='destaque'><span>Estimated Annual Gap</span></td>
						<td class='destaque'><span>$ 2.3 M</span></td>
						<td class='destaque'><span>$ 2.8 M</span></td>
					</tr>
				</tbody>
			</table>
			<div class="fonte">
				Fonte <b>HR&A ADVISORS</b>
			</div>
		</div> -->
		<!--/ Tabela 61 -->

		<!-- Figura 62 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig62.jpg'),
			caption: 'Bloomingdale Line abandonada',
			fonte: ' Untapped Cities.'
		}"></Imagem>
		<!--/ Figura 62 -->

		<!-- Figura 63 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig63.jpg'),
			caption: 'Mapa do The 606',
			fonte: ' The 606.'
		}"></Imagem>
		<!--/ Figura 63 -->


		<!-- Figura 64 -->
		<!-- <Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig64.jpg'),
			caption: 'Tendência dos valores de novos imóveis entre 2000 e 2016',
			fonte: ' DePaul University.'
		}"></Imagem> -->
		<!--/ Figura 64 -->

		<!-- Figura 65 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig65.jpg'),
			caption: 'The 606',
			fonte: 'Curbed Chicago'
		}"></Imagem>
		<!--/ Figura 65 -->

		<!-- Figura 66 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig66.jpg'),
			caption: 'Elevado Estação Seoul antes das intervenções'
		}"></Imagem>
		<!--/ Figura 66 -->

		<!-- Figura 67 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig67.jpg'),
			caption: 'Projeto do Seoullo 7017'
		}"></Imagem>
		<!--/ Figura 67 -->

		<!-- Figura 68 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig68.jpg'),
			caption: 'Seoullo 7017. Planejamento da reorganização do trânsito'
		}"></Imagem>
		<!--/ Figura 68 -->


		<!-- Figura 69 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig69.jpg'),
			caption: 'Seoullo 7017'
		}"></Imagem>
		<!--/ Figura 69 -->

		<!-- Figura 70 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig70.jpg'),
			caption: 'Seoullo 7017'
		}"></Imagem>
		<!--/ Figura 70 -->

		<!-- Galeria 72, 71 -->
		<Galeria :gallery_attrs="galeria71_72"></Galeria>
		<!-- Galeria/ 72, 71 -->

		<!-- Figura 73 -->
		<Imagem :dados="{
			tipo:'coluna',
			url: src('arquivos/parque-minhocao/img/fig73.gif'),
			caption: 'Simulação de gradil de proteção'
		}"></Imagem>
		<!--/ Figura 73 -->


		<!-- Figura 74 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig74.gif'),
			caption: 'Simulação de gradil de proteção'
		}"></Imagem>
		<!--/ Figura 74 -->

		<!-- Figura 75 -->
		<Imagem :dados="{
			tipo:'default',
			url: src('arquivos/parque-minhocao/img/fig75.jpg'),
			caption: 'Volumes veiculares'
		}"></Imagem>
		<!--/ Figura 75 -->

		<!-- Figura 76 -->
		<Imagem :dados="{
			tipo: 'mapa',
			url: src('arquivos/parque-minhocao/img/fig76.gif'),
			titulo: ' O Select Link representa a distribuição das viagens do Elevado na cidade',
			legenda: [
				{ fundo: '#00ffff', espessura: '0', pontilhado: false, descricao: 'Viagens sobre o Elevado' },
				{ fundo: 'red', espessura: '0', pontilhado: false, descricao: 'Viagens embaixo do Elevado' }
			]
		}"></Imagem>
		<!--/ Figura 76 -->

		<!-- Figura 77 -->
		<Imagem :dados="{
			tipo: 'mapa',
			url: src('arquivos/parque-minhocao/img/fig77.gif'),
			titulo: 'Comparação da distribuição de viagens com e sem Elevado',
			legenda: [
				{ fundo: 'blue', espessura: '0', pontilhado: false, descricao: 'Viagens sobre o Elevado' },
				{ fundo: 'red', espessura: '0', pontilhado: false, descricao: 'Viagens embaixo do Elevado' }
			]
		}"></Imagem>
		<!--/ Figura 77 -->

		<!-- Figura 78 -->
		<Imagem :dados="{
			tipo: 'coluna',
			url: src('arquivos/parque-minhocao/img/fig78.jpg'),
			caption: 'Área de Influência resultante da desativação do primeiro trecho do Elevado'
		}"></Imagem>
		<!--/ Figura 78 -->

		<!-- Figura 79 -->
		<Imagem :dados="{
			tipo: 'coluna',
			url: src('arquivos/parque-minhocao/img/fig79.jpg'),
			caption: 'Perímetro da área do Minianel Viário',
			fonte: 'http://cetsp.com.br/consultas/rodizio-municipal/como-funciona.aspx'
		}"></Imagem>
		<!--/ Figura 79 -->

		<!-- Tabela 80 -->
		<Tabela :dados="tabela_80"></Tabela>
		<!--/ Tabela 80 -->

		<!-- Tabela 80a -->
		<Tabela :dados="tabela_80a"></Tabela>
		<!--/ Tabela 80a -->

		<!-- Figura 81 -->
		<Imagem :dados="{
			tipo: 'coluna',
			url: src('arquivos/parque-minhocao/img/fig81.jpg'),
			caption: 'Mapa da situação proposta para a Fase Praça Roosevelt – Largo do Arouche',
			fonte: ' São Paulo Urbanismo – 2019.'
		}"></Imagem>
		<!--/ Figura 81 -->

		<!-- Figura 82 -->
		<Imagem :dados="{
			tipo: 'coluna',
			url: src('arquivos/parque-minhocao/img/fig82.jpg'),
			caption: 'Situação atual da Praça Marechal Deodoro. Rampa de acesso ao Elevado',
			fonte: ' São Paulo Urbanismo – 2019.'
		}"></Imagem>
		<!--/ Figura 82 -->

		<!-- Figura 83 -->
		<Imagem :dados="{
			tipo: 'coluna',
			url: src('arquivos/parque-minhocao/img/fig83.jpg'),
			caption: 'Situação atual da Praça Marechal Deodoro. Baixio da rampa de acesso ao Elevado',
			fonte: ' São Paulo Urbanismo – 2019.'
		}"></Imagem>
		<!--/ Figura 83 -->

		<!-- Figura 84 -->
		<Imagem :dados="{
			tipo: 'mapa',
			url: src('arquivos/parque-minhocao/img/fig84.jpg'),
			titulo: 'Recuperação da Praça Marechal Deodoro',
			fonte: ' São Paulo Urbanismo – 2019.'
		}"></Imagem>
		<!--/ Figura 84 -->

		<!-- Figura 85 -->
		<Imagem :dados="{
			tipo: 'mapa',
			url: src('arquivos/parque-minhocao/img/fig85.jpg'),
			titulo: 'Mapa da situação proposta para a Fase Praça Roosevelt – Largo do Arouche',
			fonte: ' São Paulo Urbanismo – 2019.'
		}"></Imagem>
		<!--/ Figura 85 -->

		<!-- Figura 90 -->
		<Imagem :dados="{
			tipo: 'mapa',
			url: src('arquivos/parque-minhocao/img/fig90.jpg'),
			titulo: 'Abordagens segundo raio de 2,5km entre a Av São João, Rua Amaral Gurgel e Elevado Costa e Silva',
		}"></Imagem>
		<!--/ Figura 90 -->

		<!-- Figura 91 -->
		<Imagem :dados="{
			tipo: 'mapa',
			url: src('arquivos/parque-minhocao/img/fig91.png'),
			titulo: 'Total de abordagens na Operação Baixa Temperatura, segundo raio de 2,5km entre Av. São João, Rua Amaral Gurgel e Elevado João Goulart do Município de São Paulo, total de maio à outrubro de 2018',
			fonte: 'SMADS | Secretaria Municipal de Assistência e Desenvolvimento Social (05 a 10/2018)'
		}"></Imagem>
		<!--/ Figura 91 -->

		<!-- Figura 97 -->
		<Imagem :dados="{
			tipo: 'mapa',
			url: src('arquivos/parque-minhocao/img/fig97.jpg'),
			titulo: 'Mapa de quadras e lotes gravados como ZEIS-3 internas ao perímetro da ZEM',
			fonte: 'SEHAB/DTS Centro. Observação: Números reais do lado externo a quadra.',
			legenda: [
				{ fundo: '#fffe00', espessura: '3', pontilhado: false, descricao: 'ZEIS 3 | Zona Especial de Interesse Social 3' },
				{ borda: '#000', espessura: '1', pontilhado: false, descricao: 'ZEM | Zona de Estruturação Metropolitana' },
				{ borda: '#ff0077', espessura: '3', pontilhado: false, descricao: 'Setor 007 Quadra 020' },
				{ borda: '#a006d8', espessura: '3', pontilhado: false, descricao: 'Setor 007 Quadra 093' },
				{ borda: '#ff7c0d', espessura: '3', pontilhado: false, descricao: 'Setor 007 Quadra 094' },
				{ borda: '#6adb0d', espessura: '3', pontilhado: false, descricao: 'Setor 007 Quadra 095' },
				{ borda: '#057df7', espessura: '3', pontilhado: false, descricao: 'Setor 007 Quadra 041' }
			]

		}"></Imagem>
		<!-- Figura 97 -->

		<!-- Figura 99 -->
		<Imagem :dados="{
			tipo: 'mapa',
			url: src('arquivos/parque-minhocao/img/fig99.jpg'),
			titulo: 'Mapa de cortiços e ocupações sobre os perímetros das zonas (lei 16.402/16), destacado o perímetro da ZEM',
			fonte: 'SEHAB/DTS Centro',
			legenda: [
				{ borda: '#fd0b07', espessura: '3', pontilhado: true, descricao: 'Perímetro da Zona de Estruturação Metropolitana (ZEM)' },
				{ borda: '#000', espessura: '1', pontilhado: false, descricao: 'Cortiços e ocupações' }
			]
		}"></Imagem>
		<!-- Figura 99 -->

		<!-- Figuras 100-103: furtos e roubos na região setembro-outubro/2018 -->
		<Galeria :gallery_attrs="galeria100_103"></Galeria>
		<!-- /Figuras 100-103: furtos e roubos na região setembro-outubro/2018 -->

		<!-- Figuras 104, 105 e 106-->
		<Imagem :dados="{
			tipo: 'default',
			url: src('arquivos/parque-minhocao/img/fig104.jpg'),
			caption: 'Programação infantil e mobiliário urbano'
		}"></Imagem>

		<Imagem :dados="{
			tipo: 'default',
			url: src('arquivos/parque-minhocao/img/fig105.jpg'),
			caption: 'Teatro nas janelas dos edifícios (Grupo Esparrama)'
		}"></Imagem>

		<Imagem :dados="{
			tipo: 'default',
			url: src('arquivos/parque-minhocao/img/fig106.jpg'),
			caption: 'Teatro nas janelas dos edifícios (Grupo Esparrama)'
		}"></Imagem>
		<!-- / figuras 104, 105 e 106-->

		<!--/ branch minhocao-TEMP -->

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
			},
			// início parque-minhocao-temp
			galeria71_72: {
				width: 992,
				height: 482,
				images: [
					{
						url: this.src('arquivos/parque-minhocao/galerias/71_72/fig71.jpg'),
						state: true,
						legenda: 'Simulação de escada de acesso (parte de baixo)',
						icon: false,
						id: 1
					},
					{
						url: this.src('arquivos/parque-minhocao/galerias/71_72/fig72.jpg'),
						state: false,
						legenda: 'Simulação de escada de acesso (parte de cima)',
						icon: false,
						id: 2
					}
				]
			},

			tabela_80: {
				titulo: 'Redução de velocidade média (KM/H) - Exemplo do pico da manhã',
				colunas: [
					{ titulo: 'Observado' },
					{ titulo: 'Atual' },
					{ titulo: 'Fechamento' },
					{ titulo: 'Com ações de mitigação' }
				],
				linhas: [
					[
						[ { data: 'MUNICÍPIO' } ],
						[ { data: '21,0 km/h' } ],
						[ { data: '20,9 km/h (-0,16%)' } ],
						[ { data: '20,9 km/h (-0,06%)' } ]
					],
					[
						[ { data: 'CENTRO EXPANDIDO' } ],
						[ { data: '26,8 km/h' } ],
						[ { data: '26,6 km/h (-0,48%)' } ],
						[ { data: '26,7 km/h (-0,28%)' } ]
					],
					[
						[ { data: 'ÁREA DE INFLUÊNCIA' } ],
						[ { data: '22,7 km/h' } ],
						[ { data: '20,8 km/h (-8,01%)' } ],
						[ { data: '21,1 km/h (-6,89%)' } ]
					],
					[
						[ { data: 'RUA AMARAL GURGEL' } ],
						[ { data: '42,8 km/h' } ],
						[ { data: '27,3 km/h (-36,1%)' } ],
						[ { data: '31,7 km/h (-25,7%)' } ]
					],
					[
						[ { data: 'AV. SÃO JOÃO' } ],
						[ { data: '31,4 km/h' } ],
						[ { data: '29,1 km/h (-7,05%)' } ],
						[ { data: '28,3 km/h (-9,71%)' } ]
					]
				]
			},

			tabela_80a: {
				titulo: 'Aumento do tempo médio de viagem (minutos) - Exemplo do pico da manhã',
				colunas: [
					{ titulo: 'Observado' },
					{ titulo: 'Atual' },
					{ titulo: 'Fechamento' },
					{ titulo: 'Com ações de mitigação' }
				],
				linhas: [
					[
						[ { data: 'MUNICÍPIO' } ],
						[ { data: '25,69 min' } ],
						[ { data: '25,75 min (+0,23%)' } ],
						[ { data: '25,8 min' } ]
					],
					[
						[ { data: 'CENTRO EXPANDIDO' } ],
						[ { data: '15,32 min' } ],
						[ { data: '15,41 min (+0,59%' } ],
						[ { data: '15, 54' } ]
					],
					[
						[ { data: 'ÁREA DE INFLUÊNCIA' } ],
						[ { data: '4,72 min' } ],
						[ { data: '4,83 min (+2,33%)' } ],
						[ { data: '4,82 min' } ]
					]
				]
			},

			galeria100_103: {
				width: 821,
				height: 597,
				images: [
					{
						url: this.src('arquivos/parque-minhocao/galerias/100_103/100.jpg'),
						state: true,
						legenda: 'Furtos e roubos na região. Setembro/2018',
						icon: false,
						id: 1
					},
					{
						url: this.src('arquivos/parque-minhocao/galerias/100_103/101.jpg'),
						state: false,
						legenda: 'Furtos e roubos na região. Outubro/2018',
						icon: false,
						id: 2
					},
					{
						url: this.src('arquivos/parque-minhocao/galerias/100_103/102.jpg'),
						state: false,
						legenda: 'Furtos e roubos na região. Novembro/2018',
						icon: false,
						id: 3
					}, {
						url: this.src('arquivos/parque-minhocao/galerias/100_103/103.jpg'),
						state: false,
						legenda: 'Furtos e roubos na região. Dezembro/2018',
						icon: false,
						id: 4
					}
				]
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
