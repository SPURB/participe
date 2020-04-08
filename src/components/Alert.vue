<template>
<div id="alert" @click="RESET">
	<div class="content-alert" :class="`border-${type}`">
		<i :class="`${icon} icon`">
			<span>chat</span>
		</i>
		<div :class="`alert-${type}`" data-cy="alert_component">
			{{ message }}
		</div>
	</div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
	name: 'alert-component',
	computed: {
		...mapState({
			type: state => state.alert.type,
			message: state => state.alert.message,
			icon: state => state.alert.icon
		})
	},
	created () { setTimeout(() => this.RESET(), 2000) },
	methods: {
		...mapMutations('alert', [ 'RESET' ])
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

#alert {
	background-color: rgba(0, 0, 0, 0.747);
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: fixed;
	overflow: auto;
	z-index: 3;

	.content-alert {
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 15px;
		width: 350px;
		height: 150px;
	}
}
.alert-accept {
	color: $verde;
}
.alert-error, .icon-incorreto {
	color: $vermelho;
}

.border-error {
	border: 2px solid $vermelho;
}

</style>
