import express from "express";
import getUser from "../database/queries/getUser.mjs";

const getUserRouter = express.Router();

getUserRouter.get("/user/:id", async (req, res) => {
    const id = req.params.id;
    const user = await getUser(id);
    res.send(user);
});

export default getUserRouter;