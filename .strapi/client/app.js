/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import publicPermissions from "strapi-plugin-public-permissions/strapi-admin";
import brands from "../../src/plugins/brands/strapi-admin";
import categories from "../../src/plugins/categories/strapi-admin";
import login from "../../src/plugins/login/strapi-admin";
import contractAccounts from "../../src/plugins/contract-accounts/strapi-admin";
import salesChannels from "../../src/plugins/sales-channels/strapi-admin";
import stocks from "../../src/plugins/stocks/strapi-admin";
import users from "../../src/plugins/users/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    "strapi-cloud": strapiCloud,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "public-permissions": publicPermissions,
    brands: brands,
    categories: categories,
    login: login,
    "contract-accounts": contractAccounts,
    "sales-channels": salesChannels,
    stocks: stocks,
    users: users,
  },
});
