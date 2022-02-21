import Vuex from 'vuex';
import Vue from 'vue';
//使用Vuex
Vue.use(Vuex);

const actions = {
    increment(context, value) {
        console.log("Action收到请求", context, value);
        context.commit('increment', value);
    },
    decrement(context, value) {
        console.log("Action收到请求", context, value);
        context.commit('decrement', value);
    }
};
const mutations = {
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
};
const state = {
    //定义todolist
    sum: 0
};

//向外暴露
export default new Vuex.Store({
    actions,
    mutations,
    state
});