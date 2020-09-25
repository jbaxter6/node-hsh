const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))


const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// listing routes
app.use('/listings', require('./routes/listings'));
app.use('/users', require('./routes/users'));



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))