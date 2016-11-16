/**
 * app.js
 *
 * @author: Tyler Walker <tyler@lifeblue.com>
 * @description: This is the main script for NodeSDT
 *
 */
;(function(){
    const PhantomCalls = require('./util/phantom/phantomjs-controller');

    // Connect to ElasticSearch client
    var elasticController = require('./util/elasticsearch/elastic-controller');

    // Create phantom-tests index
    elasticController.createIndex('phantom-tests').then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });

    PhantomCalls.getPageLoadData('http://chadtylerwalker.com', 1200, 800).then(result => {
        console.log('Page loaded', result[0].url);
        console.log('Total time for page load:', result[0].totalLoadTime);
        console.log('Resources Requested', result[0].page[0].resourceRequested.length);
        console.log('Resources Received', result[0].page[0].resourceReceived.length);

        // elasticController.indexDocument('phantom-tests', 'tests', result).then(response => {
        //     if (response.created) {
        //         console.log(response.result);
        //     }
        // }).catch(error => {
        //     console.log(error);
        // });

    }).catch(error => {
        console.log(error);
    });

    // Search ES for all documents with the title exists
    elasticController.searchIndex(
        'phantom-tests',
        'title: "tests"'
    ).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    });

})();
