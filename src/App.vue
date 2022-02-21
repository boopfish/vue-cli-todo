<template>
  <div id="app">
    <Category :listData="foods" title="美食">
      <img src="logo.png" alt="">
    </Category>
    <Category :listData="films" title="电影">
      <li v-for="data in films" :key="data">{{ data }}</li>
    </Category>
    <Category :listData="books" title="图书">
      <li v-for="data in books" :key="data">{{ data }}</li>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category"

export default {
  name: 'App',
  components: {Category},
  data() {
    return {
      foods: ['红烧牛肉', '蒜泥白肉', '糖醋里脊', '小炒肉'],
      films: ['奇迹', '长津湖', '这个杀手不太冷静', '忠犬八公'],
      books: ['Java从入门到入坟', 'JavaScript从入门到入坟', 'Vue从入门到入坟']
    }
  }
}
</script>

<style>
img {
  width: 100px;
  height: 100px;
}
</style>
