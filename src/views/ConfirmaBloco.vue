<template>
	<div class="Carnaval2020" ref="conteudoConsulta" :key="componentKey">
		<!-- <PageTop background_image_src="/arquivos/capas/carnaval-2020_244w.png" :esta_consulta="estaConsulta">
			<template slot="titulo"><div>Carnaval 2020</div></template>
			<template slot="subtitulo"><div>Inscreva seu defile de carnaval de 2020</div></template>
		</PageTop> -->
		<!-- Criar um topo customizado para esta consulta -->
		<!-- <Imagem :dados="bigImg"></Imagem> -->
		<img widht="1920" height="100%" alt="Carnaval de Rua 2020" class="header__carnaval" :src="src('/arquivos/carnaval-2020/header-carnaval.png')">
		<Indice :titulos="titulosLimpo"></Indice>

		<section  v-if="!fimForm" ref="apresentacao" class="apresentacao">
			<h2 class="titulo" indent="1">Apresentação</h2>
				<p>Olá! Bem-vindo(a) ao portal oficial para cadastramento do seu bloco, banda ou cordão carnavalesco. O Carnaval de Rua de São Paulo está consolidado como um dos maiores do Brasil e a intenção da Prefeitura é tornar o processo de inscrição e planejamento mais inclusivo, estruturado e participativo, permitindo uma maior oferta de serviços e melhor experiência para todos para 2020. </p>

				<p>Bloco, banda e cordão carnavalesco deve inscrever separadamente cada desfile, enviando as informações pelo formulário abaixo, no período de 9 a 30 de setembro de 2019. Após esse período de inscrições, será enviado um link para revisão e confirmação do desfile, através do e-mail cadastrado como responsável pelo bloco.</p>

				<p>No Carnaval de Rua 2019, foram mais de 500 desfiles, com blocos, bandas e cordões carnavalescos dos mais diversos, em um modelo livre, democrático e descentralizado, de enorme relevância cultural, turística e econômica, um orgulho para a cidade. </p>

				<p>Dúvidas ou pedidos de esclarecimento devem ser enviados à Comissão de Carnaval através do e-mail <a href="mailto:carnavalderua@prefeitura.sp.gov.br"> carnavalderua@prefeitura.sp.gov.br</a>.</p>
		</section>

		<!-- Mapa interativo -->
		<section class="apresentacao">
			<h2 class="titulo" indent="1">Mapa</h2>
			<!-- MAPA -->
			<MapaCarnaval :mapaAttrs="mapaAttrs" :styleFromKML="false"></MapaCarnaval>
			<!-- END MAPA -->
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat.</p>
		</section>
		
		<!-- <template  v-if="parseInt(estaConsulta.ativo)"> -->
			<div class="form--create">
				<!-- <p v-if="!fimForm" class="obrigatorios">Os campos acompanhados de um asterisco (*) são de preenchimento obrigatório.</p> -->
				<p v-if="!fimForm" class="obrigatorios">Confira os dados da inscrição:</p>
				<form @submit.prevent="criar" :class="{ hidden: fimForm }" ref="form">
					<section ref="desfile">
						<h2 class="titulo" indent="1">Desfile</h2>
						<fieldset>
							<label class="create__label" for="nome_do_bloco">Nome do bloco (até 100 caracteres)*</label>
							<input
								placeholder="ex. Bloco da Maria"
								id="nome_do_bloco"
								type="text"
								name="nome_do_bloco"
								v-validate="'required|min:3'"
								:class="{ erro: errors.has('nome_do_bloco') }"
								class="create__input"
								v-model="desfile.nome_do_bloco"
							>
							<span v-if="errors.first('nome_do_bloco')" class="errorPointer">{{ errors.first('nome_do_bloco') }}</span>
							<!-- pode incluir no contexto como neste exemplo ou agrupados em outro lugar (errors, custom_errors)-->
							<!-- ver documentação de vee-validate 2.x http://vee-validate.logaretm.com/v2/ (não é o 3.x) -->
						</fieldset>

						<!-- concentração -->
						<fieldset>
							<label class="create__label" for="endereco_concentracao">Endereço da concentração (até 100 caracteres)*</label>
							<input
								placeholder="ex. Avenida São João"
								id="endereco_concentracao"
								type="text"
								name="endereco_concentracao"
								v-validate="'required'"
								:class="{ erro: errors.has('endereco_concentracao') }"
								class="create__input"
								v-model="desfile.endereco_concentracao"
							>
							<span v-if="errors.first('endereco_concentracao')" class="errorPointer">{{ errors.first('endereco_concentracao') }}</span>
						</fieldset>

						<fieldset>
							<label class="create__label" for="complemento_concentracao">Complemento (até 100 caracteres)*</label>
							<input
								placeholder="ex. nº 1432"
								id="complemento_concentracao"
								type="text"
								name="complemento_concentracao"
								v-validate="'required'"
								:class="{ erro: errors.has('complemento_concentracao') }"
								class="create__input"
								v-model="desfile.complemento_concentracao"
							>
							<span v-if="errors.first('complemento_concentracao')" class="errorPointer">{{ errors.first('complemento_concentracao') }}</span>
						</fieldset>

						<fieldset>
							<label class="create__label" for="cep_concentracao">CEP*</label>
							<input
								placeholder="00000-000"
								id="cep_concentracao"
								type="text"
								name="cep_concentracao"
								v-validate="'required|min:5'"
								:class="{ erro: errors.has('cep_concentracao') }"
								class="create__input"
								v-model="desfile.cep_concentracao"
							>
							<a href="http://www.buscacep.correios.com.br/sistemas/buscacep/" target="_blank"><i class="icon-buscar icon"><span>buscar</span></i></a>
							<!-- consulta correios -> http://www.buscacep.correios.com.br/sistemas/buscacep/ -->
							<span v-if="errors.first('cep_concentracao')" class="errorPointer">{{ errors.first('cep_concentracao') }}</span>
						</fieldset>

						<fieldset>
							<label class="create__label" for="bairro_concentracao">Bairro*</label>
							<input
								placeholder="ex. Santa Cecília"
								id="bairro_concentracao"
								type="text"
								name="bairro_concentracao"
								v-validate="'required'"
								:class="{ erro: errors.has('bairro_concentracao') }"
								class="create__input"
								v-model="desfile.bairro_concentracao"
							>
							<span v-if="errors.first('bairro_concentracao')" class="errorPointer">{{ errors.first('bairro_concentracao') }}</span>
						</fieldset>

						<fieldset>
							<label class="create__label" for="itinerario">Itinerário (até 1000 caracteres)*</label>
							<textarea
								placeholder="ex. R. Oliveira Melo, R. Imprensa, R. Frei Durão, R. Debret"
								id="itinerario"
								type="text"
								name="itinerario"
								v-validate="'required'"
								:class="{ erro: errors.has('itinerario') }"
								class="create__input"
								v-model="desfile.itinerario"
							></textarea>
							<span v-if="errors.first('itinerario')" class="errorPointer">{{ errors.first('itinerario') }}</span>
						</fieldset>

						<!-- dispersão -->
						<fieldset>
							<label class="create__label" for="endereco_dispersao">Endereço da dispersão (até 100 caracteres)*</label>
							<input
								placeholder="ex. R. Oliveira Melo (entre R. Imprensa e R. Debret)"
								id="endereco_dispersao"
								type="text"
								name="endereco_dispersao"
								v-validate="'required'"
								:class="{ erro: errors.has('endereco_dispersao') }"
								class="create__input"
								v-model="desfile.endereco_dispersao"
							>
							<span v-if="errors.first('endereco_dispersao')" class="errorPointer">{{ errors.first('endereco_dispersao') }}</span>
						</fieldset>

						<fieldset>
							<label class="create__label" for="complemento_dispersao">Complemento (até 100 caracteres)*</label>
							<input
								placeholder="ex. nº 1432"
								id="complemento_dispersao"
								type="text"
								name="complemento_dispersao"
								v-validate="'required'"
								:class="{ erro: errors.has('complemento_dispersao') }"
								class="create__input"
								v-model="desfile.complemento_dispersao"
							>
							<span v-if="errors.first('complemento_dispersao')" class="errorPointer">{{ errors.first('complemento_dispersao') }}</span>
						</fieldset>

						<fieldset>
							<label class="create__label" for="cep_dispersao">CEP*</label>
							<input
								placeholder="00000-000"
								id="cep_dispersao"
								type="text"
								name="cep_dispersao"
								v-validate="'required|min:5'"
								:class="{ erro: errors.has('cep_dispersao') }"
								class="create__input"
								v-model="desfile.cep_dispersao"
							>
							<a href="http://www.buscacep.correios.com.br/sistemas/buscacep/" target="_blank"><i class="icon-buscar icon"><span>buscar</span></i></a>
							<!-- consulta correios -> http://www.buscacep.correios.com.br/sistemas/buscacep/ -->
							<span v-if="errors.first('cep_dispersao')" class="errorPointer">{{ errors.first('cep_dispersao') }}</span>
						</fieldset>

						<!-- **************** NON ECXISTE: bairro_dispersao ************** -->
						<!-- api/model/desfiles.php (branch backend) nem no banco de dados -->
						<!-- ************************************************************** -->
						<fieldset>
							<label class="create__label" for="bairro_dispersao">Bairro*</label>
							<input
								id="bairro_dispersao"
								type="text"
								name="bairro_dispersao"
								v-validate="'required'"
								:class="{ erro: errors.has('bairro_dispersao') }"
								class="create__input"
								v-model="desfile.bairro_dispersao"
							>
							<span v-if="errors.first('bairro_dispersao')" class="errorPointer">{{ errors.first('bairro_dispersao') }}</span>
						</fieldset>
						<!-- **************** NON ECXISTE: bairro_dispersao ************** -->

						<!-- ***** datas ******* -->
						<!-- Data (2019) -->
						<!-- <fieldset>
							<label class="create__label" for="data_do_desfile_2019">Data (2019)</label>
							<input
								id="data_do_desfile_2019"
								type="date"
								name="data_do_desfile_2019"
								v-validate="'required:false'"
								:class="{ erro: errors.has('data_do_desfile_2019') }"
								class="create__input"
								v-model="desfile.data_do_desfile_2019"
							/>
							<span v-if="errors.first('data_do_desfile_2019')" class="errorPointer">{{ errors.first('data_do_desfile_2019') }}</span>
						</fieldset> -->

						<!-- Data (2019) -->
						<fieldset>
							<label class="create__label" for="data_do_desfile_2019">Data em que desfilou em 2019*</label>
							<select
								id="data_do_desfile_2019"
								type="text"
								name="data_do_desfile_2019"
								:class="{ erro: errors.has('data_do_desfile_2019') }"
								class="create__input"
								v-validate="'required:false'"
								v-model="desfile.data_do_desfile_2019"
								@change="setOption('desfile','data_do_desfile_2019', $event, 'Especifique outra data e horário, conforme desfiles de anos anteriores')">
									<option value="" disabled selected>Selecione uma data</option>
									<option value="2020-02-23 00:00:00">23/02 - sábado pré-carnaval</option>
									<option value="2020-02-24 00:00:00">24/02 - domingo pré-carnaval</option>
									<option value="2020-03-02 00:00:00">02/02 - sábado carnaval</option>
									<option value="2020-03-03 00:00:00">03/03 - domingo carnaval</option>
									<option value="2020-03-04 00:00:00">04/03 - segunda-feira carnaval</option>
									<option value="2020-03-05 00:00:00">05/03 - terça-feira carnaval</option>
									<option value="2020-03-09 00:00:00">09/03 - sábado carnaval</option>
									<option value="2020-03-10 00:00:00">10/03 - domingo carnaval</option>
									<option value="opcional">Opcional (blocos tradicionais com histórico)</option>
									<option value="0">Não desfilou</option>
							</select>
							<textarea
								v-if="ui.opcional.data_do_desfile_2019"
								name="data_do_desfile_2019--opcional"
								id="data_do_desfile_2019--opcional"
								:class="{ erro: errors.has('data_do_desfile_2019') }"
								cols="30" rows="10"
								v-model="desfile.data_do_desfile_2019">
							</textarea>
							<p v-else class="obs">Caso seja bloco tradicional com histórico, selecione <strong>Opcional</strong>.</p>
							<span v-if="errors.first('data_do_desfile_2019')" class="errorPointer">{{ errors.first('data_do_desfile_2019') }}</span>
						</fieldset>
						<!-- FIM Data (2019) -->

						<!-- Data (2020) -->
						<fieldset>
							<label class="create__label" for="data_do_desfile_2020">Data pretendida para 2020*</label>
							<select
								id="data_do_desfile_2020"
								type="text"
								name="data_do_desfile_2020"
								:class="{ erro: errors.has('data_do_desfile_2020') }"
								class="create__input"
								v-validate="'required'"
								v-model="desfile.data_do_desfile_2020"
								@change="setOption('desfile','data_do_desfile_2020', $event, 'Especifique outra data e horário, conforme desfiles de anos anteriores')">
									<option value="" disabled selected>Selecione uma data</option>
									<option value="2020-02-15 00:00:00">15/02 - sábado pré-carnaval</option>
									<option value="2020-02-16 00:00:00">16/02 - domingo pré-carnaval</option>
									<option value="2020-02-22 00:00:00">22/02 - sábado carnaval</option>
									<option value="2020-02-23 00:00:00">23/02 - domingo carnaval</option>
									<option value="2020-02-24 00:00:00">24/02 - segunda-feira carnaval</option>
									<option value="2020-02-25 00:00:00">25/02 - terça-feira carnaval</option>
									<option value="2020-02-29 00:00:00">29/02 - sábado carnaval</option>
									<option value="2020-03-01 00:00:00">1º/03 - domingo carnaval</option>
									<option value="opcional">Opcional (blocos tradicionais com histórico)</option>
							</select>
							<textarea
								v-if="ui.opcional.data_do_desfile_2020"
								name="data_do_desfile_2020--opcional"
								id="data_do_desfile_2020--opcional"
								:class="{ erro: errors.has('data_do_desfile_2020') }"
								cols="30" rows="10"
								v-model="desfile.data_do_desfile_2020">
							</textarea>
							<p v-else class="obs">Caso seja bloco tradicional com histórico, selecione <strong>Opcional</strong> para especificar outra data e horário nas observações conforme desfiles de anos anteriores.</p>
							<span v-if="errors.first('data_do_desfile_2020')" class="errorPointer">{{ errors.first('data_do_desfile_2020') }}</span>
						</fieldset>
						<!-- FIM Data (2020) -->

						<!-- Horário da concentração -->
						<fieldset>
							<label class="create__label" for="hr_concentracao">Horário da concentração*</label>
							<select
								id="hr_concentracao"
								:class="{ erro: errors.has('hr_concentracao') }"
								class="create__input"
								type="text"
								name="hr_concentracao"
								v-validate="'required'"
								v-model="desfile.hr_concentracao"
								@change="setOption('desfile','hr_concentracao', $event)">
									<option value="" disabled selected>Selecione um horário</option>
									<option value="08:00">8h00</option>
									<option value="08:30">8h30</option>
									<option value="09:00">9h00</option>
									<option value="09:30">9h30</option>
									<option value="10:00">10h00</option>
									<option value="10:30">10h30</option>
									<option value="11:00">11h00</option>
									<option value="11:30">11h30</option>
									<option value="12:00">12h00</option>
									<option value="12:30">12h30</option>
									<option value="13:00">13h00</option>
									<option value="13:30">13h30</option>
									<option value="14:00">14h00</option>
									<option value="14:30">14h30</option>
									<option value="15:00">15h00</option>
									<option value="15:30">15h30</option>
									<option value="16:00">16h00</option>
									<option value="16:30">16h30</option>
									<option value="17:00">17h00</option>
							</select>
							<span v-if="errors.first('hr_concentracao')" class="errorPointer">{{ errors.first('hr_concentracao') }}</span>
						</fieldset>
						<!-- FIM Horário da concentração -->

						<!-- Horário da desfile -->
						<fieldset>
							<label class="create__label" for="hr_desfile">Horário do desfile*</label>
							<select
								id="hr_desfile"
								:class="{ erro: errors.has('hr_desfile') }"
								class="create__input"
								type="text"
								name="hr_desfile"
								v-validate="'required'"
								v-model="desfile.hr_desfile"
								@change="setOption('desfile','hr_desfile', $event)">
									<option value="" disabled selected>Selecione um horário</option>
									<option value="09:00">9h00</option>
									<option value="09:30">9h30</option>
									<option value="10:00">10h00</option>
									<option value="10:30">10h30</option>
									<option value="11:00">11h00</option>
									<option value="11:30">11h30</option>
									<option value="12:00">12h00</option>
									<option value="12:30">12h30</option>
									<option value="13:00">13h00</option>
									<option value="13:30">13h30</option>
									<option value="14:00">14h00</option>
									<option value="14:30">14h30</option>
									<option value="15:00">15h00</option>
									<option value="15:30">15h30</option>
									<option value="16:00">16h00</option>
									<option value="16:30">16h30</option>
									<option value="17:00">17h00</option>
									<option value="17:30">17h30</option>
									<option value="18:00">18h00</option>
							</select>
							<span v-if="errors.first('hr_desfile')" class="errorPointer">{{ errors.first('hr_desfile') }}</span>
						</fieldset>
						<!-- FIM Horário da desfile -->

						<!-- Horário da encerramento -->
						<fieldset>
							<label class="create__label" for="hr_encerramento">Horário de encerramento*</label>
							<select
								id="hr_encerramento"
								:class="{ erro: errors.has('hr_encerramento') }"
								class="create__input"
								type="text"
								name="hr_encerramento"
								v-validate="'required'"
								v-model="desfile.hr_encerramento"
								@change="setOption('desfile','hr_encerramento', $event)">
									<option value="" disabled selected>Selecione um horário</option>
									<option value="08:00">8h00</option>
									<option value="08:30">8h30</option>
									<option value="09:00">9h00</option>
									<option value="09:30">9h30</option>
									<option value="10:00">10h00</option>
									<option value="10:30">10h30</option>
									<option value="11:00">11h00</option>
									<option value="11:30">11h30</option>
									<option value="12:00">12h00</option>
									<option value="12:30">12h30</option>
									<option value="13:00">13h00</option>
									<option value="13:30">13h30</option>
									<option value="14:00">14h00</option>
									<option value="14:30">14h30</option>
									<option value="15:00">15h00</option>
									<option value="15:30">15h30</option>
									<option value="16:00">16h00</option>
									<option value="16:30">16h30</option>
									<option value="17:00">17h00</option>
									<option value="17:00">17h30</option>
									<option value="18:00">18h00</option>
									<option value="18:00">18h30</option>
									<option value="19:00">19h00</option>
									<option value="19:00">19h30*</option>
									<option value="20:00">20h00*</option>
									<option value="20:30">20h30*</option>
									<option value="21:00">21h00*</option>
							</select>
							<p class="obs">Conforme <a :href="guiaDeRegrasURL">Guia de Regras</a>, o som deverá ser desligado e as vias liberadas para trânsito até 20h, exceto mediante autorizações especiais emitidas expressamente por escrito pela comissão intersecretarial desde que previstas no Plano de Operações de Segurança do bloco</p>
							<span v-if="errors.first('hr_encerramento')" class="errorPointer">{{ errors.first('hr_encerramento') }}</span>
						</fieldset>
						<!-- FIM Horário da encerramento -->

						<!-- subprefeitura -->
						<fieldset>
							<label class="create__label" for="subprefeitura">Subprefeitura*</label>
							<select
								id="subprefeitura"
								:class="{ erro: errors.has('subprefeitura') }"
								class="create__input"
								type="text"
								name="subprefeitura"
								v-validate="'required'"
								v-model="desfile.subprefeitura"
								@change="setOption('desfile','subprefeitura', $event)">
									<option value="" disabled selected>Selecione uma Subprefeitura</option>
									<option value="Aricanduva/Vila Formosa">Aricanduva/Vila Formosa</option>
									<option value="Butantã">Butantã</option>
									<option value="Campo Limpo">Campo Limpo</option>
									<option value="Capela do Socorro">Capela do Socorro</option>
									<option value="Casa Verde">Casa Verde</option>
									<option value="Cidade Ademar">Cidade Ademar</option>
									<option value="Cidade Tiradentes">Cidade Tiradentes</option>
									<option value="Ermelino Matarazzo">Ermelino Matarazzo</option>
									<option value="Freguesia do Ó/Brasilândia">Freguesia do Ó/Brasilândia</option>
									<option value="Guaianases">Guaianases</option>
									<option value="Ipiranga">Ipiranga</option>
									<option value="Itaim Paulista">Itaim Paulista</option>
									<option value="Itaquera">Itaquera</option>
									<option value="Jabaquara">Jabaquara</option>
									<option value="Jaçanã/Tremembé">Jaçanã/Tremembé</option>
									<option value="Lapa">Lapa</option>
									<option value="M'Boi Mirim">M'Boi Mirim</option>
									<option value="Mooca">Mooca</option>
									<option value="Parelheiros">Parelheiros</option>
									<option value="Penha">Penha</option>
									<option value="Perus">Perus</option>
									<option value="Pinheiros">Pinheiros</option>
									<option value="Pirituba/Jaraguá">Pirituba/Jaraguá</option>
									<option value="Santana/Tucuruvi">Santana/Tucuruvi</option>
									<option value="Santo Amaro">Santo Amaro</option>
									<option value="São Mateus">São Mateus</option>
									<option value="São Miguel Paulista">São Miguel Paulista</option>
									<option value="Sapopemba">Sapopemba</option>
									<option value="Sé">Sé</option>
									<option value="Vila Maria/Vila Guilherme">Vila Maria/Vila Guilherme</option>
									<option value="Vila Mariana">Vila Mariana</option>
									<option value="Vila Prudente">Vila Prudente</option>
							</select>
							<span v-if="errors.first('subprefeitura')" class="errorPointer">{{ errors.first('subprefeitura') }}</span>
						</fieldset>
						<!-- FIM subprefeitura -->

						<!-- publico_2019 -->
						<fieldset>
							<label class="create__label" for="publico_2019">Público (2019)</label>
							<select
								name="publico_2019"
								id="publico_2019"
								v-validate="'required:false'"
								:class="{ erro: errors.has('publico_2019') }"
								class="create__input"
								type="text"
								v-model="desfile.publico_2019"
								@change="setOption('desfile','publico_2019', $event)">
									<option value="-" disabled selected>Selecione uma estimativa</option>
									<option value="0 a 100">0 a 100</option>
									<option value="100 a 500">100 a 500</option>
									<option value="500 a 1000">500 a 1000</option>
									<option value="500 a 2000">500 a 2.000</option>
									<option value="2000 a 5000">2.000 a 5.000</option>
									<option value="5000 a 15000">5.000 a 15.000</option>
									<option value="15000 a 40000">15.000 a 40.000</option>
									<option value="40000 a 100000">40.000 a 100.000</option>
									<option value="Mais de 100000">Mais de 100.000</option>
							</select>
							<span v-if="errors.first('publico_2019')" class="errorPointer">{{ errors.first('publico_2019') }}</span>
						</fieldset>
						<!-- FIM publico_2019 -->

						<!-- publico_estimado -->
						<fieldset>
							<label class="create__label" for="publico_estimado">Público estimado*</label>
							<input
								placeholder="100"
								id="publico_estimado"
								name="publico_estimado"
								v-validate="'required'"
								:class="{ erro: errors.has('publico_estimado') }"
								class="create__input"
								type="number"
								step="100"
								v-model.number="desfile.publico_estimado">
						</fieldset>
						<span v-if="errors.first('publico_estimado')" class="errorPointer">{{ errors.first('publico_estimado') }}</span>
						<!-- FIM publico_estimado -->
					</section>
					<!-- FIM desfile -->

					<section ref="contato">
						<h2 class="titulo" indent="1">Contato</h2>
						<h4>Responsável</h4>
						<fieldset>
							<label class="create__label" for="name">Nome*</label>
							<input
								id="nome_responsavel"
								type="text"
								name="nome_responsavel"
								v-validate="'required'"
								:class="{ erro: errors.has('nome_responsavel') }"
								class="create__input"
								v-model="contato.nome_responsavel"
							>
							<span v-if="errors.first('nome_responsavel')" class="errorPointer">{{ errors.first('nome_responsavel') }}</span>
						</fieldset>
						<fieldset>
							<label class="create__label" for="cpf_cnpj_responsavel">CPF/CNPJ*</label>
							<input
								id="cpf_cnpj_responsavel"
								type="text"
								name="cpf_cnpj_responsavel"
								v-validate="'required'"
								:class="{ erro: errors.has('cpf_cnpj_responsavel') }"
								class="create__input"
								v-model="contato.cpf_cnpj_responsavel"
							>
							<span v-if="errors.first('cpf_cnpj_responsavel')" class="errorPointer">{{ errors.first('cpf_cnpj_responsavel') }}</span>
						</fieldset>
						<fieldset>
							<label class="create__label" for="email_responsavel">E-mail*</label>
							<input
								id="email_responsavel"
								name="email_responsavel"
								v-validate="'required|email'"
								:class="{ erro: errors.has('email_responsavel') }"
								class="create__input"
								type="email"
								v-model="contato.email_responsavel"
							>
							<span v-if="errors.first('email_responsavel')" class="errorPointer">{{ errors.first('email_responsavel') }}</span>
						</fieldset>
						<fieldset>
							<label class="create__label" for="telefone_responsavel">Telefone*</label>
							<input
								id="telefone_responsavel"
								name="telefone_responsavel"
								v-validate="'required'"
								:class="{ erro: errors.has('telefone_responsavel') }"
								class="create__input"
								type="text"
								v-model="contato.telefone_responsavel"
							>
							<span v-if="errors.first('telefone_responsavel')" class="errorPointer">{{ errors.first('telefone_responsavel') }}</span>
						</fieldset>

						<h4>Corresponsável</h4>
						<fieldset>
							<label class="create__label" for="name">Nome*</label>
							<input
								id="nome_coresponsavel"
								type="text"
								name="nome_coresponsavel"
								v-validate="'required'"
								:class="{ erro: errors.has('nome_coresponsavel') }"
								class="create__input"
								v-model="contato.nome_coresponsavel"
							>
							<span v-if="errors.first('nome_coresponsavel')" class="errorPointer">{{ errors.first('nome_coresponsavel') }}</span>
						</fieldset>
						<fieldset>
							<label class="create__label" for="cpf_cnpj_coresponsavel">CPF/CNPJ*</label>
							<input
								id="cpf_cnpj_coresponsavel"
								type="text"
								name="cpf_cnpj_coresponsavel"
								v-validate="'required'"
								:class="{ erro: errors.has('cpf_cnpj_coresponsavel') }"
								class="create__input"
								v-model="contato.cpf_cnpj_coresponsavel"
							>
							<span v-if="errors.first('cpf_cnpj_coresponsavel')" class="errorPointer">{{ errors.first('cpf_cnpj_coresponsavel') }}</span>
						</fieldset>
						<fieldset>
							<label class="create__label" for="email_coresponsavel">E-mail*</label>
							<input
								id="email_coresponsavel"
								name="email_coresponsavel"
								v-validate="'required'"
								:class="{ erro: errors.has('email_coresponsavel') }"
								class="create__input"
								type="email"
								v-model="contato.email_coresponsavel"
							>
							<span v-if="errors.first('email_coresponsavel')" class="errorPointer">{{ errors.first('email_coresponsavel') }}</span>
						</fieldset>
						<fieldset>
							<label class="create__label" for="telefone_coresponsavel">Telefone*</label>
							<input
								id="telefone_coresponsavel"
								name="telefone_coresponsavel"
								v-validate="'required: false'"
								:class="{ erro: errors.has('telefone_coresponsavel') }"
								class="create__input"
								type="text"
								v-model="contato.telefone_coresponsavel"
							>
							<span v-if="errors.first('telefone_coresponsavel')" class="errorPointer">{{ errors.first('telefone_coresponsavel') }}</span>
						</fieldset>
					</section>
					<!-- FIM contato -->

					<section ref="caracteristicas">
						<h2 class="titulo" indent="1">Características</h2>
						<!-- ano_fundacao -->
						<fieldset>
							<label class="create__label" for="ano_fundacao">Ano Fundação</label>
							<input
								placeholder="1947"
								id="ano_fundacao"
								v-validate="'required'"
								:class="{ erro: errors.has('ano_fundacao') }"
								class="create__input"
								type="number"
								name="ano_fundacao"
								v-model="desfile.ano_fundacao"
							/>
							<span v-if="errors.first('ano_fundacao')" class="errorPointer">{{ errors.first('ano_fundacao') }}</span>
						</fieldset>
						<!-- FIM ano_fundacao -->

						<!-- perfil_bloco SET CUSTOM ERROR -->
						<div class="check-errors"
							:class="{ erro: custom_errors.has('perfil_bloco') }"
						>
							<h5>Perfil do bloco</h5>
							<ul>
								<li><input id="perfil-familiar" type="radio" v-model="desfile.perfil_bloco" value="Familiar"><label class="create__label" for="perfil-familiar">Familiar</label></li>
								<li><input id="perfil-adulto" type="radio" v-model="desfile.perfil_bloco" value="Adulto"><label class="create__label" for="perfil-adulto">Adulto</label></li>
								<li><input id="perfil-LGBTQI+" type="radio" v-model="desfile.perfil_bloco" value="LGBTQI+"><label class="create__label" for="perfil-LGBTQI+">LGBTQI+</label></li>
								<li><input id="perfil-infantil" type="radio" v-model="desfile.perfil_bloco" value="Infantil"><label class="create__label" for="perfil-infantil">Infantil</label></li>
								<li><input id="perfil-religioso" type="radio" v-model="desfile.perfil_bloco" value="Religioso"><label class="create__label" for="perfil-religioso">Religioso</label></li>
								<li><input id="perfil-tematico" type="radio" v-model="desfile.perfil_bloco" value="Temático"><label class="create__label" for="perfil-tematico">Temático</label></li>
								<li>
									<input
										type="radio"
										@change="setOption('desfile', 'perfil_bloco', $event)"
										value="opcional" id="perfil-opcional"><label class="create__label" for="perfil-opcional">Outro<template v-if="ui.opcional.perfil_bloco">:</template></label>
									<input
										v-if="ui.opcional.perfil_bloco"
										name="perfil_bloco--opcional"
										id="perfil_bloco--opcional"
										v-model="desfile.perfil_bloco">
								</li>
							</ul>
							<p>Perfil não obrigatório, como opção para divulgação</p>
						</div>
						<!-- FIM perfil_bloco -->

						<!-- estilo_musical_predominante SET CUSTOM ERROR-->
						<div class="check-errors"
							:class="{ erro: custom_errors.has('estilo_musical_predominante') }"
							>
							<h5>Estilo musical predominante</h5>
							<ul>
								<li><input id="estilo-diversos" type="radio" v-model="desfile.estilo_musical_predominante" value="Diversos"><label class="create__label" for="estilo-diversos">Diversos</label></li>
								<li><input id="estilo-mpb" type="radio" v-model="desfile.estilo_musical_predominante" value="Música Popular Brasileira"><label class="create__label" for="estilo-mpb">Música Popular Brasileira</label></li>
								<li><input id="estilo-samba" type="radio" v-model="desfile.estilo_musical_predominante" value="Samba"><label class="create__label" for="estilo-samba">Samba</label></li>
								<li><input id="estilo-pop" type="radio" v-model="desfile.estilo_musical_predominante" value="Pop"><label class="create__label" for="estilo-pop">Pop</label></li>
								<li><input id="estilo-axe" type="radio" v-model="desfile.estilo_musical_predominante" value="Axé"><label class="create__label" for="estilo-axe">Axé</label></li>
								<li><input id="estilo-sertanejo" type="radio" v-model="desfile.estilo_musical_predominante" value="Sertanejo"><label class="create__label" for="estilo-sertanejo">Sertanejo</label></li>
								<li><input id="estilo-rock" type="radio" v-model="desfile.estilo_musical_predominante" value="Rock"><label class="create__label" for="estilo-rock">Rock</label></li>
								<li><input id="estilo-eletronico" type="radio" v-model="desfile.estilo_musical_predominante" value="Eletrônico"><label class="create__label" for="estilo-eletronico">Eletrônico</label></li>
								<li>
									<input id="estilo-opcional" type="radio" @change="setOption('desfile', 'estilo_musical_predominante', $event)" value="opcional"><label class="create__label" for="estilo-opcional">Outro
									<template v-if="ui.opcional.estilo_musical_predominante"><span class="inputComplemento">Descreva:</span></template></label>
									<input
										v-if="ui.opcional.estilo_musical_predominante"
										name="estilo_musical_predominante--opcional"
										id="estilo_musical_predominante--opcional"
										v-model="desfile.estilo_musical_predominante">
								</li>
							</ul>
							<p>Perfil não obrigatório, como opção para divulgação</p>
						</div>
						<!-- FIM estilo_musical_predominante -->

						<!-- bloco_comunitario SET CUSTOM ERROR -->
						<div class="check-errors"
							:class="{ erro: custom_errors.has('bloco_comunitario') }">
							<h5>Bloco comunitário?</h5>
							<ul>
								<li><input type="radio" v-model.number="desfile.bloco_comunitario" value="1" id="comunitario-sim"><label class="create__label" for="comunitario-sim">Sim</label></li>
								<li><input type="radio" v-model.number="desfile.bloco_comunitario" value="0" id="comunitario-nao"><label class="create__label" for="comunitario-nao">Não</label></li>
							</ul>
							<p>Máximo de 5000 pessoas, ausência de patrocínio.</p>
						</div>
						<!-- FIM bloco_comunitario -->

						<!-- artistas SET CUSTOM ERROR -->
						<div class="check-errors"
							:class="{ erro: custom_errors.has('artistas') }">
							<h5>Possui artistas convidados?</h5>
							<ul>
								<li>
									<input type="radio" @change="setOption('desfile', 'artistas', $event)" value="opcional" id="artistas-opcional"><label class="create__label" for="artistas-opcional">Sim
									<template v-if="ui.opcional.artistas"><span class="inputComplemento">Quais?</span></template></label>
									<!-- !!! aumentar área !!!-->
									<input
										placeholder="Cite os artistas convidados ou músicos de destaque"
										v-if="ui.opcional.artistas"
										name="artistas--opcional"
										id="artistas--opcional"
										v-model="desfile.artistas">
								</li>
								<li><input type="radio" v-model="desfile.artistas" value="Não" id="artistas-nao"><label class="create__label" for="artistas-nao">Não</label></li>
							</ul>
						</div>
						<!-- FIM artistas -->

						<!-- bateria SET CUSTOM ERROR -->
						<div class="check-errors"
							:class="{ erro: custom_errors.has('bateria') }">
							<h5>Possui bateria?</h5>
							<ul>
								<li>
									<input type="radio" @change="setOption('desfile', 'bateria', $event)" value="opcional" id="bateria-opcional"><label class="create__label" for="bateria-opcional">Sim
									<template v-if="ui.opcional.bateria"><span class="inputComplemento">Descreva:</span></template></label>
									<input
										placeholder="Cite o número de integrantes da bateria"
										v-if="ui.opcional.bateria"
										name="bateria--opcional"
										id="bateria--opcional"
										v-model="desfile.bateria">
								</li>
								<li><input type="radio" v-model="desfile.bateria" value="Não" id="bateria-nao"><label class="create__label" for="bateria-nao">Não</label></li>
							</ul>
						</div>
						<!-- FIM bateria -->

						<!-- banda_em_trio_ou_solo SET CUSTOM ERROR -->
						<div class="check-errors"
							:class="{ erro: custom_errors.has('banda_em_trio_ou_solo') }">
							<h5>Possui banda em trio ou solo?</h5>
							<ul>
								<li>
									<input
										type="radio"
										@change="setOption('desfile', 'banda_em_trio_ou_solo', $event)"
										value="opcional"
										id="banda-opcional"
										><label class="create__label" for="banda-opcional"
										>Sim</label>

									<label
										v-if="ui.opcional.banda_em_trio_ou_solo"
										for="banda_em_trio_ou_solo--opcional"><span class="inputComplemento">Em trio ou solo?</span></label>
									<input
										placeholder="Descreva"
										v-if="ui.opcional.banda_em_trio_ou_solo"
										name="banda_em_trio_ou_solo--opcional"
										id="banda_em_trio_ou_solo--opcional"
										v-model="desfile.banda_em_trio_ou_solo">
								</li>
								<li><input
									type="radio"
									v-model="desfile.banda_em_trio_ou_solo"
									value="Não"
									name="nao"
									id="banda-nao"
									><label class="create__label" for="banda-nao">Não</label></li>
							</ul>
						</div>
						<!-- FIM banda_em_trio_ou_solo -->

					</section>
					<!-- FIM caracteristicas -->

					<section ref="operacao">
						<h2>Operação</h2>
						<!-- trio_eletrico SET CUSTOM ERROR-->
						<div class="check-errors"
							:class="{ erro: custom_errors.has('trio_eletrico') }">
							<h5>Possui trio elétrico?*</h5>
							<ul>
								<li>
									<input
										type="radio"
										@change="setOption('desfile', 'trio_eletrico', $event)"
										value="opcional" id="trio-sim"
										><label class="create__label" for="trio-sim">Sim</label>
									<label
										v-if="ui.opcional.trio_eletrico"
										for="trio_eletrico--opcional"><span class="inputComplemento">Informe as dimensões (largura x comprimento x altura) em metros</span></label>
									<input
										placeholder="Descreva largura x comprimento x altura em metros"
										v-if="ui.opcional.trio_eletrico"
										name="trio_eletrico--opcional"
										id="trio_eletrico--opcional"
										v-model="desfile.trio_eletrico">
								</li>
								<li>
									<input
									type="radio"
									v-model="desfile.trio_eletrico"
									value="Não"
									name="trio-nao"
									id="trio-nao"
									>
									<label class="create__label" for="trio-nao">Não</label>
								</li>
							</ul>
							<p>Consulte dimensões e autorizações especiais conforme <a :href="guiaDeRegrasURL">Guia de Regras</a> e legislação vigente.</p>
						</div>
						<!-- FIM trio_eletrico -->

						<!-- n_brigadistas -->
						<fieldset>
							<label class="create__label" for="n_brigadistas">Número de brigadistas*</label>
							<input
								placeholder="15"
								id="n_brigadistas"
								name="n_brigadistas"
								v-validate="'required'"
								:class="{ erro: errors.has('n_brigadistas') }"
								class="create__input"
								type="number"
								v-model.number="desfile.n_brigadistas">
							<span v-if="errors.first('n_brigadistas')" class="errorPointer">{{ errors.first('n_brigadistas') }}</span>
						</fieldset>
						<!-- FIM n_brigadistas -->

						<!-- n_ambulancias -->
						<fieldset>
							<label class="create__label" for="n_ambulancias">Número de ambulâncias*</label>
							<input
								placeholder="0"
								id="n_ambulancias"
								name="n_ambulancias"
								v-validate="'required'"
								:class="{ erro: errors.has('n_ambulancias') }"
								class="create__input"
								type="number"
								v-model.number="desfile.n_ambulancias">
							<span v-if="errors.first('n_ambulancias')" class="errorPointer">{{ errors.first('n_ambulancias') }}</span>
						</fieldset>
						<!-- FIM n_ambulancias -->

						<!-- n_cordeiros -->
						<fieldset>
							<label class="create__label" for="n_cordeiros">Número de cordeiros*</label>
							<input
								placeholder="0"
								id="n_cordeiros"
								name="n_cordeiros"
								v-validate="'required'"
								:class="{ erro: errors.has('n_cordeiros') }"
								class="create__input"
								type="number"
								v-model.number="desfile.n_cordeiros">
							<span v-if="errors.first('n_cordeiros')" class="errorPointer">{{ errors.first('n_cordeiros') }}</span>
						</fieldset>
						<!-- FIM n_cordeiros -->

						<!-- n_segurancas_habilitados -->
						<fieldset>
							<label class="create__label" for="n_segurancas_habilitados">Número de seguranças habilitados*</label>
							<input
								placeholder="0"
								id="n_segurancas_habilitados"
								name="n_segurancas_habilitados"
								v-validate="'required'"
								:class="{ erro: errors.has('n_segurancas_habilitados') }"
								class="create__input"
								type="number"
								v-model.number="desfile.n_segurancas_habilitados">
							<span v-if="errors.first('n_segurancas_habilitados')" class="errorPointer">{{ errors.first('n_segurancas_habilitados') }}</span>
						</fieldset>
						<!-- FIM n_segurancas_habilitados -->

						<!-- n_banheiros_quimicos -->
						<fieldset>
							<label class="create__label" for="n_banheiros_quimicos">Número de banheiros químicos*</label>
							<input
								placeholder="0"
								id="n_banheiros_quimicos"
								name="n_banheiros_quimicos"
								v-validate="'required'"
								:class="{ erro: errors.has('n_banheiros_quimicos') }"
								class="create__input"
								type="number"
								v-model.number="desfile.n_banheiros_quimicos">
							<span v-if="errors.first('n_banheiros_quimicos')" class="errorPointer">{{ errors.first('n_banheiros_quimicos') }}</span>
						</fieldset>
						<!-- FIM n_banheiros_quimicos -->

						<!-- n_catadores_de_residuos -->
						<fieldset>
							<label class="create__label" for="n_catadores_de_residuos">Número de catadores de resíduos*</label>
							<input
								placeholder="0"
								id="n_catadores_de_residuos"
								name="n_catadores_de_residuos"
								v-validate="'required'"
								:class="{ erro: errors.has('n_catadores_de_residuos') }"
								class="create__input"
								type="number"
								v-model.number="desfile.n_catadores_de_residuos">
							<span v-if="errors.first('n_catadores_de_residuos')" class="errorPointer">{{ errors.first('n_catadores_de_residuos') }}</span>
						</fieldset>
						<!-- FIM n_catadores_de_residuos -->

						<!-- interesse_cadastrar_ambulantes SET CUSTOM ERROR -->
						<div class="custom-errors"
							:class="{ erro: custom_errors.has('interesse_cadastrar_ambulantes') }">
							<h5>Tem interesse em cadastrar ambulantes do bloco?*</h5>
							<ul>
								<li><input type="radio" v-model.number="desfile.interesse_cadastrar_ambulantes" value="1" id="cadastro-ambulantes-sim"><label class="create__label" for="cadastro-ambulantes-sim">Sim</label></li>
								<li><input type="radio" v-model.number="desfile.interesse_cadastrar_ambulantes" value="0" id="cadastro-ambulantes-nao"><label class="create__label" for="cadastro-ambulantes-nao">Não</label></li>
							</ul>
						</div>
						<!-- FIM interesse_cadastrar_ambulantes -->

						<!-- plano_de_operacao -->
						<fieldset>
							<label class="create__label" for="plano_de_operacao">Plano de operação e segurança(até 2000 carac.)*</label>
							<textarea
								placeholder="Plano da operação em até 2000 caracteres"
								id="plano_de_operacao"
								type="text"
								name="plano_de_operacao"
								v-validate="'required|max:2000'"
								:class="{ erro: errors.has('plano_de_operacao') }"
								class="create__input"
								v-model="desfile.plano_de_operacao"
							></textarea>
							<span v-if="errors.first('plano_de_operacao')" class="errorPointer">{{ errors.first('plano_de_operacao') }}</span>
						</fieldset>
						<!-- FIM plano_de_operacao -->

					</section>
					<!-- FIM operacao -->

					<section ref="comunicacao">
						<h2 class="titulo" indent="1">Comunicação</h2>
						<!-- patrocinio SET CUSTOM ERROR -->
						<div class="custom-errors"
							:class="{ erro: custom_errors.has('patrocinio') }">
							<h5>Tem patrocínio com exposição de marcas?*</h5>
							<ul>
								<li>
									<input
										type="radio"
										@change="setOption('desfile', 'patrocinio', $event)"
										value="opcional"
										id="patrocionio-opcional"
										><label class="create__label" for="patrocionio-opcional">Sim</label>
									<label
										v-if="ui.opcional.patrocinio"
										for="patrocinio--opcional"><span class="inputComplemento">Quais?</span></label>
									<input
										placeholder="Lista de patrocinadores"
										v-if="ui.opcional.patrocinio"
										name="patrocinio--opcional"
										id="patrocinio--opcional"
										v-model="desfile.patrocinio">
								</li>
								<li><input
									type="radio"
									v-model="desfile.patrocinio"
									value="Não"
									name="patrocinio-nao"
									id="patrocinio-nao"
									><label class="create__label" for="patrocinio-nao">Não</label>
								</li>
							</ul>
						</div>
						<!-- FIM patrocinio -->

						<!-- apoiadores SET CUSTOM ERROR -->
						<div class="custom-errors"
							:class="{ erro: custom_errors.has('apoiadores') }">
							<h5>Pretende divulgar apoiadores regionais / de bairro?*</h5>
							<ul>
								<li>
									<input
										type="radio"
										@change="setOption('desfile', 'apoiadores', $event)"
										value="opcional"
										id="apoiadores-opcional"
										><label class="create__label" for="apoiadores-opcional">Sim</label>
									<label
										v-if="ui.opcional.apoiadores"
										for="apoiadores--opcional"><span class="inputComplemento">Quais?</span></label>
									<input
										placeholder="Lista de patrocinadores"
										v-if="ui.opcional.patrocinio"
										name="apoiadores--opcional"
										id="apoiadores--opcional"
										v-model="desfile.apoiadores">
								</li>
								<li><input
									type="radio"
									v-model="desfile.apoiadores"
									value="Não"
									name="apoiadores-nao"
									id="apoiadores-nao"
									><label class="create__label" for="apoiadores-nao">Não</label>
								</li>
							</ul>
						</div>
						<!-- FIM apoiadores -->

						<!-- interesse_contato_empresas SET CUSTOM ERROR-->
						<div class="custom-errors"
							:class="{ erro: custom_errors.has('interesse_contato_empresas') }">
							<h5>Tem interesse em receber contato de empresas/agências interessadas em patrocinar o bloco?*</h5>
							<ul>
								<li><input id="interesse-patrocinio-sim" type="radio" v-model.number="desfile.interesse_contato_empresas" value="1"><label class="create__label" for="interesse-patrocinio-sim">Sim</label></li>
								<li><input id="interesse-patrocinio-nao" type="radio" v-model.number="desfile.interesse_contato_empresas" value="0"><label class="create__label" for="interesse-patrocinio-nao">Não</label></li>
							</ul>
						</div>
						<!-- FIM interesse_contato_empresas -->

						<!-- participar_campanhas SET CUSTOM ERROR -->
						<div class="custom-errors"
							:class="{ erro: custom_errors.has('participar_campanhas') }">
							<h5>Aceita participar das campanhas promovidas pela Prefeitura de SP durante o Carnaval?*</h5>
							<ul>
								<li><input id="campanhas-prefeitura-sim" type="radio" v-model.number="desfile.participar_campanhas" value="1"><label class="create__label" for="campanhas-prefeitura-sim">Sim</label></li>
								<li><input id="campanhas-prefeitura-nao" type="radio" v-model.number="desfile.participar_campanhas" value="0"><label class="create__label" for="campanhas-prefeitura-nao">Não</label></li>
							</ul>
						</div>
						<!-- FIM participar_campanhas -->

						<!-- autoriza_divulgacao SET CUSTOM ERROR -->
						<div class="custom-errors"
							:class="{ erro: custom_errors.has('autoriza_divulgacao') }">
							<!-- !!! destacar este item -->
							<h5>Autoriza divulgação no plano de comunicação da Cidade contendo a lista de blocos oficiais do Carnaval de Rua 2020?*</h5>
							<ul>
								<li><input id="divulgacao-sim" type="radio" v-model.number="desfile.autoriza_divulgacao" value="1"><label class="create__label" for="divulgacao-sim">Sim</label></li>
								<li><input id="divulgacao-nao" type="radio" v-model.number="desfile.autoriza_divulgacao" value="0"><label class="create__label" for="divulgacao-nao">Não</label></li>
							</ul>
						</div>
						<!-- FIM autoriza_divulgacao -->

						<!-- resenha -->
						<label class="create__label" for="resenha">Resenha (até 1000 carac.)*</label>
						<textarea
							placeholder="Conte-nos sobre sua proposta artística musical para nos ajudar a divulgar melhor seu trabalho"
							type="text"
							name="resenha"
							v-validate="'required'"
							:class="{ erro: errors.has('resenha') }"
							class="create__input"
							v-model="desfile.resenha"
						></textarea>
						<span v-if="errors.first('resenha')" class="errorPointer">{{ errors.first('resenha') }}</span>
						<!-- FIM resenha -->

					</section>
					<!-- FIM comunicacao -->

					<section ref="regras">
						<a :href="guiaDeRegrasURL" target="_blank" id="guiaDownload">
							<i class="icon-pdf icon"><span>pdf</span></i>
							<span class="titulo" indent="1">Guia de Regras 2020</span>
						</a>
						<!-- aceite_das_regras -->
						<fieldset id="aceite">
							<input
								type="checkbox"
								id="aceite_das_regras"
								name="aceite_das_regras"
								v-validate="'required'"
								:class="{ erro: errors.has('aceite_das_regras') }"
								v-model.number="desfile.aceite_das_regras">
							<label class="create__label" for="aceite_das_regras">Li e concordo com o conteúdo do Guia de Regras 2020.</label>
						</fieldset>
						<!-- aceite_das_regras -->
					</section>
					<!-- FIM regras -->

					<div v-if="allErrors.length" class="errors-list">
						<p>{{allErrors.length}} erros no formulário. Corrija os seguintes campos:</p>
						<ul>
							<li v-for="(error, index) in errors.items" :key="index">{{error.field}}</li>
							<li v-for="customError in custom_errors">{{customError[0]}}</li>
						</ul>
					</div>

					<nav>
						<button class="enviar" @click.prevent="criar">Enviar</button>
					</nav>
					<!-- <p>{{ fetch.mensagem }}</p> -->
				</form>

				<template v-if="fimForm">
					<div class="fim sucesso" v-if="!fetch.fazendo && fetch.sucesso">
						<h3>Suas respostas foram enviadas!</h3>

						<p>Esta inscrição não significa que o desfile desse bloco no Carnaval de Rua 2020 está garantida. A organização entrará em contato por e-mail para continuar o processo de cadastramento.</p>

						<button @click="criarOutro">
							<i class="icon-adicionar icon"><span>Criar outro</span></i>
							Criar outro desfile
						</button>

					</div>
					<div class="fim erro" v-if="!fetch.fazendo && !fetch.sucesso">
						<h3>Ocorreu um erro ao enviar suas respostas.</h3>
						<p>{{ fetch.mensagem }}</p>
						<p>Caso persista o erro, envie um email para <a href="mailto:carnavalderua@prefeitura.sp.gov.br">carnavalderua@prefeitura.sp.gov.br</a></p>
						<ul>
							<li>
								<button @click.prevent="criar">
									<i class="icon-novamente icon"><span>novamente</span></i>
									Tentar novamente
								</button>
							</li>
							<li>
								<button @click="salvaRespostas">
									<i class="icon-download icon"><span>download</span></i>
									Salvar respostas
								</button>
							</li>
						</ul>
					</div>
				</template>
			</div>
		<!-- </template> -->
	</div>
</template>
<script>
import axios from 'axios'
import fechadura from '@spurb/fechadura'
// import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Imagem from '@/components/Imagem'
import { consultasCommons } from '@/mixins/consultasCommons'
import { chave } from '@/utils/chave.json'

// OpenLayers
const MapaCarnaval = () => import('@/components/MapaCarnaval')

const apiconfig = {
	base: process.env.VUE_APP_API_URL + '/participe-restrito'
}

let MD5 = function (d) { let result = M(V(Y(X(d), 8 * d.length))); return result.toLowerCase() }; function M (d) { for (var _, m = '0123456789ABCDEF', f = '', r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X (d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V (d) { for (var _ = '', m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y (d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m; var t = f; var g = r; var e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn (d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff (d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg (d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh (d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii (d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add (d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol (d, _) { return d << _ | d >>> 32 - _ }

// Sugestão -> utilizar um autofill para testar o formulário durante o desenvolvimento:
// https://chrome.google.com/webstore/detail/form-filler/bnjjngeaknajbdcgpfkgnonkmififhfo

export default {
	name: 'ConfirmaBloco',
	$_veeValidate: {
		validator: 'new'
	},

	computed: {
		allErrors () {
			return this.errors.items.concat([...this.custom_errors])
		}
		// bigImg () {
		// 	return {
		// 		tipo: 'hero',
		// 		url: this.src('/arquivos/carnaval-2020/header-carnaval.png'),
		// 		caption: 'Carnaval de Rua 2020',
		// 		fonte: 'Secretaria Municipal da Cultura | SMC'
		// 	}
		// },
	},
	components: {
		// PageTop,
		Indice,
		Imagem,
		MapaCarnaval
	},

	mounted: function () {
		// Ajuste pontual no logo superior do participe
		// window.settimeout(function(){
		document.getElementsByTagName('h1')[0].innerHTML = ''
		// }, 1000)
	},

	created () {
		/* Cria um único watcher/observable para os "custom_errors" */
		this.$watch(vm => [
			vm.desfile['artistas'],
			vm.desfile['banda_em_trio_ou_solo'],
			vm.desfile['bateria'],
			vm.desfile['bloco_comunitario'],
			vm.desfile['estilo_musical_predominante'],
			vm.desfile['perfil_bloco'],
			vm.desfile['trio_eletrico'],
			vm.desfile['interesse_cadastrar_ambulantes'],
			vm.desfile['patrocinio'],
			vm.desfile['apoiadores'],
			vm.desfile['interesse_contato_empresas'],
			vm.desfile['participar_campanhas'],
			vm.desfile['autoriza_divulgacao']
		], () => this.customErrorsCheck())
	},
	data () {
		return {
			componentKey: 0,
			guiaDeRegrasURL: 'https://carnavalderua.prefeitura.sp.gov.br/wp-content/uploads/2019/09/Carnaval-2020-Guia-de-Regras.pdf',
			titulosLimpo: [],
			// comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			custom_errors: new Map(),
			custom_errors_items: [
				'artistas',
				'banda_em_trio_ou_solo',
				'bateria',
				'bloco_comunitario',
				'perfil_bloco',
				'estilo_musical_predominante',
				'trio_eletrico',
				'interesse_cadastrar_ambulantes',
				'patrocinio',
				'apoiadores',
				'interesse_contato_empresas',
				'participar_campanhas',
				'autoriza_divulgacao'
			],

			fetch: {
				fazendo: false,
				sucesso: true,
				mensagem: ''
			},

			fimForm: false,

			mapaAttrs: {
				center: [ -5191000, -2698002 ],
				zoom: 11,
				layers: [
					{
						title: 'Percursos',
						path: this.$store.getters.basePath + 'arquivos/carnaval-2020/Percursos.kml',
						stroke_color: 'rgba(0, 0, 0, 1)',
						// fill_color: 'rgba(255, 255, 255, .5)',
						stroke_width: 2
					}
				]
			},

			ui: {
				opcional: {
					data_do_desfile_2020: false,
					perfil_bloco: false,
					estilo_musical_predominante: false,
					artistas: false,
					bateria: false,
					banda_em_trio_ou_solo: false,
					trio_eletrico: false,
					patrocinio: false,
					apoiadores: false
				},
				form_valid: true
			},

			contato: {
				nome_responsavel: '',
				cpf_cnpj_responsavel: '',
				email_responsavel: '',
				telefone_responsavel: '',
				nome_coresponsavel: '',
				cpf_cnpj_coresponsavel: '',
				email_coresponsavel: '',
				telefone_coresponsavel: ''
			},

			desfile: {
				// id: '',
				nome_do_bloco: '',
				sentido_ab: 1, // nao se aplica a este form mas precisa constar no body do post
				mapa_ok: 0, // nao se aplica a este form mas precisa constar no body do post
				endereco_concentracao: '',
				complemento_concentracao: '',
				cep_concentracao: '',
				bairro_concentracao: '',
				itinerario: '',
				endereco_dispersao: '',
				complemento_dispersao: '',
				cep_dispersao: '',
				bairro_dispersao: '',
				data_do_desfile_2019: '',
				data_do_desfile_2020: '',
				hr_concentracao: '',
				hr_desfile: '',
				hr_encerramento: '',
				subprefeitura: '',
				publico_2019: '-',
				publico_estimado: '',
				ano_fundacao: '-',
				perfil_bloco: '-',
				estilo_musical_predominante: '-',
				bloco_comunitario: 'Não',
				artistas: 'Não',
				bateria: 'Não',
				banda_em_trio_ou_solo: 'Não',
				aceite_das_regras: '',
				apoiadores: '',
				autoriza_divulgacao: '',
				id_contato: '',
				// id_percurso: '', // não incluir para posts
				interesse_cadastrar_ambulantes: '',
				interesse_contato_empresas: '',
				n_ambulancias: 0,
				n_banheiros_quimicos: 0,
				n_brigadistas: 0,
				n_catadores_de_residuos: 0,
				n_cordeiros: 0,
				n_segurancas_habilitados: 0,
				participar_campanhas: '',
				patrocinio: '',
				plano_de_operacao: '',
				resenha: '',
				trio_eletrico: ''
			}
		}
	},
	mixins: [ consultasCommons ],

	methods: {
		criarOutro () {
			for (const key in this.desfile) {
				if (key !== 'sentido_ab' || key !== 'sentido_ab') { this.desfile[key] = '' }
			}
			for (const uiKey in this.ui) {
				this.ui[uiKey] = false
			}

			this.fetch.fazendo = false
			this.fetch.sucesso = true
			this.mensagem = ''
			this.fimForm = false
		},

		customErrorsCheck () {
			/*
			* Aplica classe 'error' em custom errors. Retorna Boolean (verdadeiro se existir erro)
			*/
			this.custom_errors.clear()

			this.custom_errors_items
				.filter(val => this.desfile[val] === '')
				.forEach(err => this.custom_errors.set(err, 'erro'))

			return this.custom_errors.size !== 0
		},

		criar () {
			/*
			 * 0. Validar todos os items
			 * 1. Cria contato em /contato
			 * 2. Cria desfile em /desfile com id de contato criado
			 * 3. Criar feedback para usuário (sucesso/fracasso)
			*/
			
			const config = {
				headers: {
					Current: fechadura(chave, 'bicho').encript,
					'Content-Type': 'application/json'
				}
			}

			// 0.1. Validacao de custom_errors
			const isCustomError = this.customErrorsCheck()

			// 0.2. Validacao de v-validate
			this.$validator.validateAll()
				.then(valid => {
					if (!valid || isCustomError) return false
					else return true
				})
				.then(isValid => {
					this.ui.form_valid = true
					if (isValid) {
						this.fetch.fazendo = true
						// 1.0 Checa contato
						const contactGetKey = MD5(`${this.contato.email_responsavel}${this.contato.cpf_cnpj_responsavel}`)
						axios.get(`${apiconfig.base}/contato/?key=${contactGetKey}&email_coresponsavel=${this.contato.email_coresponsavel}`)
							.then(res => {
								let idContato = 0
								parseInt(res.status) === 200 ? idContato = parseInt(res.data[0].id) : idContato = 0
								return idContato
							})
							.then(idContato => {
								// 1.1 Cria contato
								if (idContato === 0) {
									axios.post(apiconfig.base + '/contato/', this.contato, config)
										.then(res => parseInt(res.data)) // id contato criado
										.then(idContato => {
										// 2. Cria desfile com id de contato
											this.desfile.id_contato = idContato
											axios.post(apiconfig.base + '/desfile/', this.desfile, config)
												.then(res => {
												// 3. criar feedback para usuário (defile criado)
													console.log('desfile criado')
													this.fimForm = true
													this.fetch.sucesso = true
													this.fetch.mensagem = res.statusText
													this.fetch.fazendo = false
												})
												.catch(err => {
												// 3. console.log('criar feedback para usuário (contato criado, desfile não foi criado)')
													console.log('criar feedback para usuário (contato criado, desfile não foi criado)')
													console.log(err)
													this.fetch.sucesso = false
													this.fetch.mensagem = 'Falha para criar desfile.'
													this.fetch.fazendo = false
												})
										})
										.catch(err => {
										// 3. criar feedback para usuário (contato não foi criado)
											console.log(err)
											this.fetch.sucesso = false
											this.fetch.mensagem = 'Falha para criar contato.'
											this.fetch.fazendo = false
										})
								} else {
									// 2. Cria desfile com id de contato
									this.desfile.id_contato = idContato
									console.log(config);
									axios.put(apiconfig.base + '/desfile/' + this.desfile.id, this.desfile, config)
										.then(res => {
											// 3. criar feedback para usuário (defile criado)
											console.log('desfile criado')
											this.fimForm = true
											this.fetch.sucesso = true
											this.fetch.mensagem = res.statusText
											this.fetch.fazendo = false
										})
										.catch(err => {
											// 3. console.log('criar feedback para usuário (contato criado, desfile não foi criado)')
											console.log('criar feedback para usuário (contato criado, desfile não foi criado)')
											console.log(err)
											this.fetch.sucesso = false
											this.fetch.mensagem = 'Falha para criar desfile.'
											this.fetch.fazendo = false
										})
								}
							})
					} else {
						// 3. criar feedback para usuário (erros no formulário)
						console.error('criar feedback para usuário (erros no formulário)')
						this.ui.form_valid = false
					}
				})
		},

		displayToggle (el, type) {
			this.ui[el][type] = !this.ui[el][type]
		},

		setOption (grupo, item, evento, placeholder = '') {
			if (evento.target.value === 'opcional') { // Lida com exceções em 'select' e 'radio' definidos pelo valor 'opcional' para controlar inputs opcionais
				this.ui['opcional'][item] = true
				this[grupo][item] = placeholder
			} else {
				this.ui['opcional'][item] = false
				this[grupo][item] = evento.target.value
			}
		},

		salvaRespostas () {
			const todayDate = new Date().toISOString().slice(0, 10)
			const filename = `${this.contato.email_responsavel}_${todayDate}.json`
			const jsonStr = JSON.stringify({
				contato: this.contato,
				desfile: this.desfile
			})

			let element = document.createElement('a')
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr))
			element.setAttribute('download', filename)

			element.style.display = 'none'
			document.body.appendChild(element)

			element.click()

			document.body.removeChild(element)
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../variables';
$vermelho: #E71C88;

$branco-clique: rgba(255, 255, 255, .2);

* { box-sizing: border-box; }
*::selection { background-color: $vermelho; }

.header__carnaval {
	width: 100%
}
.apresentacao .titulo, .apresentacao p {
	max-width: 700px;
	margin: 1em auto;
}

.apresentacao .titulo {
	font-size: 200%;
	margin: 1rem auto;
}
.apresentacao p {
	font-family: Georgia,serif;
	font-size: 20px;
	line-height: 1.6;
	color:#333;
	text-rendering: optimizeLegibility;
	@media (max-width: 600px) {
		font-size: 1rem;
		margin: 0 1rem
	}
}
.Indice ul li {
	color: $vermelho;
}

@keyframes oscila {
	0% { transform: translateY(-50%) translateX(0); }
	25% { transform: translateY(-50%) translateX(-0.25rem); }
	50% { transform: translateY(-50%) translateX(0); }
	70% { transform: translateY(-50%) translateX(0.25rem); }
}

form {
	margin: 0;
	padding: 0;
	fieldset {
		padding: 0;
		margin: 0 0 1.5rem;
		border: none;
		&:last-child {
			margin-bottom: 0;
		}
	}
}

a {
	text-decoration: none;
	color: $vermelho;
	&:active { background-color: $vermelho-tr; }
}
h1, h2, h3, h4 {
	color: $vermelho
}

h3 {
	font-size: 2rem;
	color: $preto;
	margin: 6rem 0 1rem;
	line-height: 1.6;
}

section:first-child h3 { margin-top: 0; }

h4 {
	font-size: 1.15rem;
	color: $preto;
	line-height: 1.6;
	margin: 0 0 1rem;
}

textarea {
	resize: both;
}
input[type="radio"] {
	margin: 0 0.25rem 0 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: 1px solid $cinza-1;
	width: 0.75rem;
	height: 0.75rem;
	border-radius: 0.25rem;
	position: relative;
	cursor: pointer;
	&::after {
		position: absolute;
		top: calc(0.125rem/2);
		left: calc(0.125rem/2);
		display: inline-block;
		content: '';
		width: 0.5rem;
		height: 0.5rem;
		background-color: $preto;
		border-radius: 2px;
		opacity: 0;
		transition: opacity ease-in .1s;
	}
	&:checked::after { opacity: 1; }
}

input[type="checkbox"] {
	margin: 0 0.25rem 0 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	vertical-align: -2px;
	width: 1rem;
	height: 1rem;
	border: 1px solid $cinza-1;
	border-radius: 2px;
	position: relative;
	&::after {
		position: absolute;
		top: calc(0.125rem/2);
		left: calc(0.125rem/2);
		display: inline-block;
		content: '';
		width: 0.75rem;
		height: 0.75rem;
		background-color: $preto;
		border-radius: 2px;
		opacity: 0;
		transition: opacity ease-in .1s;
	}
	&:checked::after { opacity: 1; }
	&.erro + label {
		font-weight: 700;
		color: $vermelho;
	}
}

input[type="radio"] + *[class$="label"], input[type="checkbox"] + *[class$="label"] {
	color: $preto;
	line-height: 1.6;
	text-transform: none;
	vertical-align: baseline;
	@media (max-width: 600px) {
		font-size: 1rem;
	}
}

::-webkit-input-placeholder { color: $cinza-1; }
:-ms-input-placeholder { color: $cinza-1; }
::placeholder { color: $cinza-1; }

.errors-list {
    border: 1px solid $vermelho;
    padding: 0.5rem 1rem;
}

.login__input, .create__input, .update__input {
	font-family: $grotesca;
	font-size: 1rem;
	line-height: 1.2;
	border: none;
	background-color: $cinza-3;
	border-radius: 0.25rem;
	padding: 0.85rem 1rem calc(0.85rem - 4px);
	width: 100%;
	color: $preto;
	caret-color: $vermelho;
	border-bottom: 4px solid transparent;
	resize: none;
	transition: all ease-in .2s;
	&:focus { border-bottom-color: $preto; }
	&[name^="cep"], &[name^="publico"] {
		width: auto;
		& + a {
			vertical-align: top;
			display: inline-block;
			background-color: $cinza-1;
			padding: calc(0.75rem - 4px) 0.5rem;
			border-radius: 4px;
			color: #FFF;
			text-decoration: none;
			border: 4px solid $branco-clique;
			&:hover { background-color: $cinza-2; }
		}
	}
	&[name^="cep"] {
		margin-right: 0.5rem;
	}
	&[name^="publico"] {
		@media (max-width: 600px) {
			min-width: 100%;
		}
	}
	&[type="number"] {
		width: auto;
	}
}

.inputErro {
	background-color: $vermelho;
	color: #FFF;
	box-shadow: none;
	caret-color: #FFF;
}

.login__label {
	display: block;
	margin: 0 0 1rem;
}

.login__button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	background-color: $vermelho;
	color: #FFF;
	border: none;
	border-radius: 100%;
	cursor: pointer;
	transition: all ease-in .1s;
	.icon { font-size: 1.25rem; }
	&[disabled] {
		cursor: default;
		background-color: $cinza-3;
		&:hover { background-color: $cinza-3; }
	}
	&:hover { background-color: $vermelho-tr; }
}

.create__label, .update__label {
	display: inline-block;
	line-height: 1.6;
	text-transform: uppercase;
	color: $cinza-1;
	margin: 0 0 0.5rem;
	&[for^="cep"], &[for^="publico"], &[for^="n_"], &[for="ano_fundacao"] {
		margin-right: 0.5rem;
		@media (max-width: 600px) {
			display: block;
		}
	}
	& + label + input, & + input:not([class]) {
		font-family: $grotesca;
		font-size: 1rem;
		color: $preto;
		line-height: 1.2;
		padding: 0.35rem 0.5rem;
		border-radius: 0.25px;
		border: none;
		background-color: $cinza-3;
		margin-left: 1rem;
	}
	& + label > span.inputComplemento::before {
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 0.25rem;
		height: 0.25rem;
		border-radius: 100%;
		background-color: $cinza-1;
		margin: 0 0.45rem 0 0.5rem;
	}
	@media (max-width: 600px) {
		font-size: small;
		margin-bottom: 0.25rem;
	}
}

div.check-errors, div.custom-errors {
	margin: 1.5rem 0;
	& > h5 {
		color: $cinza-1;
		font-weight: normal;
		text-transform: uppercase;
		font-size: 1rem;
		margin: 2rem 0 0.25rem;
		line-height: 1.6;
		@media (max-width: 600px) {
			font-size: small;
			margin-bottom: 0.25rem;
		}
	}
	& > ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
	& > p {
		margin: 0 0 2rem;
		font-size: small;
		color: $cinza-1;
		padding-left: 1rem;
		line-height: 1.6;
	}
}

p.obs {
	font-size: 0.8rem;
	line-height: 1.6;
	margin: 0.5rem 0 0;
	padding: 0 1rem;
	color: $cinza-1;
	&::before { content: '('; }
	&::after { content: ')'; }
}

.form--create {
	max-width: 700px;
	padding: 0 1rem;
	margin: 0 auto;
	text-align: left;
	p.obrigatorios {
		line-height: 1.6;
		margin: 2rem 0;
		padding: 0.5rem 1rem;
		color: #FFF;
		background-color: $vermelho;
		border-radius: 4px;
		@media (max-width: 600px) {
			font-size: small;
			margin: 1rem 0;
		}
	}
	form {
		max-height: 100000vh;
		opacity: 1;
		overflow: hidden;
		transition: all ease-in .2s;
		&.hidden {
			max-height: 0;
			opacity: 0;
		}
		section {
			margin: 2rem 0;
			h2 {
				font-size: 2rem;
				margin: 4rem 0 1rem;
			}
			&:first-child h2 { margin-top: 0; }
			h4 {
				font-size: 1.2rem;
				margin: 2rem 0 1rem;
				&:first-child {
					margin-top: 0;
				}
			}
			fieldset {
				position: relative;
			}
			.errorPointer {
				display: block;
				margin: 0.5rem 0 0 1rem;
				font-size: small;
				line-height: 0.8rem;
				color: $preto;
				&::before {
					content: '!';
					display: inline-block;
					color: $vermelho;
					text-align: center;
					line-height: 0.75rem;
					border: 1px solid $vermelho;
					border-radius: 100%;
					width: 0.8rem;
					height: 0.8rem;
					margin-right: 0.25rem;
				}
			}
			#data_do_desfile_2020 {
				& + textarea {
					margin-top: 0.5rem;
					font-family: $grotesca;
					font-size: 1rem;
					color: $preto;
					padding: 0.85rem 1rem calc(0.85rem - 4px);
					border: none;
					border-bottom: 4px solid transparent;
					border-radius: 4px;
					width: 100%;
					background-color: $cinza-3;
					&:focus { border-bottom-color: $preto; }
				}
				&:focus + textarea {
					border-bottom-color: $preto;
				}
			}
		}
		nav {
			margin: 6rem 0;
			button {
				font-family: $grotesca;
				font-size: 1rem;
				border: 4px solid $branco-clique;
				color: #FFF;
				text-transform: uppercase;
				background-color: $verde;
				padding: 0.75rem 1rem;
				border-radius: 4px;
				width: 100%;
				cursor: pointer;
				&:hover {
					opacity: 0.8;
				}
			}
			@media (max-width: 600px) {
				margin: 3rem 0;
				button {
					width: auto;
				}
			}
		}
	}
}
.erro {
	border-bottom-color: $vermelho;
	background-color: $vermelho-tr;
	border-radius: 5px;
	&:focus { background-color: $cinza-3;}
}
div.fim {
	position: absolute;
	z-index: 1000;
	top: 60px;
	bottom: 80px;
	left: 0;
	right: 0;
	background-color: grey;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #FFF;
	line-height: 1.6;
	animation: surge ease-in .2s;
	@keyframes surge {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	h3 {
		font-size: 1.5rem;
		color: #FFF;
		margin: 0;
		padding: 0 1rem;
		max-width: 700px;
	}
	p {
		margin: 1rem 0;
		padding: 0 1rem;
		max-width: 700px;
		text-align: center;
		opacity: 0.5;
	}
	& > ul {
		list-style-type: none;
		padding: 0 1rem;
		display: flex;
		li {
			margin: 0 1rem;
			button {
				display: flex;
				flex-direction: column;
				align-items: center;
				border: none;
				background-color: rgba(255, 255, 255, .1);
				padding: 1rem 1.25rem;
				font-family: $grotesca;
				color: #FFF;
				font-size: 1rem;
				border-radius: 0.25rem;
				cursor: pointer;
				min-width: 8rem;
				.icon {
					font-size: 1.5rem;
					margin-bottom: 0.5rem;
				}
				&:hover { background-color: rgba(255, 255, 255, .2); }
			}
		}
	}
	&.sucesso { background-color: $verde; }
	&.erro { background-color: $vermelho; }
}
a#guiaDownload {
	display: flex;
	align-items: center;
	margin: 4rem 0 1rem;
	background-color: $vermelho;
	color: #FFF;
	text-decoration: none;
	padding: 1.75rem;
	border: 4px solid $branco-clique;
	border-radius: 0.25rem;
	transition: all ease-in .05s;
	.icon {
		font-size: 1.5rem;
		margin-right: 0.5rem;
	}
	span {
		display: inline-block;
		font-size: 1.25rem;
		line-height: 1.6;
	}
	&:hover {
		background-color: $vermelho-tr;
	}
	@media (max-width: 600px) {
		padding: 0.5rem;
		.icon { font-size: 1.25rem; }
		span { font-size: 1rem; }
	}
}
fieldset#aceite {
	& > label {
		width: calc(100% - 1.5rem);
		padding-left: 0.5rem;
		margin-bottom: 0;
		vertical-align: middle;
	}
}
</style>
