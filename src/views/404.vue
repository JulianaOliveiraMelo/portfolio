<template>
	<div class="outsider" :style="{ backgroundImage: 'url(\'' + image + '\')' }">
		<div class="container">
			<div>Erreur 404</div>
			<div class="image-box">
				<ImageBox
					class="imageContent"
					:backgroundImage="require('../../public/images/astronaute.png')"
					:imageDescription="'Astronaul for 404 page'"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import ImageBox from '@/components/ImageBox.vue';
export default {
	components: {
		ImageBox,
	},
	data() {
		return {
			image: '../../public/images/nasa-Q1p7bh3SHj8-unsplash.png',
		};
	},
};
</script>
<style lang="scss" scoped>
.outsider {
	background-image: url('../../public/images/nasa-Q1p7bh3SHj8-unsplash.png');
}
.container {
	border: 5px dashed #5083b619;
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	overflow: hidden;
	text-align: center;
}
.image-box {
	display: block;
	padding: 10px;
	max-width: 50%;
}
</style>
