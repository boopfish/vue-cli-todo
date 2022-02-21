<template>
  <div class="inner-header">
    <transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__swing">
      <h2>My To Do List</h2>
    </transition>
    <input type="text" placeholder="Title..." ref="inputItem">
    <button type="button" @click="add">add</button>
  </div>
</template>

<script>
import {nanoid} from 'nanoid';
import 'animate.css';

export default {
  name: "TodoHeader",
  data() {
    return {
      todoItemValue: ''
    }
  },
  methods: {
    add() {
      if (!this.$refs.inputItem.value) return alert("You must input something");
      const obj = {id: nanoid(), text: this.$refs.inputItem.value, done: false};
      this.$store.dispatch("addTodoItem", obj)
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


</style>