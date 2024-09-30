import express from "express";

//create instance of the express router
//Router is a class under express

const router = express.Router();

//Define a route for getting user information
router.get("/profile", (req, res) => {
  res.send("User Profile Page");
});

//Define a route for updating user information
router.put("/profile", (req, res) => {
  res.send("Update User Profile");
});

//Define a route for deleting user information
router.delete("/profile", (req, res) => {
  res.send("Delete User Profile");
});

export default router;
