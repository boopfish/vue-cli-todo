<template>
  <div id="app">
    <Category :listData="foods" title="美食">
      <img slot="center" src="logo.png" alt="">
      <a slot="footer" src="javascript:void(0)">查看更多美食</a>
    </Category>

    <Category :listData="films" title="电影">
      <ul slot="center">
        <li v-for="data in films" :key="data">{{ data }}</li>
      </ul>
      <div slot="footer">
        <a>冒险电影</a>
        <a>搞笑电影</a>
      </div>

    </Category>
    <Category :listData="books" title="图书">
      <ul slot="center">
        <li v-for="data in books" :key="data">{{ data }}</li>
      </ul>
      <!-- v-slot:footer只能用在template标签中-->
      <template v-slot:footer>
        <div>
          <a>科普</a>
          <a>编程</a>
        </div>
        <h4>欢迎来到图书馆</h4>
      </template>
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

a {
  display: block;
}

h4 {
  text-align: center;
}
</style>
