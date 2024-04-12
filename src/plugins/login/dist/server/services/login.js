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
};
const baseUrl = 'https://grocers-io.azurewebsites.net/v1/login';
exports.default = ({ strapi }) => ({
    async login(body, auth) {
        try {
            const response = await axios_1.default.post(`${baseUrl}`, body, { headers: { ...defaultHeaders, Authorization: auth } });
            const loginResponse = response.data;
            return loginResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
    async loginAsAdmin(body, auth) {
        const contractAccountId = body.contractAccountId;
        try {
            const response = await axios_1.default.post(`${baseUrl}/owner-as-admin`, body, { headers: { ...defaultHeaders, contractAccountId, Authorization: auth } });
            const loginResponse = response.data;
            return loginResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
    async loginEmailCode(body, auth) {
        try {
            const response = await axios_1.default.post(`${baseUrl}/email/send-code`, body, { headers: { ...defaultHeaders, Authorization: auth } });
            const loginResponse = response.data;
            console.log('Dados recebidos:', body);
            return loginResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
    async loginEmail(body, auth) {
        try {
            const response = await axios_1.default.post(`${baseUrl}/email`, body, { headers: { ...defaultHeaders, Authorization: auth } });
            const loginResponse = response.data;
            console.log('Dados recebidos:', body);
            return loginResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
    async loginSmsCode(body, auth) {
        try {
            const response = await axios_1.default.post(`${baseUrl}/sms/send-code`, body, { headers: { ...defaultHeaders, Authorization: auth } });
            const loginResponse = response.data;
            console.log('Dados recebidos:', body);
            return loginResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
    async loginSms(body, auth) {
        try {
            const response = await axios_1.default.post(`${baseUrl}/sms`, body, { headers: { ...defaultHeaders, Authorization: auth } });
            const loginResponse = response.data;
            console.log('Dados recebidos:', body);
            return loginResponse;
        }
        catch (error) {
            const { status, title, detail } = error.response.data;
            console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
            return { status, title, detail };
        }
    },
});
