<template>
	<div class="MinutaArcoPinheiros" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/arco-pinheiros_perspectiva_480w.jpg" :esta_consulta="estaConsulta" :social="social_assets">
			<template slot="titulo"><div>Minuta PIU Arco Pinheiros</div></template>
			<template slot="subtitulo"><div>Minuta do Projeto de Lei do Projeto de Intervenção Urbana do Arco Pinheiros</div></template>
		</PageTop>

		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio>
			<template slot="item2">
				<li>
					<input type="radio" name="tabs" id="item2">
					<label for="item2">Anexos</label>
					<div class="conteudoTab">
						<ul class="links" style="margin: 0 0;">
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_I_Perimetro-da-AIU-ACP.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Mapa I: Perímetro da AIU-ACP</div>
									<span>2,37 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_II_Parametros-urbanisticos.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Mapa II: Parâmetros urbanísticos</div>
									<span>2,39 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_III_Assentamentos-precarios-e-ZEIS.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Mapa III: Assentamentos precários e ZEIS</div>
									<span>2,66 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_IV_Compartimentos-ambientais-e-areas-verdes.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Mapa IV: Compartimentos ambientais e áreas verdes</div>
									<span>3,99 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_V_Plano-de-melhoramentos-viarios.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Mapa V: Plano de melhoramentos viários</div>
									<span>2,3 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_VI_Programa-de-intervencoes.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Mapa VI: Programa de intervenções</div>
									<span>2,5 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_VII_Perimetros-Especiai-Projetos-Estratégicos-AEL-e-ZOE.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Mapa VII: Perímetros Especiais</div>
									<span>3,84 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-1A.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Quadro 1A: Eixos estratégicos</div>
									<span>102 Kb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-1B.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Quadro 1B: Melhoramentos viários</div>
									<span>113 Kb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-1C.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Quadro 1C: Áreas públicas destinadas para áreas verdes</div>
									<span>114 Kb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-2A.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Quadro 2A: Projetos estratégicos e áreas de estruturação local</div>
									<span>118 Kb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-2B.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Quadro 2B: Projetos estratégicos - Percentuais de destinação de área pública</div>
									<span>108 Kb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-3A.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Quadro 3A: Fatores de planejamento, parâmetros de ocupação exceto quota ambiental</div>
									<span>109 Kb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-3B.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Quadro 3B: Quota ambiental: pontuação mínima, taxa de permeabilidade mínima e fatores de ponderação segundo compartimento ambiental</div>
									<span>114 Kb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-4.pdf')">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Quadro 4: Programa de intervenções</div>
									<span>127 Kb</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
			</template>
		</Apoio>

		<section>
			<h2 class="titulo" indent="1">PROJETO DE LEI xxxxx/2019 do Executivo</h2>
			<p>(Encaminhado à Câmara pelo Sr. Prefeito com o ofício xxxxxxx)</p>
			<CommentsContext :id="1001" :context="'Caput'">
				<p>Aprova Projeto de Intervenção Urbana para o perímetro do Arco Pinheiros, em atendimento ao inciso III do § 3º do art. 76 da Lei nº 16.050, de 31 de julho de 2014; cria a Área de Intervenção Urbana Arco Pinheiros.</p>
			</CommentsContext>
		</section>

		<section>
			<h2 class="titulo" indent="1">CAPÍTULO I</h2>
			<h2 class="subtitulo">DISPOSIÇÕES GERAIS</h2>
			<section>
				<h3 class="titulo" indent="2">Seção I</h3>
				<h3 class="subtitulo">Do Conceito</h3>
				<CommentsContext :id="1002" :context="'Capítulo I, Seção I, Art. 1º, Caput'">
					<p><b>Art. 1º</b> Fica aprovado o Projeto de Intervenção Urbana Arco Pinheiros – PIU-ACP, compreendendo o conjunto integrado de intervenções e medidas promovidas ou coordenadas pela Prefeitura do Município de São Paulo, por intermédio da empresa SP-Urbanismo, para articular o ordenamento e a reestruturação urbana em áreas subutilizadas e com potencial de transformação do território do Arco Pinheiros.</p>
				</CommentsContext>
				<CommentsContext :id="1002" :context="'Capítulo I, Seção I, Art. 1º, §1º'">
					<p><b>§ 1º.</b> Em atendimento ao inciso IV do § 3º do art. 76 da Lei nº 16.050, de 31 de julho de 2014 - Plano Diretor Estratégico (PDE), esta lei estabelece o regramento urbanístico para o território abrangido pelo Arco Pinheiros – ACP e cria a Área de Intervenção Urbana do Arco Pinheiros – AIU-ACP.</p>
				</CommentsContext>
				<CommentsContext :id="1003" :context="'Capítulo I, Seção I, Art. 1º, §2º'">
					<p>Integram esta lei os mapas, quadros e plantas abaixo relacionados:</p>
					<ol class="romanos">
						<li>Mapa I – Perímetro da AIU-ACP;</li>
						<li>Mapa II – Parâmetros Urbanísticos;</li>
						<li>Mapa III – Assentamentos Precários e ZEIS;</li>
						<li>Mapa IV – Compartimentos Ambientais e Áreas Verdes;</li>
						<li>Mapa V – Plano de Melhoramentos Viários;</li>
						<li>Mapa VI – Programa de Intervenções;</li>
						<li>Mapa VII – Perímetros Especiais – Projetos Estratégicos, Áreas de Estruturação Local e Zonas de Ocupação Especial;</li>
						<li>Quadro 1A – Eixos Estratégicos;</li>
						<li>Quadro 1B – Melhoramentos Viários;</li>
						<li>Quadro 1C – Áreas Públicas Destinadas para Áreas Verdes; </li>
						<li>Quadro 2A – Projetos Estratégicos e Áreas de Estruturação Local – Objetivos e Disposições Específicas; </li>
						<li>Quadro 2B – Projetos Estratégicos – percentuais de destinação de área pública; </li>
						<li>Quadro 3A – Fatores de Planejamento e Parâmetros de Ocupação, exceto quota ambiental; </li>
						<li>Quadro 3B – Cota Ambiental – pontuação mínima, taxa de permeabilidade mínima e fatores de ponderação segundo compartimento ambiental;</li>
						<li>Quadro 4 – Programa de Intervenções;</li>
						<li>Plantas nº XXX, Classificação XXX, do arquivo da Superintendência de Projetos Viários.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1004" :context="'Capítulo I, Seção I, Art. 1º, §3º'">
					<p><b>§ 3º.</b> Os mapas e quadros integrantes desta lei correspondem aos arquivos digitais da Secretaria Municipal de Desenvolvimento Urbano - SMDU, assinados eletronicamente, disponibilizados no Portal da Prefeitura do Município de São Paulo na Internet.</p>
				</CommentsContext>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção II</h3>
				<h3 class="subtitulo">Da Abrangência Territorial</h3>
				<CommentsContext :id="1005" :context="'Capítulo I, Seção II, Art. 2º, Caput'">
					<p><b>Art. 2º</b> O PIU-ACP abrange a área demarcada no Mapa I, sendo seu território correspondente à AIU-ACP, incluindo-se as Zonas de Ocupação Especial nele compreendidas.</p>
				</CommentsContext>
				<CommentsContext :id="1006" :context="'Capítulo I, Seção II, Art. 2º, Parágrafo único'">
					<p><b>Parágrafo único.</b> Com o objetivo de tratar as particularidades do território abrangido no perímetro do Arco Pinheiros, e considerando a distribuição espacial da população, das atividades econômicas e sociais, da oferta de infraestrutura e de serviços urbanos em sua área de abrangência, bem como com a finalidade de promover a transformação e requalificação urbanística prevista no PIU-ACP, o território da AIU-ACP é subdividido em Áreas de Transformação, Áreas de Qualificação e Áreas de Preservação, contendo, ainda, áreas destinadas a Projetos Estratégicos, Áreas de Estruturação Local e Eixos Estratégicos.</p>
				</CommentsContext>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção III</h3>
				<h3 class="subtitulo">Das Definições</h3>
				<CommentsContext :id="1007" :context="'Capítulo I, Seção III, Art. 3º, Caput'">
					<p><b>Art. 3º</b> Para fins do disposto nesta lei, consideram-se as seguintes definições:</p>
				</CommentsContext>
				<CommentsContext :id="1008" :context="'Capítulo I, Seção III, Art. 3º, Caput, I'">
					<ol class="romanos" start="1">
						<li><b>Áreas de Transformação:</b> áreas demarcadas no Mapa II desta Lei, categorizadas no Quadro 3A, destinadas a abrigar densidades construtivas e demográficas altas e onde se concentram as ações voltadas a promover as transformações estratégicas da AIU-ACP, promovendo-se a implantação do uso misto associado à qualificação dos espaços públicos;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1009" :context="'Capítulo I, Seção III, Art. 3º, Caput, II'">
					<ol class="romanos" start="2">
						<li><b>Áreas de Qualificação:</b> áreas demarcadas no Mapa II desta Lei, categorizadas no Quadro 3A, destinadas a abrigar densidades construtivas e demográficas médias, nas quais se concentram as ações voltadas à promoção da qualificação dos espaços públicos e à manutenção das atividades comerciais, de serviços, residenciais e industriais da AIU-ACP;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1010" :context="'Capítulo I, Seção III, Art. 3º, Caput, III'">
					<ol class="romanos" start="3">
						<li><b>Áreas de Preservação:</b> áreas demarcadas no Mapa II desta lei, categorizadas no Quadro 3A, destinadas à manutenção das densidades construtivas e demográficas baixas e médias, e voltadas à valorização de bens de valor histórico, paisagístico e de zonas exclusivamente residenciais de baixa densidade localizadas na AIU-ACP;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1011" :context="'Capítulo I, Seção III, Art. 3º, Caput, IV'">
					<ol class="romanos" start="4">
						<li><b>Compartimento Ambiental de Várzea:</b> porção da planície aluvial dos rios Pinheiros e Tietê, contida no território do PIU-ACP, com baixa capacidade de infiltração de águas pluviais, demarcada no Mapa IV desta lei;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1012" :context="'Capítulo I, Seção III, Art. 3º, Caput, V'">
					<ol class="romanos" start="5">
						<li><b>Compartimento de Encosta:</b> porção do território do PIU-ACP caracterizado como colinas e morros baixos que circundam as planícies aluviais do perímetro de AIU-ACP;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1013" :context="'Capítulo I, Seção III, Art. 3º, Caput, VI'">
					<ol class="romanos" start="6">
						<li><b>Eixos Estratégicos:</b> trechos de logradouros, destacados no Mapa II desta lei e descritos em seu Quadro 1A, que compõem uma rede de mobilidade motorizada e não motorizada e promovem a estruturação dos espaços públicos, e cujos lotes confrontantes são adequados ao adensamento construtivo e populacional e ao uso misto entre usos residenciais e não residenciais;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1014" :context="'Capítulo I, Seção III, Art. 3º, Caput, VII'">
					<ol class="romanos" start="7">
						<li><b>Caminhos Verdes:</b> trechos de logradouros, demarcados no Mapa IV desta lei, que complementam a rede de espaços públicos e interligam bairros, praças, parques, equipamentos públicos e nos quais serão implementadas medidas especificas de qualificação ambiental;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1015" :context="'Capítulo I, Seção III, Art. 3º, Caput, VIII'">
					<ol class="romanos" start="8">
						<li><b>Planos de Ação Integrada:</b> conjuntos de intervenções, selecionadas do Programa de Intervenções da AIU-ACP, estruturados de forma consolidada e hierarquizada, mediante processos públicos participativos, direcionados a uma parcela definida do território ou à solução de um problema específico no âmbito do PIU-ACP;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1016" :context="'Capítulo I, Seção III, Art. 3º, Caput, IX'">
					<ol class="romanos" start="9">
						<li><b>Programa de Intervenções:</b> conjunto de intervenções físico-territoriais de interesse público, indicadas no Mapa VI desta lei e descritas em seu Quadro 4, necessárias à obtenção das melhorias urbanísticas, socioeconômicas e ambientais da AIU-ACP;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1017" :context="'Capítulo I, Seção III, Art. 3º, Caput, X'">
					<ol class="romanos" start="10">
						<li><b>Projetos Estratégicos:</b> conjuntos de diretrizes, objetivos e intervenções previstos nos Quadros 2A e 2B, a serem implantados nos territórios demarcados no Mapa VII, baseados em programas de interesse público, associados a regras específicas de parcelamento, uso e ocupação do solo para áreas consideradas aptas a processos especiais de transformação e qualificação urbanística contidas no Perímetro da AIU-ACP, com características próprias de destinação de áreas públicas e formas de alienação e utilização do potencial construtivo adicional pertinentes ao projeto a ser implantado.</li>
					</ol>
				</CommentsContext>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção IV</h3>
				<h3 class="subtitulo">Dos Objetivos Gerais, das Estratégias de Transformação Urbanística e Diretrizes Específicas</h3>
				<CommentsContext :id="1018" :context="'Capítulo I, Seção IV, Art. 4º, Caput'">
					<p><b>Art. 4º</b> O PIU-ACP considera os objetivos específicos a serem alcançados no Setor Orla Ferroviária e Fluvial da Macroárea de Estruturação Metropolitana, nos termos do § 1º do art. 12 da Lei nº 16.050, de 2014 - PDE, e tem como objetivos gerais:</p>
				</CommentsContext>
				<CommentsContext :id="1019" :context="'Capítulo I, Seção IV, Art. 4º, Caput, I'">
					<ol class="romanos" start="1">
						<li>estimular a produção habitacional, preferencialmente aquela de interesse social e de mercado popular voltada à população de baixa e média renda, de forma a proporcionar a permanência da população moradora do perímetro;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1020" :context="'Capítulo I, Seção IV, Art. 4º, Caput, II'">
					<ol class="romanos" start="2">
						<li>priorizar o atendimento habitacional à população de baixa renda, residente em áreas de risco, áreas insalubres, em Áreas de Preservação Permanente - APP e de difícil acessibilidade, internas da AIU-ACP;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1021" :context="'Capítulo I, Seção IV, Art. 4º, Caput, III'">
					<ol class="romanos" start="3">
						<li>promover a urbanização, regularização fundiária e qualificação ambiental de assentamentos precários;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1022" :context="'Capítulo I, Seção IV, Art. 4º, Caput, IV'">
					<ol class="romanos" start="4">
						<li>recuperar a qualidade dos sistemas ambientais existentes, por intermédio da ampliação do sistema de controle de inundações e alagamentos e da mitigação dos efeitos das ilhas de calor;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1023" :context="'Capítulo I, Seção IV, Art. 4º, Caput, V'">
					<ol class="romanos" start="5">
						<li>qualificar o ambiente urbano, por intermédio da preservação e valorização dos recursos naturais e da proteção e recuperação da APP dos rios, inclusive mediante seu aproveitamento de forma ecologicamente sustentável;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1024" :context="'Capítulo I, Seção IV, Art. 4º, Caput, VI'">
					<ol class="romanos" start="6">
						<li>direcionar os investimentos públicos e privados para incrementar a oferta de empregos, dinamizar as atividades econômicas existentes, bem como promover o uso diversificado, intensivo e equilibrado do território e racionalizar o uso da infraestrutura, com especial atenção à vocação científica e tecnológica associada ao desenvolvimento de novas centralidades de âmbito local;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1025" :context="'Capítulo I, Seção IV, Art. 4º, Caput, VII'">
					<ol class="romanos" start="7">
						<li>garantir a melhoria da acessibilidade e mobilidade da região, especialmente por meio do transporte coletivo e não motorizado e a melhoria das conexões dos diferentes modos de transporte público, associada à qualificação do sistema de espaços públicos;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1026" :context="'Capítulo I, Seção IV, Art. 4º, Caput, VIII'">
					<ol class="romanos" start="8">
						<li>promover a integração física entre os dois lados do Rio Pinheiros, de modo a articular os diferentes agentes do território e viabilizar novas interações econômicas, com ênfase em inovação, ciência e tecnologia;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1027" :context="'Capítulo I, Seção IV, Art. 4º, Caput, IX'">
					<ol class="romanos" start="9">
						<li>incrementar a oferta de espaços públicos e áreas verdes, com a possibilidade de implantação de novos equipamentos sociais;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1028" :context="'Capítulo I, Seção IV, Art. 4º, Caput, X'">
					<ol class="romanos" start="10">
						<li>promover modelos de gestão que atendam às diretrizes do princípio da gestão democrática, garantindo o direito à participação dos interessados nos processos de elaboração e implantação da política de desenvolvimento urbano.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1029" :context="'Capítulo I, Seção IV, Art. 5º, Caput'">
					<p><b>Art. 5º</b> A implantação do PIU-ACP observará, no mínimo, as seguintes estratégias de transformação urbanística:</p>
				</CommentsContext>
				<CommentsContext :id="1030" :context="'Capítulo I, Seção IV, Art. 5º, Caput, I'">
					<ol class="romanos" start="1">
						<li>a orientação dos investimentos públicos pelos critérios de maior possibilidade de transformação urbanística associada à melhor viabilidade socioeconômica da intervenção;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1031" :context="'Capítulo I, Seção IV, Art. 5º, Caput, II'">
					<ol class="romanos" start="2">
						<li>a elaboração de Planos de Ação Integrada capazes de desencadear processos de transformação territorial na área objeto de intervenção e em seu entorno imediato, especialmente considerando os aspectos do atendimento habitacional, a provisão de equipamentos sociais, requalificação de logradouros e áreas públicas, obras de infraestrutura urbana e implantação dos melhoramentos e espaços públicos.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1032" :context="'Capítulo I, Seção IV, Art. 6º, Caput'">
						<p><b>Art. 6º</b> O PIU-ACP tem como diretrizes específicas:</p>
				</CommentsContext>
				<CommentsContext :id="1033" :context="'Capítulo I, Seção IV, Art. 6º, Caput, I'">
					<ol class="romanos" start="1">
						<li>atendimento das necessidades habitacionais e sociais da população mais vulnerável residente na área, afetada ou não pelas intervenções propostas;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1034" :context="'Capítulo I, Seção IV, Art. 6º, Caput, II'">
					<ol class="romanos" start="2">
						<li>preservação, recuperação e uso ambientalmente sustentável das APP dos rios Pinheiros e Tietê; </li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1035" :context="'Capítulo I, Seção IV, Art. 6º, Caput, III'">
					<ol class="romanos" start="3">
						<li>promoção do aumento do adensamento demográfico e construtivo, buscando o equilíbrio entre emprego e moradia, apoiado no fortalecimento da infraestrutura urbana de transporte coletivo prevista na Lei nº 16.050, de 2014 - PDE; </li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1036" :context="'Capítulo I, Seção IV, Art. 6º, Caput, IV'">
					<ol class="romanos" start="4">
						<li>manutenção dos empregos na atividade industrial e a promoção de estratégias para o incremento de novos postos de trabalho no setor, por meio da potencialização das atividades produtivas existentes;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1037" :context="'Capítulo I, Seção IV, Art. 6º, Caput, V'">
					<ol class="romanos" start="5">
						<li>transformação de parcelas das Zonas de Desenvolvimento Econômico - ZDE e das Zonas Predominantemente Industriais - ZPI, nas quais a atividade industrial esteja ociosa, apoiada pela melhoria de infraestrutura de transporte de passageiros e mobilidade não motorizada, priorizando-se a implantação de atividades de vocação científica e tecnológica;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1038" :context="'Capítulo I, Seção IV, Art. 6º, Caput, VI'">
					<ol class="romanos" start="6">
						<li>implantação de equipamentos institucionais voltados ao incentivo de projetos de inovação tecnológica, com foco nas principais atividades produtivas existentes e desejadas no território do PIU-ACP; </li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1039" :context="'Capítulo I, Seção IV, Art. 6º, Caput, VII'">
					<ol class="romanos" start="7">
						<li>incentivo à produção de empreendimentos residenciais que incorporem diversidade de usos, atendimento a famílias de diferentes faixas de renda e interação com o entorno imediato, por intermédio de fachadas ativas, fruição pública e previsão de áreas verdes de acesso ao público;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1040" :context="'Capítulo I, Seção IV, Art. 6º, Caput, VIII'">
					<ol class="romanos" start="8">
						<li>fortalecimento da função urbanística das centralidades existentes, por intermédio da qualificação das infraestruturas, do adensamento construtivo e populacional e do incremento de áreas verdes, espaços públicos e equipamentos; </li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1041" :context="'Capítulo I, Seção IV, Art. 6º, Caput, IX'">
					<ol class="romanos" start="9">
						<li>desenvolvimento de novas centralidades, por intermédio de incentivo ao uso misto e de melhorias urbanísticas associadas à ampliação da rede de mobilidade, bem como implantação de sistema ambiental de áreas verdes e de espaços públicos e equipamentos; </li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1042" :context="'Capítulo I, Seção IV, Art. 6º, Caput, X'">
					<ol class="romanos" start="10">
						<li>melhoria da conectividade da região e da mobilidade intra e interbairros, por intermédio da implantação de conexões viárias coletoras ou locais, garantindo especialmente a conexão entre os diferentes modos de transporte coletivo e não motorizado; </li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1043" :context="'Capítulo I, Seção IV, Art. 6º, Caput, XI'">
					<ol class="romanos" start="11">
						<li>incentivo à circulação não motorizada, incluindo novas travessias sobre os rios, complementação da malha cicloviária e a implantação de bicicletários e paraciclos integrados aos terminais e estações do sistema estrutural de transporte público;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1044" :context="'Capítulo I, Seção IV, Art. 6º, Caput, XII'">
					<ol class="romanos" start="12">
						<li>implantação de um distrito de inovação destinado a agregar empresas, universidades, instituições de pesquisa, incubadoras, aceleradoras e startups, favorecendo o surgimento de ideias inovadoras e criativas em ambientes urbanos de uso misto;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1045" :context="'Capítulo I, Seção IV, Art. 6º, Caput, XIII'">
					<ol class="romanos" start="13">
						<li>promoção do desenvolvimento de uma nova frente urbana incentivando a transformação dos lotes de frente para o Rio Pinheiros, contemplando empreendimentos de uso misto associados a novos espaços livres públicos que proporcionem a recuperação da APP.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1046" :context="'Capítulo I, Seção IV, Art. 6º, Caput, XIV'">
					<ol class="romanos" start="14">
						<li>qualificação da mão de obra dos moradores da região para atividades concernentes a empreendimentos voltados à tecnologia e inovação, por intermédio da ampliação dos cursos técnicos já disponíveis na região e da implantação de novos estabelecimentos de ensino voltados a esta finalidade.</li>
					</ol>
				</CommentsContext>
			</section>
		</section>
		<section>
			<h2 class="titulo" indent="1">CAPÍTULO II</h2>
			<h2 class="subtitulo">REGRAS DE USO E OCUPAÇÃO DO SOLO</h2>
			<section>
				<h3 class="titulo" indent="2">Seção I</h3>
				<h3 class="subtitulo">Das Regras Gerais aplicáveis à AIU-ACP</h3>
				<CommentsContext :id="1047" :context="'Capítulo II, Seção I, Art. 7º, Caput'">
					<p><b>Art. 7º</b> Estão sujeitos ao atendimento das disposições estabelecidas nesta Lei os pedidos de licenciamento edilício em imóveis contidos no Perímetro da AIU-ACP, exceto:</p>
				</CommentsContext>
				<CommentsContext :id="1048" :context="'Capítulo II, Seção I, Art. 7º, I'">
					<ol class="romanos" start="1">
						<li>lotes com área inferior a 500 m² (quinhentos metros quadrados);</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1049" :context="'Capítulo II, Seção I, Art. 7º, II'">
					<ol class="romanos" start="2">
						<li>reformas com demolição ou ampliação de menos de 30% (trinta por cento) da área construída original, em lotes com área inferior a 2.500m² (dois mil e quinhentos metros quadrados).</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1050" :context="'Capítulo II, Seção I, Art. 8º, Caput'">
					<p><b>Art. 8º</b> Aplicam-se na área do perímetro AIU-ACP os parâmetros urbanísticos constantes do Quadro 3A desta lei, e, subsidiariamente, o disposto na Lei nº 16.402, de 22 de março de 2016 - LPUOS.</p>
				</CommentsContext>
				<CommentsContext :id="1051" :context="'Capítulo II, Seção I, Parágrafo único'">
					<p><b>Parágrafo único.</b> Os empreendimentos em Zona Especial de Interesse Social - ZEIS, Empreendimentos de Habitação de Interesse Social - EHIS e Empreendimentos Habitacionais de Mercado Popular - EHMP deverão seguir os parâmetros da Lei nº 16.402, de 2016 - LPUOS, devendo também ser observada a disciplina constante de decretos específicos, no que não excepcionados por esta lei.</p>
				</CommentsContext>
				<CommentsContext :id="1052" :context="'Capítulo II, Seção I, Art. 9º, Caput'">
					<p><b>Art. 9º</b> A emissão de alvarás de edificação nova ou de reforma com ampliação de área construída para empreendimentos situados no Compartimento Ambiental de Várzea está condicionada à apresentação, pelo empreendedor, de parecer técnico favorável à execução das obras, considerando:</p>
				</CommentsContext>
				<CommentsContext :id="1053" :context="'Capítulo II, Seção I, Art. 9º, Caput, I'">
					<ol class="romanos" start="1">
						<li>o risco de recalque das fundações; </li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1054" :context="'Capítulo II, Seção I, Art. 9º, Caput, II'">
					<ol class="romanos" start="2">
						<li>a estabilidade das paredes de escavação e das margens dos cursos d’água, </li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1055" :context="'Capítulo II, Seção I, Art. 9º, Caput, III'">
					<ol class="romanos" start="3">
						<li>a profundidade do lençol freático;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1056" :context="'Capítulo II, Seção I, Art. 9º, Caput, IV'">
					<ol class="romanos" start="4">
						<li>a capacidade de suporte do solo; </li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1057" :context="'Capítulo II, Seção I, Art. 9º, Caput, V'">
					<ol class="romanos" start="5">
						<li>a suscetibilidade à ocorrência de alagamentos a partir da solução do projeto apresentado.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1058" :context="'Capítulo II, Seção I, Art. 9º, § 1º'">
					<p><b>§ 1º.</b> Para os empreendimentos citados no "caput" deste artigo, os pavimentos em subsolo deverão ser implantados, no mínimo, a 1m (um metro) acima do nível do lençol freático existente.</p>
				</CommentsContext>
				<CommentsContext :id="1059" :context="'Capítulo II, Seção I, Art. 9º, § 2º'">
					<p><b>§ 2º.</b> O Executivo regulamentará a forma de apresentação do parecer técnico citado no "caput" deste artigo, bem como os órgãos responsáveis pela sua análise.</p>
				</CommentsContext>
				<CommentsContext :id="1059" :context="'Capítulo II, Seção I, Art. 10, Caput'">
					<p><b>Art. 10.</b> Nos empreendimentos em lotes com frente para os Eixos Estratégicos, será obrigatória a adoção dos seguintes parâmetros qualificadores da ocupação:</p>
				</CommentsContext>
				<CommentsContext :id="1060" :context="'Capítulo II, Seção I, Art. 10, Caput, I'">
					<ol class="romanos" start="1">
						<li>para os lotes com área superior a 2.500m² (dois mil e quinhentos metros quadrados), o passeio público deverá ter largura mínima de 5m (cinco metros);</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1061" :context="'Capítulo II, Seção I, Art. 10, Caput, II'">
					<ol class="romanos" start="2">
						<li>
							para os lotes com área superior a 5.000m² (cinco mil metros quadrados) e menor ou igual a 20.000m² (vinte mil metros quadrados):
							<ol class="minusculas">
								<li>limite máximo de 25% (vinte e cinco por cento) de vedação da testada do lote com muros;</li>
								<li>fachada ativa em no mínimo 25% (vinte e cinco por cento) da testada do lote em empreendimentos residenciais ou não residenciais;</li>
							</ol>
						</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1062" :context="'Capítulo II, Seção I, Art. 10, Caput, III'">
					<ol class="romanos" start="3">
						<li>para os lotes com área superior a 10.000m² (dez mil metros quadrados) e menor ou igual a 20.000m² (vinte mil metros quadrados), nos termos do Art. 70 da Lei n. 16.402, de 2016 - LPUOS, destinação de área para fruição pública equivalente a no mínimo 20% (vinte por cento) da área do lote, em espaço livre ou edificado, ao nível do passeio público ou no pavimento térreo.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1063" :context="'Capítulo II, Seção I, Parágrafo único'">
					<p><b>Parágrafo único.</b> Em contrapartida à doação de área para alargamento da calçada prevista no inciso I do “caput”:</p>
					<ol class="romanos">
						<li>fica dispensado o recuo obrigatório de frente;</li>
						<li>os potenciais construtivos básico e máximo do remanescente do lote serão calculados em função da área original do terreno;</li>
						<li>não será cobrada outorga onerosa do direito de construir relativa ao potencial construtivo adicional da área doada.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1064" :context="'Capítulo II, Seção I, Art. 11'">
					<p><b>Art. 11.</b> Nas Áreas de Transformação:</p>
					<ol class="romanos">
						<li>para os lotes com área igual ou superior a 500m² (quinhentos metros quadrados) a taxa de ocupação máxima será de 0,7 (sete décimos); </li>
						<li>os passeios públicos deverão ter largura mínima de 5m (cinco metros);</li>
						<li>são autorizados nos lotes os usos previstos para a zona em que se localizam,  constantes no Quadro 4 da Lei nº 16.402, de 2016 – LPUOS, bem como os referentes aos grupos de atividade R2v, previstos no art. 94 da referida lei; </li>
						<li>nas Zonas Eixo de Estruturação da Transformação Metropolitana Previsto –ZEMP das Áreas de Transformação será observada a disciplina prevista no art. 83 da Lei nº 16.050, de 2014 – PDE;</li>
						<li>para os lotes localizados em vias com largura inferior a 16m (dezesseis metros) nas Áreas de Transformação T2, aplica-se a dispensa do recuo de frente prevista no § 1º do art. 67 da Lei nº 16.402/2016 – LPUOS para os pavimentos edificados até 10m (dez metros) de altura.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1065" :context="'Capítulo II, Seção I, Art. 12'">
					<p><b>Art. 12.</b> Nas Áreas de Qualificação:</p>
					<ol class="romanos">
						<li>são autorizados nos lotes localizados no Setor fiscal 097 quadras 104, 113 e 124 os usos previstos para a zona que se localizam,  constantes no Quadro 4 da Lei nº 16.402, de 2016 – LPUOS, bem como os referentes aos grupos de atividade R2v, previstos no art. 94 da referida lei; </li>
						<li>nos lotes localizados nas áreas Q1 do Setor Fiscal 080 com número de Quadra 015, 016, 041, 042, 043, 044, 045 e 046 e Q2 dos Setores Fiscais 080 Quadra 014 e Setor 097, Quadras 063, 090, 091 e 092 são consideradas áreas não computáveis as áreas cobertas nos usos residenciais, em qualquer pavimento, destinadas às áreas comuns de circulação, incluindo a circulação vertical, limitada a 20% (vinte por cento) da área coberta do pavimento;</li>
						<li>para os lotes descrito no inciso II, não se aplicam as disposições do art. 67 da Lei nº 16.402/2016-LPUOS.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1066" :context="'Capítulo II, Seção I, Art. 13'">
					<p><b>Art. 13.</b> O atendimento habitacional da população moradora nas áreas demarcadas como ZEIS 1 e ZEIS 3 na AIU-ACP que forem atingidas pelos melhoramentos públicos do Programa de Intervenções desta lei observará o seguinte:</p>
					<ol class="romanos">
						<li>qualquer intervenção para a implantação de elementos previstos no Quadro 4 desta Lei será precedida da constituição do Conselho Gestor da ZEIS 1 e da ZEIS 3, bem como da elaboração dos respectivos Planos de Urbanização ou Projeto de Intervenção, nos termos exigidos pela Lei nº 16.050, de 2014 - PDE e, se for o caso, de Plano de Reassentamento que defina o atendimento às famílias afetadas, preferencialmente de forma definitiva, em terrenos situados no perímetro do PIU-ACP, a uma distância máxima de 1 km (um quilômetro) de estação, ou de terminal de integração ou 500 m de corredores ou faixas exclusivas do Sistema de Transporte Público Coletivo;</li>
						<li>em terrenos não demarcados originalmente como ZEIS onde for realizado o atendimento habitacional previsto no inciso I deste artigo, deverão ser mantidos os percentuais de área construída total por usos residenciais e não residenciais do Quadro 4 da Lei nº 16.050, de 2014 - PDE, previstos para as ZEIS de origem.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1067" :context="'Capítulo II, Seção I, Parágrafo único'">
					<p><b>Parágrafo único.</b> As obras para a implantação das novas unidades de HIS edificadas em função do previsto neste artigo integrarão Planos de Ação Integrada, nos termos previstos nesta Lei.</p>
				</CommentsContext>
				<section>
					<h4 class="titulo" indent="3">Subseção I</h4>
					<h4 class="subtitulo">Dos Incentivos</h4>
					<CommentsContext :id="1068" :context="'Capítulo II, Seção I, Subseção I, Art. 14, Caput'">
						<p><b>Art. 14.</b> Na hipótese de doação de parcela de imóvel à Prefeitura do Município de São Paulo para execução de melhoramentos públicos destinados à implantação das áreas verdes e melhoramentos viários indicados nos Mapas IV e V desta Lei, o potencial construtivo básico e o potencial construtivo máximo do lote remanescente serão calculados em função de sua área original, não sendo cobrada outorga onerosa do direito de construir relativa ao potencial construtivo adicional da área doada.</p>
					</CommentsContext>
					<CommentsContext :id="1069" :context="'Capítulo II, Seção I, Subseção I, Art. 14, § 1º'">
						<p><b>§ 1º.</b> O proprietário do imóvel poderá optar entre o benefício previsto no "caput" deste artigo e a transferência total ou parcial do direito de construir correspondente ao potencial construtivo relativo à área doada, de acordo com as disposições do art. 122 e seguintes da Lei nº 16.050, de 2014-PDE.</p>
					</CommentsContext>
					<CommentsContext :id="1070" :context="'Capítulo II, Seção I, Subseção I, Art. 14, § 2º'">
						<p><b>§ 2º.</b> Aos lotes e glebas com mais de 10.000m² (dez mil metros quadrados) atingidos pelos melhoramentos públicos previstos no “caput” aplica-se a disciplina prevista nos arts. 87 e 88 da Lei 16.402/2016 – LPUOS, não incidindo o incentivo deste artigo.</p>
					</CommentsContext>
					<CommentsContext :id="1071" :context="'Capítulo II, Seção I, Subseção I, Art. 15, Caput'">
						<p><b>Art. 15.</b> Os lotes com frente para os Eixos Estratégicos previstos no Quadro 1A desta Lei e demarcados no Mapa II, respeitados os limites da taxa de ocupação, estão sujeitos às disposições previstas no art. 62 da Lei nº 16.402, de 2016 - LPUOS, observado o seguinte:</p>
						<ol class="romanos">
							<li>o art. 62, incisos I, VII, alínea “a” e VIII, da Lei 16.402/2016 - LPUOS é aplicável a todos os lotes com frente para os Eixos Estratégicos, independentemente das zonas em que se situam;</li>
							<li>além das zonas indicadas no art. 62, inc. V da Lei n. 16.402/2016 – LPUOS, não se aplica o incentivo referente às áreas comuns de circulação a todos os lotes integrantes das Áreas de Transformação com frente para os Eixos Estratégicos, independentemente da zona em que se situem;</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1072" :context="'Capítulo II, Seção I, Subseção I, Art. 15, § 1º'">
						<p><b>§ 1º.</b> Para fins de aplicação do “caput” deste artigo, serão consideradas as áreas construídas no pavimento imediatamente superior ou inferior de acesso direto ao logradouro, desde que façam parte do mesmo compartimento edificado.</p>
					</CommentsContext>
					<CommentsContext :id="1073" :context="'Capítulo II, Seção I, Subseção I, Art. 15, § 2º'">
						<p><b>§ 2º.</b> O disposto no “caput” deste artigo aplica-se aos lotes que tenham, no momento da entrada em vigor desta lei, frente para logradouros oficiais demarcados como Eixos Estratégicos, independentemente da declaração de vigência da disciplina prevista no § 1º do art. 83 da Lei nº 16.050, de 2014 – PDE.</p>
					</CommentsContext>
				</section>
				<section>
					<h4 class="titulo" indent="3">Subseção II</h4>
					<h4 class="subtitulo">Da Centralidade do Jaguaré</h4>
					<CommentsContext :id="1074" :context="'Capítulo II, Seção I, Subseção II, Art. 16'">
						<p><b>Art. 16.</b> A Centralidade do Jaguaré, configurada pelos lotes e glebas contidos no Setor Fiscal nº 082, Quadras nº 222, 223, 230 e 231 e demarcados como Área de Transformação T2, busca intensificar a densidade construtiva e populacional junto aos eixos de transporte público, romper grandes quadras, incentivar a mistura de usos, bem como criar condições para implantação das atividades produtivas previstas na Zona de Desenvolvimento Econômico - ZDE.</p>
					</CommentsContext>
					<CommentsContext :id="1075" :context="'Capítulo II, Seção I, Subseção II, Art. 17'">
						<p><b>Art. 17.</b> Aos lotes e glebas contidos na Centralidade do Jaguaré ficam permitidos todos os usos de categoria R2v, observando-se, para os lotes com mais de 10.000m² (dez mil metros quadrados) a disciplina prevista nos arts. 87 e 88 da 16.402/2016 – LPUOS e, ainda, as seguintes disposições:</p>
						<ol class="romanos">
							<li>Nos termos dispostos no art. 46 da Lei nº 16.402/2016 – LPUOS, localização de, no mínimo, 50% (cinquenta por cento) do percentual exigido para áreas verdes ao longo da Avenida Jaguaré;</li>
							<li>Nas áreas institucionais destinadas em função de novos loteamentos, aplica-se o disposto no art. 45, § 4º da Lei n. 16.402/2016-LPUOS;</li>
							<li>
								Para fins de aplicação do Quadro 2 da Lei n. 16.402/2016- LPUOS, não haverá área destinada sem prévia afetação, devendo o percentual ordinariamente previsto a esta finalidade ser distribuído na seguinte conformidade:
								<ol class="minusculas">
									<li>3% (três por cento) do total da área destinada incorporada ao montante de área institucional do loteamento, perfazendo o total de 8% (oito por cento) da área total da gleba assinalada a esta finalidade;</li>
									<li>7% (sete por cento) do total da área inicialmente destinada a esta finalidade incorporada ao montante de área verde do loteamento, perfazendo o total de 17% (dezessete por cento) da área total da gleba assinalada a esta finalidade.</li>
								</ol>
							</li>
						</ol>
					</CommentsContext>
				</section>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção II</h3>
				<h3 class="subtitulo">Das Zonas de Ocupação Especial</h3>
				<CommentsContext :id="1076" :context="'Capítulo II, Seção II, Art. 18'">
					<p><b>Art. 18.</b> As ZOE contidas na AIU-ACP são assim denominadas:</p>
					<ol class="romanos">
						<li>Companhia de Entrepostos Gerais de São Paulo (CEAGESP) – ZOE-CEAGESP;</li>
						<li>Universidade de São Paulo – ZOE-USP;</li>
						<li>Lote com contribuinte nº 0822310006 – ZOE-JAGUARÉ;</li>
						<li>Lote com contribuinte nº 097.001.0001 – ZOE-CDP</li>
						<li>Áreas demarcadas como ZOE no Setor 079 Quadras 073, 396 e 401 – ZOE- Presidente Altino.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1077" :context="'Capítulo II, Seção II, Art. 19, Caput'">
					<p><b>Art. 19.</b> Suplementarmente à regulação prevista no Quadro 3A, aplicam-se às ZOE integrantes da área de abrangência do perímetro da AIU-ACP os parâmetros urbanísticos previstos nos Quadros 2A, 3, 4 e 4B da Lei n. 16.402/2016 – LPUOS, na seguinte conformidade:</p>
					<ol class="romanos">
						<li>
							na ZOE-USP:
							<ol class="minusculas">
								<li>para as áreas ocupadas pelo Instituto de Pesquisas Tecnológicas - IPT, Instituto Butantan, Instituto de Pesquisas Energéticas e Nucleares - IPEN e Marinha do Brasil, aplicam-se os parâmetros da Zona de Desenvolvimento Econômico 2 - ZDE-2 e, para as demais áreas, os parâmetros da Zona Mista - ZM;</li>
								<li>taxa de Ocupação igual a 0,3 (três décimos), contabilizada de forma independente nas áreas ocupadas pela USP, IPT, Instituto Butantan, IPEN, Marinha e Fundação SEADE.</li>
							</ol>
						</li>
						<li>na ZOE-JAGUARÉ, aplicam-se os parâmetros da Zona Eixo de Estruturação da Transformação Urbana - ZEU;</li>
						<li>na ZOE-CDP, aplicam-se os parâmetros da Zona Mista Ambiental - ZMa;</li>
						<li>para ZOE-Presidente Altino, aplicam-se os parâmetros da Zona Predominantemente Industrial 1 - ZPI-1.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1078" :context="'Capítulo II, Seção II, Art. 19, § 1º'">
					<p><b>§ 1º.</b> A ZOE-CEAGESP atenderá às disposições desta Lei estabelecidas para Projeto Estratégico CEAGESP.</p>
				</CommentsContext>
				<CommentsContext :id="1079" :context="'Capítulo II, Seção II, Art. 19, § 2º'">
					<p><b>§ 2º.</b> A ZOE-CDP, no caso de mudança de uso ou de saída do equipamento penitenciário atualmente existente, terá seus parâmetros definidos por Projeto de Intervenção Urbana específico.</p>
				</CommentsContext>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção III</h3>
				<h3 class="subtitulo">Dos Projetos Estratégicos</h3>
				<CommentsContext :id="1080" :context="'Capítulo II, Seção III, Art. 20'">
					<p><b>Art. 20.</b> Ficam instituídos os seguintes Projetos Estratégicos:</p>
					<ol class="romanos">
						<li>Companhia de Entrepostos Gerais de São Paulo - CEAGESP</li>
						<li>Núcleo Parque Tecnológico do Jaguaré;</li>
						<li>Frente do Rio Pinheiros – Alexandre Mackenzie; </li>
						<li>Frente do Rio Pinheiros – Engº Billings; </li>
						<li>Frente do Rio Pinheiros – Jaguaré;</li>
						<li>Frente do Rio Pinheiros – Mal. Mário Guedes.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1081" :context="'Capítulo II, Seção III, Art. 21, Caput'">
					<p><b>Art. 21.</b> Os Projetos Estratégicos serão implantados a partir da adesão dos proprietários dos lotes contidos em seus perímetros de abrangência, demarcados no Mapa VII.</p>
				</CommentsContext>
				<CommentsContext :id="1082" :context="'Capítulo II, Seção III, Art. 21, § 1º'">
					<p><b>§ 1º.</b> A adesão prevista no “caput” determina a aplicação de regras específicas de parcelamento, uso e ocupação do solo definidas para cada Projeto Estratégico e determina a incidência das disposições previstas nos Quadros 2A e 2B desta Lei.</p>
				</CommentsContext>
				<CommentsContext :id="1083" :context="'Capítulo II, Seção III, Art. 21, § 2º'">
					<p><b>§ 2º.</b> Na hipótese de não adesão dos proprietários dos lotes e glebas localizados nas áreas de abrangência dos Projetos Estratégicos, aplicam-se a seus territórios:</p>
					<ol class="romanos">
						<li>a disciplina prevista nesta Lei para as Áreas de Transformação, Áreas de Qualificação e Áreas de Preservação, bem como a regência especial pertinente aos Eixos Estratégicos, de acordo com o Mapa II, e suplementarmente as disposições da LPUOS;</li>
						<li>a obrigatoriedade de implantação dos melhoramentos públicos previstos nesta Lei, dispostos no Mapa V;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1084" :context="'Capítulo II, Seção III, Art. 21, § 3º'">
					<p><b>§ 3º.</b> A adesão ao Projeto Estratégico CEAGESP consistirá na implantação do Distrito de Inovação Tecnológica, mediante elaboração de Projeto de Intervenção Urbana específico para seu território, atendendo-se as disposições previstas no art. 22 desta Lei.</p>
				</CommentsContext>
				<CommentsContext :id="1085" :context="'Capítulo II, Seção III, Art. 21, § 4º'">
					<p><b>§ 4º.</b> Caberá à SP-Urbanismo a avaliação dos Projetos Estratégicos a serem submetidos a licenciamento pela Municipalidade, para fins de declaração do atendimento aos objetivos e diretrizes urbanísticas trazidas nesta Lei.</p>
				</CommentsContext>
				<section>
					<h4 class="titulo" indent="3">Subseção I</h4>
					<h4 class="subtitulo">Do Projeto Estratégico CEAGESP</h4>
					<CommentsContext :id="1086" :context="'Capítulo II, Seção III, Subseção I, Art. 22, Caput'">
						<p><b>Art. 22.</b> O Projeto Estratégico CEAGESP prevê a implantação de um Distrito de Inovação Tecnológica em seu perímetro, demarcado no Mapa VII, consistente em território destinado a reunião de empresas, universidades, instituições de pesquisa, incubadoras, aceleradoras e startups, favorecendo o surgimento de ideias inovadoras e criativas em ambiente urbano de uso misto, observando-se o seguinte:</p>
					</CommentsContext>
					<CommentsContext :id="1087" :context="'Capítulo II, Seção III, Subseção I, Art. 22, Caput, I'">
						<ol class="romanos" start="1">
							<li>nos termos do §2º do art. 49 da LPUOS, os lotes contidos no perímetro do Projeto Estratégico, independente da área, deverão ser reparcelados, atendendo-se as disposições previstas nos Quadros 2A e 2B desta Lei;</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1088" :context="'Capítulo II, Seção III, Subseção I, Art. 22, Caput, II'">
						<ol class="romanos" start="2">
							<li>
								o reparcelamento da área de abrangência do Projeto Estratégico ocorrerá de forma integral ou mediante definição de Setores, constantes de Projeto Intervenção Urbana específico, na seguinte conformidade:
								<ol class="minusculas">
									<li>os Setores deverão observar área mínima de 30.000 m² (trinta mil metros quadrados), exceto os lotes com número de contribuinte 097.037.0001, 097.043.0001, 097.127.0004 e 097.127.0005;</li>
									<li>o percentual de destinação de área pública por Setor não poderá ser menor que 40% (quarenta por cento) de sua respectiva área, respeitados os percentuais mínimos dispostos no Quadro 2B;</li>
								</ol>
							</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1089" :context="'Capítulo II, Seção III, Subseção I, Art. 22, Caput, III'">
						<ol class="romanos" start="3">
							<li>os empreendimentos em Zona Especial de Interesse Social – ZEIS 5, deverão seguir os parâmetros da Lei nº 16.402, de 2016 - LPUOS, devendo também ser observada a disciplina constante de decretos específicos no que não excepcionados por esta lei.</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1090" :context="'Capítulo II, Seção III, Subseção I, Art. 22, Caput, IV'">
						<ol class="romanos" start="4">
							<li>o limite máximo do potencial construtivo adicional é de 1.150.000m² (um milhão cento e cinquenta mil metros quadrados) de área construída computável, nos termos do inciso II, do art. 159, da Lei nº 16.402/2016 – LPUOS;</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1091" :context="'Capítulo II, Seção III, Subseção I, Art. 22, Caput, V'">
						<ol class="romanos" start="5">
							<li>o Coeficiente de Aproveitamento Máximo dos lotes resultantes do parcelamento previsto neste artigo não poderá ser superior a 6,0 (seis);</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1092" :context="'Capítulo II, Seção III, Subseção I, Art. 22, Caput, VI'">
						<ol class="romanos" start="6">
							<li>os demais parâmetros de parcelamento, uso e ocupação do solo, deverão ser definidos mediante elaboração de Projeto de Intervenção Urbana específico englobando todo o perímetro do Projeto Estratégico, a ser editado por Decreto.</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1093" :context="'Capítulo II, Seção III, Subseção I, Art. 22, Caput, Parágrafo único'">
						<p><b>Parágrafo único.</b> Na hipótese de não implantação do Distrito de Inovação Tecnológica previsto no “caput”, os parâmetros urbanísticos da ZOE-CEAGESP serão definidos por Projeto de Intervenção Urbana Específico, elaborado pelo Executivo e aprovado por lei específica, devendo ser observados no mínimo o disposto nos incisos I, II, III, IV e VI.</p>
					</CommentsContext>
					<CommentsContext :id="1093" :context="'Capítulo II, Seção III, Subseção I, Art. 23, Caput'">
						<p><b>Art. 23.</b> Nos termos do art. 111, “caput”, da Lei n. 16.050/2014 - PDE, a implantação do Projeto Estratégico CEAGESP determina a doação de área equivalente a 10% (dez por cento) da área total dos lotes resultantes como cumprimento de Cota de Solidariedade.</p>
					</CommentsContext>
					<CommentsContext :id="1094" :context="'Capítulo II, Seção III, Subseção I, Art. 23, § 1º'">
						<p><b>§ 1º.</b> Ao menos 50% (cinquenta por cento) da área doada em atendimento ao previsto no “caput” deverá ser localizada no perímetro do Projeto Estratégico CEAGESP, com áreas mínimas de lote de 2.000 m² (dois mil metros quadrados).</p>
					</CommentsContext>
					<CommentsContext :id="1095" :context="'Capítulo II, Seção III, Subseção I, Art. 23, § 2º'">
						<p><b>§ 2º.</b> Na hipótese da doação prevista no “caput” não atender integralmente a exigência prevista no art. 112 da Lei n. 16.050/2014 - PDE, a complementação da Cota de Solidariedade será realizada mediante depósito de valores na conta segregada do FUNDURB da AIU-ACP.</p>
					</CommentsContext>
					<CommentsContext :id="1096" :context="'Capítulo II, Seção III, Subseção I, Art. 23, § 3º'">
						<p><b>§ 3º.</b> O cumprimento da Cota de Solidariedade prevista no “caput” não afasta a incidência do instituto por ocasião das edificações implantadas no Projeto Estratégico CEAGESP, nos termos da Lei n. 16.050/2014 - PDE.</p>
					</CommentsContext>
				</section>
				<section>
					<h4 class="titulo" indent="3">Subseção II</h4>
					<h4 class="subtitulo">Do Projeto Estratégico do Núcleo Parque Tecnológico</h4>
					<CommentsContext :id="1097" :context="'Capítulo II, Seção III, Subseção II, Art. 24, Caput'">
						<p><b>Art. 24.</b> O Projeto Estratégico Núcleo do Parque Tecnológico prevê o reparcelamento dos lotes integrantes de seu perímetro integral, demarcado no Mapa VII, devendo ser promovida a destinação das áreas públicas nos termos dos Quadros 2A e 2B, observando-se as seguintes disposições:</p>
					</CommentsContext>
					<CommentsContext :id="1098" :context="'Capítulo II, Seção III, Subseção II, Art. 24, Caput, I'">
						<ol class="romanos" start="1">
							<li>ficam permitidos todos os usos de categoria R2v até o limite de 50% da área construída computável total do projeto, condicionados à implantação de fachada ativa nos termos da alínea “a”, do inciso VII do art. 62 da Lei nº 16.402/2016;</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1099" :context="'Capítulo II, Seção III, Subseção II, Art. 24, Caput, II'">
						<ol class="romanos" start="2">
							<li>os empreendimentos com predominância de uso residencial poderão atingir gabarito máximo de 48m (quarenta e oito metros), desde que atendidas as disposições dos Quadros 2A e 2B desta Lei;</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1100" :context="'Capítulo II, Seção III, Subseção II, Art. 24, Caput, III'">
						<ol class="romanos" start="3">
							<li>em lotes com área até 10.000m², na hipótese de destinação de parcela a fruição pública, não será devida outorga onerosa correspondente à metade do potencial construtivo adicional previsto para a área destinada a esta finalidade, independentemente da zona em que se situem, desde que atendidas as disposições dos arts. 70 e 88, incisos I a III da Lei nº 16.402/2016;</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1101" :context="'Capítulo II, Seção III, Subseção II, Art. 24, Caput, IV'">
						<ol class="romanos" start="4">
							<li>os lotes resultantes do reparcelamento poderão utilizar o potencial construtivo básico e máximo considerando a área dos lotes originais.</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1102" :context="'Capítulo II, Seção III, Subseção II, Art. 25, Caput'">
						<p><b>Art. 25.</b> Fica permitida a implantação do Projeto Estratégico Núcleo do Parque Tecnológico em dois Setores independentes, na seguinte conformidade:</p>
						<ol class="minusculas">
							<li>Setor Governo do Estado de São Paulo</li>
							<li>Setor Universidade de São Paulo</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1103" :context="'Capítulo II, Seção III, Subseção II, Art. 25, § 1º'">
						<p><b>§ 1º.</b> Na hipótese de implantação do Projeto Estratégico Núcleo do Parque Tecnológico na forma prevista no “caput”, aplicam-se as seguintes disposições:</p>
						<ol class="romanos">
							<li>serão permitidos os usos de categoria R2v até o limite de 20% (vinte por cento) da área construída computável total de cada um dos Setores, condicionado à implantação de fachada ativa nos termos do art. 62, inciso VII, alínea “a”, da Lei nº16.402/2016, aplicando-se, no que couber, as demais disposições do art. 24 “caput” desta Lei.</li>
							<li>
								a implantação por Setores do Projeto Estratégico Núcleo Parque Tecnológico determina a incidência, aos seus lotes e glebas, do disposto nos Quadros 2A e 2B desta Lei, cabendo aos proprietários do terreno, ainda, alternativamente:
								<ol class="minusculas">
									<li>executar os melhoramentos públicos previstos para o perímetro;</li>
									<li>realizar o pagamento de outorga onerosa do direito de construir para os empreendimentos que utilizem potencial construtivo adicional, na forma desta Lei.</li>
								</ol>
							</li>
							<li>o percentual de destinação de áreas públicas havidas em função do parcelamento do solo por Setor não poderá ser menor que 40% de sua respectiva área, respeitando os percentuais mínimos dispostos no Quadro 2B;</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1104" :context="'Capítulo II, Seção III, Subseção II, Art. 25, § 2º'">
						<p><b>§ 2º.</b> Para fins de implantação do Projeto Estratégico Núcleo do Parque Tecnológico, o lote com contribuinte nº 082.230.0050 poderá ser incorporado ao Setor Governo de São Paulo.</p>
					</CommentsContext>
					<CommentsContext :id="1105" :context="'Capítulo II, Seção III, Subseção II, Art. 26'">
						<p><b>Art. 26.</b> Na hipótese de não realização do Projeto Estratégico Núcleo do Parque Tecnológico em nenhuma de suas modalidades, aplica-se aos imóveis localizados em seu perímetro a disciplina urbanística das Áreas de Qualificação desta Lei.</p>
					</CommentsContext>
				</section>
				<section>
					<h4 class="titulo" indent="3">Subseção III</h4>
					<h4 class="subtitulo">Dos Projetos Estratégicos da Frente do Rio Pinheiros</h4>
					<CommentsContext :id="1106" :context="'Capítulo II, Seção III, Subseção III, Art. 27, Caput'">
						<p><b>Art. 27.</b> Os Projetos Estratégicos Alexandre Mackenzie, Engº Billings, Jaguaré e Mal. Mário Guedes integram o projeto da Frente do Rio Pinheiros, observando-se as seguintes disposições:</p>
						<ol class="romanos">
							<li>os lotes integrantes dos Projetos Estratégicos Engº Billings, Jaguaré e Mal. Mário Guedes deverão ser reparcelados, promovendo-se a destinação das áreas públicas nos termos previstos nesta Lei;</li>
							<li>implantação dos melhoramentos públicos nos termos dos Quadros 2A e 2B desta Lei;</li>
							<li>limite máximo de gabarito de 36m (trinta e seis metros).</li>
						</ol>
					</CommentsContext>
					<CommentsContext :id="1107" :context="'Capítulo II, Seção III, Subseção III, Art. 28, Caput'">
						<p><b>Art. 28.</b> No Projeto Estratégico Alexandre Mackenzie, a contrapartida urbanística devida em função dos benefícios advindos da adesão dos proprietários à sua implantação será a construção de unidades de Habitação de Interesse Social nas áreas institucionais havidas em função do parcelamento do solo, nos termos do art. 45, §4º da Lei n. 16.402/2016 - LPUOS.</p>
					</CommentsContext>
					<CommentsContext :id="1107" :context="'Capítulo II, Seção III, Subseção III, Art. 28, Parágrafo único'">
						<p><b>Parágrafo único.</b> Os valores destinados às edificações previstas no “caput” serão correspondentes à capacidade de arrecadação do projeto estratégico tendo em vista a alienação integral do seu potencial construtivo adicional, sendo utilizados, para a definição do número de unidades de habitação de interesse social a serem entregues em função do valor de contrapartida, as especificações da Secretaria Municipal de Habitação sobre o tema.</p>
					</CommentsContext>
				</section>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção IV</h3>
				<h3 class="subtitulo">Das Áreas de Estruturação Local</h3>
				<CommentsContext :id="1108" :context="'Capítulo II, Seção IV, Art. 29'">
					<p><b>Art. 29.</b> As Áreas de Estruturação Local do PIU-ACP são porções do território que apresentam potencial de transformação urbana local, marcadas pela presença de vulnerabilidade social e ambiental, para as quais serão elaborados Projetos de Intervenção Urbana específicos, diretamente pela SP-Urbanismo ou sob sua coordenação, nos termos dispostos do art. 149 da Lei n. 16.050/2014 – PDE.</p>
				</CommentsContext>
				<CommentsContext :id="1109" :context="'Capítulo II, Seção IV, Art. 30, Caput'">
					<p><b>Art. 30.</b> Ficam instituídas as seguintes Áreas de Estruturação Urbana - AEL demarcadas no Mapa VII:</p>
					<ol class="romanos">
						<li>Área de Estruturação Urbana Humaitá – AEL Humaitá</li>
						<li>Área de Estruturação Urbana São Remo – AEL São Remo</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1110" :context="'Capítulo II, Seção IV, Art. 30, § 1º'">
					<p><b>§ 1º.</b> Os Projetos de Intervenção Urbana das AEL deverão contemplar os objetivos e disposições contidas no Quadro 2A desta lei, bem como estarem em consonância com os Plano de Urbanização das ZEIS 1, contidas em seus perímetros e com os Programas de Ação Integrada – PAI, a serem definidos no âmbito do PIU-ACP;</p>
				</CommentsContext>
				<CommentsContext :id="1110" :context="'Capítulo II, Seção IV, Art. 30, § 2º'">
					<p><b>§ 2º.</b> O desenvolvimento de propostas e projetos para a área deverá se realizar a partir da articulação entre os diversos atores colocalizados, em especial a Universidade de São Paulo - USP, proprietária de terrenos, Secretaria da Habitação e os respectivos Conselhos Gestores da ZEIS 1;</p>
				</CommentsContext>
				<CommentsContext :id="1111" :context="'Capítulo II, Seção IV, Art. 30, § 3º'">
					<p><b>§ 3º.</b> Fica autorizada a utilização do instrumento da Transferência do Direito de Construir para fins de regularização fundiária das ZEIS 1 contidas nas AEL previstas neste artigo, nos termos do regulamento.</p>
				</CommentsContext>
			</section>
		</section>
		<section>
			<h2 class="titulo" indent="1">CAPÍTULO III</h2>
			<h2 class="subtitulo">DO PROGRAMA DE INTERVENÇÕES</h2>
			<CommentsContext :id="1112" :context="'Capítulo III, Art. 31, Caput'">
				<p><b>Art. 31.</b> O Programa de Intervenções do PIU ACP, indicado no Mapa VI e descritos no Quadro 4 desta Lei, compreende intervenções Básicas,  de implantação prioritária no âmbito da AIU-ACP e Complementares, de implantação subordinada a critérios de conveniência e oportunidade administrativa.</p>
			</CommentsContext>
			<CommentsContext :id="1112" :context="'Capítulo III, Art. 31, § 1º'">
				<p><b>§ 1º.</b> São elementos do Programa de Intervenções previsto nesta Lei:</p>
				<ol class="romanos">
					<li>
						Programa Habitacional de Interesse social, que contempla ações que busquem garantir o direito à moradia digna, promovendo o atendimento habitacional adequado e definitivo às famílias de baixa renda e prevendo o atendimento provisório quando necessário, aplicam-se as seguintes disposições:
						<ol class="minusculas">
							<li>ao menos 30% (trinta por cento) dos recursos arrecadados na conta segregada citada no art. 35 desta Lei serão destinados a ações referentes ao Programa Habitacional de Interesse Social;</li>
							<li>fica autorizada a aquisição de terrenos para subsídio à produção habitacional de interesse social e à provisão de moradias para população de baixa renda, incluindo-se a implantação Empreendimentos de Habitação de Interesse Social - EHIS, com uso misto nas edificações, destinados a formação de parque público de locação social;</li>
							<li>devem ser promovidas a realização de parcerias com o setor privado para a provisão de Habitação de Interesse Social.;</li>
							<li>a destinação de terrenos em função da aplicação da Cota de Solidariedade, observadas as demais disposições desta Lei, será realizada integralmente no parâmetro de abrangência da AIU-ACP. </li>
						</ol>
					</li>
					<li>execução dos Melhoramentos Viários indicado no Mapa V desta lei e descrito em seu Quadro 1B;</li>
					<li>implantação da rede de parques, praças, caminhos verdes e áreas públicas indicadas no Mapa IV desta lei e relacionadas em seu Quadro 1C; </li>
					<li>requalificação de logradouros, compreendendo melhorias de passeios, de pavimento, de iluminação pública, de arborização urbana e paisagismo, de acessibilidade e de mobiliário urbano, o reordenamento de sinalização viária horizontal, vertical e semafórica, correções geométricas, ciclovias e ciclofaixas, bem como de soluções não estruturais de drenagem;</li>
					<li>execução de obras de drenagem para contenção ou mitigação de alagamentos na área da AIU-ACP; </li>
					<li>o apoio à ampliação e melhoria do sistema de transporte coletivo de média capacidade, incluindo participação em medidas de implantação ou reforma de corredores de ônibus; </li>
					<li>
						a implantação e melhorias da rede de equipamentos públicos, incluindo:
						<ol class="minusculas">
							<li>equipamentos sociais e urbanos necessários ao adensamento e melhoria da qualidade de vida da região; </li>
							<li>a aquisição de terrenos para as finalidades previstas neste inciso;</li>
						</ol>
					</li>
					<li>a desapropriação de imóveis, inclusive para posterior revenda, necessárias à implantação do Programa de Intervenções, dos Projetos Estratégicos e das AEL previstos nesta lei;</li>
					<li>O subsídio ou fomento para transformação ou requalificação do território do ACP; </li>
					<li>a contratação de projetos de desenvolvimento e detalhamento dos Projetos de Ação Integrada e de Intervenção Urbana das AEL;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="1113" :context="'Capítulo III, Art. 31, § 2º'">
				<p><b>§ 2º.</b> A execução das obras previstas no Programa de Intervenções estará sujeita ao detalhamento, por intermédio de Planos de Ação Integrada desenvolvidos pela SP-Urbanismo, e à aprovação dos projetos nos órgãos de licenciamento ambiental e de preservação do patrimônio histórico e cultural, quando exigido pela legislação vigente.</p>
			</CommentsContext>
			<CommentsContext :id="1114" :context="'Capítulo III, Art. 31, § 3º'">
				<p><b>§ 3º.</b> A provisão habitacional de interesse social será realizada atendendo-se, preferencialmente, a população moradora do ACP, observando-se o Mapa III desta Lei.</p>
			</CommentsContext>
			<CommentsContext :id="1115" :context="'Capítulo III, Art. 31, § 4º'">
				<p><b>§ 4º.</b> as políticas públicas de habitação no PIU-ACP devem seguir diretrizes estabelecidas no âmbito da política habitacional municipal, conforme definições da Secretaria Municipal de Habitação e mecanismos definidos em regulamentações específicas;</p>
			</CommentsContext>
			<CommentsContext :id="1116" :context="'Capítulo III, Art. 31, § 5º'">
				<p><b>§ 5º.</b> Os bens desapropriados no inciso VIII serão apropriados diretamente pela empresa SP-Urbanismo, que promoverá seu aproveitamento nos termos do projeto urbanístico que deu suporte à desapropriação.</p>
			</CommentsContext>
			<CommentsContext :id="1117" :context="'Capítulo III, Art. 32, Caput'">
				<p><b>Art. 32.</b> Ficam aprovados os melhoramentos públicos previsto nesta Lei, englobando os melhoramentos viários indicados em seu Mapa V e descritos no seu Quadro 1B, e as Áreas Verdes indicadas no seu Mapa IV e relacionadas no seu Quadro 1C.</p>
			</CommentsContext>
			<CommentsContext :id="1118" :context="'Capítulo III, Art. 32, § 1º'">
				<p><b>§ 1º.</b> Os melhoramentos viários de que trata o "caput" deste artigo estão configurados nas Plantas nº XXX a XXX, Classificação XXX, do arquivo da Superintendência de Projetos Viários.</p>
			</CommentsContext>
			<CommentsContext :id="1119" :context="'Capítulo III, Art. 32, § 2º'">
				<p><b>§ 2º.</b> Ficam igualmente aprovadas as concordâncias de alinhamentos constantes das Plantas referidas no § 1º.</p>
			</CommentsContext>
			<CommentsContext :id="1120" :context="'Capítulo III, Art. 33, Caput'">
				<p><b>Art. 33.</b> Fica aprovada diretriz viária de implantação de via local, conforme os parâmetros estabelecidos pelo Quadro 2B da Lei nº 16.402, de 2016, conectando a Av. Eng. Roberto Zuccolo (CodLog 17.232-4) à Av. Dra. Ruth Cardoso (CodLog 51.879-4).</p>
			</CommentsContext>
			<CommentsContext :id="1121" :context="'Capítulo III, Art. 33, Parágrafo único'">
				<p><b>Parágrafo único</b> O traçado desta via será desenvolvido no âmbito do Projeto de Intervenção Urbana da AEL Humaitá.</p>
			</CommentsContext>
			<CommentsContext :id="1122" :context="'Capítulo III, Art. 34, Caput'">
				<p><b>Art. 34.</b> Fica o Poder Público autorizado a realizar os procedimentos administrativos e judiciais necessários à abertura a circulação pública de vias aprovadas em loteamentos, arruamentos ou similares e ainda não implantadas em sua totalidade ou de vias implantadas e posteriormente ocupadas com ou sem termos de permissão:</p>
				<ol class="romanos">
					<li>
						na região do Jardim Humaitá:
						<ol class="minusculas">
							<li>R. Cd. de Castro e Sola (CodLog 67.154-1),</li>
							<li>R. Visc. de Costa Franco (CodLog 63.144-2),</li>
							<li>R. Br. Antonio de Camaçari (CodLog 67.738-8);</li>
						</ol>
					</li>
					<li>
						na região da Gastão Vidigal:
						<ol class="minusculas">
							<li>R. Olga Lopes de Mendonça (CodLog 73.696-1);</li>
						</ol>
					</li>
					<li>
						na região de Presidente Altino:
						<ol class="minusculas">
							<li>R. Diogo Pires (CodLog 71.711-8);</li>
						</ol>
					</li>
					<li>
						na região do Ceagesp:
						<ol class="minusculas">
							<li>R. Hayden (CodLog 08.595-2),</li>
							<li>R. Othão (CodLog 15.217-0),</li>
							<li>R. Bruno Bauer (CodLog 03.683-8),</li>
							<li>R. Dr. Seidel (CodLog 17.978-7).</li>
						</ol>
					</li>
					<li>
						Na região da AIU Vila Leopoldina - Villa Lobos:
						<ol class="minusculas">
							<li>R. Prof. Ariovaldo da Silva (CodLog 61.265-0),</li>
							<li>R. Japiaçu (CodLog 09.936-8).</li>
						</ol>
					</li>
					<li>
						Na região Oeste do Ceagesp:
						<ol class="minusculas">
							<li>R. Potsdam (CodLog 16.556-5),</li>
							<li>R. Japiaçu (CodLog 09.936-8),</li>
							<li>R. Heliópolis (CodLog 08.650-9).</li>
						</ol>
					</li>
				</ol>
			</CommentsContext>
		</section>
		<section>
			<h2 class="titulo" indent="1">CAPÍTULO IV</h2>
			<h2 class="subtitulo">DA OUTORGA ONEROSA DE POTENCIAL ADICIONAL DE CONSTRUÇÃO, DA CONTA SEGREGADA DO FUNDURB, SUA VINCULAÇÃO E DA DESTINAÇÃO DOS RECURSOS ARRECADADOS</h2>
			<CommentsContext :id="1123" :context="'Capítulo IV, Art. 35, Caput'">
				<p><b>Art. 35.</b> Fica o Executivo autorizado a efetuar a outorga onerosa de potencial adicional de construção para os lotes contidos na AIU-ACP, na conformidade dos valores, critérios e condições estabelecidos nesta lei.</p>
			</CommentsContext>
			<CommentsContext :id="1124" :context="'Capítulo IV, Art. 35, § 1º'">
				<p><b>§ 1º.</b> Os recursos captados pela aplicação desta lei para a AIU-ACP destinam-se à execução dos elementos do Programa de Intervenções previstos para seu território.</p>
			</CommentsContext>
			<CommentsContext :id="1125" :context="'Capítulo IV, Art. 35, § 2º'">
				<p><b>§ 2º.</b> A AIU-ACP terá conta segregada no Fundo Municipal de Desenvolvimento Urbano - FUNDURB, cabendo ao seu Conselho Gestor publicar, anualmente, listagem de intervenções prioritárias para implantação do Programa de Intervenções em seu território.</p>
			</CommentsContext>
			<CommentsContext :id="1126" :context="'Capítulo IV, Art. 35, § 3º'">
				<p><b>§ 3º.</b> Os recursos havidos em função da aplicação da Cota de Solidariedade em empreendimentos realizados no âmbito do PIU-ACP, observadas as demais disposições desta Lei, serão depositados na conta segregada prevista no § 2º.</p>
			</CommentsContext>
			<CommentsContext :id="1127" :context="'Capítulo IV, Art. 36, Caput'">
				<p><b>Art. 36.</b> A contrapartida financeira à outorga onerosa de potencial construtivo adicional será calculada segundo a equação definida no art. 117 da Lei nº 16.050, de 2014 - PDE.</p>
			</CommentsContext>
			<CommentsContext :id="1128" :context="'Capítulo IV, Art. 36, § 1º'">
				<p><b>§ 1º.</b> Aplicam-se na AIU-ACP os Fatores de Planejamento (Fp) definidos no Quadro 3A desta lei.</p>
			</CommentsContext>
			<CommentsContext :id="1129" :context="'Capítulo IV, Art. 36, § 2º'">
				<p><b>§ 2º.</b> O potencial construtivo adicional comercializado mediante outorga onerosa será alienado nos termos previstos na Lei nº 16.050, de 2014 - PDE ou por intermédio de leilões promovidos pela empresa SP-Urbanismo para a implantação de Planos de Ação Integrada.</p>
			</CommentsContext>
			<CommentsContext :id="1130" :context="'Capítulo IV, Art. 36, § 3º'">
				<p><b>§ 3º.</b> Na modalidade do leilão, a quantidade de potencial construtivo adicional a ser disponibilizada e os respectivos descontos iniciais de seu valor de alienação deverão ser definidos por Plano de Ação Integrada, de acordo com as condições de mercado e as necessidades de viabilidade do Programa de Intervenções, devendo cada edital de leilão prever mecanismos que garantam a aplicação dos princípios da justa distribuição dos benefícios e ônus decorrentes do processo de urbanização, da ampla publicidade e da livre concorrência entre os interessados.</p>
			</CommentsContext>
			<CommentsContext :id="1131" :context="'Capítulo IV, Art. 36, § 4º'">
				<p><b>§ 4º.</b> O potencial construtivo adicional adquirido mediante leilão será imediatamente vinculado ao lote, atendendo-se, no mínimo, às seguintes disposições:</p>
				<ol class="romanos">
					<li>o pagamento da contrapartida referente à aquisição de potencial construtivo adicional não dependerá da existência prévia de requerimento de licenciamento edilício; </li>
					<li>após o pagamento previsto no inciso I deste artigo, a SP-Urbanismo expedirá certidão declarando a quantidade de potencial construtivo adicional incorporada ao lote; </li>
					<li>não poderá haver desvinculação do potencial construtivo adicional adquirido mediante leilão vinculado ao lote; </li>
					<li>a utilização do potencial construtivo adicional já vinculado ao lote será efetivada mediante apresentação da certidão expedida pela SP-Urbanismo no momento do licenciamento edilício.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="1132" :context="'Capítulo IV, Art. 37'">
				<p><b>Art. 37.</b> Tendo em vista os objetivos gerais do PIU-ACP, os recursos depositados na conta segredada do FUNDURB deverão destinar, deduzidas as taxas, emolumentos e custos de administração, ao menos 30% (trinta por cento) dos recursos arrecadados para a construção de habitações de interesse social no perímetro de abrangência da AIU-ACP.</p>
			</CommentsContext>
		</section>
		<section>
			<h2 class="titulo" indent="1">CAPÍTULO V</h2>
			<h2 class="subtitulo">DA GESTÃO</h2>
			<section>
				<h3 class="titulo" indent="2">Seção I</h3>
				<h3 class="subtitulo">Da Atuação Concertada dos Órgãos e Entidades Municipais</h3>
				<CommentsContext :id="1133" :context="'Capítulo V, Seção I, Art. 38, Caput'">
					<p><b>Art. 38.</b> A implantação do PIU-ACP e do seu Programa de Intervenções se dará mediante ação concertada entre os órgãos e entidades municipais, estaduais e federais e agentes privados, atendendo-se, no mínimo, às disposições desta lei.</p>
				</CommentsContext>
				<CommentsContext :id="1134" :context="'Capítulo V, Seção I, Art. 38, Parágrafo único'">
					<p><b>Parágrafo único.</b> A coordenação das ações previstas no "caput" deste artigo caberá à empresa SP-Urbanismo, que contará com a colaboração dos demais órgãos e entidades municipais para o desempenho destas funções.</p>
				</CommentsContext>
				<CommentsContext :id="1135" :context="'Capítulo V, Seção I, Art. 39, Caput'">
					<p><b>Art. 39.</b> Caberá à Secretaria Municipal de Desenvolvimento Urbano - SMDU além das outras atribuições previstas em lei:</p>
					<ol class="romanos">
						<li>autorizar o desenvolvimento dos Projetos de Intervenção Urbana das AEL, de novos Projetos de Intervenção Urbana e de novos Projetos Estratégicos no perímetro do Arco Pinheiros mediante interação entre órgãos da administração direta e indireta, com outras esferas de governo e com a sociedade civil;realizar o controle finalístico da transformação urbana através do acompanhamento das políticas públicas e do monitoramento dos indexadores da transformação territorial; </li>
						<li>identificar as áreas de propriedade do município no território da AIU-ACP e sua atualização proveniente das ações autorizadas por esta Lei;</li>
						<li>determinar a realização das tarefas concernentes à implantação da AIU-ACP pela empresa SP-Urbanismo.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1136" :context="'Capítulo V, Seção I, Art. 39, Parágrafo único'">
					<p><b>Parágrafo único.</b> A Secretaria Municipal de Desenvolvimento Urbano – SMDU firmará ajustes com a empresa SP-Urbanismo para a prática dos atos necessários ao desenvolvimento, gestão e acompanhamento da implantação do PIU-ACP.</p>
				</CommentsContext>
				<CommentsContext :id="1137" :context="'Capítulo V, Seção I, Art. 40'">
					<p><b>Art. 40.</b> Caberá à Secretaria Municipal do Verde e do Meio Ambiente:</p>
					<ol class="romanos">
						<li>realizar o licenciamento ambiental dos empreendimentos geradores de impacto ambiental e de vizinhança do PIU-ACP; </li>
						<li>realizar o monitoramento ambiental da implantação do Programa de Intervenções da AIU no tocante a seu impacto ambiental; </li>
						<li>instruir os critérios de detalhamento dos projetos de espaços públicos e áreas verdes voltadas a qualificação ambiental previstos no Programa de Intervenção da AIU;</li>
						<li>cooperar com a empresa SP-Urbanismo no desenvolvimento dos Planos de Ação Integrada, no que tange a definição de soluções voltadas à mitigação dos problemas ambientais e da promoção de áreas verdes públicas; </li>
						<li>indicar, em consonância com os projetos desenvolvidos da empresa SP-Urbanismo, o enquadramento das áreas verdes propostas pelo PIU-ACP no Sistema de Áreas Protegidas, Áreas Verdes e Espaços Livres (SAPAVEL).</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1138" :context="'Capítulo V, Seção I, Art. 41'">
					<p><b>Art. 41.</b> Caberá à Secretaria Municipal de Cultura determinar diretrizes para implantação do programa de intervenções em áreas envoltórias e para projetos de recuperação de bens de interesse cultural.</p>
				</CommentsContext>
				<CommentsContext :id="1139" :context="'Capítulo V, Seção I, Art. 42, Caput'">
					<p><b>Art. 42.</b> Caberá à Secretaria Municipal de Licenciamento solicitar à empresa SP-Urbanismo a manifestação sobre a conformidade dos projetos sob sua avaliação às diretrizes urbanísticas para os Projetos Estratégicos e demais parcelamento de glebas ou lotes contidos no perímetro do PIU-ACP, sem prejuízo do atendimento às exigências previstas nos arts. 51 e 52 da Lei nº 16.402, de 2016 -LPUOS.</p>
				</CommentsContext>
				<CommentsContext :id="1140" :context="'Capítulo V, Seção I, Art. 42, Parágrafo único'">
					<p><b>Parágrafo único.</b> A anuência prevista no "caput" deste artigo será prévia e indispensável à expedição de diretrizes para os Projetos Estratégicos instituídos por esta Lei e demais parcelamento de glebas ou lotes contidos no perímetro do ACP, podendo a SP-Urbanismo solicitar ajustes e adaptações de caráter urbanístico nos projetos, para atendimento a disposições do PIU-ACP.</p>
				</CommentsContext>
				<CommentsContext :id="1141" :context="'Capítulo V, Seção I, Art. 43, Caput'">
					<p><b>Art. 43.</b> Caberá à Secretaria Municipal de Habitação:</p>
					<ol class="romanos">
						<li>operacionalizar o programa de atendimento da população impactada pelo Programa de Intervenções do Projeto, inclusive podendo aportar recursos de outras fontes do setor público e privado para a sua atuação;</li>
						<li>realizar a promoção de programas e soluções habitacionais nos termos da política habitacional prevista para o território, observando-se o disposto nesta Lei e as determinações dos Planos de Ação Integrada; </li>
						<li>elaborar os estudos técnicos para a indicação dos terrenos destinados ao atendimento habitacional de famílias afetadas pelas intervenções públicas previstas nesta Lei, bem como a elaboração dos correspondentes planos de reassentamento; </li>
						<li>realizar o cadastro socioeconômico da população de baixa renda moradora da AIU-ACP; </li>
						<li>atender o cadastro de demanda habitacional, garantindo-se atendimento preferencial à população atualmente residente no perímetro da AIU-ACP; </li>
						<li>realizar a gestão e o monitoramento da pós-ocupação do parque público de habitações de interesse social voltado para a locação social e o atendimento do programa de bolsa-aluguel;</li>
						<li>estipular critérios para a realização de parcerias vinculadas a programas habitacionais, atendendo-se as diretrizes da AIU-ACP;</li>
						<li>cooperar com a empresa SP-Urbanismo no desenvolvimento dos Planos de Ação Integrada, no que tange a definição das soluções para política habitacional para população de baixa renda no território.</li>
					</ol>
				</CommentsContext>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção II</h3>
				<h3 class="subtitulo">Da Atuação da Empresa São Paulo Urbanismo</h3>
				<CommentsContext :id="1142" :context="'Capítulo V, Seção II, Art. 44, Caput'">
					<p><b>Art. 44.</b> Caberá à empresa SP-Urbanismo promover a implantação do PIU-ACP de forma global, avaliando sistematicamente a evolução dos processos de desenvolvimento urbano na AIU-ACP, especialmente sendo-lhe atribuídas, dentre outras constantes nesta lei e em seus estatutos, as seguintes funções:</p>
					<ol class="romanos">
						<li>coordenar o Conselho Gestor da AIU-ACP;</li>
						<li>desenvolver e detalhar os Planos de Ação Integrada e os Projetos de Intervenção Urbana das AEL e monitorar o desenvolvimento dos Projetos Estratégicos e os Projetos de Intervenção Urbana das ZOE, acompanhando em todos os casos suas implantações; </li>
						<li>apoiar os processos de aquisição e alienação de terras para implantação da AIU-ACP; </li>
						<li>coordenar as formas de financiamento da implantação do Programa de Intervenções da AIU-ACP; </li>
						<li>coordenar a execução das obras relativas ao Programa de Intervenções com as empresas São Paulo Obras - SP-Obras, Companhia Metropolitana de Habitação de São Paulo- COHAB-SP, São Paulo Transportes - SP-Trans e Companhia de Engenharia de Tráfego - CET;</li>
						<li>subsidiar a formulação de indicadores para utilização no Sistema Municipal de Informações, inclusive com informações georreferenciadas em meio digital; </li>
						<li>propiciar o adequado acompanhamento da execução do Programa de Intervenções do PIU-ACP pelo Conselho Gestor e pelos demais órgãos da Administração Direta e Indireta; </li>
						<li>secretariar o Conselho Gestor da AIU por esta lei e solicitar informações e esclarecimentos aos demais órgãos municipais envolvidos na implantação do Programa de Intervenções do PIU-ACP;</li>
						<li>promover a interação entre o Conselho Gestor da AIU do ACP com a população diretamente afetada pelas intervenções urbanísticas necessárias à implantação do PIU, via Conselho Gestor das ZEIS 1 e ZEIS 3; </li>
						<li>intermediar a relação entre os órgãos do setor público e entre estes e o setor privado, com a finalidade de facilitar os processos de implantação da AIU-ACP; </li>
						<li>estruturar as formas de financiamento e modelos jurídicos para a implantação da AIU-ACP.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1143" :context="'Capítulo V, Seção II, Art. 44, Parágrafo único'">
					<p><b>Parágrafo único.</b> A SP-Urbanismo:</p>
					<ol class="romanos">
						<li>apresentará ao Conselho Gestor da AIU relatórios que demonstrem o andamento das ações previstas no Programa de Intervenções de seus respectivos territórios;</li>
						<li>publicará periodicamente informações sobre o andamento da implantação da AIU, em linguagem acessível à população.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1144" :context="'Capítulo V, Seção II, Art. 45'">
					<p><b>Art. 45.</b> Para a implantação do Programa de Intervenções, a empresa SP-Urbanismo utilizará as seguintes formas de financiamento e controle de recursos, dentre outras previstas na legislação empresarial:</p>
					<ol class="romanos">
						<li>monitoramento permanente dos valores de mercado do potencial construtivo adicional na área de abrangência da AIU-ACP, de modo a possibilitar a captura de parte da valorização oriunda do desenvolvimento urbano por parte do Poder Público; </li>
						<li>alienação de terrenos remanescentes de processos de desapropriação que não estejam afetos à função pública ou que sejam considerados inadequados ao Programa de Intervenções; </li>
						<li>alienação de terrenos obtidos em sede de desapropriação urbanística, realizadas em função da implantação de seu Programa de Intervenções.</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1145" :context="'Capítulo V, Seção II, Art. 46, Caput'">
					<p><b>Art. 46.</b> Para promover a implantação da AIU-ACP, a SP-Urbanismo poderá:</p>
					<ol class="romanos">
						<li>celebrar, participar ou intervir nos contratos que tenham por objeto a instituição de parcerias público-privadas para a implantação da AIU-ACP; </li>
						<li>assumir, total ou parcialmente, direitos e obrigações decorrentes dos contratos de que trata o inciso I do "caput" deste artigo; </li>
						<li>prestar garantias reais, fidejussórias e contratar seguros; </li>
						<li>explorar, gravar e alienar onerosamente os bens integrantes de seu patrimônio; </li>
						<li>participar do capital de outras empresas controladas por ente público ou privado; </li>
						<li>constituir sociedades de propósito específico, fundos de investimento imobiliário, e fundos de participação em imóveis;</li>
						<li>receber delegação do Poder Executivo para promover processos desapropriatórios, exclusivamente para a implantação do Programa de Intervenções da AIU-ACP;</li>
						<li>firmar compromissos de investimento, convênios, termos de parceria e outros ajustes, inclusive consórcios, com entes da Administração Pública direta e indireta de todos os níveis da Federação; </li>
						<li>firmar contratos de gestão com a Administração Direta, nos termos do art. 37, § 8º da Constituição Federal; </li>
						<li>promover as negociações e firmar ajustes institucionais com a administração direta e indireta de todas as esferas de governo, a fim de implantar da AIU-ACP;</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1146" :context="'Capítulo V, Seção II, Art. 46, Parágrafo único'">
					<p><b>Parágrafo único.</b> Os contratos de gestão previstos no inciso IX do "caput" deste artigo poderão prever o aporte de recursos da Administração Direta para obras e intervenções capazes de desencadear e fomentar processos de desenvolvimento urbano pertinentes ao Programa de Intervenções desta lei.</p>
				</CommentsContext>
				<CommentsContext :id="1147" :context="'Capítulo V, Seção II, Art. 47, Caput'">
					<p><b>Art. 47.</b> A empresa SP-Urbanismo será remunerada, pela gestão da implantação do Programa de Intervenções previsto nesta lei, com 5% (cinco por cento) dos recursos arrecadados com a outorga de potencial construtivo adicional da área de abrangência de seu perímetro, além da mesma porcentagem de outras receitas eventuais advindas da implantação da AIU-ACP.</p>
				</CommentsContext>
				<CommentsContext :id="1148" :context="'Capítulo V, Seção II, Art. 47, Parágrafo único'">
					<p><b>Parágrafo único.</b> Sem prejuízo do previsto no "caput" deste artigo, serão devidos à SP-Urbanismo honorários em razão de sua contratação pela Administração Direta ou Indireta do Município para o desenvolvimento de Planos de Ação Integrada, Projetos de Intervenção Urbana das AEL, monitoramento dos Projetos Estratégicos e quaisquer outros estudos referentes ao detalhamento da AIU-ACP; remunerados nos termos dispostos em cada avença.</p>
				</CommentsContext>
			</section>
			<section>
				<h3 class="titulo" indent="2">Seção III</h3>
				<h3 class="subtitulo">Do Conselho Gestor da Área de Intervenção Urbana do Arco Pinheiros</h3>
				<CommentsContext :id="1149" :context="'Capítulo V, Seção III, Art. 48, Caput'">
					<p><b>Art. 48.</b> A AIU-ACP contará com um Conselho Gestor, coordenado pela SP-Urbanismo, com participação de órgãos municipais e de entidades representativas da sociedade civil, visando instruir e auxiliar a implantação do respectivo Programa de Intervenções e o monitoramento de seu desenvolvimento.</p>
				</CommentsContext>
				<CommentsContext :id="1150" :context="'Capítulo V, Seção III, Art. 48, § 1º'">
					<p><b>§ 1º.</b> O Conselho Gestor é instrumento de gestão e participação instituído para acompanhar a implantação e propor o aperfeiçoamento do Programa de Intervenções da AIU-ACP, devendo a SP-Urbanismo proporcionar formalmente o exercício das atribuições deste colegiado, previstas por esta Lei.</p>
				</CommentsContext>
				<CommentsContext :id="1151" :context="'Capítulo V, Seção III, Art. 48, § 2º'">
					<p><b>§ 2º.</b> O Conselho Gestor, nos termos do art. 141, inciso XIV, da Lei nº 16.050, de 2014 - PDE, será designado pelo Executivo e terá a seguinte composição:</p>
					<ol class="romanos">
						<li>
							9 (nove) representantes do Poder Público, designados pelo Prefeito para um período de 2 (dois) anos, com a seguinte distribuição:
							<ol class="minusculas">
								<li>1 (um) representante da Secretaria Municipal Desenvolvimento Urbano; </li>
								<li>1 (um) representante da Secretaria Municipal de Habitação; </li>
								<li>1 (um) representante da Secretaria Municipal de Assistência e Desenvolvimento Social; </li>
								<li>1 (um) representante da Secretaria Municipal do Verde e do Meio Ambiente; </li>
								<li>1 (um) representante da Secretaria Municipal dos Transportes ou da Companhia de Engenharia Tráfego; </li>
								<li>1 (um) representante da Secretaria Municipal de Infraestrutura Urbana e Obras; </li>
								<li>1 (um) representante indicado pela Subprefeitura da Lapa; </li>
								<li>1 (um) representante indicado pela Subprefeitura do Butantã;</li>
								<li>1 (um) representante da SP-Urbanismo. </li>
							</ol>
						</li>
						<li>
							9 (nove) representantes de entidades da sociedade civil, designados para um período de 2 (dois) anos, com a seguinte distribuição:
							<ol class="minusculas">
								<li>1 (um) representante de entidades profissionais com atuação relevante da AIU do ACP; </li>
								<li>1 (um) representante de entidades acadêmicas ou de pesquisa com atuação na AIU do ACP; OU 1 (um) representante de entidades de pesquisa e tecnologia vinculados à Universidades e/ou outras entidades de ensino com atuação na AIU do ACP;</li>
								<li>1 (um) representante de entidades empresariais com reconhecida atuação no perímetro da AIU-ACP ou nas questões pertinentes à AIU-ACP;</li>
								<li>1 (um) representante de movimentos de mobilidade urbana com reconhecida atuação no perímetro da AIU-ACP;</li>
								<li>2 (dois) representantes do Conselho Participativo Municipal sendo 1 (um) de cada Subprefeitura do território de abrangência da AIU-ACP;</li>
								<li>1 (um) representante do Conselho Municipal de Habitação com atuação da AIU-ACP;</li>
								<li>2 (dois) representantes de movimentos de moradia ou associações de bairros da área do perímetro da AIU-ACP.</li>
							</ol>
						</li>
					</ol>
				</CommentsContext>
				<CommentsContext :id="1152" :context="'Capítulo V, Seção III, Art. 48, § 3º'">
					<p><b>§ 3º.</b> Os representantes mencionados nas alíneas "a", “b”,“c” e “g”, serão escolhidos entre os  participantes do Conselho Municipal de Política Urbana - CMPU, vinculado à Secretaria Municipal de Desenvolvimento Urbano – SMDU, na forma de seus regimentos específicos;</p>
				</CommentsContext>
				<CommentsContext :id="1153" :context="'Capítulo V, Seção III, Art. 48, § 4º'">
					<p><b>§ 4º.</b> O representante mencionado na alínea "d" será escolhido entre os participantes do Conselho Municipal de Transito e Transporte - CMTT, vinculado à Secretaria Municipal de Transportes – SMT, na forma de seus regimentos específicos;</p>
				</CommentsContext>
				<CommentsContext :id="1154" :context="'Capítulo V, Seção III, Art. 48, § 5º'">
					<p><b>§ 5º.</b> Caberá ao representante de cada órgão ou entidade municipal informar ao Conselho Gestor, nas reuniões do respectivo grupo, do andamento das ações e atividades, relacionadas ao órgão ou entidade que representa desenvolvidas no perímetro da AIU-ACP.</p>
				</CommentsContext>
				<CommentsContext :id="1155" :context="'Capítulo V, Seção III, Art. 48, § 6º'">
					<p><b>§ 6º.</b> Cada representante contará com um suplente, indicado ou eleito conjuntamente ao representante titular.</p>
				</CommentsContext>
				<CommentsContext :id="1156" :context="'Capítulo V, Seção III, Art. 48, § 7º'">
					<p><b>§ 7º.</b> Caberá à SP-Urbanismo elaborar a minuta do Regimento interno do Conselho Gestor da AIU-ACP, bem como ao seu representante o voto de desempate nas deliberações do colegiado.</p>
				</CommentsContext>
				<CommentsContext :id="1157" :context="'Capítulo V, Seção III, Art. 48, § 8º'">
					<p><b>§ 8º.</b> Caberá a SP-Urbanismo instituir a Secretaria Executiva Única do Conselho Gestor da AIU-ACP, responsável pelos serviços administrativos e burocráticos atribuído ao colegiado.</p>
				</CommentsContext>
				<CommentsContext :id="1158" :context="'Capítulo V, Seção III, Art. 49'">
					<p><b>Art. 49.</b> O Conselho Gestor da AIU-ACP realiza o controle social da implantação do seu PIU, cabendo-lhe: </p>
					<ol class="romanos">
						<li>aprovar o seu regimento interno;</li>
						<li>indicar elementos prioritários para construção dos Planos de Ação Integrada elaborados pela SP-Urbanismo;</li>
						<li>acompanhar o andamento dos projetos e obras relativas ao Programa de Intervenções, por meio da validação dos relatórios apresentados pela SP-Urbanismo;</li>
						<li>acompanhar a aplicação da cota da solidariedade; </li>
						<li>manifestar-se previamente sobre as propostas de implantação e a aplicação dos recursos vinculados a implantação do Programa de Intervenções;</li>
					</ol>
				</CommentsContext>
			</section>
		</section>
		<section>
			<h2 class="titulo" indent="1">CAPÍTULO VI</h2>
			<h2 class="subtitulo">DO TERRITÓRIO DO PROJETO DE INTERVENÇÃO URBANA VILA LEOPOLDINA VILLA LOBOS – PIU VL</h2>
			<CommentsContext :id="1159" :context="'Capítulo VI, Art. 50, Caput'">
				<p><b>Art. 50.</b> Será elaborada lei específica para a regulação urbanística do território do Projeto de Intervenção Urbana Vila Leopoldina-Villa Lobos.</p>
			</CommentsContext>
			<CommentsContext :id="1160" :context="'Capítulo VI, Art. 50, § 1º'">
				<p><b>§ 1º.</b> A lei apontada no “caput” estabelecerá a relação do PIU-VL com o PIU-ACP.</p>
			</CommentsContext>
			<CommentsContext :id="1161" :context="'Capítulo VI, Art. 50, § 2º'">
				<p><b>§ 2º.</b> Enquanto não aprovada a lei prevista no “caput”, aplica-se ao território do PIU-VL a regulação urbanística prevista para as Áreas de Transformação, Áreas de Qualificação e Áreas de Preservação previstas nesta lei, nos termos do Quadro 3A e Mapa II.</p>
			</CommentsContext>
			<CommentsContext :id="1162" :context="'Capítulo VI, Art. 50, § 3º'">
				<p><b>§ 3º.</b> Na hipótese de não aprovação da lei prevista no “caput”, os melhoramentos viários específicos previstos para o território do PIU-VL, constantes no Quadro 1B, serão incorporadas ao Programa de Intervenções da AIU-ACP em caráter Complementar, devendo os recursos oriundos da comercialização do potencial construtivo adicional em seu território ser destinados à conta segregada do FUNDURB da AIU-ACP.</p>
			</CommentsContext>
		</section>
		<section>
			<h2 class="titulo" indent="1">CAPÍTULO VII</h2>
			<h2 class="subtitulo">DISPOSIÇÕES FINAIS E TRANSITÓRIAS</h2>
			<CommentsContext :id="1163" :context="'Capítulo VII, Art. 51, Caput'">
				<p><b>Art. 51.</b> Ficam integralmente revigorados os alinhamentos viários aprovados pelas seguintes leis:</p>
				<ol class="romanos">
					<li>Decreto-Lei nº 142, de 18 de fevereiro de 1942, conforme indicado nas Plantas nº 26.995/11, 26.995/12 e 26.995/13 integrantes desta lei;</li>
					<li>Lei nº 5.891, de 4 de dezembro de 1961, conforme indicado nas Plantas nº 26.995/10 e 26.995/12 integrantes desta lei; </li>
					<li>Lei nº 6.015, de 30 de maio de 1962, conforme indicado nas Plantas nº 26.995/34 e 26.995/35 integrantes desta lei;</li>
					<li>Lei nº 6.071, de 12 de outubro de 1962, conforme indicado nas Plantas nº 26.995/25, 26.995/26, 26.995/27, 26.995/28, 26.995/29, 26.995/30, 26.995/31, 26.995/32, 26.995/33 e 26.995/34 integrantes desta lei;</li>
					<li>Lei nº 8.219, de 14 de março de 1975, conforme indicado na Planta nº 26.995/24 integrante desta lei;</li>
					<li>Lei nº 8.286, de 12 de setembro de 1975, conforme indicado nas Plantas nº 26.995/13, 26.995/14, 26.995/15 e 26.995/16 integrantes desta lei;</li>
					<li>Lei nº 8.404 de 16 de junho de 1976, conforme indicado nas Plantas nº 26.995/06 e 26.995/07 integrantes desta lei;</li>
					<li>Lei nº 8.428 de 26 de agosto de 1976, conforme indicado nas Plantas nº 26.995/17 e 26.995/18 integrantes desta lei;</li>
					<li>Lei nº 8.998, de 26 de novembro de 1979, indicados na Planta nº 26.995/06 integrante desta lei; </li>
					<li>Lei nº 9.242, de 28 de abril de 1981, conforme indicado nas Plantas nº 26.995/16, 26.995/17, 26.995/18 e 26.995/19 integrantes desta lei.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="1164" :context="'Capítulo VII, Art. 51, Parágrafo único'">
				<p><b>Parágrafo único.</b> Aos alinhamentos viários indicados no “caput” não se aplica o parágrafo único do art. 103 da Lei nº 16.642, de 9 de maio de 2017, bem como o disposto no art. 97 do Decreto nº 57.776, de 07 de julho de 2017.</p>
			</CommentsContext>
			<CommentsContext :id="1165" :context="'Capítulo VII, Art. 52, Caput'">
				<p><b>Art. 52.</b> Ficam parcialmente revigorados, nos trechos indicados, os alinhamentos viários aprovados pelas leis abaixo relacionadas, na seguinte conformidade:</p>
				<ol class="romanos">
					<li>Lei nº 5.266, de 4 de julho de 1957, no trecho entre a Av. Imp. Leopoldina e a R. Carlos Weber indicado na Planta nº 26.995/07 integrante desta lei;</li>
					<li>Lei nº 5.855, de 7 de novembro de 1961, no trecho indicado na Planta nº 26.995/07 integrante desta lei;</li>
					<li>Inciso II do art. 1º da Lei nº 7.765, de 24 de agosto de 1972, indicado na Planta nº 26.995/23 integrante desta lei;</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="1166" :context="'Capítulo VII, Art. 52, Parágrafo único'">
				<p><b>Parágrafo único.</b> Aos alinhamentos viários indicados no “caput” não se aplica o parágrafo único do art. 103 da Lei nº 16.642, de 9 de maio de 2017, bem como o disposto no art. 97 do Decreto nº 57.776, de 07 de julho de 2017.</p>
			</CommentsContext>
			<CommentsContext :id="1167" :context="'Capítulo VII, Art. 53'">
				<p><b>Art. 53.</b> Ficam parcialmente revogados, nos trechos indicados, os alinhamentos viários aprovados pelas leis abaixo relacionadas, na seguinte conformidade:</p>
				<ol class="romanos">
					<li>Lei nº 5.266, de 4 de julho de 1957, no trecho entre a R. Carlos Weber e a R. Passo da Pátria indicado na Planta nº 26.995/07 integrante desta lei;</li>
					<li>Lei nº 5.855, de 7 de novembro de 1961, no trecho entre a Av. Eng. Roberto Zuccolo e a R. Major Paladino indicado na Planta nº 26.995/02 integrante desta lei;</li>
					<li>Lei nº 16.541, de 8 de setembro de 2016, no trecho entre a R. Major Paladino e a Av. Ernesto Igel indicado nas Plantas nº 26.995/02 e 03 integrantes desta lei, no trecho entre a R. Xavier Kraus e a R. Hayden indicado na Planta 26.995/07 integrante desta lei e no trecho entre a Rua Dr. Avelino Chaves e a Rua Blumenau indicado na Planta nº 26.995/10 integrante desta Lei.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="1168" :context="'Capítulo VII, Art. 54, Caput'">
				<p><b>Art. 54.</b> Esta lei entrará em vigor na data de sua publicação, revogadas as Leis:</p>
				<ol class="romanos">
					<li>Lei nº 7.792, de 29 de setembro de 1972;</li>
					<li>Lei nº 15.160 de 17 de Maio de 2010.</li>
				</ol>
			</CommentsContext>
			<CommentsContext :id="1169" :context="'Capítulo VII, Art. 54, § 1º'">
				<p><b>§ 1º.</b> A presente lei será revisada 10 (dez) anos após sua publicação.</p>
			</CommentsContext>
			<CommentsContext :id="1170" :context="'Capítulo VII, Art. 54, § 2º'">
				<p><b>§ 2º.</b> A presente lei cumpre o disposto no art. 188 da Lei n. 16.050/2014 – PDE.</p>
			</CommentsContext>
		</section>
		<section>
			<h2 class="titulo" indent="1">Anexos</h2>
			<h3>Mapas</h3>
			<ul class="links">
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_I_Perimetro-da-AIU-ACP.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa I: Perímetro da AIU-ACP</div>
						<span>2,37 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_II_Parametros-urbanisticos.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa II: Parâmetros urbanísticos</div>
						<span>2,39 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_III_Assentamentos-precarios-e-ZEIS.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa III: Assentamentos precários e ZEIS</div>
						<span>2,66 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_IV_Compartimentos-ambientais-e-areas-verdes.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa IV: Compartimentos ambientais e áreas verdes</div>
						<span>3,99 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_V_Plano-de-melhoramentos-viarios.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa V: Plano de melhoramentos viários</div>
						<span>2,3 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_VI_Programa-de-intervencoes.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa VI: Programa de intervenções</div>
						<span>2,5 Mb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/mapas/Mapa_VII_Perimetros-Especiai-Projetos-Estratégicos-AEL-e-ZOE.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Mapa VII: Perímetros Especiais</div>
						<span>3,84 Mb</span>
					</a>
				</li>
			</ul>
			<CommentsOption v-if="estaConsulta.ativo == 1" :options="[
				{ id: 201, context: 'Mapa I: Perímetro da AIU-ACP' },
				{ id: 202, context: 'Mapa II: Parâmetros urbanísticos' },
				{ id: 203, context: 'Mapa III: Assentamentos precários e ZEIS' },
				{ id: 204, context: 'Mapa IV: Compartimentos ambientais e áreas verdes' },
				{ id: 205, context: 'Mapa V: Plano de melhoramentos viários' },
				{ id: 206, context: 'Mapa VI: Programa de intervenções' },
				{ id: 207, context: 'Mapa VII: Perímetros Especiais' }
			]"></CommentsOption>
			<h3>Quadros</h3>
			<ul class="links">
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-1A.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 1A: Eixos estratégicos</div>
						<span>102 Kb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-1B.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 1B: Melhoramentos viários</div>
						<span>113 Kb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-1C.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 1C: Áreas públicas destinadas para áreas verdes</div>
						<span>114 Kb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-2A.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 2A: Projetos estratégicos e áreas de estruturação local</div>
						<span>118 Kb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-2B.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 2B: Projetos estratégicos - Percentuais de destinação de área pública</div>
						<span>108 Kb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-3A.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 3A: Fatores de planejamento, parâmetros de ocupação exceto quota ambiental</div>
						<span>109 Kb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-3B.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 3B: Quota ambiental: pontuação mínima, taxa de permeabilidade mínima e fatores de ponderação segundo compartimento ambiental</div>
						<span>114 Kb</span>
					</a>
				</li>
				<li>
					<a :href="src('arquivos/minuta-arco-pinheiros/anexos/quadros/QUADRO-4.pdf')">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>Quadro 4: Programa de intervenções</div>
						<span>127 Kb</span>
					</a>
				</li>
			</ul>
			<CommentsOption v-if="estaConsulta.ativo == 1" :options="[
				{ id: 208, context: 'Quadro 1A: Eixos estratégicos' },
				{ id: 209, context: 'Quadro 1B: Melhoramentos viários' },
				{ id: 210, context: 'Quadro 1C: Áreas públicas destinadas para áreas verdes' },
				{ id: 211, context: 'Quadro 2A: Projetos estratégicos e áreas de estruturação local' },
				{ id: 212, context: 'Quadro 2B: Projetos estratégicos - Percentuais de destinação de área...' },
				{ id: 213, context: 'Quadro 3A: Fatores de planejamento, parâmetros de ocupação exceto...' },
				{ id: 214, context: 'Quadro 3B: Quota ambiental: pontuação mínima, taxa de permeabilidade...' },
				{ id: 215, context: 'Quadro 4: Programa de intervenções' }				
			]"></CommentsOption>
		</section>

		<section>
				<h3 class="titulo" indent="1">Ficha técnica</h3>
				<p><b>SP Urbanismo - São Paulo Urbanismo</b></p>
				<p><b>José Armênio de Brito Cruz</b><br>
				Presidente</p>
				<p><b>Leonardo Amaral Castro</b><br>
				Diretor de Desenvolvimento</p>
				<p><b>Denise Lopes de Souza</b><br>
				Diretora de Gestão de Operações Urbanas</p>
				<p><b>Marcelo Fonseca Ignatios</b><br>
				Superintendente de Estruturação de Projetos</p>

				<p><b>Modelagem urbanística</b><br>
				Ana Claudia Rocha Bonfim<br>
				Anna Carvalho de Moraes Barros<br>
				Daniela Tunes Zilio<br>
				Eduardo Tavares de Carvalho<br>
				Laísa Bócoli Chamme<br>
				Marlon Rubio Longo<br>
				Rafael Giorgi Costa<br>
				Sônia da Silva Gonçalves<br>
				Pedro Henrique Aragão Sena (estágio)</p>

				<p><b>Estudos ambientais</b><br>
				Waldir Macho de La Rubia<br>
				Luciana Loureiro<br>

				<p><b>Estimativa de custos</b><br>
				Maria Cristina Fernandes</p>

				<p><b>Modelagem jurídica</b><br>
				José Antônio Apparecido Junior<br>
				Marília Formoso Camargo (estágio)</p>

				<p><b>Modelagem econômica</b><br>
				Allan Martino Matos<br>
				Bruno Martins Hermann<br>
				Fernando Henrique Gasperini<br>
				Gabriel Vasquez Rodriguez<br>
				Marcelo Baliú Fiamenghi (estágio)</p>

				<p><b>Design Gráfico</b><br>
				Thomas Len Yuba<br>
				Davi Masayuki Hosogiri (estágio)</p>

				<p><b>Participação Social</b><br>
				André Ramos<br>
				Francila Natalia dos Santos<br>
				Maria Fernanda Willy Fabro<br>
				Patricia Saran<br>
				Paulo de Moraes Junior<br>
				Tais Sertorio Milanez<br></p>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{ id:1000, context:'Comentarios' }"></Comments>
		</section>

	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Apoio from '@/components/Apoio'
import CommentsLoader from '@/components/CommentsLoader'
import CommentsContext from '@/components/CommentsContext'
import CommentsOption from '@/components/CommentsOption'
import Comments from '@/components/Comments'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'MinutaArcoPinheiros',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			social_assets: { // https://www.urlencoder.org/
				whatsapp: 'https://api.whatsapp.com/send?text=Participe%20da%20consulta%20p%C3%BAblica%20do%20Projeto%20de%20Lei%20do%20PIU%20Arco%20Pinheiros%21%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fminuta-arco-pinheiros',
				facebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fminuta-arco-pinheiros',
				twitter: 'https://twitter.com/intent/tweet?text=Participe%20da%20consulta%20p%C3%BAblica%20do%20Projeto%20de%20Lei%20do%20PIU%20Arco%20Pinheiros%21%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br%2Fminuta-arco-pinheiros'
			}
		}
	},
	components: {
		PageTop,
		Indice,
		Apoio,
		CommentsLoader,
		CommentsContext,
		CommentsOption,
		Comments
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

</style>
