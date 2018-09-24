<template>
	<div class="ArcoPinheiros" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/arco-pinheiros_dt.jpg" :esta_consulta="estaConsulta">
			<template slot="subtitulo"><div>1ª consulta pública – Projeto de Intervenção Urbana Arco Pinheiros</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<p>A estratégia de ordenamento territorial proposta pelo Plano Diretor Estratégico do Município de São Paulo – PDE, Lei nº 16.050/2014, observando os princípios, diretrizes e objetivos da Política Urbana e as dimensões social, ambiental, imobiliária, econômica e cultural, estrutura-se a partir da divisão do território em áreas homogêneas: as Macroáreas.</p>
			<p>A Macroárea de Estruturação Metropolitana – MEM, devido ao seu potencial de transformação, tem papel estratégico na reestruturação do Município e é neste contexto que se insere o Arco Pinheiros – ACP, subsetor da Orla Ferroviária e Fluvial.</p>
			<p>Os estudos introdutórios para o Arco Pinheiros, ora apresentados pela Prefeitura Municipal, por meio da Secretaria Municipal de Urbanismo e Licenciamento – SMUL complementam os estudos já elaborados para os demais subsetores da Orla ferroviária e Fluvial, propostos pelo PDE.</p>
			
			<figure>
				<ACPMEM></ACPMEM>
				<figcaption>Subsetor Arco Pinheiros do Setor Orla Ferroviária e Fluvial</figcaption>
			</figure>

			<p>O Decreto n° 56.901 de 29 de março de 2016, disciplinou o Projeto de Intervenção Urbana como processo de estruturação de projetos de interesse público ao reunir e articular os estudos técnicos necessários a promover o ordenamento e a reestruturação urbana em áreas subutilizadas e com potencial de transformação. Este Decreto também definiu os conteúdos do PIU associados a etapas sucessivas, bem como instituiu etapas para a divulgação à população, que poderá acompanhar os estudos e contribuir para a construção de um projeto pactuado entre todos.</p>
			<p>Neste sentido, através desta consulta pública são apresentados o diagnóstico socioterritorial e o programa de interesse público, para comentários os quais subsidiarão o desenvolvimento dos estudos do PIU Arco Pinheiros e permitirão entender a expectativa dos munícipes em relação ao futuro desta região da cidade.</p>
			<p>O PIU Arco Pinheiros deverá resultar em projeto de lei a ser encaminhado à Câmara Municipal, tratando dos instrumentos de política urbana e de gestão ambiental, nos termos do PDE, para promoção do ordenamento e reestruturação urbana deste território.</p>
			<ProcessoPIU></ProcessoPIU>
		</section>

		<section>
			<h2 class="titulo" indent="1">Motivação</h2>
			<p>A área do Arco Pinheiros compreende a porção mais a oeste do Setor Orla Ferroviária e Fluvial da Macroárea de Estruturação Metropolitana – MEM, definida pelo PDE como local estratégico para a reestruturação da cidade devido à presença dos principais eixos que articulam polos e municípios da Região Metropolitana de São Paulo, além de possuir regiões que passam por intensos processos de mudança dos padrões de uso e ocupação do solo.</p>
			<p>Tal caracterização da MEM encontra total aderência no território do Arco Pinheiros, devido à presença de importantes rodovias (Presidente Castelo Branco, Anhanguera e Bandeirantes) no extremo oeste da cidade que impactam diretamente no território em estudo, bem como de áreas industriais que se encontram em transformação e áreas de usos extensivos, como a CEAGESP, para a qual já há estudos de transferência de suas atividades para outros locais.</p>

			<figure title="Diagrama – Arco Pinheiros" class="coluna">
				<img :src="imgSrc('arquivos/arco-pinheiros/diagrama_atual.png')" alt="Diagrama – Arco Pinheiros">
				<figcaption>Diagrama – Arco Pinheiros</figcaption>
			</figure>

			<p>O território do Arco Pinheiros também é marcado pela presença da Cidade Universitária, implantada por volta dos anos 1940. À época, a iniciativa de se criar um campus universitário afastado do centro urbano tinha como objetivo a busca por condições urbanísticas mais propícias ao conhecimento, e desta forma, após anos de investimentos a Cidade Universitária foi criada sobre a antiga Fazenda Butantã, no meio de uma grande área verde, isolada da cidade e, portanto, de difícil acesso. Condição esta que perdura até os dias de hoje, mesmo se considerarmos a chegada da linha de metrô (linha 4) ao bairro do Butantã e a implantação da Estação de trem da CPTM, Cidade Universitária (linha 9).</p>
			<p>No território a oeste da Cidade Universitária encontra-se o parque Tecnológico do Jaguaré, perímetro este definido pelo PDE, cuja antiga ocupação industrial já não apresenta o mesmo grau de intensidade de outros tempos, onde se verifica a presença de áreas ociosas.</p>
			<p>Nesta mesma margem do rio, fazendo limite com a ferrovia, localiza-se a Zona Predominantemente Industrial (ZPI) do Jaguaré, onde se concentram indústrias em plena atividade, garantindo diversos empregos.</p>
			<p>Na margem oposta do Rio Pinheiros encontra-se a área da CEAGESP, ocupada pela maior rede pública de silos e armazéns gerais do Estado de São Paulo, uso este já incompatível com o desenvolvimento da cidade, sobretudo devido à complexa logística necessária ao desenvolvimento da atividade.</p>
			<p>Neste sentido, pode-se dizer que mais de 50% do território do Arco Pinheiros está distribuído em 4 “porções” isoladas, desconectadas e monofuncionais. Estas características não estão alinhadas ao modelo de cidade desejado: a cidade compacta, conectada, sustentável e inclusiva, onde seja possível aproximar o emprego da moradia, através do adensamento planejado, orientado pelo transporte público de alta e média capacidade, onde se promova a recuperação e o resgate de seus recursos naturais, e por fim, onde se promovam novas centralidades com diversidades de usos, serviços e espaços públicos seguros e ativos que favoreçam a interação social.</p>
			<p>A presença de um campus universitário de grande importância como a USP, de uma zona industrial voltada a indústrias de alta tecnologia, um parque tecnológico incipiente, empresas de criação e a possibilidade de um futuro polo de pesquisa na gleba CEAGESP corroboram para que o território do Arco Pinheiros transforme-se em  um território de inovação, voltado à educação, pesquisa, criação, tecnologia e outros usos associados ao desenvolvimento de novas centralidades de âmbito local.</p>
			<p>Desta forma, o grande desafio do PIU do Arco Pinheiros é promover o processo de transformação urbana capaz de contribuir para integrar, articular e reforçar as potencialidades presentes nas diferentes porções do seu território, de modo a assegurar o uso mais coerente e inteligente da cidade, de sua infraestrutura e de seus recursos, perseguindo as estratégias definidas pelo Plano Diretor Estratégico – PDE:</p>
			<ul style="list-style-type: upper-roman;">
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
			</ul>

			<figure title="Diagrama proposto – Arco Pinheiros" class="coluna">
				<img :src="imgSrc('arquivos/arco-pinheiros/diagrama_proposto.png')" alt="Diagrama proposto – Arco Pinheiros">
				<figcaption>Diagrama proposto – Arco Pinheiros</figcaption>
			</figure>

			<Mapa :mapa_attrs="mapa_attrs"></Mapa>
			<Comments :attr="{id:1, context:'Motivação'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Diagnóstico</h2>
			<h3>Perímetro de Estudo</h3>
			<p>O ACP abrange áreas de 2 Subprefeituras – Lapa e Butantã – e 5 Distritos – Butantã, Jaguaré, Vila Leopoldina e pequenas porções dos territórios dos Distritos de Jaguara e Rio Pequeno.</p>

			<figure>
				<LimitesAdm></LimitesAdm>
				<figcaption>Subprefeituras e Distritos integrantes do perímetro do Arco Pinheiros</figcaption>
			</figure>

			<p>O território do Arco Pinheiros, localizado na região oeste do município de São Paulo, faz divisa com Osasco e possui localização estratégica na confluência dos dois principais eixos de estruturação da metrópole, os rios Pinheiros e Tietê. Seu perímetro delimita uma área de 1.467 ha, sendo que 48% do território apresenta condicionantes específicas no desenvolvimento dos estudos do PIU ACP, correspondendo aos perímetros da Universidade de São Paulo – USP, Instituto de Pesquisas Tecnológicas – IPT, Instituto Butantan, Área de Intervenção Urbana Parque Tecnológico Jaguaré, Companhia de Entrepostos e Armazéns Gerais de São Paulo – CEAGESP e Projeto de Intervenção Urbana Vila Leopoldina Villa Lobos.</p>

			<figure>
				<ProjetosColocalizados></ProjetosColocalizados>
				<figcaption>Perímetro do Arco Pinheiros – Projetos Colocalizados</figcaption>
			</figure>

			<Diagnostico></Diagnostico>
			<Comments :attr="{id:2, context:'Diagnóstico'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Programa de Interesse Público</h2>
			<p>Os objetivos estabelecidos pelo PDE para a Macroárea de Estruturação Metropolitana, mais especificamente para o Setor Orla Ferroviária e Fluvial, e pelos Planos Regionais das Subprefeituras Butantã e Lapa deverão nortear a construção de um Programa de Interesse Público para o PIU Arco Pinheiros que promova a transformação e qualificação do território, objetivando:</p>
			<ul style="list-style-type: upper-roman;">
				<li>Incremento populacional e construtivo apoiado na melhoria da infraestrutura, incentivando o melhor aproveitamento da terra urbana;</li>
				<li>Fortalecimento dos polos econômicos e de implantação de novas atividades econômicas;</li>
				<li>Redução da vulnerabilidade social e qualificação da moradia;</li>
				<li>Melhoria da mobilidade por meio do incentivo à mobilidade não motorizada e melhoria das conexões dos diferentes modos de transporte público, associado à qualificação do sistema de espaços públicos;</li>
				<li>Recuperação da qualidade ambiental contemplando implantação de sistema de áreas verdes, mitigação dos problemas de microdrenagem e redução das ilhas de calor;</li>
				<li>Ampliação da oferta de equipamentos urbanos e sociais dando suporte à demanda atual e futura;</li>
				<li>Qualificação do ambiente urbano, por meio da preservação e valorização dos recursos naturais e da proteção e recuperação do patrimônio histórico, artístico, cultural, urbanístico, arqueológico e paisagístico existente.</li>
			</ul>
			<Comments :attr="{id:3, context:'Programa de Interesse Público'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="2">Diretrizes e viabilidade da transformação</h3>
			<p>Os estudos desta fase inicial, ora apresentados, trazem os objetivos do projeto de intervenção urbana. Estes objetivos compõem o cenário almejado e foram construídos à luz dos elementos estruturadores do desenvolvimento urbano. A construção deste cenário será buscada por meio da implementação das diretrizes urbanísticas gerais e específicas apresentadas a seguir: </p>
			<h4>1. Direcionar o adensamento construtivo e populacional associado à infraestrutura de transporte público e à transformação dos terrenos ociosos e subutilizados.</h4>
			<p>As diretrizes de uso do solo se iniciam com uma diretriz geral que define <em>setores de adensamento construtivo e populacional</em> para o Arco Pinheiros, com base na proximidade da rede de transporte, na presença de projetos colocalizados, no grau de ociosidade dos usos atuais e na função estratégica dos locais perante a unidade de projeto.</p>
			<p>Após a definição dos novos setores de adensamento, pela diretriz geral, apresentam-se as diretrizes de uso do solo específicas para cada setor, garantindo a eles diversidade social e econômica.</p>

			<figure title="Setores de adensamento construtivo e populacional" class="borda">
				<img :src="imgSrc('arquivos/arco-pinheiros/ACP-diretrizes-1.png')" alt="Setores de adensamento construtivo e populacional">
				<h6>Setores de adensamento construtivo e populacional</h6>
				<ul class="legenda">
					<li><div style="border: 2px solid black"></div> Perímetro Arco Pinheiros</li>
					<li><div :style="backgroundImg('arquivos/arco-pinheiros/legenda_ferrovias.png')"></div>Ferrovia</li>
					<li><div style="background: #6fb3be;"></div> Hidrografia</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_onibus.png')" alt=""></div>Terminal de ônibus</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_metro.png')" alt=""></div>Estação do Metrô</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_cptm.png')" alt=""></div>Estação da CPTM</li>
					<li><div style="background: rgba(255, 0, 0, .2); border: 2px solid rgba(255, 0, 0, .6); color: red; font-weight: bold;">1</div>Nova centralidade do Jaguaré</li>
					<li><div style="background: rgba(255, 0, 0, .2); border: 2px solid rgba(255, 0, 0, .6); color: red; font-weight: bold;">2</div>Nova frente da USP / Parque Tecnológico do Jaguaré</li>
					<li><div style="background: rgba(255, 0, 0, .2); border: 2px solid rgba(255, 0, 0, .6); color: red; font-weight: bold;">3</div>Nova frente do Rio Pinheiros</li>
					<li><div style="background: rgba(255, 0, 0, .2); border: 2px solid rgba(255, 0, 0, .6); color: red; font-weight: bold;">4</div>Mofarrej</li>
					<li><div style="background: rgba(255, 0, 0, .2); border: 2px solid rgba(255, 0, 0, .6); color: red; font-weight: bold;">5</div>PIU Vila Leopoldina - Villa Lobos</li>
					<li><div style="background: rgba(255, 0, 0, .2); border: 2px solid rgba(255, 0, 0, .6); color: red; font-weight: bold;">6</div>CEAGESP</li>
					<li><div style="background: rgba(255, 0, 0, .2); border: 2px solid rgba(255, 0, 0, .6); color: red; font-weight: bold;">7</div>Av. Dr. Gastão Vidigal</li>
				</ul>
				<div class="fontes">Mapa <strong>MDC, 2004</strong> | Elaboração <strong>SPUrbanismo</strong></div>
			</figure>

			<h5>1.1. Diretriz geral: A definição de sete setores</h5>
			<p>Tendo em vista as condicionantes citadas acima, percebem-se duas grandes áreas propícias ao adensamento no arco. Uma primeira, o antigo bairro industrial do Jaguaré, devido à presença da Av. Jaguaré, futuro corredor de ônibus, seus terrenos ociosos, a proximidade da USP e a intenção de se implantar um Parque Tecnológico, diretriz do PDE. Outra área importante é o entorno da CEAGESP, devido à proximidade às estações de trem e à Av. Gastão Vidigal, pela ociosidade de algumas porções do território e pelo desejo de transformação da gleba CEAGESP, incentivada pela LPUOS. Tais áreas foram subdivididas em sete setores, cujas diferentes características atuais e propostas formam um mosaico que visa garantir a diversidade do adensamento e de novas sinergias.</p>
			<p>A primeira área de adensamento corresponde aproximadamente ao perímetro do Parque Tecnológico do Jaguaré, conforme definido no PDE em seu Quadro 13. Trata-se do antigo bairro industrial do Jaguaré, localizado nas quadras entre a USP, a Comunidade Nova Jaguaré e a Marginal Pinheiros. Para o PIU ACP, o perímetro da área de transformação estende-se, diferentemente daquele do Quadro 13 do PDE, apenas até as quadras lindeiras à Av. Kenkiti Simomoto, uma vez que, para além, existem importantes indústrias em atividade cuja transformação não é oportuna.</p>
			<p>Sobre a segunda área de adensamento construtivo e populacional, o entorno da CEAGESP, é possível definir um quadrante com alta probabilidade de transformação que abrange desde a Av. Dr. Gastão Vidigal até o Rio Pinheiros e desde a Av. Mofarrej até o perímetro do PIU Vila Leopoldina-Villa Lobos, quadrante que visa absorver a frente de desenvolvimento imobiliário da Vila Leopoldina, conduzindo-a de modo organizado e comedido em direção ao Rio Pinheiros, garantindo maior equilíbrio social e ambiental e evitando a construção de empreendimentos isolados do contexto urbano.</p>
			<p>Além disso, o adensamento dessa área deve considerar, no caso da transferência do entreposto, a possibilidade de utilização do pavilhão da CEAGESP de forma articulada ao projeto, implantando uma centralidade comercial, institucional ou de eventos associada a um sistema de espaços públicos.</p>
			<p>É importante, para o reequilíbrio das dinâmicas metropolitanas, que haja um adensamento predominantemente populacional na margem norte do Rio Pinheiros e de postos de trabalho no Jaguaré, o que deverá colaborar para a redução gradativa da necessidade de travessia das pontes.</p>
			<p>Essa estratégia de reequilíbrio só pode ter sucesso se o uso predominante pretendido vier acompanhado de outros usos. Dessa forma, em uma escala menor de definição de usos, no interior da área do Jaguaré, foi predefinido (i) um setor com capacidade de adensamento populacional, junto à Av. Jaguaré; outro (ii) oferecendo grande oportunidade para receber usos institucionais e empresas de inovação, nas bordas da USP; e (iii) um terceiro junto à frente do Rio Pinheiros, que poderá receber usos não residenciais nos moldes dos empreendimentos lançados na outra margem. Já no lado norte do rio, as (iv) ruas entre a Av. Mofarrej e a CEAGESP, bem como o (v) perímetro do PIU Vila Leopoldina/Villa Lobos, apresentam-se como grandes eixos ambientais e de verticalização que ligam a Av. Dr. Gastão Vidigal às estações do trem e ao rio, eixos separados pelo setor do entreposto (vi) CEAGESP. Por fim, (vii) a Av. Gastão Vidigal, devido à proximidade do transporte público e à presença de diversas áreas de ZEIS, apresenta-se como um importante território de adensamento capaz de absorver em seu processo de transformação parte da demanda por moradia de interesse social. O principal objetivo dos setores é dar origem a novos bairros dinâmicos economicamente, ambientalmente qualificados e socialmente mais equilibrados.</p>

			<h5>1.2. Setor: Nova centralidade do Jaguaré<br>
			<div class="sub">Diretriz: Implantar uma nova centralidade com uso misto junto à Av. Jaguaré</div></h5>
			<p>Cumprindo a importante função de exercer o papel de uma nova centralidade, as quadras centrais do Jaguaré estão voltadas para o futuro corredor de ônibus da avenida de mesmo nome, que também se conecta com a Estação Villa Lobos-Jaguaré do trem. Trata-se de um setor estratégico para receber uma intensificação de usos residenciais, comerciais e de serviços, trazendo dinâmica para esse antigo bairro industrial. Neste setor, devido à presença de lotes subutilizados, de grandes dimensões, representando aproximadamente dois terços de seus terrenos, deve ser incentivada uma transformação com destinações espacialmente predefinidas. A estratégia do ACP é pensar esses parcelamentos em conjunto, de modo que as destinações obrigatórias componham uma rede de espaços públicos e equipamentos articulados e que os usos abrigados pelos edifícios tenham complementaridade e equilíbrio.</p>
			<p>Essas possibilidades também promoverão a qualificação da Av. Jaguaré, resgatando o grande eixo central do antigo bairro industrial planejado por Henrique Dumont Villares na década de 1930. Ainda na direção desse resgate, o setor oferece a oportunidade de qualificação dos galpões tombados da antiga Cooperativa Agrícola de Cotia, por meio da promoção de novos usos em seus interiores, associados aos espaços livres do setor.</p>
			<h5>1.3. Setor: Nova frente da USP / Parque Tecnológico do Jaguaré<br>
			<div class="sub">Diretriz: Implantar uma nova frente urbana nas quadras lindeiras à Av. Politécnica, que abrigue usos associados à pesquisa e inovação e à moradia estudantil</div></h5>
			<p>Este setor é composto pelas quadras lindeiras à Av. Politécnica, onde se encontra o Portão 2 da Cidade Universitária. Conforme as orientações do PDE e devido à presença de instituições de ensino, pesquisa e desenvolvimento públicas e privadas importantes, a potencialidade em abrigar novas empresas de tecnologia é grande. Trata-se da constituição de um bairro que realiza a transição da Cidade Universitária para a cidade, uma nova camada externa à universidade, capaz promover sua abertura. A Av. Escola Politécnica, por exemplo, poderá contemplar novas fachadas ativas, tornando-se o eixo que relaciona a universidade com a cidade.</p>
			<p>Nesse setor, devem ser estudados índices moderados de adensamentos, de modo a realizar uma transição morfológica harmoniosa entre a centralidade proposta para o futuro corredor de ônibus da Av. Jaguaré e a USP.</p>
			<h5>1.4. Setor: Nova Frente do Rio Pinheiros<br>
			<div class="sub">Diretriz: Implantar uma nova frente urbana para o Rio Pinheiros, abrigando, predominantemente, usos não residenciais e contemplando a recuperação da APP e sua dinamização como espaço livre de uso público</div></h5>
			<p>As quadras do Jaguaré que se voltam ao Rio Pinheiros possuem alto potencial de adensamento. Esse perímetro se encontra hoje quase todo murado, fazendo uma frente de aproximadamente 600m de extensão completamente fechada para o Rio Pinheiros. Para reverter essa situação, o projeto procura resgatar a APP do rio, por meio da utilização da frente dos lotes do setor como espaços livres públicos integrados com a rede ambiental proposta. Acredita-se que o uso não residencial é oportuno neste território, em diálogo com a outra margem do rio, onde já existem edifícios corporativos de baixo gabarito.</p>
			<h5>1.5. Setor: Mofarrej<br>
			<div class="sub">Diretriz: Promover um vetor de adensamento construtivo e populacional conectando a Av. Dr. Gastão Vidigal Marginal Pinheiros</div></h5>
			<p>As ruas Merguenthaler, Xavier Krauss e a Nassib Mofarrej são vias de ligação entre a Av. Dr. Gastão Vidigal e a Estação CEASA do trem, constituindo um grande conjunto de quadras próximas à infraestrutura de transportes com porções ociosas em seu território.  É preciso, contudo, melhorar e qualificar estas vias através da implantação de alamedas, de forma a melhorar a acessibilidade às estações e cumprir importantes funções ambientais. Com essas melhorias, poderão ser aplicados a este setor os parâmetros urbanísticos de adensamento de maior intensidade, diversidade de usos e fachada ativa.</p>
			<h5>1.6. Setor: PIU Vila Leopoldina – Villa Lobos<br>
			<div class="sub">Diretriz: Acompanhar o desenvolvimento do PIU VL-VL garantindo sua integração com as diretrizes do PIU ACP</div></h5>
			<p>O PIU Vila Leopoldina encontra-se hoje em estado avançado de negociação com a Prefeitura de São Paulo. Existem questões importantes a serem garantidas em seu desenvolvimento e detalhamento para se obter uma integração com as estratégias do PIU ACP. Deve-se garantir que as habitações de interesse social sejam implantadas em consonância com as diretrizes do PIU ACP, que o eixo verde central do projeto seja efetivamente público, associado a fachadas ativas, e o uso misto no empreendimento, sem que se torne um condomínio fechado ou monofuncional.</p>
			<p>A constituição de um eixo de verticalização transversal ao sistema de transporte e ao Rio Pinheiros está alinhada com outras áreas de projeto ao longo do Setor Orla Ferroviária e Fluvial da MEM (notadamente o Arco Tietê e a OUCAB), contribuindo o ordenamento e construção da paisagem urbana.</p>
			<h5>1.7. Setor: CEAGESP<br>
			<div class="sub">Diretriz: Promover um desenvolvimento com uso misto na gleba da CEAGESP, em caso de seu parcelamento, e incentivar a utilização de seu pavilhão central para novos usos dinâmicos, associados aos espaços livres da gleba e do PIU ACP</div></h5>
			<p>Os cenários de desenvolvimento da CEAGESP dependem de diferentes esferas do poder público e vão da permanência total da atual atividade até sua transformação integral, podendo haver inúmeras formas de se transformar esse território.</p>
			<p>Na hipótese da transformação integral, o parcelamento da gleba deverá atentar para a implantação de arruamento integrado ao sistema viário existente no seu entorno, contribuindo para o rompimento da barreira representada por esta grande gleba, melhorando a acessibilidade local e promovendo novos espaços públicos que façam a ligação entre a Av. Dr. Gastão Vidigal e a Marg. Pinheiros.</p>
			<p>Neste sentido, algumas diretrizes para parcelamento foram estudadas pela SPUrbanismo em sua Nota Técnica referente ao entreposto, publicada em Outubro de 2016.</p>
			<p>Destaca-se a relevância do pavilhão central que ostenta atributos de relevo para atividade de mercado de gêneros alimentícios e afins, inclusive associada a outros usos que promovam dinâmica urbana e apoio aos outros usos prospectados para a gleba, a exemplo da criação de um território de inovação.</p>			
			<h5>1.8. Setor: Av. Dr. Gastão Vidigal<br>
			<div class="sub">Diretriz: Garantir que o desenvolvimento imobiliário da Av. Dr. Gastão Vidigal,  dependente da implantação do futuro corredor, contemple a transformação das diversas áreas de ZEIS-3 que se encontram no setor</div></h5>
			<p>O setor da Av. Dr. Gastão Vidigal é hoje uma Zona de Estruturação Metropolitana Prevista - ZEMP, cuja liberação para seus lotes de índices de maior adensamento depende da implementação de um futuro corredor de ônibus. A especificidade deste setor é a presença de diversas áreas de ZEIS – 3, o que poderá facilitar a implantação de novos conjuntos habitacionais de interesse social na área, promovendo um adensamento de maior equilíbrio social.</p>
			<h4>2. Assegurar a oferta de atendimento habitacional à população vulnerável</h4>
			<p>Tendo em vista as necessidades habitacionais de interesse social levantadas no Diagnóstico Socioterritorial, apresentamos as diretrizes para o enfrentamento das questões habitacionais no âmbito do PIU Arco Pinheiros, observadas as diretrizes expostas no Plano Diretor Estratégico – PDE (Lei Municipal nº 16.050/2014), no Plano Municipal de Habitação – PMH (Projeto de Lei nº 619/2016) e nos Planos Regionais das Prefeituras Regionais (Decreto Municipal nº 57.537/2016).</p>

			<figure title="Diretrizes habitacionais" class="borda">
				<img :src="imgSrc('arquivos/arco-pinheiros/ACP-diretrizes-2.png')" alt="Diretrizes habitacionais">
				<h6>Diretrizes habitacionais</h6>
				<ul class="legenda">
					<li><div style="border: 2px solid black"></div> Perímetro Arco Pinheiros</li>
					<li><div :style="backgroundImg('arquivos/arco-pinheiros/legenda_ferrovias.png')"></div>Ferrovia</li>
					<li><div style="background: #6fb3be;"></div> Hidrografia</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_onibus.png')" alt=""></div>Terminal de ônibus</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_metro.png')" alt=""></div>Estação do Metrô</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_cptm.png')" alt=""></div>Estação da CPTM</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_habitacao_1.png')" alt=""></div> Urbanização e regularização fundiária de assentamentos precários</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_habitacao_2.png')" alt=""></div> Provisão de novas moradias</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_habitacao_3.png')" alt=""></div> Áreas potenciais de cota de solidariedade</li>
				</ul>
				<div class="fontes">Mapa <strong>MDC, 2004</strong> | Elaboração <strong>SPUrbanismo</strong></div>
			</figure>

			<h5>2.1. Promover a articulação territorial entre os locais habitados por população de baixa renda e o entorno, sobretudo promovendo melhorias no acesso aos serviços e equipamentos públicos do entorno.</h5>
			<p>A garantia do direito à moradia digna é dada não somente pelo acesso à unidade habitacional adequada, mas também pela garantia ao acesso à cidade e aos serviços públicos, bem como o usufruto de um ambiente sustentável, conforme definição de Direito à Cidade Sustentável, do Estatuto da Cidade (Lei Federal nº 10.257/2001) e Plano Diretor Estratégico. Assim, os processos de qualificação urbanística de assentamentos precários devem articular as ações habitacionais à provisão de infraestrutura e à recuperação ambiental no território, “e ainda às políticas de promoção da cidadania, de saúde, educação, cultura, assistência social, trabalho e geração de renda, de modo que a dimensão de exclusão socioterritorial possa ser enfrentada de forma mais abrangente” (PMH, Art. 56).</p>
			<h5>2.2. Enfrentar as questões habitacionais existentes, priorizando a consolidação da população localizada em assentamentos precários do perímetro.</h5>
			<p>A utilização dos recursos previstos para o enfrentamento das demandas habitacionais de interesse social deverá ser orientada a fim de atender as populações vulneráveis residentes, priorizando a consolidação dos domicílios por meio de ações de regularização fundiária, urbanização dos assentamentos precários, promovendo o reassentamento das famílias removidas dentro do perímetro, sem agravamento da vulnerabilidade urbana e social, respeitados os critérios de priorização de atendimento de SEHAB, de acordo com o art. 25 do PDE (Lei Municipal nº 16.050/2014).</p>
			<h5>2.3. Minimizar os deslocamentos involuntários decorrentes da implantação do Programa de Intervenções do PIU ACP, priorizando soluções de atendimento definitivas, garantida a participação de SEHAB e dos Conselhos Gestores de ZEIS na elaboração dos projetos urbanos e dos planos de reassentamento. </h5>
			<p>Em casos de deslocamento para implantação das ações do Programa de Intervenções, deverá ser elaborado Plano de Reassentamento prévio, com participação da comunidade envolvida e do Conselho Gestor da ZEIS e, se possível, construir novas unidades habitacionais para atendimento das famílias previamente à remoção, de modo a evitar o dispêndio de recursos públicos com o Programa Auxílio Aluguel.</p>
			<p>Tendo em vista sua localização privilegiada no território municipal, as famílias residentes no perímetro do PIU ACP dificilmente encontrarão solução habitacional em região com melhores condições de infraestrutura urbana, proximidade de emprego e acesso à cidade.</p>
			<p>Por isto, também é fundamental realizar o atendimento habitacional definitivo das famílias eventualmente removidas dentro do perímetro, priorizando a localização próxima aos locais de origem ou condições de acesso aos serviços públicos semelhantes ou melhores à situação original devendo considerar a seguinte ordem de localização, mediante justificativa técnica: (i) no local (realocação); (ii) no entorno (mesmo setor); (iii) no perímetro do Arco Pinheiros. Caso a caso, poderá ser prevista a solução viável mais adequada às famílias, mediante processo participativo.</p>
			<h5>2.4. Reduzir a vulnerabilidade social da população em situação de rua por meio do acolhimento habitacional e atendimento das demandas específicas, nos termos do Serviço de Moradia Social estabelecido pelo PDE.</h5>
			<p>Os Planos Regionais das Subprefeituras (Decreto Municipal nº 57.537/2016) identificaram presença de população em situação de rua próximas ao Jaguaré e à CEAGESP, atualmente atendidos por dois equipamentos de assistência social provisórios, instalados em contêineres. Apontam, em seu perímetro identificado como ID 18 (Leopoldina/Jaguaré), diretriz específica de “estudar a viabilidade de criação de albergue feminino e Centro de Atenção Psicossocial - CAPS próximos ao CEAGESP” (PR-LA| ID 18 | LEOPOLDINA/JAGUARÉ, Dec. 57.537/2016).</p>
			<p>Para a operacionalização do Serviço de Moradia Social, pode-se prever construção de unidades habitacionais completas e incompletas, para abrigo e/ou residência, em parque imobiliário público, vinculado ao Programa Locação Social (PMH, Art. 16, II; Art. 24) nas duas localidades identificadas como prioritárias no perímetro: Setor CEAGESP e Setor ZDE Jaguaré. Concomitante, devem-se prever recursos para trabalho técnico social e de pós-ocupação para todas as situações de vulnerabilidade social e urbana e famílias de baixa renda impactadas por projetos urbanos.</p>
			<h5>2.5. Produzir moradia para atender as famílias removidas em decorrência de obras públicas, o déficit habitacional acumulado e a demanda futura.</h5>
			<p>A provisão de novas unidades habitacionais objetiva atender famílias de baixa renda em duas situações distintas: aquelas removidas de seus domicílios ou as que não têm moradia.</p>
			<p>Esta diretriz tem como desdobramentos que apontam para linhas programáticas e ações estratégicas que viabilizem sua efetivação, expostas a seguir: </p>
			<ul>
				<li>Buscar soluções para a construção de parque público habitacional para fins de Locação Social, visando ao acesso a moradias adequadas em áreas bem localizadas.</li>
				<li>Promover moradias por autogestão, nos termos da Lei Municipal nº 16.587/2016 (ao menos 30% dos recursos arrecadados para a finalidade habitacional de interesse social do montante arrecadado pelo FUNDURB devem ser destinados a esta modalidade de provisão habitacional por autogestão).</li>
			</ul>
			<h5>2.6. Aplicar a cota de solidariedade originária do Arco Pinheiros dentro do perímetro do PIU, estimulando a produção de habitação de interesse social até seis salários mínimos pela iniciativa privada.</h5>
			<p>O poder público tem capacidade limitada de atender às necessidades habitacionais do Município. Assim, é estratégico estabelecer que o atendimento à Cota de Solidariedade originários de empreendimentos dentro do perímetro do Arco Pinheiros seja realizado no mesmo território, preferencialmente no mesmo setor, respeitado o exposto no PDE também para projetos urbanísticos e empreendimentos imobiliários de grande porte em glebas e lotes que estejam sujeitos ao desmembramento, parcelamento ou loteamento.</p>
			<h5>2.7. Viabilizar terras para a provisão habitacional em quantidade suficiente para atender às necessidades habitacionais no perímetro e ao déficit habitacional acumulado e à demanda futura.</h5>
			<p>É preciso garantir o acesso à terra nesta região, para além das ZEIS 1 demarcadas no perímetro, valendo-se das seguintes estratégias:</p>
			<ul>
				<li>Viabilizar ZEIS-2; ZEIS-3 e ZEIS-5 do perímetro,</li>
				<li>Utilizar imóveis públicos, demarcados ou não como ZEIS; articulando com órgãos das esferas municipal, estadual e federal para viabilização de unidades habitacionais em lotes como os pertencentes à São Paulo Transporte, à Universidade de São Paulo e à CEAGESP;</li>
				<li>Utilizar áreas destinadas à produção de habitação social provenientes do atendimento à cota de solidariedade.</li>
				<li>Especificamente em relação à favela São Remo estabelecer diálogo com a USP e seus institutos acadêmicos a fim de compatibilizar o projeto com propostas, ações e a sua urbanização, bem como a utilização da ZEIS-2 contígua à favela, de propriedade da USP;</li>
				<li>Aplicar os instrumentos indutores de função social da propriedade, em especial aqueles demarcados como ZEIS, tais como Direito de Preempção, Consórcio Imobiliário, Arrecadação de Bens Abandonados e o Parcelamento, Edificação e utilização Compulsórios – PEUC.</li>
				<li>Utilizar o solo criado e o direito de laje das áreas institucionais (valendo-se inclusive do percentual sem destinação para a constituição de áreas institucionais) oriundas de destinações de áreas públicas em parcelamentos ou loteamentos do perímetro, para a construção de empreendimentos de uso misto contendo equipamentos sociais no térreo e habitação de interesse social nos andares superiores.</li>
			</ul>
			<h5>2.8. Promover a Intervenção Integrada nos Assentamentos Precários do perímetro do Arco Pinheiros, garantindo a participação social e dos Conselhos Gestores das ZEIS na elaboração dos planos de urbanização e regularização fundiária.</h5>
			<p>O enfrentamento da precariedade habitacional e urbana presente nas favelas, loteamentos e conjuntos habitacionais irregulares de baixa renda e nos cortiços, visa qualificar o ambiente urbano e melhorar a qualidade de vida de seus moradores, por meio da Intervenção Integrada em Assentamentos Precários a partir de ações de regularização urbanística e fundiária e de melhorias habitacionais, da promoção do saneamento ambiental, da mobilidade e acessibilidade locais, da provisão de equipamentos e qualificação dos espaços públicos, da implantação de rede de espaços livres, áreas verdes e de parques lineares. O Plano de Urbanização deve contar com o envolvimento dos Conselhos Gestores das ZEIS e tem como ações estratégicas específicas para o território:</p>
			<ul>
				<li>Incorporação da totalidade do perímetro da Favela São Remo;</li>
				<li>Cadastramento das famílias de novos assentamentos não demarcados como ZEIS-1 pelo PDE/ LPUOS ou enquadrados como favelas pelo HabitaSAMPA;</li>
				<li>A regularização fundiária como garantia da posse, da permanência das famílias e acesso à terra urbana;</li>
			</ul>
			<h5>2.9. Mitigar os riscos geológico-geotécnicos e de inundações, prevenindo o surgimento de novas situações de vulnerabilidade</h5>
			<p>Esta diretriz, em consonância com o Art. 12, § 1º, VIII do Plano Diretor Estratégico, tem como objetivo mitigar as situações de fragilidade urbana nas quais populações de baixa renda, pela falta de acesso à moradia, encontram-se em situações de risco de morte. No perímetro, foram identificadas duas áreas com presença de risco geológico e que demandam intervenções públicas:</p>
			<ul>
				<li>Risco de solapamento ao longo do córrego, que impacta 6% do território da favela São Remo;</li>
				<li>Necessidade de melhorias na favela Nova Jaguaré para atendimento habitacional da população residente, reassentamento de famílias vivendo em áreas de risco e provisão de infraestrutura, notadamente rede de coleta de esgoto e iluminação pública (PR-LA| ID 22 | VILA NOVA JAGUARÉ, Dec. 57.537/2016);</li>
			</ul>
			<h5>2.10. Garantir condições adequadas de habitabilidade para as unidades consolidadas nos Planos de Urbanização e Regularização Fundiária de assentamentos precários e para os conjuntos habitacionais existentes por meio de ações de melhorias habitacionais e assistência técnica, jurídica e social (Lei federal nº 11.888/2008).</h5>
			<p>A melhoria habitacional tem como objetivo oferecer recursos e assessoria técnica especializada (seja ela por promoção pública, por escritórios públicos ou sem fins lucrativos de assessoria técnica, por agentes privados ligados ao setor de reformas ou por meio de subsídio à compra de materiais de construção) prevê sanar a precariedade edilícia dessas moradias, sobretudo as situações insalubres que dizem respeito a iluminação e ventilação, revertendo necessidades de remoções a custos menores do que a produção de uma unidade nova.</p>
			<p>Também existe demanda de requalificação de alguns conjuntos habitacionais entregues  anteriormente. Assim, é fundamental prever recursos para a requalificação arquitetônica e urbanística, acompanhada de trabalho técnico social.</p>
			<h4>3. Ampliar e qualificar a rede de mobilidade associada a um sistema ambiental que conecte as estações e terminais de transporte publico, moradias, equipamentos, parques e áreas verdes</h4>
			<p>Apesar do território do Arco Pinheiros estar diretamente conectado à região metropolitana através das marginais, bem como pela ferrovia (implantada no sentido leste-oeste), a dificuldade de acesso tanto internamente como externamente é um dos pontos vulneráveis da região.  Neste sentido pode-se dizer que o perímetro carece de conexões no nível local, entre seus diferentes setores, e com demais regiões do município.</p>
			<p>Em relação ao transporte de alta e media capacidade, verifica-se a ausência de linhas de metrô que atendam ao perímetro. Apenas a estação Butantã (linha 4) atende parcialmente o território, pois localiza- se aproximadamente a 1km da entrada principal da Cidade Universitária, situada no extremo leste do perímetro do ACP. Além disto, as estações da CPTM presentes no território encontram-se desconectadas do tecido urbano resultando em difícil acesso.</p>
			<p>O PIU ACP baseado no princípio do Desenvolvimento Orientado pelo Transporte Sustentável – DOTS, isto é, adensamento construtivo e demográfico junto aos meios de transporte público de média e alta capacidade propõe a melhoria da mobilidade nos diferentes modos de transporte: transporte público, não motorizado e da acessibilidade a pé.</p>

			<figure title="Diretrizes de mobilidade e transporte" class="borda">
				<img :src="imgSrc('arquivos/arco-pinheiros/ACP-diretrizes-3.png')" alt="Diretrizes de mobilidade e transporte">
				<h6>Diretrizes de mobilidade e transporte</h6>
				<ul class="legenda">
					<li><div style="border: 2px solid black"></div> Perímetro Arco Pinheiros</li>
					<li><div :style="backgroundImg('arquivos/arco-pinheiros/legenda_ferrovias.png')"></div>Ferrovia</li>
					<li><div style="background: #6fb3be;"></div> Hidrografia</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_onibus.png')" alt=""></div>Terminal de ônibus</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_metro.png')" alt=""></div>Estação do Metrô</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_cptm.png')" alt=""></div>Estação da CPTM</li>
					<li><div class="linha" style="border-width: 2px; border-color: #5c4b8f"></div>Corredores de ônibus existentes</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_mobilidade_2.png')" alt=""></div>Corredores de ônibus municipais planejados - 1ª e 2ª fases</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_mobilidade_3.png')" alt=""></div>Corredores de ônibus metropolitanos planejados</li>
					<li><div class="linha" style="border-width: 2px; border-color: #3d1970; box-shadow: -2px 2px 2px rgba(0, 0, 0, .4)"></div> Pontes necessárias</li>
					<li><div style="border-style: dotted; border-width: 2px; border-color: #5c4b8f; border-radius: 100%; filter: drop-shadow(0 0 2px rgba(0, 0, 0, .8));"></div>Melhorias de passeios necessárias</li>
					<li><div style="border: 0; filter: drop-shadow(0 0 2px rgba(0, 0, 0, .8));"><img :src="imgSrc('arquivos/arco-pinheiros/icone_mobilidade_6.png')" alt=""></div>Transposições necessárias</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_mobilidade_7.png')" alt=""></div>Conexões cicloviárias necessárias</li>
					<li><div style="background: #875656; border-radius: 100%;"></div>Bicicletário ou paraciclo necessário</li>
					<li><div style="background: #d73134; border-radius: 100%; transform: scale(.75)"></div>Bicicletário existente</li>
					<li><div class="linha" style="border-color: #d73134;"></div> Rede cicloviária existente</li>
				</ul>
				<div class="fontes">Mapa <strong>MDC, 2004</strong> | Elaboração <strong>SPUrbanismo</strong></div>
			</figure>

			<p>As diretrizes de mobilidade e transporte desdobram-se nos seguintes propostas:</p>
			<h5>3.1. Melhorar as condições de acesso às estações de transporte público coletivo de alta capacidade.</h5>
			<p>Ampliar e melhorar os acessos, travessias e passeios públicos no entorno das estações de transporte público coletivo de alta capacidade (estações ferroviárias) e incentivar a integração multimodal das estações ferroviárias existentes com outros modos de transporte público e/ou com outros modos de transporte não motorizado.</p>
			<p>As soluções deverão ser planejadas de acordo com as especificidades do entorno de cada estação. Na Estação Villa Lobos – Jaguaré deverá ser estudada a implantação de passarela ou a integração de pedestres com a ponte existente. Na Estação Ceasa, deverá ser estudada a implantação de passarela e a reabertura da Rua Hayden (na hipótese de transformação urbanística da gleba CEAGESP). A concretização dessa diretriz passa pela ampliação da rede cicloviária em direção às Estações Imperatriz Leopoldina, Domingos de Moraes e Ceasa, e pela implantação de bicicletários ou paraciclos junto às estações Domingos de Moraes, Imperatriz Leopoldina e Presidente Altino. Passa também pela previsão de áreas para embarque e desembarque de passageiros de outros modos de transporte público coletivo (ônibus) e outros modos de transporte público individual (taxi / carro por aplicativo), por meio da requalificação das vias existentes no entorno das estações.</p>
			<h5>3.2. Definir regramento urbanístico para o sistema viário compatível com os planos de implantação de corredores de transporte público coletivo de média capacidade, bem como para o plano de intervenção no sistema viário proposto. </h5>
			<p>Revisar leis de alinhamento viário atualmente em vigor e propor novos alinhamentos viários compatíveis com os programas e planos de implantação de corredores de média capacidade.</p>
			<p>Programa de Corredores Metropolitanos (EMTU, 2010) e Plano Municipal de Mobilidade Urbana de São Paulo – PlanMob (SMT, 2015), este último em vigor pelo Decreto 56.834/2016, estabelecem uma rede de corredores de transporte de média capacidade que abrangem a cidade e a região metropolitana. No Arco Pinheiros, é proposto um corredor metropolitano no eixo da Av. Corifeu de Azevedo Marques e Av. Vital Brasil; além de corredores municipais no eixo da Av. Escola Politécnica, Av. Jaguaré e Av. Queiroz Filho; no eixo da Av. Dr. Gastão Vidigal e nas vias marginais Tietê e Pinheiros.</p>
			<p>As avenidas Corifeu de Azevedo Marques, Vital Brasil, Escola Politécnica, Queiroz Filho e Dr. Gastão Vidigal são cobertas por leis de alinhamento viário atualmente em vigor Como trata-se de antigos alinhamentos propostos, deverão ser analisados, e eventualmente feitas propostas de revisão, de modo que sejam adequados às novas demandas por estruturas urbanas e permitam a implantação da infraestrutura prevista pelas Secretarias / Empresas do Município e do Governo do Estado.</p>
			<p>Por outro lado, a Av. Jaguaré e as vias marginais Tietê e Pinheiros estão citadas no Programa de Corredores Metropolitanos (EMTU, 2010) e Plano Municipal de Mobilidade Urbana de São Paulo – PlanMob (SMT, 2015) como vias previstas para a implantação de corredores de transporte coletivo de média capacidade, porém não são cobertas por leis de alinhamento viário em vigor.</p>
			<p>Deverá ser analisado o porte e a capacidade dessas vias frente às novas demandas e, se necessário, elaboração de uma proposta de novos alinhamentos viários.</p>
			<p>De maneira análoga às vias que receberão infraestrutura de transporte público, deverão ser analisadas as leis de alinhamento viário em vigor nas vias colocalizadas às propostas do PIU e do PDE (Mapa 8), e eventualmente feitas propostas de revisão, bem como a proposta de novos alinhamentos, de modo que sejam adequadas às novas demandas por estruturas urbanas e permitam a implantação das infraestruturas previstas. </p>
			<h5>3.3. Estudar a viabilidade e a inserção urbana das obras de engenharia viária planejadas.</h5>
			<p>Analisar as propostas já realizadas para a implantação de nova travessia sobre o Rio Pinheiros e avaliar a alternativa de melhor compatibilidade com o plano urbanístico.</p>
			<p>Uma série de novas transposições foram propostas sobre o Rio Pinheiros na região do ACP. As mais recentes são: ligação entre a Av. Escola Politécnica e a Av. Queirós Filho (Plano Regional da Lapa, 2004), ligação entre a Av. Escola Politécnica e a Marginal Pinheiros (projeto de Operação Urbana Vila Leopoldina, 2005), ligação entre a Av. Alexandre Mackenzie e a R. Hayden (projeto de Operação Urbana Vila Leopoldina, 2005 e nota técnica CEAGESP, 2016), ligação entre a Av. Alexandre Mackenzie e a R. Xavier Kraus (Plano Regional da Lapa, 2016), ligação entre a Av. José Maria da Silva e a R. Aroaba (nota técnica CEAGESP, 2016). Deverá ser analisada a viabilidade de cada uma delas, bem como o detalhamento de proposta de porte e inserção urbana da alternativa escolhida.</p>
			<h5>3.4. Ampliar e complementar o sistema cicloviário.</h5>
			<p>Ampliar a rede de ciclovias, ciclofaixas, ciclorrotas e ciclopassarelas, visando principalmente: i) a complementação de trechos atualmente desconectados, ii) a transposição barreiras urbanas e iii) facilitar o acesso à rede de transporte público coletivo de alta capacidade e aos equipamentos públicos existentes e propostos. Além disto, fazer gestão junto aos órgãos responsáveis pela rede de transporte e pelos equipamentos públicos para implantação de bicicletários ou paraciclos, adequados à demanda de cada ponto.</p>
			<p>Estudar o complemento da rede cicloviária no bairro Vila Ribeiro de Barros, até a ciclovia existente na Ponte dos Remédios e até o Parque Orlando Villas-Bôas. Estudar a transposição do Rio Pinheiros junto às estações Villa Lobos – Jaguaré, Ceasa e Cidade Universitária e a transposição da ferrovia na região da Estação Imperatriz Leopoldina e/ou do Vd. Miguel Mofarrej e/ou outro ponto ao longo da Av. Mofarrej. Estudar a conexão da rede cicloviária com as estações Imperatriz Leopoldina, Domingos de Moraes e Ceasa e com o CEU Jaguaré.</p>
			<p>Priorizar a proposta de bicicletários junto aos nós de conexão da rede de transporte que ainda carecem de integração cicloviária: estações Domingos de Moraes, Imperatriz Leopoldina e Presidente Altino.</p>
			<h5>3.5 Melhorar as condições de circulação de pedestres</h5>
			<p>Além das melhorias dos passeios públicos no entorno das estações ferroviárias e dos equipamentos públicos existentes e propostos, promover a transposição de barreiras físicas que dificultam a locomoção dos pedestres, por meio de i) requalificação de pontes e viadutos existentes, ii) projeto de novas pontes e viadutos com soluções integradas para a circulação de pedestres, iii) implantação de passarelas articuladas a equipamentos ou estações de transporte.</p>
			<p>Estudar melhorias para o caminhamento dos pedestres nas pontes Cidade Universitária e Jaguaré e no Viaduto Miguel Mofarrej. Incorporar soluções adequadas para circulação de pedestres nas propostas para nova ponte sobre o Rio Pinheiros. Estudar passarelas ou ciclopassarelas junto às estações Villa Lobos – Jaguaré, Ceasa e Imperatriz Leopoldina.</p>
			<h5>3.6. Melhorar as condições de circulação de carga</h5>
			<p>A circulação de cargas no Arco Pinheiros apresenta alta concentração em algumas vias e várias medidas de restrição. Deverão ser estudados os cenários de circulação de carga considerando as hipóteses de transformação urbanística da ZOE da CEAGESP e da ZDE do Jaguaré, de acordo com os parâmetros urbanísticos deste PIU.</p>
			<h4>4. Qualificar os espaços públicos e promover o equilíbrio ambiental e da oferta de equipamentos</h4>
			<p>Ainda que os índices de áreas verdes por habitantes no perímetro do Arco Pinheiros ultrapassem os recomendados pela OMS, a influência da baixa densidade demográfica nos índices e a concentração de áreas verdes no território fazem com que estes números não se reflitam necessariamente em qualidade espacial.  Assim, são detectados pontos com elevação da temperatura além de espaços públicos pouco convidativos ao lazer e ao deslocamento não motorizado.</p>
			<p>Neste sentido, as diretrizes devem orientar o projeto promovendo ordenamento e reestruturação das áreas subutilizadas, com potencial de transformação, que necessitem de mudança no padrão de uso, recuperação econômica e social, promovendo um processo de transformação da forma mais equilibrada possível, inclusive sob o aspecto ambiental.</p>
			<p>A diretriz de qualificação dos espaços públicos e promoção do equilíbrio ambiental e da oferta de equipamentos se desdobra em temas específicos: conectividade, temperatura, drenagem, saneamento ambiental e equipamentos públicos.</p>

			<figure title="Diretrizes ambientais e de equipamentos" class="borda">
				<img :src="imgSrc('arquivos/arco-pinheiros/ACP-diretrizes-4.png')" alt="Diretrizes ambientais e de equipamentos">
				<h6>Diretrizes ambientais e de equipamentos</h6>
				<ul class="legenda">
					<li><div style="border: 2px solid black"></div> Perímetro Arco Pinheiros</li>
					<li><div :style="backgroundImg('arquivos/arco-pinheiros/legenda_ferrovias.png')"></div>Ferrovia</li>
					<li><div style="background: #6fb3be;"></div> Hidrografia</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_onibus.png')" alt=""></div>Terminal de ônibus</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_metro.png')" alt=""></div>Estação do Metrô</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_cptm.png')" alt=""></div>Estação da CPTM</li>
					<li><div :style="backgroundImg('arquivos/arco-pinheiros/icone_ambiental_1.png')" style="background-repeat: repeat !important; border-radius: 100%;"></div>Áreas verdes existentes</li>
					<li><div class="linha" style="border-color: #368d42; border-width: 4px; opacity: .7;"></div>Áreas verdes propostas</li>
					<li><div class="linha" style="border-style: dashed; border-color: #368d42; border-width: 2px;"></div>Eixos ambientais propostos</li>
					<li><div :style="backgroundImg('arquivos/arco-pinheiros/icone_ambiental_10.png')" style="background-repeat: repeat !important; border-radius: 100%;"></div>Áreas prioritárias à implantação de programas para incentivo ao aumento das áreas verdes</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_ambiental_11.png')" alt="" style="vertical-align: 0px !important;"></div>Retenção de águas pluviais dentro dos lotes</li>
					<li><div :style="backgroundImg('arquivos/arco-pinheiros/icone_ambiental_12.png')" style="background-repeat: repeat !important; border-radius: 100%;"></div>Retenção de águas pluviais em espaços públicos</li>
					<li><div class="linha" style="border-color: #334fc4; border-width: 4px;"></div>Parques lineares</li>
				</ul>
				<div>
					<h6 style="font-size: small; margin: 1rem 0 0 0;">Temperatura aparente da superfície (alvo) de registro – 03/09/1999 às 09:57h</h6>
					<div style="font-size: small; line-height: 120%; margin: .4rem 0;">Obs. Segundo a aplicação do modelo de regressão quadrática de Maleret et al. (1985)</div>
					<ul style="display: inline-flex; flex-flow: row wrap; color: white; list-style: none; font-family: inherit; font-size: small; padding: 0; margin: 0 1rem;">
						<li style="background-color: #97c667; margin: 0; padding: 4px 8px;">27,5</li>
						<li style="background-color: #b8cf26; margin: 0; padding: 4px 8px;">28</li>
						<li style="background-color: #dddc14; margin: 0; padding: 4px 8px;">28,5</li>
						<li style="background-color: #f3e826; margin: 0; padding: 4px 8px;">29</li>
						<li style="background-color: #fcbd1d; margin: 0; padding: 4px 8px;">29,5</li>
						<li style="background-color: #f28d14; margin: 0; padding: 4px 8px;">30</li>
						<li style="background-color: #ea6018; margin: 0; padding: 4px 8px;">30,5</li>
						<li style="background-color: #e6371f; margin: 0; padding: 4px 8px;">31°</li>
					</ul>
				</div>
				<div class="fontes">Mapa <strong>MDC, 2004</strong> | Elaboração <strong>SPUrbanismo</strong></div>
			</figure>

			<h5>4.1. Implantar rede ambiental, conectando áreas verdes urbanas, equipamentos relevantes e diferentes modais de transporte, por meio de eixos ambientais.</h5>
			<p>A implantação de rede ambiental realiza-se pelo planejamento das soluções de mitigação dos problemas ambientais (como a proposição de arborização para sombreamento) de maneira articulada com os diferentes modais da rede de circulação e seus equipamentos (estações de metrô e trem, pontos de ônibus, etc.), de modo a conectar parques, praças, demais áreas verdes urbanas e equipamentos relevantes (saúde, educação, esporte, etc.), existentes e projetados, por meio de eixos ambientais, qualificadores do espaço e referenciais na paisagem (alamedas e bulevares), incentivando a utilização do espaço público para o lazer e deslocamento não motorizado e disponibilizando caminhos ecológicos para a fauna.</p>
			<p>Os bulevares e alamedas são vias arborizadas e equipadas e sua implantação de maneira planejada visa à criação de percursos sombreados, acessíveis e iluminados, como meio de proporcionar maior segurança e conforto ao percurso de pedestres e ciclistas, além de orientar os principais deslocamentos.</p>
			
			<figure class="coluna">
				<img :src="imgSrc('arquivos/arco-pinheiros/alamedas-e-bulevares_2.png')">
			</figure>
			<figure class="coluna">
				<img :src="imgSrc('arquivos/arco-pinheiros/alamedas-e-bulevares_1.png')">
				<figcaption>Representação dos eixos ambientais - bulevares e alamedas, respectivamente</figcaption>	
			</figure>

			<h5>4.2. Aumentar a cobertura vegetal em áreas impermeabilizadas.</h5>
			<p>Na região delimitada pelo perímetro do ACP atualmente predomina o clima urbano tropical, que apresenta como principal alteração a elevação da temperatura, mais intensa nos trechos de distrito Vila Leopoldina e Jaguaré, regiões ocupadas por extensas áreas onde predominam indústrias, armazéns e áreas ocupadas com elevado índice de impermeabilização do solo.</p>
			<p>O aumento da cobertura vegetal em áreas impermeabilizadas objetiva o resgate do clima tropical úmido, natural da região, em lugar do clima urbano tropical predominante após substituição da cobertura natural pela impermeabilização do solo e ocupação de extensas áreas por instalações industriais.</p>
			<p>Para tanto, propõe-se a implantação de arborização do sistema viário que promova sombreamento, a abertura e recuperação das áreas de preservação permanente dos córregos que se encontram canalizados, após a descontaminação dos afluentes, bem como a implantação de telhados verdes em galpões industriais e habitações existentes.</p>
			<p>A área delimitada pelo perímetro das Ruas Major Paladino, Guaiapa, Carlos Weber, Mergenthaler e Othão, no distrito Vila Leopoldina, é onde se identificam as temperaturas mais elevadas do território. No distrito Jaguaré, além de algumas áreas industriais, identifica-se alta impermeabilização também no núcleo urbanizado Complexo Nova Jaguaré. Portanto, estas são as regiões prioritárias para as ações de resgate do clima.</p>
			<h5>4.3. Implantar infraestrutura para retenção, controle de descarga e infiltração de águas pluviais.</h5>
			<p>A impermeabilização do solo provoca enchentes e inundações nas várzeas ocupadas pelo processo de urbanização. Cabe ao Município a contenção das águas pluviais desde o ponto mais elevado das bacias até as várzeas, controlando a vazão na fonte, ou seja, priorizando o armazenamento temporário e a elevação do percentual de áreas permeáveis nos lotes, praças, passeios e canteiros.</p>
			<p>Na região delimitada pelo perímetro do ACP há áreas que apresentam inundações, tais como: no distrito Vila Leopoldina identificam-se inundações entre a Av. Nações Unidas e Av. Dr. Gastão Vidigal, na Área de Contribuição Direta de Escoamento Difuso - ACDED Fortunato Ferraz/Belini. Nos distritos de Jaguaré e Butantã identificam-se inundações nas proximidades da Av. Eng. Billings, Av. Jaguaré, e Av. Onofrio Milano, na ACDED Jaguaré/Continental; nas proximidades da raia da USP, na ACDED Jaguaré/Pirajussara e ainda na bacia do Córrego Continental, na Rua Manuel Antonio Portela.</p>
			<p>Portanto, há necessidade de implementação de sistemas de armazenamento temporário e controle da vazão de saída das águas pluviais, de modo a atingir a capacidade de vazão do sistema de captação de águas pluviais, atualmente sendo superada pelo excesso de vazão. No caso dos lotes, este controle deverá ser feito através da implantação da “Lei das Piscininhas”, Lei Estadual nº 12.526/2007, nas áreas impermeabilizadas superiores a 500m² ocupadas por instalações industriais e estacionamentos.</p>
			<p>Para os espaços públicos as ferramentas possíveis de serem utilizadas são os eixos drenantes e áreas de absorção, locais estratégicos em passeios, rotatórias e canteiros existentes, projetados para promover a infiltração, reter e retardar chegada das águas pluviais ao sistema de captação. No caso específico do Córrego Continental, recomenda-se a incorporação do trecho como área de inundação em parque linear a ser implantado após descontaminação do córrego.</p>
			<h5>4.4. Integrar e compatibilizar as propostas do PIU ACP ao Programa Córrego Limpo da Sabesp </h5>
			<p>O lançamento de esgoto doméstico é a principal causa da poluição do Rio Pinheiros e de seus afluentes. Outras fontes de poluição existentes são os resíduos sólidos provenientes do viário, a contaminação das indústrias, o transporte e armazenamento de produtos químicos. Após a construção da Represa Billings, o Rio Pinheiros deixou de receber 12 m³/s de água de suas nascentes, passando a ser alimentado somente por 2,67m³/s provenientes de seus afluentes e por 6,9m³/s de esgoto doméstico e industrial. O Rio Pinheiros e seus afluentes apesar de serem classificados como corpos d’água Classe IV (qualidade menos exigente somente para navegação e harmonia paisagística), não atingem o padrão estabelecido.</p>
			<p>Como as ações para despoluição e recuperação no Município de São Paulo estão a cargo do Programa Córrego Limpo, parceria entre a Prefeitura do município e a SABESP, as ações do PIU ACP deverão estar compatibilizadas com a implantação deste Programa.</p>
			<h5>4.5. Implantar equipamentos de modo a atender as necessidades da população.</h5>
			<p>Objetiva-se lastrear o território com uma oferta equilibrada de equipamentos de educação, saúde, cultura e lazer, favorecendo a população residente e atuando como atrativo para o adensamento populacional desejado.</p>
			<p>Identificam-se no território lotes com grandes dimensões e potencial de transformação dos usos e ocupação atuais, cuja obrigatoriedade de destinação de áreas públicas em caso de edificação a ser construída ou reformada, nos termos dos artigos 44 e 45 da Lei de Parcelamento, Uso e Ocupação do Solo (Lei Municipal nº 16.402/2016) pode representar a disponibilização de novas áreas verdes e  institucionais para provisão de equipamentos.</p>
			<p>Para novas ofertas, a definição do perfil do equipamento deverá ser construída em conjunto com as secretarias competentes, considerando a demanda atual identificada no diagnóstico e a demanda futura.</p>
			<p>Em relação aos equipamentos de esporte, cultura e lazer, O ACP está situado numa região privilegiada da cidade, sob o ponto de vista cultural, devido à presença da Cidade Universitária da Universidade São Paulo uma das mais importantes do país. Por outro lado, o acesso a esses equipamentos é condicionado às regras de acesso ao campus. Além disto, há considerações em relação à distribuição dos equipamentos pelo território: além da concentração dentro do campus da USP, não há bibliotecas nos distritos Jaguara e Rio Pequeno e nem cinemas e teatros no distrito Rio Pequeno.</p>
			<p>Nos distritos do ACP identificam-se áreas verdes com distâncias entre si superiores a 1km e concentradas em extensas áreas. O projeto do ACP deverá introduzir novas áreas verdes nos espaços entre as praças e parques existentes, reduzindo as distâncias para acesso aos mesmos, constituindo um sistema integrados por corredores verdes.</p>
			<h5>4.6. Promover a recuperação das Áreas de Preservação Permanente (APP).</h5>
			<p>Com a diretriz de recuperação das APPs objetiva-se aumentar a oferta de espaços públicos e reaproximar a população do Rio Pinheiros e Córregos Jaguaré, Pirajuçara e Continental.</p>
			<p>A recuperação das APPs dos rios e córregos do ACP pode demandar, dependendo da especificidade do curso d’água e afluentes, a descontaminação das águas, o destamponamento, a recuperação da permeabilidade natural do solo nas margens, a recomposição vegetal e a instalação de equipamentos de lazer e mobilidade. Considerando suas especificidades e representatividade, a confluência dos rios Tietê e Pinheiros, onde se localiza o Complexo Viário Heróis de 1932 (Cebolão) difere-se dos demais trechos no contexto da recuperação ambiental. Se, por um lado, neste trecho o sistema ambiental é fragmentado pela sobreposição com usos extensivos de infraestrutura existentes, por outro, a existência de áreas públicas residuais, a baixa densidade construtiva, e a vinculação institucional da propriedade dos imóveis (EMAE e CTEEP, por exemplo) configuram um potencial para recuperação inclusive além dos limites da APP.</p>
			<h4>5. Promover a integração do patrimônio cultural existente ao território como meio de valorização e preservação</h4>
			<p>O perímetro do Arco Pinheiros conta com um número considerável de bens tombados dentro do Campus da USP, além do Instituto Butantan, Antiga Cooperativa Agrícola de Cotia e conjunto do Casarão de Henrique Dumont Vilares. Apesar de localizado fora do perímetro, o Mirante do Jaguaré possui área envoltória incidindo sobre o território, além de se configurar como um importante marco referencial na paisagem. Por este motivo, também é considerado integrante do conjunto do patrimônio cultural do ACP.</p>
			<p>A diretriz de integração, valorização e preservação dos bens tombados do perímetro do Arco Pinheiros e entorno tem como perspectiva a melhoria da inserção do bem no território por meio da melhoria ao seu acesso e a manutenção das características que lhe conferiram o reconhecimento para o tombamento.</p>
			<p>A preservação do patrimônio cultural é necessária à renovação sem destruição da memória que, junto com a cultura, são direitos de cidadania. O passado está integrado ao presente e expressa capacidades humanas, como as de planejar, construir e transformar e expressa formas de conceber e representar o mundo e a sociedade. O tombamento de bens resulta no seu reconhecimento e proteção legal, impedindo que sejam destruídos ou descaracterizados, portanto, é fundamental à sua preservação. Além disto, espera-se a constante valorização, ampliando o fluxo de interações e propiciando a atuação conjunta entre comunidade e administração pública.</p>

			<figure title="Bens tombados" class="borda">
				<img :src="imgSrc('arquivos/arco-pinheiros/ACP-diretrizes-5.png')" alt="Bens tombados">
				<h6>Bens tombados</h6>
				<ul class="legenda">
					<li><div style="border: 2px solid black"></div>Perímetro Arco Pinheiros</li>
					<li><div :style="backgroundImg('arquivos/arco-pinheiros/legenda_ferrovias.png')"></div>Ferrovia</li>
					<li><div style="background: #6fb3be;"></div>Hidrografia</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_onibus.png')" alt=""></div>Terminal de ônibus</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_metro.png')" alt=""></div>Estação do Metrô</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_cptm.png')" alt=""></div>Estação da CPTM</li>
					<li><div style="background: #e39897; font-weight: bold;">1</div>Mirante do Jaguaré</li>
					<li><div style="background: #e39897; font-weight: bold;">2</div>Conjunto do Casarão Henrique Dumont Vilares</li>
					<li><div style="background: #e39897; font-weight: bold;">3</div>Antiga Cooperativa Agrícola de Cotia</li>
					<li><div style="background: #e39897; font-weight: bold;">4</div>Faculdade de Arquitetura e Urbanismo da USP</li>
					<li><div style="background: #e39897; font-weight: bold;">5</div>Instituto Butantan</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_tombados_9.png')" alt=""></div>Vistas a partir do Mirante do Jaguaré</li>
					<li><div style="border: 0;"><img :src="imgSrc('arquivos/arco-pinheiros/icone_tombados_10.png')" alt=""></div>Acessos à USP e Instituto Butantan</li>
				</ul>
				<div style="font-size: small; display: flex; flex-direction: column; align-items: center; margin: .4rem 0;">
					<h6 style="margin: 1rem 0 .4rem 0; font-size: inherit;">Vistas do território a partir do Mirante do Jaguaré</h6>
					<div style="display: flex; flex-flow: row nowrap; width: calc(100% - 16px); overflow-x: auto; padding: 0 0 8px 0; justify-content: center;" id="benstombados_int">
						<div style="background: #F5F5F5; border-radius: 2px; display: inline-flex; flex-direction: column; padding: 8px; max-width: 280px; margin-right: 8px;">
							<img :src="imgSrc('arquivos/arco-pinheiros/tombados_v1.png')" style="width: unset; max-width: max-content;">
							<div style="padding-top: 8px;"><strong>Vista 1 (v.1):</strong> vista do Rio Pinheiros com Pico do Jaraguá ao fundo</div>
						</div>
						<div style="background: #F5F5F5; border-radius: 2px; display: inline-flex; flex-direction: column; padding: 8px; max-width: 280px; margin-right: 8px;">
							<img :src="imgSrc('arquivos/arco-pinheiros/tombados_v2.png')" style="width: unset; max-width: max-content;">
							<div style="padding-top: 8px;"><strong>Vista 2 (v.2):</strong> vista do CEAGESP</div>
						</div>
						<div style="background: #F5F5F5; border-radius: 2px; display: inline-flex; flex-direction: column; padding: 8px; max-width: 280px;">
							<img :src="imgSrc('arquivos/arco-pinheiros/tombados_v3.png')" style="width: unset; max-width: max-content;">
							<div style="padding-top: 8px;"><strong>Vista 3 (v.3):</strong> vista do Rio Pinheiros e Raia Olímpica da USP</div>
						</div>
					</div>
				</div>
				<div class="fontes">Mapa <strong>MDC, 2004</strong> | Elaboração <strong>SPUrbanismo</strong> | Fotos (vistas) <strong>http://identidadesp.com.br/jaguare/</strong> (acesso em 10/07/2018)</div>
			</figure>

			<p>A promoção da integração, valorização e preservação do patrimônio cultural existente ao território do Arco Pinheiros realiza-se pela inclusão dos bens tombados inseridos no perímetro e entorno nos planos e projetos, localizando-os, caracterizando-os e estabelecendo diretrizes para os espaços públicos, de modo que tenham sua importância reconhecida e sejam diagnosticados possíveis problemas, despertando a atenção dos diferentes agentes, públicos e privados, à importância do bem e à necessidade de promoção de demais ações de preservação como a proteção física por meio do restauro, readequação, requalificação, conservação e/ou manutenção e utilização adequada e de ações de garantia pleno acesso.</p>
			<p>A preservação do patrimônio cultural existente, portanto, não se restringe à proteção legal (tombamento) e proteção física (restauro, readequação, conservação e/ou manutenção e utilização adequada) dos bens de importância reconhecida. Também contempla sua valorização por meio da integração ao território, permitindo o pleno acesso e consequente consolidação.</p>
			<Comments :attr="{id:4, context:'Diretrizes e viabilidade da transformação'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="2">Adensamento Populacional e Construtivo</h3>
			<h4>1. Nova centralidade do Jaguaré</h4>
			<p>O Setor 1 – Nova centralidade do Jaguaré – apresenta uma área total de lotes de 224 mil m², da qual 75% é composta por lotes com área superior a 40 mil m². Em função das estratégias de projeto, de tornar este setor uma nova centralidade, com alta densidade populacional e de empregos, associada à Av. Jaguaré e seu futuro corredor, a previsão de transformação foi estipulada em 50% de seus lotes e o Coeficiente de Aproveitamento preliminarmente definido em 4 vezes a área dos lotes. A área utilizada para os estudos iniciais de adensamento deste setor considerou a obrigatoriedade de destinação de áreas públicas quando do parcelamento dos lotes com áreas superiores a 20 mil m². Para efeito do cálculo populacional, estabeleceu-se que 50% da área construída computável deverão receber usos residenciais, o que pode ser considerado um índice relativamente baixo quando comparado ao outro lado do rio. Dessa forma, chegou-se a um número previsto de quase 6mil pessoas que irão habitar este setor, em um horizonte de 30 anos,. Hoje, existem aproximadamente 540 habitantes no setor, resultando em uma densidade atual de 20 hab/ha. A densidade esperada para o horizonte de 30 anos é de aproximadamente 236 hab/ha. </p>
			<h4>2. Nova frente da USP / Parque Tecnológico do Jaguaré</h4>
			<p>O Setor 2 – Nova frente da USP / Parque Tecnológico do Jaguaré – conta com aproximadamente 600mil m² de área de lote. As diretrizes de transformação desse setor na direção de um Parque Tecnológico 	implica que seus usos predominantes deverão ser não residenciais. Dessa forma, foi predefinido um Coeficiente de Aproveitamento de 2 vezes a área dos terrenos, coerente com as atividades de pesquisa, tecnologia e inovação, atraindo a tipologia esperada. O uso habitacional é desejado, mas não predominante, e poderá estar associado à provisão de moradia social e estudantil, devido sua proximidade com a USP . Estima-se, para o setor um adensamento de aproximadamente 2.600 habitantes, que somados à população local, de quase 4.000 habitantes, resultará numa população de 6.600 habitantes em 30 anos, dobrando a densidade atual para aproximadamente 85 hab/ha.</p>
			<h4>3. Nova frente do Rio Pinheiros</h4>
			<p> O Setor 3 – Nova frente do Rio Pinheiros – conta com aproximadamente 190mil m² da área de lote. É oportuna a transformação deste setor contemplando uma nova frente para o rio, e a constituição de espaços livres a ele relacionados. Foi predefinido um Coeficiente de Aproveitamento preliminar de 2,5 vezes, tendo em vista a tipologia que vem sendo observada na outra margem do rio e o incentivo à sua replicação adaptada a uma nova frente fluvial.	O uso residencial foi definido em 20%, um mínimo de usos habitacionais para garantir uso misto e dinâmica ao território. Calcula-se, portanto, um adensamento de mil pessoas para o setor, de modo que resulte em uma densidade de 39 habitantes por hectare.
			<h4>4. Mofarrej</h4>
			<p>O Setor 4 – Mofarrej – possui uma área bruta de 490mil m², e uma área de lotes de 395mil m². O Coeficiente de Aproveitamento preliminar, para porções deste setor, foi definido em 4 vezes a área do terreno, tendo em vista que parte de seu perímetro situa-se na área de influência do trem, já definida como ZEM pelo zoneamento atual, e na área de influência do futuro corredor da Av. Dr. Gastão Vidigal, resultando em quase 400mil m² de empreendimentos. Para este setor, deseja-se um adensamento residencial intenso nestas porções, predefinido em 70% de sua área construída computável e resultando em uma adição de 10mil pessoas em 30 anos. Se levarmos em conta a população atual, de aproximadamente 1.800 pessoas, o setor passará de uma densidade de 38 hab/ha para 250 hab/ha. Dessa maneira, o setor constituí-se como uma das áreas de maior adensamento do plano, em consonância com as estratégias de adensamento transversal aos rios Pinheiros e Tietê e nas proximidades do transporte, estratégia já utilizada nos demais territórios da Orla Ferroviária e Fluvial da MEM (Arco Tietê, Operação Urbana Consorciada Água Branca e Arco Jurubatuba).</p>
			<p>O PIU deverá conciliar as estratégias de adensamento com as características da economia local, prevendo diretrizes que adiram a morfologia do setor à dos demais em especial da CEAGESP.</p>
			<h4>5. Projeto de Intervenção Urbana Vila Leopoldina – Villa Lobos (PIU VL VL)</h4>
			<p>O Setor 5 – PIU Vila Leopoldina – Villa Lobos – conta com uma área bruta de 334mil m² e com 264mil m² de lotes. O processo de desenvolvimento do PIU VL-VL contempla um Coeficiente de Aproveitamento médio de 4 vezes a área dos terrenos e uma previsão de adensamento de 9.600 moradores ao final de seu processo de transformação. Somados à população atual, de 1.250 habitantes, o setor contará, dentro de 30 anos, com quase 11mil pessoas, resultando em uma densidade de 325 hab/ha.</p>
			<h4>6. CEAGESP</h4>
			<p>O Setor 6 – CEAGESP – possui uma área bruta de 667mil m², contando com 635mil m² de área de lotes. Muito embora sua destinação esteja ainda indefinida, adotou-se um índice médio de 30% de usos residenciais. Assim, prevê-se um adensamento de 13mil pessoas, aproximadamente, podendo variar este número para mais, caso se torne um bairro residencial, ou para menos, caso se transforme em uma universidade, campus universitário ou até mesmo um parque tecnológico, que são algumas das propostas preliminares em estudo. Com esta população futura, atingir-se-ia uma densidade de aproximadamente 206 hab/ha em um território onde hoje não há moradores.</p>
			<h4>7. Av. Dr. Gastão Vidigal</h4>
			<p>O Setor 7 – Av. Dr. Gastão Vidigal – abrange uma área de 464mil m², com uma área de lotes de 346mil m². Hoje, esta avenida conta com uma faixa exclusiva de ônibus e há previsão para implantação de um corredor de ônibus pelo Plano Diretor Estratégico. Seus lotes lindeiros abrigam inúmeras concessionárias de automóveis, representando alto grau de transformabilidade desse território. Alguns condomínios residenciais verticais estão implantados no setor, como resultado da expansão do mercado imobiliário da Vila Leopoldina. O Coeficiente de Aproveitamento predefinido em 4 vezes a área do terreno depende da implantação do corredor de ônibus, conforme estabelece o zoneamento ao definir uma área de ZEMP nesse setor. Assim como no Setor 4, vizinho a oeste, este setor deve abrigar aproximadamente 70% de usos residenciais em sua área computável. O adensamento populacional previsto para a área, portanto, é de 8mil pessoas em 30 anos, que, somados à população atual, de aproximadamente 4mil habitantes, atingem uma densidade de aproximadamente 260 hab/ha.</p>
			<h4>8. Números gerais do Arco Pinheiros</h4>
			<p>Soma-se ao adensamento interno aos setores predefinidos (50mil pessoas previstas para os setores 1 ao 7) o adensamento do restante do perímetro do Arco Pinheiros, cuja previsão é de aproximadamente 20mil pessoas nos 30 anos de horizonte do projeto. Dessa forma, a população adicional prevista para o perímetro é de aproximadamente 70mil pessoas neste mesmo horizonte. Considerando a população atual de 46mil habitantes, a previsão é que o perímetro possuirá aproximadamente 116mil pessoas, atingindo uma densidade de 80 hab/ha para todo o perímetro. As diretrizes ambientais, de mobilidade, de habitação e da base produtiva deverão garantir a qualidade do processo de transformação.</p>
			<Comments :attr="{id:5, context:'Adensamento Populacional e Construtivo'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<h3 class="titulo" indent="2">Impacto esperado da intervenção</h3>
			<p>É inerente ao ser humano a insegurança, o desconforto e a ansiedade diante de mudanças e do desconhecido.  Assim sendo, a própria divulgação inicial do projeto poderá gerar expectativa, o que evidencia a necessidade de criação de um canal de comunicação com a população eficiente ao longo de todo o processo. Este canal terá o papel de divulgar as propostas, acolher as demandas e construir um projeto pactuado entre a municipalidade e a população moradora do território, mitigando possíveis impactos negativos, como desapropriações decorrentes da implantação do projeto.  Contudo decorrerá da implantação do projeto a melhoria do território da intervenção, bem como da qualidade de vida da população que lá reside e trabalha.</p>
			<p>Neste sentido os estudos iniciais do projeto de intervenção urbana  identificaram e qualificaram de forma sistemática e integrada os impactos ambientais decorrentes das diretrizes propostas para o ACP, considerando-se os meios físico, biótico e socioeconômico.</p>
			<p>Inicialmente no período de obras há necessidade da implantação de medidas de prevenção para mitigação tanto dos impactos que atingem os arredores das obras (alterações no trânsito, poeira, ruído e remoção de indivíduos arbóreos), quanto dos impactos que podem contaminar o solo, córregos e rios.</p>
			<p>A transformação de áreas ociosas, intensificando o uso do solo, reduzirá os deslocamentos disponibilizando áreas residenciais próximas aos locais de emprego, reduzindo o tempo despendido nas viagens entre emprego e moradia.</p>
			<p> A implantação do Programa Habitacional nos perímetros de ZEIS, da aplicação da cota de solidariedade no perímetro do projeto e a priorização aos projetos públicos para atendimento à população moradora em condições de vulnerabilidade social irão proporcionar melhoria de vida para a população de baixa renda, aumento da densidade da população residente com consequente melhoria das condições de segurança.</p>
			<p>A implantação de novas áreas verdes, de alamedas e bulevares, a recuperação de APP irão contribuir para melhoria do microclima, redução das áreas de inundação, disponibilidade de micro habitats para a avifauna e acréscimo de áreas verdes de lazer.</p>
			<p>A identificação da movimentação de insumos e produtos contribuirá para melhorar a conectividade, a logística e a eficiência das cadeias produtivas, fortalecendo a base da economia local.</p>
			<p>A melhoria da acessibilidade obtida através da adequação dos passeios públicos no entorno das estações de transporte coletivo de alta capacidade, ao longo dos corredores de média capacidade, a integração com outros modos de transporte público e o incentivo ao transporte não motorizado, contribuirão para mitigar os impactos decorrentes do aumento da densidade demográfica promovendo incremento da ação do mercado imobiliário e melhoria da qualidade de vida da população;</p>
			<p>O monitoramento e controle das intervenções próximas a bens imóveis representativos (tombado, não tombado em processo de tombamento) e implantado Programa de Prospecção Arqueológica Intensivo nos compartimentos ambientais de maior potencial arqueológico inseridos no perímetro do ACP.</p>
			<p>De toda forma, a adoção de programas de monitoramento e de mitigação de impactos já faz parte da prática administrativa municipal na implantação de obras e projetos.</p>
			<Comments :attr="{id:6, context:'Impacto esperado da intervenção'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<h3 class="titulo" indent="2">Modelo de gestão democrática</h3>
			<p>A gestão democrática é parte fundamental da democracia participativa e representativa, pactuada entre os entes federativos por meio da Constituição de 1988. Na agenda urbana, a participação popular integrante do Estatuto da Cidade (Lei Federal nº 10.257/2001) se consolida no Plano Diretor Estratégico – PDE (Lei Municipal nº 16.050/2014) por meio do capítulo de Gestão Democrática, que tem por objetivo fortalecer a participação popular nas decisões dos rumos da cidade, em um processo permanente, descentralizado e participativo de planejamento. Ela garante a participação de representantes dos diferentes segmentos da população, diretamente ou por intermédio de associações representativas, nos processos de planejamento e gestão da cidade, de realização de investimentos públicos e na elaboração, implementação e avaliação de planos, programas e projetos de desenvolvimento.</p>
			<p>O art. 136 do PDE determina que projetos de intervenção urbana devem estabelecer os “instrumentos para a democratização da gestão da elaboração e implementação dos projetos de intervenção urbana, com mecanismos de participação e controle social”. Ainda, aponta que o Sistema Municipal de Planejamento – ao qual o Plano Diretor e seus instrumentos se inserem – deve assegurar “a participação direta da população em todas as fases de planejamento e gestão democrática da cidade garantindo as instâncias e instrumentos necessários para efetivação da participação da sociedade na tomada de decisões, controle e avaliação da política” (PDE, art. 319).</p>
			<p>Para a gestão participativa do PIU Arco Pinheiros, na sua etapa de implantação, propõe-se que ele deve levar em conta ainda as potencialidades de transformação do território por agentes externos e projetos colocalizados. A marcante presença da Universidade de São Paulo e do CEAGESP, do Parque Tecnológico do Jaguaré, definido no quadro 13 do PDE, e do PIU Vila Leopoldina, fruto de manifestação de interesse privado específico para os terrenos do Grupo Votorantim apontam que o perfil dos atores da sociedade civil pode mudar ao longo da gestão do PIU. Além disso, a presença da maior concentração de população vulnerável da Zona Oeste merece atenção especial de modo a equilibrar a correlação de forças que tradicionalmente promovem processos de segregação socioterritorial e expulsão da população de baixa renda à medida que projetos promovem valorização imobiliária.</p>
			<p>Sendo assim, o Modelo de Gestão democrática deverá refletir as necessidades específicas da população atualmente residente e trabalhadora, bem como ao perfil de adensamento populacional e de geração de emprego e renda que se pretende com o PIU, garantindo os princípios e diretrizes do PDE e dos documentos técnicos desenvolvidos no âmbito do PIU Arco Pinheiros.</p>
			<p>Em acordo com o PDE, é importante também fortalecer a participação descentralizada, sobretudo das prefeituras regionais, instituições atuantes e conselhos já estabelecidos, de forma a promover a articulação multissetorial no território, bem como os órgãos específicos e temáticos, em especial os conselhos gestores de ZEIS, a fim de coordenar e potencializar a transformação do território de maneira inclusiva, democrática, sócio-ambientalmente sustentável, promovendo o direito à moradia digna e à cidade.</p>
			<p>A composição do Conselho gestor deverá prever representação paritária entre sociedade civil e demais representantes do setor público, equilibrando os interesses imobiliários e sociais. Criado o Conselho Gestor, caberá à coordenação à Secretaria de Urbanismo e Licenciamento – SMUL, com a participação de órgãos municipais e de entidades representativas da sociedade civil, tendo a competência de instruir e auxiliar a implantação do Programa de Intervenções, monitorar o desenvolvimento e propor programas e estratégias que possam aprimorar o projeto, enquanto que a SP-Urbanismo ficará a cargo de promover a implantação do Programa de Intervenções do PIU-ACP, avaliar a evolução dos processos e poderá contar com a colaboração dos órgãos e entidades municipais para o desempenho de suas funções específicas.</p>
			<ConselhoGestor></ConselhoGestor>
			<Comments :attr="{id:7, context:'Modelo de gestão democrática'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Ficha técnica</h2>
			<p><strong>Presidência da São Paulo Urbanismo</strong><br>José Armênio de Brito Cruz</p>
			<p><strong>Diretoria de Desenvolvimento</strong><br>Leonardo Amaral Castro</p>
			<p><strong>Arquitetos</strong><br>
			Anna Carvalho de Moraes Barros<br>
			Daniela Tunes Zilio<br>
			Eduardo Tavares de Carvalho<br>
			Laísa Bócoli Chamme<br>
			Luciana Loureiro<br>
			Rafael Giorgi Costa<br>
			Sônia da Silva Gonçalves<br>
			</p>
			<p><strong>Engenheiro</strong><br>
				Waldir Macho de La Rubia
			</p>
			<p><strong>Tecnólogo</strong><br>
				Ana Claudia Rocha Bonfim
			</p>
			<p><strong>Estagiários de Arquitetura</strong><br>
				Laís Boni Valieris<br>
				Pedro Henrique Aragão Sena
			</p>
			<p><strong>Designer Programador</strong><br>
				Thomas Len Yuba
			</p>
			<p><strong>Estagiários de Design</strong><br>
				Davi Masayuki Hosogiri<br>
				Flávia Lopes Martins Pereira
			</p>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:14, context:'Comentarios'}"></Comments> <!-- id do comentário, 14 seria o último -->
		</section>

	</div>
</template>

<script>
const Mapa = () => import('@/components/Mapa')
import PageTop from '@/components/PageTop'
import Diagnostico from '@/components/Diagnostico'
import Indice from '@/components/Indice';
import Comments from '@/components/Comments';
import CommentsLoader from '@/components/CommentsLoader';
import Apoio from '@/components/Apoio';
import ProcessoPIU from '@/components/graf/ProcessoPIU';
import ConselhoGestor from '@/components/graf/ConselhoGestor';
import LimitesAdm from '@/components/graf/LimitesAdm';
import ProjetosColocalizados from '@/components/graf/ProjetosColocalizados';
import ACPMEM from '@/components/graf/ACPMEM';

export default {
	name: 'ArcoPinheiros',
	data() {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			// gallery_attrs: {},
			mapa_attrs: {
				center: [ -5202550.487352, -2698002.011056 ],
				zoom: 13,
				layers:[
					{
						title: "Perímetro de abrangência Arco Pinheiros", 
						path: this.$store.getters.basePath + 'arquivos/arco-pinheiros/perimetro_ACP.kml',
						stroke_color: 'rgba(255, 135, 0, 1)',
						fill_color: 'rgba(255, 255, 255, .1)',
						stroke_width: 2,
					},
				]
			},
			consultas: false,
			estaConsulta: {}
		}
	},
	computed: {
		commentsLoaded() { return this.$store.state.commentsLoaded },
	},
	components: {
		PageTop,
		Diagnostico,
		Indice,
		Comments,
		CommentsLoader,
		Mapa,
		Apoio,
		ProcessoPIU,
		ConselhoGestor,
		LimitesAdm,
		ProjetosColocalizados,
		ACPMEM
	},
	created() {
		this.$store.dispatch("fetchConsultas", { self: this });
		this.consultas = this.$store.state.consultas;
	},
	mounted() {
		this.listaTitulos();
	},
	updated() {
		this.alteraIndice();
	},
	methods: {
		scrollToallComments(){
			let appRef = this.$refs.allComments;
			window.scrollBy({
				top: appRef.getBoundingClientRect().y - 30,
				left: 0,
				behavior: 'smooth'
			});
		},
		filterConsultas(){
			this.consultas = this.$store.state.consultas;
			this.estaConsulta = this.consultas.filter(esta => esta.id_consulta == this.$route.meta.id )[0];
			// let app = this
			// this.consultas.map(function(index) {
			// 	if (parseInt(index.id_consulta) == parseInt(app.$route.meta.id)) {
			// 		app.estaConsulta = index
			// 	}
			// })
		},
		consultaState(){ return (this.estaConsulta.ativo == '1' ? "aberta" : "fechada") },
		listaTitulos() {
			let app = this;
			let titulosBruto = Array.from(this.$refs.conteudoConsulta.getElementsByClassName('titulo'));
			let titulos = [];
			let id = 0;
			titulosBruto.map(function(index) {

				let titulo = {
					id: id,
					nome: index.innerText,
					indent: index.attributes.indent.value,
					offsetObj: index,
					ativo: false
				};

				id++;
				titulos.push(titulo);
			});
			this.titulosLimpo = titulos;
		},
		setaBaixo() {
			window.scrollTo({ top: Math.round(window.innerHeight), behavior: 'smooth'})
		},
		alteraIndice() {
			let app = this;
			let sectionCollection = Array.from(this.$el.getElementsByTagName('section'));		
			window.addEventListener('scroll', function() {
				sectionCollection.map(function(index, i) {
					if (window.scrollY >= index.offsetTop - (window.innerHeight)/2 && window.scrollY < (index.offsetTop + index.offsetHeight) - (window.innerHeight)/4) {
						app.titulosLimpo[i].ativo = true
					} else { app.titulosLimpo[i].ativo = false };
				});
			}, {
				capture: true,
				passive: true
			});
		},
		imgSrc(caminho) {
			let url = this.$store.getters.basePath + caminho
			return url.toString()
		},
		backgroundImg(caminho) {
			let url = this.$store.getters.basePath + caminho
			return 'background-image: url(' + url + ');'
		}
	},
};
</script>

<style lang="scss" scoped>

*::selection, *::-moz-selection {
	background: #EB5757;
	color: #FFF;
}

div.ArcoPinheiros {
	@media (max-width: 480px) { #benstombados_int { justify-content: flex-start !important; } } /* componente mapa - legenda / outras infos? */

	font-size: 20px;
	padding-bottom: 4rem;
	z-index: 0;
	/*@media (max-width: 600px) { font-size: 16px; }*/


	h2, h3, h4, h5, h6, p, ul, ol {
		margin: 0 auto 1rem auto;
		padding: 0 2rem;
		max-width: 700px;
	};

	h5 {
		font-size: large;
		div.sub { font-weight: lighter; color: #777; }
	}

	h4 {
		font-size: inherit;
	}

	h3 {
		font-size: x-large;
	}

	h2 {
		font-size: xx-large;
	}

	p ~ h1, p ~ h2, p ~ h3 { margin-top: 4rem; margin-bottom: 2rem; };
	p ~ h4, p ~ h5, p ~ h6 { margin-top: 4rem; margin-bottom: 1rem; }

	sup {
		vertical-align: 4px;
		margin: 0 0 0 2px;
		font-weight: normal;
		opacity: .8;

		a { color: inherit; };
	};

	p, ol, ul { font-family: 'Georgia', serif; };

	ol, ul {
		list-style-type: square;

		li {
			margin: 0 0 1rem 2rem;
			padding-left: 8px;
		};
	};

	section + section { margin-top: 6rem; }

	figure {
		text-align: center;
		margin: 2rem auto;
		max-width: 992px;
		width: max-content;
		background: #FFF;

		&.borda {
			padding-bottom: .4rem;
			border: 1px solid #BDBDBD;
			border-radius: 2px;
			overflow: hidden;
		};

		figcaption {
			padding: .4rem 0;
			margin: 0 auto;
			max-width: 700px;
			font-size: small;
			font-weight: 300;
			text-align: left;
			color: #777;
			border-bottom: 1px solid #F5F5F5;
		};

		div.fontes {
			font-size: x-small;
			text-align: left;
			padding: 0 .8rem;
			color: #777;
			margin: .4rem 0 0 0;
		};

		img {
			width: 100%;
			max-width: 992px;
		};

		&.coluna {
			padding: 0 2rem;
			margin: 1rem auto 2rem auto;
			max-width: 700px;
			text-align: center;

			img { max-width: 700px; };
		};

		&.hero {
			position: relative;

			figcaption {
				position: absolute;
				bottom: 1.6rem;
				right: 1rem;
				background: #FFF;
				border-radius: 2px;
				padding: 2px 8px;
				max-width: 400px;
				font-size: x-small;
			};

			img { min-width: 100%; max-width: unset; };
		};
	};

	@media (max-width: 992px) {
		figure {
			margin-left: 2rem;
			margin-right: 2rem;
			width: calc(100% - 4rem);

			&.coluna {
				padding: 0;
			}
		}
	};

	h6 {
		margin: 0;
		max-width: 100%;
		color: #333;
		font-size: smaller;
		font-weight: 700;
	};

	figure ul.legenda {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		max-width: 992px;
		padding: 1rem 2rem 0 1rem;
		margin-bottom: 0;
		margin-top: 0;
		font-family: inherit;

		@media (max-width: 600px) {			
			max-height: 160px;
			overflow-y: auto;
		}
		
		li {
			display: inline-flex;
			align-items: center;
			font-size: small;
			margin: 0;
			padding: 0 0 .8rem 0;
			margin-right: 2rem;

			div {
				border: 1px solid rgba(0, 0, 0, .08);
				height: 1.2rem;
				min-width: 1.2rem;
				max-width: 1.2rem;
				overflow: hidden;
				margin-right: .4rem;
				line-height: calc(1.2rem - 2px);
				text-align: center;
				background-position: center center !important;
				background-repeat: no-repeat !important;
				img { vertical-align: middle; width: min-content; max-width: 100%; max-height: 100%; }

				&.linha {
					max-height: 0px;
					overflow: hidden;
					border-width: 1px;
				};
			};

			a {
				color: inherit;

				&:hover {
					opacity: .4;
					text-decoration: none;
				};
			};

			&:last-child {
				margin-right: 0;
			};
		};

		@media (max-width: 600px) {
			li { 
				display: block;
				width: 100%;
				margin: 0 0 1rem 0;
				padding: 0;
				text-align: left;

				div { 
					display: inline-block;
					vertical-align: middle;
				}; 
			};
		};
	};

	div.tableWrap {			
		overflow-x: auto;
		background: #F5F5F5;
		max-width: 700px;
		margin: 1rem auto 2rem auto;
		padding: 2rem;
		border-radius: 2px;

		table {
			min-width: 100%;
			font-size: smaller;
			border-collapse: collapse;
			table-layout: fixed;
		};

		caption {
			font-weight: 700;
			margin-bottom: 2rem;
		};

		thead th, thead tr td {
			font-size: smaller;
			font-weight: 700;
		};

		td, th {
			padding: 4px 8px;
			word-wrap: break-word;
			border: 1px solid #BDBDBD;
			background: #FFF;
		};

		tbody tr:nth-child(odd) { background: #FFF; };

		.center { text-align: center; };

		div.notas {
			h6 {
				margin: 0;
				padding: .8rem 0 .6rem 0;
				font-weight: bold;
				text-transform: uppercase;
			};

			ol {
				list-style-type: lower-alpha;
				margin: 0;
				padding: 0;
				font-size: small;
				font-family: inherit;
				columns: 160px;
				column-gap: 2rem;

				li {
					margin: 0 0 1.2rem 1rem;
					line-height: 1.2rem;
					break-inside: avoid;
					page-break-inside: avoid;
				};

				li:last-child { margin-bottom: 0; };
			};
		};

		&.intervencoes {

			table {
				font-size: initial;
				margin: .4rem 0 .8rem 0;
				&:last-child { margin-bottom: 0; };
				tr td span.bold { font-weight: bold; };
			};

			div.intervencoesTitulo {
				text-align: center;
				font-size: smaller;
				font-weight: 700;
				margin-bottom: -1.2rem;
			};

			.col1, .col2 { width: 20%; font-size: smaller; };

			span.cod { color: #BDBDBD; };

			span.interv {
				display: inline-block;
				line-height: 1rem;
				width: 1rem;
				font-size: x-small;
				text-align: center;
				background: #BDBDBD;
				border-radius: 100%;
				color: #333;
				margin: 0 0 0 4px;
			};

			div.eixo {
				font-size: initial;
				color: #BDBDBD;
				margin: 3.2rem 0 .4rem 0;

				span.tema {
					font-size: larger;
					color: #333;
					display: block;
					font-weight: bold;	
				};
			};

			div.diretriz {
				font-size: smaller;
				color: #BDBDBD;
				display: block;
				margin: 0;

				span { color: #333; };
				span.dir2 { font-weight: bolder; color: #333; display: block; };
			};

			div.legenda {
				margin: 1rem 0;
				font-size: small;

				h6 {
					margin: 0;
					padding: .8rem 0 .6rem 0;
					font-weight: bold;
					text-transform: uppercase;
					font-size: smaller;
				};

				span.interv { margin: 0 4px 0 0; };
			};
		};
	};

	ul.pdfBox {
		display: block;
		list-style-type: none;
		margin: 2rem auto;
		padding: 2rem;
		background: #F5F5F5;
		border-radius: 2px;
		font-family: inherit;

		li {
			margin: 2rem 0;
			padding: 0;
			border-radius: 2px;
			border: 1px solid #BDBDBD;
			background: #FFF;
			box-shadow: 0 2px 2px rgba(0, 0, 0, .12);
			transition: all .1s;

			a {
				display: flex;					
				flex-direction: row;
				align-items: center;
				padding: 1rem;
				color: inherit;

				i { 
					margin-right: 1rem; 
					align-self:center
				};

				div {
					width: 100%;
				};

				span {
					display: block;
					font-size: .75em;
					margin-left: 1rem;
					white-space: nowrap;
					color: #BDBDBD;
				};

				&:hover { text-decoration: none; };
			};

			&:hover { border-color: #EB5757; box-shadow: 0 4px 4px rgba(0, 0, 0, .12); };

			&:first-child { margin-top: 0; };
			&:last-child { margin-bottom: 0; };
		};
	};

	a[target=_blank]::after {
		content: 'open_in_new';
		font-family: 'Material Icons';
		display: inline-block;
		font-size: initial;
		line-height: initial;
		vertical-align: -2px;
		margin-left: 4px;
	};

	.ai2html {
		margin: 4rem 0;
	};

	div.commentCtx {
		position: absolute;
		transform: scale(0);
		max-width: 2.4rem;
		max-height: 2.4rem;
		width: 100%;
		height: 100%;
		text-align: center;
		background: #333;
		color: #FFF;
		border-radius: 100%;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .24);
		transition: all .1s;

		a { color: inherit;
			i { line-height: 2.4rem; };
		};

		&:hover {
			box-shadow: 0 8px 8px rgba(0, 0, 0, .24);
			transform: scale(1.2) !important;
			cursor: pointer;
			a i { cursor: pointer; };
		};
	};

	@media (max-width: 600px) {
		font-size: 16px;

		div.titulo {
			& > div h1 { font-size: 40px; };
		};
	};

	@media print {

		@page {
			size: A4 portrait;
			margin: 30mm 30mm 30mm 30mm;
		}

		.Cabecalho { display: none; };
		.Rodape { display: none; };
		.Indice { display: none; };
		.Apoio { display: none; };
		.Comments { display: none; };

		div.Anhembi2 {
			div.top {
				background: none !important;
				display: block;
				height: min-content;
				margin: 0;
				padding: 0;

				& > div:first-child {
					margin: 0;
					padding: 0;
					outline: none;

					h1, div { text-align: left; };

					h1 { font-size: 32pt; margin: 0; };

					div { font-size: 12pt; };

					div#statusConsulta { display: none; };
				};

				& > .setaBaixo { display: none; };
			};

			font-size: 11pt;

			h1, h2, h3 {
				break-after: avoid-page;
				page-break-after: avoid;
				padding: 0;
				margin: 3rem 0 1rem 0;
			};

			p, ol, ul, figure, div.Minuta blockquote.minuta, div.tableWrap, .Commentsloader {
				padding: 0;
				margin: 0 0 1rem 0;
				max-width: unset;
				width: 100%;
			};

			p { padding-right: 40mm; };

			figure, .tableWrap, .Galeria {
				break-inside: avoid-page;
				page-break-inside: avoid;
			};

			ul.pdfBox { display: none; };
		};

		.ai2html {
			break-inside: avoid-page;
			page-break-inside: avoid;
			max-height: 100%;
		};
	}	
}
</style>