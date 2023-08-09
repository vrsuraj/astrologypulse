import { ComponentPropsWithRef } from "react";
import { ButtonPropsConfig, CardRadius, CardShadow, ContentAlign } from "../../cards/card.type";
import { ButtonTarget } from "../../button/button.type";


export interface HoroscopeCardProps extends ComponentPropsWithRef<'div'> {
border_radius?: CardRadius;
border?:{display?:boolean;border_color?:string};
sub_heading?:string;
// link?:{
// display?:boolean;  
// url:string; 
// target?:ButtonTarget;
// };
icon?:string;
button?:ButtonPropsConfig;
extra?:string;
align?:ContentAlign;
text_color?:string;
padding?:string;
color?: string;
shadow?: CardShadow;
}