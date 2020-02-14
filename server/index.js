require('dotenv').config();
const express = require('express');
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const contrl = require('./controller');
const massive = require('massive');
const app = express();


app.use(express.json());

app.get('/api/inventory', contrl.getInventory);
// app.put('/api/product' contrl.addProduct);
// app.delete('/api/inventory/:id', contrl.deleteInventory);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('DB Connected')
    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on ${SERVER_PORT}`)
    })
})