<template>
	<div class="Anhembi2" ref="conteudoConsulta">

		<div class="top" style="background-image: url('http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/capa.jpg'); background-color: #fdf8f2;">
			<div v-show="estaConsulta.nomePublico">
				<h1>{{ estaConsulta.nomePublico }}</h1>
				<div>2ª consulta pública – Projeto de Intervenção Urbana Anhembi</div>
				<div>
					<a href="#contribuicoes" @click="scrollToallComments"><i class="material-icons">chat</i> {{estaConsulta.nContribuicoes}} contribuições</a>
				</div>
				<div id="statusConsulta" :class="consultaState()"></div>
				<!--<div>
					<i class="material-icons">access_time</i> 13 dias restantes para contribuir
				</div> -->
			</div>
			<div class="setaBaixo" @click="setaBaixo"><i class="material-icons">keyboard_arrow_down</i></div>
		</div>

		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Saiba como participar</h2>
			<Comments :attr="{id:1, context:'Saiba como participar'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>A partir de 27 de julho este espaço está disponível para receber seus comentários, pedidos de esclarecimentos e quaisquer contribuições para o Projeto de Intervenção Urbana Anhembi, desenvolvido pela São Paulo Urbanismo em cumprimento ao Decreto Municipal n° 56.901 de 2016, que define o procedimento de elaboração dos PIU.</p>
			<p>O PIU Anhembi parte dos índices e parâmetros de parcelamento, uso e ocupação do solo e disposições especificas estabelecidas na Lei Municipal n° 16.886 de 2018 para o perímetro da Zona de Ocupação Especial do Anhembi (ZOE Anhembi), composta pelos setores Sambódromo e Centro de Convenções e Exposições descritos nos incisos I e II, do Art. 2° da referida lei, propriedades hoje da São Paulo Turismo S.A. (SPTuris).</p>
			<p>Entre os dias 15 de Junho e 10 de Julho de 2018, a São Paulo Urbanismo disponibilizou a 1ª Consulta Pública do PIU, que reuniu informações e dados sobre a ZOE Anhembi e seu entorno, tendo como base o diagnóstico socioterritorial e o respectivo programa de interesse público do PIU. O relatório da 1ª Consulta Pública com as contribuições recebidas e a respectiva análise da Prefeitura Municipal de São Paulo pode ser acessado <a href="http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2018/02/ANH_ConsultaPublica1_Devolutiva_R01_A.pdf" download>aqui</a>.</p>
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
				<li><a href="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/1-Analise-Territorial.pdf" download>
					<i class="small material-icons">picture_as_pdf</i>
					<div>Análise Territorial</div>
					<span>18,5 Mb</span>
				</a></li>
				<li><a href="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/2-Analise-Ambiental.pdf" download>
					<i class="small material-icons">picture_as_pdf</i>
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
				<img src="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/ANH_Perimetros.jpg" alt="Processo de recorte do Perímetro Expandido">
				<h6>Processo de recorte do Perímetro Expandido</h6>
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
				<img src="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/ANH_mobilidade.jpg" alt="Síntese das intervenções em mobilidade urbana">
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
				<img src="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/ANH_ambiental.jpg" alt="Síntese das intervenções de qualificação ambiental">
				<h6>Síntese das intervenções de qualificação ambiental</h6>
				<ul class="legenda">
					<li>
						<div class="linha" style="border-style: dashed; border-color: #ee832c"></div>
						Ciclovia proposta
					</li>
					<li>
						<div style="border-width: 0; border-radius: 100%; background: url('http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/legendaAmbiental1.gif');"></div>
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
				<img src="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/ACT_Centralidade_Perspectivas_Carandiru_MidRes.jpg" alt="Proposta para a implantação do Parque Linear Carandiru">
				<figcaption>Proposta para a implantação do Parque Linear Carandiru</figcaption>
			</figure>

			<p>Além do mais, o PIU Anhembi representa uma oportunidade de potencializar o uso de terras públicas subutilizadas que se encontram no Perímetro Expandido, prevendo a implantação de ruas, praças, escolas e parque público de habitação de interesse social.</p>

			<figure title="Síntese das intervenções de habitação de interesse social" class="borda">
				<img src="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/ANH_habitacao.jpg" alt="Habitação">
				<h6>Síntese das intervenções de habitação de interesse social</h6>
				<ul class="legenda">
					<li>
						<div style="border-width: 0; border-radius: 100%; background: url('http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/legendaHabitacao1.gif');"></div>
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
			
			<div class="tableWrap">
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

			<Minuta></Minuta>

			<Comments :attr="{id:11, context:'Minuta'}" v-if="estaConsulta.ativo == 1"></Comments>

			<ul class="pdfBox">
				<li><a href="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/MAPA-1_Perimetros.pdf" download>
					<i class="small material-icons">picture_as_pdf</i>
					<div>MAPA 1 – Perímetros</div>
					<span>17,9 Mb</span>
				</a></li>
				<li><a href="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/MAPA-2_Subsetores.pdf" download>
					<i class="small material-icons">picture_as_pdf</i>
					<div>MAPA 2 – Subsetores</div>
					<span>2,74 Mb</span>
				</a></li>
				<li><a href="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/MAPA-3_ProgramaIntervencoes.pdf" download>
					<i class="small material-icons">picture_as_pdf</i>
					<div>MAPA 3 – Programa de intervenções</div>
					<span>14,0 Mb</span>
				</a></li>
				<li><a href="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/MAPA-4_HabitacaoSocial.pdf" download>
					<i class="small material-icons">picture_as_pdf</i>
					<div>MAPA 4 – Habitação Social</div>
					<span>9,66 Mb</span>
				</a></li>
			</ul>
			<Comments :attr="{id:12, context:'Mapas'}" v-if="estaConsulta.ativo == 1"></Comments>
		
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
				</table>
			</div>

			<div class="tableWrap">
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
					<h6>Notas</h6>
					<ol>
						<li>Será dispensado recuo de frente para lotes que apresentem passeio público com no mínimo 5m.</li>
						<li>Os recuos laterais e de fundo da edificação superior a 10m serão dispensados conforme disposições estabelecidas nos incisos II e III do artigo 66 da Lei nº 16.402 de 2016.</li>
					</ol>
				</div>
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

			<div class="tableWrap intervencoes">
				<div class="intervencoesTitulo">
					QUADRO 5 – Programa de Intervenções
					<a href="http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi-2/Quadro_5_Programa_Intervencoes_Expandido.pdf" download="Quadro 5">(baixar como .pdf)</a>
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
						<td rowspan="2"class="col2">Provisão de moradia <span class="cod">(a)</span></td>
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
					<h6>Notas</h6>
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
import Indice from '@/components/Indice';
import Comments from '@/components/Comments';
import CommentsLoader from '@/components/CommentsLoader';
import ProcessoPIU from '@/components/graf/ProcessoPIU';
import ConselhoGestor from '@/components/graf/ConselhoGestor';
import Galeria from '@/components/Galeria';
import Mapa from '@/components/Mapa';
import Minuta from '@/components/Minuta';
import Apoio from '@/components/Apoio'

	export default {
		name: 'Anhembi2',
		data() {
			return {
				titulosLimpo: [],
				comments_atrr: undefined,
				gallery_attrs: {
					width:992,  // largura das imagens
					height:557, // altura das imagens
					images:[
						{
							url:"http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/galeria/ANH_AcaoAbrangencia_01.jpg",
							state: true,
							title: '',
							icon: false,
							legenda: 'Perímetro de abrangência e principais usos existentes',
							id: 1
						},
						{
							url:"http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/galeria/ANH_AcaoAbrangencia_02.jpg", 
							state: false,
							title: '',
							icon: false,
							legenda: 'Diretrizes urbanísticas para qualificação do eixoda Av. Olavo Fontoura',
							id: 2
						},
						{
							url:"http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/galeria/ANH_AcaoAbrangencia_03.jpg", 
							state: false,
							title: '',
							icon: false,
							legenda: 'Diretrizes urbanísticas - Conexões viárias',
							id: 3
						},
						{
							url:"http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/galeria/ANH_AcaoAbrangencia_04.jpg", 
							state: false,
							title: '',
							icon: false,
							legenda: 'Diretrizes urbanísticas - Conexões especiais',
							id: 4
						},
						{
							url:"http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/galeria/ANH_AcaoAbrangencia_05.jpg", 
							state: false,
							title: '',
							icon: false,
							legenda: 'Diretrizes urbanísticas - Áreas verdes',
							id: 5
						},
						{
							url:"http://participe.gestaourbana.prefeitura.sp.gov.br/arquivos/piu-anhembi/img/galeria/ANH_AcaoAbrangencia_06.jpg", 
							state: false,
							title: '',
							icon: false,
							legenda: 'Diretrizes urbanísticas consolidadas e áreas passíveis de transformação',
							id: 6
						}
					]
				},
				mapa_attrs: {
					center: [ -5193050.487352, -2693402.011056 ],
					zoom: 13.5,
					layers:[
						{
							title: "Perímetro expandido", 
							path:'./static/kml/ANH_PerimetroExpandido.kml',
							stroke_color: 'rgba(237, 192, 192, 1)',
							fill_color: 'rgba(237, 192, 192, .4)',
							stroke_width: 1,
						},
						{
							title: "Perímetro de abrangência", 
							path:'./static/kml/ANH_PerimetroAbrangencia.kml',
							stroke_color: 'rgba(235, 87, 87, 1)',
							fill_color: 'rgba(235, 87, 87, .8)',
							stroke_width: 1,
						},
					]
				},
				consultas: false,
				estaConsulta: false
			}
		},
		computed: { commentsLoaded() { return this.$store.state.commentsLoaded } },
		components: {
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
		created() {
			this.$store.dispatch("fetchConsultas", { self: this });
			this.consultas = this.$store.state.consultas;
		},
		mounted() {
			this.listaTitulos();
			// document.addEventListener("mouseup", function(event) {
			// 	if (window.getSelection() != false) {
			// 		document.getElementById('commentCtx').style.transform = 'scale(1)';
			// 		document.getElementById('commentCtx').style.left = event.clientX - document.getElementById('commentCtx').offsetWidth/2 + 'px';
			// 		document.getElementById('commentCtx').style.top = event.clientY + window.scrollY - document.getElementById('commentCtx').offsetHeight/4 + 'px';
			// 	} else {
			// 		document.getElementById('commentCtx').style.transform = 'scale(0)';
			// 	};
			// }, false);
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
				this.estaConsulta = this.consultas.filter(esta => esta.id == this.$route.meta.id )[0];
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
		},
	};
</script>

<style lang="scss">
// @import '../../variables';

	*::selection, *::-moz-selection {
		background: #EB5757;
		color: #FFF;
	};

	div.Anhembi2 {
		font-size: 20px;
		padding-bottom: 4rem;
		z-index: 0;

		div.top {
			/*visibility: hidden;*/
			padding: 2rem;
			margin: 0 0 2rem 0;
			overflow: hidden;
			background-position: center center;
			background-size: cover;
			width: 100%;
			height: calc(100vh - 60px);
			position: relative;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: center;
			z-index: 1;
			
			& > div:first-child {
				padding: 1.2rem;
				background: #FFF;
				outline: 8px solid rgba(0, 0, 0, .24);
				-moz-outline-radius: 2px;

				& > div {
					margin: 0 0 8px 0;
					text-align: center;
					font-size: small;
					color: #777;
					font-weight: 400;
					
					&:last-child { margin-bottom: 0; };

					i {
						font-size: initial;
						vertical-align: middle;
					};
				};

				div#statusConsulta {
					font-size: 10px;
					text-transform: uppercase;
					color: #fff;
					font-weight: 500;
					border-radius: 2px;
					white-space: nowrap;
					margin: 0 .5rem;
				}
				div#statusConsulta::after{
					padding:.35rem .5rem;
				}
				div#statusConsulta.aberta::after{
					content: "Em consulta";
					background-color: #008015;
				}
				div#statusConsulta.fechada::after{
					content: "Consulta Encerrada";
					background-color: #EB5757;
				}
				& > h1 {
					font-size: calc(16px + 8vmin);
					line-height: calc(6vmin + 32px);
					margin: 1rem;
					text-align: center;
				};
			};

			.setaBaixo {
				position: absolute;
				bottom: 0;
				left: 0;
				display: flex;
				align-items: flex-end;
				justify-content: center;
				width: 100%;
				height: 25vh;
				background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
				transform: translateY(0);
				transition: all .4s;

				i {
					font-size: calc(24px + 16vmin);
					line-height: .8;
					color: #FFF;
					text-shadow: 0 2px 2px rgba(0, 0, 0, .24);
					transition: all .1s;
				};

				&:hover {
					cursor: pointer;
					transform: translateY(32px);

					i {
						transform: translateY(-24px);
						cursor: pointer;
					};
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
			margin: 2rem auto;
			max-width: 992px;
			background: #FFF;

			&.borda {
				padding-bottom: .4rem;
				border: 1px solid #BDBDBD;
				border-radius: 2px;
				overflow: hidden;
			};

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

			img {
				width: 100%;
				max-width: 992px;
			};

			&.coluna {
				padding: 2rem;
				margin: 0 auto;
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
			figure:not(.coluna) figcaption {
				padding-left: 2rem;
				padding-right: 2rem;
			};
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
			
			li {
				display: inline-flex;
				align-items: center;
				font-size: small;
				margin: 0;
				padding: 0 0 .8rem 0;
				margin-right: 2rem;

				div {
					border-style: solid;
					border-width: 1px;
					height: 1.2rem;
					min-width: 1.2rem;
					margin-right: .4rem;
					line-height: calc(1.2rem - 2px);
					text-align: center;

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
		div.Anhembi2 {
			font-size: 16px;

			div.titulo {
				& > div h1 { font-size: 40px; };
			};
		};
	};

	@media print {
		.Cabecalho { display: none; };
		.Rodape { display: none; };
		.Indice { display: none; };
		.Apoio { display: none; };
		.Comments { display: none; };

		div.Anhembi2 {
			font-size: 11pt;

			& > div.top {
				background: transparent;
				padding: 0;
				margin: 0;
				display: block;
				outline: 0;
				height: min-content;

				& > h1 { font-size: 4rem; };
				& > div.setaBaixo { display: none; };
			};

			p, figure, div.tableWrap {
				break-inside: avoid-page;
				page-break-inside: avoid;
			};

			ul.pdfBox { display: none; };
		};

		.ai2html {
			break-inside: avoid-page;
			page-break-inside: avoid;
		};
	};
</style>