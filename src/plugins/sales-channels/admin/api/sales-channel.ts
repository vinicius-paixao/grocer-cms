import { request } from "@strapi/helper-plugin";

export const salesChannelRequest = {
  getAllSalesChannel: async () => {
    return await request('/brands/allSales-channels', {
      method: 'GET'
    })
  },

  getOneSalesChannel: async () => {
    return await request('/brands/allSales-channels/:id', {
      method: 'GET'
    })
  },

  setSalesChannel: async (body: any) => {
    return await request('/brands/setSales-channels', {
      method: 'POST',
      body
    })
  },
}
