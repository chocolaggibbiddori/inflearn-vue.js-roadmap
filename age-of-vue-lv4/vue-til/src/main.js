import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import { formatDate } from '@/utils/filters';

Vue.filter('formatDate', formatDate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
