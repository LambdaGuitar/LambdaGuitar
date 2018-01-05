// NGROK VERSION
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const tabsEndpoints = require('./endpoints/tabsEndpoints.js');
const usersEndpoints = require('./endpoints/usersEndpoints.js');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(cors());

server.use(express.static(path.resolve(__dirname, './client/build')));

server.get('/api', function(req, res) {
    res.status(200).json({ message: 'sent from api' });
});

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

server.use('/api/tabs', tabsEndpoints);

server.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

server.listen(3000, () => console.log('running on port 3000'));



// ORIGINAL 
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const tabsEndpoints = require('./endpoints/tabsEndpoints.js');
// const usersEndpoints = require('./endpoints/usersEndpoints.js');

// const server = express();

// server.use(bodyParser.json());
// server.use(cors());

// server.use('/api/tabs', tabsEndpoints);
// // server.use('/api/users', usersEndpoints);

// server.listen(3000, () => console.log('running on port 3000'));