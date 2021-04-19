/* User session information */

import roouter from "../router";
import { api } from "./myFetch";

const Session = {
  user: null,
  message: [],
};

export default Session;

export function setUser(user) {
  Session.user = user;
}

export function getUser() {
  return Session.user;
}

export function logout() {
  Session.user = null;
}

export function toastError(msg) {
  toastr.open({
    message: msg,
    queue: false,
    type: "is-danger",
  });
}

export async function Login(handle, password) {
  const { user, token } = await api("users/login", { handle, password });
  Session.user = user;
  Session.token = token;

  console.log(Session.user);
  toastr.open({
    type: "is-success",
    message: `Welcome ${Session.user.firstName}`,
  });
}
