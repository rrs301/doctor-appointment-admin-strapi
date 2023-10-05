'use strict';

/**
 * appointment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::appointment.appointment');
