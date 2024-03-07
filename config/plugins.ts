export default () => ({
  'brands': {
    enabled: true,
    resolve: './src/plugins/brands'
  },
  'categories': {
    enabled: true,
    resolve: './src/plugins/categories'
  },
  'login': {
    enabled: true,
    resolve: './src/plugins/login'
  },
  'contract-accounts': {
    enabled: true,
    resolve: './src/plugins/contract-accounts'
  },
  'sales-channels': {
    enabled: true,
    resolve: './src/plugins/sales-channels'
  },
  "public-permissions": {
    enabled: true,
    config: {
      verbose: true,
      actions: {
        "*": ["find", "findOne"],
      },
      plugins: {
        "users-permissions.auth": ["callback", "connect", "register"],
        "users-permissions.permissions": [],
        "users-permissions.role": [],
        "users-permissions.user": ["me"],
        'users-permissions.brands': [],
        'users-permissions.categories': [],
        'users-permissions.login': [],
        'users-permissions.contract-accounts': [],
        'users-permissions.sales-channels': [],
      },
    },
  },
});
