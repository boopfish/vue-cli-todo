<template>
  <div class="inner-header">
    <transition>
      <h2 v-show="isShow">My To Do List</h2>
    </transition>
    <input type="text" placeholder="Title..." ref="inputItem">
    <button type="button" @click="add">add</button>
  </div>
</template>

<script>
import {nanoid} from 'nanoid';
import pubsub from "pubsub-js";

export default {
  name: "TodoHeader",
  data() {
    return {
      todoItemValue: '',
      isShow: true
    }
  },
  methods: {
    add() {
      if (!this.$refs.inputItem.value) return alert("You must input something");
      this.isShow = !this.isShow;
      const obj = {id: nanoid(), text: this.$refs.inputItem.value, done: false};
      //手动触发事件 给父组件进行传值
      this.$bus.$emit("addTodoItem", obj)

      // 生产者发送消息
      pubsub.publish("addTodoItem", obj);
    }
  }
}
</script>

<style scoped>

.inner-header {
  padding: 30px 40px;
  background-color: #F44336;
}

h2 {
  text-align: center;
}

input {
  border: none;
  border-radius: 0;
  width: 70%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

button {
  padding: 10px;
  width: 25%;
}

.v-enter-active {
  animation: hello 1s;
}

.v-leave-active {
  animation: hello 1s reverse;
}

@keyframes hello {

  from {
    transform: translateX(-100%);
  }

  go {
    transform: translateX(0px);
  }

}

</style>