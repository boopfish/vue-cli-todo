export default {
  namespaced: true,
  actions: {
    increment(context, value) {
      console.log("Action收到请求", context, value);
      context.commit('increment', value);
    },
    decrement(context, value) {
      console.log("Action收到请求", context, value);
      context.commit('decrement', value);
    }
  },
  mutations: {
    //添加待办事项
    increment(state, value) {
      console.log('mutations收到请求');
      state.sum += value;
      console.log(state.sum)
    },
    decrement(state, value) {
      console.log('mutations收到请求');
      state.sum -= value;
      console.log(state.sum)
    }
  },
  state: {
    //定义todolist
    sum: 0
  }
};