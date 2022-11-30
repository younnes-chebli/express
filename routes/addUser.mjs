import express from "express";
import { users } from "../data/users.mjs";

const router = express.Router();

router.post("/user", (req, res) => {
    const { id, firstName, lastName, email, ip } = req.body;

    users.push({
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        ip: ip
    });

    res.send(users);
});

export default router;