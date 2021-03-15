<template>
  <a class="panel-block">
    <figure class="image is-48x48">
      <img
        src="https://www.randomlists.com/img/people/courteney_cox.webp"
        alt="Placeholder image"
      />
    </figure>
    <div class="ml-3">{{ friends.name }}</div>
    <a href="#" class="card-footer-item">Friend</a>
    <a href="#" class="card-footer-item">UnFriend</a>
  </a>
</template>

<script>
export default {
  props: {
    friends: Object,
  },
};
</script>

<style></style>
