import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/sass/main.scss';

Vue.config.productionTip = false;
export const bus = new Vue({
	data: {
		work: [
			{
				id: 1,
				name: 'Mon titre',
				schoolName: "O'Clock",
				icons: [
					'icons8-sass-48.png',
					'icons8-vue-js-48.png',
					'icons8-sass-48.png',
					'icons8-vue-js-48.png',
				],
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
				schoolName: 'Dyma',
				icons: ['icons8-sass-144.png'],
				image: {
					source: 'pexels-marta-branco-1194713.png',
					description: 'le text alt va ici',
				},
				text: 'un travaille realisée tout seul',
			},
			{
				id: 3,
				name: 'Mon titre',
				schoolName: "O'Clock",
				icons: ['icons8-sass-48.png', 'icons8-vue-js-48.png'],
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
				schoolName: 'Dyma',
				icons: ['icons8-sass-144.png'],
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
	render: h => h(App),
}).$mount('#app');
