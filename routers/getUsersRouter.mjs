import express from "express";
import getUsers from "../database/queries/getUsers.mjs";

const getUsersRouter = express.Router();

getUsersRouter.get("/users", async (req, res) => {
    const users = await getUsers();
    res.send(users);
});

export default getUsersRouter;