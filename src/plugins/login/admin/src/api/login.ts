import { request } from "@strapi/helper-plugin";

export const loginRequest = {
  login: async (body: any) => {
    return await request('/login/setLogin', {
      method: 'POST',
      body
    })
  },
// TODO aplicar o token para o resto

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
  loginAsAdmin: async (body: any, auth: any) => {
    return await request('/login/loginAsAdmin', {
      method: 'POST',
      body,
      headers: {
        authtoken: `Bearer ${auth}`
      }
    })
  },
}
