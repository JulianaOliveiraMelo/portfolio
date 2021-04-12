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
					name: 'language',
					content: 'French',
				},
				{
					name: 'description',
					content:
						"Accueil - Portfolio Juliana Oliveira Melo développeuse d'applications iOS en recherche d'alternance de 24 mois 4 jours entreprise, 1 jour école.",
					key: 'description',
				},
				{
					keywords:
						'développeuse,application,iOS,web,développeur,swift,apple,javascript,vue.js,vuex,vuerouter',
				},
				{
					name: 'title',
					content: 'Portfolio Juliana Oliveira Melo',
					key: 'title',
				},
				// add images to thubnail when sharing link from site
				{
					name: 'image',
					content: `https://portfoliojulianamelo.web.app/JulianaMeloLogo.png`,
					key: 'image',
				},
				{
					name: 'type',
					content: 'website',
					key: 'website',
				},
				// twitter meta tags
				{
					name: 'twitter:card',
					content: `summary_large_image`,
					key: 'siteimage',
				},
				{
					property: 'twitter:image',
					content: `https://portfoliojulianamelo.web.app/JulianaMeloLogo.png`,
					key: 'twitterimage',
				},
				{
					property: 'twitter:domain',
					content: 'portfoliojulianamelo.web.app',
				},
				{
					property: 'twitter:url',
					content: 'https://portfoliojulianamelo.web.app/',
				},
				{
					name: 'twitter:title',
					content: 'Juliana Oliveira Melo - Portfolio',
				},
				{
					name: 'twitter:description',
					content:
						"Portfolio Juliana Oliveira Melo développeuse d'applications iOS en recherche d'alternance de 24 mois 4 jours entreprise, 1 jour école.",
				},
				// facebook meta tags
				{
					property: 'og:image',
					content: `https://portfoliojulianamelo.web.app/JulianaMelogo.png`,
					key: 'facebookimage',
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
		meta: {
			title: 'Juliana Oliveira Melo - Introduction',
			metaTags: [
				{
					name: 'robots',
					content: 'index,follow',
				},
			],
		},
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
			title: 'Juliana Oliveira Melo - Contact',
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
		meta: {
			title: 'Juliana Oliveira Melo - Formations',
			metaTags: [
				{
					name: 'robots',
					content: 'index,follow',
				},
			],
		},
	},
	{
		path: '/experience',
		name: 'Experience',
		// route level code-splitting
		// this generates a separate chunk (experience.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "experience" */ '../views/Experience.vue'),
		meta: {
			title: 'Juliana Oliveira Melo - Expériences',
			metaTags: [
				{
					name: 'robots',
					content: 'index,follow',
				},
			],
		},
	},
	{
		path: '/competences',
		name: 'Competences',
		// route level code-splitting
		// this generates a separate chunk (competences.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "competences" */ '../views/Competences.vue'),
		meta: {
			title: 'Juliana Oliveira Melo - Competences',
			metaTags: [
				{
					name: 'robots',
					content: 'index,follow',
				},
			],
		},
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
		meta: {
			title: 'Juliana Oliveira Melo - Réalisations',
			metaTags: [
				{
					name: 'robots',
					content: 'index,follow',
				},
			],
		},
	},
	{
		path: '/legal',
		name: 'MentionsLegales',
		// route level code-splitting
		// this generates a separate chunk (legales.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "legales" */ '../views/MentionsLegales.vue'),
		meta: {
			title: 'Juliana Oliveira Melo - Mentions Légales',
			metaTags: [
				{
					name: 'robots',
					content: 'noindex,nofollow',
				},
			],
		},
	},
	{
		path: '/credits',
		name: 'Crédits',
		// route level code-splitting
		// this generates a separate chunk (credits.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "credits" */ '../views/Credits.vue'),
		meta: {
			title: 'Juliana Oliveira Melo - Crédits',
			metaTags: [
				{
					name: 'robots',
					content: 'noindex,nofollow',
				},
			],
		},
	},
	{
		path: '*',
		name: '404',
		// route level code-splitting
		// this generates a separate chunk (404.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
		meta: {
			title: 'Juliana Oliveira Melo - Page Inexistante',
			metaTags: [
				{
					name: 'robots',
					content: 'noindex,nofollow',
				},
			],
		},
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
