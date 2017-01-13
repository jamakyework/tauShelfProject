var express = require('express');
var path = require('path');
var shelfImport = require('../models/shelf.js');

var router = express.Router();
console.log(" in shelf route");

router.get('/', function(req, res) {
    console.log('get hit');
    shelfImport.find().then(function(data) {
        res.send(data);
    });
});

router.post('/', function(req, res) {
    console.log('post hit');
    var newItem = shelfImport(req.body);
    newItem.user = req.user.username;
    newItem.save();
    res.send('post sent', 200);
});

module.exports = router;
