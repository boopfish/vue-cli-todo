<template>
  <div id="app">
    <TodoHeader :addTodoItem="addTodoItem"/>
    <TodoList
        :todoList="todoList"
        :deleteTodoItem="deleteTodoItem"
        :closeTodoItem="closeTodoItem"
    />
    <TodoFooter :todoList="todoList"
                :deleteFinishedItem="deleteFinishedItem"
                :clickSelectAll="clickSelectAll"

    />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  name: 'App',
  components: {
    TodoHeader, TodoList, TodoFooter
  },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    }
  },
  methods: {
    //增加待办事项
    addTodoItem(obj) {
      this.todoList.unshift(obj);
    },
    //关闭待办事项
    closeTodoItem(id) {
      this.todoList.forEach(todoItem => {
        if (todoItem.id === id) {
          todoItem.done = !todoItem.done;
        }
      })
    },
    //删除待办事项
    deleteTodoItem(id) {
      this.todoList = this.todoList.filter(todoItem => todoItem.id !== id);
    },
    //删除已完成的待办事项
    deleteFinishedItem() {
      this.todoList = this.todoList.filter((todoItem) => !todoItem.done);
    },
    clickSelectAll(value) {
      this.todoList.forEach(todoItem => {
        todoItem.done = value;
      })
    }
  },
  //开启深度监听 存入到本地缓存中
  watch: {
    todoList: {
      deep: true,
      handler(value) {
        localStorage.setItem("todoList", JSON.stringify(value));
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
