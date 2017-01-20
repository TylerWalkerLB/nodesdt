import koaRouter from 'koa-router';
import 'babel-polyfill';
import 'babel-preset-react';

const dashboardRouter = koaRouter();

// Pages
import Login from '../dashboard/login';

dashboardRouter

    .redirect('/dashboard', '/dashboard/login')

    .all('/dashboard/login', function*() {
        this.body = Login();
    })

    .all('/dashboard/admin', function*() {
        this.body = 'login page reached';
    });

export { dashboardRouter as default }
