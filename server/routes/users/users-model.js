const db = require("../../database/dbConfig");

module.exports = {
  getAllUsers,
  getUserById,
  getUserByUsername,
  addUser,
  editUser,
  deleteUser
};

// get all Users
function getAllUsers() {
  return db("users");
}

// get a user by id
function getUserById(id) {
  return db("users")
    .where({ id })
    .first();
}

// get a user by username
function getUserByUsername(username) {
  return db("users")
    .where({ username })
    .first();
}

// add a user
function addUser(user) {
  return db("users")
    .insert(user)
    .then(ids => ({ id: ids[0] }));
}

// edit a user
function editUser(id, user) {
  return db("users")
    .where({ id })
    .update(user);
}

// delete a user
function deleteUser(id) {
  return db("users")
    .where({ id })
    .del();
}
