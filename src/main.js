import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './sass/main.scss';
import vuetify from './plugins/vuetify';
import Axios from 'axios';
import store from './store';
import firebaseApp from './firebase';
var VueCookie = require('vue-cookie');

firebaseApp.analytics();
Vue.use(VueCookie);
Vue.mixin({
	computed: {
		fireFox: function() {
			return this.$store.state.fireFox;
		},
	},
});
Axios.defaults.baseURL = process.env.VUE_APP_FIRE_BASE_ROUTE;
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

export const bus = new Vue({});

new Vue({
	router,
	vuetify,
	store,
	render: h => h(App),
}).$mount('#app');
