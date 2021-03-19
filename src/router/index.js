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
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
