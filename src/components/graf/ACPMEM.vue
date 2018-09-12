<template>
	<div class="ACPMEM">
		<div id="g-ACP_MEM_700px-Prancheta_1" class="g-artboard" data-aspect-ratio="1.176" data-min-width="700">
			<img id="g-ACP_MEM_700px-Prancheta_1-img" class="g-aiImg" :src="imgSrc('arquivos/arco-pinheiros/ACP-MEM_base.png')"/>
			<div id="g-ai0-1" class="g-TEXTOS g-aiAbs" style="top:21.6807%;left:74.9286%;margin-left:-56.5px;width:16.1429%;">
				<p class="g-pstyle0">GUARULHOS</p>
			</div>
			<div id="g-ai0-2" class="g-TEXTOS g-aiAbs" style="top:40.6723%;left:9.5%;margin-left:-56.5px;width:16.1429%;">
				<p class="g-pstyle0">OSASCO</p>
			</div>
			<div id="g-ai0-3" class="g-TEXTOS g-aiAbs" style="top:42.1849%;left:35.5714%;width:9.1429%;">
				<p>Arco Tietê</p>
			</div>
			<div id="g-ai0-4" class="g-TEXTOS g-aiAbs" style="top:42.1849%;left:60.2857%;width:9.1429%;">
				<p>Arco Leste</p>
			</div>
			<div id="g-ai0-5" class="g-TEXTOS g-aiAbs" style="top:51.4286%;left:43%;margin-left:-42px;width:12%;">
				<p class="g-pstyle1">Setor Central</p>
			</div>
			<div id="g-ai0-6" class="g-TEXTOS g-aiAbs" style="top:52.2689%;left:21.1429%;margin-left:-69px;width:19.7143%;">
				<p class="g-pstyle2">Arco Pinheiros</p>
			</div>
			<div id="g-ai0-7" class="g-TEXTOS g-aiAbs" style="top:59.6639%;left:28.8571%;width:9.1429%;">
				<p>Faria Lima</p>
			</div>
			<div id="g-ai0-8" class="g-TEXTOS g-aiAbs" style="top:60.3361%;left:43.5485%;width:14.5714%;">
				<p>Arco Tamanduatei</p>
			</div>
			<div id="g-ai0-9" class="g-TEXTOS g-aiAbs" style="top:73.2773%;left:31%;width:17.5714%;">
				<p>Água Espraiada</p>
				<p>Chucri Zaidan</p>
			</div>
			<div id="g-ai0-10" class="g-TEXTOS g-aiAbs" style="top:80.5042%;left:17.5714%;width:15.4286%;">
				<p>Arco Jurubatuba</p>
			</div>
			<div id="g-ai0-11" class="g-TEXTOS g-aiAbs" style="top:81.0084%;left:58.12%;margin-left:-56.5px;width:16.1429%;">
				<p class="g-pstyle0">SÃO CAETANO </p>
				<p class="g-pstyle0">DO SUL</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ACPMEM',
	methods: {
		imgSrc(caminho) {
			let url = this.$store.getters.basePath + caminho
			return url.toString()
		}
	}
};
</script>

<style lang="scss" scoped>
div.ACPMEM {
	overflow: auto;

	#g-ACP_MEM_700px-box .g-artboard {
		margin:0 auto;
	}
	#g-ACP_MEM_700px-box .g-artboard p {
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
	#g-ACP_MEM_700px-Prancheta_1 {
		position:relative;
		overflow:hidden;
		width:700px;
	}
	#g-ACP_MEM_700px-Prancheta_1 p {
		font-family:'roboto',segoe ui,myriad pro,arial,helvetica,sans-serif;
		font-weight:400;
		font-size:12px;
		line-height:14px;
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
	#g-ACP_MEM_700px-Prancheta_1 .g-pstyle0 {
		font-size:14px;
		line-height:17px;
		text-align:center;
		color:rgb(189.000003933907,189.000003933907,189.000003933907);
	}
	#g-ACP_MEM_700px-Prancheta_1 .g-pstyle1 {
		text-align:center;
	}
	#g-ACP_MEM_700px-Prancheta_1 .g-pstyle2 {
		font-size:13px;
		line-height:16px;
		text-align:center;
	}
}
</style>