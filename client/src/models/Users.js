const users = [];

export default users;

export function setUsers(user) {
  users.unshift(user);
}

export function getUsers() {
  return users;
}

export function updateUsers(user) {
  for (let i = 0; i < users.length; i++) {
    if (user.email == users[i].email) {
      users[i] = user;
    }
  }
}
