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
            <a v-on:click="searchActive(true)">Search</a>
            <a v-on:click="searchActive(false)">Friends</a>
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input
                class="input is-success"
                type="text"
                v-model="search"
                v-on:input="findUsers"
              />
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <div v-if="searchActive">
            <div v-for="(friends, i) in searchedUsers" :key="i">
              <FriendBlock :friends="friends" />
            </div>
          </div>
          <div v-else></div>
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
    searchedUsers: [],
    search: null,
    onSearch: true,
  }),
  components: {
    FriendPost,
    FriendBlock,
  },
  mounted() {
    this.posts = getAllEntries();
    this.users = getUsers();
  },
  methods: {
    //
    searchActive(onSearch) {
      this.onSearch = onSearch;
    },
    displayPosts(i) {
      //Split between two columns
      if (i % 2 == 0) {
        return false;
      } else {
        return true;
      }
    },
    addFriend() {},
    deleteFriend() {},
    findUsers() {
      //Clear users
      this.searchedUsers = [];
      //If the search matches user's name or email
      for (let i = 0; i < this.users.length; i++) {
        if (
          this.users[i].name.toUpperCase() == this.search.toUpperCase() ||
          this.users[i].email == this.search
        ) {
          this.searchedUsers.push(this.users[i]);
        }
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
