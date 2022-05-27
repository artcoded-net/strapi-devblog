'use strict';

/**
 * static-page router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::static-page.static-page');
