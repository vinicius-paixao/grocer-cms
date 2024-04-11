import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async findAll(ctx) {
    const authToken = ctx.request.headers.authtoken

    try {
      const allproducts = await strapi
        .plugin('products')
        .service('productsService')
        .findAll(authToken)

      ctx.status = allproducts.status ?? 200
      ctx.body = allproducts
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async findOne(ctx) {
    const id = ctx.params.id
    const authToken = ctx.request.headers.authtoken

    try {
      const product = await strapi
        .plugin('products')
        .service('productsService')
        .findOne(id, authToken)

        ctx.status = product.status ?? 200
      ctx.body = product
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async findByName(ctx) {
    const name = ctx.params.name
    const authToken = ctx.request.headers.authtoken

    try {
      const productByName = await strapi
        .plugin('products')
        .service('productsService')
        .findByName(name, authToken)

        ctx.status = productByName.status ?? 200
      ctx.body = productByName
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async create(ctx) {
    const requestData = ctx.request.body;
    const authToken = ctx.request.headers.authtoken

    try {
      const createProduct = await strapi
        .plugin('products')
        .service('productsService')
        .create(requestData, authToken);

      ctx.send({
        message: 'produto criado com sucesso',
      });

      ctx.status = createProduct.status ?? 200
      ctx.body = createProduct
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async update(ctx) {
    const requestData = ctx.request.body;
    const id = ctx.params.id
    const authToken = ctx.request.headers.authtoken

    try {
      const updateProduct = await strapi
        .plugin('products')
        .service('productsService')
        .update(requestData, id, authToken);

      ctx.status = updateProduct.status ?? 200
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
    const authToken = ctx.request.headers.authtoken

    try {
      const updateFieldProduct = await strapi
        .plugin('products')
        .service('productsService')
        .updateFieldEnable(requestData, id, authToken);

      ctx.status = updateFieldProduct.status ?? 200
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
    const authToken = ctx.request.headers.authtoken

    try {
      const updateFieldProduct = await strapi
        .plugin('products')
        .service('productsService')
        .updateFieldDesable(requestData, id, authToken);

      ctx.status = updateFieldProduct.status ?? 200
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
    const authToken = ctx.request.headers.authtoken

    try {
      const deletebrand = await strapi
        .plugin('products')
        .service('productsService')
        .delete(id, authToken);

      ctx.status = deletebrand.status ?? 200
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
