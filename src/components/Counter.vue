<template>
  <div>
    <h2>当前求和为:{{ $store.state.sum }}</h2>
    <!--假如h3中的值会进行很多复杂的运算-->
    <h3>当前求和放大10倍为:{{ result }}</h3>
    <h3>学校名称:{{ schoolName }},学习科目:{{ subject }}</h3>
    <select type="select" v-model.number="selectValue">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button type="button" @click="increment(selectValue)">+</button>
    <button type="button" @click="decrement(selectValue)">-</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "Counter",
  data() {
    return {
      selectValue: 1
    }
  },
  computed: {
    //从mapState生成计算属性，从State中读取数据
    //这里面key对应的是当前组件的 value对应的是vuex中state的对应属性值
    // ...mapState({schoolName: 'schoolName', subject: 'subject'})

    //如果key与value的值相等 那么可以直接用数组的形式进行表示
    ...mapState(['schoolName', 'subject']),
    //从mapGetters生成计算属性，从getters中读取数据
    ...mapGetters(['result'])
  },
  methods: {
    //借助mapMutations生成方法，方法中会调用commit去联系mutations
    ...mapMutations(['increment', 'decrement']),
    //借助mapActions生成方法,方法会调用dispatch去联系Actions
    ...mapActions(['increment', 'decrement'])
    /*  increment() {
        // this.sum += this.selectValue;
        this.$store.dispatch('increment', this.selectValue);
      },
      decrement() {
        this.$store.dispatch('decrement', this.selectValue);
      }*/
  },
  mounted() {
    console.log('@@@@@@@@@@@@', this)
  }
}
</script>

<style scoped>

</style>