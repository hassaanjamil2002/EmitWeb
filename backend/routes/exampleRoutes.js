const express = require("express");
const Example = require("../models/ExampleModel");

const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const newExample = new Example(req.body);
        await newExample.save();
        res.status(201).json(newExample);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
