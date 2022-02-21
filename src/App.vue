<template>
  <div id="app">
    <search/>
    <UserList/>
  </div>
</template>

<script>
import Search from "./components/Search"
import UserList from "./components/UserList"

export default {
  name: 'App',
  components: {Search, UserList},
  data() {
    return {}
  }
}
</script>

<style>
</style>
