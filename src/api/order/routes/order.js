module.exports = {
    routes: [
        {
            method: "POST",
            path: "/orders",
            handler: "order.create",
            config: {
                auth: false, // Gerekirse true yapabilirsiniz
            },
        },
    ],
};
