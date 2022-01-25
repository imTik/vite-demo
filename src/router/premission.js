import router from './index';

router.beforeEach((to, form, next) => {
  document.title = to.meta.title;
  next();
});
