<template>
	<div class="TrContactCenter" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/placeholder_480w.jpg" :esta_consulta="estaConsulta">
			<!-- <template slot="titulo"><div>Termo de Referencia para contratação de serviços de planejamento, implantação, operação, gerenciamento de central de atendimento e gestão de atendimento receptivo e ativo nas formas eletrônica e humana.</div></template> -->
			<template slot="titulo"><div>Minuta - Termo de Referência para Contact Center</div></template>
			<template slot="subtitulo"><div>Termo de Referencia para contratação de serviços de planejamento, implantação, operação, gerenciamento de central de atendimento e gestão de atendimento receptivo e ativo nas formas eletrônica e humana.</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<!-- <Apoio></Apoio> -->
		<!-- Decreto Nº 56.901 inclua este componente caso seja um PIU -->

		<section>
			<h2 class="titulo" indent="1">1.	OBJETO</h2>
			<h3>1.1.	Contratação de serviços de planejamento, implantação, operação, gerenciamento de central de atendimento e gestão de atendimento receptivo e ativo nas formas eletrônica e humana. </h3>
			<Comments :attr="{id:commentId(true), context:'1.1.	Contratação de serviços de planejamento, implantação, operação, gerenciamento de central de atendimento e gestão de atendimento receptivo e ativo nas formas eletrônica e humana.'}" v-if="estaConsulta.ativo == 1"></Comments>
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
			<p>3.10.1.	A Prefeitura do Munícipio de São Paulo disponibilizará uma solução de atendimento ao cidadão que deverá ser utilizada por todos os operadores do CONTACT CENTER (telefonia, chat e redes sociais se houver), para acolhimento de todos as solicitações registradas para a Prefeitura pelos canais 156, 199 e 153.</p>
			<p>3.10.2.	Esta solução de atendimento deve ser integrada - via Computer Telephony Integration (CTI) - ao Distribuidor Automático de Chamadas (item 3.3) e à Unidade de Resposta Audível (item 3.2) </p>
			<p>3.10.3.	A solução a ser disponibilizada será apresentada em momento oportuno após processo licitatório em andamento para contratação da solução de atendimento ao cidadão <b style="color: red">(INSERIR NUMERO DO EDITAL)</b>.</p>
				
			<Comments :attr="{id:commentId(), context:'3.10.	Sistema de Gestão de Atendimento'}" v-if="estaConsulta.ativo == 1"></Comments>
			
			<h3>3.11.	Disparo Eletrônico de Mensagens de Texto Tipo SMS</h3>
			<p>3.11.1.	A CONTRATADA deverá disponibilizar o serviço “Disparo Eletrônico de Mensagens de Texto”, para envio de mensagens do tipo SMS para os telefones móveis cadastrados na base de dados da PMSP, utilizando plataforma automática, de sua responsabilidade.</p>
			<p>3.11.2.	A mensagem deverá ser gravada em um arquivo texto. Sendo assim, a mensagem deverá ser redigida, sempre mediante a solicitação prévia, com conteúdos exclusivamente fornecidos pela CONTRATANTE.</p>
			<p>3.11.3.	A CONTRATADA deverá manter sempre o sigilo absoluto de todas e quaisquer informações prestadas pela CONTRATANTE.</p>
			<p>3.11.4.	A CONTRATADA deverá efetuar até 3 (três) tentativas de envio para um mesmo número de telefone, salvo quando definido de forma distinta pela CONTRATANTE.</p>
			<p>3.11.5.	A CONTRATADA também deverá disponibilizar recursos para extração de relatórios de todas as mensagens SMS enviadas com seus respectivos retornos.</p>
			<p>3.11.6.	O serviço de disparo eletrônico poderá ser alimentado por informações gravadas em arquivos de “formato texto”, com padrão ASCII e com layout definido.</p>
			<p>3.11.7.	A CONTRATADA deverá disponibilizar APIs com funcionalidades para o disparo de SMS que poderão ser consumidas pela CONTRATANTE permitindo desta forma, uma melhor integração entre sistemas.</p>
			<p>3.11.8.	As mensagens deverão ser disparadas sempre que houver campanhas institucionais, mediante solicitação da CONTRATANTE.</p>
			<p>3.11.9.	O solução de gerenciamento de SMS deverá possibilitar o registro, em banco de dados, de todas as informações acerca das campanhas solicitadas, para recuperação por meio de consultas e relatórios de gestão de mensagem, disponibilizados em tempo real, 24 por 7.</p>
			<p>3.11.10.	As informações que devem ser registradas e que serão utilizadas para estruturação de relatórios são: órgão emissor, identificador da solicitação, data e hora da emissão da solicitação, data e hora agendada para envio à operadora e informações de metadados cada uma das mensagens incluindo: </p>
				<p class="s2">3.11.10.1.	Identificador da mensagem; </p>
				<p class="s2">3.11.10.2.	Telefone do destinatário; </p>
				<p class="s2">3.11.10.3.	Prazo máximo para envio; </p>
				<p class="s2">3.11.10.4.	Status da solicitação; </p>
				<p class="s2">3.11.10.5.	Data e horário de envio à operadora.</p>
				
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
					<p class="s4">4.2.9.4.2.2.	Realizar ligações informativas acerca de serviços, projetos, programas, campanhas e políticas estabelecidas pela Prefeitura do Município de São Paulo, de acordo com o solicitado, mediante roteiros pré determinados.</p>
					<p class="s4">4.2.9.4.2.3.	Realizar, a critério da CONTRATANTE, pesquisas de satisfação do cidadão.</p>
					<p class="s4">4.2.9.4.2.4.	Contatar munícipes, sob demanda da CONTRATANTE, para complementar as informações de um chamado já aberto.</p>
					<p class="s4">4.2.9.4.2.5.	Não serão consideradas para fins de remuneração as ligações efetuadas que não forem atendidas, apresentarem sinal de ocupado, mensagem da operadora, número inválido, sinal de fax, linha muda.</p>
			<p class="s2">4.2.9.5.	Modelo de Atendimento Humano</p>
				<p class="s3">4.2.9.5.1.	 O atendimento humano receptivo e ativo será realizado por postos de atendimentos agrupados em ilhas de operação voltadas para assuntos/temas genéricos, conforme definição da CONTRATANTE, compreendendo atendimento multiperfil e/ou assuntos/temas exclusivos, envolvendo atendimento dedicado e/ou especializado, conforme definição da CONTRATANTE.</p>
				<p class="s3">4.2.9.5.2.	 O atendimento multiperfil compreende atendimentos de forma compartilhada em diversos tipos de assuntos/serviços, respeitando o limite de assuntos/serviços por operador definidos pela CONTRATANTE, possibilitando o agrupamento em ilhas de atendimento de serviços que possuem afinidades de informações comuns, sistemas e procedimentos, conforme abaixo ilustrado:</p>
								<img src="">
				<!--Figura 1 - Atendimento multiperfil-->

				<p class="s3">4.2.9.5.3.	 O atendimento dedicado ou especializado refere-se aos serviços que apresentam conteúdo e informações específicas, assim definidos a critério da CONTRATANTE, englobando ilhas determinadas, conforme abaixo ilustrado:</p>
								<img src="">
				<!--Figura 2 - Atendimento dedicado-->

				<p class="s3">4.2.9.5.4.	Os assuntos/serviços que serão atendidos nas ilhas multiperfil ou nas especializadas, serão definidas de comum acordo entre a Prefeitura do Município de São Paulo e a CONTRATADA, seguindo os padrões de temas / assuntos / serviços estabelecidos pela CONTRATANTE.</p>
				4.2.9.5.5.	O histórico e a volumetria das ligações atendidas (Receptivo) no âmbito da Central de Atendimento atual está representada no <strong>ANEXO I</strong> - HISTÓRICO DE LIGAÇÕES E VOLUME - RECEPTIVO.
				<p class="s3">4.2.9.5.6.	O histórico e a volumetria das ligações realizadas (Ativo) no âmbito da Central de Atendimento atual está representada no <strong>ANEXO II</strong> - HISTÓRICO DE LIGAÇÕES E VOLUME - ATIVO.</p>
				<p class="s3">4.2.9.5.7.	O operador/atendente multiperfil deverá trabalhar com até 3 (três) categorias de assuntos/temas, conforme definidos pela CONTRATANTE, em ordem decrescente de prioridade, em que 80% (oitenta por cento) dos atendimento reflitam no assunto/tema de primeira prioridade.</p>
				<p class="s3">4.2.9.5.8.	O operador/atendente, tanto multiperfil quanto especialista, deverá estar preparado para efetuar o atendimento receptivo e ativo em uma mesma posição.</p>
				<p class="s3">4.2.9.5.9.	A adoção do atendimento multiperfil ou dedicado obedecerá a critérios definidos exclusivamente pela CONTRATANTE, de acordo com a complexidade e/ou segurança dos procedimentos de atendimento de cada ilha de atendimento.</p>
				<p class="s3">4.2.9.5.10.	O atendimento também será realizado via CHAT, sendo que cada operador/atendente pode atender até 4 cidadãos simultaneamente.</p>
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
				<p class="s2">4.5.6.8.	Índice de disponibilidade da Solução Tecnológica de Gestão  de Atendimento no Contact Center</p>
					<p class="s3">4.5.6.8.1.	Meta >= 99,7% (noventa e nove e sete décimos por cento) mensal</p>
					<p class="s3">4.5.6.8.2.	Entende-se por “disponibilidade” o percentual do tempo total em que a solução esteve disponível para uso no mês em relação ao total de horas que a solução estava programada para estar disponível no mês.</p>
					<p class="s3">4.5.6.8.3.	Embora a solução sistêmica de gestão de atendimento será um produto a ser utilizado na Central de Atendimento pelos diversos operadores e supervisores, o ambiente de infraestrutura tecnológica deverá manter o índice de operação da solução em  99,7%.</p>
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
								<li>○	Formado em Curso Superior de qualquer área de atuação;</li>
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

					<table class="tab-grid">

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



				<Comments :attr="{id:commentId(), context:'4.7.	Recursos Humanos'}" v-if="estaConsulta.ativo == 1"></Comments>
				

			</section>
			
			
			
			
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

export default {
	name: 'TrContactCenter',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {}
		}
	},
	components: {
		Comments,
		CommentsLoader,
		PageTop,
		Indice
		// Apoio
	},
	mixins: [ consultasCommons ]
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
.tab-grid {
	font-size: 22px;
}

</style>
