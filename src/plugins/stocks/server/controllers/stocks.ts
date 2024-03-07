import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async findAll(ctx) {
    try {
      const allStocks = await strapi
        .plugin('stocks')
        .service('stocksService')
        .findAll()

      ctx.body = allStocks
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async findOne(ctx) {
    const id = ctx.params.id

    try {
      const oneStocks = await strapi
        .plugin('stocks')
        .service('stocksService')
        .findOne(id)

      ctx.body = oneStocks
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async stocksSearch(ctx) {
    const name = ctx.params.name

    try {
      const stocksSearch = await strapi
        .plugin('stocks')
        .service('stocksService')
        .stocksSearch(name)

      ctx.body = stocksSearch
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async create(ctx) {
    const requestData = ctx.request.body;

    try {
      const createStocks = await strapi
        .plugin('stocks')
        .service('stocksService')
        .create(requestData)

      ctx.send({
        message: 'Stock criado com sucesso',
      });

      ctx.body = createStocks
    } catch (error) {
      ctx.status = 500;
      ctx.body = 'Internal error'
    }
  },

  async update(ctx) {
    const requestData = ctx.request.body;
    const id = ctx.params.id

    try {
      const updateStocks = await strapi
        .plugin('stocks')
        .service('stocksService')
        .update(requestData, id);

      ctx.send({
        message: 'Stock atualizado com sucesso',
      });

      ctx.status = 200
      ctx.body = updateStocks
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async activeStocks(ctx) {
    const requestData = ctx.request.body;
    const id = ctx.params.id

    try {
      const updateStocks = await strapi
        .plugin('stocks')
        .service('stocksService')
        .activeStocks(requestData, id);

      ctx.send({
        message: 'compo em stock atualizado com sucesso',
      });

      ctx.status = 200
      ctx.body = updateStocks
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },

  async delete(ctx) {
    const id = ctx.params.id

    try {
      const deletebrand = await strapi
        .plugin('stocks')
        .service('stocksService')
        .delete(id);

      ctx.status = 200
      ctx.body = deletebrand

      ctx.send({
        message: 'stock deletado com sucesso',
      });
    } catch (error) {
      ctx.status = 500
      ctx.body = 'Internal error'
    }
  },
});
