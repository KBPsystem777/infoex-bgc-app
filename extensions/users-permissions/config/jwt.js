module.exports = {
  jwtSecret: process.env.JWT_SECRET || "f2aa8b29-9a6b-4de8-a14b-5203531bca50",
  jwt: {
    expiresIn: "12h",
  },
};
