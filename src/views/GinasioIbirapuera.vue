<template>
	<div class="GinasioIbirapuera" ref="conteudoConsulta">
		<page-top background_image_src="arquivos/capas/ginasio-ibirapuera_122w.jpg" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>PIU Ginásio do Ibirapuera</div></template>
			<template slot="subtitulo"><div>1ª Consulta Pública – Elementos prévios</div></template>
		</page-top>
		<indice :titulos="titulosLimpo" />
		<apoio>
			<template slot="item2">
				<li>
					<input type="radio" name="tabs" id="item2">
					<label for="item2">Arquivos e notas</label>
					<div class="conteudoTab">
						<h5 style="margin: 0 0;">Arquivos</h5>
						<ul class="links" style="margin: 0 0;">
							<li>
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_diagnostico.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Diagnóstico Socioterritorial e Ambiental</div>
									<span>7 Mb</span>
								</a>
							</li>
							<li>
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_projeto-de-interesse-publico.pdf')" target="_blank">
									<i class="icon-pdf icon"><span>pdf</span></i>
									<div>Programa de Interesse Público</div>
									<span>760 Kb</span>
								</a>
							</li>
							<li class="compacto__ultimo-item">
								<a :href="src('arquivos/ginasio-ibirapuera/piu-ginasio-ibirapuera.zip')" target="_blank">
									<i class="icon-download icon"><span>pdf</span></i>
									<div>Consulta completa</div>
									<span>7 Mb</span>
								</a>
							</li>
						</ul>
						<h5 style="margin: 1.5rem 0 0;">Notas</h5>
						<h6 style="margin: 0;">Diagnóstico Socioterritorial e Ambiental</h6>
						<ol class="notas" style="margin: 0 0; font-size:0.90rem">
							<li>Do referido Decreto-lei 13.291, de 31 de março de 1943, constou autorização para a Fazenda do Estado transferir ao Município a “área sita no Ibirapuera remanescente da antiga invernada dos Bombeiros, limitada pela Rua Manoel da Nóbrega, pelo terreno anexo ao Quartel do Esquadrão da Cavalaria (terreno este definido pelo decreto-lei 13.009, de 24 de outubro de 1942), Rua Abílio Soares, primeiro córrego que atravessa esta rua logo abaixo do terreno anterior, e autoestrada até o entroncamento com a Rua Manoel da Nobrega, ponto onde fecha o perímetro”.</li>
							<li>Art. 2º.§1º “ Da área referida na alínea III, supra, será reservada para a instalação escolar esportiva da Diretoria de Esportes, uma fração, sita na sua extremidade superior, medindo 105.340m2 (cento e cinco mi trezentos e quarenta metros quadrados), podendo o Estado construir e fazer funcionar na mesma a citada instalação, sem outra restrição que a de manter o aspecto do parque e apresentar os seus projetos à aprovação arquitetônica e paisagística da Prefeitura para harmonização do Complexo.” §2º Não poderá ser dado aos imóveis referidos neste artigo destino diverso dos ora prescritos, devendo a Prefeitura Municipal, desde logo, promover os trabalhos necessários ao aproveitamento deles, sendo que, da mesma forma a fração reservada à Diretoria de Esportes, reverterá à Prefeitura Municipal, incorporando-se ao parque, caso não seja aproveitada no fim previsto.”</li>
							<li>Certidão expedida pelo Departamento patrimonial da Procuradoria Geral do Município em 14/04/2003.</li>
							<li>Fonte: Caderno de Proposta dos Planos Regionais das Subprefeituras – PMSP. Mapa Digital da Cidade, 2004.</li>
							<li>Observa Sampa: http://observasampa.prefeitura.sp.gov.br. Acesso em 10 outubro.</li>
							<li>Fonte: IBGE – Censo Demográfico, 2010.</li>
							<li>https://ces.ibge.gov.br/base-de-dados/metadados/mte/relacao-anual-de-informacoes-sociais-rais.html</li>
							<li>“(…) Complexo de atividades econômicas baseadas no conhecimento com uma dimensão de desenvolvimento e ligações transversais a níveis macro e micro à economia global.” (UNCTAD, 2010, p.10, traduzido pelo autor)</li>
							<li>https://www.br.undp.org>Acesso em outubro de 2019.</li>
							<li>A Pesquisa do Mercado Imobiliário (PMI) é realizada mensalmente pelo departamento de economia e estatística do Secovi-SP, com o objetivo de analisar o desempenho de vendas de imóveis residenciais novos da Região Metropolitana de São Paulo. http://www.geosecovi.com.br/ Acesso em: 10 outubro de 2019.</li>
							<li>Todos os bens públicos e privados, de utilidade pública, destinados à prestação de serviços necessários ao funcionamento da cidade, implantados mediante autorização do poder público, em espaços públicos e privados. </li>
							<li>Dados extraídos da minuta do Plano Diretor do Ibirapuera. Disponível em: https://participe.gestaourbana.prefeitura.sp.gov.br/pdp-ibirapuera. Acesso em: 05 outubro 2009</li>
							<li>Diagnóstico e Diretrizes Gerais de Mobilidade”, Relatório Técnico elaborado por TTC.</li>
							<li>O córrego Sapateiro faz parte do Programa Córrego Limpo, realizado em parceria entre a Prefeitura e o Governo do Estado.</li>
							<li>Consultas junto à PROJ-4/SIURB-PMSP e Emplasa.</li>
							<li>“(…) dos processos de preenchimento sedimentar dessa Bacia (Sedimentar de São Paulo) é representada por depósitos relacionados a antigas planícies aluviais de rios entrelaçados.”, (GEO Cidade de São Paulo: Panorama do Meio Ambiente Urbano, 2004).</li>
							<li>A planície sedimentar fluvial caracteriza superfícies pouco acidentadas e/ ou normalmente planas, formada pelo acúmulo de sedimentos provenientes de áreas mais altas que a rodeiam. A planície sedimentar fluvial possui capacidade de absorção baixa, pois o lençol freático se encontra elevado e o solo se satura rapidamente. (TUCCI E CORDEIRO, 2004).</li>
							<li>Caderno de Proposta dos Planos Regionais das Subprefeituras – Quadro Analítico Vila Mariana. Disponível em: https://gestaourbana.prefeitura.sp.gov.br/. Acesso em: 10 outubro  de 2019.</li>
							<li>A vegetação arbórea dos bairros-jardim é considerada Patrimônio Ambiental e é protegida pelo Decreto Estadual 30.443/89</li>
							<li>Este indicador é obtido a partir da somatória das áreas verdes de propriedade pública, criadas e geridas pelo Poder Público Municipal e Estadual. Estão incluídos neste indicador todos os parques públicos urbanos municipais, parques estaduais urbanos, praças e todas as Unidades de Conservação de Proteção Integral definidas pelo Sistema Nacional de Unidades de Conservação – SNUC, efetivamente implantadas na cidade.</li>
							<li>Grupo com no mínimo 15 árvores de espécies nativas ou exóticas, que vivem em determinada área, tendo área mínima de 500m² de projeção contínua de copa.</li>
							<li>Em 2015, o jornal britânico The Guardian fez um ranking com os “10 melhores parques” urbanos do mundo, no qual o Parque do Ibirapuera aparece entre os listados.http://www.saopauloinfoco.com.br/ibirapuera-esta-entre-os-10-melhores-parques-do-mundo. Acesso em novembro 2019.</li>
							<li>https://parqueibirapuera.org. Acesso em: 23 outubro de 2019.</li>
							<li>Dados sobre o processo de concessão do parque https://www.ibirapueraparque.com.br. Acesso em 24 outubro de 2019.</li>
							<li>Manual disponível:https://www.prefeitura.sp.gov.br/cidade/secretarias/meio_ambiente/publicacoes_svma/index.php?p=188452. Acessado em outubro, 2019.</li>
						</ol>

						<h6 style="margin: 1.25rem 0 0.75rem 0;">Projeto de Intervenção Urbana</h6>
						<ol class="notas" style="margin: 0 0; font-size:0.90rem">
							<li>A condição Humana”, Hannah Arendt (1958).</li>
							<li>Através do instrumento PMI – Procedimento de Manifestação de Interesse, lançado pelo Edital nº. 00005/2014.</li>
						</ol>
					</div>
				</li>
			</template>
		</apoio>

		<section class="horizontal">
			<div>
				<div>
					<h2 class="titulo" indent="1">Apresentação</h2>
					<p>O Complexo Desportivo Constâncio Vaz Guimarães, conhecido como “Complexo Ginásio do Ibirapuera”, é um equipamento público de grande porte gerido pelo Governo do Estado de São Paulo (GESP) que contém características urbanísticas excepcionais, tendo sido assim classificado como uma ZOE – Zona de Ocupação Especial pela Lei de Parcelamento, Uso e Ocupação do Solo – LPUOS (Lei nº 16.402/2016).</p>

					<p>As Zonas Especiais são porções do território com diferentes características ou com destinação específica que requerem normas próprias de uso e ocupação do solo, podendo estar situadas em qualquer macrozona do Município, e visam a promoção de políticas públicas setoriais, ou ainda, o estímulo ao desenvolvimento de áreas vocacionadas à diversas atividades econômicas, nos termos do Art. 39 do PDE – Plano Diretor Estratégico ( Lei 16.050/14).</p>

					<p>Conforme disposto no §1º do Art. 15 da Lei 16.402/2016, as áreas classificadas como ZOE – Zona de Ocupação Especial devem necessariamente ser objeto de PIU – Projetos de Intervenção Urbana, contemplando a definição de parâmetros específicos de parcelamento, uso e ocupação do solo adequados às suas especificidades.</p>

					<p>Este complexo desportivo, tão conhecido pela população paulistana e palco de memoráveis eventos, passa atualmente, segundo informa o Governo do Estado de São Paulo por um processo de deterioração face à obsolescência de suas instalações e a progressiva redução das atividades esportivas e programas de cunho cultural, esportivo e de lazer. Com a perspectiva de sua transformação em um moderno Centro Esportivo e Cultural para a cidade, o Projeto de Intervenção Urbana do Complexo Desportivo Constâncio Vaz Guimarães - PIU Ginásio Ibirapuera, a ser desenvolvido, buscará também uma maior integração do conjunto com seu contexto urbano, identificando novas oportunidades de requalificação urbana.</p>
				</div>
			</div>
			<div class="capitulos">
				<h2 class="titulos">Arquivos</h2>
				<p>
					<ul class="links compacto">
						<li>
							<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_diagnostico.pdf')" target="_blank">
								<i class="icon-pdf icon"><span>pdf</span></i>
								<div>Diagnóstico Socioterritorial e Ambiental</div>
								<span>7 Mb</span>
							</a>
						</li>
						<li>
							<a :href="src('arquivos/ginasio-ibirapuera/piu-ibirapuera_projeto-de-interesse-publico.pdf')" target="_blank">
								<i class="icon-pdf icon"><span>pdf</span></i>
								<div>Programa de Interesse Público</div>
								<span>760 Kb</span>
							</a>
						</li>
						<li class="compacto__ultimo-item">
							<a :href="src('arquivos/ginasio-ibirapuera/piu-ginasio-ibirapuera.zip')" target="_blank">
								<i class="icon-download icon"><span>pdf</span></i>
								<div>Consulta completa</div>
								<span>7 Mb</span>
							</a>
						</li>
					</ul>
					<comments-option v-if="consultaAtiva" :options="[
							{ id: 1, context: 'Comentários gerais' },
							{ id: 2, context: 'Diagnóstico socio territorial' },
							{ id: 3, context: 'Diagnóstico ambiental' },
							{ id: 4, context: 'Programa de Interesse público' }
						]"
						:alwaysOpen="true">
					</comments-option>
				</p>
			</div>
		</section>

			<section>
				<h3 class="titulo" indent="1">Diagnóstico Socio Territorial</h3>
				<comments v-if="consultaAtiva" :attr="{id: 2, context:'Diagnóstico socio territorial'}" />

				<h4>Histórico</h4>
				<p>A várzea do Ibirapuera, onde se insere o Conjunto Desportivo Constâncio Vaz, era uma área charcosa e alagadiça em bacia de fundo de vale formada pelos córregos Sapateiro, Caguaçú e Uberaba, ocupada por pastos e favelas, a qual foi incorporada ao patrimônio municipal em 1916. Esses terrenos devolutos situados na Várzea do Ibirapuera se constituíram em parque público pelo Decreto Estadual nº 2.669 de 17/05/1916.</p>
				<imagem :dados="{
					caption: 'Mapa 01: Planta da Cidade de São Paulo, 1924',
					tipo: 'default',
					url: src('arquivos/ginasio-ibirapuera/img/image2.jpg'),
					fonte: 'SMDU/ SEMPLA. Elaboração: LEVISKY, 2020'
				}" />
				<p>No bojo do IV Centenário da Cidade de São Paulo, momento em que a cidade ensejava demonstrar traços de modernização ao mundo, a região do Ibirapuera foi escolhida para aportar os projetos mais ambiciosos, envolvendo a urbanização da área, como também a construção de diversos equipamentos.</p>
				<imagem :dados="{
					caption: 'Imagem 01: Primeiro projeto para o Parque do Ibirapuera de 1950',
					tipo: 'default',
					url: src('arquivos/ginasio-ibirapuera/img/image3.jpg'),
					fonte: 'Divisão do Arquivo Histórico Municipal.'
				}" />

				<p>Nesse contexto, deu-se início à construção do Complexo Constâncio Vaz Guimarães, cujo nome homenageia um dos mais respeitados homens do esporte nacional, advogado, decatleta e profundo conhecedor do atletismo, que, entre outros feitos, foi nomeado presidente da delegação Olímpica nos jogos de Berlim, em 1936.</p>

				<imagem :dados="{
					caption: 'Imagem 02: Vista aérea do Ibirapuera – Autor: Edilson Pacheco Aquino',
					tipo: 'default',
					url: src('arquivos/ginasio-ibirapuera/img/imagem1.jpg'),
					fonte: 'http://www.acervosdacidade.prefeitura.sp.gov.br/-acessado-em-13/09/2019'
				}" />

				<p>Em 1952, o projeto do Ginásio Geraldo José de Almeida, popularmente conhecido como Ginásio do Ibirapuera – concebido com base em padrões internacionais – foi elaborado pelo arquiteto Ícaro de Castro Melo e antecedeu a construção efetiva do Parque do Ibirapuera, vindo a ser concluído em 1957, juntamente com suas quadras anexas.  </p>

				<p>Originalmente, o Ginásio do Ibirapuera possuía capacidade para até 20.000 pessoas, porém, após recente obra de readequação às normas de ergonomia, segurança e acessibilidade (2010-2011), sua capacidade sofreu redução para 11.000 pessoas. </p>

				<p>Posteriormente, em 1958, a pedido do Centro Acadêmico Ruy Barbosa, o governador Jânio Quadros ordenou que as quadras de vôlei localizadas entre a piscina e o ginásio fossem cobertas, com o intuito de abrigar as aulas do curso de Educação Física da Universidade de São Paulo.</p>

				<imagem :dados="{
					caption: 'Imagem 03: Término da construção da piscina – Autor: José Moscardi',
					tipo: 'default',
					url: src('arquivos/ginasio-ibirapuera/img/imagem2.jpg'),
					fonte: 'https://www.arquivo.arq.br/ginsio-do-ibirapuera-acessado-em-13/09/2019'
				}" />

				<p>Em 1968, enquanto as obras do velódromo estavam em andamento, foi concluído o segundo bloco – Complexo Aquático Caio Pompeu. Neste mesmo ano, realizou-se a inauguração oficial do Complexo Desportivo Constâncio Vaz Guimarães.</p>

				<p>Apenas em 1974, o terceiro bloco que compreendia o estádio Ícaro de Castro Mello – também projetado pelo arquiteto Ícaro de Castro Mello foi concluído. Por fim, o último bloco a ser edificado foi o Ginásio Mauro Pinheiro, finalizado em 1982. </p>

				<p>Ao longo dos anos o Complexo ganhou notoriedade no campo esportivo, tornando-se referência no treinamento de confederações e atletas olímpicos, além de ter sediado variados eventos esportivos e culturais desde sua inauguração.</p>
				<imagem :dados="{
					caption: 'Imagem 04: Construção do Ginásio do Ibirapuera – Autor: Hans Gunter Flieg ',
					tipo: 'default',
					url: src('arquivos/ginasio-ibirapuera/img/imagem3.jpg'),
					fonte: 'https://www.arquivo.arq.br/ginsio-do-ibirapuera-acessado-em-13/09/2019'
				}" />

				<p>Em 1963, ano em que os jogos Pan-americanos foram sediados na cidade de São Paulo, muitas competições ocorreram no Ginásio do Ibirapuera, a exemplo das competições de basquete, um dos esportes de maior importância do país à época.</p>

				<p>Além dos jogos Pan-americanos, outros grandes eventos foram sediados no local como: o Mundial de Baquete Feminino de 1971, lutas de boxe com Muhammad Ali (1971), final da Liga Mundial Masculina de 1993, Mundial de Vôlei Feminino de 1994, show dos Rolling Stones e Bob Dylan (1998), Mundial de Handebol Feminino de 2011, campeonato de UFC (2013), show de André Rieu (2012), Gilette Federer Tour (2012),  League of Legends (2016), entre outros.</p>

				<p>Atualmente o Complexo vivencia o declínio das atividades relacionadas ao programa esportivo, em grande parte, em razão da insuficiência de investimentos na atualização e modernização das infraestruturas existentes, o que reflete, por fim, em maiores dificuldades na gestão do equipamento.</p>

				<p>Como atividade acessória, o Complexo recepciona atrações diversas, tendo sido palco de grandes shows, campeonatos, eventos educacionais e culturais variados. Vale ressaltar que a alta demanda deste mercado face às restrições e deficiências apresentadas pelas instalações e espaços físicos existentes decorre na exclusão da cidade de São Paulo da escala de programação de diversos eventos e turnês mundiais que visam espaços modernos, que garantam a oferta de equipamentos de tecnologia adequada e níveis de desempenho satisfatórios do ponto de vista termoacústico, da acessibilidade, do desenho universal, da tecnologia da informação, dentre outros, que ofertem flexibilidade e facilidades operacionais e estruturais para a produção de eventos de padrão internacional de diversos tipos e tamanhos. </p>

				<h4>Caracterização e utilização do complexo</h4>
				<h5>Estrutura Fundiária</h5>

				<p>A ZOE Ginásio do Ibirapuera engloba parte da Quadra 138 do Setor Fiscal 036, com área real, aferida através de levantamento perimetral por profissional habilitado, de 91.861,34m².</p>

				<p>Por meio de Escritura de Cessão e Transferência lavrada no 5º Tabelião da Capital em 07/06/1944 no 5º Tabelião da Capital, e objeto da Transcrição nº 35.293 do 1º Registro de Imóveis (RI), o Governo do Estado de São Paulo transferiu ao Município área de 248.240,00m², destacado de área maior de 1.457.711,00m², adquirida do Banco Real de Crédito do Estado de São Paulo em 1905, conforme Transcrição nº 40.140 do 1º RI. Abaixo segue transcrição de Relatório desenvolvido pela Procuradoria Geral do Estado,
				<em>Procuradoria do Patrimônio, Volume II da Pasta Especial “PE 998”.</em></p>

				<blockquote>
					<p>O terreno onde foi implantado Complexo Desportivo Constâncio Vaz Guimarães tem origem na área denominada ‘antiga Invernada dos Bombeiros’, com 1.457.711,00m², adquirida pela Fazenda do Estado do Banco de Crédito Real do Estado de São Paulo em 07 de janeiro de 1905 pelas notas do 6º Tabelionato de Notas da Capital e transcrita sob o nº 40.410 pelo 1º Cartório de Registro de Imóveis de São Paulo.</p>
					<p class="fonte">PE 998, vol. II, p. 28, certidões às fls.18 e 204/205</p>
				</blockquote>

				<blockquote>
					<p>Autorizado pelo Decreto-lei 13.291/43, o Estado cedeu e transferiu ao Município o domínio de uma parte da área maior acima mencionada, com 256.650,00m²</p>
					<p class="fonte">Escritura de cessão e transferência de 07 de junho de 1944, lavrada nas notas do 5º Tabelionato da Capital e transcrita sob o nº 35.293, no 1º Oficial de Registro de Imóveis da Capital, cf<sup>1</sup>. fls. 288/293, vol II PE 998).</p>
				</blockquote>

				<blockquote>
					<p>No artigo 2º, do mesmo Decreto-lei consta reserva de área para ‘instalação escolar e esportiva da Diretoria de Esportes’, com 105.304m²</p>
					<p class="fonte">PE 998, vol. II, p. 191<sup>2</sup></p>
				</blockquote>

				<p>A Lei 17.099, de 27 de junho de 2019, considerou, para o Complexo Constâncio Vaz Guimarães, a área indicada no ato normativo e reproduzida na escritura de alienação lavrada com o Município. </p>

				<p>Sabe-se, no entanto, que foram promovidas supressões de área em razão da implantação de viário pelo Município, em extensão de 8.634,00m². Ao que tudo indica, também teria havido ocupação de 2.363,00m² pelo Exército. </p>

				<p>Essas intervenções ensejaram redução da área originalmente reservada ao Complexo Constâncio Vaz Guimarães, inferior aos 105.304,00m² que originalmente lhe teriam sido destinados. </p>

				<p>Não há, contudo, descrição perimétrica da área originalmente destinada, sendo que da porção atualmente ocupada consta o memorial descritivo copiado dos autos do processo PGE 28579/67” (FLS. 306/307, vol II, PE 998).</p>

				<p>Chancelando este raciocínio, foi expedido em 14 de abril de 2003 pelo Departamento Patrimonial da Procuradoria Geral do Município Certidão que atesta a reserva de área destinada ao Estado correspondente a 91.870,00m², parte de área maior de 248.240,00m²</p>

				<imagem :dados="{
					caption: 'Imagem 05: Estudo sobre o desmembramento territorial da antiga invernada para os animais do corpo dos bombeiros',
					tipo: 'default',
					url: src('arquivos/ginasio-ibirapuera/img/imagem6.jpg'),
					fonte: 'Relatório desenvolvido pela Procuradoria Geral do Estado, Procuradoria do Patrimônio, Volume II da Pasta Especial “PE 998”'
				}" />

				<ol class="notas">
					<li>Do referido Decreto-lei 13.291, de 31 de março de 1943, constou autorização para a Fazenda do Estado transferir ao Município a “área sita no Ibirapuera remanescente da antiga invernada dos Bombeiros, limitada pela Rua Manoel da Nóbrega, pelo terreno anexo ao Quartel do Esquadrão da Cavalaria (terreno este definido pelo decreto-lei 13.009, de 24 de outubro de 1942), Rua Abílio Soares, primeiro córrego que atravessa esta rua logo abaixo do terreno anterior, e autoestrada até o entroncamento com a Rua Manoel da Nobrega, ponto onde fecha o perímetro”.</li>
					<li>Art. 2º.§1º “ Da área referida na alínea III, supra, será reservada para a instalação escolar esportiva da Diretoria de Esportes, uma fração, sita na sua extremidade superior, medindo 105.340m2 (cento e cinco mi trezentos e quarenta metros quadrados), podendo o Estado construir e fazer funcionar na mesma a citada instalação, sem outra restrição que a de manter o aspecto do parque e apresentar os seus projetos à aprovação arquitetônica e paisagística da Prefeitura para harmonização do Complexo.” §2º Não poderá ser dado aos imóveis referidos neste artigo destino diverso dos ora prescritos, devendo a Prefeitura Municipal, desde logo, promover os trabalhos necessários ao aproveitamento deles, sendo que, da mesma forma a fração reservada à Diretoria de Esportes, reverterá à Prefeitura Municipal, incorporando-se ao parque, caso não seja aproveitada no fim previsto.”</li>
				</ol>

				<h4>Ocupação Atual</h4>
				<p>A ZOE Ginásio do Ibirapuera, igualmente compreendida pela área do Complexo Desportivo Constâncio Vaz Guimarães, é integralmente constituída por lote institucional do Município de São Paulo, cedido ao Estado para implantação de equipamento esportivo. </p>
				<p>A ZOE Ginásio do Ibirapuera engloba parte da Quadra 138 do Setor Fiscal 036, com área real de 91.861,34m² (aferida através de levantamento perimetral), ocupada pelo Complexo Constâncio Vaz Guimarães, composto por: dois ginásios poliesportivos – Geraldo José de Almeida e Mauro Pinheiro, um estádio – Ícaro de Castro Melo, um Com-plexo aquático – Caio Pompeu de Toledo e um Palácio do Judô.</p>
				<p>Os parâmetros de ocupação atuais estão sintetizados a seguir:</p>
				<ul>
					<li>Taxa de Ocupação aproximada: 28%.</li>
					<li>Gabarito aproximado: 42,0m.</li>
					<li>Área construída total: 44.509,00m² (CDCI)</li>
				</ul>

				<imagem :dados="{
					caption: 'Mapa 02: Complexo Desportivo Constâncio Vaz Guimarães',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/mapa7.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />
				<p>A estrutura do Complexo compreende um alojamento para aproximadamente 340 pessoas, 03 auditórios para 300 pessoas, 03 salas de condicionamento físico, sala de arco e flecha, 01 pequena pista de corrida, parque para recreação, 03 quadras oficiais de tênis, 02 quadras poliesportivas descobertas e estacionamento para 550 veículos. Nele também funciona o programa olímpico Projeto Centro de Excelência, que, desde sua criação em 1984, atende atletas oriundos de todo Estado em regime de internato e atendimento integral nas modalidades de judô, atletismo, natação e voleibol.</p>

				<p>Diante dessa vasta infraestrutura, é considerado um dos principais equipamentos para a prática de esportes de alto rendimento e atividades culturais da cidade de São Paulo. No entanto, suas instalações sofrem com a falta de atualização tecnológica, o que vem reduzindo progressivamente o número de usuários. </p>

				<p>O Ginásio do Ibirapuera, desde sua inauguração, tem sediado eventos de grande porte, sobretudo jogos esportivos e espetáculos musicais como o Mundial Handebol Feminino (2011), UFC (2013), concerto de André Rieu (2012 e 2014), torneio de tênis Gillete Federer Tour (2012), League of Legends (2016), entre outros. Porém, desde então, tem apresentado algumas carências nas suas instalações. Faltam dispositivos como ar condicionado e telões, por exemplo. </p>
				<p>De acordo com laudo feito pela Avanza Engenharia, cuja finalidade foi avaliar as patologias na estrutura do ginásio, embora o edifício não apresente nenhuma patologia visível em suas estruturas internas (bem conservadas desde a reforma realizada em 2011), suas áreas externas apresentam uma série de problemas como infiltrações de água, trincas, fissuras, entre outros. </p>
				<p>Vale considerar que após a reforma em 2011, o Ginásio do Ibirapuera reduziu drasticamente sua capacidade de público, passando de aproximadamente 20.000 a 10.0000 lugares. </p>
				<p>Diante desse cenário de obsolescência e desuso, o Ginásio tem encontrado dificuldade de se manter no circuito internacional de eventos esportivos e culturais de grande porte. </p>

				<h4>O perímetro de intervenção e contexto urbano | unidades de análise</h4>
				<p>Situada nas proximidades do Parque do Ibirapuera, a área do Complexo Desportivo Constâncio Vaz Guimarães é delimitada pelas Ruas Manoel da Nóbrega, Abílio Soares, Castro de Melo e Av. Marechal Estênio Albuquerque de Lima, na Capital do Estado de São Paulo, encerrando área de 91.870,00m² (PGM-SJ)<sup>3</sup> / 91,861,34m² (R), e trata-se de bem de domínio público municipal, cedido ao Governo do Estado para instalação esportiva, o que foi atendido mediante sua implantação.</p>
				<p>Para fins de entendimento da articulação do Complexo Desportivo com o a cidade, foi considerada a área de abrangência com raio de 1,00 Km a partir do Complexo para avaliação de temas setoriais, visto configurar-se como área de influência a ser avaliada a partir da implantação futura da intervenção.</p>
				<p></p>
				<p></p>

				<imagem :dados="{
					caption: 'Mapa 03: Perímetro de Intervenção e entorno para fins de avaliação',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/mapa1.jpg'),
					fonte: 'Ortofoto 2017 – PMSP – Geosampa. Elaboração: LEVISKY, 2020.'
				}" />

				<imagem :dados="{
					caption: 'Mapa 04: Inserção Metropolitana',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/mapa2.jpg'),
					fonte: 'Google Earth. Elaboração: LEVISKY, 2020'
				}" />

				<ol class="notas" start="3">
					<li>Certidão expedida pelo Departamento patrimonial da Procuradoria Geral do Município em 14/04/2003.</li>
				</ol>

				<h4>Limites Administrativos</h4>
				<p>O Complexo Desportivo Constâncio Vaz Guimarães está localizado no distrito de Moema da subprefeitura de Vila Mariana, a qual integra a Macrorregião Sul 1 do município de São Paulo, juntamente com Jabaquara e Ipiranga. Limita-se ao norte pela a Subprefeitura da Sé, a leste com a Subprefeitura do Ipiranga, ao Sul com a Subprefeitura do Jabaquara e Santo Amaro, e, a Oeste com a Subprefeitura Pinheiros. Parte da área do entorno imediato analisado é contígua ao distrito Jardim Paulista, situado na subprefeitura Pinheiros.</p>

				<imagem :dados="{
					caption: 'Mapa 05: Município de São Paulo – Subprefeituras / Inserção Urbana – Distritos',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/mapa3.jpg'),
					fonte: 'Fonte: Geosampa – MDC, 2004. Elaboração: LEVISKY, 2020'
				}" />

				<h4>Contexto Legal</h4>
				<p>De acordo com o PDE, o Complexo Desportivo Constâncio Vaz Guimarães está inserido no Vetor de Urbanização Sudeste, na Macrozona de Estruturação e Qualificação Urbana, Macroárea de Urbanização Consolidada ─ MUC, caracterizada por um padrão elevado de urbanização, forte saturação viária, elevada concentração de empregos e serviços, e formada pelas zonas exclusivamente residenciais e por bairros predominantemente residenciais que sofreram um forte processo de transformação, verticalização e atração de usos não residenciais, sobretudo serviços e comércio.</p>
				<imagem :dados="{
					caption: 'Mapa 06: Macroáreas',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/mapa4.jpg'),
					fonte: 'Google Earth. Elaboração: LEVISKY, 2020'
				}" />

				<p>Sob a vigência da Lei de Parcelamento, Uso e Ocupação do Solo – LPUOS, Lei nº 16.402/2016, área objeto da Concessão é definida como zona de uso ZOE – Zona de Ocupação Especial, conhecida como porções do território destinadas a abrigar atividades tais como aeroportos, centros de convenção, grandes áreas de lazer, recreação e esportes, que, por suas características únicas, necessitam disciplina especial de uso e ocupação do solo. </p>

				<p>Nos termos do §1º de Artigo 15 do PDE, as zonas de uso ZOE devem ser objeto de PIU – Projetos de Intervenção Urbana, contemplando a definição de parâmetros específicos de parcelamento, uso e ocupação do solo adequados a suas especificidades.</p>

				<imagem :dados="{
					caption: 'Mapa 07: Zoneamento',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/mapa5.jpg'),
					fonte: 'Mapa 01, da Lei nº 16.402/16 (LPUOS)'
				}" />

				<p>De acordo com a Lei Municipal nº 16.402/2016, que normatiza sobre os usos e parcelamento do solo urbano, além da ZOE, o entorno da área em análise (área de abrangência) está enquadrado em sete diferentes zonas de uso, abaixo relacionadas a partir da proximidade fronteiriça com a ZOE em questão:</p>

				<ul>
					<li><u>Zonas de Centralidade – ZC</u> são porções do território localizadas fora dos eixos de estruturação da transformação urbana destinadas à promoção de atividades típicas de áreas centrais ou de subcentros regionais ou de bairros, em que se pretende promover majoritariamente os usos não residenciais, com densidades construtiva e demográfica médias, além de promover a qualificação paisagística dos espaços públicos;</li>
					<li><u>Zonas Mistas – ZM</u> são porções do território em que se pretende promover usos residenciais e não residenciais, com predominância do uso residencial, com densidades construtiva e demográfica baixas e médias.  A principal característica da zona mista é viabilizar a diversificação de usos, sendo uma zona em que se pretende mais a preservação da morfologia urbana existente e acomodação de novos usos, do que a intensa transformação. </li>
					<li><u>Zonas de Eixo de Estruturação da Transformação Urbana – ZEU/ZEUP</u> são porções do território em que pretende promover usos residenciais e não residenciais com densidade demográfica e construtiva altas e promover a qualificação paisagística e dos espaços públicos de modo articulado ao sistema de transporte público coletivo, quando definido por decreto ativador de eixo. </li>
					<li><u>AC – 1</u> clubes esportivos sociais;</li>
					<li><u>Especiais de Proteção Ambiental – ZEPAM</u> são porções do território do Município destinadas à preservação e proteção do patrimônio ambiental.</li>
					<li><u>Zonas Corredores – ZCOR</u>: são os lotes lindeiros às ZER OU ZPR, que fazem frente para vias que exercem estruturação local ou regional, em que se pretende promover usos não residenciais compatíveis com o uso residencial e com a fluidez do tráfego, com densidades demográfica e construtiva baixas.</li>
					<li><u>Zonas Exclusivamente Residenciais – ZER</u>: são porções do território destinadas ao uso exclusivamente residencial de habitações unifamiliares, com densidade demográfica.</li>
				</ul>
				<p>A ZOE Ginásio do Ibirapuera está contida no Perímetro de Ação – Bairro Universitário Cultural (ID 279) do PRS Vila Mariana, que caracteriza a área da seguinte forma: </p>
				<imagem :dados="{
					caption: 'Imagem 06: Bairro Universitário Cultural (ID 279)',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/imagem4.jpg'),
					fonte: 'Plano Regional – Subprefeitura Vila Mariana'
				}" />

				<blockquote>
					<p>Muitos dos equipamentos e os córregos (canalizados), existentes na área, representam a importância histórica da região no desenvolvimento e processo de urbanização da cidade. A canalização dos córregos provocou áreas de enchentes, especialmente no entorno do Parque Ibirapuera. O fluxo de pedestres na região é intenso, porém os equipamentos da área não estão integrados e muitas vias constituem-se como barreiras para pedestres e ciclistas. Além disso, a região possui um potencial turístico-ambiental que pode ser valorizado e explora-do.” </p>
					<p class="fonte">4. Fonte: Caderno de Proposta dos Planos Regionais das Subprefeituras – PMSP. Mapa Digital da Cidade, 2004</p>
				</blockquote>

				<p>São objetivos elencados no Caderno de Propostas dos Planos Regionais da Subprefeitura da Vila Mariana, dentre outros:</p>

				<ul>
					<li>Qualificar os espaços livres públicos;</li>
					<li>Qualificar os parques existentes, resolvendo especialmente as questões de acessibilidade e conectividade e as questões de tratamento das bordas;</li>
					<li>Promover a conservação das paisagens e do patrimônio material e imaterial da região;</li>
				</ul>

				<p>A seguir destacamos as diretrizes deste documento, aplicáveis à ID 279 | Bairro Universitário Cultural que explicitam os temas sinérgicos com o PIU Ginásio do Ibirapuera, incorporado em seu Programa de Interesse Público:</p>

				<ul>
					<li>Integrar o Parque Ibirapuera, as áreas verdes (existentes e a serem implantadas) e os equipamentos culturais, esportivos, de lazer e de educação aos seus respectivos entornos e uns aos outros para promover um circuito e potencializar os uso, realizando estudos e projetos para qualificar as conexões, os trajetos e os acessos para pedestres e ciclistas a partir do transporte público coletivo;</li>
					<li>Melhorar as condições de circulação de pedestres para proporcionar maior segurança, alargando as calçadas, aumentando a permeabilidade, implantando faixas de pedestres, lombo faixas, semáforos com tempos de travessia apropriados e sinalização adequada nos locais de grande fluxo de pedestres, em especial, no entorno das Estações de Metrô e dos equipamentos existentes, quando possível, com implantação de acessibilidade universal;</li>
					<li>Melhorar as condições de circulação de ciclistas para proporcionar trajetos adequados e seguros, complementando o sistema cicloviário para promover a sua conexão com a rede de transporte público coletivo, o Parque Ibirapuera – inclusive verificando a possibilidade de interligação com ciclovias internas do Parque, as áreas verdes (existentes e a serem implantadas) e os equipamentos culturais, esportivos, de lazer e de educação, realizando adaptações necessárias nas vias e instalando bicicletários em locais estratégicos; </li>
					<li>Qualificar e valorizar a área, ampliando e melhorando os espaços de uso público, evidenciando os passeios como áreas de uso comum e resgatando o valor histórico e arquitetônico das edificações importantes, realizando estudos e projetos para promover o aproveitamento das áreas e equipamentos públicos, com atividades de integração da população com o espaço que proporcionem o convívio social e a identidade local.</li>
				</ul>

				<p>As diretrizes e objetivos expressos no PRS Vila Mariana, tais como os objetivos e diretrizes elencados pelo PDE e LPUOS, serão importantes insumos para o respaldo das diretrizes futuras do Projeto de Intervenção Urbana do Complexo Desportivo Constâncio Vaz Guimarães - PIU Ginásio do Ibirapuera que deverá assegurar, em seus princípios, a compatibilidade com a política de desenvolvimento urbano municipal.</p>

				<h4>Marcos Urbanos</h4>

				<p>O Complexo está localizado em região privilegiada, próximo a importantes equipamentos públicos, como o 8º Batalhão de Polícia do Exército e Assembleia Legislativa do Estado de SP, equipamentos educacionais e culturais da cidade, tais como Sesc Vila Mariana, Sesc Paulista, Itaú Cultural, MASP, Centro Cultural de São Paulo, MAC USP, além também de parques urbanos como Parque do Ibirapuera (PQ_VM_01), Parque Trianon (PQ_PI_03) e Parque da Aclimação (PQ_SE_04).</p>

				<imagem :dados="{
					caption: 'Mapa 08: Marcos Urbanos do entorno do Complexo Constâncio Vaz Guimarães',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/mapa6-1.jpg'),
					fonte: 'Fonte: Geosampa, Google. Elaboração: LEVISKY, 2020'
				}" />

				<imagem :dados="{
					caption: 'Mapa 06: Equipamentos esportivos',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/mapa6-2.jpg'),
					fonte: 'Fonte: Estudo de oportunidade e vocações – Natureza Urbana. Elaboração: LEVISKY, 2020'
				}" />

				<p>Ao considerarmos o cenário de espaços de eventos e centros de entretenimento existentes, observa-se que há grande disponibilidade e diversidade de equipamentos capazes de sediar eventos esportivos e culturais de pequeno e grande porte no município de São Paulo</p>

				<p>Apresenta-se um número expressivo de espaços cobertos que suportam menos que 2 mil pessoas, dentre eles, o Cine Jóia, TeatroNet e a Casa Natura Musical. Já com relação aos espaços cobertos com a capacidade de 2 mil a 8 mil pessoas, encontramos o Espaço das Américas, o Credicard Hall, o Tom Brasil, entre outros. Aqueles de maior capacidade, superior a 20 mil pessoas, compreendem estádios, como também a Arena Anhembi, o Autódromo de Interlagos, entre outros, em sua maioria descobertos e com limitações acústicas, e sobretudo, de dispersão do grande público. Especificamente acerca de equipamentos qualificados, como arenas multiuso cobertas, com capacidade de 8 a 20 mil pessoas, são quase inexistentes na cidade, sendo somente a Arena Allianz capaz de atender à esta demanda.</p>

				<p>Espera-se que, a partir da oferta desse tipo de equipamento – uma arena multiuso coberta com a capacidade de comportar 20.000 pessoas e capaz de sediar uma gama diversa de eventos, desde aqueles esportivos até shows e eventos culturais e de lazer, além de outras áreas disponíveis no complexo, possa-se atrair e abranger a população paulistana, compreendendo seus diversos públicos.</p>

				<p>Ademais, nas suas imediações localiza-se um dos mais importantes polos financeiros e comerciais da América Latina, a Avenida Paulista, que abriga diversas organizações, além de redes de hotelaria e gastronomia, entretenimento e cultura.</p>

				<imagem :dados="{
					caption: 'Imagem 07: Diagrama - Espaços de eventos, São Paulo',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/imagem5.jpg'),
					fonte: 'Fonte: Estudo de oportunidade e vocações – Natureza Urbana. Adaptação: LEVISKY, 2020'
				}"
				maxWidth="900px" />

				<h4>Dados Socioeconômicos</h4>
				<p>Conforme dados do Observatório de Indicadores da Cidade de São Paulo , no contexto da Macrorregião Sul 1, composta pelas Subprefeituras Vila Mariana, Jabaquara e Ipiranga, a Subprefeitura de Vila Mariana ocupa área total de 26.985.557,95m² e abriga uma população de 294.946 habitantes (2018), sendo o distrito de Moema, onde se insere a área em estudo, o menos populoso, comportando 88.515 habitantes.</p>

				<div class="grafico">
					<h3 class="grafico__titulo">Gráfico 01: População</h3>
					<h4 class="grafico__subtitulo">Distritos Vila Mariana</h4>
					<ve-pie :data="{
							columns: ['distrito', 'porcentagem' ],
							rows: [
								{ 'distrito': 'Moema - 25%', 'porcentagem': 25 },
								{ 'distrito': 'Saúde - 38%', 'porcentagem': 38 },
								{ 'distrito': 'Vila Mariana - 37%', 'porcentagem': 37 },
							]
						}"
						:colors="[ '#9a9a9a', '#ee947c','#d4d2d3' ]"
					/>
					<p class="grafico__fonte">Fonte: SEADE / Observa Sampa. Elaboração: LEVISKY, 2020</p>
				</div>

				<p>Projeções populacionais disponibilizadas pela Prefeitura<sup>6</sup> apontam que o município de São Paulo alcançará cerca de 12.757.203 habitantes até 2040, ou seja, em 30 anos, have-rá incremento anual médio de 0,44% na população. Especificamente, na subprefeitura Vila Mariana, neste mesmo período, prevê-se um acréscimo anual médio de 0,46% na população, sendo este valor bem próximo ao registrado pelo município. Seus distritos, com exceção de Vila Mariana, apresentam curva ascendente de crescimento no referido período.</p>

				<p>Em contrapartida, a subprefeitura de Pinheiros indica taxa de crescimento populacional relativamente baixa, cerca de 0,11%, sendo que 3 dos seus 4 distritos apresentam projeções negativas. </p>

				<p>Os distritos de Saúde, Itaim Bibi e Moema destacam-se pelas projeções de crescimento populacional mais acentuadas em relação aos demais distritos.</p>

				<div class="grafico wider">
					<h3 class="grafico__titulo">Gráfico 02: População Censitária e Projeções Populacionais</h3>
					<h4 class="grafico__subtitulo">2010 – 2040</h4>
					<ve-line :data="{
							columns: ['date', 'Alto de Pinheiros', 'Itaim Bibi', 'Jardim Paulista', 'Pinheiros', 'Moema', 'Saúde', 'Vila Mariana' ],
							rows: [
								{ 'date': '2010', 'Alto de Pinheiros': 41655,	'Itaim Bibi': 92570, 	'Jardim Paulista': 88692, 'Pinheiros': 65364, 'Moema': 83368, 	'Saúde': 130780, 'Vila Mariana': 130484 },
								{ 'date': '2015', 'Alto de Pinheiros': 41654, 	'Itaim Bibi': 96803, 	'Jardim Paulista': 89576, 'Pinheiros': 65312, 'Moema': 88445, 	'Saúde': 135013, 'Vila Mariana': 131470 },
								{ 'date': '2020', 'Alto de Pinheiros': 40117, 	'Itaim Bibi': 100916, 	'Jardim Paulista': 90189, 'Pinheiros': 65058, 'Moema': 93540, 	'Saúde': 138950, 'Vila Mariana': 132052 },
								{ 'date': '2025', 'Alto de Pinheiros': 38505, 	'Itaim Bibi': 104848, 	'Jardim Paulista': 90500, 'Pinheiros': 64585, 'Moema': 98594, 	'Saúde': 142519, 'Vila Mariana': 132189 },
								{ 'date': '2030', 'Alto de Pinheiros': 36821, 	'Itaim Bibi': 108528, 	'Jardim Paulista': 90474, 'Pinheiros': 63878, 'Moema': 103536, 	'Saúde': 145637, 'Vila Mariana': 131835 },
								{ 'date': '2040', 'Alto de Pinheiros': 33243, 	'Itaim Bibi': 114804, 	'Jardim Paulista': 89273, 'Pinheiros': 61694, 'Moema': 112723, 	'Saúde': 150147, 'Vila Mariana': 129463 },
							]
						}"
					></ve-line>
					<p class="grafico__fonte">Fonte: Prefeitura de São Paulo. Elaboração: LEVISKY, 2020</p>
				</div>

				<p>As densidades populacionais do Complexo e seu entorno são heterogêneas, sendo que, principalmente no sentido noroeste, na medida em que se aproxima da Avenida Paulista, vê-se um maior adensamento populacional, expresso também pela maior verticalidade.  Já, no sentido inverso, nas áreas para além do Complexo Desportivo e onde incidem os bairros-jardim, observa-se um adensamento populacional considerado baixo. Isso ocorre, sobretudo, devido aos parâmetros mais restritivos relativos à transformação e adensamento que ordenam essas áreas. </p>

				<p>A densidade demográfica da subprefeitura Vila Mariana corresponde na média a 130,05 hab/ha. Já no território localizado entre o Complexo e a Av. Paulista ela é alta atingindo a média de 350 hab/ha.</p>

				<imagem :dados="{
					caption: 'Mapa 08: Densidade Demográfica',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/mapa8.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<tabela :dados="{
					titulo: 'Tabela 01: Domicílios, População e Densidade Domiciliar',
					colunas: [
						{ titulo: 'Unidades Territoriais' },
						{ titulo: 'Domicílios' },
						{ titulo: 'População' },
						{ titulo: 'Pess/Dom.' }
					],
					linhas: [
						[
							[{ data: 'Município de São Paulo' }],
							[{ data: '3 574 286' }],
							[{ data: '11 253 503' }],
							[{ data: 3.15 }]],
						[
							[{ data: 'Alto de Pinheiros (Distrito)' }],
							[{ data: '15 408' }],
							[{ data: '43 117' }],
							[{ data: 2.80 }]],
						[
							[{ data: 'Itaim Bibi (Distrito)' }],
							[{ data: '39 230' }],
							[{ data: '92 570' }],
							[{ data: 2.36 }]
						],
						[
							[{ data: 'Jardim Paulista (Distrito)' }],
							[{ data: '39 701' }],
							[{ data: '88 692' }],
							[{ data: 2.23 }]
						],
						[
							[{ data: 'Pinheiros (Distrito)' }],
							[{ data: '27 083' }],
							[{ data: '65 364' }],
							[{ data: 2.41 }]
						],
						[
							[{ data: 'Moema (Distrito)' }],
							[{ data: '34 821' }],
							[{ data: '83 368' }],
							[{ data: 2.39 }]
						],
						[
							[{ data: 'Saúde (Distrito)' }],
							[{ data: '49 278' }],
							[{ data: '130 780' }],
							[{ data: 2.65 }]
						],
						[
							[{ data: 'Vila Mariana (Distrito)' }],
							[{ data: '51 822' }],
							[{ data: '130 484' }],
							[{ data: 2.52 }]
						]
					],
					tabelaListrada: false,
					fonte: 'Prefeitura de São Paulo. Elaboração: LEVISKY, 2020'
				}"/>

				<imagem :dados="{
					caption: 'Gráfico 03: Domicílios segundo Moradores por Dormitório',
					tipo: 'default',
					url: src('arquivos/ginasio-ibirapuera/img/grafico3.jpg'),
					fonte: 'IBGE. Elaboração: LEVISKY, 2020'
				}" />

				<p>Esses dados analisados conjuntamente com a Lei de zoneamento (LPUOS), que veremos a seguir, revelam nas proximidades dos bairros jardim padrões correspondentes à uma ocupação predominante de perfil residencial unifamiliar de alta renda com acesso a serviços e infraestrutura. No entanto nas imediações da área do Complexo, as densidades demográficas vão gradativamente aumentando de média para alta, conforme aproxima-se da região da Av. Paulista. </p>

				<p>De acordo com registros disponibilizados pela prefeitura, a subprefeitura de Vila Mariana possui acesso, quase em sua totalidade, à rede de coleta de esgoto, com níveis muito acima da taxa registrada pelo município. O distrito de Moema, onde se situa a área de estudo, conta com 100% dos domicílios ligados à essa rede.</p>

				<tabela :dados="{
					titulo: 'Tabela 02: Domicílios ligados ou não à Rede de Esgoto',
					colunas: [
						{ titulo: 'Unidades Territoriais' },
						{ titulo: 'Total de Domicílios' },
						{ titulo: 'Ligado à Rede' },
						{ titulo: 'Não ligado' }
					],
					linhas: [
						[
							[{ data:'Município de São Paulo' }],
							[{ data: '3.570.406' }],
							[{ data: '3.285.168' }],
							[{ data: '285.238' }]
						],
						[
							[{ data:'Moema (Distrito)' }],
							[{ data: '34.810' }],
							[{ data: '34.810' }],
							[{ data: '0' }]
						],
						[
							[{ data:'Saúde (Distrito)' }],
							[{ data: '49.272' }],
							[{ data: '48.956' }],
							[{ data: '317' }]
						],
						[
							[{ data:'Vila Mariana (Distrito)' }],
							[{ data: '51.882' }],
							[{ data: '51.827' }],
							[{ data: '55' }]
						]
					],
					fonte: 'Prefeitura de São Paulo. Elaboração: LEVISKY, 2020'
				}"/>

				<imagem :dados="{
					caption: 'Gráfico 04: Domicílios ligados ou não à Rede de Esgoto, 2010',
					tipo: 'default',
					url: src('arquivos/ginasio-ibirapuera/img/grafico4.jpg'),
					fonte: 'IBGE. Elaboração: LEVISKY, 2020'
				}" />

				<p>Todos os distritos em estudo têm acesso à rede elétrica, sendo Jardim Paulista o distrito com maior quantidade de domicílios que a recebem através de fontes diferentes da companhia distribuidora.</p>

				<tabela :dados="{
					titulo: 'Tabela 03: Domicílios servidos por rede elétrica',
					colunas: [
						{ titulo: 'Unidades territoriais' },
						{ titulo: 'Total de domicílios (*)' },
						{ titulo: 'Sim, de companhia distribuidora' },
						{ titulo: 'Sim, de outras fontes' },
						{ titulo: 'Não existe energia elétrica' }
					],
					linhas: [
						[
							[{ data:'Município de São Paulo' }],
							[{ data: '3.573.509' }],
							[{ data: '3.529.714' }],
							[{ data: '42.502' }],
							[{ data: '1.293' }]
						],
						[
							[{ data:'Vila Mariana (Subpref.)' }],
							[{ data: '135.984' }],
							[{ data: '135.923' }],
							[{ data: '62' }],
							[{ data: '0' }]
						],
						[
							[{ data: 'Moema (Distrito)' }],
							[{ data: '34.810' }],
							[{ data: '34.810' }],
							[{ data: '0' }],
							[{ data: '0' }]
						],
						[
							[{ data: 'Saúde (Distrito)' }],
							[{ data: '49.272' }],
							[{ data: '49.231' }],
							[{ data: '41' }],
							[{ data: '0' }],
						],
						[
							[{ data: 'Vila Mariana (Distrito)' }],
							[{ data: '51.901' }],
							[{ data: '51.881' }],
							[{ data: '20' }],
							[{ data: '0' }]
						]
					],
					fonte: 'Prefeitura de São Paulo. Elaboração: LEVISKY, 2020'
				}"/>

				<p>O levantamento da Taxa de Analfabetismo revela que as subprefeituras Vila Mariana apresenta baixas taxas de analfabetismo (0,6% e 0,4% respectivamente), estando muito abaixo da taxa do próprio município (3,2). Vale destacar, que Moema, onde está inserido o Complexo, é o distrito que apresenta menor taxa de analfabetismo no município de São Paulo (0,2%).</p>

				<tabela :dados="{
					titulo: 'Tabela 04: Taxa de analfabetismo, 2010',
					colunas: [
						{ titulo: 'Unidades Territoriais' },
						{ titulo: 'Total (2010)' },
						{ titulo: 'Analfabetos (2010)' },
						{ titulo: 'Taxa de analfabetismo (2010)' }
					],
					linhas: [
						[
							[{ data: 'MSP' }],
							[{ data: '8.916.518' }],
							[{ data: '281.847' }],
							[{ data: '3,2' }],
						],
						[
							[{ data: 'Vila Mariana (Subprefeitura)' }],
							[{ data: '302.935' }],
							[{ data: '1.804' }],
							[{ data: '0,6' }]
						],
						[
							[{ data: 'Moema (Distrito)' }],
							[{ data: '73.087' }],
							[{ data: '159' }],
							[{ data: '0,2'}],
						],
						[
							[{ data: 'Saúde (Distrito)' }],
							[{ data: '114.234' }],
							[{ data: '843' }],
							[{ data: '0,7' }],
						],
						[
							[{ data: 'Vila Mariana (Distrito)' }],
							[{ data: '115.614' }],
							[{ data: '802' }],
							[{ data: '0,7' }],
						]
					],
					fonte: 'Prefeitura de São Paulo. Elaboração: LEVISKY, 2020'
				}"/>

				<div class="grafico" style="padding:0 1rem">
					<h3 class="grafico__titulo">Gráfico 05: Domicílios Taxa de analfabetismo </h3>
					<h4 class="grafico__subtitulo">(%) 2010</h4>
					<ve-bar :data="{
							columns: ['distrito', '%' ],
							rows: [
								{ 'distrito': 'Município de São Paulo', '%': 3.2 },
								{ 'distrito': 'Alto de Pinheiros', '%': 0.4 },
								{ 'distrito': 'Itaim Bibi', '%': 0.4 },
								{ 'distrito': 'Jardim Paulista', '%': 0.5 },
								{ 'distrito': 'Pinheiros', '%': 0.5 },
								{ 'distrito': 'Moema', '%': 0.2 },
								{ 'distrito': 'Saúde', '%': 0.7 },
								{ 'distrito': 'Vila Mariana', '%': 0.7 },
							]
						}"
						:colors="[ '#2e75b6', '#b4c7e7' ]"
					/>
					<p class="grafico__fonte">Fonte: IBGE. Elaboração: LEVISKY, 2020.</p>
				</div>

				<p>Dados mais atualizados (2017) relativos à educação nas subprefeituras em análise indicam alto grau de desenvolvimento, visto que 54,81% da população de Vila Mariana completaram o Ensino Superior, contra 17,61% do município de São Paulo. Considerando que o nível de qualificação tende a influenciar o valor dos salários pagos e que a qualidade da infraestrutura urbana tende a aumentar o valor da terra, pode-se inferir que as áreas com maior número de pessoas com nível Superior Completo coincidem com as áreas onde há rendas mais elevadas.</p>

				<tabela :dados="{
					titulo: 'Tabela 05: Grau de Instrução 2017',
					colunas: [
						{ titulo: 'Unidades Territoriais' },
						{ titulo: 'Total' },
						{ titulo: 'Não Alfabetizado/ Fundamental I Incompleto' },
						{ titulo: 'Fundamental I Completo/ Fundamental II Incompleto' },
						{ titulo: 'Fundamental II Completo/ Médio In-completo' },
						{ titulo: 'Médio Completo/ Superior Incompleto' },
						{ titulo: 'Superior Completo' }
					],
					linhas: [
						[
							[{ data: 'Município de São Paulo' }],
							[{ data: '11.739.241' }],
							[{ data: '2.392.475' }],
							[{ data: '1.673.061' }],
							[{ data: '1.689.828' }],
							[{ data: '3.916.719' }],
							[{ data: '2.067.158' }]
						],
						[
							[{ data: 'Vila Mariana (Subprefeitura)' }],
							[{ data: '354.079' }],
							[{ data: '41.080' }],
							[{ data: '19.151' }],
							[{ data: '21.797' }],
							[{ data: '77.967' }],
							[{ data: '194.085' }]
						],
						[
							[{ data: 'Moema (Distrito)' }],
							[{ data: '88.407' }],
							[{ data: '9.876' }],
							[{ data: '3.319' }],
							[{ data: '3.405' }],
							[{ data: '19.054' }],
							[{ data: '52.752' }]
						],
						[
							[{ data: 'Saúde (Distrito)' }],
							[{ data: '133.683' }],
							[{ data: '18.195' }],
							[{ data: '10.186' }],
							[{ data: '10.751' }],
							[{ data: '29.433' }],
							[{ data: '65.117' }]
						],
						[
							[{ data: 'Vila Mariana (Distrito)' }],
							[{ data: '131.989' }],
							[{ data: '13.008' }],
							[{ data: '5.646' }],
							[{ data: '7.641' }],
							[{ data: '29.479' }],
							[{ data: '76.216' }]
						]
					],
					fonte: 'Fonte: Metrô/SP – Pesquisa Origem e Destino 2017. Elaboração: LEVISKY, 2020'
				}" />

				<div class="grafico wider">
					<h3 class="grafico__titulo">Gráfico 06: População Total por grau de instrução</h3>
					<div class="grafico__grupos">
						<div class="grafico__grupo grafico__grupo">
							<h4 class="grafico__subtitulo">Município de São Paulo</h4>
							<ve-pie :data="{
									columns: ['Grau de instrução', 'população' ],
									rows: [
										{ 'Grau de instrução': '1. Não alfabetizado', 'população': 2392475 },
										{ 'Grau de instrução': '2. Fund. incompleto', 'população': 1673061 },
										{ 'Grau de instrução': '3. Fund. completo', 'população': 1689828 },
										{ 'Grau de instrução': '4. Sup. Incompleto', 'população': 3916719 },
										{ 'Grau de instrução': '5. Sup. Completo', 'população': 2067158 },
									]
								}"
								:settings="{
									radius: 70,
								}"
								:colors="[ '#b35d22', '#d26e2a','#ed7d31', '#f1a78a', '#f5c7b8' ]"
							></ve-pie>
						</div>
						<div class="grafico__grupo--entrecoluna"></div>
						<div class="grafico__grupo grafico__grupo--pequeno">
							<h4 class="grafico__subtitulo">Vila Mariana</h4>
							<ve-pie :data="{
									columns: ['Grau de instrução', 'população' ],
									rows: [
										{ 'Grau de instrução': '1. Não alfabetizado', 'população': 41080 },
										{ 'Grau de instrução': '2. Fund. incompleto', 'população': 19151 },
										{ 'Grau de instrução': '3. Fund. completo', 'população': 21797 },
										{ 'Grau de instrução': '4. Sup. Incompleto', 'população': 77967 },
										{ 'Grau de instrução': '5. Sup. Completo', 'população': 194085 }
									]
								}"
								:settings="{
									radius: 50,
								}"
								:colors="[ '#b35d22', '#d26e2a','#ed7d31', '#f1a78a', '#f5c7b8' ]"
							></ve-pie>
						</div>
					</div>
					<p class="grafico__fonte notas">
						1. Não Alfabetizado/ Fundamental I Incompleto<br>
						2. Fundamental I Completo/ Fundamental II Incompleto<br>
						3. Fundamental II Completo/ Médio Incompleto<br>
						4. Médio Completo/ Superior Incompleto<br>
						5. Superior Completo<br>
					</p>
					<p class="grafico__fonte">Fonte: IBGE. Elaboração: LEVISKY, 2020</p>
				</div>

				<p>Ao lado de tradicionais bairros de baixa densidade exclusivamente residenciais, apresenta grande diversificação de atividades, concentrando investimentos relacionados principalmente ao setor terciário, ao setor cultural, equipamentos públicos de saúde e lazer em âmbito regional. </p>

				<p><u>O setor terciário, somado ao setor da construção civil, responde por 92% dos empregos formais gerados na região. A maior concentração desse percentual corresponde à atividade de serviços, com 67% dos empregos gerados, sendo que os serviços técnico-administrativos constituem a principal atividade, seguido pelos serviços de saúde, alojamento e alimentação e comércio varejista, respectivamente.</u></p>

				<imagem :dados="{
					caption: 'Gráfico 07: Empregos por subsetor de atividade econômica, 2012(7)',
					tipo: 'default',
					url: src('arquivos/ginasio-ibirapuera/img/grafico7.jpg'),
					fonte: 'Ministério do Trabalho em Emprego, Rais. Adaptação: LEVISKY, 2020.'
				}" />

				<p>Os distritos Moema, Vila Mariana e Saúde apresentam níveis médio e alto de atividade econômica, de maneira que, no Complexo, se torna a quarta subprefeitura mais dinâmica do município, respondendo por cerca de 8,2% dos postos formais de trabalho do município, com cerca de 360 mil empregos. Dentre as subprefeituras paulistanas, a subprefeitura Vila Mariana possui o segundo mais elevado padrão de renda. Com apenas 3% da população da cidade, detém mais de 10% dos rendimentos auferidos, sendo que o rendimento domiciliar médio “per capita” é superior a R$ 4 mil mensais (2010).</p>

				<div class="tabela--custom">
					<table>
						<caption>Tabela 06: Estabelecimentos e Empregos Formais no Setor do Comércio, Serviços, Indústria de Transformação e Construção Civil</caption>
						<thead>
							<tr>
								<th rowspan="2">Unidades Territoriais</th>
								<th colspan="2">Comércio</th>
								<th colspan="2">Serviços</th>
								<th colspan="2">Indústria de Transformação</th>
								<th colspan="2">Construção civil</th>
							</tr>
							<tr>
								<th>Estab.</th>
								<th>Empre.</th>
								<th>Estab.</th>
								<th>Empre.</th>
								<th>Estab.</th>
								<th>Empre.</th>
								<th>Estab.</th>
								<th>Empre.</th>
							</tr>
						</thead>
						<tr>
							<td>Município de São Paulo</td>
							<td>96.484</td>
							<td>885.789</td>
							<td>136.756</td>
							<td>2.543.845</td>
							<td>25.208</td>
							<td>430.668</td>
							<td>9.508</td>
							<td>237.493</td>
						</tr>
						<tr>
							<td>Pinheiros (Subprefeitura)</td>
							<td>7.110</td>
							<td>88.384</td>
							<td>22.548</td>
							<td>452.894</td>
							<td>1.496</td>
							<td>35.384</td>
							<td>778</td>
							<td>45.293</td>
						</tr>
						<tr>
							<td>Itaim Bibi (Distrito)</td>
							<td>2.887</td>
							<td>44.282</td>
							<td>10.082</td>
							<td>230.754</td>
							<td>604</td>
							<td>19.189</td>
							<td>406</td>
							<td>28.535</td>
						</tr>
						<tr>
							<td>Jardim Paulista (Distrito)</td>
							<td>1.634</td>
							<td>17.409</td>
							<td>5.952</td>
							<td>125.688</td>
							<td>291</td>
							<td>3.986</td>
							<td>120</td>
							<td>4.632</td>
						</tr>
						<tr>
							<td>Pinheiros (Distrito)</td>
							<td>2.131</td>
							<td>21.679</td>
							<td>5.498</td>
							<td>81.637</td>
							<td>499</td>
							<td>9.462</td>
							<td>202</td>
							<td>9.239</td>
						</tr>
						<tr>
							<td>Vila Mariana (Subprefeitura)</td>
							<td>4.889</td>
							<td>54.096</td>
							<td>14.011</td>
							<td>241.051</td>
							<td>975</td>
							<td>16.845</td>
							<td>526</td>
							<td>18.334</td>
						</tr>
						<tr>
							<td>Moema (Distrito)</td>
							<td>1.772</td>
							<td>20.173</td>
							<td>4.488</td>
							<td>58.946</td>
							<td>362</td>
							<td>6.490</td>
							<td>131</td>
							<td>4.248</td>
						</tr>
						<tr>
							<td>Saúde (Distrito)</td>
							<td>1.372</td>
							<td>13.891</td>
							<td>3.373</td>
							<td>57.465</td>
							<td>321</td>
							<td>6.064</td>
							<td>197</td>
							<td>5.057</td>
						</tr>
						<tr>
							<td>Vila Mariana (Distrito)</td>
							<td>1.745</td>
							<td>20.032</td>
							<td>6.150</td>
							<td>124.640</td>
							<td>292</td>
							<td>4.291</td>
							<td>198</td>
							<td>9.029</td>
						</tr>
					</table>
					<div class="fonte">Fonte <b>Prefeitura de São Paulo. Elaboração: LEVISKY, 2020</b></div>
				</div>
				<div class="grafico" style="max-width: 1000px">
					<h3 class="grafico__titulo">Gráfico 08: Estabelecimentos Formais 2016</h3>
						<ve-histogram :data="{
							columns: ['local', 'Comércio', 'Serviços', 'Indústria de transformação', 'Construção Civil'],
							rows: [
									{ 'local': 'Alto de Pinheiros', 'Comércio': 458, 'Serviços': 1016, 'Indústria de transformação': 102, 'Construção Civil': 50 },
									{ 'local': 'Itaim Bibi', 'Comércio': 2887, 'Serviços': 10082, 'Indústria de transformação': 604, 'Construção Civil': 406 },
									{ 'local': 'Jardim Paulista', 'Comércio': 1634, 'Serviços': 5952, 'Indústria de transformação': 291, 'Construção Civil': 120 },
									{ 'local': 'Pinheiros', 'Comércio': 2131, 'Serviços': 5498, 'Indústria de transformação': 499, 'Construção Civil': 202 },
									{ 'local': 'Moema', 'Comércio': 1772, 'Serviços': 4488, 'Indústria de transformação': 362, 'Construção Civil': 131 },
									{ 'local': 'Saúde', 'Comércio': 1372, 'Serviços': 3373, 'Indústria de transformação': 321, 'Construção Civil': 197 },
									{ 'local': 'Vila Mariana', 'Comércio': 1745, 'Serviços': 6150, 'Indústria de transformação': 292, 'Construção Civil': 198 }
								]
						}"
						:colors="[ '#8faadc', '#ee947c','#a9d18e', '#c9c9c9' ]"
						/>
						<p class="grafico__fonte">Fonte: Ministério do Trabalho em Emprego, Rais, Elaboração: LEVISKY, 2020.</p>
				</div>

				<div class="grafico" style="max-width: 1000px">
					<h3 class="grafico__titulo">Gráfico 09: Empregos formais 2016</h3>
						<ve-histogram :data="{
							columns: ['local', 'Comércio', 'Serviços', 'Indústria de transformação', 'Construção Civil'],
							rows: [
									{ 'local': 'Alto de Pinheiros', 'Comércio': 5014, 'Serviços': 14815, 'Indústria de transformação': 2747, 'Construção Civil': 2887 },
									{ 'local': 'Itaim Bibi', 'Comércio': 44282, 'Serviços': 230754, 'Indústria de transformação': 19189, 'Construção Civil': 28535 },
									{ 'local': 'Jardim Paulista', 'Comércio': 17409, 'Serviços': 125688, 'Indústria de transformação': 3986, 'Construção Civil': 4632 },
									{ 'local': 'Pinheiros', 'Comércio': 21679, 'Serviços': 81637, 'Indústria de transformação': 9462, 'Construção Civil': 9239 },
									{ 'local': 'Moema', 'Comércio': 20173, 'Serviços': 58946, 'Indústria de transformação': 6490, 'Construção Civil': 4248 },
									{ 'local': 'Saúde', 'Comércio': 13891, 'Serviços': 57465, 'Indústria de transformação': 6064, 'Construção Civil': 5057 },
									{ 'local': 'Vila Mariana', 'Comércio': 20032, 'Serviços': 124640, 'Indústria de transformação': 4291, 'Construção Civil': 9029 }
								]
						}"
						:colors="[ '#8faadc', '#ee947c','#a9d18e', '#c9c9c9' ]"
						/>
						<p class="grafico__fonte">Fonte: Ministério do Trabalho em Emprego, Rais, Elaboração: LEVISKY, 2020.</p>
				</div>

				<p>Segundo dados do Observa Sampa, a subprefeitura de Vila Mariana apresentara, em 2016, taxa de empregos formais de 0,42% e 1,49%, respectivamente.</p>

				<p>A proporção de empregos formais de economia criativa<sup>8</sup> em relação aos empregos formais do município é de 6,27 na Subprefeitura Vila Mariana. Especialmente no distrito de Moema, nesse mesmo período, foram registrados 13.656 estabelecimentos formais de economia criativa.</p>

				<div class="table-container">
					<tabela-csv
						:titulo="'Tabela 07: Estabelecimentos e Empregos Formais no Setor do Comércio, Serviços, Indústria de Transformação e Construção Civil'"
						:colunas="['Unidade Territorial', 'Até 1/2', '1/2 a 1', '1 a 2', '2 a 5', '5 a 10', '10 a 20', 'Mais de 20', 'Sem Rendimento']"
						:linhas="[
							[ 'Município de São Paulo', '20.129', '255.166', '588.778', '1.212.485', '714.900', '380.801', '224.798', '202.016' ],
							[ 'Vila Mariana (Subprefeitura)', '445', '1.754', '4.822', '18.788', '28.926', '35.298', '37.438', '7.045' ]
						]"
						:fonte="'IBGE. Elaboração: LEVISKY, 2020.'"
					/>
				</div>

				<div class="grafico wider">
					<h3 class="grafico__titulo">Gráfico 10: Domicílios por Faixa de Rendimento, em salários mínimos – 2010</h3>
					<div class="grafico__grupos">
						<div class="grafico__grupo grafico__grupo">
							<h4 class="grafico__subtitulo">Município de São Paulo</h4>
							<ve-pie :data="{
									columns: ['categoria', 'domicílios'],
									rows: [
										{ 'categoria': 'Até 1/2', 'domicílios': 20129 },
										{ 'categoria': '1/2 A 1', 'domicílios': 255166 },
										{ 'categoria': '1 A 2', 'domicílios': 588778 },
										{ 'categoria': '2 A 5', 'domicílios': 1212485 },
										{ 'categoria': '5 A 10', 'domicílios': 714900 },
										{ 'categoria': '10 A 20', 'domicílios': 380801 },
										{ 'categoria': 'Mais De 20', 'domicílios': 224798 },
										{ 'categoria': 'Sem Rendimento', 'domicílios': 202016 }
									]
								}"
								:settings="{ radius: 70 }"
								:colors="[ '#a6561f', '#be6325', '#d26e2a', '#e4782f', '#ee8c58', '#f1a78a', '#f4bda9', '#f7d1c4' ]"
							></ve-pie>
						</div>
						<div class="grafico__grupo--entrecoluna" />
						<div class="grafico__grupo grafico__grupo--pequeno">
							<h4 class="grafico__subtitulo">Vila Mariana</h4>
							<ve-pie :data="{
									columns: ['categoria', 'domicílios'],
									rows: [
										{ 'categoria': 'Até 1/2', 'domicílios': 445 },
										{ 'categoria': '1/2 A 1', 'domicílios': 1754 },
										{ 'categoria': '1 A 2', 'domicílios': 4822 },
										{ 'categoria': '2 A 5', 'domicílios': 18788 },
										{ 'categoria': '5 A 10', 'domicílios': 28926 },
										{ 'categoria': '10 A 20', 'domicílios': 35298 },
										{ 'categoria': 'Mais De 20', 'domicílios': 37438 },
										{ 'categoria': 'Sem Rendimento', 'domicílios': 7045 }
									]
								}"
								:colors="[ '#a6561f', '#be6325', '#d26e2a', '#e4782f', '#ee8c58', '#f1a78a', '#f4bda9', '#f7d1c4' ]"
								:settings="{ radius: 50 }"
							></ve-pie>
						</div>
					</div>
					<p class="grafico__fonte">Fonte: IBGE. Elaboração: LEVISKY, 2020.</p>
				</div>

				<ol class="notas" start="5">
					<li> Observa Sampa: <a href="http://observasampa.prefeitura.sp.gov.br/">http://observasampa.prefeitura.sp.gov.br/</a> Acesso em 10 outubro.</li>
					<li>Fonte: IBGE – Censo Demográfico, 2010.</li>
					<li><a href="https://ces.ibge.gov.br/base-de-dados/metadados/mte/relacao-anual-de-informacoes-sociais-rais.html">https://ces.ibge.gov.br/base-de-dados/metadados/mte/relacao-anual-de-informacoes-sociais-rais.html</a></li>
					<li>“(…) Complexo de atividades econômicas baseadas no conhecimento com uma dimensão de desenvolvimento e ligações transversais a níveis macro e micro à economia global.” (UNCTAD, 2010, p.10, traduzido pelo autor)</li>
				</ol>

				<h4>Vulnerabilidade Social e Habitação</h4>
				<p>Em conformidade com os dados expostos acima, a vulnerabilidade social no entorno imediato do Complexo é muito baixa e baixíssima (aproximadamente de 0,94).</p>

				<imagem :dados="{
					caption: 'Mapa 11: Vulnerabilidade Social e Habitação',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/mapa11.jpg'),
					fonte: 'Elaboração: LEVISKY, 2020.'
				}" />

				<imagem :dados="{
					caption: 'Mapa 12: Índice Paulista de Vulnerabilidade Social',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image30.jpg'),
					fonte: 'Elaboração: LEVISKY, 2020.'
				}" />

				<p>No geral, os distritos em análise apresentam valores moderados de domicílios em favelas se comparados aos de outras regiões da cidade, de modo que, juntos representam 0,34% do total do município. Em Alto de Pinheiros, Jardim Paulista e Moema, os domicílios em favelas são inexistentes. </p>

				<div class="table-container">
					<tabela-csv
						:titulo="'Tabela 08: Estimativas de Domicílios em Favelas'"
						:colunas="['Unidades Territoriais', '2010', '2017']"
						:linhas="[
							['Município de São Paulo', '386.483', '391.043'],
							['Pinheiros (Subprefeitura)', '307', '347'],
							['Itaim Bibi (Distrito)', '285', '325'],
							['Jardim Paulista (Distrito)', '-', '0'],
							['Pinheiros (Distrito)', '22 ', '22'],
							['Vila Mariana (Subprefeitura)', '926', '977'],
							['Moema (Distrito)', '-', '0'],
							['Saúde (Distrito)', '492', '503'],
							['Vila Mariana (Distrito)', '434', '474']
						]"
						:fonte="'SEHAB/HABITAsampa. Elaboração: LEVISKY, 2020.'"
						:tabelaListrada="true"
					/>
				</div>

				<div class="grafico" style="max-width: 1000px">
					<h3 class="grafico__titulo">Domícílios em Favelas</h3>
						<ve-histogram :data="{
							columns: ['Unidades Territoriais', '2010', '2017'],
							rows: [
									{ 'Unidades Territoriais': 'Alto de Pinheiros', '2010': 0, '2017': 0 },
									{ 'Unidades Territoriais': 'Itaim Bibi', '2010': 285, '2017': 434},
									{ 'Unidades Territoriais': 'Jardim Paulista', '2010': 0, '2017': 0 },
									{ 'Unidades Territoriais': 'Pinheiros', '2010': 22, '2017': 22 },
									{ 'Unidades Territoriais': 'Moema', '2010': 0, '2017': 0 },
									{ 'Unidades Territoriais': 'Saúde', '2010': 492, '2017': 503 },
									{ 'Unidades Territoriais': 'Vila Mariana', '2010': 434, '2017': 474 }
								]
						}"
						:colors="[ '#d26e2a', '#f4bda9']"
						/>
						<p class="grafico__fonte">Fonte: SEHAB/HABITAsampa. Elaboração: LEVISKY, 2020.</p>
				</div>

				<p>O Índice de Desenvolvimento Humano (IDH)<sup>9</sup> é uma medida resumida do progresso a longo prazo em três dimensões básicas do desenvolvimento humano: renda, educação e saúde, ou seja, é uma medida que pretende indicar de maneira geral e sintética, a perspectiva sobre o desenvolvimento humano. </p>

				<p>A aplicação dessa metodologia na escala municipal recebe o nome de Índice de Desenvolvimento Humano Municipal (IDH-M) e é calculado através dos mesmos indicadores do IDH que passam por uma revisão metodológica adaptada à realidade das cidades brasileiras.</p>

				<p>Em 2010, as subprefeituras de Vila Mariana e Pinheiros registraram IDH-M igual a 0,94. Além de apresentarem valores acima do índice apontado pelo município de São Paulo (0,80), vale destacar que também são aquelas que detêm os maiores valores dentre todas as subprefeituras, conforme tabela abaixo.</p>

				<div class="table-container">
					<tabela-csv
						:titulo="'Tabela 09: Índice de Desenvolvimento Humano Municipal, 2000-2010'"
						:colunas="['Subprefeituras', 'IDH-M  - 2000', 'IDH-M 2010', 'IDH=M Variação %']"
						:linhas="[
							[ 'Pinheiros', '0,910', '0,942', '3,52'],
							[ 'Vila Mariana', '0,897', '0,938', '4,57'],
							[ 'Santo Amaro', '0,867', '0,909', '4,84'],
							[ 'Lapa', '0,849', '0,906', '6,71'],
							[ 'Sé', '0,831', '0,889', '6,98'],
							[ 'Mooca', '0,811', '0,869', '7,15'],
							[ 'Santana/Tucuruvi', '0,811', '0,869', '7,15'],
							[ 'Butantã', '0,789', '0,859', '8,87'],
							[ 'Ipiranga', '0,759', '0,824', '8,56'],
							[ 'Aricanduva/Vila Formosa', '0,762', '0,822', '7,87'],
							[ 'Jabaquara', '0,756', '0,816', '7,94'],
							[ 'Penha', '0,745', '0,804', '7,92'],
							[ 'Casa Verde', '0,732', '0,799', '9,15'],
							[ 'Vila Maria/Vila Guilherme', '0,733', '0,793', '8,19'],
							[ 'Pirituba/Jaraguá', '0,718', '0,787', '9,61'],
							[ 'Vila Prudente', '0,723', '0,785', '8,58'],
							[ 'Campo Limpo', '0,699', '0,783', '12,02'],
							[ 'Ermelino Matarazzo', '0,707', '0,777', '9,9'],
							[ 'Jaçanã/Tremembé', '0,716', '0,768', '7,26'],
							[ 'Freguesia do Ó/Brasilândia', '0,677', '0,762', '12,56'],
							[ 'Itaquera', '0,691', '0,758', '9,7'],
							[ 'Cidade Ademar', '0,662', '0,758', '14,5'],
							[ 'Capela do Socorro', '0,656', '0,750', '14,33'],
							[ 'São Miguel Paulista', '0,650', '0,736', '13,23'],
							[ 'São Mateus', '0,658', '0,732', '11,25'],
							[ 'Perus', '0,637', '0,731', '14,76'],
							[ 'Itaim Paulista', '0,639', '0,725', '13,46'],
							[ 'M´Boi Mirim ', '0,638', '0,716', '12,23'],
							[ 'Guaianases', '0,621', '0,713', '14,81'],
							[ 'Cidade Tiradentes', '0,634', '0,708', '11,67'],
							[ 'Parelheiros', '0,593', '0,680', '14,67']
						]"
						:fonte="'Prefeitura de São Paulo. Elaboração: LEVISKY, 2020.'"
						:tabelaListrada="true"
					/>
				</div>
				<br>

				<h4>Tipologia Construtiva e Uso do Solo Predominantes</h4>
				<p>A partir de análise do entorno do imóvel, observa-se que nas imediações a ocupação do solo é heterogênea, plenamente consolidada do ponto de vista imobiliário, com predominância de edificações com alta densidade construtiva e verticalização, sobretudo a partir da Rua Estados Unidos sentido Av. Paulista, condição de ocupação fruto do de-senvolvimento histórico da região, pautado tanto pelas legislações urbanísticas anteriores assim como pela atual que enquadra o território predominantemente nas zonas de uso Zona de Centralidade (ZC), Zona Mista (ZM) e Zona Eixo de Estruturação Urbana (ZEU).</p>

				<imagem :dados="{
					caption: 'Mapa 13: Zoneamento',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image31.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<p>O uso do solo predominante do entorno do Complexo é caracterizado, principalmente, pelo uso residencial, de tipologia vertical de médio/alto padrão, conforme demonstra o mapa abaixo. </p>

				<imagem :dados="{
					caption: 'Mapa 14: Uso Predominante do Solo',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image32.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<p>De acordo com dados da Subprefeitura da Vila Mariana, o distrito de Moema, onde está situado o Complexo, caracteriza-se pelo crescente adensamento vertical, e, por isso, é objeto de ações de controle urbano e ocupação do solo.</p>

				<p>Já na porção do território contida na Subprefeitura de Pinheiros, os dados se mostram de forma diversa, sendo que há forte predominância de usos residenciais horizontais, principalmente nos chamados bairros Jardins, considerados territórios de preservação pelos órgãos de Patrimônio Histórico CONPRESP e CONDEPHAAT.</p>
				<p>Conforme dados da Subprefeitura da Vila Mariana, avalia-se que nos últimos 14 anos, o seu coeficiente de aproveitamento médio passou de 1,56 para 2,07, sinalizando o forte processo de ocupação do território com a substituição de terrenos vagos e edificações térreas por edifícios verticais.</p>
				<p>De maneira geral, o coeficiente de aproveitamento máximo das áreas do entorno imediato do Complexo limita-se a 2,00.</p>
				<p>Num raio de maior distância, podemos observar áreas cujo coeficiente de aproveitamento é superior, chegando à 4,00. Essa ascensão de potencial construtivo se dá pelo fato desses territórios se situarem em Zonas de Eixo de Estruturação, onde, de acordo com o PDE, há a intenção de promover densidades construtiva e demográfica altas na cidade. </p>

				<imagem :dados="{
					caption: 'Mapa 15:  Coeficiente de Aproveitamento Máximo',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image33.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<p>Quanto à verticalização do entorno, como grandezas diretamente proporcionais, a altura média atual coincide com as características de densidade construtiva de cada zona descrita anteriormente. Com exceção dos bairros residenciais unifamiliares, identifica-se verticalização mais acentuada na área onde está inserido o Complexo, conforme diagrama e mapa abaixo: </p>

				<imagem :dados="{
					caption: 'Imagem 08: Altura média dos edifícios do entorno',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/imagem8.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<imagem :dados="{
					caption: 'Mapa 16: Altura média dos edifícios do entorno',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image35.jpg'),
					fonte: 'CadMapper. Elaboração: LEVISKY, 2020'
				}" />

				<p>Enquanto no município de São Paulo, a população no geral reside em casas, primordialmente, nas subprefeituras de Pinheiros e Vila Mariana, onde há grande verticalização, as pessoas geralmente residem em apartamentos.</p>

				<div class="table-container">
					<tabela-csv
						:titulo="'Tabela 09: Índice de Desenvolvimento Humano Municipal, 2000-2010'"
						:colunas="[ 'Unidades Territoriais', 'Casa', 'Casa de Vila ou em Condomínio', 'Apartamento', 'Habitação em: Casa de Cômodos, Cortiço ou Cabeça de Porco', 'Oca ou Maloca' ]"
						:linhas="[
							[ 'Município de São Paulo', '2.460.091', '52.673', '1.017.720', '42.924', '101' ],
							[ 'Pinheiros (Subprefeitura)', '23.345', '1.518', '96.232', '297', '0' ],
							[ 'Alto de Pinheiros (Distrito)', '6.812', '260', '8.206', '130', '0' ],
							[ 'Itaim Bibi (Distrito)', '8.441', '593', '30.135', '44', '0' ],
							[ 'Jardim Paulista (Distrito)', '2.455', '234', '36.930', '66', '0' ],
							[ 'Pinheiros (Distrito)', '5.636', '431', '20.961', '57', '0' ],
							[ 'Vila Mariana (Subpref.)', '29.391', '1.878', '104.064', '652', '0' ],
							[ 'Moema (Distrito)', '3.258', '170', '31.382', '0', '0 ' ],
							[ 'Saúde (Distrito)', '17.262', '888', '30.651', '471', '0' ]
						]"
						:tabelaListrada="true"
					/>
				</div>

				<div class="grafico wider">
					<h3 class="grafico__titulo">Gráfico 12: Domicílio segundo Tipologias Residenciais</h3>
					<h3 class="grafico__titulo">São Paulo</h3>
					<ve-pie :data="{
							columns: ['Tipologia', 'unidades' ],
							rows: [
								{ 'Tipologia': 'Casa', 'unidades': 2460091 },
								{ 'Tipologia': 'Casa de Vila ou em Condomínio', 'unidades': 52673 },
								{ 'Tipologia': 'Apartamento', 'unidades': 1017720 },
								{ 'Tipologia': 'Habitação em: Casa de Cômodos, Cortiço ou Cabeça de Porco', 'unidades': 42924 },
							]
						}"
						:colors="[ '#f5c7b8', '#f1a78a', '#ed7d31', '#d26e2a', '#a04507' ]"
					/>
					<div class="grafico__grupos">
						<div class="grafico__grupo grafico__grupo">
							<h4 class="grafico__subtitulo">Pinheiros</h4>
							<ve-pie :data="{
									columns: ['Tipologia', 'unidades' ],
									rows: [
										{ 'Tipologia': 'Casa', 'unidades': 23345 },
										{ 'Tipologia': 'Casa de Vila ou em Condomínio', 'unidades': 1518 },
										{ 'Tipologia': 'Apartamento', 'unidades': 96232 },
										{ 'Tipologia': 'Habitação em: Casa de Cômodos, Cortiço ou Cabeça de Porco', 'unidades': 297 },
									]
								}"
								:colors="[ '#f5c7b8', '#f1a78a', '#ed7d31', '#d26e2a', '#a04507' ]"
								:settings="{ radius: 50 }"
							/>
						</div>
						<div class="grafico__grupo--entrecoluna" />
						<div class="grafico__grupo grafico__grupo--pequeno">
							<h4 class="grafico__subtitulo">Vila Mariana</h4>
							<ve-pie :data="{
									columns: ['Tipologia', 'unidades' ],
									rows: [
										{ 'Tipologia': 'Casa', 'unidades': 29391 },
										{ 'Tipologia': 'Casa de Vila ou em Condomínio', 'unidades': 1878 },
										{ 'Tipologia': 'Apartamento', 'unidades': 104064 },
										{ 'Tipologia': 'Habitação em: Casa de Cômodos, Cortiço ou Cabeça de Porco', 'unidades': 652 },
									]
								}"
								:colors="[ '#f5c7b8', '#f1a78a', '#ed7d31', '#d26e2a', '#a04507' ]"
								:settings="{ radius: 50 }"
							/>
						</div>
					</div>
					<p class="grafico__fonte">Fonte: IBGE. Elaboração: LEVISKY, 2020</p>
				</div>

				<p>Com relação ao mercado imobiliário, segundo a EMBRAESP, no primeiro semestre de 2018, as zonas Sul e Oeste receberam o maior números de lançamentos, com destaque para os distritos de Vila Mariana e Moema.</p>
				<p>De acordo com dados da Secovi - SP  , há grande concentração de novos lançamentos de alto padrão na área em estudo, especialmente modelos de quatro dormitórios, o que reflete, novamente, o perfil socioeconômico elevado da população residente da região em questão – famílias de médio-alto padrão.</p>
				<p>Portanto, a partir de análise do entorno do imóvel, observou-se nas imediações a ocupação do solo heterogênea, plenamente desenvolvida do ponto de vista imobiliário, com maior densidade construtiva a partir da Rua Estados Unidos sentido Av. Paulista, condição de ocupação fruto do desenvolvimento histórico da região, traduzido, aos olhos da legislação urbanística vigente, pela predominância das zonas de uso Zona de Centra-lidade, Zona Mista e Zona Eixo de Estruturação Urbana.</p>

				<imagem :dados="{
					caption: 'Imagem 09: Novos Lançamento Imobiliários – 2018',
					tipo: 'coluna',
					url: src('arquivos/ginasioibirapuera/img/image37.jpg'),
					fonte: 'Fonte: Secovi, 2018. Elaboração: LEVISKY, 2020'
				}" />

				<div class="table-container">
					<tabela-csv
						:titulo="'Tabela 11: Lançamentos Residenciais Verticais, 2010 – 2018'"
						:colunas="[ 'Unidades Territoriais', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018' ]"
						:linhas="[
							[ 'Município de São Paulo', '267', '304', '208', '272', '258', '156', '136', '188', '228' ],
							[ 'Pinheiros (Subprefeitura)', '34', '41', '13', '27', '33', '15', '17', '30', '29' ],
							[ 'Itaim Bibi (Distrito)', '25', '25 ', '7 ', '16', '14', '8', '7', '9', '10' ],
							[ 'Jardim Paulista (Distrito)', '3', '4', '2', '5', '4 ', '1', '-', '8', '9' ],
							[ 'Pinheiros (Distrito)', '5 ', '10', '4', '3', '14', '4 ', '7', '13', '10 ' ],
							[ 'Vila Mariana (Subprefeitura)', '25', '26', '22', '40', '22 ', '17', '17 ', '15', '36' ],
							[ 'Moema (Distrito)', '6', '6 ', '1', '5', '5 ', '2', '7', ' 6  ', ' 12' ],
							[ 'Saúde (Distrito)', '8', '10', '15', '11', '7', '11 ', '4', '3', '9' ],
							[ 'Vila Mariana (Distrito)', '11', '10', '6', '24', '10 ', '4', '6 ', '6  ', '15' ]
						]"
						:tabelaListrada="true"
						:fonte="'Embraesp. Elaboração: LEVISKY, 2020'"
					/>
				</div>

				<div class="grafico" style="padding: 1rem">
					<h3 class="grafico__titulo">Gráfico 13: Lançamentos Residenciais Verticais</h3>
					<h4 class="grafico__subtitulo">2018</h4>
					<ve-bar :data="{
							columns: ['territorio', 'Lançamentos' ],
							rows: [
								{ 'territorio': 'Aricanduva/Formosa/Carrão', 'Lançamentos': 5 },
								{ 'territorio': 'Butantã', 'Lançamentos': 12 },
								{ 'territorio': 'Campo Limpo', 'Lançamentos': 11 },
								{ 'territorio': 'Capela do Socorro', 'Lançamentos': 0 },
								{ 'territorio': 'Casa Verde/Cachoeirinha', 'Lançamentos': 2 },
								{ 'territorio': 'Cidade Ademar', 'Lançamentos': 5 },
								{ 'territorio': 'Cidade Tiradentes', 'Lançamentos': 0 },
								{ 'territorio': 'Ermelino Matarazzo', 'Lançamentos': 4 },
								{ 'territorio': 'Freguesia/Brasilândia', 'Lançamentos': 1 },
								{ 'territorio': 'Guaianases', 'Lançamentos': 2 },
								{ 'territorio': 'Ipiranga', 'Lançamentos': 9 },
								{ 'territorio': 'Itaim Paulista', 'Lançamentos': 0 },
								{ 'territorio': 'Itaquera', 'Lançamentos': 12 },
								{ 'territorio': 'Jabaquara', 'Lançamentos': 3 },
								{ 'territorio': 'Jaçanã/Tremembé', 'Lançamentos': 2 },
								{ 'territorio': 'Lapa', 'Lançamentos': 18 },
								{ 'territorio': 'M´Boi Mirim', 'Lançamentos': 0 },
								{ 'territorio': 'Mooca', 'Lançamentos': 19 },
								{ 'territorio': 'Parelheiros', 'Lançamentos': 0 },
								{ 'territorio': 'Penha', 'Lançamentos': 11 },
								{ 'territorio': 'Perus', 'Lançamentos': 1 },
								{ 'territorio': 'Pinheiros', 'Lançamentos': 29 },
								{ 'territorio': 'Pirituba', 'Lançamentos': 9 },
								{ 'territorio': 'Santana/Tucuruvi', 'Lançamentos': 11 },
								{ 'territorio': 'Santo Amaro', 'Lançamentos': 3 },
								{ 'territorio': 'São Mateus', 'Lançamentos': 1 },
								{ 'territorio': 'São Miguel', 'Lançamentos': 2 },
								{ 'territorio': 'Sé', 'Lançamentos': 13 },
								{ 'territorio': 'Vila Maria/Vila Guilherme', 'Lançamentos': 3 },
								{ 'territorio': 'Vila Mariana', 'Lançamentos': 36 },
								{ 'territorio': 'Vila Prudente/Sapopemba', 'Lançamentos': 4 },
								{ 'territorio': 'Sapopemba', 'Lançamentos': 0 }
							]
						}"
						:height="'800px'"
						:colors="[ '#2e75b6' ]"
						:settings="{
							dataOrder: {
								label: 'order',
								order: 'asc'
							}
						}"
					/>
					<p class="grafico__fonte">Fonte: Embraesp. Elaboração: LEVISKY, 2020</p>
				</div>

				<ol class="notas" start="9">
					<li><a href="https://www.br.undp.org">https://www.br.undp.org</a>. Acesso em outubro de 2019.</li>
					<li>A Pesquisa do Mercado Imobiliário (PMI) é realizada mensalmente pelo departamento de economia e estatística do Secovi-SP, com o objetivo de analisar o desempenho de vendas de imóveis residenciais novos da Região Metropolitana de São Paulo. <a href="http://www.geosecovi.com.br/">http://www.geosecovi.com.br/</a>. Acesso em: 10 outubro de 2019.</li>
				</ol>

				<h4>Equipamentos Urbanos</h4>
				<p>De acordo com os mapas que seguem, a área de abrangência do Complexo, predominantemente, é bem servida de equipamentos urbanos<sup>11</sup> públicos e privados de educação, de saúde e de cultura. Entretanto, vê-se que a disposição de todos seguem uma mesma con-figuração espacial ao concentrarem-se principalmente nas imediações da Avenida Paulista – a cerca de 1,00Km do Complexo – enquanto no sentido sudoeste, se apresentam em menor número. </p>

				<p>Essa dissonância se dá, sobretudo, pela relevância econômica da Avenida Paulista e das excelentes condições de acesso em suas imediações.</p>
				<p>Quanto aos equipamentos de saúde, nos mapas e tabela abaixo pode-se observar grande disponibilidade de equipamentos na região, principalmente hospitais e ambulatórios especializados.</p>
				<p>Segundo dados do IBGE de 2018, no Distrito de Moema constam 1.592 leitos hospitalares disponíveis (públicos e privados), sendo 17,99 o número de leitos hospitalares para cada 1.000 (mil) habitantes. Considerando as subprefeituras de Vila Mariana e Pinheiros, cujos coeficientes são 11,62 e 11,60 respectivamente, elas se sobressaem quando comparadas ao coeficiente do município de 2,49.</p>


				<div class="table-container">
					<tabela-csv
						:titulo="'Tabela 12: Coeficiente de Leitos por mil Habitantes, 2018'"
						:colunas="[ 'Unidades Territoriais', 'População', 'Total de Leitos Gerais', 'Coeficiente de Leitos gerais' ]"
						:linhas="[
							['Município de São Paulo', '11.654.490', '29.052', '2,49' ],
							['Pinheiros (Subprefeitura)', '295.195', '3.423', '11,60' ],
							['Vila Mariana (Subprefeitura)', '360.790', '4.193', '11,62' ]
						]"
						:fonte="'Fonte: CNES, SMS, SES e IBGE. Elaboração: LEVISKY, 2020'"
					/>
				</div>

				<imagem :dados="{
					caption: 'Mapa 17: Equipamentos de Saúde',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image38.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020.'
				}" />

				<p>Em relação à educação, conforme mapa abaixo, embora exista grande disponibilidade de equipamentos na área em estudo, é possível notar que há grande discrepância de oferta entre regiões localizadas mais ao sul e áreas próximas à Av. Paulista, onde se concentra oferta de escolas, especialmente, privadas. </p>

				<imagem :dados="{
					caption: 'Mapa 18: Rede de Educação',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image39.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020.'
				}" />

				<p>Os centros culturais seguem a mesma distribuição espacial, concentrando-se principalmente nas imediações da Avenida Paulista, enquanto no sentido bairro, próximo aos Jardins, a quantidade de Museus se apresenta mais rarefeita. </p>

				<p>Vale destacar que o Parque Ibirapuera possui considerável importância cultural, sendo referência para recepcionar eventos variados como congressos, simpósios, conferências, mostras, exposições de arte, orquestras, shows de dança, bienais de arquitetura e artes, eventos de moda, teatro, shows de música, entre outros.</p>

				<p>O Parque do Ibirapuera<sup>12</sup> concentra ainda em seu interior grande parte da infraestrutura necessária para a promoção cultural da cidade, que compreende o Complexo arquitetônico implantado em 1954, composto pela grande Marquise, Pavilhões (Culturas Brasileiras, Bienal de São Paulo, Museu Afro Brasil), Oca e Auditório.  Também compõem esse setor áreas que foram implantadas posteriormente como o Planetário (1957) e a Escola Municipal de Astrofísica Professor Aristóteles Orsini (1961), hoje vinculados à Universidade Aberta do Meio Ambiente e Cultura de Paz – UMAPAZ.</p>

				<p>Ainda, sob a marquise está instalado, desde 1968, o Museu de Arte Moderna – MAM. Além dos limites do parque, no lado oposto da Avenida 23 de Maio, encontra-se o MAC-USP, inaugurado em 2012.</p>

				<imagem :dados="{
					caption: 'Mapa 19: Rede de Cultura.',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image40.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020.'
				}" />

				<ol class="notas" start="11">
					<li>Todos os bens públicos e privados, de utilidade pública, destinados à prestação de serviços necessários ao funcionamento da cidade, implantados mediante autorização do poder público, em espaços públicos e privados. </li>
					<li>Dados extraídos da minuta do Plano Diretor do Ibirapuera. Disponível em: <a href="/pdp-ibirapuera">https://participe.gestaourbana.prefeitura.sp.gov.br/pdp-ibirapuera</a> Acesso em: 05 outubro 2019.</li>
				</ol>

				<h4>Equipamentos de Comércio e Serviços</h4>
				<p>O entorno do Complexo é bem servido de empreendimentos comerciais de pequeno a médio porte, que conferem à região diversidade na oferta de produtos e no abastecimento.</p>

				<p>Vale observar que no entorno do Complexo acontecem 8 (oito) feiras livres de terça a domingo, modalidade de comércio que existe tradicionalmente na cidade desde meados do século XVII, assegurando o abastecimento da população local. Aos sábados, na Praça Eisenhower acontece a Feira Orgânica, com 29 bancas.</p>

				<imagem :dados="{
					caption: 'Mapa 20: Rede de abastecimento',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image41.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020.'
				}" />

				<div class="table-container">
					<tabela-csv
						:titulo="'Tabela 13: Rede de Abastecimento, 2018'"
						:colunas="[ 'Unidades Territoriais', 'Feiras (2018)', 'Mercados (2018)', 'Sacolões (2018)' ]"
						:linhas="[
							[ 'Município de São Paulo', '883', '16', '18' ],
							[ 'Pinheiros', '25', '1', '1 ' ],
							[ 'Alto de Pinheiros', '3', '-', '- ' ],
							[ 'Itaim Bibi', '10', '-', '- ' ],
							[ 'Jardim Paulista', '6', '-', '1' ],
							[ 'Pinheiros', '6', '1', '-' ],
							[ 'Vila Mariana', '37', '-', '- ' ],
							[ 'Moema', '8', '-', '- ' ],
							[ 'Saúde', '13', '-', '- ' ],
							[ 'Vila Mariana', '16', '-', '- ' ]
						]"
						:tabelaListrada="true"
						:fonte="'Coordenadoria de Segurança Alimentar e Nutricional – Secretaria Municipal de Desenvolvimento, Trabalho e Empreendedorismo. Elaboração: LEVISKY, 2020.'"
					/>
				</div>

				<p>Quanto ao comércio e serviços da região, identificam-se em maior número o comércio de alimentação, seguido do comércio de abastecimento de médio e pequeno porte (mercados).</p>
				<p>Nota-se, no entanto, desequilíbrio quanto à disponibilidade de comércio e serviços entre áreas mais a sudoeste, região predominantemente residencial, e as áreas noroeste, onde se concentram pontos comerciais de pequeno porte (alimentação, serviços e abastecimento de âmbito local). A nordeste do Complexo a atividade comercial se intensifica, principalmente devido à proximidade com a Avenida Paulista, considerada um dos maiores centros de serviços da América Latina, onde passam a se localizar centros comerciais de médio a grande porte. Dentre eles, destacam-se os shopping centers como Shopping Jardim Pamplona Shopping, Shopping Cidade SP e Shopping Pátio Paulista. </p>

				<imagem :dados="{
					caption: 'Mapa 21: Principais Comércios',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image42.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020.'
				}" />

				<p>Com relação aos serviços de hospedagem, estão distribuídos espacialmente majoritariamente próximos ao eixo da Avenida Paulista, enquanto no entorno imediato ao Complexo Constâncio Vaz, a oferta desse serviço é escassa. Vale, portanto, considerar que a atividade hoteleira é uma oportunidade de exploração em potencial para a região.</p>

				<p>Vale ressaltar que no mapa abaixo não foram identificados pousadas e albergues. </p>

				<imagem :dados="{
					caption: 'Mapa 22: Rede de Hotelaria',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image43.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020.'
				}" />

				<p>Portanto, conclui-se que devido à posição espacial altamente privilegiada do Complexo, situado entre o Parque do Ibirapuera e Avenida Paulista, entende-se que há grande potencial cultural na previsão de uma interconexão entre tais localidades, visto que estas já dispõem de vários outros requisitos necessários para promoção de eventos de esporte e lazer variados na cidade.</p>

				<h4>Rede de Mobilidade</h4>
				<p>O diagnóstico da Área de Influência será realizado considerando dois grupos, o de transporte motorizado e o de transporte não motorizado, conforme descrito a seguir:</p>
				<div class="tabela--custom">
					<table>
						<caption>Tabela 14: Modais</caption>
						<tr>
							<th colspan="3">Viagens Motorizadas</th>
							<th colspan="2">Viagens Não Motorizadas</th>
						</tr>
						<tr>
							<th colspan="2">Modo Individual</th>
							<th>Modo Coletivo</th>
							<th colspan="2">Modo Ativo</th>
						</tr>
						<tr>
							<td colspan="2">Automóvel</td>
							<td>Metrô / Trem</td>
							<td colspan="2">A Pé</td>
						</tr>
						<tr>
							<td colspan="2">Táxi / Aplicativos</td>
							<td>Ônibus</td>
							<td colspan="2">Bicicleta</td>
						</tr>
					</table>
					<div class="fonte">Fonte e Elaboração: <b>TTC</b></div>
				</div>

				<h4>Sistema Viário - Rede Viária Estrutural</h4>
				<p>O diagnóstico da Área de Influência foi realizado a partir da hierarquização adotada pelo Plano Diretor Estratégico do Município de São Paulo, conforme já apresentado. O perímetro desta área de influência é definido basicamente por eixos viários estruturais, contemplando parte dos Distritos de Moema, Vila Mariana e Jardim Paulista.</p>
				<p>A área faz parte da Zona Máxima de Restrição à Caminhões (ZMRC). A restrição ao trânsito de caminhões nesta área é de 2ª a 6ª feira das 5 às 21h e aos sábados das 10 às 14h. Somente os caminhões devidamente cadastrados e autorizados poderão transitar nos horários de restrição, se previstos na legislação vigente. Estão previstas condições de excepcionalidade em função do porte do caminhão, do tipo de carga transportada ou serviço ser prestado.</p>
				<p>Outro tipo de restrição ao caminhão são as chamadas Vias Estruturais Restritas que são vias e seus acessos, com restrição ao trânsito de caminhões, em horário determinado por meio de regulamentação local, com características de trânsito rápido ou arterial, bem como praças, túneis, viadutos e pontes que dão continuidade a tais vias e constituem a estrutura do sistema viário. Dentre elas toda a extensão e ambos os sentidos da Av. Nove de Julho e Av. Vinte e Três de Maio.</p>
				<p>A área também faz parte da Zona Máxima de Restrição à Veículo Fretado (ZMRF), onde fica proibido o trânsito dos veículos que exercem a atividade de fretamento de 2ª a 6ª feira das 5 às 21 horas, exceto feriados, de acordo com a Portaria nº 072/2016- SMT.GAB.</p>
				<p>As vias localizadas na área de influência, localizadas nos Distritos de Moema, Vila Mariana e Jardim Paulista, fazem parte do Minianel Viário. Dentro desta área, vigora desde 1997 uma restrição municipal à circulação de automóveis em função do número final das placas, popularmente conhecida como rodízio.</p>
				<p>As vias classificadas pela legislação vigente como: Estruturais N1, N3 e Coletoras, inseridas no Minianel Viário fazem parte da AET 1 (Área Especial de Tráfego), conforme Lei 15.150/2010, alterada pela Lei 16.642/2017 – Código de Obras e Edificações do Município.</p>

				<imagem :dados="{
					caption: 'Mapa 23: Classificação Viária',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image44.jpg'),
					fonte: 'Mapa 09, da Lei 16.050/14. Elaboração: LEVISKY, 2020.'
				}" />

				<div class="tabela--custom">
					<table>
						<caption>Tabela 15 - Hierarquização Viária </caption>
						<tr>
							<th>Nível/ Classificação Viária</th>
							<th>Vias</th>
						</tr>
						<tr>
							<td>N3</td>
							<td>
								Av. Brasil<br>
								Av. Brigadeiro Luís Antônio (da Av. São Gabriel até Vd. Brig. Luís Colombo)<br>
								Av. Pedro Álvares Cabral <br>
								Av. Vinte e Três de Maio <br>
								Av. República do Líbano <br>
								R. Manoel da Nóbrega (da Av. República do Líbano até R. Pedro Álvares Cabral)<br>
							</td>
						</tr>
						<tr>
							<td>Coletora</td>
							<td>
								R. Abílio Soares<br>
								R. Manoel da Nóbrega<br>
								Av. Marechal Estênio Albuquerque Lima<br>
								R. Jundiaí<br>
								R. Curitiba<br>
								R. Tutóia<br>
								R. Dr. Amâncio de Carvalho<br>
								R. Tomás Carvalhal<br>
								R. Tumiaru (entre R. Tutóia e R. Joinville)<br>
								R. Pirapora (entre R. Tutóia e R. Joinville)<br>
							</td>
						</tr>
					</table>
					<div class="fonte">
						Fonte: <a href="https://gestaourbana.prefeitura.sp.gov.br"><b>https://gestaourbana.prefeitura.sp.gov.br </b></a><br>
						Elaboração: <b>PDE 16.050/2014 - Adaptação TTC, 2020.</b><br>
					</div>
				</div>

				<p>As vias estruturais da área de influência são caracterizadas como de fluxo interrompido, ou seja, com controle semafórico nos entroncamentos e de uma maneira geral possuem entre uma e duas faixas de rolamento por pista, com especial destaque para a Av. Pedro Álvares Cabral (04 a 06 faixas/ sentido), Av. Vinte e Três de Maio (03 a 05 faixas/ sentido) e Av. República do Líbano ( 3 a 4 faixas/ sentido), todas com separação física entre as pistas.</p>

				<div class="tabela--custom">
					<table>
						<caption>Tabela 16 - Características Físicas dos Principais Eixos da Área De Influência</caption>
						<tr>
						<th>Distrito</th>
						<th>Vias</th>
						<th>Classe das vias</th>
						<th>Características operacionais</th>
						<th>Nº de Pistas</th>
						<th>Nº de Faixas/</th>
						<th>Sentido Sentidos</th>
						<th>Separação de Pistas</th>
						</tr>
						<tr>
						<td rowspan="9">Moema</td>
						<td>Av. Pedro Álvares Cabral</td>
						<td>N3</td>
						<td>Interrompido</td>
						<td>2</td>
						<td>Nº de</td>
						<td>2</td>
						<td>Sim</td>
						</tr>
						<tr>
						<td>Av. Vinte e Três de Maio</td>
						<td>N3</td>
						<td>Ininterrupto</td>
						<td>2</td>
						<td>Faixas/</td>
						<td>2</td>
						<td>Sim</td>
						</tr>
						<tr>
						<td>Av. República do Líbano</td>
						<td>N3</td>
						<td>Interrompido</td>
						<td>2</td>
						<td>3 a 4</td>
						<td>2</td>
						<td>Sim</td>
						</tr>
						<tr>
						<td>R. Abílio Soares</td>
						<td>Coletora</td>
						<td>Interrompido</td>
						<td>1</td>
						<td>1 a 4</td>
						<td>1 a 2</td>
						<td>Não</td>
						</tr>
						<tr>
						<td>R. Manoel da Nóbrega</td>
						<td>Coletora</td>
						<td>Interrompido</td>
						<td>2</td>
						<td>1 a 4</td>
						<td>2</td>
						<td>Sim</td>
						</tr>
						<tr>
						<td>R. Jundiaí</td>
						<td>Coletora</td>
						<td>Interrompido</td>
						<td>1</td>
						<td>2</td>
						<td>1</td>
						<td>Não</td>
						</tr>
						<tr>
						<td>R. Curitiba</td>
						<td>Coletora</td>
						<td>Interrompido</td>
						<td>1 a 2</td>
						<td>1 a 3</td>
						<td>1 a 2</td>
						<td>Eventual</td>
						</tr>
						<tr>
						<td>R. Tumiaru (entre R. Tutóia e R. Joinville)</td>
						<td>Coletora</td>
						<td>Interrompido</td>
						<td>1</td>
						<td>1 a 2</td>
						<td>1 a 2</td>
						<td>Não</td>
						</tr>
						<tr>
						<td>R. Pirapora (entre R. Tutóia e R. Joinville)</td>
						<td>Coletora</td>
						<td>Interrompido</td>
						<td>1</td>
						<td>1 a 2</td>
						<td>1 a 2</td>
						<td>Não</td>
						</tr>
						<tr>
						<td rowspan="3">Vila Mariana</td>
						<td>R. Tomás Carvalhal</td>
						<td>Coletora</td>
						<td>Interrompido</td>
						<td>1</td>
						<td>1</td>
						<td>2</td>
						<td>Não</td>
						</tr>
						<tr>
						<td>R. Tutóia</td>
						<td>Coletora</td>
						<td>Interrompido</td>
						<td>1</td>
						<td>1 a 2</td>
						<td>2</td>
						<td>Não</td>
						</tr>
						<tr>
						<td>R. Dr. Amâncio de Carvalho</td>
						<td>Coletora</td>
						<td>Interrompido</td>
						<td>1</td>
						<td>1 a 2</td>
						<td>2</td>
						<td>Não</td>
						</tr>
						<tr>
						<td rowspan="2">Jardim Paulista</td>
						<td>Av. Brigadeiro Luís Antônio </td>
						<td>N3</td>
						<td>Interrompido</td>
						<td>1</td>
						<td>2 (faixa exclusiva de ônibus)</td>
						<td>2</td>
						<td>Não</td>
						</tr>
						<tr>
						<td>Av. Brasil</td>
						<td>N3</td>
						<td>Interrompido</td>
						<td>2</td>
						<td>3 a 4</td>
						<td>2</td>
						<td>Sim</td>
						</tr>
					</table>
					<div class="fonte">
						Fonte e Elaboração: <b>TTC, 2020</b>
					</div>
				</div>

				<p>O acesso ao futuro empreendimento poderá ser feito pelas ruas Manoel da Nóbrega, Abílio Soares e Av. Marechal Estênio Albuquerque Lima.</p>

				<h4>Rede de Transporte Coletivo</h4>
				<p>A partir da caracterização dos elementos relativos à mobilidade urbana, verifica-se que a Linha 2 Verde do metrô, sobretudo a estação Brigadeiro (a de maior proximidade com o equipamento), apesar de estar no limite da área de abrangência definido, garante o atendimento do transporte coletivo da região, servindo também como ponto de abastecimento para o transporte sobre pneus e por linhas de ônibus.</p>

				<imagem :dados="{
					caption: 'Mapa 24: Rede de Transporte Coletivo Existente',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image45.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<p>O transporte motorizado coletivo foi identificado como principal modal utilizado na zona OD (zona da RMSP) onde localiza-se o Complexo – em torno de 37%, índice que pode ser otimizado na medida em que se provêm melhorias e vantagens para os usuários através de maior rapidez nos deslocamentos, conforto e segurança para o pedestre durante todo o percurso, contribuindo assim, para um maior desincentivo ao uso do transporte individual. </p>
				<p>Como apontamentos futuros em consonância com o Plano Diretor (Lei 16.050/2014), que visa o desestímulo ao uso de transporte individual, priorizando o uso do transporte coletivo e ativo, abaixo segue o Mapa da Rede de Transporte Coletivo planejada, em que são previstos melhoramentos viários, linha e estação de metrô e corredores de ônibus.</p>

				<imagem :dados="{
					caption: 'Mapa 25: Rede de Transporte Coletivo Planejada',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image46.jpg'),
					fonte: 'Mapa 11, da Lei 16.050/14. Elaboração: LEVISKY, 2020'
				}" />

				<h4>Micro acessibilidade</h4>
				<h5>Circulação de Pedestres</h5>
				<imagem :dados="{
					caption: 'Mapa 26: Melhoramento de calçadas',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image47.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<p>Com relação ao transporte ativo de pedestres, considerando que as calçadas também fazem parte do sistema viário e podem influenciar diretamente no modelo de deslocamento mais utilizado, observa-se que no entorno imediato do Complexo coexistem trechos com calçadas amplas e em boas condições e trechos com baixo nível de acessibilidade e segurança.</p>
				<p>No âmbito do Projeto Pedestre Seguro, várias vias prioritárias do município passaram pelas intervenções do Programa Operacional de Segurança – POS, dentre elas a Av. Brigadeiro Luís Antônio, localizada na área de influência, que passou por intervenções no âmbito do Programa Operacional de Segurança.</p>
				<p>Tal programa possui três frentes de ação: revisão do tempo de ciclo semafórico - maior tempo de travessia e aumento do número de oportunidades para travessia, revitalização da sinalização, e maior presença do operador de trânsito na via. O objetivo com essa tríade de ação é conferir maior conforto e segurança ao pedestre, contribuindo para a redução da ocorrência de atropelamentos e que resultou num aumento entre 12 e 25% no tempo de travessia para pedestres.</p>
				<p>Segundo vistoria realizada no local, pode-se observar ainda que o caminhamento de pedestres é caracterizado em alguns trechos pela insuficiência de áreas para circulação adequadas (calçadas com largura incompatível), falta de segurança para os pedestres (pavimento desnivelado ou sem manutenção) e sem a devida acessibilidade para pessoas portadoras de necessidades especiais.</p>
				<p>Quanto à qualidade do passeio público, observa-se que na Rua Manoel da Nóbrega a existência de desníveis junto as divisas de lotes e/ou a má conservação do passeio, fato esse que se verifica também em outras ruas da região. Entretanto, vale destacar que a maioria das calçadas da mesma região apresentam boas condições de acessibilidade e segurança.</p>
				<p>É importante destacar que, em dias de eventos, a quantidade de pedestres no entorno do Complexo é intensificada e a calçada, muitas vezes, não é capaz de absorver esse acréscimo, fazendo como que os pedestres caminhem pelo leito carroçável, comprometendo assim, sua segurança<sup>13</sup>.</p>

				<ol class="notas" start="13">
					<li>Diagnóstico e Diretrizes Gerais de Mobilidade”, Relatório Técnico elaborado por TTC.</li>
				</ol>

				<h4>Sistema Cicloviário</h4>
				<p>Segundo a CET, a cidade de São Paulo possui 503,6 km de vias com tratamento cicloviário permanente, sendo 473,3 km de Ciclovias/Ciclofaixas e 30,3 km de Ciclorrotas. Para usufruir da integração modal o ciclista conta com 7.110 vagas em 77 Bicicletários públicos e 432 vagas em 27 locais com Paraciclos públicos, instalados nos Terminais de Ônibus, nas Estações de Trem, Metrô e Estacionamentos CET. </p>

				<p>A região em estudo é bem servida pela rede cicloviária, como é o caso da R. Manoel da Nóbrega, R. Paulino Camasmie, R. Honduras, R. Sargento Kozell Filho, R. Tutóia, R. Dr. Rafael de Barros, além da Av. Paulista/ R. Vergueiro, que apesar de estar fora da área de estudo é uma importante ligação que dá acesso à área do entorno do Ginásio, se consolidou como um importante eixo de ligação cicloviário do município. Entretanto em vistorias realizadas no local, é possível observar que algumas dessas ciclovias necessitam de algum tipo de requalificação, como recapeamento e nova sinalização, conforme ilustrado nas fotos a seguir.</p>

				<imagem :dados="{
					caption: 'Mapa 27: Rede Cicloviária Existente',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image48.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<p>Portanto, o sistema cicloviário, apesar de apresentar uma boa rede de infraestrutura na região em estudo, alguns trechos necessitam de requalificação. Ainda, inexiste uma conexão entre o Complexo e o Parque do Ibirapuera.</p>

				<h4>Patrimônio Histórico e Cultural</h4>
				<p>O Complexo Constâncio Vaz carrega em si efetiva atuação no desenvolvimento evolutivo do esporte no país. No Complexo ocorreram eventos que traduzem a evolução das atividades esportivas no país, processo esse em que o autor do projeto, o arquiteto Ícaro de Castro Mello, teve grande importância. </p>

				<p>No entorno, diversos exemplares urbanos e arquitetônicos de notável relevância, reconhecida pelos órgãos de preservação municipal, estadual e federal, CONPRESP ─ Conselho Municipal de Preservação do Patrimônio Histórico, Cultural e Ambiental da Cidade de São Paulo e CONDEPHAAT ─ Conselho de Defesa do Patrimônio Histórico, Arqueológico, Artístico e Turístico do Estado e IPHAN – Instituto do Patrimônio Histórico e Artístico Nacional, respectivamente, compõem a paisagem da região, tais como o próprio Parque do Ibirapuera, tombado pelas Resoluções nº. 01/CONDEPHAAT/92 e nº. 06/CONPRESP/97, e ainda registrado no Livro do Tombo IPHAN através do Processo 1429-T-98, o Bairro dos Jardins América, Europa, Paulista e Paulistano, cujo tombamento foi reconhecido pela Resolução Ex-Officio nº. 05/CONPRESP/91, e posteriormente pelas Resoluções nº. 02/CONDEPHAAT/86 e nº. 07/CONPRESP/04. </p>

				<p>Vale esclarecer que o Complexo em questão não é classificado como patrimônio cultural pelos órgãos de preservação, tampouco está inserido em área envoltória de outros bem tombados encontrados na região, como se pode verificar nas figuras a seguir:</p>

				<imagem :dados="{
					caption: 'Mapa 28: Patrimônio Cultural',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image49.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<p>A Lei Municipal 16.402/16, LPUOS, reforça a importância deste entorno com a demarcação de zonas de uso ZEPEC – Zona Especial de Preservação Cultural (Mapa 02, LPUOS) e indicação de novos elementos ao tombamento, através da demarcação de Bens Imóveis Representativos (BIR).</p>

				<imagem :dados="{
					caption: 'Mapa 29: Imóveis e Territórios Enquadrados como ZEPEC e Indicados para Tombamento',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image50.jpg'),
					fonte: 'Mapa 02, da Lei 16.402/2016. Elaboração: LEVISKY, 2020'
				}" />

				<imagem :dados="{
					caption: 'Mapa 30: Patrimônio Cultural – CONDEPHAAT',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image51.jpg'),
					fonte: 'Geosampa | IDE-SP - Secretaria da Casa Civil. Elaboração: LEVISKY, 2020'
				}" />

				<p>Conclui-se daí que o território onde o Complexo está inserido caracteriza-se por uma área de valorosas características históricas, sociais e culturais, cuja significância de sua identidade é socialmente reconhecida pela população.</p>
				<p>Nesse contexto, vale dizer que a valorização do patrimônio cultural desta região é objetivo do Município, expresso no PDE e no PRS, a ser viabilizado por meio da realização de ações articuladas para melhoria de infraestrutura, turismo, da economia criativa e de desenvolvimento sustentável. Este claramente traduz-se em medidas de preservação e qualificação dos bens tombados, assim como também na promoção de programas de resgate da memória da cidade.</p>
				<p>É neste contexto de resgate e ênfase da memória, sobretudo esportiva e cultural da cidade que se enquadra o Complexo Constâncio Vaz. A valorização das ações culturais e esportivas realizadas na cidade compõe o grande ativo do local, muito além das suas estruturas físicas e espaciais que não se enquadram como bens tombados aos olhos dos órgãos de preservação, tampouco estão classificadas como ZEPEC nos termos da legislação urbanística municipal.</p>

				<h4>Comando da Aeronáutica ─ COMAER: Altura máxima permitida</h4>
				<p>Em consulta prévia realizada pela GPC Assessoria Aeroportuária, a área em tela está inserida na Superfície Cônica – Aeroporto de Congonhas, São Paulo/SP, em altitude base de 770,00m com altitude máxima permitida da zona até a cota 870,00m. </p>
				<p>A área não está inserida em Zona de Proteção de Auxílio a Navegação Aérea, tampouco de Corredores de Voo ou Procedimentos de Aproximação e Saída, desta forma, não há interferência destes instrumentos sobre a área.</p>
				<p>No entanto o imóvel está dentro da Zona de Proteção de Helipontos, Rampa de Aproximação 01 – Heliponto Edifício Comercial Lorena, São Paulo/ SP (SICZ), condição que reduz a altitude máxima permitida à cota 822,00m (a partir da cota 770,00m), resultando na Altura máxima permitida de 52,00m – considerando antenas, pararaios, caixa d’água ou helipontos.</p>
				<p>A consulta realizada não dispensa a obtenção de anuência da aeronáutica para o aproveitamento acima descrito.</p>
				<p>A análise foi realizada com base na Portaria nº. 957/GC3, de 15 de outubro de 2015, e demais legislações correlatas.</p>

			</section>

			<section>
				<h3 class="titulo" indent="1">Diagnóstico Ambiental</h3>
				<comments v-if="consultaAtiva" :attr="{id: 3, context:'Diagnóstico ambiental'}" />
				<h4>Meio Físico</h4>
				<p>A área de intervenção caracteriza-se por terreno com pequeno aclive, tendo variação aproximada de 7 metros a partir da Rua Manoel da Nóbrega até a Av. Abílio Soares.</p>
				<p>O entorno do Complexo é cruzado pelo Córrego do Sapateiro  ao Sul e Córrego Iguatemi ao Norte, ambos canalizados sob as principais vias de deslocamento da cidade, cujas respectivas microbacias, homônimas, formam a Bacia Hidrográfica do Rio Pinheiros.</p>
				<p>Ao desenvolver as diretrizes de deslocamento em seu processo de desenvolvimento, a cidade de São Paulo transformou radicalmente seu território natural ao avançar sobre as áreas de várzea disponíveis em seu território, e sobretudo, devido a retificação e a canalização de muitos dos rios e córregos, o que provocou áreas de enchentes, especialmente no entorno do Parque Ibirapuera. Neste caso, vale ressaltar que a canalização dos Córregos Iguatemi e do Sapateiro resultou na formação de áreas de enchente, especialmente no entorno do Parque do Ibirapuera e à Noroeste da área em estudo, denominada como Área Sujeita à Recalques e Problemas Geotécnicos (III Perímetro Tutóia). No entanto, nota-se que a área de intervenção não está classificada como área sujeita a recalques e alagamentos.</p>

				<imagem :dados="{
					caption: 'Mapa 31: Bacias Hidrográficas',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image52.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<p>No ano de 2018, segundo dados do Observa Sampa, na subprefeitura de Vila Mariana foram registradas 15 ocorrências de alagamento, ao passo que, na subprefeitura de Pinheiros, constaram 19 registros.</p>
				<p>Especificamente sobre a área do Complexo, situado na microbacia do Córrego do Sapateiro, em consultas  realizadas junto à EMPLASA e bases oficiais municipais não foi identificado córrego, corpo d’água ou nascente que interfira diretamente sobre a área de estudo.</p>
				<p>Em análise realizada a partir da Carta Geotécnica do Município de São Paulo (2015), é possível identificar que a área do Complexo está situada sobre Sedimento Terciário  . Os sedimentos terciários se estendem predominantemente pelas áreas centrais do município de São Paulo. Ressalta-se como principal problema para a ocupação destas áreas o recalque diferencial na camada mais superficial de argila porosa e dificuldades de escavação, tanto nos solos superficiais como nos sedimentos desta unidade (2006, EMPLASA). Ao Sul, a geomorfologia do entorno é caracterizada como Planície Fluvial (várzeas)   formada pelo do Córrego do Sapateiro, a qual abrange boa parte do Parque do Ibirapuera e imediações. </p>

				<imagem :dados="{
					caption: 'Mapa 32: Carta Geotécnica',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image53.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<ol class="notas" start="14">
					<li>O córrego Sapateiro faz parte do Programa Córrego Limpo, realizado em parceria entre a Prefeitura e o Governo do Estado.</li>
					<li>Consultas junto à PROJ-4/SIURB-PMSP e Emplasa.</li>
					<li>“(…) dos processos de preenchimento sedimentar dessa Bacia (Sedimentar de São Paulo) é representada por depósitos relacionados a antigas planícies aluviais de rios entrelaçados.”, (GEO Cidade de São Paulo: Panorama do Meio Ambiente Urbano, 2004).</li>
					<li>A planície sedimentar fluvial caracteriza superfícies pouco acidentadas e/ ou normalmente planas, formada pelo acúmulo de sedimentos provenientes de áreas mais altas que a rodeiam. A planície sedimentar fluvial possui capacidade de absorção baixa, pois o lençol freático se encontra elevado e o solo se satura rapidamente. (TUCCI E CORDEIRO, 2004).</li>
				</ol>

				<p>Segundo relatório de sondagens realizado pela Avanza Engenharia, o solo superficial do terreno possui baixa capacidade de carga, o que sugere que os edifícios a serem construídos futuramente deverão possuir fundação profunda. </p>
				<p>No caso de execução de subsolos, em função da presença de água em cota variável de -3,00m a -4,00m e, principalmente, da camada de aluvião com níveis iniciais próximos de -2,00m, sugere-se que sejam tomadas medidas tecnicamente adequadas de contenção para construção de subsolos. </p>

				<h4>Áreas Verdes</h4>
				<p>Com base nos dados do Plano Regional das Subprefeituras de Vila Mariana e Pinheiros<sup>18</sup> (Decreto nº 57.537/2016), ambas as regiões apresentam dados satisfatórios relativos à qualidade ambiental e paisagística, visto que são marcadas pela presença de bairros jardim – considerados Patrimônio Ambiental<sup>19</sup>, caracterizados pela sua ampla cobertura vegetal, além de contarem também com a existência do Parque Municipal do Ibirapuera. Os dados relativos às áreas verdes consideradas no mapa abaixo, em alguns pontos se sobrepõem, de acordo com as seguintes bases:</p>
				<ul>
					<li>De acordo com o PDE – Mapa 05, vê-se a categorização do Parque do Ibirapuera como parque urbano municipal (VM_01);</li>
					<li>LPUOS – Lei 16.405/2016, vê se a demarcação de ZEPAM e Praças e Canteiros, no perímetro das zonas;</li>
					<li>Levantamento das reservas de Mata Atlântica, realizado no âmbito do Plano Municipal da Mata Atlântica – PMMA, cuja demarcação foi disponibilizada pelo portal Geosampa. </li>
				</ul>

				<p>Embora no interior do terreno não tenham sido encontradas áreas verdes consideradas significativas para órgãos de proteção, nas suas imediações, sobretudo no Parque do Ibirapuera, vê-se a presença de remanescentes da Mata Atlântica (Resolução Conama 01/94), além de outras áreas destinadas à preservação e proteção do patrimônio ambiental. </p>

				<imagem :dados="{
					caption: 'Mapa 33: Áreas Verdes',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image54.jpg'),
					fonte: 'Mapa 05, da Lei nº 16.050/2014, Mapa 01 da Lei nº 16.402/2016, Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<p>Na tabela a seguir estão listadas as áreas verdes<sup>20</sup> de cada Subprefeitura sob estudo e suas análises com base na população e área total. A subprefeitura Vila Mariana, onde está inserido o Complexo, tem 3,71% de seu território ocupado por áreas verdes. Já a subprefeitura Pinheiros registrou um percentual maior de área verde, 5,81%, sendo que</p>
				<p>Considerando a distribuição de área verde por habitante, as subprefeituras Vila Mariana e Pinheiros não chegam à metade dos 12m² recomendados pela Organização Mundial de Saúde.</p>

				<div class="table-container">
					<tabela-csv
						:titulo="'Tabela 17: Áreas verdes, 2017'"
						:colunas="['Unidades Territoriais', 'Área Total', 'Área Verde (m²)', 'População', 'Percentuais de Área Verde (PAV)%', 'Área Verde por Habitante (IAV) m²' ]"
						:linhas="[
							[ 'Município de São Paulo', '1.527.535.804', '194.138.890', '11.696.088', '12,71', '16,60' ],
							[ 'Pinheiros (Subprefeitura)', '31.991.417', '1.880.420', '490.054', '5,81', '3,80' ],
							[ 'Vila Mariana (Subprefeitura)', '26.985.558', '1.002.514', '295.133', '3,71', '3,40' ]
						]"
						:fonte="'SVMA, IBGE. Elaboração: LEVISKY, 2020.'"
					/>
				</div>
				<p>De acordo com a Carta de Vegetação Significativa número 34 disposta no Decreto Estadual nº30.443, de 20 de setembro de 1989, a área do terreno do Complexo não se classifica como área de patrimônio ambiental, no entanto, os exemplares arbóreos existente na Rua Abílio Soares são considerados imunes de corte.</p>

				<imagem :dados="{
					caption: 'Mapa 34: Patrimônio Ambiental',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image55.jpg'),
					fonte: 'Geosampa, Carta de Vegetação Significativa, Decreto nº 30.443/1989. Elaboração: LEVISKY, 2020.'
				}" />

				<p>No interior do terreno não foi identificada vegetação considerada de mata atlântica (Floresta Ombrófila) de acordo com a Resolução Conama 01/94. Também não foi observada a presença de Vegetação de Preservação Permanente nos termos da Lei Municipal 10.365/87.</p>
				<p>No entanto, de acordo com relatório técnico preliminar elaborado pela Legal Tree Consultoria e Engenharia em Meio Ambiente, foram identificadas em campo seis áreas de maciço/aglomerados  de árvores a serem consideradas neste, demarcados na imagem que segue:</p>

				<imagem :dados="{
					caption: 'Mapa 35: Aglomerados Arbóreos',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image56.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<p>Vale destacar, que o relatório supracitado apontou também que os maciços/ aglomerados identificados apresentam vegetação heterogênea, incluindo espécies nativas e exóticas, sendo algumas delas exemplares significativos para o órgão ambiental como: Pau-ferro, Canafistula, Sibipiruna e Ipês. Entretanto, destes avaliados, mais de 50% apresentam problemas fitossanitários, como grandes lesões na sua estrutura, presença de parasitas, principalmente cupim, entre outras ocorrências, e serão tratados como diretrizes ambientais prioritárias neste PIU.</p>

				<ol class="notas" start="18">
					<li>Caderno de Proposta dos Planos Regionais das Subprefeituras – Quadro Analítico Vila Mariana. Disponível em: <https://gestaourbana.prefeitura.sp.gov.br/> Acesso em: 10 outubro  de 2019.</li>
					<li>A vegetação arbórea dos bairros-jardim é considerada Patrimônio Ambiental e é protegida pelo Decreto Estadual 30.443/89</li>
					<li>Este indicador é obtido a partir da somatória das áreas verdes de propriedade pública, criadas e geridas pelo Poder Público Municipal e Estadual. Estão incluídos neste indicador todos os parques públicos urbanos municipais, parques estaduais urbanos, praças e todas as Unidades de Conservação de Proteção Integral definidas pelo Sistema Nacional de Unidades de Conservação – SNUC, efetivamente implantadas na cidade. </li>
					<li>Grupo com no mínimo 15 árvores de espécies nativas ou exóticas, que vivem em determinada área, tendo área mínima de 500m² de projeção contínua de copa.</li>
				</ol>

				<imagem :dados="{
					caption: 'Imagem 10: Exemplares arbóreos presentes no terreno (01 – Pau Ferro; 02 – Ipê Branco; 03 – Sibipuruna)',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image57.jpg'),
					fonte: 'Relatório Técnico preliminar, Legal Tree Consultoria e Engenharia em Meio Ambiente, 2020.'
				}" />

				<p>Estima-se que ao menos 50% dos exemplares apresentam problemas fitossanitários, como grandes lesões na sua estrutura, presença de parasitas, principalmente cupim, entre outras ocorrências. </p>

				<h4>Parque do Ibirapuera</h4>

				<p>A história do Parque do Ibirapuera e do Complexo Constâncio Vaz de Melo estão estreitamente interligadas, posto que, foi através da partilha de terrenos que compunham o Parque, no contexto de comemoração do IV Centenário de São Paulo – momento em que a cidade ensejava refletir sua modernidade e monumentalidade através de símbolos de progresso – que se deu a construção do Ginásio do Ibirapuera e do velódromo do Complexo. </p>

				<p>Como é possível notar na imagem abaixo, o Mapa Geral do Parque Ibirapuera produzido pela Comissão do IV Centenário discrimina a construção do ginásio, indicado pelo número 7 da legenda.</p>

				<imagem :dados="{
					caption: 'Mapa 36: Mapa Geral do Parque Ibirapuera – Comissão do IV Centenário, São Paulo – 1954',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image58.jpg'),
					fonte: 'http://www.bienal.org.br/post/1089. Acessado em novembro 2019'
				}" />

				<p>Idealizado por uma equipe composta por grandes ícones da arquitetura brasileira como Oscar Niemeyer, Zenon Lotufo, Eduardo Kneese de Mello, Ícaro de Castro Melo, entre outros, o Parque do Ibirapuera foi inaugurado em 1954 e, desde então, se tornou um marco paisagístico e arquitetônico na cidade de São Paulo. </p>
				<p>São 160 hectares destinados ao lazer e contemplação da população, o que o coloca em local de destaque tanto nacional, como internacionalmente, haja vista, sua avaliação como um dos melhores parques urbanos do mundo<sup>22</sup>.</p>
				<p>Atualmente, de acordo com dados disponibilizados no seu site<sup>23</sup>, o Parque do Ibirapuera é o parque mais visitado da América do Sul, com visitação aproximada de 14 milhões de pessoas por ano.</p>
				<p>Devido à sua grande variedade de vegetação, também pode ser considerado um jardim botânico, abrigando, por exemplo, mais de quinhentas espécies de árvores nativas e exóticas como jacarandá mimoso, ipês, jatobá, pau ferro, entre outras. Sua fauna é igualmente diversa, composta, principalmente, por uma grande diversidade de aves, sendo algumas espécies nativas, como os Sabiás e Tico-ticos, e outras visitantes, como é o caso da Araponga e Tucano-toco.</p>
				<p>Desde 2003, a gestão do parque foi feita pelo Conselho Gestor do Parque do Ibirapuera e a administração pelo Departamento de Parque e Árvores Verdes da Prefeitura de São, Paulo. Entretanto, atualmente, assim como o Complexo em estudo, passa por processo de concessão<sup>24</sup> juntamente com outros seis parques públicos, cujo objetivo inclui unificar a gestão, recuperar a infraestrutura, dar melhores condições de uso dos ambientes e equipamentos, ampliar e requalificar os serviços e reforçar a segurança para o público.</p>

				<imagem :dados="{
					caption: 'Imagem 11: Parque do Ibirapuera',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/imagem11.jpg'),
					fonte: 'Site do Parque < https://www.ibirapueraparque.com.br> Acesso em: outubro 2019'
				}" />

				<p>Haja vista a proximidade entre o Parque do Ibirapuera e o Complexo e, entre estes e o grande conjunto de praças e áreas verdes das imediações, sobre tudo do Bairro Universitário da Vila Mariana e os bairros Jardim e ainda a Avenida Paulista, onde estão concentrados espaços de lazer e cultura, prevê-se a consolidação de um novo eixo cultural-esportivo-lazer na cidade de São Paulo.</p>
				<p>Embora os conceitos de esporte e lazer se apresentem como termos distintos, segundo o Plano Municipal de Esportes e Lazer (2028-2025), entende-se que <i>"o esporte se vincula ao conceito de lazer, ao poder ser vivenciado em um tempo e espaço conjunto, como uma das possibilidades do conteúdo físico-esportivo, apresentando-se como o Esporte de Participação ou Esporte Lazer (...)</i>".</p>
				<p><b>Deste modo, o novo eixo a ser formado, se tornará um elemento de integração e conexão social, de desenvolvimento humano, na promoção de saúde, fomentando melhores condições para o exercício da cidadania esportiva e de lazer e convivência da população paulistana.</b></p>


				<ol class="notas" start="22">
					<li>Em 2015, o jornal britânico The Guardian fez um ranking com os “10 melhores parques” urbanos do mundo, no qual o Parque do Ibirapuera aparece entre os listados. <a href="http://www.saopauloinfoco.com.br/ibirapuera-esta-entre-os-10-melhores-parques-do-mundo/">http://www.saopauloinfoco.com.br/ibirapuera-esta-entre-os-10-melhores-parques-do-mundo</a>. Acesso em novembro 2019.</li>
					<li><a href="https://parqueibirapuera.org">https://parqueibirapuera.org</a>. Acesso em: 23 outubro de 2019.</li>
					<li>Dados sobre o processo de concessão do parque <a href="https://www.ibirapueraparque.com.br">https://www.ibirapueraparque.com.br</a>Acesso em 24 outubro de 2019.</li>
				</ol>

				<h4>Arborização Viária</h4>
				<p>Embora não tenha sido considerada no cálculo de áreas verdes de cada subprefeitura, entende-se que a arborização é de grande importância para a cidade. Segundo o Manual Técnico de Arborização Urbana<sup>25</sup> disponibilizado pela prefeitura, as árvores urbanas desempenham funções importantes que vão desde o conforto térmico e bem-estar psicológico dos seres humanos até a prestação de serviços ambientais indispensáveis à regulação do ecossistema.</p>
				<p>Nas subprefeituras de Vila Mariana e Pinheiros a arborização viária é considerada expressiva, com árvores de grande porte situadas nos passeios de suas alamedas, nos canteiros centrais de grandes avenidas, porém, particularmente na subprefeitura de Pinheiros, foi constatado, com base nos dados do PR, que suas árvores apresentam uma série de problemas de ordem fitossanitária como infestação de cupins. </p>

				<div class="table-container">
					<tabela-csv
						:titulo="'Tabela 18: Áreas verdes, 2017'"
						:colunas="['Unidades Territoriais', 'Nº de Árvores no Sistema Viário']"
						:linhas="[
							[ 'Município de São Paulo', '6.552.000' ],
							[ 'Pinheiros (Subprefeitura)', '49.895' ],
							[ 'Vila Mariana (Subprefeitura)', '32.673' ]
						]"
						:fonte="'SVMA, IBGE. Elaboração: LEVISKY, 2020.'"
					/>
				</div>

				<imagem :dados="{
					caption: 'Mapa 37: Arborização Viária',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image60.jpg'),
					fonte: 'Geosampa. Elaboração: LEVISKY, 2020'
				}" />

				<ol class="notas" start="25">
					<li>Manual disponível: <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/meio_ambiente/publicacoes_svma/index.php?p=188452">https://www.prefeitura.sp.gov.br/cidade/secretarias/meio_ambiente/publicacoes_svma/index.php?p=188452</a>. Acessado em outubro, 2019.</li>
				</ol>

				<h4>Áreas Contaminadas</h4>
				<p>A Companhia Ambiental do Estado de São Paulo (CETESB,2016), responsável pela avaliação dos processos que envolvem áreas contaminadas no Estado, define uma área contaminada como:</p>

				<ul>
					<li>Um caso particular de uma área degradada, onde ocorrem alterações principalmente das propriedades químicas, ou seja, contaminação; e</li>
					<li>Área, local ou terreno onde há comprovadamente poluição ou contaminação causada pela introdução de quaisquer substâncias ou resíduos que nela tenham sido depositados, acumulados, enterrados ou infiltrados de forma planejada, acidental ou até mesmo natural. </li>
				</ul>

				<p>De acordo com a legislação em vigor – Lei nº 13.577/2009 – área contaminada é definida como: “área, terreno, local, instalação, edificação ou benfeitoria que contenha quantidades ou concentrações de matéria em condições que causem ou possam causar danos à saúde humana, ao meio ambiente ou a outro bem a proteger.”</p>
				<p>Os materiais contaminantes ou poluentes presentes nessas áreas contaminadas podem ser propagados para a água superficial e subterrânea, pelo solo superficial ou subsuperficial e pelo ar, podendo alterar a qualidade ambiental da propriedade e, consequentemente do seu entorno. Tais substâncias podem causar danos à saúde e ao bem-estar da população; à fauna e à flora; à qualidade do solo, das águas e do ar; aos interesses de proteção à natureza/paisagem; à infraestrutura da ordenação territorial e ao planejamento regional e urbano; e a segurança e ordem pública. </p>
				<p>No imóvel em análise não foram encontrados registros de contaminação. No entanto, no seu entorno foram observados 4 pontos de áreas contaminadas em processo de reutilização, 2 pontos de áreas em processo de monitoramento para encerramento, 4 pontos em áreas em processo de remediação e, 10 pontos de áreas reabilitadas para uso declarado, vistos a seguir:</p>

				<imagem :dados="{
					caption: 'Mapa 38: Áreas contaminadas e reabilitadas (2018)',
					tipo: 'coluna',
					url: src('arquivos/ginasio-ibirapuera/img/image61.jpg'),
					fonte: 'CETESB. Elaboração: LEVISKY, 2020'
				}" />
		</section>

		<section>
			<h2 class="titulo" indent="1">Programa de Interesse Público</h2>
			<comments v-if="onsultaAtiva" :attr="{id: 3, context:'Programa de Interesse público'}" />
			<p>O modo como vivemos nas cidades se redesenha dia a dia através de transformações políticas, sociais, econômicas, culturais, ambientais e tecnológicas. O dinamismo dessas transfigurações, e das articulações entre políticas setoriais e território, se dá no espaço público ─ local onde as questões sociais, econômicas, culturais, políticas e ambientais se desenvolvem e se materializam como resultado das relações do Estado com a sociedade civil. </p>

			<p>A função do espaço público é organizar a vida na cidade<sup>1</sup>, e, em meio a transformações constantes, monitorar e garantir a qualidade de vida urbana para a formação e expressão da cidadania. </p>
			<p>A falta de articulação entre as políticas setoriais aplicadas ao território resulta em problemas funcionais da cidade, gerando efeitos negativos à sua natureza urbanística, política e sociológica. </p>
			<p>Ponderando quanto à responsabilidade pela intervenção e gestão dos diversos elementos constituintes dos espaços públicos, pode-se facilmente constatar a necessidade desta efetiva articulação entre as políticas setoriais para o enfrentamento das diversas questões que emanam destes espaços e sua relação com a cidade. É nesta conjuntura que se compreende a realidade do Complexo Desportivo Constâncio Vaz Guimarães. </p>
			<p>Portanto, ante às tratativas iniciadas entre a Prefeitura Municipal e o Governo do Estado de São Paulo figura o objetivo comum de recuperação urbanística e reversão do presente cenário de gradual subutilização e progressiva redução das atividades no Complexo, por meio da consolidação do Projeto de Intervenção Urbana do Complexo Desportivo Constâncio Vaz Guimarães - PIU Ginásio do Ibirapuera, que ora se inicia, visando a definição de parâmetros urbanísticos para a concessão onerosa deste Complexo.</p>
			<p>Vale destacar a primordial preocupação deste PIU com a função social deste equipamento cultural e desportivo bem como com a sua relação com seu entorno. Tais aspectos estarão identificados e abordados neste programa de interesse público, tocando em questões relativas aos conflitos de mobilidade e micro acessibilidade, aos parâmetros de incomodidade e à vizinhança imediata, potencialmente impactada por eventos de grande porte. E ainda à oportunidade de integração qualificada deste equipamento com o Parque do Ibirapuera, bem como com o agrupamento de equipamentos culturais mais concentrados na região da Av. Paulista e nas imediações da Subprefeitura de Vila Mariana, com vistas a consolidar e fortalecer um verdadeiro eixo cultural, esportivo e de lazer. Além também, à oferta de serviços e comércio no âmbito do bairro, que apresenta demanda destas atividades. </p>

			<p>O Programa de Interesse Público do PIU Ginásio do Ibirapuera organiza-se a partir da:</p>

			<ul>
				<li>Ampliação e qualificação dos serviços públicos prestados pelo Complexo Desportivo;</li>
				<li>Ampliação dos serviços ambientais prestados à cidade (áreas verdes e drenagem);</li>
				<li>Mitigação dos padrões de incomodidade ao entorno, considerando as melhorias pretendidas pela concessão;</li>
				<li>Qualificação da acessibilidade de pedestres, ciclistas e demais modais ao complexo desportivo, melhorando sua conexão com os demais equipamentos institucionais do Polo Ibirapuera;</li>
			</ul>

			<p>Na escala local:</p>

			<ul>
				<li>Promoção de ações indutoras do desenvolvimento econômico local, especialmente pela criação de nova área de comércio e serviços de âmbito local;</li>
				<li>Oferta de oportunidades de convivência, cultura, lazer, entretenimento e integração da comunidade local; </li>
				<li>Melhora da acessibilidade e mobilidade local, garantindo a fruição pública pedonal e cicloviária, a acessibilidade e o desenho universal, de acordo com o Plano de Mobilidade de São Paulo - PLANMOB;</li>
				<li>Integração do Parque Ibirapuera a equipamentos culturais, esportivos e de lazer propostos para promover um circuito e potencializar os usos, através da qualificação das conexões, trajetos e acessos para pedestres e ciclistas;</li>
				<li>Melhora das condições de circulação de pedestres para proporcionar maior segurança, alargando as calçadas, aumentando a permeabilidade do solo,  com implantação de acessibilidade universal;</li>

				<li>Melhora das condições de circulação de ciclistas, garantindo o acesso dentro da área de intervenção, favorecendo trajeto adequado e seguro, e em complemento ao sistema cicloviário, garantindo sua conexão com o Parque Ibirapuera e ainda instalando paraciclos dentro do lote; </li>

				<li>Qualificação e valorização da área, ampliando e melhorando os espaços de uso público, evidenciando os passeios como áreas de uso comum e favorecendo a realização de atividades de integração da população com o espaço que proporcionem o convívio social e a identidade local.</li>
				<li>Melhora das incomodidades geradas pelo excesso de veículos estacionados nas vias, seja em dias de eventos seja no atendimento de demandas presentes na envoltória através da oferta de vagas de estacionamento;</li>
				<li>Tratamento das incomodidades geradas pelo ruído e impactos na vizinhança provenientes de grandes eventos;</li>
				<li>Tratamento das atuais incomodidades e riscos gerados pela insegurança proveniente de áreas ociosas e subutilizadas;</li>
				<li>Qualificação da paisagem urbana, promovendo, através da renovação do Complexo, a construção de novas edificações e espaços de acesso público bem cuidados e com garantia de manutenção no tempo;</li>
				<li>Qualificação das condições de segurança, manutenção e limpeza do equipamento de cultura e esporte;</li>
				<li>Ampliação das vocações do complexo para além da cultura e esporte, agregando oportunidades de atendimento às demandas comerciais, de serviços, negócios e lazer;</li>
				<li>Qualificação do entorno, a partir da instalação de equipamento de padrão internacional com alta qualidade tecnológica, de gestão e manutenção.</li>
			</ul>

			<p>Na escala regional:</p>

			<ul>
				<li>Melhora da acessibilidade e mobilidade regional, de acordo com o Plano de Mobilidade de São Paulo - PLANMOB;</li>
				<li>Melhora das condições de acesso ao transporte público coletivo no entorno do Complexo;</li>
				<li>Estímulo à qualificação dos parques existentes, promovendo especialmente a interconexão sobretudo entre o Complexo e o Parque do Ibirapuera;</li>
				<li>Colaboração na interconexão entre equipamentos públicos e privados de lazer, esporte e cultura, atuando como potencial núcleo multiuso de integração entre os equipamentos situados na região da av. Paulista bem como das imediações da Subprefeitura da Vila Mariana;</li>
				<li>Integração aos equipamentos de cultura, lazer, saúde, esporte e entretenimento pertencentes ao Bairro Universitário da Vila Mariana;</li>
				<li>Incentivo à conservação do Patrimônio Ambiental do entorno, enfatizando o eixo de preservação ambiental ao longo da Av. Abílio Soares;</li>
				<li>Estímulo à fruição pública gratuita de equipamentos esportivos do Complexo, em consonância com o Plano Municipal de Esportes;</li>
				<li>Minimização dos impactos na rede de drenagem pública por meio de soluções tecnológicas aplicadas às novas infraestruturas prediais do novo Complexo;</li>
			</ul>

			<p>Na escala metropolitana e estadual: </p>
			<ul>
				<li>Desoneração dos gastos públicos, preservando e favorecendo a aplicação de recursos em políticas públicas essenciais, através da concessão de uso prevista;</li>
				<li>Oferta de equipamento cultural e esportivo de padrão internacional, capaz de incluir a cidade de São Paulo na rota dos grandes eventos;</li>
				<li>Oferta de equipamento multiuso capaz de ampliar as possibilidades de atratividade do Complexo tanto para o público local, quanto para o regional e turístico;</li>
				<li>Estímulo ao turismo esportivo, cultural e coorporativo através da oferta de equipamento provido de qualidades tecnológicas e urbanas; </li>
			</ul>
			<p>Para tanto, o presente Programa de Interesse público considera as informações constantes no Levantamento e Diagnóstico Socioterritorial em que foram identificadas as carências e oportunidades do território em questão, a fim de apresentar diretrizes que irão favorecer a utilização mais intensiva do equipamento, reconhecendo seu valor social, cultural e esportivo, além de contribuir para o desenvolvimento urbano local e da cidade.</p>

			<p>É importante reiterar que um novo modelo de gestão do Complexo, que contemple sua modernização, e ainda, a continuidade dos programas esportivos hoje existentes com a justa fruição da população ao equipamento, deve ser alicerçado sobre sólida modelagem econômica, cuja captação de receitas seja respaldada tanto nas oportunidades de mercado identificadas, mas sobretudo, na vocação já consolidada do equipamento. </p>

			<p>Portanto, a viabilidade do empreendimento almejado pelo Governo do Estado depende de dois fatores: da qualificação do equipamento para sediar eventos esportivos e culturais de importância mundial, conforme seu próprio histórico; e da exploração de novas formas de uso e oportunidades de negócios, as quais poderão gerar também oportunidades de serviços em âmbito local, além do próprio empreendimento.</p>

			<p>Nesse sentido, propõe-se a Arena Multiuso coberta, nos termos da legislação estadual específica desta concessão de uso, que vem reestabelecer e reforçar a vocação original do complexo, capaz de abrigar grande capacidade de público com versatilidade tanto para os eventos esportivos, quanto aos musicais, teatrais e socioculturais, e ainda, propõe-se atividades acessórias identificadas a partir de análises estratégicas do território e oportunidades e demandas de mercado.</p>

			<p>Mundialmente esse modelo de empreendimento, na condição de centros de lazer, vêm se tornando importantes polos de atração turística. A existência de um equipamento desse padrão na cidade, incrementará o seu  potencial turístico e de negócios, gerando renda e empregos, além de oferecer à população a possibilidade de fruição de um complexo esportivo-cultural moderno, atento às novas demandas de mercado, às questões de mobilidade, às questões ambientais e às condições de incomodidade do entorno.</p>

			<p>Além do diagnóstico baseado em estudos técnicos referentes aos diversos temas que suscitam problemáticas do território, as contribuições provenientes deste processo participativo subsidiarão oportunamente diretrizes de desenvolvimento coerentes com a realidade a ser enfrentada pelo Projeto de Intervenção Urbana do Complexo Desportivo Constâncio Vaz Guimarães - PIU Ginásio do Ibirapuera, que buscará dinamizar os benefícios coletivos para toda a sociedade através da sinergia entre setor público, setor privado e sociedade.</p>

			<h3>Estudo de vocação de mercado e benchmarking</h3>
			<p>Nos termos da Lei de Concessão do Complexo – Lei nº. 17.099/2019 –  são consideradas obrigatórias a construção de uma arena multiuso coberta, que possibilite a realização de espetáculos massivos cobertos, com capacidade para comportar cerca de 20.000 (vinte mil) espectadores sentados – inexistente na cidade de São Paulo, e a destinação de espaços para a realização de atividades esportivas de fruição gratuita voltadas à saúde, ao bem-estar e ao lazer da população. </p>
			<imagem :dados="{
				caption: 'Imagem 01: Programas obrigatórios do Complexo.',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image2.jpg'),
				fonte: 'Natureza Urbana'
			}" />

			<p>Visando não somente apresentar as vantagens desta região de São Paulo quanto ao seu potencial de negócios, mas sobretudo, assegurar através de receitas acessórias a sustentabilidade econômico-financeira do empreendimento, bem como a continuidade dos programas esportivos atualmente existentes, foi realizada análise estratégica do território quanto a oportunidades de mercado, que identificou a viabilidade de implantação de atividades complementares.</p>

			<p>Como parte da metodologia, foram avaliados interdisciplinarmente os estudos técnicos apresentados por interessados da iniciativa privada na concessão onerosa do Complexo<sup>2</sup>, através de procedimento de manifestação de interesse, de forma a esclarecer os interesses potenciais do mercado para o equipamento em questão. </p>

			<p>Dos 7 (sete) estudos apresentados, 86% propuseram a criação de Centros Comerciais e Centros de Convenções, uma vez que são atividades que podem gerar um fluxo contínuo de usuários diversos durante todos os dias da semana, premissa norteadora para a definição das atividades do cenário base. </p>

			<imagem :dados="{
				caption: 'Imagem 02: Atividades propostas pelas PMI’s',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image3.jpg'),
				fonte: 'Natureza Urbana'
			}" />

			<p>O destaque da proposição de Centro Comercial se deve à sua possibilidade de associação e compartilhamento com outros usos, tais como cinema, alimentação, academia, bar, entre outros, enquanto o Centro de Convenções é devido à sua capacidade de atrair eventos de variadas naturezas como congressos, exposições e feiras.</p>

			<p>Isto posto, e a partir de questões chave apresentadas no diagnóstico socio-territorial, foram desenvolvidos 3 (três) cenários pela consultoria Natureza Urbana, cada qual contemplando usos distintos:</p>

			<ul>
				<li>O cenário 1 – <b>Negócios e Economia Criativa</b>: inclui arena multiuso, atividades esportivas, hotel, convenções, edifício multiuso, comércio e serviços. </li>
				<li>O cenário 2 – <b>Lazer, Cultura e Entretenimento</b>: inclui arena multiuso, atividades esportivas, casa de espetáculo, centro cultural e comércio e serviços.</li>
				<li>O cenário 3 – <b>Mix</b>: incluindo arena multiuso, atividades esportivas, hotel, casa de espetáculos, convenções, edifício multiuso e comércio e serviços.</li>
			</ul>

			<imagem :dados="{
				caption: 'Imagem 03: Cenários de uso ',
				tipo: 'default',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image4.jpg'),
				fonte: 'Natureza Urbana'
			}" />

			<p>O cenário 3 mostrou-se o mais adequado de acordo com as características socioeconômicas e ambientais da região, e em consonância com referências internacionais e as características territoriais da metrópole Paulistana.  O cenário 3 favorece o atendimento harmônico das demandas apontadas tanto em escala regional quanto local. No âmbito local, é evidente a necessidade de qualificação das ofertas culturais e esportivas, bem como aquelas, pouco evidentes nas imediações relativas à oferta de serviços e comércios de caráter local.  Em outras palavras, o Cenário 3 foi considerado o mais adequado por associar equipamentos de importância regional à oferta de usos mistos capazes de atender demandas diversificadas, sobretudo aquelas relativas ao bairro residencial consolidado. Desta forma, reforça-se o resultado positivo a ser gerado pela instalação de usos variados, compartilhando áreas, estruturas, horários do dia, possibilitando, assim, a sinergia entre as atividades, e caracterizando o Complexo como Centro de Entretenimento.</p>

			<p>Vale destacar que, ao contrário do estilo utilitário e estéril comumente visto nos shopping centers, os Centros de Entretenimento são mais passíveis de compor conjuntos arquitetônicos agradáveis e atrativos, combinando espaços cobertos e abertos, garantindo a fruição pública e oferecendo uma diversidade de experiências. </p>

			<p>Centros de Entretenimentos podem oferecer: </p>

			<ul>
				<li>Uma variedade de atividades e eventos programados ocorrendo nos espaços abertos, não se limitando a só acolher mobiliários urbanos.</li>
				<li>A fruição pública poderá ter lojas, cafés ao ar livre, recurso utilizado para criar uma atmosfera mais afetiva.</li>
				<li>Edificações de entretenimento como teatros, centros de convenção e arenas, integrados aos espaços abertos e com fruição pública apresentam-se como atrativos turísticos.</li>
			</ul>

			<p>Ademais, segundo a consultoria, é importante compreender a interdependência entre as atividades de comércio e entretenimento, de modo que, para que se atinja o sucesso desta sinergia, alguns pontos devem ser considerados, a partir do equilíbrio entre ambas opções em que uma se apoia na outra:</p>

			<ul>
				<li>Se o centro contém muito varejo, ele é compreendido pelo visitante como um shopping comum.</li>
				<li>Se são oferecidas muitas opções de entretenimento, as pessoas não costumam fazer compras.</li>
			</ul>

			<p>Com base nas considerações mencionadas anteriormente, como Centros de Entretenimento que se assemelham à proposta do Projeto de Intervenção Urbana do Complexo Desportivo Constâncio Vaz Guimarães - PIU Ginásio do Ibirapuera podemos citar algumas referências internacionais, como por exemplo, <em>The O2 Arena de Londres, Sony Center de Berlim e L.A. Live de Los Angeles.</em></p>

			<imagem :dados="{
				caption: 'Imagem 05: The O2 London Populous, Sony Center, L.A. l',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image6.jpg'),
				fonte: 'sites O2 London, Sony Center, L.A. Live'
			}" />

			<h5>The O2 London Populous</h5>
			<imagem :dados="{
				caption: 'Imagem 06: The O2 London Populous',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image7.jpg'),
				fonte: 'site O2 <https://www.theo2.co.uk/>'
			}" />
			<p>Projeto com oferta de esportes, música, restaurantes, bares, comércio, jogos virtuais, cinema e apresentações. </p>

			<ul>
				<li>Arena multiuso para 20 mil pessoas sentadas com partidas de esportes, shows, apresentações e outros eventos;</li>
				<li>Casa de show para 2.750 pessoas com partidas de esportes, shows, apresentações e outros eventos. </li>
			</ul>

			<h5>Sony Center, Berlin Murphy Jahn</h5>
			<imagem :dados="{
				caption: 'Imagem 07: Sony Center, Berlin Murphy Jahn',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image8.jpg'),
				fonte: 'Landscape Architecture'
			}" />
			<ul>
			<p>Área construída de 155.000m² com atividades comerciais, escritórios, cultura, cinema, praça multiuso, restaurantes e residenciais.  </p>

				<li>Praça multiuso em forma de átrio com transmissão de grandes eventos e outros eventos especiais;</li>
				<li>Restaurantes e salas de eventos além de bares, clubes noturnos e outros ambientes;</li>
				<li>Complexo de cinemas e cinemateca;</li>
				<li>Prédios de escritórios e de Residências mobiliadas para aluguel.</li>
			</ul>

			<h5>L.A. live, Los Angeles RKTL Associates </h5>

			<imagem :dados="{
				caption: 'Imagem 08: L.A. Live, Los Angeles RTKL Associates',
				tipo: 'coluna',
				url: src('arquivos/ginasio-ibirapuera/img/pip/image9.jpg'),
				fonte: '<https://www.lalive.com/> Acessado em outubro, 2020'
			}" />

			<p>Área construída de 520.260m² com usos comerciais, teatro, sede de canal de televisão, escritórios, museu, cinemas, praça multiuso, restaurantes, residências e hotéis. </p>
			<ul>
				<li>Rede hoteleira com mais de mil quartos e residencial de luxo;</li>
				<li>Praça multiuso de 3.176m² com transmissão de grandes eventos e outros eventos especiais.</li>
				<li>Centro comercial, restaurantes e salas de eventos além de bares, clubes noturnos e outros ambientes;</li>
				<li>Teatro com salas de 7 mil e 2 mil lugares e complexo de cinemas para até 3.772 pessoas;</li>
				<li>Arena: capacidade entre 18.000 e 19.000 lugares sentados para jogos, 10.000 a 13.000 para shows. </li>
			</ul>

			<ol class="notas" start="2">
				<li>Através do instrumento PMI – Procedimento de Manifestação de Interesse, lançado pelo Edital nº. 00005/2014.</li>
			</ol>

		</section>

		<section>
			<h3 class="titulo" indent="1">Ficha técnica</h3>
			<p>
				Adriana Levisky<br>
				Célio Emerique<br>
				Daniel Figueiredo<br>
				Daniel Mifano<br>
				Fabiano Bonafé<br>
				Fabio Villani<br>
				Felipe Sande<br>
				Joelson Sampaio<br>
				Juan Filgueiras<br>
				Luciene Sandoval<br>
				Marcelo Urtado<br>
				Marcelo Vieira<br>
				Mario Braga<br>
				Mário Cury<br>
				Oswaldo J. Alexandre Jr.<br>
				Patricia Boni<br>
				Pedro Lyra<br>
				Roberto Toffoli<br>
				Rodrigo de Losso (Coordenador)<br>
				Tatiana Antonelli<br>
				Tiago Fracchetta<br>
				Thaís Azevedo<br>
				Tomaz Santalucia<br>
				Victoria Almeida<br>
				Welber Simões<br>
				Yara Fonseca<br>
			</p>
		</section>

		<section>
			<h3 class="titulo" indent="1">Bibliografia</h3>

			<h5>Diagnóstico Sócio Territorial</h5>
			<ul class="creditos">
				<li>SÃO PAULO (Município). Lei nº 16.050, de 31 de julho de 2014. Aprova a Política de Desenvolvimento Urbano e o Plano Diretor Estratégico do Município de São Paulo e revoga a Lei nº 13.430/2002.</li>

				<li>SÃO PAULO (Município). Lei nº 16.402, de 22 de março de 2016. Disciplina o parcelamento, o uso e a ocupação do solo no Município de São Paulo.</li>

				<li>SÃO PAULO (Município). Decreto nº 56.834, de 24 de fevereiro de 2016. Institui o Plano Municipal de Mobilidade Urbana de São Paulo – PlanMob/SP 2015.</li>

				<li>SÃO PAULO (Município). Decreto nº 56.901, de 29 de março de 2016. Dispõe sobre a elaboração de Projeto de Intervenção Urbana, nos termos do disposto no artigo 134 da Lei nº16.050, de 31 de julho de 2014 – Plano Diretor Estratégico – PDE.</li>

				<li>SÃO PAULO (Estado). Decreto nº 6.050, de 19 de agosto de 1933. Autoriza a Secretaria da Fazenda a alienar ao Governo da União próprios do Estado e dá outras providências.</li>

				<li>SÃO PAULO (Estado). Decreto-Lei nº 13.291, de 31 de março de 1943. </li>

				<li>SÃO PAULO (Estado). Deliberação CONSEMA Normativa 01/2014, de 23 de abril de 2014. 318º Reunião Ordinária do CONSEMA. Fixa tipologia para o exercício da competência municipal, no âmbito do licenciamento ambiental, dos empreendimentos e atividades de potencial impacto local, nos termos do Art. 9º, inciso XIV, alínea “a”, da Lei Complementar Federal 140/2011.</li>

				<li>SÃO PAULO (Estado). Lei nº 17.099, de 27 de junho de 2019. Autoriza a Fazenda do Estado a conceder o uso da área que especifica, e dá providências correlatas.</li>

				<li>SÃO PAULO (Município). Caderno de Propostas dos Planos Regionais das Subprefeituras, Perímetros de Ação, Vila Mariana, dezembro de 2016.</li>

				<li>SÃO PAULO (Município). Caderno de Propostas dos Planos Regionais das Subprefeituras, Quadro Analítico, Vila Mariana, dezembro de 2016.</li>

				<li>SÃO PAULO (Município). Caderno de Propostas dos Planos Regionais das Subprefeituras, Perímetros de Ação, Pinheiros, dezembro de 2016.</li>

				<li>SÃO PAULO (Município). Caderno de Propostas dos Planos Regionais das Subprefeituras, Quadro Analítico, Pinheiros, dezembro de 2016.</li>

				<li>SÃO PAULO (Município). Decreto nº 57.537, de 16 de dezembro de 2016. Regulamenta os artigos 344 a 346 da Lei nº 16.050, de 31 de julho de 2014 – Plano Diretor Estratégico, instituindo os Planos Regionais das Subprefeituras, elaborados a partir dos princípios e diretrizes nele estabelecidos, articulado à revisão da nova disciplina de parcelamento, uso e ocupação do solo instituída pela Lei nº 16.402, de 22 de março de 2016; bem como orienta a elaboração e aplicação dos Planos de Ação das Subprefeituras.</li>

				<li>SÃO PAULO (Estado). Decreto nº 30.443, de 20 de setembro de 1989. Considera patrimônio ambiental e declara imunes de cortes, exemplares arbóreos situados no Município de São Paulo, e dá outras providências. </li>

				<li>GESTÃO URBANA. Disponível em: <a href="https://gestaourbana.prefeitura.sp.gov.br/">https://gestaourbana.prefeitura.sp.gov.br</a>. Acesso em:13 out. 2019.</li>

				<li>SECOVI SP, O Sindicato da Habitação. Disponível em: <a href="http://www.geosecovi.com.br/">http://geosecovi.com.br</a>. Acesso em 10 out. 2019.</li>

				<li>OBSERVA SAMPA, Observatório de Indicadores da Cidade de São Paulo. Disponível em: <a href="http://observasampa.prefeitura.sp.gov.br/">http://observasampa.prefeitura.sp.gov.br</a>. Acesso em 10 out. 2019.</li>
			</ul>
		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<comments-loader :attr="estaConsulta" />
			<comments v-if="commentsLoaded && consultaAtiva" :attr="{id: 5, context:'Comentarios'}" />
		</section>
	</div>
</template>
<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Apoio from '@/components/Apoio'
import Imagem from '@/components/Imagem'
import { consultasCommons } from '@/mixins/consultasCommons'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import CommentsOption from '@/components/CommentsOption'
import Tabela from '@/components/Tabela'
import TabelaCsv from '@/components/TabelaCsv'
import VePie from 'v-charts/lib/pie.common'
import VeLine from 'v-charts/lib/line.common'
import VeBar from 'v-charts/lib/bar.common'
import VeHistogram from 'v-charts/lib/histogram.common'

export default {
	name: 'GinasioIbirapuera',
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
		CommentsOption,
		PageTop,
		Indice,
		Tabela,
		TabelaCsv,
		Apoio,
		Imagem,
		VePie,
		VeLine,
		VeBar,
		VeHistogram
	},
	mixins: [ consultasCommons ]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

.capitulos > .titulos {
	margin-top: 0
}

.grafico {
	border: 1px $cinza-2 solid;
	max-width: 700px;
	margin: 1rem auto;
	text-align: center;
	@media (max-width: 600px) {
		margin: 1rem
	}
}

.wider {
	max-width: 900px;
	@media (max-width: 900px) {
		margin: 1rem
	}
}

.grafico__titulo,
.grafico__subtitulo {
	font-size: initial;
}

.grafico__titulo {
	margin-top: 1.5rem;
}

.grafico__subtitulo {
	margin-bottom: 2rem;
	font-weight: normal;
}

.grafico__fonte {
	font-family: $grotesca;
	font-size: x-small;
}

.grafico__grupos {
	display: grid;
	grid-template-columns: 1fr 1px 1fr;
	@supports(not(display: grid)) {
		display: flex
	}
	@media(max-width: 700px) {
		display: flex;
		flex-direction: column;
	}
}

.grafico__grupo--entrecoluna {
	background-color: $cinza-2;
	margin: 1rem 0;
}

.tabela--custom {
	max-width: 700px;
	overflow-x: auto;
	margin: 2rem auto;
	padding: 0 2rem 2rem;
	background-color: #F5F5F5;
	border-radius: 2px;
}

.tabela--custom table {
	width: 100%;
}

.tabela--custom table caption  {
	border-top: unset
}

.tabela--custom table th {
	background-color: rgba(0, 0, 0, 0.12);
}

.tabela--custom table td {
	background-color: #fff;
}

.tabela--custom .fonte {
	margin: 1rem 0 0 0;
	font-size: x-small;
	color: #777;
}

.table-container {
	max-width: 700px;
	margin: auto auto 1.5rem;
}

.horizontal {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr 100%
}

@supports(display: grid) {
	.horizontal {
		max-width: 1200px;
		margin: auto;
	}
	.horizontal .titulo {
		margin-top: 0
	}
	@media (max-width: 800px) {
		.horizontal {
			display: block;
			grid-template-columns: unset;
			max-width: unset;
		}
	}
}

.horizontal h2 {
	margin-top:0
}

.coluna-content {
	margin-top: 3rem;
	grid-area: 2 / 1 / 3 / 3;
}

.links.compacto li {
	margin: 1px
}

.links.compacto .compacto__ultimo-item {
	margin-top: 2rem
}

.creditos {
	list-style: none;
	padding: 0;
}

.creditos li {
	font-family: $grotesca;
	font-size: small;
	padding: 0
}

</style>
