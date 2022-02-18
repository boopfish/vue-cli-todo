<template>
  <div id="app">
    <TodoHeader ref="todoHeader"/>
    <TodoList
        :todoList="todoList"
    />
    <TodoFooter :todoList="todoList" ref="todoFooter"/>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import pubsub from "pubsub-js";

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
      console.log("增加待办事项:", obj);
      this.todoList.unshift(obj);
    },
    //关闭待办事项
    closeTodoItem(id) {
      console.log("关闭待办事项:", id)
      this.todoList.forEach(todoItem => {
        if (todoItem.id === id) {
          todoItem.done = !todoItem.done;
        }
      })
    },
    //删除待办事项
    deleteTodoItem(id) {
      console.log("删除待办事项:", id)
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
    },
    editTodoItem(id, value) {
      this.todoList.filter((todoItem) => {
        if (todoItem.id === id) {
          todoItem.text = value;
        }
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
  },
  mounted() {

    //给子组件TodoFooter绑定自定义事件(删除已完成待办事项)
    this.$refs.todoFooter.$on("deleteFinishedItem", this.deleteFinishedItem);
    //给子组件TodoFooter绑定自定义事件(全选/取消全选)
    this.$refs.todoFooter.$on("clickSelectAll", this.clickSelectAll);
    //给子组件TodoHeader绑定自定义事件(添加item)
    this.$bus.$on("addTodoItem", this.addTodoItem);
    this.$bus.$on('closeTodoItem', this.closeTodoItem);
    this.$bus.$on('deleteTodoItem', this.deleteTodoItem);
    //绑定编辑事件
    this.$bus.$on('editTodoItem', this.editTodoItem);

    /**
     * 订阅消息
     */
    pubsub.subscribe("addTodoItem", (messageType, message) => {
      console.log("订阅者APP组件收到了消息", messageType, message)
    })

  },
  //解绑所有事件
  beforeDestroy() {
    this.$bus.$off();

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
