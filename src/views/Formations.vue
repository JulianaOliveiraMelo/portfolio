<template>
	<div class="container">
		<Title msg="Formations" />
		<h3>Openclassrooms</h3>
		<h3>Dyma</h3>
		<h3>O'clock</h3>
		<h3>FreeCodeCamp</h3>

		<FormationsBox
			src="kahanAcademyLogo.png"
			name="Khan Academy"
			text="Découverte des bases de HTML, CSS, JavaScript"
			link="https://fr.khanacademy.org/"
			linkString="https://fr.khanacademy.org/profile/kaid_481308314146479591875582/projects"
			linkText="Voir les projets réalisées au sein de khan Academy"
		/>
	</div>
</template>

<script>
import FormationsBox from '../components/formationsBox.vue';
import Title from '../components/title.vue';
export default {
	components: {
		Title,
		FormationsBox,
	},
};
</script>

<style lang="scss" scoped>
.container {
	margin: auto;
	max-width: 900px;
}
</style>
