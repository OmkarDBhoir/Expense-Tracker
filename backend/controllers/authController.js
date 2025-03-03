const pool = require('../db/db');
const { v4: uuidv4 } = require('uuid');
const PasswordUtils = require('../utils/PasswordUtils');
const jwt = require('jsonwebtoken');

exports.login = async (req, resp) => {
    const { username, password } = req.body;
    console.log(req.body);
    try {
        const result = await pool.query(`Select * from users where username='${username}'`);
        if (result.rows.length === 0) {
            resp.status(400).json({ message: "User doesn't exist" });
            return;
        }
        if (!PasswordUtils.comparePassword(password, result.rows[0].password)) {
            resp.status(400).json({ message: "Wrong password" });
            return;
        }

        const user = result.rows[0];
        const userData = {
            userId: user.userid,
            username: user.username,
            isAuthenticated: true
        }

        const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        resp.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        resp.status(500).json({ message: "Server error" + error.message });
    }
}

exports.signup = async (req, resp) => {
    try {
        const { username, email, password } = req.body;
        const createdOn = new Date();
        const userId = uuidv4();
        const encryptedPasswd = await PasswordUtils.hashPassword(password);
        const result = await pool.query("INSERT INTO dev.users (id, userid, username, email, password, createdon) VALUES(nextval('user_id_seq'::regclass), $1, $2, $3, $4, $5) RETURNING ID;", [userId, username, email, encryptedPasswd, createdOn]);

        const userData = {
            userId: userId,
            username: username,
            isAuthenticated: true
        }

        const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        resp.status(201).json({ message: "User added!", token });
    } catch (error) {
        console.error(error)
        resp.status(500).json({ error: error.message });
    }
};