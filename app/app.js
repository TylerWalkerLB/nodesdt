;(function(){
    const PhantomCalls = require('./util/phantom/phantomjs-calls');
    const Elastic = require('elasticsearch');

    // Connect to ElasticSearch client
    var elasticController = require('./util/elasticsearch/elastic-controller');

    // Create phantom-tests index
    elasticController.createIndex('phantom-tests').then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });


    PhantomCalls.getPageTimings('http://chadtylerwalker.com', 1200, 800).then(result => {
        let allPageTimings = JSON.parse(result);
        console.log('Total time for page load:',allPageTimings[0].totalLoadTime);
        console.log('Resources Requested', allPageTimings[0].page[0].resourceRequested.length);
        console.log('Resources Received',allPageTimings[0].page[0].resourceReceived.length);
        // console.log(result);
    }).catch(error => {
        console.log('Phantom error:', error);
    });
})();
