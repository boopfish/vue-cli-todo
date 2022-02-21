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
//当state中的属性需要经过加工之后在使用时或者逻辑可以复用  使用getters进行复杂运算
const getters = {
    result(state) {
        return state.sum * 10;
    }
}
const state = {
    //定义todolist
    sum: 0
};

//向外暴露
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});