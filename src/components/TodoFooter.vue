<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="selectAll">
    </label>
    <span>已完成{{ finishedItemCount }} / 全部{{ allItems }}</span>
    <button @click="deleteFinishedTodo">删除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ['todoList'],
  computed: {
    finishedItemCount() {
      return this.$.todoList.reduce((prev, todoItem) => {
        return prev + (todoItem.done ? 1 : 0);
      }, 0)
    },
    allItems() {
      return this.todoList.length;
    },
    selectAll: {
      get() {
        return this.finishedItemCount === this.allItems && this.allItems > 0;
      },
      set(value) {
        this.$emit("clickSelectAll", value);
      }
    }
  },
  methods: {
    deleteFinishedTodo() {
      this.$emit("deleteFinishedItem");
    }
  }
}
</script>

<style scoped>
label {
  float: left;
  margin-left: 40px;
}

span {
  float: left;
}

button {
  float: right;
}

.todo-footer {
  margin-top: 12px;
  background: #eee;
  font-size: 18px;
}
</style>