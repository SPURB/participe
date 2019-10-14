<template>
	<div 
		class="Galeria"
		:class="{ print: toPrint }"
		:style="{maxWidth: gallery_attrs.width + 'px'}"
		v-observe-visibility="{
			callback: (isVisible, entry) => visibilityChanged(isVisible, entry),
			once: true
		}"
		>
		<div class="gall" v-if="!toPrint" :style="{maxWidth: gallery_attrs.width + 'px'}">
			<template v-for="(image, index) in gallery_attrs.images">
				<figure class="item" v-show="image.state" :key="index">
					<h3 v-if="image.icon">
						<img :src="image.icon" :class="{ legenda: gallery_attrs.legendas }">
						<span :class="{ noIcon:!image.icon }">{{ image.title }}</span>
					</h3>
					<h2 v-if="gallery_attrs.galleryTitle">{{ gallery_attrs.galleryTitle }}</h2>
					<div class="placeholder" v-if="loading" :style="{ maxWidth: gallery_attrs.width + 'px'}" ></div>
					<img v-if="loadImages" :src="image.url" :width="gallery_attrs.width">
					<p class="legenda" v-if="image.legenda"> {{ image.legenda }} </p>
				</figure>
			</template>
			<a
				class="pagination-previous"
				:disabled="isFirst"
				v-show="!isFirst"
				@click="previous"
				title="Anterior"
				><i class="icon-abrir_esquerda icon"><span>chevron_left</span></i></a>
			<a
				class="pagination-next"
				:disabled="isLast"
				v-show="!isLast"
				@click="next"
				title="Próximo"
				><i class="icon-abrir_direita icon"><span>chevron_right</span></i></a>
		</div>
		<nav
			class="pagination"
			role="navigation"
			aria-label="pagination"
			:style="{maxWidth: gallery_attrs.width + 'px'}"
			v-if="!toPrint"
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
		<ul class="print" v-if="toPrint">
			<li v-for="image in gallery_attrs.images">
				<img :src="image.url">
				<p>{{ image.legenda }}</p>
			</li>
		</ul>
	</div>
</template>
<script>
import { fallbacks } from '@/mixins/fallbacks'

export default {
	name: 'Galeria',
	mixins: [ fallbacks ],
	data () {
		return {
			loading: true,
			isVisible: false
		}
	},
	props: ['gallery_attrs'],
	computed: {
		isFirst () { return this.gallery_attrs.images[0].state },
		isLast () { return this.gallery_attrs.images[this.gallery_attrs.images.length - 1].state },
		toPrint () { return this.$store.state.toPrint },
		loadImages () {
			if (!this.isIE && this.isVisible) return true
			else if (this.isIE) return true
			else return false
		}
	},
	methods: {
		visibilityChanged (isVisible, entry) {
			this.isVisible = isVisible
		},
		numberClicked (number) {
			let app = this
			app.gallery_attrs.images.map(function (index, elem) {
				if (index.state === true) {
					app.gallery_attrs.images[elem].state = false
				} else if (elem === number) {
					app.gallery_attrs.images[elem].state = true
				}
			})
		},
		next () {
			if (!this.isLast) {
				let nextIndex
				this.gallery_attrs.images.map(function (index, elem) {
					if (index.state === true) {
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
					if (index.state === true) {
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
@import '../variables';
.Galeria{
	margin: 4rem auto;
	max-width: 992px;
	border: 1px solid #BDBDBD;
	border-radius: 2px;
	overflow: hidden;
	div.gall {
		background: #F5F5F5;
		display: flex;
		position: relative;
		z-index: 2;
		& > a {
			position: absolute;
			display: inline-flex;
			align-items: center;
			top: calc(50% - 20px);
			bottom: 0;
			width: 60px;
			height: 60px;
			color: #FFF;
			background-color: $sombra-1;
			opacity: 0;
			transition: all ease-in .1s;
			i { font-size: calc(24px + 2vmin); };
			&:hover {
				text-decoration: none;
				cursor: pointer;
				opacity: 1 !important;
				i { cursor: pointer; };
			};
			&:nth-of-type(1) {
				left: 0;
				justify-content: flex-start;
				&:hover { transform: translateX(-8px); };
			};
			&:nth-of-type(2) {
				right: 0;
				justify-content: flex-end;
				&:hover { transform: translateX(8px); };
			};
		};
		figure.item {
			align-self: flex-start;
			margin: 0;
			padding: 0;
			position: relative;
			h2 {
				position: absolute;
				width: 100%;
				background-color: $sombra-2;
				color: #FFF;
				font-size: small;
				font-weight: normal;
				line-height: 1.6;
				margin: 0;
				padding: 0.5rem 1rem;
				text-align: center;
				transform: translateY(-3rem);
				transition: transform ease-in .2s;
			}
			img {
				width: 100%;
				&.legenda {
					width: unset;
					margin: 0 1rem;
					vertical-align: middle;
				}
			};
		};
		&:hover figure.item h2 {
			transform: translateY(0);
		}
		p.legenda {
			margin: -10px 0 0 0;
			padding: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 40px;
			// max-width: 992px;
			width: 100%;
			font-family: inherit;
			font-size: smaller;
			background: #FFF;
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
	&.print {
		max-width: 100%;
		margin: 4rem 20mm;
		border-width: 0;
		counter-reset: number;
		color-adjust: exact;
		-webkit-print-color-adjust: exact;
		ul.print {
			max-width: 100%;
			list-style-type: none;
			padding: 0;
			margin: 0;
			li {
				margin: 0 0 10mm 0;
				counter-increment: number;
				border: 1px solid $cinza-1;
				border-radius: 2px;
				break-inside: avoid-page;
				page-break-inside: avoid;
				overflow: hidden;
				img {
					max-width: 100%;
				}
				p {
					font-size: small;
					margin: 0 8px;
					padding-bottom: 8px;
					&::before {
						content: counter(number);
						display: inline-block;
						vertical-align: baseline;
						line-height: 1rem;
						text-align: center;
						width: 1rem;
						font-size: x-small;
						border-radius: 100%;
						border: 1px solid $preto;
						margin-right: 8px;
					}
				}
			}
		}
	}
};
</style>
