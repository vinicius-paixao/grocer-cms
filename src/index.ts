// import axios from 'axios';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    console.log("STRAPI",  strapi.services.teste)
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // const produtos = strapi.services.teste.fetchProductsFromExternalAPI();
    // console.log('teste', produtos)
    /**
   * Lifecycle function for before creating a record
   */
  // async beforeCreate({ data }) {
  //     const produtos = await strapi.services.teste.fetchProductsFromExternalAPI();
  //     data.product = produtos;
  //   },

  // /**
  //  * Lifecycle function for before updating a record
  //  */
  // async beforeUpdate({ params, data }) {
  //     const produtos = await strapi.services.teste.fetchProductsFromExternalAPI();
  //     data.product = produtos;
  //   },
  // },
  }
};
