<template>
	<div class="MinutaSetorCentral" ref="MinutaSetorCentral">
		<PageTop background_image_src="arquivos/capas/placeholder_480w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>Minuta PIU Setor Central</div></template>
			<template slot="subtitulo"><div>Subtítulo da Nova Consulta</div></template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>		
		<Apoio></Apoio>

		<section>
			<h2 class="titulo" indent="1">Minuta de Projeto de Lei: Projeto de Intervenção Urbana do Setor Central</h2>
			<p><em>Ementa</em>: Institui e regulamenta a Área de Intervenção Urbana do Setor Central – AIU-SCE, estabelece parâmetros de uso e ocupação do solo específicos para o território, define o programa de intervenções do PIU-SCE e revoga a Lei n. 12.349/1997.</p>
		</section>

		<section>
			<h2 class="titulo" indent="1">Capítulo I - Disposições gerais</h2>
			<section>
				<h3 class="titulo" indent="2">Seção I - Do conceito</h3>
				<CommentsContext :id="commentId(true)" context="'Art. 1º'">
					<p><b>Art. 1º</b> Fica aprovado o Projeto de Intervenção Urbana Setor Central – PIU SCE, compreendendo um programa de intervenções e regramentos urbanísticos específicos, um modelo de gestão financeira e um modelo de gestão participativa, a ser implantado pela Prefeitura do Município de São Paulo, por intermédio da São Paulo Urbanismo – SP-Urbanismo.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 1º, § 1º'">
					<p><b>§ 1º</b> Integram esta lei os mapas, plantas e quadros abaixo relacionados:
					<ol class="romanos">
						<li>Mapa 1 Plano Urbanístico - SCE996U001A;</li>
						<li>Mapa 2 Perímetro de Adesão e Perímetro Expandido - SCE996U00;</li>
						<li>Mapa 3 Parâmetros Urbanísticos - SCE996U003A;</li>
						<li>Mapa 4 Compartimentos Ambientais e Áreas Verdes - SCE996U004A;</li>
						<li>Mapa 5 Assentamentos Precários e ZEIS - SCE996U005A;</li>
						<li>Mapa 6 Plano de Melhoramentos Viários – SCE996U006A;</li>
						<li>Mapa 7 Programa de Intervenções - SCE996U007A;</li>
						<li>Mapa 8 Perímetros Especiais - SCE996U008A;</li>
						<li>Quadro 1A Eixos Estratégicos;</li>
						<li>Quadro 1B Programa de Intervenções;</li>
						<li>Quadro 1C Áreas Verdes;</li>
						<li>Quadro 1D Melhoramentos Viários;</li>
						<li>Quadro 2 Fatores de Planejamento, Parâmetros de Ocupação, exceto Quota Ambiental;</li>
						<li>Quadro 3 Quota Ambiental – pontuação mínima, taxa de permeabilidade mínima e fatores de ponderação segundo compartimento ambiental;</li>
						<li>Plantas nº 26.999/00 a nº 26.999/14, Classificação S-1227, do arquivo da Superintendência de Projetos Viários - PROJ 3 - da Secretaria de Infraestrutura Urbana e Obras - SIURB.</li>
					</ol></p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 1º, § 2º'">
					<p><b>§ 2º</b> Os mapas e quadros integrantes desta lei correspondem aos arquivos digitais da Secretaria Municipal de Desenvolvimento Urbano - SMDU, assinados eletronicamente, disponibilizados no Portal da Prefeitura do Município de São Paulo na Internet.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 2º'">
					<p><b>Art. 2º</b> Para fins de implantação do PIU-SCE fica criada a Área de Intervenção Urbana Setor Central – AIU-SCE do PIU-SCE, delimitada no Mapa 2 anexo a presente Lei.</p>
				</CommentsContext>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção II - Dos objetivos</h3>
				<CommentsContext :id="commentId" context="'Art. 3º'">
					<p><b>Art. 3º</b> Complementarmente aos objetivos gerais constantes nos §§ 1º e 3º do Art. 12 da Lei Municipal n. 16.050, de 31 de julho de 2014 - Plano Diretor Estratégico - PDE, ficam estabelecidos os seguintes objetivos específicos do PIU-SCE:
						<ol class="romanos">
							<li>a atuação concertada de agentes públicos e privados na transformação qualificada do território;</li>
							<li>o incremento da produção imobiliária para atendimento à demanda habitacional local e para incremento populacional da região;</li>
							<li>a transformação territorial compatível com a manutenção da população residente e a preservação do patrimônio histórico;</li>
							<li>o aproveitamento do estoque edificado subutilizado;</li>
							<li>a melhoria do ambiente urbano, por meio da recuperação de orlas fluviais e da qualificação urbanística de vizinhanças habitacionais e de polos comerciais;</li>
							<li>a utilização de terras públicas como ativo da transformação pretendida.</li>
						</ol>
					</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 4º'">
					<p><b>Art. 4º</b> São estratégias associadas à consecução dos objetivos do PIU-SCE:
						<ol class="romanos">
							<li>a adoção de parâmetros específicos de uso e ocupação do solo;</li>
							<li>a integração de políticas setoriais, voltadas à redução da vulnerabilidade social;</li>
							<li>a proposição de incentivos a modalidades diversas de atendimento habitacional de interesse social;</li>
							<li>a criação de novas modalidades de incentivo à preservação de imóveis de interesse histórico;</li>
							<li>a proposição de condições específicas de aplicação dos instrumentos indutores da função social da propriedade;</li>
							<li>a implantação compartilhada de intervenções propostas mediante parcerias do Poder Público com o setor privado;</li>
							<li>a recuperação, para a coletividade, de parte da valorização de imóveis urbanos promovida por investimentos públicos, de forma a subsidiar a implantação do Programa de Intervenções do PIU-SCE.</li>
						</ol>
					</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 4º, Parágrafo único'">
					<p><b>Parágrafo único.</b> Para a consecução das estratégias previstas no “caput”, fica o Poder Público autorizado a alienar os imóveis públicos contidos na AIU-SCE ou promover sua concessão para fins de manutenção, conservação e exploração econômica.</p>
				</CommentsContext>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção III - Das Definições</h3>
				<CommentsContext :id="commentId" context="'Art. 5º'">
					<p><b>Art. 5º</b> Para fins do disposto nesta lei, consideram-se as seguintes definições:</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 5º, ponto I'">
					<ol class="romanos" start="1">
						<li><b>Áreas de Transformação:</b> áreas demarcadas no Mapa 3 desta lei, categorizadas no Quadro 2, destinadas a abrigar densidades construtivas e demográficas altas e sujeitas a alto grau de renovação imobiliária;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 5º, ponto II'">
					<ol class="romanos" start="2">
						<li><b>Áreas de Qualificação:</b> áreas demarcadas no Mapa 3 desta lei, categorizadas no Quadro 2, destinadas à manutenção das densidades construtivas e do padrão de ocupação do solo e à promoção do equilíbrio entre os usos residencial e não residencial;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 5º, ponto III'">
					<ol class="romanos" start="3">
						<li><b>Compartimento Ambiental de Várzea:</b> porção da planície aluvial dos rios Tietê e Tamanduateí, contida no território do PIU-SCE, com baixa capacidade de infiltração de águas pluviais, demarcada no Mapa 4 desta lei;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 5º, ponto IV'">
					<ol class="romanos" start="4">
						<li><b>Compartimento Ambiental de Encosta:</b> porção do território do PIU-SCE caracterizada como colinas e morros baixos que circundam as planícies aluviais, demarcada no Mapa 4 desta lei;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 5º, ponto V'">
					<ol class="romanos" start="5">
						<li><b>Eixos Estratégicos:</b> áreas lindeiras a logradouros demarcados, no Mapa 3 desta lei e categorizadas no Quadro 1A, que desempenham ou venham a desempenhar função de estruturação dos espaços públicos e articulação de locais de interesse e de atração de pessoas, como equipamentos, estações e terminais de transporte público, polos comerciais, entre outros, nos quais os lotes confrontantes receberão incentivos ao adensamento populacional e construtivo, à promoção de uso misto associado à instalação ou manutenção de usos não residenciais no térreo e à fachada ativa;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 5º, ponto VI'">
					<ol class="romanos" start="6">
						<li><b>Eixos de Transformação:</b> áreas lindeiras a logradouros, demarcados no Mapa 3 desta lei e categorizadas no Quadro 1A, nos quais se pretende promover o adensamento construtivo e populacional e a adoção dos parâmetros qualificadores nos empreendimentos dos lotes lindeiros e, especificamente nos Eixos de Transformação da Orla Fluvial, a conformação de faixas vegetadas integradas aos passeios públicos;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 5º, ponto VII'">
					<ol class="romanos" start="8">
						<li><b>Caminhos Verdes:</b> trechos de logradouros demarcados no Mapa 6 e categorizadas no Quadro 1B desta lei, que complementam a rede de espaços públicos e interligam bairros, praças, parques e equipamentos públicos, e nos quais serão implementadas medidas específicas de qualificação ambiental;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 5º, ponto VIII'">
					<ol class="romanos" start="9">
						<li><b>Proposta de Diretrizes de Investimento - PDI:</b> prospecto elaborado pela São Paulo Urbanismo, subsidiado por demais órgãos da administração municipal participantes da implantação do PIU-SCE e formulado a partir da seleção de ações específicas e territorializadas relacionadas no Programa de Intervenções da AIU-SCE que poderão definir Perímetros de Intervenção com vistas a articular ações no território ou eleger modalidades setoriais de atuação;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 5º, ponto IX'">
					<ol class="romanos" start="10">
						<li><b>Programa de Intervenções:</b> conjunto de intervenções físico-territoriais de interesse público indicadas no Mapa 6 e Quadro 1B desta Lei, necessárias à obtenção das melhorias urbanísticas, socioeconômicas e ambientais da AIU-SCE;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 5º, ponto X'">
					<ol class="romanos" start="1">
						<li><b>Projetos Estratégicos:</b> intervenções propostas para áreas compostas predominantemente por imóveis públicos, cujo desenvolvimento dar-se-á em regime de parceria com a iniciativa privada visando à obtenção de contrapartidas urbanísticas definidas segundo programas de interesse público específicos, tais como habitação de interesse social, áreas verdes e equipamentos públicos;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 5º, ponto XI'">
					<ol class="romanos" start="1">
						<li><b>Projetos Especiais:</b> intervenções de requalificação urbanística propostas para espaços, áreas verdes ou parques públicos, delimitadas no Mapa 7 desta Lei, com a finalidade de promover qualificação ambiental e ampliar sua utilização pela população, desenvolvidas a partir de projetos coordenados pela SP-Urbanismo.</li>
					</ol>
				</CommentsContext>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção IV - Da Abrangência Territorial da Área de Intervenção Urbana do Setor Central</h3>
				<CommentsContext :id="commentId" context="'Art. 6º'">
					<p><b>Art. 6º</b> A Área de Intervenção Urbana do Setor Central - AIU-SCE, está demarcada no Mapa 2 e se divide em dois setores:</p>
					<ol class="romanos">
						<li>Setor Centro Histórico;</li>
						<li>Setor Centro Metropolitano.</li>
					</ol>
					<p><b>Parágrafo único.</b> Ficam definidos dois perímetros expandidos para AIU-SCE, demarcados no Mapa 2, nos termos do inciso IV do §5º art. 145 da Lei 16.050 de 2014.</p>
				</CommentsContext>
			</section>
		</section>
		<section>
			<h2 class="titulo" indent="1">Capítulo II - Do uso e ocupação do solo</h2>
			<section>
				<h3 class="titulo" indent="2">Seção I - Regras gerais</h3>
				<CommentsContext :id="commentId" context="'Art. 7º'">
					<p><b>Art. 7º</b> Aplicam-se na AIU-SCE os parâmetros de uso e ocupação do solo estabelecidos nesta Lei, definidos em função de Áreas de Transformação e Áreas de Qualificação, onde estão demarcados:</p>
					<ol class="romanos">
						<li>Eixos de Transformação;</li>
						<li>Eixos Estratégicos;</li>
						<li>Projetos Estratégicos;</li>
						<li>Projetos Especiais;</li>
						<li>Zonas de ocupação Especial – ZOE.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 7º, § 1º">
					<p><b>§ 1º</b> As Áreas de Transformação e Áreas de Qualificação da AIU-SCE deverão observar o regramento urbanístico inscrito nos Quadros 2 e 3, nos Mapas 3 e 4 e nas demais disposições desta Lei.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 7º, § 2º">
					<p><b>§ 2º</b> Aplicam-se ao perímetro do PIU-SCE as disposições ordinárias da Lei 16.402 de 2016 – LPUOS suplementarmente às disposições desta Lei, sem prejuízo da aplicação da regulamentação administrativa prevista pelos órgãos de preservação do patrimônio.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 8º'">
					<p><b>Art. 8º</b> Estão sujeitos ao atendimento das disposições estabelecidas nesta Lei os pedidos de licenciamento edilício formulados para imóveis contidos no perímetro da AIU-SCE que tenham por objeto:</p>
					<ol class="romanos">
						<li>novas edificações;</li>
						<li>reformas com demolição ou ampliação de 50% (cinquenta por cento) ou mais do total da área construída original;</li>
						<li>quaisquer empreendimentos que pleiteiem a utilização dos incentivos estabelecidos nesta Lei.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 9º'">
					<p><b>Art. 9º</b> Para atendimento da Quota Ambiental prevista nos Arts. 74 a 86 da Lei n. 16.402 de 2016 - LPUOS, os empreendimentos sujeitos aos regramentos desta Lei deverão implantar indivíduos arbóreos em, ao menos, 50% (cinquenta por cento) da área permeável do lote na proporção mínima de um espécime arbóreo para cada 25m² (vinte e cinco metros quadrados) de área permeável.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 9º, Parágrafo único">
					<p><b>Parágrafo único.</b> A arborização mencionada no “caput” deverá estar implantada em área permeável ajardinada no recuo frontal, visível do logradouro público e sem vedação do lote com muros nesse trecho, quando exigido pela Lei n. 16.402 de 2016 - LPUOS.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 10'">
					<p><b>Art. 10.</b> A emissão de alvarás de edificação nova ou de reforma com ampliação de área para empreendimentos situados no Compartimento Ambiental de Várzea está condicionada à apresentação, pelo interessado, de parecer técnico favorável à execução das obras, considerando:</p>
					<ol class="romanos">
						<li>o risco de recalque das fundações;</li>
						<li>a estabilidade das paredes de escavação e das margens dos cursos d’água;</li>
						<li>a profundidade do lençol freático;</li>
						<li>a capacidade de suporte do solo;</li>
						<li>a suscetibilidade à ocorrência de alagamentos a partir da solução do projeto apresentado.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 10º, § 1º'">
					<p><b>§ 1º</b> Para os empreendimentos citados no "caput" deste artigo, os pavimentos em subsolo deverão ser implantados, no mínimo, 1 (um) metro acima do nível do lençol freático existente.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 10º, § 2º'">
					<p><b>§ 2º</b> A forma de apresentação do parecer técnico citado no "caput" deste artigo, bem como os órgãos responsáveis pela sua análise deverão ser regulamentados pelo Poder Executivo.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 10º, § 3º'">
					<p><b>§ 3º</b> A parcela de área permeável arborizada deverá ser implantada no alinhamento predial, sempre que exigido ou adotado recuo frontal da edificação.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 11'">
					<p><b>Art. 11.</b> Para o licenciamento de projetos de parcelamento do solo localizados na AIU-SCE, as vias de pedestre previstas no §1º do Art. 43 da Lei n. 16.402 de 2016 - LPUOS serão exigidas somente quando puderem conectar ao menos duas vias oficiais de circulação, podendo ser substituídas por áreas de fruição pública, respeitado o limite máximo de 150 m (cento e cinquenta metros) de extensão de face de quadra.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 12'">
					<p><b>Art. 12.</b> Os empreendimentos localizados no Setor Centro Histórico estão dispensados da oferta de vagas para estacionamento de veículos, com exceção de vagas de bicicletas e, quando exigido pela regulamentação vigente, vagas para carga e descarga.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 12, Parágrafo único'">
					<p><b>Parágrafo único.</b> Quando ofertadas vagas para estacionamento de veículos, as áreas cobertas destinadas a essa finalidade estarão sujeitas ao limite estabelecido nas alíneas “a” e “b” do inciso I do Art. 62 da Lei n. 16.402 de 2016, independentemente da zona em que se localizem.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 13'">
					<p><b>Art. 13.</b> Na hipótese de doação de parcela de imóvel para alargamento de passeio público, implantação de áreas verdes e implantação de melhoramentos viários aprovados em lei, o potencial construtivo básico e o potencial construtivo máximo do lote remanescente serão calculados em função de sua área original.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 13, Parágrafo único'">
					<p><b>Parágrafo único.</b> Cumulativamente ao benefício previsto no "caput" não será cobrada outorga onerosa do direito de construir relativa ao potencial construtivo adicional da área doada, sem prejuízo da aplicação de demais benefícios previstos nesta Lei.</p>
				</CommentsContext>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção II - Eixos de Transformação e Eixos Estratégicos</h3>
				<CommentsContext :id="commentId" context="'Art. 14'">
					<p><b>Art. 14.</b> Aos novos empreendimentos localizados em lotes confrontantes com os Eixos Estratégicos ou em Áreas Verdes Públicas lindeiras aos referidos Eixos, aplicam-se as seguintes disposições:</p>
					<ol class="romanos">
						<li>exigência de fachada ativa em, no mínimo, 25% (vinte e cinco por cento) da testada do lote, com limite máximo de 25% (vinte e cinco por cento) de vedação da testada do lote com muros;</li>
						<li>dispensa de atendimento ao gabarito de altura máxima, quando exigido na área lindeira, para a faixa de 50 m (cinquenta metros) medida a partir do alinhamento original dos lotes.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 15'">
					<p><b>Art. 15.</b> Aos empreendimentos em lotes confrontantes com os Eixos de Transformação, aplicam-se as seguintes disposições:</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 15, ponto I'">
					<ol class="romanos" start="1">
						<li>para o Eixo de Transformação Elevado Pres. João Goulart, na hipótese de desativação do elevado como via de tráfego com manutenção de sua estrutura, poderá ser outorgada a cessão de espaço público aéreo para integração dos empreendimentos à estrutura mencionada, aplicando-se, nesse caso, as seguintes disposições:
						<ol class="minusculas">
							<li>será obrigatória a fruição pública que integre a fachada ativa exigida no pavimento térreo ao pavimento de acesso ao Elevado;</li>
							<li>serão consideradas não computáveis as áreas construídas nesses pavimentos, além da circulação vertical entre eles.</li>
						</ol></li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 15, ponto II'">
					<ol class="romanos" start="2">
						<li>para os demais Eixos de Transformação:
						<ol class="minusculas">
							<li>exigência de doação de faixa de terreno para que o passeio público lindeiro tenha largura mínima de 8 m (oito metros), ficando o lote dispensado do recuo frontal;</li>
							<li>exigência de fachada ativa em, no mínimo, 25% (vinte e cinco por cento) da testada do lote, com limite máximo de 25% (vinte e cinco por cento) de vedação da testada do lote com muros, nos termos da Lei n. 16.402 de 2016 - LPUOS;</li>
							<li>exigência de fruição pública, nos termos da Lei n. 16.402 de 2016 - LPUOS, para lotes com frente para mais de um logradouro.</li>
						</ol></li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 15, § 1º'">
					<p><b>§ 1º</b> Nos lotes lindeiros ao Eixo de Transformação da Orla Fluvial Tamanduateí, aplicam-se, cumulativamente ao regramento do “caput”, as seguintes disposições:</p>
					<ol class="romanos">
						<li>dispensa de atendimento do recuo frontal, condicionada ao atendimento das restrições referentes à Área de Proteção Permanente do Rio Tamanduateí;</li>
						<li>faixa permeável ajardinada e arborizada com largura mínima de 3 m (três metros) junto ao alinhamento dos lotes.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 15, § 2º'">
					<p><b>§ 2º</b> Os parâmetros de projeto e execução do passeio público atenderão ao regramento vigente, sendo que as faixas permeáveis, junto à testada dos lotes, poderão ser computadas no cálculo da Taxa de Permeabilidade – TP, da Quota Ambiental e da Taxa de Ocupação do lote.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 16'">
					<p><b>Art. 16.</b> Nos lotes confrontantes aos Eixos Estratégicos e aos Eixos de Transformação são consideradas áreas não computáveis, independentemente das zonas em que se situem:</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 16, ponto I'">
					<ol class="romanos" start="1">
						<li>as áreas cobertas em qualquer pavimento ocupadas por circulação, manobra e estacionamento de veículos, incluídas as vagas especiais, observado o limite estabelecido nas alíneas “a” e “b” do inciso I do Art. 62 da Lei n. 16.402 de 2016;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 16, ponto II'">
					<ol class="romanos" start="2">
						<li>as áreas comuns e de circulação cobertas, incluindo a circulação vertical, nos usos residenciais, atendido o limite de 20% (vinte por cento) da área coberta de cada pavimento;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 16, ponto III'">
					<ol class="romanos" start="3">
						<li>nos empreendimentos enquadrados na categoria de uso R2v ou de uso misto com R2v, e nos Empreendimentos Habitacionais de Interesse Social - EHIS e de Mercado Popular – EHMP, as áreas cobertas de uso comum de até dois pavimentos, adicionalmente às áreas não computáveis do pavimento térreo;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 16, ponto IV'">
					<ol class="romanos" start="4">
						<li>as áreas construídas ao nível da rua destinadas a usos da categoria não residencial permitidos nas respectivas zonas até o limite da Taxa de Ocupação fixada no Quadro 2 da presente Lei, com exceção daqueles enquadrados nos grupos de atividade referentes a serviço de armazenamento e guarda de bens móveis;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 16, ponto V'">
					<ol class="romanos" start="5">
						<li>em empreendimentos predominantemente residenciais, as áreas destinadas aos usos não residenciais, situadas nos pavimentos imediatamente acima do pavimento térreo com fachada ativa, até o limite de 20% (vinte por cento) da área construída computável;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 16, ponto VI'">
					<ol class="romanos" start="6">
						<li>as áreas previstas nos incisos X a XVI do Art. 62 da Lei n. 16.402 de 2016.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 16, § 1º'">
					<p><b>§ 1º</b> O limite estabelecido nas alíneas “a” e “b” do inciso I do Art. 62 da Lei n. 16.402 de 2016 não se aplica aos lotes compreendidos na Área de Transformação T2.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 16, § 2º'">
					<p><b>§ 2º</b> Para fins de aplicação do inciso V do “caput”, considera-se empreendimentos predominantemente residenciais aqueles que apresentam pelo menos 70% (setenta por cento) de sua área construída computável destinada ao uso residencial.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 16, § 3º'">
					<p><b>§ 3º</b> O somatório das áreas construídas não computáveis previstas nos incisos I e II do “caput” deste artigo, bem como as áreas não computáveis previstas na legislação edilícia, fica sujeita às limitações do Art. 62, § 2º da Lei 16.402 de 2016 - LPUOS.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 17'">
					<p><b>Art. 17.</b> Para os empreendimentos localizados nos lotes lindeiros aos Eixos de Transformação serão concedidos os seguintes incentivos:</p>
					<ol class="romanos">
						<li>para os terrenos formados pelo remembramento de três ou mais lotes menores que 500 m² (quinhentos metros quadrados) que atinjam o mínimo de 1.000 m² (mil metros quadrados) e a testada mínima de 20 m (vinte metros), área construída adicional computável correspondente a 10% (dez por cento) da área do terreno resultante por lote remembrado até o limite máximo de 100% (cem por cento);</li>
						<li>desconto de 50% (cinquenta por cento) no valor da contrapartida financeira à outorga onerosa de potencial construtivo adicional, calculada pela aplicação da fórmula prevista no Art. 117 da Lei n. 16.050 de 2014 - PDE, combinada aos Fatores de Planejamento constantes no Quadro 2 desta Lei.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 17, § 1º'">
					<p><b>§ 1º</b> O incentivo previsto no inciso I do “caput” não se aplica ao Eixo de Transformação Elevado Pres. João Goulart.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 17, § 2º'">
					<p><b>§ 2º</b> O incentivo previsto no inciso II do “caput” aplica-se aos empreendimentos com frente para o Eixo Estratégico do Apoio Urbano Sul.</p>
				</CommentsContext>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção III - Dos Projetos Estratégicos</h3>
				<CommentsContext :id="commentId" context="'Art. 18'">
					<p><b>Art. 18.</b> Ficam instituídos os seguintes perímetros de Projetos Estratégicos, demarcados no Mapa 7 anexo a esta Lei:</p>
					<ol class="romanos">
						<li>Detran-SP;</li>
						<li>Canindé-Portuguesa;</li>
						<li>Canindé-Santo Antônio;</li>
						<li>Canindé-CMTC;</li>
						<li>Santa Rita.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 18, § 1º'">
					<p><b>§ 1º</b> A implantação dos Projetos Estratégicos será viabilizada por Chamamentos Públicos que estabeleçam regimes de parceria com a iniciativa privada, necessários à pactuação dos aportes públicos e das contrapartidas urbanísticas dos agentes econômicos privados.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 18, § 2º'">
					<p><b>§ 2º</b> Os editais de chamamento público para fins de celebração de contratos de parcerias necessários à implantação dos Projetos Estratégicos e ao aproveitamento das demais áreas públicas deverão indicar, no mínimo:</p>
					<ol class="romanos">
						<li>os imóveis a serem transferidos ao parceiro privado com seus respectivos laudos de avaliação;</li>
						<li>a relação entre os valores referentes ao aporte público e às contrapartidas urbanísticas ofertadas por agente econômico privado;</li>
						<li>os valores unitários máximos referentes a cada contrapartida urbanística projetada;</li>
						<li>as contrapartidas urbanísticas mínimas, parametrizadas pelo valor do imóvel objeto do Projeto Estratégico e da respectiva outorga onerosa de potencial construtivo adicional;</li>
						<li>os critérios de qualidade e padrão construtivo estabelecidos pelas normas técnicas vigentes para fins de recebimento das contrapartidas.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 18, § 3º'">
					<p><b>§ 3º</b> Poderão ser arrolados nos editais de chamamento outros imóveis públicos localizados na AIU-SCE e não compreendidos nos perímetros indicados no “caput”, para fins de composição das contrapartidas oferecidas nos contratos de parcerias necessários à implantação dos Projetos Estratégicos.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 19'">
					<p><b>Art. 19</b> Para subsidiar a elaboração das propostas advindas dos Chamamentos Públicos mencionados no artigo anterior, a SP-Urbanismo desenvolverá estudo preliminar para cada Projeto Estratégico contendo, no mínimo:</p>
					<ol class="romanos">
						<li>o programa de interesse público;</li>
						<li>as diretrizes para parcelamento do solo, quando obrigatórias;</li>
						<li>indicação das áreas públicas que permanecerão na titularidade do Município;</li>
						<li>as áreas passíveis de transferência aos agentes econômicos incumbidos da implantação do projeto, por intermédio de permuta com elementos relacionados no programa de interesse público;</li>
						<li>o estudo de viabilidade econômica.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 19, § 1º'">
					<p><b>§ 1º</b> O programa de Interesse Público priorizará, na definição de contrapartidas, a construção de Habitações de Interesse Social que comporão o parque público de moradia, podendo abranger a implantação de sistema viário, de áreas verdes equipadas e áreas institucionais, quando houver a obrigatoriedade de parcelamento, conforme disposto na Lei n. 16.402 de 2016 - LPOUS.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 19, § 2º'">
					<p><b>§ 2º</b> Os novos melhoramentos viários propostos para os Projetos Estratégicos deverão promover conexões com o sistema viário existente e com os melhoramentos aprovados em Lei.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 20'">
					<p>Art. 20. O Projeto Estratégico Detran-SP abrange os lotes 0017, 0038 e 0068 da Quadra 093, Setor 018, e a elaboração do respectivo Estudo Preliminar deverá considerar o seguinte:</p>
					<ol class="romanos">
						<li>a conveniência da permanência dos equipamentos públicos existentes;</li>
						<li>a possibilidade de remembramento dos lotes para melhor utilização da área;</li>
						<li>o cumprimento das exigências de destinação de áreas públicas, nos termos do Quadro 2 da Lei n. 16.402 de 2016 – LPUOS.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 20, Parágrafo único'">
					<p><b>Parágrafo único.</b> O loteamento poderá ser realizado em etapas, conforme a disposição do Art. 55 da Lei n. 16.402 de 2016 - LPUOS, podendo considerar para o atendimento dos percentuais mínimos de destinação institucional e sem afetação previamente definida, conforme Quadro 2 da referida lei, as áreas já ocupadas por equipamentos públicos.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 21'">
					<p><b>Art. 21.</b> O Projeto Estratégico Canindé-Portuguesa é composto por imóveis públicos e privados e corresponde à Zona de Ocupação Especial – ZOE - demarcada no Mapa 1 anexo à Lei n. 16.402 de 2016 - LPUOS, coincidente com o perímetro definido no Mapa 3 anexo a esta Lei.</p>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 21, § 1º'">
					<p><b>§ 1º</b> Compõem o perímetro da ZOE Canindé-Portuguesa os seguintes imóveis da Quadra 103 do Setor 017:</p>
					<ol class="romanos">
						<li>o lote 0046-9, conformado pela parcela “A”, com área de 55.452,05m², pertencente ao Município de São Paulo e pela parcela “B”, com área de 45.570,00m², pertencente a Associação Portuguesa de Desportos;</li>
						<li>a parcela do lote 0045-0 da Quadra 103, Setor 017, com área de 13.158,02m².</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="commentId" context="'Art. 21, § 2º'">
					<p><b>§ 2º</b> No perímetro da ZOE Canindé, o potencial construtivo total, limitado em 300.000m² (trezentos mil metros quadrados), nos termos do inciso II do Art. 169 da Lei n. 16.402 de 2016 - LPUOS, fica assim distribuído:</p>
					<Tabela :dados="{
						estreita: false,
						colunas: [
							{ titulo: 'Parcela' },
							{ titulo: 'Potencial Construtivo (m²)' }
						],
						linhas: [
							[
								[ { data: 'A' } ],
								[ { data: '160.265,94' } ]
							],
							[
								[ { data: 'B' } ],
								[ { data: '131.705,12' } ]
							],
							[
								[ { data: 'Parcela do lote 0045' } ],
								[ { data: '38.028,94' } ]
							]
						]
					}"></Tabela>
				</CommentsContext>
			</section>
		</section>
		<CommentsContext :id="commentId" context=""></CommentsContext>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Apoio from '@/components/Apoio'
import Comments from '@/components/Comments'
import CommentsContext from '@/components/CommentsContext'
import CommentsLoader from '@/components/CommentsLoader'
import Tabela from '@/components/Tabela'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'MinutaSetorCentral',
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
		Apoio,
		Comments,
		CommentsLoader,
		CommentsContext,
		Tabela
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

</style>
