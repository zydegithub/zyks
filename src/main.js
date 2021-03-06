// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import iView from 'iview';
import echarts from 'echarts';
import axios from 'axios';
import qs from 'qs'
import html2canvas from 'html2canvas';
import store from './vuex/index';
import 'iview/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css';
import preview from 'vue-photo-preview';
import 'vue-photo-preview/dist/skin.css';
import util from "./utils";

Vue.use(Vuetify);
Vue.use(ElementUI);
Vue.use(iView);
Vue.use(preview);
Vue.use(qs);
Vue.prototype.$util = util;
Vue.prototype.$html2canvas = html2canvas;
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
});
