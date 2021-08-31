module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("BASE_URL", "http://localhost"),
  proxy: env.bool("IS_PROXIED", false),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "4b63698bd93e9d0bdf32e9c661eb3083"),
      serveAdminPanel: env.bool("SERVE_ADMIN", true),
    },
  },
});
