// import Icon from "./extensions/icon.png";
// import Logo from "./extensions/logo.svg";

export default {
  config: {
    locales: ["pt-BR"],
    auth: {
      // logo: Logo,
    },
    head: {
      // favicon: Icon,
    },
    translations: {
      'pt-BR': {
        "Auth.form.welcome.title": "Bem vindo ao Grocer!",
        "Auth.form.welcome.subtitle": "Entre com sua conta grocer",
        "app.components.LeftMenu.navbrand.title": "Grocer Dashboard",
      },
    },
    menu: {
      // logo: Icon,
    },
    theme: {
      light: {},
      dark: {
        colors: {
          primary100: "#030415",
          primary600: "#FF4466",
          primary700: "#FF4466",
          neutral0: "#0d102f",
          neutral100: "#030415",
        },
      },
    },
  },
  bootstrap() {},
};
