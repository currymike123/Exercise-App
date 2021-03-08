<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title"></p>
    </header>
    <div class="card-content">
      <div class="content">
        <label class="label mt-1">Exercise</label>
        <div class="content">
          {{ entry.exercise }}
        </div>
        <label class="label mt-1">Reps</label>
        <div class="content">
          {{ entry.reps }}
        </div>
        <label class="label mt-1">Sets</label>
        <div class="content">
          {{ entry.sets }}
        </div>
        <label class="label mt-1">Distance</label>
        <div class="content">
          {{ entry.distance }}
        </div>
        <label class="label mt-1">Duration</label>
        <div class="content">
          {{ entry.duration }}
        </div>
        <label class="label mt-1">Notes</label>
        <div class="content">
          {{ entry.notes }}
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Save</a>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    entry: Object,
  },
};
</script>

<style></style>
