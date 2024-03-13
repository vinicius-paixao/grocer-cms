import { request } from "@strapi/helper-plugin";

export const salesChannelRequest = {
  getAllSalesChannel: async () => {
    return await request('/sales-channels/allSales-channels', {
      method: 'GET'
    })
  },

  getOneSalesChannel: async () => {
    return await request('/sales-channels/allSales-channels/:id', {
      method: 'GET'
    })
  },

  setSalesChannel: async (body: any) => {
    return await request('/sales-channels/setSales-channels', {
      method: 'POST',
      body
    })
  },
}
