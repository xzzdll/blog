import Vue from 'vue';
import Vuex from 'vuex';
import currentTags from './modules/currentTags';

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  modules: {
    currentTags
  }
});

export default store;
