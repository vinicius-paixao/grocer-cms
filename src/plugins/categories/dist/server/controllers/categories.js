"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async find(ctx) {
        try {
            const allcategories = await strapi
                .plugin('categories')
                .service('categoriesService')
                .findAll();
            ctx.body = allcategories;
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
                .plugin('categories')
                .service('categoriesService')
                .create(requestData);
            ctx.send({
                message: 'categoria criada com sucesso',
            });
            ctx.status = 200;
            ctx.body = createbrand;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async update(ctx) {
        const requestData = ctx.request.body;
        const id = ctx.params.id;
        try {
            const updatebrand = await strapi
                .plugin('categories')
                .service('categoriesService')
                .update(requestData, id);
            ctx.status = 200;
            ctx.body = updatebrand;
            ctx.send({
                message: 'categoria atualizada com sucesso',
            });
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async delete(ctx) {
        const id = ctx.params.id;
        try {
            const deletebrand = await strapi
                .plugin('categories')
                .service('categoriesService')
                .delete(id);
            ctx.status = 200;
            ctx.body = deletebrand;
            ctx.send({
                message: 'categoria deletada com sucesso',
            });
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
});
