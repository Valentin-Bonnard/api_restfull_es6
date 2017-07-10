# RESTful API with Node.js
## Built using Babel, Express and Mongoose

Features like validation and unit testing are only implemented for some of the routes (for now 10/07/2017) since the goal is to just provide
them as an example.

## Installation and running

The project depends on a mongodb instance that must be accessible, you can change the connection details in the
`config/env/development.js` and `config/env/test.js` for the testing database.

1. Clone this repository
2. `cd` into the cloned copy and run `npm install`
3. Run `gulp nodemon`
4. Try it in a console or in a browser window doing a `GET` to `http://localhost:3000/api/api-status`

## Unit testing

To run unit tests simply run `gulp mocha`.

## Apidocs

To run apidocs creation run `gulp apidoc`. And view in docs folder => index.html
