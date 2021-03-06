// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import store from './vuex/store';
import ElementUI from 'element-ui';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import './assets/live2d/js/live2d.js';
import './assets/live2d/js/message.js';
import './assets/live2d/css/live2d.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'element-ui/lib/theme-chalk/display.css';
import MetaInfo from 'vue-meta-info';

window.loadlive2d('live2d', '/static/model/tia/model.json');

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre');
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(MetaInfo);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

  mounted () {
    document.dispatchEvent(new Event('render-event'));
  }
});
