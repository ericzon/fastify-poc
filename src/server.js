'use strict';

const settings = require('./settings');

const server = {
  loadMiddlewares: (fastify) => {
    fastify.use((req, res, next) => {
      console.log("Tracking url -> ",req.url);
      console.log("Tracking method -> ",req.method);
      console.log("Tracking ua -> ",req.headers['user-agent']);
      next();
    });
    // and others...
  },
  init: async () => {
    const fastify = require('fastify')({ logger: true });

    fastify.decorate('settings', settings);
    fastify.register(require('./modules/hello'));

    server.loadMiddlewares(fastify);
    try {
      await fastify.listen(fastify.settings.port);
      fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch(error) {
      fastify.log.error(error);
    }
  }
};

module.exports = server;
