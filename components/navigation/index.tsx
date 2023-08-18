import React, { useEffect, useState } from "react";
import DesktopMenu from "./desktopNavigation";
import { dropdownMenu } from "@/jsondata/menu";
import MobileMenu from "./mobileNavigation";

export default function Navigation() {
  const [subMenu, setSubmenu] = useState("");
  const [mobileSubMenu, setMobileSubmenu] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [mobileMenu]);

  const handleSubMenu = (val: string) => {
    setSubmenu(val);
  };

  const handleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const handleDropDown = (e: any) => {
    const { title } = e.currentTarget;
    if (mobileSubMenu == title) {
      setMobileSubmenu("");
    } else {
      setMobileSubmenu(title);
    }
  };

  return (
    <div className="w-full h-full">
      {mobileMenu && (
        <>
          <div
            onClick={handleMobileMenu}
            style={{ backgroundColor: "rgba(0,0,0,.6)" }}
            className="fixed z-10 top-0 left-0 w-full h-full"
          ></div>
          <MobileMenu
            handleSubMenu={handleDropDown}
            menu_type={"MOBILE_MENU_3"}
            mobile_menu_active={mobileMenu}
            active={mobileSubMenu}
            data={dropdownMenu}
            social_link={[]}
            authentication_links={true}
            handleMobileMenu={handleMobileMenu}
          />
        </>
      )}

      {/* desktop menu */}
      <DesktopMenu
        authentication_links={true}
        social_link={[]}
        handleMobileMenu={handleMobileMenu}
        data={dropdownMenu}
        handleSubMenu={handleSubMenu}
        menu_type={"MENU2"}
        active={subMenu}
      />
    </div>
  );
}
