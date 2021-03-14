/* User session information */

const Session = {
  user: {},
  message: [],
};

export default Session;

export function setUser(user) {
  Session.user = user;
}

export function getUser() {
  return Session.user;
}

export function Logout() {
  Session.user = null;
}
