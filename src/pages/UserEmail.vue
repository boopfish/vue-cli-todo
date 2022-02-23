<template>
  <div>
    <span>用户邮件发送组件</span>
    <ul>
      <li v-for="(msg,index) in msgList" :key="index">
        <router-link :to="`/user/email/detail?receiver=${msg.receiver}&message=${msg.message}`">{{ msg.receiver }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "UserEmail",
  data() {
    return {
      msgList: [
        {receiver: '001', message: 'hello world'},
        {receiver: '002', message: 'world hello'}]
    }
  }
}
</script>

<style scoped>

li {
  display: inline;
  height: 20px
}

</style>