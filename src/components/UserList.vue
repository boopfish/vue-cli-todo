<template>
  <div>
    <li  v-for="item in items" :key="item.id">
      <span>{{item.login}}</span>
      <img :src="item.avatar_url" :alt="item.html_url">
    </li>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.$bus.$on("getUserList", (data) => {
      //console.log("UserList组件接收到数据", data)
      this.items = data.items;
    })
  }
}
</script>

<style scoped>
 img {
   width: 50px;
   height: 50px;
 }

</style>