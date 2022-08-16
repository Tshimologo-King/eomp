<template>
  <Nav />
  <router-view />
</template>

<script>
import nav from "./components/nav.vue";
import login from "./components/Login.vue";
import register from "./components/Register.vue";
import admin from "./components/adminDashboard.vue";
import Nav from './components/nav.vue';
import Purchase from './components/Purchase.vue'

export default {
  name: 'Home',
  props: ['user'],
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async created() {
      this.$store.dispatch('user', {
        user: this.user
      });
    },
  },
  components: { login, register, admin, Nav, Purchase },
};
</script>

<style>

</style>
