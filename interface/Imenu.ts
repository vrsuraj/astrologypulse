export type MenuProps = {
  data: any;
  handleSubMenu: (a: string) => void;
  color: {
    para: string;
    heading: string;
  };
  social_link?:MenuItem | [];
  active: string;
  authentication_links?:boolean;
  handleMobileMenu: () => void;
};

export type MenuItem = {
  name: string;
  type?: string;
  value?: string;
};

export interface  IMobileMenu {
  data: MenuProps;
  handleMobileMenu: () => void;
  mobile_menu_active: boolean;
};

export interface IMenu extends MenuItem {
  sub_menu?: [];
}