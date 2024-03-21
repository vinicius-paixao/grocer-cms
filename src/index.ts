import axios from 'axios';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    console.log("STRAPI",  strapi.services.teste)
    strapi.services.teste = {
      async fetchProductsFromExternalAPI() {
        try {
          const response = await axios.get('https://grocers-io.azurewebsites.net/v1/products', {
            headers: {
              'content-type': 'application/json',
              accept: 'application/json',
              Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNzkwM2ViYy1lNjBhLTQyODctYTJjNi0zNjQyYmY3OTI0ZWUiLCJyb2xlIjoiT3duZXIiLCJuYmYiOjE3MTEwMzIzNzAsImV4cCI6MTcxMTExODc3MCwiaWF0IjoxNzExMDMyMzcwfQ.gx7RUHcIA12r6_GVZJ0YGVsW0776okqId2ENiE87OvU`,
            }
          });
          // return

          console.log(response.data.produtos)
        } catch (error) {
          console.error('Erro ao buscar produtos da API externa:', error);
          throw new Error('Erro ao buscar produtos da API externa.');
        }
      }
    };
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
