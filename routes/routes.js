const express = require('express');
const mysql = require("mysql");
const router = express.Router()
const app = express();


//creates database connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: '8325055Ab',
    database: "dB_schema"
});

//assign thread identity as owner of connection
//initialize a new connection
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id" + connection.threadId);
//  //perform select query
//     connection.query("SELECT product_name, category FROM products", function(err, data){
//         console.table(data)
//     })

// });


    //gets and fetch all of the products and associated prices from products and pricing tables
router.get('/products', (req, res) => {
    connection.query("Select * from products  p LEFT JOIN  price pr ON pr.id = p.id", (err, data) =>{
        res.json(data)
        console.log('hello world')

    })
})

module.exports = router;