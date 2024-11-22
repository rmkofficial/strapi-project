"use strict";

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
            paymentId,
        } = ctx.request.body;

        if (
            !userName ||
            !userEmail ||
            !userPhone ||
            !userTC ||
            !userBirthDate ||
            !course ||
            !paymentId
        ) {
            return ctx.badRequest("Eksik bilgiler sağlandı.");
        }

        try {
            // İlgili kursu kontrol edin
            const courseData = await strapi.entityService.findOne(
                "api::course.course",
                course
            );

            if (!courseData) {
                return ctx.notFound("Kurs bulunamadı.");
            }

            // Siparişi oluşturun
            const order = await strapi.entityService.create("api::order.order", {
                data: {
                    userName,
                    userEmail,
                    userPhone,
                    userTC,
                    userBirthDate,
                    course,
                    paymentId,
                    status: "pending",
                },
            });

            return ctx.created(order);
        } catch (error) {
            console.error("Sipariş oluşturulurken bir hata oluştu:", error);
            return ctx.internalServerError("Sipariş oluşturulamadı.");
        }
    },
}));
