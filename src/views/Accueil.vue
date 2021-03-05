<template>
	<div class="box">
		<div class="left">
			<Title msg="Juliana Oliveira Melo" />
			<h3>Développeuse d'applications iOS</h3>
			<p>
				Recherche contrat de professionnalisation pour l'obtention d'un
				<span class="link-style"
					><a
						href="https://www.francecompetences.fr/recherche/rncp/27099/"
						target="_blank"
						rel="noopener"
						>diplôme de niveau 6 (Bac+3/4)</a
					></span
				>.
			</p>

			<p>4 jours entreprise / 1 jour école - 24 mois</p>
			<div class="buttons-box">
				<StyleButton text="Mes réalizations" link="realisations" />
				<StyleButton text="Contact" link="contact" />
			</div>
		</div>
		<div class="right"></div>
	</div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/title.vue';
import StyleButton from '@/components/styleButton.vue';

export default {
	name: 'Accueil',
	components: {
		Title,
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
.buttons-box {
	max-width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-content: space-between;
	margin-top: 10%;
}

@media screen and (max-width: 800px) {
	.box {
		flex-wrap: wrap;
	}
	.right {
		min-width: 100%;
		max-height: 600px;
		background-position: center;
	}
}
.right {
	background-image: url('../../src/assets/femme en travaille.png');
}
</style>
