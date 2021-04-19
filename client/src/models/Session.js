/* User session information */

import { ToastProgrammatic as toastr } from "buefy";
import { api } from "./myFetch";

const Session = {
  user: null,
  token: null,
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

export async function Register(user) {
  console.log(user);
  const { SessionUser, SessionToken } = await api("users/register", { user });
  Session.user = SessionUser;
  Session.token = SessionToken;

  console.log(Session.user);
  toastr.open({
    type: "is-success",
    message: `Welcome ${Session.user.name}`,
  });
}
