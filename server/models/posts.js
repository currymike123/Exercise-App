const users = require("./users");
const friends = require("./friends");

const list = [];

module.exports.GetAll = () =>
  list.map((x, i) => ({
    ...x,
    user: users.GetByHandle(x.user_handle),
  }));
module.exports.Get = (post_id) => list[post_id];
module.exports.Add = (post) => {
  if (!post.user.handle) {
    throw { code: 422, msg: "Post must have an Owner" };
  }
  list.push(post);
  return post;
};
module.exports.Update = (post_id, post) => {
  const oldObj = list[post_id];
  const newObj = { ...oldObj, ...post };
  list[post_id] = newObj;
  return newObj;
};
module.exports.Delete = (post_id) => {
  const post = list[post_id];
  list.splice(post_id, 1);
  return post;
};

const listWithOwner = () =>
  list.map((x, i) => ({
    ...x,
    user: users.GetByHandle(x.handle),
  }));

module.exports.GetAll = () => {
  return listWithOwner();
};

module.exports.GetNotebook = (handle) => {
  return list.filter((post) => post.user.handle == handle);
};

module.exports.GetFeed = (handle) => {
  console.log("In GetFeed");
  let handles = friends.GetHandle(handle);
  return handles.forEach((handle) =>
    list.filter((post) => post.user.handle == handle)
  );
};
