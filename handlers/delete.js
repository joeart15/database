const router = require("express").Router();
const mysql = require("mysql");

const con = mysql.createConnection({
    host: process.env.MYSQL_HOSTNAME,
    user: process.env.MYSQL_USERNAME,
    password: proccess.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    con.query(`DELETE FROM todos WHERE id=${id}`, (err) => {
        res.json({message:"This has been deleted"})
    })
});

module.exports={
    del:router
};