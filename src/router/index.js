import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/vite-demo/',
  },
  {
    path: '/vite-demo/',
    name: 'index',
    meta: {
      title: 'vite-app-home',
    },
    component: () => import('../views/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
