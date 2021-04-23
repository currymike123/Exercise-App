//Friend Controller

const users = require("./users");

//Relation is user_handle.  Updatefriends array with new friends.
const friendList = [];

//Get list of friends and only return name and handle
module.exports.Get = () => {
  friendList.map((friend) => {
    delete friend.friends;
    return user;
  });
};

//Return the friends list of a user.
module.exports.GetHandle = (handle) => {
  const tempObj = friendList.filter((handle) => friendList.handle == handle);
  return tempObj.friends;
};

module.exports.Register = (user) => {
  friendList.push(user);
  return user;
};

module.exports.Update = (handle, friend) => {
  const index = friendList.findIndex(handle);
  const oldObj = friendList[index];
  const newObj = { ...oldObj, ...friend };
  friendList[index] = newObj;
  return newObj;
};

module.exports.Delete = (handle, friend) => {
  const index = friendList.findIndex(handle);
  const tempObj = friendList[index];
  const friendIndex = tempObj.friends.findIndex(friend);
  tempObj.friends.splice(friendIndex, 1);
  friendList[index] = tempObj;

  return tempObj;
};
