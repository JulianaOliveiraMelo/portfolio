import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		search: 'voir tout',
		loading: true,
		fireFox: false,
	},
	getters: {},
	mutations: {
		changeSearchName(state, newSearchName) {
			state.search = newSearchName;
		},
		loadingState(state, value) {
			state.loading = value;
		},
		changeContainerStyle(state, value) {
			state.fireFox = value;
		},
	},
	actions: {},
});

export default store;
