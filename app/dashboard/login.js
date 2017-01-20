/**
 * login.js
 *
 * @author: Tyler Walker <tyler@lifeblue.com>
 * @description: This script handles the login page for the dashboard
 *
 */
import React from 'react';
import ReactDOM from 'react-dom/server';
import 'babel-polyfill';

// Components
import Header from '../components/header';

export default function renderPage() {
    return ReactDOM.renderToString(
        React.createElement(Header)
    );
    // return 'NodeSDT Login Page';
}
