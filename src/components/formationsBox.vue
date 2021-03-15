<template>
	<div class="formation-box">
		<div class="school-objectives">
			<div class="logo-box">
				<a :href="link" target="_blank"><img :src="source" :alt="name"/></a>
			</div>
			<div class="info-box">
				<div class="title">
					<h3>
						<a class="hoverLink" a :href="link" target="blank">{{ name }}</a>
					</h3>
				</div>
				<ul>
					<li v-for="tasks in description" :key="tasks">
						<img
							src="../../public/listStyleType/icons8-rocket-48.png"
							alt="rocket-icon"
						/>{{ tasks }}
					</li>
				</ul>
			</div>
		</div>
		<template v-if="linkText">
			<span class="formation-info"
				><a :href="linkString" target="blank">{{ linkText }}</a></span
			>
		</template>
		<template v-else>
			<span class="formation-info" v-for="(o, key) in objective" :key="key"
				>Objectif: {{ o.text }} :
				<a :href="o.cours" target="_blank">voir le parcours</a></span
			>
		</template>
		<div v-if="diplomes" class="diplomes">
			<ul>
				<li v-for="d in diplomes" :key="d.name" class="overlay">
					{{ d.name }} :
					<a
						:href="require('../../public/diplomes/' + d.link).default"
						target="_blank"
						>voir pdf</a
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
		objective: Array,
		linkText: String,
		linkString: String,
		diplomes: Array,
	},
};
</script>

<style lang="scss" scoped>
.formation-box {
	padding: 20px 0;
	margin: 45px auto 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 5px dashed #5083b619;
}
.school-objectives {
	display: flex;
	justify-content: space-evenly;
	flex-direction: row;
	column-gap: 40px;
	width: 100%;
	padding: 0 20px;
}
.logo-box {
	margin: auto 0;
	max-height: 70px;
	padding-left: 20px;
	display: inline-block;
	min-width: 30%;
	& img {
		max-height: 70px;
	}
	a::after {
		content: none;
	}
}
.info-box {
	width: 100%;
	text-align: left;
	ul {
		//padding: 20px;
		li {
			list-style-type: none;

			&:nth-child(2n) img {
				transform: rotate(200 + deg);
			}
			&:nth-child(3n) img {
				transform: rotate(260 + deg);
			}
			&:nth-child(5n) img {
				transform: rotate(300 + deg);
			}
			&:nth-child(7n) img {
				transform: rotate(30 + deg);
			}
		}
		img {
			max-width: 20px;
			margin-right: 10px;
		}
	}
	span {
		margin-top: 20px;
	}
	a h3 {
		width: 100%;
	}
}
.title {
	text-align: right;
}
.formation-info {
	padding: 30px 10px 0;
}
.diplomes {
	width: 80%;
	max-width: 80%;
	margin-top: 20px;
	padding: 20px 20px 0;
	border-top: 5px dashed #5083b619;
}
.overlay {
	width: 100%;
	text-align: left;
	list-style-type: none;
}
@media screen and (max-width: 700px) {
	.container {
		flex-direction: column;
		padding-bottom: 0;
	}
	.info-box {
		width: 100%;
		text-align: center;
		.title {
			text-align: center;
		}
	}
	.logo-box {
		padding: 0;
		margin: auto;
	}
	.overlay {
		text-align: center;
	}
}
</style>
