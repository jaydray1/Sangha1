const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , app = express()
    , config = require('../config')

    app.use(bodyParser());
    app.use(cors());

    app.use(express.static(__dirname + "./../build"));

    app.all('/*', (req, res) => {
        res.sendFile('index.html', {root: __dirname + './../build'});
    } )

    app.listen(config.port, () => {console.log('Listening on port ${config.port}');});