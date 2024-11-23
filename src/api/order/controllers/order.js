"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { userName, userEmail, userPhone, userTC, userBirthDate, course, paymentId } = ctx.request.body;

    // Boş alan kontrolü
    if (!userName || !userEmail || !userPhone || !userTC || !userBirthDate || !course || !paymentId) {
      return ctx.badRequest("Eksik bilgiler sağlandı.");
    }

    try {
      // Kursu slug üzerinden bul
      const foundCourse = await strapi.entityService.findMany("api::course.course", {
        filters: { slug: course }, // Burada slug'ı kullanıyoruz
        limit: 1, // Tek kurs almak için limit
      });

      if (!foundCourse || foundCourse.length === 0) {
        return ctx.notFound("Kurs bulunamadı.");
      }

      const courseId = foundCourse[0].id;

      // Siparişi oluştur
      const order = await strapi.entityService.create("api::order.order", {
        data: {
          userName,
          userEmail,
          userPhone,
          userTC,
          userBirthDate,
          course: courseId,
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
