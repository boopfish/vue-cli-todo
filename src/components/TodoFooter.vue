<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="selectAll">
    </label>
    <span>已完成{{ finishedItemCount }} / 全部{{ allItems }}</span>
    <button @click="deleteFinishedItem()">删除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "TodoFooter",
  data() {
    return {
      todoList: this.$store.state.todoList
    }
  },
  computed: {
    ...mapGetters(['finishedItemCount', 'allItems']),
    selectAll: {
      get() {
        return this.finishedItemCount === this.allItems && this.allItems > 0;
      },
      set() {
        this.$store.dispatch('clickSelectAll')
      }
    }
  },
  methods: {
    ...mapActions(['deleteFinishedItem'])
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