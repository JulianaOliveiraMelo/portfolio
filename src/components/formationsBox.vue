<template>
	<div class="formation-box">
		<div class="container">
			<div class="image-box">
				<img :src="source" alt="" />
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
				<li v-for="d in diplomes" :key="d.name" class="overlay">
					<a
						:href="require('../../public/diplomes/oclock.pdf').default"
						target="_blank"
						>{{ d.link }}</a
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'formationsBox',
	props: {
		source: String,
		name: String,
		description: Array,
		link: String,
		linkText: String,
		linkString: String,
		diplomes: Array,
	},
	data: () => ({
		overlay: false,
	}),

	watch: {
		overlay(val) {
			val &&
				setTimeout(() => {
					this.overlay = false;
				}, 2000);
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
.overlay img {
	max-width: 90vw;
	max-height: 90vh;
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
