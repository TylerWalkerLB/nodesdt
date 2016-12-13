import koaRouter from 'koa-router';
import 'babel-polyfill';

const embedRouter = koaRouter();

embedRouter

    .get('/embed', function*() {
        console.log('Embed route reached');
        console.log(this.query);
        this.body = 'embed route reached';
    });

export { embedRouter as default }
