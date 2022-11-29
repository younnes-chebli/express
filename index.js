//express
import express from "express";
const app = express();
const PORT = 3001;

//SERVER
app.use(express.json());

app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Hey server is running on port ${PORT}`);
});