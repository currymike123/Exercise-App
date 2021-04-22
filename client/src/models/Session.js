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
  const SessionInfo = await api("users/login", { handle, password });
  Session.user = SessionInfo.user;
  Session.token = SessionInfo.token;
  console.log("This is the returned Session User");
  console.log(Session.user);

  toastr.open({
    type: "is-success",
    message: `Welcome ${Session.user.name}`,
  });
}

export async function Register(user) {
  //Register the user
  const SessionInfo = await api("users/register", user);
  Session.user = SessionInfo.user;
  Session.token = SessionInfo.token;
  console.log("This is the returned Session User");
  console.log(Session.user);
  toastr.open({
    type: "is-success",
    message: `Welcome to Will`,
  });
}

export async function Update(user) {
  const SessionInfo = await api("users/update", user);
  Session.user = SessionInfo.user;
  Session.token = SessionInfo.token;
  console.log("This is the returned Session User");
  console.log(Session.user);
}
