//Array of all users entries
const entries = [];

export default entries;

export function getEntries(currentUser) {
  //Array of the current users entries
  let userEntries = [];
  for (let i = 0; i < entries.length; i++) {
    if (currentUser.email == entries[i].user.email) {
      userEntries.push(entries[i]);
    }
  }

  return userEntries;
}

export function setEntries(entry) {
  entries.unshift(entry);
}

export function deleteEntries(index) {
  entries.splice(index, 1);
}

export function getAllEntries() {
  return entries;
}
