<template>
	<div class="ProjetosColocalizados">
		<div id="g-ACP_infografico_700px-box" class="ai2html ai2html-box-v5">
			<!-- Artboard: Prancheta_1 -->
			<div id="g-ACP_infografico_700px-Prancheta_1" class="g-artboard" data-aspect-ratio="1.296" data-min-width="700">
				<img id="g-ACP_infografico_700px-Prancheta_1-img" class="g-aiImg" :src="imgSrc('arquivos/arco-pinheiros/ACP-ProjetosColocalizados_base.jpg')"/>
				<div id="g-ai0-1" class="g-infografico_texto g-aiAbs" style="top:22.037%;left:39.2433%;margin-left:-157px;width:44.8571%;">
					<p class="g-pstyle0">ACP </p>
					<p class="g-pstyle1">Área Total de <span class="g-cstyle0">1.467 ha</span></p>
				</div>
				<div id="_REA_TOTAL_DE_63_54_ha_4_DO_ACP" class="g-infografico_texto g-aiAbs" style="top:35.3704%;left:66.1045%;width:29.1429%;">
					<p>CEAGESP</p>
					<p>Área aprox <span class="g-cstyle1">63 ha</span></p>
					<p>4% do ACP</p>
				</div>
				<div id="_REA_TOTAL_DE_63_54_ha_4_DO_ACP" class="g-infografico_texto g-aiAbs" style="top:46.8519%;left:66.1045%;width:29.1429%;">
					<p>PIU VL. LEOPOLDINA</p>
					<p>Área aprox <span class="g-cstyle1">30 ha</span></p>
					<p>2% do ACP</p>
				</div>
				<div id="_REA_TOTAL_DE_63_54_ha_4_DO_ACP" class="g-infografico_texto g-aiAbs" style="top:55.9259%;right:67.1533%;width:29.1429%;">
					<p class="g-pstyle2">AIU PQ TECNOLOGICO</p>
					<p class="g-pstyle2">Área aprox. <span class="g-cstyle1">100 ha</span></p>
					<p class="g-pstyle2">7% do ACP</p>
				</div>
				<div id="g-ai0-5" class="g-infografico_texto g-aiAbs" style="top:82.037%;right:67.2143%;width:25.7143%;">
					<p class="g-pstyle2">USP, IPT, INST. BUTANTAN</p>
					<p class="g-pstyle2">Área aprox. <span class="g-cstyle1">519 ha</span></p>
					<p class="g-pstyle2">35% do ACP</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProjetosColocalizados',
	methods: {
		imgSrc(caminho) {
			let url = this.$store.getters.basePath + caminho
			return url.toString()
		}
	}
};
</script>

<style lang="scss" scoped>
div.ProjetosColocalizados {
	overflow: auto;

	#g-ACP_infografico_700px-box .g-artboard {
		margin:0 auto;
	}
	#g-ACP_infografico_700px-box .g-artboard p {
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
	#g-ACP_infografico_700px-Prancheta_1 {
		position:relative;
		overflow:hidden;
		width:700px;
	}
	#g-ACP_infografico_700px-Prancheta_1 p {
		font-family:'roboto',segoe ui,myriad pro,arial,helvetica,sans-serif;
		font-weight:500;
		font-size:12px;
		line-height:16px;
		filter:alpha(opacity=100);
		-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
		opacity:1;
		letter-spacing:0em;
		text-align:left;
		color:rgb(51,51,51);
		text-transform:none;
		padding-bottom:0;
		padding-top:0;
		mix-blend-mode:normal;
		font-style:normal;
		height:auto;
	}
	#g-ACP_infografico_700px-Prancheta_1 .g-pstyle0 {
		font-size:16px;
		line-height:21px;
		text-align:center;
		color:rgb(255,255,255);
	}
	#g-ACP_infografico_700px-Prancheta_1 .g-pstyle1 {
		font-size:14px;
		line-height:21px;
		text-align:center;
		color:rgb(255,255,255);
	}
	#g-ACP_infografico_700px-Prancheta_1 .g-pstyle2 {
		text-align:right;
	}
	#g-ACP_infografico_700px-Prancheta_1 .g-cstyle0 {
		font-size:16px;
	}
	#g-ACP_infografico_700px-Prancheta_1 .g-cstyle1 {
		font-size:14px;
	}
}
</style>