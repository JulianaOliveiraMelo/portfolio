<template>
	<div>
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
img {
	max-width: 100%;
	margin: auto;
	display: block;
	object-fit: fill;
	-webkit-box-reflect: below 2px
		linear-gradient(transparent 80%, rgb(255, 255, 255) 200%);
}
</style>
