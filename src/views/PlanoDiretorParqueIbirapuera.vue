<template>
	<div class="PoliticaMunicipalTurismo" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/pdp-ibirapuera_480w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>MINUTA DO PLANO DIRETOR DO PARQUE IBIRAPUERA</div></template>
			<template slot="subtitulo"><div>Processo Participativo</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<section>
			<Comments :attr="{id:commentId(true), context:'GERAL'}" v-if="estaConsulta.ativo == 1"></Comments>
			<!-- Comentario anterior ao inicio do conteúdo-->
			<!-- O objetivo é ter a função de comentar/contribuir por tag <h2 class="titulo" indent="2">-->

			<h1 class="titulo" indent="1">CADERNO I</h1>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">1. APRESENTAÇÃO</h2>
			<CommentsContext :id="1001" :context="'A revisão da Operação Urbana Centro e o PIU Setor Central'">
			<p>O presente Plano Diretor, ainda em fase de minuta, tem como objetivo estabelecer as diretrizes para o Parque Ibirapuera pelos próximos 10 (dez) anos sob a perspectiva de uma Concessão Pública de prestação de serviços de 35 (trinta e cinco) anos.</p>
			</CommentsContext>
			<p>Embora já existam três planos diretores, que orientam as atividades e diretrizes para o Parque Ibirapuera, (sendo o último datado de 2007),  a Prefeitura Municipal de São Paulo a partir de 2017, estabeleceu como uma de suas metas a Concessão dos Parques Municipais, que vem sendo executado desde 2017. O Parque Ibirapuera, junto com outros cinco parques localizados em Pirituba, Vila Maria, Guaianases e Campo Limpo, compõe o 1° Lote da concessão. Foram superadas todas as etapas legais do processo, desde a aprovação da Lei 16.703/172 até a realização do certame licitatório.</p>
			<p>Entretanto, o surgimento de contestação por parte da população preocupada com o futuro do Parque culminou em uma exigência por meio da Promotoria de Justiça do Meio Ambiente da Capital do Ministério Público do Estado de São Paulo1, para que fosse elaborado um novo Plano Diretor para o Parque Ibirapuera antes da assinatura do contrato entre a Prefeitura e a Concessionária.</p>
			<p>Em que pese o vínculo à Ação do Ministério Público, este documento não tem o objetivo de tratar do contrato da concessão e sim, elaborar um novo, a partir do Plano anterior, a fim de estabelecer as diretrizes para ações, usos e cuidados com o Parque mantendo seu importante papel como equipamento público de preservação ambiental, cultural e de lazer para a população.</p>
			<p>Até o momento, a construção deste novo Plano Diretor do Parque Ibirapuera foi um trabalho colaborativo e participativo, coordenado pela Secretaria Municipal do Verde e do Meio Ambiente – SVMA. </p>
			<p>Com o objetivo de alcançar melhores resultados, a SVMA consolidou um Grupo de Trabalho dedicado à elaboração do Plano Diretor, envolvendo corpo técnico especializado.</p>
			<p>O Grupo de Trabalho, instituído por meio da Portaria Intersecretarial nº 001/SVMA/SGM/2019 (alterada pela Portaria Intersecretarial nº 002/SVMA/SGM/2019), teve papel fundamental na discussão dos produtos que se materializaram no Plano Diretor. Para firmar o trabalho e a metodologia utilizada, os integrantes do Grupo de Trabalho realizaram diversas reuniões, com intensa troca de material, conteúdo e experiências. Além dos técnicos envolvidos diretamente no processo indicados na Portaria, participaram outros tantos ao longo do desenvolvimento dos trabalhos.</p>
			<p>Como proposta da própria metodologia adotada, a participação da população foi fundamental para o trabalho apresentado neste documento. Foram realizados encontros e oficinas temáticas, abertos aos cidadãos, como meio de divulgação e coleta de dados para embasamento do Plano Diretor do Parque Ibirapuera. </p>
			<p>Além das oficinas, outras contribuições da população comporão a elaboração do Plano: esta consulta pública da Minuta , audiências públicas, pesquisas com frequentadores, conselheiros e administrador do parque e fóruns temáticos com especialistas, farão parte deste processo participativo.</p>
			<p>Destaca-se também a participação efetiva do Conselho Gestor3 do Parque Ibirapuera ao longo deste processo, que se reuniu diversas vezes para discutir questões voltadas à concessão e ao plano diretor, contribuindo fortemente para que fosse elaborado um documento que atendesse às expectativas dos usuários.</p>
			<p>O Plano está estruturado em dois cadernos, sendo, o primeiro de caráter teórico e esclarecedor do processo de elaboração, bem como as perspectivas colocadas ao Parque. E o segundo, mais propositivo expondo as diretrizes, objetivos e metas.</p>
			<p>Por fim, importante salientar que o documento está balizado em princípios essenciais à garantia de que o Parque Ibirapuera permaneça sendo o parque que a população se orgulha, garantindo sua preservação ambiental, bem como da sua paisagem; a preservação do parque como patrimônio; e o caráter público, universal e diverso.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>1.1	Equipe Técnica e Entidades Colaboradoras</h3>
			<p>Sob a Coordenação da SVMA, os trabalhos para elaboração do plano contaram com a participação de técnicos de diversas áreas da Secretaria, bem como com o apoio da SP Parcerias.</p>
			<p>
				<b>Coordenação Geral: Secretaria Municipal do Verde e do Meio Ambiente</b>
				<ul>
					<li>Arquiteta e Urbanista Tamires Carla de Oliveira</li>
					<li>Arquiteta e Urbanista Isabella Maria Davenis Armentano</li>
					<li>Engenheiro Agrônomo Heraldo Guiaro</li>
					<li>Sociólogo Hugo Calixto</li>
					<li>Bióloga Juliana Laurito Summa</li>
					<li>Bióloga Brigida Gomes Fries</li>
					<li>Bióloga Anelisa Ferreira de Almeida Magalhães</li>
					<li>Bióloga Letícia Bolian Zimback</li>
					<li>Bióloga Leila Weiss de Almeida Pedrosa</li>
					<li>Bióloga Edna Maria Gomes Cavalcante</li>
					<li>Bióloga Sylvia Maria Matsuda</li>
					<li>Médico Veterinário Marcello Schiavo Nardi</li>
					<li>Biólogo Ricardo Garcia Francischetti</li>
					<li>Biólogo Eduardo Hortal Pereira Barreto</li>
					<li>Biólogo Ricardo Tameirão Pinto Junior</li>
					<li>Bióloga Sumiko Honda</li>
					<li>Engenheira Florestal Luara Granato</li>
					<li>Engenheiro Florestal Felipe Frascareli Pascalicchio</li>
					<li>Bióloga Simone Justamante de Sordi</li>
					<li>Sociólogo André Luis Moura de Alcântara</li>
					<li>Cientista Ambiental Pamela Macedo da Silva</li>
					<li>Relações Internacionais Fernanda Luchiari de Lima</li>
				</ul>
			</p>
			<p>
				<b>Apoio Técnico: São Paulo Parcerias</b>
				<ul>
					<li>Arquiteto e Urbanista André Lucas de Medeiros França</li>
					<li>Administrador de empresas Cainã Aminon de Medeiros</li>
					<li>Arquiteta e Urbanista Caroline de Figueiredo Bertoldi Silveira</li>
					<li>Arquiteta e Urbanista Cássia Mariano</li>
					<li>Geógrafo Danilo Macedo de Oliveira</li>
					<li>Arquiteta e Urbanista Fabiola Mamede Vital Trindade</li>
					<li>Arquiteto e Urbanista Felipe Rodrigues Proença</li>
					<li>Advogado Gabriel Cherubin de Almeida</li>
					<li>Arquiteta e Urbanista Karina Dominici Alves</li>
					<li>Advogada Maria Stella Navarro Coimbra</li>
					<li>Advogada Nara Carolina Merlotto</li>
					<li>Biólogo Rafael de Carvalho Sposito</li>
					<li>Economista Rogério Ceron de Oliveira</li>
					<li>Engenheira Civil Soraya Aparecida Fernandes Gomes Vallilo</li>
				</ul>
			</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1.1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>1.2 Conceito de faseamento adotado</h3>
			<p>O Plano Diretor do Parque Ibirapuera é composto por documentos interagentes denominados CADERNO 1 e CADERNO 2.</p>
			<p>O Caderno 1 apresenta a Fundamentação Conceitual e a metodologia adotada. Constitui-se, sinteticamente de Apresentação, Equipe técnica envolvida e entidades colaboradoras na produção do Plano; Fundamentação conceitual com o conceito de Plano Diretor de Parque Urbano e o Faseamento Adotado explicando os critérios a compor as Ações de Projeto e as Visões de Futuro; Aspectos Históricos; Inserção Urbana do parque; e Conceito da Setorização do Parque, explicando conceitualmente a subdivisão do espaço do parque em zonas para diagnosticar as singularidades, as potencialidades, as fragilidades e os conflitos de uso.  A implantação do Plano Diretor deve seguir o faseamento contido nas Visões de Futuro. O produto da aplicação da metodologia é o primeiro item a compor o Caderno 2.</p>
			<p>O Caderno 2 refere-se à aplicação da metodologia e à construção do Plano Diretor. Apresenta a tabulação e os produtos do Processo Participativo, composto pelas Oficinas cujos objetivos são a identificação de lugares e espaços do parque retidos na memória dos usuários, os lugares e espaços de forte sentido de identidade ou de pertencimento e as perspectivas emblemáticas do parque e do perfil da cidade a partir do parque.</p>
			<p>O Plano Diretor do Parque Ibirapuera adotará às Diretrizes de Projeto contidas no CADERNO 2 e desenvolvidas a partir da Matriz de Compatibilidade de Uso como Ações de Projeto e Visões de Futuro.</p>
			<p>As Ações de Projeto correspondem às intervenções cujo tempo de desenvolvimento seja de até 1 ano para sua implementação ou efetivação.</p>
			<p>Denominam-se Visões de Futuro as intervenções e os projetos que necessitam de período maior para a sua implementação.  Neste caso, e para priorizar os trabalhos, será adotado a denominação de Curto Prazo para as intervenções que necessitam de até 2 anos para a efetivação; Médio Prazo para as intervenções que necessitam de até 5 anos para a efetivação; Longo Prazo para as intervenções que necessitam de até 10 anos.</p>
			<p>Propõe se que após 10 anos, ou seja, em 2029 o Plano Diretor do Parque Ibirapuera deva ser revisado para corresponder às atualizações da dinâmica do tempo sobre o espaço como maneira de atender aos usuários e ao cumprimento da função social de espaço público de uso ambiental, cultural, e de lazer.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1.2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>1.3	Metodologia Utilizada e Processo Participativo</h3>
			<p>O Plano Diretor Participativo do Parque Ibirapuera está construído a partir de uma metodologia que analisa determinado contexto ou realidade pela experimentação ou vivência podendo haver a incorporação de dados, para o estabelecimento do diagnóstico e das diretrizes de ação.</p>
			<p>Utiliza o compêndio de material produzido pelos órgãos institucionais e gestores do Parque no decorrer das últimas seis décadas, a produção e compilação de dados de campo, análises digitais e do produto de fóruns e de oficinas temáticas participativas. Este processo é denominado Leitura Empírica, e foi utilizado para a consolidação do material justificativo dos Diagnósticos Temáticos.</p>
			<p>O Diagnóstico Temático utiliza como recurso a subdivisão do espaço do parque em subzonas e em subespaços para diagnosticar, cada um, pela sua singularidade física, espacial e de uso, de maneira a consubstanciar as potencialidades, as fragilidades e os conflitos em quatro gradientes de intensidade. Este Diagnóstico conduz à constituição da Matriz de Compatibilidade de Uso na qual as características físicas serão confrontadas com os usos fundamentais do parque para orientar as Diretrizes, oportunizando Ações de Projeto e Visões de Futuro, considerando o curto, médio e longo prazo.</p>
			<p>A metodologia proposta utiliza, com adaptação à especificidade deste plano, a Metodologia de Planejamento da Paisagem desenvolvida por Ian McHarg, publicada em <i>Design with Nature</i><a title='A teoria consiste na apresentação dos processos naturais como determinantes do uso do solo. Utiliza sobreposição de mapas temáticos de recursos naturais e de cultura humana, para produzir mapas de compatibilidade intrínseca e mapas de compatibilidade combinada. Esta teoria é base para o desenho ambiental, para políticas ambientalistas, e fundamentou a Legislação Ambiental no Brasil. McHarg, na verdade, revolucionou a teoria e prática da Arquitetura da Paisagem ao inaugurar um sistema de análise e de planejamento de território pautado na premissa que a natureza é um processo de carácter cíclico e há categorias de ocupações que comportam simultaneidade de uso, respeitando-se as singularidades e as limitações inerentes. O ambiente social e o ambiente natural passaram a ser entendidos como sistemas inter-relacionados.' style='cursor: help;'><sup>4</sup></a>. Por esta metodologia os fenômenos naturais são processos dinâmicos inter-relacionados que representam valores e oferecem oportunidades e limitações para a utilização. McHarg capitula ao afirmar que o território precisa ser compreendido para ter sua vocação bem manejada.</p>
			<p>Na metodologia adaptada para o Parque Ibirapuera os fenômenos naturais são interpretados como as Bases Naturais do Parque e foram mapeadas para corroborar os dados compilados da Leitura Empírica. As Bases, por sua vez, procedem ao Levantamento e à Interpretação de cinco elementos: Água, Solo, Vegetação e Fauna. Estes mapeamentos visam identificar cada um dos elementos na caracterização e na condição atuais.</p>
			<p>As oportunidades e as limitações para utilização serão analisadas e interpretadas por meio dos Usos Fundamentais do Parque. Identificam-se quatro classes de uso, apresentados por sua hierarquia de relevância: Uso Ambiental, Uso Cultural, Uso Educacional, Uso de Lazer Recreativo (lazer ativo e ócio) e Lazer Esportivo.</p>
			<p>A análise combinada e confrontada entre as Bases Naturais do Parque e os Usos Fundamentais do Parque está na constituição da Matriz de Compatibilidade de Uso. A Matriz permite propiciar multiplicidade de uso do subespaço se cada um for comparado a outro uso tendo as Bases Naturais do Parque como elemento de interpretação do território. Os gradientes de uso a serem analisados são: plena compatibilidade, média compatibilidade, pouca compatibilidade e uso incompatível. Este cruzamento permite justificar e dar subsídio as Diretrizes de Projeto somadas à realidade já conhecida do parque.</p>
			<p>A metodologia permite a partir de mapeamentos e da interpretação de matrizes correspondentes proceder a caracterização atual do parque, a composição de normas para regramento e normatização e estabelecer políticas de manutenção e de gerenciamento.</p>
			<p>O Processo Participativo foi iniciado por meio de Oficinas de Trabalho. Versaram sobre o Projeto Paisagístico e Arquitetônico abrangendo o Zoneamento de Usos e as Apropriações; Gestão Ambiental; Serviços Ambientais. Sempre com apresentações teóricas e leituras técnicas, as oficinas abertas de trabalho cujos temas estiveram respaldados em metodologia para identificação espaços que possuem significância, sensação de pertencimento e de identidade espacial dos usuários.</p>
			<p>A metodologia de apoio às oficinas adaptou, para a efetivação, bibliografia específica para leitura e interpretação de paisagem e para identificação de elementos referenciais no espaço livre. Os autores são: Kevin Lynch, Gordon Cullen e Lawrence Halprin.</p>
			<p>Compõe o processo participativo as oficinas já realizadas no mês de julho e outros mecanismos de participação que determinarão uma revisão deste documento ao final do processo, sendo: consulta pública, pesquisa com frequentadores, conselheiros e administrador, audiências públicas e fóruns temáticos com especialistas.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1.2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>1.4	Fundamentação Conceitual. O Conceito de Plano Diretor de Parque Urbano</h3>
			<p>Instrumento de planejamento, o Plano Diretor visa orientar ações futuras, pautadas em análises situacionais para a elaboração de diagnósticos, visualizando se alcançar a melhoria de um objeto específico, ou seja, a estruturação do conteúdo dos planos está vinculada aos princípios fundamentais da atividade de leitura e análise, diagnóstico e planejamento estabelecendo objetivos e diretrizes de ação. Frequentemente o procedimento de elaboração de Plano Diretor está inserido em um universo mais amplo, como o do Planejamento Estratégico.</p>
			<p>As experiências internacionais de Plano Diretor de Parque Urbano configuram, frequentemente, para instrumento de gestão denominado <i>Masterplan</i>. Este documento reporta de maneira gráfica e descritiva o Parque a partir de análises físico-ambiental e de uso. Os objetivos específicos de cada Plano Diretor variam de acordo com a situação de cada parque. Na bibliografia consultada, há documentos mais próximos de guias, outros cujo escopo é amplo nos quais são abordadas questões financeiras e orçamentárias, como captação de recursos e estabelecimento de concessões e de parcerias com agentes privados.</p>
			<p>As experiências nacionais de elaboração de Plano Diretor de Parque Urbano são limitadas. No Brasil, são recorrentes os Planos de Manejo, restritos às Unidades de Conservação (UC), cujo objetivo reflete-se na compreensão e na elaboração das ações necessárias para a gestão e o uso sustentável dos recursos naturais na Unidade e no entorno, e para conciliar os diferentes usos com a conservação da biodiversidade<a href='http://www.icmbio.gov.br/portal/unidadesdeconservacao' title='http://www.icmbio.gov.br/portal/unidadesdeconservacao, acesso em 01/07/2019.' style='cursor: help;'><sup>5</sup></a>.A Lei Federal Nº 9.985/2000 estabelece que o Sistema Nacional de Unidades de Conservação (SNUC) deve definir o Plano de Manejo como um documento técnico mediante o qual, com fundamento nos objetivos de gerais da Unidade de Conservação, se estabeleça o zoneamento e as normas que devem presidir o uso da área e o manejo dos recursos naturais.</p>
			<p>O Parque da Cidade de São José dos Campos, Roberto Burle Marx, teve Plano Diretor elaborado em 2016. Este Plano contempla diagnóstico histórico, ambiental e educacional estabelecendo diretrizes e ações para articular o uso público, o manejo, e o patrimônio arquitetônico e paisagístico da antiga fazenda da família Olivo Gomes, proprietário da Tecelagem Parahyba; a sede foi projetada por pelo Arquiteto Rino Levi e os jardins foram projetados pelo Paisagista Roberto Burle Marx para residência da família. Ambos, arquitetura e jardins já eram tombados pelos órgãos patrimoniais do município. A propriedade foi declarada de utilidade pública e desapropriada em 1996, mesma data em que foi aberta ao público, como parque urbano. Este Plano Diretor teve na preservação do patrimônio histórico, arquitetônico e paisagístico, e na apropriação de uso recreativo e de uso educacional, como esportes, lazer, artes e entretenimento o estabelecimento de ações utilizando a setorizando de subespaços para as etapas de diagnóstico e das diretrizes.</p>
			<p>O Parque Municipal de Eventos de Veranópolis, no Rio Grande do Sul, elaborou Plano Diretor em 2015 com o objetivo de definir um zoneamento para o parque abrangendo as etapas de Diagnóstico e Zoneamento Preliminar para a constituição do Plano Diretor. Principia pela leitura da realidade para a compreensão dos problemas e das potencialidades, abrangendo o contexto histórico de formação e urbanístico de contextualização do parque. A caracterização identificou vias, setores e ambientes de uso cultural e social, concluindo com as demandas em termos de serviços e infraestruturas existentes e a serem implementadas. O Diagnóstico identificou enorme potencial de desenvolvimento de atividades culturais regionais ligadas ao Centro de Tradições Gaúchas (CTG). A Diretriz do Plano propõe zoneamento setorizado para atender essas demandas e para dotação das infraestruturas e estruturas necessárias.</p>
			<p>Nesse sentido, a partir de experiências como essas, entende-se que o Plano Diretor de Parque Urbano deve considerar o caráter ambiental e o caráter social do espaço público, estabelecendo diretrizes planejadas que contribuam para o ordenamento, para a manutenção e na adequação aos usos sociais. É, portanto, um instrumento de governança, entendida como o conjunto de mecanismos de liderança, de estratégia e de controle postos em prática para avaliar, direcionar e monitorar a gestão, com vistas à condução de políticas públicas e à prestação de serviços de interesse da sociedade.</p>
			<p>A Preservação do patrimônio paisagístico, arquitetônico e histórico deve integrar todo o planejamento e as suas ações. Além da ideia da preservação do patrimônio do Parque, devem-se promover as possibilidades de educação histórica, paisagística e arquitetônica, e as possibilidades de educação ambiental e de lazer.</p>
			<p>Ante o exposto concluímos que:</p>
			<p>Plano Diretor de Parque Urbano é o instrumento de governança que consolida o conjunto de mecanismos, estratégias e controles a serem postos em prática, considerando o caráter socioambiental do espaço público, o patrimônio paisagístico, arquitetônico e histórico, para orientar ações futuras, avaliar, direcionar e monitorar a gestão do parque, estabelecendo diretrizes planejadas que contribuam para o ordenamento, para a manutenção e na adequação aos usos sociais.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1.3'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">2. ASPECTOS HISTÓRICOS</h2>
			<CommentsContext :id="commentId()" :context="'2. ASPECTOS HISTÓRICOS'">
			<p>Apesar de o jardim existir na história desde a Revolução Agrícola (12.000 anos atrás) como aprimoramento estético máximo das práticas de cultivo e de irrigação, o parque como espaço público foi criado na Inglaterra apenas no século XIX, a partir da abertura dos Jardins e Parques pertencentes à Coroa Britânica para a população em uma política consistente de atendimento a reivindicações sociais e de fomento das condições higiênicas.</p>
			</CommentsContext>
			<p>O parque urbano é conceitualmente considerado um fragmento da natureza idealizada, melhorada e trasladada para a cidade. O parque público é uma tipologia de espaço urbano institucionalizado, porção de natureza criada cujo desenho corresponde frequentemente a vanguarda da criatividade humana sobre a paisagem como espaços projetados e construídos para a recreação (lazer), para a recriação (ócio) e com predomínio de elementos naturais da paisagem: luz, ar, vegetação, água, terra. </p>
			<p>“Uma grande extensão de área livre de uso público inserida na cidade para o gozo da paisagem” é a definição de parque urbano atribuída por Frederick Law Olmsted em 1870. Esta concepção, decorrente de valores culturais conferidos à natureza repercutiram fortemente no desenho dos parques públicos urbanos ao longo da história. </p>
			<p>Os parques públicos, originalmente, foram desenhados oferecendo os elementos que os cidadãos poderiam desejar: percursos sinuosos, lugares campestres, água em lagos plácidos de formas sinuosas, extensos campos relvados, árvores em maciços ou em conjunto, a exemplo da própria natureza. Na verdade, o parque urbano passou a ser o único lugar de proporções suficientes na cidade aonde se poderia reproduzir um jardim como imitação da natureza. Neste espaço foram historicamente introduzidas instalações para receber grande quantidade de pessoas para usos associados à cultura, à recreação, ao lazer e às práticas esportivas.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>2.1 O Parque Ibirapuera</h3>
			<p>A estrutura urbana de São Paulo acomodou-se em um sítio com características peculiares de hidrografia e relevo, e de rica paisagem. O chamado Espigão Central, em cujo topo se encontra a Avenida Paulista, alongado e estreito divisor de águas entre as bacias dos rios Tietê e Pinheiros, configura uma extensa plataforma interfluvial aplainada. Para sul e sudoeste o sítio se caracteriza por vertentes abruptas e compartimentos aplainados de colinas baixas e baixos terraços, confluindo para as amplas várzeas do rio Pinheiros e rio Tietê. </p>
			<p>Sob o aspecto ambiental, a reserva do Parque Ibirapuera foi fundamental por preservar sítio de notável fragilidade ambiental de qualquer outra forma de ocupação. Na verdade, é a maior extensão de área livre no quadrante sudoeste da cidade de São Paulo.</p>
			<figure title="Figura 1 - Fragmento da Planta Sara Brasil, 1930. Fonte: Geosampa" class="coluna">
				<img :src="fileSrc('1fig01.jpg')" alt="Figura 1 - Fragmento da Planta Sara Brasil, 1930. Fonte: Geosampa" style="height: auto; width: 100%;">
				<figcaption>Figura 1 - Fragmento da Planta Sara Brasil, 1930. Fonte: Geosampa</figcaption>
			</figure>
			<p>A várzea do Ibirapuera era área charcosa e alagadiça em bacia de fundo de vale, formada pelos córregos Sapateiro, Caguaçú e Uberaba que foi incorporada ao patrimônio municipal em 1916. Esses terrenos devolutos situados na Várzea do Ibirapuera se constituíram em parque público pelo Decreto Estadual nº 2.669 de 17/05/1916. No relatório datado de 27/10/1918 apresentado à Câmara Municipal há referência à incorporação de 202,35ha ao Patrimônio Municipal, sendo 164,13ha na várzea do Ibirapuera e 38,22ha a esquerda da Avenida Conselheiro Rodrigues Alves.</p>
			<p>Em 1927, o Prefeito Pires do Rio ao apresentar seu Relatório à Câmara Municipal de São Paulo, acentuou a necessidade urgente da implantação de um maior número de áreas verdes na cidade para o desfrute da população. Lembrava que nas vizinhanças de Vila Mariana havia uma vasta extensão de terreno público vazio de construções, <i>“situada na planície que começa no sopé da Colina da Avenida Paulista, entre o fim da Avenida Brigadeiro Luiz Antônio, a Estrada de Santo Amaro, o Córrego de Uberaba, a cuja margem esquerda fica Indianópolis, limitados por Vila Mariana e Vila Clementino”. Pires do Rio afirmava “Impunha-se à iniciativa de um vasto parque, útil a higiene da população urbana”. E acrescentava: “Tais terrenos – Invernada dos Bombeiros e Chácara do Ibirapuera – prestam-se admiravelmente, à construção de um jardim ou parque, com área igual à do ‘Hyde Park’ de Londres, ou metade da área do Parque ‘Bois de Boulogne’ de Paris”.</i></p>
			<p>Pires do Rio foi o responsável pelas ações de incorporação de terras ao poder Municipal, ampliando e consolidando a área destinada ao Parque Ibirapuera. Uma das principais ações ocorreu em 1927, com a permuta de um terreno situado na atual Avenida Francisco Matarazzo por parte da Invernada dos Bombeiros e de propriedade do Governo do Estado. No seu relatório daquele ano, Pires do Rio, referiu-se ao fato do Matadouro de Vila Mariana estar fechado e propôs a sua desativação. Nesse mesmo ano o Instituto Biológico é fundado por Fernando Costa, então Secretário da Agricultura do Estado de São Paulo, <i>“dentro de um ‘parque’ de 332.000m²”.</i></p>
			<p>No parque institucionalizado, em 1928 destinou-se a transferência da Divisão de Matas, Parques e Jardins objetivando além da posse e da zeladoria a implantação do viveiro experimental para a produção e o fornecimento de mudas para a arborização urbana.</p>
			<p>Manoel Lopes de Oliveira, conhecido como Manequinho Lopes, entomologista e responsável pela Divisão assumiu no período a administração do parque. Na função promoveu o “saneamento” dos terrenos turfosos e pantanosos com plantio em larga escala de eucalipto (talhões), que ao mesmo tempo, limitava a possível ação de posseiros. As essências de eucalipto haviam sido introduzidas no Brasil em 1911 por Edmundo Navarro de Andrade no horto florestal de Águas Claras. Os experimentos procedidos pelo Serviço Florestal do Estado eram promissores no uso destas essências na silvicultura.</p>
			<p>Manequinho Lopes sediou e organizou o viveiro na confluência da rua França Pinto com a rua Indianópolis, localidade extrema do parque, onde o viveiro esteve permanentemente mantido. No viveiro produziu espécies florísticas exóticas e nativas, e semeou entre outras, pau-ferro, ipês, pau-brasil, pau-jacaré, angicos, quaresmeira, jacarandá-mimoso, tipuana, flamboyant, ligustro, plátanos, magnólias, canelas, e iniciou a produção da belíssima sibipiruna. No hiato existente sobre o fornecimento de mudas para o plantio do parque Ibirapuera só nos resta inferir que foi a partir deste viveiro com empenho de Arthur Etzel, que substituiu Manequinho Lopes, que se viabilizou o projeto implantado de Otavio Augusto Teixeira Mendes.</p>
			<p>No período entre 1928 e 1952 foram desenvolvidos cinco projetos para o parque Ibirapuera, anteriores ao projeto do parque efetivamente implantado. Todos esses projetos correspondiam aos princípios da tradição do parque <i>Beaux-Arts</i>, na estrutura e no tratamento dos espaços livres. Em síntese podem ser descritos:</p>
			<p><b>Reinaldo Dierberger, 1929.</b> Prontamente após a institucionalização do parque Dierberger elaborou um projeto para o uso do parque estruturado por dois eixos de simetria. A geometria setorizava os espaços, compunha extensos gramados e vários jardins de <i>parterres</i> a partir de caminhos.  No projeto o parque receberia edifícios destinados a concertos, ginásio de esportes, campo de corrida, e restaurantes. A solução, porém, desconsiderava a existência do Viveiro de Plantas Municipal na área e simplesmente previa a sua transferência.</p>
			<figure title="Figura 2 - Projeto do Parque Municipal sito à Várzea do Ibirapuera, 1929. Reinaldo Dierberger. Acervo: Biblioteca Mário de Andrade, SMC/PMSP." class="coluna">
				<img :src="fileSrc('1fig02.jpg')" alt="Figura 2 - Projeto do Parque Municipal sito à Várzea do Ibirapuera, 1929. Reinaldo Dierberger. Acervo: Biblioteca Mário de Andrade, SMC/PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 2 - Projeto do Parque Municipal sito à Várzea do Ibirapuera, 1929. Reinaldo Dierberger. Acervo: Biblioteca Mário de Andrade, SMC/PMSP.</figcaption>
			</figure>
			<p>Devido à decisão da Câmara de 1929 de transferir o Hipódromo da Mooca para os terrenos do Ibirapuera, Dierberger elaborou um novo projeto para o Parque em 1932. Este projeto foi o primeiro a ser legalmente aprovado.</p>
			<p>Um ano após, em 1933, a Repartição de Águas e Esgoto de São Paulo (RAE) entrou com recurso questionando e desaprovando o projeto de Dierberger devido à ausência de consideração de questões de drenagem, de águas pluviais e de esgotos na solução.</p>
			<p>Desta forma, a 7ª Seção Técnica de Divisão e Obras da PMSP passou a ficar responsável pela revisão do projeto de Dierberger a partir do parecer elaborado pela Repartição de Águas.</p>
			<p>Seção Técnica de Divisão de Obras – PMSP, 1933. O novo projeto, então desenvolvido, pela 7ª Seção Técnica de Obras estruturava-se como um conjunto de equipamentos esportivo e de lazer que incluía piscina, cassino, praça circular, jardim de rosas em um platô nivelado e em perspectiva heroica. Esta proposta previa na homogeneidade formal também a transferência do Viveiro, fato que causou a indignação do Diretor Manequinho Lopes.</p>
			<figure title="Figura 3 - Projeto do Parque Municipal da 7ª Seção Técnica da Divisão de Obras da PMSP, 1933. Fonte: Andrade, Manuella. In: Arquitextos 051.01, Vitruvius com.br. Acesso em 02/07/2019." class="coluna">
				<img :src="fileSrc('1fig03.jpg')" alt="Figura 3 - Projeto do Parque Municipal da 7ª Seção Técnica da Divisão de Obras da PMSP, 1933. Fonte: Andrade, Manuella. In: Arquitextos 051.01, Vitruvius com.br. Acesso em 02/07/2019." style="height: auto; width: 100%;">
				<figcaption>Figura 3 - Projeto do Parque Municipal da 7ª Seção Técnica da Divisão de Obras da PMSP, 1933. Fonte: Andrade, Manuella. In: Arquitextos 051.01, Vitruvius com.br. Acesso em 02/07/2019.</figcaption>
			</figure>
			<p><b>Werner Hacker, 1935.</b> Em 1935 o Eng. Werner Hacker revisou o projeto da 7ª Seção Técnica de Obras apresentando nova proposta que incluía o Viveiro de Plantas na solução. Este projeto também não foi desenvolvido.</p>
			<p>Vale ressaltar que no ano de 1936 aprovou-se o local e a implantação do Monumento às Bandeiras de Victor Brecheret. Este trabalho havia sido apresentado pelo escultor em 1920 definindo, no seu tempo, a “entrada” do futuro parque. Neste mesmo ano, 1936, procedeu-se a produção de 150 mil árvores no Viveiro Municipal para a arborização das vias urbanas e das praças da cidade.</p>
			<figure title="Figura 4 - Detalhe da Praça Projeto de Werner Hacker, 1935. Fonte: Andrade, Manuella. In: Arquitextos 051.01, Vitruvius com.br. Acesso em 02/07/2019. Projeto para o Parque Ibirapuera, PMSP, 1948." class="coluna">
				<img :src="fileSrc('1fig04.jpg')" alt="Figura 4 - Detalhe da Praça Projeto de Werner Hacker, 1935. Fonte: Andrade, Manuella. In: Arquitextos 051.01, Vitruvius com.br. Acesso em 02/07/2019. Projeto para o Parque Ibirapuera, PMSP, 1948." style="height: auto; width: 100%;">
				<figcaption>Figura 4 - Detalhe da Praça Projeto de Werner Hacker, 1935. Fonte: Andrade, Manuella. In: Arquitextos 051.01, Vitruvius com.br. Acesso em 02/07/2019. Projeto para o Parque Ibirapuera, PMSP, 1948.</figcaption>
			</figure>
			<p>A Equipe Técnica da PMSP elaborou um novo projeto, em 1948, para o parque Ibirapuera fortemente representativo da estética Beaux-Arts. A geometria que considerava como somatória as tradições do jardim formal francês com o naturalismo do jardim paisagista inglês nos eixos de estrutura e de vias, possuía extenso lago central, considerava a permanência do Viveiro Municipal, incorporava a construção do Monumento às Bandeiras, e em uma ampla praça circular implantava e destacava o Monumento de Nove de Julho.</p>
			<p>O “Monumento aos Mortos de 1932” foi efetivamente construído como parte das comemorações da Revolução Constitucionalista no ano de 1949. A localização e a construção do monumento estavam previstas no parque Ibirapuera “na parte central da praça circular no prolongamento da Avenida Brasil, a 1.100m aproximadamente da Avenida Brigadeiro Luiz Antônio”<a title='A inauguração se deu no ano de 1955, com o Obelisco de Emendabili ainda em construção, quando, na ocasião foram transladadas as cinzas de MMDC para o interior do mausoléu (Mário Martins de Almeida, Euclides Bueno Miragaia, Dráusio Marcondes de Sousa, Antônio Américo de Camargo Andrade.' style='cursor: help;'><sup>6</sup></a>.</p>
			<figure title="Figura 5 - Projeto para o Parque Ibirapuera 1948. Autor: Prefeitura Municipal. Acervo: Divisão do Arquivo Histórico Municipal de São Paulo – DPH/SMC/PMSP. Fonte: Andrade, Manuella." class="coluna">
				<img :src="fileSrc('1fig05.jpg')" alt="Figura 5 - Projeto para o Parque Ibirapuera 1948. Autor: Prefeitura Municipal. Acervo: Divisão do Arquivo Histórico Municipal de São Paulo – DPH/SMC/PMSP. Fonte: Andrade, Manuella." style="height: auto; width: 100%;">
				<figcaption>Figura 5 - Projeto para o Parque Ibirapuera 1948. Autor: Prefeitura Municipal. Acervo: Divisão do Arquivo Histórico Municipal de São Paulo – DPH/SMC/PMSP. Fonte: Andrade, Manuella.</figcaption>
			</figure>
			<p><b>Parque do Ibirapuera, Christiano Stockler das Neves, 1951.</b> O projeto deste arquiteto, notório pelas importantes obras urbanas de forte caráter Beaux-Arts antevia o parque como Obra de Arte dentro do espírito do futuro festejo do IV Centenário. Stockler das Neves defendia a consideração e a propriedade das características geomorfológicas do sítio para a construção de um belo parque Beaux-Arts. Sua proposta caracteriza-se por eixos estruturais cruciformes constituindo grandes bulevares, imponentes edifícios arrematando os eixos, espelhos d’água geometrizados na estrutura compositiva, e lago de forma serpenteante abastecido pelo córrego Caguaçu. O Monumento às Bandeiras e o Monumento aos Mortos de 1932 estavam presentes e considerados na solução. O projeto de Stockler das Neves transferiria, porém, o Viveiro Manequinho Lopes para outra localidade.</p>
			<figure title="Figura 6 - Parque do Ibirapuera 1951. Autor: Christiano Stockler das Neves. Acervo: Divisão do Arquivo Histórico Municipal de São Paulo – DPH/SMC/PMSP. Fonte: Andrade, Manuella." class="coluna">
				<img :src="fileSrc('1fig06.jpg')" alt="Figura 6 - Parque do Ibirapuera 1951. Autor: Christiano Stockler das Neves. Acervo: Divisão do Arquivo Histórico Municipal de São Paulo – DPH/SMC/PMSP. Fonte: Andrade, Manuella." style="height: auto; width: 100%;">
				<figcaption>Figura 6 - Parque do Ibirapuera 1951. Autor: Christiano Stockler das Neves. Acervo: Divisão do Arquivo Histórico Municipal de São Paulo – DPH/SMC/PMSP. Fonte: Andrade, Manuella.</figcaption>
			</figure>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2.1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>2.2 Projeto do Parque Ibirapuera, 1952</h3>
			<p>No Projeto de Paisagismo para o Parque Ibirapuera Teixeira Mendes se debruçou, primeiramente, sobre o espaço para acolher o conjunto arquitetônico, e na acomodação de construções, pavilhões provisórios (feira internacional e verde). O parque se estruturou harmônico e arrebatador, como uma sinfonia de movimentos autônomos cadenciados. Do todo para as partes (setores ou zonas) em gradientes ajustados aos subespaços (subsetores ou subzonas) com princípios modernos.</p>
			<figure title="Figura 7 - Preservação e Paisagismo em S. Paulo. Fonte: Arquivo Histórico Washington Luís. In: Mariano, Cássia." class="coluna">
				<img :src="fileSrc('1fig07.jpg')" alt="Figura 7 - Preservação e Paisagismo em S. Paulo. Fonte: Arquivo Histórico Washington Luís. In: Mariano, Cássia." style="height: auto; width: 100%;">
				<figcaption>Figura 7 - Preservação e Paisagismo em S. Paulo. Fonte: Arquivo Histórico Washington Luís. In: Mariano, Cássia.</figcaption>
			</figure>
			<p>Por estes princípios compreende-se que o parque não deveria ter princípio ou fim e vivenciado de qualquer ângulo necessitava ser pleno e belo; o parque necessitava permitir uso intenso com manutenção mínima, visto que tempo e espaço são escassos. O desenho devia ser dinâmico e os princípios de projeto deveriam incorporar: ritmo, movimento, vida, ação e jovialidade. O Parque Ibirapuera implantado expressou a modernidade desejada pela cidade.</p>
			<p>No desenho do parque Ibirapuera Teixeira Mendes construiu composições harmônicas e dinâmicas adequando funções e usos. Caminhar conduziria a vivenciar espaços aprazíveis de sombreamento tênue, cada qual único e cadenciado, um ritmado comovente e essencialmente moderno: “Moderno é viver bem”. Por estes princípios, parques configuram-se como grandes espaços arborizados para estimular o prazer, as práticas esportivas, com caminhos sinuosos e vegetação definindo o campo de visão e instigando o prosseguir.  </p>
			<p>Foi introduzida alternância de LUZ e SOMBRA usada para propiciar maior sensibilização; grandes extensões horizontais foram arrematadas por planos verticais para construir subespaços e atribuir ambiência. Teixeira Mendes definiu porções do parque com permeabilidade perceptiva para a cidade alternando no restante do perímetro, aberturas e fechamentos. Ele projetou e supervisionou a construção dos lagos utilizando, para isso, os córregos Sapateiro e Caguaçú existentes.</p>
			<p>O conjunto arquitetônico estaria destacado, e situá-los era parte das funções mais relevantes. Para isso o terreno foi modelado construindo um platô em nível mais elevado. Os acessos para os edifícios foram propostos com percursos e entradas de desenho indireto, de maneira a não obstruir o eixo de perspectiva dominante. O parque cultural proposto ajustava-se, desta forma, aos princípios do paisagismo moderno.</p>
			<p>O extenso eucaliptal que recobria o parque foi em parte suprimido, para acomodar o Conjunto Arquitetônico, as vias, os lagos e para, como massa, se contrapor à sinuosidade da marquise. A vegetação foi implantada no parque para a conformação de subespaços e para a condução de perspectivas. </p>
			<p>No conjunto arquitetônico a Marquise configurou uma ampla esplanada para uso de pessoas como unidade do conjunto de forma orgânica (hipérbole justaposta) para recepcionar o público e conduzir aos edifícios laminares sobre pilotis recuados de 6 a 7m do alinhamento do volume: Palácio das Nações, dos Estados e das Indústrias. O Palácio das Exposições (Oca) e o Teatro de formas autônomas e distintas dos pavilhões foram aninhados em amplas hipérboles na entrada principal do parque e início da Marquise. O “Teatro” alterado como Auditório foi implantado apenas em 1996 a partir de novo projeto de autoria de Niemeyer. Esta esplanada estava destacada na solução de paisagismo com as vias para veículos circundando-a.</p>
			<p>As vias foram sombreadas por árvores de porte alto, copa circular muito expressiva, cujas folhas e folíolos pequenos permitiam a permeabilidade da luz solar. Entre as espécies mais recorrentes encontram-se alecrins-de-campinas, sibipirunas, e outras de sombreamento mais denso como quaresmeiras e manacás. Agrupamentos de palmáceas entre jerivás, seafórtias, tamareiras, latânias, cariotas, açaís pontuavam posições nas intersecções das vias, dos caminhos e no vazado da marquise.</p>
			<p>Entre a via perimetral do conjunto arquitetônico e as margens do lago um bosque foi constituído pelas essências existentes, acrescidas de árvores nativas como o carvalho brasileiro (<i>Euplasa cantareirae</i>), o pau-brasil (<i>Paubrasilia echinata</i>), o guatambu (<i>Aspidosperma rammiflorum</i>), o jatobá (<i>Hymenaea courbaril</i>), o cedro-rosa (<i>Cedrela fissilis</i>) entre outras, resolvendo parte do necessário transplante de árvores retiradas e transplantadas. O modelado de terreno nesta região resolveu a diferença de nível necessária para morfologicamente construir dois platôs (ou níveis básicos). Estes platôs permitem, contemporaneamente, o zoneamento do parque.</p>
			<p>A estrutura paisagística do conjunto arquitetônico o destacava no platô mais elevado. De um lado, ao noroeste pelo lago e pelo fechamento da massa de eucaliptos; de outro, a sudeste por conjuntos muito expressivos de ipês entre maciços de ipês-róseos e ipês amarelos que arrematavam as arquiteturas próximas do Pavilhão das Indústrias (atual Fundação Bienal).</p>
			<p>Na ausência de documentação do plantio procedido no parque Ibirapuera relatos e imagens corroboram a inferências. A partir destas toda a área norte e nordeste da marquise estavam desprovidas de arborização. Grupos de palmáceas nativas e exóticas pontuavam intersecções de vias e os caminhos internos ou compunham triangulações balizando as construções. Há referência da luxuriante vegetação arbustiva e herbácea com forte contraste cromático no jardim da marquise, no entorno das áreas de estacionamento e arrematando subzonas de uso programático. Conjuntos e ipês entre maciços de róseos e amarelos arrematavam a arquitetura, próximos ao Pavilhão das Indústrias.</p>
			<figure title="Figura 8 - Parque Ibirapuera, década de 1950. Fonte: Arquivo Histórico Washington Luís, setor de imagens e negativos em vidro." class="coluna">
				<img :src="fileSrc('1fig08.jpg')" alt="Figura 8 - Parque Ibirapuera, década de 1950. Fonte: Arquivo Histórico Washington Luís, setor de imagens e negativos em vidro." style="height: auto; width: 100%;">
				<figcaption>Figura 8 - Parque Ibirapuera, década de 1950. Fonte: Arquivo Histórico Washington Luís, setor de imagens e negativos em vidro.</figcaption>
			</figure>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>2.3 Os Planos Diretores de 1996 – 2002 – 2007</h3>
			<p>A partir da década de 1990, três Planos Diretores foram elaborados para o parque Ibirapuera. </p>
			<p>Em 1996, o escritório de Oscar Niemeyer elaborou Plano Diretor para o parque Ibirapuera com dois objetivos principais: de maneira polêmica, regularizar o perímetro do parque junto à avenida República do Líbano e a aprovação da construção do Auditório, previsto desde o projeto da Comissão do IV Centenário. A regularização, que integraria o parque de frente para a cidade neste perímetro, naturalmente ocasionaria a desapropriação dos imóveis.</p>
			<p>Este plano possuía o mérito de valorizar o parque como Centro de Artes e Cultura (em consonância ao projeto original), propondo a retirada dos usos institucionais administrativos dos edifícios patrimoniais do parque; naquele momento ocupados pela sede da Prefeitura Municipal e pela Companhia de Processamento de Dados (Prodam). De maneira controversa, defendia a retirada das construções sob a marquise, incluindo a sede do Museu de Arte Moderna e o restaurante, liberando assim completamente o espaço. Este Plano foi publicado no Diário Oficial do Município de São Paulo.</p>
			<p>O Plano Diretor elaborado em 2002 focou a recuperação do processo de tombamento do parque e a legislação ambiental aplicável para a concepção original do Plano Diretor. O histórico do parque destacava o caráter patrimonial das construções, e o uso institucional assumido por vários edifícios. Este plano situava-se no período de debates sobre a construção do Auditório, cuja espacialidade completaria o projeto original da Comissão do IV Centenário arrematando no início da marquise a volumetria do Palácio das Exposições (Oca).</p>
			<p>O conjunto do acesso do parque foi considerado por Oscar Niemeyer como o mais importante pela volumetria e pela composição paisagística. O projeto do novo Auditório, desenvolvido pelo escritório de Niemeyer possuía 4.870m² de área construída, capacidade para 830 espectadores e plateia externa para até 30.000 pessoas.</p>
			<p>O Plano de 2002 propunha e especificava duas garagens subterrâneas: uma na Praça do Obelisco e uma no Pavilhão da Bienal. Faziam parte, também, o detalhamento técnico da “fonte cibernética flutuante” no lago, com perspectiva desde a avenida Pedro Álvares Cabral, e a descrição para viabilizar os projetos de recuperação do Parque elaborados nas administrações municipais anteriores (Plano Diretor de 1996).</p>
			<p>Deve-se ressaltar que ambos planos de 1996 e de 2002 refletiam proposições sobre as edificações e seus usos no parque. Os aspectos concernentes aos espaços livres, à vegetação, a água, o uso da população, a biodiversidade, bem como zeladoria e ações de manutenção não compunham objetivos em si.</p>
			<p>O quadro se altera em 2005, quando técnicos da Secretaria do Verde e do Meio Ambiente (SVMA) elaboraram amplo diagnóstico, com diretrizes e ações (sem peças gráficas) no qual foram abordados os aspectos de Gestão Político-Administrativa, Uso e Ocupação e Paisagem e Recursos Naturais. Este trabalho foi apresentado no CONPRESP e no desdobramento se firmou o compromisso de apresentar Plano Diretor propriamente dito, ou seja, com plantas de zoneamento, justificativas, diretrizes e propostas espacializadas, enfim, com os dados necessários para balizar a análise das propostas de futuras intervenções no parque.</p>
			<p>O Plano Diretor de 2007 elegeu como premissa a Paisagem do Parque Ibirapuera entendida como aquilo que é perceptível e apreciado pelos seus usuários e pretendeu, através de diretrizes e ações, preservar e valorizar os espaços e a ambiência que o parque possui. Propôs como diretriz de ação a constituição de duas zonas estruturantes: a Zona Cultural e a Zona Verde cada qual com duas subzonas. O lago neste plano é compreendido como elemento separador entre a Zona Cultural que corresponde ao conjunto arquitetônico do IV Centenário e a Zona Verde correspondente aos espaços livres ou vegetados do parque.</p>
			<p>Neste sentido, a paisagem do parque também corresponde como diretriz para as ações de preservação e manutenção. Estas são adequadas a quatro temas: Uso dos Espaços, Manejo da Vegetação, Aumento de Áreas de Permeabilidade e Ampliação da Acessibilidade, e Recuperação e Manutenção de Elementos.</p>
			<p>Este plano compreendia como função da Municipalidade ordenar este espaço público de maneira a garantir sua utilização democrática e sua preservação enquanto importante área verde e cultural da cidade. Dando continuidade às atuais ações de reintegração de áreas irregularmente ocupadas, a Paisagem do Parque deve passar a ser a balizadora da continuidade destas ações ao devolvê-las ao parque (Plano Diretor do Ibirapuera, 2007).</p>
			<p>O Manejo da Vegetação propõe o “Manejo Teixeira Mendes” que, à maneira do trabalho de seu autor, deve ser conduzida a partir dos elementos encontrados no sítio (na ocasião de sua implantação) e utilizados como criadora de ambiências, estrutura de visuais, intenção e valorização de elementos diversos (Plano Diretor do Ibirapuera, 2007).</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 4'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">3. INSERÇÃO URBANA DO PARQUE IBIRAPUERA</h2>
			<CommentsContext :id="commentId()" :context="'3. INSERÇÃO URBANA DO PARQUE IBIRAPUERA'">
			<figure title="Figura 9 – Mapa das Áreas Verdes da Macrometrópole Paulista. Fonte: Emplasa, 2016." class="coluna">
				<img :src="fileSrc('1fig09.png')" alt="Figura 9 – Mapa das Áreas Verdes da Macrometrópole Paulista. Fonte: Emplasa, 2016." style="height: auto; width: 100%;">
				<figcaption>Figura 9 – Mapa das Áreas Verdes da Macrometrópole Paulista. Fonte: Emplasa, 2016.</figcaption>
			</figure>
			<p>O Parque Ibirapuera está localizado na subprefeitura de Vila Mariana, distrito de Moema, e, para fins de análise do contexto urbano em que está inserido, utilizou-se o raio de 2 (dois) quilômetros a partir de centroide estabelecido no Parque, portanto trata-se de análise do entorno imediato.</p>
			</CommentsContext>
			<p>Tal caracterização envolve os usos do solo e do espaço urbano, bem como os tipos de zoneamento correspondentes (Lei Municipal nº 16.402/2016), os aspectos físicos e socioeconômicos do território, a disposição de equipamentos públicos na área, e a acessibilidade ao Parque por meio de transporte público, bicicleta e a pé.</p>
			<p>Apesar da análise de inserção urbana se concentrar no raio de 2 (dois) quilômetros, o Parque Ibirapuera deve ser pensado em escala que vá para além de seu entorno imediato, já que, diferentemente dos demais parques urbanos da cidade, não limita sua influência no território apenas aos moradores do bairro em que está inserido. O parque possui abrangência metropolitana e recebe frequentadores de diversos lugares, além de atrair turistas de outros países.</p>
			<p>Consolidado como um dos equipamentos públicos mais utilizados da cidade de São Paulo, e uma de suas principais áreas verdes, recebe aproximadamente 1,1 milhão de pessoas por mês  e se constitui em um dos principais polos de cultura e lazer na cidade.</p>
			<p>Concebido para ser expressão do progresso paulistano no século XX, sua história se confunde com a história de São Paulo e da formação de sua identidade cultural, sendo comum a visita ao Parque Ibirapuera em diversos roteiros turísticos que pretendem apresentar os principais pontos da cidade. Dessa forma, o Parque Ibirapuera produz uma regionalização própria a partir de sua presença no tecido urbano, podendo-se falar em uma “região do Parque Ibirapuera” formada por bairros tradicionais, áreas verdes e nobres, ao mesmo tempo em que se insere na escala metropolitana, seja pelo número de visitas e importância na cidade, seja pela proximidade geográfica de centralidades econômicas.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.1 Análise do zoneamento e aspectos econômicos do entorno</h3>
			<p>Do ponto de vista do uso do solo, pode-se afirmar que a região apresenta uso residencial, horizontal e vertical, de médio/alto padrão como padrão majoritário. A Lei Municipal nº 16.402/2016, que normatiza a ação pública e privada sobre as formas de uso do solo da cidade, apresenta 3 (três) categorias de zoneamento que estão presentes na região sob análise e se coadunam com tais usos.</p>
			<figure title="Figura 10 – Ibirapuera Usos Residenciais Horizontais e Verticais de Médio e Alto Padrão. Fonte: Cadastro Territorial Predial de Conservação e Limpeza – TPCL." class="coluna">
				<img :src="fileSrc('1fig10.jpg')" alt="Figura 10 – Ibirapuera Usos Residenciais Horizontais e Verticais de Médio e Alto Padrão. Fonte: Cadastro Territorial Predial de Conservação e Limpeza – TPCL." style="height: auto; width: 100%;">
				<figcaption>Figura 10 – Ibirapuera Usos Residenciais Horizontais e Verticais de Médio e Alto Padrão. Fonte: Cadastro Territorial Predial de Conservação e Limpeza – TPCL.</figcaption>
			</figure>
			<p>As Zonas Exclusivamente Residenciais-1 (ZER-1), que são áreas destinadas exclusivamente ao uso residencial com predominância de lotes de médio porte, com densidade demográfica baixa, engloba 4 (quatro) porções territoriais na área sob análise: o bairro de Jardim Lusitânia, tradicional vizinho do Parque do Ibirapuera, que pela proximidade participa ativamente da vida do Parque; o bairro de Planalto Paulista; parte do bairro de Vila Nova Conceição; o bairro Jardim Novo Mundo no distrito de Moema; e, por fim,  grande parte do bairro dos Jardins com exceção dos imóveis lindeiros aos corredores da Avenida Europa e das ruas Groenlândia e Estados Unidos.</p>
			<p>As ZPR são porções do território destinadas majoritariamente ao uso residencial, bem como a atividades não residenciais compatíveis com o uso residencial, com densidades construtiva e demográfica baixas. Enquadram-se nessa categoria as seguintes áreas: porção territorial em forma de delta composta pelas avenidas Cidade Jardim e 9 de Julho e pela Rua Rússia no início do bairro de Jardins; e área localizada em Vila Mariana, a leste da Avenida Ibirapuera e tendo como limite ao sul a rua Capitão Macedo e rua Rio Grande a leste.</p>
			<p>Por fim pode-se citar área a leste da Avenida José Maria Whitaker, sendo limitada ao sul pela Avenida Senador Casimiro da Rocha, no bairro de Mirandópolis.</p>
			<p>As Zonas Mistas são porções do território destinadas a promover usos residenciais e não residenciais, com predominância do uso residencial, com densidades construtiva e demográfica baixas e médias. Das 3 (três) categorias de zoneamento apresentadas neste eixo de análise é a que permite maior adensamento construtivo e demográfico, bem como certa intensificação das atividades comerciais. </p>
			<figure title="Figura 11 – Parque Ibirapuera destacando os usos residenciais num raio de 2km. Fonte: Lei de Parcelamento Uso e Ocupação do Solo. Geosampa" class="coluna">
				<img :src="fileSrc('1fig11.jpg')" alt="Figura 11 – Parque Ibirapuera destacando os usos residenciais num raio de 2km. Fonte: Lei de Parcelamento Uso e Ocupação do Solo. Geosampa" style="height: auto; width: 100%;">
				<figcaption>Figura 11 – Parque Ibirapuera destacando os usos residenciais num raio de 2km. Fonte: Lei de Parcelamento Uso e Ocupação do Solo. Geosampa</figcaption>
			</figure>
			<p>Estão compreendidas em tal definição legal: porção do bairro da Vila Olímpia, a oeste da Avenida Santo Amaro cortada pelas Avenidas Juscelino Kubitscheck, Brigadeiro Faria Lima e Horácio Lafer, e abrangendo ruas como Clodomiro Amazonas, Quatá e Joaquim Floriano com dinâmica atividade comercial; porção territorial localizada no sentido da saída da Avenida República do Líbano, em Vila Clementino, que se estende pela Rua Balthazar da Veiga no sentido de Moema/Vila Uberabinha pela Rua Diogo Jacome, sendo cruzada pela Avenida Hélio Pelegrino, possuindo como seu limite a Avenida dos Eucaliptos; porção territorial no bairro de Indianópolis atravessada em toda sua extensão pelas Alamedas dos Anapurus e Nhambiquaras, compreendendo também as avenidas Moema e Aratãs como importantes pontos referenciais da região; área que se estende pelo eixo da Avenida Dr. Altino Arantes, a leste da Avenida José Maria Withaker e limitada pela Rua das Camélias em Vila Clementino; limitada a oeste pela Rua Dr. Amâncio de Carvalho e Avenida Conselheiro Rodrigues Alves, a sul pela Rua França Pinto e a norte pela Rua Caravelas localiza-se extensa área que compreende partes dos bairros Vila Mariana e Vila Clementino; região cruzada pela Rua Tutóia no Paraíso ;  área cruzada pela Alameda Campinas limitada pela Rua Estados Unidos e Rua Pamplona, bem como área cruzada pelas Alamedas Franca e Lorena e limitada pela Rua Padre João Manuel também na região do Paraíso; por fim, cita-se porção localizada no Itaim Bibi formada pelas Ruas Jesuíno Arruda e Pedroso Alvarenga.</p>
			<p>Apesar da maior parte da região sob análise apresentar padrões residenciais de uso do solo, com baixa densidade demográfica e construtiva, a região do Parque Ibirapuera tem sua paisagem marcada pela presença de um dos mais importantes polos financeiros e comerciais da América Latina - Avenida Paulista -, bem como de importantes eixos viários da cidade que exercem papel fundamental no processo de produção e reprodução das atividades econômicas. Assim, nota-se a presença de faixas de zoneamento que promovem e permitem usos do solo mais dinâmicos e intensos, produzindo paisagem urbana complexa e contraditória, combinando o verde do “pulmão da cidade” com a verticalização intensa produzida pelo processo de urbanização. </p>
			<figure title="Figura 12 – Parque Ibirapuera destacando os usos não-residenciais num raio de 2km. Fonte: Cadastro Territorial Predial de Conservação e Limpeza – TPCL." class="coluna">
				<img :src="fileSrc('1fig12.jpg')" alt="Figura 12 – Parque Ibirapuera destacando os usos não-residenciais num raio de 2km. Fonte: Cadastro Territorial Predial de Conservação e Limpeza – TPCL." style="height: auto; width: 100%;">
				<figcaption>Figura 12 – Parque Ibirapuera destacando os usos não-residenciais num raio de 2km. Fonte: Cadastro Territorial Predial de Conservação e Limpeza – TPCL.</figcaption>
			</figure>
			<p>Zona Centralidade é uma porção do território localizada na Macrozona de Estruturação e Qualificação Urbana com atividades de abrangência regional.</p>
			<p>São enquadradas nessa definição as seguintes áreas: porção do bairro de Vila Mariana compreendida pelas avenidas Dr. Dante Pazzanese, Pedro Álvares Cabral, Conselheiro Rodrigues Alves, 23 de Maio e pela Rua Dr. Astolfo de Araújo; parte da Avenida Brigadeiro Luis Antônio estendendo-se até a Avenida Paulista e todo o trecho da Avenida Santo Amaro incluso no raio de estudo;  área situada junto ao corredor da Avenida Ibirapuera nas proximidades do Tribunal de Contas, Centro Olímpico e Parque das Bicicletas; outra área assim denominada se encontra na extensão da Avenida Indianópolis e Avenidas Açocê junto ao bairro de Indianópolis; área que se estende pela Rua Luis Góis em Vila Mariana; miolo do Itaim Bibi, compreendendo ruas conhecidas da região como Tabapuã e Joaquim Floriano; por fim, pode-se falar no eixo formado pelas ruas Augusta e Haddock Lobo, compreendendo também as ruas Oscar Freire e Padre João Manuel e Alameda Lorena.</p>
			<p>ZCOR são porções do território destinadas aos usos não residenciais compatíveis com o uso residencial e com a fluidez do tráfego, com densidades demográfica e construtiva baixas. Incidem em lotes lindeiros à ZER ou à ZPR que fazem frentes para vias que exercem estruturação local ou regional.</p>
			<p>ZCOR-1, por sua vez, são trechos de vias destinados à diversificação de usos de forma compatível à vizinhança residencial. Nessa categoria de zoneamento encontram-se as principais vias de acesso ao bairro de Alto de Pinheiros, destacadamente Avenida Brasil, Rua Groelândia e Rua Estados Unidos.</p>
			<p>Estão também, nesta caracterização territorial, as vias lindeiras ao bairro de Vila Nova Conceição.</p>
			<p>ZCOR-2 são trechos de vias destinados à diversificação de usos de forma compatível à vizinhança residencial e à conformação de subcentro regional. As áreas que podem ser encaixadas nesta categorização são as áreas que fazem frente às Avenidas Brigadeiro Luís Antônio, 9 de Julho e Rebouças, bem como a extensão da Avenida Eucaliptos, situada entre as Avenidas Ibirapuera e Santo Amaro, no bairro de Moema. Por fim, constata-se a existência de porções de ZCOR-2 em trecho da Avenida República do Líbano e Avenida Ibirapuera na direção da Rua Sena Madureira.</p>
			<p>As Zonas Eixo de Estruturação da Transformação Urbana (ZEU) são porções do território destinadas a promover usos residenciais e não residenciais com densidades demográfica e construtiva altas e promover a qualificação paisagística e dos espaços públicos de modo articulado com o sistema de transporte público coletivo. São áreas inseridas na Macrozona de Estruturação e Qualificação Urbana, com parâmetros de parcelamento, uso e ocupação do solo compatíveis com as diretrizes da referida macrozona.</p>
			<p>Enquadram-se nessa definição as áreas lindeiras à Avenida Ibirapuera, no distrito de Moema, próximo ao Shopping Ibirapuera e agora das estações de Metrô da Linha 5-lilás, - Avenidas Macuco, Sabiá, Juriti, Açocê, Jamaris, entre outras da região - bem como áreas próximas às Avenidas Santo Amaro e Eucaliptos, também em Moema- Rua Araguari, Avenida Rouxinol, Rua Pintassilgo-. Ao lado direito da Avenida Santo Amaro, iniciando-se na Rua Natividade e seguindo pela Rua Jacques Félix, no bairro de Vila Nova Conceição, encontra-se outra porção territorial assim caracterizada.</p>
			<p>Outra porção de ZEU se dá a partir do túnel Takeharu Akagawa, prosseguindo pelas duas margens da Avenida São Gabriel, no bairro de Itaim Bibi- exceção feita às quadras abarcadas entre as ruas Tabapuã e Itacema, que se configuram como Zona Centralidade.</p>
			<p>Porção territorial estendendo-se pela Avenida 9 de Julho, sentido Centro, a partir da Avenida Cidade Jardim até o cruzamento com a Avenida São Gabriel.</p>
			<p>São também assim classificadas as áreas: no sentido de Vila Mariana, próximo a Avenida Rubens Berta,  na região das ruas Pedro de Toledo, Loefgren e Diogo de Faria; por fim, na extensão da Rua Vergueiro até o encontro com a Avenida 23 de Maio, prosseguindo pela Avenida Bernardino de Campos até a região do Paraíso e Avenida Paulista com as Alamedas Jaú, Itú e Santos, englobando ainda região da Avenida 9 de Julho até a altura da Rua Estados Unidos.</p>
			<p>As Zonas Eixo de Estruturação da Transformação Urbana Previsto (ZEUP) são zonas inseridas na Macrozona de Estruturação e Qualificação Urbana, com parâmetros de parcelamento, uso e ocupação do solo compatíveis com as diretrizes da referida macrozona e com a perspectiva de ampliação da infraestrutura de transporte público coletivo;</p>
			<p>É assim classificada área localizada a leste da Rua Iguatemi delimitada pelas ruas Joaquim Floriano e Pedroso Alvarenga em Itaim Bibi, bem como trecho que parte da Rua Canário até a Avenida República do Líbano em Moema. Porções, ainda, a oeste e a leste da Rua Leopoldo de Bulhões, em Indianópolis- a oeste limitada pela Avenida Ibirapuera e a leste pela Avenida Professor Ascendino Reis.</p>
			<p>Cita-se também área a leste da Avenida Professor Ascendino Reis, tendo como limites as ruas Estado de Israel e Neyde Apparecida Sollitto em Vila Clementino, bem como entre a Rua Doutor Mario Cardim e Avenida Ibirapuera, limitada a oeste pela rua Paulo Francis, e trecho da Avenida 23 de Maio cortada pela Rua Tutóia prosseguindo até a altura da rua Coronel Oscar Porto.</p>
			<p>Por fim cita-se as áreas a leste da Avenida Rubem Berta delimitado pela Avenida Onze de Junho, rua Luis Gois e rua Dr Bacelar em Vila Clementino; a oeste da Avenida Moreira Guimarães, porção composta pelas Avenidas Jurucê, Jandira, Jurema, Jamaris, Moema, Chibaras, Divino Salvador, Jamaris até a altura da Avenida Indianópolis.</p>
			<p>O IPVS, indicador sintético que classifica todos os setores censitários do Estado de São Paulo em 6 grupos, foi o referencial utilizado neste estudo para análise da estrutura socioeconômica da área.</p>
			<p>O conceito abarca as seguintes variáveis: renda domiciliar per capita; rendimento médio da mulher responsável pelo domicílio; % de domicílios com renda domiciliar per capita até 1/2 SM; % de domicílios com renda domiciliar per capita até 1/4 SM; % de pessoas responsáveis pelo domicílio alfabetizadas; % de pessoas responsáveis de 10 a 29 anos ; % de mulheres responsáveis de 10 a 29 anos ; idade média das pessoas responsáveis ; e de crianças de 0 a 5 anos de idade. As áreas são classificadas em uma escala que vai de 1 a 6, denotando, respectivamente, baixíssima vulnerabilidade e vulnerabilidade muito alta.</p>
			<p>A região, em quase sua totalidade, pode ser classificada como área de baixíssima vulnerabilidade social (1), com a presença de poucas manchas de vulnerabilidade muito baixa (2), reforçando a imagem de área nobre e de excelente qualidade de vida da região vizinha ao Parque, presente no imaginário do cidadão paulistano. Como exceção a este padrão socioterritorial pode-se citar a área abarcada pela Favela Mario Cardim, em Vila Mariana, distante 2 km do Parque, classificada como área de vulnerabilidade social muito alta (6).</p>
			<p>Outros indicadores sociais e demográficos da Subprefeitura de Vila Mariana, que engloba os distritos de Moema, Vila Mariana e Saúde, comprovam a boa qualidade de vida da média da região.  A região é a segunda colocada no ranking do Índice de Desenvolvimento Humano Municipal (IDHM 0,9) estando acima da média municipal, e, é importante que se diga, a primeira colocação pertence à Subprefeitura de Pinheiros, que engloba o restante do território sob análise. Apresenta, ainda, taxa de homicídio de 3,68 por 100 mil habitantes, bem abaixo da média municipal de 14,37; conta com 5,9 leitos SUS por mil habitantes, contra 1,53 de média municipal; e, por fim, nenhum dos moradores está a mais de 1 km de equipamentos de cultura, frente a uma parcela de 40% de pessoas no Município. A região apresenta, ainda, dados positivamente expressivos da relação emprego-habitante: Moema - 1,45; Vila Mariana - 1,60; Jardim Paulista - 2,31; Pinheiros - 1,8; Itaim Bibi - 4,15; e, por fim, Saúde - 0,83. Para fins de comparação, a média municipal é de 0,41 emprego por habitante.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.2 Equipamentos Públicos e Transporte</h3>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.2.1 Assistência Social</h3>
			<p>São 9 (nove) equipamentos públicos de Assistência Social, nas mais diversas dimensões deste serviço- proteção à mulher, ao idoso, à criança e à pessoas em situação de vulnerabilidade social.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.2.2 Segurança</h3>
			<p>A região conta com 3 (três) Postos de Bombeiros; 2 (dois) Distritos Policiais de Polícia Civil; 1 Delegacia de Polícia Seccional; 4 (quatro) Companhias da Polícia Militar;  e 2 (duas) unidades de GCM, sendo uma lotada no Parque.</p>
			<figure title="Figura 13 - Equipamentos públicos de Assistência Social e Segurança. Fonte: Geosampa." class="coluna">
				<img :src="fileSrc('1fig13.jpg')" alt="Figura 13 - Equipamentos públicos de Assistência Social e Segurança. Fonte: Geosampa." style="height: auto; width: 100%;">
				<figcaption>Figura 13 - Equipamentos públicos de Assistência Social e Segurança. Fonte: Geosampa.</figcaption>
			</figure>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.2.3 Saúde</h3>
			<p>A área que se analisa, em especial o distrito de Vila Clementino, dispõe de uma série de hospitais, clínicas e ambulatórios, que acabam por torná-la referência na cidade em termos de concentração de atendimentos e equipamentos de saúde. São 14 (catorze) equipamentos públicos de saúde, com destaque para os hospitais São Paulo, do Servidor Público e Dante Pazanese.</p>
			<figure title="Figura 14 - Equipamentos Públicos de Saúde. Fonte: Geosampa." class="coluna">
				<img :src="fileSrc('1fig14.jpg')" alt="Figura 14 - Equipamentos Públicos de Saúde. Fonte: Geosampa." style="height: auto; width: 100%;">
				<figcaption>Figura 14 - Equipamentos Públicos de Saúde. Fonte: Geosampa.</figcaption>
			</figure>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.2.4 Educação</h3>
			<p>Do ponto de vista da disponibilidade de equipamentos de educação, são 30 (trinta) instituições da rede pública, sendo 15 (quinze) voltadas ao Ensino Infantil, 12 (doze) ao Ensino Fundamental e 2 (duas) ao Ensino Técnico e, aproximadamente, 125 ( cento e vinte e cinco) instituições de ensino privado. Não há Centros de Educação Unificados – CEUs.</p>
			<figure title="Figura 15 - Equipamentos Públicos de Educação. Fonte: Geosampa." class="coluna">
				<img :src="fileSrc('1fig15.jpg')" alt="Figura 15 - Equipamentos Públicos de Educação. Fonte: Geosampa." style="height: auto; width: 100%;">
				<figcaption>Figura 15 - Equipamentos Públicos de Educação. Fonte: Geosampa.</figcaption>
			</figure>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.2.5 Cultura</h3>
			<p>A maior parte dos equipamentos culturais está inserida no próprio Parque Ibirapuera, como a Oca, o MAC e o Planetário, reforçando a sua importância como centro cultural, esportivo e de lazer para a  região. Conforme informado na análise de inserção urbana, nenhum morador da região se encontra a mais de 1 (um) km de um equipamento cultural na região da subprefeitura da Vila Mariana.</p>
			<figure title="Figura 16 - Equipamentos Públicos de Cultura. Fonte: Geosampa." class="coluna">
				<img :src="fileSrc('1fig16.jpg')" alt="Figura 16 - Equipamentos Públicos de Cultura. Fonte: Geosampa." style="height: auto; width: 100%;">
				<figcaption>Figura 16 - Equipamentos Públicos de Cultura. Fonte: Geosampa.</figcaption>
			</figure>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.2.6 Abastecimento</h3>
			<p>A região é atendida por um grande número de feiras livres, mas nota-se a ausência de mercados municipais e sacolões.</p>
			<figure title="Figura 17 - Equipamentos Públicos de Abastecimento. Fonte: Geosampa." class="coluna">
				<img :src="fileSrc('1fig17.jpg')" alt="Figura 17 - Equipamentos Públicos de Abastecimento. Fonte: Geosampa." style="height: auto; width: 100%;">
				<figcaption>Figura 17 - Equipamentos Públicos de Abastecimento. Fonte: Geosampa.</figcaption>
			</figure>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.2.7 Esportivo</h3>
			<p>As regiões de Vila Mariana e Vila Clementino são atendidas por uma série de equipamentos esportivos públicos, tendo como destaque o Centro Olímpico, responsável pela formação de atletas de alto rendimento nas mais diversas modalidades. Nota-se no raio de estudo que não há equipamentos públicos de esporte na região dos Jardins, ao norte do Parque, local atendido por tradicionais clubes da cidade como o Esporte Clube Pinheiros e o Club Athletico Paulistano.</p>
			<figure title="Figura 18 - Equipamentos Públicos Esportivos. Fonte: Geosampa." class="coluna">
				<img :src="fileSrc('1fig18.jpeg')" alt="Figura 18 - Equipamentos Públicos Esportivos. Fonte: Geosampa." style="height: auto; width: 100%;">
				<figcaption>Figura 18 - Equipamentos Públicos Esportivos. Fonte: Geosampa.</figcaption>
			</figure>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.2.8 Acessibilidade</h3>
			<p>O Parque Ibirapuera está localizado no entroncamento de importantes vias, proporcionando ligação às regiões sul, oeste e central. Em relação ao transporte público, o parque é atendido pelo sistema metroferroviário por meio da estação AACD-Servidor da Linha 5-Lilás; distante 1,2 km dos portões 3 e 4, junto à Passarela Ciccillo Matarazzo; e 1,1 km dos portões 5 e 6, localizados na Avenida Quarto Centenário. Já pelo sistema municipal de ônibus, principal modal de transporte na região, o acesso ao parque ocorre pelas avenidas Pedro Álvares Cabral (portões 9, 10, 1, 2, 3 e 4), Brigadeiro Luís Antonio (portões 9 e 9A) e República do Líbano (portões 7, 8 e 9A). Nestes eixos, registra-se a passagem de 61 serviços de ônibus, entre linhas base, linhas noturnas, variantes de final de semana e apoios nos horários de pico, além de uma linha especial turística com três viagens ao dia, com ponto de controle junto ao portão 10. Desse total, 11 linhas tangenciam o parque pelo eixo da Avenida Brigadeiro Luís Antonio, ligando o centro e a região da Avenida Paulista às zonas sul e oeste; e 49 linhas têm passagem pela Avenida Pedro Álvares Cabral, formando relevante área de conexões regionais (ponto nodal). Dessa avenida, 34 serviços seguem para a região central, sendo 27 pela Avenida 23 de Maio, dois serviços pela Avenida Brasil e outros três pela Avenida Brigadeiro Luís Antonio. Seguem ainda para a Avenida Brigadeiro Luís Antonio três linhas com destino a Pinheiros, Campo Limpo e Itaim Bibi. Para a região sul, nove linhas seguem para a Rua Domingos de Morais, 26 linhas pelo eixo da Avenida Ibirapuera e 15 linhas pelo eixo das avenidas Rubem Berta e Washington Luís, em direção à região de Interlagos. Vale considerar ainda que apenas uma linha tem ponto final junto ao parque, outras oito funcionam em sistema circular na região, e três iniciam viagem a partir do parque como apoio em horário de pico. Destaca-se também que apenas uma linha realiza atendimento pelo eixo da Avenida República do Líbano, e duas linhas tangenciam os portões 7 e 8, sendo uma delas linha de atendimento especial à unidade do Lar Escola São Francisco, da AACD, que circula pela Rua Açores e vias internas do bairro Jardim Lusitânia. O parque é atendido por quatro linhas noturnas que circulam nos principais eixos viários locais, com exceção da Avenida República do Líbano.</p>
			<ul class="links">
				<li>
					<a :href="src('arquivos/pdp-ibirapuera/cad1-acessibilidade.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Linhas de Acesso ao Parque</div>
						<span>260 Kb</span>
					</a>
				</li>
			</ul>
			<figure title="Figura 19 – Infraestrutura de Mobilidade" class="coluna">
				<img :src="fileSrc('1fig19.jpg')" alt="Figura 19 – Infraestrutura de Mobilidade" style="height: auto; width: 100%;">
				<figcaption>Figura 19 – Infraestrutura de Mobilidade</figcaption>
			</figure>
			<p>Quanto à infraestrutura cicloviária, registram-se oito estações para aluguel de bicicleta e três ciclovias ou ciclofaixas permanentes que se ligam ao parque, sendo uma junto à Rua Manuel da Nóbrega (oposta ao portão 9), que permite conexão com a ciclovia da Avenida Paulista e acesso à região dos Jardins; outra junto à Rua França Pinto (oposta aos portões 3 e 4), que permite acesso à regiões de Vila Mariana e Jabaquara; e outra junto aos portões 7 e 8 da Avenida República do Líbano, permitindo acesso às ciclovias das avenidas Brigadeiro Faria Lima e Engenheiro Luís Carlos Berrini, além das regiões de Pinheiros, Itaim Bibi e Santo Amaro. Há também a ativação aos domingos e feriados da ciclofaixa de lazer nas avenidas Brasil e República do Líbano.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.3 Geografia Física</h3>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.3.1 Relevo</h3>
			<p>A região é constituída de relevo majoritariamente plano, apresentando variação positiva de 65 metros de inclinação em extensão de 2 (dois) quilômetros no sentido do espigão da Avenida Paulista, um dos pontos mais elevados da cidade.</p>
			<p>Do ponto de vista topográfico, o Parque está inserido em cotas altimétricas que variam de 720 metros no sentido do Rio Pinheiros, região de Itaim, a 761 metros na direção de Vila Mariana/Vila Clementino.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.3.2 Hidrografia</h3>
			<p>Compondo a bacia hidrográfica do Rio Pinheiros e a microbacia do Sapateiro estão dois córregos que passam pelo Parque Ibirapuera e com ele se relacionam intimamente.</p>
			<p>Com cerca de 6.600 metros de extensão, o Córrego do Sapateiro nasce na rua Rio Grande com a Dr. Mário Cardim, atravessa as avenidas Ibirapuera e 23 de Maio, alimenta os três lagos do parque pela IV Centenário, segue sob as avenidas Santo Amaro e Juscelino Kubitschek e por fim desemboca no Rio Pinheiros.</p>
			<p>Sob a rua Maestro Callia, cruzando por baixo a rua Amâncio de Carvalho  e seguindo pela Rua Astolfo Araújo, encontra-se o Córrego Boa Vista, que se une ao Córrego do Sapateiro no caminho para o rio Pinheiros.</p>
			<figure title="Figura 20 - Mapa de Relevo e Hidrografia. Fonte: Geosampa" class="coluna">
				<img :src="fileSrc('1fig20.jpg')" alt="Figura 20 - Mapa de Relevo e Hidrografia. Fonte: Geosampa" style="height: auto; width: 100%;">
				<figcaption>Figura 20 - Mapa de Relevo e Hidrografia. Fonte: Geosampa</figcaption>
			</figure>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.3.3 Reserva de Mata Atlântica</h3>
			<p>Notam-se algumas manchas de permanência de Mata Atlântica na área do Parque, sendo a totalidade dessas manchas representantes de Bosques Heterogêneos, corredores de adensamento de verde com espécies nativas e exóticas, conforme PMMA (Plano Municipal da Mata Atlântica, 2016). Fora das dependências do Parque, e no raio considerando de 2 (dois) quilômetros, a ocorrência de vegetação de Mata Atlântica se concentra na área em que estão inseridos o Instituto Biológico e a Secretaria de Agricultura, Indústria e Comércio do Estado de São Paulo, circunscrita pelas avenidas Dante Pazzanese, Ibirapuera e Conselheiro Rodrigues Alves.</p>
			<figure title="Figura 21 - Classificação do Parque Ibirapuera de acordo com o Plano Municipal da Mata Atlântica (PMMA)." class="coluna">
				<img :src="fileSrc('1fig21.jpg')" alt="Figura 21 - Classificação do Parque Ibirapuera de acordo com o Plano Municipal da Mata Atlântica (PMMA)." style="height: auto; width: 100%;">
				<figcaption>Figura 21 - Classificação do Parque Ibirapuera de acordo com o Plano Municipal da Mata Atlântica (PMMA).</figcaption>
			</figure>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.3.4 Tipo Socioambiental</h3>
			<p>A região sob análise contém duas classificações distintas de tipos socioambientais de distritos. Na área que abrange o distrito de Vila Mariana, a classificação é de distritos com baixíssima presença de cobertura vegetal em áreas de ocupação urbana consolidada e boa infraestrutura urbana. Já na porção abarcada por Moema, Jardins e Saúde, fala-se na ocorrência de distritos com alto adensamento vertical, onde se concentra a maior parte das ações de controle urbano do uso e ocupação do solo e com melhores condições de infraestrutura da cidade. São distritos que localmente podem apresentar altos valores de cobertura vegetal, representados por parques urbanos - Parque Ibirapuera - e arborização viária.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">4. PROCESSO PARTICIPATIVO DO PLANO DIRETOR</h2>
			<CommentsContext :id="commentId()" :context="'4. PROCESSO PARTICIPATIVO DO PLANO DIRETOR'">
			<p>Os processos participativos fundamentam-se na habilidade de diálogo por meio de conversas flexíveis com os atores sociais, sem condicionar respostas. Nos encontros, geralmente com grupo, é possível experimentar uma validação contínua dos dados gerados pelos participantes, que são beneficiários das mudanças que motivaram as discussões. </p>
			</CommentsContext>
			<p>Deste modo, os métodos de diagnóstico participativo têm forte relação com o planejamento, sob a perspectiva do envolvimento da população local, tendo as pessoas não apenas como fonte de informação, como informantes, mas preponderantemente como cidadãos ativos em ações coletivas, embasados no diálogo e na reflexão sobre sua realidade.</p>
			<p>Para que possa se concretizar, o método participativo se utiliza de diversas ferramentas fundamentadas no diálogo, que atendem a um princípio fundamental: todos os participantes do processo devem ser considerados fonte de informação e de decisão para analisar seus problemas e contribuir com soluções, gerando aprendizado e fortalecimento local.</p>
			<p>A motivação para sua utilização reside no fato de permitir trabalhar com uma linguagem comum ao grupo de discussão, independente do grau de instrução; de possibilitar o levantamento e análise do conhecimento a partir da percepção da comunidade local; e facilitar a visualização e verificação de informações obtidas no processo, pelos participantes.</p>
			<p>Desta forma, o processo participativo do Plano Diretor do Parque Ibirapuera foi contemplado por meio de quatro encontros, pesquisa com usuários realizada pela internet e in loco, fóruns temáticos, audiências e consulta pública. Os três primeiros encontros envolveram apresentações expositivas, oficinas temáticas e debates, e apoiaram-se em metodologias de Leitura da Paisagem e Diagnóstico Temático. Já o último encontro foi dedicado à devolução e validação das informações produzidas pelos participantes.</p>
			<p>A agenda dos encontros foi divulgada por meio do site da prefeitura, redes sociais e de faixas e cartazes distribuídos pelo parque.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>4.1 1º Encontro: Projeto Paisagístico, Arquitetônico e Zoneamento: Usos e Apropriações</h3>
			<p>O primeiro encontro intitulado Projeto Paisagístico, Arquitetônico. Zoneamento: Usos e Apropriações foi realizado em 13 de julho 2019, na sede da UMAPAZ e iniciou-se com uma apresentação expositiva sobre o Parque Ibirapuera, proferida pela Arq. Prof.ª Dr.ª Cássia Mariano. A apresentação O Parque Ibirapuera e o Paisagismo de Teixeira Mendes teve como objetivo apresentar sucintamente a história e a construção do Parque Ibirapuera, as características modernas existentes e os usos dos espaços do parque.</p>
			<p>A oficina temática que se seguiu à apresentação, intitulada Mapa Mental. Percurso no Ibirapuera: Caminho que Impregna Significado teve por objetivo coletar a percepção do usuário e identificar os lugares e os espaços do parque retidos na memória das pessoas que o frequentam. Nesta oficina os participantes deveriam mentalizar um percurso que gostam de percorrer no parque, identificando os elementos que o compõem para representá-lo em um mapa indicativo.  A metodologia adotada é respaldada pelo trabalho de K. Lynch para identificar os elementos da Imagem da Cidade, conceituada ferramenta no processo de planejamento.</p>
			<p>Os mapas mentais elaborados foram representados por desenhos, desenhos e palavras e alguns com predominância de palavras. Foram elaborados 45 mapas mentais, posteriormente afixados na parede. Destes, 13 desenhos foram apresentados e descritos pelos seus autores.</p>
			<figure title="Foto 1 – Exemplo de representação com lago, vegetação e ponte de ferro. Fonte: Oficina Participativa Plano Diretor Parque Ibirapuera. Autor Desconhecido." class="coluna">
				<img :src="fileSrc('1fot01.JPG')" alt="Foto 1 – Exemplo de representação com os lago, vegetação e ponte de ferro. Fonte: Oficina Participativa Plano Diretor Parque Ibirapuera. Autor Desconhecido." style="height: auto; width: 100%;">
				<figcaption>Foto 1 – Exemplo de representação com os lago, vegetação e ponte de ferro. Fonte: Oficina Participativa Plano Diretor Parque Ibirapuera. Autor Desconhecido.</figcaption>
			</figure>
			<figure title="Foto 2 – Exemplo de representação com lago, vegetação, percursos, conjunto arquitetônico. Conforme explicação do próprio autor, o parque se assemelha a um coração, que pulsa para a cidade. Oficina Participativa Plano Diretor Parque Ibirapuera. Autor Desconhecido." class="coluna">
				<img :src="fileSrc('1fot02.JPG')" alt="Foto 2 – Exemplo de representação com lago, vegetação, percursos, conjunto arquitetônico. Conforme explicação do próprio autor, o parque se assemelha a um coração, que pulsa para a cidade. Oficina Participativa Plano Diretor Parque Ibirapuera. Autor Desconhecido." style="height: auto; width: 100%;">
				<figcaption>Foto 2 – Exemplo de representação com lago, vegetação, percursos, conjunto arquitetônico. Conforme explicação do próprio autor, o parque se assemelha a um coração, que pulsa para a cidade. Oficina Participativa Plano Diretor Parque Ibirapuera. Autor Desconhecido.arque Ibirapuera. Autor Desconhecido.</figcaption>
			</figure>
			<p>As descrições procedidas focaram fundamentalmente os elementos naturais do parque (vegetação, água, fauna e luz), os espaços livres, os elementos construídos a vegetação e a espacialidade percebida, que foram as características mais valorizadas pelos participantes. Alguns relatos expressaram forte emotividade na fala, retratando o parque como algo grandioso tanto no aspecto físico, de patrimônio, como no aspecto emocional e sensitivo a partir da percepção espacial a envolver todos os cinco sentidos humanos.</p>
			<p>Os percursos e a acessibilidade universal figuraram como a fundamentação de todos os relatos. O parque é compreendido como espaço para a prática da cidadania. Os verdes que permeiam todo o parque e os elementos da natureza presentes agregam caráter restaurador para a pessoa, essencialmente entendido no lazer ligado ao ócio. O parque, para muitos, é percebido como uma extensão da própria casa, fato que reflete a intensa identidade do usuário. São também bastante importantes os espaços para prática de esporte e de diversão infantil. A conservação, a manutenção e o cuidado para com o parque foram reportados como ações fundamentais para a continuidade da simbologia e da sua identidade.</p>
			<figure title="Foto 3 – Exemplo de representação com lago, vegetação, edifícios isolados e a cidade. Oficina Participativa Plano Diretor Parque Ibirapuera. Autor Desconhecido." class="coluna">
				<img :src="fileSrc('1fot03.JPG')" alt="Foto 3 – Exemplo de representação com lago, vegetação, edifícios isolados e a cidade. Oficina Participativa Plano Diretor Parque Ibirapuera. Autor Desconhecido." style="height: auto; width: 100%;">
				<figcaption>Foto 3 – Exemplo de representação com lago, vegetação, edifícios isolados e a cidade. Oficina Participativa Plano Diretor Parque Ibirapuera. Autor Desconhecido.</figcaption>
			</figure>
			<figure title="Foto 4 – Exemplo de representação apenas com vegetação. Oficina Participativa Plano Diretor Parque Ibirapuera. Autor Desconhecido." class="coluna">
				<img :src="fileSrc('1fot04.JPG')" alt="Foto 4 – Exemplo de representação apenas com vegetação. Oficina Participativa Plano Diretor Parque Ibirapuera. Autor Desconhecido." style="height: auto; width: 100%;">
				<figcaption>Foto 4 – Exemplo de representação apenas com vegetação. Oficina Participativa Plano Diretor Parque Ibirapuera. Autor Desconhecido.</figcaption>
			</figure>
			<p>Os elementos naturais vegetação, lago, fauna, córrego e luz  predominaram em 93% dos mapas mentais, sendo que um mesmo mapa mental continha um ou mais elementos representados simultaneamente.</p>
			<!--Tabela :dados='tabela_1'></Tabela-->
			<figure class="coluna">
				<table><tr><td><p><b>Elementos Naturais</b></p></td><td colspan="2"><p><b>Predominância</b></p></td></tr><tr><td><p>Vegetação</p></td><td><p>34/45</p></td><td><p>76%</p></td></tr><tr><td><p>Água – Lago</p></td><td><p>33/45</p></td><td><p>73%</p></td></tr><tr><td><p>Fauna</p></td><td><p>17/45</p></td><td><p>38%</p></td></tr><tr><td><p>Água – Córrego do Sapateiro</p></td><td><p>8/45</p></td><td><p>18%</p></td></tr><tr><td><p>Luz / Sol</p></td><td><p>4/45</p></td><td><p>9%</p></td></tr></table>
				<figcaption>Tabela 1 – Dados referentes aos Elementos Naturais do Parque Ibirapuera, coletado na Oficina Participativa Mapa Mental: Caminho que Impregna Significado. Fonte: PMSP.</figcaption>
			</figure>
			<p>Na totalidade dos desenhos a vegetação e o lago estavam proporcionalmente equivalentes. 8% dos mapas-mentais não representaram o Lago na imagem e 4% representaram o Parque Ibirapuera exclusivamente através do lago. Vale destacar que 38% dos mapas mentais destacaram a fauna do parque.</p>
			<p>Espaços livres diversos com usos distintos surgiram em 73% dos mapas mentais. Invariavelmente um mesmo mapa mental apresentava mais de um espaço livre com forte significado para o usuário do parque. Dos desenhos levantados, destacaram-se os seguintes espaços:</p>
			<figure class="coluna">
				<table><tr><td><p><b>Espaços livres</b></p></td><td colspan="2"><p><b>Predominância</b></p></td></tr><tr><td><p>Caminhos e percursos no parque</p></td><td><p>20/45</p></td><td><p>44%</p></td></tr><tr><td><p>Campo Experimental / Escola Jardinagem</p></td><td><p>11/45</p></td><td><p>24%</p></td></tr><tr><td><p>Ciclovias</p></td><td><p>3/45</p></td><td><p>20%</p></td></tr><tr><td><p>Praça da Paz</p></td><td><p>9/45</p></td><td><p>20%</p></td></tr><tr><td><p>Viveiro Manequinho Lopes</p></td><td><p>8/45</p></td><td><p>18%</p></td></tr><tr><td><p>Quadras esportivas e campo de futebol</p></td><td><p>7/45</p></td><td><p>16%</p></td></tr><tr><td><p>Parquinho</p></td><td><p>5/45</p></td><td><p>11%</p></td></tr><tr><td><p>Serraria / Praça Burle Marx</p></td><td><p>5/45</p></td><td><p>11%</p></td></tr><tr><td><p>Pista de cooper</p></td><td><p>2/45</p></td><td><p>4%</p></td></tr><tr><td><p>Jardim dos Sentidos</p></td><td><p>2/45</p></td><td><p>4%</p></td></tr><tr><td><p>Alameda de Bambus</p></td><td><p>2/45</p></td><td><p>4%</p></td></tr></table>
				<figcaption>Tabela 2 – Dados relativos aos espaços livres do Parque Ibirapuera, coletados na Oficina Participativa Mapa Mental: Caminho que Impregna Significado. Fonte: PMSP.</figcaption>
			</figure>
			<p>Elementos construídos foram representados em 76% dos mapas mentais, com destaque para:</p>
			<figure class="coluna">
				<table><tr><td><p><b>Elementos construídos</b></p></td><td colspan="2"><p><b>Predominância</b></p></td></tr><tr><td><p>Conjunto Arquitetônico</p></td><td><p>16/45</p></td><td><p>36%</p></td></tr><tr><td><p>Planetário</p></td><td><p>13/45</p></td><td><p>29%</p></td></tr><tr><td><p>Escola Municipal de Astrofísica</p></td><td><p>5/45</p></td><td><p>11%</p></td></tr><tr><td><p>Oca</p></td><td><p>9/45</p></td><td><p>20%</p></td></tr><tr><td><p>Ponte de Ferro</p></td><td><p>8/45</p></td><td><p>18%</p></td></tr><tr><td><p>Umapaz</p></td><td><p>6/45</p></td><td><p>13%</p></td></tr><tr><td><p>Cecco</p></td><td><p>4/45</p></td><td><p>9%</p></td></tr><tr><td><p>Auditório</p></td><td><p>3/45</p></td><td><p>7%</p></td></tr><tr><td><p>Marquise</p></td><td><p>2/45</p></td><td><p>4%</p></td></tr><tr><td><p>Construções diversas</p></td><td><p>2/45</p></td><td><p>4%</p></td></tr></table>
				<figcaption>Tabela 3 – Dados relativos aos elementos construídos do Parque Ibirapuera, coletados na Oficina Participativa Mapa Mental: Caminho que Impregna Significado. Fonte: PMSP.</figcaption>
			</figure>
			<p>O conjunto arquitetônico foi representado de formas variadas em 36% dos desenhos. Algumas vezes com a marquise e todos os pavilhões que o compõemoutras vezes com a marquise e dois ou mais pavilhões associados. Quando mencionada no contexto do Conjunto Arquitetônico, a Oca sempre aparecia associada ao Auditório, mas esta foi representada isoladamente e destacada do conjunto em 20% dos desenhos.</p>
			<p>De maneira semelhante o Planetário revelou-se um elemento retido na memória dos participantes da oficina, surgiu em 29% dos mapas-mentais, por vezes isoladamente, por vezes associado à Escola de Astrofísica em11% do total dos mapas.</p>
			<p>A predominância da Oca e do Planetário frente às demais edificações (excluindo-se o Conjunto Arquitetônico), é fato que identifica seu forte simbolismo como arquitetura do parque. Não houve mapa-mental representando isoladamente o Auditório e seus espaços livres associados, ou outros edifícios emblemáticos.</p>
			<p>Os usos atribuídos ao parque foram destacados em 64% dos mapas mentais por meio de palavras como cultura, arte, infância, contemplação, esporte, oficinas, bem como desenhos de crianças brincando, bicicletas, patins, etc., sendo que um mesmo mapa poderia conter um ou mais destes usos representados. Nos desenhos em que a UMAPAZ – Universidade Aberta do Meio Ambiente e Cultura de Paz, Canteiro Experimental / Escola de Jardinagem,  foram representados, estes  foram interpretados como Uso Educacional, uma vez que pertence à Coordenação de Educação Ambiental e Cultura de Paz da Secretaria do Verde e Meio Ambiente.</p>
			<figure class="coluna">
				<table><tr><td><p><b>Usos</b></p></td><td colspan="2"><p><b>Predominância</b></p></td></tr><tr><td><p>Educacional</p></td><td><p>14/45</p></td><td><p>31%</p></td></tr><tr><td><p>Cultural</p></td><td><p>13/45</p></td><td><p>29%</p></td></tr><tr><td><p>Lazer recreativo</p></td><td><p>11/45</p></td><td><p>24%</p></td></tr><tr><td><p>Lazer esportivo</p></td><td><p>10/45</p></td><td><p>22%</p></td></tr><tr><td><p>Ócio</p></td><td><p>7/45</p></td><td><p>16%</p></td></tr></table>
				<figcaption>Tabela 4 – Dados de Uso no Parque Ibirapuera, coletados na Oficina Participativa Mapa Mental: Caminho que Impregna Significado. Fonte: PMSP.</figcaption>
			</figure>
			<p>46% dos participantes apresentaram uma visão ou memória mais abrangente do parque, retratando diversos elementos simultaneamente e com proporções parecidas, como áreas verdes, lago, caminhos e edificações.</p>
			<p>Por outro lado, 54% dos participantes representaram o parque a partir de uma perspectiva mais específica, evidenciando determinados elementos. Por exemplo, o Lago e as Áreas Verdes apareceram justapostos e em destaque em 30% desses desenhos.</p>
			<p>A interface entre o parque e a cidade esteve presente em 20% dos mapas mentais, demonstrando que o parque também é percebido de forma integrada com o seu entorno, influenciando ou sendo influenciado pelo território que o cerca.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>4.2 2º Encontro: Relação com o Entorno e Gestão Ambiental</h3>
			<p>O segundo encontro, intitulado <i>Relação com o Entorno e Gestão Ambiental</i>, envolveu uma oficina temática e uma apresentação expositiva seguida de debate, na sede da UMAPAZ.</p>
			<p>A oficina temática <i>“Perspectivas do Parque e da Cidade”</i> teve como objetivo capturar a sensibilidade do usuário de vistas emblemáticas do Parque. Para isso os participantes (80 pessoas) se reuniram em frente ao Auditório e foram divididos em 4 grupos e encaminhados  para os seguintes locais: Ponte de Ferro, Entorno do Auditório, Praça da Serpente (também conhecida como Praça das Cobras) e Praça da Paz. </p>
			<p>A partir desses pontos os participantes foram orientados a fotografar vistas do parque e do perfil da cidade e descrever por meio de palavras, sua sensibilidade em relação à paisagem fotografada. A atividade durou aproximadamente uma hora, no final da tarde, entre às 18h e 19h.</p>
			<figure title="Foto 5 – Perspectiva a partir da Ponte de Ferro sobre o lago. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido." class="coluna">
				<img :src="fileSrc('1fot05.jpeg')" alt="Foto 5 – Perspectiva a partir da Ponte de Ferro sobre o lago. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido." style="height: auto; width: 100%;">
				<figcaption>Foto 5 – Perspectiva a partir da Ponte de Ferro sobre o lago. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido.</figcaption>
			</figure>
			<figure title="Foto 6 – Perspectiva da área próxima ao Auditório. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido." class="coluna">
				<img :src="fileSrc('1fot06.jpeg')" alt="Foto 6 – Perspectiva da área próxima ao Auditório. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido." style="height: auto; width: 100%;">
				<figcaption>Foto 6 – Perspectiva da área próxima ao Auditório. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido.</figcaption>
			</figure>
			<figure title="Foto 7 – Perspectiva a partir da Praça da Serpente. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido." class="coluna">
				<img :src="fileSrc('1fot07.jpeg')" alt="Foto 7 – Perspectiva a partir da Praça da Serpente. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido." style="height: auto; width: 100%;">
				<figcaption>Foto 7 – Perspectiva a partir da Praça da Serpente. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido.</figcaption>
			</figure>
			<figure title="Foto 8 – Perspectiva a partir da Praça da Serpente. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido." class="coluna">
				<img :src="fileSrc('1fot08.jpeg')" alt="Foto 8 – Perspectiva a partir da Praça da Serpente. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido." style="height: auto; width: 100%;">
				<figcaption>Foto 8 – Perspectiva a partir da Praça da Serpente. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido.</figcaption>
			</figure>
			<figure title="Foto 9 – Perspectiva da Praça da Paz. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido." class="coluna">
				<img :src="fileSrc('1fot09.jpeg')" alt="Foto 9 – Perspectiva da Praça da Paz. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido." style="height: auto; width: 100%;">
				<figcaption>Foto 9 – Perspectiva da Praça da Paz. Oficina participativa Perspectivas do Parque e da Cidade. Autor desconhecido.</figcaption>
			</figure>
			<p>Terminado o percurso, os quatro grupos foram direcionados para a UMAPAZ onde deram continuidade à oficina, escrevendo em cartazes sensações e sentimentos que afloraram enquanto fotografavam.</p>
			<figure title="Foto 10 – Descrição das fotografias através de sentimentos e sensações. Oficina participativa Perspectivas do Parque e da Cidade. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('1fot10.jpeg')" alt="Foto 10 – Descrição das fotografias através de sentimentos e sensações. Oficina participativa Perspectivas do Parque e da Cidade. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 10 – Descrição das fotografias através de sentimentos e sensações. Oficina participativa Perspectivas do Parque e da Cidade. Fonte: PMSP.</figcaption>
			</figure>
			<p>Ao analisar as palavras escritas nos 12 cartazes que foram produzidos observou-se que os participantes também descreveram elementos e características do Parque, além dos sentimentos e sensações, o que, de certa forma, acabou enriquecendo a atividade e a discussão que se seguiu durante a apresentação dos cartazes. </p>
			<p>Interessante notar é que, para a maioria dos presentes, frequentar o parque à noite foi uma experiência nova. Alguns disseram que não estariam ali aquele horário se não fosse pela oficina. Também foi pontuado reiteradas vezes que o parque é um dos poucos lugares da cidade onde se pode contemplar o horizonte.</p>
			<p>A partir do material produzido criou-se uma nuvem de palavras que apresenta todas as sensações e características do Parque que foram mencionadas pelos participantes, onde se destacam as palavras mais citadas pelos grupos.</p>
			<figure title="Figura 22 – Nuvem de palavras com sensações e características do Parque apontadas pelos participantes a partir das fotografias de vistas emblemáticas do Ibirapuera. Oficina participativa Perspectivas do Parque e da Cidade. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('1fig22.jpg')" alt="Figura 22 – Nuvem de palavras com sensações e características do Parque apontadas pelos participantes a partir das fotografias de vistas emblemáticas do Ibirapuera. Oficina participativa Perspectivas do Parque e da Cidade. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 22 – Nuvem de palavras com sensações e características do Parque apontadas pelos participantes a partir das fotografias de vistas emblemáticas do Ibirapuera. Oficina participativa Perspectivas do Parque e da Cidade. Fonte: PMSP.</figcaption>
			</figure>
			<p>Do total de 128 palavras escritas pelos participantes retratando sensações, elementos ou características do Ibirapuera, as mais frequentes foram acessibilidade e segurança. Nota-se também que a oficina criou oportunidade para que fossem marcados diversos aspectos positivos do Parque como, local de refúgio, integração e preservação de fauna e flora. Além disso, as fotografias inspiraram ainda sentimentos como conexão, paz e energia. Por outro lado, registraram-se aspectos negativos, como conflitos, e também algumas demandas, como a necessidade de melhorar a segurança, a sinalização e a iluminação.</p>
			<p>Por fim, houve uma palestra sobre Gestão Ambiental, proferida por técnico da UMAPAZ, com vistas a subsidiar uma discussão sobre o tema aplicada à realidade do Parque. Nessa ocasião, os participantes puderam tirar dúvidas sobre diferentes aspectos relacionados à gestão ambiental e Plano Diretor do Parque, como por exemplo, a necessidade de haver um bom diagnóstico socioambiental do Ibirapuera ou até mesmo questões mais específicas relacionadas à gestão de resíduos.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>4.3 3º Encontro: Caminhada Programada e Bases Naturais e Usos do parque.</h3>
			<p>O terceiro encontro, intitulado <i>Caminhada Programada e Bases Naturais e Usos do Parque Ibirapuera</i> foi realizado no sábado, 20 de julho de 2019, das 9:00 às 15:30 horas, com cerca de 90 participantes.</p>
			<figure title="Figura 23 – Caminhos percorridos na Oficina Caminhada Programada no Parque Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('1fig23.png')" alt="Figura 23 – Caminhos percorridos na Oficina Caminhada Programada no Parque Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 23 – Caminhos percorridos na Oficina Caminhada Programada no Parque Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<p>A oficina temática denominada Caminhada Programada partiu da frente do Auditório por 4 percursos distintos do parque. Com facilitação de técnicos da SVMA, foi feita uma imersão orientada na complexidade do parque, conflitos de usos e aspectos ambientais. Os participantes deveriam anotar no  mapa do parque aspectos que julgassem positivos ou negativos e as sensações boas e ruins que surgissem ao longo do percurso.</p>
			<p>O resultado foram 268 relatos que, planilhados e classificados, remetem às seguintes categorias:</p>
			<figure title="Gráfico 1 – Elementos do Parque Ibirapuera destacados pelos participantes na Oficina Caminhada Programada. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('1graf01.png')" alt="Gráfico 1 – Elementos do Parque Ibirapuera destacados pelos participantes na Oficina Caminhada Programada. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Gráfico 1 – Elementos do Parque Ibirapuera destacados pelos participantes na Oficina Caminhada Programada. Fonte: PMSP.</figcaption>
			</figure>
			<p>As edificações estiveram presentes em 14% das colocações dos participantes, das quais destacaram-se a Marquise e Oca. Nestas, os aspectos negativos (71%) prevaleceram sobre os positivos (29%). Sobressaíram a necessidade de reformas e conservação das edificações e entorno (áreas verdes, bebedouros, limpeza). O aspecto positivo abordado foi a vivência múltipla e cultural que o espaço inspira, embora deva ser regrada.</p>
			<p>As sensações representaram 15% do total das colocações dos participantes, sendo que as sensações positivas (73%) superaram as negativas (27%). Como sensações positivas foram mencionadas <i>reconexão, universo paralelo, diversidade, contemplação, tranquilidade, vontade de fotografar, paz, ar puro, conforto, conexão, coexistência, bem estar, espiritualidade</i>. Dentre as sensações negativas estavam <i>poluição sonora (entorno da Oca e Auditório), tristeza (borda do Lago), conflito, desconexão.</i></p>
			<p>Os espaços livres foram mencionados em 33% das colocações, destacando-se da seguinte forma: </p>
			<figure title="Gráfico 2 – Predominância dos espaços livres destacados pelos participantes na Oficina Caminhada Programada. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('1graf02.png')" alt="Gráfico 2 – Predominância dos espaços livres destacados pelos participantes na Oficina Caminhada Programada. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Gráfico 2 – Predominância dos espaços livres destacados pelos participantes na Oficina Caminhada Programada. Fonte: PMSP.</figcaption>
			</figure>
			<p>Dentre os espaços livres foram mencionados mais vezes o Jardim dos Sentidos<a title='Também conhecido como Jardim dos Cegos ou Piquenique.' style='cursor: help;'><sup>2</sup></a>(20%), seguido do Lago e Córrego do Sapateiro (16%) e das Vias principais do parque (13%). </p>
			<p>Os relatos demonstram que o Jardim dos Sentidos aparece como área potencial para o ócio, convivência e contemplação por meio de relatos como <i>som dos pássaros, frescor, adaptação, vários parques em um, sensação de estar fora da cidade, área muito gostosa e arborizada, tranquilidade, paz, Nunca tinha vindo aqui!, som dos passarinhos, silêncio, confraternização</i>. Também apontam para ações de conservação como sinalização, limpeza, colocação de lixeiras.</p>
			<p>O Córrego do Sapateiro e Lago, associado ao Jardim dos Sentidos, surge como área carente de ações voltadas à despoluição associada à gestão de resíduos do parque. Os relatos mencionaram palavras como <i>tristeza, peixes mortos, qualidade da água ruim, muito lixo, revitalização da mata ciliar, poluído, imundo, Cisnes. O lago é confortável para eles?.</i></p>
			<p>As Vias de circulação principal do parque (pertencentes ao chamado Anel Principal de Circulação) inspiraram sensações ruins e demanda por ações que ordene seu uso. Surgiram relatos como <i>disciplinar, corredores, ciclistas e pedestres, sensação de insegurança, desorganização, perigo, conflito, requalificação, sinalização</i>. Não houve relatos positivos em relação a este espaço.</p>
			<p>Os demais espaços aparecem com menor ocorrência. Em síntese, podemos afirmar que a Ponte de Ferro é entendida como a fronteira em que os ruídos da cidade não são percebidos (<i>não se ouve barulho, ar puro, liberdade, ponto turístico, tranquilidade</i>), mas que necessita de iluminação e acessibilidade. As quadras esportivas necessitam de ações de conservação. A Praça da Paz com sua diversidade e inspiração ao ócio trouxe boas percepções (<i>sensação de diversidade, muito legal, paz, apropriação do parque pela população</i>) e que, todavia necessita de sinalização dos equipamentos próximos (<i>sanitários, lanchonetes, bebedouros</i>). A Serraria e Praça Burle Marx inspirou tanto sentimentos como <i>força e aprendizado, esporte, lazer, diversidade cultural</i>, quanto sentimentos de <i>caos, esporte</i> (no momento da caminhada a praça encontrava-se tomada por assessorias esportivas), e necessidade de conservação (<i>piso mal conservado</i>). Quanto ao Viveiro Manequinho Lopes prevaleceram as palavras <i>abandono, descuido e degradação.</i></p>
			<p>Os demais espaços livres (Bosque entre os portões 7 e 8, Cachorródromo, Jardim das Esculturas, Parquinho, Praça do Porquinho, Campo Experimental e Cooper) foram registrados uma ou duas vezes cada um, somando 11% dos relatos.</p>
			<p>Os relatos pertinentes à melhoria da Gestão do parque foram os mais significativos, sendo 38% dos 268 relatos.</p>
			<p>A gestão ambiental foi apontada na necessidade de tratamento de resíduos que o parque produz, tanto na prevalência de plásticos, quanto na disponibilização de lixeiras, limpeza. Os cuidados com a fauna surgiu referente à mortandade de aves por colisão nos vidros das edificações. Os cuidados com solo e pontos de erosão também foram apontados. Essas demandas, analisadas à luz dos resultados da 2ª Oficina, onde o Uso Educacional foi evidenciado, apontam para ações de Educação Ambiental.</p>
			<p>A melhoria da estrutura de apoio ao usuário surge da necessidade de reforma do edifício da antiga Administração do parque, na instalação de mais bancos, bebedouros, sanitários,boas opções de alimentação, além da regularização dos cerca de 160 vendedores ambulantes do parque.</p>
			<p>A acessibilidade e sinalização surgem com frequência nos relatos, buscando a conscientização quanto à diversidade e o respeito social. Após a chegada na UMAPAz  os técnicos de SVMA apresentaram as bases naturais (Água, Solo, Vegetação, Fauna) e de Usos (Cultural, Lazer Recreativo, Ócio, Educacional) e Campo Experimental, explicitando a complexidade envolvida na gestão do Parque Ibirapuera.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>4.4 Devolutiva do processo participativo à população</h3>
			<p>Finalizando esta etapa do processo participativo foi apresentada a devolutiva das Oficinas aos participantes. O evento ocorreu na sede da UMAPAZ na segunda-feira, 22 de julho de 2019, das 18:10 às 21:20 horas.</p>
			<p>A Coordenadora de Gestão de Parques e Biodiversidade Municipal – CGPABI, iniciou a noite com uma síntese dos 3 encontros,  trazendo alguns dos resultados obtidos, sobretudo da 1ª e 2ª Oficinas. Apresentou um cronograma das próximas etapas para conclusão do Plano Diretor e abriu espaço para que os presentes pudessem debater e se manifestar sobre o processo de construção do documento.</p>
			<p>Manifestaram-se o Conselho Gestor do Parque Ibirapuera – CGPI, a Construcap e demais usuários do parque, com suas colocações e dúvidas sendo respondidas pela Secretaria do Verde e Meio Ambiente.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">5. PERIODICIDADE DA REVISÃO INTEGRATIVA</h2>
			<CommentsContext :id="commentId()" :context="'5. PERIODICIDADE DA REVISÃO INTEGRATIVA'">
			<p>Como mencionado no início, esse plano diretor deve ser revisado e atualizado após dez anos de sua publicação, pois o ambiente sofre constante influência de fatores que são extremamente fluidos ao longo do tempo. Nesse sentido, prevê-se até mesmo a atualização e fortalecimento do sistema de indicadores inicialmente propostos.</p>
			</CommentsContext>
			<p>Com isso, o presente Plano Diretor deve mensurar e avaliar periodicamente dados e informações, de modo que esse processo transcorra de forma transparente, com a participação do Conselho Gestor do parque e, na medida do possível, Dos demais representantes da sociedade civil, contando com um amplo debate nas diferentes instâncias de controle institucional.</p>
			<p>O Monitoramento de como está evoluindo este processo e finalmente, a avaliação da situação do parque, consiste num ciclo que se moderniza constantemente e de modo a sempre repensar ações passadas para a definição de ações futuras.</p>
			<p>Para esse processo, há que se oferecer publicidade e amplo debate com a sociedade civil e entidades públicas e privadas, construindo um espaço de multiplicidade de ideias e contrapontos que deverão ser absorvidos no processo que resultará em um novo e atualizado marco legal de diretrizes do parque.</p>
			<p>Considerando que este Plano está sendo elaborado sob o cenário de um processo de concessão. Há ainda que se utilizar e embasar com dados obrigatórios da concessão tal como pesquisas com usuário, relatórios de prestação de contas e demais indicadores que consigam propiciar um debate mais qualificado e enriquecedor ao processo revisional.</p>
			<p>Ao fim dos ciclos decenais, o produto concebido se configurará de um modo mais intersetorial e democrático, estando mais condizente com a demanda da sociedade que é e sempre deverá ser a razão de se buscar ofertar cada vez mais e melhores serviços e experiências na cidade, destacadamente em espaços de Parques Urbanos.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">6. APONTAMENTOS FINAIS</h2>
			<CommentsContext :id="commentId()" :context="'6. APONTAMENTOS FINAIS'">
			<p>Como pôde ser observado, o Parque Ibirapuera é um equipamento de extrema relevância para a população. Desde sua concepção havia o objetivo de ancorar grandes projetos e consolidar pensamentos norteadores. Tal importância e peso revela-se também pela sua localização: uma das áreas mais nobres e dotadas de infraestrutura da cidade. Se para alguns o Parque é um local de visitas rotineiras para caminhar, exercitar-se, estudar, trabalhar, por sua abrangência metropolitana, outros o visitam como um passeio, seja com a família, amigos, para ver uma exposição, sessão no Planetário, etc.</p>
			</CommentsContext>
			<p>Dessa forma, se mostra necessário ter seus princípios, diretrizes e metas bem estabelecidos para possibilitar o desenvolvimento adequado do parque ao longo dos anos.</p>
			<p>Com base no exposto, este plano diretor objetiva atuar no monitoramento com base na estrutura conceitual de intersetorialidade e impacto multidimensional segundo a abordagem de Pressão-Estado-Resposta.</p>
			<p>Nessa linha, cria-se um sistema de monitoramento para o Plano Diretor, uma vez que torna possível a visualização de uma estrutura orgânica de mensuração de ações e resultado. Além do mais, quantifica-se o grau de esforço e sucesso de uma ação de uma determinada temática, pois ao estar alinhada à diretriz e com mensuração por meio do indicador equaciona-se uma fórmula lógica de mensuração de resultados práticos.</p>
			<p>Uma vez que o tema “gestão de parques urbanos” ainda é pouco explorado pela comunidade técnica e acadêmica, busca-se também construir um paradigma de gestão além de inserir na pauta de avaliação e acompanhamento a necessidade de acompanhar continuamente o comportamento dos fenômenos relativos ao parque Ibirapuera.</p>
			<p>Com a aplicação do modelo de indicadores propostos, pode-se identificar que o sistema poderia ser dotado para futuros modelos de concessão de parques no país.</p>
			<p>Analisando a literatura sobre os sistemas de gerenciamento ambiental, conclui-se que há uma tendência em se correlacionar esse gerenciamento com a qualidade e segurança da abordagem da sustentabilidade, fomentando um terreno fértil ao desenvolvimento do monitoramento e controle como a que está sendo proposta.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h1 class="titulo" indent="1">CADERNO II</h1>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">1. APRESENTAÇÃO</h2>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">2. BASES NATURAIS DO PARQUE</h2>
			<Comments :attr="{id:commentId(), context:'2. BASES NATURAIS DO PARQUE'}" v-if="estaConsulta.ativo == 1"></Comments>
			<!-- <CommentsContext :id="commentId()" :context="'6. APONTAMENTOS FINAIS'"></CommentsContext> -->

			<h3>2.1. Processo de mapeamento das Bases Naturais do Parque</h3>
			<p>O mapeamento das bases naturais do Parque Ibirapuera, isto é, água, solo, vegetação e fauna, foi realizado durante por técnicos da SVMA da Divisão de Produção e Herbário Municipal – DPHM, da Divisão da Fauna Silvestre – DFS, da Escola Municipal de Jardinagem – EMJ e o Diretor do Parque ibirapuera.</p>
			<p>De acordo com o conhecimento adquirido dos especialistas, foram mapeados diversos elementos relacionados às bases naturais, conforme indicado abaixo:</p>
			<ul>
				<li><b>Água</b>: Lago, Córrego do Sapateiro, área passível de alagamento, Estação Flotação e Remoção de Flutuantes – EFRF, vertedouro, bebedouro, aspersor.</li>
				<li><b>Solo</b>: Erosão, Solo compactado.</li>
				<li><b>Vegetação</b>: Bosque misto, Bosque de Eucalipto, Agrupamento de árvores ou exemplar significativo, Canteiros, gramados e arborização esparsa, Jardins temáticos, Viveiro e Campo Experimental, Campo de Várzea e Vegetação Aquática, Arborização em área impermeabilizada (estacionamento).</li>
				<li><b>Fauna</b>: Distribuição restrita, Abrigo e reprodução de rapinantes, Abrigo e reprodução de aves aquáticas nativas, Abrigo, alimentação e reprodução de anatídeos, Abrigo e reprodução de cágados, Roedores Sinantrópicos.</li>
			</ul>
			<p>Tais elementos foram identificados e desenhados sobre mapas-base do Parque Ibirapuera, com possibilidade da participação de vários técnicos simultaneamente, que discutiram entre si a fim de se chegar a informações mais qualificadas e de forma consensual. Posteriormente os mapas foram digitalizados em ambiente SIG (Sistema de Informação Geográfica) e finalmente validados durante um novo encontro, cabendo pequenos ajustes e complementações aos mapas gerados.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>2.2 Água – Diagnóstico</h3>
			<p>Os elementos relacionados à água no Parque Ibirapuera que foram mapeados podem ser observados na figura abaixo. Observa-se que além da identificação dos corpos d’água do Parque e de equipamentos como, vertedouros e bebedouros, foram identificadas ainda regiões que requerem cuidados específicos relacionados à saúde do Parque e proteção de suas águas. Chamam a atenção as áreas passíveis de alagamento e as porções do lago suscetíveis a assoreamento.</p>
			<figure title="Figura 1 – Água – diagnóstico dos espaços e elementos relacionados à água. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig01.png')" alt="Figura 1 – Água – diagnóstico dos espaços e elementos relacionados à água. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 1 – Água – diagnóstico dos espaços e elementos relacionados à água. Fonte: PMSP.</figcaption>
			</figure>
			<p>O Parque está localizado na bacia hidrográfica da Vila Mariana e tem como principal afluente o córrego do Sapateiro que, juntamente com o córrego Boa Vista (intermitente), alimenta os três lagos do Parque e por fim deságua no rio Pinheiros. </p>
			<figure title="-Foto 1.1 – Lagos do Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot01.1.jpg')" alt="Foto 1.1 – Lagos do Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 1.1 – Lagos do Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
				<figure title="Foto 1.2 – Lagos do Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot01.2.jpg')" alt="Foto 1.2 – Lagos do Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 1.2 – Lagos do Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<p>A maior parcela da carga poluidora recebida pelos lagos provém do córrego do Sapateiro (lançamentos de esgotos não tratados), pois não existem lançamentos permanentes de esgotos no interior do Parque. Além disso, é preciso considerar as cargas originárias da poluição difusa, quando a chuva lava a atmosfera e a superfície do solo, trazendo para os corpos d’água parte da poluição que intercepta em seu percurso. Essa carga provém, portanto da poluição do ar e de todo tipo de material disperso pela superfície da bacia que pode ser carregado pela água (lixo, poeira, resíduos de borracha de pneus, óleo, solo erodido, etc.).</p>
			<p>O Parque conta, desde o final dos anos 2000, com uma estação de tratamento da SABESP no córrego do Sapateiro, a montante do Lago 01, que trata a água do córrego por um sistema de flotação – Estação de Flotação e Remoção de Flutuantes (EFRF).</p>
			<p>Contudo, esse processo de tratamento não é suficiente para garantir uma qualidade de água adequada, já que dados de monitoramento realizados entre 2008 e 2011 constataram processo de eutrofização, perda de biodiversidade e poluição dos sedimentos por arsênico, cobre, cromo, chumbo e zinco. Além disso, o limite da EFRF é de 90 L/s, sendo que acima desse valor, em grandes eventos de chuva, a EFRF é desligada e para de funcionar, de modo que a água contaminada passa por ela, indo diretamente para os lagos.</p>
			<figure title="Foto 2 – EFRF da SABESP instalada no Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot02.jpg')" alt="Foto 2 – EFRF da SABESP instalada no Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 2 – EFRF da SABESP instalada no Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<p>Em 2017 por meio do Termo de doação nº 009/SVMA/2017, deu início à realização um projeto gráfico de aspectos sanitários, arquitetônico e paisagístico de melhoria de qualidade das águas dos corpos hídricos do Parque Ibirapuera através de biotecnologias baseadas em jardins filtrantes, que consiste na utilização de plantas como agentes de purificação das águas.</p>
			<p>De acordo com o projeto, é preciso garantir a continuidade e desempenho do tratamento da EFRF, realizando adicionalmente o tratamento físico e gerenciamento dos fluxos de água, bem como promover a recirculação da água em vários pontos dos lagos para garantir a correta oxigenação. Por fim, a instalação dos jardins filtrantes garantiriam a retenção de partículas poluentes, o tratamento de agentes patogênicos e dos compostos ricos em carbono, nitrogênio e fósforo.</p>
			<figure title=" Foto 3 – Jardim filtrante em Nanterre, França. Fonte: Phytorestore." class="coluna">
				<img :src="fileSrc('2fot03.png')" alt=" Foto 3 – Jardim filtrante em Nanterre, França. Fonte: Phytorestore." style="height: auto; width: 100%;">
				<figcaption> Foto 3 – Jardim filtrante em Nanterre, França. Fonte: Phytorestore.</figcaption>
			</figure>
			<p>Associadas aos lagos estão as suas margens, que devem ser recuperadas e entendidas como locais privilegiados de desfrute do ambiente, devendo ser assegurada sua proteção e manutenção. Atualmente, podem ser observadas ao redor dos lagos margens sob diferentes condições: (i) íngremes com vegetação arbustiva; (ii) íngremes com vegetação rasteira; e (iii) inclinadas com vegetação rasteira. É importante que elas estejam protegidas de acordo com suas características topográficas e que sejam estabelecidas áreas de transição ambiental nas zonas ripárias de acordo com o nível da água e fauna.</p>
			<p>Por fim, é preciso também readequar determinadas porções das margens, por meio de terraplenagem, para que os lagos comportem as vazões pluviais, mitigando assim as inundações dos bairros a jusante.</p>
			<p>Com isso, garante-se o fortalecimento das margens contra erosão, a filtragem do escoamento superficial e consequente aumento da qualidade da água, criação de diferentes habitats ecológicos (seco, semi-saturado e saturado) e a coexistência entre atividades de recreação e proteção de biodiversidade.</p>
			<figure title="Foto 4.1 – Margens dos lagos. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot04.1.jpg')" alt="Foto 4.1 – Margens dos lagos. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 4.1 – Margens dos lagos. Fonte: PMSP.</figcaption>
			</figure>
			<figure title="Foto 4.2 – Margens dos lagos. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot04.2.jpg')" alt="Foto 4.2 – Margens dos lagos. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 4.2 – Margens dos lagos. Fonte: PMSP.</figcaption>
			</figure>
			<p>Espera-se, com isso, uma aproximação dos visitantes ao ambiente aquático, com lagos mais atrativos, sem negligenciar os quesitos de segurança.</p>
			<figure title="Foto 5 – Projeto da Phytorestore - cenário proposto. Fonte: Phytorestore." class="coluna">
				<img :src="fileSrc('2fot05.jpg')" alt="Foto 5 – Projeto da Phytorestore - cenário proposto. Fonte: Phytorestore." style="height: auto; width: 100%;">
				<figcaption>Foto 5 – Projeto da Phytorestore - cenário proposto. Fonte: Phytorestore.</figcaption>
			</figure>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>2.2.1 Diretrizes gerais</h3>
			<p>A questão dos recursos hídricos do Parque é um de seus pontos sensíveis, tanto pela poluição da água do lago, quanto ao abastecimento como um todo, as diretrizes gerais elencadas abaixo deverão ainda ser definidas no âmbito do fórum que tratará do tema, bem como as metas que fazem parte do apêndice deste Plano.</p>
			<ul>
				<li>Comunicar a SABESP sobre eventual poluição dos lagos proveniente de ligações clandestinas de esgotos a montante do Parque, nas galerias e condutos de águas pluviais que aportam ao Parque e/ou à EFRF do córrego do Sapateiro, ou qualquer outra ocorrência que venha a ser identificada nas análises de controle de qualidade da água;</li>
				<li>Acompanhar junto à SABESP a operação adequada da EFRF do córrego do Sapateiro;</li>
				<li>Em relação ao uso do lago, não deverão ser fomentadas atividades recreativas causadoras de impactos na fauna aquática. De acordo com determinação da SVMA/Divisão da Fauna Silvestre, as atividades não permitidas são aquelas que causam movimentação nas águas como, por exemplo, mergulho e uso de pedalinhos.</li>
			</ul>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>2.3. Solo – Diagnóstico</h3>
			<p>O solo é um recurso natural de grande importância, pois além de sustentar a produção de alimentos, recebe a água das chuvas que depois emerge na forma de nascentes e mananciais, e ainda sustenta toda a biodiversidade das florestas e campos.</p>
			<p>No Parque Ibirapuera o solo possui maior quantidade de areia, seguido por silte e argila, e pH ligeiramente ácido, com bastante matéria orgânica<sup>1</sup> . É importante que esta seja mantida no Parque o máximo possível já que é responsável por disponibilizar os nutrientes para as espécies vegetais ali presentes. </p>
			<p>Nesse sentido, foram identificados no Parque os locais onde o solo está comprometido por processos de erosão e compactação, com possível perda de matéria orgânica, e que portanto, requerem atenção especial.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>2.3.1 Diretrizes gerais</h3>
			<wbr>
				<ul>
					<li>Manter o solo coberto por forrações herbáceas ou cobertura vegetal morta (folhas, ramos, etc.), evitando que fique exposto e suscetível à erosão e compactação;</li>
					<li>Combater a compactação e a erosão nos pontos identificados no mapa (item 2.3 Solos – Diagnóstico) que, de maneira geral, compreendem: barrancos, taludes, arruamentos, caminhos e pistas de caminhada. Pode-se utilizar materiais disponíveis no Parque (folhas, galhos e troncos, etc.) para quebra da velocidade das águas pluviais;</li>
					<li>Realizar as intervenções no solo no período de estiagem, exceto pequenas correções de erosão laminar.</li>
				</ul>
				<figure title="Figura 2 –  Solo – diagnóstico dos locais que requerem manejo de solo. Fonte: PMSP." class="coluna">
					<img :src="fileSrc('2fig02.png')" alt="Figura 2 –  Solo – diagnóstico dos locais que requerem manejo de solo. Fonte: PMSP." style="height: auto; width: 100%;">
					<figcaption>Figura 2 –  Solo – diagnóstico dos locais que requerem manejo de solo. Fonte: PMSP.</figcaption>
				</figure>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>2.4. Vegetação – Diagnóstico</h3>
			<ul class="links">
				<li>
					<a :href="src('arquivos/pdp-ibirapuera/Relatório de diretrizes do Herbário Municipal.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Relatório de diretrizes do Herbário Municipal.pdf</div>
						<span>3,08 MB</span>
					</a>
				</li>
			</ul>
			<p>A concepção paisagística de Augusto Teixeira Mendes resultou numa flora diversificada, composta pelos eucaliptais, plantados desde 1920 para drenar o terreno alagadiço de várzea, e por jardins e bosques com árvores ornamentais, nativas e exóticas. Portanto, a cobertura vegetal do Parque é caracterizada por maciços de árvores cultivadas onde predominam espécies exóticas, com destaque para os eucaliptos. Tal vegetação se concentra, sobretudo, na parte oeste do Parque e é valorizada por conter espécies pouco frequentes na arborização da cidade de São Paulo.</p>
			<p>A caracterização da vegetação do Parque feita pelos especialistas, técnicos do Herbário, pode ser consta nas figuras abaixo:</p>
			<figure title="Figura 3 – Vegetação – diagnóstico da vegetação do Parque . Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig03.png')" alt="Figura 3 – Vegetação – diagnóstico da vegetação do Parque . Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 3 – Vegetação – diagnóstico da vegetação do Parque . Fonte: PMSP.</figcaption>
			</figure>
			<figure title="Figura 4 –  Vegetação – diagnóstico de elementos importantes da vegetação do Parque . Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig04.png')" alt="Figura 4 –  Vegetação – diagnóstico de elementos importantes da vegetação do Parque . Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 4 –  Vegetação – diagnóstico de elementos importantes da vegetação do Parque . Fonte: PMSP.</figcaption>
			</figure>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->
			<p>Assim, encontramos no Parque alamedas e agrupamentos de diversas espécies, como por exemplo, figueira-benjamim (F<em>icus microcarpa</em>), chichá (<em>Sterculia curiosa</em>), ipê-rosa (<em>Handroanthus heptaphyllus</em>), ipê branco (<em>Tabebuia róseo-alba</em>), pinheiro-do-paraná (<em>Araucaria angustifólia</em>).</p>
			<p>Um total de 532 espécies de plantas vasculares (angiospermas, gimnospermas e pteridófitas), incluindo árvores, arbustos e herbáceas, além de 30 espécies de briófitas, está identificado dentro dos limites do Parque. No Viveiro Manequinho Lopes foram documentadas 397 espécies de plantas vasculares.</p>
			<figure title="Foto 6 – Diversidade vegetal do Parque em diferentes estratos – herbáceo, arbustivo e arbóreo. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot06.jpg')" alt="Foto 6 – Diversidade vegetal do Parque em diferentes estratos – herbáceo, arbustivo e arbóreo. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 6 – Diversidade vegetal do Parque em diferentes estratos – herbáceo, arbustivo e arbóreo. Fonte: PMSP.</figcaption>
			</figure>
			<p>Considerando-se apenas as essências arbóreas, podem ser contabilizadas cerca de 288 espécies. Destas, 45% correspondem a espécies nativas brasileiras. Os exemplares distribuem-se pelo Parque em uma disposição onde prevalecem amplos gramados, pontuados por maciços arbóreos heterogêneos, à exceção dos povoamentos de eucaliptos, em poucos locais.</p>
			<figure title="Foto 7 – Bosque de eucaliptos. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot07.jpg')" alt="Foto 7 – Bosque de eucaliptos. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 7 – Bosque de eucaliptos. Fonte: PMSP.</figcaption>
			</figure>
			<p>Dentre as espécies que acompanham as vias estão alecrim-de-campinas (<em>Holocalyx balansae</em>), presente na maior parte das ruas internas, alfeneiro (<em>Ligustrum lucidum</em>), junto ao limite do Parque com a avenida Pedro Álvares Cabral. Nas proximidades do Museu de Arte Contemporânea, há ipê-roxo (<em>Handroanthus sp</em>.) e nas proximidades dos lagos, tipuanas (Tipuana tipu). Às margens destes destacam-se também os salgueiros (<em>Salix babylonica</em>).</p>
			<p>Dentre as espécies menos frequentes, encontram-se pau-brasil (<em>Paubrasilia echinata</em>), tamareiras-das-canárias (<em>Phoenix canariensis</em>) e o carvalho-brasileiro (<em>Euplassa cantareirae</em>). Além disso, espécies incomuns na arborização e nos jardins da metrópole, formam uma coleção notável de árvores nativas e exóticas, como figureira-de-bengala (<em>Ficus benghalensis</em>), pau-marfim (<em>Baulfourodendron riedelianum</em>), várias espécies de palmeiras como sabal-anão (<em>Sabal minor</em>), sabal-da-flórida (<em>Sabal palmetto</em>), rapis (<em>Rhapis excelsa</em>), carvalho-europeu (<em>Quercus robur</em>), etc.</p>
			<p>No setor onde se encontram os Museus de Arte Contemporânea, fora dos limites do parque, de Museu de Arte Moderna, bem como a marquise, as árvores estão dispostas em linhas ao longo das vias, ou em maciços pouco densos. Estes se tornam mais concentrados no setor entre os lagos, onde estão o planetário e o Pavilhão Padre Manoel da Nóbrega. Salienta-se, ainda, o Pavilhão Japonês, onde se concentram cerejeiras (<em>Prunus sp</em>.), cuja florada constitui um dos atrativos do Parque.</p>
			<figure title="Foto 8 – Cerejeiras do Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot08.jpg')" alt="Foto 8 – Cerejeiras do Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 8 – Cerejeiras do Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<p>O setor onde se situa o Viveiro Manequinho Lopes compreende maiores adensamentos heterogêneos. Com destaque para pata-de-vaca (<em>Bauhinia forficata</em>), tulipeira-africana (<em>Spathodea campanulata</em>), jerivá (<em>Syagrus romanzoffiana</em>), jatobá (<em>Hymenaea courbaril</em>), aroeira-mansa (<em>Schinus terebinthifolia</em>), cedro (<em>Cedrela fissilis</em>), figueira-da-índia (<em>Ficus auriculata</em>), falsa-seringueira (<em>Ficus elastica</em>), ceboleiro (<em>Phytolacca dioica</em>), entre outras.</p>
			<p>Dentre as espécies presentes, grande parte é produtora de frutos atrativos para as aves e morcegos existentes na área. Destacam-se as mirtáceas como jaboticabeira (<em>Plinia cauliflora</em>), cambucá (<em>Plinia edulis</em>), araçás e goiabeira (<em>Psidium spp</em>.), uvaia (<em>Eugenia pyriformis</em>), pitangueira (<em>Eugenia uniflora</em>), entre outras, bem como muitas palmeiras, etc.</p>
			<p>Por fim, destaca-se a região do Campo Experimental da Escola de Jardinagem, com uma rica diversidade de espécies, cerca de 20%, principalmente ornamentais, medicinais e hortícolas.</p>
			<figure title="Foto 9 – Campo experimental. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot09.jpg')" alt="Foto 9 – Campo experimental. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 9 – Campo experimental. Fonte: PMSP.</figcaption>
			</figure>

			<h3>2.4.1 Diretrizes Gerais</h3>
			<h4>ÁRVORES</h4>
			<figure title="Foto 10- Árvores às margens do lago. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot10.jpg')" alt="Foto 10- Árvores às margens do lago. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 10- Árvores às margens do lago. Fonte: PMSP.</figcaption>
			</figure>
			<ul>
				<li>Manter todas as árvores do Parque, zelando pela sua integridade;</li>
				<li>Utilizar as recomendações técnicas constantes no Manual Técnico de Poda de Árvores, da SVMA, para o manejo adequado;</li>
				<li>Interromper imediatamente toda e qualquer atividade que potencialmente perturbe ou destrua ninhos e aguardar até que os filhotes voem e abandonem o ninho para retornar as atividades . Pela Lei de Crimes Ambientais (Lei Federal nº 9.605/98), tanto as aves silvestres como os seus ninhos estão protegidos e, portanto, não podem ser removidos;</li>
				<li>As podas de adaptação das árvores deverão ser realizadas preferencialmente no outono ou inverno, fora do período de reprodução. Para as aves do município de São Paulo foram observadas atividades de construção de ninhos com três meses de antecedência (junho, julho e agosto) à época reprodutiva (setembro e janeiro);</li>
				<li>Utilizar procedimentos técnicos padronizados para remoção e transplante (casos de doença ou risco de queda) e adubação de árvores;</li>
				<li>Substituir indivíduo arbóreo por árvore da mesma espécie quando a remoção for necessária;</li>
				<li>Proteger o solo ao redor dos indivíduos plantados com cobertura vegetal morta;</li>
				<li>Proteger o colo das árvores para evitar ferimentos por ocasião da roçagem dos gramados;</li>
				<li>O tronco das árvores não deve receber caiação ou qualquer tipo de pintura;</li>
				<li>Combater os efeitos de borda com vegetação em torno do perímetro do Parque com espécies de médio porte (não utilizar: eucaliptos, pinus, grevíleas, araucárias, guapuruvus);</li>
				<li>Manter as espécies vegetais em todos os seus estratos, favorecendo a regeneração natural e a dispersão de suas sementes em todos os ambientes possíveis dentro do projeto paisagístico do parque;</li>
				<li>Observar o regramento incidente sobre manejo arbóreo, notadamente a Lei Municipal nº 10.365/1987, a Portaria nº 37/SVMA/2013 e a Portaria nº 35/SVMA/DEPAVE/2003.</li>
			</ul>
			<h4>GRAMADOS</h4>
			<figure title="Foto 11 – Gramado da Praça da Paz. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot11.jpg')" alt="Foto 11 – Gramado da Praça da Paz. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 11 – Gramado da Praça da Paz. Fonte: PMSP.</figcaption>
			</figure>
			<ul>
				<li>Estabelecer período de repouso para gramados com intenso pisoteio com demarcação por telas e sinalização para a população;</li>
				<li>Aguardar a produção e dispersão das sementes para realizar os cortes de grama;</li>
				<li>Manter gramíneas atrativas de aves granívoras: papa-capim, bico-de-lacre, coleirinha, canário da terra.</li>
			</ul>
			<h4>FORRAÇÕES</h4>
			<figure title="Foto 12 – Canteiro de herbáceas no Parque Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot12.jpg')" alt="Foto 12 – Canteiro de herbáceas no Parque Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 12 – Canteiro de herbáceas no Parque Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<ul>
				<li>Manter espécies de fácil cultivo nos canteiros, que devem ser amplos e generosos;</li>
				<li>Consultar especialistas para que a aparência dos canteiros se integre com o macro paisagismo;</li>
				<li>Aproveitar as epífitas de galhos caídos, recolocando-as em outros troncos ou utilizando-as como elementos decorativos do Parque.</li>
			</ul>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>2.5 Fauna – Diagnóstico</h3>
			<ul class="links">
				<li>
					<a :href="src('arquivos/pdp-ibirapuera/Inventário da Fauna Silvestre.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Inventário da Fauna Silvestre.pdf</div>
						<span>308 KB</span>
					</a>
				</li>
			</ul>
			<ul class="links">
				<li>
					<a :href="src('arquivos/pdp-ibirapuera/Manejo dos anatídeos.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Manejo dos anatídeos.pdf</div>
						<span>570 KB</span>
					</a>
				</li>
			</ul>
			<p>Pelo mosaico de ambientes que variam de bosques, campos abertos, aquáticos, alagados, viveiro e campo experimental, o Parque abriga ampla diversidade de fauna silvestre que vão desde espécies tipicamente urbanas a espécies de campo aberto e florestais.</p>
			<p>Apesar de haver animais habitando e se movimentando por toda a área do Parque, alguns locais são mais sensíveis para sua conservação, em especial as áreas de abrigo, alimentação e reprodução dos indivíduos. Também é importante observar que algumas espécies foram registradas apenas em áreas específicas, isto é, possuem uma distribuição restrita, de maneira que eventuais alterações nesses locais podem resultar no desaparecimento dessas espécies no Parque.</p>
			<figure title="Figura 5 –  Fauna - diagnóstico de áreas de abrigo, alimentação e reprodução importantes para fauna. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig05.png')" alt="Figura 5 –  Fauna - diagnóstico de áreas de abrigo, alimentação e reprodução importantes para fauna. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 5 –  Fauna - diagnóstico de áreas de abrigo, alimentação e reprodução importantes para fauna. Fonte: PMSP.</figcaption>
			</figure>
			<p>Dessa forma, o mapeamento realizado pelos técnicos da Divisão da Fauna Silvestre buscou identificar essas áreas em especial. Além disso, também foram mapeados os locais onde a fauna silvestre sofre algum tipo de ameaça ou impacto, como área de abandono de gatos, de conflitos de pessoas ou edificações com gambás, de ocorrência de roedores sinantrópicos, de cães soltos e de colisão de aves (fachadas de determinadas edificações). Por fim, ainda foram indicadas as trilhas normalmente utilizadas durante atividades de educação ambiental (observação de aves) e que também podem ser utilizadas para o monitoramento da avifauna.</p>
			<figure title="Figura 6 – Fauna - diagnóstico de locais e ocorrências importantes relacionados à conservação da fauna. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig06.png')" alt="Figura 6 – Fauna - diagnóstico de locais e ocorrências importantes relacionados à conservação da fauna. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 6 – Fauna - diagnóstico de locais e ocorrências importantes relacionados à conservação da fauna. Fonte: PMSP.</figcaption>
			</figure>
			<p>Foram catalogadas pela Divisão da Fauna Silvestre 351 espécies de animais na área do Parque – 84 invertebrados, com destaque para 45 espécies de borboletas e 255 vertebrados, entre anfíbios, répteis, aves e mamíferos.</p>
			<p>O Parque Ibirapuera compreende uma importante área de ocorrência de avifauna no município. Um total de 225 espécies de aves, agrupadas em 48 famílias, encontra-se registrado para o Parque, beneficiadas pela diversidade da flora. Esta riqueza corresponde a 48,5% do total de aves registradas no município. Entre elas estão a coruja-orelhuda (<em>Asio clamator</em>) , o tuim (<em>Forpus xanthopterygius</em>), o risadinha (<em>Camptostoma obsoletum</em>)  e representantes aquáticos ou de hábitos ribeirinhos, como o mergulhão-caçador (<em>Podilymbus podiceps</em>), o biguá (<em>Nannopterum brasilianus</em>), as marrecas (<em>Dendrocygna bicolor; Dendrocygna viduata</em>), garças (<em>Ardea cocoi; Ardea alba; Egretta thula</em>), frango d’água (<em>Gallinula galeata</em>), jaçanã (<em>Jacana jacana</em>), entre outras.</p>
			<p>A presença de agrupamentos de eucalipto, de maciços de árvores exóticas e nativas, bem como a presença de lagos e mesmo de áreas construídas, propicia a existência de nichos e de recursos tróficos importantes para um grande número de espécies de aves que se adaptaram ao ambiente urbano. Dentre estas, estão a cambacica (<em>Coereba flaveola</em>), o sabiá-laranjeira (<em>Turdus rufiventris</em>), o bem-te-vi (<em>Pitangus sulphuratus</em>), o beija-flor-tesoura (<em>Eupetomena macroura</em>), comuns em jardins e em pomares, ou espécies exóticas adaptadas ao ambiente urbano como o pardal (<em>Passer domesticus</em>) e o pombo-doméstico (<em>Columba livia</em>).</p>
			<p>Considerando o status de conservação o parque Ibirapuera apresenta 26 espécies de aves endêmicas do bioma Mata Atlântica, podemos destacar entre elas o tiê (<em>Tachyphonus coronatus</em>) e o arredio-palido (<em>Cranioleuca pallida</em>).</p>
			<p>Há ainda registros de espécies pouco frequentes em áreas com severas perturbações antrópicas e que são consideradas vulneráveis ou ameaçadas de extinção no estado de São Paulo (Fauna ameaçada de extinção no estado de São Paulo, decreto estadual n. 63.853/18). Dentre este grupo, foram identificadas na área do Parque 14 espécies de aves as quais destacamos : o gavião-pombo-pequeno (<em>Amadonastur lacernulatus</em>) espécie tipicamente florestal e  o  gavião-asa-de-telha (<em>Parabuteo unicinctus</em>). Também pássaros, tipicamentes florestais, como a araponga (<em>Procnias nudicollis</em>), o pavó (<em>Pyroderus scutatus</em>) e o chibante (<em>Laniisoma elegans</em>), visitam regularmente o Parque e se beneficiam  da frutificação das figueiras, magnólia-amarela e outras espécies exóticas. Esses registros demonstram a importância do parque Ibirapuera  para a conservação da avifauna. Haja visto que algumas espécies de aves tiveram seu primeiro registro para o município no Parque Ibirapuera, como foi o caso da cigarrinha-do-campo (<em>Neothraupis fasciata</em>) ave ameaçada de extinção no Estado e típica do Cerrado, o cabecinha-castanha (<em>Pyrrhocoma ruficeps</em>), quase-ameaçada no Estado e o caboclinho (<em>Sporophila bouvreuil</em>), aves considerada ameaçada de extinção no Estado.</p>
			<p>Entre as  quatro espécies de corujas egistradas destacamos o mocho-diabo (<em>Asio stygius</em>), espécie considerada naturalmente rara e que no entanto é regularmente registrada nos bosques de pinheiros exóticos e os maciços de dendê; O Parque ainda recebe a visita de aves migratórias, tais como, o bem-te-vi-rajado (<em>Myiodynastes maculatus</em>) que se reproduz em ocos durante a primavera e verão, a tesourinha (<em>Tyrannus savana</em>),  o chibum (<em>Elaenia chiriquensis</em>), a guaracava-de-crista-branca (<em>Elaenia chilensis</em>), o príncipe (<em>Pyrocephalus rubinus</em>) sendo, portanto, um importante sítio de descanso ou de reprodução para essas aves.</p>
			<p>Foram observados no Parque nove espécies diferentes de psitacídeos, entre eles se destacam o papagaio (<em>Amazona aestiva</em>), registrado pela primeira vez em 1992 e que atualmente podem ser observados em grande número se alimentando e se reproduzindo no local. A maracanã-pequena (<em>Diopsittaca nobilis</em>) também é registrada em grande número, assim como, a tiriba (<em>Pyrrhura frontalis</em>), espécie endêmica da Mata Atlântica.  É possível que esses exemplares sejam oriundos do cativeiro ou que estejam indicando uma expansão natural de sua área de distribuição original e que encontraram em áreas verdes, como o Parque, condições adequadas para sua permanência.</p>
			<p>Salienta-se ainda a presença de espécies nectarívoras e frugívoras, e que desempenham importante função como polinizadoras e disseminadoras de sementes nas diversas áreas verdes, jardins e terrenos não construídos. Esse é o caso do casal de jacuguaçús (<em>Penelope obscura</em>)  recentemente registrados na área do viveiro Manequinho Lopes.</p>
			<p>Muitas espécies apresentam ainda vistosas plumagens, destacando-se os psitacídeos (papagaios e maracanãs) e outras aves como fim-fim (<em>Euphonia chlorotica</em>), saí-andorinha (<em>Tersina viridis</em>), saíra-amarela (<em>Tangara cayana</em>) e saí-azul (<em>Dacnis cayana</em>).</p>
			<p>Há 12 espécies de peixes registradas nos lagos, entre eles o curimbatá (<em>Prochilodus lineatus</em>), surubim (<em>Pseudoplatystoma fasciatum</em>), acará (<em>Geophagus brasiliensis</em>), carpa (<em>Cyprinus carpio</em>), e tilápia–do-nilo (<em>Oreochromis niloticus</em>), estas duas últimas exóticas e muito disseminadas nos corpos d’água do país, sendo animais de vida-livre que não necessitam de cuidados específicos para alimentação (fornecimento de ração). Trata-se de animais muito resistentes, cuja presença nos lagos se deve a solturas indevidas, que se adaptam facilmente às condições ambientais que o lago apresenta, encontrando o alimento (microcrustáceos, insetos, alevinos) por conta própria.</p>
			<p>Entre anfíbios e répteis, há registros de sapo-cururu (<em>Rhinella icterica</em>), cágado-pescoço-de-cobra (<em>Hydromedusa tectifera</em>), tartaruga-tigre-d’água (<em>Trachemys dorbigniidactylus mabouia</em>), cobra-de-duas-cabeças (<em>Amphisbaena alba</em>) e várias serpentes, de modo geral, não venenosas como cobra d’água (<em>Helicops modestus; Liophis miliaris</em>); papa-ovo (<em>Sibynomorphus mikanii</em>) e corre-campo (<em>Tomodon dorsatus</em>).</p>
			<p>Entre as 16 espécies de mamíferos, verifica-se a ocorrência de doze  espécies de morcegos, com diferentes hábitos alimentares. Destaca-se uma espécie pouco conhecida e considerada com dados deficientes no Estado e pela IUCN, o morcego-cara-de-cachorro (<em>Molossops neglectus</em>). Também estão  registradas o morcego-beija-flor (<em>Glossophaga soricina</em>) e o morcego-das-listras-brancas-na-cabeça-e-nas-costas  (<em>Platyrrhinus lineatus</em>), que se alimentam de néctar, o morcego-das-listras-brancas-na-cabeça(<em>Artibeus lituratus</em>), espécie frugívora, e o morcego-de-cauda-livre (<em>Tadarida brasiliensis</em>), insetívora. Podem ser encontrados ainda o gambá-de-orelha-preta (<em>Didelphis aurita</em>) e mamíferos sinantrópicos como as ratazanas (<em>Rattus norvegicus</em>).</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>2.5.1 Diretrizes Gerais</h3>
			<wbr>
			<ul>
				<li>Implantar canteiros com espécies herbáceas às margens dos lagos, evitando erosão e compactação e ao mesmo tempo fornecendo abrigo e/ou alimento à fauna silvestre. As espécies herbáceas devem ser adaptadas ou resistentes ao pisoteio dos anatídeos. A implantação desses canteiros devem ser orientados pela Divisão da Fauna Silvestre;</li>
				<li>Zelar pela fauna silvestre considerando o conhecimento acumulado pela Divisão da Fauna Silvestre nas ações de gestão e manejo do Parque.li>
				<li>Encaminhar animais silvestres feridos ou mortos (em bom estado de conservação) para a Divisão da Fauna Silvestre para identificação da espécie, necropsia ou tratamento adequado, reabilitação e soltura.</li>
				<li>Preservar locais para reprodução das espécies silvestres, como a vegetação da margem do lago, ocos de árvore e árvores mortas (que não ofereçam risco aos usuários e equipamentos)  e maciços de vegetação arbustiva, arbórea e gramados.</li>
				<li>Buscar soluções sustentáveis para a prevenção dos ninhos de quero-queros (Vanellus chilensis) no gramado da plateia externa do auditório.</li>
				<li>Acionar a Unidade de Vigilância em Saúde da Vila Mariana caso seja constatada a presença de abelhas africanizadas (Apis mellifera) vespas ou marimbondos, para que seja feito o atendimento s. No caso de abelhas sem ferrão e vespas nativas,  que não apresentam riscos à saúde pública, as ações de manejo devem se pautar na legislação vigente. Quando necessária a remoção dessas colmeias (ex. necessidade de poda arbórea), a gestão do Parque deve entrar em contato com entidades que tenham experiência para isso, como a ONG SOS Abelhas Sem Ferrão, para recolocação em outra área segura.</li>
				<li>Não utilizar fogos de artifício, fatores lesivos à fauna.</li>
				<li>Desenvolver, em parceria com a DFS , programas de manutenção da fauna silvestre no parque.</li>
				<li>Orientar fotógrafos profissionais quanto ao registro de imagens de animais e paisagens do parque de acordo com instrução normativa vigente.</li>
				<li>Não utilizar Drones nas áreas restritas à fauna silvestre, principalmente nos períodos de reprodução e/ou migração, pelo risco de interferência por estímulos sonoros e visuais e colisão com aves, causando óbitos.</li>
				<li>Consultar a Divisão da Fauna Silvestre em quaisquer casos relativos a fauna silvestre não previstos. Divisão da Fauna Silvestre deve ser consultada.</li>
				<li>Utilizar o pavilhão das aves, em acordo com a DFS , para reabilitação das aves aquáticas silvestres nativas (outras espécies além dos anatídeos).</li>
				<li>Realizar a manutenção e reforma emergencial das instalações, indispensáveis para o adequado manejo dos animais.</li>
				<li>Monitorar, visando sua redução, por meio do controle de zoonoses e da população de animais domésticos abandonados no Parque, de maneira a não prejudicar a fauna silvestre, a experiência dos usuários e os animais domésticos acompanhados, nos termos da legislação vigente, podendo firmar, para tanto, parcerias com entidades que promovam ações de adoção e castração, como a ONG Bichos no Parque.</li>
				<li>Estabelecer, em parceria com as entidades protetoras e a DFS, locais de alimentação dos gatos que não impactem os locais de nidificação e manutenção das avifauna.</li>
				<li>Não realizar eventos de adoção no parque, visando não estimular o abandono de novos indivíduos.</li>
			</ul>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">3. USOS FUNDAMENTAIS DO PARQUE</h2>
				<CommentsContext :id="commentId()" :context="'3. USOS FUNDAMENTAIS DO PARQUE'">
				<p>O Parque é protegido por Tombamento nas três esferas da federação. No nível Federal pelo IPHAN, em 1998, através do processo nº 1.429 homologado em 2018 com o Tombamento do Conjunto Arquitetônico das edificações projetadas pelo Arq. Oscar Niemeyer para o Parque Ibirapuera.  No nível estadual pelo CONDEPHAAT, em 1992, através da resolução RES. SC 01 com o Tombamento da Área Verde (conjunto de cheios e vazios) interna à cercadura metálica atualmente existente, das Edificações e dos Elementos Arquitetônicos construídos para Festejos do IV Centenário. No nível Municipal pelo CONPRESP, em 1997, através da RES. 06 com o Tombamento do Parque Ibirapuera e das áreas residenciais adjacentes. Os Tombamentos regram toda e qualquer intervenção no parque e estabelecem a exigência de aprovação nos órgãos federativos.</p>
				</CommentsContext>
				<p>O Plano Diretor Participativo compreende o Parque Ibirapuera como patrimônio material. Este fundamento está registrado na categorização de elementos e de usos como valor ambiental, patrimônio paisagístico e arquitetônico, e legado histórico. As viabilidades de incremento cultural e de educação ambiental devem, sempre que possível, respaldar as atividades de lazer recreativo ou lazer esportivo.</p>
				<p>Da mesma maneira, deve-se considerar que os usos propostos ao mesmo tempo em que são gatilhos a outras apropriações também se limitam: por exemplo, a questão ambiental impõe condições ao uso cultural, de lazer e esportivo, assim como este uso impõe limites para o aspecto ambiental. O patrimônio histórico, por sua vez, impõe condições de uso restritivas ao ambiente e ao esporte e à cultura. As pessoas atraídas para o Parque por um aspecto podem se interessar pelos outros, ou seja, cada uso ou apropriação pode, ao mesmo tempo, ser uma porta de entrada para outras apropriações.</p>
				<p>A preservação do meio ambiente, as possibilidades de educação ambiental e o lazer devem estar presentes em todo o processo de planejamento e em todas as ações, incluindo as atividades de lazer recreativo ou de ócio.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.1.	Uso Ambiental</h3>
				<p>As Bases Naturais do Parque (Item 2) fundamentaram o Uso Ambiental no Parque Ibirapuera ter prevalência sobre toda outra forma de apropriação dos espaços do parque.  O Uso Ambiental embasa toda a persistência, resiliência e conservação dos processos naturais que fundamentam o parque como espaço livre.</p>
				<p>O Plano Diretor Participativo categoriza e analisa os elementos separadamente para identificar os espaços e a intensidade de ocorrência. Desta maneira, caracterizam o Uso Ambiental as dinâmicas dos elementos naturais Vegetação, Fauna, Água e Solo, em termos da conservação do patrimônio natural do parque, de se permitir a regeneração natural, de estimular o enriquecimento ambiental e de promover a mitigação dos impactos.</p>
				<p>O elemento Água categoriza e identifica a presença de lago, córrego ou curso d’água e estação de flotação e remoção de flutuantes (EFRF).</p>
				<p>Solo categoriza localidade onde se encontram solo exposto (sem cobertura vegetal) e, portanto passível de erosão, compactação e perda de matéria orgânica.</p>
				<p>A Vegetação categoriza os espaços em bosque misto; bosque de eucalipto; agrupamento de árvores ou exemplar significativo; canteiros, gramados e arborização esparsa; jardins temáticos; viveiro e campo experimental; campo de várzea e vegetação aquática; e arborização em área impermeabilizada (estacionamento).</p>
				<p>Fauna categoriza os espaços de distribuição restrita (regiões específicas do Parque onde ocorrem algumas espécies com exclusividade); abrigo, alimentação e reprodução de anatídeos; abrigo e reprodução de rapinantes; abrigo e reprodução de aves aquáticas nativas; abrigo e reprodução de cágados; e roedores sinantrópicos.</p>
				<p>Os demais usos identificados no parque – Educacional, Cultural, Lazer Recreativo, Lazer Esportivo e Ócio – equivalentes em importância, se submetem ao uso Ambiental, sob o qual se estruturam.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.2.	Uso Educacional</h3>
			<p>O Parque Ibirapuera conta com importantes equipamentos de educação, como o Planetário, a Escola de Astrofísica e a UMAPAZ, da qual se destaca a Escola de Jardinagem e Campo Experimental.  Há ainda o CECCO que oferece atividades socioeducativas e de saúde, vinculado a Secretaria Municipal de Saúde. </p>
			<p>Esses equipamentos estão caracterizados em detalhes na seção 8 – Ações de Projeto e Visões de Futuro.</p>
			<figure title="Figura 7 – Levantamento dos Usos Educacionais no Parque Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig07.png')" alt="Figura 7 – Levantamento dos Usos Educacionais no Parque Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 7 – Levantamento dos Usos Educacionais no Parque Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.3. Uso Cultural</h3>
			<p>O Uso Cultural é o terceiro em hierarquia de relevância para a apropriação dos espaços do parque. Adota-se como conceito de Uso Cultural toda a atividade de desenvolvimento de conhecimento humano que pode ser representada pelas artes, crença, costume, hábitos e aptidões, moral, comportamento, símbolo, prática social, de conhecimento da natureza, em um processo cíclico, adaptativo e acumulativo.</p>
			<p>A categorização proposta subdivide o Uso Cultural em espaços livres de edificação, que são todos os espaços não cobertos ou protegidos por estruturas construídas, e Uso Cultural em espaços edificados. No parque, os espaços livres de edificação configuram a maior quantidade de espaço existente.</p>
			<p>O Conjunto Arquitetônico, sede das comemorações do IV Centenário, e as edificações do parque correspondem a Patrimônios em si, legalmente protegidos. É importante reconhecer que vivenciar esta arquitetura como espaço receptáculo de Cultura é ter o privilégio de presenciar uma referência arquitetônica moderna brasileira de reconhecimento mundial.</p>
			<p>A conformação do espaço livre é atribuída pela vegetação, particularmente pelo conjunto arbóreo que atribui potencialidade de uso Cultural ao espaço livre. Na nomenclatura paisagística denomina-se Plano de Vedo aos balizamentos definidos pelos maciços vegetais justapostos, que delimitam lugares de vivência no espaço livre. Dependendo do porte da vegetação soma-se ao uso a condição de insolação, ou permeabilidade à luz solar, que é outro atributo fundamental para os lugares de vivência. A intensa diversidade de conjuntos arbóreos e extensas áreas gramadas oportunizam usos espontâneos e atividades lúdicas e culturais.</p>
			<p>Preferencialmente deve-se promover uso Cultural no espaço livre por período longo de tempo em áreas sombreadas ou meio sombreadas de maneira a favorecer a permanência. Para além do sombreamento, a umidificação do ar propiciada pela vegetação (arbórea), atribui o conforto ambiental.</p>
			<p>Importante considerar que estes espaços livres permitem multiplicidade de uso, sendo recorrente haver Uso de Lazer Recreativo e Uso Cultural no mesmo espaço, e não raro ao mesmo tempo.</p>
			<p>Alguns dos espaços livres do parque possuem intenso Uso Cultural já classificado como, por exemplo, na Arena de Eventos, na Plateia Externa do Auditório, no Jardim das Esculturas, na Praça Burle Marx, na Praça da Paz, a área de maior insolação do parque, remanescente da desmontagem de dois pavilhões provisórios e as extensas áreas gramadas. Os bolsões de estacionamento existentes configuram também potencialidade para este uso.</p>
			<p>Classifica-se Espaço Livre Coberto todo aquele que possui estrutura construída de cobertura e completa permeabilidade física, ou seja, espaço coberto e aberto. Exemplificando, a Marquise, a Serraria e o Pergolado.</p>
			<figure title="Figura 8 – Levantamento do Uso Lazer Cultural no Parque Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig08.png')" alt="Figura 8 – Levantamento do Uso Lazer Cultural no Parque Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 8 – Levantamento do Uso Lazer Cultural no Parque Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<figure title="Figura 9 – Levantamento de Usos Culturas em Espaços Livres no Parque Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig09.png')" alt="Figura 9 – Levantamento de Usos Culturas em Espaços Livres no Parque Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 9 – Levantamento de Usos Culturas em Espaços Livres no Parque Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.4. Lazer Recreativo – Ativo e Ócio</h3>
			<p>O Lazer Recreativo Ativo classifica toda atividade lúdica desenvolvida no tempo livre de maneira espontânea e criativa que traga satisfação e descontração à pessoa. O Lazer Recreativo pode operar a partir do indivíduo ou de um grupo de pessoas; está associado a incrementar a qualidade de vida e a satisfazer as necessidades de ordem física e emocional, pessoal ou social. Pode também configurar jogo ou prática corporal.</p>
			<p>O ócio como tempo em que se descansa, em complementaridade ao Lazer Recreativo Ativo, está associado à recriação ou ao tempo necessário, e fundamental, de desconexão com todo o pensamento para que o intelecto possa se reciclar como um processo de relaxamento. </p>
			<p>As oportunidades e disponibilidade de Lazer Recreativo Ativo ou Ócio encontram no parque público as melhores condições e possibilidades para sua realização. Categorizam-se como exemplificação as práticas mais recorrentes de Lazer Recreativo Ativo no parque Ibirapuera como parquinho ou Parque Infantil, atividade lúdica de curta duração (como por exemplo peteca, frescobol, brincadeiras), visitar espaços temático (Jardim das Esculturas, Rosa-dos-Ventos, Jardim Japonês) ou feira de artesanato.</p>
			<p>O Lazer Recreativo como ócio existente no parque Ibirapuera são categorizados como de contemplação da natureza, leitura, banho de sol, descanso e redário.</p>
			<p>O tratamento, a qualificação e a zeladoria dos espaços livres nos quais as atividades de Lazer Recreativo frequentemente se desenvolvem são um dos objetivos mais prementes do Plano Diretor Participativo.</p>
			<figure title="Figura 10 – Levantamento dos Uso Lazer Recreativo Ativo no Parque Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig10.png')" alt="Figura 10 – Levantamento dos Uso Lazer Recreativo Ativo no Parque Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 10 – Levantamento dos Uso Lazer Recreativo Ativo no Parque Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<figure title="Figura 11 – Levantamento do Uso Lazer Recreativo – Ócio, no Parque Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig11.png')" alt="Figura 11 – Levantamento do Uso Lazer Recreativo – Ócio, no Parque Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 11 – Levantamento do Uso Lazer Recreativo – Ócio, no Parque Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>3.5.	Lazer Esportivo</h3>
			<p>Em complementaridade  ao Lazer Recreativo, o Lazer Esportivo pode ser classificado como atividade física de grande benefício psíquico e emocional, porém, necessita de instalações apropriadas segundo regramentos próprios ao esporte e também impingidos à prática esportiva.  No parque Ibirapuera esta prática está restrita às quadras poliesportivas, a jogo, práticas corporais (por exemplo, Yoga), caminhada, corrida, ciclismo, slackline,  prática de skate.</p>
			<figure title="Figura 12 – Levantamento dos Usos de Lazer Esportivo no Parque Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig12.png')" alt="Figura 12 – Levantamento dos Usos de Lazer Esportivo no Parque Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 12 – Levantamento dos Usos de Lazer Esportivo no Parque Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">4. SETORIZAÇÃO DO PARQUE IBIRAPUERA</h2>
			<Comments :attr="{id:commentId(), context:'4. SETORIZAÇÃO DO PARQUE IBIRAPUERA'}" v-if="estaConsulta.ativo == 1"></Comments>

			<h3>4.1. Parque Ibirapuera: Caracterização da Paisagem</h3>
			<p>O suporte físico e o processo natural dos elementos água, solo, vegetação, fauna e luz foram os condicionantes da solução de projeto do Parque Ibirapuera, expressos, por exemplo, na construção dos lagos para contenção de águas. O todo do parque e os subespaços criados configuram zonas integrantes, justapostas e cadenciadas articuladas a partir dos caminhos que compõe a estrutura de apropriação do parque. Esta estrutura é composta por caminhos sinuosos e harmônicos, que descortinam a paisagem à medida que se caminha por eles.</p>
			<p>A caracterização que se apresenta está fundamentada no Projeto de Paisagismo original do parque, de autoria do engenheiro agrônomo Otávio Augusto Teixeira Mendes, e nas particularidades de uso que o Ibirapuera recebeu ao longo de seis décadas de apropriação pública.</p>
			<p>A vegetação foi o aspecto mais intensamente transformado do parque. Apesar de todo o acréscimo ou da alteração procedida, a essência original do projeto persiste com intensidade. É da intenção deste Plano Diretor Participativo incorporar esta dinâmica contemporânea, e compreender a flexibilidade (ou resiliência) das transformações do espaço através do tempo a partir das forças e dos valores sociais.</p>
			<p>Com referência à vegetação, os talhões de eucaliptos existentes compuseram o envolvimento do Conjunto Arquitetônico, permitindo a visualização plena para a cidade, contrapondo com verticalidade a horizontalidade dominante. Além destes, o porte e a dimensão dos maciços de arborização, os lagos, os conjuntos florísticos, e mesmo os caminhos imprimiram no Ibirapuera espaços de pertencimento, de identidade e de forte simbolismo.</p>
			<figure title="Figura 13 – Caracterização da paisagem com destaque para o Conjunto Arquitetônico, talhões de eucaliptos, arborização, lagos e caminhos. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig13.png')" alt="Figura 13– Caracterização da paisagem com destaque para o Conjunto Arquitetônico, talhões de eucaliptos, arborização, lagos e caminhos. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 13 – Caracterização da paisagem com destaque para o Conjunto Arquitetônico, talhões de eucaliptos, arborização, lagos e caminhos. Fonte: PMSP.</figcaption>
			</figure>
			<p>Reitera-se que um dos atributos mais característicos deste projeto paisagístico é haver domínio do espaço perceptivo pelo caminhante do parque com proporção de escala e de espaço, atributo fundamentado pela vegetação, principalmente os eucaliptos, e pelo estrato arbóreo com o uso de espécies nativas, na época da implantação ainda muito pouco comum em projetos de paisagismo. A vegetação, nesta caracterização, tinha como principais funções: atribuir composição de luz e sombra, configurar subespaços de uso, propiciar percursos semi-sombreados para as pessoas e destacar o Conjunto Arquitetônico, instalado sobre platô especialmente construído para acomodá-lo, o qual  juntamente com os lagos, trazia o contraponto de horizontalidade que harmoniza o projeto.</p>
			<p>A reflexibilidade e a placidez foram introduzidas na solução do projeto como propriedades justapostas. O lago é o elemento nucleador destas propriedades com sinuosidade e extensão para armazenar considerável volume de água e para instigar o lazer. De um lado contrapõe o Conjunto Arquitetônico, de outro propicia perspectivas estratégicas da cidade e do próprio parque.</p>
			<p>No zoneamento proposto pelo Plano Diretor Participativo do Ibirapuera o lago (na verdade, são 3 corpos d’água ou lagos) caracteriza-se como o elemento nucleador ou central que equaciona questões de macrodrenagem e de valorização das águas urbanas. O lago possui as margens em talude na razão de 1:3 e na estabilidade da inclinação estimula possibilidade de uso, uma das fruições mais valorizadas pelos usuários.</p>
			<figure title="Figura 14 – Parque Ibirapuera, ruas por hierarquia de importância. Estudo sobre planta do Parque, sem data. Fonte: Arquivo Histórico Washington Luís." class="coluna">
				<img :src="fileSrc('2fig14.png')" alt="Figura 14 – Parque Ibirapuera, ruas por hierarquia de importância. Estudo sobre planta do Parque, sem data. Fonte: Arquivo Histórico Washington Luís." style="height: auto; width: 100%;">
				<figcaption>Figura 14 – Parque Ibirapuera, ruas por hierarquia de importância. Estudo sobre planta do Parque, sem data. Fonte: Arquivo Histórico Washington Luís. </figcaption>
			</figure>
			<p>O projeto original de Teixeira Mendes evidencia dois caminhos estruturantes para a apropriação do Parque. O primeiro envolve o Conjunto Arquitetônico, o segundo envolve os espaços de lazer. Há também um percurso que envolve o Lago 3 (próximo ao Monumento às Bandeiras). As transformações no decurso do tempo mantiveram essa estruturação básica, em que pese a incorporação dos gradis e a alteração do desenho urbano na Avenida Pedro Álvares Cabral. </p>
			<p>O primeiro percurso envolve o Conjunto Arquitetônico, limita o platô mais elevado do parque (cota 750), e configura extenso caminho serpenteado com 1.540m de extensão.</p>
			<p>O segundo percurso, com 2500m de extensão, envolve os espaços de lazer. Nele há articulações de caminhos que formam triangulações conhecidas com Praça do Porquinho, Praça do Leão e Praça da Serpente. Este percurso envolve dois dos lagos e constitui o platô de nível mais baixo (cota 745).</p>
			<figure title="Figura 15 – Mapa com indicação dos percursos estruturantes (1º e 2º) do projeto paisagístico de Teixeira Mendes e um 3º percurso, não estruturante, de onde se descortina uma perspectiva de forte simbolismo para os paulistanos. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig15.png')" alt="Figura 15 – Mapa com indicação dos percursos estruturantes (1º e 2º) do projeto paisagístico de Teixeira Mendes e um 3º percurso, não estruturante, de onde se descortina uma perspectiva de forte simbolismo para os paulistanos. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 15 – Mapa com indicação dos percursos estruturantes (1º e 2º) do projeto paisagístico de Teixeira Mendes e um 3º percurso, não estruturante, de onde se descortina uma perspectiva de forte simbolismo para os paulistanos. Fonte: PMSP.</figcaption>
			</figure>
			<p>O terceiro percurso, não estruturante, com 1010m de extensão envolve o lago voltado para a avenida Pedro Álvares Cabral e, na singularidade de suas proporções impregna forte imaginabilidade<sup>2</sup> ao parque. O Monumento às Bandeiras na confluência do desenho urbano e o Conjunto Arquitetônico arrematam a perspectiva descortinada propiciando a visualização emblemática que possui forte simbolismo para os paulistanos.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>4.2.	Do Conceito de Setorização Adotado</h3>
			<p>A setorização proposta fundamenta-se na análise do projeto de Paisagismo de Teixeira Mendes, do projeto do Conjunto Arquitetônico de Niemeyer e nas particularidades de uso que o Ibirapuera recebeu ao longo de seis décadas. O uso contemporâneo é aquele que apoia as análises do espaço e da paisagem do parque. Entre as características de maior relevância destacamos:</p>
			<p>Haver domínio do espaço perceptivo pelo caminhante do parque com proporção de escala e de espaço, ou seja, o usuário sente conforto ambiental e sensação de pertencimento. Este atributo é respaldado pela vegetação arbórea, que configura na dimensão do parque plano de vedo, que é a limitação do campo visual procedido pela vegetação disposta de maneira a limitar o campo visual, compartimentando o espaço de vivência. Esta é uma propriedade importante no espaço exterior porque ao se limitar o campo visual há condicionamento da horizontalidade pela verticalidade a partir do usuário. </p>
			<p>Os talhões de eucalipto e os bosques de essências heterogêneas são a vegetação que mais confere esta singularidade. A vegetação, originalmente, tinha como principais funções: atribuir composição de luz e sombra, configurar subespaços de uso, propiciar percursos semi-sombreados para as pessoas, e destacar o Conjunto Arquitetônico.</p>
			<p>Neste sentido, o parque e os seus subespaços foram criados configurando setores integrantes, justapostos e cadenciados articulados a partir dos caminhos, o sistema principal de vias que compõe a estrutura do parque. Esta característica está na geratriz da setorização a ser adotada, acrescida da dinâmica espacial imprimida pela transformação de uso e da própria vegetação no tempo histórico do parque.</p>
			<p>No parque, a reflexibilidade e a placidez são características que compõem propriedades justapostas. O Lago é o elemento nucleador destas propriedades pela sinuosidade e pela extensão ao qual se soma a capacidade para armazenar considerável volume de água e para instigar o lazer. Uma das propriedades é a de contrapor o Conjunto Arquitetônico, de outra propicia perspectivas estratégicas da cidade e do próprio parque.</p>
			<h4>SINGULARIDADE – POTENCIALIDADE – FRAGILIDADE – CONFLITO DE USO </h4>
			<p>A metodologia explicitada fundamenta a setorização aplicada. As Bases Naturais do Parque analisadas à luz das categorias de uso e dos dados tabulados do Processo Participativo são a ferramenta para o mapeamento.</p>
			<p>O Parque Ibirapuera tem diversos aspectos fundamentais que se influenciam e se limitam mutuamente, como o de patrimônio histórico e paisagístico, de relevância ambiental, de caráter cultural, de lazer e de atividades esportivas. Esta é a hierarquia que embasa a interpretação de cada setor.</p>
			<p>A singularidade do setor é caracterizada pela análise gráfica, produto da sobreposição dos mapeamentos Bases Naturais do Parque, denominado Mapa de Setorização. A Potencialidade compatibiliza o Mapa de Setorização com os Usos mais compatíveis pelas características físico-ambientais. A Fragilidade compatibiliza os Usos menos compatíveis devido às características físico-ambientais. O Conflito de Uso expõe onde pode haver impacto ambiental, comprometimento cultural, descaracterização do patrimônio ou desrespeito social como decorrência do uso público. A persistência do Parque, pública e institucionalmente, se compõe na multiplicidade destas dimensões e na decorrência de suas apropriações de uso.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>4.3.	Setores e Subsetores do Parque</h3>
			<p>Sobre o Parque Ibirapuera incidem os parâmetros de uso e ocupação do solo para Zonas Especiais de Proteção Ambiental – ZEPAM, conforme Lei 16.402/2016 . Todavia, as particularidades de implantação do parque consolidaram Setores e Subsetores bem definidos que orientam a apropriação do espaço por seus usuários.</p>
			<p>A setorização, ora proposta para o parque, corrobora e aprofunda o zoneamento pensado por Niemeyer em seu Plano Diretor de 1996 e aquele elaborado por equipe técnica da Secretaria Municipal do Verde e Meio Ambiente, em 2007. Ou seja, ordena o espaço do parque segundo as características existentes, tendo nos lagos um forte delimitador dos Setores Cultural e Ambiental, conforme pode ser observado na figura seguinte.</p>
			<p>O <b>Setor Cultural</b> abarca o platô mais elevado do parque e compreende o conjunto arquitetônico implantado em 1954 para os Festejos do IV Centenário da Fundação da Cidade de São Paulo composto pela grande Marquise, Pavilhões (Culturas Brasileiras, Bienal de São Paulo, Museu Afro), Oca e Auditório.</p>
			<p>Posteriormente, vieram reforçar o caráter da área, o Planetário (1957) e Escola Municipal de Astrofísica Professor Aristóteles Orsini (1961), hoje vinculados à Universidade Aberta do Meio Ambiente e Cultura de Paz – UMAPAZ.</p>
			<p>Ainda, sob a marquise está instalado, desde 1968, o Museu de Arte Moderna – MAM, e no lado oposto da Avenida 23 de Maio, fora dos limites do parque, o Museu de Arte Contemporânea da Universidade de São Paulo – MAC-USP inaugurou sua sede em 2012, no que fora, originalmente, o Pavilhão da Agricultura, quando das comemorações do IV Centenário.</p>
			<p>A paisagem desta área é predominantemente horizontal, delimitando-se pela Avenida Pedro Álvares Cabral, componente do sistema viário estrutural que liga as Zonas Oeste e Sul da cidade e, no lado oposto, é emoldurada pela verticalidade dos maciços arbóreos, que sinalizam o <b>Setor Ambiental</b>, observado na figura a seguir.</p>
			<figure title="Figura 16 – Imagem de satélite demonstrando a relação do Setor Cultural com o entorno e o Setor Ambiental do parque. Fonte: Google." class="coluna">
				<img :src="fileSrc('2fig16.jpg')" alt="Figura 16 – Imagem de satélite demonstrando a relação do Setor Cultural com o entorno e o Setor Ambiental do parque. Fonte: Google." style="height: auto; width: 100%;">
				<figcaption>Figura 16 – Imagem de satélite demonstrando a relação do Setor Cultural com o entorno e o Setor Ambiental do parque. Fonte: Google.</figcaption>
			</figure>
			<p>Tais características vocacionam o <b>Setor Cultural</b> para receber a maior parte dos eventos do parque, tais como congressos, simpósios, conferências, mostras e exposições de arte permanentes, temporárias ou itinerantes, orquestras, shows de dança, bienais de arquitetura e artes, eventos de moda, teatro e shows de música.</p>
			<p>O <b>Setor Cultural</b> ora proposto subdivide-se no <b>Subsetor de Cultura</b>, composto pelos Edifícios e Marquise do Conjunto Arquitetônico de Niemeyer, e o Pavilhão Japonês; e a <b>Subsetor Livre Cultural</b> envolve as áreas livres deste platô, como por exemplo, a Arena de Eventos, a Plateia Externa do Auditório, o Jardim das Esculturas com usos voltados à cultura e ao lazer.</p>
			<p>O <b>Subsetor de Cultura</b> nos edifícios compõe: Marquise, Bienal, Oca, Auditório, PACUBRA, Museu Afro Brasil, que possuem em seu entorno adjacente intensa arborização implantada caracterizada por conjuntos heterogêneos de espécies nativas e exóticas, como as tipuanas ao longo da empena do Museu Afro Brasil. O Pavilhão Japonês e Planetário e Escola de Astrofísica possuem a estrutura de vegetação originária do projeto destacando-se os Eucaliptos no Planetário e os jardins temáticos do Pavilhão Japonês.</p>
			<p>O <b>Setor Ambiental</b> abarca o platô inferior do parque e nele as características da ZEPAM são nítidas, conforme dispõe o artigo 19 da Lei de Uso e Ocupação do Solo que a define:</p>
			<p><b>Art. 19.</b> <cite> As Zonas Especiais de Proteção Ambiental (ZEPAM) são porções do território do Município destinadas à preservação e proteção do patrimônio ambiental, que têm como principais atributos remanescentes de Mata Atlântica e outras formações de vegetação nativa, arborização de relevância ambiental, vegetação significativa, alto índice de permeabilidade e existência de nascentes, incluindo os parques urbanos existentes e planejados e os parques naturais planejados, que prestam relevantes serviços ambientais, entre os quais a conservação da biodiversidade, controle de processos erosivos e de inundação, produção de água e regulação microclimática.</cite><sup>4</sup></p>
			<p>Nesta zona prevalecem maciços arbóreos e amplos gramados. A permeabilidade desta área deve, na medida do possível, ser ampliada, como por exemplo, com a remoção da ciclovia infantil, em desuso e caminhos secundários.</p>
			<p>Merece destaque a Praça da Paz, cujo gramado de generosas dimensões (cerca de 50.000m²) cumpre importante papel na permeabilidade do parque. Desta forma são incompatíveis atividades que levem ao pisoteio intenso, compactação do solo e volume de som alto.</p>
			<p>No que tange à fauna do parque este <b>Setor Ambiental</b> cumpre a função de proteção e abrigo, motivo pelo qual a iluminação dos postes deve estar direcionada abaixo da copa das árvores.</p>
			<p>São compatíveis com este Setor atividades de contemplação, relaxamento e atividades ao ar livre como trilhas para observação de árvores, observação de pássaros, piqueniques, atividades físicas nos equipamentos instalados (quadras esportivas e pista de cooper) e eventos de pequeno porte e baixo impacto, tais como práticas corporais, yoga, meditação, contação de histórias, pequenas exposições.</p>
			<p>O <b>Setor Ambiental</b> possui maior diversidade de usos e subdivide-se em Subsetores:</p>
			<p>O <b>Subsetor Educacional</b> possui estrutura própria de atividades e práticas educacionais e abarca o Viveiro Manequinho Lopes, a Universidade Aberta do Meio Ambiente e Cultura de Paz – UMAPAZ, o Planetário Aristóteles Orsini e Escola de Astrofísica, Campo Experimental da Escola de Jardinagem e o Centro de Convivência e Cooperativa – CECCO, os quais prestam importantes serviços educacionais não formais e promovem a cultura de paz.</p>
			<p>A singularidade funcional restritiva de áreas como o Viveiro Manequinho Lopes, a UMAPAZ, o CECCO e o Campo Experimental geograficamente instalados no <b>Setor Ambiental</b> são objeto de dinâmicas próprias.</p>
			<figure title="Figura 17 – Subsetores do Parque Ibirapuera. Fonte: PMSP.Figura 21 – Subsetores do Parque Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig17.jpg')" alt="Figura 17 – Subsetores do Parque Ibirapuera. Fonte: PMSP.Figura 21 – Subsetores do Parque Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 17 – Subsetores do Parque Ibirapuera. Fonte: PMSP.Figura 21 – Subsetores do Parque Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<p>O <b>Subsetor de Preservação</b>, voltado à nidificação e proteção da fauna silvestre, situa-se entre o <b>Subsetor Livre Cultural</b> e o <b>Subsetor de Esporte</b> e <b>Recreação.</b></p>
			<p>O <b>Subsetor de Esporte</b> e <b>Recreação</b> envolve usos ligados ao esporte e à recreação programática, com equipamentos para estas práticas. Destacam-se pela singularidade o Parquinho, as áreas com quiosques e pequenas instalações originalmente envolvida por conjuntos de árvores nativas. </p>
			<p>O <b>Subsetor de Lazer</b> abrange as áreas programáticas como a Serraria, a Praça Burle Marx e a área de Piqueniques e caracteriza-se pelas atividades mais lúdicas de recriação, ou ócio, fundamentais no restabelecimento psíquico, pessoal e emocional. São atividades muito prazerosas, e os parques são espaços muito apropriados à sua efetivação.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">5. MATRIZ DE COMPATIBILIDADE</h2>
			<CommentsContext :id="commentId()" :context="'5. MATRIZ DE COMPATIBILIDADE'">
			<ul class="links">
				<li>
					<a :href="src('arquivos/pdp-ibirapuera/CAP 5_Matriz de compatibilidade_bases naturais.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Matriz de compatibilidade_bases naturais.pdf</div>
						<span>303 KB</span>
					</a>
				</li>
			</ul>
			<ul class="links">
				<li>
					<a :href="src('arquivos/pdp-ibirapuera/CAP 5_Matriz de compatibilidade_usos e restrições.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Matriz de compatibilidade_usos e restrições.pdf</div>
						<span>169 KB</span>
					</a>
				</li>
			</ul>
			<p>A Matriz de Compatibilidade está fundamentada na Metodologia de Planejamento da Paisagem proposta por Ian Mc Harg (ver Caderno I).</p>
			</CommentsContext>
			<p>Na verdade, pode-se entender haver três matrizes de compatibilidade. A primeira Matriz analisa a intersecção das Bases Naturais do Parque<sup>5</sup> ÁGUA, SOLO, VEGETAÇÃO, FAUNA, subdividida nas ocorrências contemporâneas e os Usos Fundamentais do Parque também subdividido nas tipologias contemporâneas. Reitera-se que o Uso Ambiental é hierarquicamente superior aos demais (Cultural, Educacional, Lazer Recreativo, Ócio e Lazer Esportivo).  A intersecção analisa a compatibilidade de uso com a Base Natural classificando-a como plenamente compatível, medianamente compatível, pouco compatível e incompatível.  Se não houver pertinência entre a Base Natural e o Uso Fundamental, naturalmente não haverá a análise.</p>
			<p>A partir da leitura dessa matriz pode-se observar que, de forma geral, os usos apresentam maior potencial de impacto ou são incompatíveis com a fauna e os elementos de água.</p>
			<p>No caso da fauna, a incompatibilidade com os usos do parque está relacionada às áreas de nidificação, abrigo e reprodução, portanto, mais restritas, sendo algumas delas delimitadas como Subzona de Preservação, conforme capítulo anterior deste Plano. </p>
			<p>Já no caso dos elementos de água como o lago, os córregos e as áreas de alagamento, a matriz demonstra que os usos, sejam eles culturais ou de lazer, apresentam pouca compatibilidade com este elemento e deverão, portanto, ser restringidos nestas áreas.</p>
			<p>A segunda Matriz analisa a intersecção entre os Usos Fundamentais do Parque<sup>6</sup>, de maneira viabilizar multiplicidades de usos no parque. Esta matriz também classifica a compatibilidade em plena, média, pouca e incompatível. Pretende-se utilizar a hierarquia de relevância dos Usos Fundamentais para orientar as Ações de Projeto e Visões de Futuro do Plano Diretor.</p>
			<p>A leitura da Matriz de Compatibilidade – Usos Fundamentais mostra que há plena compatibilidade entre os diversos usos do parque, ressaltando seu caráter de espaço múltiplo e dinâmico. Alguns usos como cachorródromo e as atividades de lazer esportivo apresentam pouca compatibilidade em relação à outras atividades do parque ou entre elas mesmas, por demandarem espaços específicos e por vezes restritos para a sua realização.</p>
			<p>A terceira Matriz de Restrições analisa as consequências de Uso como comprometimentos categorizados em impacto ambiental, comprometimento cultural, descaracterização do patrimônio ou desrespeito social. É de intenção também analisar nesta Matriz as possibilidades de mitigação existentes. </p>
			<p>De maneira geral, os diversos usos do Parque podem ser fonte de conflitos entre usuários quando a competição pelos espaços ocorre de forma livre, sem um correto ordenamento. Essa condição pode resultar em acidentes envolvendo, por exemplo, ciclistas, patinadores, corredores e pedestres. Música alta, uso de drogas pelos espaços livres são outras formas de desrespeito social que podem gerar incômodos para a coletividade.</p>
			<p>Os impactos ambientais resultantes das diversas formas de uso do Parque também não são desprezíveis, especialmente quando se trata dos usos relacionados às edificações. Na falta de cuidados adequados, esses locais podem ser pólos de elevado consumo de recursos, como água e energia elétrica, de impermeabilização, compactação e erosão do solo, de geração de resíduos líquidos (esgoto) e sólido (lixo), de ruído, e ainda podem constituir barreiras para a fauna. </p>
			<p>De maneira mais pontual, impactos como a descaracterização patrimonial também podem ocorrer, no caso da falta de correta organização de eventos temporários que envolvem algum tipo de instalação, como barracas de feira de artesanato.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">6. DIRETRIZES PARA EVENTOS</h2>
			<CommentsContext :id="commentId()" :context="'6. DIRETRIZES PARA EVENTOS'">
			<p>As seguintes diretrizes gerais deverão ser observadas no caso de realização de eventos no Parque Ibirapuera:</p>
			</CommentsContext>
			<ul>
				<li>Os eventos em espaços livres devem ser esporádicos, temporários, gratuitos ou pagos, abertos ao público em geral, organizados por especialistas, prioritariamente de natureza cultural, educativa, voltado ao bem-estar e saúde, sustentável ou de responsabilidade socioambiental, considerando os aspectos de preservação ambiental, com objetivos institucionais, comunitários ou promocionais, garantindo o conforto do usuário do parque e a sua fruição pública, sem nenhum tipo de isolamento da área e sem impactar o uso dos equipamentos do parque pelos demais usuários.</li>
				<li>Os eventos realizados no Parque Ibirapuera devem ser compatíveis com os as características dos Setores definidos neste Plano Diretor.</li>
				<li>Os eventos no Setor Ambiental devem ser de pequeno porte (até 250 pessoas) e baixo impacto, tais como eventos de yoga atividades associadas ao bem estar, meditação, contação de histórias, piqueniques, pequenas exposições, observação do céu noturno. Não é permitido montagem de estruturas pesadas, geradores ou aparelhagem de som. </li>
				<li>Por situarem-se no Setor Ambiental do parque, os eventos realizados nas quadras esportivas limitam-se a 250 (duzentas e cinquenta) pessoas (pequeno porte), utilizando luz natural (diurnos), sem montagem de estruturas pesadas com arquibancadas e tablados, geradores ou aparelhagem de som.</li>
				<li>Nenhum dos eventos no parque deve comprometer a fruição pública, entendida como o ato de o público usuário do parque desfrutar, com satisfação ou prazer, os espaços livres, os quais não podem ser fechados com instalações, equipamentos ou isolados por quaisquer meios, não sendo exclusivo do público-alvo do evento, durante sua realização.</li>
				<li>Visando a segurança dos usuários do parque, a área onde ocorrerá o evento poderá ser isolada tão somente durante a montagem de estruturas, instalações e equipamentos.</li>
				<li>Os eventos serão realizados em horários e locais delimitados e previamente comunicados ao público, desde que não prejudiquem a fruição do parque por parte dos usuários, observadas as diretrizes deste Plano Diretor.</li>
				<li>Os eventos devem estar inseridos dentro do horário de funcionamento do parque, devendo ser encerrados, no máximo 1 (uma) hora antes do fechamento dos portões para que o público tenha tempo hábil para deixar o parque.</li>
				<li>A limitação à poluição sonora deve atender aos critérios técnicos definidos na Lei 16.402/2016 – Parcelamento Uso e Ocupação do Solo.</li>
				<li>O responsável pelo evento deverá entregar a área do evento limpa, bem como calçadas e alamedas adjacentes, respondendo por eventuais danos causados ao parque.</li>
				<li>Deverá ser requerido o Alvará de Autorização para Eventos Públicos e Temporários à Secretaria Municipal de Licenciamento.</li>
				<li>A Companhia de Engenharia de Tráfego – CET deverá ser comunicada previamente para os casos de eventos que interfiram nas condições de circulação de veículos e acessos nas vias do entorno do parque.</li>
				<li>Deverá ser requerida dada ciência aos  órgãos de preservação do patrimônio cultural  para os eventos a serem realizados dentro do parque, por meio de relatórios semestrais.</li>
				<li>Deverá ser consultada Comissão de Proteção à Paisagem Urbana – CPPU, quanto à inserção de nomes e logos de organizadores na comunicação visual do evento, intervenções artísticas em edificações e monumentos e intervenções urbanas com exposições de esculturas.</li>
				<li>Nos eventos com previsão de público superior a 10.000 pessoas até o limite da capacidade máxima,  a Municipalidade poderá condicionar a expedição do Alvará de Autorização à apresentação de projeto de monitoramento por câmeras, o qual será de responsabilidade do idealizador do evento e abrangerá também a chegada e a saída do público ao evento, de acordo com a legislação vigente.</li>
				<li>Deverá ser solicitado policiamento ostensivo para espetáculos e apresentações públicas com ingresso gratuito.</li>
				<li>Deverá haver interlocução entre a administração do parque e os equipamentos fora de sua gestão, como a Bienal, Museu Afro, MAM e Pavilhão Japonês, para coordenar o calendário de programação e eventos, de forma a minimizar os impactos no parque e seu entorno e para o cumprimento das diretrizes do Plano Diretor.</li>
				<li>Durante a realização do evento será permitido em áreas previamente determinadas e sob autorização a comercialização de alimentos em veículos automotores, assim considerados os equipamentos montados sobre veículos a motor ou rebocados por estes, desde que recolhidos ao final do expediente, até o comprimento máximo de 6,30m (seis metros e trinta centímetros), sendo vedada a comercialização de bebidas.</li>
				<li>Alimentos comercializados em carrinhos ou tabuleiros, bem como em barracas desmontáveis, são permitidos desde que não comprometam as vias de circulação do parque e a fruição de áreas livres.</li>
				<li>Poderão ser instaladas feiras orgânicas e feiras de agricultura limpa no parque, a critério da administração, as quais deverão atender às disposições legais que regulam a matéria, cabendo sua administração à Supervisão Geral de Abastecimento ABAST, da Secretaria Municipal de Coordenação das Subprefeituras.</li>
				<li>Os limites de pessoas estabelecido nas Tabelas 06 e 07, poderão ser revistos mediante adequações estruturais dos espaços, critérios técnicos e emissão dos respectivos alvarás.</li>
				<li>Os eventos na marquise condicionam-se à modelagem estrutural da mesma e, caso seja confirmada a necessidade, às obras de reforço estrutural da mesma.</li>
			</ul>
			<figure title="Figura 18 –  Áreas definidas para eventos em espaços livres e espaços fechados. Fonte: PMSP.." class="coluna">
				<img :src="fileSrc('2fig18.png')" alt="Figura 18 –  Áreas definidas para eventos em espaços livres e espaços fechados. Fonte: PMSP.." style="height: auto; width: 100%;">
				<figcaption>Figura 18 –  Áreas definidas para eventos em espaços livres e espaços fechados. Fonte: PMSP..</figcaption>
			</figure>
			<figure title="Figura 19 – Mapa das áreas definidas para eventos em espaços fechados. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig19.jpg')" alt="Figura 19 – Mapa das áreas definidas para eventos em espaços fechados. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 19 – Mapa das áreas definidas para eventos em espaços fechados. Fonte: PMSP.</figcaption>
			</figure>
			<figure class="coluna">
				<table><tr><td colspan="5"><p><b>Setor Cultural – Eventos em espaços fechados</b></p></td></tr><tr><td colspan="2"><p><b>Espaço</b></p></td><td><p><b>Área para eventos (m²)</b></p></td><td><p><b>Limite de pessoas</b></p><p><b>(estimado)</b></p></td><td><p><b>Horário permitido</b></p></td></tr><tr><td colspan="2"><p>Planetário, cúpula</p></td><td><p> 2.193</p></td><td><p>300/evento</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td colspan="2"><p>Pacubra</p></td><td><p>10.891</p></td><td><p>800/evento</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td colspan="2"><p>Auditório</p></td><td><p>7.000</p></td><td><p>800/evento</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td colspan="2"><p>Bienal</p></td><td><p>28.000</p></td><td><p>5.000/evento</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td colspan="2"><p>MAM</p></td><td><p> 3.500 m²</p></td><td><p> 1.700/dia</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td rowspan="2"><p>Museu Afro</p></td><td><p>Exposições</p></td><td><p>12.000</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td><p>Auditório</p></td><td><p>425</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td rowspan="2"><p>Escola de Astrofísica</p></td><td><p>Auditório</p></td><td><p> 833</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td><td rowspan="2"><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td><p>Salas de aula</p></td><td></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td colspan="2"><p>Oca, térreo.</p></td><td><p> 10.625</p></td><td><p>750 simultaneamente</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr></table>
				<figcaption>Tabela 6 – Setor Cultural, Escola de Astrofísica e Planetário: eventos em espaços fechados. Fonte: PMSP.</figcaption>
			</figure>
			<figure title="Figura 20 –  Áreas definidas para eventos em espaços livres e espaços fechados. Fonte: PMSP.." class="coluna">
				<img :src="fileSrc('2fig20.png')" alt="Figura 20 –  Áreas definidas para eventos em espaços livres e espaços fechados. Fonte: PMSP.." style="height: auto; width: 100%;">
				<figcaption>Figura 20 –  Áreas definidas para eventos em espaços livres e espaços fechados. Fonte: PMSP..</figcaption>
			</figure>
			<figure class="coluna">
				<table><tr><td colspan="4"><p><b>Eventos em Áreas Livres</b></p></td></tr><tr><td colspan="4"><p><b>Setor Cultural</b></p></td></tr><tr><td><p><b>Espaço</b></p></td><td><p><b>Área para</b></p><p><b>eventos (m²)</b></p></td><td><p><b>Limite de pessoas/evento</b></p><p><b>(estimado)</b></p></td><td><p><b>Horário permitido</b></p></td></tr><tr><td><p>Marquise</p></td><td><p>26.541</p></td><td><p>250</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td><p>Platéia Externa do Auditório</p></td><td><p>~20.000</p></td><td><p> 15.000</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td><p>Arena de Eventos</p></td><td><p>~5.500</p></td><td><p>5.000</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td><p>Arena da Ponte de Ferro</p></td><td><p>~500</p></td><td><p> 250</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td><p>Bosque da Figueira</p></td><td><p>~2.000</p></td><td><p>500</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td><p>Entorno da Fonte Multimídia</p></td><td><p> ~3.000 </p></td><td><p>Sob análise</p></td><td><p>Desde a abertura dos portões até 1h antes do seu fechamento</p></td></tr><tr><td colspan="4"></td></tr><tr><td colspan="4"><p><b>Setor Ambiental</b></p></td></tr><tr><td><p><b>Espaço</b></p></td><td><p><b>Área para</b></p><p><b>eventos (m²)</b></p></td><td><p><b>Limite de pessoas/evento</b></p><p><b>(estimado)</b></p></td><td><p><b>Horário permitido</b></p></td></tr><tr><td><p>Serraria, Praça Burle Marx, Bosque da Leitura.</p></td><td><p>~1.170</p></td><td><p>250</p></td><td><p>08h às 21h</p></td></tr></table>
				<figcaption>Tabela 7 – Eventos em espaços livres do parque. Fonte: PMSP.</figcaption>
			</figure>
				<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>6.1 Diretrizes de Uso – Locação publicitária</h3>
			<p>	Além dos eventos, prática que já é permitida no parque e está consolidada por este Plano Diretor, é também permitida a utilização dos espaços e equipamentos do Ibirapuera como cenário fotográfico ou de filmagens, para a realização de comerciais, propagandas, filmes, programas de TV, catálogos publicitários, promoção de marcas, produtos ou serviços, ensaios com modelos e outros com finalidade comercial, desde que atendida a Lei 14.223/2006 – Cidade Limpa e aprovada pela Gestão do Parque.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>6.2 Diretrizes de Uso – Outras Atividades</h3>
			<p>	Sendo os parques zonas especiais de preservação ambiental que comportam atividades de contemplação, lazer, recreação, atividades esportivas e físicas relacionadas ao bem estar e saúde, bem como propiciam a interação social, têm se consolidado no Parque Ibirapuera a exploração de atividades econômicas, tais como visitas guiadas gerais ou com temas específicos, assessorias esportivas, grupos de yoga e atividades similares, bem como tem aumentado a demanda por piqueniques corporativos, de aniversário ou casamentos, entre outros.</p>
			<p>A prática de gestão do parque identifica que os piqueniques têm ocorrido em áreas gramadas e sombreadas em geral (Bosque das Araucárias, bosque próximo à GCM, Bosque da Leitura). As assessorias esportivas tem utilizado como ponto de encontro e aquecimento físico a grande marquise, as marquises da Bienal, Museu Afro, Pavilhão das Culturas Brasileiras, Praça do Porquinho e Serraria. Os grupos de Yoga têm utilizado com ponto de encontro e práticas a Praça do Porquinho, Praça da Paz e Serraria (Figura 25).</p>
			<figure title="Figura 21 – Levantamento da situação atual da distribuição de outras atividades no Parque Ibirapuera, sem regulação de uso. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig21.png')" alt="Figura 21 – Levantamento da situação atual da distribuição de outras atividades no Parque Ibirapuera, sem regulação de uso. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 21 – Levantamento da situação atual da distribuição de outras atividades no Parque Ibirapuera, sem regulação de uso. Fonte: PMSP.</figcaption>
			</figure>
			<p>	Tais atividades passam a ser oficialmente permitidas, observados os espaços definidos para cada tipo de atividade, conforme a figura 5, e as seguintes diretrizes.</p>
			<figure title="Figura 22 – Distribuição de outras atividades no parque. Proposta de regulação. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fig22.jpg')" alt="Figura 22 – Distribuição de outras atividades no parque. Proposta de regulação. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Figura 22 – Distribuição de outras atividades no parque. Proposta de regulação. Fonte: PMSP.</figcaption>
			</figure>
			<figure class="coluna">
				<table><tr><td><p><b>Atividades</b></p></td><td><p><b>Limite de pessoas/evento</b></p><p><b>(estimado)</b></p></td><td><p><b>Horário permitido</b></p></td></tr><tr><td><p>Assessoria esportiva, grupos de yoga, ginástica e atividades similares</p></td><td><p>250</p></td><td><p>Desde a abertura dos portões até 21h de segunda a sexta-feira.</p><p>Das 06 às 10 aos sábados e domingos.</p></td></tr><tr><td><p>Piquenique com mais de 30 pessoas (corporativo, aniversário, casamento)</p></td><td><p>250</p></td><td><p>08h às 21:30h</p></td></tr></table>
				<figcaption>Tabela 8 – Usos Atividades. Fonte: PMSP.</figcaption>
			</figure>
			<p>Cabe ressaltar que estas atividades também deverão atender a limitação à poluição sonora, considerando os critérios técnicos definidos na Lei 16.402/2016 – Parcelamento Uso e Ocupação do Solo.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">7. DIRETRIZES DE PROJETO E OBRA</h2>
			<CommentsContext :id="commentId()" :context="'7. DIRETRIZES DE PROJETO E OBRA'">
			<p>Todas as intervenções resultantes das Ações de Projeto e Visão de Futuro estabelecidas para o Parque Ibirapuera deverão ser aprovadas pela Secretaria do Verde e Meio Ambiente – SVMA, e pelos órgãos de preservação do patrimônio histórico, cultural e ambiental, observados os conceitos de sustentabilidade ambiental, o menor impacto ao meio ambiente e à paisagem do parque, os parâmetros urbanísticos e as normativas relativas ao seu tombamento vigentes, e as diretrizes relacionadas a seguir:</p>
			</CommentsContext>
			<ul>
				<li>Todas as intervenções no Parque Ibirapuera deverão ser precedidas de levantamento da situação atual e projetos, em especial de arquitetura e engenharia, incluindo as demolições necessárias;</li>
				<li>As reformas e a manutenção de edificações protegidas por tombamento inseridas no Parque Ibirapuera, deverão adotar o “<em>Roteiro Básico para elaboração da documentação necessária visando a obtenção do Atestado de Conservação do Imóvel Tombado</em>”, do Departamento de Patrimônio Histórico (DPH), anexo a este Plano Diretor;	</li>
				<li>Os projetos, obras e serviços realizados no Parque Ibirapuera deverão garantir a acessibilidade às pessoas com deficiência e mobilidade reduzida, devendo estar em conformidade com as legislações e com as normas aplicáveis, com as determinações do Código de Obra e Edificações e das normas técnicas aplicáveis, em especial as Leis Federais nº 10.098/00 e nº 13.146/15, o Decreto Federal nº 5.296/04 e a NBR ABNT 9050:2015, a NBR ABNT 15599:2008, ou outras que vierem a substituí-las;</li>
				<li> projetos e as obras deverão, sempre que possível, adotar práticas sustentáveis no desenho e na construção, a fim de promover eficiência energética e economia no uso da água e de outros materiais;</li>
				<li>Os projetos deverão ter como base os princípios da arquitetura flexível e adaptável a diversos usos e atividades e utilizar materiais sustentáveis, visando à máxima integração com a natureza e o mínimo impacto ao meio ambiente e à paisagem do Parque Ibirapuera;</li>
				<li>A reforma, ampliação e construção de sanitários deve considerar a obrigatoriedade de instalação de: sanitários acessíveis em todas as unidades; fraldários e instalações sanitárias infantis, especialmente junto às áreas de maior concentração de crianças, tais como os parquinhos; vestiários, especialmente junto às áreas de prática esportiva, tais como quadras e pistas de caminhada;</li>
				<li>A escolha dos materiais e do sistema construtivo de novas edificações, de reforma ou restauro de edificações e de instalações existentes deverá minimizar os impactos de obra no interior do Parque Ibirapuera, visando a uma obra seca, com diminuição de resíduos e que foque na rapidez na implantação da estrutura, visando ao mínimo impacto na sua visitação;</li>
				<li>Os acessos para veículos e pedestres à obra deverão ser mantidos em perfeitas condições de tráfego durante todo o período de execução da mesma;</li>
				<li>As eventuais demolições e retiradas não deverão causar danos a terceiros e ao meio ambiente, devendo ser adotadas medidas para a segurança dos operários e dos usuários do Parque Ibirapuera;</li>
				<li>Nas demolições deverão ser considerados, quando necessário, eventuais elementos a preservar, assim como a sua proteção, desmonte e relocação, e deverão ser previstos meios para não gerar impactos ao meio ambiente e aos usuários do Parque Ibirapuera, e o material demolido e/ou retirado deverá ter a devida destinação nos termos da legislação vigente;</li>
				<li>Todo elemento a preservar retirado por meio de demolição deve ser acondicionado e guardado atendendo ao tipo de material e sua dimensão, e o seu armazenamento deve ser delimitado ao canteiro, efetuando-se a sua manutenção, protegendo-o dos elementos dos fatores climatérios, de vandalismo e de roubo;</li>
				<li>Ao final da obra, devem ser removidas todas as instalações do acampamento e canteiro de obras como equipamentos, construções provisórias, detritos e restos de materiais, de modo a apresentar as áreas utilizadas totalmente limpas;</li>
				<li>Os projetos e obras de sinalização visual do Parque Ibirapuera deverão seguir o contido Termo de Referência de Sinalização, apenso a este Plano Diretor.</li>
				<li>Não será permitida a impermeabilização de novas áreas de estacionamento no nível do solo. As vagas nos estacionamentos existentes poderão ser remodeladas.</li>
			</ul>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">8. PRINCÍPIOS E PRÁTICAS DE SUSTENTABILIDADE</h2>
			<CommentsContext :id="commentId()" :context="'8. PRINCÍPIOS E PRÁTICAS DE SUSTENTABILIDADE'">
			<p>Há muito tempo que a crescente demanda por alimento, água, energia e todo tipo de materiais impõe altos custo aos complexos sistemas naturais onde interagem plantas, animais e as próprias pessoas. Isso por sua vez resulta em problemas importantes, como crises de abastecimento de água, apagões de energia, excesso na geração de resíduos, entre outros. Além disso, muitas vezes a exploração do meio-ambiente pode tornar a sociedade mais rica, porém também mais desigual, onde ricos ficam mais ricos e pobres mais pobres.</p>
			</CommentsContext>
			<p>Proteger e melhorar nosso bem-estar futuro requer um uso mais sábio e menos destrutivo da natureza. Portanto, é preciso desenvolver ações que fomentem a sustentabilidade, a participação e inclusão social, o respeito às minorias e grupos sociais vulneráveis, buscando com essas ações gerar externalidades positivas que transcendam o perímetro do Parque.</p>
			<p>Dessa forma, seguindo princípios e práticas de sustentabilidade é possível atingir esses objetivos e ainda garantir a proteção de toda diversidade biológica e de recursos naturais (águas e solos) existente no Ibirapuera e, consequentemente, toda geração de serviços ambientais que resultam da integridade dos seus ecossistemas. Afinal, são mais de 310 espécies de animais - sete delas ameaçadas de extinção - e aproximadamente 16.000 árvores de mais de 350 espécies diferentes, que por sua vez, contribuem para a produção de água, polinização, regulação do microclima, formação de solo, dispersão de sementes e ciclagem de nutrientes.</p>
			<p>Como princípios e práticas de sustentabilidade, entende-se:</p>
			<ul>
				<li>O uso racional de energia por meio do favorecimento de ventilação e iluminação natural na tipologia arquitetônica;</li>
				<li>A utilização de cores claras em áreas internas e externas e o sombreamento de fachadas, visando diminuir a carga térmica no verão e os gastos com ar condicionado;</li>
				<li>Não instalação de estruturas que aumentem o risco de colisão com aves silvestres, como grandes painéis transparentes de vidro ou acrílico;</li>
				<li>Uso de iluminação que minimize os efeitos danosos da poluição luminosa (ex. interferência no comportamento de animais noturnos), seguindo, por exemplo, as recomendações da International Dark-Sky Association - darksky.org;</li>
				<li>O uso de luminárias e lâmpadas com alta eficiência lumínica, resultando em baixa potência instalada e garantia de conforto aos usuários;</li>
				<li>A priorização do uso de materiais recicláveis ou reutilizados (ex. madeira de demolição), que diminuam desperdícios e/ou resíduos na obra e possam ser reaproveitados;</li>
				<li> dimensionamento eficiente de instalações elétricas e hidráulicas e de sistemas estruturais, para evitar danos a equipamentos e desperdícios de materiais;</li>
				<li>A utilização de iluminação, aquecedores, equipamentos e ar condicionado com selos de alta eficiência energética;</li>
				<li>A captação e tratamento de água de chuva para reutilização em irrigação de jardins e bacias sanitárias;</li>
				<li>A instalação de equipamentos para economia de água nos banheiros; e</li>
				<li>O uso de vasos sanitários secos, ou com válvulas de acionamento de baixa vazão, e fechamento automático.</li>
			</ul>
			<p>Por fim, deve-se garantir, por meio da permanente atualização de laudos técnicos, que o Parque se encontre livre de vetores que possam oferecer riscos à flora, fauna, aos usuários e aos equipamentos do Parque.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>8.1 Gerenciamento de resíduos sólidos e coleta seletiva</h3>
			<p>As lixeiras do Parque apresentam-se em distintos estados de conservação, umas em bom estado e outras deterioradas. Além disso, são insuficientes e inadequadas para atender o volume de resíduos produzidos nos dias de grande movimento do Parque.</p>
			<p>	Nesse sentido, a gestão dos resíduos sólidos no Parque deve seguir as seguintes diretrizes:</p>
			<ul>
				<li>Adotar boas práticas, como a não geração, redução, reutilização, coleta seletiva, reciclagem, compostagem, logística reversa e tratamento preliminar dos resíduos sólidos.</li>
				<li>Realizar a compostagem dos resíduos orgânicos como, por exemplo, material de poda e varrição (folhas e ramos) nos locais já destinados para isso atualmente, como na área de manutenção e manejo que fica próxima ao portão 5, que pode ser otimizada para aumentar a capacidade de compostagem.</li>
				<li>Destinar materiais recicláveis e reaproveitáveis (ex. óleo de cozinha) para associações, cooperativas ou outras organizações que recebam o material para o tratamento adequado.</li>
				<li>Reaproveitar os resíduos arbóreos para outros usos como, por exemplo, mobiliário do Parque.</li>
			</ul>
			<figure title="Foto 13 – Banco feito com árvore caída no parque." class="coluna">
				<img :src="fileSrc('2fot13.jpg')" alt="Foto 13 – Banco feito com árvore caída no parque." style="height: auto; width: 100%;">
				<figcaption>Foto 13 – Banco feito com árvore caída no parque.</figcaption>
			</figure>
			<ul>
				<li>Implantar lixeiras nos locais com maior concentração de usuários e ou manter as lixeiras do Parque disponíveis para receberem novos resíduos, impedindo o acesso de animais silvestres e domésticos a estes dispositivos.</li>
			</ul>
			<figure title="Foto 14 – Lixeiras do Parque Ibirapuera. Fonte: PMSP." class="coluna">
				<img :src="fileSrc('2fot14.jpg')" alt="Foto 14 – Lixeiras do Parque Ibirapuera. Fonte: PMSP." style="height: auto; width: 100%;">
				<figcaption>Foto 14 – Lixeiras do Parque Ibirapuera. Fonte: PMSP.</figcaption>
			</figure>
			<ul>
				<li>Manter registro quantitativo dos resíduos gerados no Parque, informando sua origem, tipo e destinação final, devendo atualizá-lo para fins de monitoramento.</li>
			</ul>

			<h3>8.2 Educação Ambiental</h3>
			<p>Desde 2014 a cidade de São Paulo conta com uma Política Municipal de Educação Ambiental – Lei Municipal nº 15.967 de 24 de janeiro de 2014 – que prevê diversas atividades no âmbito do Programa Municipal de Educação Ambiental, que inclui os Parques urbanos. Destacam-se a UMAPAZ (Universidade Aberta do Meio Ambiente e da Cultura de Paz) que desenvolve e dissemina desde 2006 conhecimentos e práticas de educação para a sustentabilidade, e o programa Trilhas Urbanas, que potencializa o aspecto pedagógico dos Parques, desenvolvendo nesses espaços trilhas monitoradas como estratégia em educação ambiental.</p>
			<p>Nesse sentido, cabe à gestão do Parque atuar em consonância com as ações já desenvolvidas, seguindo as diretrizes estabelecidas pela Política Municipal de Educação Ambiental e proporcionando atividades a um maior número de pessoas, incluindo usuários do Parque, escolas e comunidade do entorno. O programa de educação ambiental a ser elaborado pela gestão do Parque pode incluir as seguintes atividades:</p>
			<ul>
				<li>Trilhas e roteiros de observação da natureza dentro do Parque.li>
				<li>Plantio e manutenção de hortas e canteiros orgânicos.
				</li>
				<li>Práticas de agroecologia e permacultura.</li>
				<li>Visitas aos viveiros de produção de mudas para a comunidade, com o intuito de sensibilizar a população para a importância dos serviços desempenhados por esses equipamentos.</li>
				<li>Oficinas de compostagem de matéria orgânica.</li>
				<li>Mobilização para coleta seletiva e uso racional da água – conscientização e esclarecimento de dúvidas.</li>
				<li>Cursos sobre a temática “biodiversidade” para todos os tipos de público.</li>
				<li>Atividades de promoção da cidadania socioambiental para legitimação das políticas públicas.
					<p>Outras ações de educação ambiental indicadas são:</p>
				</li>
				<li>Divulgar informações e curiosidades sobre as espécies de animais silvestres que ocorrem no Parque e de medidas simples para conservação dessas por meio de placas informativas.</li>
				<li>Identificar, por meio de placas informativas, as árvores que se destacam ao longo das trilhas e caminhos do Parque. As placas devem ser submetidas ao Herbário Municipal para conferência antes da sua produção. Forma, fixação e design devem atender aos padrões estabelecidos por CGPABI. Dados básicos: nome popular, nome científico, família botânica. Dados recomendados: área de distribuição (se é nativa do município), se é espécie ameaçada, curiosidades. Estes dados podem ser acessados por QR Code e devem estar atualizados com as informações do Herbário Municipal.</li>
				<li>Sediar e promover eventos para a população em geral, relacionados à biodiversidade.</li>
				<li>Criar material educativo com base na identificação de infrações ambientais internas ao Parque.</li>
				<li>Garantir equipe técnica para a realização das atividades de educação ambiental com os usuários do Parque e escolas, e para a elaboração de material paradidático sobre educação ambiental e comportamento cidadão aplicado ao Parque, a ser disponibilizado de forma online e/ou impressa, de acordo com diretrizes dada pela UMAPAZ.</li>
			</ul>
			<figure title="Foto 15 – Curso realizado na área do campo experimental. " class="coluna">
				<img :src="fileSrc('2fot15.jpg')" alt="Foto 15 – Curso realizado na área do campo experimental." style="height: auto; width: 100%;">
				<figcaption>Foto 15 – Curso realizado na área do campo experimental. </figcaption>
			</figure>
			<p>O programa de educação ambiental a ser elaborado pela gestão do Parque deverá ser revalidado em todo mês de dezembro, a fim de se realizar um novo plano anual de ação para o ano seguinte.</p>
			<p>O plano deve garantir que as atividades de educação ambiental desenvolvidas no Parque deverão ser distribuídas ao longo do ano, alocadas em diferentes horários e dias da semana a fim de contemplar todos os diversos públicos.</p>
			<p>Para o detalhamento do conteúdo do Programa de Educação Ambiental e dos planos anuais, a gestão do Parque poderá contar com a colaboração da UMAPAZ.</p>
			<p>Cabe a gestão do Parque emitir relatórios técnicos periódicos todo mês de novembro, que descrevam em detalhes as ações e atividades de Educação Ambiental desenvolvidas, e que poderão ser compartilhados com a UMAPAZ,  que poderá instruir a revisão do plano de ação anual.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="2">9. AÇÕES DE PROJETO E VISÕES DE FUTURO</h2>
			<CommentsContext :id="commentId()" :context="'9. AÇÕES DE PROJETO E VISÕES DE FUTURO'">
			<p>A partir das leituras realizadas, corroboradas pelas oficinas integrantes do processo de construção coletiva deste Plano Diretor, identificaram-se as principais Ações de Projeto e Visões de Futuros para as instalações, equipamentos, infraestrutura e espaços do parque.</p>
			</CommentsContext>
			<p>Conforme consta no Caderno 1 do Plano, as Ações de Projeto correspondem às intervenções cujo tempo de desenvolvimento seja de até 1 ano para sua implementação ou efetivação.</p>
			<p>Denominam-se Visões de Futuro as intervenções e os projetos que necessitam de período maior para a sua implementação.  Neste caso, e para priorizar os trabalhos, será adotado a denominação de Curto Prazo para as intervenções que necessitam de até 2 anos para a efetivação; Médio Prazo para as intervenções que necessitam de até 5 anos para a efetivação; Longo Prazo para as intervenções que necessitam de até 10 anos.</p>
			<p>Cabe destacar novamente que as intervenções identificadas aqui necessitam serem desenvolvidas por meio de projetos específicos de arquitetura, engenharia, paisagismo, entre outros, além de necessitarem de aprovação, em especial pelos órgãos de preservação do patrimônio, considerando que o parque como um todo e não somente o conjunto arquitetônico das Comemorações do IV Centenário é protegido por tais órgãos.</p>
			<p>Outra observação importante é que a premissa do Plano Diretor de 2007, de que a paisagem do parque deve ser a balizadora das Ações de intervenção, deve ser mantida, assim como a implantação ou melhoria da infraestrutura como acessibilidade, sinalização e comunicação visual, mobiliário e iluminação, imprescindível aos diversos usos que lá ocorrem.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.1 Pavilhão Lucas Nogueira Garcez – Oca</h3>
			<wbr>
			<ul>
				<li><b>Caracterização</b></li>
			</ul>
			<p>O Pavilhão Lucas Nogueira Garcez, mais conhecido como Oca, teve suas obras finalizadas em 1954. O edifício de exposições apresenta planta circular, composto por uma grande cúpula com uma casca fina de concreto armado, apresenta área total aproximada de 11 mil m² (onze mil metros quadrados)</p>
			<p>Possui quatro pavimentos que têm estrutura independente da casca externa e conectados entre si por rampas. A iluminação natural se dá a partir de trinta e três janelas circulares.</p>
			<p>A Oca recebe uma série de exposições de grande porte e com grande atratividade e apresenta uma infraestrutura adequada para receber o público.</p>
			<ul>
				<li><b>Ação de Projeto</b></li>
			</ul>
			<p>Manter as ações de manutenção, garantindo o bom estado da infraestrutura, com atenção especial à impermeabilização da cobertura e adequações relativas à acessibilidade, em consonância com as normas de preservação do patrimônio.    </p>
		<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

		<h3>9.2 Auditório Ibirapuera  Oscar Niemeyer</h3>
			<wbr>
			<ul>
				<li><b>Caracterização</b></li>
			</ul>
			<p>O Auditório Ibirapuera, apesar de fazer parte do conjunto projetado por Niemeyer em 1954, só teve suas obras iniciadas em 2003. Em 2004, o Auditório foi entregue a cidade. O edifício de 7.000 m² (sete mil metros quadrados) conta com uma plateia de oitocentos e seis lugares, seis salas individuais para aulas práticas, quatro salas para aulas teóricas de grupo, duas salas para aulas práticas de grupo, uma sala para ensaio de grupos e uma sala de professores. O seu subsolo conta com a Escola do Auditório e camarins.</p>
			<p>Ao fundo do palco do Auditório há uma grande porta que pode abrir para a plateia externa possibilitando abrigar um alto número de espectadores em espetáculos.</p>
			<p>O Auditório se encontra em ótimas condições, recebendo uma série de eventos. Além disso, são oferecidas aulas de música para cerca de cento e setenta crianças e adolescentes.</p>
			<ul>
				<li><b>Ação de Projeto</b></li>
			</ul>
			<p>Manter as ações de manutenção, garantindo o bom estado da infraestrutura, em consonância com as normas de preservação do patrimônio.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.3 Museu de Arte Moderna – MAM e Jardim das Esculturas</h3>
			<wbr>
			<ul>
				<li><b>Caracterização</b></li>
			</ul>
			<p>O edifício do Museu de Arte Moderna (MAM), com cerca de 3.500 m² (três mil e quinhentos metros quadrados) de área construída, foi concebido pela arquiteta Lina Bo Bardi e fica instalado sob a marquise do Ibirapuera. O museu foi pensado como uma galeria que receberia obras e instalações temporárias por meio de programa diferenciado, requerendo áreas técnicas e de conservação. As áreas de exposições acontecem em duas salas, nos espaços da biblioteca e no corredor de ligação. Além das exposições o museu mantém atividades culturais e educacionais. Possui salas de exposições, ateliê, biblioteca, auditório, restaurante e loja.</p>
			<p>Ao redor do MAM e entre outras edificações culturais (Auditório do Ibirapuera, Oca e Bienal), localiza-se o Jardim de Esculturas. O local conta com 6.000 m² (seis mil metros quadrados) e expõe permanentemente trinta esculturas tridimensionais de diversos artistas, entre eles Amílcar de Castro, Emanoel de Araújo, Amélia Toledo, Antonio Lizárraga, José Resende, Elisa Bracher e Nuno Ramos. O Jardim foi inaugurado em 1993 e promove a interação dos usuários do parque com a arte de forma natural e interativa.</p>
			<ul>
				<li><b>Ação de Projeto</b></li>
			</ul>
			<p>Manter as ações de manutenção, garantindo o bom estado da infraestrutura e garantir que as atividades realizadas pelos usuários não interfiram na qualidade dos espaços, evitando depredações e usos inadequados.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.4 Pavilhão Japonês</h3>
			<wbr>
			<ul>
				<li><b>Caracterização</b></li>
			</ul>
			<p>O Pavilhão Japonês, sob gestão da Bunikyo – Sociedade Brasileira de Cultura Japonesa e Assistência Social foi entregue ao Parque Ibirapuera pela colônia japonesa em 1954 nas comemorações do quarto centenário de São Paulo. O Pavilhão é uma réplica do Palácio Katsura, de Kyoto. Nele são expostos peças de cerâmica, trajes típicos e outros objetos de arte e artesanato. Além da edificação, o espaço conta com um jardim com árvores ornamentais e um lago com carpas. A área do Pavilhão Japonês tem um caráter contemplativo, mas também recebe algumas atividades ligadas a cultura japonesa.</p>
			<ul>
				<li><b>Ação de Projeto</b></li>
			</ul>
			<p>As instalações do Pavilhão Japonês devem ser mantidas em boas condições, garantindo a preservação de suas características arquitetônicas originais.</p>
			<p>O paisagismo do local, considerando a vegetação e o lago não devem ser alterados, considerando sempre a preservação das visuais do local.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.5 Pavilhão das Aves</h3>
			<wbr>
			<ul>
				<li><b>Caracterização</b></li>
			</ul>
			<p>O Pavilhão das Aves é a sede do Acervo Municipal de Naatídeos, composto por populações de cisnes, gansos e marrecos, utilizado para estocagem de ração, ferramentas e equipamentos para o manejo, além de dormitório para aves. É composto por casa e recintos externos com parte seca (terra) e parte úmida (água do lago) para facilitar o manejo e os tratamentos clínicos necessários.</p>
			<p>O manejo dos anatídeos (cisnes, gansos e marrecos), que compõem o Acervo é feito a partir de diretrizes estabelecidas pela Divisão da Fauna Silvestre e compreende manejo nutricional, manejo anual, controle populacional, controle sanitário e fiscalização, realizados pela equipe técnica. As aves são mantidas de maneira semi-extensiva, com livre acesso.</p>
			<ul>
				<li><b>Ação de Projeto</b></li>
			</ul>
			<p>As instalações devem ser mantidas em boas condições, sendo a reforma emergencial indispensável para adequação e facilitação do manejo dos animais, tais como: melhorias do piso pavimentado e da área recoberta por “solo de terra” para evitar a formação de calos nas patas dos anatídeos; substituição das bases estruturais das telas que revestem os recintos externos, além da troca do alambrado; construção de piscinas em alvenaria nos recintos externos que não apresentam porção úmida; aprofundamento das piscinas nos recintos externos que já possuem, de forma a garantir a natação dos animais; instalação de portas laterais deslizantes nos recintos próximos ao lago e dispostos lado a lado, visando à interligação dos mesmos; instalação de portas em sistema de cambiamento nos recintos externos; reforma de todas as rampas de acesso do lago ao Pavilhão, com piso não abrasivo e antitérmico, para garantir o declive/aclive suave; reforma da casa de madeira; implantação de estrutura para abrigar os tratadores (banheiro, cozinha e vestiário);implantação de área de manejo externa, abrigada e iluminada, para as atividades necessárias na manutenção do plantel.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.6 Praça da Paz</h3>
			<wbr>
			<ul>
			<li><b>Caracterização</b></li>
			</ul>
			<p>A Praça da Paz, por suas generosas dimensões, chegou a comportar grandes eventos, os quais deixaram de ocorrer com a construção do Auditório, em 2005, e que hoje são considerados incompatíveis, devido à vocação ambiental da área.</p>
			<ul>
				<li><b>Ação de Projeto</b></li>
			</ul>
			<p>A diretriz estabelecida pelo Plano Diretor de 2007 deverá ser mantida: “restaurar a área como centro geográfico do parque, local de relação contemplativa da paisagem e de isolamento urbano. Fazer jus ao nome do local incentivando o uso alternativo de espaço público urbano privilegiado (contemplativo e silencioso) e propondo novo uso e relação espacial com a paisagem, usuários e seus elementos formadores (fauna e flora). Proibir esportes tais como o futebol.”</p>
			<p>Além disso, deverá ser promovida a aeração e a descompactação do solo com cobertura de areia e de composto orgânico para melhoria do gramado; aguardar o sementeamento (produção e dispersão das sementes) para realizar os cortes de grama; manter gramíneas atrativas de aves granívoras com maior altura: coleirinhos, pintassilgo, , bico-de-lacre,, canário da terra.</p>
			<p>No local devem ser mantidas as atividades de caráter de lazer e contemplação, garantindo o bom estado ambiental do espaço em consonâncias com os usos antrópicos.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.7 UMAPAZ</h3>
			<wbr>
			<ul>
				<li><b>Caracterização</b></li>
			</ul>
			<p>A UMAPAZ – Universidade Aberta do Meio Ambiente e da Cultura de Paz, Departamento de Educação Ambiental da Secretaria Municipal do Verde e do Meio Ambiente (SVMA), desenvolve e dissemina conhecimentos e práticas de educação para a sustentabilidade, baseados no respeito à vida e inspirados na Carta da Terra.</p>
			<p>É composta por quatro equipes: Escola Municipal de Jardinagem, Formação, Difusão e Projetos e Astronomia e Astrofísica. São equipes formadas por profissionais de diferentes formações e saberes – biólogos, agrônomos, comunicadores sociais, pedagogos, sociólogos, geólogos, geógrafos, arquitetos, de saúde e mais, o que permite a concepção e o desenvolvimento de programas e atividades numa dimensão inter e transdisciplinar.</p>
			<p>Conta com uma biblioteca – o Espaço Sapucaia – com livros, revistas e materiais sobre meio ambiente e cultura de paz, para uso dos professores, alunos e aberta à comunidade.</p>
			<p>A UMAPAZ oferece cursos e atividades de formação, atividades de sensibilização e de reforço de saberes e práticas, em livre percurso de aprendizado, isto é, cada pessoa pode trilhar seu próprio caminho, iniciando o percurso a partir de seus interesses e sendo acompanhado e estimulado a inserir-se num processo articulado de capacitação. Assim, a programação é, intencionalmente, bastante diversificada em termos de conteúdos e de práticas.</p>
			<p>Em termos de faixa etária, a UMAPAZ tem atividades apropriadas a crianças e adolescentes, como a Aventura Ambiental, programação destinada a jovens e adultos, procurando acolher, em seus programas, pessoas de diferentes faixas etárias, ocupações, formações e originárias de todas as regiões da cidade, fundamentada no poder da diversidade.</p>
			<ul>
				<li><b>Ação de Projeto</b></li>
			</ul>
			<p>Realizar as ações de ações de manutenção, garantindo o bom estado da infraestrutura, de forma a manter as atividades de pesquisa e educação ambiental.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.8 Campo Experimental da Escola de Jardinagem</h3>
			<wbr>
			<ul>
				<li><b>Caracterização</b></li>
			</ul>
			<p>A Escola de Jardinagem, da qual faz parte o Campo Experimental, foi fundada em 1975 com o propósito de capacitar os jardineiros da Prefeitura de São Paulo e com o tempo, abriu seus cursos para o público, tendo em 2018 formado 500 turmas. Nas formas de cursos, oficinas, trilhas e palestras os temas estão sempre relacionados à educação ambiental com foco na jardinagem, no paisagismo, no manejo de plantas e assuntos voltados às questões socioambientais. Até junho de 2015 a escola atendeu 47.000 munícipes, atuando em parceria com outros equipamentos dentro do Parque Ibirapuera como Centro de Convivência e Cooperativa – CECCO, o Viveiro Manequinho Lopes, a Divisão da Fauna Silvestre, o Herbário Municipal, o Museu de Arte Moderna – MAM, o Museu Afro Brasil.</p>
			<ul>
				<li><b>Ação de Projeto</b></li>
			</ul>
			<p>Manter o Campo Experimental e incentivar as atividades de educação ambiental e o uso pela Escola de Jardinagem e CECCO. As edificações inseridas no Campo Experimental necessitam de reforma das instalações elétrica, hidráulica e de TI; piso e cobertura; reforma de caixilhos, esquadrias e portas; reforma e/ou nova instalação de louças e metais no caso de sanitários, vestiários, cozinhas e refeitórios; pintura interna e externa; reforma e/ou instalação de novos equipamentos e mobiliário, quando necessário, a depender do uso do espaço.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.9 Centro de Convivência e Cooperativa – CECCO </h3>
			<wbr>
			<ul>
				<li><b>Caracterização</b></li>
			</ul>
			<p>O Centro de Convivência e Cooperativa – CECCO, no âmbito da Secretaria Municipal de Saúde – SMS, é um serviço de saúde que compõe a rede de atenção psicossocial alocada em espaços públicos como praças e parques. Não se configura, portanto, como edificação de apoio operacional do parque, mas compartilha a edificação utilizada pela equipe de manejo.</p>
			<p>O Centro de Convivência e Cooperativa – CECCO, vinculado à Secretaria de Municipal de Saúde é um serviço de saúde que compõe a rede de atenção psicossocial alocada em espaços públicos com praças e parques ou outros vocacionados ao uso coletivo e à socialização dos munícipes, de acesso livre e gratuito. Os objetivos gerais do CECCO são Proporcionar o convívio social com a comunidade entre pessoas em situação de vulnerabilidade e a população geral, promovendo sua integração, promover cuidado em saúde mental, desenvolver ações que visem à inclusão social, ambiental, cultural e trabalho, incentivar a autonomia, a contratualidade de usuários e familiares e promover a Cultura de Paz.</p>
			<p>A população beneficiada pelo CECCO inclui pessoas de qualquer faixa etária, condição de saúde, perfil sócio-cultural-econômico e de escolaridade, local de moradia ou trabalho e da diversidade de raça, gênero e credo, sobretudo segmentos populacionais em sofrimento mental, vítimas de violência, com necessidades decorrentes do uso de substâncias psicoativas, em situação de rua, bem como com deficiências e outras vulnerabilidades, que demonstrem vontade própria e interesse em participar de atividades.</p>
			<ul>
				<li><b>Ação de Projeto</b></li>
			</ul>
			<p>A edificação ocupada pelo CECCO necessita de reforma das instalações elétrica, hidráulica e de TI; piso e cobertura; reforma de caixilhos, esquadrias e portas; reforma e/ou nova instalação de louças e metais no caso de sanitários, vestiários, cozinhas e refeitórios; pintura interna e externa; reforma e/ou instalação de novos equipamentos e mobiliário, quando necessário, a depender do uso do espaço.</p>
			<p>A edificação atualmente ocupada pelo CECCO deverá permanecer com o uso atual destinado a serviços de pequeno porte e atividades de pesquisa e educação ambiental, sob gestão da Secretaria Municipal de Saúde (SMC).</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.10	Praça de Jogos</h3>
			<wbr>
			<ul>
				<li><b>Caracterização</b></li>
				</ul>
			<p>A área conhecida com Praça de Jogos localiza-se próximo à Praça da Paz e parquinho central. Tem esse nome, pois possui instaladas mesas de concreto para prática de pingue-pongue e xadrez. Atualmente a estrutura é subutilizada. </p>
			<ul>
				<li><b>Ação de Projeto</b></li>
			</ul>
			<p>Uma vez que a área é subutilizada, é recomendável pensar em novos usos para o espaço. Dado que fica próxima ao parquinho central é compatível e complementar a implantação de mesas de piquenique e módulos de sanitários.</p>
			<p>Além disso, poderão ser instaladas mesas de piquenique, bebedouros, lixeiras, módulos de sanitários e outros mobiliários, como suporte para o melhor uso do local como espaço de reunião ou evento de pequeno porte, como festas de aniversário, piqueniques e outras comemorações.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.11 Portarias</h3>
			<wbr>
				<ul>
					<li><b>Caracterização</b></li>
				</ul>
			<p>
				As portarias se localizam nos portões de acesso ao parque e servem como abrigo aos funcionários que controlam o acesso de funcionários e visitantes do parque.
			</p>
			<ul>
				<li><b>Ação de Projeto</b></li>
			</ul>
			<p>Foi identificada a necessidade de reforma das portarias dos portões 01/02 e 10, incluindo as marquises existentes, e implantação de 7 (sete) novas estruturas de portaria nos demais portões do Parque Ibirapuera – 03/04, 5, 6, 7, 8, 9 e 9A –, que poderá ser realizada por meio da instalação de um módulo replicável.</p>
			<p>As novas instalações destinadas às portarias (centros de apoio aos usuários) poderão ser concebidas como parte do mobiliário do parque, de forma a garantir flexibilidade no atendimento aos usuários.</p>
			<p>As portarias também poderão funcionar como centro de apoio aos usuários, de forma a agregar outras atividades, tais como a disponibilização de informações turísticas e da programação do parque, a venda de ingressos e tíquetes para eventos e serviços de alimentação, e devem estar disponíveis durante todo o período em que o parque estiver aberto.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.12 Slackline e Redário</h3>
			<wbr>
				<ul>
					<li><b>Caracterização</b></li>
				</ul>
			<p>Slack Line é uma prática esportiva de equilíbrio, no qual o esportista se equilibra sobre uma fita elástica entre dois pontos fixos, permitindo que ele ande e faça manobras. O esporte passou a ser realizado no Parque Ibirapuera, mesmo sem equipamento apropriado pelos visitantes do parque.</p>
			<p>A área do redário está localizada próxima a Praça da Paz e possui estrutura para a instalação de redes para o público.</p>
			<ul>
				<li><b>Ação de Projeto</b></li>
			</ul>
			<p>Deverá ser disponibilizado espaço adequado para práticas como Slack Line e instalação de redes, para que as mesmas não ocorram junto às árvores do Parque.</p>
			<p>É vedado danificar, colher frutos, flores, retirar mudas, subir, escrever e amarrar redes, faixas, equipamentos ou outros objetos nas árvores do Parque. No caso específico da prática do slackline e utilização de redes, esses equipamentos deverão ser utilizados nas áreas próximas à Praça da Paz.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.13.	Antiga Administração, Guarda Civil Metropolitana, edifício da Manutenção</h3>
			<wbr>
				<ul>
					<li><b>Caracterização</b></li>
				</ul>
				<p>Atualmente a edificação onde estava instalada a antiga administração do parque está interditada por conta de um acidente com queda de árvore, que acabou comprometendo a estrutura da edificação e os materiais armazenados no local. As atividades realizadas no local foram transferidas para UMAPAZ e para Escola de Astrofísica.</p>
			<p>Os edifícios não integram o conjunto arquitetônico protegido pelos órgãos de preservação do patrimônio e atualmente são utilizados na gestão do parque.</p>
			<ul>
				<li><b>Ação de Curto Prazo</b></li>
			</ul>
			<p>As edificações necessitam de reforma da cobertura, forros e drenagem, bem como reforma das instalações elétrica, hidráulica e de TI; piso e cobertura; reforma de caixilhos, esquadrias e portas; reforma e/ou nova instalação de louças e metais no caso de sanitários, vestiários, cozinhas e refeitórios; pintura interna e externa; reforma e/ou instalação de novos equipamentos e mobiliário, quando necessário, a depender do uso do espaço.</p>
			<p>As edificações poderão receber outros usos tais comoapoio aos usuários, -sanitários, vestiários, serviços de alimentação, conveniência e suvenir, ou atividades relacionadas a educação ambiental, lazer, esporte e recreação, compatíveis com este setor do parque.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.14 Sanitários</h3>
			<wbr>
				<ul>
					<li><b>Caracterização</b></li>
				</ul>
			<p>O Parque Ibirapuera possui oito sanitários públicos, dois deles sob a marquise, um no autorama, um no parquinho, um próximo ao portão 8, um na Escola de Astrofísica e um no MAM.</p>
			<ul>
				<li><b>Ação de Curto Prazo</b></li>
			</ul>
			<p>Melhorar o atendimento atual por meio da reforma de 4 (quatro) instalações de sanitários existentes: sanitário 04 (Autorama), sanitário 05 (parquinho), sanitário 06 (Portão 8) e sanitário 08 (MAM), ou substituí-los por novas instalações, de forma a aumentar sua capacidade de atendimento.</p>
			<p>Implantar no mínimo 2 (duas) novas instalações de sanitários no parque, sendo uma na Praça Burle Marx/Serraria e outra próxima às quadras, que deverá estar associada à vestiários, como suporte para as atividades deste setor do parque, com padrão de qualidade mínimo igual ou superior aos sanitários existentes reformados.</p>
			<p>Sempre que possível deve ser efetuada uma limpeza ecológica, com utilização de produtos e métodos de limpeza que não sejam nocivos ou que possam reduzir impactos ao meio ambiente e à saúde humana e da fauna.</p>
			<p>No caso da implantação de novas estruturas não permanentes de sanitários, bem como na sua reforma ou restauro, deve-se considerar a implantação de sistema de captação e tratamento de água de chuva para reutilização em bacias sanitárias.</p>
			<p>A reforma, ampliação e construção de novos sanitários deverá considerar a obrigatoriedade de instalação de sanitários acessíveis em todas as unidades.</p>
			<p>A reforma, ampliação e construção de novos sanitários deverá considerar a obrigatoriedade de instalação de mictórios, fraldários e instalações sanitárias infantis, especialmente junto às áreas de maior concentração de crianças, tais como os parquinhos.</p>
			<p>A reforma, ampliação e construção de novos sanitários deverá considerar a obrigatoriedade de instalação de vestiários, especialmente junto às áreas de prática esportiva, tais como quadras e pistas de caminhada.</p>
			<p>As novas instalações destinadas a sanitários poderão ser concebidas como parte do mobiliário do parque, de forma a garantir flexibilidade no atendimento aos usuários, mantida, no mínimo, a taxa de permeabilidade atual do parque, devendo ser aprovadas pelos órgãos competentes.</p>
			<p>Os sanitários deverão estar disponíveis durante todo o período em que o parque estiver aberto. </p>
			<p>Devem ser mantidas limpas e com boas condições de higiene, efetuando a remoção dos resíduos dos cestos, bem como a limpeza do piso e dos vasos sanitários, com aplicação de produtos desinfetantes e outras ações adequadas ao cumprimento dos encargos, na frequência necessária para tanto. Devem ser fornecidos os suprimentos de higiene necessários ao bom funcionamento dos sanitários, tais como papel higiênico, sabonete, papel para secar as mãos e/ou equipamentos de secagem.</p>
			<p>	Durante eventos em espaços livres, de forma a prevenir e corrigir eventuais impactos causados ao parque e ao seu uso no menor tempo possível, adotando medidas como alocação de sanitários químicos e lixeiras, para o atendimento a eventos específicos.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.15	Lanchonetes</h3>
			<wbr>
				<ul>
					<li><b>Caracterização</b></li>
				</ul>
				<p>As três lanchonetes do Ibirapuera foram construídas para atender a demanda por alimentação no parque.</p>
				<ul>
					<li><b>Ação de Curto Prazo</b></li>
				</ul>
			<p>Realizar a reforma das 3 (três) lanchonetes existentes ou substituí-las por novas instalações de serviços de alimentação, conveniência e venda de souvenir, de forma a melhorar a área de atendimento e a qualidade dos espaços de alimentação no parque.</p>
			<p>As lanchonetes do parque devem atender às diretrizes da Divisão da Fauna Silvestre (DFS) para mitigar a atração de fauna silvestre, fauna sinantrópica (pombos, ratos e baratas) e animais domésticos abandonados. </p>
			<p>Melhoria da qualidade dos serviços e produtos ofertados.</p>
			<p>Utilizar lixeiras com tampa para evitar entrada de animais;</p>
			<p>Priorizar a limpeza e manutenção diária do local, evitando atração e instalação de fauna sinantrópica;</p>
			<p>Remover o lixo diariamente, acondicionando-o em local fechado até sua remoção do parque;</p>
			<p>Providenciar dedetização junto a Unidades de Vigilância de Saúde – SUVIS, quando da instalação da fauna sinantrópica;</p>
			<p>Promover um programa de educação ou informação ambiental aos munícipes frequentadores quanto à importância do descarte correto dos restos de alimentos e resíduos.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.16	Parquinhos</h3>
			<wbr>
				<ul>
					<li><b>Caracterização</b></li>
				</ul>
				<p>Os equipamentos do parquinho próximo à Marquise estão em bom estado de conservação. Existem brinquedos acessíveis no local.</p>
				<p>O parquinho central necessita de melhorias, visando à qualidade dos brinquedos e a segurança das crianças. O espaço possui grande potencial por estar em uma região central do parque.</p>
			<ul>
					<li><b>Ação de Curto Prazo</b></li>
			</ul>
			<p>	Serão garantidas, no mínimo, uma área de recreação infantil no Setor Ambiental e uma área no Setor Cultural.</p>
			<p>Para o parquinho próximo à Marquise deverá ser realizada a manutenção e a conservação constante dos brinquedos existentes, de modo a preservar a segurança de seus pequenos usuários.</p>
			<p>No parquinho central poderão ser instalados equipamentos lúdicos e que fomentem a educação ambiental sobre os diversos elementos naturais do parque. </p>
			<p>Em ambas as áreas deverá ser realizada a reforma e adequação dos parquinhos do parque, em atendimento às normas aplicáveis, considerando a integração dos equipamentos à paisagem do parque com a natureza, bem como o atendimento às normas de segurança da ABNT, com: (i) implantação de equipamentos lúdicos, incluindo equipamentos acessíveis, que fomentem a educação ambiental, estimulem a interação com o ambiente em que estará instalado e provoquem a percepção dos usuários sobre a flora e a fauna; (ii) implantação de equipamentos lúdicos que permitam a interação entre crianças de faixas etárias distintas, favoreçam a interação entre crianças e adultos, instiguem ações do brincar, trabalhem com habilidades motoras finas e brutas, habilidades sensoriais e sociais das crianças; (iii) ampliação e implantação de novas áreas reservadas para crianças de 0 (zero) a 7 (sete) anos; (iv) implantação de áreas de descanso com MOBILIÁRIO como bancos e bebedouros; (v) melhoria dos pisos.</p>
			<p>Além dos brinquedos, os espaços precisam ser melhor equipados com mobiliário, tais como bancos e bebedouros, dando maior conforto aos usuários.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.17 Cachorródromo</h3>
			<wbr>
				<ul>
					<li><b>Caracterização</b></li>
				</ul>
			<p>Dada a grande demanda de usuários com animais de estimação, o acesso de cães aos parques municipais é garantido (Portaria nº 04/SVMA/2005).</p>
			<p>Há, entretanto, aspectos de manejo e gestão a serem observados, devido problemas rotineiros nos parques como agressões a munícipes, potencial de predação à fauna silvestre, contaminação ambiental causada por ectoparasitas e endoparasitas com transmissão entre cães, à fauna silvestre e aos frequentadores do parque ( zoonoses).</p>
			<p>Desta forma, é garantido o acesso de cães aos parques municipais, desde que com coleiras e guias. No caso das raças mastim napolitano, pit bull, rottweiller e american staffordshire terrier deverão utilizar coleira, guia curta de condução, enforcador e focinheira (Portaria nº 04/SVMA/2005).</p>
			<p>O único espaço adequado à soltura de cães dentro dos parques municipais é o cachorródromo, regulado pela Portaria nº 99/SVMA/2016.</p>
			<p>Atualmente o Parque Ibirapuera não conta com cachorródromo, existindo demanda por este tipo de equipamento.</p>
			<ul>
				<li><b>Ação de Curto Prazo</b></li>
			</ul>
			<p>Implantação de cachorródromo caracterizado como “o local apropriado à soltura de cães dentro do parque, sendo consideradas apropriadas áreas com incidência de luz solar direta, observada a taxa de permeabilidade do parque, cercado, com altura mínima de 1,5m, e área de cambiamento na entrada/saída, que impossibilite a abertura de ambas as portas simultaneamente pelo munícipe, para prevenir fugas”. (Portaria nº 99/SVMA/2016).</p>
			<p>O cachorródromo poderá ser implantado no setor Ambiental, onde foram previamente identificadas duas  áreas propícias à sua implantação: uma próxima ao Portão 5, na antiga área de treinamento dos cães da polícia militar; e outra próxima ao Portão 6, entre a Praça Burle Marx e a Praça do Porquinho.</p>
			<p>A instalação do Cachorródromo demanda ainda a adequação do Regulamento de Uso do Parque onde deverão constar as regras de uso do local.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.18 Pavilhão das Culturas Brasileiras – PACUBRA</h3>
			<wbr>
			<ul>
				<li><b>Caracterização</b></li>
			</ul>
			<p>O Pavilhão de Culturas Brasileiras (PACUBRA) está situado no Subsetor Cultural e integra o conjunto de edificações e elementos arquitetônicos protegidos pelos órgãos de preservação do patrimônio, construídos para os festejos do IV Centenário. A edificação apresenta área total aproximada de 11 mil m² (onze mil metros quadrados), distribuídos em um pavimento térreo, primeiro andar e subsolo. O edifício que hoje abriga o PACUBRA foi utilizado por quase quatro décadas pela Empresa de Tecnologia da Informação e Comunicação do Município de São Paulo (PRODAM). Por conta disso, sua configuração original passou por uma série de intervenções para que pudesse receber as atividades da Companhia.</p>
			<p>O PACUBRA foi implantado em 2010 no edifício intitulado Engº Armando de Arruda Pereira, criado para abrigar as coleções de cultura tradicional pertencentes à Secretaria Municipal de Cultura de São Paulo. Sua criação foi motivada pela ação movida pelo Ministério Público do Estado de São Paulo para que a municipalidade se responsabilizasse pela preservação e difusão do acervo do antigo Museu de Folclore Rossini Tavares de Lima.</p>
			<p>A partir de então, outros conjuntos museológicos foram incorporados à nova instituição, como a coleção etnográfica do Departamento do Patrimônio Histórico DPH  e aquisições por compra e doações de peças de cultura indígena, de design e de arte popular. Com mais de 15.000 itens em diferentes suportes (papel, plumária, barro, metal, vidro, madeira, fibra vegetal, têxtil, borracha)  , o acervo encontra-se acondicionado em cerca de 1200 volumes distribuídos em caixas e pacotes de papelão, caixas de madeira, mapotecas e estantes de metal.</p>
			<p>Aberto ao público em 2010 com a exposição “Puras Misturas” e proporcionando diferentes atividades, tais como: mostras, seminários, apresentações artísticas e oficinas, o edifício ocupado pela instituição no Parque do Ibirapuera apresentava condições precárias para abrigar um equipamento cultural de guarda museológica. Neste sentido, a partir de projeto elaborado pelo escritório do arquiteto Pedro Mendes da Rocha, a reforma e a adaptação do prédio foram iniciadas em etapas, que compreendem desde a troca da cobertura, restauro das fachadas, reformulação da estrutura hidráulica e elétrica, até a construção de espaços específicos como reserva técnica, áreas expositivas, auditório e salas para o educativo.</p>
			<p>Como medida preventiva de proteção das obras durante a reforma o acervo foi acondicionado, evitando-se ao máximo seu manuseio e movimentação, no aguardo de condições tanto de mobiliário quanto de estrutura para que uma equipe técnica possa organizá-lo conforme os princípios de preservação. A primeira e a segunda fases ocorreram entre 2011 e 2013, com ações como a substituição do telhado, restauro da fachada, parte instalações elétricas . Suspensa desde o primeiro semestre de 2013, a reforma foi retomada em 2016 com recursos oriundos do BNDES sob a responsabilidade do Instituto Pedra. A obra foi novamente paralisada em 2017, estando, desde aquela época, com boa parte do piso térreo em condições inadequadas para qualquer tipo de uso.</p>
			<p>	A edificação foi reformada parcialmente no âmbito do Contrato de colaboração financeira celebrado com o Banco Nacional de Desenvolvimento Econômico (BNDES) – contrato nº 12.2.0674.1, e abriga importantes acervos municipais da cultura popular brasileira como a coleção Rossini Tavares de Lima (Museu do Folclore), registro da Missão de Pesquisas Folclóricas de Mário de Andrade, peças da Biblioteca Mário de Andrade, que ocupam cerca de um terço da área do pavimento superior do pavilhão.</p>
			<ul>
				<li><b>Ação de Médio Prazo</b></li>
			</ul>
			<p>Finalização da reforma do edifício compreendendo a reforma do pavimento térreo, a instalação de equipamentos de ar condicionado, elevadores, cabine primária, gerador e brises em todo o edifício, além da reforma das calçadas externas à edificação.</p>
			<p>A ocupação do edifício deverá obedecer aos requisitos mínimos e/ou máximos das áreas pertencentes ao concessionário e a instituição como estabelecidos pelo plano diretor do parque.</p>
			<p>Cabe destacar que o uso será compartilhado e envolve a ocupação de parte do prédio por uma instituição museológica, comprometida com a preservação e integridade de bens culturais em diversos suportes. Dessa forma especificidades e restrições deverão ser respeitadas prevendo as normatizações estabelecidas nas legislações e acordos internacionais de preservação do patrimônio cultural (seja museológico ou edificado, pois neste caso o prédio também é compreendido como acervo).</p>
			<p>O piso superior que abriga as áreas técnicas de guarda e preservação do acervo do Museu das Culturas Brasileiras deverá ser ocupado de forma que possa garantir à instituição o espaço necessário para ações culturais e de valorização do acervo, promover a permanência de usos museológicos e ambientes para circulação e manipulação de acervos por todo espaço destinado aos usos especificados.</p>
			<p>Recomenda-se apresentar o layout de distribuição do mobiliário pelo espaço em formato .PDF para avaliação dos núcleos de museologia e arquitetura.</p>
			<p>O projeto deverá ser encaminhado para aprovação dos órgãos de preservação do patrimônio responsáveis pelo tombamento do imóvel nas estâncias em que a legislação incidir (CONPRESP-DPH, CONDEPHAT E IPHAN).</p>
			<p>O layout proposto para o pavimento não poderá ser configurado de forma que:</p>
			<ol type="a">
				<li>Obstrua ou dificulte a manipulação de acervos e de atividades da instituição.</li>
				<li>Fragmente ou faça qualquer divisão à área em que for destinada a instituição para apresentação de exposições, atividades culturais, atividades museológicas e etc. o espaço deverá ser contínuo para que não haja possível dissonância das atividades desenvolvidas.</li>
				<li>Prejudique a circulação e mobilidade de pessoas ou que não atenda a normas técnicas de acessibilidade vigente NBR 9050/2015.</li>
				<li>Dificulte o acesso às saídas de emergências e aos elevadores de uso comum e de acesso restrito a funcionários.</li>
			</ol>
				<p>Cabe ao Departamento dos Museus Municipais (DMU/SMC), mantenedor e responsável legal desse rico acervo, estipular as condicionantes para uso compartilhado do prédio, prevendo as atividades de cunho museológico e as demais ações que poderão ser desenvolvidas pelo concessionário que ocupara 2/3 do prédio.</p>
				<p>Um dos princípios presentes no “Código de Ética do ICOM para Museus” afirma que “os museus têm o dever de adquirir, preservar e valorizar seus acervos, a fim de contribuir para a salvaguarda do patrimônio natural, cultural e científico” (ICOM, 2009 p. 14). Entre os elementos que constituem esse documento, destacam-se os relacionados à proteção dos acervos. </p>
				<p>Preservar significa proteger, defender, resguardar o bem cultural de algum dano ou perigo futuro, a fim de assegurar a sua disponibilidade contínua. Para isso, são necessárias medidas que retardem a deterioração e previnam danos às peças museológicas. As causas principais da deterioração de um bem cultural são ambientais: luz, temperatura, umidade e gases atmosféricos. Além desses, existem os danos decorrentes da manipulação, armazenagem e exposição inadequadas; de reações químicas provocadas por materiais reativos; e também danos devido a infestações biológicas causadas por microorganismos, plantas, insetos e animais. Vale ressaltar que não são raros os casos de danos irreversíveis, causados por situações de degradação mal interpretadas e intervenções de conservação inadequadas.</p>
				<p>Ao longo dos últimos anos e por conta das obras de reforma e restauro do prédio do Pavilhão das Culturas Brasileiras esse acervo foi transferido o segundo andar do prédio da Oca, também localizado no Parque do Ibirapuera, onde ele permaneceu por um ano até o seu retorno ao primeiro pavimento do prédio, no qual foram construídas as novas reservas técnicas do Museu. </p>
				<p>Além de um urgente trabalho para a preservação física das coleções é de extrema importância a organização documental do acervo e sua história institucional de um equipamento público ainda não consolidado no cenário cultural da cidade de São Paulo. Estes processos são a base para a criação de um sistema organizacional que permita a conservação, pesquisa e extroversão de cada coleção, a começar pela do Museu do Folclore Rossini Tavares de Lima, cerne para a criação do Pavilhão das Culturas Brasileiras.</p>
				<p>O estado de conservação de um objeto está intrinsecamente ligado ao material no qual foi elaborado, na trajetória das condições de armazenagem e exposição e nas condições ambientais a que ele está sendo submetido.</p>
				<p>Esse preâmbulo foi necessário para informar que, apesar do prédio do não estar com equipamentos de climatização instalados, tal situação não é impeditiva para o acondicionamento do acervo naquele prédio. Compreendemos que, ao longo de sua existência, estas coleções não foram acondicionadas em espaços com climatização, e por anos se adaptaram as condições ambientais do Parque Ibirapuera. Desta forma, nossa maior preocupação está condicionada a outros fatores, tais como: clima local, segurança predial, vedamento das áreas de guarda do acervo, tipo de acesso às coleções pelos visitantes (características, número e frequência etc) e constante monitoramento dos índices de umidade relativa do ar (UR) e temperatura.</p>
				<p>Como exemplo de conduta para guarda de acervo semelhante podemos citar o caso do Museu do Índio (RJ), que possui um acervo tão delicado quanto o nosso e, no entanto, não possui em seus espaços de guarda sistema de climatização, porém seus acervos apresentam estabilidade no seu processo de degradação (natural para qualquer acervo, seja ele climatizado ou não).</p>
				<p>Considerando, portanto, que caberá ao concessionário o término das obras de revitalização do prédio, paralisadas em 2017, seguem algumas propostas de adequações que possam auxiliar o trabalho de preservação das coleções que estão no referido prédio:</p>
			<ol type="a">
				<li>Implantação de portas corta-fogo nas duas reservas técnicas, o que permitiria maior segurança e proteção ao acervo em caso de incêndio no em outras áreas do prédio.</li>
				<li>Isolamento das áreas que compreendem as duas reservas técnicas do sistema anti-incêndio (sprinkler). O recomendável, neste caso, seria a independência deste mecanismo presentes das duas salas de guarda de acervo frente aos demais espaços do prédio. Assim pode-se evitar que o acervo seja molhado desnecessariamente, no caso de alarme falso;</li>
				<li>Também apontamos a necessidade de aplicação de fungicida e de produtos que protejam a madeira do piso do mezanino (reserva técnica 1) de possíveis ataques de insetos xilófagos.</li>
				<li>É necessária a instalação de uma vedação permanente na parte inferior de todas as portas de acesso às duas reservas técnicas evitando assim a entrada de poeira, fuligem, insetos, dentre outros fatores que possam contribuir para a danificação do acervo. </li>
			</ol>
			<p>Com relação ao uso do prédio compartilhado entre o DMU/SMC e o concessionário ainda são necessárias o atendimento às seguintes observações:</p>
			<ol type="a">
				<li>Importante reconhecer as duas reservas técnicas como áreas de alta segurança e acesso restrito, e como tais, exigem uma série de ações preventivas de segurança;</li>
				<li>O concessionário não poderá submeter o prédio à exploração comercial de eventos e ações que utilizem a manipulação, preparo e consumo de alimentos e bebidas no piso onde estão localizadas as reservas técnicas e o espaço expositivo (primeiro andar);</li>
				<li>O primeiro andar não poderá ser utilizado para realização de eventos, festas ou qualquer outro tipo de ação comercial que possa colocar em risco tanto o acervo exposto quanto às coleções acondicionadas em reserva técnica;</li>
				<li>Não é recomendável que nos andares inferiores seja instalada estrutura de manipulação e preparo de alimentos e bebidas (cozinha), pois poderá ser um grande atrativo para entrada de agentes biológicos como fungos, insetos xilófagos (cupins), traças, moscas e também as causadas por animais como pombas e ratos que por meio de seus excrementos prejudicam principalmente os artefatos compostos de suportes orgânicos. As infestações biológicas podem ser trazidas em peças introduzidas no museu e também podem ocorrer devido a condições ambientais inadequadas;</li>
				<li>Não poderá ser permitido fumar em qualquer dependência do prédio;</li>
				<li>O acesso às áreas de guarda e tratamento técnico de acervo (reservas técnicas 1 e 2) são restritas apenas a funcionários do DMU/SMC que deverão ter credencial para exercício de seu trabalho (museólogos, conservadores, técnicos em museologia e gestores);</li>
				<li>Será necessária a aplicação regular em todo o prédio (com periodicidade máxima de 3 meses) de produtos químicos fungicidas como método de prevenção contra infestação de insetos xilófagos (cupins e brocas), roedores e outras pragas;</li>
				<li>As janelas do prédio deverão ser vedadas como forma de prevenção contra entrada de aves, insetos, roedores e demais pragas;</li>
				<li>A concessionária em comum acordo com o DMU/SMC deverá elaborar e executar um plano de manutenção do prédio (calhas, telhados, encanamentos, instalação elétrica, etc);</li>
				<li>Controle, em comum acordo com o DMU/SMC, sobre o número limite diário para acesso e circulação do prédio.</li>
			</ol>
			<p>Tais ações foram pontuadas embasadas nas legislações vigentes de proteção ao patrimônio museológico brasileiro (Lei Federal 11.904/2009, Decreto Federal 8.124/2013) e das normativas museológicas internacionais (Código de Ética do Conselho Internacional de Museu – ICOM).</p>
			<p>Tendo em vista os acidentes recorrentes com aves que colidem nas fachadas de vidro das edificações como da Bienal, sugere-se intervenções nesses vidros como a troca por vidros antirreflexo ou intervenções com quadrículas que permitam que as aves identifiquem a barreira.</p>
			<p>Monitorar os casos de acidentes relacionados a fauna, principalmente as aves acidentadas. Todos os casos devem ser reportados a Divisão da Fauna Silvestre, a fim de mitigar os problemas.</p>
			<!-- Ocultar comentários: <Comments :attr="{id:commentId(), context:'CAPÍTULO 1'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.19 Fundação Bienal de São Paulo</h3>
			<wbr>
			<ul><li><b>Caracterização</b></li></ul>
			<p>A edificação da Bienal, de responsabilidade da Fundação Bienal de São Paulo, possui 250 (duzentos e cinquenta) metros de comprimento por 50 (cinquenta) metros de largura, com área total aproximada de 28 mil m² (vinte e oito mil metros quadrados). A estrutura permite que não haja interferências nas fachadas trabalhadas em caixilharias e brises soleil, além de permitir uma maior liberdade nas lajes marcadas pelas formas sinuosas. A edificação possui dois andares, um mezanino e um subsolo.</p>
			<p>A edificação é gerida pela Fundação Bienal de São Paulo e apresenta boas condições de infraestrutura, atendendo as demandas dos eventos que ocorrem. A Bienal atrai centenas de pessoas em seus eventos, influenciando nas dinâmicas do parque, sobretudo o que diz respeito aos acessos e estacionamentos.</p>
			<ul><li><b>Ação de Médio Prazo</b></li></ul>
			<p>Tendo em vista os acidentes recorrentes com aves que colidem nas fachadas de vidro das edificações como da Bienal, sugere-se intervenções nesses vidros como a troca por vidros antirreflexo ou intervenções com quadrículas que permitam que as aves identifiquem a barreira.</p>
			<p>Monitorar os casos de acidentes relacionados a fauna, principalmente as aves acidentadas. Todos os casos devem ser reportados a Divisão da Fauna Silvestre, a fim de mitigar os problemas.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.20 Museu Afro Brasil</h3>
			<wbr>
			<ul><li><b>Caracterização</b></li></ul>
			<p>O Museu Afro Brasil, de responsabilidade da Secretaria da Cultura e Economia Criativa – Governo do Estado, fica alocado no Pavilhão Padre Manoel da Nóbrega, outra edificação conectada a marquise. Possui uma área de 12 mil m² e um acervo de aproximadamente seis mil obras produzidas entre o século XVIII e os dias de hoje. O acervo trata ligados ao universo cultural africano e afro-brasileiros, relatando a trajetória histórica e as influências africanas na construção da sociedade brasileira.</p>
			<p>Há exibição na exposição de longa duração além das exposições temporárias. A edificação de onze mil metros quadrados possui três pavimentos, e conta com Auditório e Biblioteca. </p>
			<p>A edificação possui um extenso volume apoiado em colunas inclinadas a 45º, que permitem a circulação de pedestres na área coberta no térreo da edificação. As vedações são em caixilhos e paredes de concreto.</p>
			<ul><li><b>Ação de Médio Prazo</b></li></ul>
			<p>Tendo em vista os acidentes recorrentes com aves que colidem nas fachadas de vidro das edificações como da Bienal, sugere-se intervenções nesses vidros como a troca por vidros antirreflexo ou intervenções com quadrículas que permitam que as aves identifiquem a barreira.</p>
			<p>Monitorar os casos de acidentes relacionados a fauna, principalmente as aves acidentadas. Todos os casos devem ser reportados a Divisão da  Fauna Silvestre, a fim de mitigar os problemas.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.21 Planetário e Escola Municipal de Astrofísica – EMA</h3>
			<wbr>
			<ul class="links">
				<li>
					<a :href="src('arquivos/pdp-ibirapuera/Diretrizes Planetário e Escola de Astrofísica.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Diretrizes Planetário e Escola de Astrofísica.pdf</div>
						<span>665 KB</span>
					</a>
				</li>
			</ul>
			<ul><li><b>Caracterização</b></li></ul>
			<p>A Escola Municipal de Astrofísica Aristóteles Orsini (EMA) e o Planetário estão situados na Zona Cultural do Parque. A Alameda Cósmica e a Rosa dos Ventos, próximas, foram idealizadas como suportes didáticos de suas atividades.</p>
			<p>Tanto o Planetário quanto a Escola de Astrofísica foram projetados pelos arquitetos Roberto Goulart Tibau, Eduardo Corona e Antonio Carlos Pitombo. Entretanto, o Planetário foi construído em 1957, nas comemorações do IV Centenário da Cidade de São Paulo, e a Escola de Astrofísica foi inaugurada em 1961 (7 anos após as comemorações do IV Centenário).</p>
			<p>O Planetário conta 775m² de área construída, e hoje tem visitas guiadas e apresenta sessões de cúpula temáticas, onde são projetadas constelações, planetas, galáxias, com monitoria de especialistas da área.</p>
			<p>O edifício foi reaberto ao público em Janeiro/2016, após conclusão de reforma que, além de trazer melhorias a edificação, pôs em funcionamento o aparelho de projeção, sem uso por falta de reposição de peças.</p>
			<p>A Escola de Astrofísica conta com 1.213m² (mil duzentos e treze metros quadrados), divididos em 6 pavimentos intercalados a meio nível, onde são ministrados cursos sobre astronomia e ciências afins.</p>
			<p>Em 2004 o projeto passou por restauro que lhe acrescentou salas de aula no subsolo.</p>
			<p>Atualmente a EMA divide seu espaço com a equipe administrativa do parque, após a sede da administração ter sido atingida pela queda de uma árvore em dezembro/2014.</p>
			<ul><li><b>Ação de Médio Prazo</b></li></ul>
			<p>Reforma e manutenção Planetário considerando: Melhorias nos sistemas de projeção e áudio das cúpulas; Implantação de sistema de som no saguão; Instalação de desumidificadores, geradores e nobreaks; Substituição de poltronas; Sinalização e comunicação visual. </p>
			<p>Reforma e manutenção EMA considerando: Reforma nos pavimentos no subsolo para sanar os pontos de infiltração existentes e prevenir o surgimento de novos pontos; Reforma dos lanternins das salas do subsolo de forma a aumentar sua eficácia; Manutenção dos elevadores de forma a colocá-los em pleno funcionamento, atendendo, assim, a acessibilidade; Manutenção para o pleno funcionamento do sistema de ar-condicionado; Reforma do calçamento perimetral em mosaico português;</p>
			<p>Todas as reformas deverão estar em consonância com os órgãos do patrimônio histórico, buscando as tecnologias mais recentes para atualização;</p>
			<p>A conservação geral de ambos os edifícios deverá considerar: Manutenção e conservação predial permanentes (limpeza, calhas, pintura, ar-condicionado, elevadores, hidrantes); Manutenção e conservação dos equipamentos tecnológicos sensíveis (telescópios, espectroscópios, celostato, displays digitais, antenas para radio-observação, equipamento de projeção, dentre outros).</p>
			<p>Deverá ainda ser garantido um estoque mínimo de reposição de peças com maior índice de quebra e de peças cujas vidas-úteis estejam chegando ao fim.</p>
			<p>Deverá ser provido um corpo de especialistas técnicos e gestores capacitados para a operação do Planetário e Escola Municipal de Astrofísica; manutenção de um quadro de profissionais para atender as demandas de limpeza e segurança; manter programação permanente, incluindo sessões, exposições e programação cultural.</p>
			<p>Tendo em vista os acidentes recorrentes com aves que colidem nas fachadas de vidro das edificações como da Bienal, sugere-se intervenções nesses vidros como a troca por vidros antirreflexo ou intervenções com quadrículas que permitam que as aves identifiquem a barreira.</p>
			<p>Monitorar os casos de acidentes relacionados a fauna, principalmente as aves acidentadas. Todos os casos devem ser reportados a Divisão da Fauna Silvestre, a fim de mitigar os problemas.</p>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->

			<h3>9.22 Serraria, Praça Burle Marx e Bosque da Leitura</h3>
			<wbr>
			<ul><li><b>Caracterização</b></li></ul>
			<p>A Praça Burle Marx conta com 15.970m² (quinze mil novecentos e setenta metros quadrados) e foi entregue ao público em 1993. Seu projeto incorporou o galpão, conhecido como Serraria, e a edificação do Bosque da Leitura (ação de incentivo à leitura da Secretaria de Cultura), pré-existentes. Além de propiciar a convivência e a apropriação do espaço pelos usuários do parque, dado suas generosas dimensões, comporta eventos de pequeno porte de baixo impacto, tais como práticas corporais, yoga, meditação, contação de histórias e pequenas feiras e exposições.</p>
			<ul><li><b>Ação de Médio Prazo</b></li></ul>
			<p>Reforma da Praça com recuperação da fonte de água e substituição do piso impermeável atual por pavimento semipermeável ou permeável, respeitando o desenho existente.</p>
			<p>Divulgar e conscientizar os usuários do parque quanto o caráter peculiar da Praça Burle Marx como de serviços ambientais, de transição entre o parque e viveiro e proteção à fauna silvestre;</p>
			<p>Acionar a Secretaria Municipal de Cultura para entendimentos quanto à gestão do Bosque da Leitura.</p>

			<h3>9.23	Viveiro Manequinho Lopes, Divisão de Fauna Silvestre, Herbário Municipal</h3>
			<wbr>
			<ul><li><b>Caracterização</b></li></ul>
			<p>O Viveiro Municipal Manequinho Lopes é área consolidada desde 1928, implantado com o objetivo de produzir e fornecer mudas para a Cidade. A Divisão de Produção e Herbário Municipal DPHM/SVMA é a responsável pela manutenção do Viveiro Manequinho Lopes, bem como dos outros viveiros municipais instalados (Viveiro Arthur Etzel, Parque do Carmo e Viveiro Harry Blossfeld, Parque Cemucam), produzindo e fornecendo mudas de plantas destinadas aos plantios realizados nas áreas públicas municipais (Parques, Subprefeituras, Escolas e demais unidades da PMSP), bem como promover a arborização e o ajardinamento de áreas da municipalidade. Desenvolve também pesquisa e experimentação visando o aprimoramento da produção de mudas. </p>
			<p>Atualmente o viveiro mantém mais de mil espécie de plantas; matrizes estas utilizadas para propagação através de suas sementes e demais partes vegetativas. O banco de germoplasma vegetal abriga espécies raras e ameaçadas de extinção, que são mantidas cultivadas nas quadras, estufas, estufins e ripados do Viveiro Manequinho Lopes.</p>
			<p>O Herbário Municipal da Prefeitura do Município de São Paulo iniciou suas atividades em 1984, recebendo atribuição legal em 1986. Desde 1998, está registrado no Index Herbariorum (registro internacional de herbários coordenado pelo New York Botanical Garden) sob o acrônimo PMSP. É instituição fiel depositária cadastrada no CGEN/MMA (Comissão de Gestão do Patrimônio Genético do Ministério do Meio Ambiente) desde 2004 e integra a Rede Brasileira de Herbários da Sociedade Botânica do Brasil.</p>
			<p>O Herbário Municipal gerencia um acervo composto, em junho de 2019, por mais 19.000 amostras vegetais (exsicatas), que constituem documentação histórica e geográfica da flora e vegetação principalmente da região do Município de São Paulo. Serve de suporte para diversos estudos técnicos, científicos, educacionais e de planejamento. Atende demandas de diversos setores da SVMA, além de outras Secretarias como a Secretaria Municipal de Educação, Secretaria Municipal de Saúde e Sub-Prefeituras. Mantém intercâmbio com outros herbários nacionais e estrangeiros e atende pesquisadores da área. Destacamos alguns projetos que o Herbário Municipal participou ou ainda participa: ‘Conheça o Verde’ (série de roteiros botânicos dos Parques Urbanos Municipais), Atlas Ambiental do Município de São Paulo, Projeto Flora Fanerogâmica do Estado de São Paulo (financiado pela FAPESP), Projeto de soltura e manejo de bugios (financiado pelo FEMA), Programa Municipal de Produção de Fitoterápicos, PMMA (Plano Municipal de Conservação e Recuperação da Mata Atlântica), Reflora (Herbário Virtual, coordenado pelo Ministério do Meio Ambiente – Jardim Botânico do Rio de Janeiro), Estudo Etnobotânico Participativo (financiado pela FAPESP). Ao longo de mais de trinta e cinco anos de trabalho como Seção Técnica, o Herbário Municipal foi subordinado a diferentes divisões e departamentos. Desde 2019, está vinculado ao DPHM – Divisão de Produção e Herbário Municipal, contudo, sempre manteve a especificidade de suas atribuições.</p>
			<p>A Divisão da Fauna Silvestre -DFS, possui atribuições voltadas especificamente para atividades de proteção, conservação e preservação da fauna silvestre no Município de São Paulo. Presta atendimento médico-veterinário com suporte laboratorial aos animais silvestres de vida livre resgatados e aos oriundos de ações de combate ao tráfico. Além das atividades voltadas ao atendimento da fauna silvestre, a Divisão conta com uma equipe que realiza vigilância ativa nos Parques, com vistas aos agravos às espécies de vida livre, bem como ações e monitoramento relacionados à fauna dos lagos e manejo do Acervo Municipal de Anatídeos nos Parques Municipais. Responde ainda pelo Acervo Municipal de carpas coloridas mantidos nos espelhos d´água existentes nos parques e do Gabinete do Prefeito. Por fim, mas não menos importante, a Divisão de Fauna executa o levantamento e monitoramento de fauna silvestre e elabora pareceres técnicos, em âmbito municipal, relacionados a obras e empreendimentos que podem impactar a fauna.</p>
			<ul><li><b>Ação de Médio Prazo</b></li></ul>
			<p>Com vistas a ampliar potencial produtivo e de atendimento das áreas técnicas que compõe a Subzona de Educação Ambiental é de fundamental importância a execução do Projeto de Revitalização do Viveiro Manequinho Lopes, Fauna e Herbário, concluído em 2012, e sob custódia da Divisão de Implantação, Projetos e Obras – DIPO.</p>

			<h3>9.24 Caminhos</h3>
			<wbr>
			<ul><li><b>Caracterização</b></li></ul>
			<p>A pista de cooper não faz parte do projeto original do parque, mas foi implantada em atendimento às novas demandas de hábitos de lazer e saúde que se anunciavam na década de 1970. Foi implantada próxima à Avenida IV Centenário e tem percursos que podem variar entre 1200 e 1500 metros, com marcação a cada 100 metros. A pista em terreno plano, sob maciço arbóreo, tem um leito coberto por pedriscos, delimitado por toras de eucalipto. Ao longo de seu percurso estão dispostos equipamentos variados de ginástica.</p>
			<p>As pistas de caminhada representam as principais áreas impermeabilizadas do Parque, seguidas das edificações. Portanto, nestas áreas há um potencial para o aumento de área permeável pela substituição dos tipos de pavimentação utilizados. Com essa premissa, os pisos das pistas de caminhadas secundárias deverão ser substituídos por pavimentos permeáveis. Isso é possível, pois o fluxo de pessoas nesses percursos é menor do que nos caminhos principais. Esta nova pavimentação retomará um caráter mais natural do Parque, além de melhorar a sensação térmica para os usuários. Para os caminhos principais deverão ser previstas melhorias pontuais na manutenção da pavimentação. Além dessa questão fundamental para a qualidade das pistas de caminhadas, outra questão é sobre a sinalização ao longo do percurso. Neste sentido, deverá ser proposta uma nova sinalização e comunicação visual por todo o trajeto.</p>
			<p>As ciclofaixas somam 300 metros e auxiliam no ordenamento do usos nos passeios principais do Parque Ibirapuera. Implantada em 2004, foi reformada em 2011 pelo Termo de Cooperação 03/SVMA/2010, com a Volkswagen. Além das bicicletas dos próprios visitantes, no parque é possível alugá-las próximas ao Portão 3. </p>
			<p>A ciclovia infantil do Parque Ibirapuera é uma área que está atualmente subutilizada. Em 2017 parte de sua pavimentação foi removida como contrapartida ao Termo de Cooperação com a Nike para o campo de futebol.</p>
			<ul><li><b>Ação de Médio Prazo</b></li></ul>
			<p>Demolição da Ciclovia Infantil. Essa área deve ser permeabilizada, uma vez que seu uso original não foi mantido e parte dela já foi demolida.</p>
			<p>Considerando a grande demanda de uso, ações de conservação periódicas são necessárias.</p>
			<p>Além disso, deverão ser promovidas ações de conscientização de pedestres de ciclistas e a realização de melhorias na sinalização horizontal com implantação de medidas de moderação do tráfego (traffic calming) como quebra-molas, diferenciação de pavimento e ordenamento de fluxos de tráfego, visando a aumentar a segurança dos deslocamentos de pedestres.</p>

			<h3>9.25 Quadras</h3>
			<wbr>
			<ul><li><b>Caracterização</b></li></ul>
			<p>O Parque Ibirapuera possui 8 quadras poliesportivas e 1 campo de futebol no subsetor de esporte. Em 2017, 7 quadras foram reformadas e receberam infraestrutura como redes, traves e alambrado.</p>
			<ul><li><b>Ação de Médio Prazo</b></li></ul>
			<p>Realizar a manutenção periódica das quadras, evitando acidentes por conta de infraestruturas inadequadas.</p>
			<p>Implantar vestiários para atender a demanda dos usuários que praticam esporte no local. A implantação pode ser feita a partir de estruturas móveis, como mobiliários urbanos, ressaltando-se que quaisquer implantações de novas estruturas devem ser aprovadas pela SVMA e órgãos de patrimônio histórico.</p>
			<p>Recuperação do piso de duas quadras secundárias, sendo uma localizada próxima à atual pista de bicicleta infantil e outra próxima à quadra de voleibol/badminton, de modo a permitir o uso esportivo e seguro desses equipamentos.</p>

		<h3>9.26 Estacionamentos</h3>
			<wbr>
			<ul><li><b>Caracterização</b></li></ul>
			<p>O parque possui bolsões de estacionamento localizados no Autorama (portões 3 e 4), à Bienal, MAM, Oca e portão 7, além das vagas em vias próximas a Bienal e Oca. O espaço para estacionamento hoje conta com pavimentos impermeáveis. Além disso, existem vagas operacionais no acesso do portão 10, próximo ao Museu Afro, utilizadas principalmente em eventos realizados dentro do parque.</p>
			<ul><li><b>Ação de Médio Prazo</b></li></ul>
			<p>Poderá ser realizada a substituição dos pisos dos estacionamentos por pavimentos permeáveis, de forma a ampliar a área permeável do parque, inclusive como compensação para a instalação de novos atrativos e instalações de serviços de apoio aos usuários.</p>
			<p>Não será permitida a instalação de novas áreas de estacionamento e a ampliação das áreas existentes. As vagas dentro das áreas dos estacionamentos existentes poderão ser remodeladas.</p>
			<p>Deverão ser instalação de equipamentos nos estacionamentos, tais como cancelas, sinalização horizontal e vertical, e câmeras de segurança em níveis suficientes, necessários para o controle e organização do serviço prestado.</p>
			<p>Os estacionamentos deverão estar disponíveis durante todo o período em que o parque estiver aberto.</p>
			<p>Deverá ser elaborado um plano de circulação viária interno ao Parque, de forma alinhada com CET, de forma a organizar os fluxos de veículos para que não causem impacto ao uso do parque, destacando ações e regramentos a serem aplicados nos casos de eventos.</p>
			<p>O plano de circulação viária deverá considerar medidas de moderação do tráfego (traffic calming) como quebra-molas, diferenciação de pavimento e ordenamento de fluxos de tráfego, visando a aumentar a segurança dos deslocamentos de pedestres.</p>
			<p>As vagas operacionais no acesso do portão 10, próximo ao Museu Afro, poderãoser mantidas, como apoio, principalmente, à realização de eventos dentro do parque.</p>

			<h3>9.27 Marquise</h3>
			<wbr>
			<ul><li><b>Caracterização</b></li></ul>
			<p>A Marquise do Ibirapuera é uma ampla estrutura que faz parte do conjunto projetado por Oscar Niemeyer, responsável pela conexão entre os edifícios que hoje possuem vocação cultural e de lazer. Possui uma área de cerca de 28 mil m², com estrutura em concreto armado com pouco mais de cem pilares de 50 cm de diâmetro e 8 pilares em V nas suas extremidades.</p>
			<p>Com o passar dos anos a estrutura foi tomando uma grande importância por conta dos usos intensos que passou a receber. O extenso espaço coberto é amplamente usado por encontro de jovens, skatistas e patinadores, e na realização de feiras. Além disso, também abriga o Museu de Arte Moderna (MAM), sanitários e um restaurante, hoje desativado. Dados todos os usos que passou a ter, problemas de incompatibilidade de atividades acontecem, tornando-se necessário o zoneamento das atividades e usos, bem como seu monitoramento.</p>
			<p>A Marquise passou por uma grande reforma finalizada em 2012, onde foram reparadas partes de cobertura, refeita a impermeabilização e renovado o sistema de iluminação.</p>
			<ul><li><b>Ação de Médio Prazo</b></li></ul>
			<p>Organização e monitoramento das atividades realizadas no local por meio de um zoneamento de usos, permitindo o uso compartilhado adequado entre todas as atividades ali realizadas.</p>
			<p>Realização de melhorias na edificação: (i) impermeabilização da cobertura entre as juntas de dilatação do trecho onde se localiza o antigo restaurante “The Green”; (ii) conserto dos pontos de vazamento no restante da cobertura; (iii) colocação de pastilhas em trechos de toda a platibanda; (iv) reforma das instalações elétrica, hidráulica e pintura do depósito sob a MARQUISE; e (v) instalação de mictórios nos sanitários sob a MARQUISE.</p>
			<p>Possibilidade da implantação de áreas de estar e descanso, que se relacionem com as atividades permitidas no local.</p>
			<p>Reforma do antigo restaurante (hoje sem uso) como suporte para uma nova instalação de serviços de alimentação, conveniência e souvenir. A reforma deverá contemplar a demolição da parte do restaurante fora da marquise, e implantar uma estrutura leve, transparente e de baixo impacto visual, que permita a permeabilidade física e visual do espaço.</p>

			<h3>9.28 Mobiliário</h3>
			<wbr>
			<ul><li><b>Caracterização</b></li></ul>
			<p>Bancos: Apresentam-se em distintos estados de conservação, uns em bom estado e outros deteriorados</p>
			<p>Lixeiras: Apresentam-se em distintos estados de conservação, uns em bom estado e outros deteriorados, além disso, são insuficientes e inadequados para atender o volume de resíduos produzidos nos dias de grande movimento do parque.</p>
			<p>Bebedouros: Apresentam-se em distintos estados de conservação, uns em bom estado e outros deteriorados, além disso, são insuficientes para atender o volume de usuários do parque, principalmente aos finais de semana.</p>
			<p>Paraciclos: Atualmente o parque não disponibiliza paraciclos aos seus usuários.</p>
			<ul><li><b>Ação de Médio Prazo</b></li></ul>
			<p>O mobiliário deverá contar com equipamentos acessíveis em todo o parque e equipamentos específicos para crianças e animais de estimação.</p>
			<p>Todos os equipamentos novos deverão utilizar materiais duráveis e que visem principalmente o conforto dos usuários.</p>
			<p>Além disso, devem ser pensados de modo integrado, com linguagem visual apropriada e padronizada, de modo a valorizar positivamente a paisagem do parque.</p>
			<p>A instalação de novos bancos deverão considerar as seguintes tipologias:</p>
			<ol>
			<li>Geral, para todo o parque: banco confortável, leve e de baixo impacto visual. </li>
			<li>Banco com mesa de apoio para refeição: banco com conjunto de mesas resistentes, instalados em áreas sombreadas para realização de refeições e piqueniques. </li>
			<li>Específicos: mobiliários que promovam a integração com a natureza,  instalado em áreas estratégicas do Parque, confortáveis e lúdicos.</li>
			</ol>

			<h3>9.29	Acessibilidade no Parque Ibirapuera</h3>
			<p>Aberto ao público em 1954 para os festejos do IV Centenário da fundação da cidade de São Paulo, o Parque Ibirapuera, nestes 65 anos evoluiu no tempo, inclusive quanto ao uso da vegetação do projeto paisagístico de Otávio Augusto Teixeira Mendes, sem  que o parque perdesse a sua  identidade, a força e a característica do projeto.</p>
			<p>Esta dinâmica do tempo sobre o espaço deve nortear os diagnósticos, diretrizes e ações de projeto do parque, com planos de ações de curto, médio e longo prazos. E dentre as demandas prioritárias insere-se a garantia fruição do parque pelas pessoas com deficiência e mobilidade reduzida, sob os princípios do Desenho Universal.</p>

			<h3>9.29.1	O Conceito de Desenho Universal</h3>
			<p>O conceito de Desenho Universal está definido conforme legislação vigente e normas técnicas. As Leis 13.146/2015 e  10.098/2000, o definem como:</p>
			<p><i>Desenho Universal: concepção de produtos, ambientes, programas e serviços a serem usados por todas as pessoas, sem necessidade de adaptação ou de projeto específico, incluindo os recursos de tecnologia assistiva;</i></p>
			<p>Este conceito propõe um desenho centrado no ser humano e na sua diversidade. Estabelece critérios para que edificações, ambientes internos, urbanos e produtos que atendam a um maior número de usuários, independentemente de suas características físicas, habilidades e faixa etária, favorecendo a biodiversidade humana e proporcionando uma melhor ergonomia para todos. Para tanto, foram definidos sete princípios do Desenho Universal, que passaram a ser mundialmente adotados em planejamentos e obras de acessibilidade:</p>
			<ol>
				<li><b>Uso equitativo:</b> é a característica do ambiente ou elemento espacial que faz com que ele possa ser usado por diversas pessoas, independentemente de idade ou habilidade. Para ter o uso equitativo deve-se: propiciar o mesmo significado de uso para todos; eliminar uma possível segregação e estigmatização; promover o uso com privacidade, segurança e conforto, sem deixar de ser um ambiente atraente ao usuário;</li>
				<li><b>Uso flexível:</b> é a característica que faz com que o ambiente ou elemento espacial atenda a uma grande parte das preferências e habilidades das pessoas. Para tal, devem-se oferecer diferentes maneiras de uso, possibilitar o uso para destros e canhotos, facilitar a precisão e destreza do usuário e possibilitar o uso de pessoas com diferentes tempos de reação a estímulos;</li>
				<li><b>Uso simples e intuitivo:</b> é a característica do ambiente ou elemento espacial que possibilita que seu uso seja de fácil compreensão, dispensando, para tal, experiência, conhecimento, habilidades linguísticas ou grande nível de concentração por parte das pessoas;</li>
				<li><b>Informação de fácil percepção:</b> essa característica do ambiente ou elemento espacial faz com que seja redundante e legível quanto a apresentações de informações vitais. Essas informações devem se apresentar em diferentes modos (visuais, verbais, táteis), fazendo com que a legibilidade da informação seja maximizada, sendo percebida por pessoas com diferentes habilidades (cegos, surdos, analfabetos, entre outros);</li>
				<li><b>Tolerância ao erro:</b> é uma característica que possibilita que se minimizem os riscos e consequências adversas de ações acidentais ou não intencionais na utilização do ambiente ou elemento espacial. Para tal, devem-se agrupar os elementos que apresentam risco, isolando-os ou eliminando-os, empregar avisos de risco ou erro, fornecer opções de minimizar as falhas e evitar ações inconscientes em tarefas que requeiram vigilância;</li>
				<li><b>Baixo esforço físico:</b> nesse princípio, o ambiente ou elemento espacial deve oferecer condições de ser usado de maneira eficiente e confortável, com o mínimo de fadiga muscular do usuário. Para alcançar esse princípio deve-se: possibilitar que os usuários mantenham o corpo em posição neutra, usar força de operação razoável, minimizar ações repetidas e minimizar a sustentação do esforço físico;</li>
				<li><b>Dimensão e espaço para aproximação e uso:</b> essa característica diz que o ambiente ou elemento espacial deve ter dimensão e espaço apropriado para aproximação, alcance, manipulação e uso, independentemente de tamanho de corpo, postura e mobilidade do usuário. Desta forma, deve-se: implantar sinalização em elementos importantes e tornar confortavelmente alcançáveis todos os componentes para usuários sentados ou em pé, acomodar variações de mãos e empunhadura e, por último, implantar espaços adequados para uso de tecnologias assistivas ou assistentes pessoais.</li>
			</ol>

			<h3>9.29.2	Diretrizes para acessibilidade no parque Ibirapuera</h3>
			<wbr>
			<p><b>Curto Prazo: 1 ano. Desenvolvimento e aprovação de projetos.</b></p>
			<p>As diretrizes ora apresentadas deverão ser concluídas até 1 (um) ano após a aprovação deste Plano Diretor:</p>
			<ul>
				<li>Deverá ser elaborado anteprojeto de rotas acessíveis a partir dos passeios externos ao parque, contemplando portões de acesso de pedestres, pontos de ônibus e estacionamentos;</li>
				<li>Deverá ser elaborado, anteprojeto de rotas internas que permitam acesso aos espaços livres e edificações. Tais rotas devem ser hierarquizadas por nível prioridade de implantação em curto e médio prazos;</li>
				<li>Deverá ser elaborado anteprojeto de Sinalização Visual, no termos do anexo Termo de Referência para Sinalização e Comunicação Visual do Parque Ibirapuera, componente deste Plano Diretor;</li>
				<li>Os estudos e análises diagnósticas, em consonância com as diretrizes ambientais deste Plano Diretor devem interferir minimamente na taxa de permeabilidade do parque prevendo, se necessário, o uso de tecnologia contemporânea;</li>
				<li>Os anteprojetos deverão adotar os princípios do Desenho Universal e passar por análise e aprovação da Comissão Permanente de Acessibilidade – CPA, da Secretaria Municipal da Pessoa com Deficiência e Mobilidade Reduzida – SPMED;</li>
				<li>No que tange à preservação do patrimônio cultural do parque o anteprojeto deverá passar por análise e aprovação dos órgãos de acautelamento patrimonial nas três esferas federativas, a saber: no âmbito municipal o Conselho Municipal de Preservação do Patrimônio Histórico, Cultural e Ambiental da Cidade de São Paulo – CONPRESP; no âmbito estadual o Conselho de Defesa do Patrimônio Histórico Arqueológico, Artístico e Turístico – CONDEPHAAT, e; no âmbito federal o Instituto do Patrimônio Histórico e Artístico Nacional – IPHAN;</li>
				<li>Havendo inserção de logomarcas ou qualquer tipo de publicidade no anteprojeto de Sinalização Visual, este deverá passar por análise e aprovação da Comissão de Proteção à Paisagem Urbana – CPPU;</li>
				<li>Todos os estudos, anteprojetos e aprovações serão acompanhados pela Divisão de Implantação, Projetos e Obras – DIPO, da Secretaria do Verde e Meio Ambiente – SVMA.</li>
			</ul>
			<wbr>
			<p><b>Curto prazo: 2 anos. Implantação de sinalização visual e rota prioritária.</b></p>
			<p>As diretrizes ora apresentadas deverão ser concluídas até 2 (dois) ano após a aprovação deste Plano Diretor:</p>
			<ul>
				<li>Deverá ser implementado o projeto de sinalização visual no parque;</li>
				<li>Deverá ser implementada a acessibilidade no anel principal de circulação do parque, bem como o acesso e entorno dos equipamentos, como sanitários e lanchonetes.</li>
			</ul>
			<wbr>
			<p><b>Médio prazo: 5 anos. Passeios externos e caminhos secundários.</b></p>
			<p>As diretrizes ora apresentadas deverão ser concluídas até 5 (cinco) ano após a aprovação deste Plano Diretor:</p>
			<ul>
				<li>Deverá ser implementada acessibilidade nos passeios externos ao parque, incluindo portões, pontos de ônibus, travessia de pedestres, vagas de estacionamento;</li>
				<li>Deverá ser implementada acessibilidade nos caminhos secundários do parque e de acesso às edificações.</li>
			</ul>
			<wbr>
			<p><b>Longo prazo: 10 anos. Acessibilidade Universal no parque.</b></p>
			<ul>
				<li>Análise sistêmica de todas as edificações do parque, de forma a verificar o atendimento e contemporaneidade às normas de acessibilidade, bem como propor e implementar atualizações.</li>
			</ul>
		</section>

		<section>
			<h2 class="titulo" indent="2">10. MONITORAMENTO DAS ATIVIDADES</h2>
			<CommentsContext :id="commentId()" :context="'titulo'">
			<p>O plano diretor é um documento de gestão que, neste caso, deverá ser revisado e atualizado no prazo de dez anos. Ele deve conter um sistema de monitoramento e avaliação que permita verificar a eficiência da gestão e o cumprimento das diretrizes propostas, compreendendo a coleta e sistematização de dados, bem como a interpretação destes. É nesse contexto que os indicadores se tornam importantes, pois permitem a análise e comparação de parâmetros do ambiente, de eventos e de situações específicas ao longo do espaço e do tempo.</p>
			</CommentsContext>
			<p>Entretanto, a ausência de um sistema nacionalmente padronizado e consolidado de monitoramento e de indicadores impõe desafios aos novos modelos que são pretendidos, como no presente plano diretor do Parque do Ibirapuera.  </p>
			<p>Assim, identificou-se um modelo conceitual de monitoramento e indicadores criado pela Organização para a Cooperação e Desenvolvimento Econômico (OCDE) que passou a ser utilizado internacionalmente desde sua criação em 1993. Nesse modelo os indicadores são agrupados em três categorias: pressão, estado e resposta. Os indicadores de pressão descrevem as pressões ou ameaças sobre o ambiente; os de estado descrevem o estado ou as características do ambiente (integridade ou qualidade e quantidade); e por fim, os indicadores de resposta descrevem as respostas às ações de manejo propostas.</p>
			<p>Segundo a OCDE, esse modelo considera as seguintes características:</p>
			<ul>
			<li>Relevância: deve ser representativo, de fácil compreensão e comparável;</li>
			<li>Consistência: deve ser bem apoiado em termos técnicos e científicos e de consenso internacional</li>
			<li>Mensurabilidade: deve ser facilmente mensurável e passível de monitoramento regular a um custo não excessivo.</li>
			</ul>
			<p>Tendo esse modelo como norteador, elaborou-se uma matriz de indicadores a partir das diretrizes traçadas ao longo do plano diretor, acrescentando-se ainda as formas de medição e os resultados esperados.</p>
			<p>Compete ao Poder Público estipular os limites ou valores de referência dos parâmetros aferidos pelos indicadores conforme as regulamentações vigentes na época da medição, sendo que esta é de responsabilidade da gestão do Parque.</p>
			<p>Segue abaixo tabela da matriz de indicadores:</p>
			<table><tr><td><p><b>Tipo</b></p></td><td><p><b>Indicador</b></p></td><td><p><b>Forma de medição</b></p></td><td><p><b>Resultado esperado</b></p></td></tr><tr><td rowspan="7"><p><b>Pressão</b></p></td><td><p>Visitação</p></td><td><p>Nº de visitantes por mês</p></td><td><p>Parque atende às necessidades de lazer e recreação, e conservação de biodiversidade e recursos naturais</p></td></tr><tr><td><p>Ameaça à fauna </p></td><td><p>Nº de animais silvestres afetados por fatores antrópicos (lixo, linhas de pipa, edificações, colisões, cercas e concertinas)</p></td><td><p>Diminuição dos impactos a fauna do Parque </p></td></tr><tr><td><p>Usuários e fauna</p></td><td><p>Nº de conflitos envolvendo o contato com animais silvestres (mordidas, picadas, agressões e maus tratos  à fauna)</p></td><td><p>Diminuição do conflito entre usuários e a fauna silvestre</p></td></tr><tr><td><p>Controle de zoonoses, de animais domésticos abandonados e invasores</p></td><td><p>Nº de ações de controle de zoonoses e de animais domésticos abandonados</p></td><td><p>Manutenção do controle de zoonoses e diminuição de animais domésticos abandonados</p></td></tr><tr><td><p>Contaminação por lixo e esgoto</p></td><td><p>Nº de pontos de lançamento de lixo e esgoto sem tratamento</p></td><td><p>Parque livre de contaminação por lixo e esgoto</p></td></tr><tr><td><p>Espécies invasoras</p></td><td><p>Percentual de espécies invasoras</p></td><td><p>Espécies invasoras erradicadas ou controladas</p></td></tr><tr><td><p>Erosão e compactação</p></td><td><p>Percentual da área permeável com solo exposto</p></td><td><p>Solo protegido, sem erosão e compactação</p></td></tr><tr><td rowspan="10"><p><b>Estado</b></p></td><td><p>Qualidade de água para proteção da vida aquática</p></td><td><p>Índice de qualidade de água para proteção da vida aquática (IVA)</p></td><td><p>Lago com água de boa qualidade, garantindo o suporte às espécies aquáticas</p></td></tr><tr><td><p>Fauna</p></td><td><p>Nº de espécies da fauna</p></td><td><p>Registro das espécies encontradas no Parque</p></td></tr><tr><td><p>Flora</p></td><td><p>Nº de espécies da flora</p></td><td><p>Registro das espécies encontradas no Parque</p></td></tr><tr><td><p>Cobertura vegetal</p></td><td><p>Percentual da cobertura vegetal em relação à área total</p></td><td><p>Área verde protegida</p></td></tr><tr><td><p>Risco de queda de árvores</p></td><td><p>Nº de árvores com risco de queda</p></td><td><p>Manejo arbóreo adequado para prevenção de acidentes</p></td></tr><tr><td><p>Áreas degradadas</p></td><td><p>Percentual de áreas degradadas</p></td><td><p>Parque livre de áreas degradadas</p></td></tr><tr><td><p>Conectividade</p></td><td><p>Percentual do perímetro do Parque conectados com outras áreas verdes</p></td><td><p>Parque conectado a outras áreas verdes do entorno</p></td></tr><tr><td><p>Redução de ruído e poluição luminosa</p></td><td><p>Percentual de amortização de ruído e de poluição luminosa.</p></td><td><p>Parque como refúgio da vida silvestre</p></td></tr><tr><td><p>Corpo técnico para ações de manejo de fauna e flora</p></td><td><p>Nº de profissionais capacitados atuantes no Parque</p></td><td><p>Eficiência nas ações de manejo e conservação </p></td></tr><tr><td><p>Equipamentos que necessitam de reparo (ex. brinquedos, lixeiras, bebedouros)</p></td><td><p>Nº de equipamentos que necessitam de reparo</p></td><td><p>Pleno atendimento às necessidades de lazer e recreação</p></td></tr><tr><td rowspan="8"><p><b>Resposta</b></p></td><td><p>Atividades de educação ambiental</p></td><td><p>Nº de palestras/cursos/oficinas e pessoas atendidas</p></td><td><p>Usuários bem informados e sensibilizados para a conservação da natureza</p></td></tr><tr><td><p>Material educativo</p></td><td><p>Nº de publicações e tiragem</p></td><td><p>Difusão do conhecimento sobre os elementos naturais constitutivos do Parque</p></td></tr><tr><td><p>Parcerias</p></td><td><p>1. Percentual de atividades desenvolvidas por meio de parcerias por ano/2. Nº de atividades desenvolvidas por meio de parcerias por ano</p></td><td><p>Gestão eficiente</p></td></tr><tr><td><p>Uso racional da água</p></td><td><p>1. Consumo de água do Parque/2. Quantidade de água da chuva e de outras fontes que é reutilizada </p></td><td><p>Economia de água</p></td></tr><tr><td><p>Uso racional de energia</p></td><td><p>1. Consumo de energia do Parque/2. Quantidade energia gerada (painéis solares)</p></td><td><p>Economia de energia</p></td></tr><tr><td><p>Enriquecimento de flora</p></td><td><p>Nº de mudas plantadas</p></td><td><p>Conservação e ou aumento da biodiversidade e serviços ambientais</p></td></tr><tr><td><p>Gerenciamento de resíduos sólidos</p></td><td><p>Percentual de resíduos sólidos coletados no Parque encaminhados para reciclagem ou reaproveitamento</p></td><td><p>Gestão eficiente dos resíduos sólidos com baixo impacto ambiental</p></td></tr><tr><td><p>Compostagem</p></td><td><p>Quantidade de adubo orgânico produzido por mês</p></td><td><p>Manejo adequado de resíduos orgânicos e autossuficiência na produção de adubo</p></td></tr></table>
			<!-- Ocultar comentários:  <Comments :attr="{id:commentId(), context:'CAPÍTULO 2'}" v-if="estaConsulta.ativo == 1"></Comments> -->
		</section>

		<section>
			<h2 class="titulo" indent="1">APÊNDICE</h2>
			<ul class="links">
				<li>
					<a :href="src('arquivos/pdp-ibirapuera/APÊNDICES_Arcabouço Legal.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Arcabouço Legal.pdf</div>
						<span>737 KB</span>
					</a>
				</li>
			</ul>
			<ul class="links">
				<li>
					<a :href="src('arquivos/pdp-ibirapuera/DPH - Programa e Plano de Manutenção_imóveis tombados.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>DPH - Programa e Plano de Manutenção_imóveis tombados.pdf</div>
						<span>217 KB</span>
					</a>
				</li>
			</ul>
			<ul class="links">
				<li>
					<a :href="src('arquivos/pdp-ibirapuera/APENDICES_PD_Ibirapuera_Objetivos e metas.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>OBJETIVOS e METAS.pdf</div>
						<span>346 KB</span>
					</a>
				</li>
			</ul>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:commentId(), context:'Comentarios'}"></Comments>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import CommentsContext from '@/components/CommentsContext'
import CommentsLoader from '@/components/CommentsLoader'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'PlanoDiretorParqueIbirapuera',
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
		CommentsLoader
	},
	mixins: [ consultasCommons ],
	methods: {
		fileSrc (fileName) {
			let url = this.$store.getters.basePath + 'arquivos/pdp-ibirapuera/' + fileName
			// let url = 'arquivos/pdp-ibirapuera/' + fileName
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
