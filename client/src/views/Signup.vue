<template>
  <div class="container">
    <div class="columns page-offset">
      <div class="column is-one-third"></div>
      <div class="column">
        <form @submit.prevent="submitForm">
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                v-model="user.name"
                type="text"
                placeholder="name"
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
                v-model="user.email"
                type="email"
                placeholder="Email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                v-model="user.handle"
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
                  'is-danger': hasDanger,
                  'is-sucess': hasSucess,
                }"
                v-on:input="checkForm"
                v-model="user.password"
                type="password"
                placeholder="Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                v-bind:class="{
                  'is-danger': hasDanger,
                  'is-sucess': hasSucess,
                }"
                v-on:input="checkForm"
                v-model="verifyPassword"
                type="password"
                placeholder="VerifyPassword"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success">
                Register
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
//import { setUsers } from "../models/Users";
//import GetAllUsers from "../models/Users";
//import { getUsers } from "../models/Users";
import { Register } from "../models/Session";

export default {
  data: () => ({
    user: {
      name: null,
      email: null,
      handle: null,
      password: null,
    },
    verifyPassword: null,
    hasDanger: false,
    hasSucess: false,
  }),
  methods: {
    //Check to see if the passwords match.
    checkForm() {
      if (this.user.password == this.verifyPassword) {
        this.hasDanger = false;
        this.hasSucess = true;
      } else {
        this.hasDanger = true;
        this.hasSucess = false;
      }
    },
    //If the passwords match and they enetered information add user and start session.
    async submitForm() {
      if (this.hasSucess == true) {
        if (this.user.email != null && this.user.password != null) {
          //Add user to Session and Server
          await Register(this.user);

          this.$router.push("Admin");
        }
      }
    },
  },
};
</script>

<style></style>
