import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Sortable from '../node_modules/vue-sortable';

Vue.use(Sortable);

Vue.config.devtools = true;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components:{
    App
  }
});
