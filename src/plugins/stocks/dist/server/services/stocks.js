"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const defaultHeaders = {
    'content-type': 'application/json',
    accept: 'application/json',
    Authorization: `bearer ${process.env.PLUGIN_TOKEN}`,
};
const baseUrl = 'https://grocers-io.azurewebsites.net/v1/stocks';
exports.default = ({ strapi }) => ({
    async findAll() {
        try {
            const response = await axios_1.default.get(`${baseUrl}`, { headers: defaultHeaders });
            const stocksResponse = response.data;
            return stocksResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    },
    async findOne(id) {
        try {
            const response = await axios_1.default.get(`${baseUrl}/${id}`, { headers: defaultHeaders });
            const stocksResponse = response.data;
            return stocksResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    },
    async stocksSearch(name) {
        try {
            const response = await axios_1.default.get(`${baseUrl}/?name=${name}`, { headers: defaultHeaders });
            const stocksResponse = response.data;
            return stocksResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    },
    async create(body) {
        try {
            const response = await axios_1.default.post(`${baseUrl}`, body, { headers: defaultHeaders });
            const stocksResponse = response.data;
            console.log('Dados recebidos:', body);
            return stocksResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    },
    async update(body, id) {
        try {
            const response = await axios_1.default.put(`${baseUrl}/${id}`, body, { headers: defaultHeaders });
            const stocksResponse = response.data;
            console.log('update:', body);
            return stocksResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    },
    async activeStocks(body, id) {
        try {
            const response = await axios_1.default.patch(`${baseUrl}/${id}`, body, { headers: defaultHeaders });
            const brandResponse = response.data;
            console.log('patche:', body);
            return brandResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    },
    async delete(id) {
        try {
            const response = await axios_1.default.delete(`${baseUrl}/${id}`, { headers: defaultHeaders });
            const stocksResponse = response.data;
            console.log('delete:', id);
            return stocksResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    }
});
