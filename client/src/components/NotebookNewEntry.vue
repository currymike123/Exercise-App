<template>
  <div class="card">
    <form @submit.prevent="addEntry()">
      <header class="card-header">
        <p class="card-header-title">
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </p>
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
            <input
              class="input is-large"
              type="text"
              v-model="newEntry.notes"
            />
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
          <div class="level-item ml-6 mr-6 mt-4 mb-4">
            <div class="control">
              <button class="button is-medium is-primary is-outlined">
                Edit
              </button>
            </div>
          </div>
          <div class="level-right m-4 mr-5">
            <div class="control">
              <button class="button is-medium is-primary is-outlined">
                Delete
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
  data: () => ({
    newEntry: {},
  }),
  methods: {
    addPost() {
      this.posts.unshift(this.newEntry);
      this.newEntry = {};
    },
  },
};
</script>

<style></style>
