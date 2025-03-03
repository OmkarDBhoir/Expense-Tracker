const pool = require('../db/db');

exports.addIncome = async (req, resp) => {
    try {
        const { title, amount, category, description, date } = req.body;
        const createBy = 'portal';
        const createdOn = new Date();
        // if (!title || !category || !description || !date) {
        if (!title || !category || !description) {
            return resp.status(400).json({ message: "All fields are required!" });
        }
        if ((typeof amount) !== 'number' || amount <= 0) {
            return resp.status(400).json({ message: "Amount must be a positive number" });
        }

        // const result = await pool.query(`INSERT INTO dev.income (id, title, amount, category, description, createon, createby) VALUES(nextval('dev.income_id_seq'::regclass), $1, $2, $3, $4, $5, $6);`, [title, amount, category, description, date, createBy]);
        const result = await pool.query(`INSERT INTO income (id, title, amount, category, description, userid, createon) VALUES(nextval('income_id_seq'::regclass), $1, $2, $3, $4, $5, $6);`, [title, amount, category, description, createdOn, createBy]);
        return resp.status(201).json({ message: "Income added" });
    } catch (error) {
        console.error(error);
        resp.status(500).json({ message: "server error: " + error.message });
    }
}

exports.getIncome = async (req, resp) => {
    try {
        const result = await pool.query(`select * from income i order by createon desc`);
        return resp.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        return resp.status(500).json({ message: "server error: " + error.message });
    }
}

exports.deleteIncome = async (req, resp) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        console.log("id", id);
        const result = await pool.query(`SET SQL_SAFE_UPDATES = 0;  delete from income where id=${id};`);
        console.log(result);
        resp.status(200).json({ message: 'Income deleted' });
    } catch (error) {
        console.error(error);
        return resp.status(500).json({ message: "Server error: " + error.message });
    }
}