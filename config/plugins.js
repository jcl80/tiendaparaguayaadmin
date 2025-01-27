module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '30d',
        },
        providers: {
          google: {
            enabled: true,
            uid: env('GOOGLE_CLIENT_ID'),
            secret: env('GOOGLE_CLIENT_SECRET'),
            // if using OAuth2 scope config, add them here
          },
        },
      },
    },
  });
  