import { request } from "@strapi/helper-plugin";

export const loginRequest = {
  login: async (body: any) => {
    return await request('/login/setLogin', {
      method: 'POST',
      body
    })
  },
  emailCode: async (body: any) => {
    return await request('/login/email/send-code', {
      method: 'POST',
      body
    })
  },
  email: async (body: any) => {
    return await request('/login/email', {
      method: 'POST',
      body
    })
  },
  smsCode: async (body: any) => {
    return await request('/login/sms/send-code', {
      method: 'POST',
      body
    })
  },
  sms: async (body: any) => {
    return await request('/login/sms', {
      method: 'POST',
      body
    })
  },
}
