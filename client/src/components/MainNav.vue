<template>
  <div class="navbar-item" v-if="Session.user">
    <router-link to="/" class="navbar-item">Home</router-link>
    <router-link to="/notebook" class="navbar-item">Notebook</router-link>
    <router-link to="/dashboard" class="navbar-item">Dashboard</router-link>

    <router-link to="/friends" class="navbar-item">Friends</router-link>
  </div>
</template>

<script>
import Session from "../models/Session";
export default {
  data() {
    return {
      Session,
    };
  },
};
</script>

<style></style>
