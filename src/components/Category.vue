<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <slot :foods="foods"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      foods: ['红烧牛肉', '蒜泥白肉', '糖醋里脊', '小炒肉']
    }
  }
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

li {
  text-align: left;
}

</style>