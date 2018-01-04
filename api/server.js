const express = require('express');
const bodyParser = require('body-parser');

const tabsEndpoints = require('./endpoints/tabsEndpoints.js');
const usersEndpoints = require('./endpoints/usersEndpoints.js');

const server = express();

server.use(bodyParser.json());

server.use('/api/tabs', tabsEndpoints);
// server.use('/api/users', usersEndpoints);

server.listen(3000, () => console.log('running on port 3000'));
