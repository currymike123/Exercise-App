<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <AdminMenu />
      </div>

      <div class="column is-half page-offset">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Bio</label>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <p class="control"></p>
              <p class="control is-expanded">
                <textarea
                  class="textarea"
                  v-model="user.bio"
                  placeholder="Bio"
                ></textarea>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Picture</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="file has-name is-boxed">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume" />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                      Choose a file…
                    </span>
                  </span>
                  <span class="file-name">
                    Picture.jpg
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button is-primary" v-on:click="update">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import AdminMenu from "@/components/AdminMenu";
//import { getSessionUser, updateUsers } from "../models/Users";
//import { getUser } from "../models/Session";
import Session from "../models/Session";

export default {
  data: () => ({
    user: {},
  }),
  components: {
    AdminMenu,
  },
  mounted() {
    //let currentUser = getUser();
    this.user = Session.user;
    console.log("This is the session user from Account");
    console.log(Session.user);
    console.log("This is the session token from Account");
    console.log(Session.token);
  },
  methods: {
    update() {
      //updateUsers(this.user);
    },
  },
};
</script>

<style></style>
