require('dotenv').config();
const express = require('express');
const {CONNECTION_STRING} = process.env;
const contrl = require('./controller');
const massive = require('massive');
const app = express();


app.use(express.json());

massive({
    connectionString: CONNECTION_STRING
})
app.listen()