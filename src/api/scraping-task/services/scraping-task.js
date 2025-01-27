'use strict';

/**
 * scraping-task service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scraping-task.scraping-task');
