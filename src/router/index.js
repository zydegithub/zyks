import Vue from 'vue';
import Router from 'vue-router';
// import olTile from '@/components/olTile'
// import olStyle from '@/components/olStyle'
// import tree from '@/components/tree'
// import treeText from '@/components/treeText'
// import layer from '@/components/layer'
// import deleteTree from '@/components/deleteTree'
// import nextTick from '@/components/nextTick';
// import filp from '@/components/filp';
// import flag from '@/components/flag';
// import echarts from '@/components/echarts';
// import mainMap from '@/components/mainMap';
import axios from '@/components/axios';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'nextTick',
    component: axios
  }]
});
