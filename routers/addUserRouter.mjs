import express from "express";
import addUser from "../database/queries/addUser.mjs";

const addUserRouter = express.Router();

addUserRouter.post("/user", async (req, res) => {

    await addUser(req.body);

    res.send(req.body);
});

export default addUserRouter;