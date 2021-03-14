const users = [];

export default users;

export function setUsers(user) {
  users.unshift(user);
}

export function getUsers() {
  return users;
}
