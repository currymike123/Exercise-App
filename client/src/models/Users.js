const users = [];

export function setUser(user) {
  users.unshift(user);
}

export function getUser() {
  return users;
}
