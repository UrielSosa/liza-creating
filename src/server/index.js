const express = require('express');
const cors = require('cors');
const server = express();

/* settings */
server.use(express.json());
server.use(cors());

/* routes */
const homeRouter = require('../routes/home');
const productRouter = require('../routes/products');
server.use('/', homeRouter);


module.exports = server;