//New code from class. **testing**
const users = require("./users");

const list = [
  {
    src: "https://bulma.io/images/placeholders/1280x960.png",
    alt: "Placeholder image",
    caption: "Lorem Ipsom",
    time: Date(),
    user_handle: "@johnsmith",
  },
];

module.exports.GetAll = () =>
  list.map((x, i) => ({
    ...x,
    user: users.GetByhandle(x.user_handle),
  }));
module.exports.Get = (post_id) => list[post_id];
module.exports.Add = (post) => {
  if (!post.user_handle) {
    throw "Post must have an Owner";
  }
  list.push(post);
  return { ...post };
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
