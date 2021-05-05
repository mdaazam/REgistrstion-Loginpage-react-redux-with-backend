const mongoose = require('mongoose');
const dotenv = require("dotenv");
const express = require('express');
const bodyperser=require('body-parser');
const cors=require("cors");

const app = express();

dotenv.config({ path: './config.env' })
require("./db/conn");
//const User = require('./model/userSchema')

app.use(express.json());

app.use(bodyperser.urlencoded({
    extended : true
}))

//content type
app.use(bodyperser.json())

//cross platform api working
app.use(cors());


app.use(require('./router/auth'));

const PORT = process.env.PORT;

//middleware
const middleware = (req, res, next) => {
    console.log(`Hello I am middleware`);
    next();
};


app.get('/', (req, res) => {
    res.send(`Hello World from server app.js`);
});

app.get('/about', middleware, (req, res) => {
    console.log(`Hello by About`)
    res.send(`Hello World from the server`);
});

app.get('/developers', (req, res) => {
    res.send(`Hello World from Developers`);
});
console.log(`is this printing after installing nodemon`);

app.listen(PORT, () => {
    console.log(`server is running on port no ${PORT}`)
})