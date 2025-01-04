module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Varsayılan host
  port: env.int('PORT', 1337),  // Varsayılan port
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']), // Güvenlik anahtarları
  },
  url: env('SERVER_URL', 'https://strapi-project-xi2f.onrender.com', 'http://localhost:1337'), // Public URL
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false), // Webhook ilişkileri
  },
});
