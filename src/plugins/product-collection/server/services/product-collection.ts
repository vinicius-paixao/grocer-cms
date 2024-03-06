import { Strapi } from '@strapi/strapi';
import axios from 'axios';


const defaultHeaders = {
  'content-type': 'application/json',
  accept: 'application/json',
  Authorization: `bearer ${process.env.PLUGIN_TOKEN}`,
};

const baseUrl = 'https://grocers-io.azurewebsites.net/v1/products'

export default ({ strapi }: { strapi: Strapi }) => ({
  async findAll() {
    try {
      const response = await axios.get(`${baseUrl}`, { headers: defaultHeaders });
      const productCollectionResponse = response.data;

      return productCollectionResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async findOne(id) {
    try {
      const response = await axios.get(`${baseUrl}/${id}`, { headers: defaultHeaders });
      const productCollectionResponse = response.data;

      return productCollectionResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async findByName(name: string) {
    try {
      const response = await axios.get(`${baseUrl}/search?name=${name}`, { headers: defaultHeaders });
      const productCollectionResponse = response.data;

      return productCollectionResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async create(body) {
    try {
      const response = await axios.post(`${baseUrl}`, body, { headers: defaultHeaders });
      const productCollectionResponse = response.data;

      console.log('Dados recebidos:', body);

      return productCollectionResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async update(body, id) {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, body, { headers: defaultHeaders });
      const productCollectionResponse = response.data;
      console.log('update:', body);

      return productCollectionResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async updateFieldEnable(body, id) {
    try {
      const response = await axios.patch(`${baseUrl}/${id}`, body, { headers: defaultHeaders });
      const productCollectionResponse = response.data;
      console.log('update:', body);

      return productCollectionResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async updateFieldDesable(body, id) {
    try {
      const response = await axios.patch(`${baseUrl}/${id}`, body, { headers: defaultHeaders });
      const productCollectionResponse = response.data;
      console.log('update:', body);

      return productCollectionResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async delete(id: any) {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`, { headers: defaultHeaders });
      const productCollectionResponse = response.data;
      console.log('delete:', id);

      return productCollectionResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  }
});
