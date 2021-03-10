import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/sass/main.scss';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
export const bus = new Vue({
	vuetify,

	data: {
		training: [
			{
				id: 1,
				name: 'Kahan Academy',
				src: 'kahanAcademyLogo.png',
				description: ['Découverte des bases de HTML, CSS, JavaScript'],
				link: 'https://www.freecodecamp.org/',
				linkText: 'Voir les projets réalisées au sein de Khan Academy',
				linkString:
					'https://fr.khanacademy.org/profile/kaid_481308314146479591875582/projects',
			},
			{
				id: 2,
				name: 'FreeCodeCamp',
				src: 'freeCodeCampLogo.png',
				description: ['Découverte des bases de HTML, CSS, JavaScript'],
				link: 'https://fr.khanacademy.org/',
				linkText: 'Voir les certifications au sein de freeCodeCamp',
				linkString: 'https://www.freecodecamp.org/julianadeale',
			},
			{
				id: 3,
				name: "O'clock",
				src: 'o-ClockLogo.png',
				description: [
					'Découverte des bases de HTML, CSS, JavaScript',
					'Apprendre à se servir de Node.js et Express.js',
					'Apprendere la syntaxe SQL',
					'Apprendre les bases de Git',
					'Faire une API',
					'Des projets en Solo et en PairPrograming',
				],
				link:
					'https://oclock.io/?gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x_nfEF6T_i13tmGcWQGGnUmPrcQASv4ChoQ_8De2jedCnuPrGI8QM8aAuSmEALw_wcB',
				linkText: "Voir les projets réalisées au sein de O'Clock - gitHub",
				linkString:
					'https://github.com/JulianaOliveiraMelo/parcours-formation-o-clock',
				diplomes: [
					{
						name: "Attestation de presence O'Clock",
						link: 'oclock.pdf',
					},
				],
			},
			{
				id: 4,
				name: 'Dyma',
				src: 'dymaLogo.png',
				description: [
					'Découverte des bases de JavaScript',
					'Découverte de Vue.js : le nouveau Framework orienté',
				],
				link: 'https://dyma.fr',
				linkText: 'Voir les projets réalisées au sein de dyma',
				linkString: 'https://dyma.fr/developer/5f81b6b44b3326259b4e48dc',
				diplomes: [
					{
						name: 'Certification VueJS',
						link: 'certification-VueJS-Dyma.pdf',
					},
					{
						name: 'Certification JavaScript',
						link: 'certification-JavaScript-Dyma.pdf',
					},
				],
			},
			{
				id: 5,
				name: 'Openclassrooms',
				src: 'openClassRoomsLogo.png',
				description: [
					'Apprendre a coder avec JavaScript',
					'Créer des animations CSS modernes',
					'Apprendre les fondamentaux de Swift',
					'Approfondir Swift avec la Programation Orientée Objet',
				],
				link: 'https://fr.khanacademy.org/',
				linkText: 'Voir les projets réalisées au sein de khan Academy',
				linkString:
					'https://fr.khanacademy.org/profile/kaid_481308314146479591875582/projects',
				diplomes: [
					{
						name: 'Apprendre a coder avec JavaScript',
						link: 'apprendreACoderAvecJavaScript.pdf',
					},
					{
						name: 'Créer des animations CSS modernes',
						link: 'creezDesAnimationsCSSModernes.pdf',
					},
					{
						name: 'Apprendre les fondamentaux de Swift',
						link: 'apprendreLesFondamentauxDeSwift.pdf',
					},
					{
						name: 'Approfondir Swift avec la Programation Orientée Objet',
						link: 'approfondirSwiftAvecLaProgramationOrienteeObjet.pdf',
					},
				],
			},
		],
		work: [
			{
				//khanAcademy
				id: 1,
				name: 'Divers projets chez Kahan Academy',
				school: {
					name: 'Kahan Academy',
					link:
						'https://fr.khanacademy.org/profile/kaid_481308314146479591875582/projects',
				},
				icons: {
					'HTML-icon': 'icons8-html-filetype-50.png',
					'CSS-icon': 'icons8-css-filetype-50.png',
					'JavaScript-icon': 'icons8-javascript-50.png',
				},
				image: {
					source: 'globalProjectsKhanAcademy.png',
					description: 'global Projects from Kahan Academy screenshot',
					link:
						'https://fr.khanacademy.org/profile/kaid_481308314146479591875582/projects',
				},
				text:
					'<p>Objectif: Apprendre les bases du HTML, CSS et JavaScript.</p>',
			},
			{
				//freeCodeCamp
				id: 2,
				name: 'Build a Tribute Page',
				school: {
					name: 'freeCodeCamp',
					link: 'https://www.freecodecamp.org/julianadeale',
				},
				icons: {
					'HTML-icon': 'icons8-html-filetype-50.png',
					'CSS-icon': 'icons8-css-filetype-50.png',
				},
				image: {
					source: 'buildATributePage-freeCodeCamp.png',
					description: 'Build a Tribute Page screenshot',
					link: 'https://codepen.io/Julianadeale/full/XwrQXG',
				},
				text:
					'<p>Objectif: créer une application CodePen.io fonctionnellement similaire à <a href="https://codepen.io/freeCodeCamp/full/zNqgVx" target="blank">celle-ci</a>.</p><p>Répondre aux user stories et faire réussir tous les tests.</p><p>Donnez mon propre style personnel.</p><p>Responsive Web Design.</p>',
			},
			{
				id: 3,
				name: 'Build a Survey Form',
				school: {
					name: 'freeCodeCamp',
					link: 'https://www.freecodecamp.org/julianadeale',
				},
				icons: {
					'HTML-icon': 'icons8-html-filetype-50.png',
					'CSS-icon': 'icons8-css-filetype-50.png',
				},
				image: {
					source: 'buildASurveyForm-freeCodeCamp.png',
					description: 'Build a Survey Form screenshot',
					link: 'https://codepen.io/Julianadeale/full/arvOWe',
				},
				text:
					'<p>Objectif: créer une application CodePen.io fonctionnellement similaire à <a href="https://codepen.io/freeCodeCamp/full/VPaoNP" target="blank">celle-ci</a>.</p><p>Répondre aux user stories et faire réussir tous les tests.</p><p>Donnez mon propre style personnel.</p><p>Responsive Web Design.</p>',
			},
			{
				id: 4,
				name: 'Build a Product Landing Page',
				school: {
					name: 'freeCodeCamp',
					link: 'https://www.freecodecamp.org/julianadeale',
				},
				icons: {
					'HTML-icon': 'icons8-html-filetype-50.png',
					'CSS-icon': 'icons8-css-filetype-50.png',
				},
				image: {
					source: 'buildAProductLandingPage-freeCodeCamp.png',
					description: 'Build a Product Landing Page screenshot',
					link: 'https://codepen.io/Julianadeale/full/zQvvJw',
				},
				text:
					'<p>Objectif: créer une application CodePen.io fonctionnellement similaire à <a href="https://codepen.io/freeCodeCamp/full/RKRbwL" target="blank">celle-ci</a>.</p><p>Répondre aux user stories et faire réussir tous les tests.</p><p>Donnez mon propre style personnel.</p><p>Responsive Web Design.</p>',
			},
			{
				id: 5,
				name: 'Build a Technical Documentation Page',
				school: {
					name: 'freeCodeCamp',
					link: 'https://www.freecodecamp.org/julianadeale',
				},
				icons: {
					'HTML-icon': 'icons8-html-filetype-50.png',
					'CSS-icon': 'icons8-css-filetype-50.png',
				},
				image: {
					source: 'buildATechnicalDocumentationPage-freeCodeCamp.png',
					description: 'Build a Technical Documentation Page screenshot',
					link: 'https://codepen.io/Julianadeale/full/byevBr',
				},
				text:
					'<p>Objectif: créer une application CodePen.io fonctionnellement similaire à <a href="https://codepen.io/freeCodeCamp/full/NdrKKL">celle-ci</a>.</p><p>Répondre aux user stories et faire réussir tous les tests.</p><p>Donnez mon propre style personnel.</p><p>Responsive Web Design.</p>',
			},
			{
				//oclock
				id: 6,
				name: 'Recette de Pancakes',
				school: {
					name: "O'Clock",
					link:
						'https://oclock.io/?gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x9wva7tHz8pmFDmBLnQmuzVnYecZtGBpjDTC85ENy0o0gh-KQOVmL8aAtF6EALw_wcB',
				},
				icons: {
					'HTML-icon': 'icons8-html-filetype-50.png',
					'CSS-icon': 'icons8-css-filetype-50.png',
				},
				image: {
					source: 'recettePancaques-oClock.png',
					description: 'Build a Technical Documentation Page screenshot',
					link: 'https://challenge-recette-pancakes-oclock.vercel.app/',
				},
				text:
					"<p>Objectif: Utilisation des valeurs acquises dans la journée, en classe.</p><ul><li>HTML</li><li>CSS</li></ul><p>Projet Solo</p><p>Rendre la page aussi proche que possible de l'image donée.</p>",
			},
			{
				id: 7,
			},
			{
				id: 8,
			},
			{
				id: 9,
			},
			{
				id: 10,
			},
			{
				id: 11,
			},
			{
				id: 12,
			},
			{
				id: 13,
			},
			{
				id: 14,
			},
			{
				// Dyma
				id: 15,
				name: 'Le jeu di Simon',
				school: {
					name: 'Dyma',
					link: 'https://dyma.fr/developer/5f81b6b44b3326259b4e48dc',
				},
				icons: {
					'HTML-icon': 'icons8-html-filetype-50.png',
					'CSS-icon': 'icons8-css-filetype-50.png',
					'Vue.JS-icon': 'icons8-vue-js-48.png',
				},
				image: {
					source: 'leJeuDuSimon-Dyma.png',
					description: 'Build a Technical Documentation Page screenshot',
					link: 'https://simon-game-two.vercel.app/',
				},
				text:
					'<p>Objectif: Réaliser le "Jeu du Simon" avec Vue.Js, en se servant de ce que j\'ai appris.</p>',
			},
			{
				id: 16,
				name: 'Faire une simple boutique',
				school: {
					name: 'Dyma',
					link: 'https://dyma.fr/developer/5f81b6b44b3326259b4e48dc',
				},
				icons: {
					'HTML-icon': 'icons8-html-filetype-50.png',
					'CSS-icon': 'icons8-css-filetype-50.png',
					'Vue.JS-icon': 'icons8-vue-js-48.png',
				},
				image: {
					source: 'buildASimpleStore-Dyma.png',
					description: 'Build a Technical Documentation Page screenshot',
					link: 'https://simon-game-two.vercel.app/',
				},
				text:
					"<p>Objectif: Réaliser une simple boutique avec Vue.Js, en se servant de ce que j'ai appris.</p><p>Utilisation de FireBase</p>",
			},
			{
				// FrontEnd Mentor
				id: 17,
				name: 'Profile Card Component',
				school: {
					name: 'FrontEnd Mentor',
					link: 'https://www.frontendmentor.io/profile/JulianaOliveiraMelo',
				},
				icons: {
					'HTML-icon': 'icons8-html-filetype-50.png',
					'CSS-icon': 'icons8-css-filetype-50.png',
				},
				image: {
					source: 'profileCard-FrontEndMentor.png',
					description: 'Profile Card Component',
					link: 'https://profile-card-component-jet.vercel.app/',
				},
				text:
					'<p>Objectif: Construire le composant de la carte de profil et le rendre aussi proche que possible de la conception sans utiliser JavaScript</p>',
			},
			{
				id: 18,
				name: 'FAQ accordion Card',
				school: {
					name: 'FrontEnd Mentor',
					link: 'https://www.frontendmentor.io/profile/JulianaOliveiraMelo',
				},
				icons: {
					'HTML-icon': 'icons8-html-filetype-50.png',
					'CSS-icon': 'icons8-css-filetype-50.png',
				},
				image: {
					source: 'FAQAccordionCard-FrontEndMentor.png',
					description: 'FAQ Card Component',
					link: 'https://faq-accordion-card-main-rho.vercel.app/',
				},
				text:
					'<p>Objectif: Construire le composant de la "FAQ carte accordéon" et le rendre aussi proche que possible de la conception sans utiliser JavaScript</p>',
			},
		],
	},
});

new Vue({
	router,
	vuetify,
	render: h => h(App),
}).$mount('#app');
