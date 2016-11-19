/**
 * app.js
 *
 * @author: Tyler Walker <tyler@lifeblue.com>
 * @description: This is the main script for NodeSDT
 *
 */
;(function(){
    const app = require('koa')();
    const router = require('./routes/api');

    /**
     * Node server setup
     */
    app
        .use(router.routes())
        .use(router.allowedMethods())
        .listen(3000, () => {
        console.log('App listening on port 3000');
    });

})();
