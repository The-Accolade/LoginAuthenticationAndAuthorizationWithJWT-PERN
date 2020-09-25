//Connect the server to the Database
const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    password: "renaissance",
    host: "localhost",
    port: "5432",
    database: "postit"
});

module.exports = pool;