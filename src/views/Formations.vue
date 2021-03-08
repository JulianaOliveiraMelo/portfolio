<template>
	<div class="container">
		<Title msg="Formations" />
		<h3>Openclassrooms</h3>
		<h3>Dyma</h3>
		<h3>O'clock</h3>
		<h3>FreeCodeCamp</h3>

		<a href="https://fr.khanacademy.org/"><h3>Khan Academy</h3></a>
		<p>Decouverte des bases de HTML, CSS, JavaScript</p>
		<span
			><a
				href="https://fr.khanacademy.org/profile/kaid_481308314146479591875582/projects"
				>Voir les projets réalisées au sein de khana cademy</a
			></span
		>
	</div>
</template>

<script>
import Title from '../components/title.vue';
export default {
	components: {
		Title,
	},
};
</script>

<style lang="scss" scoped>
.container {
	margin: auto;
	max-width: 900px;
}
</style>
