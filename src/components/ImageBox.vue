<template>
	<div class="image-box-component">
		<div><img :src="backgroundImage" :alt="imageDescription" /></div>
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
@import '../../src/sass/imageBox';
</style>
