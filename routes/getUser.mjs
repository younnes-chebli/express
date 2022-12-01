import express from "express";
import { getUser } from "../database/database.mjs";

const router = express.Router();

// router.get("/user/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user =>
//         user.id === id
//     );
//     res.send(user);
// });

router.get("/user/:id", async (req, res) => {
    const id = req.params.id;
    const user = await getUser(id);
    res.send(user);
});

export default router;