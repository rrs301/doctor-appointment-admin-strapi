'use strict';

/**
 * doctor router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::doctor.doctor');
