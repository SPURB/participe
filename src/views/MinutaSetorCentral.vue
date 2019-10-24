<template>
	<div class="MinutaSetorCentral" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/minuta-piu-setor-central_244w.jpg" :esta_consulta="estaConsulta">
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

			<h3>Seção I - Do conceito</h3>
			<CommentsContext :id="commentId(1)" context="'Art. 1º'">
				<p><b>Art. 1º</b> Fica aprovado o Projeto de Intervenção Urbana Setor Central – PIU SCE, compreendendo um programa de intervenções e regramentos urbanísticos específicos, um modelo de gestão financeira e um modelo de gestão participativa, a ser implantado pela Prefeitura do Município de São Paulo, por intermédio da São Paulo Urbanismo – SP-Urbanismo.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 1º, § 1º'">
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
			<CommentsContext :id="commentId()" context="'Art. 1º, § 2º'">
				<p><b>§ 2º</b> Os mapas e quadros integrantes desta lei correspondem aos arquivos digitais da Secretaria Municipal de Desenvolvimento Urbano - SMDU, assinados eletronicamente, disponibilizados no Portal da Prefeitura do Município de São Paulo na Internet.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 2º'">
				<p><b>Art. 2º</b> Para fins de implantação do PIU-SCE fica criada a Área de Intervenção Urbana Setor Central – AIU-SCE do PIU-SCE, delimitada no Mapa 2 anexo a presente Lei.</p>
			</CommentsContext>

			<h3>Seção II - Dos objetivos</h3>
			<CommentsContext :id="commentId()" context="'Art. 3º'">
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
			<CommentsContext :id="commentId()" context="'Art. 4º'">
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
			<CommentsContext :id="commentId()" context="'Art. 4º, Parágrafo único'">
				<p><b>Parágrafo único.</b> Para a consecução das estratégias previstas no “caput”, fica o Poder Público autorizado a alienar os imóveis públicos contidos na AIU-SCE ou promover sua concessão para fins de manutenção, conservação e exploração econômica.</p>
			</CommentsContext>

			<h3>Seção III - Das Definições</h3>
			<CommentsContext :id="commentId()" context="'Art. 5º'">
				<p><b>Art. 5º</b> Para fins do disposto nesta lei, consideram-se as seguintes definições:</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 5º, ponto I'">
				<ol class="romanos" start="1">
					<li><b>Áreas de Transformação:</b> áreas demarcadas no Mapa 3 desta lei, categorizadas no Quadro 2, destinadas a abrigar densidades construtivas e demográficas altas e sujeitas a alto grau de renovação imobiliária;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 5º, ponto II'">
				<ol class="romanos" start="2">
					<li><b>Áreas de Qualificação:</b> áreas demarcadas no Mapa 3 desta lei, categorizadas no Quadro 2, destinadas à manutenção das densidades construtivas e do padrão de ocupação do solo e à promoção do equilíbrio entre os usos residencial e não residencial;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 5º, ponto III'">
				<ol class="romanos" start="3">
					<li><b>Compartimento Ambiental de Várzea:</b> porção da planície aluvial dos rios Tietê e Tamanduateí, contida no território do PIU-SCE, com baixa capacidade de infiltração de águas pluviais, demarcada no Mapa 4 desta lei;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 5º, ponto IV'">
				<ol class="romanos" start="4">
					<li><b>Compartimento Ambiental de Encosta:</b> porção do território do PIU-SCE caracterizada como colinas e morros baixos que circundam as planícies aluviais, demarcada no Mapa 4 desta lei;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 5º, ponto V'">
				<ol class="romanos" start="5">
					<li><b>Eixos Estratégicos:</b> áreas lindeiras a logradouros demarcados, no Mapa 3 desta lei e categorizadas no Quadro 1A, que desempenham ou venham a desempenhar função de estruturação dos espaços públicos e articulação de locais de interesse e de atração de pessoas, como equipamentos, estações e terminais de transporte público, polos comerciais, entre outros, nos quais os lotes confrontantes receberão incentivos ao adensamento populacional e construtivo, à promoção de uso misto associado à instalação ou manutenção de usos não residenciais no térreo e à fachada ativa;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 5º, ponto VI'">
				<ol class="romanos" start="6">
					<li><b>Eixos de Transformação:</b> áreas lindeiras a logradouros, demarcados no Mapa 3 desta lei e categorizadas no Quadro 1A, nos quais se pretende promover o adensamento construtivo e populacional e a adoção dos parâmetros qualificadores nos empreendimentos dos lotes lindeiros e, especificamente nos Eixos de Transformação da Orla Fluvial, a conformação de faixas vegetadas integradas aos passeios públicos;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 5º, ponto VII'">
				<ol class="romanos" start="8">
					<li><b>Caminhos Verdes:</b> trechos de logradouros demarcados no Mapa 6 e categorizadas no Quadro 1B desta lei, que complementam a rede de espaços públicos e interligam bairros, praças, parques e equipamentos públicos, e nos quais serão implementadas medidas específicas de qualificação ambiental;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 5º, ponto VIII'">
				<ol class="romanos" start="9">
					<li><b>Proposta de Diretrizes de Investimento - PDI:</b> prospecto elaborado pela São Paulo Urbanismo, subsidiado por demais órgãos da administração municipal participantes da implantação do PIU-SCE e formulado a partir da seleção de ações específicas e territorializadas relacionadas no Programa de Intervenções da AIU-SCE que poderão definir Perímetros de Intervenção com vistas a articular ações no território ou eleger modalidades setoriais de atuação;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 5º, ponto IX'">
				<ol class="romanos" start="10">
					<li><b>Programa de Intervenções:</b> conjunto de intervenções físico-territoriais de interesse público indicadas no Mapa 6 e Quadro 1B desta Lei, necessárias à obtenção das melhorias urbanísticas, socioeconômicas e ambientais da AIU-SCE;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 5º, ponto X'">
				<ol class="romanos" start="1">
					<li><b>Projetos Estratégicos:</b> intervenções propostas para áreas compostas predominantemente por imóveis públicos, cujo desenvolvimento dar-se-á em regime de parceria com a iniciativa privada visando à obtenção de contrapartidas urbanísticas definidas segundo programas de interesse público específicos, tais como habitação de interesse social, áreas verdes e equipamentos públicos;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 5º, ponto XI'">
				<ol class="romanos" start="1">
					<li><b>Projetos Especiais:</b> intervenções de requalificação urbanística propostas para espaços, áreas verdes ou parques públicos, delimitadas no Mapa 7 desta Lei, com a finalidade de promover qualificação ambiental e ampliar sua utilização pela população, desenvolvidas a partir de projetos coordenados pela SP-Urbanismo.</li>
				</ol>
			</CommentsContext>

			<h3>Seção IV - Da Abrangência Territorial da Área de Intervenção Urbana do Setor Central</h3>
			<CommentsContext :id="commentId()" context="'Art. 6º'">
				<p><b>Art. 6º</b> A Área de Intervenção Urbana do Setor Central - AIU-SCE, está demarcada no Mapa 2 e se divide em dois setores:</p>
				<ol class="romanos">
					<li>Setor Centro Histórico;</li>
					<li>Setor Centro Metropolitano.</li>
				</ol>
				<p><b>Parágrafo único.</b> Ficam definidos dois perímetros expandidos para AIU-SCE, demarcados no Mapa 2, nos termos do inciso IV do §5º art. 145 da Lei 16.050 de 2014.</p>
			</CommentsContext>
		</section>

		<section>
			<h2 class="titulo" indent="1">Capítulo II - Do uso e ocupação do solo</h2>
			<h3>Seção I - Regras gerais</h3>
			<CommentsContext :id="commentId()" context="'Art. 7º'">
				<p><b>Art. 7º</b> Aplicam-se na AIU-SCE os parâmetros de uso e ocupação do solo estabelecidos nesta Lei, definidos em função de Áreas de Transformação e Áreas de Qualificação, onde estão demarcados:</p>
				<ol class="romanos">
					<li>Eixos de Transformação;</li>
					<li>Eixos Estratégicos;</li>
					<li>Projetos Estratégicos;</li>
					<li>Projetos Especiais;</li>
					<li>Zonas de ocupação Especial – ZOE.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 7º, § 1º">
				<p><b>§ 1º</b> As Áreas de Transformação e Áreas de Qualificação da AIU-SCE deverão observar o regramento urbanístico inscrito nos Quadros 2 e 3, nos Mapas 3 e 4 e nas demais disposições desta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 7º, § 2º">
				<p><b>§ 2º</b> Aplicam-se ao perímetro do PIU-SCE as disposições ordinárias da Lei 16.402 de 2016 – LPUOS suplementarmente às disposições desta Lei, sem prejuízo da aplicação da regulamentação administrativa prevista pelos órgãos de preservação do patrimônio.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 8º'">
				<p><b>Art. 8º</b> Estão sujeitos ao atendimento das disposições estabelecidas nesta Lei os pedidos de licenciamento edilício formulados para imóveis contidos no perímetro da AIU-SCE que tenham por objeto:</p>
				<ol class="romanos">
					<li>novas edificações;</li>
					<li>reformas com demolição ou ampliação de 50% (cinquenta por cento) ou mais do total da área construída original;</li>
					<li>quaisquer empreendimentos que pleiteiem a utilização dos incentivos estabelecidos nesta Lei.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 9º'">
				<p><b>Art. 9º</b> Para atendimento da Quota Ambiental prevista nos Arts. 74 a 86 da Lei n. 16.402 de 2016 - LPUOS, os empreendimentos sujeitos aos regramentos desta Lei deverão implantar indivíduos arbóreos em, ao menos, 50% (cinquenta por cento) da área permeável do lote na proporção mínima de um espécime arbóreo para cada 25m² (vinte e cinco metros quadrados) de área permeável.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 9º, Parágrafo único">
				<p><b>Parágrafo único.</b> A arborização mencionada no “caput” deverá estar implantada em área permeável ajardinada no recuo frontal, visível do logradouro público e sem vedação do lote com muros nesse trecho, quando exigido pela Lei n. 16.402 de 2016 - LPUOS.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 10'">
				<p><b>Art. 10.</b> A emissão de alvarás de edificação nova ou de reforma com ampliação de área para empreendimentos situados no Compartimento Ambiental de Várzea está condicionada à apresentação, pelo interessado, de parecer técnico favorável à execução das obras, considerando:</p>
				<ol class="romanos">
					<li>o risco de recalque das fundações;</li>
					<li>a estabilidade das paredes de escavação e das margens dos cursos d’água;</li>
					<li>a profundidade do lençol freático;</li>
					<li>a capacidade de suporte do solo;</li>
					<li>a suscetibilidade à ocorrência de alagamentos a partir da solução do projeto apresentado.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 10º, § 1º'">
				<p><b>§ 1º</b> Para os empreendimentos citados no "caput" deste artigo, os pavimentos em subsolo deverão ser implantados, no mínimo, 1 (um) metro acima do nível do lençol freático existente.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 10º, § 2º'">
				<p><b>§ 2º</b> A forma de apresentação do parecer técnico citado no "caput" deste artigo, bem como os órgãos responsáveis pela sua análise deverão ser regulamentados pelo Poder Executivo.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 10º, § 3º'">
				<p><b>§ 3º</b> A parcela de área permeável arborizada deverá ser implantada no alinhamento predial, sempre que exigido ou adotado recuo frontal da edificação.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 11'">
				<p><b>Art. 11.</b> Para o licenciamento de projetos de parcelamento do solo localizados na AIU-SCE, as vias de pedestre previstas no §1º do Art. 43 da Lei n. 16.402 de 2016 - LPUOS serão exigidas somente quando puderem conectar ao menos duas vias oficiais de circulação, podendo ser substituídas por áreas de fruição pública, respeitado o limite máximo de 150 m (cento e cinquenta metros) de extensão de face de quadra.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 12'">
				<p><b>Art. 12.</b> Os empreendimentos localizados no Setor Centro Histórico estão dispensados da oferta de vagas para estacionamento de veículos, com exceção de vagas de bicicletas e, quando exigido pela regulamentação vigente, vagas para carga e descarga.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 12, Parágrafo único'">
				<p><b>Parágrafo único.</b> Quando ofertadas vagas para estacionamento de veículos, as áreas cobertas destinadas a essa finalidade estarão sujeitas ao limite estabelecido nas alíneas “a” e “b” do inciso I do Art. 62 da Lei n. 16.402 de 2016, independentemente da zona em que se localizem.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 13'">
				<p><b>Art. 13.</b> Na hipótese de doação de parcela de imóvel para alargamento de passeio público, implantação de áreas verdes e implantação de melhoramentos viários aprovados em lei, o potencial construtivo básico e o potencial construtivo máximo do lote remanescente serão calculados em função de sua área original.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 13, Parágrafo único'">
				<p><b>Parágrafo único.</b> Cumulativamente ao benefício previsto no "caput" não será cobrada outorga onerosa do direito de construir relativa ao potencial construtivo adicional da área doada, sem prejuízo da aplicação de demais benefícios previstos nesta Lei.</p>
			</CommentsContext>

			<h3>Seção II - Eixos de Transformação e Eixos Estratégicos</h3>
			<CommentsContext :id="commentId()" context="'Art. 14'">
				<p><b>Art. 14.</b> Aos novos empreendimentos localizados em lotes confrontantes com os Eixos Estratégicos ou em Áreas Verdes Públicas lindeiras aos referidos Eixos, aplicam-se as seguintes disposições:</p>
				<ol class="romanos">
					<li>exigência de fachada ativa em, no mínimo, 25% (vinte e cinco por cento) da testada do lote, com limite máximo de 25% (vinte e cinco por cento) de vedação da testada do lote com muros;</li>
					<li>dispensa de atendimento ao gabarito de altura máxima, quando exigido na área lindeira, para a faixa de 50 m (cinquenta metros) medida a partir do alinhamento original dos lotes.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 15'">
				<p><b>Art. 15.</b> Aos empreendimentos em lotes confrontantes com os Eixos de Transformação, aplicam-se as seguintes disposições:</p>
				<ol class="romanos" start="1">
					<li>para o Eixo de Transformação Elevado Pres. João Goulart, na hipótese de desativação do elevado como via de tráfego com manutenção de sua estrutura, poderá ser outorgada a cessão de espaço público aéreo para integração dos empreendimentos à estrutura mencionada, aplicando-se, nesse caso, as seguintes disposições:
						<ol class="minusculas">
							<li>será obrigatória a fruição pública que integre a fachada ativa exigida no pavimento térreo ao pavimento de acesso ao Elevado;</li>
							<li>serão consideradas não computáveis as áreas construídas nesses pavimentos, além da circulação vertical entre eles.</li>
						</ol>
					</li>
					<li>para os demais Eixos de Transformação:
						<ol class="minusculas">
							<li>exigência de doação de faixa de terreno para que o passeio público lindeiro tenha largura mínima de 8 m (oito metros), ficando o lote dispensado do recuo frontal;</li>
							<li>exigência de fachada ativa em, no mínimo, 25% (vinte e cinco por cento) da testada do lote, com limite máximo de 25% (vinte e cinco por cento) de vedação da testada do lote com muros, nos termos da Lei n. 16.402 de 2016 - LPUOS;</li>
							<li>exigência de fruição pública, nos termos da Lei n. 16.402 de 2016 - LPUOS, para lotes com frente para mais de um logradouro.</li>
						</ol>
					</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 15, § 1º'">
				<p><b>§ 1º</b> Nos lotes lindeiros ao Eixo de Transformação da Orla Fluvial Tamanduateí, aplicam-se, cumulativamente ao regramento do “caput”, as seguintes disposições:</p>
				<ol class="romanos">
					<li>dispensa de atendimento do recuo frontal, condicionada ao atendimento das restrições referentes à Área de Proteção Permanente do Rio Tamanduateí;</li>
					<li>faixa permeável ajardinada e arborizada com largura mínima de 3 m (três metros) junto ao alinhamento dos lotes.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 15, § 2º'">
				<p><b>§ 2º</b> Os parâmetros de projeto e execução do passeio público atenderão ao regramento vigente, sendo que as faixas permeáveis, junto à testada dos lotes, poderão ser computadas no cálculo da Taxa de Permeabilidade – TP, da Quota Ambiental e da Taxa de Ocupação do lote.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 16'">
				<p><b>Art. 16.</b> Nos lotes confrontantes aos Eixos Estratégicos e aos Eixos de Transformação são consideradas áreas não computáveis, independentemente das zonas em que se situem:</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 16, ponto I'">
				<ol class="romanos" start="1">
					<li>as áreas cobertas em qualquer pavimento ocupadas por circulação, manobra e estacionamento de veículos, incluídas as vagas especiais, observado o limite estabelecido nas alíneas “a” e “b” do inciso I do Art. 62 da Lei n. 16.402 de 2016;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 16, ponto II'">
				<ol class="romanos" start="2">
					<li>as áreas comuns e de circulação cobertas, incluindo a circulação vertical, nos usos residenciais, atendido o limite de 20% (vinte por cento) da área coberta de cada pavimento;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 16, ponto III'">
				<ol class="romanos" start="3">
					<li>nos empreendimentos enquadrados na categoria de uso R2v ou de uso misto com R2v, e nos Empreendimentos Habitacionais de Interesse Social - EHIS e de Mercado Popular – EHMP, as áreas cobertas de uso comum de até dois pavimentos, adicionalmente às áreas não computáveis do pavimento térreo;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 16, ponto IV'">
				<ol class="romanos" start="4">
					<li>as áreas construídas ao nível da rua destinadas a usos da categoria não residencial permitidos nas respectivas zonas até o limite da Taxa de Ocupação fixada no Quadro 2 da presente Lei, com exceção daqueles enquadrados nos grupos de atividade referentes a serviço de armazenamento e guarda de bens móveis;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 16, ponto V'">
				<ol class="romanos" start="5">
					<li>em empreendimentos predominantemente residenciais, as áreas destinadas aos usos não residenciais, situadas nos pavimentos imediatamente acima do pavimento térreo com fachada ativa, até o limite de 20% (vinte por cento) da área construída computável;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 16, ponto VI'">
				<ol class="romanos" start="6">
					<li>as áreas previstas nos incisos X a XVI do Art. 62 da Lei n. 16.402 de 2016.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 16, § 1º'">
				<p><b>§ 1º</b> O limite estabelecido nas alíneas “a” e “b” do inciso I do Art. 62 da Lei n. 16.402 de 2016 não se aplica aos lotes compreendidos na Área de Transformação T2.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 16, § 2º'">
				<p><b>§ 2º</b> Para fins de aplicação do inciso V do “caput”, considera-se empreendimentos predominantemente residenciais aqueles que apresentam pelo menos 70% (setenta por cento) de sua área construída computável destinada ao uso residencial.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 16, § 3º'">
				<p><b>§ 3º</b> O somatório das áreas construídas não computáveis previstas nos incisos I e II do “caput” deste artigo, bem como as áreas não computáveis previstas na legislação edilícia, fica sujeita às limitações do Art. 62, § 2º da Lei 16.402 de 2016 - LPUOS.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 17'">
				<p><b>Art. 17.</b> Para os empreendimentos localizados nos lotes lindeiros aos Eixos de Transformação serão concedidos os seguintes incentivos:</p>
				<ol class="romanos">
					<li>para os terrenos formados pelo remembramento de três ou mais lotes menores que 500 m² (quinhentos metros quadrados) que atinjam o mínimo de 1.000 m² (mil metros quadrados) e a testada mínima de 20 m (vinte metros), área construída adicional computável correspondente a 10% (dez por cento) da área do terreno resultante por lote remembrado até o limite máximo de 100% (cem por cento);</li>
					<li>desconto de 50% (cinquenta por cento) no valor da contrapartida financeira à outorga onerosa de potencial construtivo adicional, calculada pela aplicação da fórmula prevista no Art. 117 da Lei n. 16.050 de 2014 - PDE, combinada aos Fatores de Planejamento constantes no Quadro 2 desta Lei.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 17, § 1º'">
				<p><b>§ 1º</b> O incentivo previsto no inciso I do “caput” não se aplica ao Eixo de Transformação Elevado Pres. João Goulart.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 17, § 2º'">
				<p><b>§ 2º</b> O incentivo previsto no inciso II do “caput” aplica-se aos empreendimentos com frente para o Eixo Estratégico do Apoio Urbano Sul.</p>
			</CommentsContext>

			<h3>Seção III - Dos Projetos Estratégicos</h3>
			<CommentsContext :id="commentId()" context="'Art. 18'">
				<p><b>Art. 18.</b> Ficam instituídos os seguintes perímetros de Projetos Estratégicos, demarcados no Mapa 7 anexo a esta Lei:</p>
				<ol class="romanos">
					<li>Detran-SP;</li>
					<li>Canindé-Portuguesa;</li>
					<li>Canindé-Santo Antônio;</li>
					<li>Canindé-CMTC;</li>
					<li>Santa Rita.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 18, § 1º'">
				<p><b>§ 1º</b> A implantação dos Projetos Estratégicos será viabilizada por Chamamentos Públicos que estabeleçam regimes de parceria com a iniciativa privada, necessários à pactuação dos aportes públicos e das contrapartidas urbanísticas dos agentes econômicos privados.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 18, § 2º'">
				<p><b>§ 2º</b> Os editais de chamamento público para fins de celebração de contratos de parcerias necessários à implantação dos Projetos Estratégicos e ao aproveitamento das demais áreas públicas deverão indicar, no mínimo:</p>
				<ol class="romanos">
					<li>os imóveis a serem transferidos ao parceiro privado com seus respectivos laudos de avaliação;</li>
					<li>a relação entre os valores referentes ao aporte público e às contrapartidas urbanísticas ofertadas por agente econômico privado;</li>
					<li>os valores unitários máximos referentes a cada contrapartida urbanística projetada;</li>
					<li>as contrapartidas urbanísticas mínimas, parametrizadas pelo valor do imóvel objeto do Projeto Estratégico e da respectiva outorga onerosa de potencial construtivo adicional;</li>
					<li>os critérios de qualidade e padrão construtivo estabelecidos pelas normas técnicas vigentes para fins de recebimento das contrapartidas.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 18, § 3º'">
				<p><b>§ 3º</b> Poderão ser arrolados nos editais de chamamento outros imóveis públicos localizados na AIU-SCE e não compreendidos nos perímetros indicados no “caput”, para fins de composição das contrapartidas oferecidas nos contratos de parcerias necessários à implantação dos Projetos Estratégicos.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 19'">
				<p><b>Art. 19</b> Para subsidiar a elaboração das propostas advindas dos Chamamentos Públicos mencionados no artigo anterior, a SP-Urbanismo desenvolverá estudo preliminar para cada Projeto Estratégico contendo, no mínimo:</p>
				<ol class="romanos">
					<li>o programa de interesse público;</li>
					<li>as diretrizes para parcelamento do solo, quando obrigatórias;</li>
					<li>indicação das áreas públicas que permanecerão na titularidade do Município;</li>
					<li>as áreas passíveis de transferência aos agentes econômicos incumbidos da implantação do projeto, por intermédio de permuta com elementos relacionados no programa de interesse público;</li>
					<li>o estudo de viabilidade econômica.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 19, § 1º'">
				<p><b>§ 1º</b> O programa de Interesse Público priorizará, na definição de contrapartidas, a construção de Habitações de Interesse Social que comporão o parque público de moradia, podendo abranger a implantação de sistema viário, de áreas verdes equipadas e áreas institucionais, quando houver a obrigatoriedade de parcelamento, conforme disposto na Lei n. 16.402 de 2016 - LPOUS.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 19, § 2º'">
				<p><b>§ 2º</b> Os novos melhoramentos viários propostos para os Projetos Estratégicos deverão promover conexões com o sistema viário existente e com os melhoramentos aprovados em Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 20'">
				<p>Art. 20. O Projeto Estratégico Detran-SP abrange os lotes 0017, 0038 e 0068 da Quadra 093, Setor 018, e a elaboração do respectivo Estudo Preliminar deverá considerar o seguinte:</p>
				<ol class="romanos">
					<li>a conveniência da permanência dos equipamentos públicos existentes;</li>
					<li>a possibilidade de remembramento dos lotes para melhor utilização da área;</li>
					<li>o cumprimento das exigências de destinação de áreas públicas, nos termos do Quadro 2 da Lei n. 16.402 de 2016 – LPUOS.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 20, Parágrafo único'">
				<p><b>Parágrafo único.</b> O loteamento poderá ser realizado em etapas, conforme a disposição do Art. 55 da Lei n. 16.402 de 2016 - LPUOS, podendo considerar para o atendimento dos percentuais mínimos de destinação institucional e sem afetação previamente definida, conforme Quadro 2 da referida lei, as áreas já ocupadas por equipamentos públicos.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 21'">
				<p><b>Art. 21.</b> O Projeto Estratégico Canindé-Portuguesa é composto por imóveis públicos e privados e corresponde à Zona de Ocupação Especial – ZOE - demarcada no Mapa 1 anexo à Lei n. 16.402 de 2016 - LPUOS, coincidente com o perímetro definido no Mapa 3 anexo a esta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 21, § 1º'">
				<p><b>§ 1º</b> Compõem o perímetro da ZOE Canindé-Portuguesa os seguintes imóveis da Quadra 103 do Setor 017:</p>
				<ol class="romanos">
					<li>o lote 0046-9, conformado pela parcela “A”, com área de 55.452,05m², pertencente ao Município de São Paulo e pela parcela “B”, com área de 45.570,00m², pertencente a Associação Portuguesa de Desportos;</li>
					<li>a parcela do lote 0045-0 da Quadra 103, Setor 017, com área de 13.158,02m².</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 21, § 2º'">
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
			<CommentsContext :id="commentId()" context="'Art. 21, § 3º'">
				<p><b>§ 3º</b> Com a finalidade de viabilizar o Projeto Estratégico Canindé-Portuguesa, fica o Município autorizado a:</p>
				<ol class="romanos">
					<li>permutar imóveis de sua propriedade inseridos no perímetro do projeto com outros que também o sejam, com objetivo de promover a regularização fundiária do Estádio do Canindé;</li>
					<li>realizar tratativas de renegociação de eventuais débitos tributários pertinentes aos imóveis envolvidos no projeto.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 21, § 4º'">
				<p><b>§ 4º</b> A dispensa de atendimento à exigência de destinação mínima de área pública estabelecida no inciso II do Artigo 169 da Lei n. 16.402 de 2016 - LPUOS somente será aplicável na hipótese de manutenção ou reconstrução do Estádio do Canindé, sendo que, em havendo a sua demolição definitiva, os parâmetros de parcelamento do solo serão os dispostos no Quadro 2 da LPUOS.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 22'">
				<p><b>Art. 22.</b> O Projeto Estratégico Canindé-Santo Antônio é composto pelo lote 0002 da Quadra 099, Setor 018, pelo lote 0039 da Quadra 103, Setor 017, pelos lotes 0019 e 0020 da Quadra 105, Setor 017, pelos lotes 0001, 0002, 0003, 0004 da Quadra 010, Setor 017 e pelo lote 0011 da Quadra 004, Setor 017, devendo a elaboração do respectivo Estudo Preliminar considerar:</p>
				<ol class="romanos">
					<li>a conveniência da permanência dos equipamentos públicos existentes;</li>
					<li>a possibilidade de remembramento dos lotes para melhor utilização da área;</li>
					<li>o desenvolvimento do Plano de Urbanização da ZEIS 1 – Favela Santo Antônio do Canindé e a constituição do respectivo Conselho Gestor;</li>
					<li>a melhoria da conectividade viária, prolongando e conectando ruas existentes, nas hipóteses em que houver exigência de parcelamento do solo.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 23'">
				<p><b>Art. 23.</b> O Projeto Estratégico Canindé-CMTC é composto pelos lotes 0013, 0016, 0017 e pela área Municipal 0001 da Quadra 091, Setor 018, e a elaboração do respectivo Estudo Preliminar deverá considerar o seguinte:</p>
				<ol class="romanos">
					<li>a conveniência da permanência dos equipamentos públicos existentes;</li>
					<li>a implantação da Rua do Canindé em sua totalidade;</li>
					<li>o prolongamento da Rua Paulino Guimarães até o limite do lote 0016 da Quadra 091, Setor 018, por ocasião do parcelamento do lote 0017 da mesma quadra;</li>
					<li>a abertura de viário no lote 0016 da Quadra 091, Setor 018 quando da implantação do viário disposto no inciso III.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 23, Parágrafo único'">
				<p><b>Parágrafo único.</b> No parcelamento do lote 0017 da Quadra 091, Setor 018, poderão ser consideradas, para fins de atendimento aos percentuais mínimos de destinação institucional e sem afetação previamente definida nos termos do Quadro 2 da Lei n. 16.402 de 2016, as áreas já ocupadas por equipamentos públicos.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 24'">
				<p><b>Art. 24.</b> Projeto Estratégico Santa Rita corresponde ao lote 0001 da Quadra 003 do Setor 026, que será subdividido em duas parcelas com a implantação do Apoio Urbano Sul, sendo a parcela “A” localizada ao norte do Apoio Urbano Sul e a parcela “B” localizada ao Sul do Apoio Urbano Sul, devendo sua elaboração considerar o seguinte:</p>
				<ol class="romanos">
					<li>o projeto de parcelamento deverá avaliar a permanência do uso institucional – Centro de Educação Infantil - CEI Dr. Anis Aidar na parcela “A”;</li>
					<li>a área de terreno onde se encontra o CEI Dr. Anis Aidar poderá ser considerada no percentual mínimo destinado à área institucional fixado no Quadro 2 da Lei n. 16.402 de 2016 - LPUOS;</li>
					<li>as áreas destinadas a sistema viário que excederem ao mínimo exigido no Quadro 2 da Lei n. 16.402 de 2016 - LPUOS poderão ser consideradas no cálculo do potencial construtivo dos lotes resultantes do parcelamento do solo.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 23, § 1º'">
				<p><b>§ 1º</b> O loteamento poderá ser realizado em etapas, conforme a disposição do Art. 55 da Lei n. 16.402 de 2016 - LPUOS.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 23, § 2º'">
				<p><b>§ 2º</b> O percentual mínimo de áreas verdes, institucionais e de sistema viário poderá ser implantado em etapas, proporcionalmente a fase implantada do projeto.</p>
			</CommentsContext>

			<h3>Seção IV - Dos Projetos Especiais</h3>
			<CommentsContext :id="commentId()" context="'Art. 25'">
				<p><b>Art. 25.</b> Ficam instituídos os Projetos Especiais Elevado João Goulart, Parque Dom Pedro II e Largo da Concórdia, demarcados no Mapa 8 desta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 25, § 1º'">
				<p><b>§ 1º</b> O desenvolvimento e a implementação dos Projetos Especiais será coordenado pela São Paulo Urbanismo e deverá abranger, no mínimo:</p>
				<ol class="romanos">
					<li>elaboração de diagnóstico;</li>
					<li>consulta aos órgãos públicos pertinentes acerca dos elementos a serem considerados na elaboração das propostas;</li>
					<li>propostas de intervenção nesses espaços;</li>
					<li>formas de participação social.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 25, § 2º'">
				<p><b>§ 2º</b> O Projeto Especial Elevado João Goulart deverá considerar as disposições da legislação específica de que trata o parágrafo único do Art. 375 da Lei n. 16.050 de 2014 – PDE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 25, § 3º'">
				<p><b>§ 3º</b> A Secretaria Municipal de Desenvolvimento Urbano - SMDU deverá demandar o início do desenvolvimento e da implementação dos Projetos Especiais, podendo prever a realização de chamamentos públicos para a recepção de propostas de intervenção e a possibilidade de utilização de recursos do PIU-SCE.</p>
			</CommentsContext>

			<h3>Seção V - Das Zonas de Ocupação Especial</h3>
			<CommentsContext :id="commentId()" context="'Art. 26'">
				<p><b>Art. 26.</b> As Zonas de Ocupação Especial - ZOE contidas na AIU-SCE são assim denominadas:</p>
				<ol class="romanos">
					<li>ZOE Canindé;</li>
					<li>ZOE Júlio Prestes;</li>
					<li>ZOE Estação Sorocabana;</li>
					<li>ZOE Pátio do Brás;</li>
					<li>ZOE Teatro Oficina.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 27'">
				<p><b>Art. 27.</b> Aplicam-se às ZOE contidas no perímetro do PIU-SCE:</p>
				<ol class="romanos">
					<li>os parâmetros urbanísticos previstos nesta Lei segundo as áreas em que se situam, indicadas nos Mapas 3 e 4 e nos Quadros 2 e 3, complementados pelos parâmetros definidos para a Zona Eixo de Estruturação da Transformação Urbana - ZEU nos Quadros 2A e 3 da Lei n. 16.402 de 2016 - LPUOS.</li>
					<li>
						os usos permitidos e condições de instalação definidos nos Quadros 4 e 4A da Lei n. 16.402 de 2016:
						<ol class="minusculas">
							<li>de Zona Eixo da Estruturação da Transformação Urbana - ZEU para a ZOE Pátio do Brás;</li>
							<li>de Zona de Centralidade - ZC para às ZOE Júlio Prestes, ZOE Estação Sorocabana e ZOE Teatro Oficina;</li>
							<li>de Zona Mista - ZM para a ZOE Canindé.</li>
						</ol>
					</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 27, Parágrafo único'">
				<p><b>Parágrafo único.</b> Na ZOE Canindé o potencial construtivo totalestá limitado a 300.000 m² (trezentos mil metros quadrados) de área construída computável, nos termos do Inciso II do Art. 169 da Lei n. 16.402 de 2016 – LPUOS.</p>
			</CommentsContext>
		</section>

		<section>
			<h2 class="titulo" indent="1">Capítulo III - Do Programa de Intervenções</h2>
			<CommentsContext :id="commentId()" context="'Art. 28'">
				<p><b>Art. 28.</b> Para o alcance dos objetivos desta Lei, o Programa de Intervenções do PIU-SCE compreende intervenções específicas e direcionadas no território e intervenções difusas de gestão dos espaços e serviços públicos disponíveis na AIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 29'">
				<p><b>Art. 29.</b> Compõem o conjunto de intervenções específicas territorializadas no PIU-SCE:</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 29, ponto I'">
				<ol class="romanos" start="1">
					<li>
						<p>a execução das intervenções relacionadas no Quadro 1B e indicadas no Mapa 7 desta Lei, abrangendo:</p>
						<ol class="minusculas">
							<li>Implantação de novas áreas verdes e requalificação de áreas verdes existentes;</li>
							<li>Qualificação da arborização urbana, pela implantação ou recomposição de caminhos verdes;</li>
							<li>Requalificação de logradouros, podendo abranger melhorias de passeios, de pavimento, de arborização urbana e paisagismo, de acessibilidade e de mobiliário urbano, o reordenamento de sinalização viária horizontal, vertical e semafórica, correções geométricas, ciclovias e ciclofaixas e soluções não estruturais de drenagem;</li>
							<li>Implantação de equipamentos públicos, indicados no Quadro 1B ou outros que venham a ser propostos para as mesmas finalidades ou, adicionalmente, que se mostrem necessários em resposta ao adensamento populacional e à mitigação da vulnerabilidade social da região, requalificação dos equipamentos existentes e aquisição de terrenos para essas finalidades;</li>
						</ol>
					</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 29, ponto II'">
				<ol class="romanos" start="2">
					<li><p>a aquisição, restauração e reconversão das antigas instalações da Fábrica Orion, correspondente ao lote 0001, da quadra 018 do Setor Fiscal 026, para abrigar equipamento público necessário à qualificação de vizinhanças habitacionais;</p></li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 29, ponto III'">
				<ol class="romanos" start="3">
					<li><p>a reconversão da Antiga Garagem de Bondes da Light, correspondente aos Lotes 0002-9 e 0044-4, da Quadra 055 do Setor Fiscal 025, para implantação de equipamento público;</p></li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 29, ponto IV'">
				<ol class="romanos" start="4">
					<li><p>a implantação de equipamentos públicos necessários ao atendimento da demanda decorrente do adensamento populacional, à mitigação da vulnerabilidade social e à qualificação da região e a aquisição de terrenos para essas finalidades;</p></li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 29, ponto V'">
				<ol class="romanos" start="5">
					<li><p>a aquisição de imóveis, preferencialmente lotes isolados de pequenas dimensões, não passíveis de aproveitamento para as finalidades do PIU-SCE, para ampliação da oferta de áreas verdes e espaços de fruição pública em vizinhanças caracterizadas por precariedade ambiental;</p></li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 29, ponto VI'">
				<ol class="romanos" start="6">
					<li>
						<p>o desenvolvimento de estudos para subsidiar intervenções de melhorias das condições de circulação e mobilidade ativa na AIU-SCE, podendo abranger:</p>
						<ol class="minusculas">
							<li>Elaboração do plano de segurança viária para pedestres, considerados os pontos críticos de acidentes;</li>
							<li>Projeto de gestão do meio-fio para atendimento aos diversos modos de deslocamento, ativos e motorizados, nas áreas de maior circulação de pedestres;</li>
							<li>Estudos para a definição de critérios e delimitação de áreas de restrição de estacionamento de automóveis no Setor Centro Histórico e para a reorganização da oferta de áreas de estacionamento na área de influência de Polos Comerciais;</li>
							<li>Estudos para implantação de linha circular para atendimento das áreas de concentração comercial;</li>
							<li>Estudos de viabilidade econômica para a construção e concessão da exploração econômica de edifícios-garagem, com usos associados.</li>
						</ol>
					</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 29, ponto VII'">
				<ol class="romanos" start="7">
					<li>
						<p>a implementação dos programas de atendimento habitacional, incluindo entre outros itens de investimentos:</p>
						<ol class="minusculas">
							<li>Elaboração de estudos técnicos necessários ao planejamento do atendimento habitacional da população em situação de vulnerabilidade residente na AIU-SCE ou no âmbito de seus perímetros expandidos;</li>
							<li>Elaboração de censo de cortiços e de demais formas de precariedade habitacional e de vulnerabilidade social;</li>
							<li>Aquisição de imóveis ou terrenos para subsídio à produção habitacional de interesse social;</li>
							<li>Disponibilização de recursos para viabilizar o aproveitamento de imóveis ofertados à Municipalidade por meio de Consórcio Imobiliário;</li>
							<li>Produção ou aquisição de imóveis para a constituição de parque público de habitação;</li>
							<li>Alienação de imóveis públicos para associações, cooperativas e demais entidades sem fins lucrativos, para fins de provisão de moradia;</li>
							<li>Os serviços técnicos necessários para dar suporte às intervenções, podendo abranger elaboração de projetos, execução de obra, realização de serviços técnicos especializados de trabalho social, regularização fundiária e gestão ambiental;</li>
							<li>O atendimento habitacional transitório decorrente das ações constantes do Programa de Intervenções do PIU-SCE.</li>
						</ol>
					</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 29, ponto VIII'">
				<ol class="romanos" start="8">
					<li>
						<p>as ações de preservação do patrimônio histórico, ambiental e cultural, podendo abranger:</p>
						<ol class="minusculas">
							<li>subsídio à restauração e à readequação de edificações de interesse histórico públicas ou privadas;</li>
							<li>requalificação de bens e espaços públicos;</li>
							<li>realização de Inventário Participativo das Referências Culturais (IPRC) do PIU-SCE, para fins de levantamento e identificação do patrimônio cultural de natureza material e imaterial do respectivo perímetro.</li>
						</ol>
					</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 29, ponto IX'">
				<ol class="romanos" start="9">
					<li><p>a desapropriação de imóveis, inclusive para posterior revenda, necessários à implantação dos Projetos Estratégicos e ao Programa de Intervenções previstos nesta Lei.</p></li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 29, Parágrafo único'">
				<p><b>Parágrafo único.</b> As intervenções específicas e direcionadas no território do PIU-SCE deverão ser incluídas nas Propostas de Diretrizes de Investimetos - PDI e custeadas pelos recursos arrecadados em conta segregada da AIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 30'">
				<p><b>Art. 30.</b> As intervenções difusas de gestão dos espaços e serviços públicos disponíveis na AIU-SCE serão viabilizadas por meio de contratos de parceria ou outros ajustes que se façam necessários à cooperação e interação entre a administração pública municipal e interessados privados com a finalidade de garantir a gestão efetiva e eficiente da infraestrutura urbana do PIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 30, Parágrafo único'">
				<p><b>Parágrafo único.</b> Para o cumprimento das finalidades previstas no “caput”, deverão ser considerados, dentre outros, os seguintes serviços públicos:</p>
				<ol class="romanos">
					<li>a conservação de áreas públicas;</li>
					<li>a limpeza, manutenção e conservação do sistema de drenagem;</li>
					<li>a iluminação pública cenográfica;</li>
					<li>a implantação de rede de mobilidade sobre trilhos;</li>
					<li>a implantação de sistema de infraestrutura para rede de dados e informação voltados à segurança pública;</li>
					<li>a promoção de ações culturais e assistenciais voltadas às populações em situação de vulnerabilidade social.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 31'">
				<p><b>Art. 31.</b> Para fins da implantação do Projeto de Intervenção Urbana do Setor Central, integram o Programa de Intervenções as despesas decorrentes da estruturação, gerenciamento e administração de projetos e obras a este relacionados.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 32'">
				<p><b>Art. 32.</b> Ficam aprovados melhoramentos viários, inclusive as concordâncias viárias entre os alargamentos, as aberturas de vias, as reconfigurações geométricas e demais compatibilizações e ligações viárias, nos distritos Bom Retiro, Pari, Vila Guilherme, Belém, Brás e Sé, constantes nas plantas 26.999/00 a 26.999/14, classificação S-1.227 do arquivo da Superintendência de Projetos Viários – PROJ-3, da Secretaria Municipal de Infraestrutura Urbana e Obras - SIURB ou no Quadro 1D, integrantes desta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 33'">
				<p><b>Art. 33.</b> Poderão ser destinados recursos para subsídio da implantação de melhoramentos viários aprovados em Lei, compreendidos na AIU-SCE e convergentes com os objetivos do PIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 33, Parágrafo único'">
				<p><b>Parágrafo único.</b> Fica o Poder Público autorizado a receber, a título de doação, as áreas necessárias à implantação do Programa de Intervenção do PIU-SCE, bem como as áreas atingidas pelos melhoramentos viários previstos no “caput”, aplicando-se os incentivos compensatórios previstos nesta lei.</p>
			</CommentsContext>
		</section>

		<section>
			<h2 class="titulo" indent="1">Capítulo IV - Dos instrumentos de qualificação e transformação do teritório</h2>
			<CommentsContext :id="commentId()" context="'Art. 34'">
				<p><b>Art. 34.</b> Os Instrumentos de Qualificação e Transformação do Território trazidos nesta Lei consistem no conjunto de instrumentos necessários à efetivação dos princípios e objetivos da Lei n. 16.050 de 2014 - PDE para a região central do Município e dos demais objetivos específicos do PIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 34, Parágrafo único'">
				<p><b>Parágrafo único.</b> As intervenções na AIU-SCE poderão conjugar a utilização de dois ou mais Instrumentos de Qualificação e Transformação do Território para a consecução das finalidades desta Lei.</p>
			</CommentsContext>

			<h3>Seção I - Dos instrumentos de incentivos urbanísticos e edílicos</h3>

			<h4>Subseção I – Reconstrução</h4>
			<CommentsContext :id="commentId()" context="'Art. 35'">
				<p><b>Art. 35.</b> Fica garantido ao proprietário de edificação regular localizada no Setor Centro Histórico da AIU-SCE que venha a ser demolida para a implantação de nova construção, de uso misto com predominância residencial e fachada ativa, o direito de utilização dos parâmetros de uso e ocupação do solo do edifício demolido, inclusive recuos.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 35, § 1º'">
				<p><b>§ 1º</b> Os projetos que se beneficiarem do disposto neste artigo:</p>
				<ol class="romanos">
					<li>estarão dispensados do pagamento de outorga onerosa de potencial construtivo adicional até os limites anteriormente edificados na data do pedido de licenciamento;</li>
					<li>deverão prever a destinação do pavimento térreo a áreas de fruição pública e a atividades não residenciais de âmbito local, com acesso para a via pública;</li>
					<li>contarão com, no máximo, o número de vagas de garagem originalmente existentes no edifício demolido.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 35, § 2º'">
				<p><b>§ 2º</b> Na reconstrução, devem ser atendidas as condições de segurança de uso e de acessibilidade de acordo com o estabelecido na legislação edilícia.</p>
			</CommentsContext>

			<h4>Subseção II – Requalificação de edificações</h4>
			<CommentsContext :id="commentId()" context="'Art. 36'">
				<p><b>Art. 36.</b> Os projetos de requalificação de edificações regulares aprovados até a data de aprovação desta Lei não estarão sujeitos aos coeficientes de aproveitamento máximos incidentes sobre o imóvel, independentemente da destinação, desde que mantida a volumetria original da edificação, admitidas estruturas adicionais propostas para garantia da segurança da edificação.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 36, Parágrafo único'">
				<p><b>Parágrafo único.</b> Considerando a antiguidade do parque imobiliário edificado na AIU-SCE, aprovado segundo legislações edilícias diversas, ato do Executivo poderá criar, no âmbito da Secretaria Municipal de Licenciamento - SEL, um grupo especial de análise de pedidos de licenciamento com a finalidade de promover a integração dos procedimentos de aprovação.</p>
			</CommentsContext>

			<h4>Subseção III - Regularização onerosa de construções</h4>
			<CommentsContext :id="commentId()" context="'Art. 37'">
				<p><b>Art. 37.</b> Os proprietários de imóveis contidos na AIU-SCE poderão apresentar propostas relativas a regularização de construções, reformas ou ampliações executadas em desacordo com a legislação vigente e concluídas até a data de publicação desta Lei, sendo autorizadas:</p>
				<ol class="romanos">
					<li>obras de adequação para atendimento às condições de higiene, segurança de uso, acessibilidade, estabilidade, habitabilidade, salubridade e enquadramento da edificação na legislação específica;</li>
					<li>regularização de parâmetros urbanísticos que apresentemde desconformidade em relação aos limites previstos na legislação vigente.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 37, Parágrafo único'">
				<p><b>Parágrafo único.</b> Não se aplicam ao regramento de regularização previsto nesta Lei as disposições trazidas pela Lei Municipal de Anistia das Edificações Irregulares.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 38'">
				<p><b>Art. 38.</b> A concessão do benefício previsto no artigo anterior está condicionada à anuência da Secretaria Municipal de Licenciamento – SEL, que indicará as desconformidades e as medidas mitigadoras exigidas para fins da regularização pretendida, considerados os parâmetros de incomodidade, as condições de mobilidade e acessibilidade veicular e a exigências decorrentes de Estudo de Impacto de Vizinhança (EIV) nos casos exigidos pela legislação.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 39'">
				<p><b>Art. 39.</b> As edificações que descumpriram o percentual de permeabilidade exigido na lei vigente serão passíveis de regularização, desde que atendam, alternativamente, à:</p>
				<ol class="romanos">
					<li>reserva de, no mínimo, 15% (quinze por cento) da área do terreno permeável;</li>
					<li>
						<p>construção de reservatório dimensionado de acordo com a fórmula: <pre class="formula inline">V = (0,15 × S - Sp) × IP × t</pre>, onde:<br>
						<pre class="formula declara">V</pre> = volume do dispositivo adotado;<br>
						<pre class="formula declara">S</pre> = área total do terreno;<br>
						<pre class="formula declara">Sp</pre> = área do terreno livre de pavimentação ou construção;<br>
						<pre class="formula declara">IP</pre> = índice pluviométrico igual a 0,06m/hora;<br>
						<pre class="formula declara">t</pre> = tempo de duração da chuva igual a 1 (uma) hora.</p>
					</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 40'">
				<p><b>Art. 40.</b> A regularização das edificações com área construída computável não declarada será condicionada ao recolhimento de outorga onerosa, que incidirá somente sobre a área construída computável a regularizar.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 40, § 1º'">
				<p><b>§ 1º</b> A contrapartida financeira relativa à outorga onerosa de potencial construtivo adicional para fins de regularização onerosa será calculada pela fórmula do trazida no art. 117, caput, da Lei 16.050 de 2014 - PDE multiplicada pelo Fator de Regularização (F<sub>R</sub>): <pre class="formula inline">FR = (CA<sub style="font-style: normal;">𝑒𝑓</sub> ∕ CA<sub>max</sub> + 0,2)</pre>, onde:<br>
				<pre class="formula declara">CA<sub style="font-style: normal;">𝑒𝑓</sub></pre> = Coeficiente de Aproveitamento Efetivo do Lote;<br>
				<pre class="formula declara">CA<sub>max</sub></pre> = Coeficiente de Aproveitamento máximo do lote.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 40, § 2º'">
				<p><b>§ 2º</b> O Coeficiente de Aproveitamento Efetivo do Lote corresponde à razão entre a área construída computável existente, descontadas as áreas não computáveis calculadas nos termos desta Lei, e a área do lote.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 40, § 3º'">
				<p><b>§ 3º</b> Na hipótese de pedidos de regularização de edificações situadas na Área de Qualificação Q2, aplicam-se as seguintes disposições:</p>
				<ol class="romanos">
					<li>I - para edificações de uso misto que atendam às exigências da nota a do Quadro 2 - Fatores de Planejamento, Parâmetros de Ocupação Exceto Quota Ambiental, será adotado o Coeficiente de Aproveitamento máximo igual a 4 (quatro);</li>
					<li>para edificações de uso misto não enquadradas no inciso I ou para edificações exclusivamente residenciais ou não residenciais, será adotado o Coeficiente de Aproveitamento máximo igual a 2 (dois).</li>
				</ol>
			</CommentsContext>

			<h3>Seção II – Dos instrumentos indutores da função social da propriedade</h3>
			<CommentsContext :id="commentId()" context="'Art. 41'">
				<p><b>Art. 41.</b> O Executivo, na forma da lei, poderá exigir do proprietário do solo urbano não edificado, subutilizado, ou não utilizado, que promova seu adequado aproveitamento, sob pena de, nos termos estabelecidos na Lei 16.050 de 2014 – PDE e nesta Lei:</p>
				<ol class="romanos">
					<li>Parcelamento, edificação ou utilização compulsórios - PEUC;</li>
					<li>Imposto Predial e Territorial Urbano Progressivo no Tempo;</li>
					<li>Desapropriação com pagamento mediante títulos da dívida pública;</li>
					<li>Desapropriação urbanística, com indenização realizada por adquirentes do imóvel em hasta pública.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 41, § 1º'">
				<p><b>§ 1º</b> O Poder Público promoverá a classificação dos imóveis passíveis de notificação para o PEUC ou já notificados na AIU-SCE com a finalidade de orientar a aplicação dos instrumentos previstos no “caput” em consonância com as ações do Programa de Intervenções do PIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 41, § 2º'">
				<p><b>§ 2º</b> A classificação indicada no parágrafo anterior seguirá, no mínimo, os critérios a seguir elencados:</p>
				<ol class="romanos">
					<li>imóveis necessários à implantação de projetos urbanísticos;</li>
					<li>imóveis públicos ou privados ocupados por movimento de moradia;</li>
					<li>tipologias edilícias compatíveis ou adaptáveis à implantação de unidades de habitação de interesse social, incluindo aquelas passíveis de receber uso misto;</li>
					<li>imóveis com irregularidades fundiárias;</li>
					<li>imóveis com regularidade ou precariedade edilícia;</li>
					<li>imóveis inscritos no cadastro da Dívida Ativa do Município de São Paulo.</li>
				</ol>
			</CommentsContext>

			<h4>Subseção I – Parcelamento, edificação ou utilização compulsórios</h4>
			<CommentsContext :id="commentId()" context="'Art. 42'">
				<p><b>Art. 42.</b> São considerados passíveis de aplicação dos instrumentos indutores da função social da propriedade os imóveis não edificados, subutilizados, ou não utilizados localizados na AIU-SCE, nos termos estabelecidos pela Lei 16.050 de 2014 - PDE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 42, § 1º'">
				<p><b>§ 1º</b> Em função da especificidade do território do PIU-SCE e com a finalidade de incentivar a produção habitacional de interesse social, para os imóveis contidos no Setor Centro Histórico ou em Zonas Especiais de Interesse Social na AIU-SCE, o coeficiente de aproveitamento mínimo para fins de aplicação do PEUC será igual ao Coeficiente de Aproveitamento básico com valor de 1,0 (um) conforme estabelecido no Quadro 3 da Lei Municipal n. 16.402 de 2016.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 42, § 2º'">
				<p><b>§ 2º</b> O Poder Público notificará proprietários de imóveis não edificados, subutilizados, ou não utilizados nos termos e condições do §1º.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 43'">
				<p><b>Art. 43.</b> São estratégias cabíveis ao aproveitamento dos imóveis gravados como descumpridores da função social da propriedade na AIU-SCE e notificados pelo PEUC, dentre outras:</p>
				<ol class="romanos">
					<li>a promoção de chamamentos públicos para a realização de consórcio imobiliário com a finalidade de implantação de unidades de habitação de interesse social;</li>
					<li>a realização de desapropriação amigável em caso de imóveis inscritos no cadastro da Dívida Ativa do Município de São Paulo para tributos imobiliários, podendo estipulatr abatimento do valor devido ao Erário;</li>
					<li>a promoção de desapropriação do imóvel quando o valor da dívida rela􀆟va ao IPTU supere o valor do imóvel, nos termos do Art. 99, § 5º da Lei 16.050 de 2014 - PDE;</li>
					<li>a utilização do procedimento de regularização fundiária urbana previsto na Lei Federal n. 13.465 de 2017, bem como de processos conjuntos de regularização fundiária e edilícia mediante contrapartida de interesse público;</li>
					<li>a desapropriação por hasta pública de imóveis elegíveis ao procedimento, nos termos previstos nesta Lei.</li>
				</ol>
			</CommentsContext>

			<h4>Subseção II - Desapropriação por hasta pública</h4>
			<CommentsContext :id="commentId()" context="'Art. 44'">
				<p><b>Art. 44.</b> O Poder Público municipal, com base no Art. 4º e no Art. 5º, alínea “i” do Decreto-Lei Federal n. 3.365 de 1941, poderá promover a desapropriação por hasta pública de imóveis notificados como descumpridores da função social da propriedade, para a implantação do PIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 44, § 1º'">
				<p><b>§ 1º</b> A efetivação do instrumento previsto no “caput”, mediante expedição de decreto de utilidade pública e edital específicos, somente será possível após o esgotamento dos prazos previstos no Art. 96 da Lei 16.050 de 2014 – PDE para o adequado aproveitamento do imóvel notificado.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 44, § 2º'">
				<p><b>§ 2º</b> O decreto de utilidade pública para a desapropriação por hasta pública fixará as razões da desapropriação e a destinação urbanística vinculada aos objetivos do PIU-SCE para os imóveis desapropriados.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 44, § 3º'">
				<p><b>§ 3º</b> O edital de hasta pública conterá, no mínimo, as seguintes disposições:</p>
				<ol class="romanos">
					<li>valor da avaliação administrativa do bem;</li>
					<li>prazo para aproveitamento do imóvel;</li>
					<li>condições de liquidação;</li>
					<li>estipulação de sanções a serem aplicadas pelo descumprimento das obrigações.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 45'">
				<p><b>Art. 45.</b> A carta de arrematação expedida em favor do arrematante pela entidade pública expropriante constituirá título hábil para o registro imobiliário da alienação.</p>
			</CommentsContext>

			<h4>Subseção III - Consórcio Imobiliário</h4>
			<CommentsContext :id="commentId()" context="'Art. 46'">
				<p><b>Art. 46.</b> O Consórcio Imobiliário, previsto pelo Art. 102 e seguintes da Lei 16.050 de 2014 – PDE, poderá ser usado na implantação do PIU-SCE, observando-se, no mínimo, a:</p>
				<ol class="romanos">
					<li>seleção de tipologias edilícias que apresentem viabilidade de adaptação ou edificação para o uso habitacional de interesse social, com base na classificação prevista no Art. 38 desta Lei;</li>
					<li>
						promoção de Chamamentos Públicos para as seguintes ações:
						<ol class="minusculas">
							<li>Construções Novas em imóveis não edificados ou subutilizados;</li>
							<li>Reforma ou Requalificação de Edificações Existentes;</li>
						</ol>
					</li>
					<li>
						definição de índices e fórmulas de cálculo, a serem regulamentados pelo Poder Executivo, contendo no mínimo:
						<ol class="minusculas">
							<li>Valor da Unidade Habitacional para fins de cálculo da permuta;</li>
							<li>Valor dos bens imóveis a serem ofertados ao consorciante privado, com previsão de atualização referente ao tempo decorrido desde a disponibilização do imóvel até a entrega da obra;</li>
							<li>Valor da área não residencial das edificações construídas por intermédio do Consórcio Imobiliário;</li>
							<li>Indicador para avaliação do custo benefício do empreendimento, que compreenda a relação entre o valor do terreno, o valor do investimento a ser feito pela Admiministração Municipal, quantidade de unidades habitacionais previstas e o valor dos imóveis entregues ao consorciante privado.</li>
						</ol>
					</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 47'">
				<p><b>Art. 47.</b> Fica autorizado ao Poder Público promover chamamentos públicos para fins de operacionalização de consórcios imobiliários, nos termos do Art. 102, § 6º da Lei n. 16.050 de 2014, devendo facilitar a aproximação entre proprietários de imóveis notificados para o PEUC e agentes econômicos interessados em empreendimentos imobiliários, respeitados os princípios que regem a administração pública.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 47, Parágrafo único'">
				<p><b>Parágrafo único.</b> Os editais de chamamento público para fins de celebração de consórcio imobiliário deverão indicar, no mínimo, a destinação futura dos imóveis, os critérios de elegibilidade destes e a a possibilidade participação de agente econômico privado, quando for o caso.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 48'">
				<p><b>Art. 48.</b> Em se tratando da realização de consórcios imobiliários promovidos por iniciativa do Poder Público, deverão ser indicados, previamente ao Chamamento Público, os recursos que comporão os custos do projeto e da obra.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 48, Parágrafo único'">
				<p><b>Parágrafo único.</b> Para a promoção do Consórcio Imobiliário, o Poder Público poderá utilizar recursos da conta segregada da AIU-SCE, bem como dos demais fundos municipais com atuação na transformação e requalificação do território para fins urbanísticos, ambientais e habitacionais.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 49'">
				<p><b>Art. 49.</b> Independentemente da realização de chamamentos públicos, os proprietários de imóveis sujeitos a Imposto Predial e Territorial Urbano Progressivo em que já haja cobrança de alíquota majorada do tributo poderão propor ao Poder Público a realização de consórcios imobiliários.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 49, Parágrafo único'">
				<p><b>Parágrafo único.</b> O Poder Público decidirá, fundamentadamente, sobre a possibilidade de realização de consórcio imobiliário a partir da oferta prevista no "caput".</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 50'">
				<p><b>Art. 50.</b> Para fins de realização de consórcio imobiliário na AIU-SCE, o Poder Público deverá priorizar:</p>
				<ol class="romanos">
					<li>imóveis inscritos na dívida ativa do município para fins de ressarcimento da Administração Pública;</li>
					<li>imóveis de outros entes públicos, ante a possibilidade de reversão de unidades habitacionais aos programas de habitação de interesse social do Município de São Paulo;</li>
					<li>imóveis não edificados ou subutilizados que permitam a obtenção de quantidade significativa de unidades habitacionais, nos termos do indicador previsto no inciso III do Art. 43 desta Lei.</li>
				</ol>
			</CommentsContext>

			<h4>Subseção IV - Arrecadação de bens abandonados</h4>
			<CommentsContext :id="commentId()" context="'Art. 51'">
				<p><b>Art. 51.</b> Os imóveis urbanos privados abandonados, localizados na área de abrangência do PIU-SCE, cujos proprietários não possuam a intenção de conservá-los em seu patrimônio ficam sujeitos à arrecadação pelo Município, na condição de bem vago, nos termos da regulamentação conferida pelo Art. 108 e seguintes Lei 16.050 de 2014 - PDE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 51, § 1º'">
				<p><b>§ 1º</b> A intenção referida no caput deste artigo será presumida quando o proprietário, cessados os atos de posse sobre o imóvel, não adimplir os ônus fiscais instituídos sobre a propriedade predial e territorial urbana, por cinco anos.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 51, § 2º'">
				<p><b>§ 2º</b> Aplicam-se suplementarmente às disposições municipais sobre o tema, as hipóteses previstas na Lei Federal n. 13.465 de 2017 e Lei Federal n. 10.406 de 2002.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 51, § 3º'">
				<p><b>§ 3º</b> Respeitado o procedimento de arrecadação, o Município poderá realizar, diretamente ou por meio de terceiros, os investimentos necessários para que o imóvel urbano arrecadado atinja prontamente os objetivos sociais a que se destina.</p>
			</CommentsContext>

			<h3>Seção III – Dos Instrumentos de Regularização Fundiária</h3>
			<CommentsContext :id="commentId()" context="'Art. 52'">
				<p><b>Art. 52.</b> Poderá o Poder Público valer-se dos instrumentos, objetivos e procedimentos de Regularização Fundiária Urbana (Reurb), inclusive de legitimação fundiária em imóveis públicos ou privados, constantes na Lei Federal n. 13.465 de 2017 para fins de consecução dos objetivos específicos do PIU-SCE.</p>
			</CommentsContext>

			<h3>Seção IV - Dos instrumentos referentes à utilização do potencial construtivo adicional</h3>
			<CommentsContext :id="commentId()" context="'Art. 53'">
				<p><b>Art. 53.</b> O potencial construtivo adicional do PIU SCE será outorgado por meio dos seguintes instrumentos de política urbana:</p>
				<ol class="romanos">
					<li>Outorga Onerosa do Direito de Construir;</li>
					<li>Transferência do Direito de Construir;</li>
					<li>
						Bônus Equivalente concedido em decorrência:
						<ol class="minusculas">
							<li>da produção de HIS-1;</li>
							<li>da requalificação de edificações construídas até o ano de 1980 para novos usos;</li>
							<li>da execução de ações de preservação e recuperação de edificações de grande porte classificadas como ZEPEC-BIR.</li>
						</ol>
					</li>
					<li>incentivos concedidos em razão de contrapartidas urbanísticas ofertadas nos termos desta Lei.</li>
				</ol>
			</CommentsContext>

			<h4>Subseção I - Da Transferência do Direito de Construir</h4>
			<CommentsContext :id="commentId()" context="'Art. 54'">
				<p><b>Art. 54.</b> Aplica-se à AIU-SCE a Transferência do Direito de Construir, regida pelos Arts. 122 a 133 da Lei n. 16.050 de 2014 – PDE e pelos Artigos 24 a 26 da Lei n. 16.402 de 2016 – LPUOS.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 55'">
				<p><b>Art. 55.</b> Para efeito do cálculo previsto no Art. 125 da Lei n. 16.050 de 2014 – PDE, os imóveis classificados como ZEPEC-BIR, localizados na AIU-SCE e no âmbito dos perímetros de tombamento do Bairro da Bela Vista e do perímetro do Inventário Geral do Patrimônio Ambiental, Cultural e Urbano de São Paulo do Bairro da Liberdade – IGEPAC-Liberdade, quando da emissão de declarações de potencial construtivo passível de transferência, serão adotados os seguintes Fatores de Incentivo (Fi):</p>
				<ol class="romanos">
					<li>2,8 para imóveis com área de lote de até 300m² (trezentos metros quadrados);</li>
					<li>2,0 para imóveis com área de lote superior a 300m² (trezentos metros quadrados) até 600m² (seiscentos metros quadrados);</li>
					<li>1,8 para imóveis com área de lote superior a 600m² (seiscentos metros quadrados) até 1.200m² (hum mil e duzentos metros quadrados);</li>
					<li>1,5 para imóveis com área de lote superior a 1.200m² (hum mil e duzentos metros quadrados) até 2.400m² (dois mil e quatrocentos metros quadrados);</li>
					<li>1,3 para imóveis com área de lote superior a 2.400m² (dois mil e quatrocentos metros quadrados) até 5.000m² (cinco mil metros quadrados);</li>
					<li>1,0 para imóveis com área de lote superior a 5.000m² (cinco mil metros quadrados) até 10.000m² (dez mil metros quadrados);</li>
					<li>0,9 para imóveis com área de lote superior a 10.000m² (dez mil metros quadrados) até 20.000m² (vinte mil metros quadrados);</li>
					<li>0,6 para imóveis com área de lote superior a 20.000m² (vinte mil metros quadrados) até 50.000m² (cinquenta mil metros quadrados);</li>
					<li>0,3 para imóveis com área de lote superior a 50.000m² (cinquenta mil metros quadrados).</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 55, § 1º'">
				<p><b>§ 1º</b> A utilização dos Fatores de Incentivo relacionado no “caput” não se aplica às declarações de potencial construtivo passível de transferência que tenham por objeto Áreas de Proteção Cultural – ZEPEC-APC, cabendo neste caso a utilização dos fatores de incentivo trazidos no Art. 24 da Lei n. 16.402 de 2016.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 55, § 2º'">
				<p><b>§ 2º</b> O controle da Transferência do Direito de Construir será realizado pela Coordenadoria de Legislação, Uso e Ocupação do Solo – DEUSO da Secretaria Municipal de Desenvolvimento Urbano - SMDU que expedirá, mediante requerimento, Declaração de Potencial Construtivo Passível de Transferência e Certidão de Transferência de Potencial Construtivo.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 56'">
				<p><b>Art. 56.</b> Aos imóveis classificados como ZEPEC-BIR que já tenham obtido Declaração de Potencial Construtivo Passível de Transferência nos termos do Art. 7º da Lei nº 12.349, de 1997, a transferência para fora do perímetro da AIU-SCE ficará limitada ao potencial construtivo calculado pela aplicação da fórmula prevista no Art. 125 do PDE, adotando-se os fatores de incentivo trazidos no Art. 52 desta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 56, § 1º'">
				<p><b>§ 1º</b> Eventual saldo remanescente de Potencial Construtivo Passível de Transferência, deduzido o montante calculado nos termos do “caput”, poderá ser transferido somente a imóveis receptores da AIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 56, § 2º'">
				<p><b>§ 2º</b> A transferência de potencial construtivo para fora do perímetro da Operação Urbana Centro, já efetivada nos termos da Lei n. 12.349 de 1997, é computada para fins de aplicação do “caput”.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 57'">
				<p><b>Art. 57.</b> Os imóveis enquadrados em ZEPEC–BIR, para os quais já tenha sido emitida Declaração de Potencial Construtivo Passível de Transferência, nos casos de reforma com acréscimo de área construída, deverão observar as seguintes disposições:</p>
				<ol class="romanos">
					<li>caso a Declaração tenha sido emitida nos termos do Art. 7º da Lei nº 12.349, de 1997 ou de legislação anterior à Lei 16.050 de 31 de julho de 2014 - PDE, o acréscimo de área construída deverá ser descontado do potencial construtivo constante na correspondente Declaração;</li>
					<li>
						caso a Declaração seja emitida nos termos desta Lei:
						<ol class="minusculas">
							<li>o acréscimo de área construída não será descontado do potencial construtivo constante da Declaração quando limitado ao Coeficiente de Aproveitamento básico estabelecido na legislação de uso e ocupação do solo;</li>
							<li>o acréscimo de área construída acima do CA básico estabelecido na lei nº 16.402, de 2016 poderá ser descontado do potencial construtivo constante da Declaração ou ser adquirido mediante pagamento da contrapartida de Outorga Onerosa do Direito de Construir.</li>
						</ol>
					</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 57, § 1º'">
				<p><b>§ 1º</b> A utilização do potencial construtivo constante da correspondente Declaração será permitida no próprio lote mediante apresentação de projeto de conservação e restauro do imóvel, aprovado pelos órgãos de preservação competentes.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 57, § 2º'">
				<p><b>§ 2º</b> Para a efetivação dos descontos mencionados neste artigo, o órgão responsável pelo licenciamento da reforma deverá encaminhar o respectivo processo à Coordenadoria de Legislação de Uso e Ocupação do Solo - DEUSO da Secretaria Municipal de desenvolvimento Urbano - SMDU, para que a área acrescida seja descontada do potencial construtivo passível de transferência, por meio da emissão da respectiva Declaração de Saldo de Potencial Construtivo Passível de Transferência.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 58'">
				<p><b>Art. 58.</b> Para incentivar a preservação de imóveis tombados de pequeno porte, os empreendimentos que adquirirem potencial construtivo adicional gerado a partir da Transferência do Direito de Construir de pelo menos 3 (três) imóveis classificados como ZEPEC-BIR, com área de lote de até 600 m² (seiscentos mil metros quadrados) cada, localizados na AIU-SCE ou nas áreas delimitadas nas resoluções de tombamento dos Bairros da Liberdade e da Bela Vista, terão direito a uma área construída adicional, isenta de contrapartida, calculada nos seguintes termos:</p>
				<ol class="romanos">
					<li>10% (dez por cento) da área do terreno receptor, para o empreendimento que adquirir, simultaneamente, potencial construtivo de 03 (três) imóveis tombados;</li>
					<li> 20% (vinte por cento) da área do terreno receptor para o empreendimento que adquirir, simultaneamente, potencial construtivo de 04 (quatro) a 05 (cinco) imóveis tombados;</li>
					<li>30% (trinta por cento) da área do terreno receptor para o empreendimento que adquirir, simultaneamente, potencial construtivo de 06 (seis) a 07 (sete) imóveis tombados;</li>
					<li>40% (quarenta por cento) da área do terreno receptor para o empreendimento que adquirir, simultaneamente, potencial construtivo de 08 (oito) a 09 (nove) imóveis tombados;</li>
					<li>50% (cinquenta por cento) da área do terreno receptor para o empreendimento que adquirir, simultaneamente, potencial construtivo de conjunto composto por 10 (dez) ou mais imóveis tombados.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 58, Parágrafo único'">
				<p><b>Parágrafo único.</b> Para fins da concessão do benefício previsto no “caput”, o potencial construtivo adicional adquirido deverá corresponder, para cada imóvel, à totalidade do potencial adicional constante na respectiva Declaração.</p>
			</CommentsContext>

			<h4>Subseção II - Bônus Equivalente</h4>
			<CommentsContext :id="commentId()" context="'Art. 59'">
				<p><b>Art. 59.</b> Para promover a transformação inicial do território, os empreendimentos que tenham por objeto a preservação de imóveis de grande porte classificados como ZEPEC-BIR, a produção de HIS 1 e a requalificação de edificações existentes serão incentivados por meio de Bônus Equivalente de potencial construtivo adicional, proporcional à área construída destinada ao uso ou aos empreendimentos incentivados.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 60'">
				<p><b>Art. 60.</b> A concessão de Bônus Equivalente será precedida da realização de chamamento público que indique os empreendimentos passíveis da recepção do instrumento, devendo ser apresentadas propostas formuladas nos termos desta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 60, § 1º'">
				<p><b>§ 1º</b> Os Bônus Equivalentes serão disponibilizados na forma de Declaração de Potencial Construtivo Adicional que será convertida em uma ou mais Certidões de Potencial Construtivo Adicional para posterior vinculação a lotes localizados na AIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 60, § 2º'">
				<p><b>§ 2º</b> A concessão das Declarações de Bônus Equivalentes de potencial construtivo adicional está limitada ao montante de 270.000m² (duzentos e setenta mil metros quadrados) de potencial construtivo adicional, debitados do estoque geral de potencial construtivo oneroso definido no Art. 75, § 2º desta Lei, devendo constar do edital de chamamento público.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 60, § 3º'">
				<p><b>§ 3º</b> Na hipótese de esgotamento do montante de potencial construtivo adicional reservado à concessão de Bônus Equivalentes nos 3 (três) primeiros anos de vigência desta Lei, previsto no parágrafo anterior, fica o Poder Público autorizado a estabelecer novo montante de no máximo 270.000 m² (duzentos e setenta mil metros quadrados) de potencial construtivo adicional a serem debitados do estoque geral de potencial construtivo oneroso.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 60, § 4º'">
				<p><b>§ 4º</b> O potencial construtivo declarado será convertido em potencial construtivo equivalente para o imóvel receptor pela aplicação da fórmula mencionada no caput do 128 da Lei n. 16.050 de 2014 - PDE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 60, § 5º'">
				<p><b>§ 5º</b> O controle da emissão de Bônus Equivalentes e da utilização do potencial construtivo adicional disponibilizado será realizado pela SP-Urbanismo que expedirá, mediante requerimento, as Declarações de Potencial Construtivo Adicional correspondentes aos empreendimentos bonificados e as Certidões de Potencial Construtivo Adicional correspondentes aos imóveis receptores.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 60, § 6º'">
				<p><b>§ 6º</b> O Bônus Equivalente não será aplicável em caso de regularização onerosa de edificações, nos termos previstos nesta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 61'">
				<p><b>Art. 61.</b> Os editais de chamamento público para fins de concessão de Bônus Equivalentes deverão indicar, no mínimo, o montante e as modalidades de Bônus Equivalentes a serem disponibilizados, a opção de uso combinado de tais modalidades, o critério de seleção das propostas e, em se tratando de Bônus Equivalente para HIS-1, as características tipológicas e o valor máximo de comercialização das unidades produzidas.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 62'">
				<p><b>Art. 62.</b> Para incentivar a preservação de imóveis classificados como ZEPEC-BIR na AIU Setor Central, será concedido Bônus Equivalente de Preservação que poderá ser utilizado cumulativamente à Transferência do Direito de Construir – TDC, regida pelos Arts. 122 a 133 da Lei 16.050 de 2014 - PDE com as alterações previstas na presente Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 62, § 1º'">
				<p><b>§ 1º</b> O Bônus Equivalente de Preservação será calculado pela aplicação da seguinte equação: <pre class="formula inline">B<sub>PRES</sub> = (AC<sub>C</sub> – PC<sub>pt</sub>) x F<sub>PRES</sub></pre>, onde:<br>
					<pre class="formula declara">B<sub>PRES</sub></pre> = Potencial Construtivo Adicional correspondente ao Bônus Equivalente de Preservação;<br>
					<pre class="formula declara">AC<sub>C</sub></pre> = Área construída total do imóvel tombado (computável e não computável);<br>
					<pre class="formula declara">PC<sub>pt</sub></pre> = Potencial construtivo passível de transferência, calculado para fins de Transferência do Direito de Construir, nos termos dos Arts. 50 e seguintes desta lei;<br>
					<pre class="formula declara">F<sub>PRES</sub></pre> = Fator de Preservação = 0,6</p>
				</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 62, § 2º'">
				<p><b>§ 2º</b> A concessão de parte ou da totalidade do Bônus Equivalente de Preservação está condicionada à necessidade de restauração do imóvel preservado, a ser regulada por Termo de Compromisso celebrado entre o proprietário do imóvel e o órgão municipal competente.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 62, § 3º'">
				<p><b>§ 3º</b> Os imóveis já beneficiados com Declaração de Potencial Construtivo Passível de Transferência emitida nos termos do artigo 7º da Lei nº 12.349, de 1997, não poderão pleitear Bônus Equivalentes de Preservação.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 63'">
				<p><b>Art. 63.</b> Para incentivar a produção de habitações de interesse social para famílias com renda de até 3 (três) salários mínimos, será concedido Bônus Equivalente de HIS para as áreas construídas computáveis destinadas a HIS 1 em empreendimentos residenciais ou de uso misto localizados na AIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 63, § 1º'">
				<p><b>§ 1º</b> O Bônus Equivalente de HIS será calculado pela multiplicação da área construída computável destinada à HIS 1 pelo fator de bonificação igual a 2 (dois).</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 63, § 2º'">
				<p><b>§ 2º</b> Caberá à SEHAB a indicação da demanda a ser atendida nas HIS-1 viabilizadas por meio de Bônus Equivalente de HIS.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 64'">
				<p><b>Art. 64.</b> Para incentivar a requalificação de edificações existentes construídas até o ano de 1980, será concedido Bônus Equivalente de Retrofit 80 calculado em função da área construída requalificada.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 64, Parágrafo único'">
				<p><b>Parágrafo único.</b> O Bônus Equivalente de Retrofit 80 será calculado pela multiplicação da área construída computável requalificada pelo fator de bonificação igual a 1 (um).</p>
			</CommentsContext>
		</section>

		<section>
			<h2 class="titulo" indent="1">Capítulo V - Das estratégias setoriais para a implantação do PIU-SCE</h2>
			<CommentsContext :id="commentId()" context="'Art. 65'">
				<p><b>Art. 65.</b> As estratégias associadas à consecução das finalidades do PIU-SCE consistem no conjunto de ações setoriais necessárias à implantação planejada do instrumento e de seu Programa de Intervenções, abrangendo, dentre outras, as estratégias de preservação e valorização do patrimônio cultural e da paisagem, as estratégias de atendimento habitacional e as estratégias de desenvolvimento econômico.</p>
			</CommentsContext>

			<h3>Seção I - Das estratégias para Preservação e Valorização do Patrimônio Cultural</h3>
			<CommentsContext :id="commentId()" context="'Art. 66'">
				<p><b>Art. 66.</b> Para fins de preservação e valorização do patrimônio cultural na implantação do PIU-SCE, ficam instituídas as Áreas de Interesse de Preservação e Valorização do Patrimônio Cultural (AIPC) na AIU Setor Central e no âmbito de seus perímetros expandidos, que correspondem a porções do território com características singulares do ponto de vista da morfologia urbana, arquitetônica, paisagística, simbólica e cultural, dotadas de identidade e memória e que permanecem como documentos representativos do processo de urbanização do município, compreendendo:</p>
				<ol class="romanos">
					<li>territórios protegidos pelas Resoluções de Tombamento em vigor, com suas respectivas Áreas Envoltórias;</li>
					<li>territórios protegidos pelas Resoluções de Regulamentação de Área Envoltória (RAE) em vigor;</li>
					<li>Perímetros do Inventário Ambiental Urbano (PIAU), que configuram manchas urbanas relevantes para a memória do processo de urbanização da cidade, com grande concentração de Bens Tombados, que já foram objeto de inventário ambiental urbano;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 66, § 1º'">
				<p><b>§ 1º</b> O Departamento do Patrimônio Histórico da Secretaria Municipal de Cultura - DPH-SMC publicará o mapa contendo a delimitação dos perímetros previstos no “caput”, bem como eventuais atualizações subsequentes, de forma a consolidar, na AIU-SCE e no âmbito de seus perímetros expandidos, as áreas sujeitas à regulamentação dos órgãos de preservação dos três níveis.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 66, § 2º'">
				<p><b>§ 2º</b> As AIPC poderão ser criadas ou revistas a critério dos órgãos de preservação do patrimônio, em função da publicação de Resoluções de Tombamento ou de Regulamentação de Área Envoltória, de alterações em Resoluções existentes ou de alterações nos perímetros propostos para Inventário Ambiental Urbano.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 66, § 3º'">
				<p><b>§ 3º</b> As AIPC regulamentadas por resoluções poderão ser objeto de ações e projetos específicos para requalificação de bens e espaços públicos, considerando seu tratamento como unidade territorial integrada, sujeitos à orientação, supervisão e análise do órgão municipal de patrimônio.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 66, § 4º'">
				<p><b>§ 4º</b> Poderão ser destinados recursos da conta segregada da AIU-SCE a ações e projetos de que trata o parágrafo anterior, bem como em outras ações voltadas à preservação do patrimônio histórico.</p>
			</CommentsContext>

			<h3>Seção II – Das Estratégias de Atendimento Habitacional</h3>

			<h4>Subseção I - Disposições Gerais</h4>
			<CommentsContext :id="commentId()" context="'Art. 67'">
				<p><b>Art. 67.</b> As intervenções habitacionais de interesse social previstas nesta lei têm como objetivo específico o enfrentamento das necessidades habitacionais e a promoção do direito à moradia digna na AIU-SCE e no âmbito de seus perímetros expandidos, visando:</p>
				<ol class="romanos">
					<li>proporcionar o atendimento habitacional adequado e definitivo a famílias de baixa renda residentes nos assentamentos precários, tais como favelas, núcleos, cortiços, loteamentos, conjuntos habitacionais irregulares, ocupações de edifícios;</li>
					<li>viabilizar soluções para o déficit quantitativo de moradia;</li>
					<li>assegurar soluções de moradia adequada para as famílias impactadas por deslocamentos involuntários no perímetro do PIU-SCE;</li>
					<li>combater a gentrificação decorrente das transformações urbanísticas, adotando instrumentos e ações voltados à manutenção das populações de baixa renda, inclusive aquelas com condição de vulnerabilidade específica;</li>
					<li>promover o incremento do adensamento habitacional de interesse social.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 68'">
				<p><b>Art. 68.</b> O PIU-SCE contemplará ações diversificadas com a finalidade de garantir o direito à moradia, promovendo atendimento habitacional, definitivo e provisório, em conformidade com a Política Municipal de Habitação, por meio das seguintes modalidades de atendimento ou de outras que venham a ser regulamentadas:</p>
				<ol class="romanos">
					<li>provisão de moradia para aquisição, compreendendo a produção de novos imóveis ou a reabilitação de edificações existentes no perímetro;</li>
					<li>intervenção integrada em assentamentos precários, compreendendo urbanização e regularização fundiária;</li>
					<li>intervenção em cortiços;</li>
					<li>locação social em parque público ou privado;</li>
					<li>auxílio aluguel.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 67, § 1º'">
				<p><b>§ 1º</b> A provisão de moradias para atendimento da demanda indicada por SEHAB, nos termos estabelecidos pela regulamentação existente, poderá ser realizada por iniciativa pública ou privada, bem como por meio de associações, cooperativas e demais entidades sem fins lucrativos.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 67, § 2º'">
				<p><b>§ 2º</b> O acesso à provisão de moradia poderá se dar por meio de aquisição da propriedade ou por meio de locação social de parque público ou privado.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 67, § 3º'">
				<p><b>§ 3º</b> As intervenções nos assentamentos precários priorização, quando possível, a sua consolidação, devendo ser garantida moradia adequada para todas as famílias.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 69'">
				<p><b>Art. 69.</b> A provisão habitacional decorrente dos recursos e incentivos previstos nesta Lei priorizará a população que atenda ao menos um dos seguintes requisitos:</p>
				<ol class="romanos">
					<li>venha sofrer deslocamentos involuntários em decorrência do PIU-SCE;</li>
					<li>tenha compromisso de atendimento definitivo pelo município, esteja ou não vinculada ao atendimento provisório;</li>
					<li>seja oriunda de cortiços ou ocupações localizados na AIU-SCE ou em seus perímetros expandidos;</li>
					<li>se enquadre nos critérios de HIS 1, conforme definido no Quadro I do da Lei Municipal n. 16.050 de 2014 - PDE;</li>
					<li>esteja enquadrada em condição de vulnerabilidade específica que demande atendimento habitacional.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 70'">
				<p><b>Art. 70.</b> Eventuais conflitos relativos à política municipal de habitação de interesse social serão dirimidos, preferencialmente, com o emprego de mecanismos extrajudiciais de resolução de conflitos, acompanhado pela Secretaria Municipal de Habitação - SEHAB, conforme atribuição prevista na legislação.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 71'">
				<p><b>Art. 71.</b> Os Planos de Urbanização, Projetos de Intervenção ou Planos de Reassentamento aprovados anteriormente a esta lei por Conselhos Gestores de ZEIS localizados na AIU-SCE serão considerados na formulação das Propostas de Diretrizes de Investimento – PDI elaboradas por SP-Urbanismo para esses territórios, devendo SEHAB e o Conselho Gestor de ZEIS serem consultados quando da elaboração das propostas.</p>
			</CommentsContext>

			<h4>Subseção II – Do regramento para os deslocamentos involuntários no PIU-SCE</h4>
			<CommentsContext :id="commentId()" context="'Art. 72'">
				<p><b>Art. 72.</b> O deslocamento involuntário de população residente no PIU-SCE ou que tenha sua subsistência econômica vinculada aos assentamentos precários objeto de intervenção, quando inevitável, será precedido da elaboração de Plano de Reassentamento.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 73'">
				<p><b>Art. 73.</b> O Plano de Reassentamento deverá prever, no mínimo:</p>
				<ol class="romanos">
					<li>a caracterização da população impactada;</li>
					<li>as soluções de reassentamento aplicáveis;</li>
					<li>as soluções de atendimento provisório, quando couber;</li>
					<li>os mecanismos de trabalho social com a população;</li>
					<li>o cronograma e o orçamento de implantação das ações até o reassentamento definitivo.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 73, § 1º'">
				<p><b>§ 1º</b> As soluções de reassentamento aplicáveis previstas no inciso II do “caput” deste artigo deverão assegurar:</p>
				<ol class="romanos">
					<li>soluções habitacionais definitivas no perímetro da AIU-SCE para fins de reassentamento das famílias impactadas;</li>
					<li>soluções para realização das atividades de subsistência afetadas pelo deslocamento.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 73, § 2º'">
				<p><b>§ 2º</b> As famílias impactadas residentes nos perímetros expandidos da AIU-SCE receberão atendimento habitacional definitivo no âmbito do respectivo perímetro expandido ou no perímetro da AIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 73, § 3º'">
				<p><b>§ 3º</b> As diretrizes e o conteúdo específicos do Plano de Reassentamento deverão ser regulamentados pela Secretaria Municipal de Habitação.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 73, § 4º'">
				<p><b>§ 4º</b> O Plano de Reassentamento será submetido à análise e deliberação do Conselho de ZEIS.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 74'">
				<p><b>Art. 74.</b> As famílias que sofram deslocamento involuntário deverão ser reassentadas, sempre que possível, diretamente para a solução habitacional definitiva planejada, respeitada a regulamentação de SEHAB para fins de atendimento da demanda.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 74, Parágrafo único'">
				<p><b>Parágrafo único.</b> O atendimento provisório das famílias afetadas pelas intervenções deve ocorrer somente quando demonstrada a necessidade de desocupação imediata da área de intervenção e, simultaneamente, não for possível realizar o reassentamento, devendo o Plano de Reassentamento prever tal alternativa, nos termos dessa Lei.</p>
			</CommentsContext>

			<h4>Subseção III - Das estratégias de ação para as ZEIS do PIU-SCE</h4>
			<CommentsContext :id="commentId()" context="'Art. 75'">
				<p><b>Art. 75.</b> Deverá ser elaborado Plano de Ação Estratégica para as ZEIS localizadas na AIU-SCE ou no âmbito de seus perímetros expandidos, conjunta ou individualmente, com vistas a estabelecer a atuação coordenada de ações públicas, utilização de recursos financeiros e fundiários para as intervenções planejadas.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 75, § 1º'">
				<p><b>§ 1º</b> O Plano de Ação Estratégica para as ZEIS poderá articular a aplicação dos instrumentos previstos nesta Lei, além de garantir a interlocução com outros órgãos setoriais necessários à elaboração dos estudos e levantamentos técnicos.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 75, § 2º'">
				<p><b>§ 2º</b> O plano de ação de que trata o caput será regulamentado pelo Poder Executivo, devendo compreender, no mínimo, o levantamento das necessidades habitacionais locais e a indicação das terras públicas e demais áreas localizadas em ZEIS passíveis de recepcionar as intervenções e estratégias habitacionais previstas.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 75, § 3º'">
				<p><b>§ 3º</b> Deverão ser previstos mecanismos de acompanhamento e avaliação dos procedimentos e ações concernentes ao Plano de Ação Estratégica para as ZEIS com a finalidade de promover o monitoramento da dinâmica fundiária e imobiliária nesses territórios.</p>
			</CommentsContext>

			<h3>Seção III - Das estratégias de desenvolvimento econômico</h3>
			<CommentsContext :id="commentId()" context="'Art. 76'">
				<p><b>Art. 76.</b> Com a finalidade de fomentar a atividade econômica na AIU-SCE e incentivar as atividades de economia criativa, em consonância aos incentivos urbanísticos e instrumentos trazidos nesta Lei, será elaborado Plano de Desenvolvimento para o Polo de Economia Criativa Distrito Criativo Sé/República previsto no Art. 182 e seguintes da Lei 16.050 de 2014 - PDE, a ser aprovado por Lei específica.</p>
			</CommentsContext>
		</section>

		<section>
			<h2 class="titulo" indent="1">Capítulo VII – Da outorga onerosa de potencial construtivo adicional, da conta segregada no FUNDURB e da destinação dos recursos arrecadados</h2>
			<CommentsContext :id="commentId()" context="'Art. 77'">
				<p><b>Art. 77.</b> Fica o Executivo autorizado a aplicar a outorga onerosa de potencial construtivo adicional para os lotes contidos na AIU-SCE na conformidade dos valores, critérios e condições estabelecidos nesta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 77, § 1º'">
				<p><b>§ 1º</b> Os recursos arrecadados pela venda de potencial construtivo adicional para os lotes contidos na AIU-SCE destinam-se à execução dos elementos do Programa de Intervenções do PIU-SCE e às ações deste decorrentes.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 77, § 2º'">
				<p><b>§ 2º</b> A AIU-SCE terá conta segregada no Fundo Municipal de Desenvolvimento Urbano - FUNDURB, cabendo ao Conselho Gestor da AIU-SCE publicar, anualmente, listagem de intervenções prioritárias para implantação do Programa de Intervenções em seu território.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 77, § 3º'">
				<p><b>§ 3º</b> Os recursos havidos em função da aplicação da cota de solidariedade em empreendimentos realizados na AIU-SCE, observadas as demais disposições desta lei, serão depositados na conta segregada prevista no § 2º artigo.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 77, § 4º'">
				<p><b>§ 4º</b> A gestão dos recursos arrecadados na conta segregada da AIU-SCE deverá ser regulamentada pelo Executivo, observado o regramento de gestão da implantação do PIU-SCE trazido nesta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 78'">
				<p><b>Art. 78.</b> Para fins de acompanhamento e direcionamento da produção imobiliária no PIU-SCE, serão disponibilizados 3.600.000 m² (três milhões e seiscentos mil metros quadrados) de potencial construtivo adicional para a AIU-SCE, atendidas as disposições desta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 78, § 1º'">
				<p><b>§ 1º</b> O potencial construtivo adicional previsto no “caput” poderá ser cedido aos empreendedores de forma onerosa, mediante contrapartida financeira, ou não onerosa.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 78, § 2º'">
				<p><b>§ 1º</b> Da totalidade de potencial construtivo adicional prevista no “caput”, serão disponibilizados não onerosamente 1.800.000 m² (um milhão e oitocentos mil metros quadrados) nos seguintes casos:</p>
				<ol class="romanos">
					<li>utilização em empreendimentos não sujeitos a cobrança de outorga onerosa do direito de construir, para os quais seja atribuído Fator de Interesse Social igual a 0 (zero) nos termos do Quadro 5 da Lei 16.050 de 2014 – PDE;</li>
					<li>para o aproveitamento dos benefícios e incentivos previstos nesta Lei.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 78, § 3º'">
				<p><b>§ 3º</b> Da totalidade de potencial construtivo adicional prevista no “caput”, serão disponibilizados onerosamente 1.800.000 m² (um milhão e oitocentos mil metros quadrados), dos quais 270.000 m² (duzentos e setenta mil metros quadrados) serão convertidos em Bônus Equivalentes nos termos trazidos nesta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 79'">
				<p><b>Art. 79.</b> A contrapartida financeira à outorga onerosa de potencial construtivo adicional será calculada segundo a equação definida no Art. 117 da Lei n. 16.050 de 2014 - PDE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 79, § 1º'">
				<p><b>§ 1º</b> Aplicam-se na AIU-SCE os Fatores de Planejamento (Fp) definidos no Quadro 4 desta lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 79, § 2º'">
				<p><b>§ 2º</b> O potencial construtivo adicional comercializado mediante outorga onerosa será alienado nos termos previstos na Lei n. 16.050 de 2014 - PDE ou por intermédio de leilões promovidos pela SP-Urbanismo.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 79, § 3º'">
				<p><b>§ 3º</b> Na hipótese de comercialização do potencial construtivo adicional mediante leilão, a quantidade de potencial construtivo adicional a ser disponibilizada e os respectivos descontos iniciais de seu valor de alienação deverão ser definidos na Proposta de Diretrizes de Investimento - PDI, consideradas as condições de mercado e as necessidades de viabilidade do Programa de Intervenções, devendo cada edital de leilão prever mecanismos que garantam a aplicação dos princípios da justa distribuição dos benefícios e ônus decorrentes do processo de urbanização, da ampla publicidade e da livre concorrência entre os interessados.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 79, § 4º'">
				<p><b>§ 4º</b> O potencial construtivo adicional adquirido mediante leilão será imediatamente vinculado ao lote, atendendo-se, no mínimo, às seguintes disposições:</p>
				<ol class="romanos">
					<li>o pagamento da contrapartida referente à aquisição de potencial construtivo adicional não dependerá da existência prévia de requerimento de licenciamento edilício;</li>
					<li>após o pagamento previsto no inciso I deste parágrafo, a SP-Urbanismo expedirá certidão declarando a quantidade de potencial construtivo adicional incorporada ao lote;</li>
					<li>não poderá haver desvinculação do potencial construtivo adicional adquirido mediante leilão vinculado ao lote;</li>
					<li>a utilização do potencial construtivo adicional já vinculado ao lote será efetivada no momento do licenciamento edilício, mediante apresentação da certidão expedida pela SP-Urbanismo.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 80'">
				<p><b>Art. 80.</b> Tendo em vista os objetivos gerais e específicos do PIU-SCE, fica estabelecida a destinação mínima obrigatória de parcela dos recursos depositados na conta segregada da AIU-SCE, deduzidas as taxas, emolumentos e custos de administração, de acordo com os seguintes percentuais:</p>
				<ol class="romanos">
					<li>30% (trinta por cento) para o atendimento habitacional de interesse social na AIU-SCE e o âmbito de seus perímetros expandidos, em ações compreendidas no escopo estabelecido no Programa de Intervenções;</li>
					<li>30% (trinta por cento) para melhorias na rede de equipamentos públicos, em ações vinculadas aos programas de atendimento das Secretarias Municipais de Direitos Humanos e Cidadania, Assistência e Desenvolvimento Social, Saúde, Educação, Cultura e Esportes e Lazer;</li>
					<li>5% para finalidades de preservação do patrimônio histórico, ambiental e cultural, em ações vinculadas aos objetivos do PIU-SCE.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 81'">
				<p><b>Art. 81.</b> Suplementarmente aos recursos captados pela comercialização de potencial construtivo adicional, poderão ser utilizados recursos advindos do Fundo de Desenvolvimento Urbano – FUNDURB ou de quaisquer outras fontes disponíveis para fins de implantação do programa de intervenções do PIU-SCE.</p>
			</CommentsContext>
		</section>

		<section>
			<h2 class="titulo" indent="1">Capítulo VIII - Da gestão e planejamento da implantação do PIU-SCE</h2>
			<CommentsContext :id="commentId()" context="'Art. 82'">
				<p><b>Art. 82.</b> A gestão da implantação do PIU-SCE e o planejamento das ações dele decorrentes será coordenada por SMDU, com apoio da SP-Urbanismo, acompanhada e monitorada pelo Conselho Gestor da AIU-SCE, respeitadas as atribuições conferidas por esta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 82, Parágrafo único'">
				<p><b>Parágrafo único.</b> As ações de cunho procedimental necessários à implantação do PIU-SCE serão regulamentadas pelo Poder Executivo.</p>
			</CommentsContext>

			<h3>Seção I – Do Conselho Gestor da AIU-SCE</h3>
			<CommentsContext :id="commentId()" context="'Art. 83'">
				<p><b>Art. 83.</b> A AIU-SCE contará com um Conselho Gestor, coordenado pela SMDU e secretariado por SP-Urbanismo, com participação de órgãos municipais e de entidades representativas da sociedade civil.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 83, Parágrafo único'">
				<p><b>Parágrafo único.</b> O Conselho Gestor é instrumento de gestão e participação instituído para acompanhar e deliberar sobre a priorização da implantação do Programa de Intervenções, subsidiado por Proposta de Diretrizes de Investimento – PDI, devendo a SP-Urbanismo prover as condições institucionais para o exercício das atribuições deste colegiado.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 84'">
				<p><b>Art. 84.</b> O Conselho Gestor, nos termos do Art. 145, § 3º, inciso V, da Lei n. 16.050 de 2014 - PDE será designado pelo Executivo, devendo ter composição paritária que garanta a representatividade da diversidade identitária presente no território do PIU-SCE de acordo com a seguinte distribuição:</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 84, ponto I'">
				<ol class="romanos" start="1">
					<li>
						11 (onze) Representantes do Poder Público, incluindo:
						<ol class="minusculas">
							<li>1 (um) representante da São Paulo Urbanismo – SP-Urbanismo;</li>
							<li>1 (um) representante da Secretaria Municipal de Desenvolvimento Urbano - SMDU;</li>
							<li>1 (um) representante da Secretaria Municipal de Habitação - SEHAB;</li>
							<li>1 (um) representante da Secretaria do Governo Municipal – SGM;</li>
							<li>1 (um) representante da Secretaria Municipal de Infraestrutura Urbana e Obras – SIURB;</li>
							<li>1 (um) representante da Secretaria Municipal de Assistência e Desenvolvimento Social – SMADS;</li>
							<li>1 (um) representante da Secretaria Municipal da Fazenda - SF;</li>
							<li>1 (um) representante da Secretaria Municipal de Mobilidade e Transportes – SMT;</li>
							<li>1 (um) representante da Secretaria Municipal da Cultura – SMC;</li>
							<li>2 (dois) representantes das Subprefeituras, sendo 1 (um) da Subprefeitura da Sé e 1 (um) da Subprefeitura da Mooca.</li>
						</ol>
					</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 84, ponto I'">
				<ol class="romanos" start="1">
					<li>
						11 (onze) representantes de entidades da sociedade civil, incluindo:
						<ol class="minusculas">
							<li>2 (dois) representantes do setor empresarial ligados ao Conselho Municipal de Política Urbana – CMPU, sendo 1 (um) da indústria e 1 (um) do comércio;</li>
							<li>1 (um) representante da sociedade civil ligado ao Conselho Municipal de Preservação do Patrimônio Histórico, Cultural e Ambiental da Cidade de São Paulo – CONPRESP;</li>
							<li>1 (um) representante da sociedade civil ligado ao Conselho Municipal de Trânsito e Transporte – CMTT, preferencialmente no segmento regional Centro Expandido;</li>
							<li>2 (dois) representantes da sociedade civil do Conselho Municipal de Habitação - CMH, sendo pelo menos 1 (um) de entidades comunitárias e de organizações populares, preferencialmente com atuação na AIU-SCE;</li>
							<li>1 (um) representante da sociedade civil ligado ao Conselho Municipal de Assistência Social - COMAS, preferencialmente com atuação na AIU-SCE;</li>
							<li>2 (dois) representantes do Conselho Participativo Municipal, sendo 1 (um) da Subprefeitura da Sé e 1 (um) da Subprefeitura da Mooca;</li>
							<li>1 (um) representante de organizações não governamentais (ONGs) ligadas ao setor cultural com atuação no perímetro da AIU-SCE;</li>
							<li>1 (um) representante de entidades profissionais, acadêmicas ou de pesquisa ligadas a questões urbanas e ambientais com atuação no perímetro da AIU-SCE.</li>
						</ol>
					</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 84, § 1º'">
				<p><b>§ 1º</b> Os representantes mencionados nos itens “a”, “b”, “c”, “d”, “e” e “f” do inciso II serão indicados por seus respectivos conselhos, na forma de seus regimentos específicos.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 84, § 2º'">
				<p><b>§ 2º</b> Os representantes mencionados nos itens “g” e “h” do inciso II deste artigo, serão eleitos pelos seus pares em assembleia, coordenada por SP-Urbanismo, que será realizada a cada 2 (dois) anos.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 84, § 3º'">
				<p><b>§ 3º</b> Cada representante contará com um suplente que o substituirá em caso de ausência.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 84, § 4º'">
				<p><b>§ 4º</b> Caberá à Secretaria Municipal de Direitos Humanos e Cidadania - SMDHC a suplência da representação da Secretaria Municipal de Assistência e Desenvolvimento Social – SMADS.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 84, § 5º'">
				<p><b>§ 5º</b> O funcionamento do Conselho Gestor da AIU-SCE será estabelecido por Regimento Interno proposto pela SP-Urbanismo e aprovado pela maioria de seus integrantes.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 84, § 6º'">
				<p><b>§ 6º</b> A coordenação do colegiado caberá à SMDU que proferirá votos de desempate, quando necessário, cabendo à SP-Urbanismo desempenhar a função de secretaria executiva do Conselho.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 85'">
				<p><b>Art. 85.</b> O Conselho Gestor da AIU-SCE realiza o controle social da implantação do PIU-SCE, cabendo-lhe:</p>
				<ol class="romanos">
					<li>aprovar o seu regimento interno;</li>
					<li>deliberar sobre a priorização das Propostas de Diretrizes de Investimento - PDI apresentadas pela SP-Urbanismo;</li>
					<li>deliberar sobre a priorização das intervenções relacionadas nas PDI e aprovar o respectivo plano anual de aplicação dos recursos da conta segregada da AIU-SCE;</li>
					<li>manifestar-se sobre ações ou intervenções previstas no Programa de Intervenções da AIU-SCE que sejam viabilizadas por recursos de outras fontes;</li>
					<li>validar os relatórios de monitoramento de implantação do Programa de Intervenções apresentados por SP-Urbanismo.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 85, Parágrafo único'">
				<p><b>Parágrafo único.</b> A deliberação sobre as Propostas de Diretrizes de Investimento - PDI que contenham intervenção em ZEIS 1 ou 3 deverá desencadear, por meio da atuação de SEHAB, o processo de constituição dos conselhos gestores das respectivas ZEIS, respeitadas as hipóteses previstas em lei.</p>
			</CommentsContext>

			<h3>Seção II – Dos Conselhos Gestores de ZEIS</h3>
			<CommentsContext :id="commentId()" context="'Art. 86'">
				<p><b>Art. 86.</b> A Gestão Participativa das ZEIS 1 e 3 da AIU-SCE e do âmbito de seus perímetros expandidos deverá ocorrer nos termos designados na Lei 16.050 de 2014 e nos demais regramentos sobre o tema, inclusive aqueles de cunho administrativo expedidos por SEHAB.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 86, Parágrafo único'">
				<p><b>Parágrafo único.</b> Os conselhos gestores das ZEIS 1 e 3 da AIU-SCE deverão participar da elaboração dos Planos de Urbanização ou Projetos de Intervenção de sua competência no âmbito dos respectivos perímetros, bem como deliberar acerca das intervenções destes decorrentes para o território ao qual estão vinculados.</p>
			</CommentsContext>

			<h3>Seção III – Da atuação da SP-Urbanismo</h3>
			<CommentsContext :id="commentId()" context="'Art. 87'">
				<p><b>Art. 87.</b> A SP-Urbanismo é o ente municipal responsável pela gestão das ações públicas necessárias ao desenvolvimento e implantação do Programa de Intervenções do PIU-SCE, devendo elaborar Propostas de Diretrizes de Investimentos - PDI de modo articulado com os demais órgãos da administração pública direta e indireta, promover a gestão dos seus ativos e recursos, bem como a efetivação dos instrumentos, estratégias, benefícios e incentivos previstos nesta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 87, Parágrafo único'">
				<p><b>Parágrafo único.</b> Para o desempenho das atribuições mencionadas no “caput”, a SP-Urbanismo poderá participar da modelagem ou intervir em contratos que tenham por objeto a implantação e monitoramento do PIU-SCE, além de fornecer os subsídios necessários à instrução de compromissos de investimento, convênios ou outros termos de parceria a serem firmados com entes da Administração Pública direta e indireta, sempre quando necessários ao cumprimento das ações e estratégias previstas nesta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 88'">
				<p><b>Art. 88.</b> Para a aplicação e monitoramento dos Instrumentos de Qualificação e Transformação do Território do PIU-SCE e da implantação do Programa de Intervenções, SP-Urbanismo promoverá o cadastro atualizado das propostas de adesão aos benefícios e incentivos previstos nesta Lei, bem como dos investimentos, projetos e programas públicos desenvolvidos na AIU-SCE:</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 88, § 1º'">
				<p><b>§ 1º</b> Deverão ser definidos indicadores de monitoramento e avaliação que expressem, no mínimo:</p>
				<ol class="romanos">
					<li>Os resultados alcançados em relação aos objetivos PIU-SCE;</li>
					<li>Os avanços da implantação do Programa de Intervenções;</li>
					<li>O desempenho dos Instrumentos de Qualificação e Transformação do Território.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 88, § 2º'">
				<p><b>§ 2º</b> SP-Urbanismo deverá elaborar relatório semestral contendo os elementos de monitoramento previstos no “caput” para posterior submissão ao Conselho Gestor da AIU-SCE, garantida a ampla publicização dos documentos elaborados.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 89'">
				<p><b>Art. 89.</b> A SP-Urbanismo fica autorizada a receber remuneração, a ser fixada pelo Executivo, para a execução dos serviços e demais ações necessários à implantação do PIU-SCE.</p>
			</CommentsContext>

			<h4>Subseção I – Dos editais de chamamento</h4>
			<CommentsContext :id="commentId()" context="'Art. 90'">
				<p><b>Art. 90.</b> Com a finalidade de operacionalizar a aplicação das estratégias e instrumentos previstos nesta Lei, a SP-Urbanismo poderá elaborar editais de chamamentos públicos destinados a viabilizar, dentre outros:</p>
				<ol class="romanos">
					<li>os contratos de parcerias necessários à implantação dos Projetos Estratégicos e ao aproveitamento das demais áreas públicas.</li>
					<li>os Consórcios Imobiliários;</li>
					<li>a concessão de Bônus Equivalentes.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 90, § 1º'">
				<p><b>§ 1º</b> As ações previstas em Proposta de Diretrizes de Investimentos – PDI deverão indicar a necessidade de realização de chamamentos públicos.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 90, § 2º'">
				<p><b>§ 2º</b> A SEHAB participará da elaboração de edital de chamamento público para a definição dos aspectos referentes à provisão habitacional de interesse social, bem como para a avaliação das propostas apresentadas sobre os mesmos aspectos.</p>
			</CommentsContext>

			<h3>Seção IV - Da Atuação Concertada dos Órgãos e Entidades Públicas e Privadas</h3>
			<CommentsContext :id="commentId()" context="'Art. 91'">
				<p><b>Art. 91.</b> A implantação do PIU-SCE e do seu Programa de Intervenções se dará mediante ação concertada entre os órgãos e entidades municipais, estaduais e federais e agentes privados, atendendo-se, no mínimo, às disposições desta lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 91, Parágrafo único'">
				<p><b>Parágrafo único.</b> A articulação das ações previstas no "caput" deste artigo caberá à SP-Urbanismo.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 92'">
				<p><b>Art. 92.</b> Caberá à Secretaria Municipal de Desenvolvimento Urbano - SMDU além das outras atribuições previstas em lei:</p>
				<ol class="romanos">
					<li>autorizar o desenvolvimento, por parte de SP-Urbanismo, dos estudos e projetos necessários à implantação do Programa de Intervenções do PIU-SCE;</li>
					<li>subsidiar, em ações específicas, a realização das tarefas concernentes à implantação do PIU-SCE pela SP-Urbanismo.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 92, Parágrafo único'">
				<p><b>Parágrafo único.</b> A Secretaria Municipal de Desenvolvimento Urbano – SMDU firmará ajustes com a SP-Urbanismo para a prática dos atos necessários ao desenvolvimento, gestão e acompanhamento da implantação do PIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 93'">
				<p><b>Art. 93.</b> Caberá à Secretaria Municipal de Licenciamento - SEL, sem prejuízo das demais atribuições previstas em lei:</p>
				<ol class="romanos">
					<li>informar a SP-Urbanismo acerca dos processos de licenciamento em fase de aprovação e aqueles já licenciados com base nesta Lei com a finalidade de garantir o monitoramento da implantação do PIU-SCE;</li>
					<li>solicitar à SP-Urbanismo manifestação sobre a conformidade dos projetos sob sua avaliação às diretrizes urbanísticas do PIU-SCE, inclusive para fins de atendimento das exigências de parcelamento do solo previstas nos arts. 51 e 52 da Lei n. 16.402/2016 –LPUOS.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 94'">
				<p><b>Art. 94.</b> Caberá à Secretaria Municipal de Habitação – SEHAB:</p>
				<ol class="romanos">
					<li>participar da elaboração, juntamente com a SP-Urbanismo, das Propostas de Diretrizes de Investimento - PDI que contenham intervenções voltadas ao atendimento habitacional de interesse social e à redução da precariedade urbana;</li>
					<li>demandar à SP-Urbanismo a elaboração de procedimentos e a realização das ações previstas para o Plano de Ação Estratégica para as ZEIS da AIU-SCE ou de seus perímetros expandidos.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 94, Parágrafo único'">
					<p><b>Parágrafo único.</b> A Secretaria Municipal de Habitação – SEHAB firmará ajustes com a SP-Urbanismo para as finalidades previstas no inciso II.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 95'">
				<p><b>Art. 95.</b> Deverão ser incluídas no processo de elaboração das Propostas de Diretrizes de Investimento - PDI, no âmbito de suas competências, no mínimo as seguintes secretarias:</p>
				<ol class="romanos">
					<li>Secretaria Municipal do Verde e do Meio Ambiente - SVMA;</li>
					<li>Secretaria Municipal de Cultura - SMC;</li>
					<li>Secretaria Municipal de Mobilidade e Transportes - SMT;</li>
					<li>Secretaria Municipal de Direitos Humanos e Cidadania - SMDHC;</li>
					<li>Secretaria Municipal de Assistência e Desenvolvimento Social - SMADS;</li>
					<li>Secretaria Municipal de Saúde – SMS;</li>
					<li>Secretaria Municipal de Educação – SME;</li>
					<li>Secretaria Municipal de Esporte e Lazer – SEME;</li>
					<li>Secretaria Municipal das Subprefeituras – SMSUB;</li>
					<li>Secretaria Municipal de Desenvolvimento Econômico e Trabalho – SMDET.</li>
				</ol>
			</CommentsContext>
		</section>

		<section>
			<h2 class="titulo" indent="1">Capítulo IX - Das disposições finais e transitórias</h2>
			<CommentsContext :id="commentId()" context="'Art. 96'">
				<p><b>Art. 96.</b> Durante os primeiros 36 (trinta e seis) meses subsequentes à aprovação desta lei, as contrapartidas referentes à concessão de outorga onerosa de potencial construtivo no Setor Centro Histórico, excetuadas as hipóteses de regularização onerosa trazidas nesta Lei, terão um desconto gradativo nos seguintes percentuais:</p>
				<ol class="romanos">
					<li>75% (setenta e cinco por cento) nos primeiros 12 (doze) meses;</li>
					<li>50% (cinquenta por cento) nos 12 (doze) meses subsequentes ao prazo mencionado no inciso I;</li>
					<li>25% (vinte e cinco por cento) nos 12 (doze) meses subsequentes ao prazo mencionado no inciso II.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 96, § 1º'">
				<p><b>§ 1º</b> As obras referentes aos projetos aprovados com base nas disposições deste artigo deverão estar concluídas no prazo máximo de 5 (cinco) anos, contados a partir da data da expedição do respectivo Alvará de Execução, sob pena de cassação da licença e do vencimento integral da contrapartida financeira devida, calculada nos termos desta lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 96, § 2º'">
				<p><b>§ 2º</b> O benefício previsto neste artigo não se aplica às hipóteses de regularização onerosa trazidas nesta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 97'">
				<p><b>Art. 97.</b> Os imóveis notificados para o PEUC e que já tiverem atendido as exigências do regramento ordinário até a data de aprovação desta Lei ficam dispensados da aplicação do regramento proposto pela PEUC nos Arts. 42 e seguintes desta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 98'">
				<p><b>Art. 98.</b> Os recursos remanescentes na conta Operação Urbana Centro serão transferidos para a conta segregada da AIU-SCE sem prejuízo da execução de intervenções já aprovadas sob a égide da Lei n. 12.349 de 1997.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 99'">
				<p><b>Art. 99.</b> Com o objetivo de promover a transição do controle social da AIU-SCE, a Comissão Executiva da Operação Urbana Centro, estabelecida nos termos da Lei n. 12.349 de 1997, acompanhará as três primeiras reuniões do Conselho Gestor da AIU-SCE.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 100'">
				<p><b>Art. 100.</b> O regramento contido nesta Lei vigorará por prazo determinado, ficando a caracterização de seu termo final condicionada, alternativamente, ao:</p>
				<ol class="romanos">
					<li>transcurso de vinte anos desde a concessão da primeira licença edilícia que configure adesão ao PIU-SCE;</li>
					<li>esgotamento de potencial construtivo adicional equivalente a 3.600.000 m² (três milhões e seiscentos mil metros quadrados) disponibilizados para a AIU-SCE.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 100, Parágrafo único'">
				<p><b>Parágrafo único.</b> Na hipótese encerramento desta Lei, nos termos previstos no “caput”, os empreendimentos incorporados na área da AIU-SCE poderão utilizar o potencial construtivo adicional previsto na Lei 16.402 de 2016 - LPUOS, mantendo-se os parâmetros de uso e ocupação do solo e o regramento conferido à Transferência do Direito de Construir previstos nesta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 101'">
				<p><b>Art. 101.</b> O parágrafo único do art. 103 da Lei nº 16.642 de 2017 não se aplica aos seguintes trechos de alinhamentos viários aprovados em lei e indicados nas plantas nºs 26.999/00 a 26.9909/14, Classificação S-1.227 anexas a esta Lei:</p>
				<ol class="romanos">
					<li>incisos XIII, XVI e XVII do Art. 1º da Lei 5.347, de 12 de setembro de 1957;</li>
					<li>inciso I do Art. 1º da Lei 8.968, de 9 de setembro de 1979, no trecho entre a R. Cap. Faustino de Lima e a R. Carneiro Leão.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 102'">
				<p><b>Art. 102.</b> Nos trechos indicados nas plantas nºs 26.999/00 a 26.999/14, Classificação S-1.227, anexas a esta Lei, ficam revogados os alinhamentos viários aprovados em lei, na seguinte conformidade:</p>
				<ol class="romanos">
					<li>a abertura de nova de via de ligação prevista pela Lei Nº 16.541/16, no trecho entre a Av. do Estado e um ponto 110 metros aquém da Av. Santos Dumont, conforme indicado nas plantas 26.999/03 e 26.999/04;</li>
					<li>a abertura de nova de via de ligação prevista pela Lei Nº 16.541/16, no trecho entre a Av. do Estado e 110 metros aquém da Av. do Estado, conforme indicado na planta 26.999/03;</li>
					<li>alargamento da Rua Pedro Vicente previsto pela Lei Nº 16.541/16, no trecho entre a Av. Cruzeiro do Sul e a Rua Canindé, conforme indicado na planta 26.999/08;</li>
					<li>a abertura de nova de via de ligação prevista pela Lei Nº 16.541/16, no trecho entre a Rua Santa Rita e a Rua Catumbi, conforme indicado nas plantas 26.99911 e 26.999/12.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 103'">
				<p><b>Art. 103.</b> Ficam revogados:</p>
				<ol class="romanos">
					<li>a Lei n. 12.349, de 06 de junho de 1997</li>
					<li>os incisos IV e XXII do Art. 1º da Lei n. 5.347 de 12 de setembro de 1957;</li>
					<li>o inciso I do Art. 1º da Lei 7.534 de 9 de outubro de 1970;</li>
					<li>o inciso II do Art. 1º da Lei 9.938 de 16 de julho de 1985.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="commentId()" context="'Art. 103'">
				<p><b>Art. 104.</b> Esta Lei entrará em vigor na data de sua publicação.</p>
			</CommentsContext>
		</section>
		<section>
			<h2 class="titulo" indent="1">Mapas e Quadros</h2>
			<h3>Mapas</h3>
			<ul class="links">
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/mapas/Mapa_1_SCE996U001A.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa I: Plano urbanístico</div>
						<span>2 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/mapas/Mapa_2_SCE996U002A.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa II: Perímetro de adesão e perímetros expandidos</div>
						<span>10.6 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/mapas/Mapa_3_SCE996U003A.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa III: Parâmetros urbanísticos</div>
						<span>5 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/mapas/Mapa_4_SCE996U004A.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa IV: Compartimentos ambientais e áreas verdes</div>
						<span>7.3 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/mapas/Mapa_5_SCE996U005A.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa V: Assentamentos precários e ZEIS</div>
						<span>7.7 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/mapas/Mapa_6_SCE996U006A.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa VI: Plano de melhoramentos viários</div>
						<span>7.3 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/mapas/Mapa_7_SCE996U007A.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa VII: Programa de intervenções</div>
						<span>9.4 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/mapas/')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa VIII: Perímetros especiais</div>
						<span>7.4 Mb</span>
					</a>
				</li>
			</ul>
			<h3>Quadros</h3>
			<ul class="links">
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/quadros/Quadro_1A_Eixos_Estrategicos.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 1A: Eixos Estratégicos</div>
						<span>64 kb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/quadros/Quadro_1B_Programa_de_Intervencoes.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 1B: Programa de Intervenções</div>
						<span>81 kb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/quadros/Quadro_1C_Areas_Verdes.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 1C: Áreas Verdes</div>
						<span>65 kb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/quadros/Quadro_2_Parametros.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 2: Parâmetros</div>
						<span>73 kb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/quadros/Quadro_3_Quota_Ambiental.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 3: Quota Ambiental</div>
						<span>54 kb</span>
					</a>
				</li>
			</ul>
			<h3>Devolutivas</h3>
			<ul class="links">
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/devolutivas/Devolutiva_Consulta_Publica.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Devolutiva Consulta Pública</div>
						<span>278 kb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/devolutivas/Devolutiva_Contribuicoes.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Devolutiva Contribuições I</div>
						<span>17 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-piu-setor-central/devolutivas/Devolutiva-Contribuicoes_II.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Devolutiva Contribuições II</div>
						<span>329 kb</span>
					</a>
				</li>
			</ul>
		</section>
		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{ id: 1000, context: 'Contribuições' }"></Comments>
		</section>
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
