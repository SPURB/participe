<template>
	<div class="GovernoAberto" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/governo-aberto_1900w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>Edital de Credenciamento do Programa Agentes de Governo Aberto - 2019</div></template>
		</PageTop>

		<Indice :titulos="titulosLimpo"></Indice>

		<section>
			<h2 class="titulo" indent="1">Introdução</h2>
			<p>A Consulta Pública irá acolher sugestões sobre o Edital do Programa Agentes de Governo Aberto de 2019, promovido pela Prefeitura de São Paulo, por meio da Secretaria do Governo Municipal e Controladoria Geral do Município. 
			O propósito do programa é engajar a sociedade civil na agenda de Governo Aberto através da contratação de pessoas para a oferta de formações gratuitas aos munícipes, de modo a descentralizar conceitos, ferramentas e práticas de Governo Aberto na cidade</p>
		</section>
		<section>
			<h2 class="titulo" indent="1"><center>EDITAL Nº 01/2019 – SGM/CGM - EDITAL DE CREDENCIAMENTO DE AGENTES DE GOVERNO ABERTO <br />
				Processo SEI</center>
			</h2>
			<CommentsContext :id="1" :context="'EDITAL DE CREDENCIAMENTO DE AGENTES DE GOVERNO ABERTO'">
				<div>
					A Prefeitura de São Paulo, por meio da Secretaria do Governo Municipal e a Controladoria Geral do Município, <b>com apoio do Comitê Intersecretarial de Governo Aberto da Cidade de São Paulo (CIGA-SP)</b>, FAZ SABER que, durante o período de <mark>xx de xxxx a xx  de xxxx de 2019, às 23h59</mark>, por cadastramento online na plataforma SP Cultura (http://spcultura.prefeitura.sp.gov.br), estarão abertas as inscrições para credenciamento de Agentes de Governo Aberto.
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">1. DO OBJETO</h3>
			<CommentsContext :id="2" :context="'ITEM 1.1'">
				<div>
					<b>1.1</b> O presente Edital tem por objeto o credenciamento de Agentes de Governo Aberto para a realização de oficinas formativas de promoção e cultura de governo aberto nas áreas de abrangência de todas as Subprefeituras da cidade de São Paulo.
					<p><b>1.1.1.</b> As oficinas formativas serão destinadas aos cidadãos, redes, associações, organizações e coletivos da sociedade civil, visando ampliar e qualificar a participação política na gestão municipal.</p>
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">2. DAS DIRETRIZES, DOS OBJETIVOS E DAS ORIENTAÇÕES</h3>
			<CommentsContext :id="3" :context="'ITEM 2.1'">
				<div><b>2.1.</b> Para fins deste Edital, com base no conceito adotado pela iniciativa internacional Open Government Partnership, consideram-se como diretrizes de Governo Aberto:
					<ol type="a">
					    <li>A transparência e o acesso às informações públicas;</li>
					    <li>O fortalecimento da participação social;</li>
					    <li>O fomento à inovação tecnológica;</li>
					    <li>O fortalecimento da integridade pública, por meio da prevenção e do combate à corrupção. </li>
					</ol>
					<p><b>2.1.1.</b> O programa Agentes de Governo Aberto tem como objetivo engajar a sociedade civil na agenda de Governo Aberto, por meio da contratação de Agentes Formadores e a oferta de formações gratuitas para munícipes, de modo a descentralizar conceitos, ferramentas e práticas de Governo Aberto no município de São Paulo e atingindo o maior número possível de cidadãos, capacitando-os para uma boa participação política junto ao poder público.</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="4" :context="'ITEM 2.2'">
				<div>
					<b>2.2.</b> Por promoção da cultura de Governo Aberto, para fins deste Edital, entende-se:
					<ol type="a">
					    <li>A difusão do conceito e das <b>práticas de transparência, dados abertos</b> e <b>acesso à informação</b>;</li>
					    <li>O fomento ao uso de <b>instrumentos de gestão participativa</b>, de <b>mapeamento colaborativo</b> e outras <b>técnicas de georreferenciamento</b> dos territórios;</li>
					    <li>A criação de aplicações e ferramentas tecnológicas voltadas à <b>promoção da cidadania</b>, por meio do uso e desenvolvimento de hardwares e softwares livres e abertos e incentivo às <b>inovações sociais e colaborativas</b>;</li>
					    <li>A difusão dos instrumentos de <b>comunicação cidadã</b> existentes e o estímulo ao desenvolvimento de novos que tenham como propósito compartilhar <b>experiências e iniciativas de governo aberto</b>;</li>
					    <li>A difusão do conhecimento de existência de <b>mecanismos internos e externos de combate à corrupção</b>, fomentando o <b>controle social</b> e disseminando a cultura de atendimento às exigências de <b>programas de integridade (compliance)</b>, além de propiciar uma <b>educação política</b> que capacite o cidadão para a <b>avaliação e monitoramento de políticas públicas</b>.</li>
					    <li>A difusão do conhecimento das <b>estruturas públicas</b> e suas <b>competências</b> e a capacitação para a <b>interação com o Poder Público</b> de forma ética e atendendo a programas de integridade (<b>formação de relações governamentais</b>).</li>
					</ol>
				</div>
			</CommentsContext>
			<CommentsContext :id="5" :context="'ITEM 2.3'">
				<div>
					<b>2.3.</b>  A 4ª edição do Edital de Credenciamento de Agentes de Governo Aberto terá sua primeira etapa com a contratação de 32 (trinta e dois) Agentes, com a concessão de bolsa com duração de 04 (quatro) meses no decorrer do segundo semestre de 2019.
					<p><b>2.3.1.</b> O candidato interessado em se credenciar como Agente de Governo Aberto deve inscrever um projeto de <b>oficina</b> inserido nas categorias descritas no item 6.1 atendendo aos objetivos, diretrizes e orientações do programa.</p>
					<p><b>2.3.2.</b> Por <b>“oficina”</b> entende-se como conjunto de atividades em metodologias ativas que visam formar e capacitar o participante, ampliando seu conhecimento e desenvolvendo habilidades específicas.</p>
					<p><b>2.3.3.</b> os Agentes serão selecionados pela Comissão de Seleção prevista pelo item 10.1  de acordo com os critérios estabelecidos neste edital.</p>
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">3. DO PAGAMENTO</h3>
			<CommentsContext :id="6" :context="'ITEM 3.1'">
				<div>
					<b>3.1.</b> Cada Agente de Governo Aberto receberá bolsa pessoal e intransferível no valor bruto de até R$ 6.000,00 (seis mil  reais) pela realização das atividades no período da ocorrência das oficinas (04 meses) a partir da assinatura do Termo de Compromisso. 
					<p><b>3.1.1.</b> Os pagamentos serão efetuados mensalmente na proporção de horas de atividades presenciais executadas em cada mês, condicionados à comprovação em prestação de contas, conforme o item 14.2 deste edital, e à participação nos Encontros Formativos.</p>
					<p><b>3.1.2.</b> Sobre o valor mensal de pagamento incidirá os tributos conforme a legislação vigente, incorrendo pagamento de INSS e, quando o pagamento for superior ao limite de isenção de tributação, incorrerá pagamento de IR.</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="7" :context="'ITEM 3.2'">
				<div>
					<b>3.2.</b> O valor ofertado de bolsa refere-se à atividade e ao seu respectivo planejamento, não sendo os demais custos como produção de materiais e cartilhas, cópias reprográficas, deslocamento, alimentação e outros arcados pela Prefeitura de São Paulo.
					<p><b>3.2.1.</b> As horas de atividade de planejamento são presumidas como existentes na proporção de 30 minutos de planejamento para cada hora de oficina ministrada.</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="8" :context="'ITEM 3.3'">
				<div>
					<b>3.3.</b> O valor da bolsa está condicionado à efetiva execução da oficina e sua não ocorrência, independentemente do motivo, não ensejará qualquer pagamento ou reembolso.
				</div>
			</CommentsContext>
			<CommentsContext :id="9" :context="'ITEM 3.4'">
				<div>
					<b>3.4.</b> A concessão da bolsa ao Agente não gera qualquer tipo de vínculo empregatício com a Prefeitura de São Paulo.
				</div>
			</CommentsContext>
			<CommentsContext :id="10" :context="'ITEM 3.5'">
				<div>
					<b>3.5.</b> A relação jurídica entre a Prefeitura de São Paulo e o Agente de Governo Aberto é intransferível a terceiros, sendo de responsabilidade única e exclusiva do Agente qualquer auxílio que venha a utilizar (tais quais assessores, monitores, ajudantes ou estagiários), não configurando qualquer vínculo destes com o município ou com o Programa Agentes de Governo Aberto.
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">4. DO AGENDAMENTO E ARTICULAÇÃO DAS OFICINAS</h3>
			<CommentsContext :id="11" :context="'ITEM 4.1'">
				<div>
					<b>4.1.</b> O Agente será responsável pelo agendamento e articulação das oficinas em equipamentos públicos previamente informados pela organização ou locais de sua rede de atuação, contanto que sejam condizentes com as finalidades do programa, e mediante prévio acordo com a Supervisão para Assuntos de Governo Aberto, não podendo ser realizadas em locais de acessos restritos, com impedimentos jurídicos, ou que não disponham de condições mínimas de segurança e funcionamento.
					<p><b>4.1.1.</b>. A realização das oficinas em espaços privados não poderá restringir o acesso de interessados. </p>
					<p><b>4.1.2.</b> Os espaços destinados às oficinas, sendo públicos ou privados, não podem ter capacidade inferior à 30 participantes.
						<p><b>4.1.2.1.</b> A realização de oficinas em locais que não atendam às exigências está condicionada à submissão de aprovação formal do Núcleo de Gestão do Edital;</p>
					</p>
					<p><b>4.1.3.</b> A lista de equipamentos públicos disponíveis para a realização das oficinas será entregue por meio eletrônico aos Agentes na data da assinatura do contrato constando endereço, meios de contato, capacidade de público e equipamentos eletrônicos disponíveis.</p>
					<p><b>4.1.4.</b> No Anexo VI deste edital consta lista de datas e locais já previamente agendados pela Supervisão para Assuntos de Governo Aberto, e os Agentes credenciados serão designados após assinatura do Termo de Compromisso.</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="12" :context="'ITEM 4.2'">
				<div>
					<b>4.2.</b> Em caso de não realização da oficina o Agente deverá relatar os motivos à Supervisão para Assuntos de Governo Aberto anexando comprovantes quando necessário, e reagendar de acordo com os itens anteriores.
				</div>
			</CommentsContext>
			<CommentsContext :id="13" :context="'ITEM 4.3'">
				<div>
					<b>4.3.</b> O Agente deve realizar as oficinas e atividades de planejamento em todos os quatro meses do contrato, preferencialmente distribuídas na proporção de 15 horas mensais, sendo 10 (dez) horas de atividades presenciais (oficinas) e 5 (cinco) horas de atividades de planejamento;
				</div>
			</CommentsContext>
			<CommentsContext :id="14" :context="'ITEM 4.4'">
				<div>
					<b>4.4.</b> Remanejamentos para outros locais, ou mudanças de datas, quando por vontade do Agente, deverão ser solicitados à Supervisão para Assuntos de Governo Aberto, com as respectivas justificativas e comprovantes, quando necessário.
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">5. DO CRONOGRAMA</h3>
			<CommentsContext :id="15" :context="'ITEM 5.1'">
				<div>
					<b>5.1.</b> O cronograma do programa “Agentes de Governo Aberto” seguirá as seguintes etapas:
					<ol type="a">
					    <li>Período de inscrição de interessados;</li>
					    <li>Publicação do resultado preliminar dos aprovados pela Comissão de Seleção;</li>
					    <li>Prazo de recurso dos não aprovados;</li>
					    <li>Publicação da homologação do resultado final;</li>
					    <li>Assinatura dos Termos de Compromisso e evento solene de diplomação como “Agente de Governo Aberto 2019”;</li>
					    <li>Execução das oficinas;</li>
					    <li>Encerramento da edição 2019 do programa.</li>					    
					</ol>
				</div>
			</CommentsContext>
			<CommentsContext :id="16" :context="'ITEM 5.2'">
				<div>
					<b>5.2.</b> O credenciamento dos Agentes terá validade a partir da homologação do seu resultado final publicado no Diário Oficial da Cidade até o dia 15 de dezembro de 2019;
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">6. DAS CATEGORIAS DOS PROJETOS DE OFICINAS</h3>
			<CommentsContext :id="17" :context="'ITEM 6.1'">
				<div>
					<b>6.1.</b> Os projetos deverão ser adequados a uma das seguintes categorias:
					<p>
						<b>6.1.1.</b> <b>Categoria 1 - Transparência, acesso à informação e política de dados abertos,</b> tendo como orientação exemplificativa a realização de oficinas relacionadas à temática de transparência ativa e passiva; à apresentação, uso e difusão de técnicas de pedido de acesso à informação; à realização de atividades de tratamento e análise de dados públicos, com diferentes formas de visualização e a reutilização de informações públicas; às atividades que utilizem as novas plataformas de Dados Abertos; às atividades relacionadas à utilização e coleta de dados do Portal da Transparência, do Diário Oficial da cidade de São Paulo e do Sistema de Orçamento e Finanças, dentre outras pertinentes ao tema.
					</p>
					<p>
						<b>6.1.2.</b> <b>Categoria 2 - Participação Social e Mapeamento Colaborativo:</b> tendo como orientação exemplificativa a realização de oficinas relacionadas à produção e difusão de metodologias e ações para a gestão de projetos participativos; às esferas de participação (conselhos, terceiro setor, etc.), fomentando o desenvolvimento da sociedade civil organizada; à apresentação de técnicas e metodologias para promoção e fortalecimento da participação, inclusão, diversidade e colaboração no âmbito das políticas públicas; às atividades voltadas à realização e difusão de mapeamentos colaborativos; às atividades de técnicas de georreferenciamento e outras técnicas de mapeamento.
					</p>
					<p>
						<b>6.1.3.</b> <b>Categoria 3 - Inovação, Tecnologia Aberta e Inclusão Digital:</b> tendo como orientação exemplificativa a realização de oficinas destinadas ao fomento de inovações tecnológicas e conhecimento dos instrumentos já existentes de governo aberto e demais políticas públicas do município; ao desenvolvimento de meios lúdicos de ampliação da capacitação de participação cívica, como jogos, aplicativos de aparelhos móveis, programas de computador, etc.; às oficinas formativas práticas de uso, desenvolvimento de hardwares e softwares livres e abertos, de segurança da informação e de inovações sociais e colaborativas.
					</p>
					<p>
						<b>6.1.4.</b> <b>Categoria 4 - Comunicação social, Cultura digital, Mídias alternativas e colaborativas:</b> tendo como orientação exemplificativa a realização de oficinas relacionadas ao fomento de práticas de governo aberto, promoção da cultura digital e/ou  criação de ações de comunicação, através da produção, edição e finalização de arquivos em multimídia, a partir do uso de software livre, de técnicas de produção criativa, de comunicação não escrita e de educomunicação; apresentação, criação e difusão de ferramentas de conhecimento colaborativo disponíveis em redes e mecanismos digitais e não digitais, para fomento e divulgação de políticas públicas através de mídias alternativas e colaborativas.
					</p>
					<p>
						<b>6.1.5.</b> <b>Categoria 5 - Educação Política e mecanismos de Combate à Corrupção:</b> tendo como orientação exemplificativa a realização de oficinas relacionadas aos procedimentos administrativos e burocráticos da Prefeitura de São Paulo, especialmente com as temáticas de contratação pública e licitações, fomentando a participação cidadã quando possível; atividades de disseminação de programas, projetos e políticas públicas do governo municipal; atividades relacionadas à avaliação e monitoramento de políticas públicas de Governo Aberto e correlacionadas; oficinas voltadas à discussões sobre desafios e cocriação de soluções para a Prefeitura de São Paulo; produção de indicadores de políticas públicas da Prefeitura de São Paulo; atividades introdutórias, intermediárias e avançadas sobre a estrutura e funcionamento da máquina pública. 
					</p>
					<p>
						<b>6.1.6.</b> <b>Participação Legislativa, Estrutura Pública Municipal e Atividades de Relações Governamentais Éticas e Adequadas:</b> tendo como orientação exemplificativa a realização de oficinas relacionadas aos processos legislativos tanto do Poder Legislativo (leis), quanto do Poder Executivo (portarias e decretos); meios de sugerir e influenciar a atividade dos legisladores e dos gestores de políticas públicas atendendo às exigências éticas e de programas de integridade (formação de profissionais de Relações Governamentais); percepção das competências legislativas e administrativas dos entes da Federação, com ênfase nas municipais; percepção de que a democracia se concretiza em maior medida na esfera municipal; percepção da distinção da atividade legislativa e da atividade administrativa e das atribuições dos Poderes Legislativo e Executivo; técnicas de logística e capacitação para assessoramento político.
					</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="18" :context="'ITEM 6.2'">
				<div>
					<b>6.2.</b> A Categoria deve estar indicada na capa do projeto e a adequação deve ser justificada de forma clara, estabelecendo quais conhecimentos e habilidades pretende desenvolver nos participantes e por qual motivo considera inseridas em uma das seis categorias.
					<p>
						<b>6.2.1.</b> Em caso de possibilidade de adequação a mais de uma categoria, o candidato deve escolher pela que considera mais adequada, podendo, entretanto, ressaltar em sua justificativa a múltipla adequação.
					</p>
					<p>
						<b>6.2.2.</b> A Comissão de Seleção aprovará os melhores projetos por categoria, sendo 5 (cinco) bolsas para cada uma das categorias previstas pelos itens 6.1.1 ao 6.1.4 e 6 (seis) bolsas para as categorias 6.1.5 e 6.1.6.
					</p>
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">7. DAS ATRIBUIÇÕES DO AGENTE DE GOVERNO ABERTO</h3>
			<CommentsContext :id="19" :context="'ITEM 7.1'">
				<div>
					<b>7.1.</b> O Agente de Governo Aberto selecionado terá como atribuições:
					<p>
						<b>7.1.1.</b> Realizar 60 (sessenta) horas de atividades, na proporção de 40 horas (quarenta) horas de atividades presenciais com aplicação de metodologias ativas e 20 (vinte) horas de atividades de planejamento, conforme descrito no Anexo V (Projeto de Atividade), apresentado e selecionado, e no Plano de Trabalho elaborado em conformidade com as diretrizes do Núcleo de Gestão do Edital (item 9.5, b);
						<p>
							<b>7.1.1.1.</b> O Agente deverá adequar suas 20 (vinte) horas de atividades de planejamento às atividades presenciais exercidas, observando o estabelecido pelo item 3.2.1.
						</p>
						<p>
							<b>7.1.1.2.</b> O Agente deverá adequar suas 40h de oficinas presenciais em ciclos de atividades de, no máximo, 5 horas, obedecendo a um dos critérios abaixo:
							<ol type="a">
							    <li>1 (uma) oficina de módulo único de 5h, sendo ministrada para públicos diferentes em 8 datas distintas, distribuídas pelos quatro meses do programa, preferencialmente totalizando 10 horas por mês;</li>
							    <li>1 (uma) oficina de módulo único de 3h20 h de atividades presenciais, sendo ministrada para públicos diferentes em 12 datas distintas, distribuídas pelos quatro meses do programa, preferencialmente totalizando 10 horas por mês </li>
							    <li>1 (uma) oficina de módulo único de 2h30 de atividades presenciais, sendo ministrada para públicos diferentes em 16 datas distintas, distribuídas pelos quatro meses do programa, preferencialmente totalizando 10 horas por mês</li>
							    <li>1 (uma) oficina desmembrada em dois módulos de 5 horas cada, sendo ministrada para públicos diferentes em 4 edições, distribuídas pelos quatro meses do programa, preferencialmente totalizando 10 horas por mês. </li>
							    <li>1 (uma) oficina desmembrada em três módulos de 3h20 horas cada, sendo ministrada para públicos diferentes em 4 edições, distribuídas pelos quatro meses do programa, preferencialmente totalizando 10 horas por mês;</li>
							    <li>1 (uma) oficina desmembrada em quatro módulos de 2h30 cada, sendo ministrada para públicos diferentes em 4 edições, distribuídas pelos quatro meses do programa, preferencialmente totalizando 10 horas por mês</li>
							</ol>							
						</p>
						<p>
							<b>7.1.1.3.</b> Outros formatos ou alterações após aprovação deverão ser submetidos à análise da Supervisão para Assuntos de Governo Aberto que poderá aprovar, ou instruir para a adequação que melhor atenda ao interesse público.
						</p>
					</p>
					<p>
						<b>7.1.2.</b> Produzir e disponibilizar recursos e materiais relacionados às oficinas formativas que propuser, tais como apostilas, apresentações, tutoriais, certificados para os participantes, em meio impresso ou digital, entre outros, observado o disposto pelo item 3.2
					</p>
					<p>
						<b>7.1.3.</b> Documentar e comprovar as oficinas formativas realizadas por meio da entrega digital de lista de presença e Relatório Mensal nos modelos padrões fornecidos pela Supervisão para Assuntos de Governo Aberto; no mínimo 3 (três) registros fotográficos por oficina, realizado com recursos do próprio Agente (em que registre a sua presença e do público participante). A lista de presença também deverá ser enviada fisicamente ao Núcleo de Gestão do Edital.
					</p>
					<p>
						<b>7.1.4.</b> Promover, articular e divulgar as oficinas em parceria com a Prefeitura de São Paulo;
					</p>
					<p>
						<b>7.1.5.</b> Participar de todos os encontros formativos do programa Agentes de Governo Aberto propostos pela Prefeitura de São Paulo, conforme itens 14.5 deste Edital;
					</p>
					<p>
						<b>7.1.6.</b> Apresentar Relatório Final sobre o desenvolvimento das oficinas formativas realizadas durante o ciclo, no padrão fornecido pela Supervisão para Assuntos de Governo Aberto;
					</p>
				</div>
			</CommentsContext>
	 		<CommentsContext :id="20" :context="'ITEM 7.2'">
	 			<div>
	 				<b>7.2.</b> Após aprovação pela Comissão de Seleção, a equipe Supervisão para Assuntos de Governo Aberto poderá adequar o título da oficina, seu formato e duração para melhor atender ao interesse público.
	 				<p>
	 					<b>7.2.1.</b> O Agente poderá participar junto à equipe da Supervisão para Assuntos de Governo Aberto das discussões sobre eventuais alterações em seu projeto, e seus posicionamentos e colocações deverão ser atendidos na maior medida possível, respeitada, primordialmente, o interesse público e objetivos do programa.
	 				</p>
	 				<p>
	 					<b>7.2.2.</b> O título de divulgação da oficina deverá ser chamativo e em linguagem cidadã, devendo ser aprovado pela equipe de comunicação da Supervisão para Assuntos de Governo Aberto.
	 				</p>
	 			</div>
			</CommentsContext>
			<CommentsContext :id="21" :context="'ITEM 7.3'">
				<div>
					<b>7.3.</b> A realização das oficinas deverá contemplar ao máximo possível as diversas regiões da cidade, nas áreas de abrangência das Subprefeituras, sendo vedada a concentração da mesma oficina no território de uma única Subprefeitura.
				</div>
			</CommentsContext>
			<CommentsContext :id="22" :context="'ITEM 7.4'">
				<div>
					<b>7.4.</b> As ações dos Agentes deverão ser desenvolvidas visando a inclusão de diferentes públicos e atendendo às diversidades sociais.
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">8. DAS EXIGÊNCIAS PARA PARTICIPAÇÃO</h3>
			<CommentsContext :id="23" :context="'ITEM 8.1'">
				<div>
					<b>8.1.</b> Poderão participar do credenciamento pessoas:
					<ol type="a">
					    <li>maiores de 18 (dezoito) anos, sem restrição máxima de idade;</li>
						<li>que comprovem domicílio, vínculo de estudo ou vínculo de trabalho no município de São Paulo;</li>
						<li>com comprovada atuação e/ou conhecimento na temática de interesse há, no mínimo, 01 (um) ano;</li>
						<li>com disponibilidade de horário para oferecer as oficinas formativas propostas e comparecer aos Encontros Formativos obrigatórios, nos termos do item 14.5.</li>
					</ol>
				</div>
			</CommentsContext>
			<CommentsContext :id="24" :context="'ITEM 8.2'">
				<div>
					<b>8.2.</b> Não poderão participar:
					<ol type="a">
						<li>pessoas físicas que não cumprirem todas as exigências do item 8.1 deste Edital;</li>
						<li>funcionários públicos da Administração Direta e Indireta da Prefeitura de São Paulo;</li>
						<li>pessoas que tenham ocupado cargo público de qualquer espécie no município de São Paulo nos últimos 5 (cinco) anos.</li>
						<li>parentes de até segundo grau, cônjuge ou companheiro(a) de membro da Comissão de Seleção ou de servidores vinculados ou lotados na Secretaria do Governo Municipal ou na Controladoria Geral do Município; </li>
						<li>estudantes que possuam contrato de estágio em vigência com a Prefeitura de São Paulo lotados nas Secretarias que compõem a Comissão de Seleção do Edital, definida pela Portaria Conjunta <mark>N° xxxx/2019 – SGM/CGM.</mark></li>
					</ol>
				</div>
			</CommentsContext>
			<CommentsContext :id="25" :context="'ITEM 8.3'">
				<div>
					<b>8.3.</b> É imprescindível que o Agente possua ou esteja em condições de abrir conta corrente no Banco do Brasil para recebimento da bolsa.
				</div>				
			</CommentsContext>
			<CommentsContext :id="26" :context="'ITEM 8.4'">
				<div>
					<b>8.4.</b> Os Agentes credenciados poderão participar de outros projetos e programas financiados pela Prefeitura de São Paulo, desde que não correspondam ao mesmo projeto a ser desenvolvido no âmbito do programa Agentes de Governo Aberto e desde que o financiamento pelo programa não apresente impeditivo para esta contratação.
				</div>
			</CommentsContext>
			<CommentsContext :id="27" :context="'ITEM 8.5'">
				<div>
					<b>8.5.</b> O Agente selecionado deverá ter no mínimo 1 (um) dia útil da semana em horário comercial livre para realizar as oficinas formativas.
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">9. DAS INSCRIÇÕES DOS AGENTES DE GOVERNO ABERTO</h3>
			<CommentsContext :id="28" :context="'ITEM 9.1'">
				<div>
					<b>9.1.</b> Para a inscrição será realizada online, o projeto deverá ser enviado por meio da plataforma SP CULTURA (http://spcultura.prefeitura.sp.gov.br/).
					<p>
						<b>9.1.1.</b> Excepcionalmente, a inscrição poderá também ser realizada por meio físico, <mark>no dia 12 de abril de 2019, das 10h às 17h, na sede da Secretaria do Governo Municipal (Edifício Matarazzo - Viaduto do Chá, n° 15, 7ª andar)</mark>, devendo ser entregues todos os documentos requeridos para a inscrição, conforme disposto no item 9.5 deste Edital.
					</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="29" :context="'ITEM 9.2'">
				<div>
					<b>9.2.</b> O candidato deve se cadastrar na Plataforma SP Cultura como “Agente”, clicando no link “Entrar”, criando uma conta com nome, sobrenome, e-mail e senha e preenchendo todos os campos no respectivo perfil de Agente.
				</div>
			</CommentsContext>
			<CommentsContext :id="30" :context="'ITEM 9.3'">
				<div>
					<b>9.3.</b> No campo “Projetos”, o Agente deverá localizar “Agentes de Governo Aberto 2019”, utilizando o filtro “Editais”.
					<p>
						<b>9.3.1.</b> Apenas Agentes com cadastro devidamente preenchido na plataforma SP CULTURA (item 9.2) terão acesso ao processo de inscrição e poderão enviar seu projeto.
					</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="31" :context="'ITEM 9.4'">
				<div>
					<b>9.4.</b> O Agente deverá selecionar uma das categorias elencadas no item 6.1 e observadas as temáticas estabelecidas no item 2.2.
				</div>
			</CommentsContext>
			<CommentsContext :id="32" :context="'ITEM 9.5'">
				<div>
					<b>9.5.</b> O Agente deverá anexar na sua inscrição na plataforma SP Cultura as seguintes informações:
					<ol type="a">
						<li>Declaração de Aceite das condições do Edital (Anexo I);</li>
						<li>Projeto de Atividade seguindo modelo do Anexo V, com, no máximo, 5 (cinco) páginas, <b>respeitado o dever de anonimato</b> estabelecido pelo item 9.5.b.1, trazendo o detalhamento das atividades a serem desenvolvidas e contendo os seguintes itens obrigatórios: 
							<ol type="1">
								<li>título do projeto e título de divulgação da oficina, podendo ser idênticos, observada a determinação do item 7.2.2; </li>
								<li>categoria escolhida;</li>
								<li>resumo do projeto; </li>
								<li>objetivo (o que pretende atingir); </li>
								<li>justificativa (como o seu projeto contribui para um governo aberto e por qual motivo considera adequado à categoria escolhida);</li>
								<li>resultados esperados (de que forma a sua oficina impactará os participantes e a gestão pública e qual será a usabilidade e a aplicação dos conhecimentos adquiridos em sua atividade formativa); </li>
								<li>descrição da metodologia ativa da oficina; </li>
								<li>público alvo, caso tenha uma coletividade específica que deseje atingir, sendo vedada qualquer forma de exclusão aos demais interessados; </li>
								<li>recursos necessários (espaços públicos e estrutura física para desenvolvimento da atividade, como a disponibilidade de equipamentos multimídia), observado o previsto no item 3.2 deste Edital;</li>
								<li>cronograma da oficina (como serão organizadas as horas/aula, as atividades propostas, observado o disposto no item 7.1.1.2.)</li>
							</ol>
							<p>b.1) O projeto obrigatoriamente deve ser redigido <b>sem qualquer meio de identificação dos dados pessoais do candidato</b>, sendo observado o disposto pelo item 9.8.1.</p>
						</li>
						<li>currículo adequado ao projeto, com no máximo 2 (duas) páginas, incluindo informações sobre escolarização, histórico profissional e endereço completo. O currículo pode conter informações como formação, participação em grupos, coletivos, redes ou em outros projetos que comprovem experiência na realização de atividades pedagógicas;</li>
						<li>comprovante ou declaração de residência atual;</li>
						<li>Declaração de Disponibilidade do Agente para exercer as oficinas formativas (Anexo II).</li>
					</ol>
					<p>
						<b>9.5.1.</b> Os documentos anexados deverão estar preferencialmente em formato “odt” ou “.doc”, também sendo aceitos em formato ”pdf”, em qualquer hipótese, não podendo ultrapassar o limite de 8 MB.
					</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="33" :context="'ITEM 9.6'">
				<div>
					<b>9.6.</b> Depois de finalizadas as etapas anteriores, o Agente deverá confirmar sua inscrição clicando em “Enviar Inscrição”, cessando sua autonomia para alterar os arquivos, complementar ou substituir informações de seu projeto.
				</div>
			</CommentsContext>
			<CommentsContext :id="34" :context="'ITEM 9.7'">
				<div>
					<b>9.7.</b> Para conferir o envio de sua inscrição e certificar-se de que está efetivamente cadastrado, o Agente poderá acessar o item “Minhas Inscrições” em seu Painel de Controle e verificar se a respectiva inscrição ao Edital está marcada como “enviada”.
				</div>
			</CommentsContext>
			<CommentsContext :id="35" :context="'ITEM 9.8'">
				<div>
					<b>9.8.</b> Serão desclassificados os candidatos que não apresentarem todos os documentos solicitados no item 9.5 deste Edital ou que não se enquadrarem nas exigências de participação descritas no item 8.
					<p><b>9.8.1.</b> - Serão desclassificados, também, os candidatos que de qualquer forma se identificarem no Projeto de Atividade, <b>devendo ser mantido o anonimato</b> para o julgamento pela Comissão.</p>
					<p><b>9.8.2.</b> - O candidato que de qualquer forma tentar burlar o caráter anônimo do julgamento pela Comissão será desclassificado e a ele poderá ser atribuída a pena estabelecida pelo item 16.1.d de declaração de inidoneidade, sem prejuízo das demais consequências criminais.</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="36" :context="'ITEM 9.9'">
				<div>
					<b>9.9.</b> Cada Agente poderá realizar no máximo 1 (uma) inscrição de projeto por categoria.
					<p><b>9.9.1.</b> Desrespeitada essa regra, apenas o primeiro cadastro será considerado.</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="37" :context="'ITEM 9.10'">
				<div>
					<b>9.10.</b>. Caso existam outras pessoas que colaboraram com o projeto inscrito pelo Agente, os nomes poderão ser indicados na Ficha de Identificação (Anexo IV).
				</div>
			</CommentsContext>
			<CommentsContext :id="38" :context="'ITEM 9.11'">
				<div>
					<b>9.11.</b>. É vedada a recandidatura de projetos idênticos aos aprovados nas edições anteriores do programa e o plágio de qualquer tipo, sujeitando o Agente à desclassificação imediata
					<p><b>9.11.1.</b> Em caso de plágio o autor plagiado deverá ser informado da utilização de seu trabalho e a pena de declaração de inidoneidade estabelecida pelo item 16.1.d poderá ser aplicada ao candidato sem prejuízo das demais consequências jurídicas estabelecidas por lei.</p>
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">10. DA COMISSÃO DE SELEÇÃO E SUAS ATRIBUIÇÕES</h3>
			<CommentsContext :id="39" :context="'ITEM 10.1'">
				<div>
					<b>10.1</b>. A avaliação dos projetos será realizada por uma <b>Comissão de Seleção</b> composta por 7 (sete) membros, conforme definido pela Portaria Conjunta Nº XX/2019 – SGM/CGM, sendo 01 (um) indicado pela Controladoria Geral do Município, 01 (um) indicado pela Secretaria Municipal de Inovação e Tecnologia, 01 (um) indicado pela Secretaria Municipal de Educação, 01 (um) indicado pela Secretaria Municipal de Direitos Humanos e Cidadania, 01 (um) indicado pela Secretaria Municipal de Gestão, 01 (um) indicado pela Secretaria do Governo Municipal e 01 (um) indicado pela Secretaria Municipal de Urbanismo e Licenciamento.
					<p><b>10.2.1.</b> O Núcleo de Gestão do Edital, ao receber os arquivos do projeto e dos documentos exigidos no item 9.5, atribuirá ao candidato um número de cadastro e enviará para a Comissão de Seleção apenas o arquivo do projeto enumerado, assim, sem qualquer identificação dos dados pessoais do candidato, garantindo, assim, seu anonimato.</p>
					<p><b>10.2.</b> A Comissão de Seleção é soberana e decidirá, no âmbito de sua competência pelos 32 projetos que melhor atendem às diretrizes e objetivos estabelecidos no item 2, e os critérios de seleção estabelecidos pelo item 11, cabendo recurso no prazo de 2 (dois) dias contados da publicação da lista preliminar de credenciados.</p>
					<p><b>10.2.1.</b> O recurso deverá ser endereçado ao Núcleo de Gestão do Edital instituído pela Portaria Conjunta nº XXX/2019 SGM/CGM, nos termos do item XXX da Portaria.</p>
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">11. DOS CRITÉRIOS DE SELEÇÃO</h3>
			<CommentsContext :id="40" :context="'ITEM 11.1'">
				<div>
					<b>11.1.</b> A Comissão de Seleção avaliará e classificará os projetos inscritos por categoria conforme item 6, considerando as diretrizes, os objetivos e as exigências especificadas neste Edital.
				</div>
			</CommentsContext>
			<CommentsContext :id="41" :context="'ITEM 11.2'">
				<div>
					<b>11.2.</b> Os critérios adotados para a avaliação dos projetos e as respectivas pontuações são:
					<table>
					  <tr>
					    <th><br><br>Critérios<br><br></th>
					    <th><br><br>Questões a serem consideradas<br><br></th>
					    <th><br><br>Pontuação<br><br></th>
					  </tr>
					  <tr>
					    <td colspan="3"><br><center>Avaliação técnica dos projetos</center><br></td>
					  </tr>
					  <tr>
					    <td>Adequação do conteúdo do projeto à temática de Governo Aberto e à categoria escolhida</td>
					    <td>Critério que avalia o projeto de acordo com os preceitos do governo aberto (participação social, transparência e linguagem cidadã, integridade, inovação, tecnológica e a aplicação de ferramentas livres), e com a Categoria apontada pelo candidato</td>
					    <td>Caráter eliminatório</td>
					  </tr>
					  <tr>
					    <td>Adequação formal do Projeto às especificações previstas no Edital</td>
					    <td>Critério que avalia o projeto cuja apresentação formal e de conteúdo esteja de acordo com as disposições constantes do Credenciamento.</td>
					    <td>0 a 1 ponto</td>
					  </tr>
					  <tr>
					    <td>Interesse público do projeto</td>
					    <td>Critério que avalia o impacto social, cultural e formativo da ação.</td>
					    <td>0 a 3 pontos</td>
					  </tr>
					  <tr>
					    <td>Viabilidade do projeto e à adequação dos métodos de trabalho</td>
					    <td>Critério que avalia o projeto cuja viabilidade esteja tecnicamente demonstrada quanto ao tempo e espaço de execução e cuja metodologia apresentada em Projetos de Atividades demonstre capacidade técnica para trabalhar a categoria do projeto. Avaliação da metodologia ativa aplicada na oficina.</td>
					    <td>0 a 2 pontos<br></td>
					  </tr>
					  <tr>
					    <td>Transversalidade</td>
					    <td>Critério que avalia se o projeto abarca mais de um preceito de governo aberto, se contempla mais do que uma<br> categoria.</td>
					    <td>0 a 2 pontos</td>
					  </tr>
					  <tr>
					    <td>Inovação do projeto</td>
					    <td>Critério que avalia a inovação do projeto em relação às edições anteriores e também à setorialização do mesmo.</td>
					    <td>0 a 1 ponto<br></td>
					  </tr>
					  <tr>
					    <td>Avaliação da experiência na categoria escolhida</td>
					    <td>Critério que avalia a qualificação do Agente acerca do tema e seu conhecimento e experiência na categoria escolhida, por meio da análise do campo “experiências práticas” do projeto.<br></td>
					    <td>0 a 1 ponto<br></td>
					  </tr>
					</table>
				</div>
			</CommentsContext>
			<CommentsContext :id="42" :context="'ITEM 11.3'">
				<div>
					<b>11.3.</b> Feita a avaliação técnica dos projetos e do Agente, se for o caso, será aplicada a pontuação extra conforme o critério abaixo:
					<table>
						<tr>
							<th colspan="2">Pontuação Extra: Os projetos receberão pontuação extra caso o Agente atenda ao requisito abaixo:</th>
						</tr>
						<tr>
							<td>Índice de Vulnerabilidade Social do local de residência do Agente (item 11.4)</td>
							<td>1 ponto</td>
						</tr>
					</table>
				</div>
			</CommentsContext>
			<CommentsContext :id="43" :context="'ITEM 11.4'">
				<div>
					<b>11.4.</b> Os candidatos que comprovarem moradia nos territórios classificados como mais vulneráveis, conforme as definições estabelecidas pelo Índice Paulista de Vulnerabilidade Social - IPVS 2015, da Fundação Sistema Estadual de Análise de Dados – SEADE, especificamente os “grupos 3, 4, 5 e 6”, tendo em vista a finalidade de expansão do Programa “Agentes de Governo Aberto”, receberão um ponto extra após a avaliação dos demais critérios estabelecidos neste edital.
					<p><b>11.4.1.</b> O Índice Paulista de Vulnerabilidade Social - IPVS 2015 encontra-se disponível em:
					&lt;<a target="_blank" href="http://www.prefeitura.sp.gov.br/cidade/secretarias/upload/assistencia_social/arquivos/atlas_socioassistencial_sp_2015.pdf">http://www.prefeitura.sp.gov.br/cidade/secretarias/upload/<br />assistencia_social/arquivos/atlas_socioassistencial_sp_2015.pdf</a>&gt; e disponível também no site do Geosampa: <a href="http://geosampa.prefeitura.sp.gov.br/PaginasPublicas/_SBC.aspx" target="_blank">http://geosampa.prefeitura.sp.gov.br/PaginasPublicas/_SBC.aspx</a>
					</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="44" :context="'ITEM 11.5'">
				<div>
					<b>11.5.</b> Os projetos serão classificados em ordem decrescente de pontos.
				</div>
			</CommentsContext>
			<CommentsContext :id="45" :context="'ITEM 11.6'">
				<div>
					<b>11.6.</b> Serão classificados somente projetos que obtiverem nota mínima de 6,0 (seis) pontos.
				</div>
			</CommentsContext>
			<CommentsContext :id="46" :context="'ITEM 11.7'">
				<div>
					<b>11.7.</b> Caso o Agente tenha sido classificado em mais de uma categoria, será selecionado para participar do programa Agentes de Governo Aberto um único projeto, escolhendo-se o melhor classificado.
				</div>
			</CommentsContext>
			<CommentsContext :id="47" :context="'ITEM 11.8'">
				<div>
					<b>11.8.</b> Caso não haja o mínimo de projetos aprovados por categoria, conforme estabelecido pelo item 6.1, serão selecionados projetos de outras categorias, conforme a ordem decrescente de pontos dos projetos aprovados em todo o programa.
				</div>
			</CommentsContext>
			<CommentsContext :id="48" :context="'ITEM 11.9'">
				<div>
					<b>11.9.</b> Havendo empate na nota final, terá preferência o projeto: 
					<ol type="a">
						<li>que possuir a maior pontuação no critério <b>“Interesse público do projeto”</b>;</li>
						<li>que possuir a maior pontuação no critério <b>“Avaliação da experiência na categoria escolhida”</b>;</li>
						<li>cujo Agente tenha a idade mais elevada.</li>
					</ol>
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">12. DO RESULTADO FINAL E DO RECURSO</h3>
			<CommentsContext :id="49" :context="'ITEM 12.1'">
				<div>
					<b>12.1.</b> A lista de Agentes e respectivos projetos classificados, será publicada no Diário Oficial da Cidade de São Paulo com a pontuação em ordem decrescente.
				</div>
			</CommentsContext>
			<CommentsContext :id="50" :context="'ITEM 12.2'">
				<div><b>12.2.</b> Caberá recurso do resultado no prazo de 5 (cinco) dias úteis da publicação do resultado no Diário Oficial da Cidade de São Paulo, dirigido ao Núcleo de Gestão do Edital do programa Agentes de Governo Aberto, a ser entregue em via física impressa e assinada, pessoalmente na Secretaria do Governo Municipal <mark>(Viaduto do Chá, n°15 – Edifício Matarazzo, 7º andar, das 10h às 17h).</mark>
					<p><b>12.2.1.</b> O Núcleo de Gestão do Edital irá reconvocar a Comissão de Seleção para que avalie os eventuais recursos.</p>
					<p><b>12.2.2.</b> O Agente deverá ser objetivo e consistente em seu recurso.</p>
					<p><b>12.2.3.</b> Não serão conhecidos recursos enviados pelo correio, fac-símile, correio eletrônico ou qualquer outro meio de comunicação.</p>
					<p><b>12.2.4.</b> A Comissão de Seleção constitui última instância para recurso, sendo soberana em suas decisões, razão pela qual não caberão recursos adicionais.</p>
					<p>
						<b>12.2.5.</b> Serão indeferidos os recursos:
						<ol type="a">
							<li>Cujo teor desrespeite a Comissão de Seleção;</li>
							<li>Cuja fundamentação não corresponda à questão recorrida;</li>
							<li>Sem fundamentação e/ou com fundamentação inconsistente, incoerente ou os intempestivos.</li>
						</ol>
					</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="51" :context="'ITEM 12.3'">
				<div>
					<b>12.3.</b> A Comissão de Seleção terá o prazo de 5 (cinco) dias úteis para análise do recurso.
				</div>
			</CommentsContext>
			<CommentsContext :id="52" :context="'ITEM 12.4'">
				<div>
					<b>12.4.</b> As respostas de todos os recursos, quer procedentes ou improcedentes, serão levadas ao conhecimento dos inscritos na edição 2019 do Programa Agentes de Governo Aberto, por meio do site da Secretaria do Governo Municipal e o Diário Oficial da Cidade de São Paulo.
				</div>
			</CommentsContext>
			<CommentsContext :id="53" :context="'ITEM 12.5'">
				<div>
					<b>12.5.</b> Decididos os recursos, o certame será homologado pelas autoridades competentes.
				</div>
			</CommentsContext>
		 </section>
		 <section>
		  	<h3 class="titulo" indent="2">13. DAS CONDIÇÕES DE CONTRATAÇÃO DE AGENTES</h3>
		  	<CommentsContext :id="54" :context="'ITEM 13.1'">
		  		<p>
		  			<b>13.1.</b> A contratação de cada Agente de Governo Aberto será feita por processo administrativo próprio com fundamento no caput do artigo 25 da Lei Federal nº 8.666/93, que ficará vinculado ao Processo SEI nº 6073.2019/0000062-2;
		  		</p>
		  	</CommentsContext>
		  	<CommentsContext :id="55" :context="'ITEM 13.2'">
		  		<p>
		  			<b>13.2.</b> O apoio financeiro concedido aos projetos selecionados será repassado diretamente ao respectivo Agente.
		  		</p>
		  	</CommentsContext>
		  	<CommentsContext :id="56" :context="'ITEM 13.3'">
		  		<p>
		  			<b>13.3.</b> Após a aprovação na seleção, os Agentes receberão os recursos em parcelas mensais e proporcionais às horas realizadas conforme item 3, subsequentes à assinatura do Termo de Compromisso no período proposto pelo Núcleo de Gestão do Edital. 
		  			<p><b>13.3.1.</b> O Agente deverá fornecer seus dados bancários da conta corrente do Banco do Brasil para o recebimento da bolsa, conforme item 8.3.</p>
		  		</p>
		  	</CommentsContext>
		  	<CommentsContext :id="57" :context="'ITEM 13.4'">
		  		<p>
		  			<b>13.4.</b> Haverá convocação dos Agentes selecionados por meio de correspondência eletrônica, com inequívoca ciência e prazo de até <b>5 (cinco) dias úteis</b> após o recebimento para confirmação do interesse na contratação. Firmado o interesse, deverão ser apresentados, em data a ser agendada pela Supervisão para Assuntos de Governo Aberto, os documentos relacionados a seguir:
		  			<p>
		  				<ol type="a">
		  					<li>Fotocópia legível da Carteira de Identidade (RG ou CNH);</li>
							<li>Fotocópia legível do Registro no Cadastro de Pessoa Física – CPF;</li>
							<li>Fotocópia legível do comprovante de residência (conta de água, luz ou telefone) atual de no mínimo 2 (dois) meses de defasagem;</li>
							<li>Fotocópia do NIT/PIS/PASEP;</li>
							<li>Comprovante de situação cadastral do CPF, que pode ser obtido no site da Receita Federal, disponível no link:
							<a href="http://www.receita.fazenda.gov.br/Aplicacoes/ATCTA/cpf/ConsultaPublica.asp>" target="_blank">http://www.receita.fazenda.gov.br/Aplicacoes/ATCTA/cpf/ConsultaPublica.asp></a>;</li>
							<li>FDC – Ficha de Dados Cadastrais, disponível no link:
							<a href="https://ccm.prefeitura.sp.gov.br/login/contribuinte" target="_blank">https://ccm.prefeitura.sp.gov.br/login/contribuinte</a>;</li>
							<li>Caso não esteja cadastrado como contribuinte no município de São Paulo, declaração de não possuir inscrição no CCM de Pessoa Física, e não possuir débitos tributários junto à Fazenda do Município de São Paulo;</li>
							<li>Comprovante de regularidade perante a Fazenda do Município de São Paulo, emitindo Certidão Negativa de Débitos de Tributos Mobiliários, que pode ser obtida no link
							<a href="http://www3.prefeitura.sp.gov.br/certidaotributaria/forms/frmConsultaEmissaoCertificado.aspx" target="_blank">http://www3.prefeitura.sp.gov.br/certidaotributaria/forms/frmConsultaEmissaoCertificado.aspx</a>;</li>
							<li>Consulta ao Cadastro Informativo Municipal – CADIN, por meio do link <a href="http://www3.prefeitura.sp.gov.br/cadin/Pesq_Deb.aspx" target="_blank">http://www3.prefeitura.sp.gov.br/cadin/Pesq_Deb.aspx</a>;</li>
							<li>Certidão de Débitos relativos a Créditos Tributários Federais e à Dívida Ativa da União, por meio do link:
							<a href="http://www.receita.fazenda.gov.br/Aplicacoes/ATSPO/Certidao/CndConjuntaInter/InformaNICertidao.asp?Tipo=2" target="_blank">http://www.receita.fazenda.gov.br/Aplicacoes/ATSPO/Certidao/CndConjuntaInter/InformaNICertidao.asp?Tipo=2</a>.</li>
						</ol>
							<p>
								<b>13.4.1.</b> Os documentos deverão ser entregues na Secretaria do Governo Municipal - Supervisão para Assuntos de Governo Aberto (Viaduto do Chá, n° 15 – Edifício Matarazzo, 7º andar).
							</p>
		  			</p>
		  		</p>	
		  	</CommentsContext>
		  	<CommentsContext :id="58" :context="'ITEM 13.5'">
		  		<p>
		  			<b>13.5.</b> Na falta de documentação ou na hipótese de desistência do interessado no prazo estabelecido será convocado outro Agente, de acordo com a ordem de classificação.
		  			<p><b>13.5.1.</b> Nas hipóteses de desistência posteriores ao prazo do item 13.4, a substituição fica a critério do Núcleo de Gestão do Edital, podendo ser convocados outros Agentes, respeitando-se a ordem de classificação. </p>
		  		</p>
		  	</CommentsContext>
		  	<CommentsContext :id="59" :context="'ITEM 13.6'">
		  		<p>
		  			<b>13.6.</b> Não poderão ser contratados aqueles que tiverem pendências no Cadastro Informativo Municipal – CADIN, aprovado pela Lei nº. 14.094 de 06 de dezembro de 2005 e regulamentado pelo Decreto nº. 47.096 de 21 de março de 2006.
		  		</p>
		  	</CommentsContext>
		  	<CommentsContext :id="60" :context="'ITEM 13.7'">
		  		<p>
		  			<b>13.7.</b> Fica a critério da Administração Pública realizar filmagens e fotografia das atividades desenvolvidas pelos Agentes durante a execução das oficinas.
		  		</p>
		  	</CommentsContext>
		 </section>

		<section>
			<h3 class="titulo" indent="2">14. DO ACOMPANHAMENTO E DA PRESTAÇÃO DE CONTAS</h3>
			<CommentsContext :id="61" :context="'ITEM 14.1'">
				<div>
					<b>14.1.</b> Após a entrega da documentação, os Agentes elaborarão um Plano de Trabalho das atividades em conjunto com o Núcleo de Gestão do Edital, com a possibilidade de adequação do público-alvo, cronograma, metodologia e categoria relacionada.
				</div>
			</CommentsContext>
			<CommentsContext :id="62" :context="'ITEM 14.2'">
				<div>
					<b>14.2.</b> Para que se proceda o pagamento, os Agentes deverão comprovar a realização de cada atividade formativa, de acordo com os itens 7.1.2, 7.1.3, 7.1.5 e 7.1.6, apresentando para cada uma delas:
					<ol type="a">
						<li>Lista de presença formal (modelo padrão fornecido pela Supervisão para Assuntos de Governo Aberto, entregue em via digitalizada e física original);</li>
						<li>Registros fotográficos que permitam a visualização do local, do próprio Agente e do público presente (mínimo 3 fotos);</li>
						<li>Materiais utilizados nas oficinas;</li>
						<li>Entrega do Relatório Mensal preenchido no modelo padrão fornecido pela Supervisão para Assuntos de Governo Aberto, ao fim de cada mês do programa.</li>
					</ol>
					<p><b>14.2.1.</b> Os documentos comprobatórios das alíneas “a” e “b” constantes do item 14.2, deverão ser entregues em via digital, conforme orientação da Supervisão para Assuntos de Governo Aberto, até 5 dias corridos, após a realização da oficina; os documentos comprobatórios das alíneas “c” e “d”, deverão ser entregues em via digital, conforme orientação da equipe Supervisão para Assuntos de Governo Aberto no 1º dia útil do mês subsequente ao da realização das oficinas.</p>

					<p><b>14.2.2.</b> A lista de presença física original poderá ser apresentada posteriormente, tendo como prazo o mês subsequente ao da realização da oficina, sendo suficiente, de imediato, a apresentação de lista digitalizada para fins de liberação do pagamento.</p>

					<span><b>14.2.3.</b> As fotografias têm finalidade de prestação de contas e é vedada a sua utilização para fins externos, exceto mediante autorização do Núcleo de Gestão do Edital.
					<p><b>14.2.3.1.</b> Em caso de autorização da utilização das imagens para fins externos e ou publicações da PMSP, a foto deve ser respaldada por Termo de Autorização de Uso de Imagem (Anexo III) assinado pelos participantes da oficina que estiverem na foto.</p>
					</span>
					<p><b>14.2.4.</b> O pagamento das horas de Planejamento está condicionado às entregas elencadas no item 14.2 e observado o item 3.2.1.</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="62" :context="'ITEM 14.4'">
				<div>
					<b>14.4.</b> No caso da impossibilidade de apresentação dos documentos obrigatórios acima elencados, o Agente poderá apresentar outros elementos comprobatórios da realização das oficinas que serão analisados pelo fiscal do contrato caso a caso, ficando o aceite e aprovação a cargo deste para efeitos de liberação de pagamento, não elidindo possibilidade de aplicação de penalidade por descumprimento contratual.
				</div>
			</CommentsContext>
			<CommentsContext :id="63" :context="'ITEM 14.5'">
				<div>
					<b>14.5.</b> Os Agentes selecionados deverão comparecer a todos os encontros formativos do programa Agentes de Governo Aberto, nas seguintes datas:<br>
					<table>
						<tr align=center>
							<th></th>
							<th>Data</th>
							<th>Início</th>
							<th>Término</th>
						</tr>
						<tr align=center>
							<td>1º Encontro Formativo</td>
							<td>15/08/19</td>
							<td>14h</td>
							<td>18h</td>
						</tr>
						<tr align=center>
							<td>2º Encontro Formativo</td>
							<td>12/09/19</td>
							<td>14h</td>
							<td>18h</td>
						</tr>
						<tr align=center>
							<td>3º Encontro Formativo</td>
							<td>17/10/19</td>
							<td>14h</td>
							<td>18h</td>
						</tr>
						<tr align=center>
							<td>4º Encontro Formativo</td>
							<td>21/11/19</td>
							<td>14h</td>
							<td>18h</td>
						</tr>
					</table>
					<p><b>14.5.1.</b> A presença é obrigatória e as horas dos encontros formativos não integram as horas de atividades presenciais do programa;</p>
					<p><b>14.5.2.</b> O local dos encontros será informado pela Supervisão para Assuntos de Governo Aberto com antecedência de 10 dias.</p>
					<p><b>14.5.3.</b> Eventuais alterações do calendário serão comunicadas na maior brevidade possível.</p>
					<p><b>14.5.4.</b> A ausência injustificada nos Encontros Formativos do programa Agentes de Governo Aberto poderá ensejar advertência publicada no Diário Oficial da Cidade de São Paulo e sua reincidência poderá também ensejar o desligamento do programa.</p>
					<p><b>14.5.5.</b> Os Agentes que tiverem oficinas formativas agendadas por ele ou pela Supervisão para Assuntos de Governo Aberto no dia e horário dos Encontros Formativos terão suas faltas justificadas por meio de envio de documentação comprobatória da realização da oficina, conforme o item 14.2.</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="64" :context="'ITEM 14.6'">
				<div>
					<b>14.6.</b> Os Agentes deverão entregar ao Núcleo de Gestão do Edital 1 (um) Relatório Final de desenvolvimento das oficinas formativas realizadas durante o ciclo, conforme o padrão determinado pelo Núcleo de Gestão do Edital.
				</div>
			</CommentsContext>
			<CommentsContext :id="65" :context="'ITEM 14.7'">
				<div>
					<b>14.7.</b> A não entrega do Relatório Final configurará inadimplência do Agente, implicando na suspensão de bolsa, estando este sujeito à penalidade prevista no item 16.1 c.
				</div>
			</CommentsContext>
			<CommentsContext :id="66" :context="'ITEM 14.8'">
				<div>
					<b>14.8.</b> A Prefeitura de São Paulo poderá interromper o pagamento da bolsa quando:
					<ol type="a">
					<li>As oficinas formativas estiverem sendo executadas em desacordo com o Plano de Trabalho elaborado em conjunto com o Núcleo de Gestão do Edital;</li>
					<li>O Agente, por motivos adversos, não atribuíveis à Prefeitura de São Paulo, não comparecer às oficinas formativas agendadas;</li>
					<li>O Agente não cumprir as atividades previstas neste Edital;</li>
					<li>O Agente não comprovar, nos termos do item 14.2, a realização das atividades;</li>
					<li>Quando o Agente se fizer incomunicável, não retornando aos e-mails, telefonemas e mensagens enviados pelos membros da Supervisão para Assuntos de Governo Aberto, por mais de 7 (sete) dias corridos.</li>
					</ol>
				</div>
			</CommentsContext>
			<CommentsContext :id="67" :context="'ITEM 14.9'">
				<div>
					<b>14.9.</b> Em caso de desligamento de Agente do programa Agentes de Governo Aberto, no decorrer da execução, a sua substituição fica a critério do Núcleo de Gestão do Edital, sendo analisada a substituição, caso o Agente tenha desistido em até 25% do tempo decorrido do Programa. A substituição, se houver, seguirá a lista geral de credenciamento, respeitando-se a ordem de classificação de acordo com o item 11.6. O pagamento da bolsa será proporcional ao período e carga-horária restantes.
				</div>
			</CommentsContext>
			<CommentsContext :id="68" :context="'ITEM 14.10'">
				<div>
					<b>14.10.</b> O Agente deverá inserir as logomarcas do programa Agentes de Governo Aberto e da Prefeitura de São Paulo em quaisquer produtos ou materiais de divulgação resultantes das oficinas formativas subsidiadas, de acordo com as orientações do Núcleo de Gestão do Edital.
				</div>
			</CommentsContext>
			<CommentsContext :id="69" :context="'ITEM 14.11'">
				<div>
					<b>14.11.</b> As responsabilidades civis, penais, comerciais e outras advindas de utilização de direitos autorais ou patrimoniais cabem exclusivamente ao Agente.
					</div>
			</CommentsContext>
			<CommentsContext :id="70" :context="'ITEM 14.12'">
				<div>
					<b>14.12.</b> A Prefeitura de São Paulo não se responsabilizará, em hipótese alguma, pelos atos, contratos ou compromissos assumidos, de natureza comercial, financeira, trabalhista ou outra, realizados pelo Agente para fins de cumprimento do Termo de Compromisso fruto deste Edital.
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">15. DA RESCISÃO</h3>
			<CommentsContext :id="71" :context="'ITEM 15.1'">
				<div>
					<b>15.1.</b> O Agente poderá solicitar seu desligamento do programa Agentes de Governo Aberto caso haja impedimento à continuidade da execução das oficinas formativas, por meio de justificativa escrita e assinada, que será analisada pelo Núcleo de Gestão do Edital.
				</div>
			</CommentsContext>
			<CommentsContext :id="72" :context="'ITEM 15.2'">
				<div>
					<b>15.2.</b> O ajuste poderá ser rescindido pelo Núcleo de Gestão do Edital a qualquer tempo.
				</div>
			</CommentsContext>
			<CommentsContext :id="73" :context="'ITEM 15.3'">
				<div>
					<b>15.3.</b> A inexecução total ou parcial do ajuste, considerando todas as condições estabelecidas neste Edital, poderá ensejar a sua rescisão, além das consequências legais cabíveis.
				</div>
			</CommentsContext>
			<CommentsContext :id="74" :context="'ITEM 15.4'">
				<div>
					<b>15.4.</b> A rescisão sem justo motivo pelo Agente ensejará a penalidade prevista pelo item 16.1.C
					<p><b>15.4.1.</b> A falta de comunicação sem justificativa prévia por tempo maior que 7 (sete) dias corridos será considerada como rescisão do contrato unilateralmente sem justo motivo, incidindo a mesma penalidade.</p>
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">16. DAS PENALIDADES</h3>
			<CommentsContext :id="75" :context="'ITEM 16.1.'">
				<div>
					<b>16.1.</b> Ao Agente, caso descumpra qualquer obrigação determinada neste instrumento, poderão ser aplicadas penalidades de:
					<ol type="a">
						<li>Advertência publicada no Diário Oficial;</li>
						<li>Multa de 5% (cinco por cento) do valor da bolsa para descumprimento de qualquer cláusula do Termo de Compromisso;</li>
						<li>Suspensão temporária de participação em licitação e impedimento de contratar com a Administração Pública Municipal, pelo prazo de 2 (dois) anos;</li>
						<li>Declaração de inidoneidade para licitar ou contratar com a Administração Pública enquanto perdurarem os motivos determinantes da punição ou até que seja promovida a reabilitação perante a própria autoridade que aplicou a penalidade, que será concedida sempre que o contratado ressarcir a Administração pelos prejuízos resultantes e após decorrido o prazo da sanção aplicada com base no inciso anterior.</li>
					</ol>
					<p><b>16.1.1.</b> A pena de advertência só poderá ser aplicada no limite máximo de duas vezes ao mesmo Agente.</p>
					<p><b>16.1.2.</b> Nos termos previstos no Decreto 44.279/03, uma vez proposta a aplicação de penalidade, o Agente será intimado através de publicação em Diário Oficial, sendo garantida a ampla defesa e o contraditório.</p>
				</div>
			</CommentsContext>
			<CommentsContext :id="76" :context="'ITEM 16.2'">
				<div>
					<b>16.2.</b> A responsabilidade administrativa é independente da civil e da penal, de modo que, quando houver indício de ilícito, as instâncias e órgãos competentes serão comunicados.
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">17. DISPOSIÇÕES FINAIS </h3>
			<CommentsContext :id="77" :context="'ITEM 17.1'">
				<div>
					<b>17.1.</b> Os Projetos de Atividades apresentados pelos Agentes selecionados ficarão disponíveis para consulta pública no site da Secretaria de Governo Municipal no botão “Governo Aberto na Cidade de São Paulo”.
				</div>
			</CommentsContext>
			<CommentsContext :id="78" :context="'ITEM 17.2'">
				<div>
					<b>17.2.</b> Os materiais, metodologias e ferramentas elaborados ou utilizados pelo Agente, tais como mapas, apresentações, cartilhas, entre outros, durante ou posteriormente às atividades, deverão ser disponibilizados e poderão ser usados, replicados e difundidos pela Prefeitura de São Paulo. Tais materiais serão disponibilizados no site da Secretaria de Governo Municipal e no Portal da Transparência do município de São Paulo.
				</div>
			</CommentsContext>
			<CommentsContext :id="79" :context="'ITEM 17.3'">
				<div>
					<b>17.3.</b> Os Agentes, na execução das oficinas formativas, devem adotar postura responsável, ética e adequada à proposta de formação.
				</div>
			</CommentsContext>
			<CommentsContext :id="80" :context="'ITEM 17.4'">
				<div>
					<b>17.4.</b> Não poderá haver vinculação, de qualquer modo, deste programa a atividades ou discursos político-partidários, bem como não é permitido ao Agente vincular o programa a sua promoção pessoal, promoção de Agentes políticos e Agentes públicos, ou de terceiros.
				</div>
			</CommentsContext>
			<CommentsContext :id="81" :context="'ITEM 17.5'">
				<div>
					<b>17.5.</b> Os casos omissos relativos ao presente Edital serão resolvidos pelo Núcleo de Gestão do Edital, ouvida a Assessoria Jurídica da Secretaria do Governo Municipal.
				</div>
			</CommentsContext>
			<CommentsContext :id="82" :context="'ITEM 17.6'">
				<div>
					<b>17.6.</b> A inscrição do Agente implica na prévia e integral concordância com as normas deste Edital.
				</div>
			</CommentsContext>
			<CommentsContext :id="83" :context="'ITEM 17.7'">
				<div>
					<b>17.7.</b> Os Agentes serão responsáveis pelo desenvolvimento das oficinas formativas que lhes couberem e pelas informações e conteúdo dos documentos apresentados, excluída qualquer responsabilidade civil ou penal da Prefeitura de São Paulo.
				</div>
			</CommentsContext>
		</section>
		<section>
			<h3 class="titulo" indent="2">18. DÚVIDAS</h3>
			<CommentsContext :id="84" :context="'ITEM 18.1'">
				<div>
					<b>18.1.</b> A Supervisão para Assuntos de Governo Aberto estará disponível para consultas sobre a utilização da ferramenta de inscrição online no período de xx de xxxx a xx de xxxx de 2019, das 10h às 17h, em dias úteis, por meio do e-mail saopauloaberta@prefeitura.sp.gov.br e telefones (11) 3113-8553 ou 3113-9276;
				</div>
			</CommentsContext>
			<CommentsContext :id="85" :context="'ITEM 18.2'">
				<div>
					<b>18.2.</b> A Supervisão para Assuntos de Governo Aberto realizará oficinas de divulgação e esclarecimentos acerca do edital e do processo de inscrição, conforme o calendário abaixo:
					(Calendário em construção)
				</div>
			</CommentsContext>
			<CommentsContext :id="86" :context="'ITEM 18.3'">
				<div>
					<b>18.3.</b> Quaisquer dúvidas ou informações adicionais deverão ser solicitadas pelo endereço eletrônico <a href="mailto:saopauloaberta@prefeitura.sp.gov.br">saopauloaberta@prefeitura.sp.gov.br</a>, com assunto “Edital Agentes de Governo Aberto 2019”.
				</div>
			</CommentsContext>
		</section>
		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
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
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'GovernoAberto',
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
		CommentsLoader
	},
	mixins: [consultasCommons]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
.GovernoAberto mark {
	background-color: yellow;
}
</style>
