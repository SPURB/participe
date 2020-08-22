<template>
	<div class="btn-fixed-url" :style="`top:${top}`">
		<router-link v-if="isRouteLink" tag="a" :to="url">{{ text }}<i class="icon-acessar_url icon"><span>acessar_url</span></i></router-link>
		<a v-else :href="url" :target="target">{{ text }}<i class="icon-acessar_url icon"><span>acessar_url</span></i></a>
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
		},
		top: {
			type: String,
			default: '2rem'
		},
		target: {
			type: String,
			default: '_blank'
		},
		isRouteLink: {
			type: Boolean,
			default: false
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../variables';
.btn-fixed-url {
	position: fixed;
	right: 2rem;
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
