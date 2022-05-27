'use strict';

/**
 * static-page service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::static-page.static-page');
