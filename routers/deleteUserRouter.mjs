import express from "express";
import deleteUser from "../database/queries/deleteUser.mjs";
import getUsers from "../database/queries/getUsers.mjs";

const deleteUserRouter = express.Router();

deleteUserRouter.delete("/user/:id", async (req, res) => {
    const id = req.params.id;
    await deleteUser(id);
    const users = await getUsers(id);
    res.send(users);
});

export default deleteUserRouter;