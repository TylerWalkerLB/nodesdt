import koaRouter from 'koa-router';
import 'babel-polyfill';
import 'babel-preset-react';
import View from '../util/controllers/co-controller';
import React from 'react';
import ReactDOM from 'react-dom/server';

const dashboardRouter = koaRouter();

// Pages
import Login from '../components/pages/login';

dashboardRouter

    .redirect('/dashboard', '/dashboard/login')

    .all('/dashboard/login', function*() {

        let markup = ReactDOM.renderToString(Login());

        this.body = yield View(markup);

    })

    .all('/dashboard/admin', function*() {
        this.body = 'login page reached';
    });

export { dashboardRouter as default }
