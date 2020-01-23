<template>
	<div class="Escalas">
		<div id="g-Escalas-box" class="ai2html ai2html-box-v5">

			<!-- Artboard: 700 -->
			<div id="g-Escalas-700" class="g-artboard" data-aspect-ratio="1.383" data-min-width="700">
				<img id="g-Escalas-700-img" class="g-aiImg" :src="bgSrc700" />
				<div id="1" class="g-Textos g-aiAbs" style="top:7.7075%;left:26.3334%;width:72.5714%;">
					<p class="g-pstyle0">MACROÁREA DE ESTRUTURAÇÃO METROPOLITANA &ndash; MEM</p>
					<p class="g-pstyle1">TERRITÓRIO DA INFRAESTRUTURA</p>
					<p>&bull; Adensamento Populacional</p>
					<p>&bull; Equilíbrio Emprego Moradia</p>
					<p>&bull; Renovação da infraestrutura</p>
				</div>
				<div id="2" class="g-Textos g-aiAbs" style="top:30.83%;left:26.3334%;width:73.4286%;">
					<p class="g-pstyle0">PROJETO DE INTERVENÇÃO URBANA ARCO TIETÊ &ndash; PIU Arco Tietê </p>
					<p class="g-pstyle1">PROGRAMA DE TRANSFORMAÇÃO</p>
					<p>&bull; Programa de desenvolvimento urbano</p>
					<p>&bull; Definição de densidades e indicadores</p>
					<p>&bull; Definição de instrumento urbanístico</p>
				</div>
				<div id="3" class="g-Textos g-aiAbs" style="top:54.1501%;left:26.3334%;width:74.4286%;">
					<p class="g-pstyle0">PERÍMETROS DE INTERVENÇÃO </p>
					<p class="g-pstyle1">ESTRUTURAÇÃO DO PROJETO</p>
					<p>&bull; Intervenções e parâmetros urbanísticos</p>
					<p>&bull; Instrumentos de financiamento</p>
					<p>&bull; Modelo de gestão democrática</p>
				</div>
				<div id="4" class="g-Textos g-aiAbs" style="top:77.4703%;left:26.3334%;width:74%;">
					<p class="g-pstyle0">PROJETOS ESTRATÉGICOS </p>
					<p class="g-pstyle1">IMPLANTAÇÃO DO PROJETO</p>
					<p>&bull; Modelo de ação integrada</p>
					<p>&bull; Detalhamento das intervenções </p>
					<p>&bull; Celebração de parcerias</p>
				</div>
			</div>

			<!-- Artboard: 320 -->
			<div id="g-Escalas-320" class="g-artboard" data-aspect-ratio="0.241" data-min-width="320" data-max-width="699">
				<img id="g-Escalas-320-img" class="g-aiImg" :src="bgSrc320" />
				<div id="1" class="g-Textos g-aiAbs" style="top:17.4208%;left:5.7294%;width:89.6875%;">
					<p class="g-pstyle0">MACROÁREA DE ESTRUTURAÇÃO METROPOLITANA &ndash; MEM</p>
					<p class="g-pstyle1">TERRITÓRIO DA INFRAESTRUTURA</p>
					<p>&bull; Adensamento Populacional</p>
					<p>&bull; Equilíbrio Emprego Moradia</p>
					<p>&bull; Renovação da infraestrutura</p>
				</div>
				<div id="2" class="g-Textos g-aiAbs" style="top:43.5897%;left:5.7294%;width:79.375%;">
					<p class="g-pstyle0">PROJETO DE INTERVENÇÃO URBANA ARCO TIETÊ &ndash; PIU Arco Tietê </p>
					<p class="g-pstyle1">PROGRAMA DE TRANSFORMAÇÃO</p>
					<p>&bull; Programa de desenvolvimento urbano</p>
					<p>&bull; Definição de densidades e indicadores</p>
					<p>&bull; Definição de instrumento urbanístico</p>
				</div>
				<div id="3" class="g-Textos g-aiAbs" style="top:68.4012%;left:5.7294%;width:85%;">
					<p class="g-pstyle0">PERÍMETROS DE INTERVENÇÃO </p>
					<p class="g-pstyle1">ESTRUTURAÇÃO DO PROJETO</p>
					<p>&bull; Intervenções e parâmetros urbanísticos</p>
					<p>&bull; Instrumentos de financiamento</p>
					<p>&bull; Modelo de gestão democrática</p>
				</div>
				<div id="4" class="g-Textos g-aiAbs" style="top:92.0814%;left:5.7294%;width:78.75%;">
					<p class="g-pstyle0">PROJETOS ESTRATÉGICOS </p>
					<p class="g-pstyle1">IMPLANTAÇÃO DO PROJETO</p>
					<p>&bull; Modelo de ação integrada</p>
					<p>&bull; Detalhamento das intervenções </p>
					<p>&bull; Celebração de parcerias</p>
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
div.processo2 {
	margin: 4rem 0;
	@media (max-width: 600px) {
		margin: 2rem 0;
	}
}

@media (max-width: 699px) {
	#g-Escalas-320 { display: block; }
	#g-Escalas-700 { display: none; }
}
@media (min-width: 700px) {
	#g-Escalas-320 { display: none; }
	#g-Escalas-700 { display: block; }
}

#g-Escalas-box .g-artboard {
	margin:0 auto;
}
#g-Escalas-box .g-artboard p {
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
#g-Escalas-700 {
	position:relative;
	overflow:hidden;
	width:700px;
}
#g-Escalas-700 p {
	font-family:'roboto',segoe ui,myriad pro,arial,helvetica,sans-serif;
	font-weight:400;
	font-size:14px;
	line-height:17px;
	filter:alpha(opacity=100);
	-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
	opacity:1;
	letter-spacing:0em;
	text-align:left;
	color:rgb(0,0,0);
	text-transform:none;
	padding-bottom:0;
	padding-top:0;
	mix-blend-mode:normal;
	font-style:normal;
	height:auto;
}
#g-Escalas-700 .g-pstyle0 {
	font-weight:700;
	color:rgb(243.000000715256,159.000005722046,74.0000031888485);
}
#g-Escalas-700 .g-pstyle1 {
	color:rgb(243.000000715256,159.000005722046,74.0000031888485);
}
#g-Escalas-320 {
	position:relative;
	overflow:hidden;
	width:320px;
}
#g-Escalas-320 p {
	font-family:'roboto',segoe ui,myriad pro,arial,helvetica,sans-serif;
	font-weight:400;
	font-size:14px;
	line-height:17px;
	filter:alpha(opacity=100);
	-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
	opacity:1;
	letter-spacing:0em;
	text-align:left;
	color:rgb(0,0,0);
	text-transform:none;
	padding-bottom:0;
	padding-top:0;
	mix-blend-mode:normal;
	font-style:normal;
	height:auto;
}
#g-Escalas-320 .g-pstyle0 {
	font-weight:700;
	color:rgb(243.000000715256,159.000005722046,74.0000031888485);
}
#g-Escalas-320 .g-pstyle1 {
	color:rgb(243.000000715256,159.000005722046,74.0000031888485);
}
</style>
