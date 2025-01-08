"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const {
      userName,
      userEmail,
      userPhone,
      userTC,
      userBirthDate,
      course,
      userPackage,
      paymentId,
    } = ctx.request.body.data;

    if (!userName || !userEmail || !userPhone || !userTC || !userBirthDate || !course || !userPackage || !paymentId) {
      return ctx.badRequest("Eksik bilgiler sağlandı.");
    }

    try {
      const foundCourse = await strapi.entityService.findMany("api::course.course", {
        filters: { slug: course },
        limit: 1,
      });

      if (!foundCourse || foundCourse.length === 0) {
        return ctx.notFound("Kurs bulunamadı.");
      }

      const courseId = foundCourse[0].id;

      const order = await strapi.entityService.create("api::order.order", {
        data: {
          userName,
          userEmail,
          userPhone,
          userTC,
          userBirthDate,
          course: courseId,
          userPackage,
          paymentId,
        },
      });

      return ctx.created(order);
    } catch (error) {
      console.error("Sipariş oluşturulurken bir hata oluştu:", error);
      return ctx.internalServerError("Sipariş oluşturulamadı.");
    }
  },
}));
