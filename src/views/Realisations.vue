<template>
	<div class="outsider">
		<Title msg="Mes réalisations" />
		<div class="container-box" v-for="w in work" :key="w.id">
			<div class="container">
				<div class="image-box">
					<ImageBox
						:backgroundImage="require('/public/images/' + w.image.source)"
						:imageDescription="w.image.description"
					/>
				</div>
				<div class="icons-box">
					<div v-for="i in w.icons" :key="i">
						<img class="icons-image" :src="require('/public/icons/' + i)" />
					</div>
				</div>
				<div class="content-box">
					<h3>{{ w.name }}</h3>
					<p>{{ w.text }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { bus } from '../main.js';
import Title from '../components/title';
import ImageBox from '../components/ImageBox';
export default {
	name: 'realisations',
	data() {
		return {
			work: {},
			width: '100%',
		};
	},
	components: { Title, ImageBox },

	created() {
		this.work = bus.work;
	},
};
</script>

<style lang="scss" scoped>
.outsider {
	max-width: 960px;
	padding: 20px;
	margin: auto;
	text-align: center;
}

.container-box::after {
	content: '';
	display: block;
	margin: auto;
	border-bottom: 1.5px solid hotpink;
	max-width: 50%;
}
.container {
	display: grid;
	grid-template-columns: 2.5fr 0.5fr 5fr;
	margin: 45px auto 25px;
	width: 100%;
	grid-auto-columns: minmax(100px, auto);
	@media screen and(max-width: 700px) {
		grid-template-columns: 1fr;
	}
}
.theme--light.v-divider {
	margin: auto;
	border-block-color: hotpink;
}
.v-divider--inset:not(.v-divider--vertical) {
	max-width: calc(100% - 30%);
}

.image-box {
	display: block;
}
.icons-box {
	margin: auto 0;
	border-right: 1px solid rgba(255, 255, 255, 0.049);
	max-height: 70%;
	height: 100%;
	& .icons-image {
		max-width: 32px;
	}
}
.content-box {
	//grid-column: 3;
	padding-left: 20px;
	//min-width: 70%;
	height: 100%;
	text-align: left;
}
</style>
