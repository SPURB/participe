<template>
	<div class="ConcessaoMartinelli" ref="conteudoConsulta">
		<PageTop background_image_src="arquivos/capas/concessao-martinelli_480w.jpg" :esta_consulta="estaConsulta" :social="social_assets">
			<template slot="titulo"><div>Chamamento do edital de concessão da cobertura do Edifício Martinelli</div></template>
		</PageTop>

		<Indice :titulos="titulosLimpo"></Indice>

		<section>
			<h2 class="titulo" indent="1">Introdução</h2>
			<p>A São Paulo Urbanismo - SPUrbanismo, empresa pública vinculada à Secretaria Municipal de Desenvolvimento Urbano – SMDU da Prefeitura de São Paulo, realiza o presente chamamento público com o objetivo de receber contribuições para o aprimoramento dos documentos que instruirão a possível concessão de uso onerosa do Serviço de Visitação Pública à Cobertura do Edifício Martinelli e outras atividades associadas, a serem exploradas em espaços cobertos e descobertos.</p>

			<p>Os interessados podem consultar o Edital, a minuta do Termo de Referência e as informações disponibilizadas e contribuir através de sugestões, opiniões, questionamentos e críticas por escrito por meio da aba de comentários do sítio eletrônico.</p>

			<p>Alternativamente também podem ser feitas contribuições dirigidas à SPUrbanismo, através do e-mail <a href="mailto:concessaomartinelli@spurbanismo.sp.gov.br?subject=Chamamento Público edital da cobertura do Edifífio Martinelli">concessaomartinelli@spurbanismo.sp.gov.br</a> contendo os comentários e a  identificação de nome do participante, número de documento e telefone para contato.</p>

			<p>Finalmente, também podem ser feitas contribuições por meio do protocolo físico da SPUrbanismo localizado no 15º andar do Edifício Martinelli, na esquina da Rua Líbero Badaró com a Avenida São João, de segunda a sexta-feira, das 9h às 17h.</p>

			<p>Todas as manifestações serão recebidas até a data limite de 16/05/2019 e, a partir de então, serão avaliadas e, eventualmente, por decisão da SPUrbanismo, incorporadas no Termo de Referência e estruturação do eventual edital de concessão, com prazos e etapas a serem definidos pela SPUrbanismo.</p>

			<p>Serão desconsideradas as manifestações fora do escopo do chamamento ou que tenham sido formuladas de forma distinta das premissas e diretrizes do Termo de Referência.</p>

			<Imagem :dados="{
				tipo: 'default',
				url: imgSrc('arquivos/concessao-martinelli/edificio-martinelli-cobertura.jpg'),
				caption: 'Simulação de intervenção na cobertura do edifício Martinelli',
				fonte: 'São Paulo Urbanismo.'
			}"></Imagem>

		</section>
		<section>
			<h2 class="titulo" indent="1">Arquivos</h2>
			<ul class="links">
				<li>
					<a :href="imgSrc('arquivos/concessao-martinelli/EDITAL-DE-CHAMAMENTO-PUBLICO-001-2019.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>EDITAL</div>
						<span>210 kb</span>
					</a>
				</li>
				<li>
					<a :href="imgSrc('arquivos/concessao-martinelli/TR_OM.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>TERMO DE REFERÊNCIA</div>
						<span>337 kb</span>
					</a>
				</li>
				<li>
					<a :href="imgSrc('arquivos/concessao-martinelli/TR_OM_AnexoI.pdf')" target="_blank">
						<i class="icon-pdf icon"><span>pdf</span></i>
						<div>ANEXO I</div>
						<span>3.8 MB</span>
					</a>
				</li>
			</ul>

			<!-- <CommentsOption :options="[ -->
			<CommentsOption v-if="estaConsulta.ativo == 1" :options="[
				{ id: 1, context: 'Edital' },
				{ id: 2, context: 'Termo de referência' },
				{ id: 3, context: 'Anexo I do Termo de Referência' }
			]"
				:alwaysOpen="true">
			</CommentsOption>
		</section>

		<section>
			<h2 class="titulo" indent="1">Vídeos</h2>

			<div class="youtubeFrame">
				<iframe width="100%" height="395" src="https://www.youtube.com/embed/lHHZEF5jZJ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>

			<div class="youtubeFrame">
				<iframe  width="100%" height="395" src="https://www.youtube.com/embed/JxyTcrVfez8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>

			<Imagem :dados="{
				tipo: 'hero',
				url: imgSrc('arquivos/capas/concessao-martinelli_1900w.jpg'),
				caption: 'Vista da cobertura do edifício Martinelli.',
				fonte: 'Acervo São Paulo Urbanismo. Fotografia de 1935.'
			}"></Imagem>

			<blockquote>
				<p>Participe!</p>
				<p>No dia 12/04 (sexta-feira), às 15h00, a SP Urbanismo fará a apresentação da iniciativa, com rodada de perguntas e visitação no espaço objeto deste chamamento, sem prejuízo da realização de outras apresentações e visitas públicas, presenciais ou remotas. As inscrições são limitadas e para participar, é necessária a inscrição por meio  do e-mail a <a href="mailto:concessaomartinelli@spurbanismo.sp.gov.br?subject=Chamamento Público edital da cobertura do Edifífio Martinelli">concessaomartinelli@spurbanismo.sp.gov.br</a>
				</p>
			</blockquote>

		</section>

		<section ref="allComments">
			<h2 v-show="commentsLoaded" class="titulo" indent="1">Contribuições</h2>
			<CommentsLoader :attr="estaConsulta"></CommentsLoader>
		</section>
	</div>
</template>

<script>
import PageTop from '@/components/PageTop'
import Indice from '@/components/Indice'
import Imagem from '@/components/Imagem'
import CommentsOption from '@/components/CommentsOption'
import CommentsLoader from '@/components/CommentsLoader'
import { consultasCommons } from '@/mixins/consultasCommons'

export default {
	name: 'ConcessaoMartinelli',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {},
			social_assets: {
				whatsapp: 'https://api.whatsapp.com/send?text=Participe%20da%20consulta%20p%C3%BAblica%20do%20edital%20de%20concess%C3%A3o%20da%20cobertura%20do%20Edif%C3%ADcio%20Martinelli%20-%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br/#/concessao-martinelli',
				facebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br/#/concessao-martinelli',
				twitter: 'https://twitter.com/intent/tweet?text=Participe%20da%20consulta%20p%C3%BAblica%20do%20edital%20de%20concess%C3%A3o%20da%20cobertura%20do%20Edif%C3%ADcio%20Martinelli%20-%20https%3A%2F%2Fparticipe.gestaourbana.prefeitura.sp.gov.br/#/concessao-martinelli'
			}
		}
	},
	components: {
		PageTop,
		Indice,
		Imagem,
		CommentsOption,
		CommentsLoader
	},
	mixins: [consultasCommons]
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../consulta';
@import '../oldstylestoprint';

.youtubeFrame {
	max-width: 700;
	max-width: 700px;
	margin: 2rem auto;
	background-color: $cinza-3;
}
</style>
