<template>
	<div class="desafios-objetivos">
		<div id="g-DesafiosObjetivos-box" class="ai2html ai2html-box-v5">
			<!-- Artboard: 320 -->
			<div id="g-DesafiosObjetivos-320" class="g-artboard" data-aspect-ratio="0.29" data-min-width="320" data-max-width="696">
				<img id="g-DesafiosObjetivos-320-img" class="g-aiImg" :src="bgSrc320" />
				<div id="g-ai0-1" class="g-Camada_1 g-aiAbs" style="top:2.541%;left:5.9526%;width:87.5%;">
					<p>concentração de infraestruturas </p>
					<p>de grande porte </p>
					<p>+</p>
					<p>degradação física e ambiental</p>
					<p>+</p>
					<p>urbanização incompleta </p>
					<p>(grandes quadras não integradas ao entorno  e  </p>
					<p>áreas vazias ou com baixos índices de </p>
					<p>ocupação sem adequada infraestrutura)</p>
				</div>
				<div id="g-ai0-2" class="g-Camada_1 g-aiAbs" style="top:28.314%;left:5.952%;width:87.5%;">
					<p>ausência da diversidade de usos necessária ao adensamento populacional</p>
					<p>+ </p>
					<p>isolamento das margens do rio </p>
					<p>(poucas conexões urbanas efetivas e qualificadas que integrem as porções Norte e Sul do Arco Tietê)</p>
				</div>
				<div id="g-ai0-3" class="g-Camada_1 g-aiAbs" style="top:48%;left:5.9529%;width:87.5%;">
					<p>&nbsp;</p>
					<p>1. Qualificação urbanística dos eixos de estruturação da transformação urbana integrados às vizinhanças habitacionais e de polos comerciais</p>
					<p>&nbsp;</p>
					<p>2. Melhoria da mobilidade por meio do incentivo a mobilidade não motorizada e melhoria das conexões dos diferentes modos de transporte público, associado à qualificação do sistema de espaços </p>
					<p>públicos</p>
					<p>&nbsp;</p>
					<p>3. Recuperação da qualidade ambiental, por meio do incremento da oferta de espaços e áreas verdes, mitigando os problemas de microdrenagem e redução do efeito das ilhas de calor</p>
					<p>&nbsp;</p>
					<p>4. Criação de novas frentes urbanas associadas a reaproximação dos cursos d&rsquo;água, dispositivos de conexão e áreas de desenvolvimento urbano local</p>
					<p>&nbsp;</p>
					<p>5. Redução da vulnerabilidade social através da qualificação da moradia e oferta de habitações de interesse social e de mercado popular</p>
					<p>&nbsp;</p>
					<p>6. Ampliação da oferta de equipamentos urbanos e sociais dando suporte à demanda atual e futura.</p>
				</div>
			</div>

			<!-- Artboard: 700 -->
			<div id="g-DesafiosObjetivos-700" class="g-artboard" data-aspect-ratio="1.351" data-min-width="697">
				<img id="g-DesafiosObjetivos-700-img" class="g-aiImg" :src="bgSrc700" />
				<div id="g-ai1-1" class="g-Camada_1 g-aiAbs" style="top:5%;left:48.5885%;width:48.2066%;">
					<p>&nbsp;</p>
					<p>1. Qualificação urbanística dos eixos de estruturação da transformação urbana integrados às vizinhanças habitacionais e de polos comerciais;</p>
					<p>&nbsp;</p>
					<p>2. Melhoria da mobilidade por meio do incentivo a mobilidade não motorizada e melhoria das conexões dos diferentes modos de transporte público, associado à qualificação do sistema de espaços públicos</p>
					<p>&nbsp;</p>
					<p>3. Recuperação da qualidade ambiental, por meio do incremento da oferta de espaços e áreas verdes, mitigando os problemas de microdrenagem e redução do efeito das ilhas de calor;</p>
					<p>&nbsp;</p>
					<p>4. Criação de novas frentes urbanas associadas a reaproximação dos cursos d&rsquo;água, dispositivos de conexão e áreas de desenvolvimento urbano local;</p>
					<p>&nbsp;</p>
					<p>5. Redução da vulnerabilidade social através da qualificação da moradia e oferta de habitações de interesse social e de mercado popular;</p>
					<p>&nbsp;</p>
					<p>6. Ampliação da oferta de equipamentos urbanos e sociais dando suporte à demanda atual e futura.</p>
				</div>
				<div id="g-ai1-2" class="g-Camada_1 g-aiAbs" style="top:10.078%;left:1.8657%;width:33.429%;">
					<p>concentração de infraestruturas </p>
					<p>de grande porte </p>
					<p>+</p>
					<p>degradação física e ambiental</p>
					<p>+</p>
					<p>urbanização incompleta </p>
					<p>(grandes quadras não integradas ao entorno  e  áreas vazias ou com baixos índices de ocupação sem adequada infraestrutura)</p>
				</div>
				<div id="g-ai1-3" class="g-Camada_1 g-aiAbs" style="top:62.4062%;left:1.8657%;width:33.5725%;">
					<p>ausência da diversidade de usos necessária ao adensamento populacional</p>
					<p>+ </p>
					<p>isolamento das margens do rio </p>
					<p>(poucas conexões urbanas efetivas e qualificadas que integrem as porções Norte e Sul do Arco Tietê)</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Escalas',
	props: {
		bgSrc700: {
			type: String,
			required: true
		},
		bgSrc320: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.desafios-objetivos {
	margin: 4rem 0;
	@media (max-width: 600px) {
		margin: 2rem 0;
	}
}

@media (max-width: 699px) {
	#g-DesafiosObjetivos-320 { display: block; }
	#g-DesafiosObjetivos-700 { display: none; }
}
@media (min-width: 700px) {
	#g-DesafiosObjetivos-320 { display: none; }
	#g-DesafiosObjetivos-700 { display: block; }
}

#g-DesafiosObjetivos-box .g-artboard {
	margin:0 auto;
}
#g-DesafiosObjetivos-box .g-artboard p {
	margin:0;
}
.g-aiAbs {
	position:absolute;
}
.g-aiImg {
	display:block;
	width:100% !important;
}
.g-aiSymbol {
	position: absolute;
	box-sizing: border-box;
}
.g-aiPointText p { white-space: nowrap; }
#g-DesafiosObjetivos-320 {
	position:relative;
	overflow:hidden;
	width:320px;
}
#g-DesafiosObjetivos-320 p {
	font-family:'roboto',segoe ui,myriad pro,arial,helvetica,sans-serif;
	font-weight:400;
	font-size:14px;
	line-height:17px;
	filter:alpha(opacity=100);
	-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
	opacity:1;
	letter-spacing:0em;
	text-align:left;
	color:rgb(255,255,255);
	text-transform:none;
	padding-bottom:0;
	padding-top:0;
	mix-blend-mode:normal;
	font-style:normal;
	height:auto;
}
#g-DesafiosObjetivos-700 {
	position:relative;
	overflow:hidden;
	width:697px;
}
#g-DesafiosObjetivos-700 p {
	font-family:'roboto',segoe ui,myriad pro,arial,helvetica,sans-serif;
	font-weight:400;
	font-size:14px;
	line-height:17px;
	filter:alpha(opacity=100);
	-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
	opacity:1;
	letter-spacing:0em;
	text-align:left;
	color:rgb(255,255,255);
	text-transform:none;
	padding-bottom:0;
	padding-top:0;
	mix-blend-mode:normal;
	font-style:normal;
	height:auto;
}
</style>
