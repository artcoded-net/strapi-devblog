import NewLogo from "./extensions/logo.svg";
import Favicon from "./extensions/favicon.png";

const myPrimaryColor = "#2C97AD";

export default {
  config: {
    locales: ["it"],
    // translations: {
    //   it: {
    //     "app.components.LeftMenuLinkContainer.installNewPlugin": "Negozio",
    //   },
    // },
    auth: {
      logo: NewLogo,
    },
    menu: {
      logo: NewLogo,
    },
    head: {
      favicon: Favicon,
    },
    tutorials: false,
    theme: {
      colors: {
        buttonPrimary600: myPrimaryColor,
        primary600: myPrimaryColor,
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
