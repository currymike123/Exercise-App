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
            <button class="button is-white" v-on:click="searchActive(true)">
              Search
            </button>
            <button class="button is-white" v-on:click="searchActive(false)">
              Friends
            </button>
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
          <div v-if="onSearch">
            <div v-for="(friends, i) in searchedUsers" :key="i">
              <FriendBlock
                :friends="friends"
                @addFriend="addFriend(searchedUsers[i])"
                @deleteFriend="deleteFriend(searchedUsers[i])"
              />
            </div>
          </div>
          <div v-else>
            <div v-for="(friends, i) in friends" :key="i">
              <FriendList
                :friends="friends"
                @addFriend="addFriend(searchedUsers[i])"
                @deleteFriend="deleteFriend(searchedUsers[i])"
              />
            </div>
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
import FriendList from "../components/FriendList";
import FriendPost from "../components/FriendPost";
import { api } from "../models/myFetch";
import Session from "../models/Session";

export default Vue.extend({
  //
  data: () => ({
    posts: [],
    users: [],
    searchedUsers: [],
    search: null,
    onSearch: true,
    currentUser: {},
    friends: [],
  }),
  components: {
    FriendPost,
    FriendBlock,
    FriendList,
  },
  async mounted() {
    this.users = await api("friends/", null, "GET");

    this.posts = await api(
      "posts/feed",
      { handle: Session.user.handle },
      "POST"
    );

    this.getFriendsList();
  },
  methods: {
    //
    searchActive(onSearch) {
      this.onSearch = onSearch;
      this.$forceUpdate();
    },

    displayPosts(i) {
      //Split between two columns.

      if (i % 2 == 0) {
        return false;
      } else {
        return true;
      }
    },
    async addFriend(name) {
      await api("friends/", {
        handle: Session.user.handle,
        friend: name.handle,
      });
      //Get all the posts
      this.posts = await api(
        "posts/feed",
        { handle: Session.user.handle },
        "POST"
      );

      // Get Friends list
      this.getFriendsList();

      this.$forceUpdate();
    },
    async deleteFriend(name) {
      await api(
        "friends/",
        {
          handle: Session.user.handle,
          friend: name.handle,
        },
        "DELETE"
      );

      //Get all the posts
      this.posts = await api(
        "posts/feed",
        { handle: Session.user.handle },
        "POST"
      );

      // Get Friends list
      this.getFriendsList();
      //Update the posts
      this.$forceUpdate();
    },
    async getFriendsList() {
      this.friends = await api("friends/getfriendsList", {
        handle: Session.user.handle,
      });

      // for (let i = 0; i < handles.length; i++) {
      //   let user = this.users.filter((user) => user.handle === handles[i]);
      //   if (user.length != 0) {
      //     this.friends = this.friends.concat(user);
      //   }
      // }
    },
    findUsers() {
      //Clear users
      this.searchedUsers = [];
      //If the search matches user's name or email.  Search both upper and lower case.
      for (let i = 0; i < this.users.length; i++) {
        if (
          this.users[i].name.toUpperCase() == this.search.toUpperCase() ||
          this.users[i].email == this.search ||
          this.users[i].handle == this.search
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
