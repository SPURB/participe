<template>
	<div class="PerimetroInfoSantana">
		<div id="g-Infograficos_perimetros-box" class="ai2html ai2html-box-v5">
			<!-- Artboard: santana -->
			<div id="g-Infograficos_perimetros-santana" class="g-artboard" data-aspect-ratio="1.429" data-min-width="700">
				<img id="g-Infograficos_perimetros-santana-img" class="g-aiImg" :src="bgSrc"/>
				<div id="g-ai0-1" class="g-Textos g-aiAbs" style="top:10%;left:11.2769%;margin-left:-40px;width:11.4286%;">
					<p class="g-pstyle0"> 610ha</p>
				</div>
				<div id="g-ai0-2" class="g-Textos g-aiAbs" style="top:25.102%;left:2.5711%;width:19.8571%;">
					<p>Distritos: Santana e Vila Guilherme;</p>
					<p>&nbsp;</p>
					<p>Vias que atravessam o território na direção Norte-Sul, em parte realizando importantes conexões entre os bairros da Zona Norte e o Centro e suportando a principal oferta de transporte público &ndash; as Avenidas Santos Dummont, Cruzeiro do Sul, Otto Baumgart, Joaquina Ramalho e Nadir Dias de Figueiredo.</p>
				</div>
				<div id="g-ai0-3" class="g-Textos g-aiAbs" style="top:25.102%;left:26.714%;width:21.2857%;">
					<p>Presença de grandes glebas públicas e privadas, com ocupação extensiva do solo e aptas a recepcionarem projetos de parcelamento que resultem em novas áreas verdes e na ruptura de grandes quadras, ampliando a acessibilidade:</p>
				</div>
				<div id="g-ai0-4" class="g-Textos g-aiAbs" style="top:25.102%;left:51.8569%;width:21.7143%;">
					<p>Grupo 1, localizado ao longo da Av. Zaki Narchi, corresponde às glebas públicas de propriedade do Município e do Estado de São Paulo, nas quais hoje estão instalados equipamentos que ocupam parcialmente os lotes, resultando em muitas áreas residuais; </p>
				</div>
				<div id="g-ai0-5" class="g-Textos g-aiAbs" style="top:25.102%;left:76.814%;width:20.7143%;">
					<p>Grupo 2, glebas privadas localizadas principalmente ao longo da Marginal Tietê e próximo ao Córrego da Divisa contendo antigas áreas industriais em processo de transformação;</p>
					<p>&nbsp;</p>
					<p>Grupo 3, glebas privadas localizados predominantemente no eixo da Av. Otto Baumgart, com usos ativos de ocupação extensiva do solo, como os centros de compras, eventos e logística.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PerimetroInfoSantana',
	props: {
		bgSrc: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
div.PerimetroInfoSantana {
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
#g-Infograficos_perimetros-santana {
	position:relative;
	overflow:hidden;
	width:700px;
}
#g-Infograficos_perimetros-santana p {
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
#g-Infograficos_perimetros-santana .g-pstyle0 {
	font-family:arial,helvetica,sans-serif;
	font-weight:bold;
	font-size:19px;
	line-height:23px;
	text-align:center;
	color:rgb(255,255,255);
}
</style>
