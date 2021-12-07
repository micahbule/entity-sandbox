'use strict';

/**
 * parking-slot service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::parking-slot.parking-slot');
