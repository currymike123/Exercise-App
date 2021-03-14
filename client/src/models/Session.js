/* User session information */

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
