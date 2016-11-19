/*
* ElasticSearch Controller
*
* Description: This script provides access to the ElasticSearch client from any view and many elastic functions through modules
*
* References:
* https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html
* https://www.npmjs.com/package/elasticsearch
*
 */

;(function(){
    const Elastic = require('elasticsearch');

    // include the db config
    const appConfig = require('../../config/config');

    /**
     * Connects to the ES Client
     */
    var esClient = new Elastic.Client({
        host: appConfig.elastic_search_url,
        log: appConfig.elastic_search_log
    });

    /**
     * Return the ES Client info
     * ES API: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-info
     *
     * @returns {Promise}
     */
    var clientInfo = function() {
        return new Promise((resolve, reject) => {
            esClient.info({
                requestTimeout: 3000
            }).then(body => {
                resolve(body);
            }).catch(error => {
                reject(new Error(error));
            });
        });
    };

    /**
     * Returns true if an index exists
     * ES API: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-indices-exists
     *
     * @param index
     * @returns {Promise}
     */
    var ifIndexExists = function(index) {
        return new Promise((resolve, reject) => {
            esClient.indices.exists({
                index: index
            }).then(exists => {
                resolve(exists);
            }).catch(error => {
                reject(new Error(error));
            });
        });
    };

    /**
     * Create an index in the client. Checks to see if index exists before creating
     * ES API: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-indices-create
     *
     * @param index
     * @returns {Promise}
     */
    var createIndex = function(index) {
        return new Promise((resolve, reject) => {
            esClient.indices.exists({
                index: index
            }).then(exists => {
                if (!exists) {
                    esClient.indices.create({
                        index: index
                    }).then(response => {
                        if (!response.acknowledged) {
                            resolve(true);
                        } else {
                            reject(new Error("There was an error in creating the index", index));
                        }
                    }).catch(error => {
                        reject(new Error(error));
                    });
                } else {
                    resolve('The index ' + index + ' is already created');
                }
            }).catch(error => {
                reject(new Error(error));
            });
        });
    };

    /**
     * Create a document in the specified index. Checks to see if the document exists before creating
     * ES API: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-create
     *
     * @param index
     * @param document
     * @param body
     * @param id
     * @returns {Promise}
     */
    var createDocument = function(index, document, body, id) {
        return new Promise((resolve, reject) => {
            esClient.exists({
                index: index,
                type: document,
                id: id
            }).then(exists => {
                if (!exists) {
                    esClient.create({
                        index: index,
                        type: document,
                        id: id,
                        timestamp: Date.now(),
                        body: body
                    }).then(response => {
                        resolve(response);
                    }).catch(error => {
                        reject(new Error(error))
                    });
                } else {
                    resolve('The document "' + document + '" already exists in the "' + index + '" index');
                }
            }).catch(error => {
                reject(new Error(error));
            });
        });
    };

    /**
     * Index a document in the specified index. Same as .create() except id is auto generated
     * ES API: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-index
     *
     * @param index
     * @param document
     * @param body
     * @returns {Promise}
     */
    var indexDocument = function(index, document, body) {
        return new Promise((resolve, reject) => {
            esClient.index({
                index: index,
                type: document,
                timestamp: Date.now(),
                body: {
                    body
                }
            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(new Error(error))
            });
        });
    };

    /**
     * Search an index for results based of query.
     * query should be valid Lucene query
     *
     * ES API Reference: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-search
     * Apache Lucene: https://lucene.apache.org/core/2_9_4/queryparsersyntax.html
     *
     *    queryParameter = 'title: "tests"';
     *
     *    searchIndex('phantom-tests', queryParameter);
     */
    var searchIndex = function(index, query) {
        return new Promise((resolve, reject) => {
            esClient.search({
                index: index,
                q: query
            }).then(result => {
                resolve(result);
            }).catch(error => {
                reject(new Error(error));
            });
        });
    };


    // export modules
    module.exports.esClient = esClient;
    module.exports.clientInfo = clientInfo;
    module.exports.createIndex = createIndex;
    module.exports.createDocument = createDocument;
    module.exports.indexDocument = indexDocument;
    module.exports.searchIndex = searchIndex;
    module.exports.ifIndexExists = ifIndexExists;

})();
