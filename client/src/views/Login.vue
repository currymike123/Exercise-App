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
                v-model="email"
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
import { getUsers } from "../models/Users";
import { setUser } from "../models/Session";
import { getUser } from "../models/Session";

export default {
  data: () => ({
    email: null,
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
    this.usersLog = getUsers();
  },
  methods: {
    submitForm() {
      //Check if the user exists and if they do log them in.
      console.log("running");

      for (let i = 0; i < this.usersLog.length; i++) {
        if (this.email == this.usersLog[i].email) {
          this.exists = true;

          if (this.password == this.usersLog[i].password) {
            //Password matches so set as Session user.

            setUser(this.usersLog[i]);
            console.log(getUser());
            this.$router.push("Admin");
          } else {
            this.msg = "incorrect password";
            this.emailHasDanger = false;
            this.emailHasSuces = true;
            this.passwordHasDanger = true;
          }
        } else {
          this.msg = "user doesn't exist";
          this.emailHasDanger = true;
        }
      }
    },
  },
};
</script>

<style scoped></style>
