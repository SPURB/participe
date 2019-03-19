<template>
	<div class="ConselhoGestor ai2html">
		<div id="g-Infografico_conselhogestor_arco_pinheiros-box" class="ai2html ai2html-box-v5">
			<!-- Artboard: conselhogestor_acp -->
			<div id="g-Infografico_conselhogestor_arco_pinheiros-conselhogestor_acp" class="g-artboard" data-aspect-ratio="1.389" data-min-width="700">
				<img id="g-Infografico_conselhogestor_arco_pinheiros-conselhogestor_acp-img" class="g-aiImg" :src="imgSrc('arquivos/arco-pinheiros/ACP-CG.png')"/>
				<div id="g-ai0-1" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:8.9558%;margin-top:-9.1px;right:67.7402%;width:128px;">
					<p class="g-pstyle0">Órgãos municipais</p>
				</div>
				<div id="g-ai0-2" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:8.8933%;margin-top:-8.8px;left:67.6077%;width:162px;">
					<p class="g-pstyle1">Comunidade Acadêmica</p>
				</div>
				<div id="g-ai0-3" class="g-Camada_1 g-aiAbs" style="top:29.7619%;left:85.9163%;width:11%;">
					<p>Conselho Municipal</p>
					<p>de Habitação</p>
				</div>
				<div id="g-ai0-4" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:34.4885%;margin-top:-8.8px;left:9.6429%;width:57px;">
					<p class="g-pstyle1">ONGS</p>
				</div>
				<div id="g-ai0-5" class="g-Camada_1 g-aiAbs" style="top:61.5079%;left:2.7143%;width:12.2857%;">
					<p>Conselhos</p>
					<p>Participativos</p>
					<p>das Prefeituras</p>
					<p>Regionais</p>
				</div>
				<div id="g-ai0-6" class="g-Camada_1 g-aiAbs" style="top:62.5%;left:49.9794%;margin-left:-116px;width:33.1429%;">
					<p class="g-pstyle2">Sistema de monitoramento das ações do PIU Arco Pinheiros pela sociedade</p>
				</div>
				<div id="g-ai0-7" class="g-Camada_1 g-aiAbs" style="top:62.8968%;left:85.928%;width:14.1429%;">
					<p>Moradores e Trabalhadores da Região</p>
				</div>
				<div id="g-ai0-8" class="g-Camada_1 g-aiAbs" style="top:88.4921%;left:31.9495%;width:10.8571%;">
					<p>Instituições</p>
					<p>Empresariais</p>
				</div>
			</div>
		</div>

		<div id="g-Infografico_conselhogestor_arco_pinheiros-320-box" class="ai2html ai2html-box-v5">
			<!-- Artboard: Prancheta_1 -->
			<div id="g-Infografico_conselhogestor_arco_pinheiros-320-Prancheta_1" class="g-artboard" data-aspect-ratio="0.251" data-min-width="320">
				<img id="g-Infografico_conselhogestor_arco_pinheiros-320-Prancheta_1-img" class="g-aiImg" :src="imgSrc('arquivos/arco-pinheiros/ACP-CG_320.png')"/>
				<div id="g-ai0-1" class="g-Camada_1 g-aiAbs" style="top:14.8077%;left:50.1419%;margin-left:-154.5px;width:96.5625%;">
					<p class="g-pstyle0">Sistema de monitoramento das ações do PIU Arco Pinheiros pela sociedade.</p>
				</div>
				<div id="g-ai0-2" class="g-Camada_1 g-aiAbs" style="top:25.4629%;left:0.6107%;width:29.375%;">
					<p>Órgãos municipais</p>
				</div>
				<div id="g-ai0-3" class="g-Camada_1 g-aiAbs" style="top:36.98%;left:0.1672%;width:30.3125%;">
					<p>Comunidade Acadêmica</p>
				</div>
				<div id="g-ai0-4" class="g-Camada_1 g-aiAbs" style="top:47.7919%;left:0.2454%;width:30%;">
					<p>Conselho Municipal</p>
					<p>de Habitação</p>
				</div>
				<div id="g-ai0-5" class="g-Camada_1 g-aiAbs" style="top:59.9357%;left:0.2982%;width:30.3125%;">
					<p>Moradores e Trabalhadores da Região</p>
				</div>
				<div id="g-ai0-6" class="g-Camada_1 g-aiAbs" style="top:70.591%;left:0.2982%;width:30.3125%;">
					<p>Conselhos </p>
					<p>Participativos</p>
					<p>das Prefeituras </p>
					<p>Regionais</p>
				</div>
				<div id="g-ai0-7" class="g-Camada_1 g-aiAbs" style="top:83.675%;left:0.256%;width:30.3125%;">
					<p>Instituições</p>
					<p>Empresariais</p>
				</div>
				<div id="g-ai0-8" class="g-Camada_1 g-aiAbs" style="top:95.9755%;left:0.2982%;width:33.4375%;">
					<p>ONGS</p>
				</div>
			</div>
		</div>
		<!-- End ai2html - 2018-09-04 10:06 -->
	</div>
</template>

<script>
export default {
	name: 'ConselhoGestor',
	methods: {
		imgSrc (caminho) {
			let url = this.$store.getters.basePath + caminho
			return url.toString()
		}
	}
}
</script>

<style lang="scss" scoped>
* { padding: unset !important; }
@media print and (max-width: 700px) {
	#g-Infografico_conselhogestor_arco_pinheiros-box { display: none; }
}
@media screen and (min-width: 700px) {
	#g-Infografico_conselhogestor_arco_pinheiros-320-box { display: none; }
}

#g-Infografico_conselhogestor_arco_pinheiros-320-box .g-artboard {
	margin:0 auto;
}
#g-Infografico_conselhogestor_arco_pinheiros-320-box .g-artboard p {
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
#g-Infografico_conselhogestor_arco_pinheiros-320-Prancheta_1 {
	position:relative;
	overflow:hidden;
	width:320px;
}
#g-Infografico_conselhogestor_arco_pinheiros-320-Prancheta_1 p {
	font-family:'roboto',segoe ui,myriad pro,arial,helvetica,sans-serif;
	font-weight:300;
	font-size:13px;
	line-height:16px;
	filter:alpha(opacity=100);
	-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
	opacity:1;
	letter-spacing:0em;
	text-align:left;
	color:rgb(51.0000007599592,51.0000007599592,51.0000007599592);
	text-transform:none;
	padding-bottom:0;
	padding-top:0;
	mix-blend-mode:normal;
	font-style:normal;
	height:auto;
}
#g-Infografico_conselhogestor_arco_pinheiros-320-Prancheta_1 .g-pstyle0 {
	font-weight:500;
	font-size:17px;
	line-height:20px;
	text-align:center;
}

#g-Infografico_conselhogestor_arco_pinheiros-box .g-artboard {
	margin:0 auto;
}
#g-Infografico_conselhogestor_arco_pinheiros-box .g-artboard p {
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
#g-Infografico_conselhogestor_arco_pinheiros-conselhogestor_acp {
	position:relative;
	overflow:hidden;
	width:700px;
}
#g-Infografico_conselhogestor_arco_pinheiros-conselhogestor_acp p {
	font-family:'roboto',segoe ui,myriad pro,arial,helvetica,sans-serif;
	font-weight:300;
	font-size:13px;
	line-height:16px;
	filter:alpha(opacity=100);
	-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
	opacity:1;
	letter-spacing:0em;
	text-align:left;
	color:rgb(51.0000007599592,51.0000007599592,51.0000007599592);
	text-transform:none;
	padding-bottom:0;
	padding-top:0;
	mix-blend-mode:normal;
	font-style:normal;
	height:auto;
}
#g-Infografico_conselhogestor_arco_pinheiros-conselhogestor_acp .g-pstyle0 {
	height:16px;
	text-align:right;
}
#g-Infografico_conselhogestor_arco_pinheiros-conselhogestor_acp .g-pstyle1 {
	height:16px;
}
#g-Infografico_conselhogestor_arco_pinheiros-conselhogestor_acp .g-pstyle2 {
	font-weight:500;
	font-size:16px;
	line-height:19px;
	text-align:center;
}
</style>
