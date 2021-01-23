const forgotPasswordTemplate = require("./email-templates/forgotPassword");

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9f3f284e24e488f231af1705bd271bbd"),
    },
    forgotPassword: {
      from: env("EMAIL_ADDRESS"),
      replyTo: env("EMAIL_ADDRESS"),
      emailTemplate: forgotPasswordTemplate,
    },
  },
});
