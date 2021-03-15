const entries = [];

export default entries;

export function getEntries(currentUser) {
  const userEntries = [];
  for (let i = 0; i < entries.length; i++) {
    if (currentUser.email == entries[i].user.email) {
      userEntries.push(entries[i]);
    }
  }
  //console.log(entries);
  console.log("This is my current user");
  console.log(currentUser);
  console.log("All the user entries");
  console.log(userEntries);
  return entries;
}

export function setEntries(entry) {
  entries.unshift(entry);
  console.log("From within Entries");
  console.log(entry);
}

export function deleteEntries(index) {
  entries.splice(index, 1);
}
