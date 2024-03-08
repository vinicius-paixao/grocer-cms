import { request } from "@strapi/helper-plugin";

export const usersRequest = {
  allUsers: async () => {
    return await request('/users/allUsers', {
      method: 'GET'
    })
  },

  currentUser: async () => {
    return await request('/users/currentUser', {
      method: 'GET'
    })
  },

  signupUser: async () => {
    return await request('/users/signupUser', {
      method: 'POST'
    })
  },
  checkEmail: async () => {
    return await request('/users/checkEmail', {
      method: 'POST'
    })
  },
  checkDocument: async () => {
    return await request('/users/checkDocument', {
      method: 'POST'
    })
  },
  checkPhone: async () => {
    return await request('/users/checkPhone', {
      method: 'POST'
    })
  },
  passwrdReset: async () => {
    return await request('/users/passwrdReset', {
      method: 'POST'
    })
  },
  passwrdResetCode: async () => {
    return await request('/users/passwrdResetCode', {
      method: 'POST'
    })
  },
  passwrdRecovery: async () => {
    return await request('/users/passwrdRecovery', {
      method: 'PATCH'
    })
  },
  passwrdChange: async () => {
    return await request('/users/passwrdChange', {
      method: 'PATCH'
    })
  },

  updateusers: async (body: any, id: any) => {
    return await request(`/users/updateusers/${id}`, {
      method: 'PUT',
      body
    })
  },
}
