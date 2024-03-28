export default [
  {
    method: 'GET',
    path: '/allUsers',
    handler: 'usersController.findAll',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/currentUser',
    handler: 'usersController.findCurrentUser',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/signupUser',
    handler: 'usersController.signup',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/checkEmail',
    handler: 'usersController.checkEmail',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/checkDocument',
    handler: 'usersController.checkDocument',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/checkPhone',
    handler: 'usersController.checkPhone',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/passwrdReset',
    handler: 'usersController.passwrdReset',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/passwrdResetCode',
    handler: 'usersController.passwrdResetCode',
    config: {
      policies: [],
    },
  },
  {
    method: 'PATCH',
    path: '/passwrdRecovery',
    handler: 'usersController.passwrdRecovery',
    config: {
      policies: [],
    },
  },
  {
    method: 'PATCH',
    path: '/passwrdChange',
    handler: 'usersController.passwrdChange',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/updateUser',
    handler: 'usersController.update',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/userEdit',
    handler: 'usersController.userEdit',
    config: {
      policies: [],
    },
  },
];
