const Sequelize = require('sequelize');
const db = require('../config/database');
const Listing = require('./Listing');

const User = db.define('User', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});

// relations
// User.hasMany(Listing);


// Schema created
User.sync().then(() => {
    console.log('User Table Created')
});

module.exports = User;

// A.hasOne(B, { /* options */ });
// A.belongsTo(B, { /* options */ });
// A.hasMany(B, { /* options */ });
// A.belongsToMany(B, { through: 'C', /* options */ });