<template>
	<div class="pai">
		<div id="g-pai-box" class="ai2html ai2html-box-v5">
			<div id="g-pai-Prancheta_1" class="g-artboard" data-aspect-ratio="1.811" data-min-width="600">
				<img id="g-pai-Prancheta_1-img" class="g-aiImg" :src="imgSrc('arquivos/setor-central-2/ai2html/pai.png')"/>
				<div id="g-ai0-1" class="g-Camada_1 g-aiAbs" style="top:0%;left:50%;margin-left:-44px;width:14.6667%;">
					<p class="g-pstyle0">PAI</p>
					<p class="g-pstyle1">Programa de Ação Integrada</p>
				</div>
				<div id="g-ai0-2" class="g-Camada_1 g-aiAbs" style="top:0%;left:64.0062%;width:36%;">
					<p class="g-pstyle2">Projeto de Intervenção Local</p>
					<p class="g-pstyle3">&ndash; Comitê local do Grupo de Gestão</p>
					<p class="g-pstyle3">&ndash; Conselho Gestor das ZEIS</p>
				</div>
				<div id="g-ai0-3" class="g-Camada_1 g-aiAbs" style="top:5.7357%;left:28.6667%;margin-left:-44px;width:14.6667%;">
					<p class="g-pstyle4">Programa de intervenções</p>
				</div>
				<div id="g-ai0-4" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:16.5232%;margin-top:-2.7px;left:48.3705%;width:24px;">
					<p class="g-pstyle5">$</p>
				</div>
				<div id="g-ai0-5" class="g-Camada_1 g-aiAbs" style="top:20.2258%;left:7.3333%;margin-left:-44px;width:14.6667%;">
					<p class="g-pstyle4">Recursos da conta</p>
				</div>
				<div id="g-ai0-6" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:39.7677%;margin-top:-2.7px;left:48.3705%;width:24px;">
					<p class="g-pstyle5">$</p>
				</div>
				<div id="g-ai0-7" class="g-Camada_1 g-aiAbs" style="top:43.7722%;left:7.3333%;margin-left:-44px;width:14.6667%;">
					<p class="g-pstyle4">Demandas sociais</p>
				</div>
				<div id="g-ai0-8" class="g-Camada_1 g-aiAbs" style="top:51.0172%;left:28.6667%;margin-left:-44px;width:14.6667%;">
					<p class="g-pstyle6">COORDENAÇÃO GERAL DA AIU</p>
					<p class="g-pstyle7">(SP-Urbanismo)</p>
				</div>
				<div id="g-ai0-9" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:63.616%;margin-top:-2.7px;left:48.3705%;width:24px;">
					<p class="g-pstyle5">$</p>
				</div>
				<div id="g-ai0-10" class="g-Camada_1 g-aiAbs" style="top:63.9979%;left:71.375%;margin-left:-47.5px;width:15.8333%;">
					<p class="g-pstyle6">GG AIU CENTRAL + CEOUC</p>
				</div>
				<div id="g-ai0-11" class="g-Camada_1 g-aiAbs" style="top:65.5073%;left:7.3333%;margin-left:-44px;width:14.6667%;">
					<p class="g-pstyle4">Projetos</p>
					<p class="g-pstyle4">estratégicos</p>
				</div>
				<div id="g-ai0-12" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:87.4643%;margin-top:-2.7px;left:48.3705%;width:24px;">
					<p class="g-pstyle5">$</p>
				</div>
				<div id="g-ai0-13" class="g-Camada_1 g-aiAbs" style="top:91.1669%;left:7.3333%;margin-left:-44px;width:14.6667%;">
					<p class="g-pstyle4">Políticas públicas</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Pai',
	methods: {
		imgSrc (caminho) {
			let url = this.$store.getters.basePath + caminho
			return url.toString()
		}
	}
}
</script>

<style lang="scss" scoped>
div.pai {
	margin: 0 auto;
	overflow-x: auto;
	max-width: 100%;
	width: 992px;
	border-radius: 40px;
	@media print {
		-webkit-color-adjust: exact;
		color-adjust: exact;
	}
	#g-pai-box .g-artboard {
		margin:0 auto;
	}
	#g-pai-box .g-artboard p {
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
	#g-pai-Prancheta_1 {
		position:relative;
		overflow:hidden;
		width:600px;
	}
	#g-pai-Prancheta_1 p {
		font-family:'roboto',segoe ui,myriad pro,arial,helvetica,sans-serif;
		font-weight:400;
		font-size:10px;
		line-height:12px;
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
	#g-pai-Prancheta_1 .g-pstyle0 {
		font-weight:700;
		font-size:12px;
		line-height:14px;
		text-align:center;
	}
	#g-pai-Prancheta_1 .g-pstyle1 {
		font-size:12px;
		line-height:14px;
		text-align:center;
	}
	#g-pai-Prancheta_1 .g-pstyle2 {
		font-weight:700;
		font-size:12px;
		line-height:14px;
	}
	#g-pai-Prancheta_1 .g-pstyle3 {
		font-size:12px;
		line-height:14px;
	}
	#g-pai-Prancheta_1 .g-pstyle4 {
		text-align:center;
	}
	#g-pai-Prancheta_1 .g-pstyle5 {
		font-weight:500;
		font-size:4px;
		line-height:5px;
		height:5px;
		color:rgb(243.000000715256,146.000006496906,0);
	}
	#g-pai-Prancheta_1 .g-pstyle6 {
		font-weight:700;
		font-size:12px;
		line-height:14px;
		text-align:center;
		color:rgb(243.000000715256,146.000006496906,0);
	}
	#g-pai-Prancheta_1 .g-pstyle7 {
		font-size:12px;
		line-height:14px;
		text-align:center;
		color:rgb(189.000003933907,189.000003933907,189.000003933907);
	}
}
</style>
