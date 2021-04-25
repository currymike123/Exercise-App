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
            <div v-for="(friends, i) in this.currentUser.friends" :key="i">
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
  }),
  components: {
    FriendPost,
    FriendBlock,
    FriendList,
  },
  async mounted() {
    //Get all the users for search
    this.users = await api("friends/", null, "GET");
    console.log(this.users);
    //Get the current user to add friends
    //this.currentUser = getUser();
    //Get all the entries for the feed
    this.posts = await api(
      "posts/feed",
      { handle: Session.user.handle },
      "POST"
    );
    //Get all the current users friends
  },
  methods: {
    //
    searchActive(onSearch) {
      this.onSearch = onSearch;
      this.$forceUpdate();
    },
    onFriendsList(curPost) {
      //If you are on my friends list show your posts.
      if (this.currentUser.friends.includes(curPost.user.email)) {
        return true;
      } else {
        return false;
      }
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
      console.log("here are the posts");
      console.log(this.posts);
      //Update the posts
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
      //Update the posts
      this.$forceUpdate();
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
