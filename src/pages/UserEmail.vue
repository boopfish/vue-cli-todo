<template>
  <div>
    <span>用户邮件发送组件</span>
    <ul>
      <li v-for="(msg,index) in msgList" :key="index">
        <!--        :to="`/user/email/detail/${msg.receiver}/${msg.message}`"-->
        <button type="button" @click="sendEmail(msg)">{{ msg.receiver }}</button>
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
  },
  methods: {
    sendEmail(msg) {
      this.$router.push({
        name: 'EmailDetail',
        params: {
          receiver: msg.receiver,
          content: msg.content
        }
      })
    }
  },
  //组件内路由
  beforeRouteEnter(to, from, next) {
    console.log("进入到UserEmail组件了")
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("离开UserEmail组件了")
    next();
  }
}
</script>

<style scoped>

li {
  display: inline;
  height: 20px
}

</style>