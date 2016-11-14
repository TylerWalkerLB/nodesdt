# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## 0.0.1 - 2016-11-13
### Added
- This CHANGELOG file to facilitate documentation of added project features
- README now contains setup instructions
- Dependencies in app/package.json
 - (Mongoose)[http://mongoosejs.com/index.html]
 - PhantomJS through (PhantomJS Prebuilt)[https://www.npmjs.com/package/phantomjs-prebuilt]
 - (phantom)[https://www.npmjs.com/package/phantom]
- Basic functionality of the plugin
 - app.js will connect to a MongoDB
 - When application is fired, it fires a module to get page loading statistics from a PhantomJS function
