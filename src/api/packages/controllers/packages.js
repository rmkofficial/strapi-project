"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::package.package", ({ strapi }) => ({
  async find(ctx) {
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  }
}));
