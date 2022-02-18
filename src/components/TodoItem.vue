<template>
  <div>
    <li ref="item" :class="{'is-checked':todoItem.done}">
      <input type="checkbox" :checked="todoItem.done" @change="closeItem(todoItem.id)">
      <label v-show="!todoItem.isEdit" @click="editItem(todoItem)">{{ todoItem.text }}</label>
      <input type="text"
             v-show="todoItem.isEdit"
             :value="todoItem.text"
             @blur.stop="handleBlur(todoItem,$event)"
             ref="inputTitle">
      <span class="close" @click.stop="deleteItem(todoItem.id)">x</span>
    </li>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ['todoItem'],
  methods: {
    closeItem(id) {
      this.$bus.$emit('closeTodoItem', id);
      if (this.todoItem.done) {
        this.$refs.item.className = "";
      } else {
        this.$refs.item.className = "is-checked";
      }
    },
    deleteItem(id) {
      this.$bus.$emit('deleteTodoItem', id);
    },
    //修改待办事项
    editItem(todoItem) {
      if (Object.prototype.hasOwnProperty.call(todoItem, "isEdit")) {
        console.log("已有isEdit属性");
        todoItem.isEdit = true;
      } else {
        //为todoItem对象添加新属性
        this.$set(todoItem, "isEdit", true);
      }
      // 该回调函数会在dom节点更新完毕之后在执行
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      })
      console.log(todoItem)
    },
    //输入框失去焦点时保存修改数据
    handleBlur(todoItem, event) {
      if(!event.target.value)return alert("Input must not be empty")
      console.log("触发失去焦点事件");
      this.todoItem.isEdit = false;
      this.$bus.$emit('editTodoItem', todoItem.id, event.target.value);
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
  float: right;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.edit {
  position: absolute;
  float: right;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

</style>