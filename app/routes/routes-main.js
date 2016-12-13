// Dependencies
import PhantomController from '../util/phantom/phantomjs-controller';
import ElasticController from '../util/elasticsearch/elastic-controller';
import koaRouter from 'koa-router';
import embedRoutes from './routes-embed';
import 'babel-polyfill';

//var app = require('koa');
//let router = koaRouter();

const router = koaRouter();

router

    .get('/', function*() {
        this.body = 'welcome ya filthy animal';
    })

    .get('/phantom', function*() {

        ElasticController.clientInfo().then(response => {
            console.log(response);
        });

        PhantomController.getPageLoadData('http://heifer.org/').then(response => {
            console.log(response);
        });

    })

    .use(embedRoutes.routes())

    .use(embedRoutes.allowedMethods());

export { router as default }
