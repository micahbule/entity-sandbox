module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '48cfb58d9ae9026d420db129c785a33c'),
  },
});
