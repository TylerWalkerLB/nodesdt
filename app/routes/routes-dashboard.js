import koaRouter from 'koa-router';
import 'babel-polyfill';
import 'babel-preset-react';
import View from '../util/controllers/co-controller';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { getUserByEmail, createUser } from '../util/controllers/mongodb-controller';
import { Router, Route, browserHistory } from 'react-router';

const dashboardRouter = koaRouter();

// Pages
import Login from '../components/pages/login';

dashboardRouter

    //.redirect('/dashboard', '/dashboard/login')

    .all('/dashboard', function*() {

        let container = document.getElementById('main');

        let routes = render(
            <Router history={ browserHistory }>
                <Route path="/dashboard/login" component={ Login }/>
            </Router>
        );

        Router.run(routes, Router.browserHistory, (Handler) => {
            React.render(<Handler/>, container);
        });

        this.body = yield View(ReactDOM.renderToString(markup));
    })

    // .all('/dashboard/login', function*() {
    //
    //     //let markup = ReactDOM.renderToString(Login());
    //
    //     this.body = yield View(ReactDOM.renderToString(<Login />));
    //
    // })

    .all('/dashboard/new-user', function*() {
        // let newUser = {
        //     name: 'Tyler',
        //     email: 'tyler@lifeblue.com',
        //     password: 'Madison13!'
        // };

        // getUserByEmail(newUser.email).then(res => {
        //     if (res === null) {
        //         createUser(newUser).then(res => {
        //             console.log(res);
        //         }).catch(err => {
        //             console.log(err);
        //         });
        //     } else {
        //         console.log('User '+newUser.email+' already exists');
        //     }
        // }).catch(err => {
        //     console.log(err);
        // });

        this.body = 'new user created';

    })

    .all('/dashboard/admin', function*() {
        this.body = 'login page reached';
    });

export { dashboardRouter as default }
