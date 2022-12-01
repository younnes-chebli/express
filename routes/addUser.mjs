import express from "express";
import { addUser } from "../database/database.mjs";

const router = express.Router();

router.post("/user", async (req, res) => {

    await addUser(req.body);

    res.send(req.body);
});

export default router;