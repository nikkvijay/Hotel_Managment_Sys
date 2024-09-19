'use strict';

/**
 * room-stat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room-stat.room-stat');
