export default [
  {
    method: 'GET',
    path: '/products',
    handler: 'productCollectionController.findAll',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/products/:id',
    handler: 'productCollectionController.findOne',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/search/:name',
    handler: 'productCollectionController.findByName',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/productsCreate',
    handler: 'productCollectionController.create',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/productsUpdate/:id',
    handler: 'productCollectionController.update',
    config: {
      policies: [],
    },
  },
  {
    method: 'PATCH',
    path: '/updateFieldEnable/:id',
    handler: 'productCollectionController.updateFieldEnable',
    config: {
      policies: [],
    },
  },
  {
    method: 'PATCH',
    path: '/updateFieldDesable/:id',
    handler: 'productCollectionController.updateFieldDesable',
    config: {
      policies: [],
    },
  },
  {
    method: 'DELETE',
    path: '/deleteProduct/:id',
    handler: 'productCollectionController.delete',
    config: {
      policies: [],
    },
  },
];
