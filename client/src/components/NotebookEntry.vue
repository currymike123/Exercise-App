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
        <div class="content mb-4">
          {{ entry.notes }}
        </div>
      </div>
    </div>
    <footer class="card-footer level">
      <div class="field is-grouped">
        <div class="level-left m-4 ml-5">
          <div class="control">
            <button
              class="button is-medium is-primary is-outlined"
              @click.prevent="$emit('delete')"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
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
