export default [
  {
    method: 'GET',
    path: '/allBrands',
    handler: 'brandsController.find',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/setBrands',
    handler: 'brandsController.create',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/updateBrands/:id',
    handler: 'brandsController.update',
    config: {
      policies: [],
    },
  },
  {
    method: 'DELETE',
    path: '/deleteBrands/:id',
    handler: 'brandsController.delete',
    config: {
      policies: [],
    },
  },
];
