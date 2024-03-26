import { Strapi } from '@strapi/strapi';
import axios from 'axios';

const defaultHeaders = {
  'content-type': 'application/json',
  accept: 'application/json',
  Authorization: `bearer ${process.env.PLUGIN_TOKEN}`,
};

const baseUrl = 'https://grocers-io.azurewebsites.net/v1/login'

export default ({ strapi }: { strapi: Strapi }) => ({
  async login(body) {
    try {
      const response = await axios.post(`${baseUrl}`, body, { headers: defaultHeaders });
      const loginResponse = response.data;

      console.log('Dados recebidos:', body);

      return loginResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },
  async loginAsAdmin(body) {
    const contractAccountId = body.contractAccountId

    try {
      const response = await axios.post(`${baseUrl}/owner-as-admin`, body, { headers: {...defaultHeaders, contractAccountId} });
      const loginResponse = response.data;

      console.log('Dados recebidos:', body);

      return loginResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },
  async loginEmailCode(body) {
    try {
      const response = await axios.post(`${baseUrl}/email/send-code`, body, { headers: defaultHeaders });
      const loginResponse = response.data;

      console.log('Dados recebidos:', body);

      return loginResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },
  async loginEmail(body) {
    try {
      const response = await axios.post(`${baseUrl}/email`, body, { headers: defaultHeaders });
      const loginResponse = response.data;

      console.log('Dados recebidos:', body);

      return loginResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },
  async loginSmsCode(body) {
    try {
      const response = await axios.post(`${baseUrl}/sms/send-code`, body, { headers: defaultHeaders });
      const loginResponse = response.data;

      console.log('Dados recebidos:', body);

      return loginResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },
  async loginSms(body) {
    try {
      const response = await axios.post(`${baseUrl}/sms`, body, { headers: defaultHeaders });
      const loginResponse = response.data;

      console.log('Dados recebidos:', body);

      return loginResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },
});
