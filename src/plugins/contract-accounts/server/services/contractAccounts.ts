import { Strapi } from '@strapi/strapi';
import axios from 'axios';


const defaultHeaders = {
  'content-type': 'application/json',
  accept: 'application/json',
  Authorization: `bearer ${process.env.PLUGIN_TOKEN}`,
};

const baseUrl = 'https://grocers-io.azurewebsites.net/v1/contract-accounts'

export default ({ strapi }: { strapi: Strapi }) => ({
  async findAll() {
    try {
      const response = await axios.get(`${baseUrl}`, { headers: defaultHeaders });
      const contractAccountsResponse = response.data;

      return contractAccountsResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async findOne(id) {
    try {
      const response = await axios.get(`${baseUrl}/${id}`, { headers: defaultHeaders });
      const contractAccountsResponse = response.data;

      return contractAccountsResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async findUsers(id) {
    try {
      const response = await axios.get(`${baseUrl}/${id}/users`, { headers: defaultHeaders });
      const contractAccountsResponse = response.data;

      return contractAccountsResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async create(body) {
    try {
      const response = await axios.post(`${baseUrl}`, body, { headers: defaultHeaders });
      const contractAccountsResponse = response.data;

      console.log('Dados recebidos:', body);

      return contractAccountsResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async createUser(body) {
    try {
      const response = await axios.post(`${baseUrl}/user`, body, { headers: defaultHeaders });
      const contractAccountsResponse = response.data;

      console.log('Dados recebidos:', body);

      return contractAccountsResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },
});
