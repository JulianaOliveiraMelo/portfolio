<template>
	<div class="outsider">
		<Title msg="Crédits" />
		<div class="container">
			<h3>Conception et Réalisation</h3>
			<p class="margin-top">Juliana Oliveira Melo</p>
		</div>
		<div class="container">
			<h3>Images</h3>
			<ul class="margin-top">
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Photo de
					<a target="_blank" href="https://www.pexels.com/fr-fr/@chuck"
						>Photo de Wallace Chuck</a
					>
					provenant de
					<a target="_blank" href="https://www.pexels.com/">Pexels</a>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Photo de
					<a target="_blank" href="https://www.pexels.com/fr-fr/@markusspiske"
						>Photo de Markus Spiske</a
					>
					provenant de
					<a target="_blank" href="https://www.pexels.com/">Pexels</a>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Photo de
					<a
						target="_blank"
						href="https://unsplash.com/@hannahrdg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						>Hannah Reding</a
					>
					provenant de
					<a
						target="_blank"
						href="/s/photos/hannah-reding-eiffel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						>Unsplash</a
					>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Photo de
					<a target="_blank" href="https://www.pexels.com/fr-fr/@martabranco"
						>Marta Branco</a
					>
					provenant de
					<a target="_blank" href="https://www.pexels.com/">Pexels</a>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Logo
					<a target="_blank" href="https://fr.wikipedia.org/wiki/PrestaShop">
						PrestaShop</a
					>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Image map de
					<a
						target="_blank"
						href="https://www.google.com/maps/dir/porto+portugal/macao+chine/@26.2616827,15.2769409,3z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd2465abc4e153c1:0xa648d95640b114bc!2m2!1d-8.6291053!2d41.1579438!1m5!1m1!1s0x34017ae0e235c8f3:0xc67be32cb485acf6!2m2!1d113.543873!2d22.198745"
						>Google Maps</a
					>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Logo
					<a target="_blank" href="https://www.jnov.fr/">J'NOV</a>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Logo
					<a
						target="_blank"
						href="http://www.savoie.cci.fr/actualite/1955/137-auto-entrepreneur-le-portail-officiel-et-le-nouveau-guide-de-juin-2020.htm"
						>Auto-Entrepreneur</a
					>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Logo
					<a
						target="_blank"
						href="https://www.linkedin.com/company/stanor/?originalSubdomain=fr"
						>STANOR</a
					>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Logo
					<a target="_blank" href="https://www.philibon.com/">BOYER SA.</a>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Logo
					<a target="_blank" href="http://rda.com.pt/">RDA DENIM</a>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Logo
					<a
						target="_blank"
						href="https://www.facebook.com/LobosConfeccoes/?ref=page_internal"
						>Lobos & Filhos</a
					>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Logo
					<a
						target="_blank"
						href="https://www.sonae.pt/en/sonae/the-group-and-our-businesses/"
						>Modelos Supermercados</a
					>
				</li>
			</ul>
		</div>
		<div class="container">
			<h3>Icons</h3>

			<ul>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Logo
					<a target="_blank" href="https://github.com/logos">GitHub</a>
				</li>
				<li>
					<img
						class="photo-icon"
						:src="require('../../public/icons/icons8-google-images-48.png')"
					/>
					Logos
					<a target="_blank" href="https://icons8.com/">icons8.com</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Title from '@/components/PageTitle.vue';
export default {
	components: {
		Title,
	},
};
</script>
<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 20px;
	margin-top: 20px;
	border: 5px dashed #5083b619;
}
.margin-top {
	margin-top: 10px;
}
.photo-icon {
	max-height: 30px;
	margin-bottom: -10px;
}
</style>
