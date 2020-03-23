const db = require("../data/db-config");

module.exports = {
  find,
  findBy,
  add,
  findById
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

// function add(user) {
//   return db("users")
//     .insert(user)
//     .then(() => {
//       return db("users")
//         .where({ username: user.username })
//         .first();
//     });
// }

function add(user) {
    const [id] = await db("users").insert(user, "id");
    return findById(id);
};

function findById(id) {
    return db("users").where({id}).select("id", "username").first();
};
