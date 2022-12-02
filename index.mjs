import express from "express";
const app = express();
const PORT = 3001;
import dbConnection from "./database/connection.mjs";
import defaultRouter from "./routers/defaultRouter.mjs";
import getUsersRouter from "./routers/getUsersRouter.mjs";
import getUserRouter from "./routers/getUserRouter.mjs";
import addUserRouter from "./routers/addUserRouter.mjs";
import updateUserRouter from "./routers/updateUserRouter.mjs";
import deleteUserRouter from "./routers/deleteUserRouter.mjs";

app.use(express.json());

dbConnection();

app.use(defaultRouter);

app.use(getUsersRouter);

app.use(getUserRouter);

app.use(addUserRouter);

app.use(updateUserRouter);

app.use(deleteUserRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});