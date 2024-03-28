import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async findAll(ctx) {
    try {
      const allusers = await strapi
        .plugin('users')
        .service('usersService')
        .findAll()

      ctx.body = allusers
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async findCurrentUser(ctx) {
    try {
      const allusers = await strapi
        .plugin('users')
        .service('usersService')
        .findCurrentUser()

      ctx.body = allusers
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async update(ctx) {
    const requestData = ctx.request.body;
    // const id = ctx.params.id

    try {
      const updateUser = await strapi
        .plugin('users')
        .service('usersService')
        .update(requestData);

      ctx.status = 200
      ctx.body = updateUser

      ctx.send({
        message: 'user atualizado com sucesso',
      });
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async passwrdRecovery(ctx) {
    const requestData = ctx.request.body;
    const id = ctx.params.id

    try {
      const passwrdRecoveryUser = await strapi
        .plugin('users')
        .service('usersService')
        .passwrdRecovery(requestData, id);

      ctx.status = 200
      ctx.body = passwrdRecoveryUser

      ctx.send({
        message: 'user atualizado com sucesso',
      });
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async passwrdChange(ctx) {
    const requestData = ctx.request.body;
    const id = ctx.params.id

    try {
      const passwrdChangeUser = await strapi
        .plugin('users')
        .service('usersService')
        .passwrdChange(requestData, id);

      ctx.status = 200
      ctx.body = passwrdChangeUser

      ctx.send({
        message: 'user atualizado com sucesso',
      });
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async signup(ctx) {
    const requestData = ctx.request.body;

    try {
      const signupUsers = await strapi
        .plugin('users')
        .service('usersService')
        .signup(requestData);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = signupUsers
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async checkEmail(ctx) {
    const requestData = ctx.request.body;

    try {
      const checkEmailUsers = await strapi
        .plugin('users')
        .service('usersService')
        .checkEmail(requestData);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = checkEmailUsers
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async checkDocument(ctx) {
    const requestData = ctx.request.body;

    try {
      const checkDocumentUsers = await strapi
        .plugin('users')
        .service('usersService')
        .checkDocument(requestData);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = checkDocumentUsers
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async checkPhone(ctx) {
    const requestData = ctx.request.body;

    try {
      const checkPhoneUsers = await strapi
        .plugin('users')
        .service('usersService')
        .checkPhone(requestData);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = checkPhoneUsers
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async passwrdReset(ctx) {
    const requestData = ctx.request.body;

    try {
      const passwrdResetUsers = await strapi
        .plugin('users')
        .service('usersService')
        .passwrdReset(requestData);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = passwrdResetUsers
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async passwrdResetCode(ctx) {
    const requestData = ctx.request.body;

    try {
      const passwrdResetCodeUsers = await strapi
        .plugin('users')
        .service('usersService')
        .passwrdResetCode(requestData);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = passwrdResetCodeUsers
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async userEdit(ctx) {
    const requestData = ctx.request.body;

    try {
      const userEditUsers = await strapi
        .plugin('users')
        .service('usersService')
        .userEdit(requestData);

      ctx.send({
        message: 'User criado com sucesso',
      });

      ctx.status = 200
      ctx.body = userEditUsers
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },
});
