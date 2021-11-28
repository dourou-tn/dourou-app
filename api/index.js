const express = require('express');

const authController = require('./controllers/auth');
const usersController = require('./controllers/users');
const rolesController = require('./controllers/roles');

const app = express();

app.use(express.json());

app.use('/auth', authController);
app.use('/user', usersController);
app.use('/role', rolesController);

module.exports = app
