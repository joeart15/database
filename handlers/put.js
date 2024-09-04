const router = require("express").Router();
const mysql = require("mysql");

const con = mysql.createConnection({
    host: process.env.MYSQL_HOSTNAME,
    user: process.env.MYSQL_USERNAME,
    password: "",
    database: process.env.MYSQL_DATABASE
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const title = data.title

    con.query(`UPDATE todos SET title='${title}' WHERE id=${id}`, (err) => {
        res.json({message:"This has been updated"})
    })
});

module.exports={
    puts:router
};