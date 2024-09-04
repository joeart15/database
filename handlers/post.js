const router = require("express").Router();
const mysql = require("mysql");

const con = mysql.createConnection({
    host: process.env.MYSQL_HOSTNAME,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

router.post("/", (req, res) => {
    const data = req.body;
    const title = data.title;
    con.query(`INSERT INTO todos VALUES(NULL, '${title}')`, (err) => {
        res.json({message: "data inserted into the table"})
    })
});

module.exports={
    post:router
};