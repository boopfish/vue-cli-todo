<template>
  <div id="app">
    <div class="menu">
      <router-link to="/role" >角色管理</router-link>
      <router-link to="/user" >用户管理</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
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
