//Friend Controller

const users = require("./users");

const list = [
  {
    friends: [],
    user_handle: "@johnsmith",
  },
];

module.exports.GetAll = () =>
  list.map((x, i) => ({
    ...x,
    user: users.GetByhandle(x.user_handle),
  }));
module.exports.Get = (friend_id) => list[friend_id];
module.exports.Add = (friend) => {
  if (!friend.user_handle) {
    throw "friend must have an Owner";
  }
  list.push(friend);
  return { ...friend };
};
module.exports.Update = (friend_id, friend) => {
  const oldObj = list[friend_id];
  const newObj = { ...oldObj, ...friend };
  list[friend_id] = newObj;
  return newObj;
};
module.exports.Delete = (friend_id) => {
  const friend = list[friend_id];
  list.splice(friend_id, 1);
  return friend;
};
