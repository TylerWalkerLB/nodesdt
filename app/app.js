const PhantomCalls = require('./phantom/phantomjs-calls');
const Promise = require('promise');
const mongoose = require('mongoose');

;(function(){
    // Connect to MongoDB
    var mongoConfig = require('./config/configdb');
    mongoose.connect(mongoConfig.url);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
        console.log('connected')
    });

    var sdtSchema = mongoose.Schema;

    PhantomCalls.getPageTimings('http://www.chadtylerwalker.com', 1200, 800).then(result => {
        let allPageTimings = JSON.parse(result);
        console.log('Total time for page load:',allPageTimings[0].totalLoadTime);
    });
})();
