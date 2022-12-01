import express from "express";

const defaultRouter = express.Router();

defaultRouter.get("/", (req, res) => {
    res.send("Hiii");
});

export default defaultRouter;