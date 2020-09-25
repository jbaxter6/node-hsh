const Sequelize = require('sequelize');
const db = require('../config/database');

const Listing = db.define('listing', {
    description: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    }
});

Listing.sync().then(() => {
    console.log('Listing Table Created')
});

module.exports = Listing;