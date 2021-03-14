const users = [];

export function setUsers(user) {
  users.unshift(user);
}

export function getUsers() {
  return users;
}
