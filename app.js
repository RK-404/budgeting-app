// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to my Budgets Plan");
});

const budgetsController = require("./controllers/budgetsController");
app.use("/transactions", budgetsController);

// 404 PAGE
app.get("*", (req, res) => {
    res.json({ error: "Not found" });
});

// EXPORT
module.exports = app;
