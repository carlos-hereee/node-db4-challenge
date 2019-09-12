const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');
const recipeBookRouter = require('./routes/recipeBookRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipe-book', recipeBookRouter)


server.get('/', (req, res) => {
    res.send('testing node db4 challenge server')
})

module.exports = server;