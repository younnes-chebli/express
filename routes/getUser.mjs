import express from "express";
import { getUser } from "../database/database.mjs";

const router = express.Router();

router.get("/user/:id", async (req, res) => {
    const id = req.params.id;
    const user = await getUser(id);
    res.send(user);
});

export default router;