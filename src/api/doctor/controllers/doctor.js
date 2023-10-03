'use strict';

/**
 * doctor controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::doctor.doctor');
