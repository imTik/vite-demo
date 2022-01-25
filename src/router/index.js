import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login/',
  },
  {
    path: '/login',
    name: 'loginIndex',
    meta: {
      title: '登录页',
    },
    component: () => import('../views/Login/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(), // createWebHashHistory()
  routes,
});

export default router;
