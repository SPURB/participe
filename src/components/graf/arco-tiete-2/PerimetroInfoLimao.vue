<template>
	<div class="PerimetroInfoLimao">
		<div id="g-Infograficos_perimetros-box" class="ai2html ai2html-box-v5">
			<!-- Artboard: limao -->
			<div id="g-Infograficos_perimetros-limao" class="g-artboard" data-aspect-ratio="1.781" data-min-width="700">
				<img id="g-Infograficos_perimetros-limao-img" class="g-aiImg" :src="bgSrc"/>
				<div id="g-ai0-1" class="g-Textos g-aiAbs" style="top:12.9771%;left:14.8484%;margin-left:-40.5px;width:11.5714%;">
					<p class="g-pstyle0"> 234ha</p>
				</div>
				<div id="g-ai0-2" class="g-Textos g-aiAbs" style="top:37.4046%;left:1.714%;width:29.5714%;">
					<p>Distritos: Limão e Casa Verde; </p>
					<p>&nbsp;</p>
					<p>Inclui três pontes que estabelecem conexões entre a Zona Norte e o Centro: ponte da Freguesia do Ó na Av. Inajar de Souza, ponte Júlio de Mesquita Neto na Av. Nicolas Boer e a ponte do Limão na Av. Ordem e Progresso e os chamados Perímetros de Integração da OUC Água Branca;</p>
				</div>
				<div id="g-ai0-3" class="g-Textos g-aiAbs" style="top:37.4046%;left:34.714%;width:29.5714%;">
					<p>Concentração de habitações precárias e problemas de vulnerabilidade social do arco, com diversas famílias vivendo em favelas e em conjuntos habitacionais, alguns hoje degradados e carentes de espaços públicos e equipamentos de suporte;</p>
				</div>
				<div id="g-ai0-4" class="g-Textos g-aiAbs" style="top:37.659%;left:68.2854%;width:29.5714%;">
					<p>Trata-se de um dos poucos locais do Arco onde a indústria da transformação ainda apresenta inúmeros estabelecimentos ativos e empregos</p>
					<p>&nbsp;</p>
					<p>Presença de áreas sujeitas à inundação, principalmente ao longo dos antigos meandros do rio Tietê e a ausência de áreas verdes em todo o perímetro. </p>
					<p> </p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PerimetroInfoLimao',
	props: {
		bgSrc: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
div.PerimetroInfoLimao {
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
#g-Infograficos_perimetros-limao {
	position:relative;
	overflow:hidden;
	width:700px;
}
#g-Infograficos_perimetros-limao p {
	font-family:'roboto',segoe ui,myriad pro,arial,helvetica,sans-serif;
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
#g-Infograficos_perimetros-limao .g-pstyle0 {
	font-family:arial,helvetica,sans-serif;
	font-weight:bold;
	font-size:19px;
	line-height:23px;
	text-align:center;
	color:rgb(255,255,255);
}
</style>
