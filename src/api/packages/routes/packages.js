"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/packages",
      handler: "package.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
