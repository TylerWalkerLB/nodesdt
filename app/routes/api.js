;(function(){
    // Dependencies
    //const PhantomCalls = require('../util/phantom/phantomjs-controller');

    //var app = require('koa');
    var router = require('koa-router')();

    router

        .get('/', function*() {
            this.body = 'welcome ya filthy animal';
        })

        .get('/embed', function*() {
            console.log('API is working');
            this.body = 'embed reached';
        });

    // Modules
    module.exports = router;
})();
