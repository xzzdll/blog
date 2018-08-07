import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/layout/layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: layout,
      children: [
        {
          path: 'index',
          name: 'index',
          meta: {
            title: '首页',
            routerPath: 'index'
          },
          component: resolve =>
            require(['@/views/list/index.vue'], resolve)
        },
        {
          path: '1',
          name: '1',
          meta: {
            title: '测试页面1',
            routerPath: '1'
          },
          component: resolve =>
            require(['@/views/list/list1.vue'], resolve)
        }
      ]
    }
  ]
});
