import { request } from "@strapi/helper-plugin";

export const contractAccountsRequest = {
  getAllContracts: async () => {
    return await request('/contract-accounts/contract', {
      method: 'GET'
    })
  },

  getOneContract: async (id: any) => {
    return await request(`/contract-accounts/contract/${id}`, {
      method: 'GET'
    })
  },

  getUsers: async (id: any) => {
    return await request(`/contract-accounts/contract-users/${id}`, {
      method: 'GET'
    })
  },

  setContracts: async (body: any) => {
    return await request('/contract-accounts/contract-create', {
      method: 'POST',
      body
    })
  },
  setUsers: async (body: any) => {
    return await request('/contract-accounts/contract-createUsers', {
      method: 'POST',
      body
    })
  },
}
