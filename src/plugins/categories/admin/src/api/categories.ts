import { request } from "@strapi/helper-plugin";

export const categoriesRequest = {
  getAllCategories: async () => {
    return await request('/categories/allCategories', {
      method: 'GET'
    })
  },

  setCategories: async (body: any) => {
    return await request('/categories/setCategories', {
      method: 'POST',
      body
    })
  },

  updateCategories: async (body: any, id: any) => {
    return await request(`/categories/updateCategories/${id}`, {
      method: 'PUT',
      body
    })
  },

  deleteCategories: async (id: any) => {
    return await request(`/categories/deleteCategories/${id}`, {
      method: 'DELETE'
    })
  }
}
