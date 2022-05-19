<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  methods: {},
};
</script>

<template>
  <nav-bar />

  <RouterView />
</template>
