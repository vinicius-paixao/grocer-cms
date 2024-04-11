import { request } from "@strapi/helper-plugin";

export const productsRequest = {
  getAllProducts: async () => {
    return await request('/products/allProducts', {
      method: 'GET'
    })
  },

  getProduct: async (auth: any) => {
    return await request('/products/oneProduct/:id', {
      method: 'GET',
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },

  getProductByName: async (auth: any) => {
    return await request('/products/search/:name', {
      method: 'GET',
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },

  setProduct: async (body: any,auth: any) => {
    return await request('/products/productsCreate', {
      method: 'POST',
      body,
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },

  updateProduct: async (body: any, id: any, auth: any) => {
    return await request(`/products/productsUpdate/${id}`, {
      method: 'PUT',
      body,
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },

  updateFieldEnable: async (body: any, id: any, auth: any) => {
    return await request(`/products/updateFieldEnable/${id}`, {
      method: 'PATCH',
      body,
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },

  updateFieldDesable: async (body: any, id: any, auth: any) => {
    return await request(`/products/updateFieldDesable/${id}`, {
      method: 'PATCH',
      body,
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },

  deleteProduct: async (id: any, auth: any) => {
    return await request(`/products/deleteProduct/${id}`, {
      method: 'DELETE',
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  }
}
