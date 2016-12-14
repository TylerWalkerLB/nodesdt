import koaRouter from 'koa-router';
import 'babel-polyfill';

const embedRouter = koaRouter();

/**
 * Returns an array from the query parameters attached to a tracking pixel
 *
 * @param q
 * @returns {Promise}
 */
let buildQueryArray = function(q) {

    return new Promise((resolve, reject) => {

        if (q === '' || q === null || q === {}) {
            reject(new Error('Query object empty'));
        }

        /**
         * Query Response data
         */
        let returnObj = {

            location: {
                fullURL: q.locationProtocol + '//' + q.locationHost + q.locationPathname,
                protocol: q.locationProtocol,
                host: q.locationHost,
                pathname: q.locationPathname
            },

            timings: {
                redirectStart: q.redirectStart,
                redirectEnd: q.redirectEnd,
                unloadEventStart: q.unloadEventStart,
                unloadEventEnd: q.unloadEventEnd,
                fetchStart: q.fetchStart,
                domainLookupStart: q.domainLookupStart,
                domainLookupEnd: q.domainLookupEnd,
                connectStart: q.connectStart,
                connectEnd: q.connectEnd,
                requestStart: q.requestStart,
                responseStart: q.responseStart,
                responseEnd: q.responseEnd,
                domLoading: q.domLoading,
                domInteractive: q.domInteractive,
                domContentLoadedEventStart: q.domContentLoadedEventStart,
                domContentLoadedEventEnd: q.domContentLoadedEventEnd,
                loadEventStart: q.loadEventStart,
                loadEventEnd: q.loadEventEnd
            },

            navigator: {
                oscpu: q.oscpu,
                platform: q.platform,
                userAgent: q.userAgent,
                language: q.language
            }
        };

        resolve(returnObj);
    });
};

embedRouter

    .get('/embed', function*() {
        console.log('Embed route reached');
        console.log(this.query);
        this.body = 'embed route reached';
    })

    .get('/embed/tracking/:file', function*() {

        let fullQuery = this.query;

        buildQueryArray(fullQuery).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        });

        let filePath = this.path.split('/embed')[1];

        // redirect to serve the image
        this.redirect(filePath);
    });

export { embedRouter as default }
