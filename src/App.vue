<template>
  <div id="app">
    <Counter/>
    <hr/>
    <Person/>
  </div>
</template>

<script>
import Counter from "./components/Counter";
import Person from "./components/Person";

export default {
  name: 'App',
  components: {
    Counter, Person
  }
}
</script>

<style>

</style>
