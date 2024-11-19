'use strict';

/**
 * popular-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::popular-course.popular-course');
