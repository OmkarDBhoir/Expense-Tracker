const pool = require('../db/db');


exports.addExpense = async (req, resp) => {
    const { title, amount, category, description, date } = req.body;
    const createdBy = "Portal";
    const createdOn = new Date();

    try {
        // if(!title || !category || !description || !date) {
        if (!title || !category || !description) {
            return resp.status(400).json({ message: "All fields are mandatory!" });
        }
        if (typeof amount !== 'number' || amount <= 0) {
            return resp.status(400).json({ message: "Amount must be a positive number!" });
        }
        console.log(req.user.userid);
        // const result = await pool.query(`INSERT INTO dev.income (id, title, amount, category, description, createon, createby) VALUES(nextval('dev.income_id_seq'::regclass), $1, $2, $3, $4, $5, $6);`, [title, amount, category, description, date, createBy]);
        const result = await pool.query(`INSERT INTO expense (id, title, amount, category, description, userid, createon) VALUES(nextval('dev.income_id_seq'::regclass), '', 0, '', '', '', ''), $1, $2, $3, $4, $5, $6);`, [title, amount, category, description, req.user.userid, createdOn]);
        return resp.status(201).json({ message: "Income added" });
    } catch (error) {
        console.error(error);
        resp.status(500).json({ message: "Server error " + error.message });
    }
}

exports.getExpense = async (req, resp) => {
    try {
        const result = await pool.query(`Select * from expense`);
        return resp.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        return resp.status(500).json({ message: "Server error " + error.message });
    }
}

exports.deleteExpense = async (req, resp) => {
    const { id } = req.params;

    try {
        const result = await pool.query(`delete from expense where id=${id};`);
        resp.status(200).json({ message: "Expense deleted" });
    } catch (error) {
        console.error(error);
        resp.status(500).json({ message: "Server error " + error.message });
    }
}