<template>
  <a class="panel-block">
    <figure class="image is-48x48">
      <img
        src="https://www.randomlists.com/img/people/courteney_cox.webp"
        alt="Placeholder image"
      />
    </figure>
    <div class="ml-3">{{ friends }}</div>

    <a class="card-footer-item" @click.prevent="$emit('deleteFriend')"
      >UnFriend</a
    >
  </a>
</template>

<script>
export default {
  props: {
    friends: String,
  },

  methods: {},
};
</script>

<style></style>
