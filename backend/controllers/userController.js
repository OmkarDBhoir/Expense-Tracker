const pool = require('../db/db');
const { v4: uuidv4 } = require("uuid");
const PasswordUtils = require('../utils/PasswordUtils');


exports.createUser = async (req, resp) => {
    try {
        const { username, email, password } = req.body
        const encryptedPasswd = await PasswordUtils.hashPassword(password);
        const result = await pool.query("INSERT INTO dev.users (id, username, email, password, isactive, createdon) VALUES(nextval('user_id_seq'::regclass), $1, $2, $3, true, NOW()) RETURNING ID;", [username, email, encryptedPasswd]);
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