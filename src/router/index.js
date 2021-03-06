import Vue from 'vue';
import Router from 'vue-router';
// import olTile from '@/components/olTile'
// import olStyle from '@/components/olStyle'
// import tree from '@/components/tree'
// import treeText from '@/components/treeText'
// import layer from '@/components/layer'
// import deleteTree from '@/components/deleteTree'
// import nextTick from '@/components/nextTick';
import homePage from '@/components/homePage';
import layers from '@/components/layers';
import Home from '@/components/Home';
import mainMap from '@/components/mainMap';
import login from '@/components/login';
import collectionData from '@/components/collectionData';
import personal from '@/components/personal';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
          path: '/homePage',
          name: 'homePage',
          component: homePage
        },
        {
          path: '/mainMap',
          name: 'mainMap',
          component: mainMap
        },
        {
          path: '/collectionData',
          name: 'collectionData',
          component: collectionData
        },
        {
          path: '/personal',
          name: 'personal',
          component: personal
        },
        {
          path: '/layers',
          name: 'layers',
          component: layers
        }
      ]
    }
  ]
});
