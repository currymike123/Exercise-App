<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <aside class="menu">
          <p class="menu-label">
            Notebook
          </p>

          <ul class="menu-list">
            <li><a>New Entry</a></li>
          </ul>
        </aside>
      </div>
      <div class="column page-offset">
        <notebook-new-entry :newEntry="newEntry" @add="addEntry" />
        <div class="content-item mb-4" v-for="(entry, i) in entries" :key="i">
          <div v-if="displayEntries(i) == true">
            <NotebookEntry :entry="entry" @delete="deleteEntry(i)" />
          </div>
        </div>
      </div>
      <div class="column page-offset">
        <div class="content-item mb-4" v-for="(entry, i) in entries" :key="i">
          <div v-if="displayEntries(i) == false">
            <NotebookEntry :entry="entry" @delete="deleteEntry(i)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import NotebookEntry from "../components/NotebookEntry";
import NotebookNewEntry from "../components/NotebookNewEntry";

export default Vue.extend({
  data: () => ({
    newEntry: {},
    entries: [],
  }),
  components: {
    NotebookEntry,
    NotebookNewEntry,
  },
  methods: {
    addEntry() {
      this.entries.unshift(this.newEntry);
      this.newEntry = {};
    },
    deleteEntry(i) {
      this.entries.splice(i, 1);
    },
    displayEntries(i) {
      if (i % 2 == 0) {
        return false;
      } else {
        return true;
      }
    },
  },
});
</script>

<style></style>
