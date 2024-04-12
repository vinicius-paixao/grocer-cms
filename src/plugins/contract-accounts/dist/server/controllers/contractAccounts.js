"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async findAll(ctx) {
        try {
            const allcontracts = await strapi
                .plugin('contract-accounts')
                .service('contractAccountService')
                .findAll();
            ctx.body = allcontracts;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async findOne(ctx) {
        const id = ctx.params.id;
        try {
            const oneContracts = await strapi
                .plugin('contract-accounts')
                .service('contractAccountService')
                .findOne(id);
            ctx.body = oneContracts;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async findUsers(ctx) {
        const id = ctx.params.id;
        try {
            const oneUser = await strapi
                .plugin('contract-accounts')
                .service('contractAccountService')
                .findUsers(id);
            ctx.body = oneUser;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async createContractsAccounts(ctx) {
        const requestData = ctx.request.body;
        try {
            const createContracts = await strapi
                .plugin('contract-accounts')
                .service('contractAccountService')
                .create(requestData);
            ctx.send({
                message: 'Contrato criado com sucesso',
            });
            ctx.body = createContracts;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
    async createUser(ctx) {
        const requestData = ctx.request.body;
        try {
            const createUsers = await strapi
                .plugin('contract-accounts')
                .service('contractAccountService')
                .createUser(requestData);
            ctx.send({
                message: 'Usuario criado com sucesso',
            });
            ctx.status = 200;
            ctx.body = createUsers;
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = 'Internal error';
        }
    },
});
