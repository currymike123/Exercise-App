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
import { getEntries, deleteEntries } from "../models/Entries";
import Session from "../models/Session";
import { AddPost, GetPostsForUser } from "../models/Entries";

//import { getUser } from "../models/Session";

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

    this.user = Session.user;
    console.log("THIS IS THE SESSION USER");
    console.log(Session.user);
    this.newEntry.user = Session.user;
    //this.entries = getEntries(this.user);
  },
  methods: {
    async addEntry() {
      //Add entery to Enteries.js
      //setEntries(this.newEntry);
      console.log("THIS IS THE Entry sent to the server");
      console.log(this.newEntry);
      //const sentPost = await api("posts", this.newEntry);
      const sentPost = await AddPost(this.newEntry);
      console.log(sentPost);
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
      this.newEntry.user = Session.user;
      //Get the new set of Entries
      this.entries = await GetPostsForUser(Session.user.handle);
      console.log(this.entries);
    },
    deleteEntry(i) {
      //Remove stored version
      deleteEntries(i);
      //Get the new set of Entries
      this.entries = getEntries(this.user.handle);
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
