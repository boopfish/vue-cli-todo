<template>
  <div>
    <ul>
      <TodoItem v-for="todo in todoList"
                :key="todo.id"
                :todoItem="todo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {TodoItem},
  props: ['todoList']
}
</script>

<style scoped>
ul {
  padding: 0px;
  margin: 0px
}

</style>