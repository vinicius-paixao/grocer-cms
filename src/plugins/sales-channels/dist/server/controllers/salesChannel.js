"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async findAll(ctx) {
        try {
            const allchannels = await strapi
                .plugin('sales-channels')
                .service('salesChannelService')
                .findAll();
            ctx.body = allchannels;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async findOne(ctx) {
        const id = ctx.params.id;
        try {
            const oneChannel = await strapi
                .plugin('sales-channels')
                .service('salesChannelService')
                .findOne(id);
            ctx.body = oneChannel;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async create(ctx) {
        const requestData = ctx.request.body;
        try {
            const createbrand = await strapi
                .plugin('sales-channels')
                .service('salesChannelService')
                .create(requestData);
            ctx.send({
                message: 'sales channel criado com sucesso',
            });
            ctx.status = 200;
            ctx.body = createbrand;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
});
