import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/layout/layout';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: layout,
      children: [
        {
          path: 'index',
          name: 'index',
          component: resolve =>
            require(['@/views/list/index.vue'], resolve)
        },
        {
          path: 'artical',
          name: 'artical',
          component: resolve =>
            require(['@/views/list/artical.vue'], resolve)
        },
        {
          path: 'say',
          name: 'say',
          component: resolve =>
            require(['@/views/list/say.vue'], resolve)
        },
        {
          path: 'time-file',
          name: 'time-file',
          component: resolve =>
            require(['@/views/list/time-file.vue'], resolve)
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 };
  },
  mode: 'history'
});

export default router;
