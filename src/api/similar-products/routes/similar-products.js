'use strict';

module.exports = {
  routes: [
    {
      method: 'GET', // HTTP method
      path: '/similar-products', // Endpoint URL
      handler: 'similar-products.findSimilar', // Points to the controller method
      config: {
        auth: false, // Set to true if authentication is required
      },
    },
  ],
};
