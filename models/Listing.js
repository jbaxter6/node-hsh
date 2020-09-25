const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./User');

const Listing = db.define('listing', {
    description: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    }
});

// relations
Listing.belongsTo(User);
User.hasMany(Listing);



// schema created
Listing.sync().then(() => {
    console.log('Listing Table Created')
});


module.exports = Listing;

// A.hasOne(B, { /* options */ });
// A.belongsTo(B, { /* options */ });
// A.hasMany(B, { /* options */ });
// A.belongsToMany(B, { through: 'C', /* options */ });