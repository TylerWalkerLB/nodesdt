# NodeSDT

Site Data Tracking for use in Performance First Development

## Setup

Current build runs on **Node 6.2.1**

### ElasticSearch

Before running this project, you must set up ElasticSearch. Follow these instructions for local installation on OSX
For other Operation Systems, please refer to the instructions [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/_installation.html)
_* Note: If you are going to use an existing ElasticSearch client hosted somewhere other than your local system, you can skip these steps._

1. Install ElasticSearch from the instructions link above
2. Start ElasticSearch with `./elasticsearch` in the _bin/_ folder of your ElasticSearch install path

### MongoDB

Before running this project, you must set up MongoDB. Follow these instructions for local installation on OSX
For other OS's, please refer to the instructions [here](https://docs.mongodb.com/manual/installation/#mongodb-community-edition)
_* Note: If you are going to use an existing MongoDB Database instance hosted somewhere other than your local system, you can skip this step._

1. For installion using Homebrew, follow [these steps](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew)
2. `mongod` to start your local MongoDB instance

Once you have MongoDB up and running locally or if you are using an existing MongoDB Database, install dependencies in the _app/_ directory

### NodeSDT Setup

1. In _app/config/_, copy _configdb.js.sample_ to _configdb.js_
 i. Local setting example: `url : 'localhost:9200/'`
2. Set the `elastic_search_url` parameter in _configdb.js_ to your ElasticSearch client
3. Set the `mongodb_url` parameter in _configdb.js_ to your MongoDB client
 i. Local setting example: `mongodb_url : 'mongodb://localhost/nodesdt'`
4. Set the port the node should be listening on
5. If in a development environment, set `dev_mode` to `true` and set your `vhost`
 i. Virtual Host domain must be set up locally

Once you have _config.js_ settings for ElasticSearch, MongoDB, and development/production install dependencies

```
npm install
```

#### Build application
1. Navigate to project root (same level as _package.json_)
2. Run `npm run build`

## Starting the application
To run the app, inside the _lib/_ directory:

```
node app.js
```

To keep the application running and automatically restarting when a file is changed, download Nodemon globally and initialize the app with nodemon
_* Note: For development use only. Nodemon should not be used in production._
```
npm install -g nodemon
nodemon app.js
```

## Updating Project
The actual application is ran inside a folder created by babel. When a change is made:

1. Run `npm run build` in the project root directory
2. Restart your application inside _lib/_

## Embedding client script
Inside _project_resources/_, there is a sample script _client.js_. Copy the contents of this file and paste them at the top of the `<body>` element.
