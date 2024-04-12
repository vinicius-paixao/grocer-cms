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
const baseUrl = 'https://grocers-io.azurewebsites.net/v1/sales-channels';
exports.default = ({ strapi }) => ({
    async findAll() {
        try {
            const response = await axios_1.default.get(`${baseUrl}`, { headers: defaultHeaders });
            const salesChannelResponse = response.data;
            return salesChannelResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    },
    async findOne(id) {
        try {
            const response = await axios_1.default.get(`${baseUrl}/${id}`, { headers: defaultHeaders });
            const salesChannelResponse = response.data;
            return salesChannelResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    },
    async create(body) {
        try {
            const response = await axios_1.default.post(`${baseUrl}`, body, { headers: defaultHeaders });
            const salesChannelResponse = response.data;
            console.log('Dados recebidos:', body);
            return salesChannelResponse;
        }
        catch (error) {
            const { status, statusText } = error.response;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
        }
    },
});
