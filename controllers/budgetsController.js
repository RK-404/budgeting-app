const express = require("express");
const budgets = express.Router();
const trasactions = require("../models/transactions");

// INDEX
budgets.get("/", (req, res) => {
    res.json(trasactions);
});

// budgets.get ("/", (req, res) => {
//     const foo = JSON.parse(JSON.stringify(budgetsArray)) ;
//     res.status(200).json(foo);
// });

// SHOW
budgets.get("/:arrayIndex", (req, res) => {
    if (trasactions[req.params.arrayIndex]) {
        res.json(trasactions[req.params.arrayIndex]);
    }
    else {
        res.status(404).redirect("/404");
    }
});

// CREATE
budgets.post("/", (req, res) => {
    trasactions.push(req.body);
    res.json(trasactions[trasactions.length - 1]);
});

// DELETE
budgets.delete("/:arrayIndex", (req, res) => {
    if (trasactions[req.params.arrayIndex]) {
        const deleteBudget = trasactions.splice(req.params.arrayIndex, 1);
        res.json(deleteBudget);
    }
    else {
        res.status(404).redirect("/404");
    }
});

// UPDATE
budgets.put("/:arrayIndex", (req, res) => {
    if (trasactions[req.params.arrayIndex]) {
        trasactions[req.params.arrayIndex] = req.body;
        res.status(200).json(trasactions[req.params.arrayIndex]);
    }
    else {
        res.status(404).redirect("/404");
    }
});

module.exports = budgets;
