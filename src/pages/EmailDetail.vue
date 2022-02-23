<template>
  <div>
    <h5>{{$route.params.content}}</h5>
  </div>
</template>

<script>
export default {
  name: "EmailDetail",
  mounted() {
    console.log('@@@@@',this)
  }
}
</script>

<style scoped>

</style>