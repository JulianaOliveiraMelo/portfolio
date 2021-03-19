import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/sass/main.scss';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
export const bus = new Vue({
	vuetify,

	data: {
		credits: [
			{
				id: 0,
				authorsName: 'Hannah Reding',
				authorsLink:
					'https://unsplash.com/@hannahrdg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
				sourceSite:
					'https://unsplash.com/s/photos/eiffel-tour?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
				siteName: 'Unsplash',
			},
		],
		tags: [
			'+ ancien',
			'+ recent',
			'O`Clock',
			'Dyma',
			'Khan Academy',
			'freeCodeCamp',
			'FrontEnd Mentor',
			'HTML',
			'CSS',
			'JavaScript',
			'Sass',
			'Vue.js',
			"J'NOV",
			'Wordpress',
		],
		contact: {
			phone: {
				icon: 'icons8-ringing-phone-50.png',
				text: 'Téléphone',
				link: 'tel:0679286030',
			},
			mail: {
				icon: 'icons8-send-email-50.png',
				text: 'mail',
				link: 'mailto:julianameo@gmail.com',
			},
			twitter: {
				icon: 'icons8-twitter-50.png',
				text: 'Twitter',
				link: 'https://twitter.com/JuaOlaMeo',
			},
			linkedin: {
				icon: 'icons8-linkedin-50.png',
				text: 'Linkedin',
				link: 'https://www.linkedin.com/in/julianaoliveiramelo/',
			},
		},

		skills: {
			tech: [
				{
					skillName: 'Html',
					skillIcon: 'icons8-html-5-50.png',
				},
				{
					skillName: 'Css',
					skillIcon: 'icons8-css3-50.png',
				},
				{
					skillName: 'JavaScript',
					skillIcon: 'icons8-javascript-v2-50.png',
				},
				{
					skillName: 'Vue.js',
					skillIcon: 'icons8-vue-js-48.png',
				},
				{
					skillName: 'Sass',
					skillIcon: 'icons8-sass-48.png',
				},
				{
					skillName: 'Swift',
					skillIcon: 'icons8-swift-50.png',
				},
				{
					skillName: 'iOS',
					skillIcon: 'icons8-ios-logo-50.png',
				},
				{
					skillName: 'Wordpress',
					skillIcon: 'icons8-wordpress-50.png',
				},
				{
					skillName: 'gitHub',
					skillIcon: 'octocat.png',
				},
				{
					skillName: 'npm',
					skillIcon: 'icons8-npm-50.png',
				},
				{
					skillName: 'Node.js',
					skillIcon: 'icons8-nodejs-50.png',
				},
				{
					skillName: 'Gimp',
					skillIcon: 'icons8-gimp-50.png',
				},
			],
			langs: [
				{
					languageName: 'Français',
					niveaux: '90',
					skills: {
						talk: '95',
						write: '85',
					},
				},
				{
					languageName: 'Anglais',
					niveaux: '80',
					skills: {
						talk: '80',
						write: '80',
					},
				},
				{
					languageName: 'Portugais',
					niveaux: '90',
					skills: {
						talk: '100',
						write: '90',
					},
				},
			],
		},
		training: [
			{
				id: 1,
				year: '2001 / 2004',
				name: 'Escola de moda du Porto - EMP',
				src: 'escolaDeModaDuPortoLogo.png',
				description: [
					'Modéliser de vêtements',
					'Analyste de projet et fiches modèles',
					'Responsable de la construction des moules de base et de leurs transformations et graduations',
					"Responsable de l'exécution des plans de coupe et des vêtements",
					'Responsable du suivi de la ligne de couture',
				],
				link: 'https://emp.pt/',
				linkText: '',
				linkString: '',
			},
			{
				id: 2,
				year: '2019',
				name: 'Kahan Academy',
				src: 'kahanAcademyLogo.png',
				description: ['Découverte des bases de HTML, CSS, JavaScript'],
				link: 'https://www.freecodecamp.org/',
				linkText: 'Voir les projets réalisées au sein de Khan Academy',
				linkString:
					'https://fr.khanacademy.org/profile/kaid_481308314146479591875582/projects',
			},
			{
				id: 3,
				year: '2019',
				name: 'freeCodeCamp',
				src: 'freeCodeCampLogo.png',
				description: ['Découverte des bases de HTML, CSS, JavaScript'],
				link: 'https://fr.khanacademy.org/',
				linkText: 'Voir les acquis au sein de freeCodeCamp',
				linkString: 'https://www.freecodecamp.org/julianadeale',
			},
			{
				id: 4,
				year: '2019 / 2020 - trois mois',
				name: "O'clock",
				src: 'o-ClockLogo.png',
				description: [
					'Découverte des bases de HTML, CSS, JavaScript',
					'Apprendre à se servir de Node.js et Express.js',
					'Apprendre la syntaxe SQL',
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
						name: "Attestation de présence O'Clock",
						link: 'oclock.pdf',
					},
				],
			},
			{
				id: 5,
				year: '2020',
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
				id: 6,
				year: '2021 / 2023',
				name: 'Openclassrooms',
				src: 'openClassRoomsLogo.png',
				description: [
					'Apprendre a coder avec JavaScript',
					'Créer des animations CSS modernes',
					'Apprendre les fondamentaux de Swift',
					'Approfondir Swift avec la Programmation Orientée Objet',
				],
				link: 'https://fr.khanacademy.org/',
				objective: [
					{
						text:
							"Devenir développeuse d'applications iOS en contrat de professionnalisation de 24 mois",
						cours:
							'https://openclassrooms.com/fr/paths/69-developpeur-dapplication-ios',
					},
				],
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
				id: 0,
				tag: ['Khan Academy', 'HTML', 'CSS', 'JavaScript'],
				name: 'Divers projets chez Kahan Academy',
				school: {
					name: 'Kahan Academy',
					link:
						'https://fr.khanacademy.org/profile/kaid_481308314146479591875582/projects',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
					JavaScript: 'icons8-javascript-v2-50.png',
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
				id: 1,
				tag: ['freeCodeCamp', 'HTML', 'CSS'],
				name: 'Build a Tribute Page',
				school: {
					name: 'freeCodeCamp',
					link: 'https://www.freecodecamp.org/julianadeale',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
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
				id: 2,
				name: 'Build a Survey Form',
				tag: ['freeCodeCamp', 'HTML', 'CSS'],
				school: {
					name: 'freeCodeCamp',
					link: 'https://www.freecodecamp.org/julianadeale',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
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
				id: 3,
				tag: ['freeCodeCamp', 'HTML', 'CSS'],
				name: 'Build a Product Landing Page',
				school: {
					name: 'freeCodeCamp',
					link: 'https://www.freecodecamp.org/julianadeale',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
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
				id: 4,
				tag: ['freeCodeCamp', 'HTML', 'CSS'],
				name: 'Build a Technical Documentation Page',
				school: {
					name: 'freeCodeCamp',
					link: 'https://www.freecodecamp.org/julianadeale',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
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
				id: 5,
				tag: ['O`Clock', 'HTML', 'CSS'],
				name: 'Recette de Pancakes',
				school: {
					name: "O'Clock",
					link:
						'https://oclock.io/?gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x9wva7tHz8pmFDmBLnQmuzVnYecZtGBpjDTC85ENy0o0gh-KQOVmL8aAtF6EALw_wcB',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
				},
				image: {
					source: 'recettePancakes-oClock.png',
					description: 'Recette de Pancakes',
					link: 'https://challenge-recette-pancakes-oclock.vercel.app/',
				},
				text:
					"<p>Objectif: Utilisation des valeurs acquises dans la journée, en classe.</p><ul><li>HTML</li><li>CSS</li></ul><p>Projet Solo</p><p>Rendre la page aussi proche que possible de l'image donnée.</p>",
			},
			{
				id: 6,
				tag: ['O`Clock', 'HTML', 'CSS'],
				name: 'Hero Corp',
				school: {
					name: "O'Clock",
					link:
						'https://oclock.io/?gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x9wva7tHz8pmFDmBLnQmuzVnYecZtGBpjDTC85ENy0o0gh-KQOVmL8aAtF6EALw_wcB',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
				},
				image: {
					source: 'heroCorp-oClock.png',
					description: 'Hero Corp',
					link: 'https://challenge-box-model.vercel.app/',
				},
				text:
					"<p>Objectif: Utilisation des valeurs acquises dans la journée, en classe.</p><ul><li>HTML</li><li>CSS</li></ul><p>Projet Solo</p><p>Rendre la page aussi proche que possible de l'image donnée.</p>",
			},
			{
				id: 7,
				tag: ['O`Clock', 'HTML', 'CSS'],
				name: 'OFig Figurines et statuettes',
				school: {
					name: "O'Clock",
					link:
						'https://oclock.io/?gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x9wva7tHz8pmFDmBLnQmuzVnYecZtGBpjDTC85ENy0o0gh-KQOVmL8aAtF6EALw_wcB',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
				},
				image: {
					source: 'oFig-oClock.png',
					description: 'OFig Figurines et statuettes',
					link: 'https://challenge-layout.vercel.app/',
				},
				text:
					"<p>Objectif: Utilisation des valeurs acquises dans la journée, en classe.</p><ul><li>HTML</li><li>CSS</li></ul><p>Projet Solo</p><p>Rendre la page aussi proche que possible de l'image donnée.</p>",
			},
			{
				id: 8,
				tag: ['O`Clock', 'HTML', 'CSS'],
				name: "O'Clock Students News",
				school: {
					name: "O'Clock",
					link:
						'https://oclock.io/?gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x9wva7tHz8pmFDmBLnQmuzVnYecZtGBpjDTC85ENy0o0gh-KQOVmL8aAtF6EALw_wcB',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
				},
				image: {
					source: 'oClockStudentsNews-oClock.png',
					description: "O'Clock Students News",
					link: 'https://challenge-forms.vercel.app/html',
				},
				text:
					"<p>Objectif: Utilisation des valeurs acquises dans la journée, en classe.</p><ul><li>HTML</li><li>CSS</li></ul><p>Projet Pair Programming</p><p>Rendre la page aussi proche que possible de l'image donnée.</p>",
			},
			{
				id: 9,
				tag: ['O`Clock', 'HTML', 'CSS'],
				name: "Les 12 Travaux D'Hercule",
				school: {
					name: "O'Clock",
					link:
						'https://oclock.io/?gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x9wva7tHz8pmFDmBLnQmuzVnYecZtGBpjDTC85ENy0o0gh-KQOVmL8aAtF6EALw_wcB',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
				},
				image: {
					source: 'lesDouzeTravauxDHercule-oClock.png',
					description: "Les 12 Travaux D'Hercule",
					link: 'https://challenge-solo-html-css.vercel.app/html',
				},
				text:
					"<p>Objectif: Utilisation des valeurs acquises dans la journée, en classe.</p><ul><li>HTML</li><li>CSS</li></ul><p>Projet Solo</p><p>Rendre la page aussi proche que possible de l'image donnée.</p>",
			},
			{
				id: 10,
				tag: ['O`Clock', 'HTML', 'CSS', 'JavaScript'],
				name: 'Jeu de la Fourchette',
				school: {
					name: "O'Clock",
					link:
						'https://oclock.io/?gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x9wva7tHz8pmFDmBLnQmuzVnYecZtGBpjDTC85ENy0o0gh-KQOVmL8aAtF6EALw_wcB',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
					JavaScript: 'icons8-javascript-v2-50.png',
				},
				image: {
					source: 'jeuDeLaFourchette-oClock.png',
					description: 'Jeu de la Fourchette',
					link: 'https://challenge-fourchette.vercel.app/html',
				},
				text:
					'<p>Objectif: Utilisation des valeurs acquises dans la journée, en classe.</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul><p>Projet Solo</p>',
			},
			{
				id: 11,
				tag: ['O`Clock', 'HTML', 'CSS', 'JavaScript'],
				name: 'Dice Roller',
				school: {
					name: "O'Clock",
					link:
						'https://oclock.io/?gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x9wva7tHz8pmFDmBLnQmuzVnYecZtGBpjDTC85ENy0o0gh-KQOVmL8aAtF6EALw_wcB',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
					JavaScript: 'icons8-javascript-v2-50.png',
				},
				image: {
					source: 'diceRoller-oClock.png',
					description: 'Dice Roller',
					link: 'https://challenge-dice-roller.vercel.app/html',
				},
				text:
					'<p>Objectif: Utilisation des valeurs acquises dans la journée, en classe, pour coder un jeux.</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul><p>Projet Solo</p>',
			},
			{
				id: 12,
				tag: ['O`Clock', 'HTML', 'CSS', 'JavaScript'],
				name: 'Invader',
				school: {
					name: "O'Clock",
					link:
						'https://oclock.io/?gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x9wva7tHz8pmFDmBLnQmuzVnYecZtGBpjDTC85ENy0o0gh-KQOVmL8aAtF6EALw_wcB',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
					JavaScript: 'icons8-javascript-v2-50.png',
				},
				image: {
					source: 'invader-oClock.png',
					description: 'Invader',
					link: 'https://challenge-invader.vercel.app/html/invader.html',
				},
				text:
					'<p>Objectif: Utilisation des valeurs acquises dans la journée, en classe, pour coder un jeux.</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul><p>Projet Solo</p>',
			},
			{
				id: 13,
				tag: ['O`Clock', 'HTML', 'CSS', 'JavaScript'],
				name: 'Zelda',
				school: {
					name: "O'Clock",
					link:
						'https://oclock.io/?gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x9wva7tHz8pmFDmBLnQmuzVnYecZtGBpjDTC85ENy0o0gh-KQOVmL8aAtF6EALw_wcB',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
					JavaScript: 'icons8-javascript-v2-50.png',
				},
				image: {
					source: 'zelda-oClock.png',
					description: 'Zelda',
					link: 'https://challenge-zelda.vercel.app/',
				},
				text:
					'<p>Objectif: Utilisation des valeurs acquises dans la journée, en classe, pour coder un jeux.</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul><p>Projet Solo</p>',
			},
			{
				//JNOV
				id: 14,
				tag: ["J'NOV", 'Wordpress'],
				name: "La Maison de L'Ail",
				school: {
					name: "J'NOV",
					link: 'https://www.jnov.fr/',
				},
				icons: {
					Wordpress: 'icons8-wordpress-50.png',
				},
				image: {
					source: 'laMaisonDeLAil-simple-JNOV.png',
					description: "image du site La Maison de L'Ail",
					link: 'https://www.maison-de-lail.com/',
				},
				text:
					"<p>Site e-commerce.</p><p>Vente de l'ail en vrac et tressé ainsi que des produits régionaux</p>",
			},
			{
				//JNOV
				id: 15,
				tag: ["J'NOV", 'Wordpress'],
				name: "Les Lacs d'Armagnac",
				school: {
					name: "J'NOV",
					link: 'https://www.jnov.fr/',
				},
				icons: {
					Wordpress: 'icons8-wordpress-50.png',
				},
				image: {
					source: 'lesLacsDArmagnac-simple-JNOV.png',
					description: "image du site Les Lacs d'Armagnac",
					link: 'https://www.leslacs-darmagnac.com/',
				},
				text: "<p>Site vitrine d'un camping ⭐⭐⭐⭐</p>",
			},
			{
				//JNOV
				id: 16,
				tag: ["J'NOV", 'Wordpress'],
				name: "Cabinet d'Orthodontie du Dr. Adeline Lardat-Barré",
				school: {
					name: "J'NOV",
					link: 'https://www.jnov.fr/',
				},
				icons: {
					Wordpress: 'icons8-wordpress-50.png',
				},
				image: {
					source: 'cabinetOrthodontie-simple-JNOV.png',
					description:
						"image du site Cabinet d'Orthodontie du Dr. Adeline Lardat-Barré",
					link: 'https://www.orthodontie-gers.fr/',
				},
				text: "<p>Site vitrine d'un cabinet d'orthodontie</p>",
			},
			{
				//JNOV
				id: 17,
				tag: ["J'NOV", 'Wordpress'],
				name: 'Hôtel Restaurant Le Continental ⭐⭐⭐',
				school: {
					name: "J'NOV",
					link: 'https://www.jnov.fr/',
				},
				icons: {
					Wordpress: 'icons8-wordpress-50.png',
				},
				image: {
					source: 'hotelLeContinental-simple-JNOV.png',
					description: 'image du site Hôtel Restaurant Le Continental ⭐⭐⭐',
					link: 'https://www.lecontinental.net/',
				},
				text:
					"<p>Site vitrine d'un d'un Hôtel ⭐⭐⭐</p><p>Réalisée en trois langues :</p> <ul><li>Fraçais</li><li>Espagnol</li><li>Anglais</li></ul>",
			},
			{
				// Dyma
				id: 18,
				tag: ['Dyma', 'HTML', 'CSS', 'Vue.js'],
				name: 'Le jeu du Simon',
				school: {
					name: 'Dyma',
					link: 'https://dyma.fr/developer/5f81b6b44b3326259b4e48dc',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
					'Vue.js': 'icons8-vue-js-48.png',
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
				id: 19,
				tag: ['Dyma', 'HTML', 'CSS', 'Vue.js'],
				name: 'Faire une simple boutique',
				school: {
					name: 'Dyma',
					link: 'https://dyma.fr/developer/5f81b6b44b3326259b4e48dc',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
					'Vue.js': 'icons8-vue-js-48.png',
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
				id: 20,
				tag: ['FrontEnd Mentor', 'HTML', 'CSS', 'Sass'],
				name: 'Profile Card Component',
				school: {
					name: 'FrontEnd Mentor',
					link: 'https://www.frontendmentor.io/profile/JulianaOliveiraMelo',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
					Sass: 'icons8-sass-48.png',
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
				id: 21,
				tag: ['FrontEnd Mentor', 'HTML', 'CSS', 'Sass'],
				name: 'FAQ accordion Card',
				school: {
					name: 'FrontEnd Mentor',
					link: 'https://www.frontendmentor.io/profile/JulianaOliveiraMelo',
				},
				icons: {
					HTML: 'icons8-html-5-50.png',
					CSS: 'icons8-css3-50.png',
					Sass: 'icons8-sass-48.png',
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
		experience: [
			{
				id: 1,
				businessName: "J'NOV",
				businessLink: 'https://www.jnov.fr/',
				businessLogo: 'JNOV.png',
				businessCountry: 'Fleurance - Gers - France',
				contract: 'Stage',
				startDate: '09/03/2020',
				endDate: '26/06/2020',
				objective: [
					"Accompagner l'équipe technique dans la création de sites internet sous WordPress (no-Code)",
				],
				work: [
					{
						name: "La Maison de L'Ail",
						link: 'https://www.maison-de-lail.com/',
						type: 'site e-commerce',
						image: 'laMaisonDeLAil-JNOV.png',
					},
					{
						name: ' Cabinet d’orthodontie du Dr Adeline Lardat-Barré',
						link: 'https://www.orthodontie-gers.fr/',
						type: 'site vitrine',
						image: 'cabinetDOrthodontie-JNOV.png',
					},
					{
						name: 'Les Lacs D’armagnac ⭐⭐⭐⭐',
						link: 'https://www.leslacs-darmagnac.com/',
						image: 'lesLacDArmagnac-JNOV.png',
						type: 'site vitrine',
					},
					{
						name: 'Hôtel le Continental ⭐⭐⭐',
						link: 'https://www.lecontinental.net/',
						image: 'hotelLeContinental.png',
						type: 'site vitrine',
					},
				],
			},
			{
				id: 2,
				businessName: 'Auto-Entrepreneur - Commerçante ambulante',
				businessLink: '',
				businessLogo: 'autoEntrepreneur.png',
				businessCountry: 'Fleurance - Gers - France',
				startDate: 'Avril 2012',
				endDate: 'Février 2017',
				objective: [
					'Achat de divers lots été / hiver',
					'Revente sur marchés et foires de France',
					'Relation Client',
					'Magasin dans un camping ⭐⭐⭐⭐',
				],
			},
			{
				id: 3,
				businessName: 'STANOR',
				businessLink: 'https://www.linkedin.com/company/stanor/videos/',
				businessLogo: 'STANORBlueWhale.png',
				businessCountry: 'Moissac - Tarn-et-Garonne - France',
				contract: 'Saisonnier',
				startDate: '2009',
				endDate: '2011',
				objective: [
					'Gérer une équipe de +/- 10personnes',
					'Contrôle de qualité du fruit et de son emballage',
					'étiqueter le fruit',
					'Travail en équipe',
				],
			},
			{
				id: 4,
				businessName: 'BOYER Sa',
				businessLink: 'https://www.philibon.com/',
				businessLogo: 'BOYERPhilibon.png',
				businessCountry: 'Moissac - Tarn-et-Garonne - France',
				contract: 'Saisonnier',
				startDate: '2009',
				endDate: '2011',
				objective: [
					'Contrôle de qualité du fruit et de son emballage',
					'étiqueter le fruit',
					'Travail en équipe',
				],
			},
			{
				id: 5,
				businessName: 'RDA Confections',
				businessLink: 'http://rda.com.pt/',
				businessLogo: 'RDAConfections.png',
				businessCountry: 'Vila de Prado - Braga - Portugal',
				contract: 'CDD',
				startDate: '2006',
				endDate: '2008',
				objective: [
					'Modéliste',
					'Transformations numérique du modèle réalisé',
					"Organisation et mise en production de l'ordre de fabrication",
					'Achat de matière première ainsi que gérer les stocks',
					'Organisation du temps de travail des femmes dans la confection du modèle',
					'Relation client',
				],
			},
			{
				id: 6,
				businessName: 'Lobos e Filhos',
				businessLink:
					'https://pt-br.facebook.com/LobosConfeccoes/?ref=page_internal',
				businessLogo: 'lobosEFilhos.png',
				businessCountry: 'Real - Braga - Portugal',
				contract: 'CDD',
				startDate: '2004',
				endDate: '2005',
				objective: ['Modeliste', 'Transformations numérique du modèle réalisé'],
			},
			{
				id: 7,
				businessName: 'Modelo Supermercados - Sonae',
				businessLink:
					'https://www.sonae.pt/en/sonae/the-group-and-our-businesses/',
				businessLogo: 'modeloSonae.png',
				businessCountry: 'Real - Braga - Portugal',
				contract: 'CDD',
				startDate: '2003',
				endDate: '2005',
				objective: [
					'Défiler les articles devant un lecteur optique',
					'Percevoir les sommes en espèces, en chèque ou carte de crédit',
					'Rendre la monnaie et ticket de caisse au client',
					'Polyvalente',
				],
			},
		],
	},
});

new Vue({
	router,
	vuetify,
	render: h => h(App),
}).$mount('#app');
