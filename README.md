# NodeSDT
Site Data Tracking for use in Performance First Development

## Setup
Before running this project, you must set up MongoDB. Follow these instructions for local installation on OSX
For other OS's, please refer to the instructions [here](https://docs.mongodb.com/manual/installation/#mongodb-community-edition)
_* Note: If you are going to use an existing MongoDB Database instance hosted somewhere other than your local system, you can skip this step._

1. For installion using Homebrew, follow [these steps](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew)
2. `mongod` to start your local MongoDB instance
3. In _app/config/_, copy _configdb.js.sample_ to _configdb.js_
 i. Local setting example: `url : 'mongodb://localhost/nodesdt'`
4. Set the url parameter to your MongoDB instance

Once you have MongoDB up and running locally or if you are using an existing MongoDB Database, install dependencies in the _app/_ directory

```
npm install
```


To run the app

```
node app.js
```

To keep the application running and automatically restarting when a file is changed, download Nodemon globally and initalize the app with nodemon
_* Note: For development use only. Nodemon should not be in production._
```
npm install -g nodemon
nodemon app.js
```
