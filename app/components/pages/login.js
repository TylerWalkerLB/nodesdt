/**
 * login.js
 *
 * @author: Tyler Walker <tyler@lifeblue.com>
 * @description: This script handles the login page for the dashboard
 *
 */
import React from 'react';
import 'babel-polyfill';

// Components
import Header from '../navigation/header';

export default function renderPage() {
    return React.createElement(Header);
}
