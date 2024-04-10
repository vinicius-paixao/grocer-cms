import { Strapi } from '@strapi/strapi';
import axios from 'axios';


const defaultHeaders = {
  'content-type': 'application/json',
  accept: 'application/json',
  // Authorization: `bearer ${process.env.PLUGIN_TOKEN}`,
  contractAccountId: '11c1fa10-1e44-4649-b681-c81f7554afab'
};

const baseUrl = 'https://grocers-io.azurewebsites.net/v1/users'

export default ({ strapi }: { strapi: Strapi }) => ({
  async findAll(auth: string) {
    try {
      const response = await axios.get(`${baseUrl}`, { headers: { ...defaultHeaders, Authorization: auth }});
      const usersResponse = response.data;

      return usersResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async findCurrentUser(auth: string) {
    try {
      const response = await axios.get(`${baseUrl}/me`, { headers: { ...defaultHeaders, Authorization: auth }});
      const usersResponse = response.data;

      return usersResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
      return { status, statusText }
    }
  },

  async update(body, auth: string) {
    try {
      const response = await axios.put(`${baseUrl}/me`, body, { headers: { ...defaultHeaders, Authorization: auth }});
      const usersResponse = response.data;
      console.log('update:', body);

      return usersResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async signup(body, auth: string) {
    try {
      const response = await axios.post(`${baseUrl}/signup`, body, { headers: { ...defaultHeaders, Authorization: auth }});
      const usersResponse = response.data;

      console.log('Dados recebidos:', body);

      return usersResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async checkEmail(body, auth: string) {
    try {
      const response = await axios.post(`${baseUrl}/check-email`, body, { headers: { ...defaultHeaders, Authorization: auth }});
      const usersResponse = response.data;

      console.log('Dados recebidos:', body);

      return usersResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async checkDocument(body, auth: string) {
    try {
      const response = await axios.post(`${baseUrl}/check-document`, body, { headers: { ...defaultHeaders, Authorization: auth }});
      const usersResponse = response.data;

      console.log('Dados recebidos:', body);

      return usersResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async checkPhone(body, auth: string) {
    try {
      const response = await axios.post(`${baseUrl}/check-phone`, body, { headers: { ...defaultHeaders, Authorization: auth }});
      const usersResponse = response.data;

      console.log('Dados recebidos:', body);

      return usersResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async passwrdReset(body, auth: string) {
    try {
      const response = await axios.post(`${baseUrl}/password-reset`, body, { headers: { ...defaultHeaders, Authorization: auth }});
      const usersResponse = response.data;

      console.log('Dados recebidos:', body);

      return usersResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async passwrdResetCode(body, auth: string) {
    try {
      const response = await axios.post(`${baseUrl}/password-reset/code`, body, { headers: { ...defaultHeaders, Authorization: auth }});
      const usersResponse = response.data;

      console.log('Dados recebidos:', body);

      return usersResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async passwrdRecovery(body, auth: string) {
    try {
      const response = await axios.patch(`${baseUrl}/password-reset`, body, { headers: { ...defaultHeaders, Authorization: auth }});
      const usersResponse = response.data;

      console.log('Dados recebidos:', body);

      return usersResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async passwrdChange(body, auth: string) {
    try {
      const response = await axios.patch(`${baseUrl}/password`, body, { headers: { ...defaultHeaders, Authorization: auth }});
      const usersResponse = response.data;

      console.log('Dados recebidos:', body);

      return usersResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },

  async userEdit(body, auth: string) {
    const id = body.id
    const token = body.token

    const newBody = {
      active: body.active,
      birthDate: body.birthDate,
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      phoneNumber: body.phoneNumber,
    }

    try {
      const response = await axios.put(`${baseUrl}/${id}`, newBody, { headers: { ...defaultHeaders, Authorization: `bearer ${token}` } });
      const usersResponse = response.data;

      console.log('Dados recebidos:', body);

      return usersResponse;
    } catch (error) {
      const { status, statusText } = error.response
      console.error('Ocorreu um erro ao tentar obter os dados:', { status, statusText });
    }
  },
});
