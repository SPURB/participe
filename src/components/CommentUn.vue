<template>
	<div class="comentario">
		<div class="comentCtx"><i class="material-icons">reply</i> {{ comment_attrs.commentcontext }}</div>
		<div class="coment">
			<p>Queria uma estrutura metálica leve que pudesse nascer e descer feito árvore... E que pudesse ser montada no solo pra evitar a construção provisória de um vasto emaranhado de andaimes, possivelmente mais caro do que a própria estrutura de cobertura.</p>
		</div>
		<div class="comentInfo">
			<div class="autor">
				<span>Nome do autor</span> <span>autor@email.com</span>
			</div>
			<div class="horario">
				<span>23 de fevereiro de 2018 às 09h33</span>
			</div>
		</div>
		<div class="btns">
			<button class="reprovar">Reprovar <i class="material-icons">delete</i></button>
			<button class="aprovar">Aprovar <i class="material-icons">check_circle</i></button>
			<!-- <button class="novamente">Moderar novamente <i class="material-icons">cached</i></button> -->
		</div>
	</div>
</template>

<script>
export default {
  name: 'CommentUn'
}
</script>

<style lang="scss" scoped>
</style>
