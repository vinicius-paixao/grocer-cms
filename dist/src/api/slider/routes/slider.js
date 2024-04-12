"use strict";
/**
 * slider router
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreRouter('api::slider.slider', {
    config: {
        find: {
            middlewares: ['api::slider.sliders-middleware']
        }
    }
});
