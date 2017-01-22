/**
 * app.js
 *
 * @author: Tyler Walker <tyler@lifeblue.com>
 * @description: This is the main script for NodeSDT
 *
 */
import Koa from 'koa';
import router from './routes/routes-main';
import vhost from 'koa-vhost';
import config from './config/config';
import serve from 'koa-serve';
import path from 'path';

const app = Koa();

/**
 * Node server setup
 *
 * Checks if app is in development mode, then sets up a server with Koa
 */
if (config.dev_mode) {
    // Local server with vhost
    app

        // Main Router
        .use(router.routes())
        .use(router.allowedMethods())

        .use(serve('tracking', path.join(__dirname, '..')))

        // Virtual host listener
        .use(vhost(config.vhost, app))

        .listen(config.port, () => {
            console.log('App listening on port 3000');
        });
} else {
    app
        .use(router.routes())
        .use(router.allowedMethods())

        .use(serve('tracking', path.join(__dirname, '..')))

        // TODO: Hook this up for production deployment
        .use(vhost(config.vhost, app))

        .listen(config.port, () => {
            console.log('App listening on port 3000');
        });
}
