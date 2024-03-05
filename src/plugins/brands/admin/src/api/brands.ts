import { request } from "@strapi/helper-plugin";

export const brandsRequest = {
  getAllBrands: async () => {
    return await request('/brands/allBrands', {
      method: 'GET'
    })
  },

  setBrands: async (body: any) => {
    return await request('/brands/setBrands', {
      method: 'POST',
      body
    })
  },

  updateBrands: async (body: any, id: any) => {
    return await request(`/brands/updateBrands/${id}`, {
      method: 'PUT',
      body
    })
  },

  deleteBrands: async (id: any) => {
    return await request(`/brands/deleteBrands/${id}`, {
      method: 'DELETE'
    })
  }
}
