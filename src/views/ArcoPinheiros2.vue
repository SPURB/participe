<template>
	<div class="ArcoPinheiros2" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/arco-pinheiros_dt.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Arco Pinheiros</div></template>
			<template slot="subtitulo"><div>2ª consulta pública – Projeto de Intervenção Urbana Arco Pinheiros</div></template>
		</PageTop>

		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<p>Em conformidade com a cronologia estabelecida pelo Plano Diretor Estratégico – PDE, a Prefeitura do Município de São Paulo por intermédio da Secretaria Municipal de Desenvolvimento Urbano – SMDU e da São Paulo Urbanismo – SP Urbanismo apresenta proposta de Projeto de Intervenção Urbana – PIU para o perímetro o subsetor Arco Pinheiros, da Orla Ferroviária e Fluvial da Macroárea de Estruturação Metropolitana (MEM), o qual estabelece objetivos, diretrizes, estratégias e mecanismos para a implantação do Projeto de Intervenção Urbana.</p>
			<p>A proposta ora apresentada objetiva tornar público o Projeto de Intervenção Urbana do Arco Pinheiros – PIU ARCO PINHEIROS, a ser realizada entre os dias <mark>xx de abril e xx de maio de 2019</mark>, expondo o conteúdo preliminar do PIU, com vistas a colher contribuições da sociedade civil ao aperfeiçoamento e consolidação do projeto.</p>
			<p>Localizado junto ao encontro dos dois mais importantes rios da cidade Pinheiros e Tietê, conectado aos eixos do sistema rodoviário Anhanguera/ Bandeirantes, Pres. Castelo Branco e Raposo Tavares, somado a presença dos institutos de ensino e pesquisa (USP, Instituto Butantan, IPT, IPEN), ao Parque Tecnológico do Jaguaré, ao setor industrial do Jaguaré voltado a indústrias de alta tecnologia por fim a disponibilidade de terras representada pelas antigas áreas industriais e mais especificamente pela conversão da área da Ceagesp, tornam o território do Arco Pinheiros como local estratégico para o desenvolvimento econômico da cidade, mais especificamente atividades de inovação.</p>
			<p>Para que o Arco Pinheiros seja o “Território de Inovação” na cidade de São Paulo caberá ao PIU ARCO PINHEIROS promover as melhores condições para atração desta atividade ao melhorar a acessibilidade interna e externamente, conectar os diferentes modos de transporte motorizados e não motorizados, criar espaços capazes de fomentar o intercambio do conhecimento, incentivar a diversidade de usos associando a moradia aos demais usos urbanos de forma a garantir o atendimento e a permanência da população de menores rendas e implantar infraestrutura equipamentos que suportem o adensamento proposto.</p>
			<img src="" alt="figure ai2html ACPMEM">
			<p>O Processo de elaboração do PIU ARCO PINHEIROS segue os passos dispostos no Decreto n° 56.901/2016 e desta forma, as contribuições a serem colhidas nesta consulta irão colaborar para o seu aperfeiçoamento. Após consolidação o conteúdo final do PIU e seu Projeto de Lei serão objeto será debatido com a sociedade em audiências públicas, para posteriormente serem encaminhados ao Legislativo.</p>
			<Processo></Processo>
		</section>

		<section>
			<h2 class="titulo" indent="1">Perímetro de intervenção</h2>
			<p>O Perímetro do Arco Pinheiros foi determinado pelo PDE juntamente com os demais subsetores da Orla Ferroviária e Fluvial incluídos na Macroárea de Estruturação Metropolitana – Mapa 2A.</p>
			<p>Com a justificativa de contemplar a totalidade de assentamentos precários contíguos ou vizinhos, delimitados como ZEIS 1 pela LPUOS e englobar áreas vazias classificadas como ZEIS 2, o PIU ARCO PINHEIROS propõe a adequação do perímetro original, com a inclusão de quadras entre a USP e a Av. Corifeu Azevedo Marques, tendo esta como limite físico. A proposta busca construir possíveis vínculos entre atendimento populacional e demanda.</p>
			<img src="" alt="figure ai2html caracterização geral do arco pinheiros">
		</section>

		<section>
			<h2 class="titulo" indent="1">Características básicas da proposta</h2>
			<section>
				<h3 class="titulo" indent="2">Objetivos gerais</h3>
				<p>Conforme diagnóstico, a área do Arco Pinheiros – ACP, porção mais a oeste da Macroárea de Estruturação Metropolitana – MEM, engloba elementos físico-territoriais de caráter metropolitano: a confluência dos rios Tietê e Pinheiros, a presença da ferrovia e o conjunto formado pelos eixos do sistema rodoviário Anhanguera/Bandeirantes, Presidente Castelo Branco e Raposo Tavares.</p>
				<p>A somatória entre esta convergência de elementos, a presença de áreas industriais que se encontram em transformação e áreas de usos extensivos, como a Ceagesp, que já possui estudos de transferência de suas atividades para outros locais, é muito aderente à conceituação da MEM, ou seja, local estratégico na reestruturação da cidade devido à presença dos principais eixos que articulam polos e municípios da Região Metropolitana de São Paulo, além de possuir regiões que passam por intensos processos de transformação econômica e de padrões de usos e ocupação do solo, com a necessidade de equilíbrio na relação entre emprego e moradia.</p>
				<div class="infograficoEquilibrio">
					<div class="wrapperBranco">
						<div class="cima">
							<img :src="imgSrc('arquivos/arco-pinheiros-2/infograficos/equilibrio/icone_01.png')" alt="Concentração de investimentos, oportunidades de emprego e oferta de bens e serviços urbanos">
							<p>Concentração de investimentos, oportunidades de emprego e oferta de bens e serviços urbanos</p>
						</div>
						<div class="vs">×</div>
						<div class="baixo">
							<img :src="imgSrc('arquivos/arco-pinheiros-2/infograficos/equilibrio/icone_02.png')" alt="Mais população que investimentos, empregos e bens e serviços urbanos ofertados">
							<p>Mais população que investimentos, empregos e bens e serviços urbanos ofertados</p>
						</div>
					</div>
					<div class="wrapperLaranja">
						<p class="title">Reequilibrar as dinâmicas urbanas</p>
						<p class="premissas">
							Aproximar emprego e moradia
							<span>+</span>
							Renovar usos
							<span>+</span>
							Integrar cidade e recursos naturais
						</p>
						<div class="iconCont">
							<div class="icone">
								<img :src="imgSrc('arquivos/arco-pinheiros-2/infograficos/equilibrio/equilibrio-das-dinamicas-urbanas-05.png')" alt="">
								<span>QUALIDADE DE VIDA</span>
							</div>
							<div class="icone">
								<img :src="imgSrc('arquivos/arco-pinheiros-2/infograficos/equilibrio/equilibrio-das-dinamicas-urbanas-06.png')" alt="">
								<span>PRODUTIVIDADE</span>
							</div>
							<div class="icone">
								<img :src="imgSrc('arquivos/arco-pinheiros-2/infograficos/equilibrio/equilibrio-das-dinamicas-urbanas-07.png')" alt="">
								<span>RESPONSABILIDADE AMBIENTAL</span>
							</div>
							<div class="icone">
								<img :src="imgSrc('arquivos/arco-pinheiros-2/infograficos/equilibrio/equilibrio-das-dinamicas-urbanas-08.png')" alt="">
								<span>DEMOCRACIA E INCLUSÃO</span>
							</div>
						</div>
					</div>
				</div>
				<p>Desta forma, O PIU ARCO PINHEIROS reitera a oportunidade de desenvolver um Projeto de Intervenção Urbana para o território, perseguindo as estratégias definidas pelo Plano Diretor Estratégico (Lei nº 16.050/2014):</p>
				<ol class="romanos">
					<li>Socializar os ganhos da produção da cidade;</li>
					<li>Assegurar o direito à moradia digna para quem precisa;</li>
					<li>Melhorar a mobilidade urbana;</li>
					<li>Qualificar a vida urbana nos bairros;</li>
					<li>Orientar o crescimento da cidade nas proximidades do transporte público;</li>
					<li>Reorganizar as dinâmicas metropolitanas;</li>
					<li>Promover o desenvolvimento econômico da cidade;</li>
					<li>Incorporar a agenda ambiental ao desenvolvimento da cidade;</li>
					<li>Preservar o patrimônio e valorizar as iniciativas culturais e</li>
					<li>Fortalecer a participação popular nas decisões dos rumos da cidade.</li>
				</ol>
			</section>

			<section>
				<h3 class="titulo" indent="2">Objetivos do PIU Arco Pinheiros</h3>
				<p>A caracterização urbana do ACP está estreitamente ligada à presença dos elementos físico-territoriais de caráter metropolitano descritos. Um das especificidades do território é a existência de grandes áreas isoladas do ponto de vista territorial. Fazem parte desse quadro o conjunto formado pela USP e demais institutos (Instituto de Pesquisas Tecnológicas, Instituto de Pesquisas Energéticas e Nucleares e Instituto Butantan), as áreas industriais ativas da Zona Predominantemente Industrial (ZPI) de Presidente Altino; o Parque Tecnológico do Estado de São Paulo (Parque Tecnológico Jaguaré), ainda que incipiente; e a Ceagesp.</p>
				<p>Ou seja, aproximadamente 50% do território contem <b>grandes porções isoladas, verdadeiras ilhas desconectadas e monofuncionais</b>.</p>
				<p>De acordo com diagnóstico objeto da <a href="https://participe.gestaourbana.prefeitura.sp.gov.br/arco-pinheiros">primeira consulta pública</a>, os desequilíbrios e desigualdades também se refletem em outros aspectos do perímetro do ACP: predominam baixas densidades populacionais na maior parte do território enquanto altas densidades coincidem, predominantemente, com assentamentos precários; o índice de área verde por habitante é apropriado se considerada a referência da OMS, mas as concentrações espaciais tornam a distribuição e o acesso desiguais; faixas exclusivas de ônibus e a linha de trens metropolitano irrigam o território, mas barreiras físicas e falta de acessibilidade local tornam os trajetos não motorizados extensos e difíceis, por vezes inviáveis; predominam os usos não residenciais, responsáveis por altas taxas de emprego, mas áreas ociosas, ocupações extensivas e monofuncionalidade desqualificam o espaço urbano.</p>
				<p> Essas características são incoerentes com o modelo de cidade desejado e reiterado pelos conceitos do PIU ARCO PINHEIROS: <i>uma cidade compacta, conectada, sustentável e inclusiva, na qual seja possível aproximar o emprego da moradia por meio do adensamento planejado e orientado pelo transporte público de média e alta capacidade, onde se promova a recuperação e o resgate de seus recursos naturais, e onde se promova novas centralidades com diversidades de usos, serviços e espaços públicos seguros e ativos que favoreçam a interação social</i>.</p>
				<Galeria :gallery_attrs="galeria"></Galeria>
				<p>Desta forma, alinhado aos objetivos do PDE para a MEM, mais especificamente o Setor Orla Ferroviária e Fluvial, o PIU ARCO PINHEIROS busca promover a transformação urbana que contribua para integrar, e reforçar as sinergias entre as diferentes porções do seu território, de modo a assegurar o uso mais coerente e inteligente da cidade, de sua infraestrutura e de seus recursos. Pretende, em suma, realizar uma costura entre os diferentes usos e programas do perímetro, potencializando as sinergias decorrentes dos vínculos metropolitanos existentes, com especial atenção à vocação científica e tecnológica associada ao desenvolvimento de novas centralidades de âmbito local.</p>
				<ol class="objetivos romanos">
					<li>
						<p><b>Incremento populacional e construtivo</b> apoiado na melhoria da infraestrutura, incentivando o melhor aproveitamento da terra urbana</p>
						<div class="iconCont">
							<div class="icone">
								<span>Adensamento + transporte</span>
								<img :src="imgSrc('arquivos/arco-pinheiros-2/objetivos-icones/1.png')" alt="">
							</div>
							<div class="icone">
								<span>Combate à terra ociosa</span>
								<img :src="imgSrc('arquivos/arco-pinheiros-2/objetivos-icones/2.png')" alt="">
							</div>
						</div>
					</li>
					<li>
						<p><b>Fortalecimento dos polos econômicos</b> e de implantação de novas atividades econômicas</p>
						<div class="iconCont">
							<div class="icone">
								<span>Polos de emprego</span>
								<img :src="imgSrc('arquivos/arco-pinheiros-2/objetivos-icones/3.png')" alt="">
							</div>
						</div>
					</li>
					<li>
						<p><b>Redução da vulnerabilidade social e qualificação da moradia</b></p>
						<div class="iconCont">
							<div class="icone">
								<span>Direito à moradia</span>
								<img :src="imgSrc('arquivos/arco-pinheiros-2/objetivos-icones/4.png')" alt="">
							</div>
							<div class="icone">
								<span>HIS + equipamentos + transporte</span>
								<img :src="imgSrc('arquivos/arco-pinheiros-2/objetivos-icones/5.png')" alt="">
							</div>
						</div>
					</li>
					<li>
						<p><b>Melhoria da mobilidade</b> por meio do incentivo a mobilidade não motorizada e melhoria das conexões dos diferentes modos de transporte público, associado à qualificação do sistema de espaços públicos</p>
						<div class="iconCont">
							<div class="icone">
								<span>Articulação modais</span>
								<img :src="imgSrc('arquivos/arco-pinheiros-2/objetivos-icones/6.png')" alt="">
							</div>
						</div>
					</li>
					<li>
						<p><b>Recuperação da qualidade ambiental</b> contemplando implantação de sistema de áreas verdes, mitigação dos problemas de microdrenagem e redução das ilhas de calor</p>
						<div class="iconCont">
							<div class="icone">
								<span>Atenuação de ilhas de calor</span>
								<img :src="imgSrc('arquivos/arco-pinheiros-2/objetivos-icones/7.png')" alt="">
							</div>
							<div class="icone">
								<span>Novas áreas verdes</span>
								<img :src="imgSrc('arquivos/arco-pinheiros-2/objetivos-icones/8.png')" alt="">
							</div>
						</div>
					</li>
					<li>
						<p><b>Ampliação da oferta de equipamentos urbanos e sociais</b> dando suporte à demanda atual e futura</p>
						<div class="iconCont">
							<div class="icone">
								<span>Rede de equipamentos</span>
								<img :src="imgSrc('arquivos/arco-pinheiros-2/objetivos-icones/9.png')" alt="">
							</div>
						</div>
					</li>
					<li>
						<p>Qualificação do ambiente urbano, por meio da <b>preservação e valorização dos recursos naturais</b> e da <b>proteção e recuperação do patrimônio</b> histórico, artístico, cultural, urbanístico, arqueológico e paisagístico existente</p>
						<div class="iconCont">
							<div class="icone">
								<span>Integração e articulação de bens culturais</span>
								<img :src="imgSrc('arquivos/arco-pinheiros-2/objetivos-icones/10.png')" alt="">
							</div>
						</div>
					</li>
				</ol>
			</section>

			<section>
				<h3 class="titulo" indent="2">Vocação</h3>
				<p>O conjunto formado pelos eixos do sistema rodoviário Anhanguera/Bandeirantes, Presidente Castelo Branco e Raposo Tavares é identificado como importante vetor de urbanização da Macrometrópole Paulista e responsável por articular áreas produtivas de grande dinamismo e alto valor agregado no interior do Estado de São Paulo, tendo como vértices as cidades de Campinas, Sorocaba, Piracicaba e o próprio município de São Paulo.</p>
				<p>Alguns usos instalados no perímetro expressam claramente os efeitos positivos e negativos da presença desse vetor de urbanização, como a pujança e dinamismo da Ceagesp – principal entreposto alimentício metropolitano – a presença de importantes indústrias especializadas no setor químico-farmacêutico, de alimentos e bebidas no norte do ARCO PINHEIROS, bem como a localização de institutos e centros de ensino e pesquisa de relevância internacional, com destaque para a Universidade de São Paulo (USP). Por outro lado, são também expressivos os impactos dos fluxos macrometropolitanos no tecido urbano, que resultam na saturação do sistema viário, com a contribuição significativa da movimentação de carga, bem como a grave cisão territorial causada pelo conjunto de infraestruturas de mobilidade que atravessam o perímetro, como a ferrovia e, sobretudo, as vias expressas.</p>
				<Imagem :dados="{
					tipo: 'mapa',
					url: imgSrc('arquivos/arco-pinheiros-2/mapas/territorios-de-inovacao.png'),
					titulo: 'Territórios de inovação existentes e potenciais',
					legenda: [
						{ borda: '#713400', espessura: '3', pontilhado: true, descricao: 'AIU Arco Pinheiros' },
						{ simbolo: '', char: '1', linha: false, fundo: '', descricao: 'Universidade de São Paulo' },
						{ simbolo: '', char: '2', linha: false, fundo: '', descricao: 'Núcleo do Parque Tecnológico' },
						{ simbolo: '', char: '3', linha: false, fundo: '', descricao: 'Ceagesp' },
						{ simbolo: '', char: '4', linha: false, fundo: '', descricao: 'Instituto de Pesquisas Tecnológicas' },
						{ simbolo: '', char: '5', linha: false, fundo: '', descricao: 'Instituto de Pesquisas Energéticas e Nucleares' },
						{ simbolo: '', char: '6', linha: false, fundo: '', descricao: 'Instituto Butantan' },
						{ simbolo: '', char: '7', linha: false, fundo: '', descricao: 'ZPI Jaguaré' }
					],
					fonte: ''
				}"></Imagem>
				<p>Essa concentração de setores específicos da indústria e a presença de instituições de ensino e pesquisa também devem ser observadas à luz dos debates recentes sobre as transformações do setor produtivo paulistano. Segundo dados do Observatório do Trabalho (DIEESE e Secretaria do Desenvolvimento Econômico da PMSP), as atividades ligadas ao campo da Economia Criativa, que inclui a inovação, correspondiam em 2015 a 9,5% do total de empregos no município, uma ampliação de 52,7% em relação a 2007, frente ao incremento de 21,9% dos vínculos totais. No ACP, as atividades predominantes nesse setor correspondem à Pesquisa & Desenvolvimento – aquelas com a maior remuneração média das áreas que compõem a Economia Criativa – representando 20% dos empregos nesse segmento para todo o município (RAIS, DIEESE, 2016).</p>
				<p>A localização estratégica dos vetores produtivos, a presença de importantes instituições de ensino e pesquisa, a permanência de atividades industriais de ponta, os estímulos à Economia Criativa e à atração de agentes <i>inovativos</i> na implantação do parque tecnológico e vislumbrados na conversão da gleba da Ceagesp, bem como a presença de áreas passíveis de transformação definem parte importante dos atributos para que o ACP seja compreendido como território propício a recepcionar atividades de inovação.</p>
				<p>Identificada esta vocação, o PIU ARCO PINHEIROS alinha-se à Política de Desenvolvimento Econômico e Sustentável expressa no PDE.</p>
				<div class="colunas w992">
					<div class="cinza w100">
						<label>POLÍTICA DE DESENVOLVIMENTO ECONÔMICO SUSTENTÁVEL (Art. 175 e 176)</label>
						<ul>
							<li>Reforçar o papel do Município como centro industrial, comercial, de serviços, de conhecimento, de criação e inovação</li>
							<li>Investir em infraestrutura para minimizar as deseconomias de aglomeração presentes no Município</li>
							<li>Proteger as áreas industriais em funcionamento e estimular sua expansão</li>
							<li>Potencializar a capacidade criativa, o conhecimento científico e tecnológico e a inovação</li>
						</ul>
					</div>
					<div class="laranja w50">
						<label>POLOS ECONOMIA CRIATIVA (Art. 182)</label>
						<ul>
							<li>Fomentar a diversidade cultural e o potencial criativo e inovador, o desenvolvimento humano, a inclusão social e a sustentabilidade</li>
							<li>Estimular a formação e o desenvolvimento de outros distritos criativos</li>
							<li>Estimular o setor empresarial a valorizar seus ativos criativos e inovadores com a finalidade de promover a competitividade</li>
						</ul>
					</div>
					<div class="laranja w50">
						<label>PARQUES TECNOLÓGICOS (Art. 187)</label>
						<ul>
							<li>Concentrar em áreas estratégicas empresas e instituições voltadas às atividades de pesquisa, desenvolvimento e inovação</li>
							<li>Criar novas oportunidades de negócios e fomentar o empreendedorismo e incubar novas empresas inovadoras</li>
							<li>Aumentar a sinergia entre instituições de ciência e tecnologia e empresas</li>
							<li>Construir espaços atraentes para profissionais do conhecimento emergente</li>
						</ul>
					</div>
				</div>
				<p>De forma específica, o Art. 188 do PDE demarca no território do ACP a AIU Parque Tecnológico do Jaguaré, em parte coincidente com a ZDE existente, além de apontar a necessidade de sua integração com o PIU ARCO PINHEIROS.</p>
				<p>No entanto, romper o isolamento é essencial para que se atualize a forma de fomento às atividades de inovação. Do ponto de vista urbanístico, os conceitos recentes sobre inovação reiteram o protagonismo do território no sentido de estimular as relações de cooperação, concorrência e interação entre os múltiplos agentes envolvidos, de forma a possibilitar a consolidação de redes de interação. Nesse contexto, a inovação deixa de ser compreendida como algo linear e restrita ao momento de se lançar uma ideia ou serviço no mercado, e passa a ser encarada como um processo mais complexo, no qual sua eficácia reside na capacidade desses agentes estabelecerem relações e interações variadas, mobilizando e conhecimento e estabelecendo relações de aprendizagem que ocorrem muitas vezes externas às empresas<sup>1</sup>.</p>
				<p>Desse ponto de vista, o território é um suporte fundamental para promover a interação entre os agentes, pois possibilita trocas essenciais para efetivar o chamado transbordamento de conhecimento, a estruturação de novos negócios e a construção de um ambiente dinâmico do ponto de vista produtivo, vantagens evidentes de economias de aglomeração. Para efetivar tais propósitos, são necessários determinados atributos, em parte existentes no ACP – como a presença de mão de obra qualificada e a existência de redes científicas e profissionais – e outros que ainda devem ser complementados, como a ampliação de serviços de qualidade e a atratividade do ambiente urbano.</p>
				<p>A presença de agentes <i>inovativos</i>, como colocado anteriormente, e o desafio de incorporar novos atributos ao território são elementos que se desdobram em ações físico-territoriais e em políticas de desenvolvimento urbano no PIU ARCO PINHEIROS. Foram resumidas no quadro a seguir as principais condicionantes necessárias para formulação dos territórios de inovação, dentro das quais estão detalhados atributos fundamentais para melhoria da atratividade do ambiente urbano. Dentro do escopo apresentado, merecem destaque as ações de mobilidade urbana – todas previstas no programa de intervenções – bem como o incentivo à habitação, comércio, serviços e áreas livres qualificadas, demonstrando que as atividades de inovação necessitam estar integradas a bairros de uso misto e com diversidade social.</p>
				<div class="colunas">
					<div class="cinza w25">
						<label>EXISTENTE</label>
						<ul>
							<li class="destaque">UNIVERSIDADE</li>
							<li class="destaque">INDÚSTRIA</li>
							<li class="destaque">TERRA DISPONÍVEL</li>
						</ul>
					</div>
					<div class="cinza w25">
						<label>VOCAÇÃO</label>
						<ul>
							<li class="destaque">TERRITÓRIO DE INOVAÇÃO</li>
						</ul>
					</div>
					<div class="cinza w25">
						<label>CONDICIONANTES</label>
						<ul class="laranja pont">
							<li>
								<b>URBANIDADE</b>
								<p>DIVERSIDADE, ESPAÇOS DE ENCONTRO</p>
							</li>
							<li>
								<b>MOBILIDADE</b>
								<p>TRANSPORTE PÚBLICO DE MÉDIA OU ALTA CAPACIDADE, CAMINHABILIDADE</p>
							</li>
							<li>
								<b>COOPERAÇÃO</b>
								<p>UNIVERSIDADE, GOVERNO, EMPRESAS</p>
							</li>
						</ul>
						<div class="obs">TECNOLOGIA, TALENTO E TOLERÂNCIA</div>
					</div>
					<div class="cinza w25">
						<label>O QUE FALTA?</label>
						<ul>
							<li>
								<ul>
									<li>Habitação (diversidade)</li>
									<li>Comércio e serviços de âmbito local</li>
									<li>Equipamentos públicos</li>
									<li>Praças</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>Conexão entre modais</li>
									<li>Abertura de novas vias</li>
									<li>Passeios qualificados e confortáveis (amplos, seguros, sombreados)</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>Adequação do instrumento urbanístico à política urbana (PDE Art. 187 188)</li>
									<li>Gestão coordenada</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<ol class="decimais notas">
					<caption>Notas</caption>
					<li>TUNES, Regina. <i>Geografia da Inovação. Território e Inovação no Brasil no século XXI</i>. Tese (Doutorado em Geografia Humana), Faculdade de Filosofia, Letras e Ciências Humanas da Universidade de São Paulo. São Paulo, 2015.</li>
				</ol>
			</section>
		</section>

		<section>
			<h2 class="titulo" indent="1">Proposta urbanística</h2>

			<section>
				<h3 class="titulo" indent="2">Conceito e Estratégia</h3>
				<Imagem :dados="{
					tipo: 'mapa',
					titulo: '',
					url: imgSrc('arquivos/arco-pinheiros-2/mapas/conceito-e-estrategia.png'),
					legenda: [
						{ simbolo: '', linha: false, fundo: '#519000', descricao: 'Rede ambiental' },
						{ simbolo: '', linha: false, fundo: '#00a9bf', descricao: 'Rede hídrica principal' },
						{ simbolo: '', linha: true, fundo: '#000000', descricao: 'Corredores de ônibus' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa2_ferrovias.png'), linha: false, fundo: '', descricao: 'Ferrovias' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa2_marginais.png'), linha: false, fundo: '', descricao: 'Sistema viário (marginais)' },
						{ simbolo: '', linha: false, fundo: '#ff0100', descricao: 'Travessias' },
						{ simbolo: '', linha: false, fundo: '#b1abc0', descricao: 'Zona Predominantemente Industrial (ZPI)' },
						{ simbolo: '', linha: false, fundo: '#d1b7c0', descricao: 'Zona de Desenvolvimento Econômico (ZDE)' },
						{ simbolo: '', linha: false, fundo: '#c04b4b', descricao: 'Áreas de intensificação do uso do solo' },
						{ simbolo: '', linha: false, fundo: '#ffac00', descricao: 'Territórios de integração' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa2_conexoespropostas.png'), linha: false, fundo: '', descricao: 'Principais conexões viárias propostas' },
						{ simbolo: '', linha: false, fundo: '#a5ae8a', descricao: 'Cidade Universitária' }
					]
				}">
				</Imagem>
				<p>Realizados os diagnósticos territorial e ambiental e considerando o programa de interesse público formulado para o PIU e apresentado na consulta pública anterior, dois conceitos se mostraram de grande importância:</p>
				<ul>
					<li>o incentivo à transformação de áreas subutilizadas, por meio da promoção de novas áreas de alta e média densidade, acompanhadas de intervenções de qualificação ambiental e recuperação de assentamentos precários;</li>
					<li>o fortalecimento da microacessibilidade, conectando áreas isoladas, de forma a romper barreiras formadas pelos grandes lotes e pelas infraestruturas existentes.</li>
				</ul>
				<p>À luz desses conceitos e com o objetivo de atender aos objetivos do PDE para a Macroárea de Estruturação Metropolitana, o PIU propõe uma redistribuição das áreas de adensamento populacional e construtivo em função da disponibilidade de áreas passíveis de transformação e da previsão de ampliação da infraestrutura de mobilidade, considerando a implantação de novos corredores de ônibus, as ciclopassarelas que conectam as estações da CPTM e a abertura de novas vias, ações fundamentais para aumentar a conectividade e reduzir as distâncias para o pedestre.</p>
				<p>As áreas prioritárias para receber o adensamento construtivo e populacional são concentradas principalmente em duas regiões: no Distrito da Vila Leopoldina, distribuem-se na Ceagesp e seu entorno, nas quadras lindeiras à Av. Gastão Vidigal, ao longo da Rua Hassib Mofarrej e no perímetro do PIU Vila Leopoldina-Villa Lobos (PIU-VLVL); na Zona de Desenvolvimento Econômico (ZDE) do Jaguaré é indicada uma nova centralidade de uso misto, utilizando as grandes quadras no cruzamento entre a Av. Jaguaré e a Av. Kenkiti Simomoto.</p>
				<p>Além dos trechos de alta densidade, o projeto também identifica a importância das áreas produtivas existentes, sobretudo no Jaguaré. A Zona Predominantemente Industrial (ZPI) existente conta com atividades de alto valor agregado, grande oferta de emprego e com médias salariais elevadas, ou seja, deverá ser mantida e valorizada.</p>
				<p>Já a Zona de Desenvolvimento Econômico (ZDE), apesar da presença incipiente de atividades produtivas, decorrente de um processo de transformação interrompido proporcionado pela classificação da área anteriormente como Zona Mista (Lei n°13.885/2004), e da previsão de desenvolvimento de um Parque Tecnológico, ainda encontra-se estagnada, razão pela qual o PIU prevê diretrizes para sua transformação gradual, incluindo a nova centralidade urbana, sem perder de vista a vocação da área para recepcionar novas atividades produtivas.</p>
				<p>Para as demais áreas do PIU ARCO PINHEIROS foram previstos parâmetros urbanísticos em função das especificidades de uso e ocupação do solo existentes, resultando, em linhas gerais: em trechos de ocupação predominantemente consolidada e para os quais se adotam densidades moderadas, como as Zonas Mistas (ZM) no Jaguaré e as quadras ao longo da Av. Imperatriz Leopoldina e da Rua Guaipá; em áreas com grande diversidade de uso e com horizonte de transformação dos usos industriais para bairros de uso misto de média densidade, como a região do Jardim Humaitá.</p>
				<p>Em relação aos instrumentos de implantação do plano, o PIU ARCO PINHEIROS indica uma única <b>Área de Intervenção Urbana (AIU)</b>. Definida pelo art. 145, § 3°, do PDE, a AIU consiste em porções do território nas quais se pretende conduzir processos de remodelagem e reestruturação urbana, econômica, social e ambiental. Elaborada pelo Poder Público, com gestão participativa e regulamentada por lei específica, os recursos arrecadados no perímetro de uma AIU devem permanecer em conta segregada no Fundo de Desenvolvimento Urbano (FUNDURB), de forma a atrelar os valores originados da venda de potencial construtivo adicional, mediante Outorga Onerosa do Direito de Construir, ao programa de intervenções proposto pelo PIU.</p>
				<div class="card-pde">
					<div class="title">Área de Intervenção Urbana (AIU)</div>
					<p>Porções de território destinadas à reestruturação, transformação, recuperação e melhoria ambiental.</p>
					<ul>
						<li>Ocupação mais intensa, qualificada, inclusiva do espaço urbano</li>
						<li>Desenvolvimento econômico</li>
						<li>Racionalização da infraestrutura</li>
						<li>Destinação mínima de <b>25%</b> dos recursos para <b>Habitação de Interesse Social</b></li>
						<li>Preservação dos sistemas ambientais</li>
					</ul>
					<div class="iconCont">
						<div class="icone">
							<img :src="imgSrc('arquivos/arco-pinheiros-2/cards-pde/aiu-1.png')" alt="">
							<div>ELABORADO PELO PODER PÚBLICO</div>
						</div>
						<span>&#10140;</span>
						<div class="icone">
							<img :src="imgSrc('arquivos/arco-pinheiros-2/cards-pde/aiu-2.png')" alt="">
							<div>COM GESTÃO PARTICIPATIVA</div>
						</div>
					</div>
					<img :src="imgSrc('arquivos/arco-pinheiros-2/cards-pde/aiu-ilust.png')" alt="">
				</div>
				<Imagem :dados="{
					tipo: 'mapa',
					titulo: 'Área de Intervenção Urbana',
					url: imgSrc('arquivos/arco-pinheiros-2/mapas/aiu.png'),
					legenda: [
						{ fundo: '#EEC4A4', borda: '#DD8949', espessura: '2', descricao: 'Área de Intervenção Urbana Arco Pinheiros' },
						{ fundo: '#D3C6A4', borda: '#BBA25E', espessura: '2', descricao: 'Área de Intervenção Urbana Vila Leopoldina-Villa Lobos' },
						{ simbolo: '', linha: false, fundo: '', borda: '#000', espessura: '2', descricao: 'Perímetro Arco Pinheiros' },
						{ simbolo: '', linha: false, fundo: '', borda: '#aaa', espessura: '1', descricao: 'Perímetros municípios' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa3_ferrovias.png'), linha: false, fundo: '', descricao: 'Ferrovia' },
						{ simbolo: '', linha: false, fundo: '#bbcca8', descricao: 'Praças e canteiros' },
						{ simbolo: '', linha: false, fundo: '#85b1be', descricao: 'Hidrografia' },
						{ simbolo: '', linha: false, fundo: '#d3d3d3', descricao: 'Quadra viária' }
					]
				}">
					<template slot="extra">
						<a href="" class="button">Acesse o mapa interativo <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
					</template>
				</Imagem>
				<p>Além disso, o Art. 188 do PDE demarca dentro do Arco Pinheiros a AIU Parque Tecnológico do Jaguaré e exige sua integração com o PIU ARCO PINHEIROS. Como resposta a essa premissa, o PIU incorpora o perímetro da AIU Parque Tecnológico do Jaguaré à AIU ARCO PINHEIROS, mantendo os objetivos dispostos no Art. 187 do PDE e compreendendo a necessidade de se compartilhar recursos e intervenções na construção de um projeto coeso para todo o perímetro do Arco Pinheiros.</p>
				<p>Duas áreas permanecerão fora da AIU Arco Pinheiros: a Cidade Universitária e o recorte do PIU Vila Leopoldina-Villa Lobos (PIU-VLVL).</p>
				<p>No primeiro caso, diversas diretrizes previstas no Plano Diretor da Cidade Universitária “Armando Salles Oliveira” de 2013, são compartilhadas pelo PIU, como a preservação da qualidade ambiental da área e a integração com os sistemas de transporte público de alta capacidade no entorno. Considerando também a demanda por regularização municipal das construções existentes no Campus, o PIU propõe adotar para a ZOE os parâmetros de uso e ocupação do solo indicados no Plano Diretor da Cidade Universitária. Como se trata de uma área extensa, com governança própria, vasto potencial construtivo, o PIU ARCO PINHEIROS opta por não incluí-la na AIU ARCO PINHEIROS, apesar de apresentar propostas de conexão com o entorno.</p>
				<p>No segundo caso, o PIU-VLVL deriva de Manifestação de Interesse Privado (MIP) protocolada em 2016, cujo desenvolvimento encontra-se em estágio avançado, incluindo processo de diálogo com a sociedade. A AIU Vila Leopoldina-Villa Lobos prevê um Programa de Interesse Público e um conjunto de intervenções e parâmetros de adensamento coerente com as disposições da AIU ARCO PINHEIROS.</p>
				<p>Além disso, a criação da AIU Vila Leopoldina-Villa Lobos justifica-se em função das estratégias de venda de potencial construtivo adicional e sua articulação com o atendimento habitacional e demais propostas de qualificação urbanísticas previstas para o perímetro. Cabe também ressaltar que, do ponto de vista das estratégias de implantação do programa de intervenções previsto para o Arco Pinheiros, o desenvolvimento urbano e imobiliário de um recorte menor, como o proposto no PIU-VLVL, é encarado como uma forma de impulsionar a transformação prevista no vasto território do Arco Pinheiros.</p>
			</section>

			<section>
				<h3 class="titulo" indent="2">Programa de intervenção</h3>
				<Imagem :dados="{
					tipo: 'mapa',
					titulo: 'Programa de intervencões',
					url: imgSrc('arquivos/arco-pinheiros-2/mapas/programa-de-intervencoes.png'),
					legenda: [
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone1.png'), linha: false, fundo: '', descricao: 'Intervenção integrada em assentamentos precários' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone2.png'), linha: false, fundo: '', descricao: 'Provisão de moradias' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone3.png'), linha: false, fundo: '', descricao: 'Áreas potenciais de cota de solidariedade' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone4.png'), linha: false, fundo: '', descricao: 'Novos equipamentos' },
						{ simbolo: '', linha: false, fundo: '#7b9a56', descricao: 'Praças novas' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone14.png'), linha: false, fundo: '', descricao: 'Requalificação de praças existentes' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone5.png'), linha: false, fundo: '', descricao: 'Caminhos verdes' },
						{ simbolo: '', linha: true, fundo: '#609c87', descricao: 'Trincheiras de infiltração' },
						{ simbolo: '', linha: true, fundo: '#6ee5bd', descricao: 'Galerias de drenagem' },
						{ simbolo: '', linha: true, fundo: '#f3b047', descricao: 'Abertura de novo viário e alargamento de viário existente' },
						{ simbolo: '', linha: true, fundo: '#ebd1b1', descricao: 'Requalificação de viário existente' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone15.png'), linha: false, fundo: '', descricao: 'Melhoria dos passeios existentes' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone6.png'), linha: false, fundo: '', descricao: 'Ponte nova' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone7.png'), linha: false, fundo: '', descricao: 'Passagem sub. de veículos e pedestres' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone8.png'), linha: false, fundo: '', descricao: 'Ciclopassarela' },
						{ simbolo: '', linha: true, fundo: '#db122c', descricao: 'Ciclovia e ciclofaixa' },
						{ simbolo: '', linha: false, fundo: '#e8d4ba', borda: '#4a1d0f', espessura: '2', descricao: 'AEL São Remo' },
						{ simbolo: '', linha: false, fundo: '#e8d4ba', borda: '#4a1d0f', espessura: '2', descricao: 'AEL Humaitá' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone9.png'), linha: false, fundo: '', descricao: 'ZEIS 1' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone10.png'), linha: false, fundo: '', descricao: 'ZEIS 2' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone11.png'), linha: false, fundo: '', descricao: 'ZEIS 3' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone12.png'), linha: false, fundo: '', descricao: 'ZEIS 5' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa4_icone13.png'), linha: false, fundo: '', descricao: 'Ferrovia' },
						{ simbolo: '', linha: false, fundo: '#bbcca8', descricao: 'Praças e canteiros' },
						{ simbolo: '', linha: false, fundo: '#85b1be', descricao: 'Hidrografia' },
						{ simbolo: '', linha: false, fundo: '#d3d3d3', descricao: 'Quadra viária' }
					]
				}">
					<template slot="extra">
						<a href="" class="button">Acesse o mapa interativo <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
					</template>
				</Imagem>
				<p>O Programa de Intervenções compreende um conjunto indicativo de projetos e obras que deverá ser desenvolvido para o perímetro, tendo como meta a consolidação das diretrizes do PIU em ações concretas, de forma a garantir a qualificação urbanística dos bairros e a implantação de infraestrutura de suporte para transformação pretendida.</p>
				<p>As intervenções foram agrupadas em 5 diferentes eixos temáticos, que funcionam de forma integrada: rede de mobilidade, rede de espaços públicos, rede hídrica, habitação e equipamentos públicos. Para cada eixo temático, foram definidas ferramentas padronizadas, com estimativas prévias de quantidades e custos de implantação que orientaram a modelagem econômica do PIU.</p>
				<p>Importante destacar que as ferramentas foram dimensionadas na escala de planejamento urbano, ou seja, cada intervenção deverá ser detalhada no futuro, no momento de implantação. Ademais, a prioridade de implantação deverá ser definida pelo Grupo Gestor da AIU Arco Pinheiros instruídas pelos Planos de Ação Integrada, conjuntos de intervenções públicas, selecionadas do Programa de Intervenções do ACJ, estruturados de forma consolidada e hierarquizada, direcionados a uma parcela definida do território ou à solução de um problema específico.</p>
				<p>As ferramentas organizam-se da seguinte forma:</p>
				<ul>
					<li>
						<p><b>Rede de mobilidade</b>: contempla propostas de abertura de novas vias, alargamento e requalificação de viário existente, ampliação e melhoria de passeios públicos, complementação da rede cicloviária e transposições sobre/sob o rio ou ferrovia;</p>
					</li>
					<li>
						<p><b>Rede de espaços públicos</b>: consiste na implantação de novas praças, na requalificação de praças existentes e na arborização e implantação de mobiliário urbano associado ao sistema viário, conformando os chamados “caminhos verdes”;</p>
					</li>
					<li>
						<p><b>Rede hídrica</b>: proposta de novas áreas de absorção e retenção mediante a implantação de trincheiras de infiltração. Foram também prevista a complementação de galerias de drenagem em locais específicos.</p>
					</li>
					<li>
						<p><b>Habitação</b>: O PIU ARCO PINHEIROS com objetivo de promover soluções para a provisão de habitação de interesse social para população de baixa renda, residente na AIU ARCO PINHEIROS deverá contemplar em seu programa habitacional o atendimento às famílias atingidas pela implantação do seu programa de intervenções, às famílias que se encontram em bolsa aluguel oriundas de seu perímetro, e às famílias dos assentamentos precários atingidas quando da implantação dos projetos das AEL.</p>
						<p>Importante lembrar que o PIU VLVL contempla o atendimento de 796 famílias (Favela da Linha, Favela do Nove e Ocupação do Conjunto Madeirite) sendo que o atendimento de 325 famílias está condicionado à venda de potencial construtivo a ser realizado no perímetro da AIU ARCO PINHEIROS.</p>
						<p>
							As ações de provisão do Programa Habitacional do PIU ARCO PINHEIROS contemplam dos seguintes eixos de abordagem:
							<ul>
								<li>realização das <a href="">AEL Humaitá e São Remo</a></li>
								<li>obrigatoriedade de cumprimento da cota de solidariedade nos perímetros dos territórios de inovação, mais especificamente <a href="">Ceagesp e Centralidade do Jaguaré</a></li>
							</ul>
						</p>
					</li>
					<li>
						<p><b>Equipamentos públicos</b>: prevê verba para implantação de novos equipamentos, podendo ser localizados tanto em áreas públicas existentes quanto em áreas institucionais derivadas do parcelamento de glebas.</p>
					</li>
				</ul>

			</section>

			<section>
				<h3 class="titulo" indent="2">Parâmetros urbanísticos</h3>
				<Imagem :dados="{
					tipo: 'mapa',
					titulo: 'Parâmetros urbanísticos',
					url: imgSrc('arquivos/arco-pinheiros-2/mapas/parametros.png'),
					legenda: [
						{ fundo: '#B1948D', borda: '#783E2F', descricao: 'Área de Transformação T1' },
						{ fundo: '#C5B0A0', borda: '#A07656', descricao: 'Área de Transformação T3' },
						{ fundo: '#E2C983', borda: '#D9A71C', descricao: 'Área de Qualificação Q1' },
						{ fundo: '#F0E29E', borda: '#F5DA51', descricao: 'Área de Qualificação Q2' },
						{ fundo: '#EDE8C8', borda: '#EFE6A5', descricao: 'Área de Qualificação Q3' },
						{ fundo: '#E4C8D5', borda: '#DEA6C0', descricao: 'Área de Preservação P2' },
						{ fundo: '#F5EBEF', borda: '#F5EBEF', descricao: 'Área de Preservação P3' },
						{ borda: '#000', descricao: 'Perímetro Arco Pinheiros ' }
					]
				}">
					<template slot="extra">
						<a href="" class="button">Acesse o mapa interativo <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
					</template>
				</Imagem>
				<p>A proposta de parâmetros urbanísticos para a AIU ARCO PINHEIROS, de forma similar aos conceitos utilizados na Lei de Parcelamento, Uso e Ocupação do Solo (LPUOS, Lei nº 16.402 de 2016), parte de perímetros de intervenção categorizados em <b>Áreas de Transformação</b>, <b>Áreas de Qualificação</b> e <b>Áreas de Preservação</b>.</p>
				<p>As <b>Áreas de Transformação</b> caracterizam-se pela baixa consolidação dos usos e ocupação do solo e por sua articulação à rede de transporte coletivo existente e planejada, condições que permitem intensificar as densidades construtivas e populacionais. Objetiva-se, além do adensamento, a promoção do uso misto e da qualidade dos espaços públicos, de forma a adequar o uso do solo à oferta de transporte público coletivo.</p>
				<p>Com maior grau de consolidação dos usos e ocupação do solo, as <b>Áreas de Qualificação</b> destinam-se a abrigar densidades construtivas e populacionais médias e baixas. Objetiva-se, a depender da localidade, a manutenção de usos não residenciais existentes, o fomento às atividades produtivas e a diversificação de usos.</p>
				<p>Já para as <b>Áreas de Preservação</b> se espera a manutenção de baixos índices de ocupação, a valorização das áreas verdes e a preservação de trechos de bairros consolidados de baixa e média densidade.</p>
				<p>As Áreas foram subdivididas em função do Coeficiente de Aproveitamento Máximo e dos gabaritos máximos. Combinados, os parâmetros são responsáveis por conformar o desenho de paisagem desejado para o Arco Pinheiros, bem como distribuir o potencial construtivo e o adensamento populacional priorizando as áreas com alto grau de transformação e vinculadas à infraestrutura de transporte de massa – premissa fundamental do PDE. Os empreendimentos em ZEIS, entretanto, deverão respeitar somente os parâmetros de gabarito de altura máxima das edificações definidos para as Áreas em que estão inseridos, sendo que o Coeficiente de Aproveitamento Máximo deverá seguir o que consta na LPUOS, devendo também ser observada a disciplina constante de decretos específicos.</p>
			</section>

			<section>
				<h3 class="titulo" indent="2">Perímetros de atuação especial</h3>

				<section>
					<h4 class="titulo" indent="3">Territórios de integração</h4>
					<Imagem :dados="{
						tipo: 'mapa',
						titulo: 'Territórios de integração',
						url: imgSrc('arquivos/arco-pinheiros-2/mapas/territorios-de-integracao.png'),
						legenda: [
							{ simbolo: '', linha: false, fundo: '#7b5141', borda: '', descricao: 'CA: 4, Gabarito máximo de altura: sem limite' },
							{ simbolo: '', linha: false, fundo: '#dac665', borda: '', descricao: 'CA: 2, Gabarito máximo de altura: 28m' },
							{ simbolo: '', linha: false, fundo: '#cfa1b6', borda: '', descricao: 'CA: 1, Gabarito máximo de altura: 15m' },
							{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa6_icone1.png'), linha: false, fundo: '', borda: '', descricao: 'CA: não definido, Gabarito máximo de altura: sem limite' },
							{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa6_icone2.png'), linha: false, fundo: '', borda: '', descricao: 'CA: não definido, Gabarito máximo de altura: 28m' },
							{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa6_icone3.png'), linha: false, fundo: '', borda: '', descricao: 'CA: não definido, Gabarito máximo de altura: 15m' },
							{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa6_icone4.png'), linha: false, fundo: '', borda: '', descricao: 'Áreas verdes oriundas de destinação' },
							{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa6_icone5.png'), linha: false, fundo: '', borda: '', descricao: 'Alinhamento viário PIU ACP' },
							{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa6_icone6.png'), linha: false, fundo: '', borda: '', descricao: 'Diretrizes viárias PIU ACP' },
							{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa6_icone7.png'), linha: false, fundo: '', borda: '', descricao: 'Conexões promovidas' },
							{ simbolo: '', char: 'A1', linha: false, fundo: '', borda: '', descricao: 'Setor Oeste' },
							{ simbolo: '', char: 'A2', linha: false, fundo: '', borda: '', descricao: 'Setor Central' },
							{ simbolo: '', char: 'A3', linha: false, fundo: '', borda: '', descricao: 'Setor Oeste' },
							{ simbolo: '', char: 'A4', linha: false, fundo: '', borda: '', descricao: 'Setor Gastão Vidigal' },
							{ simbolo: '', char: 'A5', linha: false, fundo: '', borda: '', descricao: 'Setor ZEIS-5' },
							{ simbolo: '', char: 'A6', linha: false, fundo: '', borda: '', descricao: 'Núcleo do Parque Tecnológico' },
							{ simbolo: '', char: 'A7', linha: false, fundo: '', borda: '', descricao: 'Frente do Rio Pinheiros Quadra 1' },
							{ simbolo: '', char: 'A8', linha: false, fundo: '', borda: '', descricao: 'Frente do Rio Pinheiros Quadra 2' },
							{ simbolo: '', char: 'A9', linha: false, fundo: '', borda: '', descricao: 'Frente do Rio Pinheiros Quadra 3' },
							{ simbolo: '', char: 'A10', linha: false, fundo: '', borda: '', descricao: 'Alexandre Mackenzie' },
							{ simbolo: '', char: 'A11', linha: false, fundo: '', borda: '', descricao: 'Centralidade Jaguaré Quadra 1' },
							{ simbolo: '', char: 'A12', linha: false, fundo: '', borda: '', descricao: 'Centralidade Jaguaré Quadra 2' },
							{ simbolo: '', char: 'A13', linha: false, fundo: '', borda: '', descricao: 'Centralidade Jaguaré Quadra 3 - ZOE' },
							{ simbolo: '', char: 'A14', linha: false, fundo: '', borda: '', descricao: 'Centralidade Jaguaré Quadra 4' },
							{ simbolo: '', char: 'C1', linha: false, fundo: '', borda: '', descricao: 'Conexão com Estação Villa-Lobos/Jaguaré' },
							{ simbolo: '', char: 'C2', linha: false, fundo: '', borda: '', descricao: 'Conexão com ciclopassarela proposta' },
							{ simbolo: '', char: 'C3', linha: false, fundo: '', borda: '', descricao: 'Conexão com PIU Vila Leopoldina Villa-Lobos' },
							{ simbolo: '', char: 'C4', linha: false, fundo: '', borda: '', descricao: 'Conexão com ponte proposta' },
							{ simbolo: '', char: 'C5', linha: false, fundo: '', borda: '', descricao: 'Conexão com pavilhão central Ceagesp' },
							{ simbolo: '', char: 'C6', linha: false, fundo: '', borda: '', descricao: 'Conexão com ciclopassarela proposta' },
							{ simbolo: '', char: 'C7', linha: false, fundo: '', borda: '', descricao: 'Conexão com Estação Ceasa' }
						]
					}"></Imagem>
					<p>Uma importante proposta do PIU para viabilizar a vocação de ambiente de inovação consiste na demarcação dos chamados <b>Territórios de Integração</b>, formado pelas quadras lindeiras ao Rio Pinheiros, que deverão acomodar as novas travessias previstas no Programa de Intervenções, e por grandes áreas transformáveis que exigem projetos urbanos específicos, como é o caso da Ceagesp.</p>
					<p>Os Territórios de Integração tem como premissa superar o isolamento entre as áreas, abrindo caminhos para maior diversidade de usos, a valorização dos espaços de encontro, dos recursos ambientais e da alta acessibilidade promovida pelo transporte público existente. Sobrepostos à AIU Arco Pinheiros, consistem em quadras ou glebas que apresentam grande diversidade de ocupação do solo e organização fundiária, alternando terras públicas e privadas.</p>
					<p>Como tais áreas não são, em sua maioria, propriedades do Município, o PIU estabelece incentivos e diretrizes para que os proprietários, sejam eles públicos ou privados, se articulem e promovam as transformações indicadas. Um dos recursos que poderão ser utilizados é o Reparcelamento Urbanístico Integrado, conforme previsto no Art. nº 134 do PDE, que se baseia na unificação dos terrenos para posterior parcelamento. O parcelamento garante a destinação de áreas públicas fundamentais para acomodar as novas infraestruturas de travessia, recuperar as Áreas de Preservação Permanente (APP) e oferecer áreas livres com qualidade urbana e ambiental.</p>
					<p>Os incentivos à adesão dos proprietários às diretrizes do Território de Integração, calibrados em cada caso, consistem no aumento do limite de gabarito, a permissão do uso residencial vertical, a aplicação de ferramentas previstas pelo zoneamento para os Eixos de Estruturação da Transformação Urbana (fachada ativa, ao uso misto e fruição pública), e a possibilidade de majoração do potencial construtivo, atrelado às contrapartidas em melhorias do espaço público.</p>
					<p>As propostas para o Território de Integração podem ser divididas nos seguintes grupos, divididos de acordo com seus incentivos e exigências:</p>

					<section>
						<h5 class="titulo" indent="4">Frente urbana do Rio Pinheiros e Núcleo do Parque Tecnológico</h5>
						<p>São quadras localizadas ao longo do Rio Pinheiros, várias compostas por lotes de geometria irregular de difícil ocupação, ou então por grandes lotes hoje ocupados por usos extensivos e de baixa densidade construtiva, que não promovem usos ativos para as vias públicas.</p>
						<p>Para as áreas 2, 3 e 4, a adesão ao Reparcelamento Urbanístico Integrado garante a implantação de áreas livres junto às ciclopassarelas e a ponte prevista no prolongamento da Av. José Maria da Silva, de forma a acomodar o impacto dos desníveis decorrentes das rampas de acesso. Pretendem, ainda, delimitar novas faixas de área verde junto a Marginal, estabelecendo percursos contínuos para o pedestre e garantindo a existência de terras públicas que poderão, a longo prazo, qualificar o leito menor do Rio Pinheiros. Também estão dispostas para essas áreas diretrizes de conexão viárias, mediante novos alinhamentos desenhados em lei, ou por indicação de ligações viárias.</p>
						<p>Já em relação ao Núcleo do Parque Tecnológico (área 1) , trata-se de propriedades do Governo do Estado de São Paulo, USP e Sabesp, com ocupação extremamente baixa e onde se localizam a Agência USP de Inovação e o edifício sede do Parque Tecnológico do Estado de São Paulo, abrigando a Investe São Paulo e a Secretaria Estadual de Desenvolvimento Econômico, Ciência, Tecnologia e Inovação.</p>
						<p>O PIU ARCO PINHEIROS compreende a área 1 como uma possível âncora do processo de transformação urbana no Jaguaré, abrigando usos e atividades ligadas à inovação. A transformação viabiliza a implantação de áreas verdes públicas, a continuidade da Av. Mal. Mario Guedes, prevista no Programa de Intervenções, bem como a instalação de empresas e instituições de pesquisa, compartilhando áreas livres qualificadas e atividades complementares de comércio e serviços, de forma a consolidar uma nova frente ativa na Av. Politécnica, iniciando o processo de integração do território da  Cidade Universitária à cidade.</p>
					</section>

					<section>
						<h5 class="titulo" indent="4">Ceagesp</h5>
						<p>A possibilidade de transferência da Ceagesp, disposta no Art. 159 da Lei de Parcelamento, Uso e Ocupação do Solo, impõe a necessidade de desenvolvimento de um PIU específico para a área, por meio do qual serão definidos os parâmetros urbanísticos para a Zona de Ocupação Especial (ZOE Cesgaesp).</p>
						<p>Para garantir a coerência entre o PIU ARCO PINHEIROS e o futuro projeto urbano para a ZOE Ceagesp, optou-se por trazer desde já os parâmetros urbanísticos requeridos, somados às diretrizes urbanísticas que serão obrigatoriamente observadas no momento de detalhamento de projeto urbano específico para a área.</p>
						<p>A proposta apresentada no PIU ARCO PINHEIROS considera o debate em curso promovido pela Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP) que, por meio da FIPE, está desenvolvendo um extenso estudo a respeito da implantação de ambientes de inovação e criatividade – com foco na atração e desenvolvimento das indústrias criativas e atividades intensivas em inovação.</p>
						<p>As diretrizes foram desenhadas para que cumpram os requisitos básicos de um ambiente de inovação: a oferta de moradia com mistura de renda, áreas verdes e espaços públicos qualificados, presença de comércio, serviços e equipamentos públicos, valorização da mobilidade e acessibilidade promovida pelo transporte público e, principalmente, a integração do distrito de inovação com a dinâmica da cidade.</p>
						<p>Além da reativação das vias públicas existentes e hoje cedidas à Ceagesp, foram indicadas as conexões viárias consideradas fundamentais para integração com a malha urbana do entorno: a ligação entre a futura ponte e a Av. Dr. Gastão Vidigal, a ligação entre as Ruas Bruno Bauer e Japiaçu e a extensão da Rua Othão, da Av. José César de Oliveira, bem como da futura rua prevista no PIU Vila Leopoldina-Villa Lobos.</p>
						<p>Essas diretrizes viárias mínimas definem 5 setores – diferentes unidades de projeto – que serão obrigados a adotar o Reparcelamento Urbanístico Integrado. Pretende-se, assim, evitar projetos fragmentados a partir dos lotes hoje existentes, bem como garantir que áreas verdes e institucionais sejam distribuídas formando uma rede que dialoga com o entorno.</p>
						<p>Em relação ao gabarito, o PIU indica duas faixas com restrição de altura: a primeira é fixa e localiza-se no entorno imediato do Pavilhão Central, com limite máximo de 15 metros; a segunda faixa é móvel, tem cerca de 280 metros de largura, localiza-se entre a Av. Gastão Vidigal e a Av. Nações Unidas, e tem limite de altura máxima de 28 metros. Tais restrições têm dois objetivos: primeiro, valorizar o Pavilhão como elemento marcante na paisagem e, segundo, construir uma área de transição, com densidade construtiva menor, entre as extremidades de ocupação mais intensa (de um lado, o entorno das Ruas Hassib Mofarrej e Xavier Kraus e, do outro, o PIU Vila Leopoldina-Villa Lobos).</p>
						<p>As demais diretrizes correspondem à exigência de aplicação da Cota de Solidariedade na modalidade de doação de áreas construída no próprio local, garantindo diversidade social, a definição de percentual máximo para usos residenciais e a exigência de implantação de um percentual mínimo de atividades ligadas à inovação (cota de inovação).</p>
					</section>

					<section>
						<h5 class="titulo" indent="4">Centralidade do Jaguaré</h5>
						<p>A proposta de uma nova centralidade no Jaguaré decorre da necessidade de se incentivar a mistura de usos que diversifiquem a área, bem como facilitar a implantação das atividades produtivas previstas pela Zona de Desenvolvimento Econômico (ZDE).</p>
						<p>A centralidade localiza-se em quadras lindeiras ao futuro corredor de ônibus da Av. Jaguaré e contam com glebas maiores que 40.000m², ou seja, passíveis de parcelamento do solo de acordo com o Art. 44 da Lei de Parcelamento, Uso e Ocupação do Solo.</p>
						<p>Para essas quadras, o PIU traz diretrizes de parcelamento, indicando novas continuidades viárias que eliminariam as barreiras formadas pelos grandes lotes, bem como a destinação de áreas verdes, desenhando assim novas praças públicas ao lado do futuro corredor de ônibus na Av. Jaguaré. No caso da área demarcada como ZOE, o PIU Arco Pinheiros também trará os parâmetros de uso e ocupação do solo similares àqueles dispostos para a Centralidade.</p>
						<p>Por fim, como se trata de uma área que o PIU incentiva a transformação, inclusive com previsão de usos habitacionais verticais – hoje não permitidos pelo zoneamento na ZDE – também será exigido a realização da cota de solidariedade no local, no caso dos lotes passíveis de parcelamento do solo.</p>
					</section>

					<section>
						<h5 class="titulo" indent="4">Parque de conexões</h5>
						<p>Os lotes de domínio e posse da CPTM, localizados entre as vias locais e expressa da Marginal Pinheiros somam aproximadamente 100.000m², utilizados hoje para passagem dos trilhos da Linha 9 e como pátio de estacionamento e de manobras de seus trens. A CPTM prevê para o local a implantação de um novo pátio de manutenção de trens, abrindo a oportunidade de uma transformação integrada com os objetivos e diretrizes do PIU ARCO PINHEIROS.</p>
						<p>Trata-se de uma área de extrema importância para o PIU ARCO PÍNHEIROS, uma vez que forma grande parte da frente do distrito da Vila Leopoldina para o Rio Pinheiros. Ademais, por essa área passarão as novas conexões viárias, cicloviárias e de pedestres previstas pelo Programa de Intervenções. Nesse sentido, é imprescindível que intervenções no local considerem a relação com esses novos fluxos, promovendo a conexão intermodal e evitando a fragmentação do território.</p>
						<p>Além disso, a área também é importante para promover a conexão entre diferentes setores do PIU, uma vez que faz frente ao perímetro da Ceagesp e do PIU-VLVL, bem como ancora as conexões previstas com o Jaguaré e suas áreas industriais.</p>
						<p>O perímetro também é oportuno para promover a conexão ambiental entre as áreas verdes existentes da Cidade Universitária e do Parque Villa-Lobos com as áreas verdes previstas pelo PIU na confluência dos rios Pinheiros e Tietê, passando pelo bulevar indicado no PIU-VLVL e pelas áreas livres previstas para a Ceagesp.</p>
						<p>Desse modo, a área assume a forma de um parque de conexões, promovendo uma série de ligações que oferecem novas oportunidades para um território de inovação. Seu desenvolvimento poderá se dar a partir da estruturação de uma Parceria Público Privada, podendo ser explorado o comércio ao longo da estrutura, além de outros usos, como serviços e até habitação, contanto que respeitados os parâmetros de Área de Preservação definidos para a área.</p>
					</section>
				</section>

				<section>
					<h4 class="titulo" indent="3">Áreas de Estruturação Local - AEL</h4>
					<p>Definida pelo Art. 149 do PDE, a Área de Estruturação Local (AEL) consiste em porções do território destinadas à transformação local, especialmente nas áreas de maior vulnerabilidade, nas quais deve ocorrer uma convergência de políticas públicas integradas, como, por exemplo, a oferta de transporte coletivo, ampliação de áreas verdes, oferta de habitação de interesse social e regularização fundiária, bem como equipamentos urbanos e sociais. O PIU ARCO PINHEIROS propõe a demarcação de duas AEL sobrepostas a AIU ARCO PINHEIROS: a <b>AEL São Remo</b> e a <b>AEL Humaitá</b>.</p>
					<div class="card-pde">
						<div class="title">Áreas de Estruturação Local (AEL)</div>
						<p>Porções do território destinadas à transformação local e associadas à Rede de Estruturação da Transformação Urbana.</p>
						<ul>
							<li>Desenvolvimento urbano, especialmente nas áreas de maior vulnerabilidade </li>
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

					<section>
						<h5 class="titulo" indent="4">AEL São Remo</h5>
						<p>Em parte coincidente com o perímetro de ação do Plano Regional da Subprefeitura do Butantã, a AEL São Remo compartilha diversos objetivos e diretrizes, tais como integrar atendimento habitacional, regularização fundiária e urbanização dos assentamentos precários, promover a ampliação dos espaços livres públicos e a oferta de equipamentos, além de qualificar o trecho da Avenida Corifeu de Azevedo Marques.</p>
						<p>A AEL São Remo tem como estratégia integrar as intervenções a serem realizadas nas ZEIS 1 e ZEIS 2, de forma que as áreas vazias contíguas aos assentamentos precários possam recepcionar novas conexões viárias, áreas livres e provisão habitacional. O objetivo principal da intervenção é fortalecer o caráter de bairro, favorecendo a diversidade de usos, a continuidade do tecido urbano e a abertura da USP para essa porção do Butantã.</p>
						<p>A provisão habitacional, neste caso, corresponde ao atendimento habitacional de famílias de baixa renda residentes da própria AEL e que porventura sejam removidas em função da reurbanização e qualificação dos assentamentos precários existentes.</p>
						<p>Como parte das áreas indicadas como ZEIS 1 e ZEIS 2 são de propriedade da Universidade de São Paulo, o desenvolvimento desta AEL depende de um diálogo próximo entre moradores, Universidade e demais instâncias do poder público estadual e municipal. Portanto, caberá a futura AEL abrir caminho para o desenvolvimento de propostas e projetos para a área, a partir da articulação entre os diversos atores colocalizados.</p>
					</section>

					<section>
						<h5 class="titulo" indent="4">AEL Humaitá</h5>
						<p>O perímetro da AEL Humaitá engloba duas grandes áreas de propriedade da Empresa Metropolitana de Águas e Energia (EMAE) e entorno imediato, trecho localizado entre as marginais do Rio Pinheiros, a ferrovia e quadras com ocupação diversificada no Jardim Humaitá. A área apresenta hoje condições ambientais complexas, estando em parte contaminada devido ao depósito de sedimentos dos rios, além de contar com sérios problemas de drenagem e presença de assentamentos precários.</p>
						<p>A demarcação da AEL busca indicar um mecanismo para reestabelecer as áreas verdes ao longo da orla dos principais rios metropolitanos e mediar os conflitos ambientais. Para tanto, será necessária a aproximação entre o poder público, EMAE e moradores para levar adiante uma série de ações integradas, tais como: a descontaminação dos terrenos, o reestabelecimento de vias públicas, a definição de novos alinhamentos e conexões viárias e a provisão de moradias para população que seja eventualmente removida.</p>
						<p>Como diretriz básica, o PIU vislumbra para essa área a criação de uma nova frente urbana voltada para as áreas verdes na foz do Rio Pinheiros. Para tanto, parte da premissa que a implantação do sistema viário deverá definir novas quadras nas bordas internas do bairro, gerando lotes voltados às praças e dedicados à produção habitacional para atendimento de população de baixa renda.</p>
						<p>Como estratégia de viabilização das propostas da AEL Humaitá, o PIU ARCO PINHEIROS prevê a possibilidade de utilização do potencial construtivo das áreas da EMAE como estoque a ser realizado em todo perímetro da AIU Arco Pinheiros, em contrapartida à destinação das praças públicas descontaminadas à municipalidade.</p>
					</section>
				</section>
			</section>

			<section>
				<h3 class="titulo" indent="2">Instrumentos de gestão ambiental</h3>
				<p>O PIU ARCO PINHEIROS procurou reequilibrar os índices de adensamento construtivo e populacional em seu interior, de forma que algumas áreas sofreram redução em seu potencial construtivo máximo em relação à LPUOS, enquanto outras tiveram seus índices majorados, conforme demonstra a seguir. Essa redistribuição ocorreu em apenas 8% do território, visando otimizar a capacidade de suporte das infraestruturas existentes e previstas para a área.</p>
				<Imagem :dados="{
					tipo: 'mapa',
					titulo: 'Potencial construtivo (PIU ACP x LPUOS)',
					url: imgSrc('arquivos/arco-pinheiros-2/mapas/lpuos-piuacp.png'),
					legenda: [
						{ fundo: '#99f0f6', descricao: 'Redução em relação à LPUOS' },
						{ fundo: '#db6181', descricao: 'Majoramento em relação à LPUOS' },
						{ fundo: '#d3d3d3', descricao: 'Sem alteração em relação à LPUOS' }
					]
				}"></Imagem>
				<p>No que se refere às reduções nos índices de adensamento construtivo e populacional, isso ocorreu em função da proximidade do Rio Pinheiros e de áreas onde o sistema fundiário fragmentado dificulta um adensamento significativo. O Pátio da CPTM, em frente à Ceagesp, e o Centro de Detenção Provisória de Pinheiros são exemplos de áreas que, caso sejam transformadas, devem manter baixos coeficientes de aproveitamento, pela aproximação do rio e pelo potencial de exercerem funções mais voltadas à constituição da rede ambiental do PIU ARCO PINHEIROS. Já as áreas da Vila Bela Aliança e do quadrante constituído pelas avenidas Queiroz Filho, Imperatriz Leopoldina, Gastão Vidigal e Rua Constantino Fraga, consistem em bairros horizontais de uso misto consolidados, com baixa probabilidade de transformação.</p>
				<p>Em determinadas áreas, próximas a corredores de ônibus, estações de trem e ancoragem de ciclopassarelas propostas pelo Programa de Intervenções do PIU ARCO PINHEIROS, o Coeficiente de Aproveitamento foi majorado em relação à LPUOS, como nos grandes lotes ociosos lindeiros à Av. Jaguaré e aqueles próximos à Estação Vila Leopoldina da CPTM. Já o eixo da Rua Hassib Mofarrej e as áreas da ZPI de Presidente Altino constituirão nova área de adensamento cuja conexão com a estação CEASA da CPTM será qualificada pelas ações previstas no Programa de Intervenções do PIU ARCO PINHEIROS.</p>
				<p>No que se refere ao adensamento populacional previsto para o território do PIU ARCO PINHEIROS, a estimativa realizada para 30 anos partiu do cruzamento das Áreas de Transformação, Qualificação e Preservação com os lotes e glebas efetivamente transformáveis, ou seja, excluindo-se aqueles cujo uso, ocupação ou condições fundiárias condicionariam baixas probabilidades de transformação, sendo considerados consolidados. Foram considerados nesta condição: Edifícios residenciais verticais, conjuntos habitacionais, núcleos urbanizados, edifícios de uso misto, comércio e serviços verticais, comércio e serviços horizontais de porte significativo, áreas produtivas ativas, como indústrias, condomínios multissetorais, gerenciamento de dados e tecnologia, equipamentos urbanos, usos especiais e coletivos, lotes menores que 500m² e lotes de grande porte já com protocolos para desenvolvimento e novos projetos.O mapa X resume este conjunto de lotes e glebas consolidados, demonstrando, em seu negativo, todas as áreas passíveis de recepcionarem transformações urbanas.</p>
				<Imagem :dados="{
					tipo: 'mapa',
					titulo: 'Graus de consolidação por uso no perímetro do PIU Arco Pinheiros',
					url: imgSrc('arquivos/arco-pinheiros-2/mapas/consolidacao.png'),
					legenda: [
						{ fundo: '#000000', descricao: 'Consolidado' },
						{ fundo: '#737373', descricao: 'Médio potencial de transformação' },
						{ fundo: '#d0d0d0', descricao: 'Transformação condicionada' },
						{ fundo: '#FFF', borda: '#bbb', espessura: '1', descricao: 'Transformável' }
					],
					fonte: 'SP-Urbanismo, 2018'
				}"></Imagem>
				<p>O resultado do cálculo de adensamento demonstrou que houve acréscimo de 81.030 pessoas em todo o perímetro do PIU ARCO PINHEIROS, resultando na ampliação da densidade populacional bruta de 63 hab/ha para 157 hab/ha em 30 anos. Para compreender melhor a distribuição desse acréscimo populacional pelo território, os cálculos foram realizados por setores, cada um representando unidades com características homogêneas. A eventual transformação da Ceagesp, por exemplo, promoverá um adensamento considerável, passando a ter uma densidade similar a do distrito da Bela Vista hoje. Já os setores Vila Leopoldina e Centralidade Jaguaré, passarão a ter densidades similares ao distrito da Santa Cecília. O setor Gastão Vidigal, por sua vez, passará a ter densidade similar ao distrito de Perdizes, enquanto o setor Mofarrej passará a ter densidade similares ao distrito do Jabaquara. Essa ampliação da oferta de moradia em setores específicos do ACP reitera a estratégia do plano de incentivar a conformação de bairros de uso misto em consonância com as novas centralidades previstas.</p>
				<Tabela :dados="tabela01"></Tabela>
				<p>Para garantir qualidade ambiental ao território, para que suporte esse futuro adensamento, foram considerados os problemas levantados pelo Diagnóstico Ambiental do PIU ARCO PINHEIROS, com destaque para a reduzida disponibilidade de áreas verdes, áreas sujeitas a inundações, elevada impermeabilização do solo, presença de córregos contaminados por esgoto doméstico, invasão de Áreas de Preservação Permanente (APP), ausência de conexão ambiental entre áreas verdes, presença de ilha de calor no território e a necessidade de instalação de equipamentos públicos para atendimento à população existente e futura. A partir desse diagnóstico foram definidas diretrizes que buscam simultaneamente a qualificação dos espaços públicos e a promoção do equilíbrio ambiental. São elas:</p>
				<ol class="decimais">
					<li>
						<b>Implantação de rede ambiental conectando áreas verdes urbanas e diferentes modais de transporte</b>
						<p>Implementar eixos ambientais na Vila Leopoldina e Jaguaré objetivando a elevação do percentual de áreas verdes, redução da temperatura de superfície, elevação dos teores de umidade relativa do ar, interligação ambiental dos Parque Orlando Villas-Bôas, Villa Lobos e Cidade Universitária e a conexão da avifauna. Tratam-se de bulevares e alamedas, que consistem em vias arborizadas e equipadas cuja implantação de maneira planejada visa à criação de percursos sombreados, acessíveis e iluminados, como meio de proporcionar maior segurança e conforto aos pedestres e ciclistas, além de orientar os principais deslocamentos.</p>
					</li>
					<li>
						<b>Elevação da cobertura vegetal em áreas impermeabilizadas</b>
						<ol class="minusculas">
							<li>Incrementar a área permeável da Ceagesp, em caso de sua transformação, garantindo um reparcelamento que promova a conexão de suas futuras áreas verdes com as existentes e propostas para o entorno, além da exigência de adoção de estratégias de drenagem das águas pluviais, visando mitigar os alagamentos na área;</li>
							<li>Implantar infraestrutura para retenção, controle de descarga e infiltração de águas pluviais na região da Av. Eng. Roberto Zuccolo, Jaguaré e Vila Leopoldina por meio de trincheiras de infiltração implementadas em calçadas e canteiros centrais, elevando a capacidade de infiltração em região de várzea e controlando a descarga de águas pluviais na rede pública;</li>
							<li>Incentivar a implantação de Áreas Verdes oriundas de destinação de forma sistêmica e associada ao Rio Pinheiros no Território de Integração da frente do Rio Pinheiros;</li>
							<li>Definir os locais das Áreas Verdes oriundas de destinação no território da Centralidade do Jaguaré, de forma a concentrá-las junto ao futuro corredor de ônibus da Av. Jaguaré;</li>
							<li>Controlar a inundação na Vila Leopoldina por meio de redimensionamento das galerias de águas pluviais subdimensionadas, existentes ao longo da R. Mergenthaler, por galerias que atendam à demanda</li>
						</ol>
					</li>
					<li>
						<b>Implantação de novos equipamentos</b>
						<p>Incentivar o parcelamento de grandes lotes e com potencial de transformação, cuja obrigatoriedade de destinação de áreas públicas em caso de edificação a ser construída ou reformada, nos termos dos artigos 44 e 45 da LPUOS, possa representar a disponibilização de novas áreas institucionais para provisão de equipamentos.  Considerando apenas a demanda atual identificada no diagnóstico, destaca-se a necessidade de duas novas Unidades Básicas de Saúde uma no distrito do Jaguaré e outra no distrito da Vila Leopoldina, nas áreas dos distritos contidas no perímetro do PIU ARCO PINHEIROS. O perfil dos demais equipamentos deverá ser construído em conjunto com as secretarias competentes e com a população em momento de elaboração do projeto.</p>
					</li>
				</ol>
				<Imagem :dados="{
					tipo: 'mapa',
					titulo: 'Estratégias ambientais',
					url: imgSrc('arquivos/arco-pinheiros-2/mapas/estrategias-ambientais.png'),
					legenda: [
						{ fundo: '#e6bf85', borda: '#f79d2a', espessura: '2', descricao: '30,5°C' },
						{ fundo: '#e7dfbc', borda: '#f3bb34', espessura: '2', descricao: '30,0°C' },
						{ fundo: '#b8becb', descricao: 'Áreas de inundação' },
						{ fundo: '#bbcda6', descricao: 'Áreas verdes existentes' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa9_icone1.png'), descricao: 'Áreas verdes propostas' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa9_icone2.png'), descricao: 'Eixos ambientais propostos' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa9_icone3.png'), descricao: 'Retenção de águas pluviais em espaços públicos' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa9_icone4.png'), descricao: 'Retenção de águas pluviais dentro dos lotes' },
						{ simbolo: imgSrc('arquivos/arco-pinheiros-2/mapas/legendas/mapa9_icone5.png'), descricao: 'Equipamentos oriundos de destinação (Território de Integração e AEL)' }
					]
				}"></Imagem>
			</section>
		</section>

		<section>
			<h2 class="titulo" indent="1">Modelagem econômica</h2>
			<p>O estudo de viabilidade econômica da 2ª Consulta Pública do Projeto de Intervenção Urbana do Arco Pinheiros (PIU-ACP) se propõe a apresentar as estimativas de produção de área construída e de receita do Projeto num horizonte de planejamento de 20 anos. Além disso, investiga a dinâmica imobiliária consequente do lançamento do Projeto de Intervenção Urbana da Vila Leopoldina (PIU-VLVL), e avalia seus impactos econômicos sobre o primeiro.</p>

			<section>
				<h3 class="titulo" indent="2">Projeto de Intervenção Urbana Arco Pinheiros: cenário base</h3>
				<p>O cenário base do PIU-ACP tem como escopo responder as questões básicas do campo da Economia Urbana, como a demanda e a oferta por área computável, seu preço e a receita esperada com o instrumento de outorga onerosa. Essa leitura inicial toma como recorte o cenário no qual o PIU-ACP se desenvolve sem a incorporação do PIU-VL. Posteriormente, sobre essa camada é sobreposta o <i>layer</i> do PIU-VLVL, compreendendo seus impactos sobre a primeira.</p>

				<section>
					<h4 class="titulo" indent="3">Áreas projetadas</h4>
					<p>O ponto de partida para o estudo econômico e para a avaliação da forma de financiamento do PIU-ARCO PINHEIROS, parte da avaliação da capacidade de absorção das famílias e das firmas ao lançamento de novas unidades imobiliárias. Os dados sobre os lançamentos imobiliários foram obtidos junto à Geoimóvel, que oferece detalhes sobre os produtos, sua localização e preço desde 2006. Essa base foi plotada no mapa de São Paulo e selecionados os lançamentos inseridos no limite territorial do Projeto, conforme pode ser observado na figura abaixo.</p>
					<p>Essa base possui a informação da área privativa das plantas, da qual se depreende a área privativa total lançada ao longo dos anos. Como pode ser observada na tabela abaixo, a produção na área circunscrita ao PIU-ARCO PINHEIROS, começa a série em alta, atingindo seu pico em 2008, com o lançamento de aproximadamente 190 mil metros quadrados de área privativa. A partir do ano seguinte, contudo, a produção despenca e, praticamente se extingue entre 2012 e 2016, quando volta a subir em 2017. Essa queda deve-se, sobretudo, ao término dos estoques previstos para a região, que só foram novamente liberados, quando da edição da nova Lei 16.402 de 2016, que aboliu o regime de estoques máximos de potencial construtivo adicional.</p>
					<p>Ao longo desse período a média lançada foi de 67 mil metros quadrados de área privativa. Para unificar as unidades de conta e facilitar o cálculo da área onerosa e de sua receita proveniente, todas as informações foram convertidas em área computável. Estudos de massa elaborados a partir de tipologia comuns lançadas na região apontam para uma razão de 1,3 entre a área privativa e a área computável.</p>
					<Tabela :dados="tabela02"></Tabela>
					<p>Para a projeção da capacidade de absorção de área no futuro, foi considerada uma metodologia padrão em estudos econométricos, baseada em modelos autoregressivos e de média móvel (ARIMA). Essa é uma técnica usual de estimação de variáveis econômicas e que, no presente estudo, é utilizada para a projeção da capacidade de absorção de área privativa para os próximos 20 anos. O resultado aparece no gráfico e na tabela abaixo.</p>
					<img src="" alt="gráfico - Estimativa de capacidade de absorção de área privativa – média móvel (m²/aa)">
					<p>Como pode se observar, o estimador apresenta alta aderência com os dados observados e, ao excluir choques do passado, eleva a projeção de área privativa e respectivamente de área computável para 78,7 mil e 60,5 mil metros quadrados. Assim, considerando um horizonte de 20 anos, a estimativa de produção e consumo de área computável é de 1,2 milhões de metros quadrados.</p>
					<Tabela :dados="tabela03"></Tabela>
					<p>Os resultados de demanda por área computável, então, são confrontados com sua oferta possível, partindo da disponibilidade de terrenos. A tabela abaixo revela o total de terrenos e o total de terrenos potenciais por setor, que são calculados a partir da probabilidade de transformação de acordo com o uso em cada lote. Como muitos terrenos já apresentam tipologias verticais, altamente consolidadas, mescladas com outras de alta probabilidade de transformação, o cálculo de estoque de terrenos potenciais assume uma fração do primeiro.</p>
					<Tabela :dados="tabela04"></Tabela>
					<p>Considerando o estoque de terrenos potenciais, é possível calcular a área computável potencial de acordo com o coeficiente máximo de cada zona associada a cada lote. Os dados na planilha abaixo aparecem agrupados por parâmetros urbanísticos, no qual “T” representa as áreas de transformação, “Q1” apenas as áreas de qualificação 1 e “Q2,3” as demais áreas de qualificação, e por “grandes setores”, nos quais “Vila Leopoldina” representa toda porção de terreno a leste do Rio Pinheiros e “Jaguaré” toda porção a oeste do Rio.</p>
					<Tabela :dados="tabela05"></Tabela>
					<p>Os resultados finais em termos de áreas computáveis podem ser depreendidos da Tabela 8. As áreas de transformação representam 35,2% contra 64,8% das áreas de qualificação. E o total de áreas computáveis potenciais é de 8,0 milhões de metros quadrados. Assim, considerando uma demanda de 60 mil metros quadrados ao ano, calculada no capítulo anterior, isso representa um horizonte de consumo que só se consolidaria em 133 anos. Dessa forma, embora os dados de estoque ajudem a nortear o trabalho, mais relevante é o entendimento do fluxo e da classificação das áreas mais prováveis de transformação.</p>
					<p>Tomando a distribuição histórica de consumo de área computável por grande setor e a atratividade de produção de acordo com o regramento, é possível estabelecer a distribuição espacial da produção, conforme apresentado na tabela abaixo.</p>
					<Tabela :dados="tabela06"></Tabela>
					<p>Como pode se observar, o consumo de 1,2 milhões de metros quadrados de área computável em 20 anos, calculados anteriormente, aparecem distribuídos no espaço. Deste total, 74,4% devem ser absorvidos no grande setor Vila Leopoldina e 25,6% no grande setor Jaguaré, enquanto 67,0 % devem ser empregados nas áreas de transformação e 33,0% nas áreas de qualificação.</p>
				</section>

				<section>
					<h4 class="titulo" indent="3">Receita original projetada</h4>
					<p>Concluído todo o estudo de oferta e demanda de área computável para o PIU-ACP, o cálculo da receita é relativamente simples. Tomando a fórmula da outorga como:</p>
					<pre class="formula">R = (V/C<sub>a</sub>) ⋅ (AC–AT) ⋅ F<sup>s</sup> ⋅ F<sup>p</sup></pre>
					<p>Onde <pre class="formula declara">V</pre> é o valor de cadastro (a base de cálculo para o valor da terra), <pre class="formula declara">C<sub>a</sub></pre> o coeficiente de aproveitamento, que juntos representam o preço em metros quadrados, e <pre class="formula declara">(AC – AT)</pre> a área computável menos a área de terreno que equivale à área onerosa (ou a quantidade), e <pre class="formula declara">F<sup>s</sup></pre> e <pre class="formula declara">F<sup>p</sup></pre> os fatores de solidariedade e planejamento. Basta fazer o somatório das áreas previamente calculadas por grande setor e categoria urbana e multiplicar pelo valor de cadastro de cada sub-região.</p>
					<Tabela :dados="tabela07"></Tabela>
					<p>O resultado para um horizonte planejamento de 20 anos é de R$ 424 milhões, como pode ser observado na tabela abaixo.</p>
					<Tabela :dados="tabela08"></Tabela>
					<p>Essa estimativa está bem aquém das expectativas e da avaliação, em andamento, das intervenções urbanas necessárias para a região pode ser explicada por alguns motivos. O primeiro, evidentemente, é a adoção de um único instrumento de financiamento restrito a uma pequena base de contribuintes – os terrenos em transformação. Segundo, os valores de contribuição da outorga estão bem abaixo da linha dos 5,0% do VGV, o que pode ser explicado pela adoção de uma base de cálculo de preços de terreno, o Valor de Cadastro (2014), que parece muito defasado frente os preços inferidos do mercado. Como pode se notar, os estudos de viabilidade econômica consideram que os preços de terreno na região podem variar de R$ 4.200 a 8.400 o metro quadrado, enquanto o Valor do Cadastro (2014) médio é de apenas R$ 1.866,5.</p>
					<p>O último ponto a se considerar é que as quantidades estimadas dependem dos seus valores pregressos, segundo a metodologia de séries temporais (ARIMA). Essa é uma região relativamente pequena e que no auge de seu desenvolvimento sofreu com o esgotamento dos estoques. Nada impede que, com a implantação de um Projeto de Intervenção Urbana, o consumo de área computável na região possa crescer comparativamente ao seu histórico.</p>
				</section>

				<section>
					<h4 class="titulo" indent="3">Encaminhamentos: aumento da receita</h4>
					<p>Diante dessas possibilidades de variação no preço e na quantidade, foram desenvolvidos alguns cenários alternativos. O primeiro inclui um aumento no preço do metro quadrado da área onerosa, que pode ser obtido por uma atualização do Valor de Cadastro ou por uma alteração nos fatores de planejamento. Tomando a relação de 5,0% do gasto com outorga sobre o VGV como alvo, isso equivaleria a um aumento de 100% do Valor de Cadastro em áreas de transformação e de 50% em áreas de qualificação ou a alteração do fator de planejamento para 2,0 no primeiro caso e para 1,5 no segundo. A segunda hipótese prevê um aumento de consumo anual de 50%, o que equivaleria também a uma reavaliação do horizonte de planejamento para 30 anos – dado que as projeções de consumo anual são constantes. Esses cenários são apresentados na tabela abaixo.</p>
					<Tabela :dados="tabela09"></Tabela>
					<p>Caso fosse efetuada a atualização dos preços, variável sob controle do Poder Público, a arrecadação com o PIU-ACP poderia subir de R$ 424 milhões para R$ 794 milhões. Para que esse valor fosse acrescido ainda mais, depender-se-ia de uma alteração nos volumes produzidos, o que não depende diretamente da atuação do Poder Público.</p>
				</section>
			</section>

			<section>
				<h3 class="titulo" indent="3">Projeto de Intervenção Urbana Vila Leopoldina - Villa Lobos</h3>
				<p>Com a proposição de outro Projeto de Intervenção Urbana nas cercanias do Arco Pinheiros, o PIU Vila Leopoldina, faz-se necessária uma revisão dos cálculos de área construída e de receita do cenário base. Primeiramente, contudo, vale considerar os elementos essenciais constituintes do PIU-VL.</p>
				<p>O PIU-VL deverá ser negociado a partir da execução de dois leilões de potencial construtivo. Em ambos, as contrapartidas estão fixadas e o vencedor é o proponente que fizer a menor oferta de área computável adicional. Na primeira hasta, as contrapartidas totalizam R$ 80 milhões e estão discriminadas conforme a tabela abaixo.</p>
				<Tabela :dados="tabela10"></Tabela>
				<p>Segundo cálculos da São Paulo Urbanismo, esse valor possivelmente será negociado por 266 mil metros quadrados de área computável adicional, o que equivale a 334 mil metros quadrados de área computável. Estudo da Consultoria Amaral d’Avila, considerando o histórico de produção e consumo na região, estima que essa quantidade de área computável deverá ser absorvida a um ritmo de 22 mil metros quadrados ao ano em média ao longo de 15 anos. Confrontando esses dados com a absorção estimada para o Arco Pinheiros (61 mil metros quadrados), isso equivale a 36% da capacidade absorção de área computável total (ver gráfico abaixo).</p>
				<img src="" alt="grafico - Capacidade de absorção de área computável PIU-VL e PIU-ACP (m²)">
				<p>	Para completar o rol de intervenções urbanísticas programas para a região, o PIU-VL prevê a execução de uma segunda hasta com o objetivo de arrecadar R$ 55 milhões em contrapartidas adicionais, a serem alocadas conforme tabela abaixo.</p>
				<Tabela :dados="tabela11"></Tabela>
				<p>	Essa segunda hasta será aberta para utilização em todo o Arco Pinheiros, o que deve acirrar sua concorrência. Tomando como base o preço médio de negociação de área computável adicional de R$ 587 no Cenário 01, sem atualização do valor de cadastro, e de R$ 1.062 no Cenário 02, com atualização, estima-se que a segunda contrapartida deva ser negociada dentro de um intervalo de 93,8 mil metros quadrados de máxima e 53, 7 mil metros quadrados de mínima de área computável adicional (ver tabelas abaixo).</p>
				<Tabela :dados="tabela12"></Tabela>
				<Tabela :dados="tabela13"></Tabela>
				<Tabela :dados="tabela14"></Tabela>
			</section>

			<section>
				<h3 class="titulo" indent="3">Impactos do PIU-VLVL sobre o PIU-ARCO PINHEIROS</h3>
				<p>O PIU-VLVL traz uma série de soluções para a região como a remoção de favelas, a construção de conjuntos habitacionais, a abertura de vias e a instalação de equipamentos públicos, é uma fonte adicional de recursos, mas que interfere diretamente na geração de receita do Arco Pinheiros como um todo.</p>
				<p>Isso ocorre de duas maneiras. Primeiramente, o lançamento concentrado de potencial construtivo na região, advindo da primeira hasta, virá a concorrer com a capacidade de absorção de área computável da região. Conforme já comentado, estima-se um consumo de 61 mil metros quadrados de área computável ao ano no Arco Pinheiros, desses, cerca de 22 mil metros quadrados serão orientados para o PIU Vila Leopoldina por cerca de 15 anos.</p>
				<p>Adicionalmente, o PIU-VLVL deverá lançar títulos de potencial construtivo, oriundos da segunda hasta, que serão concorrentes à compra de outorga, afetando a captação de recursos do PIU-ARCO PINHEIROS. Dessa maneira, as interferências das duas hastas podem ser resumidas como uma subtração da área computável do cenário base do Arco Pinheiros e, consequentemente, de sua receita.</p>
				<p>A tabela abaixo apresenta os possíveis impactos do PIU-VLVL sobre o PIU-ARCO PINHEIROS. Partindo do cenário base com capacidade de absorção de 1,2 milhões de metros quadrados de área computável, 335 mil serão destinadas para a hasta 1 e algo em torno de 141 mil e 80 mil metros quadrados serão dirigidos para a hasta 2. Assim, cerca de 795 mil metros quadrados de área computável efetivamente servirão para o pagamento de outorga, que ao preço corrigido de R$ 1.026 para o metro quadrado de área computável adicional resultariam numa receita de R$ 500 milhões em 20 anos.</p>
				<Tabela :dados="tabela15"></Tabela>
				<p>	Ou seja, dos R$ 800 milhões de receita gerados a partir do instrumento de Outorga Onerosa do Direito de Construção (OODC) estimados para a região do Arco Pinheiros, nos primeiros 20 anos, restarão cerca de R$ 500 milhões, 62,5% do total. Isso ocorre, pois dos 1,2 milhões de metros quadrados de área computável sobrarão 800 mil para o pagamento de outorga, visto que o restante do potencial construtivo será negociado e pago antecipadamente para a execução do plano de intervenções do PIU Vila Leopoldina.</p>
			</section>
		</section>

		<section>
			<h2 class="titulo" indent="1">Modelo de gestão democrática</h2>
			<p>A participação popular é de grande importância no processo de planejamento urbano da cidade sendo garantida pelo PDE e pelo Decreto que dispõe sobre o processo de elaboração do PIU. O PDE define as instâncias e instrumentos de participação popular e controle social garantindo o papel da sociedade civil no planejamento e na gestão da política de desenvolvimento urbano da cidade.</p>
			<p>Desta forma, através de representantes dos diferentes segmentos da população de forma direta ou por intermédio de associações representativas será possível acompanhar e monitorar o andamento dos projetos, a realização de investimentos públicos, a elaboração, implantação e avaliação de planos, programas e projetos de desenvolvimento relacionados ao PIU ARCO PINHEIROS.</p>

			<section>
				<h3 class="titulo" indent="2">Grupo Gestor da AIU ARCO PINHEIROS</h3>
				<p>O Grupo Gestor deverá ter composição paritária entre representantes do Poder Público e sociedade civil organizada. Com o intuito de integração das ações da Prefeitura, os integrantes do Poder Público devem ser indicados entre aqueles que já compõem o colegiado dos Núcleos Regionais e Planejamento  de modo a permitir uma troca de informações e ações estratégicas.</p>
				<p>Os representantes da população dos distritos devem ser escolhidos entre os integrantes do Conselho Participativo Municipal, que foram eleitos. Conselho Participativo é um órgão autônomo da sociedade civil com pelo menos 5 representantes eleitos de cada distrito que se reúnem mensalmente para discutir e acompanhar as políticas públicas municipais na sua execução territorial, fazendo o controle social das diversas leis e programas municipais das subprefeituras.</p>
				<p>Os representantes da sociedade podem ser escolhidos entre alguns dos participantes de outro colegiado eleito, como o CMPU – Conselho Municipal de Política Urbana, vinculado à SMDU – Secretaria Municipal de Desenvolvimento Urbano.</p>
				<p>A área de abrangência do PIU ARCO PINHEIROS incide porções dos territórios das subprefeituras da Lapa e do Butantã, respectivamente sobre os distritos Vila Leopoldina, Jaguaré e Butantã.</p>
				<p>O Grupo Gestor da AIU ARCO PINHEIROS deve ser composto pelos representantes da administração pública e sociedade civil relacionados aos temas principais do projeto urbano público proposto, a seguir:</p>
				<ol class="romanos">
					<li>Incremento populacional suportado pela oferta de emprego e serviços existentes na região;</li>
					<li>Redução da Vulnerabilidade Social e qualificação da moradia;</li>
					<li>Desenvolvimento Orientado pelo Transporte Sustentável – DOTS: adensamento populacional e construtivo junto aos meios de transporte público de média e alta capacidade;</li>
					<li>Melhoria da acessibilidade interna externa ao perímetro e  conexão diferentes modos de transportes motorizados e não motorizados;</li>
					<li>Promoção às atividades econômicas associadas à inovação e pesquisa;</li>
					<li>Implantação de sistema de espaços públicos articulado aos terminais e estações de transporte, áreas verdes e locais de moradia e trabalho.</li>
				</ol>
				<p>A partir desses temas, sugere-se uma composição, a saber:</p>
				<Tabela :dados="tabela16"></Tabela>
				<p>A partir da aprovação das ações a serem implantadas, e seus respectivos PAI e/ou AEL, o Grupo Gestor poderá criar Comitês Locais do Grupo Gestor, com a composição dos membros relacionados ao tema central e a colaboração de outros agentes. OS Comitês Locais funcionam como grupo técnico de apoio às ações e projetos do Grupo Gestor da AIU ARCO PINHEIROS.</p>
				<p>A SP-URBANISMO poderá prestar o apoio administrativo para os trabalhos do Grupo Gestor da AIU ARCO PINHEIROS, mantendo a divulgação das reuniões e deliberações acessíveis à sociedade.</p>
			</section>

			<section>
				<h3 class="titulo" indent="2">Conselho Gestor de ZEIS</h3>
				<p>Nos termos do PDE, nas ZEIS 1 e 3, quando habitadas por população de baixa renda, deverão ser constituídos Conselhos Gestores compostos por representantes dos moradores, do Executivo e da sociedade civil organizada, que  participarão da formulação e implementação das intervenções a serem realizadas em suas áreas. As intervenções nas áreas ZEIS algumas estão identificadas como Área de Estruturação Local – AEL e serão instituídas a partir da autorização do Grupo Gestor da AIU ARCO PINHEIROS para início de desenvolvimento do Projeto de Intervenção Urbana Local. Desta forma, a instalação do Conselho Gestor deverá preceder a elaboração do plano de urbanização, que por ele deverá ser aprovado.</p>
			</section>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:14, context:'Comentarios'}"></Comments> <!-- id do comentário, 14 seria o último -->
		</section>

	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import Apoio from '@/components/Apoio'
import Tabela from '@/components/Tabela'
import Imagem from '@/components/Imagem'
import Galeria from '@/components/Galeria'
import Processo from '@/components/graf/arco-pinheiros-2/processo'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'ArcoPinheiros2',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			galeria: {
				width: 992,
				height: 625,
				images: [{
					url: this.$store.getters.basePath + 'arquivos/arco-pinheiros-2/galeria/01-contextualizacao.png',
					state: true,
					title: '',
					icon: false,
					legenda: 'Contextualização do Arco Pinheiros',
					id: 1
				}, {
					url: this.$store.getters.basePath + 'arquivos/arco-pinheiros-2/galeria/02-contextualizacao.png',
					state: false,
					title: '',
					icon: false,
					legenda: 'Contextualização do Arco Pinheiros - barreiras e ilhas existentes',
					id: 2
				}, {
					url: this.$store.getters.basePath + 'arquivos/arco-pinheiros-2/galeria/03-contextualizacao.png',
					state: false,
					title: '',
					icon: false,
					legenda: 'Contextualização do Arco Pinheiros - diagrama da situação existente',
					id: 3
				}, {
					url: this.$store.getters.basePath + 'arquivos/arco-pinheiros-2/galeria/04-proposta.png',
					state: false,
					title: '',
					icon: false,
					legenda: 'Caracterização do Arco Pinheiros – diagrama da situação proposta',
					id: 3
				} ]
			},
			tabela01: {
				colunas: [
					{ titulo: '' },
					{ titulo: 'Setor 1 (Setor Parque Tecnológico do Jaguaré)' },
					{ titulo: 'Setor 2 (Setor misto do Jaguaré)' },
					{ titulo: 'Setor 3 (Setor Presidente Altino)' },
					{ titulo: 'Setor 4 (Setor Gastão Vidigal)' },
					{ titulo: 'Setor 5 (Setor Mofarrej)' },
					{ titulo: 'Setor 6 (Setor Jardim Humaitá)' },
					{ titulo: 'Setor 7 (Setor São Remo/Corifeu)' },
					{ titulo: 'Setor 8 (Setor Ceagesp)' },
					{ titulo: 'Setor 9 (Setor Vila Leopoldina)' },
					{ titulo: 'Total' }
				],
				linhas: [
					[
						[ { data: 'Número de habitantes' } ],
						[ { data: '13.265' } ],
						[ { data: '3.155' } ],
						[ { data: '3.780' } ],
						[ { data: '16.224' } ],
						[ { data: '8.363' } ],
						[ { data: '7.667' } ],
						[ { data: '5.071' } ],
						[ { data: '17.582' } ],
						[ { data: '5.923' } ],
						[ { data: '81.030' } ]
					],
					[
						[ { data: 'População residente atual' } ],
						[ { data: '3.634' } ],
						[ { data: '19.245' } ],
						[ { data: '6.266' } ],
						[ { data: '11.407' } ],
						[ { data: '1.844' } ],
						[ { data: '3.249' } ],
						[ { data: '9.988' } ],
						[ { data: '0' } ],
						[ { data: '1250' } ],
						[ { data: '54.883' } ]
					],
					[
						[ { data: 'Denside resultante em 30 anos (hab/ha)' } ],
						[ { data: '176' } ],
						[ { data: '216' } ],
						[ { data: '57' } ],
						[ { data: '186' } ],
						[ { data: '162' } ],
						[ { data: '75' } ],
						[ { data: '407' } ],
						[ { data: '259' } ],
						[ { data: '210' } ],
						[ { data: '157' } ]
					],
					[
						[ { data: 'Densidade atual (hab/ha)' } ],
						[ { data: '38' } ],
						[ { data: '185' } ],
						[ { data: '36' } ],
						[ { data: '77' } ],
						[ { data: '29' } ],
						[ { data: '22' } ],
						[ { data: '249' } ],
						[ { data: '0' } ],
						[ { data: '37' } ],
						[ { data: '63' } ]
					]
				]
			},
			tabela02: {
				titulo: 'Área de terreno, área privativa e área computável (2006–2017)',
				colunas: [
					{ titulo: 'Ano' },
					{ titulo: 'Área de Terreno' },
					{ titulo: 'Área Privativa' },
					{ titulo: 'Área Computável' }
				],
				linhas: [
					[
						[ { data: '2006' } ],
						[ { data: '118.789' } ],
						[ { data: '119.807' } ],
						[ { data: '91.159' } ]
					],
					[
						[ { data: '2007' } ],
						[ { data: '88.660' } ],
						[ { data: '181.462' } ],
						[ { data: '139.586' } ]
					],
					[
						[ { data: '2008' } ],
						[ { data: '86.359' } ],
						[ { data: '190.263' } ],
						[ { data: '146.356' } ]
					],
					[
						[ { data: '2009' } ],
						[ { data: '27.999' } ],
						[ { data: '88.556' } ],
						[ { data: '68.120' } ]
					],
					[
						[ { data: '2010' } ],
						[ { data: '43.568' } ],
						[ { data: '62.950' } ],
						[ { data: '48.423' } ]
					],
					[
						[ { data: '2011' } ],
						[ { data: '46.625' } ],
						[ { data: '80.950' } ],
						[ { data: '62.269' } ]
					],
					[
						[ { data: '2012' } ],
						[ { data: '4.735' } ],
						[ { data: '10.246' } ],
						[ { data: '7.882' } ]
					],
					[
						[ { data: '2013' } ],
						[ { data: '1.065' } ],
						[ { data: '2.110' } ],
						[ { data: '1.623' } ]
					],
					[
						[ { data: '2014' } ],
						[ { data: '2.183' } ],
						[ { data: '5.608' } ],
						[ { data: '4.314' } ]
					],
					[
						[ { data: '2015' } ],
						[ { data: '2.624' } ],
						[ { data: '6.264' } ],
						[ { data: '4.819' } ]
					],
					[
						[ { data: '2016' } ],
						[ { data: '4.000' } ],
						[ { data: '10.390' } ],
						[ { data: '7.993' } ]
					],
					[
						[ { data: '2017' } ],
						[ { data: '15.328' } ],
						[ { data: '44.976' } ],
						[ { data: '34.597' } ]
					],
					[
						[ { data: 'Média', destaque: true, cor: true } ],
						[ { data: '36.819', destaque: true, cor: true } ],
						[ { data: '66.965', destaque: true, cor: true } ],
						[ { data: '51.512', destaque: true, cor: true } ]
					],
					[
						[ { data: 'Soma', destaque: true } ],
						[ { data: '441.822', destaque: true } ],
						[ { data: '803.582', destaque: true } ],
						[ { data: '618.140', destaque: true } ]
					]
				],
				fonte: 'Elaborado pela SP-Urbanismo a partir de dados da Geoimóvel'
			},
			tabela03: {
				titulo: 'Projeção de área privativa e área computável (m²/aa)',
				colunas: [
					{ titulo: 'Ano' },
					{ titulo: 'Área Privativa' },
					{ titulo: 'Área Computável' }
				],
				linhas: [
					[
						[ { data: '1' } ],
						[ { data: '86,434' } ],
						[ { data: '66,488' } ]
					],
					[
						[ { data: '2', cor: true } ],
						[ { data: '78,659', cor: true } ],
						[ { data: '60,507', cor: true } ]
					],
					[
						[ { data: '3' } ],
						[ { data: '78,659' } ],
						[ { data: '60,507' } ]
					],
					[
						[ { data: '4' } ],
						[ { data: '78,659' } ],
						[ { data: '60,507' } ]
					],
					[
						[ { data: '...' } ],
						[ { data: '...' } ],
						[ { data: '...' } ]
					],
					[
						[ { data: '18' } ],
						[ { data: '78,659' } ],
						[ { data: '60,507' } ]
					],
					[
						[ { data: '19' } ],
						[ { data: '78,659' } ],
						[ { data: '60,507' } ]
					],
					[
						[ { data: '20' } ],
						[ { data: '78,659' } ],
						[ { data: '60,507' } ]
					],
					[
						[ { data: 'Soma', destaque: true } ],
						[ { data: '1,580,962', destaque: true } ],
						[ { data: '1,216,125', destaque: true } ]
					]
				],
				fonte: 'Elaborado pela SP-Urbanismo a partir de dados da Geoimóvel'
			},
			tabela04: {
				titulo: 'Estoque total e estoque potencial por setor do PIU-ACP',
				colunas: [
					{ titulo: 'Setor Arco Pinheiros' },
					{ titulo: 'Estoque total' },
					{ titulo: 'Estoque potencial' },
					{ titulo: 'Taxa de transformação (%)' },
					{ titulo: 'Participação (%)' }
				],
				linhas: [
					[
						[ { data: 'Setor 1 (Parque Tecnológico do Jaguaré)' } ],
						[ { data: '739.264' } ],
						[ { data: '511.837' } ],
						[ { data: '69,2' } ],
						[ { data: '14,7' } ]
					],
					[
						[ { data: 'Setor 2 (Misto do Jaguaré)' } ],
						[ { data: '494.919' } ],
						[ { data: '353.383' } ],
						[ { data: '71,4' } ],
						[ { data: '10,2' } ]
					],
					[
						[ { data: 'Setor 3 (Presite Altino)' } ],
						[ { data: '1.328.941' } ],
						[ { data: '931.772' } ],
						[ { data: '70,1' } ],
						[ { data: '26,8' } ]
					],
					[
						[ { data: 'Setor 4 (Gastão Vidigal)' } ],
						[ { data: '1.016.286' } ],
						[ { data: '724.334' } ],
						[ { data: '75,4' } ],
						[ { data: '9,4' } ]
					],
					[
						[ { data: 'Setor 5 (Mofarrej)' } ],
						[ { data: '430.935' } ],
						[ { data: '324.981' } ],
						[ { data: '75,4' } ],
						[ { data: '9,4' } ]
					],
					[
						[ { data: 'Setor 6 (Jardim Humaitá)' } ],
						[ { data: '628.762' } ],
						[ { data: '437.253' } ],
						[ { data: '69,5' } ],
						[ { data: '12,6' } ]
					],
					[
						[ { data: 'Setor 7 (São Remo-Corifeu)' } ],
						[ { data: '96.518' } ],
						[ { data: '56.292' } ],
						[ { data: '58,3' } ],
						[ { data: '1,6' } ]
					],
					[
						[ { data: 'Setor 8 (Ceagesp)' } ],
						[ { data: '18.815' } ],
						[ { data: '9.408' } ],
						[ { data: '50,0' } ],
						[ { data: '0,3' } ]
					],
					[
						[ { data: 'Setor 9 (Vila Leopoldina)' } ],
						[ { data: '168.556' } ],
						[ { data: '122.925' } ],
						[ { data: '72,9' } ],
						[ { data: '3,5' } ]
					],
					[
						[ { data: 'ZOE - USP' } ],
						[ { data: 'NA' } ],
						[ { data: 'NA' } ],
						[ { data: 'NA' } ],
						[ { data: 'NA' } ]
					],
					[
						[ { data: 'Total', destaque: true } ],
						[ { data: '4.922.995', destaque: true } ],
						[ { data: '3.472.184', destaque: true } ],
						[ { data: '70,5', destaque: true } ],
						[ { data: '100,0', destaque: true } ]
					]
				],
				fonte: 'Elaborado pela SP-Urbanismo'
			},
			tabela05: {
				titulo: 'Estoque potencial de área computável por grandes setores e parâmetros urbanísticos (m²)',
				colunas: [
					{ titulo: '' },
					{ titulo: 'T' },
					{ titulo: 'Q1' },
					{ titulo: 'Q2,3' },
					{ titulo: 'Total' },
					{ titulo: '(%)' }
				],
				linhas: [
					[
						[ { data: 'Vila Leopoldina' } ],
						[ { data: '2.295.957' } ],
						[ { data: '902.832' } ],
						[ { data: '1.141.190' } ],
						[ { data: '4.339.978' } ],
						[ { data: '54,4' } ]
					],
					[
						[ { data: 'Jaguaré' } ],
						[ { data: '512.226' } ],
						[ { data: '30.553' } ],
						[ { data: '3.101.280' } ],
						[ { data: '3.644.060' } ],
						[ { data: '45,6' } ]
					],
					[
						[ { data: 'Total', destaque: true } ],
						[ { data: '2.808.183', destaque: true } ],
						[ { data: '933.385', destaque: true } ],
						[ { data: '4.242.470', destaque: true } ],
						[ { data: '7.984.038', destaque: true } ],
						[ { data: '100,0', destaque: true } ]
					],
					[
						[ { data: '(%)' } ],
						[ { data: '35,2' } ],
						[ { data: '11,7' } ],
						[ { data: '53,1' } ],
						[ { data: '100,0' } ],
						[ { data: '', vazio: true } ]
					]
				],
				fonte: 'Elaborado pela SP-Urbanismo'
			},
			tabela06: {
				titulo: 'Distribuição espacial da área computável – horizonte de 20 anos',
				colunas: [
					{ titulo: '' },
					{ titulo: 'T' },
					{ titulo: 'Q1' },
					{ titulo: 'Q2,3' },
					{ titulo: 'Total' },
					{ titulo: '(%)' }
				],
				linhas: [
					[
						[ { data: 'Vila Leopoldina' } ],
						[ { data: '606.018' } ],
						[ { data: '147.110' } ],
						[ { data: '147.110' } ],
						[ { data: '900.237' } ],
						[ { data: '74,4' } ]
					],
					[
						[ { data: 'Jaguaré' } ],
						[ { data: '204.211' } ],
						[ { data: '27.374' } ],
						[ { data: '75.318' } ],
						[ { data: '309.903' } ],
						[ { data: '25,6' } ]
					],
					[
						[ { data: 'Total', destaque: true } ],
						[ { data: '810.229' } ],
						[ { data: '174.483' } ],
						[ { data: '225.428' } ],
						[ { data: '1.210.140', destaque: true } ],
						[ { data: '100,0' } ]
					],
					[
						[ { data: '(%)' } ],
						[ { data: '67,0' } ],
						[ { data: '14,4' } ],
						[ { data: '18,6' } ],
						[ { data: '100,0' } ],
						[ { data: '', vazio: true } ]
					]
				],
				fonte: 'Elaborado pela SP-Urbanismo'
			},
			tabela07: {
				titulo: 'Valor de cadastro por grandes setores e parâmetros urbanísticos',
				colunas: [
					{ titulo: '' },
					{ titulo: 'T' },
					{ titulo: 'Q1' },
					{ titulo: 'Q2,3' }
				],
				linhas: [
					[
						[ { data: 'Vila Leopoldina' } ],
						[ { data: '1.866,5' } ],
						[ { data: '1.864,9' } ],
						[ { data: '1.652,9' } ]
					],
					[
						[ { data: 'Jaguaré' } ],
						[ { data: '1.613,6' } ],
						[ { data: '1.329,6' } ],
						[ { data: '1.304,4' } ]
					]
				],
				fonte: 'Elaborado pela SP-Urbanismo'
			},
			tabela08: {
				titulo: 'Estimativa de receita pelo instrumento de OODC para o PIU-ACP (R$)',
				colunas: [
					{ titulo: '' },
					{ titulo: 'T' },
					{ titulo: 'Q1' },
					{ titulo: 'Q2,3' },
					{ titulo: 'Total' },
					{ titulo: '(%)' }
				],
				linhas: [
					[
						[ { data: 'Vila Leopoldina' } ],
						[ { data: '212.087.616' } ],
						[ { data: '68.696.676' } ],
						[ { data: '60.789.089' } ],
						[ { data: '341.573.381' } ],
						[ { data: '78,0' } ]
					],
					[
						[ { data: 'Jaguaré' } ],
						[ { data: '61.785.535' } ],
						[ { data: '9.098.839' } ],
						[ { data: '25.539.119' } ],
						[ { data: '96.423.492' } ],
						[ { data: '22,0' } ]
					],
					[
						[ { data: 'Total', destaque: true } ],
						[ { data: '273.873.151', destaque: true } ],
						[ { data: '77.795.515', destaque: true } ],
						[ { data: '86.328.207', destaque: true } ],
						[ { data: '437.996.873', destaque: true, cor: true } ],
						[ { data: '100,0', destaque: true } ]
					],
					[
						[ { data: '(%)' } ],
						[ { data: '62,5' } ],
						[ { data: '17,8' } ],
						[ { data: '19,7' } ],
						[ { data: '100,0' } ],
						[ { data: '', vazio: true } ]
					]
				],
				fonte: 'Elaborado pela SP-Urbanismo'
			},
			tabela09: {
				titulo: 'Estimativa de receita em diferentes cenários – aumento do valor de cadastro e/ou aumento do horizonte de planejamento (R$)',
				colunas: [
					{ titulo: '' },
					{ titulo: '20 anos' },
					{ titulo: '30 anos' }
				],
				linhas: [
					[
						[ { data: 'Valor de Cadastro (atual)' } ],
						[ { data: '437,993,873' } ],
						[ { data: '656,676,258' } ]
					],
					[
						[ { data: 'Valor de Cadastro (100% - T; 50% - Q)' } ],
						[ { data: '793,931,886', cor: true } ],
						[ { data: '1,191,915,823' } ]
					]
				],
				fonte: 'Elaborado pela SP-Urbanismo'
			},
			tabela10: {
				titulo: 'Contrapartidas previstas na hasta 01',
				colunas: [
					{ titulo: 'Contrapartidas' },
					{ titulo: 'R$' }
				],
				linhas: [
					[
						[ { data: 'Realocação de famílias em favelas' } ],
						[ { data: '46,717,307' } ]
					],
					[
						[ { data: 'Reabilitação do Cingapura' } ],
						[ { data: '12,931,250' } ]
					],
					[
						[ { data: 'Arborização' } ],
						[ { data: '2,000,000' } ]
					],
					[
						[ { data: 'Sociabilização' } ],
						[ { data: '2,920,943' } ]
					],
					[
						[ { data: 'Equipamentos' } ],
						[ { data: '15,430,500' } ]
					],
					[
						[ { data: 'Total', destaque: true } ],
						[ { data: '80,000,000', destaque: true } ]
					]
				]
			},
			tabela11: {
				titulo: 'Contrapartidas previstas na hasta 02',
				colunas: [
					{ titulo: 'Contrapartidas' },
					{ titulo: 'R$' }
				],
				linhas: [
					[
						[ { data: 'Realocação de famílias em favelas' } ],
						[ { data: '51,530,032' } ]
					],
					[
						[ { data: 'Reabilitação do Cingapura' } ],
						[ { data: '–' } ]
					],
					[
						[ { data: 'Arborização' } ],
						[ { data: '–' } ]
					],
					[
						[ { data: 'Sociabilização' } ],
						[ { data: '3,559,057' } ]
					],
					[
						[ { data: 'Equipamentos' } ],
						[ { data: '–' } ]
					],
					[
						[ { data: 'Total', destaque: true } ],
						[ { data: '55,089,089', destaque: true } ]
					]
				]
			},
			tabela12: {
				titulo: 'Valor médio da outorga e do valor de cadastro por zona – Cenário 01',
				colunas: [
					{ titulo: '' },
					{ titulo: 'T' },
					{ titulo: 'Q1' },
					{ titulo: 'Q2,3' },
					{ titulo: 'Total' }
				],
				linhas: [
					[
						[ { data: 'Total', destaque: true } ],
						[ { data: '273,873,151', destaque: true } ],
						[ { data: '77,795,515', destaque: true } ],
						[ { data: '86,328,207', destaque: true } ],
						[ { data: '437,996,873', destaque: true } ]
					],
					[
						[ { data: 'OODC / AC' } ],
						[ { data: '348.6' } ],
						[ { data: '332.6' } ],
						[ { data: '452.7' } ],
						[ { data: '361.9' } ]
					],
					[
						[ { data: 'OODC / ACA' } ],
						[ { data: '464.8' } ],
						[ { data: '665.3' } ],
						[ { data: '905.4' } ],
						[ { data: '587.3', cor: true } ]
					],
					[
						[ { data: 'Valor de cadastro médio (R$/m²)' } ],
						[ { data: '1,751.1' } ],
						[ { data: '1,622.2' } ],
						[ { data: '1,493.8' } ],
						[ { data: '1,755.9' } ]
					]
				],
				fonte: 'Elaborado pela SP-Urbanismo'
			},
			tabela13: {
				titulo: 'Valor médio da outorga e do valor de cadastro por zona – Cenário 02',
				colunas: [
					{ titulo: '' },
					{ titulo: 'T' },
					{ titulo: 'Q1' },
					{ titulo: 'Q2,3' },
					{ titulo: 'Total' }
				],
				linhas: [
					[
						[ { data: 'Total', destaque: true } ],
						[ { data: '547,746,302', destaque: true } ],
						[ { data: '116,693,273', destaque: true } ],
						[ { data: '129,492,311', destaque: true } ],
						[ { data: '793,931,886', destaque: true } ]
					],
					[
						[ { data: 'OODC / AC' } ],
						[ { data: '697.3' } ],
						[ { data: '499.0' } ],
						[ { data: '679.1' } ],
						[ { data: '656.1' } ]
					],
					[
						[ { data: 'OODC / ACA' } ],
						[ { data: '929.7' } ],
						[ { data: '997.9' } ],
						[ { data: '1,358.1' } ],
						[ { data: '1,026.2', cor: true } ]
					],
					[
						[ { data: 'Valor de cadastro médio (R$/m²)' } ],
						[ { data: '3,502.2' } ],
						[ { data: '2,433.3' } ],
						[ { data: '2,240.7' } ],
						[ { data: '3,063.7' } ]
					]
				],
				fonte: 'Elaborado pela SP-Urbanismo'
			},
			tabela14: {
				titulo: 'Intervalo de negociação de área computável adicional por cenário de preços',
				colunas: [
					{ titulo: '' },
					{ titulo: 'Cenário 01' },
					{ titulo: 'Cenário 02' }
				],
				linhas: [
					[
						[ { data: 'OODC (R$)' } ],
						[ { data: '55,089,088.77' } ],
						[ { data: '55,089,088.77' } ]
					],
					[
						[ { data: 'Preço (R$/m²)' } ],
						[ { data: '587.27' } ],
						[ { data: '1,026.24' } ]
					],
					[
						[ { data: 'ACA (m²)' } ],
						[ { data: '93,804.63', cor: true } ],
						[ { data: '53,680.48', cor: true } ]
					]
				]
			},
			tabela15: {
				titulo: 'Intervalo de negociação de área computável adicional por cenário de preços',
				colunas: [
					{ titulo: '' },
					{ titulo: 'Área computável' },
					{ titulo: 'Área computável adicional' },
					{ titulo: 'Receita (C01)' },
					{ titulo: 'Receita (C02)' }
				],
				linhas: [
					[
						[ { data: 'Cenário base' } ],
						[ { data: '1,210,140' } ],
						[ { data: '807,627' } ],
						[ { data: '437,996,873' } ],
						[ { data: '793,931,886' } ]
					],
					[
						[ { data: 'Hasta 1' } ],
						[ { data: '334,677' } ],
						[ { data: '266,376' } ],
						[ { data: '...' } ],
						[ { data: '...' } ]
					],
					[
						[ { data: 'Hasta 2 (C01)' } ],
						[ { data: '140,556' } ],
						[ { data: '93,805' } ],
						[ { data: '...' } ],
						[ { data: '...' } ]
					],
					[
						[ { data: 'Hasta 2 (C02)' } ],
						[ { data: '80,434' } ],
						[ { data: '53,680' } ],
						[ { data: '...' } ],
						[ { data: '...' } ]
					],
					[
						[ { data: 'Cenário final (C01)' } ],
						[ { data: '734,907' } ],
						[ { data: '447,447' } ],
						[ { data: '262,774,349' } ],
						[ { data: '459,188,350', cor: true } ]
					],
					[
						[ { data: 'Cenário final (C02)' } ],
						[ { data: '7995,029' } ],
						[ { data: '487,571' } ],
						[ { data: '286,338,249' } ],
						[ { data: '500,365,384', cor: true } ]
					]
				],
				fonte: 'Elaborado pela SP-Urbanismo'
			},
			tabela16: {
				colunas: [
					{ titulo: 'Tema' },
					{ titulo: 'PMSP' },
					{ titulo: 'Sociedade Civil' }
				],
				linhas: [
					[
						[ { data: 'Habitação social' } ],
						[ { data: 'COHAB' } ],
						[ { data: 'Conselho Municipal de Habitação' } ]
					],
					[
						[ { data: 'Habitação - Mercado imobiliário' } ],
						[ { data: 'SEHAB' } ],
						[ { data: 'Segmento empresarial (CMPU)' } ]
					],
					[
						[ { data: 'Vulnerabilidade social' } ],
						[ { data: 'SMADS, SMDHC' } ],
						[ { data: 'ONG, Universidade (CMPU)' } ]
					],
					[
						[ { data: 'Polos econômicos' } ],
						[ { data: 'SMTE' } ],
						[ { data: 'Segmento comercial (CMPU)' } ]
					],
					[
						[ { data: 'Mobilidade' } ],
						[ { data: 'SMT' } ],
						[ { data: 'ONG' } ]
					],
					[
						[ { data: 'Espaços públicos' } ],
						[ { data: 'SP-Urbanismo/SMDU' } ],
						[ { data: 'Conselho Participativo Municipal' } ]
					],
					[
						[ { data: 'Zeladoria urbana' } ],
						[ { data: 'Subprefeitura' } ],
						[ { data: 'Conselho Participativo Municipal' } ]
					],
					[
						[ { data: 'Intervenções' } ],
						[ { data: 'SIURB' } ],
						[ { data: 'Conselho Participativo Municipal' } ]
					]
				]
			}
		}
	},
	components: {
		PageTop,
		Indice,
		Comments,
		CommentsLoader,
		Apoio,
		Tabela,
		Imagem,
		Galeria,
		Processo
	},
	mixins: [ consultasCommons ]

}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';

div.ArcoPinheiros2 {
	/* path -> \\spurbsp01\Gestao_Projetos\Projetos\Arco Pinheiros\01_PIU_ACP\02_Proposta_Preliminar\Apresentações\ACP_MAR_ABRIL_2019.pptx */
	a.button {
		&, & > i { font-size: 1.2rem !important; }
	}
	ol.objetivos {
		columns: 280px;
		column-gap: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(calc(320px - 2rem), 1fr));
		counter-reset: li;
		list-style-type: none;
		padding: 0 2rem;
		margin: 4rem auto;
		position: relative;
		width: 100%;
		max-width: calc(100% - 400px - 4rem);
		@media (max-width: 1200px) {
			max-width: 100%;
		}
		li {
			padding: 1rem 1rem 1.6rem;
			margin: 0 0 2rem;
			page-break-inside: avoid;
			break-inside: avoid-column;
			position: relative;
			border: 1px solid $cinza-2;
			border-radius: 2px;
			background-color: #FFF;
			box-shadow: 0 2px 2px $sombra-4;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			&::before {
				counter-increment: li;
				content: counters(li, '', upper-roman);
				display: block;
				margin: 0 auto 1rem;
				width: 2rem;
				line-height: 2rem;
				text-align: center;
				color: #FFF;
				font-size: 1rem;
				background-color: #F39200;
				border-radius: 50%;
			}
			&, * {
				font-family: $grotesca;
				font-size: 1rem;
				-webkit-hyphens: auto;
				-ms-hyphens: auto;
				hyphens: auto;
			}
			p {
				text-align: center;
				margin: 0 0 1rem;
			}
			div.iconCont {
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				justify-content: space-around;
				margin: 0;
				div.icone {
					display: inline-flex;
					flex-direction: column-reverse;
					align-items: center;
					width: 50%;
					img {
						margin: 0 0 4px;
						width: 80px;
						height: 80px;
					}
					span {
						display: block;
						text-align: center;
						padding: 0 8px;
						font-size: smaller;
						line-height: 1.2;
						text-transform: uppercase;
						color: #F39200;
						max-width: 120px;
						font-weight: bold;
					}
				}
			}
		}
		@media (max-width: 600px) {
			padding: 1rem 1rem 0;
			li {
				margin-bottom: 1rem;
			}
			caption {
				width: calc(100% - 2rem);
				margin: 0 1rem;
				font-size: 1rem;
			}
		}
	}
	div.colunas {
		display: flex;
		flex-flow: row wrap;
		align-items: flex-start;
		justify-content: center;
		padding: 0 2rem 0;
		margin: 4rem auto;
		max-width: calc(100% - 400px - 4rem);
		&.w992 { max-width: 992px; }
		@media (min-width: 2400px) {
			max-width: 2000px;
		}
		@media (max-width: 1200px) {
			max-width: 100%;
		}
		@media (max-width: 600px) {
			padding: 0 1rem 0;
			margin: 2rem auto;
		}
		& > div {
			position: relative;
			border-width: 2px;
			border-style: solid;
			border-radius: 20px;
			min-width: calc(320px - 2rem);
			width: 100%;
			label {
				display: block;
				padding: 0.4rem 1rem;
				border-radius: 16px 16px 0 0;
				font-weight: bold;
				color: #FFF;
				text-align: center;
				line-height: 1.2;
			}
			ul {
				margin: 0;
				padding: 0.8rem 1rem;
				list-style-type: none;
				border-radius: 20px;
				max-width: unset;
				li {
					font-family: $grotesca;
					font-size: 1rem;
					-webkit-hyphens: auto;
					-ms-hyphens: auto;
					hyphens: auto;
					margin: 0 0 0.4rem;
					padding: 0;
					&:last-child { margin-bottom: 0; }
					& > ul {
						border-width: 1px;
						border-style: solid;
						list-style-type: square;
						padding-left: 2rem;
						margin: 0.1rem 0;
						li { margin-bottom: 0; }
					}
					&.destaque {
						font-size: 1.2rem;
						text-align: center;
					}
				}
				&.laranja {
					margin: 1rem 1rem 0;
					padding: 8px;
					border: 1px dashed #F39200;
					li {
						border: 2px solid #F39200;
						border-radius: 16px;
						padding: 0.4rem 0.6rem;
						text-align: center;
						b {
							color: #F39200;
						}
						p {
							font-family: inherit;
							font-size: inherit;
							margin: 0.1rem 0 0;
						}
					}
				}
			}
			&.w100 {
				max-width: 100%;
				margin: 0 0 2rem;
			}
			&.w50 {
				max-width: calc(50% - 1rem);
				margin: 0 2rem 2rem 0;
			}
			&.w33 {
				max-width: calc((100% / 3) - 2rem);
				margin: 0 2rem 2rem 0;
			}
			&.w25 {
				max-width: calc(25% - 2rem);
				margin: 0 2rem 2rem 0;
			}
			&:last-child {
				margin-right: 0;
			}
			&.cinza {
				border-color: $cinza-2;
				label { background-color: $cinza-2; }
				ul li > ul { border-color: $cinza-2; }
			}
			&.laranja {
				border-color: #F39200;
				label { background-color: #F39200; }
			}
			@media (max-width: 600px) {
				&.w100, &.w50, &.w33, &.w25 {
					margin: 0 0 1rem;
				}
			}
			@media (max-width: calc(2*(320px - 1rem))) {
				min-width: 100%;
			}
			div.obs {
				font-size: 0.8rem;
				line-height: 1.2;
				font-weight: bold;
				text-align: center;
				margin: 4px 0 0.8rem;
				padding: 0 1rem;
			}
		}
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
	div.infograficoEquilibrio {
		&, * {
			font-family: $grotesca;
			font-size: 1rem;
		}
		p {
			margin: 0;
			padding: 0;
		}
		max-width: 700px;
		min-width: calc(320px - 2rem);
		margin: 4rem auto;
		padding: 0 2rem;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		.wrapperBranco {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: calc(50% + 3rem);
			padding: 2rem 4rem 2rem 2rem;
			border: 1px solid #BDBDBD;
			border-radius: 1rem;
			& > div {
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				img {
					min-width: 100px;
				}
				p {
					font-size: 1rem;
					line-height: 1.2;
				}
			}
			.cima {
				flex-direction: row;
				p {
					margin-left: 1rem;
				}
			}
			.baixo {
				flex-direction: row-reverse;
				p {
					margin-right: 1rem;
					text-align: right;
				}
			}
			.vs {
				align-items: center;
				justify-content: center;
				width: 4rem;
				height: 4rem;
				padding: 0;
				font-size: 4rem;
				line-height: 0;
				border-radius: 100%;
				margin: 1rem 0;
				border-width: 0;
				background: #F39200;
				color: #FFF;
				z-index: 1;
			}
		}
		.wrapperLaranja {
			border: 2px solid #F39200;
			background-color: #FFF;
			border-radius: 1rem;
			width: 50%;
			overflow: hidden;
			margin-left: -2rem;
			& > * {
				text-align: center;
				line-height: 1.2;
			}
			p.title {
				text-transform: uppercase;
				font-weight: bold;
				margin-bottom: 1rem;
				background-color: #F39200;
				border-radius: calc(1rem - 8px) calc(1rem - 8px) 0 0;
				color: #FFF;
				padding: 0.5rem 1rem;
			}
			p.premissas {
				padding: 0 1rem;
				text-align: center;
				span {
					display: block;
					margin: 0.5rem auto;
					width: 1rem;
					line-height: 1rem;
					border-radius: 0.5rem;
					font-size: 1rem;
					font-weight: bold;
					background-color: #F39200;
					color: #FFF;
				}
			}
			.iconCont {
				display: flex;
				flex-flow: row wrap;
				justify-content: space-around;
				margin: 1rem 0;
				padding: 0 1rem;
				.icone {
					display: flex;
					flex-flow: column nowrap;
					align-items: center;
					justify-content: center;
					width: calc((320px - 4rem)/2 - 2rem);
					img {
						min-width: 40px;
						min-height: 40px;
					}
					span {
						font-size: 0.6rem;
						font-weight: bold;
						color: #F39200;
					}
				}
			}
		}
		@media (max-width: 600px) {
			flex-flow: column;
			align-items: center;
			padding: 0 1rem;
			margin: 2rem auto;
			.wrapperBranco {
				padding: 0.75rem 1rem 4rem;
				border: 1px solid #BDBDBD;
				border-radius: 1rem;
				margin: 0;
				width: calc(320px - 2rem);
				& > div {
					padding: 0;
					border-width: 0;
					&.vs {
						width: 2rem;
						height: 2rem;
						font-size: 2rem;
					}
				}
			}
			.wrapperLaranja {
				width: calc(320px - 4rem);
				margin: -3rem 0 0;
			}
		}
	}
	section > img {
		display: block;
		max-width: 700px;
		background-color: #EEE;
		margin: 2rem auto;
		padding: 2rem;
	}
};
</style>
