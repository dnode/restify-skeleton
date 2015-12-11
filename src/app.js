'use strict';

require('dnewrelic');

let app = require('drestify');
app.use(require('./middlewares/example.js')());
require('dcontrollers')(app, [
  require('./controllers/example.js')()
]);
