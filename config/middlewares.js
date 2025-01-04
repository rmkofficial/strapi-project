module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000', // Geliştirme ortamı
        'https://www.mtkakademi.com', // Canlı ortam
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
