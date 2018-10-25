<template>
	<div class="LimitesAdm">
		<div id="g-ACP_escala_2_limitesadm_700px-box" class="ai2html ai2html-box-v5">
			<!-- Artboard: Prancheta_1 -->
			<div id="g-ACP_escala_2_limitesadm_700px-Prancheta_1" class="g-artboard" data-aspect-ratio="1.296" data-min-width="700">
				<img id="g-ACP_escala_2_limitesadm_700px-Prancheta_1-img" class="g-aiImg" :src="imgSrc('arquivos/arco-pinheiros/ACP-LimitesAdm_base.jpg')"/>
				<div id="g-ai0-1" class="g-distritos g-aiAbs" style="top:15.5556%;right:52.9594%;width:17%;">
					<p class="g-pstyle0">Jaguara</p>
				</div>
				<div id="g-ai0-2" class="g-distritos g-aiAbs" style="top:20.5556%;left:82.9431%;margin-left:-59.5px;width:17%;">
					<p class="g-pstyle1">Barra Funda</p>
				</div>
				<div id="g-ai0-3" class="g-distritos g-aiAbs" style="top:25%;left:65.3641%;margin-left:-59.5px;width:17%;">
					<p class="g-pstyle1">Lapa</p>
				</div>
				<div id="g-ai0-4" class="g-distritos g-aiAbs" style="top:28.1481%;left:47.0609%;margin-left:-59.5px;width:17%;">
					<p class="g-pstyle1">Vl. </p>
					<p>&nbsp;</p>
					<p class="g-pstyle1">Leopoldina</p>
				</div>
				<div id="g-ai0-5" class="g-distritos g-aiAbs" style="top:33.1481%;left:47.0812%;width:8.7143%;">
					<p class="g-pstyle2">LAPA</p>
				</div>
				<div id="g-ai0-6" class="g-distritos g-aiAbs" style="top:35.3704%;left:79.4506%;margin-left:-59.5px;width:17%;">
					<p class="g-pstyle1">Perdizes</p>
				</div>
				<div id="g-ai0-7" class="g-distritos g-aiAbs" style="top:40.7407%;right:56.9174%;width:17%;">
					<p class="g-pstyle0">Jaguaré</p>
				</div>
				<div id="g-ai0-8" class="g-municipios g-aiAbs" style="top:51.6667%;right:78.9328%;width:17%;">
					<p class="g-pstyle3">OSASCO</p>
				</div>
				<div id="g-ai0-9" class="g-distritos g-aiAbs" style="top:63.1481%;right:56.1643%;width:17%;">
					<p class="g-pstyle0">Rio Pequeno</p>
				</div>
				<div id="g-ai0-10" class="g-distritos g-aiAbs" style="top:62.4074%;right:40.891%;width:17%;">
					<p class="g-pstyle4">Butantã</p>
				</div>
				<div id="g-ai0-11" class="g-distritos g-aiAbs" style="top:68.3333%;left:43.415%;width:14.4286%;">
					<p class="g-pstyle2">BUTANTÃ</p>
				</div>
				<div id="g-ai0-12" class="g-distritos g-aiAbs" style="top:78.7037%;left:23.498%;margin-left:-59.5px;width:17%;">
					<p class="g-pstyle1">Raposo Tavares</p>
				</div>
				<div id="g-ai0-13" class="g-distritos g-aiAbs" style="top:81.8519%;left:65.1409%;margin-left:-59.5px;width:17%;">
					<p class="g-pstyle1">Morumbi</p>
				</div>
				<div id="g-ai0-14" class="g-distritos g-aiAbs" style="top:81.8519%;left:51.0854%;margin-left:-59.5px;width:17%;">
					<p class="g-pstyle1">Vl. Sônia</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LimitesAdm',
	methods: {
		imgSrc (caminho) {
			let url = this.$store.getters.basePath + caminho
			return url.toString()
		}
	}
}
</script>

<style lang="scss" scoped>
div.LimitesAdm {
	overflow: auto;

	#g-ACP_escala_2_limitesadm_700px-box .g-artboard {
		margin:0 auto;
	}
	#g-ACP_escala_2_limitesadm_700px-box .g-artboard p {
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
	#g-ACP_escala_2_limitesadm_700px-Prancheta_1 {
		position:relative;
		overflow:hidden;
		width:700px;
	}
	#g-ACP_escala_2_limitesadm_700px-Prancheta_1 p {
		font-family:'roboto',segoe ui,myriad pro,arial,helvetica,sans-serif;
		font-weight:500;
		font-size:11px;
		line-height:5px;
		filter:alpha(opacity=100);
		-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
		opacity:1;
		letter-spacing:0em;
		text-align:left;
		color:rgb(189.000003933907,189.000003933907,189.000003933907);
		text-transform:none;
		padding-bottom:0;
		padding-top:0;
		mix-blend-mode:normal;
		font-style:normal;
		height:auto;
	}
	#g-ACP_escala_2_limitesadm_700px-Prancheta_1 .g-pstyle0 {
		text-align:right;
	}
	#g-ACP_escala_2_limitesadm_700px-Prancheta_1 .g-pstyle1 {
		text-align:center;
	}
	#g-ACP_escala_2_limitesadm_700px-Prancheta_1 .g-pstyle2 {
		font-size:14px;
		line-height:17px;
		color:rgb(255,255,255);
	}
	#g-ACP_escala_2_limitesadm_700px-Prancheta_1 .g-pstyle3 {
		font-size:17px;
		text-align:right;
	}
	#g-ACP_escala_2_limitesadm_700px-Prancheta_1 .g-pstyle4 {
		line-height:13px;
		text-align:right;
	}
}
</style>
