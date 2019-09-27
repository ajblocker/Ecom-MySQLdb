//password protection
require('dotenv').config()
const express = require('express');
const mysql = require("mysql");
//request id to request object log
const addRequestId = require('express-request-id')();
//log http request
const morgan = require('morgan');
//helps secure app by setting various http headers
const helmet = require('helmet');
const frameguard = require('frameguard');
const router = express.Router()

const app = express()
const PORT = 3002


//accesses middleware
//parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(addRequestId);
//prevent anyone from putting in an iframe on clickjacking
app.use(helmet.frameguard({ action: 'deny'}));


app.get('/', (req, res) => {
    console.log('hello world')
    res.status(200).send()
})

//object with all defined tokens
morgan.token('id', function getId(req) {
    return req.id
});

//logger format of predefied tokens given status code of response
var loggerFormat = ':id [:date[web]] "method :url" :status :response-time';

//logs to stderr for status codes <400 
//skip certain extensions
app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));

//and logs to stdout for codes >400
app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode >= 400
    },
    stream: process.stdout
}));

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
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
 //perform select query
    connection.query("SELECT product_name, category FROM products", function(err, data){
        console.table(data)
    })
});

////////api/////////

//index
app.get('/', (req, res) => res.send('Welcome'))

app.use("/api", router); {
}; 

app.get('/api/products', (req, res) => {
    connection.query("Select * from products  p LEFT JOIN  price pr ON pr.id = p.id", (err, data) =>{
        res.send(data)
    })
})

//gets and fetch all contacts data
app.get('/api/contacts', (req, res) => {
    connection.query("SELECT id, contact_name, contact_number, contact_message FROM contacts", (err, data) =>{
        res.send(data)
    })
})

//product filter
app.get('/api/productfilter/:category', (req, res) => {
    let category = req.params.category
    connection.query("SELECT * FROM products WHERE category = ?", [category], (err, data) => {
        res.send(data)
    })
})


//server
app.listen(PORT, function () {
    console.log(`Server listening on Port ${PORT}`)
})
