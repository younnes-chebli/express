import express from "express";
import updateUser from "../database/queries/updateUser.mjs";
import getUser from "../database/queries/getUser.mjs";

const editUserRouter = express.Router();

editUserRouter.patch("/user/:id", async (req, res) => {
    const userId = req.params.id;
    const { firstName, lastName, email, ip } = req.body;

    await updateUser(userId, firstName, lastName, email, ip);
    const updatedUser = await getUser(userId);

    res.send(updatedUser);
});

export default editUserRouter;