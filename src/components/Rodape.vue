<template>
	<div class="Rodape" :class="{ load: fetching }">
		<footer>
			Caso surjam dúvidas ou problemas técnicos, envie um e-mail para: <a href="mailto:imprensasmul@prefeitura.sp.gov.br">imprensasmul@prefeitura.sp.gov.br</a>.
		</footer>
	</div>
</template>

<script>
export default {
	name: 'Rodape',
	computed: {
		fetching () { return this.$store.state.fetching }
	}
}
</script>

<style lang="scss" scoped>
div.Rodape {
	&.load {
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	footer {
		clear: all;
		background: #F5F5F5;
		padding: 16px 32px;
	}
}
</style>
