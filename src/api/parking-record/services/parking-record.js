'use strict';

/**
 * parking-record service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::parking-record.parking-record');
