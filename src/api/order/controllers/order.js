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
      userPackage, // Paket bilgisi
      paymentId,
    } = ctx.request.body.data;

    // Boş alan kontrolü
    if (
      !userName ||
      !userEmail ||
      !userPhone ||
      !userTC ||
      !userBirthDate ||
      !course ||
      !userPackage || // Paket kontrolü
      !paymentId
    ) {
      return ctx.badRequest("Eksik bilgiler sağlandı.");
    }

    try {
      console.log("Gönderilen veri:", ctx.request.body.data); // Gelen veriyi logla

      // Kursu slug üzerinden bul
      const foundCourse = await strapi.entityService.findMany("api::course.course", {
        filters: { slug: course }, // Slug ile filtre
        limit: 1, // Tek kurs almak için limit
      });

      if (!foundCourse || foundCourse.length === 0) {
        console.log("Slug ile kurs bulunamadı:", course);
        return ctx.notFound("Kurs bulunamadı.");
      }

      const courseId = foundCourse[0].id;

      console.log("Bulunan kurs ID'si:", courseId); // Kurs ID'sini logla

      // Siparişi oluştur
      const order = await strapi.entityService.create("api::order.order", {
        data: {
          userName,
          userEmail,
          userPhone,
          userTC,
          userBirthDate,
          course: courseId,
          userPackage, // Paket bilgisi kaydediliyor
          paymentId,
        },
      });

      console.log("Sipariş başarıyla oluşturuldu:", order); // Sipariş detaylarını logla

      return ctx.created(order);
    } catch (error) {
      console.error("Sipariş oluşturulurken bir hata oluştu:", error);
      return ctx.internalServerError("Sipariş oluşturulamadı.");
    }
  },
}));
