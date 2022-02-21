import Vuex from 'vuex';
import Vue from 'vue';
//使用Vuex
Vue.use(Vuex);

const actions = {
  //添加待办事项
  addTodoItem: function (context, params) {
    console.log(context, params);
    context.commit('addTodoItem', params);
  }
};

const mutations = {
  //添加待办事项
  addTodoItem: function (state, params) {
    console.log(state, params);
    state.todoList.unshift(params);
  }
};

const state = {
  //定义todolist
  todoList: []
};

//向外暴露
export default new Vuex.Store({
  actions,
  mutations,
  state
});