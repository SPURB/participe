<template>
	<div class="PoliticaMunicipalTurismo" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/placeholder_480w.jpg" :esta_consulta="estaConsulta" :social="social_assets">
			<template slot="titulo"><div>Política de Turismo da Cidade de São Paulo</div></template>
			<template slot="subtitulo"><div>Perspectiva 2030</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<!-- <Apoio></Apoio> -->
		<!-- Decreto Nº 56.901 inclua este componente caso seja um PIU -->

		<section>
			<h2 class="titulo" indent="1">Resumo Executivo</h2>
			<p>
				Em 2019 a Prefeitura de São Paulo, por meio da Secretaria Municipal de Turismo - SMTur, deu início ao processo de formulação do novo Plano de Turismo Municipal – PLATUM. O Plano é o principal instrumento para a formulação da Política Municipal de Turismo da cidade de São Paulo e sua revisão é uma exigência da Lei nº 11.198/92.
			</p>
			<p>
				O PLATUM deve contemplar todas as iniciativas ligadas à indústria do turismo, originárias tanto do mercado como do setor público e da sociedade civil organizada, promovendo a coordenação de esforços para o desenvolvimento social, econômico e cultural do Município. Com esse espírito a SMTur apresenta para consulta pública o presente Caderno de Propostas para o Turismo em São Paulo.
			</p>
			<p>
				O documento tomou por base um diagnóstico prévio (com levantamentos de dados gerais da cidade, oferta e demanda turística) e o levantamento de propostas com representantes da sociedade civil, mercado e setor público. O resultado desse debate está consolidado em 6 Macroprogramas, que reúnem as iniciativas  para a transformação do cenário atual do turismo em São Paulo. 
			</p>

			<figure title="Processo de Formulação" class="coluna">
				<img :src="fileSrc('img1_processo_de_formulacao.jpg')" alt="Processo de Formulação" style="height: auto; width: 100%;">
				<figcaption>Figura 1. Desenho do Processo de Formulação da Política Municipal de Turismo.</figcaption>
			</figure>

			<p>
				O Caderno de Propostas validado será o documento norteador da 1ª Conferência de Políticas de Turismo da Cidade de São Paulo, a ser realizada em 16 e 17 de agosto de 2019.
			</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">CAPÍTULO 1. Apresentação</h2>
			<p>
				Em agosto 2018 a Prefeitura de São Paulo passou a conter em seu organograma uma estrutura organizacional inédita para cuidar da Política Municipal de Turismo: a Secretaria Municipal de Turismo - SMTUR.
			</p>
			<p>
				Criada pela Lei nº. 16.974 de 2018 e regulamentada pelo Decreto nº 58.381 de 2018, a SMTUR surge com a “finalidade de formular e executar a política, a promoção e exploração do turismo e atividades afins no Município, executar e promover o apoio e/ou patrocínio a projetos ou eventos de interesse social, turístico, cultural, religioso e outros similares, bem como realizar eventos e executar atividades compatíveis e correlatas com a sua área de atuação” (art. 2º do referido Decreto).
			</p>
			<p>
				Com a criação da Secretaria Municipal de Turismo, que incorpora responsabilidades antes atribuídas à SPTuris e recebe novas responsabilidades colocadas por novos desafios, a expectativa de organizações da sociedade civil, mercado e setor público é que a Política Municipal de Turismo possa enfim ser consolidada como uma relevante política pública na cidade de São Paulo.
			</p>
			<p>
				E para honrar com tais expectativas a equipe que está à frente da Secretaria deu início ao processo de revisão do último PLATUM (2015-2018) para formulação do novo PLATUM (2019-2021) junto a representantes da sociedade civil, mercado e setor público.
			</p>
			<p>
				No entanto, ao envolver mais atores fora do gabinete da Secretaria para pensar neste processo de revisão e formulação, percebeu-se que ele deveria ser mais amplo, participativo, e com produtos mais segmentados. Afinal, notou-se que não adiantaria formular um Plano de Política de Turismo no gabinete da Secretaria sem a aderência de atores relevantes da sociedade civil, mercado e setor público. E, principalmente, sem o reconhecimento do turismo pelos munícipes de São Paulo como política pública indutora de desenvolvimento econômico, social, humano e sustentável.
			</p>
			<p>
				Neste sentido, além das reuniões que o gabinete da SMTUR realizou junto a representantes dos três setores, e da retomada das reuniões do Conselho Municipal de Turismo - COMTUR, a equipe da Secretaria decidiu compartilhar a responsabilidade por revisar e formular nova Política Municipal de Turismo com o maior número de pessoas possível. Assim, do planejamento à entrega do PLATUM, foram previstas cinco etapas:
			</p>
			<p>
				<ol>
					<li>
						Diagnóstico: com levantamentos de dados gerais da cidade, oferta e demanda turística;
					</li>
					<li>
						Workshops: com mais de 150 participantes, representantes de empresas e entidades do turismo ou atividades correlatas. Foram doze encontros temáticos realizados nos meses de abril e maio, com representantes da academia, atrativos turísticos, agências de turismo receptivo, mobilidade urbana, setor de entretenimento e compras, setor de eventos e mercado do turismo corporativo, hospedagem e alimentação, ecoturismo, governo – nas suas mais variadas áreas que impactam no turismo - representantes da economia criativa e do COMTUR, órgãos de segurança pública, e mídia especializada no turismo, além das equipes técnicas de SMTUR e SPTuris. Nessa etapa, foram discutidos os desafios e destaques de São Paulo, bem como foram apresentadas as propostas de ação que cada um dos segmentos entende como importante e necessário para o desenvolvimento e/ou aprimoramento da atividade. 
					</li>
					<li>
						Eventos em Instituições de ensino em turismo: com formato próximo ao realizado nos workshops, foram elencados desafios e destaques, assim como sugestões de propostas. Foram oito encontros, com sete instituições de ensino técnico e superior, realizadas nos meses de maio e junho.
					</li>
					<li>
						Consulta Pública Online: superada a primeira etapa de discussões, as propostas elencadas nos workshops e eventos em turismo foram tratadas e agrupadas em macroprogramas, ao todo 136 propostas. O resultado foi submetido ao COMTUR e disponibilizado para esta consulta pública online.
					</li>
					<li>
						1ª Conferência de Políticas de Turismo da Cidade de São Paulo – CONFETUR, que será realizada nos dias 16 e 17 de agosto de 2019, sendo esta a última etapa, que aprovará as propostas elaboradas e debatidas ao longo de todo este processo. 
					</li>
				</ol>
			</p>
			<p>
				As deliberações da Conferência serão sistematizadas e apresentadas no Plano Municipal de Turismo, segmentado em ao menos dois produtos: PLATUM (2019-2021) com metas, estratégias e ações a serem implementadas em médio prazo, articuladas com o PPA; e o Plano Estratégico 2020-2030 com metas e estratégias a serem implementadas no horizonte de dez anos. Além destes, a Secretaria Municipal de Turismo poderá produzir outros documentos de planejamento, todos em decorrência desse amplo processo participativo e tendo o PLATUM como fio condutor.
			</p>
			<p>
				Além da proposta, os referidos documentos apresentarão também um diagnóstico atualizado com dados selecionados de acordo com o escopo das metas e estratégias selecionadas para serem objeto da Política no horizonte dos próximos anos. 
			</p>
			<p>
				Convidamos a todos ao debate democrático de ideias e à elaboração e priorização de propostas que contribuam para o incremento e aprimoramento do Turismo na Cidade de São Paulo.
			</p>

		</section>

		<section>
			<h2 class="titulo" indent="1">CAPÍTULO 2. Breve Diagnóstico: O Turismo e a Cidade de São Paulo</h2>
			<p>
				O Turismo é uma das principais atividades econômicas do mundo e apresenta crescimento tanto no mercado mundial quando na cidade de São Paulo. 
			</p>
			<p>
				Só em 2018, segundo o World Travel & Tourism Council - WTTC, a atividade teve um crescimento global de 3,9%, gerando um a cada dez empregos, além de ter injetado US$8,8 trilhões na economia, representando 10,4% do PIB mundial (considerando o impacto direto, indireto e induzido). No Brasil, apesar de um desenvolvimento um pouco menos acelerado, impactado por fatores políticos e econômicos, segundo o WTTC, em 2018, o turismo impactou 3% do PIB nacional em termos diretos e 8% em termos indiretos, gerando 2,7% dos empregos do país; o PIB turístico nacional cresceu 3,1% e a atividade contribuiu com US$152,5 bilhões para a economia em 2018, segundo estudo feito pela Oxford Economics – empresa de consultoria econômica britânica – e WTTC. 
			</p>
			<p>
				No contexto nacional, São Paulo é o maior destino turístico. Em 2018, segundo projeções da Fundação Instituto de Pesquisas Econômicas – FIPE a cidade recebeu cerca de 15,7 milhões de turistas, dos quais, 82% corresponderam à demanda nacional e 18% internacional, o que gerou uma receita estimadas em quase R$ 13 bilhões.  Considerando só o Imposto Sobre Serviço (ISS), a cidade arrecadou mais de R$ 329 milhões em 2018 no grupo 13, que concentra as atividades ligadas ao turismo como hotéis e agencias. Na cidade, estão algumas das maiores corporações globais. O poder econômico, associado a uma melhor infraestrutura de apoio e infinidade de prestadores de serviço inseridos no maior mercado consumidor do país definem a vocação do turismo na cidade: negócios. A parcela dos visitantes nacionais e internacionais movidos por esta vocação é de 47% do total.
			</p>
			<p>
				Apesar de sua grande força econômica, o turismo tem uma grande relevância também considerando aspectos como desenvolvimento social, cultural e sustentável dos destinos.
			</p>
			<p>
				A multiculturalidade e influência de diferentes povos, etnias, religiões fazem de São Paulo uma cidade única, diversa e rica em cultura. A grande oferta de equipamentos culturais, bem como a realização de grandes shows, eventos e exposições também são grandes motivadores do turismo na cidade de São Paulo e estão disponíveis não só para os visitantes, mas também para toda a população. Desde congressos ou grandes feiras até pequenos encontros que atraem um grande público devido a gama e variedade de acontecimentos. Há ainda os megaeventos que projetam São Paulo para o mundo e/ou atraem milhares de turistas: Grande Prêmio Brasil de Fórmula 1, São Paulo Fashion Week, Carnaval, Parada LGBT, eventos esportivos, musicais e outros. Aos poucos, e levando em conta toda sua bagagem cultural – desde o pioneirismo na difusão de novas manifestações artísticas, como a Semana de Arte Moderna de 1932 e tantas outras – o turismo passou a se apropriar também da cultura, do lazer e do entretenimento que a cidade oferece, razão pela qual o lazer vem evoluindo como motivador de viagens na capital paulista. 
			</p>
			<p>
				Em âmbito sustentável, o desenvolvimento de projetos como o Polo de Ecoturismo de São Paulo, além de contribuir para o desenvolvimento das comunidades do extremo sul, bem como a agroecologia local, proporcionam contato com diferentes culturas e incentivam a preservação do meio ambiente e geração de emprego em renda em regiões menos desenvolvidas da cidade. 
			</p>
			<p>
				E há também outros fatores que estimulam a vinda de visitantes para a cidade: a gastronomia – que a cada ano ganha novas estrelas, a vida noturna – internacionalmente reconhecida, a saúde – estética e para tratamento de doenças, e as compras – do popular ao luxo.
			</p>

			<figure title="Principais números do turismo da cidade" class="coluna">
				<img :src="fileSrc('img2_numeros_do_turismo.jpg')" alt="Principais números do turismo da cidade" style="height: auto; width: 100%;">
				<figcaption>Figura 2. Desenho com os principais números do turismo de São Paulo.</figcaption>
			</figure>
			
			<p>
				Para a elaboração do Plano Municipal de Turismo, uma das etapas da foi a realização de workshops com a participação do mercado, academia, sociedade civil e governo, ocasiões em que foi questionado aos participantes quais são os destaques do turismo da cidade, ou seja, aquilo que deve ser promovido, o que faz de São Paulo um local para se visitar; e os desafios a serem enfrentados pelo setor, para que a cidade realmente se consolide como um destino de referência internacional. 
			</p>
			<p>
				<b>As indicações das dezenas de pessoas que participaram desse processo foram agrupadas em temas semelhantes e estão detalhadas a seguir, com o conteúdo levantado na etapa de elaboração de diagnóstico do plano.</b>
			</p>
		</section>

		<section>
		 	<h3 class="titulo" indent="2">2.1 Destaques Do Turismo Da Cidade De São Paulo </h3>
		 	<CommentsContext :id="id" :context="'ITEM item.subitem'">
		 		<p>
		 			São Paulo já é o principal destino turístico do país, por isso, entender o que motiva esses visitantes e quais são os principais destaques da cidade que devem ser fortalecidos e divulgados é fundamental para definição de uma política de turismo.  Nos workshops, foram identificados dezenas de destaques, agrupados em oito grupos detalhados a seguir: 
		 		</p>


		 		<figure title="Principais destaque da cidade" class="coluna">
		 			<img :src="fileSrc('img3_destaques.jpg')" alt="Principais destaque da cidade" style="height: auto; width: 100%;">
		 			<figcaption>Figura 3. Ilustração indicando os principais destaques do turismo da cidade.</figcaption>
		 		</figure>

		 		<p>
		 			<b>Economia</b><br>
		 			A cidade cosmopolita que possui o maior mercado consumidor do país também destaca-se no setor econômico. Grandes empresas possuem sua matriz em São Paulo; proliferam-se as startups em todos os setores; há diversos exemplos de empreendimentos com economia criativa; a tecnologia é vista como forte aliada no desenvolvimento de todo e qualquer projeto e a conectividade torna possível o avanço rumo ao futuro
		 		</p>
		 		<p>
		 			<b>Infraestrutura</b>
		 			São Paulo conta com a maior infraestrutura aeroportuária e rodoviária do país, de extrema qualidade, garantindo facilidade no acesso. Dos quatro aeroportos que atendem à capital, dois deles ficam fora do perímetro do município (Aeroporto Internacional de São Paulo/Guarulhos e Aeroporto Internacional de Viracopos-Campinas. Juntos, os aeroportos que atuam com voos comerciais movimentaram 622.252 aeronaves e receberam 72.773.231 passageiros, em 2018; já o Campo de Marte, que opera aviação geral, executiva, táxi aéreo e escolas de pilotagem, teve 72.379 pousos e decolagens. Já nos três terminais rodoviários da cidade (Barra Funda, Jabaquara e Tietê), 15.784.595 pessoas viajaram de ônibus por São Paulo, explorando 1.619 destinos nacionais e 6 internacionais. O movimento de quase 650 mil ônibus em 2018, nas 153 plataformas dos terminais não é distribuído uniformemente, sendo que em períodos de feriado aumenta consideravelmente, para atender a demanda. Conta também com sistema de transporte público eficiente garantindo fácil circulação dentro da cidade. 
		 		</p>
		 		<p>
		 			A infraestrutura para eventos também impressiona. A cidade conta com diversos espaços que recebem dezenas de feiras, congressos, workshops e exposições. Dentre eles, há os grandes centros de exposições, cujos pavilhões, juntos, representam 278 mil m² de área locável  e espaços menores, atendendo a todo tipo de demanda.
		 		</p>
		 		<p>
		 			A acessibilidade no turismo também é um destaque da cidade. Em 2016, o Governo Federal listou São Paulo entre cinco destinos turísticos acessíveis brasileiros, com mais de 300 atrativos totalmente acessíveis. A Secretaria Municipal da Pessoa com Deficiência - SMPED, que, entre outros objetivos, promove a participação da Pessoa com Deficiência - PcD na sociedade, disponibiliza o Mapa da Rede de Serviços da Pessoa com Deficiência, no qual é possível localizar os equipamentos públicos acessíveis e que prestam atendimento a esse público. Nesta lista, foram identificados dos 125 estabelecimentos culturais e/ou turísticos com algum tipo de acessibilidade.
		 		</p>
		 		<p>
		 			<b>Serviços</b>
		 			São Paulo possui a maior oferta hoteleira da América Latina, com mais de 400 hotéis. Além de expressiva, a oferta é democrática e diferenciada. Há riqueza e variedade nas opções, seja de hotel, hostel ou hospedagem por aluguel. Além do setor de motéis, com estabelecimentos que se posicionam como opção alternativa de hospedagem. Ainda que, cada vez mais, a hospedagem em imóveis residenciais como os da plataforma AirBnB sejam uma opção ao turista, a taxa de ocupação hoteleira em 2018 teve um bom desempenho, ocupando a terceira melhor posição desde o início da série histórica em 2005, inferior apenas aos anos de 2010 e 2012, que alcançaram taxas de 68,32% e 69,29% respectivamente. 
		 		</p>
		 		<p>
		 			Além da oferta de serviços básicos, a atividade turística conta com uma estrutura de apoio, que atua como facilitadora e contribui para o desenvolvimento do setor. São agências de receptivo, guias de turismo, locadoras de veículos e transportadoras turísticas, além de Centrais de Informação Turística, que acabam se tornando ferramentas para a melhoria da experiência do turista no destino. 
		 		</p>
		 		<p>
		 			Há excelência no padrão de prestação dos serviços, ampla capacidade de entrega de grandes volumes demandados nos eventos e variedade de opções. É uma cidade extremamente hospitaleira.
		 		</p>
		 		<p>
		 			<b>Oferta variada</b> 			
		 			Os números do turismo são bastante significativos. Para suportar a demanda, a oferta de equipamentos e serviços turísticos de São Paulo colocada à disposição do consumidor é ampla e diferenciada.
		 		</p>
		 		<p>
		 			A oferta de atrações de lazer e entretenimento é única. São diversos museus, centros culturais, galerias de arte, estádios, cinemas, teatros, mirantes, áreas verdes, parques de diversão, espaços para esportes e vários outros atrativos, além de toda uma gama de opções no setor de entretenimento. 
		 		</p>
		 		<p>
		 			Considerando essa oferta variada, há muitos segmentos de turismo que motivam a vinda à cidade: negócios, eventos, lazer, cultura, compras, saúde, pedagógico, rural, ecoturismo, LGBT, gastronomia. São opções para todo tipo de público e interesse.  
		 		</p>
		 		<p>
		 			Mas a qualidade talvez seja o grande diferencial de São Paulo em relação a outros destinos nacionais. Mais do que números, a oferta da cidade possui muitos destaques, seja por espaços premiados, seja por características únicas, que os diferenciam dos demais.
		 		</p>
		 		<ul>
		 			<li>
		 				Pinacoteca do Estado, Catavento Cultural, Museu do Futebol e Museu de Arte de São Paulo – MASP ocupam, respectivamente, a 1ª, 6ª, 8ª e 10º posição no ranking dos 10 melhores museus do Brasil<sup>2</sup>.
		 			</li>
		 			<li>
		 				Dois centros culturais de São Paulo aparecem na lista dos 100 mais visitados do mundo<sup>3</sup>. O Centro Cultural Banco do Brasil ocupa a 85ª posição, com 931 mil visitantes e o Instituto Tomie Ohtake a 92 ª posição, com 898 mil pessoas.
		 			</li>
		 			<li>
		 				A Sala São Paulo foi eleita como uma das dez melhores salas de espetáculos do mundo<sup>4</sup>.
		 			</li>
		 		</ul>
		 		<p>
		 			<b>Diversidade</b>
		 			Talvez uma das características que mais identifique a capital seja a diversidade de sua gente. O fato de São Paulo abraçar povos de culturas e hábitos tão distintos faz com que adquira ares de cidade global, pluralista, que aceita o novo, o diverso e o inesperado. A diversidade de seu povo também confere aos espaços atributos multifacetados, que ao mesmo tempo os tornam únicos e atrativos.
		 		</p>
		 		<p>
		 			<b>Eventos</b>
		 			É a principal cidade brasileira no setor. Segundo a International Congress and Convention Association – ICCA, a capital ocupa o primeiro lugar no Brasil e terceiro na América Latina em número de eventos realizados. Para sustentar esse mercado, diversos espaços são disponibilizados para o setor, de todos os tamanhos e para todos os tipos de públicos. Não bastassem os ambientes especializados, feiras e festivais de rua se espalham pela cidade, sem contar as corridas urbanas e os megaeventos, que dão visibilidade e reconhecimento merecido à metrópole.
		 		</p>
		 		<p>
		 			<b>Compras</b>
		 			São Paulo concentra turistas de todos os Estados em busca dos mais diversos produtos; seja para seu consumo próprio ou para revenda, consumidores lotam as lojas e ruas de comércio especializado para satisfazer suas necessidades e desejos.
		 		</p>
		 		<p>
		 			Há todo tipo de mercado, do popular de rua, com destaque para a região da Rua 25 de Março, maior centro de comércio popular da América Latina, por onde circulam cerca de 400 mil pessoas em dias úteis e mais de um milhão e duzentas mil pessoas em épocas próximas às datas especiais, ao de luxo das lojas de grife da Oscar Freire, eleita a oitava mais luxuosa do mundo<sup>5</sup>, ou dos shoppings. 
		 		</p>
		 		<p>
		 			<b>Gastronomia</b>
		 			A rica e variada gastronomia é um dos grandes destaques de São Paulo. Em 2018, por exemplo, a cidade recebeu o título de Capital Ibero-Americana de Cultura Gastronômica, pela Academia Iberoamericana de Gastronomia, e de Capital da Gastronomia pelo <i>Salon Internacional de la Restauration, de l’hôtellerie et de l’ Alimentation – Sirha</i> e é famosa não só pela diversidade de estabelecimentos, tipos e nacionalidades de cozinha, mas também pela alta qualidade dos pratos e dos serviços oferecidos. 
		 		</p>
		 		<p>
		 			Intimamente ligada a seu povo, a gastronomia de São Paulo reflete a diversidade tão característica que a define. Desde tipos de culinária até referências internacionais e regionais; de restaurantes superluxuosos, renomados e estrelados a botecos de rua com petiscos tradicionais e bebidas geladas; de festivais gastronômicos a redutos de <i>food trucks</i>, sempre há o que comer e comer bem na capital, a qualquer hora do dia ou da noite. A seguir são apresentados alguns destaques premiados da gastronomia paulistana.
		 		</p>
		 		<ul>
		 			<li>O restaurante D.O.M., liderado por Alex Atala, considerado o 5º melhor restaurante da América Latina em 2018  e 54º melhor do mundo em 2019</li>
		 			<li>O restaurante A Casa do Porco, do chef Jefferson Rueda foi eleito o 39º entre os melhores do mundo em 2019⁷</li>
		 			<li>A Chef Helena Rizzo foi eleita a melhor chef mulher do mundo </li>
		 			<li>2 restaurantes com duas estrelas no Guia Michelin </li>
		 			<li>10 restaurantes com uma estrela no Guia Michelin⁹</li>
		 			<li>27 restaurantes premiados na categoria “Bib Gourmand”, no Guia Michelin⁹</li>
		 			<li>71 restaurantes premiados na categoria “O prato Michelin”, no Guia Michelin⁹</li>
		 			<li>O restaurante Mocotó, do chef Rodrigo Oliveira, foi eleito o melhor restaurante sem reservas do mundo  pela The World Restaurant Awards</li>
		 		</ul>
		 		<p>
		 			Se por um lado, toda essa variedade faz de São Paulo uma cidade surpreendente e rica em boas experiências, por outro, há desafios a superar. 
		 		</p>
		 	</CommentsContext>
		</section>

		<section>
		 	<h3 class="titulo" indent="2">2.2. DESAFIOS PARA O TURISMO DA CIDADE DE SÃO PAULO</h3>
		 	<CommentsContext :id="id" :context="'ITEM item.subitem'">
		 		<p>
		 			Apesar dos destaques e de todo potencial atrelado a eles, para os participantes dos workshops ainda há uma série de desafios para o aprimoramento do turismo na cidade de São Paulo, a fim de alcançarmos os níveis de excelência almejados.
		 		</p>
		 		<p>
		 			Muitas vezes esses desafios têm caráter estrutural e dificilmente são solucionados a partir de ações advindas exclusivamente do setor do turismo, seja da gestão pública ou privada. Tampouco se restringem à atuação do poder executivo e da esfera municipal, pois requer esforços de alteração legislativa ou atuação do governo estadual, por exemplo. Por outro lado, desafios institucionais podem ser resolvidos, ou ao menos minimizados, com articulação das ações e serviços entre o poder público e privado. Por fim, os desafios setoriais são aqueles que atravancam o desenvolvimento de atividades ou setores específicos, e que requerem intervenção.
		 		</p>

		 		<figure title="Estruturais" class="coluna">
		 			<img :src="fileSrc('img4_estruturais.jpg')" alt="Estruturais" style="height: auto; width: 100%;">
		 			<figcaption>Figura 4. Estruturais</figcaption>
		 		</figure>

		 		<p>
		 			Para os participantes, a segurança pública em São Paulo, especialmente em algumas regiões, é insuficiente. Quando pensamos em um ambiente seguro, é preciso considerar diversos fatores. Cuidar de uma cidade tão grande como São Paulo também requer forte empenho no setor de zeladoria: limpeza, iluminação pública, calçamento e todos os itens necessários para o bem-estar tanto do morador, quanto do visitante no espaço público, precisam de atenção especial, principalmente na região central. A despoluição dos rios para a utilização turística também é uma antiga reivindicação da área.
		 		</p>
		 		<p>
		 			O crescimento da capital desafia novos pensamentos sobre a mobilidade, os acessos e transporte público. Há muito trânsito, principalmente em horários de pico, prejudicando a experiência turística nesses períodos. Há de se melhorar a acessibilidade de um modo geral, os acessos aos atrativos e aos centros de exposições, assim como repensar as restrições para circulação de ônibus de turismo e os locais para embarque e desembarque. O transporte público não dispõe de muita informação para o turista, tampouco atendimento em outros idiomas e algum cartão diferenciado para a circulação e visitação aos atrativos. O sistema cicloviário também necessita de atenção, manutenção e ampliação para tornar-se não só uma alternativa para o morador, mas também ao turista, como opção para explorar 	a cidade.
		 		</p>
		 		<p>
		 			No campo da tecnologia, há ainda que avançar. Há poucos locais com conectividade por Wi-FI pelas ruas da cidade, exceto em estabelecimentos comerciais, assim como espaços para o carregamento de equipamentos eletrônicos; as operadoras de celular dificultam o registro dos chips por estrangeiros; e há dificuldade na compra de ingressos online para os atrativos e programação cultural, inclusive pela indisponibilidade de outro idioma.
		 		</p>
		 		<p>
		 			As questões sociais estão sempre em foco em uma cidade como São Paulo. O espaço público, que também serve de ocupação para moradores de rua, na visão dos participantes dos workshops, deixa de ser parte da paisagem turística para ser visto como espaço degradado. Essa população necessita de intenso trabalho da assistência social. A região central, cheia de vida em horário comercial, sofre com o esvaziamento à noite e aos fins de semana, uma vez que boa parte dos edifícios não está ocupada por moradias, mas por escritórios e comércio; é preciso repensar as questões de uso do espaço, revitalizando-o, requalificando-o, sempre com cuidado e atenção para a população. 
		 		</p>

		 		<p>
		 			Ao mesmo tempo em que se repensa nas questões do espaço, é preciso integrá-lo às questões turísticas, qualificando e capacitando quem lida com o visitante, seja para o bem atender, seja no atendimento à pessoa com deficiência, seja na capacitação em outros idiomas, dos quais o inglês se faz necessário e imprescindível quando se pensa numa cidade receptiva ao turista. 
		 		</p>

		 		<figure title="Institucionais" class="coluna">
		 			<img :src="fileSrc('img5_institucionais.jpg')" alt="Institucionais" style="height: auto; width: 100%;">
		 			<figcaption>Figura 5. Institucionais</figcaption>
		 		</figure>

		 		<p>
		 			No campo institucional, talvez o principal problema seja a falta de compreensão sobre a importância do turismo para a cidade. Como atividade que permeia vários setores, é fundamental a comunicação, planejamento e ações integradas entre as diversas pastas do setor e o mercado, assim como políticas públicas de curto, médio e longo prazos, que transcendam gestões em favor do desenvolvimento duradouro, e que contribuam não só para a atividade, como para a vinda do turista que consome a cidade de forma sustentável e vive a localidade como o morador. A falta de entendimento de São Paulo como cidade turística também afeta os agentes públicos no trato com o visitante, e questões burocráticas e administrativas dificultam e atrasam o desenvolvimento da atividade turística e a integração necessária. E quando falamos na questão institucional é preciso levar em consideração a governança como um todo, incluindo o papel do mercado, da sociedade civil e do governo. 
		 		</p>
		 		<p>
		 			Um destino turístico desenvolvido utiliza-se de indicadores atualizados e confiáveis para o planejamento da área. Embora a São Paulo Turismo possua um Observatório do Turismo de reconhecimento internacional, faltam muitos dados e indicadores para uma análise completa das questões que afetam o setor. É preciso ampliar e aprofundar as pesquisas na área, buscar inventariar de forma mais consistente as atividades correlatas e elaborar mecanismos que sistematizem e viabilizem as medições necessárias ao planejamento turístico municipal.
		 		</p>

		 		<figure title="Setoriais" class="coluna">
		 			<img :src="fileSrc('img6_setoriais.jpg')" alt="Setoriais" style="height: auto; width: 100%;">
		 			<figcaption>Figura 6. Setoriais</figcaption>
		 		</figure>

		 		<p>
		 			Há por fim os desafios setoriais, separados aqui em dois grandes ramos: turismo e eventos. Os dois possuem características similares e complementares, e necessitam de atenção a questões específicas.
		 		</p>
		 		<p>
		 			Para o setor de eventos, se comparado com outros destinos de destaque internacionais, nota-se uma carência de espaços para a realização de grandes eventos. O mercado ainda sofre com a burocracia e alto custo para a realização nos vários setores; há falta de incentivo para a captação de novos eventos e a lei Cidade Limpa por vezes pode dificultar a divulgação dos eventos culturais e feiras. Há falta de uma inteligência para o calendário da cidade, por vezes ocasionando a sobreposição de grandes eventos, que poderiam ser trabalhados em conjunto e não de forma concorrente.
		 		</p>
		 		<p>
		 			Para o turismo propriamente dito, além do já citado, algumas questões pontuais devem ser consideradas. Algumas requerem um pensamento e trabalho em conjunto, outras de esforços individualizados, não sem antes alguma discussão sobre sua legitimidade.
		 		</p>
		 		<p>
		 			O território indígena da cidade poderia ser forte atrativo, mas há pouca estruturação para isso; faltam projetos de interpretação ambiental que permitam ao visitante sua conexão com o ambiente, bem como produtos criativos oferecidos por receptivos locais que permitam ao visitante novas experimentações da cidade. 
		 		</p>
		 		<p>
		 			De um modo geral, pouco se usa da tecnologia da informação em benefício do setor, assim como há poucas centrais de informação turísticas pela cidade, e as que existem não se utilizam de ferramentas tecnológicas para a divulgação da oferta disponível ou que facilitem a vida do visitante. O setor não sabe trabalhar com a sazonalidade e inflaciona os produtos e serviços em função da demanda, provando uma certa imaturidade e pouca integração para as questões turísticas. 
		 		</p>
		 		<p>
		 			Alguns eventos, como a Virada Cultural, não são preparados nem divulgados como um produto turístico, ainda que receba visitantes de fora da cidade. Os valores para o uso do solo na cidade não diferem conforme a região, dificultando a descentralização das ações. O turismo acontece de forma centralizada e, apesar de existirem atrações nas regiões periféricas, estas são mal divulgadas. O Polo de Ecoturismo, apesar de ser contemplado com um plano de desenvolvimento exclusivo (Plano de Desenvolvimento do Turismo Sustentável do Polo de Ecoturismo de São Paulo/201711), precisa ser de fato implementado. 
		 		</p>
		 		<p>
		 			Apesar da obrigatoriedade do cadastramento de alguns estabelecimentos turísticos e profissionais da área no Cadastur, o que se vê ainda é uma falta de comprometimento nesse sentido, haja vista que poucos empreendimentos/profissionais estão cadastrados. Embora o Carnaval de rua esteja crescendo cada vez mais na cidade, é preciso repensá-lo de forma a não prejudicar os estabelecimentos comerciais nos dias desses eventos. 
		 		</p>
		 		<p>
		 			É preciso também um planejamento melhor de ações pontuais que favoreçam algumas classes em detrimento de outras. A recente alteração no acesso dos transportes por aplicativo ao Aeroporto de Congonhas, por exemplo, parece ter prejudicado a operação, ao invés de ajudado.
		 		</p>
		 		<p>
		 			São Paulo é um dos principais destinos turísticos do país, mas não se divulga como tal: a comunicação e informação em outros idiomas são ineficientes, faltam campanhas para a divulgação do destino, sejam nacionais ou internacionais e falta participação nas principais feiras e eventos turísticos, principalmente no exterior.
		 		</p>
		 		<p>
		 			Talvez por sua característica multifacetada, haja dificuldade em se estabelecer uma marca forte que identifique a cidade. A diversidade marcante de São Paulo é difícil de ser traduzida visualmente em um símbolo, necessário para o reconhecimento imediato de uma São Paulo turística. E embora o município possua centenas de atrativos e milhares de serviços turísticos, percebe-se uma falta de divulgação eficiente destes e de integração entre os sistemas que compõem o turismo, de forma a facilitar o consumo da cidade. O próprio morador desconhece o que São Paulo tem de melhor, uma vez que há pouca circulação da população fora de seu entorno habitual. Além de divulgar os atrativos e serviços ao visitante, é preciso fazer com que o residente conheça a cidade em que vive, a reconheça como sua, como seu patrimônio, pois o maior multiplicador da informação será o próprio morador.
		 		</p>
		 		
		 	</CommentsContext>
		</section>
		<section>
		 	<h3 class="titulo" indent="1">CAPÍTULO 3. Propostas</h3>
		 	<CommentsContext :id="id" :context="'ITEM item.subitem'">
		 		<p>
		 			A análise dos desafios permitiu, de forma bastante resumida, desenhar o cenário atual que queremos mudar. Partindo dele e considerando as propostas sugeridas no processo de elaboração do plano, foram estabelecidos macroprogramas, que são, em síntese, o agrupamento das propostas com objetivos primários comuns, que quando realizadas, tendem a modificar essa realidade. Assim, as diversas propostas recebidas dos workshops e encontros com instituições de ensino viraram, após análise prévia de nossa equipe, 136 propostas sistematizadas nesta Consulta Pública, subdivididas nos macroprogramas abaixo:
		 		</p>

		 		<figure title="Macroprogramas e número de propostas em cada um" class="coluna">
		 			<img :src="fileSrc('img7_macroprogramagas.jpg')" alt="Macroprogramas e número de propostas em cada um" style="height: auto; width: 100%;">
		 			<figcaption>Figura 4. Macroprogramas e número de propostas em cada um.</figcaption>
		 		</figure>

		 	</CommentsContext>
		</section>

		<section>
		 	<h3 class="titulo" indent="2">3.1. Macroprograma 1 - Articulação e Fortalecimento Institucional</h3>
		 	<CommentsContext :id="id" :context="'ITEM item.subitem'">
		 		<p>
		 			Conforme explicação contida na apresentação desta consulta, a Política Pública de Turismo na cidade de São Paulo é de atribuição da Secretaria Municipal de Turismo – SMTUR, que possui, dentre as suas funções, o papel de formular e executar a política, a promoção e a exploração do turismo e atividades afins no município. Subordinada à SMTUR encontra-se a São Paulo Turismo – SPTuris, empresa oficial de turismo e eventos do município, que executa as diversas ações públicas do turismo da cidade demandadas pela Secretaria. 
		 		</p>
		 		<p>
		 			Dentre estas ações, as relacionadas à promoção e estruturação do turismo podem ser custeadas por meio do Fundo Municipal do Turismo – FUTUR, que visa captar recursos para aplicação na estruturação do Plano de Turismo Municipal – PLATUM. O FUTUR possui dotação orçamentária própria, além de ser gerido pelo Conselho Municipal de Turismo – COMTUR. O COMTUR, por sua vez, também é um órgão deliberativo, consultivo e de assessoramento do PLATUM, sendo responsável pela união de esforços entre o poder público e a sociedade civil, que possui a função de estabelecer diretrizes, desenvolver programas e soluções, para os obstáculos do desenvolvimento do turismo na cidade.
		 		</p>
		 		<p>
		 			A SMTUR, a partir de sua criação, em agosto de 2018, deu início a um plano de ações para suprir a falta de política pública de turismo na capital paulista. Projetos estratégicos como a valorização do centro histórico, a criação de uma marca da cidade, e a operação de city tours guiados para o fortalecimento e consolidação do turismo, são exemplos da atuação positiva da Secretaria. Todavia, os esforços realizados pela SMTUR, dependem de uma articulação com demais secretarias e órgãos públicos, para que os impactos positivos sejam permanentes e possam se expandir para toda a cidade com sucesso. Da mesma forma, é necessário criar uma sinergia com a iniciativa privada e trade turístico, assumindo um papel importante de elo com o mercado, para apoio e viabilização de seus projetos.
		 		</p>
		 		<p>
		 			As políticas públicas voltadas para o turismo devem ser pensadas também para a população da cidade, não restringindo apenas aos turistas.  Como política pública, o turismo deve garantir que o beneficiário final das ações seja sempre a população, ainda que ela não seja necessariamente o público-alvo, que pode ser o turista internacional e nacional, por exemplo. A inserção da população no contexto turístico traz diversos benefícios, como a valorização, respeito e preservação do patrimônio e herança cultural, fortalecimento da identidade local, incremento da renda e melhorias na infraestrutura do destino turístico.
		 		</p>
		 		<br>
		 		<p>
		 			<b>Objetivos do Macroprograma:</b>
		 			<ul>
		 				<li>
		 					Fortalecer a institucionalização da Secretaria Municipal de Turismo da cidade de São Paulo, dentro e fora da Administração Pública, com dotações orçamentárias robustas para implementar as ações contidas no Plano de Turismo Municipal (2019-2021);
		 				</li>
		 				<li>
		 					Promover ações sempre coordenadas e articuladas entre os diferentes órgãos governamentais para que as ações da Política de Turismo estejam contidas no planejamento dos demais órgãos e secretarias envolvidos na Política;
		 				</li>
		 				<li>
		 					Fortalecer a atuação do Conselho Municipal de Turismo – COMTUR para ampliar a participação da sociedade civil organizada e mercado nas decisões estratégicas do turismo da cidade;
		 				</li>
		 				<li>
		 					Promover a revisão ou edição de novas regulamentações correlatas à Política de Turismo que impulsionem os diversos setores da política na cidade de São Paulo;
		 				</li>
		 				<li>
		 					Buscar parcerias público privadas e ampliar a sinergia entre os diversos setores envolvidos no turismo da cidade.
		 				</li>
		 			</ul>
		 		</p>
		 		<p>
		 			<b>Ações/ Projetos:</b><br>
		 			<u>EIXO: Gestão interna/Governo</u><br>
		 			<ol>
		 				<li>
		 					Manter a participação da SMTUR em conselhos de turismo e áreas correlatas, por exemplo o Conselho Municipal de Desenvolvimento Rural Sustentável e Solidário - CMDRSS, a Comissão de Acompanhamento da Regulamentação do Fretamento - CAREF, o Conselho Estadual de Turismo - CONTURESP, bem como prospectar a participação em conselhos importantes, mas que não consideram a atividade, como os Conselhos de Segurança - CONSEGs.
		 				</li>
		 				<li>
		 					Divulgar os projetos da SMTUR por meio do site institucional, redes sociais e <i>newsletter</i>.
		 				</li>
		 				<li>
		 					Realizar ações de sensibilização de funcionários e servidores públicos municipais para importância do turismo, tais como palestra, visitas técnicas, passeios de city tour e oficinas, prioritariamente de Transporte, Zeladoria, Segurança Pública, Acessibilidade, Desenvolvimento Econômico e Trabalho e outras áreas correlatas ao atendimento ao turista.
		 				</li>
		 				<li>
		 					Estabelecer uma agenda de reuniões e audiências com a Comissão de Turismo e Gastronomia da Câmara Municipal para debater as alterações e proposições legais contidas no Plano de Turismo Municipal – PLATUM.
		 				</li>
		 				<li>
		 					Produzir portfólio de projetos da Secretaria e submeter aos gabinetes parlamentares municipais e estaduais, prévio à aprovação da Lei Orçamentária Anual, para buscar oportunidades de emendas parlamentares.
		 				</li>
		 				<li>
		 					Criar uma agenda de ações técnicas conjuntas com a Secretaria de Estado do Turismo e o Ministério do Turismo.
		 				</li>
		 				<li>
		 					Realizar estudo para viabilizar novas fontes de receita para o Fundo Municipal de Turismo.
		 				</li><br>

		 				<u>EIXO: Parcerias</u><br><br>
		 				<li>
		 					Fortalecer o Conselho Municipal de Turismo - COMTUR e dar atribuições aos membros do Conselho através de reuniões periódicas, implantação de grupos de trabalho e divulgação do trabalho realizado por meio do sítio eletrônico e redes sociais da Secretaria Municipal de Turismo.
		 				</li>
		 				<li>
		 					Instituir comitês turísticos intersecretariais para criar ações de segurança, zeladoria de excelência, assistência social e acessibilidade zonas turísticas prioritárias, a serem definidas.
		 				</li>
		 				<li>
		 					Promover inclusão de conteúdo de turismo e hospitalidade nos cursos de formação da Guarda Civil Metropolitana – GCM.
		 				</li>
		 				<li>
		 					Elaborar, com a Secretaria Municipal de Educação, projeto para realização de ações como formação de professores e visitas técnicas de alunos, para cuidado e valorização da cidade.
		 				</li>
		 				<li>
		 					Estabelecer e viabilizar agenda de encontros semestrais com comitê de representante das instituições de ensino técnico e superior em turismo da cidade, para troca de informações e possibilidade de definição de ações conjuntas.
		 				</li><br>

		 				<u>EIXO: Regulamentação</u><br><br>
		 				<li>
		 					Mapear a regulamentação municipal existente que tenha impacto negativo na atividade turística e que precisa ser alterada ou revogada e dar o devido encaminhamento (portaria, projeto de lei, etc.), a exemplo da restrição de circulação de ônibus turístico na Avenida Paulista.
		 				</li>
		 				<li>
		 					Apresentar à Secretaria Municipal de Desenvolvimento Econômico e Trabalho – SMDET a necessidade de criação de incentivos para o turismo dentro do Plano de Desenvolvimento Econômico que está sendo elaborado para a cidade de São Paulo.
		 				</li>
		 				<li>
		 					Criar carreiras e cargos específicos para área de Turismo como estratégia de qualificar a atuação da Secretaria e fortalecer a institucionalização da Política Municipal de Turismo.
		 				</li><br>

		 				<u>EIXO: Relacionamento/Conexão</u><br><br>
		 				<li>
		 					Promover encontros setoriais com o mercado (guias, agências, estabelecimentos de hospedagem, atrativos, organizadores de eventos) com especialistas para <i>networking</i> e atualização sobre projetos e novidades que impactam o setor.
		 				</li>
		 				<li>
		 					Realizar uma campanha voltada para moradores da cidade, a exemplo do desconto no <i>city</i> tour oficial, gratuidade em museus, etc, para que conheçam os atrativos, valorizem a cidade e a entendam como um local turístico
		 				</li>
		 				<li>
		 					Criar o Programa “VAI TUR”, de incentivo a projetos de turismo para a cidade, a exemplo das experiências do “Vai” da Secretaria Municipal de Cultura, e “Vai Tec” da Secretaria Municipal de Desenvolvimento Econômico e Trabalho
		 				</li>
		 			</ol>
		 		</p>
		 	</CommentsContext>
		</section>

		<section>
		 	<h3 class="titulo" indent="2">3.2 Macroprograma 2 - Inteligência de Mercado no Turismo</h3>
		 	<CommentsContext :id="id" :context="'ITEM item.subitem'">
		 		<p>
		 			A evolução da tecnologia e as significativas transformações decorrentes mudaram a forma de como a coleta, monitoramento e análise dos dados são feitos. Hoje, destinos turísticos inteligentes utilizam-se de sistemas de inteligência de mercado, tanto para captação de informações da demanda turística, quanto para análise e melhor aproveitamento da oferta.
		 		</p>
		 		<p>
		 			Segundo o Documento Referencial da Rede de Inteligência de Mercado no Turismo – RIMT, elaborado pelo Ministério do Turismo, a “inteligência de mercado pode ser definida como a capacidade de cruzar dados e transformá-los em informação e conhecimento. Em outras palavras, é organizar dados que estão difusos e transformá-los em informação e conhecimento úteis para o gestor, fornecendo uma visão consistente para a tomada de decisões” (BRASIL, Ministério do Turismo. RIMT – Rede de Inteligência de Mercado no Turismo - Documento Referencial, 2018, p.2). Neste cenário, entidades como a Organização Mundial do Turismo – OMT, vinculada à Organização das Nações Unidas, e o Ministério do Turismo, contribuem em âmbito global e nacional, respectivamente, com estudos e conhecimento do mercado, além do desenvolvimento de políticas de apoio ao turismo.  
		 		</p>
		 		<p>
		 			Na esfera local, o Observatório de Turismo e Eventos da Cidade de São Paulo desenvolve diversas pesquisas, como análise de perfil de público de grandes eventos, desempenho hoteleiro, movimento nos terminais rodoviários, entre outras. Contudo, apesar da grande importância e relevância dos estudos elaborados, ainda é perceptível a carência de dados analíticos com foco no turismo na cidade.  Há a necessidade de elaboração de programas eficientes para captação de dados sobre a atividade turística, de forma a acompanhar o desenvolvimento do mercado, analisar a oferta e as oportunidades ou necessidades de aprimoramento em setores específicos, identificar o perfil do visitante, para aperfeiçoar a experiência na cidade e incentivar a permanência, retorno e/ou interesse no destino, além de reforçar a importância da atividade, proporcionando debate de políticas públicas, bem como projetos privados de incentivo ao turismo.
		 		</p>
		 		<p>
		 			O uso de novas tecnologias para sistematização e captação de informações também se faz necessário. Os sites de alguns dos principais destinos internacionais são exemplos de modelos a serem adotados pois, além de promoverem as cidades, permitem a compra de passeios, reserva de hotéis e serviços, que podem se tornar dados estatísticos para análises do comportamento do turista. A parceria com provedores de ferramentas de geolocalização, para obtenção de informações de deslocamento dos visitantes, também é uma alternativa de fonte de informação relevante à tomada de decisões estratégicas. 
		 		</p>
		 		<p>
		 			A criação e manutenção de um sistema de gerenciamento do banco de dados da cidade também é de extrema importância. A análise deste tipo de informação permite identificar as regiões de concentração turística no município, a fim de desenvolver as áreas principais e incentivar o turismo em locais de menor visibilidade.
		 		</p>
		 		<p>
		 			Cabe a análise e discussão dos órgãos e estudos já desenvolvidos atualmente, para identificar os principais problemas e qualidades de cada um e promover a capacitação das equipes, melhorar o desempenho e sistematizar a obtenção e manutenção de informações, bem como criar novos indicadores que sejam relevantes para analisar o mercado de turismo da cidade.
		 		</p>
		 		<p>
		 			<b>Objetivos do Macroprograma:</b>
		 			<ul>
		 				<li>
		 				Reestruturar o Observatório do Turismo, compatibilizando suas atividades com as dos melhores Observatórios do mundo;
		 				</li>
		 				<li>
		 					Expandir os indicadores acompanhados e disponibilizá-los de uma forma mais rápida para o mercado;  
		 				</li>
		 				<li>
		 					Incrementar as bases de dados de turismo e integrá-la com outras bases.
		 				</li>
		 			</ul>
		 		</p>
		 		<p>
		 			<b>Ações/ Projetos:</b><br>
		 			<ol>
		 				<li>
		 					Ampliar os indicadores monitorados pelo Observatório do Turismo, incluindo dados do setor de eventos e atrativos.
		 				</li>
		 				<li>
		 					Implantar sistema de inteligência e gerenciamento de dados para análise dos dados de oferta, demanda e outros indicadores de São Paulo.
		 				</li>
		 				<li>
		 					Realizar nova pesquisa de perfil da demanda turística de São Paulo.
		 				</li>
		 				<li>
		 					Realizar nova projeção de turistas, com horizonte 2020-2030.
		 				</li>
		 				<li>
		 					Realizar pesquisa de contagem de turistas.
		 				</li>
		 				<li>
		 					Buscar novos dados por meio de parcerias com empresas de tecnologia/turismo, como Google e TripAdvisor.
		 				</li>
		 				<li>
		 					Realizar eventos, no formato <i>hackaton</i>, para estimular que startups e empresas de tecnologias desenvolvam soluções para questões do turismo.
		 				</li>
		 				<li>
		 					Realizar pesquisa de oferta/demanda dos segmentos: compras, educação, saúde, gastronomia, religioso e vida noturna.
		 				</li>
		 				<li>
		 					Realizar pesquisa de perfil de demanda nos eventos que fazem parte do Calendário Oficial de Eventos da Cidade - Lei Municipal 14.485/07.
		 				</li>
		 			</ol>
		 		</p>
		 	</CommentsContext>
		</section>

		<section>
		 	<h3 class="titulo" indent="2">3.3. Macrorograma 3 – Calendário de Eventos Inteligente</h3>
		 	<CommentsContext :id="id" :context="'ITEM item.subitem'">
		 		<p>
		 			São Paulo é uma referência na realização de eventos. Em 2018, por exemplo, mais de 2 mil foram cadastrados no calendário do Visite São Paulo - entidade sem fins lucrativos, que busca ampliar o volume de negócios e o mercado de consumo na cidade, por meio da atividade turística, apoiando a melhoria dos serviços e atendimento aos visitantes.
		 		</p>
		 		<p>
		 			A cidade é um destino reconhecido no segmento de eventos técnicos e científicos. Só em 2018, mais de 300 congressos e convenções foram realizadas, segundo o Visite São Paulo. É igualmente – ou talvez mais reconhecida – quando se trata de eventos de negócios. Em uma análise do calendário de Feiras de 2019 da União Brasileira de Feiras – UBRAFE, observa-se que 54% de todas as feiras realizadas no país acontecem em São Paulo. Excluindo as feiras do agronegócio, esse percentual sobe para 85.De acordo com o ranking da International Congress and Convention Association – ICCA, entidade internacional que administra o principal banco de dados de eventos, em 2018 a capital paulista foi o primeiro lugar no Brasil e terceiro na América Latina em número de eventos (associativos, internacionais e itinerantes) realizados e, na listagem global, ganhou 3 posições se comparada a 2017. Segundo pesquisa realizada pela UBRAFE, em 2013, o mercado de eventos de negócios gera um impacto econômico de R$16,3 bilhões por ano.
		 		</p>
		 		<p>
		 			São Paulo também atrai a atenção dos produtores de eventos de lazer e espetáculos. Em 2018, por exemplo, importantes nomes da música marcaram presença nos palcos da capital paulista. Roger Waters, Shakira, Noel Gallagher, Thirty Seconds to Mars, Camila Cabello, Phil Collins, Radiohead e Ozzy Osbourne são alguns exemplos de artistas e bandas que se apresentaram na cidade.
		 		</p>
		 		<p>
		 			Eventos novos, voltados ao mercado do entretenimento e cultura pop também ganharam destaque no calendário, pois aproveitam um nicho em crescimento e acompanham as tendências. Um exemplo é a Comic Con Experience - CCXP, que reúne artistas, criadores de conteúdo e fãs do universo Geek e apresentou grande crescimento desde a primeira edição, realizada em 2014. Em 2018, por exemplo, o público foi 15,42% maior, se comparado à edição anterior, atingindo a marca de aproximadamente 262 mil visitantes, dos quais 50% eram pessoas de fora do estado de São Paulo, segundo os organizadores, colocando-o como o maior festival Geek do mundo em número de participantes. 
		 		</p>
		 		<p>
		 			Eventos já tradicionais da cidade, como a Parada do Orgulho LGBT, que teve a 23ª edição em 2019, são de grande importância, atraindo cerca de 3 milhões de pessoas nas últimas edições. O carnaval de rua também demonstra uma grande força e crescimento de público na capital paulista. Em 2019, por exemplo, 14 milhões de pessoas aproveitaram a folia dos blocos, segundo a Secretaria Municipal de Turismo. Dados do Observatório do Turismo apontam que 30% desse contingente era de fora da cidade. 
		 		</p>
		 		<p>
		 			São Paulo se destaca, também, pelos eventos esportivos, como as corridas de rua, o automobilismo, e também pela qualidade e modernidade de seus estádios, como o Allianz Parque, a Arena Corinthians e o Morumbi, que sediaram importantes eventos como a Copa do Mundo FIFA 2014, as Olimpíadas de 2016 e, em 2019, partidas da Copa América. O Allianz Parque, além da essência esportiva, é a principal arena para shows internacionais da cidade. Só em 2017, por exemplo, o local recebeu 17 megashows, mais do que qualquer outro estádio no mundo, segundo lista elaborada pela agência internacional Pollstar.
		 		</p>
		 		<p>
		 			Apesar de toda a oferta, o setor de eventos possui uma série de entraves que dificultam, burocratizam, ou inviabilizam sua realização e que precisam ser trabalhados para que a cidade seja mais competitiva e não perca eventos para destinos concorrentes e se consolide como destino referência para qualquer tipo de evento. 
		 		</p>
		 		<br>
		 		<p>
		 			<b>Objetivos do Macroprograma:</b><br>
		 			<ul>
		 				<li>
		 				Coletar, sistematizar e divulgar informações dos eventos que acontecem na Cidade de São Paulo;
		 				</li>
		 				<li>
		 				Definir e implantar política pública de apoio à realização e captação de eventos;
		 				</li>
		 				<li>
		 				Desburocratizar os processos necessários à realização de eventos públicos e privados de distintos portes;
		 				</li>
		 				<li>
		 				Coletar dados e produzir indicadores para acompanhamento do mercado de eventos e perfil de demanda turística para este mercado na cidade de São Paulo.
		 				</li>
		 			</ul>
		 		</p>
		 		<p>
		 			<b>Ações/ Projetos:</b><br>
		 			<ol>
		 				<li>
		 					Realizar, coordenar e/ou dar suporte aos eventos públicos municipais.
		 				</li>
		 				<li>
		 					Captar eventos para a cidade que garantam fluxo de turistas ou promovam a imagem de São Paulo.
		 				</li>
		 				<li>
		 					Estabelecer um calendário de eventos unificado da cidade.
		 				</li>
		 				<li>
		 					Desenvolver ferramenta colaborativa que concentre as informações dos eventos de relevância turística, ou potencial turístico, facilitando a divulgação e a análise do calendário da cidade.
		 				</li>
		 				<li>
		 					Restabelecer a Comissão para Avaliação dos Eventos, para revisar o calendário de eventos Oficial da cidade de São Paulo - Lei Municipal 14.485/07.
		 				</li>
		 				<li>
		 					Para os eventos que compõem o calendário oficial da cidade de São Paulo - Lei 14.485/07, criar norma que estabeleça a necessidade de: diálogo com os estabelecimentos turísticos e correlatos no processo de planejamento, quando esses estão localizados em área impactada pelo evento; realização de pesquisa de perfil de público e compartilhamento dos dados abertos com o Observatório do Turismo; nomeação e divulgação de responsáveis pelo evento em cada um dos órgãos envolvidos; realização de avaliação pós-evento, com todos os órgãos e instituições participantes e apoiadores; e elaboração de relatório de lições aprendidas a ser compartilhado com todos os interessados.
		 				</li>
		 				<li>
		 					Definir regulamento que estabeleça critérios para que seja oferecido apoio a eventos (institucional, fomento e estrutura).
		 				</li>
		 				<li>
		 					Formular Guia Municipal de Realização de Eventos, com todas as normas e informações de procedimento de diversos órgãos para obtenção de todas as licenças e autorizações para realização de eventos na cidade.
		 				</li>
		 				<li>
		 					Implantar comitê intersecretarial para alinhar fluxo de trabalho e comunicação, facilitando a realização de grandes eventos públicos e privados.
		 				</li>
		 				<li>
		 					Criar estrutura ou ferramenta que facilite a obtenção das autorizações públicas para realização de eventos.
		 				</li>
		 				<li>
		 					Simplificar forma de obtenção de alvará para eventos de pequeno porte.
		 				</li>
		 				<li>
		 					Realizar estudo junto ao mercado do turismo que aponte necessidade de adequações da Lei Cidade Limpa de forma a viabilizar eventos e projetos de turismo, tais como utilizar o mobiliário urbano como veículo para transmitir informação para o turista, sem danos aos benefícios que a Lei trouxe para São Paulo.
		 				</li>
		 				<li>
		 					Estabelecer parcerias com organizadores de eventos para disponibilizar espaço para Central de Informação Turística móvel nos principais eventos da cidade.
		 				</li>
		 				<li>
		 					Estabelecer parcerias com organizadores de eventos para realização de pesquisa de perfil de público e avaliação da cidade nos eventos.
		 				</li>
		 				<li>
		 					Implantar comitê para integração das ações para as comemorações do bicentenário da independência.
		 				</li>
		 				<li>
		 					Implantar comitê para integração das ações para as comemorações do centenário da Semana de Arte Moderna de 1922.
		 				</li>
		 				<li>
		 					Implantar comitê para integração das ações de comemoração da Semana Municipal da Gastronomia.
		 				</li>
		 			</ol>
		 		</p>
		 	</CommentsContext>
		</section>

		<section>
		 	<h3 class="titulo" indent="2">3.4. Macroprograma 4 – Formatação de Produtos</h3>
		 	<CommentsContext :id="id" :context="'ITEM item.subitem'">
		 		<p>
		 			São Paulo é a maior metrópole brasileira e a quinta maior do mundo. São 12,18 milhões de habitantes em uma área de 1.521 km². A diversidade cultural, fruto dos processos migratórios que compuseram São Paulo, conferem à cidade características únicas, que despertam o interesse no turista. A concentração de certos povos em determinadas áreas transforma bairros em regiões turísticas, uma vez que oferece gastronomia, produtos, serviços e até mesmo arquitetura diferenciada. A Liberdade, o Bixiga e o Bom Retiro são bons exemplos. 
		 		</p>
		 		<p>
		 			A oferta turística na capital é superlativa. A cidade dispõe de centenas de parques, museus, teatros e outros atrativos para atender e agradar a todos os tipos de turistas. Diante dessas características, São Paulo é uma das poucas cidades do mundo que se destaca em quase todos os segmentos turísticos, podendo ser explorados: o turismo de negócios, principalmente nas regiões da Paulista, Faria Lima e Berrini; saúde, próximo aos principais hospitais referência e de especialidades da cidade; aventura, nos Polos de Ecoturismos; cultura, principalmente na região Central, mas com museus e centros culturais por toda cidade; lazer, em todas as regiões com ofertas diversas de parques e áreas verdes, teatros, cinemas, shows, etc; gastronomia. 
		 		</p>
		 		<p>
		 			Em algumas regiões, a concentração da oferta de serviços para determinado público cria nichos, como é o caso do turismo LGBT+, que encontra na região do Arouche e da Frei Caneca diversas opções de entretenimento.
		 		</p>
		 		<p>
		 			Com tantos atrativos e serviços por toda capital, era de se esperar que a oferta de produtos também abrangesse toda cidade, mas curiosamente não é isso que se vê. Há regiões reconhecidamente turísticas e produtos consolidados que são oferecidos por praticamente todas as agências de turismo receptivo, como <i>city tours</i> que passam pelo Centro, Avenida Paulista, Jardins, Liberdade e Parque do Ibirapuera, e podem ser encontrados na prateleira de qualquer agência, com raras exceções. Também existem os Tours de compras, artes, futebol e específico para Fórmula 1, facilmente regionalizáveis.
		 		</p>
		 		<p>
		 			Mas além dos produtos e regiões tradicionais, a cidade tem potencial para receber turistas em todos os cantos e formatar produtos mais criativos, que extrapolem os eixos do conhecimento e do senso comum. Uma tendência que se apresenta cada vez mais forte é o turismo de experiência. 
		 		</p>
		 		<p>
		 			O turismo de experiência atrela a passagem do turista na cidade, antes meramente visual, a vivências tipicamente locais ou relacionada a hábitos e costumes do morador, que podem ser desde práticas gastronômicas até o aprendizado de alguma atividade, transformando o turista de espectador a ator, aprimorando a experiência no local.
		 		</p>
		 		<p>
		 			Iniciativas como esta auxiliam na permanência do turista na cidade por mais tempo, ampliando o consumo e estimulando a integração com a cultura local e o respeito mútuo entre morador e visitante, e que devem ser incorporadas nos produtos turísticos da cidade.
		 		</p>
		 		<p>
		 			Dentro da grande variedade de opções de produtos que a cidade pode oferecer, dois merecem destaque para desenvolvimento prioritário considerando sua importância para a imagem da cidade e sua relação com a história, caso do Centro Histórico – Triangulo SP;  ou na geração de emprego e renda em um regiões pouco conhecidas, nos extremos da cidade, com potencial para produtos diferenciados, como esportes de aventura, visita a terra indígena e propriedades rurais – que é o caso dos Polos de Ecoturismo de Parelheiros – Marsilac e Ilha do Bororé ; e da  Cantareira. 
		 		</p>
		 		<p>
		 			<i><u>Triângulo SP</u></i><br>
		 			O projeto de turismo “Triângulo SP”, desenvolvido pela Secretaria Municipal de Turismo e que contempla a área de calçadões entre as ruas Líbero Badaró, Boa Vista e Benjamin Constant,  visa aumentar o fluxo de visitantes na região central da cidade, transformando o Centro Histórico em um verdadeiro destino turístico que atrai tanto turistas nacionais e internacionais, quanto os próprios moradores da capital, valorizando e preservando assim esse importante patrimônio histórico e cultural da cidade. A iniciativa prevê melhorias na infraestrutura da região, aumento da segurança e abertura de novos atrativos, entre outras. Dentre os objetivos específicos do projeto, está a intenção de transformar o Centro Histórico em um verdadeiro museu a céu aberto, com passeios culturais, de maneira a possibilitar às pessoas a desfrutarem da história da cidade de São Paulo, além de ativar a região no período noturno e também aos fins de semana.
		 		</p>
		 		<p>
		 			<i><u>Polo de Ecoturismo de São Paulo</u></i><br>
		 			No extremo sul da cidade de São Paulo está localizado o Polo de Ecoturismo, instituído pela Lei 15.953, de 2014, formado pelos distritos de Parelheiros e Marsillac e pela Ilha de Bororé. A área abrange o território das subprefeituras de Parelheiros e Capela do Socorro, incluindo também uma parte do Parque Estadual da Serra do Mar (patrimônio natural brasileiro), além de duas Áreas de Proteção Ambiental – APAS, denominadas Bororé-Colônia e Capivari-Monos, que juntas ocupam 25% do território municipal. A região é repleta de área verde, atrativos turísticos, cachoeiras, parques, aldeias indígenas, centros ecumênicos, mirantes e um borboletário. Em 2017 foi elaborado o Plano de Desenvolvimento do Turismo Sustentável do Polo, considerando as especificidades da região. Para o PLATUM 2019-2021, a proposta é reforçar a importância de implementar o plano e destacar ações prioritárias. 
		 		</p>
		 		<p>
		 			A capital paulista conta também com o Polo de Ecoturismo da Cantareira, na região norte da cidade e que foi criado pela Lei nº 16.832 de 2018. A região, que ainda precisa ser estruturada como projeto e produto turístico, contempla as áreas de mata atlântica nativa e ultrapassam os limites do Parque Estadual da Cantareira e do Parque Estadual Alberto Löfgren, em suas porções pertencentes ao Município de São Paulo. As subprefeituras de Jaçanã/Tremembé, Casa Verde/Cachoeirinha, Santana/Tucuruvi, Freguesia do Ó/Brasilândia, Pirituba/Jaraguá e Perus integram o Polo de Ecoturismo da Cantareira.
		 		</p>
		 		<p>
		 			<b>Objetivos do Macroprograma:</b>
		 			<ul>
		 				<li>
		 					Incrementar a oferta de produtos turísticos da cidade, em especial, os de lazer;
		 				</li>
		 				<li>
		 					Incentivar o consumo da oferta existente;
		 				</li>
		 				<li>
		 					Fazer do Triângulo SP um produto turístico de excelência, indutor do turismo na cidade;
		 				</li>
		 				<li>
		 					Fomentar o turismo nos Polos de Ecoturismo – Parelheiros, Marsilac e Ilha do Bororé, e da Cantareira.
		 				</li>
		 			</ul>
		 		</p>
		 		<p>
		 			<b>Ações/ Projetos:</b><br>
		 			<ol>
		 				<li>
		 					Implementar o serviço de <i>City Tour</i> Oficial no modelo <i>hop on/ hop off</i>, em substituição à Linha Circular Turismo.
		 				</li>
		 				<li>
		 					Incentivar a criação de serviços de city tours com operação regular.
		 				</li>
		 				<li>
		 					Divulgar e apoiar walking tours, bikes tours e similares existentes na cidade, em sites, redes sociais, marketplace, Centrais de Informações Turísticas, e etc.
		 				</li>
		 				<li>
		 					Trabalhar corridas de rua como produto turístico e estimular os corredores turistas a permanecerem mais tempo na cidade e trazerem a família, por meio de campanhas com os organizadores das corridas.
		 				</li>
		 				<li>
		 					Prospectar empresas para implantação de cartão com descontos e benefícios na cidade.
		 				</li>
		 				<li>
		 					Criar circuito de compras populares - Brás, Bom Retiro, 25 de Março - por meio de ações como divulgação e elaboração de mapas.
		 				</li>
		 				<li>
		 					Divulgar a oferta de atrativos e experiências fora do eixo central e incentivar a criação de produtos por meio de visitas técnicas e vivências em tais ofertas.
		 				</li>
		 				<li>
		 					Estimular a divulgação cruzada entre atrativos que estejam próximos de forma que os atrativos indutores do turismo promovam os atrativos do entorno, com menor potencial de atratividade.
		 				</li>
		 				<li>
		 					Realizar estudo que permita mapear o turismo de São Paulo posicionando os segmentos nas regiões onde ocorrem com mais intensidade.
		 				</li>
		 				<br>
		 				<u>EIXO: Triângulo SP</u>
		 				<li>
		 					Requalificar as calçadas obedecendo aos critérios de acessibilidade.
		 				</li>
		 				<li>
		 					Requalificar a iluminação pública e implantar iluminação cênica.
		 				</li>
		 				<li>
		 					Implantar mobiliário urbano para que munícipes e turistas possam contemplar o território.
		 				</li>
		 				<li>
		 					Implantar e manter sinalização turística com layout de acordo com a vocação do território.
		 				</li>
		 				<li>
		 					Implantar e manter patrulhamento ostensivo 24h da Guarda Civil.
		 				</li>
		 				<li>
		 					Implantar sistema de disponibilização de imagens em 140 pontos do triângulo (City Câmeras).
		 				</li>
		 				<li>
		 					Intensificar abordagens socioassistenciais para oferecer aos moradores de rua a possibilidade de serem acomodados nos abrigos, reservando pelo menos 250 vagas de acolhimento para essa região.
		 				</li>
		 				<li>
		 					Estender dos horários de atendimento dos núcleos de convivência para adultos em situação de rua.
		 				</li>
		 				<li>
		 					Transformar o Triângulo SP em Polo de Economia Criativa Sé/República e Território de Interesse da Cultura e da Paisagem dentro do eixo Paulista/Luz.
		 				</li>
		 				<li>
		 					Reorganizar e manter os fluxos de varrição e lavagem de vias e equipamentos da região.
		 				</li>
		 				<li>
		 					Reorganizar e manter os fluxos de coleta diária de resíduos divisíveis.
		 				</li>
		 				<li>
		 					Implantar um espaço institucional intitulado “Portal do Triângulo” focado em potencializar as ações e serviços turísticos contidos no Triângulo SP, com ações como as tipicamente oferecidas pelas Centrais de Informação Turística e ainda a recepção de grupos e profissionais que queiram oferecer roteiros no território.
		 				</li>
		 				<li>
		 					Manter o programa de visitação do Edifício Matarazzo e ampliar seu funcionamento incluindo os domingos.
		 				</li>
		 				<li>
		 					Conceder o Mirante do Edifício Martinelli para transformar em um produto turístico completo com serviços (como alimentação, souvenir, etc.) e atrações.
		 				</li>
		 				<li>
		 					Manter operações do projeto "Vem pro Triângulo", que tem como objetivo promover o acesso dos munícipes de todas as Subprefeituras de São Paulo aos produtos turísticos do Triângulo SP e adjacências.
		 				</li>
		 				<li>
		 					Elaborar e divulgar roteiros turísticos existentes pela região.
		 				</li>
		 				<li>
		 					Implantar feiras de artesanato ou temáticas em equipamentos diferenciados.
		 				</li>
		 				<li>
		 					Implantar pequenos palcos em áreas do triângulo com pontos de energia para parceria com artistas de rua.
		 				</li>
		 				<li>
		 					Viabilizar a realização de ao menos um evento mensal para atração de público. 
		 				</li>
		 				<li>
		 					Implementar mais operações do projeto “Vem Pro Triângulo” para promover o acesso dos munícipes de todas as Subprefeituras de São Paulo aos produtos turísticos do triângulo histórico e adjacências. 
		 				</li>
		 				<li>
		 					Implementar ações de comunicação com elaboração de site, folheto e identidade visual.
		 				</li>
		 				<li>
		 					Instituir um Grupo Intersecretarial de Governança do Território para formalizar a experiência bem-sucedida de coordenação de Políticas de Zeladoria, Segurança e Assistência para lidar com os desafios específicos do território.
		 				</li>
		 				<br>
		 				<u>EIXO: Polos de Ecoturismo de São Paulo</u>
		 				<li>
		 					Regulamentar a Lei 15.953/14, que cria o Polo de Ecoturismo de Parelheiros.
		 				</li>
		 				<li>
		 					Elaborar decreto ou outro instrumento jurídico para atribuir à SMTUR a Secretaria Executiva do Conselho Gestor do Polo de Ecoturismo de São Paulo – CONGETUR.
		 				</li>
		 				<li>
		 					Reativar o Grupo de Trabalho Intersecretarial do Polo de Ecoturismo de Parelheiros, criado pela Portaria GAB 174/14, com as atribuições inerentes à implantação do Plano.
		 				</li>
		 				<li>
		 					Realizar o 1º Fórum Regional de Turismo do Polo de Parelheiros para disseminação das propostas do Plano de Desenvolvimento do Turismo Sustentável do Polo de Ecoturismo de São Paulo visando à integração dos empresários locais.
		 				</li>
		 				<li>
		 					Reformular o site do Polo de Ecoturismo de Parelheiros e mantê-lo atualizado.
		 				</li>
		 				<li>
		 					Realizar <i>famtours</i> internos assessorados, com troca de experiência entre os empresários do Polo.
		 				</li>
		 				<li>
		 					Realizar encontros comerciais dos empreendimentos do Polo com o mercado do turismo (agencias e operadoras).
		 				</li>
		 				<li>
		 					Formular projeto para estimular a demanda para a região, por meio da criação e realização de roteiros com a população.
		 				</li>
		 				<li>
		 					Articular com a Secretaria Municipal de Transportes – SMT alternativas para minimizar o impacto do trânsito no acesso ao Polo de Parelheiros aos finais de semana.
		 				</li>
		 				<li>
		 					Realizar diagnóstico junto com a Secretaria Municipal de Desenvolvimento Econômico e Trabalho – SMDET, para futura elaboração do Plano de Desenvolvimento Turístico do Polo de Ecoturismo da Cantareira – Lei 16.832/18.
		 				</li>
		 			</ol>
		 		</p>
		 	</CommentsContext>
		</section>
		<section>
		 	<h3 class="titulo" indent="2">3.5. Macroprograma 5 – Aprimoramento na Experiência do Turista</h3>
		 	<CommentsContext :id="id" :context="'ITEM item.subitem'">
		 		<p>
		 			A jornada do turista é ampla e inicia bem antes da realização da viagem, na fase do planejamento e compra, na pesquisa de destinos, paisagens, atrativos e serviços, na decisão por este ou aquele, visando suprir suas necessidades (que dependem não só da oferta, mas também e, principalmente, de suas características e desejos); continua quando visita os atrativos, aproveita da programação cultural e usufrui de todos os serviços e da infraestrutura básica, de apoio ou turística que a localidade dispõe, esperando encontrar, no mínimo, aquilo que descobriu em suas pesquisas; e finaliza bem depois do término da viagem, quando divulga e compartilha tudo o que viveu. Assim, a experiência presente em toda a jornada do turista precisa ser de qualidade.
		 		</p>
		 		<p>
		 			Para que a experiência seja positiva, é preciso que o destino – e aqui entende-se por destino o poder público e iniciativa privada – esteja preparado. Independentemente da motivação do turista, há aspectos comuns que devem ser considerados: a receptividade; a hospitalidade; a disponibilidade de informação e capacidade de comunicação, em especial em relação aos idiomas; os atrativos; os serviços públicos tais como transporte e segurança; a zeladoria urbana; os serviços turísticos e a acessibilidade. Todos eles têm forte impacto na experiência, e, quando bem estruturados, posicionam a cidade como um destino turístico competitivo.
		 		</p>
		 		<p>
		 			No caso de São Paulo, sua dimensão, complexidade, diversidade e quantidade de produtos, atrativos e serviços, cultura multifacetada de seu povo, ou mesmo falta de uma plataforma única que integre o setor turístico, fazem com que o desafio de garantir a excelência na experiência seja muito maior. Para que os projetos e produtos da área funcionem individualmente, é preciso um pensamento transversal das ações e articulação entre todos os envolvidos, uma vez que o turismo permeia praticamente todos os setores.
		 		</p>
		 		<p>
		 			Ainda assim, a cidade oferece inúmeras possibilidades de experiências memoráveis, já estruturadas e outras em desenvolvimento. A programação cultural é extensa, de qualidade e muitas vezes a preços baixos ou acessíveis; no setor de hospedagem percebe-se a expansão da hotelaria de luxo. Há opções de roteiros inusitados e inovadores, que exploram a capital de forma criativa e que mostram uma cidade humana, calorosa. E há também a gastronomia, que na capital, é uma forte aliada para o encanto dos visitantes.
		 		</p>
		 		<p>
		 			<b>Objetivos do Macroprograma:</b><br>
		 			<ul>
		 				<li>Tornar São Paulo uma “Smart City para o Turismo” – Destino Turístico Inteligente;</li>
		 				<li>Oferecer estrutura para que o turista se sinta acolhido na cidade;</li>
		 				<li>Qualificar a oferta dos serviços públicos e privados de hospitalidade e receptividade para turistas;</li>
		 				<li>Fornecer ao turista informações relevantes, estimulando a ampliação da permanência na cidade e o gasto médio.</li>
		 			</ul>
		 		</p>
		 		<p>
		 			<b>Ações/ Projetos:</b><br>
		 			<ol>
		 				<li>
		 					Mapear as tecnologias e ferramentas já existentes e divulgá-las por meio dos sítios eletrônicos e redes sociais.
		 				</li>
		 				<li>
		 					Viabilizar novas tecnologias e aplicativos no aprimoramento da experiência do turista na cidade por meio de estratégias como a realização de uma premiação, incentivo ao desenvolvimento ou aquisição.
		 				</li>
		 				<li>
		 					Sistematizar e divulgar locais de venda de souvenires já existentes.
		 				</li>
		 				<li>
		 					Articular e incentivar a produção de souvenires da cidade utilizando o <i>Branding</i> da Cidade de São Paulo, por meio do licenciamento de produtos oficiais.
		 				</li>
		 				<li>
		 					Elaborar, em parceria com a Secretaria Municipal da Pessoa com Deficiência – SMPED, manual de boas práticas de acessibilidade em turismo, e incentivar a adoção pelos atrativos e serviços de apoio.
		 				</li>
		 				<li>
		 					Formular um manual de práticas sustentáveis para empreendimentos de turismo e grandes eventos, em parceria com a Secretaria Municipal do Verde e do Meio Ambiente.
		 				</li>
		 				<li>
		 					Articular com empresas de telefonia móvel a ativação de chips para turistas estrangeiros, substituindo a exigência de CPF pelo ID ou Passaporte.
		 				</li>
		 				<li>
		 					Estimular e divulgar a abertura de museus em horários diferenciados.
		 				</li>
		 				<li>
		 					Articular com Secretaria Municipal de Transporte e Mobilidade e Governo do Estado para implantação de cartão para turista para uso do transporte público.
		 				</li>
		 				<li>
		 					Implantar novos pontos de embarque e desembarque de veículos de turismo no centro e demais áreas turísticas.
		 				</li>
		 				<li>
		 					Revisar a regulamentação junto a Secretaria Municipal de Transporte e Mobilidade para flexibilizar a circulação de ônibus de turismo na Zona de Restrição Máxima de Fretamento – ZRMF e vias proibidas, como Avenida Paulista.
		 				</li>
		 				<li>
		 					Mapear necessidade de banheiros públicos em zonas turísticas e viabilizar implantação.
		 				</li>
		 				<li>
		 					Ampliar pontos de Wi-FI gratuito em áreas turísticas.
		 				</li>
		 				<br>
		 				<u>EIXO: Sinalização Turística</u><br>
		 				<li>
		 					Retomar parceria com a Companhia de Engenharia de Tráfego – CET para implantar sinalização turística viária em atrativos não contemplados pelo atual programa, incluindo grandes espaços para eventos, e requerer a manutenção das existentes.
		 				</li>
		 				<li>
		 					Implantar sinalização turística para pedestre em atrativos e regiões não contempladas pelo atual programa e viabilizar a manutenção das placas existentes.
		 				</li>
		 				<li>
		 					Formular norma em acordo com as Diretrizes do Guia Brasileiro de Sinalização Turística, estabelecendo critérios objetivos para aferição de quais atrativos devem ter sinalização turística.
		 				</li>
		 				<li>
		 					Fazer articulação com as concessionárias do metrô e CPTM para que seja contemplada na comunicação das estações a indicação de atrativos turísticos no entorno.
		 				</li>
		 				<li>
		 					Implantar comunicação bilíngue nos principais serviços públicos utilizados por turistas (ex. transporte e atrações), em parceria com Secretarias da Prefeitura Municipal de São Paulo.
		 				</li>
		 				<li>
		 					Criar e divulgar um selo para certificar estabelecimentos e serviços de zonas turísticas que disponham de comunicação bilíngue (a exemplo de táxi, restaurantes, comércio, etc.).
		 				</li>
		 				<br>
		 				<u>
		 					EIXO: Informação Turística 
		 				</u><br>
		 				<li>
		 					Manter e qualificar as Centrais de Informação Turística com ações como treinamento de equipes, reparos na infraestrutura e ajustar a comunicação visual.
		 				</li>
		 				<li>
		 					Implantar as Centrais de Informação Turística na cidade de São Paulo e estudar a implantação em locais considerados estratégicos, ainda que fora do município, como o Aeroporto de Guarulhos.
		 				</li>
		 				<li>
		 					Elaborar materiais de apoio (guias/mapas) em tiragem suficiente para atender às demandas do atendimento nas Centrais de Informação Turística, eventos, hotéis e etc.
		 				</li>
		 				<li>
		 					Atualizar e divulgar o site www.cidadedesaopaulo.com e mantê-lo como uma plataforma fácil, intuitiva e que seja referência de conteúdo para o mercado, turistas e moradores, garantindo a responsividade.
		 				</li>
		 				<li>
		 					Utilizar o canal de atendimento do SP 156 da Prefeitura como meio de informação de serviços de turismo, em português, espanhol e inglês.
		 				</li>
		 				<br>
		 				<u>
		 					EIXO: Qualificação Turística
		 				</u>
		 				<br>
		 				<li>
		 					Implantar a Inspetoria de Turismo na Guarda Civil Metropolitana – GCM para priorizar o atendimento a equipamentos e eventos turísticos, com qualificação constante. 
		 				</li>
		 				<li>
		 					Desenvolver ações para sensibilização de recepcionistas de hotéis para que conheçam e divulguem a oferta turística da cidade.
		 				</li>
		 				<li>
		 					Elaborar e divulgar cartilha de boas práticas no turismo para atrativos e equipamentos turísticos ou relacionados à atividade.
		 				</li>
		 				<li>
		 					Capacitar Guardas Civis Metropolitanos em protocolos de atendimento turístico em diferentes idiomas para que forneçam informações a turistas internacionais em zonas turísticas.
		 				</li>
		 			</ol>
		 		</p>
		 	</CommentsContext>
		</section>
		<section>
		 	<h3 class="titulo" indent="2">3.6. Macroprograma 6 – Promoção Turística e Apoio à Comercialização</h3>
		 	<CommentsContext :id="id" :context="'ITEM item.subitem'">
		 		<p>
		 			A capital paulista é o maior destino turístico do país em volume de turistas. Segundo projeções da FIPE, a cidade recebeu cerca de 15,7 milhões de turistas nacionais e internacionais em 2018. São Paulo é uma metrópole que possui vocação de cidade global de negócios, grandes eventos e pela sua diversidade de oferta cultural, gastronômica, vida noturna, reconhecidas e algumas delas até mesmo premiadas. 
		 		</p>
		 		<p>
		 			Comunicar toda essa oferta é essencial para a manutenção e o crescimento da atividade turística, especialmente em um cenário de forte competitividade com muitas opções de destinos nacionais e internacionais. 
		 		</p>
		 		<p>
		 			São Paulo tem recebido baixíssimos investimentos em promoção, e nos últimos anos, não realizou ações promocionais significativas. Há alguns anos a cidade realizou algumas campanhas exitosas veiculadas em renomados canais de comunicação, como <i>Sony</i> e <i>The History Channel</i>, com o objetivo de promover e atrair novos turistas para a capital.  Porém, as ações não foram mantidas nos últimos anos o que prejudica a manutenção dos resultados. 

		 		</p>
		 		<p>
		 			Para a realização de uma promoção eficiente, a recomendação da Organização Mundial do Turismo é que os destinos invistam em marketing e promoção, no mínimo 2% do valor obtido no ingresso de divisas com a atividade turística, sendo que a metade desses investimentos deve ser proveniente do setor privado.
		 		</p>
		 		<p>
		 			A cidade tem como destaque a diversidade, mas muitas vezes dificuldade na comunicação. Não possuir uma imagem definida dificulta a construção de sua identidade turística. Definir a imagem que represente São Paulo tanto no mercado nacional quanto no internacional é fundamental para consolidar cada vez mais a capital paulista como um destino que atende às necessidades de seus visitantes e moradores, surpreende e estimula novos públicos.
		 		</p>
		 		<p>
		 			Em 2012 a São Paulo Turismo elaborou a Marca São Paulo – Viva Tudo Isso, que indicava o posicionamento desejado de um destino com variedade, qualidade e quantidade de experiências únicas e surpreendentes.  O símbolo utilizado para representar a cidade foi uma explosão de cores, vermelho, verde, azul e amarelo, representando os seguintes pilares da marca respectivamente: experiências – procuramos o inesperado; culturas – respeitamos as diferenças; diversão – vivemos o presente; e grupos – somos comunidades.  Apesar de ser utilizada até hoje na comunicação visual da grande parte dos materiais de suporte e informação ao turista como guias, mapas e Centrais de Informação Turística – CITs, a marca não foi amplamente incorporada pelo mercado e pela sociedade, por isso, deve ser revisada.
		 		</p>
		 		<p>
		 			São Paulo precisa estabelecer um posicionamento com imagens impactantes, de estímulo aos visitantes, e comercialização de produtos diferenciados e ofertados de maneira efetiva, por meio de uma promoção e comunicação eficiente, moderna e criativa, integrando marketing <i>online e off-line</i>. Ademais, se faz necessário destacar a vocação da cidade para o entretenimento, a cultura e outros valores que agreguem valor à sua imagem.
		 		</p>
		 		<p>
		 			Outro pressuposto básico que deve ser adotado pelo poder público é o estímulo a novos segmentos de turistas, além do público de negócios, e também a ampliação da permanência e o consumo de turistas na cidade, estimulando gastos com cultura, lazer, compras, entre outros.
		 		</p>
		 		<p>
		 			São Paulo é também uma metrópole conhecida por sua vocação de cidade global de negócios, grandes eventos, e pela sua diversidade no que tange à oferta cultural, gastronômica e vida noturna. O turismo de negócios e eventos representa 75% dos hóspedes em hotéis da cidade. A receita gerada por esses viajantes em despesas como hospedagem e lazer é de R$ 7,3 bilhões por ano12. Diante do potencial deste segmento, o poder público deve adotar medidas que estimulem estes turistas a ampliarem seu tempo de permanência na cidade, de maneira a usufruir da vasta oferta de lazer disponível, movimentando ainda mais a economia da capital paulista. 
		 		</p>
		 		<br>
		 		<p>
		 			<b>Objetivos do Macroprograma:</b>
		 			<br>
		 			<ul>
		 				<li>
		 					Definir marca que trabalhe a identidade da cidade de São Paulo para promoção do turismo;
		 				</li>
		 				<li>
		 					Utilizar diferentes estratégias e ferramentas de publicidade e propaganda para comunicar a oferta turística de São Paulo;
		 				</li>
		 				<li>
		 					Aumentar o consumo da oferta turística de São Paulo por turistas e moradores;
		 				</li>
		 				<li>
		 					Ampliar o número de turistas para São Paulo;
		 				</li>
		 				<li>
		 					Estimular o turista que vem a São Paulo motivado por negócios, permaneça mais tempo na cidade, para usufruir da oferta de lazer.
		 				</li>
		 			</ul>
		 		</p>
		 		<br>
		 		<p>
		 			<b>Ações/ Projetos:</b><br>
		 			<ol>
		 				<li>
		 					Implantar plataforma de <i>marketplace</i> do turismo de São Paulo sistematização da oferta, geração de dados e venda online de produtos e serviços.
		 				</li>
		 				<li>
		 					Criar uma marca de São Paulo e definir o conjunto de ações alinhadas ao posicionamento proposto e valores da marca para promoção do destino (<i>branding</i>).
		 				</li>
		 				<li>
		 					Elaborar Plano de Marketing de São Paulo, envolvendo os principais atores do mercado do turismo.
		 				</li>
		 				<li>
		 					Implementar campanhas publicitárias para promover São Paulo como destino turístico, incluindo ações em <i>Online Travel Agencies</i> (ex. Booking, CVC Viagens, Expedia, Viagem Net, etc.) e influenciadores digitais.
		 				</li>
		 				<li>
		 					Gerar conteúdo sobre o turismo da cidade, com periodicidade, para promoção do destino - via releases para imprensa,<i>newsletter</i>, <i>e-book</i>, site e redes sociais.
		 				</li>
		 				<li>
		 					Utilizar de estratégia de <i>crosstags</i> no Facebook e Instagram, com usuários de grande influência digital para promover conteúdo sobre São Paulo e prospectar seguidores.
		 				</li>
		 				<li>
		 					Realizar e/ou apoiar ações de ações de <i>presstrips</i> e <i>fam tour</i>, em especial, dos principais destinos emissores de turista para São Paulo.
		 				</li>
		 				<li>
		 					Criar banco de mídias de qualidade (fotos e vídeos) que possam ser utilizados e cedidos a terceiros, inclusive para fins comerciais.
		 				</li>
		 				<li>
		 					Participar das feiras de turismo nacionais e internacionais, definidas como prioritárias para São Paulo, para promoção do destino.
		 				</li>
		 				<li>
		 					Realizar promoção de São Paulo combinada com outros destinos do Estado e do Brasil, como forma de aumentar a competitividade do produto.
		 				</li>
		 				<li>
		 					Realizar ação de <i>cross</i> marketing (marketing cruzado) com organizadores de eventos e empresas de venda de ingressos, de forma a estimular que o turista que compra ingressos para eventos em São Paulo, receba informações prévias que o estimulem usufruir outras atividades e atrações na cidade.
		 				</li>
		 				<li>
		 					Reformular o sistema MICE da cidade de São Paulo (www.cidadedesaopaulo.com/mice), atualizando o conteúdo, incluindo novas categorias de espaços e permitindo mais interação com os espaços (obtenção de orçamentos/reserva).
		 				</li>
		 				<li>
		 					Promover ações que incentivem o turista que vem a São Paulo a negócios permaneça na cidade para lazer, tais como a campanha “São Paulo Fique Mais um Dia”.
		 				</li>
		 				<li>
		 					Produzir e divulgar, em parceria com as agências de turismo receptivo, sugestões de roteiros de um a três dias na cidade para incentivar o <i>stopover</i> em São Paulo.
		 				</li>
		 				<li>
		 					Criar <i>stickers</i> com temas de São Paulo para redes sociais em parceria com empresas como Instagram e Facebook (ex. “Eu amo São Paulo”).
		 				</li>
		 				<li>
		 					Desenvolver um guia digital e impresso para agências e operadoras, contendo o portfólio de atividades e experiências da Cidade, a partir de cada segmento, incluindo um diretório de serviços (orientações e contatos para reserva e contratação de tais atividades).
		 				</li>
		 				<li>
		 					Realizar ações de capacitação sobre como vender São Paulo com as agências de turismo dos principais destinos emissores para a cidade.
		 				</li>
		 				<li>
		 					Reeditar os manuais sobre como vender São Paulo nos segmentos lazer e MICE e publicar via eletrônica e impressa.
		 				</li>
		 				<li>
		 					19-	Desenvolver estratégia de promoção de São Paulo nos destinos onde há isenção da necessidade de visto para o Brasil (Austrália, Canadá, Estados Unidos e Japão), por meio de ações como campanha de comunicação em redes sociais e <i>press trip</i>.
		 				</li>
		 				<li>
		 					Prospectar <i>fanpages</i> do Facebook e Instagram de comunidades estrangeiras na cidade para multiplicação de conteúdo turístico em suas páginas e nos seus países de origem.
		 				</li>
		 				<li>
		 					Utilizar o cadastro dos visitantes da cidade, usuários do Wi-Fi livre, para divulgação da oferta turística da cidade.
		 				</li>
		 				<li>
		 					Formular um “pacote” com materiais institucionais de apoio (impressos, vídeo, etc.) para parceiros que vão vender seus produtos da cidade em eventos de fora de São Paulo.
		 				</li>
		 				<li>
		 					Utilizar canais de comunicação do sistema de transporte público e mobiliário urbano para divulgar ações e eventos de turismo na cidade.
		 				</li>
		 			</ol>
		 		</p>
		 	</CommentsContext>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
// import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'PoliticaMunicipalTurismo',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			social_assets: { // https://www.urlencoder.org/
				whatsapp: 'https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Ftext%3DParticipe%20da%20consulta%20p%C3%BAblica%20do%20Nome%20da%20Consulta%3A%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fnome-da-consulta',
				facebook: 'https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fnome-da-consulta',
				twitter: 'https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Ftext%3DParticipe%20da%20consulta%20p%C3%BAblica%20do%20Nome%20da%20Consulta%3A%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fnome-da-consulta'
			}
		}
	},
	components: {
		PageTop,
		Indice
		// Apoio
	},
	mixins: [ consultasCommons ],
	methods: {
		fileSrc (fileName) {
			let url = this.$store.getters.basePath + 'arquivos/politica-municipal-turismo/' + fileName
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
