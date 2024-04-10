import { request } from "@strapi/helper-plugin";

export const usersRequest = {
  allUsers: async (auth: any) => {
    return await request('/users/allUsers', {
      method: 'GET',
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },

  currentUser: async (auth: any) => {
    return await request('/users/currentUser', {
      method: 'GET',
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },

  signupUser: async (body: any, auth: any) => {
    return await request('/users/signupUser', {
      method: 'POST',
      body,
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },
  checkEmail: async (auth: any) => {
    return await request('/users/checkEmail', {
      method: 'POST',
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },
  checkDocument: async (auth: any) => {
    return await request('/users/checkDocument', {
      method: 'POST',
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },
  checkPhone: async (auth: any) => {
    return await request('/users/checkPhone', {
      method: 'POST',
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },
  passwrdReset: async (auth: any) => {
    return await request('/users/passwrdReset', {
      method: 'POST',
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },
  passwrdResetCode: async (auth: any) => {
    return await request('/users/passwrdResetCode', {
      method: 'POST',
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },
  passwrdRecovery: async (auth: any) => {
    return await request('/users/passwrdRecovery', {
      method: 'PATCH',
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },
  passwrdChange: async (auth: any) => {
    return await request('/users/passwrdChange', {
      method: 'PATCH',
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },

  updateusers: async (body: any, auth: any) => {
    return await request(`/users/updateUser`, {
      method: 'PUT',
      body,
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },
  userEdit: async (body: any, auth: any) => {
    return await request(`/users/userEdit`, {
      method: 'PUT',
      body,
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },
}
