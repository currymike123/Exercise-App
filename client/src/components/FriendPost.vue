<template>
  <div class="card mt-2">
    <header class="card-header level">
      <div class="media pl-3 pt-3">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://www.randomlists.com/img/people/ray_romano.webp"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ post.user.name }}</p>
        </div>
      </div>
      <div class="level-right pr-3"></div>
    </header>
    <div class="card-content">
      <div class="content">
        <label class="label mt-1">Exercise</label>
        <div class="content">
          {{ post.exercise }}
        </div>
        <label class="label mt-1">Reps</label>
        <div class="content">
          {{ post.reps }}
        </div>
        <label class="label mt-1">Sets</label>
        <div class="content">
          {{ post.sets }}
        </div>
        <label class="label mt-1">Distance</label>
        <div class="content">
          {{ post.distance }}
        </div>
        <label class="label mt-1">Duration</label>
        <div class="content">
          {{ post.duration }}
        </div>
        <label class="label mt-1">Notes</label>
        <div class="content">
          {{ post.notes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style></style>
