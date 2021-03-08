<template>
	<div class="formation-box">
		<div class="image-box">
			<img :src="require('../../public/logos/' + src)" alt="" />
		</div>
		<div class="info-box">
			<a :href="link" target="blank"
				><h3>{{ name }}</h3></a
			>
			<p>{{ text }}</p>
			<span
				><a :href="linkString" target="blank">{{ linkText }}</a></span
			>
		</div>
	</div>
</template>

<script>
export default {
	name: 'formationsBox',
	props: {
		src: String,
		name: String,
		text: String,
		link: String,
		linkText: String,
		linkString: String,
	},
};
</script>

<style lang="scss" scoped>
.formation-box {
	padding: 20px 0;
	margin: 20px;
	display: flex;
	justify-content: center;
	flex-direction: row;
	column-gap: 20px;
	border: 5px dashed pink;
	//vertical-align: middle;
}
.image-box {
	margin: auto 0;
	max-height: 70px;
	padding-left: 20px;
	display: inline-block;
	& img {
		max-height: 70px;
	}
}
.info-box {
	padding: 20px 20px 20px 0;
}
@media screen and (max-width: 340px) {
	.formation-box {
		flex-direction: column;
	}
	.info-box {
		padding: 20px;
	}
	.image-box {
		padding: 0;
		margin: auto;
	}
}
</style>
