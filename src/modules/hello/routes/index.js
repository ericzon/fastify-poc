'use strict';

const prefix = '/hello';
const routes = async (fastify, options) => {
  fastify.get(`${prefix}/`, async (request, reply) => {
    reply.type('application/json').code(200);

    return { hello: 'world' };
  });
};

module.exports = routes;
