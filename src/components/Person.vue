<template>
  <div>
    <span>当前教室人数为:{{ $store.state.personAbout.population }}</span>
    <button @click="addPerson">add</button>
    <input type="number" v-model.number="population">
    <button @click="addOddPerson">奇数人</button>
  </div>
</template>

<script>
export default {
  name: "Person",
  data() {
    return {
      population: 1
    }
  },
  methods: {
    addPerson() {
      this.$store.commit('personAbout/PERSON_INCREMENT');
    },
    addOddPerson() {
      this.$store.dispatch('personAbout/addOddPerson',this.population);
    }
  }
}
</script>

<style scoped>

</style>