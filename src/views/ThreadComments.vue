<template>
	<div class="thread-comments">
		<div class="modal">
			<section class="modal-header">
				Proposta urbanística Perímetros de atuação especial Territórios de integração
				<div class="modal-close">
					<i class="icon-incorreto icon"></i>
				</div>
			</section>
			<section class="modal-body">
				<p>Uma importante proposta do PIU para viabilizar a vocação de ambiente de inovação consiste na demarcação dos chamados <b>Territórios de Integração</b>, formado pelas quadras lindeiras ao Rio Pinheiros, que deverão acomodar as novas travessias previstas no Programa de Intervenções, e por grandes áreas transformáveis que exigem projetos urbanos específicos, como é o caso da Ceagesp.</p>
			</section>
			<section class="modal-comentarios">
			</section>
			<section class="modal-footer">
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ThreadComments'
}
</script>

<style lang="scss" scoped>
@import '../variables';
.thread-comments {
	background-color: $sombra-2;
	color: $preto;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
	width: 96%;
	height: 100%;
    position: fixed;
	padding: 10px;
    overflow: auto;
    z-index: 30;

	.modal {
		background-color: #FFF;
		border-radius: 7px;
		height: auto !important;

		.modal-header, .modal-body {
			padding: 10px;
		}

		.modal-header {
			background-color: $cinza-2;
			border-radius: 7px 7px 0px 0px;
			color: #FFF;
			display: flex;
			flex-direction: column-reverse;

			.modal-close {
				align-self: flex-end;
				justify-content: flex-end;
				align-items: center;
				background-color: $vermelho;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				width: 25px;
				height: 25px;
				position: absolute;
				top: 3px;
				right: 3px;
			}
		}
	}
}
</style>
