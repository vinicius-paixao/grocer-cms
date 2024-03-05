import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async find(ctx) {
    try {
      const allbrands = await strapi
        .plugin('brands')
        .service('brandsService')
        .findAll()

      ctx.body = allbrands
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async create(ctx) {
    const requestData = ctx.request.body;

    try {
      const createbrand = await strapi
        .plugin('brands')
        .service('brandsService')
        .create(requestData);

      ctx.send({
        message: 'Marca criada com sucesso',
      });

      ctx.status = 200
      ctx.body = createbrand
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async update(ctx) {
    const requestData = ctx.request.body;
    const id = ctx.params.id

    try {
      const updatebrand = await strapi
        .plugin('brands')
        .service('brandsService')
        .update(requestData, id);

      ctx.status = 200
      ctx.body = updatebrand

      ctx.send({
        message: 'Marca atualizada com sucesso',
      });
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }

  },

  async delete(ctx) {
    const id = ctx.params.id

    try {
      const deletebrand = await strapi
        .plugin('brands')
        .service('brandsService')
        .delete(id);

      ctx.status = 200
      ctx.body = deletebrand

      ctx.send({
        message: 'Marca deletada com sucesso',
      });
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },
});
