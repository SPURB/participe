<template>
	<div class="TR156" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/placeholder_480w.png" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>Termo de Referência para contratação de solução tecnológica de atendimento e digitalização de serviços públicos</div></template>
			<template slot="subtitulo"><div></div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<!-- <Apoio></Apoio> -->
		<!-- Decreto Nº 56.901 inclua este componente caso seja um PIU -->

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<p>A Prefeitura de São Paulo, por meio da Secretaria Municipal de Inovação e Tecnologia, diponibiliza Consulta Pública para acolher sugestões sobre o Termo de Referência para contratação de solução tecnológica de atendimento e digitalização de serviços públicos (em modelo SaaS) e também de serviços de transformação baseados em design de serviços focados nos usuários e métodos ágeis. O propósito da contratação aprimorar a prestação de serviços públicos realizados pelo SP156 apoiando as demais secretarias da Prefeitura na simplicação e digitalização de serviços prestados a cidadãs e cidadãos.</p>
			<p>Para facilitar a incorporação dos comentários, solicitamos aos participantes que organizem suas sugestões de alteração do texto utilizando os seguintes exemplos como modelo:</p>
			<p>INCLUIR: 2.2. xxxxxxx. [renumerando os seguintes]</p>
			<p>EXCLUIR: 2.1. XXXX. [renumerando os seguintes]</p>
			<p>ALTERAR: 2.1. XXXXXXXX. </p>
		</section>

		<section>
			<h2 class="titulo" indent="1">1. OBJETO</h2>
			<p>1.1. Contratação de empresa especializada na prestação de serviços compreendendo a disponibilização de solução tecnológica para atendimento, gerenciamento do relacionamento com o cidadão e digitalização de serviços públicos, no modelo de Software como Serviço (SaaS), bem como a adequação e automação dos serviços públicos propriamente ditos, com o uso da solução tecnológica disponibilizada e utilizando métodos ágeis e design de serviço, incluindo também fornecimento de atendente virtual inteligente, suporte técnico e treinamento conforme condições e especificações contidas neste Termo de Referência e em seus Anexos.</p>
			<Comments :attr="{id:commentId(true), context:'1.1'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">2. JUSTIFICATIVA</h2>
			<p>2.1. Necessidade do Objeto</p>
			<p>No âmbito da Política Municipal de Atendimento ao Cidadão, instituída por meio do Decreto Municipal nº 58.426, de 18 de setembro de 2018, a Prefeitura de São Paulo deve, de acordo com o artigo 28 do referido decreto, dentre outras atribuições:</p>
			<p>a. promover e incentivar projetos, programas e ações de inovação na prestação dos serviços públicos à população, inclusive os que contemplem investimentos em tecnologia da informação e em recursos de acessibilidade;</p>
			<p>b. propiciar, aos agentes públicos, condições para exercerem com efetividade o seu papel de representantes da Administração Municipal no relacionamento com os cidadãos; estimular a criação de alternativas e mecanismos para a desburocratização da prestação dos serviços públicos;</p>
			<p>c. assegurar o direito dos cidadãos ao atendimento de qualidade, com procedimentos padronizados, ágeis e acessíveis;</p>
			<p>d. assegurar aos cidadãos o direito ao acesso a informações sobre os serviços públicos de forma simples e clara, em conformidade com a Lei Federal nº 12.527, de 2011, e com o Decreto Municipal nº 53.623, de 12 de dezembro de 2012;</p>
			<p>e. promover a cultura da avaliação do atendimento, da análise das necessidades e expectativas dos cidadãos, do conhecimento do perfil dos cidadãos e do conhecimento das experiências de atendimento aos cidadãos;</p>
			<p>De acordo com o artigo 32 do Decreto Municipal nº 58.426/18, os órgãos e entidades prestadores de serviços públicos devem buscar oferecer aos cidadãos a possibilidade de formular sua solicitação por diferentes canais de atendimento, priorizando os meios eletrônicos. Os canais de atendimento deverão pautar-se em processos padronizados e uniformes, com vistas a possibilitar a mensuração de sua eficácia, eficiência e efetividade, permitindo a produção de indicadores que reflitam, prioritariamente, o comportamento da demanda e as necessidades do cidadão.</p>
			<p>Conforme o artigo 37 do Decreto Municipal nº 58.426/18, cada solicitação de serviço público, qualquer que seja o canal de atendimento, deverá gerar um número de protocolo que retrate fielmente a manifestação, permitindo o seu acompanhamento pelo cidadão.</p>
			<p>Nesse mesmo contexto, o Programa de Metas 2019-2020 possui, dentro do eixo “Inovar na gestão”, o objetivo estratégico 33, o qual tem como foco simplificar e modernizar o acesso da população aos serviços públicos. Dentre as iniciativas associadas ao objetivo estratégico 33, está a expansão do número de serviços online disponíveis no Portal de Atendimento SP156, com a meta de disponibilizar 120 novos serviços online/digitais no Portal de Atendimento SP156 até o final de 2020 (meta 33.1).</p>
			<p>Desta forma, é necessária a contratação de uma solução tecnológica que forneça as ferramentas para a organização, o gerenciamento e a melhoria do atendimento ao cidadão, para cumprir os dispositivos legais que regulam essa relação e o dever da Administração Municipal.</p>
			<p>Nesse contexto, a Secretaria Municipal de Inovação e Tecnologia atua como o órgão público que gerencia e coordena todos os canais de atendimento, bem como fornece para as demais secretarias uma solução tecnológica capaz de automatizar e facilitar a prestação de serviços públicos. Além disso, mesmo para secretarias que já possuem sistemas especialistas para prestação de serviços públicos, a solução tecnológica atua como porta de entrada dos serviços, garantindo que todo cidadão receba o mesmo tratamento e que a solução atue como um repositório único de informações e de dados sobre serviços públicos. Dessa forma, a solução tecnológica permeia a prestação de serviços públicos de grande parte dos órgãos municipais, necessitando robustez, performance e confiabilidade.</p>
			<p>A contratação da solução atual já representou um avanço em relação ao sistema anterior. No entanto, a necessidade de digitalizar serviços e de implementar ferramentas de inteligência cognitiva, bem como o objetivo de melhorar de forma contínua o atendimento ao cidadão, têm motivado a contratação de uma nova solução, com características que atendam de forma mais adequada às necessidades atuais da Prefeitura de São Paulo.</p>
			<p>Espera-se alcançar como benefícios da nova contratação:</p>
			<p>a. Automação e digitalização ágil de serviços;</p>
			<p>b. Padronização e agilidade no atendimento, processamento e resposta ao cidadão;</p>
			<p>c. Facilidade no acompanhamento das solicitações por parte do cidadão, tendo clareza das etapas envolvidas;</p>
			<p>d. Sistema integrado de informação e base de dados unificada das solicitações;</p>
			<p>e. Disponibilização de informações e dados consistentes sistematizados;</p>
			<p>f. Gestão colaborativa, eficaz e efetiva da informação, com estruturação do conhecimento;</p>
			<p>g. Aumento da capacidade de atendimento ao cidadão;</p>
			<p>h. Melhoria da gestão dos serviços atendidos;</p>
			<p>i. Avaliação da satisfação de usuários.</p>
			<p>A solução a ser contratada deve contemplar uma plataforma multicanal integrada para atendimento, gerenciamento do relacionamento com o cidadão, digitalização e automação de serviços públicos, pois desta forma, com uma ferramenta que reúna todas essas funções, é possível garantir que o cidadão tenha igualdade de tratamento de suas demandas por serviços públicos e por informações, independentemente do canal utilizado para entrar em contato com a Prefeitura de São Paulo, em acordo com o artigo 33 e com os incisos I e II do artigo 34 do Decreto Municipal nº 58.426/18.</p>
			<p>A solução deve possuir também um Atendente Virtual Inteligente (chatbot), de forma a oferecer mais uma opção rápida, simples e efetiva de atendimento ao cidadão, tendo em vista os princípios de eficiência e efetividade e o inciso IV do artigo 28 do Decreto Municipal nº 58.426/18, segundo o qual se deve promover e incentivar projetos, programas e ações de inovação na prestação dos serviços públicos à população, inclusive os que contemplem investimentos em tecnologia da informação e em recursos de acessibilidade.</p>
			<p>Dada a quantidade considerável de servidores da Prefeitura de São Paulo e de atendentes (telefônicos e presenciais) que utilizarão a ferramenta contratada diariamente, bem como a relevância dos serviços prestados e das informações obtidas a partir dos canais de atendimento SP156 para a população da cidade de São Paulo, justifica-se a necessidade de um serviço de suporte a ser realizado por equipe especializada do fornecedor da solução, de forma a garantir a estabilidade do uso da ferramenta.</p>
			<p>Para que a digitalização de serviços seja efetiva, faz-se necessária a contratação conjunta com a solução tecnológica de serviços especializados de transformação, design e digitalização de serviços públicos, de forma que a análise e redesenho de processos e serviços sejam realizados considerando as especificidades da solução tecnológica contratada, para que haja a efetiva implementação dos novos fluxos de trabalho.</p>
			<p>Por fim, para garantir que os usuários da solução tecnológica conheçam suas funcionalidades e estejam em constante aprimoramento no uso da solução faz-se necessária a contratação de serviços de capacitação, por meio de treinamentos presenciais e de uma plataforma de capacitação permanente, de forma que os usuários consigam realizar o atendimento e o tratamento das demandas da população da cidade de São Paulo de modo cada vez mais eficiente, conforme inciso IV do artigo 28 do Decreto Municipal nº 58.426/18.</p>
			<Comments :attr="{id:commentId(), context:'2.1'}" v-if="estaConsulta.ativo == 1"></Comments>
			<p>2.2. Do planejamento da contratação</p>
			<p>A premissa básica é que a Administração Municipal disponha de uma ferramenta de alta produtividade e confiabilidade para o relacionamento com o cidadão e para automação dos serviços públicos, bem como de uma Base de Conhecimento sobre os serviços prestados pela Prefeitura de São Paulo. No trabalho de automação, haverá grandes desafios relacionados à adequação de processos, mudança de cultura e de paradigmas relativos ao atendimento à sociedade. Neste cenário, a ferramenta precisa ser um facilitador, não uma preocupação adicional para o governo. Ela deve ser robusta e estável o suficiente para que a experiência dos usuários dos serviços seja a melhor possível.</p>
			<p>Isso posto, analisou-se se a melhor estratégia seria desenvolver a solução ou contratar uma ferramenta já pronta. Para tanto, foi realizada uma prospecção de ferramentas disponíveis no mercado, por meio de um Pedido de Informação - RFI (Edital nº 02/2019/SMIT).</p>
			<p>Além de se comprovar a capacidade do mercado em fornecer este tipo de solução, constatou-se que a ferramenta poderia ser disponibilizada como um serviço, utilizando-se da infraestrutura tecnológica do fornecedor, diferentemente da aquisição tradicional de um software, em que o CONTRATANTE instala a ferramenta em sua própria infraestrutura.</p>
			<p>Este tipo de contratação, chamado de Software como Serviço (SaaS) ou Software em Nuvem, tem uma série de vantagens em relação à aquisição tradicional de um software, em que o CONTRATANTE é responsável pela instalação, configuração e disponibilidade da ferramenta, envolvendo custos e riscos adicionais.</p>
			<p>A alternativa de Software como Serviço vai ao encontro das necessidades do governo, que é contar com uma solução em que a ênfase seja o trabalho de automação dos serviços públicos, apresentando resultados para a sociedade, não lidar com problemas ou dificuldades para os quais o mercado já tenha alternativas maduras de tratamento.</p>
			<p>Ainda, foi realizado um processo de escuta dos usuários da solução atual e de usuários potenciais, por meio de um survey e de entrevistas presenciais, de forma a identificar as principais dificuldades e necessidades dos usuários.</p>
			<Comments :attr="{id:commentId(), context:'2.2'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">3. ITENS OBJETO DE CONTRATAÇÃO</h2>
			<p>3.1. Lote e Itens</p>
			<p>3.1.1. O objeto deste Termo de Referência é composto por 6 itens que integram um único lote: (i) fornecimento de plataforma multicanal integrada para atendimento, gerenciamento do relacionamento com o cidadão, digitalização e automação de serviços públicos em modelo SaaS (Software as a Service); (ii) fornecimento de Atendente Virtual Inteligente - Chatbot - em modelo SaaS (Software as a Service); (iii) suporte técnico; (iv) serviços especializados, o que inclui os serviços de transformação, design, tecnologia e digitalização necessários para a disponibilização de serviços públicos digitais de qualidade com o uso da solução tecnológica; (v) fornecimento de plataforma de capacitação permanente em modelo SaaS (Software as a Service) para utilização da solução tecnológica; (vi) capacitação e formação de usuários para utilização da solução tecnológica.</p>
			<p>3.1.2. O conjunto dos itens destina-se ao atendimento e gerenciamento do relacionamento com o cidadão, à disponibilização de informações, à digitalização e à automação de serviços públicos, utilizando métodos ágeis e design de serviços, pelo prazo de trinta (30) meses, renováveis por igual período, de acordo com as condições e especificações constantes deste documento.</p>

			<!-- <Tabela :dados="itensdacontratacao"></Tabela> -->
			<Tabela :dados="itensDaContratacao"></Tabela>

			<p>3.1.3. Indivisibilidade do Objeto</p>
			<p>3.1.3.1. Para realizar a transformação, design e digitalização de serviços públicos, a empresa deverá dominar as funcionalidades da solução tecnológica que será utilizada para tanto.</p>
			<p>3.1.3.2. Da mesma forma, para garantir a entrega fim a fim dos serviços públicos automatizados com menores riscos, maior agilidade e melhor qualidade, a empresa deverá também realizar a implementação das APIs de integração necessárias para a automação dos serviços públicos correspondentes, tanto para os serviços já incluídos na atual solução quanto para os novos serviços. Estas APIs permitirão a integração dos fluxos de automação de serviços públicos com sistemas e bases de dados governamentais.</p>
			<p>3.1.3.3. Dado o elevado número de usuários distribuídos nos diferentes órgãos da Prefeitura, os profissionais do Suporte Técnico deverão ser capazes de compreender todos os aspectos técnicos e funcionais da solução aqui especificadas para sanar dúvidas e auxiliar os usuários durante a operação. </p>
			<p>3.1.3.4. Igualmente, os profissionais que ministrarão os treinamentos deverão conhecer todos os aspectos técnicos e funcionais da solução aqui especificada, para que os órgãos e entidades abrangidos sejam capazes de absorver o conhecimento.</p>
			<p>3.1.3.5. Vale ressaltar que, caso fossem aceitas empresas distintas, a empresa interessada em realizar a automação dos serviços públicos não teria sequer condições de dimensionar o esforço de automação e digitalização de serviços públicos sem conhecer a ferramenta que seria utilizada para tanto e sem poder atestar que ela possui, de fato, os requisitos necessários para realizar a automação. A ferramenta e a metodologia de automação e digitalização de serviços públicos precisam estar plenamente integradas e harmonizadas, além do valor dos profissionais poder variar em função das competências para o uso da ferramenta.</p>
			<p>3.1.3.6. Portanto, é imperioso para o êxito desta contratação que seja a mesma empresa a implementar os seis itens que integram o lote único, servindo como única interlocutora da Prefeitura e mantendo a gestão total das atividades do projeto, o que justifica a adoção do critério de menor preço global.</p>
			<p>3.1.3.7. Será permitida a participação de empresas em consórcio.</p>
			<p>3.1.3.8. Será permitida a subcontratação de serviços em até 5% do valor total do contrato e desde que previamente autorizado pela CONTRATANTE mediante justificativa técnica da CONTRATADA.</p>
			<Comments :attr="{id:commentId(), context:'3.1'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">4. DETALHAMENTO DOS ITENS E SUAS ENTREGAS</h2>
			<p>4.1. Item 1 - Fornecimento de plataforma multicanal integrada para atendimento, gerenciamento do relacionamento com o cidadão, digitalização e automação de serviços públicos em modelo SaaS (Software as a Service).</p>
			<p>4.1.1. A solução consiste em plataforma integrada multicanal para atendimento e gerenciamento do relacionamento com o cidadão, disponibilização de informações, digitalização e automação de serviços públicos, disponibilizada em nuvem em diversos tipos de ambientes e acessada por perfis de usuários da CONTRATANTE e pelos cidadãos, via Web e Dispositivos Móveis.</p>
			<p>4.1.2. A solução deverá ser integrada através de API aos demais sistemas da CONTRATANTE.</p>
			<p>4.1.3. A solução será utilizada para operacionalizar o atendimento presencial, telefônico e digital da CONTRATANTE, bem como para a automação e gerenciamento da prestação dos serviços públicos.</p>
			<p>4.1.4. A solução deve ser capaz de suportar o volume total de 16.000.000 (dezesseis milhões) chamadas / transações anuais e 7.200.000 (sete milhões e duzentos mil) disparos de mensagens do tipo SMS e serviços de mensageria instantânea, como Whatsapp e Telegram a cada ano do período de contrato.</p>
			<p>4.1.5. A CONTRATANTE garante demanda mínima de 600 usuários em uso do Perfil Atendimento, 600 usuários do Perfil Operacional, 50 usuários do Perfil Gerencial, 20 usuários do Perfil Configurador a partir da homologação da implantação da solução, descrita no item 9 - Transição Inicial.</p>
			<p>4.1.6. Os requisitos funcionais e técnicos da solução encontram-se detalhados no Anexo I deste Termo de Referência.</p>
			<p>4.1.7. Os acordos de nível de serviço exigidos encontram-se definidos no ANEXO IV - ACORDOS DE NÍVEL DE SERVIÇO - (SERVICE LEVEL AGREEMENT - SLA).</p>
			<Comments :attr="{id:commentId(), context:'4.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>4.2. Item 2 - Fornecimento de Atendente Virtual Inteligente - Chatbot - em modelo SaaS (Software as a Service)</p>
			<p>4.2.1. O Atendente Virtual Inteligente (Chatbot) consiste em uma solução de comunicação que permite a utilização de inteligência cognitiva para automatizar interações realizadas com cidadãos por meio de diferentes canais.</p>
			<p>4.2.2. O Chatbot deverá ser integrado à solução especificada no item 1 e aos demais sistemas da CONTRATANTE através de API.</p>
			<p>4.2.3. O Chatbot será utilizado para aumentar a qualidade dos serviços públicos prestados e diminuir os tempos de respostas para atendimento.</p>
			<p>4.2.4. Os requisitos funcionais e técnicos da solução encontram-se detalhados no Anexo II deste Termo de Referência.</p>
			<p>4.2.5. Os acordos de nível de serviço exigidos encontram-se definidos no ANEXO IV - ACORDOS DE NÍVEL DE SERVIÇO - (SERVICE LEVEL AGREEMENT - SLA).</p>
			<Comments :attr="{id:commentId(), context:'4.2'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>4.3. Item 3 - Suporte Técnico</p>
			<p>4.3.1. Os serviços de suporte técnico são aqueles necessários à operação das soluções como serviço dos itens 1, 2 e 5 e incluem:</p>
			<p>4.3.1.1. Solicitação de Suporte: busca ajudar o usuário a resolver qualquer problema que surja em uso. O foco desse atendimento é ser a linha de frente do atendimento ao usuário, incluindo solicitações que podem ser encerradas logo no primeiro contato por se tratar de uma dúvida, como solicitações que requerem direcionamento da demanda para outras equipes de atendimento. O atendimento deve poder ser realizado através de scripts e sem envolver nenhuma interferência em código ou infraestrutura da solução. São exemplos de solicitação de suporte dúvidas sobre o uso de aplicativos e recuperação de senhas de acesso aos sistemas.</p>
			<p>4.3.1.2. Requisição de Serviço: busca fornecer ao usuário dados e informações que não estejam disponíveis através da ferramenta. São exemplos de requisição configurações, parametrizações pontuais, execução de rotinas, importação de dados, intervenções no banco de dados, consultas em banco de dados e emissão de relatórios, de acordo com as especificações da CONTRATANTE, sempre que necessário e quando não for possível ser executado pela própria CONTRATANTE através das interfaces disponíveis nas ferramentas.</p>
			<p>4.3.1.3. Incidente: trata-se do serviço que irá atuar quando ocorrer uma interrupção não planejada de um serviço de TI ou uma redução da qualidade de um serviço de TI. Após a identificação do Incidente deverá ser prioridade da CONTRATADA o restabelecimento do serviço (mesmo que através de uma solução de contorno) dentro dos prazos especificados no ANEXO IV - ACORDOS DE NÍVEL DE SERVIÇO - (SERVICE LEVEL AGREEMENT - SLA).</p>
			<p>4.3.1.3.1. Alto impacto: quando a solução ficar parcial ou totalmente indisponível, seja por motivos de infraestrutura ou sistema, impactando o cadastro e/ou tratamento de serviço público da Prefeitura.</p>
			<p>4.3.1.3.2. Médio impacto: quando a solução ficar parcialmente indisponível, seja por motivos de infraestrutura ou sistema, sem impacto direto no cadastro e/ou no tratamento de serviço público da Prefeitura.</p>
			<p>4.3.1.3.3. Baixo impacto: quando uma funcionalidade da solução ficar totalmente indisponível, seja por motivos de infraestrutura ou sistema. Ex: um relatório com erro de execução.</p>
			<p>4.3.1.4. Problemas: busca encontrar a causa raiz de um ou mais incidentes de forma a eliminá-los definitivamente, evitando a recorrência dos incidentes. A CONTRATADA deverá executar o processo de resolução de problemas descrito no framework ITIL v 3.0 sempre que ocorrerem Incidentes e demonstrar os seus resultados para o responsável pela solução na Prefeitura.</p>
			<p>4.3.2. As manutenções que farão parte do Suporte Técnico poderão ser de tipo Emergencial, Corretiva e Legal.</p>
			<p>4.3.2.1. Emergencial: A manutenção emergencial irá ocorrer quando houver alguma indisponibilidade em todo ou parte do sistema. No momento que ocorrerem essas indisponibilidades a CONTRATADA deverá, sem nenhum custo adicional à CONTRATANTE, restaurar a operação normal do serviço, minimizando os prejuízos à operação do negócio e garantindo assim o melhor nível de serviço e disponibilidade. As indisponibilidades devem ser atendidas de acordo com sua prioridade, impacto e urgência. Os prazos de atendimento e correção estão descritos no ANEXO IV - ACORDOS DE NÍVEL DE SERVIÇO - (SERVICE LEVEL AGREEMENT - SLA).</p>
			<p>4.3.2.2. Corretiva: A manutenção emergencial tem como foco principal restabelecer o serviço o mais rápido possível minimizando o impacto negativo no negócio. Para isso, muitas vezes é aplicada uma solução de contorno ou reparo rápido fazendo com que o usuário volte a trabalhar de modo alternativo. Já a manutenção corretiva será responsável por corrigir sem custo adicional para a Prefeitura de São Paulo o erro ou indisponibilidade apresentada, de forma definitiva. Os erros/indisponibilidades podem ser categorizados de duas maneiras:</p>
			<p>4.3.2.2.1. Erros de Funcionamento: Esse erro será reportado quando parte ou todo o sistema estiver indisponível ao usuário final. São exemplos desse tipo de erro: Queda total ou parcial da aplicação, relatório indisponível, erros de integração etc.</p>
			<p>4.3.2.2.2. Erros de Negócio: São erros gerados pela implantação incorreta de um processo de negócio. São exemplos desse tipo de erro: Relatórios com informações divergentes, erros de fluxo trabalho, de documentos ou informações etc.</p>
			<p>4.3.2.3. Legal: As soluções oferecidas pela CONTRATADA deverão atender em sua totalidade as exigências das Leis Federais, Estaduais e Municipais aplicáveis ao processo de atendimento ao cidadão. Sendo assim, caso ocorram mudanças/atualizações nas Leis atuais ou publicação de novas Leis, a CONTRATADA deverá, sem custo adicional para a CONTRATANTE, realizar as mudanças necessárias nas soluções.</p>
			<p>4.3.3. A CONTRATADA deverá apresentar os planos de manutenção, contendo a política técnica e administrativa adotada pelo proponente para atualizações de versões e realização de manutenções corretivas, legais e evolutivas.</p>
			<p>4.3.4. O fornecimento de suporte técnico não inclui a alteração de regras de negócio aplicadas no sistema; o atendimento será destinado única e exclusivamente ao apoio necessário para a operação da soluções contratadas.</p>
			<p>4.3.5. Será responsabilidade da CONTRATADA realizar o monitoramento completo das soluções, inclusive das APIs em funcionamento, e apresentar painel de disponibilidade em tempo real bem como relatório de aferição mensal do SLA.</p>
			<p>4.3.5.1. A CONTRATANTE deverá ter conhecimento da metodologia de monitoramento e geração do relatório e poderá a qualquer momento auditar as informações fornecidas.</p>
			<p>4.3.5.2. A avaliação de disponibilidade se aplica para todos os módulos integrantes das soluções, inclusive as APIs construídas para as Integrações. Será considerada indisponibilidade caso as soluções contratadas apresentem instabilidade total ou parcial, seja por problemas de infraestrutura ou do próprio software.</p>
			<p>4.3.5.3. Manutenções que provoquem indisponibilidades só poderão ser realizadas com a devida concordância por parte da CONTRATANTE. Caso contrário, as horas indisponíveis serão incluídas no cálculo do indicador.</p>
			<p>4.3.6. O suporte técnico deverá estar disponível 24 horas por dia, 7 dias por semana, incluindo finais de semana e feriados, via telefone e via ferramenta de Service Desk Online.</p>
			<p>4.3.6.1. Todo atendimento, por telefone ou web, deverá ser registrado em ferramenta de Service Desk que será disponibilizada pela CONTRATADA à CONTRATANTE para abertura de chamados e extração de relatórios.</p>
			<p>4.3.6.2. A CONTRATANTE deverá ter acesso aos relatórios gerenciais sobre todos os chamados, os quais deverão apresentar, no mínimo: número do chamado, data de abertura do chamado, tipo do chamado, unidade solicitante, grau de severidade, data de fechamento do chamado, grau de satisfação do usuário em relação ao solicitado no chamado (resolvido/não resolvido).</p>
			<p>4.3.6.3. Caso seja necessário atendimento in loco prestado no regime de 8x5 (8 horas por dia e 5 dias por semana), o atendimento será determinado pelo grau de criticidade do problema que esteja sendo relatado, e será prestado por técnico da CONTRATADA, devidamente qualificado e treinado nos módulos do sistema disponibilizados para a CONTRATANTE.</p>
			<p>4.3.6.4. O serviço de suporte deverá ser prestado em idioma português padrão Brasil.</p>
			<p>4.3.7. Os acordos de nível de serviço exigidos encontram-se definidos no ANEXO IV - ACORDOS DE NÍVEL DE SERVIÇO - (SERVICE LEVEL AGREEMENT - SLA).</p>
			<Comments :attr="{id:commentId(), context:'4.3'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>4.4. Item 4 - Serviços Especializados - Transformação, design e digitalização de serviços públicos digitais com o uso da solução tecnológica</p>
			<p>4.4.1. Os serviços especializados exigem dedicação exclusiva dos profissionais e incluem a realização de integrações entre sistemas, a digitalização de novos serviços, a melhoria de serviços existentes, a transferência de conhecimentos e demais serviços de consultoria, design, processos e tecnologia que forem necessários para o aprimoramento dos serviços digitais da CONTRATANTE.</p>
			<p>4.4.1.1. Design e digitalização de novos serviços públicos: corresponde ao conjunto de tarefas envolvidas no design, modelagem, ajuste, parametrização da solução para entrada de um novo serviço, integração de sistemas, disponibilização eletrônica e operação assistida de determinado serviço público para a sociedade, por meio da solução tecnológica.</p>
			<p>4.4.1.2. Melhorias: corresponde ao conjunto de tarefas relacionadas ao aprimoramento dos serviços já disponibilizados na solução, como simplificações e alterações de fluxo de trabalho, melhorias de usabilidade, alterações de formulários, ajustes em integrações já existentes, etc.</p>
			<p>4.4.1.3. Customizações: adaptações das soluções às especificidades das regras de negócio da CONTRATANTE, não atendidas nativamente pelo produto padrão.</p>
			<p>4.4.1.4. Configuração e treinamento de Assistente Virtual Inteligente: design das interações para atendimento automatizado, parametrização do modelo de linguagem natural (conceitos e termos), treinamento de algoritmos, configuração da solução de chatbot, integração de sistemas, avaliação dos atendimentos e sugestão de melhorias para o atendimento automatizado e demais serviços necessários para um atendimento automatizado de qualidade ao cidadão.</p>
			<p>4.4.2. O método de prestação dos serviços de design e digitalização de serviços e de melhorias com o uso da solução tecnológica será definido pela CONTRATANTE, com apoio da CONTRATADA, e deverá seguir as seguintes orientações:</p>
			<p>4.4.2.1. Atender a padrões de design e digitalização de serviços, como por exemplo:</p>
			<p>4.4.2.1.1. Conhecer o usuário dos serviços: aprender o possível sobre as formas como os usuários interagem com o serviço, incluindo as ferramentas utilizadas e as etapas offline.</p>
			<p>4.4.2.1.2. Resolver o problema dos usuários por inteiro: a partir da identificação da necessidade do usuário, desenhar serviços que atendam às necessidades dos usuários, mesmo se envolverem diferentes secretarias ou instituições.</p>
			<p>4.4.2.1.3. Proporcionar uma experiência conjunta em todos os canais, incluindo on-line, telefone, papel e face a face.</p>
			<p>4.4.2.1.4. Desenvolver serviços simples de usar, intuitivos e compreensíveis: testar com usuários reais e potenciais frequentemente, certificando-se que atendam suas necessidades com o mínimo de ajuda.</p>
			<p>4.4.2.1.5. Desenvolver serviços acessíveis e inclusivos: testar com usuários reais e potenciais para garantir que atendam à necessidade de pessoas com deficiências, pessoas com baixas competências em tecnologia, com pouco acesso à Internet etc.</p>
			<p>4.4.2.1.6. Utilizar métodos ágeis: organizar em Sprints (de duas a quatro semanas), disponibilizando o serviço a usuários reais o mais rápido possível, gerar dados sobre como são usados ​​e iterar o serviço com base nos aprendizados. Se possível, disponibilizar versões alfa e beta do serviços para aprimorar os serviços disponibilizados.</p>
			<p>4.4.2.1.7. Melhorar o serviço com frequência: melhorias vão além da manutenção básica, uma vez que respondem a mudanças nas necessidades do usuário, surgimento de novas tecnologias ou alterações políticas do governo durante a vida útil do serviço.</p>
			<p>4.4.2.2. Utilizar ferramentas de design e digitalização de serviços, como por exemplo:</p>
			<p>4.4.2.2.1. Persona: a persona ou perfil comportamental é uma construção a partir de padrões recorrentes, testados empiricamente, e que se tornam representativos de um grupo social.</p>
			<p>4.4.2.2.2. Jornada do(a) Usuário(a): uma jornada é a representação gráfica de um caminho tangível ou intangível que uma pessoa percorre em determinado contexto, como um serviço ou uma experiência.</p>
			<p>4.4.2.2.3. Safári de Serviços: entender o funcionamento de um serviço e identificar seus pontos negativos e positivos ao se colocar “na pele” do usuário.</p>
			<p>4.4.2.2.4. Sombra: conhecer a experiência dos(as) cidadãos(ãs) ao longo do serviço acompanhando a sua jornada e observando comportamentos e sentimentos dos atores envolvidos. O acompanhamento pode ser feito tanto do ponto de vista do cidadão, como do ponto de vista do(a) atendente.</p>
			<p>4.4.2.2.5. Entrevista: entender com maior profundidade os comportamentos, sentimentos e opiniões da pessoa que utiliza o serviço e/ou do(a) atendente em relação ao serviço.</p>
			<p>4.4.2.2.6. Blueprint do Serviço: entender como a Jornada do(a) Usuário(a) está relacionada com as ações da linha de frente e também dos processos internos do órgão responsável pelo serviço.</p>
			<p>4.4.2.2.7. Prototipação de experiências: a prototipação de experiências busca comunicar como seria a experiência de determinado serviços a fim de permitir que a equipe de design e digitalização teste e refine sua solução com usuários potenciais.</p>
			<p>4.4.2.3. Para os serviços de digitalização, será documentado, no mínimo:</p>
			<p>4.4.2.3.1. Plano ágil de digitalização: arquitetura do serviço público, cronograma de trabalho, passos a serem percorridos, recursos humanos (da CONTRATADA e do órgão ou entidade) que serão empregados, pontos de controle, testes previstos e contingências após a entrada em produção.</p>
			<p>4.4.2.3.2. Manual do serviço digitalizado: objetivos do processo, resultados esperados e respectivas características de qualidade; descrição de etapas e atividades, de atores envolvidos e a dinâmica de relacionamento entre eles, tarefas, recursos utilizados, canais de relacionamento e controles; representação do processo ajustado (mapa) em notação BPMN 2.0 ou similar, contemplando: entradas e saídas, atividades, executores, normativos, decisões e pontos de controle; indicadores e sistemática de monitoramento do processo; modelos de documentos e formulários utilizados;</p>
			<p>4.4.2.3.3. Instruções de uso para usuários(as) e operadores do serviços: por exemplo, vídeos tutoriais de curta duração, para cada serviço público implementado, que abordem tanto o uso do serviço pela sociedade quanto a operação do serviço pelo órgão ofertante.</p>
			<p>4.4.2.4. A CONTRATADA deverá se adaptar ao método de design e digitalização de serviços da CONTRATANTE, que sempre poderá ser aprimorado diante de sugestões de melhoria de ambas as partes.</p>
			<p>4.4.2.5. O método deve apresentar uma definição clara de “ciclo de entrega”, que será utilizada para medir a qualidade do serviço, conforme ANEXO IV - ACORDOS DE NÍVEL DE SERVIÇO - (SERVICE LEVEL AGREEMENT - SLA).</p>
			<p>4.4.3. Todos os perfis profissionais da CONTRATADA deverão participar, nas dependências da CONTRATANTE, das atividades exigidas pelo método estabelecido para a prestação dos serviços.</p>
			<p>4.4.4. Os projetos deverão ser registrados em ferramenta de Gestão de Projetos e Portfólio que será disponibilizada pela CONTRATADA à CONTRATANTE para abertura e monitoramento das demandas e extração de relatórios.</p>
			<p>4.4.5. A CONTRATANTE garante demanda mínima de 6.336 UST por ano.</p>
			<p>4.4.6. Os serviços devem ser prestados com os perfis técnicos definidos item 20 e detalhados no ANEXO VI – Perfis Profissionais.</p>
			<p>4.4.7. A forma de mensuração dos serviços especializados será tratado com maior detalhe no Item 5 MENSURAÇÃO DOS ITENS E AFERIÇÃO DA ENTREGAS.</p>
			<p>4.4.8. Os detalhamento dos serviços, suas atividades, perfis técnicos necessários e as entregas estão especificados no ANEXO V - Catálogo Preliminar de Serviços.</p>
			<p>4.4.9. Os acordos de nível de serviço exigidos encontram-se definidos no ANEXO IV - ACORDOS DE NÍVEL DE SERVIÇO - (SERVICE LEVEL AGREEMENT - SLA).</p>
			<Comments :attr="{id:commentId(), context:'4.4'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>4.5. Item 5 - Fornecimento de Plataforma de Capacitação Permanente em modelo SaaS (Software as a Service) para utilização da solução tecnológica</p>
			<p>4.5.1. A CONTRATADA deverá disponibilizar Plataforma Online Permanente de Capacitação para uso de todas as funcionalidades da solução do Item 1.</p>
			<p>4.5.2. A plataforma deverá possuir, no mínimo, um curso para cada tipo de perfil usuário da solução, podendo também disponibilizar tutoriais específicos.</p>
			<p>4.5.3. Os cursos deverão ser disponibilizados em formatos de vídeo-aulas e apostilas, via WEB, com suporte para acesso pelo menos na versão mais recente e estável dos navegadores Mozilla Firefox, Google Chrome, Microsoft Edge, Internet Explorer e Safari.</p>
			<p>4.5.4. Os cursos deverão utilizar como base a solução tecnológica parametrizada para as necessidades da CONTRATANTE, utilizando exemplos reais do contexto dos usuário e sempre contemplando as últimas atualizações da solução.</p>
			<p>4.5.5. Os cursos deverão ser disponibilizados em português - padrão Brasil.</p>
			<p>4.5.6. A plataforma deverá poder ser acessada a partir do mesmo login e senha de acesso da solução do Item 1.</p>
			<p>4.5.7. A plataforma deverá possuir uma página de dúvidas frequentes sobre o uso da solução tecnológica pelos usuários da CONTRATANTE, alimentada pela CONTRATADA a partir das solicitações recebidas nos canais do Suporte Técnico.</p>
			<p>4.5.8. A Plataforma deverá possibilitar que o perfil configurador, se assim desejar, faça upload de materiais complementares que poderão auxiliar os usuários da solução.</p>
			<p>4.5.9. A Plataforma deverá gerar um certificado nominal após conclusão do curso.</p>
			<p>4.5.10. A CONTRATADA deverá fornecer manual sempre atualizado em formato digital.</p>
			<p>4.5.11. A plataforma deverá possibilitar a gestão das licenças, bem como a emissão de relatórios gerenciais, abrangendo, no mínimo, as seguintes funcionalidades: </p>
			<p>a. Vinculação e desvinculação de uma licença a um determinado aluno;</p>
			<p>b. Remanejamento de uma licença previamente vinculada para outro aluno;</p>
			<p>c. Relatório de licenças vinculadas e disponíveis (sem vinculação);</p>
			<p>d. Relatório de cursos realizados, com desempenho, por licença e por aluno; e</p>
			<p>e. Relatório de último acesso, por licença e por aluno;</p>
			<p>4.5.12. Os acordos de nível de serviço exigidos encontram-se definidos no ANEXO IV - ACORDOS DE NÍVEL DE SERVIÇO - (SERVICE LEVEL AGREEMENT - SLA).</p>
			<Comments :attr="{id:commentId(), context:'4.5'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>4.6. Item 6 - Capacitação e Formação de Usuários para utilização da solução tecnológica</p>
			<p>4.6.1. A CONTRATADA deverá fornecer treinamento presencial aos usuários em todas as funcionalidades referentes aos módulos e perfis previstos.</p>
			<p>4.6.1.1. Os treinamentos poderão ser realizados em dois momentos: na implantação inicial da solução ou em projetos de digitalização de novos serviços públicos.</p>
			<p>4.6.1.2. A CONTRATANTE deverá organizar as turmas para otimizar a utilização das vagas e providenciar que os participantes atuem como multiplicadores do conhecimento em seus órgãos/entidades.</p>
			<p>4.6.2. Deverão ser ofertados treinamentos específicos para cada tipo de perfil, sendo que a duração do curso deverá ser estipulada em comum acordo entre CONTRATANTE e CONTRATADA.</p>
			<p>4.6.3. Serão oferecidos 4 tipos de treinamento: Configurador, Gerencial, Operacional e Atendimento, com as seguintes características:</p>
			<p>4.6.3.1. Perfil Configurador:</p>
			<p>- voltado para a parametrização do sistema, incluindo Formulários de Entrada, Fluxo internos, Fases de Atendimento, Publicação de Serviços, Gestão da Carta de Serviços, Base de Conhecimento e FAQs.</p>
			<p>- O treinamento terá duração estimada de 24h e deverá abordar todas as funcionalidades previstas para este Perfil no Anexo I.</p>
			<p>4.6.3.2. Perfil Gerencial:</p>
			<p>- voltado para os gestores dos órgãos da Prefeitura responsáveis por organizar a prestação dos serviços em suas unidades, atualizar e acompanhar as Cartas de Serviço e extrair relatórios gerenciais.</p>
			<p>- O treinamento terá duração estimada de 8h e deverá abordar todas as funcionalidades previstas para este Perfil no Anexo I.</p>
			<p>4.6.3.3. Perfil Operacional:</p>
			<p>- voltando para os servidores internos da Prefeitura responsáveis por operacionalizar o serviço público, executar o fluxo de trabalho, responder ao cidadão, monitorar o andamento de suas demandas, organizar o seu dia a dia de trabalho.</p>
			<p>- O treinamento terá duração estimada de 8h e deverá abordar todas as funcionalidades previstas para este Perfil no Anexo I.</p>
			<p>4.6.3.4. Perfil atendimento:</p>
			<p>- voltado para os atendentes da Central SP156 e das Praças de Atendimento Presencial da Prefeitura, responsáveis por registrar solicitações dos cidadãos e consultar a Base de Conhecimento, FAQ e Carta de Serviços para prestar informações.</p>
			<p>- O treinamento terá duração estimada de 8h e deverá abordar todas as funcionalidades previstas para este Perfil no Anexo I.</p>
			<p>4.6.4. A duração dos treinamentos é estimada e poderá ser revista de comum acordo entre CONTRATADA e CONTRATANTE, a depender da solução tecnológica vencedora.</p>
			<p>4.6.5. A CONTRATANTE também poderá demandar a realização de treinamentos técnicos sobre integrações, dados etc. e cujos conteúdos e duração serão definidos em comum acordo entre as CONTRATADA e CONTRATANTE.</p>
			<p>4.6.6. Os treinamentos deverão ser solicitados por meio de Ordem de Serviço (OS) e serão agendados para ter início com prazo não inferior a 10 (dez) dias corridos e não superior a 30 (trinta) dias corridos, contados a partir da data de emissão da OS.</p>
			<p>4.6.7. Os programas de cada treinamento devem ser apresentados à CONTRATANTE, para aprovação, em até 10 (dez) dias corridos antes do início da respectiva turma, bem como o material de apoio, que deverá ser fornecido pela CONTRATADA e estar no idioma português.</p>
			<p>4.6.8. Ao final do treinamento os usuários devem ser capazes de:</p>
			<p>a) Dominar os conceitos básicos e características de funcionamento do sistema;</p>
			<p>b) Dominar as ferramentas do sistema no seu nível básico de funcionamento;</p>
			<p>c) Ser capazes de implantar os processos de negócio no sistema, de forma a atender às necessidades da CONTRATANTE;</p>
			<p>d) Ser dotados de conhecimentos e habilidades necessários à configuração das tabelas e parâmetros do sistema, de forma a permitir a sua utilização completa.</p>
			<p>4.6.9. O treinamento deverá ser realizado nas instalações da CONTRATANTE em datas e horários definidos em comum acordo com a CONTRATANTE.</p>
			<p>4.6.10. A disponibilização dos equipamentos para o treinamento será de responsabilidade da CONTRATANTE.</p>
			<p>4.6.11. Caberá a CONTRATADA instalar o sistema para treinamento, bem como prover o material didático e os manuais necessários para um bom aprendizado.</p>
			<p>4.6.11.1. Este material deverá conter todas as informações, os testes, os exemplos, a documentação técnica e os exercícios necessários ao bom acompanhamento das aulas, dispensando a utilização de qualquer outra bibliografia de apoio.</p>
			<p>4.6.12. Os acordos de nível de serviço exigidos encontram-se definidos no ANEXO IV - ACORDOS DE NÍVEL DE SERVIÇO - (SERVICE LEVEL AGREEMENT - SLA).</p>
			<Comments :attr="{id:commentId(), context:'4.6'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">5. MENSURAÇÃO DOS ITENS E AFERIÇÃO DA ENTREGAS</h2>
			<p>5.1. Item 1 - Fornecimento de plataforma multicanal integrada para atendimento, gerenciamento do relacionamento com o cidadão, digitalização e automação de serviços públicos em modelo SaaS (Software as a Service).</p>
			<p>5.1.1. O valor a ser pago será calculado mensalmente com base nos perfis ativos em uso na plataforma.</p>
			<p>5.1.1.1. O cálculo será realizado levando-se em consideração os quantitativos de usuários ativos de cada perfil (Atendimento, Operacional, Gerencial e Configuração) que usaram a plataforma pelo menos uma vez no mês e o valor de cada subscrição por perfil.</p>
			<p>5.1.1.2. Um mesmo usuário poderá possuir mais de um perfil de acesso na plataforma, mas para fins de pagamento somente será contabilizado a subscrição do perfil de maior valor.</p>
			<p>5.1.1.3. O cidadão poderá ter acesso ilimitado a todos os canais de atendimento disponibilizados e a sua utilização não será cobrada.</p>
			<p>5.1.2. A aferição do número de usuários ativos deverá ser feita na própria solução tecnológica.</p>
			<p>5.1.3. A entrega inicial deste item é composta por:</p>
			<p>5.1.3.1. Disponibilização de links e credenciais de acesso aos ambientes de desenvolvimento, homologação, treinamento e produção, bem como informações de contato e suporte da solução, notificando formalmente o Gestor do contrato.</p>
			<p>5.1.3.2. Documentação de registro de entrega/nota fiscal;</p>
			<p>5.1.3.3. Documentação relacionando os itens discriminados na documentação de registro de entrega/nota fiscal com os produtos de software que serão ofertados para compor a solução e estão descritos na proposta técnica comercial validada pela CONTRATANTE, de forma que seja possível verificar a correlação entre os itens que compõem a solução adquirida (definida no ANEXO I - LISTA DE REQUISITOS DA SOLUÇÃO TECNOLÓGICA) e aqueles representados na documentação de registro de entrega/nota fiscal. Esta correlação não poderá ser feita por códigos e sim pela descrição de cada item de software, com a respectiva quantidade;</p>
			<p>5.1.3.4. Documentação técnica original do fabricante, preferencialmente em língua portuguesa, que abranja implantação, configuração, instalação e gerenciamento dos produtos fornecidos. Na ausência de publicação em português da documentação original do fabricante será aceito apenas material em inglês.</p>
			<p>5.1.4. A entrega mensal para aferição deste item é composta por:</p>
			<p>5.1.4.1. Relatório contendo os perfis ativos na solução.</p>
			<p>5.1.4.2. Relatório de cumprimento dos acordos de nível de serviço.</p>
			<Comments :attr="{id:commentId(), context:'5.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>5.2. Item 2 - Fornecimento de Atendente Virtual Inteligente - Chatbot - em modelo SaaS (Software as a Service).</p>
			<p>5.2.1. O valor a ser pago será calculado mensalmente com base no uso do Atendente Virtual Inteligente.</p>
			<p>5.2.1.1. O cálculo será realizado levando-se em consideração os quantitativos de interações realizadas entre Atendente Virtual Inteligente e cidadãos.</p>
			<p>5.2.1.2. Uma interação corresponde a uma sessão e não a uma mensagem trocada com o atendente.</p>
			<p>5.2.2. A aferição do número de interações deverá ser feita na própria solução tecnológica e poderá ser gerenciada pela CONTRATANTE.</p>
			<p>5.2.3. A entrega inicial deste item é composta por:</p>
			<p>5.2.3.1. Disponibilização de links e credenciais de acesso aos ambientes de desenvolvimento, homologação, treinamento e produção, bem como informações de contato e suporte da solução, notificando formalmente o Gestor do contrato.</p>
			<p>5.2.3.2. Documentação de registro de entrega/nota fiscal;</p>
			<p>5.2.3.3. Documentação relacionando os itens discriminados na documentação de registro de entrega/nota fiscal com os produtos de software que serão ofertados para compor a solução e estão descritos na proposta técnica comercial validada pela Prefeitura de São Paulo, de forma que seja possível verificar a correlação entre os itens que compõe a solução adquirida (definida no ANEXO II - LISTA DE REQUISITOS DA SOLUÇÃO TECNOLÓGICA DE CHATBOT) e aqueles representados na documentação de registro de entrega/nota fiscal. Esta correlação não poderá ser feita por códigos e sim pela descrição de cada item de software, com a respectiva quantidade;</p>
			<p>5.2.3.4. Documentação técnica original do fabricante, preferencialmente em língua portuguesa, que abranja implantação, configuração, instalação e gerenciamento dos produtos fornecidos. Na ausência de publicação em português da documentação original do fabricante será aceito apenas material em inglês.</p>
			<p>5.2.4. A entrega mensal para aferição deste item é composta por:</p>
			<p>5.2.4.1. Relatório contendo quantitativo de interações.</p>
			<p>5.2.4.2. Relatório de cumprimento dos acordos de nível de serviço.</p>
			<Comments :attr="{id:commentId(), context:'5.2'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>5.3. Item 3 - Suporte Técnico</p>
			<p>5.3.1. O serviço será pago em valores fixos mensais durante o período em que for demandado por meio de ordem de serviço.</p>
			<p>5.3.2. A entrega mensal para aferição deste item é composta por:</p>
			<p>5.3.2.1. Relatório contendo chamados realizados e status de execução.</p>
			<p>5.3.2.2. Relatório de cumprimento dos acordos de nível de serviço.</p>
			<Comments :attr="{id:commentId(), context:'5.3'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>5.4. Item 4 - Serviços Especializados - Transformação, design e digitalização de serviços públicos digitais com o uso da solução tecnológica</p>
			<p>5.4.1. Os serviços serão realizados sob demanda, de acordo com as necessidades da CONTRATANTE, e medidos por meio de UST - Unidade de Serviço Técnico.</p>
			<p>5.4.1.1. A CONTRATANTE buscou definir métrica que, de um lado, se ajuste à realidade negocial e às características institucionais da CONTRATANTE e que, de outro, assegure rigoroso controle técnico e financeiro do contrato. Como resultado desse exercício, definiu-se que a unidade de medida a ser usada será a UST.</p>
			<p>5.4.1.2. As UST equivalem às horas de trabalho previamente pactuadas para a execução de atividades e realização de entregas, conforme definido em Catálogo de Serviços.</p>
			<p>5.4.1.3. Embora a medição do esforço seja feita em UST, a remuneração é sempre vinculada a resultados, na forma de entregáveis específicos, e a níveis de serviço. Em nenhuma hipótese, a CONTRATANTE remunerará a CONTRATADA pelo número de horas empenhadas em determinado escopo sem que haja uma referência clara ao resultado gerado. A remuneração será feita, exclusivamente, pela dimensão do projeto em UST, conforme aprovado pela CONTRATANTE anteriormente ao início do desenvolvimento do "sprint" correspondente.</p>
			<p>5.4.2. O Catálogo Preliminar de Serviços, previsto no Anexo V, apresenta o detalhamento dos serviços, suas atividades, os perfis profissionais necessários para sua execução, as entregas esperadas, o prazo de execução e sua estimativa em USTs.</p>
			<p>5.4.2.1. O Catálogo de Serviços poderá ser revisado a qualquer momento pela CONTRATANTE, podendo alterar, incluir ou excluir serviços. Portanto, o Catálogo apresenta uma desagregação não-exaustiva dos serviços de transformação, design e digitalização de serviços públicos digitais previstos.</p>
			<p>5.4.2.2. Nos casos em que o Catálogo não ofereça estimativa que possa ser utilizada na medição de esforço requerido por determinado projeto, CONTRATANTE e CONTRATADA buscarão o consenso, utilizando os seguintes critérios, sucessivamente:</p>
			<p>5.4.2.2.1. Analogia com outros itens do Catálogo;</p>
			<p>5.4.2.2.2. Aferição empírica da dimensão do escopo por meio de projeto piloto de reduzida duração, com acompanhamento em tempo integral (em modelo de “sombra”), por fiscal da CONTRATANTE, do trabalho da CONTRATADA.</p>
			<p>5.4.2.3. O resultado advindo do processo acima poderá, a critério da CONTRATANTE, ser incorporado ao Catálogo para utilização em demandas futuras.</p>
			<p>5.4.2.4. A CONTRATANTE é responsável final por definir a dimensão de determinada atividade em UST. As justificativas da CONTRATADA deverão ser consideradas e respondidas, ainda que não acatadas.</p>
			<p>5.4.2.5. Após o término de um ciclo de entregas, a CONTRATADA poderá propor à CONTRATANTE a atualização do Catálogo. Se, por exemplo, uma determinada atividade vier a apresentar escopo maior do que o originalmente previsto no Catálogo, esse processo permitirá medição mais precisa para demandas futuras. A CONTRATANTE poderá, assim, alterar a dimensão do escopo de determinado item no Catálogo, tanto por provocação da CONTRATADA, como por iniciativa própria.</p>
			<p>5.4.2.6. O Catálogo só poderá ser atualizado antes do início do desenvolvimento de determinada demanda, isto é, o número de USTs não poderá ser atualizado retroativamente. Os aprendizados sobre o número de USTs necessário para determinada atividade poderão ser utilizados para atualização do catálogo.</p>
			<p>5.4.3. A entrega mensal para aferição deste item é composta por:</p>
			<p>5.4.3.1. Relatório contendo os ciclos de entrega já homologados.</p>
			<p>5.4.3.2. Relatório de cumprimento dos acordos de nível de serviço.</p>
			<Comments :attr="{id:commentId(), context:'5.4'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>5.5. Item 5 - Fornecimento de Plataforma de Capacitação Permanente em modelo SaaS (Software as a Service) para utilização da solução tecnológica</p>
			<p>5.5.1. O serviço será pago em valores fixos mensais durante o período em que for demandado por meio de ordem de serviço.</p>
			<p>5.5.2. A entrega mensal para aferição deste item é composta por:</p>
			<p>5.5.2.1. Relatório contendo estatísticas sobre uso da plataforma e sua avaliação.</p>
			<Comments :attr="{id:commentId(), context:'5.5'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>5.6. Item 6 - Capacitação e Formação de Usuários para utilização da solução tecnológica</p>
			<p>5.6.1. Os serviços serão realizados sob demanda, de acordo com as necessidades da CONTRATANTE, e medidos por meio de horas-aula.</p>
			<p>5.6.1.1. As horas-aula somente serão pagas para o período em que o instrutor estiver formando os usuários, conforme programa apresentado previamente.</p>
			<p>5.6.1.2. As horas-aula não podem ser pagas para a elaboração de manuais, material de apoio para formação ou qualquer outra atividade de apoio à formação propriamente dita.</p>
			<p>5.6.2. A entrega mensal para aferição deste item é composta por:</p>
			<p>5.6.2.1. Relatório contendo as formações realizadas, programas de aula, lista de presença dos usuários capacitados e demais evidências da formação realizada.</p>
			<p>5.6.2.2. Relatório de cumprimento dos acordos de nível de serviço.</p>
			<Comments :attr="{id:commentId(), context:'5.6'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">6. VOLUMETRIA - PLANEJAMENTO DE DEMANDA</h2>
			<p>6.1. Item 1 - Fornecimento de plataforma multicanal integrada para atendimento, gerenciamento do relacionamento com o cidadão, digitalização e automação de serviços públicos em modelo SaaS (Software as a Service).</p>
			<p>6.1.1. A solução tecnológica atual possui cerca de 2.160 usuários, dos quais aproximadamente 900 são servidores públicos (destes, 26 usuários são administradores/configuradores), e 1.260 são atendentes presenciais ou da Central Telefônica 156. Atualmente, não há diferenciação clara entre usuários operacionais e gerenciais, mas pretende-se inserir essa diferenciação com o intuito de melhorar a gestão da prestação dos serviços públicos. Nesse sentido, estimam-se 132 usuários gerenciais, considerando 2 usuários com este perfil por órgão centralizado da administração municipal (direta e indireta) e 1 por unidade descentralizada (como a Secretaria Municipal das Subprefeituras - 32 subprefeituras -, a Secretaria da Saúde - 25 unidades da Coordenação de Vigilância Sanitária - e a Defesa Civil - 32 unidades), tendo em vista que há 22 órgãos com serviços solicitáveis por meio dos canais SP156.</p>
			<p>6.1.2. Tendo em vista o plano de expansão dos serviços atendidos pela Central Telefônica 156 e pelas unidades de atendimento presencial, há a possibilidade de incorporação gradual de serviços prestados pela Prefeitura de São Paulo que hoje não estão atendidos por este canal. Essas incorporações podem aumentar a quantidade de usuários de atendimento na solução em 33%, o que equivaleria a cerca de 420 usuários de perfil atendimento.</p>
			<p>6.1.3. Além disso, o Programa de Metas 2019-20 prevê a meta de digitalização de 120 serviços até o final de 2020, o que implica na entrada de novos órgãos e serviços no SP156 e, consequentemente, no aumento de usuários operacionais e gerenciais na solução tecnológica. Estima-se a necessidade de cerca de 360 usuários operacionais adicionais, em relação à quantidade atual de 900 usuários, para o tratamento dos novos serviços, bem como 80 usuários adicionais de perfil gerencial, (para além dos 132 novos usuários desse perfil), e 30 novos usuários de perfil configurador. Vale ressaltar que o número inicial de usuários será menor e aumentará à medida que forem digitalizados novos serviços e incorporados novos órgãos. Desta forma, tem-se:</p>

			[TABELA]

			<Comments :attr="{id:commentId(), context:'6.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>6.2. Item 2 - Fornecimento de Atendente Virtual Inteligente - Chatbot - em modelo SaaS (Software as a Service).</p>
			<p>6.2.1. O SP156 recebe atualmente, em média, 480 mil ligações por mês por meio da Central Telefônica 156. Além disso, o SP156 possui um canal de chat com atendimento humano, que recebe cerca de 12 mil requisições por mês, as quais referem-se tanto a pedido de informações quanto à solicitação de realização de serviços públicos.</p>
			<p>6.2.2. Tendo em vista a tendência de aumento de serviços disponibilizados nos canais online do SP156, com a necessidade de digitalização de serviços públicos, há a possibilidade do aumento desses números.</p>
			<p>6.2.3. Consultorias estimam que os chatbots podem absorver até cerca de 80% da demandas de interação inicial com usuários de serviço até 2020. Como essa tecnologia ainda deve passar por uma período de aprendizado na Prefeitura, estimamos que até 30% dessas interações podem ser absorvidas pelo chatbot. Assim, estima-se que serão necessárias 120 mil interações por mês, o que equivale a 3 milhões e 600 mil em 30 meses.</p>
			<Comments :attr="{id:commentId(), context:'6.2'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>6.3. Item 3 - Suporte Técnico</p>
			<p>6.3.1. O SP156 atualmente possui fornecedor contratado que presta o serviço de suporte técnico da solução tecnológica. Como cada solução tem sua especificidade, listamos os serviços de suporte técnico que serão demandados no detalhamento do objeto. Espera-se que a licitante estime a demanda potencial com base no número de usuários e experiência em outras prestações de serviço. O pagamento será realizado mediante valor fixo mensal.</p>
			<Comments :attr="{id:commentId(), context:'6.3'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>6.4. Item 4 - Serviços Especializados - Transformação, design e digitalização de serviços públicos digitais com o uso da solução tecnológica</p>
			<p>6.4.1. O SP156 realiza atualmente a migração de 15 serviços digitais por trimestre, em média. Para isso, utiliza recursos humanos tanto internos como da atual fornecedora. O número de pessoas envolvidas em cada processo de transformação e digitalização de serviços, em geral, é de quatro pessoas.</p>
			<p>6.4.2. O Programa de Metas 2019-20 prevê a meta de digitalização de 120 serviços até o final de 2020. Além disso, cada vez mais o cidadão exige a prestação de serviços digitais pela Prefeitura. Assim, espera-se que a demanda por digitalização e melhorias de serviços digitais aumente nos próximos anos.</p>
			<p>6.4.3. Tendo isso em mente, estimamos a necessidade de realizar simultaneamente a digitalização de pelo menos cinco serviços de diferentes complexidades, bem como implementar melhorias contínuas nos serviços disponibilizados. Levando em conta os serviços prestados atualmente, isso provavelmente exigiria da CONTRATADA a alocação de até 8 equipes de até 3 pessoas, incluindo todas as questões relacionadas à digitalização do serviço público e parametrização da solução tecnológica. Somados a isso, teríamos pelo menos dois gerentes sênior para a gestão das equipes, já que se espera a alocação de um gerente para cada 9 pessoas. Parte-se da premissa que cada profissional possua 6 horas produtivas por dia e, portanto, seja capaz de entregar em torno de 6 UST/dia. Com esse fator de produtividade, multiplicado pelos 26 perfis profissionais, por 22 dias úteis/mês, e por 30 meses (que é a duração do contrato) chega-se a montante de 102.960 UST.</p>
			<Comments :attr="{id:commentId(), context:'6.4'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>6.5. Item 5 - Fornecimento de Plataforma de Capacitação Permanente em modelo SaaS (Software as a Service) para utilização da solução tecnológica</p>
			<p>Hoje em dia o SP156 não possui plataforma de capacitação permanente. Porém, verificou-se em pesquisa realizada com usuários a demanda por capacitação na solução tecnológica. Espera-se que a CONTRATADA estime a demanda com base no número de usuários e em suas experiências com outras contratações.</p>
			<Comments :attr="{id:commentId(), context:'6.5'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>6.6. Item 6 - Capacitação e Formação de Usuários para utilização da solução tecnológica</p>
			<p>A capacitação será demandada para o treinamento inicial dos usuários que utilizarão a solução desde o início de sua implantação, bem como para os usuários de órgãos que tenham seus serviços digitalizados ou que tenham serviços disponibilizados para solicitação por meio dos canais SP156 posteriormente.</p>
			<p>Partindo da premissa que um treinamento básico exija cerca de 8 horas-aula e treinamentos mais avançados exijam 24 horas-aula, temos a necessidade de 415 horas-aula para treinamentos básicos e 45 horas-aula para treinamentos avançados, resultando em 320 horas-aula para treinamentos iniciais.</p>
			<p>Considerando a quantidade de usuários que pode ser expandida, conforme detalhado nos itens 6.1.2. e 6.1.3., e a troca de usuários que pode ocorrer ao longo do contrato, estimamos a necessidade de mais 897 horas-aula (476 horas de treinamento básico e 421 horas de treinamento avançado). No total, está planejada a demanda de 1.357 horas-aula para o período de 30 meses. Espera-se um período mais intenso de treinamentos para implantação da solução, mas as horas-aulas poderão ser redistribuídas ao longo do contrato, dependendo das necessidades da CONTRATANTE. O resumo da quantidade de horas-aula estimada, por perfil, está descrito na tabela abaixo:</p>

			[TABELA]

			<Comments :attr="{id:commentId(), context:'6.6'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">7. CONDIÇÕES GERAIS DA PRESTAÇÃO DE SERVIÇO E GARANTIA</h2>
			<p>7.1. A função de Preposto não poderá se acumular com os perfis profissionais responsáveis pela execução do serviço.</p>
			<Comments :attr="{id:commentId(), context:'7.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>7.2. A CONTRATADA arroga-se o direito de demandar, livremente, a quantidade que julgar necessária dos itens contratados, garantindo as demandas mínimas especificadas no detalhamento dos serviços.</p>
			<Comments :attr="{id:commentId(), context:'7.2'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>7.3. Todos os serviços deste Termo de Referência deverão ser prestados em Português do Brasil. Serão admitidas as seguintes exceções a esta exigência:</p>
			<p>7.3.1. O uso de termos técnicos em inglês, nas conversações ou correspondências;</p>
			<p>7.3.2. O acesso a sites com conteúdo na língua inglesa, para consulta a bases de conhecimento ou “download” de componentes de software;</p>
			<p>7.3.3. A utilização de material original do fabricante em inglês, na realização da capacitação técnica, somente nos casos de ausência da publicação em português;</p>
			<p>7.3.4. Outros casos, com o aceite da CONTRATANTE.</p>
			<Comments :attr="{id:commentId(), context:'7.3'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>7.4. Deverá ser garantido à CONTRATANTE o pleno acesso ao site dos fabricantes dos serviços fornecidos que constituem o objeto deste Termo de Referência para consultar quaisquer bases de dados disponíveis para usuários e efetuar downloads de quaisquer atualizações de software ou documentações.</p>
			<p>7.4.1. Caso haja diferentes níveis de acesso no site, deverá obrigatoriamente ser ofertado o nível com maior grau de privilégios.</p>
			<Comments :attr="{id:commentId(), context:'7.4'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>7.5. A CONTRATADA deverá notificar a CONTRATANTE sobre a descontinuidade comercial e sobre o término do suporte técnico do fabricante dos produtos objeto deste Termo de Referência. A CONTRATANTE deverá ser formalmente comunicada, com antecedência mínima de 6 (seis) meses.</p>
			<Comments :attr="{id:commentId(), context:'7.5'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>7.6. A garantia dos serviços contratados deverá considerar o período mínimo de 12 meses a partir da data de emissão do Termo de Aceite.</p>
			<p>7.6.1. A prestação dos serviços relacionados à garantia não deve imputar qualquer custo adicional à CONTRATANTE.</p>
			<p>7.6.2. Durante todo o período de garantia, a CONTRATADA deverá prestar os serviços de suporte técnico com o apoio de profissionais técnicos especializados.</p>
			<Comments :attr="{id:commentId(), context:'7.6'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>7.7. A CONTRATADA, em consonância com os princípios e normas da CONTRATANTE, deverá implementar na execução do objeto deste instrumento, ações e políticas que respeitem e valorizem a diversidade do conjunto de pessoas que compõem a empresa, garantindo tratamento equânime, repudiando condutas que possam caracterizar assédio, preconceito e discriminação étnico-racial e de gênero.</p>
			<Comments :attr="{id:commentId(), context:'7.7'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">8. VIGÊNCIA E RENOVAÇÃO</h2>
			<p>8.1. O Contrato a ser celebrado terá vigência de 30 (trinta) meses, a contar da data da sua assinatura, podendo ser prorrogado nos termos do art. 57, inciso II, da Lei no 8.666, de 1993.</p>
			<Comments :attr="{id:commentId(), context:'8.1'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">9. PLANEJAMENTO DO SERVIÇO - TRANSIÇÃO INICIAL</h2>
			<p>9.1. A transição inicial consiste na implantação da nova solução, realizando migração de todos os serviços atualmente disponibilizados no SP156 para a nova solução, o que inclui a carta de serviços e atividades técnicas como carga de dados, parametrização, integração, criação de formulários, relatórios e demais necessidades de customizações para uso da CONTRATANTE, conforme lista de requisitos obrigatórios do Anexo I, e deverá ser executada ao longo dos primeiros quatro meses do contrato.</p>
			<p>9.1.1. O plano de implantação deverá ser executado em quatro meses e deve prever ciclos de entregas de valor frequentes a cada 2 a 4 semanas.</p>
			<Comments :attr="{id:commentId(), context:'9.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>9.2. A implantação será remunerada somente pela quantidade fixa de 4224 UST de serviços especializados previstos no item 4, por horas-aula de capacitação dos usuários do item 6 - “Capacitação e Formação de Usuários para utilização da solução tecnológica” e pelas subscrições de Perfil Configurador do item 1 que forem utilizadas.</p>
			<p>9.2.1. A remuneração se dará somente com a homologação da solução tecnológica com todos os serviços públicos, Base de Conhecimento (Carta de Serviços e FAQ) e dados migrados.</p>
			<p>9.2.2. A CONTRATADA deverá alocar quantidade e perfis profissionais necessários para a realização da migração no prazo determinado e não será remunerada além do previsto caso não complete a migração a tempo.</p>
			<Comments :attr="{id:commentId(), context:'9.2'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>9.3. Em paralelo à implantação, as partes deverão definir o método de prestação de serviços especializados de acordo com as diretrizes deste TR (cf. 4.4), planejar a formação das primeiras equipes de projetos de novos serviços e melhorias e simular como o será a execução do contrato utilizando o catálogo preliminar de serviços (cf. 5.4) para gerar aprendizado nas equipes de ambas as partes antes do início de novos projetos. Esses aprendizados poderão ser incorporados no método a ser definido e no catálogo preliminar de serviços. Portanto, a implantação poderá servir como um piloto de utilização do catálogo de serviços e do método ágil de entregas.</p>
			<Comments :attr="{id:commentId(), context:'9.3'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>9.4. CRONOGRAMA INICIAL</p>
			<p>9.4.1. A CONTRATADA deverá se reunir com o gestor técnico do contrato e com a equipe técnica responsável pelo gerenciamento da implantação da solução no munícipio de São Paulo, em local a ser definido pela Prefeitura de São Paulo, no prazo máximo de até 10 (dez) dias úteis contados a partir do dia seguinte à assinatura do Contrato / Pedido de Compra (PC). A data da reunião deverá ser agendada em comum acordo com a Prefeitura de São Paulo.</p>
			<p>9.4.2. Nesta reunião a CONTRATADA deverá:</p>
			<p>9.4.2.1. Apresentar as características dos produtos fornecidos, além de tratar das informações sobre o planejamento e cronograma da sua implantação e esclarecer todos os questionamentos técnicos. A Prefeitura de São Paulo definirá, com o apoio da equipe técnica da CONTRATADA, de que forma os serviços deverão ser disponibilizados. A CONTRATADA e a Prefeitura de São Paulo, em comum acordo, deverão fazer um planejamento das atividades de implantação/Migração antes de iniciar a operação do serviço.</p>
			<p>9.4.2.2. Apresentar quem será o gestor do projeto e o profissional técnico que atuará como coordenador de todas as atividades de disponibilização e implementação da solução.</p>
			<p>9.4.3. Caso após a realização desta primeira reunião existam questionamentos direcionados à CONTRATANTE e/ou à CONTRATADA, a mesma terá o prazo de até 05 (cinco) dias úteis contados a partir do dia seguinte à realização da reunião, para responder formalmente.</p>
			<p>9.4.4. Como produto da reunião técnica, a CONTRATADA deverá encaminhar por meio eletrônico, em 5 (cinco) dias úteis após a realização da reunião e esclarecimento de possíveis dúvidas remanescentes da mesma, o Plano de Implantação.</p>
			<p>9.4.5. No prazo de até 5 (cinco) dias úteis, a partir do recebimento formal do Plano de Implantação, a CONTRATANTE deverá se manifestar sobre sua aprovação. Caso seja necessário, será concedido à CONTRATADA um novo prazo de até 5 (cinco) dias úteis para eventuais ajustes e reapresentação da documentação reprovada. A versão definitiva do Plano de Implantação será a versão aprovada pela equipe técnica da CONTRATANTE.</p>
			<Comments :attr="{id:commentId(), context:'9.4'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>9.5. AMBIENTE TECNOLÓGICO ATUAL</p>
			<p>9.5.1. As informações disponibilizadas sobre a solução tecnológica atual tem como objetivo subsidiar o planejamento da CONTRATADA, uma vez que esta será responsável por migrar todo o conteúdo da Solução Tecnológica Atual para a Solução Tecnológica nova.</p>
			<p>9.5.2. A solução tecnológica atual possui, até julho de 2019, 521 serviços solicitáveis na Plataforma, estimando-se um aumento que pode chegar até 560 serviços ao final de 2019.</p>
			<p>9.5.3. Dos serviços solicitáveis, destaca-se:</p>
			<p>9.5.3.1. 430 formulários de entrada diferentes;</p>
			<p>9.5.3.2. 238 serviços com fluxos completos dentro da própria solução tecnológica, sendo 5 tipos possíveis de fluxos atualmente:</p>

			[TABELA]

			<p>9.5.3.3. 287 serviços com fluxos de integração com sistemas legados, totalizando 11 sistemas integrados e 14 fluxos diferentes:</p>

			[TABELA]

			<p>9.5.4. A solução tecnológica atual possui, até julho de 2019, 1.100 Cartas de Serviço, incluindo as Cartas dos Serviços solicitáveis mencionadas no item 9.5.2 e Cartas informativas, sendo que este número pode sofrer alterações para mais ou para menos, em decorrência de constante atualização.</p>
			<p>9.5.5. A solução tecnológica atual possui, até julho de 2019, 4.700 Perguntas Frequentes, organizadas em 300 grupos, sendo que estes números pode sofrer alterações para mais ou para menos, em decorrência de constante atualização.</p>
			<p>9.5.6. A solução tecnológica atual possui, até julho de 2019, cerca de 331 mil solicitações de serviço público em aberto ou em andamento que deverão ter todos os seus dados migrados para a nova solução, de forma a permitir a conclusão da prestação do serviço público. Vale destacar que até o término do processo de contratação da solução essa quantidade de solicitações pode variar.</p>
			<p>9.5.7. A solução tecnológica atual possui, até julho de 2019, dados completos de 3,7 milhões de solicitações desde janeiro de 2015, cujos dados deverão ser migrados para garantir a continuidade da série histórica. Das solicitações recebidas antes de janeiro de 2015, apenas as demandas ainda não concluídas deverão ser migradas. Vale destacar que até o término do processo de contratação da solução essa quantidade de solicitações pode variar.</p>
			<Comments :attr="{id:commentId(), context:'9.5'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>9.6. PLANO DE IMPLANTAÇÃO</p>
			<p>9.6.1. O plano de implantação terá o objetivo de identificar, mapear e detalhar os processos atuais da Prefeitura de São Paulo do SP156 e detalhar como esses processos serão aderentes ao sistema standard contratado e, caso não o sejam, detalhar GAPs que deverão ser resolvidos para atender essas demandas e disponibilizar as soluções com os serviços públicos da CONTRATANTE.</p>
			<p>9.6.2. O Plano de Implantação dos serviços fornecidos deverá obrigatoriamente conter de forma detalhada os itens abaixo discriminados, não se tratando de um rol exaustivo de exigências, podendo a CONTRATADA complementar com os itens que julgar necessário para a eficiente execução dos serviços:</p>
			<p>9.6.2.1. Descrição dos softwares que deverão ser disponibilizados como serviços;</p>
			<p>9.6.2.2. Descrição de todos os recursos e condições que serão providos pela CONTRATANTE, necessários para que a CONTRATADA possa realizar os serviços de implantação;</p>
			<p>9.6.2.3. Relação dos especialistas da CONTRATADA alocados nos processos de implantação;</p>
			<p>9.6.2.4. Visão geral da arquitetura da solução que será implantada;</p>
			<p>9.6.2.5. Descrição das etapas do processo de implantação, detalhando as opções de configuração;</p>
			<p>9.6.2.6. Cronograma de execução;</p>
			<p>9.6.2.7. Necessidade de atualização de versões dos serviços fornecidos.</p>
			<p>9.6.3. O plano de implantação deverá contemplar as seguintes atividades: Gestão da Mudança, Migração de Dados, Parametrização de Serviços, Migração de Serviços, Deploy e Operação Assistida.</p>
			<p>9.6.4. Gestão de mudança tem como objetivo garantir que usuários finais da CONTRATANTE, em todos os níveis hierárquicos, estejam capacitados a administrar, operar e usar de forma autônoma a solução implantada, assimilando corretamente as mudanças introduzidas.</p>
			<p>9.6.4.1. Será responsabilidade da CONTRATADA:</p>
			<p>9.6.4.1.1. Elaborar plano de comunicação e elaborar materiais, que deverão ser aprovados pela CONTRATANTE;</p>
			<p>9.6.4.1.2. Planejar e implantar as tarefas relativas à capacitação dos usuários no uso da solução;</p>
			<p>9.6.4.1.3. Identificar as principais mudanças e impactos organizacionais, propor recomendações e ações para preparar as áreas para as mudanças referentes à implantação da solução, de forma a assegurar o cumprimento dos benefícios propostos;</p>
			<p>9.6.4.1.4. Estabelecer uma rede de apoio, visível e tangível com as lideranças, para acompanhar e garantir o sucesso no processo de implantação da solução;</p>
			<p>9.6.4.1.5. Minimizar resistências à mudança, estimulando e promovendo a aceitação da mudança;</p>
			<p>9.6.4.1.6. Suportar a Equipe de Gestão da CONTRATANTE na conscientização dos envolvidos sobre o Projeto, integração das ações aos objetivos da organização e Projeto, promoção do comprometimento e motivação dos usuários em relação às etapas do Projeto e demais particularidades;</p>
			<p>9.6.4.1.7. Realizar o alinhamento sobre o entendimento do Projeto a todos os envolvidos com o mesmo através de ações de comunicação;</p>
			<p>9.6.4.1.8. Determinar, dimensionar e gerenciar os impactos organizacionais decorrentes do processo de implantação através da confecção de um relatório de análise de impacto;</p>
			<p>9.6.4.1.9. Monitorar e analisar os fatos e comportamentos capazes de influenciar ou comprometer a implantação do projeto, sugerindo as ações necessárias para solução de problemas em tempo hábil;</p>
			<p>9.6.4.1.10. Capacitar o corpo funcional da CONTRATANTE nos módulos da solução para que a mudança possa efetivamente ser implantada.</p>
			<p>9.6.4.2. Será responsabilidade da CONTRATANTE:</p>
			<p>9.6.4.2.1. Supervisionar a equipe de Gestão de Mudança da CONTRATADA;</p>
			<p>9.6.4.2.2. Gerir comunicação a ser disponibilizada aos servidores da CONTRATANTE;</p>
			<p>9.6.4.2.3. Buscar o compromisso dos stakeholders frente às mudanças;</p>
			<p>9.6.4.2.4. Validar método de trabalho a ser seguido pela CONTRATADA;</p>
			<p>9.6.4.2.5. Validar e aprovar os produtos/artefatos/serviços gerados pela CONTRATADA.</p>
			<p>9.6.5. A Migração de Dados é o processo de transferência dos dados corporativos do atual sistema utilizado na CONTRATANTE, para a base de dados da solução adquirida.</p>
			<p>9.6.5.1. Será responsabilidade CONTRATADA:</p>
			<p>9.6.5.1.1. Realizar a análise das bases de dados da solução atual para determinar como os dados nela contidos serão transferidos para o banco de dados da nova solução;</p>
			<p>9.6.5.1.2. Preparar os dados existentes de forma a compatibilizá-los com a base de dados da nova solução;</p>
			<p>9.6.5.1.3. Executar o desenvolvimento de programas necessários para efetuar a transferência de dados, caso necessário;</p>
			<p>9.6.5.1.4. Realizar a transferência de todos os dados existentes nos programas e controles da Prefeitura de São Paulo para o banco de dados da nova solução, e verificar, juntamente com a Prefeitura de São Paulo, a integridade dos dados migrados e corrigir, se houver, erros ou inconsistências das informações apuradas durante a verificação;</p>
			<p>9.6.5.1.5. Executar o desenvolvimento de soluções que permitam a convivência dos dados mestres da solução com as demais plataformas legadas utilizadas pela Prefeitura de São Paulo, quando estas utilizarem as mesmas informações.</p>
			<p>9.6.5.2. Será responsabilidade da CONTRATANTE:</p>
			<p>9.6.5.2.1. Validar dados que serão carregados na solução em conjunto com a CONTRATADA para os devidos apoios técnicos necessários;</p>
			<p>9.6.5.2.2. Desenvolver regras para carga dos dados existentes nos sistemas legados nas tabelas de conversão necessárias para a migração para a nova solução;</p>
			<p>9.6.6. A Parametrização e migração de serviços são processos de diagnóstico e migração de serviços para a nova solução.</p>
			<p>9.6.6.1. Será responsabilidade da CONTRATADA:</p>
			<p>9.6.6.1.1. Levantar os processos atuais (“AS IS”): a CONTRATADA deverá compreender e o funcionamento dos processos e procedimentos de atendimento ao cidadão no órgão/entidade, atores envolvidos e responsáveis por atividades de execução, aprovação e outras inerentes ao fluxo do processo, além de identificação de gargalos e restrições que ocasionam morosidade.</p>
			<p>9.6.6.1.2. Propor melhorias para migração na nova solução (“TO BE”): a partir da compreensão dos processos, procedimentos e legislação existentes e considerando o objetivo de otimizar a gestão do atendimento ao cidadão, a CONTRATADA deverá propor novos processos e procedimentos redesenhados para atender a este objetivo e alinhado às melhores práticas e mais eficientes, os quais deverão ser replicados no fluxo da solução.</p>
			<p>9.6.6.1.3. Realizar Análise de GAP e identificação de interfaces e desenvolvimentos: nessa etapa serão propostos os desenvolvimentos, customizações e parametrizações necessárias em Formulários, Relatórios e Interfaces. Serão identificadas também as Integrações, Conversões, Melhorias e Workflows necessários para atender ao processo.</p>
			<Comments :attr="{id:commentId(), context:'9.6'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">10. TRANSFERÊNCIA DE CONHECIMENTO, CONTINUIDADE DO NEGÓCIO E TRANSIÇÃO FINAL</h2>
			<p>10.1. A transferência de conhecimento objetiva, dentre outros, a internalização da expertise relacionada à automação dos serviços públicos com a utilização da solução tecnológica, de forma que a Administração esteja apta para inserir, modificar ou excluir serviços com autonomia.</p>
			<Comments :attr="{id:commentId(), context:'10.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>10.2. A CONTRATADA deverá disponibilizar documentação técnica e funcional atualizada referente aos produtos entregues em cada item contratado.</p>
			<Comments :attr="{id:commentId(), context:'10.2'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>10.3. A CONTRATADA deverá disponibilizar uma base de dados replicada em ambiente disponibilizado pela CONTRATANTE, atendendo aos seguintes requisitos:</p>
			<p>10.3.1. Atualização D-1 de dados a partir do ambiente de produção;</p>
			<p>10.3.2. Toda a infraestrutura de segurança, disponibilidade, integridade e confidencialidade desse ambiente deverão ser providenciadas pela CONTRATADA;</p>
			<p>10.3.3. A CONTRATANTE deverá ter acesso irrestrito, mediato e ininterrupto a esse ambiente, durante toda a vigência contratual;</p>
			<p>10.3.4. A CONTRATADA deverá manter os dados e arquitetura do banco de dados do sistema atualizados em tempo real e repassá-los ao término do contrato ou em até 3 (três) dias após a solicitação da CONTRATANTE, por meio do gestor do contrato.</p>
			<Comments :attr="{id:commentId(), context:'10.3'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>10.4. Nos últimos 8 (oito) meses que antecederem o término da vigência contratual, a CONTRATANTE irá nomear uma comissão responsável por cuidar do plano de transição do contrato. Essa comissão terá a prerrogativa de a qualquer momento solicitar à CONTRATADA qualquer informação ou artefato que julgar necessário para garantir que a CONTRATANTE não sofrerá nenhum tipo de interrupção na operação do serviço durante uma troca de fornecedor.</p>
			<Comments :attr="{id:commentId(), context:'10.4'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>10.5. No período de vigência do contrato, sempre que formalmente solicitado, e ao término do contrato, a CONTRATADA entregará ao CONTRATANTE:</p>
			<p>10.5.1. Documentação funcional e manual do usuário da solução;</p>
			<p>10.5.2. Os modelos de dados da solução tecnológica;</p>
			<p>10.5.3. As bases de dados em formato aberto, incluindo toda documentação correlata;</p>
			<p>10.5.4. Dicionário e modelo de dados das bases;</p>
			<p>10.5.5. Os diversos artefatos e produtos gerados ao longo do contrato.</p>
			<p>10.5.6. Manual de todos os serviços digitalizados, incluindo formulários, fluxos internos, base de conhecimento;</p>
			<Comments :attr="{id:commentId(), context:'10.5'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>10.6. A entrega de modelos e bases de dados da solução tecnológica, documentação correlata, bem como de artefatos e produtos gerados ao longo do contrato deverá ser acompanhada de esclarecimentos completos sobre o material disponibilizado, na forma de apresentações. Tais apresentações serão realizadas pela CONTRATADA para as equipes dos órgãos ou entidades quando da entrega de produtos e lavratura dos respectivos Termos de Recebimento Provisório.</p>
			<Comments :attr="{id:commentId(), context:'10.6'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">11. SIGILO, INVIOLABILIDADE E PROTEÇÃO DE DADOS</h2>
			<p>11.1. O uso dos dados, informações e conteúdo oriundos dos serviços contratados está limitado à finalidade da prestação dos serviços, sendo vedado seu uso para finalidades diferentes da expressamente determinada neste documento sem o prévio consentimento da CONTRATANTE, não podendo os dados serem tratados posteriormente de forma incompatível com essa finalidade, incluindo operações de coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração dos dados.
			</p>
			<p>11.1.1. As políticas de proteção de dados pessoais estabelecidas pela CONTRATANTE prevalecerão sobre quaisquer disposições eventualmente diversas no presente Termo de Referência.</p>
			<Comments :attr="{id:commentId(), context:'11.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>11.2. A CONTRATADA deverá assinar TERMO DE SIGILO em anexo, a fim de garantir o sigilo e a inviolabilidade das informações a que eventualmente possa ter acesso, durante a prestação dos serviços de implantação assistida, orientação técnica e capacitação técnica.</p>
			<Comments :attr="{id:commentId(), context:'11.2'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>11.3. A CONTRATADA deverá prestar esclarecimentos à CONTRATANTE sobre eventuais atos ou fatos noticiados que se refiram à mesma.</p>
			<Comments :attr="{id:commentId(), context:'11.3'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">12. ACORDO DE NÍVEL DE SERVIÇO - SERVICE LEVEL AGREEMENT (SLA)</h2>
			<p>12.1. O pagamento dos itens contratados sofrerá incidência de glosa, limitada ao valor total da fatura, em decorrência de execução fora dos níveis de serviço prescritos, conforme estabelecido no ANEXO IV - ACORDOS DE NÍVEL DE SERVIÇO - (SERVICE LEVEL AGREEMENT - SLA) deste Termo de Referência, sendo as ocorrências apuradas e calculadas mensalmente.</p>
			<Comments :attr="{id:commentId(), context:'12.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>12.2. Os primeiros 90 (noventa) dias a partir do início da execução contratual serão considerados como período de estabilização, durante o qual as metas definidas poderão ser flexibilizadas por acordo entre as partes.</p>
			<Comments :attr="{id:commentId(), context:'12.2'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">13. SANÇÕES ADMINISTRATIVAS</h2>
			<p>13.1. Tabela de Ocorrências </p>
			<Comments :attr="{id:commentId(), context:'13.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			[TABELA]

			[TABELA]

			<p>13.2. Ocorrências não encontradas na tabela acima, serão classificadas de acordo com as seguintes definições:</p>
			<p>i. Grau 1: Assim entendidas como aquelas que, isoladamente, não ocasionam impacto direto, mediato ou imediato na execução do serviço, ou ainda de natureza administrativa.</p>
			<p>ii. Grau 2: assim entendidas como aquelas que ocasionam impacto imediato na execução do serviço, ou cuja manutenção pode vir a ocasionar prejuízo econômico, operacional, ou à imagem institucional; ou, ainda, a reincidência de ocorrências Grau 1.</p>
			<p>iii. Grau 3: assim entendidas como aquelas com potencial de ocasionar impacto direto e imediato na execução do serviço, ou prejuízo econômico, operacional, ou à imagem institucional; ou, ainda, a reincidência de ocorrências Grau 2.</p>
			<p>iv. Grau 4: assim entendidas como aquelas que ensejam a rescisão contratual unilateral; ou, ainda, a reincidência de ocorrências Grau 3. </p>
			<Comments :attr="{id:commentId(), context:'13.2'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>13.3. O contrato poderá ser rescindido unilateralmente pela CONTRATANTE por conta do não atendimento a termos contratuais, da recorrência de aplicação de multas, de repetidos eventos de inexecução parcial, ou da caracterização de inexecução total dos serviços.</p>
			<Comments :attr="{id:commentId(), context:'13.3'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>13.4. As sanções aqui previstas são independentes entre si, podendo ser aplicadas isoladamente ou, no caso das multas, cumulativamente com outras, sem prejuízo de outras medidas cabíveis previstas na Lei nº 8.666/1993. </p>
			<Comments :attr="{id:commentId(), context:'13.4'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>13.5. A aplicação de qualquer das penalidades previstas realizar-se-á em processo administrativo que assegurará o contraditório e a ampla defesa, observando-se o procedimento previsto na Lei nº 8.666/1993 e, subsidiariamente, na Lei nº 9.784/1999. </p>
			<Comments :attr="{id:commentId(), context:'13.5'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>13.6. A autoridade competente, na aplicação das sanções, levará em consideração a gravidade da conduta do infrator, o caráter educativo da pena, bem como o dano causado à Administração, observado o princípio da proporcionalidade. </p>
			<Comments :attr="{id:commentId(), context:'13.6'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>13.7. As multas devidas e/ou os prejuízos causados à CONTRATANTE serão deduzidos dos valores a serem pagos, ou recolhidos em favor da CONTRATANTE no prazo máximo de 10 (dez) dias úteis, a contar da data do recebimento da comunicação enviada pela autoridade competente, ou ainda, quando for o caso, inscritos na Dívida Ativa da União e cobrados judicialmente.</p>
			<Comments :attr="{id:commentId(), context:'13.7'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>13.8. A recorrência de faltas ou falhas poderá ensejar aplicação das demais sanções previstas na legislação vigente, cumulativamente à aplicação de multa, observado o disposto neste capítulo.</p>
			<Comments :attr="{id:commentId(), context:'13.8'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">14. COMITÊ DE PREVENÇÃO E SOLUÇÃO DE DISPUTAS</h2>
			<p>14.1. As PARTES instituirão Comitê de Prevenção e Solução de Disputas (“CPSD”), de acordo com as regras constantes da Lei Municipal nº. 16.873, de 22 de fevereiro de 2018, para a solução de disputas ou controvérsias decorrentes ou relativas a este Contrato.</p>
			<p>14.1.1. As PARTES se comprometem a respeitar as decisões do CPSD.</p>
			<p>14.1.2. Em nenhuma hipótese a existência de disputa ou controvérsia dará direito às PARTES de interromper a execução do Contrato.</p>
			<p>14.1.3. Em caso de inconformismo com qualquer das manifestações do CPSD, poderão as Partes recorrer ao Poder Judiciário, hipótese, contudo, que não as desobriga de observar as decisões do CPSD, aos menos até que estas não sejam afastadas por decisão judicial.</p>
			<p>14.1.4. Qualquer ação judicial relacionada ao presente Contrato, para ser proposta, deverá ser precedida de tentativa de solução da controvérsia mediante atuação do CPSD.</p>
			<Comments :attr="{id:commentId(), context:'14.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>14.2. O CPSD entrará em funcionamento tão somente com a assinatura do respectivo Termo de Compromisso pelas Partes e membros, o que deverá ocorrer quando da instauração da primeira controvérsia entre as Partes deste Contrato.</p>
			<Comments :attr="{id:commentId(), context:'14.2'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>14.3. O CPSD poderá ser composto por pessoas diretamente indicadas pelas Partes ou mediante a contratação de entidade que tenha entre suas finalidades institucionais esse tipo de atividade.</p>
			<Comments :attr="{id:commentId(), context:'14.3'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>14.4. O custeio do CPSD será igualmente dividido entre as Partes deste Contrato. O pagamento das referidas despesas se dará na forma estabelecida pelo artigo 4º da Lei Municipal nº. 16.783, de 22 de fevereiro de 2018.</p>
			<Comments :attr="{id:commentId(), context:'14.4'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">15. OBRIGAÇÕES DA CONTRATADA</h2>
			<p>15.1. Cumprir fielmente as condições e exigências contidas neste Termo de Referência e seus anexos;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.2. Indicar e manter preposto apto a representá-la junto à CONTRATANTE, que deverá responder pela fiel execução do contrato, com poderes de representante legal para tratar de todos os assuntos relacionados ao contrato, em conformidade com a Lei nº 8.666/1993;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.3. Propiciar todos os meios e facilidades necessários à fiscalização do contrato pela CONTRATANTE, cujos representantes terão poderes para sustar a execução, total ou parcialmente, a qualquer tempo, sempre que considerar a medida necessária;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.4. Atender prontamente a quaisquer orientações e exigências da equipe de fiscalização do contrato, inerentes à execução do objeto contratual;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.5. Fiscalizar o cumprimento do objeto contratual, cabendo-lhe integralmente o ônus decorrente, independentemente da fiscalização que será exercida pela CONTRATANTE;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.6. Comunicar à equipe de fiscalização do contrato, formalmente, quando verificar quaisquer ocorrências que possam prejudicar a perfeita execução do contrato;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.7. Manter, durante a execução do contrato, todas as condições exigidas para a habilitação, em conformidade com a Lei nº 8.666/1993;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.8. Manter, durante a execução do contrato, equipe técnica composta por profissionais devidamente habilitados, treinados e qualificados para fornecimento dos itens objeto de contratação, conforme especificado neste Termo de Referência;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.9. Manter a produtividade e as capacidades mínimas da solução tecnológica durante a execução do contrato, conforme os requisitos técnicos estabelecidos e os níveis de serviço prescritos;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.10. Substituir, de imediato, qualquer profissional cuja conduta seja considerada inconveniente pela CONTRATANTE;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.11. Responsabilizar-se pelo cumprimento das prescrições referentes às leis trabalhistas, de previdência social e normas regulamentadoras da medicina e segurança do trabalho;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.12. Assumir a responsabilidade por todas as providências e obrigações estabelecidas na legislação específica de acidentes de trabalho quando, em ocorrência da espécie, forem vítimas seus profissionais no desempenho dos trabalhos ou em conexão com eles, ainda que ocorridos em repartições públicas;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.13. Responsabilizar-se única e exclusivamente pelo pagamento de todos os encargos e demais despesas, diretas ou indiretas, decorrentes da execução do objeto do presente Termo de Referência;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.14. Responsabilizar-se pelo ônus decorrente de todas as reclamações e/ou ações judiciais ou extrajudiciais, por culpa ou dolo, que possam eventualmente ser alegadas por terceiros contra a CONTRATANTE, procedentes da realização dos trabalhos do objeto deste Termo de Referência;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.15. Informar, com antecedência mínima de 18 (dezoito) meses do término do período de vigência do contrato, o interesse ou não na prorrogação contratual;</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.16. Submeter-se à legislação brasileira e à justiça brasileira, que prevalecerão sobre quaisquer outras, nos contratos que vierem a ser firmados decorrentes deste Termo de Referência.</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.17. Observar as disposições da Lei 12.965/2014 – Marco Civil da Internet.</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.18. Observar as disposições da Lei 13.709/2018 – Lei Geral de Proteção de Dados, permitindo a transparência e acessibilidade para o munícipe quanto ao tratamento de seus dados pessoais e a prestação de contas por meio da extração de relatórios de auditoria quanto à gestão do tratamento dos dados pessoais realizado pela CONTRATANTE.</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.19. Durante a vigência contratual, caso a CONTRATADA queira apresentar novo(s) profissional(ais) com a(s) certificação(ões) para atender à(s) exigência(s) descrita(s) neste Termo de Referência deverá entregar a documentação descrita neste Termo de Referência.</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>15.20. Entregar à CONTRATANTE a documentação de todos os produtos finais dos trabalhos de Orientação Assistida, como levantamento dos processos, integrações sistêmicas, painéis de indicadores e parametrizações na Solução Integrada.</p>
			<Comments :attr="{id:commentId(), context:'15.1'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">16. OBRIGAÇÕES DA CONTRATANTE</h2>
			<p>16.1. Nomear Gestor e Fiscais técnico e administrativo do contrato, para acompanhar e fiscalizar a execução dos contratos, em conformidade com a Lei nº 8.666/1993;</p>
			<Comments :attr="{id:commentId(), context:'16.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>16.2. Encaminhar as demandas, por meio de Ordem de Serviço, de acordo com os critérios estabelecidos neste Termo de Referência;</p>
			<Comments :attr="{id:commentId(), context:'16.2'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>16.3. Aprovar ou rejeitar, no todo ou em parte, os produtos entregues pela CONTRATADA;</p>
			<Comments :attr="{id:commentId(), context:'16.3'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>16.4. Receber o objeto fornecido pela CONTRATADA que esteja em conformidade com a proposta aceita, conforme procedimentos de aceitação descritos neste Termo de Referência;</p>
			<Comments :attr="{id:commentId(), context:'16.4'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>16.5. Aplicar à CONTRATADA as sanções administrativas regulamentares e contratuais cabíveis;</p>
			<Comments :attr="{id:commentId(), context:'16.5'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>16.6. Liquidar o empenho e efetuar o pagamento à CONTRATADA, considerando as condições e os prazos preestabelecidos neste Termo de Referência;</p>
			<Comments :attr="{id:commentId(), context:'16.6'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>16.7. Comunicar à CONTRATADA todas e quaisquer ocorrências relacionadas ao fornecimento dos itens objeto do contrato;</p>
			<Comments :attr="{id:commentId(), context:'16.7'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>16.8. Notificar à CONTRATADA quaisquer irregularidades e inconformidades observadas durante a execução do contrato, bem como eventuais ocorrências relativas a comportamento inadequado de seus profissionais;</p>
			<Comments :attr="{id:commentId(), context:'16.8'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>16.9. Definir produtividade ou capacidade mínima da solução tecnológica, conforme os requisitos técnicos estabelecidos e os níveis de serviço prescritos nos Anexos;</p>
			<Comments :attr="{id:commentId(), context:'16.9'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>16.10. Realizar prova de conceito com o licitante classificado provisoriamente em primeiro lugar, para fins de comprovação do atendimento da solução tecnológica aos requisitos funcionais estabelecidos nos Anexos I e II;</p>
			<Comments :attr="{id:commentId(), context:'16.10'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>16.11. Prever que os direitos de propriedade intelectual e direitos autorais sobre os diversos artefatos e produtos produzidos ao longo do contrato, incluindo a documentação, os modelos de dados e as bases de dados, pertençam à Administração, justificando os casos em que isso não ocorrer;</p>
			<Comments :attr="{id:commentId(), context:'16.11'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>16.12. Envidar esforços para viabilizar o acesso dos profissionais da CONTRATADA às dependências dos órgãos e entidades em que serão realizados os trabalhos, quando necessário, de acordo com normas e procedimentos previamente estabelecidos;</p>
			<Comments :attr="{id:commentId(), context:'16.12'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>16.13. Prestar as informações e os esclarecimentos que venham a ser solicitados pelos profissionais da CONTRATADA necessários para execução do objeto deste Termo de Referência.	</p>
			<Comments :attr="{id:commentId(), context:'16.13'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">17. GARANTIA CONTRATUAL</h2>
			<p>17.1. Será exigida, quando da convocação da CONTRATADA para assinar o contrato, prestação de garantia em qualquer das modalidades previstas no parágrafo 1º do artigo 56 da Lei nº 8.666/93 no valor de 5% (cinco por cento) do valor do contrato.</p>
			<Comments :attr="{id:commentId(), context:'17.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>17.2. As garantias e seus reforços responderão por todas as multas que forem impostas à CONTRATADA e por todas as importâncias que, a qualquer título, forem devidas pela CONTRATADA à CONTRATANTE.</p>
			<Comments :attr="{id:commentId(), context:'17.2'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">18. FORMA DE FATURAMENTO E PAGAMENTO</h2>
			<p>18.1. A CONTRATADA realizará o faturamento das Ordens de Serviço executadas mensalmente, mediante apresentação da prévia-da-fatura à CONTRATANTE, já descontadas as glosas em função do não atendimento aos resultados esperados e Nível Mínimo de Serviço exigido para a execução das Tarefas.</p>
			<Comments :attr="{id:commentId(), context:'18.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>18.2. A CONTRATADA apresentará memória de cálculo do desconto das glosas, para fim de arquivo histórico de desempenho.</p>
			<Comments :attr="{id:commentId(), context:'18.2'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>18.3. A CONTRATADA faturará somente as Ordens de Serviço efetivamente concluídas com os respectivos quantitativos e Nível Mínimo de Serviço exigido, atestadas e aceitas pela CONTRATANTE.</p>
			<Comments :attr="{id:commentId(), context:'18.3'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>18.4. O fiscal técnico do contrato deverá avaliar as informações da prévia da fatura em até 3 (três) dias úteis. Caso a prévia da fatura esteja em conformidade com os serviços prestados no mês de referência, o Fiscal irá autorizar a emissão da Nota Fiscal/Fatura, do contrário, caberá ao Fiscal devolvê-la à CONTRATADA para o devido ajuste.</p>
			<Comments :attr="{id:commentId(), context:'18.4'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>18.5. A CONTRATADA deverá encaminhar a Nota Fiscal/Fatura até 3 (três) dias úteis após a autorização do Fiscal.</p>
			<Comments :attr="{id:commentId(), context:'18.5'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>18.6. A CONTRATADA deverá apresentar na Nota Fiscal/Fatura o faturamento detalhado correspondente aos serviços prestados, vinculando a ela a referência da Nota de Empenho que deu suporte às despesas.</p>
			<Comments :attr="{id:commentId(), context:'18.6'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>18.7. O prazo de pagamento será de até 30 (trinta) dias corridos, a contar da data da entrega da nota fiscal ou nota fiscal fatura, acompanhada da documentação exigida na Portaria SF 92/2014 e alterações que venham a ocorrer.</p>
			<p>18.7.1. Caso venha ocorrer a necessidade de providências complementares por parte da CONTRATADA, a fluência do prazo será interrompida, reiniciando-se a contagem a partir da data em que estas forem cumpridas.</p>
			<p>18.7.2. O pagamento será efetuado por crédito em conta corrente de titularidade da CONTRATADA no Banco do Brasil, conforme estabelecido no Decreto nº 51.197/2010.</p>
			<p>18.7.3. Havendo atraso nos pagamentos por parte da CONTRATANTE, serão aplicadas as regras da Portaria SF nº 05/2012.</p>
			<Comments :attr="{id:commentId(), context:'18.7'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">19. GESTÃO CONTRATUAL</h2>
			<p>19.1. ORDENS DE SERVIÇOS</p>
			<p>19.1.1. Todos os serviços, salvo solicitações emergenciais, serão demandados através de Ordens de Serviços, registradas em sistema de Service Desk ou de Gestão de projetos fornecidas pela CONTRATADA.</p>
			<p>19.1.2. Estas OS’s podem ser para serviços rotineiros ou sob demanda, para execução em horas úteis ou fora do horário normal, conforme cláusulas deste Termo de Referência.</p>
			<p>19.1.3. As informações que devem estar contidas em uma OS serão pactuadas entre CONTRATANTE e CONTRATADA e devem permitir a aferição do serviço e os acordos de nível de serviço.</p>
			<p>19.1.4. Uma vez solicitado o serviço, a CONTRATADA deverá alocar profissionais, de acordo com os perfis e serviços definidos no Termo de Referência e anexos, em tempo hábil para a consecução das atividades e condições estabelecidas na OS.</p>
			<p>19.1.4.1. O prazo para envio de planejamento preliminar por parte da CONTRATADA é de 3 dias úteis a partir da solicitação.</p>
			<p>19.1.5. Deverá ser estabelecido modelo para as OS’s criadas durante a execução deste contrato.</p>
			<p>19.1.6. Os produtos serão considerados entregues e o Termo de Recebimento será emitido pela CONTRATANTE em até 10 (dez) dias úteis.</p>
			<p>19.1.6.1. Caso as entregas possuam erros, a CONTRATADA deverá corrigi-los em no máximo prazo equivalente a um quarto do tempo de execução dos ciclos de entrega.</p>
			<Comments :attr="{id:commentId(), context:'19.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>19.2. FISCALIZAÇÃO CONTRATUAL</p>
			<p>19.2.1. O fiscal do contrato autoriza o serviço mediante emissão de Ordem de Serviço – OS.</p>
			<p>19.2.2. Mensalmente, até o quinto dia útil do mês, o preposto da CONTRATADA encaminhará ao Gestor do contrato, no mínimo, a seguinte documentação:</p>
			<p>19.2.2.1. Relatório Mensal de Atividades elaborado por meio da medição dos serviços realizados, que tomará como referência as especificações e condições contidas nas OS’s e nos resultados apurados da efetiva prestação dos serviços;</p>
			<p>19.2.2.1.1. Todos os serviços de todas as OS’s concluídas no mês anterior devem constar do Relatório Mensal de Atividades.</p>
			<p>19.2.2.1.2. O Relatório Mensal de Atividades poderá ser aprimorado ao longo da execução do contrato de acordo com necessidades da CONTRATANTE.</p>
			<p>19.2.2.2. Relatório de Nível de Serviço que deverá conter a medição de todos os Indicadores relativos a glosas e outros demandados pela CONTRATANTE.</p>
			<p>19.2.3. Mensalmente, será feita a validação dos Relatórios de Atividades e de Nível de Serviço pelo fiscal técnico do contrato.</p>
			<p>19.2.4. A documentação administrativa será validada pelo fiscal administrativo.</p>
			<Comments :attr="{id:commentId(), context:'19.2'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">20. PERFIS PROFISSIONAIS </h2>
			<p>20.1. Justificativa</p>
			<p>20.1.1. Considerando a criticidade do serviço do SP156, não é razoável permitir que os serviços de transformação de processos e integração sejam realizados por profissional sem o preparo técnico adequado. Tendo em vista que a operação do SP156 atende milhares de cidadãos, qualquer problema causa prejuízos consideráveis às atividades fins da Prefeitura. Com vistas a reduzir o risco de falhas, a CONTRATANTE buscou identificar formas de assegurar nível de conhecimento do profissional que será encarregado dos serviços. Essa medida não elimina os riscos, mas os mitiga de forma considerável.</p>
			<p>20.1.2. Os serviços deverão ser executados por especialistas habilitados, considerando os perfis definidos na tabela de perfis profissionais, a capacitação desses profissionais deve ter base em programas de formação e certificações oficiais, oferecendo indícios de capacidade técnica mínima para atender às complexidades especificadas neste TERMO DE REFERÊNCIA, requisito este em consonância com o Tribunal de Contas da União (TCU): “Em diversas assentadas, este Tribunal reconheceu como válida a exigência de comprovação de ambos os ângulos da capacitação técnica, que deverá abranger tanto o aspecto operacional (demonstração de possuir aptidão para o desempenho de atividade pertinente e compatível com o objeto do certame) como o profissional (deter, no quadro permanente, profissionais aptos a executar serviço de características semelhantes àquele pretendido pela Administração). Nesse sentido, vale destacar as Decisões no 395/95-Plenário, 432/96-Plenário, 217/97-Plenário, 285/00- Plenário, 2.656/2007-Plenário, bem como o Acórdão no 32/2003- 1a Câmara. (Acórdão no 1.265/2009, Plenário, rel. Min. Benjamin Zymler)” e “O inciso I do § 1o do art. 30 da Lei no 8.666/93 disciplina justamente a capacitação técnico-profissional, não havendo dúvidas nesse aspecto. A controvérsia que poderia ser levantada relaciona-se à possibilidade de exigência de capacidade técnico-operacional, tendo em vista o veto presidencial ao inciso II do § 1o do art. 30, que disciplinava essa questão. No entanto, tanto a doutrina como a jurisprudência desta Corte propugnam por sua possibilidade. (Acórdão no 1.332/2006, Plenário, rel. Min. Walton Alencar Rodrigues)”</p>
			<Comments :attr="{id:commentId(), context:'20.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>20.2. Definição de perfis profissionais</p>
			<p>20.2.1. Os serviços especializados (item 4) serão prestados pelos seguintes perfis profissionais: Gerente Sênior de Entregas Ágeis; Analista de Design de Serviços; Analista de Tecnologia da informação; Especialista na solução contratada; Especialista de Chatbot.</p>
			<p>20.2.2. O ANEXO VI prevê um organograma sugerido bem como o detalhe dos perfis profissionais e as exigências mínimas de formação, certificação e experiência requisitados para atuar nos perfis durante a execução do contrato.</p>
			<p>20.2.2.1. Quanto aos Analistas e Especialistas, foram descritos os perfis Senior. Os perfis Pleno e Junior diferenciam-se somente pela experiência profissional relevante reduzida (cf. 20.3.2).</p>
			<p>20.2.3. A previsão de perfis profissionais não impede que outros perfis sejam alocados por parte da CONTRATADA, desde que sejam previamente acordados com a CONTRATANTE com qualificações similares ou superiores aos dos perfis já existentes e desde que sejam necessários para a execução do serviço com qualidade.</p>
			<p>20.2.4. A equipe técnica não poderá acumular a função de preposto da CONTRATADA.</p>
			<Comments :attr="{id:commentId(), context:'20.2'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>20.3. Equipes multidisciplinares</p>
			<p>20.3.1. Ainda que este TR defina os perfis profissionais para garantir a qualidade do serviço prestado, espera-se da CONTRATADA perfis no modelo “T”, ou seja, que possuam conhecimentos gerais, mas que também se possuam aprofundamento em determinados conhecimentos e habilidades. Com isso espera-se a formação de equipes multidisciplinares que atuem de forma colaborativa e inovadora.</p>
			<p>20.3.2. As equipes serão formadas em regra por até três perfis de analista/especialista. A alocação de uma equipe deverá ser acompanhada da alocação de um perfil de gerente, que poderá gerenciar até nove analistas/especialistas.</p>
			<Comments :attr="{id:commentId(), context:'20.3'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>20.4. Diligência Prévia de Capacidade Técnica</p>
			<p>20.4.1. Muito embora os requisitos formais sejam breves, cada funcionário indicado pela CONTRATADA deverá passar por uma diligência prévia de capacidade técnica (DPC). A DPC visa a garantir que o funcionário indicado pela CONTRATADA possui a capacidade técnica e a experiência para o desempenho das atividades contratuais previstas. Objetivamente, a diligência consiste em uma apresentação de 30 a 60 minutos realizada pelo funcionário, para gestores da área de tecnologia da informação da CONTRATANTE. O conteúdo da apresentação versará sobre um projeto/sistema em que o funcionário tenha trabalhado, e deverá realçar temas como: a natureza do problema negocial envolvido; a arquitetura da solução; desafios negociais e/ou técnico projeto; detalhes da implementação. Em especial para o cargo de AP, a apresentação deverá entrar em algum detalhe de implementação em código-fonte (qualquer linguagem será aceita). O resultado da DPC será “satisfatório” ou “insatisfatório”. Apenas os funcionários que obtiverem grau “satisfatório” serão considerados aptos a serem alocados em contrato. Para garantir a transparência e a lisura da DPC, quatro medidas serão tomadas:</p>
			<p>20.4.2. toda DPC terá seu áudio gravado, de maneira a se permitirem recursos da CONTRATADA;</p>
			<p>20.4.3. da DPC deverão participar três representantes da CONTRATANTE, preferencialmente o Diretor da Divisão de Desenvolvimento, o fiscal técnico e um analista; e o preposto e mais um representante, pela CONTRATADA;</p>
			<p>20.4.4. em caso de conflito de interesse (como relações de parentesco ou amizade com o candidato), o membro da CONTRATANTE será impedido de participar do processo; e</p>
			<p>20.4.5. o resultado do processo deverá indicar, em detalhe, as razões que o substanciaram.</p>
			<Comments :attr="{id:commentId(), context:'20.4'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">21. ACEITABILIDADE DAS PROPOSTAS</h2>
			<p>21.1. Para efeito de aceitabilidade da proposta, considera-se manifestamente inexequível aquela que, comprovadamente, for insuficiente para a cobertura dos custos decorrentes da contratação.</p>
			<Comments :attr="{id:commentId(), context:'21.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>21.2. O seguinte procedimento será utilizado para identificar e analisar a exequibilidade das propostas:</p>
			<p>21.2.1. Identificar: a comissão de licitação identifica proposta potencialmente inexequível com base no valor de referência estabelecido no item 21.3;</p>
			<p>21.2.2. Esclarecer: a comissão de licitação solicita esclarecimento do licitante sobre a exequibilidade da proposta apresentada, sob pena de desclassificação;</p>
			<p>21.2.3. Justificar: o licitante possui prazo de 24 horas para justificar o preço de sua proposta de acordo com a solicitação da comissão de licitação, de acordo com as diretrizes do item 21.4;</p>
			<p>21.2.4. Verificar: a comissão de licitação analisa a justificativa do licitante para avaliar se a proposta é inexequível;</p>
			<p>21.2.5. Decidir: a comissão de licitação decide e justifica o aceite ou desclassificação da proposta</p>
			<Comments :attr="{id:commentId(), context:'21.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>21.3. Com relação ao item 4 - “Serviços Especializados - Transformação, design e digitalização de serviços públicos digitais com o uso da solução tecnológica”, a CONTRATANTE utilizará parâmetros salariais de mercado para identificação de propostas potencialmente inexequíveis a partir da Planilha de Formação de Preços detalhada no ANEXO III.</p>
			<p>21.3.1. Considerando as competências multidisciplinares dos analistas e especialistas, os diversos perfis devem estar em uma mesma faixa de remuneração, diferenciados somente pela categoria de gerente ou analista/especialista.</p>
			<p>21.3.2. Com vistas a balizar a CONTRATANTE em relação aos valores de remuneração praticados pelo mercado, foi utilizada uma pesquisa salarial contratada junto a empresa especializada, com base em salários mensurados no ano de 2018. Conforme justificativas desenvolvidas com relação à necessidade de perfis profissionais, a CONTRATADA adotou como referência salarial o 3º Quartil da pesquisa salarial contratada de modo a atrair e reter profissionais qualificados pela Secretaria. Assim, os salários de referência que serão usados como base para aferição da aceitabilidade das propostas são alistados na tabela a seguir:</p>

			[TABELA]
			<Comments :attr="{id:commentId(), context:'21.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>21.4. Na demonstração de custos, em caso de exigência de comprovação de exequibilidade, a licitante deverá, adicionalmente:</p>
			<p>21.4.1. Identificar o salário estimado a ser pago a cada perfil previsto no edital, para os serviços a serem assumidos, dos profissionais que prestarão os serviços, considerando o nível de senioridade e tempo de experiência exigidos no Anexo VI - Perfis Profissionais.</p>
			<p>21.4.2. Para efeito de comprovação de exequibilidade a produtividade admitida é de 6 UST por hora.</p>
			<p>21.4.3. Demonstrar que considerou todos os encargos sociais e trabalhistas inerentes à prestação dos serviços.</p>
			<p>21.4.4. Demonstrar que considerou os demais benefícios decorrentes de Convenção Coletiva de Trabalho da categoria.</p>
			<p>21.4.5. Demonstrar que pratica ou praticou os salários propostos, atraindo e retendo profissionais correspondentes aos perfis profissionais (Anexo VI) por pelo menos 30 meses, por meio de documentação a ser exigida pela CONTRATANTE, que poderá abranger: cópias das folhas de pagamento, comprovante de pagamento de salários e demais obrigações trabalhistas e sociais, como contracheques com recibo do empregado, cópia de Guias de Recolhimento do FGTS e informações à Previdência Social – GRF, gerada e impressa pelo Sistema Empresas de Recolhimento do FGTS e Informações à Previdência Social – SEFIP, com autenticação ou acompanhadas do comprovante do recolhimento bancário ou do comprovante emitido quando o recolhimento for feito pela internet, entre outras, para cada perfil, cujas atividades desempenhadas sejam similares às do objeto a ser contratado.</p>
			<p>21.4.5.1. A licitante poderá demonstrar por outros meios, legalmente válidos, desde que as remunerações dos profissionais sejam explicitamente informadas e as qualificações dos profissionais atendam às previstas para o referido perfil constante nos anexos deste TR.</p>
			<p>21.4.5.1.1. Em caso de apresentação de documentação/declaração de próprio punho de profissionais, os respectivos documentos deverão contemplar o reconhecimento de firma do profissional.</p>
			<p>21.4.5.2. Para fins de comprovação de exequibilidade, a licitante deverá apresentar ao menos um profissional para cada perfil profissional definido no Anexo VI - Perfis profissionais.</p>
			<p>21.4.5.3. As empresas licitantes poderão realizar simulações por meio do modelo de planilha de custos “simulador de exequibilidade” disponibilizada, inserindo os valores salariais unitários para cada perfil profissional, bem como, os percentuais dos encargos, alíquotas e tributos, para verificar se suas propostas serão consideradas inexequível ou não.</p>
			<p>21.4.6. Se persistirem indícios de inexequibilidade da proposta de preço, ou em caso da necessidade de informações complementares, poderão ser solicitados esclarecimentos por meio de diligências, na forma do § 3° do artigo 43 da Lei n° 8.666, de 1993.</p>
			<Comments :attr="{id:commentId(), context:'21.1'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">22. QUALIFICAÇÃO TÉCNICA</h2>
			<p>22.1. Considerando que por meio deste Termo de Referência serão automatizados serviços públicos que a CONTRATANTE oferece à sociedade, os critérios de qualificação técnica declinados buscam minimizar riscos associados a contratações desta relevância. Neste sentido, nos termos do art. 30 da Lei no 8.666/1993, os Atestados de Capacidade Técnica (ACT) exigidos objetivam assegurar que a licitante tenha a experiência necessária para prestar os serviços, enquanto que demais os documentos solicitados visam garantir aspectos mínimos de segurança, confiabilidade e compatibilidade técnica da solução tecnológica.</p>
			<Comments :attr="{id:commentId(), context:'22.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>22.2. Qualificação Técnica será comprovada mediante os seguintes documentos:</p>
			<p>22.2.1. Atestados de Capacidade Técnica (ACT) em nome da licitante, expedidos por pessoas jurídicas de direito público ou privado, do País ou do exterior, que comprovem fornecimento compatível com os serviços constantes deste Termo de Referência:</p>
			<p>a) Ter fornecido a solução tecnológica ofertada em sua proposta de Plataforma Multicanal e Gerenciamento do Relacionamento com o Cidadão, com todos os seus módulos, para pelo menos 50% do quantitativo de usuários solicitados para os perfis “Atendimento”, “Operacional”, “Gerencial” e “Configuração” .</p>
			<p>b) Ter executado serviços técnicos de disponibilização e implantação da solução, contemplando manutenção corretiva e evolutiva dos aplicativos, capacitação, desenvolvimento de novas funcionalidades e sustentação, em modelo de fornecimento SaaS (Software as a Service), por um período mínimo de 12 meses.</p>
			<p>c) Ter executado serviços técnicos de transformação de processos utilizando métodos ágeis e design de serviços para pelo menos 50% do quantitativo solicitado durante um período de doze meses.</p>
			<p>d) Ter executado serviços de desenvolvimento de integração de aplicações com a solução integrada, por meio do uso do padrão SOA ("Services Oriented Architecture"), para pelo menos 50% do quantitativo solicitado durante um período de doze meses.</p>
			<p>e) Ter prestado serviços de capacitação semelhante ao descrito neste Termo de Referência, com o equivalente a pelo menos 50% do quantitativo solicitado.</p>
			<p>22.2.1.1. No caso de atestados emitidos por empresa da iniciativa privada, não serão considerados aqueles emitidos por empresa pertencente ao mesmo grupo empresarial da licitante, sua subsidiária, controlada ou controladora e por empresa na qual haja pelo menos uma mesma pessoa física ou jurídica que seja sócio da empresa emitente e da licitante.</p>
			<p>22.2.1.2. Encontrada divergência entre o especificado nos atestados e o apurado em eventual diligência, inclusive validação do Contrato de prestação de serviços entre o emissor do atestado e a licitante, além da desclassificação no processo licitatório, fica sujeita a licitante às penalidades cabíveis.</p>
			<p>22.2.1.3. A CONTRATANTE poderá realizar diligência/visita técnica, a fim de complementar informações ou de comprovar a veracidade do(s) Atestado(s) de Capacidade Técnica apresentado(s) pela LICITANTE convocada, quando poderá ser requerida cópia do(s) contrato(s), nota(s) fiscal(is) ou qualquer outro documento que comprove inequivocamente que o serviço apresentado no(s) atestado(s) foi prestado.</p>
			<p>22.2.2. Documentações e declarações das soluções propostas e de sua compatibilidade com os requisitos deste Termo de Referência e seus anexos:</p>
			<p>a) Declaração ou documento correlato expedido pela empresa proprietária (desenvolvedora) da Solução Tecnológica ofertada que ateste que a Solução atende aos Requisitos Técnicos especificados no Anexo I e II do Termo de Referência.</p>
			<p>b) Declaração de que a solução ofertada possui no mínimo três empresas, integradoras de soluções, com capacidade de suportar a solução no mercado brasileiro;</p>
			<p>c) Apresentar documentos relativos a comprovação de oferta de programa de treinamento e certificação para arquitetos da solução. Tal programa deverá estar aberto ao mercado, e não apenas para funcionários internos dos integradores da solução.</p>
			<p>22.2.3. Certificados ou acreditações por organismo credenciado, expedidos por pessoas jurídicas competentes para tanto, que comprovem:</p>
			<p>a) a conformidade da Solução Tecnológica ofertada com a ABNT NBR ISO/IEC 27001:2013, que especifica os requisitos para estabelecer, implementar, manter, melhorar e tratar riscos de forma continuada de um sistema de gestão da segurança da informação;</p>
			<p>b) a conformidade da Solução Tecnológica ofertada com a ABNT NBR ISO/IEC 27017:2016, que fornece diretrizes para os controles de segurança da informação aplicáveis à prestação e utilização de serviços em nuvem, sendo excepcionalmente admitida uma auto declaração de conformidade com esta norma, por se tratar de certificação recente no País, e poderá ser realizada diligência, a qualquer tempo, para atestar que os requisitos e controles de segurança da informação prescritos pela norma ABNT NBR ISO/IEC 27017:2016 foram atendidos satisfatoriamente;</p>
			<p>c) a disponibilidade dos serviços em conformidade com a certificação TIA 942 TIER II (data center uptime 99,741%).</p>
			<Comments :attr="{id:commentId(), context:'22.2'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">23. PROVA DE CONCEITO DA SOLUÇÃO TECNOLÓGICA</h2>
			<p>23.1. Após a habilitação, a LICITANTE classificada provisoriamente em primeiro lugar deverá apresentar AMOSTRA da utilização e do funcionamento da Solução Integrada, no prazo de até 2 (dois) dias úteis, quando, a CONTRATANTE dará início à fase de Prova de Conceito do Serviço de plataforma multicanal integrada para atendimento, gerenciamento do relacionamento com o cidadão, digitalização e automação de processos.</p>
			<Comments :attr="{id:commentId(), context:'23.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>23.2. Local e horário da Prova de Conceito: Secretaria Municipal de Inovação e Tecnologia – SMIT; Centro, São Paulo.</p>
			<p>23.2.1. A Prefeitura de São Paulo proverá todo o ambiente necessário (equipamentos e infraestrutura) no endereço acima para o acesso à solução integrada, cabendo à LICITANTE a comprovação do atendimento às funcionalidades dos ANEXO I e II. O provimento do ambiente utilizado exclusivamente para os testes da etapa de prova de conceito inclui o fornecimento dos acessórios como: gerador de tráfego, switches, roteadores, transceptores, cabos, etc. A critério da Prefeitura de São Paulo, a composição do ambiente necessário poderá ser realizada em conjunto.</p>
			<p>23.2.2. A prova acontecerá no local de entrega da Plataforma, durante o horário comercial (9:00 às 18:00 horas), respeitando a carga horária diária de 8 horas. Os horários de início e intervalos serão definidos em comum acordo entre a LICITANTE e a Equipe Técnica da Prefeitura de São Paulo.</p>
			<Comments :attr="{id:commentId(), context:'23.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>23.3. A Prova de Conceito compreende:</p>
			<p>23.3.1. Definição de Ambiente: a LICITANTE deverá se reunir com a equipe técnica da CONTRATANTE, em local a ser definido no município de São Paulo, no prazo máximo de 02 (dois) dias úteis após solicitação formal da CONTRATANTE. A data da reunião deverá ser agendada em comum acordo entre a CONTRATANTE e o vencedor do certame. Nesta reunião:</p>
			<p>23.3.1.1. A LICITANTE deverá informar todos os requisitos necessários ao ambiente a ser disponibilizado pela Prefeitura de São Paulo, para que a solução apresentada pela LICITANTE possa ser avaliada.</p>
			<p>23.3.1.2. Deverá ser definida a lista de produtos que serão entregues na etapa seguinte, se existir.</p>
			<p>23.3.1.3. Caso a reunião não ocorra por problema único e exclusivo da LICITANTE, a Prova de Conceito acontecerá no ambiente padrão de teste da Prefeitura de São Paulo. Nesta situação é vedada à LICITANTE reivindicar qualquer adaptação na infraestrutura oferecida pela Prefeitura de São Paulo.</p>
			<p>23.3.1.4. A CONTRATANTE disponibilizará ROTEIRO DETALHADO DE PROVA DE CONCEITO a ser seguido na etapa de comprovação, o qual será baseado nos ANEXOS I e II.</p>
			<p>23.3.1.5. O ROTEIRO DETALHADO DE PROVA DE CONCEITO será publicado para dar transparência ao processo</p>
			<p>23.3.2. Disponibilização: a LICITANTE deverá disponibilizar a plataforma multicanal integrada para atendimento, gerenciamento do relacionamento com o cidadão, digitalização e automação de processos, no endereço abaixo, no prazo máximo de 05 (cinco) dias úteis, contados a partir do dia seguinte à realização da reunião descrita acima ou o fim do prazo para a realização da mesma, o que ocorrer primeiro, em horário comercial (de 9:00 às 18:00 horas). A LICITANTE deverá disponibilizar 01 (um) técnico que se responsabilizará pela disponibilização e configuração dos softwares da solução. A LICITANTE deverá apresentar a documentação técnica de plataforma multicanal integrada para atendimento, gerenciamento do relacionamento com o cidadão, digitalização e automação de processos, contemplando informações detalhadas de todos os itens e modelos que compõem a mesma, conforme descrito nos ANEXOS I e II.</p>
			<p>23.3.3. Comprovação: esta etapa será realizada por um período máximo de 10 (dez) dias úteis, com uma carga horária diária de 8 horas, a contar do dia seguinte à conclusão do prazo para a etapa de Disponibilização, conforme informado pelo pregoeiro em sessão pública. A partir do primeiro dia desta etapa, a LICITANTE deverá:</p>
			<p>23.3.3.1. Utilizar como referência os Anexos I e II informando, a página da documentação técnica que referencia o requisito a ser avaliado conforme documentação técnica previamente entregue anexa à proposta comercial. Caso existam requisitos não descritos na documentação técnica, que sejam atestados exclusivamente por meio de testes na Prova de Conceito, o respectivo requisito do Anexos I e II deverá ser preenchido com o texto "COMPROVAÇÃO PRÁTICA".</p>
			<p>23.3.3.2. Disponibilizar 02 (dois) técnicos que se responsabilizarão pela comprovação das funcionalidades e requisitos em conformidade com o ROTEIRO DETALHADO DE PROVA DE CONCEITO, baseado nos Anexos I e II, por meio de testes práticos ou por comandos de configuração. A aprovação das funcionalidades existentes na plataforma multicanal integrada para atendimento, gerenciamento do relacionamento com o cidadão, digitalização e automação de processos apresentada pela LICITANTE será efetuada pela Equipe Técnica da Prefeitura de São Paulo.</p>
			<p>23.3.3.3. A entrega do Anexos I e II devidamente preenchido não exclui a necessidade de comprovação do atendimento aos requisitos por meio de testes práticos ou por comandos de configuração durante a realização da Prova de Conceito. No entanto, os itens destacados no ROTEIRO DETALHADO DE PROVA DE CONCEITO, baseado nos Anexos I e II, com o termo “aceita-se documentação”, não necessitarão de comprovação prática na Prova de Conceito.</p>
			<p>23.3.3.4. A Prefeitura de São Paulo poderá exigir a comprovação agrupada de itens relacionados da Especificação Técnica, mesmo que algum item específico já tenha obtido comprovação prévia pelo LICITANTE. Desta forma, para comprovação de um item "x", pode ser exigido que se considere também a funcionalidade ou desempenho definido pelo item "y", previamente aprovado ou não, desde que seja tecnicamente viável.</p>
			<p>23.3.3.5. Todos os requisitos dos Anexos I e II que forem submetidos à Prova de Conceito, deverão ser iguais aos que serão fornecidos posteriormente, na etapa de Entrega.</p>
			<Comments :attr="{id:commentId(), context:'23.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>23.4. Caso a LICITANTE não atenda às condições definidas neste Termo de Referência, ou seja, se porventura a solução for disponibilizada fora do prazo estabelecido, ou caso seja constatado o não atendimento a qualquer item de caráter técnico, a LICITANTE será DESCLASSIFICADA.</p>
			<Comments :attr="{id:commentId(), context:'23.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>23.5. Concluída a Prova de Conceito da solução e verificado o atendimento de todas as condições supracitadas neste Termo de Referência, não havendo, portanto, anormalidades e/ou sanados todos os problemas detectados, a CONTRATANTE emitirá em até 03 (três) dias úteis Termo de Aprovação.</p>
			<Comments :attr="{id:commentId(), context:'23.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>23.6. Será́ facultado às demais licitantes o acompanhamento da Prova de Conceito, sendo tal acesso limitado a uma única pessoa por empresa, na condição de ouvinte.</p>
			<p>23.6.1. A equipe técnica da Prefeitura de São Paulo terá́ a prerrogativa de solicitar a saída de pessoas que venham a interferir no andamento dos trabalhos.</p>
			<p>23.6.2. Ao longo do prazo destinado à Prova de Conceito, caso haja disponibilidade de assentos, e que não venha a comprometer o andamento dos trabalhos, poder-se-á́ , excepcionalmente, aceitar mais de um representante por licitante, garantindo sempre o quantitativo mínimo de uma pessoa por empresa.</p>
			<Comments :attr="{id:commentId(), context:'23.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>23.7. A licitante que abandonar a execução da Prova de Conceito, ou deixar de enviar a documentação exigida nesta seção/título, ou bem como descumprir os prazos e regras estabelecidos, será́ desclassificada, sem prejuízo das sanções cabíveis. </p>
			<Comments :attr="{id:commentId(), context:'23.1'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>23.8. A não comprovação dos requisitos exigidos na prova de conceito importará a desclassificação do licitante classificado provisoriamente no certame, quando o pregoeiro convocará a próxima licitante detentora de proposta válida, obedecida a classificação na etapa de lances, sucessivamente, até que uma licitante cumpra os requisitos previstos neste Termo de Referência e seja declarada vencedora.</p>
			<Comments :attr="{id:commentId(), context:'23.1'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">ANEXO I – LISTA DE REQUISITOS DA SOLUÇÃO TECNOLÓGICA</h2>
			<p>A solução deverá fornecer interfaces, módulos, plug-ins e add-ons integrados nativamente para os seguintes perfis de usuário:</p>

			<p>Perfil Munícipe: interfaces voltadas para a sociedade como porta de entrada do relacionamento do cidadão com a Prefeitura de São Paulo, permitindo funções como busca de informação, solicitação e agendamento de serviços públicos, acompanhamento do status das solicitações, recebimento de notificações, avaliação da qualidade dos serviços prestados, interação “on-line” com os atendentes, dentre outras. Neste perfil estão as pessoas físicas e jurídicas consumidoras dos serviços públicos.</p>

			<p>As interfaces voltadas para atividades que percorrem a recepção, registro, tratamento e resolução das solicitações do munícipe devem atender aos perfis atendimento, operacional e gerencial:</p>

			<p>● Perfil Atendimento: usuário alocado na central telefônica, nos balcões de atendimento presencial ou Descomplica SP, responsável por visualizar informações sobre os serviços, receber e registrar as solicitações do munícipe. Esse usuário pode pertencer a um ou mais grupos de atendimento associados a serviços de diferentes temas e assuntos.</p>
			<p>● Perfil Operacional: usuário responsável pela prestação do serviço solicitado pelo munícipe.</p>
			<p>● Perfil Gerencial: usuário responsável pela gestão da prestação do serviço público, organização e gestão das equipes de sua unidade.</p>
			<p>● Perfil Configuração: interfaces voltadas para a parametrização do serviço, com funções de criação e manutenção de formulários e suas respectivas regras, o desenho dos processos que sustentam a prestação dos serviços, a gestão de usuários, a gestão das integrações com sistemas legados, a gestão de campanhas e comunicações em redes sociais, dentre outras.</p>

			<p>Os requisitos funcionais também foram agrupados nas seguintes Categorias de Requisitos:</p>

			<p>1. Canais de Atendimento: funcionalidades relacionadas aos canais de atendimento para o relacionamento com os munícipes. Os canais de atendimento da Prefeitura de São Paulo e seus requisitos estão divididos em:</p>
			<p>1.1. Portal de Atendimento WEB;</p>
			<p>1.2. Aplicativo Móvel;</p>
			<p>1.3. Assistido (Central Telefônica e Atendimento Presencial);</p>
			<p>1.4. Chat;</p>
			<p>1.5. Redes Sociais;</p>
			<p>1.6. Chatbot.</p>

			<p>2. Gestão da Prestação do Serviço: funcionalidades associadas à busca e solicitação de serviços, bem como ao tratamento interno das solicitações e acompanhamento do progresso das solicitações por parte do munícipe. Os requisitos estão divididos em:</p>
			<p>2.1. Formulários: funcionalidades relacionadas à configuração, visualização e uso de formulários de dados associados aos serviços públicos;</p>
			<p>2.2. Fluxo de atendimento - fases (visão munícipe): funcionalidades relacionadas às fases de atendimento que o munícipe enxerga;</p>
			<p>2.3. Fluxo de trabalho interno - etapas (visão Prefeitura): funcionalidades relacionadas às etapas de trabalho interno para a prestação do serviço;</p>
			<p>2.4. Organização do atendimento interno dos serviços: funcionalidades relacionadas à organização, priorização, distribuição dos atendimentos das solicitações realizadas pelos munícipes, entre outros;</p>
			<p>2.5. Publicação de serviços (gestão de mudanças): requisitos relacionados à publicação de novos serviços e a gestão de mudanças, contemplando a disponibilização de ambientes e o controle de versão dos serviços;</p>
			<p>2.6. Gestão de usuários: requisitos relacionados à ativação, desativação de usuários, definição e redefinição de perfis, entre outros.</p>

			<p>3. Base de conhecimento:</p>
			<p>3.1. Carta de serviços: funcionalidades relacionadas à exibição e gerenciamento de informações relacionadas aos serviços da Prefeitura de São Paulo.</p>
			<p>3.2. Perguntas mais frequentes (FAQ): funcionalidades relacionadas e gerenciamento e exibição de perguntas mais frequentes (FAQ) sobre os serviços da Prefeitura de São Paulo.</p>
			<p>3.3. Base do atendimento: funcionalidades relacionadas à construção, edição e compartilhamento de conteúdo para a base de conhecimento do atendimento com o objetivo de apoiar o atendimento nos canais assistidos e prestação dos serviços nas unidades de atendimento.</p>

			<p>4. Gestão de dados:</p>
			<p>4.1. Relatórios, gráficos e dashboards: funcionalidades relacionadas à geração de relatórios gerenciais customizados, planilhas, bases de dados, telas, dashboards e painéis de indicadores.</p>

			<p>5. Agendamento:</p>
			<p>5.1. Agendamento de atendimento presencial: funcionalidades relacionadas ao agendamento de serviços com a necessidade de presença física do munícipe em uma unidade de atendimento.</p>

			<p>6. Notificação:</p>
			<p>6.1 Envio de notificação: funcionalidades relacionadas aos mecanismos de notificações aos usuários da solução.</p>

			<p>7. Avaliação de Serviço:</p>
			<p>7.1. Avaliação da satisfação do serviço: funcionalidades relacionadas à avaliação do munícipe em relação ao serviço que foi prestado a ele.</p>

			<p>8. Pesquisa:</p>
			<p>8.1. Pesquisa temática ou de opinião: funcionalidades relacionadas à construção e envio de pesquisas para usuários da solução.</p>

			<p>9. Campanha:</p>
			<p>9.1. Gerenciamento de campanhas: funcionalidades relacionadas à gestão de campanhas publicitárias enviadas por e-mail, notificações push e SMS no Aplicativo Móvel e alerta visual no Portal de Atendimento WEB para os munícipes.</p>

			<p>A solução deverá permitir que seja feita uma correspondência entre o fluxo de trabalho interno da Prefeitura e as fases do fluxo de atendimento que serão apresentadas ao munícipe que solicita o serviço público. Dessa forma, quem solicita o serviço público terá uma visão do fluxo de atendimento diferente, mas correspondente ao processo completo que ocorre internamente na Prefeitura de São Paulo dividido em etapas.</p>

			<figure title="anexo1.fluxos" class="coluna">
				<img :src="fileSrc('fluxos.png')" alt="Texto descritivo da imagem" style="height: auto; width: 100%;">
			</figure>

			<p>Além disso, os requisitos também foram classificados em Obrigatórios (O) e Desejáveis, sendo que estes são separados em Desejáveis de Alta Prioridade (D3), Desejáveis de Média Prioridade (D2) e Desejáveis de Baixa Prioridade (D1). Os requisitos listados sem classificação devem ser considerados obrigatórios.</p>

			<p>As tabelas a seguir apresentam os requisitos funcionais de cada Categoria de Requisitos para cada um dos perfis e sua respectiva classificação (C):</p>
			<Comments :attr="{id:commentId(), context:'Anexo 1 Intro'}" v-if="estaConsulta.ativo == 1"></Comments>

			<p>1. CANAIS DE ATENDIMENTO</p>
			<p>1.1. PORTAL DE ATENDIMENTO WEB</p>
			<p>1.1.1. A solução deverá disponibilizar um Portal de Atendimento WEB para interface com o munícipe, responsivo pelo menos para a versão mais recente e estável dos navegadores Mozilla Firefox, Google Chrome, Microsoft Edge, Internet Explorer, Safari, adaptando-se também para as versões mais recentes e estáveis dos navegadores Google Chrome e Safari em dispositivo móveis.</p>

			[TABELA]

			<p>1.2. APLICATIVO MÓVEL</p>
			<p>1.2.1. A solução deverá oferecer Aplicativo Móvel para interface com o munícipe disponível nas plataformas IOS e Android.</p>

			[TABELA]

			<p>1.3. ASSISTIDO (CENTRAL TELEFÔNICA E ATENDIMENTO PRESENCIAL)</p>
			<p>1.3.1. A solução deverá oferecer interfaces para atendimento assistido, permitindo registrar em cada solicitação o atendente e o canal assistido utilizado como porta de entrada da solicitação (Central Telefônica e Atendimento Presencial).</p>
			<p>1.3.2. Para o atendimento via Central Telefônica, a solução deverá ser capaz de identificar o cadastro do munícipe por uma chave de login e filtrar o conteúdo da Base de Conhecimento a partir dos dados recebidos pela solução CTI (Computer Telephony Integration).</p>

			[TABELA]

			<p>1.4. CHAT</p>
			<p>1.4.1. A solução deverá possuir uma interface de chat para interação entre atendentes e munícipes disponível no Portal de Atendimento WEB.</p>
			<p>1.4.2. A solução deverá permitir integração entre o chat com soluções de assistentes virtuais de diálogos dirigidos (chatbots).</p>
			<p>1.4.3. A solução deverá permitir que os dados cadastrais de um munícipe logado sejam exibidos automaticamente na interação com o atendente e registrados na solicitação.</p>

			[TABELA]

			<p>1.5. REDES SOCIAIS</p>
			<p>1.5.1. A solução deverá possuir integração nativa com redes sociais (no mínimo, Facebook, Facebook Messenger, Instagram, Twitter, Linkedin, Whatsapp, Telegram), possibilitando monitorar, detectar, engajar e publicar nessas redes, conforme suas políticas de privacidade e publicação.</p>
			<p>1.5.2. A solução deverá possuir uma caixa de entrada nativa das mensagens identificadas em todas as redes sociais monitoradas e permitir resposta por meio da mesma, sem a necessidade de utilizar sistemas clientes de mensagem.</p>
			<p>1.5.3. A solução deverá permitir integração das redes sociais com assistentes virtuais inteligentes (chatbots).</p>

			[TABELA]

			<p>2. GESTÃO DA PRESTAÇÃO DO SERVIÇO</p>
			<p>2.1. FORMULÁRIOS</p>
			<p>2.1.1. A solução deverá possuir interfaces para construção de formulários que permitam a utilização sem a necessidade de código de programação.</p>
			<p>2.1.2. A solução deverá permitir o uso de distintos serviços de georreferenciamento (ex.: Google API, Base de logradouros dos Correios e outras bases logradouros).</p>
			<p>2.1.3. A solução deverá permitir a utilização de georreferenciamento para o auxílio do usuário no preenchimento de campos de endereço, disponibilizando mapa e buscando a localização do endereço onde se encontra.</p>
			<p>2.1.4. A solução deverá permitir o versionamento automático de formulários em produção e, caso necessário, o rollback para versões anteriores, sempre mantendo a integridade dos dados.</p>

			[TABELA]

			<p>2.2. FLUXO DE ATENDIMENTO - FASES (VISÃO MUNÍCIPE)</p>

			[TABELA]

			<p>2.3. FLUXO DE TRABALHO INTERNO - ETAPAS (VISÃO PREFEITURA)</p>
			<p>2.3.1. A solução deverá possuir um ambiente de desenvolvimento (parametrização) dos fluxos de trabalho interno e de suas respectivas regras de negócio para a prestação dos serviços.</p>
			<p>2.3.2. A solução deverá permitir a integração com sistemas de gestão financeira para o controle e monitoramento do pagamento de boletos e títulos associados à prestação de serviços.</p>

			[TABELA]

			<p>2.4. ORGANIZAÇÃO DO ATENDIMENTO INTERNO DOS SERVIÇOS</p>
			<p>2.4.1. A solução deverá possuir um ambiente para acompanhamento da prestação dos serviços públicos com a identificação de eventuais desvios e gargalos.</p>
			<p>2.4.2. A solução deverá oferecer recursos para facilitar a organização das solicitações, conforme critérios, tais como, agrupamento de solicitações por munícipe, unidade de atendimento, etapas, fases, datas e horários, prazos de atendimento, pendências de análise e resolução, criticidade, tipo de serviço, endereço, etiquetas (tags), dentre outros critérios, exibidos de forma estruturada, em listas ou tabelas, por exemplo, e com a possibilidade de aplicação de filtros de pesquisa.</p>

			[TABELA]

			<p>2.5. PUBLICAÇÃO DE SERVIÇOS (GESTÃO DE MUDANÇAS)</p>
			<p>2.5.1. A solução deverá oferecer um ambiente de configuração que possibilite a inclusão e parametrização dos serviços públicos em ambientes de homologação com vistas a testar a publicação do serviço.</p>
			<p>2.5.2. A solução deverá permitir a gestão de mudanças dos serviços configurados com o armazenamento do histórico de todas as informações relativas às fases e etapas do fluxos de atendimentos dos serviços.</p>

			[TABELA]

			<p>2.6. GESTÃO DE USUÁRIOS</p>

			[TABELA]

			<p>3. BASE DE CONHECIMENTO</p>
			<p>3.1. CARTA DE SERVIÇOS</p>

			[TABELA]

			<p>3.2. PERGUNTAS MAIS FREQUENTES (FAQ)</p>

			[TABELA]

			<p>3.3. BASE DO ATENDIMENTO</p>

			[TABELA]

			<p>4. GESTÃO DE DADOS</p>
			<p>4.1. RELATÓRIOS, GRÁFICOS E DASHBOARDS</p>
			<p>4.1.1. A solução deverá possuir recursos que utilizam um gerador dinâmico de relatórios, gráficos e dashboards a partir de um filtro de especificações definido pelo usuário.</p>
			<p>4.1.2. A solução deverá permitir a visualização de relatórios em tela, possibilitando exportá-los em formatos específicos: PDF, XLS, CSV, HTML, XML ou TXT.</p>
			<p>4.1.3. A solução deverá permitir o agendamento de envio automático de relatórios, gráficos e dashboards aos usuários por e-mail.</p>
			<p>4.1.4. A solução deverá permitir especificar as datas iniciais e finais para a elaboração dos relatórios, além de permitir o agrupamento de dados por dia, mês, semestre e ano.</p>

			[TABELA]

			<p>5. AGENDAMENTO</p>
			<p>5.1. AGENDAMENTO DE ATENDIMENTO PRESENCIAL</p>

			[TABELA]

			<p>6. NOTIFICAÇÃO</p>
			<p>6.1. ENVIO DE NOTIFICAÇÃO</p>

			[TABELA]

			<p>7. AVALIAÇÃO DE SERVIÇO</p>
			<p>7.1. AVALIAÇÃO DA SATISFAÇÃO DE SERVIÇO</p>

			[TABELA]

			<p>8. PESQUISA</p>
			<p>8.1. PESQUISA TEMÁTICA OU DE OPINIÃO</p>

			[TABELA]

			<p>9.CAMPANHA</p>
			<p>9.1. GERENCIAMENTO DE CAMPANHAS</p>
			<p>9.1.1. A solução deverá possuir recursos para interação eletrônica via mensagens de texto do tipo SMS e serviços de mensageria instantânea, possibilitando até 3 (três) tentativas de disparo de mensagens para um mesmo número de telefone.</p>

			[TABELA]

			<p>10. REQUISITOS TÉCNICOS</p>
			<p>10.1. REQUISITOS GERAIS</p>
			<p>10.1.1. Será responsabilidade da CONTRATADA a disponibilização da solução no modelo SaaS (Software as a Service) com toda infraestrutura, licenças, componentes de hardware e software, comunicação de dados, suprimentos e procedimentos necessários para o seu perfeito funcionamento, mesmo que não solicitados explicitamente.</p>
			<p>10.1.2. Os recursos de infraestrutura da CONTRATADA devem ser elasticamente provisionados e liberados, de maneira automática, adaptando-se às necessidades da CONTRATANTE.</p>
			<p>10.1.3. A CONTRATADA deverá administrar e gerenciar o Sistema Gerenciador de Banco de Dados, os Softwares Básicos e Ferramentas que suportarão os Sistemas Aplicativos da solução, bem como administrar o Banco de Dados e as aplicações da solução.</p>
			<p>10.1.4. A solução e seus ambientes de contingência e backup devem ser hospedados em Data Center localizado em território nacional em conformidade com a certificação TIA 942 TIER II.</p>
			<p>10.1.5. A solução deverá permitir a plena utilização em todos os canais de atendimento da CONTRATANTE, independente de sua localização física. O acesso à solução se dará por meio da Internet e pela Rede Corporativa da CONTRATANTE.</p>
			<p>10.1.6. A solução deverá ser disponibilizada em ambientes de desenvolvimento (parametrização), homologação, treinamento e produção.</p>
			<p>10.1.7. A solução deverá disponibilizar de forma nativa interfaces, módulos, add-ons e plug-ins, sem necessidade de customização, para os principais recursos de atendimento e prestação dos serviços públicos, tais como: Portal de Atendimento WEB, Aplicativo Móvel, chat, telas para o atendente presencial, atendente telefônico e servidor gerencial, integração com redes sociais e serviços de mensageria instantânea (Facebook, Facebook Messenger, Instagram, Twitter, Linkedin, Whatsapp, Telegram) e com e-mail.</p>
			<p>10.1.8. Caso outras redes sociais ou serviços de mensageria instantânea venham a ser integradas no escopo da solução, não haverá custos adicionais para que a CONTRATANTE possa atender os munícipes utilizando as novas redes, dentro do conceito de omnichannel.</p>
			<p>10.1.9. A solução deverá gerenciar e coordenar todas as solicitações, independentemente do canal de atendimento utilizado para abertura, mantendo uma fila única de solicitações as quais serão distribuídas automaticamente observando as regras e critérios definidos pela CONTRATANTE.</p>
			<p>10.1.10. A solução deverá armazenar e disponibilizar toda a jornada do munícipe pelos diversos canais de atendimento, registrando todas as ações e conteúdos gerados por ele, pela solução e pelos outros usuários que interagem com a solução.</p>
			<p>10.1.11. A solução deverá acompanhar a jornada completa do munícipe, em tempo real, automaticamente, no canal onde está ocorrendo o atendimento ou no momento em que for solicitada. Neste sentido, a solução permitirá por meio de uma única interface gráfica a consulta e a exibição de informações históricas e analíticas de todas as interações referentes a um determinado munícipe ou a um conjunto de munícipes, e sobre as solicitações realizadas.</p>
			<p>10.1.12. O atendimento não humano será feito por assistentes virtuais de diálogos dirigidos (chatbots), conforme especificado no ANEXO II - LISTA DE REQUISITOS DA SOLUÇÃO TECNOLÓGICA DE CHATBOT.</p>
			<p>10.1.13. A solução não poderá se caracterizar ou ter sido desenvolvida utilizando softwares do tipo freeware, shareware, demo/trial ou de custo compartilhado.</p>
			<p>10.1.14. A solução deverá garantir a unicidade do cadastro do munícipe, inclusive entre os diversos canais de atendimento. Dessa forma, a solução não poderá permitir o cadastro de um mesmo munícipe mais de uma vez.</p>
			<p>10.1.15. A solução deverá indexar todo o conteúdo da solução de forma automática durante o processo de inserção dos dados, independente da natureza (estruturada e não estruturada, sistêmica e não sistêmica), possibilitando a realização de buscas por palavras-chave.</p>
			<p>10.1.16. A solução deverá permitir o monitoramento da atividade de pesquisa e de acesso à solução, registrando as estatísticas de palavras-chave utilizadas pelos usuários nas buscas e de quantidade de acesso aos resultados de forma a subsidiar a gestão de vocabulário da solução.</p>
			<p>10.1.17. A solução deverá permitir a gestão de vocabulário a partir de um dicionário de sinônimos para palavras ou expressões semelhantes, aumentando a probabilidade de indexadores e pesquisadores escolherem o mesmo termo para etiquetar um conceito particular, otimizando os resultados das buscas.</p>
			<p>10.1.18. A solução deverá disponibilizar suporte à lematização para expandir os resultados de um termo de pesquisa no buscador de palavras.</p>
			<p>10.1.19. A solução deverá permitir a gestão do ciclo de vida dos documentos de forma automática, possibilitando configurar a classificação dos arquivos de entrada, tabelas de temporalidade, privacidade e permissionamento, guarda permanente, descarte, atualização de versão, extração de relatórios sobre arquivos e integração com sistemas de arquivos externos.</p>
			<p>10.1.20. Para a elaboração de qualquer demanda de software (Projeto, Sustentação e/ou Serviço), a CONTRATADA deverá cumprir, implicitamente e sempre que couber, os seguintes requisitos:</p>
			<p>a) Aderência a certificados digitais válidos pelo menos nos navegadores Chrome, Firefox, Edge e Safari e sistemas operacionais Windows 7 ou superior, Linux, Android e iOS;</p>
			<p>b) Prover mecanismos de identificação por georreferenciamento, por meio do uso de distintos serviços de georreferenciamento (ex.: Google API, Base de logradouros dos Correios e outras bases logradouros).</p>
			<p>c) Providenciar o pagamento do uso da API para consumir serviços de georreferenciamento.</p>
			<p>10.1.21. Durante o período de garantia, a CONTRATADA deverá disponibilizar para a CONTRATANTE todas as atualizações de software que compõem a solução adquirida.</p>
			<p>10.1.22. Os componentes de software que constituem a solução a ser fornecida deverão considerar a última versão lançada pelo seu fabricante.</p>
			<p>10.1.23. Os componentes que compõem a solução não devem estar com término de comercialização (End-of-Sale) anunciado, isto é, os componentes devem estar em produção e serem comercializados pelo fabricante no momento da assinatura do Pedido de Compra / Contrato. Após ser anunciado o término da comercialização (End-of-Sale) dos componentes que compõem a solução, o suporte (End-of-Support) deverá permanecer por, no mínimo, o período de vigência do contrato. </p>
			<p>10.1.24. A CONTRATADA deverá notificar à CONTRATANTE sobre a liberação de novas versões e correções de software (patches) dos serviços objeto deste Termo de Referência. Os avisos poderão ser encaminhados por e-mail, utilizando mecanismo automático de notificação.</p>
			<p>10.1.25. Caso as condições de licenciamento dos softwares fornecidos sejam alteradas pelo fabricante durante o período de garantia, as funcionalidades e os quantitativos definidos não deverão ser prejudicados. Nas situações em que a alteração na forma de licenciamento implique em perdas qualitativas e/ou quantitativas, licenças complementares deverão ser fornecidas à CONTRATANTE, sem custo adicional.</p>

			<p>10.2. Requisitos de Autenticação e Autorização</p>
			<p>10.2.1. A solução deverá permitir a parametrização de chave de login a ser definido pela CONTRATANTE.</p>
			<p>10.2.2. A solução deverá oferecer autenticação de dois fatores.</p>
			<p>10.2.3. A solução deverá permitir vários níveis de configuração de login e senha aumentando a segurança de acesso aos dados da aplicação. Os parâmetros de configuração deverão considerar, pelo menos, tamanho de senha, diferenciação maiúscula/minúscula, caracteres especiais, quantidade de tentativas de login inválidos, repetições de caracteres e período de expiração de senha.</p>
			<p>10.2.4. A solução deverá fornecer gerenciamento de direitos e permissionamentos para todos os perfis da solução, incluindo, gerenciamento de usuários, grupos de usuários e perfis de usuários e associação entre esses.</p>
			<p>10.2.5. A solução deverá permitir a função de envio de e-mail e SMS para criação e ativação de cadastro e confirmação de alteração dos dados de acesso, independente do canal utilizado para se cadastrar.</p>
			<p>10.2.6. A solução deverá permitir a recuperação dos dados de acesso pelo Portal de Atendimento WEB, Aplicativo Móvel, e-mail, SMS ou outros recursos seguros de lembrete de login e senha.</p>
			<p>10.2.7. A solução deverá permitir autenticação por padrões Single Sign-On (SSO), Lightweight Directory Access Protocol (LDAP) e Active Directory (AD).</p>
			<p>10.2.8. A solução deverá permitir a autenticação dos usuários a partir de certificados digitais, tais como ICP-BRASIL (Infraestrutura de Chaves Públicas Brasileira), SafeWeb, dentre outros.</p>
			<p>10.2.9. A solução deverá permitir a utilização do Cadastro Pessoa Física da Receita Federal e Cadastro Nacional da Pessoa Jurídica para validação dos dados cadastrais e controle de acesso à solução.</p>

			<p>10.3. Marca da Prefeitura de São Paulo</p>
			<p>10.3.1. A solução deverá permitir a inserção da marca/logotipo da Prefeitura de São Paulo em telas, dashboards, portais, Aplicativo Móvel, interfaces, relatórios e e-mails, substituindo, onde possível, as marcas da CONTRATADA, de fornecedores, desenvolvedores, integradores e outros intervenientes do funcionamento da solução.</p>
			<p>10.3.2. A solução deverá permitir a configuração das interfaces da solução para seguir os padrões de cores e a identidade visual da CONTRATANTE.</p>

			<p>10.4. Requisitos de Configuração</p>
			<p>10.4.1. As parametrizações, configurações e ajustes necessários para tornar a solução aderente aos requisitos deverão ser realizados através de interface gráfica, sem a necessidade de escrever código de programação.</p>
			<p>10.4.2. Todo comportamento da solução deverá ser configurado através de metadados, sem necessidade de alterações em código fonte.</p>
			<p>10.4.3. Os metadados para construção das telas e interfaces deverão ser armazenados na própria solução.</p>
			<p>10.4.4. As parametrizações e configurações devem contemplar:</p>
			<p>a) edição do esquema de entidades/objetos e relacionamentos;</p>
			<p>b) criação, alteração e exclusão ou desativação de entidades/objetos e relacionamentos;</p>
			<p>c) dicionário de dados; e</p>
			<p>d) relacionamentos 1-n, n-1, n-n.</p>

			<p>10.5. Requisitos de Usabilidade</p>
			<p>10.5.1. A solução deverá possuir interfaces visuais simples, intuitivas e responsivas, contemplando a funcionalidade de ajuda ao usuário através de dicas (hints) nos principais campos das telas, bem como compatibilidade com dispositivos móveis.</p>
			<p>10.5.2. A solução deverá possuir interfaces com um padrão visual único estabelecido pela CONTRATANTE.</p>
			<p>10.5.3. A solução deverá possuir a capacidade de correção e padronização de conteúdos no idioma português (Brasil), aplicando-se regras como de acentuação e abreviação.</p>
			<p>10.5.4. A solução deverá estar de acordo com as recomendações do WCAG (World Content Accessibility Guide) e com os padrões HTML e CSS conforme preconizados pelo W3C (World Wide Web </p>Consortium).
			<p>10.5.5. Os sítios e portais WEB da solução deverão atender aos seguintes requisitos de acessibilidade:</p>
			<p>a) Toda imagem informativa deve possuir uma alternativa textual equivalente;</p>
			<p>b) Não utilizar a cor como único meio visual de transmitir informações, indicar uma ação, pedir uma resposta ou distinguir um elemento visual;</p>
			<p>c) Toda a funcionalidade do sítio ou portal deve ser operável através de uma interface de teclado;</p>
			<p>d) As páginas web não devem possuir nenhum conteúdo que pisque mais de três vezes no período de um segundo;</p>
			<p>e) As páginas web devem ter títulos que descrevem o tópico ou a finalidade;</p>
			<p>f) É fornecido uma explicação para siglas, abreviaturas e palavras incomuns;</p>
			<p>g) O idioma principal da página está identificado;</p>
			<p>h) As páginas não possuem atualização ou redirecionamento automático;</p>
			<p>i) As fontes das páginas possuem tamanho ideal de leitura (11 ou superior);</p>
			<p>j) O sítio deve ser validado pelo ASES WEB (http://asesweb.governoeletronico.gov.br/ases), buscando efetuar as correções das eventuais não conformidades;</p>
			<p>k) Em cada alteração de conteúdo, devem ser realizados testes de manutenção da acessibilidade de forma a verificar se o sítio permanece acessível.</p>

			<p>10.6. Requisitos de Segurança</p>
			<p>10.6.1. Deverão ser garantidas a disponibilidade, a integridade, a confidencialidade e a autenticidade dos dados armazenados no ambiente tecnológico gerenciado pela CONTRATADA.</p>
			<p>10.6.2. A solução deverá oferecer comunicação segura SSL, bem como permitir que informações confidenciais sejam automaticamente suprimidas ou mascaradas aos usuários da solução.</p>
			<p>10.6.3. A CONTRATADA deverá providenciar certificado de acesso HTTPS emitido por autoridade certificadora.</p>
			<p>10.6.4. A solução deverá possuir mecanismos de prevenção a intrusões (firewall redundante e detecção de tentativa de acessos, por exemplo), bem como asseguradores contra a captura de dados por códigos maliciosos.</p>
			<p>10.6.5. A solução deverá registrar as informações das operações de inclusão, exclusão e alteração efetuadas sobre as entidades (mesmo que por acesso indireto ou via API, por exemplo), contendo: operação realizada, usuário que realizou a operação, data/hora da operação, módulo/interface/dados afetados.</p>
			<p>10.6.6. Todos os registros de tempo devem estar sincronizados com a hora oficial do Brasil.</p>
			<p>10.6.7. A solução deverá disponibilizar mecanismos de rastreabilidade das atividades realizadas por todos os usuários da solução para auditoria em tempo real, como log unificado de atividades dos usuários, ferramenta integrada a estes logs e dashboard para gerenciamento, deve permitir também diversos tipos de consulta aos logs, gerando relatórios customizados.</p>
			<p>10.6.8. As seguintes diretivas devem ser observadas pela CONTRATADA para o caso de custódia de dados, informações e conhecimentos:</p>
			<p>a) garantia de Foro brasileiro e aplicabilidade da legislação brasileira;</p>
			<p>b) garantia de licenciamento compatível com as necessidades da Administração Pública Municipal;</p>
			<p>c) garantia que a Administração Pública Municipal tem a tutela absoluta sobre os conhecimentos, informações e dados produzidos pelos serviços;</p>
			<p>d) vedação do uso não corporativo dos conhecimentos, informações e dados;</p>
			<p>e) vedação da redundância não autorizada dos conhecimentos, informações e dados produzidos pelos serviços;</p>
			<p>f) garantia de uso de criptografia nas camadas e protocolos de redes de ativos computacionais para os dados em trânsito e/ou armazenados.</p>
			<p>10.6.9. A CONTRATADA deverá realizar a análise e gestão de riscos de segurança de informação. A análise deve ter periodicidade mínima mensal e deve ser apresentado um plano de gestão de riscos contendo: metodologia, lista de riscos identificados, inventário e mapeamento dos ativos de informação utilizados, estimativa dos riscos levantados, avaliação, tratamento e monitoramento dos riscos, assunção ou não dos riscos e outras informações pertinentes.</p>
			<p>10.6.10. A CONTRATADA deverá possuir um Plano de Continuidade, Recuperação de Desastres e Contingência de Negócio, que possa ser testado regularmente, objetivando a disponibilidade dos dados e serviços em caso de interrupção. Desenvolver e colocar em prática procedimentos de respostas a incidentes relacionados com os serviços.</p>
			<p>10.6.11. A CONTRATADA deverá possuir sistema de hardware e de dados para missão crítica com política de Disaster Recovery, balanceamento, conectividade, backup, e restore durante a vigência contratual com a garantia de Recovery Time Objective (RTO) em até 2 horas.</p>
			<p>10.6.12. A solução deverá estar de acordo com as recomendações do Guia de Codificação Segura da OWASP (OWASP Secure Coding Guidelines), incluindo mecanismos de codificação, segurança, autenticação e controle de acesso.</p>

			<p>10.7. Requisitos de Integração e Interoperabilidade</p>
			<p>10.7.1. Disponibilizar um Kit de Desenvolvimento de Software (Software Development Kit - SDK), permitindo a integração com aplicativos existentes ou o desenvolvimento de aplicativos personalizados.</p>
			<p>10.7.2. A solução deverá ter a capacidade de obter informações em bancos de dados, barramentos de serviços, ou em áreas de disponibilização de informações usadas pela CONTRATANTE. A CONTRATADA deverá desenvolver programas, rotinas, barramentos de serviços, áreas de disponibilização, bem como gerar bancos de dados intermediários para obter as informações necessárias aos atendimentos.</p>
			<p>10.7.3. A solução deverá ter a capacidade de atualizar os sistemas de informação utilizados pela CONTRATANTE, seja diretamente em bancos de dados, ou indiretamente, mediante gravação em bancos de dados intermediários, barramentos de serviços ou áreas para disponibilização de informações. A CONTRATADA deverá desenvolver programas, rotinas e áreas para atualizar as informações armazenadas nos sistemas usados pela CONTRATANTE.</p>
			<p>10.7.4. A solução deverá ter a capacidade de integrar-se com aplicações internas e externas da CONTRATANTE por meio de webservices ou APIs utilizando os padrões REST, XML, SOAP, WSDL, JSON, HTTP, HTTPS, SFTP, FTP, entre outros.</p>
			<p>10.7.5. A solução deverá ter a capacidade de integrar-se com sistemas de correio eletrônico através dos protocolos SMTP, IMAP e POP3.</p>
			<p>10.7.6. O desenvolvimento de programas e rotinas para acesso e atualização das informações dos sistemas da CONTRATANTE observarão as regras determinadas pela CONTRATANTE. Quando necessário, a CONTRATADA deverá desenvolver integrações, as quais se tornarão propriedades da CONTRATANTE.</p>
			<p>10.7.7. Disponibilizar API (Application Programming Interface) para integração com softwares de terceiros, sendo a API totalmente independente de aplicativos clientes e fornecida como um controle de Component Object Model (COM) separado.</p>
			<p>10.7.8. A solução deverá ter a capacidade de integrar-se com a solução da central de atendimento telefônico da CONTRATANTE, conforme especificado no item 10.8 Computer Telephony Integration (CTI).</p>

			<p>10.8. Computer Telephony Integration (CTI)</p>
			<p>10.8.1. A solução deverá integrar-se à plataforma de telecomunicações da Central SP156 de atendimento telefônico da CONTRATANTE via webservices REST e XML RPC a fim de que as seguintes funcionalidades sejam providas:</p>
			<p>a) Screen pop up: abertura da tela inicial de atendimento quando ocorrer o recebimento de uma chamada telefônica pelo atendente exibindo as informações de cadastro do munícipe com base no telefone do qual se originou a chamada;</p>
			<p>b) Caso não haja nenhum cadastro relacionado ao telefone, a solução deverá apresentar uma tela em branco, com o número de telefone já preenchido, a fim de que seja possível o cadastro inicial do munícipe;</p>
			<p>c) Caso exista mais de um cadastro com o mesmo telefone, deverá ser mostrada uma lista com todos munícipes vinculados ao número de telefone;</p>
			<p>d) Em qualquer caso, a tela de atendimento deverá permitir a criação de um novo cadastro;</p>
			<p>e) A tela de atendimento deverá exibir o caminho percorrido pelo munícipe na URA (Unidade de Resposta Audível).</p>
			<p>10.8.2. A solução não poderá permitir que o cadastro e o registro da chamada sejam cancelados, obrigando que o atendente preencha o mínimo de informações, conforme formulário disponibilizado para tal.</p>
			<p>10.8.3. A solução deverá vincular a gravação da conversa telefônica ao registro da solicitação. Todo atendimento da Central SP156 é gravado em um servidor específico e identificado por meio de uma URL. Ao final do atendimento, a solução deverá ser capaz de vincular tal URL à solicitação. Ressalta-se que a gravação da ligação está fora do escopo desta contratação.</p>
			<p>10.8.4. A solução deverá fornecer, à plataforma de telecomunicações da Central SP156, lista de telefones de determinado grupo de usuários a fim de que seja realizada a discagem automática pela central telefônica.</p>
			<p>10.8.5. Destaca-se que a implantação da plataforma de telecomunicações da Central SP156 não é de competência da CONTRATADA, estando, portanto, fora do escopo desta contratação. Compete à CONTRATADA tão-somente a integração à plataforma de telecomunicações da Central SP156 como um serviço de parametrização.</p>

			<p>10.9. Requisitos de Desempenho e Disponibilidade</p>
			<p>10.9.1. A solução deverá ser tolerante a falhas de hardware, software e energia, e a pausas controladas, permitindo a retomada do processamento a partir do ponto em que ocorreu a interrupção.</p>
			<p>10.9.2. A solução deverá prover recursos que possibilitem seu funcionamento em ambientes de balanceamento de cargas e alta disponibilidade, com ambiente em nuvem em única instância.</p>
			<p>10.9.3. A solução deverá ficar disponível 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana, sem interrupção fora do horário comercial ou em finais de semana e feriados, com disponibilidade conforme acordo de nível de serviço definido no ANEXO IV – ACORDOS DE NÍVEL DE SERVIÇO - (SERVICE LEVEL AGREEMENT – SLA).</p>
			<p>10.9.4. A CONTRATADA deverá oferecer uma área restrita em uma interface WEB para acompanhamento on-line de software e infraestrutura, com relatórios e dashboards das informações de desempenho do ambiente da solução, contemplando pelo menos as seguintes medidas em tempo real:</p>
			<p>a) Disponibilidade do software;</p>
			<p>b) Quantidade de Acessos;</p>
			<p>c) Escalabilidade dos recursos computacionais provisionados.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">ANEXO II – LISTA DE REQUISITOS DA SOLUÇÃO TECNOLÓGICA DE CHATBOT</h2>
			<p>1.1. ASSISTENTE VIRTUAL INTELIGENTE (CHATBOT)</p>

			<p>[TABELA]</p>

			<p>1.2. REQUISITOS GERAIS</p>
			<p>1.2.1. A solução deverá operar integralmente em nuvem no modelo SaaS (Software as a Service).</p>
			<p>1.2.2. A solução deverá manter o diálogo com o munícipe, considerando as questões feitas durante o atendimento como um humano faria: correlacionando as perguntas e respostas feitas durante o atendimento, tratando desambiguação e garantindo a continuidade da compreensão da intenção do munícipe ao utilizar o serviço de autoatendimento. Para tal, o uso de palavras-chave não deverá ser a base da tecnologia adotada pela solução.</p>
			<p>1.2.3. A solução deverá ter a capacidade de efetuar perguntas de esclarecimento aos munícipes para entendimento da real intenção de sua procura pelo autoatendimento.</p>
			<p>1.2.4. A solução deverá identificar o sentimento do munícipe pelo uso de suas palavras durante o atendimento, podendo eventualmente alterar o tom de seu texto ou até mesmo encaminhar a conversa para um atendente humano, dependendo da emoção percebida.</p>
			<p>1.2.5. A solução deverá, proativamente, identificar a necessidade dos munícipes, oferecendo auxílio ou esclarecendo dúvidas durante a interação destes com o Assistente Virtual Inteligente, seguindo regras de negócio definidas pela CONTRATANTE.</p>
			<p>1.2.6. A solução deverá permitir o constante aprimoramento do entendimento das perguntas feitas pelos munícipes, por meio da utilização de redes neurais que se aperfeiçoam, bem como das respostas fornecidas, páginas de direcionamento, e URLs de referência. Entendem-se por aprimoramentos os seguintes itens:</p>
			<p>a) Atualização dos assuntos relacionados às áreas de conhecimento existentes;</p>
			<p>b) Atualização das respostas fornecidas pelo Assistente Virtual Inteligente; e</p>
			<p>c) Atualização de URLs referenciados na resposta fornecida pelo Assistente Virtual Inteligente.</p>
			<p>1.2.7. A solução deverá ser capaz de encerrar a interação com o munícipe com critérios definidos pela CONTRATANTE, como por exemplo: encerramento por tempo de inatividade do munícipe.</p>
			<p>1.2.8. A solução deverá possuir suporte nativo pelo menos para a versão mais recente e estável dos navegadores Mozilla Firefox, Google Chrome, Microsoft Edge, Internet Explorer, Safari; para as versões mais recentes e estáveis dos navegadores Google Chrome e Safari em dispositivo móveis; aplicativos móveis nas plataformas IOS e Android; Chat; SMS; e-mail; e Redes Sociais: Facebook, Facebook Messenger, Twitter, Linkedin, Instagram, Whatsapp e Telegram.</p>
			<p>1.2.9. A solução deverá possuir interfaces gráficas redimensionáveis sem perda de legibilidade e funcionalidade. O layout da interface gráfica deve adequar-se à resolução de tela do dispositivo pelo qual está sendo acessado sem que haja dificuldade no acesso. As interfaces gráficas deverão ser desenvolvidas através do design responsivo. O redimensionamento máximo aceitável sem perda de funcionalidade deve ser de 200% em relação à resolução padrão.</p>
			<p>1.2.10. A solução deverá permitir o atendimento de múltiplos usuários simultaneamente, sem prejuízos ao desempenho e/ou sendo escalável tecnicamente.</p>
			<p>1.2.11. A solução deverá ser passível de configuração daquilo que não será respondido e/ou daquilo que não será interpretado e/ou daquilo que não será tratado.</p>
			<p>1.2.12. A solução deverá reconhecer a página do site ou local virtual do canal no qual o munícipe está interagindo de forma a obter maior precisão no atendimento e adequação das respostas para estes canais, inclusive redes sociais.</p>
			<p>1.2.13. A solução deverá permitir a integração com sistemas legados ou de backend por meio de APIs (Application Program Interface – Interface de Programa Aplicativo) abertas ou webservices.</p>
			<p>1.2.14. A solução deverá permitir integração com mecanismos de segurança adotados pela CONTRATANTE para auxiliar os usuários no processo de cadastramento on-line no site, bem como resgate de senhas ou dados de login.</p>
			<p>1.2.15. A solução deverá permitir sua inserção nos portais web indicados pela CONTRATANTE.</p>
			<p>1.2.16. A solução deverá ser capaz de capturar, gravar e utilizar a localização geográfica do usuário.</p>
			<p>1.2.17. A solução deverá ser capaz de capturar e gravar informações sobre o endereçamento IP do usuário.</p>
			<p>1.2.18. O refinamento e evolução do Modelo de Linguagem Natural - MLN deverá ser elaborado pela equipe da CONTRATADA.</p>
			<p>1.2.19. A solução deverá ficar disponível 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana, sem interrupção fora do horário comercial ou em finais de semana e feriados, com disponibilidade em conformidade com a certificação TIA 942 TIER II (data center uptime 99,741%).</p>
			<p>1.2.20. A solução deverá ser disponibilizada em ambientes de desenvolvimento (parametrização), homologação e produção.</p>
			<p>1.2.21. A CONTRATADA e a provedora da solução devem estar em conformidade com as normas NBR ISO/IEC 27001 e NBR ISO/IEC 27002.</p>
			<p>1.2.22. A solução deverá cumprir os requisitos do item 10.6 Requisitos de Segurança do ANEXO I - LISTA DE REQUISITOS DA SOLUÇÃO TECNOLÓGICA e os listados abaixo:</p>
			<p>a) Monitoramento constante contra ameaças externas;</p>
			<p>b) Autoverificação e bloqueio de ações não permitidas, impedindo a divulgação de dados sigilosos, por exemplo.</p>
			<p>c) Autenticação e autorização dos usuários envolvidos na manutenção e utilização da solução técnica.</p>
			<p>d) Controle de acesso, com segmentação de usuários, seja por perfil ou por criticidade de conteúdo de informação (confidencial, restrita, interna, pública, etc.).</p>
			<p>1.2.23. A solução deverá permitir a gestão de mudanças, bem como o controle de versões do chatbot.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">ANEXO III – PLANILHA DE FORMAÇÃO DE PREÇOS</h2>

			[ARQUIVO]

		</section>

		<section>
			<h2 class="titulo" indent="1">ANEXO IV - ACORDOS DE NÍVEL DE SERVIÇO - (SERVICE LEVEL AGREEMENT - SLA)</h2>
			<p>Item 1 - Fornecimento de plataforma multicanal integrada para atendimento, gerenciamento do relacionamento com o cidadão, digitalização e automação de serviços públicos em modelo SaaS (Software as a Service); Item 2 - Fornecimento de Atendente Virtual Inteligente - Chatbot - em modelo SaaS (Software as a Service); Item 3 - Suporte Técnico</p>

			<p>[TABELA]</p>

			<p>As solicitações realizadas pela Prefeitura de São Paulo através do canal de Suporte Técnico deverão ser atendidas conforme quadro de serviços de suporte técnico abaixo.</p>

			<p>[TABELA]</p>

			<p>¹ Por horas úteis, entende-se o período compreendido no horário comercial definido em comum acordo entre CONTRATADA e CONTRATANTE.</p>

			<p>Item 4 - Serviços Especializados - Transformação, design e digitalização de serviços públicos digitais com o uso da solução tecnológica</p>

			<p>[TABELA]</p>

			<p>Item 6 - Capacitação e Formação de Usuários para utilização da solução tecnológica</p>

			<p>[TABELA]</p>

		</section>

		<section>
			<h2 class="titulo" indent="1">ANEXO V - CATÁLOGO PRELIMINAR DE SERVIÇOS</h2>
			<p>Item 4 - Serviços Especializados - Transformação, design e digitalização de serviços públicos digitais com o uso da solução tecnológica</p>

			<p>[TABELA]</p>

		</section>

		<section>
			<h2 class="titulo" indent="1">ANEXO VI – PERFIS PROFISSIONAIS</h2>

			<figure title="Titulo da figura" class="coluna">
				<img :src="fileSrc('img1_secao2.jpg')" alt="Texto descritivo da imagem" style="height: auto; width: 100%;">
				<figcaption>Figura 1. Legenda da imagem.</figcaption>
			</figure>
			<p>1 - Gerente de Portfólio Sênior</p>
			<p>Principais Atribuições:</p>
			<p>● Atuação Estratégica e Negocial;</p>
			<p>● Gerenciamento de portfólio;</p>
			<p>● Alocação de recursos; </p>
			<p>● Resolução de problemas;</p>
			<p>● Motivação e desenvolvimento de pessoas;</p>
			<p>● Responsável por conteúdo, qualidade e método;</p>
			<p>● Responsável por negociação (articulação, bastidores e feedbacks);</p>
			<p>● Responsável por receber e distribuir internamente as OS para a equipe;</p>
			<p>● Responsável tecnicamente pela CONTRATADA;</p>
			<p>● Participar e/ou conduzir as reuniões que se fizerem necessárias a critério da CONTRATADA;</p>
			<p>● Coordenar e conduzir todos os serviços descritos no catálogo de serviços.</p>
			<p>Requisitos Obrigatórios:</p>
			<p>● Diploma devidamente registrado de conclusão de curso de graduação de nível superior, com especialização em Gerenciamento de Projetos e/ou Gerenciamento de Processos ou equivalente.</p>
			<p>● Experiência, mínima de 6 (anos) anos em projetos de melhoria e inovação em serviços, atuação como gerente nas áreas de design de serviços públicos ou privados, implantação de unidades de inovação e/ou processos e gerenciamento de equipes.</p>
			<p>● Experiência comprovada de, no mínimo, 5 (cinco) anos, em organizações públicas ou privadas, em atividades que envolvam a construção de agenda estratégica, incluindo análise de contexto, construção de mapa estratégico, definição de indicadores, metas, identificação e gerenciamento de projetos prioritários e implementação e acompanhamento do planejamento estratégico;</p>
			<p>● Experiência comprovada de, no mínimo, 5 (cinco) anos, em organizações públicas ou privadas, em atividades que envolvam a construção de modelos de inovação e gerenciamento de projetos de inovação.</p>
			<p>● Certificações: Certified Agile Leadership, CBPP – Certified Business Process Professional emitida pela ABPMP (Association of Business Process Management) e Certificação PMP (Project Management Professional) emitida pelo PMI (Project Management Institute).</p>

			<p>2 - Gerente Sênior de Entregas Ágeis</p>
			<p>Principais Atribuições:</p>
			<p>● Construir e manter times motivados, garantindo que estejam trabalhando em um ambiente ágil com planejamento de entregas iterativas e com foco no usuário;</p>
			<p>● Proteger o time e garantir que colaborem entre si, comuniquem-se e foquem no que é mais importante;</p>
			<p>● Apoiar membros do time, facilitando desenvolvimento contínuo, e aplicar as ferramentas e técnicas ágeis e lean mais apropriadas para seu ambiente;</p>
			<p>● Gerir proativamente dependências, superar obstáculos e gerar o maior valor possível diantes das restrições;</p>
			<p>● Gerenciar riscos e pessoas;</p>
			<p>Requisitos Obrigatórios:</p>
			<p>● Diploma, devidamente registrado, de conclusão de curso de graduação de nível superior em qualquer área de formação, fornecido por instituição de ensino superior reconhecida pelo MEC.</p>
			<p>● Experiência comprovada de, no mínimo, 6 (seis) anos, em organizações públicas ou privadas, em atividades que envolvam gerenciamento de projetos utilizando métodos ágeis, design de serviços e gerenciamento de mudança organizacional.</p>
			<p>● Experiência comprovada de, no mínimo, 2 (dois) anos, em organizações públicas ou privadas, em atividades que envolvam BPM – Business Process Management, ferramentas de modelagem de processos, notação de modelagem de processos de negócio - BPMN 2.0, análise, gerenciamento de desempenho ou transformação de processos. </p>
			<p>● Certificações: CSM - Certified Scrum Master, CBPP – Certified Business Process Professional emitida pela ABPMP (Association of Business Process Management).</p>

			<p>3 - Analista de Design de Serviços</p>
			<p>Principais Atribuições:</p>
			<p>● Conduzir pesquisas de usuários, bem como utilizar outras ferramentas de descoberta e teste para o desenho de serviços do ponto de vista do usuário;</p>
			<p>● Elaborar ou facilitar espaços de realização de protótipos de baixa, média e alta fidelidade, bem como protótipos navegáveis para teste dos serviços com usuários;</p>
			<p>● Sugerir melhorias necessárias para que os serviços sejam disponibilizados por meio da solução tecnológica adquirida ou sugerir outros meios de digitalização;</p>
			<p>● Auxiliar no levantamento e mapeamento de processos; </p>
			<p>● Auxiliar na elaboração de manuais e relatórios que complementem a diagramação realizada;</p>
			<p>Requisitos Obrigatórios:</p>
			<p>● Diploma, devidamente registrado, de conclusão de curso de graduação de nível superior em qualquer área de formação, mas preferencialmente em Design, fornecido por instituição de ensino superior reconhecida pelo MEC.</p>
			<p>● Experiência comprovada de, no mínimo, 6 (seis) anos, em organizações públicas ou privadas, em atividades que envolvam inovação de modelos de negócio, métodos ágeis de desenvolvimento de inovações (lean startup e customer development), conceitos de desenho (design thinking), design de serviços, prototipação, Job to be done e experiência do cliente.</p>
			<p>● Conhecimento sobre modelagem de processos, notação de modelagem de processos de negócio - BPMN 2.0, análise, gerenciamento de desempenho ou transformação de processos.</p>
			<p>● Certificações: Certified Scrum Product Owner</p>

			<p>4 - Analista de Tecnologia da informação</p>
			<p>Principais Atribuições:</p>
			<p>● Desenvolver software acessível com foco nas necessidades do usuário do serviços;</p>
			<p>● Prover consultor sobre viabilidade técnica de soluções;</p>
			<p>● Escrever, adaptar, manter e dar suporte a código;</p>
			<p>● Melhorar continuamente os serviços com uso de novas ferramentas e técnicas;</p>
			<p>● Resolver problemas técnicos;</p>
			<p>● Realizar integração de sistemas e chatbot;</p>
			<p>● Estruturar bancos de dados, construir data warehouse, relatórios, dashboards, mapas e demais atividades relacionadas a banco de dados.</p>
			<p>Requisitos Obrigatórios:</p>
			<p>● Diploma, devidamente registrado, de conclusão de curso de graduação de nível superior em qualquer área de formação, fornecido por instituição de ensino superior reconhecida pelo MEC.</p>
			<p>● Experiência comprovada de, no mínimo, 6 (seis) anos, em organizações públicas ou privadas, em atividades que envolvam a área técnica de tecnologia utilizando métodos ágeis.</p>
			<p>● Certificações: Certified Scrum Developer</p>
			<p> </p>
			<p>5 - Especialista na solução contratada</p>
			<p>Principais Atribuições:</p>
			<p>● Atuação na tecnologia;</p>
			<p>● Parametrização da solução contratada;</p>
			<p>● Sistematização e automação de processos;</p>
			<p>● Manter repositório de versões;</p>
			<p>Requisitos Obrigatórios:</p>
			<p>● Diploma, devidamente registrado, de conclusão de curso de graduação de nível superior em qualquer área de formação, fornecido por instituição de ensino superior reconhecida pelo MEC.</p>
			<p>● Experiência comprovada de, no mínimo, 6 (seis) anos, em organizações públicas ou privadas, em atividades que envolvam a parametrização, a transformação e o gerenciamento de desempenho de processos utilizando a solução de tecnologias contratadas, bem como automação de processos, integração de sistemas legados, desenho de formulários e construção de painel de dashboards, utilizando métodos ágeis.</p>
			<p>● Certificações: Certified Scrum Developer</p>

			<p>6 - Especialista de Chatbot</p>
			<p>Principais Atribuições:</p>
			<p>● Compreensão do contexto do usuário final do chatbot e estratégia da concepção do chatbot de acordo com as necessidades e experiências do usuário final;</p>
			<p>● Criação, sintetização, formatação e testes dos fluxos conversacionais na solução de chatbot;</p>
			<p>● Aplicação de técnicas de Linguística Computacional e Processamento de Linguagem Natural (NLP);</p>
			<p>● Curadoria da base de conhecimento da solução do chatbot;</p>
			<p>● Adaptação de gêneros textuais aos diferentes canais comunicativos do chatbot;</p>
			<p>● Treinamento, monitoramento e melhoria contínua dos chatbots;</p>
			<p>● Apresentação e gestão de indicadores de qualidade de atendimento do chatbot;</p>
			<p>Requisitos Obrigatórios:</p>
			<p>● Diploma, devidamente registrado, de conclusão de curso de graduação de nível superior em qualquer área de formação, fornecido por instituição de ensino superior reconhecida pelo MEC.</p>
			<p>● Experiência comprovada de, no mínimo, 6 (seis) anos, em organizações públicas ou privadas, em atividades que gestão de produtos utilizando métodos ágeis e design.</p>
			<p>● Experiência comprovada de, no mínimo, 3 (três) anos, em organizações públicas ou privadas, em atividades que envolvam a parametrização, a transformação e o gerenciamento de atendimento virtual automatizado utilizando a solução contratada.</p>
			<p>● Conhecimento em Técnicas de Linguística Computacional, Processamento de Linguagem Natural e métodos ágeis.</p>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import Tabela from '@/components/Tabela'
import CommentsContext from '@/components/CommentsContext'
import CommentsLoader from '@/components/CommentsLoader'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'Tr156',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			itensDaContratacao: {
   			titulo: 'Tabela 2A',
    colunas: [
        { titulo: '#' },
        { titulo: 'Item' },
        { titulo: 'Detalhamento do Objeto' },
        { titulo: 'Unidade de Medida' },
        { titulo: 'Quantidade' }
    ],
    linhas: [
        [
            [ { data: '1' }],

            [ { data: 'Fornecimento de plataforma multicanal integrada para atendimento, gerenciamento do relacionamento com o cidadão, digitalização e automação de serviços públicos em modelo SaaS (Software as a Service).' }],
            [ { data: 'Perfil Atendimento' } ],
            [ { data: 'Usuários em uso/mês' } ],
            [ { data: '1.680' } ]
        ],
        [
            [ { data: ' ' } ],
            [ { data: '  ' } ],
            [ { data: 'Perfil Operacional' } ],
            [ { data: 'Usuários em uso/mês' }],
            [ { data: '1.260' } ]
        ],
        [
            [ { data: ' ' } ],
            [ { data: '  ' } ],
            [ { data: 'Perfil Operacional' } ],
            [ { data: 'Usuários em uso/mês' }],
            [ { data: '212' } ]
        ],
        [
            [ { data: ' ' } ],
            [ { data: '  ' } ],
            [ { data: 'Perfil Operacional' } ],
            [ { data: 'Usuários em uso/mês' }],
            [ { data: '56' } ]
        ],
        [
            [ { data: '2' } ],
            [ { data: 'Fornecimento de Atendente Virtual Inteligente - Chatbot - em modelo SaaS (Software as a Service).' } ],
            [ { data: ' ' } ],
            [ { data: 'Pacote de 1000 Interações' }],
            [ { data: '2.880' } ]
        ],
        [
            [ { data: '3' } ],
            [ { data: 'Suporte Técnico' } ],
            [ { data: 'Suporte operacional das soluções dos itens 1, 2 e 5' } ],
            [ { data: 'Serviços/mês' }],
            [ { data: '1' } ]
        ],
        [
            [ { data: '4' } ],
            [ { data: 'Serviços Especializados - Transformação, design e digitalização de serviços públicos digitais com o uso da solução tecnológica' } ],
            [ { data: 'Configuração, levantamento, melhoria e automação/digitalização de processos; Customização e Integração de sistemas e bases de dados existentes com a solução contratada.' } ],
            [ { data: 'UST' }],
            [ { data: '102.960' } ]
        ],
        [
            [ { data: '5' } ],
            [ { data: 'Fornecimento de plataforma de capacitação permanente em modelo SaaS (Software as a Service) para utilização da solução tecnológica' } ],
            [ { data: 'Plataforma EAD de Capacitação.' } ],
            [ { data: 'Serviço/mês' }],
            [ { data: '1' } ]
        ],
        [
            [ { data: '6' } ],
            [ { data: 'Capacitação e Formação de Usuários para utilização da solução tecnológica' } ],
            [ { data: 'Capacitação para os perfis de Atendimento, Operacional, Gerencial e de Configuração das soluções contratadas'  } ],
            [ { data: 'Hora-aula' }],
            [ { data: '1.692' } ]
        ]

    ],
    tabelaListrada: false
}
		}
	},
	components: {
		PageTop,
		Indice,
		Comments,
		Tabela,
		CommentsContext,
		CommentsLoader
	},
	mixins: [ consultasCommons ],
	methods: {
		fileSrc (fileName) {
			let url = this.$store.getters.basePath + 'arquivos/tr156/' + fileName
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
