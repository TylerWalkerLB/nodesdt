import koaRouter from 'koa-router';
import 'babel-polyfill';

const dashboardRouter = koaRouter();

dashboardRouter


    .redirect('/dashboard', '/dashboard/login')

    .all('/dashboard/login', function*() {
        this.body = 'Dashboard login';
    })

    .all('/dashboard/admin', function*() {
        this.body = 'login page reached';
    });

export { dashboardRouter as default }
