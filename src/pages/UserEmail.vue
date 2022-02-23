<template>
  <div>
    <span>用户邮件发送组件</span>
    <ul>
      <li v-for="(msg,index) in msgList" :key="index">
        <!-- 参数写法-->
        <!--<router-link :to="`/user/email/detail?receiver=${msg.receiver}&message=${msg.message}`">{{ msg.receiver }}</router-link>-->
        <!-- 对象写法-->
        <router-link :to="{
          path:'/user/email/detail',
          query:{
            receiver:msg.receiver,
            content:msg.content}}">
          {{ msg.receiver }}
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
        {receiver: '001', content: 'hello world'},
        {receiver: '002', content: 'world hello'}]
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