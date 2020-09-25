const Sequelize = require('sequelize');
const db = require('../config/database');

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


User.sync().then(() => {
    console.log('User Table Created')
});

module.exports = User;