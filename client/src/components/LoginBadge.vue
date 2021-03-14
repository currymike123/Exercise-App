<template>
  <div class="buttons" v-if="!Session.user">
    <router-link to="/signup" class="button is-success is-small">
      <strong>Sign up</strong>
    </router-link>

    <router-link to="/login" class="button is-success is-small">
      Log in
    </router-link>
  </div>
  <div class="buttons" v-else>
    <router-link to="/admin" class="navbar-item"
      ><a class=" is-sucess is-small">{{ Session.user.email }}</a></router-link
    >
    <a class="button is-success is-small" @click="sesLogout">Log Out</a>
  </div>
</template>

<script>
import Session, { logout } from "../models/Session";

export default {
  data() {
    return {
      Session,
    };
  },
  methods: {
    sesLogout() {
      logout();
    },
  },
};
</script>

<style></style>
