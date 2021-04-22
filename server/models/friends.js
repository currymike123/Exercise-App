//Friend Controller

const users = require("./users");

//Relation is user_handle.  Updatefriends array with new friends.
const friendList = [];

module.exports.GetAll = () =>
  friendList.map((x, i) => ({
    ...x,
    user: users.GetByHandle(x.user_handle),
  }));
module.exports.Get = (friend_id) => list[friend_id];

//Add to friends list for only that user_handle
module.exports.Add = (friend) => {
  if (!friend.user_handle) {
    throw "friend must have an Owner";
  }
  friendList.push(friend);
  return { ...friend };
};

//Same as post?
module.exports.Update = (friend_id, friend) => {
  const oldObj = friendList[friend_id];
  const newObj = { ...oldObj, ...friend };
  friendList[friend_id] = newObj;
  return newObj;
};

module.exports.Delete = (friend_id) => {
  const friend = friendList[friend_id];
  friendList.splice(friend_id, 1);
  return friend;
};
