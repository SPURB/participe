<template>
	<div class="VidaSegura" ref="conteudoConsulta">
		<PageTop background_image_src="./arquivos/capas/vida-segura.jpg" :esta_consulta="estaConsulta">
			<template slot="subtitulo">
				<div>{{ estaConsulta.textoIntro }}</div>
			</template>
		</PageTop>
		<Indice :titulos="titulosLimpo"></Indice>
		<Apoio>
		<template slot="item1">
			<li>
				<input type="radio" name="tabs" id="item1">
				<label for="item1">Anexos</label>
				<div class="conteudoTab">
					<ul style="list-style-type: square; color: #DDD;">
						<li v-for="anexo in anexos">
							<a :href="fileSrc(anexo)">{{ anexo }}</a>
						</li>
					</ul>
				</div>
			</li>
		</template>
		</Apoio>
		<!-- Nota inicial -->
		<div style="border: 1px solid black; max-width: 700px; margin: 0 auto; padding: 0 1em;">
			<p style="text-align: justify;">
				<center><strong>Termo “acidente de trânsito”</strong></center>
				<br />
				Em conformidade com os preceitos da Visão Zero e Sistemas Seguros, conceitos-chave que baseiam este plano, verifica-se a inadequação do uso da expressão “acidente de trânsito”, pelo fato de a semântica da palavra “acidente” remeter a algo inevitável, que não poderia ter sido evitado. Porém, a norma NBR 10697/1989 institui o termo técnico “acidente de trânsito” como aquele a ser utilizado para tratar de “evento não premeditado de que resulte dano em veículo ou na sua carga e/ou lesões em pessoas e/ou animais em que pelo menos uma das partes está em movimento nas vias terrestres (...). Por esse motivo, este documento mantém a utilização do termo “acidente de trânsito”, já que sua alteração pode acarretar problemas jurídicos futuros, mas com o compromisso de atuação para alteração da norma, que é antiga e anterior ao próprio surgimento da Visão Zero e Sistemas Seguros.
			</p>
		</div>
		<section>
			<h2 indent="1" class="titulo">Capítulo 1: Visão Zero e Sistemas Seguros</h2>
			<Cap1></Cap1>
			<Comments :attr="{id:commentId(true), context:'Capítulo 1: Visão Zero e Sistemas Seguros'}"></Comments>
		</section>

		<hr />
		<section>
			<h2 indent="1" class="titulo">Capítulo 2: Diagnóstico</h2>
		</section>
		<section>
			<h3 indent="2" class="titulo">Capítulo 2A - Panorama dos acidentes no Município de São Paulo</h3>
			<Cap2A>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<!-- <img :src="'https://via.placeholder.com/603x484'" :alt="imagem.figureTitle"> -->
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
				<template slot="t6">
					<table class="headed-table">
					  <tr>
					    <th>Ordem</th>
					    <th>Via</th>
					    <th>Número de acidentes fatais por atropelamento</th>
					    <th>Número de mortos por atropelamento</th>
					    <th>Número de acidentes fatais envolvendo veículos</th>
					    <th>Número de mortos em acidentes envolvendo veículos</th>
					    <th>Número total de acidentes fatais</th>
					    <th>Número total de mortos</th>
					  </tr>
					  <tr>
					    <td>1</td>
					    <td>Marginal Tietê</td>
					    <td>5</td>
					    <td>7</td>
					    <td>13</td>
					    <td>13</td>
					    <td>18</td>
					    <td>20</td>
					  </tr>
					  <tr>
					    <td>2</td>
					    <td>Av. Senador Teotônio Vilela</td>
					    <td>8</td>
					    <td>9</td>
					    <td>9</td>
					    <td>10</td>
					    <td>17</td>
					    <td>19</td>
					  </tr>
					  <tr>
					    <td>3</td>
					    <td>Marginal Pinheiros</td>
					    <td>2</td>
					    <td>2</td>
					    <td>12</td>
					    <td>12</td>
					    <td>14</td>
					    <td>14</td>
					  </tr>
					  <tr>
					    <td>4</td>
					    <td>Est. de Itapecerica</td>
					    <td>4</td>
					    <td>4</td>
					    <td>8</td>
					    <td>9</td>
					    <td>12</td>
					    <td>13</td>
					  </tr>
					  <tr>
					    <td>5</td>
					    <td>Av. Dona Belmira Marin</td>
					    <td>3</td>
					    <td>3</td>
					    <td>6</td>
					    <td>6</td>
					    <td>9</td>
					    <td>9</td>
					  </tr>
					  <tr>
					    <td>6</td>
					    <td>Av. Jacu-Pêssego / Nova Trabalhadores</td>
					    <td>6</td>
					    <td>6</td>
					    <td>2</td>
					    <td>3</td>
					    <td>8</td>
					    <td>9</td>
					  </tr>
					  <tr>
					    <td>7</td>
					    <td>Av. Sapopemba</td>
					    <td>5</td>
					    <td>5</td>
					    <td>3</td>
					    <td>3</td>
					    <td>8</td>
					    <td>8</td>
					  </tr>
					  <tr>
					    <td>8</td>
					    <td>Av. Marechal Tito</td>
					    <td>6</td>
					    <td>6</td>
					    <td>2</td>
					    <td>2</td>
					    <td>8</td>
					    <td>8</td>
					  </tr>
					  <tr>
					    <td>9</td>
					    <td>Est. M’Boi Mirim</td>
					    <td>3</td>
					    <td>3</td>
					    <td>4</td>
					    <td>4</td>
					    <td>7</td>
					    <td>7</td>
					  </tr>
					  <tr>
					    <td>10</td>
					    <td>Av. do Estado</td>
					    <td>3</td>
					    <td>3</td>
					    <td>4</td>
					    <td>4</td>
					    <td>7</td>
					    <td>7</td>
					  </tr>
					  <tr>
					    <td>11</td>
					    <td>Av. Aricanduva</td>
					    <td>2</td>
					    <td>2</td>
					    <td>5</td>
					    <td>5</td>
					    <td>7</td>
					    <td>7</td>
					  </tr>
					  <tr>
					    <td>12</td>
					    <td>Avenida José Pinheiro Borges</td>
					    <td>2</td>
					    <td>2</td>
					    <td>4</td>
					    <td>4</td>
					    <td>6</td>
					    <td>6</td>
					  </tr>
					  <tr>
					    <td>13</td>
					    <td>Avenida Pires do Rio</td>
					    <td>2</td>
					    <td>2</td>
					    <td>4</td>
					    <td>5</td>
					    <td>6</td>
					    <td>7</td>
					  </tr>
					  <tr>
					    <td>14</td>
					    <td>Estrada da Baronesa</td>
					    <td>1</td>
					    <td>1</td>
					    <td>5</td>
					    <td>5</td>
					    <td>6</td>
					    <td>6</td>
					  </tr>
					  <tr>
					    <td>15</td>
					    <td>Avenida Raimundo Pereira de Magalhães</td>
					    <td>0</td>
					    <td>0</td>
					    <td>5</td>
					    <td>7</td>
					    <td>5</td>
					    <td>7</td>
					  </tr>
					  <tr>
					    <td>16</td>
					    <td>Avenida Salim Farah Maluf</td>
					    <td>2</td>
					    <td>2</td>
					    <td>3</td>
					    <td>4</td>
					    <td>5</td>
					    <td>6</td>
					  </tr>
					  <tr>
					    <td>17</td>
					    <td>Avenida Ragueb Chohfi</td>
					    <td>1</td>
					    <td>1</td>
					    <td>4</td>
					    <td>4</td>
					    <td>5</td>
					    <td>5</td>
					  </tr>
					  <tr>
					    <td>18</td>
					    <td>Avenida Professor Francisco Morato</td>
					    <td>0</td>
					    <td>0</td>
					    <td>5</td>
					    <td>5</td>
					    <td>5</td>
					    <td>5</td>
					  </tr>
					  <tr>
					    <td>19</td>
					    <td>Avenida Corifeu de Azevedo Marques</td>
					    <td>2</td>
					    <td>2</td>
					    <td>3</td>
					    <td>3</td>
					    <td>5</td>
					    <td>5</td>
					  </tr>
					  <tr>
					    <td>20</td>
					    <td>Rua Doutor Assis Ribeiro</td>
					    <td>2</td>
					    <td>2</td>
					    <td>3</td>
					    <td>3</td>
					    <td>5</td>
					    <td>5</td>
					  </tr>
					  <tr>
					    <td colspan="2">Total</td>
					    <td>59</td>
					    <td>62</td>
					    <td>104</td>
					    <td>110</td>
					    <td>163</td>
					    <td>173</td>
					  </tr>
					</table>
					<figcaption>Tabela 6 - Vias com maior número de acidentes fatais, de acordo com Relatório Anual de Acidentes da CET de 2017.</figcaption>
				</template>
			</Cap2A>
			<Comments :attr="{id:commentId(), context:'Capítulo 2A - Panorama dos acidentes no Município de São Paulo'}"></Comments>
		</section>
		<section>
			<h3 indent="2" class="titulo">Capítulo 2B - Diagnóstico da cultura e comportamento em relação à segurança viária no Município de São Paulo</h3>
			<Cap2B>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap2B>
			<Comments :attr="{id:commentId(), context:'Capítulo 2B - Diagnóstico da cultura e comportamento em relação à segurança viária no Município de São Paulo'}"></Comments>
		</section>
		<section>
			<h3 indent="2" class="titulo">Capítulo 2C - Diagnóstico por eixo</h3>			
		</section>
		<section>
			<h4 indent="3" class="titulo">Eixo I - Articulação Institucional e Gestão</h4>
			<Cap2CEixoI>
				<template v-for="imagem in imagens" :slot="imagem.slotName">
					<figure>
						<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
						<figcaption>{{imagem.figureTitle}}</figcaption>
					</figure>
				</template>
			</Cap2CEixoI>
			<Comments :attr="{id:commentId(), context:'Eixo I - Articulação Institucional e Gestão'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo II - Planejamento Urbano, Desenho de Ruas e Engenharia</h4>
		 	<Cap2CEixoII>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap2CEixoII>
		 	<Comments :attr="{id:commentId(), context:'Eixo II - Planejamento Urbano, Desenho de Ruas e Engenharia'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo III - Melhoria das Opções de Mobilidade e Sustentabilidade</h4>
		 	<Cap2CEixoIII>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap2CEixoIII>
		 	<Comments :attr="{id:commentId(), context:'Eixo III - Melhoria das Opções de Mobilidade e Sustentabilidade'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo IV – Legislação, Fiscalização e Velocidades</h4>
		 	<Cap2CEixoIV>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap2CEixoIV>
		 	<Comments :attr="{id:commentId(), context:'Eixo IV – Legislação, Fiscalização e Velocidades'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo V - Normas e Tecnologias de Veículos</h4>
		 	<Cap2CEixoV>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap2CEixoV>
		 	<Comments :attr="{id:commentId(), context:'Eixo V - Normas e Tecnologias de Veículos'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo VI – Atendimento e Cuidado Pós Acidente</h4>
		 	<Cap2CEixoVI>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap2CEixoVI>
		 	<Comments :attr="{id:commentId(), context:'Eixo VI – Atendimento e Cuidado Pós Acidente'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo VII - Comunicação, educação e capacitação</h4>
		 	<Cap2CEixoVII>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap2CEixoVII>
		 	<Comments :attr="{id:commentId(), context:'Eixo VII - Comunicação, educação e capacitação'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo XI - Dados</h4>
		 	<Cap2CEixoXI>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap2CEixoXI>
		 	<Comments :attr="{id:commentId(), context:'Eixo XI - Dados'}"></Comments>
		</section>
		<section>
		 	<h2 indent="1" class="titulo">Capítulo 3 - Plano de Ação</h2>
		 </section>
		 <section>
		 	<h3 indent="2" class="titulo">1. Introdução</h3>
		 	<Cap31></Cap31>
		 	<Comments :attr="{id:commentId(), context:'1. Introdução'}"></Comments>
		</section>
		<section>
			<h3 indent="2" class="titulo">2. Visão</h3>
			<div><p>Transformar São Paulo em referência mundial em segurança viária.</p></div>
			<Comments :attr="{id:commentId(), context:'2. Visão'}"></Comments>
		</section>
		<section>
		 	<h3 indent="2" class="titulo">3. Objetivos</h3>
		 	<Cap33>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap33>
		 	<Comments :attr="{id:commentId(), context:'3. Objetivos'}"></Comments>
		</section>
		<section>
		 	<h3 indent="2" class="titulo">4. Metas Globais</h3>
		 	<Cap34></Cap34>
		 	<Comments :attr="{id:commentId(), context:'4. Metas Globais'}"></Comments>
		</section>
		<section>
		 	<h3 indent="2" class="titulo">5. Plano de Ação por eixo de atuação</h3>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo I - Articulação institucional e Gestão</h4>
		 	<Cap3EixoI>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap3EixoI>
		 	<Comments :attr="{id:commentId(), context:'Eixo I - Articulação institucional e Gestão'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo II - Planejamento urbano, desenho das ruas e engenharia</h4>
		 	<Cap3EixoII>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap3EixoII>
		 	<Comments :attr="{id:commentId(), context:'Eixo II - Planejamento urbano, desenho das ruas e engenharia'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo III - Melhoria das opções de mobilidade e sustentabilidade</h4>
		 	<Cap3EixoIII>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap3EixoIII>
		 	<Comments :attr="{id:commentId(), context:'Eixo III - Melhoria das opções de mobilidade e sustentabilidade'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo IV - Legislação, Fiscalização e Velocidades</h4>
		 	<Cap3EixoIV>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap3EixoIV>
		 	<Comments :attr="{id:commentId(), context:'Eixo IV - Legislação, Fiscalização e Velocidades'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo V - Normas e tecnologia de veículos</h4>
		 	<Cap3EixoV>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap3EixoV>
		 	<Comments :attr="{id:commentId(), context:'Eixo V - Normas e tecnologia de veículos'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo VI - Atendimento e cuidado pós acidente</h4>
		 	<Cap3EixoVI>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap3EixoVI>
		 	<Comments :attr="{id:commentId(), context:'Eixo VI - Atendimento e cuidado pós acidente'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo VII- Comunicação, educação e capacitação</h4>
		 	<Cap3EixoVII>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap3EixoVII>
		 	<Comments :attr="{id:commentId(), context:'Eixo VII- Comunicação, educação e capacitação'}"></Comments>
		</section>
		<section>
		 	<h4 indent="3" class="titulo">Eixo VIII - Dados</h4>
		 	<Cap3EixoVIII>
		 		<template v-for="imagem in imagens" :slot="imagem.slotName">
		 			<figure>
		 				<img :src="fileSrc(imagem.slotName+'.jpg')" :alt="imagem.figureTitle">
		 				<figcaption>{{imagem.figureTitle}}</figcaption>
		 			</figure>
		 		</template>
		 	</Cap3EixoVIII>
		 	<Comments :attr="{id:commentId(), context:'Eixo VIII - Dados'}"></Comments>
		</section>
		<section>
		 	<h3 indent="2" class="titulo">Bibliografia</h3>
		 	<Bibliografia></Bibliografia>
		 	<Comments :attr="{id:commentId(), context:'Bibliografia'}"></Comments>
		</section>

		<hr />
		<section ref="allComments">
			<h2 indent="1" v-show="commentsLoaded" class="titulo">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
			<Comments v-if="commentsLoaded && estaConsulta.ativo == 1" :attr="{id:23, context:'Comentarios'}"></Comments>
		</section>
	</div>
</template>

<script>
import Cap1 from '@/views/vida-segura/Cap1'
import Cap2A from '@/views/vida-segura/Cap2A'
import Cap2B from '@/views/vida-segura/Cap2B'
import Cap2CEixoI from '@/views/vida-segura/Cap2CEixoI'
import Cap2CEixoII from '@/views/vida-segura/Cap2CEixoII'
import Cap2CEixoIII from '@/views/vida-segura/Cap2CEixoIII'
import Cap2CEixoIV from '@/views/vida-segura/Cap2CEixoIV'
import Cap2CEixoV from '@/views/vida-segura/Cap2CEixoV'
import Cap2CEixoVI from '@/views/vida-segura/Cap2CEixoVI'
import Cap2CEixoVII from '@/views/vida-segura/Cap2CEixoVII'
import Cap2CEixoXI from '@/views/vida-segura/Cap2CEixoXI'
import Cap31 from '@/views/vida-segura/Cap31'
import Cap33 from '@/views/vida-segura/Cap33'
import Cap34 from '@/views/vida-segura/Cap34'
import Cap3EixoI from '@/views/vida-segura/Cap3EixoI'
import Cap3EixoII from '@/views/vida-segura/Cap3EixoII'
import Cap3EixoIII from '@/views/vida-segura/Cap3EixoIII'
import Cap3EixoIV from '@/views/vida-segura/Cap3EixoIV'
import Cap3EixoV from '@/views/vida-segura/Cap3EixoV'
import Cap3EixoVI from '@/views/vida-segura/Cap3EixoVI'
import Cap3EixoVII from '@/views/vida-segura/Cap3EixoVII'
import Cap3EixoVIII from '@/views/vida-segura/Cap3EixoVIII'
import Bibliografia from '@/views/vida-segura/Bibliografia'

// Gerais
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
import Apoio from '@/components/Apoio'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'VidaSegura',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			anexos: ['Vida_Segura_29-10-2018_PDF.pdf'],
			imagens: [
				{ 
					slotName: "g1", 
					figureTitle: "Gráfico 1 - Evolução da frota veicular (2008 - 2017). Fonte: DETRAN/SP"
				}
				,{ 
					slotName: "g2", 
					figureTitle: "Gráfico 2 - Óbitos por causas externas (2016). Fonte: SIM/PRO-AIM - CEINFO - SMS - SP"
				}
				,{ 
					slotName: "g3", 
					figureTitle: "Gráfico 3 - Anos Potenciais de Vida Perdidos (APVP)  (2016). Fonte: SIM/PRO-AIM - CEINFO - SMS - SP"
				}
				,{ 
					slotName: "g4", 
					figureTitle: "Gráfico 4 - Evolução anual dos acidentes fatais por tipo. Fonte: CET."
				}
				,{ 
					slotName: "g5", 
					figureTitle: "Gráfico 5 - Evolução Anual dos óbitos por tipo de usuário. Fonte: CET"
				}
				,{ 
					slotName: "g6", 
					figureTitle: "Gráfico 6 - Evolução do índice “óbitos/100 mil habitantes. Fonte: CET"
				}
				,{ 
					slotName: "g7", 
					figureTitle: "Gráfico 7 - Óbitos por tipo de usuário (2017). Fonte: CET"
				}
				,{ 
					slotName: "g8", 
					figureTitle: "Gráfico 8 - Total de vítimas por tipo de usuário (2017). Fonte: CET"
				}
				,{ 
					slotName: "g9", 
					figureTitle: "Gráfico 9 - Número anual de acidentes fatais por dia da semana (2017). Fonte: CET"
				}
				,{ 
					slotName: "t1", 
					figureTitle: "Tabela 1 - Total de acidentes de trânsito fatais por dia da semana e período do dia. Fonte: CET"
				}
				,{ 
					slotName: "g10", 
					figureTitle: "Gráfico 10 - Relação entre número de viagens realizadas em um dia típico com destino sendo São Paulo e número de vítimas fatais por faixa horária. Fonte: CET-SP e Pesquisa de mobilidade (2012). Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "g11", 
					figureTitle: "Gráfico 11 - índice de vítimas fatais por 10.000 viagens realizadas por hora do dia. Fonte: CET-SP e Pesquisa de mobilidade (2012). Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "g12", 
					figureTitle: "Gráfico 12 - Relação entre o acidente por faixa horária do total de vítimas (feridas e fatais) e de vítimas fatais entre os anos de 2013 e 2017. Fonte: CET-SP. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "g13", 
					figureTitle: "Gráfico 13 - Variação no número de vítimas fatais por modal de transporte em São Paulo entre os anos de 2013 e 2017.  Fonte: CET-SP."
				}
				,{ 
					slotName: "g14", 
					figureTitle: "Gráfico 14 - Risco relativo de se tornar uma vítima usando diferentes modos de transporte, sendo 1 o modal mais seguro. Fonte: CET-SP/Pesquisa de mobilidade (2012). Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "g15", 
					figureTitle: "Gráfico 15: participação dos veículos no trânsito (2013-2017) nos horários de pico manhã/tarde dos dias úteis. Fonte: DSVP-CET-SP."
				}
				,{ 
					slotName: "g16", 
					figureTitle: "Gráfico 16 - Distribuição de veículos envolvidos em acidentes fatais (2017). Fonte: CET"
				}
				,{ 
					slotName: "g17", 
					figureTitle: "Gráfico 17 - distribuição dos veículos envolvidos em atropelamentos fatais (2013-2017). Fonte: CET."
				}
				,{ 
					slotName: "g18", 
					figureTitle: "Gráfico 18 - Óbitos por faixa etária (2017). Fonte: CET"
				}
				,{ 
					slotName: "g19", 
					figureTitle: "Gráfico 19 - Vítimas fatais e feridas por faixa etária para o ano de 2017. Fonte: CET-SP. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "t2", 
					figureTitle: "Tabela 2 - Variação percentual das vítimas fatais por faixa etária (2013 - 2017). Fonte: CET. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "t3", 
					figureTitle: "Tabela 3 - Variação percentual das vítimas feridas por faixa etária (2013 - 2017). Fonte: CET. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "g20", 
					figureTitle: "Gráfico 20  - Variação do número de vítimas fatais e da população por grupo de idade entre os anos de 2013 e 2017. Fonte: CET-SP e SEADE-SP. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "t4", 
					figureTitle: "Tabela 4 - Relação entre o índice de fatalidade (mortos em acidentes de trânsito/100.000 habitantes) entre os anos de 2013 e 2017. Fonte: CET-SP e SEADE-SP. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "g21", 
					figureTitle: "Gráfico 21 - Vítimas fatais e feridas por faixa etárias e por modal de transporte para o ano de 2017. Fonte: CET-SP. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "g22", 
					figureTitle: "Gráfico 22: proporção de viagens (2012 e vítimas fatais (2017) por idade para o modo à pé. Fonte: CET. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "g23", 
					figureTitle: "Gráfico 23: proporção de viagens (2012 e vítimas fatais (2017) por idade para o modo automóvel. Fonte: CET. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "g24", 
					figureTitle: "Gráfico 24: proporção de viagens (2012 e vítimas fatais (2017) por idade para o modo bicicleta. Fonte: CET. Elaboração: WRI Brasil "
				}
				,{ 
					slotName: "g25", 
					figureTitle: "Gráfico 25: proporção de viagens (2012 e vítimas fatais (2017) por idade para o modo motocicleta. Fonte: CET. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "m1", 
					figureTitle: "Mapa 1 - Distribuição espacial com pontos críticos de acidentes com jovens vítimas fatais e menores de idade (2013-2017) e densidade de escolas para o município de São Paulo. Fonte: CET-SP/GEOSAMPA. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "g26", 
					figureTitle: "Gráfico 26 - Proporção de viagens e vítimas fatais por meio de transporte de acordo com o gênero para o ano de 2017. Fonte: CET-SP e Pesquisa de mobilidade (2012). Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "t5", 
					figureTitle: "Tabela 5 - Acidentes em cruzamentos e meio de quadra. Fonte: CET"
				}
				,{ 
					slotName: "t7", 
					figureTitle: "Tabela 7 - Vias com maior valor de Unidade Padrão de Severidade por Km (2017). Fonte: CET"
				}
				,{ 
					slotName: "m2", 
					figureTitle: "Mapa 2 - Distribuição espacial de acidentes fatais envolvendo pedestres (2013-2017). Fonte: CET-SP. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "m3", 
					figureTitle: "Mapa 3 - Distribuição espacial de acidentes com vítimas feridas e fatais envolvendo pedestres e ônibus (2013-2017). Fonte: CET-SP. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "m4", 
					figureTitle: "Mapa 4 – Distribuição espacial de acidentes com vítimas feridas e fatais envolvendo ciclistas (2013-2017). Fonte: CET-SP. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "m5", 
					figureTitle: "Mapa 5 - Distribuição espacial de vítimas usuárias de bicicleta no ano de 2017 e mapa da rede cicloviária. Fonte: CET-SP. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "m6", 
					figureTitle: "Mapa 6 - Distribuição espacial de acidentes com vítimas feridas e fatais envolvendo motociclistas (2013-2017). Fonte: CET-SP. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "m7", 
					figureTitle: "Mapa 7 - Distribuição espacial de acidentes com vítimas fatais envolvendo motociclistas (2013-2017). Fonte: CET-SP. Elaboração: WRI Brasil"
				}
				,{ 
					slotName: "t8", 
					figureTitle: "Tabela 8 - Prevalência de veículos trafegando acima da velocidade. Fonte: JH-IIRU e USP (2018)."
				}
				,{ 
					slotName: "m8", 
					figureTitle: "Mapa 8 - distribuição de responsabilidade pelas calçadas no município de São Paulo (proprietários x Prefeitura). Fonte: SPUrbanismo (2018)."
				}
				,{ 
					slotName: "m9", 
					figureTitle: "Mapa 9 - Plano Emergencial de Calçadas Ilustrado. Fonte: SP Urbanismo"
				}
				,{ 
					slotName: "f1", 
					figureTitle: "Figura 1 - Áreas de Influência - Eixos de Estruturação da Transformação Urbana"
				}
				,{ 
					slotName: "f2", 
					figureTitle: "Figura 2 - Instrumentos urbanísticos do PDE . Fonte: PMSP, 2014."
				}
				,{ 
					slotName: "f3", 
					figureTitle: "Figura 3: Fachada Ativa Fonte: PMSP, 2016"
				}
				,{ 
					slotName: "f4", 
					figureTitle: "Figura 4: Fruição Pública Fonte: PMSP, 2016."
				}
				,{ 
					slotName: "f5", 
					figureTitle: "Figura 5 - Av. Mal. Tito, trecho em São Miguel Paulista (Crédito: SPUrbanismo)"
				}
				,{ 
					slotName: "t10", 
					figureTitle: "Tabela 10 - Quadro 2B da LPUOS/2016 - parâmetros de parcelamento do solo (sistema viário)."
				}
				,{ 
					slotName: "t11", 
					figureTitle: "Tabela 11 - características geométricas das vias pelos critérios técnicos da SIURB - Instrução de Projeto 003/2004 - Quadro 3.1"
				}
				,{ 
					slotName: "f7", 
					figureTitle: "Figura 7 - exemplos de calçadas na cidade de São Paulo. Rua Ministro Gastão Mesquita, em Perdizes, e Rua Acutiranha, no Morumbi. Calçada construída pelo proprietário apresenta obstáculo de diferentes escalas para a acessibilidade. Fonte: Google Street View"
				}
				,{ 
					slotName: "f8", 
					figureTitle: "Figura 8 - Exemplos de calçadas na cidade de São Paulo. Crédito: BIGRS"
				}
				,{ 
					slotName: "t12", 
					figureTitle: "Tabela 12 - Quadro 2B da LPUOS. Parâmetros de parcelamento do solo (sistema viário)"
				}
				,{ 
					slotName: "t13", 
					figureTitle: "Tabela 13: Quadro 3.2 da IP-003/2004 SIURB - curvas de concordância das ruas - padronização dos raios"
				}
				,{ 
					slotName: "t14", 
					figureTitle: "Tabela 14 - Código de Obras e Edificações Ilustrado (Lei nº 16.642, de 9 de maio de 2017. Decreto nº 57.776, de 7 de julho de 2017)"
				}
				,{ 
					slotName: "f9", 
					figureTitle: "Figura 9 - Calçada recém-construída (2016) na Av. Sumaré, em Perdizes, inclinada em toda a sua largura para acesso de veículos às vagas de estacionamento, prejudicando a circulação de pedestres"
				}
				,{
					slotName: "f10", 
					figureTitle: "Figura 10 - Calçada com diferentes declividades transversais e degraus conformados por rampas de acesso a garagens na Rua Caetés, em Perdizes."
				}
				,{
					slotName: "f11", 
					figureTitle: "Figura 11 - Travessia em calçada (Av. Bgd. Faria Lima X R. Cláudio Soares). Obstáculos sobre a área de espera e passagem da travessia; rampa de acessibilidade na mesma área de poste."
				}
				,{
					slotName: "f12a", 
					figureTitle: "Figura 12a - Placas de sinalização obstruindo passagem de pedestres em esquinas de calçadas estreitas nos cruzamentos (i) da Av. Francisco Morato com R. Min Heitor Bastos Tigre"
				}
				,{
					slotName: "f12b", 
					figureTitle: "Figura 12b - Placas de sinalização obstruindo passagem de pedestres em esquinas de calçadas estreitas nos cruzamentos (ii) Estr. do Campo Limpo com R. Campina Grande"
				}
				,{
					slotName: "f13a", 
					figureTitle: "Figura 13a - Mobiliário urbano no Largo da Batata (créditos: Diogo Lemos/WRI Brasil)"
				}
				,{
					slotName: "f13b", 
					figureTitle: "Figura 13b - Mobiliário urbano no Largo da Batata (créditos: Diogo Lemos/WRI Brasil)"
				}
				,{
					slotName: "f14a", 
					figureTitle: "Figura 14a - Comparação entre iluminação pública padrão e iluminação pública voltada para pedestres. Fonte: New York City Department of Transportation, 2013)."
				}
				,{
					slotName: "f14b", 
					figureTitle: "Luminária pública acoplada a poste de luz da Eletropaulo e voltada para o leito carroçável, na Rua Oscar Freire."
				}
				,{
					slotName: "f14c", 
					figureTitle: "Luminária pública voltada para a calçada, em trecho reformado da Rua Oscar Freire, cuja fiação foi enterrada no projeto de transformação urbana."
				}
				,{
					slotName: "f15", 
					figureTitle: "Figura 15 -  exemplo de ciclovia"
				}
				,{
					slotName: "f16", 
					figureTitle: "Figura 16 -  exemplo de ciclofaixa"
				}
				,{
					slotName: "f17", 
					figureTitle: "Figura 17: exemplo de ciclorrota"
				}
				,{
					slotName: "g27", 
					figureTitle: "Gráfico 27 - Avaliação das ciclovias. Fonte: Torres Freire et. al, 2018."
				}
				,{
					slotName: "f17b", 
					figureTitle: "Figura 17b – Distância recomendada entre a travessia de pedestres e o estacionamento. FONTE: DNIT -Publicação IPR - 740 MANUAL DE PROJETO GEOMÉTRICO DE TRAVESSIAS URBANAS"
				}
				,{
					slotName: "f18", 
					figureTitle: "Figura 18 - Rua Oscar Freire. Diversas extensões de calçada foram implementadas (créditos: Foto: Google Street View - Esquema: WRI Brasil)"
				}
				,{
					slotName: "f19", 
					figureTitle: "Figura 19 - exemplo de travessia elevada."
				}
				,{
					slotName: "f20", 
					figureTitle: "Figura 20 - esquema da Av. Brigadeiro Luís Antônio antes (à esquerda) e após (à direita) a remoção do contrafluxo."
				}
				,{
					slotName: "f21", 
					figureTitle: "Figura 21: Situação atual da Praça Getúlio Vargas em São Miguel Paulista, acima (crédito: Google Street View). Abaixo, fotomontagem do projeto (crédito: 23 Sul Arquitetura / BIGRS)."
				}
				,{
					slotName: "g28", 
					figureTitle: "Gráfico 28 - Potencial Pedalável. Fonte:  Impacto Social do Uso da Bicicleta em São Paulo - CEBRAP 2018"
				}
				,{
					slotName: "g29", 
					figureTitle: "Gráfico 29: tipologia das ocorrências fatais envolvendo caminhões (2017). Fonte: CET"
				}
				,{
					slotName: "t18", 
					figureTitle: "Tabela 18  - Dez países mais populosos e melhores práticas de legislação. Fonte: OMS, 2015, p. 38."
				}
				,{
					slotName: "t19", 
					figureTitle: "Tabela 19 - Risco de atropelamento a 60, 50 e 30km/h. Fonte: "
				}
				,{
					slotName: "f22", 
					figureTitle: "Figura 22 - Exemplo de autuação efetuada por velocidade média (Sistema Safety Tutor / Autostrade per I’Itália)."
				}
				,{
					slotName: "g30", 
					figureTitle: "Gráfico 30 -: Efeito do Sistema de Controle de Trecho  na velocidade média dos veículos no túnel Kaisermuhlen. (Fonte: Vienna Municipal Department)"
				}
				,{
					slotName: "g31", 
					figureTitle: "Gráfico 31: autuações por sub_unidade autuadora. Fonte: CET."
				}
				,{
					slotName: "g32", 
					figureTitle: "Gráfico 32 - evolução das autuações realizadas por agentes. Fonte: CET"
				}
				,{
					slotName: "g33", 
					figureTitle: "Gráfico 33 - evolução das autuações realizadas por equipamentos de fiscalização. Fonte: CET"
				}
				,{
					slotName: "t21", 
					figureTitle: "Tabela 21 - principais autuações lavradas (2017) no município de São Paulo. Fonte: CET"
				}
				,{
					slotName: "t22", 
					figureTitle: "Tabela 22 - principais autuações lavradas por agentes de trânsito da CET (2017). Fonte: CET"
				}
				,{
					slotName: "f23", 
					figureTitle: "Figura 23 - Fluxo de análise e tabulação INFOSIGA. Fonte: INFOSIGA-SP	"
				}
				,{
					slotName: "f24", 
					figureTitle: "Figura 24 - nova calçada implantada na Rua Pedro de Toledo - Vila Mariana"
				}
			],
			commentsCount: 0
		}
	},
	components: {
		PageTop,
		Indice,
		Comments,
		CommentsLoader,
		Apoio,
		Cap1,
		Cap2A,
		Cap2B,
		Cap2CEixoI,
		Cap2CEixoII,
		Cap2CEixoIII,
		Cap2CEixoIV,
		Cap2CEixoV,
		Cap2CEixoVI,
		Cap2CEixoVII,
		Cap2CEixoXI,
		Cap31,
		Cap33,
		Cap34,
		Cap3EixoI,
		Cap3EixoII,
		Cap3EixoIII,
		Cap3EixoIV,
		Cap3EixoV,
		Cap3EixoVI,
		Cap3EixoVII,
		Cap3EixoVIII,
		Bibliografia		
	},
	mixins: [ consultasCommons ],
	methods: {
		fileSrc (fileName) {
			let url = this.$store.getters.basePath + 'arquivos/vida-segura/' + fileName
			return url.toString()
		},
		commentId(isFirst) {
			if (isFirst)
				this.$store.commentsCount = 0;
			this.$store.commentsCount++;			
			return this.$store.commentsCount;
		}
	}
}
</script>

<style lang="scss">
	figure {
		text-align: center;
	}
	div.PageTop > div:first-child {
		max-width: 700px;
	}
	table {
		margin: auto;
		min-width: 400px;
	}
	table.simple-table {
		border-collapse: collapse;
		table, th, td {
			border: 1px solid black;
			padding: 3px;
		}
	}
	table.headed-table {
		border-collapse: collapse;
		text-align: center;
		table, th, td {
			border: 1px solid black;
			padding: 3px;
		}
		tr:first-child {
			background-color: #CCC;
			font-weight: bold;
		}
	}

	h2.titulo, h3.titulo {
		margin: 2em auto auto;
	}
	h4 {
		margin: 2em auto auto;
	}
	*::selection, *::-moz-selection {
		background: #EB5757;
		color: #FFF;
	}
	div.VidaSegura section {
		max-width: 700px;
		margin: 0 auto;
		padding: 0 1em;
	}
	hr {
		max-width: 700px;
		margin: 3em auto;
	}
	img {
		max-width: 100%;
	}
	div.VidaSegura p {
		overflow: auto;
		text-align: justify;
	}
	#app div.VidaSegura div.Apoio button::before {
		content: "Ver downloads";
	}
	p.quotation {
		font-size: smaller;
		font-style: italic;
		padding-left: 20%;
	}

</style>
