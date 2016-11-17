;(function(){
    // Dependencies
    //const PhantomCalls = require('../util/phantom/phantomjs-controller');
    const express = require('express');

    // Router
    var router = express.Router();

    router.get('/', function(req, res) {
        res.send('welcome ya filthy animal');
    });

    router.get('/embed', function(req, res) {
        console.log('API is working');
        res.send('embed reached');
    });

    // Modules
    module.exports = router;
})();
