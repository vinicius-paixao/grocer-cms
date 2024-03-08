export default [
  {
    method: 'GET',
    path: '/allStocks',
    handler: 'stocksController.findAll',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/oneStocks/:id',
    handler: 'stocksController.findOne',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/oneStocks/:name',
    handler: 'stocksController.stocksSearch',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/setStocks',
    handler: 'stocksController.create',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/setStocks/:id',
    handler: 'stocksController.update',
    config: {
      policies: [],
    },
  },
  {
    method: 'PATCH',
    path: '/setStocks/:id',
    handler: 'stocksController.activeStocks',
    config: {
      policies: [],
    },
  },
  {
    method: 'DELETE',
    path: '/deleteStocks/:id',
    handler: 'stocksController.delete',
    config: {
      policies: [],
    },
  },
];
