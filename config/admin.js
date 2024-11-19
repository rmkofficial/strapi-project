module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET') || env('ADMIN_AUTH_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
