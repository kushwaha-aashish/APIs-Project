import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/agentinsightproject", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

// app.post("/register", (req, res) => {
//     res.sendStatus(200);
// });

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});