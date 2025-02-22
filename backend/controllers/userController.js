const pool = require('../db/db');
const { v4: uuidv4 } = require("uuid");
const PasswordUtils = require('../utils/PasswordUtils');


exports.createUser = async (req, resp) => {
    try {
        const { firstName, lastName, password, age } = req.body;
        const createdOn = new Date();
        const userId = uuidv4();
        const createdBy = 'Portal';
        const encryptedPasswd = await PasswordUtils.hashPassword(password);
        const result = await pool.query("INSERT INTO users (userid, firstname, lastname, password, age, createdon, createdby) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING ID;", [userId, firstName, lastName, encryptedPasswd, age, createdOn, createdBy]);
        resp.status(201).json({ message: "User added", userId: result.rows[0].id, userId });
    } catch (error) {
        console.error(error)
        resp.send(500).json({ error: error.message });
    }
};

exports.getAllUser = async (req, resp) => {
    try {
        const getUsers = await pool.query('select * from users');
        resp.status(200).json(getUsers.rows);
    } catch (error) {
        console.error(error)
        resp.status(500).json({ error: error.message })
    }
}