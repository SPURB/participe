<template>
	<div class="SetorCentral2" ref="conteudoConsulta">
		<PageTop background_image_src="" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Setor Central 2</div></template>
			<template slot="subtitulo"><div>2ª consulta pública – Projeto de Intervenção Urbana Setor Central</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>
		<section>
			<h2 class="titulo" indent="1">A revisão da Operação Urbana Centro e o PIU Setor Central</h2>
			<section>
				<h3 class="titulo" indent="2">Abertura</h3>
				<p>A Operação Urbana Centro vai mudar.</p>
				<p>A OU Centro foi instituída pela Lei Municipal nº 12.349, de 6 de junho de 1997, com objetivo de promover a requalificação e a renovação do centro de São Paulo, através da preservação do patrimônio edificado, do incremento populacional e do estímulo às atividades típicas de áreas centrais: hoteleira, educacional, cultural e de entretenimento.</p>
				<p>Embora a transferência de potencial construtivo de imóveis tombados estivesse disciplinada por legislação específica, a Operação Urbana Centro estabeleceu um cálculo alternativo para esse potencial transferível, proporcional à área construída, que favorecia a restauração de edificações históricas de grande porte, como o Prédio Martinelli, por exemplo.</p>
				<p>Outro ponto importante foi o incentivo aos empreendimentos habitacionais, pela dispensa do pagamento de contrapartida para áreas edificadas até 6 vezes a área do terreno.</p>
				<p>De forma precursora na legislação urbanística municipal, a Lei da Operação Urbana Centro admitiu a construção de edifícios residenciais sem a oferta até então obrigatória de vagas de estacionamento, dispensa que foi estendida aos demais usos incentivados de educação, cultura, entretenimento e hospedagem, considerada a oferta abundante de transporte público na área central.</p>
				<p>Foi na elaboração da lei da Operação Urbana Centro que se aprovou, pela primeira vez na legislação urbanística, a gestão compartilhada de implantação de um projeto público, com a criação de sua Comissão Executiva, composta por representantes de organismos de atuação significativa na área e de representantes de secretarias municipais.</p>
				<p>Passados 20 anos de aprovação da Lei 12.349/1997, a Operação Urbana Centro vai mudar.</p>
				<p>Mudará para entrar em consonância com os marcos regulatórios federal e municipal da política urbana vigentes, consolidados no Estatuto da Cidade, Lei Federal nº 10.257 de 10 de julho de 2001 que regulamentou os capítulos constitucionais referentes à política urbana, e no Plano Diretor Estratégico (PDE) de São Paulo, aprovado pela Lei nº 13.430, de 13 de setembro de 2002, e revisto pela Lei nº 16.050, de 31 de julho de 2014.</p>
				<p>Essas leis possibilitaram a implementação do coeficiente de aproveitamento básico único no Município, estabelecendo a separação entre a propriedade do solo e o direito de construir; trouxeram maior eficácia à ação pública sobre o território, criando instrumentos de regulação de acesso à terra, de reordenamento de atividades no território, de recuperação da valorização fundiária em benefício da coletividade e de indução de transformações necessárias ao melhor aproveitamento da infraestrutura urbana e ao cumprimento da função social da propriedade.</p>
				<p>Mudará para se integrar a um centro metropolitano maior, revelado quando a São Paulo Urbanismo, que coordena a proposta de mudança, passou a estudar a região central além dos distritos Sé e República, rastreando a vitalidade que se espraia pelos distritos de Santa Cecília, Bom Retiro, Pari, Brás, Belém, Mooca e Liberdade.</p>
				<p>Essa expansão se impôs pela percepção das diversas dinâmicas de alcance metropolitano distribuídas nesses distritos e da necessidade de integrá-las em um sistema urbano qualificado e eficiente, capaz de suportar adensamento populacional, de estimular a ampliação da atividade econômica e de elevar o patamar de investimento privado local.</p>
				<p>O estudo resultante, conduzido sob os parâmetros do <a href="http://legislacao.prefeitura.sp.gov.br/leis/decreto-56901-de-29-de-marco-de-2016">PROJETO DE INTERVENÇÃO URBANA - PIU</a>, abrangeu um perímetro muito maior que o da Operação Urbana Centro original.</p>
				<p>O PIU SETOR CENTRAL consolidado propõe um Programa de Intervenções, Regramentos Específicos, Estratégias de Intervenção, um Modelo de Gestão Financeira e um Modelo de Gestão Participativa e a proposta de utilização de dois instrumentos de implantação que se complementam: a OPERAÇÃO URBANA CENTRO revisada e a ÁREA DE INTERVENÇÃO URBANA SETOR CENTRAL.</p>
				<p>O que muda na Operação Urbana Centro que conhecemos?</p>
				<p>MUDA O SEU PERÍMETRO DE ABRANGÊNCIA, voltando àquele proposto nos seus estudos iniciais, nos anos 1990, desenvolvidos em substituição à Operação Urbana Anhangabaú vigente à época. A proposta técnica daquele momento era de que a Operação Urbana Centro abrangesse exclusivamente as áreas conhecidas como Centro Velho e Centro Novo de São Paulo, cujo espaço construído e significado singulares justificavam um projeto específico de requalificação. O acréscimo do distrito do Brás aos distritos Sé e República deu-se por decisão intempestiva, visando o financiamento de intervenções em ruas comerciais daquele distrito.</p>
				<p>MUDA A COMPOSIÇÃO DA COMISSÃO EXECUTIVA da Operação Urbana Centro, para que tenha paridade de representação do setor público e da sociedade civil e paridade de gênero, para que tenha participação rotativa das associações e organizações da sociedade civil capazes de contribuir com os objetivos do projeto e para abrigar representantes eleitos dos órgãos colegiados da administração municipal, favorecendo a atuação integrada de agentes públicos e privados.</p>
				<p>MUDAM OS INCENTIVOS DE GRATUIDADE, agora direcionados à produção de habitações de interesse social, à recuperação de edifícios existentes para essa finalidade e para a recuperação do patrimônio histórico.</p>
				<p>PERMANECEM OS OBJETIVOS expressos na Lei Municipal nº 12.349/1997, agora potencializados pelo Plano Urbanístico, pela Estratégias, pelos Instrumentos e pelos Modelos de Gestão Financeira e Gestão Participativa, detalhados a seguir.</p>
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/setor-central-2/mapas/perimetro-antigo.jpg'),
					legenda: [
						{ borda: '#D32026', espessura: '3', pontilhado: true, descricao: 'Operação Urbana Centro - Lei nº 12.349/1997' }
					]
				}"></Imagem>
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/setor-central-2/mapas/perimetro-novo.jpg'),
					legenda: [
						{ borda: '#000000', espessura: '3', pontilhado: true, descricao: 'Perímetro proposto - PIU Setor Central' }
					]
				}"></Imagem>
				<ul class="links">
					<li>
						<a href="">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Nota Técnica - Perímetro</div>
							<span>XXX Mb</span>
						</a>
					</li>
				</ul>
				<p>O território compreendido no projeto abrange uma área de 2.098 ha, dos quais 1.485 ha estão contidos no Subsetor Arco Tietê do Setor Orla Ferroviária e Fluvial da Macroárea de Estruturação Metropolitana. A abrangência proposta reinterpreta a setorização da Macroárea de Estrturação Metropolitana – MEM – indicada no PDE ao expandir a área identificada como centro metropolitano. O projeto, então, passa a integrar objetivos propostos para o Setor Central e para o Arco Tietê:</p>
				<ol class="romanos">
					<li>fortalecimento da centralidade municipal;</li>
					<li>maior aproveitamento da terra urbana, através da reabilitação de áreas degradadas ou subutilizadas;</li>
					<li>valorização do patrimônio cultural, industrial e ferroviário;</li>
					<li>requalificação dos sistemas ambientais existentes;</li>
					<li>integração de usos residenciais e não residenciais;</li>
					<li>qualificação da moradia e oferta de habitações de interesse social e de mercado popular;</li>
					<li>melhoria da mobilidade e dos sistemas de transporte público;</li>
					<li>atuação preventiva em áreas sujeitas a riscos de natureza variada para a ocupação e atuação corretiva em áreas contaminadas.</li>
				</ol>
				<p>O perímetro de estudo proposto responde ao objetivo urbanístico do projeto – adensamento populacional dos distritos do anel central –; mantendo territórios de adensamento construtivo estabelecidos no Projeto do Arco Tietê, na faixa norte do PIU Setor Central, com ajustes do regramento proposto, a fim de alcançar o incremento populacional pretendido.</p>
				<p>O novo perímetro passou a abranger distritos compreendidos no Arco Tietê – Santa Cecília, Bom Retiro, Brás e Pari – mas não absorvidos naquele projeto, estabelecendo regramentos de incentivo à requalificação de edificações existentes, à produção de habitações de interesse social e ao incremento do uso residencial em territórios produtivos; propostas de melhoria de desempenho da mobilidade nas concentrações comerciais e um plano de intervenções qualificadoras do espaço público.</p>
				<Galeria :gallery_attrs="galeria01"></Galeria>
				<ul class="links">
					<li>
						<a href="">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Diagnóstico Sócio-territorial</div>
							<span>XXX Mb</span>
						</a>
					</li>
					<li>
						<a href="">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Diagnóstico Ambiental</div>
							<span>XXX Mb</span>
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h3 class="titulo" indent="2">O Centro que queremos</h3>
				<p>Considerando a dinâmica atualmente existente na região central de São Paulo, que concentra uma significativa quantidade de empregos, comércios e serviços, sendo polo de atração de viagens com origem em outras partes do município e em outras cidades da região metropolitana e do país, mas que apresenta densidade populacional abaixo da desejada e diversos problemas sociais em seu território, foi inicialmente necessário definir as finalidades às quais o projeto e os instrumentos de intervenção a ele vinculados devem estar relacionadas.</p>

				<p class="img">infografico.indd</p>

				<h4>Atendimento habitacional</h4>
				<p>Nos distritos centrais da cidade, o tema do atendimento habitacional tem prioridade indiscutível. Trata-se de território de oferta concentrada de empregos e serviços e com parcelas expressivas de baixa densidade populacional, aptas ao recebimento de moradores.</p>
				<p>Aqui estão representadas todas as modalidades de moradia sub-normal – condomínios precarizados, cortiços, ocupações de edifícios adaptados, favelas – e a maior concentração da cidade de população em situação de rua.</p>
				<p>O centro que queremos deve abrigar mais pessoas e abrigar melhor as pessoas – aquelas que aqui residem e que aqui virão residir. A oferta de oportunidades de moradia para diversas faixas de renda é diretriz de projeto, com ênfase no atendimento habitacional de interesse social. Considerando a convivência de usos residenciais e não residenciais observada nos distritos centrais, será assegurada qualidade urbanística às vizinhanças residenciais – ruas qualificadas, conectividade entre elementos referenciais do bairro e serviços públicos ajustados à demanda.</p>				
				<h4>Mobilidade sustentável</h4>
				<p>Desejamos um padrão sustentável de mobilidade, um centro acessível por transporte público, onde a mobilidade ativa seja facilitada, a circulação e a distribuição de carga estejam organizadas e o transporte privado disciplinado.</p>
				<p>Para a melhoria das condições de mobilidade ativa foi proposto um plano de qualificação de logradouros abrangendo eixos comerciais e ruas destacadas que integram vizinhanças residenciais, zonas comerciais, terminais de ônibus e áreas verdes públicas. Essa qualificação pode abranger alargamento, requalificação e arborização de calçadas, implantação de <i>pokcket parks</i>, adequação da sinalização horizontal e vertical e o conjunto de dispositivos de acessibilidade universal. Abrange também a complementação da malha cicloviária que serve a área central. O plano considera as barreiras existentes – ferrovias, vias estruturais de tráfego, orlas fluviais – e propõe mais alternativas e modalidades de transposição.</p>
				<p>O transporte público, já assegurado pelas estações de trem e metrô, pelos terminais e linhas de ônibus que servem os distritos centrais, será positivamente impactado pela melhoria das condições de circulação no entorno dos terminais da área central – os mais importantes Princesa Isabel, Bandeira e Parque Dom Pedro – e pela própria qualificação desses equipamentos, a ser alcançada pela aplicação da Lei Municipal nº 16.211, de 27 de maio de 2015, que regulamenta a concessão de terminais municipais à exploração e à operação da iniciativa privada.</p>				
				<h4>Valorização do patrimônio edificado</h4>
				<p>As pré-existências são um ativo do projeto. O extenso conjunto de edificações tombadas nos bairros de Santa Ifigênia e Campos Elíseos, no Vale do Anhangabaú e na Rua Florêncio de Abreu subsidia a proposta de volumetria para as novas construções nessa região do centro, que ainda apresenta significativo potencial de transformação. Em áreas mais adensadas, no coração dos distritos Sé e República, também com alta concentração de edificações tombadas, as oportunidades de renovação são menores, justificando o estudo caso a caso de novos empreendimentos propostos.</p>				
				<h4>Organização de fluxos em centros comerciais</h4>
				<p>Os centros comerciais consolidados são também preexistências a serem valorizadas através das intervenções urbanísticas previstas no projeto: plano de requalificação de logradouros e medidas de regulação de circulação de cargas e da oferta de vagas de estacionamento. A proposta de incremento do uso residencial nesses centros comerciais vem ao encontro de demandas de associações de lojistas que pretendem vitalidade noturna para as ruas fervilhantes de consumidores que se tornam desertas à noite.</p>
				<p>Nessas áreas, está previsto o incentivo à implantação de mini centros de distribuição associados a estacionamentos verticais em localizações estratégicas da área central. Esses equipamentos melhoram as condições de distribuição de mercadorias na região, minimizando a circulação diurna de caminhões de pequeno porte, e organizam a oferta de vagas nos centros comerciais, viabilizando as propostas de restrição de estacionamento na via e de alargamento das calçadas das ruas comerciais.</p>				
				<h4>Qualificação de espaços públicos</h4>
				<p>A rede de espaços públicos e os bulevares centrais herdados de intervenções urbanísticas do início do século XX são ativos valorizados no projeto. O plano de qualificação de logradouros propõe a arborização dos bulevares e a integração de áreas verdes, conformando um sistema de espaços públicos que favorece a mobilidade ativa e atua como fator de mitigação de ilhas de calor.</p>
				<p>A precariedade das orlas fluviais tem sido enfrentada nas propostas do Arco Tamanduateí e do Arco Tietê, através de incentivos à desocupação das parcelas de Áreas de Preservação Permanente que gravam lotes privados. No PIU do Setor Central, além da qualificação das APPs, há o propósito de incentivar a intensificação da ocupação nas orlas fluviais dos rios Tamanduateí e Tietê e a localização de usos institucionais – lazer, educação e cultura – que potencializem, no Setor Central, a atratividade metropolitana dos territórios da MEM, como previsto no Plano Diretor Estratégico do Município.</p>				
				<h4>Gestão participativa</h4>
				<p>O Projeto Urbanístico Específico do Setor Central, que aborda intervenções físicas, combina-se ao Regramento Urbanístico que orienta, restringe ou incentiva o aproveitamento de lotes privados. A eficácia do PIU depende da correspondência das medidas e intervenções propostas aos interesses e demandas da sociedade civil em relação à gestão dos distritos centrais.</p>
				<p>A participação desses interlocutores na construção do projeto, no processo de aprovação dos instrumentos legais necessários e na gestão de implantação do PIU Setor Central – através das representações dos órgãos colegiados, da participação direta nas consultas abertas no portal Gestão Urbana e das audiências públicas programadas – é condição para que esse projeto atinja as finalidades pretendidas.</p>
				<Tabela :dados="tabela_estrategias"></Tabela>
			</section>
		</section>
		<section>
			<h2 class="titulo" indent="1">Programa de Intervenções</h2>
			<p>Em vista das finalidades do PIU Setor Central, o Programa de Intervenções proposto considerou principalmente a necessidade de integração e qualificação do território, de forma a dar suporte ao adensamento populacional e construtivo, à diversificação de atividades e ao fortalecimento da economia pretendidos pela intervenção.</p>
			<p>Para isso, o Programa de Intervenções do PIU Setor Central distribui-se em três frentes – Qualificação do Habitat, Mobilidade e Ambiental.</p>
			<p>A Qualificação do Habitat abrange a provisão habitacional de interesse social, para atendimento da população moradora de favelas, cortiços e ocupações ou em situação de rua, além da provisão dos equipamentos públicos necessários ao atendimento das demandas presente e futura, oriunda do incremento populacional proposto no projeto.</p>
			<p>A provisão habitacional de interesse social é tratada no âmbito de Áreas de Estruturação Local (AEL), mas a qualificação dessas áreas e sua integração com o restante do território estão intrinsecamente relacionadas às ações das frentes de Mobilidade e Ambiental.</p>
			<p>As intervenções relativas à Mobilidade contemplam medidas voltadas à mobilidade ativa e à mobilidade veicular motorizada e visam a melhorar a integração do território e qualificar o percurso do pedestre e do ciclista. Para tanto, foi elaborado um plano de qualificação de logradouros que abrange alargamento, requalificação e arborização de calçadas e espaços públicos, de forma a integrar vizinhanças residenciais, zonas comerciais, áreas verdes e equipamentos públicos com o sistema de transporte público coletivo, em especial as estações de trem e Metrô e os terminais de ônibus.</p>
			<p>Tais ações estão intrinsecamente relacionadas à concepção das redes de caminhos verdes e áreas verdes públicas. Pretende-se que o deslocamento dos pedestres entre meios de transporte, vizinhanças residenciais, Circuitos Comerciais e equipamentos públicos seja amparado por passeios com largura e mobiliários apropriados, com arborização que possibilite sombreamento e melhore o microclima, em logradouros com fachadas ativas e uso misto, que dinamize a utilização destes passeios.</p>
			<p>O plano cicloviário toma como referência a malha de ciclovias e ciclofaixas preexistentes e tem por objetivo expandir a rede atual, sobretudo onde a rede é mais esparsa, procurando conectar as Áreas de Estruturação Local de Moradia e elementos referenciais do território à rede de mobilidade, colaborando com a intermodalidade no deslocamento de pessoas.</p>
			<p>A expansão da rede cicloviária está associada a outras intervenções no espaço público – como o estabelecimento de uma rede de caminhos verdes arborizados e a implantação de melhoramentos viários – e, numa outra esfera, aos eixos onde o uso comercial e o uso habitacional são incentivados (Eixos Estratégicos). Além de potencializar os usos, as ciclovias e ciclofaixas colaboram com a construção de uma identidade pública para as Áreas de Estruturação Local da Moradia.</p>
			<p>Os rios, a linha férrea e parte da linha de Metrô e dos viários estruturais, especialmente a Avenida do Estado, representam atualmente barreiras que desarticulam as áreas de comércio especializado e moradia e dificultam o acesso ao sistema de transporte público.</p>
			<p>Em contrapartida, a proposição de requalificação ou implantação de novas transposições sobre a linha férrea na região dos distritos de Santa Cecília e Bom Retiro, principalmente por meio de edifícios-passarela, visa possibilitar a conexão do território adequada ao percurso do pedestre. De forma complementar, a qualificação dos passeios é proposta de forma mais acentuada nos distritos Pari, Brás e Mooca e na região da Baixada do Glicério, áreas hoje deficitárias neste quesito, nas quais as melhorias propostas tanto do ponto de vista da microacessibilidade, quanto em relação às questões ambientais e de uso, têm potencial de qualificar as áreas de moradia e fomentar o comércio já intenso nestas regiões. Além disso, são propostas passagens em nível sobre o Rio Tamanduateí articuladas às novas áreas públicas do projeto.</p>
			<Imagem :dados="{
				tipo: 'mapa',
				titulo: 'Território fragmentado',
				url: imgSrc('arquivos/setor-central-2/mapas/barreiras.jpg')
			}"></Imagem>
			<Imagem :dados="{
				tipo: 'mapa',
				titulo: 'Malha de conectividade',
				url: imgSrc('arquivos/setor-central-2/mapas/malha-conectividade.jpg'),
				legenda: [
					{ borda: '#b20000', linha: true, espessura: 4, descricao: 'Transposição para pedestres' },
					{ borda: '#ffe000', linha: true, espessura: 3, descricao: 'Requalificação/alargamento de calçada' },
					{ borda: '#bc6b00', linha: true, espessura: 3, descricao: 'Calçadão' },
					{ borda: '#ff6700', linha: true, espessura: 2, descricao: 'Melhoramentos viários' },
					{ borda: '#ba9600', linha: true, espessura: 3, descricao: 'Requalificação de logradouro' }
				]
			}"></Imagem>
			<p>Embora de maneira geral a região central apresente uma malha viária bem estruturada, o PIU Setor Central propõe alguns melhoramentos viários, necessários à transformação e à qualificação do território.</p>
			<p>Dessa forma, o projeto incorpora, com algumas alterações pontuais validadas pela Companhia de Engenharia e Tráfego – CET, a implantação de parte do Apoio Urbano Sul, aprovado pela Lei Municipal nº 16.541/2016, dando continuidade ao eixo de interligação de bairros ao sul da Marginal Tietê, com ciclovia e duas faixas de circulação veicular livre por sentido e a previsão de futura implantação de corredor de ônibus.</p>
			<p>Para ampliar a acessibilidade entre o Brás–Pari e melhorar a interrelação entre os polos de atratividade, têxtil, madeireiro e gastronômico, foi proposto um túnel de ligação sob a ferrovia, na Rua Monsenhor Andrade, desafogando o Largo da Concórdia, área que recepciona toda a população da Estação Brás da CPTM, que está no limite de seu carregamento viário.</p>
			<p>Também se propõem a melhoria da conexão entre o Viaduto Bresser e a Rua José Monteiro, consolidando o binário João Boemer – José Monteiro/Bresser como a grande conexão entre o Pari, o Belém e a Mooca; e novos alinhamentos na Av. do Estado, que têm relevância primordialmente ambiental, visando à recuperação da APP do rio Tamanduateí.</p>
			<p>Os demais melhoramentos viários propostos são pequenas costuras no tecido urbano que fortalecem a articulação da microacessibilidade das regiões de grande atratividade comercial e residencial.</p>
			<p>A partir da identificação de quatro circuitos de compras, nos quais estão presentes ruas majoritariamente comerciais e de predominância de lojas especializadas (Brás-Pari, Parque Dom Pedro, Bom Retiro-Luz e Centro), foi proposto o controle da oferta de vagas de estacionamento no interior do <i>Perímetro de Irradiação</i>, que tangencia essas áreas comerciais e que apresenta grande fluxo de transeuntes. Como alternativa à restrição, são estabelecidos incentivos à construção de edifícios-garagem em áreas estratégicas, na periferia das áreas comerciais, incentivando, nos circuitos de compras e na área interna à rótula, a mobilidade ativa – a pé e por veículos não motorizados – e por transporte público.</p>
			<p>Essa medida deve contribuir para a qualificação do território, em razão da redução da emissão de gases veiculares, e melhorar a fluidez do tráfego de pedestres, veículos não motorizados e dos ônibus que servem a região. A diminuição da oferta de vagas de estacionamento vai ao encontro das propostas de requalificação das vias públicas, de forma que, entre os resultados esperados, também estão a qualificação dos espaços públicos como suporte para a moradia e a valorização dos monumentos históricos, do comércio, dos serviços e dos equipamentos públicos voltados para a rua.</p>
			<p>Em relação à frente Ambiental, foi proposta uma rede de Caminhos Verdes, ruas arborizadas que definem percursos significativos para os habitantes ou os usuários da região, interligando áreas verdes, equipamentos públicos, sistema de transporte e outros pontos relevantes.</p>
			<p>Tais caminhos têm impacto tanto na qualificação da mobilidade ativa, quanto na melhoria das condições ambientais da região, auxiliando na redução das ilhas de calor e na conformação de corredores ambientais que permitam a conservação da diversidade genética da avifauna.</p>
			<p>Junto à rede de caminhos verdes, a requalificação de áreas verdes existentes e a implantação de novos parques, praças e canteiros são ações que visam à complementação do Sistema de Áreas Protegidas, Áreas Verdes e Espaços Livres (SAPAVEL), seguindo as diretrizes estabelecidas no Plano Diretor Estratégico (PDE) – Lei nº 16.050/14.</p>
			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/setor-central-2/img/diagramatico-1.png')
			}"></Imagem>
			<Imagem :dados="{
				tipo: 'mapa',
				titulo: 'Plano de arborização',
				url: imgSrc('arquivos/setor-central-2/mapas/plano-arborizacao.jpg'),
				legenda: [
					{ fundo: '#67A37C', descricao: 'Parques/praças' },
					{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/plano-arborizacao_1.png'), descricao: 'Caminhos verdes existentes' },
					{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/plano-arborizacao_2.png'), descricao: 'Caminhos verdes a requalificar' },
					{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/plano-arborizacao_3.png'), descricao: 'Caminhos verdes novos' }
				]
			}">
				<template slot="extra">
					<a :href="this.$store.getters.basePath + ''" class="button">Acesse o mapa interativo <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
				</template>
			</Imagem>
			<p>Entretanto, as características da urbanização que se consolidou na região dificultam a implantação de novas áreas verdes de grande porte. Assim, pretende-se a instalação de <i>pocket parks</i>, praças implantadas em lotes isolados de pequena dimensão, com baixa probabilidade de aproveitamento para verticalização, que além de melhorias ambientais na escala da quadra e qualificação das rotas de circulação, possibilitam locais de lazer e descanso à população.</p>
			<p>Tais espaços têm o potencial de atrair diferentes usos, proporcionar a experimentação do espaço público, garantir segurança e zeladoria pela vigilância e manutenção de usuários e lojistas locais e gerar interação entre as pessoas que por ali circulam. Podem conter água em fontes ou pequenos lagos acessíveis ao contato e associar-se a elementos históricos, obras de arte ou equipamentos públicos.</p>
			<p>Buscou-se, ainda, a demarcação de ao menos uma área verde por Área de Estruturação Local da Moradia, de forma a garantir áreas de lazer e qualidade ambiental aos moradores destas vizinhanças.</p>
			<p>Em relação às questões de drenagem, o projeto busca atenuar os problemas decorrentes do elevado nível de impermeabilização da mancha urbana e da alta ocupação das várzeas fluviais com medidas de recomposição da vegetação existente nas margens dos rios e de contenção de águas pluviais desde as áreas mais elevadas das bacias até as planícies aluviais.</p>
			<p>Esta contenção pode se dar por meio de praças rebaixadas de contenção ou absorção que, em épocas de seca, configuram área de estar e lazer, e por canteiros e jardins drenantes ao longo do sistema viário.</p>
			<p>Para a definição das áreas de encosta onde serão privilegiadas as medidas de contenção de águas pluviais e das áreas de várzea onde serão incentivadas as medidas de ampliação da cobertura vegetal, foi traçado o <a href="">MAPA DE COMPARTIMENTOS AMBIENTAIS</a>, que subsidia a aplicação da Quota Ambiental instituída na lei de Zoneamento e aplicável ao PIU do Setor Central.</p>
			<p>
				<a href="" class="button">Acesse o mapa interativo "Mapa de Compartimentos Ambientais" <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
			</p>
			<p>Em conjunto, as ações propostas buscam a conformação de uma rede ambiental, que conecte áreas verdes existentes e novas, qualifique o percurso do pedestre e a vida urbana, permita a movimentação da avifauna e contenha mecanismos que atenuem os problemas de drenagem oriundos da ocupação e adensamento.</p>
			<p>Adicionalmente às medidas citadas, os incentivos urbanísticos à renovação das orlas fluviais devem contribuir para qualificação das áreas de preservação permanente dos rios Tietê e Tamanduateí e estabelecer uma nova relação entre a população de São Paulo e dois de seus principais rios.</p>
		</section>
		<section>
			<h2 class="titulo" indent="1">Setorização do PIU Setor Central</h2>
			<p>A proposta de setorização do PIU Setor Central foi elaborada considerando os seguintes elementos e critérios, detalhados na sequência:</p>
			<ol class="romanos">
				<li>Territórios voltados à habitação e setores com predomínio comercial</li>
				<li>Existência de infraestrutura de transporte coletivo de massa</li>
				<li>Densidades populacional e construtiva</li>
				<li>Implantação do Apoio Sul</li>
				<li>Patrimônio histórico</li>
				<li>Territórios de transformação, qualificação e preservação</li>
			</ol>
			<section>
				<h3 class="titulo" indent="2">Habitação e atividade comercial</h3>
				<p>A partir da concentração de imóveis enquadrados como Zonas Especiais de Interesse Social (ZEIS) no território do PIU Setor Central, foram definidas as Áreas de Estruturação Local (AEL) da Moradia, que configuram elemento estruturador de propostas de intervenção para as vizinhanças habitacionais e de provisão habitacional de interesse social, e identificados logradouros cuja qualificação é importante ao adensamento populacional e construtivo desejado para tais perímetros.</p>
				<p>
					<a href="" class="button">Acesse o mapa interativo "ZEIS e ZDE" <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
				</p>
				<p>De forma similar, com base na identificação dos setores censitários com predominância comercial, foram levantadas ruas de comércio especializado que configuram polos de atração metropolitana e, por isso, demandam qualificação e ordenamento do espaço público.</p>
				<p>Os logradouros identificados configuraram EIXOS ESTRATÉGICOS, que apresentam incentivo aos usos não residenciais com fachada ativa no térreo, visando à instalação de atividades que deem suporte ao uso residencial nas AEL ou a manutenção de atividades comerciais já existentes.</p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/setor-central-2/img/diagramatico-2.png')
				}"></Imagem>
				<p>
					<a href="" class="button">Acesse o mapa interativo "Eixos comerciais e de moradia" <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
				</p>
			</section>
			<section>
				<h3 class="titulo" indent="2">Infraestrutura de transporte coletivo de massa</h3>
				<p>O Plano Diretor Estratégico (Lei nº 16.050/2014) instituiu as áreas de influência dos Eixos de Estruturação da Transformação Urbana (EETU), territórios definidos pela presença de elementos estruturais dos sistemas de transporte coletivo de média e alta capacidade (estações de trem e metrô e corredores de ônibus), para as quais foi direcionado o adensamento construtivo e populacional do Município.</p>
				<p>Em vista da incidência da Operação Urbana Centro e da Macroárea de Estruturação Metropolitana, na maior parte do território do PIU Setor Central não foram demarcadas zonas vinculadas aos EETU. Considerando, entretanto, as diretrizes do PDE para adensamento e melhor aproveitamento das áreas servidas de transporte público de massa, os parâmetros de ocupação do PIU Setor Central levaram em consideração a aplicação dos critérios dos EETU no território do projeto.</p>

				<p class="img">buffer.pdf</p>

			</section>
			<section>
				<h3 class="titulo" indent="2">Densidades</h3>
				<p>O <i>Diagnóstico - Análise Territorial</i> apresentado na primeira consulta pública do PIU Setor Central evidenciou que segundo dados da RAIS de 2014, os dez distritos centrais concentram 19% dos empregos formais do município – número que não considera os empregos ofertados pela administração pública, numerosos nessa região.</p>
				<p>Esses mais de 800 mil empregos que promovem a grande diversidade de serviços ofertados fundamentam a diretriz específica do PDE de fortalecer a polaridade de alcance municipal, aumentando a densidade demográfica e a oferta habitacional da região central.</p>
				<p>Os distritos da Liberdade, Bela Vista e Consolação e parcelas dos distritos do Cambuci e de Santa Cecília que já sofreram um processo de transformação e verticalização e apresentam padrão de urbanização elevado e alta concentração de empregos e de serviços referenciam a proposta de adensamento populacional e construtivo pretendido no projeto. C</p>
				<p>Consideradas as densidades populacionais dos três distritos mais populosos, destacam-se os índices de Santa Cecília, República e Bela Vista, todos acima de 200 hab/ha, densidade compatível com o modelo de cidade compacta que vem sendo adotado em projetos urbanos recentes.</p>
				<p>A partir desses dados e da diretriz de adensamento populacional do Setor Central da Macroárea de Estruturação Metropolitana, a densidade populacional média futura do projeto foi estabelecida entre 200 e 250 hab/ha, contra a média atual de 145 hab/ha, o que corresponde a um incremento populacional situado entre 115.000 e 220.000 novos moradores para área de 2.098 ha compreendida no perímetro de intervenção.</p>
				<p>Os incentivos à produção imobiliária no Setor Central buscam associar adensamento construtivo e adensamento populacional e promover o convívio entre pessoas de faixas de renda distintas e o uso misto nas edificações – diversidade aqui entendida como elemento qualificador da vida urbana.</p>
				<p>A produção habitacional de mercado dos últimos anos, no âmbito da Operação Urbana Centro, foi dirigida a segmentos bem específicos de consumidores, expandindo o padrão uma unidade-uma pessoa há muito presente no centro. Empresas lançaram produtos direcionados a um público jovem ou com um estilo de vida jovem, ao menos.</p>
				<p>Ainda que essa tendência se mantenha nos distritos da Sé e República, o projeto busca promover a diversificação de tipologias habitacionais, de forma a atender a outras conformações familiares, considerando a variedade da oferta habitacional na região – produção imobiliária formal, cortiços, ocupações –, as alternativas de acesso – aquisição ou aluguel –, finalidade – domicílio permanente, transitório ou temporário –, e as formas de compartilhamento domiciliar – entre familiares, repúblicas para estudantes, lar de idosos, etc.</p>
				<p>Conforme dados disponíveis na SINOPSE do CENSO 2010, observa-se a existência de 33.149 domicílios vagos na região de projeto, cerca 14,6% do total de domicílios. Em números absolutos, 8 mil domicílios foram ocupados desde 1991, quando o índice de vacância atingia 18,5%. Esse é um estoque de reserva a ser ativado pelo projeto.</p>
				<p>A análise dos usos transformáveis pelos setores do projeto revela que a porção ao norte da ferrovia tem em torno de 540 mil metros quadrados de terreno passíveis de transformação. Analisadas as demais áreas abrangidas no projeto, foi estimada a possibilidade de transformação de 2,1 milhões de metros quadrados de terrenos, cuja utilização é parametrizada por índices urbanísticos ajustados a cada setor do projeto, pela adoção da cota máxima de terreno por unidade habitacional e por incentivos construtivos e parâmetros qualificadores da edificação.</p>
				<p>A área para transformação disponível, somada aos domicílios vagos, é muito superior ao que é demandado para se atingir a densidade meta do projeto de 115 a 220.000 novos habitantes na região, meta que poderá ser ultrapassada e determinar o ajuste da proposta em anos futuros.</p>
				<p>Nesse sentido, a incidência das diferentes Áreas do projeto e dos parâmetros construtivos a elas vinculados levaram em consideração o estoque construído hoje existente para uso residencial e não residencial e a possibilidade de adensamento construtivo dessas regiões.</p>
				<Tabela :dados="tabela_densidade"></Tabela>
				<p>Partes significativas dos distritos do Bom Retiro, Pari e Brás mais próximas dos dois distritos centrais estão contidas em perímetros de ZDE-1 - Zona de Desenvolvimento Econômico 1, abrangendo áreas de grande concentração comercial e de atividades industriais de pequeno e médio porte.</p>
				<p>Nessas zonas, ainda que os usos residenciais verticais sejam admitidos pelo Zoneamento, estima-se um baixo potencial de transformação de imóveis situados nos polos comerciais de vestuário e de utilidades consolidados, com evidências de investimentos continuados e de vitalidade econômica que extrapolam os limites municipais.</p>
				<p>Dessa forma, o projeto indica as áreas de menor densidade construtiva situadas na faixa norte dos distritos do Bom Retiro e do Pari que se estende até a marginal Tietê e na parcela do distrito de Santa Cecília situada acima da ferrovia como as áreas de estímulo ao adensamento construtivo, potencializado pelas conexões facilitadas com municípios vizinhos.</p>
				<p>Nesse território, com terrenos de grandes dimensões subaproveitados e extensões de terras públicas passíveis de transformação, são propostas condições favoráveis à alta densidade construtiva e à localização de usos de atratividade metropolitana. A implantação de trecho do Apoio Urbano Sul, melhoramento viário previsto na Lei Municipal nº 16.541/2015, reforça a oportunidade de renovação das quadras lindeiras ao logradouro.</p>
				<p>Em relação às áreas públicas, a proposta é conformar uma rede de intervenções estratégicas para as quais se estabeleçam diretrizes e parâmetros urbanísticos específicos, procedimentos de chamamento de investidores privados e de gestão pública das parcerias que possam deflagrar a sua transformação.</p>
				<p>Outros territórios onde o projeto pretende a intensificação do aproveitamento dos terrenos correspondem aos perímetros de ZEIS 3. Há a expectativa do aumento da atratividade desses territórios para empreendedores imobiliários, em razão da concessão de incentivos à produção de HIS 1 proposta no projeto. Trata-se, contudo, de uma transformação monitorada, uma vez que os empreendimentos incentivados deverão ser propostos para imóveis vagos ou subutilizados de uso não residencial.</p>
				<p>Nos distritos de Sé, República e Santa Cecília já são observados altos índices de aproveitamento dos terrenos. O incremento construtivo/populacional nesses distritos deve acontecer por empreendimentos dispersos, complementando a volumetria de quadras já densamente edificadas. A exemplo das zonas comerciais ao norte da ferrovia, também se atribui baixo potencial de transformação aos polos comerciais de Santa Ifigênia – eletroeletrônicos – e Vinte e Cinco de Março – variedades.</p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/setor-central-2/img/diagramatico-3.png')
				}"></Imagem>
				<Imagem :dados="{
					tipo: 'mapa',
					titulo: 'Densidade média por distrito',
					url: imgSrc('arquivos/setor-central-2/mapas/densidade-distritos.jpg')
				}"></Imagem>
				<p>
					<a href="" class="button">Acesse o mapa interativo "Densidade Populacional" <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
				</p>
				<p>
					<a href="" class="button">Acesse o mapa interativo "Densidade Construtiva" <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
				</p>
			</section>
			<section>
				<h3 class="titulo" indent="2">Apoio Sul</h3>
				<p>A implantação de trecho do Apoio Urbano Sul, melhoramento viário previsto na Lei Municipal nº 16.541/2015, reforça a oportunidade de renovação das quadras lindeiras a esse Apoio, para os quais são sugeridos parâmetros que possibilitem uma alta densidade populacional e construtiva.</p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/setor-central-2/mapas/diagrama-apoio-sul.png')
				}"></Imagem>
			</section>
			<section>
				<h3 class="titulo" indent="2">Patrimônio Histórico</h3>
				<p>A área abrangida no projeto compreende testemunhos edificados de diversos períodos e tipologias históricos. Na orla ferroviária, há edifícios fabris, galpões e vilas operárias. Na parcela da Bela Vista, há uma sucessão de sobrados e vilas remanescentes da ocupação original da região. Os distritos de Santa Cecília, Sé e República contam, por etapas, a história da verticalização construtiva da cidade. Tratando-se do centro histórico, os edifícios institucionais tombados também são inúmeros.</p>
				<p>O PIU do Setor Central destaca, dentre os diversos territórios, trechos dos bairros de Campos Elíseos e de Santa Ifigênia, para a proposição de um regramento urbanístico que possa conciliar o número significativo de imóveis com interesse de preservação e com o igualmente significativo número de imóveis passíveis de renovação.</p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/setor-central-2/mapas/diagrama-perimetros-tombamento.png')
				}"></Imagem>
				<p>
					<a href="" class="button">Acesse o mapa interativo "Patrimônio" <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
				</p>
				<p>
					<a href="" class="button">Acesse o mapa interativo "PRIT" <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
				</p>
			</section>
			<section>
				<h3 class="titulo" indent="2">Territórios de Transformação, Qualificação e Preservação</h3>
				<p>O Projeto de Intervenção Urbana do Setor Central tem por objetivo construir um projeto estruturante para área central, em conformidade com o PDE e a Lei de Parcelamento, Uso e Ocupação do Solo, Lei Municipal nº 16.402 de 22 de março de 2016.</p>
				<p>Essa Lei estabeleceu o zoneamento do território municipal, organizando as zonas segundo três agrupamentos: <b>Território de Transformação</b>, <b>Território de Qualificação</b> e <b>Território de Preservação</b>.</p>
				<p>Estão compreendidas no <b>Território de Preservação</b> os bairros consolidados, de baixa e média densidades, os conjuntos urbanos específicos, e áreas onde se pretende desenvolver atividades econômicas sustentáveis, compatíveis com a preservação cultural e com a preservação ambiental.</p>
				<p>No âmbito de estudo, essas áreas correspondem aos perímetros de <b><i>ZEPEC – Zona Especial de Preservação Cultural</i></b>, que podem abranger: Bens Imóveis Representativos – ZEPEC-BIR, Áreas de Urbanização Especial – ZEPEC-QUE, Áreas de Proteção paisagística – ZEPEC-APPa e Áreas de Proteção Cultural – ZEPEC-APC, e aos perímetros de <b><i>ZER – Zona Exclusivamente Residencial –</i></b> inexistentes na área abrangida no projeto.</p>
				<p>Nos <b>Territórios de Qualificação</b>, os objetivos são a diversificação de usos, o adensamento populacional moderado, dependendo das características de cada área estudada, abrangendo:</p>
				<ul>
					<li>Perímetros de <b><i>ZDE – Zona de Desenvolvimento Econômico</i></b>, que compreendem, no âmbito de estudo, áreas comerciais e fabris do Bom Retiro e do Pari,</li>
					<li>Perímetros de <b><i>ZEIS –Zona Especial de Interesse Social</i></b>, que compreendem áreas da orla ferroviária, da baixada do Glicério e dos distritos do Brás e do Pari,</li>
					<li>Perímetros de <b><i>ZCOR- Zona Corredor</i></b>, não encontrados no âmbito do projeto;</li>
					<li>Perímetros de <b><i>ZM – Zona Mista</i></b>, que abrangem a orla fluvial do Tietê;</li>
					<li>Perímetros de <b><i>ZC – Zona de Centralidade</i></b>, presentes nos distritos Sé, República e Brás, e, como áreas de transição entre zonas, nos distritos do Bom Retiro, do Pari e de Santa Cecília.</li>
				</ul>
				<p>Nos <b>Territórios de Transformação</b>, objetiva-se adensamento construtivo e populacional, intensificação de atividades econômicas e da oferta de serviços públicos, considerada a proximidade das redes de transporte público de média e alta capacidades. As zonas que caracterizam esses territórios são as <b><i>Zonas Eixo de Estruturação da Transformação</i></b>, subdivididas segundo a localização – dentro ou fora da MEM – e quanto à implantação das redes de transporte – existentes ou previstas.</p>
				<p>As <b><i>Zonas Eixo de Estruturação da Transformação Urbana</i></b> são encontradas nos distritos de Santa Cecília, no entorno da estação Santa Cecília da Linha 3 Vermelha do Metrô, e Mooca e Belém, polarizadas pela Linha 3 Vermelha e pelas linhas 10 Turqueza e 11 Coral da CPTM.</p>
				<p>As <b><i>Zonas Eixo de Estruturação da Transformação Metropolitana</i></b> são encontradas nos distritos contidos na MEM, abrangendo trechos de Santa Cecília servidos pela Linha 3 Vermelha, pela Linha 4 Amarela e pela Linha 1 Azul do Metrô e pela Linha 7 Rubi e Linha 11 Coral da CPTM.</p>
				<p>A setorização do PIU Setor Central adota categorização semelhante, definindo Áreas de Transformação (T), Áreas de Qualificação (Q) e Áreas de Preservação (P).</p>
				<p class="img">quadro de parametros piu acp</p>
				<p>Essa nomenclatura, que será adotada nos demais projetos de intervenção urbana propostos para a Macroárea de Urbanização Consolidada, foi introduzida no <i>Projeto de Intervenção Urbana do Arco Tietê</i>, atualmente em processo de revisão. Considerando-se que os Arcos Tamanduateí, Tietê, Jurubatuba e Pinheiros e o Setor Central compõem a MEM, buscou-se equalizar as análises e proposições para toda a Macroárea. Sendo assim, preservadas as especificidades de territórios tão distintos, foram propostos neste projeto parâmetros urbanísticos que participam da mesma hierarquia de regramentos utilizados nos Projetos de Intervenção Urbana dos demais subsetores da MEM. Dessa forma, algumas categorias de setor podem estar ausentes em determinados trechos da MEM – como ocorre com as categorias T1 e Q3 neste projeto</p>
			</section>
			<section>
				<h3 class="titulo" indent="2">Áreas e Eixos</h3>
				<p>A partir dos elementos apontados, foram estabelecidos as Áreas e Eixos incidentes no território do PIU Setor Central.</p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/setor-central-2/img/diagramatico-4.png')
				}"></Imagem>

				<p class="img">excel parametros R02 xlsx</p>

				<p>Os <b>Territórios de Transformação</b>, buscam o adensamento populacional e construtivo, fortalecimento das atividades econômicas e de serviços, mix de atividades e otimização do uso da infraestrutura.</p>
				<p>O projeto parte dessa definição e traz incentivos que orientam a transformação urbana, principalmente onde existe baixo adensamento construtivo e habitacional e onde novas infraestruturas abrirão frentes urbanas e processos de transformação – especialmente àquelas ligadas a implantação do Apoio Urbano Sul. Também recebe maior incentivo à transformação a parte leste do território, integrante do atual Perímetro da Operação Urbana Centro – onde, junto a ações de melhoria da microacessibilidade, é possível comportar o incremento populacional e construtivo.</p>
				<p>A conceituação das Áreas de Transformação comporta modulações.</p>
				<p>As Áreas T2 compreendem perímetros de Zonas Eixo de Estruturação da Transformação Urbana (ZEU), Zonas Eixo de Estruturação da Transformação Metropolitana (ZEM) e Zona de Centralidade (ZC), localizados ao sul da ferrovia, além de áreas de grande viabilidade de transformação, tais como a mencionada porção leste do perímetro central, especificamente o Brás.</p>
				<p>Classificam-se também como T2 as áreas demarcadas como ZEIS na Lei de Zoneamento (Lei nº 16.402/2016), <b>o que não as isenta dos regramentos específicos instituídos para as ZEIS no Plano Diretor Estratégico (Lei nº 16.050/2014) e em decretos regulamentadores</b>. Ademais, tais áreas conformam perímetros de Áreas de Estruturação Local da Moradia, que integram um programa de intervenções urbanas qualificadoras do território.</p>
				<p>As Áreas de Transformação T2c apresentam os mesmos parâmetros das Áreas T2, porém com incidência de Cota-parte máxima de terreno por unidade, o que determina um número mínimo de unidades por empreendimento.</p>
				<p>Já as Áreas de Transformação T5 apresentam Coeficientes de Aproveitamento Máximo de 2 vezes a área do terreno, com gabarito estabelecido pela Lei de Zoneamento e sem incidência de Cota-parte máxima de terreno. No caso de empreendimentos mistos que atendam a cota-parte máxima de terreno por unidade, o Coeficiente de Aproveitamento Máximo poderá ser majorado para até 4 e o gabarito de altura máxima, para até 48 metros.</p>
				<Imagem :dados="{
					tipo: 'mapa',
					titulo: 'Setores de Transformação',
					url: imgSrc('arquivos/setor-central-2/mapas/setores_transformacao.png'),
					legenda: [
						{ fundo: '#7C5D29', descricao: 'Setor de Transformação 2 - T2' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/setores-transformacao_1.png'), descricao: 'Setor de Transformação 2 - T2' },
						{ fundo: '#DCC8B3', descricao: 'Setor de Transformação 5 - T5' },
						{ pontilhado: true, borda: '#000000', espessura: '1', descricao: 'Perímetro do PIU Setor Central' },
						{ fundo: '#c9e2b0', descricao: 'Parques, praças e canteiros' }
					]
				}"></Imagem>
				<h4>SETOR DE TRANSFORMAÇÃO 2 e 2C - T2 e T2C</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros das Áreas de Transformação T2 e T2C',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/t2_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/t2_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/t2_1.png'),
						legenda: 'C.A. 4'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/t2_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/t2_2.png'),
						legenda: 'Gabarito máximo: não se aplica'
					}]
				}"></AntesDepois>
				<h4>SETOR DE TRANSFORMAÇÃO 5 - T5</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros das Áreas de Transformação T5',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/t5_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/t5_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/t5_1.png'),
						legenda: 'C.A. 2 (4 para Uso Misto)'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/t5_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/t5_3.png'),
						legenda: 'Gabarito máximo: lei ordinária (48m para Uso Misto)'
					}]
				}"></AntesDepois>
				<p>Os <b>Territórios de Qualificação</b> são consolidados com densidades populacionais média e média-alta onde se pretende o fomento de atividades produtivas.</p>
				<p>O PIU Setor Central explora esse conceito e identifica especificidades dentro das áreas de Qualificação.</p>
				<p>Há territórios significativos do Patrimônio Histórico Urbano e Arquitetônico, abrangendo parcelas dos bairros de Santa Ifigênia e Campos Elíseos, classificados como <b>Territórios de Qualificação Q4, Q5, Q6 e Q7</b>, que recebem regramentos específicos para disciplinar as novas construções de forma a integrá-las aos bens preservados, segundo diretrizes trazidas pelo estudo Perímetro de Requalificação de Imóveis Tombados – PRIT<sup>1</sup>.</p>
				<p>Também merece destaque o Setor Central consolidado, principalmente nos distritos Sé e República, que necessitam de parâmetros e incentivos que respondam de maneira inovadora com alternativas para a transformação de edificações precarizadas e subutilizadas, bem como dos poucos lotes vagos ainda existentes.</p>
				<p>O <b>Território de Qualificação Q8</b> propõe um Coeficiente de Aproveitamento máximo igual a 6, cujo potencial construtivo, a partir do CA 4 até o CA máximo, só pode ser obtido mediante <i>Bônus de Potencial Construtivo Adicional</i>, gerados pela produção de HIS 1 em perímetros determinados ou pelo retrofit de edifícios voltados à HIS em todo o âmbito do projeto.</p>
				<p>O coeficiente de aproveitamento 6 e a possibilidade de pleitear análise específica de projetos com índices superiores devem permitir a reprodução do padrão construtivo que foi se consolidando na área central da cidade desde os anos 1920, representado por um número significativo das edificações existentes na área central.</p>
				<p>O zoneamento vigente enquadra os dois distritos na Zona de Centralidade, com Coeficiente de Aproveitamento Máximo igual a 2 e gabarito de altura máxima de 48 m – condições que não permitem a reprodução do padrão consolidado. A esse respeito, convém assinalar que nenhuma zona estabelecida pela Lei de Parcelamento Uso e Ocupação do Solo aprovada em 2014 oferece parâmetros compatíveis com a condição singular desse setor.</p>
				<p>Outra particularidade são as zonas produtivas de grande relevância municipal e regional do Bom Retiro, Brás e Pari. Classificadas como <b>Território de Qualificação Q2</b>, correspondentes aos perímetros das Zonas de Desenvolvimento Econômico – ZDE, têm a vocação econômica preservada e trazem incentivos específicos para o uso habitacional conjugado a usos não residenciais no pavimento térreo.</p>
				<Imagem :dados="{
					tipo: 'mapa',
					titulo: 'Setores de Qualificação',
					url: imgSrc('arquivos/setor-central-2/mapas/setores_qualificacao.png'),
					legenda: [
						{ fundo: '#f6e26d', descricao: 'Setor de qualificação 2 - Q2' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/setores-qualificacao_1.png'), descricao: 'Setor de qualificação 4 - Q4' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/setores-qualificacao_2.png'), descricao: 'Setor de qualificação 5 - Q5' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/setores-qualificacao_3.png'), descricao: 'Setor de qualificação 6 - Q6' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/setores-qualificacao_4.png'), descricao: 'Setor de qualificação 7 - Q7' },
						{ fundo: '#fd7c31', descricao: 'Setor de qualificação 8 - Q8' },
						{ pontilhado: true, borda: '#000000', espessura: '1', descricao: 'Perímetro do PIU Setor Central' },
						{ fundo: '#c9e2b0', descricao: 'Parques, praças e canteiros' }
					]
				}"></Imagem>
				<h4>SETOR DE QUALIFICAÇÃO 2 - Q2</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros das Áreas de Qualificação Q2',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/q2_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/q2_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/q2_1.png'),
						legenda: 'C.A. 2 (4 para Uso Misto)'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q2_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q2_3.png'),
						legenda: 'Gabarito máximo: 28m (48m para Uso Misto)'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q2_4.png'),
						legenda: 'Fachada ativa orbigatória'
					}]
				}"></AntesDepois>
				<h4>SETOR DE QUALIFICAÇÃO 4 - Q4</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros das Áreas de Qualificação Q4',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/q4_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/q4_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/q4_1.png'),
						legenda: 'C.A. 4'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q4_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q4_3.png'),
						legenda: 'Recuos'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q4_4.png'),
						legenda: 'Gabarito máximo 36m'
					}]
				}"></AntesDepois>
				<h4>SETOR DE QUALIFICAÇÃO 5 - Q5</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros das Áreas de Qualificação Q5',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/q5_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/q5_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/q5_1.png'),
						legenda: 'C.A. 4'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q5_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q5_3.png'),
						legenda: 'Recuos'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q5_4.png'),
						legenda: 'Recuos'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q5_5.png'),
						legenda: 'Gabarito máximo para lotes contíguos ou não contíguos a bens tombados 48m'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q5_6.png'),
						legenda: 'Gabarito máximo para acréscimo de área construída em bem tombado: dobro da altura do bem tombado'
					}]
				}"></AntesDepois>
				<h4>SETOR DE QUALIFICAÇÃO 6 - Q6</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros das Áreas de Qualificação Q6',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/q6_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/q6_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/q6_1.png'),
						legenda: 'C.A. 4'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q6_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q6_3.png'),
						legenda: 'Recuos'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q6_4.png'),
						legenda: 'Gabarito máximo 60m'
					}]
				}"></AntesDepois>
				<h4>SETOR DE QUALIFICAÇÃO 7 - Q7</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros das Áreas de Qualificação Q7',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/q7_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/q7_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/q7_1.png'),
						legenda: 'C.A. 4'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q7_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q7_3.png'),
						legenda: 'Recuos'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q7_4.png'),
						legenda: 'Recuos'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q7_5.png'),
						legenda: 'Gabarito máximo para lotes contíguos ou não a bens tombados: 60m'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q7_6.png'),
						legenda: 'Gabarito máximo para acréscimo de área construída em bem tombado: 60m'
					}]
				}"></AntesDepois>
				<h4>SETOR DE QUALIFICAÇÃO 8 - Q8</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros das Áreas de Qualificação Q8',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/q8_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/q8_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/q8_1.png'),
						legenda: 'C.A. 6'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q8_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/q8_3.png'),
						legenda: 'Gabarito máximo não se aplica'
					}]
				}"></AntesDepois>
				<p>Os <b>Territórios de Preservação</b> buscam consolidar áreas de baixas densidades construtivas, identificando conjuntos urbanos específicos, sejam esses tombados ou possuam atributos urbanísticos merecedores de preservação. Nesse setor, o projeto classifica o Morro do Pari e as Vilas Inglesas e Economizadora, relação que pode ser ampliada após a discussão pública do projeto.</p>
				<p>Os <b>Territórios de Preservação P1</b> identificam conjuntos urbanos de ocupação peculiar que, em alguns casos, não foram reconhecidos como Patrimônio Histórico, mas que apresentam características morfológicas relevantes, para os quais são atribuídos parâmetros de ocupação, que permitem a transformação, porém resguardam características intrínsecas que o projeto pretende preservar. Nesse sentido, esses territórios apresentam Coeficiente de Aproveitamento máximo 2 e gabarito de altura máxima limitado a quinze metros.</p>
				<p>Já os <b>Territórios de Preservação P2</b> consolidam a proteção de territórios indicados pelos órgãos de Preservação do Patrimônio Histórico, como a Estação da Luz e a Sala São Paulo.</p>
				<p>Os <b>Territórios de Preservação P5</b> incidem sobre uma quadra do PRIT, permitindo a transformação dos terrenos livres em consonância com o conjunto histórico existente.</p>
				<Imagem :dados="{
				 tipo: 'mapa',
				 titulo: 'Setores de Preservação',
				 url: imgSrc('arquivos/setor-central-2/mapas/setores_preservacao.png'),
				 legenda: [
				 	{ fundo: '#cfa8b3', descricao: 'Setor de preservação 1 - P1' },
				 	{ fundo: '#eadbe0', descricao: 'Setor de preservação 2 - P2' },
				 	{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/setores-preservacao_1.png'), descricao: 'Setor de preservação 5 - P5' },
				 	{ pontilhado: true, borda: '#000000', espessura: '1', descricao: 'Perímetro do PIU Setor Central' },
				 	{ fundo: '#c9e2b0', descricao: 'Parques, praças e canteiros' }
				 ]
				}"></Imagem>
				<h4>SETOR DE PRESERVAÇÃO - P1</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros das Áreas de Preservação P1',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/p1_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/p1_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/p1_1.png'),
						legenda: 'C.A. 2'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/p1_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/p1_3.png'),
						legenda: 'Gabarito máximo 15m'
					}]
				}"></AntesDepois>
				<h4>SETOR DE PRESERVAÇÃO - P5</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros das Áreas de Preservação P5',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/p5_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/p5_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/p5_1.png'),
						legenda: 'C.A. 4'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/p5_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/p5_3.png'),
						legenda: 'Recuos'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/p5_4.png'),
						legenda: 'Gabarito máximo: gabarito dos bens tombados'
					}]
				}"></AntesDepois>
				<p>Além das Áreas incidentes no projeto, foram estabelecidos Eixos que definem parâmetros e regramentos em função de logradouros específicos.</p>
				<Imagem :dados="{
					tipo: 'mapa',
					titulo: 'Eixos estratégicos',
					url: imgSrc('arquivos/setor-central-2/mapas/eixos_estrategicos.png'),
					legenda: [
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/eixos-estrategicos_1.png'), descricao: 'Eixos Estratégicos' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/eixos-estrategicos_2.png'), descricao: 'Eixos Estratégicos com faixa de indução II' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/eixos-estrategicos_3.png'), descricao: 'Eixos de Ordenamento da Paisagem 1' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/eixos-estrategicos_4.png'), descricao: 'Eixos de Ordenamento da Paisagem 2' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/eixos-estrategicos_5.png'), descricao: 'Eixos de Ordenamento da Paisagem 3' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/eixos-estrategicos_6.png'), descricao: 'Eixos de Ordenamento da Paisagem 4' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/eixos-estrategicos_7.png'), descricao: 'Eixos de Transformação' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/eixos-estrategicos_8.png'), descricao: 'Eixos de Transformação da Orla Fluvial' },
						{ simbolo: imgSrc('arquivos/setor-central-2/mapas/legendas/eixos-estrategicos_9.png'), descricao: 'Eixos de Transformação Elev. Pres. João Goulart' },
					 	{ pontilhado: true, borda: '#000000', espessura: '1', descricao: 'Perímetro do PIU Setor Central' },
					 	{ fundo: '#c9e2b0', descricao: 'Parques, praças e canteiros' }
					]
				}"></Imagem>
				<p>Os Eixos Estratégicos configuram logradouros que, por seu papel na dinâmica da região, receberão incentivo à instalação ou manutenção de usos não residenciais no térreo, relacionado à promoção de fachada ativa. Em associação com instrumentos de requalificação dos espaços públicos, como os Caminhos Verdes e o alargamento ou melhoria dos passeios públicos, tal incentivo visa a fortalecer a função desses logradouros de conectar usos residenciais, elementos de referência dos bairros, usos comerciais existentes e a rede de transporte público coletivo, conformando uma malha de percursos qualificados para a mobilidade ativa. Quando integrantes das AEL da Moradia, podem dar suporte ao adensamento populacional, com o estímulo ao uso misto, que possibilita a instalação de atividades não residenciais necessários à vizinhança residencial.</p>
				<h4>EIXOS ESTRATÉGICOS</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros dos Eixos Estratégicos',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/eixo-estrategico_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/eixo-estrategico_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-estrategico_1.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-estrategico_2.png'),
						legenda: 'Recuos: doação de calçada ou fruição pública conforme quadro de parâmetros'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-estrategico_3.png'),
						legenda: 'Gabarito máximo para Eixo Estratégico: parâmetro da área'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-estrategico_4.png'),
						legenda: 'Gabarito máximo para Eixo Estratégico com Faixa de Indução II'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-estrategico_5.png'),
						legenda: 'Fachada ativa obrigatória'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-estrategico_6.png'),
						legenda: 'Lote mínimo: 1000m²'
					}]
				}"></AntesDepois>
				<p>Os Eixos de Ordenamento da Paisagem têm por objetivo estabelecer parâmetros e regulações específicos no perímetro do PRIT, possibilitando o adensamento construtivo em consonância com a preservação da ambiência de conjuntos históricos e tombados.</p>
				<h4>EIXOS DE ORDENAMENTO DA PAISAGEM 1</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros do Eixo de Ordenamento da Paisagem 1',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-1_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-1_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-1_1.png'),
						legenda: 'C.A. 4'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-1_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-1_3.png'),
						legenda: 'Recuos'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-1_4.png'),
						legenda: 'Recuos'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-1_5.png'),
						legenda: 'Gabarito máximo para lotes contíguos ou não a bens tombados: 60m'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-1_6.png'),
						legenda: 'Gabarito máximo para acréscimo de área construída em bem tombado: 60m'
					}]
				}"></AntesDepois>
				<h4>EIXOS DE ORDENAMENTO DA PAISAGEM 2</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros do Eixo de Ordenamento da Paisagem 2',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-2_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-2_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-2_1.png'),
						legenda: 'C.A. 4'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-2_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-2_3.png'),
						legenda: 'Recuos'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-2_4.png'),
						legenda: 'Gabarito máximo: 48m'
					}]
				}"></AntesDepois>
				<h4>EIXOS DE ORDENAMENTO DA PAISAGEM 3</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros do Eixo de Ordenamento da Paisagem 3',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-3_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-3_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-3_1.png'),
						legenda: 'C.A. 4'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-3_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-3_3.png'),
						legenda: 'Recuos'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-3_4.png'),
						legenda: 'Gabarito máximo: 48m'
					}]
				}"></AntesDepois>
				<h4>EIXOS DE ORDENAMENTO DA PAISAGEM 4</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros do Eixo de Ordenamento da Paisagem 4',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-4_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-4_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-4_1.png'),
						legenda: 'C.A. 4'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-4_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-4_3.png'),
						legenda: 'Recuos'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-ordena-paisa-4_4.png'),
						legenda: 'Gabarito máximo'
					}]
				}"></AntesDepois>
				<p>Os Eixos de Transformação são compostos pela Av. Alcântara Machado, Av. Prestes Maia, Radial Leste-Oeste – entre a Praça Roosevelt e o Viaduto Jaceguai e Rua Mauá – no trecho entre a Av. Prestes Maia e a Rua da Cantareira. Estabelecem obrigatoriedade de utilização de parâmetros qualificadores – fachada ativa, fruição pública e recuos especiais, bonificados com potencial construtivo adicional, além de incentivo ao remembramento de lotes, na forma de desconto no pagamento da outorga onerosa do direito de construir. Os Eixos de Transformação são oriundos dos Eixos de Qualificação do Projeto de Lei 723/2015, que institui a Operação Urbana Consorciada Bairros do Tamanduateí, e delineiam parâmetros incentivadores e qualificadores da transformação em áreas de alta obsolescência e depreciação territorial, localizadas principalmente junto às vias estruturais. São divididos em Eixos de Transformação e Eixos de Transformação da Orla Fluvial.</p>
				<h4>EIXOS DE TRANSFORMAÇÃO</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros dos Eixos de Transformação',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf_1.png'),
						legenda: 'C.A. 4'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf_3.png'),
						legenda: 'Gabarito máximo: não se aplica'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf_4.png'),
						legenda: 'Recuos: doação de calçada conforme quadro de parâmetros'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf_4.png'),
						legenda: 'Fachada ativa obrigatória'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf_4.png'),
						legenda: 'Lote mínimo: Quadro de parâmetros'
					}]
				}"></AntesDepois>
				<p>Para os Eixos de Transformação da Orla Fluvial – Av. do Estado e da Marginal Tietê são estabelecidos os mesmos incentivos e obrigatoriedades dos Eixos de Transformação (obrigatoriedade de utilização de parâmetros qualificadores – fachada ativa, fruição e recuos especiais, bonificados com potencial construtivo adicional, e incentivo ao remembramento de lotes, na forma de desconto no pagamento da outorga onerosa do direito de construir), havendo, ainda, incentivo para a conformação de áreas de fruição pública nas parcelas de APP contidas nos lotes e aos usos de lazer e entretenimento, educacionais e culturais, na forma de descontos ou isenções de pagamento de outorga onerosa do direito de construir. Os Eixos de Transformação são oriundos dos Eixos de Qualificação do Projeto de Lei da Operação Urbana Bairros do Tamanduateí e delineiam parâmetros incentivadores e qualificadores da transformação em áreas de alta obsolescência e depreciação territorial, localizadas principalmente junto às vias estruturais. São divididos em Eixos de Transformação e Eixos de Transformação da Orla Fluvial.</p>
				<h4>EIXOS DE TRANSFORMAÇÃO DA ORLA FLUVIAL</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros dos Eixos de Transformação da Orla',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-orla_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-orla_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-orla_1.png'),
						legenda: 'C.A. 4'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-orla_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-orla_3.png'),
						legenda: 'Gabarito máximo: não se aplica'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-orla_4.png'),
						legenda: 'Recuos: doação de calçada conforme quadro de parâmetros; observar APP'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-orla_5.png'),
						legenda: 'Fachada ativa obrigatória na Av. do Estado'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-orla_6.png'),
						legenda: 'Lote mínimo 1000m²'
					}]
				}"></AntesDepois>
				<p>A desativação gradativa do Elevado Presidente João Goulart e sua demolição ou transformação, parcial ou integral, em parque foi determinada pelo Plano Diretor Estratégico (Lei nº 16.050/2014, Art. 375, Parágrafo Único). Nesse sentido, no início de 2018, foi criado o Parque Municipal do Minhocão, pela Lei nº 16.833/2018, estabelecendo, entre outras disposições, a elaboração de Projeto de Intervenção Urbana (PIU) que transforme o Elevado parcial ou integralmente em parque.</p>
				<h4>EIXOS DE TRANSFORMAÇÃO - PARQUE MINHOCÃO</h4>
				<AntesDepois :dados="{
					caption: 'Parâmetros dos Eixos de Transformação Elevado Pres. João Goulart',
					largura: '700',
					altura: '500',
					imgAntes: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-minhocao_antes.png'),
					imgDepois: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-minhocao_depois.png'),
					pictogramas: [{
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-minhocao_1.png'),
						legenda: 'C.A. 6'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-minhocao_2.png'),
						legenda: 'T.O. 80%'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-minhocao_3.png'),
						legenda: 'Recuos: fruição pública conforme quadro de parâmetros'
					}, {
						url: imgSrc('arquivos/setor-central-2/antes-depois/eixo-transf-minhocao_4.png'),
						legenda: 'Fachada ativa incentivada'
					}]
				}"></AntesDepois>
				<ol class="notas">
					<caption>Notas</caption>
					<li>O Perímetro Requalificação de Imóveis Tombados – PRIT corresponde a uma área delimitada dos bairros de Santa Ifigênia e Campos Elíseos com regramento e projeto urbanísticos específicos voltados à qualificação de áreas de concentração de bens tombados.</li>
				</ol>
			</section>
		</section>
		<section>
			<h2 class="titulo" indent="1">Instrumentos de implantação do PIU Setor Central</h2>
			<p>O PROJETO DE INTERVENÇÃO URBANA DO SETOR CENTRAL define as diretrizes de transformação do espaço público e regramentos urbanísticos e incentivos para a transformação dos lotes privados contidos na parcela da Macroárea de Estruturação Metropolitana que abrange a Subprefeitura da Sé e trechos de distritos da Subprefeitura da Mooca.</p>
			<p>Para a sua implantação, é proposta a utilização de três instrumentos de ordenamento e reestruturação urbana previstos no PDE:</p>
			<ol class="decimais">
				<li>a OPERAÇÃO URBANA, abrangendo os distritos Sé e República, com revisões e atualizações necessárias;</li>
				<li>a AIU SETOR CENTRAL, nos demais distritos do PIU;</li>
				<li>as ÁREAS DE ESTRUTURAÇÃO LOCAL, delimitadas em torno do Terminal Princesa Isabel e dos perímetros de ZEIS.</li>
			</ol>

			<p class="img">mapas diagramaticos X3 – X6</p>

			<section>
				<h3 class="titulo" indent="2">Operação Urbana Centro</h3>
				<p>A Operação Urbana Centro será mantida como instrumento de implantação do PIU Setor Central nos distritos Sé e República, com as seguintes características:</p>
				<ol class="decimais">
					<li>Perímetro: o perímetro aprovado pela Lei Municipal nº 12.349/1997 será alterado, recuperando a abrangência proposta nos estudos técnicos da Operação Urbana Centro à época de sua formulação, nos anos 1990<sup>1</sup>.</li>
					<li>
						Análise das propostas:
						<ol class="minusculas">
							<li>A singularidade dos distritos Sé e República, relativamente ao estoque edificado, continua a demandar um modo específico de análise e intervenção nesses territórios. Essa região que abarca o centro histórico da cidade foi conformada em sucessivos períodos de vigência de formas anteriores de regulação urbanística, de forma que a inserção satisfatória de novas construções nesse contexto edificado exige a manutenção de grupos de análise específica de projetos específicos.</li>
							<li>A análise caso a caso poderá ser dispensada caso sejam utilizados, nos empreendimentos propostos no âmbito dos distritos Sé e República, os índices constantes do quadro <i>Parâmetros de Ocupação</i> estabelecido para o PIU Setor Central.</li>
							<li>Serão encaminhadas à Câmara Técnica de Legislação Urbanística - CTLU as solicitações que ultrapassarem os índices constantes do quadro <i>Parâmetros de Ocupação</i> estabelecido para o PIU Setor Central.</li>
						</ol>
					</li>
					<li>Grupo Gestor: será alterada a composição e a forma de indicação dos representantes da Comissão Executiva da Operação Urbana Centro, garantindo-se a composição paritária de agentes públicos e privados que possam contribuir com os objetivos do projeto e a participação de moradores e trabalhadores na escolha de associações e entidades participantes e seus representantes.</li>
					<li>Cálculo das contrapartidas: Terá como base o valor do m² do terreno constante do Cadastro de Valor de Terreno para fins de Outorga Onerosa.</li>
					<li>
						Transferência de Potencial Construtivo de Imóveis Tombados: Prevista no Artigo 7º da lei 12.349/97 e específica para o perímetro da Operação Urbana Centro, será desdobrada em dois benefícios:
						<ol class="minusculas">
							<li>Transferência do Direito de Construir – TDC, prevista no PDE mas com fator de incentivo majorado, considerada a relevância do patrimônio tombado do centro histórico, passível de ser aplicada no âmbito do município e sujeita à cota anual autorizada para a TDC, em valor pecuniário, de 5% do valor total arrecadado no FUNDURB</li>
							<li>Bônus Equivalente de Potencial Construtivo – concedido proporcionalmente à área edificada do bem tombado, a ser utilizado na área de abrangência do PIU SETOR CENTRAL.</li>
						</ol>
					</li>
				</ol>
				<ol class="notas">
					<caption>Notas</caption>
					<li>O acréscimo do distrito do Brás ao perímetro da Operação Urbana Centro deu-se por decisão do Executivo à época, contemplando a possibilidade de recursos captados nos distritos centrais financiarem a requalificação de ruas comerciais do Brás.</li>
				</ol>
			</section>
			<section>
				<h3 class="titulo" indent="2">AIU Setor Central</h3>
				<p>A parcela do PIU SETOR CENTRAL que envolve os distritos compreendidos na Operação Urbana Centro já revista corresponderá à <i>Área de Intervenção Urbana Setor Central</i>, instrumento que caracteriza “porções de território definidas em lei destinadas à reestruturação, transformação, recuperação e melhoria ambiental com efeitos positivos na qualidade de vida, no atendimento às necessidades sociais, na efetivação de direitos sociais e na promoção do desenvolvimento econômico, previstas no Projeto de Intervenção Urbanística elaborado para a área” (Art. 145, do PDE).</p>
				<p>A AIU SETOR CENTRAL compartilha com a Operação Urbana Centro objetivos, diretrizes, programa de intervenções, regramento urbanístico, estratégias e incentivos estabelecidos no PIU Setor Central, bem como a gestão dos recursos captados nesse âmbito.</p>
				<p>Será coordenada por um Conselho Gestor específico paritário, formado por representantes do Poder Público e da sociedade civil, garantindo-se o controle social na implantação do Programa de Intervenções do PIU SETOR CENTRAL.</p>
			</section>
			<section>
				<h3 class="titulo" indent="2">AEL da Moradia</h3>
				<p>Como estabelece o PDE, Áreas de Estruturação Local - AEL são áreas destinadas à transformação urbana mediante a integração de políticas públicas setoriais, destinadas ao desenvolvimento urbano especialmente nas áreas de maior vulnerabilidade social e ambiental.</p>
				<div class="card-pde">
					<div class="title">Áreas de Estruturação Local (AEL)</div>
					<p>Porções do território destinadas à transformação local e associadas à Rede de Estruturação da Transformação Urbana.</p>
					<ul>
						<li>Desenvolvimento urbano, especialmente nas áreas de maior vulnerabilidade</li>
						<li>Fortalecimento das centralidades locais</li>
						<li>Integração com transporte coletivo</li>
						<li>Ampliação de áreas verdes</li>
						<li>Oferta de HIS e regularização fundiária</li>
						<li>Oferta de equipamentos urbanos e sociais</li>
					</ul>
					<div class="iconCont">
						<div class="icone horizontal">
							<img :src="imgSrc('arquivos/arco-pinheiros-2/cards-pde/ael-1.png')" alt="">
							<div>Conforme diretrizes estabelecidas nos <b>Planos Regionais das Subprefeituras</b></div>
						</div>
					</div>
					<img :src="imgSrc('arquivos/arco-pinheiros-2/cards-pde/ael-ilust.png')" alt="">
				</div>
				<p>No âmbito do PIU Setor Central esse instrumento será aplicado em vizinhanças habitacionais vinculadas às ZEIS existentes e ao Terminal Princesa Isabel, com o objetivo de garantir que a provisão pública de habitações de interesse social, financiada com recursos gerados ou não pelo PIU Setor Central, venha acompanhada de qualificação urbanística do entorno e da convergência das ações das secretarias municipais.</p>
				<p>O PDE estabelece que o projeto de intervenção em ZEIS 3 pode ser elaborado como uma AEL (Art. 52, § 1º) e que os mecanismos de gestão e participação da AEL devem ser articulados aos Conselhos Gestores de ZEIS e instâncias de representação vinculadas às subprefeituras.</p>
				<p>A intervenção em AEL específica será priorizada por deliberação do Grupo Gestor da AIU SETOR CENTRAL ou Comissão Executiva da OPERAÇÃO URBANA CENTRO. Previamente ao desenvolvimento do <i>Projeto de Intervenção</i>, caberá à SEHAB a constituição do Conselho Gestor da ZEIS 3 em questão.</p>
				<p>As AEL DA MORADIA definidas poderão ser reavaliadas, com alteração de seu perímetro inicial. Os recursos a serem utilizados para a implantação das ações serão oriundos da conta segregada da AIU SETOR CENTRAL ou OPERAÇÃO URBANA CENTRO, que serão autorizados pelos respecticos Grupos Gestores.</p>
				<p>Os instrumentos elencados vão operar de forma complementar e combinada, compartilhando Estratégias e Modelos de Gestão Financeira e de Gestão Participativa detalhados a seguir.</p>
				<Imagem :dados="{
					tipo: 'mapa',
					titulo: 'Áreas de estruturação local da moradia',
					url: imgSrc('arquivos/setor-central-2/mapas/aels.jpg'),
					legenda: [
						{ fundo: 'rgba(255, 225, 0, 0.4)', descricao: 'AEL' },
						{ borda: '#D14000', linha: true, descricao: 'Eixos estratégicos' }
					]
				}">
					<template slot="extra"></template>
				</Imagem>
				<Galeria :gallery_attrs="galeria02"></Galeria>
			</section>
		</section>
		<section>
			<h2 class="titulo" indent="1">Estratégias</h2>
			<p>O PIU SETOR CENTRAL abrange um território de 2.089 ha, expandindo a área identificada como centro metropolitano.</p>
			<p>A parcela de 1.483 ha contida no Subsetor Arco Tietê do Setor Orla Ferroviária e Fluvial integra-se aos 606 ha do Setor Central da Macroárea de Estruturação Metropolitana, compartilhando os objetivos gerais do ordenamento urbanístico, trazidos no Plano Diretor Estratégico do Município de São Paulo, Lei Municipal nº 16.050/2014.</p>
			<p>Para que sejam atingidos esses objetivos, a São Paulo Urbanismo introduz <i>estratégias de implantação</i> do PIU Setor Central, detalhadas a seguir.</p>
			<section>
				<h3 class="titulo" indent="2">Perímetro de requalificação de imóveis tombados - PRIT</h3>
				<p>O Perímetro de Requalificação de Imóveis Tombados (PRIT) é resultado da articulação de preexistências peculiares à região dos Campos Elíseos, Santa Ifigênia e Rua Florêncio de Abreu, especialmente no âmbito dos processos de preservação do patrimônio histórico edificado e de sua ambiência. No PRIT, observa-se uma alta incidência de imóveis tombados ou em processos de tombamento, ocupação do solo relativamente densa e, ao mesmo tempo, densidade construída relativamente baixa. Soma-se a esses fatores a convivência entre intensa atividade comercial, em muitos casos especializada, e a demanda por moradia de qualidade. Dessa forma, o território do PRIT apresenta oportunidades de transformação apoiadas na regulação da paisagem e na preservação do patrimônio e, por isso, foi objeto de proposta de regramento urbanístico específico, com o objetivo de permitir o adensamento construtivo em consonância com a ambiência dos bens tombados.</p>				
				<ul class="links">
					<li>
						<a href="">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Nota Técnica - PRIT</div>
							<span>XXX Mb</span>
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h3 class="titulo" indent="2">Bônus equivalente</h3>
				<p>O POTENCIAL CONSTRUTIVO ADICIONAL – PCA é o principal ativo utilizado pela Municipalidade para a geração dos recursos que vão financiar as intervenções públicas do PIU Setor Central.</p>
				<p>Os estudos econômicos que subsidiam o PIU Setor Central quantificaram uma <i>demanda provável</i> de Potencial Construtivo Adicional nessa região, a partir de análises do mercado imobiliário nos últimos anos.</p>
				<p>Uma parcela desse potencial será disponibilizada através de BÔNUS EQUIVALENTES, concedidos para fomento da PRODUÇÃO DE HIS 1, do RETROFIT DE EDIFICAÇÕES e da PRESERVAÇÃO DE EDIFICAÇÕES TOMBADAS.</p>
				<p>Os Bônus serão disponibilizados na forma de uma <i>Declaração de Potencial Construtivo Adicional</i> que poderá ser convertida em uma ou mais Certidões de Potencial Construtivo Adicional.</p>
				<p>A Certidão de Potencial Construtivo Adicional decorrente do BÔNUS EQUIVALENTE poderá ser vinculada a lotes compreendidos na área de abrangência do PIU SETOR CENTRAL, sendo que em lotes compreendidos em setores específicos o coeficiente de aproveitamento máximo só poderá ser atingido mediante a utilização dessa certidão específica.</p>
				<p>O POTENCIAL CONSTRUTIVO DECLARADO será convertido em POTENCIAL CONSTRUTIVO EQUIVALENTE, considerados os valores de terreno do empreendimento gerador do bônus e do empreendimento receptor, fixados no Cadastro de Valor de Terreno para fins de Outorga Onerosa, divulgado pela Secretaria Municipal de Desenvolvimento Urbano – SMDU.</p>
				<p>Os adquirentes receberão a CERTIDÃO DE POTENCIAL CONSTRUTIVO VINCULADO A LOTE, que será utilizada para aprovação de projetos na Secretaria Municipal de Licenciamento - SEL.</p>
				<p>As Declarações e Certidões decorrentes da concessão de Bônus Equivalentes serão emitidas pela SP-URBANISMO, que manterá em seus arquivos o controle dos documentos e o acompanhamento das emissões de Certidões relativas a este Potencial Adicional de Construção.</p>
				<h4>Bonificação para construção de HIS 1</h4>
				<p>Será outorgado um bônus proporcional à área construída destinada a HIS 1, como subsídio do PIU SETOR CENTRAL à provisão habitacional destinada a faixa de renda de até 3 SM, nas Áreas de Estruturação Local da Moradia, assinaladas no mapa específico.</p>
				<p>Mediante a assinatura de Termo de Compromisso, garantido pelo imóvel objeto de incorporação, o empreendedor receberá da Municipalidade uma Declaração de Potencial Construtivo Adicional que poderá ser negociada, em partes ou no seu todo, para incremento do potencial construtivo básico de empreendimentos compreendidos na área de abrangência do PIU SETOR CENTRAL.</p>
				<Imagem :dados="{
					tipo: 'default',
					url: imgSrc('arquivos/setor-central-2/img/image2.jpeg')
				}"></Imagem>
				<h4>Bonificação edifícios tombados</h4>
				<p>Em complementação ao incentivo da Transferência do Direito de Construir - TDC, prevista no PDE, os imóveis enquadrados como ZEPEC-BIR localizados no âmbito do PIU SETOR CENTRAL, cuja edificação tombada tenha área superior a duas vezes a área do terreno, receberão uma bonificação em Potencial Construtivo Adicional proporcional à área sujeita à preservação.</p>
				<p>O Potencial Construtivo Adicional constante na Declaração de Bônus Equivalente dos imóveis tombados poderá ser aplicado apenas no território de transformação do PIU SETOR CENTRAL, não estando submetido à limitação de 5% do FUNDURB.</p>
				<Imagem :dados="{
					tipo: 'default',
					url: imgSrc('arquivos/setor-central-2/img/image3.jpeg')
				}"></Imagem>
				<h4>Bonificação para Requalificação de edifícios destinados a HIS</h4>
				<p>Empreendimentos de requalificação de edifícios existentes, destinados à habitação de interesse social, também são elegíveis ao subsídio do BÔNUS EQUIVALENTE.</p>
				<p>A taxa de bonificação é inferior à taxa aplicada à provisão em HIS 1, uma vez que a comercialização das unidades produzidas não está restrita aos adquirentes enquadrados na faixa 1 de rendimentos.</p>
				<Imagem :dados="{
					tipo: 'default',
					url: imgSrc('arquivos/setor-central-2/img/image4.jpeg')
				}"></Imagem>
			</section>
			<section>
				<h3 class="titulo" indent="2">Parcelamento, Edificação e Urbanização Compulsórios - PEUC</h3>
				<p>A gestão dos instrumentos indutores da função social da propriedade compete à Coordenadoria de Controle da Função Social da Propriedade da Secretaria Municipal de Desenvolvimento Urbano – CEPEUC/SMDU.</p>
				<p>O avanço dos trabalhos da CEPEUC, conforme programação disponibilizada na página <i>Função Social</i> da SMDU, cria um vetor de indução ao aproveitamento de imóveis ociosos e subutilizados que é potencializado pelo conjunto de incentivos e estratégias propostos no PIU SETOR CENTRAL.</p>
			</section>
			<section>
				<h3 class="titulo" indent="2">TDC incentivada</h3>
				<p>Para favorecer a preservação de bens imóveis representativos, ZEPEC-BIR no âmbito do PIU SETOR CENTRAL e considerando a revisão da Lei Municipal nº 12.349/1997 que instituiu a Operação Urbana Centro, a TRANSFERÊNCIA DO DIREITO DE CONSTRUIR, prevista nos Artigos 122 a 133 do PDE, passa a vigorar com um fator de incentivo adicional: o FATOR DE CENTRO HISTÓRICO, a ser definido pelo Departamento do Patrimônio Histórico da Secretaria Municipal de Cultura – DPH/SMC.</p>
				<p>A relevância e a concentração de bens imóveis representativos, associados aos diversos vetores de estruturação da cidade – ocupação territorial, impulso cafeeiro, industrialização – justifica a majoração do potencial construtivo passível de transferência nos distritos centrais, benefício que será estendido aos imóveis tombados compreendidos nas áreas envoltórias relacionadas no Artigo 2º da Resolução CONPRESP nº 22/2002, que trata do tombamento no Bairro da Bela Vista.</p>
				<p>Desta forma, para o cálculo da Transferência do Direito de Construir de imóveis tombados contidos na área do PIU SETOR CENTRAL e nas áreas envoltórias da Resolução citada, deverá ser utilizada a seguinte fórmula:</p>
				<pre class="formula">PC<sub>pt</sub> = A<sub>tc</sub> × CA<sub>bas</sub> × F<sub>i</sub> × F<sub>CH</sub></pre>
				<p>Onde <pre class="formula declara">PC<sub>pt</sub></pre> é o Potencial Construtivo passível de transferência, <pre class="formula declara">A<sub>tc</sub></pre> é a Área do terreno do imóvel tombado, <pre class="formula declara">F<sub>i</sub></pre> é o Fator de incentivo, conforme Art. 24 da LPUOS<sup>1</sup>, <pre class="formula declara">F<sub>CH</sub></pre> é o Fator Centro Histórico, a ser definido pelo DPH/SMC.</p>
				<p>O Potencial Construtivo Adicional originado pela TDC poderá ser transferido para qualquer imóvel no Município de São Paulo, nas mesmas condições existentes na TDC geral.</p>
				<p>A Declaração de Potencial Construtivo Passível de Transferência deverá ser emitida por SMDU, que manterá seu controle e emitirá as respectivas Certidões de Potencial Construtivo Transferido e Declarações de Saldo de PCpt., atendendo à limitação do §5º do artigo 24 da LPUOS, de 5% do valor arrecadado pelo FUNDURB.</p>
				<p>No caso de imóveis receptores se localizarem na área de abrangência do PIU SETOR CENTRAL, não haverá incidência dessa restrição.</p>
				<ol class="notas">
					<caption>Notas</caption>
					<li>
						“Art. 24. Na emissão de novas declarações de potencial construtivo passível de transferência de imóveis enquadrados como ZEPEC, nos termos do art. 125 da Lei nº 16.050, de 31 de julho de 2014 – PDE, serão aplicados os seguintes Fatores de Incentivo (F<sub>i</sub>):<br>
						<ol class="romanos">
							<li>1,2 para imóveis com área de lote de até 500m²;</li>
							<li>1,0 para imóveis com área de lote superior a 500m²  até 2.000m² ;</li>
							<li>0,9 para imóveis com área de lote superior a 2.000m² até 5.000m²;</li>
							<li>0,7 para imóveis com área de lote superior a 5.000m² até 10.000m²;</li>
							<li>0,5 para imóveis com área de lote superior a 10.000m² até 20.000m²;</li>
							<li>0,2 para imóveis com área de lote superior a 20.000m² até 50.000m²;</li>
							<li>0,1 para imóveis com área de lote superior a 50.000m²).”</li>
						</ol>
					</li>
				</ol>
			</section>
			<section>
				<h3 class="titulo" indent="2">Incentivos diretos</h3>
				<p>Além das disposições trazidas pela LPUOS, o PIU SETOR CENTRAL propõe incentivos específicos, a serem aplicados de forma diferenciada no território, de forma a viabilizar as transformações desejadas no projeto urbano. Alguns desses incentivos, trazidos da Operação Urbana Centro, terão sua eficácia testada na AIU SETOR CENTRAL.</p>
					<h4>Regularização onerosa de construções</h4>
					<p>Os proprietários de imóveis contidos na área de abrangência da OPERAÇÃO URBANA CENTRO e da AIU SETOR CENTRAL poderão apresentar propostas relativas a regularização de construções, reformas ou ampliações executadas em desacordo com a legislação vigente, mediante pagamento de contrapartida financeira e anuência da Secretaria Municipal de Licenciamento.</p>
					<h4>Retrofit sem alteração de volumetria de edificações existentes</h4>
					<p>A alteração de áreas computáveis no interior de edificações existentes não será considerada para fins de aprovação de projetos de reforma.</p>
					<p>Os projetos de reforma de edificações existentes e regulares não estarão sujeitos aos coeficientes de aproveitamento máximos incidentes sobre o imóvel, independentemente da destinação, desde que mantida a volumetria original da edificação.</p>
					<h4>Áreas destinadas a educação e cultura</h4>
					<p>O incentivo vigente será mantido no âmbito da Operação Urbana Centro revisada e estendido às orlas fluviais dos rios Tietê e Tamanduateí.</p>
					<p>Não serão computadas no cálculo do coeficiente de aproveitamento do terreno, mesmo que conjugadas a outros usos, as áreas destinadas a:</p>
					<ul>
						<li>Salões de Eventos de uso público;</li>
						<li>Cinemas, Teatros e Salas de Espetáculos;</li>
						<li>Auditórios para Convenções, Congressos e Conferências;</li>
						<li>Museus, Galerias e Salas de Exposições;</li>
						<li>Atividades educacionais e culturais em geral.</li>
					</ul>
					<h4>Remembramento de lotes</h4>
					<p>O incentivo ao remembramento de lotes , nos moldes estabelecidos na Lei Municipal nº 12.349/1997, será mantido na Operação Urbana Centro revisada. Nas orlas fluviais será adotado um incentivo ao remembramento específico, com o objetivo de favorecer a transformação dessas faixas e, em decorrência, promover a recuperação das Áreas de Preservação Permanente dos rios Tietê e Tamanduateí.</p>
					<h5>Remembramento de lotes na Operação Urbana Centro</h5>
					<p>Os empreendimentos formados pelo remembramento de 3 ou mais lotes e que atinjam o mínimo de 1.000m², terão direito a uma área construída adicional, livre de contrapartida, correspondente a 10% da área do terreno resultante por lote remembrado até o limite máximo de 100%.</p>
					<Imagem :dados="{
						tipo: 'default',
						url: imgSrc('arquivos/setor-central-2/img/incentivo-remembramento.png')
					}"></Imagem>
					<h5>Remembramento de lotes no Setor Orla Fluvial da AIU SETOR CENTRAL – Incentivo de Qualificação da Orla Fluvial</h5>
					<p>Será concedido um incentivo, na forma de desconto no Potencial Construtivo Adicional utilizado em empreendimentos lindeiros às orlas fluviais, proporcional à extensão da testada incorporada.</p>
					<pre class="formula">IOF = T × P × (CA<sub>max</sub> – CA<sub>bas</sub> + F<sub>i</sub>)</pre>
					<p>Onde <pre class="formula declara">IOF</pre> é o incentivo de orla fluvial, em m²; <pre class="formula declara">T</pre> é a testada do lote; <pre class="formula declara">P</pre> é a profundidade da faixa de APP e <pre class="formula declara">F<sub>i</sub></pre> é o fator de incentivo, sendo:</p>
					<Tabela :dados="{
						colunas: [
							{ titulo: 'T/P' },
							{ titulo: 'Fator de incentivo' }
						],
						linhas: [
							[
								[ { data: 'menor que 0,8', centro: true } ],
								[ { data: '0', centro: true } ]
							],
							[
								[ { data: 'de 0,8 até 1,5', centro: true } ],
								[ { data: '1', centro: true } ]
							],
							[
								[ { data: 'maior que 1,5', centro: true } ],
								[ { data: '1,5', centro: true } ]
							]
						]
					}"></Tabela>
					<Imagem :dados="{
						tipo: 'default',
						url: imgSrc('arquivos/setor-central-2/img/image6.jpg')
					}"></Imagem>
					<h4>Reconstrução</h4>
					<p>Fica garantido ao proprietário de edificação regular existente no âmbito do PIU Setor Central que venha a ser demolida para a implantação de uma nova construção, de uso misto com predominância residencial e fachada ativa, o direito de utilização dos parâmetros de uso e ocupação do solo do edifício demolido, inclusive recuos e alinhamento, caso discrepantes dos fixados na LPUOS.</p>
			</section>
			<section>
				<h3 class="titulo" indent="2">Chamamento público</h3>
				<p>Para o aproveitamento e transformação de terrenos públicos subutilizados no âmbito do PIU SETOR CENTRAL serão realizados CHAMAMENTOS PÚBLICOS para o recebimento de propostas de empreendedores privados, elaboradas em conformidade com um Programa de Interesse Público específico.</p>
				<p>A modalidade de CHAMAMENTO PÚBLICO será utilizada:</p>
				<ul>
					<li>para o aproveitamento de glebas públicas, sujeitas a diretrizes de intervenção abrangentes que configuram os PROJETOS ESTRATÉGICOS explanados no item seguinte;</li>
					<li>para o aproveitamento de terrenos públicos não sujeitos a parcelamento, e destinados à constituição de um PARQUE PÚBLICO DE HABITAÇÕES DE INTERESSE SOCIAL.</li>
				</ul>
				<p>O empreendedor que ofertar à Municipalidade o maior valor de contrapartida – em termos de número de HIS, equipamentos públicos, áreas verdes, melhoramentos e benfeitorias – e que atenda às exigências mínimas constantes de cada Edital de Chamamento, ganhará o direito de explorar e comercializar as demais áreas edificadas nesses terrenos.</p>
				<p>O PARQUE PÚBLICO DE HIS será utilizado para os programas públicos de atendimento habitacional das Secretarias Municipais de Habitação, Assistência e Desenvolvimento Social e Direitos Humanos e Cidadania.</p>
			</section>
			<section>
				<h3 class="titulo" indent="2">Projetos Estratégicos</h3>
				<p>PROJETOS ESTRATÉGICOS são intervenções às quais se atribui um potencial indutor de transformações em seu entorno imediato.</p>
				<p>Concentração de imóveis vagos ou subutilizados, áreas públicas em processo de transformação, vizinhanças fisicamente degradadas, potencialidades de aproveitamento inexploradas são situações que justificam a inclusão dessas áreas no rol dos Projetos Estratégicos.</p>
				<p>Ao norte do perímetro do PIU Setor Central há uma concentração de áreas públicas de grandes dimensões e subutilizadas cuja transformação potencializa a transformação de áreas privadas ao longo do Apoio Urbano Sul.</p>
				<p>Cada uma dessas áreas configura um PROJETO ESTRATÉGICO, vinculado a um Plano de Parcelamento e um Programa de Interesse Público, com proposta de provisão de moradias de interesse social e equipamentos públicos, criação de áreas verdes e qualificação de espaços públicos. São eles:</p>
				<ul>
					<li>
						<h4>PE DETRAN</h4>
						<p>O projeto tem como objetivo otimizar o uso de terras públicas que hoje abrigam serviços públicos como a sede administrativa do Departamento Estadual de Transito – Detran – e Estação de Transbordo. Ampliando as frentes de lotes que se abrem para o Rio Tamanduateí e para o novo Parque, espera-se que novos usos, como escritórios, hotéis e outros, se instalem no local, tirando partido da proximidade com o Anhembi, Campo de Marte e Terminal Rodoviário Tietê. Faixas da Área de Preservação Permanente – APP do Tamanduateí serão destinadas para a criação de praças que valorizem os equipamentos públicos e usos residenciais.</p>
						<p class="img">antes depois</p>						
					</li>
					<li>
						<h4>PE CANINDÉ/PORTUGUESA</h4>
						<p>Com a complementação do viário que compõe o Apoio Urbano Sul, previsto na Lei nº 16.541/2016, uma nova frente urbana passa a dar acesso a áreas municipais subutilizadas do Canindé. O projeto específico previsto para esta área propiciará a reorganização das terras públicas e privadas, podendo abranger ou não a manutenção do estádio de futebol, a depender do plano urbanístico a ser elaborado, além de contemplar a implantação de travessia qualificada para pedestres e ciclistas sobre o Rio Tietê, conectada por meio de áreas verdes ou calçadas. Pretende-se, ainda, a desocupação e a requalificação da APP do Rio Tietê, que voltará a integrar o Sistema de Áreas Protegidas, Áreas Verdes e Espaços Livres da cidade, auxiliando na melhoria da drenagem e do microclima urbano e compondo o corredor ambiental. Serão, ainda, observadas as diretrizes apontadas pelo Art. 169 da Lei nº 16.402/2016 , que trata da ZOE do Canindé, a saber possibilidade de coeficiente de aproveitamento máximo superior ao estabelecido pelo Quadro 2A da Lei nº 16.050/2014 (Plano Diretor Estratégico), desde que o potencial construtivo total do projeto seja limitado a 300 mil m² de área construída computável e que seja respeitada uma destinação mínima obrigatória de 20% de área pública.</p>
						<p class="img">antes depois</p>
					</li>
					<li>
						<h4>PE CANINDÉ/SANTO ANTÔNIO</h4>
						<p>A complementação do viário que compõe o Apoio Sul na região, previsto na Lei nº 16.541/2016, somada à implantação de viário complementar, trará a oportunidade de organizar o território composto por lotes públicos localizados no Canindé, que compõem o Projeto Estratégico Canindé – Santo Antônio.</p>
						<p>Um componente importante deste projeto estratégico é a previsão de viabilização de áreas de ZEIS, instituídas pela Lei nº 16.402/2016, considerando a demanda local na destinação das unidades de interesse social produzidas. As áreas verdes propostas tiram partido da identidade local e das áreas de lazer já existentes, possibilitando a prática de atividades esportivas e reforçando a memória dos campos de futebol de várzea da região.</p>
						<p class="img">antes depois</p>
					</li>
					<li>
						<h4>PE CANINDÉ/CMTC</h4>
						<p>Usos institucionais existentes serão reorganizados para ocupar menor área de terreno, liberando espaço para implantação de conjuntos residenciais e de novas atividades, que estarão, preferencialmente, voltados para a Avenida Cruzeiro do Sul, construindo uma nova frente para este logradouro. A provisão de áreas verdes irá garantir integração com os equipamentos públicos modernizados, qualificando a vida dos futuros moradores do bairro.</p>
						<p class="img">antes depois</p>
					</li>
					<li>
						<h4>PE SANTA RITA</h4>
						<p>No terreno de propriedade da SPTrans onde funcionava a garagem de ônibus Santa Rita, são planejadas melhorias urbanísticas, tanto em passeios quanto em praças, como elemento indutor da transformação de outros terrenos na região.</p>
						<p>Como diretriz de projeto, entende-se que estas novas áreas verdes deverão se concentrar junto ao Apoio Urbano Sul de forma a criar um “respiro” na avenida. Novas vias, transversais ao Apoio, aumentarão a permeabilidade do bairro e deverão dar continuidade ao viário existente no entorno, proporcionando novas conexões aos deslocamentos locais. Por se tratar de quadras novas na cidade, nas quais se pretende maior adensamento populacional e construtivo, as novas calçadas deverão apresentar dimensões compatíveis e atributos condizentes com este novo padrão.</p>
						<p>Além de trazer a oferta de terrenos empreendíveis pelo mercado, o projeto promoverá a reconstrução das áreas existentes da SPTrans, do Departamento de Transportes Públicos – DTP e do Departamento de Transportes Internos – DTI.</p>
						<p class="img">antes depois</p>
					</li>
				</ul>
				<p>Esses PROJETOS ESTRATÉGICOS foram estudados no PIU ARCO TIETÊ que abrangia distritos da Subprefeitura da Sé absorvidos no PIU SETOR CENTRAL.</p>
				<p>A transformação dessas áreas será viabilizada através de chamamento público, para o recebimento de propostas de empreendedores, formuladas a partir de diretrizes gerais estabelecidas no PIU SETOR CENTRAL e com a possibilidade de recurso ao Reordenamento Urbanístico Integrado.</p>
				<p>Caberá aos GRUPOS GESTORES, subsidiados por análises técnicas, a deliberação sobre a viabilidade e adequação das propostas apresentadas.</p>
				<p>A esses projetos estratégicos, soma-se o PROJETO ESTRATÉGICO MINHOCÃO, que será objeto de Projeto de Intervenção Urbana Específico que discutirá as alternativas assinaladas para o Elevado João Goulart no parágrafo único do Artigo 375 do PDE.</p>
				<p>Cabe ao PIU SETOR CENTRAL fixar o regramento urbanístico, dependente de regulamentação legal, aplicável ao entorno desse equipamento, tendo em vista sua desativação definitiva como via de tráfego, como determina o PDE.</p>
			</section>
		</section>
		<section>
			<h2 class="titulo" indent="1">Modelo de Gestão Participativa</h2>
			<p>A GESTÃO DEMOCRÁTICA da cidade é um dos princípios que regem a Política de Desenvolvimento Urbano traduzida no Plano Diretor Estratégico de 2014. Trata-se de garantir a participação diferentes segmentos da população de forma direta ou por intermédio de associações representativas, nos processos de planejamento e gestão da cidade, de realização de investimentos públicos e na elaboração, implementação e avaliação de planos, programas e projetos de desenvolvimento urbano.</p>
			<p>Para a implantação do PIU SETOR CENTRAL, serão instituídas a OPERAÇÃO URBANA CENTRO revisada e a ÁREA DE INTERVENÇÃO URBANA SETOR CENTRAL.</p>
			<p>O MODELO DE GESTÃO PARTICIPATIVA proposto preserva competências específicas da COMISSÃO EXECUTIVA DA OPERAÇÃO URBANA CENTRO e do GRUPO GESTOR DA AIU SETOR CENTRAL nos âmbitos territoriais respectivos e definidos em Lei.</p>
			<p>As duas instâncias de gestão de implantação do PIU SETOR CENTRAL são integradas através do NÚCLEO TÉCNICO DE GESTÃO E PLANEJAMENTO, coordenado pela São Paulo Urbanismo, para a garantia da convergência dos dois instrumentos para os objetivos do PIU SETOR CENTRAL.</p>
			<p>Considerando a unicidade do PIU SETOR CENTRAL, determinados temas poderão demandar discussões e deliberações integradas da COMISSÃO EXECUTIVA DA OPERAÇÃO URBANA CENTRO e do GRUPO GESTOR DA AIU SETOR CENTRAL. Essa integração poderá ser demanda por quaisquer dos três componentes da GESTÃO PARTICIPATIVA DO PIU SETOR CENTRAL – COMISSÃO EXECUTIVA, GRUPO GESTOR ou do NÚCLEO TÉCNICO DE GESTÃO E PLANEJAMENTO.</p>
			<Imagem :dados="{
				tipo: 'coluna',
				url: imgSrc('arquivos/setor-central-2/img/image7.jpeg')
			}"></Imagem>
			<p>Compete à COMISSÃO EXECUTIVA e ao GRUPO GESTOR DA AIU:</p>
			<ol class="romanos">
				<li>deliberar sobre os Planos de Ação Integrada propostos pela SP-Urbanismo, providenciando seu encaminhamento ao Conselho Gestor do FUNDURB;</li>
				<li>propor programas e estratégias que possam aprimorar os projetos previstos no Programa de Intervenções, nos Planos de Ação Integrada e nos Projetos Estratégicos;</li>
				<li>acompanhar o andamento dos projetos e obras relativas ao Programa de Intervenções;</li>
				<li>acompanhar a aplicação da Cota da Solidariedade;</li>
				<li>manifestar-se previamente sobre as propostas de implantação e a aplicação dos recursos vinculados ao Programa de Intervenções do PIU SETOR CENTRAL.</li>
			</ol>
			<p>Compete ainda à CEOUC a deliberação sobre o encaminhamento, à Câmara Técnica de Legislação Urbanística – CTLU, de propostas de participação apresentadas com parâmetros alternativos àqueles estabelecidos no PIU SETOR CENTRAL.</p>
			<p>COMISSÃO EXECUTIVA e GRUPO GESTOR DA AIU terão composição paritária e a indicação de representantes deve priorizar integrantes de órgãos colegiados de Secretarias Municipais cuja esfera de competência esteja relacionada aos eixos temáticos do PIU SETOR CENTRAL.</p>
			<p>Os representantes da população devem ser escolhidos entre os integrantes do Conselho Participativo Municipal, eleitos por distrito. O Conselho Participativo é um órgão autônomo da sociedade civil com pelo menos 5 representantes eleitos de cada distrito que se reúnem mensalmente para discutir e acompanhar as políticas públicas municipais na sua execução territorial, fazendo o controle social das diversas leis e programas municipais das subprefeituras.</p>
			<p>Os demais representantes da sociedade civil podem ser escolhidos entre os participantes de outro órgão colegiado eleito, como o CMPU – Conselho Municipal de Política Urbana, vinculado à SMDU – Secretaria Municipal de Desenvolvimento Urbano<sup>1</sup>. O CMPU é composto por 60 membros, 26 representantes do Poder Público e 34 da sociedade civil, oriundos de organizações variadas que cobrem o leque de temas pertinentes à gestão urbana.</p>
			<section>
				<h3 class="titulo" indent="2">Comissão Executiva da Operação Urbana Centro</h3>
				<p>Na gestão da Operação Urbana Centro deverá ser mantida a estrutura de participação atual, com o GTT – Grupo Técnico de Trabalho, agora sob coordenação do NÚCLEO TÉCNICO DE GESTÃO E PLANEJAMENTO, e a Comissão Executiva da Operação Urbana Centro.</p>
				<p>A atual composição da CEOUC será alterada, para a representação paritária do Poder Público e da Sociedade Civil.</p>
				<p>A proposta de composição da CEOUC é a seguinte:</p>
				<Tabela :dados="tabela_comissao"></Tabela>
			</section>
			<section>
				<h3 class="titulo" indent="2">Grupo gestor da AIU Setor Central</h3>
				<p>O Grupo Gestor deverá ter composição paritária entre representantes do Poder Público e da sociedade civil organizada.</p>
				<p>Com o intuito de garantir a integração das ações da Prefeitura, os representantes do Poder Público devem ser indicados entre aqueles que já compõem o colegiado dos Núcleos Regionais de Planejamento<sup>2</sup> de modo a permitir a troca de informações e a atuação coordenada dos diversos órgãos da administração municipal.</p>
				<p>A área do PIU SETOR CENTRAL abrange os distritos Santa Cecília, Bom Retiro, Pari, Brás, República e Sé, da Subprefeitura da Sé, e os distritos Belém e Mooca, da Subprefeitura da Mooca.</p>
				<p>O Grupo Gestor da AIU SETOR CENTRAL deve ser composto pelos representantes da administração pública e sociedade civil relacionados aos temas principais do projeto urbano público proposto. São eles:</p>
				<ol class="romanos">
					<li>Incremento populacional nos distritos do Anel Central, suportado pela oferta de emprego e serviços existentes na região;</li>
					<li>Redução da Vulnerabilidade Social e qualificação da moradia;</li>
					<li>Preservação dos imóveis de interesse histórico;</li>
					<li>Desenvolvimento Orientado pelo Transporte Sustentável – DOTS: adensamento populacional e construtivo junto aos meios de transporte público de média e alta capacidade;</li>
					<li>Melhoria da mobilidade veicular e da acessibilidade a pé;</li>
					<li>Fortalecimento dos polos econômicos;</li>
					<li>Qualificação dos espaços públicos.</li>
				</ol>
				<p>A partir desse temas, sugere-se uma composição, a saber:</p>
				<Tabela :dados="tabela_grupogestor"></Tabela>
			</section>
			<section>
				<h3 class="titulo" indent="2">Núcleo técnico de Gestão e Planejamento do PIU Setor Central</h3>
				<p>A SP-URBANISMO, a partir da criação de um Núcleo Técnico de Gestão e Planejamento, deverá coordenar, em nome da PMSP, a implantação da AIU SETOR CENTRAL e da OPERAÇÃO URBANA CENTRO, ficando autorizada a praticar os atos necessários à sua realização, promovendo a interação entre órgãos da administração direta e indireta, com outras esferas de governo e com a sociedade civil para fins concretizar os objetivos gerais e diretrizes específicas do PIU SETOR CENTRAL.</p>
				<p>Caberá ao Núcleo Técnico de Gestão e Planejamento impulsionar as ações de implantação do PIU SETOR CENTRAL, garantindo:</p>
				<ul>
					<li>a gestão integrada dos aspectos operacionais, financeiros, urbanísticos e sociais do projeto;</li>
					<li>a convergência do planejamento da implantação do projeto com as políticas públicas da gestão;</li>
					<li>o monitoramento da transformação urbana e dos impactos na população e no território.</li>
				</ul>
				<p>O Núcleo Técnico de Gestão e Planejamento estará alocado na DIRETORIA DE GESTÃO DAS OPERAÇÕES URBANAS - DGO da SP-URBANISMO, estruturada para a gestão financeira, operacional e participativa dos projetos urbanos coordenados por essa empresa.</p>
				<Imagem :dados="{
					tipo: 'coluna',
					url: imgSrc('arquivos/setor-central-2/img/image8.jpeg')
				}"></Imagem>
			</section>
			<section>
				<h3 class="titulo" indent="2">PAI – Plano de Ação Integrada</h3>
				<p>Para a implantação coordenada e a eficiência na aplicação de recursos captados, as intervenções constantes do Programa de Intervenções do PIU do Setor Central serão organizadas em PLANOS DE AÇÃO INTEGRADA.</p>
				<p>Para o emprego de recursos captados, seja no âmbito da OU CENTRO seja no âmbito da AIU SETOR CENTRAL, ou a partir de demandas da administração municipal ou da sociedade, o NÚCLEO TÉCNICO DE PLANEJAMENTO DE GESTÃO deverá organizar as ações constantes do Programa de Intervenções do PIU SETOR CENTRAL segundo unidade territorial ou convergência temática, conformando Planos de Ação Integrada.</p>
				<p>Os Planos de Ação Integrada – PAI, estruturados pelo Núcleo Técnico de Planejamento de Gestão, serão submetidos ao Grupo Gestor da AIU SETOR CENTRAL ou à Comissão Executiva da OPERAÇÃO URBANA CENTRO para deliberação da prioridade de implantação.</p>
				<p>A partir da deliberação dos grupos gestores, o Plano de Ação Integrada será desenvolvido pelo NÚCLEO TÉCNICO DE GESTÃO E PLANEJAMENTO, com a participação de um COMITÊ LOCAL do Grupo Gestor/CEOUC.</p>
				<p>Este COMITÊ LOCAL será definido em reunião do Grupo Gestor da AIU-SETOR CENTRAL, e atuará um grupo de apoio ao desenvolvimento e acompanhamento do PA.</p>
				<p>Será composto por membros do Núcleo Técnico de Gestão e Planejamento, do Grupo Gestor/Comissão Executiva e de outros atores locais convidados, de forma a melhorar a interlocução com a população local e consolidar consensos em torno das propostas e de seu encaminhamento.</p>

				<p class="img">ai2html PAI</p>

				<p>Quanto a implantação de PLANO DE AÇÃO INTEGRADA em perímetro de ÁREA DE ESTRUTURAÇÃO LOCAL DA MORADIA prever a Provisão Habitacional de Interesse Social de Promoção Pública, o COMITÊ LOCAL demandará à SEHAB a Constituição do CONSELHO GESTOR DE ZEIS.</p>
				<p>Nos termos do PDE, Nas ZEIS 1 e 3, quando habitadas por população de baixa renda, deverão ser constituídos CONSELHOS GESTORES compostos por representantes dos moradores, do Executivo e da sociedade civil organizada, que participarão da formulação, aprovação e implementação das intervenções a serem realizadas em suas áreas.</p>
				<p>A instalação do CONSELHO GESTOR deverá preceder a elaboração do PROJETO DE INTERVENÇÃO.</p>
			</section>
			<ol class="notas">
				<caption>Notas</caption>
				<li>
					PDE, Artigo 327. O Conselho Municipal de Política Urbana - CMPU, órgão colegiado integrante da estrutura da Secretaria Municipal de Desenvolvimento Urbano, tem por finalidade estudar e propor diretrizes para a formulação e implementação da Política Municipal de Desenvolvimento Urbano, bem como acompanhar e avaliar sua execução, conforme dispõe a Lei Federal nº 10.257, de 10 de julho de 2001. 
					§ 1º O CMPU será composto por 60 (sessenta) membros titulares e respectivos suplentes, representantes do Poder Público e da sociedade civil, organizados por segmentos, com direito a voz e voto, a saber:<br>
					I - 26 (vinte e seis) membros representantes de órgãos do Poder Público indicados pelo Prefeito, sendo no mínimo:<br>
					a) 2 (dois) membros da Secretaria Municipal de Desenvolvimento Urbano; b) 8 (oito) membros das Subprefeituras, um por macrorregião, de acordo com a divisão utilizada pelo Executivo;<br>
					II - 34 (trinta e quatro) membros da sociedade civil, distribuídos da seguinte forma:<br>
					a) 8 (oito) membros oriundos do Conselho Participativo Municipal ou do Conselho de Representantes, um de cada macrorregião, de acordo com a divisão utilizada pelo Executivo; b) 4 (quatro) membros representantes dos movimentos de moradia; c) 4 (quatro) membros representantes de associações de bairros; d) 4 (quatro) membros representantes do setor empresarial, sendo no mínimo 1 (um) da indústria, 1 (um) do comércio e 1 (um) de serviços; e) 1 (um) membro representante dos trabalhadores, por suas entidades sindicais; f) 1 (um) membro de ONGs; g) 1 (um) membro de entidades profissionais; h) 2 (dois) membros de entidades acadêmicas e de pesquisa; i) 2 (dois) membros representantes de movimentos ambientalistas; j) 1 (um) membro representante de movimentos de mobilidade urbana; k) 1 (um) membro representante de movimentos culturais; l) 1 (um) membro representante de entidades religiosas; m) 1 (um) membro escolhido dentre os representantes do Conselho Municipal do Meio Ambiente e Desenvolvimento Sustentável - CADES; n) 1 (um) membro eleito entre os representantes do Conselho Municipal de Planejamento e Orçamento Participativos - CPOP; o) 1 (um) membro eleito entre os representantes do Conselho Municipal de Trânsito e Transporte - CMTT; p) 1 (um) membro eleito entre os representantes do Conselho Municipal de Habitação - CMH.<br>
					§ 2º Terão assento com direito a voz no Conselho 4 (quatro) representantes de órgãos estaduais com atuação metropolitana, além de 1 (um) representante de cada consórcio de municípios integrantes da região metropolitana.
				</li>
				<li>Os Núcleos Regionais de Planejamento são compostos por representantes da subprefeitura responsáveis pelo seu planejamento territorial e secretarias e órgãos  municipais que atuam na região, buscando a integração territorial das políticas públicas setoriais. É composto por 16 membros, designados por Portaria, entre as seguintes secretarias municipais: Secretaria Municipal de Desenvolvimento Urbano - SMDU, Secretaria Municipal do Verde e Meio Ambiente – SVMA, Secretaria Municipal de Gestão – SMG, Secretaria do Governo Municipal – SGM, Secretaria Municipal de Justiça – SMJ, Secretaria Municipal de Direitos Humanos e Cidadania – SMDHC, Secretaria Municipal de Mobilidade e Transportes – SMT, Secretaria Municipal de Inovação e Tecnologia – SMIT, Secretaria Municipal de Trabalho e Empreendedorismo – SMTE, Secretaria Municipal de Desestatização e Parcerias – SMDP, Secretaria Municipal de Assistência e Desenvolvimento Social – SMADS, Secretaria Municipal de Segurança Urbana – SMSU (Guarda Civil Metropolitana – GCM e Guarda Ambiental), Controladoria Geral do Município – CGM, Secretaria Municipal da Pessoa com Deficiência – SMPED e Secretaria Municipal de Relações Internacionais – SMRI, num total de 16 membros, designados por Portaria. (PORTARIA SECRETARIA MUNICIPAL DAS PREFEITURAS REGIONAIS - SMPR Nº 31 DE 7 DE JULHO DE 2001.</li>
			</ol>
		</section>
		<section>
			<h2 class="titulo" indent="1">Modelo de Gestão Financeira</h2>
			<section>
				<h3 class="titulo" indent="2">Estoque de Potencial Constutivo Adicional do PIU SETOR CENTRAL</h3>				
				<ul class="links">
					<li>
						<a href="">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Nota Técnica - Estoque</div>
							<span>XXX Mb</span>
						</a>
					</li>
				</ul>
				<p>O PIU SETOR CENTRAL, resumido em uma única meta, objetiva o adensamento populacional dos distritos centrais.</p>
				<p>Estudos urbanísticos (ver nota técnica 1) elaborados para estimativa do potencial construtivo atribuído pelo Zoneamento<sup>1</sup> aos imóveis contidos no PIU SETOR CENTRAL indicam o expressivo montante de mais de 35 milhões de metros quadrados.</p>
				<p>Deduzidos os mais de 19 milhões de metros quadrados já edificados, pode-se afirmar que, segundo a LPUOS, a região comportaria um adensamento construtivo total de mais de 15 milhões de metros quadrados.</p>
				<Tabela :dados="tabela_areaconstruida"></Tabela>
				<p>O PIU SETOR CENTRAL, contudo, considerando as características atuais e os cenários futuros desejáveis, propõe a alocação de altas densidades populacionais e construtivas em áreas assinaladas pelo Zoneamento como áreas de densidade média e uso controlado.</p>
				<p>Trata-se da faixa norte do projeto, atravessada pelo APOIO URBANO SUL, onde são observadas as menores densidades do perímetro e onde se identifica o maior potencial de transformação.</p>
				<p>Também os distritos da Sé, República e Brás, servidos por transporte público de alta capacidade, que somam sete estações de metrô e duas de trem, têm áreas expressivas assinaladas por zonas de densidade média e gabaritos controlados. Sé e República, sob essa regulamentação, não podem receber novos exemplares da tipologia que os caracteriza: alta densidade construtiva e gabarito ilimitado.</p>
				<p>Como o PIU SETOR CENTRAL propõe parâmetros alternativos ao Zoneamento para o desenvolvimento da região, para acompanhar o desempenho do território, face ao adensamento populacional e construtivo pretendido, foi definido um ESTOQUE DE POTENCIAL CONSTRUTIVO ADICIONAL para o projeto, inferior ao montante autorizado pela LPUOS.</p>
				<p>Os estudos econômicos que subsidiam o PIU SETOR CENTRAL, com base no desempenho do setor imobiliário nos últimos doze anos na região, estimaram a capacidade de consumo de estoque de potencial construtivo oneroso para o uso residencial em 1.080.000 m², no prazo previsto de implantação do PIU de vinte anos.</p>
				<p>Com base no Censo de 2010, os dados referentes á distribuição de domicílios por faixa de rendimento, em salários mínimos, nos Distritos Municipais, indicam que, na área central, os domicílios compreendidos na faixa de interesse social correspondem a aproximadamente 50% dos domicílios totais.</p>

				<p class="img">gestao financeira - graf 1</p>

				<p>Para garantir que não haja alteração no perfil de renda da população da área central, ou seja, para controle do processo de gentrificação que acompanha a implantação de projetos de requalificação urbana, é meta do projeto que 50% das novas unidades produzidas correspondam a Habitações de Interesse Social - HIS.</p>
				<p>Considerando os parâmetros estabelecidos para enquadramento das HIS e das Habitações de Mercado Popular – HMP, o Estoque de Potencial Construtivo Adicional para o uso residencial no âmbito do PIU do Setor Central tem a seguinte distribuição:</p>

				<p class="img">excel gestao financeira plan:tabela1</p>

				<p>Para o uso não residencial, bastante expressivo na região, propõe-se um estoque de potencial construtivo adicional ou de 200.000 m², algo em torno de 20% do estoque residencial total. Os estoques de potencial construtivo para o uso residencial, para HIS e para o uso não residencial somam 2.000.000 de metros quadrados.</p>
				<p>O PIU SETOR CENTRAL também reserva estoque de potencial construtivo adicional gratuito para os usos e eixos incentivados, correspondendo a 20% do potencial construtivo apurado.</p>
				<p>Desta forma, o estoque de potencial construtivo adicional, para os 20 anos de implantação do PIU SETOR CENTRAL é igual a 2.400.000 m², assim distribuídos:</p>

				<p class="img">excel gestao financeira plan:tabela2</p>
				<p>A fixação de Estoques de Potencial Construtivo Adicional no âmbito do PIU SETOR CENTRAL, onerosos ou não, opera como uma ferramenta de monitoramento da transformação – em termos da capacidade de resposta do território – e do adensamento populacional – em termos da participação das faixas de renda nos benefícios do projeto.</p>

				<p class="img">infografico grande que pode ser que mude</p>

				<p>Novos estoques poderão ser atribuídos ao PIU SETOR CENTRAL no caso do esgotamento do estoque proposto antes de implementado o Programa de Intervenções, limitados ao potencial construtivo total autorizado pelo Zoneamento.</p>
				<p>Para tanto, serão conduzidos estudos urbanísticos e econômicos para definição do estoque acrescido, bem como da sua distribuição entre categorias de uso e formas de distribuição, gratuita ou onerosa.</p>
				<ol class="notas">
					<caption>Notas</caption>
					<li>Aprovado pela Lei de Parcelamento, Uso e Ocupação do Solo - LPUOS, Lei Municipal nº 16.402 de 22 de março de 2016.</li>
				</ol>
			</section>
			<section>
				<h3 class="titulo" indent="2">Instrumentos de cessão de Potencial Construtivo Adicional mediante contrapartida financeira ou urbanística</h3>
				<p>A transformação urbana ocorre em áreas privadas, a partir dos instrumentos de indução oferecidos pelo PIU SETOR CENTRAL e nas áreas públicas, com a implantação das ações do Programa de Intervenções.</p>
				<p>Os instrumentos indutores da transformação urbana dos imóveis estão baseados na oferta, gratuita ou onerosa, de Potencial Construtivo Adicional até o limite de estoque definido no PIU SETOR CENTRAL.</p>
				<p>Estão organizados em 4 categorias: VENDA DE POTENCIAL CONSTRUTIVO ADICIONAL – disponibilizados em Venda Direta ou através de Leilões, BÔNUS EQUIVALENTES, TRANSFERÊNCIA DO DIREITO DE CONSTRUIR e INCENTIVOS concedidos na forma de potencial adicional gratuito que se distribuem nas áreas da AIU e OPERAÇÃO URBANA.</p>

				<p class="img">\\spurbsp01\Gestao_Projetos\Projetos\OUC_Centro_RevisaoLei12349_97\01_Projeto_Urbanistico\91_Entregas\PIU_Setor_Central_Consulta_2019_03\Diagrama_estoque_PIU\AI\Diagrama_ferramenta_bonus_outorga_rev5.ai</p>

				<Imagem :dados="{
					tipo: 'default',
					url: imgSrc('arquivos/setor-central-2/img/image12.jpg')
				}"></Imagem>
				<Imagem :dados="{
					tipo: 'default',
					url: imgSrc('arquivos/setor-central-2/img/image13.jpeg')
				}"></Imagem>
			</section>
			<section>
				<h3 class="titulo" indent="2">Gestão dos recursos financeiros</h3>
				<p>O PIU SETOR CENTRAL definiu dois instrumentos de implantação, AIU SETOR CENTRAL e OPERAÇÃO URBANA CENTRO, que têm mecanismos próprios, porém vinculados. Os recursos auferidos pela venda de Potencial Construtivo Adicional devem ser depositados em contas segregadas, que terão seu controle social garantido pelos Grupos Gestores de cada instrumento.</p>
				<p>A combinação de recursos é autorizada considerando o Programa de Intervenções, objetivo da implantação do PIU SETOR CENTRAL.</p>
				<p>Caberá à SPURBANSIMO, como gestora do PIU SETOR CENTRAL, o acompanhamento administrativo dos gastos que serão efetuados, sua apresentação ao Grupo Gestor e à Comissão Executiva para acompanhamento e a divulgação ao público em geral.</p>
				<p>Como já ocorre nas Operações Urbanas Consorciadas, a SP-URBANISMO promove o livre acesso às informações do andamento das ações do Programa de Intervenções, através de meios eletrônicos e das reuniões dos Grupos Gestores.</p>
				<Imagem :dados="{
					tipo: 'default',
					url: imgSrc('arquivos/setor-central-2/img/image14.jpeg')
				}"></Imagem>
			</section>
		</section>
		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:14, context:'Comentarios'}"></Comments>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import ProcessoPIU from '@/components/graf/ProcessoPIU'
import ConselhoGestor from '@/components/graf/ConselhoGestor'
import Galeria from '@/components/Galeria'
import Mapa from '@/components/Mapa'
import Minuta from '@/components/Minuta'
import Apoio from '@/components/Apoio'
import Tabela from '@/components/Tabela'
import Imagem from '@/components/Imagem'
import AntesDepois from '@/components/AntesDepois'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'SetorCentral2',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			galeria01: {
				width: 960,
				height: 720,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide1.JPG',
					state: true,
					title: '',
					icon: false,
					id: 1
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide2.JPG',
					state: false,
					title: '',
					icon: false,
					id: 2
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide3.JPG',
					state: false,
					title: '',
					icon: false,
					id: 3
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide4.JPG',
					state: false,
					title: '',
					icon: false,
					id: 4
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide5.JPG',
					state: false,
					title: '',
					icon: false,
					id: 5
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide6.JPG',
					state: false,
					title: '',
					icon: false,
					id: 6
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide7.JPG',
					state: false,
					title: '',
					icon: false,
					id: 7
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide8.JPG',
					state: false,
					title: '',
					icon: false,
					id: 8
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide9.JPG',
					state: false,
					title: '',
					icon: false,
					id: 9
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide10.JPG',
					state: false,
					title: '',
					icon: false,
					id: 10
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide11.JPG',
					state: false,
					title: '',
					icon: false,
					id: 11
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide12.JPG',
					state: false,
					title: '',
					icon: false,
					id: 12
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide13.JPG',
					state: false,
					title: '',
					icon: false,
					id: 13
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide14.JPG',
					state: false,
					title: '',
					icon: false,
					id: 14
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide15.JPG',
					state: false,
					title: '',
					icon: false,
					id: 15
				},{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria01/Slide16.JPG',
					state: false,
					title: '',
					icon: false,
					id: 16
				}]
			},
			galeria02: {
				width: 992,
				height: 494,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria02/1.png',
					state: true,
					title: '',
					icon: false,
					id: 1
				}, {
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria02/2.png',
					state: false,
					title: '',
					icon: false,
					id: 2
				}, {
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria02/3.png',
					state: false,
					title: '',
					icon: false,
					id: 3
				}, {
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria02/4.png',
					state: false,
					title: '',
					icon: false,
					id: 4
				}, {
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria02/5.png',
					state: false,
					title: '',
					icon: false,
					id: 5
				}, {
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria02/6.png',
					state: false,
					title: '',
					icon: false,
					id: 6
				}, {
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria02/7.png',
					state: false,
					title: '',
					icon: false,
					id: 7
				}, {
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria02/8.png',
					state: false,
					title: '',
					icon: false,
					id: 8
				}, {
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria02/9.png',
					state: false,
					title: '',
					icon: false,
					id: 9
				}, {
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria02/10.png',
					state: false,
					title: '',
					icon: false,
					id: 10
				}, {
					url: this.$store.getters.basePath + 'arquivos/setor-central-2/galeria02/11.png',
					state: false,
					title: '',
					icon: false,
					id: 11
				}]
			},
			tabela_estrategias: {
				colunas: [
					{ titulo: 'Estratégias PIU Setor Central' },
					{ titulo: 'PDE - Estratégia I' },
					{ titulo: 'PDE - Estratégia II' },
					{ titulo: 'PDE - Estratégia III' },
					{ titulo: 'PDE - Estratégia IV' },
					{ titulo: 'PDE - Estratégia V' },
					{ titulo: 'PDE - Estratégia VI' },
					{ titulo: 'PDE - Estratégia VII' },
					{ titulo: 'PDE - Estratégia IX' },
					{ titulo: 'PDE - Estratégia X' }
				],
				linhas: [
					[
						[ { data: '(5.1) Perímetro de requalificação de imóveis tombados (PRIT)', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.2) Bônus equivalente, (5.2.1) Bonificação para construção de HIS 1', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.2) Bônus equivalente, (5.2.2) Bonificação para edifícios tombados', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.2) Bônus equivalente, (5.2.3) Bonificação para Requalificação de edifícios destinados a HIS', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.3) PEUC - Parcelamento, Edificação e Urbanização Compulsórios', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.4) TDC incentivada', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.5) Incentivos diretos, (5.5.1) Regularização onerosa de construções', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.5) Incentivos diretos, (5.5.2) Retrofit sem alteração de volumetria de edificações existentes', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.5) Incentivos diretos, (5.5.3) Áreas destinadas a lazer, educação e cultura não computáveis', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.5) Incentivos diretos, (5.5.4.1) Remembramento de lotes na Operação Urbana Centro', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.5) Incentivos diretos, (5.5.4.2) Remembramento de lotes no Setor Orla Fluvial da AIU SETOR CENTRAL – Incentivo de Qualificação da Orla', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.5) Incentivos diretos, (5.5.5) Reconstrução', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.6) Chamamento público', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: '(5.7) Projetos Estratégicos', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: 'Programa de intervenções', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: 'Setorização do PIU Setor Central', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ]
					],
					[
						[ { data: 'Modelo de gestão', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '', centro: true } ],
						[ { data: '✓', centro: true } ],
						[ { data: '✓', centro: true } ]
					],
				],
			},
			tabela_densidade: {
				titulo: 'Áreas construídas totais e Coeficiente de Aproveitamento médio residencial e não-residencial',
				colunas: [
					{ titulo: 'Distrito' },
					{ titulo: 'Coeficiente de Aproveitamento Residencial' },
					{ titulo: '% Área Construída Residencial' },
					{ titulo: 'Coeficiente de Aproveitamento Não-Residencial' },
					{ titulo: '% Área Construída ' }
				],
				linhas: [
					[
						[ { data: 'Santa Cecília' } ],
						[ { data: '5,3' } ],
						[ { data: '64%' } ],
						[ { data: '1,7' } ],
						[ { data: '34%' } ]
					], [
						[ { data: 'Bela Vista' } ],
						[ { data: '5,3' } ],
						[ { data: '51%' } ],
						[ { data: '3,4' } ],
						[ { data: '48%' } ]
					], [
						[ { data: 'República' } ],
						[ { data: '8,4' } ],
						[ { data: '31%' } ],
						[ { data: '5' } ],
						[ { data: '64%' } ]
					], [
						[ { data: 'Bom Retiro' } ],
						[ { data: '2,5' } ],
						[ { data: '27%' } ],
						[ { data: '1,2' } ],
						[ { data: '70%' } ]
					], [
						[ { data: 'Brás' } ],
						[ { data: '2' } ],
						[ { data: '16%' } ],
						[ { data: '1,6' } ],
						[ { data: '79%' } ]
					], [
						[ { data: 'Pari' } ],
						[ { data: '1,3' } ],
						[ { data: '24%' } ],
						[ { data: '1,3' } ],
						[ { data: '74%' } ]
					]
				],
				fonte: 'Infocidade (Elaboração: São Paulo Urbanismo, 2017)',
				tabelaListrada: true
			},
			tabela_comissao: {
				colunas: [
					{ titulo: 'Tema' },
					{ titulo: 'PMSP' },
					{ titulo: 'Sociedade Civil' }
				],
				linhas: [
					[
						[ { data: 'Habitação' } ],
						[ { data: 'COHAB, SEHAB' } ],
						[ { data: 'Conselho Municipal de Habitação, Segmento Empresarial (CMPU)' } ]
					], 
					[
						[ { data: 'Vulnerabilidade social' } ],
						[ { data: 'SMADS, SMDHC' } ],
						[ { data: 'Conselho Pop. Rua, Organização Não Governamental' } ]
					], 
					[
						[ { data: 'Patrimônio histórico e promoção cultural' } ],
						[ { data: 'SMC' } ],
						[ { data: 'Universidade (CMPU)' } ]
					], 
					[
						[ { data: 'Atividade econômica' } ],
						[ { data: 'SMTE' } ],
						[ { data: 'Segmento Comercial (CMPU)' } ]
					], 
					[
						[ { data: 'Regulação urbanística e intervenções' } ],
						[ { data: 'SPURBANISMO, SMDU' } ],
						[ { data: 'Conselhos Participativos Municipais, Organização Não Governamental' } ]
					], 
					[
						[ { data: 'Zeladoria urbana' } ],
						[ { data: 'Subprefeituras' } ],
						[ { data: 'Conselhos Participativos Municipais, Organização Não Governamental' } ]
					], 
					[
						[ { data: 'Ambiente urbano' } ],
						[ { data: 'SVMA' } ],
						[ { data: 'Conselhos Participativos Municipais, Organização Não Governamental' } ]
					]
				]
			},
			tabela_grupogestor: {
				colunas: [
					{ titulo: 'Tema' },
					{ titulo: 'PMSP' }
				],
				linhas: [
					[
						[ { data: 'Habitação - Social' } ],
						[ { data: 'COHAB' } ]
					],
					[
						[ { data: 'Habitação - Mercado imobiliário' } ],
						[ { data: 'SEHAB' } ]
					],
					[
						[ { data: 'Vulnerabilidade social' } ],
						[ { data: 'SMADS, SMDHC' } ]
					],
					[
						[ { data: 'Atividade econômica' } ],
						[ { data: 'SMTE' } ]
					],
					[
						[ { data: 'Mobilidade' } ],
						[ { data: 'SMT' } ]
					],
					[
						[ { data: 'Regulação urbanística e intervenções' } ],
						[ { data: 'SPURBANISMO, SMDU' } ]
					],
					[
						[ { data: 'Zeladoria urbana' } ],
						[ { data: 'Subprefeituras' } ]
					],
					[
						[ { data: 'Ambiente urbano' } ],
						[ { data: 'SVMA' } ]
					]
				]
			},
			tabela_areaconstruida: {
				titulo: 'Área Construída Computável (m²)',
				colunas: [
					{ titulo: '' },
					{ titulo: 'Existente' },
					{ titulo: 'LPUOS' },
					{ titulo: 'Potencial' }
				],
				linhas: [
					[
						[ { data: 'OUCentro' } ],
						[ { data: '8396381,99' } ],
						[ { data: '10023885,2' } ],
						[ { data: '1627503,21' } ]
					],
					[
						[ { data: 'AIU Setor Central' } ],
						[ { data: '11073835,43' } ],
						[ { data: '25064695,03' } ],
						[ { data: '13990859,6' } ]
					],
					[
						[ { data: 'PIU Setor Central' } ],
						[ { data: '19470217,42' } ],
						[ { data: '35088580,23' } ],
						[ { data: '15618362,81' } ]
					]
				]
			},
		}
	},
	components: {
		PageTop,
		Indice,
		Comments,
		CommentsLoader,
		ProcessoPIU,
		ConselhoGestor,
		Galeria,
		Mapa,
		Minuta,
		Apoio,
		Tabela,
		Imagem,
		AntesDepois
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

div.SetorCentral2 {
	a.button {
		font-family: $grotesca;
		font-size: 1.2rem !important;
	}
	p > a.button {
		margin: 0 0 1rem;
	}
	p.img {
		margin: 4rem auto;
		background-color: $vermelho-tr;
		padding: 1rem;
		overflow: auto;
	}

	div.card-pde {
		width: calc(320px - 2rem);
		margin: 2rem auto;
		border: 2px solid #E30513;
		border-radius: 8px;
		overflow: hidden;
		background-color: #FFF;
		* {
			font-family: $grotesca;
			font-size: 0.8rem;
		}
		.title {
			font-size: 1.2rem;
			line-height: 1.2;
			font-weight: bold;
			color: #E30513;
			margin: 0.8rem 1rem;
			text-align: center;
		}
		p, ul {
			padding: 0 1rem;
			margin-bottom: 0.5rem;
			-webkit-hyphens: auto;
			-ms-hyphens: auto;
			hyphens: auto;
		}
		ul li {
			margin: 0 0 0 1rem;
			padding: 0;
		}
		div.iconCont {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			padding: 0 1rem;
			div.icone {
				display: flex;
				flex-flow: column nowrap;
				align-items: center;
				width: 100%;
				margin-right: 1rem;
				&:last-child { margin-right: 0; }
				& > img {
					width: 80px;
					height: 80px;
				}
				& > div {
					font-weight: bold;
					font-size: smaller;
					text-align: center;
					line-height: 1.2;
					color: #E30513;
					margin-top: 4px;
				}
				&.horizontal {
					flex-flow: row nowrap;
					& > div {
						color: inherit;
						margin-top: 0;
						font-weight: inherit;
						font-size: inherit;
						text-align: left;
						b { color: #E30513; }
					}
				}
			}
			span {
				color: #E30513;
				font-size: 2rem;
				margin: 0 -1rem;
			}
		}
		& > img {
			margin: 1rem 0 -8px;
			width: 100%;
		}
	}
}
</style>
