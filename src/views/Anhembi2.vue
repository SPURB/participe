<template>
	<div class="Anhembi2" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/piu-anhembi/img/capa_480w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Anhembi 2</div></template>
			<template slot="subtitulo"><div>2ª consulta pública – Projeto de Intervenção Urbana Anhembi</div></template>
		</PageTop>

		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Saiba como participar</h2>
			<Comments :attr="{id:1, context:'Saiba como participar'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>A partir de 27 de julho este espaço está disponível para receber seus comentários, pedidos de esclarecimentos e quaisquer contribuições para o Projeto de Intervenção Urbana Anhembi, desenvolvido pela São Paulo Urbanismo em cumprimento ao Decreto Municipal n° 56.901 de 2016, que define o procedimento de elaboração dos PIU.</p>
			<p>O PIU Anhembi parte dos índices e parâmetros de parcelamento, uso e ocupação do solo e disposições especificas estabelecidas na Lei Municipal n° 16.886 de 2018 para o perímetro da Zona de Ocupação Especial do Anhembi (ZOE Anhembi), composta pelos setores Sambódromo e Centro de Convenções e Exposições descritos nos incisos I e II, do Art. 2° da referida lei, propriedades hoje da São Paulo Turismo S.A. (SPTuris).</p>
			<p>Entre os dias 15 de Junho e 10 de Julho de 2018, a São Paulo Urbanismo disponibilizou a 1ª Consulta Pública do PIU, que reuniu informações e dados sobre a ZOE Anhembi e seu entorno, tendo como base o diagnóstico socioterritorial e o respectivo programa de interesse público do PIU. O relatório da 1ª Consulta Pública com as contribuições recebidas e a respectiva análise da Prefeitura Municipal de São Paulo pode ser acessado <a href="https://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2018/02/ANH_ConsultaPublica1_Devolutiva_R01_A.pdf" download>aqui</a>.</p>
			<p>Esta 2ª consulta pública tem como finalidade apresentar as diretrizes urbanísticas consolidadas, bem como o detalhamento do programa de intervenções e propostas de intervenção que fundamentarão o decreto do PIU Anhembi.</p>
			<p>Encerrada esta 2ª consulta pública, as sugestões recebidas serão consolidadas, sendo publicada a versão definitiva do PIU, com as justificativas para a incorporação ou não das contribuições recebidas.</p>

			<ProcessoPIU></ProcessoPIU>
		</section>

		<section>
			<h2 class="titulo" indent="1">A finalidade do PIU Anhembi</h2>
			<p>Em 2015 a SPTuris realizou chamamento público (DPR 01/2015) para os interessados em realizar estudos técnicos de modelagem de projeto e estudos de viabilidade para a revitalização, modernização e gestão do complexo do Anhembi, englobando somente a quadra 284, do setor fiscal 073.</p>
			<p>O chamamento já considerava que o complexo apresenta necessidade de atualização e reformulação, visto que desde a sua inauguração, na década de 1970, não recebeu reformas estruturais significativas, resultando em processo de obsolescência da infraestrutura e precariedade de suas instalações. A atualização, portanto, visava tanto manter a liderança em exposições e convenções na cidade, quanto atender as demandas do atual mercado de eventos, equiparando o Anhembi com modernos equipamentos internacionais em termos de conforto ao usuário, flexibilidade, modularidade e tecnologia.</p>
			<p>A intenção de atualização e renovação deste território traz a oportunidade de desenvolvimento de projetos associados às atividades expositivas e culturais existentes, incentivando a vocação de feiras, eventos e negócios da região, considerando o Artigo 3º da Lei 16.886/2018, por meio da implantação de novas atividades econômicas, revertendo a subutilização de grande parte das áreas públicas ali existentes.</p>

			<p>As novas diretrizes da Administração Municipal vão ao encontro da necessidade de diversificação das atividades neste território. A delicada situação financeira da SP Turis, que resulta na dificuldade em investimentos de requalificação das estruturas do Anhembi, gera a oportunidade para um novo desenvolvimento, guiado pelas diretrizes do interesse público constantes neste Projeto de Intervenção Urbana.</p>
			<p>O Anhembi é hoje um dos principais centros de convenções e exposições da cidade de São Paulo, sendo administrado pela SPTuris, empresa de turismo e eventos controlada pela Prefeitura de São Paulo, que detém quase 96% de suas ações. Considerando sua importância e as dificuldades enfrentadas atualmente, o Anhembi passou a integrar a lista de serviços e ativos do Plano Municipal de Desestatização, a cargo da Secretaria Municipal de Desestatização e Parcerias (SMDP), passíveis de serem geridos pela iniciativa privada, por meio de concessão, Parceria Público-Privada ou mesmo privatização, desonerando assim o poder público.</p>
			<p>Para garantir que a receita das desestatizações tenha destino certo e seja de fato utilizada em áreas prioritárias e não no custeio da máquina pública, foi criado o Fundo Municipal de Desenvolvimento Social (FMD) pela Lei nº 16.651, de 16 de maio de 2017. Nele ficarão depositadas as receitas oriundas das concessões e privatizações que, futuramente, serão empregadas nas áreas mais sensíveis da administração, como saúde, educação, habitação, mobilidade urbana, segurança e assistência social.</p>
			<p>A alienação da participação societária detida pelo Município de São Paulo na SPTuris foi autorizada pela Lei n°16.766 de 20 de dezembro de 2017, sendo que o §4° definiu que os recursos auferidos com a alienação da participação societária referida no “caput” serão destinados exclusivamente ao FMD, com destinação obrigatória de no mínimo 20% dos recursos para investimentos na Zona Norte da cidade de São Paulo, e orientados para as áreas prioritárias, nos termos do art. 6º da Lei nº 16.651, de 16 de maio de 2017.</p>
			<p>Dando continuidade ao processo, a Lei Municipal n° 16.886 de 2018, que definiu índices e parâmetros de parcelamento, uso e ocupação do solo para a ZOE Anhembi, determinou que o detalhamento das disposições da referida lei, as diretrizes urbanísticas complementares e o programa de intervenções fossem definidas por meio do PIU, a ser aprovado mediante decreto do Executivo.</p>
			<Comments :attr="{id:2, context:'A finalidade do PIU Anhembi'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Caracterização sócioterritorial e ambiental</h2>
			<p>Para elaboração das diretrizes urbanísticas e posterior consolidação das propostas, foi realizado um estudo de caracterização do Perímetro Expandido e do Perímetro de Abrangência do PIU, possibilitando a identificação de carências e potencialidades do território. O resultado das análises pode ser acessado nos cadernos disponíveis para download:</p>
			<ul class="pdfBox">
				<li><a href="https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/1-Analise-Territorial.pdf" download>
					<i class="icon-pdf icon"><span>picture_as_pdf</span></i>
					<div>Análise Territorial</div>
					<span>18,5 Mb</span>
				</a></li>
				<li><a href="https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/2-Analise-Ambiental.pdf" download>
					<i class="icon-pdf icon"><span>picture_as_pdf</span></i>
					<div>Análise Ambiental</div>
					<span>16,1 Mb</span>
				</a></li>
			</ul>
		</section>

		<section>
			<h2 class="titulo" indent="1">Perímetros de Intervenção</h2>
			<p>As diretrizes urbanísticas e o programa de intervenções foram definidos para as duas escalas previstas na Lei n° 16.866 de 2018: o Perímetro de Abrangência e o Perímetro Expandido. </p>
			<p>No primeiro caso, foram incluídas integralmente as quadras 283 e 284, delimitadas pela Av. Assis Chateaubriand, a Av. Olavo Fontoura, a Praça Campo de Bagatelle, a Av. Santos Dumont, a Rua Marechal Leitão de Carvalho, a Rua Masseinet Sorcinelli e a Rua Prof. Milton Rodrigues. Quanto ao Perímetro Expandido, foi adotada a determinação do §1° do Art. 5º da Lei n°16.866 de 2018, formado pela interseção entre o subsetor Arco Tietê da Macroárea de Estruturação Metropolitana (MEM) e os limites administrativos das Prefeituras Regionais de Santana/Tucuruvi e Casa Verde.</p>

			<figure title="Processo de recorte do Perímetro Expandido" class="borda">
				<img src="https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/ANH_Perimetros.jpg" alt="Processo de recorte do Perímetro Expandido" scaleFactor="0.5">
				<h1>Processo de recorte do Perímetro Expandido</h1>
				<ul class="legenda">
					<li><div style="border-color: #534e3d; background: #f2e271; border-width: 2px; font-weight: bolder;">1</div> Prefeitura Regional Casa Verde-Cachoeirinha</li>
					<li><div style="border-color: #534e3d; background: #f2e271; border-width: 2px; font-weight: bolder;">2</div> Prefeitura Regional Santana-Tucuruvi</li>
					<li><div style="border-color: #cdbd4c; background: #f2e271;">3</div> Distrito Limão</li>
					<li><div style="border-color: #cdbd4c; background: #f2e271;">4</div> Distrito Casa Verde</li>
					<li><div style="border-color: #cdbd4c; background: #f2e271;">5</div> Distrito Santana</li>
					<li><div style="border-color: #FFF; background: #e1ac3c; border-style: dashed; outline:1px solid #e1ac3c; color: #FFF;">6</div> Perímetro Expandido do PIU Anhembi</li>
					<li><div style="border-color: #c57979; background: #c57979; color: #FFF;">7</div> Perímetro do Arco Tietê</li>
				</ul>
			</figure>

			<Mapa :mapa_attrs="mapa_attrs"></Mapa>

			<p>Conforme expresso no Art. nº 5 da referida lei, os recursos arrecadados com o pagamento de Outorga Onerosa do Direito de Construir dos empreendimentos futuros no Perímetro de Abrangência deverão ser destinados ao financiamento de investimentos tanto no Perímetro de Abrangência quanto no Expandido. Soma-se a isso a determinação da Lei nº 16.766 de 2017 que 20% dos recursos provenientes da alienação da SPTuris deverão também ser aplicados na Zona Norte e destinados para investimentos em saúde, educação, segurança, habitação, transporte, mobilidade urbana e assistência social, conforme já exposto. </p>
			<p>Com base nessas definições e realizadas simulações de transformação urbana no Perímetro de Abrangência, foi elaborado o Programa de Intervenções e selecionadas as intervenções prioritárias no Perímetro Expandido do PIU Anhembi.</p>
			<Comments :attr="{id:3, context:'Caracterização sócioterritorial e ambiental'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="2">Diretrizes urbanísticas para o perímetro de abrangência</h3>
			<p>O Perímetro de Abrangência da ZOE Anhembi compreende tanto os lotes incluídos no processo de alienação da SPTuris, áreas privadas já existentes (incluindo o hotel) e áreas públicas próximas a Praça Campo de Bagatelle. As diretrizes urbanísticas previstas para o Perímetro de Abrangência tem como premissa a qualificação urbanística e paisagística da área, de forma que os percentuais de destinação pública obrigatória contribuam para integrar os territórios da ZOE Anhembi com o entorno, além de valorizar os futuros empreendimentos.</p>
			<p>Partindo do pressuposto que a ZOE Anhembi poderá ser parcelada e ter seu uso intensificado, com um acréscimo significativo tanto populacional, quanto de atividades comerciais e de serviços, cabe ao PIU estabelecer um conjunto essencial de diretrizes urbanísticas de forma a associar o adensamento previsto à qualificação urbana necessária.</p>
			<p>As diretrizes consistem em indicações de conexões viárias transversais, promovendo a ruptura de barreiras formadas por grandes quadras, a distribuição de áreas verdes, recuperando a Área de Preservação Permanente do Rio Tietê, além do alargamento e melhorias de passeios públicos.</p>
			<p>Além do mais, o PIU prevê a possibilidade de desenvolvimento dos vários subsetores que compõem a ZOE de forma independente, garantindo a flexibilidade na implantação de novos usos.</p>

			<Galeria :gallery_attrs="gallery_attrs"></Galeria>

			<Comments :attr="{id:4, context:'Diretrizes urbanísticas para o perímetro de abrangência'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
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

			<figure title="Síntese das intervenções em mobilidade urbana" class="borda">
				<img src="https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/ANH_mobilidade.jpg" alt="Síntese das intervenções em mobilidade urbana">
				<h6>Síntese das intervenções em mobilidade urbana</h6>
				<ul class="legenda">
					<li>
						<div class="linha" style="border-style: dashed; border-color: #ee832c"></div>
						Ciclovia proposta
					</li>
					<li>
						<div class="linha" style="border-style: dashed; border-color: #444444"></div>
						Novas conexões viárias
					</li>
					<li>
						<div class="linha" style="border-color: #ffba18;"></div>
						Melhoria de passeio existente
					</li>
					<li>
						<div class="linha" style="border-color: #db4746;"></div>
						Corredor de ônibus municipal
					</li>
					<li>
						<div class="linha" style="border-color: #f2903c;"></div>
						Rede cicloviária existente
					</li>
					<li>
						<div class="linha" style="border-color: #acacac;"></div>
						Sistema viário estrutural
					</li>
				</ul>
			</figure>

			<p>Por sua vez, a qualificação socioambiental será promovida por meio da implantação de sistema de áreas verdes composto por áreas verdes existentes, como o Parque Juventude, e novos parques, como os parques lineares ao longo dos córregos Carandiru e Papaterra Limongi, possibilitando a retomada do contato com os rios da cidade. Essas áreas serão conectadas por bulevares e alamedas, que agregarão valor paisagístico e ambiental, além de contribuírem na mitigação de ilhas de calor e problemas de drenagem.</p>

			<figure title="Síntese das intervenções de qualificação ambiental" class="borda">
				<img src="https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/ANH_ambiental.jpg" alt="Síntese das intervenções de qualificação ambiental">
				<h6>Síntese das intervenções de qualificação ambiental</h6>
				<ul class="legenda">
					<li>
						<div class="linha" style="border-style: dashed; border-color: #ee832c"></div>
						Ciclovia proposta
					</li>
					<li>
						<div style="border-width: 0; border-radius: 100%; background: url('https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/legendaAmbiental1.gif');"></div>
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

			<figure>
				<img src="https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/ACT_Centralidade_Perspectivas_Carandiru_MidRes.jpg" alt="Proposta para a implantação do Parque Linear Carandiru">
				<figcaption>Proposta para a implantação do Parque Linear Carandiru</figcaption>
			</figure>

			<p>Além do mais, o PIU Anhembi representa uma oportunidade de potencializar o uso de terras públicas subutilizadas que se encontram no Perímetro Expandido, prevendo a implantação de ruas, praças, escolas e parque público de habitação de interesse social.</p>

			<figure title="Síntese das intervenções de habitação de interesse social" class="borda">
				<img src="https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/ANH_habitacao.jpg" alt="Habitação">
				<h6>Síntese das intervenções de habitação de interesse social</h6>
				<ul class="legenda">
					<li>
						<div style="border-width: 0; border-radius: 100%; background: url('https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/legendaHabitacao1.gif');"></div>
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

			<Comments :attr="{id:5, context:'Programa de intervenções para o perímetro expandido'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Modelagem econômica da intervenção proposta</h2>
			<p>Como mencionado no capítulo anterior o financiamento das intervenções do PIU Anhembi considera que a implantação do programa de intervenções deverá acontecer em territórios do entorno da ZOE do Anhembi, com recursos financeiros obtidos a partir da contrapartida financeira em outorga onerosa a ser paga pelos empreendimentos que poderão ser edificados ao longo do tempo nas glebas já discriminadas. Neste sentido, foram feitas estimativas de projeção da arrecadação e implantação das intervenções do PIU no horizonte de 15 a 20 anos.</p>
			<p>A alienação da participação societária da Prefeitura na SP Turis, proprietária dos terrenos do Anhembi, gera a possibilidade de transformação deste território, com a perspectiva de adensamento, uma vez que este se encontra em local de intenso fluxo de pessoas, o que poderia ser melhor aproveitado tanto por usos residenciais quanto não residenciais.</p>
			<p>Considera-se, portanto, que a outorga onerosa do direito de construir (OODC) resultante do processo descrito acima possa ser revertida em melhorias urbanas para o entorno, sendo necessária então a mensuração de seus valores possíveis a serem arrecadados pelo FUNDURB.</p>

			<Comments :attr="{id:6, context:'Modelagem econômica da intervenção proposta'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="2">Premissas consideradas para a modelagem</h3>
			<p>Para a realização dos estudos, foram definidas premissas com valor único, resultantes das possibilidades de transformação dos terrenos da ZOE Anhembi, além de premissas variáveis, que possibilitaram o estudo de cenários distintos para a estimativa de arrecadação de outorga onerosa.</p>
			<h4>Premissas com um único valor (estáticas)</h4>
			<p>Da área total de terrenos, a partir dos estudos realizados pela área técnica de projetos, estima-se uma destinação de áreas públicas, no caso de parcelamento do solo, considerando o mínimo estabelecido pela legislação vigente de 20% e as demandas de conexões viárias, áreas verdes e institucionais descritas anteriormente. Tais estimativas permitem uma projeção de áreas passíveis de ocupação, sobre as quais será calculada a utilização de potencial construtivo adicional.</p>
			<h4>Premissas geradoras de cenários (variáveis)</h4>
			<p>Para a estimativa do coeficiente de aproveitamento que será utilizado, foram prospectados três possíveis cenários:</p>
			<ol style="list-style-type: lower-roman;">
				<li>todos os lotes utilizando CA 2;</li>
				<li>todos utilizando CA 4, ou;</li>
				<li>CA médio total de 5,7, considerando a restrição de gabarito existente (COMAR).</li>
			</ol>
			<p>A fórmula de cálculo da OODC a ser utilizada é a mesma definida pela lei 16.050/2014 (PDE), portanto, para o obtenção do Valor de Cadastro foi estabelecida a média dos valores das faces de cada quadra (R$ 833,00 e R$ 966,86/m² para as quadras 283 e 284, respectivamente), o que resultou em um montante de arrecadação projetado no período de 15 a 20 anos.</p>

			<Comments :attr="{id:7, context:'Premissas consideradas para a modelagem'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="2">Resultados da modelagem econômico-financeira</h3>
			<p>Assim, havendo os três horizontes estudados de coeficiente de aproveitamento, resultam-se três cenários de arrecadação de Outorga Onerosa do Direito de Construir (OODC), conforme quadro abaixo:</p>

			<div class="tablewrap">
				<table class="center">
					<caption>Outorga Onerosa do Direito de Construir</caption>
					<thead>
						<th>CA</th>
						<th>Valor de Cadastro atual</th>
					</thead>
					<tbody>
						<tr>
							<td>2,0</td>
							<td>R$ 100.901.259</td>
						</tr>
						<tr>
							<td>4,0</td>
							<td>R$ 151.351.888</td>
						</tr>
						<tr>
							<td>5,7</td>
							<td>R$ 166.347.932</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Comments :attr="{id:8, context:'Resultados da modelagem econômico-financeira'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
		<h3 class="titulo" indent="2">Conclusões</h3>
			<p>Dado que o coeficiente de aproveitamento a ser utilizado pelos futuros empreendimentos é a variável com maior imprevisibilidade, uma vez que responderá à demanda específica da região e da percepção desta pelo empreendedor, pode-se considerar os três cenários para se formar ideia de um mais (i) pessimista (CA 2,0), um (ii) intermediário e de acordo com o já definido para os eixos (CA 4,0), e ainda outro mais (iii) otimista e embasado no potencial de acessibilidade da região (CA 5,7), para se prever a arrecadação.</p>
			<p>Por fim, é relevante que do programa de intervenções conste um rol de obras, melhoramentos urbanísticos e equipamentos públicos os quais terão sua implantação definida no tempo, na medida em que a arrecadação das contrapartidas financeiras forem ingressando no fundo responsável pelo financiamento destas. A previsão de cenários de menores ou maiores recursos se faz necessária, conforme consta do Quadro 5, quando menciona-se intervenções “básicas” ou “complementares”.</p>

			<Comments :attr="{id:9, context:'Conclusões'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Modelo de Gestão Democrática</h2>

			<ConselhoGestor></ConselhoGestor>

			<p>Dentre as estratégias do Plano Diretor Estratégico (PDE), tem destaque o fortalecimento da participação popular nas decisões dos rumos da cidade, considerando as diversas instâncias e por meio de diferentes instrumentos de participação e controle social. Tais estratégias garantem a participação de representantes dos diferentes segmentos da população de forma direta ou por intermédio de associações representativas, nos processos de planejamento e gestão da cidade, de realização de investimentos públicos e na elaboração, implementação e avaliação de planos, programas e projetos de desenvolvimento.</p>
			<p>O PDE definiu, no artigo 136, que os PIU elaborados pelo Poder Público deverão apresentar propostas de transformações urbanísticas, econômicas e ambientais no perímetro onde for aplicado o instrumento, cabendo ao PIU indicar os objetivos prioritários da intervenção, as propostas relativas a aspectos urbanísticos, ambientais, sociais, econômico-financeiros e modelo de gestão democrática que contemple mecanismos de participação e controle social e instrumentos para monitoramento e avaliação das ações.</p>
			<p>Neste sentido, o PIU Anhembi deverá instituir Conselho Gestor sob a coordenação à Secretaria de Urbanismo e Licenciamento (SMUL), com a participação de órgãos municipais e de entidades representativas da sociedade civil, tendo a competência de instruir e auxiliar a implantação do Programa de Intervenções no Perímetro Expandido, monitorar o desenvolvimento e propor programas e estratégias que possam aprimorar o projeto, enquanto que a São Paulo Urbanismo ficará a cargo de promover a implantação dos projetos no Perímetro Expandido e avaliar a evolução dos processos, podendo contar com a colaboração dos órgãos e entidades municipais para o desempenho de suas funções específicas.</p>
			<p>O Decreto nº 56.901 de 29 de março de 2016 que disciplina a elaboração dos Projetos de Intervenção Urbana assegura a realização de consultas públicas em etapas definidas de sua elaboração, para discussão e aperfeiçoamento das propostas. Da mesma maneira, a Minuta de Decreto de implantação do PIU, colocada em consulta pública, propõe a constituição de Conselho Gestor.</p>

			<Comments :attr="{id:10, context:'Modelo de Gestão Democrática'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Minuta do Decreto</h2>

			<Minuta>
				<blockquote class="leg" ref="minuta">
					<p class="caput">Aprova o Projeto de Intervenção Urbana para a Zona de Ocupação Especial do Complexo Anhembi – PIU-Anhembi, e dá outras providências.</p>
					<p>BRUNO COVAS, Prefeito do Município de São Paulo, no uso das atribuições que lhe são conferidas por lei, </p>
					<p>CONSIDERANDO o disposto no art. 15, § 1º da Lei n. 16.402, de 22 de março de 2016 – Lei de Parcelamento, Uso e Ocupação do Solo (LPUOS), que determina terem os perímetros das Zonas de Ocupação Especial - ZOE parâmetros de parcelamento, uso e ocupação do solo adequados às suas especificidades e definidos por Projeto de Intervenção Urbana, aprovado por decreto, observados os coeficientes de aproveitamento estabelecidos por macroárea conforme Quadro 2A da Lei nº 16.050, de 31 de julho de 2014 – PDE;</p>
					<p>CONSIDERANDO o disposto na Lei n. 16.766, de 20 de dezembro de 2017, que autoriza a alienação da participação societária detida pelo Município de São Paulo na São Paulo Turismo S.A., e que traz regras de utilização da quadra 283 (duzentos e oitenta e três) do imóvel no qual estão localizados do Polo Cultural e Esportivo Grande Otelo - Sambódromo e das áreas de concentração e dispersão de escolas de samba na Quadra;</p>
					<p>CONSIDERANDO as disposições da Lei n. 16.886, de 4 de maio de 2018, que define índices e parâmetros de parcelamento, uso e ocupação do solo a serem observados na elaboração de Projeto de Intervenção Urbana - PIU para a Zona de Ocupação Especial - ZOE do Anhembi;</p>
					<p>CONSIDERANDO os trabalhos técnicos realizados no âmbito do Processo n. 7810.2018/0000069-6;</p>
					<p>CONSIDERANDO o processo público participativo de elaboração do Projeto de Intervenção Urbana do PIU-Anhembi;</p>
					<p>D E C R E T A: </p>
					<p>Art. 1º. Fica aprovado o Projeto de Intervenção Urbana para a Zona de Ocupação Especial do Anhembi – PIU-Anhembi.</p>
					<p>Parágrafo único. O presente decreto estabelece os parâmetros de parcelamento, uso e ocupação do solo adequados às especificidades da Zona de Ocupação Especial – ZOE do Anhembi, nos termos do art. 15, § 1º da Lei n. 16.402, de 22 de março de 2016 – Lei de Parcelamento, Uso e Ocupação do Solo (LPUOS), da Lei n. 16.766, de 20 de dezembro de 2017, que autoriza a alienação da participação societária detida pelo Município de São Paulo na São Paulo Turismo S.A., e da Lei n. 16.886, de 4 de maio de 2018, que define índices e parâmetros de parcelamento, uso e ocupação do solo a serem observados na elaboração de Projeto de Intervenção Urbana - PIU para a Zona de Ocupação Especial - ZOE do Anhembi .</p>
					<p>Art. 2°. O Perímetro de Intervenção do PIU-Anhembi está definido no Mapa 1, anexo ao presente decreto, aplicando-se ao território da ZOE do Anhembi a regulação urbanística trazida na Lei n. 16.886, de 4 de maio de 2018, especialmente seu Anexo Único - Quadro de índices e Parâmetros de Parcelamento, Uso e Ocupação do Solo da ZOE do Anhembi, bem como os parâmetros de parcelamento, uso e ocupação do solo constantes dos quadros a seguir:</p>
					<p>I. Quadro 1 - Percentuais de destinação de área pública; </p>
					<p>II. Quadro 2 - Parâmetros de parcelamento do solo (dimensões de lote e quadra); </p>
					<p>III. Quadro 3 - Parâmetros de Ocupação, exceto cota ambiental;</p>
					<p>IV. Quadro 4 - Parâmetros de incomodidade por zona;</p>
					<p>§ 1º. O Perímetro de Intervenção do PIU-Anhembi subdivide-se em Perímetro de Abrangência, caracterizado como a ZOE do Anhembi e objeto de regulação urbanística específica por este decreto, e Perímetro Expandido, destinado a receber intervenções referentes a qualificação urbanística pretendida para a área.</p>
					<p>a. O Perímetro de Abrangência é formado pelas quadras 283 e 284, delimitadas pela Av. Assis Chateaubriand, a Av. Olavo Fontoura, a Praça Campo de Bagatelle, a Av. Santos Dumont, a Rua Marechal Leitão de Carvalho, a Rua Prof. Milton Rodrigues e a Rua Masseinet Sorcinelli;</p>
					<p>b. O Perímetro Expandido é formado pela interseção entre o subsetor Arco Tietê da Macroárea de Estruturação Metropolitana (MEM), definida na Lei n. 16.050, de 31 de julho de 2014 – Plano Diretor Estratégico, e os limites administrativos das Prefeituras Regionais de Santana/Tucuruvi e Casa Verde.</p>
					<p>§ 2º. Além dos parâmetros estabelecidos nos quadros previstos neste artigo, serão observadas as disposições específicas para o Perímetro de Abrangência trazidas neste decreto, bem como eventuais limitações administrativas.</p>
					<p>Art. 3º. A proposta de ordenamento para o Perímetro de Intervenção do PIU-Anhembi tem por finalidade promover a qualificação e transformação do território objeto de estudo, e tem os seguintes objetivos:</p>
					<p>I. Desenvolver o território de modo a potencializar as atividades econômicas por meio do incentivo aos usos não residenciais, em especial as atividades atuais relacionadas à realização de feiras e eventos, considerando o disposto no art. 3º, parágrafo único da Lei n. 16.886, de 4 de maio de 2018, observado o inciso II do art. 4º deste decreto;</p>
					<p>II. Socializar os ganhos da produção imobiliária da cidade, por intermédio da comercialização do potencial construtivo do território; </p>
					<p>III. Incentivar o desenvolvimento urbano, por intermédio de adensamento populacional e construtivo compatível com a infraestrutura existente e planejada;</p>
					<p>IV. Qualificar a centralidade a norte do Rio Tietê, pautada pela diversidade de usos, promovendo maior equilíbrio entre emprego e moradia;</p>
					<p>Art. 4°. Para que sejam atingidos os objetivos de transformação e qualificação territorial do Perímetro de Intervenção do PIU-Anhembi, promovendo-se o desenvolvimento urbano da área de forma equilibrada:</p>
					<p>I. O potencial construtivo do Setor Sambódromo, previsto no art. 4º da Lei n. 16.886, de 4 de maio de 2018, somente poderá ser transferido ao Setor Centro de Convenções e Exposições após esgotado o estoque de potencial construtivo do setor receptor;</p>
					<p>II. O proprietário dos terrenos da ZOE do Anhembi, inseridos nos subsetores A, B, C e E, poderá optar por utilizar os benefícios previstos no art. 3º, parágrafo único da Lei n. 16.886, de 4 de maio de 2018, a qualquer tempo, cabendo-lhe, neste caso, alternativamente:</p>
					<p>a. desconto de até 20% (vinte por cento) do valor da contrapartida referente à outorga onerosa de direito de construir em empreendimentos licenciados no Setor Centro de Convenções e Exposições e no Setor Sambódromo;</p>
					<p>b. acréscimo de até 20% (vinte por cento) sobre os valores totais de potencial construtivo do Setor Centro de Convenções e Exposições e do Setor Sambódromo.</p>
					<p>Parágrafo único: Na hipótese prevista no inciso II deste artigo, a paralisação do funcionamento da atividade de Centro de Convenções e Exposições antes do prazo de 20 (vinte) anos previsto em lei, contados a partir da efetiva alienação da participação societária detida pelo Município de São Paulo na São Paulo Turismo S.A, acarretará o dever de pagamento integral do valor referente às contrapartidas devidas pela utilização do potencial construtivo adicional, devidamente atualizado pelo IPCA, divulgado pelo Instituto Brasileiro de Geografia e Estatística – IBGE, ou, na falta deste, por outro índice oficial de inflação.</p>
					<p>Art. 5º. São diretrizes urbanísticas para o Perímetro de Abrangência do PIU-Anhembi:</p>
					<p>I. Promover o adensamento do território inserido na ZOE do Anhembi, especialmente das áreas atualmente desocupadas, ampliando a oferta de empregos e a densidade construtiva e populacional do território;</p>
					<p>II. Qualificar o eixo da Av. Olavo Fontoura por meio da diversificação dos usos na ZOE do Anhembi, criando uma nova frente urbana que promova a dinamização da avenida;</p>
					<p>III. Promover a qualificação paisagística e recuperação ambiental das áreas livres na ZOE do Anhembi, contribuindo para a construção de um sistema de espaços livres públicos do entorno;</p>
					<p>IV. Possibilitar a microacessibilidade e a mobilidade ativa na gleba do Anhembi, por intermédio da permeabilidade urbana das futuras quadras com as vias do entorno;</p>
					<p>V. Qualificar, por meio de tratamento urbanístico, a área pública lindeira à Av. Olavo Fontoura e à Praça Campo de Bagatelle, de forma a facilitar a travessia do pedestre sobre a Av. Santos Dumont e a conectividade do Anhembi com o Terminal Rodoviário do Tietê/Estação Portuguesa Tietê do Metrô.</p>
					<p>Art. 6º. São objetivos específicos do PIU-Anhembi para o território de seu Perímetro de Abrangência:</p>
					<p>I. Integrar o entorno do Perímetro de Abrangência ao território da ZOE do Anhembi por intermédio da redução das longas extensões de quadra, visando a construção de uma parcela qualificada de cidade;</p>
					<p>II. Conformar a Avenida Olavo Fontoura como eixo de conexão entre as quadras 283, 284 e o Terminal Tietê/Estação Portuguesa Tietê do metrô, por intermédio do incentivo ao uso misto e fachada ativa, proporcionando maior utilização do espaço de fruição pública e a interação dos pedestres com os pavimentos de acesso às edificações;</p>
					<p>III. Promover a destinação de áreas públicas originadas do parcelamento do solo da ZOE do Anhembi de forma equilibrada e proporcional entre os diversos setores do Perímetro de Abrangência;</p>
					<p>IV. Priorizar, no tocante à distribuição de novas áreas verdes, a manutenção da massa arbórea existente, a conformação de uma nova frente das quadras em relação às Marginais e a implantação de uma rede de áreas livres que qualifiquem o percurso do pedestre.</p>
					<p>Art. 7º. A ZOE do Anhembi divide-se nos seguintes subsetores, indicados no Mapa 2, anexo ao presente decreto:</p>
					<p>I. Subsetores A, B e C: incluem, respectivamente, os terrenos onde se encontram o Palácio de Convenções, o Pavilhão de Exposições e parcela dos estacionamentos na Quadra 284, formando o Setor II (Centro de Exposições e Convenções) da Lei n. 16.886, de 4 de maio de 2018;</p>
					<p>II. Subsetor D: corresponde aos lotes com SQL 073.284.0004-0785, na Quadra 284;</p>
					<p>III. Subsetor E: corresponde a toda Quadra 283, coincidente ao Setor I (Sambódromo) da Lei n. 16.886, de 4 de maio de 2018.</p>
					<p>Parágrafo único. A divisão do território da ZOE do Anhembi em subsetores tem por finalidade permitir o detalhamento dos parâmetros de uso e ocupação do solo e das diretrizes urbanísticas a serem aplicados para implantação do PIU-Anhembi.</p>
					<p>Art. 8º. São diretrizes urbanísticas específicas do PIU-Anhembi, no caso de parcelamento do solo:</p>
					<p>I. No Subsetor B:</p>
					<p>a. promover a conexão entre a Av. Olavo Fontoura e a Av. Assis Chateaubriand por intermédio da implantação de boulevard com a seguinte especificação mínima: faixas carroçáveis totalizando 14m de largura mínima, separadas por canteiro de 20m de largura mínima e calçadas de 5m de largura mínima de cada lado;</p>
					<p>b. destinar no mínimo 50% (cinquenta por cento) da área verde originada em função do parcelamento do solo na Área de Preservação Permanente (APP) do Rio Tietê, sendo vedada a confrontação da área destinada com lotes.</p>
					<p>II. No Subsetor C:</p>
					<p>a. promover a conexão da Rua Massinet Sorcinelli até a Av. Olavo Fontoura com a seguinte especificação mínima: faixa carroçável de 11m de largura mínima e calçadas de 5m de largura mínima cada lado;</p>
					<p>b. vedação de implantação da área verde, originada em função do parcelamento do solo, confrontante com lotes;</p>
					<p>c. destinar área institucional originada em função do parcelamento do solo na extremidade leste do subsetor, vedada a confrontação da área destinada com lotes, de modo a integrar-se com a área pública existente e qualificar o acesso do pedestre no início da Av. Olavo Fontoura.</p>
					<p>III. No Subsetor D, destinar a área verde originada em função do parcelamento do solo dentro da Área de Preservação Permanente (APP) do Rio Tietê;</p>
					<p>IV. No subsetor E:</p>
					<p>a. promover a ligação entre a Av. Olavo Fontoura e a Av. Assis Chateaubriand por meio de novas conexões viárias em cada extremidade da pista do Sambódromo, no limite entre o equipamento e as atuais áreas de dispersão e concentração de carros alegóricos;</p>
					<p>b. destinar no mínimo 50% (cinquenta por cento) da área verde originada em função do parcelamento do solo na Área de Preservação Permanente (APP) do Rio Tietê.</p>
					<p>Art. 9º. Os lotes com frente para as calçadas especiais, listadas abaixo, deverão atender as seguintes disposições:</p>
					<p>I. Nas vias marginais ao Rio Tietê e acessos, calçadas com largura mínima de 8m, divididas em faixa de serviço permeável junto ao meio fio, com largura mínima de 3m, e faixa de circulação com largura mínima de 5m;</p>
					<p>II. Ao longo da Av. Olavo Fontoura:</p>
					<p>a. nos subsetores A, B e C, calçadas com largura mínima de 19m, divididas em faixa de serviço permeável junto ao meio fio, com largura mínima de 1,5m, ciclovia com largura mínima de 2,5m, faixa permeável com largura mínima de 10m e faixa de circulação de 5m;</p>
					<p>b. no subsetor E, calçadas com largura mínima de 8m, divididas em faixa de circulação com largura mínima de 3m junto ao meio fio, e faixa permeável com largura mínima de 3m;</p>
					<p>III. Ao longo da Rua Massinet Sorcinelli, faixa de circulação com largura mínima de 5m;</p>
					<p>IV. Ao longo da Rua Mal. Leitão de Carvalho, faixa de circulação com largura mínima de 3,5m.</p>
					<p>Parágrafo único: A ampliação das calçadas atuais atendendo as diretrizes estabelecidas por este artigo será computada no percentual de destinação de áreas públicas em função do parcelamento do solo.</p>
					<p>Art. 10. A implantação de novas edificações no território da ZOE do Anhembi dependerá de aprovação de Plano Integrado de Parcelamento do Solo e Edificação, elaborado nos termos do art. 3º do Decreto n. 57.558, de 21 de dezembro de 2016,  respeitando a realização dos percentuais mínimos de destinação de área pública em cada subsetor de acordo com o Quadro 1, anexo à presente lei.</p>
					<p>§ 1º. A aprovação e implantação do Plano Integrado poderá ocorrer de forma independente nos subsetores, observado o limite máximo de 70% do potencial construtivo total para o uso residencial.</p>
					<p>§ 2º. No tocante à destinação das áreas públicas e de fruição pública nos projetos integrados, deverão ser observadas as seguintes regras:</p>
					<p>a. as áreas verdes a serem destinadas deverão ser capazes de conter um círculo com raio de 10m (dez metros),deverão ter no mínimo 20m de largura em toda sua extensão;</p>
					<p>b. as vias com dimensões não detalhadas no PIU-Anhembi deverão seguir as especificações mínimas do Quadro 2B da Lei nº 16.402, de 22 de março de 2016, sendo vedada a implantação de vias de pedestre;</p>
					<p>c. as áreas institucionais deverão ser destinadas em lote único dentro dos subsetores correspondentes, observado o art. 47 da Lei n. 16.402, de 22 de março de 2016;</p>
					<p>d. as quadras e lotes resultantes de parcelamento do solo deverão seguir as dimensões mínimas e máximas do Quadro 2;</p>
					<p>e. no mínimo 25% da testada dos lotes ao longo da Av. Olavo Fontoura nos subsetores B, C e E deverão ser ocupados por fachada ativa, nos termos do Art. 71 da Lei nº 16.402, de 22 de março de 2016, podendo gozar do incentivo estabelecido pela alínea “a” do Art. 62 da Lei nº 16.402, de 22 de março de 2016;</p>
					<p>Art. 11. São diretrizes específicas para o Perímetro Expandido do PIU-Anhembi:</p>
					<p>I. Prover o equilíbrio da oferta e demanda por equipamentos públicos, sobretudo de educação infantil, cultura e esporte, bem como equipamentos de assistência social voltados ao idoso, inclusive considerando as principais carências das Prefeituras Regionais de Santana/Tucuruvi e Casa Verde;</p>
					<p>II. Promover a urbanização, regularização fundiária e recuperação ambiental dos assentamentos precários localizados no perímetro, considerando os trechos de maior vulnerabilidade social, bem como a requalificação e regularização dos conjuntos habitacionais existentes, contemplando estudos, projetos, obras e trabalho técnico social;</p>
					<p>III. Promover o direito à moradia digna, proporcionando o atendimento habitacional adequado e definitivo a famílias de baixa renda removidas em decorrência do Programa de Intervenções, prevendo o atendimento habitacional provisório quando necessário e a apresentação do competente Plano de Reassentamento das populações atingidas previamente ao início das obras;</p>
					<p>IV. Atendimento habitacional com produção de novas unidades para aquisição ou locação social, por meio de empreendimentos de Habitação de Interesse Social – EHIS prioritariamente nas Zonas Especiais de Interesse Social – ZEIS e em áreas públicas localizadas no Perímetro Expandido, inclusive por meio do atendimento da Cota de Solidariedade, prevista no art. 111 da Lei n. 16.050, de 31 de julho de 2014;</p>
					<p>V. Priorização, no tocante a provisão de moradias, do atendimento das populações removidas involuntariamente em consequência da implantação do Programa de Intervenções e em decorrência das ações de urbanização dos assentamentos precários, bem como as famílias atendidas pelo Programa Auxílio Aluguel, originárias do perímetro Expandido e da região norte do Município;</p>
					<p>VI. Reestruturação do sistema de mobilidade com a implantação de melhoramentos viários que contribuam para a circulação motorizada, cicloviária e de pedestres; </p>
					<p>VII. Promover conexão do Terminal do Rodoviário do Tietê/Estação Portuguesa-Tietê com a Praça Campo de Bagatelle e a Av. Olavo Fontoura, considerando o melhoramento viário incidente e a área prevista pelo Decreto de Utilidade Pública nº 56.260 de 2015, ampliando assim a acessibilidade ao complexo do Anhembi; </p>
					<p>VIII. Incentivo à mobilidade do pedestre e do ciclista por meio da qualificação dos passeios públicos e da complementação da malha cicloviária, da implantação de bicicletários e paraciclos integrados aos terminais e estações do sistema estrutural de transporte público.</p>
					<p>IX. Implantação das praças, parques e alamedas e bulevares conectados entre si e às estações e terminais de transporte, consolidando assim o necessário sistema de áreas verdes nesse trecho da planície fluvial do rio Tietê;</p>
					<p>VIII. Implantação de áreas verdes com capacidade de absorção, retenção e dispersão controlada das águas das pluviais nas áreas atualmente sujeitas a alagamentos, associando soluções de drenagem a espaços de lazer, consolidando assim o necessário sistema de áreas verdes nesse trecho da planície fluvial do rio Tietê, contribuindo para a diminuição dos pontos de alagamento existentes e para redução da ilha de calor;</p>
					<p>X. Promoção do saneamento dos córregos Carandirú/Carajás e José Papaterra Limongi, recuperando suas Áreas de Preservação Permanente (APP) associadas à implantação de parques lineares, considerando as necessidades e condições ambientais específicas de cada córrego;</p>
					<p>XI. A potencialização do aproveitamento de terrenos públicos, definindo-se áreas para novos equipamentos, empreendimentos de habitação de interesse social e áreas verdes;</p>
					<p>XII. Garantir o modelo de gestão democrática, por meio da criação de um conselho gestor ou participativo de implantação das ações urbanísticas no Perímetro Expandido do PIU Anhembi, composto paritariamente pelo poder público e pela sociedade que, a depender da escala de intervenção e o tipo de validação a ser apresentado pelos estudos, poderá compartilhar responsabilidades com o Conselho Municipal de Política Urbana, nos termos do art. 329 da Lei nº 16.050, de 31 de julho 2014.</p>
					<p>Art. 12. O Programa de Intervenções para o Perímetro Expandido é o constante do Quadro 5 e Mapa 3, anexos ao presente decreto, e será implementado com recursos da conta segregada do Fundo de Desenvolvimento Urbano – FUNDURB prevista no art. 5º da Lei n. 16.886, de 4 de maio de 2018, além de outras fontes de receitas.</p>
					<p>§ 1º. As intervenções previstas no Quadro 5 dividem-se em:</p>
					<p>a. básicas, de implantação obrigatória no âmbito do PIU-Anhembi;</p>
					<p>b. complementares, de implantação facultativa, observados critérios de conveniência e oportunidade administrativa.</p>
					<p>§ 2º. Ao menos 30% (trinta por cento) dos recursos arrecadados na conta segregada citada no “caput” serão destinados à implantação das diretrizes previstas no art. 11, incs. II, III, IV e V, referentes à política de provisão habitacional de interesse social do PIU-Anhembi.</p>
					<p>Art. 13. Nos casos em que a implantação do Programa de intervenção impactar em deslocamento involuntário de população de baixa renda, deverá ser elaborado Plano de Reassentamento previamente ao início das obras, prevendo os recursos necessários e a localização, nos termos do art. 292, IX da Lei 16.050/2014, a ser definido por SEHAB em processo participativo com as famílias atingidas e com os Conselhos Gestores de ZEIS e apontar o atendimento habitacional definitivo dentro do Perímetro Expandido do PIU Anhembi;</p>
					<p>Parágrafo único. O Plano de Reassentamento poderá prever soluções que viabilizem moradia provisória das famílias afetadas pelas intervenções nos casos em que se demonstrar a necessidade de desocupação imediata da área de intervenção. </p>
					<p>Art. 14. O atendimento habitacional no âmbito do PIU Anhembi deverá priorizar a população que tenha sofrido deslocamento involuntário, esteja vinculada a atendimento habitacional provisório e população que se enquadre nos critérios de HIS1 - Habitação de Interesse Social 1, conforme definido no Plano Diretor Estratégico – Lei Municipal nº 16.050/2014.</p>
					<p>Art. 15. A gestão democrática do PIU-Anhembi será realizada por intermédio do seu Conselho Gestor, que contará com a seguinte composição:</p>
					<p>I. 1 representante da Secretaria Municipal de Urbanismo e Licenciamento - SMUL;</p>
					<p>II. 1 representante da Secretaria Municipal de Habitação - SEHAB;</p>
					<p>III. 1 representante do Núcleo Regional de Planejamento da Prefeitura Regional de Santana/Tucuruvi;</p>
					<p>IV. 1 representante do Núcleo Regional de Planejamento da Prefeitura Regional de Casa Verde/Cachoeirinha;</p>
					<p>V. 1 representante da empresa São Paulo Urbanismo – SP-Urbanismo;</p>
					<p>VI. 1 representante do Conselho Participativo da Prefeitura Regional de Santana/ Tucuruvi;</p>
					<p>VII. 1 representante do Conselho Participativo da Prefeitura Regional de Casa Verde/Cachoeirinha;</p>
					<p>VIII. 1 representante do Conselho Municipal de Habitação com atuação no Perímetro Expandido do PIU-Anhembi;</p>
					<p>IX. 1 representante dos moradores ou trabalhadores da área do perímetro Expandido do PIU-Anhembi;</p>
					<p>X. 1 representante de entidades empresariais com reconhecida atuação no Perímetro Expandido do PIU-Anhembi.</p>
					<p>§ 1º. As atribuições e o funcionamento do Grupo de Gestão do PIU-Anhembi serão estabelecidos por Regimento Interno proposto pela empresa São Paulo Urbanismo – SP-Urbanismo e aprovado pela maioria de seus integrantes.</p>
					<p>§ 2°. A Presidência do colegiado caberá ao representante da Secretaria Municipal de Urbanismo e Licenciamento, que presidirá o colegiado e proferirá os votos de desempate, quando necessário.</p>
					<p>Art. 16. O Projeto de Intervenção Urbana do Anhembi, produzido no Processo n. 7810.2018/0000069-6, será utilizado para dirimir dúvidas sobre o conteúdo urbanístico das disposições do presente decreto, ouvida a empresa SP-Urbanismo para a instrução da convicção administrativa sobre questões eventualmente formuladas no seu processo de interpretação e aplicação a respeito do tema.</p>
					<p>Parágrafo único. Caberá à empresa SP-Urbanismo, em função da gestão e acompanhamento da implantação do PIU-Anhembi, remuneração correspondente a 4% (quatro por cento) do valor da outorga onerosa de potencial construtivo adicional arrecadado na implantação deste projeto de intervenção urbana</p>
					<p>Art. 17. Este decreto entrará em vigor na data de sua publicação.</p>
				</blockquote>
			</Minuta>

			<Comments :attr="{id:11, context:'Minuta'}" v-if="estaConsulta.ativo == 1"></Comments>

			<ul class="pdfBox">
				<li><a href="https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/MAPA-1_Perimetros.pdf" download>
					<i class="icon-pdf icon"><span>picture_as_pdf</span></i>
					<div>MAPA 1 – Perímetros</div>
					<span>17,9 Mb</span>
				</a></li>
				<li><a href="https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/MAPA-2_Subsetores.pdf" download>
					<i class="icon-pdf icon"><span>picture_as_pdf</span></i>
					<div>MAPA 2 – Subsetores</div>
					<span>2,74 Mb</span>
				</a></li>
				<li><a href="https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/MAPA-3_ProgramaIntervencoes.pdf" download>
					<i class="icon-pdf icon"><span>picture_as_pdf</span></i>
					<div>MAPA 3 – Programa de intervenções</div>
					<span>14,0 Mb</span>
				</a></li>
				<li><a href="https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/MAPA-4_HabitacaoSocial.pdf" download>
					<i class="icon-pdf icon"><span>picture_as_pdf</span></i>
					<div>MAPA 4 – Habitação Social</div>
					<span>9,66 Mb</span>
				</a></li>
			</ul>
			<Comments :attr="{id:12, context:'Mapas'}" v-if="estaConsulta.ativo == 1"></Comments>

			<div class="tablewrap">
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
				</table>
			</div>

			<div class="tablewrap">
				<table class="center">
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

			<div class="tablewrap">
				<table class="center">
					<caption>QUADRO 3 – Parâmetro de Ocupação, exceto cota ambiental</caption>
					<thead>
						<tr>
							<td rowspan="3">ZONA</td>
							<td colspan="3">Recuos mínimos (m)</td>
							<td rowspan="3">Cota parte máxima de terreno por unidade (m²)</td>
						</tr>
						<tr>
							<td rowspan="2">Frente<sup>(a)</sup></td>
							<td colspan="2">Fundos e laterais</td>
						</tr>
						<tr>
							<td>Altura da edificação menor ou igual a 10m</td>
							<td>Altura da edificação superior a 10m<sup>(b)</sup></td>
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
				<div class="notas">
					<h1>Notas</h1>
					<ol>
						<li>Será dispensado recuo de frente para lotes que apresentem passeio público com no mínimo 5m.</li>
						<li>Os recuos laterais e de fundo da edificação superior a 10m serão dispensados conforme disposições estabelecidas nos incisos II e III do artigo 66 da Lei nº 16.402 de 2016.</li>
					</ol>
				</div>
			</div>

			<div class="tablewrap">
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
					<h1>Notas</h1>
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

			<div class="tablewrap intervencoes">
				<div class="intervencoesTitulo">
					QUADRO 5 – Programa de Intervenções
					<a href="https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/Quadro_5_Programa_Intervencoes_Expandido.pdf" download="Quadro 5">(baixar como .pdf)</a>
				</div>
				<div class="eixo">
					Eixo temático
					<span class="tema">REDE HÍDRICA (HD)</span>
				</div>
				<div class="diretriz">
					Diretriz
					<span class="dir2">ÁREAS DE ABSORÇÃO</span>
				</div>
				<table>
					<tr>
						<td class="col1">Áreas de absorção <span class="cod">(AB)</span></td>
						<td class="col2">Áreas de absorção <span class="cod">(a)</span></td>
						<td><span class="bold">Parque Linear Córrego Carandiru</span> <span class="cod">(HD.AB.a.01)</span> <span class="interv">IB</span></td>
					</tr>
				</table>
				<div class="eixo">
					Eixo temático
					<span class="tema">ESPAÇOS PÚBLICOS/ÁREAS VERDES (EP)</span>
				</div>
				<div class="diretriz">
					Diretriz
					<span class="dir2"> PARQUES</span>
				</div>
				<table>
					<tr>
						<td rowspan="2" class="col1">Parques <span class="cod">(PQ)</span></td>
						<td rowspan="2" class="col2">Parques lineares <span class="cod">(a)</span></td>
						<td><span class="bold">Parque Linear Córrego Carandiru</span> <span class="cod">(EP.PQ.a.01)</span> <span class="interv">IB</span></td>
					</tr>
					<tr>
						<td><span class="bold">Rua José Papaterra Limongi</span> <span class="cod">(EP.PQ.a.02)</span> <span class="interv">IB</span></td>
					</tr>
				</table>
				<div class="diretriz">
					Diretriz
					<span class="dir2">PRAÇAS</span>
				</div>
				<table>
					<tr>
						<td rowspan="6" class="col1">Praças<span class="cod">(PA)</span></td>
						<td rowspan="6" class="col2">Requalificação de praça existente <span class="cod">(a)</span></td>
						<td><span class="bold">Praça Del Amoroso Neto</span> <span class="cod">(EP.PA.a.01)</span> <span class="interv">IC</span></td>
					</tr>
					<tr>
						<td><span class="bold">Praça Margarida de Albuquerque Gimenez</span> <span class="cod">(EP.PA.a.02)</span> <span class="interv">IC</span></td>
					</tr>
					<tr>
						<td><span class="bold">Praça entre a Avenida Gen. Ataliba Leonel e a Rua Mimoso do Sul</span> <span class="cod">(EP.PA.a.03)</span> <span class="interv">IB</span></td>
					</tr>
					<tr>
						<td><span class="bold">Praça Campo de Bagatelle</span> <span class="cod">(EP.PA.a.04)</span> <span class="interv">IB</span></td>
					</tr>
					<tr>
						<td><span class="bold">Av. Olavo Fontoura / Av. Santos Dumont / R. Mal. Leitão de Carvalho</span> <span class="cod">(EP.PA.a.05)</span> <span class="interv">IB</span></td>
					</tr>
					<tr>
						<td><span class="bold">Avenida Cruzeiro do Sul</span> <span class="cod">(EP.PA.a.06)</span> <span class="interv">IC</span></td>
					</tr>
				</table>
				<div class="diretriz">
					Diretriz
					<span class="dir2">EIXOS AMBIENTAIS</span>
				</div>
				<table>
					<tr>
						<td rowspan="4" class="col1">Bulevares <span class="cod">(BL)</span></td>
						<td rowspan="4" class="col2">Arborização e mobiliário urbano sobre base viária <span class="cod">(a)</span></td>
						<td><span class="bold">Avenida Eng. Caetano Álvares</span> <span class="cod">(EP.BL.a.01)</span> <span class="interv">IC</span></td>
					</tr>
					<tr>
						<td><span class="bold">Av Cruzeiro do Sul</span> <span class="cod">(EP.BL.a.02)</span> <span class="interv">IB</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Avenida Morvan Dias de Figueredo / Avenida Assis Chateaubriand</span> <span class="cod">(EP.BL.a.03)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Avenida Olavo Fontoura</span> <span class="cod">(EP.BL.a.4)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td rowspan="9" class="col1">Alamedas <span class="cod">(AL)</span></td>
						<td rowspan="9" class="col2">Arborização e mobiliário urbano sobre base viária <span class="cod">(a)</span></td>
						<td><span class="bold">Avenida Alfredo Pujo</span> <span class="cod">(EP.AL.a.01)</span> <span class="interv">IC</span></td>
					</tr>
					<tr>
						<td><span class="bold">Rua Dr. César</span> <span class="cod">(EP.AL.a.02)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Rua Dr. Olavo Egídio</span> <span class="cod">(EP.AL.a.03)</span> <span class="interv">IC</span></td>
					</tr>
					<tr>
						<td><span class="bold">Rua Duarte de Azevedo</span> <span class="cod">(EP.AL.a.04)</span> <span class="interv">IC</span></td>
					</tr>
					<tr>
						<td><span class="bold">Avenida Inajar de Souza</span> <span class="cod">(EP.AL.a.05)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Rua Paineira do Campo</span> <span class="cod">(EP.AL.a.06)</span> <span class="interv">IB </span> </td>
					</tr>
					<tr>
						<td><span class="bold">Rua Cerqueira Leite</span> <span class="cod">(EP.AL.a.07)</span> <span class="interv">IB</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Rua Cel. Antonio de Carvalho</span> <span class="cod">(EP.AL.a.08)</span> <span class="interv">IB</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Av Moyses Roysen</span> <span class="cod">(EP.AL.a.09)</span> <span class="interv">IB</span> </td>
					</tr>
				</table>
				<div class="eixo">
					Eixo temático
					<span class="tema">MOBILIDADE (MO)</span>
				</div>
				<div class="diretriz">
					Diretriz
					<span class="dir2">SISTEMA VIÁRIO</span>
				</div>
				<table>
					<tr>
						<td rowspan="20" class="col1">Alinhamento Viário <span class="cod">(AV)</span></td>
						<td rowspan="9" class="col2">Abertura de novo viário (pista simples) <span class="cod">(a)</span></td>
						<td><span class="bold">Prolongamento da Rua João Navarro Botelho ‐ CEN‐X</span> <span class="cod">(MO.AV.a.01)</span>  <span class="interv">IB</span></td>
					</tr>
					<tr>
						<td><span class="bold">Prolongamento da Rua Dr. Soares de Gouvea ‐ CEN‐XI</span> <span class="cod">(MO.AV.a.02)</span> <span class="interv">IB</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Prolongamento norte da Praca Maschiach </span><span class="cod">(MO.AV.a.03)</span> <span class="interv">IB</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Prolongamento norte da Av Moyses Roysen ‐ CEN‐IX </span><span class="cod">(MO.AV.a.04)</span> <span class="interv">IB</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Prolongamento sul trecho 1 da Praca Mashiach </span> <span class="cod">(MO.AV.a.05)</span> <span class="interv">IB</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Prolongamento sul trecho 2 da Praca Maschiach </span> <span class="cod">(MO.AV.a.06)</span> <span class="interv">IB</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Prolongamento da Rua Palmeia</span> <span class="cod">(MO.AV.a.07) </span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Prolongamento da Rua Marechal Odylio Denys, estabelecido pela alínea c, inciso II, do Art. 1º da Lei n° 16.541/2016</span> <span class="cod">(MO.AV.a.08)</span> <span class="interv">IB</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Prolongamento da Rua José Papa Terra Limongi</span> <span class="cod">(MO.AV.a.09)</span> <span class="interv">IB</span> </td>
					</tr>
					<tr>
						<td class="col2">Abertura de novo viário (pista dupla) <span class="cod">(b)</span> </td>
						<td><span class="bold">Prolongamento da Avenida Profª. Ida Kolb</span> <span class="cod">(MO.AV.b.01)</span> <span class="interv">IB</span> </td>
					</tr>
					<tr>
						<td rowspan="6" class="col2">Alargamento de viário existente (pista simples) <span class="cod">(c)</span></td>
						<td><span class="bold">Alargamento da Rua Papa Terra Limongi</span> <span class="cod">(MO.AV.c.01)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Praça Mashiach</span> <span class="cod">(MO.AV.c.02)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Avenida Moyses Roysen ‐ CEN‐IX </span> <span class="cod">(MO.AV.c.03)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Rua Palmeia</span> <span class="cod">(MO.AV.c.04)</span> <span class="interv">IC</span></td>
					</tr>
					<tr>
						<td><span class="bold">Rua Cel Antonio de Carvalho</span> <span class="cod">(MO.AV.c.05)</span> <span class="interv">IC</span></td>
					</tr>
					<tr>
						<td><span class="bold">Rua Maria Prestes Maia</span> <span class="cod">(MO.AV.c.06)</span> <span class="interv">IC</span></td>
					</tr>
					<tr>
						<td class="col2">Alargamento de viário existente (pista dupla) <span class="cod">(d)</span></td>
						<td><span class="bold">Alargamento da Rua Darzan e Rua Major Sampaio</span> <span class="cod">(MO.AV.d.01)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td class="col2">Requalificação de viário existente (pista simples) <span class="cod">(e)</span></td>
						<td><span class="bold">Av. Olavo Fontoura (pista sul)</span> <span class="cod">(MO.AV.e.01)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td rowspan="2" class="col2">Requalificação de viário existente (pista dupla) <span class="cod">(f)</span></td>
						<td><span class="bold">Avenida Profª Ida Kolb</span> <span class="cod">(MO.AV.f.01)</span> <span class="interv">IB</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Av. Braz Leme (trecho)</span> <span class="cod">(MO.AV.f.02)</span> <span class="interv">IC</span></td>
					</tr>
					<tr>
						<td rowspan="9" class="col1">Passeios <span class="cod">(PS)</span></td>
						<td rowspan="9" class="col2">Ampliação e melhoria de passeios existentes <span class="cod">(a)</span> </td>
						<td> <span class="bold">Avenida Inajar de Souza</span> <span class="cod">(MO.PS.a.01)</span> <span class="interv">IC</span></td>
					</tr>
					<td><span class="bold">Avenida Eng. Caetano Álvares</span> <span class="cod">(MO.PS.a.02)</span> <span class="interv">IC</span> </td>
					<tr>
						<td><span class="bold">Avenida Alfredo Pujol</span> <span class="cod">(MO.PS.a.03)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Rua Dr. César</span> <span class="cod">(MO.PS.a.04)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Rua Dr. Olavo Egídio</span> <span class="cod">(MO.PS.a.05)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Rua Duarte de Azevedo</span> <span class="cod">(MO.PS.a.06)</span> <span class="interv">IC</span> </td>
					</tr>
					<tr>
						<td><span class="bold">Rua Cel. Antonio de Carvalho</span> <span class="cod">(MO.PS.a.07)</span> <span class="interv">IB</span></td>
					</tr>
					<tr>
						<td><span class="bold">Rua Cerqueira Leite</span> <span class="cod">(MO.PS.a.09)</span> <span class="interv">IB </span></td>
					</tr>
					<tr>
						<td><span class="bold">Avenida Morvan Dias de Figueredo / Avenida Assis Chateaubriand</span> <span class="cod">(MO.PS.a.10)</span> <span class="interv">IC</span></td>
					</tr>
				</table>
				<div class="diretriz">
					Diretriz
					<span class="dir2">CICLOVIA</span>
				</div>
				<table>
					<tr>
						<td class="col1">Ciclovia <span class="cod">(CI)</span></td>
						<td class="col2">Ciclovia <span class="cod">(a)</span></td>
						<td><span class="bold">Avenida General Ataliba Leonel</span> <span class="cod"> (MO.CI.a.01)</span> <span class="interv">IB</span></td>
					</tr>
				</table>
				<div class="eixo">
					<span class="eixo">Eixo Temático</span><span class="tema">EQUIPAMENTOS PÚBLICOS (EQ)</span>
				</div>
				<div class="diretriz">
					Diretriz
					<span class="dir2">EQUIPAMENTOS</span>
				</div>
				<table>
					<tr>
						<td rowspan="3" class="col1">Equipamentos <span class="cod">(EQ)</span></td>
						<td rowspan="3" class="col2">Novos equipamentos <span class="cod">(a)</span></td>
						<td><span class="bold">Área Pública</span><span class="cod"> (EQ.EQ.a.01)</span> <span class="interv">IB</span></td>
					</tr>
					<tr>
						<td><span class="bold">Área de Abrangência (a)</span> <span class="cod">(EQ.EQ.a.02)</span> <span class="interv">IB</span></td>
					</tr>
					<tr>
						<td> <span class="bold">Área de Abrangência (b)</span> <span class="cod">(EQ.EQ.a.03)</span> <span class="interv">IC</span></td>
					</tr>
				</table>
				<div class="eixo">
					Eixo temático
					<span class="tema">HABITAÇÃO<sup>1</sup> (HA)</span>
				</div>
				<div class="diretriz">
					Diretriz
					<span class="dir2">CONSOLIDAÇÃO</span>
				</div>
				<table>
					<tr>
						<td rowspan="2" class="col1">Urbanização Unidades existentes <span class="cod">(UB)</span></td>
						<td class="col2">Intervenção Integrada em Assentamentos Precários <span class="cod">(a)</span> </td>
						<td><span class="bold">Assentamentos Precários</span> <span class="cod">(HA.UB.a.) </span><span class="interv">IB</span></td>
					</tr>
					<tr>
						<td class="col2">Requalificação e Regularização de Conjuntos Habitacionais <span class="cod">(b)</span> </td>
						<td><span class="bold">Conjuntos Habitacionais</span> <span class="cod">(HA.UB.b.)</span> <span class="interv">IC</span> </td>
					</tr>
				</table>
				<div class="diretriz">
					Diretriz
					<span class="dir2">PROVISÃO</span>
				</div>
				<table>
					<tr>
						<td rowspan="2" class="col1">Novas Unidades <span class="cod">(UH)</span></td>
						<td rowspan="2" class="col2">Provisão de moradia <span class="cod">(a)</span></td>
						<td><span class="bold"> Remoção e reassentamento de famílias atingidas pelo Programa de Intervenções</span> (fase 1) <span class="cod">(HA.UH.a.)</span> <span class="interv">IB</span></td>
					</tr>
					<tr>
						<td> <span class="bold" >Produção para redução de déficit habitacional acumulado</span> (fase 2) <span class="cod">(HA.UH.a.)</span> <span class="interv">IC</span></td>
					</tr>
				</table>
				<div class="legenda">
					<h6>Legenda</h6>
					<div><span class="interv">IB</span> Intervenção Básica</div>
					<div><span class="interv">IC</span> Intervenção Complementar</div>
				</div>
				<div class="notas">
					<h1>Notas</h1>
					<ol style="list-style-type: decimal; columns: 1;">
						<li>O Programa Habitacional será pautado nas informações contidas no Mapa 5 anexo ao Decreto.</li>
					</ol>
				</div>
			</div>

			<Comments :attr="{id:13, context:'Quadros'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:14, context:'Comentarios'}"></Comments>
		</section>

		<div class="commentCtx" id="commentCtx" ref="commentCtx" title="Comentar"><a href=""><i class="material-icons">chat</i></a></div>
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
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'Anhembi2',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			gallery_attrs: {
				width: 992, // largura das imagens
				height: 557, // altura das imagens
				images: [
					{
						url: 'https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/galeria/ANH_AcaoAbrangencia_01.jpg',
						state: true,
						title: '',
						icon: false,
						legenda: 'Perímetro de abrangência e principais usos existentes',
						id: 1
					},
					{
						url: 'https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/galeria/ANH_AcaoAbrangencia_02.jpg',
						state: false,
						title: '',
						icon: false,
						legenda: 'Diretrizes urbanísticas para qualificação do eixoda Av. Olavo Fontoura',
						id: 2
					},
					{
						url: 'https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/galeria/ANH_AcaoAbrangencia_03.jpg',
						state: false,
						title: '',
						icon: false,
						legenda: 'Diretrizes urbanísticas - Conexões viárias',
						id: 3
					},
					{
						url: 'https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/galeria/ANH_AcaoAbrangencia_04.jpg',
						state: false,
						title: '',
						icon: false,
						legenda: 'Diretrizes urbanísticas - Conexões especiais',
						id: 4
					},
					{
						url: 'https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/galeria/ANH_AcaoAbrangencia_05.jpg',
						state: false,
						title: '',
						icon: false,
						legenda: 'Diretrizes urbanísticas - Áreas verdes',
						id: 5
					},
					{
						url: 'https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/galeria/ANH_AcaoAbrangencia_06.jpg',
						state: false,
						title: '',
						icon: false,
						legenda: 'Diretrizes urbanísticas consolidadas e áreas passíveis de transformação',
						id: 6
					}
				]
			},
			mapa_attrs: {
				id: 'map',
				center: [ -5193050.487352, -2693402.011056 ],
				zoom: 13.5,
				layers: [
					{
						title: 'Perímetro expandido',
						path: this.src('arquivos/piu-anhembi-2/kml/ANH_PerimetroExpandido.kml'),
						stroke_color: 'rgba(237, 192, 192, 1)',
						fill_color: 'rgba(237, 192, 192, .4)',
						stroke_width: 1
					},
					{
						title: 'Perímetro de abrangência',
						path: this.src('arquivos/piu-anhembi-2/kml/ANH_PerimetroAbrangencia.kml'),
						stroke_color: 'rgba(235, 87, 87, 1)',
						fill_color: 'rgba(235, 87, 87, .8)',
						stroke_width: 1
					}
				]
			},
			tabela_dados: {
				titulo: 'Tabela 2A',
				colunas: [
					{ titulo: 'Item' },
					{ titulo: 'Descrição' },
					{ titulo: 'Incidência' },
					{ titulo: 'Pontos' }
				],
				linhas: [
					[
						[ { data: '1' }, { ref: 'Aplicam-se a legislação pertinente e as normas técnicas brasileiras – ABNT em vigor.' } ],
						[ { data: 'Baixa disponibilidade do serviço por localidade (item 10.5).' }, { ref: 'Aplicam-se a legislação pertinente e as normas técnicas em vigor, sendo que o Executivo poderá estabelecer parâmetros mais restritivos de radiação eletromagnética não ionizante.' } ],
						[ { data: 'Por ocorrência' }, { ref: 'No caso dos aeroportos aplica-se o nível de ruído conforme norma técnica específica.' } ],
						[ { data: 'Consultar TABELA 2a' }, { ref: 'Poderão incidir parâmetros especiais e mais restritivos nos termos §2º do artigo 113 desta lei.' } ]
					],
					[
						[ { data: '2' }, { ref: 'Aplicam-se a legislação pertinente e as normas técnicas brasileiras – ABNT em vigor.' } ],
						[ { data: 'Baixo índice de desempenho de internet (“IS”) por localidade (item 10.6.2.2).' } ],
						[ { data: 'Por ocorrência' }, { ref: 'Quando necessário a CETESB recomenda instalar e operar sistema de controle de poluição do ar baseado na melhor tecnologia.' } ],
						[ { data: 'Consultar TABELA 2b' }, { ref: 'Para atividade de local de culto, nos feriados, sábados a partir das 14h e nos domingos, os parâmetros relativos a ruídos referentes ao período das 7h às 19h passam a valer também para os períodos das 6h às 7h e das 19h às 22h, permanecendo inalterados os parâmetros referentes ao período das 7h às 19h e das 22h às 7h.' } ]
					]
				],
				fonte: 'SPUrbanismo, 2018',
				tabelaListrada: false
			},
			img01: {
				tipo: 'mapa',
				titulo: 'Proposta para a implantação do Parque Linear Carandiru',
				url: 'https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/arco-pinheiros/alamedas-e-bulevares_1.png',
				caption: 'Proposta para a implantação do Parque Linear Carandiru',
				legenda: [
					{ simbolo: 'https://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/legendaHabitacao1.gif', linha: false, fundo: '', descricao: 'Áreas públicas' },
					{ simbolo: '', linha: false, fundo: 'rgb(215, 171, 96)', descricao: 'Intervenção integrada em áreas precárias' },
					{ simbolo: '', linha: true, fundo: 'rgb(254, 116, 1)', descricao: 'Requalificação e regularização de conjuntos habitacionais' },
					{ simbolo: '', linha: false, fundo: 'rgb(194, 0, 1)', descricao: 'Remoção e reassentamento de famílias atingidas pelo Programa de Intervenções' }
				],
				fonte: 'SPUrbanismo, 2018'
			},
			consultas: false,
			estaConsulta: {}
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
		Apoio
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
</style>
