<template>
	<div class="accueil-page">
		<div class="info">
			<h1 class="hello">Juliana Oliveira Melo</h1>
			<h3>Développeuse d'applications</h3>
			<p class="text-margin">
				En recherche de contrat de professionnalisation pour l'obtention d'un
				diplôme de niveau 6 (Bac+3/4).
			</p>
			<p>
				Durée de 16 mois : 3 jours entreprise / 2 jour école.
			</p>
			<div class="button-box">
				<StyleButton text="Mes réalisations" link="realisations" />
				<StyleButton text="Contact" link="contact" />
			</div>
		</div>
		<div class="image-box">
			<img
				:src="require('../../public/images/ordinateur-portable.png')"
				alt="ordinateur apple"
			/>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import StyleButton from '@/components/StyleButton.vue';

export default {
	name: 'Accueil',
	components: {
		StyleButton,
	},
	methods: {
		click(path) {
			this.$router.replace('/' + path);
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/accueil';
</style>
