import Vue from 'vue';
import VueRouter from 'vue-router';
import Accueil from '../views/Accueil.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Accueil',
		component: Accueil,
	},
	{
		path: '/intro',
		name: 'Intro',
		// route level code-splitting
		// this generates a separate chunk (intro.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "intro" */ '../views/Intro.vue'),
	},
	{
		path: '/contact',
		name: 'Contact',
		// route level code-splitting
		// this generates a separate chunk (contact.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
	},
	{
		path: '/formations',
		name: 'Formations',
		// route level code-splitting
		// this generates a separate chunk (formations.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "formations" */ '../views/Formations.vue'),
	},
	{
		path: '/experience',
		name: 'Experience',
		// route level code-splitting
		// this generates a separate chunk (experience.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "experience" */ '../views/Experience.vue'),
	},
	{
		path: '/competences',
		name: 'Competences',
		// route level code-splitting
		// this generates a separate chunk (competences.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "competences" */ '../views/Competences.vue'),
	},
	{
		path: '/realisations',
		name: 'Realisations',
		// route level code-splitting
		// this generates a separate chunk (realisations.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "realisations" */ '../views/Realisations.vue'
			),
	},
	{
		path: '/legal',
		name: 'MentionsLegales',
		// route level code-splitting
		// this generates a separate chunk (legales.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "legales" */ '../views/MentionsLegales.vue'),
	},
	{
		path: '/credits',
		name: 'Crédits',
		// route level code-splitting
		// this generates a separate chunk (credits.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "credits" */ '../views/Credits.vue'),
	},
	{
		path: '*',
		name: '404',
		// route level code-splitting
		// this generates a separate chunk (404.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes: routes,
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});

export default router;
