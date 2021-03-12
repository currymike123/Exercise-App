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
                v-model="user.verifyPassword"
                type="verifypassword"
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
        <pre> {{ user }} </pre>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import { setUser } from "../models/Users";
import { getUser } from "../models/Users";

export default {
  data: () => ({
    user: {
      email: null,
      password: null,
      verifyPassword: null,
    },
    hasDanger: false,
    hasSucess: false,
  }),
  methods: {
    checkForm() {
      if (this.user.password == this.user.verifyPassword) {
        this.hasDanger = false;
        this.hasSucess = true;
      } else {
        this.hasDanger = true;
        this.hasSucess = false;
      }
    },
    submitForm() {
      if (this.hasSucess == true) {
        if (this.user.email != null && this.user.password != null) {
          setUser(this.user);
          let list = getUser();
          console.log(list);
        }
      }
    },
  },
};
</script>

<style></style>
