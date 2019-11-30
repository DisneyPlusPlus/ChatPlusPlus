const router = require("express").Router();

const Users = require("./users-model.js");

const serverError = (error) => res.status(500).json({ error, message: "Internal server error." })

// get all users
router.get("/", async (req, res) => {
  try {
    const users = await Users.getAllUsers();
    res.status(200).json({ users, message: "Successfully got all users." });
  } catch (error) {
    console.log(error);
    serverError(error);
  }
});

// get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await Users.getUserById(req.params.id);
    if (user) {
      res.status(200).json({ user, message: "Successfully got user by id." })
    } else {
      res.status(404).json({ message: "No user by that id in database." });
    }
  } catch (error) {
    console.log(error);
    serverError(error);
  }
});

// add a new user
router.post("/", async, (req, res) => {
    try {
        const username = await Users.getUserByUsername(req.body.username)
        if (!username) {
            const user = await Users.addUser(req.body)
            const returnUser = {
                id: user.id,
                username: user.username
            }
            res.status(201).json({ user: returnUser, message: "Successfully added a new user." })
        } else {
            res.status(409).json({ message: "The user you tried to create already exists."})
        }
    } catch (error) {
        console.log(error);
        serverError(error);
    }
})

// update a user
router.put("/:id", async (req, res) => {
    const user = req.body
    const userId = await Users.getUserById(req.params.id)
    try {
        const updatedUser = await Users.editUser(req.params.id, user)
        if (updatedUser) {
            res.status(200).json({ user: updatedUser, message: "Successfully edited a user." })
        } else if (!userId) {
            res.status(404).json({ message: "The user you tried to edit doesn't exist in the database." })
        }
    } catch (error) {
        console.log(error);
        serverError(error);
    }
})

// delete a user
router.delete("/:id", async, (req, res) => {
    try {
        const count = await Users.deleteUser(req.params.id)
        if (count > 0)
    } catch (error) {
        console.log(error)
    }
})