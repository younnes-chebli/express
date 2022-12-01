import express from "express";
import { users } from "../data/users.mjs";

const deleteUserRouter = express.Router();

deleteUserRouter.delete("/user/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user =>
        user.id === id
    );

    users.splice(user.id - 1, 1);

    res.send(users);
});

export default deleteUserRouter;