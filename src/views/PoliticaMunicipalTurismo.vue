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
			<h2 class="titulo" indent="1">Apresentação</h2>
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
			<h2 class="titulo" indent="1">Breve Diagnóstico: O Turismo e a Cidade de São Paulo</h2>
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
