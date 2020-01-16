<template>
	<div class="PerimetroInfoLapa">
		<div id="g-Infograficos_perimetros-box" class="ai2html ai2html-box-v5">
			<!-- Artboard: lapa -->
			<div id="g-Infograficos_perimetros-lapa" class="g-artboard" data-aspect-ratio="1.813" data-min-width="700">
				<img id="g-Infograficos_perimetros-lapa-img" class="g-aiImg" :src="bgSrc"/>
				<div id="g-ai0-1" class="g-Textos g-aiAbs" style="top:7.513%;left:12.8767%;margin-left:-31px;width:8.8571%;">
					<p class="g-pstyle0"> 510ha</p>
				</div>
				<div id="g-ai0-2" class="g-Estrutura g-aiAbs" style="top:25.1295%;left:1.6667%;width:21.5714%;">
					<p>Distritos</p>
					<p>Lapa, Freguesia do Ó </p>
					<p>e Pirituba</p>
					<p>&nbsp;</p>
					<p>Adjacente à OUC Água Branca, perpassa territórios separados pelas barreiras da linha férrea, do Rio Tietê e as marginais; </p>
					<p>&nbsp;</p>
					<p>Baixos índices de espaços verdes e incidência significativa de áreas sujeitas à inundação; </p>
					<p>&nbsp;</p>
				</div>
				<div id="g-ai0-3" class="g-Textos g-aiAbs" style="top:25.1295%;left:26.4192%;width:22%;">
					<p>Transformação do uso e ocupação do solo, com perda da relevância da atividade industrial em direção ao uso residencial e comercial vertical, resultando na disponibilidade de lotes e glebas para o desenvolvimento urbano;</p>
				</div>
				<div id="g-ai0-4" class="g-Textos g-aiAbs" style="top:25.1295%;left:51.714%;width:21.2857%;">
					<p>Oferta de infraestrutura de transporte público de alta e média capacidade (estações Água Branca e Lapa da CPTM; corredor de ônibus Pirituba/Lapa/Centro;terminal de ônibus; futura Linha 6 do Metrô, em obras) em contraste com a baixa densidade populacional;</p>
				</div>
				<div id="g-ai0-5" class="g-Textos g-aiAbs" style="top:25.1295%;left:76.814%;width:21.2857%;">
					<p>Presença de um importante polo de equipamentos públicos de porte regional (Terminal Rodoviário, Poupatempo, Mercado da Lapa, Subprefeitura da Lapa, Tendal da Lapa e Junta Comercial do Estado de São Paulo, sendo muitos deles edifícios tombados).</p>
					<p>&nbsp;</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PerimetroInfoLapa',
	props: {
		bgSrc: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
div.PerimetroInfoLapa {
	margin: 1rem 0;
	@media (max-width: 600px) {
		margin: 2rem 0;
	}
}
#g-Infograficos_perimetros-box .g-artboard {
	margin:0 auto;
}
#g-Infograficos_perimetros-box .g-artboard p {
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
#g-Infograficos_perimetros-lapa {
	position:relative;
	overflow:hidden;
	width:700px;
}
#g-Infograficos_perimetros-lapa p {
	font-family:'Roboto', sans-serif;
	font-weight:400;
	font-size:14px;
	line-height:17px;
	filter:alpha(opacity=100);
	-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
	opacity:1;
	letter-spacing:0em;
	text-align:left;
	color:rgb(105.000001341105,105.000001341105,101.000001579523);
	text-transform:none;
	padding-bottom:0;
	padding-top:0;
	mix-blend-mode:normal;
	font-style:normal;
	height:auto;
}
#g-Infograficos_perimetros-lapa .g-pstyle0 {
	font-family:arial,helvetica,sans-serif;
	font-weight:bold;
	font-size:15px;
	line-height:18px;
	text-align:center;
	color:rgb(255,255,255);
}
</style>
