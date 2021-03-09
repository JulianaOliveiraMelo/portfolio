<template>
	<div class="formation-box">
		<div class="container">
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
		<div v-if="diplomes" class="diplomes">
			<ul>
				<li v-for="d in diplomes" :key="d.name"></li>
			</ul>
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
		diplomes: Array,
	},
	methods: {
		getfile(link) {
			window.download(link);
		},
	},
};
</script>

<style lang="scss" scoped>
.formation-box {
	padding: 20px 0;
	margin: 20px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 5px dashed #5083b619;
	//vertical-align: middle;
}
.container {
	display: flex;
	justify-content: center;
	flex-direction: row;
	column-gap: 20px;
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
.diplomes {
	max-width: 80%;
	border-top: 5px dashed red;
}
@media screen and (max-width: 700px) {
	.container {
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
