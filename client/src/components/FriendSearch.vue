<template>
  <article class="panel is-success mt-6">
    <p class="panel-tabs">
      <a>Search</a>
      <a>Friends</a>
    </p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input
          class="input is-success"
          type="text"
          placeholder="Search"
          v-model="search"
        />
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>

    <FriendBlock />
  </article>
</template>

<script>
import FriendBlock from "../components/FriendBlock";
export default {
  data: () => ({
    //What to list
    currentList: "Search",
    search: null,
  }),
  components: {
    FriendBlock,
  },
};
</script>

<style></style>
