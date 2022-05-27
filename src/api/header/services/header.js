'use strict';

/**
 * header service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::header.header');
