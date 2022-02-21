<template>
  <div>
    <ul>
      <transition-group
          appear
          name="animate__animated animate__bounce"
          enter-active-class="animate__backInLeft"
          leave-active-class="animate__backOutUp">
        <TodoItem v-for="todo in $store.todoList"
                  :key="todo.id"
                  :todoItem="todo"
        />
      </transition-group>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import 'animate.css'

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

/*进入的起点，离开的终点*/
.v-enter, .v-leave-to {
  transform: translateX(-100%);
}

/*离开的起点，进入的终点*/
.v-from-to, .v-leave {
  transform: translateX(0px);
}

.v-enter-active, .v-leave-active {
  transition: 1s linear;
}


</style>