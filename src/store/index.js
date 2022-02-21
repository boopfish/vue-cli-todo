import Vuex from 'vuex';
import Vue from 'vue';
//使用Vuex
Vue.use(Vuex);

const actions = {
    //添加待办事项
    addTodoItem(context, value) {
        console.log(context, value);
        context.commit('addTodoItem', value);
    },
    editTodoItem(context, value) {
        console.log(context, value);
        context.commit('editTodoItem', value);
    },
    clickSelectAll(context, value) {
        context.commit('clickSelectAll', value);
    },
    //删除已完成的待办事项
    deleteFinishedItem(context, value) {
        context.commit('deleteFinishedItem', value);
    },
};

const mutations = {
    //添加待办事项
    addTodoItem(state, value) {
        console.log(state, value);
        state.todoList.unshift(value);
    },
    editTodoItem(state, value) {
        state.todoList.filter(todo => {
            if (value.id === todo.id) {
                todo.text = value.text;
            }
        })
    },
    clickSelectAll(state) {
        state.todoList.forEach(todo => {
            todo.done = true;
        })
    },
    deleteFinishedItem(state) {
        state.todoList = state.todoList.filter((todoItem) => !todoItem.done);
    },
};

const getters = {
    //已完成待办事项数量
    finishedItemCount() {
        return this.state.todoList.reduce((prev, todoItem) => {
            return prev + (todoItem.done ? 1 : 0);
        }, 0)
    },
    allItems() {
        return this.state.todoList.length;
    }
}

const state = {
    //定义todolist
    todoList: []
};

//向外暴露
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});