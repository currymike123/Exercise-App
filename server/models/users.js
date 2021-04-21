const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;

const list = [];

module.exports.GetAll = () => list;
module.exports.Get = (user_id) => list[user_id];
module.exports.GetByHandle = (handle) => ({
  ...list.find((x, i) => x.handle == handle),
  password: undefined,
});
module.exports.Add = (user) => {
  if (!user.firstName) {
    throw { code: 422, msg: "First Name is required" };
  }
  list.push(user);
  return { ...user, password: undefined };
};
module.exports.Register = async (user) => {
  const hash = await bcrypt.hash(user.password, +SALT_ROUNDS);

  user.password = hash;

  if (!user.name) {
    throw { code: 422, msg: "Name is required" };
  }

  const data = { ...user, password: undefined };

  const token = jwt.sign(data, JWT_SECRET);

  list.push(user);
  return { user: data, token };
};
module.exports.Update = async (user) => {
  const index = list.findIndex(users.handle);
  if (user.name) {
    list[index].name = user.name;
  }
  if (user.email) {
    list[index].email = user.email;
  }
  if (user.handle) {
    list[index].handle = user.handle;
  }
  if (user.password) {
    const hash = await bcrypt.hash(user.password, +SALT_ROUNDS);
    list[index].password = hash;
  }
  if (user.pic) {
    list[index].pic = user.pic;
  }
  if (user.bio) {
    list[index].bio = user.bio;
  }
  if (user.friends) {
    list[index].friends = user.friends;
  }
  const data = { ...user, password: undefined };

  const token = jwt.sign(data, JWT_SECRET);

  return { ...list[index], password: undefined, token };
};
module.exports.Delete = (user_id) => {
  const user = list[user_id];
  list.splice(user_id, 1);
  return user;
};

module.exports.Login = async (handle, password) => {
  console.log({ handle, password });
  const user = list.find((x) => x.handle == handle);
  if (!user)
    throw { code: 401, msg: "Sorry there is no user with that handle" };

  if (!(await bcrypt.compare(password, user.password))) {
    throw { code: 401, msg: "Wrong Password" };
  }

  const data = { ...user, password: undefined };

  const token = jwt.sign(data, JWT_SECRET);

  return { user: data, token };
};

module.exports.FromJWT = async (token) => {
  try {
    const user = jwt.verify(token, JWT_SECRET);
    return user;
  } catch (error) {
    console.log({ error });
    return null;
  }
};
