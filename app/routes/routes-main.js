;(function(){
    // Dependencies
    const PhantomCalls = require('../util/phantom/phantomjs-controller');
    const ElasticController = require('../util/elasticsearch/elastic-controller');

    //var app = require('koa');
    var router = require('koa-router')();

    router

        .get('/', function*() {
            this.body = 'welcome ya filthy animal';
        })

        .get('/embed', function*() {
            console.log('API is working');
            this.body = 'embed reached';
        })

        .get('/phantom', function*() {

            ElasticController.clientInfo().then(response => {
                console.log(response);
            });

            PhantomCalls.getPageLoadData('http://heifer.org/').then(response => {
                console.log(response);
            });

        });

    // Modules
    module.exports = router;
})();
