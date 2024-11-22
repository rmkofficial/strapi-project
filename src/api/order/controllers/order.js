"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { name, email, phone, courseId } = ctx.request.body;

    if (!name || !email || !phone || !courseId) {
      return ctx.badRequest("Eksik bilgiler sağlandı.");
    }

    try {
      // İlgili kursu kontrol edin
      const course = await strapi.entityService.findOne(
        "api::course.course",
        courseId
      );

      if (!course) {
        return ctx.notFound("Kurs bulunamadı.");
      }

      // Siparişi oluşturun
      const order = await strapi.entityService.create("api::order.order", {
        data: {
          name,
          email,
          phone,
          course: courseId,
        },
      });

      return ctx.created(order);
    } catch (error) {
      console.error("Sipariş oluşturulurken bir hata oluştu:", error);
      return ctx.internalServerError("Sipariş oluşturulamadı.");
    }
  },
}));
