
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Express on Vercel" });
});

// Initialize server
app.listen(9000, () => {
    console.log("Running on port 9000.");
});