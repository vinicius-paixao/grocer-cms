/**
 * slider router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::slider.slider', {
    config: {
        find: {
            middlewares: ['api::slider.sliders-middleware']
        }
    }
});
