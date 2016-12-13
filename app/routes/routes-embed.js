import koaRouter from 'koa-router';
import 'babel-polyfill';

const embedRouter = koaRouter();

embedRouter

    .get('/embed', function*() {
        console.log('Embed route reached');
        console.log(this.query);
        this.body = 'embed route reached';
    })

    .get('/embed/tracking/:file', function*() {
        console.log(this.query);
        let filePath = this.path.split('/embed')[1];

        // redirect to serve the image
        this.redirect(filePath);
    });

export { embedRouter as default }
