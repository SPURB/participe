<template>
<div class="Modal" id="modal">
	<transition name="modal">
		<div class="modal-mask">
		<div class="modal-wrapper" @click="setModal">
			<div class="modal-container">
			<div class="modal-header">
				<slot name="header"></slot>
			</div>
			<div class="modal-body">
				<!-- TODO: alterar svgs, gerar webfonts e incluir aqui -->
				<!-- <i v-if="modalState.error" class="icon-transformacao"></i>
				<i v-if="modalState.success" class="icon-participacao"></i>
				<i v-if="modalState.custom" class="icon-boasvindas"></i> -->
				<slot name="body"></slot>
			</div>
			</div>
		</div>
		</div>
	</transition>
</div>
</template>

<script>
export default {
	name: 'Modal',
	computed: {
		modalState () { return this.$store.state.modalState }
	},
	methods: { setModal () { this.$store.commit('COMMENT_MODAL_STATUS', 'reset') } }
}
</script>

<style lang="scss">
@import '../_variables.scss';

// @import '../assets/fonts/participe/participe.css';
#modal{
  .modal-mask {
	color:$font-default-grey;
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	display: table;
	// transition: opacity .3s ease;
  }

  .modal-wrapper {
	display: table-cell;
	vertical-align: middle;
  }

  .modal-container {
	min-width: 300px;
	width: 50%;
	margin: 0px auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	// transition: all .3s ease;
	font-family: $font-stack;
  }

  .modal-header {
	h3 {
	  margin: 0;
	}
	h3.modal-success{
	  color: $sucesso
	}
	h3.modal-error{
	  color: $erro
	}
  }

  .modal-body {
	margin: 20px 0;
	p.icons-participe{
	  font-family: participe;
	}
  }

  .modal-default-button {
	float: right;
  }

  .modal-body,
  .modal-footer{
	font-weight: 300;
	font-size: .85em;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
  }
}
</style>
