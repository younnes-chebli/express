import express from "express";
import { users } from "../data/users.mjs";

const router = express.Router();

router.patch("/user/:id", (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find(user =>
        user.id === userId
    );
    const { firstName, lastName, email, ip } = req.body;

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.ip = ip;

    res.send(users);
});

export default router;