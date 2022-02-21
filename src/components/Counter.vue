<template>
  <div>
    <h2>当前求和为:{{ $store.state.sum }}</h2>
    <!--假如h3中的值会进行很多复杂的运算-->
    <h3>当前求和放大10倍为:{{ $store.getters.result}}</h3>
    <select type="select" v-model.number="selectValue">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button type="button" @click="increment">+</button>
    <button type="button" @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      selectValue: 1
    }
  },
  computed: {
  },
  methods: {
    increment() {
      // this.sum += this.selectValue;
      this.$store.dispatch('increment', this.selectValue);
    },
    decrement() {
      this.$store.dispatch('decrement', this.selectValue);
    }
  },
  mounted() {
    console.log('@@@@@@@@@@@@', this)
  }
}
</script>

<style scoped>

</style>