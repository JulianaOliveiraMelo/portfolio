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
				<p v-if="year"><span class="year">année:</span> {{ year }}</p>
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
			<span v-for="(o, key) in objective" :key="key" class="formation-info"
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
	name: 'FormationsBox',
	props: {
		source: {
			type: String,
			require: true,
			default: '',
		},
		name: {
			type: String,
			require: true,
			default: '',
		},
		description: {
			type: Array,
			require: true,
		},
		link: {
			type: String,
			require: true,
			default: '',
		},
		objective: {
			type: Array,
			require: true,
		},
		linkText: {
			type: String,
			require: true,
			default: '',
		},
		linkString: {
			type: String,
			require: true,
			default: '',
		},
		diplomes: {
			type: Array,
			require: true,
		},
		year: {
			type: String,
			require: true,
			default: '',
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/formationsBox';
</style>
