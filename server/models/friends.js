//Friend Controller

const users = require("./users");

//Relation is user_handle.  Updatet friends array with new friends.
const list = [
  {
    friendList: ["@mikecurry"],
    user_handle: "@johnsmith",
  },
];

module.exports.GetAll = () =>
  list.map((x, i) => ({
    ...x,
    user: users.GetByHandle(x.user_handle),
  }));
module.exports.Get = (friend_id) => list[friend_id];

//Add to friends list for only that user_handle
module.exports.Add = (friend) => {
  if (!friend.user_handle) {
    throw "friend must have an Owner";
  }
  list.push(friend);
  return { ...friend };
};

//Same as post?
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
