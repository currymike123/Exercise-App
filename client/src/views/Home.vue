<template>
  <div class="container page-offset">
    <div class="columns">
      <div class="column is-one-half m-6">
        <h1 class="subtitle is-1 ">
          <strong>Will</strong>

          :gives you <strong>strength</strong><br />
          to keep going all day.
        </h1>
      </div>
      <div class="column m-6 pt-6">
        Will tracks your daily exercise routine and matches you up against your
        friends. If you are new
        <router-link to="/signup" class="is-success is-small">
          <strong>Sign up</strong>
        </router-link>
        or if you are a returning user please
        <router-link to="/login" class="is-success is-small">
          <strong>Log in</strong>
        </router-link>
        .
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
