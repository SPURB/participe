<template>
	<div class="MinutaLpuos" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/placeholder_480w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>2ª Minuta Participativa - Ajustes na LPUOS</div></template>
			<template slot="subtitulo">
				<div>Ajustes da Lei nº 16.402, de 22 de março de 2016.
				<br>Lei de Parcelamento, Uso e Ocupação do Solo – LPUOS.
				</div>
			</template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>

		<Apoio>
			<template slot="item1">
				<li>
					<input type="radio" name="tabs" id="item1">
					<label for="item1">Anexos</label>
					<div class="conteudoTab">
						a
					</div>
				</li>
			</template>
		</Apoio>

		<section>
			<h2 class="titulo" indent="1">Legenda</h2>
			<p>
				Texto vigente a ser mantido (Lei nº 16.402/2016)<br>
				<s>Texto vigente com proposta de Exclusão  (Lei nº 16.402/2016)</s><br>
				<mark>Inclusão proposta</mark>
			</p>
		</section>
		<section>
			<h2 class="titulo" indent="1">Minuta de Projeto de Lei , DE — DE — DE 2019</h2>			
			<p>
				<mark>Dispõe sobre ajustes e normas complementares à Lei nº 16.402, de 22 de março de 2016, dá nova redação ao artigo 108 da Lei 16.642, de 2017 e dá outras providências.</mark>
			</p>
			<p class="artigo">
				<mark><strong>BRUNO COVAS</strong>, Prefeito do Município de São Paulo, no uso das atribuições que lhe são conferidas por lei, faz saber que a Câmara Municipal, em sessão de ____, decretou e eu promulgo a seguinte lei:</mark>
			</p>
		</section>
		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 1º</strong> Esta lei dispõe sobre ajustes e normas complementares à Lei nº 16.402, de 22 de março de 2016 e dá outras providências.</mark>
			</p>		
			<Comments :attr="{id:commentId(true), context:'Art. 1º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 2º</strong> O art. 12, da Lei nº 16.402, de 22 de março de 2016, com nova redação dada ao § 3º e com o acréscimo dos §§ 4º, 5º, 6º e 7º, passa a vigorar com a seguinte redação:</mark>
			</p>
			<p>“Art. 12. As Zonas Especiais de Interesse Social (ZEIS) são porções do território destinadas, predominantemente, à moradia digna para a população de baixa renda por intermédio de melhorias urbanísticas, recuperação ambiental e regularização fundiária de assentamentos precários e irregulares, bem como à provisão de novas Habitações de Interesse Social – HIS e Habitações de Mercado Popular – HMP, a serem dotadas de equipamentos sociais, infraestrutura, áreas verdes e comércio e serviços locais, situadas na zona urbana.</p>
			<p>§ 1º As ZEIS classificam-se em 5 (cinco) categorias, definidas nos termos dos incisos I a V do “caput” do art. 45 da Lei nº 16.050, de 31 de julho de 2014 – PDE.</p>
			<p>§ 2º Aplicam-se às ZEIS as disposições da Seção IV do Capítulo II do Título II da Lei nº 16.050, de 31 de julho de 2014 – PDE, exceto o disposto no art. 56 da mesma lei.</p>
			<p>§ 3º Não se aplica a destinação mínima de percentuais de área construída de HIS 1 e HIS 2 previstos no Quadro 4 da Lei nº 16.050, de 31 de julho de 2014 – PDE, aos imóveis públicos <mark>situados em ZEIS, quando</mark>  destinados a <mark>equipamentos sociais de educação, saúde, assistência social, cultura, esporte e lazer,</mark> serviços da administração pública, serviços públicos de abastecimento, <mark>bem como à infraestrutura urbana, de acordo com paragrafo 1º do art. 55 da Lei nº 16.050, de 31 de julho de 2014 – PDE.</mark></p>
			<p><mark>§4º A implantação de equipamentos sociais em áreas ocupadas localizadas em ZEIS-1 ou ZEIS-3 deverá ser precedida de cadastro da população moradora, garantido o atendimento habitacional, conforme disposto em legislação específica.</mark></p>
			<p><mark>§ 5º Nas ZEIS 1, ZEIS 2, ZEIS 3 e ZEIS 4, poderá ser concedido um excedente de até 20% (vinte por cento) de potencial construtivo adicional não computável,  quando o agente promotor público ou privado optar por executar no mínimo 80% (oitenta por cento) de HIS 1, atendendo às exigências estabelecidas no Quadro 4 anexo a Lei nº 16.050, de 31 de julho de 2014 – PDE. </mark></p>
			<p><mark>§ 6º Nos empreendimentos em ZEIS em lotes com área superior a 20.000m2 (vinte mil metros quadrados), além das exigências de parcelamento da legislação específica, deverá ser reservado lote com área mínima de 3% (três por cento) da área total do lote original, destinado exclusivamente à implantação de uso não residencial, observadas as seguintes condições:</mark></p>
			<p><mark>I - o lote resultante deverá ter frente para via pública oficial;</mark></p>
			<p><mark>II - a obrigatoriedade do uso não residencial deverá ser averbada na respectiva matrícula do Registro de Imóveis.</mark></p>
			<p><mark>§7º O disposto no § 6º não se aplica nos casos em que o empreendimento tenha fachada ativa em todos os lotes resultantes, nos termos definidos por esta lei.” (NR)</mark></p>
			</p>
			<Comments :attr="{id:commentId(), context:'Art. 2º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 3º</strong>O art. 24 da Lei nº 16.402, de 22 de março de 2016, excluído o inciso VII, com nova redação dada aos incisos I ao VI e ao § 5º, passa a vigorar com a seguinte redação:</mark>
			</p>
			<p><mark>“Art. 24.</mark> Na emissão de novas declarações de potencial construtivo passível de transferência de imóveis enquadrados como ZEPEC, nos termos do art. 125 da Lei nº 16.050, de 31 de julho de 2014 – PDE, serão aplicados os seguintes Fatores de Incentivo (Fi): </p>
			<p><s>I - 1,2 (um inteiro e dois décimos) para imóveis com área de lote de até 500m² (quinhentos metros quadrados);</s></p>
			<p><mark>I - 2,0 (dois inteiros) para imóveis com área de lote de até 1.000m² (mil metros quadrados); </mark></p>
			<p><s>II - 1,0 (um inteiro) para imóveis com área de lote superior a 500m² (quinhentos metros quadrados) até 2.000m² (dois mil metros quadrados);</s></p>
			<p><mark>II - 1,5 (um inteiro e cinco décimos) para imóveis com área de lote superior a 1.000m² (mil metros quadrados) até 5.000m² (cinco mil metros quadrados);</mark></p>
			<p><s>III - 0,9 (nove décimos) para imóveis com área de lote superior a 2.000m² (dois mil metros quadrados) até 5.000m² (cinco mil metros quadrados);</s></p>
			<p><mark>III - 1,2 (um inteiro e dois décimos) para imóveis com área de lote superior a 5.000m² (cinco mil metros quadrados) até 10.000m² (dez mil metros quadrados); </mark></p>
			<p><s>IV - 0,7 (sete décimos) para imóveis com área de lote superior a 5.000m² (cinco mil metros quadrados) até 10.000m² (dez mil metros quadrados);</s></p>
			<p><mark>IV - 0,8 (oito décimos) para imóveis com área de lote superior a 10.000m² (dez mil metros quadrados) até 20.000m² (vinte mil metros quadrados); </mark></p>
			<p><s>V - 0,5 (cinco décimos) para imóveis com área de lote superior a 10.000m² (dez mil metros quadrados) até 20.000m² (vinte mil metros quadrados);</s></p>
			<p><mark>V - 0,6 (seis décimos) para imóveis com área de lote superior a 20.000m² (vinte mil metros quadrados) até 50.000m² (cinquenta mil metros quadrados); </mark></p>
			<p><s>VI - 0,2 (dois décimos) para imóveis com área de lote superior a 20.000m² (vinte mil metros quadrados) até 50.000m² (cinquenta mil metros quadrados);</s></p>
			<p><mark>VI - 0,2 (dois décimos) para imóveis com área de lote superior a 50.000m² (cinquenta mil metros quadrados). (NR)</mark></p>
			<p><mark>VII - </mark><s>0,1 (um décimo) para imóveis com área de lote superior a 50.000m² (cinquenta mil metros quadrados) </s><mark>REVOGADO</mark></p>
			<p><strong>§ 1º</strong> A transferência do direito de construir originada de qualquer imóvel enquadrado como ZEPEC fica condicionada à recuperação e manutenção dos atributos que geraram o seu enquadramento como ZEPEC. </p>
			<p><strong>§ 2º</strong> O não atendimento das providências de conservação do imóvel cedente acarretará ao proprietário ou possuidor multa conforme estabelecido no Quadro 5 desta lei. </p>
			<p><strong>§ 3º</strong> A multa será renovada automaticamente a cada 30 (trinta) dias, até que sejam comunicadas pelo proprietário ou possuidor, por escrito, e aceitas pela Municipalidade as providências relativas à conservação do imóvel cedente. </p>
			<p><strong>§ 4º</strong> Ato do Executivo regulamentará a aplicação da transferência do direito de construir de imóveis enquadrados como ZEPEC, bem como os órgãos competentes para a análise e deliberação, garantida à manifestação do Conselho Gestor do Fundo de Desenvolvimento Urbano – FUNDURB, quando for o caso. </p>
			<p><strong>§ 5º</strong> O valor pecuniário correspondente à totalidade do potencial construtivo transferido no período referente aos últimos 12 (doze) meses em relação às transferências do direito de construir sem doação nos termos do art. 124 da Lei nº 16.050, de 31 de julho de 2014 – PDE, não poderá exceder a <s>5% (cinco por cento)</s> <mark>10% (dez por cento)</mark> do valor total arrecadado no FUNDURB no mesmo período, considerando a data do pedido da certidão de transferência de potencial construtivo. <mark>(NR)</mark></p>
			<p><strong>§ 6º</strong> Para fins de aplicação do disposto no parágrafo anterior, o Executivo poderá adotar leilão para a emissão de certidões de transferência de potencial construtivo, cujos procedimentos serão estabelecidos em regulamento específico.”</p>
			<Comments :attr="{id:commentId(), context:'Art. 3º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 4º</strong> O art. 25, da Lei nº 16.402, de 22 de março de 2.016, excluído o parágrafo único, acrescido de dois incisos e novos parágrafos 1º, 2º e 3º, passa a vigorar com a seguinte redação:</mark>
			</p>
			<p><s><strong>Art. 25.</strong> No caso de reformas com ampliação de área construída de imóvel classificado como ZEPEC-BIR em que tenha sido emitida declaração de potencial construtivo passível de transferência nos termos da Lei nº 16.050, de 31 de julho de 2014 – PDE, a área construída acrescida deverá ser descontada do potencial construtivo passível de transferência da referida declaração.</s></p>
			<p><strong>Parágrafo único</strong> <mark>REVOGADO.</mark> <s>Quando o potencial construtivo passível de transferência tiver sido totalmente transferido, fica vedado o aumento de área construída no referido imóvel.</s></p>
			<p><mark>“Art. 25. Aos imóveis enquadrados na ZEPEC–BIR, para os quais tenha sido emitida Declaração de Potencial Construtivo Passível de Transferência, nos casos de reforma com acréscimo de área construída, aplicam-se as seguintes disposições:</mark></p>
			<p><mark>I - Caso a Declaração tenha sido emitida nos termos da legislação anterior à Lei nº 16.050, de 31 de julho de 2014 - PDE, o acréscimo de área construída deverá ser descontado do potencial construtivo constante na correspondente Declaração;</mark></p>
			<p><mark>II - Caso a Declaração tenha sido emitida nos termos da Lei nº 16.050, de 31 de julho de 2014 – PDE, o total de área construída acima do coeficiente de aproveitamento básico do lote será descontado do potencial construtivo transferível, constante da Declaração.</mark></p>
			<p><mark><strong>§ 1º</strong> Poderá haver acréscimo de área construída adicional, acima do CA básico, correspondente à diferença entre o potencial construtivo decorrente da aplicação do CA máximo e do potencial construtivo constante da Declaração de Potencial Construtivo Passível de Transferência, mediante outorga onerosa do direito de construir.</mark></p>
			<p><mark><strong>§ 2º</strong> O potencial construtivo passível de transferência poderá ser utilizado no próprio lote.</mark></p>
			<p><mark><strong>§ 3º</strong> A reforma em imóveis enquadrados como ZEPEC-BIR depende de anuência prévia dos órgãos de preservação competentes.“ (NR)</mark></p>
			<Comments :attr="{id:commentId(), context:'Art. 4º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<p class="artigo">
				<strong class="titulo" indent="1">Art. 5º</strong> O art. 29, da Lei nº 16.402, de 22 de março de 2016, com nova redação dada ao caput e ao § 2º e acréscimo do § 3º, passa a vigorar com a seguinte redação: 
			</p>
			<p>“<strong>Art. 29</strong>. Nas áreas ocupadas por clubes extintos ou com termo de concessão terminado ou revogado na vigência da Lei nº 13.885, de 25 de agosto de 2004, ou a partir da entrada em vigor desta lei, <s>ficam mantidos os parâmetros de uso e ocupação estabelecidos nos Quadros 3, 4, 4A e 4B desta lei para a categoria em que o clube se enquadrava, independentemente de se tratar de área pública ou privada</s> <mark>os parâmetros de uso e ocupação serão definidos da seguinte forma:</mark></p>
			<p><mark>I - Áreas públicas: aplicam-se as disposições do artigo 28 desta Lei.</mark></p>
			<p><mark>II – Áreas privadas: serão definidos pela Câmara Técnica de Legislação Urbanística – CTLU considerando-se as zonas do entorno, observados os coeficientes de aproveitamento da estabelecidos por macroárea, conforme Quadro 2A da Lei 16.050, de 2014 – PDE. (NR)</mark></p>
			<p><strong>§ 1º</strong> Para os clubes enquadrados em AC-1 e AC-2 os coeficientes de aproveitamento, taxa de ocupação e gabarito de altura máxima estabelecidos no Quadro 3 desta lei, sem prejuízo do atendimento da taxa de permeabilidade mínima, poderão ser majorados em até 20% (vinte por cento) desde que seja atingido o dobro da pontuação mínima de Quota Ambiental prevista para o imóvel nos termos desta lei.</p>
			<p><s><strong>§ 2º</strong> Para instalação de equipamentos públicos sociais nas áreas públicas de que trata o “caput” deste artigo, em casos de comprovada necessidade de modificação dos índices estabelecidos no Quadro 3 desta lei, em função da demanda da região a ser atendida, órgão municipal intersecretarial poderá fixar parâmetros distintos, desde que o uso esteja previsto no Quadro 4 desta lei e que seja atendida contrapartida ambiental fixada pelo art. 33 desta lei</s></p>
			<p><mark><strong>§ 2º </strong>Alternativamente ao previsto no § 1º do caput, aos clubes enquadrados como AC-1 poderão ser aplicados os parâmetros de uso e ocupação da zona do entorno na área correspondente a no máximo 20% da área do terreno, desde que:</mark></p>
			<p><mark>I - seja atingido o dobro da pontuação mínima de Quota Ambiental prevista para o imóvel nos termos desta lei;</mark></p>
			<p><mark>II – seja atendida a cota de solidariedade, correspondente a área incentivada, nos termos do inciso III, do § 2º do art. 112 da Lei nº 16.050, de 31 de julho de 2014 - PDE, independentemente da área construída computável.</mark></p>
			<p><mark><strong>§ 3º</strong> As novas áreas adquiridas por clubes particulares e que forem incorporadas, para expansão, às áreas desses clubes, passam automaticamente a se enquadrar como AC-1 ou AC-2, a depender da categoria do clube.” (NR)</mark></p>
			<Comments :attr="{id:commentId(), context:'Art. 5º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 6º</strong> O art. 43 da Lei nº 16.402, de 22 de março de 2016, fica acrescido dos § 3º com a seguinte redação:</mark>
			</p>
			<p>“<strong>Art. 43.</strong> A área máxima de quadra no território da zona urbana do Município é de 20.000m² (vinte mil metros quadrados) e o comprimento máximo da face de quadra é de 300m (trezentos metros), observados os limites menores estabelecidos para as diferentes zonas.</p>
			<p><strong>§ 1º</strong> Nas faces de quadra com comprimento superior a 150m (cento e cinquenta metros), deverá ser prevista obrigatoriamente via de pedestre a cada 150m (cento e cinquenta metros).</p>
			<p><strong>§ 2º</strong> A critério do Executivo, nos casos de lotes e glebas com declividade superior a 20% (vinte por cento) a via de pedestre prevista no parágrafo anterior poderá ser dispensada, quando esta não conectar pelo menos duas vias;</p>
			<p><mark><strong>§ 3º</strong> No caso de quadras com geometria irregular ou outros impedimentos a via de pedestres poderá ser dispensada mediante justificativa técnica e deliberação da CTLU.” (NR)</mark></p>
			<Comments :attr="{id:commentId(), context:'Art. 6º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 7º</strong> O art. 49 da Lei nº 16.402, de 22 de março de 2016, com alteração do § 2º, passa a vigorar com a seguinte redação:</mark>
			</p>
			<p>
				“<strong>Art. 49.</strong> São modalidades de parcelamento do solo: 
				<ol type="I">
					<li>loteamento;</li>
					<li>desmembramento;</li>
					<li>remembramento;</li>
					<li>reparcelamento;</li>
					<li>Parcelamento de Interesse Social (PIS)</li>
				</ol>
			</p>
			<p><strong>§ 1º</strong> Considera-se remembramento o reagrupamento de lotes para edificar, até o limite das dimensões máximas estabelecidas no Quadro 2A desta lei, desde que a operação não interfira com o sistema viário existente, nem imponha qualquer outra modificação nos logradouros já existentes.</p>
			<p><strong>§ 2º</strong> Considera-se reparcelamento do solo o reagrupamento de lotes ou glebas e sua posterior divisão em novos lotes com dimensões, localização ou configuração distinta da situação original, sendo que no caso de remanejamento de vias e áreas públicas, deverá ser editada lei específica, que contenha a previsão das desafetações e das novas destinações correspondentes. (NR)</p>
			<p><strong>§ 3º</strong> O reparcelamento observará as disposições desta lei relativas ao parcelamento.</p>
			<p><strong>§ 4º</strong> Os projetos de reparcelamento poderão envolver conjunto de lotes ou glebas que, somados, atinjam dimensões máximas superiores àquelas estabelecidas no Quadro 2A desta lei, desde que os lotes resultantes do reparcelamento respeitem as dimensões estabelecidas no referido quadro. </p>
			<p><strong>§ 5º</strong> No caso de parcelamento do solo para fins de HIS e HMP, os parâmetros e regras a serem observados serão:
				<ol type="I">
					<li>no EHIS aqueles definidos em decreto;</li>
					<li>II - no EHMP as disposições estabelecidas nesta lei.”</li>
				</ol>
			</p>
			<Comments :attr="{id:commentId(), context:'Art. 7º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<p class="artigo">
				<strong class="titulo" indent="1">Art. 8º</strong> O art. 60 da Lei nº 16 402, de 22 de março de 2016, com base no disposto no § 2º do art. 374 da Lei nº 16.050, de 31 de julho de 2014 – PDE, passa a vigorar com a seguinte redação:
			</p>
			<p>“<strong>Art. 60.</strong> O gabarito de altura máxima (GAB) da edificação será o definido no Quadro 3 desta lei, exceto: </p>
			<p><s>I – Nos imóveis inseridos no perímetro da Operação Urbana Centro, que deverão respeitar as disposições da Lei n° 12.349, de 6 de junho de 1997, e as alterações que vierem a sucedê-la;</s></p>
			<p><s>II</s> <mark>I</mark> - nas quadras nas quais em mais de <s>50% (cinquenta por cento)</s> <mark>40% (quarenta por cento)</mark> da área dos lotes as edificações existentes já tenha ultrapassado os limites previstos no referido quadro; <mark>(NR)</mark></p>
			<p><mark>II – nos imóveis inseridos na zona de uso ZC, que tenham o acesso de veículos feito para a via com largura igual ou superior a 12 m (doze metros), o gabarito de altura máximo será de 60 m (sessenta metros); (NR)</mark></p>
			<p><mark>III – nos imóveis inseridos na zona de uso ZM, que tenham o acesso de veículos por via com largura igual ou superior a 12 m (doze metros), o gabarito de altura máximo será de 36 m (trinta e seis metros). (NR)</mark></p>
			<p><s><strong>§ 1º</strong> Serão consideradas, para fins de aplicação da exceção prevista no inciso II deste artigo, as áreas dos lotes com edificações existentes, com gabarito maior que o disposto nesta lei .</s></p>
			<p><s><strong>§ 1º</strong> Nos casos dos terrenos que contenham total ou parcialmente declive ou aclive acima de 30% (trinta por cento) identificado no mapa digital oficial do município ou em levantamento topográfico atualizado e atestado por profissional habilitado, a edificação deverá obedecer ao gabarito de altura máxima de 28m (vinte e oito metros).</s></p>
			<p><mark><strong>§ 1º</strong> O disposto nos incisos II e III não se aplica aos lotes inseridos na Macroárea de Estruturação Metropolitana – MEM ou lindeiros a ZER ou a ZCOR, excetuados os que estejam contidos nos perímetros das Operações Urbanas ou Operações Urbanas Consorciadas, aos quais se aplica o disposto em suas leis específicas. (NR)</mark></p>
			<p><mark><strong>§ 2º</strong> A aplicação do disposto nos incisos II e III fica condicionada ao atendimento do limite de 25% (vinte e cinco por cento) de vedação da testada do lote com muros.” (NR)</mark></p>
			<Comments :attr="{id:commentId(), context:'Art. 8º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 9º</strong>O art. 62 da Lei nº 16.402, de 22 de março de 2016, com a nova redação dada à alínea “a” do inciso I, aos incisos VII e IX, ao § 3º e acréscimo dos §§ 4º e 5º, passa a vigorar com a seguinte redação:</mark>
			</p>
			<p>“<strong>Art. 62.</strong> São consideradas áreas não computáveis:</p>
			<p>I - nas ZEU, ZEUa, ZEUP, ZEUPa, ZEM e ZEMP, as áreas cobertas, em qualquer pavimento, ocupadas por circulação, manobra e estacionamento de veículos, desde que o número de vagas, exceto as especiais, motocicletas e bicicletas, não ultrapasse: </p>
			<p>a) nos usos residenciais, 1 (uma) vaga por unidade habitacional <mark>ou, opcionalmente, 1 (uma) vaga a cada 60 m² (sessenta metros quadrados) de área construída computável de cada unidade habitacional</mark>, desde que observada a cota de garagem máxima <mark>de</mark> <s>igual a</s> 32m² (trinta e dois metros quadrados) por vaga; <mark>(NR)</mark></p>
			<p>b) nos usos não residenciais, 1 (uma) vaga para cada 70m² (setenta metros quadrados) de área construída computável, excluídas as áreas ocupadas por circulação, manobra e estacionamento de veículos, desprezadas as frações, desde que observada a cota de garagem máxima igual a 32m² (trinta e dois metros quadrados) por vaga; </p>
			<p>II - nos edifícios-garagem situados nas áreas referidas no § 1º do art. 126 desta lei, as áreas cobertas, em qualquer pavimento, ocupadas por circulação, manobra e estacionamento de veículos, respeitado o limite estabelecido no § 2º deste artigo; </p>
			<p>III - nas zonas não referidas no inciso I do “caput” deste artigo, as áreas cobertas, em qualquer pavimento, ocupadas por circulação, manobra e estacionamento de veículos; </p>
			<p>IV - as áreas ocupadas por vagas especiais destinadas a pessoas com deficiência ou mobilidade reduzida e idosos, vagas de motocicletas, vagas de bicicletas e vagas para carga e descarga, até o limite mínimo exigido pelo Quadro 4A desta lei; </p>
			<p>V - as áreas cobertas nos usos residenciais, em qualquer pavimento, destinadas às áreas comuns de circulação, incluindo a circulação vertical, limitada a 20% (vinte por cento) da área coberta do pavimento, exceto nas ZEU, ZEUa, ZEUP, ZEUPa, ZEM e ZEMP; </p>
			<p>IV - as áreas não computáveis previstas na legislação edilícia;</p>
			<p>VII - as áreas construídas no nível da rua com fachada ativa ocupando, no mínimo, 25% (vinte e cinco por cento) <s>em cada uma das</s> <mark>do somatório de todas as</mark> testadas <mark>voltadas para vias oficiais de circulação de veículos, em qualquer frente do lote em que o uso não residencial seja permitido,</mark> <s>e de no</s> <mark>observado o</mark> mínimo de 3m (três metros) de extensão por fachada <mark>ativa</mark>, <s>destinadas</s> até o limite de: <mark>(NR)</mark></p>
			<p>a) 50% (cinquenta por cento) da área do lote nas ZEU, ZEUa, ZEUP, ZEUPa, ZEM, ZEMP, ZC e ZCa; </p>
			<p>b) 20% (vinte por cento) da área do lote nas demais zonas; </p>
			<p>VIII - nos lotes localizados nas ZEU, ZEUa, ZEUP, ZEUPa, ZEM, ZEMP, ZC e ZCa, a área destinada aos usos não residenciais, até o limite de 20% (vinte por cento) da área construída computável total nos empreendimentos de uso misto com fachada ativa;</p>
			<p>IX - <mark>nas ZEU, ZEUa, ZEUP, ZEUPa, ZEM, ZEMP,</mark> as áreas cobertas, em qualquer pavimento, ocupadas por circulação, manobra e estacionamento de veículos, na proporção de 1 (uma) vaga de estacionamento para cada 70m² (setenta metros quadrados) de área construída não computável incentivada nos termos do inciso VII do “caput” deste artigo, desde que observada a cota de garagem máxima igual a 32m² (trinta e dois metros quadrados) por vaga; <mark>(NR)</mark></p>
			<p>X - a área destinada aos usos não residenciais, até o limite de 20% (vinte por cento) da área construída computável total nos EHIS; </p>
			<p>XI - a área incentivada da quota ambiental, conforme o § 3º do art. 82 desta lei;</p>
			<p>XII - a área destinada às HIS, proveniente da aplicação da cota de solidariedade, conforme previsto no § 1º do art. 112 da Lei nº 16.050, de 31 de julho de 2014 – PDE; </p>
			<p>XIII - as áreas consideradas não computáveis nos termos do § 2º do art. 67 da Lei nº 16.050, de 31 de julho de 2014 – PDE; </p>
			<p>XIV - as áreas destinadas às atividades operacionais do sistema de transporte público coletivo, nos termos do § 1º art. 90 desta lei; </p>
			<p>XV - as áreas ocupadas por vestiário de usuários de bicicletas; </p>
			<p>XVI - nos lotes com área de até 250m² (duzentos e cinquenta metros quadrados) localizados na Macroárea de Redução da Vulnerabilidade e na Macroárea de Redução da Vulnerabilidade Urbana e Recuperação Ambiental conforme Mapa 2 da Lei nº 16.050, de 31 de julho de 2014 – PDE, até 50% (cinquenta por cento) da área construída computável total.</p>
			<p><strong>§ 1º</strong> Para efeito de cálculo das áreas não computáveis previstas no inciso I do “caput” deste artigo, em edifícios de uso misto que tenham usos residenciais e não residenciais envolvendo uma ou mais subcategorias de uso não residenciais e em edifícios não residenciais envolvendo mais de uma subcategoria de uso não residencial, deverá ser considerada a área construída utilizada para cada subcategoria de uso.</p>
			<p><strong>§ 2º</strong> A somatória das áreas construídas não computáveis referidas nos incisos I a VI do “caput” deste artigo fica limitada a 59% (cinquenta e nove por cento) do valor correspondente à área construída total da edificação, excluídas as áreas não computáveis previstas nos incisos VII a XVI.</p>
			<p><strong>§ 3º</strong> Para fins de aplicação do disposto no inciso VII, poderão ser consideradas áreas construídas no pavimento imediatamente superior ou inferior <s>de</s> <mark>ao pavimento de</mark> acesso direto ao logradouro, desde que façam parte do mesmo compartimento edificado. <mark>(NR)</mark></p>
			<p><mark><strong>§ 4º</strong> Os benefícios previstos nos incisos VII e VIII não poderão ser utilizados para as atividades central de armazenamento e distribuição de carga de pequeno porte, serviços de armazenamento e guarda de bens móveis, edifícios-garagem e estacionamento de veículos.</mark></p>
			<p><mark><strong>§ 5º</strong> Não se aplica o limite disposto no § 2º ao incentivo previsto no § 5º do art. 12 da lei 16.402, de 2016.” (NR)</mark></p>

			<Comments :attr="{id:commentId(), context:'Art. 9º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<p class="artigo">
				<strong class="titulo" indent="1">Art. 10.</strong>O art. 64 da nº Lei nº 16.402, de 22 de março de 2016, passa a vigorar com a seguinte redação:
			</p>
			<p>“<strong>Art. 64.</strong> Nas quadras que contenham vilas <s>ou via sem saída com largura inferior a 10m (dez metros)</s> aplicam-se as seguintes disposições: <mark>(NR)</mark></p>
			<p>I - na faixa envoltória da vila deverá ser observado o gabarito de altura máxima de 28m (vinte e oito metros) nas ZEU, ZEUP, ZEM, ZEMP<mark>, ZC e ZEIS</mark> e de 15m (quinze metros) nas demais zonas, quando o gabarito definido para a zona não for mais restritivo; <mark>(NR)</mark></p>
			<p>II – os lotes pertencentes à vila não poderão ser remembrados a lotes que não pertençam à vila, <mark>exceto no caso de demolição de todas as edificações nos lotes pertencentes à mesma. (NR)</mark></p>
			<p>III - será admitida a instalação dos usos e atividades permitidos na zona em que se situam os imóveis.</p>
			<p><s>Parágrafo único.</s> <strong>§ 1º</strong> A faixa envoltória a que se refere o inciso I do “caput” deste artigo <mark>será de 20m (vinte metros) medidos a partir do perímetro externo dos lotes. (NR)</mark></p>
			<p><s>I -no caso de vila, de 20m (vinte metros), medidos a partir do perímetro externo dos lotes;</s></p>
			<p><s>II -no caso de rua sem saída, de 20m (vinte metros), medidos a partir dos alinhamentos da rua sem saída.</s></p>
			<p><mark><strong>§ 2º</strong> No caso de aquisição de todos os lotes da vila por um único proprietário e demolição de todas as suas edificações, a vila será considerada extinta, sendo a via pública de seu interior considerada automaticamente desafetada, passando à categoria dos bens dominiais da Administração Pública.</mark></p>
			<p><mark><strong>§ 3º</strong> Na hipótese do parágrafo anterior, para fins de garantir o acesso dos antigos lotes da vila ao viário público, fica o Poder Público autorizado a alienar o bem público dominial caracterizado como antigo leito de viário diretamente ao proprietário dos lotes da antiga vila, observando-se o seguinte:</mark></p>
			<p><mark>I – o valor da alienação deverá ser o obtido mediante o processo de avaliação previsto na legislação municipal;</mark></p>
			<p><mark>II – uma vez incorporado o bem ao patrimônio do adquirente, sejam os lotes da vila e a área alienada remembrados entre si, aplicando-se ao lote remanescente as regras de parcelamento, uso e ocupação do solo previstas nesta lei ou na legislação especial incidente aos terrenos;</mark></p>
			<p><mark>III - os valores auferidos com a alienação prevista no parágrafo anterior serão depositados no Fundo de Desenvolvimento Urbano - FUNDURB.” (NR)</mark></p>

			<Comments :attr="{id:commentId(), context:'Art. 10.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 11.</strong> O art. 66 da Lei nº 16.402, de 22 de março de 2016, com alteração do inciso III e acréscimo do § 2º, passa a vigorar com a seguinte redação:</mark>
			</p>
			<p>“<strong>Art. 66.</strong> Os recuos laterais e de fundo ficam dispensados: </p>
			<p>I - quando a altura da edificação for menor ou igual a 10m (dez metros) medida em relação ao perfil natural do terreno, conforme base georreferenciada cadastral oficial do Município, exceto em ZDE-2, ZPI-1 e ZPI-2;</p>
			<p>II - quando o lote vizinho apresentar edificação encostada na divisa do lote, conforme análise caso a caso pelo órgão técnico competente, exceto em ZDE-2, ZPI-1 e ZPI-2;</p>
			<p>III - em terrenos que tenham <s>declividade</s> <mark>desnível entre a testada e o fundo do lote superior a 30% (trinta por cento) e</mark> com área igual ou menor a 250m² (duzentos e cinquenta metros quadrados) ou frente menor ou igual a 10m (dez metros). <mark>(NR)</mark></p>
			<p><s>Parágrafo único.</s> <mark>§ 1º</mark> Para aplicação do disposto no inciso II do “caput” deste artigo, será considerada a situação fática das edificações. </p>
			<p><strong>§ 2º</strong> As edificações com altura menor ou igual a 10m (dez metros), medida em relação ao perfil natural do terreno, nos lotes localizados em ZDE-2, ZPI-1 e ZPI-2 que se enquadrem no disposto no art. 134 desta Lei, ficam dispensadas dos recuos laterais e de fundo.” (NR)</p>
			<Comments :attr="{id:commentId(), context:'Art. 11.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<p class="artigo">
				<strong class="titulo" indent="1">Art. 12.</strong>O art. 67 da Lei nº 16.402, de 22 de março de 2016, passa a vigorar com a seguinte redação:
			</p>
			<p><mark>“<strong>Art. 67.</strong> Deverá ser previsto passeio público com largura mínima de 5 m (cinco metros) nos projetos de novas edificações ou nas reformas com alteração de mais de 50% (cinquenta por cento) da área construída total nas seguintes situações:</mark><s> Em ZEU, ZEUa, ZEUP, ZEUPa, ZEM, ZEMP, ZC, ZCa, ZM e ZEIS, os passeios públicos deverão ter a largura mínima de 5m (cinco metros), observado que:</s></p>
			<p>I – nas ZEU, ZEUa, ZEUP, ZEUPa, ZEM e ZEMP, <s>o alargamento do passeio público será obrigatório;</s> <mark>nos lotes com qualquer área;</mark></p>
			<p>II – nas ZC e ZCa, <s>o alargamento do passeio público será obrigatório para</s> <mark>nos</mark> lotes maiores que 2.500m² (dois mil e quinhentos metros quadrados) <s>e facultativo para os menores;</s></p>
			<p><mark>III – Nas ZM e ZMa nos lotes com área maior ou igual a 10.000m² (dez mil metros quadrados);</mark></p>
			<p><mark>IV – nas ZEIS conforme as disposições do decreto específico.</mark></p>
			<p><mark><strong>§ 1º</strong> Para atendimento das disposições previstas neste artigo a faixa necessária ao alargamento do passeio poderá ser doada à Municipalidade ou gravada como área não edificável, devidamente averbada no Cartório de Registro de Imóveis, devendo, em ambos os casos, ser integrada ao passeio público com o mesmo tipo de piso existente ou a execução de um novo piso na totalidade da nova área de calçada, sendo vedado qualquer tipo de barreira ou vedação.</mark></p>
			<p><strong><s>§1º</s> <mark>§2º</mark></strong> Nos casos em que o passeio público já apresente largura de 5m (cinco metros) ou quando ocorrer a doação <mark>ou a instituição de área não edificável</mark> da faixa necessária para seu alargamento, fica dispensado o atendimento do recuo de frente.</p>
			<p><strong>§ 3º</strong> Ficam dispensados de atendimento ao disposto no § 1º os lotes com área inferior a 1000m² (mil metros quadrados), localizados em ZEU, ZEUa, ZEUP, ZEUPa, ZEM e ZEMP quando for atendido o recuo de frente mínimo de 5 m (cinco metros); </p>
			<p><strong>§ 3º</strong> A obrigatoriedade estabelecida nos incisos I e II do “caput” deste artigo aplica-se somente às edificações novas e reformas que envolverem a ampliação de mais de 50% (cinquenta por cento) da área construída total.</p>
			<p><strong>§ 2º</strong> § 4º No caso de doação, os potenciais construtivos básico e máximo do remanescente do lote serão calculados em função de sua área original e não será cobrada outorga onerosa relativa ao potencial construtivo adicional previsto para a área transferida à Municipalidade.</p>
			<p><strong>§ 5º</strong> No caso de instituição de área não edificável, os potenciais construtivos básico e máximo do lote serão calculados em função de sua área original, aplicando-se a regra ordinária da outorga onerosa na hipótese de utilização de potencial construtivo adicional.</p>
			<p><strong>§ 6º</strong> O disposto nos §§ 3º e 4º aplica-se também aos lotes com área inferior às estabelecidas nos incisos II e III.</p>
			<p><strong>§ 5º</strong> § 7º Na hipótese de reforma da edificação existente em lotes com área menor que 500m² (quinhentos metros quadrados), fica dispensada a doação prevista nos caput incisos I a IV do caput, em ZEU, ZEUa, ZEUP, ZEUPa, ZEM e ZEMP quando a doação implicar demolição da edificação existente.  </p>
			<p><strong>§ 4º</strong> § 8º A O registro da doação prevista no “caput” deste artigo ou da instituição da área não edificável prevista no § 1º deste artigo deverá preceder a emissão do alvará de execução da edificação.</p>
			<p><strong>§ 9º</strong> Aplicam-se as disposições do Plano Emergencial de Calçadas - PEC instituído pela Lei nº 14.675, de 23 de janeiro de 2008, às faixas gravadas como área não edificável e averbadas no Cartório de Registro de Imóveis, quando incluídas no rol das vias do apontado plano.” (NR)</p>

			<Comments :attr="{id:commentId(), context:'Art. 12.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<p class="artigo">
				<strong class="titulo" indent="1">Art. 13.</strong> O art. 69 da Lei nº 16.402/16, de 22 de março de 2016, com alteração do caput e acrescido dos §§ 1º e 2º, passa a vigorar com a seguinte redação:
			</p>
			<p>“<strong>Art. 69.</strong> Não será exigido recuo mínimo de frente quando, no mínimo, 50% (cinquenta por cento) da face de quadra em que se situa o imóvel <s>esteja</s> <mark>estiver</mark> ocupada por edificações no alinhamento do logradouro, conforme base georreferenciada cadastral oficial do Município, não se aplicando a exigência ~<s>de doação para</s> <mark>de</mark> alargamento do passeio público prevista <s>no inciso II do “caput”</s> <mark>nos incisos I a IV</mark> do art. 67 desta Lei. <mark>(NR)</mark></p>
			<p><mark><strong>§ 1º</strong> Não se aplica o disposto no caput aos casos de novas edificações ou reformas que impliquem demolição de mais de 50% (cinquenta por cento) das edificações no alinhamento da face de quadra.</mark></p>
			<p><mark><strong>§ 2º</strong> A cobertura dos postos de serviços poderá ocupar os recuos de frente, desde que:</mark></p>
			<p><mark>I - seja destinada exclusivamente a abrigar pedestres e veículos;</mark></p>
			<p><mark>II - seja aberta em toda a extensão dos alinhamentos dos logradouros, e</mark></p>
			<p><mark>III - os recuos não sejam utilizados para a colocação de elementos estruturais de apoio.” (NR)</mark></p>

			<Comments :attr="{id:commentId(), context:'Art. 13.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<p class="artigo">
				<strong class="titulo" indent="1">Art. 14.</strong> O artigo 70 da Lei nº 16.402, de 22 de março de 2016, com nova redação dada ao inciso I, passa a vigorar com a seguinte redação
			</p>
			<p>“<strong>Art. 70</strong>. A área de fruição pública:</p>
			<p>I - <mark>poderá ser coberta ou descoberta, e</mark> não poderá ser fechada à circulação de pedestres por nenhum objeto de vedação, temporário ou permanente, <s>podendo ter controle de acesso</s> <mark>exceto</mark> no período noturno. <mark>(NR)</mark> </p>
			<p>II - deverá ter largura mínima de 4m (quatro metros), tratamento paisagístico que atenda às normas técnicas pertinentes à acessibilidade universal e, nas áreas de circulação de público, adotar o mesmo tipo de pavimentação da calçada diante do lote.”</p>
			<Comments :attr="{id:commentId(), context:'Art. 14.'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 15º </strong>O artigo 71 da Lei nº 16.402, de 22 de março de 2016, com nova redação dada aos §§ 1º e 2º e acréscimo dos §§ 3º, 4º e 5º passa a vigorar com a seguinte redação:</mark>
			</p>
			<p>“<strong>Art. 71.</strong> A fachada ativa, ocupada por uso não residencial (nR) localizada no nível do logradouro, deverá </p>
			<p>I - estar contida na faixa de 5m (cinco metros) a partir do alinhamento do lote, medida em projeção ortogonal da extensão horizontal;</p>
			<p>II - ter aberturas para o logradouro público, tais como portas, janelas e vitrines, com permeabilidade visual, com no mínimo 1 (um) acesso direto ao logradouro a cada 20m (vinte metros) de testada, a fim de evitar a formação de planos fechados sem permeabilidade visual na interface entre as construções e o logradouro, de modo a dinamizar o passeio público.</p>
			<p><strong>§ 1º</strong> O recuo entre a fachada ativa e o logradouro público deve estar fisicamente integrado ao passeio público, com acesso irrestrito, não podendo ser vedado com muros ou grades ao longo de toda a sua extensão, nem ser ocupado por vagas de garagem ou usado para manobra de veículos, carga e descarga e embarque e desembarque de passageiros<mark>, exceto as destinadas a PNE e idosos. (NR)</mark></p>
			<p><strong>§ 2º</strong> Nas vias que não possuam faixa exclusiva ou corredores de ônibus, o recuo entre a fachada ativa e o logradouro público poderá abrigar <s>excepcionalmente</s> vagas de estacionamento de automóveis desde que limitado a no máximo 20% (vinte por cento) da testada do imóvel <s>e autorizado por órgão competente de trânsito.</s>” (NR)</p>
			<p><mark><strong>§ 3º</strong> Nos lotes com desnível superior a 2,00m (dois metros) na testada admite-se a localização da fachada ativa em pavimento acessível com desnível máximo de 1,00m (um metro) do nível da testada, atendidas as condições dispostas no § 1º.” (NR)</mark></p>
			<p><mark><strong>§ 4º</strong> Para fins de aplicação do caput deste artigo, não são admitidos os grupos de atividade nR1-14, nR1-15, nR2-12 e nR3-6. (NR)</mark></p>
			<p><mark><strong>§ 5º</strong> Permite-se o disposto no inciso II inclusive aos lotes com testada inferior a 20 m (vinte metros).” (NR)</mark></p>

			<Comments :attr="{id:commentId(), context:'Art. 15º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>
		
		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 16º </strong>O art. 76 da Lei nº16. 402, de 22 de março de 2016, com alteração do caput, exclusão dos §§ 6º e 7º e acréscimo dos §§ 8º e 9º, passa a vigorar com a seguinte redação:</mark>
			</p>
			<p>“<strong>Art. 76.</strong> Nos processos de licenciamento de edificações novas ou de reformas com alteração área construída superior a <s>20% (vinte por cento)</s> <mark>50% (cinquenta por cento), ou com alteração da taxa de ocupação superior a 20% (vinte por cento)</mark>, será exigida uma pontuação mínima de QA, em função da localização e tamanho do lote, conforme Quadro 3A e Mapa 3, ambos desta lei.” <mark>(NR)</mark></p>
			<p><strong>§ 1º</strong> Para atingir a pontuação mínima mencionada no “caput” deste artigo, poderão ser utilizadas as soluções construtivas e paisagísticas que compõem os indicadores Cobertura Vegetal (V) e Drenagem (D) e seus respectivos parâmetros de cálculo FV e FD, descritos no Quadro 3B desta lei. </p>
			<p><strong>§ 2º</strong> Os lotes com área total menor ou igual a 500m² (quinhentos metros quadrados) estão isentos de aplicação da QA, ressalvados os casos de lote originário de desmembramento ou desdobro, realizado após a vigência desta lei, em que o lote original tenha área superior à mínima exigida.</p>
			<p><strong>§ 3º</strong> Os imóveis inseridos no perímetro da Operação Urbana Centro, cuja taxa de ocupação existente e regular seja superior a 0,7 (sete décimos), ficam dispensados da aplicação da QA. </p>
			<p><strong>§ 4º</strong> Na Macroárea de Contenção Urbana e Uso Sustentável e na Macroárea de Preservação dos Ecossistemas Naturais, agrupadas no Perímetro de Qualificação Ambiental – PA13, não se aplicam as disposições referentes à QA. </p>
			<p><strong>§ 5º</strong> O atendimento da QA poderá ocorrer na parcela do lote destinada à fruição pública, desde que não se impeça a circulação de pessoas.</p>
			<p><strong>§ 6º</strong> <s>A emissão de novas licenças de funcionamento para a atividade estacionamento dos grupos de atividades serviços de armazenamento e guarda de bens móveis em terrenos com área total maior que 500m² (quinhentos metros quadrados) fica condicionada ao atendimento da QA.)</s> <mark>REVOGADO</mark></p>
			<p><strong>§ 7º</strong> <s>Não se aplica a QA nos casos de emissão de novas licenças de funcionamento em estacionamentos localizados no subsolo)</s> <mark>REVOGADO</mark></p>
			<p><mark><strong>§ 8º</strong> Para fins de enquadramento na Quota Ambiental, os edifícios jardim suspenso deverão ter as áreas necessárias ao plantio e manutenção das árvores, em cada unidade, devidamente averbada na matrícula do Registro de Imóveis como “área ajardinada e arborizada mínima incentivada sem possibilidade de remoção”.</mark></p>
			<p><mark><strong>§ 9º</strong> Ato do Executivo regulamentará a aplicação da solução de jardim suspenso prevista no item II.D3 do Quadro 3B, em especial questões relacionadas a espécies autorizadas, requisitos de ancoragem, irrigação e impermeabilização.” (NR)</mark></p>

			<Comments :attr="{id:commentId(), context:'Art. 16º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 17º </strong>O art. 79 da Lei nº 16.402, de 22 de março de 2016, com alteração no caput e no § 1º e acréscimo dos §§ 5º e 6º, passa a vigorar com a seguinte redação:</mark>
			</p>
			<p>“<strong>Art. 79.</strong> Nos lotes com área total superior a 500m² (quinhentos metros quadrados), nos quais incidem as disposições da QA, é obrigatória a instalação de reservação de controle de escoamento superficial com volume mínimo previsto no Quadro 3B desta lei e no § 2º deste artigo, independentemente da adoção de outros mecanismos de controle do escoamento superficial <mark>na fonte</mark> que impliquem reservação e/ou infiltração e/ou percolação. <mark>(NR)</mark></p>
			<p><mark><strong>§ 1º</strong> As estruturas de saída do sistema de reservação de controle de escoamento superficial serão dimensionadas, considerando escoamento, horário máximo de saída do lote para chuva de duração de 24 horas e intensidade de 11L/(s/ha) (onze litros por segundo por hectare), conforme equação seguinte:</mark> </p>
			<div class="info-frame">
				<p>Qmax = {A x 11 [0,38 + (Dp-0,38) x (1-D)]} x <mark>0,00036</mark></p> 
				<p>
					sendo: <br>
					Qmax: vazão máxima <s>em l/s (litros por segundo)</s> <mark>em m³/h (metros cúbicos por hora)</mark>;
					A: área do lote, em m² (metros quadrados)
					Dp: indicador parcial obtido no cálculo do Quadro 3B desta lei, <mark>adimensional</mark>;
					D: indicador de Drenagem obtido no cálculo do Quadro 3B desta lei, <mark>adimensional.” (NR)</mark>
				</p>
			</div>
			<p><strong>§ 2º</strong> Mesmo que atendida a pontuação mínima da QA, o volume de reservação de controle do escoamento superficial a que se refere o “caput” deste artigo não poderá ser inferior a 6,3l (seis litros e três decilitros) por m² (metro quadrado) de área total do lote.</p>
			<p><strong>§ 3º</strong> É facultada, nos termos a ser regulamentada pelo Executivo, a utilização de dispositivos não convencionais de abatimento do pico de vazão de saída do lote. </p>
			<p><strong>§ 4º</strong> Nos imóveis com área total superior a 500m² (quinhentos metros quadrados), inseridos no perímetro da Operação Urbana Centro e dispensados da aplicação da QA conforme § 3º do art. 76 desta lei, é obrigatório o atendimento do estabelecido no “caput” deste artigo. </p>
			<p><mark><strong>§ 5º</strong> O volume total de reservação de controle de escoamento superficial é arbitrado pelo projetista, respeitando o volume mínimo a que se refere o caput deste artigo.</mark> </p>
			<p><mark><strong>§ 6º</strong> Se o D FINAL (pontuação final do indicador drenagem), calculado conforme fórmula prevista na nota de cálculo número VII do Quadro 3B, resultar em valor maior do que 1,0 (um), deverá ser adotado D FINAL igual a 1,0 (um).” (NR)</mark></p>

			<Comments :attr="{id:commentId(), context:'Art. 17º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 18º </strong>O art. 80 da Lei nº 16.402, de 22 de março de 2016, com alteração do caput e dos §§ 1º e § 2°, passa a vigorar com a seguinte redação:</mark>
			</p>
			<p>“<strong>Art. 80.</strong> Nos processos de licenciamento de edificações novas ou de reformas com alteração de área construída superior a <s>20% (vinte por cento)</s> <mark>50% (cinquenta por cento) ou com alteração da taxa de ocupação superior a 20% (vinte por cento)</mark>, em lotes com área superior a 500m² (quinhentos metros quadrados), é obrigatória a reservação para aproveitamento de águas pluviais provenientes das coberturas das edificações para fins não potáveis, <mark>entendendo-se por coberturas as superfícies de edificações que, tendo o valor da área de sua projeção dividido pelo valor da área do terreno, fornecem o valor numérico da taxa de ocupação. (NR)</mark></p>
			<p><strong>§ 1º</strong> O volume mínimo obrigatório de reservação de que trata o “caput” deste artigo será calculado de acordo com as seguintes fórmulas:</p>
			<p>I – no caso de coberturas totalmente impermeáveis, <mark>excluídos os pisos sobre subsolos e as superfícies descobertas sobre solo natural, impermeabilizadas ou não:</mark></p>
			<div class="info-frame">
				<p>Vri = 16,00 x ACi</p>
				<p>
					sendo:<br>
					Vri: volume mínimo de reservação para aproveitamento de águas pluviais provenientes de coberturas impermeáveis, em litros;<br>
					ACi: área de projeção das coberturas impermeáveis, em metros quadrados;
				</p>
			</div>
			<p>II – no caso de coberturas <mark>exclusivamente</mark> verdes, <mark>excluídos os pisos sobre subsolos e as superfícies descobertas sobre solo natural, impermeabilizadas ou não:</mark></p>
			<div class="info-frame">
				<p>Vrv = 5,4 x ACv</p>
				<p>
					sendo:<br>
					Vrv: volume mínimo de reservação para aproveitamento de águas pluviais provenientes de coberturas verdes, em litros;<br>
					ACv: área de <mark>projeção das</mark> coberturas verdes, em metros quadrados.” <mark>(NR)</mark>
				</p>
			</div>
			<p><strong>§ 2º</strong> No caso de coberturas mistas (parte impermeável e parte verde, <mark>excluídos os pisos sobre subsolos e as superfícies descobertas sobre solo natural, impermeabilizadas ou não,</mark> o volume mínimo de reservação de que trata o caput deste artigo será calculado através da soma dos volumes mínimos parciais, sendo estes obtidos conforme equações de seu § 1º:</p>
			<div class="info-frame">
				<p>Vrm = Vri + Vrv</p>
				<p>
					sendo:<br>
					Vrm: volume mínimo de reservação para aproveitamento de águas pluviais provenientes de coberturas mistas, em litros;<br>
					Vri: volume mínimo de reservação para aproveitamento de águas pluviais <s>provenientes de coberturas impermeáveis</s><mark> calculado considerando apenas a área de projeção da fração impermeável das coberturas mistas,</mark> em litros;<br>
					Vrv: volume mínimo de reservação para aproveitamento de águas pluviais <s>provenientes de coberturas verdes</s><mark> calculado considerando apenas a área de projeção da fração verde das coberturas mistas,</mark> em litros.” <mark>(NR)</mark><br>
				</p>
			</div>
			<p><strong>§ 3º</strong> O volume de reservação de que trata o “caput” deste artigo não poderá ser utilizado no cômputo do volume mínimo de reservação de controle do escoamento superficial a que se refere o art. 79 desta lei.</p>
			<p><strong>§ 4º</strong> A utilização das águas da reservação de controle do escoamento superficial só será permitida se utilizada para fins não potáveis, desde que observada a condição determinada pelo § 1º do art. 79 desta lei. </p>
			<p><strong>§ 5º</strong> A estrutura de reservação de que trata o “caput” deste artigo deverá ser provida de grelhas ou outro dispositivo para retenção de material grosseiro, como folhas, pedaços de madeira, restos de papel, corpos de pequenos animais, entre outros, além de dispositivo de descarte de água pluvial inicial de chuva. </p>
			<p><strong>§ 6º</strong> As águas captadas provenientes das coberturas das edificações não poderão ser utilizadas para consumo humano, lavagem de alimentos ou banho.”</p>

			<Comments :attr="{id:commentId(), context:'Art. 18º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 19º </strong>O art. 81 da Lei nº 16.402, de 22 de março de 2016, fica acrescido do § 4º com a seguinte redação:</mark>
			</p>
			<p>“<strong>Art. 81.</strong> Todos os lotes deverão atender as taxas de permeabilidade mínima estabelecidas para cada Perímetro de Qualificação Ambiental, conforme o Quadro 3A desta lei. </p>
			<p><strong>§ 1º</strong> Os lotes localizados em ZEPAM, ZPDS, ZCOR, ZPR ou ZER deverão atender as taxas de permeabilidade específicas para estas zonas, constantes do Quadro 3A desta lei, independentemente do Perímetro de Qualificação Ambiental em que se localizam. </p>
			<p><strong>§ 2º</strong> Nos lotes com área superior a 500m² (quinhentos metros quadrados), que não estejam localizados em ZEPAM ou ZPDS, a taxa de permeabilidade prevista no “caput” deste artigo poderá ser reduzida em até 50% (cinquenta por cento), desde que a pontuação da QA prevista no Quadro 3A desta lei para o lote seja majorada na mesma proporção em que a taxa de permeabilidade seja reduzida.</p>
			<p><strong>§ 3º</strong> Nos lotes com área menor ou igual a 500m² (quinhentos metros quadrados), isentos da aplicação da QA e que não estejam localizados em ZEPAM ou ZPDS, a redução da taxa de permeabilidade a que se refere o § 2º deste artigo poderá ser aplicada, desde que seja atendida a pontuação mínima de QA igual a 0,15 (quinze centésimos). </p>
			<p><mark><strong>§ 4º</strong> Nas áreas contaminadas a exigência da área permeável poderá ser dispensada a critério de SVMA.” (NR)</mark></p>
			
			<Comments :attr="{id:commentId(), context:'Art. 19º'}" v-if="estaConsulta.ativo == 1"></Comments>
		</section>

		<section>
			<p class="artigo">
				<mark><strong class="titulo" indent="1">Art. 20º </strong>O art. 82 da Lei nº 16.402, de 22 de março de 2016, com alteração do § 3º, passa a vigorar com a seguinte redação:</mark>
			</p>
			<p>“<strong>Art. 82.</strong> Atendida pontuação superior à mínima estabelecida no art. 76 desta lei, o interessado poderá requerer a concessão de Incentivo da Quota Ambiental, sob a forma de desconto no valor total a ser pago na contrapartida financeira de outorga onerosa do direito de construir e limitado a este, já contabilizados os incentivos previstos na Lei nº 16.050, de 31 de julho de 2014 – PDE .</p>
			<p><strong>§ 1º</strong> O Incentivo da Quota Ambiental será calculado de acordo com a seguinte equação:</p>
			<div class="info-frame">
				<p>IQA = [2 x (CAP - 1) / (CAP)] X FQA X At</p>
				<p>
					sendo:<br>
					IQA: Incentivo da Quota Ambiental, em reais (R$);<br>
					CAP: Coeficiente de Aproveitamento Pretendido no empreendimento;<br>
					FQA: Fator de Incentivo da Quota Ambiental, em reais (R$) por metro quadrado, disponível no Quadro 3C desta lei, de acordo com o tamanho do terreno, o Perímetro de Qualificação Ambiental onde se encontra o empreendimento e o VQAMín que corresponde à razão entre o valor numérico da QA atingida pelo projeto do empreendimento e o valor mínimo exigido da QA;<br>
					At: área do terreno em metros quadrados.
				</p>
			</div>
			<p><strong>§ 2º</strong> O Fator de Incentivo da Quota Ambiental poderá ser atualizado anualmente pelo Executivo, ouvida a CTLU, sendo que a atualização está limitada à variação do Índice de Preços ao Consumidor Amplo (IPCA) somada à variação positiva nominal do PIB acumuladas e deverá ser publicada até o dia 31 de dezembro de cada ano, com validade a partir do dia 1º de janeiro do ano seguinte.</p>
			<p><strong>§ 3º</strong> <s>Nos terrenos com área menor ou igual a 5.000m² (cinco mil metros quadrados)</s>, <mark>Alternativamente ao incentivo previsto no caput</mark>, quando o empreendimento atingir de 2 (duas) a 4 (quatro) vezes a quota ambiental mínima, o empreendedor poderá optar por receber benefício em área não computável incentivada, de acordo com as seguintes fórmulas:</p>
			<p>I - para terrenos localizados nos perímetros de qualificação ambiental PA-1, PA-4, PA-5, PA-6, PA-7, PA-10, PA-11, PA-12:</p>
			<div class="info-frame">
				<p>NCQA = (VQA Min - 1) x At x <mark>0,07 </mark><s>0,002</s>;</p>
				<p>II - para os demais perímetros de qualificação ambiental:</p>
				<p>NCQA = (VQA Min - 1) x At x <mark>0,09 </mark><s>0,004</s></p>
				<p>
					sendo:<br>
					NCQA: área não computável adicional, em metros quadrados, decorrente da majoração da Quota Ambiental;<br>
					VQA Min: razão entre o valor numérico da QA atingida pelo projeto do empreendimento e o valor mínimo exigido da QA, variando de 1,5 (um inteiro e cinco décimos) a 4,0 (quatro), de acordo com o Quadro 3A desta lei;<br>
					At : área de terreno. <mark>(NR)</mark>
				</p>
			</div>
			<p><strong>§ 4º</strong> Nas ZEU, ZEUa, ZEUP, ZEUPa, ZEM e ZEMP, quando o interessado utilizar taxa de ocupação maior ou igual a 50% (cinquenta por cento) da área do terreno, com no mínimo 20% (vinte por cento) de cobertura verde, com fachada ativa no térreo e gabarito de altura máxima de 28m (vinte e oito metros), o desconto concedido em outorga ou a área não computável concedida será equivalente ao dobro da pontuação obtida no projeto, até o limite máximo de incentivo.</p>
			<p><strong>§ 5º</strong> A emissão do certificado de conclusão da obra fica condicionada à comprovação do atendimento da pontuação de QA e dos respectivos parâmetros que tenham resultado em incentivos.</p>
			<p><strong>§ 6º</strong> Caso seja constatado o não atendimento da pontuação de QA apontada no projeto, especialmente aquela que tenha motivado a concessão de incentivos, haverá incidência de multa pecuniária correspondente a duas vezes o valor do desconto concedido, além de cassação do certificado de conclusão do respectivo empreendimento.”</p>
			
			<Comments :attr="{id:commentId(), context:'Art. 20º'}" v-if="estaConsulta.ativo == 1"></Comments>
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
import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'


export default {
	name: 'MinutaLpuos',
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
		Apoio
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

h2 {
	font-size: 150%;
}

mark {
	color: #0070c0;
	background-color: unset;
	padding: 0;
}

p.artigo {
	margin-top: 2em;
}
</style>
