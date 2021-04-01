import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/sass/main.scss';
import vuetify from './plugins/vuetify';
var VueCookie = require('vue-cookie');
import Axios from 'axios';

Vue.use(VueCookie);

Axios.defaults.baseURL = process.env.VUE_APP_FIRE_BASE_ROUTE;
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

export const bus = new Vue({});

new Vue({
	router,
	vuetify,
	render: h => h(App),
}).$mount('#app');
