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
					<div>
						<h3>{{ w.name }}</h3>
						<p>{{ w.text }}</p>
					</div>
					<aside>
						<a :href="w.school.link" target="blank">{{ w.school.name }}</a>
					</aside>
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

.image-box {
	display: block;
}
.icons-box {
	margin: auto 0;
	border-right: 1px solid rgba(255, 255, 255, 0.049);
	max-height: 70%;
	height: 100%;
	display: flex;
	flex-direction: column;
	& .icons-image {
		max-width: 32px;
	}
	@media screen and (max-width: 700px) {
		flex-direction: row;
		margin: auto;
		border-right: 0px;
	}
}
.content-box {
	padding-left: 20px;
	//min-height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	//align-items: flex-start;
	div {
		text-align: left;
	}
	aside {
		display: flex;
		height: 100%;
		//flex-direction: row;
		justify-content: flex-end;
		//align-content: flex-end;
		//align-self: flex-end;
		align-items: flex-end;
	}
}
</style>
