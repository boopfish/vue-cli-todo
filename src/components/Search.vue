<template>
  <div class="out-container">
    <input type="text" ref="inputText">
    <button class="btn btn-primary" @click="search">search</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  methods: {
    search() {
      axios.get(`https://api.github.com/search/users?q=${this.$refs.inputText.value}`)
          .then(response => {
                console.log(response);
                this.$bus.$emit("getUserList", response.data);
              },
              error => {
                console.log(error.message);
              }
          );
    }
  }
}
</script>

<style scoped>

</style>