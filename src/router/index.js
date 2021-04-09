import Vue from 'vue';
import VueRouter from 'vue-router';
import Accueil from '../views/Accueil.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Accueil',
		component: Accueil,
		meta: {
			title: 'Juliana Oliveira Melo',
			metaTags: [
				{
					name: 'robots',
					content: 'index,follow',
				},
				{
					property: 'og:title',
					content:
						"Page d'accueil - Portfolio - Juliana Oliveira Melo développeuse d'applications iOS en recherche d'alternance de 24 mois 4 jours entreprise, 1 jour école.",
					key: 'ogtitle',
				},
				{
					property: 'og:description',
					content:
						"Page d'accueil - Portfolio - Juliana Oliveira Melo développeuse d'applications iOS en recherche d'alternance de 24 mois 4 jours entreprise, 1 jour école.",
					hid: 'og:description',
					key: 'ogdescription',
				},
				// add images to thubnail when sharing link from site
				{
					property: 'og:image',
					content: `../../public/logos/JulianaMeloLogo.png`,
					hid: 'og:image',
					key: 'ogimage',
				},
				{
					property: 'og:type',
					content: 'website',
					hid: 'og:website',
					key: 'ogwebsite',
				},
			],
		},
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
		meta: {
			title: 'Juliana Oliveira Melo',
			metaTags: [
				{
					name: 'robots',
					content: 'noindex,nofollow',
				},
			],
		},
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
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
	// `/nested`'s will be chosen.
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find(r => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find(r => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find(r => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(
		document.querySelectorAll('[data-vue-router-controlled]')
	).map(el => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags
		.map(tagDef => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach(key => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create so we don't interfere with other ones.
			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		// Add the meta tags to the document head.
		.forEach(tag => document.head.appendChild(tag));

	next();
});

export default router;
