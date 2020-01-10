import Vuex from 'vuex';
import Vue from 'vue';
import users from './modules/Users';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    users
  }
});