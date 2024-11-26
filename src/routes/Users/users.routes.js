import express from "express";
import userController from "../../controllers/Users/user.controller.js";

const userRoutes = express.Router();

userRoutes.post("/createUser", userController.create);

export default userRoutes;