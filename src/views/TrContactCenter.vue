<template>
	<div class="TrContactCenter" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/capa_tr_contact_center.jpg" :esta_consulta="estaConsulta">
			<!-- <template slot="titulo"><div>Termo de Referencia para contratação de serviços de planejamento, implantação, operação, gerenciamento de central de atendimento e gestão de atendimento receptivo e ativo nas formas eletrônica e humana.</div></template> -->
			<template slot="titulo"><div>Minuta - Termo de Referência para Contact Center</div></template>
			<template slot="subtitulo"><div>Termo de Referencia para contratação de serviços de planejamento, implantação, operação, gerenciamento de central de atendimento e gestão de atendimento receptivo e ativo nas formas eletrônica e humana.</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<!-- <Apoio></Apoio> -->
		<!-- Decreto Nº 56.901 inclua este componente caso seja um PIU -->

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<p>A Prefeitura da Cidade de São Paulo, por meio da Secretaria Municipal de Inovação e Tecnologia - SMIT, disponibiliza Consulta Pública para acolher sugestões sobre o Termo de Referência para contratação de Contact Center/Call Center da solução de atendimento SP156.</p>
			<p>A Central de atendimento 156 é o principal canal de contato do cidadão com a Prefeitura de São Paulo na solicitação de serviços e informações, responsável por mais de 20.000 atendimentos por dia, recebendo solicitações de cerca de 400 serviços públicos municipais e mais de 1000 serviços informativos. </p>
			<p>Para facilitar a gestão dos comentários oriundos do processo de consulta pública, solicitamos aos participantes que destaquem o item e/ou subitem com a respectiva proposta de redação, juntamente com sua justificativa.</p>
			<p>
				Cronograma:
				<ol>
					<li>
						Recebimento de eventuais sugestões e/ou comentários a partir de 19/11/2019 até 04/12/2019.
					</li>
					<li>
						Adequações no Termo de Referência com as considerações publicadas no processo de consulta pública: de 05/12/2019 até 18/12/2019.
					</li>
					<li>
						Após a consolidação das análises recebidas, considerando os eventuais ajustes decorrentes do processo de consulta pública, a versão final do Termo de Referência será divulgada no site da SMIT <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/inovacao" target="_blank">https://www.prefeitura.sp.gov.br/cidade/secretarias/inovacao</a>. 
					</li>
					<li>Encaminhamento das Propostas contendo as respectivas estimativas de preços em conformidade com o Termo de Referência eventualmente ajustado em decorrência da consulta pública até 10 dias uteis após a divulgação da versão final. As mesmas poderão ser enviadas para o e-mail <a href="mailto:consultapublica.smit@prefeitura.sp.gov.br">consultapublica.smit@prefeitura.sp.gov.br</a></li>
				</ol>
			</p>

		</section>

		<section>
			<h2 class="titulo" indent="1">EDITAL DE PREGÃO ELETRÔNICO nº 35/SMIT/2019</h2>
		</section>
		<section>
				<h3 class="titulo" indent="2">1. EMBASAMENTO LEGAL</h3>
				<p>O procedimento licitatório e os atos dele decorrentes observarão as disposições da Lei Municipal nº 13.278, de 07 de janeiro de 2002, dos Decretos Municipais n.º 43.406/2003 (com a redação que lhe atribuiu o Decreto 55.427/2014), 44.279/2003, 46.662/2005, 54.102/2013, 56.475/2015 e 56.633/2015, e, das Leis Federais nº. 8.666, de 21 de junho de 1993 e 10.520 de 17 de julho de 2002, a Lei Complementar Federal nº 123, de 14 de dezembro de 2006, alterada pela Lei Complementar nº 147/2014 e das demais normas complementares aplicáveis.</p>
			<Comments :attr="{id:commentId(true), context:'1. EMBASAMENTO LEGAL'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

			<section>
				<h3 class="titulo" indent="2">2. DO OBJETO</h3>
				<p>2.1	A presente licitação tem por objeto contratação de empresa especializada em serviços de planejamento, implantação, operação, gerenciamento de central de atendimento humano e gestão de atendimento receptivo e ativo nas formas eletrônica e humana (contact center) conforme especificações constantes do Termo de Referência, Anexo I deste Edital e seus anexos.</p>
				<p>2.2.	Deverão ser observadas as descrições, características e especificações técnicas constantes do Termo de Referência Anexo I deste Edital.</p>
				<Comments :attr="{id:commentId(true), context:'2. DO OBJETO'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>
			<section>
				<h3 class="titulo" indent="2">3.	DAS CONDIÇÕES DE PARTICIPAÇÃO</h3>
				<p>3.1.	Poderão participar da licitação as empresas que:</p>
					<p class="s2">a)	Atenderem a todas as exigências deste Edital e de seus Anexos, desde que sejam credenciadas, com cadastro, no Cadastro Unificado de Fornecedores do Estado de São Paulo – CAUFESP.</p>
						<p class="s3"> a.1)  O registro no CAUFESP, o credenciamento de representantes que atuarão em nome da licitante no sistema de pregão eletrônico e a senha de acesso deverão ser obtidos anteriormente à abertura da sessão pública, observando os prazos e condições ali estabelecidos.</p>
				<p>3.2	Como requisito para a participação no pregão, a licitante deverá manifestar, em campo próprio do sistema eletrônico, que inexiste qualquer fato superveniente que impede a sua participação no certame ou de sua contratação e que conhece e aceita os regulamentos do Sistema BEC/SP. </p>
				<p>3.3	Ao encaminhar sua proposta, a licitante declara que cumpre integralmente os requisitos de habilitação previstos neste Edital e seus anexos. </p>
				<p>3.4	A participação neste Pregão implica o reconhecimento pela Licitante de que conhece, atende e se submete a todas as cláusulas e condições do presente Edital, bem como as disposições contidas na legislação indicada na cláusula “1” deste Edital, que disciplinam a presente licitação e integrarão o ajuste correspondente, no que lhe for pertinente.</p>

				<Comments :attr="{id:commentId(true), context:'3.	DAS CONDIÇÕES DE PARTICIPAÇÃO'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">4.   ACESSO A INFORMAÇÕES</h3>
				<p>4.1. Qualquer pessoa poderá solicitar esclarecimento(s) ou informação(ões) relativas a esta licitação, em campo próprio do sistema, encontrado na opção Edital, até 02 (dois) dias úteis anteriores à data fixada para abertura da sessão pública. </p>
				<p>4.2. Os esclarecimentos e as informações serão prestados pela Pregoeira, no prazo de até 01 (um) dia útil anterior à data fixada para abertura da sessão pública deste Pregão.</p>
					
				<Comments :attr="{id:commentId(), context:'4.   ACESSO A INFORMAÇÕES'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">5.   IMPUGNAÇÃO AO EDITAL</h3>
				<p>5.1. 	Qualquer pessoa, física ou jurídica, poderá formular impugnações contra o ato convocatório, sendo que eventuais impugnações ao Edital deverão ser relatadas diretamente no sistema eletrônico, em campo especifico, no endereço constante do preâmbulo deste Instrumento, no prazo de até 2 (dois) dias úteis anteriores à data marcada para a realização da sessão pública de abertura do pregão, sob pena de decadência do direito.</p>
					<p class="s2">5.1.1.  Caberá ao Pregoeiro decidir acerca da (s) impugnação (ões) apresentada (s), até a data prevista para a abertura do certame.</p>
						<p class="s3">5.1.1.1. Caso não seja possível decidir a impugnação no prazo estabelecido, o pregão eletrônico deverá ser suspenso, e, após, se o caso, reagendado.</p>
					<p class="s2">5.1.2.  Quando o acolhimento da impugnação implicar alteração do Edital, capaz de afetar a formulação das propostas, será definida e publicada nova data para a realização do certame.</p>
					<p class="s2">5.1.3.  A impugnação, feita tempestivamente pela licitante, não a impedirá de participar deste Pregão.</p>
				<p>5.2.  As decisões das impugnações serão divulgadas pelo pregoeiro no sistema eletrônico para visualização dos interessados. </p>
					
				<Comments :attr="{id:commentId(), context:'5.   IMPUGNAÇÃO AO EDITAL'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">6. CREDENCIAMENTO</h3>
				<p>6.1	As licitantes deverão estar previamente credenciadas junto ao órgão provedor – <strong>Cadastrou Unificado de Fornecedores do Estado de São Paulo – CAUFESP – BEC/SP.</strong></p>
				<p>6.2	O credenciamento dar-se-á pela atribuição, pelo órgão provedor, de chave de identificação e de senha, pessoal e intransferível, para acesso ao sistema eletrônico – BEC/SP.</p>
					<p class="s2">6.2.1	As informações a respeito das condições exigidas e dos procedimentos a serem cumpridos para o registro no CAUFESP, estão disponíveis no endereço eletrônico www.bec.sp.gov.br.</p>
				<p>6.3	O credenciamento da licitante dependerá de registro cadastral ativo no Cadastro Unificado de Fornecedores do Estado de São Paulo - CAUFESP.</p>
				<p>6.4	O credenciamento junto ao provedor do sistema implica em responsabilidade legal da licitante ou de seu representante legalmente constituído e presunção de sua capacidade técnica para realização das transações inerentes ao pregão eletrônico.</p>
					<p class="s2">6.4.1	Cada representante credenciado poderá representar apenas uma licitante em cada pregão eletrônico.</p>
				<p>6.5	O uso da senha de acesso pela licitante é de sua responsabilidade exclusiva, incluindo qualquer transação efetuada diretamente ou por seu representante, não cabendo ao provedor do sistema ou à Prefeitura do Município de São Paulo, promotora da licitação, responsabilidade por eventuais danos decorrentes do uso indevido da senha, ainda que por terceiros.</p>
					<p class="s2">6.5.1	Deverá a licitante comunicar imediatamente ao provedor do sistema qualquer acontecimento que possa comprometer o sigilo ou que resulte na inviabilidade do uso da senha, para imediato bloqueio de acesso.</p>
					
				<Comments :attr="{id:commentId(), context:'6. CREDENCIAMENTO'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">7. APRESENTAÇÃO DA PROPOSTA DE PREÇOS</h3>
				<p>7.1. As propostas deverão ser enviadas por meio eletrônico disponível no endereço www.bec.sp.gov.br na opção “PREGÃO - ENTREGAR PROPOSTA”, com o valor total ANUAL desde a divulgação na íntegra do Edital no referido endereço eletrônico, até o dia e horário previstos no preâmbulo para a abertura da sessão pública.</p>
					<p class="s2">7.1.1. Até a abertura da sessão, a licitante poderá retirar ou substituir a proposta anteriormente apresentada. </p>
				<p>7.2. A licitante será responsável por todas as transações que forem efetuadas em seu nome no sistema eletrônico, assumindo como firmes e verdadeiros sua proposta e lances.</p>
				<p>7.3. À licitante caberá acompanhar as operações no sistema eletrônico, durante a sessão pública, respondendo pelo ônus decorrente de sua desconexão ou da inobservância de quaisquer mensagens emitidas pelo sistema.</p>
					<p class="s2">            7.3.1. A desconexão do sistema eletrônico com qualquer licitante não prejudicará a conclusão válida da sessão pública ou do certame.</p>
				<p>7.4. À desconexão do sistema eletrônico com o pregoeiro, durante a sessão pública, implicará:</p>
					<p class="s2">a)	fora da etapa de lances, a sua suspensão e o seu reinício, desde o ponto em que foi interrompida. Neste caso, se a desconexão persistir por tempo superior a 15 (quinze) minutos, a sessão pública deverá ser suspensa e reiniciada somente após comunicação expressa às licitantes de nova data e horário para a sua continuidade;</p>
					<p class="s2">b)	durante a etapa de lances, a continuidade da apresentação de lances pelas licitantes, até o término do período estabelecido no Edital.   </p>
				<p>7.5.  A apresentação da proposta de preços implicará em plena aceitação, por parte da licitante, das condições estabelecidas neste Edital e em seus Anexos.</p>
					<p class="s2">7.5.1. A proposta deve conter oferta firme e precisa, sem alternativa de serviços, preços ou qualquer outra condição que induza o julgamento a ter mais de um resultado.</p>
					<p class="s2">7.5.2. Os preços deverão ser cotados em moeda corrente nacional, em algarismos e ser equivalentes aos praticados no mercado na data de sua apresentação, sem inclusão de qualquer encargo financeiro ou previsão inflacionária, incluindo todos os custos diretos, indiretos e despesas, necessários a execução dos serviços. O preço ofertado será irreajustável e constituirá a única e completa remuneração pelo cumprimento do objeto deste certame, não sendo aceitos pleitos de acréscimos a qualquer título.</p>
						<p class="s3">7.5.2.1. Quaisquer tributos, custos e despesas diretos ou indiretos, não considerados na proposta ou incorretamente cotados, serão considerados como inclusos nos preços, não sendo aceitos pleitos de acréscimo, a qualquer título.</p>
				<p>  7.6.  A licitante declarada vencedora do certame deverá enviar a proposta de preços, conforme disposto no subitem 10.3.1 deste Edital, de acordo com o formulário que segue como Anexo II deste Edital, com todas as informações, declarações e garantias ali constantes, devendo ser redigida em língua portuguesa, com clareza, perfeitamente legível, sem emendas, rasuras, borrões, acréscimos ou entrelinhas, ser datada, rubricada em todas as folhas e assinada por seu representante legal ou procurador, devidamente identificado com números de CPF e RG, e respectivo cargo na licitante.</p>
					<p class="s2">7.6.1.   A proposta deverá ter validade de 60 (sessenta) dias corridos, contados a partir da data da abertura da sessão, não podendo haver aumento de preços se ocorrer, com anuência da proponente, dilação de seu prazo de validade. </p>
					
				<Comments :attr="{id:commentId(), context:'7. APRESENTAÇÃO DA PROPOSTA DE PREÇOS'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">8.  DIVULGAÇÃO E CLASSIFICAÇÃO INICIAL DAS PROPOSTAS DE PREÇOS</h3>
				<p>8.1.	Na data e horário indicado no preâmbulo deste Edital terá início a sessão pública do pregão eletrônico, com a divulgação das propostas de preços recebidas.</p>
				<p>8.2.	A Análise das propostas pelo Pregoeiro visará ao atendimento das condições estabelecidas neste Edital e seus anexos. </p>
				<p>8.3.	Serão desclassificadas as propostas: </p>
					<p class="s2"> a) cujo objeto não atenda as especificações, prazos e condições fixados neste edital e seus anexos;</p>
					<p class="s2">                  b) que por ação da licitante ofertante contenham elementos que permitam a sua   identificação. </p>
				<p>8.4.	A desclassificação se dará por decisão motivada do Pregoeiro.</p>
				<p>8.5.	Serão desconsideradas ofertas ou vantagens baseadas nas propostas das demais licitantes.</p>
				<p>8.6.	O sistema ordenará novamente as propostas analisadas e classificadas pelo Pregoeiro, por estarem em perfeita consonância com as especificações e condições de fornecimento detalhadas neste instrumento convocatório, sendo que somente estas participarão da fase de lances.</p>
					<p class="s2">          8.6.1 Eventual desempate de propostas de mesmo valor será promovido pelo sistema. </p>
					
				<Comments :attr="{id:commentId(), context:'8.  DIVULGAÇÃO E CLASSIFICAÇÃO INICIAL DAS PROPOSTAS DE PREÇOS'}" v-if="estaConsulta.ativo == 1"></Comments>				
			</section>

			<section>
				<h3 class="titulo" indent="2">9.   ETAPA DE LANCES</h3>
				<p>9.1. Iniciada a etapa competitiva, as licitantes poderão encaminhar lances exclusivamente por meio do sistema eletrônico, sendo a licitante imediatamente informada do seu recebimento e respectivos horários de registro e valor.</p>
					<p class="s2">9.1.1.   Os lances deverão ser formulados em valores distintos e decrescentes, inferiores à proposta de menor preço, ou em valores distintos e decrescentes inferiores ao do último valor apresentado pela própria licitante ofertante, observada, em ambos os casos, a redução mínima entre eles de <strong>R$ XX.XXX,XX</strong> (nnnnnnnnnn) aplicável, inclusive, em relação ao primeiro formulado, prevalecendo o primeiro lance recebido, quando ocorrerem 2 (dois) ou mais lances do mesmo valor.</p>
						<p class="s3"> 9.1.1.1. A aplicação do valor de redução mínima entre os lances incidirá sobre o <strong>valor TOTAL BIENAL.</strong></p>
				<p>9.2.   As licitantes poderão oferecer lances sucessivos, observado o horário fixado e as regras para sua aceitação.</p>
					<p class="s2"> 9.2.1. A desistência em apresentar lance implicará na manutenção do último preço apresentado pela licitante, para efeito de ordenação das propostas.</p>
				<p>9.3.   A etapa de lances terá a duração de 15 (quinze) minutos.</p>
					<p class="s2">9.3.1.  A duração da etapa de lances será prorrogada automaticamente pelo sistema, visando à continuidade da disputa, quando houver lance admissível ofertado nos últimos 3 (três) minutos do período de que trata o subitem “9.3. ” ou nos sucessivos períodos de prorrogação automática.</p>
						<p class="s3"> 9.3.1.1.  Não havendo novos lances ofertados nas condições estabelecidas no subitem 9.3.1, a duração da prorrogação encerrar-se-á, automaticamente quando atingido o terceiro minuto contado a partir do registro no sistema, do último lance que ensejar prorrogação.</p>
				<p>9.4.  No decorrer da etapa de lances, as licitantes serão informadas pelo sistema eletrônico:</p>
					<p class="s2">a)	dos lances admitidos e dos inválidos, horários de seus registros no sistema e respectivos valores;</p>
					<p class="s2">b)	  do tempo restante para o encerramento da etapa de lances.</p>
				<p>9.5.   A etapa de lances será considerada encerrada, findos os períodos de duração indicados no subitem 9.3.1.</p>
				<p>9.6.  Encerrada a etapa de lances, o sistema divulgará a nova grade ordenatória, contendo a classificação final, em ordem crescente de valores.</p>
					<p class="s2">9.6.1. Para essa classificação será considerado o último preço admitido de cada licitante.</p>
					
				<Comments :attr="{id:commentId(), context:'9.   ETAPA DE LANCES'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>
			<section>
				<h3 class="titulo" indent="2">10.    JULGAMENTO, NEGOCIAÇÃO E ACEITABILIDADE DAS PROPOSTAS</h3>
				<p>10.1. Para julgamento e classificação das propostas será adotado o critério do <strong>menor preço total global bienal,</strong> observados os requisitos, as especificações técnicas e os parâmetros definidos neste Edital e em seus Anexos quanto ao objeto.</p>
				<p>10.2.  Encerrada a etapa de lances da sessão pública, definida a licitante vencedora, o pregoeiro deverá com ela negociar, mediante troca de mensagens no sistema eletrônico, com vistas à redução do preço.</p>
					<p class="s2">10.2.1.  Visando à celeridade do procedimento licitatório, ao ser convocada a licitante deverá se manifestar no prazo estabelecido pelo pregoeiro, sob pena de desclassificação.</p>
				<p>10.3. Após a negociação, o pregoeiro fará o exame da aceitabilidade da oferta da licitante primeira classificada, devendo esta apresentar, <u><strong>no momento da entrega dos documentos de habilitação,</strong></u> de acordo com o exigido neste Edital, a proposta de preço, conforme Anexo II, com valor do preço final alcançado, pelo próprio sistema BEC por meio da opção anexar arquivo via chat, ou por correio eletrônico smitcpl01@prefeitura.sp.gov.br, sob pena de desclassificação. </p>
					<p class="s2"> 10.3.1.  A proposta original deverá ser encaminhada juntamente com os documentos de habilitação, conforme subitem 11.4.</p>
					<p class="s2">  10.3.2.  O Pregoeiro deverá verificar, como critério de aceitabilidade da proposta sua compatibilidade com os preços de mercado, aferidos mediante pesquisa, que instrui o processo administrativo pertinente a esta licitação:</p>
					<p class="s2">10.3.3.   Se o preço alcançado ensejar dúvidas quanto a sua exequibilidade, poderá o pregoeiro determinar à licitante que demonstre a sua viabilidade, por meio de documentação que comprove a sua capacidade em executar o objeto licitado pelo preço ofertado e nas condições propostas no Edital.</p>
						<p class="s3">10.3.3.1.  O descritivo técnico ou a documentação comprobatória de preços deverão ser encaminhados no prazo estipulado pelo Pregoeiro em língua portuguesa, sob pena de desclassificação.</p>
					<p class="s2">10.3.4.  Se a oferta não for aceitável ou se a licitante não atender à exigência estabelecida no item supra, o pregoeiro desclassificará, motivadamente, a proposta e examinará as ofertas subsequentes, na ordem de classificação, até a apuração de uma proposta que atenda a todas as exigências, podendo, também, negociar diretamente com a proponente, para que seja obtido preço melhor.</p>
				<p>10.4.  Considerada aceitável a oferta de menor preço, passará o pregoeiro ao julgamento da habilitação. </p>
					
				<Comments :attr="{id:commentId(), context:'10.    JULGAMENTO, NEGOCIAÇÃO E ACEITABILIDADE DAS PROPOSTAS'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>
			
			<section>
				<h3 class="titulo" indent="2">11.     HABILITAÇÃO</h3>
				<p>11.1. Divulgado o julgamento das propostas de preços na forma prescrita neste Edital, proceder-se-á à análise dos documentos de habilitação da licitante primeira classificada do objeto do certame. </p>
				<p>11.2.  Sob pena de inabilitação, a licitante, cuja oferta foi aceita, deverá encaminhar de imediato, para os endereços citados no subitem 10.3. a documentação exigida no subitem 11.6. deste Edital, com exceção daqueles constantes do cadastro da licitante no CAUFESP, desde que válidos.</p>
					<p class="s2">11.2.1.  A documentação relativa à Habilitação Jurídica (subitem 11.6.1.), sempre deverá ser encaminhada pela licitante, para identificar os sócios/representantes que subscrevem a proposta e demais documentos por ela emitidos.</p>
						<p class="s3">  11.2.1.1. Caso os documentos não sejam subscritos por seus sócios ou diretores, assim indicados nos respectivos atos constitutivos, a licitante deverá apresentar, também, os instrumentos de mandato outorgando poderes aos subscritores. </p>
					<p class="s2"> 11.2.2. Entende-se por “imediato” o prazo de até 30 (trinta) minutos após a notificação pelo Sistema, da licitante vencedora, sendo que o pregoeiro poderá, a seu critério, prorrogar este prazo.</p>
					<p class="s2">11.2.3.	 O pregoeiro verificará os dados e informações da autora da oferta aceita, constantes  do CAUFESP e extraídos dos documentos indicados no subitem 11.6 deste Edital. </p>
					<p class="s2">11.2.4.  Caso os dados e informações constantes do CAUFESP não atendam aos requisitos exigidos no subitem 10.6 deste Edital, o Pregoeiro verificará a possibilidade de alcançar os documentos por meio eletrônico, salvo impossibilidade devidamente certificada e justificada, imprimindo-os para análise e juntada ao processo administrativo pertinente a licitação.</p>
				<p>11.3.   A Administração não se responsabilizará pela eventual indisponibilidade dos meios eletrônicos hábeis de informações no momento da verificação a que se refere ao subitem 11.2.4., ou dos meios para a transmissão de cópias de documentos a que se referem ao subitem 11.2., ressalvada a indisponibilidade de seus próprios meios. Na hipótese de ocorrerem essas indisponibilidades a licitante deverá encaminhar os documentos solicitados, por outros meios, dentro do prazo estabelecido, sob pena de inabilitação, mediante decisão motivada.</p>
				<p>11.4.    Posteriormente deverão ser encaminhados, no original a proposta de preços exigida no subitem 10.3.1., e, nos originais ou cópias autenticadas por tabelião de notas, ou mediante publicação de órgão de Imprensa Oficial os documentos a que se referem a cláusula 11.6., salvo os que possam ser emitidos e/ou conferidos pela internet pelo próprio pregoeiro, dentro do prazo máximo de 02 (dois) dias úteis a contar da habilitação, para o endereço indicado no preâmbulo com a identificação de sua razão social e número do Pregão Eletrônico, endereçado à Comissão Permanente de Licitação nº 01 Portaria n° 75/SMIT/2019.</p>
				<p>11.5.	Por meio de aviso lançado no sistema, o Pregoeiro informará às demais licitantes que poderão consultar as informações cadastrais da licitante vencedora utilizando opção disponibilizada no próprio sistema para tanto. Deverá, ainda, informar o teor dos documentos recebidos por fax ou por meio eletrônico.</p>
				<p>11.6.     Além do registro cadastral no Cadastro Unificado de Fornecedores do Estado de São Paulo – CAUFESP, cuja regularidade da documentação é verificada automaticamente pelo sistema quando do credenciamento da licitante, a sua habilitação se dará mediante o exame dos documentos a seguir relacionados, relativos a:</p>
					<p class="s2">11.6.1.   Habilitação jurídica:</p>
						<p class="s3">a) Registro empresarial no Registro Público de Empresas Mercantis da respectiva sede.</p>
						<p class="s3">b)  Certidão simplificada expedida pela Junta Comercial do Estado onde se situa a sede da licitante ou ato constitutivo e alterações subsequentes, devidamente registrados em se tratando de sociedade empresária, e no caso de sociedade por ações, acompanhado de documentos de eleição de seus administradores.</p>
						<p class="s3">c)	Decreto de autorização, em se tratando de empresa ou sociedade estrangeira em funcionamento no país, e ato de registro ou autorização para funcionamento expedido pelo órgão competente, quando a atividade assim o exigir.</p>
						<p class="s3">d) Ato constitutivo, estatuto ou contrato social em vigor, com as devidas alterações, se o caso, devidamente registrado no Registro de Empresas Mercantis ou Registro Civil de Pessoas Jurídicas, conforme o caso, da sociedade empresária, sociedade simples, empresa individual de responsabilidade limitada ou empresário a que se refere o art. 966  da Lei nº 10.406, de 10 de janeiro de 2002 (Código Civil), consideradas  microempresas ou empresas de pequeno porte nos termos da Lei Complementar 123/2006 com a redação que lhe atribuiu a Lei Complementar 147/2014.</p>
					<p class="s2">       11.6.2	Regularidade fiscal e trabalhista: </p>
						<p class="s3">a)	Prova de inscrição no Cadastro Nacional de Pessoa Jurídica – CNPJ.</p>
						<p class="s3">b)	Prova de inscrição no Cadastro de Contribuintes Estadual ou Municipal, se houver, relativo à sede da licitante, pertinente ao seu ramo de atividade e compatível com o objeto licitado.</p>
						<p class="s3">c)	Prova de regularidade para com as Fazendas Federal, Estadual e Municipal, como segue:</p>
							<p class="s4"> c.1) Certidão unificada negativa de débitos relativos a tributos federais, à dívida ativa da União e previdenciários (para com o Sistema de Seguridade Social – INSS), expedida pela Receita Federal do Brasil/PGFN, nos termos da Portaria MF n° 358, de 05 de outubro de 2014, alterada pela Portaria MF n° 443, de 17 de outubro de 2014.</p>
							<p class="s4">c.2) Certidão negativa de débitos referentes a tributos estaduais relacionados com a prestação licitada, expedida por meio de unidade administrativa competente da sede da licitante.</p>
								<p class="s5">c.2.1)  No caso da licitante ter domicílio ou sede no Estado de São Paulo, a prova de regularidade para com a Fazenda Estadual se dará através da certidão negativa de débitos tributários da Dívida Ativa do Estado de São Paulo, expedida pela Procuradoria Geral do Estado, conforme Portaria CAT 20/98, observada a resolução SF/PGE n° 3/2010 e nos termos da portaria Intersecretarial n° 02/2014-SNJ/SEMPLA, publicada no DOC de 05 de Fevereiro de 2014.</p>
							<p class="s4">c.3)   Certidão Negativa Unificada de Tributos emitida pela Secretaria da Fazenda do Município de São Paulo (antiga Certidão de Tributos Mobiliários). </p>
								<p class="s5">c.3.1)  Caso a licitante não esteja cadastrada como contribuinte neste Município, deverá apresentar declaração firmada pelo seu representante legal/procurador, sob as penas da lei, do não cadastramento e de que nada deve à Fazenda do Município de São Paulo, relativamente aos tributos relacionados com a prestação licitada, conforme modelo do <strong>Anexo III.</strong></p>
								<p class="s5">c.3.2) Caso a licitante possua mais de um C.C.M. neste Município de São Paulo deverá apresentar certidão negativa de débitos tributários mobiliários relativa a cada cadastro que possua.</p>
						<p class="s3">d) Certificado de Regularidade de Situação para com o Fundo de Garantia de Tempo de Serviço (FGTS).</p>
						<p class="s3">e) Certidão Negativa de Débitos Trabalhistas (CNDT), conforme Lei Federal nº 12.440, de 07 de julho de 2011. </p>
						<p class="s3">11.6.2.1. Serão aceitas como prova de regularidade, certidões positivas com efeito de negativas e certidões positivas que noticiem em seu corpo que os débitos estão judicialmente garantidos ou com sua exigibilidade suspensa.</p>
					<p class="s2">11.6.3. Qualificação econômico-financeira:</p>
						<p class="s3">a.)  Certidão negativa de pedido de falência, expedida pelo distribuidor da sede da pessoa jurídica em data não superior a 60 dias da data da abertura do certame, se outro prazo não constar do documento.</p>
							<p class="s4">a.1) Se a licitante não for sujeita ao regime falimentar, a certidão mencionada deverá ser substituída por certidão negativa de ações de insolvência civil, ou documento equivalente.</p>
						<p class="s3">    b.) Balanço patrimonial e demonstrações contábeis do último exercício social, já exigíveis e apresentados na forma da lei, que comprovem a situação financeira da empresa, vedada sua substituição por balanço ou balancetes provisórios, podendo ser atualizados por índices oficiais quando encerrados há mais de três meses da data da apresentação da proposta;</p>
							<p class="s4">b.1) Somente empresas que ainda não tenham completado seu primeiro exercício fiscal poderão comprovar sua capacidade econômico-financeira por meio de balancetes mensais, conforme disposto na Lei Federal nº 8.541, de 23 de dezembro de 1992;</p>
						<p class="s3">c)  No caso de sociedade simples, a proponente deverá apresentar certidão dos processos cíveis em andamento relativos à solvência ou não da licitante, expedido pelo distribuidor da sede de pessoa jurídica, em data não superior a 60 (sessenta) dias da data da abertura do certame, se outro prazo não constar do documento.</p>
					<p class="s2">11.6.4. Habilitação Técnica:</p>
						<p class="s3">a)	Atestado(s) de desempenho anterior, fornecido(s) por pessoas jurídicas de direito público ou privado, que comprove a prestação de serviços similares (Prestação de Serviço Telefônico Fixo Comutado (STFC)), objeto da licitação. </p>
					<p class="s2">11.6.5.	Outros Documentos:</p>
						<p class="s3">a)	CUMPRIMENTO AO DISPOSTO NO ART. 7, INCISO XXXIII DA CONSTITUIÇÃO FEDERAL: Declaração firmada pelo representante legal/procurador da licitante de que não emprega menor de 18 anos em trabalho noturno, perigoso ou insalubre e não emprega menor de 16 anos, salvo na condição de aprendiz, a partir de 14 anos, sob as penas da Lei, conforme o disposto no artigo. 7º, inciso XXXIII da Constituição Federal e inciso V, do artigo 27 da Lei Federal nº 8.666/93, consoante modelo do Anexo IV deste Edital.</p>
						<p class="s3">b)	Declaração de inexistência de fato superveniente impeditivo de sua habilitação, assinada por sócio, dirigente, proprietário ou procurador, com o número da Cédula de Identidade do declarante, nos termos do modelo constante do Anexo V deste Edital.</p>
						<p class="s3">c)	Declaração de que a licitante não foi apenada com as sanções previstas na Lei Federal 8.666/1993, artigo 87, incisos III e IV, e/ou na Lei Federal 10.520/2002, artigo 7º, seja isoladamente, seja em conjunto, aplicada por qualquer esfera da Administração Pública, nos termos do modelo constante do Anexo VI deste Edital;</p>
				<p>11.7. A licitante para fins de habilitação deverá observar as disposições Gerais que seguem: </p>
					<p class="s2">11.7.1.	Todos os documentos devem estar com seu prazo de validade em vigor. Se este prazo não constar de item específico deste Edital, do próprio documento ou de lei específica, será considerado o prazo de validade de 06 (seis) meses, a contar da data de sua expedição, salvo os atestados/certidões de qualificação técnica, para os quais não se exige validade.</p>
					<p class="s2">11.7.2.   Todos os documentos expedidos pela empresa deverão estar subscritos por seu representante legal ou procurador, com identificação clara do subscritor.</p>
					<p class="s2">11.7.3. 	Os documentos emitidos via Internet serão conferidos pelo Pregoeiro ou sua equipe de apoio.</p>
					<p class="s2">11.7.4.	Todos os documentos apresentados deverão estar em nome da licitante e preferencialmente com número do CNPJ e endereço respectivo.</p>
						<p class="s3">a)	 se a licitante for a matriz, todos os documentos deverão estar em nome da matriz;</p>
						<p class="s3">b)	se a licitante for a filial, todos os documentos deverão estar em nome da filial, exceto aqueles que pela própria natureza, forem comprovadamente emitidos apenas em nome da matriz; </p>
						<p class="s3">c)	se  a licitante for a matriz e a fornecedora for a filial, os documentos deverão ser apresentados em nome da matriz e da filial simultaneamente;</p>
						<p class="s3">                            d) Independentemente de a licitante ser matriz ou filial, caso a empresa possua C.C.M. neste Município de São Paulo deverá apresentar certidão negativa de débitos tributários mobiliários relativa a cada cadastro que possua.</p>
					<p class="s2">11.7.5.	Todo e qualquer documento apresentado em língua estrangeira deverá estar acompanhado da respectiva tradução para o idioma pátrio, feita por tradutor público juramentado.</p>
					<p class="s2">11.7.6.  Não serão aceitos documentos cujas datas e caracteres estejam ilegíveis ou rasurados de tal forma que não possam ser entendidos.</p>
					<p class="s2">11.7.7. Os documentos exigidos para habilitação não poderão, em hipótese alguma, ser substituídos por protocolos, que apenas configurem o seu requerimento, não podendo, ainda, ser remetidos posteriormente ao prazo fixado.</p>
				<p>11.8.	O Pregoeiro e sua Equipe de Apoio verificarão eventual descumprimento das vedações de participação na licitação, mediante consulta aos: </p>
					<p class="s2">a)	Cadastro Nacional de Condenações Cíveis por Atos de Improbidade Administrativa, mantido pelo Conselho Nacional de Justiça – CNJ, no endereço eletrônico www.cnj.jus.br/improbidade_adm/consultar_requerido.php;</p>
					<p class="s2">b)	Cadastro Nacional das Empresas Inidôneas e Suspensas – CEIS, no endereço eletrônico www.portaldatransparencia.gov.br/ceis;</p>
					<p class="s2">c)	Portal de Sanções Administrativas, no endereço eletrônico http://www.esancoes.sp.gov.br/index.asp;</p>
					<p class="s2">d)	Cadastro de empresas apenadas do Tribunal de Contas  do Estado de São Paulo -TCE, no endereço eletrônico https://www4.tce.sp.gov.br/publicacoes/apenados/apenados.shtm;</p>
					<p class="s2">e)	Rol de Empresas Punidas, disponível no endereço eletrônico  http://www.prefeitura.sp.gov.br/cidade/secretarias/gestao/suprimentos_e_servicos/empresas_punidas/index.php?p=9255</p>
					<p class="s2">f)	Cadastro Integrado de Condenações por Ilícitos Administrativos, no endereço eletrônico https://contas.tcu.gov.br/ords/f?p=1660:3:0;</p>
					<p class="s2">g)	Sistema de Cadastramento Unificado de Fornecedores, disponível no endereço eletrônico  https://www3.comprasnet.gov.br/sicaf-web/public/pages/consultas/consultarCRC.jsf.</p>
					<p class="s2">              11.8.1. As consultas realizar-se-ão em nome da licitante e também de eventual matriz ou filial e de seus sócios majoritário e administrador.</p>
				<p>11.9.	Os documentos serão analisados pelo Pregoeiro e sua Equipe de Apoio quanto a sua conformidade com os solicitados e serão anexados ao processo administrativo eletrônico pertinente a esta licitação. </p>
					<p class="s2"></p>
					<p class="s2">     11.9.2. Sendo inabilitada a proponente cuja proposta tenha sido classificada em primeiro lugar, o Pregoeiro examinará a proposta ou lance subsequente, verificando sua aceitabilidade e procedendo à habilitação da licitante, na ordem de classificação, e assim sucessivamente até a apuração de uma proposta ou lance e proponente que atendam ao Edital.</p>
						<p class="s3">     11.9.2.1. Na situação a que se refere este item, o pregoeiro deverá negociar com a licitante para que seja obtido preço melhor.</p>
					<p class="s2">     11.9.3. Estando a documentação de habilitação da licitante completa, correta, com observância de todos os dispositivos deste Edital e seus Anexos o Pregoeiro considerará a proponente habilitada e vencedora do certame.</p>
					
				<Comments :attr="{id:commentId(), context:'11.     HABILITAÇÃO'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">12.   FASE RECURSAL</h3>
				<p>12.1.     Após encerrar totalmente a fase de habilitação, o pregoeiro informará às licitantes, por meio de mensagem lançada no sistema, que poderão interpor recurso, imediata e motivadamente, por meio eletrônico, utilizando para tanto, exclusivamente, campo próprio disponibilizado no sistema.</p>
					<p class="s2">   12.1.1. A falta de manifestação da licitante acarretará a decadência do direito de recurso e a adjudicação, pelo Pregoeiro, do objeto licitado a vencedora.</p>
					<p>12.2.	Havendo interposição de recurso, na forma indicada no subitem 12.1., o Pregoeiro, por mensagem lançada no sistema, informará aos recorrentes que poderão apresentar memoriais contendo as razões de recurso, no prazo de 3 (três) dias após o encerramento da sessão pública, e às demais licitantes que poderão apresentar contrarrazões, em igual número de dias, os quais começarão a correr do término do prazo para apresentação de memoriais, sendo-lhes assegurada vista imediata dos autos, no endereço da unidade promotora da licitação, constante do preâmbulo deste EDITAL, das 9:00 às 18:00 horas. </p>
						<p class="s2">12.2.1.	Os memoriais de recurso e as contrarrazões serão oferecidos exclusivamente por meio eletrônico, no sítio www.bec.sp.gov. ou www.bec.fazenda.sp.gov.br, e a apresentação de documentos comprobatórios das alegações, se for o caso, será efetuada mediante protocolo, no endereço da unidade promotora da licitação, constante do preâmbulo deste Edital, das 9:00 às 18:00 horas, observados os prazos estabelecidos no subitem 12.2.</p>
					<p>12.3.	O recurso terá efeito suspensivo e o seu acolhimento importará a invalidação dos atos insuscetíveis de aproveitamento. </p>

				<Comments :attr="{id:commentId(), context:'12.   FASE RECURSAL'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">13.   ADJUDICAÇÃO</h3>
				<p>13.1.   Constatando-se o atendimento das exigências fixadas no Edital, a licitante classificada e habilitada, será declarada vencedora para fins de adjudicação do objeto da licitação, pelo próprio pregoeiro, ou, em havendo recurso, pela autoridade competente.</p>
					
				<Comments :attr="{id:commentId(), context:'13.   ADJUDICAÇÃO'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>	
				
			<section>
				<h3 class="titulo" indent="2">14.    HOMOLOGAÇÃO</h3>
				<p>14.1.	Decorridas as fases anteriores, a decisão será submetida à autoridade competente, para homologação.</p>
					<p class="s2">          14.1.1.	 A adjudicação do objeto e a homologação da licitação não obrigam a Administração à contratação do objeto licitado. </p>
					
				<Comments :attr="{id:commentId(), context:'14.    HOMOLOGAÇÃO'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">15.   PREÇO, REAJUSTE E DOTAÇÃO</h3>
				<p>15.1.	O preço que vigorará para o fornecimento do objeto do certame será o ofertado pela licitante a quem for o mesmo adjudicado.</p>
				<p>15.2. Este preço inclui todos os custos diretos e indiretos, impostos, taxas, benefícios, encargos sociais, trabalhistas e fiscais que recaiam sobre o objeto, frete, transporte, e constituirá, a qualquer título, a única e completa remuneração pela execução dos serviços, e seu adequado e perfeito cumprimento, de modo que nenhuma outra remuneração será devida.</p>
				<p>15.3.	Os recursos necessários onerarão a dotação nº n° XX.XX.XX.XXX.XXXX.XXXX.XXXXXXX.XX - Manutenção e Operação da central de atendimento telefônico - 156, para atender o pleito no corrente exercício.</p>
					
				<Comments :attr="{id:commentId(), context:'15.   PREÇO, REAJUSTE E DOTAÇÃO'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">16.   CONDIÇÕES DO AJUSTE</h3>
				<p>16.1.  A contratação decorrente desta licitação será formalizada em Contrato da qual deverão constar todas as condições contratuais, de acordo com este Edital.</p>
					<p class="s2">           16.1.1.  Para a formalização do ajuste a empresa adjudicatária deverá apresentar os documentos já exigíveis por ocasião da habilitação, aqueles necessários à contratação, atualizados, caso solicitados.</p>
					<p class="s2">           16.1.2.   Como condição à contratação, ainda, deverá restar comprovado que a empresa a ser contratada não possui pendências junto ao Cadastro Informativo Municipal – CADIN MUNICIPAL, por força da Lei Municipal nº 14.094/2005 e Decreto nº 47.096/2006, que disciplinam que a inclusão no CADIN impedirá a empresa de contratar com a Administração Municipal.</p>
					<p class="s2"> 16.1.3.	 A licitante adjudicatária do objeto deverá ter registro atualizado no Cadastro de Credores junto à Secretaria Municipal de Finanças e Desenvolvimento Social (SF), caso não possua deverá providenciá-lo no prazo de 02 (dois) dias úteis, inclusive mediante indicação da conta corrente no Banco do Brasil S/A, a partir da homologação do certame, junto ao setor de contabilidade da contratante, sob pena de configurar recusa na contratação para fins de aplicação das penalidades previstas neste Edital.</p>
					<p class="s2"> 16.1.4.  Os documentos mencionados nesta cláusula deverão ser apresentados em cópias autenticadas ou no original, com prazo de validade em vigor na data da apresentação e serão retidos para oportuna juntada no processo administrativo pertinente à contratação.</p>
				<p>16.2. A formalização do ajuste se dará com o recebimento da nota de empenho pela adjudicatária do objeto da licitação, que poderá se dar por qualquer meio devidamente comprovado.</p>
					<p class="s2"> 16.2.1.  Caso haja convocação para a adjudicatária retirar a nota de empenho, pelo   Diário Oficial da Cidade, a empresa terá 05 (cinco) dias úteis, para tanto.</p>
					<p class="s2">16.2.2.   Caso a nota de empenho seja encaminhada por fax ou e-mail a empresa adjudicatária terá 02 (dois) dias úteis, para acusar seu recebimento da mesma forma, data em que iniciará o prazo de 05 (cinco) dias úteis para retirada da nota de empenho.</p>
					<p class="s2">16.2.3.   O prazo para formalização do ajuste, poderá ser prorrogado uma vez, por igual período, desde que solicitado por escrito, durante seu transcurso e ocorra motivo justificado e aceito pela Administração.</p>
						<p class="s3">16.2.3.1.  A não formalização do ajuste, ou seja, a não retirada da nota de empenho ou o seu não recebimento no prazo estabelecido configurará recusa na contratação, incidindo as penalidades previstas neste Edital.</p>
				<p> 16.3. É facultado à Administração, quando o convocado não formalizar o ajuste no prazo e condições estabelecidos, inclusive na hipótese de impedimento da contratação, sem embargo da aplicação das penalidades cabíveis, retomar o procedimento, mediante agendamento de nova Sessão Pública, ou revogar a licitação.</p>
					<p class="s2">16.3.1.  Na hipótese de retomada do procedimento, as demais licitantes classificadas serão convocadas para participar da nova sessão pública do pregão, com vistas a celebração da contratação.</p>
					<p class="s2">16.3.2. O aviso da nova sessão pública será publicado no Diário Oficial da Cidade e divulgado nos endereços eletrônicos www.bec.sp.gov.br e http://e-negocioscidadesp.prefeitura.sp.gov.br</p>
					<p class="s2">16.3.3.   Na sessão o pregoeiro convocará as licitantes classificadas remanescentes, na ordem de classificação, promovendo a averiguação das condições de aceitabilidade de preços e de habilitação, procedendo-se conforme especificações deste Edital, até o encontro de uma proposta e licitante que atendam a todas as exigências estabelecidas, sendo a respectiva licitante declarada vencedora e a ela adjudicado o objeto da licitação.</p>
				<p>16.4. Para a execução do ajuste, nenhuma das partes poderá oferecer, dar ou se comprometer a dar a quem quer que seja, ou aceitar ou se comprometer a aceitar de quem quer que seja, tanto por conta própria quanto por intermédio de outrem, qualquer pagamento, doação, compensação, vantagens financeiras ou não financeiras ou benefícios de qualquer espécie que constituam prática ilegal ou de corrupção, seja de forma direta ou indireta quanto ao objeto deste Edital, ou de outra forma a ele não relacionada, devendo garantir, ainda, que seus prepostos e colaboradores ajam da mesma forma, conforme disposto no Decreto 44.279/03, com redação que lhe atribuiu o Decreto 56.633/2015.</p>
					
				<Comments :attr="{id:commentId(), context:'16.   CONDIÇÕES DO AJUSTE'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">17.    PRAZOS, CONDIÇÕES E LOCAL DE ENTREGA</h3>
				<p>17.1.  A Administração estabelecerá data certa para início da execução do serviço, conforme constar na Minuta de Contrato (Anexo I) ou, excepcionalmente, por meio de Ordem de Início dos Serviços.</p>
					<p class="s2">17.1.1. O serviço deverá ser prestado de acordo com o ofertado na proposta, no local e horário discriminados no Anexo II deste Edital, correndo por conta da contratada todas as despesas decorrentes da execução do objeto contratual.</p>
					<p class="s2">17.1.4. A execução dos serviços terá validade de 12 (doze) meses, a partir da assinatura do contrato, prorrogável de acordo com legislação vigente, nos termo do item 4.1 do Termo de Referência. </p>
				<p>17.2. Somente serão analisados pela Administração os pedidos de prorrogação de prazo(s) de entrega do objeto que se apresente com as condições seguintes:</p>
					<p class="s2">a)	até a data final prevista para a entrega; e,</p>
					<p class="s2">b)	instruídos com justificativas, nos termos do disposto no parágrafo 1º do artigo 57 da Lei Federal nº 8.666/93, e respectiva comprovação.</p>
					<p class="s2">  17.2.1. Os pedidos instruídos em condições diversas das previstas no subitem anterior serão indeferidos de pronto.</p>
				<p>17.3. O prazo de garantia dos serviços executados será de 12 (doze) meses, podendo ser prorrogado por até 60 (sessenta) meses.  </p>
				<p>17.4.  A documentação a ser entregue pelo fornecedor é a seguinte:</p>
					<p class="s2">17.4.1.  Primeira Via da Nota Fiscal.</p>
					<p class="s2">17.4.2. Nota Fiscal Fatura.</p>
					<p class="s2">17.4.3. Cópia reprográfica da Nota de Empenho. </p>
						<p class="s3"> 17.4.3.1.   Na hipótese de existir Nota de retificação e/ou Nota Suplementar de Empenho, cópia(s) da(s) mesma(s) deverá(ão) acompanhar os demais documentos citados.</p>
					<p class="s2">17.4.4. Demais documentos elencados na Portaria 92/2014 da Secretaria de Finanças do Município de São Paulo, alterada pela Portaria SF 8/2016, exigíveis na espécie.</p>
					
				<Comments :attr="{id:commentId(), context:'17.    PRAZOS, CONDIÇÕES E LOCAL DE ENTREGA'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">18.     DO PREÇO, DA DOTAÇÃO E DAS CONDIÇÕES DE PAGAMENTO</h3>
				<p>18.1.	O objeto deste Pregão será recebido pela Contratante, consoante o disposto no artigo 73, inciso II, alíneas “a” e “b” da Lei Federal nº  8.666/93 e demais normas pertinentes.</p>
					<p class="s2">18.1.2. Caso seja identificada qualquer inconformidade, a partir da notificação, a empresa responsável pela instalação da infraestrutura terá até 20 (vinte) dias úteis para efetuar as correções.</p>
						<p class="s3">              18.1.5. O recebimento e aceite do objeto pela Administração não exclui a responsabilidade civil da Contratada por qualquer inconformidades  ou disparidades com as especificações estabelecidas no Edital, verificadas posteriormente.</p>
					<p>18.2. O prazo para pagamento será de 30 (trinta) dias, contados da execução dos serviços por localidade que será feita através de Ordem de Serviço. </p>
						<p class="s2"> 18.2.1. A Nota Fiscal / Nota Fiscal Fatura que apresentar incorreções, quando necessário, será devolvida e seu vencimento ocorrerá em até 30 (trinta) dias após a data de sua reapresentação válida.</p>
						<p class="s2">18.2.2. Caso ocorra a necessidade de providências complementares por parte da Contratada, a fluência do prazo de pagamento será interrompida, reiniciando-se a contagem a partir da data em que estas forem cumpridas. </p>
					<p>18.3. O pagamento será efetuado por crédito em conta corrente no Banco do Brasil S/A, nos termos do disposto no Decreto Municipal nº 51.197/2010.</p>
						<p class="s2">          18.3.1. A proponente deverá indicar na proposta comercial o nome e número da agência, bem como o número da conta corrente, se já a tiver.</p>
					<p>18.4.  Será aplicada compensação financeira, nos termos da Portaria SF nº 05/2012, quando houver atraso no pagamento dos valores devidos, por culpa exclusiva da Administração, observada a necessidade de se apurar a responsabilidade do servidor que deu causa ao atraso no pagamento, nos termos legais.</p>
						<p class="s2">18.4.1. Para fins de cálculo da compensação financeira de que trata o item acima, o valor do principal devido será reajustado utilizando-se o índice oficial de remuneração básica da caderneta de poupança e de juros simples no mesmo percentual de juros incidentes sobre a caderneta de poupança para fins de compensação da mora (TR + 0,5% “pro-rata tempore”), observando-se, para tanto o período correspondente à data prevista para o pagamento e aquela data em que o pagamento efetivamente ocorreu.</p>
						<p class="s2">18.4.2. O pagamento da compensação financeira dependerá de requerimento a ser formalizado pela Contratada.</p>
					<p>18.5.	Quaisquer pagamentos não isentarão a Contratada das responsabilidades contratuais, nem implicarão na aceitação do material.</p>
					<p>18.6. 	Os pagamentos obedecerão ao disposto nas Portarias da Secretaria Municipal de Finanças e Desenvolvimento Social (SF) em vigor, notadamente a Portaria SF nº 92, de 16/05/2014, alterada pela Portaria SF 8/2016 e pela Portaria SF 159/2017, ficando ressalvada qualquer alteração quanto às normas referentes a pagamento, em face da superveniência de normas federais ou municipais sobre a matéria.</p>
					
				<Comments :attr="{id:commentId(), context:'18.     DO PREÇO, DA DOTAÇÃO E DAS CONDIÇÕES DE PAGAMENTO'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">19. DA FISCALIZAÇÃO</h3>
				<p>19.1. A Fiscalização do ajuste caberá ao servidor e seu substituto nominalmente designados pela autoridade competente, em regular despacho, nos termos do Decreto Municipal nº 54.873/14.</p>
				<p>19.2. A ação ou omissão total ou parcial da fiscalização, não eximirá a Contratada das responsabilidades contratuais.</p>
					
				<Comments :attr="{id:commentId(), context:'19. DA FISCALIZAÇÃO'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">20. PENALIDADES</h3>
				<p>20.1.	São aplicáveis as sanções previstas na Lei Federal nº 8.666/93, na Lei Federal no 10.520/02 e na Lei Municipal nº. 12.378/02, devendo ser observados os procedimentos contidos no Decreto Municipal nº 44.279/03.</p>
					<p class="s2">    20.1.1. As penalidades só deixarão de ser aplicadas nas seguintes hipóteses:</p>
						<p class="s3">a)	comprovação, anexada aos autos, da ocorrência de força maior impeditiva do cumprimento da obrigação e/ou,</p>
						<p class="s3">b)	manifestação da unidade requisitante, informando que o ocorrido derivou de fatos imputáveis à Administração.</p>
				<p>20.2.	Ocorrendo recusa da adjudicatária em assinar e/ou retirar/receber a nota de empenho, dentro do prazo estabelecido neste Edital, sem justificativa aceita pela Administração, garantido o direito prévio de citação e da ampla defesa, serão aplicadas:</p>
					<p class="s2">20.2.1.	Multa no valor de 20% (vinte por cento) do valor do ajuste se firmado fosse; e</p>
					<p class="s2">20.2.2. Pena de suspensão temporária do direito de licitar e contratar pelo prazo de até 02 (dois) anos com a Administração Pública, a critério da Administração.</p>
					<p class="s2">20.2.3.	Incidirá nas mesmas penas previstas neste subitem a empresa que estiver impedida de firmar o ajuste pela não apresentação dos documentos necessários para tanto.</p>
				<p>20.3.	À licitante que ensejar o retardamento da execução do certame, inclusive em razão de comportamento inadequado de seus representantes, deixar de entregar ou apresentar documentação falsa exigida neste Edital, não mantiver a proposta/lance, comportar-se de modo inidôneo, fizer declaração falsa ou cometer fraude fiscal, garantido o direito prévio de citação e da ampla defesa, serão aplicadas as penalidades referidas nos subitens 20.2.1. e 20.2.2., a critério da Administração.</p>
				<p>20.4. A Contratada estará sujeita às penalidades previstas no item “12. Das Penalidades” do Termo de Referência, Anexo I deste Edital, bem como às glosas previstas pelo descumprimento do acordo de nível de serviços constantes no Anexo V do Termo de Referência, Anexo I deste Edital.  :</p>
				<p>20.5.	As sanções são independentes e a aplicação de uma não exclui a das outras, quando cabíveis.</p>
				<p>20.6. O valor das multas será atualizado monetariamente, nos termos da Lei Municipal nº 10.734/89, com a redação que lhe atribuiu a Lei Municipal nº 13.275/2002 e alterações subsequentes.</p>
				<p>20.7. Das decisões de aplicação de penalidades, caberá recurso nos termos do Decreto Municipal nº 44.279/03, observados os prazos nele fixados, que deverá ser dirigido à Comissão Permanente de Licitação nº 01 da Secretaria Municipal de Inovação e Tecnologia, e protocolizado nos dias úteis, das 09:00 às 18:00 horas, na Rua Libero Badaró, 425, 34º andar, São Paulo – SP, após o recolhimento em agência bancária dos emolumentos devidos.</p>
					<p class="s2">20.7.1. Não serão conhecidos recursos enviados pelo correio, fac-símile, correio eletrônico ou qualquer outro meio de comunicação, se, dentro do prazo previsto em lei, a peça inicial original não tiver sido protocolizada.</p>
					<p class="s2">20.7.2. Caso a CONTRATANTE releve justificadamente a aplicação da multa ou de qualquer outra penalidade, essa tolerância não poderá ser considerada como modificadora de qualquer condição contratual, permanecendo em pleno vigor todas as condições deste Edital e do ajuste dele decorrente.</p>
				<p>20.8.	O prazo para pagamento das multas será de 05 (cinco) dias úteis a contar da intimação da empresa apenada. A critério da Administração e em sendo possível o valor devido será descontado da importância que a mesma tenha a receber. Não havendo pagamento pela empresa, o valor será inscrito como dívida ativa, sujeitando-se ao processo executivo.</p>
				<p>20.9.  São aplicáveis à presente licitação e ao ajuste dela decorrente no que cabível for, inclusive, as sanções penais estabelecidas na Lei Federal nº 8.666/93.</p>
					
				<Comments :attr="{id:commentId(), context:'20. PENALIDADES'}" v-if="estaConsulta.ativo == 1"></Comments>
			</section>

			<section>
				<h3 class="titulo" indent="2">21. DISPOSIÇÕES FINAIS</h3>
				<p>21.1. No julgamento da habilitação e das propostas, o pregoeiro poderá sanar erros ou falhas que não alterem a substância das propostas, dos documentos e sua validade jurídica, mediante despacho fundamentado, registrado em ata e acessível a todos, atribuindo-lhes validade e eficácia para fins de habilitação e classificação. </p>
				<p>21.2. As normas disciplinadoras desta licitação serão interpretadas em favor da ampliação da disputa, respeitada a igualdade de oportunidade entre as licitantes e desde que não comprometam o interesse público, a finalidade e a segurança da contratação.</p>
				<p>21.3. As licitantes assumem todos os custos de preparação e apresentação de suas propostas e a PMSP não será, em nenhum caso, responsável por esses custos, independentemente da condução ou do resultado do processo licitatório.</p>
				<p>21.4. As licitantes são responsáveis pela fidelidade e legitimidade das informações e dos documentos apresentados em qualquer fase do certame. </p>
					<p class="s2">21.4.1 A falsidade de qualquer declaração prestada, notadamente objetivando os benefícios da Lei Complementar 123/06, alterada pela Lei Complementar 147/14, poderá caracterizar o crime de que trata o art. 299 do Código Penal, sem prejuízo do enquadramento em outras figuras penais e das sanções administrativas previstas na legislação pertinente, mediante o devido processo legal, e implicará, também, a inabilitação da licitante se o fato vier a ser constatado durante o trâmite da licitação.</p>
				<p>21.5.  A contratada deverá comunicar à Administração toda e qualquer alteração nos dados cadastrais, para atualização, devendo manter, durante toda a execução do contrato,  em compatibilidade com as obrigações assumidas, todas as condições de habilitação e qualificação exigidas na licitação. </p>
				<p>21.6.	O ajuste, suas alterações e rescisão obedecerão à Lei Municipal nº 13.278/02, à Lei Federal nº 8.666/93, demais normas complementares e disposições deste Edital, aplicáveis à execução dos contratos e especialmente os casos omissos.</p>
				<p>21.7.	A PMSP, no interesse da Administração, poderá, a qualquer tempo e a seu exclusivo critério, por despacho motivado, revogar ou anular, no todo ou em parte a licitação, sem que tenham as licitantes direito a qualquer indenização, conforme artigo 49 da Lei Federal nº 8.666/93.</p>
				<p>21.8. Com base no parágrafo 3º do artigo 43, da Lei Federal nº 8.666/93, é facultado ao Pregoeiro, em qualquer fase da licitação, promover diligência destinada a esclarecer ou a complementar a instrução do processo.</p>
				<p>21.9.	Os casos omissos e as dúvidas surgidas serão resolvidos pelo Pregoeiro ouvidas, se for o caso, as Unidades competentes.</p>
				<p>21.10. Integrarão o ajuste a ser firmado, para todos os fins, a proposta da Contratada, a Ata da licitação e o Edital da Licitação, com seus Anexos, que o precederam, independentemente de transcrição.</p>
				<p>21.11. Nenhuma tolerância das partes quanto à falta de cumprimento de quaisquer dos itens do ajuste poderá ser entendida como aceitação, novação ou precedente.</p>
				<p>21.12. A Contratada não poderá subcontratar, ceder ou transferir o objeto do ajuste, no todo ou em parte, a terceiros, sob pena de rescisão.</p>
				<p>21.13. Fica ressalvada a possibilidade de alteração das condições contratuais em face da superveniência de normas federais e municipais disciplinando a matéria.</p>
				<p>21.14.	Na contagem dos prazos estabelecidos neste Edital e seus Anexos, excluir-se-á o dia do início e incluir-se-á o do vencimento. Só se iniciam e vencem os prazos em dias de expediente na PMSP. Considerar-se-ão os dias consecutivos, exceto quando for explicitamente disposto em contrário.</p>
				<p>21.15. Não havendo expediente ou ocorrendo qualquer fato superveniente que impeça a realização do certame na data marcada, o pregoeiro agendará nova data para a abertura da sessão.</p>
				<p>21.16. Fica desde logo eleito o Foro da Comarca da Capital – Vara da Fazenda Pública - para dirimir quaisquer controvérsias decorrentes do presente certame ou de ajuste dele decorrente.</p>
				<p>21.17. Os atos relativos à licitação efetuados por meio do sistema eletrônico serão formalizados e registrados no processo administrativo pertinente ao certame. </p>
				<p>21.18. O resultado deste Pregão e os demais atos pertinentes a esta licitação, sujeitos a  publicação, serão divulgados no Diário Oficial da Cidade e no sítio eletrônico http://e-negocioscidadesp.prefeitura.sp.gov.br – Secretaria Municipal de Inovação e Tecnologia.</p>
				<p>21.19. Qualquer divergência entre as especificações contidas no Edital e as constantes no catálogo de materiais afeto ao sistema BEC/SP, prevalecerão para todos os efeitos as contidas no Edital.</p>
				<p>21.20. O pregoeiro e a equipe de apoio que atuarão neste pregão eletrônico foram designados nos autos do processo administrativo a ele pertinente e indicados no sistema.</p>
				<p>21.21 Na hipótese de as normas do Edital contradizerem as disposições do Termo de Referência, as últimas prevalecerão sobre as primeiras.  </p>

				<p style="text-align: center">São Paulo, XXX de Outubro de 2019 <br>
				<strong>XXXXXXXXXXXXXXXXXXXX</strong> <br>
				Pregoeiro (a) <br>
				<strong>Comissão de Licitação Permanente nº 01</strong></p>

				<Comments :attr="{id:commentId(), context:'21. DISPOSIÇÕES FINAIS'}" v-if="estaConsulta.ativo == 1"></Comments>				
			</section>


		<section>
			<h2 class="titulo" indent="1">1.	OBJETO</h2>
			<h3>1.1.	Contratação de serviços de planejamento, implantação, operação, gerenciamento de central de atendimento e gestão de atendimento receptivo e ativo nas formas eletrônica e humana. </h3>
			<Comments :attr="{id:commentId(true), context:'1. OBJETO'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">2.	DETALHAMENTO DO OBJETO</h2>
			<h3>2.1.	A contratação engloba:</h3>
			<p>2.1.1.	A prestação de serviços técnicos em: Gestão da Operação e da Qualidade, Planejamento, Operação, Administração, Projeto, Implantação e Implementação, Treinamento, Suporte Técnico e Operacional.</p>
			<p>2.1.2.	O fornecimento de linhas telefônicas, bem como toda a infraestrutura física e lógica necessárias, para o número 156 para tele atendimento ativo e receptivo.</p>
				<p class="s2">2.1.2.1.	Justifica-se o item 2.1.2, considerando: (i) a centralização do gerenciamento das linhas telefônicas necessárias à operação do Contact Center (ii) facilidade de negociação quanto à necessidade de flexibilização da quantidade de linhas, (iii) haver melhor poder de negociação de valores junto às operadoras de telefonia levando em conta a volumetria das ligações. </p>
			<p>2.1.3.	Disponibilização e manutenção de infraestrutura predial e material permanente, fornecimento de mobiliário, pessoal, treinamento, telefonia, equipamentos, links, recursos de infraestrutura tecnológica de redes e telecomunicações, plataforma de comunicação, integração de telefonia por computador (CTI – Computer Telephony Integration), solução de gravação dos atendimentos, processos de informações de atendimento para a Central com capacidade de gravação de mensagens, recursos humanos especializados, e demais recursos necessários à prestação de serviços, de acordo com o especificado neste Termo de Referência.</p>
				<p class="s2">2.1.3.1.	O CHAT disponibilizado pela CONTRATANTE e integrado ao portal de atendimento será operado por atendentes da CONTRATADA.</p>
			<p>2.1.4.	No contexto da gestão de atendimento ativo, estão contidos o gerenciamento das campanhas provenientes das secretarias interessadas e, a CONTRATADA deverá dispor de recursos para o gerenciamento de campanhas ATIVAS incluindo envio de SMS.</p>
				<p class="s2">2.1.4.1.	O envio de SMS proveniente das diversas campanhas deverá, quando for o caso, ser realizado a partir de dados gerados pela solução sistêmica de gestão de atendimento utilizada pela CONTRATANTE </p>			

			<Comments :attr="{id:commentId(), context:'2.1.	A contratação engloba:'}" v-if="estaConsulta.ativo == 1"></Comments>			
		</section>

		<section>
			<h2 class="titulo" indent="1">3.	DESCRIÇÃO GERAL DOS SERVIÇOS A SEREM CONTRATADOS</h2>
			<h3>3.1.	Link Telefônico</h3>
			<p>3.1.1.	A Central de Atendimento da Prefeitura do Município de São Paulo utiliza os números 156, 199 (Defesa Civil) e 153 (Guarda Civil Metropolitana) enquanto telefones públicos municipais, conforme Resolução da Anatel, nº 357, de 15 de março de 2004, estando apto a receber ligações de todo o município de São Paulo. Para os municípios da Grande São Paulo com DDD 11 ou telefones móveis DDD 11 em outras unidades da federação, o acesso aos serviços do número 156 pode ser realizado pelo número 0800 011 0156.</p>
			<p>3.1.2.	A CONTRATANTE disponibilizará as linhas telefônicas, bem como toda a infraestrutura física e lógica, para os tridígitos 199 e 153 no endereço de instalação da CONTRATADA, após a assinatura do contrato.</p>
			<p>3.1.3.	Será de responsabilidade da CONTRATADA todos os custos da conta telefônica decorrentes do tráfego de ligações receptivas na linha do tipo discagem direta gratuita 156, bem como os custos relacionados às tarifas telefônicas ativas.</p>
				
			<Comments :attr="{id:commentId(), context:'3.1.	Link Telefônico'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>3.2.	URA - Unidade de Resposta Audível</h3>
			<p>3.2.1.	A URA deverá estar instalada na rede interna da empresa CONTRATADA, sendo seu gerenciamento e programação realizados pela própria CONTRATADA, não sendo permitida sua terceirização.</p>
			<p>3.2.2.	A URA deverá contemplar a existência de estruturas diferentes para os números 156, 199 e 153.</p>
			<p>3.2.3.	Deverá prever canais simultâneos de URA que atendam o volume de ligações estimadas, contidas no ANEXO I - HISTÓRICO DE LIGAÇÕES E VOLUME - RECEPTIVO.</p>
			<p>3.2.4.	Toda a infraestrutura da URA utilizada para a prestação dos serviços contratados deve ser de uso exclusivo da Prefeitura do Município de São Paulo, não podendo ser compartilhada com outros clientes da CONTRATADA.</p>
			<p>3.2.5.	As manutenções corretivas, necessárias aos aplicativos que já se encontrarem em operação na URA, devem ser realizadas em prazo máximo de 24 horas, a contar da identificação do problema.</p>
			<p>3.2.6.	Possibilidade de redução, expansão ou alteração em 24h, de acordo com as necessidades levantadas pela CONTRATANTE.</p>
			<p>3.2.7.	As manutenções preventivas e corretivas da URA deverão ser executadas sempre no horário de menor tráfego de atendimento da Central de Atendimento 156, 199 e 153 e previamente autorizadas, pelo gestor do contrato da CONTRATANTE</p>
			<p>3.2.8.	A URA deverá possuir recursos para detectar o tom de ocupado na linha, de modo que quando uma ligação for interrompida abruptamente ou o cidadão desligar antes de ser atendido, a linha telefônica deverá ser liberada imediatamente, tornando-a disponível para uma nova chamada (Busy Detection).</p>
			<p>3.2.9.	A solução deverá suportar integração com VOIP.</p>
			<p>3.2.10.	A solução deverá permitir receber a transferência de chamada de um atendente diretamente para a opção dentro da árvore da URA.</p>
			<p>3.2.11.	A solução deverá permitir, após o término do atendimento humano, o retorno para pesquisa de satisfação.</p>
			<p>3.2.12.	A solução deverá possuir recursos que possibilitem aos cidadãos selecionar as opções desejadas do menu da URA, sem a necessidade de ouvir toda a mensagem gravada (recursos de cut through).</p>
			<p>3.2.13.	A solução deverá possibilitar aos munícipes acesso direto à operação desejada, sem necessidade de percorrer cada uma das opções anteriores porventura existentes.</p>
			<p>3.2.14.	A solução deverá utilizar o protocolo de comunicação TCP/IP.</p>
			<p>3.2.15.	A solução deverá possuir a facilidade de echo, para vocalizar para os munícipes os dados por eles digitados.</p>
			<p>3.2.16.	A solução deverá desviar, incondicionalmente, para o operador, todas as chamadas com inoperância no tempo máximo de 10 segundos na URA.</p>
			<p>3.2.17.	A solução deverá oferecer a possibilidade de reconhecimento de palavras ou fonemas, bem como de números de 0 (zero) a 9 (nove) e palavras “sim” e “não” , para todos os atendimentos pela URA.</p>
			<p>3.2.18.	Todas as gravações vocalizadas na URA deverão ser produzidas preferencialmente em estúdio.</p>
			<p>3.2.19.	Deverá possuir recursos para bloqueio de ligações telefônicas a cobrar.</p>
			<p>3.2.20.	Deverá possuir recursos de TTS (Text to Speech), em tempo real e em português do Brasil, compatível com o padrão de mercado. Este recurso deverá suportar no mínimo 100 (cem) sessões simultâneas de TTS.</p>
			<p>3.2.21.	Deverá possuir recursos de Reconhecimento de Voz (ASR – Automatic Speech Recognition) baseado no idioma português do Brasil e possibilidade de outros idiomas, tais como inglês e espanhol. Este recurso deverá suportar sessões simultâneas, no mínimo, a mesma quantidade de portas de URA.</p>
			<p>3.2.22.	Deverá haver a possibilidade de atendimento simultâneo de ligações através de entroncamento digital e possuir os recursos seguintes:</p>
				<p class="s2">3.2.22.1.	Agilidade na alteração dos menus de atendimento e nas informações prestadas de acordo com a necessidade da CONTRATANTE.</p>
				<p class="s2">3.2.22.2.	Integração com base de dados.</p>
				<p class="s2">3.2.22.3.	Especificação e alteração de serviços de URA pela CONTRATANTE.</p>
			<p>3.2.23.	A URA deverá possibilitar ao usuário do serviço que disque um determinado número de cifras (senhas, códigos, CPF, CNPJ, dentre outros). Podendo ser utilizada em ações como reprodução de novas frases, tomadas de decisões, consultas em banco de dados padrão SQL, consultas em mainframe via gateway de acesso</p>
			<p>3.2.24.	Deverá permitir acesso remoto às tarefas de operação, configuração e supervisão a partir de qualquer máquina que esteja na rede da plataforma;</p>
			<p>3.2.25.	Ao atender a uma ligação deverá dirigir o usuário chamador diretamente para a hierarquia de menus e sub-menus interativos do serviço correspondente ao número de acesso chamado.</p>
			<p>3.2.26.	A URA deverá permitir a criação de menus com opção de voltar ao início ou a um nível anterior do menu.</p>
			<p>3.2.27.	A URA deverá apresentar mensagens síncronas, ou seja, toda mensagem deverá ser apresentada ao usuário a partir do seu início, com exceção da música para chamadas em espera ou estacionadas.</p>
			<p>3.2.28.	Deverá possuir dispositivo de manutenção remota via rede (LAN e WAN) TCP/IP.</p>
			<p>3.2.29.	A URA deverá permitir que cada linha seja totalmente independente da outra, permitindo que cada linha execute uma aplicação diferente da outra.</p>
			<p>3.2.30.	Caso a URA seja externa ao PABX/IP, a conexão da mesma deverá ser conectada via protocolo IP.</p>
			<p>3.2.31.	O número de porta de URA deverá ser igual ao número de linhas.</p>
			<p>3.2.32.	A URA deverá possuir as facilidades de transferência para serviço DAC, transferência para ramal e sincronismo de tela.</p>
			<p>3.2.33.	A URA deverá permitir compatibilidade e ter a capacidade de interagir via TCP-IP, Socket e com banco de dados relacional através de consultas SQL. Deverão estar disponíveis, no mínimo, os drives para banco de dados ORACLE, MS SQL SERVER, MYSQL e POSTGRES.</p>
			<p>3.2.34.	O acesso deverá ser realizado através de rede local ou remota, utilizando TCP/IP sem limitações de número conexão por licença da URA.</p>
			<p>3.2.35.	As chamadas transferidas para o DAC deverão receber simultaneamente ao recebimento do áudio, os dados de identificação do cliente em seu PC. Estes dados serão apresentados pelo sistema especificado neste Termo de Referência que os receberá da URA, através do aplicativo CTI que deverá ser nativo.</p>
			<p>3.2.36.	Os scripts de navegação da URA deverão ser desenvolvidos e /ou atualizados pela CONTRATADA sempre que solicitado pela CONTRATANTE dentro de um prazo acordado entre as partes e de acordo com a complexidade de cada caso, sem ônus para a CONTRATANTE.</p>
			<p>3.2.37.	As gravações de mensagens serão de responsabilidade da CONTRATADA as quais deverão ser submetidas à apreciação e aprovação da CONTRATANTE.</p>
			<p>3.2.38.	A fim de prover maior agilidade na alteração dos menus de atendimento e nas informações prestadas, deverá ser disponibilizado por meio de Interface WEB Gráfica, em idioma português Brasil, uma ferramenta de publicação e edição destas mensagens.</p>
			<p>3.2.39.	A URA deverá vocalizar o tempo de espera estimado e posição do usuário na fila de atendimento.</p>


			<Comments :attr="{id:commentId(), context:'3.2.	URA - Unidade de Resposta Audível'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>3.3.	DAC - DISTRIBUIDOR AUTOMÁTICO DE CHAMADA</h3>
			<p>3.3.1.	A CONTRATADA deverá disponibilizar em seu ambiente, os terminais designados para o atendimento das chamadas originadas de todo o município de São Paulo.</p>
			<p>3.3.2.	A CONTRATADA deverá permitir acesso às suas instalações e conexões aos seus equipamentos de atendimento, caso seja necessário, para que sejam instalados recursos de tecnologia voltados à solução de redirecionamento a ser definida pela CONTRATANTE.</p>
			<p>3.3.3.	O Distribuidor Automático de Chamadas (DAC) deverá possuir as seguintes configurações mínimas:</p>
				<p class="s2">3.3.3.1.	Interface de música em espera;</p>
				<p class="s2">3.3.3.2.	Módulo de integração com a URA, com quantidade de portas dedicadas suficientes para prestação de serviços;</p>
				<p class="s2">3.3.3.3.	Recursos para integração com a Solução de Atendimento, a ser fornecida pela CONTRATANTE;</p>
				<p class="s2">3.3.3.4.	Possuir comunicação de voz e dados via o protocolo IP (Internet Protocolo);</p>
				<p class="s2">3.3.3.5.	Arquitetura recorrente e tolerante a falhas;</p>
				<p class="s2">3.3.3.6.	Recursos duplicados para garantia de alta disponibilidade;</p>
				<p class="s2">3.3.3.7.	Suportar a quantidade dimensionada de atendentes sem a necessidade de troca de plataforma, por turno de trabalho;</p>
				<p class="s2">3.3.3.8.	Possibilitar que o atendimento digite códigos de motivo no aparelho para identificar eventos ocorridos durante sua operação de trabalho;</p>
				<p class="s2">3.3.3.9.	Ter capacidade de calcular o tempo que uma chamada “está” ou “permanecerá” em fila e externar por meio de voz ao munícipe;</p>
				<p class="s2">3.3.3.10.	Ter capacidade de rotear uma ligação, com na base na especialidade do atendente / ilha de atendimento, em prioridade e em diferentes níveis;</p>
				<p class="s2">3.3.3.11.	Ter capacidade de utilizar o tempo médio de espera estimado e a velocidade média de atendimento para poder tomar decisão de roteamento;</p>
				<p class="s2">3.3.3.12.	Permitir que a linha telefônica seja automaticamente liberada, quando o interlocutor desligar antecipadamente, ou quando houver queda de ligação ou quando a consulta terminar;</p>
				<p class="s2">3.3.3.13.	Permitir decisão de distribuição das chamadas baseada no tempo previsto para atendimento do próximo recurso disponível, ponderando as metas de nível de serviço;</p>
				<p class="s2">3.3.3.14.	Deve possuir recursos para alocação de agentes reservas de forma dinâmica e automática em função do tempo de espera em fila;</p>
				<p class="s2">3.3.3.15.	Deve possuir recursos para que permitam ao operador recuperar, automaticamente, as informações já fornecidas pelo munícipe, bem como identificar as opções por ele acessadas;</p>
				<p class="s2">3.3.3.16.	Implementar funções CTI para integração com sistemas de informação da CONTRATADA;</p>
				<p class="s2">3.3.3.17.	Possibilitar que o operador digite códigos de motivos no aparelho para identificar eventos ocorridos durante uma chamada.</p>
				<p class="s2">3.3.3.18.	Permitir a visualização no display do terminal de voz, informações do seu grupo: tamanho da fila, tempo em fila, chamadas em DAC, chamadas abandonadas, nível de serviço e informações sobre os atendentes: quantidades de atendentes livres, em atendimento, em pausa e pós-atendimento.</p>
				<p class="s2">3.3.3.19.	Deverá estar integrado ao PABX/IP de forma a compartilhar o entroncamento desta com o Sistema Telefônico Fixo Comutado (STFC).</p>
				<p class="s2">3.3.3.20.	A chamada deverá ser roteada através de critérios como o dia da semana, a(s) hora(s) de um dia ou para um determinado grupo de operadores de teleatendimento, bem como pela identificação da origem da chamada (região ou número), inclusive para dias não úteis.</p>
				<p class="s2">3.3.3.21.	O DAC deverá apresentar os processos de supervisão e relatórios de forma on-line, em tempo real e histórica, sendo que os dados históricos do sistema deverão ser armazenados em um banco de dados, o qual deverá ser externo ao equipamento.</p>
				<p class="s2">3.3.3.22.	Deverá transferir chamadas para as PA´s segundo um algoritmo que evite a sobrecarga das mesmas e minimize o tempo de espera do atendimento.</p>
				<p class="s2">3.3.3.23.	Deverá permitir a formação de até 1.000 grupos de PA, sendo que cada grupo pode atender a um ou mais números de acesso distintos.</p>
				<p class="s2">3.3.3.24.	Deverá permitir a configuração de, pelo menos, 100 números de acessos distintos (0800, 0300, etc.).</p>
				<p class="s2">3.3.3.25.	Deverá ser possível a criação de grupos de transbordo, responsáveis pelo atendimento de chamadas destinadas a outros grupos, no caso destes estarem sobrecarregados.</p>
				<p class="s2">3.3.3.26.	O equipamento deverá permitir transparência total na operação de ramais e nas operações que são peculiares as centrais de relacionamentos, possibilitando assim a utilização de todos os recursos e facilidades do PABX dentro do DAC.</p>
				<p class="s2">3.3.3.27.	O sistema deverá possuir um algoritmo para distribuição automática das chamadas com base no tempo livre, ou seja, considera-se que a próxima PA a ser alocada deverá ser a PA com maior tempo livre desde seu último atendimento.</p>
				<p class="s2">3.3.3.28.	Possuir a facilidade de “echo”, que faz ecoar os dígitos enviados pelos clientes sob a forma de sinais sonoros.</p>
				<p class="s2">3.3.3.29.	Permitir a localização e repasse de dados recuperados em sistemas de informações externos ao sistema de teleatendimento, a partir da identificação do número de telefone de origem e parâmetros digitados pelo cliente, para as posições de atendimento, através de protocolo TCP/IP.</p>
				<p class="s2">3.3.3.30.	Permitir a transferência da preferência de atendimento das PA´s para a URA, através de dispositivo eletrônico (hardware e software), programado e disponível para os operadores.</p>
				<p class="s2">3.3.3.31.	Possibilitar que os supervisores realizem a programação de horários de atendimento, por posição, bloqueios e liberação de operadores de teleatendimento por interação na tela de administração do supervisor, através de clicks do mouse.</p>
				<p class="s2">3.3.3.32.	Permitir a indicação da ausência do Operador de teleatendimento na posição de atendimento.</p>
				<p class="s2">3.3.3.33.	Permitir que a linha telefônica seja liberada automaticamente quando o cidadão desligar antecipadamente, quando houver queda de ligação ou terminar a consulta.</p>
				<p class="s2">3.3.3.34.	A solução deverá reservar recurso PA antes da geração da chamada, buscando garantir a conversação por parte da PA na chamada gerada.</p>
				<p class="s2">3.3.3.35.	Deverá ser possível a emissão de modelos de relatórios da campanha efetuada no DAC.</p>
				<p class="s2">3.3.3.36.	Deverá ser disponibilizada uma interface amigável, para possibilitar o acompanhamento das campanhas pela supervisora do DAC, em ambiente WEB.</p>
				<p class="s2">3.3.3.37.	O atendimento deverá registrar as demandas dos cidadãos com base em informações e roteiros padronizados disponíveis em sistema específico fornecido pela CONTRATANTE.</p>
				
			<Comments :attr="{id:commentId(), context:'3.3.	DAC - DISTRIBUIDOR AUTOMÁTICO DE CHAMADA'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>3.4.	CTI – “Computer Telephony Integration” – Sistema Integrado de Telefonia e Computação.</h3>
			<p>3.4.1.	A plataforma de voz DAC deverá ter integração, por meio de CTI, suportando aplicações externas, tais como:</p>
				<p class="s2">3.4.1.1.	Discador;</p>
				<p class="s2">3.4.1.2.	Gravador;</p>
				<p class="s2">3.4.1.3.	URA;</p>
				<p class="s2">3.4.1.4.	Sistema de Gestão do Atendimento, fornecido pela CONTRATANTE.</p>
			<p>3.4.2.	Toda a comunicação interna da Central de Atendimento será via VOIP.</p>
			<p>3.4.3.	A plataforma deve ser aberta para integração com outros equipamentos através de diversos protocolos de comunicação como CSTA, TAPI, TSAPI, JTAPI, ASAI.</p>
			<p>3.4.4.	O recurso CTI será utilizado para viabilizar as funcionalidades de “Screen Pop Up” na tela dos operadores, acessando base de dados.</p>
			<p>3.4.5.	A solução deverá permitir contingência automática da aplicação.</p>
			<p>3.4.6.	A solução deverá permitir interação total das funcionalidades de telefonia na tela do computador.</p>
			<p>3.4.7.	A solução deverá permitir a transferência de tela e voz, de maneira a garantir que em caso de transferência do atendimento, o munícipe não precise repetir informações já mencionadas naquele atendimento.</p>
			<p>3.4.8.	A solução deverá permitir transferência de chamada de um atendente diretamente para uma opção dentro da árvore da URA.</p>
			<p>3.4.9.	A solução deverá permitir a geração automática de um novo protocolo após o encerramento de um atendimento e o início de um novo procedimento.</p>
					
				<Comments :attr="{id:commentId(), context:'3.4.	CTI – “Computer Telephony Integration” – Sistema Integrado de Telefonia e Computação.'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>3.5.	Sistema de Gravação Digital de Voz e Telas</h3>
			<p>3.5.1.	O sistema deverá gerar a gravação, para fins de auditoria da qualidade do serviço prestado e para conferência de dados das fichas de manifestações, da totalidade das ligações recebidas e efetuadas pelos operadores, mesmo se houver intercalação ou transferência da mesma para outro operador ou supervisor, possibilitando recuperação através de busca por assunto, número de telefone, nome do usuário, nome do operador, data e hora e nº do protocolo.</p>
			<p>3.5.2.	O sistema de gravação não deverá permitir que a gravação seja interrompida pelo atendente.</p>
			<p>3.5.3.	O sistema deve possuir a capacidade de armazenamento de 90 dias de gravações de voz com acesso “on-line” para resgate imediato quando necessário. Deverão estar disponibilizados filtros de pesquisa para o resgate de gravações, como:</p>
				<p class="s2">3.5.3.1.	Período inicial (considerando parâmetros de data e hora)</p>
				<p class="s2">3.5.3.2.	Período final (considerando parâmetros de data e hora)</p>
				<p class="s2">3.5.3.3.	Serviço</p>
				<p class="s2">3.5.3.4.	Operador</p>
				<p class="s2">3.5.3.5.	Campanhas</p>
				<p class="s2">3.5.3.6.	Telefone (considerando parâmetros parciais ou completos do DDD, NÚMERO) </p>
				<p class="s2">3.5.3.7.	Número do atendimento</p>
				<p class="s2">3.5.3.8.	Palavras-chave</p>
			<p>3.5.4.	O acesso ao sistema de gravação, para resgates dos áudios e vídeos,  deverá ser realizado por meio de senhas pessoais.</p>
			<p>3.5.5.	Todas as gravações de áudio e vídeo deverão ser geradas em arquivo compatível com qualquer reprodutor padrão com as seguintes extensões: </p>
				<p class="s2">3.5.5.1.	Para áudio: mp3, ogg, wav ou wma.</p>
				<p class="s2">3.5.5.2.	Para vídeo: avi, mp4, mpg ou mpeg</p>
			<p>3.5.6.	Todas as gravações dos áudios e dos vídeos devem ser armazenadas como backup, a partir da data de recebimento da ligação, pelo período de duração do contrato.</p>
			<p>3.5.7.	Todas as gravações devem ser armazenadas e disponibilizadas em ambiente de nuvem da CONTRATADA, pelo tempo de duração do contrato.</p>
			<p>3.5.8.	Ao final da vigência do contrato, o conteúdo armazenado deverá ser entregue em sua totalidade à CONTRATANTE.</p>
			<p>3.5.9.	Após solicitado à CONTRATADA, o resgate de gravações deve ser realizada conforme segue:</p>
			<p class="s2">3.5.9.1.	Em até 60 minutos sob demanda limitada a 10 ligações ocorridas em um prazo de até 60 dias anteriores à data da solicitação.</p>
			<p class="s2">3.5.9.2.	Em 1 dia útil para ligações ocorridas em um prazo entre 60 e 180 dias</p>
			<p class="s2">3.5.9.3.	Em 2 dias úteis após 180 dias, limitado a 365 dias. </p>
			<p class="s2">3.5.9.4.	Após o período de 365 dias a recuperação se dará em 3 dias úteis.</p>
					
			<Comments :attr="{id:commentId(), context:'subtitulo'}" v-if="estaConsulta.ativo = 1"></Comments>

			<h3>3.6.	Sistema Integrado de Monitoramento da Operação da Central de Atendimento</h3>
			<p>3.6.1.	O Sistema deverá permitir acompanhamento 24 horas em tempo real da Operação da Central de Atendimento (Ligações Entregues na Central de Atendimento).</p>
			<p>3.6.2.	O Sistema deverá permitir acompanhamento 24 horas em tempo real da operação da central para ligações realizadas originárias de campanhas ativas diversas pela Central de Atendimento. </p>
			<p>3.6.3.	Deverá ter conexão simples com os operadores (tela pop up). </p>
			<p>3.6.4.	Deverá ter flexibilidade na importação do Mailing. </p>
			<p>3.6.5.	Deverá ter suporte via internet e em tempo real.</p>
			<p>3.6.6.	Deverá ter feedback imediato: monitoramento em tempo real e alertas personalizados que permitam aos gerentes detectar os problemas e responder de forma imediata.</p>
			<p>3.6.7.	Deverá possuir recursos em tempo real para monitoramento e extração de relatórios dos mailings.</p>
			<p>3.6.8.	Deverão ser disponibilizadas as licenças necessárias para atender a quantidade de posições estabelecidas para operadores.</p>
			<p>3.6.9.	Deverão ser disponibilizadas as licenças necessárias para atender a quantidade de posições estabelecidas para supervisores.</p>
			<p>3.6.10.	Deve possuir recursos para o controle da Central oferecendo recursos avançados de gerenciamento das chamadas de entrada e saída.</p>
			<p>3.6.11.	O sistema deve permitir ampliação de no mínimo 30% (trinta por cento) da capacidade de posições de atendimento.</p>
			<p>3.6.12.	Possibilitar que a supervisão monitore em tempo real a situação de cada operador e da fila de espera.</p>
				
			<Comments :attr="{id:commentId(), context:'3.6.	Sistema Integrado de Monitoramento da Operação da Central de Atendimento'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>3.7.	Segurança para ambiente de rede do Contact Center</h3>
			<p>3.7.1.	“Firewall” – Sistema de Proteção contra Acesso não Autorizado a uma Rede</p>
				<p class="s2">3.7.1.1.	É necessário que haja soluções de “firewall” em todas as regiões de fronteira da rede de comunicação da empresa CONTRATADA destinada ao atendimento da CONTRATANTE, sempre que existirem interfaces de comunicação, transmissão e transferência de dados.</p>
				<p class="s2">3.7.1.2.	Devem ter disponibilidade igual ou maior que a disponibilidade do serviço de comunicação WAN contratado.</p>
				<p class="s2">3.7.1.3.	Devem conter a característica de restrições, onde tudo que não for expressamente permitido será bloqueado.</p>
				<p class="s2">3.7.1.4.	Todas as configurações relacionadas aos recursos e regras das soluções de “firewall”, referentes às conexões com a CONTRATANTE, devem ser rigorosa e formalmente documentadas, atualizadas e estar disponíveis à CONTRATANTE, quando esta solicitar.</p>
				<p class="s2">3.7.1.5.	Todas as alterações necessárias, regulares ou extraordinárias, das configurações de regras e recursos das soluções de “firewall”, referentes às conexões da Prefeitura do Município de São Paulo devem ser submetidas formalmente à CONTRATANTE, com a devida justificativa, para a análise técnica e aprovação ou veto.</p>
				<p class="s2">3.7.1.6.	A solução de “firewall”, em todas as fronteiras, deve gerar “logs” (registros de atividades da rede), administrativos do próprio produto e também do tráfego por ele inspecionado, que serão fornecidos ao corpo técnico da CONTRATANTE quando por ele solicitado.</p>
				<p class="s2">3.7.1.7.	As atividades de instalação, atualização, suporte e manutenção serão de responsabilidade da CONTRATADA.</p>
			<p>3.7.2.	IPS - Sistema de Prevenção de Intrusão</p>
				<p class="s2">3.7.2.1.	Deve fazer parte dos recursos de segurança, uma solução de IPS, instaladas de forma “in line” (toda a passagem entre o início e o final de cada processo) atrás do equipamento de conexão, com capacidade de análise profunda de pacotes “deep inspection” (inspeção interna) e de forma bidirecional.</p>
				<p class="s2">3.7.2.2.	A solução de IPS pode estar integrada à solução de “firewall” apresentada.</p>
			<p>3.7.3.	Antivírus</p>
				<p class="s2">3.7.3.1.	A solução de antivírus deve ser capaz de detectar e remover vírus como, “Cavalos de Tróia”, “Worms” e ameaças correlatas na passagem dos pacotes entre a CONTRATADA e a CONTRATANTE.</p>
				<p class="s2">3.7.3.2.	A solução de antivírus deve possuir antivírus de “gateway” bidirecional.</p>
				<p class="s2">3.7.3.3.	A solução de antivírus deve ter disponibilidade igual ou maior que a disponibilidade do serviço contratado.</p>
				<p class="s2">3.7.3.4.	As atualizações das versões dos programas de antivírus devem ocorrer automaticamente para todos os equipamentos que compõem o ambiente computacional disponibilizado.</p>
			<p>3.7.4.	Segurança da Conexão</p>
				<p class="s2">3.7.4.1.	As conexões com a CONTRATANTE deverão possuir mecanismos de segurança para prover os serviços de forma que os dados obtidos da CONTRATANTE estejam protegidos de acesso de terceiros – mecanismos estes atualizados pro ativamente de acordo com as tecnologias de última geração existentes no mercado.</p>
				<p class="s2">3.7.4.2.	A CONTRATANTE deverá ter acesso a estes mecanismos e seus equipamentos a fim de validar a sua configuração a qualquer momento, com prévio aviso de 24 horas.</p>
			<p>3.7.5.	Segurança de Acesso</p>
				<p class="s2">3.7.5.1.	Os acessos externos, se necessários, serão somente aos “sites” autorizados pela CONTRATANTE.</p>
			<p>3.7.6.	Auditoria Técnica em Segurança e Auditoria de Qualidade</p>
				<p class="s2">3.7.6.1.	A CONTRATADA deverá permitir à CONTRATANTE acesso irrestrito local ou remoto aos sistemas da mesma, assim como a todo e qualquer hardware e software utilizados para a prestação dos serviços para fins de auditoria em segurança e/ou de qualidade, com aviso prévio de 24 horas.</p>
				<p class="s2">3.7.6.2.	As auditorias serão efetuadas pela CONTRATANTE, a qualquer momento, com prévio aviso à CONTRATADA.</p>
				<p class="s2">3.7.6.3.	A CONTRATANTE definirá a empresa a prestar o serviço de auditoria, se optar por não o fazer ela própria.</p>
				<p class="s2">3.7.6.4.	A CONTRATADA deve possuir softwares e demais recursos que permitam fazer o tratamento dos logs em computadores e equipamentos de rede sempre que solicitado pelo corpo técnico da CONTRATANTE, de maneira a produzir os relatórios que se façam necessários, inclusive os de nível gerencial, sobre a segurança do ambiente e a qualidade dos serviços prestados.</p>
			<p>3.7.7.	Comunicação de Dados</p>
				<p class="s2">3.7.7.1.	A comunicação de dados deverá ocorrer através de LINK para uso exclusivo entre a fornecedora da solução de atendimento da Prefeitura do Município de de São Paulo e a CONTRATADA.</p>
				<p class="s2">3.7.7.2.	A comunicação de dados será disponibilizada pela CONTRATADA, sendo esta inteiramente responsável pela sua disponibilidade.</p>
				<p class="s2">3.7.7.3.	A comunicação de dados entre a CONTRATADA e a CONTRATANTE será realizada por links de comunicação com dupla abordagem (com redundância crítica e por meios físicos diferenciados).</p>
				<p class="s2">3.7.7.4.	O link de interligação da rede da CONTRATADA com a rede da Prefeitura do Município de São Paulo deverá ser dimensionado com velocidade (largura de banda) compatível com as tecnologias utilizadas, suportar expansão para novas tecnologias, além de suportar o número de conexões e acessos simultâneos necessários para atender às funcionalidades das demandas, ou seja, de modo a apresentar desempenho condizente com a necessidade para atendimento e prestação dos serviços objeto da contratação.</p>
				<p class="s2">3.7.7.5.	Caso haja alteração de endereço do estabelecimento, a movimentação dos links será de responsabilidade da CONTRATADA, sem qualquer ônus para a CONTRATANTE.</p>
				<p class="s2">3.7.7.6.	Ficará sob responsabilidade da CONTRATADA a disponibilização de infraestrutura interna e externa ao seu ambiente, necessária para as instalações dos recursos “WAN” - Wide Área Network, compreendidos por conexão do meio físico contratado, que poderá ser por par metálico, fibra ótica, rádio ou tecnologia diversa devidamente homologada pelo órgãos reguladores, como ANATEL.</p>
				<p class="s2">3.7.7.7.	A CONTRATADA deverá disponibilizar acesso remoto ao sistema, a todos os relatórios diários e mensais, a todos os equipamentos e serviços necessários para os referidos serviços de acesso, incluindo roteadores, gerência do serviço etc.</p>
				<p class="s2">3.7.7.8.	A CONTRATADA deverá disponibilizar acomodação e alimentação elétrica para todos os equipamentos envolvidos, tais como “modems”, roteadores etc. em sala com acesso restrito e infraestrutura elétrica estabilizada através de rede coberta por “nobreak”.</p>
				<p class="s2">3.7.7.9.	A CONTRATADA deverá fornecer a infraestrutura interna necessária para interligação dos links (roteadores e firewalls).</p>
				<p class="s2">3.7.7.10.	Será de total responsabilidade da CONTRATADA manter a infraestrutura atualizada tecnologicamente, no que diz respeito a hardwares e softwares utilizados para a conectividade, devendo arcar com todos os eventuais custos com a atualização e/ou upgrade.</p>
				<p class="s2">3.7.7.11.	Em caso de alteração de quaisquer tecnologias utilizadas pela Prefeitura do Município de São Paulo, a CONTRATADA será notificada de que terá 30 (trinta) dias corridos para se adequar e manter os mesmos níveis de serviços.</p>
				<p class="s2">3.7.7.12.	A CONTRATADA deverá prover a Política de Segurança na conexão interna da sua rede conectada com a CONTRATANTE, seguindo os padrões estabelecidos pela Prefeitura do Município de São Paulo.</p>
				
			<Comments :attr="{id:commentId(), context:'3.7.	Segurança para ambiente de rede do Contact Center'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>3.8.	Equipamentos (hardware)</h3>
			<p>3.8.1.	Toda solução de servidores e demais equipamentos de Rede para operação do Contact Center será de responsabilidade da CONTRATADA, de acordo com a melhor solução proposta, bem como toda infraestrutura necessária para cumprir os níveis de disponibilidade estipulados no ANS, bem como atender ao dimensionamento.</p>
				
			<Comments :attr="{id:commentId(), context:'3.8.	Equipamentos (hardware)'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>3.9.	Infraestrutura Física</h3>
			<p>3.9.1.	A CONTRATADA será responsável por todas as instalações físicas e estrutura necessárias à prestação dos serviços contratados</p>
			<p>3.9.2.	O local de operação de teleatendimento deverá estar adequado à dimensão da operação, atendendo à NR-17 do Ministério do Trabalho e Emprego, à NBR 9050:2004 e à NBR 15599:2008 da ABNT.</p>
				<p class="s2">3.9.2.1.	As salas de Treinamento deverão ter capacidade para no máximo 30 (trinta) pessoas e estarem adequadamente mobiliadas.</p>
				<p class="s2">3.9.2.2.	A CONTRATADA deverá disponibilizar à CONTRATANTE, na Central de Atendimento, sala adequada para receber uma equipe de profissionais da CONTRATANTE para monitoramento das atividades da Central de Atendimento “in loco”, com no mínimo três posições de trabalho devidamente mobiliada, com três telefones e três computadores para acomodar seus representantes, com vistas ao acompanhamento e fiscalização dos serviços prestados.</p>
				<p class="s2">3.9.2.3.	Todos os ambientes e instalações físicas disponibilizados pela CONTRATADA deverão atender às normas de acessibilidade do Decreto Federal nº 5.296, de 2 de dezembro de 2004, à NBR 9050:2004 , à NBR 15599:2008.</p>
				<p class="s2">3.9.2.4.	As instalações da Central de Atendimento e as instalações prevista no “Plano de Contingência” das centrais de atendimento 156, 199 e 153 também deverão atender aos dispositivos da legislação em vigor no Brasil, em especial às Normas NBR 5.413 (Iluminância), NBR 6.401 (Filtros e Ar Condicionado), NBR 13.962 (Cadeiras), NBR 10.152 (Níveis de ruído), NBR 15.141 (Divisórias tipo piso-teto), NBR 13.967 (Sistemas de estação de trabalho), NBR 13.966 (Mesas), NBR 13.965 (Móveis para informática) e NBR 13.964 (Divisórias tipo painel), bem como às orientações da NR5 (CIPA), NR6 (EPI), NR7 (PCMSO), NR9 (PPRA), NR17 (Ergonomia) com seu Anexo II (Trabalho em Teleatendimento/Telemarketing), NR23 (Proteção contra Incêndio), NR24 (Condições Sanitárias e de Conforto no Local de Trabalho), NR26 (Sinalização de Segurança) e NR27 (Registro Profissional do Técnico de Segurança do Trabalho).</p>
				<p class="s2">3.9.2.5.	A CONTRATADA deverá apresentar o Alvará do Corpo de Bombeiros dentro da validade. Isso se aplicará tanto para a Instalação da Central de Atendimento quanto para a instalação contingencial.</p>
				<p class="s2">3.9.2.6.	Os Recursos de Contingência serão objeto de auditoria antes mesmo da assinatura do contrato. O não atendimento a quaisquer dispositivos acarretará em desclassificação da empresa do processo licitatório, sendo a segunda colocada chamada para assumir o contrato, após a mesma averiguação.</p>

				
			<Comments :attr="{id:commentId(), context:'3.9.	Infraestrutura Física'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>3.10.	Sistema de Gestão de Atendimento</h3>
			<p>3.10.1.	A Prefeitura do Munícipio de São Paulo disponibilizará uma solução de atendimento ao cidadão que deverá ser utilizada por todos os operadores do CONTACT CENTER (telefonia, chat e redes sociais se houver), para acolhimento de todas as solicitações registradas para a Prefeitura pelos canais 156, 199 e 153.</p>
			<p>3.10.2.	Esta solução de atendimento deve ser integrada - via Computer Telephony Integration (CTI) - ao Distribuidor Automático de Chamadas (item 3.3) e à Unidade de Resposta Audível (item 3.2) </p>
			<p>3.10.3.	<u>A solução a ser disponibilizada será apresentada em momento oportuno após finalização do processo licitatório de contratação da solução de atendimento ao cidadão, onde será publicado no Diário Oficial do Município o número do Edital correspondente.</u></p>
				
			<Comments :attr="{id:commentId(), context:'3.10.	Sistema de Gestão de Atendimento'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>3.11.	Disparo Eletrônico de Mensagens de Texto Tipo SMS</h3>
			<p>3.11.1.	A CONTRATADA deverá disponibilizar o serviço “Disparo Eletrônico de Mensagens de Texto”, para envio de mensagens do tipo SMS para os telefones móveis cadastrados na base de dados da PMSP, utilizando plataforma automática, de sua responsabilidade.</p>
				<p class="s2">3.11.1.1. O histórico e a volumetria das mensagens enviadas por SMS no âmbito da Central de Atendimento atual está representada no <strong>ANEXO IV</strong> - HISTÓRICO DE VOLUMETRIA DE ENVIO DE SMS.</p>
			<p>3.11.2.	A mensagem deverá ser gravada em um arquivo texto. Sendo assim, a mensagem deverá ser redigida, sempre mediante a solicitação prévia, com conteúdos exclusivamente fornecidos pela CONTRATANTE.</p>
			<p>3.11.3.	A CONTRATADA deverá manter sempre o sigilo absoluto de todas e quaisquer informações prestadas pela CONTRATANTE.</p>
			<p>3.11.4.	A CONTRATADA deverá efetuar até 3 (três) tentativas de envio para um mesmo número de telefone, salvo quando definido de forma distinta pela CONTRATANTE.</p>
			<p>3.11.5.	A CONTRATADA também deverá disponibilizar recursos para extração de relatórios de todas as mensagens SMS enviadas com seus respectivos retornos.</p>
			<p>3.11.6.	O serviço de disparo eletrônico poderá ser alimentado por informações gravadas em arquivos de “formato texto”, com padrão ASCII e com layout definido.</p>
			<p>3.11.7.	A CONTRATADA deverá disponibilizar APIs com funcionalidades para o disparo de SMS que poderão ser consumidas pela CONTRATANTE permitindo desta forma, uma melhor integração entre sistemas.</p>
			<p>3.11.8.	As mensagens deverão ser disparadas sempre que houver campanhas institucionais, mediante solicitação da CONTRATANTE.</p>
			<p>3.11.9.	O solução de gerenciamento de SMS deverá possibilitar o registro, em banco de dados, de todas as informações acerca das campanhas solicitadas, para recuperação por meio de consultas e relatórios de gestão de mensagem, disponibilizados em tempo real, 24 por 7.</p>
			<p>3.11.10.	As informações que devem ser registradas e que serão utilizadas para estruturação de relatórios são: órgão emissor, identificador da solicitação, data e hora da emissão da solicitação, data e hora agendada para envio à operadora e informações de metadados cada uma das mensagens incluindo:
				<p class="s2">3.11.10.1.	Identificador da mensagem; </p>
				<p class="s2">3.11.10.2.	Telefone do destinatário; </p>
				<p class="s2">3.11.10.3.	Prazo máximo para envio; </p>
				<p class="s2">3.11.10.4.	Status da solicitação; </p>
				<p class="s2">3.11.10.5.	Data e horário de envio à operadora.</p>
			</p>
			<p>3.11.11. O sistema integrador para envio de SMS e gerenciamento dos serviços será hospedado no ambiente da CONTRATADA.</p>
			<p>3.11.12. O sistema deve ter disponibilidade 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana.</p>
			<p>3.11.13. Confidencialidade
				<p class="s2">3.11.13.1. Todas as informações que forem transmitidas à CONTRATADA ou produzidas por esta com base nas informações recebidas devem ser consideradas protegidas como informações confidenciais por um período indeterminado, exceto se antes da divulgação for esclarecido não se tratarem de informações confidenciais ou estejam disponíveis ao público por outros meios.</p>
				<p class="s2">3.11.13.2. Quaisquer informações confidenciais devem ser usadas pela CONTRATADA tão somente com o propósito para o qual estas informações foram divulgadas, exceto nos casos de determinação judicial ou expressa disposição prevista em lei.</p>
				<p class="s2">3.11.13.3. A Contratada formalizará termos de confidencialidade com todos os seus empregados e fornecedores que tiverem acesso às informações confidenciais, em igual teor de suas obrigações.</p>
			</p>
				
			<Comments :attr="{id:commentId(), context:'3.11.	Disparo Eletrônico de Mensagens de Texto Tipo SMS'}" v-if="estaConsulta.ativo == 1"></Comments>
			<h3>3.12.	Plano de Contingência da Central de Atendimento </h3>
			<p>3.12.1.	Sistemas e Equipamentos</p>
				<p class="s2">3.12.1.1.	A CONTRATADA deverá se responsabilizar por manter a redundância e disponibilidade necessária para atender aos Níveis de Serviço de todos os equipamentos, tais como: Equipamentos de Rede e Comunicação, Desktop, Servidores, equipamentos de telefonia, etc., que atendem a Central de Atendimento 156, 199 ou 153.</p>
				<p class="s2">3.12.1.2.	Deverá manter a redundância e disponibilidade necessária para atender os Níveis de Serviço de todos os equipamentos, tais como: equipamentos de Rede e Comunicação, Desktop, Servidores, equipamentos de telefonia, etc., que atendem as centrais  156, 199 ou 153.</p>
				<p class="s2">3.12.1.3.	Todos os sistemas e equipamentos de telefonia e informática utilizados para atender o Município deverão estar contemplados pelos seguintes recursos mínimos:</p>
					<p class="s3">3.12.1.3.1.	“Nobreak” / Baterias com autonomia de no mínimo 03 (três) horas em caso de queda de energia elétrica para todo o sistema de telefonia.</p>
					<p class="s3">3.12.1.3.2.	“Nobreak” / Baterias com autonomia de no mínimo 30 (trinta) minutos em caso de queda de energia elétrica para todo o sistema de informática.</p>
					<p class="s3">3.12.1.3.3.	Gerador de energia elétrica com partida automática e autonomia de no mínimo de 24 (vinte e quatro) horas em caso de queda de energia elétrica para todo o sistema de informática e telefonia, mantendo as centrais  156, 199 e 153 operantes.</p>
				<p class="s2">3.12.1.4.	A CONTRATADA deverá manter cópias de segurança “BackUp” interna e externa, de todas as informações registradas em razão dos atendimentos realizados.</p>
			<p>3.12.2.	Pessoal</p>
				<p class="s2">3.12.2.1.	A CONTRATADA deve contemplar em seu ”Plano de Contingência” a possibilidade de casos de greves, problemas de transporte e outros eventos que possam afetar o conjunto dos recursos humanos da prestação de serviços à CONTRATANTE, de modo a garantir o cumprimento dos índices de qualidade estabelecidos pelo Acordo de Níveis de Serviços.</p>
				<p class="s2">3.12.2.2.	Disponibilizar e manter “Plano de Contingência” visando o rápido deslocamento dos funcionários e mínimo impacto no atendimento em casos de necessidade de deslocamento que preveja deslocamentos de recursos humanos, respeitados os limites do município de São Paulo. </p>
			<p>3.12.3.	Predial</p>
				<p class="s2">3.12.3.1.	A estrutura do Plano de Contingência deve suportar pelo menos 50% (cinquenta por cento) do volume de chamadas ativas e receptivas previstas neste edital. </p>
				<p class="s2">3.12.3.2.	Em caso de necessidade de utilização do Plano de Contingência, os atendentes envolvidos no Plano deverão atuar exclusivamente para Prefeitura de São Paulo.</p>
				<p class="s2">3.12.3.3.	Em casos de incêndio, enchentes e outros sinistros que comprometam as instalações, inviabilizando a continuidade da prestação de serviço, a CONTRATADA deverá dispor de local alternativo previsto no “Plano de Contingência” que seja apropriado para retomar a operação, sem ônus para a CONTRATANTE.</p>
					<p class="s3">3.12.3.3.1.	No período máximo de 2 (duas) horas atender um percentual mínimo de 25% (vinte e cinco por cento) das chamadas receptivas e ativas;</p>
					<p class="s3">3.12.3.3.2.	No período compreendido entre 2 (duas) e 72 (setenta e duas) horas atender um percentual mínimo de 50% (cinquenta por cento) das chamadas receptivas e ativas;</p>
					<p class="s3">3.12.3.3.3.	Após 72 (setenta e duas) horas corridas, atender o percentual de 100% das chamadas receptivas e ativas.</p>
			<p>3.12.4.	Data Center</p>
				<p class="s2">3.12.4.1.	O Data Center de Contingência deve estar localizado no município de São Paulo. </p>
					<p class="s3">3.12.4.1.1.	O Data Center de contingência não pode estar localizado no endereço principal da operação da central de atendimento,</p>
				<p class="s2">3.12.4.2.	O Data Center de Contingência deve suportar pelo menos 50% (cinquenta por cento) da operação do Contact Center, com as mesmas soluções e ANS (SLA) de disponibilidade do Data Center Principal.</p>
			<p>3.12.5.	Telecomunicações</p>
				<p class="s2">3.12.5.1.	Disponibilizar e manter a infraestrutura de telecomunicações, incluindo URA – Unidade de Resposta Audível, CTI – Computer Telephony Integration, DAC – Distribuidor Automático de Chamadas, Ramal, sistemas de gravação e licenças necessárias.</p>
				
			<Comments :attr="{id:commentId(), context:'3.12.	Plano de Contingência da Central de Atendimento '}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">4.	Especificação dos serviços</h2>
			<h3>4.1.	Implantação do Canal de Atendimento – Contact Center</h3>
			<p>4.1.1.	São responsabilidades da CONTRATADA</p>
				<p class="s2">4.1.1.1.	Disponibilizar e manter espaço físico em local próprio situado dentro dos limites da cidade de São Paulo que comporte a operação do Contact Center durante o período de contrato (“Instalação da Central de Atendimento”)</p>
				<p class="s2">4.1.1.2.	Apresentar Plano de Contingência executável quando do impedimento do funcionamento da Instalação da Central de Atendimento, capaz de suportar 50% do volume de chamadas ativas e receptivas previstas neste edital em site no município de São Paulo. Em caso de necessidade de utilização do Plano de Contingência, os atendentes envolvidos no Plano deverão atuar exclusivamente para Prefeitura de São Paulo.</p>
				<p class="s2">4.1.1.3.	Disponibilizar e manter a infraestrutura tecnológica para suportar a operação do Contact Center</p>
				<p class="s2">4.1.1.4.	A CONTRATADA deverá disponibilizar os recursos e esforços, humanos e tecnológicos, necessários para promover a integração dos recursos de atendimento eletrônico, quer sejam: URA, DAC ou CTI, que forem responsáveis pela geração de protocolos de atendimento, ao Sistema de Gestão de Atendimento que será disponibilizado pela CONTRATANTE, conforme item 3.10.1.</p>

				
			<Comments :attr="{id:commentId(), context:'subtitulo'}" v-if="estaConsulta.ativo == 1"></Comments>
			<h3>4.2.	Serviços de Operação do Atendimento</h3>
			<p>4.2.1.	O Serviço de Operação do Atendimento ao munícipe, por meio dos número telefônicos 156, 199 e 153 compreende a utilização de recursos eletrônicos (unidade de resposta audível – URA) e humanos.</p>
			<p>4.2.2.	A estrutura de árvore de voz da URA será feito em conjunto pela CONTRATADA e a equipe da Prefeitura do Município de São Paulo.</p>
			<p>4.2.3.	A(s) URA(s) devem contemplar a possibilidade de, em horários determinados pela CONTRATANTE, ser(em) ajustada(s) para possuir menos opções, agilizando o atendimento ao munícipe</p>
			<p>4.2.4.	Todos os atendimentos relacionados aos diversos serviços pertinentes aos número telefônicos 156, 199 e 153 serão realizados inicialmente pela Unidade de Resposta Audível (URA) e, se for necessário, direcionados para um operador (atendimento humano receptivo), por meio de menu interativo acionado pelo usuário.</p>
			<p class="s2">4.2.4.1.	No caso de URA inoperante, por qualquer motivo, a ligação deverá ser transferida para o atendimento humano imediatamente, até que o problema seja sanado e o atendimento eletrônico normalizado.</p>
			<p class="s2">4.2.4.2.	A(s) URA(s) devem contemplar a possibilidade de que informações e/ou solicitações possam ser transmitidas e/ou abertas sem necessidade de direcionamento para um operador (atendimento humano receptivo).</p>
			<p class="s3">4.2.4.2.1.	Esta atividade pode gerar a necessidade de integração entre sistemas, recursos e esforços, humanos e tecnológicos, com custo de desenvolvimento sob responsabilidade da CONTRATADA</p>
			<p>4.2.5.	Por meio da URA poderão ser veiculadas mensagens informativas associadas a projetos, políticas, programas e campanhas realizadas pela Prefeitura do Município de São Paulo.</p>
			<p>4.2.6.	A URA deverá prever a exibição de gravações institucionais durante o período de espera, de acordo com as necessidades da CONTRATANTE.</p>
			<p>4.2.7.	A URA também deverá registrar pesquisa de satisfação ao final dos atendimentos concluídos pelos operadores.</p>
			<p>4.2.8.	Fraseologias</p>
				<p class="s2">4.2.8.1.	A elaboração das fraseologias utilizadas na URA será realizada conjuntamente e de comum acordo entre as partes.</p>
				<p class="s2">4.2.8.2.	As gravações de fraseologias serão efetuadas pela CONTRATADA e deverão ser submetidas à análise e aprovação da CONTRATANTE, antes de serem programadas, testadas e efetivamente ativadas.</p>
				<p class="s2">4.2.8.3.	As gravações de fraseologias da URA deverão ser feitas preferencialmente em estúdio, salvo os casos emergenciais, que poderão ser realizadas pela própria empresa, utilizando os recursos disponíveis através de tecnologia TTS (Text-To-Speech).</p>
				<p class="s2">4.2.8.4.	A Prefeitura do Município de São Paulo poderá especificar novas mensagens a serem implementadas na URA, e deverão estar disponibilizadas e operantes em prazo máximo de 5 dias corridos, contados após o recebimento de comunicação formal.</p>
					<p class="s3">4.2.8.4.1.	Em caso de fraseologias emergenciais, a serem assim determinadas pela CONTRATANTE, deverão ser implantadas e/ou removidas em até 01h.</p>
			<p>4.2.9.	Atendimento Humano</p>
				<p class="s2">4.2.9.1.	Serviço de atendimento telefônico receptivo e ativo a ser realizado por operador alocado em uma mesma posição de atendimento.</p>
				<p class="s2">4.2.9.2.	O atendimento será efetuado por operador definido como generalista (multiperfil) ou especialista (dedicado), de acordo com as especificidades ou volume de demanda comportado por cada assunto.</p>
			<p class="s2">4.2.9.3.	Atendimento Humano Receptivo</p>
				<p class="s3">4.2.9.3.1.	Compreende o atendimento telefônico por parte do operador de chamadas transferidas por meio da URA.</p>
				<p class="s3">4.2.9.3.2.	São atividades atribuídas aos operadores:</p>
					<p class="s4">4.2.9.3.2.1.	Registrar informações do munícipe no Sistema de Gestão de Atendimento, que será disponibilizado pela Prefeitura do Município de São Paulo.</p>
					<p class="s4">4.2.9.3.2.2.	Atender ao munícipe, fornecendo-lhe as informações contidas em respostas-padrão.</p>
					<p class="s4">4.2.9.3.2.3.	Registrar as solicitações, denúncias, reclamações feitas pelo munícipe no Sistema de Gestão de Atendimento e/ou em outros sistemas específicos.</p>
					<p class="s4">4.2.9.3.2.4.	Transferir as ligações para outras centrais determinadas pela CONTRATANTE e registrando suas solicitações no Sistema de Gestão de Atendimento.</p>
					<p class="s4">4.2.9.3.2.5.	Transferir imediatamente para o operador competente do assunto/tema tratado, caso o primeiro atendente não tenha essa atribuição.</p>
				<p class="s3">4.2.9.3.3.	Os procedimentos para atender às demandas dos cidadãos pela equipe de operadores da CONTRATADA deverão envolver:</p>
					<p class="s4">4.2.9.3.3.1.	Identificação ou cadastramento de munícipe no cadastro único do Sistema de Gestão de Atendimento.</p>
					<p class="s4">4.2.9.3.3.2.	Consultas aos roteiros disponíveis no “front end” do Sistema de Gestão de Atendimento.</p>
					<p class="s4">4.2.9.3.3.3.	Transferência para outro atendente, conforme o assunto/tema requerido.</p>
					<p class="s4">4.2.9.3.3.4.	Consultas à supervisão e/ou aos multiplicadores quando necessário.</p>
					<p class="s4">4.2.9.3.3.5.	Quaisquer alternativas que poderão surgir mediante a solicitação da CONTRATANTE.</p>
				<p class="s3">4.2.9.3.4.	Na hipótese do atendimento que, por quaisquer razões, não atender à demanda do cidadão (após tentativas comprovadas através de registros que deverão ser gravados em sua totalidade, no histórico do “front end”), a CONTRATADA deverá encaminhar os registros das solicitações para CONTRATANTE.</p>
					<p class="s4">4.2.9.3.4.1.	A CONTRATANTE avaliará a situação e providenciará retorno à CONTRATADA, que, conforme instrução prévia, poderá realizar contato ativo ao cidadão portador da demanda .</p>
				<p class="s3">4.2.9.3.5.	O encaminhamento das solicitações não resolvidas conforme o item anterior se dará pelo próprio “front end”, através de um programa de direcionamento automático, a partir do qual a CONTRATADA as encaminhará à CONTRATANTE.</p>
				<p class="s3">4.2.9.3.6.	Compreendem-se também como atividades de competência da CONTRATADA o registro das manifestações dos usuários, que contenham: elogios, reclamações, denúncias e sugestões em relação aos serviços prestados. Estas manifestações servirão de referência para a CONTRATANTE quanto à qualidade dos serviços prestados.</p>
				<p class="s3">4.2.9.3.7.	Se a CONTRATANTE concluir que a reclamação é relativa ao atendimento realizado pela CONTRATADA, remeterá o caso direto à supervisão geral da CONTRATADA, para as providências necessárias à superação da reclamação.</p>
				<p class="s3">4.2.9.3.8.	Não será considerada para fins de remuneração mais do que uma ligação receptiva em um intervalo de 15 (quinze) minutos de um mesmo munícipe.</p>
			<p class="s2">4.2.9.4.	Atendimento Humano Ativo</p>
				<p class="s3">4.2.9.4.1.	Consiste na execução de chamadas de saída ou retorno aos munícipes.</p>
				<p class="s3">4.2.9.4.2.	São atividades atribuídas aos operadores:</p>
					<p class="s4">4.2.9.4.2.1.	Retornar chamadas referentes a solicitações e pedidos de informações que não foram respondidas no momento do teleatendimento receptivo (“call back”).</p>
					<p class="s4">4.2.9.4.2.2.	Realizar ligações informativas acerca de serviços, projetos, programas, campanhas e políticas estabelecidas pela Prefeitura do Município de São Paulo, de acordo com o solicitado, mediante roteiros pré-determinados.</p>
					<p class="s4">4.2.9.4.2.3.	Realizar, a critério da CONTRATANTE, pesquisas de satisfação do cidadão.</p>
					<p class="s4">4.2.9.4.2.4.	Contatar munícipes, sob demanda da CONTRATANTE, para complementar as informações de um chamado já aberto.</p>
					<p class="s4">4.2.9.4.2.5.	Não serão consideradas para fins de remuneração as ligações efetuadas que não forem atendidas, apresentarem sinal de ocupado, mensagem da operadora, número inválido, sinal de fax, linha muda.</p>
			<p class="s2">4.2.9.5.	Modelo de Atendimento Humano</p>
				<p class="s3">4.2.9.5.1.	 O atendimento humano receptivo e ativo será realizado por postos de atendimentos agrupados em ilhas de operação voltadas para assuntos/temas genéricos, conforme definição da CONTRATANTE, compreendendo atendimento multiperfil e/ou assuntos/temas exclusivos, envolvendo atendimento dedicado e/ou especializado, conforme definição da CONTRATANTE.</p>
				<p class="s3">4.2.9.5.2.	 O atendimento multiperfil compreende atendimentos de forma compartilhada em diversos tipos de assuntos/serviços, respeitando o limite de assuntos/serviços por operador definidos pela CONTRATANTE, possibilitando o agrupamento em ilhas de atendimento de serviços que possuem afinidades de informações comuns, sistemas e procedimentos, conforme abaixo ilustrado:</p>
				<Imagem :dados="{
					tipo: 'coluna',
					caption: 'Figura 1 - Atendimento multiperfil',
					url: imgSrc('arquivos/tr-contact-center/figura_1-atendimento_multicanal.png')
				}"></Imagem>
				<!--Figura 1 - Atendimento multiperfil-->

				<p class="s3">4.2.9.5.3.	 O atendimento dedicado ou especializado refere-se aos serviços que apresentam conteúdo e informações específicas, assim definidos a critério da CONTRATANTE, englobando ilhas determinadas, conforme abaixo ilustrado:</p>
				<Imagem :dados="{
					tipo: 'coluna',
					caption: 'Figura 2 - Atendimento dedicado',
					url: imgSrc('arquivos/tr-contact-center/figura_2-atendimento_dedicado.png')
				}"></Imagem>
				<!--Figura 2 - Atendimento dedicado-->

				<p class="s3">4.2.9.5.4.	Os assuntos/serviços que serão atendidos nas ilhas multiperfil ou nas especializadas, serão definidas de comum acordo entre a Prefeitura do Município de São Paulo e a CONTRATADA, seguindo os padrões de temas / assuntos / serviços estabelecidos pela CONTRATANTE.</p>
				<p class="s3">4.2.9.5.5.	O histórico e a volumetria das ligações atendidas (Receptivo) no âmbito da Central de Atendimento atual está representada no <strong>ANEXO I</strong> - HISTÓRICO DE LIGAÇÕES E VOLUME - RECEPTIVO.</p>
				<p class="s3">4.2.9.5.6.	O histórico e a volumetria das ligações realizadas (Ativo) no âmbito da Central de Atendimento atual está representada no <strong>ANEXO II</strong> - HISTÓRICO DE LIGAÇÕES E VOLUME - ATIVO.</p>
				<p class="s3">4.2.9.5.7.	O operador/atendente multiperfil deverá trabalhar com até 3 (três) categorias de assuntos/temas, conforme definidos pela CONTRATANTE, em ordem decrescente de prioridade, em que 80% (oitenta por cento) dos atendimento reflitam no assunto/tema de primeira prioridade.</p>
				<p class="s3">4.2.9.5.8.	O operador/atendente, tanto multiperfil quanto especialista, deverá estar preparado para efetuar o atendimento receptivo e ativo em uma mesma posição.</p>
				<p class="s3">4.2.9.5.9.	A adoção do atendimento multiperfil ou dedicado obedecerá a critérios definidos exclusivamente pela CONTRATANTE, de acordo com a complexidade e/ou segurança dos procedimentos de atendimento de cada ilha de atendimento.</p>
				<p class="s3">4.2.9.5.10.	O atendimento também será realizado via CHAT, sendo que cada operador/atendente pode atender até 4 cidadãos simultaneamente.</p>
					<p class="s4">O histórico e a volumetria das ligações realizadas (Ativo) no âmbito da Central de Atendimento atual estão representados no <strong>ANEXO III</strong> HISTÓRICO DE VOLUMETRIA DE ATENDIMENTOS VIA CHAT.</p>
				<p class="s3">4.2.9.5.11.	O atendimento também deve prever a possibilidade de interação através de outros meios de atendimento - aplicativos de mensagens e outros canais de comunicação que possam vir a surgir.</p>
					<p class="s4">4.2.9.5.11.1.	Os prazos serão pactuados quando houver necessidade de implantação destes novos meios de atendimento.</p>
			<p class="s2">4.2.9.6.	Respostas-padrão e roteiros de atendimento</p>
				<p class="s3">4.2.9.6.1.	As respostas-padrão e roteiros de atendimento serão elaborados de comum acordo entre a CONTRATANTE e a CONTRATADA.</p>
				<p class="s3">4.2.9.6.2.	A CONTRATADA terá até 5 (cinco) horas para disponibilizar no sistema de atendimento que será fornecido pela CONTRATANTE as atualizações das respostas- padrão e roteiros de atendimento promovida pela CONTRATANTE ou excluí-la do sistema.</p>

					
				<Comments :attr="{id:commentId(), context:'4.2.	Serviços de Operação do Atendimento'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>4.3.	Relatórios Gerenciais</h3>
			<p>4.3.1.	URA - Unidade de Resposta Audível</p>
				<p class="s2">4.3.1.1.	Deverá possuir recursos para estruturação e extração de relatórios e gráficos baseados na utilização de cada serviço disponível, além de relatórios sobre ocorrências de falhas.</p>
				<p class="s2">4.3.1.2.	Deverá ser possível extrair os relatórios de forma online, bem como a exportação para formatos eletrônicos de planilhas e/ou documentos quer sejam: </p>
					<p class="s3">4.3.1.2.1.	Planilhas eletrônicas nos formatos XLS, XLSX e ODS. </p>
					<p class="s3">4.3.1.2.2.	Documentos de texto nos formatos: DOC, DOCX, ODT</p>
					<p class="s3">4.3.1.2.3.	Parâmetros para estruturação dos relatórios:</p>
						<p class="s4">4.3.1.2.3.1.	Período inicial (considerando parâmetros de data e hora)</p>
						<p class="s4">4.3.1.2.3.2.	Período final (considerando parâmetros de data e hora)</p>
						<p class="s4">4.3.1.2.3.3.	Serviço</p>
						<p class="s4">4.3.1.2.3.4.	Operador</p>
						<p class="s4">4.3.1.2.3.5.	Campanhas</p>
						<p class="s4">4.3.1.2.3.6.	Telefone (considerando parâmetros parciais ou completos do DDD, NÚMERO) </p>
						<p class="s4">4.3.1.2.3.7.	Número do atendimento</p>
						<p class="s4">4.3.1.2.3.8.	Palavras-chave</p>
				<p class="s2">4.3.1.3.	Deverão ser disponibilizados recursos para elaboração e extração, no mínimo, dos seguintes relatórios:</p>
					<p class="s3">4.3.1.3.1.	Tempo Médio de Atendimento da URA com possibilidade de informar o parâmetro de  tempo fracionado</p>
					<p class="s3">4.3.1.3.2.	Recursos ativos e inativos.</p>
					<p class="s3">4.3.1.3.3.	Relatório de navegação na URA</p>
					<p class="s3">4.3.1.3.4.	Estatísticas de utilização por hora, dia, mês, por canal, por ligações derivadas para os operadores.</p>
					<p class="s3">4.3.1.3.5.	Estatísticas para tempo de retenção por tipo de serviço oferecido pela central de atendimento.</p>
					<p class="s3">4.3.1.3.6.	Estatística para cada tipo de serviço oferecido pela central de atendimento (opções de atendimento dentro da árvore).</p>
					<p class="s3">4.3.1.3.7.	Estatística para o número de ligações abandonadas sem discagem, ligações que caíram durante a discagem, ligações atendidas com sucesso.</p>
					<p class="s3">4.3.1.3.8.	Quantitativos de ligações recebidas na URA com possibilidade de informar o período desejado, parametrizar intervalo fracionado de tempo por horas e/ou  minutos, bem como a condição das ligações (finalizadas e não finalizadas).</p>
					<p class="s3">4.3.1.3.9.	Quantitativos de ligações recebidas na URA com possibilidade de informar o período desejado, parametrizar intervalo fracionado de tempo por horas e/ou  minutos, condição da ligação (finalizadas e não finalizadas) detalhadas por tipo de serviço utilizado e motivos.</p>
					<p class="s3">4.3.1.3.10.	Quantitativos por hora, dia e mês, por canal da URA, de ligações com transações realizadas na URA e transferidas para o atendente, em intervalo fracionado de tempo parametrizáveis por horas e/ou  minutos.</p>
					<p class="s3">4.3.1.3.11.	Quantitativos de ligações com transações realizadas na URA, para cada tipo de serviço oferecido pela central de atendimento (opções de atendimento dentro da árvore), parametrizados por período de data e/ou hora. </p>
					<p class="s3">4.3.1.3.12.	Quantitativos de ligações transferidas pelo atendente para a URA, por parâmetros de atendente, data e hora e/ou intervalo fracionado de tempo parametrizáveis por horas e/ou minutos.</p>
					<p class="s3">4.3.1.3.13.	Quantitativos das desconexões ocorridas por time-out (com a indicação do respectivo ponto), definidas por parâmetros de data e hora.</p>
					<p class="s3">4.3.1.3.14.	Quantitativos de chamadas abandonadas (com a indicação do ponto de abandono), definidas por parâmetros de data e hora.</p>
					<p class="s3">4.3.1.3.15.	Quantidade de chamadas abandonadas em até “X” segundos e após “X” segundos, onde “X” é um número parametrizável, definidas por parâmetros de data e hora.</p>
					<p class="s3">4.3.1.3.16.	Relatório de falhas na conexão com a Rede local, definidas por parâmetros de data e hora.</p>
					<p class="s3">4.3.1.3.17.	Relatório de falhas na conexão com o Servidor de Sistema, definidas por parâmetros de data e hora.</p>
					<p class="s3">4.3.1.3.18.	Relatório de comunicação de inoperabilidade do Sistema do usuário, definidas por parâmetros de data e hora.</p>
					<p class="s3">4.3.1.3.19.	Relatório de ponto de interrupção na fraseologia e na conexão do usuário, definidas por parâmetros de data e hora.</p>
					<p class="s3">4.3.1.3.20.	Relatório de navegação, definidas por parâmetros de data e hora.</p>
					<p class="s3">4.3.1.3.21.	Relatório por ANI - Automatic Number Identification.</p>
			<p>4.3.2.	DAC - Distribuidor Automático de Chamadas</p>
				<p class="s2">4.3.2.1.	Deverá possuir recursos para estruturação e extração de relatórios e gráficos baseados na utilização de cada serviço disponível, além de relatórios sobre ocorrências de falhas.</p>
				<p class="s2">4.3.2.2.	Deverá ser possível extrair os relatórios de forma online, bem como a exportação para formatos eletrônicos de planilhas e/ou documentos quer sejam: </p>
					<p class="s3">4.3.2.2.1.	Planilhas eletrônicas nos formatos XLS, XLSX e ODS. </p>
					<p class="s3">4.3.2.2.2.	Documentos de texto nos formatos: DOC, DOCX, ODT</p>
				<p class="s2">4.3.2.3.	Para os relatórios especificados abaixo, deverão ser considerados para estruturação e extração os parâmetros de: Data e Hora, Intervalo fracionado de tempo, Serviços, Operadores.</p>
					<p class="s3">4.3.2.3.1.	Quantidade de ligações recebidas no DAC</p>
					<p class="s3">4.3.2.3.2.	Quantidade de ligações atendidas</p>
					<p class="s3">4.3.2.3.3.	Quantidade de ligações abandonadas</p>
					<p class="s3">4.3.2.3.4.	Quantidade de ligações desviadas por transbordo</p>
					<p class="s3">4.3.2.3.5.	Quantidade de ligações atendidas em até “X” segundos, onde “X” é um número parametrizável</p>
					<p class="s3">4.3.2.3.6.	Quantidade de ligações em fila de espera</p>
					<p class="s3">4.3.2.3.7.	Quantidade de atendimentos mantidos em fila de espera (especificados por ilhas), por um tempo superior a “X” segundos, onde “X” é um número parametrizável</p>
					<p class="s3">4.3.2.3.8.	Comparativos, diário e mensal, dos níveis de serviço com os efetivamente realizados.</p>
					<p class="s3">4.3.2.3.9.	Tempo médio das ligações</p>
					<p class="s3">4.3.2.3.10.	Tempo médio por atendimento separado por ilhas</p>
					<p class="s3">4.3.2.3.11.	Tempo médio de espera em fila</p>
					
				<Comments :attr="{id:commentId(), context:'4.3.	Relatórios Gerenciais'}" v-if="estaConsulta.ativo == 1"></Comments>
				
			<h3>4.4.	Relatórios Diversos</h3>
			<p>4.4.1.	Deve disponibilizar funcionalidade para elaboração e extração de relatórios de frequência diária apresentando: ID e nome do operador, supervisor, hora de entrada e saída da escala, hora de entrada e saída real, situação e tempo que ficou logado e assunto/serviço atendidos pelo operador, considerando parâmetros por período de data e/ou hora.</p>
			<p>4.4.2.	Deve disponibilizar recursos em tempo real para elaboração e extração de relatórios de CALL BACK e CAMPANHAS ATIVAS, com parâmetros de data e/ou hora, intervalo fracionado de tempo de horas e/ou minutos, para: </p>
				<p class="s2">4.4.2.1.	Ligações Recebidas, </p>
				<p class="s2">4.4.2.2.	Ligações Atendidas, </p>
				<p class="s2">4.4.2.3.	Ligações Abandonadas, </p>
				<p class="s2">4.4.2.4.	Abandonadas em até “X” segundos, onde “X” é um número parametrizável</p>
				<p class="s2">4.4.2.5.	Abandonadas após “X” segundos, onde “X” é um número parametrizável</p>
				<p class="s2">4.4.2.6.	Quantidade de Call Back e percentual de Call Back em relação aos Abandonos (ICB).</p>
				<p class="s2">4.4.2.7.	Relatório de campanhas por órgãos solicitante.</p>
				<p class="s2">4.4.2.8.	Relatório por assuntos das Campanhas.</p>
			<p>4.4.3.	Deve disponibilizar recursos em tempo real  para elaboração e extração de relatórios de atendimento via chat, com parâmetros de data e/ou hora, intervalo fracionado de tempo de horas e/ou minutos, para: </p>
				<p class="s2">4.4.3.1.	Tentativas de contatos, </p>
				<p class="s2">4.4.3.2.	Atendimentos realizados, </p>
				<p class="s2">4.4.3.3.	Atendimentos abandonados, </p>
				<p class="s2">4.4.3.4.	Abandonadas em até “X” segundos, onde “X” é um número parametrizável</p>
				<p class="s2">4.4.3.5.	Abandonadas após “X” segundos, onde “X” é um número parametrizável</p>
			<p>4.4.4.	Deve possibilitar a estruturação e extração de relatório de pesquisa de satisfação disponibilizada na(s) URA(s), após o atendimento, com parâmetros de data e/ou hora, intervalo fracionado de tempo de horas e/ou minutos, para:</p>
				<p class="s2">4.4.4.1.	Ligações Recebidas, </p>
				<p class="s2">4.4.4.2.	Ligações Atendidas, </p>
				<p class="s2">4.4.4.3.	Quantidade de Pesquisas de Satisfação e Percentual de Aprovação (IPS).</p>
			<p>4.4.5.	Deve possibilitar a estruturação e extração de relatório de tempos médios com parâmetros de data e/ou hora, intervalo fracionado de tempo de horas e/ou minutos, para:</p>
				<p class="s2">4.4.5.1.	Tempo Médio de Atendimento</p>
				<p class="s2">4.4.5.2.	Tempo médio de Espera</p>
				<p class="s2">4.4.5.3.	Nível de Recebimento e Não Recebimento (INR)</p>
				<p class="s2">4.4.5.4.	Nível de Atendimento (ILE).</p>
			<p>4.4.6.	Disponibilizar recursos e funcionalidades que permitam produzir relatórios sobre a demanda de serviços pelos cidadãos nos canais para facilitar a identificação da necessidade de campanhas, ações de comunicação e alertas nos Canais de Atendimento.</p>
					
			<Comments :attr="{id:commentId(), context:'4.4.	Relatórios Diversos'}" v-if="estaConsulta.ativo == 1"></Comments>
			<h3>4.5.	Indicadores de Qualidade</h3>
			<p>4.5.1.	As partes deverão assinar o Acordo de Nível de Serviço – ANS - que estabelece os índices dos indicadores de desempenho e qualidade, no modelo indicado no Edital (Anexo MODELO DE ACORDO DE NÍVEL DE SERVIÇO).</p>
			<p>4.5.2.	Durante os primeiros 3 (três) meses do início da operação os indicadores de qualidade serão apurados, mas não deverão ser considerados para fins de remuneração, seja em relação aos acréscimos seja em relação aos decréscimos constatados.</p>
			<p>4.5.3.	Indicadores de Pesquisa de Satisfação - IPS</p>
				<p class="s2">4.5.3.1.	Pesquisa de satisfação diária onde, ao término de todo atendimento, a ligação deverá ser retornada ao atendimento eletrônico, para que seja respondida a pesquisa e registrado o grau de satisfação (a parametrização da pesquisa será de responsabilidade da contratante).</p>
				<p class="s2">4.5.3.2.	O Índice de Pesquisa de Satisfação - IPS, deverá ter índice de 90% de aprovação quanto aos serviços prestados pela Central, do universo dos pesquisados.</p>
			<p>4.5.4.	Índice de Ligações Não Recebidas (INR): meta de até 3% (três por cento) mensal.</p>
				<p class="s2">4.5.4.1.	Entende-se por ligação não recebida a chamada que a central pública de telefonia não conseguiu entregar para o PABX (CPCT – Central Privada de comutação telefônica) da CONTRATADA. Os motivos para este comportamento normalmente Não Responde (NR) e Linha Ocupada (LO). O total de ligações corresponde a todas as ligações ofertadas pela empresa de telefonia pública no dia.</p>
			<p>4.5.5.	Indicadores de atendimento por CHAT.</p>
				<p class="s2">4.5.5.1.	Índice do tempo médio de espera.</p>
				<p class="s2">4.5.5.2.	Índice do tempo de atendimento.</p>
				<p class="s2">4.5.5.3.	Índice de taxa de abandono de cidadãos que desistiram de continuar o atendimento.</p>
				<p class="s2">4.5.5.4.	Índice de satisfação após finalização do atendimento. </p>
			<p>4.5.6.	Atendimento Humano</p>
				<p class="s2">4.5.6.1.	Índice de chamadas atendidas com até 15 (quinze) segundos de espera (NS): meta de 85% (oitenta e cinco por cento) mensal.</p>
					<p class="s3">4.5.6.1.1.	A meta corresponde ao coeficiente de chamadas atendidas com até 15 (quinze) segundo de espera em relação ao total de chamadas atendidas.</p>
				<p class="s2">4.5.6.2.	Para os serviços 199 e 153 e outros serviços a serem definidos pela CONTRATANTE, o índice de ligações atendidas em até 15 (quinze) segundos terá como meta 95% (noventa e cinco por cento) mensal</p>
				<p class="s2">4.5.6.3.	Índice de Ligações Abandonadas (ILA): meta de até 5% (cinco por cento) mensal.</p>
					<p class="s3">4.5.6.3.1.	Entende-se por abandono de ligações as ligações recebidas pela Central de Atendimento e que, após permanecerem 15 (quinze) segundos na fila de espera (após atendimento pela URA), são desligadas pelo munícipe.</p>
					<p class="s3">4.5.6.3.2.	A meta corresponde ao coeficiente máximo de chamadas abandonadas pelos munícipes em espera, sem que tenham recebido atendimento, em relação ao total das chamadas recebidas.</p>
				<p class="s2">4.5.6.4.	Para os serviços 199 e 153 e outros serviços a serem definidos pela CONTRATANTE, o índice de ligações abandonadas terá como meta até 2% (dois por cento) mensal</p>
				<p class="s2">4.5.6.5.	Índice de Call Back (CB): meta 90% (noventa por cento) mensal</p>
					<p class="s3">4.5.6.5.1.	Entende-se por “call back” a ligação para o munícipe, que teve seu atendimento abandonado, para continuidade do atendimento. Pode acontecer quando a ligação é abandonada após 15 (quinze) segundos na fila de espera.</p>
					<p class="s3">4.5.6.5.2.	Todo e qualquer “call back” deverá ser realizado em até, no máximo, 24 (vinte e quatro) horas da entrada da ligação, ressalvadas as ligações recebidas às sextas-feiras, sábados, domingos e feriados, que deverão ser realizadas no primeiro dia útil subsequente.</p>
					<p class="s3">4.5.6.5.3.	A meta corresponde ao coeficiente das ligações abandonadas que foram recuperadas e o atendimento concluído.</p>
				<p class="s2">4.5.6.6.	Índice de atendimento registrado (IAR): meta de 100% (cem por cento) mensal</p>
					<p class="s3">4.5.6.6.1.	Entende-se por registro de atendimento a geração de um número de protocolo único por ligação, fornecido ao munícipe no início do atendimento humano, seja para registro de solicitações ou pedido de informação.</p>
					<p class="s3">4.5.6.6.2.	A meta corresponde ao coeficiente de atendimentos registrados no Sistema de Gestão de Atendimento.</p>
				<p class="s2">4.5.6.7.	Índice de satisfação dos munícipes em relação ao serviço da Central de Atendimento (IS)</p>
					<p class="s3">4.5.6.7.1.	Meta de 90% (noventa por cento) de bom e ótimo mensal</p>
					<p class="s3">4.5.6.7.2.	O índice de satisfação do munícipe será obtido mediante pesquisa diária, referida no item 4.9, visando mensurar a qualidade dos serviços prestados pela CONTRATADA. </p>
					<p class="s3">4.5.6.7.3.	A parametrização da pesquisa é de responsabilidade da CONTRATANTE e será elaborada com a participação da CONTRATADA.</p>
					<p class="s3">4.5.6.7.4.	A meta corresponde ao percentual do universo de munícipes entrevistados que avaliaram o atendimento prestado pela Central de Atendimento com os conceitos “bom” e “ótimo” em pelo menos ⅔ da quantidade de perguntas feitas</p>
					<p class="s3">4.5.6.7.5.	Caso não seja atingida a meta prevista, o índice é apurado pelo percentual médio de conceitos “bom” e “ótimo” obtidos nas perguntas nas quais a CONTRATADA obtiver os menores percentuais destes conceitos.</p>
				<p class="s2">4.5.6.8.	Índice de disponibilidade da Solução Tecnológica de Gestão de Atendimento no Contact Center</p>
					<p class="s3">4.5.6.8.1.	Meta >= 99,7% (noventa e nove e sete décimos por cento) mensal</p>
					<p class="s3">4.5.6.8.2.	Entende-se por “disponibilidade” o percentual do tempo total em que a solução esteve disponível para uso no mês em relação ao total de horas que a solução estava programada para estar disponível no mês.</p>
					<p class="s3">4.5.6.8.3.	Embora a solução sistêmica de gestão de atendimento será um produto a ser utilizado na Central de Atendimento pelos diversos operadores e supervisores, o ambiente de infraestrutura tecnológica deverá manter o índice de operação da solução em 99,7%.</p>
					<p class="s3">4.5.6.8.4.	Não serão consideradas na apuração do indicador de disponibilidade da solução tecnológica as horas de manutenção programada previamente pela fornecedora da solução de gestão de atendimento, desde que informada à CONTRATADA com antecedência mínima de 5 dias.</p>
					
				<Comments :attr="{id:commentId(), context:'4.5.	Indicadores de Qualidade'}"v-if="estaConsulta.ativo == 1"></Comments>
					
				<h3>4.6.	Pesquisa de Satisfação</h3>
				<p>4.6.1.	A CONTRATADA deverá realizar pesquisa para aferir a percepção dos solicitantes quanto ao atendimento telefônico prestado, de forma eletrônica, por meio da Unidade de Resposta Audível (URA). </p>
				<p>4.6.2.	Os operadores da Central de Atendimento deverão informar imediatamente após o atendimento, em 100% das Ligações Atendidas pelo número 156, que, ao final do atendimento, o solicitante será encaminhado a uma pesquisa de satisfação.</p>
					<p class="s2">4.6.2.1.	Para os tridígitos 199, 153 ou demais assuntos a serem estabelecidos pela CONTRATANTE, a pesquisa de satisfação não será necessária.</p>
				<p>4.6.3.	Os resultados dessa pesquisa serão auditados pela CONTRATANTE periodicamente, conforme necessidade.</p>
				<p>4.6.4.	A CONTRATADA deverá incluir em seu questionário de pesquisa eletrônica, elaborado pela CONTRATANTE, perguntas exclusivamente referentes à satisfação do munícipe.</p>
				<p>4.6.5.	A pesquisa deve contemplar no máximo quatro perguntas e o cidadão deve ter cinco possibilidades de resposta para cada uma delas.</p>
					
				<Comments :attr="{id:commentId(), context:'4.6.	Pesquisa de Satisfação'}" v-if="estaConsulta.ativo == 1"></Comments>
				
				<h3>4.7.	Recursos Humanos</h3>
				<p>4.7.1.	Perfis Profissionais</p>
					<p class="s2">4.7.1.1.	Operador/ Atendente</p>
						<ul>
						<li>
							Perfil
							<ul>
								<li>Ter escolaridade mínima de 2º Grau (Nível médio) completo.</li>
								<li>Possuir conhecimentos básicos de informática (internet, edição de texto e planilha eletrônica).</li>
								<li>Demonstrar clareza e objetividade na linguagem falada, boa dicção e audição, comprovadas em exames médicos correspondentes.</li>
								<li>Sensibilidade para questões sociais.</li>
								<li>Possuir capacidade comportamental para agir com calma e tolerância, mesmo em situações que fujam à rotina de trabalho.</li>
								<li>Ter iniciativa e capacidade de interpretação.</li>
								<li>Demonstrar facilidade e interesse na assimilação e transmissão de conhecimento das atividades pertinentes às suas atribuições.</li>
								<li>Apresentar capacidade de concentração, de interpretação e de argumentação.</li>
							</ul>
						</li>
						<li>
							Atribuições
							<ul>
								<li>Orientar e informar os munícipes acerca dos programas, projetos e políticas da PMSP</li>
								<li>Registrar no Sistema de Gestão de Atendimento todas as ligações atendidas (informações, solicitações, reclamações, sugestões e denúncias)</li>
							</ul>
						</li>	
						</ul>
					<p class="s2">4.7.1.2.	Supervisor – Operador Técnico Especialista</p>
						<ul>
						<li>
							Perfil
							<ul>
								<li>Formado em Curso Superior de qualquer área de atuação</li>
								<li>Mínimo de 2 (dois) anos de experiência em sua área de atuação;</li>
								<li>Capacidade de gerenciar pessoas</li>
								<li>Possuir conhecimentos intermediários de informática (internet, edição de texto e planilha eletrônica);</li>
								<li>Demonstrar clareza e objetividade em linguagem oral e escrita, boa dicção e audição, comprovadas em exames médicos correspondentes;</li>
								<li>Ter iniciativa e capacidade de interpretação;</li>
								<li>Ter capacidade comportamental para agir com calma e tolerância, mesmo em situações que fujam à rotina de trabalho.</li>
							</ul>
						</li>
						<li>
							Atribuições
							<ul>
								<li>Esclarecer dúvidas dos operadores</li>
								<li>Acompanhar o desempenho dos operadores</li>
								<li>Dar feedback aos operadores</li>
								<li>Gerenciar os resultados e a qualidade dos serviços prestados</li>
								<li>Gerenciar a satisfação dos munícipes acerca do atendimento prestado pelo seu grupo de operadores</li>
								<li>Prestar informações sobre os monitoramentos efetuados</li>
								<li>Planejar e estabelecer pontos de verificação e controle dos serviços</li>
								<li>Construir clima organizacional sadio, relacionando-se bem com as equipes.</li>
							</ul>
						</li>
						</ul>
					<p class="s2">4.7.1.3.	Monitor de Qualidade</p>
						<ul>
						<li>
							Perfil
							<ul>
								<li>Formado em Curso Superior de qualquer área de atuação</li>
								<li>Experiência mínima de 1 (um) ano na função de monitor de qualidade ou supervisão em atendimento receptivo</li>
								<li>Experiência no trato de “softwares” de monitoração e equipamentos de análise e diagnósticos</li>
								<li>Capacidade de expressar-se com clareza e objetividade, tanto na linguagem escrita como na falada</li>
								<li>Capacidade de agir com calma e tolerância, frente a situações que fujam dos procedimentos e rotinas normais de trabalho</li>
								<li>Facilidade para se adaptar às normas e regulamentos estabelecidos</li>
								<li>Demonstrar engajamento à missão e diretrizes de atendimento</li>
								<li>Sensibilidade para questões sociais</li>
							</ul>
						</li>
						<li>
							Atribuições
							<ul>
								<li>Monitorar as ligações e diálogos realizados pelos operadores</li>
								<li>Acompanhar e avaliar o atendimento, intervindo quando necessário</li>
								<li>Promover a escuta direta (online) e gravada dos atendimentos, objetivando a qualidade do atendimento</li>
								<li>Comunicar ao supervisor qualquer problema relativo aos atendimentos prestados</li>
								<li>Realizar o feedback aos operadores quanto ao desempenho e os ajustes necessários</li>
								<li>Acompanhar o desenvolvimento dos novos operadores</li>
								<li>Construir clima organizacional sadio, relacionando-se bem com as equipes</li>
								<li>Elaborar, se necessário, os roteiros de atendimento utilizados pelos operadores durante o atendimento</li>
							</ul>
						</li>
						</ul>
					<p class="s2">4.7.1.4.	Multiplicador / Instrutor de Treinamento</p>
						<ul>
						<li>
							Perfil
							<ul>
								<li>Formado em Curso Superior</li>
								<li>Domínio da língua portuguesa oral e escrita</li>
								<li>Experiência comprovada de pelo menos 1 ano na área de qualidade em operações de Telemarketing e/ou aplicação de treinamentos</li>
								<li>Fluência, clareza e objetividade</li>
								<li>Sensibilidade social</li>
								<li>Boa dicção e audição</li>
								<li>Raciocínio lógico</li>
								<li>Dinamismo na busca de soluções para melhoria da qualidade dos serviços</li>
								<li>Cortesia e civilidade</li>
								<li>Capacidade de agir com calma e tolerância.</li>
							</ul>
						</li>
						<li>
							Atribuições
							<ul>
								<li>Planejar e executar processos de capacitação inicial e de reciclagem periódica, programas de treinamento comportamentais, ações de melhoria do clima organizacional e programas de aprimoramento de qualidade dos serviços prestados</li>
								<li>Elaborar materiais utilizados nas capacitações, quais sejam: apostilas, manuais de sistemas e outros</li>
								<li>Construir clima organizacional sadio, relacionando-se bem com as equipes</li>
							</ul>
						</li>
						</ul>
					<p class="s2">4.7.1.5.	Analista de base de conhecimento</p>
						<ul>
						<li>
							Perfil
							<ul>
								<li>Formado em Curso Superior de qualquer área de atuação;</li>
								<li>Experiência mínima de seis meses em atividades de atendimento</li>
								<li>Conhecimento básico de métodos, processos e ferramentas de gestão organizacional</li>
								<li>Fluência, clareza e objetividade na linguagem falada e escrita</li>
								<li>Sensibilidade social</li>
								<li>Boa dicção e audição</li>
								<li>Raciocínio lógico</li>
								<li>Dinamismo na busca de soluções para melhoria da qualidade dos serviços</li>
								<li>Capacidade de síntese</li>
							</ul>
						</li>
						<li>
							Atribuições
							<ul>
								<li>Estruturar, implantar e manter continuamente, com apoio e aprovação prévia da PMSP, a base de conhecimento e todos os roteiros de atendimento, contemplando todas as respostas padronizadas.</li>
								<li>Manter atualizada a base de conhecimento de acordo com as atualizações dos sistemas de informação, se necessário</li>
								<li>Propor à PMSP alterações métodos, procedimentos ou rotinas existentes na base de conhecimento, com o objetivo de aumentar a assertividade das soluções registradas na base de conhecimento e garantir um elevado nível de satisfação dos usuários.</li>
							</ul>
						</li>
						</ul>
					<p class="s2">4.7.1.6.	Gestor de Qualidade</p>
						<ul>
						<li>
							Perfil
							<ul>
								<li>Formado em Curso Superior de qualquer área de atuação;</li>
								<li>Experiência comprovada de, pelo menos 2 anos, de controle de qualidade em Contact Center</li>
								<li>Fluência, clareza e objetividade</li>
								<li>Sensibilidade social</li>
								<li>Boa dicção e audição</li>
								<li>Raciocínio lógico</li>
								<li>Dinamismo na busca de soluções para melhoria da qualidade dos serviços cortesia e civilidade</li>
								<li>Capacidade de agir com calma e tolerância</li>
								<li>Capacidade de comunicar-se e expressar-se corretamente em linguagem falada e escrita</li>
								<li>Experiência desejável na área de qualidade em central de teleatendimento</li>
								<li>Habilidades de organização, controle, liderança, solução de problemas</li>
								<li>Desenvolvimento de equipe e relacionamento interpessoal</li>
								<li>Habilidades para solução de conflitos interpessoais e melhoria do clima organizacional</li>
								<li>Habilidade em planejamento e controle</li>
								<li>Habilidade na elaboração de atividades motivacionais</li>
								<li>Habilidade em formular, aplicar e interpretar os resultados de Pesquisas de Satisfação dos usuários e Qualidade</li>
								<li>Condução de grupos</li>
								<li>Facilidade em aplicar e avaliar conceitos e ferramentas de Qualidade</li>
								<li>Capacidade de aplicar técnicas e dinâmicas de capacitação organizacional</li>
								<li>Habilidade em conduzir reuniões</li>
								<li>Didática</li>
								<li>Conhecimento de microinformática básica, digitação, Windows, Office (Word, Excel e Access) e Open Office</li>
								<li>Aprovação em programa de seleção a ser realizado pela CONTRATADA, com critérios validados pelo CONTRATANTE, inclusive treinamento em:</li>
									<ul class="sqr-ul">
										<li>Telemarketing</li>
										<li>Gestão de pessoas</li>
										<li>Gestão de processos</li>
										<li>Sistemas de monitoração</li>
										<li>Utilização de aplicativos para registro e tratamento de ocorrências</li>
								</ul>
							</ul>
						</li>
						<li>
							Atribuições
							<ul>
								<li>Utilização dos roteiros de atendimento</li>
								<li>Acompanhar o calendário de eventos, sazonalidade e afins</li>
								<li>Acompanhar e contingenciar o nível de absenteísmo e “turn over”</li>
								<li>Realizar pesquisas nos meios de comunicação a respeito dos serviços prestados pela Central de Atendimento 156, 199 e 153</li>
								<li>Monitorar a frequência e tipo de questionamento para atualizar os scripts</li>
								<li>Organizar e manter atualizado o manual de qualidade dos serviços</li>
								<li>Elaborar relatórios, incluindo gravações de atendimento em número suficiente para análise dos serviços prestados pela Central de Atendimento 156</li>
								<li>Monitorar a frequência e tipo de questionamento para atualizar os scripts</li>
								<li>Organizar e manter atualizado o manual de qualidade dos serviços</li>
								<li>Elaborar relatórios, incluindo gravações de atendimento em número suficiente para análise dos serviços prestados pela Central de Atendimento 156</li>
								<li>Formular, aplicar e interpretar resultados de Pesquisas de Satisfação dos usuários e Qualidade</li>
								<li>Realizar auditoria de qualidade da de conhecimento e scripts da Central de Atendimento 156</li>
								<li>Modelar os processos e efetuar o levantamento das informações que irão compor os roteiros de atendimento de novas operações</li>
								<li>Planejar e coordenar os processos de capacitação organizacional, de reciclagem periódica, de programas de treinamento comportamentais e programas de aprimoramento de qualidade dos serviços prestados</li>
								<li>Planejar e coordenar a elaboração de materiais utilizados nas capacitações, quais sejam: apostilas, manuais de sistemas e outros</li>
								<li>Construir clima organizacional sadio, relacionando-se bem com as equipes</li>
								<li>Interagir com representantes da CONTRATANTE nas questões referentes à gestão da qualidade dos serviços.</li>
								<li>Analisar mensalmente os dados gerenciais de atendimento e qualidade, propondo melhorias necessárias à garantia da excelência do serviço prestado.</li>
								<li>Avaliar a qualidade dos serviços prestados utilizando critérios e ferramentas aprovados pela CONTRATANTE.</li>
								<li>Promover ações objetivas de realinhamento de metas e qualidade dos serviços.</li>
							</ul>
						</li>
						</ul>
					<p class="s2">4.7.1.7.	Analista de tráfego</p>
						<ul>
						<li>
							Perfil
							<ul>
								<li>Formado em Curso Superior de qualquer área de atuação;</li>
								<li>Experiência comprovada de, pelo menos 1 ano, em controle e análise de tráfego de ligações em Contact Center</li>
								<li>Fluência, clareza e objetividade</li>
								<li>Raciocínio lógico</li>
								<li>Dinamismo na busca de soluções para melhoria da qualidade dos serviços </li>
								<li>Capacidade de agir com calma e tolerância</li>
								<li>Capacidade de comunicar-se e expressar-se corretamente em linguagem falada e escrita</li>
								<li>Raciocínio lógico, matemático e nível superior desejável</li>
								<li>Capacidade de análise/síntese</li>
								<li>Experiência desejável na área de controle de tráfego em central de atendimento</li>
								<li>Conhecimentos na área de dimensionamento, organização, controle, sistemas de acompanhamento e avaliação do tráfego, solução de problemas inclusive em situações de emergência/não previstas</li>
								<li>Conhecimento das ferramentas e “softwares” inerentes à função</li>
								<li>Capacidade de planejamento e estabelecimento de pontos de verificação e controle dos serviços sob sua responsabilidade</li>
								<li>Conhecimentos de informática, digitação, Windows, Office (Word, Excel intermediário e Access) e Open Office</li>
								<li>Aprovação em programa de seleção a ser realizado pela CONTRATADA, com critérios validados pelo CONTRATANTE, inclusive treinamento em:</li>
									<ul class="sqr-ul">
										<li>Telemarketing</li>
										<li>Sistemas de monitoração</li>
										<li>Uso da Posição de Atendimento - P.A. - (sistema telefônico)</li>
										<li>Utilização de aplicativos para registro e tratamento de ocorrências</li>
										<li>Utilização dos scripts/roteiros</li>
									</ul>
							</ul>
						</li>
						<li>
							Atribuições
							<ul>
								<li>Analisar, dimensionar e controlar o tráfego das ligações</li>
								<li>Planejar e acompanhar os serviços e resultados da operação</li>
								<li>Acompanhar e analisar os indicadores de desempenho da operação</li>
								<li>Comunicar ao coordenador de operação as ocorrências de atendimento</li>
								<li>Dimensionar e alocar recursos baseado na demanda do atendimento e no perfil dos operadores</li>
								<li>Otimizar escalas, turnos de trabalho e equipes, buscando ganhos de produtividade</li>
								<li>Emitir diariamente relatórios de volumetria de atendimento</li>
								<li>Coletar informações necessários ao controle dos indicadores de desempenho</li>
								<li>Construir clima organizacional sadio, relacionando-se bem com as equipes</li>
							</ul>
						</li>
						</ul>
					<p class="s2">4.7.1.8.	Analista de Sistema do Suporte Tecnológico</p>
						<ul>
						<li>
							Perfil
							<ul>
								<li>Formado na área de Ciências Computação, Análise de Sistemas</li>
								<li>Ter amplos conhecimentos nas ferramentas / tecnologias propostas para os Sistemas utilizados na Central de Atendimento</li>
								<li>Ter conhecimento/experiência em Ferramentas de desenvolvimento de sistemas e páginas web, tais como:</li>
									<ul class="sqr-ul">
										<li>JAVA, JAVA SCRIPT, J2EE, HTML, ASP, .NET, XML, Web Services, VB, VBScript</li>
										<li>KIT MACROMEDIA, ADOBE FLEX, Tecnologia ASTERISK</li>
										<li>Noções de Gerenciamento de Projetos – PMI, </li>
										<li>Noções de Engenharia de Software - UML, RUP, Qualidade de Software</li>
									</ul>
								<li>Aplicativos do MS-Office (Word, Excel, Power Point, Access)</li>
								<li>Correio eletrônico (Internet Explorer e Outlook)</li>
								<li>Bancos de dados, principalmente SQL, Oracle e informix</li>
								<li>Certificações: OCP, JWD e JAVA</li>
								<li>Conhecimento em ITIL e COBIT</li>
								<li>Domínio da língua portuguesa oral e escrita</li>
								<li>Experiência comprovada de, pelo menos 1 ano, em aplicação de treinamentos</li>
								<li>Fluência, clareza e objetividade</li>
								<li>Sensibilidade social</li>
								<li>Boa dicção e audição</li>
								<li>Raciocínio lógico</li>
								<li>Dinamismo na busca de soluções para melhoria da qualidade dos serviços cortesia e civilidade</li>
								<li>Capacidade de agir com calma e tolerância</li>
								<li>Pelo menos 1 profissional desta categoria fica obrigado a atender 100% dos requisitos; os demais profissionais deverão atender minimamente 90% dos requisitos aqui descritos</li>
							</ul>
						</li>
						<li>
							Atribuições
							<ul>
								<li>Gerenciar equipamentos tecnológicos e de telefonia do Contact Center</li>
								<li>Interagir com a PMSP e os gestores dos órgãos participantes do sistema, visando melhorar continuamente a disponibilidade da infra-estrutura tecnológica</li>
								<li>Receber as demandas e apresentar os relatórios gerenciais solicitados pela PMSP ou órgãos participantes dos sistemas;</li>
								<li>Demais atividades pertinentes.</li>
							</ul>
						</li>
						</ul>
					<p class="s2">4.7.1.9.	Coordenador da Operação</p>
						<ul>
						<li>
							Perfil
							<ul>
								<li>Ensino Superior completo e pós-graduação nas áreas: gestão de pessoas, administração, recursos humanos e correlatas</li>
								<li>Conhecimentos avançados de informática e, obrigatoriamente com experiência profissional mínima, de 2 anos em Coordenação de operações de Telemarketing</li>
								<li>Capacidade de gerenciar pessoas e dinamismo na busca de soluções para melhoria da qualidade dos serviços</li>
								<li>Domínio dos indicadores e métricas gerenciais de Contact Center</li>
								<li>Habilidade para solução de conflitos interpessoais e melhoria do clima organizacional</li>
							</ul>
						</li>
						<li>
							Atribuições
							<ul>
								<li>Gerenciar e coordenar a atuação dos supervisores</li>
								<li>Planejar e executar os serviços da operação</li>
								<li>Responsabilizar-se operacionalmente pela Central de Atendimento 156 da PMSP</li>
								<li>Acompanhar e analisar os indicadores de desempenho da operação</li>
								<li>Dimensionar, alocar recursos e controlar as ausências</li>
								<li>Organizar e distribuir as tarefas diárias dos supervisores</li>
								<li>Controlar a alocação de “ilhas” de atendimento na Central</li>
								<li>Fornecer as informações técnicas necessárias ao Gestor do Contrato para apresentação à equipe de gestão da PMSP</li>
								<li>Promover campanhas motivacionais</li>
								<li>Construir clima organizacional sadio, relacionando-se bem com as equipes</li>
							</ul>
						</li>
						</ul>
					<p class="s2">4.7.1.10.	Gestor de Contrato</p>
						<ul>
						<li>
							Perfil
							<ul>
								<li>Formado em Curso Superior de Administração, Direito, Ciências Contábeis, Ciências Econômicas ou correlatas</li>
								<li>Domínio da língua portuguesa oral e escrita</li>
								<li>Experiência comprovada de, pelo menos 5 anos, em gestão de contratos de Contact Center</li>
								<li>Fluência, clareza e objetividade</li>
								<li>Sensibilidade social</li>
								<li>Boa dicção e audição</li>
								<li>Raciocínio lógico e matemático</li>
								<li>Liderança</li>
								<li>Dinamismo na busca de soluções para melhoria da qualidade dos serviços cortesia e civilidade</li>
								<li>Capacidade de agir com calma e tolerância</li>
								<li>Deter conhecimentos exigidos para o exercício do cargo</li>
								<li>Capacidade de comunicar-se e expressar-se corretamente em linguagem falada e escrita</li>
								<li>Amplo conhecimento de técnicas de gerenciamento de Contact Center</li>
								<li>Domínio técnico de métricas de Contact Center</li>
								<li>Domínio de sistemas de gestão, processos, pessoas e contratos</li>
								<li>Habilidade de gerenciar e de administrar conflitos</li>
								<li>Aprovação em programa de seleção a ser realizado pela CONTRATADA, com critérios validados pelo CONTRATANTE, inclusive treinamento em:</li>
									<ul class="sqr-ul">
										<li>Telemarketing</li>
										<li>Técnicas de gestão de pessoas</li>
									</ul>
								<li>Técnicas gerenciais específicas de Contact Center. </li>
							</ul>
						</li>
						<li>
							Atribuições
							<ul>
								<li>Interagir com o fiscal indicado pela CONTRATANTE em questões referentes à gestão operacional dos serviços, envolvendo a qualidade do atendimento, adequações necessárias ao processo de operação, redimensionamento e requalificação do pessoal envolvido.</li>
								<li>Analisar, em conjunto com a CONTRATANTE, os dados gerenciais de atendimento e propor melhorias, visando garantir à excelência do serviço prestado.</li>
								<li>Encaminhar mensalmente à CONTRATANTE toda a documentação necessária ao pagamento dos serviços prestados no período.</li>
								<li>Disponibilizar todos os relatórios e informações relativos à seleção, contratação e capacitação de pessoal, bem como os atinentes aos atendimentos efetuados, conforme a periodicidade estabelecida no presente Termo de Referência ou mediante solicitação da CONTRATANTE.</li>
							</ul>
						</li>
						</ul>

				<p>4.7.2.	A experiência requerida para estes profissionais é considerada a mínima possível para exercer as atividades previstas neste edital com desempenho satisfatório.</p>
				<p>4.7.3.	Contratação de Pessoal</p>
					<p class="s2">4.7.3.1.	A CONTRATADA deverá prover a contratação de pessoal necessária, em termos de quantidade e qualidade, para atender de forma adequada aos critérios de qualidade exigidos pela CONTRATANTE para a prestação dos serviços.</p>
					<p class="s2">4.7.3.2.	A contratação e alocação dos profissionais abaixo relacionados devem obedecer aos seguintes parâmetros:</p>

					<table>

					<tr class="tab-header">

					<td>Categoria Profissional</td>

					<td>Dimensionamento</td>

					</tr>

					<tr>

					<td>Gerente</td>
					<td>1 (um) para, no máximo, 3 (três) coordenadores</td>

					</tr>
					<tr>
						<td>Coordenador</td>
						<td>1 (um) para, no máximo, 4 (quatro) supervisores</td>
					</tr>
					<tr>
						<td>Supervisor</td>
						<td>1 (um) para, no máximo, 20 (vinte) operadores</td>
					</tr>
					<tr>
						<td>Monitor de Qualidade</td>
						<td>1 (um) para, no máximo, 50 (cinquenta) operadores</td>
					</tr>
					<tr>
						<td>Instrutor de Treinamento</td>
						<td>1 (um) para, no máximo, 30 (trinta) operadores</td>
					</tr>

					</table>

					<p class="s2">4.7.3.3.	A contratação de todo o quadro de funcionários da operação da CONTRATANTE deverá ser obrigatoriamente pelo regime CLT (Consolidação das Leis do Trabalho) e deverá adotar, no mínimo, os parâmetros fixados em Acordo e/ou Convenção Coletiva pelo Sindicato dos Trabalhadores em Telemarketing (SINTRATEL) e empresas de telemarketing da cidade de São Paulo e Grande São Paulo.</p>
					<p class="s2">4.7.3.4.	As ausências dos membros da equipe de operação para a prestação de serviços à CONTRATANTE, decorrentes de faltas, férias, licenças, greve, folgas e outros, deverão ser supridas pela CONTRATADA, sem custos adicionais ou prejuízos à operação da CONTRATANTE, devendo a mesma sempre se antever aos fatos;</p>
					<p class="s2">4.7.3.5.	A CONTRATADA se compromete a substituir qualquer de seus empregados designados para executar as tarefas que não estejam atendendo aos padrões de qualidade mínimos previsto neste Termo de Referência, no prazo de 05 (cinco) dias úteis, contados do recebimento de notificação emitida pelo fiscal do contrato da CONTRATANTE.</p>
					<p class="s2">4.7.3.6.	A CONTRATADA deverá manter, no mínimo, 1 (um) responsável pela empresa à disposição do Gestor do Contrato da CONTRATANTE 24 horas/dia, 7 dias na semana, podendo ser este responsável o Gestor do Contrato por parte da CONTRATADA, ou pessoa(s) por ele designada(s).</p>

				<Comments :attr="{id:commentId(), context:'4.7.	Recursos Humanos'}" v-if="estaConsulta.ativo == 1"></Comments>
				<h3>4.8.	Capacitação e Treinamento</h3>
				<p>A capacitação de pessoal envolve duas etapas: a primeira, inicial ou de formação, e a segunda, específica.</p>
				<p>4.8.1.	Capacitação Inicial ou de Formação</p>
					<p class="s2">4.8.1.1.	A CONTRATADA deverá comunicar e transmitir, com antecedência de 7 (sete) dias, o cronograma para CONTRATANTE.</p>
					<p class="s2">4.8.1.2.	Será de responsabilidade da CONTRATADA a capacitação para supervisores, analistas de tráfego, monitores de qualidade, multiplicadores e atendentes, versando sobre a natureza técnico-operacional, baseados nos sistemas e recursos tecnológicos disponíveis e utilizados pela Central de Atendimento para o atendimento aos cidadãos. Também se relacionam nesta categoria, as orientações e instruções que versem sobre técnicas e qualidade de atendimento.</p>
					<p class="s2">4.8.1.3.	A CONTRATADA, sem ônus para a CONTRATANTE, deverá promover a capacitação técnico-operacional, bem como os procedimentos operacionais de “front end”, nas seguintes ocasiões:</p>
					<ul>
						<li>Na implantação da operação.</li>
						<li>Em caso de eventual instalação de nova ferramenta ou recurso tecnológico aplicado ao atendimento.</li>
						<li>Sempre que houver mudança de atendimento dos produtos ou inclusão de novos temas ou assuntos.</li>
						<li>Sempre que forem contratados novos operadores, supervisores, monitores de qualidade e instrutores de treinamento, analistas de tráfego;</li>
						<li>Nos processos de reciclagem (garantindo a participação em, no mínimo, 2 (dois) cursos por ano, de todas as categorias envolvidas na prestação do serviço);</li>
						<li>Quando solicitada pela CONTRATANTE</li>
					</ul>
					<p class="s2">4.8.1.4.	A capacitação deverá contemplar o fornecimento de material didático de apoio necessários ao desenvolvimento dos cursos, como manuais e apostilas.</p>
					<p class="s2">4.8.1.5.	Carga horária mínima para a capacitação de formação é de 60 (sessenta) horas, independentemente do conteúdo</p>
					<p class="s2">4.8.1.6.	O conteúdo programático, de responsabilidade da CONTRATADA e da CONTRATANTE deve abordar no mínimo os seguintes assuntos:</p>
					<ul>
						<li>Contextualização sobre Central de Atendimento </li>
						<li>O contexto de atuação no qual se inserem os telefones 156, 199 e 153, aplicado pela CONTRATANTE</li>
						<li>Comunicação falada e escrita – técnicas e habilidades</li>
						<li>Padrões de Atendimento Telefônico</li>
						<li>Técnicas de negociação por telefone</li>
						<li>Legislação vigente sobre Telemarketing e Código de Ética do setor</li>
						<li>Sigilo profissional</li>
						<li>Conhecimentos sobre a CONTRATANTE, seus produtos e suas ferramentas e recursos tecnológicos.</li>
					</ul>
					<p class="s2">4.8.1.7.	A capacitação será conduzida por equipe de multiplicadores, qualificada e alocada pela CONTRATADA para essa função e, também, pela CONTRATANTE.</p>
					<p class="s2">4.8.1.8.	Esta equipe será responsável pelo planejamento, execução, acompanhamento e avaliação permanente dos treinamentos, mantendo a CONTRATANTE informada, por meio de relatórios, sobre cada ação realizada.</p>
				<p>4.8.2.	Capacitação Específica</p>
					<p class="s2">4.8.2.1.	Natureza estrutural, baseada nas informações, assuntos e serviços pertinentes à CONTRATANTE, utilizados como fonte e estrutura para o atendimento realizado pela Central.</p>
					<p class="s2">4.8.2.2.	A equipe da CONTRATANTE realizará a capacitação para supervisores, monitores de qualidade e multiplicadores, que deverão, por sua vez, capacitar os atendentes, sendo que os custos relativos às instalações, equipamentos, material de apoio, “coffee break” serão de responsabilidade da CONTRATADA.</p>
						<p class="s3">4.8.2.2.1.	Os Grupos de atendentes a serem capacitados por multiplicadores deverão ser formados com, no máximo, 30 (trinta) pessoas.</p>

			<Comments :attr="{id:commentId(), context:'4.8.	Capacitação e Treinamento'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">5.	REMUNERAÇÃO DOS SERVIÇOS </h2>
			<h3>5.1.	A remuneração mensal dos serviços será efetuada de acordo com o volume de atendimentos ativos e receptivos realizados, incluindo chat.</h3>
			<p>5.1.1.	Será de responsabilidade da CONTRATADA todos os custos da conta telefônica decorrentes do tráfego de ligações receptivas na linha do tipo discagem direta gratuita 156, bem como os custos relacionados às tarifas telefônicas ativas.</p>
				
			<Comments :attr="{id:commentId(), context:'subtitulo'}" v-if="estaConsulta.ativo == 1"></Comments>
			<h3>5.2.	A remuneração terá como base o "Valor de Atendimento – VA", no qual já deverão estar incluídas todas as despesas necessárias à plena execução do serviço contratado (recursos humanos, recursos técnicos e tecnológicos, sistemas, URAs, relatórios, etc), de administração/gerenciamento, de manutenção, de infraestrutura, todas as obrigações sociais, impostos e taxas incidentes sobre o serviço, inclusive ajuda alimentação, vale transporte, plano de saúde, programa de incentivo e premiação etc.</h3>
			<p>5.2.1.	Quando uma ligação for efetivamente atendida, ocorrendo ou não transferência de chamada, a CONTRATADA será remunerada uma única vez, isto é, pelo VA da chamada atendida.</p>
			<p>5.2.2.	Para efeitos de remuneração dos atendimentos realizados através do recurso CHAT, deverá ser considerado como referência 30% do valor realizado pelo atendimento telefônico.</p>
			<p>5.2.3.	Não será considerada, para fins de remuneração, mais do que uma ligação receptiva em um intervalo de 15 (quinze) minutos de um mesmo munícipe e/ou telefone.</p>
			<p>5.2.4.	A remuneração do atendimento ativo incidirá sobre o volume de ligações efetuadas e efetivamente concretizadas, isto é, pelo valor do VA da chamada concretizada.</p>
			<p>5.2.5.	A determinação do valor da remuneração mensal devido será calculada conforme a seguinte metodologia:</p>
				<p class="s2">5.2.5.1.	Apuração do quantitativo das ligações recebidas e atendidas receptivas concretizadas no período e o valor total correspondente (VAr)</p>	
				<p class="s2">5.2.5.2.	Apuração do quantitativo das ligações ativas realizadas e concretizadas no período e o valor total correspondente (VAa)</p>
				<ul>
					<li><strong>Observação:</strong> Não serão consideradas para fins de remuneração as ligações efetuadas que não forem atendidas, apresentarem sinal de ocupado, mensagem da operadora, número inválido, sinal de fax, linha muda.</li>
				</ul>
				<p class="s2">5.2.5.3.	Aplicação sobre o valor total, obtido no item “5.1”, dos decréscimos resultantes da pontuação conferida, conforme tabela 2 – Conversão de Pontos:</p>
				<ul>
					<li>VAm = (VAr + VAa + VAchat)*FD , onde:
						<ul>
							<li>VAm = Valor Mensal de Atendimento de operação do Contact Center </li>
							<li>VAr = Valor Mensal de Atendimento Receptivo</li>
							<li>VAa = Valor Mensal de Atendimento Ativo</li>
							<li>VAchat = Valor Mensal de Atendimento via chat</li>
							<li>VAsms = Valor Mensal de envio de mensagem de texto</li>
							<li>FD = Fator de Desempenho da Operação do Contact Center </li>
						</ul>
					</li>
				</ul>
				<p class="s2">5.2.5.4.	Apuração dos indicadores de qualidade do serviço, conforme indicadores da tabela 1 abaixo.</p>

				<table style="text-align: center;">
				  <tr>
				    <th colspan="5">Tabela 1 – Indicadores de Qualidade</th>
				  </tr>
				  <tr>
				    <th>Subitem</th>
				    <th>Meta</th>
				    <th>Desempenho Obtido</th>
				    <th>Decréscimo sobre o % do Fator de Desempenho</th>
				    <th>Reincidência[1]</th>
				  </tr>
				  <tr>
				    <td style="text-align: left" rowspan="3">Índice de Ligações Não Recebidas (INR)</td>
				    <td>INR ≤ 3%</td>
				    <td>INR ≤ 3%</td>
				    <td>-</td>
				    <td>-</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>3% &lt; INR ≤5%</td>
				    <td>1 pts </td>
				    <td>2 pts</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>INR &gt; 5%</td>
				    <td>2 pts</td>
				    <td>3 pts</td>
				  </tr>
				  <tr>
				    <td style="text-align: left" rowspan="5">Ligações atendidas em até 15 segundos (NS) para o 156</td>
				    <td>NS ≥ 85%</td>
				    <td>NS ≥ 85%</td>
				    <td>-</td>
				    <td>-</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>80% ≤ NS ≤ 84%</td>
				    <td>0,5 pt</td>
				    <td>1 pt</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>75% ≤ NS ≤ 79%</td>
				    <td>1,5 pts</td>
				    <td>2 pts</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>70% ≤ NS ≤ 74%</td>
				    <td>2,5 pts</td>
				    <td>3 pts</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>&lt; 70%</td>
				    <td>3,5 pts</td>
				    <td>4 pts</td>
				  </tr>
				  <tr>
				    <td style="text-align: left" rowspan="5">Índice de Ligações Abandonadas (ILA) para o 156</td>
				    <td>ILA ≤ 3%</td>
				    <td>≤ 5%</td>
				    <td>-</td>
				    <td>-</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>6%&lt; ILA ≤ 8%</td>
				    <td>0,5 pt</td>
				    <td>1 pt</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>8%&lt; ILA ≤ 9%</td>
				    <td>1 pt</td>
				    <td>1,5 pts</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>9%&lt; ILA ≤ 10%</td>
				    <td>1,5 pts</td>
				    <td>2 pts</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>ILA &gt; 10%</td>
				    <td>2 pts</td>
				    <td>3,5 pts</td>
				  </tr>
				  <tr>
				    <td style="text-align: left" rowspan="2">Índice de "Call back" (ICB)</td>
				    <td>≥ 90%</td>
				    <td>ICB ≥ 90% </td>
				    <td>-</td>
				    <td>-</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>ICB &lt; 90%</td>
				    <td> 1 pt</td>
				    <td>3 pts</td>
				  </tr>
				  <tr>
				    <td style="text-align: left" rowspan="2">Índice Atendimento registrado (IAR)</td>
				    <td>IAR = 100%</td>
				    <td>IAR = 100%</td>
				    <td>-</td>
				    <td>-</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>IAR ≤ 99%</td>
				    <td> 1 pt</td>
				    <td>2 pts</td>
				  </tr>
				  <tr>
				    <td style="text-align: left" rowspan="3">Índice de Satisfação do munícipe (IS)</td>
				    <td>IS ≥ 90%</td>
				    <td>IS ≥ 90%</td>
				    <td>-</td>
				    <td>-</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>85% ≤ IS &lt; 90%</td>
				    <td>1 pts</td>
				    <td>2 pts</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>IS &lt; 85%</td>
				    <td>3 pts</td>
				    <td>4 pts</td>
				  </tr>
				  <tr>
				    <td style="text-align: left" rowspan="2">Índice de disponibilidade da Solução Tecnológica (IST)</td>
				    <td>IST ≥ 99,7%</td>
				    <td>IST ≥ 99,7%</td>
				    <td>-</td>
				    <td>-</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>IST &lt; 99,7%</td>
				    <td>3 pts</td>
				    <td>4 pts</td>
				  </tr>
				  <tr>
				    <td style="text-align: left" rowspan="4">Ligações atendidas em até 15 segundos (NS) para 199, 153 e demais serviços a critérios<br>  da CONTRATANTE</td>
				    <td>NS ≥ 95%</td>
				    <td>NS ≥ 95%</td>
				    <td>-</td>
				    <td>-</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>95% ≤ NS ≤ 93%</td>
				    <td>0,5 pt</td>
				    <td>1 pt</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>93% ≤ NS ≤ 90%</td>
				    <td>1 pt</td>
				    <td>2 pts</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>&lt; 90%</td>
				    <td>2 pts</td>
				    <td>3 pts</td>
				  </tr>
				  <tr>
				    <td style="text-align: left" rowspan="4">Índice de Ligações Abandonadas (ILA) para 199, 153 e demais serviços a critérios da<br>  CONTRATANTE</td>
				    <td>ILA ≤ 2%</td>
				    <td>≤ 2%</td>
				    <td>-</td>
				    <td>-</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>2%≤ ILA ≤ 3%</td>
				    <td>0,5 pt</td>
				    <td>1 pt</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>3%≤ ILA ≤ 5%</td>
				    <td>1 pt</td>
				    <td>2 pts</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>9%≤ ILA ≤ 10%</td>
				    <td>1,5 pts</td>
				    <td>2 pts</td>
				  </tr>
				  <tr>
				    <td style="text-align: left" rowspan="3">Índice de CHAT atendidos em até 60 segundos para <br>  serviços definidos a critérios da CONTRATANTE</td>
				    <td>CHT ≥ 90%</td>
				    <td>CHT ≥ 90%</td>
				    <td>-</td>
				    <td>-</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>85% ≤ CHT ≤ 90%</td>
				    <td>0,5 pt</td>
				    <td>0,5 pt</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>CHT &lt; 90%</td>
				    <td>1 pt</td>
				    <td>1 pts</td>
				  </tr>
				  <tr>
				    <td style="text-align: left" rowspan="4">Índice de CHAT Abandonados</td>
				    <td>WCA ≤ 2%</td>
				    <td>≤ 2%</td>
				    <td>-</td>
				    <td>-</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>2%&lt; WCA ≤ 3%</td>
				    <td>0,5 pt</td>
				    <td>1 pt</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>3%&lt; WCA ≤ 5%</td>
				    <td>1 pt</td>
				    <td>2 pts</td>
				  </tr>
				  <tr>
				    <td>-</td>
				    <td>9%&lt; WCA ≤ 10%</td>
				    <td>1,5 pts</td>
				    <td>2 pts</td>
				  </tr>
				</table>

				<table style="text-align: center;">
				  <tr>
				    <th colspan="2">Tabela 2 – Conversão de Pontos</th>
				  </tr>
				  <tr>
				    <th>Pontos</th>
				    <th>FD (% fator de desempenho)</th>
				  </tr>
				  <tr>
				    <td>1</td>
				    <td>100</td>
				  </tr>
				  <tr>
				    <td>2</td>
				    <td>99</td>
				  </tr>
				  <tr>
				    <td>3</td>
				    <td>98</td>
				  </tr>
				  <tr>
				    <td>4</td>
				    <td>97</td>
				  </tr>
				  <tr>
				    <td>5</td>
				    <td>96</td>
				  </tr>
				  <tr>
				    <td>6</td>
				    <td>95</td>
				  </tr>
				  <tr>
				    <td>7</td>
				    <td>94</td>
				  </tr>
				  <tr>
				    <td>8</td>
				    <td>93</td>
				  </tr>
				  <tr>
				    <td>9</td>
				    <td>92</td>
				  </tr>
				  <tr>
				    <td>10</td>
				    <td>91</td>
				  </tr>
				  <tr>
				    <td>11</td>
				    <td>90</td>
				  </tr>
				  <tr>
				    <td>12</td>
				    <td>89</td>
				  </tr>
				  <tr>
				    <td>13</td>
				    <td>88</td>
				  </tr>
				  <tr>
				    <td>14</td>
				    <td>87</td>
				  </tr>
				  <tr>
				    <td>15 a 18</td>
				    <td>86</td>
				  </tr>
				  <tr>
				    <td>19 a 24</td>
				    <td>85</td>
				  </tr>
				  <tr>
				    <td>25 a 30</td>
				    <td>80</td>
				  </tr>
				  <tr>
				    <td>Acima de 30</td>
				    <td>70</td>
				  </tr>
				</table>

				<p class="s2">5.2.5.5.	Em casos de contingência pela ocorrência de problemas não controláveis pela CONTRATADA (catástrofes naturais), não haverá aplicação de descontos previstos, sendo que a remuneração se fará pelo atendimento efetivamente prestado.</p>
				<p class="s2">5.2.5.6.	Para a proposta comercial, a CONTRATADA deverá preencher os seguintes valores:</p>

				<table>
				  <tr>
				    <th colspan="3">VALORES DA PROPOSTA</th>
				  </tr>
				  <tr>
				    <th>ITEM</th>
				    <th>QUANTIDADE (24 MESES)</th>
				    <th>VALOR GLOBAL</th>
				  </tr>
				  <tr>
				    <td style="text-align: center;">VA</td>
				    <td style="text-align: right;">32.000.000</td>
				    <td> </td>
				  </tr>
				  <tr>
				    <td style="text-align: center;">VASMS</td>
				    <td style="text-align: right;">12.000.000</td>
				    <td> </td>
				  </tr>
				  <tr>
				    <td style="text-align: center;">VAchat</td>
				    <td style="text-align: right;">960.000</td>
				    <td> </td>
				  </tr>
				  <tr>
				    <td colspan="2" style="text-align: center; font-weight: bold;">TOTAL</td>
				    <td></td>
				  </tr>
				  <tr>
				    <td colspan="3">
				    <strong>VA</strong> = Valor de Atendimento Receptivo + Valor de Atendimento Ativo (incluso operação do Contact Center e toda estrutura necessária)<br>
				    <strong>VAsms</strong> = Valor de envio de mensagens de texto<br>
				    <strong>VAchat</strong> = Valor de Atendimento realizados através canal de Chat (incluso operação do Contact Center e toda estrutura necessária)</td>
				  </tr>
				</table>

				<p class="s2">5.2.5.7.	Na apuração dos indicadores de qualidade descritos no item 5.2.5.4, toda vez que os indicadores forem descumpridos em razão de um aumento imprevisível de ligações entregues ao DAC da Contratada, os dias que caracterizarem excepcionalidade poderão ser desconsiderados do cálculo de desempenho obtido para fins de apuração de Remuneração Mensal.</p>
					<p class="s3">5.2.5.7.1.	Excepcionalidade se caracteriza por volume superior a 15% em relação à média dos dias correspondentes aos últimos 12 meses</p>
				<p class="s2">5.2.5.8.	Nos casos em que a Contratada desejar fazer uso da cláusula de atipicidade, deverá comprovar a(s) ocorrência(s) conforme item 5.2.5.7.1, via ofício, na mesma oportunidade em que enviar a documentação para faturamento. Nestes casos, a fiscalização designada pela Contratante terá cinco dias úteis para análise, decisão e comunicação à Contratante.</p>
				<p class="s2">5.2.5.9.	Para que os dias considerados excepcionais sejam desconsiderados do cálculo de desempenho obtido, deverá a CONTRATADA observar as seguintes condições:</p>
					<p class="s3">5.2.5.9.1.	Se, ao final do período mensal compreendido (de acordo com a data de assinatura do contrato), o desempenho obtido resultar em decréscimo sobre o percentual do fator de desempenho.</p>

				<Comments :attr="{id:commentId(), context:'5.2.	A remuneração terá como base ...'}" v-if="estaConsulta.ativo == 1"></Comments>

		</section>

		<section>
				<h2 class="titulo" indent="1">6.	JUSTIFICATIVAS TÉCNICAS</h2>
				<h3>6.1.	Desafios da Administração pública</h3>
				<p>Um dos grandes desafios da administração pública atualmente é assegurar os direitos de cidadania aos usuários de serviços sob responsabilidade do Estado. Com a média mensal de 600 mil ligações recebidas, 500 mil atendimentos e levando em consideração que a central precisa estar preparada para absorver eventuais novos serviços,, sempre tendo em vista a melhoria do atendimento ao usuário, é mister que a PMSP mantenha e aprimore a central de atendimento 156, 199 e 153, assegurando rapidez e eficiência para o usuário final. O serviço destas centrais de atendimento telefônico se enquadra como de natureza continuada, são uma modalidade de atendimento já conhecida e utilizada pelos cidadãos, operando durante 24h por dia, todos os dias do ano. A modalidade de atendimento telefônico é de suma importância para a municipalidade, em que pese o fato de que significativa parcela da população residente em São Paulo ver, nesta modalidade de atendimento, uma alternativa prática, segura e gratuita para solucionar pendências e solicitar serviços cuja natureza não exija atendimento presencial.</p>
					
				<Comments :attr="{id:commentId(), context:'subtitulo'}" v-if="estaConsulta.ativo == 1"></Comments>

			
			<h3>6.2.	Índices de qualificação econômico-financeira</h3>
			<p>6.2.1.	Para fins de qualificação econômico-financeira exige-se, apenas, o mínimo previsto em lei, a fim de não reduzir a competitividade do certame.</p>
			<p>6.2.2.	Exige-se a demonstração do balanço patrimonial a fim de conhecer a situação econômica da empresa vencedora.</p>
			<p>6.2.3. Qualificação econômico-financeira:</p>
			<p class="s2">
				6.2.3.1. Certidão negativa de pedido de falência, expedida pelo distribuidor da sede da pessoa jurídica em data não superior a 60 dias da data da abertura do certame, se outro prazo não constar do documento.
			</p>
				<p class="s3">
					6.2.3.1.1. Se a licitante não for sujeita ao regime falimentar, a certidão mencionada deverá ser substituída por certidão negativa de ações de insolvência civil, ou documento equivalente.
				</p>
			<p class="s2">
				6.2.3.2. Balanço patrimonial e demonstrações contábeis do último exercício social, já exigíveis e apresentados na forma da lei, que comprovem a situação financeira da empresa, vedada sua substituição por balanço ou balancetes provisórios, podendo ser atualizados por índices oficiais quando encerrados há mais de três meses da data da apresentação da proposta;
			</p>
				<p class="s3">
					6.2.3.2.1. Somente empresas que ainda não tenham completado seu primeiro exercício fiscal poderão comprovar sua capacidade econômico-financeira por meio de	balancetes mensais, conforme disposto na Lei Federal nº 8.541, de 23 de	dezembro de 1992;
				</p>
			<p class="s2">
				6.2.3.3. No caso de sociedade simples, a proponente deverá apresentar certidão dos processos cíveis em andamento relativos à solvência ou não da licitante, expedido pelo distribuidor da sede de pessoa jurídica, em data não superior a 60 (sessenta) dias da data da abertura do certame, se outro prazo não constar do documento.
			</p>
				
			<Comments :attr="{id:commentId(), context:'6.2.	Índices de qualificação econômico-financeira'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>6.3.	Implantação, Operação e Gestão de Centrais de Atendimento</h3>
			<p>6.3.1. Volumetria de atendimento (receptivo e ativo)</p>
				<p class="s2">
					6.3.1.1. Para o cálculo da estimativa de volumetria de 32.000.000 de ligações bianuais foram utilizados os seguintes dados referentes aos anos de 2017, 2018 e 2019:
				</p>
			<p><strong>TABELA 1:</strong> volumetria receptiva</p>
			<table>
			  <tr>
			    <th colspan="6">CONSOLIDADO GERAL DE RECEPTIVOS</th>
			  </tr>
			  <tr>
			    <th>MÊS </th>
			    <th>*2016 </th>
			    <th>2017 </th>
			    <th>2018 </th>
			    <th>2019 </th>
			    <th>Total Geral</th>
			  </tr>
			  <tr>
			    <td>Janeiro </td>
			    <td></td>
			    <td style="text-align: right">582.245</td>
			    <td style="text-align: right">731.843</td>
			    <td style="text-align: right">633.893</td>
			    <td style="text-align: right">1.947.981</td>
			  </tr>
			  <tr>
			    <td>Fevereiro </td>
			    <td></td>
			    <td style="text-align: right">767.221</td>
			    <td style="text-align: right">732.622</td>
			    <td style="text-align: right">792.640</td>
			    <td style="text-align: right">2.292.483</td>
			  </tr>
			  <tr>
			    <td>Março </td>
			    <td></td>
			    <td style="text-align: right">677.481</td>
			    <td style="text-align: right">717.507</td>
			    <td style="text-align: right">593.303</td>
			    <td style="text-align: right">1.988.291</td>
			  </tr>
			  <tr>
			    <td>Abril </td>
			    <td></td>
			    <td style="text-align: right">447.049</td>
			    <td style="text-align: right">670.549</td>
			    <td style="text-align: right">652.737</td>
			    <td style="text-align: right">1.770.335</td>
			  </tr>
			  <tr>
			    <td>Maio * </td>
			    <td style="text-align: right">112.802 </td>
			    <td style="text-align: right">474.527 </td>
			    <td style="text-align: right">579.172 </td>
			    <td style="text-align: right">652.092 </td>
			    <td style="text-align: right">1.818.593</td>
			  </tr>
			  <tr>
			    <td>Junho ** </td>
			    <td style="text-align: right">451.586 </td>
			    <td style="text-align: right">417.551 </td>
			    <td style="text-align: right">533.341 </td>
			    <td style="text-align: right">491.683 </td>
			    <td style="text-align: right">1.894.161</td>
			  </tr>
			  <tr>
			    <td>Julho </td>
			    <td style="text-align: right">498.028 </td>
			    <td style="text-align: right">426.014 </td>
			    <td style="text-align: right">508.032 </td>
			    <td style="text-align: right">603.678 </td>
			    <td style="text-align: right">2.035.752</td>
			  </tr>
			  <tr>
			    <td>Agosto </td>
			    <td style="text-align: right">644.354 </td>
			    <td style="text-align: right">522.870 </td>
			    <td style="text-align: right">608.505 </td>
			    <td style="text-align: right">727.389 </td>
			    <td style="text-align: right">2.503.118</td>
			  </tr>
			  <tr>
			    <td>Setembro </td>
			    <td style="text-align: right">558.068 </td>
			    <td style="text-align: right">439.360 </td>
			    <td style="text-align: right">523.737 </td>
			    <td style="text-align: right">694.362 </td>
			    <td style="text-align: right">2.215.527</td>
			  </tr>
			  <tr>
			    <td>Outubro </td>
			    <td style="text-align: right">594.761 </td>
			    <td style="text-align: right">497.022 </td>
			    <td style="text-align: right">522.623 </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">1.614.406</td>
			  </tr>
			  <tr>
			    <td>Novembro </td>
			    <td style="text-align: right">541.247 </td>
			    <td style="text-align: right">508.057 </td>
			    <td style="text-align: right">473.818 </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">1.523.122</td>
			  </tr>
			  <tr>
			    <td>Dezembro </td>
			    <td style="text-align: right">426.445 </td>
			    <td style="text-align: right">458.718 </td>
			    <td style="text-align: right">398.522 </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">1.283.685</td>
			  </tr>
			  <tr>
			    <th>Total Geral</th>
			    <th>3.827.291 </th>
			    <th>6.218.115 </th>
			    <th>7.000.271 </th>
			    <th>5.841.777 </th>
			    <th>22.887.454</th>
			  </tr>
			</table>
			<p>* No mês de Maio/2016 teve o início do contrato nº 007/2016/SMG
			<br>* * No mês de Junho/2016 teve início da operação de Call Center
			<br><strong>Fonte:</strong> sistema de gerenciamento de demandas da então prestadora do serviço de Call Center</p>
			<br>
			<p><strong>TABELA 2:</strong> volumetria ativa</p>
			<table>
			  <tr>
			    <th colspan="6">CONSOLIDADO GERAL DE ATIVOS RECEBIDOS</th>
			  </tr>
			  <tr>
			    <th>MÊS </th>
			    <th>2016 </th>
			    <th>2017 </th>
			    <th>2018 </th>
			    <th>2019 </th>
			    <th>Total Geral</th>
			  </tr>
			  <tr>
			    <td>Janeiro </td>
			    <td style="text-align: right">118.136 </td>
			    <td style="text-align: right">275.516 </td>
			    <td style="text-align: right">168.735 </td>
			    <td style="text-align: right">608.222 </td>
			    <td style="text-align: right">1.170.609</td>
			  </tr>
			  <tr>
			    <td>Fevereiro </td>
			    <td style="text-align: right">207.484 </td>
			    <td style="text-align: right">217.183 </td>
			    <td style="text-align: right">182.878 </td>
			    <td style="text-align: right">613.088 </td>
			    <td style="text-align: right">1.220.633</td>
			  </tr>
			  <tr>
			    <td>Março </td>
			    <td style="text-align: right">318.813 </td>
			    <td style="text-align: right">181.951 </td>
			    <td style="text-align: right">81.812 </td>
			    <td style="text-align: right">647.378 </td>
			    <td style="text-align: right">1.229.954</td>
			  </tr>
			  <tr>
			    <td>Abril </td>
			    <td style="text-align: right">206.438 </td>
			    <td style="text-align: right">204.041 </td>
			    <td style="text-align: right">163.319 </td>
			    <td style="text-align: right">609.836 </td>
			    <td style="text-align: right">1.183.634</td>
			  </tr>
			  <tr>
			    <td>Maio </td>
			    <td style="text-align: right">219.571 </td>
			    <td style="text-align: right">195.072 </td>
			    <td style="text-align: right">253.849 </td>
			    <td style="text-align: right">626.351 </td>
			    <td style="text-align: right">1.294.843</td>
			  </tr>
			  <tr>
			    <td>Junho </td>
			    <td style="text-align: right">220.325 </td>
			    <td style="text-align: right">167.367 </td>
			    <td style="text-align: right">90.012 </td>
			    <td style="text-align: right">476.509 </td>
			    <td style="text-align: right">954.213</td>
			  </tr>
			  <tr>
			    <td>Julho </td>
			    <td style="text-align: right">209.053 </td>
			    <td style="text-align: right">186.814 </td>
			    <td style="text-align: right">340.821 </td>
			    <td style="text-align: right">533.521 </td>
			    <td style="text-align: right">1.270.209</td>
			  </tr>
			  <tr>
			    <td>Agosto </td>
			    <td style="text-align: right">209.931 </td>
			    <td style="text-align: right">162.609 </td>
			    <td style="text-align: right">214.025 </td>
			    <td style="text-align: right">517.075 </td>
			    <td style="text-align: right">1.103.640</td>
			  </tr>
			  <tr>
			    <td>Setembro </td>
			    <td style="text-align: right">237.497 </td>
			    <td style="text-align: right">170.691 </td>
			    <td style="text-align: right">246.423 </td>
			    <td style="text-align: right">461.349 </td>
			    <td style="text-align: right">1.115.960</td>
			  </tr>
			  <tr>
			    <td>Outubro </td>
			    <td style="text-align: right">225.553 </td>
			    <td style="text-align: right">151.025 </td>
			    <td style="text-align: right">539.439 </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">916.017</td>
			  </tr>
			  <tr>
			    <td>Novembro </td>
			    <td style="text-align: right">215.298 </td>
			    <td style="text-align: right">121.066 </td>
			    <td style="text-align: right">452.761 </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">789.125</td>
			  </tr>
			  <tr>
			    <td>Dezembro </td>
			    <td style="text-align: right">182.274 </td>
			    <td style="text-align: right">209.794 </td>
			    <td style="text-align: right">491.014 </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">883.082</td>
			  </tr>
			  <tr>
			    <th style="text-align: left">Total Geral </th>
			    <th style="text-align: right">2.570.373 </th>
			    <th style="text-align: right">2.243.129 </th>
			    <th style="text-align: right">3.225.088 </th>
			    <th style="text-align: right">5.093.329 </th>
			    <th style="text-align: right">13.131.919</th>
			  </tr>
			</table>
			<p><strong>Fonte:</strong> sistema de gerenciamento de demandas da então prestadora do serviço de Call Center.</p>
			<br>
				<p class="s2">
					6.3.1.2. Percebe-se um aumento da volumetria ao longo dos anos de 2017 a 2019:
					<ul>
						<li>Aumento de 21% de 2017 para 2018</li>
						<li>Aumento de 43% de 2018 para 2019</li>
					</ul>
				</p>
				<p class="s2">6.3.1.3. Desse modo, temos os seguintes dados:</p>
			<p><strong>TABELA 3:</strong>Volumetria consolidada</p>
			<Imagem :dados="{
					tipo: 'coluna',
					caption: 'Figura 3 - Volumetria consolidada',
					url: imgSrc('arquivos/tr-contact-center/figura_3-volumetria_consolidada.png')
				}"></Imagem>
			<p><strong>Fonte:</strong> sistema de gerenciamento da então prestadora do serviço de Call Center</p>
			<p class="s2">6.3.1.4. A volumetria da central telefônica 156 também varia em função da sazonalidade inerente ao cotidiano e é impactada em diversas ocorrências da cidade de São Paulo. Exemplos:</p>
				<p class="s3">6.3.1.4.1. Greves do transporte coletivo: em junho/19, Greve afeta transporte público e escolas de SP. <a href="https://noticias.r7.com/sao-paulo/greve-afeta-transporte-publico-e-escolas-de-sp-rodizio-esta-mantido-14062019" target="_blank">https://noticias.r7.com/sao-paulo/greve-afeta-transporte-publico-e-escolas-de-sp-rodizio-esta-mantido-14062019</a>. Fonte R7 14/06/2019. Conforme gráfico abaixo, observa-se que o volume de ligações recebidas foi 246% superior ao da semana anterior:</p>
				<Imagem :dados="{
					tipo: 'coluna',
					caption: 'Figura 4 - Gráfico sazonalidade',
					url: imgSrc('arquivos/tr-contact-center/figura_4-grafico_sazonalidade.png')
				}"></Imagem>
				<p><strong>Fonte:</strong> sistema de gerenciamento da então prestadora do serviço de Call Center.</p>
				<p>
					6.3.1.4.2. Alterações em tarifas de transportes: no mês de maio/19, houve a notícia de prorrogação do prazo de créditos do Bilhete Único. <a href="https://noticias.r7.com/sao-paulo/prefeitura-de-sao-paulo-prorroga-prazo-de-creditos-do-bilhete-unico-23052019" target="_blank">https://noticias.r7.com/sao-paulo/prefeitura-de-sao-paulo-prorroga-prazo-de-creditos-do-bilhete-unico-23052019</a> - Fonte: R7 em 23/05/2019. Conforme gráfico abaixo, observa-se que o volume de ligações recebidas cresceu nas duas últimas semanas do mês, principalmente a partir de 27/05, o que gerou impactos no Nível de Serviço do atendimento, com um aumento de 27% na quantidade de ligações:
				</p>
			<Imagem :dados="{
					tipo: 'coluna',
					caption: 'Figura 5 – Gráfico Transportes',
					url: imgSrc('arquivos/tr-contact-center/figura_5-grafico_transportes.png')
				}"></Imagem>
				<p><strong>Fonte:</strong> sistema de gerenciamento da então prestadora do serviço de Call Center</p>
				<p class="s3">
					6.3.1.4.3. Operação Baixas Temperaturas: em Agosto/2019, a Prefeitura de SP intensificou ações para acolher moradores de rua. <a href="https://www.noticiasaominuto.com.br/brasil/1000611/prefeitura-de-sp-intensificaacoes-para-acolher-moradores-de-rua" target="_blank">https://www.noticiasaominuto.com.br/brasil/1000611/prefeitura-de-sp-intensificaacoes-para-acolher-moradores-de-rua</a> Fonte: Notícias ao Minuto, em 05/08/2019. Com as baixas temperaturas apresentadas no período de 03 a 05 de agosto, houve alteração no volume de ligações recebidas nos canais da Solução de Atendimento SP156, com aumento de, em média, 64% no volume de ligações:
				</p>
				<Imagem :dados="{
					tipo: 'coluna',
					caption: 'Figura 6 - Gráfico Baixas Temperaturas',
					url: imgSrc('arquivos/tr-contact-center/figura_6-grafico_baixas_temperaturas.png')
				}"></Imagem>
				<p><strong>Fonte: </strong> sistema de gerenciamento da então prestadora do serviço de call center.</p>

				<p class="s3">
					6.3.1.4.4. Campanhas de vacinação: em agosto/19, a vacinação contra o sarampo em escolas de São Paulo começou. <a href="https://www.metrojornal.com.br/foco/2019/08/05/vacinacao-sarampo-escolas-sp-comeca.html" target="_blank">https://www.metrojornal.com.br/foco/2019/08/05/vacinacao-sarampo-escolas-sp-comeca.html</a> Fonte: Metro Jornal, em 05/08/2019. Conforme gráfico abaixo, verifica-se, em agosto, um grande volume de ligações no serviço “Geral - Saúde”. A quantidade de ligações recebidas foi, em média, 45% superior, índice reflexo do tema tratado na matéria veiculada, visto que, normalmente, esse serviço recebe cerca de 600 ligações/dia:
				</p>
				<Imagem :dados="{
					tipo: 'coluna',
					caption: 'Figura 7 - Gráfico campanhas vacinação',
					url: imgSrc('arquivos/tr-contact-center/figura_7-grafico_campanhas_vacinacao.png')
				}"></Imagem>
				<p><strong>Fonte: </strong> sistema de gerenciamento da então prestadora do serviço de Call Center</p>

			<p class="s2">6.3.1.5. Também impacta na volumetria a expansão de serviços atendidos na modalidade receptiva, em função da centralização do atendimento municipal na central telefônica 156 e, para a modalidade ativa, no aumento de secretarias que usam esta modalidade para contatar diretamente os cidadãos.</p>
			<p class="s2">6.3.1.6. Dadas às variações de volumetria possíveis, explicadas acima, optou-se por utilizar a medida estatística de desvio-padrão.</p>
			<p class="s2">6.3.1.7. Aplicando o indicador de 2 desvios-padrão à media global apresentada na Tabela 3, obtém-se o seguinte resultado:</p>

			<p><strong>TABELA 4:</strong> Volumetria estimada</p>
			<table style="max-width: 400px">
				<tr>
					<td>A = Média Global</td>
					<td style="text-align: right">924.076</td>
				</tr>
				<tr>
					<td>B = Desvio Padrão</td>
					<td style="text-align: right">193.957</td>					
				</tr>
				<tr>
					<td>C = 2x desvio padrão</td>
					<td style="text-align: right">387.914</td>
				</tr>
				<tr>
					<td>Valor mensal = A+C</td>
					<td style="text-align: right">1.311.990</td>
				</tr>
				<tr>
					<td><strong>24 meses</strong></td>
					<td style="text-align: right"><strong>31.487.760</strong></td>
				</tr>
			</table>
			<p class="s2">6.3.1.8. Assim, após arredondamento, foi considerado para o teto deste contrato o total de 32.000.000 de ligações (receptivo e ativo)</p>
		<p>6.3.2. Volumetria de mensagens de texto</p>
			<p class="s2">6.3.2.1. A quantidade de mensagens de texto encaminhadas sofreu um aumento expressivo de 2017 a 2019, pois foi identificado pela municipalidade que este recurso é vital para transmissão de orientações e avisos de natureza pública, tais como lembrete com as datas de consultas médicas agendadas na rede municipal, avisos sobre o início de campanhas de vacinação ou mesmo envio do protocolo de solicitação de serviços demandados pela população, de modo que esta possa acompanhar o andamento em um dos canais de atendimento disponibilizados pela prefeitura.</p>
			<p class="s2">6.3.2.2. Assim, registrou-se um aumento de 59% de 2017 para 2018 e de 923% de 2018 para 2019. Seguem os dados:</p>
			<p><strong>TABELA 5: </strong>Volumetria de envios de SMS</p>
			<table>
			  <tr>
			    <th>MÊS </th>
			    <th>2.016 </th>
			    <th>2.017 </th>
			    <th>2.018 </th>
			    <th>2.019 </th>
			    <th>Total Geral</th>
			  </tr>
			  <tr>
			    <td>Janeiro </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">1.850</td>
			    <td style="text-align: right">26.499</td>
			    <td style="text-align: right">96.897</td>
			    <td style="text-align: right">125.246</td>
			  </tr>
			  <tr>
			    <td>Fevereiro </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">11.810</td>
			    <td style="text-align: right">25.893</td>
			    <td style="text-align: right">294.066</td>
			    <td style="text-align: right">331.769</td>
			  </tr>
			  <tr>
			    <td>Março </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">9.805</td>
			    <td style="text-align: right">29.455</td>
			    <td style="text-align: right">400.562</td>
			    <td style="text-align: right">439.822</td>
			  </tr>
			  <tr>
			    <td>Abril </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">11.532</td>
			    <td style="text-align: right">28.109</td>
			    <td style="text-align: right">524.897</td>
			    <td style="text-align: right">564.538</td>
			  </tr>
			  <tr>
			    <td>Maio </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">27.943</td>
			    <td style="text-align: right">32.462</td>
			    <td style="text-align: right">336.496</td>
			    <td style="text-align: right">396.901</td>
			  </tr>
			  <tr>
			    <td>Junho </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">24.725</td>
			    <td style="text-align: right">9.420</td>
			    <td style="text-align: right">493.518</td>
			    <td style="text-align: right">527.663</td>
			  </tr>
			  <tr>
			    <td>Julho </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">22.315</td>
			    <td style="text-align: right">12.961</td>
			    <td style="text-align: right">538.725</td>
			    <td style="text-align: right">574.001</td>
			  </tr>
			  <tr>
			    <td>Agosto </td>
			    <td style="text-align: right">5.914 </td>
			    <td style="text-align: right">22.705 </td>
			    <td style="text-align: right">37.665 </td>
			    <td style="text-align: right">580.628 </td>
			    <td style="text-align: right">646.912</td>
			  </tr>
			  <tr>
			    <td>Setembro </td>
			    <td style="text-align: right">5.953 </td>
			    <td style="text-align: right">19.519 </td>
			    <td style="text-align: right">29.216 </td>
			    <td style="text-align: right">355.166 </td>
			    <td style="text-align: right">409.854</td>
			  </tr>
			  <tr>
			    <td>Outubro </td>
			    <td style="text-align: right">5.215 </td>
			    <td style="text-align: right">18.831 </td>
			    <td style="text-align: right">39.161 </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">63.207</td>
			  </tr>
			  <tr>
			    <td>Novembro </td>
			    <td style="text-align: right">5.351 </td>
			    <td style="text-align: right">22.978 </td>
			    <td style="text-align: right">32.014 </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">60.343</td>
			  </tr>
			  <tr>
			    <td>Dezembro </td>
			    <td style="text-align: right">5.451 </td>
			    <td style="text-align: right">29.015 </td>
			    <td style="text-align: right">51.016 </td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">85.482</td>
			  </tr>
			  <tr>
			    <th>Total Geral </th>
			    <th style="text-align: right">27.884 </th>
			    <th style="text-align: right">223.028 </th>
			    <th style="text-align: right">353.871 </th>
			    <th style="text-align: right">3.620.955 </th>
			    <th style="text-align: right">4.225.738</th>
			  </tr>
			</table>
			<p><strong>Fonte: </strong>sistema de gerenciamento da então prestadora do serviço de Call Center</p>
			<p class="s2">6.3.2.3. Dadas às variações de volumetria possíveis, explicadas acima, optou-se por utilizar a medida estatística de desvio-padrão.</p>
			<p class="s2">6.3.2.4. Aplicando o indicador de 1 desvio-padrão à media de out/2018 a set/2019 apresentada na Tabela 5, apresenta-se o seguinte resultado:</p>

			<p><strong>TABELA 6: </strong>quantidade estimada de encaminhamentos</p>
			<table style="max-width: 400px">
			  <tr>
			    <td>A = Média Out/2018 a Set/2019 </td>
			    <td style="text-align: right">311.929</td>
			  </tr>
			  <tr>
			    <td>B = Desvio Padrão </td>
			    <td style="text-align: right">167.211</td>
			  </tr>
			  <tr>
			    <td>Valor mensal = A+B </td>
			    <td style="text-align: right">479.140</td>
			  </tr>
			  <tr>
			    <td>24 meses </td>
			    <td style="text-align: right">11.499.363</td>
			  </tr>
			</table>
			<p class="s2">6.3.2.5. Assim, após arredondamento, foi considerado para o teto deste contrato o total de 12.000.00 de mensagens.</p>
		<p>6.3.3. Volumetria de atendimento via chat</p>
			<p class="s2">
				6.3.3.1. Com a divulgação do portal de atendimento 156 (<a href="www.sp156.sp.gov.br">www.sp156.sp.gov.br</a>) e consequente disseminação deste canal perante a população como mais uma forma rápida de solicitar serviços municipais, a quantidade de interações via chat sofreu um aumento expressivo de 2017 a 2019.
			</p>
			<p class="s2">6.3.3.2. Este aumento foi de 43% (de 2017 para 2018) e 79% (de 2018 para 2019), vide tabela abaixo:</p>
			<p><strong>TABELA 7:</strong> Interações realizadas</p>
			<table>
			  <tr>
			    <th rowspan="2">MÊS</th>
			    <th colspan="3">ANO</th>
			    <th rowspan="2">Total</th>
			  </tr>
			  <tr>
			    <th>2017</th>
			    <th>2018</th>
			    <th>2019</th>
			  </tr>
			  <tr>
			    <td>Janeiro</td>
			    <td style="text-align: right">3.252</td>
			    <td style="text-align: right">8.592</td>
			    <td style="text-align: right">11.057</td>
			    <td style="text-align: right">22.901</td>
			  </tr>
			  <tr>
			    <td>Fevereiro</td>
			    <td style="text-align: right">3.215</td>
			    <td style="text-align: right">11.681</td>
			    <td style="text-align: right">18.941</td>
			    <td style="text-align: right">33.837</td>
			  </tr>
			  <tr>
			    <td>Março</td>
			    <td style="text-align: right">2.262</td>
			    <td style="text-align: right">11.321</td>
			    <td style="text-align: right">14.968</td>
			    <td style="text-align: right">28.551</td>
			  </tr>
			  <tr>
			    <td>Abril</td>
			    <td style="text-align: right">5.133</td>
			    <td style="text-align: right">10.064</td>
			    <td style="text-align: right">29.215</td>
			    <td style="text-align: right">44.412</td>
			  </tr>
			  <tr>
			    <td>Maio</td>
			    <td style="text-align: right">9.419</td>
			    <td style="text-align: right">9.849</td>
			    <td style="text-align: right">28.184</td>
			    <td style="text-align: right">47.452</td>
			  </tr>
			  <tr>
			    <td>Junho</td>
			    <td style="text-align: right">9.003</td>
			    <td style="text-align: right">12.464</td>
			    <td style="text-align: right">24.726</td>
			    <td style="text-align: right">46.193</td>
			  </tr>
			  <tr>
			    <td>Julho</td>
			    <td style="text-align: right">9.829</td>
			    <td style="text-align: right">11.668</td>
			    <td style="text-align: right">33.237</td>
			    <td style="text-align: right">54.734</td>
			  </tr>
			  <tr>
			    <td>Agosto</td>
			    <td style="text-align: right">11.381</td>
			    <td style="text-align: right">13.473</td>
			    <td style="text-align: right">35.129</td>
			    <td style="text-align: right">59.983</td>
			  </tr>
			  <tr>
			    <td>Setembro</td>
			    <td style="text-align: right">11.909</td>
			    <td style="text-align: right">11.700</td>
			    <td style="text-align: right">36.856</td>
			    <td style="text-align: right">60.465</td>
			  </tr>
			  <tr>
			    <td>Outubro</td>
			    <td style="text-align: right">9.063</td>
			    <td style="text-align: right">12.575</td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">21.638</td>
			  </tr>
			  <tr>
			    <td>Novembro</td>
			    <td style="text-align: right">8.937</td>
			    <td style="text-align: right">7.979</td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">16.916</td>
			  </tr>
			  <tr>
			    <td>Dezembro</td>
			    <td style="text-align: right">7.442</td>
			    <td style="text-align: right">8.551</td>
			    <td style="text-align: right"></td>
			    <td style="text-align: right">15.993</td>
			  </tr>
			  <tr>
			    <th>Total Geral</th>
			    <th style="text-align: right">90.845</th>
			    <th style="text-align: right">129.917</th>
			    <th style="text-align: right">232.313</th>
			    <th style="text-align: right">453.075</th>
			  </tr>
			  <tr>
			  	<th colspan="5">Fonte: Sistema de gerenciamento da então prestadora do serviço de Call Center</th>
			  </tr>
			</table>
			<p class="s2">6.3.3.3. Dadas às variações de volumetria possíveis, explicadas acima, optou-se por utilizar a medida estatística de desvio-padrão.</p>
			<p class="s2">6.3.3.4. Aplicando o indicador de 1,5 desvios-padrão a media de out/2018 a set/2019 na Tabela 7,
apresenta-se o seguinte resultado:</p>
			<p><strong>TABELA 8:</strong> interações estimadas</p>
			<table style="max-width: 400px">
			  <tr>
			    <td>A = Média Out/2018 a Set/2019 </td>
			    <td style="text-align: right">21.785</td>
			  </tr>
			  <tr>
			    <td>B = Desvio Padrão </td>
			    <td style="text-align: right">7.384</td>
			  </tr>
			  <tr>
			    <td>C = 1,5x desvio padrão </td>
			    <td style="text-align: right">11.076</td>
			  </tr>
			  <tr>
			    <td>Valor mensal = A+C </td>
			    <td style="text-align: right">32.861</td>
			  </tr>
			  <tr>
			    <td>24 meses </td>
			    <td style="text-align: right">788.662</td>
			  </tr>
			</table>
				<p class="s2">6.3.3.5. Assim, após arrendamento, foi considerado para o teto para esta modalidade de atendimento de 800.000 interações.</p>
			<p>6.3.4. Considera-se, para a comprovação da capacidade técnica, que a contratada deve demonstrar atender, no mínimo, <strong>8.000.000</strong> (oito milhões) de atendimentos anuais receptivos e/ou ativos.</p>
				<p class="s2">6.3.4.1. Por reconhecer o ganho de escala deste serviço, se aceita a soma dos atestados, no entanto, estes devem ser simultâneos a fim de demonstrar a capacidade instalada da empresa para a sustentação dessa escala.</p>
				<p class="s2">6.3.4.2. Os atestados devem ser emitidos por pessoas jurídicas de Direito Público e Privado, indicando o período da prestação de serviço; locais da execução dos serviços, natureza do objeto; quantidades executadas, caracterização do bom desempenho da licitante e outros dados característicos do objeto;</p>
				<p class="s2">6.3.4.3. O(s) atestados(s) devem também comprovar a capacidade técnica de gestão de indicadores operacionais e gerenciais para o atendimento de níveis de serviço (SLAs) previamente definidos e operação em regime de 24h por dia, ininterruptas;</p>
				<p class="s2">6.3.4.4. Admite-se o somatório dos quantitativos dos atestados para a comprovação do quantitativo mínimo no certame;</p>
				<p class="s2">6.3.4.5. Os atestados devem corresponder a uma prestação de serviço simultânea de, pelo menos, um ano;</p>
				<p class="s2">6.3.4.6. Em vista das especificidades da intermediação da relação da Administração Pública com os cidadãos, é necessário o montante mínimo de 2,5 milhões (dois milhões e quinhentos mil) de atendimentos comprovados para órgão ou entidade da administração pública direta ou indireta do total mencionado no item 6.3.4.</p>
				
			<Comments :attr="{id:commentId(), context:'6.3.	Implantação, Operação e Gestão de Centrais de Atendimento'}" v-if="estaConsulta.ativo == 1"></Comments>
			<h3>6.4.	Gestão de Indicadores de Desempenho</h3>
			<p>6.4.1.	Em vista da necessidade de se sedimentar a utilização de indicadores nas atividades de atendimento ao cidadão desenvolvidas pela Prefeitura de São Paulo, considera-se que a CONTRATADA deve demonstrar capacidade técnica para projetar, definir e implantar estrutura de gestão com indicadores de desempenho para a avaliação da operação de atendimento ao usuário/cidadão em escala adequada para a dimensão prevista neste edital.</p>
				
			<Comments :attr="{id:commentId(), context:'6.4.	Gestão de Indicadores de Desempenho'}" v-if="estaConsulta.ativo == 1"></Comments>
								
		</section>

		<section>
			<h2 class="titulo" indent="1">7.	GOVERNANÇA E CONDIÇÕES GERAIS DE EXECUÇÃO</h2>
			<h3>7.1.	Condições Gerais</h3>
			<p>7.1.1.	A CONTRATADA será responsável pela execução do escopo de trabalho descrito neste Termo de Referência, em conformidade com a qualidade e prazos estabelecidos.</p>
			<p>7.1.2.	A CONTRATANTE será responsável pelo pagamento dos referidos serviços conforme condições estabelecidas neste documento.</p>
			<p>7.1.3.	A CONTRATADA deverá dispor de estações de trabalho (computadores), bem como infraestrutura física e lógica, para a prestação do serviço, para cada um dos profissionais a serem alocados.</p>
			<p>7.1.4.	Os produtos e documentos gerados em meio eletrônico deverão ser compatíveis com as ferramentas Microsoft Office.</p>
			<p>7.1.5.	A CONTRATANTE será proprietária de todo e qualquer produto e documentação que vierem a ser gerados pela CONTRATADA em função da execução dos serviços e que não for de propriedade intelectual desta.</p>
			<p>7.1.6.	A CONTRATANTE deverá ter acesso direto às bases de dados da CONTRATADA a qualquer momento e periodicidade.</p>
				
			<Comments :attr="{id:commentId(), context:'subtitulo'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>7.2.	Período de transição e início da operação</h3>
			<p>7.2.1.	A CONTRATADA terá o prazo de até 90 dias, a partir da data de emissão da Ordem de Serviço para assumir a completa operação do serviço de atendimento ao cidadão 156, 199 e 153. Entende-se por operação completa todo atendimento telefônico e implantação da solução sistêmica envolvida para o pleno funcionamento da Central de Atendimento.</p>
				
			<Comments :attr="{id:commentId(), context:'7.2.	Período de transição e início da operação'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>7.3.	Governança</h3>
			<p>7.3.1.	Comitê Gestor</p>
				<p class="s2">7.3.1.1.	O Comitê Gestor é o principal responsável pela coordenação, integração, disciplina e controle dos esforços das Partes voltados à adequada execução dos serviços previstos neste Termo de Referência. O Comitê Gestor terá como principais objetivos.</p>
					<p class="s3">7.3.1.1.1.	Estabelecer e comunicar o direcionamento estratégico dos Serviços em alinhamento com os objetivos e expectativas da CONTRATANTE, descritos no Contrato.</p>
					<p class="s3">7.3.1.1.2.	Revisar periodicamente o desempenho e atuação e determinar mudanças aos membros do Comitê Operacional, tanto da CONTRATANTE quanto da CONTRATADA.</p>
					<p class="s3">7.3.1.1.3.	Revisar os serviços prestados do ponto de vista de qualidade.</p>
					<p class="s3">7.3.1.1.4.	Resolver em última instância as questões estratégicas e questões escaladas na governança do projeto de forma a não comprometer os custos, esforços e prazos.</p>
					<p class="s3">7.3.1.1.5.	Acompanhar e avaliar os indicadores de desempenho deste Termo de Referência.</p>
					<p class="s3">7.3.1.1.6.	Promover a articulação necessária para direcionar e resolver as questões críticas, políticas, organizacionais ou de relacionamento entre as partes.</p>
					<p class="s3">7.3.1.1.7.	Designar equipe da CONTRATANTE para dar suporte à CONTRATADA ao longo da execução do Contrato.</p>
					<p class="s3">7.3.1.1.8.	Participantes do Comitê Gestor</p>
						<p class="s4">7.3.1.1.8.1.	São membros do Comitê Gestor, minimamente
							<ul>
								<li>Diretor (a) da CONTRATADA, ou pessoa por ele(a) indicada.</li>
								<li>Secretário da pasta gestora deste contrato ou alguém por ele indicado.</li>
								<li>Responsável pelo Comitê de Operação.</li>
							</ul>
						</p>						
						<p class="s4">7.3.1.1.8.2.	Frequência de reuniões:
							<ul>
								<li>O Comitê Gestor terá frequência bimestral de reuniões.</li>
							</ul>
						</p>					
			<p>7.3.2.	Comitê Operacional</p>
				<p class="s2">7.3.2.1.	O Comitê Operacional deve ser indicado via ofício, de ambas as partes, e será responsável por planejar e acompanhar a execução dos Serviços previstos neste Termo de Referência.</p>
				<p class="s2">7.3.2.2.	Todas as reuniões serão realizadas nas instalações da CONTRATANTE, ou como a CONTRATANTE aconselhar (com participantes remotos via teleconferência ou vídeo conferência).</p>
				<p class="s2">7.3.2.3.	As partes deverão ser notificadas com a antecedência mínima de 5 (cinco) dias úteis da data de realização da reunião.</p>
				<p class="s2">7.3.2.4.	As Partes deverão ser notificadas com a antecedência mínima de 3 (três) dias úteis no caso de alterações nas datas desta reunião.</p>
				<p class="s2">7.3.2.5.	Os representantes que não comparecerem às reuniões previamente agendadas, por motivos previamente justificados, receberão a ata da reunião, via e-mail, e terão até 2 (dois) dias corridos para manifestar seu voto, sob pena de em não o fazendo ser considerado como aceitação tácita do conteúdo sem ressalvas, ou seja, voto a favor do que foi deliberado.</p>
				<p class="s2">7.3.2.6.	O Comitê Operacional terá como principais objetivos:</p>
				<ul>
					<li>Supervisionar as atividades relacionadas ao cumprimento dos objetivos constantes neste Termo de Referência, gerenciando o comprometimento dos recursos humanos alocados, monitorando o andamento do projeto.</li>
					<li>Realizar acompanhamento das atividades conforme previstos neste Termo de Referência.</li>
					<li>Avaliar as prioridades.</li>
					<li>Realizar o planejamento e execução.</li>
					<li>Identificar e encaminhar para o Comitê Gestor solicitações de mudança de escopo;</li>
					<li>Gerenciar as fases do projeto de implantação das centrais de atendimento</li>
					<li>Gerenciar as atividades operacionais diárias tais como, orçamento, recursos, prazo e qualidade dos serviços;</li>
					<li>Identificar as questões e riscos do projeto, atribuindo ações, responsáveis e datas para as suas resoluções;</li>
					<li>Dar suporte à CONTRATADA no planejamento e execução do projeto de implantação da solução de atendimento fornecida pela CONTRATANTE;</li>
					<li>Identificar situações de emergência;</li>
					<li>Definir procedimentos a serem adotados em situações de emergência;</li>
					<li>Acompanhar a execução dos procedimentos em situações de emergência;</li>
					<li>Reportar ao Comitê Gestor a ocorrência de situações de emergência;</li>
				</ul>
				<p class="s2">7.3.2.7.	Participantes do Comitê Operacional</p>
					<p class="s3">7.3.2.7.1.	São membros efetivos do Comitê de Operação, minimamente:
						<ul>
							<li>Responsável da Secretaria de Municipal de Inovação e Tecnologia, indicado(a) pelo Secretário</li>
							<li>Gerente experiente da CONTRATADA, ou pessoa por ele indicada;</li>
							<li>1 Responsável por parte da CONTRATADA;</li>
							<li>1 Responsável por parte da CONTRATANTE.</li>
						</ul>
					</p>
					<p class="s3">7.3.2.7.2.	Frequência de reuniões
						<ul>
							<li>O Comitê de operação terá frequência quinzenal de reuniões.</li>
						</ul>
					</p>					
				
			<Comments :attr="{id:commentId(), context:'7.3.	Governança'}" v-if="estaConsulta.ativo == 1"></Comments>
			
		</section>
		
		<section>
			<h2 class="titulo" indent="1">8.	VIGÊNCIA DO CONTRATO</h2>
			<h3>8.1.	O contrato será celebrado com duração de 24 (vinte e quatro) meses.</h3>
			<p>8.1.1.	O prazo poderá ser prorrogado por sucessivo(s) período(s) e nas mesmas condições, observado o limite legal.</p>
			<p>8.1.2.	As prorrogações de prazo de vigência serão formalizadas mediante celebração dos respectivos termos de aditamento ao contrato, respeitadas as condições prescritas na Lei Federal nº 8.666/1993.</p>
			<p>8.1.3.	A não prorrogação do prazo de vigência contratual, por conveniência da Administração, não gerará à Contratada o direito a qualquer espécie de indenização.</p>
			<p>8.1.4.	Não obstante o prazo estipulado no item 8.1, a vigência contratual nos exercícios subsequentes ao da assinatura do contrato estará sujeita à condição resolutiva, consubstanciada na existência de recursos aprovados nas respectivas Leis Orçamentárias de cada exercício, para atender as respectivas despesas.</p>
			<p>8.1.5.	Caso novo contrato seja assinado antes do termo deste, deverá a CONTRATANTE notificar a CONTRATADA da data final, bem como das condições necessárias para a transição da operação, com, no mínimo, 90 (noventa) dias de antecedência.</p>
			<p>8.1.6.	À PMSP, demonstrado o interesse público, é assegurado o direito de exigir que a empresa contratada, conforme o caso, prossiga na execução do ajuste mediante aditamento do contrato, pelo período de até 90 (noventa) dias, a fim de evitar brusca interrupção na execução dos serviços.</p>
			<p>8.1.7.	A CONTRATADA deverá arcar fiel e regularmente com todas as obrigações trabalhistas dos empregados que participem da execução do objeto contratual.</p>
			<p>8.1.8.	A CONTRATADA deverá enviar e manter atualizado o rol de todos os empregados e prestadores de serviço que participam da execução do objeto contratual.</p>
			<p>8.1.9.	É vedada a retirada pela Adjudicatária ou o envio pela Administração, do Termo de Contrato para assinatura fora das dependências da Administração.</p>
			<p>8.1.10.	A eficácia do presente Contrato está sujeita à celebração do contrato que tem por objeto a prestação de serviços compreendendo a disponibilização de solução tecnológica para atendimento, gerenciamento do relacionamento com o cidadão e digitalização de serviços públicos (processo administrativo nº. xxx / pregão eletrônico nº. xxx). Dessa forma, até que haja a implementação da referida condição, a presente contratação não produzirá seus efeitos jurídicos típicos.</p>
				
			<Comments :attr="{id:commentId(), context:'subtitulo'}" v-if="estaConsulta.ativo == 1"></Comments>

		</section>
		
		<section>
			<h2 class="titulo" indent="1">9.	DO PREÇO, DA DOTAÇÃO E DAS CONDIÇÕES DE PAGAMENTO</h2>
			<h3>9.1.	Os preços que vigorarão no contrato incluem todos os custos diretos e indiretos necessários à execução dos serviços, inclusive os referentes às despesas trabalhistas, previdenciárias, impostos, taxas, emolumentos e quaisquer outras despesas e encargos, constituindo, a qualquer título, a única e completa remuneração pela adequada e perfeita prestação e entrega dos serviços, de modo que nenhuma outra remuneração será devida, a qualquer título, descartada qualquer hipótese de responsabilidade solidária pelo pagamento de toda e qualquer despesa, direta ou indiretamente relacionada com a prestação dos serviços.</h3>
				
			<Comments :attr="{id:commentId(), context:'subtitulo'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>Os recursos necessários para suporte do contrato onerará a <mark style="background-color: #ddd">dotação nº XXXXXXXXXX</mark> do orçamento vigente e dotação própria no próximo exercício, em observância ao princípio da anualidade orçamentária.</h3>
				
			<Comments :attr="{id:commentId(), context:'9.2.	Os recursos necessários para suporte do contrato, onerará a dotação...'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>9.3.	O prazo de pagamento será de 30 (trinta) dias, a partir da data da emissão do ateste de cada nota fiscal ou nota fiscal fatura.</h3>
			<p>9.3.1.	O ateste, aprovando ou rejeitando, total ou parcialmente, a prestação dos serviços, ocorrerá em até 5 (cinco) dias úteis, contados a partir da entrega da fatura ou de documento equivalente, inclusive por meio eletrônico, conforme Portaria SF 159/2017.</p>
			<p>9.3.2.	Caso venha ocorrer a necessidade de providências complementares por parte da CONTRATADA, a fluência do prazo será interrompida, reiniciando-se a sua contagem a partir da data em que estas forem cumpridas.</p>
			<p>9.3.3.	Caso venha a ocorrer atraso no pagamento dos valores devidos, por culpa exclusiva da Administração, a Contratada terá direito à aplicação de compensação financeira, nos termos da Portaria SF nº 05, de 05/01/2012.</p>
			<p>9.3.4.	Para fins de cálculo da compensação financeira de que trata o item acima, o valor do principal devido será reajustado utilizando-se o índice oficial de remuneração básica da caderneta de poupança e de juros simples no mesmo percentual de juros incidentes sobre a caderneta de poupança para fins de compensação.</p>
			<p>9.3.5.	O pagamento da compensação financeira dependerá de requerimento a ser formalizado pela Contratada.</p>
				
			<Comments :attr="{id:commentId(), context:'9.3.	O prazo de pagamento será de 30 (trinta) dias, a partir da data da emissão do ateste de cada nota fiscal ou nota fiscal fatura.'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>9.4.	Os pagamentos serão efetuados em conformidade com a execução dos serviços, mediante apresentação da(s) respectiva(s) nota(s) fiscal(is) ou nota(s) fiscal(is)/fatura, bem como de cópia reprográfica da Nota de Empenho, acompanhada, quando for o caso, do recolhimento do ISSQN – Imposto Sobre Serviços de Qualquer Natureza do mês de competência, descontados os eventuais débitos da CONTRATADA, inclusive os decorrentes de multas.</h3>
				
			<Comments :attr="{id:commentId(), context:'9.4.	Os pagamentos serão efetuados em conformidade com a execução dos serviços...'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>9.5.	Na hipótese de existir nota de retificação e/ou nota suplementar de empenho, cópia(s) da(s) mesma(s) deverá(ão) acompanhar os demais documentos.</h3>
				
			<Comments :attr="{id:commentId(), context:'9.5.	Na hipótese de existir nota de retificação e/ou nota suplementar de empenho, cópia(s) da(s) mesma(s) deverá(ão) acompanhar os demais documentos.'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>9.6.	A Contratada deverá apresentar, juntamente com a Nota Fiscal ou Nota Fiscal Fatura, os documentos a seguir discriminados, para verificação de sua regularidade fiscal perante os órgãos competentes:</h3>
			<p>9.6.1.	Certificado de Regularidade do Fundo de Garantia do Tempo de Serviço – F.G.T.S., fornecido pela Caixa Econômica Federal.</p>
			<p>9.6.2.	Certidão Negativa de Débitos relativa às Contribuições Previdenciárias e as de Terceiros – CND – ou outra equivalente na forma da lei;</p>
			<p>9.6.3.	Certidão de Regularidade para com a Fazenda Estadual do domicílio ou sede da proponente, pertinente ao seu ramo de atividade e relativa aos tributos relacionados com o objeto licitado.</p>
			<p>9.6.4.	Certidão negativa de débitos de tributos mobiliários do Município de São Paulo.</p>
			<p>9.6.5.	Certidão negativa de débitos trabalhistas (CNDT);</p>
			<p>9.6.6.	Nota Fiscal ou Nota Fiscal Fatura devidamente atestada;</p>
			<p>9.6.7.	Folha de Medição dos Serviços;</p>
			<p>9.6.8.	Relação atualizada dos empregados vinculados à execução contratual;</p>
			<p>9.6.9.	Folha de frequência dos empregados vinculados à execução contratual;</p>
			<p>9.6.10.	Folha de pagamento dos empregados vinculados à execução do contrato;</p>
			<p>9.6.11.	Cópia do Protocolo de envio de arquivos, emitido pela conectividade social (GFIP/SEFIP);</p>
			<p>9.6.12.	Cópia da Relação dos Trabalhadores constantes do arquivo SEFIP do mês anterior ao pedido de pagamento;</p>
			<p>9.6.13.	Cópia da Guia quitada do INSS (GPS), correspondente ao mês da última fatura vencida;</p>
			<p>9.6.14.	Cópia da Guia quitada do FGTS (GRF), correspondente ao mês da última fatura vencida.</p>
			<p>9.6.15.	OBS.: Serão aceitas como prova de regularidade certidões negativas, positivas com efeito de negativas e certidões positivas que noticiem em seu corpo que os débitos estão judicialmente garantidos ou com sua exigibilidade suspensa.</p>

			<Comments :attr="{id:commentId(), context:'9.6.	A Contratada deverá apresentar, juntamente com a Nota Fiscal ou Nota Fiscal Fatura, os documentos a seguir discriminados, para verificação de sua regularidade fiscal perante os órgãos competentes:'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>9.7.	O pagamento será efetuado por crédito em conta corrente, no BANCO XXXXXXX, conforme estabelecido no Decreto nº XX.XXX/20XX, publicado no DOC do dia XX de XXXXXXXXXX de 20XX.</h3>
							
			<Comments :attr="{id:commentId(), context:'9.7.	O pagamento será efetuado por crédito em conta corrente, no BANCO XXXXXXX, conforme estabelecido no Decreto nº XX.XXX/20XX, publicado no DOC do dia XX de XXXXXXXXXX de 20XX.'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>9.8.	Fica ressalvada qualquer alteração por parte da Secretaria da Fazenda, quanto às normas referentes ao pagamento de fornecedores.</h3>
										
			<Comments :attr="{id:commentId(), context:'9.8.	Fica ressalvada qualquer alteração por parte da Secretaria da Fazenda, quanto às normas referentes ao pagamento de fornecedores.'}" v-if="estaConsulta.ativo == 1"></Comments>
															
		</section>
		
		<section>
			<h2 class="titulo" indent="1">10.	DO REAJUSTE DE PREÇOS</h2>
			<h3>10.1.	Os preços ofertados somente poderão ser reajustados após 1 (um) ano de sua vigência, contados da data-limite para apresentação das propostas, mediante a utilização do critério definido do artigo 7º no Decreto nº 57.580, de 19 de janeiro de 2017, com interpretação dada pela  Portaria da Secretaria Municipal da Fazenda - SF Nº 389 de 18 de dezembro de 2017, ou seja, aplicação do índice equivalente ao centro da meta de inflação fixada pelo Conselho Monetário Nacional - CMN  ou o Índice de Preços ao Consumidor – IPC, apurado pela Fundação Instituto de Pesquisas Econômicas – FIPE, optando-se, sempre, pelo menor deles</h3>
				
			<Comments :attr="{id:commentId(), context:'10.1.	Os preços ofertados somente poderão ser reajustados após 1 (um) ano de sua vigência, contados da data-limite para apresentação das propostas, mediante a utilização do critério definido do artigo 7º...'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>10.2.	Fica vedado qualquer novo reajuste pelo prazo de 1 (um) ano.</h3>
				
			<Comments :attr="{id:commentId(), context:'10.2.	Fica vedado qualquer novo reajuste pelo prazo de 1 (um) ano.'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>10.3.	As condições de reajustamento ora pactuadas poderão ser alteradas em face da superveniência de normas federais ou municipais aplicáveis à espécie.</h3>
				
			<Comments :attr="{id:commentId(), context:'10.3.	As condições de reajustamento ora pactuadas poderão ser alteradas em face da superveniência de normas federais ou municipais aplicáveis à espécie.'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>10.4.	As hipóteses excepcionais ou de revisão de preços serão tratadas de acordo com a legislação vigente e exigirão detida análise econômica para avaliação de eventual desequilíbrio econômico-financeiro do contrato.</h3>
				
			<Comments :attr="{id:commentId(), context:'10.4.	As hipóteses excepcionais ou de revisão de preços serão tratadas de acordo com a legislação vigente e exigirão detida análise econômica para avaliação de eventual desequilíbrio econômico-financeiro do contrato.'}" v-if="estaConsulta.ativo == 1"></Comments>

		</section>
		
		<section>
			<h2 class="titulo" indent="1">11.	DA GARANTIA CONTRATUAL</h2>
			<h3>11.1.	No ato da assinatura do contrato, a adjudicatária deverá prestar a devida garantia, em quantia equivalente a 5% (cinco por cento) do valor contratual, em qualquer das modalidades previstas no artigo 56, § 1º, da Lei Federal nº 8.666/93. A referida garantia será prestada nos termos da Portaria SF nº. 76/2019"</h3>
				
			<Comments :attr="{id:commentId(), context:'11.1.	No ato da assinatura do contrato, a adjudicatária deverá prestar a devida garantia, em quantia equivalente a 5% (cinco por cento)...'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>11.2.	A não prestação de garantia contratual equivale à recusa injustificada para a contratação, caracterizando descumprimento total da obrigação assumida, ficando a adjudicatária sujeita às penalidades legalmente estabelecidas.</h3>

			<Comments :attr="{id:commentId(), context:'11.2.	A não prestação de garantia contratual equivale à recusa injustificada para a contratação, caracterizando descumprimento total da obrigação assumida, ficando a adjudicatária sujeita às penalidades legalmente estabelecidas.'}" v-if="estaConsulta.ativo == 1"></Comments>
		
			<h3>11.3.	A garantia e seus reforços responderão por todas as multas que forem impostas à CONTRATADA e por todas as importâncias que, a qualquer título, forem devidas à Contratante em razão do contrato.</h3>
							
			<p>11.3.1.	Caso a garantia não seja suficiente para o pagamento das multas, a CONTRATADA será notificada para, no prazo de 72 (setenta e duas) horas, completar o pagamento, sob pena de rescisão do contrato.</p>

			<Comments :attr="{id:commentId(), context:'11.3.	A garantia e seus reforços responderão por todas as multas que forem impostas à CONTRATADA e por todas as importâncias que, a qualquer título, forem devidas à Contratante em razão do contrato.'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>11.4.	O reforço e/ou a regularização da garantia, excetuada a hipótese prevista no item anterior, deverá ser efetuado no prazo máximo de 05 (cinco) dias úteis, contados do recebimento da comunicação, feita por escrito pela contratante, sob pena de incorrer a CONTRATADA nas penalidades previstas no Contrato.</h3>
			<p>11.4.1.	O prazo acima aludido poderá ser prorrogado uma vez, por igual período, quando solicitado pela CONTRATADA durante o transcurso do prazo, se ocorrer motivo justificado aceito pela Contratante.</p>
				
			<Comments :attr="{id:commentId(), context:'11.4.	O reforço e/ou a regularização da garantia, excetuada a hipótese prevista no item anterior...'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>11.5.	Em caso de prorrogação do contrato, a garantia prestada deverá ser substituída automaticamente pela CONTRATADA quando da ocorrência de seu vencimento, independentemente de comunicado da contratante, de modo a manter-se ininterruptamente garantido o contrato celebrado, sob pena de incorrer a CONTRATADA nas penalidades nele previstas.</h3>
				
			<Comments :attr="{id:commentId(), context:'11.5.	Em caso de prorrogação do contrato, a garantia prestada deverá ser substituída automaticamente pela...'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>11.6.	Em caso de aditamento contratual prevendo acréscimo de até 25% (vinte e cinco por cento) do valor inicial atualizado do contrato, a garantia deverá ser regularizada proporcionalmente.</h3>
				
			<Comments :attr="{id:commentId(), context:'11.6.	Em caso de aditamento contratual prevendo acréscimo de até 25% (vinte e cinco por cento) do valor inicial atualizado do contrato, a garantia deverá ser regularizada proporcionalmente.'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>11.7.	A garantia prestada na modalidade seguro-garantia ou fiança bancária deve explicitar a cobertura integral do contrato, inclusive quanto ao pagamento imediato à Prefeitura do Município de São Paulo em quaisquer das hipóteses previstas neste item.</h3>
				
			<Comments :attr="{id:commentId(), context:'11.7.	A garantia prestada na modalidade seguro-garantia ou fiança bancária deve explicitar a cobertura integral do contrato, inclusive quanto ao pagamento imediato à Prefeitura do Município de São Paulo em quaisquer das hipóteses previstas neste item.'}" v-if="estaConsulta.ativo == 1"></Comments>
			<h3>11.8.	Por ocasião do encerramento do contrato, o que restar da garantia será liberado ou restituído, mediante requerimento da CONTRATADA, após a liquidação das multas aplicadas e dedução de eventual valor devido pela CONTRATADA.</h3>
				
			<Comments :attr="{id:commentId(), context:'11.8.	Por ocasião do encerramento do contrato, o que restar da garantia será liberado ou restituído, mediante requerimento da CONTRATADA, após a liquidação das multas aplicadas e dedução de eventual valor devido pela CONTRATADA.'}" v-if="estaConsulta.ativo == 1"></Comments>
			
		</section>
		
		<section>
			<h2 class="titulo" indent="1">12.	DAS PENALIDADES</h2>
			<h3>12.1.	Além das sanções previstas no capítulo IV da Lei Federal nº 8.666/93, Lei Federal no 10.520/02 e demais normas pertinentes, são aplicáveis as penalidades abaixo estipuladas, que só deixarão de ser aplicadas nas seguintes hipóteses:</h3>
			<p>12.1.1.	Comprovação, anexada aos autos, da ocorrência de força maior impeditiva do cumprimento da obrigação e/ou,</p>
			<p>12.1.2.	Manifestação da unidade requisitante, informando que o ocorrido derivou de fatos imputáveis à Administração</p>
				
			<Comments :attr="{id:commentId(), context:'12.1.	Além das sanções previstas no capítulo IV da Lei Federal nº 8.666/93, Lei Federal no 10.520/02...'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>12.2.	A proponente que não mantiver a proposta ou lance, falhar ou fraudar na execução das obrigações assumidas, comportar-se de modo inidôneo, fizer declaração falsa ou cometer fraude fiscal, poderá ser aplicada multa de 20% (vinte por cento) sobre o valor da proposta inicial e a penalidade de impedimento de licitar e contratar com a Administração Pública pelo prazo de até 5 (cinco) anos.</h3>
				
			<Comments :attr="{id:commentId(), context:'12.2.	A proponente que não mantiver a proposta ou lance, falhar ou fraudar na execução das obrigações assumidas...'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>12.3.	A recusa da adjudicatária em assinar o contrato e/ou retirar a Nota de Empenho sem justificativa aceita pela Administração, no prazo estabelecido neste Edital, implicará em multa de 30% (trinta por cento) do valor adjudicado e no impedimento de participar de novas licitações pelo prazo de até 05 (cinco) anos.</h3>
			<p>conteudo</p>
				
			<Comments :attr="{id:commentId(), context:'12.3.	A recusa da adjudicatária em assinar o contrato e/ou retirar a Nota de Empenho sem justificativa aceita pela Administração, no prazo estabelecido neste Edital, implicará em multa de 30%...'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>12.4.	O prazo para pagamento das multas será de 05 (cinco) dias úteis a contar da intimação da empresa apenada. A critério da Administração e sendo possível, o valor devido será descontado da importância que a empresa tenha a receber, até os limites apurados, conforme dispõe o Parágrafo Único do Art. 55 do Decreto Municipal nº 44.279/2003. Não havendo pagamento pela empresa, o valor será cobrado em processo judicial de execução.</h3>
				
			<Comments :attr="{id:commentId(), context:'12.4.	O prazo para pagamento das multas será de 05 (cinco) dias úteis a contar da intimação da empresa apenada...'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>12.5.	A aplicação de uma penalidade não exclui a aplicação das outras, quando cabíveis.</h3>
				
			<Comments :attr="{id:commentId(), context:'12.5.	A aplicação de uma penalidade não exclui a aplicação das outras, quando cabíveis.'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>12.6.	Das decisões de aplicação de penalidade, caberá recurso nos termos do artigo 109 da Lei Federal nº 8.666/93, observados os prazos nele fixados.</h3>
			<p>12.6.1.	Recursos contra decisões de aplicação de penalidade deverão ser dirigidos à Assessoria Jurídica, e protocolizados nos dias úteis, na Rua Líbero Badaró nº 425, 34º andar, Centro, São Paulo, SP, após o recolhimento em agência bancária dos emolumentos devidos.</p>
				
			<Comments :attr="{id:commentId(), context:'12.6.	Das decisões de aplicação de penalidade, caberá recurso nos termos do artigo 109 da Lei Federal nº 8.666/93, observados os prazos nele fixados.'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>12.7.	Não serão conhecidos recursos enviados pelo correio, telex, fac-símile, correio eletrônico ou qualquer outro meio de comunicação se, dentro do prazo previsto em lei, a peça inicial original não tiver sido protocolizada.</h3>
				
			<Comments :attr="{id:commentId(), context:'12.7.	Não serão conhecidos recursos enviados pelo correio, telex, fac-símile, correio eletrônico ou qualquer outro meio de comunicação...'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>12.8.	Com fundamento nos artigos 86 e 87, incisos I a IV, da Lei nº 8.666, de 1993; e no art. 7º da Lei nº 10.520, de 17/07/2002, nos casos de retardamento, de falha na execução do contrato ou de inexecução total do objeto, observando-se os procedimentos contidos no Capítulo X do Decreto Municipal nº 44.279/03, a contratada poderá ser apenada, isoladamente, ou juntamente com as multas definidas no item 11.2, com as seguintes penalidades:</h3>
			<p>12.8.1.	Advertência;</p>
			<p>12.8.2.	Suspensão temporária de participação em licitação e impedimento de contratar com a Administração Municipal, por prazo não superior a dois anos;</p>
			<p>12.8.3.	Declaração de inidoneidade para licitar ou contratar com a Administração Pública enquanto perdurarem os motivos determinantes da punição ou até que seja promovida a reabilitação perante a própria autoridade que aplicou a penalidade, que será concedida sempre que a CONTRATADA ressarcir a Administração pelos prejuízos resultantes e após decorrido o prazo da sanção aplicada com base no inciso anterior; ou</p>
			<p>12.8.4.	Impedimento de licitar e contratar com a União, os Estados, o Distrito Federal e os Municípios e descredenciamento nos sistemas de cadastramento de fornecedores a que se refere o inciso XIV do art. 4º da Lei nº 10.520/2002, pelo prazo de até cinco anos.</p>
				
			<Comments :attr="{id:commentId(), context:'12.8.	Com fundamento nos artigos 86 e 87, incisos I a IV, da Lei nº 8.666, de 1993; e no art. 7º da Lei nº 10.520, de 17/07/2002...'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>12.9.	A falha na execução do contrato estará configurada quando a CONTRATADA se enquadrar em pelo menos uma das situações previstas na Tabela 3 abaixo, respeitada a graduação de infrações conforme a Tabela 1 deste item, e alcançar o total de 20 (vinte) pontos, cumulativamente.</h3>
			<table style="text-align: center;">
			  <tr>
			    <th colspan="2">TABELA 1</th>
			  </tr>
			  <tr>
			    <th>GRAU DA INFRAÇÃO</th>
			    <th>PONTOS DA INFRAÇÃO</th>
			  </tr>
			  <tr>
			    <td>1</td>
			    <td>2</td>
			  </tr>
			  <tr>
			    <td>2</td>
			    <td>3</td>
			  </tr>
			  <tr>
			    <td>3</td>
			    <td>4</td>
			  </tr>
			  <tr>
			    <td>4</td>
			    <td>5</td>
			  </tr>
			  <tr>
			    <td>5</td>
			    <td>8</td>
			  </tr>
			  <tr>
			    <td>6</td>
			    <td>10</td>
			  </tr>
			</table>

			<p>12.9.1.	Os pontos serão computados a partir da aplicação da penalidade, com prazo de depuração de 12 (doze) meses.</p>
			<p>12.9.2.	Sendo a infração objeto de recurso administrativo, os pontos correspondentes ficarão suspensos até o seu julgamento e, sendo mantida a penalidade, serão computados, observado o prazo de 12 (doze) meses, a contar da data da aplicação da penalidade.</p>
				
			<Comments :attr="{id:commentId(), context:'12.9.	A falha na execução do contrato estará configurada quando a CONTRATADA se enquadrar em pelo menos uma das situações previstas na Tabela...'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>12.10.	A CONTRATADA estará sujeita às seguintes penalidades pecuniárias:</h3>
			<p>12.10.1.	Multa 1% (um por cento) sobre o valor do Contrato por dia de atraso no início da prestação de serviços, até o máximo de 10 (dez) dias.</p>
				<p class="s2">12.10.1.1.	No caso de atraso por período superior a 10 (dez) dias, poderá ser promovida, a critério exclusivo da contratante, a rescisão contratual, por culpa da contratada, aplicando-se a pena de multa de 20% (vinte por cento) do valor total do Contrato, além da possibilidade de aplicação da pena de suspensão temporária do direito de licitar e contratar com a Administração Pública, pelo prazo máximo de 02 (dois) anos.</p>
			<p>12.10.2.	Multa por inexecução parcial do contrato: 20% (vinte por cento), sobre o valor mensal da parcela não executada, além da possibilidade de aplicação da pena de suspensão temporária do direito de licitar e contratar com a Administração Pública, pelo prazo máximo de 05 (cinco) anos.</p>
			<p>12.10.3.	Multa por inexecução total do contrato: 30% (trinta por cento) sobre o valor total do contrato, além da possibilidade de aplicação da pena de suspensão temporária do direito de licitar e contratar com a Administração Pública, pelo prazo máximo de 02 (dois) anos.</p>
			<p>12.10.4.	Pelo descumprimento das obrigações contratuais, a Administração aplicará multas conforme a graduação estabelecida na tabela 2, para os casos previstos na tabela 3.</p>

			<table style="text-align: center;">
			  <tr>
			    <th colspan="2">TABELA 2</th>
			  </tr>
			  <tr>
			    <th>GRAU</th>
			    <th>CORRESPONDÊNCIA</th>
			  </tr>
			  <tr>
			    <td>1</td>
			    <td>0,2% do valor mensal do contrato</td>
			  </tr>
			  <tr>
			    <td>2</td>
			    <td>0,4% do valor mensal do contrato</td>
			  </tr>
			  <tr>
			    <td>3</td>
			    <td>0,8% do valor mensal do contrato</td>
			  </tr>
			  <tr>
			    <td>4</td>
			    <td>1,6% do valor mensal do contrato</td>
			  </tr>
			  <tr>
			    <td>5</td>
			    <td>3,2% do valor mensal do contrato</td>
			  </tr>
			  <tr>
			    <td>6</td>
			    <td>4,0% do valor mensal do contrato</td>
			  </tr>
			</table>

			<table>
			  <tr>
			    <th colspan="4">TABELA 3</th>
			  </tr>
			  <tr>
			    <th>ITEM</th>
			    <th>DESCRIÇÃO</th>
			    <th>GRAU</th>
			    <th>INCIDÊNCIA</th>
			  </tr>
			  <tr>
			    <td>1</td>
			    <td>Manter empregado sem qualificação para a execução dos serviços.</td>
			    <td>1</td>
			    <td>Por empregado e por dia</td>
			  </tr>
			  <tr>
			    <td>2</td>
			    <td>Executarserviço incompleto, de baixa qualidade, paliativo, substitutivo como por caráter permanente, ou deixar de providenciar recomposição complementar.</td>
			    <td>2</td>
			    <td>Por ocorrência</td>
			  </tr>
			  <tr>
			    <td>3</td>
			    <td>Suspender ou interromper, salvo por motivo de força maior ou caso fortuito, os serviços contratuais.</td>
			    <td>6</td>
			    <td>Por dia </td>
			  </tr>
			  <tr>
			    <td>4</td>
			    <td>Destruir ou danificar documentos por culpa ou dolo de seus agentes.</td>
			    <td>3</td>
			    <td>Por ocorrência</td>
			  </tr>
			  <tr>
			    <td>5</td>
			    <td>Utilizar as dependências da CONTRATANTE para fins diversos do objeto do contrato.</td>
			    <td>5</td>
			    <td>Por ocorrência</td>
			  </tr>
			  <tr>
			    <td>6</td>
			    <td>Recusar-se a executar serviço determinado pela FISCALIZAÇÃO, sem motivo justificado.</td>
			    <td>5</td>
			    <td>Por ocorrência</td>
			  </tr>
			  <tr>
			    <td colspan="4" style="font-weight: bold;">Para os itens a seguir: DEIXAR DE</td>
			  </tr>
			  <tr>
			    <td>7</td>
			    <td>Substituir empregado que tenha conduta inconveniente ou incompatível com suas atribuições.</td>
			    <td>2</td>
			    <td>Por empregado e por dia</td>
			  </tr>
			  <tr>
			    <td>8</td>
			    <td>Manter a documentação de habilitação atualizada.</td>
			    <td>1</td>
			    <td>Por item e por ocorrência</td>
			  </tr>
			  <tr>
			    <td>9</td>
			    <td>Cumprir horário estabelecido pelo contrato ou determinado pela FISCALIZAÇÃO.</td>
			    <td>1</td>
			    <td>Por ocorrência</td>
			  </tr>
			  <tr>
			    <td>10</td>
			    <td>Cumprir determinação formal ou instrução complementar da FISCALIZAÇÃO.</td>
			    <td>2</td>
			    <td>Por ocorrência</td>
			  </tr>
			  <tr>
			    <td>11</td>
			    <td>Efetuar a reposição de empregados faltosos.</td>
			    <td>3</td>
			    <td>Por ocorrência</td>
			  </tr>
			  <tr>
			    <td>12</td>
			    <td>Apresentar, quando solicitado, documentação fiscal, trabalhista, previdenciária e outros documentos necessários à comprovação do cumprimento dos demais encargos trabalhistas.</td>
			    <td>2</td>
			    <td>Por ocorrência e por dia</td>
			  </tr>
			  <tr>
			    <td>13</td>
			    <td>Entregar ou entregar com atraso ou incompleta a documentação exigida na cláusula referente às condições de pagamento.</td>
			    <td>1</td>
			    <td>Por ocorrência e por dia</td>
			  </tr>
			  <tr>
			    <td>14</td>
			    <td>Entregar ou entregar com atraso os esclarecimentos formais solicitados para sanar as inconsistências ou dúvidas suscitadas durante a análise da documentação exigida por força do contrato.</td>
			    <td>2</td>
			    <td>Por ocorrência e por dia</td>
			  </tr>
			  <tr>
			    <td>15</td>
			    <td>Cumprir quaisquer dos itens do contrato e seus anexos não previstos nesta tabela de multas</td>
			    <td>1</td>
			    <td>Por item e por ocorrência</td>
			  </tr>
			  <tr>
			    <td>16</td>
			    <td>Cumprir quaisquer dos itens do contrato e seus anexos não previstos nesta tabela de multas, após reincidência formalmente notificada pela unidade fiscalizadora.</td>
			    <td>2</td>
			    <td>Por item e por ocorrência</td>
			  </tr>
			  <tr>
			    <td>17</td>
			    <td>Atender aos itens constantes do Plano de Contingência</td>
			    <td>4</td>
			    <td>Por item e por ocorrência</td>
			  </tr>
			  <tr>
			    <td>18</td>
			    <td>Cumprir o atendimento de manutenção sistêmica, no prazo de até 4 (quatro) horas, em caso de problemas no sistema de front end</td>
			    <td>3</td>
			    <td>Por ocorrência e por hora de atraso</td>
			  </tr>
			</table>
			<p>12.10.5.	Se, por qualquer meio, independentemente da existência de ação judicial, chegar ao conhecimento do gestor do contrato uma situação de inadimplemento com relação às obrigações trabalhistas, tais como salários, vales transporte, vales refeição, seguros, entre outros, previstos em lei ou instrumento normativo da categoria e constantes na planilha de composição de custo, caberá a autoridade apurá-la e, se o caso, garantido o contraditório, aplicar à contratada multa de 20% (vinte por cento), sobre o valor da parcela não executada, pelo descumprimento de obrigação contratual e, persistindo a situação, o contrato será rescindido.</p>
				
			<Comments :attr="{id:commentId(), context:'12.10.	A CONTRATADA estará sujeita às seguintes penalidades pecuniárias:'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>12.11.	O valor da multa poderá ser descontado das faturas devidas à CONTRATADA, conforme dispõe o parágrafo único do artigo 55 do Decreto Municipal nº 44.279/2003.</h3>
			<p>12.11.1.	Se o valor a ser pago à CONTRATADA não for suficiente para cobrir o valor da multa, a diferença será descontada da garantia contratual, quando exigida.</p>
			<p>12.11.2.	Se os valores das faturas e da garantia forem insuficientes, fica a CONTRATADA obrigada a recolher a importância devida no prazo de 05 (cinco) dias úteis, contados da comunicação oficial.</p>
			<p>12.11.3.	Esgotados os meios administrativos para cobrança do valor devido pela CONTRATADA à CONTRATANTE, este será encaminhado para inscrição em dívida ativa.</p>
			<p>12.11.4.	Caso o valor da garantia seja utilizado no todo ou em parte para o pagamento da multa, esta deve ser complementada no prazo de até 10 (dez) dias úteis, contado da solicitação da CONTRATANTE.</p>
			<p>12.11.5.	Caso haja rescisão, a mesma atrai os efeitos previstos no artigo 80 incisos I e IV da Lei Federal nº 8.666/93.</p>
			<p>12.11.6.	Das decisões de aplicação de penalidade, caberá recurso nos termos do artigo 109 da Lei Federal 8.666/93 e Decreto Municipal nº 44.279/2003, observado os prazos nele fixados.</p>
			<p>12.11.7.	No ato do oferecimento de recurso deverá ser recolhido o preço público devido, nos termos do que dispõe o artigo 17 do Decreto nº 51.714/2010.</p>
				
			<Comments :attr="{id:commentId(), context:'12.11.	O valor da multa poderá ser descontado das faturas devidas à CONTRATADA, conforme dispõe o parágrafo único do artigo 55 do Decreto Municipal nº 44.279/2003.'}" v-if="estaConsulta.ativo == 1"></Comments>

		</section>
		
		<section>
			<h2 class="titulo" indent="1">13.	DA FISCALIZAÇÃO DO CONTRATO</h2>
			<h3>13.1.	A fiscalização do presente Contrato será exercida pela Secretaria Municipal de Inovação e Tecnologia - SMIT, por intermédio de servidor(es) designado(s) para tal finalidade, a quem competirá(ão) observar as atividades e os procedimentos necessários ao exercício das atribuições de fiscalização estabelecidas no Decreto nº 54.873 de 25 de Fevereiro de 2014, durante sua vigência.</h3>
				
			<Comments :attr="{id:commentId(), context:'13.1.	A fiscalização do presente Contrato será exercida pela Secretaria Municipal de Inovação e Tecnologia - SMIT...'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>13.2.	A fiscalização dos serviços pela Contratante não exime, nem diminui a completa responsabilidade da Contratada por qualquer inobservância ou omissão às cláusulas contratuais.</h3>				
			<Comments :attr="{id:commentId(), context:'13.2.	A fiscalização dos serviços pela Contratante...'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section v-observe-visibility="{
						callback: (isVisible, entry) => visibilityChanged(isVisible, entry, 'anexoI'),
						once: true
					}">
			<h2 class="titulo" indent="1"><a :href="fileSrc('ANEXO_I.pdf')" target="_blank">ANEXO I - HISTÓRICO DE LIGAÇÕES E VOLUME - RECEPTIVO</a></h2>
			<p>
				<embed
					v-if="isVisible.anexoI"					
					:src="fileSrc('ANEXO_I.pdf')"
					width="700"
					height="500"
					alt="pdf"
					pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">
			</p>
			<Comments :attr="{id:commentId(), context:'ANEXO I - HISTÓRICO DE LIGAÇÕES E VOLUME - RECEPTIVO'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section v-observe-visibility="{
						callback: (isVisible, entry) => visibilityChanged(isVisible, entry, 'anexoII'),
						once: true
					}">
			<h2 class="titulo" indent="1"><a :href="fileSrc('ANEXO_II.pdf')" target="_blank">ANEXO II - HISTÓRICO DE LIGAÇÕES E VOLUME - ATIVO</a></h2>
			<p>
				<embed
					v-if="isVisible.anexoII"
					:src="fileSrc('ANEXO_II.pdf')"
					width="700"
					height="500"
					alt="pdf"
					pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">
			</p>
			<Comments :attr="{id:commentId(), context:'ANEXO II - HISTÓRICO DE LIGAÇÕES E VOLUME - ATIVO'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>


		<section v-observe-visibility="{
						callback: (isVisible, entry) => visibilityChanged(isVisible, entry, 'anexoIII'),
						once: true
					}">
			<h2 class="titulo" indent="1"><a :href="fileSrc('ANEXO_III.pdf')" target="_blank">ANEXO III - HISTÓRICO DE VOLUMETRIA DE ATENDIMENTOS VIA CHAT</a></h2>
			<p>
				<embed 
					v-if="isVisible.anexoIII"
					:src="fileSrc('ANEXO_III.pdf')"
					width="700"
					height="500"
					alt="pdf"
					pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">
			</p>
			<Comments :attr="{id:commentId(), context:'ANEXO III - HISTÓRICO DE VOLUMETRIA DE ATENDIMENTOS VIA CHAT'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section v-observe-visibility="{
						callback: (isVisible, entry) => visibilityChanged(isVisible, entry, 'anexoIV'),
						once: true
					}">
			<h2 class="titulo" indent="1"><a :href="fileSrc('ANEXO_IV.pdf')" target="_blank">ANEXO IV - HISTÓRICO DE VOLUMETRIA DE ENVIOS DE SMS PERÍODO DE 2016 À 2019</a></h2>
			<p>
				<embed
					v-if="isVisible.anexoIV"
					:src="fileSrc('ANEXO_IV.pdf')"
					width="700"
					height="500"
					alt="pdf"
					pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">
			</p>
			<Comments :attr="{id:commentId(), context:'ANEXO IV - HISTÓRICO DE VOLUMETRIA DE ENVIOS DE SMS'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section v-observe-visibility="{
						callback: (isVisible, entry) => visibilityChanged(isVisible, entry, 'anexoV'),
						once: true
					}">
			<h2 class="titulo" indent="1"><a :href="fileSrc('ANEXO_V.pdf')" target="_blank">ANEXO V - MODELO DE ACORDO DE NÍVEL DE SERVIÇO</a></h2>
			<p>
				<embed
					v-if="isVisible.anexoV"
					:src="fileSrc('ANEXO_V.pdf')"
					width="700"
					height="500"
					alt="pdf"
					pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">
			</p>
			<Comments :attr="{id:commentId(), context:'ANEXO V - MODELO DE ACORDO DE NÍVEL DE SERVIÇO'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && parseInt(estaConsulta.ativo) === 1" :attr="{id:commentId(), context:'Comentarios'}"></Comments>

		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
// import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import Imagem from '@/components/Imagem'

export default {
	name: 'TrContactCenter',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			isVisible: {
				anexoI: false,
				anexoII: false,
				anexoIII: false,
				anexoIV: false,
				anexoV: false
			}
		}
	},
	components: {
		Comments,
		CommentsLoader,
		PageTop,
		Indice,
		Imagem
		// Apoio
	},
	mixins: [ consultasCommons ],
	methods: {
		fileSrc (fileName) {
			let url = this.$store.getters.basePath + 'arquivos/tr-contact-center/' + fileName
			return url.toString()
		},
		visibilityChanged (isVisible, entry, itemVisivel) {
			this.isVisible[itemVisivel] = isVisible
		},
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

ul > li {
	list-style-type: disc;
}
ul > li > ul > li {
	list-style-type: circle;
}
.sqr-ul li {
	list-style-type: square;
	margin-left: 4em;
}
.tab-header {
	background-color: #bbb;
}
table {
	font-size: 22px;
}
p.s2 {
	padding-left: 3em;
}
// p.s2 > ul {
// 	padding-left: 4em;
// }
p.s3 {
	padding-left: 4em;
}
p.s4 {
	padding-left: 5em;
}
p.s5 {
	padding-left: 6em;
}
// h2.titulo > a {
a {
	color: black;
}
h3 {
	font-weight: normal;
}

.visible {
		opacity: 1;
		transition-delay: 800;
		transition: opacity 0.5s ease;
	}
</style>
