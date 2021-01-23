module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("EMAIL_API_KEY"),
    },
    settings: {
      defaultFrom: env("EMAIL_ADDRESS"),
      defaultReplyTo: env("EMAIL_ADDRESS"),
    },
  },
});
