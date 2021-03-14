const entries = [];

export default entries;

export function getEntries(index) {
  return enteries[index];
}

export function setEntries(index) {
  entries.unshift(index);
}
