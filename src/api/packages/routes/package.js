'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/packages',
      handler: 'package.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/packages/:id',
      handler: 'package.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/packages',
      handler: 'package.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/packages/:id',
      handler: 'package.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/packages/:id',
      handler: 'package.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
