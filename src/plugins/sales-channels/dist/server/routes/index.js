"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        method: 'GET',
        path: '/allSales-channels',
        handler: 'salesChannelController.findAll',
        config: {
            policies: [],
        },
    },
    {
        method: 'GET',
        path: '/allSales-channels/:id',
        handler: 'salesChannelController.findOne',
        config: {
            policies: [],
        },
    },
    {
        method: 'POST',
        path: '/setSales-channels',
        handler: 'salesChannelController.create',
        config: {
            policies: [],
        },
    },
];
