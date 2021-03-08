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
				id: 1,
				name: 'Mon titre',
				school: {
					name: "O'Clock",
					link:
						'https://oclock.io/?utm_campaing=nouvelle&gclid=Cj0KCQiAs5eCBhCBARIsAEhk4r5VyLcXsay0CaCkRt_-p47fyTKgG-l7rkkqWgb6uG5Hw557RRE_BqcaAnnUEALw_wcB',
				},
				icons: { 1: 'icons8-sass-48.png', 2: 'icons8-vue-js-48.png' },
				image: {
					source: 'pexels-marta-branco-1194713.png',
					description: 'le text alt va ici',
				},
				text:
					'Cras feugiat turpis eget mauris lacinia, et bibendum urna commodo. Phasellus risus velit, tincidunt ut risus et, efficitur dictum felis. Sed quis felis vel est dignissim tincidunt.',
			},
			{
				id: 2,
				name: 'Mon titre 2',
				school: {
					name: "O'Clock",
					link: 'www.oclock.fr',
				},
				icons: { 1: 'icons8-sass-48.png', 2: 'icons8-vue-js-48.png' },
				image: {
					source: 'pexels-marta-branco-1194713.png',
					description: 'le text alt va ici',
				},
				text: 'un travaille realisée tout seul',
			},
			{
				id: 3,
				name: 'Mon titre',
				school: {
					name: "O'Clock",
					link: 'www.oclock.fr',
				},
				icons: { 1: 'icons8-sass-48.png', 2: 'icons8-vue-js-48.png' },
				image: {
					source: 'pexels-marta-branco-1194713.png',
					description: 'le text alt va ici',
				},
				text:
					'Cras feugiat turpis eget mauris lacinia, et bibendum urna commodo. Phasellus risus velit, tincidunt ut risus et, efficitur dictum felis. Sed quis felis vel est dignissim tincidunt.',
			},
			{
				id: 4,
				name: 'Mon titre 2',
				school: {
					name: "O'Clock",
					link: 'www.oclock.fr',
				},
				icons: { 1: 'icons8-sass-48.png', 2: 'icons8-vue-js-48.png' },
				image: {
					source: 'pexels-marta-branco-1194713.png',
					description: 'le text alt va ici',
				},
				text: 'un travaille realisée tout seul',
			},
			{
				id: 5,
				name: 'Mon titre 2',
				school: {
					name: "O'Clock",
					link: 'www.oclock.fr',
				},
				icons: { 1: 'icons8-sass-48.png', 2: 'icons8-vue-js-48.png' },
				image: {
					source: 'pexels-marta-branco-1194713.png',
					description: 'le text alt va ici',
				},
				text: 'un travaille realisée tout seul',
			},
			{
				id: 6,
				name: 'Mon titre',
				school: {
					name: "O'Clock",
					link: 'www.oclock.fr',
				},
				icons: { 1: 'icons8-sass-48.png', 2: 'icons8-vue-js-48.png' },
				image: {
					source: 'pexels-marta-branco-1194713.png',
					description: 'le text alt va ici',
				},
				text:
					'Cras feugiat turpis eget mauris lacinia, et bibendum urna commodo. Phasellus risus velit, tincidunt ut risus et, efficitur dictum felis. Sed quis felis vel est dignissim tincidunt.',
			},
			{
				id: 7,
				name: 'Mon titre 2',
				school: {
					name: "O'Clock",
					link: 'www.oclock.fr',
				},
				icons: { 1: 'icons8-sass-48.png', 2: 'icons8-vue-js-48.png' },
				image: {
					source: 'pexels-marta-branco-1194713.png',
					description: 'le text alt va ici',
				},
				text: 'un travaille realisée tout seul',
			},
			{
				id: 8,
				name: 'Mon titre',
				school: {
					name: "O'Clock",
					link: 'www.oclock.fr',
				},
				icons: { 1: 'icons8-sass-48.png', 2: 'icons8-vue-js-48.png' },
				image: {
					source: 'pexels-marta-branco-1194713.png',
					description: 'le text alt va ici',
				},
				text:
					'Cras feugiat turpis eget mauris lacinia, et bibendum urna commodo. Phasellus risus velit, tincidunt ut risus et, efficitur dictum felis. Sed quis felis vel est dignissim tincidunt.',
			},
			{
				id: 9,
				name: 'Mon titre 2',
				school: {
					name: "O'Clock",
					link: 'www.oclock.fr',
				},
				icons: { 1: 'icons8-sass-48.png', 2: 'icons8-vue-js-48.png' },
				image: {
					source: 'pexels-marta-branco-1194713.png',
					description: 'le text alt va ici',
				},
				text: 'un travaille realisée tout seul',
			},
			{
				id: 10,
				name: 'Mon titre 2',
				school: {
					name: "O'Clock",
					link: 'www.oclock.fr',
				},
				icons: { 1: 'icons8-sass-48.png', 2: 'icons8-vue-js-48.png' },
				image: {
					source: 'pexels-marta-branco-1194713.png',
					description: 'le text alt va ici',
				},
				text: 'un travaille realisée tout seul',
			},
		],
	},
});

new Vue({
	router,
	vuetify,
	render: h => h(App),
}).$mount('#app');
