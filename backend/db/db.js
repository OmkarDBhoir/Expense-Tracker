const {Pool} = require("pg");

const pool = new Pool({
    user: "victor",
    host: "localhost",
    database: "expensetracker",
    password: "victor123",
    port: 5432,
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