<template>
  <div>
    <h2>当前求和为:{{ sum }}</h2>
    <h3>当前求和放大10倍为:{{sum * 10 }}</h3>
    <select type="select" v-model.number="selectValue">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <h3>Person组件的人数为:{{ population }}</h3>
    <button type="button" @click="increment(selectValue)">+</button>
    <button type="button" @click="decrement(selectValue)">-</button>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
  name: "Counter",
  data() {
    return {
      selectValue: 1
    }
  },
  methods: {
    ...mapActions('counterAbout',['increment','decrement'])
  },
  computed: {
    ...mapState('counterAbout', ['sum']),
    ...mapState('personAbout',['population']),
  },
  mounted() {
    console.log('@@@@@@@@@@@@', this)
  }
}
</script>

<style scoped>

</style>