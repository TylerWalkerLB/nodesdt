// Dependencies
import * as PhantomController from '../util/controllers/phantomjs-controller';
import * as ElasticController from '../util/controllers/elastic-controller';
import koaRouter from 'koa-router';
import embedRouter from './routes-embed';
import dashboardRouter from './routes-dashboard';
import 'babel-polyfill';

const router = koaRouter();

router

    // Redirect all request to the root into the /dashboard path
    .redirect('/', '/dashboard')

    .get('/phantom', function*() {

        ElasticController.clientInfo().then(response => {
            console.log(response);
        });

        PhantomController.getPageLoadData('http://heifer.org/').then(response => {
            console.log(response);
        });

    })

    .use(embedRouter.routes())
    .use(embedRouter.allowedMethods())

    .use(dashboardRouter.routes())
    .use(dashboardRouter.allowedMethods());

export { router as default }
