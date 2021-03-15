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
        <div class="content-item mb-3" v-for="(entry, i) in entries" :key="i">
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
import { getEntries, setEntries, deleteEntries } from "../models/Entries";

import { getUser } from "../models/Session";

export default Vue.extend({
  data: () => ({
    newEntry: {
      user: {},
      exercise: "",
      reps: "",
      sets: "",
      distance: "",
      duration: "",
      notes: "",
    },
    entries: [],
    user: {},
  }),
  components: {
    NotebookEntry,
    NotebookNewEntry,
  },
  mounted() {
    //Update the current user and get entries.

    this.user = getUser();
    this.newEntry.user = this.user;
    this.entries = getEntries(this.user);
  },
  methods: {
    addEntry() {
      //Add entery to Enteries.js
      setEntries(this.newEntry);
      //Reset newEntry
      this.newEntry = {
        user: {},
        exercise: "",
        reps: "",
        sets: "",
        distance: "",
        duration: "",
        notes: "",
      };
      //Add the current user into newEntry
      this.newEntry.user = this.user;
      //Get the new set of Entries
      this.entries = getEntries(this.user);
    },
    deleteEntry(i) {
      //Remove stored version
      deleteEntries(i);
      //Get the new set of Entries
      this.entries = getEntries(this.user);
    },
    displayEntries(i) {
      //Split between two columns
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
