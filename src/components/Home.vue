<template>
  <div class="homeHeader">
    <h3 v-if="user">Welcome, {{user.full_name}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['user']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
