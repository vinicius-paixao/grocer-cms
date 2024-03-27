import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async login(ctx) {
    const requestData = ctx.request.body;

    try {
      const login = await strapi
        .plugin('login')
        .service('loginService')
        .login(requestData);

      ctx.send({
        message: 'sucesso',
      });

      ctx.status = 200
      ctx.body = login
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
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

      ctx.status = 200
      ctx.body = loginEmailCode
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
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

      ctx.status = 200
      ctx.body = loginEmail
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
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

      ctx.status = 200
      ctx.body = loginSmsCode
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
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

      ctx.status = 200
      ctx.body = loginSms
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },
  async loginAsAdmin(ctx) {
    const requestData = ctx.request.body;

    try {
      const loginAsAdmin = await strapi
        .plugin('login')
        .service('loginService')
        .loginAsAdmin(requestData);

      ctx.send({
        message: 'sucesso',
      });

      ctx.status = 200
      ctx.body = loginAsAdmin
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },
});
