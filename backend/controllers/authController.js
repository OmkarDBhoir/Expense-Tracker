const pool = require('../db/db');
const { v4: uuidv4 } = require('uuid');
const PasswordUtils = require('../utils/PasswordUtils');

exports.login = async (req, resp) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query(`Select * from users where username='${username}'`);
        if (result === null) {
            resp.status(400).json({ message: "User doesn't exist" });
            return;
        }
        if (!PasswordUtils.comparePassword(password, result.rows[0].password)) {
            resp.status(400).json({ message: "Wrong password" });
            return;
        }

        resp.status(200).json({ message: "Login successful!" });
    } catch (error) {
        console.error(error);
        resp.status(500).json({ message: "Server error" + error.message });
    }
}

exports.register = async (req, resp) => {
    try {
        const { firstName, lastName, password, age, username } = req.body;
        const createdOn = new Date();
        const userId = uuidv4();
        const createdBy = 'Portal';
        const encryptedPasswd = await PasswordUtils.hashPassword(password);
        const result = await pool.query("INSERT INTO dev.users (userid, username, firstname, lastname, password, age, createdon, createdby) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING ID;", [userId, username, firstName, lastName, encryptedPasswd, age, createdOn, createdBy]);
        resp.status(201).json({ message: "User added", userId: result.rows[0].id, userId });
    } catch (error) {
        console.error(error)
        resp.send(500).json({ error: error.message });
    }
};