<template>
	<div class="thread-comments" :class="showThread ? 'open' : 'close'">
		<div class="modal">
			<div class="modal-content">
				<section class="modal-header">
					{{ threadContent.titulo }}
					<div class="modal-close" @click="close">
						<i class="icon-incorreto icon"></i>
					</div>
				</section>
				<section class="modal-body">
					<p>{{ threadContent.conteudo }}</p>
				</section>
				<section class="modal-comentarios">
					<CommentsLoader :attr="{}" />
				</section>
				<section class="modal-footer">
					<Comments :attr="{ id: threadContent.id, context: threadContent.titulo }" />
				</section>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CommentsLoader from '@/components/CommentsLoader'
import Comments from '@/components/Comments'
export default {
	name: 'ThreadComments',
	components: {
		CommentsLoader,
		Comments
	},
	computed: {
		...mapGetters('threadComments', ['threadContent', 'showThread'])
	},
	mounted () {
		this.setShowThread(true)
	},
	methods: {
		...mapActions('threadComments', ['setShowThread']),
		close () {
			this.setShowThread(false)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';
.thread-comments {
	background-color: $sombra-2;
	color: $preto;
    display: flex;
    justify-content: center;
    top: 0px;
    right: 0px;
	width: 100%;
	height: 100%;
	margin: 0px;
	overflow-y: auto;
	padding: 10px;
    position: fixed;
    z-index: 30;

	.modal {
		position: relative;

		.modal-content {
			height: auto;
			background-color: #FFF;
			border-radius: 7px;

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
					align-items: center;
					background-color: $vermelho;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					position: absolute;
					right: -7px;
					top: -7px;
					height: 25px;
					width: 25px;

					& i {
						cursor: pointer;
					}
				}
			}

			.modal-comentarios {
				width: 100%;

				.Commentsloader {
					width: 100%;
					padding: 0px;
					margin: 0px;
				}
			}
		}
	}
}
.open {
	display: flex;
}
.close {
	display: none;
}
</style>
