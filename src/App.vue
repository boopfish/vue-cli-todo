<template>
  <div id="app">

    <div class="menu">
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <router-link to="/role">角色管理</router-link>
      <router-link to="/user">用户管理</router-link>
    </div>
    <div class="content">
      <!--开启路由缓存-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    }
  }
}
</script>

<style>

.menu {
  background-color: pink;
  width: 100px;
  height: 300px;
  float: left;
}

a {
  display: inline-block;
  padding: 60px 10px 10px;
}

.content {
  background-color: cornflowerblue;
  width: 400px;
  height: 300px;
  float: left;
}

</style>
