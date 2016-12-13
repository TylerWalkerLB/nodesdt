// Dependencies
import * as PhantomController from '../util/phantom/phantomjs-controller';
import * as ElasticController from '../util/elasticsearch/elastic-controller';
import koaRouter from 'koa-router';
import embedRouter from './routes-embed';
import 'babel-polyfill';

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

    .use(embedRouter.routes())
    .use(embedRouter.allowedMethods());

export { router as default }
