"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async login(ctx) {
        var _a;
        const requestData = ctx.request.body;
        try {
            const login = await strapi
                .plugin('login')
                .service('loginService')
                .login(requestData);
            ctx.send({
                message: 'sucesso',
            });
            ctx.status = (_a = login.status) !== null && _a !== void 0 ? _a : 200;
            ctx.body = login;
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
    async loginEmailCode(ctx) {
        const requestData = ctx.request.body;
        try {
            const loginEmailCode = await strapi
                .plugin('login')
                .service('loginService')
                .loginEmailCode(requestData);
            ctx.send({
                message: 'sucesso',
            });
            ctx.status = loginEmailCode.status;
            ctx.body = loginEmailCode;
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
    async loginEmail(ctx) {
        const requestData = ctx.request.body;
        try {
            const loginEmail = await strapi
                .plugin('login')
                .service('loginService')
                .loginEmail(requestData);
            ctx.send({
                message: 'sucesso',
            });
            ctx.status = loginEmail.login;
            ctx.body = loginEmail;
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
    async loginSmsCode(ctx) {
        const requestData = ctx.request.body;
        try {
            const loginSmsCode = await strapi
                .plugin('login')
                .service('loginService')
                .loginSmsCode(requestData);
            ctx.send({
                message: 'sucesso',
            });
            ctx.status = loginSmsCode.status;
            ctx.body = loginSmsCode;
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
    async loginSms(ctx) {
        const requestData = ctx.request.body;
        try {
            const loginSms = await strapi
                .plugin('login')
                .service('loginService')
                .loginSms(requestData);
            ctx.send({
                message: 'sucesso',
            });
            ctx.status = loginSms.status;
            ctx.body = loginSms;
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
    async loginAsAdmin(ctx) {
        const requestData = ctx.request.body;
        const authToken = ctx.request.headers.authtoken;
        try {
            if (!requestData || !authToken) {
                ctx.throw(400, "Dados de entrada incompletos.");
            }
            const loginAsAdmin = await strapi
                .plugin('login')
                .service('loginService')
                .loginAsAdmin(requestData, authToken);
            console.log(loginAsAdmin);
            ctx.send({
                message: 'sucesso',
            });
            ctx.status = loginAsAdmin.status;
            ctx.body = loginAsAdmin;
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
});
