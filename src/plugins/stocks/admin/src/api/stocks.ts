import { request } from "@strapi/helper-plugin";

export const stocksRequest = {
  getAllStocks: async () => {
    return await request('/stocks/allStocks', {
      method: 'GET'
    })
  },

  getOneStocks: async (id: any) => {
    return await request(`/stocks/oneStocks/${id}`, {
      method: 'GET'
    })
  },

  getStocksByName: async (name: any) => {
    return await request(`/stocks/oneStocks/${name}`, {
      method: 'GET'
    })
  },

  setStocks: async (body: any) => {
    return await request('/stocks/setStocks', {
      method: 'POST',
      body
    })
  },

  updateStocks: async (body: any, id: any) => {
    return await request(`/stocks/setStocks/${id}`, {
      method: 'PUT',
      body
    })
  },

  activeStocks: async (body: any, id: any) => {
    return await request(`/stocks/setStocks/${id}`, {
      method: 'PATCH',
      body
    })
  },

  deleteStocks: async (id: any) => {
    return await request(`/stocks/deleteStocks/${id}`, {
      method: 'DELETE'
    })
  }
}
