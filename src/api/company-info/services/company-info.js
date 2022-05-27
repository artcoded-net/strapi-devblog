'use strict';

/**
 * company-info service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::company-info.company-info');
