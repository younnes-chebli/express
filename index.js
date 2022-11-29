import { users } from "./data/users.js";
import express from "express";
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hiii");
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.listen(PORT, () => {
    console.log(`Hey server is running on port ${PORT}`);
});