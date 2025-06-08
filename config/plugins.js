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
        },
      },
    },
  },
  // upload: {
  //   config: {
  //     provider: '@strapi/provider-upload-aws-s3',
  //     providerOptions: {
  //       s3Options: {
  //         accessKeyId: env('DO_SPACES_ACCESS_KEY'),
  //         secretAccessKey: env('DO_SPACES_SECRET_KEY'),
  //         endpoint: env('DO_SPACES_ENDPOINT'),
  //         region: env('DO_SPACES_REGION'),
  //       },
  //       baseUrl: `https://${env('DO_SPACES_BUCKET')}.${env('DO_SPACES_REGION')}.cdn.digitaloceanspaces.com`,
  //       params: {
  //         Bucket: env('DO_SPACES_BUCKET'),
  //         ACL: 'public-read',
  //       },
  //     },
  //   },
  // },
});
