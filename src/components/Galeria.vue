<template>
	<div class="Galeria" id="x">
		<div class="gall" :style="{maxWidth: gallery_attrs.width + 'px'}">
			<a
				class="pagination-previous"
				:disabled="isFirst"
				@click="previous"
				title="Anterior"
				><i class="icon-abrir_esquerda icon"><span>chevron_left</span></i></a>
			<template v-for="image in gallery_attrs.images">
				<figure class="item" v-show="image.state">
					<h3 v-if="image.icon">
						<img :src="image.icon">
						<span :class="{ noIcon:!image.icon }">{{ image.title }}</span>
					</h3>
					<div class="placeholder" v-if="loading" :style="{width: gallery_attrs.width + 'px'}" ></div>
					<img :src="image.url" :width="gallery_attrs.width">
					<p class="legenda" v-if="image.legenda"> {{ image.legenda }} </p>
				</figure>
			</template>
			<a
				class="pagination-next"
				:disabled="isLast"
				@click="next"
				title="Próximo"
				><i class="icon-abrir_direita icon"><span>chevron_right</span></i></a>
		</div>
		<nav
			class="pagination"
			role="navigation"
			aria-label="pagination"
			:style="{maxWidth: gallery_attrs.width + 'px'}"
			>

			<ul>
				<template v-for="(image, index) in gallery_attrs.images">
					<li>
						<a
							@click="numberClicked(index)"
							v-if="!image.state"
							>{{ index + 1 }}</a>
						<a
							class="ativo"
							v-if="image.state"
							>{{ index + 1 }}</a>
					</li>
				</template>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {
	name: 'Galeria',
	data () {
		return {
			loading: true,
		}
	},
	props: ['gallery_attrs'],
	computed: {
		isFirst () { return this.gallery_attrs.images[0].state },
		isLast () { return this.gallery_attrs.images[this.gallery_attrs.images.length - 1].state }
	},
	mounted () {},
	methods: {
		numberClicked (number) {
			let app = this
			app.gallery_attrs.images.map(function (index, elem) {
				if (index.state == true) { app.gallery_attrs.images[elem].state = false } else if (elem == number) { app.gallery_attrs.images[elem].state = true }
			})
		},
		next () {
			if (!this.isLast) {
				let nextIndex
				this.gallery_attrs.images.map(function (index, elem) {
					if (index.state == true) {
						index.state = false
						nextIndex = elem + 1
					}
				})
				this.gallery_attrs.images[nextIndex].state = true
			} else {
				// console.log('last image')
			}
		},
		previous () {
			if (!this.isFirst) {
				let previousIndex
				this.gallery_attrs.images.map(function (index, elem) {
					if (index.state == true) {
						index.state = false
						previousIndex = elem - 1
					}
				})
				this.gallery_attrs.images[previousIndex].state = true
			} else {
				console.log('first image')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.Galeria{
	margin: 4rem auto;
	max-width: 992px;
	border: 1px solid #BDBDBD;
	border-radius: 2px;
	overflow: hidden;
	z-index: 1;

	div.gall {
		background: #F5F5F5;
		display: flex;
		position: relative;

		& > a {
			position: absolute;
			display: inline-flex;
			align-items: center;
			top: 0;
			bottom: 0;
			width: 50%;
			color: #FFF;
			opacity: 0;
			transition: all ease-in .1s;
			z-index: 1;

			i { font-size: calc(24px + 2vmin); };

			&:hover {
				text-decoration: none;
				cursor: pointer;
				opacity: 1 !important;

				i { cursor: pointer; };
			};

			&:nth-of-type(1) {
				left: 0;
				background: linear-gradient(to left, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, .56));
				background: radial-gradient(circle at left center, rgba(0, 0, 0, .72), rgba(0, 0, 0, 0) 20%);
				justify-content: flex-start;
				&:hover { transform: translateX(-8px); };
			};

			&:nth-of-type(2) {
				right: 0;
				background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, .56));
				background: radial-gradient(circle at right center, rgba(0, 0, 0, .72), rgba(0, 0, 0, 0) 20%);
				justify-content: flex-end;
				&:hover { transform: translateX(8px); };
			};
		};

		figure.item {
			align-self: flex-start;
			margin: 0;
			padding: 0;
			z-index: 0;

			img { max-width: max-content; };
		};

		p.legenda {
			margin: -10px 0 0 0;
			padding: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 40px;
			max-width: 992px;
			width: 100%;
			font-family: inherit;
			font-size: smaller;
			background: #FFF;
			z-index: 3;
		};

		div.placeholder {
			/*background-color: grey;*/ /* DESCOMENTAR QUANDO LOADING ESTIVER COM EVENT LISTENER*/
			height: 100%;
			position: absolute;
		};
	};

	nav {
		margin: 0 auto;
		width: 100%;
		display: flex;

		ul {
			margin: 0;
			padding: 1rem 0;
			min-width: 100%;
			background: #F5F5F5;
			list-style-type: none;
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			align-items: center;
			font-family: inherit;
			z-index: 2;

			li {
				padding: 0;
				margin: 4px;

				&:first-child { margin-left: 0; };
				&:last-child { margin-right: 0; };

				a {
					padding: 0 8px;
					display: inline-block;
					font-size: smaller;
					line-height: 2rem;
					min-width: 2rem;
					background: #FFF;
					border: 1px solid #BDBDBD;
					border-radius: 2px;
					box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .12);
					display: flex;
					justify-content: center;
					align-items: center;
					color: inherit;
					transition: all .2s;

					&.ativo {
						color: #FFF;
						background: #EB5757;
						border-color: #EB5757;

						&:hover {
							color: #FFF;
						};
					};

					&:hover {
						text-decoration: none;
						cursor: pointer;
						color: #EB5757;
					};
				};

				a.disabled{
					pointer-events: none;
					cursor: default;
				};
			};
		};
	};

	&:hover div.gall a {
		opacity: .4;
	};
};
</style>
