'use strict';

require('dnewrelic');

const app = require('drestify');
app.use(require('./middlewares/example.js')());
require('dcontrollers')(app, [
  require('./controllers/example.js')()
]);
