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
				linkText: 'Voir les projets réalisées au sein de freeCodeCamp',
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
				link: 'https://fr.khanacademy.org/',
				linkText: "Voir les projets réalisées au sein de O'Clock - gitHub",
				linkString:
					'https://github.com/JulianaOliveiraMelo/parcours-formation-o-clock',
				diplomes: [
					{
						name: "Attestation O'Clock",
						link: 'o-Clock-attestationDeSuiviDeFormation.pdf',
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
				link: 'https://fr.khanacademy.org/',
				linkText: 'Voir les projets réalisées au sein de khan Academy',
				linkString:
					'https://fr.khanacademy.org/profile/kaid_481308314146479591875582/projects',
			},
			{
				id: 5,
				name: 'Openclassrooms',
				src: 'openClassRoomsLogo.png',
				description: ['Découverte des bases de HTML, CSS, JavaScript'],
				link: 'https://fr.khanacademy.org/',
				linkText: 'Voir les projets réalisées au sein de khan Academy',
				linkString:
					'https://fr.khanacademy.org/profile/kaid_481308314146479591875582/projects',
			},
		],
		work: [
			{
				id: 1,
				name: 'Divers projets chez Kahan Academy',
				school: {
					name: 'Kahan Academy',
					link:
						'https://fr.khanacademy.org/profile/kaid_481308314146479591875582/projects',
				},
				icons: {
					1: 'icons8-html-filetype-50.png',
					2: 'icons8-css-filetype-50.png',
					3: 'icons8-javascript-50.png',
				},
				image: {
					source: 'globalProjectsKhanAcademy.png',
					description: 'global Projects from Kahan Academy screenshot',
					link:
						'https://fr.khanacademy.org/profile/kaid_481308314146479591875582/projects',
				},
				text: 'Objectif: Apprendre les bases du HTML, CSS et JavaScript.',
			},
			{
				id: 2,
				name: 'Build a Tribute Page',
				school: {
					name: 'freeCodeCamp',
					link: 'https://www.freecodecamp.org/julianadeale',
				},
				icons: {
					1: 'icons8-html-filetype-50.png',
					2: 'icons8-css-filetype-50.png',
				},
				image: {
					source: 'buildATributePage-freeCodeCamp.png',
					description: 'Build a Tribute Page screenshot',
					link: 'https://codepen.io/Julianadeale/full/XwrQXG',
				},
				text:
					'Objectif: créer une application CodePen.io fonctionnellement similaire à celle-ci: <a href="https://codepen.io/freeCodeCamp/full/zNqgVx" target="blank">https://codepen.io/freeCodeCamp/full/zNqgVx.</a> Répondre aux user stories et faire réussir tous les tests. Donnez mon propre style personnel. Responsive Web Design',
			},
			{
				id: 3,
				name: 'Build a Survey Form',
				school: {
					name: 'freeCodeCamp',
					link: 'https://www.freecodecamp.org/julianadeale',
				},
				icons: {
					1: 'icons8-html-filetype-50.png',
					2: 'icons8-css-filetype-50.png',
				},
				image: {
					source: 'buildASurveyForm-freeCodeCamp.png',
					description: 'Build a Survey Form screenshot',
					link: 'https://codepen.io/Julianadeale/full/arvOWe',
				},
				text:
					'Objectif: créer une application CodePen.io fonctionnellement similaire à celle-ci: <a href="https://codepen.io/freeCodeCamp/full/VPaoNP" target="blank">https://codepen.io/freeCodeCamp/full/VPaoNP</a>. Répondre aux user stories et faire réussir tous les tests. Donnez mon propre style personnel. Responsive Web Design',
			},
			{
				id: 4,
				name: 'Build a Product Landing Page',
				school: {
					name: 'freeCodeCamp',
					link: 'https://www.freecodecamp.org/julianadeale',
				},
				icons: {
					1: 'icons8-html-filetype-50.png',
					2: 'icons8-css-filetype-50.png',
				},
				image: {
					source: 'buildAProductLandingPage-freeCodeCamp.png',
					description: 'Build a Product Landing Page screenshot',
					link: 'https://codepen.io/Julianadeale/full/zQvvJw',
				},
				text:
					'Objectif: créer une application CodePen.io fonctionnellement similaire à celle-ci: <a href="https://codepen.io/freeCodeCamp/full/RKRbwL" target="blank">https://codepen.io/freeCodeCamp/full/RKRbwL</a>. Répondre aux user stories et faire réussir tous les tests. Donnez mon propre style personnel. Responsive Web Design',
			},
			{
				id: 5,
				name: 'Build a Technical Documentation Page',
				school: {
					name: 'freeCodeCamp',
					link: 'https://www.freecodecamp.org/julianadeale',
				},
				icons: {
					1: 'icons8-html-filetype-50.png',
					2: 'icons8-css-filetype-50.png',
				},
				image: {
					source: 'buildATechnicalDocumentationPage-freeCodeCamp.png',
					description: 'Build a Technical Documentation Page screenshot',
					link: 'https://codepen.io/Julianadeale/full/byevBr',
				},
				text:
					'Objectif: créer une application CodePen.io fonctionnellement similaire à celle-ci: <a href="https://codepen.io/freeCodeCamp/full/NdrKKL">https://codepen.io/freeCodeCamp/full/NdrKKL</a>. Répondre aux user stories et faire réussir tous les tests. Donnez mon propre style personnel. Responsive Web Design',
			},
		],
	},
});

new Vue({
	router,
	vuetify,
	render: h => h(App),
}).$mount('#app');
