// Dependencies
import PhantomController from '../util/phantom/phantomjs-controller';
import ElasticController from '../util/elasticsearch/elastic-controller';
import koaRouter from 'koa-router';
import 'babel-polyfill';

//var app = require('koa');
//let router = koaRouter();

const router = koaRouter();

router

    .get('/', function*() {
        this.body = 'welcome ya filthy animal';
    })

    .get('/embed', function*() {
        console.log('API is working');
        this.body = 'embed route reached';
    })

    .get('/phantom', function*() {

        ElasticController.clientInfo().then(response => {
            console.log(response);
        });

        PhantomController.getPageLoadData('http://heifer.org/').then(response => {
            console.log(response);
        });

    });

export { router as default }
