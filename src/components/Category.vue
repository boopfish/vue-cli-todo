<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: [ 'listData','title']
}
</script>

<style scoped>
.container {
  background-color: pink;
  height: 300px;
  width: 200px;
  float: left;
  margin-left: 50px;
  text-align: center;
}
li{
  text-align: left;
}

</style>