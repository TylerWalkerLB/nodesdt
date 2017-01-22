# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.0.8-alpha](https://github.com/TylerWalkerLB/nodesdt/releases/tag/v0.0.8-alpha) - 2017-01-18

#### Added
- [Mongoose](http://mongoosejs.com/index.html)
- _mongodb-controller.js_ to be used as the controller for using Mongoose and MongoDB
- Moved all the controllers to one directory _util/controllers_ to help with file structure consistency
- Added [React](https://facebook.github.io/react/) as a project dependency
- Added [ReactDOM](https://www.npmjs.com/package/react-dom) as a dependency
- Added [Babel Preset React](https://www.npmjs.com/package/babel-preset-react) as a dependency
- Template building will be handled with [co](https://github.com/tj/co) and [co-views](https://github.com/tj/co-views)
- Client Dashboard will be located within this project, so:
 - Set up a _routes-dashboard.js_ to define routes for these views
 - Redirected all requests to `/` to `/dashboard` which will eventually take a user to a login screen

## [0.0.7-alpha](https://github.com/TylerWalkerLB/nodesdt/releases/tag/v0.0.7-alpha) - 2016-12-13

#### Added
- Moved embed routes to a new file _routes-embed.js_
- [koa-serve](https://github.com/adamkdean/koa-serve)
- Script to be embedded on a site that will include the _client.js_ script that builds out a query string containing window.performance.timing data and attaches it to an image request
- _client.js_ script that builds out an image request with query parameters
- Embed routes has a path that will intercept an image request, access the query parameters, then redirect to the correct image path
- Can now serve files located in the _tracking/_ directory

## [0.0.6-alpha](https://github.com/TylerWalkerLB/nodesdt/releases/tag/v0.0.6-alpha) - 2016-12-13

#### Added
- Renamed _api.js_ to _routes-main.js_ to allow for easier file naming structure as we progress into a larger routing system
- Babel dependencies for building ES2015 compatible import and export
- New build script in npm that builds the app in directory _/lib_

#### Removed
- All instances of `module.exports`. All exports are now handled with ES6 export/import

## [0.0.5-alpha](https://github.com/TylerWalkerLB/nodesdt/releases/tag/v0.0.5-alpha) - 2016-11-15

#### Added
- [Koa](http://koajs.com/)
 - A newer and less dependent version of Express. Out with the old and in with the new
- [koa-router](https://github.com/alexmingoia/koa-router)
 - Middleware for Koa to provide routing
- [koa-vhost](https://github.com/Treri/koa-vhost)
 - Virtual Host 

#### Removed
- Express.js
 - The creators of Express moved on to create the next version of Express in a separate project called Koa

## [0.0.4-alpha](https://github.com/TylerWalkerLB/nodesdt/releases/tag/v0.0.4-alpha) - 2016-11-15

#### Added
- Express.js to handle routing various HTTP requests


## [0.0.3-alpha](https://github.com/TylerWalkerLB/nodesdt/releases/tag/v0.0.3-alpha) - 2016-11-15

#### Added
- Many functions to the elastic-controller to access to ES from any file
- In order to keep consistent naming for our controllers, renamed the phantomjs controller. Will be sticking to this naming structure for further additions.


## [0.0.2-alpha](https://github.com/TylerWalkerLB/nodesdt/releases/tag/v0.0.2-alpha) - 2016-11-14

#### Added
- [ElasticSearch](https://www.elastic.co/)
- New structure to house util scripts in one directory

#### Removed
- Dropped the use of MongoDB. After further research and consultation, ES will be the best solution for now

## [0.0.1-alpha](https://github.com/TylerWalkerLB/nodesdt/releases/tag/v0.0.1-alpha) - 2016-11-13

#### Added
- This CHANGELOG file to facilitate documentation of added project features
- README now contains setup instructions
- Dependencies in app/package.json
 - [Mongoose](http://mongoosejs.com/index.html)
 - PhantomJS through [PhantomJS Prebuilt](https://www.npmjs.com/package/phantomjs-prebuilt)
 - [phantom](https://www.npmjs.com/package/phantom)
- Basic functionality of the plugin
 - app.js will connect to a MongoDB
 - When application is fired, it fires a module to get page loading statistics from a PhantomJS function
