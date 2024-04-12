"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        method: 'GET',
        path: '/allCategories',
        handler: 'categoriesController.find',
        config: {
            policies: [],
        },
    },
    {
        method: 'POST',
        path: '/setCategories',
        handler: 'categoriesController.create',
        config: {
            policies: [],
        },
    },
    {
        method: 'PUT',
        path: '/updateCategories/:id',
        handler: 'categoriesController.update',
        config: {
            policies: [],
        },
    },
    {
        method: 'DELETE',
        path: '/deleteCategories/:id',
        handler: 'categoriesController.delete',
        config: {
            policies: [],
        },
    },
];
