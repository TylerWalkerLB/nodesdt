const PhantomCalls = require('./phantom/phantomjs-calls');
const Promise = require('promise');

PhantomCalls.getPageTimings('http://www.chadtylerwalker.com', 1200, 800).then(result => {
    let allPageTimings = JSON.parse(result);
    console.log(allPageTimings[0].totalLoadTime);
});

