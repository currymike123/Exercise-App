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
          <div v-if="onFriendsList(posts[i]) == true">
            <div v-if="displayPosts(i) == false">
              <FriendPost :post="post" />
            </div>
          </div>
        </div>
      </div>
      <div class="column page-offset">
        <div v-for="(post, i) in posts" :key="i">
          <div v-if="onFriendsList(posts[i]) == true">
            <div v-if="displayPosts(i) == true">
              <FriendPost :post="post" />
            </div>
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
import { getAllEntries } from "../models/Entries";
import { updateUsers } from "../models/Users";
import { getUser } from "../models/Session";
import { api } from "../models/myFetch";

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
  mounted() {
    //Get the current user to add friends
    this.currentUser = getUser();
    //Get all the entries for the feed
    this.posts = getAllEntries();
    //Get all the users for search
    this.users = api("friends", {}, "GET");
    //Get all the current users friends
  },
  methods: {
    //
    searchActive(onSearch) {
      this.onSearch = onSearch;
      this.$forceUpdate();
    },
    onFriendsList(curPost) {
      //If you aren't my friend I don't want to see your post.
      if (!this.currentUser.friends) {
        return false;
      }
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
    addFriend(name) {
      //If there is no friends field in CurrentUser add it and add friend to it.
      if (!this.currentUser.friends) {
        this.currentUser.friends = [];
        this.currentUser.friends.push(name.email);
        updateUsers(this.currentUser);
        this.currentUser = getUser();
        console.log("First Friends");
      }

      // Check to see if the friend is already on list.  If not add them.
      if (!this.currentUser.friends.includes(name.email)) {
        this.currentUser.friends.push(name.email);
        updateUsers(this.currentUser);
        this.currentUser = getUser();
      }
      //Update the posts
      this.$forceUpdate();
    },
    deleteFriend(name) {
      for (let i = 0; i < this.currentUser.friends.length; i++) {
        if (name.email == this.currentUser.friends[i]) {
          this.currentUser.friends.splice(i, 1);
          updateUsers(this.currentUser);
          this.currentUser = getUser();
        }
      }
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
