<template>
	<div class="caracterizacao">
		<div id="g-caracterizacao-box" class="ai2html ai2html-box-v5">

			<!-- Artboard: Prancheta_1 -->
			<div id="g-caracterizacao-Prancheta_1" class="g-artboard" data-aspect-ratio="1.321" data-min-width="700">
				<img id="g-caracterizacao-Prancheta_1-img" class="g-aiImg" :src="imgSrc('arquivos/arco-pinheiros-2/ai2html/caracterizacao.png')"/>
				<div id="g-ai0-1" class="g-Camada_1 g-aiAbs" style="top:2.4528%;left:2.8574%;width:40.5714%;">
					<p><span class="g-cstyle0">54.883</span><span class="g-cstyle1"> hab</span> (atualização 2017 + novo perímetro)</p>
					<p><span class="g-cstyle0">36</span><span class="g-cstyle1"> hab/ha</span> (MSP: <span class="g-cstyle2">74</span> hab/ha)</p>
				</div>
				<div id="g-ai0-2" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:13.6804%;margin-top:-5.5px;left:94.2626%;margin-left:-20.5px;width:41px;">
					<p class="g-pstyle0">LAPA</p>
				</div>
				<div id="g-ai0-3" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:14.4351%;margin-top:-5.5px;left:85.0769%;margin-left:-13.5px;width:27px;">
					<p class="g-pstyle1">1</p>
				</div>
				<div id="g-ai0-4" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:18.9634%;margin-top:-5.5px;left:85.0769%;margin-left:-13.5px;width:27px;">
					<p class="g-pstyle1">2</p>
				</div>
				<div id="g-ai0-5" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:21.6049%;margin-top:-5.5px;left:86.9817%;margin-left:-13.5px;width:27px;">
					<p class="g-pstyle1">3</p>
				</div>
				<div id="g-ai0-6" class="g-Camada_1 g-aiAbs" style="top:24.1509%;left:2.8574%;width:40.5714%;">
					<p class="g-pstyle2"><span class="g-cstyle0">90.100</span> empregos</p>
					<p class="g-pstyle2"><span class="g-cstyle0">1,9</span> empregos/hab</p>
				</div>
				<div id="g-ai0-7" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:27.8576%;margin-top:-5.6px;left:87.3721%;margin-left:-28.5px;width:57px;">
					<p class="g-pstyle0">BUTANTÃ</p>
				</div>
				<div id="g-ai0-8" class="g-Camada_1 g-aiAbs" style="top:31.6981%;left:51.9287%;margin-left:-32px;width:9.1429%;">
					<p class="g-pstyle3" style="opacity: .64;">ÁREA TOTAL</p>
					<p class="g-pstyle4">1.509 ha</p>
				</div>
				<div id="g-ai0-9" class="g-Camada_1 g-aiAbs" style="top:35.8491%;left:72.8573%;width:25.7143%;">
					<p class="g-pstyle5">SUBPREFEITURAS E DISTRITOS</p>
					<p class="g-pstyle6">LAPA</p>
					<p class="g-pstyle7"><span class="g-cstyle2">1.</span> Vila Leopoldina</p>
					<p class="g-pstyle7"><span class="g-cstyle2">2.</span> Jaguaré</p>
					<p class="g-pstyle6">BUTANTÃ</p>
					<p class="g-pstyle7"><span class="g-cstyle2">3.</span> Butantã</p>
				</div>
				<div id="g-ai0-10" class="g-Camada_1 g-aiAbs" style="top:47.1698%;left:2.8574%;width:40.5714%;">
					<p class="g-pstyle8">90%</p>
					<p class="g-pstyle9">Usos não residenciais</p>
				</div>
				<div id="g-ai0-11" class="g-Camada_1 g-aiAbs" style="top:66.9811%;left:2.8574%;width:40.5714%;">
					<p class="g-pstyle2"><span class="g-cstyle0">8%</span> Usos residenciais</p>
					<p class="g-pstyle2"><span class="g-cstyle0">2%</span> Favelas e núcleos</p>
				</div>
				<div id="g-ai0-12" class="g-Camada_1 g-aiAbs" style="top:89.434%;left:2.8574%;width:40.7143%;">
					<p class="g-pstyle10"><span class="g-cstyle0">9.000</span> aprox.</p>
					<p class="g-pstyle9">Domicílios em áreas de favelas e núcleos </p>
				</div>
				<div id="g-ai0-13" class="g-Camada_1 g-aiAbs" style="top:93.5849%;left:49.2143%;width:50.5714%;">
					<p class="g-pstyle11">Área incorporada ao perímetro do Arco Pinheiros</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Caracterizacao',
	methods: {
		imgSrc (caminho) {
			let url = this.$store.getters.basePath + caminho
			return url.toString()
		}
	}
}
</script>

<style lang="scss" scoped>
div.caracterizacao {
	margin: 0 auto;
	overflow-x: auto;
	max-width: 100%;
	width: 700px;
	@media print {
		-webkit-color-adjust: exact;
		color-adjust: exact;
	}
	#g-caracterizacao-box .g-artboard {
		margin:0 auto;
	}
	#g-caracterizacao-box .g-artboard p {
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
	#g-caracterizacao-Prancheta_1 {
		position:relative;
		overflow:hidden;
		width:700px;
	}
	#g-caracterizacao-Prancheta_1 p {
		font-family:'roboto','segoe ui','myriad pro',arial,helvetica,sans-serif;
		font-weight:400;
		font-size:10px;
		line-height:24px;
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
	#g-caracterizacao-Prancheta_1 .g-pstyle0 {
		font-size:8px;
		line-height:10px;
		height:10px;
		text-align:center;
		color:rgb(119.000000506639,119.000000506639,119.000000506639);
	}
	#g-caracterizacao-Prancheta_1 .g-pstyle1 {
		font-weight:700;
		font-size:8px;
		line-height:10px;
		height:10px;
		text-align:center;
		color:rgb(51.0000007599592,51.0000007599592,51.0000007599592);
	}
	#g-caracterizacao-Prancheta_1 .g-pstyle2 {
		font-size:12px;
		color:rgb(51.0000007599592,51.0000007599592,51.0000007599592);
	}
	#g-caracterizacao-Prancheta_1 .g-pstyle3 {
		font-weight:700;
		font-size:8px;
		line-height:10px;
		text-align:center;
		color:rgb(255,255,255);
	}
	#g-caracterizacao-Prancheta_1 .g-pstyle4 {
		font-weight:700;
		font-size:16px;
		line-height:19px;
		text-align:center;
		color:rgb(255,255,255);
	}
	#g-caracterizacao-Prancheta_1 .g-pstyle5 {
		font-weight:700;
		font-size:8px;
		line-height:10px;
		color:rgb(119.000000506639,119.000000506639,119.000000506639);
	}
	#g-caracterizacao-Prancheta_1 .g-pstyle6 {
		font-size:8px;
		line-height:10px;
		padding-top: 10px;
	}
	#g-caracterizacao-Prancheta_1 .g-pstyle7 {
		font-size:12px;
		line-height:14px;
		color:rgb(0,0,0);
	}
	#g-caracterizacao-Prancheta_1 .g-pstyle8 {
		font-weight:700;
		font-size:20px;
		color:rgb(243.000000715256,146.000006496906,0);
	}
	#g-caracterizacao-Prancheta_1 .g-pstyle9 {
		font-size:12px;
		line-height:14px;
		color:rgb(51.0000007599592,51.0000007599592,51.0000007599592);
	}
	#g-caracterizacao-Prancheta_1 .g-pstyle10 {
		font-size:12px;
	}
	#g-caracterizacao-Prancheta_1 .g-pstyle11 {
		font-size:12px;
		line-height:19px;
		color:rgb(119.000000506639,119.000000506639,119.000000506639);
	}
	#g-caracterizacao-Prancheta_1 .g-cstyle0 {
		font-weight:700;
		font-size:20px;
		color:rgb(243.000000715256,146.000006496906,0);
	}
	#g-caracterizacao-Prancheta_1 .g-cstyle1 {
		font-size:12px;
		color:rgb(51.0000007599592,51.0000007599592,51.0000007599592);
	}
	#g-caracterizacao-Prancheta_1 .g-cstyle2 {
		font-weight:700;
	}
}
</style>
