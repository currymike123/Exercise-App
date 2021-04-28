<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <DashboardMenu />
      </div>
      <div class="column page-offset">
        <table class="table dash-offset">
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Reps</th>
              <th>Sets</th>
              <th>Distance</th>
              <th>Duration</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(entry, i) in entries" :key="i">
              <td>{{ entry.exercise }}</td>
              <td>{{ entry.reps }}</td>
              <td>{{ entry.sets }}</td>
              <td>{{ entry.distance }}</td>
              <td>{{ entry.duration }}</td>
              <td>{{ entry.notes }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import DashboardMenu from "@/components/DashboardMenu";
import Session from "../models/Session";
import { GetPostsForUser } from "../models/Entries";

export default {
  data: () => ({
    entries: [],
  }),
  components: {
    DashboardMenu,
  },
  async mounted() {
    //Update the current user and get entries.

    const updatedEntries = await GetPostsForUser(Session.user.handle);
    this.entries = updatedEntries.reverse();
  },
};
</script>

<style></style>
