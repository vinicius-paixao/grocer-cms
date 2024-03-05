import { Strapi } from '@strapi/strapi';
import axios from 'axios';


const defaultHeaders = {
  'content-type': 'application/json',
  accept: 'application/json',
  Authorization: `bearer ${process.env.PLUGIN_TOKEN}`,
};

const baseUrl = 'https://grocers-io.azurewebsites.net/v1/categories'

export default ({ strapi }: { strapi: Strapi }) => ({
  async findAll() {
    try {
      const response = await axios.get(`${baseUrl}`, { headers: defaultHeaders });
      const categoriesResponse = response.data;

      return categoriesResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async create(body) {
    try {
      const response = await axios.post(`${baseUrl}`, body, { headers: defaultHeaders });
      const categoriesResponse = response.data;

      console.log('Dados recebidos:', body);

      return categoriesResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async update(body, id) {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, body, { headers: defaultHeaders });
      const categoriesResponse = response.data;
      console.log('update:', body);

      return categoriesResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async delete(id: any) {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`, { headers: defaultHeaders });
      const categoriesResponse = response.data;
      console.log('delete:', id);

      return categoriesResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  }
});
