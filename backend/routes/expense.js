var express = require("express");
var router = express.Router();
const pool = require("../db/db");

router.get("/getExpense", (req, resp) => {
    try {
        const getExpense = pool.query("Select * from expense");
        resp.json(getExpense);
    } catch (error) {
        console.error(error);
    }
});


module.exports = router;