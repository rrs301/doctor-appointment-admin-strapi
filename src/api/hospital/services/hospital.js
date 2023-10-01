'use strict';

/**
 * hospital service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hospital.hospital');
