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
      const productResponse = response.data;

      return productResponse;
    } catch (error) {
      const { status, title, detail } = error.response.data
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
      return { status, title, detail }
    }
  },

  async findOne(id: any, auth: any) {
    try {
      const response = await axios.get(`${baseUrl}/${id}`, { headers: { ...defaultHeaders, Authorization: auth } });
      const productResponse = response.data;

      return productResponse;
    } catch (error) {
      const { status, title, detail } = error.response.data
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
      return { status, title, detail }
    }
  },

  async findByName(name: string, auth: any) {
    try {
      const response = await axios.get(`${baseUrl}/search?name=${name}`, { headers: { ...defaultHeaders, Authorization: auth } });
      const productResponse = response.data;

      return productResponse;
    } catch (error) {
      const { status, title, detail } = error.response.data
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
      return { status, title, detail }
    }
  },

  async create(body: any, auth: any) {
    try {
      const response = await axios.post(`${baseUrl}`, body, { headers: { ...defaultHeaders, Authorization: auth } });
      const productResponse = response.data;

      console.log('Dados recebidos:', body);

      return productResponse;
    } catch (error) {
      const { status, title, detail } = error.response.data
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
      return { status, title, detail }
    }
  },

  async update(body: any, id: any, auth: any) {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, body, { headers: { ...defaultHeaders, Authorization: auth } });
      const productResponse = response.data;
      console.log('update:', body);

      return productResponse;
    } catch (error) {
      const { status, title, detail } = error.response.data
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
      return { status, title, detail }
    }
  },

  async updateFieldEnable(body: any, id: any, auth: any) {
    try {
      const response = await axios.patch(`${baseUrl}/${id}`, body, { headers: { ...defaultHeaders, Authorization: auth } });
      const productResponse = response.data;
      console.log('update:', body);

      return productResponse;
    } catch (error) {
      const { status, title, detail } = error.response.data
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
      return { status, title, detail }
    }
  },

  async updateFieldDesable(body: any, id: any, auth: any) {
    try {
      const response = await axios.patch(`${baseUrl}/${id}`, body, { headers: { ...defaultHeaders, Authorization: auth } });
      const productResponse = response.data;
      console.log('update:', body);

      return productResponse;
    } catch (error) {
      const { status, title, detail } = error.response.data
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
      return { status, title, detail }
    }
  },

  async delete(id: any, auth: any) {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`, { headers: { ...defaultHeaders, Authorization: auth } });
      const productResponse = response.data;
      console.log('delete:', id);

      return productResponse;
    } catch (error) {
      const { status, title, detail } = error.response.data
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, title, detail });
      return { status, title, detail }
    }
  }
});
