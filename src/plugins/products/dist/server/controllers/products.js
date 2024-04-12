"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async findAll(ctx) {
        var _a;
        const authToken = ctx.request.headers.authtoken;
        try {
            const allproducts = await strapi
                .plugin('products')
                .service('productsService')
                .findAll(authToken);
            ctx.status = (_a = allproducts.status) !== null && _a !== void 0 ? _a : 200;
            ctx.body = allproducts;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async findOne(ctx) {
        var _a;
        const id = ctx.params.id;
        const authToken = ctx.request.headers.authtoken;
        try {
            const product = await strapi
                .plugin('products')
                .service('productsService')
                .findOne(id, authToken);
            ctx.status = (_a = product.status) !== null && _a !== void 0 ? _a : 200;
            ctx.body = product;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async findByName(ctx) {
        var _a;
        const name = ctx.params.name;
        const authToken = ctx.request.headers.authtoken;
        try {
            const productByName = await strapi
                .plugin('products')
                .service('productsService')
                .findByName(name, authToken);
            ctx.status = (_a = productByName.status) !== null && _a !== void 0 ? _a : 200;
            ctx.body = productByName;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async create(ctx) {
        var _a;
        const requestData = ctx.request.body;
        const authToken = ctx.request.headers.authtoken;
        try {
            const createProduct = await strapi
                .plugin('products')
                .service('productsService')
                .create(requestData, authToken);
            ctx.send({
                message: 'produto criado com sucesso',
            });
            ctx.status = (_a = createProduct.status) !== null && _a !== void 0 ? _a : 200;
            ctx.body = createProduct;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async update(ctx) {
        var _a;
        const requestData = ctx.request.body;
        const id = ctx.params.id;
        const authToken = ctx.request.headers.authtoken;
        try {
            const updateProduct = await strapi
                .plugin('products')
                .service('productsService')
                .update(requestData, id, authToken);
            ctx.status = (_a = updateProduct.status) !== null && _a !== void 0 ? _a : 200;
            ctx.body = updateProduct;
            ctx.send({
                message: 'produto atualizado com sucesso',
            });
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async updateFieldEnable(ctx) {
        var _a;
        const requestData = ctx.request.body;
        const id = ctx.params.id;
        const authToken = ctx.request.headers.authtoken;
        try {
            const updateFieldProduct = await strapi
                .plugin('products')
                .service('productsService')
                .updateFieldEnable(requestData, id, authToken);
            ctx.status = (_a = updateFieldProduct.status) !== null && _a !== void 0 ? _a : 200;
            ctx.body = updateFieldProduct;
            ctx.send({
                message: 'produto habilitado com sucesso',
            });
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async updateFieldDesable(ctx) {
        var _a;
        const requestData = ctx.request.body;
        const id = ctx.params.id;
        const authToken = ctx.request.headers.authtoken;
        try {
            const updateFieldProduct = await strapi
                .plugin('products')
                .service('productsService')
                .updateFieldDesable(requestData, id, authToken);
            ctx.status = (_a = updateFieldProduct.status) !== null && _a !== void 0 ? _a : 200;
            ctx.body = updateFieldProduct;
            ctx.send({
                message: 'produto desabilitado com sucesso',
            });
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async delete(ctx) {
        var _a;
        const id = ctx.params.id;
        const authToken = ctx.request.headers.authtoken;
        try {
            const deletebrand = await strapi
                .plugin('products')
                .service('productsService')
                .delete(id, authToken);
            ctx.status = (_a = deletebrand.status) !== null && _a !== void 0 ? _a : 200;
            ctx.body = deletebrand;
            ctx.send({
                message: 'produto deletado com sucesso',
            });
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
});
