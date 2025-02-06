import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/signup',
    component: () => import('@/views/SignupView.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/MainView.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404View.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
