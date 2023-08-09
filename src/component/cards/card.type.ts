import { ComponentPropsWithRef } from "react";
import { ButtonProps, ButtonTarget } from "../button/button.type";

export type CardRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';
export type CardShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type CardSize = 'sm' | 'base' | 'md' | 'lg';
export type ContentAlign = 'center' | 'left';



export interface ButtonPropsConfig extends ButtonProps {
   display?: boolean; 
}

export interface CardProps extends ComponentPropsWithRef<'div'> {
border_radius?: CardRadius;
animation?: string;
border?:{display?:boolean;border_color?:string,border_width:string};
sub_heading?:string;
heading?:string;
desc?:string;
image_src?:string;
image_alt?:string;
link?:{
display?:boolean;  
url:string; 
target?:ButtonTarget;
};
icon?:string;
button?:ButtonPropsConfig;
extra?:string;
align?:ContentAlign;
text_color?:string;
padding?:string;
color?: string;
shadow?: CardShadow;
}