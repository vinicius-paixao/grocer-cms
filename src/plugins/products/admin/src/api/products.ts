import { request } from "@strapi/helper-plugin";

export const categoriesRequest = {
  getAllProducts: async () => {
    return await request('/products/allProducts', {
      method: 'GET'
    })
  },

  getProduct: async () => {
    return await request('/products/oneProduct/:id', {
      method: 'GET'
    })
  },

  getProductByName: async () => {
    return await request('/products/search/:name', {
      method: 'GET'
    })
  },

  setProduct: async (body: any) => {
    return await request('/products/productsCreate', {
      method: 'POST',
      body
    })
  },

  updateProduct: async (body: any, id: any) => {
    return await request(`/products/productsUpdate/${id}`, {
      method: 'PUT',
      body
    })
  },

  updateFieldEnable: async (body: any, id: any) => {
    return await request(`/products/updateFieldEnable/${id}`, {
      method: 'PATCH',
      body
    })
  },

  updateFieldDesable: async (body: any, id: any) => {
    return await request(`/products/updateFieldDesable/${id}`, {
      method: 'PATCH',
      body
    })
  },

  deleteProduct: async (id: any) => {
    return await request(`/products/deleteProduct/${id}`, {
      method: 'DELETE'
    })
  }
}
