import express from "express";
import { users } from "../data/users.mjs";

const router = express.Router();

router.get("/users", (req, res) => {
    res.send(users);
});

export default router;