import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/sass/main.scss';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
export const bus = new Vue({
	vuetify,

	data: {
		work: [
			{
				id: 0,
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
				id: 1,
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
				id: 2,
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
				id: 3,
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
				id: 4,
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
