;(function() {
    // Dependencies
    const Phantom = require('phantom');

    /**
     * Get the page load data
     *
     * @param url
     * @param browserWidth
     * @param browserHeight
     * @returns {Promise}
     */
    var getPageLoadData = function(url, browserWidth = 1400, browserHeight = 900) {

        return new Promise((resolve, reject) => {
            let _ph, _page;

            // set initial data for page request
            let response = [];
            response.push( {
                url: url,
                startTime: Date.now(),
                endTime: null,
                totalLoadTime: null,
                page: [{
                    resourceRequested :[],
                    resourceReceived : []
                }]
            });

            Phantom.create().then(ph => {
                _ph = ph;
                return _ph.createPage();
            }).then(page => {
                _page = page;

                page.property('viewportSize', {width: browserWidth, height: browserHeight});

                page.on('onResourceRequested', function (requestData, networkRequest) {
                    response[0].page[0].resourceRequested.push({
                        id : requestData.id,
                        data : [{
                            url     : requestData.url,
                            time    : requestData.time,
                            headers : requestData.headers,
                            method  : requestData.method
                        }]
                    });
                });

                page.on('onResourceReceived', function (requestData, networkRequest) {
                    response[0].page[0].resourceReceived.push({
                        id : requestData.id,
                        data : [{
                            url           : requestData.url,
                            time          : requestData.time,
                            headers       : requestData.headers,
                            bodySize      : requestData.bodySize,
                            contentType   : requestData.contentType,
                            redirectURL   : requestData.redirectURL,
                            stage         : requestData.stage,
                            status        : requestData.status,
                            statusText    : requestData.statusText
                        }]
                    });
                });

                return _page.open(response[0].url);
            }).then(status => {
                if (status === 'success') {
                    //_page.render('chadtylerwalker_1.png');
                    response[0].endTime = Date.now();
                    response[0].totalLoadTime = response[0].endTime - response[0].startTime;
                    resolve(response);
                    _page.close();
                    _ph.exit();
                } else {
                    console.log("Error: Status:", status);
                }
            }).catch(console.error);
        });
    };

    // exports
    module.exports.getPageLoadData = getPageLoadData;

})();
