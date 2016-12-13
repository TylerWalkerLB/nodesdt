/**
 * app.js
 *
 * @author: Tyler Walker <tyler@lifeblue.com>
 * @description: This is the main script for NodeSDT
 *
 */
;(function(){
    const app = require('koa')();
    const router = require('./routes/routes-main');
    const vhost = require('koa-vhost');
    const config = require('./config/config');

    /**
     * Node server setup
     *
     * Checks if app is in development mode, then sets up a server with Koa
     */
    if (config.dev_mode) {
        // Local server with vhost
        app
            .use(router.routes())

            .use(router.allowedMethods())

            .use(vhost(config.vhost, app))

            .listen(config.port, () => {
                console.log('App listening on port 3000');
            });
    } else {
        app
            .use(router.routes())

            .use(router.allowedMethods())

            .use(vhost(config.vhost, app))

            .listen(config.port, () => {
                console.log('App listening on port 3000');
            });
    }

})();
