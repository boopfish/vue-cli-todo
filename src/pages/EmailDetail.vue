<template>
  <div>
    <h5>{{content}}</h5>
  </div>
</template>

<script>
export default {
  name: "EmailDetail",
  props:['receiver','content'],
  mounted() {
    console.log('@@@@@',this)
  }
}
</script>

<style scoped>

</style>