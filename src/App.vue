<template>
  <div id="app">
    <Category>
      <template scope="{foods}">
        <ul>
          <li v-for="(food,index) in foods" :key="index">{{food}}</li>
        </ul>
      </template>
    </Category>
    <Category>
      <template scope="{foods}">
        <ol>
          <li v-for="(food,index) in foods" :key="index">{{food}}</li>
        </ol>
      </template>
    </Category>
    <Category>
      <template scope="{foods}">
          <h4 v-for="(food,index) in foods" :key="index">{{food}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category"

export default {
  name: 'App',
  components: {Category}
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
