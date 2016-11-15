/*
* ElasticSearch Controller
*
* Description: This script provides access to the ElasticSearch client from any view and many elastic functions through modules
*
 */

;(function(){
    const Elastic = require('elasticsearch');

    // include the db config
    const dbConfig = require('../../config/configdb');

    // Connects to the ES Client
    var esClient = new Elastic.Client({
        host: dbConfig.url,
        log: dbConfig.log
    });

    // return the ES Client info
    var clientInfo = function() {
        return new Promise((resolve, reject) => {
            esClient.info({
                requestTimeout: 3000
            }).then(body => {
                resolve(body);
            }).catch(error => {
                reject(error);
            });
        });
    };

    // create an index in the client. checks to see if index exists before creating
    var createIndex = function(index) {
        return new Promise((resolve, reject) => {
            esClient.indices.exists({
                index: index
            }).then(response => {
                if (!response) {
                    esClient.indices.create({
                        index: index
                    }).then(response => {
                        if (!response.acknowledged) {
                            resolve(true);
                        } else {
                            reject(new Error("There was an error in creating the index", index));
                        }
                    }).catch(error => {
                        reject(new Error('create had an error:', error));
                    });
                } else {
                    reject(new Error('The index ' + index + ' is already created'));
                }
            }).catch(error => {
                reject(error);
            });
        });
    };

    // export modules
    module.exports.esClient = esClient;
    module.exports.clientInfo = clientInfo;
    module.exports.createIndex = createIndex;
})();
