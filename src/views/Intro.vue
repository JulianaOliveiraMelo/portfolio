<template>
	<div class="intro-page">
		<h2 class="hello">Je me présente...</h2>
		<div class="container" :class="{ browserChangeContainer: fireFox }">
			<div class="text-content">
				<p>
					<ImageBox
						class="images floatRight map"
						:backgroundImage="require('../../public/images/porto-macao.png')"
						imageDescription="google map du temps de trajet entre Portugal et Macau"
					/>Je m'appelle Juliana, j'ai 36 ans et j'habite à
					<a
						class="bold"
						href="https://www.google.com/maps/place/82120+Mansonville/@44.0553462,0.843508,11z/data=!4m13!1m7!3m6!1s0x12abc15f29455c0b:0xfaf032cab7a40d76!2s82120+Mansonville!3b1!8m2!3d44.015309!4d0.840809!3m4!1s0x12abc15f29455c0b:0xfaf032cab7a40d76!8m2!3d44.015309!4d0.840809"
						target="_blank"
						>Mansonville</a
					>
					dans le Tarn-et-Garonne.
				</p>
				<p>
					D'origine portugaise, j'ai habité à
					<span class="bold macaoColors">Macao</span> en
					<span class="bold chinaColors">Chine</span> jusqu'à mes 13 ans, où
					j'ai fait mes premières années d'études. Au
					<span class="bold portugalColors">Portugal</span> à l'âge de 19 ans,
					j'ai obtenu mon diplôme professionnel en tant que modéliste, et mon
					premier travail en tant que caissière le weekend et modéliste à temps
					plein.
				</p>
				<p>
					En 2008 j'ai pris la décision de venir travailler en
					<span class="bold franceColors">France</span>. J'ai démarré en tant
					que saisonnière dans des usines à fruits. Très vite mon français s'est
					amélioré et je suis devenue chef de ligne d'une équipe d'environ 10
					personnes.<ImageBox
						class="images floatRight eiffel"
						:backgroundImage="
							require('../../public/images/hannah-reding-_U9rtz9kQS4-unsplash.png')
						"
					/>
				</p>
				<p>
					En 2011, j'ai décidé de me mettre à mon propre compte. Je suis devenue
					commerçante ambulante sur les marchés et foires de
					<span class="bold franceColors">France</span>. Je vendais des bijoux,
					du tatouage temporaire, des gants, bonnets, chaussettes, écharpes,
					etc.
				</p>
				<p>
					En 2013 j'ai eu mon premier enfant, qui s'est vite suivi de mon
					deuxième et puis de mon troisième. J'ai arrêté mon activité en 2017,
					pour me consacrer à eux et savourer les meilleurs moments de tendresse
					dans leur plus jeune âge.
				</p>
				<p>
					<ImageBox
						class="images floatLeft prestashop"
						:backgroundImage="require('../../public/logos/prestaShop.png')"
					/>
					C'est pendant mes congés parentaux que j'ai découvert mon goût pour la
					programmation. En effet, mon mari avait pris mon affaire et m'a
					demandé de créer un site e-commerce pour pouvoir vendre les affaires
					du marché. Je lui ai donc créé un site sur
					<span class="bold purple">Presta</span
					><span class="bold pink">Shop</span>. Comme je ne connaissais rien,
					j'ai regardé des vidéos sur Youtube, où il expliquait comment modifier
					certaines fonctionnalités de base et les adapter à nos besoins. C'est
					là que j'ai touché au code pour la première fois. J'ai tellement aimé,
					que je me suis dit que je voulais faire de ça mon métier.
				</p>
				<p>
					En 2019 j'ai donc décidé de me lancer en autodidacte et j'ai démarré
					mes premières leçons de
					<span class="bold javaScriptColor">JavaScript</span>,
					<span class="bold htmlColors">HTML</span> et
					<span class="bold cssColors">CSS</span> sur
					<a
						href="https://fr.khanacademy.org/profile/kaid_481308314146479591875582/"
						target="_blank"
						>Khan Academy</a
					>. J'ai vite pris goût au code et mon rêve de devenir développeuse Web
					et mobile est apparue. J'ai suivi une formation Full Stack JavaScript
					de trois mois intensives avec l'école
					<span class="bold black">O'clock</span> - labellisée
					<span class="bold white">GEN</span> et un stage de trois mois ou j'ai
					appris le <span class="bold wordpressColors">Wordpress</span> (no
					code). Aujourd'hui je passe des heures et des heures à apprendre sans
					me lasser.
				</p>
				<p>
					<ImageBox
						class="images floatLeft apple-android"
						:backgroundImage="require('../../public/images/apple-android.png')"
					/>
					Aujourd'hui je suis vivement intéressé par tout offre proposant un
					poste en tant que
					<span class="bold">Développeuse Web JavaScript Front-End</span>. J'ai
					des connaissances en <span class="bold vueColors">vue.js</span> que
					j'ai eu l'occasion d'apprendre en autodidacte, mais je peux m' adapter
					sur <span class="bold reactColors">react.js</span> ou
					<span class="bold angularColors">angular.js</span> si vous me donniez
					la chance.
				</p>
				<p>
					Alors si vous connaissez quelqu'un qui veut bien m'embaucher en
					<span class="bold darkShadow">CDD</span> ou
					<span class="bold darkShadow">CDI</span>, n'hésitez pas à entrer en
					contact avec moi.
				</p>
			</div>
		</div>

		<div class="button-box">
			<StyleButton text="Mes réalisations" link="realisations" />
			<StyleButton text="Contact" link="contact" />
		</div>
	</div>
</template>

<script>
import StyleButton from '@/components/StyleButton.vue';
import ImageBox from '@/components/ImageBox.vue';
export default {
	components: {
		StyleButton,
		ImageBox,
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/intro';
</style>
