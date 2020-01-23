<template>
	<div class="btn-fixed-url">
		<a :href="url" target="_blank">{{ text }} <i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
	</div>
</template>
<script>
export default {
	name: 'BtnFixedUrl',
	props: {
		url: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../variables';
.btn-fixed-url {
	position: fixed;
	right: 2rem;
	top: 2rem;
	font-size: 1rem;
	background-color: $vermelho;
	padding: 0 1rem;
	border-radius: 2rem;
	box-shadow: 0 4px 4px $sombra-3;
	cursor: pointer;
	z-index: 1;
	transition: all ease-in .1s;
	a {
		text-decoration: none;
		line-height: 3rem;
		color: #FFF;
		i {
			line-height: inherit;
		}
	}
	&:hover {
		background-color: $vermelho-escuro;
		a {
			border: none;
		}
	}
	@media screen and (max-width: 992px) {
		a {
			line-height: 2rem;
			font-size: smaller;
		}
	}
	@media screen and (max-width: 600px) {
		top: 1rem;
		right: 1rem;
	}
}

</style>
