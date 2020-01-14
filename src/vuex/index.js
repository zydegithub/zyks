import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/asideBar/user.js';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user
  }
});
