import express from "express";
const app = express();
const PORT = 3001;
import defaultRouter from "./routes/defaultRoute.js";
import getUsersRouter from "./routes/getUsers.js";
import getUserRouter from "./routes/getUser.js";
import addUserRouter from "./routes/addUser.js";
import editUserRouter from "./routes/editUser.js";

app.use(express.json());

app.use(defaultRouter);

app.use(getUsersRouter);

app.use(getUserRouter);

app.use(addUserRouter);

app.use(editUserRouter);

app.listen(PORT, () => {
    console.log(`Hey server is running on port ${PORT}`);
});