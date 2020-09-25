const Sequelize = require('sequelize')

module.exports = new Sequelize('hshnode', 'jr', 'Nelson77', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});