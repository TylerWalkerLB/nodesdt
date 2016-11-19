# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.0.5-alpha](https://github.com/TylerWalkerLB/nodesdt/releases/tag/v0.0.5-alpha) - 2016-11-15
#### Removed
- Express.js
 - The creators of Express moved on to create the next version of Express in a separate project called Koa
#### Added
- (Koa)[http://koajs.com/]
 - A newer and less dependent version of Express. Out with the old and in with the new
- (koa-router)[https://github.com/alexmingoia/koa-router]
 - Middleware for Koa to provide routing
- (koa-vhost)[https://github.com/Treri/koa-vhost]
 - Virtual Host 

## [0.0.4-alpha](https://github.com/TylerWalkerLB/nodesdt/releases/tag/v0.0.4-alpha) - 2016-11-15
#### Added
- Express.js to handle routing various HTTP requests

## [0.0.3-alpha](https://github.com/TylerWalkerLB/nodesdt/releases/tag/v0.0.3-alpha) - 2016-11-15
#### Added
- Many functions to the elastic-controller to access to ES from any file
- In order to keep consistent naming for our controllers, renamed the phantomjs controller. Will be sticking to this naming structure for further additions.

## [0.0.2-alpha](https://github.com/TylerWalkerLB/nodesdt/releases/tag/v0.0.2-alpha) - 2016-11-14
#### Removed
- Dropped the use of MongoDB. After further research and consultation, ES will be the best solution for now
#### Added
- (ElasticSearch)[https://www.elastic.co/]
- New structure to house util scripts in one directory

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
