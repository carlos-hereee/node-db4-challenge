const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('testing node db4 challenge server')
})

module.exports = server;