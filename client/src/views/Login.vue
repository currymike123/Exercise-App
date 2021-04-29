<template>
  <div class="container">
    <div class="columns page-offset">
      <div class="column is-one-third"></div>
      <div class="column">
        <form @submit.prevent="submitForm">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                v-bind:class="{
                  'is-danger': emailHasDanger,
                  'is-sucess': emailHasSucess,
                }"
                v-model="handle"
                type="text"
                placeholder="Handle"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                v-bind:class="{
                  'is-danger': passwordHasDanger,
                  'is-sucess': passwordHasSucess,
                }"
                v-model="password"
                type="password"
                placeholder="Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <p class="has-text-danger" v-if="msg">
            {{ msg }}
          </p>
          <div class="field">
            <p class="control">
              <button class="button is-success">
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
//import { getUsers } from "../models/Users";
//import { setUser } from "../models/Session";
//import { getUser } from "../models/Session";
import { Login } from "../models/Session";

export default {
  data: () => ({
    email: null,
    handle: null,
    password: null,
    usersLog: [],
    msg: "",
    exists: false,
    emailHasDanger: false,
    emailHasSucess: false,
    passwordHasDanger: false,
    passwordHasSucess: false,
  }),
  mounted() {
    //this.usersLog = getUsers();
  },
  methods: {
    async submitForm() {
      //Check if the user exists and if they do log them in.

      await Login(this.handle, this.password);
      this.$router.push("Admin");
    },
  },
};
</script>

<style scoped></style>
