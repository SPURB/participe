<template>
	<div class="Anhembi2" ref="conteudoConsulta">
		
		<div class="top" style="background: ;">
			<div>
				<div>2ª consulta pública</div>
				<h1>PIU Anhembi</h1>
				<div>Projeto de Intervenção Urbana Anhembi</div>
			</div>
		</div>

		<Indice :titulos="titulosLimpo"></Indice>

		<h2 class="titulo" indent="1">Saiba como participar</h2>
		<p>A partir de 25 de julho este espaço está disponível para receber seus comentários, pedidos de esclarecimentos e quaisquer contribuições para o Projeto de Intervenção Urbana Anhembi, desenvolvido pela São Paulo Urbanismo em cumprimento ao Decreto Municipal n° 56.901 de 2016, que define o procedimento de elaboração dos PIU.</p>
		<p>O PIU Anhembi parte dos índices e parâmetros de parcelamento, uso e ocupação do solo e disposições especificas estabelecidas na Lei Municipal n° 16.886 de 2018 para o perímetro da Zona de Ocupação Especial do Anhembi (ZOE Anhembi), composta pelos setores Sambódromo e Centro de Convenções e Exposições descritos nos incisos I e II, do Art. 2° da referida lei, propriedades hoje da São Paulo Turismo S.A. (SPTuris).</p>
		<p>Entre os dias 15 de Junho e 10 de Julho de 2018, a São Paulo Urbanismo disponibilizou a 1ª Consulta Pública do PIU, que reuniu informações e dados sobre a ZOE Anhembi e seu entorno, tendo como base o diagnóstico socioterritorial e o respectivo programa de interesse público do PIU. O relatório da 1ª Consulta Pública com as contribuições recebidas e a respectiva análise da Prefeitura Municipal de São Paulo pode ser acessado <a href="" download>aqui</a>.</p>
		<p>Esta 2ª consulta pública tem como finalidade apresentar as diretrizes urbanísticas consolidadas, bem como o detalhamento do programa de intervenções e propostas de intervenção que fundamentarão o decreto do PIU Anhembi.</p>
		<p>Encerrada esta 2ª consulta pública, as sugestões recebidas serão consolidadas, sendo publicada a versão definitiva do PIU, com as justificativas para a incorporação ou não das contribuições recebidas.</p>
		
		<ProcessoPIU></ProcessoPIU>

		<h2 class="titulo" indent="1">A finalidade do PIU Anhembi</h2>
		<p>Em 2015 a SPTuris realizou chamamento público (DPR 01/2015) para os interessados em realizar estudos técnicos de modelagem de projeto e estudos de viabilidade para a revitalização, modernização e gestão do complexo do Anhembi, englobando somente a quadra 284, do setor fiscal 073.</p>
		<p>O chamamento já considerava que o complexo apresenta necessidade de atualização e reformulação, visto que desde a sua inauguração, na década de 1970, não recebeu reformas estruturais significativas, resultando em processo de obsolescência da infraestrutura e precariedade de suas instalações. A atualização, portanto, visava tanto manter a liderança em exposições e convenções na cidade, quanto atender as demandas do atual mercado de eventos, equiparando o Anhembi com modernos equipamentos internacionais em termos de conforto ao usuário, flexibilidade, modularidade e tecnologia.</p>
		<p>A necessidade de atualização e renovação do complexo traz a oportunidade de desenvolvimento de projetos associados às atividades expositivas e culturais existentes, otimizando a vocação de feiras, eventos e negócios da região por meio da implantação de novas atividades econômicas, revertendo a subutilização de grande parte das áreas públicas ali existentes.</p>
		<p>O Anhembi é hoje um dos principais centros de convenções e exposições da cidade de São Paulo, sendo administrado pela SPTuris, empresa de turismo e eventos controlada pela Prefeitura de São Paulo, que detém quase 97% de suas ações. Compreende imóvel com área bruta de aproximadamente 400 mil m², que recebe público superior a 6 milhões de visitantes do Brasil e do mundo, em cerca de 300 eventos de todos os portes e gêneros realizados anualmente em seus espaços. O complexo sedia ainda 1 em cada 8 grandes feiras do país, segundo dados da dados Ubrafe/Fipe (2015).</p>
		<p>Além de abrigar as principais feiras de negócios e congressos do país, o Anhembi é utilizado para realização de grandes shows nacionais e internacionais, como apresentações esportivas e o Carnaval. Situado em local privilegiado, o complexo fica próximo de aeroportos, hotéis e das principais vias expressas, além de contar com elevado número de vagas de estacionamento.</p>
		<p>Considerando a importância do complexo e a necessidade de modernização, o Anhembi passou a integrar a lista de serviços e ativos do Plano Municipal de Desestatização, a cargo da Secretaria Municipal de Desestatização e Parcerias (SMDP), passíveis de serem geridos pela iniciativa privada, por meio de concessão, Parceria Público-Privada ou mesmo privatização, desonerando assim o poder público.</p>
		<p>Para garantir que a receita das desestatizações tenha destino certo e seja de fato utilizada em áreas prioritárias e não no custeio da máquina pública, foi criado o Fundo Municipal de Desenvolvimento Social (FMD) pela Lei nº 16.651, de 16 de maio de 2017. Nele ficarão depositadas as receitas oriundas das concessões e privatizações que, futuramente, serão empregadas nas áreas mais sensíveis da administração, como saúde, educação, habitação, mobilidade urbana, segurança e assistência social.</p>
		<p>A alienação da participação societária detida pelo Município de São Paulo na SPTuris foi autorizada pela Lei n°16.766 de 20 de dezembro de 2017, sendo que o §4° definiu que os recursos auferidos com a alienação da participação societária referida no “caput” serão destinados exclusivamente ao FMD, com destinação obrigatória de no mínimo 20% dos recursos para investimentos na Zona Norte da cidade de São Paulo, e orientados para as áreas prioritárias, nos termos do art. 6º da Lei nº 16.651, de 16 de maio de 2017.</p>
		<p>Dando continuidade ao processo, a Lei Municipal n° 16.886 de 2018, que definiu índices e parâmetros de parcelamento, uso e ocupação do solo para a ZOE Anhembi, determinou que o detalhamento das disposições da referida lei, as diretrizes urbanísticas complementares e o programa de intervenções fossem definidas por meio do PIU, a ser aprovado mediante decreto do Executivo.</p>
		<p>Os objetivos do PIU Anhembi tem como finalidade:</p>
		<ul>
			<li>sociabilizar os ganhos da produção da cidade por meio da venda de potencial construtivo;</li>
			<li>incentivar o desenvolvimento urbano, por meio do adensamento populacional e construtivo compatível com a infraestrutura existente;</li>
			<li>qualificar a centralidade a norte do Rio Tietê, pautada pela diversidade de usos, promovendo maior equilíbrio entre emprego e moradia;</li>
			<li>implantar programa de intervenções que qualifique o território em consonância com o desenvolvimento pretendido.</li>
		</ul>

		<h2 class="titulo" indent="1">Caracterização sócioterritorial e ambiental</h2>
		<p>Para elaboração das diretrizes urbanísticas e posterior consolidação das propostas, foi realizado um estudo de caracterização do Perímetro Expandido e do Perímetro de Abrangência do PIU, possibilitando a identificação de carências e potencialidades do território. O resultado das análises pode ser acessado nos cadernos disponíveis para download:</p>
		<ul class="pdfBox">
			<li><a href="" download>
				<i class="small material-icons">picture_as_pdf</i>
				<div>Análise Territorial</div>
				<span>18,5 Mb</span>
			</a></li>
			<li><a href="" download>
				<i class="small material-icons">picture_as_pdf</i>
				<div>Análise Ambiental</div>
				<span>16,1 Mb</span>
			</a></li>
		</ul>

		<h2 class="titulo" indent="1">Perímetros de Intervenção</h2>
		<p>As diretrizes urbanísticas e o programa de intervenções foram definidos para as duas escalas previstas na Lei n° 16.866 de 2018: o Perímetro de Abrangência e o Perímetro Expandido. </p>
		<p>No primeiro caso, foram incluídas integralmente as quadras 283 e 284, delimitadas pela Av. Assis Chateaubriand, a Av. Olavo Fontoura, a Praça Campo de Bagatelle, a Av. Santos Dumont, a Rua Marechal Leitão de Carvalho, a Rua Masseinet Sorcinelli e a Rua Prof. Milton Rodrigues. Quanto ao Perímetro Expandido, foi adotada a determinação do §1° do Art. 5º da Lei n°16.866 de 2018, formado pela interseção entre o subsetor Arco Tietê da Macroárea de Estruturação Metropolitana (MEM) e os limites administrativos das Prefeituras Regionais de Santana/Tucuruvi e Casa Verde.</p>

		<figure>
			<img src="../../../src/assets/img/ANH_Perimetros.png" alt="Perímetros de intervenção">
			<figcaption>Perímetros de intervenção</figcaption>
		</figure>

		<!--MAPA INTERATIVO COM KML – Perímetro de Abrangência e Perímetro Expandido.-->

		<p>Conforme expresso no Art. nº 5 da referida lei, os recursos arrecadados com o pagamento de Outorga Onerosa do Direito de Construir dos empreendimentos futuros no Perímetro de Abrangência deverão ser destinados ao financiamento de investimentos tanto no Perímetro de Abrangência quanto no Expandido. Soma-se a isso a determinação da Lei nº 16.766 de 2017 que 20% dos recursos provenientes da alienação da SPTuris deverão também ser aplicados na Zona Norte e destinados para investimentos em saúde, educação, segurança, habitação, transporte, mobilidade urbana e assistência social, conforme já exposto. </p>
		<p>Com base nessas definições e realizadas simulações de transformação urbana no Perímetro de Abrangência, foi elaborado o Programa de Intervenções e selecionadas as intervenções prioritárias no Perímetro Expandido do PIU Anhembi.</p>

		<h3 class="titulo" indent="2">Programa de intervenções para o perímetro expandido</h3>
		<p>O Perímetro Expandido do PIU Anhembi compreende os territórios das Prefeituras Regionais de Casa Verde e Santana contidos no perímetro do subsetor Arco Tietê, do setor da Orla Ferroviária e Fluvial da Macroárea de Estruturação Metropolitana definida pelo PDE. Com área de 1.220 ha, abrange porções dos distritos do Limão, Casa Verde e Santana.</p>
		<p>No Distrito de Santana, o Perímetro Expandido compreende área localizada junto ao eixo norte-sul da cidade, próxima a centros comerciais, equipamentos culturais, equipamentos públicos e estações de metrô e Terminal Rodoviário do Tietê. Também caracterizado pela presença de grandes áreas públicas subutilizadas que podem ser reorganizadas de forma a propiciar o melhor desenvolvimento da região, a produção habitacional, o incremento da rede de espaços públicos e contribuir para o financiamento da intervenção. </p>
		<p>A área entre as avenidas Braz Leme e Casa Verde concentra o maior número de condomínios residenciais de médio padrão de todo o Distrito de Casa Verde, representado majoritariamente por torres isoladas no lote. Ainda em relação aos usos residenciais, é significativa a presença de moradias de alto padrão concentradas no Jardim São Bento, entre a Av. Braz Leme e o limite do Perímetro Expandido.</p>
		<p>Enquanto isso, as porções dos Distritos do Limão são caracterizadas pela presença de indústrias, armazéns, galpões de logística, além de usos comerciais extensivos, como hipermercados e gráficas. Também no trecho do Limão, predominam conjuntos habitacionais e residências horizontais de baixo padrão. </p>
		<p>Em consonância com as diretrizes de política urbana definidas pelo PDE, a aplicação da outorga onerosa do direito de construir sobre o perímetro de abrangência do PIU Anhembi, conforme definido pela Lei n° 16.886 de 2018, possibilitará o acesso a recursos capazes de viabilizarem a implantação do programa de intervenções proposto pelo PIU Anhembi. </p>
		<p>A partir da transformação proposta pelo PIU Anhembi para seu Perímetro de Abrangência, desenvolveu-se o Programa de Intervenções para o Perímetro Expandido, com a finalidade de viabilizar a implantação de infraestruturas capazes de reurbanizar os assentamentos precários, promover a produção de moradia popular, fomentar melhoria da mobilidade, qualificar os espaços públicos, ampliar a rede ambiental e ampliar a oferta de equipamentos públicos. </p>
		<p>As áreas no entorno das estações de transporte público, a norte e a leste da ZOE Anhembi, principalmente ao longo do eixo de mobilidade norte sul, foi classificada pela Lei de Parcelamento, Uso e Ocupação do Solo (Lei nº 16.402 de 2016) como zonas de adensamento (ZEM e ZEMP), enquanto as áreas a oeste, com menor intensidade de uso, foram classificadas como zonas de centralidade (ZC), de uso misto (ZM) e, por fim, zona de desenvolvimento econômico (ZDE) ao longo da frente fluvial. Considerando que o território do Perímetro Expandido do PIU Anhembi integra o perímetro do Arco Tietê, o programa de intervenções proposto foi desenvolvido a partir dos parâmetros definidos pela LPUOS e dos estudos elaborados no âmbito do PIU Arco Tietê. </p>
		<p>Desta forma, a proposta de melhoria da rede de mobilidade do PIU Anhembi parte dos melhoramentos viários definidos pela Lei n° 16.541 de 2016.  Esses novos melhoramentos deverão integrar-se ao sistema viário existente melhorando a mobilidade da região e conectar-se aos terminais e estações de transporte público.</p>
		<p>A rede de mobilidade proposta não se resume na mobilidade motorizada, soma-se a ela, melhoria a mobilidade não motorizada com a proposta de ampliação de passeios e de implantação de ciclovias.</p>

		<figure>
			<img src="../../../src/assets/img/ANH_mobilidade.png" alt="Mobilidade">
			<figcaption>Mobilidade</figcaption>
		</figure>

		<p>Por sua vez, a qualificação socioambiental será promovida por meio da implantação de sistema de áreas verdes composto por áreas verdes existentes, como o Parque Juventude, e novos parques, como os parques lineares ao longo dos córregos Carandiru e Papaterra Limongi, possibilitando a retomada do contato com os rios da cidade. Essas áreas serão conectadas por bulevares e alamedas, que agregarão valor paisagístico e ambiental, além de contribuírem na mitigação de ilhas de calor e problemas de drenagem.</p>

		<figure>
			<img src="../../../src/assets/img/ANH_ambiental.png" alt="Ambiental">
			<figcaption>Ambiental</figcaption>
		</figure>

		<figure class="hero">
			<img src="../../../src/assets/img/ACT_Centralidade_Perspectivas_Carandiru_MidRes.png" alt="">
			<figcaption>Ilustração ilustrada. Elaboração: SPUrbanismo/2018.</figcaption>
		</figure>

		<p>Além do mais, o PIU Anhembi representa uma oportunidade de potencializar o uso de terras públicas subutilizadas que se encontram no Perímetro Expandido, prevendo a implantação de ruas, praças, escolas e parque público de habitação de interesse social.</p>

		<!--MAPA ANH_terrenos públicos-->

		<h2 class="titulo" indent="1">Financiamento das intervenções propostas</h2>
		<p>A alienação dos terrenos do Anhembi parte da premissa de que entidades privadas poderiam gerar melhor eficiência econômica no uso da região, uma vez que esta se encontra em local de intenso fluxo de pessoas, e que poderia ser mais bem aproveitada tanto por usos residenciais quanto não residenciais.</p>
		<p>Além disto, espera-se que a Outorga Onerosa do Direito de Construir (OODC) resultante do processo possa ser revertida em melhorias urbanas para o entorno, sendo necessária então a mensuração de valores possíveis a serem arrecadados pelo FUNDURB.</p>
		<p>Haverá, ainda, recursos do Fundo Municipal de Desenvolvimento Social, referente à alienação da SPTuris (o que incluirá os bens imóveis), bem como pagamento da Cota de Solidariedade, exigível em caso de empreendimentos a serem construídos com área superior a 20.000m². Entretanto, ambos não foram considerados no presente estudo de financiamento das intervenções, que se ateve aos recursos da OODC, diretamente aplicáveis no Perímetro Expandido.</p>
		
		<h3 class="titulo" indent="2">Premissas consideradas para as modelagens econômico-financeiras</h3>
		<p>Para a realização dos estudos, foram definidas premissas com valor único, resultantes das possibilidades de transformação dos terrenos da ZOE Anhembi, além de premissas variáveis, que possibilitaram o estudo de cenários distintos para o potencial construtivo disponível.</p>
		<h4>Premissas com um único valor (estáticas)</h4>
		<p>O estudo considerou tanto os índices urbanísticos de ocupação do solo fixados pela Lei Municipal n° 16.886 de 2018, quanto as possibilidades de parcelamento derivadas da aplicação conjunta dos parâmetros da referida lei e das diretrizes urbanísticas propostas pelo PIU Anhembi para o Perímetro de Abrangência.</p>
		<p>Supôs-se também que 50% do empreendimento construído terá uso residencial, com cada unidade habitacional possuindo 120 m² vendáveis, sendo a área vendável 15% a maior que a área construída computável.</p>
		<h4>Premissas geradoras de cenários (variáveis)</h4>
		<p>Para o coeficiente de aproveitamento que será utilizado, foram prospectados três possíveis cenários:</p>
		<ol style="list-style-type: lower-roman;">
			<li>todos os lotes utilizando CA 2;</li>
			<li>todos utilizando CA 4, ou;</li>
			<li>o maior aproveitamento possível mantendo-se a restrição de gabarito existente em função das atividades aeroportuárias no Campo de Marte: quadra 283 (Sambódromo) com CA 5 e quadra 284 com CA 6, totalizando um terceiro cenário com CA total de 5,7.</li>
		</ol>
		<p>Para o Valor de Cadastro utilizado no cálculo da Outorga Onerosa do Direito de Construir, em um dos cenários propostos obteve-se a média dos valores das faces de quadra de cada quadra (R$ 833,00 e R$ 966,86/m² para as quadras 283 e 284, respectivamente); em outro se supôs para ambas as quadras do Anhembi a média, ponderada pela área, dos valores das faces de quadras fiscais nas proximidades, conforme tabela abaixo, resultando R$ 1.697,74/m².</p>
		<p>Este segundo cenário faz-se relevante pelo fato de que os valores de cadastro das duas quadras do projeto são muito inferiores aos praticados nas quadras dos arredores.</p>
		
		<h3 class="titulo" indent="2">Modelos de resultado econômico-financeiro</h3>
		<p>Assim, havendo os três horizontes estudados de coeficiente de aproveitamento, e dois de valor de cadastro a ser aplicado, resultam-se seis cenários de pagamento de Outorga Onerosa do Direito de Construir (OODC), conforme quadro e gráfico abaixo:</p>
		
		<div class="tableWrap">
			<table class="center">
				<caption>Outorga Onerosa do Direito de Construir</caption>
				<thead>
					<th>CA</th>
					<th>Valor de Cadastro atual</th>
					<th>Valor de Cadastro da região</th>
					<th>Δ%</th>
				</thead>
				<tbody>
					<tr>
						<td>2,0</td>
						<td>R$ 100.901.259</td>
						<td>R$ 184.883.024</td>
						<td>83,2%</td>
					</tr>
					<tr>
						<td>4,0</td>
						<td>R$ 151.351.888</td>
						<td>R$ 277.324.537</td>
						<td>83,2%</td>
					</tr>
					<tr>
						<td>5,7</td>
						<td>R$ 166.347.932</td>
						<td>R$ 304.427.327</td>
						<td>83,0%</td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<!-- grafico oodc esperada--->
		
		<h3 class="titulo" indent="2">Conclusões</h3>
		<p>Com este estudo, fica evidenciada, primeiramente, a importância de se considerar a mudança do valor de cadastro vigente para abranger as qualidades da região, ou seja, equiparando-se ao valor das quadras vizinhas, visto que tal alteração resultaria num aumento de arrecadação projetada de OODC em torno de 83%, o que ainda faria jus a realidade atual de valores praticados na região.</p>
		<p>Dado que o coeficiente de aproveitamento a ser utilizado pelos futuros empreendimentos é a variável com maior imprevisibilidade, uma vez que responderá à demanda específica da região e da percepção desta pelo empreendedor, pode-se considerar os três cenários para se formar ideia de um mais pessimista (CA 2,0), um intermediário de acordo com o já definido para os eixos (CA 4,0), e ainda outro mais otimista e embasado no potencial de acessibilidade da região (CA 5,7), para se prever a arrecadação.</p>

		<h2 class="titulo" indent="1">Modelo de Gestão Democrática</h2>

		<ConselhoGestor></ConselhoGestor>

		<p>Dentre as estratégias do Plano Diretor Estratégico (PDE), tem destaque o fortalecimento da participação popular nas decisões dos rumos da cidade, considerando as diversas instâncias e por meio de diferentes instrumentos de participação e controle social. Tais estratégias garantem a participação de representantes dos diferentes segmentos da população de forma direta ou por intermédio de associações representativas, nos processos de planejamento e gestão da cidade, de realização de investimentos públicos e na elaboração, implementação e avaliação de planos, programas e projetos de desenvolvimento.</p>
		<p>O PDE definiu, no artigo 136, que os PIU elaborados pelo Poder Público deverão apresentar propostas de transformações urbanísticas, econômicas e ambientais no perímetro onde for aplicado o instrumento, cabendo ao PIU indicar os objetivos prioritários da intervenção, as propostas relativas a aspectos urbanísticos, ambientais, sociais, econômico-financeiros e modelo de gestão democrática que contemple mecanismos de participação e controle social e instrumentos para monitoramento e avaliação das ações.</p>
		<p>Neste sentido, o PIU Anhembi deverá instituir Conselho Gestor sob a coordenação à Secretaria de Urbanismo e Licenciamento (SMUL), com a participação de órgãos municipais e de entidades representativas da sociedade civil, tendo a competência de instruir e auxiliar a implantação do Programa de Intervenções no Perímetro Expandido, monitorar o desenvolvimento e propor programas e estratégias que possam aprimorar o projeto, enquanto que a São Paulo Urbanismo ficará a cargo de promover a implantação dos projetos no Perímetro Expandido e avaliar a evolução dos processos, podendo contar com a colaboração dos órgãos e entidades municipais para o desempenho de suas funções específicas.</p>
		<p>O Decreto nº 56.901 de 29 de março de 2016 que disciplina a elaboração dos Projetos de Intervenção Urbana assegura a realização de consultas públicas em etapas definidas de sua elaboração, para discussão e aperfeiçoamento das propostas. Da mesma maneira, a Minuta de Decreto de implantação do PIU, colocada em consulta pública, propõe a constituição de Conselho Gestor.</p>

		<h2 class="titulo" indent="1">Minuta do decreto</h2>

		<div class="tableWrap">
			<table class="center">
				<caption>QUADRO 1 – Percentuais de destinação de área pública</caption>
				<thead>
					<tr>
						<td rowspan="2"></td>
						<td colspan="2">Subsetores</td>
					</tr>
					<tr>
						<td>A e D</td>
						<td>B, C e E</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Percentual mínimo de área verde (%)</td>
						<td>15</td>
						<td>10</td>
					<tr>
						<td>Percentual mínimo de sistema viário (%)</td>
						<td>5</td>
						<td>5</td>
					</tr>
					<tr>
						<td>Percentual mínimo de área institucional (%)</td>
						<td>NA</td>
						<td>5</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td>TOTAL (%)</td>
						<td>20</td>
						<td>20</td>
					</tr>
				</tfoot>
			</table>
		</div>

		<div class="tableWrap">
			<table>
				<caption>QUADRO 2 – Parâmetros de parcelamento do solo (dimensões de lote e quadra)</caption>
				<thead>
					<tr>
						<td rowspan="2"></td>
						<td colspan="2">Subsetores</td>
					</tr>
					<tr>
						<td>A, D e E</td>
						<td>B e C</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Frente mínima de lote (m)</td>
						<td>20</td>
						<td>20</td>
					</tr>
					<tr>
						<td>Área mínima de lote (m²)</td>
						<td>1.000</td>
						<td>1.000</td>
					</tr>
					<tr>
						<td>Frente máxima de lote (m)</td>
						<td>300</td>
						<td>200</td>
					</tr>
					<tr>
						<td>Área máxima de lote (m²)</td>
						<td>25.000</td>
						<td>25.000</td>
					</tr>
					<tr>
						<td>Frente máxima de quadra (m)</td>
						<td>300</td>
						<td>200</td>
					</tr>
					<tr>
						<td>Área máxima de quadra (m²)</td>
						<td>50.000</td>
						<td>25.000</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="tableWrap">
			<table class="center">
				<caption>QUADRO 3 – Parâmetro de Ocupação, exceto cota ambiental</caption>
				<thead>
					<tr>
						<td rowspan="3">ZONA</td>
						<td colspan="3">Recuos mínimos (m)</td>
						<td rowspan="3">Cota parte máxima de terreno por unidade (m²)</td>
					</tr>
					<tr>
						<td rowspan="2">Frente (a)</td>
						<td colspan="2">Fundos e laterais</td>
					</tr>
					<tr>
						<td>Altura da edificação menor ou igual a 10m</td>
						<td>Altura da edificação superior a 10m</td>
					</tr>
				</thead>
				<tbody>
				<tr>
					<td>ZOE Anhembi</td>
					<td>5</td>
					<td>NA</td>
					<td>3</td>
					<td>20</td>
				</tr>
				</tbody>
			</table>
		</div>

		<div class="tableWrap">
			<table class="center">
				<caption>QUADRO 4 – Parâmetro de incomodidade por zona</caption>
				<thead>
					<tr>
						<td rowspan="2">ZONA</td>
						<td colspan="3">Nível Critério de Avaliação (NCA) para ambiente externo dB<sup>(a)</sup><sup>(c)</sup><sup>(d)</sup><sup>(f)</sup></td>
						<td rowspan="2">Vibração associada</td>
						<td rowspan="2">Emissão de radiação Faixa de frequência (0Hz à 300GHz)</td>
						<td rowspan="2">Emissão de odores</td>
						<td rowspan="2">Emissão de gases, vapores e material particulado <sup>(e)</sup></td>
					</tr>
					<tr>
						<td>Emissão de ruído das 7h às 19h</td>
						<td>Emissão de ruído das 19h às 22h</td>
						<td>Emissão de ruído das 22h às 7h</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>ZOE Anhembi</td>
						<td>60</td>
						<td>55</td>
						<td>50</td>
						<td>(a)</td>
						<td>(b)</td>
						<td>(a)</td>
						<td>(a)</td>
					</tr>
				</tbody>
			</table>
			<div class="notas">
				<h6>Notas</h6>
				<ol>
					<li>Aplicam-se a legislação pertinente e as normas técnicas brasileiras – ABNT em vigor.</li>
					<li>Aplicam-se a legislação pertinente e as normas técnicas em vigor, sendo que o Executivo poderá estabelecer parâmetros mais restritivos de radiação eletromagnética não ionizante.</li>
					<li>No caso dos aeroportos aplica-se o nível de ruído conforme norma técnica específica.</li>
					<li>Poderão incidir parâmetros especiais e mais restritivos nos termos §2º do artigo 113 desta lei.</li>
					<li>Quando necessário a CETESB recomenda instalar e operar sistema de controle de poluição do ar baseado na melhor tecnologia.</li>
					<li>Para atividade de local de culto, nos feriados, sábados a partir das 14h e nos domingos, os parâmetros relativos a ruídos referentes ao período das 7h às 19h passam a valer também para os períodos das 6h às 7h e das 19h às 22h, permanecendo inalterados os parâmetros referentes ao período das 7h às 19h e das 22h às 7h.</li>
				</ol>
			</div>
		</div>

		<p>Dentre as estratégias do Plano Diretor Estratégico (PDE), tem destaque o fortalecimento da participação popular nas decisões dos rumos da cidade, considerando as diversas instâncias e por meio de diferentes instrumentos de participação e controle social. Tais estratégias garantem a participação de representantes dos diferentes segmentos da população de forma direta ou por intermédio de associações representativas, nos processos de planejamento e gestão da cidade, de realização de investimentos públicos e na elaboração, implementação e avaliação de planos, programas e projetos de desenvolvimento.</p>
		<p>O PDE definiu, no artigo 136, que os PIU elaborados pelo Poder Público deverão apresentar propostas de transformações urbanísticas, econômicas e ambientais no perímetro onde for aplicado o instrumento, cabendo ao PIU indicar os objetivos prioritários da intervenção, as propostas relativas a aspectos urbanísticos, ambientais, sociais, econômico-financeiros e modelo de gestão democrática que contemple mecanismos de participação e controle social e instrumentos para monitoramento e avaliação das ações.</p>

		<Comments></Comments>
	</div>
</template>

<script>
import Indice from '@/components/Indice';
import Comments from '@/components/Comments'
import ProcessoPIU from '@/components/graf/ProcessoPIU';
import ConselhoGestor from '@/components/graf/ConselhoGestor';

	export default {
		name: 'Anhembi2',
		data() {
			return {
				titulosLimpo: [],
			}
		},
		components: {
			Indice,
			Comments,
			ProcessoPIU,
			ConselhoGestor
		},
		mounted() {
			this.listaTitulos();
		},
		updated() {
		},
		methods: {
			listaTitulos() {
				let app = this;
				let titulosBruto = Array.from(this.$refs.conteudoConsulta.getElementsByClassName('titulo'));
				let titulos = [];
				titulosBruto.map(function(index) {

					let titulo = {
						nome: index.innerText,
						indent: index.attributes.indent.value,
						offsetObj: index,
						ativo: false
					};

					// console.log(index.innerHTML, index.getBoundingClientRect().top);
					titulos.push(titulo);
				});
				this.titulosLimpo = titulos;
			},
		},
	};
</script>

<style lang="scss">
	div.Anhembi2 {
		z-index: 0;
		font-size: 20px;
		padding-bottom: 4rem;

		div.top {			
			padding: 2rem;
			margin: 0 0 2rem 0;
			overflow: hidden;
			background-image: url('../../../src/assets/img/ACT_Centralidade_Perspectivas_Carandiru_MidRes.png');
			background-position: center center;
			background-size: cover;
			width: 100%;
			min-height: 80vh;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: center;
			
			& > div {
				padding: 1.2rem;
				background: #FFF;
				outline: 8px solid rgba(0, 0, 0, .24);
				-moz-outline-radius: 2px;

				& > div {
					margin: 0;
					text-align: center;
					font-size: medium;
					color: #BDBDBD;
					font-weight: 400;
				};

				& > h1 {
					font-size: 10vmin;
					line-height: calc(6vmin + 32px);
					margin: 1rem;
					text-align: center;
				};
			};
		};

		h2, h3, h4, h5, h6, p, ul, ol {
			margin: 0 auto 1rem auto;
			padding: 0 2rem;
			max-width: 700px;
		};

		h4, h5, h6 { color: #777; font-weight: 400; };

		p ~ h1, p ~ h2, p ~ h3 { margin-top: 4rem; };
		p ~ h4, p ~ h5, p ~ h6 { margin-top: 2rem; };

		h4 + p, h5 + p, h6 + p { margin-top: -1rem; };

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

		figure {
			text-align: center;
			margin: 2rem 0;

			figcaption {
				padding-bottom: .4rem;
				margin: 0 auto;
				max-width: calc(700px - 4rem);
				font-size: small;
				font-weight: 300;
				text-align: left;
				color: #777;
				border-bottom: 1px solid #F5F5F5;
			};

			img { max-width: 100%; };

			&.coluna {
				padding: 2rem;
				margin: 0 auto;
				max-width: 700px;
				text-align: center;

				img {
					width: 100%;
				};
			};

			&.hero {
				width: 100%;
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
				h6 { margin: 0; padding: .8rem 0 0 0; font-weight: bold; text-transform: uppercase; };

				ol {
					list-style-type: lower-alpha;
					margin: 0;
					padding: 0;
					font-size: small;
					font-family: inherit;

					li {
						margin: .4rem 0 0 1rem;
					};

					li:last-child {
						margin-bottom: 0;
					};
				};
			};
		};

		ul.pdfBox {
			display: block;
			list-style-type: none;
			margin: 0 auto;
			padding: 2rem;
			background: #F5F5F5;
			font-family: inherit;

			li {
				margin: 2rem 0;
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
	};

	.ai2html {
		margin: 4rem 0;
	};

	@media (max-width: 600px) {
		div.Anhembi2 {
			div.titulo {
				& > div h1 { font-size: 40px; };
			};
		};
	};
</style>