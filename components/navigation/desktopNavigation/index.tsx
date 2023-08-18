import React from "react";
import { MenuItem } from "@/interface/Imenu";
import RightNav from "./rightNav";
import NavigationType2 from "./navigationType2";

type Props = {
  menu_type: string;
  active: string;
  handleSubMenu: (sub_menu_name: string) => void;
  data: any;
  handleMobileMenu: () => void;
  authentication_links: boolean;
  social_link: MenuItem | [];
};

export default function DesktopMenu({
  menu_type,
  active,
  data,
  social_link,
  authentication_links,
  handleMobileMenu,
  handleSubMenu,
}: Props) {
  // text color
  const color = {
    para: "text-zinc-300",
    heading: "text-white",
  };

  switch (menu_type) {
    case "RIGHT":
      return (
        <RightNav
          authentication_links={authentication_links}
          social_link={social_link}
          data={data}
          handleSubMenu={handleSubMenu}
          color={color}
          active={active}
          handleMobileMenu={handleMobileMenu}
        />
      );
    case "MENU2":
      return (
        <NavigationType2
          authentication_links={authentication_links}
          social_link={social_link}
          data={data}
          handleSubMenu={handleSubMenu}
          color={color}
          active={active}
          handleMobileMenu={handleMobileMenu}
        />
      );
    default:
      return;
  }
}
