const routes = require('express').Router();
const { User } = require('./app/models');

User.create({ name: 'Bernardo', email: 'bernardo.augusto.bastos@gmail.com', password_hash: '1234' })

module.exports = routes;