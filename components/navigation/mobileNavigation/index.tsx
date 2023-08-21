import React from "react";
import { MenuItem } from "@/interface/Imenu";
import MobileMenu1 from "./mobileNav1";
import MobileMenu2 from "./mobileMenu2";
import MobileMenu3 from "./mobileMenu3";

type Props = {
  menu_type: string;
  active: string;
  handleSubMenu: (sub_menu_name: string) => void;
  data: any;
  mobile_menu_active: boolean;
  authentication_links: boolean;
  social_link: MenuItem | [];
  handleMobileMenu: () => void;
};

export default function MobileMenu({
  menu_type,
  active,
  data,
  social_link,
  mobile_menu_active,
  handleSubMenu,
  authentication_links,
  handleMobileMenu,
}: Props) {
  // text color
  const color = {
    para: "text-zinc-300",
    heading: "text-white",
  };

  switch (menu_type) {
    case "MOBILE_MENU_1":
      return (
        <MobileMenu1
          authentication_links={authentication_links}
          social_link={social_link}
          data={data}
          handleSubMenu={handleSubMenu}
          color={color}
          active={active}
          mobile_menu_active={mobile_menu_active}
          handleMobileMenu={handleMobileMenu}
        />
      );
    case "MOBILE_MENU_2":
      return (
        <MobileMenu2
          authentication_links={authentication_links}
          social_link={social_link}
          data={data}
          handleSubMenu={handleSubMenu}
          color={color}
          active={active}
          mobile_menu_active={mobile_menu_active}
          handleMobileMenu={handleMobileMenu}
        />
      );
    case "MOBILE_MENU_3":
      return (
        <MobileMenu3
          authentication_links={authentication_links}
          social_link={social_link}
          data={data}
          handleSubMenu={handleSubMenu}
          color={color}
          active={active}
          mobile_menu_active={mobile_menu_active}
          handleMobileMenu={handleMobileMenu}
        />
      );
    default:
      return;
  }
}
