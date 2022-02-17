<template>
  <div>
    <li ref="item" :class="{'is-checked':todoItem.done}">
      <input type="checkbox" :checked="todoItem.done" @change="closeItem(todoItem.id)">
      {{ todoItem.text }}
      <span class="close" @click.stop="deleteItem(todoItem.id)">x</span>
    </li>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ['todoItem', 'deleteTodoItem', 'closeTodoItem'],
  methods: {
    closeItem(id) {
      this.closeTodoItem(id);
      if (this.todoItem.done) {
        this.$refs.item.className = "";
      } else {
        this.$refs.item.className = "is-checked";
      }
    },
    deleteItem(id) {
      this.deleteTodoItem(id);
    }
  }
}
</script>

<style scoped>
li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
}

li:hover {
  background: #ddd;
}


li:nth-child {
  background: #f9f9f9;
}

li.is-checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;

}

.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

</style>