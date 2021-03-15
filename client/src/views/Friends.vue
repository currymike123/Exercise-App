<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <aside class="menu">
          <p class="menu-label">
            Friends
          </p>
        </aside>
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
          <div v-for="(friends, i) in users" :key="i">
            <FriendBlock :friends="friends" />
          </div>
        </article>
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
//
import Vue from "vue";
import FriendBlock from "../components/FriendBlock";
import FriendPost from "../components/FriendPost";
import { getAllEntries } from "../models/Entries";
import { getUsers } from "../models/Users";

export default Vue.extend({
  //
  data: () => ({
    posts: [],
    users: [],
    search: null,
  }),
  components: {
    FriendPost,
    FriendBlock,
  },
  mounted() {
    this.posts = getAllEntries();
    this.users = getUsers();
    console.log(this.posts);
    console.log(this.users);
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
