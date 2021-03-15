<template>
  <div class="card">
    <form @submit.prevent="$emit('add')">
      <header class="card-header">
        <p class="card-header-title"></p>
      </header>
      <div class="card-content">
        <div class="content">
          <label class="label mt-1">Exercise</label>
          <div class="control">
            <input class="input" type="text" v-model="newEntry.exercise" />
          </div>
          <label class="label mt-1">Reps</label>
          <div class="control">
            <input class="input" type="text" v-model="newEntry.reps" />
          </div>
          <label class="label mt-1">Sets</label>
          <div class="control">
            <input class="input" type="text" v-model="newEntry.sets" />
          </div>
          <label class="label mt-1">Distance</label>
          <div class="control">
            <input class="input" type="text" v-model="newEntry.distance" />
          </div>
          <label class="label mt-1">Duration</label>
          <div class="control">
            <input class="input" type="text" v-model="newEntry.duration" />
          </div>
          <label class="label mt-1">Notes</label>
          <div class="control">
            <input class="input" type="text" v-model="newEntry.notes" />
          </div>
        </div>
      </div>
      <footer class="card-footer level">
        <div class="field is-grouped">
          <div class="level-left m-4 ml-5">
            <div class="control">
              <button class="button is-medium is-primary is-outlined">
                Save
              </button>
            </div>
          </div>
        </div>
      </footer>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    newEntry: Object,
  },
};
</script>

<style></style>
