import express from "express";
import { users } from "../data/users.mjs";

const router = express.Router();

router.get("/user/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user =>
        user.id === id
    );
    res.send(user);
});

export default router;