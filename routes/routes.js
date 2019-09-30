const express = require('express');
const mysql = require("mysql");
const router = express.Router()
const app = express();


// //creates database connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DBUSER,
    password: process.env.MYPASSWORD,
    database: process.env.DATABASE
})

//gets and fetch all of the products and associated prices from products and pricing tables
router.get('/products', (req, res) => {
    connection.query("Select * from products  p LEFT JOIN  price pr ON pr.id = p.id", (err, data) =>{
        res.json(data)
        console.log('hello world')

    })
})

module.exports = router;