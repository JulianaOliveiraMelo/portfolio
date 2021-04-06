<template>
	<div class="intro-page">
		<h2 class="hello">Je me presente...</h2>
		<div class="container">
			<div class="text-content">
				<p>
					<ImageBox
						class="images floatRight map"
						:backgroundImage="require('../../public/images/porto-macao.png')"
					/>Je m'appelle Juliana Melo, j'ai 36 ans et j'habite à
					<a
						class="bold"
						href="https://www.google.com/maps/place/82120+Mansonville/@44.0553462,0.843508,11z/data=!4m13!1m7!3m6!1s0x12abc15f29455c0b:0xfaf032cab7a40d76!2s82120+Mansonville!3b1!8m2!3d44.015309!4d0.840809!3m4!1s0x12abc15f29455c0b:0xfaf032cab7a40d76!8m2!3d44.015309!4d0.840809"
						target="_blank"
						>Mansonville</a
					>
					dans le Tarn-et-Garonne.<br />
					D'origine portugaise, j'ai eu l'occasion de voyager avec mes parents
					un peu partout dans le monde et d'habiter dans une colonie portugaise
					à Macao en <span class="bold chinaColors">Chine</span>, où j'ai fait
					mes premières années d'école. à mes treize ans, je n'ai pas eu d'autre
					choix que de suivre ma famille et de repartir vivre au
					<span class="bold portugalColors">Portugal</span>. En 2004 j'ai eu mon
					Bac professionnel en tant que modéliste. J'ai démarré le monde du
					travail avec deux jobs en même temps, modéliste en stage pendant la
					semaine dans une usine de confection et caissière les weekends et
					jours fériés dans un supermarché. Mes deux contrats finis, j'ai trouvé
					du travail dans une autre usine de confection où très vite je suis
					devenue polyvalente. J'étais modéliste, mais je remplaçais mon patron
					dès qu'il s'absentait. Je gérais les stocks des accessoires, je
					répondais au téléphone, j'étais en contact direct avec les clients et
					les fournisseurs et parfois je trouvais même le temps d' aider dans la
					production pour que les commandes ne prennent pas de retard. J'aimais
					beaucoup mon travail, mais mon salaire ne parvenait pas à suivre les
					besoins de ma famille.<br />
					En 2008 j'ai pris la décision de venir travailler en
					<span class="bold franceColors">France</span>.<ImageBox
						class="images floatRight eiffel"
						:backgroundImage="
							require('../../public/images/hannah-reding-_U9rtz9kQS4-unsplash.png')
						"
					/>
					J'ai démarré en tant qu'étiqueteuse l'été, dans une station
					fruitière. Je ne savais pas parler français, mais en aucun cas
					cela m'a empêché de bien faire mon travail. L'hiver je travaillais
					aussi dans une autre station fruitière en tant que trieuse de pommes.
					Très vite mon français s'est amélioré et je suis devenue cheffe de
					ligne d'une équipe d'environ 10 personnes.<br />
					En 2011, j'ai arrêté mon contrat pour me mettre à mon propre compte.
					Je suis devenue commerçante ambulante sur les marchés et foires de
					<span class="bold franceColors">France</span>. Je vendais des bijoux
					et du tatouage temporaire l'été et des gants, bonnets, chaussettes et
					écharpes en hiver.<br />
					En 2013 j'ai eu mon premier enfant, qui s'est vite suivi de mon
					deuxième et troisième petit loup. J'ai arrêté mon activité en 2017,
					pour me consacrer à eux et savourer les meilleurs moments de tendresse
					dans leur plus jeune âge.<br />
					<ImageBox
						class="images floatLeft prestashop"
						:backgroundImage="require('../../public/logos/prestaShop.png')"
					/>
					C'est pendant mes congés parentaux que j'ai découvert mon goût pour la
					programmation. En effet, mon mari avait pris mon affaire et demandé de
					créer un site e-commerce pour pouvoir vendre les affaires du marché.
					Je lui ai donc créé un site sur
					<span class="bold purple">Presta</span
					><span class="bold pink">Shop</span> Comme je ne connaissais rien,
					j'ai regardé des vidéos sur Youtube, où il expliquait comment modifier
					certaines fonctionnalités de base et les adapter à nos besoins. C'est
					là que j'ai touché au code pour la première fois. J'ai tellement 
					aimé, que je me suis dit que je voulais faire de ça mon métier.<br />
					En 2019 j'ai donc décidé de me lancer en autodidacte et j'ai démarré
					mes premières leçons de
					<span class="bold javaScriptColor">JavaScript</span>,
					<span class="bold htmlColors">HTML</span> et
					<span class="bold cssColors">CSS</span> sur
					<a
						href="https://fr.khanacademy.org/profile/kaid_481308314146479591875582/"
						target="_blank"
						>Khan Academy</a
					>. J'ai vite pris goût au code et mon rêve de devenir développeuse Web
					et mobile est apparue. Aujourd'hui je passe des heures et des heures à
					apprendre sans me lasser, pour l'instant, j'apprends
					<span class="bold orange">Swift</span> et les bases de
					<span class="bold blue">XCode</span>.<br />
					Récemment admise à l'école Openclassrooms, je veux suivre le parcours
					de développeuse d'application <span class="bold iosColor">iOS</span>,
					car pour moi, pour devenir une meilleure développeuse mobile, il faut
					démarrer par le native. J'ai comme objectif par la suite d'apprendre
					android native, mais aussi <span class="bold iosColor">iOS</span> /
					<span class="bold androidColor">Android</span> hybride. Je ne compte
					pas m'arrêter là car je sais que le monde du web est en constante
					évolution.<br />Alors si vous connaissez quelqu'un qui veut bien
					m'embaucher en contrat de professionnalisation d'une durée de 24 mois
					au rythme de 4 jours entreprise 1 jour école, n'hésitez pas à entrer
					en contact avec moi.
				</p>
			</div>
		</div>

		<div class="button-box">
			<StyleButton text="Mes réalizations" link="realisations" />
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
