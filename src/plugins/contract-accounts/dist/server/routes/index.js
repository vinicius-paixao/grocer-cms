"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        method: 'GET',
        path: '/contract',
        handler: 'contractAccountsController.findAll',
        config: {
            policies: [],
        },
    },
    {
        method: 'GET',
        path: '/contract/:id',
        handler: 'contractAccountsController.findOne',
        config: {
            policies: [],
        },
    },
    {
        method: 'GET',
        path: '/contract-users/:id',
        handler: 'contractAccountsController.findUsers',
        config: {
            policies: [],
        },
    },
    {
        method: 'POST',
        path: '/contract-create',
        handler: 'contractAccountsController.createContractsAccounts',
        config: {
            policies: [],
        },
    },
    {
        method: 'POST',
        path: '/contract-createUsers',
        handler: 'contractAccountsController.createUser',
        config: {
            policies: [],
        },
    },
];
