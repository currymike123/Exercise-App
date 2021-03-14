<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <i class="fas fa-dumbbell"></i>
        <a id="will-logo">WILL</a>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/notebook" class="navbar-item">Notebook</router-link>
        <router-link to="/dashboard" class="navbar-item">Dashboard</router-link>
        <router-link to="/tracker" class="navbar-item">Tracker</router-link>
        <router-link to="/friends" class="navbar-item">Friends</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <router-link to="/about" class="navbar-item">
              About
            </router-link>

            <router-link to="/contact" class="navbar-item">
              Contact
            </router-link>

            <hr class="navbar-divider" />
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <login-badge />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LoginBadge from "./LoginBadge";

export default {
  components: {
    LoginBadge,
  },
};
</script>

<style></style>
