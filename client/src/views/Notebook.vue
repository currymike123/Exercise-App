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
        <NotebookEntry />
      </div>
      <div class="column page-offset">
        <NotebookEntry />
      </div>
    </div>
  </div>
</template>

<script>
import NotebookEntry from "../components/NotebookEntry";
export default {
  components: {
    NotebookEntry,
  },
};
</script>

<style></style>
