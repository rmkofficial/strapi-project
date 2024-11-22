'use strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { fullName, email, phone, tcNo, birthDate, course } = ctx.request.body;

      // Ek kontroller yapılabilir
      const order = await strapi.service('api::order.order').create({
        data: {
          fullName,
          email,
          phone,
          tcNo,
          birthDate,
          course,
          status: 'pending'
        }
      });

      ctx.body = order;
    } catch (error) {
      ctx.throw(400, error.message);
    }
  }
}));
