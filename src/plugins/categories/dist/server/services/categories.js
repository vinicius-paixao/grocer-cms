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
const baseUrl = 'https://grocers-io.azurewebsites.net/v1/categories';
exports.default = ({ strapi }) => ({
    async findAll() {
        try {
            const response = await axios_1.default.get(`${baseUrl}`, { headers: defaultHeaders });
            const categoriesResponse = response.data;
            return categoriesResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    },
    async create(body) {
        try {
            const response = await axios_1.default.post(`${baseUrl}`, body, { headers: defaultHeaders });
            const categoriesResponse = response.data;
            console.log('Dados recebidos:', body);
            return categoriesResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    },
    async update(body, id) {
        try {
            const response = await axios_1.default.put(`${baseUrl}/${id}`, body, { headers: defaultHeaders });
            const categoriesResponse = response.data;
            console.log('update:', body);
            return categoriesResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    },
    async delete(id) {
        try {
            const response = await axios_1.default.delete(`${baseUrl}/${id}`, { headers: defaultHeaders });
            const categoriesResponse = response.data;
            console.log('delete:', id);
            return categoriesResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    }
});
