<template>
	<div class="PremiaSampaEdicao2020" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/premia_sampa_edicao_2020_480w.webp" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>Minuta de Regulamento do Premia Sampa</div></template>
			<template slot="subtitulo"><div>Edição 2020</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<section>
			<h2 class="titulo" indent="1">1. SOBRE O PRÊMIO</h2>
				<p>
					<b>1.1.</b>
					O Premia Sampa é uma iniciativa da Prefeitura do Município de São Paulo, por meio da Secretaria Municipal de Gestão (SG) e da Secretaria Municipal de Inovação e Tecnologia (SMIT), e tem como objetivos:
				</p>
				<ul>
					<li>
						Reconhecer publicamente as melhores práticas de inovação na gestão pública no Município de São Paulo;
					</li>
					<li>
						Valorizar iniciativas que contribuem para a melhoria do serviço público, resultando em benefícios para os cidadãos;
					</li>
					<li>
						Promover práticas inovadoras na gestão municipal da Prefeitura do Município de São Paulo, seja pela melhoria de práticas existentes, seja pela adoção de novas práticas, que sirvam de referência e inspiração;
					</li>
					<li>
						Apoiar a estratégia de modernização da administração pública da Prefeitura do Município de São Paulo;
					</li>
					<li>
						Difundir as melhores práticas, tornando-as referências em serviços públicos para o país, e assim, contribuir para o desenvolvimento local, regional e nacional.
					</li>
				</ul>
				<Comments :attr="{id:commentId(true), context:'1. SOBRE O PRÊMIO'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">2. PARTICIPANTES</h2>
				<p>
					<b>2.1.</b>
					O Premia Sampa é aberto à participação de equipes de agentes públicos das unidades da administração pública municipal direta ou indireta no âmbito da Prefeitura do Município de São Paulo e entidades paraestatais (serviços sociais autônomos, entidades de apoio, organizações sociais e organizações da sociedade civil com interesse público).
				</p>
				<Comments :attr="{id:commentId(), context:'2.1 PARTICIPANTES'}" v-if="estaConsulta.ativo == 1"></Comments>

				<p>
					<b>2.1.1.</b>
					É permitida a participação de empresas, startups, organizações da sociedade civil (incluindo organizações sociais) e universidades, desde que usem dados públicos ou desenvolvam projetos em conjunto com a gestão pública municipal, exclusivamente na Categoria V: inovação aberta (ver abaixo).
				</p>
				<Comments :attr="{id:commentId(), context:'2.1.1 PARTICIPANTES'}" v-if="estaConsulta.ativo == 1"></Comments>
				<p>
					<b>2.2.</b>
					As equipes devem ser compostas de, no mínimo, , duas pessoas (no caso das categorias I, II, III e IV, de dois agentes públicos municipais), que deverão ser responsáveis ou estar envolvidas diretamente no planejamento, desenvolvimento e implantação de iniciativas (projetos, programas ou outras atividades).
				</p>
				<Comments :attr="{id:commentId(true), context:'2.2 PARTICIPANTES'}" v-if="estaConsulta.ativo == 1"></Comments>

				<p>
					<b>2.2.1.</b>
					Não há limite máximo de participantes por equipe.
				</p>
			<Comments :attr="{id:commentId(), context:'2.2.1 PARTICIPANTES'}" v-if="estaConsulta.ativo == 1"></Comments>
				<p>
					<b>2.2.2.</b>
					Estagiários podem fazer parte das equipes, mas não podem ser indicados como responsáveis pelo projeto nem indicados a recebimento do prêmio, conforme o item 7.3 deste Regulamento.
				</p>
			<Comments :attr="{id:commentId(), context:'2.2.2 PARTICIPANTES'}" v-if="estaConsulta.ativo == 1"></Comments>
				<p>
					<b>2.3.</b>
					É vedada a participação dos membros da Comissão Organizadora, sendo permitida a participação dos agentes públicos ou prestadores de serviços das respectivas unidades de trabalho, desde que a análise da iniciativa apresentada seja feita por integrantes de outra pasta.
				</p>
				<Comments :attr="{id:commentId(), context:'2.3 PARTICIPANTES'}" v-if="estaConsulta.ativo == 1"></Comments>
				<p>
					<b>2.4.</b>
					É vedada a participação de equipes de projetos premiados como vencedores em edições anteriores.
				</p>
				<Comments :attr="{id:commentId(), context:'2.4 PARTICIPANTES'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="1">3. CATEGORIAS</h3>
				<p>
					<b><u>Categoria I: NOME A SER DEFINIDO. Dê a sua sugestão nos comentários!</u></b>
				</p>
				<p>
					<b>3.1.</b>
					Para as iniciativas lideradas por agentes públicos  da Prefeitura Municipal de São Paulo em processos internos, serviços ou políticas públicas, levando em consideração as características das categorias III e IV, e que tenham representado mudança de larga escala na administração pública e/ou na cidade. Para ser caracterizado como um projeto de larga escala, deve ser considerada a transversalidade (número de secretarias envolvidas), priorização na agenda política e/ou no Programa de Metas, valor de recursos investidos, número de servidores envolvidos e abrangência territorial.
				</p>
				<Comments :attr="{id:commentId(), context:'3. CATEGORIAS I'}" v-if="estaConsulta.ativo == 1"></Comments>
				<p>
					<b><u>Categoria II: NOME A SER DEFINIDO. Dê a sua sugestão nos comentários!</u></b>
				</p>
				<p>
					Para as iniciativas lideradas por agentes públicos municipais da Prefeitura Municipal de São Paulo alocados em órgãos públicos descentralizados, como: subprefeituras, CRAS, CREAS, Escolas Municipais, CEUs, Diretorias Regionais de Educação, Unidades Básicas de Saúde, entre outras. As inovações podem representar mudanças em processos internos, políticas públicas ou serviços públicos, levando em consideração as características das categorias III e IV.
				</p>
				<Comments :attr="{id:commentId(), context:'3. CATEGORIAS II'}" v-if="estaConsulta.ativo == 1"></Comments>
				<p>
					As iniciativas poderão ser inscritas em uma das cinco categorias do Premia Sampa. São elas:
				</p>
				<p>
					<b><u>Categoria III: Inovação em Processos Internos</u></b>
				</p>
				<p>
					Para as iniciativas lideradas por agentes públicos municipais da Prefeitura Municipal de São Paulo que visam à introdução de novas formas ou revisão das formas existentes de realização ou organização dos processos de trabalho, que contribuam para o aprimoramento do desempenho do órgão e de seus servidores. O foco é sua própria organização, seus colaboradores e outros órgãos da Administração Direta e Indireta, e Entidades Paraestatais. <b>Não podem participar projetos que se encaixem nas categorias I ou II</b>.
				</p>
				<Comments :attr="{id:commentId(), context:'3. CATEGORIAS III'}" v-if="estaConsulta.ativo == 1"></Comments>
				<p>
					<b><u>Categoria IV: Inovação em Serviços e Políticas Públicas</u></b>
				</p>
				<p>
					Para as iniciativas lideradas por agentes públicos municipais Prefeitura Municipal de São Paulo que visam à introdução de novos serviços ou aprimoramento dos serviços ao cidadão existentes ou novas formas de prestação dos serviços públicos que gerem melhoria da qualidade ou produtividade. Seu público-alvo é o usuário externo ou outra organização. No caso das políticas públicas, o foco são iniciativas que visam a uma nova forma de ação do poder público, no atendimento de uma demanda ou na resposta à um problema, a partir da mobilização de diferentes recursos (humanos, materiais, físicos, administrativos e financeiros) e de diferentes atores públicos e/ou privados, e que gerem impacto social. Seu público-alvo é o cidadão, e o que será avaliado não é o mérito da política pública em si, mas os elementos de inovação que ela apresenta. <b>Não podem participar projetos que se encaixem nas categorias I e II</b>.
				</p>
				<Comments :attr="{id:commentId(), context:'3. CATEGORIAS IV'}" v-if="estaConsulta.ativo == 1"></Comments>
				<p>
					<b><u>Categoria V: Inovação Aberta</u></b>
				</p>
				<p>
					Para iniciativas lideradas por <b>empresas, organizações da sociedade civil, startups e universidades, isoladas ou em parceria com órgãos públicos</b>, que visem a solução de problemas públicos por meio do uso de dados da Prefeitura do Município de São Paulo, sejam relativos a processos organizacionais ou a serviços e políticas públicas. Os projetos não poderão envolver repasses de recursos financeiros entre as organizações privadas e a Prefeitura do Município de São Paulo.
				</p>
				<Comments :attr="{id:commentId(), context:'3. CATEGORIAS V'}" v-if="estaConsulta.ativo == 1"></Comments>

		</section>
		<section>
			<h3 class="titulo" indent="1">4. INSCRIÇÕES</h3>
		</section>
		<section>
				<p>
					<b>4.1.</b>
					As inscrições serão feitas em duas etapas:
				</p>
				<p>
					<b>I. Etapa 1: Inscrição do Projeto</b>
				</p>
				<p>
					Os interessados deverão preencher o Formulário de Inscrição através do link http://premiasampa.prefeitura.sp.gov.br, no qual indicarão a equipe de trabalho, caracterizarão e descreverão resumidamente a iniciativa. A Comissão Organizadora homologará a elegibilidade da equipe candidata remetendo confirmação da inscrição através de e-mail e publicação no site.
				</p>
				<p>
					O preenchimento dos nomes dos integrantes da equipe executora e dos parceiros deverá ser feito com a máxima atenção, uma vez que não será permitido, em hipótese alguma, inclusão, substituição ou exclusão de nomes.
				</p>
				<p>
					A pessoa responsável pela iniciativa é quem responde pela coordenação do projeto e a ela será atribuído o prêmio, independente de quem realiza o preenchimento da inscrição.
				</p>
				<p>
					<b>Observação:</b> em caso de inscrição com duplicidade, a Comissão Organizadora solicitará comprovação de responsabilidade pelo projeto em prazo determinado. Caso um dos envolvidos não responda dentro do prazo, isso o torna automaticamente inelegível. Caso ambos não respondam dentro do prazo, os dois projetos serão inelegíveis.
				</p>

				<br>
				<p>
					<b>II. Etapa 2: Detalhamento do Projeto</b>
				</p>

				<p>
					As equipes consideradas elegíveis na Etapa 1: Inscrição do Projeto deverão, então, elaborar o documento <b>“Relatório do Projeto”</b>, no qual descreverão detalhadamente as suas práticas de acordo com os critérios de avaliação do <b>Premia Sampa</b>. O relatório deverá ser encaminhado pelo meio indicado no site do prêmio. Os relatórios que não atenderem às instruções estabelecidas neste Regulamento poderão, eventualmente, ser anulados.
				</p>
					<Comments :attr="{id:commentId(), context:'4.1. INSCRIÇÕES'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>4.2</b>
					As iniciativas inscritas devem estar em execução há no mínimo três meses e apresentar resultados mensuráveis até a data de inscrição.
				</p>
					<Comments :attr="{id:commentId(), context:'INSCRIÇÕES 4.2.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>4.3.</b>
					O <b>Relatório do Projeto</b> deverá ser encaminhado dentro prazo estipulado no cronograma. A Comissão Organizadora não se responsabilizará por quaisquer problemas quanto ao prazo de envio.
				</p>
				<Comments :attr="{id:commentId(), context:'INSCRIÇÕES 4.3.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>4.4.</b>
					As inscrições efetivadas implicam a concordância e aceitação de todas as condições previstas neste Regulamento.
				</p>
				<Comments :attr="{id:commentId(), context:'INSCRIÇÕES 4.4.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>4.5.</b>
					Não há limite de número de iniciativas inscritas.
				</p>
				<Comments :attr="{id:commentId(), context:'INSCRIÇÕES 4.5.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>4.6.</b>
					Não haverá cobrança de taxa de inscrição.
				</p>
				<Comments :attr="{id:commentId(), context:'INSCRIÇÕES 4.6.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="1">5. CRITÉRIOS</h3>
		</section>
		<section>
				<p>
					Os projetos serão avaliados de acordo com os seguintes critérios:
				</p>
		</section>
		<section>
				<p>
					<b>5.1.</b>
					<b>Inovação:</b> mudança significativa no processo ou nos serviços (peso 5);
				</p>
				<Comments :attr="{id:commentId(), context:'CRITÉRIOS 5.1.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>5.2.</b>
					<b>Resultados / impacto:</b> melhoria perceptível em relação à situação anterior, satisfação dos usuários (peso 4);
				</p>
				<Comments :attr="{id:commentId(), context:'CRITÉRIOS 5.2.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>5.3.</b>
					<b>Participação:</b> papel mais ativo das pessoas (cidadãos, servidores) diretamente impactadas (peso 4);
				</p>
				<Comments :attr="{id:commentId(), context:'CRITÉRIOS 5.3.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>5.4.</b>
					<b>Eficiência:</b> utilização eficiente dos recursos financeiros, físicos e de pessoal (peso 3).
				</p>
				<Comments :attr="{id:commentId(), context:'CRITÉRIOS 5.4.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>5.5.</b>
					<b>Transparência:</b> acesso público a informações relevantes, permitindo melhor monitoramento / controle social (peso 3);
				</p>
				<Comments :attr="{id:commentId(), context:'CRITÉRIOS 5.5.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>5.6.</b>
					<b>Continuidade:</b> atenção a fatores (orçamentários, técnicos, jurídicos, políticos etc.) que ampliem a probabilidade de continuidade do projeto (peso 2);
				</p>
				<Comments :attr="{id:commentId(), context:'CRITÉRIOS 5.6.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>5.7.</b>
					<b>Replicabilidade:</b> potencial de ser replicado ou servir de inspiração para outros órgãos da Prefeitura do Município de São Paulo e de outros governos (peso 2);
				</p>
				<Comments :attr="{id:commentId(), context:'CRITÉRIOS 5.7.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>5.8.</b>
					<b>Parcerias:</b> ações coordenadas com parceiros internos e/ou externos à gestão pública municipal (peso 1);
				</p>
				<Comments :attr="{id:commentId(), context:'CRITÉRIOS 5.8.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>5.9.</b>
					<b>Sustentabilidade:</b> o projeto se enquadra em alguma das 169 metas dos Objetivos do Desenvolvimento Sustentável da ONU, em correlação ou não com o Plano de Metas (peso 1).
				</p>
				<Comments :attr="{id:commentId(), context:'CRITÉRIOS 5.9.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="1">6. AVALIAÇÃO</h3>
		</section>
		<section>
				<p>
					<b>6.1.</b>
				</p>
				<ol type="I">
					<li><b>Etapa 1: Verificação de Elegibilidade</b>, onde será verificado se as iniciativas apresentadas estão de acordo com o que consta no Regulamento.</li>

					<li><b>Etapa 2: Banca Técnica</b>, constituída pela Comissão Organizadora, fará a análise dos Relatórios dos Projetos, atribuindo pontuação individual com base nos critérios de avaliação (item 5). Após, finalizadas as avaliações e por consenso, a Comissão Organizadora selecionará até seis semifinalistas de cada categoria, que serão convocados para fazer uma apresentação oral de suas práticas em data a definir na etapa seguinte.</li>

					<li><b>Etapa 3:</b> Comissão Julgadora, constituída de especialistas em diversas áreas sem vínculo empregatício com a gestão pública municipal, receberá o Relatório do Projeto e o Relatório de Avaliação elaborado pela Comissão Organizadora, para proceder à análise crítica e validação das avaliações. A banca se reunirá para ouvir os depoimentos dos semifinalistas, confirmar as informações, esclarecer dúvidas e ao término desta etapa, deliberar sobre os finalistas e premiados.</li>
				</ol>

			<Comments :attr="{id:commentId(), context:'AVALIAÇÃO 6.1'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>6.2.</b>
					No processo de avaliação, a Banca Técnica e a Comissão Julgadora serão soberanas, e suas deliberações serão irrecorríveis.
				</p>
				<Comments :attr="{id:commentId(), context:'AVALIAÇÃO 6.2'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="1">7. PREMIAÇÃO</h3>
		</section>
		<section>
				<p>
					<b>7.1.</b>
					Serão selecionadas até três iniciativas vencedoras por categoria, sendo essas classificadas em 1º, 2º e 3º lugares, segundo os critérios de julgamento.
				</p>
				<Comments :attr="{id:commentId(), context:'PREMIAÇÃO 7.1.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>7.2.</b>
					Os reconhecimentos serão entregues na Cerimônia de Premiação, a ser realizada em data, local e horário a serem divulgados pela Comissão Organizadora.
				</p>
				<Comments :attr="{id:commentId(), context:'PREMIAÇÃO 7.2.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>7.3.</b>
					As iniciativas vencedoras receberão:
				</p>
				<ol type="I">
					<li>Um troféu, entregue à equipe do projeto;</li>
					<li>Certificados individuais de premiação, entregues individualmente a todos os finalistas, legitimamente homologados;</li>
					<li>Um prêmio a ser definido pela Comissão Organizadora e informado oportunamente. Este prêmio é limitado aos cinco primeiros integrantes da equipe premiada em 1º lugar de cada categoria — indicados em ordem no formulário de inscrição —, incluindo a pessoa responsável pelo projeto. Caso algum membro não possa ou não queira desfrutar do prêmio recebido, esta pessoa poderá indicar outro integrante da equipe para recebê-lo, desde que o nome deste outro integrante conste do formulário de inscrição. Essa solicitação deverá ser feita por escrito à Comissão Organizadora, juntamente com a indicação da pessoa que desfrutará do prêmio para avaliação, podendo ser aprovada ou não a transferência.</li>
				</ol>
				<Comments :attr="{id:commentId(), context:'PREMIAÇÃO 7.3.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<h3 class="titulo" indent="1">8. RECURSOS</h3>
		</section>
		<section>
				<p>
					<b>8.1.</b>
					Das decisões da Comissão Organizadora, Banca Técnica e Comissão Julgadora, não caberão recursos de quaisquer espécies.
				</p>
				<Comments :attr="{id:commentId(), context:'RECURSOS 8.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<h3 class="titulo" indent="1">9. CRONOGRAMA</h3>
		</section>
		<section>
				<p>
					<b>9.1.</b>
					O Prêmio acontecerá nas datas, a seguir:
				</p>
				<ul>
					<li>23 de setembro de 2019 a 25 de outubro de 2019: lançamento do Prêmio e inscrições da Etapa 1.</li>
					<li>26 de outubro a 1º de novembro de 2019: análise e divulgação dos inscritos homologados.</li>
					<li>3 de novembro de 2019 a 13 de dezembro de 2019: envio dos relatórios por todas as equipes homologadas (Etapa 2).</li>
					<li>14 de dezembro de 2019 a 30 de janeiro de 2020: avaliação pela Banca Técnica.</li>
					<li>31 de janeiro de 2020: divulgação dos seis selecionados de cada uma das categorias e envio do material de inscrição para a Comissão Julgadora.</li>
					<li>Fevereiro de 2020: apresentação dos projetos para a Comissão Julgadora (em data a ser divulgada no site do Prêmio, com ao menos duas semanas de antecedência). Apresentações de, no máximo, 20 minutos.</li>
					<li>Fevereiro de 2020: reunião da Comissão Julgadora para definição dos premiados e convite para participação do evento de premiação para os membros das três equipes dos projetos selecionados de cada categoria.</li>
					<li>Março de 2020: evento de premiação.</li>
				</ul>
				<Comments :attr="{id:commentId(), context:'CRONOGRAMA 9.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>9.2</b>
					Quaisquer alterações das datas acima serão comunicadas no site do prêmio e por e-mail para as equipes inscritas.
				</p>
				<Comments :attr="{id:commentId(), context:'CRONOGRAMA 9.2'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<h3 class="titulo" indent="1">10. DISPOSIÇÕES GERAIS</h3>
		</section>
		<section>
				<p>
					<b>10.1.</b>
					A Comissão Organizadora poderá reclassificar projetos em categorias diferentes das que foram inscritas pelos participantes, tendo em vista as condições de participação definidas neste edital.
				</p>
				<Comments :attr="{id:commentId(), context:'DISPOSIÇÕES GERAIS 10.1.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>10.2.</b>
					A Comissão Organizadora poderá, a qualquer tempo, solicitar documentação comprobatória de responsabilidade administrativa pela execução das práticas inscritas, ou dados complementares que evidenciem informações descritas nos Formulários e Relatórios. Caso não seja atendida tal solicitação, a inscrição poderá ser anulada em qualquer etapa do ciclo de premiação.
				</p>
				<Comments :attr="{id:commentId(), context:'DISPOSIÇÕES GERAIS 10.2.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>10.3.</b>
					As equipes candidatas autorizarão previamente, independentemente do resultado final da premiação, a veiculação e o uso — por quaisquer meios — do nome, imagem e voz dos servidores integrantes das equipes de trabalho.
				</p>
				<Comments :attr="{id:commentId(), context:'DISPOSIÇÕES GERAIS 10.3.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>10.4.</b>
					As iniciativas premiadas e finalistas poderão fazer uso do resultado alcançado na premiação para fins de promoção e divulgação de seus trabalhos.
				</p>
				<Comments :attr="{id:commentId(), context:'DISPOSIÇÕES GERAIS 10.4.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>10.5.</b>
					Informações sobre as iniciativas inscritas no <b>Premia Sampa</b> estarão disponíveis para consulta no site do prêmio.
				</p>
				<Comments :attr="{id:commentId(), context:'DISPOSIÇÕES GERAIS 10.5.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>10.6.</b>
					Na ocorrência de eventuais situações não previstas neste Regulamento, caberá à Comissão Organizadora deliberar e suas decisões serão soberanas e irrecorríveis.
				</p>
				<Comments :attr="{id:commentId(), context:'DISPOSIÇÕES GERAIS 10.6.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>10.7.</b>
					Ao término do cronograma da premiação, os finalistas poderão ser chamados para colaborar em diversos eventos formativos, como encontros e palestras, a fim de dar publicidade aos seus projetos e permitir sua replicabilidade dentro da PMSP.
				</p>
				<Comments :attr="{id:commentId(), context:'DISPOSIÇÕES GERAIS 10.7.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
				<p>
					<b>10.8.</b>
					Todos os finalistas receberão um Selo do Premia Sampa, nas categorias: finalista, 3º lugar, 2º lugar e vencedor, para disporem em futuras apresentações, utilização em mídias sociais e página da internet da unidade. As questões relativas ao selo serão de responsabilidade da Comissão Organizadora.
				</p>
				<Comments :attr="{id:commentId(), context:'DISPOSIÇÕES GERAIS 10.8.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import CommentsContext from '@/components/CommentsContext'
// import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'PremiaSampaEdicao2020',
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
		CommentsLoader,
		CommentsContext
		// Apoio
	},
	mixins: [ consultasCommons ],
	methods: {
		fileSrc (fileName) {
			let url = this.$store.getters.basePath + 'arquivos/premia-sampa-edicao-2020/' + fileName
			return url.toString()
		},
		commentId (isFirst) {
			if (isFirst) {
				this.$store.commentsCount = 0
			}
			this.$store.commentsCount++
			return this.$store.commentsCount
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';
</style>
