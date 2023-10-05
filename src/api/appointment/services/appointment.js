'use strict';

/**
 * appointment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appointment.appointment');
