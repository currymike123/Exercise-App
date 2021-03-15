<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <aside class="menu">
          <p class="menu-label">
            Friends
          </p>
        </aside>
        <FriendSearch />
      </div>
      <div class="column page-offset">
        <div v-for="(post, i) in posts" :key="i">
          <div v-if="displayPosts(i) == false">
            <FriendPost :post="post" />
          </div>
        </div>
      </div>
      <div class="column page-offset">
        <div v-for="(post, i) in posts" :key="i">
          <div v-if="displayPosts(i) == true">
            <FriendPost :post="post" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import FriendPost from "../components/FriendPost";
import FriendSearch from "../components/FriendSearch";
import { getAllEntries } from "../models/Entries";

export default Vue.extend({
  //
  data: () => ({
    posts: [],
  }),
  components: {
    FriendPost,
    FriendSearch,
  },
  mounted() {
    this.posts = getAllEntries();
    console.log(this.posts);
  },
  methods: {
    displayPosts(i) {
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

<style>
.friends-search {
  padding-top: 12%;
}
</style>
