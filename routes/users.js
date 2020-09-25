const express = require('express');
const User = require('../models/User');
const db = require('../config/database')
const usersRouter = express.Router();


usersRouter.get('/', (req, res, next) => {
    User.findAll()
        .then( user => res.render('users', { users } ))
        .catch( err => res.render('error', {error: err}) )
})


module.exports = usersRouter