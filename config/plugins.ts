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
  'products': {
    enabled: true,
    resolve: './src/plugins/products'
  },
  'sales-channels': {
    enabled: true,
    resolve: './src/plugins/sales-channels'
  },
  'stocks': {
    enabled: true,
    resolve: './src/plugins/stocks'
  },
  'users': {
    enabled: true,
    resolve: './src/plugins/users'
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
        'users-permissions.products': [],
        'users-permissions.sales-channels': [],
        'users-permissions.stocks': [],
        'users-permissions.users': [],
      },
    },
  },
});
