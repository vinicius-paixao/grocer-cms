"use strict";
/**
 * `sliders-middleware` middleware
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (config, { strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        await next();
    };
};
