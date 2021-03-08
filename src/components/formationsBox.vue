<template>
	<div class="formation-box">
		<div class="image-box">
			<img :src="src" alt="" />
		</div>
		<div class="info-box">
			<a :href="link" target="blank"
				><h3>{{ name }}</h3></a
			>
			<ul>
				<li v-for="tasks in description" :key="tasks">{{ tasks }}</li>
			</ul>
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
		description: Array,
		link: String,
		linkText: String,
		linkString: String,
	},
};
</script>

<style lang="scss" scoped>
.formation-box {
	padding: 20px 0;
	margin: 20px 0;
	display: flex;
	justify-content: center;
	flex-direction: row;
	column-gap: 20px;
	border: 5px dashed #5083b619;
	//vertical-align: middle;
}
.image-box {
	margin: auto 0;
	max-height: 70px;
	padding-left: 20px;
	display: inline-block;
	& img {
		//max-width: 30%;
		max-height: 70px;
	}
}
.info-box {
	padding: 20px 20px 20px 0;
}
@media screen and (max-width: 440px) {
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
