<template>
	<div class="DigilabLivreSP" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/digilab-livre-sp_dt.jpg" :esta_consulta="estaConsulta">
			<template slot="subtitulo">
				<div>{{ estaConsulta.textoIntro }}</div>
			</template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<!-- <Apoio>
		<template slot="item1">
			<li>
				<input type="radio" name="tabs" id="item1">
				<label for="item1">Anexos</label>
				<div class="conteudoTab">
					<ul style="list-style-type: square; color: #DDD;">						
					    <li v-for="anexo in anexos">
					    	<a :href="fileSrc(anexo)">{{ anexo }}</a>
					    </li>
					</ul>
				</div>
			</li>
		</template>
		</Apoio> -->

		<section>
			<h2 class="titulo" indent="1">Introdução</h2>
			<div>
				<p>A Prefeitura de São Paulo, por meio da parceria entre a Secretaria de Inovação e Tecnologia e a Secretaria de Desenvolvimento Econômico (SMIT e SMDE), quer saber sua opinião sobre o projeto de modernização dos Telecentros, equipamentos públicos que promovem a inclusão digital na cidade de São Paulo.</p>
			</div>
			<br />

			<h3>Histórico:</h3>
			<p>
				Os Telecentros surgiram em 2001 como o primeiro programa de inclusão digital da cidade de São Paulo. O programa promove a democratização de acesso à internet, capacitando usuários das comunidades locais, em especial aquelas com maior vulnerabilidade social. Em 14 janeiro de 2008 foi legitimado pela Lei Municipal nº 14.668 que definiu as diretrizes da Política Municipal de Inclusão Digital do Município de São Paulo, estabelecendo os objetivo estratégico o exercício da cidadania. Atualmente, a Capital possui 132 Telecentros dispostos nas regiões das 32 Subprefeituras Regionais. 
			</p>
			<p>
				A evolução tecnológica, porém, rompeu as barreiras do tempo, fazendo com que o programa não tenha avançado na mesma velocidade do comportamento de seus usuários. A quantidade de ferramentas digitais foi ampliada exponencialmente, surgiram novas formas de produção, consumo, aprendizagem e relacionamento que estão moldando a sociedade na era da informação. Diante disso, verificamos que a essência do programa precisa ser superada por meio de iniciativas que ampliem e potencializem a utilização destes equipamentos públicos e os propósitos do programa.
			</p>
			
			<h3>Proposta de Mudança</h3>
			<p>
				A Coordenadoria de Convergência Digital da secretaria municipal de Inovação e Tecnologia, responsável pela gestão dos Telecentros, em parceria com a Agência de Desenvolvimento Econômico (ADE SAMPA), sob comando da secretaria de Desenvolvimento Econômico, entende que se faz necessária a ressignificação do programa para que ele, de fato, cumpra seu papel de inclusão digital e social.
			</p>
			<p>
				Para a compreensão das premissas deste novo conceito foram utilizadas técnicas e metodologias baseadas em design thinking, design de serviço e urbanismo tático com foco no usuário, ou seja, a população. Entre visitas técnicas, benchmarkings, pesquisa de satisfação, oficinas de cocriação, jornadas de usuário e prototipação, entendeu-se que o projeto de ressignificação do programa Telecentros deve ter como objetivo:
			</p>
			<p>
				“Promover o desenvolvimento humano, econômico e social, por meio de laboratórios<a @click="scrollMeTo('fn1')" ref="ref1"><sup>1</sup></a> digitais que tenham por finalidade a inclusão social do cidadão”
			</p>
			<p>
				É com base nestas propostas que  nasce o projeto piloto que irá testar a efetividade desse estudo: o DIGILAB LIVRE SP
			</p>

			<h3>DIGILAB LIVRE SP</h3>






			<p>
				Em meio a um cenário de avanços que impactarão o futuro dos negócios e da educação, sob a certeza de que grande parte das habilidades requeridas para trabalhos estratégicos em diversas indústrias ainda não são parte do currículo escolar e que crianças ingressando na educação básica hoje, quando adultas, terão empregos que ainda não existem, nasce o conceito do DIGILAB LIVRE SP.
			</p>
			<p>
				Na prática, um laboratório público e gratuito que promoverá ambiente livre e infraestrutura tecnológica para conectar pessoas, projetos e ideias.
			</p>
			<p>
				O programa que irá fomentar a troca do conhecimento e o empreendedorismo, o trabalho compartilhado e a livre aprendizagem.
			</p>
			<p>
				Utilizar a internet, fazer reuniões de trabalho, estudar, participar de cursos e, oferecer capacitações, tornando-se protagonista do conteúdo oferecido, nas áreas da informática, programação e empreendedorismo, sempre com métodos e abordagens que consideram as habilidades socioemocionais e o desenvolvimento do cidadão, serão práticas diárias nestes espaços.
			</p>
			<p>Principais objetivos do DIGILAB LIVRE SP:
				<ol>
					<li>Promover a inclusão digital e social;</li>
					<li>Ser um <i>hub</i><a @click="scrollMeTo('fn2')" ref="ref2"><sup>2</sup></a> de inovação e tecnologia nas regiões, atendendo empreendedores, moradores locais, estudantes e servindo como ponto de apoio para outros programas e projetos da Administração Municipal, criando uma rede de relacionamento entre os usuários do serviço;</li>
					<li>Disseminar a cultura e a educação empreendedora;</li>
					<li>Promover o desenvolvimento local e a geração de emprego e renda;</li>
					<li>Estimular a inovação aberta;</li>
					<li>Inserir jovens de baixa renda no ecossistema de empreendedorismo e inovação da cidade de São Paulo.</li>
				</ol>
			</p>
			<h3>Processo Participativo</h3>
			<p>
				É raro que novos programas e políticas públicas não necessitem de nenhum tipo de ajuste quando implantados. Mesmo com planejamento e participação social, na prática, algumas variáveis podem ficar de fora e, em regra, não é possível saber como a população irá utilizar e reagir à utilização do serviço. Por isso, disponibilizamos aqui alguns documentos que explicam melhor o projeto, para que a população possa participar também dessa fase e dar sua opinião.
			</p>
			<p>
				Os arquivos que seguem ficarão disponíveis para consulta e comentários até o dia 12/10/2018.
			</p>
			<p>
				Em seguida, os resultados serão apurados para formulação dos documentos que irão orientar a implantação dos 3 primeiros pilotos, onde iremos experimentar as novas ideias apresentadas, verificar a viabilidade e aderência do serviço, refletir e planejar os ajustes necessários do programa, coletar dados, avaliar os resultados e apresentá-los à sociedade civil.
			</p>
			<p>
				Eventuais dúvidas e sugestões quanto aos documentos poderão ser direcionadas ao contato <a href="mailto:digilab@prefeitura.sp.gov.br">digilab@prefeitura.sp.gov.br</a> até o prazo limite de 12 de outubro.
			</p>
			<br />
			<p class="footnote">
				<sup ref="fn1">1 </sup>Laboratório é um espaço para criação, exames, testes, descobertas e treinamentos que podem pertencer às várias modalidades de estudo. Segundo o dicionário Oxford, a palavra laboratório provém do latim <i>laboratorium</i> (local para trabalhar), que por sua vez vem do latim laboratus, princípio do verbo laborare (trabalhar).<a @click="scrollMeTo('ref1')">↩</a>
			</p>
			<p class="footnote">
				<sup ref="fn2">2 </sup>A palavra “hub” se refere na linguagem tecnológica a uma peça central, que recebe os sinais transmitidos pelas estações e os retransmite para todas as demais. No caso dos espaços físicos, os <i>hubs</i> se caracterizam por um lugar propício para o encontro de pessoas que interagem e, consequentemente, criam, empreendem e trabalham juntas.<a @click="scrollMeTo('ref2')">↩</a>
			</p>
			<Comments :attr="{id:1, context:'Introdução'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<hr />
		<section>
			<h2 class="titulo" indent="1">Apresentação do Projeto Piloto</h2>
			<br />
			<iframe id="ifrSlides" src="https://docs.google.com/presentation/d/e/2PACX-1vRGsgbKlyCjQPYJXvZiWwCXEM9cPHK8MZZdSpPuKifJVD0SFZ5mw0A_dhza20r10i6Gjfsax6xMB_Wt/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="405" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
			<br />
			<Comments :attr="{id:2, context:'Apresentação do Projeto Piloto'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<hr />

		<section>
			<h2 class="titulo" indent="1">Regras de Utilização</h2>
		</section>
		<section>
			<h3 class="titulo" indent="2">1. Objetivo</h3>
			<p>
				Este documento tem como objetivo balizar a implementação dos projetos-piloto “DIGILAB LIVRE SP”, criar regras de uso dos equipamentos, recursos, espaços e serviços que serão disponibilizados, tanto por parte dos Agentes de Inclusão Digital (AID’s) e Supervisores Técnicos Regionais (STR’s), quanto dos munícipes; bem como prever o fluxo na plataforma centralizadora (Plataforma de Convergência Digital) vinculada à Coordenadoria de Convergência Digital (CCD) da Secretaria de Inovação e Tecnologia (SMIT) da Prefeitura Municipal de São Paulo (PMSP).
			</p>
			<Comments :attr="{id:3, context:'Regras - 1. Objetivo'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<h3 class="titulo" indent="2">2. Sobre as Regras</h3>
			<p>
				Refere-se às regras aplicadas aos espaços, equipamentos e serviços oferecidos como parte do projeto de ressignificação dos equipamentos de convergência digital da Secretaria de Inovação e Tecnologia em parceria com a Secretaria de Trabalho e Empreendedorismo da Cidade de São Paulo estão em consonância com a LEI Nº 13.460, DE 26 DE JUNHO DE 2017, atendendo as diretrizes da Lei Municipal nº 14.668, de 14 de janeiro de 2008, que instituiu a Política Municipal de Inclusão Digital do Município de São Paulo, respeitando ainda o previsto no art. 10 do Decreto Municipal nº 50.554, de 07 de abril de 2009. Este documento poderá ser constantemente atualizado pela Coordenadoria de Convergência Digital, sendo de responsabilidade dos Agentes de Inclusão Digital conhecimento das atualizações e replicarem para os usuários. O não cumprimento às regras aqui estabelecidas pode acarretar sanções disciplinares previstas no item de número 10. Qualquer sugestão, dica ou reclamação no tocante às regras aqui dispostas poderá ser feita por meio de comunicado enviado para o email digilab@prefeitura.sp.gov.br ou pelo Canal 156.
			</p>
			<Comments :attr="{id:4, context:'Regras - 2. Sobre as Regras'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="2">3. Regras de uso, acesso e agendamento</h3>
			<h4>3.1. Livre Utilização</h4>
			<p>
				Qualquer pessoa, grupo, entidade civil ou privada, poderá se deslocar até um DIGILAB LIVRE SP para utilizar o espaço e os equipamentos disponíveis de forma livre, gratuitamente, divididos em sessões de uma hora, podendo ser renovadas por mais sessenta minutos, conforme disponibilidade, e ordem de chegada, asseguradas as prioridades legais às pessoas com deficiência, aos idosos, às gestantes, lactantes e pessoas com crianças de colo, mediante cadastro único e reserva por meio da plataforma de convergência digital, sob orientação dos AID´s. Entre as atividades de livre utilização possíveis inclui-se o uso do espaço em si, onde, por meio de reserva/ agendamento de horário, pode-se realizar encontro de grupos, reunião, palestra, oficina ou aula informativa, evento de negócios, sessão de estudo, apresentação pública ou qualquer evento que tenha como objetivo disseminar conteúdo cultural, troca de conhecimento e/ou que incentive o empreendedorismo e beneficie o desenvolvimento local.
			</p>
			<p>
				Todo e qualquer evento promovido dentro do espaço do DIGILAB LIVRE SP, ou que faça uso de algum equipamento, deve ser totalmente gratuito para a população, isento de quaisquer taxas ou cobranças que beneficiem qualquer entidade física ou jurídica, conforme previsto na Lei Municipal 14.668 de 14 de janeiro de 2008, em consonância com a Lei Federal 13.460 de 26 de junho de 2017.
			</p>

			<h4>3.2. Limite do tempo de uso</h4>
			<p>
				Não há limitador máximo de uso. O usuário poderá solicitar a renovação da reserva do espaço ou equipamento por períodos de uma hora, desde que não haja fila de espera e/ou reserva de outro usuário. Neste caso, o usuário que tenha interesse em continuar utilizando, deverá solicitar nova reserva e aguardar disponibilidade na fila de espera.
			</p>

			<h4>3.3. Acesso via cadastro</h4>
			<p>
				De acordo com o previsto no art. 10 do Decreto Municipal nº 50.554, de 07 de abril de 2009, os usuários deverão fazer cadastro na Plataforma de Convergência Digital, em qualquer equipamento do Sistema Municipal de Inclusão Digital, com o auxílio do Agente de Inclusão, prestando informações verídicas, pelas quais respondem nos termos da Lei. É admitido o cadastramento de usuários com idade a partir de sete anos, podendo ser essa idade reduzida em caso de criação de programas especiais, observados os horários adequados, mediante autorização dos pais ou responsáveis legais, por meio de cadastro na Plataforma de Convergência Digital e Termo de Responsabilidade impresso e assinado pelo responsável, que deverá ser entregue para o Agente de Inclusão Digital e registrado na Plataforma de Convergência Digital. No cadastro do usuário, deverão constar informações como: nome completo, registro de identidade civil, inscrição no Cadastro de Pessoas Físicas do Ministério da Fazenda CPF/MF) e endereço; se o usuário for civilmente incapaz, deverão constar também os dados do respectivo representante legal, que responderá, nos termos da Lei, por todos os atos por aquele praticados. Caso o usuário não tenha nenhum registro civil e seja incapaz de comprovar as informações solicitadas para o cadastro, ele poderá ter acesso ao serviço por meio de um cadastro genérico de Usuário em Situação Especial; por exemplo, pessoa em situação de rua. Esse cadastro deve conter o máximo de informações possíveis a respeito do usuário, inclusive foto tirada na hora do cadastramento.
				<br />
				Obs.: como complemento ao serviço, deverá ser dada orientação sobre como o usuário pode regularizar sua documentação por meio de encaminhamento ao Sistema Único de Assistência Social (SUAS).
			</p>
			<h4>3.4. Agendamento via Plataforma de Convergência Digital</h4>
			<p>
				Será possível, ao usuário não cadastrado no serviço, fazer pré-cadastro no site da Plataforma de Convergência Digital, acessível pela internet ou ainda utilizando o canal SP 156. Esse cadastro deverá ser validado mediante comparecimento do usuário a uma unidade do Digilab Livre SP e apresentação do documento original com foto — Registro de Identidade Civil (RG) ou Cadastro de Pessoas Físicas do Ministério da Fazenda (CPF/MF) — para que ele tenha acesso ao serviço. Para usuário já cadastrado na Plataforma de Convergência Digital, será possível a reserva ou agendamento prévio de serviço ou equipamento do Digilab Livre SP por meio do site desta Plataforma acessível pela internet. Esta reserva será efetivada mediante comparecimento do usuário a uma unidade do Digilab Livre SP e apresentação do documento comprovante de identidade, validado pelo Agente de Inclusão Digital. Será considerado o prazo de tolerância de dez minutos para apresentação e efetivação da reserva feita previamente pelo usuário. Após esse período, a reserva é automaticamente cancelada e o usuário deverá fazer nova reserva, conforme disponibilidade.
			</p>
			<Comments :attr="{id:5, context:'Regras - 3. Regras de uso, acesso e agendamento'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<h3 class="titulo" indent="2">4. Horário de Funcionamento</h3>
			<p>
				O horário de abertura e fechamento dos DIGILABs LIVRE SP é determinado pela Coordenadoria de Convergência Digital, em comum acordo com os Administradores e Agentes dos equipamentos onde o Dibilab Livre SP está inserido, conforme demanda e recursos de cada unidade, tendo como referência o período de nove horas de serviço diário, constante no Decreto Municipal. Essa definição deverá estar exposta nos canais de comunicação do Digilab Livre SP, na Plataforma de Convergência e em comunicado afixado em local visível na unidade. A alteração do horário de funcionamento deverá ser informada e alinhada com a Coordenadoria de Convergência Digital com antecedência.
			</p>
			<Comments :attr="{id:6, context:'Regras - 4. Horário de Funcionamento'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<h3 class="titulo" indent="2">5. Atividades Oferecidas</h3>
			<p>
				Fazem parte da proposta de serviços oferecidos pelo Digilab Livre SP a facilitação, incentivo e realização de atividades e conteúdos abertos ao público, por meio físico e digital, direcionadas ao acesso, capacitação e aperfeiçoamento no uso da tecnologia da informação, empreendedorismo e qualificação profissional.
			</p>

			<h4>5.1. Atividades Culturais</h4>
			<p>
				O espaço do Digilab Livre SP poderá ser usado para realização de atividades culturais gratuitas à população, mediante reserva prévia por meio da Plataforma de Convergência Digital e aprovação da Coordenadoria de Convergência Digital. As atividades devem ser relacionadas às áreas do conhecimento, conforme dispostos na Trilha do Conhecimento do Plano de Trabalho, com o objetivo de capacitar, educar e disseminar conteúdo cultural, empreendedor e digital para os cidadãos. O planejamento, método de inscrição e realização das atividades são de responsabilidade do realizador/ organizador da atividade e poderá ser feita na Plataforma de Convergência Digital, com o auxílio do Agente de Inclusão Digital, mediante comunicação prévia, agendamento e aprovação da Coordenadoria de Convergência Digital.
			</p>

			<h4>5.2. Atividades de orientação</h4>
			<p>
				O usuário poderá ter o apoio de Agentes de Inclusão Digital (AID’s) capacitados para dar orientação quanto ao uso de softwares, ferramentas digitais e internet, indicação de soluções digitais e encaminhamentos para capacitação profissional por meio de cursos, formalização de microempreendedor individual (MEI) e eventos voltados ao empreendedorismo.
			</p>
			<p>
				As atribuições e responsabilidades dos Agentes de Inclusão Digital, dos Supervisores Técnicos Regionais e da Coordenadoria de Convergência Digital podem ser verificadas no documento anexo, neste link: <a href="https://docs.google.com/document/d/1zH-k5lUpcyLK4b0DAHBK750nmCtZbo1V5XICfunB_xk/edit?usp=sharing" target="_blank">https://docs.google.com/document/d/1zH-k5lUpcyLK4b0DAHBK750nmCtZbo1V5XICfunB_xk/edit?usp=sharing</a>
			</p>

			<h4>5.3. Articulação de rede de contatos (hub de networking e troca de informação)</h4>
			<p>
				O espaço e equipamentos do DIGILAB LIVRE SP devem promover e incentivar a troca de informação e conhecimento entre os frequentadores, bem como auxiliar na divulgação de atividades, serviços, ideias, projetos e negócios realizados pela rede territorial e nos canais de comunicação (mídias sociais e Plataforma de Convergência Digital), por meio da articulação do Agente de Inclusão Digital, bem como no Mural de Convergência Digital e Plataforma de Convergência Digital, com o objetivo de criar redes de contatos e desenvolver potencialidades locais nas comunidades onde estão inseridos.
			</p>
			<Comments :attr="{id:7, context:'Regras - 5. Atividades Oferecidas'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<h3 class="titulo" indent="2">6. Regras de utilização por equipamento</h3>
			<p>
				A lista de EQUIPAMENTOS BÁSICOS PADRÃO que configuram um equipamento DIGILAB LIVRE SP está no arquivo anexo, e pode ser acessado por meio deste link: <a href="https://goo.gl/gZfKDb" target="_blank">https://goo.gl/gZfKDb</a>.
			</p>
			<p>
				Cada equipamento disponível em um DIGILAB LIVRE SP tem sua regra de utilização individual, que é submetida às regras gerais de uso, acesso e agendamento, conforme segue:
			</p>

			<h4>6.1. Mesas</h4>
			<p>
				Deve-se ter o número mínimo de doze mesas disponíveis para uso livre, mediante disponibilidade de horário e reserva prévia por meio da Plataforma de Convergência Digital. As mesas podem ser usadas como estações de trabalho, junto com uma cadeira e computador (PAX), ou para estudo, leitura, realização de trabalho escolar e realização de reuniões de trabalho. Quando o equipamento mesa dispuser de mecanismo dobrável e/ou rodas, elas poderão ser organizadas em formatos diferentes, conforme a necessidade do uso, sempre mediante acompanhamento dos AID’s, como por exemplo, a realização de uma aula, oficina prática, reunião, etc.
			</p>

			<h4>6.2. Cadeiras</h4>
			<p>
				Deve-se ter o número mínimo de doze cadeiras, equivalente ao número de mesas, por espaço, disponíveis para uso livre, mediante disponibilidade de horário e reserva prévia por meio da Plataforma de Convergência Digital. As cadeiras podem ser usadas em conjunto com a mesa e o computador, formando uma estação de trabalho, ou de forma individual, para, por exemplo, compor uma sala de aula expositiva ou reunião em grupo.
			</p>

			<h4>6.3. Computadores</h4>
			<p>
				Deve-se ter o número mínimo de doze computadores, conforme especificações técnicas descritas no documento de EQUIPAMENTOS BÁSICOS PADRÃO, para uso livre, conforme disponibilidade e mediante reserva prévia por meio da Plataforma de Convergência Digital, sob supervisão e orientação dos AIDs, considerando sessões de uma hora, contadas pelo sistema interno da Plataforma de Convergência Digital e supervisionadas pelos AIDs. A sessão poderá ser renovada, por sessões de igual valor, conforme disponibilidade, dentro do horário de funcionamento do espaço.
			</p>
			<p>
				Para acesso ao sistema operacional do computador e demais softwares, será necessário login (inscrição) com usuário e senha cadastrados durante a reserva e confirmados com os AID’s.
			</p>
			<p>
				Todos os arquivos criados nos computadores são de responsabilidade do usuário e são armazenados apenas durante a sessão do usuário. É aconselhado que o usuário salve os arquivos em dispositivo móvel próprio como pendrives ou HDs, ou ainda em serviços gratuitos de armazenamento na nuvem, sendo de sua inteira responsabilidade o conteúdo, armazenamento e transmissão dos mesmos.
			</p>

			<h4>6.4. Locker</h4>
			<p>
				Deve-se ter um armário do tipo <i>locker</i>, com número de nichos equivalente a 70% do número de PAX. Exemplo: se o número de PAX é igual a doze, o l ocker deve ter oito nichos.
			</p>
			<p>
				O uso do <i>locker</i> é livre durante a permanência do usuário nas dependências do espaço, mediante disponibilidade e reserva prévia por meio da Plataforma de Convergência Digital. O usuário deve desocupar o l ocker sempre que sair das dependências do espaço e entregar as chaves para os AID´s. A guarda das chaves do <i>locker</i> é de responsabilidade dos AID’s. O conteúdo guardado no <i>locker</i> é de inteira responsabilidade do usuário, que poderá responder perante as Leis vigentes.
			</p>

			<h4>6.5. Armário para armazenar material de escritório</h4>
			<p>
				Deve-se ter ao menos um armário com chave para uso exclusivo administrativo, supervisionado pelos AID’s, para guardar insumos e equipamentos.
			</p>
			<p>
				Insumos são: material de escritório, papéis e cartuchos da impressora, materiais de limpeza etc.
			</p>
			<p>
				Equipamentos são todos aqueles mencionados na lista de equipamentos técnicos deste documento.
			</p>
			<p>
				A guarda das chaves desse armário, bem como o controle dos insumos e equipamentos, é de responsabilidade dos AID’s da unidade, sob a supervisão dos Supervisores Técnicos Regionais e da Coordenadoria de Convergência Digital.
			</p>
			<p>
				Obs.: sugere-se o uso de armário energizado para guardar os computadores portáteis/ notebook.
			</p>

			<h4>6.6. Armário para armazenar material de escritório</h4>
			<p>
				Deve-se ter ao menos um quadro branco, acompanhado de kit com apagador e caneta para quadro branco, disponíveis no espaço, para livre utilização, instalado em local seguro e acessível, conforme orientação da equipe técnica da CCD. O uso é livre, mediante disponibilidade e sob a supervisão dos AID´s.
			</p>

			<h4>6.7. Bancos de espera</h4>
			<p>
				Deve-se ter ao menos um banco (com três lugares) de espera em área interna, coberta, para uso livre dos visitantes do espaço, enquanto aguardam a disponibilidade do serviço. Também podem ser usados durante aulas, oficinas e outros eventos, dentro do espaço, sob supervisão dos AID’s. A prioridade de uso é sempre por ordem de chegada, asseguradas as prioridades legais às pessoas com deficiência, aos idosos, às gestantes, às lactantes e às pessoas acompanhadas por crianças de colo.
			</p>
			
			<h4>6.8. Bebedouro</h4>
			<p>Deve-se ter ao menos um bebedouro com água filtrada para uso de todos.</p>
			
			<h4>6.9. Tablets</h4>
			<p>
				Deve-se ter ao menos dois tablets (um para cada AID), conforme especificações técnicas descritas no documento de EQUIPAMENTOS BÁSICOS PADRÃO, para uso administrativo e exclusivo dos AID’s. Esse equipamento deve servir como ferramenta de trabalho dos AID’s, com o o qual farão a gestão do espaço, acompanhamento de reservas, registros e cadastros dos usuários na Plataforma de Convergência Digital, abertura de chamados via Help Desk, comunicação com outras áreas, etc.
				<br />
				O uso correto, guarda e cuidado desse equipamento é de responsabilidade dos AID´s.
			</p>
			
			<h4>6.10. Câmera Fotográfica</h4>
			<p>
				Deve-se ter ao menos uma câmera fotográfica por unidade, para uso livre, mediante reserva prévia por meio da Plataforma de Convergência Digital, conforme disponibilidade, considerando sessões de uma hora, contadas pelo sistema da plataforma e supervisionadas pelos AID’s, que poderão ser renovadas por sessões de igual valor conforme disponibilidade, dentro do horário de funcionamento do espaço, definido pela CCD.
				<br />
				O uso deste equipamento é restrito ao espaço do DIGILAB LIVRE SP e deve ser sempre supervisionado pelos AID´s.
			</p>
			
			<h4>6.11. Impressoras</h4>
			<p>
				Deve-se ter ao menos uma impressora multifuncional (impressora, copiadora, scanner) por unidade, conforme especificações técnicas descritas no documento de EQUIPAMENTOS BÁSICOS PADRÃO, para uso livre e gratuito, conforme disponibilidade, mediante reserva prévia por meio da Plataforma de Convergência Digital, sob supervisão dos AID´s. Cada usuário poderá imprimir a quantidade máxima de cinco páginas por dia, ficando sob a responsabilidade dos AID´s a supervisão e correta utilização do equipamento.
			</p>

			<h4>6.12. Projetores</h4>
			<p>
				Deve-se ter um projetor por unidade, conforme especificações técnicas descritas no documento de EQUIPAMENTOS BÁSICOS PADRÃO, para uso livre em atividades culturais, conforme disponibilidade, mediante reserva prévia por meio da Plataforma de Convergência Digital.
				<br />
				O uso deve ser feito dentro do espaço de domínio do DIGILAB LIVRE SP, sob a supervisão dos AID´s. O correto uso e operação do equipamento é de responsabilidade dos AID’s, bem como a guarda em local seguro e adequado.
			</p>

			<h4>6.13. Tela de Projeção</h4>
			<p>
				Deve-se ter uma tela de projeção por unidade, conforme especificações técnicas descritas no documento de EQUIPAMENTOS BÁSICOS PADRÃO, para uso livre, conforme disponibilidade, mediante reserva prévia por meio da Plataforma de Convergência Digital. O correto uso e operação do equipamento são de responsabilidade dos AID’s, bem como a guarda em local seguro e adequado.
			</p>

			<h4>6.14. TV</h4>
			<p>
				Como opção ao projetor, pode-se ter uma TV, conforme especificações técnicas descritas no documento de EQUIPAMENTOS BÁSICOS PADRÃO, para uso mediante reserva prévia por meio da Plataforma de Convergência Digital, sob supervisão dos AID´s, para apoio às atividades culturais, e apresentações de conteúdo informativo dentro do espaço do DIGILAB. A TV também poderá ser usada como mídia para comunicados importantes e conteúdos
			informativos durante o expediente normal do DIGILAB, tendo seu conteúdo controlado
			pelos AID´s e autorizados pela Coordenadoria de Convergência Digital.
			</p>
			
			<h4>6.15. Kit de som</h4>
			<p>
				Deve-se ter um KIT SOM por unidade, composto por microfone e caixa de som amplificada, conforme especificações técnicas descritas no documento de EQUIPAMENTOS BÁSICOS PADRÃO, para uso livre, em atividades culturais, conforme disponibilidade, mediante reserva prévia por meio da Plataforma de Convergência Digital, sob supervisão dos AID´s. O uso deve se dar dentro do espaço de domínio da CCD, ou em local adequado e previamente autorizado pela CCD. Sempre sob a supervisão dos AID´s. O correto uso e operação do equipamento é de responsabilidade dos AID´s, bem como a guarda em local seguro e adequado.
			</p>

			<h4>6.16. Switch</h4>
			<p>
				Uso administrativo, para possibilitar o oferecimento dos serviços prestados pelo DIGILAB LIVRE SP. A operação é restrita aos Supervisores Técnicos Regionais.
			</p>

			<h4>6.17. Servidor de rede e internet</h4>
			<p>
				Uso administrativo, para possibilitar o oferecimento dos serviços prestados pelo DIGILAB LIVRE SP. A operação é restrita aos Supervisores Técnicos Regionais.
			</p>
			
			<h4>6.18. Wifi Livre SP</h4>
			<p>
				Deve-se ter um ponto de WiFi (access point) por unidade, conforme especificações mínimas previstas pela equipe técnica da CCD.
			</p>

			<h4>6.19. Material de Escritório</h4>
			<p>
				Deve-se ter um kit Material de Escritório mínimo, conforme especificações técnicas descritas no documento de EQUIPAMENTOS BÁSICOS PADRÃO, de acordo com necessidade de cada unidade, para uso exclusivo dos usuários do serviço, durante atividades realizadas dentro do espaço, conforme disponibilidade e sob a supervisão dos AIDs, sendo composto por: papel sulfite A4, caneta esferográfica, caneta marca-texto, lápis preto, clips, grampeador, grampo para grampeador, tesoura sem ponta, fita adesiva transparente, cola bastão.
				<br />
				O não é permitido receber e/ou fazer doação de nenhum material do Digilab Livre SP. Exceções podem ser analisadas e encaminhadas à Coordenadoria de Convergência Digital.
				<br />
				O pedido de reposição de material de escritório deve ser feito por meio da Plataforma de Convergência Digital pelos AID’s e está sujeita a autorização da equipe técnica da Coordenadoria de Convergência Digital e estoque.
			</p>
			<Comments :attr="{id:8, context:'Regras - 6. Regras de utilização por equipamento'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<h3 class="titulo" indent="2">7. Regras comportamentais, de conduta e postura</h3>
			<p>
				É proibido fumar, consumir bebidas - alcoólicas ou não - ou alimentos nas estações de trabalho (PAX) ou enquanto estiver fazendo uso de algum equipamento do DIGILAB LIVRE SP;
			</p>
			<p>
				É proibido uso de equipamento sonoro (exceto fones de ouvido) que possa incomodar os demais usuários e/ou o funcionamento de atividades no local;
			</p>
			<p>
				É proibido fazer barulho excessivo ou manter conversas que possam atrapalhar os demais usuários e/ou o funcionamento de atividades no local;
			</p>
			<p>
				É proibido acesso a conteúdo impróprio, como sites eróticos, pornográficos ou qualquer outro que desrespeite a Constituição Federal de 1988 (incentivos à violência, discriminação étnica e religiosa, sites com imagens grotescas, etc);
			</p>
			<p>
				É proibida a retirada de qualquer equipamento para além do espaço do DIGILAB LIVRE SP, sem autorização prévia e acompanhamento do AID responsável.
			</p>
			<Comments :attr="{id:9, context:'Regras - 7. Regras comportamentais, de conduta e postura'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<h3 class="titulo" indent="2">8. Orientações para boa convivência dentro dos espaços</h3>
			<p>
				Para que se estabeleça um ambiente saudável e propício para o bom desenvolvimento das atividades dentro do espaço do DIGILAB LIVRE SP, recomenda-se ter posturas positivas, tanto no atendimento ao usuário quanto na convivência e compartilhamento dos espaços e equipamentos. Nesse sentido, recomenda-se:
				<br />
				<ul>
					<li>Respeite a todos que frequentam o espaço;</li>
					<li>Saiba falar e ouvir com respeito e atenção;</li>
					<li>Seja honesto sempre;</li>
					<li>Tenha empatia pelas pessoas;</li>
					<li>Colabore com o espaço e aprendizado de todos;</li>
					<li>Seja proativo e ajude os outros quando possível;</li>
					<li>Seja prudente;</li>
					<li>Seja atencioso, demonstre interesse e respeito durante as conversas;</li>
					<li>Zele pelos materiais, estrutura e equipamentos. Sabendo usar, nunca vai faltar;</li>
					<li>Observe e respeite as regras de utilização e dos locais;</li>
					<li>Observe e respeite os usos preferenciais assegurados por lei;</li>
					<li>Observe e respeite as filas de espera e os procedimentos de reserva;</li>
					<li>Obedeça às sinalizações de segurança;</li>
					<li>Dialogue sempre e respeite as opiniões diferentes da sua;</li>
					<li>Valorize e respeite o trabalho dos AID’s;</li>
					<li>Quando houver problemas, peça ajuda dos AID’s;</li>
					<li>O Digilab é seu também, mantê-lo é sua responsabilidade.</li>
				</ul>
			</p>
			<Comments :attr="{id:10, context:'Regras - 8. Orientações para boa convivência dentro dos espaços'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<h3 class="titulo" indent="2">9. Canais de comunicação e Ouvidoria</h3>
			<p>
				Para garantir que todos os atores envolvidos na construção e desenvolvimento desse equipamento, e em cumprimento a LEI Nº 13.460, DE 26 DE JUNHO DE 2017, o Digilab Livre SP dispõe de canais oficiais abertos para usuários, entidades, agentes e supervisores estejam sempre alinhados e em contato.
			</p>

			<h4>9.1. Canais Oficiais</h4>
			<p>
				email: <a href="mailto:digilab@prefeitura.sp.gov.br">digilab@prefeitura.sp.gov.br</a>
				<br />
				Chat via plataforma: Plataforma de Convergência Digital
				<br />
				Página Oficial do Facebook: <a href="https://www.facebook.com/digilablivresp" target="_blank">www.facebook.com/digilablivresp</a>
				<br />
				Telefone da Coordenadoria: 11 2075 7304
			</p>

			<h4>9.2. Telefones úteis</h4>
				<ul style="overflow: auto;">
					<li>Emergência de trânsito – 1188</li>
					<li>Emergência de saúde – 192</li>
					<li>Polícia Civil – 147</li>
					<li>Polícia Militar – 190</li>
					<li>Bombeiros – 193</li>
					<li>Achados e Perdidos (Correios) – <span><a href="https://www.correios.com.br/servicos/achados_perdidos" target="_blank">www.correios.com.br/servicos/achados_perdidos</a></span></li>
					<li>Serviços 24 horas – <a href="https://www.emsampa.com.br" target="_blank">www.emsampa.com.br</a> e <a href="https://www.guiamais.com.br" target="_blank">www.guiamais.com.br</a></li>
					<li>Defesa do Consumidor – 151</li>
					<li>Demais serviços - 156</li>
				</ul>

			<h4>9.3. Ouvidoria</h4>
			<p>
				Além de todas as informações sobre o funcionamento, o canal SP156 é também o canal oficial para Ouvidora do Digilab, e pode ser acessado gratuitamente por telefone discando 156, ou ainda pela internet no site www.sp156.prefeitura.sp.gov.br
			</p>
			<Comments :attr="{id:11, context:'Regras - 9. Canais de comunicação e Ouvidoria'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<h3 class="titulo" indent="2">10. Medidas Administrativas</h3>
			<p>
				Casos omissos neste documento serão analisados pela Coordenadoria de Convergência Digital, tendo como base para resolução a Constituição Federal de 1988. Qualquer situação não prevista neste manual deve ser levada ao conhecimento da CCD por meio dos canais de comunicação disponíveis.
			</p>
			<Comments :attr="{id:12, context:'Regras - 10. Medidas Administrativas'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<hr />
		<section>
			<h2 class="titulo" indent="1">Trilhas do Conhecimento</h2>
		</section>		
		<section>
			<h3 class="titulo" indent="2">1. Trilhas do Conhecimento</h3>
			<figure :title="imagens.img1" class="coluna">
				<img :src="imgSrc('arquivos/digilab-livre-sp/1.png')" :alt="imagens.img1">
			</figure>
			<p>
				Esse documento é um guia para os conteúdos, atividades e eventos que serão desenvolvidos dentro dos DigiLabs da cidade de São Paulo, dentro da temática do empreendedorismo, informática básica, programação, entre outros. O objetivo é fazer com que todos os DigiLabs trabalhem uma mesma linha e temática de conteúdo para com que o modelo seja escalável a toda a rede. As Trilhas do Conhecimento se baseiam em três grandes momentos do usuário: inspiração/autoconhecimento, inquietação/curiosidade e ativação/execução
			</p>
			<p>
				As trilhas do conhecimento direcionam o caminho para um aprendizado contínuo, adequado ao planejamento de carreira e situação de vida das pessoas. Elas são um conjunto integrado e sistemático de ações de desenvolvimento que recorrem a múltiplas formas de aprendizagem.
			</p>
			<p>
				O objetivo é produzir conhecimento necessário para o desenvolvimento de competências – o que engloba conteúdo teórico, habilidades e atitudes – requeridas para o desempenho dos diferentes níveis ocupacionais no dia-a-dia profissional. Continuamente, estas competências aprimoradas é que viabilizarão o alcance dos objetivos estratégicos de negócios da entidade.
			</p>
			<p>
				Quando se fala em um conjunto sistemático, quer dizer que as trilhas de aprendizagem são sequências de atividades elaboradas em diferentes mídias com o objetivo de serem complementares entre si e de construírem o conhecimento a respeito de um tema.
			</p>
			<p>
				São experiências de aprendizagem planejadas para tornar o processo de absorção de conhecimento mais efetivo e adequado aos diferentes perfis de profissionais.
			</p>
			
			<h4>1.1 Características</h4>
			<p>
				Diferente das grades de treinamento, que têm ordem de obrigatoriedade e geralmente estão vinculadas a um desempenho específico, a sistemática das trilhas de aprendizagem propõe conciliar as necessidades da organização com as aspirações de seus membros.
			</p>
			<p>
				Como o método confere autonomia às pessoas, cada um concebe sua trilha de aprendizagem a partir de suas conveniências, necessidades, ponto de partida e objetivo que deseja alcançar. Com isso, é possível integrar o planejamento de carreira às expectativas da organização.
			</p>
			<p>
				O grande mote das trilhas de aprendizagem é dar suporte ao profissional, que é o protagonista da formação e qualificação. Alguém que almeja por oportunidades de capacitação e necessidades de aperfeiçoamento poderá criar seu mapa de aprendizagem, o seu itinerário formativo, e caminhará na sua própria trilha.
			</p>
			<p>
				O conteúdo e as atividades das trilhas são complementares entre si, sem possuir ordem de execução e abordam conteúdo de informática básica, empreendedorismo, programação e competências socioemocionais.
			</p>

			<h4>1.2 Objetivos</h4>
			<figure :title="imagens.img2" class="coluna">
				<img :src="imgSrc('arquivos/digilab-livre-sp/2.png')" :alt="imagens.img2">
			</figure>
			<p>
				Ainda que as trilhas do conhecimento sejam não-lineares e deem a possibilidade do indivíduo escolher seu próprio caminho, temos um objetivo concreto: formar o cidadão para que ele tenha capacidade técnica e interpessoal para criar seus próprios projetos no âmbito da informática básica, programação e empreendedorismo. Dando para cada pessoa a oportunidade para ela desenvolver as suas competências.
			</p>

			<h4>1.3 Competências Socioemocionais</h4>
			<p>
				As competências socioemocionais incluem um conjunto de habilidades para lidar com as próprias emoções, relacionar-se com os outros e gerenciar objetivos de vida, como autoconhecimento, colaboração e resolução de problemas. Essas competências são utilizadas cotidianamente nas diversas situações da vida e integram o processo de cada um para aprender a conhecer, aprender a conviver, a trabalhar e a ser. Ou seja, são parte da formação integral e do desenvolvimento de todos. No século 21, a interconectividade e a crescente complexidade das transformações sociais, tecnológicas, entre outras, têm ampliado a relevância dessas competências para a realização no âmbito pessoal, de trabalho e social.
			</p>
			<p>
				O Relatório da UNESCO para Comissão Internacional sobre Educação para o Século XXI, coordenada por Jacques Delors, editado sob a forma do livro: "Educação: Um Tesouro a Descobrir" de 1999, reeditado em 2012, serviu evolução desse tema. Nele foram definidos os quatro pilares da Educação, onde se propõe uma aprendizagem direcionada para os quatro tipos fundamentais de educação: aprender a conhecer (adquirir instrumentos de da compreensão), aprender a fazer (para poder agir sobre o meio envolvente), aprender a viver juntos (cooperação com os outros em todas as atividades humana), e finalmente aprender a ser (conceito principal que integra todos os anteriores).
			</p>
			<p>
				Muitos estudos indicam que as competências socioemocionais podem ser desenvolvidas intencionalmente no ambiente escolar, seja em atividades próprias para isso, seja articulando um conjunto de componentes curriculares. Formuladores de políticas públicas vêm demonstrando interesse crescente em incorporar ferramentas para seu desenvolvimento, uma vez que as competências emocionais são tidas como tão importantes quanto às competências cognitivas (avaliadas por testes de inteligência e conhecimento acadêmico) para a obtenção de bons resultados na escola, e tão importante quanto ou mais importante que elas para o trabalho e a vida.
			</p>
			<figure :title="imagens.img3" class="coluna">
				<img :src="imgSrc('arquivos/digilab-livre-sp/3.png')" :alt="imagens.img3">
			</figure>
			<p>
				Tem crescido o reconhecimento de que é possível analisar a personalidade humana em cinco dimensões, conhecidas como Big Five: abertura a novas experiências, extroversão, amabilidade, consciência e estabilidade emocional. Os Big Five são resultado de uma análise das respostas de questionários sobre comportamentos representativos de todas as características de personalidade que um indivíduo pode ter, sendo:
			</p>
			<p>
				<strong>Abertura a novas experiências​:</strong> tendência a ser aberto a novas experiências estéticas, culturais e intelectuais. O indivíduo que é aberto a novas experiências caracteriza-se como uma pessoa imaginativa, artística, excitável, curiosa, não convencional e com amplos interesses.
			</p>
			<p>
				<strong>Consciência​:</strong> trata da inclinação a ser organizado, esforçado e responsável. A pessoa consciente é caracterizada como eficiente, organizado, autônoma, disciplinada, não impulsiva e orientada para seus objetivos.
			</p>
			<p>
				<strong>Extroversão​:</strong> refere-se a orientação de interesses e energia em direção ao mundo externo. O indivíduo extrovertido é caracterizado como sociável, amigável, energético, autoconfiante, aventureiro e entusiasmado.
			</p>
			<p>
				<strong>Amabilidade​:</strong> é a tendência a agir de modo cooperativo e não egoísta. A pessoa amável ou cooperativa se caracteriza como tolerante, altruísta, modesta, simpática, não teimosa e objetiva (direto quando se dirige a alguém).
			</p>
			<p>
				<strong>Estabilidade Emocional​:</strong> trata da previsibilidade e consistência de reações emocionais, sem mudanças bruscas de humor. Em sua carga inversa, o indivíduo emocionalmente instável é caracterizado como irritadiço, preocupado, impulsivo, introspectivo, e possui baixa confiança.
			</p>
			<p>
				O desenvolvimento de competências socioemocionais estará presente durante todas as atividades do Digilab. O ambiente do laboratório é propício ao desenvolvimento dessas competências, proporcionando um aprendizado mais completo, com impacto no bem-estar ao longo de toda a vida do usuário. Segundo o pesquisador Oliver John, a espécie humana é muito sociável, como as formigas e as abelhas, e suas características podem, sim, ser aprimoradas durante toda sua vida, antes ou depois do período escolar.
			</p>
			<p>
				A interação entre pares potencializa o aprendizado, pois possibilita uma troca de experiências e conhecimento muito rica. A interação ocorre durante a realização de oficinas e vivências, com pessoas que possuem características socioemocionais, demográficas e educacionais muito distintas, possibilitando que os usuários que aprendam a controlar emoções, alcançar objetivos, demonstrar empatia, manter relações sociais positivas e tomar decisões de maneira responsável, por exemplo.
			</p>
			<Comments :attr="{id:13, context:'Trilhas do Conhecimento - 1. Trilhas do Conhecimento'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="2">2. O papel do Agente de Inclusão Digital</h3>
			<p>
				Além de transmitir conhecimento por meio de oficinas e cursos, curar conteúdo e catalogar ferramentas digitais, o Agente de Inclusão Digital deverá criar condições para que o cidadão desenvolva ou aprimore seus conhecimentos e competências.
			</p>
			<p>
				Por isso, é proposto que a aprendizagem seja baseada em projetos, por meio do qual propõe competições e desafios para que as pessoas desenvolvam competências de liderança, trabalho em equipe e solução de problemas.
			</p>
			<p>
				Desta forma, com a formação de equipes multidisciplinares trabalhando colaborativamente na resolução desse desafio, o aprendizado é potencializado e ocorre durante a investigação, a discussão dos conceitos em grupo e a representação de ideias e da organização das informações, sempre em busca de uma solução.
			</p>
			<p>
				Os estudantes aprendem mais quando têm a oportunidade de explorar e criar conhecimento que é de seu interesse pessoal. Isso encoraja os estudantes a criar caminhos e ambientes que sustentam os projetos que são significativos para eles em um nível pessoal. Cada estudante delimita a sua direção para aprendizagem ao invés de ser submetido às idéias planejadas pelo professor dentro da sala de aula. (ACKERMANN, 1993)
			</p>
			<p>
				O Agente de Inclusão Digital deve entender a vocação do laboratório, estar atento aos interesses e projetos dos alunos para propor uma grade de oficinas adequada à realidade local.
			</p>
			<p>
				Com a orientação adequada é possível ajudar os usuários do Digilab a conhecerem o que gostam de estudar, como preferem aprender, o que os faz desistir, em que costumam errar, quais emoções os dominam quando fracassam ou são provocados. Em especial, estimulá-los a descobrir quais são seus sonhos e de que forma persistir em alcançá-los.
			</p>
			<Comments :attr="{id:14, context:'Trilhas do Conhecimento - 2. O papel do Agente de Inclusão Digital'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="2">3. Estruturação</h3>
			<figure :title="imagens.img4" class="coluna">
				<img :src="imgSrc('arquivos/digilab-livre-sp/4.png')" :alt="imagens.img4">
			</figure>
			<p>
				Com o intuito de possibilitar aos cidadãos que passam a caminhar nas trilhas de conhecimento diversas oportunidades de aprendizado, sugerimos diferentes métodos de aprendizagem, que estão balizados, em suma, pela imagem acima e categorizados nos parágrafos abaixo.
			</p>
			
			<h4>3.1 Treinamentos Presenciais</h4>
			<p>
				São as oficinas, workshops, cursos e demais treinamentos presenciais, de conteúdo técnico ou não, com grade curricular especificada e com carga-horária definida, que acontecem de forma presencial em uma ou mais unidades do DIGILAB LIVRE SP. A educação maker incentiva alunos e alunas a criarem projetos e “colocarem a mão na massa”. A cultura do “do it yourself” (faça você mesmo) e “do it together” (façamos juntos) possibilita um maior desenvolvimento da criatividade e autonomia das pessoas, dando a elas o protagonismo na descoberta do conhecimento.
			</p>

			<h4>3.2 Eventos</h4>
			<p>
				Consideram-se como eventos todos os acontecimentos esporádicos, de viés técnico ou não, que acontecem de forma casual e circunstancial em uma ou mais unidades do DIGILAB LIVRE SP. Eles integram os participantes em experiências disruptivas, diferente daquelas que acontecem habitualmente no espaço, tendo como objetivo democratizar as novas tecnologias e conectar pessoas. Os eventos engajam pessoas e facilitam o desenvolvimento de comunidades, ampliando as condições de troca de experiências, conhecimentos e informações, sensibilizando as pessoas quanto ao futuro do  trabalho, da inovação e da tecnologia.
			</p>

			<h4>3.3 Cursos a distância</h4>
			<p>
				São chamados de cursos a distância todos os cursos, de conteúdo técnico ou não, com grade curricular especificada e com carga-horária definida, que acontecem de forma remota na Digiteca Virtual do DIGILAB LIVRE SP. Os cursos a distância trazem a possibilidade de tornar o acesso mais simples e fácil, por não demandarem um horário específico para acontecer, tampouco que os alunos e alunas se desloquem para cursá-los. Ademais, os cursos a distância geram intrinsecamente competências de auto organização, automotivação, foco, responsabilidade, compromisso, disciplina e muitas outras. Essas competências são, inclusive, segundo estudo da FGV (2017, p. 14), as competências mais valorizadas no mercado de trabalho pelas empresas, organizações do terceiro setor e também governo, sendo chamadas de “competências do trabalho do século XXI”.
			</p>

			<h4>3.4 Palestras</h4>
			<p>
				As palestras são todas as apresentações formais ou informais de ideias e conteúdos culturais e/ou científicos. Diferentemente dos cursos e treinamentos, as palestras se propõem a gerar conexões entre palestrante e participantes, tendo caráter inspiracional e motivacional. Elas, em geral, acontecem com palestrantes externos ao quadro do espaço — convidados especiais — como forma de promover diferentes trocas de conhecimento e informações. Os conteúdos das palestras são variados, permeando diferentes perspectivas.
			</p>

			<h4>3.5 Livros</h4>
			<p>
				São chamados de livros grandes produções textuais que tratam assuntos específicos, de caráter técnico, científico e/ou cultural.
			</p>

			<h4>3.6 E-books</h4>
			<p>
				São chamados de e-books grandes produções textuais, disponibilizadas em formato virtual, que tratam assuntos específicos, de caráter técnico, científico e/ou cultural que refletem as três grandes macro áreas de conhecimento trabalhadas no DIGILAB LIVRE SP: informática básica, programação e empreendedorismo.
			</p>

			<h4>3.7 Apostilas</h4>
			<p>
				São chamadas de apostilas os materiais impressos ou digitais desenvolvidos para ensinar, de forma rápida e prática, determinado conhecimento vinculado às macro áreas do conhecimento trabalhadas no DIGILAB LIVRE SP: informática básica, programação e empreendedorismo.
			</p>

			<h4>3.8 Artigos</h4>
			<p>
				São chamados de artigos produções textuais de caráter técnico que têm como intuito ensinar um conhecimento específico ligados às macro áreas do conhecimento trabalhadas no DIGILAB LIVRE SP: informática básica, programação e empreendedorismo.
			</p>

			<h4>3.9 Hackathons</h4>
			<p>
				São chamados de hackathons os eventos que têm como intuito gerar soluções para problemas sociais e/ou ambientais utilizando programação como insumo e produto.
			</p>

			<h4>3.10 Demodays</h4>
			<p>
				São chamados de demodays os eventos que têm como intuito apresentar as soluções desenvolvidas por usuários e usuárias do DIGILAB LIVRE SP para problemas sociais e/ou ambientais utilizando programação como insumo e produto.
			</p>

			<h4>3.11 Blog</h4>
			<p>
				É chamado de blog a ferramenta de comunicação virtual, geralmente acoplada em sites, com conteúdos variados de forma textual e visual, e que vão ao encontro das três grandes macro áreas de conhecimento trabalhadas no DIGILAB LIVRE SP: informática básica, programação e empreendedorismo.
			</p>

			<Comments :attr="{id:14, context:'Trilhas do Conhecimento - 3. Estruturação'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="2">4. Caminhos</h3>
			<figure :title="imagens.img5" class="coluna">
				<img :src="imgSrc('arquivos/digilab-livre-sp/5.png')" :alt="imagens.img5">
			</figure>
			<p>
				As trilhas se pautam por caminhos alternativos e flexíveis para promover o desenvolvimento das pessoas e, por conta disso, devem envolver níveis e graus diferenciados de aprendizagem e conhecimento ao definir uma ação a ser seguida para o crescimento profissional, na prática, está sendo construída uma trilha.
			</p>
			<p>
				Para estruturar os níveis de complexidade das trilhas, você deve se pautar no grau crescente de habilidades cognitivas, sempre partindo da mais simples para a mais complexa em termos de profundidade do aprendizado.
			</p>
			<p>
				De forma resumida, podemos apontar para os caminhos em três grandes aspectos:
				<ol type="a" class="subtipificado">
					<li>
						Não linearidade
						<ul>
							<li>
								Usando a definição do Dicionário Aurélio, “não linearidade refere-se a todas as estruturas que não apresentam um único sentido. Estrutura que apresenta múltiplos caminhos e destinos, desencadeando em múltiplos finais” (2016, p. 188).
							</li>
							<li>
								Na prática, os múltiplos caminhos e destinos se referem às diferentes possibilidades de formação que o usuário pode escolher dentro de uma das trilhas das três grandes macro áreas de conhecimento trabalhadas no DIGILAB LIVRE SP: informática, programação e empreendedorismo.
							</li>
						</ul>
					</li>
					<li>
						Multidisciplinariedade
						<ul>
					    	<li>
								Usando a definição do Dicionário Aurélio, “multidisciplinar é um sistema de ensino que engloba experiências em várias disciplinas, em busca de metas a atingir, dentro de um programa específico” (2016, p.164).
							</li>
							<li>
								Na prática, as várias disciplinas aqui descritas se referem à gama de conteúdo dispostos no DIGILAB LIVRE SP, relacionados às três grandes macro áreas: informática básica, programação e empreendedorismo.
							</li>
						</ul>
					</li>
					<li>
						Transdisciplinaridade
						<ul>
						    <li>
						    	Usando a definição do Dicionário Aurélio, “transdisciplinaridade é um enfoque pluralista do conhecimento que tem como objetivo, através da articulação entre as inúmeras faces de compreensão do mundo, alcançar a unificação do saber. Assim, unem-se as mais variadas disciplinas para que se torne possível um exercício mais amplo da cognição humana” (2016, p. 201).
						    </li>
						    <li>
						    	Na prática, as várias disciplinas aqui descritas se referem à convergência que as três grandes macro áreas de conhecimento do DIGILAB LIVRE SP (informática básica, programação e empreendedorismo) têm na prática, de forma complementar entre si.
						    </li>
						</ul>
					</li>
				</ol>
			</p>
			<Comments :attr="{id:15, context:'Trilhas do Conhecimento - 4. Caminhos'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="2">5. Conteúdo</h3>

			<h4>5.1 Competências Técnicas</h4>
			<figure :title="imagens.img6" class="coluna">
				<center><img :src="imgSrc('arquivos/digilab-livre-sp/6.png')" :alt="imagens.img6"></center>
			</figure>
			<p>
				Para estipular o conteúdo e estimar a carga horária necessária para formar o indivíduo em cada uma das três grandes áreas propostas, foi realizado o trabalho de benchmarking entre mais de dez treinamentos para atender os objetivos definidos. Entretanto, este levantamento teve como insumo cargas-horárias de treinamentos lineares, com começo, meio e fim definidos. Por isso, ele serve apenas como estimativa e não como regra.
			</p>

			<h4>5.2. Informática</h4>
			<ul>
				<li>
					Objetivo geral: ter bom desempenho com os sistema operacional LINUX, identificar e resolver problemas, criar e produzir conteúdo.
				</li>
				<li>
					Objetivo específico: capacitar o indivíduo a utilizar o computador para fins de manipulação e gerenciamento de arquivos, navegação na internet, elaboração, visualização e impressão de documentos, resolução de problemas básicos de origem técnica (software e hardware).
				</li>
				<li>Carga-horária:​ 80 horas.</li>
				<li>
					Conteúdo:
					<ol type="1">
						<li>Entendendo a parte física do computador;</li>
						<li>Como conectar acessórios (mouse, teclado, impressoras);</li>
						<li>Como ligar o computador corretamente;</li>
						<li>Como desligar o computador corretamente;</li>
						<li>Entendendo o ambiente do sistema operacional;</li>
						<li>Navegando no menu iniciar;</li>
						<li>Descobrindo softwares;;</li>
						<li>Criando pastas;</li>
						<li>Entendendo o navegador;</li>
						<li>Fazendo pesquisas no Google;</li>
						<li>Criando um e-mail;</li>
						<li>Descobrindo as redes sociais;</li>
						<li>Criando documentos de texto;</li>
						<li>Criando apresentações ;</li>
						<li>Criando planilhas ;</li>
						<li>Visualizando e imprimindo diferentes extensões de arquivos;</li>
						<li>Computador não liga. O que fazer?</li>
						<li>Internet não conecta. O que fazer?</li>
						<li>Software não abre. O que fazer?</li>
						<li>Sistema operacional lento. O que fazer?</li>
					</ol>
				</li>
			</ul>

			<h4>5.3. Programação</h4>
			<ul>
			    <li>
			    	Objetivo geral: entender a lógica de raciocínio para resolver problemas utilizando programação.
			    </li>
			    <li>
			    	Objetivo específico: capacitar o indivíduo para desenvolver sites, jogos e aplicativos com diversas linguagens de programação.
			    </li>
			    <li>Carga-horária:​ 180 horas.</li>
				<li>
					Conteúdo:
					<ol type="1">
						<li>O que são e como criar algoritmos;</li>
						<li>Código JavaScript (variáveis, declarações, métodos);</li>
						<li>Operadores lógicos, aritméticos e relacionais;</li>
						<li>Estruturas de repetição (SE, ENQUANTO, PARA, E, OU);</li>
						<li>Noções gráficas de classes, objetos e instâncias;</li>
						<li>Encapsulamento e construtores;</li>
						<li>Herança e relacionamentos;</li>
						<li>Composição, agregação e cardinalidade;</li>
						<li>Criando sua primeira página HTML;</li>
						<li>Estilizando sua página com CSS;</li>
						<li>Criando interações lógicas com JavaScript;</li>
						<li>Criando Banco de Dados com MySQL;</li>
						<li>Introdução ao TypeScript com Ionic;</li>
						<li>Criando rotas com Ionic;</li>
						<li>Consumindo APIs externas;</li>
						<li>Fazendo CRUD de posts;</li>
						<li>Gerando os APKs;</li>
						<li>Rotina de publicação nas lojas;</li>
						<li>Navegando na Unity;</li>
						<li>Criando seu primeiro jogo 2D;</li>
						<li>Criando seu primeiro jogo 3D;</li>
						<li>Modelando e integrando cenários com Blender.</li>
					</ol>
				</li>
			</ul>

			<h4>5.4. Empreendedorismo</h4>
			<ul>
				<li>
					Objetivo geral: saber identificar e resolver problemas que potencialize o repertório pessoal para se desenvolver e aplicar em empreendimentos profissionais.
				</li>
				<li>
					Objetivo específico: capacitar o indivíduo aos benefícios do empreendedorismo, em seu amplo conceito. Possibilitar que o cidadão conheça os caminhos para empreender.
				</li>
				<li>Carga-horária:​ 80 horas.</li>
				<li>
					Conteúdo:
					<ol type="1">
						<li>O que é empreendedorismo;</li>
						<li>Empreendedorismo no Brasil;</li>
						<li>Intraempreendedorismo;</li>
						<li>Casos inspiradores;</li>
						<li>Dificuldades e desafios;</li>
						<li>Inspiração e autoconhecimento;</li>
						<li>Porque empreender;</li>
						<li>Redes de empreendedores;</li>
						<li>Descobrindo meu eu empreendedor;</li>
						<li>Sua ideia não vale nada. Execute!;</li>
						<li>Prototipação e Avaliação;</li>
						<li>Pesquisa de Mercado;</li>
						<li>Plano de Negócios;</li>
						<li>Análise SWOT;</li>
						<li>Fazendo um MVP;</li>
						<li>Gerenciamento e Crescimento;</li>
						<li>Como conseguir investimento e linhas de crédito;</li>
						<li>Como ganhar escala;</li>
						<li>Regras tributárias;</li>
						<li>Leis trabalhistas;</li>
						<li>Ferramentas Úteis;</li>
						<li>Marketing digital com ferramentas do Google;</li>
						<li>Planejamento financeiro com GuiaBolso;</li>
						<li>Usando as redes sociais a seu favor;</li>
						<li>Criando artes para as redes sociais com Canva.</li>
					</ol>
				</li>
			</ul>

			<Comments :attr="{id:16, context:'Trilhas do Conhecimento - 5. Conteúdo'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<h3 class="titulo" indent="2">6. Sugestões de Aplicação</h3>
			<p>
				As sugestões aqui propostas não têm caráter obrigatório, mas servem para definir um modelo factível para a distribuição das diferentes possibilidades de inserção ao longo do mês, do bimestre, do semestre ou do ano das diversas possibilidades de aprendizado.
			</p>
			<figure :title="imagens.img7" class="coluna">
				<center><img :src="imgSrc('arquivos/digilab-livre-sp/7.png')" :alt="imagens.img7"></center>
			</figure>
			<figure :title="imagens.img8" class="coluna">
				<img :src="imgSrc('arquivos/digilab-livre-sp/8.png')" :alt="imagens.img8">
			</figure>
			<Comments :attr="{id:17, context:'Trilhas do Conhecimento - 6. Sugestões de Aplicação'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:23, context:'Comentarios'}"></Comments>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop';
import Indice from '@/components/Indice';
import Comments from '@/components/Comments';
import CommentsLoader from '@/components/CommentsLoader';
import Apoio from '@/components/Apoio';

export default {
	name: 'DigilabLivreSP',
	data() {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			imagens: {
				img1: "Trilhas do Conhecimento",
				img2: "Objetivos",
				img3: "Competências Socioemocionais",
				img4: "Estruturação",
				img5: "Caminhos",
				img6: "Competências Técnicas",
				img7: "Sugestões de Aplicação",
				img8: "Sugestões de Aplicação - Legenda"
			}
		}
	},
	computed: {
		commentsLoaded() { return this.$store.state.commentsLoaded }
	},
	components: {
		PageTop,
		Indice,
		Comments,
		CommentsLoader
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
		scrollMeTo(refName) {
			let element = this.$refs[refName];
			let top = element.offsetTop;
			window.scrollTo({top: top, behavior: 'smooth'});
		},
		filterConsultas(){
			this.consultas = this.$store.state.consultas;
			this.estaConsulta = this.consultas.filter(esta => esta.id_consulta == this.$route.meta.id )[0];
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
						if(app.titulosLimpo[i])
							app.titulosLimpo[i].ativo = true;
					} else if(app.titulosLimpo[i]) { 
						app.titulosLimpo[i].ativo = false;
					};
				});
			}, {
				capture: true,
				passive: true
			});
		},
		imgSrc(caminho) {
			let url = this.$store.getters.basePath + caminho;
			return url.toString()
		},
		fileSrc(fileName) {
			let url = this.$store.getters.basePath + "arquivos/digilab-livre-sp/" + fileName;
			return url.toString()
		},		
		backgroundImg(caminho) {
			let url = this.$store.getters.basePath + caminho;
			return 'background-image: url(' + url + ');'
		}
	}
};
</script>

<style lang="scss">
#app div.DigilabLivreSP {
	div.PageTop > div:first-child {
		max-width: 700px;
	}
	div.PageTop h1 {
		font-size: calc(16px + 6vmin);
	}
	table {
		margin: auto;
		min-width: 400px;
	}
	table.simple-table {
		border-collapse: collapse;
		table, th, td {
			border: 1px solid black;
			padding: 3px;
		}
	}
	table.headed-table {
		border-collapse: collapse;
		text-align: center;	
		table, th, td {
			border: 1px solid black;
			padding: 3px;
		}
		tr:first-child {
			background-color: #CCC;
			font-weight: bold;
		}
	}

	h2.titulo, h3.titulo {
		margin: 2em auto auto;
	}
	h4 {
		margin: 2em auto auto;
	}
	*::selection, *::-moz-selection {
		background: #EB5757;
		color: #FFF;
	}
	section {
		max-width: 700px;
		margin: 0 auto;
		padding: 0 1em;
	}
	hr {
		max-width: 700px;
		margin: 3em auto;
	}
	img {
		max-width: 100%;
	}
	p {
		overflow: auto;
		text-align: justify;
	}
	a {
		cursor: pointer;
	}
	.footnote {
		font-size: small;
	}
	div.Apoio button::before {
		content: "Ver downloads";
	}
	#ifrSlides {
		max-height: calc(100vw * 0.565);
	}
	ol.subtipificado {
		font-style: italic;
	    font-weight: bold;
	    color: #555;
	    ul {
	    	font-weight: initial;
		    font-style: initial;
		    list-style-type: disc;
		    color: initial;
		    margin-bottom: 1em;
	    }
	}
}
</style>