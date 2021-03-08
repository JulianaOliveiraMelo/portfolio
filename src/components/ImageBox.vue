<template>
	<div>
		<div><img :src="backgroundImage" :alt="imageDescription" /></div>
		<div
			:style="{ 'background-image': 'url(' + backgroundImage + ')' }"
			class="image-background"
		></div>
	</div>
</template>

<script>
export default {
	name: 'ImageBox',
	props: {
		backgroundImage: String,
		imageDescription: String,
	},
};
</script>
<style lang="scss" scoped>
.image-background {
	min-height: 20px;
	height: 100%;
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover;
	display: block;
	opacity: 1;
	filter: blur(10px);
}
img {
	max-width: 100%;
	display: block;
	object-fit: fill;
}
.col {
	padding: 0;
}
</style>
