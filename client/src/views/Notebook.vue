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
      </div>
      <div class="column page-offset">
        <div class="content-item" v-for="(entry, i) in entries" :key="i">
          <NotebookEntry :entry="entry" />
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
  },
});
</script>

<style></style>
