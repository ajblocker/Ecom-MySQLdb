//password protection
require('dotenv').config()
const express = require('express');
const mysql = require("mysql");
//request id to request object log
const addRequestId = require('express-request-id')();
const morgan = require('morgan');
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

//logs to stderr for status codes >400 
//skip certain extensions
app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));

//and logs to stdout for codes <400
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
// app.get('/', (req, res) => res.send('Welcome'))

router.use("/api", router); {
}; 


//gets and fetch all contacts data
app.get('api/contacts', (req, res) => {
    connection.query("SELECT * FROM contacts", [contacts], (err, data) =>{
        res.json(data)
    })
})

//product filter
app.get('/api/productfilter/:query', (req, res) => {
    let product = req.params.productid
    connection.query("SELECT product_id, product_name FROM products WHERE product_id = ?", [product], (err, data) => {
        res.json(data)
    })
})

//CORS issue for connection code
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//server
app.listen(PORT, function () {
    console.log(`Server listening on Port ${PORT}`)
})


