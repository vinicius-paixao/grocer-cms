"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const defaultHeaders = {
    'content-type': 'application/json',
    accept: 'application/json',
    // Authorization: `bearer ${process.env.PLUGIN_TOKEN}`,
    'x-contractAccountId': '11c1fa10-1e44-4649-b681-c81f7554afab'
};
const baseUrl = 'https://grocers-io.azurewebsites.net/v1/products';
exports.default = ({ strapi }) => ({
    async findAll() {
        try {
            const response = await axios_1.default.get(`${baseUrl}`, { headers: defaultHeaders });
            const productResponse = response.data;
            return productResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
    async findOne(id, auth) {
        try {
            const response = await axios_1.default.get(`${baseUrl}/${id}`, { headers: { ...defaultHeaders, Authorization: auth } });
            const productResponse = response.data;
            return productResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
    async findByName(name, auth) {
        try {
            const response = await axios_1.default.get(`${baseUrl}/search?name=${name}`, { headers: { ...defaultHeaders, Authorization: auth } });
            const productResponse = response.data;
            return productResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
    async create(body, auth) {
        try {
            const response = await axios_1.default.post(`${baseUrl}`, body, { headers: { ...defaultHeaders, Authorization: auth } });
            const productResponse = response.data;
            console.log('Dados recebidos:', body);
            return productResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
    async update(body, id, auth) {
        try {
            const response = await axios_1.default.put(`${baseUrl}/${id}`, body, { headers: { ...defaultHeaders, Authorization: auth } });
            const productResponse = response.data;
            console.log('update:', body);
            return productResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
    async updateFieldEnable(body, id, auth) {
        try {
            const response = await axios_1.default.patch(`${baseUrl}/${id}`, body, { headers: { ...defaultHeaders, Authorization: auth } });
            const productResponse = response.data;
            console.log('update:', body);
            return productResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
    async updateFieldDesable(body, id, auth) {
        try {
            const response = await axios_1.default.patch(`${baseUrl}/${id}`, body, { headers: { ...defaultHeaders, Authorization: auth } });
            const productResponse = response.data;
            console.log('update:', body);
            return productResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
    async delete(id, auth) {
        try {
            const response = await axios_1.default.delete(`${baseUrl}/${id}`, { headers: { ...defaultHeaders, Authorization: auth } });
            const productResponse = response.data;
            console.log('delete:', id);
            return productResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    }
});
