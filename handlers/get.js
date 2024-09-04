const router = require("express").Router();
const mysql = require("mysql");

const con = mysql.createConnection({
    host: process.env.MYSQL_HOSTNAME,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

router.get("/", (req, res) => {
    con.query("SELECT * FROM todos", (err, result, field) => {
        res.json(result)
    })
});

module.exports={
    get:router
};