"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        method: 'GET',
        path: '/allProducts',
        handler: 'productsController.findAll',
        config: {
            policies: [],
        },
    },
    {
        method: 'GET',
        path: '/oneProduct/:id',
        handler: 'productsController.findOne',
        config: {
            policies: [],
        },
    },
    {
        method: 'GET',
        path: '/search/:name',
        handler: 'productsController.findByName',
        config: {
            policies: [],
        },
    },
    {
        method: 'POST',
        path: '/productsCreate',
        handler: 'productsController.create',
        config: {
            policies: [],
        },
    },
    {
        method: 'PUT',
        path: '/productsUpdate/:id',
        handler: 'productsController.update',
        config: {
            policies: [],
        },
    },
    {
        method: 'PATCH',
        path: '/updateFieldEnable/:id',
        handler: 'productsController.updateFieldEnable',
        config: {
            policies: [],
        },
    },
    {
        method: 'PATCH',
        path: '/updateFieldDesable/:id',
        handler: 'productsController.updateFieldDesable',
        config: {
            policies: [],
        },
    },
    {
        method: 'DELETE',
        path: '/deleteProduct/:id',
        handler: 'productsController.delete',
        config: {
            policies: [],
        },
    },
];
