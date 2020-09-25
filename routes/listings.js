const express = require('express');
const Listing = require('../models/Listing');
const db = require('../config/database')
const listingsRouter = express.Router();


listingsRouter.get('/', (req, res, next) => {
    Listing.findAll()
        .then( listing => res.render('listings', { listings } ))
        .catch( err => res.render('error', {error: err}) )
})


module.exports = listingsRouter