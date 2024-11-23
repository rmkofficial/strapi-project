"use strict";

module.exports = {
    routes: [
        {
            method: "POST",
            path: "/orders",
            handler: "order.create",
            config: {
                auth: false, // Kimlik doğrulama gerekirse true yapabilirsiniz
            },
        },
    ],
};
