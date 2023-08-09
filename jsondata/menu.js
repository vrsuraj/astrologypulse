export const dropdownMenu = {
  style: "right",
  logo: "/imgs/astropulse.png",
  menu_links: [
    {
      title: "Free Personal Horoscope",
      id: "horoscope_landing",
    },
    {
      title: "astrology",
      sub_menu: [
        {
          title: "Birth Chart",
          id: "birth_chart",
        },
      ],
    },
    {
      title: "tarot",
      sub_menu: [
        {
          title: "Tarot Prediction",
          id: "tarot_prediction",
        },
        {
          title: "Yes No Tarot",
          id: "yes_no_tarot",
        },
        {
          title: "9 Spread Tarot",
          id: "9_spread_tarot",
        },
      ],
    },
    {
      title: "compatibility",
      sub_menu: [
        { title: "zodiac compatibility", id: "compatibiliy" },
        { title: "synastry chart", id: "synastry" },
      ],
    },

    // {
    //   title: "horoscope",
    //   id: "horoscope",
    //   sub_menu: [
    //     { title: "Daily Horoscope", id: "horoscope" },

    //     { title: "Monthly Horoscope", id: "monthly_horoscope" },
    //   ],
    // },

    {
      title: "numerology",
      id: "number",
      sub_menu: [
        { title: "Numerology Calculator", id: "number" },

        { title: "Life Path Number", id: "num_lifepath" },
        {
          title: "Personality Number",
          id: "num_personality",
        },
        {
          title: "Expression Number",
          id: "num_expression",
        },
      ],
    },
    {
      title: "blog",
      id: "blog",
    },
  ],
  social_links: [
    { id: "facebook", link: "/" },
    { id: "youtube", link: "/" },
    { id: "twitter", link: "/" },
  ],
};
