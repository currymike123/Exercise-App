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
        <section>
          <b-field label="Search for exercises">
            <b-autocomplete
              rounded
              v-model="name"
              v-on:input="filteredDataArray"
              placeholder="e.g. run"
              icon="magnify"
              clearable
              @select="(option) => (selected = option)"
            >
              <template #empty>No results found</template>
            </b-autocomplete>
          </b-field>
        </section>
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
//import { getEntries, deleteEntries } from "../models/Entries";
import Session from "../models/Session";
import { api } from "../models/myFetch";
import { AddPost, GetPostsForUser, DeletePost } from "../models/Entries";

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
    list: [],
    data: [],
    user: {},
    name: "",
  }),
  components: {
    NotebookEntry,
    NotebookNewEntry,
  },
  async mounted() {
    //Update the current user and get entries.

    this.user = Session.user;

    this.newEntry.user = Session.user;
    const updatedEntries = await GetPostsForUser(Session.user.handle);
    this.entries = updatedEntries.reverse();
  },
  methods: {
    async filteredDataArray() {
      this.list = await api("posts/exercise", { exercise: this.name }, "POST");
      console.log(this.list);
    },

    async addEntry() {
      await AddPost(this.newEntry);

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
      const updatedEntries = await GetPostsForUser(Session.user.handle);
      this.entries = updatedEntries.reverse();
    },
    async deleteEntry(i) {
      //Remove stored version
      let index = this.entries.length - 1 - i;

      await DeletePost(index);
      //Get the new set of Entries
      const updatedEntries = await GetPostsForUser(Session.user.handle);
      this.entries = updatedEntries.reverse();
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
