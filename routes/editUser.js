import express from "express";
import { users } from "../data/users.js";

const router = express.Router();

router.patch("/user/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user =>
        user.id === id
    );

    //

    res.send(users);
});

export default router;