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
        <NotebookNewEntry />
      </div>
      <div class="column page-offset">
        <div class="content-item" v-for="(post, i) in posts" :key="i">
          <NotebookEntry :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NotebookEntry from "../components/NotebookEntry";
import NotebookNewEntry from "../components/NotebookNewEntry";
export default {
  data: () => ({
    posts: [
      {
        exercise: "100 lb lift",
        reps: "10",
        set: "5",
        distance: "N/A",
        duration: "30 mins",
        notes:
          "Loved today's workout! Can't wait to get back into the gym and get back at it",
        time: Date(),
      },
    ],
  }),
  components: {
    NotebookEntry,
    NotebookNewEntry,
  },
};
</script>

<style></style>
