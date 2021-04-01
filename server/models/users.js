//Copied from class.  **testing**

const bcrypt = require("bcrypt");

const list = [
  {
    firstName: "Mike",
    lastName: "Curry",
    handle: "@currymike",
    pic:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    password: "1",
  },
];

module.exports.GetAll = () => list;
module.exports.Get = (user_id) => list[user_id];
module.exports.GetByHandle = (handle) => ({
  ...list.find((x, i) => x.handle == handle),
  password: undefined,
});
module.exports.Add = (user) => {
  if (!user.firstName) {
    throw "First Name is reqired";
  }
  list.push(user);
  return { ...user, password: undefined };
};
module.exports.Update = (user_id, user) => {
  const oldObj = list[user_id];
  if (user.firstName) {
    oldObj.firstName = user.firstName;
  }
  if (user.lastName) {
    oldObj.lastName = user.lastName;
  }
  if (user.email) {
    oldObj.email = user.email;
  }
  if (user.password) {
    oldObj.password = user.password;
  }
  if (user.handle) {
    oldObj.handle = user.handle;
  }
  if (user.bio) {
    oldObj.bio = user.bio;
  }
  if (user.pic) {
    oldObj.pic = user.pic;
  }
  //list[user_id] = newObj ;
  return { ...oldObj, password: undefined };
};
module.exports.Delete = (user_id) => {
  const user = list[user_id];
  list.splice(user_id, 1);
  return { ...user, password: undefined };
};

module.exports.Login = (handle, password) => {
  console.log({ handle, password });
  const user = list.find((x) => x.handle == handle && x.password == password);
  if (!user) throw { code: 401, msg: "Wrong Username or Password" };

  return user;
};

module.exports.Register = async (user) => {
  const hash = await bcrypt.hash(user.password, 8);

  user.password = hash;

  if (!user.firstName) {
    throw { code: 422, msg: "First Name is required" };
  }

  list.push(user);
  return { ...user, password: undefined };
};
