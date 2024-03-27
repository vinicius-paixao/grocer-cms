export default [
  {
    method: 'POST',
    path: '/setLogin',
    handler: 'loginController.login',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/email/send-code',
    handler: 'loginController.loginEmailCode',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/email',
    handler: 'loginController.loginEmail',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/sms/send-code',
    handler: 'loginController.loginSmsCode',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/sms',
    handler: 'loginController.loginSms',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/loginAsAdmin',
    handler: 'loginController.loginAsAdmin',
    config: {
      policies: [],
    },
  },
];
