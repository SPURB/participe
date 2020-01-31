<template>
	<div class="JockeyClub2" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/jockey2_244w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Jockey Club 2</div></template>
			<template slot="subtitulo"><div>Segunda consulta pública - Proposta de ordenamento urbanístico</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Apresentação</h2>
			<p>O presente produto tem como objeto a proposta preliminar de ordenamento urbanístico para o Projeto de Intervenção Urbana do Hipódromo de Cidade Jardim - PIU Jockey Club. Este trabalho é decorrente do conteúdo técnico dos elementos prévios, produzido na etapa 1, dos comentários recebidos na primeira consulta pública e das recomendações das áreas técnicas da Secretaria Municipal de Desenvolvimento Urbano - SMDU, seguindo as diretrizes consolidadas no Produto 05 (Elementos Necessários para Publicação da Autorização por SMDU).</p>
			<p>A proposta de projeto urbanístico e ordenamento territorial contém os cenários possíveis para a propriedade e gestão do conjunto do hipódromo, a setorização do conjunto, os parâmetros urbanísticos (parcelamento, uso e ocupação do solo) aplicáveis a cada setor e o programa de intervenções previsto. </p>
			<p>É importante ressaltar que as proposições aqui presentes foram desenvolvidas pela equipe técnica da SP Urbanismo em caráter preliminar, devendo ser referendadas pelas secretarias municipais competentes antes de serem submetidas à segunda consulta pública. Após esta fase, o PIU será revisado, ajustando as propostas preliminares para consolidar uma nova versão, composta pelo conteúdo técnico do PIU e a minuta de sua respectiva peça jurídica, que poderá ser um decreto ou um projeto de lei. Após nova consulta pública, o projeto será formatado em sua versão final, que será publicada no portal Gestão Urbana e remetido à Secretaria Municipal de Desenvolvimento Urbano para os devidos encaminhamentos técnico-jurídicos.</p>
			<p>Outro aspecto fundamental para o desenvolvimento deste PIU é que a equipe técnica responsável pelos presentes estudos não teve acesso, até a entrega deste produto, às instalações do Hipódromo Cidade Jardim e não teve contato com interlocutores do Jockey Club de São Paulo, desconhecendo pormenores sobre o funcionamento do equipamento e o planejamento de longo prazo da instituição que podem ser, eventualmente, incompatíveis com as propostas aqui apresentadas. Da mesma forma, não tivemos conhecimento sobre as expectativas e intenções da Prefeitura de São Paulo em relação ao desenvolvimento deste projeto, bem como sobre as tratativas em curso entre esta e o Jockey Club relativas às dívidas tributárias vinculadas ao hipódromo, informações estas que certamente constituem-se como premissas para a formulação das propostas urbanísticas que compõem este projeto.</p>
			<Comments :attr="{ id: commentId(true), context:'Apresentação' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Situação fundiária</h2>
			<p>Recapitulando o histórico apresentado no diagnóstico socio-territorial, o atual Jockey Club de São Paulo foi fundado em 14 de março 1875 como Clube de Corridas Paulistano, começando suas atividades no bairro da Mooca. Após a retificação do Rio Pinheiros a partir de 1928, teve início o processo de urbanização dos bairros do Butantã e Jardim Guedala, executados pela Companhia City a partir dos anos 1930. Nesta época, a Companhia doou ao Jockey o terreno de cerca de 600 mil m² na margem oeste do rio, com o objetivo de trazer uma opção de lazer atraente à elite paulistana e valorizar os novos bairros. Em 25 de janeiro 1941 foi inaugurado o Hipódromo de Cidade Jardim, concebido por Fábio Prado, prefeito da cidade e presidente do Jockey à época. Ao mesmo tempo, o Jockey doou o terreno na Mooca para o município.</p>
			<p>Este histórico é relevante para o projeto porque explica em parte como pôde ser viabilizada a doação do atual terreno do Hipódromo de Cidade Jardim a partir da interveniência da Prefeitura de São Paulo e da concretização da permuta com o terreno do antigo Hipódromo da Mooca. Tal condição, como se demonstrará adiante, é fundamental para a formulação de cenários no contexto de desenvolvimento deste projeto urbano, sem que estejam definidas as premissas relativas à propriedade, posse e governança do imóvel. Considerando-se o montante de dívidas que o Jockey Club de São Paulo possui com a Prefeitura (relacionadas principalmente à cobrança de IPTU), existe a possibilidade de que a totalidade ou parte do terreno, venha a ser usada como forma de quitar, total ou parcialmente, os débitos existentes. Além de questões fiscais e de valoração do imóvel inerentes às tratativas entre as partes, e que não fazem parte do objeto deste projeto, os registros cartoriais do imóvel destacados a seguir trazem aspectos que subsidiam o desenvolvimento das propostas preliminares aqui apresentadas:</p>
			<ol>
				<li><b>Transcrição 15.339 </b>de 11/11/1936 (4º Oficial de Registro de Imóveis):</li>
			</ol>
			<ul>
				<li>Área do Terreno: <b>600.000 m²</b>;</li>
				<li>Transmitido da Companhia Cidade Jardim para o Jockey Club de São Paulo, com interveniência da Municipalidade de São Paulo e do Banco do Comércio e Indústria de São Paulo;</li>
				<li>Averbação 11/11/1936: Consta do título de que a<b>transmitente doou ao adquirente</b>a área de 600.000,00 m² de terrenos acima descrita, para que sobre os mesmos o adquirente <b>construa e mantenha o seu novo hipódromo</b>, fazendo a construção com o produto da alienação, de tudo quanto, em bens e direitos possui no atual hipódromo da Moóca, alienação essa que por preço correspondente ao custo do novo hipódromo, ..., ele fez pelo mesmo título para a Municipalidade de São Paulo“... o imóvel desta matrícula, ficou gravado com as <b>cláusulas de inalienabilidade e impenhorabilidade</b>, a fim de jamais responder pela solução de qualquer obrigação porventura assumida pelo Club, a não ser que, <b>com prévia anuência da Municipalidade</b>, ele adquirente houver de assumir para uma eventual remoção do novo hipódromo para outro mais amplo, que, num futuro remoto, venha a ser exigido pelo desenvolvimento e progresso da cidade e pela necessidade de adoção de novas condições técnicas, porventura então existentes; que não obstante a indissolubilidade do Club adquirente expressamente estipulada em seus estatutos, <b>se ainda assim um dia ocorrer a hipótese de dissolução legal, a parcela de seu patrimônio, então representada pelo novo hipódromo, com seus terrenos e edificações, reverterá para o patrimônio da Municipalidade de São Paulo</b>.
				</li>
				<li>Demais Averbações de 16/10/1937 a 28/03/2001: após sucessivas supressões de área do imóvel para implantação e adequações geométricas do sistema viário da região, <b>sua área remanescente foi retificada para 586.634,68 m² </b></li>
			</ul>
			<ol>
				<li><b>Matrícula 194.337 </b>de 16/06/2009 (18º CRI):</li>
			</ol>
			<ul>
				<li>Área do Terreno: <b>586.634,68 m²</b>;</li>
				<li>Averbação 21 (24/10/2016): “... <b>Declaração de Potencial Construtivo Passível de Transferência SMDU/DEUSO
						0065/15</b>de 03/06/2015... com fundamento nos arts. 122 a 132 da Lei 16.050/2014, ... para constar que
					<b>o imóvel objeto desta matrícula dispõe de 351.981,00 m² de POTENCIAL CONSTRUTIVO passível de
						transferência</b>, originado sem a doação de terreno, visto o mesmo ser enquadrado como ZEPEC...”</li>
				<li>Averbação 25 (19/12/2018): “...<b>Cessão Parcial de Potencial Construtivo – </b>Jockey Club de São Paulo cedeu a
					Brock Empreendimentos e Participações Ltda. parte do potencial construtivo mencionado na AV. 21, somente
					relativa a uma <b>área de 8.442,41 m² do imóvel objeto desta matrícula</b>..., nos termos do processo
					administrativo nº 6068.2018/0001994-4, em trâmite perante SMUL/DEUSO da Prefeitura de São Paulo, em razão do que
					o <b>saldo de potencial construtivo passível de transferência da Cedente passará a ser de 343.538,59 m²</b>...”
				</li>
			</ul>
			<Comments :attr="{ id:commentId(), context:'Situação fundiária' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Cenários</h2>
			<p>O PIU Jockey Club tem como característica a regulação de uma ZOE (Zona de Ocupação Especial) incidente sobre um relevante equipamento privado, cujo interesse público atualmente reside na preservação de seus atributos históricos, arquitetônicos, funcionais e paisagísticos. Conforme proposto no Programa de Interesse Público e manifestado nas contribuições recebidas na primeira Consulta Pública, há uma oportunidade deste equipamento intensificar sua utilidade e atratividade para a população através da introdução de novas atividades de interesse público que possam conviver com as atividades do turfe promovidas pelo Jockey Club de São Paulo, visto que estas ocorrem atualmente com menor intensidade do que no passado, tornando o conjunto ocioso. Tal oportunidade é vislumbrada como potencial solução no contexto das tratativas em curso entre o Jockey e a Prefeitura para o pagamento das dívidas da instituição com a Municipalidade. Como estas tratativas não foram concluídas, o PIU Jockey Club considera as diferentes possibilidades de composição do conjunto em relação à propriedade do imóvel e em relação à operação das atividades. Tais possibilidades servem como bases para a identificação de cenários que devem ser compatíveis com os parâmetros e intervenções urbanísticas propostos pelo projeto.</p>

			<h3>Cenário A: Propriedade e gestão integral do Jockey Club de São Paulo</h3>
			<p>Neste cenário, mantém-se a situação atual do Jockey como único proprietário e gestor do conjunto. O pagamento dos débitos seria resolvido sem a inclusão do imóvel. Neste cenário, os parâmetros urbanísticos definidos para a ZOE balizariam o processo de refuncionalização do hipódromo, regulando as atividades vinculadas ao hipódromo e os eventos promovidos pela instituição, buscando diminuir os conflitos atuais com a vizinhança. Conforme a setorização proposta no Programa de Interesse Público, o Jockey poderia transformar partes do terreno, construindo novos edifícios para instalação de outras atividades, mantendo sua propriedade ou alienando a terceiros. Essa possibilidade de alienação de porções do terreno deve ter a anuência da Prefeitura, pois sua destinação funcional não tem relação direta com o hipódromo, cuja implantação motivou a permuta e posterior cessão, conforme os registros imobiliários. Assim, a anuência da Prefeitura deve ser baseada, sobretudo, na compatibilidade dos futuros empreendimentos com as diretrizes de desenvolvimento urbano da cidade, cuja aplicação no caso específico é o próprio PIU Jockey Club.</p>
			<p>Um desdobramento deste cenário é, como parte da resolução dos débitos ou mesmo por uma iniciativa própria, o Jockey abrir partes de sua propriedade para outras atividades de interesse público, como a implantação de um parque. Neste caso, o Jockey manteria a propriedade integral da área e as atividades de interesse público, como um parque ou equipamentos poderiam ser geridos pela Prefeitura, pelo próprio Jockey Club ou por um terceiro ente delegado pelas partes.</p>

			<h3>Cenário B: Propriedade e gestão Integral da Prefeitura de São Paulo</h3>
			<p>Este cenário é o oposto do cenário A e poderia ocorrer como desdobramento de duas situações. Na primeira, o terreno todo e suas benfeitorias seriam utilizados para a quitação das dívidas existentes, transferindo-se integralmente a propriedade para a Prefeitura. Na segunda situação, prevista na Transcrição 15.339/1936, na hipótese de dissolução legal do Jockey Club de São Paulo, a parcela de seu patrimônio representada pelo hipódromo, com seus terrenos e edificações, reverterá para o patrimônio da Municipalidade de São Paulo. Na primeira situação, o Jockey poderia manter suas atividades no local, mediante um acordo com a Prefeitura (cessão onerosa ou gratuita, concessão, termo de permissão de uso, etc.), ou transferir o hipódromo para outro local. No caso de transferência do hipódromo, a Prefeitura poderia reformular o programa de uso de todo o conjunto, transformando-o parcial ou integralmente em um parque, implantando equipamentos públicos ou habitação de interesse social, ou ainda alienando partes do terreno para a iniciativa privada, desde que fossem respeitadas as disposições das resoluções de tombamento e os parâmetros e diretrizes deste PIU.</p>
			<p>Considerando remota a probabilidade de a Prefeitura assumir a operação do hipódromo, esta poderia se encerrar definitivamente ou, alternativamente, a Prefeitura poderia conceder ou alienar a operação do equipamento a outro ente. </p>

			<h3>Cenário C: Propriedades e gestões compostas entre Jockey e Prefeitura</h3>
			<p>Neste cenário, a resolução das tratativas redundaria na transferência de propriedade de partes do terreno do Jockey para a Prefeitura, o que demandaria a identificação das interferências mútuas entre as atividades relativas a acessos, horários de funcionamento, direitos de passagem, etc. A partir desta definição de proprietários, pode-se vislumbrar diversos arranjos funcionais que viabilizem a implantação e funcionamento de um parque no conjunto, sendo essa a principal proposta de atividade de interesse público do projeto. O acesso ao chamado “Pião do prado” (anel interno da pista de corrida), por exemplo, deverá ser objeto de acordo uma vez que é necessário atravessar a pista para adentrar a área. Outra questão a ser decidida é sobre o funcionamento do parque durante os horários de corrida e treinamento de cavalos. Será necessário estipular quais áreas terão acesso permitido e em quais períodos. O Jockey também deverá apontar quais edifícios são necessários para as atividades relacionadas à prática do turfe e administração do clube e quais poderão ser disponibilizados ao público para o funcionamento do parque e atividades complementares. Assim, em linhas gerais, podemos ter:</p>
			<h3>Parque público administrado pela Prefeitura, com a permanência do Jockey.</h3>
			<p>Nesse arranjo a Prefeitura assume a gestão dos espaços públicos de sua propriedade e o Jockey Club permanece com as demais áreas de sua propriedade, necessárias às atividades relacionadas ao turfe.</p>

			<h3>Parque privado de uso público, administrado pelo Jockey Club.</h3>
			<p>Situação em que o Jockey permanece com a propriedade da porção do imóvel não vinculada ao turfe e faz a gestão do espaço que pode abrigar o parque, que terá o acesso público garantido conforme condições a serem estabelecidas entre as partes. </p>

			<h3>Parque público administrado pelo Jockey Club. </h3>
			<p> Neste caso a prefeitura concederia a gestão do espaço público ao Jockey por tempo determinado, conforme condições a serem estabelecidas entre as partes, sem prejuízo da prática do turfe e demais áreas de propriedade do Jockey.</p>
			<p>Como as disposições das resoluções de tombamento devem ser respeitadas, em qualquer hipótese de composição e divisão do terreno atual entre dois ou mais proprietários, não se vislumbra uma partição proporcional sumária do terreno, pois esta solução poderia inviabilizar as atividades do hipódromo, sua governança e preservação. Assim, o parcelamento da gleba em dois ou mais lotes deverá considerar, fundamentalmente, a setorização proposta neste PIU, mantendo-se preferencialmente as áreas funcionais do hipódromo (Vila hípica, arquibancadas, tribunas, padock) sobre uma mesma titularidade.</p>
			<Comments :attr="{ id:commentId(), context:'Cenários' }" v-if="consultaAtiva"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Parâmetros urbanísticos</h2>
			<p>Esta seção tem como objetivo apresentar as propostas de parâmetros urbanísticos a serem estabelecidos para o perímetro de regulação excepcional, correspondente à ZOE do Hipódromo de Cidade Jardim. Os parâmetros envolvem aspectos como parcelamento, uso e ocupação do solo, bem como questões relativas ao tombamento do conjunto arquitetônico.</p>
			<Comments :attr="{ id:commentId(), context:'Parâmetros urbanísticos' }" v-if="consultaAtiva"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Tombamento</h2>
			<p>O conjunto arquitetônico do Jockey Club de São Paulo foi tombado pelo CONDEPHAAT (Conselho de Defesa do Patrimônio Histórico, Arqueológico, Artístico e Turístico do Estado de São Paulo) através da Resolução SC97/10, de 19/11/2010 e também pelo CONPRESP (Conselho Municipal de Preservação do Patrimônio Histórico, Cultural e Ambiental da Cidade de São Paulo), através da Resolução 05/2013. Os dois documentos destacam o papel arquitetônico, histórico e simbólico do Jockey Club para a cidade de São Paulo e descrevem os bens tombados, edificações cadastradas, áreas <em>non     aedificandi </em>e área envoltória, conforme Mapa 1. Também são tombados os altos-relevos de autoria de Victor Brecheret incorporados ao prédio da arquibancada social e ao prédio do antigo vestiário de jockeys, este último não incluído no tombamento. Conforme expresso em ambas as resoluções, qualquer intervenção que se planeje realizar no interior e área envoltória do Jockey Club deve ser aprovada pelos órgãos de preservação. </p>
			<p>As resoluções especificam 17 edificações ou conjuntos de edificações tombadas e 9 edificações ou conjuntos de edificações a serem cadastradas, especificando o escopo para tal feito. Todavia, não especificam se as edificações cadastradas devem ser necessariamente preservadas ou se podem ser modificadas ou mesmo demolidas. Há ainda um terceiro conjunto de edificações não mencionadas nas resoluções, sobre as quais este projeto considera que não incidem restrições quanto a eventuais alterações ou mesmo demolições. Para ambas as categorias, será necessária a realização de consultas aos respectivos órgãos para verificar o entendimento preliminar aqui exposto.</p>
			<p>Além do tombamento do traçado da pista do hipódromo, as resoluções destacam a importância da preservação das características das áreas não edificadas situadas no miolo das pistas (denominada Pião do Prado) e na Vila Hípica, para preservar os visuais tomados a partir das arquibancadas e garantir a visibilidade das estruturas protegidas. Nestas áreas, não serão admitidas construções em sobressolo, excetuada a implantação de elementos de sinalização de práticas esportivas.</p>
			<p>Como visto, as diretrizes de tombamento do conjunto do Jockey Club são determinantes para a proposta de ordenamento urbanístico do PIU, considerando as áreas que podem ser apenas restauradas para se adequar a novos usos, áreas em que não é permitido construir, áreas com significativas restrições e outras áreas que podem ter uma transformação mais significativa, incorporando novas construções. A síntese das diretrizes de tombamento está expressa no Mapa 1 a seguir:</p>

			<imagem
				:max-width="'700px'"
				:dados="{
				titulo: 'Tombamento do Conjunto arquitetônico do Jockey Club, de acordo com Resolução SC97/10 do CONDEPHAAT',
				tipo: 'mapa',
				url: src('arquivos/jockey-2/mapas/1.jpg'),
				legenda: [
					{ fundo: '#A9C8CA', descricao: 'Área non aedificandi' },
					{ fundo: '#E9E5B4', descricao: 'Paddock' },
					{ fundo: '#6D153B', descricao: 'Edifícios c/ alto-relevos de Brecheret' },
					{ fundo: '#B8BBE7', descricao: 'Área envoltória' },
					{ fundo: '#FEF235', descricao: 'Edificações não mecionados pelo decreto de tombamento' },
					{ fundo: '#FC1029', descricao: 'Bens tombados' },
					{ char: '1', descricao: 'Portaria' },
					{ char: '2', descricao: 'Arquibancada social' },
					{ char: '3', descricao: 'Arquibancada especial 1' },
					{ char: '4', descricao: 'Arquibancada especial 2' },
					{ char: '5', descricao: 'Arquibancada de proprietários' },
					{ char: '6', descricao: 'Paddock' },
					{ char: '7', descricao: 'Tatersal' },
					{ char: '8', descricao: 'Antidopping' },
					{ char: '9', descricao: 'Escadaria' },
					{ char: '10', descricao: 'Baias para lavagem dos cavalos' },
					{ char: '11', descricao: 'Caixa dágua' },
					{ char: '12', descricao: 'Hospital - Ambulatório' },
					{ char: '13', descricao: 'Pista' },
					{ char: '14', descricao: 'Antiga ducha para cavalos' },
					{ char: '15', descricao: 'Vila Hípica' },
					{ char: '16', descricao: 'Caixa dágua da vila hípica' },
					{ char: '17', descricao: 'Prédio da administração' },
					{ char: '18', descricao: 'Praça da vila hípica' },
					{ char: '19', descricao: 'Escola do Jockey Club (fora da ZOE)' },
					{ char: '20', descricao: 'Antigo Armazém (fora da ZOE)' },
					{ char: '21', descricao: 'Prédio da veterinária e Praça' },
					{ char: '22', descricao: 'Ferraria' },
					{ char: '23', descricao: 'Chaminé do forno crematório' },
					{ fundo: '#EC9426', descricao: 'Edificações registradas', 'legenda__titulo': true },
					{ char: '24', descricao: 'Remanescentes do biotério' },
					{ char: '25', descricao: 'Conjunto de tratamento de águas' },
					{ char: '26', descricao: 'Antiga casa do engenheiro' },
					{ char: '27', descricao: 'Antigas residências dos empregados' },
					{ char: '28', descricao: 'Antiga garagem' },
					{ char: '29', descricao: 'Oficinas' },
					{ char: '30', descricao: 'Antiga casa do diretor' },
					{ char: '31', descricao: 'Antigo vestiário dos jockeys' },
					{ char: '32', descricao: 'Cocheiras' }
				],
				fonte: 'Elaboração: SP-Urbanismo, 2020'
			}" />

			<Comments :attr="{ id:commentId(), context:'Tombamento' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Setorização</h2>
			<p>A partir da setorização apresentada no Programa de Interesse Público, que já considerava as características funcionais do hipódromo e as diretrizes das resoluções de tombamento do conjunto, foram avaliados pormenores relativos a barreiras físicas e funcionais, às possibilidades de parcelamento decorrentes do Cenário C de composição fundiária e da avaliação dos parâmetros potencialmente incidentes em cada setor, sua repercussão na transformação ou preservação do conjunto edificado e da paisagem e em sua inserção no entorno, redundando na formulação da presente proposta de subdivisão do perímetro da ZOE em sete setores, conforme distinções especificadas a seguir. </p>
			<p><b>Setor Eusébio Matoso: </b>compreende a área relativa ao conjunto de cocheiras mais ao norte do Jockey, próximo ao encontro das avenidas Eusébio Matoso, Prof. Francisco Morato e Vital Brasil. É o ponto de melhor acessibilidade do Jockey, a 550 metros da estação Butantã do Metrô (Linha 4 – Amarela), próximo à estação Hebraica-Rebouças da CPTM (Linha 9 – Esmeralda) e a poucos metros da Parada Vital Brasil do Corredor Campo Limpo – Rebouças – Centro da SPTrans, situado na Av. Prof. Francisco Morato. Pela proximidade com o corredor de ônibus, o setor poderia receber parâmetros similares aos de uma ZEU (Zona Eixo de Estruturação da Transformação Urbana), equiparando-o ao entorno, com ocupação mais intensa do solo, maior diversidade de usos e buscando promover a qualificação dos espaços públicos de modo articulado ao sistema de transporte público coletivo.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: src('arquivos/jockey-2/3.jpg'),
				caption: 'Figura 1 – Vista Aérea com o Setor Eusébio Matoso em Destaque',
				fonte: 'Google Earth, 2019. Elaboração SP Urbanismo, 2019'
			}"></Imagem>

			<p><b>Setor Vila Hípica: </b>abarca o conjunto de cocheiras, edifício administrativo e clínica veterinária (edificações tombadas pelo patrimônio histórico). Esse setor deve ser inteiramente preservado como patrimônio construído, sendo uma área fundamental para o funcionamento do hipódromo. Contudo, atualmente já possui grande ociosidade pela redução do plantel de animais, o que indica que pode receber outras atividades compatíveis com as características dos edifícios existentes, com configuração pavilhonar de piso único, tais como equipamentos culturais, oficinas, eventos, atividades socioeducativas e de qualificação profissional, além de áreas administrativas e de apoio ao funcionamento do parque. Além da preservação e restauração, a adaptação dos edifícios deste setor para novas atividades pode demandar a instalação de novas infraestruturas e a reformulação dos espaços interiores. </p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: src('arquivos/jockey-2/4.jpg'),
				caption: 'Figura 2 – Vista Aérea com o Setor Vila Hípica em Destaque',
				fonte: 'Google Earth, 2019. Elaboração SP Urbanismo, 2019'
			}"></Imagem>

			<p><b>Setor Lineu de Paula Machado: </b>em posição central no conjunto e situado entre a Av. Lineu de Paula Machado e a pista do hipódromo, é o setor onde estão implantadas edificações tombadas, como o antigo Ambulatório (que nos últimos anos tem abrigado a exposição Casa Cor) e a Caixa d’Água, juntamente com edificações cadastradas e edificações não mencionadas nas resoluções de tombamento, que podem ser demolidas caso entenda-se pertinente, e onde se encontra o clube e suas áreas esportivas, além de pequenos bolsões de estacionamento. Hoje a avenida não possui nenhum atrativo que dinamize sua frequência e crie alguma movimentação de pedestres. Do lado do hipódromo são quase 1.400 metros de muros, com poucos pontos de contato com a rua. Do outro lado da avenida, conformando a borda da ZER (Zona Exclusivamente Residencial) encontram-se imóveis classificados como ZCOR2 (Zona Corredor 2). Na maioria dos casos, são antigas residências que tiveram seu uso alterado para atividades relacionadas ao setor de serviços, mas que também não propiciam atratividade e movimento à avenida. Muitos desses imóveis encontram-se subutilizados, à venda ou disponíveis para aluguel. A proposta para esse setor é permitir uma transformação controlada no lado do hipódromo, possibilitando a implantação de novos edifícios ou transformando existentes, voltados diretamente para a avenida para criar atratividade e movimento, fazendo com que o conjunto se relacione com maior intensidade com o bairro. Como o rol de atividades permitidas na ZCOR existente não possibilitou a dinamização da maior parte da avenida, entende-se que uma maior diversidade de usos poderia contribuir mais efetivamente para criar movimento, requalificar a via e estimular a ocupação dos imóveis do lado oposto, contribuindo também para trazer mais segurança ao entorno. A possibilidade da demolição dos muros, substituindo-os por gradis ou outras barreiras permeáveis visualmente também é importante para aproximar o conjunto do Jockey do bairro e qualificar a paisagem da Av. Lineu de Paula Machado. </p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: src('arquivos/jockey-2/5.jpg'),
				caption: 'Figura 3 – Vista Aérea do Setor Lineu de Paula Machado',
				fonte: 'Google Earth, 2019. Elaboração SP Urbanismo, 2019'
			}"></Imagem>

			<p><b>Setor Conjunto Histórico:</b> Compreende as principais construções originais do hipódromo, projetadas por Elisiário Bahiana, como os edifícios das Tribunas, Paddock e Tatersal, entre outros. São ainda hoje utilizados pelo Jockey Club, tanto para as atividades ligadas ao turfe, como para eventos não relacionados, além de abrigar os restaurantes hoje existentes. As edificações devem ser todas preservadas, ainda que seu uso possa ser transformado para se adaptar às novas condições e dinâmicas urbanas. As áreas livres, situadas entre a Av. Lineu de Paula Machado e a pista do hipódromo também podem ter um aproveitamento mais nobre, substituindo áreas de estacionamento por atividades de cultura, lazer e gastronomia, por exemplo. Considerando sua localização e visuais privilegiadas e sua proximidade com as tribunas, são áreas fundamentais para a qualificação e dinamização do conjunto. Neste setor também existem oportunidades de demolição de muros em trechos do perímetro, possibilitando maior amplitude visual do conjunto de belos edifícios das tribunas.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: src('arquivos/jockey-2/6.jpg'),
				caption: 'Figura 4 – Vista Aérea com o Setor Conjunto Histórico em Destaque',
				fonte: 'Google Earth, 2019. Elaboração SP Urbanismo, 2019'
			}"></Imagem>

			<p><b>Setor Pistas de Corridas:</b> área tombada pelos órgãos de preservação do patrimônio histórico e elemento principal para as corridas de cavalos. São quatro pistas: uma externa, de grama e três de areia (sendo duas para treino), formando anéis circunscritos um ao outro. Mais ao norte, no espaço entre as pistas de areia, há a piscina para fisioterapia dos cavalos e dois picadeiros utilizados para exercício e doma dos potros. Este setor não inclui o “miolo” das pistas, que se constitui em outro setor, denominado “Pião do Prado”. Além de indissolúvel em termos de funcionamento e propriedade, este setor condiciona a distribuição de todos os demais no hipódromo. A substituição dos muros que separam o hipódromo da Av. Magalhães de Castro (Marginal do Rio Pinheiros) por fechamentos com maior transparência seria benéfica à paisagem da cidade, conforme se verificou no exemplo próximo da Cidade Universitária da USP. No caso do Jockey, essa transformação deve ser executada considerando a pequena distância entre a pista gramada e o perímetro do hipódromo e com o cuidado de não prejudicar as atividades do turfe.
			</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: src('arquivos/jockey-2/7.jpg'),
				caption: 'Figura 5 – Vista Aérea com o Setor Pistas de Corrida em Destaque',
				fonte: 'Google Earth, 2019. Elaboração SP Urbanismo, 2019'
			}"></Imagem>

			<p><b>Setor José Augusto de Queiroz: </b>nesse setor, localizado na extremidade sul do lote, encontra-se outra área passível de transformação mais intensa, similar ao Setor Eusébio Matoso. É composto pelo chamado “estacionamento dos eucaliptos” (900 vagas), que margeia o terreno junto à R. Dr. José Augusto de Queiroz, e pela área livre de formato triangular situada entre o estacionamento e a pista do hipódromo. O setor é o mais próximo da Ponte<b> </b>Engenheiro Roberto Rossi Zuccolo (Cidade Jardim), da estação Cidade Jardim da CPTM (Linha 9 – Esmeralda) e do Parque do Povo. Ao mesmo tempo em que se constitui atualmente como o principal acesso de veículos ao conjunto, é um setor que demanda intervenções que contribuam para a mitigação do impacto de vizinhança à zona exclusivamente residencial próxima e, que possibilitem o acesso seguro a pedestres e ciclistas provenientes da Ponte Cidade Jardim e das ciclovias do Rio Pinheiros. A área livre pode recepcionar empreendimentos que tragam diversidade de usos e maior densidade construtiva, modulados para uma inserção sensível à vizinhança. A introdução de fachadas ativas junto à Rua José Augusto de Queiroz também pode contribuir para dinamizar a área e trazer mais segurança.</p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: src('arquivos/jockey-2/8.jpg'),
				caption: 'Figura 6 – Destaque do Setor José Augusto de Queiroz',
				fonte: 'Google Earth, 2019. Elaboração SP Urbanismo, 2019'
			}"></Imagem>

			<p><b>Setor Pião do Prado: </b>área que compreende o anel interno da pista de corridas. O tombamento a classifica como área <em>non aedificandi </em>em sobressolo, com o objetivo de preservar a visão completa da pista durante as corridas. Portanto deve-se manter como área livre, dedicada à fruição do conjunto. O setor é entendido no projeto como uma área de preservação ambiental. Avalia-se, que possa se constituir como área de detenção e absorção de águas pluviais. Na hipótese de instalação de um parque público, constitui-se como a principal área livre do conjunto, podendo recepcionar, sem prejuízo à visibilidade das pistas a partir das tribunas, equipamentos esportivos, circuitos de caminhadas e corridas, mobiliário e vegetação de pequeno porte. </p>

			<Imagem :dados="{
				tipo: 'coluna',
				url: src('arquivos/jockey-2/9.jpg'),
				caption: 'Figura 7 – Vista Aérea com o Setor Pião do Prado em Destaque',
				fonte: 'Google Earth, 2019. Elaboração SP Urbanismo, 2019'
			}"></Imagem>

			<imagem
				:max-width="'700px'"
				:dados="{
				titulo: 'Proposta de Setorização para o conjunto do Jockey Club',
				tipo: 'mapa',
				url: src('arquivos/jockey-2/mapas/2.jpg'),
				legenda: [
					{ char: '1',  fundo: '#A793BD', descricao: 'Setor Eusébio Matoso - Área: 15.156m²' },
					{ char: '2',  fundo: '#DCA2C3', descricao: 'Setor Vila Hípica - Área: 92.272m²' },
					{ char: '3',  fundo: '#E5B455', descricao: 'Setor Lineu de Paula Machado - Área: 51.186m²' },
					{ char: '4',  fundo: '#924F6C', descricao: 'Setor Conjunto Histórico - Área: 241.835m²' },
					{ char: '5',  fundo: '#FEF571', descricao: 'Setor Pistas de Corrida - Área: 241.835m²' },
					{ char: '6',  fundo: '#FC4850', descricao: 'Setor José Augusto de Queiroz - Área: 49.050m²' },
					{ char: '7',  fundo: '#50B17E', descricao: 'Setor Peão do Prado - Área: 110.972m²' }
				],
				fonte: 'Elaboração: SP-Urbanismo, 2020'
			}">
				<div slot='extra'>
					<h5>Quadro de áreas</h5>
					<img :src="src('arquivos/jockey-2/mapas/mapa2__pizza.png')" alt="Gráfico de áreas de setores PIU Jockey Club">
				</div>
			</imagem>

			<Comments :attr="{ id:commentId(), context:'Setorização' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Parcelamento</h2>
			<p>A área do Hipódromo de Cidade Jardim é constituída, atualmente, por um único lote com 586.634,68 m² (área matrícula) ou 617.971 m² (MDC). A escala e integralidade da área são compatíveis com as características do hipódromo que demanda extensas áreas livres de pistas e treinamento conectadas a setores edificados com funções ligadas ao turfe, como abrigo, tratamento e cuidado com os animais, alojamentos e vestiário para os jockeys, tribunas, áreas para apostas, leilões, eventos sociais e restaurantes, entre outras. </p>
			<p>Assim, a manutenção da integralidade do lote só se justifica se mantida a situação atual. Como já visto, a situação atual revela certo grau de ociosidade do hipódromo, conflitos de vizinhança e uma relação pobre entre o conjunto e o entorno. As transformações potenciais ensaiadas na setorização e no programa de interesse público apontam para a introdução, em diferentes graus, de atividades sem relações funcionais com o hipódromo, ainda que possam complementar e se integrar às atividades nele existentes. Considerando essa heterogeneidade de características e diretrizes e as recomendações de SMDU, os parâmetros urbanísticos deverão ser propostos observando-se a setorização.
			</p>
			<p>A Lei de Parcelamento, Uso e Ocupação do Solo – LPUOS (Lei nº 16.402/2016) prevê o parcelamento de áreas acima de 20.000m², com destinação de 30 a 40% de área pública. No entanto, em uma ZOE (zona de ocupação especial) como o Jockey Club, conforme o art. 42 da LPUOS, este parâmetro não é aplicável, tendo em vista as particularidades do equipamento (hipódromo), do terreno e de seu conjunto construído, não se vislumbrando a possibilidade de um parcelamento tradicional do terreno, com abertura de novas vias e destinação de áreas verdes e institucionais. Se aplicada à integralidade do conjunto, a título de ordem de grandeza desta proporção, as áreas públicas seriam de aproximadamente 240.000 m².</p>
			<p>O projeto aponta para transformações mais intensivas nos setores Eusébio Matoso e José Augusto de Queiroz. Para que esta transformação seja possível, será necessário o desmembramento integral ou parcial destes setores do conjunto do hipódromo, configurando novas glebas e lotes onde incidirão os parâmetros específicos dos respectivos setores. Nestes setores, na hipótese de transformação, devem ser observadas as regras ordinárias de parcelamento e destinação de áreas públicas definidos pela LPUOS. Já os demais setores, onde se admitem transformações mais restritas, o parcelamento não é uma condição fundamental, pois a configuração atual de uso e ocupação ainda seria majoritária.
			</p>
			<p> Como já indicado, a setorização proposta neste PIU deve servir como referência para a resolução das tratativas entre Jockey Club e Prefeitura a respeito das dívidas tributárias. Em síntese, as diretrizes do PIU Jockey Club relativas ao parcelamento do lote do Hipódromo de Cidade Jardim derivam do desfecho dessas tratativas, que podem utilizar a transferência total ou parcial da propriedade como forma de resolução. No cenário A, havendo somente o hipódromo como equipamento, não haveria parcelamento. Nos cenários A e B, caso a Prefeitura ou Jockey decidam alienar a totalidade ou parte dos setores Eusébio Matoso e José Augusto de Queiroz, também devem desmembrá-los do lote do Hipódromo e observar as obrigações de destinação de áreas públicas da legislação ordinária. Caso o hipódromo seja desativado, deve ser garantida a destinação proporcional mínima de 40% de áreas públicas para a totalidade da ZOE. No Cenário C, haveria uma subdivisão de propriedade no lote atual. Neste cenário, deve ser priorizada a destinação para propriedade pública o setor Pião do Prado, com 110.972 m², correspondente a 18% da área total da ZOE, possibilitando a utilização da área livre <em>non edificandi</em> para implantação de um parque público. Nos demais setores, em especial no Lineu de Paula Machado e José Augusto de Queiroz, é possível vislumbrar um desmembramento entre áreas públicas e privadas, desde que tal divisão considere as particularidades de funcionamento do hipódromo. Essa hipótese pode qualificar a proposta do parque público, agregando áreas com vegetação arbórea e ambientes sombreados, bem como áreas passíveis de instalação de edifícios para o funcionamento do parque, para funções de administração, sanitários, vestiários, manutenção, limpeza, etc, já que no Pião do Prado tais atributos possuem maior restrição. </p>
			<Comments :attr="{ id:commentId(), context:'Parcelamento' }" v-if="consultaAtiva"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Uso</h2>
			<p>As propostas de parâmetros relativos aos usos também têm como base a setorização. Além de considerar as atividades inerentes ao hipódromo, o projeto considera a proposta de implantação de um parque público como o principal elemento de interesse público, articulador dos demais usos que podem funcionar concomitantemente com o hipódromo ou em horários em que este não tenha atividades de corridas e treinamentos nas pistas. </p>
			<p>Todas as atividades associadas às funcionalidades do hipódromo devem ser permitidas nos setores Vila Hípica, Conjunto Histórico e Pistas de Corrida, acrescidas de usos acessórios potenciais, como serviços de alimentação, equipamentos culturais e de lazer, etc. Subsiste também a questão da realização de eventos, que revelou diversos conflitos entre o Jockey e a vizinhança. Pela escala, localização e infraestrutura do equipamento, avalia-se que a permissão para que possam continuar a ocorrer no Hipódromo é positiva para o conjunto, ampliando sua utilização, desde que os parâmetros de incomodidade possam controlar excessos e regular os termos para mitigar os impactos. </p>
			<p>Com o objetivo de estimular a diversidade de usos no conjunto e uma maior dinâmica urbana nos espaços públicos do entorno, a proposta de usos para as áreas transformáveis nos setores Eusébio Matoso e José Augusto de Queiroz prevê a presença mais intensa de usos não residenciais. Esses usos surgem como complementares ao uso residencial do bairro Cidade Jardim, provocando efeitos positivos nas dinâmicas de mobilidade da região na medida em que criam postos de trabalho na própria subprefeitura, trazendo trabalhadores de outras localidades para uma área atualmente vazia na maior parte do dia. Este contingente de trabalhadores ajuda a dinamizar a economia local nas centralidades próximas, trazendo maior movimento às ruas e maior segurança. Será admitido o uso residencial vertical em empreendimentos de uso misto, com proporção máxima de áreas construídas computáveis de até 50% do empreendimento.</p>
			<p>A proposta de usos para o setor Eusébio Matoso é mais permissiva, similar a uma ZEU, de modo a estimular atividades diversificadas. Pelo fácil acesso de pedestres através de metrô ou ônibus, as atividades que ali acontecerem pode estimular uma maior ocupação dos imóveis na Av. Lineu de Paula Machado. </p>
			<p>No setor José Augusto de Queiroz prevê-se atividades que possam conviver com a zona exclusivamente residencial no entorno imediato do Jockey – o chamado Bolsão 1 do bairro, entre a rua Dr. José Augusto de Queiroz e a Av. dos Tajurás. As atividades não residenciais de menor nível de incomodidade.</p>
			<p>No setor Lineu de Paula Machado, pela maior proximidade com as atividades do hipódromo e a diretriz de dinamização da avenida, será permitido somente o uso não residencial, com fachada ativa, com maior gama de atividades do que a ZCOR2. Um exemplo bem sucedido das Zonas Corredor (ZCOR) do bairro Cidade Jardim é a Avenida dos Tajurás, onde é possível encontrar bancos, lojas, postos de conveniência, escola e diversos outros serviços que atendem às necessidades mais corriqueiras dos moradores do entorno sem causar incomodidade à vizinhança direta. Entende-se que a Av. Lineu de Paula Machado pode ser como uma extensão da Av. Tajurás no que tange a vitalidade do espaço público, criando um ambiente agradável ao pedestre de uma ponta a outra, chegando até a Av. Francisco Morato. Atividades atrativas localizadas nas bordas do conjunto podem impulsionar a transformação do outro lado da avenida, fazendo com que o local se torne mais seguro e agradável para os moradores do entorno e para passa pela região.</p>
			<p>Nos setores Vila Hípica e Conjunto Histórico, além das atividades ligadas ao hipódromo, propõe-se uma ampla gama de usos de pequeno e médio porte que possam se adaptar às características da arquitetura preservada, contribuindo para uma maior diversidade, sobretudo no cenário de implantação de um parque com atividades culturais, esportivas e ambientais associadas, tais como exposições, oficinas, feiras, restaurantes e atividades voltadas à economia criativa e ambiental. </p>
			<p>Por fim, nos setores Pistas de Corrida e Pião do Prado, considerando as restrições do tombamento e as funcionalidades relativas ao hipódromo, serão permitidas atividades esportivas, culturais e ambientais.</p>
			<p>Em todos os setores, é admitida a atividade de estacionamento de veículos para dar suporte não só às atividades do hipódromo, mas a eventos e demais atividades que venham a se instalar no conjunto, suprindo a demanda e buscando diminuir o impacto de estacionamento de veículos nas ruas das zonas residenciais próximas. Considerando a existência do grande bolsão de 900 vagas de estacionamento no setor José Augusto de Queiroz, as novas vagas a serem criadas deverão ser distribuídas nos demais setores.</p>
			<p>Os usos permitidos para cada setor são apresentados no quadro a seguir: </p>

			<tabela :dados="{
				estreita: false,
				titulo: 'Quadro 1 – Usos permitidos, de acordo com o setor',
				colunas: [
					{ titulo: 'Setor' },
					{ titulo: 'Usos permitidos' },
				],
				linhas: [
					[
						[ { data: 'Eusébio Matoso' } ],
						[ { data: 'R2v, nRa, nR1, nR2 e nR3' } ],
					],
					[
						[ { data: 'Vila Hípica' } ],
						[ { data: 'nRa, nR1 (exceto nR1-14 a 16), nR2 (exceto nR2-12 e15) e nR3-4' } ],
					],
					[
						[ { data: 'Lineu de Paula Machado' } ],
						[ { data: 'nRa(exceto nRa-4 e 5), nR1 (exceto nR1-14 a 16), nR2 (exceto nR2-12 e15) e nR3-4' } ],
					],
					[
						[ { data: 'Conjunto Histórico' } ],
						[ { data: 'nRa, nR1 e nR2 (exceto nR2-12 e 15) e nR3-4' } ],
					],
					[
						[ { data: 'Pistas de Corrida' } ],
						[ { data: 'nRa  e nR3-4' } ],
					],
					[
						[ { data: 'José Augusto de Queiroz' } ],
						[ { data: 'R2v, nRa(exceto nRa-4 e 5), nR1 (exceto nR1-14 a 16), nR2 (exceto nR2-12 e 15) e nR3' } ],
					],
					[
						[ { data: 'Pião do Prado' } ],
						[ { data: 'xnRa e nR3-4' } ]
					]
			],
				fonte: 'SPUrbanismo, 2018',
				tabelaListrada: false
			}" />
			<Comments :attr="{ id:commentId(), context:'Uso' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Ocupação</h2>
			<p>Em relação aos parâmetros de ocupação do solo, os setores são divididos pelo caráter predominante, de transformação ou preservação.</p>
			<p>Os setores de preservação são: Vila Hípica, Conjunto Histórico, Pistas de Corrida e Pião do Prado. Entende-se que nesses setores cabem apenas intervenções pontuais, como instalação de mobiliário e arborização já que seu caráter é de preservação, seja das construções ou da paisagem.</p>
			<p>Nos setores Pistas de Corrida e Pião do Prado, onde incidem restrições à ocupação pelas resoluções de tombamento e onde é necessário preservar as áreas livres para fruição da paisagem e o cumprimento dos serviços ambientais, propõ-se parâmetros similares à ZEPAM. Nos setores Vila Hípica e Conjunto Histórico, onde a ocupação atual ocupa grande parte da área destes setores, condicionando as possibilidades de transformação e onde também incidem restrições de tombamento, propõe-se parâmetros restritos ao C.A. 1,0.</p>
			<p>Os setores transformáveis são: Eusébio Matoso, Lineu de Paula Machado e José Augusto de Queiroz. Os critérios para a definição dos parâmetros visam possibilitar as transformações e permitir que se crie uma nova ambiência urbana diversificada, na qual o Jockey estabelece uma nova relação com a cidade – principalmente seu entorno imediato – e considerando as questões ambientais que lhe são inerentes. Também foi levada em conta a relação que os novos edifícios devem estabelecer com os edifícios existentes preservados, de modo a criar uma coexistência harmoniosa.
			</p>
			<p> Para os setores Eusébio Matoso e José Augusto de Queiroz, por sua proximidade com os modais de transporte e grandes avenidas, propõe-se um coeficiente de aproveitamento mais alto, aumentando a densidade construtiva nas extremidades do lote e estimulando um uso mais intenso dessas áreas. Já no setor Lineu de Paula Machado, entende-se que esse coeficiente deve ser mais moderado, tendo em vista a ambiência integrada aos edifícios históricos e a proximidade do bairro exclusivamente residencial no lado oposto da avenida e o objetivo de explorar mais o térreo das edificações.
			</p>
			<p> O gabarito de altura proposto para os setores Eusébio Matoso e José Augusto de Queiroz é de 80 metros, de forma a permitir alguma verticalização nas extremidades sem interferir demasiadamente na paisagem do conjunto, além de evitar sombreamento. No setor Lineu de Paula Machado, para valorizar o conjunto arquitetônico tombado e manter a relação volumétrica com os parâmetros construtivos da ZCOR e da ZER no outro lado da avenida, o limite de altura deve ficar em 15 metros. </p>
			<p>No setor José Augusto de Queiroz incidirá o gabarito de altura de 10m na faixa de 40m a partir da testada da referida rua e a faixa <em>non edificandi </em>de 100m a partir da borda do leito regular do Rio Pinheiros ,correspondente à área de preservação permanente do rio, conforme disposições do art. 4º, alínea “c” do Código Florestal (Lei Federal nº12.651/2012).</p>
			<p> Todas as novas edificações deverão manter recuo mínimo de 15 metros das edificações tombadas, de modo a valorizar o patrimônio. Os parâmetros de Quota Ambiental são os mesmos previstos na Lei de Parcelamento Uso e Ocupação do Solo. No setor Lineu de Paula Machado, é obrigatória a implantação de fachadas ativas em novas edificações em, no mínimo, 25% das testadas dos lotes. O limite de vedação das testadas por muros será de 25% em cada setor e passará a incidir a partir do licenciamento de novos empreendimentos. Este limite não é aplicável nos setores Vila Hípica e Conjunto Histórico, que possuem edificações implantadas junto às testadas. Permanecem válidos no perímetro de regulação excepcional os demais parâmetros e incentivos previstos na legislação superveniente não especificados neste PIU.</p>

			<tabela :dados="{
				estreita: false,
				titulo: 'Quadro 2 – Parâmetros de Ocupação, de acordo com o setor',
				colunas: [
					{ titulo: 'SETOR' },
					{ titulo: 'CA Máximo' },
					{ titulo: 'TO Máxima' },
					{ titulo: 'Gabarito de Altura Máximo' },
					{ titulo: 'Cota Parte Máxima de terreno/UH' }
				],
				linhas: [
					[
						[ { data: 'Eusébio Matoso' } ],
						[ { data: '4' } ],
						[ { data: '0,70' } ],
						[ { data: '80' } ],
						[ { data: '20' } ]
					],
					[
						[ { data: 'Vila Hípica' } ],
						[ { data: '1' } ],
						[ { data: '0,85' } ],
						[ { data: '15' } ],
						[ { data: 'NA' } ]
					],
					[
						[ { data: 'Lineu de Paula Machado' } ],
						[ { data: '2' } ],
						[ { data: '0,70' } ],
						[ { data: '15' } ],
						[ { data: 'NA' } ]
					],
					[
						[ { data: 'Conjunto Histórico' } ],
						[ { data: '1' } ],
						[ { data: '0,85' } ],
						[ { data: '15' } ],
						[ { data: 'NA' } ],
					],
					[
						[ { data: 'Pistas de Corrida' } ],
						[ { data: '0,1' } ],
						[ { data: 'NA' } ],
						[ { data: 'NA' } ],
						[ { data: 'NA' } ]
					],
					[
						[ { data: 'José Augusto de Queiroz' } ],
						[ { data: '4' } ],
						[ { data: '0,70' } ],
						[ { data: '80 (a)' } ],
						[ { data: 'NA' } ]
					],
					[
						[ { data: 'Pião do Prado' } ],
						[ { data: '0,1' } ],
						[ { data: 'NA' } ],
						[ { data: '10' } ],
						[ { data: 'NA' } ]
					]
				],
				fonte: 'SPUrbanismo, 2018',
				tabelaListrada: false
			}" />
			<p class="notas">Notas: a) 10m na faixa de 40m da testada da Rua José Augusto de Queiroz.</p>

			<Comments :attr="{ id:commentId(), context:'Ocupação' }" v-if="consultaAtiva"></Comments>
		</section>
		<section>
			<h2 class="titulo" indent="1">Programa de intervenções</h2>
			<p>O programa de intervenções proposto está vinculado à criação do Parque Jockey Club e à transformação dos setores indicados, gerando receitas a partir da cobrança do potencial construtivo adicional para a implantação gradual dos melhoramentos. O programa prevê uma série de melhorias no entorno próximo do lote, além das intervenções necessárias dentro do conjunto. </p>
			<p>As intervenções no entorno estão organizadas em 4 agrupamentos:</p>
			<ol>
				<li>Qualificação dos percursos de pedestres e ciclistas entre as estações metroferroviárias e o Jockey Club;</li>
				<li>Melhoramento Viário daRua José Augusto de Queiroz;</li>
				<li>Qualificação e ampliação da infraestrutura cicloviária;</li>
				<li>Conexão do parque público ao Rio Pinheiros.</li>
			</ol>
			<p>As intervenções internas consistem unicamente na criação do parque e seus acessos.</p>
			<p>A seguir são discriminadas as intervenções:</p>
			<ul>
				<li><b>Acessibilidade ao Parque:</b> este conjunto de intervenções considera a qualificação das rotas existentes
					entre as estações Hebraica-Rebouças, Cidade Jardim e Butantã e o Hipódromo, com melhorias de pavimentação, dos passeios, melhorias e implantação de faixas de pedestre, semáforos, lombofaixas, sinalização, iluminação e arborização. Nos trechos sobre as pontes, prevê-se o alteamento de.guarda-corpos. Este agrupamento inclui ainda a implantação de travessias de pedestres na Av. Lineu de Paula Machado, conectando o conjunto do hipódromo ao bairro de Cidade Jardim em pontos estrategicamente definidos, junto às praças existentes e pontos de acesso ao hipódromo e ao futuro parque.</li>
				<li><b>Extensão da Ciclopassarela Cidade Jardim:</b> a ciclopassarela existente conecta o Parque do Povo à ciclovia existente na margem leste do Rio Pinheiros, junto à linha 9 – Esmeralda da CPTM. Este intervenção prevê a extensão da ciclopassarela até as proximidades da Av. dos Tajurás, conectando-a com a ciclovia existente na margem oeste do rio e à infraestrutura cicloviária existente no bairro de Cidade Jardim.</li>
				<li><b>Melhoramento Viário R. José Augusto de Queiroz: </b>o<b> </b>alargamento da via possibilitará uma qualificação urbanística que trará melhor ordenamento e ampliação da capacidade de tráfego de veículos no entorno, maior segurança aos pedestres e menor impacto nas áreas residenciais em ocasiões de eventos.</li>
				<li><b>Acesso ao Rio Pinheiros:</b> tendo em vista a perspectiva futura de despoluição do Rio Pinheiros e a possibilidade da cidade se reconectar com seus rios, a intervenção prevê que, a partir da área central do parque no Pião do Prado, uma passarela conectaria o conjunto à margem oeste do Rio Pinheiros, passando sobre as pistas da Av. Magalhães de Castro e chegando a um píer a ser construído sobre o espelho d’água do Rio Pinheiros, possibilitando que as pessoas se aproximem das águas e contemplem a paisagem a partir de novas perspectivas. O píer possibilita que embarcações turísticas ou de transporte urbano fluvial possam atracar futuramente no local.
				</li>
				<li><b>Implantação do parque:</b> mobiliário, plantio de vegetação arbustiva, caminhos, campo de futebol, quadras esportivas, equipamentos de ginástica, entre outros. </li>
			</ul>

			<p>Avalia-se que a proposta de implantação deste parque em um nível mais baixo que as pistas de corrida do hipódromo, conforme a proposta formulada pelo Jockey Club em 2017 é tecnicamente viável. Porém, o lençol freático alto e as características geológicas do terreno tornariam a área permanentemente alagada, inviabilizando a implantação das atividades previstas no Pião do Prado ou, para que essas possam ser utilizadas, demandando a instalação e manutenção de uma infraestrutura de captação, retenção e bombeamento onerosa, frente aos padrões de operação praticados pelo município. Assim, considera-se que o parque poderia ser implantado no mesmo nível do gramado atualmente existente no setor, com acessos em nível, sendo possível conciliar as atividades previstas com uma infraestrutura de detenção e absorção de águas pluviais mais simples e barata. Esta escolha condiciona a utilização do parque somente nos dias e horários em que as pistas não forem utilizadas pelo Jockey Club.</p>
			<ul>
				<li><b>Readequação da infraestrutura do Setor Vila Hípica:</b> readequação da infraestrutura do conjunto para que as edificações possam receber novas atividades diversas. Considera-se que as obras de restauro dos edifícios são de responsabilidade do Jockey Club, pois estão vinculadas à emissão da Declaração de Potencial Construtivo Passível de Transferência.</li>
				<li><b>Estacionamentos:</b> avalia-se que a concentração de vagas em um grande bolsão amplia os distúrbios causados à vizinhança em função de filas e em decorrência do excesso de veículos estacionados nas vias locais. Assim, propõe-se a criação de três bolsões de estacionamento no interior do lote, com acessos pela Avenida Lineu de Paula Machado, nos setores Eusébio matoso, Lineu de Paula Machado, mantendo-se o atual no setor José Augusto de Queiroz.</li>
				<li><b>Permeabilidade visual do perímetro:</b> substituição dos muros existentes em até 75% do perímetro por fechamentos visualmente permeáveis, como gradis, vidros, etc.</li>
			</ul>

			<Imagem :dados="{
				tipo: 'coluna',
				url: src('arquivos/jockey-2/11.jpg'),
				caption: 'Mapa 3 - Acessibilidade a pé. Distâncias e tempos a partir das estações de trem e metrô',
				fonte: 'Elaboração SP Urbanismo, 2019'
			}"/>

			<Imagem :dados="{
				tipo: 'coluna',
				url: src('arquivos/jockey-2/12.jpg'),
				caption: 'Mapa 4 - Intervenções Propostas',
				fonte: 'Elaboração SP Urbanismo, 2019'
			}"/>

			<p><a id="_Toc28627194"></a>4.1 ESTIMATIVA DE CUSTOS DAS INTERVENÇÕES</p>

			<Comments :attr="{ id:commentId(), context:'Programa de intervenções' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Estimativa de custos das intervenções</h2>
			<p>A metodologia para estimativa de custos de intervenções em projetos de intervenção urbana utilizada pela SP Urbanismo considera ferramentas padronizadas como intervenções-tipo, dimensionadas com custos unitários a partir da composição de custos das tabelas SIURB de materiais e serviços vigentes. Esta metodologia é compatível com o grau de especificidade alcançado pelos PIU, não se constituindo em orçamentos das obras, que demandam definições de projeto incompatíveis com a natureza destes projetos.</p>
			<p>As estimativas deverão ser avaliadas em conjunto com a estimativa de receitas na Modelagem econômica (P08), possibilitando eventual revisão e priorização conforme as diretrizes estabelecidas no projeto. </p>

			<tabela :dados="{
				titulo: 'Quadro 3 – Estimativa de Custos das intervenções',
				colunas: [
					{ titulo: 'Intervenção' },
					{ titulo: 'Custo Unitário' },
					{ titulo: 'Dimensão' },
					{ titulo: 'Custo Total' }
				],
				linhas: [
					[
						[ { data: 'Implantação do Parque' } ],
						[ { data: 'R$292,00/m²' } ],
						[ { data: '110.972 m²' } ],
						[ { data: 'R$32.403.824,00' } ]
					],
					[
						[ { data: 'Infraestrutura de drenagem do parque' } ],
						[ { data: 'R$506,00/ m²' } ],
						[ { data: '22.194 m²' } ],
						[ { data: 'R$11.230.366,00' } ]
					],
					[
						[ { data: 'Acessibilidade ao parque (qualificação dos percursos)' } ],
						[ { data: 'R$565,00/m²' } ],
						[ { data: '22.250 m²' } ],
						[ { data: 'R$12.571.250,00' } ]
					],
					[
						[ { data: 'Extensão da Ciclopassarela Cidade Jardim' } ],
						[ { data: 'R$9.775,00/m²' } ],
						[ { data: '575 m²' } ],
						[ { data: 'R$5.620.625,00' } ]
					],
					[
						[ { data: 'Melhoramento Viário R. José Augusto de Queiroz' } ],
						[ { data: 'R$995,00/m²' } ],
						[ { data: '6.960 m²' } ],
						[ { data: 'R$6.925.200,00' } ]
					],
					[
						[ { data: 'Acesso ao Rio Pinheiros' } ],
						[ { data: 'R$9.775,00/m²' } ],
						[ { data: '2.240 m²' } ],
						[ { data: 'R$21.896.000,00' } ]
					],
					[
						[ { data: 'Readequação da infraestrutura do Setor Vila Hípica' } ],
						[ { data: 'R$600,00' } ],
						[ { data: '37.000 m²' } ],
						[ { data: 'R$22.145.400,00' } ]
					],
					[
						[ { data: 'Estacionamentos' } ],
						[ { data: 'R$1.500,00' } ],
						[ { data: '12.500 m²' } ],
						[ { data: 'R$18.750.000,00' } ]
					],
					[
						[ { data: 'Permeabilidade visual do perímetro' } ],
						[ { data: 'R$1.300,00' } ],
						[ { data: '2.500 m' } ],
						[ { data: 'R$3.250.000,00' } ]
					]
				],
				fonte: 'SPUrbanismo, 2018',
				tabelaListrada: false
			}" />
			<Comments :attr="{ id:commentId(), context:'Estimativa de custos das intervenções' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Modelo de gestão democrática</h2>
			<h3>Aprentação</h3>
			<p>O presente produto tem como objeto apresentar o modelo de gestão democrática para o Projeto de Intervenção Urbana (PIU) Jockey Club. Este modelo deve considerar as diretrizes de desenvolvimento urbano previstas no projeto, os parâmetros urbanísticos incidentes na ZOE e o programa de intervenções previsto para identificar os atores envolvidos e suas competências, propondo a governança do conjunto do Hipódromo de Cidade Jardim, bem como os mecanismos de monitoramento dos resultados do projeto para o equipamento e a região em que está inserido. </p>
			<p>	Neste projeto em particular, para além da constituição de um Conselho Gestor do próprio PIU Jockey Club, é necessário especificar os termos da necessária contratualização das relações entre a Prefeitura de São Paulo e o Jockey Club de São Paulo, pois em qualquer um dos cenários de composição entre as partes será imprescindível a gestão integrada das propriedades e atividades para que o conjunto funcione harmonicamente e possa intensificar sua apropriação pela população. Neste contexto, é necessário que sejam concluídas as tratativas em curso entre a Prefeitura e o Jockey visando a resolução das dívidas tributárias para que se possa vislumbrar os termos e condições para a formalização que possibilitará a operação compartilhada do conjunto do Hipódromo de Cidade Jardim.</p>
			<p>É importante ressaltar que as proposições aqui presentes têm caráter preliminar e deverão ser submetidas à consulta pública, para então serem revisadas e consolidadas em uma proposta final na forma de uma minuta de projeto de lei.</p>

			<h3>Atores</h3>
			<p>Dentre as estratégias do Plano Diretor Estratégico (PDE), tem destaque o fortalecimento da participação popular nas decisões dos rumos da cidade, considerando as diversas instâncias e por meio de diferentes instrumentos de participação e controle social. Tais estratégias garantem a participação de representantes dos diferentes segmentos da população de forma direta ou por intermédio de associações representativas, nos processos de planejamento e gestão da cidade, de realização de investimentos públicos e na elaboração, implementação e avaliação de planos, programas e projetos de desenvolvimento urbano.</p>
			<p>O PDE definiu, no artigo 136, que os PIUs elaborados pelo Poder Público deverão apresentar propostas de transformações urbanísticas, econômicas e ambientais no perímetro onde for aplicado o instrumento, cabendo ao PIU indicar os objetivos prioritários da intervenção, as propostas relativas a aspectos urbanísticos, ambientais, sociais, econômico-financeiros e modelo de gestão democrática que contemple mecanismos de participação e controle social e instrumentos para monitoramento e avaliação das ações.</p>
			<p>O Jockey Club de São Paulo é um ator naturalmente primário deste projeto, como atual proprietário de todo o conjunto do hipódromo e responsável pela operação do equipamento e dos eventos que vem sendo realizados. Em qualquer cenário decorrente das tratativas com a Prefeitura, continuará como proprietário e operador do hipódromo e deverá ter assento em um conselho gestor do PIU e do próprio parque público.</p>
			<p>A primeira consulta pública possibilitou a identificação de atores locais que se manifestaram e contribuíram com o projeto. Entre as treze contribuições institucionais recebidas, destacamos as duas associações locais de moradores, a SACJ – Sociedade Amigos da Cidade Jardim e a Associação Vizinhos do Jockey, que versaram sobre aspectos do entorno, como impactos de vizinhança, sugestões de acessos, etc. Houve também manifestações de organizações públicas como a ETC e a Secretaria Municipal de Saúde e a Secretaria de Desenvolvimento Econômico do Estado de São Paulo, e de organizações privadas ou de interesse público, como o Aramaçan e o Instituto Rede Brasilidade, entre outras entidades, que também contribuíram para o projeto.</p>
			<p>A apresentação realizada no Conselho Participativo Municipal e no Conselho Municipal de Meio Ambiente e Desenvolvimento Sustentável do Butantã também possibilitaram o contato com cidadãos eleitos e servidores municipais atuantes na região do projeto.</p>
			<p>Por fim, as propostas contidas neste PIU demandam a articulação com secretarias municipais e regulamentações já estabelecidas, que se sobrepõem a este projeto e reforçam a necessidade de pactuação e validação prévias a sua institucionalização, como a Secretaria Municipal do Verde e do Meio Ambiente – SVMA, como órgão executivo dos parques municipais, a Subprefeitura do Butantã, como gestora dos espaços públicos e do território onde se insere o projeto, a SMT ou, por delegação, a CET, como entidade de planejamento viário e operadora do sistema viário na região. Há também uma necessidade de articulação com órgãos estaduais vinculados à gestão do Rio Pinheiros, como o DAEE, EMAE e Departamento Hidroviário, e organizações mobilizadas por sua despoluição e maior integração à vida urbana, como a Águas Claras do Rio Pinheiros.</p>
			<p>A partir deste universo, a SP Urbanismo construiu uma proposta de gestão democrática paritária entre o setor público, entidades sociais e privadas, que será apresentado a seguir.</p>

			<h3>Conselho Gestor do PIU Jockey Club</h3>
			<p>O PIU Jockey Club deverá instituir um Conselho Gestor sob a coordenação da Secretaria Municipal de Desenvolvimento Urbano (SMDU), de caráter consultivo, fiscalizatório e propositivo, com a participação de órgãos municipais e de entidades representativas da sociedade civil, tendo a competência de instruir e auxiliar a implantação do Programa de Intervenções no Perímetro Expandido, monitorar o desenvolvimento e propor programas e estratégias que possam aprimorar o projeto, enquanto que a São Paulo Urbanismo ficará a cargo de promover a implantação dos projetos no Perímetro Expandido e avaliar a evolução dos processos, podendo contar com a colaboração dos órgãos e entidades municipais para o desempenho de suas funções específicas. A implantação do programa, por sua vez, é decorrente da definição do instrumento urbanístico, das fontes de financiamento e do cenário de propriedade e gestão a área, que ainda não foram definidos. O programa somente será executado caso o cenário que prevaleça seja de transformação dos setores Eusébio Matoso e José Augusto de Queiroz e implantação do parque público.</p>
			<p>O Conselho Gestor do PIU Jockey Club deverá ter como atribuições principais:</p>
			<ol class="romanos"><li>Proposição de diretrizes, disposições e responsabilidades relativas à gestão compartilhada do conjunto da ZOE pelo Jockey Club e Prefeitura;</li><li>Monitoramento da utilização do conjunto pela população, considerando os diferentes públicos e funcionalidades, identificando conflitos e potencialidades e propondo formas de regulação compatíveis com os parâmetros e diretrizes deste projeto;</li><li>Proposição da ordem de prioridades das obras do programa de intervenções; </li><li>Acompanhamento e fiscalização da execução do programa de intervenções; </li><li>Monitoramento da aplicação dos recursos provenientes da venda de potencial construtivo das áreas transformáveis no programa de intervenções; </li></ol><p> </p><p>A composição proposta para o Conselho Gestor do PIU Jockey Club é a seguinte:</p><ol><li>Representante indicado pelo Jockey Club de São Paulo.</li>
			</ol>

			<h4>Setor público (1 representante indicado por entidade):</h4>
			<ol><li>SMDU – Secretaria Municipal de Desenvolvimento Urbano (Presidência);</li><li>SP Urbanismo (execução do Programa de Intervenções e gerenciamento dos recursos específicos do projeto);</li><li>SP-BT – Subprefeitura do Butantã (Vice-presidência);</li><li>SP-PI – Subprefeitura de Pinheiros;</li><li>SVMA – Secretaria Municipal do Verde e do Meio Ambiente;</li><li>SMT – Secretaria Municipal de Transportes (ou, por delegação, a CET – Companhia de Engenharia de tráfego);</li><li>Representação do Governo do Estado de São Paulo com governança sobre o uso das margens do Rio Pinheiros.</li></ol>

			<h4>Órgãos Colegiados (1 representante eleito por colegiado):</h4>
			<ol><li>CPM – Conselho Participativo Municipal ou CADES – Conselho Municipal do Meio Ambiente e Desenvolvimento Sustentável do Butantã;</li><li>CPM – Conselho Participativo Municipal ou CADES – Conselho Municipal do Meio Ambiente e Desenvolvimento Sustentável de Pinheiros;</li><li>Conselho Gestor do Parque Municipal do Jockey Club (se implantado);</li>
			</ol>

			<h4>Sociedade Civil (1 representante eleito por setor):</h4>
			<ol>
				<li>Associação de bairro atuante na AID – Área de Influência Direta do PIU;</li>
				<li>Entidade comunitária ou social com sede e atuante nas Subprefeituras do Butantã ou de Pinheiros;</li>
				<li>Entidade empresarial com sede e atuante na Subprefeitura do Butantã ou de Pinheiros;</li><li>Entidade de trabalhadores com sede e atuante na Subprefeitura do Butantã ou de Pinheiros;</li><li>Entidade ambientalista com sede e atuante na sub-bacia do Rio Pinheiros.</li>
			</ol>

			<h3>Conselho Gestor do PARQUE MUNICIPAL DO Jockey Club</h3>
			<p>Na hipótese de implantação do Parque Municipal do Jockey Club no setor Pião do Prado e outras áreas componentes do conjunto do Hipódromo de Cidade Jardim, deverá ser constituído um Conselho Gestor específico para gerir e fiscalizar o parque, seguindo a regulação vigente para estes colegiados, sob coordenação da SVMA.</p><p>Os Conselhos Gestores dos Parques Municipais foram criados em 2003 para garantir a participação popular no planejamento, gerenciamento e fiscalização das atividades que ocorrem nos parques. O objetivo é envolver a comunidade na discussão das políticas públicas de forma consultiva, com enfoque nas questões socioambientais.</p><p>Os Conselhos são constituídos por, no mínimo, oito membros titulares e respectivos suplentes, distribuídos em quatro categorias de representação:</p><p>I – Sociedade Civil: 4 (quatro) representantes da sociedade civil, contemplando 3 (três) representantes dos frequentadores do parque e 1 (um) representante de movimentos sociais, instituições ou entidades locais, cuja atuação esteja na área de abrangência do parque;</p><p>II – Trabalhadores: 1 (um) representante dos trabalhadores do respectivo parque municipal, de órgãos públicos ou de empresas privadas que nele prestem serviços, independentemente da modalidade de seu vínculo contratual de trabalho;</p><p>III – Poder Executivo: 3 (três) representantes do Poder Executivo. Neste caso, temos:<br />a) o Administrador ou Diretor do parque, que representa a Secretaria Municipal do Verde e do Meio Ambiente (SVMA) e coordenador do Conselho Gestor do respectivo parque municipal;<br />b) 1 (um) indicado pela Prefeitura Regional correspondente à área de abrangência do parque;<br />c) 1 (um) indicado por outra Secretaria Municipal, na área da educação, cultura, esportes, lazer e recreação, saúde ou de segurança urbana.</p><p>Propõe-se que um representante do CG do PIU Jockey Club tenha assento no Conselho Gestor do Parque Jockey Club. A atuação dos Conselhos Gestores nos Parque Municipais está prevista na Lei Nº 15.910 de 27 de novembro de 2013. </p>
			<Comments :attr="{ id: commentId(), context:'Modelo gestão democrática' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Modelagem econômica</h2>
			<h3>Apresentação</h3>
			<p>Neste trabalho, desenvolve-se o estudo de viabilidade econômica e financeira do Projeto de Intervenção Urbana Jockey Club (PIU Jockey Club), a partir da proposta de ordenamento urbanístico apresentada no Produto 06 (Proposta de Ordenamento Urbanístico). Seu objetivo é avaliar a capacidade de arrecadação do PIU por meio do instrumento da Outorga Onerosa do Direito de Construir (OODC) e, paralelamente, valorar ativos, terrenos transformáveis, que possam servir de fonte alternativa de recursos.</p>
			<p>Para isso são elaboradas simulações de empreendimentos imobiliários, nos terrenos assinalados passíveis de transformação imobiliária, de maneira a: i) prever as implantações possíveis de acordo com o ordenamento indicado (estudo de massa); e ii) simular o fluxo de caixa e calcular os indicadores financeiros dos empreendimentos-paradigma (estudo de viabilidade econômica e financeira). Assim, é possível calcular a receita prevista por meio da cobrança da OODC. E, mais que isso, calibrar a equação da outorga de acordo com a disponibilidade de pagamento dos empreendimentos, adequando o valor da OODC ao preço de venda e aos demais elementos de composição de custo.</p>
			<p>Na primeira seção, faz-se uma breve descrição do imóvel objeto do projeto de intervenção urbana e sua proposta preliminar de setorização, parcelamento e uso, com foco nos terrenos assinalados para transformação. Em seguida, é apresentada uma pesquisa descritiva dos lançamentos imobiliários no entorno do Jockey Club. Esse material serve de apoio à definição das premissas dos empreedimentos-paradigma, como uso, tipologia e preço praticado.</p>
			<p>Por último, são construídos dois cenários possíveis de desenvolvimento imobiliário de maneira a subsidiar a proposta final de ordenamento urbanístico. O primeiro toma como hipótese o estabelecimento exclusivo de empreendimentos comerciais nos lotes indicados com tipologias diversas, como andares livres, salas e lojas. O segundo considera a desenvolvimento de uma mescla de usos residenciais e comerciais.</p>
			<p>Em cada cenário calcula-se a receita potencial com a aplicação da OODC. Adicionalmente são precificados os terrenos passíveis de transformação, visando auxiliar a definição do modelo de propriedade e gestão do conjunto do hipódromo. Esses ativos, ao serem alienados para atividades imobiliárias, podem compor um arranjo financeiro visando reduzir o montante de dívidas que o Jockey Club de São Paulo possui com a Prefeitura, principalmente aquelas relacionadas à cobrança de IPTU.</p>

			<h3>PIU Jockey Club: potencial construtivo</h3>
			<p>Conforme explicado no Produto 06 (Proposta de Ordenamento Urbanístico), o PIU Jockey Club tem como escopo a regulação de uma ZOE (Zona de Ocupação Especial) incidente no local. Entre seus objetivos está: i) a intensificação de utilização dos equipamentos do hipódromo, que ocupam uma gleba de 600 mil metros quadrados e, atualmente, não apresentam a mesma atratividade que no passado, tornando o conjunto parcialmente ocioso; e ii) reduzir as dívidas do Jockey Club com a Prefeitura Municipal de São Paulo.</p>
			<p>Neste sentido, a gleba foi setorizada e algumas unidades selecionadas para o desenvolvimento de negócios imobiliários. A produção de imóveis servirá para a geração de renda que, em parte, será destinada ao financiamento das intervenções previstas (ver P06 - Proposta de Ordenamento Urbanístico), por meio do instrumento de OODC, e possibilitará a venda ou permuta dos terrenos assinalados, que ajudará na recomposição do modelo de propriedade e gestão do conjunto.</p>
			<p>De acordo com o Programa de Interesse Público, a gleba atual foi dividida em sete grandes setores: i) Eusébio Matoso, ii) Vila Hípica, iii) Lineu de Paula Machado, iv) Conjunto Histórico, v) Pistas de Corrida, vi) José Augusto de Queiroz e vii) Peão de Prado (ver Mapa abaixo).</p>
			<imagem
				:max-width="'550px'"
				:dados="{
				titulo: 'Proposta de Setorização para o conjunto do Jockey Club',
				tipo: 'mapa',
				url: src('arquivos/jockey-2/mapas/2.jpg'),
				legenda: [
					{ char: '1',  fundo: '#A793BD', descricao: 'Eusébio Matoso' },
					{ char: '2',  fundo: '#DCA2C3', descricao: 'Vila Hípica' },
					{ char: '3',  fundo: '#E5B455', descricao: 'Lineu de Paula Machado' },
					{ char: '4',  fundo: '#924F6C', descricao: 'Conjunto Histórico' },
					{ char: '5',  fundo: '#FEF571', descricao: 'Pistas de Corrida' },
					{ char: '6',  fundo: '#FC4850', descricao: 'José Augusto de Queiroz' },
					{ char: '7',  fundo: '#50B17E', descricao: 'Peão do Prado' }
				],
				fonte: 'Elaboração: SP-Urbanismo, 2020'
			}" />

			<p>Os setores indicados para o desenvolvimento imobiliário são: Eusébio Matoso (1), José Augusto de Queiroz (6) e Lineu de Paula Machado (3). Nos dois primeiros, pretende-se uma utilização mais intensa do território com coeficiente de aproveitamento quatro vezes o tamanho do terreno e gabarito máximo de 60 e 82 metros respectivamente. O setor Lineu de Paula Machado apresenta condições mais restritivas de desenvolvimento, com coeficiente de aproveitamento duas vezes o tamanho do terreno e gabarito máximo de 15 metros. Para fins de negócios imobiliários, pode-se considerar esse setor em dois lotes separados, em face da presença de uma unidade de preservação no meio da unidade. Os parâmetros concedidos a cada setor encontram-se na Tabela abaixo.</p>

			<tabela :dados="{
				titulo: 'Tabela: Ordenamento urbanístico - lotes transformáveis',
				colunas: [
					{ titulo: 'Resumo de áreas e projeto' },
					{ titulo: 'Eusébio Matoso' },
					{ titulo: 'José Augusto de Queiroz' },
					{ titulo: 'Lineu de Paula Machado 1' },
					{ titulo: 'Lineu de Paula Machado 2' },
					{ titulo: 'Total' }
				],
				linhas: [
					[
						[ { data: 'Área de terreno (m²)'} ],
						[ { data: '15.551'} ],
						[ { data: '27.376'} ],
						[ { data: '9.351'} ],
						[ { data: '20.311'} ],
						[ { data: '72.589'} ]
					],
					[
						[ { data: 'CA máx'} ],
						[ { data: '4,0'} ],
						[ { data: '4,0'} ],
						[ { data: '2,0'} ],
						[ { data: '2,0'} ],
						[ { data: ''} ],
					],
					[
						[ { data: 'Gab máx'} ],
						[ { data: '60'} ],
						[ { data: '82'} ],
						[ { data: '15'} ],
						[ { data: '15'} ],
						[ { data: ''} ]
					],
					[
						[ { data: 'TO máx'} ],
						[ { data: '70%'} ],
						[ { data: '70%'} ],
						[ { data: '70%'} ],
						[ { data: '70%'} ],
						[ { data: ''} ]
					],
					[
						[ { data: 'Uso'} ],
						[ { data: 'misto'} ],
						[ { data: 'misto'} ],
						[ { data: 'não residencial'} ],
						[ { data: 'não residencial'} ],
						[ { data: ''} ]
					],
					[
						[ { data: 'Área computável (m²)'} ],
						[ { data: '62.204'} ],
						[ { data: '109.504'} ],
						[ { data: '18.702'} ],
						[ { data: '40.622'} ],
						[ { data: '231.032'} ]
					],
					[
						[ { data: 'Potencial const. adicional (m²)'} ],
						[ { data: '46.653'} ],
						[ { data: '82.128'} ],
						[ { data: '9.351'} ],
						[ { data: '20.311'} ],
						[ { data: '158.443'} ]
					]
				],
				tabelaListrada: true
			}" />

			<p>Diante do tamanho dos lotes e do aproveitamento concedido, é possível a construção de 231 mil metros quadrados de área computável, o que equivale a cerca de 158 mil metros quadrados de potencial construtivo adicional. O novo ordenamento determina o uso estritamente não residencial no setor Lineu de Paula Machado com o objetivo de atender com comércio e serviços uma região preponderantemente residencial. Nos demais setores, concede-se o desenvolvimento de unidades mistas. No setor Eusébio Matoso, a proximidade com a linha 4 do metrô confere ao terreno vocação tanto para construção pequenos apartamentos residenciais, como salas comerciais. No setor José Augusto de Queiroz, entende-se que, dada a proximidade com a Avenida Cidade Jardim e o baixo Itaim Bibi, o terreno serve tanto ao desenvolvimento de plantas residenciais maiores, como também o investimento em lajes corporativas.</p>
			<p>O estudo vocacional dos terrenos é aprofundado na seção seguinte, com a definição do tamanho das plantas, do uso e dos preços de venda, de maneira a subsidiar a elaboração dos empreendimentos-paradigma na etapa final.</p>

			<h3>Estudo vocacional dos terrenos</h3>
			<p>Avaliando a produção imobiliária no entorno do PIU Jockey Club, é possível identificar quatro regiões em separado: Butantã, baixo Itaim Bibi, Morumbi e baixo Pinheiros. Para evitar a análise de tendências muito antigas, a pesquisa de lançamentos imobiliários foi circunscrita a dez anos, de 2008 a 2017. A utilização dos dados a partir de 2008 também se justifica pelo início da série FipeZap. A avaliação de preços intertemporalmente só é possível mediante a existência de um índice de correção setorial desse tipo.</p>

			<h3>Uso e tipologia</h3>
			<p>No período indicado, foram lançadas 4.957 unidades imobiliárias, sendo 2.069 de uso comercial e 2.888 de uso residencial. Isso demonstra um grande equilíbrio entre unidades residenciais (58%) e unidades comerciais (48%). No Butantã, região de referência primária para o estudo vocacional do setor Eusébio Matoso, prevaleceram unidades comerciais (95%). Já no baixo Itaim região de referência para o estudo vocacional do setor José Augusto de Queiroz, existe uma grande proporção de lançamentos de unidades residenciais (76%) (ver tabelas abaixo).</p>
			<!-- <p><img src="5.x-emf" /></p> -->

			<tabela :dados="{
				titulo: 'Tabela: Total de unidades lançadas por localização e uso, 2008 a 2017',
				colunas: [
					{ titulo: 'Localização' },
					{ titulo: 'Total' },
					{ titulo: 'Comercial' },
					{ titulo: 'Residencial' }
				],
				linhas: [
					[
						[ { data: 'Butanta'} ],
						[ { data: '288 '} ],
						[ { data: '274 '} ],
						[ { data: '14 '} ]
					],
					[
						[ { data: 'Itaim Bibi'} ],
						[ { data: '686 '} ],
						[ { data: '164 '} ],
						[ { data: '522 '} ]
					],
					[
						[ { data: 'Morumbi'} ],
						[ { data: '469 '} ],
						[ { data: '176 '} ],
						[ { data: '293 '} ]
					],
					[
						[ { data: 'Pinheiros'} ],
						[ { data: '3.514 '} ],
						[ { data: '1.455 '} ],
						[ { data: '2.059 '} ],
					],
					[
						[ { data: 'Total', destaque: true } ],
						[ { data: '4.957', destaque: true } ],
						[ { data: '2.069', destaque: true } ],
						[ { data: '2.888', destaque: true } ],
					]
				]
			}" />

			<!-- <p><img src="6.x-emf" /></p> -->
			<tabela :dados="{
				titulo: 'Tabela: Participação de unidades lançadas por localização e uso, 2008 a 2017 (%)',
				colunas: [
					{ titulo: 'Localização' },
					{ titulo: 'Total' },
					{ titulo: 'Comercial' },
					{ titulo: 'Residencial' }
				],
				linhas: [
					[
						[ { data: 'Butanta'} ],
						[ { data: '100'} ],
						[ { data: '95'} ],
						[ { data: '5'} ]
					],
					[
						[ { data: 'Itaim Bibi'} ],
						[ { data: '100'} ],
						[ { data: '24'} ],
						[ { data: '76'} ]
					],
					[
						[ { data: 'Morumbi'} ],
						[ { data: '100'} ],
						[ { data: '38'} ],
						[ { data: '62'} ]
					],
					[
						[ { data: 'Pinheiros'} ],
						[ { data: '100'} ],
						[ { data: '41'} ],
						[ { data: '59'} ]
					],
					[
						[ { data: 'Total', destaque: true} ],
						[ { data: '100', destaque: true} ],
						[ { data: '42', destaque: true} ],
						[ { data: '58', destaque: true} ]
					]
				]
			}"/>

			<p>Em relação à produção comercial, predomina o lançamento de salas sobre andares livres. Nos dez anos pesquisados, foram lançadas 1.904 salas, 92% do total, contra 165 andares livres (8%). A região do Itaim Bibi se diferencia desse padrão com o lançamento de 101 unidades de lajes corporativas, 62% do total da região.</p>

			<!-- <p><img src="7.x-emf" /></p> -->
			<tabela :dados="{
				titulo: 'Tabela: Total de unidades lançadas comerciais por localização e tipologia, 2008 a 2017',
				colunas: [
					{ titulo: 'Localização' },
					{ titulo: 'Total' },
					{ titulo: 'Comercial' },
					{ titulo: 'Residencial' }
				],
				linhas: [
					[
						[ { data: 'Butanta'} ],
						[ { data: '274'} ],
						[ { data: '4'} ],
						[ { data: '270'} ]
					],
					[
						[ { data: 'Itaim Bibi'} ],
						[ { data: '164'} ],
						[ { data: '101'} ],
						[ { data: '63'} ]
					],
					[
						[ { data: 'Morumbi'} ],
						[ { data: '176'} ],
						[ { data: ''} ],
						[ { data: '176'} ]
					],
					[
						[ { data: 'Pinheiros'} ],
						[ { data: '1.455'} ],
						[ { data: '60'} ],
						[ { data: '1.395'} ]
					],
					[
						[ { data: 'Total'} ],
						[ { data: '2.069'} ],
						[ { data: '165'} ],
						[ { data: '1.904'} ]
					]
				]
			}"/>

			<!-- <p><img src="8.x-emf" /></p> -->
			<tabela :dados="{
				titulo: 'Tabela: Participação de unidades lançadas comerciais por localização e tipologia, 2008 a 2017 (%)',
				colunas: [
					{ titulo: 'Localização' },
					{ titulo: 'Total' },
					{ titulo: 'Comercial' },
					{ titulo: 'Residencial' }
				],
				linhas: [
					[
						[ { data: 'Butanta'} ],
						[ { data: '100'} ],
						[ { data: '1'} ],
						[ { data: '99'} ],
					],
					[
						[ { data: 'Itaim Bibi'} ],
						[ { data: '100'} ],
						[ { data: '62'} ],
						[ { data: '38'} ],
					],
					[
						[ { data: 'Morumbi'} ],
						[ { data: '100'} ],
						[ { data: '-'} ],
						[ { data: '100'} ],
					],
					[
						[ { data: 'Pinheiros'} ],
						[ { data: '100'} ],
						[ { data: '4'} ],
						[ { data: '96'} ],
					],
					[
						[ { data: 'Total'} ],
						[ { data: '100'} ],
						[ { data: '8'} ],
						[ { data: '92'} ]
					]
				]
			}"/>

			<p>Em relação às unidades residenciais, prevaleceu o lançamento de plantas menores, de um ou dois dormitórios, equivalendo a 36 e 33% da produção no entorno do Jockey respectivamente. Esse resultado foi fortemente influenciado pelo comportamento do mercado no baixo Pinheiros, que serve de referência secundária para o perfil do setor Eusébio Matoso. Nessa região, foram lançadas 47% de unidades de um dormitório e 40% de unidades de dois dormitórios.</p>
			<!-- <p><img src="9.x-emf" /></p> -->
			<tabela :dados="{
				titulo: 'Tabela: Total de unidades lançadas residenciais por localização e tipologia, 2008 a 2017',
				colunas: [
					{ titulo: 'Localização' },
					{ titulo: 'Total' },
					{ titulo: '1' },
					{ titulo: '2' },
					{ titulo: '3' },
					{ titulo: '4 ou +' }
				],
				linhas: [
					[
						[ { data: 'Butanta' } ],
						[ { data: '14 ' } ],
						[ { data: '-' } ],
						[ { data: '-' } ],
						[ { data: '-' } ],
						[ { data: '14' } ],
					],
					[
						[ { data: 'Itaim Bibi' } ],
						[ { data: '522' } ],
						[ { data: '42' } ],
						[ { data: '39' } ],
						[ { data: '241' } ],
						[ { data: '200' } ],
					],
					[
						[ { data: 'Morumbi' } ],
						[ { data: '293' } ],
						[ { data: '20' } ],
						[ { data: '92' } ],
						[ { data: '137 ' } ],
						[ { data: '44 ' } ],
					],
					[
						[ { data: 'Pinheiros' } ],
						[ { data: '2.059 ' } ],
						[ { data: '976 ' } ],
						[ { data: '828 ' } ],
						[ { data: '125 ' } ],
						[ { data: '130 ' } ],
					],
					[
						[ { data: 'Total' } ],
						[ { data: '2.888' } ],
						[ { data: '1.038' } ],
						[ { data: '959' } ],
						[ { data: '503' } ],
						[ { data: '388' } ],
					]
				],
				tabelaListrada: false
			}" />

			<!-- <p><img src="10.x-emf" /></p> -->
			<tabela :dados="{
				titulo: 'Tabela: Total de unidades lançadas residenciais por localização e tipologia, 2008 a 2017',
				colunas: [
					{ titulo: 'Localização' },
					{ titulo: 'Total' },
					{ titulo: '1' },
					{ titulo: '2' },
					{ titulo: '3' },
					{ titulo: '4 ou +' }
				],
				linhas: [
					[
						[ { data: 'Butanta' } ],
						[ { data: '100 ' } ],
						[ { data: '-' } ],
						[ { data: '-' } ],
						[ { data: '-' } ],
						[ { data: '100 ' } ],
					],
					[
						[ { data: 'Itaim Bibi' } ],
						[ { data: '100 ' } ],
						[ { data: '8 ' } ],
						[ { data: '7 ' } ],
						[ { data: '46 ' } ],
						[ { data: '38 ' } ],
					],
					[
						[ { data: 'Morumbi' } ],
						[ { data: '100 ' } ],
						[ { data: '7 ' } ],
						[ { data: '31 ' } ],
						[ { data: '47 ' } ],
						[ { data: '15 ' } ],
					],
					[
						[ { data: 'Pinheiros' } ],
						[ { data: '100 ' } ],
						[ { data: '47 ' } ],
						[ { data: '40 ' } ],
						[ { data: '6 ' } ],
						[ { data: '6 ' } ],
					],
					[
						[ { data: 'Total' } ],
						[ { data: '100 ' } ],
						[ { data: '36 ' } ],
						[ { data: '33 ' } ],
						[ { data: '17 ' } ],
						[ { data: '13 ' } ],
					]
				],
				tabelaListrada: false
			}" />

			<p>No sentido contrário desta tendência, no setor Itaim Bibi e Morumbi dominaram unidades maiores de três ou quatro dormitórios. No Itaim foram produzidas 46 e 38% de unidades de três e quatro dormitórios e, no Morumbi, 47 e 15% respectivamente.</p>

			<h3>Preço</h3>
			<p>Os dados disponíveis de preços das unidades são baseados nas tabelas originais de venda. Geralmente, o preço de negociação é um pouco inferior à tabela de oferta. Nesse sentido, foram calculados os preços médios de tabela por região e tipologia, e sobre esses valores aplicado um fator de oferta que reduz o preço médio em 10%. Os resultados encontram-se nas tabelas abaixo.</p>
			<!-- <p><img src="11.x-emf" /></p> -->
			<tabela :dados="{
				titulo: 'Tabela: Preço médio de unidades lançadas comerciais por localização e tipologia, 2008 a 2017 (R$/m²)',
				colunas: [
					{ titulo: 'Localização' },
					{ titulo: 'Total' },
					{ titulo: 'Comercial' },
					{ titulo: 'Residencial' }
				],
				linhas: [
					[
						[ { data: 'Butanta'} ],
						[ { data: '14.655'} ],
						[ { data: '14.258'} ],
						[ { data: '14.721'} ]
					],
					[
						[ { data: 'Itaim Bibi'} ],
						[ { data: '27.073'} ],
						[ { data: '-'} ],
						[ { data: '27.073'} ]
					],
					[
						[ { data: 'Morumbi'} ],
						[ { data: '11.674'} ],
						[ { data: '-'} ],
						[ { data: '11.674'} ]
					],
					[
						[ { data: 'Pinheiros'} ],
						[ { data: '17.372'} ],
						[ { data: '-'} ],
						[ { data: '17.372'} ]
					]
				]
			}"/>

			<!-- <p><img src="12.x-emf" /></p> -->
			<tabela :dados="{
				titulo: 'Tabela: Preço médio de unidades lançadas residenciais por localização e tipologia, 2008 a 2017 (R$/m²)',
				colunas: [
					{ titulo: 'Localização' },
					{ titulo: 'Total' },
					{ titulo: '1' },
					{ titulo: '2' },
					{ titulo: '3' },
					{ titulo: '4 ou +' }
				],
				linhas: [
					[
						[ { data: 'Butanta' } ],
						[ { data: '11.780 ' } ],
						[ { data: '-   ' } ],
						[ { data: '-   ' } ],
						[ { data: '-   ' } ],
						[ { data: '11.780 ' } ]
					],
					[
						[ { data: 'Itaim Bibi' } ],
						[ { data: '23.642 ' } ],
						[ { data: '24.260 ' } ],
						[ { data: '24.267 ' } ],
						[ { data: '16.466 ' } ],
						[ { data: '29.278 ' } ]
					],
					[
						[ { data: 'Morumbi' } ],
						[ { data: '10.845 ' } ],
						[ { data: '12.123 ' } ],
						[ { data: '10.683 ' } ],
						[ { data: '10.334 ' } ],
						[ { data: '10.777 ' } ]
					],
					[
						[ { data: 'Pinheiros' } ],
						[ { data: '14.264 ' } ],
						[ { data: '15.718 ' } ],
						[ { data: '13.413 ' } ],
						[ { data: '11.535 ' } ],
						[ { data: '16.912 ' } ]
					]
				],
				tabelaListrada: false
			}" />

			<p>Como pode se observar, os preços mais elevados são praticados no baixo Itaim R$ 27 mil para o metro quadrado de unidades comerciais e R$ 24 mil para unidades residenciais. Em seguida, vem a região do baixo Pinheiros, R$ 17 mil e R$ 14 mil, Butantã, R$ 15 mil e R$ 12 mil, e Morumbi R$ 12 e R$ 11 mil respectivamente.</p>
			<p>Os preços dos imóveis residenciais variam conforme a tipologia e determinam um gráfico em forma de “U”, sendo as tipologias de um e quatro ou mais dormitórios as mais caras. Esse resultado é bastante usual. As plantas menores oferecem ao incorporador a estratégia de elevar o preço por metro quadrado, pois representa pouco impacto no preço total. Já as unidades de quatro ou mais dormitórios, embora extensivas em metragem, geralmente, localizam-se nos melhores pontos das regiões avaliadas e, assim, o ponto agrega valor ao produto.</p>

			<h3>Estudo de viabilidade</h3>
			<p>O estudo de viabilidade econômica e financeira de empreendimentos imobiliários é dividido em duas partes. Na primeira, o estudo de massa, são avaliadas implantações imobiliárias nos terrenos de acordo com o regramento urbanístico, resultando no cálculo do quadro de áreas de cada empreendimento. Na segunda parte, a análise financeira, essas áreas são precificadas e dispostas num fluxo de caixa como receitas e despesas.</p>
			<p>Esse exercício foi efetuado nos quatro terrenos assinalados para incorporação - Eusébio Matoso, Lineu de Paula Machado 1 e 2 e José Augusto de Queiroz – e em dois cenários distintos. No primeiro, considera-se um desenvolvimento imobiliário totalmente comercial. O estudo vocacional dos terrenos aponta uma forte inclinação comercial para os lotes assinalados. Acredita-se que seu desenvolvimento imobiliário pode seguir essa orientação, o que também forneceria o maior valor geral de vendas (VGV) e a maior arrecadação de OODC, em razão dos preços mais elevados dos produtos comerciais.</p>
			<p>O segundo cenário considera um desenvolvimento imobiliário de uso misto. No setor Lineu de Paula Machado, dada a orientação do ordenamento urbanístico e o interesse público, mantém-se o uso estritamente comercial. Mas nos demais setores são avaliadas implantações de empreendimentos residenciais com fachada ativa.</p>

			<h3>Cenário de uso comercial</h3>
			<p>No cenário de uso estritamente comercial, optou-se por avaliar a implantação de um empreendimento de salas no setor Eusébio Matoso, seguido de empreendimentos com andares livres com uma ou duas unidades por pavimento. Nos lotes com área computável superior a 20 mil metros quadrados, foi considerada a cota de solidariedade, o que aumenta o coeficiente de aproveitamento, bem como as despesas com a própria cota e com a compra de potencial construtivo adicional. Os resultados encontram-se na Tabela abaixo.</p>

			<!-- <p><img src="13.x-emf" /></p> -->
			<tabela :dados="{
				titulo: 'Tabela: Estudo de massa por terreno - cenário comercial',
				colunas: [
					{ titulo: 'Resumo de áreas e projeto' },
					{ titulo: 'Eusébio Matoso' },
					{ titulo: 'José Augusto de Queiroz' },
					{ titulo: 'Lineu de Paula Machado 1' },
					{ titulo: 'Lineu de Paula Machado 2' }
				],
				linhas: [
					[
						[ { data: 'Área (m²)' } ],
						[ { data: '15.551 ' } ],
						[ { data: '27.376 ' } ],
						[ { data: '9.351 ' } ],
						[ { data: '20.311 ' } ]
					],
					[
						[ { data: 'CA efetivo' } ],
						[ { data: '4,4 ' } ],
						[ { data: '4,4 ' } ],
						[ { data: '2,0 ' } ],
						[ { data: '2,2 ' } ],
					],
					[
						[ { data: 'Gab efetivo' } ],
						[ { data: '59 ' } ],
						[ { data: '82 ' } ],
						[ { data: '14 ' } ],
						[ { data: '14 ' } ],
					],
					[
						[ { data: 'Torres' } ],
						[ { data: '4 ' } ],
						[ { data: '4 ' } ],
						[ { data: '4 ' } ],
						[ { data: '8 ' } ],
					],
					[
						[ { data: 'TO - tipo' } ],
						[ { data: '27%' } ],
						[ { data: '21%' } ],
						[ { data: '50%' } ],
						[ { data: '58%' } ],
					],
					[
						[ { data: 'Tipologia' } ],
						[ { data: 'sala c/ fachada ativa ' } ],
						[ { data: 'andar livre c/ fachada ativa ' } ],
						[ { data: 'andar livre c/ fachada ativa ' } ],
						[ { data: 'andar livre c/ fachada ativa ' } ],
					],
					[
						[ { data: 'Planta' } ],
						[ { data: '74 ' } ],
						[ { data: '1.359 ' } ],
						[ { data: '558 ' } ],
						[ { data: '700 ' } ],
					],
					[
						[ { data: 'Unidades' } ],
						[ { data: '817 ' } ],
						[ { data: '85 ' } ],
						[ { data: '25 ' } ],
						[ { data: '49 ' } ],
					],
					[
						[ { data: 'Vagas' } ],
						[ { data: '816 ' } ],
						[ { data: '2.100 ' } ],
						[ { data: '384 ' } ],
						[ { data: '864 ' } ],
					]
				]
			}"/>

			<p>Como pode se observar, os coeficientes de aproveitamento foram obtidos, mesmo nos terrenos com severa restrição de gabarito. Nesses casos, a área computável foi atingida com o aumento da taxa de ocupação. Nos empreendimentos com área computável acima de 20 mil metros, foi acrescido o coeficiente de aproveitamento em 10% em função da cota solidariedade. O número de vagas de garagem foi calculado para atender as exigências legais, mas no setor José Augusto de Queiroz foram criadas 588 vagas adicionais para atender às necessidades do hipódromo.</p>
			<p>Analise financeira partiu da determinação dos preços de venda por metro quadrado das unidades. A partir de cada faixa de preço foi determinado o padrão construtivo de cada empreendimento. O preço do terreno também foi atrelado ao preço de venda. Na impossibilidade de execução de pesquisa de campo em tempo hábil, o preço considerado reflete uma fração do VGV – 20,0 e 22,5% nos empreendimentos com preço de venda de R$ 15 mil e 18 mil respectivamente. Os demais elementos de despesa foram definidos seguindo o padrão da indústria – outros custos de aquisição de terreno (3,3%), desenvolvimento (1,5%), despesas comerciais e marketing (6,5%), taxa de administração (4%), despesas financeiras (2%), impostos (4%).</p>
			<!-- <p><img src="14.x-emf" /></p> -->
			<table>
				<caption>Tabela: Estudo de massa por terreno - cenário comercial</caption>
				<thead>
					<tr>
						<th colspan="2">Demonstrativo financeiro - resumo</th>
						<th>Eusébio Matoso</th>
						<th>José Augusto de Queiroz</th>
						<th>Lineu de Paula Machado 1</th>
						<th>Lineu de Paula Machado 2</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody style="text-align: right">
					<tr>
						<td rowspan="2">VGV</td>
						<td> R$/m² </td>
						<td> 15.000 </td>
						<td> 18.000 </td>
						<td> 15.000 </td>
						<td> 15.000 </td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td> R$ </td>
						<td> 1.022.392.500 </td>
						<td> 2.354.112.000 </td>
						<td> 228.933.000 </td>
						<td> 564.933.000 </td>
						<td> 4.170.370.500 </td>
					</tr>
					<tr>
						<td rowspan="2">Terreno</td>
						<td> R$/m² </td>
						<td> 13.149 </td>
						<td> 19.348 </td>
						<td> 4.835 </td>
						<td> 5.563 </td>
						<td></td>
					</tr>
					<tr>
						<td> R$ </td>
						<td> 204.478.500 </td>
						<td> 529.675.200 </td>
						<td> 45.210.600 </td>
						<td> 112.986.600 </td>
						<td> 892.350.900 </td>
					</tr>
					<tr>
						<td rowspan="2">Outorga</td>
						<td>Fp</td>
						<td> 1,3 </td>
						<td> 1,3 </td>
						<td> 1,0 </td>
						<td> 1,0 </td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>R$</td>
						<td> 27.588.372 </td>
						<td> 48.614.928 </td>
						<td> 8.057.605 </td>
						<td> 19.372.273 </td>
						<td> 103.633.178 </td>
					</tr>
					<tr>
						<td>ML</td>
						<td>(%)</td>
						<td> 22,8 </td>
						<td> 22,9 </td>
						<td> 20,5 </td>
						<td> 21,4 </td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>TIR</td>
						<td>(%)</td>
						<td> 29,8 </td>
						<td> 30,6 </td>
						<td> 25,1 </td>
						<td> 27,4 </td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<p>De acordo com o estudo, todos os empreendimentos, no cenário de uso comercial, apresentam viabilidade econômica. Todos apresentam margem líquida e taxa interna de retorno (TIR) acima de 20%. A TIR foi bem influenciada positivamente pela premissa na modelagem de considerar o pagamento de 15% do valor terreno em dinheiro e o restante em permuta.</p>
			<p>Nesse cenário, o VGV total seria de R$ 4,2 bilhões, a venda ou permuta dos terrenos geraria um ganho de R$ 892 milhões e a receita de OODC chegaria a R$ 104 milhões. Para tanto os fatores de planejamento foram ajustados para 1,3 – o mesmo valor indicado no PDE/2014 para o uso comercial nessa localidade, à exceção dos empreendimentos no setor Lineu de Paula Machado, nos quais os resultados financeiros demonstraram a incapacidade de majoração dos fatores.</p>

			<h3>Cenário de uso misto</h3>
			<p>No cenário de uso misto, os empreendimentos comerciais nos setores Eusébio Matoso e José Augusto de Queiroz foram substituídos por empreendimentos residenciais. No primeiro, foi desenvolvido um estudo de massa para um residencial de dois dormitórios e uma vaga e no segundo uma planta generosa de 4 ou mais dormitórios. Os resultados de implantação referentes ao número de torres, gabarito e taxa de ocupação variam muito pouco. Por outro lado, a utilização de varandas acresceu a área privativa proporcionalmente a área computável. Assim, se o preço de venda de unidades residenciais é menor, a área privativa adicional compensa parcialmente o valor geral de vendas.</p>
			<!-- <p><img src="15.x-emf" /></p> -->

			<tabela :dados="{
				titulo: 'Tabela: Estudo de massa por terreno - cenário misto',
				colunas: [
					{ titulo: 'Resumo de áreas e projeto' },
					{ titulo: 'Eusébio Matoso' },
					{ titulo: 'José Augusto de Queiroz' },
					{ titulo: 'Lineu de Paula Machado 1' },
					{ titulo: 'Lineu de Paula Machado 2' }
				],
				linhas: [
					[
						[ { data:'Área (m²)'} ],
						[ { data:'15.551 '} ],
						[ { data:'27.376 '} ],
						[ { data:'9.351 '} ],
						[ { data:'20.311 '} ]
					],
					[
						[ { data:'CA efetivo'} ],
						[ { data:'4,4 '} ],
						[ { data:'4,4 '} ],
						[ { data:'2,0 '} ],
						[ { data:'2,2 '} ]
					],
					[
						[ { data:'Gab efetivo'} ],
						[ { data:'59 '} ],
						[ { data:'82 '} ],
						[ { data:'14 '} ],
						[ { data:'14 '} ]
					],
					[
						[ { data:'Torres'} ],
						[ { data:'4 '} ],
						[ { data:'4 '} ],
						[ { data:'4 '} ],
						[ { data:'8 '} ]
					],
					[
						[ { data:'TO - tipo'} ],
						[ { data:'26%'} ],
						[ { data:'21%'} ],
						[ { data:'50%'} ],
						[ { data:'58%'} ]
					],
					[
						[ { data:'Tipologia'} ],
						[ { data:'2 dorm c/ fachada ativa '} ],
						[ { data:'4 dorm c/ fachada ativa '} ],
						[ { data:'andar livre c/ fachada ativa '} ],
						[ { data:'andar livre c/ fachada ativa '} ]
					],
					[
						[ { data:'Planta'} ],
						[ { data:'74 '} ],
						[ { data:'336 '} ],
						[ { data:'558 '} ],
						[ { data:'700 '} ]
					],
					[
						[ { data:'Unidades'} ],
						[ { data:'913 '} ],
						[ { data:'385 '} ],
						[ { data:'25 '} ],
						[ { data:'49 '} ]
					],
					[
						[ { data:'Vagas'} ],
						[ { data:'912 '} ],
						[ { data:'1.536 '} ],
						[ { data:'384 '} ],
						[ { data:'864 '} ]
					]
				]
			}"/>
			<p>Neste cenário, todos os empreendimentos também apresentam viabilidade financeira. O VGV alcança R$ 3,8 bilhões, um pouco inferior ao cenário de uso comercial. O ganho com venda ou permuta dos terrenos atinge R$ 820 milhões, também um pouco inferior ao cenário anterior, bem como a arrecadação com OODC que chega a R$ 86 milhões. No caso de uso residencial o PDE/2014 aponta a utilização do fator de planejamento 0,7 nessa localidade. Como se trata de um projeto de intervenção urbana, com autonomia para definição de seus próprios fatores, entende-se que a aplicação do fator 1,0 é condizente com a disponibilidade financeira dos empreendimentos.</p>

			<table>
				<caption>Tabela: Estudo de viabilidade por terreno - cenário misto</caption>
				<thead>
					<tr>
						<th colspan="2">Demonstrativo financeiro - resumo</th>
						<th>Eusébio Matoso</th>
						<th>José Augusto de Queiroz</th>
						<th>Lineu de Paula Machado 1</th>
						<th>Lineu de Paula Machado 2</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody style="text-align: right">
					<tr>
						<td rowspan="2">VGV</td>
						<td> R$/m² </td>
						<td>12.000</td>
						<td>15.000</td>
						<td>15.000</td>
						<td>15.000</td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td> R$ </td>
						<td>856.509.000</td>
						<td>2.181.744.000</td>
						<td>228.933.000</td>
						<td>564.933.000</td>
						<td>3.832.119.000</td>
					</tr>
					<tr>
						<td rowspan="2">Terreno</td>
						<td> R$/m² </td>
						<td>11.015</td>
						<td>17.931</td>
						<td>4.835</td>
						<td>5.563</td>
						<td></td>
					</tr>
					<tr>
						<td> R$ </td>
						<td>171.301.800</td>
						<td>490.892.400</td>
						<td>45.210.600</td>
						<td>112.986.600</td>
						<td>820.391.400</td>
					</tr>
					<tr>
						<td rowspan="2">Outorga</td>
						<td>Fp</td>
						<td>1,0</td>
						<td>1,0</td>
						<td>1,0</td>
						<td>1,0</td>
						<td></td>
					</tr>
					<tr>
						<td>R$</td>
						<td>21.222.358</td>
						<td>37.394.161</td>
						<td>8.057.605</td>
						<td>19.372.273</td>
						<td>86.046.397</td>
					</tr>
					<tr>
						<td>ML</td>
						<td>(%)</td>
						<td>21,1</td>
						<td>23,7</td>
						<td>20,5</td>
						<td>21,4</td>
						<td></td>
					</tr>
					<tr>
						<td>TIR</td>
						<td>(%)</td>
						<td>26,6</td>
						<td>32,7</td>
						<td>25,1</td>
						<td>27,4</td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<h3>Considerações finais</h3>
			<p>A localização do Jockey Club apresenta grande atratividade execução de negócios imobiliários. A destinação de parte de sua gleba para esta finalidade permitiria a geração de receita considerável para a execução das intervenções publicas, bem como para o abatimento da dívida da instituição com a Prefeitura Municipal de São Paulo.</p>
			<p>A região tem forte vocação comercial, mas também se pode considerar o ordenamento para fins residenciais. A implantação estritamente comercial geraria uma arrecadação com OODC em torno de R$ 18 milhões superior àquela de uso misto. Dada a atratividade do mercado, a velocidade de vendas não deve prejudicar os resultados financeiros no caso da escolha por empreendimento comerciais.</p>
			<p>Em face do sucesso recente da Operação Urbana Faria Lima, nos quais os certificados de potencial adicional de construção (CEPACs) foram negociados com ágio superior a 169%, novos estudos podem ser executados para avaliar a sensibilidade dos indicadores financeiros dos empreendimentos ao aumento dos fatores de planejamento, com o objetivo de equalizar os ganhos privados com os ganhos públicos do PIU Jockey Club.</p>
			<Comments :attr="{ id: commentId(), context:'Modelagem econômica' }" v-if="consultaAtiva"></Comments>
		</section>

		<section>
			<h2 class="titulo" indent="1">Ficha técnica</h2>
			<p>
				<b>José Armênio de Brito Cruz</b><br>
				Presidência da São Paulo Urbanismo
			</p>
			<p>
				<b>Leonardo Amaral Castro</b><br>
				Diretoria de Desenvolvimento
			</p>
			<p>
				<b>Marcelo Fonseca Ignatios</b><br>
				Superintendência de Estruturação de Projetos
			</p>
			<p>
				<b>Modelagem Econômica</b><br>
				Bruno Martins Hermann<br>
				Allan Martino Matos<br>
			</p>
			<p>
				<b>Modelagem Urbanística</b><br>
				Adriano Meiken Morelli (estagiário)<br>
				Allan Martino Matos  (desenvolvimento)<br>
				Danilo Bocchini Rodrigues Alves<br>
				Eduardo Tavares de Carvalho<br>
				Fernando Henrique Gasperini (Coordenação)<br>
				Mayara Rodrigues de Alcântara (estagiária)<br>
			</p>
			<p>
				<b>Estimativa de custos</b><br>
				Maria Cristina Fernandes<br>
			</p>
			<p>
				<b>Modelagem Jurídica</b><br>
				Daniel Wasem Quesada<br>
				Marília Formoso Camargo<br>
				Thaís Fernanda Lopes<br>
			</p>
			<p>
				<b>Participação Social</b><br>
				Francila Natalia dos Santos<br>
				Maria Fernanda Willy Fabro<br>
				Patricia Saran<br>
				Paulo de Moraes Junior<br>
				Tais Sertorio Milanez<br>
				Patricia Saran<br>
				Daniela Tunes Zilio
			</p>
			<p>
				<b>Desenvolvimento web</b><br>
				Davi Masayuki Hosogiri (estágio)<br>
				Thomas Len Yuba
			</p>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && consultaAtiva" :attr="{ id:commentId(), context:'Comentarios' }"></Comments>
		</section>

	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import Imagem from '@/components/Imagem'
import Tabela from '@/components/Tabela'

export default {
	name: 'JockeyClub2',
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
		Indice,
		Apoio,
		Imagem,
		Tabela
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

.notas {
	font-family: $grotesca;
	font-size: small;
	padding: 0
}
</style>
