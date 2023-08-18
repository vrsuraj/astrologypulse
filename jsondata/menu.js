export const dropdownMenu = {
  config: {
    style: {
      type: "right",
      value: "",
    },
  },
  logo: "https://purple-nebula.vercel.app/imgs/logo.svg",
  menu_links: [
    {
      name: "astrology",
      type: "SUB_MENU",
      sub_menu: [
        {
          name: "Dharmik Click karo",
          type: "LINK",
          value: "/transit-chart",
        },
      ],
    },
    {
      name: "reports",
      type: "SUB_MENU",
      value: "https://www.youtube.com",
      sub_menu: [
        {
          name: "Dharmik Page",
          type: "LINK",
          value: "/dharmik-page",
        },
        {
          name: "new page",
          type: "LINK",
          value: "new-test-page",
        },
      ],
    },

    {
      name: "blog",
      value: "/blog",
      type: "LINK",
    },
  ],
  social_links: [
    {
      name: "facebook",
      link: "/",
    },
  ],
  authentication_links: true,
};
