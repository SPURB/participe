<template>
	<div class="mem">
		<div id="g-acpmem-Prancheta_1_c_pia" class="g-artboard" data-aspect-ratio="1.333" data-min-width="720">
			<img id="g-acpmem-Prancheta_1_c_pia-img" class="g-aiImg" :src="imgSrc('arquivos/arco-pinheiros-2/ai2html/mem.png')"/>
			<div id="g-ai0-1" class="g-Camada_1 g-aiAbs" style="top:17.037%;left:75.7791%;margin-left:-56.5px;width:15.6944%;">
				<p class="g-pstyle0">GUARULHOS</p>
			</div>
			<div id="g-ai0-2" class="g-Camada_1 g-aiAbs" style="top:37.9629%;left:12.168%;margin-left:-56.5px;width:15.6944%;">
				<p class="g-pstyle0">OSASCO</p>
			</div>
			<div id="g-ai0-3" class="g-Camada_1 g-aiAbs" style="top:39.6296%;left:37.5152%;width:8.8889%;">
				<p>Arco Tietê</p>
			</div>
			<div id="g-ai0-4" class="g-Camada_1 g-aiAbs" style="top:39.6296%;left:61.543%;width:8.8889%;">
				<p>Arco Leste</p>
			</div>
			<div id="g-ai0-5" class="g-Camada_1 g-aiAbs" style="top:49.8147%;left:44.7374%;margin-left:-42px;width:11.6667%;">
				<p class="g-pstyle1">Setor Central</p>
			</div>
			<div id="g-ai0-6" class="g-Camada_1 g-aiAbs" style="top:50.7406%;left:23.4874%;margin-left:-69px;width:19.1667%;">
				<p class="g-pstyle2">Arco Pinheiros</p>
			</div>
			<div id="g-ai0-7" class="g-Camada_1 g-aiAbs" style="top:58.8888%;left:30.9874%;width:8.8889%;">
				<p>Faria Lima</p>
			</div>
			<div id="g-ai0-8" class="g-Camada_1 g-aiAbs" style="top:59.6295%;left:45.2707%;width:14.1667%;">
				<p>Arco Tamanduatei</p>
			</div>
			<div id="g-ai0-9" class="g-Camada_1 g-aiAbs" style="top:73.8888%;left:33.0707%;width:17.0833%;">
				<p>Água Espraiada</p>
				<p>Chucri Zaidan</p>
			</div>
			<div id="g-ai0-10" class="g-Camada_1 g-aiAbs" style="top:81.8517%;left:20.0152%;width:15%;">
				<p>Arco Jurubatuba</p>
			</div>
			<div id="g-ai0-11" class="g-Camada_1 g-aiAbs" style="top:82.4073%;left:59.4374%;margin-left:-56.5px;width:15.6944%;">
				<p class="g-pstyle0">SÃO CAETANO</p>
				<p class="g-pstyle0">DO SUL</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MEM',
	methods: {
		imgSrc (caminho) {
			let url = this.$store.getters.basePath + caminho
			return url.toString()
		}
	}
}
</script>

<style lang="scss" scoped>
div.mem {
	margin: 0 auto;
	overflow-x: auto;
	max-width: 100%;
	width: 720px;
	@media print {
		-webkit-color-adjust: exact;
		color-adjust: exact;
	}
	#g-acpmem-box .g-artboard {
		margin:0 auto;
	}
	#g-acpmem-box .g-artboard p {
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
	#g-acpmem-Prancheta_1_c_pia {
		position:relative;
		overflow:hidden;
		width:720px;
	}
	#g-acpmem-Prancheta_1_c_pia p {
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
	#g-acpmem-Prancheta_1_c_pia .g-pstyle0 {
		font-size:14px;
		line-height:17px;
		text-align:center;
		color:rgb(189.000003933907,189.000003933907,189.000003933907);
	}
	#g-acpmem-Prancheta_1_c_pia .g-pstyle1 {
		text-align:center;
	}
	#g-acpmem-Prancheta_1_c_pia .g-pstyle2 {
		font-size:13px;
		line-height:16px;
		text-align:center;
	}
}
</style>
