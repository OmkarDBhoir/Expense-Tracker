const {Pool} = require("pg");
require("dotenv").config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    options: `-c search_path=${process.env.DB_SCHEMA}`
});

const testConnection = async() => {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Connection successful", result.rows[0]);
    } catch (error) {
        console.error("Error connecting to database: ", err.message);
    }
}

// testConnection();


module.exports = pool;