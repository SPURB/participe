<template>
	<div class="VilaLeopoldina2" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/capa_vl_480w.jpg" :esta_consulta="estaConsulta" :social="social_assets">
			<template slot="titulo"><div>PIU Vila Leopoldina-Villa Lobos</div></template>
			<template slot="subtitulo"><div>Projeto de Lei do PIU Vila Leopoldina</div></template>
		</PageTop>

		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>

		<p id="print"><a :href="arquivosLeopoldina('PIU_VLVL_impressao.pdf')" title="Baixar versão para impressão" download><i class="icon-imprimir icon"><span>Imprimir</span></i> Baixar versão para impressão</a></p>

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<p>A presente Consulta Pública, promovida pela Prefeitura do Município de São Paulo por intermédio da Secretaria Municipal de Urbanismo e Licenciamento (SMUL) e da São Paulo Urbanismo (SP-URBANISMO), tem como objeto dar publicidade ao Projeto de Intervenção Urbana (PIU) Vila Leopoldina-Villa Lobos apresentando o <strong>conteúdo final do PIU e de seu Projeto de Lei</strong>, com vistas a colher contribuições da sociedade civil ao aperfeiçoamento e consolidação do projeto antes de seu encaminhamento ao Legislativo Municipal. A consulta tem por base a legislação em vigor e os instrumentos urbanísticos que permitem ações específicas no território da cidade.</p>
			<p>De acordo com o Art. 4º do <a href="https://gestaourbana.prefeitura.sp.gov.br/estruturacao-territorial/piu/decreto/">Decreto nº 56.901/2016</a>, o PIU é composto por <strong>Proposta de Ordenamento Urbanístico, Modelagem Econômica e Modelo de Gestão Democrática</strong>, trazendo as propostas urbanísticas de enfrentamento aos desafios identificados no Programa de Interesse Público do projeto, compatíveis com as possibilidades de financiamento e com a governança democrática de sua implantação. A presente consulta traz ainda uma <strong>Modelagem Jurídica</strong>, que enseja a estruturação legal do projeto no contexto do quadro normativo vigente, e que serviu como base para a formulação do <strong>Projeto de Lei</strong> de regulamentação do PIU Vila Leopoldina-Villa Lobos.</p>
			<p>Considerando que os elementos prévios ao desenvolvimento do projeto já foram objeto das consultas públicas anteriores, nesta consulta serão objeto de escrutínio público os elementos destacados no parágrafo anterior, correspondentes ao formato final do projeto, possibilitando a identificação das alterações e aperfeiçoamentos ocorridos desde o início de sua tramitação, a partir do processo participativo em curso. A estrutura do Caderno do PIU Vila Leopoldina-Villa Lobos, que reúne todo o conteúdo desenvolvido desde o início do processo de tramitação do PIU VL foi mantida, para que seja possível aos interessados uma leitura e compreensão global do projeto, desde seus aspectos motivadores e da percepção das carências e potencialidades da região em que está inserido, até sua configuração atual.</p>
		</section>

		<section id="intro">
			<h2 class="titulo" indent="1">PROJETO DE LEI Nº ...</h2>
			<p>Estabelece objetivos, diretrizes, estratégias e mecanismos para a implantação do Projeto de Intervenção Urbana Vila Leopoldina-Villa Lobos e cria a Área de Intervenção Urbana correspondente.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">CAPÍTULO I<span>: DISPOSIÇÕES GERAIS</span></h2>
			<h2 class="subtitulo">DISPOSIÇÕES GERAIS</h2>

			<section id="conceito">
				<h3 class="titulo" indent="2">Seção I<span>: Do Conceito</span></h3>
				<h3 class="subtitulo">Do Conceito</h3>

				<CommentsContext :id="1" :context="'Art.1º'"><p><b>Art. 1º</b> Fica aprovado o Projeto de Intervenção Urbana Vila Leopoldina-Villa Lobos – PIU-VL, compreendendo um conjunto integrado de intervenções e medidas promovidas pela Prefeitura Municipal de São Paulo, por intermédio da empresa SP-Urbanismo e por terceiros mediante coordenação do Poder Público, para articular o ordenamento e a reestruturação urbana na área de abrangência territorial definida nesta Lei.</p></CommentsContext>

				<CommentsContext :id="2" :context="'§ 1º'"><p><b>§ 1º</b> O PIU-VL é resultado dos estudos de viabilidade urbanística, econômica e jurídica desenvolvidos no âmbito do processo administrativo n° 2016-0.193.579-6, cabendo a esta Lei disciplinar a regulação jurídico-urbanística necessária à sua implantação.</p></CommentsContext>

				<CommentsContext :id="3" :context="'§ 2º'"><p><b>§ 2º</b> Integram esta Lei os anexos abaixo relacionados:</p>
				<ol>
					<li>Mapas do PIU-VL, compreendendo:
						<ol>
							<li>Mapa Específico do PIU-VL, incluindo o Perímetro de Adesão da Área Intervenção Urbana (AIU-VL), o Perímetro Expandido da AIU-VL e a demarcação da área sujeita a Projeto Específico de Parcelamento do Solo (“Anexo 1”);</li>
							<li>Mapa Indicativo dos melhoramentos viários associados projeto referencial de parcelamento do solo integrado (“Anexo 2”);</li>
						</ol>
					</li>
					<li>Quadros dos Parâmetros Urbanísticos:
						<ol>
							<li>Quadro dos Parâmetros Urbanísticos aplicados no Perímetro de Adesão da AIU-VL (“Anexo 3”);</li>
							<li>Quadro dos Percentuais Mínimos de Destinação de Área Pública aplicados à Área de Abrangência do Projeto Específico de Parcelamento do Solo (“Anexo 4”);</li>
						</ol>
					</li>
					<li>Caderno Técnico (“Anexo 5”), com elementos de informação para interpretação dos dispositivos do PIU-VL, contendo no mínimo:
						<ol>
							<li>Modelo Econômico de suporte à avaliação do Potencial Construtivo Adicional da AIU-VL;</li>
							<li>Projeto Urbanístico Referencial e Diretrizes Gerais para o Projeto Específico de Parcelamento do Solo;</li>
							<li>Cadastro para atendimento habitacional de responsabilidade da SEHAB.</li>
						</ol>
					</li>
					<li>Detalhamento do Programa de Intervenções da AIU-VL, contendo extrato das intervenções previstas especialmente no que se refere à:
						<ol>
							<li>Quadro com definição dos elementos constantes da Etapa I e Etapa II, incluindo-se prazos estimados para realização das intervenções (“Anexo 6”);</li>
							<li>Especificações Técnicas Gerais e Padrões de Qualidade das Habitações de Interesse Social – HIS, equipamentos e instalações públicas e serviços de gerenciamento social (“Anexo 7”).</li>
						</ol>
					</li>
				</ol>
				</CommentsContext>
				<CommentsContext :id="4" :context="'§ 3º'"><p><b>§ 3º</b> Os mapas integrantes desta Lei correspondem aos arquivos digitais da Secretaria Municipal de Urbanismo e Licenciamento - SMUL, assinados eletronicamente e constantes do processo administrativo n° 2016-0.193.579-6, disponibilizados pelo Executivo no Portal da Prefeitura do Município de São Paulo na Internet.</p></CommentsContext>
			</section>

			<section>
				<h3 class="titulo" indent="2">Seção II<span>: Da Abrangência Territorial</span></h3>
				<h3 class="subtitulo">Da Abrangência Territorial</h3>
				<CommentsContext :id="5" :context="'Secao II - § 2º'"><p><b>Art. 2º</b> Fica criada a Área de Intervenção Urbana Vila Leopoldina-Villa Lobos – AIU-VL, contida no subsetor Arco Pinheiros da Macroárea de Estruturação Metropolitana, destinada a implantação do PIU-VL.</p></CommentsContext>
				<CommentsContext :id="6" :context="'Secao II - Parágrafo único'"><p><b>Parágrafo único.</b> O PIU-VL abrange as áreas do Perímetro de Adesão e do Perímetro Expandido, assinalados no Anexo 1, e assim conceituados:</p>
				<p><b>I.</b> Perímetro de Adesão: delimita o território no qual incidirá o regramento urbanístico específico da AIU-VL trazido nesta Lei;</p>
				<p><b>II.</b> Perímetro Expandido: composto pelas demais áreas do PIU-VL, não contidas no Perímetro de Adesão, no qual poderão ser realizados investimentos para a implantação do Programa de Intervenções da AIU-VL.</p>
				<p><b>III.</b> Perímetro do Projeto Específico de Parcelamento de Solo: território da AIU-VL no qual poderá ser realizado o Projeto Específico de Parcelamento de Solo, nos termos do Anexo 1 e demais determinações específicas estabelecidas por esta Lei.</p></CommentsContext>
			</section>

			<section>
				<h3 class="titulo" indent="2">Seção III<span>: Das Definições</span></h3>
				<h3 class="subtitulo">Das Definições</h3>
				<CommentsContext :id="8" :context="'Secao III - Art. 3º - Das Definições'"><p><b>Art. 3º</b> Para fins do disposto nesta Lei consideram-se as seguintes definições:</p>
				<p><b>I - Potencial Construtivo Adicional:</b> é a quantidade de área construída computável edificável acima do coeficiente de aproveitamento básico no Perímetro de Adesão da AIU-VL, obtida a partir dos cálculos constantes do Anexo 5, adquirido e distribuído mediante os procedimentos descritos nesta Lei;</p>
				<p><b>II - Programa de Intervenções:</b> conjunto de intervenções sociais, ambientais e físico-territoriais, a serem realizadas de forma faseada e integrada, em caráter privado, público, ou público-privado, indicadas nos Anexos 6 e 7, necessárias à obtenção das melhorias urbanísticas, socioeconômicas e ambientais do PIU-VL, mediante processos com a participação da sociedade civil; </p>
				<p><b>III - Termo de Cooperação:</b> instrumento de ajuste a ser firmado entre o Poder Público e os adquirentes do Potencial Construtivo Adicional da AIU-VL, que assumem as prestações do Programa de Intervenções em contrapartida à aquisição do potencial construtivo adicional do Perímetro de Adesão, especialmente a provisão habitacional demandada pelo PIU-VL;</p>
				<p><b>IV - Projeto Específico de Parcelamento de Solo:</b> projeto de parcelamento de solo dos imóveis incluídos na área de abrangência demarcada no Anexo 1, sem necessidade de unificação dos mesmos, podendo ser realizado de modo integral ou faseado, e que autoriza a destinação das áreas públicas havidas em função do parcelamento do solo considerando a totalidade do apontado território, nos termos e condições previstas nesta Lei, observados os Anexos 4 e 5;</p>
				<p><b>V – Opção de Venda:</b> Cláusula obrigatória do Termo de Cooperação referente a Primeira Hasta Pública de Potencial Construtivo Adicional da AIU-VL, que autoriza o Poder Público a exercer o direito de alienar ao vencedor do apontado certame o restante do Potencial Construtivo Adicional da AIU-VL, nos termos especificados nesta Lei.</p></CommentsContext>
			</section>

			<section>
				<h3 class="titulo" indent="2">Seção IV<span>: Dos Objetivos Específicos, Diretrizes e Estratégias de Transformação Urbanística</span></h3>
				<h3 class="subtitulo">Dos Objetivos Específicos, Diretrizes e Estratégias de Transformação Urbanística</h3>
				<CommentsContext :id="9" :context="'Secao IV - Art. 4º'"><p><b>Art. 4º</b> O PIU-VL considera os objetivos a serem alcançados no Setor Orla Ferroviária e Fluvial da Macroárea de Estruturação Metropolitana - MEM, nos termos do art. 12, § 1º da Lei n. 16.050/2014 – PDE, e tem como objetivos específicos:</p></CommentsContext>
				<CommentsContext :id="10" :context="'Secao IV - Art. 4º - I'"><p><b>I</b> - Viabilizar a provisão de Habitação de Interesse Social - HIS com reassentamento integral para os moradores da Favela do Nove, da Favela da Linha e das ocupações de áreas condominiais do Conjunto Habitacional Cingapura Madeirite, promovendo a permanência desses moradores próximos de onde já residem;</p></CommentsContext>
				<CommentsContext :id="11" :context="'Secao IV - Art. 4º - II'"><p><b>II</b> - Desenvolver Empreendimentos de Habitação de Interesse Social - EHIS com uso misto, promovendo-se a ocupação do espaço térreo com usos de interesse coletivo, como equipamentos públicos, comércio e serviços;</p></CommentsContext>
				<CommentsContext :id="12" :context="'Secao IV - Art. 4º - III'"><p><b>III</b> - Priorizar a implantação de moradias de interesse social, com qualificação do espaço urbano correspondente, promovendo sua inserção urbanística adequada e atendimento das necessidades básicas da população moradora, nos moldes do Programa de Intervenções da AIU-VL;</p></CommentsContext>
				<CommentsContext :id="13" :context="'Secao IV - Art. 4º - IV'"><p><b>IV</b> - Construir edificações destinadas a equipamentos públicos municipais, especialmente aqueles ligados às redes de saúde, educação, esporte, cultura e lazer, assistência social e desenvolvimento econômico, de forma a garantir a presença do Poder Público municipal junto dos EHIS;</p></CommentsContext>
				<CommentsContext :id="14" :context="'Secao IV - Art. 4º - V'"><p><b>V</b> - Promover a melhoria das condições de habitabilidade do conjunto habitacional Cingapura Madeirite e a restituição dos espaços públicos do ramal ferroviário e das Ruas Japiaçu e Prof. Ariovaldo Silva, mediante ações e intervenções necessárias a tanto;</p></CommentsContext>
				<CommentsContext :id="15" :context="'Secao IV - Art. 4º - VI'"><p><b>VI</b> - Requalificar áreas subutilizadas dos imóveis antigamente dedicados à ocupação industrial, com densidades compatíveis com as diretrizes de desenvolvimento da MEM e usos mistos;</p></CommentsContext>
				<CommentsContext :id="16" :context="'Secao IV - Art. 4º - VII'"><p><b>VII</b> - Promover o desenvolvimento urbano proporcionando a ocupação urbana plural, com alta densidade construtiva e habitacional, diminuindo a demanda por viagens e por transporte, com o estímulo à produção de habitação para distintos segmentos, combinada com usos não residenciais de interesse público e que promovam a urbanidade; </p></CommentsContext>
				<CommentsContext :id="17" :context="'Secao IV - Art. 4º - VIII'"><p><b>VIII</b> - Viabilizar o parcelamento do solo nos termos definidos nesta Lei, com o mais adequado aproveitamento para abertura de novas ruas, destinação de áreas verdes e instalação de equipamentos institucionais;</p></CommentsContext>
				<CommentsContext :id="18" :context="'Secao IV - Art. 4º - IX'"><p><b>IX</b> – Possibilitar a utilização do Potencial Construtivo Adicional aplicável ao território do Perímetro de Adesão como referência de aproveitamento dos lotes resultantes de seu processo de transformação;</p></CommentsContext>
				<CommentsContext :id="19" :context="'Secao IV - Art. 4º - X'"><p><b>X</b> - Identificar as áreas contaminadas existentes e avaliar as medidas necessárias para sua reintegração às dinâmicas urbanas locais, bem como as estratégias para utilização no atendimento das demais diretrizes estabelecidas nesta Lei;</p></CommentsContext>
				<CommentsContext :id="20" :context="'Secao IV - Art. 4º - XI'"><p><b>XI</b> – Melhorar e organizar a rede de espaços públicos e a infraestrutura urbana, em especial a de drenagem, ampliando a oferta de áreas verdes e de lazer e sua conectividade com as redes de transportes e de equipamentos públicos;</p></CommentsContext>
				<CommentsContext :id="21" :context="'Secao IV - Art. 4º - XI'"><p><b>XII</b> - Proporcionar a valorização urbanística do parque fluvial do Rio Pinheiros, em desenvolvimento ao longo das suas margens, especialmente em função da sua conexão com a Av. Dr. Gastão Vidigal;</p></CommentsContext>
				<CommentsContext :id="22" :context="'Secao IV - Art. 4º - XIII'"><p><b>XIII</b> - Implantar arborização viária e aumentar as áreas verdes permeáveis com fins de mitigação das ilhas de calor; </p></CommentsContext>
				<CommentsContext :id="23" :context="'Secao IV - Art. 4º - XIV'"><p><b>XIV</b> - Desenvolver ações de assistência e desenvolvimento social para atender a população em situação de rua e de dependentes químicos e buscar a sua inclusão no processo de desenvolvimento urbano proposto;</p></CommentsContext>
				<CommentsContext :id="24" :context="'Secao IV - Art. 4º - XV'"><p><b>XV</b> - Desenvolver parcerias de educação profissional entre os agentes econômicos da região, principalmente os da economia criativa, garantindo formação técnica, reciclagem e formalização profissional da população vulnerável;</p></CommentsContext>
				<CommentsContext :id="25" :context="'Secao IV - Art. 4º - XVI'"><p><b>XVI</b> – Implantar infraestrutura para melhoria de segurança ao pedestre;</p></CommentsContext>
				<CommentsContext :id="26" :context="'Secao IV - Art. 4º - XVII'"><p><b>XVII</b> – Implantar a rede cicloviária no Perímetro de Adesão AIU-VL, para futura conexão ao sistema de transporte, aos parques e equipamentos públicos.</p></CommentsContext>
				<CommentsContext :id="27" :context="'Secao IV - Art. 5º'"><p><b>Art. 5º</b> O PIU-VL tem como diretrizes: </p></CommentsContext>
				<CommentsContext :id="28" :context="'Secao IV - Art. 5º - I'"><p><b>I</b> – A promoção de transformações estruturais orientadas para o maior aproveitamento da terra urbana, com o aumento nas densidades construtiva e demográfica;</p></CommentsContext>
				<CommentsContext :id="29" :context="'Secao IV - Art. 5º - II'"><p><b>II</b> – A recuperação da qualidade dos sistemas ambientais existentes;</p></CommentsContext>
				<CommentsContext :id="30" :context="'Secao IV - Art. 5º - III'"><p><b>III</b> – A manutenção da população moradora constante do cadastramento conduzido pela Secretaria Municipal de Habitação – SEHAB, identificada no Anexo 5, no perímetro do PIU-VL, com oferta adequada de serviços, equipamentos e infraestruturas urbanas;</p></CommentsContext>
				<CommentsContext :id="31" :context="'Secao IV - Art. 5º - IV'"><p><b>IV</b> - O estabelecimento de regulação urbanística que possibilite converter parte da valorização imobiliária decorrente de investimentos privados autorizados e orientados por esta Lei em melhorias e benefícios de interesse público;</p></CommentsContext>
				<CommentsContext :id="32" :context="'Secao IV - Art. 5º - V'"><p><b>V</b> - Redefinição dos parâmetros de uso e ocupação do solo de forma associada ao processo de qualificação dos espaços públicos e da paisagem, apoiada na implantação de infraestrutura urbana;</p></CommentsContext>
				<CommentsContext :id="33" :context="'Secao IV - Art. 5º - VI'"><p><b>VI</b> – Desenvolvimento de EHIS integrados ao tecido urbano e social vizinhos, promovendo-se a diversidade de usos e multifuncionalidade;</p></CommentsContext>
				<CommentsContext :id="34" :context="'Secao IV - Art. 5º - VII'"><p><b>VII</b> - Possibilitar a mudança de usos predominantemente industriais para usos compatíveis ao zoneamento atual, sem necessidade de demolição das edificações existentes. </p></CommentsContext>
				<CommentsContext :id="35" :context="'Secao IV - Art. 6º'"><p><b>Art. 6º</b> A implantação do PIU-VL observará, no mínimo, as seguintes estratégias de transformação urbanística:</p></CommentsContext>
				<CommentsContext :id="36" :context="'Secao IV - Art. 6º - I'"><p><b>I</b> - Destinação dos recursos obtidos como contrapartida à alienação do Potencial Construtivo Adicional para a implantação do Programa de Intervenções da AIU-VL, ou sua redistribuição a conta específica de implantação do Projeto de Intervenção Urbana do Arco Pinheiros – PIU Arco Pinheiros;</p></CommentsContext>
				<CommentsContext :id="37" :context="'Secao IV - Art. 6º - II'"><p><b>II</b> - Celebração de Termos de Cooperação entre o Poder Público e os adquirentes do Potencial Construtivo Adicional mediante Hasta Pública por intermédio da Opção de Venda prevista nesta Lei, de modo a fixar as condições de implantação do Programa de Intervenções da AIU-VL referidas em cada Etapa deste;</p></CommentsContext>
				<CommentsContext :id="38" :context="'Secao IV - Art. 6º - III'"><p><b>III</b> – Possibilidade de reunificação de matrículas imobiliárias, de parcelamento e  reparcelamento do solo nos terrenos destinados a Projeto Específico de Parcelamento de Solo, assinalados no Anexo 1, com abertura de novos espaços públicos, destinação de áreas verdes e instalação de equipamentos institucionais nos termos do Anexo 4;</p></CommentsContext>
				<CommentsContext :id="39" :context="'Secao IV - Art. 6º - IV'"><p><b>IV</b> – Produção de Empreendimentos de Habitação de Interesse Social - EHIS para atendimento da demanda por moradia popular do PIU-VL, associada à implantação de equipamentos e serviços públicos nesses empreendimentos;</p></CommentsContext>
				<CommentsContext :id="40" :context="'Secao IV - Art. 6º - V'"><p><b>V</b> – Promoção de ações de desenvolvimento social para a população em situação de vulnerabilidade social, especialmente da população em situação de rua e de dependentes químicos;</p></CommentsContext>
				<CommentsContext :id="41" :context="'Secao IV - Art. 6º - VI'"><p><b>VI</b> – Estabelecimento do estoque de Potencial Construtivo Adicional da AIU-VL a partir da análise global das possibilidades de adensamento construtivo do território, em valores proporcionais à infraestrutura urbana e metropolitana, nos termos do Anexo 5;</p></CommentsContext>
				<CommentsContext :id="42" :context="'Secao IV - Art. 6º - VII'"><p><b>VII</b> – Disponibilização, por parte do Poder Público, dos terrenos necessários à implantação dos EHIS e equipamentos públicos previstos no Programa de Intervenções da AIU-VL.</p></CommentsContext>
			</section>
		</section>

		<section>
			<h2 class="titulo" indent="1">CAPÍTULO II<span>: REGRAS DE USO E OCUPAÇÃO DO SOLO</span></h2>
			<h2 class="subtitulo">REGRAS DE USO E OCUPAÇÃO DO SOLO</h2>

			<section>
				<h3 class="titulo" indent="2">Seção I<span>: Dos Parâmetros Urbanísticos Gerais</span></h3>
				<h3 class="subtitulo">Dos Parâmetros Urbanísticos Gerais</h3>

				<CommentsContext :id="43" :context="'Cap II - Seção I - Art. 7º'"><p><b>Art. 7º.</b> Aplicam-se no Perímetro de Adesão da AIU-VL os parâmetros urbanísticos definidos nesta Lei e, em caráter suplementar, as disposições da Lei 16.402, de 22 de março de 2016 – LPUOS referentes à Zona de Estruturação Urbana - ZEU.</p></CommentsContext>
				<CommentsContext :id="44" :context="'Cap II - Seção I - Art. 8º'"><p><b>Art. 8º.</b> O Potencial Construtivo Adicional do Perímetro de Adesão da AIU-VL é de 680.000 m² (seiscentos e oitenta mil metros quadrados), sendo distribuído nos lotes edificáveis da AIU-VL nos termos previstos nesta Lei.</p></CommentsContext>
				<CommentsContext :id="45" :context="'Cap II - Seção I - Parágrafo único'"><p><b>Parágrafo único.</b> Nos termos do art. 116, § 3º do PDE, nos lotes integrantes do Perímetro de Adesão da AIU-VL o coeficiente de aproveitamento máximo será 6,0 (seis).</p></CommentsContext>
				<CommentsContext :id="46" :context="'Cap II - Seção I - Art. 9º'"><p><b>Art. 9º.</b> Aos lotes integrantes do Perímetro de Adesão da AIU-VL não se aplica a disciplina do art. 44 da LPUOS na hipótese de reforma, requalificação ou mudança de uso, de modo temporário ou definitivo, das edificações existentes.</p></CommentsContext>
				<CommentsContext :id="47" :context="'Cap II - Seção I - Art. 10º'"><p><b>Art. 10.</b> Nos terrenos definidos como área institucional poderão ser implantados Empreendimentos de Habitação de Interesse Social - EHIS, sendo permitidos nestes empreendimentos usos e atividades destinados a proporcionar suporte à vida comunitária, tais como serviços e comércio. </p></CommentsContext>
				<CommentsContext :id="48" :context="'Cap II - Seção I - Art. 11º'"><p><b>Art. 11.</b> Nos termos do art. 137 da LPUOS, o processo de licenciamento de parcelamento do solo ou de licenciamento edilício em terrenos contaminados ou com suspeita de contaminação por material nocivo ao meio ambiente ou à saúde pública no Perímetro da do PIU-VL poderá ser iniciado antes da sua reabilitação, sendo, contudo, obstada a emissão de Alvará de Execução do respectivo parcelamento ou edificação até a sua recuperação.</p></CommentsContext>
			</section>
		<section>
				<h3 class="titulo" indent="2">Seção II<span>: Do Projeto Específico de Parcelamento do Solo</span></h3>
				<h3 class="subtitulo">Do Projeto Específico de Parcelamento do Solo</h3>
				<CommentsContext :id="49" :context="'Cap II - Seção II - Art. 12.'"><p><b>Art. 12.</b> O Projeto Específico de Parcelamento de Solo previsto nesta Lei poderá ser implantado nos lotes e glebas demarcados no Anexo 1.</p></CommentsContext>

				<CommentsContext :id="50" :context="'Cap II - Seção II - Parágrafo único'"><p><b>Parágrafo único.</b> O Projeto Específico de Parcelamento de Solo observará o disposto no Anexo 4, e será detalhado pelos interessados a partir do Projeto Urbanístico Referencial previsto no Anexo 5 quando de seu pedido de licenciamento junto aos órgãos públicos.</p></CommentsContext>
				<CommentsContext :id="51" :context="'Cap II - Seção II - Art. 13'"><p><b>Art. 13.</b> O Projeto Específico de Parcelamento do Solo deverá ser solicitado pelos proprietários dos terrenos abrangidos no perímetro descrito no Anexo 1 diretamente para toda área ou a partir de pedido de unificação de projetos de parcelamento já em tramitação junto ao Poder Público municipal, observando-se, no mínimo, às seguintes disposições:</p></CommentsContext>
				<CommentsContext :id="52" :context="'Cap II - Seção II - Art. I'"><p><b>I</b> - O requerimento será realizado mediante solicitação de expedição de Certidão de Diretrizes Urbanísticas para o parcelamento da área, cabendo à SP-Urbanismo a avaliação prévia quanto à sua adequação ao PIU-VL, especialmente nos seguintes aspectos: </p></CommentsContext>
				<CommentsContext :id="53" :context="'Cap II - Seção II - Art. I(a)'"><p>(a) atendimento às diretrizes de configuração das áreas verdes, áreas institucionais e do sistema viário, expressas no Anexo 5; </p></CommentsContext>
				<CommentsContext :id="54" :context="'Cap II - Seção II - Art. I(b)'"><p>(b) integração e articulação com o entorno, especialmente com o sistema viário existente e proposto do PIU Arco Pinheiros; </p></CommentsContext>
				<CommentsContext :id="55" :context="'Cap II - Seção II - Art. I(c)'"><p>(c) demais diretrizes urbanísticas trazidas nesta Lei.</p></CommentsContext>
				<CommentsContext :id="56" :context="'Cap II - Seção II - Art. II'"><p><b>II</b> - O requerimento previsto no inciso anterior, após aprovação pela SP-Urbanismo, será analisado pela Subcomissão de Análise Integrada de Empreendimentos de Parcelamento do Solo – SAEPS, da Secretaria Municipal de Urbanismo e Licenciamento - SMUL que decidirá sobre o solicitado considerando as disposições desta Lei, expedindo-se a competente Certidão de Diretrizes Urbanísticas, que conterá, no mínimo:</p></CommentsContext>
				<CommentsContext :id="57" :context="'Cap II - Seção II - Art. II(a)'"><p>a.	as diretrizes de licenciamento ambiental, incluindo disposições sobre saneamento básico, destinação de águas pluviais e tratamento de áreas contaminadas, nos termos previstos nesta Lei;</p></CommentsContext>
				<CommentsContext :id="58" :context="'Cap II - Seção II - Art. II(b)'"><p>b.	o licenciamento urbanístico preliminar, com definição das áreas destinadas ao Poder Público em função do parcelamento do solo, nos termos dos Anexos 4 e 5.</p></CommentsContext>
				<CommentsContext :id="59" :context="'Cap II - Seção II - Art. III'"><p><b>III</b> - O Projeto Específico de Parcelamento de Solo será executado integralmente pelos interessados, não cabendo ao Poder Público atos de desapropriação de imóveis para fins de sua implantação;</p></CommentsContext>
				<CommentsContext :id="60" :context="'Cap II - Seção II - Art. IV'"><p><b>IV</b> - A provisão habitacional para a população de baixa renda moradora no Perímetro do Projeto Específico de Parcelamento de Solo será realizada em seu próprio perímetro, devendo as áreas institucionais resultantes da destinação de áreas públicas em função da implantação do Projeto Específico de Parcelamento de Solo receber 400 unidades de HIS, edificadas como contrapartida à aquisição do Potencial Construtivo Adicional mediante leilão, nos termos desta Lei;</p></CommentsContext>
				<CommentsContext :id="61" :context="'Cap II - Seção II - Art. V'"><p><b>V</b> - As áreas a serem destinadas deverão ser consideradas globalmente, a partir do quadro de áreas previsto no Anexo 4, independentemente da previsão ordinária de destinação trazida na LPUOS para o parcelamento dos lotes e glebas integrantes de sua área de abrangência, facultada a destinação das áreas institucionais integralmente em uma das glebas parceladas, nos termos da proposta de Projeto Urbanístico Referencial constante no Anexo 5;</p></CommentsContext>
				<CommentsContext :id="62" :context="'Cap II - Seção II - Art. VI'"><p><b>VI</b> – Uma vez emitida a Certidão de Diretrizes Urbanísticas de parcelamento do solo, poderá haver a destinação imediata das áreas públicas institucionais e implantação dos EHIS nelas constantes, nos termos da proposta de Projeto Urbanístico Referencial constante no Anexo 5; </p></CommentsContext>
				<CommentsContext :id="63" :context="'Cap II - Seção II - Art. VII'"><p><b>VII</b> - Os terrenos resultantes do Projeto Específico de Parcelamento de Solo poderão ser reparcelados ou reloteados, destinando-se, neste caso, as áreas públicas ordinariamente exigidas pela legislação de regência.</p></CommentsContext>
			</section>
		</section>

		<section>
			<h2 class="titulo" indent="1">CAPÍTULO III<span>: DO PROGRAMA DE INTERVENÇÕES</span></h2>
			<h2 class="subtitulo">DO PROGRAMA DE INTERVENÇÕES</h2>
			<CommentsContext :id="64" :context="'Cap III - Art.14'"><p><b>Art. 14.</b> O Programa de Intervenções da AIU-VL compreende: </p></CommentsContext>
			<CommentsContext :id="65" :context="'Cap III - Art.14 - I'"><p><b>I</b> - A execução das obras de construção de EHIS destinadas ao reassentamento dos moradores da Favela do Nove e das ocupações de áreas condominiais do conjunto habitacional Cingapura-Madeirite no Perímetro de Adesão da AIU-VL, incluindo-se, em tais empreendimentos, usos e atividades conexas de suporte à vida comunitária, tais como serviços e comércio;</p></CommentsContext>
			<CommentsContext :id="66" :context="'Cap III - Art.14 - II'"><p><b>II</b> - A produção de EHIS nas ZEIS do Perímetro Expandido do PIU-VL, destinadas ao reassentamento dos moradores da Favela da Linha incluindo-se, em tais empreendimentos, usos e atividades conexas de suporte à vida comunitária, tais como serviços e comércio;</p></CommentsContext>
			<CommentsContext :id="67" :context="'Cap III - Art.14 - III'"><p><b>III</b> – A promoção, após o reassentamento da população moradora de tais espaços:</p></CommentsContext>
			<CommentsContext :id="68" :context="'Cap III - Art.14 - III(a)'"><p>a) da restituição das áreas condominiais do conjunto habitacional Cingapura-Madeirite, providenciando-se a sua desobstrução física para fins de plena fruição dos condôminos;</p></CommentsContext>
			<CommentsContext :id="69" :context="'Cap III - Art.14 - III(b)'"><p>b) da desobstrução física e a reafetação das Ruas Japiaçu e Prof. Ariovaldo Silva e implantação de infraestrutura básica correspondente ao uso comum do povo;</p></CommentsContext>
			<CommentsContext :id="70" :context="'Cap III - Art.14 - III(c)'"><p>c) da desobstrução física do ramal ferroviário desativado, onde hoje situa-se a Favela da Linha, e implantação de sistema viário definido no Anexo 2;</p></CommentsContext>
			<CommentsContext :id="71" :context="'Cap III - Art.14 - IV'"><p><b>IV</b> – A implantação do Projeto Específico de Parcelamento de Solo, nos termos desta Lei, incluindo o reparcelamento e requalificação da área, a destinação das áreas públicas e a construção dos Empreendimentos de Habitação de Interesse Social e Equipamentos Públicos;</p></CommentsContext>
			<CommentsContext :id="72" :context="'Cap III - Art.14 - V'"><p><b>V</b> - A requalificação e reforma do sistema viário, de drenagem e das áreas verdes localizadas no Perímetro de Abrangência da AIU-VL e preexistentes à implantação do Projeto Específico de Parcelamento de Solo;</p></CommentsContext>
			<CommentsContext :id="73" :context="'Cap III - Art.14 - VI'"><p><b>VI</b> – Implantação de equipamentos públicos nas áreas institucionais. </p></CommentsContext>
			<CommentsContext :id="74" :context="'Cap III - Art.14 - § 1º'"><p><b>§ 1º.</b> A provisão habitacional de interesse social prevista nos incisos I e II deste artigo será realizada atendendo-se ao cadastro conduzido pela Secretaria Municipal de Habitação - SEHAB, nos termos do Anexo 5;</p></CommentsContext>
			<CommentsContext :id="75" :context="'Cap III - Art.14 - § 2º'"><p><b>§ 2º.</b> Nas edificações destinadas a equipamentos públicos sociais, construídas nas áreas institucionais e originadas do parcelamento oriundo da realização do Projeto Específico de Parcelamento de Solo, poderão ser implantados EHIS, inclusive mediante instituição de condomínio, aplicação do direito de laje, previsto na Lei Federal n. 10.406/2002 – Código Civil, ou outros instrumentos jurídicos previstos na legislação.</p></CommentsContext>
		</section>

		<section>
			<h2 class="titulo" indent="1">CAPÍTULO IV<span>: DA ALIENAÇÃO DE POTENCIAL CONSTRUTIVO ADICIONAL E DA CONTA SEGREGADA DO FUNDURB</span></h2>
			<h2 class="subtitulo">DA ALIENAÇÃO DE POTENCIAL CONSTRUTIVO ADICIONAL E DA CONTA SEGREGADA DO FUNDURB</h2>

			<section>
				<h3 class="titulo" indent="2">Seção I<span>: DA ALIENAÇÃO DE POTENCIAL CONSTRUTIVO ADICIONAL</span></h3>
				<h3 class="subtitulo">DA ALIENAÇÃO DE POTENCIAL CONSTRUTIVO ADICIONAL</h3>
				<CommentsContext :id="76" :context="'Cap IV - Art.15'"><p><b>Art. 15.</b> Fica o Poder Público autorizado a alienar o Potencial Construtivo Adicional do Perímetro de Adesão da AIU-VL, na conformidade dos critérios e condições estabelecidos nesta Lei.</p></CommentsContext>
				<CommentsContext :id="77" :context="'Cap IV - Parágrafo único.'"><p><b>Parágrafo único.</b> Para fins de implantação do PIU-VL, e nos termos do art. 145, §3º e do art. 147 do PDE, o estoque de Potencial Construtivo Adicional do Perímetro de Adesão da AIU-VL totaliza 680.000 m² (seiscentos e oitenta mil metros quadrados) considerando-se, para a obtenção destes valores, todo o território do Perímetro de Adesão, conforme Anexo 1.</p></CommentsContext>
				<CommentsContext :id="78" :context="'Cap IV - Art.16'"><p><b>Art. 16.</b> A comercialização do Potencial Construtivo Adicional do Perímetro de Adesão da AIU-VL será realizada, alternativamente:</p></CommentsContext>
				<CommentsContext :id="79" :context="'Cap IV - Art.16'"><p><b>I.</b> por intermédio de leilão, nos termos especificados nesta Lei;</p></CommentsContext>
				<CommentsContext :id="80" :context="'Cap IV - Art.16'"><p><b>II.</b> mediante alienação ordinária, nos moldes dos arts. 117 e 145, § 5º do PDE, com as alterações trazidas nesta Lei.</p></CommentsContext>
				<CommentsContext :id="81" :context="'Cap IV - Art.16'"><p><b>§ 1º.</b> A contrapartida obtida pela alienação do Potencial Construtivo Adicional da AIU-VL será utilizada para a implantação Etapas I e II do seu Programa de Intervenções, previstas nos Anexos 6 e 7, sendo disponibilizados eventuais excedentes financeiros ao FUNDURB, na hipótese de total implantação dos elementos do apontado programa;</p></CommentsContext>
				<CommentsContext :id="82" :context="'Cap IV - Art.16'"><p><b>§ 2º.</b> Eventuais correções nos valores devidos como contrapartida previstos no parágrafo anterior, bem como inclusões de elementos indispensáveis e urgentes no Programa de Intervenções previstos nesta Lei deverá considerar o modelo econômico previsto em seu Anexo 5.</p></CommentsContext>
				<CommentsContext :id="83" :context="'Cap IV - Art.17'"><p><b>Art. 17.</b> O cumprimento da cota de solidariedade para os empreendimentos desenvolvidos no Perímetro de Adesão da AIU-VL ocorrerá nos termos previstos nos artigos 111 e 112 do PDE, sendo os recursos financeiros eventualmente arrecadados destinados ao Fundo de Desenvolvimento Urbano – FUNDURB, nos termos do § 2º, inc. III, do mesmo artigo.</p></CommentsContext>
				<CommentsContext :id="84" :context="'Cap IV - Art.18'"><p><b>Art. 18.</b> O Potencial Construtivo Adicional do estoque da AIU-VL será utilizável no licenciamento de edificações a razão de 1 m² (um metro quadrado) de área construída computável a cada 1 m² (um metro quadrado) de potencial construtivo adicional utilizado.</p></CommentsContext>
				<section>
					<h4 class="titulo" indent="3">Subseção I<span>: Do Termo de Cooperação</span></h4>
					<h4 class="subtitulo">Do Termo de Cooperação</h4>
					<CommentsContext :id="85" :context="'Cap IV - Art.19'"><p><b>Art. 19.</b> A disciplina da contraprestação pela aquisição do Potencial Construtivo Adicional mediante leilão constará de minuta do Termo de Cooperação, anexa ao instrumento convocatório, e que terá como conteúdo mínimo:</p></CommentsContext>
					<CommentsContext :id="86" :context="'Cap IV - Art.19'"><p><b>I</b> - descrição dos elementos do Programa de Intervenções sujeitos a implantação diretamente pelos adquirentes na respectiva etapa;</p></CommentsContext>
					<CommentsContext :id="87" :context="'Cap IV - Art.19'"><p><b>II</b> - identificação das obrigações do Poder Público e dos particulares adquirentes;</p></CommentsContext>
					<CommentsContext :id="88" :context="'Cap IV - Art.19'"><p><b>III</b> - garantias de cumprimento do Termo de Cooperação a serem prestadas pelo Poder Público e pelo particular;</p></CommentsContext>
					<CommentsContext :id="89" :context="'Cap IV - Art.19'"><p><b>IV</b> - matriz de riscos;</p></CommentsContext>
					<CommentsContext :id="90" :context="'Cap IV - Art.19'"><p><b>V</b> - hipóteses e consequências das alterações do Termo de Cooperação, do seu término antecipado e da eventual prorrogação;</p></CommentsContext>
					<CommentsContext :id="91" :context="'Cap IV - Art.19'"><p><b>VI</b> - modo de resolução de controvérsias, por meio dos instrumentos previstos pela Lei Municipal nº 16.873 de 22 de fevereiro de 2018, ou outra que vier a sucedê-la.</p></CommentsContext>
					<CommentsContext :id="92" :context="'Cap IV - Art.19'"><p><b>VII</b> - cronograma de realização da etapa do Programa de Intervenções, e as consequências para eventuais atrasos;</p></CommentsContext>
					<CommentsContext :id="93" :context="'Cap IV - Art.19'"><p><b>§ 1º.</b> O Termo de Cooperação deverá prever a observância de, no mínimo, as especificações técnicas das obras e dos serviços assumidos pelas partes e previstas nos Anexos 6 e 7 desta Lei.</p></CommentsContext>
					<CommentsContext :id="94" :context="'Cap IV - Art.19'"><p><b>§ 2º.</b> O instrumento convocatório do leilão, incluindo a minuta do Termo de Cooperação e demais anexos, preverá a forma da implantação de elementos do Programa de Intervenções constantes na respectiva etapa diretamente pelos particulares adquirentes, bem como os prazos referentes a tais obrigações, e será  submetido à prévia consulta pública por prazo não inferior a 30 (trinta) dias;</p></CommentsContext>
					<CommentsContext :id="95" :context="'Cap IV - Art.19'"><p><b>§ 3º.</b> O Termo de Cooperação referente à alienação de Potencial Construtivo Adicional na Primeira Hasta Pública, nos termos do artigo 20 e seguintes desta Lei, deverá conter cláusula de Opção de Venda do Estoque Remanescente de Potencial Construtivo Adicional nas condições expressas pelo artigo 28 da presente Lei. </p></CommentsContext>
				</section>

				<section>
					<h4 class="titulo" indent="3">Subseção II<span>: Do Leilão de Potencial Construtivo Adicional</span></h4>
					<h4 class="subtitulo">Do Leilão de Potencial Construtivo Adicional</h4>
					<CommentsContext :id="96" :context="'Cap IV - Art.20'"><p><b>Art. 20.</b> A alienação de Potencial Construtivo Adicional do Perímetro de Adesão do PIU-VL mediante leilão será realizada em ao menos duas hastas públicas, na seguinte conformidade:</p></CommentsContext>
					<CommentsContext :id="97" :context="'Cap IV - Art.20'"><p><b>I</b> – Primeira Hasta Pública, em leilão de 266.000 m² (duzentos e sessenta e seis mil metros quadrados) de Potencial Construtivo Adicional, tendo como contrapartida a implantação dos elementos constantes da Etapa I do Programa de Intervenções da AIU-VL diretamente pelos adquirentes do Potencial Construtivo Adicional leiloado;</p></CommentsContext>
					<CommentsContext :id="98" :context="'Cap IV - Art.20'"><p><b>II</b> – Segunda Hasta Pública, em leilão de Potencial Construtivo Adicional em valor suficiente a implantar integralmente a Etapa II do Programa de Intervenções da AIU-VL diretamente pelos adquirentes do Potencial Construtivo Adicional leiloado.</p></CommentsContext>
					<CommentsContext :id="99" :context="'Cap IV - Art.21'"><p><b>Art. 21.</b> Cada Hasta Pública será iniciada mediante convite, formulado a todos os proprietários do Perímetro de Adesão da AIU-VL, para a aquisição integral do Potencial Construtivo Adicional disponibilizado.</p></CommentsContext>
					<CommentsContext :id="100" :context="'Cap IV - Art.21'"><p><b>§ 1º.</b> A aquisição do Potencial Construtivo Adicional disponibilizado em cada Hasta Pública será realizada por um único proponente, que representará um ou mais proprietários de terrenos do Perímetro de Adesão da AIU-VL.</p></CommentsContext>
					<CommentsContext :id="101" :context="'Cap IV - Art.21'"><p><b>§ 2º.</b> Na hipótese de a aquisição ser feita por meio de consórcio de mais de um proprietário, ou de proprietários consorciados a agentes não proprietários de terrenos do Perímetro de Adesão da AIU-VL, deverão os lances ser ofertados pela pessoa jurídica de direito privado designada pelos proponentes como responsável pela execução das obrigações assumidas em contrapartida da aquisição do Potencial Construtivo Adicional mediante leilão.</p></CommentsContext>
					<CommentsContext :id="102" :context="'Cap IV - Art.21'"><p><b>§ 3º.</b> O vencedor de cada Hasta Pública firmará Termo de Cooperação com o Poder Público, a fim de viabilizar a execução integral das intervenções nesta previstas.</p></CommentsContext>
					<CommentsContext :id="103" :context="'Cap IV - Art.21'"><p><b>§ 4º.</b> O proprietário adquirente fará jus, a cada Hasta Pública, a uma certidão, a ser emitida pela SP-Urbanismo, reconhecendo a quantidade de Potencial Construtivo Adicional adquirida. </p></CommentsContext>
					<CommentsContext :id="104" :context="'Cap IV - Art.21'"><p><b>§ 5º.</b> A certidão será apresentada à SP-Urbanismo mediante convocação ao seu detentor em função de requerimento realizado nos projetos de licenciamento edilício realizados utilizando o Potencial Construtivo Adicional adquirido em Hasta Pública, sendo reemitida após a aprovação do citado projeto, declarando-se o Potencial Construtivo Adicional remanescente.</p></CommentsContext>
					<CommentsContext :id="105" :context="'Cap IV - Art.22'"><p><b>Art. 22.</b> O Potencial Construtivo Adicional adquirido em Hastas Públicas poderá ser cedido, gratuita ou onerosamente, aos proprietários inseridos no Perímetro de Adesão da AIU-VL a partir da assinatura do respectivo Termo de Cooperação, observando-se o seguinte:</p></CommentsContext>
					<CommentsContext :id="106" :context="'Cap IV - Art.22'"><p><b>I</b> – o vencedor da Hasta Pública estará obrigado a ceder aos demais proprietários do Perímetro de Adesão da AIU-VL o Potencial Construtivo Adicional para utilização em seus lotes, mediante solicitação realizada nos processos de licenciamento edilício protocolizados junto aos órgãos públicos;</p></CommentsContext>
					<CommentsContext :id="107" :context="'Cap IV - Art.22'"><p><b>II</b> - o valor do metro quadrado do Potencial Construtivo Adicional fornecido nos moldes do inciso anterior deverá ser equivalente, no máximo, ao valor do metro quadrado alienado mediante outorga onerosa do direito de construir praticado na região. </p></CommentsContext>
					<CommentsContext :id="108" :context="'Cap IV - Art.22'"><p><b>Parágrafo único.</b> Após o prazo de 10 (dez) anos, contados da assinatura do Termo de Cooperação para implantação de cada Etapa do Programa de Intervenções da AIU-VL, ou após executadas integralmente as obras referentes às respectivas Etapas, o que ocorrer primeiro, o Potencial Construtivo Adicional adquirido nas Hastas Públicas poderá ser alienado a qualquer proprietário de lotes contidos na área de abrangência do PIU Arco Pinheiros, a valores livremente estabelecidos entre as partes, observadas as condições do artigo 23 desta Lei.</p></CommentsContext>
					<CommentsContext :id="109" :context="'Cap IV - Art.23'"><p><b>Art. 23.</b> Dentre os primeiros 400.000 m² (quatrocentos mil metros quadrados) consumidos do estoque de Potencial Construtivo Adicional da AIU-VL, independentemente de sua utilização em seu Perímetro de Adesão ou alienação para aproveitamento no PIU Arco Pinheiros, deverão ser destinados, no mínimo, 53.200 m² (cinquenta e três mil e duzentos metros quadrados) para a construção de edificações para usos residenciais na área de abrangência do perímetro da AIU-VL, observando-se o seguinte:</p></CommentsContext>
					<CommentsContext :id="110" :context="'Cap IV - Art.23'"><p><b>I</b> - o Potencial Construtivo Adicional obrigatoriamente destinado a usos residenciais poderá ser utilizado em edificações exclusivamente residenciais ou de uso misto;</p></CommentsContext>
					<CommentsContext :id="111" :context="'Cap IV - Art.23'"><p><b>II</b> – serão considerados como usos equivalentes a usos residenciais, para os fins deste artigo, aqueles enquadrados na categoria de serviços de hospedagem e moradia;</p></CommentsContext>
					<CommentsContext :id="112" :context="'Cap IV - Art.23'"><p><b>III</b> – o Potencial Construtivo Adicional da AIU-VL utilizado para a construção dos EHIS  produzidos em função da contrapartida à aquisição do estoque de adquirido na Primeira Hasta Pública não será computado para fins de atendimento ao previsto neste artigo. </p></CommentsContext>
					<CommentsContext :id="113" :context="'Cap IV - Art.24'"><p><b>Art. 24.</b> A Primeira Hasta Pública será realizada após a emissão da Certidão de Diretrizes prevista no art. 13, inc. II desta Lei, sendo o critério de julgamento do leilão o de maior valor global do lote de Potencial Construtivo Adicional do Perímetro de Adesão da AIU-VL, sagrando-se vencedor o proponente que, além de garantir a implantação das obras e ações do Programa de Intervenções da Etapa I, ofertar maior valor financeiro destinado à conta segregada do FUNDURB da AIU-VL. </p></CommentsContext>
					<CommentsContext :id="114" :context="'Cap IV - Art.24'"><p><b>Parágrafo único.</b> Não havendo proposta de aquisição do lote de Potencial Construtivo Adicional do Perímetro de Adesão da AIU-VL que atenda aos critérios previstos no “caput”, a Primeira Hasta Pública será considerada fracassada. </p></CommentsContext>
					<CommentsContext :id="115" :context="'Cap IV - Art.25'"><p><b>Art. 25.</b> O vencedor da Primeira Hasta Pública estará condicionado a assumir a Opção de Venda do estoque remanescente de Potencial Construtivo Adicional alienável na segunda Hasta Pública, nos termos e condições do artigo 26 da presente Lei.</p></CommentsContext>
					<CommentsContext :id="116" :context="'Cap IV - Art.26'"><p><b>Art. 26.</b> A Segunda Hasta Pública de Potencial Construtivo Adicional da AIU-VL será realizada após a disponibilização, pelo Poder Público Municipal, dos terrenos necessários à implantação da Etapa II do Programa de Intervenções da AIU-VL, prevista nos Anexos 6 e 7 desta Lei, utilizando-se como critério para definição do vencedor do certame a realização integral das correspondentes prestações em contrapartida da alienação, pelo Poder Público, da menor quantidade de metros quadrados do estoque de Potencial Construtivo Adicional da AIU-VL.</p></CommentsContext>
					<CommentsContext :id="117" :context="'Cap IV - Art.26'"><p><b>§ 1º.</b> O leilão previsto no caput será realizado através de lances sucessivos e progressivos, ofertados pelos interessados, com intervalos mínimos de 10.000m² (dez mil metros quadrados) de Potencial Construtivo Adicional.</p></CommentsContext>
					<CommentsContext :id="118" :context="'Cap IV - Art.26'"><p><b>§ 2º.</b>  Na hipótese de não acudirem interessados à oferta inicial do Poder Público, poderá o Potencial Construtivo Adicional disponibilizado no leilão ser gradualmente incrementado pela Administração Pública, tendo por limite o estoque remanescente de 414.000 m² (quatrocentos e catorze mil metros quadrados).</p></CommentsContext>
					<CommentsContext :id="119" :context="'Cap IV - Art.26'"><p><b>§ 3º.</b> Tendo em vista a Opção de Venda imposta ao adquirente do Potencial Construtivo Adicional na Primeira Hasta Pública, a última oferta do leilão da Segunda Hasta Pública deverá igualar as condições previstas art. 28 desta Lei, possibilitando aos participantes do certame a utilização do Potencial Construtivo Adicional nos termos previstos naquele artigo.  </p></CommentsContext>
					<CommentsContext :id="120" :context="'Cap IV - Art.26'"><p><b>§ 4º.</b> Não havendo proponente que atenda aos critérios estabelecidos pelo Poder Público na Segunda Hasta Pública do leilão de Potencial Construtivo Adicional da AIU-VL, tal será declarada fracassada.</p></CommentsContext>
				</section>

				<section>
					<h4 class="titulo" indent="3">Subseção III<span>: Da Aquisição Ordinária</span></h4>
					<h4 class="subtitulo">Da Aquisição Ordinária</h4>
					<CommentsContext :id="121" :context="'Cap IV - Art.27'"><p><b>Art. 27.</b> A alienação ordinária de potencial construtivo adicional na AIU-VL será realizada aplicando-se as disposições do art. 117 e art. 145, §3º do PDE, nas seguintes hipóteses:</p></CommentsContext>
					<CommentsContext :id="122" :context="'Cap IV - Art.27'"><p><b>I</b> - exaurimento do estoque de Potencial Construtivo Adicional alienado nas duas Hastas Públicas previstas nesta Lei, caso os apontados certames não alienem a totalidade dos metros quadrados de Potencial Construtivo Adicional previstos no art. 15, parágrafo único, desta Lei;</p></CommentsContext>
					<CommentsContext :id="123" :context="'Cap IV - Art.27'"><p><b>II</b> - fracasso da Primeira Hasta Pública.</p></CommentsContext>
					<CommentsContext :id="124" :context="'Cap IV - Art.27'"><p><b>§ 1º.</b> O fracasso da Primeira Hasta Pública de Potencial Construtivo Adicional da AIU-VL implicará a alienação integral do estoque previsto no art. 15, parágrafo único, desta Lei pela via ordinária, sendo os recursos obtidos destinados à conta segregada do FUNDURB, observando-se, ainda, o seguinte:</p></CommentsContext>
					<CommentsContext :id="125" :context="'Cap IV - Art.27'"><p><b>I</b> - a fixação do Coeficiente de Aproveitamento Máximo 4,0 (quatro) para todos os lotes do Perímetro de Adesão da AIU-VL, independentemente do momento de seu registro, sem limitação de gabarito de altura das edificações;</p></CommentsContext>
					<CommentsContext :id="126" :context="'Cap IV - Art.27'"><p><b>II</b> – a execução das ações e obras do Plano de Intervenções pelo Poder Público, diretamente ou por intermédio de delegatários.</p></CommentsContext>
					<CommentsContext :id="127" :context="'Cap IV - Art.27'"><p><b>§ 2º.</b> O fracasso da Segunda Hasta Pública de Potencial Construtivo Adicional determinará o exercício da Opção de Venda prevista nesta Lei.</p></CommentsContext>
				</section>

				<section>
					<h4 class="titulo" indent="3">Subseção IV<span>: Da Opção de Venda do Estoque Remanescente de Potencial Construtivo Adicional</span></h4>
					<h4 class="subtitulo">Da Opção de Venda do Estoque Remanescente de Potencial Construtivo Adicional</h4>
					<CommentsContext :id="128" :context="'Cap IV - Art.28'"><p><b>Art. 28.</b> Fracassada a Segunda Hasta de Potencial Construtivo Adicional do estoque da AIU-VL, fica autorizado o Poder Público a executar Opção de Venda em face do vencedor da Primeira Hasta Pública de Potencial Construtivo Adicional.</p></CommentsContext>
					<CommentsContext :id="129" :context="'Cap IV - Art.28'"><p><b>Parágrafo único.</b> A Opção de Venda prevista nesta Lei é cláusula obrigatória do Termo de Cooperação referente a Primeira Hasta Pública de Potencial Construtivo Adicional da AIU-VL, e autoriza o Poder Público a exercer o direito de alienar ao vencedor do apontado certame o restante do Potencial Construtivo Adicional da AIU-VL, nos termos e condições a seguir especificados:</p></CommentsContext>
					<CommentsContext :id="130" :context="'Cap IV - Art.28'"><p><b>I</b> – ficará obrigado o vencedor da Primeira Hasta Pública do Potencial Construtivo Adicional da AIU-VL a adquirir a integralidade do estoque de potencial construtivo remanescente, devendo, em torna, a executar integralmente a Etapa II do Programa de Intervenções da AIU-VL, prevista nos Anexos 6 e 7 desta Lei;</p></CommentsContext>
					<CommentsContext :id="131" :context="'Cap IV - Art.28'"><p><b>II</b> – o Potencial Construtivo Adicional disponibilizado nos termos deste artigo poderá ser imediatamente alienado a qualquer proprietário de lotes contidos na AIU-VL ou no subsetor Arco Pinheiros da Macroárea de Estruturação Metropolitana, a valores livremente estabelecidos entre as partes;</p></CommentsContext>
					<CommentsContext :id="131" :context="'Cap IV - Art.28'"><p><b>III</b> – caso as ações previstas na Etapa II do Programa de Intervenções desta Lei não sejam capazes de atingir integralmente o objetivo nela previsto, o Poder Público deverá se responsabilizar por implementar as intervenções faltantes, celebrando-se, neste caso, como condição resolutiva, competente Termo de Cooperação com o titular da Opção de Venda prevista neste artigo.</p></CommentsContext>
				</section>
			</section>

			<section>
				<h3 class="titulo" indent="2">Seção II<span>: DA CONTA SEGREGADA DO FUNDURB</span></h3>
				<h3 class="subtitulo">DA CONTA SEGREGADA DO FUNDURB</h3>
				<CommentsContext :id="132" :context="'Cap IV - Art.29'"><p><b>Art. 29.</b> A AIU-VL terá conta segregada no FUNDURB, que receberá os recursos para implantação de seu Programa de Intervenções ou de eventuais intervenções adicionais a partir da arrecadação havida pela comercialização ordinária do Potencial Construtivo Adicional pelo Poder Público.</p></CommentsContext>
				<CommentsContext :id="133" :context="'Cap IV - Art.29'"><p><b>Parágrafo único.</b> Caberá ao Conselho Gestor da AIU-VL encaminhar ao Conselho Gestor do FUNDURB, anualmente, listagem de intervenções prioritárias para implantação do Programa de Intervenções em seu território, sendo que:</p></CommentsContext>
				<CommentsContext :id="134" :context="'Cap IV - Art.29'"><p><b>I</b> - encerrado o Programa de Intervenções previsto para a AIU-VL, eventual saldo financeiro da conta segregada será distribuído às contas criadas para a implantação do Programa de Intervenções do PIU Arco Pinheiros;</p></CommentsContext>
				<CommentsContext :id="135" :context="'Cap IV - Art.29'"><p><b>II</b> - encerrados os Programas de Intervenções para o perímetro do PIU Arco Pinheiros, eventual saldo financeiro existente na conta segregada da AIU-VL será transferido à conta geral do FUNDURB.</p></CommentsContext>
				<CommentsContext :id="136" :context="'Cap IV - Art.30'"><p><b>Art. 30.</b> O Perímetro Expandido poderá receber recursos da conta segregada do FUNDURB da AIU-VL para implantação de EHIS, inclusive mediante aporte de recursos em ajustes conduzidos pela Secretaria Municipal de Habitação em parcerias com o setor privado.</p></CommentsContext>
			</section>
		</section>

		<section>
			<h2 class="titulo" indent="1">CAPÍTULO V<span>: DA GESTÃO</span></h2>
			<h2 class="subtitulo">DA GESTÃO</h2>

			<section>
				<h3 class="titulo" indent="2">SEÇÃO I<span>: DA ATUAÇÃO CONCERTADA DOS ÓRGÃOS E ENTIDADES MUNICIPAIS</span></h3>
				<h3 class="subtitulo">DA ATUAÇÃO CONCERTADA DOS ÓRGÃOS E ENTIDADES MUNICIPAIS</h3>
				<CommentsContext :id="137" :context="'Cap V - Art.31'"><p><b>Art. 31.</b> A implantação do Programa de Intervenções da AIU-VL se dará mediante ação concertada entre os agentes privados, órgãos e entidades municipais, devendo atender, no mínimo, às disposições desta Lei.</p></CommentsContext>
				<CommentsContext :id="138" :context="'Cap V - Art.31'"><p><b>§ 1º.</b> As atribuições conferidas às secretarias municipais por esta Lei poderão ser delegadas às entidades da administração indireta a tais vinculadas.</p></CommentsContext>
				<CommentsContext :id="139" :context="'Cap V - Art.31'"><p><b>§ 2º.</b> A coordenação das ações previstas no “caput” caberá à empresa SP-Urbanismo, que contará com a colaboração dos demais órgãos e entidades municipais para o desempenho das funções a si afetas.</p></CommentsContext>
				<CommentsContext :id="140" :context="'Cap V - Art.32'"><p><b>Art. 32.</b> Caberá à SMUL além das outras atribuições previstas em lei:</p></CommentsContext>
				<CommentsContext :id="141" :context="'Cap V - Art.32'"><p><b>I</b> - promover a implantação do PIU-VL mediante interação entre órgãos da administração direta e indireta, com outras esferas de governo e com a sociedade civil; </p></CommentsContext>
				<CommentsContext :id="142" :context="'Cap V - Art.32'"><p><b>II</b> - coordenar o Conselho Gestor da AIU-VL;</p></CommentsContext>
				<CommentsContext :id="143" :context="'Cap V - Art.32'"><p><b>III</b> - realizar o controle finalístico da transformação urbana através do acompanhamento das políticas públicas e do monitoramento dos indexadores da transformação territorial;</p></CommentsContext>
				<CommentsContext :id="144" :context="'Cap V - Art.32'"><p><b>IV</b> - identificar as áreas de propriedade do município no território da AIU-VLVL e sua atualização proveniente das ações autorizadas por esta Lei;</p></CommentsContext>
				<CommentsContext :id="145" :context="'Cap V - Art.32'"><p><b>V</b> - promover a desapropriação de áreas particulares necessárias à execução do Programa de Intervenções e de demais intervenções consideradas necessárias no processo de implantação do PIU-VL; </p></CommentsContext>
				<CommentsContext :id="146" :context="'Cap V - Art.32'"><p><b>VI</b> – preparar os editais de alienação de Potencial Construtivo Adicional, e adotar as medidas administrativas tendentes à sua realização, inclusive demandando providências das unidades competentes da Administração Municipal.</p></CommentsContext>
				<CommentsContext :id="147" :context="'Cap V - Art.32'"><p><b>Parágrafo único.</b> A SMUL contratará a empresa SP-Urbanismo para o desenvolvimento e detalhamento das ações previstas no Programa de Intervenções. </p></CommentsContext>
				<CommentsContext :id="148" :context="'Cap V - Art.33'"><p><b>Art. 33.</b> Caberá à Secretaria Municipal do Verde e do Meio Ambiente, além das outras atribuições previstas em lei:</p></CommentsContext>
				<CommentsContext :id="149" :context="'Cap V - Art.33'"><p><b>I</b> - realizar o licenciamento ambiental dos empreendimentos da AIU-VL em conformidade, quando aplicável, com a Certidão de Diretrizes Urbanísticas;</p></CommentsContext>
				<CommentsContext :id="150" :context="'Cap V - Art.33'"><p><b>II</b> - realizar o monitoramento ambiental da implantação do Programa de Intervenções no tocante a seu impacto ambiental;</p></CommentsContext>
				<CommentsContext :id="151" :context="'Cap V - Art.33'"><p><b>III</b> - instruir os critérios de detalhamento dos projetos de espaços públicos e áreas verdes voltadas a qualificação ambiental previstos no Programa de Intervenção;</p></CommentsContext>
				<CommentsContext :id="152" :context="'Cap V - Art.33'"><p><b>IV</b> - indicar, em consonância com os projetos desenvolvidos na SP-Urbanismo, o enquadramento das áreas verdes propostas pelo PIU-VL no Sistema de Áreas Protegidas, Áreas Verdes e Espaços Livres (SAPAVEL).</p></CommentsContext>
				<CommentsContext :id="153" :context="'Cap V - Art.34'"><p><b>Art. 34.</b> Caberá à Secretaria Municipal de Habitação, além das outras atribuições previstas em lei:</p></CommentsContext>
				<CommentsContext :id="154" :context="'Cap V - Art.34'"><p><b>I</b> – promover a realocação da população cadastrada nos termos do art. 14, § 1º, desta Lei, mediante a implementação de ações integrais para cada um dos núcleos envolvidos, especialmente as previstas no art. 14, inc. III, desta Lei, facultada a intervenção em momentos temporais distintos, assegurando-se, em qualquer hipótese, a realocação da população em unidades de HIS construídas em função da implantação do PIU-VL;</p></CommentsContext>
				<CommentsContext :id="155" :context="'Cap V - Art.34'"><p><b>II</b> - implantar o Serviço de Sociabilização pós-ocupação para atendimento às famílias moradoras dos novos EHIS, compreendendo equipes de assistentes sociais para auxílio no convívio com o novo condomínio e no planejamento financeiro necessário, bem como outras ações de assistência, capacitação e desenvolvimento social para atender a população e assegurar a inclusão no processo de desenvolvimento urbano;</p></CommentsContext>
				<CommentsContext :id="156" :context="'Cap V - Art.34'"><p><b>III</b> – realizar a gestão condominial dos EHIS entregues em cumprimento do Programa de Intervenções desta Lei;</p></CommentsContext>
				<CommentsContext :id="157" :context="'Cap V - Art.34'"><p><b>IV</b> - a gestão dos EHIS, devendo ser definido o modelo de contrato e outros ajustes a serem celebrados com os usuários ou adquirentes das unidades implantadas em cumprimento do Programa de Intervenções previsto nesta Lei, a título, exemplificativamente, de alienação ou locação social;</p></CommentsContext>
				<CommentsContext :id="158" :context="'Cap V - Art.34'"><p><b>V</b> – coordenar os Conselhos Gestores das ZEIS situadas no Perímetro de Adesão e no Perímetro de Expansão.</p></CommentsContext>
				<CommentsContext :id="159" :context="'Cap V - Art.34'"><p><b>§ 1º.</b> O fluxo de caixa advindo dos pagamentos realizados pelos mutuários beneficiados pela implantação do Programa de Intervenções desta lei poderá ser securitizado pela Secretaria Municipal de Habitação, vinculando-se os recursos auferidos a gastos com manutenção dos condomínios implantados em atenção ao Programa de Intervenções da AIU-VL;</p></CommentsContext>
				<CommentsContext :id="160" :context="'Cap V - Art.34'"><p><b>§ 2º.</b> Poderão os adquirentes dos lotes de Potencial Construtivo Adicional disponibilizados em Hasta Pública entabular ajustes com o Poder Público para promover a execução das ações dispostas nos incisos II e III, nos moldes fixados no Termo de Cooperação. </p></CommentsContext>
				<CommentsContext :id="161" :context="'Cap V - Art.35'"><p><b>Art. 35.</b> Caberá à Secretaria Municipal de Transportes, além das outras atribuições previstas em lei:</p></CommentsContext>
				<CommentsContext :id="162" :context="'Cap V - Art.35'"><p><b>I</b> - adequar e compatibilizar a implantação dos melhoramentos viários propostos no Programa de Intervenções com o sistema de mobilidade existente e planejado da Cidade;</p></CommentsContext>
				<CommentsContext :id="163" :context="'Cap V - Art.35'"><p><b>II</b> - providenciar o licenciamento dos empreendimentos enquadrados como polo geradores de tráfego em conformidade com a Certidão de Diretrizes Urbanísticas;</p></CommentsContext>
				<CommentsContext :id="164" :context="'Cap V - Art.35'"><p><b>III</b> – auxiliar na definição das soluções de mobilidade e sistema viário.</p></CommentsContext>
				<CommentsContext :id="165" :context="'Cap V - Art.36'"><p><b>Art. 36.</b> Caberá à Secretaria Municipal de Infraestrutura Urbana e Obras, além das outras atribuições previstas em lei:</p></CommentsContext>
				<CommentsContext :id="166" :context="'Cap V - Art.36'"><p><b>I</b> - fiscalizar a implantação do Programa de Intervenções, quando realizado como resultado da contrapartida por parte do vencedor das hastas públicas de Potencial Construtivo Adicional;</p></CommentsContext>
				<CommentsContext :id="167" :context="'Cap V - Art.36'"><p><b>II</b> – executar a implantação do Programa de Intervenções, em caso de fracasso das hastas públicas de Potencial Construtivo Adicional previstas nesta Lei;</p></CommentsContext>
				<CommentsContext :id="168" :context="'Cap V - Art.36'"><p><b>III</b> – auxiliar no monitoramento do Programa de Intervenções, no que tange a definição de soluções voltadas ao sistema viário, drenagem e obras de infraestrutura.</p></CommentsContext>
				<CommentsContext :id="169" :context="'Cap V - Art.37'"><p><b>Art. 37.</b> Caberá à Secretaria Municipal de Desenvolvimento Econômico coordenar a elaboração, além das outras atribuições previstas em lei, de políticas de desenvolvimento econômico na AIU-VL, propondo programas de incentivo ao emprego e renda vinculados a proposta de desenvolvimento urbano e novas infraestruturas propostas pelo PIU-VL.</p></CommentsContext>
				<CommentsContext :id="170" :context="'Cap V - Art.38'"><p><b>Art. 38.</b> Caberá a Secretaria Municipal de Assistência e Desenvolvimento Social - SMADS, além das outras atribuições previstas em lei, coordenar a elaboração de políticas de assistência social na AIU-VL, especialmente considerando a demanda local de população em situação de rua e de dependentes químicos, buscando sua inclusão no processo de desenvolvimento urbano proposto.</p></CommentsContext>
			</section>

			<section>
				<h3 class="titulo" indent="2">SEÇÃO II<span>: DO CONSELHO GESTOR DA AIU-VL</span></h3>
				<h3 class="subtitulo">DO CONSELHO GESTOR DA AIU-VL</h3>
				<CommentsContext :id="171" :context="'Cap V - Art.39'"><p><b>Art. 39.</b> A AIU-VL contará com um Conselho Gestor, coordenado pela Secretaria Municipal de Urbanismo e Licenciamento, com participação de órgãos municipais e de entidades representativas da sociedade civil, visando instruir e auxiliar a implantação do respectivo Programa de Intervenções e o monitoramento de seu desenvolvimento.</p></CommentsContext>
				<CommentsContext :id="172" :context="'Cap V - Art.39'"><p><b>§ 1º.</b> O Conselho Gestor é instrumento de gestão e participação instituído para acompanhar a implantação e propor o aperfeiçoamento do Programa de Intervenções da AIU-VL.</p></CommentsContext>
				<CommentsContext :id="173" :context="'Cap V - Art.39'"><p><b>§ 2º.</b> O Conselho Gestor, nos termos do artigo 141 do PDE, será designado pelo Executivo e terá a seguinte composição:</p></CommentsContext>
				<CommentsContext :id="174" :context="'Cap V - Art.39'"><p><b>I</b> – 2 (dois) representantes da Secretaria Municipal de Habitação, sendo ao menos 1 (um) deles relacionado à gestão dos contratos de Habitação de Interesse Social (HIS);</p></CommentsContext>
				<CommentsContext :id="175" :context="'Cap V - Art.39'"><p><b>II</b> - 1 (um) representante da Secretaria Municipal de Assistência e Desenvolvimento Social;</p></CommentsContext>
				<CommentsContext :id="176" :context="'Cap V - Art.39'"><p><b>III</b> – 1 (um) representante da Secretaria Municipal dos Transportes ou da Companhia de Engenharia Tráfego;</p></CommentsContext>
				<CommentsContext :id="177" :context="'Cap V - Art.39'"><p><b>IV</b> – 1 (um) representante da Secretaria Municipal de Urbanismo e Licenciamento;</p></CommentsContext>
				<CommentsContext :id="178" :context="'Cap V - Art.39'"><p><b>V</b> – 1 (um) representante da SP-Urbanismo;</p></CommentsContext>
				<CommentsContext :id="179" :context="'Cap V - Art.39'"><p><b>VI</b> - 1 (um) representante da Secretaria Municipal do Verde e do Meio Ambiente;</p></CommentsContext>
				<CommentsContext :id="180" :context="'Cap V - Art.39'"><p><b>VII</b> - 1 (um) representante da Secretaria Municipal das Subprefeituras;</p></CommentsContext>
				<CommentsContext :id="181" :context="'Cap V - Art.39'"><p><b>VIII</b> – 2 (dois) representante da Subprefeitura da Lapa, sendo ao menos um deles relacionado ao CPDU;</p></CommentsContext>
				<CommentsContext :id="182" :context="'Cap V - Art.39'"><p><b>IX</b> – 3 representantes de Conselhos de Zeis do Perímetro de Adesão do PIU-VL, sendo ao menos 1 (um) representante da Favela da Linha, 1 (um) representante da Favela do Nove e 1 (um) representantes da comunidade localizada nas áreas comuns do conjunto Cingapura Madeirite;</p></CommentsContext>
				<CommentsContext :id="183" :context="'Cap V - Art.39'"><p><b>X</b> – 2 (dois) representantes de entidades de bairro; </p></CommentsContext>
				<CommentsContext :id="184" :context="'Cap V - Art.39'"><p><b>XI</b> – 2 (dois) representantes de organizações sociais com atuação na região do PIU-VL;</p></CommentsContext>
				<CommentsContext :id="185" :context="'Cap V - Art.39'"><p><b>XII</b> - 1 (um) representante dos adquirentes do Potencial Construtivo Adicional da AIU-VL mediante leilão;</p></CommentsContext>
				<CommentsContext :id="186" :context="'Cap V - Art.39'"><p><b>XIV</b> – 1 (um) representante do Conselho Participativo da Lapa;</p></CommentsContext>
				<CommentsContext :id="187" :context="'Cap V - Art.39'"><p><b>XV</b> – 1 (um) representante de entidades de pesquisa e tecnologia vinculados à Universidades e/ou outras entidades de ensino.  </p></CommentsContext>
				<CommentsContext :id="188" :context="'Cap V - Art.39'"><p><b>§ 3º.</b> Os representantes mencionados nos incisos IX e XIV serão indicados por seus respectivos conselhos, na forma de seus regimentos específicos.</p></CommentsContext>
				<CommentsContext :id="189" :context="'Cap V - Art.39'"><p><b>§ 4º.</b> Os representantes mencionados nos incisos X, XI e XV serão definidos por eleição direta, à qual poderão se candidatar agentes indicados por membros das entidades que preencham os requisitos previstos neste artigo, sendo eleitores os moradores do Perímetro de Adesão do PIU-VL.</p></CommentsContext>
				<CommentsContext :id="190" :context="'Cap V - Art.39'"><p><b>§ 5º.</b> O representante mencionado no inciso XII deste artigo será eleito mediante ajuste a ser realizado entre os adquirentes do Potencial Construtivo Adicional mediante leilão no PIU-VL, cabendo ao Poder Público indicar o representante no caso de não haver acordo entre os interessados.</p></CommentsContext>
				<CommentsContext :id="191" :context="'Cap V - Art.39'"><p><b>§ 6º.</b> Na hipótese de fracasso da Primeira Hasta Pública prevista nesta Lei, a vaga prevista no inciso XIV será ocupada por um representante de entidade representativa do setor empresarial da região.</p></CommentsContext>
				<CommentsContext :id="192" :context="'Cap V - Art.39'"><p><b>§ 7º.</b> Cada representante contará com um suplente, indicado ou eleito conjuntamente ao representante titular.</p></CommentsContext>
				<CommentsContext :id="193" :context="'Cap V - Art.39'"><p><b>§ 8º.</b> O funcionamento do Conselho Gestor da AIU-VL serão estabelecidos por Regimento Interno proposto pela empresa SP-Urbanismo e aprovado pela maioria de seus integrantes.</p></CommentsContext>
				<CommentsContext :id="194" :context="'Cap V - Art.39'"><p><b>§ 9°.</b> A Coordenação do colegiado caberá ao representante da Secretaria Municipal de Urbanismo e Licenciamento - SMUL, que proferirá os votos de desempate, quando necessário.</p></CommentsContext>
				<CommentsContext :id="195" :context="'Cap V - Art.40'"><p><b>Art. 40.</b> O Conselho Gestor da AIU-VL realiza o controle social da implantação do PIU-VL, cabendo-lhe:</p></CommentsContext>
				<CommentsContext :id="196" :context="'Cap V - Art.40'"><p><b>I</b> - propor programas e estratégias que possam aprimorar e complementar o Programa de Intervenções, na hipótese de integralmente executadas as intervenções previstas nos Anexos 6 e 7 desta Lei;</p></CommentsContext>
				<CommentsContext :id="197" :context="'Cap V - Art.40'"><p><b>II</b> – monitorar a implantação do Programa de Intervenções da AIU-VL, acompanhando o andamento dos seus projetos e obras, por meio da validação dos relatórios apresentados pela SP-Urbanismo;</p></CommentsContext>
				<CommentsContext :id="198" :context="'Cap V - Art.40'"><p><b>III</b> - acompanhar a aplicação da cota de solidariedade;</p></CommentsContext>
				<CommentsContext :id="199" :context="'Cap V - Art.40'"><p><b>IV</b> - manifestar-se previamente sobre as propostas de implantação e a aplicação dos recursos vinculados à habitação de interesse social, a implantação de equipamentos públicos na AIU-VL, quando for o caso.</p></CommentsContext>
				<CommentsContext :id="200" :context="'Cap V - Art.40'"><p><b>Parágrafo único.</b> A SMUL realizará as tarefas administrativas do Conselho Gestor da AIU-VL, bem como realizará a intermediação entre tal colegiado e o FUNDURB.</p></CommentsContext>
			</section>
		</section>

		<section>
			<h2 class="titulo" indent="1">CAPÍTULO VI<span>: DISPOSIÇÕES FINAIS E TRANSITORIAS</span></h2>
			<h2 class="subtitulo">DISPOSIÇÕES FINAIS E TRANSITORIAS</h2>
			<CommentsContext :id="201" :context="'Cap VI - Art. 41'"><p><b>Art. 41.</b> O Programa de Intervenções previsto nos Anexos 6 e 7 desta Lei considera o PIU-VL como um projeto único para a AIU-VL, devendo o Poder Público prever a destinação de recursos necessários e suficientes para seu atendimento na parcela eventualmente não satisfeita pela alienação do seu estoque Potencial Construtivo Adicional.</p></CommentsContext>
			<CommentsContext :id="202" :context="'Cap VI - Art. 41'"><p><b>Parágrafo único.</b> As leis orçamentárias municipais deverão prever a destinação dos recursos mencionados no “caput” à AIU-VL, caso necessários.</p></CommentsContext>
			<CommentsContext :id="203" :context="'Cap VI - Art. 42'"><p><b>Art. 42.</b> O Projeto de Intervenção Urbana que dará suporte à edição da lei prevista no art. 76, § 3º, inc. IV do PDE – PIU do Arco Pinheiros deverá observar as disposições trazidas nesta Lei em relação à AIU-VL, bem como respeitar os parâmetros de parcelamento, uso e ocupação do solo ora disciplinados. </p></CommentsContext>
			<CommentsContext :id="204" :context="'Cap VI - Art. 42'"><p><b>Parágrafo único.</b> Na hipótese da alteração do equilíbrio econômico-financeiro das intervenções previstas nos Termos de Cooperação firmados após a aquisição de Potencial Construtivo Adicional em Hasta Pública em razão da entrada em vigor da lei prevista no “caput”, caberá análise acerca de necessidade indenização da parte prejudicada ou recomposição das obrigações anteriormente firmadas.</p></CommentsContext>
			<CommentsContext :id="205" :context="'Cap VI - Art. 43'"><p><b>Art. 43.</b> Aplicam-se à AIU-VL, até a realização da Primeira Hasta Pública prevista nesta Lei, o zoneamento ordinário previsto no PDE e na LPUOS.</p></CommentsContext>
			<CommentsContext :id="206" :context="'Cap VI - Art. 44'"><p><b>Art. 44.</b> Os processos de licenciamento de obras e edificações, protocolados até a data de publicação desta Lei, sem despacho decisório, serão apreciados integralmente de acordo com a legislação em vigor à época do protocolo, exceto nos casos de manifestação formal do interessado, a qualquer tempo, optando pela análise integral do processo nos termos desta Lei.</p></CommentsContext>
			<CommentsContext :id="207" :context="'Cap VI - Art. 44'"><p><b>§ 1º.</b> Os processos de licenciamento de obras e edificações com opção modificativa referidos no “caput” serão indeferidos, sem prejuízo das disposições do Código de Obras e Edificações – Lei nº 57.776/2017, quando a modificação da versão do projeto constante do processo em análise na data de promulgação desta Lei pretenda:</p></CommentsContext>
			<CommentsContext :id="208" :context="'Cap VI - Art. 44'"><p><b>a.</b> alterar uso, categoria de uso ou subcategoria de uso;</p></CommentsContext>
			<CommentsContext :id="209" :context="'Cap VI - Art. 44'"><p><b>b.</b> acréscimo superior a mais de 5% (cinco por cento) nas áreas computáveis ou não computáveis;</p></CommentsContext>
			<CommentsContext :id="210" :context="'Cap VI - Art. 44'"><p><b>c.</b> alterar em mais de 5% (cinco por cento) a taxa de ocupação.</p></CommentsContext>
			<CommentsContext :id="211" :context="'Cap VI - Art. 44'"><p><b>§ 2º.</b> Projetos de parcelamento do solo para os terrenos contidos na área de abrangência do Projeto Específico de Parcelamento de Solo com protocolo e tramitação prévia à promulgação da presente Lei poderão ser aproveitados para a formação da convicção administrativa sobre a expedição da Certidão de Diretrizes prevista no art. 13, inc. II desta Lei, mediante manifestação expressa dos interessados e análise conclusiva da SP-Urbanismo acerca da adequação das adaptações necessárias aos projetos em análise.</p></CommentsContext>
			<CommentsContext :id="212" :context="'Cap VI - Art. 45'"><p><b>Art. 45.</b> Os casos de dúvida e de omissão acerca dos dispositivos desta Lei serão dirimidos pela Câmara Técnica de Legislação Urbanística - CTLU, ouvida a SP-Urbanismo.</p></CommentsContext>
			<CommentsContext :id="213" :context="'Cap VI - Art. 46'"><p><b>Art. 46.</b> Os incentivos urbanísticos previstos nesta Lei são cumulativos aos demais incentivos previstos na legislação urbanística municipal, especialmente o PDE e a LPUOS, aplicáveis suplementarmente às disposições deste diploma legal.</p></CommentsContext>
			<CommentsContext :id="214" :context="'Cap VI - Art. 47'"><p><b>Art. 47.</b> A SP-Urbanismo e a COHAB poderão prestar garantias de cumprimento de suas obrigações no âmbito dos Termos de Cooperação a serem firmados pelo Poder Público, na forma de penhor ou cessão fiduciária de seus bens e direitos, inclusive receitas operacionais.</p></CommentsContext>
			<CommentsContext :id="215" :context="'Cap VI - Art. 48'"><p><b>Art. 48.</b> Aplicam-se ao Projeto Específico de Parcelamento do Solo previsto nesta Lei, suplementarmente, as demais disposições trazidas nesta Lei e na LPUOS referentes ao parcelamento do solo, podendo o Poder Executivo emitir decreto para fins de estabelecer ritos específicos.  </p></CommentsContext>
			<CommentsContext :id="216" :context="'Cap VI - Art. 49'"><p><b>Art. 49.</b> Ficam aprovados os melhoramentos viários dispostos no Anexo 2 da presente Lei.</p></CommentsContext>
			<CommentsContext :id="217" :context="'Cap VI - Art. 50'"><p><b>Art. 50.</b> Esta Lei entrará em vigor na data de sua publicação.</p></CommentsContext>
		</section>

		<section>
			<h2 class="titulo" indent="1">Anexos</h2>

			<section>
				<h3 class="titulo" indent="2">Anexos do Projeto de Lei</h3>
				<ul class="links">
					<li>
						<a :href="arquivosLeopoldina('AIU_VL_PL_Anexo1_Mapa1.pdf')" download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Anexo 1: Mapa 1</div>
							<span>972 Kb</span>
						</a>
					</li>
					<li>
						<a :href="arquivosLeopoldina('AIU_VL_PL_Anexo2_Mapa2.pdf')"  download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Anexo 2: Mapa 2</div>
							<span>36 Kb</span>
						</a>
					</li>
					<li>
						<a :href="arquivosLeopoldina('AIU_VL_PL_Anexo3.pdf')"  download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Anexo 3: Quadro de Parâmetros urbanísticos da AIU-VL</div>
							<span>62 Kb</span>
						</a>
					</li>
					<li>
						<a :href="arquivosLeopoldina('AIU_VL_PL_Anexo4.pdf')"  download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Anexo 4: Quadro de Percentuais mínimos de destinação de área pública</div>
							<span>65 Kb</span>
						</a>
					</li>
					<li>
						<a @click="scrollToRef('cadernoProjeto')">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Anexo 5: Caderno Técnico*</div>
						</a>
					</li>
					<li>
						<a :href="arquivosLeopoldina('AIU_VL_PL_Anexo6.pdf')"  download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Anexo 6: Programa de Intervenções</div>
							<span>67 Kb</span>
						</a>
					</li>
					<span class="rodape">* O <strong>Anexo 5</strong> será um extrato do Caderno Técnico Completo do PIU, cujo conteúdo está disponível para consulta no <strong>Caderno do Técnico.</strong>, sem prejuízo, portanto, para a análise do PL. Este anexo será composto, no mínimo, pelo <strong>Modelo Econômico de suporte à avaliação do Potencial Construtivo Adicional da AIU-VL, Projeto Urbanístico Referencial e Diretrizes Gerais para o Projeto Específico de Parcelamento do Solo e Cadastro para atendimento habitacional de responsabilidade da SEHAB.</strong></span><br><br>
					<span class="rodape">** O <strong>Anexo 7</strong> trará as Especificações Técnicas Gerais e Padrões de Qualidade das Habitações de Interesse Social – HIS, equipamentos e instalações públicas e serviços de gerenciamento social necessários para garantir que o projeto atenda a população beneficiada em conformidade com os parâmetros estabelecidos pela SEHAB nos demais projetos. Tais especificações serão definidas quando da consolidação do projeto pelo Executivo Municipal, já que se tratam de parâmetros vigentes e já praticados.</span>

				</ul>
				<Comments v-if="estaConsulta.ativo == 1" :attr="{id:218, context:'Anexos - Anexos do Projeto de Lei'}"></Comments>
			</section>

			<section ref="cadernoProjeto">
				<h3 class="titulo" indent="2">Caderno Técnico</h3>
				<ul class="links">
					<li>
						<a :href="arquivosLeopoldina('PIU_VLVL_CAP_01_INTRODUCAO.pdf')"  download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Capítulo 1: Introdução</div>
							<span>1,04 Mb</span>
						</a>
					</li>
					<li>
						<a :href="arquivosLeopoldina('PIU_VLVL_CAP_02_DIAGNOSTICO_SOCIO-TERRITORIAL.pdf')"  download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Capítulo 2: Diagnóstico Sócio-territorial</div>
							<span>68,7 Mb</span>
						</a>
					</li>
					<li>
						<a :href="arquivosLeopoldina('PIU_VLVL_CAP_03_PROGRAMA_INTERESSE_PUBLICO.pdf')"  download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Capítulo 3: Programa de Interesse Público</div>
							<span>167 Kb</span>
						</a>
					</li>
					<li>
						<a :href="arquivosLeopoldina('PIU_VLVL_CAP_04_PROPOSTA_ORDENAMENTO_URBANISTICO.pdf')"  download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Capítulo 4: Proposta de Ordenamento Urbanístico</div>
							<span>107 Mb</span>
						</a>
					</li>
					<li>
						<a :href="arquivosLeopoldina('PIU_VLVL_CAP_05_MODELAGEM_ECONOMICA.pdf')"  download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Capítulo 5: Modelagem Econômica da Intervenção</div>
							<span>619 Kb</span>
						</a>
					</li>
					<li>
						<a :href="arquivosLeopoldina('PIU_VLVL_CAP_06_MODELO_GESTAO.pdf')"  download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Capítulo 6: Modelo de Gestão</div>
							<span>154 Kb</span>
						</a>
					</li>
					<li>
						<a :href="arquivosLeopoldina('PIU_VLVL_CAP_07_MODELO_JURIDICO.pdf')"  download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Capítulo 7: Modelo Jurídico</div>
							<span>226 Kb</span>
						</a>
					</li>
					<li>
						<a :href="arquivosLeopoldina('PIU_VLVL_CADERNO_COMPLETO.rar')"  download target="_blank">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<div>Caderno Completo</div>
							<span>183,5 Mb</span>
						</a>
					</li>
				</ul>

				<CommentsOption v-if="estaConsulta.ativo == 1" :options="[
					{ id: 219, context: 'Capítulo 4: Proposta de Ordenamento Urbanístico' },
					{ id: 220, context: 'Capítulo 5: Modelagem Econômica da Intervenção' },
					{ id: 221, context: 'Capítulo 6: Modelo de Gestão' },
					{ id: 222, context: 'Capítulo 7: Modelo Jurídico' }
				]">
				</CommentsOption>
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
import CommentsContext from '@/components/CommentsContext'
import CommentsOption from '@/components/CommentsOption'
import CommentsLoader from '@/components/CommentsLoader'
import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'VilaLeopoldina2',
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
		Comments,
		CommentsContext,
		CommentsOption,
		CommentsLoader,
		Apoio
	},
	mixins: [ consultasCommons ],
	methods: {
		arquivosLeopoldina (nomeArquivo) {
			return this.$store.getters.basePath + 'arquivos/piu-vila-leopoldina-2/' + nomeArquivo
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';

div.VilaLeopoldina2 {
	p#print a {
		display: inline-block;
		font-family: $grotesca;
		color: $cinza-2;
		font-size: small;
		font-weight: 700;
		text-transform: uppercase;
		border-radius: 2px;
		border-bottom: none;
		transition: all ease-in .2s;
		user-select: none;
		-ms-user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		& > * { transition: all ease-in .2s; }
		i {
			display: inline-block;
			margin-right: 4px;
			background-color: $cinza-2;
			color: #FFF;
			text-align: center;
			line-height: 2rem;
			width: 2rem;
			border-radius: 1rem;
		}
		&:hover {
			color: $preto;
			i {
				background-color: $preto;
			}
		}
		&:active { background-color: transparent; };

		@media (max-width: 600px) {
			margin: 2rem 0 0 0;
			i {
				background-color: transparent;
				color: $cinza-2;
				line-height: initial;
				width: unset;
				vertical-align: middle;
			}
			&:hover {
				color: $vermelho;
				i { background-color: transparent; color: $vermelho;}
			}
		}
	}
	section#intro {
		& > h2 { text-align: center; }
		& > p:last-child {
			padding-left: 260px;
			text-align: justify;
			@media (max-width: 600px) {
				padding-left: 80px;
			}
		}
	}
	section#conceito {
		ol {
			counter-reset: item;
			list-style-type: none;
		}
		li::before { content: counters(item, ".") ". "; counter-increment: item }
	}
	section {
		h2.titulo, h3.titulo, h4.titulo {
			span { font-size: 0 }
		}
	}
	@media print {
		p#print a { display: none; }
		ul.links .rodape {
			display: block;
			padding-left: 2rem;
			font-size: smaller;
			color: $cinza-1;
		}
		ul.links br { display: none; }
	}
}
</style>
