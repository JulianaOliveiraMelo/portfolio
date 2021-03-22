<template>
	<div class="outFlex">
		<div class="box">
			<div class="info">
				<Title msg="Juliana Oliveira Melo" />
				<h3>Développeuse d'applications iOS</h3>
				<p>
					Recherche contrat de professionnalisation pour l'obtention d'un
					<span class="link-style">
						<a
							href="https://www.francecompetences.fr/recherche/rncp/27099/"
							target="_blank"
							rel="noopener"
							>diplôme de niveau 6 (Bac+3/4)</a
						></span
					>.
				</p>
				<p>4 jours entreprise / 1 jour école - 24 mois</p>
				<div class="button-box">
					<StyleButton text="Mes réalisations" link="realisations" />
					<StyleButton text="Contact" link="contact" />
				</div>
			</div>
			<div class="image-box">
				<img
					:src="require('../../src/assets/ordinateur-portable.png')"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/PageTitle.vue';
import StyleButton from '@/components/StyleButton.vue';

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
.outFlex {
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	margin: auto;
	margin-top: 5%;
	@media screen and (max-width: 760px) {
		margin-top: 10vh;
	}
}
.box {
	display: grid;
	grid-template-columns: 2fr 1fr;
	margin: auto;
	min-height: calc(100vh - 10%);
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 750px) {
		grid-template-columns: 1fr;
		justify-content: center;
		.image-box {
			max-width: 60%;
			margin: auto;
			@media screen and(max-width: 400px) {
				max-width: 100%;
			}
		}
	}
}
.image-box {
	img {
		max-width: 100%;
	}
}
@media screen and (max-width: 800px) {
}
</style>
