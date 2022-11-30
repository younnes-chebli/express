import express from "express";
const app = express();
const PORT = 3001;
import defaultRouter from "./routes/defaultRoute.mjs";
import getUsersRouter from "./routes/getUsers.mjs";
import getUserRouter from "./routes/getUser.mjs";
import addUserRouter from "./routes/addUser.mjs";
import editUserRouter from "./routes/editUser.mjs";
import deleteUserRouter from "./routes/deleteUser.mjs";

app.use(express.json());

app.use(defaultRouter);

app.use(getUsersRouter);

app.use(getUserRouter);

app.use(addUserRouter);

app.use(editUserRouter);

app.use(deleteUserRouter);

app.listen(PORT, () => {
    console.log(`Hey server is running on port ${PORT}`);
});