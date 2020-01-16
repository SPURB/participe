<template>
	<div class="PizzaCustos">
		<div id="g-7_Grafico_custo_ACT_320px-box" class="ai2html ai2html-box-v5">
			<!-- Artboard: custo -->
			<div id="g-7_Grafico_custo_ACT_320px-custo" class="g-artboard" data-aspect-ratio="0.561" data-min-width="320">
				<img id="g-7_Grafico_custo_ACT_320px-custo-img" class="g-aiImg" :src="bgSrc"/>
				<div id="g-ai0-1" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:3.6323%;margin-top:-9.7px;left:2.5613%;width:325px;">
					<p class="g-pstyle0">% DA ESTIMATIVA TOTAL DE CUSTOS BÁSICOS</p>
				</div>
				<div id="g-ai0-2" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:11.1858%;margin-top:-7.8px;left:47.5388%;width:38px;">
					<p class="g-pstyle1">2%</p>
				</div>
				<div id="g-ai0-3" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:16.449%;margin-top:-7.8px;left:23.8083%;width:38px;">
					<p class="g-pstyle1">2%</p>
				</div>
				<div id="g-ai0-4" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:17.3262%;margin-top:-7.8px;left:37.9758%;width:45px;">
					<p class="g-pstyle1">10%</p>
				</div>
				<div id="g-ai0-5" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:26.2736%;margin-top:-7.8px;left:23.9255%;width:45px;">
					<p class="g-pstyle1">12%</p>
				</div>
				<div id="g-ai0-6" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:32.414%;margin-top:-7.8px;left:73.2614%;width:45px;">
					<p class="g-pstyle1">50%</p>
				</div>
				<div id="g-ai0-7" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:40.6596%;margin-top:-7.8px;left:29.8581%;width:45px;">
					<p class="g-pstyle1">25%</p>
				</div>
				<div id="g-ai0-8" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:55.0457%;margin-top:-7.8px;left:38.4561%;width:144px;">
					<p class="g-pstyle1">REDE DE MOBILIDADE</p>
				</div>
				<div id="g-ai0-9" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:62.1256%;margin-top:-8.1px;left:38.4561%;width:89px;">
					<p class="g-pstyle1">HABITAÇÃO</p>
				</div>
				<div id="g-ai0-10" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:70.5195%;margin-top:-15px;left:38.4561%;width:112px;">
					<p class="g-pstyle1">EQUIPAMENTOS</p>
					<p class="g-pstyle1">PÚBLICOS </p>
				</div>
				<div id="g-ai0-11" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:76.3098%;margin-top:-8px;left:38.4561%;width:101px;">
					<p class="g-pstyle1">REDE HÍDRICA</p>
				</div>
				<div id="g-ai0-12" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:84.7301%;margin-top:-15px;left:38.4561%;width:130px;">
					<p class="g-pstyle1">REDE DE ESPAÇOS </p>
					<p class="g-pstyle1">PÚBLICOS</p>
				</div>
				<div id="g-ai0-13" class="g-Gr_fico g-aiAbs g-aiPointText" style="top:90.4845%;margin-top:-7.8px;left:38.4561%;width:123px;">
					<p class="g-pstyle1">INFRAESTRUTURA</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PizzaCustos',
	props: {
		bgSrc: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.PizzaCustos {
	margin: 4rem 0;
	@media (max-width: 600px) {
		margin: 2rem 0;
	}
}

#g-7_Grafico_custo_ACT_320px-box .g-artboard {
	margin:0 auto;
}
#g-7_Grafico_custo_ACT_320px-box .g-artboard p {
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
#g-7_Grafico_custo_ACT_320px-custo {
	position:relative;
	overflow:hidden;
	width:320px;
}
#g-7_Grafico_custo_ACT_320px-custo p {
	font-family:'roboto',segoe ui,myriad pro,arial,helvetica,sans-serif;
	font-weight:400;
	font-size:12px;
	line-height:14px;
	height:auto;
	filter:alpha(opacity=100);
	-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
	opacity:1;
	letter-spacing:0em;
	text-align:left;
	color:rgb(0,0,0);
	text-transform:none;
	padding-bottom:0;
	padding-top:0;
	mix-blend-mode:normal;
	font-style:normal;
}
#g-7_Grafico_custo_ACT_320px-custo .g-pstyle0 {
	font-weight:700;
	font-size:14px;
	line-height:17px;
	height:17px;
}
#g-7_Grafico_custo_ACT_320px-custo .g-pstyle1 {
	height:14px;
}
</style>
