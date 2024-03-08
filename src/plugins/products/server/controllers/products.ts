import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async findAll(ctx) {
    try {
      const allproducts = await strapi
        .plugin('products')
        .service('productsService')
        .findAll()

      ctx.body = allproducts
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async findOne(ctx) {
    const id = ctx.params.id

    try {
      const product = await strapi
        .plugin('products')
        .service('productsService')
        .findOne(id)

      ctx.body = product
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async findByName(ctx) {
    const name = ctx.params.name

    try {
      const productByName = await strapi
        .plugin('products')
        .service('productsService')
        .findByName(name)

      ctx.body = productByName
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async create(ctx) {
    const requestData = ctx.request.body;

    try {
      const createProduct = await strapi
        .plugin('products')
        .service('productsService')
        .create(requestData);

      ctx.send({
        message: 'produto criado com sucesso',
      });

      ctx.status = 200
      ctx.body = createProduct
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async update(ctx) {
    const requestData = ctx.request.body;
    const id = ctx.params.id

    try {
      const updateProduct = await strapi
        .plugin('products')
        .service('productsService')
        .update(requestData, id);

      ctx.status = 200
      ctx.body = updateProduct

      ctx.send({
        message: 'produto atualizado com sucesso',
      });
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async updateFieldEnable(ctx) {
    const requestData = ctx.request.body;
    const id = ctx.params.id

    try {
      const updateFieldProduct = await strapi
        .plugin('products')
        .service('productsService')
        .updateFieldEnable(requestData, id);

      ctx.status = 200
      ctx.body = updateFieldProduct

      ctx.send({
        message: 'produto habilitado com sucesso',
      });
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async updateFieldDesable(ctx) {
    const requestData = ctx.request.body;
    const id = ctx.params.id

    try {
      const updateFieldProduct = await strapi
        .plugin('products')
        .service('productsService')
        .updateFieldDesable(requestData, id);

      ctx.status = 200
      ctx.body = updateFieldProduct

      ctx.send({
        message: 'produto desabilitado com sucesso',
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
        .plugin('products')
        .service('productsService')
        .delete(id);

      ctx.status = 200
      ctx.body = deletebrand

      ctx.send({
        message: 'produto deletado com sucesso',
      });
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },
});
