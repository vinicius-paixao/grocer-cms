import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async findAll(ctx) {
    const authToken = ctx.request.headers.authtoken

    try {
      const allusers = await strapi
        .plugin('users')
        .service('usersService')
        .findAll(authToken)

      ctx.body = allusers
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async findCurrentUser(ctx) {
    const authToken = ctx.request.headers.authtoken

    try {
      const allusers = await strapi
        .plugin('users')
        .service('usersService')
        .findCurrentUser(authToken)

      ctx.body = allusers
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async update(ctx) {
    const requestData = ctx.request.body;
    const authToken = ctx.request.headers.authtoken

    try {
      const updateUser = await strapi
        .plugin('users')
        .service('usersService')
        .update(requestData, authToken);

      ctx.status = 200
      ctx.body = updateUser

      ctx.send({
        message: 'user atualizado com sucesso',
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async passwrdRecovery(ctx) {
    const requestData = ctx.request.body;
    const id = ctx.params.id
    const authToken = ctx.request.headers.authtoken

    try {
      const passwrdRecoveryUser = await strapi
        .plugin('users')
        .service('usersService')
        .passwrdRecovery(requestData, id, authToken);

      ctx.status = 200
      ctx.body = passwrdRecoveryUser

      ctx.send({
        message: 'user atualizado com sucesso',
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async passwrdChange(ctx) {
    const requestData = ctx.request.body;
    const id = ctx.params.id
    const authToken = ctx.request.headers.authtoken

    try {
      const passwrdChangeUser = await strapi
        .plugin('users')
        .service('usersService')
        .passwrdChange(requestData, id, authToken);

      ctx.status = 200
      ctx.body = passwrdChangeUser

      ctx.send({
        message: 'user atualizado com sucesso',
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async signup(ctx) {
    const requestData = ctx.request.body;
    const authToken = ctx.request.headers.authtoken

    try {
      const signupUsers = await strapi
        .plugin('users')
        .service('usersService')
        .signup(requestData, authToken);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = signupUsers
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async checkEmail(ctx) {
    const requestData = ctx.request.body;
    const authToken = ctx.request.headers.authtoken

    try {
      const checkEmailUsers = await strapi
        .plugin('users')
        .service('usersService')
        .checkEmail(requestData, authToken);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = checkEmailUsers
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async checkDocument(ctx) {
    const requestData = ctx.request.body;
    const authToken = ctx.request.headers.authtoken

    try {
      const checkDocumentUsers = await strapi
        .plugin('users')
        .service('usersService')
        .checkDocument(requestData, authToken);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = checkDocumentUsers
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async checkPhone(ctx) {
    const requestData = ctx.request.body;
    const authToken = ctx.request.headers.authtoken

    try {
      const checkPhoneUsers = await strapi
        .plugin('users')
        .service('usersService')
        .checkPhone(requestData, authToken);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = checkPhoneUsers
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async passwrdReset(ctx) {
    const requestData = ctx.request.body;
    const authToken = ctx.request.headers.authtoken

    try {
      const passwrdResetUsers = await strapi
        .plugin('users')
        .service('usersService')
        .passwrdReset(requestData, authToken);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = passwrdResetUsers
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async passwrdResetCode(ctx) {
    const requestData = ctx.request.body;
    const authToken = ctx.request.headers.authtoken

    try {
      const passwrdResetCodeUsers = await strapi
        .plugin('users')
        .service('usersService')
        .passwrdResetCode(requestData, authToken);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = passwrdResetCodeUsers
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async userEdit(ctx) {
    const requestData = ctx.request.body;
    const authToken = ctx.request.headers.authtoken

    try {
      const userEditUsers = await strapi
        .plugin('users')
        .service('usersService')
        .userEdit(requestData, authToken);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = userEditUsers
    } catch (error) {
      ctx.throw(500, error);
    }
  },
});
