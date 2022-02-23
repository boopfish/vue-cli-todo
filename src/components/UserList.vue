<template>
  <div>
    <span>用户列表组件</span>
    <div>
      <router-link to="/user/detail">用户详情</router-link>
      <router-link to="/user/email">发送邮件</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "UserList",
  activated() {
    console.log("用户列表组件被激活了")
  },
  deactivated() {
    console.log("用户列表组件失效了")
  }
}
</script>

<style scoped>

</style>