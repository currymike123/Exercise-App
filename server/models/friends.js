//Friend Controller

const users = require("./users");

//Relation is user_handle.  Updatefriends array with new friends.
const friendList = [];

//Get list of friends
module.exports.Get = () => {
  return friendList;
};

//Return the friends list of a user.
module.exports.GetHandle = (handle) => {
  const tempObj = friendList.find((user) => user.handle === handle);
  return tempObj.friends;
};

module.exports.Register = (user) => {
  friendList.push(user);
  return user;
};

module.exports.Update = (data) => {
  const index = friendList.findIndex(function (fIndex) {
    return fIndex.handle === data.handle;
  });
  //Check to see if the friend is already there.
  if (!friendList[index].friends.includes(data.friend)) {
    friendList[index].friends.push(data.friend);
  }
  return friendList[index];
};

module.exports.Delete = (data) => {
  const index = friendList.findIndex(function (fIndex) {
    return fIndex.handle === data.handle;
  });

  friendList[index].friends.splice(
    friendList[index].friends.indexOf(data.friend),
    1
  );

  return friendList[index];
};
