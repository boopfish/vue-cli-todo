import Vuex from 'vuex';
import Vue from 'vue';
import counterAbout from './counter';
import personAbout from './person';
//使用Vuex
Vue.use(Vuex);

//向外暴露
export default new Vuex.Store({
  modules: {
    counterAbout: counterAbout,
    personAbout: personAbout
  }
});