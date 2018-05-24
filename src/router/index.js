import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import Admin from '../views/Admin-Panel';
import NewHermandad from '../components/Form_Hermandad';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nueva/hermandad',
      name: 'nuevaHermandad',
      component: NewHermandad
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
});
