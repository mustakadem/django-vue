import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import Admin from '../views/Admin-Panel';
import Login from '../views/Login';
import NewHermandad from '../components/Form_Hermandad';

Vue.use(Router);

const router = new Router({
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
      path: '/admin/panel',
      name: 'admin',
      component: Admin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('authToken') !== null || to.path === '/login' || to.path === '/' || to.path === '/nueva/hermandad') {
    next()
  } else {
    next('/login')
  }
});

export default router
