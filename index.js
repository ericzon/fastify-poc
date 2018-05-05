'use strict';

const server = require('./src/server.js');

(async() => {
  await server.init();
})();
